import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/series/game-of-thrones/art'
import { season3 } from '~/data/series/game-of-thrones/records/season-3'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'
import { recordIn, sidesOf, unlisted } from '~/test/gates'
import { LOADED_SERIES } from '~/test/series'

import { characterPage } from './pages.server'
import { drawingOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 3 tests require Game of Thrones')
}
const { archive } = series

/**
 * Each record the Robb's war and Riverlands group files (#1635), with its
 * gate in each medium; `source` for one medium, whose other number only
 * orders the record.
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'jeyne-westerling', episode: 23, chapter: 158, source: 'chapter' },
  { id: 'rolph-spicer', episode: 23, chapter: 158, source: 'chapter' },
  { id: 'raynald-westerling', episode: 23, chapter: 158, source: 'chapter' },
  { id: 'willem-lannister', episode: 23, chapter: 164 },
  { id: 'martyn-lannister', episode: 23, chapter: 164, source: 'episode' },
  { id: 'lothar-frey', episode: 60, chapter: 179 },
  { id: 'walder-rivers', episode: 60, chapter: 179 },
  { id: 'roslin-frey', episode: 26, chapter: 179 },
  { id: 'ryman-frey', episode: 29, chapter: 193, source: 'chapter' },
  { id: 'aegon-frey', episode: 29, chapter: 195, source: 'chapter' },
]

/**
 * Every status change the group files after a record's gate, on its new
 * records and on the characters season 1 filed, pinned in both media;
 * `source` for a change one medium alone tells. A record that opens dead
 * in one medium has its death at its gate, tested there.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  {
    id: 'martyn-lannister',
    episode: 25,
    chapter: 164,
    source: 'episode',
    value: 'deceased',
  },
  { id: 'edmure-tully', episode: 30, chapter: 197, value: 'captured' },
  // The fates the drawing child files with their drawings' stages (#1643),
  // told in Jaime VII of A Feast for Crows.
  {
    id: 'raynald-westerling',
    episode: 58,
    chapter: 270,
    source: 'chapter',
    value: 'presumed-dead',
  },
  {
    id: 'ryman-frey',
    episode: 58,
    chapter: 270,
    source: 'chapter',
    value: 'deceased',
  },
]

/**
 * The show records that open dead at their gate: the episode that first
 * says their names also kills them. The books leave them alive.
 */
const DEAD_IN_THE_SHOW = ['lothar-frey', 'walder-rivers']

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
    id: 'raynald-westerling',
    en: 'Robb Stark’s banner-bearer',
    episode: 29,
    chapter: 193,
    source: 'chapter',
  },
  { id: 'roslin-frey', en: 'Edmure Tully’s wife', episode: 29, chapter: 195 },
  { id: 'edmure-tully', en: 'Lord of Riverrun', episode: 26, chapter: 179 },
  {
    id: 'walder-frey',
    en: 'House Frey, allied with House Lannister',
    episode: 29,
    chapter: 195,
  },
  {
    id: 'walder-frey',
    en: 'Lord of the Crossing and of Riverrun',
    episode: 30,
    chapter: 197,
    source: 'episode',
  },
  {
    id: 'roose-bolton',
    en: 'House Bolton, allied with House Lannister',
    episode: 29,
    chapter: 195,
  },
  { id: 'roose-bolton', en: 'Warden of the North', episode: 30, chapter: 197 },
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

describe('the third season’s Robb’s war and Riverlands cast', () => {
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

  it.each(DEAD_IN_THE_SHOW)(
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

  it('opens Willem Lannister a prisoner in the show and dead in the books', () => {
    const record = character('willem-lannister')

    expect(archive.latestOf(reader('episode', 23), record, 'status')).toBe(
      'captured',
    )
    expect(archive.latestOf(reader('episode', 24), record, 'status')).toBe(
      'captured',
    )
    expect(archive.latestOf(reader('episode', 25), record, 'status')).toBe(
      'deceased',
    )
    expect(archive.latestOf(reader('chapter', 164), record, 'status')).toBe(
      'deceased',
    )
  })

  it('opens Aegon Frey dead in the books', () => {
    expect(
      archive.latestOf(
        reader('chapter', 195),
        character('aegon-frey'),
        'status',
      ),
    ).toBe('deceased')
  })

  it('lists Robb and Catelyn among the season’s leads', () => {
    expect(archive.leads['season-3']).toStrictEqual(
      expect.arrayContaining(['robb-stark', 'catelyn-stark']),
    )
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

describe('the status changes one medium alone tells', () => {
  it.each(CHANGES.filter(({ source }) => source !== undefined))(
    'never makes $id $value for a reader of the other medium',
    ({ id, source = 'episode', value }) => {
      expect(
        archive.latestOf(otherAtTheEnd(source), character(id), 'status'),
      ).not.toBe(value)
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

/**
 * Every stage of the group's drawings (#1643), with the medium the engine
 * reads it in; `stage` is its index when a record has more than one.
 * Lothar's and Walder Rivers's deaths sit at their show gate: the episode
 * that names them kills them, so a show reader meets the stage first.
 */
const STAGES: {
  chapter: number
  episode: number
  id: keyof typeof DRAWINGS
  source?: 'chapter' | 'episode'
  stage?: number
}[] = [
  { id: 'rolph-spicer', episode: 58, chapter: 270, source: 'chapter' },
  { id: 'raynald-westerling', episode: 58, chapter: 270, source: 'chapter' },
  { id: 'willem-lannister', episode: 25, chapter: 164, source: 'episode' },
  { id: 'martyn-lannister', episode: 25, chapter: 164, source: 'episode' },
  { id: 'lothar-frey', episode: 60, chapter: 344, source: 'episode' },
  { id: 'walder-rivers', episode: 60, chapter: 344, source: 'episode' },
  { id: 'ryman-frey', episode: 58, chapter: 270, source: 'chapter' },
]

interface StageOfResult {
  previous: unknown
  stage: (typeof REDRAWINGS)[string][number] | undefined
}

/** A record's stage by its index, and the drawing just before it. */
function stageOf(id: keyof typeof DRAWINGS, index: number): StageOfResult {
  const stages = REDRAWINGS[id] ?? []

  return {
    previous: stages[index - 1]?.value ?? DRAWINGS[id],
    stage: stages[index],
  }
}

describe('the table of stages', () => {
  it('lists every stage of each record it redraws', () => {
    expect(unlisted(STAGES, REDRAWINGS)).toStrictEqual([])
  })
})

describe.each(
  STAGES.flatMap((stage) =>
    sidesOf(stage, archive.series).map((side) => ({
      ...stage,
      ...side,
      index: stage.stage ?? 0,
    })),
  ),
)(
  '$id is redrawn by $unit at $episode/$chapter',
  ({ id, episode, chapter, source, index, before, reached }) => {
    it('at its pin, not one before', () => {
      const owner = recordIn(archive, id)
      const { previous, stage } = stageOf(id, index)

      expect(stage?.episode).toBe(episode)
      expect(stage?.chapter).toBe(chapter)
      // The row's medium is the one the engine reads for this stage.
      expect(owner.source ?? stage?.source).toBe(source)
      expect(
        drawingOf(owner, readerFor(archive, before, 'en')).strokes,
      ).toStrictEqual(previous)
      expect(
        drawingOf(owner, readerFor(archive, reached, 'en')).strokes,
      ).toStrictEqual(stage?.value)
    })
  },
)

describe('the stages one medium alone tells', () => {
  it.each(STAGES.filter(({ source }) => source !== undefined))(
    'never redraws $id for a reader of the other medium',
    ({ id, source = 'episode', stage: index = 0 }) => {
      const drawn = drawingOf(recordIn(archive, id), otherAtTheEnd(source))

      expect(drawn.strokes).not.toStrictEqual(REDRAWINGS[id]?.[index]?.value)
    },
  )
})
