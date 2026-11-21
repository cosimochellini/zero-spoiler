import { describe, expect, it } from 'vitest'

import { INPUTS, MAX_FIELD_LENGTH, MAX_IDS } from './inputs'

const { addressed, handled, listed, located } = INPUTS

const alphabetically = (a: string, b: string): number => a.localeCompare(b)

const PAGE = { series: 'one-piece', locale: 'en' }
const LONG = 'a'.repeat(MAX_FIELD_LENGTH + 1)
const idsOf = (count: number): string[] =>
  Array.from({ length: count }, (_, index) => `id-${String(index)}`)

describe('every input shape', () => {
  it.each(Object.entries(INPUTS))(
    '%s refuses a series the registry does not know',
    (_, validate) => {
      for (const series of ['atlantis', '', 1, undefined]) {
        expect(() =>
          validate({ ...PAGE, series, id: 'x', ids: ['x'], handle: 'x' }),
        ).toThrow('A known series is required')
      }
    },
  )

  it.each(Object.entries(INPUTS))(
    '%s refuses a locale the site does not speak',
    (_, validate) => {
      for (const locale of ['fr', '', 'EN', undefined]) {
        expect(() =>
          validate({ ...PAGE, locale, id: 'x', ids: ['x'], handle: 'x' }),
        ).toThrow('A known locale is required')
      }
    },
  )

  it.each(Object.entries(INPUTS))(
    '%s refuses a body that is not an object, or names its fields only by inheritance',
    (_, validate) => {
      for (const body of [
        null,
        undefined,
        'one-piece',
        1,
        Object.create(PAGE),
      ]) {
        expect(() => validate(body)).toThrow(/required/u)
      }
    },
  )

  it.each(Object.entries(INPUTS))(
    '%s drops every field it does not know, a bookmark first',
    (_, validate) => {
      const sent = validate({
        ...PAGE,
        id: 'x',
        ids: ['x'],
        handle: 'x',
        bookmark: { mode: 'chapter', chapter: 1100 },
      })

      expect(sent).not.toHaveProperty('bookmark')
      expect(Object.keys(sent).toSorted(alphabetically)).toStrictEqual(
        [
          'locale',
          'series',
          ...(validate === addressed ? ['id'] : []),
          ...(validate === listed ? ['ids'] : []),
          ...(validate === handled ? ['handle'] : []),
        ].toSorted(alphabetically),
      )
    },
  )
})

describe('located', () => {
  it('takes the series and the locale', () => {
    expect(located({ series: 'hunter-x-hunter', locale: 'it' })).toStrictEqual({
      series: 'hunter-x-hunter',
      locale: 'it',
    })
  })
})

describe.each([
  { name: 'addressed', field: 'id', validate: addressed },
  { name: 'handled', field: 'handle', validate: handled },
])('$name', ({ field, validate }) => {
  it(`refuses a missing, empty, over-long or non-string ${field}`, () => {
    for (const value of [undefined, '', LONG, 7, ['x']]) {
      expect(() => validate({ ...PAGE, [field]: value })).toThrow(
        `A ${field} is required`,
      )
    }
  })

  it(`takes a ${field} as long as the archive could mint`, () => {
    const value = 'a'.repeat(MAX_FIELD_LENGTH)

    expect(validate({ ...PAGE, [field]: value })).toStrictEqual({
      ...PAGE,
      [field]: value,
    })
  })
})

describe('listed', () => {
  it(`refuses no ids, an empty list or more than ${String(MAX_IDS)}`, () => {
    for (const ids of [undefined, 'x', [], idsOf(MAX_IDS + 1)]) {
      expect(() => listed({ ...PAGE, ids })).toThrow('Some ids are required')
    }
  })

  it('refuses a list holding an empty, over-long or non-string id', () => {
    for (const bad of ['', LONG, 7, null]) {
      expect(() => listed({ ...PAGE, ids: ['x', bad] })).toThrow(
        'A id is required',
      )
    }
  })

  it(`takes up to ${String(MAX_IDS)} ids`, () => {
    const ids = idsOf(MAX_IDS)

    expect(listed({ ...PAGE, ids })).toStrictEqual({ ...PAGE, ids })
  })
})
