import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { homePage } from './home.server'
import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Heavens Arena tests require Hunter x Hunter')
}
const { archive } = series
const RECORDS = [
  { id: 'heavens-arena', episode: 27, chapter: 44, place: true },
  { id: 'zushi', episode: 27, chapter: 45, place: false },
  { id: 'wing', episode: 27, chapter: 45, place: false },
  { id: 'gido', episode: 29, chapter: 49, place: false },
  { id: 'kastro', episode: 31, chapter: 52, place: false },
  { id: 'sadaso', episode: 33, chapter: 57, place: false },
  { id: 'riehlvelt', episode: 34, chapter: 59, place: false },
]
const CASES = RECORDS.flatMap((record) =>
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

function character(id: string): Entity {
  const record = archive.getCharacter(id)
  if (record === undefined) {
    throw new Error(`Missing ${id} fixture`)
  }
  return record
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

describe('Kastro’s death', () => {
  const kastro = character('kastro')

  it.each(
    LOCALES.flatMap((locale) => [
      { unit: 'episode', opens: 31, death: 32, locale },
      { unit: 'chapter', opens: 52, death: 54, locale },
    ]),
  )(
    'pins it and its drawing together in $unit units ($locale)',
    ({ unit, opens, death, locale }) => {
      const alive = readerFor(archive, at(unit, opens), locale)
      const before = readerFor(archive, at(unit, death - 1), locale)
      const reached = readerFor(archive, at(unit, death), locale)

      expect(archive.latestOf(before, kastro, 'status')).toBe('alive')
      expect(archive.latestOf(reached, kastro, 'status')).toBe('deceased')
      expect(drawingsFor(['kastro'], before)).toStrictEqual(
        drawingsFor(['kastro'], alive),
      )
      expect(drawingsFor(['kastro'], reached)).not.toStrictEqual(
        drawingsFor(['kastro'], before),
      )
    },
  )
})

describe('the returning characters at Heavens Arena', () => {
  it.each([
    { unit: 'episode', pupils: 29, floor: 28, tattoo: 32 },
    { unit: 'chapter', pupils: 48, floor: 47, tattoo: 55 },
  ])(
    'pins each new affiliation in $unit units',
    ({ unit, pupils, floor, tattoo }) => {
      const read = (count: number): Reader =>
        readerFor(archive, at(unit, count), 'en')
      const gon = character('gon-freecss')
      const killua = character('killua')
      const hisoka = character('hisoka')

      expect(factsOf(gon, read(pupils - 1)).affiliation).toBe(
        'Hunter Association, Hunter',
      )
      expect(factsOf(gon, read(pupils)).affiliation).toMatch(/Wing’s pupil/u)
      expect(factsOf(killua, read(pupils - 1)).affiliation).toBe(
        'Travelling with Gon',
      )
      expect(factsOf(killua, read(pupils)).affiliation).toMatch(/Wing’s pupil/u)

      expect(factsOf(hisoka, read(floor - 1)).affiliation).toBe(
        'Hunter Association, Hunter',
      )
      expect(factsOf(hisoka, read(floor)).affiliation).toMatch(/200th-floor/u)
      expect(factsOf(hisoka, read(tattoo - 1)).affiliation).not.toMatch(
        /Phantom Troupe/u,
      )
      expect(factsOf(hisoka, read(tattoo)).affiliation).toMatch(
        /fake member of the Phantom Troupe/u,
      )
    },
  )
})

/**
 * Each Nen user's row: absent until the story shows them using Nen, then
 * "not yet known" until Water Divination, chapter 60 and episode 35 (#922).
 */
const NEN = [
  { id: 'zushi', episode: 27, chapter: 46, type: 'manipulator' },
  { id: 'wing', episode: 28, chapter: 46, type: 'enhancer' },
  { id: 'hisoka', episode: 28, chapter: 47, type: 'transmuter' },
  { id: 'gon-freecss', episode: 29, chapter: 48, type: 'enhancer' },
  { id: 'killua', episode: 29, chapter: 48, type: 'transmuter' },
  { id: 'gido', episode: 29, chapter: 49, type: 'enhancer' },
  { id: 'kastro', episode: 31, chapter: 52, type: 'enhancer' },
  { id: 'sadaso', episode: 33, chapter: 57, type: 'unknown' },
  { id: 'riehlvelt', episode: 34, chapter: 59, type: 'unknown' },
]

describe.each(
  NEN.flatMap((row) =>
    ['episode', 'chapter'].map((unit) => ({ ...row, unit })),
  ),
)('$id’s Nen type by $unit', ({ id, unit, type, ...pins }) => {
  const opens = unit === 'chapter' ? pins.chapter : pins.episode
  const reveal = unit === 'chapter' ? 60 : 35
  const nenAt = (count: number): string | undefined =>
    factsOf(character(id), readerFor(archive, at(unit, count), 'en')).nen

  it('has no row until the story shows the character using Nen', () => {
    expect(nenAt(opens - 1)).toBeUndefined()
    expect(nenAt(opens)).toBe('unknown')
  })

  it('tells the type at Water Divination, not an episode or chapter before', () => {
    expect(nenAt(reveal - 1)).toBe('unknown')
    expect(nenAt(reveal)).toBe(type)
  })
})

describe('the home inside the arc', () => {
  it.each(['episode', 'chapter'])(
    'lists the arc’s own stories from its first one, by %s',
    (unit) => {
      // Zushi's and Killua's first stories of the arc: episode 27, chapter 45.
      const first = unit === 'chapter' ? 45 : 27
      const inside = homePage(readerFor(archive, at(unit, first), 'en'))

      expect(inside.saga.id).toBe('heavens-arena-arc')
      expect(inside.before).toBe(false)
      expect(inside.stories.map(({ subject }) => subject.id)).toStrictEqual(
        expect.arrayContaining(['zushi', 'killua']),
      )
    },
  )
})

describe('the arc’s leads', () => {
  it('names the cast row of the Heavens Arena arc', () => {
    expect(archive.leads['heavens-arena-arc']).toStrictEqual([
      'gon-freecss',
      'killua',
      'wing',
      'zushi',
      'hisoka',
    ])
  })
})
