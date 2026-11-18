// @vitest-environment node
import { ESLint } from 'eslint'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { format, resolveConfig } from 'prettier'
import { describe, expect, it } from 'vitest'

const repositoryRoot = path.resolve(import.meta.dirname, '..')
const fillerPath = path.join(
  repositoryRoot,
  'src/server/archive/fillerRows.server.ts',
)
const arrowPath = path.join(repositoryRoot, 'scripts/eslint-arrow-fixture.mjs')
const artPath = path.join(
  repositoryRoot,
  'src/data/series/game-of-thrones/art/essos.ts',
)
const grandfatheredArtPath = path.join(
  repositoryRoot,
  'src/data/series/one-piece/art/alabasta.ts',
)
/**
 * Whether the positional-slice ban of the art files fired.
 * @param {import('eslint').Linter.LintMessage[]} messages - Lint diagnostics.
 * @returns {boolean} True when a message is the #1301 slice ban.
 */
function hasSliceBan(messages) {
  return messages.some(({ message }) =>
    message.startsWith('Do not reuse another drawing'),
  )
}
const optionalChainRule = '@typescript-eslint/prefer-optional-chain'
const eslint = new ESLint({ cwd: repositoryRoot })

/**
 * Formats and lints text with the real configuration, without writing files.
 * @param {string} source - The source text to check.
 * @param {string} filePath - The path whose configuration and types apply.
 * @returns {Promise<{ formatted: string, messages: import('eslint').Linter.LintMessage[] }>} The formatted source and lint diagnostics.
 */
async function lint(source, filePath) {
  const options = await resolveConfig(filePath)
  const formatted = await format(source, { ...options, filepath: filePath })
  const [result] = await eslint.lintText(formatted, { filePath })
  return { formatted, messages: result.messages }
}

// The first typed lint builds the project's TypeScript service. A quiet machine
// runs this whole file in about 11 s, but CI runs it about ten times slower,
// because the rest of the suite shares its CPUs: the filler case alone took
// about 30 s there and hit the old 30 s limit (#1401). Keep the cases
// sequential and the limit at four times that CI time; it costs nothing when
// the cases pass.
describe(
  'the ESLint configuration',
  { timeout: 120_000, sequential: true },
  () => {
    it('accepts an object-returning map after Prettier wraps it', async () => {
      const { formatted, messages } = await lint(
        `const list = ['entry']
const indexedArchiveEntries = list.map((item, at) => ({ entry: item, index: at }))
export { indexedArchiveEntries }
`,
        arrowPath,
      )

      expect(formatted).toContain('=> ({\n')
      expect(messages).toStrictEqual([])
    })

    it('accepts the formatted production filler helpers', async () => {
      const source = await readFile(fillerPath, 'utf8')
      const { messages } = await lint(source, fillerPath)

      expect(messages).toStrictEqual([])
    })

    it.each([
      ['generic keys', '<K>', 'K'],
      ['explicitly undefined-capable keys', '', 'string | undefined'],
    ])('keeps the explicit guard for %s', async (_label, generic, keyType) => {
      const { messages } = await lint(
        `export function matches${generic}(
  last: { key: ${keyType} } | undefined,
  key: ${keyType},
): boolean {
  return last !== undefined && last.key === key
}
`,
        // An existing TS-program path gives virtual text real project-service
        // types. Only the rule under test matters for these isolated snippets.
        fillerPath,
      )

      expect(messages.filter((message) => message.fatal)).toStrictEqual([])
      expect(
        messages.filter((message) => message.ruleId === optionalChainRule),
      ).toStrictEqual([])
    })

    it('still requires optional chaining for nullable operand chains', async () => {
      const { messages } = await lint(
        `export function keyOf(last: { key: string } | undefined): string | undefined {
  return last && last.key
}
`,
        fillerPath,
      )

      expect(messages.filter((message) => message.fatal)).toStrictEqual([])
      expect(
        messages.filter((message) => message.ruleId === optionalChainRule),
      ).toHaveLength(1)
    })

    // Every module that ships reads the open series only (#758, #791): the
    // filed list stays out by any spelling, statically or dynamically.
    it.each([
      [
        'a static import',
        'src/i18n/translate.ts',
        "import { SERIES } from '~/data/series'\nexport const count = SERIES.length\n",
        'no-restricted-imports',
      ],
      [
        'a `.ts` specifier',
        'src/i18n/translate.ts',
        "import { filedArchiveOf } from '~/data/series/index.ts'\nexport const load = filedArchiveOf\n",
        'no-restricted-imports',
      ],
      [
        'a bare `..` from a series folder',
        'src/data/series/one-piece/archive.ts',
        "import { SERIES } from '..'\nexport const count = SERIES.length\n",
        'no-restricted-imports',
      ],
      [
        'a dynamic import',
        'src/i18n/translate.ts',
        "export async function load(): Promise<unknown> {\n  return import('~/data/series')\n}\n",
        'no-restricted-syntax',
      ],
      [
        'a template-literal import',
        'src/i18n/translate.ts',
        'export async function load(): Promise<unknown> {\n  return import(`~/data/series`)\n}\n',
        'no-restricted-syntax',
      ],
    ])(
      'bars the filed series through %s',
      async (_label, file, source, rule) => {
        const { messages } = await lint(source, path.join(repositoryRoot, file))

        expect(messages.map(({ ruleId }) => ruleId)).toContain(rule)
      },
    )

    it.each([
      [
        'src/components/SiteFooter.tsx',
        "import { onePieceEn } from '~/i18n/dictionaries/one-piece/en'",
      ],
      [
        'src/i18n/translate.ts',
        "import { onePieceEn } from './dictionaries/one-piece/en'",
      ],
      [
        'src/i18n/dictionaries/it.ts',
        "import { onePieceIt } from './one-piece/it'",
      ],
      ['src/styles/themes.ts', "import { COPIES } from '~/server/copy.server'"],
      [
        'src/components/SiteFooter.tsx',
        "import { onePieceEn } from '~/i18n/dictionaries/one-piece/en.js'",
      ],
      [
        'src/components/SiteFooter.tsx',
        "import { LocaleContext } from '~/i18n/LocaleContext'",
      ],
    ])('bars a series’ copy from %s', async (file, statement) => {
      const { messages } = await lint(
        `${statement}\nexport const words = [${statement.split(' ', 3)[2] ?? ''}]\n`,
        path.join(repositoryRoot, file),
      )

      expect(messages.map(({ ruleId }) => ruleId)).toContain(
        'no-restricted-imports',
      )
    })

    it.each(['src/components/SiteFooter.tsx', 'src/i18n/translate.ts'])(
      'bars a dynamic import of a series’ copy from %s',
      async (file) => {
        const { messages } = await lint(
          "export async function words(): Promise<unknown> {\n  return import('~/i18n/dictionaries/one-piece/en.js')\n}\n",
          path.join(repositoryRoot, file),
        )

        expect(messages.map(({ ruleId }) => ruleId)).toContain(
          'no-restricted-syntax',
        )
      },
    )

    it('lets the shared dictionaries and a series’ types through', async () => {
      const { messages } = await lint(
        "import { enDictionary } from './dictionaries/en'\nimport type { onePieceEn } from './dictionaries/one-piece/en'\nexport const words: [typeof enDictionary, typeof onePieceEn] | null = null\n",
        path.join(repositoryRoot, 'src/i18n/translate.ts'),
      )

      expect(
        messages.filter(({ ruleId }) => ruleId === 'no-restricted-imports'),
      ).toStrictEqual([])
    })

    // Drawings reuse another drawing's strokes by name, not by position, and
    // keep their comments to 80 columns (#1301). Neither rule may drop the
    // shared bans the art files live under.
    it.each([
      ['an `Art` table', "fooArt['x'].slice(0, 3)"],
      ['a `_DRAWINGS` table', 'FOO_DRAWINGS.x.slice(0, 3)'],
      ['a quoted `_DRAWINGS` key', "FOO_DRAWINGS['x'].slice(0, 3)"],
    ])('bars a positional slice of %s in an art file', async (_label, call) => {
      const { messages } = await lint(
        `declare const fooArt: Record<string, number[]>
declare const FOO_DRAWINGS: Record<string, number[]>
export const strokes = ${call}
`,
        artPath,
      )

      expect(hasSliceBan(messages)).toBe(true)
    })

    it('lets a grandfathered art file keep its slices', async () => {
      const { messages } = await lint(
        "declare const fooArt: Record<string, number[]>\nexport const strokes = fooArt['x'].slice(0, 3)\n",
        grandfatheredArtPath,
      )

      expect(hasSliceBan(messages)).toBe(false)
    })

    it.each([
      [80, 0],
      [81, 1],
    ])(
      'flags a %i-column comment in an art file %i time(s)',
      async (columns, count) => {
        const { messages } = await lint(
          `// ${'x'.repeat(columns - 3)}\nexport const art = 1\n`,
          artPath,
        )

        expect(
          messages.filter(({ ruleId }) => ruleId === 'max-len'),
        ).toHaveLength(count)
      },
    )

    it('still applies the shared bans in an art file', async () => {
      const { messages } = await lint(
        "export async function load(): Promise<unknown> {\n  return import('~/data/series')\n}\n",
        artPath,
      )

      expect(messages.map(({ ruleId }) => ruleId)).toContain(
        'no-restricted-syntax',
      )
    })
  },
)
