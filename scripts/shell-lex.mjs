// A small Bash lexer for the agent hooks: it splits a command into the simple
// commands the shell would run, so a hook reads only a real invocation and
// not text that mentions one. Quotes are removed and never split, heredoc
// bodies and comments are skipped, each `$(…)` or backquote is a command of
// its own, and variables assigned earlier in the call are expanded. Where it
// cannot be sure (a loop variable, `cd -`, `pushd`) a word or the directory
// is unknown, never a wrong concrete value.
// ponytail: a lexer, not a parser; `case` patterns, `bash -c "…"` and
// aliases are misread. Swap in a real parser if a hook ever needs them.
import path from 'node:path'
import process from 'node:process'

const HOME = process.env.HOME ?? '/'
/** A `NAME=value` word. */
const ASSIGNMENT = /^[A-Z_a-z]\w*=/u
const ESCAPES = new Map(Object.entries({ n: '\n', r: '\r', t: '\t' }))
/** Words that can stand before the command name without being it. */
const PREFIXES = new Set(
  '! command do elif else exec if proxy rtk then time until while {'.split(' '),
)
const CD_OPTIONS = new Set(['-P', '-L', '-e', '-@', '--'])

/**
 * A shell word with its quotes removed.
 * @typedef {object} Word
 * @property {string} text The word as the shell passes it on.
 * @property {boolean} exact False when it holds a variable or a command
 *   substitution the lexer cannot expand.
 */
/**
 * One nesting level: the whole call, or a `$(…)` or backquote inside it.
 * @typedef {object} Frame
 * @property {Word[]} words The words of the simple command being read.
 * @property {Word | null} word The word being read.
 * @property {string} close The character that ends the level, empty for the
 *   whole call.
 * @property {number} depth How many bare `(` are open inside the level.
 * @property {boolean} quoted Whether a double quote is open.
 * @property {string | null} target What the word being read is: the file a
 *   redirection writes, one it reads, or an argument.
 */
/**
 * A simple command.
 * @typedef {object} Command
 * @property {Word[]} words Its words, the command name first.
 * @property {string | undefined} cwd The directory it runs in, undefined
 *   when a `cd` went somewhere the lexer cannot tell.
 */

// Each token the lexer knows and the method that handles it, tried in order.
const DOLLAR = [
  [/\$\(\(/uy, 'arithmetic'],
  [/\$\(/uy, 'openSubstitution'],
  [/\$\{(?<braced>\w+)\}|\$(?<name>[A-Z_a-z]\w*)/uy, 'variable'],
  [/\$\{[^}]*\}|\$[\d!#$*?@-]/uy, 'opaque'],
  [/`/uy, 'backquote'],
]
const QUOTED = [
  [/"/uy, 'closeQuote'],
  [/\\\n/uy, 'literal'],
  [/\\(?<text>[\\"$`])/uy, 'literal'],
  ...DOLLAR,
  [/(?<text>[^"\\$`]+|[$\\])/uy, 'literal'],
]
const PLAIN = [
  [/\\\n/uy, 'endWord'],
  [/\\(?<text>.)/uy, 'literal'],
  [/'(?<text>[^']*)'?/uy, 'literal'],
  [/\$'(?<text>(?:\\[\s\S]|[^'\\])*)'?/uy, 'ansi'],
  [/"/uy, 'openQuote'],
  ...DOLLAR,
  [/<<</uy, 'read'],
  [
    /<<(?<tabs>-?)[\t ]*(?:'(?<single>[^']*)'|"(?<double>[^"]*)"|\\?(?<bare>[^\s"&'();<>|-][^\s"&'();<>|]*))/uy,
    'heredoc',
  ],
  [/<<-?/uy, 'heredoc'],
  [/<&|>&|</uy, 'read'],
  [/&>>?|>>|>\||>/uy, 'write'],
  [/\n/uy, 'newline'],
  [/[\t ]+/uy, 'endWord'],
  [/&&|\|\||[&;|]/uy, 'endCommand'],
  [/\(/uy, 'openParen'],
  [/\)/uy, 'closeParen'],
  [/#/uy, 'hash'],
  [/(?<text>[^\s"#$&'();<>\\`|]+)/uy, 'bare'],
  [/(?<text>[\s\S])/uy, 'literal'],
]

/**
 * A fresh nesting level.
 * @param {string} close The character that ends it, empty for the call.
 * @returns {Frame} The level.
 */
const level = (close) => ({
  words: [],
  word: null,
  close,
  depth: 0,
  quoted: false,
  target: null,
})

/**
 * Where a word points, as an absolute path.
 * @param {Word} word A path as written.
 * @param {string | undefined} cwd The directory it is relative to.
 * @returns {string | undefined} The path, or undefined when it is unknown.
 */
export function resolved(word, cwd) {
  if (!word.exact || (cwd === undefined && !path.isAbsolute(word.text))) {
    return
  }

  // fallow-ignore-next-line security-sink -- a path the agent's own command names; following `..` is the point, and the hook only checks whether the file exists and reads it for its own label check
  return path.resolve(cwd ?? '/', word.text)
}

/**
 * Where the command name starts, past keywords, `rtk` and assignments.
 * @param {Word[]} words A simple command.
 * @returns {number} Its index, or -1 when every word is one of those.
 */
export const commandStart = (words) =>
  words.findIndex(({ text }) => !PREFIXES.has(text) && !ASSIGNMENT.test(text))

/** Reads one call, token by token. */
class Lexer {
  /** @type {Command[]} */
  commands = []
  /** @type {Frame[]} */
  frames = [level('')]
  /** @type {{ delimiter: string | undefined, tabs: boolean }[]} */
  heredocs = []
  i = 0
  /** @type {{ cwd: string | undefined, vars: Map<string, string> }[]} */
  scopes = []
  /** @type {(string | undefined)[]} */
  writes = []

  /**
   * @param {string} text The shell command.
   * @param {string | undefined} cwd The directory it starts in.
   */
  constructor(text, cwd) {
    this.text = text
    /** @type {string | undefined} */
    this.cwd = cwd
    /** @type {Map<string, string>} */
    this.vars = new Map(
      Object.entries(process.env).filter(
        ([key, value]) => value !== undefined && !key.endsWith('PWD'),
      ),
    )
  }

  /** @returns {Frame} The innermost open level. */
  get top() {
    return /** @type {Frame} */ (this.frames.at(-1))
  }

  /** Reads the whole call. */
  run() {
    while (this.i < this.text.length) {
      this.step()
    }
    while (this.frames.length > 1) {
      this.closeSubstitution()
    }
    this.endCommand()
  }

  /** Reads the next token. */
  step() {
    const rules = this.top.quoted ? QUOTED : PLAIN
    for (const [pattern, method] of rules) {
      pattern.lastIndex = this.i
      const match = pattern.exec(this.text)
      if (match !== null) {
        this.i += match[0].length
        this[method](match.groups ?? {})

        return
      }
    }
  }

  /**
   * Adds text to the word being read.
   * @param {string} text The text, quotes removed.
   * @param {boolean} exact Whether it is the text the shell will see.
   */
  append(text, exact = true) {
    const { top } = this
    top.word ??= { text: '', exact: true }
    top.word.text += text
    top.word.exact &&= exact
  }

  /** @param {{ text?: string }} groups The literal text. */
  literal({ text = '' }) {
    this.append(text)
  }

  /** @param {{ text?: string }} groups `$'…'`, its escapes decoded. */
  ansi({ text = '' }) {
    this.append(
      text.replaceAll(
        /\\(?<char>[\s\S])/gu,
        (_, char) => ESCAPES.get(char) ?? char,
      ),
    )
  }

  /** @param {{ text?: string }} groups An unquoted run, `~` expanded. */
  bare({ text = '' }) {
    if (this.top.word !== null) {
      this.append(text)

      return
    }
    const name = ASSIGNMENT.exec(text)?.[0] ?? ''
    const value = text.slice(name.length)
    this.append(
      /^~(?:\/|$)/u.test(value) ? `${name}${HOME}${value.slice(1)}` : text,
    )
  }

  /** @param {{ braced?: string, name?: string }} groups The variable. */
  variable({ braced, name }) {
    const key = braced ?? name ?? ''
    const value = key === 'PWD' ? this.cwd : this.vars.get(key)
    this.append(value ?? `$${key}`, value !== undefined)
  }

  /** A special parameter or an expansion with an operator. */
  opaque() {
    this.append('', false)
  }

  /** `$((…))`: a number, never a command or a heredoc. */
  arithmetic() {
    const end = this.text.indexOf('))', this.i)
    this.i = end === -1 ? this.text.length : end + 2
    this.opaque()
  }

  /** Enters a double-quoted string. */
  openQuote() {
    this.append('')
    this.top.quoted = true
  }

  /** Leaves a double-quoted string. */
  closeQuote() {
    this.top.quoted = false
  }

  /** Saves the directory and variables a subshell may change. */
  enter() {
    this.scopes.push({ cwd: this.cwd, vars: new Map(this.vars) })
  }

  /** Restores the directory and variables from before the subshell. */
  leave() {
    const { cwd, vars } = this.scopes.pop() ?? this
    this.cwd = cwd
    this.vars = vars
  }

  /** `$(`: the word holds the output of a command of its own. */
  openSubstitution() {
    this.append('', false)
    this.frames.push(level(')'))
    this.enter()
  }

  /** A backquote opens a substitution or closes the one it opened. */
  backquote() {
    if (this.top.close === '`') {
      this.closeSubstitution()
    } else {
      this.append('', false)
      this.frames.push(level('`'))
      this.enter()
    }
  }

  /** Ends the innermost substitution. */
  closeSubstitution() {
    this.endCommand()
    this.frames.pop()
    this.leave()
  }

  /** A bare `(` starts a subshell. */
  openParen() {
    this.endCommand()
    this.top.depth += 1
    this.enter()
  }

  /** A bare `)` ends a subshell or the substitution. */
  closeParen() {
    const { top } = this
    if (top.close === ')' && top.depth === 0) {
      this.closeSubstitution()

      return
    }
    this.endCommand()
    if (top.depth === 0) {
      return
    }
    top.depth -= 1
    this.leave()
  }

  /** A comment at the start of a word runs to the end of the line. */
  hash() {
    if (this.top.word !== null) {
      this.append('#')

      return
    }
    const end = this.text.indexOf('\n', this.i)
    this.i = end === -1 ? this.text.length : end
  }

  /** The next word is a file the command reads, or a descriptor. */
  read() {
    this.redirect('read')
  }

  /** The next word is a file the command writes. */
  write() {
    this.redirect('write')
  }

  /** @param {string} target What the next word is. */
  redirect(target) {
    const { top } = this
    if (top.word !== null && /^\d+$/u.test(top.word.text)) {
      top.word = null
    }
    this.endWord()
    top.target = target
  }

  /**
   * A heredoc's delimiter is taken literally, as Bash does. Without one, its
   * body runs to the end of the call, so it is never read as commands.
   * @param {{ tabs?: string, single?: string, double?: string, bare?: string }} groups The delimiter.
   */
  heredoc({ tabs, single, double, bare }) {
    const delimiter = single ?? double ?? bare
    this.heredocs.push({ delimiter, tabs: tabs === '-' })
  }

  /** Ends the line, then skips the heredoc bodies opened on it. */
  newline() {
    this.endCommand()
    for (const heredoc of this.heredocs.splice(0)) {
      this.skipHeredoc(heredoc)
    }
  }

  /** @param {{ delimiter: string | undefined, tabs: boolean }} heredoc Its last line. */
  skipHeredoc({ delimiter, tabs }) {
    let line = ''
    while (line !== delimiter && this.i < this.text.length) {
      const end = this.text.indexOf('\n', this.i)
      const stop = end === -1 ? this.text.length : end
      line = this.text.slice(this.i, stop)
      line = tabs ? line.replace(/^\t+/u, '') : line
      this.i = stop + 1
    }
  }

  /** Ends the word being read: an argument, or a redirection's target. */
  endWord() {
    const { top } = this
    const { target, word } = top
    if (word === null) {
      return
    }
    top.word = null
    top.target = null
    if (target === 'write') {
      this.writes.push(resolved(word, this.cwd))
    } else if (target === null) {
      top.words.push(word)
    }
  }

  /** Ends the simple command being read. */
  endCommand() {
    this.endWord()
    const { top } = this
    const { words } = top
    top.words = []
    top.target = null
    if (words.length === 0) {
      return
    }
    this.commands.push({ words, cwd: this.cwd })
    this.follow(words)
  }

  /** @param {Word[]} words A command that may change the directory or a variable. */
  follow(words) {
    const start = commandStart(words)
    const [name, ...rest] = start === -1 ? [] : words.slice(start)
    if (name === undefined || name.text === 'export') {
      this.assign(name === undefined ? words : rest)
    } else if (['cd', 'popd', 'pushd'].includes(name.text)) {
      this.cd(name.text, rest)
    }
  }

  /** @param {Word[]} words Words, the `NAME=value` ones among them assigned. */
  assign(words) {
    for (const { exact, text } of words) {
      const [key = ''] = text.split('=', 1)
      if (!ASSIGNMENT.test(text)) {
        continue
      }
      if (exact) {
        this.vars.set(key, text.slice(key.length + 1))
      } else {
        this.vars.delete(key)
      }
    }
  }

  /**
   * Follows `cd`; `cd -`, `pushd` and `popd` leave the directory unknown.
   * @param {string} name The command.
   * @param {Word[]} args Its arguments.
   */
  cd(name, args) {
    const where = args.find(({ text }) => !CD_OPTIONS.has(text))
    if (name !== 'cd' || where?.text === '-') {
      this.cwd = undefined
    } else {
      this.cwd = where === undefined ? HOME : resolved(where, this.cwd)
    }
  }
}

/**
 * Splits a shell command into the simple commands the shell would run.
 * @param {string} text The shell command.
 * @param {string | undefined} cwd The directory it starts in.
 * @returns {{ commands: Command[], writes: (string | undefined)[] }} The
 *   commands, and the files they redirect into (undefined for one the lexer
 *   cannot expand).
 */
export function lex(text, cwd) {
  const lexer = new Lexer(text, cwd)
  lexer.run()

  return { commands: lexer.commands, writes: lexer.writes }
}
