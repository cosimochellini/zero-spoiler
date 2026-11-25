import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/series/game-of-thrones/art'
import {
  season2,
  SEASON_2_PLACES,
} from '~/data/series/game-of-thrones/records/season-2'
import type { Bookmark } from '~/lib/progress/episode'
import { gateCases, opened, recordIn, sidesOf } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { placePage } from './placePage.server'
import { drawingOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('game-of-thrones')

/**
 * Each place a scene of the second stage is set in (#1469), at its first
 * scene in each medium, as `game-of-thrones-season-2-places.md` lists them;
 * `source` for one medium, whose other number only orders the place.
 */
const PLACES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'crasters-keep', episode: 11, chapter: 97 },
  { id: 'red-waste', episode: 11, chapter: 86 },
  { id: 'whitetree', episode: 11, chapter: 87, source: 'chapter' },
  { id: 'vaes-tolorro', episode: 11, chapter: 86, source: 'chapter' },
  { id: 'lordsport', episode: 12, chapter: 85 },
  { id: 'stony-shore', episode: 13, chapter: 111 },
  { id: 'bitterbridge', episode: 13, chapter: 96, source: 'chapter' },
  { id: 'oxcross', episode: 14, chapter: 106 },
  { id: 'garden-of-bones', episode: 14, chapter: 101, source: 'episode' },
  { id: 'guildhall-of-the-alchemists', episode: 15, chapter: 94 },
  { id: 'fist-of-the-first-men', episode: 15, chapter: 108 },
  { id: 'skirling-pass', episode: 16, chapter: 125 },
  { id: 'storms-end', episode: 18, chapter: 105 },
  { id: 'blackwater-bay', episode: 18, chapter: 132 },
  { id: 'house-of-the-undying', episode: 20, chapter: 122 },
  { id: 'the-crag', episode: 18, chapter: 129 },
]

/**
 * Each place the stage names in both media and never visits (#1476), at its
 * first naming in each medium, with no one filed there.
 */
const NAMED: { chapter: number; episode: number; id: string }[] = [
  { id: 'torrhens-square', episode: 11, chapter: 90 },
  { id: 'flea-bottom', episode: 11, chapter: 75 },
  { id: 'oldtown', episode: 11, chapter: 74 },
  { id: 'lorath', episode: 12, chapter: 121 },
  { id: 'deepwood-motte', episode: 13, chapter: 98 },
  { id: 'highgarden', episode: 13, chapter: 84 },
  { id: 'summer-isles', episode: 18, chapter: 74 },
  { id: 'dreadfort', episode: 16, chapter: 90 },
  { id: 'tarth', episode: 13, chapter: 96 },
  { id: 'seagard', episode: 20, chapter: 81 },
  { id: 'ashemark', episode: 20, chapter: 109 },
]

/**
 * Each visit the stage pays to a place season 1 filed as named only, at the
 * episode and chapter that show it; `source` for one medium.
 */
const VISITS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'dragonstone', episode: 11, chapter: 74 },
  { id: 'pyke', episode: 12, chapter: 85 },
  { id: 'gods-eye', episode: 13, chapter: 88, source: 'chapter' },
  { id: 'harrenhal', episode: 14, chapter: 100 },
  { id: 'qarth', episode: 14, chapter: 101 },
]

/**
 * Each later drawing of a place this stage files (#1489), at its pin;
 * `source` for one medium, whose other number only orders it. The House of
 * the Undying burns in the chapter it opens in (122), so its books-only
 * stage waits for the next chapter.
 */
const STAGES: {
  chapter: number
  episode: number
  id: keyof typeof DRAWINGS
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'blackwater-bay', episode: 19, chapter: 132 },
  { id: 'house-of-the-undying', episode: 20, chapter: 123, source: 'chapter' },
]

/**
 * The reader of the other medium at the stage's last count, episode 20 or
 * chapter 143.
 */
function otherAtTheEnd(source: 'chapter' | 'episode'): Reader {
  const bookmark: Bookmark =
    source === 'episode' ?
      { mode: 'chapter', chapter: 143 }
    : { mode: 'episode', episode: 20 }

  return readerFor(archive, bookmark, 'en')
}

/** The episodes of the visits a place's page sends to this reader. */
function visitsAt(id: string, bookmark: Bookmark): number[] {
  const page = placePage(id, readerFor(archive, bookmark, 'en'))
  if (page === undefined || !('detail' in page)) {
    return []
  }

  return page.detail.visits.map((visit) => visit.revealedAtEpisode)
}

const GATES = gateCases(PLACES, archive.series)
const NAMED_GATES = gateCases(NAMED, archive.series)

describe('the second stage’s visited places', () => {
  it('files these places in season 2, each with a dossier', () => {
    const places = season2.entries
      .filter(({ kind }) => kind === 'place')
      .map(({ id }) => id)

    expect(places).toStrictEqual(
      expect.arrayContaining(PLACES.map(({ id }) => id)),
    )

    for (const { id } of PLACES) {
      expect(SEASON_2_PLACES[id], id).toBeDefined()
    }
  })

  it.each(GATES)(
    'opens $id at its first scene by $unit in $locale',
    ({ id, locale, reached }) => {
      expect(opened(id, readerFor(archive, reached, locale))).toBe(true)
    },
  )

  it.each(GATES)(
    'keeps $id closed one $unit before it in $locale',
    ({ before, id, locale }) => {
      expect(opened(id, readerFor(archive, before, locale))).toBe(false)
    },
  )

  it.each(PLACES.filter(({ source }) => source !== undefined))(
    'never opens the one-medium $id to a reader of the other',
    ({ id, source = 'episode' }) => {
      expect(opened(id, otherAtTheEnd(source))).toBe(false)
    },
  )
})

describe('the second stage’s named-only places', () => {
  it('files these places in season 2, with no one filed there', () => {
    const places = season2.entries
      .filter(({ kind }) => kind === 'place')
      .map(({ id }) => id)

    expect(places).toStrictEqual(
      expect.arrayContaining(NAMED.map(({ id }) => id)),
    )

    for (const { id } of NAMED) {
      expect(SEASON_2_PLACES[id]?.filedHere, id).toStrictEqual([])
    }
  })

  it.each(NAMED_GATES)(
    'opens $id at its first naming by $unit in $locale',
    ({ id, locale, reached }) => {
      expect(opened(id, readerFor(archive, reached, locale))).toBe(true)
    },
  )

  it.each(NAMED_GATES)(
    'keeps $id closed one $unit before it in $locale',
    ({ before, id, locale }) => {
      expect(opened(id, readerFor(archive, before, locale))).toBe(false)
    },
  )
})

describe.each(
  VISITS.flatMap((visit) =>
    sidesOf(visit, archive.series).map((side) => ({ ...visit, ...side })),
  ),
)('the visit to $id by $unit', ({ before, episode, id, reached }) => {
  it('shows at its pin, not one before', () => {
    expect(visitsAt(id, before)).not.toContain(episode)
    expect(visitsAt(id, reached)).toContain(episode)
  })
})

describe.each(
  STAGES.flatMap((stage) =>
    sidesOf(stage, archive.series).map((side) => ({ ...stage, ...side })),
  ),
)(
  '$id is redrawn by $unit at $episode/$chapter',
  ({ before, chapter, episode, id, reached, source }) => {
    it('at its pin, not one before', () => {
      const place = recordIn(archive, id)
      const stage = REDRAWINGS[id]?.[0]

      expect(stage?.episode).toBe(episode)
      expect(stage?.chapter).toBe(chapter)
      expect(place.source ?? stage?.source).toBe(source)
      expect(
        drawingOf(place, readerFor(archive, before, 'en')).strokes,
      ).toStrictEqual(DRAWINGS[id])
      expect(
        drawingOf(place, readerFor(archive, reached, 'en')).strokes,
      ).toStrictEqual(stage?.value)
    })
  },
)

describe('the place stages one medium alone tells', () => {
  it.each(STAGES.filter(({ source }) => source !== undefined))(
    'never redraws $id for a reader of the other medium',
    ({ id, source = 'episode' }) => {
      const place = recordIn(archive, id)

      expect(drawingOf(place, otherAtTheEnd(source)).strokes).toStrictEqual(
        DRAWINGS[id],
      )
      expect(
        drawingOf(
          place,
          readerFor(archive, { mode: 'episode', episode: 73 }, 'en'),
        ).strokes,
      ).toStrictEqual(DRAWINGS[id])
    },
  )
})

describe('the visits one medium alone tells', () => {
  it.each(VISITS.filter(({ source }) => source !== undefined))(
    'never shows the visit to $id to a reader of the other medium',
    ({ episode, id, source = 'episode' }) => {
      const other: Bookmark =
        source === 'episode' ?
          { mode: 'chapter', chapter: 143 }
        : { mode: 'episode', episode: 20 }

      expect(visitsAt(id, other)).not.toContain(episode)
    },
  )
})
