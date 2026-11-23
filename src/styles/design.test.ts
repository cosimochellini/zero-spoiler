import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { PALETTES } from '~/styles/themes'
import { NEUTRAL } from '~/styles/tokens.stylex'

/** A file by its path from this folder, as text. */
function read(file: string): string {
  // eslint-disable-next-line security/detect-non-literal-fs-filename -- every call below passes a constant path.
  return readFileSync(path.join(import.meta.dirname, file), 'utf8')
}

const TOKENS = read('tokens.stylex.ts')

/**
 * A token group as the source writes it. The compiler turns `defineVars`
 * into custom properties, so the literal values are only in the text.
 */
function group(name: string): Record<string, string> {
  const opener = `export const ${name} = stylex.defineVars({`
  const start = TOKENS.indexOf(opener) + opener.length
  const text = TOKENS.slice(start, TOKENS.indexOf('})', start))
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => !line.startsWith('//'))
    .join(' ')
    .trim()
  const values: Record<string, string> = {}

  // `key: 'value',` or `key: "value",`, one after the other.
  let colon = text.indexOf(': ')
  while (colon !== -1) {
    const end = text.indexOf(text.charAt(colon + 2), colon + 3)
    values[text.slice(text.lastIndexOf(' ', colon) + 1, colon)] = text.slice(
      colon + 3,
      end,
    )
    colon = text.indexOf(': ', end)
  }

  return values
}

/** A scalar without the quotes YAML allows around it. */
function unquoted(value: string): string {
  const quote = value.charAt(0)

  return (quote === "'" || quote === '"') && value.endsWith(quote) ?
      value.slice(1, -1)
    : value
}

/** A `key: value` line of YAML with its indent, or `null` for any other line. */
function entryOf(
  line: string,
): null | { indent: number; key: string; value: string } {
  const text = line.trim()
  const colon = text.indexOf(':')
  const key = text.slice(0, colon)

  return colon > 0 && /^[\w-]+$/u.test(key) ?
      {
        indent: line.length - line.trimStart().length,
        key,
        value: text.slice(colon + 1).trim(),
      }
    : null
}

/**
 * The frontmatter of DESIGN.md as one flat map, `colors.blackout-paper` to
 * its value. A line with no key continues the scalar above it, which is how
 * Prettier folds a long string; a comment line is skipped.
 */
function frontmatter(): Record<string, string> {
  const [, yaml = ''] = read('../../DESIGN.md').split('---\n', 2)
  const flat: Record<string, string> = {}
  const open: { indent: number; key: string }[] = []
  let last = ''

  // A comment, such as the `# prettier-ignore` over `typography`, is no entry.
  const lines = yaml
    .split('\n')
    .filter((line) => !line.trimStart().startsWith('#'))

  for (const line of lines) {
    const entry = entryOf(line)
    if (entry === null) {
      flat[last] = `${flat[last] ?? ''} ${line.trim()}`.trim()
      continue
    }
    while ((open.at(-1)?.indent ?? -1) >= entry.indent) {
      open.pop()
    }
    open.push(entry)
    last = open.map((level) => level.key).join('.')
    flat[last] = entry.value
  }

  return Object.fromEntries(
    Object.entries(flat).map(([key, value]) => [key, unquoted(value)]),
  )
}

const DESIGN = frontmatter()

/** One group of the frontmatter, its keys without the group's name. */
function listed(name: string): Record<string, string> {
  return Object.fromEntries(
    Object.entries(DESIGN)
      .filter(([key]) => key.startsWith(`${name}.`))
      .map(([key, value]) => [key.slice(name.length + 1), value]),
  )
}

/** A palette under the name the frontmatter prefixes it with. */
function prefixed(
  prefix: string,
  palette: Record<string, string>,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => [`${prefix}-${key}`, value]),
  )
}

/** The frontmatter's schema holds no `clamp()`: a fluid size is its largest. */
function ceiling(size: string): string {
  return size.startsWith('clamp(') ?
      size.slice(size.lastIndexOf(',') + 1, -1).trim()
    : size
}

/** The sidecar, with every run of white space as one space. */
const SIDECAR = read('../../.impeccable/design.json').replaceAll(/\s+/gu, ' ')

/** The text between the first `from` and the `to` after it. */
function between(text: string, from: string, to: string): string {
  const start = text.indexOf(from) + from.length

  return text.slice(start, text.indexOf(to, start))
}

/** How many named entries a stretch of the sidecar holds. */
function named(list: string): number {
  return list.split('"name":').length - 1
}

/** Each type role's font, size and leading, by the token's name. */
const ROLES: Record<string, [string, string, null | string]> = {
  hero: ['display', 'hero', 'display'],
  display: ['display', 'display', 'display'],
  headline: ['display', 'xl', 'heading'],
  title: ['display', 'lg', 'heading'],
  body: ['body', 'base', 'body'],
  lede: ['body', 'lg', 'body'],
  label: ['body', 'xs', null],
  numeral: ['mono', 'xs', null],
  micro: ['mono', 'xs2', null],
}

describe('the tokens in DESIGN.md', () => {
  it('are the colours of every theme and every tint', () => {
    expect(listed('colors')).toStrictEqual({
      ...prefixed('blackout', NEUTRAL),
      ...Object.assign(
        {},
        ...Object.entries(PALETTES).map(([theme, palette]) =>
          prefixed(theme, palette),
        ),
      ),
      ...prefixed('tint', group('tint')),
    })
  })

  it('are the spacing and radius scales', () => {
    expect(listed('spacing')).toStrictEqual(group('space'))
    expect(listed('rounded')).toStrictEqual(group('radius'))
  })

  it('set every type role in a font, a size and a leading of the scale', () => {
    const [font, text, leading] = [
      group('font'),
      group('text'),
      group('leading'),
    ]
    const type = listed('typography')

    for (const [role, [family, size, height]] of Object.entries(ROLES)) {
      expect(type[`${role}.fontFamily`]).toBe(font[family])
      expect(type[`${role}.fontSize`]).toBe(ceiling(text[size] ?? ''))
      expect(type[`${role}.lineHeight`]).toBe(
        height === null ? undefined : leading[height],
      )
    }

    // Every role is checked, and every size of the scale has a role.
    expect(
      new Set(Object.keys(type).map((key) => key.split('.', 1)[0])),
    ).toStrictEqual(new Set(Object.keys(ROLES)))
    expect(new Set(Object.values(ROLES).map(([, size]) => size))).toStrictEqual(
      new Set(Object.keys(text)),
    )
  })

  it('have their motion, layers and fluid sizes in the sidecar, and no other', () => {
    const motion = {
      ...prefixed('dur', group('dur')),
      ...prefixed('ease', group('ease')),
      'settle-step': `${between(read('settle.ts'), 'SETTLE_STEP_MS = ', '\n')}ms`,
      'reduced-motion': between(
        read('global.css'),
        'animation-duration: ',
        ' !important',
      ),
    }
    const layers = Object.entries(group('z'))
    const { display = '', hero = '' } = group('text')

    for (const [name, value] of Object.entries(motion)) {
      expect(SIDECAR).toContain(`"name": "${name}", "value": "${value}"`)
    }
    for (const [name, value] of layers) {
      expect(SIDECAR).toContain(`{ "name": "${name}", "value": ${value} }`)
    }

    // As many entries as tokens, so the sidecar lists none the source lacks.
    expect(named(between(SIDECAR, '"motion": [', ']'))).toBe(
      Object.keys(motion).length,
    )
    expect(named(between(SIDECAR, '"zIndex": [', ']'))).toBe(layers.length)
    expect(SIDECAR).toContain(`"fluid": "${hero}"`)
    expect(SIDECAR).toContain(`"fluid": "${display}"`)
  })
})
