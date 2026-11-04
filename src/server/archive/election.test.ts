import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { homePage } from './home.server'
import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Election tests require Hunter x Hunter')
}
const { archive } = series

const UNITS = ['episode', 'chapter'] as const
type Unit = (typeof UNITS)[number]
type Gate = [id: string, episode: number, chapter: number, source?: Unit]
const CHARACTERS: Gate[] = [
  ['alluka-zoldyck', 138, 321],
  ['amane', 140, 324],
  ['hishita', 143, 329],
  ['kasuga', 138, 322],
  ['mitsuba', 138, 322],
  ['muna', 139, 323],
  ['yasuha', 139, 323],
  ['nanika', 139, 332],
  ['tsubone', 140, 324],
  ['beans', 137, 319],
  ['botobai-gigante', 137, 319],
  ['cheadle-yorkshire', 137, 319],
  ['cluck', 137, 320, 'episode'],
  ['gel', 137, 321],
  ['ginta', 137, 320],
  ['kanzai', 137, 320],
  ['mizaistom-nana', 137, 326],
  ['pariston-hill', 137, 321],
  ['pyon', 137, 320],
  ['saccho-kobayakawa', 137, 326],
  ['saiyu', 137, 321],
  ['bushidora-ambitious', 141, 326],
  ['cutie-beauty', 141, 326],
  ['ickshonpe-katocha', 141, 326],
  ['linne-horsdoeuvre', 141, 326],
  ['loupe-highland', 141, 326],
  ['sanbica-norton', 141, 326],
  ['teradein-neutral', 141, 326],
]
const PLACES: Gate[] = [
  ['parasta-airport', 142, 328, 'episode'],
  ['swardani-city', 142, 328, 'episode'],
  ['world-tree', 147, 337],
]

function at(unit: Unit, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

const CASES = [
  ...CHARACTERS.map((gate) => ({ gate, page: characterPage })),
  ...PLACES.map((gate) => ({ gate, page: placePage })),
].map(({ gate, page }) => {
  const [id, episode, chapter, source] = gate
  return { id, episode, chapter, source, page }
})

function opened(
  page: ReturnType<typeof characterPage | typeof placePage>,
): boolean {
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

function character(id: string): Entity {
  const entity = archive.getCharacter(id)
  if (entity === undefined) {
    throw new Error(`Missing Election fixture ${id}`)
  }
  return entity
}

describe.each(UNITS)('Election by %s', (unit) => {
  describe.each(LOCALES)('in %s', (locale) => {
    const read = (count: number): Reader =>
      readerFor(archive, at(unit, count), locale)
    const applicable = CASES.filter(
      ({ source }) => source === undefined || source === unit,
    )
    const excluded = CASES.filter(
      ({ source }) => source !== undefined && source !== unit,
    )

    it.each(applicable)('gates $id and its artwork', (row) => {
      const { id, page } = row
      const gate = row[unit]
      const before = read(gate - 1)
      const reached = read(gate)

      expect(opened(page(id, before))).toBe(false)
      expect(drawingsFor([id], before)).toStrictEqual({})
      expect(opened(page(id, reached))).toBe(true)
      expect(drawingsFor([id], reached)[id]?.length).toBeGreaterThan(3)
    })

    it.each(excluded)('excludes $id from the other medium', ({ id, page }) => {
      const finale = read(unit === 'chapter' ? 339 : 148)

      expect(page(id, finale)).toBeUndefined()
      expect(drawingsFor([id], finale)).toStrictEqual({})
    })

    it('pins Gotoh’s death and Gon’s recovery', () => {
      const gotoh = character('gotoh')
      const gon = character('gon-freecss')
      const death = unit === 'chapter' ? 327 : 142
      const recovery = unit === 'chapter' ? 334 : 145

      expect(archive.latestOf(read(death - 1), gotoh, 'status')).toBe('alive')
      expect(archive.latestOf(read(death), gotoh, 'status')).toBe('deceased')
      expect(archive.roleOf(read(recovery - 1), gon)?.[locale]).toMatch(
        /Hospitalized|ricoverato/u,
      )
      expect(archive.roleOf(read(recovery), gon)?.[locale]).toMatch(
        /Recovered|guarito/u,
      )
    })
  })
})

describe('the Election home', () => {
  it('opens the Election arc at home and registers its leads', () => {
    expect(archive.leads['election-arc']).toStrictEqual([
      'gon-freecss',
      'killua',
      'alluka-zoldyck',
      'leorio-paradinight',
      'ging-freecss',
      'pariston-hill',
      'cheadle-yorkshire',
      'tsubone',
      'illumi',
    ])

    const reader = readerFor(archive, at('episode', 140), 'en')

    expect(homePage(reader).saga.id).toBe('election-arc')
  })
})
