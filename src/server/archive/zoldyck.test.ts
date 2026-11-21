import { describe, expect, it } from 'vitest'

import { bookmarkAt as at, gateCases, opened } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('hunter-x-hunter')
const RECORDS = [
  { id: 'coco-loo', episode: 22, chapter: 39, place: false },
  { id: 'zebro', episode: 22, chapter: 39, place: false },
  { id: 'mike', episode: 22, chapter: 40, place: false },
  { id: 'seaquant', episode: 23, chapter: 40, place: false },
  { id: 'canary', episode: 24, chapter: 42, place: false },
  { id: 'gotoh', episode: 25, chapter: 43, place: false },
  { id: 'milluki', episode: 23, chapter: 42, place: false },
  { id: 'zeno', episode: 24, chapter: 42, place: false },
  // Unanchored: Zeno names him in episode 24, the manga only in chapter 95.
  { id: 'silva', episode: 24, chapter: 95, place: false },
  { id: 'kalluto', episode: 24, chapter: 42, place: false },
  { id: 'republic-of-padokea', episode: 22, chapter: 39, place: true },
  { id: 'kukuroo-mountain', episode: 22, chapter: 39, place: true },
]
const CASES = gateCases(RECORDS, archive.series)

describe.each(CASES)('$id in $locale by $unit', (row) => {
  it('opens the record and drawing at its named-scene gate, never before', () => {
    const before = readerFor(archive, row.before, row.locale)
    const reached = readerFor(archive, row.reached, row.locale)

    expect(opened(row.id, before)).toBe(false)
    expect(opened(row.id, reached)).toBe(true)
  })
})

describe('Killua after the exam and at home', () => {
  const killua = archive.getCharacter('killua')
  if (killua === undefined) {
    throw new Error('Missing Killua fixture')
  }

  it.each([
    { unit: 'episode', failed: 20, home: 22, departure: 25 },
    { unit: 'chapter', failed: 36, home: 39, departure: 43 },
  ])(
    'pins the three changes in $unit units',
    ({ unit, failed, home, departure }) => {
      const read = (count: number): Reader =>
        readerFor(archive, at(unit, count), 'en')

      expect(factsOf(killua, read(failed - 1)).affiliation).not.toMatch(
        /disqualified/u,
      )
      expect(factsOf(killua, read(failed)).affiliation).toMatch(/disqualified/u)

      expect(factsOf(killua, read(home - 1)).origin).toBeUndefined()
      expect(factsOf(killua, read(home)).origin).toBe(
        'Kukuroo Mountain, family home',
      )

      expect(factsOf(killua, read(departure)).affiliation).toBe(
        'Travelling with Gon',
      )
    },
  )
})

describe('Illumi’s family home', () => {
  const illumi = archive.getCharacter('illumi')
  if (illumi === undefined) {
    throw new Error('Missing Illumi fixture')
  }

  it.each([
    { unit: 'episode', home: 22 },
    { unit: 'chapter', home: 39 },
  ])(
    'opens the origin in $unit units with the visited mountain',
    ({ unit, home }) => {
      const before = readerFor(archive, at(unit, home - 1), 'en')
      const reached = readerFor(archive, at(unit, home), 'en')

      expect(factsOf(illumi, before).origin).toBeUndefined()
      expect(factsOf(illumi, reached).origin).toBe(
        'Kukuroo Mountain, family home',
      )
      expect(archive.dossierOf(illumi)?.origin).toContainEqual({
        episode: 22,
        chapter: 39,
        place: 'kukuroo-mountain',
        value: {
          it: 'Monte Kucruu, dimora della famiglia',
          en: 'Kukuroo Mountain, family home',
        },
      })
    },
  )
})
