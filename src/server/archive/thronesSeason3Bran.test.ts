import { describe, expect, it } from 'vitest'

import { season3 } from '~/data/series/game-of-thrones/records/season-3'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterPage } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 3 Bran and Theon tests require Game of Thrones')
}
const { archive } = series

/** The third stage's last episode and chapter (#1626). */
const LAST_EPISODE = 30
const LAST_CHAPTER = 196

/**
 * Each record of the group's gate in each medium (#1641): Myranda, new in
 * the season, and Ramsay Snow, whose show gate moves to the episode that
 * first says his name. `source` for one medium, whose other number only
 * orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  // Reek I of A Dance with Dragons (284), the chapter the scene adapts,
  // orders her.
  { id: 'myranda', episode: 27, chapter: 284, source: 'episode' },
  // "Mhysa": Roose's "Ramsay delivered the terms". #1466 had 32.
  { id: 'ramsay-snow', episode: 30, chapter: 140 },
]

/**
 * Every role and affiliation the group files, by its English text: Myranda's
 * at her gate and the steps on the characters season 1 filed; `source` for
 * what one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  // Bran VII of A Clash of Kings (143) sends him north with the Reeds.
  {
    id: 'bran-stark',
    en: 'On the road north with the Reeds',
    episode: 22,
    chapter: 143,
  },
  // Bran IV (200), past the book's stage (#852).
  {
    id: 'bran-stark',
    en: 'Beyond the Wall with the Reeds',
    episode: 30,
    chapter: 200,
  },
  { id: 'osha', en: 'On the run with Rickon Stark', episode: 29, chapter: 143 },
  {
    id: 'theon-greyjoy',
    en: 'Ramsay Snow’s prisoner at the Dreadfort',
    episode: 30,
    chapter: 193,
  },
  // Her opening role and affiliation: episode 27 shows only the scene.
  {
    id: 'myranda',
    en: 'Young woman at Theon’s prison',
    episode: 27,
    chapter: 284,
    source: 'episode',
  },
  {
    id: 'myranda',
    en: 'No allegiance',
    episode: 27,
    chapter: 284,
    source: 'episode',
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

/** Each entry of these lists in each unit that tells it. */
function byUnit<T extends { source?: Unit }>(
  list: T[],
): (T & { unit: Unit })[] {
  return list.flatMap((entry) =>
    UNITS.filter((unit) => (entry.source ?? unit) === unit).map((unit) => ({
      ...entry,
      unit,
    })),
  )
}

/** A character's page for this reader, as one string. */
function pageText(id: string, view: Reader): string {
  return JSON.stringify(characterPage(id, view) ?? null)
}

describe('the third season’s Bran and Theon cast', () => {
  it('files Myranda in the season', () => {
    expect(season3.entries.map(({ id }) => id)).toContain('myranda')
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

/** Theon's record, whose captivity the group steps. */
function theon(): Entity {
  return character('theon-greyjoy')
}

describe('Theon’s captivity', () => {
  it('makes him captured for a reader at Catelyn VI, not one before', () => {
    expect(archive.latestOf(reader('chapter', 192), theon(), 'status')).toBe(
      'alive',
    )
    expect(archive.latestOf(reader('chapter', 193), theon(), 'status')).toBe(
      'captured',
    )
  })

  it('keeps him captured for a viewer from episode 20 through the season', () => {
    for (const episode of [20, 25, LAST_EPISODE]) {
      expect(
        archive.latestOf(reader('episode', episode), theon(), 'status'),
      ).toBe('captured')
    }
  })
})

describe.each(byUnit(STEPS))(
  '$id: “$en” by $unit',
  ({ id, en, episode, chapter, unit }) => {
    // A page names a role or an affiliation as a whole string of its own.
    const shown = (count: number): boolean =>
      pageText(id, reader(unit, count)).includes(JSON.stringify(en))

    it('at its pin, not one before', () => {
      const pin = unit === 'chapter' ? chapter : episode

      expect(shown(pin - 1)).toBe(false)
      expect(shown(pin)).toBe(true)
    })
  },
)

describe('the Bran and Theon steps past the book’s stage', () => {
  it('keeps Bran south of the Wall for a reader at the end of the stage', () => {
    expect(
      pageText('bran-stark', reader('chapter', LAST_CHAPTER)),
    ).not.toContain(JSON.stringify('Beyond the Wall with the Reeds'))
  })
})

describe('the season’s Bran and Theon leads', () => {
  it('lists Bran and Theon among the season’s leads', () => {
    expect(archive.leads['season-3']).toStrictEqual(
      expect.arrayContaining(['bran-stark', 'theon-greyjoy']),
    )
  })
})
