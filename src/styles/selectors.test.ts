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
  })

  // StyleX compiles `&` in a selector key to `:scope`, which matches only the
  // page root, so a rule like `':is(a:hover) > &'` never applies (#1398,
  // #1547). Write `':is(a:hover *)'` or `':has(…)'` instead.
  it.each(SOURCES)('$file has no selector key holding an `&`', ({ text }) => {
    // A selector key is a quoted string followed by a colon.
    expect(text).not.toMatch(/'[^'&\n]*&[^'\n]*':/u)
  })
})
