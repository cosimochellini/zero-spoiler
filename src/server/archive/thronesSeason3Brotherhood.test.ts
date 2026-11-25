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
  throw new Error('Season 3 tests require Game of Thrones')
}
const { archive } = series

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

/** Each unit an entry is told in: both, or its `source` alone. */
function unitsOf(entry: { source?: Unit }): Unit[] {
  return UNITS.filter((unit) => (entry.source ?? unit) === unit)
}

/**
 * Each season-3 record of Arya's group (#1636) at its gate in each medium,
 * as filed. Every one is the books' alone: its episode only orders it.
 */
const BROTHERHOOD_RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: Unit
}[] = [
  { id: 'anguy', episode: 22, chapter: 157, source: 'chapter' },
  { id: 'tom-of-sevenstreams', episode: 22, chapter: 157, source: 'chapter' },
  { id: 'lem', episode: 22, chapter: 157, source: 'chapter' },
  { id: 'jack-be-lucky', episode: 22, chapter: 161, source: 'chapter' },
  { id: 'greenbeard', episode: 22, chapter: 166, source: 'chapter' },
  { id: 'mad-huntsman', episode: 24, chapter: 173, source: 'chapter' },
  { id: 'edric-dayne', episode: 27, chapter: 187, source: 'chapter' },
  { id: 'ghost-of-high-heart', episode: 27, chapter: 187, source: 'chapter' },
]

/**
 * Every role and affiliation step the group adds to a character an earlier
 * stage filed, by its English text; `source` for a step one medium alone
 * tells.
 */
const BROTHERHOOD_STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: Unit
}[] = [
  {
    id: 'gendry',
    en: 'Smith of the Brotherhood Without Banners',
    episode: 25,
    chapter: 183,
  },
  {
    id: 'gendry',
    en: 'Brotherhood Without Banners',
    episode: 25,
    chapter: 183,
  },
  {
    id: 'gendry',
    en: 'No allegiance',
    episode: 26,
    chapter: 196,
    source: 'episode',
  },
  { id: 'hot-pie', en: 'Baker at an inn', episode: 23, chapter: 161 },
  { id: 'hot-pie', en: 'An inn in the riverlands', episode: 23, chapter: 161 },
  {
    id: 'beric-dondarrion',
    en: 'Leader of the Brotherhood Without Banners',
    episode: 24,
    chapter: 161,
  },
  {
    id: 'beric-dondarrion',
    en: 'Brotherhood Without Banners',
    episode: 24,
    chapter: 161,
  },
  {
    id: 'thoros-of-myr',
    en: 'Brotherhood Without Banners',
    episode: 23,
    chapter: 166,
  },
  {
    id: 'mad-huntsman',
    en: 'Brotherhood Without Banners',
    episode: 25,
    chapter: 178,
    source: 'chapter',
  },
  {
    id: 'gendry',
    en: 'Melisandre’s prisoner',
    episode: 26,
    chapter: 196,
    source: 'episode',
  },
  {
    id: 'gendry',
    en: 'Escaped from Dragonstone',
    episode: 30,
    chapter: 196,
    source: 'episode',
  },
  {
    id: 'harwin',
    en: 'Brotherhood Without Banners',
    episode: 22,
    chapter: 161,
    source: 'chapter',
  },
]

/**
 * Every status step the group adds to a character an earlier stage filed,
 * with the status just before it.
 */
const BROTHERHOOD_STATUSES: {
  before: string
  chapter: number
  episode: number
  id: string
  source?: Unit
  value: string
}[] = [
  {
    id: 'arya-stark',
    value: 'captured',
    before: 'alive',
    episode: 22,
    chapter: 157,
    source: 'chapter',
  },
  {
    id: 'arya-stark',
    value: 'captured',
    before: 'alive',
    episode: 27,
    chapter: 187,
    source: 'episode',
  },
  {
    id: 'sandor-clegane',
    value: 'captured',
    before: 'alive',
    episode: 22,
    chapter: 173,
    source: 'episode',
  },
  {
    id: 'sandor-clegane',
    value: 'captured',
    before: 'alive',
    episode: 22,
    chapter: 173,
    source: 'chapter',
  },
  {
    id: 'sandor-clegane',
    value: 'alive',
    before: 'captured',
    episode: 25,
    chapter: 183,
  },
  {
    id: 'gendry',
    value: 'captured',
    before: 'alive',
    episode: 26,
    chapter: 196,
    source: 'episode',
  },
  {
    id: 'gendry',
    value: 'alive',
    before: 'captured',
    episode: 30,
    chapter: 196,
    source: 'episode',
  },
]

/** Each record in each locale and in each unit that tells it, at its gate. */
const BROTHERHOOD_GATES = BROTHERHOOD_RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    unitsOf(record).map((unit) => ({
      id: record.id,
      gate: unit === 'chapter' ? record.chapter : record.episode,
      locale,
      unit,
    })),
  ),
)

describe('the third season’s Brotherhood cast', () => {
  it('files these records', () => {
    // Each cast group's test lists its own records; the season holds them
    // all.
    expect(season3.entries.map(({ id }) => id).toSorted(byText)).toStrictEqual(
      expect.arrayContaining(
        BROTHERHOOD_RECORDS.map(({ id }) => id).toSorted(byText),
      ),
    )
  })

  it.each(BROTHERHOOD_GATES)(
    'opens $id at its named scene by $unit in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate, locale))).toBe(true)
    },
  )

  it.each(BROTHERHOOD_GATES)(
    'keeps $id closed one $unit before it in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate - 1, locale))).toBe(false)
    },
  )

  it.each(BROTHERHOOD_RECORDS.filter(({ source }) => source !== undefined))(
    'never opens the one-medium $id to a reader of the other',
    ({ id, source = 'episode' }) => {
      expect(opened(id, otherAtTheEnd(source))).toBe(false)
    },
  )

  it.each(
    BROTHERHOOD_RECORDS.flatMap((record) =>
      unitsOf(record).map((unit) => ({ ...record, unit })),
    ),
  )('$id is alive at its $unit gate', ({ id, episode, chapter, unit }) => {
    const gate = unit === 'chapter' ? chapter : episode

    expect(archive.latestOf(reader(unit, gate), character(id), 'status')).toBe(
      'alive',
    )
  })
})

describe.each(
  BROTHERHOOD_STEPS.flatMap((step) =>
    unitsOf(step).map((unit) => ({ ...step, unit })),
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

describe('the Brotherhood steps one medium alone tells', () => {
  it.each(BROTHERHOOD_STEPS.filter(({ source }) => source !== undefined))(
    'never shows $id “$en” to a reader of the other medium',
    ({ id, en, source = 'episode' }) => {
      const page = JSON.stringify(
        characterPage(id, otherAtTheEnd(source)) ?? null,
      )

      expect(page).not.toContain(JSON.stringify(en))
    },
  )
})

describe.each(
  BROTHERHOOD_STATUSES.flatMap((step) =>
    unitsOf(step).map((unit) => ({ ...step, unit })),
  ),
)('$id: $value by $unit', ({ id, value, before, episode, chapter, unit }) => {
  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode
    const status = (count: number): unknown =>
      archive.latestOf(reader(unit, count), character(id), 'status')

    expect(status(pin - 1)).toBe(before)
    expect(status(pin)).toBe(value)
  })
})

describe('the statuses one medium alone tells', () => {
  it('keeps Gendry free for a reader at the end of the book', () => {
    // The books keep him with the outlaws: Melisandre never takes him.
    expect(
      archive.latestOf(reader('chapter', 196), character('gendry'), 'status'),
    ).toBe('alive')
  })

  it('keeps Arya with the outlaws for a reader of the book', () => {
    // The book's capture is at 157; the show's at 27 tells it no earlier.
    expect(
      archive.latestOf(
        reader('episode', 26),
        character('arya-stark'),
        'status',
      ),
    ).toBe('alive')
    expect(
      archive.latestOf(
        reader('chapter', 186),
        character('arya-stark'),
        'status',
      ),
    ).toBe('captured')
  })
})

describe('the season’s leads', () => {
  it('lists the Brotherhood group’s leads', () => {
    expect(archive.leads['season-3']).toStrictEqual(
      expect.arrayContaining([
        'arya-stark',
        'beric-dondarrion',
        'sandor-clegane',
      ]),
    )
  })
})
