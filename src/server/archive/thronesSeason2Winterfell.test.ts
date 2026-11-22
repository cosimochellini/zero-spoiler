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

type Unit = 'chapter' | 'episode'
const UNITS: Unit[] = ['episode', 'chapter']

/**
 * Each Winterfell and Iron Islands record's gate in each medium, as filed
 * (#1466); `source` for one medium, whose other number only orders the
 * record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: Unit
}[] = [
  { id: 'balon-greyjoy', episode: 12, chapter: 85 },
  { id: 'asha-greyjoy', episode: 12, chapter: 98 },
  { id: 'aeron-greyjoy', episode: 55, chapter: 85 },
  { id: 'victarion-greyjoy', episode: 13, chapter: 98, source: 'chapter' },
  { id: 'dagmer', episode: 15, chapter: 111 },
  { id: 'black-lorren', episode: 17, chapter: 124, source: 'chapter' },
  { id: 'wex-pyke', episode: 13, chapter: 98, source: 'chapter' },
  { id: 'farlen', episode: 16, chapter: 124, source: 'chapter' },
  { id: 'meera-reed', episode: 22, chapter: 95 },
  { id: 'jojen-reed', episode: 22, chapter: 95 },
  { id: 'ramsay-snow', episode: 32, chapter: 140 },
  { id: 'big-walder-frey', episode: 13, chapter: 90, source: 'chapter' },
  { id: 'little-walder-frey', episode: 13, chapter: 90, source: 'chapter' },
  { id: 'wyman-manderly', episode: 60, chapter: 90 },
  { id: 'donella-hornwood', episode: 13, chapter: 90, source: 'chapter' },
]

/**
 * Every status change this group files, on its new records and on the
 * characters season 1 filed; `source` for a change one medium alone tells.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: Unit
  value: CharacterStatus
}[] = [
  {
    id: 'black-lorren',
    episode: 20,
    chapter: 143,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'farlen',
    episode: 18,
    chapter: 130,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'donella-hornwood',
    episode: 14,
    chapter: 102,
    source: 'chapter',
    value: 'captured',
  },
  {
    id: 'donella-hornwood',
    episode: 15,
    chapter: 109,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'theon-greyjoy',
    episode: 20,
    chapter: 140,
    source: 'episode',
    value: 'captured',
  },
  {
    id: 'bran-stark',
    episode: 16,
    chapter: 120,
    source: 'chapter',
    value: 'captured',
  },
  {
    id: 'bran-stark',
    episode: 17,
    chapter: 124,
    source: 'chapter',
    value: 'alive',
  },
  {
    id: 'rickon-stark',
    episode: 16,
    chapter: 120,
    source: 'chapter',
    value: 'captured',
  },
  {
    id: 'rickon-stark',
    episode: 17,
    chapter: 124,
    source: 'chapter',
    value: 'alive',
  },
  { id: 'osha', episode: 16, chapter: 124, value: 'alive' },
]

/**
 * Every later role and affiliation step this group files, by its English
 * text; `source` for a step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: Unit
}[] = [
  {
    id: 'balon-greyjoy',
    en: 'King of the Iron Islands',
    episode: 16,
    chapter: 120,
  },
  {
    id: 'theon-greyjoy',
    en: 'Robb Stark’s envoy to the Iron Islands',
    episode: 11,
    chapter: 81,
  },
  { id: 'theon-greyjoy', en: 'House Greyjoy', episode: 13, chapter: 98 },
  {
    id: 'theon-greyjoy',
    en: 'Prince of Winterfell',
    episode: 16,
    chapter: 120,
  },
  {
    id: 'bran-stark',
    en: 'Lord of Winterfell in his brother’s absence',
    episode: 11,
    chapter: 90,
  },
  {
    id: 'osha',
    en: 'On the run with Bran and Rickon Stark',
    episode: 16,
    chapter: 124,
  },
  { id: 'osha', en: 'House Stark', episode: 16, chapter: 124 },
]

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

/** The units that tell an entry: both, or its `source` alone. */
function unitsOf(entry: { source?: Unit }): Unit[] {
  return UNITS.filter((unit) => (entry.source ?? unit) === unit)
}

function pinOf(entry: { chapter: number; episode: number }, unit: Unit) {
  return unit === 'chapter' ? entry.chapter : entry.episode
}

const GATES = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    unitsOf(record).map((unit) => ({
      id: record.id,
      gate: pinOf(record, unit),
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

/** The character's page as text, for a reader at this count. */
function pageText(id: string, view: Reader): string {
  return JSON.stringify(characterPage(id, view) ?? null)
}

describe('the second season’s Winterfell and Iron Islands cast', () => {
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

describe('Asha Greyjoy’s name in each medium', () => {
  it('is Yara to a reader of the show', () => {
    const page = pageText('asha-greyjoy', reader('episode', 12))

    expect(page).toContain('Yara Greyjoy')
    expect(page).not.toContain('Asha')
  })

  it('is Asha to a reader of the books, who never meets Yara', () => {
    const page = pageText(
      'asha-greyjoy',
      reader('chapter', archive.series.chapterCeiling),
    )

    expect(page).toContain('Asha Greyjoy')
    expect(page).not.toContain('Yara')
  })
})

describe.each(
  CHANGES.flatMap((change) =>
    unitsOf(change).map((unit) => ({ ...change, unit })),
  ),
)('$id becomes $value by $unit', ({ id, value, unit, ...pins }) => {
  it('at its pin, not one before', () => {
    const pin = pinOf(pins, unit)
    const owner = character(id)

    expect(archive.latestOf(reader(unit, pin - 1), owner, 'status')).not.toBe(
      value,
    )
    expect(archive.latestOf(reader(unit, pin), owner, 'status')).toBe(value)
  })
})

describe('the Winterfell status changes one medium alone tells', () => {
  it.each(CHANGES.filter(({ source }) => source !== undefined))(
    'never makes $id $value at $episode / $chapter for a reader of the other medium',
    ({ id, source = 'episode', value, episode, chapter }) => {
      // The other medium's own timeline may reach the same value elsewhere;
      // read it at the pin this change orders by.
      const other: Unit = source === 'episode' ? 'chapter' : 'episode'
      const pin = other === 'chapter' ? chapter : episode
      const before = archive.latestOf(
        reader(other, pin - 1),
        character(id),
        'status',
      )
      const after = archive.latestOf(
        reader(other, pin),
        character(id),
        'status',
      )

      expect(after === value && before !== value).toBe(false)
    },
  )
})

describe.each(
  STEPS.flatMap((step) => unitsOf(step).map((unit) => ({ ...step, unit }))),
)('$id: “$en” by $unit', ({ id, en, unit, ...pins }) => {
  // A page names a role or an affiliation as a whole string of its own.
  const shown = (count: number): boolean =>
    pageText(id, reader(unit, count)).includes(JSON.stringify(en))

  it('at its pin, not one before', () => {
    const pin = pinOf(pins, unit)

    expect(shown(pin - 1)).toBe(false)
    expect(shown(pin)).toBe(true)
  })
})
