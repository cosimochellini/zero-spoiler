import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const SRC = path.join(import.meta.dirname, '..')

/** Every source file that calls `stylex.create`, by its path from `src`. */
const SOURCES = readdirSync(SRC, { recursive: true })
  .map(String)
  .filter((file) => /\.tsx?$/u.test(file) && !/\.test\.tsx?$/u.test(file))
  .map((file) => ({
    file,
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- a file listed in the folder above.
    text: readFileSync(path.join(SRC, file), 'utf8'),
  }))
  .filter(({ text }) => text.includes('stylex.create('))

describe('StyleX selector keys', () => {
  it('finds the StyleX sources', () => {
    expect(SOURCES.map(({ file }) => file)).toContain(
      path.join('components', 'SpoilerVeil.styles.ts'),
    )

    // The pressed-colour check below has these to read.
    for (const name of [
      'AlbumTile',
      'CharacterCard',
      'CharacterTile',
      'RecordTile',
    ]) {
      expect(
        SOURCES.find(
          ({ file }) => file === path.join('components', `${name}.tsx`),
        )?.text,
      ).toContain("':is(a:active *)'")
    }
  })

  // StyleX compiles `&` in a selector key to `:scope`, which matches only the
  // page root, so a rule like `:is(a:hover) > &` never applies (#1398,
  // #1547). Write `':is(a:hover *)'` or `':has(…)'` instead.
  it.each(SOURCES)('$file has no selector key holding an `&`', ({ text }) => {
    // A selector key is a quoted string followed by a colon.
    expect(text).not.toMatch(/'[^'&\n]*&[^'\n]*':/u)
    // Nor a selector kept in a constant: `&` after a combinator.
    expect(text).not.toMatch(/'[^'\n]*[>~+]\s*&[^'\n]*'/u)
  })

  // StyleX orders `:is()` keys by their value, not as written, so a pressed
  // colour beside a different hover or focus one only holds if those skip
  // `:active`.
  it.each(SOURCES)(
    '$file keeps a pressed colour over hover and focus',
    ({ text }) => {
      const losers: string[] = []
      // Each innermost `{…}`: one property's states, one `key: value` a line.
      for (const { 0: states } of text.matchAll(/\{[^{}]*\}/gu)) {
        const pairs = Array.from(
          states.matchAll(/'(?<key>:is\([^'\n]*\))': (?<value>[^,\n]+)/gu),
          ({ groups: { key = '', value = '' } = {} }) => ({ key, value }),
        )
        const pressed = pairs.find(({ key }) => /:active(?!\))/u.test(key))
        losers.push(
          ...pairs
            .filter(
              ({ key, value }) =>
                pressed !== undefined
                && value !== pressed.value
                && /:hover|:focus-visible/u.test(key)
                && !key.includes(':not(:active)'),
            )
            .map(({ key }) => key),
        )
      }

      expect(losers).toStrictEqual([])
    },
  )
})
