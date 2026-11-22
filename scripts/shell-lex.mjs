// A small Bash lexer for the agent hooks: it splits a command into the simple
// commands the shell would run, so a hook reads only a real invocation and
// not text that mentions one. Quotes are removed and never split, heredoc
// bodies and comments are skipped, each `$(…)` or backquote is a command of
// its own, and variables assigned earlier in the call are expanded.
// ponytail: a lexer, not a parser; `case` patterns, `bash -c "…"` and
// aliases are misread. Swap in a real parser if a hook ever needs them.
import path from 'node:path'
import process from 'node:process'

const HOME = process.env.HOME ?? '/'
const ASSIGNMENT = /^[A-Z_a-z]\w*=/u

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
  [/"/uy, 'openQuote'],
  ...DOLLAR,
  [/<<</uy, 'read'],
  [
    /<<(?<tabs>-?)[\t ]*\\?(?<quote>["']?)(?<delimiter>\w[\w.@-]*)\k<quote>/uy,
    'heredoc',
  ],
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

  return path.resolve(cwd ?? '/', word.text)
}

/** Reads one call, token by token. */
class Lexer {
  /** @type {Command[]} */
  commands = []
  /** @type {Frame[]} */
  frames = [level('')]
  /** @type {{ delimiter: string, tabs: boolean }[]} */
  heredocs = []
  i = 0
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
      Object.entries(process.env).filter(([, value]) => value !== undefined),
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

  /** @param {{ text?: string }} groups An unquoted run, `~` expanded. */
  bare({ text = '' }) {
    const home = this.top.word === null && /^~(?:\/|$)/u.test(text)
    this.append(home ? HOME + text.slice(1) : text)
  }

  /** @param {{ braced?: string, name?: string }} groups The variable. */
  variable({ braced, name }) {
    const key = braced ?? name ?? ''
    const value = this.vars.get(key)
    this.append(value ?? `$${key}`, value !== undefined)
  }

  /** A special parameter or an expansion with an operator. */
  opaque() {
    this.append('', false)
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

  /** `$(`: the word holds the output of a command of its own. */
  openSubstitution() {
    this.append('', false)
    this.frames.push(level(')'))
  }

  /** A backquote opens a substitution or closes the one it opened. */
  backquote() {
    if (this.top.close === '`') {
      this.closeSubstitution()
    } else {
      this.append('', false)
      this.frames.push(level('`'))
    }
  }

  /** Ends the innermost substitution. */
  closeSubstitution() {
    this.endCommand()
    this.frames.pop()
  }

  /** A bare `(` starts a subshell. */
  openParen() {
    this.top.depth += 1
    this.endCommand()
  }

  /** A bare `)` ends a subshell or the substitution. */
  closeParen() {
    const { top } = this
    if (top.close === ')' && top.depth === 0) {
      this.closeSubstitution()

      return
    }
    top.depth = Math.max(0, top.depth - 1)
    this.endCommand()
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

  /** @param {{ tabs?: string, delimiter?: string }} groups The delimiter. */
  heredoc({ tabs, delimiter = '' }) {
    this.heredocs.push({ delimiter, tabs: tabs === '-' })
  }

  /** Ends the line, then skips the heredoc bodies opened on it. */
  newline() {
    this.endCommand()
    for (const heredoc of this.heredocs.splice(0)) {
      this.skipHeredoc(heredoc)
    }
  }

  /** @param {{ delimiter: string, tabs: boolean }} heredoc Its last line. */
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
    const [name, where] = words
    if (name?.text === 'cd') {
      this.cd(where)

      return
    }
    const assigned = name?.text === 'export' ? words.slice(1) : words
    if (assigned.every(({ text }) => ASSIGNMENT.test(text))) {
      for (const word of assigned) {
        this.assign(word)
      }
    }
  }

  /** @param {Word} word A `NAME=value` word. */
  assign({ exact, text }) {
    const [key = ''] = text.split('=', 1)
    if (exact) {
      this.vars.set(key, text.slice(key.length + 1))
    } else {
      this.vars.delete(key)
    }
  }

  /** @param {Word | undefined} where Where `cd` goes. */
  cd(where) {
    if (where === undefined) {
      this.cwd = HOME
    } else {
      this.cwd = where.text === '-' ? undefined : resolved(where, this.cwd)
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
