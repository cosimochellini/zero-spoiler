import { describe, expect, it } from 'vitest'

import { season2 } from '~/data/series/game-of-thrones/records/season-2'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'
import { LOADED_SERIES } from '~/test/series'

import { characterPage } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 2 tests require Game of Thrones')
}
const { archive } = series

/**
 * Each season-2 record's gate in each medium, as filed (#1463); `source` for
 * one medium, whose other number only orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'daisy', episode: 11, chapter: 77, source: 'episode' },
  { id: 'jacelyn-bywater', episode: 12, chapter: 82, source: 'chapter' },
  { id: 'hallyne', episode: 15, chapter: 94, source: 'chapter' },
  { id: 'lollys-stokeworth', episode: 13, chapter: 118, source: 'chapter' },
  { id: 'osmund-kettleblack', episode: 18, chapter: 123, source: 'chapter' },
  { id: 'alayaya', episode: 18, chapter: 128, source: 'chapter' },
  { id: 'garlan-tyrell', episode: 20, chapter: 139, source: 'chapter' },
]

/**
 * Every status change the second stage files, on its new records and on the
 * characters season 1 filed, pinned in both media; `source` for a change one
 * medium alone tells.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  { id: 'pycelle', episode: 13, chapter: 99, value: 'imprisoned' },
  {
    id: 'pycelle',
    episode: 14,
    chapter: 103,
    source: 'episode',
    value: 'alive',
  },
  {
    id: 'ros',
    episode: 18,
    chapter: 128,
    source: 'episode',
    value: 'captured',
  },
  { id: 'ros', episode: 20, chapter: 141, source: 'episode', value: 'alive' },
]

/**
 * Every role and affiliation step the second stage adds to a character
 * season 1 filed, by its English text; `source` for a step one medium alone
 * tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  {
    id: 'tyrion-lannister',
    en: 'Former acting Hand of the King',
    episode: 20,
    chapter: 141,
  },
  {
    id: 'bronn',
    en: 'Commander of the City Watch',
    episode: 12,
    chapter: 82,
    source: 'episode',
  },
  {
    id: 'bronn',
    en: 'Former commander of the City Watch',
    episode: 20,
    chapter: 141,
    source: 'episode',
  },
  { id: 'janos-slynt', en: 'Exiled to the Wall', episode: 12, chapter: 82 },
  {
    id: 'lancel-lannister',
    en: 'Knight in the queen’s service',
    episode: 14,
    chapter: 103,
  },
  {
    id: 'sandor-clegane',
    en: 'Deserter from the Kingsguard',
    episode: 19,
    chapter: 136,
  },
  { id: 'sandor-clegane', en: 'No allegiance', episode: 19, chapter: 136 },
  {
    id: 'myrcella-baratheon',
    en: 'Princess sent to Dorne',
    episode: 16,
    chapter: 115,
  },
  {
    id: 'petyr-baelish',
    en: 'Master of coin and Lord of Harrenhal',
    episode: 20,
    chapter: 139,
  },
  {
    id: 'shae',
    en: 'Sansa Stark’s handmaiden',
    episode: 13,
    chapter: 99,
    source: 'episode',
  },
  {
    id: 'shae',
    en: 'Lollys Stokeworth’s maid',
    episode: 19,
    chapter: 131,
    source: 'chapter',
  },
  {
    id: 'balon-swann',
    en: 'Knight of the Kingsguard',
    episode: 18,
    chapter: 123,
    source: 'chapter',
  },
  {
    id: 'balon-swann',
    en: 'Kingsguard',
    episode: 18,
    chapter: 123,
    source: 'chapter',
  },
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

/** The reader of the other medium at its last count. */
function otherAtTheEnd(source: Unit): Reader {
  return source === 'episode' ?
      reader('chapter', archive.series.chapterCeiling)
    : reader('episode', archive.series.episodeCeiling)
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

describe('the second season’s King’s Landing cast', () => {
  // The other cast groups file their own records in the same module, each
  // pinned in its own test (#1465 in `thronesSeason2Riverlands.test.ts`,
  // #1466 in `thronesSeason2Winterfell.test.ts`).
  it('files these records', () => {
    // Each cast group's test lists its own records; the season holds them
    // all (#1468).
    expect(season2.entries.map(({ id }) => id).toSorted(byText)).toStrictEqual(
      expect.arrayContaining(RECORDS.map(({ id }) => id).toSorted(byText)),
    )
  })

  it.each(GATES)(
    'opens $id at its named scene by $unit in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate, locale))).toBe(true)
    },
  )

  it.each(GATES)(
    'keeps $id closed one $unit before it in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate - 1, locale))).toBe(false)
    },
  )

  it.each(RECORDS.filter(({ source }) => source !== undefined))(
    'never opens the one-medium $id to a reader of the other',
    ({ id, source = 'episode' }) => {
      expect(opened(id, otherAtTheEnd(source))).toBe(false)
    },
  )
})

describe.each(
  CHANGES.flatMap((change) =>
    UNITS.filter((unit) => (change.source ?? unit) === unit).map((unit) => ({
      ...change,
      unit,
    })),
  ),
)('$id becomes $value by $unit', ({ id, episode, chapter, value, unit }) => {
  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode
    const owner = character(id)

    expect(archive.latestOf(reader(unit, pin - 1), owner, 'status')).not.toBe(
      value,
    )
    expect(archive.latestOf(reader(unit, pin), owner, 'status')).toBe(value)
  })
})

describe('the status changes one medium alone tells', () => {
  it.each(CHANGES.filter(({ source }) => source !== undefined))(
    'never makes $id $value for a reader of the other medium',
    ({ id, source = 'episode', value }) => {
      const last = otherAtTheEnd(source)

      expect(archive.latestOf(last, character(id), 'status')).not.toBe(value)
    },
  )
})

describe.each(
  STEPS.flatMap((step) =>
    UNITS.filter((unit) => (step.source ?? unit) === unit).map((unit) => ({
      ...step,
      unit,
    })),
  ),
)('$id: “$en” by $unit', ({ id, en, episode, chapter, unit }) => {
  // A page names a role or an affiliation as a whole string of its own.
  const shown = (count: number): boolean =>
    JSON.stringify(characterPage(id, reader(unit, count)) ?? null).includes(
      JSON.stringify(en),
    )

  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode

    expect(shown(pin - 1)).toBe(false)
    expect(shown(pin)).toBe(true)
  })
})

describe('the steps one medium alone tells', () => {
  it.each(STEPS.filter(({ source }) => source !== undefined))(
    'never shows “$en” to a reader of the other medium',
    ({ id, en, source = 'episode' }) => {
      const page = JSON.stringify(
        characterPage(id, otherAtTheEnd(source)) ?? null,
      )

      expect(page).not.toContain(JSON.stringify(en))
    },
  )
})

describe('the season’s leads', () => {
  it('lists the King’s Landing, stormlands, Iron Islands and Wall leads', () => {
    expect(archive.leads['season-2']).toStrictEqual(
      expect.arrayContaining([
        'tyrion-lannister',
        'cersei-lannister',
        'stannis-baratheon',
        'davos-seaworth',
        'theon-greyjoy',
        'jon-snow',
      ]),
    )
  })
})

describe('the second season’s heading', () => {
  it('opens with its first record in each medium', () => {
    const heading = archive.arcs.find(({ id }) => id === 'season-2')

    // Episode 11 (Daisy, Alton Lannister and Stannis's cast); chapter 74,
    // the prologue of A Clash of Kings, since the stormlands cast (#1464);
    // Cleos Frey (Catelyn I, #1465) opens at chapter 81 and Thoren Smallwood
    // (Jon I, the Wall cast #1467) at chapter 80 in the books.
    expect(heading?.revealedAtEpisode).toBe(11)
    expect(heading?.revealedAtChapter).toBe(74)
  })
})
