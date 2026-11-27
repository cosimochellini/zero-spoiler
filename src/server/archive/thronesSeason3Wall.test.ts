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
  throw new Error('Season 3 tests require Game of Thrones')
}
const { archive } = series

/**
 * Each season-3 Wall and beyond record's gate in each medium, as filed
 * (#1638); `source` for one medium, whose other number only orders the
 * record.
 */
const WALL_RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'mance-rayder', episode: 21, chapter: 151 },
  { id: 'tormund', episode: 23, chapter: 151 },
  { id: 'orell', episode: 22, chapter: 151 },
  { id: 'styr', episode: 21, chapter: 151, source: 'chapter' },
  { id: 'dalla', episode: 21, chapter: 151, source: 'chapter' },
  { id: 'val', episode: 21, chapter: 151, source: 'chapter' },
  { id: 'jarl', episode: 21, chapter: 151, source: 'chapter' },
  { id: 'small-paul', episode: 21, chapter: 144, source: 'chapter' },
  { id: 'dirk', episode: 21, chapter: 144, source: 'chapter' },
  { id: 'ollo-lophand', episode: 21, chapter: 144, source: 'chapter' },
  { id: 'clubfoot-karl', episode: 21, chapter: 144, source: 'chapter' },
]

/**
 * Every status change the Wall group files after a gate; `source` for a
 * change one medium alone tells. Orell's death is checked on its own below:
 * the books open on him dead.
 */
const WALL_CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  {
    id: 'small-paul',
    episode: 21,
    chapter: 162,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'jarl',
    episode: 26,
    chapter: 174,
    source: 'chapter',
    value: 'deceased',
  },
  // The fates the drawing child files with their drawings' stages (#1646).
  { id: 'mance-rayder', episode: 41, chapter: 282, value: 'deceased' },
  {
    id: 'mance-rayder',
    episode: 41,
    chapter: 303,
    source: 'chapter',
    value: 'alive',
  },
  {
    id: 'styr',
    episode: 39,
    chapter: 199,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'dalla',
    episode: 40,
    chapter: 219,
    source: 'chapter',
    value: 'deceased',
  },
  {
    id: 'ollo-lophand',
    episode: 35,
    chapter: 276,
    source: 'chapter',
    value: 'deceased',
  },
]

/**
 * Every role step the Wall group files, on its new records and on the
 * characters earlier seasons filed, by its English text; `source` for a
 * step one medium alone tells.
 */
const WALL_STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  {
    id: 'jon-snow',
    en: 'Sworn brother of the Night’s Watch, back at Castle Black',
    episode: 30,
    chapter: 192,
  },
  {
    id: 'rast',
    en: 'Mutineer at Craster’s Keep',
    episode: 24,
    chapter: 177,
    source: 'episode',
  },
  {
    id: 'chett',
    en: 'Kennel hand on the ranging beyond the Wall, leading a plot to desert',
    episode: 21,
    chapter: 144,
    source: 'chapter',
  },
  {
    id: 'ygritte',
    en: 'Raider of the band that climbs the Wall',
    episode: 26,
    chapter: 174,
  },
  {
    id: 'gilly',
    en: 'Craster’s daughter, fleeing south with Samwell Tarly',
    episode: 24,
    chapter: 190,
  },
  {
    id: 'dirk',
    en: 'Mutineer at Craster’s Keep',
    episode: 24,
    chapter: 177,
    source: 'chapter',
  },
  {
    id: 'ollo-lophand',
    en: 'Mutineer at Craster’s Keep',
    episode: 24,
    chapter: 177,
    source: 'chapter',
  },
  {
    id: 'clubfoot-karl',
    en: 'Mutineer at Craster’s Keep',
    episode: 24,
    chapter: 177,
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

/** Each item in each unit its medium tells it in. */
function byUnit<T extends { source?: Unit }>(
  items: T[],
): (T & { unit: Unit })[] {
  return items.flatMap((item) =>
    UNITS.filter((unit) => (item.source ?? unit) === unit).map((unit) => ({
      ...item,
      unit,
    })),
  )
}

/** Each Wall record in each locale and in each unit that tells it. */
const WALL_GATES = WALL_RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    byUnit([record]).map(({ unit }) => ({
      id: record.id,
      gate: unit === 'chapter' ? record.chapter : record.episode,
      locale,
      unit,
    })),
  ),
)

describe('the third season’s Wall and beyond cast', () => {
  it('files these records', () => {
    // Each cast group's test lists its own records; the season holds them
    // all.
    expect(season3.entries.map(({ id }) => id).toSorted(byText)).toStrictEqual(
      expect.arrayContaining(WALL_RECORDS.map(({ id }) => id).toSorted(byText)),
    )
  })

  it.each(WALL_GATES)(
    'opens $id at its named scene by $unit in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate, locale))).toBe(true)
    },
  )

  it.each(WALL_GATES)(
    'keeps $id closed one $unit before it in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate - 1, locale))).toBe(false)
    },
  )

  it.each(WALL_RECORDS.filter(({ source }) => source !== undefined))(
    'never opens the one-medium $id to a reader of the other',
    ({ id, source = 'episode' }) => {
      expect(opened(id, otherAtTheEnd(source))).toBe(false)
    },
  )
})

describe('the Wall cast’s status', () => {
  it.each(byUnit(WALL_RECORDS.filter(({ id }) => id !== 'orell')))(
    '$id is alive at its $unit gate',
    ({ id, episode, chapter, unit }) => {
      const gate = unit === 'chapter' ? chapter : episode

      expect(
        archive.latestOf(reader(unit, gate), character(id), 'status'),
      ).toBe('alive')
    },
  )

  describe.each(byUnit(WALL_CHANGES))(
    '$id becomes $value by $unit',
    ({ id, episode, chapter, value, unit }) => {
      it('at its pin, not one before', () => {
        const pin = unit === 'chapter' ? chapter : episode
        const owner = character(id)

        expect(
          archive.latestOf(reader(unit, pin - 1), owner, 'status'),
        ).not.toBe(value)
        expect(archive.latestOf(reader(unit, pin), owner, 'status')).toBe(value)
      })
    },
  )

  it('keeps Orell alive in the show until Queenscrown, episode 29', () => {
    const orell = character('orell')

    expect(archive.latestOf(reader('episode', 22), orell, 'status')).toBe(
      'alive',
    )
    expect(archive.latestOf(reader('episode', 28), orell, 'status')).toBe(
      'alive',
    )
    expect(archive.latestOf(reader('episode', 29), orell, 'status')).toBe(
      'deceased',
    )
  })

  it('opens Orell dead in the books, killed before they name him', () => {
    expect(
      archive.latestOf(reader('chapter', 151), character('orell'), 'status'),
    ).toBe('deceased')
  })
})

describe.each(byUnit(WALL_STEPS))(
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

describe('the Wall steps one medium alone tells', () => {
  it.each(WALL_STEPS.filter(({ source }) => source !== undefined))(
    'never shows “$en” on $id’s page to a reader of the other medium',
    ({ id, en, source = 'episode' }) => {
      const page = JSON.stringify(
        characterPage(id, otherAtTheEnd(source)) ?? null,
      )

      expect(page).not.toContain(JSON.stringify(en))
    },
  )
})

describe('the season’s Wall leads', () => {
  it('lists Jon Snow and Mance Rayder', () => {
    expect(archive.leads['season-3']).toStrictEqual(
      expect.arrayContaining(['jon-snow', 'mance-rayder']),
    )
  })
})

/**
 * Every stage of the group's drawings (#1646), with the medium the engine
 * reads it in; `stage` counts a record's stages from 0. Orell's two stages
 * draw the same empty branch: the show's death at 29, and the books' eagle
 * burning at 217, his record opening dead there. Mance's burning is told in
 * both media, and the books alone then tell that he lives.
 */
const STAGES: {
  chapter: number
  episode: number
  id: keyof typeof DRAWINGS
  source?: 'chapter' | 'episode'
  stage?: number
}[] = [
  { id: 'mance-rayder', episode: 41, chapter: 282 },
  {
    id: 'mance-rayder',
    episode: 41,
    chapter: 303,
    source: 'chapter',
    stage: 1,
  },
  { id: 'orell', episode: 29, chapter: 151, source: 'episode' },
  { id: 'orell', episode: 40, chapter: 217, source: 'chapter', stage: 1 },
  { id: 'styr', episode: 39, chapter: 199, source: 'chapter' },
  { id: 'dalla', episode: 40, chapter: 219, source: 'chapter' },
  { id: 'jarl', episode: 26, chapter: 174, source: 'chapter' },
  { id: 'small-paul', episode: 21, chapter: 162, source: 'chapter' },
  { id: 'ollo-lophand', episode: 35, chapter: 276, source: 'chapter' },
]

/** The drawings the table's stages are read against. */
const ART = { drawings: DRAWINGS, redrawings: REDRAWINGS }

describe('the table of Wall stages', () => {
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
    // The drawing just before is the last earlier stage this unit reads, by
    // the table: a stage the other medium alone tells is never shown here.
    const previous = drawnIn(STAGES, ART, { id, unit, below: index })

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

describe('the Wall stages one medium alone tells', () => {
  // A reader of the other medium who has reached its end sees the last
  // stage their medium tells, or the first drawing when it tells none,
  // both read off the table.
  it.each(STAGES.filter(({ source }) => source !== undefined))(
    'draws $id for a reader of the other medium as that medium tells it',
    ({ id, source = 'episode' }) => {
      const other: Unit = source === 'chapter' ? 'episode' : 'chapter'
      const drawn = drawingOf(
        recordIn(archive, id),
        otherAtTheEnd(source),
      ).strokes

      expect(drawn).toStrictEqual(drawnIn(STAGES, ART, { id, unit: other }))
    },
  )

  it('keeps Mance’s lute fallen for a show viewer at the end', () => {
    expect(
      drawingOf(recordIn(archive, 'mance-rayder'), otherAtTheEnd('chapter'))
        .strokes,
    ).toStrictEqual(REDRAWINGS['mance-rayder']?.[0]?.value)
  })
})
