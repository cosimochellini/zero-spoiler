import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/series/game-of-thrones/art'
import {
  season3,
  SEASON_3_PLACES,
} from '~/data/series/game-of-thrones/records/season-3'
import type { Bookmark } from '~/lib/progress/episode'
import {
  drawnIn,
  gateCases,
  opened,
  recordIn,
  sidesOf,
  unlisted,
} from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { placePage } from './placePage.server'
import { drawingOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('game-of-thrones')

/**
 * Each place a scene of the third stage is set in (#1630), at its first
 * scene in each medium, as `game-of-thrones-season-3-places.md` lists them;
 * `source` for one medium, whose other number only orders the place. The
 * Nightfort is visited by the show and only named by the books in the stage
 * (#1252).
 */
const PLACES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'astapor', episode: 21, chapter: 152 },
  { id: 'yunkai', episode: 27, chapter: 167 },
  { id: 'nightfort', episode: 29, chapter: 170 },
  {
    id: 'inn-of-the-kneeling-man',
    episode: 22,
    chapter: 155,
    source: 'chapter',
  },
  { id: 'milkwater', episode: 21, chapter: 144, source: 'chapter' },
  { id: 'maidenpool', episode: 23, chapter: 165, source: 'chapter' },
  { id: 'high-heart', episode: 23, chapter: 166, source: 'chapter' },
  { id: 'acorn-hall', episode: 23, chapter: 166, source: 'chapter' },
  { id: 'stoney-sept', episode: 24, chapter: 173, source: 'chapter' },
  { id: 'hollow-hill', episode: 24, chapter: 178, source: 'chapter' },
  { id: 'queenscrown', episode: 29, chapter: 184, source: 'chapter' },
  { id: 'oldstones', episode: 29, chapter: 189, source: 'chapter' },
  { id: 'lord-harroways-town', episode: 29, chapter: 191, source: 'chapter' },
]

/**
 * Each place the stage names in both media and never visits, at its first
 * naming in each medium in the stage, with no one filed there.
 */
const NAMED: { chapter: number; episode: number; id: string }[] = [
  { id: 'meereen', episode: 28, chapter: 152 },
  { id: 'karhold', episode: 25, chapter: 153 },
  { id: 'last-hearth', episode: 26, chapter: 151 },
  { id: 'mummers-ford', episode: 24, chapter: 161 },
  { id: 'shadow-tower', episode: 25, chapter: 144 },
  { id: 'bay-of-seals', episode: 29, chapter: 174 },
  { id: 'castamere', episode: 28, chapter: 163 },
]

/**
 * Each dated step the stage adds to a place: a named-only place it visits,
 * a place taken, sacked or overrun, at the episode and chapter that show
 * it; `source` for one medium. The Dreadfort's books pin is past the stage
 * (#852).
 */
const VISITS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'astapor', episode: 24, chapter: 171 },
  { id: 'yunkai', episode: 29, chapter: 186 },
  { id: 'harrenhal', episode: 22, chapter: 121 },
  { id: 'fist-of-the-first-men', episode: 21, chapter: 162 },
  { id: 'crasters-keep', episode: 24, chapter: 177 },
  { id: 'dreadfort', episode: 30, chapter: 284 },
  { id: 'flea-bottom', episode: 21, chapter: 150, source: 'episode' },
  { id: 'milkwater', episode: 22, chapter: 151, source: 'chapter' },
]

/**
 * Each later drawing of a place this stage changes, at its pin.
 */
const STAGES: {
  chapter: number
  episode: number
  id: keyof typeof DRAWINGS
  source?: 'chapter' | 'episode'
  stage?: number
}[] = [
  { id: 'harrenhal', episode: 22, chapter: 121 },
  { id: 'fist-of-the-first-men', episode: 21, chapter: 159 },
  { id: 'astapor', episode: 24, chapter: 171 },
  { id: 'yunkai', episode: 29, chapter: 186 },
]

/** The bookmark of the other medium at the stage's last count. */
function otherBookmark(source: 'chapter' | 'episode'): Bookmark {
  return source === 'episode' ?
      { mode: 'chapter', chapter: 196 }
    : { mode: 'episode', episode: 30 }
}

/** The reader of the other medium at the stage's last count. */
function otherAtTheEnd(source: 'chapter' | 'episode'): Reader {
  return readerFor(archive, otherBookmark(source), 'en')
}

/** The pairs of the visits a place's page sends to this reader. */
function visitsAt(id: string, bookmark: Bookmark): string[] {
  const page = placePage(id, readerFor(archive, bookmark, 'en'))
  if (page === undefined || !('detail' in page)) {
    return []
  }

  return page.detail.visits.map(
    (visit) =>
      `${String(visit.revealedAtEpisode)}/${String(visit.revealedAtChapter)}`,
  )
}

const GATES = gateCases(PLACES, archive.series)
const NAMED_GATES = gateCases(NAMED, archive.series)

describe('the third stage’s visited places', () => {
  it('files these places in season 3, each with a dossier', () => {
    const places = season3.entries
      .filter(({ kind }) => kind === 'place')
      .map(({ id }) => id)

    expect(places).toStrictEqual(
      expect.arrayContaining(PLACES.map(({ id }) => id)),
    )

    for (const { id } of PLACES) {
      expect(SEASON_3_PLACES[id], id).toBeDefined()
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

describe('the third stage’s named-only places', () => {
  it('files these places in season 3, with no one filed there', () => {
    const places = season3.entries
      .filter(({ kind }) => kind === 'place')
      .map(({ id }) => id)

    expect(places).toStrictEqual(
      expect.arrayContaining(NAMED.map(({ id }) => id)),
    )

    for (const { id } of NAMED) {
      expect(SEASON_3_PLACES[id]?.filedHere, id).toStrictEqual([])
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
)('the visit to $id by $unit', ({ before, chapter, episode, id, reached }) => {
  it('shows at its pin, not one before', () => {
    const pair = `${String(episode)}/${String(chapter)}`

    expect(visitsAt(id, before)).not.toContain(pair)
    expect(visitsAt(id, reached)).toContain(pair)
  })
})

describe('the table of stages', () => {
  it('lists every stage of each record it redraws', () => {
    expect(unlisted(STAGES, REDRAWINGS)).toStrictEqual([])
  })
})

/** The drawings the table's stages are read against. */
const ART = { drawings: DRAWINGS, redrawings: REDRAWINGS }

describe.each(
  STAGES.flatMap((stage) =>
    sidesOf(stage, archive.series).map((side) => ({ ...stage, ...side })),
  ),
)(
  '$id is redrawn by $unit at $episode/$chapter',
  ({
    before,
    chapter,
    episode,
    id,
    reached,
    source,
    stage: index = 0,
    unit,
  }) => {
    it('at its pin, not one before', () => {
      const place = recordIn(archive, id)
      const stage = REDRAWINGS[id]?.[index]

      expect(stage?.episode).toBe(episode)
      expect(stage?.chapter).toBe(chapter)
      expect(place.source ?? stage?.source).toBe(source)
      expect(
        drawingOf(place, readerFor(archive, before, 'en')).strokes,
      ).toStrictEqual(drawnIn(STAGES, ART, { id, unit, below: index }))
      expect(
        drawingOf(place, readerFor(archive, reached, 'en')).strokes,
      ).toStrictEqual(stage?.value)
    })
  },
)

describe('the visits one medium alone tells', () => {
  it.each(VISITS.filter(({ source }) => source !== undefined))(
    'never shows the visit to $id to a reader of the other medium',
    ({ chapter, episode, id, source = 'episode' }) => {
      expect(visitsAt(id, otherBookmark(source))).not.toContain(
        `${String(episode)}/${String(chapter)}`,
      )
    },
  )
})
