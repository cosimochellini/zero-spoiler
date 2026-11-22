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
  throw new Error('Season 2 Essos tests require Game of Thrones')
}
const { archive } = series

/**
 * Each Essos and Qarth record's gate in each medium, as filed (#1468) and
 * moved by the owner's rulings of 2026-11-22;
 * `source` for one medium, whose other number only orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'kovarro', episode: 11, chapter: 86, source: 'episode' },
  // Off Daenerys I (86): Jhogo's line counts as narration (owner,
  // 2026-11-22).
  { id: 'xaro-xhoan-daxos', episode: 15, chapter: 114 },
  { id: 'pyat-pree', episode: 14, chapter: 114, source: 'chapter' },
  { id: 'quaithe', episode: 15, chapter: 114, source: 'chapter' },
  { id: 'malakho', episode: 15, chapter: 101, source: 'episode' },
  { id: 'drogon', episode: 40, chapter: 86 },
  { id: 'rhaegal', episode: 41, chapter: 86 },
  { id: 'viserion', episode: 41, chapter: 86 },
  { id: 'strong-belwas', episode: 20, chapter: 137, source: 'chapter' },
  // Filed under the name he has in the stage (owner, 2026-11-22).
  { id: 'arstan-whitebeard', episode: 20, chapter: 137, source: 'chapter' },
]

/** Every status change the group files, pinned in both media. */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  {
    id: 'xaro-xhoan-daxos',
    episode: 20,
    chapter: 137,
    source: 'episode',
    value: 'deceased',
  },
]

/**
 * Every role step the group files, on its own records and on the characters
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
  // The books' alone until #1468; now both media's, the show's one episode
  // after his gate.
  { id: 'aggo', en: 'Daenerys’s bloodrider', episode: 12, chapter: 73 },
  {
    id: 'xaro-xhoan-daxos',
    en: 'Self-proclaimed King of Qarth',
    episode: 17,
    chapter: 114,
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

describe('the second season’s Essos and Qarth cast', () => {
  it('files these records in the season', () => {
    expect(season2.entries.map(({ id }) => id)).toStrictEqual(
      expect.arrayContaining(RECORDS.map(({ id }) => id)),
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

describe.each(byUnit(CHANGES))(
  '$id becomes $value by $unit',
  ({ id, episode, chapter, value, unit }) => {
    it('at its pin, not one before', () => {
      const pin = unit === 'chapter' ? chapter : episode
      const owner = character(id)

      expect(archive.latestOf(reader(unit, pin - 1), owner, 'status')).not.toBe(
        value,
      )
      expect(archive.latestOf(reader(unit, pin), owner, 'status')).toBe(value)
    })
  },
)

describe('the Essos status changes one medium alone tells', () => {
  it.each(CHANGES.filter(({ source }) => source !== undefined))(
    'never makes $id $value for a reader of the other medium',
    ({ id, source = 'episode', value }) => {
      const last = otherAtTheEnd(source)

      expect(archive.latestOf(last, character(id), 'status')).not.toBe(value)
    },
  )
})

describe.each(byUnit(STEPS))(
  '$id: “$en” by $unit',
  ({ id, en, episode, chapter, unit }) => {
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
  },
)

describe('the Essos steps one medium alone tells', () => {
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

describe('the season’s Essos lead', () => {
  it('lists Daenerys among the season’s leads', () => {
    expect(archive.leads['season-2']).toContain('daenerys-targaryen')
  })
})
