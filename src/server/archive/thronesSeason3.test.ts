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
 * Each season-3 King's Landing record's gate in each medium, as filed
 * (#1634); `source` for one medium, whose other number only orders the
 * record. Oberyn and Ellaria keep the show's later gates, in season 4
 * (#852).
 */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'olenna-tyrell', episode: 22, chapter: 150 },
  { id: 'megga-tyrell', episode: 22, chapter: 150, source: 'chapter' },
  { id: 'alla-tyrell', episode: 22, chapter: 150, source: 'chapter' },
  { id: 'elinor-tyrell', episode: 22, chapter: 150, source: 'chapter' },
  { id: 'oberyn-martell', episode: 31, chapter: 182 },
  { id: 'ellaria-sand', episode: 32, chapter: 182 },
]

/**
 * Every role and affiliation step the third stage's King's Landing group
 * adds to a character an earlier stage filed, by its English text; `source`
 * for a step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  // A step back to a text the other medium shows all along, so only its
  // timing is one medium's.
  restores?: true
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'tyrion-lannister', en: 'Master of coin', episode: 23, chapter: 163 },
  {
    id: 'petyr-baelish',
    en: 'Lord of Harrenhal and suitor to Lysa Arryn',
    episode: 23,
    chapter: 163,
  },
  { id: 'bronn', en: 'Knight in Tyrion’s pay', episode: 21, chapter: 148 },
  {
    id: 'sansa-stark',
    en: 'Tyrion Lannister’s wife',
    episode: 28,
    chapter: 172,
  },
  {
    id: 'boros-blount',
    en: 'Dismissed from the Kingsguard',
    episode: 19,
    chapter: 123,
    source: 'chapter',
  },
  {
    id: 'boros-blount',
    en: 'House Blount',
    episode: 19,
    chapter: 123,
    source: 'chapter',
  },
  {
    id: 'boros-blount',
    en: 'Knight of the Kingsguard',
    episode: 21,
    chapter: 156,
    restores: true,
    source: 'chapter',
  },
  {
    id: 'boros-blount',
    en: 'Kingsguard',
    episode: 21,
    chapter: 156,
    restores: true,
    source: 'chapter',
  },
  {
    id: 'addam-marbrand',
    en: 'Commander of the City Watch',
    episode: 21,
    chapter: 148,
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

describe('the third season’s King’s Landing cast', () => {
  it('files these records', () => {
    // Each cast group's test lists its own records; the season holds them
    // all.
    expect(season3.entries.map(({ id }) => id).toSorted(byText)).toStrictEqual(
      expect.arrayContaining(RECORDS.map(({ id }) => id).toSorted(byText)),
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

  it('keeps Oberyn and Ellaria from a viewer at the end of season 3', () => {
    // The book reader meets them at chapter 182; the show only in season 4.
    expect(opened('oberyn-martell', reader('episode', 30))).toBe(false)
    expect(opened('ellaria-sand', reader('episode', 31))).toBe(false)
  })
})

describe('the new records’ status', () => {
  it.each(
    RECORDS.flatMap((record) =>
      UNITS.filter((unit) => (record.source ?? unit) === unit).map((unit) => ({
        ...record,
        unit,
      })),
    ),
  )('$id is alive at its $unit gate', ({ id, episode, chapter, unit }) => {
    const gate = unit === 'chapter' ? chapter : episode

    expect(archive.latestOf(reader(unit, gate), character(id), 'status')).toBe(
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
  it.each(
    STEPS.filter(
      ({ restores, source }) => source !== undefined && restores !== true,
    ),
  )(
    'never shows “$en” to a reader of the other medium',
    ({ id, en, source = 'episode' }) => {
      const page = JSON.stringify(
        characterPage(id, otherAtTheEnd(source)) ?? null,
      )

      expect(page).not.toContain(JSON.stringify(en))
    },
  )
})

describe('Boros Blount’s white cloak', () => {
  it('stays on him for a viewer, who never sees him dismissed', () => {
    const owner = character('boros-blount')
    const viewer = otherAtTheEnd('chapter')

    expect(archive.latestOf(viewer, owner, 'affiliation')?.en).toBe(
      'Kingsguard',
    )
    expect(archive.roleOf(viewer, owner)?.en).toBe('Knight of the Kingsguard')
  })
})

describe('the season’s leads', () => {
  it('lists the King’s Landing leads', () => {
    expect(archive.leads['season-3']).toStrictEqual(
      expect.arrayContaining([
        'tyrion-lannister',
        'sansa-stark',
        'olenna-tyrell',
      ]),
    )
  })
})

/**
 * Every later death the King's Landing drawing child files on the group's
 * new records, with its drawing's stage (#1642), and Alayaya's release, which
 * the group's chronicles tell (#1660); `source` for a change one medium alone
 * tells.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  // Alayaya's release, which her chronicle tells at Tyrion I (#1660).
  {
    id: 'alayaya',
    episode: 21,
    chapter: 148,
    source: 'chapter',
    value: 'alive',
  },
  { id: 'oberyn-martell', episode: 38, chapter: 214, value: 'deceased' },
  {
    id: 'olenna-tyrell',
    episode: 63,
    chapter: 344,
    source: 'episode',
    value: 'deceased',
  },
]

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
})

/**
 * Every stage of the King's Landing group's drawings (#1642), with the
 * medium the engine reads it in; `stage` is its index when a record has
 * more than one.
 */
const STAGES: {
  chapter: number
  episode: number
  id: keyof typeof DRAWINGS
  source?: 'chapter' | 'episode'
  stage?: number
}[] = [
  { id: 'olenna-tyrell', episode: 34, chapter: 212 },
  {
    id: 'olenna-tyrell',
    episode: 63,
    chapter: 344,
    source: 'episode',
    stage: 1,
  },
  { id: 'oberyn-martell', episode: 38, chapter: 214 },
]

/** A record's stage by its index, and the drawing just before it. */
function stageOf(
  id: keyof typeof DRAWINGS,
  index: number,
): {
  previous: unknown
  stage: (typeof REDRAWINGS)[string][number] | undefined
} {
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
