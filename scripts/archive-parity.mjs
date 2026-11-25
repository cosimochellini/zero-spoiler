// Payload parity for a refactor that should change nothing: the archive dump
// (`scripts/archive-dump.mjs`) of the base and of this checkout, piped and
// read line by line in step, so nothing is written to disk but the base's
// worktree. Prints how many lines of each payload are identical and differ,
// with one sample per changed payload:
//   npm run archive:parity -- --series game-of-thrones
// Flags, after `--`:
//   --base <ref>        the base, `git merge-base origin/main HEAD` by
//                       default; a detached worktree of it is made in the
//                       system's temporary folder, set up with `npm ci`, and
//                       removed at the end, whatever happens;
//   --base-dir <path>   an existing worktree of the base, used as it is;
//   --series, --skip, --bookmarks   passed to both dumps.
// Exit 0 when the dumps are identical, 1 when they differ or fall out of
// step, 2 for a wrong flag, a failed setup or a dump that fails.
import { execFileSync, spawn } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { createInterface } from 'node:readline'
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
    : ['--bookmarks', path.resolve(values.bookmarks)]

  return {
    base: values.base,
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
export function placeOf(line) {
  if (line.startsWith('{"table":')) {
    return { name: 'table', place: line.slice(0, line.indexOf(',')) }
  }
  const place = line.slice(0, line.indexOf(',"payload":'))

  return { name: line.slice(9, line.indexOf('"', 9)), place: `${place}}` }
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

  return lines.join('\n')
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
 * A detached worktree of the base, with its dependencies installed.
 * @param {string | undefined} ref The base ref, or the merge-base with `origin/main`.
 * @param {string} folder The empty temporary folder to put it in.
 * @returns {string} The worktree.
 */
function baseTree(ref, folder) {
  const sha = git(
    ...(ref === undefined ?
      ['merge-base', 'origin/main', 'HEAD']
    : ['rev-parse', '--verify', `${ref}^0`]),
  )
  const tree = path.join(folder, 'base')
  console.error(`archive:parity: base ${sha.slice(0, 8)} in ${tree}`)
  git('worktree', 'add', '--quiet', '--detach', tree, sha)
  execFileSync('npm', ['ci', '--no-audit', '--no-fund'], {
    cwd: tree,
    stdio: ['ignore', 'ignore', 'inherit'],
  })

  return tree
}

// A base from before #1620 writes its dump without waiting for `drain`; a
// blocking stdout makes it wait all the same.
// ponytail: drop the wrapper once no base is older than #1620.
const BLOCKING =
  'process.stdout._handle?.setBlocking?.(true); await import(process.argv[1])'

/**
 * Starts the dump of one tree, its lines on a pipe.
 * @param {string} tree The worktree.
 * @param {string[]} args The dump's flags.
 * @returns {{ lines: AsyncIterable<string>, stop: () => void, failed: Promise<boolean> }} Its lines, a way to stop it, and whether it failed on its own.
 */
function dumpOf(tree, args) {
  const child = spawn(
    process.execPath,
    [
      '--input-type=module',
      '-e',
      BLOCKING,
      path.join(tree, 'scripts/archive-dump.mjs'),
      ...args,
    ],
    { cwd: tree, stdio: ['ignore', 'pipe', 'inherit'] },
  )
  const failed = new Promise((resolve) => {
    child.on('error', () => resolve(true))
    // A dump this script stopped ends on SIGTERM; any other end but 0 failed.
    child.on('exit', (code, signal) =>
      resolve(code !== 0 && signal !== 'SIGTERM'),
    )
  })
  const stop = () => {
    child.stdout.destroy()
    child.kill()
  }

  return {
    lines: createInterface({ input: child.stdout, crlfDelay: Infinity }),
    stop,
    failed,
  }
}

/**
 * Compares the base's dump with this checkout's.
 * @param {{ base: string | undefined, baseDir: string | undefined, dump: string[] }} flags The flags.
 * @param {string | undefined} folder The temporary folder for a base worktree, without `--base-dir`.
 * @returns {Promise<number>} The exit code.
 */
async function parity(flags, folder) {
  const tree = flags.baseDir ?? baseTree(flags.base, folder)
  const [base, head] = [tree, ROOT].map((root) => dumpOf(root, flags.dump))
  const result = await compareDumps(base.lines, head.lines)
  base.stop()
  head.stop()
  const failed = await Promise.all([base.failed, head.failed])
  if (failed.includes(true)) {
    console.error('archive:parity: a dump failed; its error is above')
    return 2
  }
  console.log(reportOf(result))

  return (
      result.misstep === undefined
        && result.counts.values().every(({ changed }) => changed === 0)
    ) ?
      0
    : 1
}

/**
 * Removes the base's worktree and its folder, whatever state they are in.
 * @param {string} folder The temporary folder.
 * @returns {void}
 */
function removeBase(folder) {
  const tree = path.join(folder, 'base')
  try {
    execFileSync('git', ['worktree', 'remove', '--force', tree], {
      cwd: ROOT,
      stdio: 'ignore',
    })
  } catch {
    // Never made, or half made: the folder goes below and prune forgets it.
  }
  rmSync(folder, { recursive: true, force: true })
  git('worktree', 'prune')
}

if (isMain(import.meta)) {
  let flags
  try {
    flags = parityArgs(process.argv.slice(2))
  } catch (error) {
    console.error(error.message)
    process.exit(2)
  }
  // Ctrl-C stops the children; this process lives on to remove the base.
  process.on('SIGINT', () => {
    console.error('archive:parity: stopping')
  })
  const folder =
    flags.baseDir === undefined ?
      mkdtempSync(path.join(tmpdir(), 'archive-parity-'))
    : undefined
  try {
    process.exitCode = await parity(flags, folder)
  } catch (error) {
    console.error(error.message)
    process.exitCode = 2
  } finally {
    if (folder !== undefined) {
      removeBase(folder)
    }
  }
}
