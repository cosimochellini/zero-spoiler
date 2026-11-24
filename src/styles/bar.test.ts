import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

/** A file by its path from this folder, as text. */
function read(file: string): string {
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- every call below passes a constant path.
  return readFileSync(path.join(import.meta.dirname, file), 'utf8')
}

/**
 * A quoted value as the source writes it, `key: '…'` or `const key = '…'`. The compiler inlines
 * `defineConsts` and turns `defineVars` into custom properties, so the
 * literal values are only in the text.
 */
function value(text: string, key: string): string {
  for (const opener of [`${key}: '`, `${key} = '`]) {
    const start = text.indexOf(opener)
    if (start !== -1) {
      const from = start + opener.length
      return text.slice(from, text.indexOf("'", from))
    }
  }
  throw new Error(`no ${key}`)
}

const rem = (text: string): number => Number(text.replace('rem', ''))

describe('the site bar', () => {
  it("keeps each of the site bar's heights at its rows of controls and its padding", () => {
    const tokens = read('tokens.stylex.ts')
    // The bar's padding above and below its rows (`SiteBar.styles.ts`).
    const space = tokens.slice(tokens.indexOf('export const space'))
    const padding = 2 * rem(value(space, 'xs2'))
    // A row is the least height of a control, the TAP of the bar's styles, at
    // the default text size.
    const tap = value(read('../components/SiteBar.styles.ts'), 'TAP')
    const row = Number(tap.replace('px', '')) / 16

    for (const [key, rows] of [
      ['oneRow', 1],
      ['twoRows', 2],
      ['threeRows', 3],
      ['fourRows', 4],
    ] as const) {
      expect(rem(value(tokens, key)), key).toBe(rows * row + padding)
    }
  })
})
