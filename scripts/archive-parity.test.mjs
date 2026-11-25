// @vitest-environment node
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { Readable } from 'node:stream'
import { afterAll, describe, expect, it } from 'vitest'

import {
  compareDumps,
  exitOf,
  failedOf,
  parityArgs,
  reportOf,
} from './archive-parity.mjs'

/**
 * One payload line as the dump writes it.
 * @param {string} name The payload's name.
 * @param {string} key Its key.
 * @param {unknown} payload What it sends.
 * @returns {string} The line.
 */
const line = (name, key, payload) =>
  JSON.stringify({ name, key, bookmark: null, locale: 'en', payload })

const TABLE = '{"table":1,"chapter":1}'
const BASE = [
  TABLE,
  line('loadHome', '', { arc: 'a' }),
  line('loadCharacter', 'jon', { name: 'Jon' }),
  line('loadCharacter', 'arya', { name: 'Arya' }),
]

/**
 * A dump as a stream of lines, the way the script reads a pipe.
 * @param {string[]} lines The lines.
 * @returns {Readable} The stream.
 */
const dump = (lines) => Readable.from(lines)

describe('the parity flags', () => {
  it('pass the dump flags on, with the bookmarks as a full path', () => {
    expect(
      parityArgs([
        '--series',
        'game-of-thrones',
        '--skip',
        'loadHome',
        '--bookmarks',
        'base.json',
      ]),
    ).toStrictEqual({
      base: undefined,
      baseDir: undefined,
      dump: [
        '--series',
        'game-of-thrones',
        '--skip',
        'loadHome',
        '--bookmarks',
        path.resolve('base.json'),
      ],
    })
  })

  it('take a base ref or a base worktree, not both', () => {
    expect(parityArgs(['--base', 'main']).base).toBe('main')
    expect(parityArgs(['--base-dir', 'base']).baseDir).toBe(
      path.resolve('base'),
    )
    expect(() => parityArgs(['--base', 'main', '--base-dir', 'base'])).toThrow(
      /pass one/u,
    )
  })
})

describe('the comparison', () => {
  it('counts every line of identical dumps as identical', async () => {
    const result = await compareDumps(dump(BASE), dump(BASE))

    expect(exitOf(result)).toBe(0)
    expect(reportOf(result)).toBe(
      'table: 1 identical\nloadHome: 1 identical\nloadCharacter: 2 identical',
    )
  })

  it('counts a changed payload, with a sample of its first change', async () => {
    const head = BASE.with(3, line('loadCharacter', 'arya', { name: 'Arry' }))
    const result = await compareDumps(dump(BASE), dump(head))

    expect(exitOf(result)).toBe(1)
    expect(result.counts.get('loadCharacter')).toStrictEqual({
      same: 1,
      changed: 1,
      sample: [
        '    at {"name":"loadCharacter","key":"arya","bookmark":null,"locale":"en"}',
        '    base …":"arya","bookmark":null,"locale":"en","payload":{"name":"Arya"}}',
        '    head …":"arya","bookmark":null,"locale":"en","payload":{"name":"Arry"}}',
      ].join('\n'),
    })
    expect(result.counts.get('loadHome')).toStrictEqual({ same: 1, changed: 0 })
  })

  it('counts a changed chapter of the table', async () => {
    const head = BASE.with(0, '{"table":1,"chapter":2}')
    const { counts } = await compareDumps(dump(BASE), dump(head))

    expect(counts.get('table')?.changed).toBe(1)
  })

  it('stops where the two sides are at different places', async () => {
    const head = BASE.with(2, line('loadCharacter', 'sansa', { name: 'Jon' }))
    const result = await compareDumps(dump(BASE), dump(head))

    expect(result.misstep).toBe(
      'line 3 is {"name":"loadCharacter","key":"jon","bookmark":null,"locale":"en"} in the base and {"name":"loadCharacter","key":"sansa","bookmark":null,"locale":"en"} in the head',
    )
    expect(result.counts.get('loadCharacter')).toBeUndefined()
    expect(exitOf(result)).toBe(1)
    expect(reportOf(result)).toMatch(/\nOut of step: line 3 is/u)
  })

  it('stops where one side ends before the other', async () => {
    const result = await compareDumps(dump(BASE), dump(BASE.slice(0, 2)))

    expect(result.misstep).toBe(
      'the head ends at line 3, where the base goes on',
    )
  })
})

describe('the end of a run', () => {
  it('is an error when neither dump had a line', async () => {
    const result = await compareDumps(dump([]), dump([]))

    expect(exitOf(result)).toBe(2)
    expect(reportOf(result)).toBe('No lines compared: both dumps were empty.')
  })

  it('counts a dump as failed unless it ended well or on its own stop', () => {
    expect(failedOf({ code: 0, signal: null }, false)).toBe(false)
    expect(failedOf({ code: null, signal: 'SIGKILL' }, true)).toBe(false)
    expect(failedOf({ code: 1, signal: null }, true)).toBe(true)
    expect(failedOf({ code: null, signal: 'SIGTERM' }, true)).toBe(true)
    expect(failedOf({ code: null, signal: 'SIGKILL' }, false)).toBe(true)
  })
})

describe('a run against a base worktree', () => {
  const folder = mkdtempSync(path.join(tmpdir(), 'archive-parity-test-'))
  const bookmarks = path.join(folder, 'bookmarks.json')
  // No bookmark: the head's dump is the episode table alone, and quick.
  writeFileSync(bookmarks, '[]')
  const runs = []
  afterAll(() => {
    for (const run of runs) {
      run.kill('SIGKILL')
    }
    rmSync(folder, { recursive: true, force: true })
  })

  /**
   * A base worktree whose dump is the given script, in a folder whose name
   * a plain import would misread.
   * @param {string} source The dump's source.
   * @returns {string} The worktree.
   */
  const baseWith = (source) => {
    const tree = mkdtempSync(path.join(folder, 'base #%?-'))
    mkdirSync(path.join(tree, 'scripts'))
    writeFileSync(path.join(tree, 'scripts/archive-dump.mjs'), source)
    return tree
  }

  /**
   * Starts a comparison of this checkout with a base worktree.
   * @param {string} tree The base worktree.
   * @returns {{ child: import('node:child_process').ChildProcess, out: () => string, err: () => string }} The run and what it printed.
   */
  const parityWith = (tree) => {
    const child = spawn(
      process.execPath,
      [
        path.join(import.meta.dirname, 'archive-parity.mjs'),
        '--base-dir',
        tree,
        '--series',
        'game-of-thrones',
        '--bookmarks',
        bookmarks,
      ],
      { stdio: ['ignore', 'pipe', 'pipe'] },
    )
    runs.push(child)
    const printed = { out: '', err: '' }
    child.stdout.on('data', (chunk) => {
      printed.out += String(chunk)
    })
    child.stderr.on('data', (chunk) => {
      printed.err += String(chunk)
    })

    return { child, out: () => printed.out, err: () => printed.err }
  }

  it('imports the base dump from a path with # % ?', async () => {
    const run = parityWith(
      baseWith(String.raw`process.stdout.write('{"table":1,"chapter":0}\n')`),
    )
    const [code] = await once(run.child, 'exit')

    expect(run.out()).toContain('table: 0 identical, 1 different')
    expect(run.out()).toContain('Out of step: the base ends at line 2')
    expect(code).toBe(1)
  })

  it('fails when a dump ends on a SIGTERM it did not send', async () => {
    const run = parityWith(baseWith("process.kill(process.pid, 'SIGTERM')"))
    const [code] = await once(run.child, 'exit')

    expect(run.err()).toContain('a dump failed')
    expect(code).toBe(2)
  })

  it.each(['SIGINT', 'SIGTERM', 'SIGHUP'])(
    'stops both dumps and exits 2 on %s',
    async (signal) => {
      const run = parityWith(
        baseWith(
          // Gone by itself in 10 s, so a run that never stops it leaks nothing.
          'process.stderr.write(`ready ${process.pid}\\n`); setTimeout(() => {}, 10_000)',
        ),
      )
      while (!run.err().includes('ready')) {
        await once(run.child.stderr, 'data')
      }
      run.child.kill(signal)
      const [code] = await once(run.child, 'exit')
      const pid = Number(/ready (?<pid>\d+)/u.exec(run.err())?.groups?.pid)

      expect(code).toBe(2)
      expect(run.err()).toContain(`stopped by ${signal}`)
      expect(() => process.kill(pid, 0)).toThrow(/ESRCH/u)
    },
  )
})
