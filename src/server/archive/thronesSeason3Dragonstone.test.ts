import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/series/game-of-thrones/art'
import { season3 } from '~/data/series/game-of-thrones/records/season-3'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'
import { drawnIn, recordIn, sidesOf, unlisted } from '~/test/gates'
import { LOADED_SERIES } from '~/test/series'

import { characterPage } from './pages.server'
import { drawingOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 3 Dragonstone tests require Game of Thrones')
}
const { archive } = series

/** The third stage's last episode and chapter (#1626). */
const LAST_EPISODE = 30
const LAST_CHAPTER = 196

/**
 * Each Dragonstone record's gate in each medium, as filed (#1640). All
 * three are the books'; "Second Sons" (episode 28), which adapts Davos IV,
 * only orders them.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  // Davos IV (180), a safe later pin: the synopses of Davos II and III
  // name the three in narration only.
  { id: 'axell-florent', episode: 28, chapter: 180, source: 'chapter' },
  { id: 'alester-florent', episode: 28, chapter: 180, source: 'chapter' },
  { id: 'edric-storm', episode: 28, chapter: 180, source: 'chapter' },
]

/**
 * Every status change the group files, pinned in both media. `otherAt` is
 * the count at which a reader of the other medium must still not see a
 * one-medium change: the show frees Davos at 28, so the stage's end does
 * not hold for his books-only rescue, which the show's jailing at 21
 * replaces.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  otherAt?: number
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  {
    id: 'davos-seaworth',
    episode: 21,
    chapter: 149,
    otherAt: 27,
    source: 'chapter',
    value: 'alive',
  },
  { id: 'davos-seaworth', episode: 21, chapter: 154, value: 'imprisoned' },
  { id: 'davos-seaworth', episode: 28, chapter: 180, value: 'alive' },
  {
    id: 'alester-florent',
    episode: 28,
    chapter: 180,
    source: 'chapter',
    value: 'imprisoned',
  },
  // Burned for a fair wind, told in Davos I of A Dance with Dragons (281),
  // filed with his drawing's stage (#1648).
  {
    id: 'alester-florent',
    episode: 41,
    chapter: 281,
    source: 'chapter',
    value: 'deceased',
  },
]

/**
 * Every stage the group's own drawings take after their first, pinned in
 * both media (#1648); `source` for a stage one medium alone tells, `stage`
 * a record's stage counted from 0. Davos's rescue is a stage of a record
 * the second season filed, so its rows are in
 * `thronesSeason2Stormlands.test.ts`.
 */
const STAGES: {
  chapter: number
  episode: number
  id: keyof typeof DRAWINGS
  source?: 'chapter' | 'episode'
  stage?: number
}[] = [{ id: 'alester-florent', episode: 41, chapter: 281, source: 'chapter' }]

/**
 * Every role step the group files on the characters the second season
 * filed, by its English text; `source` for a step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  // The show's alone: the fleet he commanded burned on the Blackwater.
  // Davos II, which episode 21 adapts, orders it.
  {
    id: 'davos-seaworth',
    en: 'Knight in King Stannis’s service',
    episode: 21,
    chapter: 154,
    source: 'episode',
  },
  // The books' alone: Davos IV. "Second Sons" orders it.
  {
    id: 'davos-seaworth',
    en: 'Hand of King Stannis',
    episode: 28,
    chapter: 180,
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

/** An entry's unit, beside the entry. */
interface InUnit {
  unit: Unit
}

/** Each entry of these lists in each unit that tells it. */
function byUnit<T extends { source?: Unit }>(list: T[]): (InUnit & T)[] {
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

describe('the third season’s Dragonstone cast', () => {
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

describe('the Dragonstone status changes one medium alone tells', () => {
  it.each(CHANGES.filter(({ source }) => source !== undefined))(
    'never makes $id $value for a reader of the other medium',
    ({ id, otherAt, source = 'episode', value }) => {
      const other: Unit = source === 'episode' ? 'chapter' : 'episode'
      const view =
        otherAt === undefined ? otherAtStageEnd(source) : reader(other, otherAt)

      expect(archive.latestOf(view, character(id), 'status')).not.toBe(value)
    },
  )
})

describe.each(byUnit(STEPS))(
  '$id: “$en” by $unit',
  ({ id, en, episode, chapter, unit }) => {
    // A page names a role as a whole string of its own.
    const shown = (count: number): boolean =>
      pageText(id, reader(unit, count)).includes(JSON.stringify(en))

    it('at its pin, not one before', () => {
      const pin = unit === 'chapter' ? chapter : episode

      expect(shown(pin - 1)).toBe(false)
      expect(shown(pin)).toBe(true)
    })
  },
)

describe('the Dragonstone steps one medium alone tells', () => {
  // The show's knight step repeats the text both media file at 11 / 74, so
  // only the Hand can be told apart by its words.
  it('never shows Davos as the Hand to a viewer in the stage', () => {
    expect(
      pageText('davos-seaworth', otherAtStageEnd('chapter')),
    ).not.toContain(JSON.stringify('Hand of King Stannis'))
  })

  it('shows a reader of the books the Hand, not the knight, at the stage’s end', () => {
    const page = pageText('davos-seaworth', otherAtStageEnd('episode'))

    expect(page).toContain(JSON.stringify('Hand of King Stannis'))
    expect(page).not.toContain(
      JSON.stringify('Knight in King Stannis’s service'),
    )
  })
})

describe('the Dragonstone table of stages', () => {
  it('lists every stage of each record it redraws', () => {
    expect(unlisted(STAGES, REDRAWINGS)).toStrictEqual([])
  })
})

describe.each(
  STAGES.flatMap((stage) =>
    sidesOf(stage, archive.series).map((side) => ({ ...stage, ...side })),
  ),
)(
  '$id is redrawn by $unit at $episode/$chapter',
  ({ id, episode, chapter, source, unit, stage: index = 0, ...side }) => {
    const stage = REDRAWINGS[id]?.[index]
    const art = { drawings: DRAWINGS, redrawings: REDRAWINGS }
    const previous = drawnIn(STAGES, art, { id, unit, below: index })

    it('at its pin, not one before', () => {
      const owner = recordIn(archive, id)

      expect(stage?.episode).toBe(episode)
      expect(stage?.chapter).toBe(chapter)
      // The row's medium is the one the engine reads for this stage.
      expect(owner.source ?? stage?.source).toBe(source)
      expect(
        drawingOf(owner, readerFor(archive, side.before, 'en')).strokes,
      ).toStrictEqual(previous)
      expect(
        drawingOf(owner, readerFor(archive, side.reached, 'en')).strokes,
      ).toStrictEqual(stage?.value)
    })
  },
)

describe('the season’s Dragonstone lead', () => {
  it('lists Davos among the season’s leads', () => {
    expect(archive.leads['season-3']).toContain('davos-seaworth')
  })
})
