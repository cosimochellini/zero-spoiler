// @vitest-environment node
import path from 'node:path'
import { Readable } from 'node:stream'
import { describe, expect, it } from 'vitest'

import { compareDumps, parityArgs, reportOf } from './archive-parity.mjs'

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

    expect(result.misstep).toBeUndefined()
    expect(reportOf(result)).toBe(
      'table: 1 identical\nloadHome: 1 identical\nloadCharacter: 2 identical',
    )
  })

  it('counts a changed payload, with a sample of its first change', async () => {
    const head = BASE.with(3, line('loadCharacter', 'arya', { name: 'Arry' }))
    const result = await compareDumps(dump(BASE), dump(head))

    expect(result.misstep).toBeUndefined()
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
    expect(reportOf(result)).toMatch(/\nOut of step: line 3 is/u)
  })

  it('stops where one side ends before the other', async () => {
    const result = await compareDumps(dump(BASE), dump(BASE.slice(0, 2)))

    expect(result.misstep).toBe(
      'the head ends at line 3, where the base goes on',
    )
  })
})
