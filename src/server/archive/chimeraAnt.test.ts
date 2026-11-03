import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
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

function characterById(
  id: string,
): NonNullable<ReturnType<typeof archive.getCharacter>> {
  const character = archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`Missing character ${id}`)
  }
  return character
}
const RECORDS = [
  { id: 'spinner-clow', episode: 77, chapter: 186, place: false },
  { id: 'banana-kavaro', episode: 77, chapter: 186, place: false },
  { id: 'monta-yuras', episode: 77, chapter: 186, place: false },
  { id: 'stick-dinner', episode: 77, chapter: 186, place: false },
  { id: 'ngl', episode: 79, chapter: 189, place: true },
  { id: 'neferpitou', episode: 84, chapter: 198, place: false },
]
const PHASE_TWO = [
  { id: 'palm-siberia', episode: 86, chapter: 200, place: false },
  { id: 'shaiapouf', episode: 86, chapter: 202, place: false },
  { id: 'meruem', episode: 92, chapter: 215, place: false },
]
const CASES = [...RECORDS, ...PHASE_TWO].flatMap((record) =>
  LOCALES.flatMap((locale) =>
    ['episode', 'chapter'].map((unit) => ({ ...record, locale, unit })),
  ),
)

function at(unit: string, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

function opened(id: string, place: boolean, reader: Reader): boolean {
  const page = place ? placePage(id, reader) : characterPage(id, reader)
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

describe.each(CASES)('$id in $locale by $unit', (row) => {
  it('opens the record and drawing at its named scene, never before', () => {
    const threshold = row.unit === 'chapter' ? row.chapter : row.episode
    const before = readerFor(archive, at(row.unit, threshold - 1), row.locale)
    const reached = readerFor(archive, at(row.unit, threshold), row.locale)

    expect(opened(row.id, row.place, before)).toBe(false)
    expect(drawingsFor([row.id], before)).toStrictEqual({})

    expect(opened(row.id, row.place, reached)).toBe(true)
    expect(drawingsFor([row.id], reached)[row.id]?.length).toBeGreaterThan(3)
  })
})

describe('Chimera Ant dated facts', () => {
  it.each(
    CASES.filter(
      ({ id, place }) =>
        !place && PHASE_TWO.every((record) => record.id !== id),
    ),
  )(
    'opens the relationship with Kite for $id in $locale by $unit',
    ({ id, locale, unit, episode, chapter }) => {
      const character = characterById(id)
      const episodeGate = id === 'neferpitou' ? 85 : episode
      const gate = unit === 'chapter' ? chapter : episodeGate
      const related = (count: number): boolean =>
        relationshipsOf(
          character,
          readerFor(archive, at(unit, count), locale),
        ).some(({ person }) => person.id === 'kite')

      expect(related(gate - 1)).toBe(false)
      expect(related(gate)).toBe(true)
    },
  )

  it.each(
    LOCALES.flatMap((locale) => [
      { locale, unit: 'episode', gate: 77 },
      { locale, unit: 'chapter', gate: 186 },
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

  it('lists the Chimera Ant arc leads', () => {
    expect(archive.leads['chimera-ant-arc']).toStrictEqual([
      'kite',
      'gon-freecss',
      'killua',
      'neferpitou',
      'palm-siberia',
      'shaiapouf',
      'meruem',
    ])
  })
})
