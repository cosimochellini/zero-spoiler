// Payload parity for a refactor that should change nothing: the archive dump
// (`scripts/archive-dump.mjs`) of the base and of this checkout, piped and
// read line by line in step, so nothing is written to disk but the base's
// worktree. Prints how many lines of each payload are identical and differ,
// with one sample per changed payload:
//   npm run archive:parity -- --series game-of-thrones
// Flags, after `--`:
//   --base <ref>        the base, `git merge-base origin/main HEAD` by
//                       default; a detached worktree of it is made in
//                       `$TMPDIR/archive-parity-*/base`, set up with `npm ci`,
//                       and removed at the end, on an error or a signal too.
//                       Only a SIGKILL of this process leaves it: remove it
//                       with `git worktree remove --force <that path>`;
//   --base-dir <path>   an existing worktree of the base, used as it is;
//   --series, --skip, --bookmarks   passed to both dumps.
// Exit 0 when the dumps are identical, 1 when they differ or fall out of
// step, 2 for a wrong flag, a failed setup, a dump that fails, two empty
// dumps, or SIGINT, SIGTERM or SIGHUP (the base is removed first).
import { execFileSync, spawn } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { parseArgs } from 'node:util'

import { ROOT } from './archive-loader.mjs'
import { isMain } from './is-main.mjs'

/** How much of each side a sample shows around the first difference. */
const SAMPLE = 60

/**
 * The flags of one comparison.
 * @param {string[]} args The command line after the script.
 * @returns {{ base: string | undefined, baseDir: string | undefined, dump: string[] }} The base ref, the base worktree and the dump's own flags.
 */
export function parityArgs(args) {
  const { values } = parseArgs({
    args,
    options: {
      'base': { type: 'string' },
      'base-dir': { type: 'string' },
      'series': { type: 'string' },
      'skip': { type: 'string', multiple: true, default: [] },
      'bookmarks': { type: 'string' },
    },
  })
  if (values.base !== undefined && values['base-dir'] !== undefined) {
    throw new Error('--base and --base-dir both name the base; pass one')
  }
  const series = values.series === undefined ? [] : ['--series', values.series]
  // The base's dump runs in its own folder, so the file needs a full path.
  const bookmarks =
    values.bookmarks === undefined ?
      []
      // fallow-ignore-next-line security-sink -- a file named on the developer's own command line, read only by the dump.
    : ['--bookmarks', path.resolve(values.bookmarks)]

  return {
    base: values.base,
    // fallow-ignore-next-line security-sink -- a worktree named on the developer's own command line.
    baseDir: values['base-dir'] && path.resolve(values['base-dir']),
    dump: [
      ...series,
      ...values.skip.flatMap((name) => ['--skip', name]),
      ...bookmarks,
    ],
  }
}

/**
 * What places a dump line: its payload's name and everything before the
 * payload, or the episode of a table line. Only these must match on both
 * sides; the rest is what the comparison is about.
 * @param {string} line One line of a dump.
 * @returns {{ name: string, place: string }} The payload's name and the line's place.
 */
function placeOf(line) {
  if (line.startsWith('{"table":')) {
    return { name: 'table', place: line.slice(0, line.indexOf(',')) }
  }
  const place = line.slice(0, line.indexOf(',"payload":'))
  const from = '{"name":"'.length

  return { name: line.slice(from, line.indexOf('"', from)), place: `${place}}` }
}

/**
 * Both sides around their first difference, cut to a readable length.
 * @param {string} base The base's line.
 * @param {string} head The head's line.
 * @returns {string} The sample, one side a line.
 */
function sampleOf(base, head) {
  let at = 0
  while (base[at] === head[at]) {
    at += 1
  }
  const cut = (line) =>
    `${at > SAMPLE ? '…' : ''}${line.slice(Math.max(0, at - SAMPLE), at + SAMPLE)}${line.length > at + SAMPLE ? '…' : ''}`

  return `    at ${placeOf(base).place}\n    base ${cut(base)}\n    head ${cut(head)}`
}

/**
 * One count per payload, in the order the dump writes them.
 * @typedef {{ same: number, changed: number, sample?: string }} Count
 */

/**
 * Counts one pair of lines with the same place.
 * @param {Map<string, Count>} counts The counts so far.
 * @param {string} base The base's line.
 * @param {string} head The head's line.
 * @returns {void}
 */
function count(counts, base, head) {
  const { name } = placeOf(base)
  const counted = counts.get(name) ?? { same: 0, changed: 0 }
  counts.set(name, counted)
  if (base === head) {
    counted.same += 1
    return
  }
  counted.changed += 1
  counted.sample ??= sampleOf(base, head)
}

/**
 * Why two sides fell out of step at a line, or `undefined` when they did not.
 * @param {number} line The line's number.
 * @param {IteratorResult<string>} base The base's line.
 * @param {IteratorResult<string>} head The head's line.
 * @returns {string | undefined} The reason.
 */
function stepOf(line, base, head) {
  if (base.done === true || head.done === true) {
    const [ended, other] =
      base.done === true ? ['base', 'head'] : ['head', 'base']

    return base.done === head.done ?
        undefined
      : `the ${ended} ends at line ${String(line)}, where the ${other} goes on`
  }
  const [from, to] = [placeOf(base.value).place, placeOf(head.value).place]

  return from === to ? undefined : (
      `line ${String(line)} is ${from} in the base and ${to} in the head`
    )
}

/**
 * The lines of a stream, split on `\n` alone and each with its `\n`, so a
 * `\r` or a missing last newline is a difference too.
 * @param {AsyncIterable<string>} chunks The stream's text.
 * @yields {string} One line.
 */
export async function* linesOf(chunks) {
  let rest = ''
  for await (const chunk of chunks) {
    // A long line comes in many chunks: split only once its end is here.
    if (!chunk.includes('\n')) {
      rest += chunk
      continue
    }
    const lines = `${rest}${chunk}`.split('\n')
    rest = lines.pop() ?? ''
    for (const line of lines) {
      yield `${line}\n`
    }
  }
  if (rest !== '') {
    yield rest
  }
}

/**
 * Reads two dumps in step and counts each payload's identical and changed
 * lines. It stops at the first line where the two sides are not at the same
 * place, since every line after it would differ.
 * @param {AsyncIterable<string>} base The base's lines.
 * @param {AsyncIterable<string>} head The head's lines.
 * @returns {Promise<{ counts: Map<string, Count>, misstep: string | undefined }>} The counts, and why the sides fell out of step, if they did.
 */
export async function compareDumps(base, head) {
  const sides = [base, head].map((lines) => lines[Symbol.asyncIterator]())
  const counts = new Map()
  for (let line = 1; ; line += 1) {
    // In step: one line of each side at a time, so neither is held in memory.
    const [from, to] = await Promise.all(sides.map((side) => side.next()))
    const misstep = stepOf(line, from, to)
    if (misstep !== undefined || from.done === true) {
      return { counts, misstep }
    }
    count(counts, from.value, to.value)
  }
}

/**
 * The report of a comparison, one payload a line.
 * @param {{ counts: Map<string, Count>, misstep: string | undefined }} result The comparison.
 * @returns {string} The report.
 */
export function reportOf({ counts, misstep }) {
  const lines = [...counts].map(([name, { same, changed, sample }]) =>
    changed === 0 ?
      `${name}: ${String(same)} identical`
    : `${name}: ${String(same)} identical, ${String(changed)} different\n${sample}`,
  )
  if (misstep !== undefined) {
    lines.push(`Out of step: ${misstep}. Nothing after it was compared.`)
  }
  if (misstep === undefined && counts.size === 0) {
    lines.push('No lines compared: both dumps were empty.')
  }

  return lines.join('\n')
}

/**
 * The exit code of a comparison: 0 when every line is identical, 1 when
 * any differs, and 2 when there was no line to compare.
 * @param {{ counts: Map<string, Count>, misstep: string | undefined }} result The comparison.
 * @returns {0 | 1 | 2} The code.
 */
export function exitOf({ counts, misstep }) {
  if (misstep === undefined && counts.size === 0) {
    return 2
  }
  const same =
    misstep === undefined
    && counts.values().every(({ changed }) => changed === 0)

  return same ? 0 : 1
}

/**
 * Why a dump failed, or `undefined` when it did not: any end but 0 fails,
 * except the SIGKILL this script sent. A SIGTERM always fails, since this
 * script never sends one to a dump.
 * @param {{ code: number | null, signal: string | null, error?: string }} end How it ended.
 * @param {boolean} stopped Whether this script stopped it.
 * @returns {string | undefined} The reason.
 */
export function failureOf({ code, signal, error }, stopped) {
  const fine = code === 0 || (stopped && signal === 'SIGKILL')
  const why =
    error
    ?? (signal === null ? `exited ${String(code)}` : `killed by ${signal}`)

  return fine ? undefined : why
}

/**
 * The children of this run, the signal that stopped it, if one did, and the
 * base worktree it made, if it made one.
 */
const RUN = {
  /** @type {string | undefined} */
  base: undefined,
  /** @type {Set<import('node:child_process').ChildProcess>} */
  children: new Set(),
  /** @type {string | undefined} */
  signal: undefined,
}

/**
 * How a child ends, kept among the run's children until then.
 * @param {import('node:child_process').ChildProcess} child The child.
 * @returns {Promise<{ code: number | null, signal: string | null, error?: string }>} Its exit code and signal; -1 and the error when it never started.
 */
function ended(child) {
  RUN.children.add(child)

  return new Promise((resolve) => {
    child.on('error', (error) => {
      RUN.children.delete(child)
      resolve({ code: -1, signal: null, error: error.message })
    })
    child.on('exit', (code, signal) => {
      RUN.children.delete(child)
      resolve({ code, signal })
    })
  })
}

/**
 * Stops the run on a signal: every child is killed, and the run throws at
 * its next step, so the base is removed and the exit is 2.
 * @param {string} signal The signal.
 * @returns {void}
 */
function stopRun(signal) {
  RUN.signal ??= signal
  for (const child of RUN.children) {
    child.kill('SIGKILL')
  }
}

/**
 * Throws when a signal stopped the run.
 * @returns {void}
 */
function unlessStopped() {
  if (RUN.signal !== undefined) {
    throw new Error(`archive:parity: stopped by ${RUN.signal}`)
  }
}

/**
 * Runs Git in this checkout, its errors on stderr.
 * @param {string[]} args Its arguments.
 * @returns {string} What it printed on stdout.
 */
function git(...args) {
  return execFileSync('git', args, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
  }).trim()
}

/**
 * A detached worktree of the base, with its dependencies installed, in a new
 * temporary folder.
 * @param {string | undefined} ref The base ref, or the merge-base with `origin/main`.
 * @returns {Promise<string>} The worktree.
 */
async function baseTree(ref) {
  const sha = git(
    ...(ref === undefined ?
      ['merge-base', 'origin/main', 'HEAD']
    : ['rev-parse', '--verify', `${ref}^0`]),
  )
  // fallow-ignore-next-line security-sink -- the system's temporary folder and a literal prefix.
  const folder = mkdtempSync(path.join(tmpdir(), 'archive-parity-'))
  // fallow-ignore-next-line security-sink -- folder is this run's own mkdtemp folder.
  const tree = path.join(folder, 'base')
  // Set before the worktree is made, so the cleanup finds a half-made one.
  RUN.base = tree
  console.error(`archive:parity: base ${sha.slice(0, 8)} in ${tree}`)
  git('worktree', 'add', '--quiet', '--detach', tree, sha)
  unlessStopped()
  // Not the `npm_config_*` of the `npm run` this came from: `npm ci` refuses
  // some of them in a project, and `--silent` would hide its errors. No
  // scripts: npm blocks the install ones, and `prepare` would rewrite the
  // checkout's shared Git hooks from the base. Not synchronous, so a signal
  // can stop it.
  const env = Object.fromEntries(
    Object.entries(process.env).filter(([name]) => !name.startsWith('npm_')),
  )
  const install = spawn(
    'npm',
    ['ci', '--ignore-scripts', '--no-audit', '--no-fund', '--loglevel=error'],
    { cwd: tree, env, stdio: ['ignore', 2, 'inherit'] },
  )
  const { code } = await ended(install)
  unlessStopped()
  if (code !== 0) {
    throw new Error(`archive:parity: npm ci failed in ${tree}`)
  }

  return tree
}

// A base from before #1620 writes its dump without waiting for `drain`; a
// blocking stdout makes it wait all the same. The script goes in as a file
// URL, so a path with `#`, `%` or `?` imports.
// ponytail: drop the wrapper once no base is older than #1620.
const BLOCKING = [
  'process.stdout._handle?.setBlocking?.(true)',
  "const { pathToFileURL } = await import('node:url')",
  'await import(pathToFileURL(process.argv[1]).href)',
].join('; ')

/**
 * Starts the dump of one tree, its lines on a pipe.
 * @param {string} tree The worktree.
 * @param {string[]} args The dump's flags.
 * @returns {{ lines: AsyncIterable<string>, stop: () => void, failure: () => Promise<string | undefined> }} Its lines, a way to stop it, and why it failed on its own, if it did.
 */
function dumpOf(tree, args) {
  // fallow-ignore-next-line security-sink -- the command is this Node; the script is the dump of this checkout or of the base worktree, and the flags were parsed by parseArgs.
  const child = spawn(
    process.execPath,
    [
      '--input-type=module',
      '-e',
      BLOCKING,
      // fallow-ignore-next-line security-sink -- tree is this checkout or the base worktree.
      path.join(tree, 'scripts/archive-dump.mjs'),
      ...args,
    ],
    { cwd: tree, stdio: ['ignore', 'pipe', 'inherit'] },
  )
  child.stdout.setEncoding('utf8')
  const exit = ended(child)
  const run = { drained: false, killed: false }
  async function* lines() {
    yield* linesOf(child.stdout)
    run.drained = true
  }
  // A dump read to its end is left to exit, and one that had exited is not
  // killed: only a SIGKILL sent to a running dump is this script's own.
  const stop = () => {
    if (run.drained) {
      return
    }
    run.killed = child.exitCode === null && child.signalCode === null
    child.stdout.destroy()
    if (run.killed) {
      child.kill('SIGKILL')
    }
  }

  return {
    lines: lines(),
    stop,
    failure: async () => failureOf(await exit, run.killed),
  }
}

/**
 * Compares the base's dump with this checkout's.
 * @param {{ base: string | undefined, baseDir: string | undefined, dump: string[] }} flags The flags.
 * @returns {Promise<number>} The exit code.
 */
async function parity(flags) {
  const tree = flags.baseDir ?? (await baseTree(flags.base))
  const [base, head] = [tree, ROOT].map((root) => dumpOf(root, flags.dump))
  const result = await compareDumps(base.lines, head.lines)
  base.stop()
  head.stop()
  const failures = await Promise.all([base.failure(), head.failure()])
  unlessStopped()
  const failed = ['base', 'head']
    .map(
      (side, index) => failures[index] && `the ${side} dump ${failures[index]}`,
    )
    .filter(Boolean)
  if (failed.length > 0) {
    console.error(`archive:parity: ${failed.join('; ')}; a dump failed`)
    return 2
  }
  console.log(reportOf(result))

  return exitOf(result)
}

/**
 * Removes the base's worktree and the temporary folder around it, and no
 * other worktree.
 * @param {string} tree The base's worktree.
 * @returns {void}
 */
function removeBase(tree) {
  try {
    execFileSync('git', ['worktree', 'remove', '--force', tree], {
      cwd: ROOT,
      stdio: 'ignore',
    })
  } catch {
    // Never added: there is no worktree to remove, only the folder below.
  }
  rmSync(path.dirname(tree), { recursive: true, force: true })
}

if (isMain(import.meta)) {
  let flags
  try {
    flags = parityArgs(process.argv.slice(2))
  } catch (error) {
    console.error(error.message)
    process.exit(2)
  }
  // A signal stops the children; this process lives on to remove the base.
  for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
    process.on(signal, stopRun)
  }
  try {
    process.exitCode = await parity(flags)
  } catch (error) {
    // A bad TMPDIR, Git or npm: a setup to fix, not a difference.
    console.error(error.message)
    process.exitCode = 2
  } finally {
    if (RUN.base !== undefined) {
      removeBase(RUN.base)
    }
  }
}
