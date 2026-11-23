// @vitest-environment node
import console from 'node:console'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  checkClientBudget,
  eagerScripts,
  judgeClientBudget,
} from './client-budget.mjs'

const temporary = []
afterEach(() => {
  for (const directory of temporary.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

/**
 * Writes a build's Vite manifest.
 * @param {string} build The client directory.
 * @param {object} manifest Its entries.
 */
function writeManifest(build, manifest) {
  mkdirSync(path.join(build, '.vite'), { recursive: true })
  writeFileSync(
    path.join(build, '.vite', 'manifest.json'),
    JSON.stringify(manifest),
  )
}

/**
 * A pair of client builds with a known raw byte difference in the scripts
 * every page loads, and a lazy chunk on the head that does not count.
 * @returns {{base: string, head: string}} The client directories.
 */
function builds() {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'client-budget-'))
  temporary.push(directory)
  const base = path.join(directory, 'base')
  const head = path.join(directory, 'head')
  for (const build of [base, head]) {
    mkdirSync(path.join(build, 'assets'), { recursive: true })
    writeFileSync(path.join(build, 'assets', 'shared.js'), 'abc')
    writeFileSync(path.join(build, 'assets', 'style.css'), 'x'.repeat(9000))
  }
  writeManifest(base, {
    'entry.tsx': { file: 'assets/shared.js', isEntry: true },
  })
  writeFileSync(path.join(head, 'assets', 'feature.js'), 'é'.repeat(1025))
  writeFileSync(path.join(head, 'assets', 'lazy.js'), 'z'.repeat(50_000))
  writeManifest(head, {
    'entry.tsx': {
      file: 'assets/shared.js',
      imports: ['feature.ts'],
      dynamicImports: ['lazy.ts'],
      isEntry: true,
    },
    'feature.ts': { file: 'assets/feature.js', css: ['assets/style.css'] },
    'lazy.ts': { file: 'assets/lazy.js', isDynamicEntry: true },
  })
  return { base, head }
}

describe('client growth relative to the PR base', () => {
  it('allows reductions, equal builds and growth through the budget boundary', () => {
    for (const head of [9000, 10_000, 10_300, 12_048]) {
      expect(judgeClientBudget(10_000, head, '').ok).toBe(true)
    }
    expect(judgeClientBudget(10_000, 12_049, '').ok).toBe(false)
  })

  it('accepts larger growth only with a reason on its own line', () => {
    for (const body of [
      'client-budget: new feature',
      'Summary\r\nclient-budget: new feature\r\n',
    ]) {
      expect(judgeClientBudget(1, 9000, body).ok).toBe(true)
    }
    for (const body of [
      '',
      'client-budget:',
      'client-budget: \t',
      'client-budget:\nreason',
      'Please add client-budget: reason',
    ]) {
      expect(judgeClientBudget(1, 9000, body).ok).toBe(false)
    }
  })

  it('reports both totals and the raw-byte delta of the eager scripts only', () => {
    const { base, head } = builds()
    const log = vi.spyOn(console, 'log').mockReturnValue()
    const error = vi.spyOn(console, 'error').mockReturnValue()
    expect(checkClientBudget(base, head, '')).toBe(1)
    expect(log).toHaveBeenCalledWith(
      'client-budget: base 3 bytes, head 2053 bytes, difference 2050 bytes (budget 2048 bytes).',
    )
    expect(error).toHaveBeenCalledWith(
      expect.stringContaining('client-budget: <reason>'),
    )
    expect(
      checkClientBudget(base, head, 'client-budget: two-byte characters'),
    ).toBe(0)
    expect(log).toHaveBeenCalledWith(
      expect.stringContaining('explicitly accepted'),
    )
  })

  it('follows static imports from the entries, and no dynamic import', () => {
    expect(
      eagerScripts({
        'entry.tsx': { file: 'a/entry.js', imports: ['b.ts'], isEntry: true },
        'b.ts': { file: 'a/b.js', imports: ['c.ts', 'entry.tsx'] },
        'c.ts': { file: 'a/c.js', dynamicImports: ['d.ts'] },
        'd.ts': { file: 'a/d.js', imports: ['b.ts'], isDynamicEntry: true },
        'style.css': { file: 'a/style.css', isEntry: true },
      }),
    ).toStrictEqual(['a/entry.js', 'a/b.js', 'a/c.js'])
  })

  it('fails closed when either build is missing or empty', () => {
    const { base, head } = builds()
    vi.spyOn(console, 'error').mockReturnValue()
    rmSync(path.join(base, 'assets', 'shared.js'))
    expect(checkClientBudget(base, head, 'client-budget: reason')).toBe(2)
    expect(checkClientBudget(head, base, '')).toBe(2)
    expect(checkClientBudget(path.join(base, 'missing'), head, '')).toBe(2)
    writeManifest(base, { 'lazy.ts': { file: 'assets/lazy.js' } })
    expect(checkClientBudget(base, head, 'client-budget: reason')).toBe(2)
  })
})
