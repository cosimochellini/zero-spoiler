import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { type Reader, readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Chimera Ant tests require Hunter x Hunter')
}
const { archive } = series

type Unit = 'chapter' | 'episode'
const UNITS: Unit[] = ['episode', 'chapter']

function characterById(
  id: string,
): NonNullable<ReturnType<typeof archive.getCharacter>> {
  const character = archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`Missing character ${id}`)
  }
  return character
}

/** Each record's gate; `only` names the one medium that tells it. */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  only?: Unit
  place?: true
}[] = [
  { id: 'spinner-clow', episode: 77, chapter: 186 },
  { id: 'banana-kavaro', episode: 77, chapter: 186 },
  { id: 'monta-yuras', episode: 77, chapter: 186 },
  { id: 'stick-dinner', episode: 77, chapter: 186 },
  { id: 'lin-koshi', episode: 77, chapter: 186 },
  { id: 'podungo-lapoy', episode: 77, chapter: 186 },
  { id: 'wong', episode: 77, chapter: 187 },
  { id: 'kurt', episode: 77, chapter: 187 },
  { id: 'reina', episode: 77, chapter: 187 },
  { id: 'haruna', episode: 77, chapter: 215, only: 'episode' },
  { id: 'pekuba', episode: 79, chapter: 189, only: 'episode' },
  { id: 'ngl', episode: 79, chapter: 189, place: true },
  { id: 'zazan', episode: 80, chapter: 189 },
  { id: 'peggy', episode: 80, chapter: 189 },
  { id: 'balda', episode: 80, chapter: 190 },
  { id: 'pike', episode: 80, chapter: 190 },
  { id: 'cheetu', episode: 81, chapter: 192 },
  { id: 'rammot', episode: 81, chapter: 192 },
  { id: 'yunju', episode: 82, chapter: 193 },
  { id: 'baro', episode: 83, chapter: 195 },
  { id: 'neferpitou', episode: 84, chapter: 198 },
]
const CASES = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    UNITS.map((unit) => ({ ...record, locale, unit })),
  ),
)

function at(unit: Unit, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

function opened(id: string, place: boolean, reader: Reader): boolean {
  const page = place ? placePage(id, reader) : characterPage(id, reader)
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

describe.each(
  CASES.filter(({ only, unit }) => only === undefined || only === unit),
)('$id in $locale by $unit', (row) => {
  it('opens the record and drawing at its named scene, never before', () => {
    const threshold = row.unit === 'chapter' ? row.chapter : row.episode
    const before = readerFor(archive, at(row.unit, threshold - 1), row.locale)
    const reached = readerFor(archive, at(row.unit, threshold), row.locale)

    expect(opened(row.id, row.place === true, before)).toBe(false)
    expect(drawingsFor([row.id], before)).toStrictEqual({})

    expect(opened(row.id, row.place === true, reached)).toBe(true)
    expect(drawingsFor([row.id], reached)[row.id]?.length).toBeGreaterThan(3)
  })
})

describe.each(
  CASES.filter(({ only, unit }) => only !== undefined && only !== unit),
)('$id in $locale by $unit', ({ id, locale, unit }) => {
  it('never opens the record the other medium alone names', () => {
    const end = readerFor(archive, at(unit, 339), locale)

    expect(opened(id, false, end)).toBe(false)
    expect(drawingsFor([id], end)).toStrictEqual({})
  })
})

/** Each directed relationship this arc opens, at its own gate. */
const RELATIONSHIPS: {
  chapter: number
  episode: number
  id: string
  only?: Unit
  person: string
}[] = [
  ...['spinner-clow', 'banana-kavaro', 'monta-yuras', 'stick-dinner'].map(
    (id) => ({ id, person: 'kite', episode: 77, chapter: 186 }),
  ),
  { id: 'lin-koshi', person: 'kite', episode: 77, chapter: 186 },
  { id: 'podungo-lapoy', person: 'kite', episode: 77, chapter: 186 },
  { id: 'wong', person: 'kite', episode: 77, chapter: 187 },
  { id: 'kurt', person: 'reina', episode: 77, chapter: 187 },
  { id: 'reina', person: 'kurt', episode: 77, chapter: 187 },
  { id: 'haruna', person: 'kurt', episode: 77, chapter: 215, only: 'episode' },
  {
    id: 'pekuba',
    person: 'pokkle',
    episode: 79,
    chapter: 189,
    only: 'episode',
  },
  { id: 'balda', person: 'pokkle', episode: 80, chapter: 190 },
  { id: 'pike', person: 'zazan', episode: 80, chapter: 190 },
  { id: 'zazan', person: 'pokkle', episode: 80, chapter: 190 },
  { id: 'rammot', person: 'gon-freecss', episode: 81, chapter: 192 },
  { id: 'peggy', person: 'rammot', episode: 82, chapter: 194 },
  { id: 'yunju', person: 'kite', episode: 82, chapter: 193 },
  { id: 'baro', person: 'gon-freecss', episode: 83, chapter: 195 },
  { id: 'rammot', person: 'neferpitou', episode: 84, chapter: 198 },
  { id: 'neferpitou', person: 'kite', episode: 85, chapter: 198 },
  { id: 'peggy', person: 'neferpitou', episode: 85, chapter: 198 },
]

/** Every locale and unit that tells a fact `only` one medium may tell. */
function readings(only?: Unit): { locale: Locale; unit: Unit }[] {
  const units = UNITS.filter((unit) => only === undefined || only === unit)
  return LOCALES.flatMap((locale) => units.map((unit) => ({ locale, unit })))
}

function statusAt(id: string, unit: Unit, count: number): string | undefined {
  return archive.latestOf(
    readerFor(archive, at(unit, count), 'en'),
    characterById(id),
    'status',
  )
}

function drawingAt(id: string, unit: Unit, count: number): unknown {
  return drawingsFor([id], readerFor(archive, at(unit, count), 'en'))[id]
}

describe('Chimera Ant dated facts', () => {
  it.each(
    RELATIONSHIPS.flatMap((row) =>
      readings(row.only).map((reading) => ({ ...row, ...reading })),
    ),
  )(
    'opens $id’s card for $person in $locale by $unit',
    ({ id, person, locale, unit, episode, chapter }) => {
      const character = characterById(id)
      const gate = unit === 'chapter' ? chapter : episode
      const related = (count: number): boolean =>
        relationshipsOf(
          character,
          readerFor(archive, at(unit, count), locale),
        ).some((card) => card.person.id === person)

      expect(related(gate - 1)).toBe(false)
      expect(related(gate)).toBe(true)
    },
  )

  it.each(
    LOCALES.flatMap((locale) => [
      { locale, unit: 'episode' as const, gate: 77 },
      { locale, unit: 'chapter' as const, gate: 186 },
    ]),
  )(
    'dates Kite’s survey affiliation in $locale by $unit',
    ({ locale, unit, gate }) => {
      const kite = characterById('kite')
      const affiliation = (count: number): string | undefined =>
        archive.latestOf(
          readerFor(archive, at(unit, count), locale),
          kite,
          'affiliation',
        )?.[locale]

      expect(affiliation(gate - 1)).not.toMatch(/ricerca|survey/u)
      expect(affiliation(gate)).toMatch(/ricerca|survey/u)
    },
  )

  /** Each fate this arc dates, before and at its pin. */
  const FATES: {
    after: string
    before: string
    gate: number
    id: string
    unit: Unit
  }[] = [
    {
      id: 'ponzu',
      unit: 'episode',
      gate: 80,
      before: 'alive',
      after: 'deceased',
    },
    {
      id: 'ponzu',
      unit: 'chapter',
      gate: 190,
      before: 'alive',
      after: 'deceased',
    },
    {
      id: 'pokkle',
      unit: 'episode',
      gate: 80,
      before: 'alive',
      after: 'captured',
    },
    {
      id: 'pokkle',
      unit: 'chapter',
      gate: 190,
      before: 'alive',
      after: 'captured',
    },
    {
      id: 'pokkle',
      unit: 'chapter',
      gate: 198,
      before: 'captured',
      after: 'deceased',
    },
    {
      id: 'pekuba',
      unit: 'episode',
      gate: 80,
      before: 'alive',
      after: 'deceased',
    },
  ]

  it.each(FATES)(
    'dates $id’s fate by $unit at $gate',
    ({ id, unit, gate, before, after }) => {
      expect(statusAt(id, unit, gate - 1)).toBe(before)
      expect(statusAt(id, unit, gate)).toBe(after)
    },
  )

  it('leaves Pokkle captured to the end of the anime', () => {
    expect(statusAt('pokkle', 'episode', 148)).toBe('captured')
  })

  it.each([
    { id: 'ponzu', unit: 'episode' as const, gate: 80 },
    { id: 'ponzu', unit: 'chapter' as const, gate: 190 },
    { id: 'pokkle', unit: 'chapter' as const, gate: 198 },
    { id: 'pekuba', unit: 'episode' as const, gate: 80 },
  ])('redraws $id at its death by $unit', ({ id, unit, gate }) => {
    expect(drawingAt(id, unit, gate)).not.toStrictEqual(
      drawingAt(id, unit, gate - 1),
    )
  })

  it('keeps Pokkle’s drawing for anime viewers', () => {
    expect(drawingAt('pokkle', 'episode', 148)).toStrictEqual(
      drawingAt('pokkle', 'episode', 83),
    )
  })

  it('lists the Chimera Ant arc leads', () => {
    expect(archive.leads['chimera-ant-arc']).toStrictEqual([
      'kite',
      'gon-freecss',
      'killua',
      'neferpitou',
    ])
  })
})
