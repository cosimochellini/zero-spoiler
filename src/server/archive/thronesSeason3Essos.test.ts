import { describe, expect, it } from 'vitest'

import { DRAWINGS } from '~/data/series/game-of-thrones/art'
import { season3 } from '~/data/series/game-of-thrones/records/season-3'
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
  throw new Error('Season 3 Essos tests require Game of Thrones')
}
const { archive } = series

/** The third stage's last episode and chapter (#1626). */
const LAST_EPISODE = 30
const LAST_CHAPTER = 196

/**
 * Each Essos record's gate in each medium, as filed (#1639); `source` for
 * one medium, whose other number only orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'missandei', episode: 23, chapter: 171 },
  // Daenerys III (171), the safe later pin: no quoted line seen names him.
  { id: 'kraznys-mo-nakloz', episode: 24, chapter: 171, source: 'chapter' },
  { id: 'grey-worm', episode: 25, chapter: 186 },
  // The show's Razdal mo Eraz, its `episodeName`.
  { id: 'grazdan-mo-eraz', episode: 27, chapter: 186 },
  { id: 'mero', episode: 28, chapter: 186 },
  { id: 'daario-naharis', episode: 28, chapter: 186 },
  { id: 'prendahl-na-ghezn', episode: 28, chapter: 186, source: 'chapter' },
]

/**
 * Every status the group files that is not alive, pinned in both media:
 * three of them open the record, dead in the scene that names him.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  {
    id: 'kraznys-mo-nakloz',
    episode: 24,
    chapter: 171,
    source: 'chapter',
    value: 'deceased',
  },
  // The show's alone: the books end him in Daenerys V (201), which orders
  // it.
  {
    id: 'mero',
    episode: 28,
    chapter: 201,
    source: 'episode',
    value: 'deceased',
  },
  {
    id: 'prendahl-na-ghezn',
    episode: 28,
    chapter: 186,
    source: 'chapter',
    value: 'deceased',
  },
]

/**
 * Every role and affiliation step the group files, on its own records and
 * on the characters season 1 filed, by its English text; `source` for a
 * step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  // The books bring him as Arstan Whitebeard and name him in Daenerys V.
  {
    id: 'barristan-selmy',
    en: 'Knight in Daenerys’s service',
    episode: 21,
    chapter: 201,
    source: 'episode',
  },
  {
    id: 'barristan-selmy',
    en: 'Daenerys Targaryen’s service',
    episode: 21,
    chapter: 201,
    source: 'episode',
  },
  {
    id: 'daenerys-targaryen',
    en: 'Khaleesi at the head of her khalasar and the Unsullied',
    episode: 24,
    chapter: 171,
  },
  {
    id: 'daenerys-targaryen',
    en: 'House Targaryen, her khalasar and the Unsullied',
    episode: 24,
    chapter: 171,
  },
  // His company differs by medium.
  {
    id: 'daario-naharis',
    en: 'Second Sons',
    episode: 28,
    chapter: 186,
    source: 'episode',
  },
  {
    id: 'daario-naharis',
    en: 'Stormcrows',
    episode: 28,
    chapter: 186,
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

/**
 * The reader of the other medium at the end of the stage: a later stage
 * may file the same fact there, so the end of the series would not hold.
 */
function otherAtStageEnd(source: Unit): Reader {
  return source === 'episode' ?
      reader('chapter', LAST_CHAPTER)
    : reader('episode', LAST_EPISODE)
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

describe('the third season’s Essos cast', () => {
  it('files these records in the season', () => {
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
})

describe('the Yunkish envoy’s two names', () => {
  it('names him Razdal mo Eraz to a viewer, never Grazdan', () => {
    const page = pageText('grazdan-mo-eraz', reader('episode', 27))

    expect(page).toContain('Razdal mo Eraz')
    expect(page).not.toContain('Grazdan')
  })

  it('names him Grazdan mo Eraz to a reader, never Razdal', () => {
    const page = pageText('grazdan-mo-eraz', reader('chapter', LAST_CHAPTER))

    expect(page).toContain('Grazdan mo Eraz')
    expect(page).not.toContain('Razdal')
  })
})

describe.each(byUnit(CHANGES))(
  '$id is $value by $unit',
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
    'never makes $id $value for a reader of the other medium in the stage',
    ({ id, source = 'episode', value }) => {
      const last = otherAtStageEnd(source)

      expect(archive.latestOf(last, character(id), 'status')).not.toBe(value)
    },
  )
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

describe('the Essos steps one medium alone tells', () => {
  it.each(STEPS.filter(({ source }) => source !== undefined))(
    'never shows “$en” to a reader of the other medium in the stage',
    ({ id, en, source = 'episode' }) => {
      expect(pageText(id, otherAtStageEnd(source))).not.toContain(
        JSON.stringify(en),
      )
    },
  )
})

describe('the season’s Essos lead', () => {
  it('lists Daenerys among the season’s leads', () => {
    expect(archive.leads['season-3']).toContain('daenerys-targaryen')
  })
})

/** What the home page's frame draws for a reader at this point. */
function frameAt(unit: Unit, count: number): unknown {
  return homePage(reader(unit, count)).saga.visual
}

describe('the home page’s frame in the third season', () => {
  // The Fist of the First Men, filed with the season's first records
  // (#1639): a reader at the stage's end is in season 3 in either medium.
  it.each([
    { unit: 'episode', count: LAST_EPISODE },
    { unit: 'chapter', count: LAST_CHAPTER },
  ] as const)('at $unit $count draws season-3', ({ unit, count }) => {
    expect(frameAt(unit, count)).toStrictEqual({
      strokes: DRAWINGS['season-3'],
      tint: 'ocher',
    })
  })
})
