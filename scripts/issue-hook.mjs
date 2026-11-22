// The Claude Code PreToolUse hook on Bash (`.claude/settings.json`): a
// `gh issue create` without one label per group in `.github/labels.json` is
// refused, so every issue an agent opens can be queried by the next one.
// Exit 2 blocks the call and hands stderr back to the agent.
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import labels from '../.github/labels.json' with { type: 'json' }
import { isMain } from './is-main.mjs'
import { lex, resolved } from './shell-lex.mjs'

/** @typedef {import('./shell-lex.mjs').Word} Word */
/** @typedef {import('./shell-lex.mjs').Command} Command */

/** The groups every issue carries exactly one label of. */
const GROUPS = ['type', 'area', 'status', 'priority', 'size']

/** Every label the repository defines. */
const KNOWN = new Set(labels.map((label) => label.name))

/** Words that can stand before the command name without being it. */
const PREFIXES = new Set([
  '!',
  'command',
  'do',
  'elif',
  'else',
  'exec',
  'if',
  'proxy',
  'rtk',
  'then',
  'time',
  'until',
  'while',
  '{',
])
const ASSIGNMENT = /^[A-Z_a-z]\w*=/u
const LABEL = new Set(['--label', '-l'])
const BODY_FILE = new Set(['--body-file', '-F'])
const HELP = new Set(['--help', '-h'])

/**
 * The arguments after `gh issue create`, when the command is one; `gh` may be
 * a full path or follow `rtk`, a keyword or a variable assignment.
 * @param {Command} command A simple command.
 * @returns {Word[] | undefined} The arguments, or undefined for any other
 *   command.
 */
function createArguments({ words }) {
  const start = words.findIndex(
    ({ text }) => !PREFIXES.has(text) && !ASSIGNMENT.test(text),
  )
  const [gh = '', issue, create] = words
    .slice(start, start + 3)
    .map(({ text }) => text)

  return (
      issue === 'issue' && create === 'create' && path.basename(gh) === 'gh'
    ) ?
      words.slice(start + 3)
    : undefined
}

/**
 * Every flag with its value: the next word, or the text after `=`.
 * @param {Word[]} words The arguments of `gh issue create`.
 * @returns {[string, Word | undefined][]} Flag and value pairs, in order.
 */
function options(words) {
  return words.map((word, index) => {
    const [flag = '', ...rest] = word.text.split('=')
    const value =
      rest.length > 0 ?
        { text: rest.join('='), exact: word.exact }
      : words[index + 1]

    return [flag, value]
  })
}

/**
 * The text that holds the body: the `--body-file` when the hook can find it,
 * else the whole call, which carries an inline `--body`, a heredoc, or the
 * text written into a file this same call creates. A path the hook cannot
 * expand (a loop variable) reads the call too.
 * @param {Word | undefined} file The `--body-file` value.
 * @param {string | undefined} cwd The directory `gh` runs in.
 * @param {{ text: string, writes: (string | undefined)[] }} call The whole
 *   call and the files it writes.
 * @returns {string | undefined} The text, or undefined when the file is
 *   missing and nothing in the call writes it.
 */
function bodyOf(file, cwd, call) {
  const where =
    file === undefined || file.text === '-' ? undefined : resolved(file, cwd)
  if (where === undefined) {
    return call.text
  }
  if (existsSync(where)) {
    return readFileSync(where, 'utf8')
  }

  return call.writes.includes(where) || call.writes.includes(undefined) ?
      call.text
    : undefined
}

/**
 * Why a set of labels is refused; empty when it is accepted.
 * @param {string[]} given The labels on the new issue.
 * @param {string | undefined} body The issue body, undefined when unknown.
 * @returns {string[]} One line per problem.
 */
export function problems(given, body) {
  const unknown = given
    .filter((label) => !KNOWN.has(label))
    .map((label) => `unknown label "${label}"`)
  const groups = GROUPS.map((group) => {
    const count = given.filter((label) => label.startsWith(`${group}:`)).length
    if (count > 1) {
      return `more than one ${group}: label`
    }
    if (count === 0 && (group !== 'size' || !given.includes('type:epic'))) {
      return `no ${group}: label`
    }

    return ''
  }).filter((problem) => problem !== '')
  const blocked =
    (
      body !== undefined
      && given.includes('status:blocked')
      && !/^Unblocks at:/mu.test(body)
    ) ?
      [
        'status:blocked needs an "Unblocks at: ch. N" or "Unblocks at: #N" line in the body',
      ]
    : []

  return [...unknown, ...groups, ...blocked]
}

/**
 * Why one `gh issue create` is refused; asking for help creates none.
 * @param {Word[]} words Its arguments.
 * @param {string | undefined} cwd The directory it runs in.
 * @param {{ text: string, writes: (string | undefined)[] }} call The whole
 *   call and the files it writes.
 * @returns {string[]} One line per problem.
 */
function refusals(words, cwd, call) {
  const pairs = options(words)
  if (pairs.some(([flag]) => HELP.has(flag))) {
    return []
  }
  const given = pairs
    .filter(([flag]) => LABEL.has(flag))
    .flatMap(([, value]) => (value?.text ?? '').split(','))
    .map((label) => label.trim())
    .filter((label) => label !== '')
  const file = pairs.findLast(([flag]) => BODY_FILE.has(flag))?.[1]
  const body = bodyOf(file, cwd, call)
  const missing =
    body === undefined && file !== undefined ?
      [`body file not found: ${resolved(file, cwd) ?? file.text}`]
    : []

  return [...missing, ...problems(given, body)]
}

/**
 * Why each `gh issue create` the shell would run is refused. Text that only
 * mentions the command (a quoted string, a heredoc body, a comment) runs
 * nothing, and each create is read on its own.
 * @param {string} text The shell command.
 * @param {string | undefined} cwd The directory it starts in.
 * @returns {string[]} One line per problem, empty when every create passes.
 */
export function check(text, cwd) {
  if (!/issue\s+create/u.test(text)) {
    return []
  }
  const { commands, writes } = lex(text, cwd)

  return commands.flatMap((command) => {
    const words = createArguments(command)

    return words === undefined ?
        []
      : refusals(words, command.cwd, { text, writes })
  })
}

if (isMain(import.meta)) {
  const input = JSON.parse(readFileSync(process.stdin.fd, 'utf8'))
  const found = check(
    String(input.tool_input?.command ?? ''),
    input.cwd ?? process.cwd(),
  )
  if (found.length > 0) {
    process.stderr.write(
      `gh issue create refused:\n- ${found.join('\n- ')}\nEvery issue takes one type:, area:, status:, priority: and size: label (no size: on a type:epic). Load the issues skill for what each one means.\n`,
    )
    process.exitCode = 2
  }
}
