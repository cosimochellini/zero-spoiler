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
 * Each record of Stannis, Renly and the stormlands (#1464), at its gate in
 * each medium; `source` for one medium, whose other number only orders the
 * record. Selyse, Shireen and Mace keep the show's later gate (#852).
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'stannis-baratheon', episode: 11, chapter: 74 },
  { id: 'melisandre', episode: 11, chapter: 74 },
  { id: 'davos-seaworth', episode: 11, chapter: 74 },
  { id: 'cressen', episode: 11, chapter: 74 },
  { id: 'matthos-seaworth', episode: 11, chapter: 132 },
  { id: 'salladhor-saan', episode: 12, chapter: 84 },
  { id: 'selyse-baratheon', episode: 25, chapter: 74 },
  { id: 'shireen-baratheon', episode: 25, chapter: 74 },
  { id: 'brienne-of-tarth', episode: 13, chapter: 96 },
  { id: 'margaery-tyrell', episode: 13, chapter: 96 },
  { id: 'mace-tyrell', episode: 32, chapter: 139 },
  { id: 'cortnay-penrose', episode: 14, chapter: 116, source: 'chapter' },
]

/**
 * Every status change after a gate, pinned in both media; `source` for a
 * change one medium alone tells. Cressen opens on his death, as Will does.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  { id: 'davos-seaworth', episode: 19, chapter: 132, value: 'missing' },
  { id: 'matthos-seaworth', episode: 19, chapter: 132, value: 'deceased' },
  {
    id: 'cortnay-penrose',
    episode: 16,
    chapter: 118,
    source: 'chapter',
    value: 'deceased',
  },
]

/**
 * Every role step after a gate, by its English text, on the group's records
 * and on Loras Tyrell, whom season 1 filed; `source` for a step one medium
 * alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  {
    id: 'davos-seaworth',
    en: 'Commander of King Stannis’s fleet',
    episode: 15,
    chapter: 107,
    source: 'episode',
  },
  {
    id: 'brienne-of-tarth',
    en: 'Sworn sword of Catelyn Stark',
    episode: 15,
    chapter: 113,
  },
  {
    id: 'margaery-tyrell',
    en: 'Betrothed to King Joffrey',
    episode: 20,
    chapter: 139,
  },
  { id: 'loras-tyrell', en: 'Guard of King Renly', episode: 13, chapter: 96 },
  {
    id: 'loras-tyrell',
    en: 'Knight of the Kingsguard',
    episode: 20,
    chapter: 139,
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

/** Each entry, once for each unit that tells it. */
function byUnit<T extends { source?: Unit }>(
  entries: T[],
): (T & { unit: Unit })[] {
  return entries.flatMap((entry) =>
    UNITS.filter((unit) => (entry.source ?? unit) === unit).map((unit) => ({
      ...entry,
      unit,
    })),
  )
}

describe('the second season’s stormlands cast', () => {
  it('files these records', () => {
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

  it('opens Cressen on his death in both media', () => {
    const cressen = character('cressen')

    expect(archive.latestOf(reader('episode', 11), cressen, 'status')).toBe(
      'deceased',
    )
    expect(archive.latestOf(reader('chapter', 74), cressen, 'status')).toBe(
      'deceased',
    )
  })
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

describe('the stormlands status changes one medium alone tells', () => {
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
    // A page names a role as a whole string of its own.
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

describe('the stormlands steps one medium alone tells', () => {
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
