import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'
import { LOADED_SERIES } from '~/test/series'

import { homePage } from './home.server'
import { characterPage } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 1 tests require Game of Thrones')
}
const { archive } = series

/** Each record's gate in each medium, as filed (#852); `source` for one medium. */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'episode'
}[] = [
  { id: 'eddard-stark', episode: 1, chapter: 2 },
  { id: 'catelyn-stark', episode: 1, chapter: 3 },
  { id: 'robb-stark', episode: 1, chapter: 2 },
  { id: 'sansa-stark', episode: 1, chapter: 5 },
  { id: 'arya-stark', episode: 1, chapter: 5 },
  { id: 'bran-stark', episode: 1, chapter: 2 },
  { id: 'rickon-stark', episode: 1, chapter: 5 },
  { id: 'jon-snow', episode: 1, chapter: 2 },
  { id: 'benjen-stark', episode: 1, chapter: 6 },
  { id: 'grey-wind', episode: 8, chapter: 11 },
  { id: 'lady-direwolf', episode: 1, chapter: 16 },
  { id: 'nymeria', episode: 2, chapter: 8 },
  { id: 'summer-direwolf', episode: 4, chapter: 18 },
  { id: 'shaggydog', episode: 10, chapter: 25 },
  { id: 'ghost-direwolf', episode: 4, chapter: 6 },
  { id: 'theon-greyjoy', episode: 1, chapter: 2 },
  { id: 'luwin', episode: 1, chapter: 7 },
  { id: 'rodrik-cassel', episode: 1, chapter: 8 },
  { id: 'old-nan', episode: 3, chapter: 15 },
  { id: 'hodor', episode: 4, chapter: 25 },
  { id: 'osha', episode: 6, chapter: 38 },
  { id: 'mordane', episode: 1, chapter: 8 },
  { id: 'jory-cassel', episode: 1, chapter: 2 },
  { id: 'jeor-mormont', episode: 3, chapter: 20 },
  { id: 'aemon', episode: 3, chapter: 22 },
  { id: 'samwell-tarly', episode: 4, chapter: 27 },
  { id: 'alliser-thorne', episode: 3, chapter: 20 },
  { id: 'yoren', episode: 3, chapter: 14 },
  { id: 'cersei-lannister', episode: 1, chapter: 5 },
  { id: 'jaime-lannister', episode: 1, chapter: 5 },
  { id: 'tyrion-lannister', episode: 1, chapter: 5 },
  { id: 'tywin-lannister', episode: 7, chapter: 57 },
  { id: 'joffrey-baratheon', episode: 1, chapter: 5 },
  { id: 'myrcella-baratheon', episode: 1, chapter: 6 },
  { id: 'tommen-baratheon', episode: 1, chapter: 6 },
  { id: 'robert-baratheon', episode: 1, chapter: 5 },
  { id: 'renly-baratheon', episode: 3, chapter: 16 },
  { id: 'lysa-arryn', episode: 5, chapter: 35 },
  { id: 'robin-arryn', episode: 5, chapter: 35 },
  { id: 'bronn', episode: 4, chapter: 32 },
  { id: 'shae', episode: 9, chapter: 63 },
  { id: 'walder-frey', episode: 9, chapter: 60 },
  { id: 'ros', episode: 4, chapter: 25, source: 'episode' },
  { id: 'ilyn-payne', episode: 2, chapter: 16 },
  { id: 'barristan-selmy', episode: 3, chapter: 16 },
  { id: 'syrio-forel', episode: 3, chapter: 23 },
  { id: 'petyr-baelish', episode: 3, chapter: 19 },
  { id: 'varys', episode: 3, chapter: 19 },
  { id: 'pycelle', episode: 3, chapter: 21 },
  { id: 'sandor-clegane', episode: 4, chapter: 5 },
  { id: 'janos-slynt', episode: 4, chapter: 28 },
  { id: 'gendry', episode: 4, chapter: 28 },
  { id: 'gregor-clegane', episode: 4, chapter: 30 },
  { id: 'loras-tyrell', episode: 5, chapter: 30 },
  { id: 'daenerys-targaryen', episode: 1, chapter: 4 },
  { id: 'viserys-targaryen', episode: 1, chapter: 4 },
  { id: 'drogo', episode: 1, chapter: 4 },
  { id: 'jorah-mormont', episode: 1, chapter: 4 },
  { id: 'illyrio-mopatis', episode: 1, chapter: 4 },
  { id: 'irri', episode: 2, chapter: 12 },
  { id: 'doreah', episode: 2, chapter: 12 },
  { id: 'rakharo', episode: 3, chapter: 24 },
  { id: 'mirri-maz-duur', episode: 8, chapter: 62 },
]

/** Every status change within season 1 / *A Game of Thrones*, pinned in both media. */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  value: CharacterStatus
}[] = [
  { id: 'eddard-stark', episode: 7, chapter: 50, value: 'captured' },
  { id: 'eddard-stark', episode: 9, chapter: 66, value: 'deceased' },
  { id: 'sansa-stark', episode: 8, chapter: 52, value: 'captured' },
  { id: 'lady-direwolf', episode: 2, chapter: 17, value: 'deceased' },
  { id: 'mordane', episode: 10, chapter: 68, value: 'deceased' },
  { id: 'jory-cassel', episode: 5, chapter: 36, value: 'deceased' },
  { id: 'robert-baratheon', episode: 7, chapter: 50, value: 'deceased' },
  { id: 'tyrion-lannister', episode: 4, chapter: 29, value: 'captured' },
  { id: 'tyrion-lannister', episode: 6, chapter: 41, value: 'alive' },
  { id: 'jaime-lannister', episode: 9, chapter: 64, value: 'captured' },
  { id: 'viserys-targaryen', episode: 6, chapter: 47, value: 'deceased' },
  { id: 'drogo', episode: 10, chapter: 69, value: 'deceased' },
  { id: 'mirri-maz-duur', episode: 10, chapter: 73, value: 'deceased' },
]

type Unit = 'chapter' | 'episode'
const UNITS: Unit[] = ['episode', 'chapter']

function at(unit: Unit, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

/** A reader at this count of this unit, in this locale. */
function reader(unit: Unit, count: number, locale: Locale = 'en'): Reader {
  return readerFor(archive, at(unit, count), locale)
}

/** Each record in each locale and in each unit that tells it, at its gate. */
const GATES = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    UNITS.filter((unit) => (record.source ?? unit) === unit).map((unit) => ({
      id: record.id,
      gate: unit === 'chapter' ? record.chapter : record.episode,
      locale,
      unit,
    })),
  ),
)

const byText = (a: string, b: string): number => a.localeCompare(b)

function opened(id: string, view: Reader): boolean {
  const page = characterPage(id, view)
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

function character(id: string): Entity {
  const record = archive.getCharacter(id)
  if (record === undefined) {
    throw new Error(`Missing ${id} fixture`)
  }
  return record
}

describe('the first season’s cast', () => {
  it('files exactly these records', () => {
    expect(archive.entities.map(({ id }) => id).toSorted(byText)).toStrictEqual(
      RECORDS.map(({ id }) => id).toSorted(byText),
    )
  })

  it.each(GATES)(
    'opens $id at its named scene by $unit in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate, locale))).toBe(true)
    },
  )

  // Gate 1 has no bookmark below it: nothing is read before episode 1.
  it.each(GATES.filter(({ gate }) => gate > 1))(
    'keeps $id closed one $unit before it in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate - 1, locale))).toBe(false)
    },
  )

  it.each(RECORDS.filter(({ source }) => source !== undefined))(
    'never opens the show-only $id to a reader of the books',
    ({ id }) => {
      const last = reader('chapter', archive.series.chapterCeiling)

      expect(opened(id, last)).toBe(false)
    },
  )
})

describe.each(
  CHANGES.flatMap((change) => UNITS.map((unit) => ({ ...change, unit }))),
)('$id becomes $value by $unit', ({ id, episode, chapter, value, unit }) => {
  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode
    const owner = character(id)
    const before = reader(unit, pin - 1)
    const reached = reader(unit, pin)

    expect(archive.latestOf(before, owner, 'status')).not.toBe(value)
    expect(archive.latestOf(reached, owner, 'status')).toBe(value)
  })
})

describe('the season’s leads', () => {
  it.each(UNITS)('heads the home page by %s with the main cast', (unit) => {
    const page = homePage(reader(unit, 10))

    expect(JSON.stringify(page)).toContain('Eddard Stark')
    expect(archive.leads['season-1']).toStrictEqual([
      'eddard-stark',
      'jon-snow',
      'daenerys-targaryen',
      'tyrion-lannister',
      'arya-stark',
    ])
  })
})
