import { aroundGates } from '~/data/sweep'
import type { Entity, SeriesArchive } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'
import type { Source } from '~/lib/progress/spoiler'
import { abilityPage } from '~/server/archive/abilities.server'
import { fruitPage } from '~/server/archive/fruitPage.server'
import { characterPage, drawingsFor } from '~/server/archive/pages.server'
import { placePage } from '~/server/archive/placePage.server'
import type { Reader } from '~/server/archive/reader.server'

/**
 * The gate-boundary kit of the per-arc tests: a test writes a table of the
 * counts each record is named at, from the naming scenes, and asks these
 * helpers for the bookmarks on both sides. They never read a gate from the
 * archive, so the table stays an independent expectation.
 */

export type Unit = Source
export const UNITS: Unit[] = ['episode', 'chapter']

/**
 * One row of a hand-written table: the episode and chapter a record or step
 * is told at, and the one source that alone tells it.
 */
export interface Pin {
  chapter: number
  episode: number
  source?: Unit
}

/** A bookmark at this count of this unit. */
export function bookmarkAt(unit: Unit, count: number): NonNullable<Bookmark> {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

/** Both sides of a pin's gate in one unit. */
export interface Side {
  /** One count before the gate; `null`, the reader who has read nothing, at gate 1. */
  before: Bookmark
  gate: number
  reached: NonNullable<Bookmark>
  unit: Unit
}

/**
 * Both sides of a pin's gate in each unit that tells it, through the sweep's
 * own rule (`aroundGates`): none in the unit a source-only pin is not told
 * in, and none past the series' ceiling.
 */
export function sidesOf(pin: Pin, series: BookmarkSeries): Side[] {
  const around = aroundGates(
    [
      {
        revealedAtEpisode: pin.episode,
        revealedAtChapter: pin.chapter,
        ...(pin.source !== undefined && { source: pin.source }),
      },
    ],
    series,
  )
  const asked = (unit: Unit, count: number): boolean =>
    around.some(
      (bookmark) =>
        JSON.stringify(bookmark) === JSON.stringify(bookmarkAt(unit, count)),
    )

  const gateIn = (unit: Unit): number =>
    unit === 'chapter' ? pin.chapter : pin.episode

  return UNITS.filter((unit) => asked(unit, gateIn(unit))).map((unit) => {
    const gate = gateIn(unit)

    return {
      unit,
      gate,
      before: asked(unit, gate - 1) ? bookmarkAt(unit, gate - 1) : null,
      reached: bookmarkAt(unit, gate),
    }
  })
}

/** Each row in each locale, at both sides of its gate in each unit (`sidesOf`). */
export function gateCases<Row extends Pin>(
  rows: Row[],
  series: BookmarkSeries,
): (Row & Side & { locale: Locale })[] {
  return rows.flatMap((row) =>
    LOCALES.flatMap((locale) =>
      sidesOf(row, series).map((side) => ({ ...row, ...side, locale })),
    ),
  )
}

/** A filed record of any kind, or the test is wrong. */
export function recordOf(archive: SeriesArchive, id: string): Entity {
  const record = archive.getEntity(id)
  if (record === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return record
}

/** Whether a record's own page, of whatever kind, is open at a reader. */
function slotOpen(id: string, reader: Reader): boolean {
  const page =
    characterPage(id, reader)
    ?? placePage(id, reader)
    ?? abilityPage(id, reader)
    ?? fruitPage(id, reader)
  if (page === undefined) {
    throw new Error(`${id} has no page`)
  }

  return ('ship' in page ? page.ship : page.detail).slot.open
}

/** The fewest strokes a real drawing has. */
const LEAST_STROKES = 4

/**
 * Whether a record of any kind is open on its own page with its drawing sent
 * (true), or covered there with no drawing sent (false). Either half alone
 * is a fault, and throws.
 */
export function opened(id: string, reader: Reader): boolean {
  const open = slotOpen(id, reader)
  const strokes = drawingsFor([id], reader)[id]?.length ?? 0

  if (open === strokes >= LEAST_STROKES && (open || strokes === 0)) {
    return open
  }
  throw new Error(`${id} is open: ${String(open)}, strokes: ${String(strokes)}`)
}
