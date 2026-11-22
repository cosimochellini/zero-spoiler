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
 * Each record of the Wall and beyond-the-Wall group (#1467) at its gate in
 * each medium, as filed; `source` for one medium, whose other number only
 * orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'thoren-smallwood', episode: 11, chapter: 80, source: 'chapter' },
  { id: 'eddison-tollett', episode: 20, chapter: 87 },
  { id: 'jarman-buckwell', episode: 11, chapter: 87, source: 'chapter' },
  { id: 'mallador-locke', episode: 11, chapter: 87, source: 'chapter' },
  { id: 'craster', episode: 11, chapter: 97 },
  { id: 'gilly', episode: 15, chapter: 97 },
  { id: 'qhorin-halfhand', episode: 15, chapter: 117 },
  { id: 'stonesnake', episode: 15, chapter: 125, source: 'chapter' },
  { id: 'ygritte', episode: 16, chapter: 125 },
  { id: 'ebben', episode: 17, chapter: 127, source: 'chapter' },
  { id: 'dalbridge', episode: 17, chapter: 127, source: 'chapter' },
  { id: 'lord-of-bones', episode: 18, chapter: 142, source: 'chapter' },
]

/**
 * Every status change the group files after a gate, on its new records and
 * on the characters season 1 filed; `source` for a change one medium alone
 * tells.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  {
    id: 'qhorin-halfhand',
    episode: 18,
    chapter: 142,
    source: 'episode',
    value: 'captured',
  },
  { id: 'qhorin-halfhand', episode: 20, chapter: 142, value: 'deceased' },
  {
    id: 'ebben',
    episode: 20,
    chapter: 142,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'jon-snow',
    episode: 17,
    chapter: 127,
    source: 'episode',
    value: 'captured',
  },
]

/**
 * Every role step the group adds to a character season 1 filed, by its
 * English text; `source` for a step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  {
    id: 'jon-snow',
    en: 'Sworn brother of the Night’s Watch, ranging with Qhorin Halfhand',
    episode: 15,
    chapter: 117,
    source: 'episode',
  },
  {
    id: 'jon-snow',
    en: 'Sworn brother of the Night’s Watch, posing as a deserter among the wildlings',
    episode: 20,
    chapter: 142,
  },
  {
    id: 'samwell-tarly',
    en: 'Steward keeping the ravens beyond the Wall',
    episode: 11,
    chapter: 80,
    source: 'chapter',
  },
  {
    id: 'samwell-tarly',
    en: 'Steward to the Lord Commander',
    episode: 15,
    chapter: 117,
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

describe('the second season’s Wall and beyond-the-Wall cast', () => {
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

  it('frees Jon in the show at episode 20', () => {
    const jon = character('jon-snow')

    expect(archive.latestOf(reader('episode', 19), jon, 'status')).toBe(
      'captured',
    )
    expect(archive.latestOf(reader('episode', 20), jon, 'status')).toBe('alive')
  })

  it('never files Stonesnake’s show death on his book record', () => {
    const stonesnake = character('stonesnake')

    expect(archive.latestOf(reader('chapter', 143), stonesnake, 'status')).toBe(
      'alive',
    )
  })

  it('keeps Jon alive throughout A Clash of Kings', () => {
    const jon = character('jon-snow')

    expect(archive.latestOf(reader('chapter', 143), jon, 'status')).toBe(
      'alive',
    )
  })
})

describe.each(
  STEPS.flatMap((step) =>
    UNITS.filter((unit) => (step.source ?? unit) === unit).map((unit) => ({
      ...step,
      unit,
    })),
  ),
)('$id: “$en” by $unit', ({ id, en, episode, chapter, unit }) => {
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
