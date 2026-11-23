// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript.
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { afterAll, describe, expect, it } from 'vitest'

import { CANARY_PAGE } from './design-gate.rules.mjs'
import { scanTokens, TOKEN_VIEWPORT } from './design-gate.tokens.mjs'

// A repository with only the design context in it.
const root = mkdtempSync(path.join(os.tmpdir(), 'design-gate-root-'))
mkdirSync(path.join(root, '.impeccable'))
writeFileSync(path.join(root, 'DESIGN.md'), 'the design\n')
writeFileSync(path.join(root, '.impeccable', 'design.json'), '{}\n')
afterAll(() => {
  rmSync(root, { recursive: true, force: true })
})

const served = [
  { address: 'http://127.0.0.1:4000/en', html: '<head></head><h1>Hub</h1>' },
  {
    address: 'http://127.0.0.1:4000/saga/en?ep=40',
    html: '<head></head><h1>Saga</h1><script>go()</script>',
  },
]

/**
 * @param {string} file Whichever copy holds the canary page.
 * @returns {object[]} The canary's findings on it.
 */
function canaryOn(file) {
  return [
    ['design-system-font', 'georgia'],
    ['design-system-color', 'rgb(255, 106, 0)'],
  ].map(([antipattern, ignoreValue]) => ({ antipattern, file, ignoreValue }))
}

/**
 * A detector run that keeps what it was given and finds one font, one colour
 * and one other rule on the pages, and the canary's two.
 * @param {object} seen Where to keep it.
 * @returns {(viewport: string, urls: string[], cwd: string) => Promise<object[]>}
 *   The run.
 */
function recording(seen) {
  return async (viewport, urls, cwd) => {
    const paths = urls.map((url) => fileURLToPath(url))
    Object.assign(seen, {
      viewport,
      cwd,
      files: readdirSync(cwd, { recursive: true }).toSorted((a, b) =>
        a.localeCompare(b),
      ),
      copies: paths.map((file) => readFileSync(file, 'utf8')),
      context: readFileSync(path.join(cwd, 'DESIGN.md'), 'utf8'),
    })
    return [
      // One finding named by URL, one by path, as the detector may do.
      { antipattern: 'design-system-font', file: urls[0] },
      { antipattern: 'design-system-color', file: paths[1] },
      { antipattern: 'line-length', file: urls[1] },
      ...canaryOn(urls[2]),
    ]
  }
}

describe('the token scan', () => {
  it('saves the context, every page and the canary, and maps the findings back', async () => {
    const listeners = process.listenerCount('exit')
    const seen = {}

    const findings = await scanTokens(root, served, recording(seen))

    expect(seen.viewport).toBe(TOKEN_VIEWPORT)
    expect(seen.files).toStrictEqual([
      '.impeccable',
      path.join('.impeccable', 'design.json'),
      '0.html',
      '1.html',
      '2.html',
      'DESIGN.md',
    ])
    expect(seen.context).toBe('the design\n')
    expect(seen.copies).toStrictEqual([
      '<head><base href="http://127.0.0.1:4000/en"></head><h1>Hub</h1>',
      '<head><base href="http://127.0.0.1:4000/saga/en?ep=40"></head><h1>Saga</h1>',
      CANARY_PAGE,
    ])
    expect(findings).toStrictEqual([
      {
        antipattern: 'design-system-font',
        file: served[0].address,
        advisory: false,
      },
      {
        antipattern: 'design-system-color',
        file: served[1].address,
        advisory: false,
      },
    ])
    // Gone once the scan returns, and its exit listener with it.
    expect(existsSync(seen.cwd)).toBe(false)
    expect(process.listenerCount('exit')).toBe(listeners)
  })

  it('removes the copies when the scan throws', async () => {
    let cwd

    await expect(
      scanTokens(root, served, async (_, __, directory) => {
        cwd = directory
        return []
      }),
    ).rejects.toThrow('the engine did not read DESIGN.md')
    expect(existsSync(cwd)).toBe(false)
  })
})
