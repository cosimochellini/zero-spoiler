import { describe, expect, it } from 'vitest'

import { season3 } from '~/data/series/game-of-thrones/records/season-3'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'
import { LOADED_SERIES } from '~/test/series'

import { characterPage } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 3 tests require Game of Thrones')
}
const { archive } = series

/**
 * Each record the Jaime, Brienne and Harrenhal group files (#1637), with its
 * gate in each medium; `source` for one medium, whose other number only
 * orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'qyburn', episode: 21, chapter: 175 },
  { id: 'steelshanks-walton', episode: 27, chapter: 188, source: 'chapter' },
]

/**
 * Every status change the group files on the characters earlier seasons
 * filed, pinned in both media; `source` for a change one medium alone
 * tells.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  { id: 'brienne-of-tarth', episode: 22, chapter: 165, value: 'captured' },
  { id: 'brienne-of-tarth', episode: 27, chapter: 188, value: 'alive' },
  { id: 'jaime-lannister', episode: 27, chapter: 188, value: 'alive' },
]

/**
 * Every role and affiliation step the group files after a record's gate, by
 * its English text; `source` for a step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  {
    id: 'qyburn',
    en: 'In Roose Bolton’s service',
    episode: 25,
    chapter: 175,
    source: 'episode',
  },
  {
    id: 'vargo-hoat',
    en: 'Leader of the Brave Companions and Lord of Harrenhal',
    episode: 22,
    chapter: 165,
    source: 'chapter',
  },
  {
    id: 'rorge',
    en: 'Brave Companions',
    episode: 22,
    chapter: 165,
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

/** A page's JSON, which names a role or an affiliation as a whole string. */
function pageOf(id: string, view: Reader): string {
  return JSON.stringify(characterPage(id, view) ?? null)
}

describe('the third season’s Jaime, Brienne and Harrenhal cast', () => {
  it('files these records in the season-3 module', () => {
    expect(season3.entries.map(({ id }) => id)).toStrictEqual(
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

  it('opens Qyburn with no allegiance in the show and a Brave Companion in the books', () => {
    const show = pageOf('qyburn', reader('episode', 21))
    const books = pageOf('qyburn', reader('chapter', 175))
    const companion = JSON.stringify(
      'Brave Companions, in Roose Bolton’s service',
    )

    expect(show).toContain(JSON.stringify('No allegiance'))
    expect(show).not.toContain(companion)
    expect(books).toContain(companion)
    expect(books).not.toContain(JSON.stringify('No allegiance'))
    expect(
      pageOf('qyburn', reader('episode', archive.series.episodeCeiling)),
    ).not.toContain(companion)
  })

  it('makes Roose Bolton’s Harrenhal command shared, from episode 22', () => {
    const command = JSON.stringify('Commander of the northmen at Harrenhal')

    expect(pageOf('roose-bolton', reader('episode', 21))).not.toContain(command)
    expect(pageOf('roose-bolton', reader('episode', 22))).toContain(command)
    expect(pageOf('roose-bolton', reader('chapter', 120))).not.toContain(
      command,
    )
    expect(pageOf('roose-bolton', reader('chapter', 121))).toContain(command)
  })

  it('lists Jaime and Brienne among the season’s leads', () => {
    expect(archive.leads['season-3']).toStrictEqual(
      expect.arrayContaining(['jaime-lannister', 'brienne-of-tarth']),
    )
  })

  it('keeps Jaime a prisoner from his capture until he rides out', () => {
    const jaime = character('jaime-lannister')

    for (const [unit, count] of [
      ['episode', 22],
      ['episode', 26],
      ['chapter', 165],
      ['chapter', 187],
    ] as const) {
      expect(archive.latestOf(reader(unit, count), jaime, 'status')).toBe(
        'captured',
      )
    }
  })
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

describe.each(
  STEPS.flatMap((step) =>
    UNITS.filter((unit) => (step.source ?? unit) === unit).map((unit) => ({
      ...step,
      unit,
    })),
  ),
)('$id: “$en” by $unit', ({ id, en, episode, chapter, unit }) => {
  const shown = (count: number): boolean =>
    pageOf(id, reader(unit, count)).includes(JSON.stringify(en))

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
      expect(pageOf(id, otherAtTheEnd(source))).not.toContain(
        JSON.stringify(en),
      )
    },
  )
})
