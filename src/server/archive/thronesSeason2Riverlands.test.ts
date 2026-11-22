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
 * Each record the Riverlands, Harrenhal and Robb's war group files (#1465),
 * with its gate in each medium; `source` for one medium, whose other number
 * only orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'alton-lannister', episode: 11, chapter: 81, source: 'episode' },
  { id: 'cleos-frey', episode: 11, chapter: 81, source: 'chapter' },
  { id: 'talisa-maegyr', episode: 14, chapter: 100, source: 'episode' },
  { id: 'amory-lorch', episode: 16, chapter: 88 },
  { id: 'polliver', episode: 14, chapter: 100 },
  { id: 'tickler', episode: 15, chapter: 100 },
  { id: 'chiswyck', episode: 14, chapter: 100, source: 'chapter' },
  { id: 'weese', episode: 14, chapter: 100, source: 'chapter' },
  { id: 'vargo-hoat', episode: 15, chapter: 104, source: 'chapter' },
]

/**
 * Every status change the group files after a record's gate, on its new
 * records and on the characters season 1 filed, pinned in both media;
 * `source` for a change one medium alone tells. A show record that opens
 * dead (Amory Lorch, the Tickler) has its death at its gate, tested there.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  {
    id: 'alton-lannister',
    episode: 17,
    chapter: 113,
    source: 'episode',
    value: 'deceased',
  },
  {
    id: 'amory-lorch',
    episode: 16,
    chapter: 121,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'chiswyck',
    episode: 15,
    chapter: 104,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'weese',
    episode: 16,
    chapter: 112,
    source: 'chapter',
    value: 'deceased',
  },
  { id: 'arya-stark', episode: 13, chapter: 93, value: 'captured' },
  { id: 'arya-stark', episode: 18, chapter: 138, value: 'alive' },
  { id: 'gendry', episode: 13, chapter: 93, value: 'captured' },
  { id: 'gendry', episode: 18, chapter: 138, value: 'alive' },
  { id: 'hot-pie', episode: 13, chapter: 93, value: 'captured' },
  { id: 'hot-pie', episode: 18, chapter: 138, value: 'alive' },
]

/**
 * The show records that open dead at their gate: the episode that first
 * names them also kills them.
 */
const DEAD_AT_GATE = ['amory-lorch', 'tickler']

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
    id: 'talisa-maegyr',
    en: 'Robb Stark’s wife',
    episode: 20,
    chapter: 141,
    source: 'episode',
  },
  {
    id: 'amory-lorch',
    en: 'Castellan of Harrenhal',
    episode: 18,
    chapter: 112,
    source: 'chapter',
  },
  {
    id: 'vargo-hoat',
    en: 'Brave Companions, in Roose Bolton’s service',
    episode: 18,
    chapter: 121,
    source: 'chapter',
  },
  { id: 'gendry', en: 'Night’s Watch recruit', episode: 10, chapter: 75 },
  { id: 'gendry', en: 'Night’s Watch recruits', episode: 10, chapter: 75 },
  { id: 'jaqen-hghar', en: 'Lannister men-at-arms', episode: 15, chapter: 104 },
  {
    id: 'rorge',
    en: 'Ser Amory Lorch’s men',
    episode: 15,
    chapter: 104,
    source: 'chapter',
  },
  {
    id: 'biter',
    en: 'Ser Amory Lorch’s men',
    episode: 15,
    chapter: 104,
    source: 'chapter',
  },
  {
    id: 'gregor-clegane',
    en: 'Castellan of Harrenhal',
    episode: 18,
    chapter: 112,
    source: 'episode',
  },
  {
    id: 'roose-bolton',
    en: 'Commander of the northmen at Harrenhal',
    episode: 18,
    chapter: 121,
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

describe('the second season’s Riverlands, Harrenhal and Robb’s war cast', () => {
  it('files these records in the season-2 module', () => {
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

  it.each(DEAD_AT_GATE)(
    'opens %s dead in the show and alive in the books',
    (id) => {
      const record = character(id)

      expect(
        archive.latestOf(
          reader('episode', record.revealedAtEpisode),
          record,
          'status',
        ),
      ).toBe('deceased')
      expect(
        archive.latestOf(
          reader('chapter', record.revealedAtChapter),
          record,
          'status',
        ),
      ).toBe('alive')
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
  it.each(
    CHANGES.filter(
      ({ id, source }) => source !== undefined && !DEAD_AT_GATE.includes(id),
    ),
  )(
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
