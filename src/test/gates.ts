import { isDeepStrictEqual } from 'node:util'

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
import { type Reader, readerFor } from '~/server/archive/reader.server'

/**
 * The gate-boundary kit of the per-arc tests: a test writes a table of the
 * counts each record is named at, from the naming scenes, and asks these
 * helpers for the bookmarks on both sides. They never read a gate from the
 * archive, so the table stays an independent expectation.
 */

export type Unit = Source
const UNITS: Unit[] = ['episode', 'chapter']

/**
 * One row of a hand-written table: the episode and chapter a record or step
 * is told at, and the one source that alone tells it. A table's columns are
 * often plain strings, so `source` is one, checked when it is read.
 */
export interface Pin {
  chapter: number
  episode: number
  source?: string | undefined
}

/** A unit named in a table, or the table is wrong. */
function unitOf(name: string): Unit {
  const unit = UNITS.find((each) => each === name)
  if (unit === undefined) {
    throw new Error(`${name} is not a unit`)
  }

  return unit
}

/** A bookmark at this count of this unit, named as a table names it. */
export function bookmarkAt(unit: string, count: number): NonNullable<Bookmark> {
  return unitOf(unit) === 'chapter' ?
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
 * in. A gate past the series' ceiling in a unit that tells it is a fault in
 * the table, and throws, naming the row.
 */
export function sidesOf(pin: Pin, series: BookmarkSeries): Side[] {
  const around = aroundGates(
    [
      {
        revealedAtEpisode: pin.episode,
        revealedAtChapter: pin.chapter,
        ...(pin.source !== undefined && { source: unitOf(pin.source) }),
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

  const told = UNITS.filter((unit) => (pin.source ?? unit) === unit)
  const unasked = told.find((unit) => !asked(unit, gateIn(unit)))
  if (unasked !== undefined) {
    throw new Error(
      `${JSON.stringify(pin)} is past the series' ${unasked} ceiling`,
    )
  }

  return told.map((unit) => {
    const gate = gateIn(unit)

    return {
      unit,
      gate,
      before: asked(unit, gate - 1) ? bookmarkAt(unit, gate - 1) : null,
      reached: bookmarkAt(unit, gate),
    }
  })
}

/**
 * Both sides of a pin's gate in one unit, for a test that walks one unit at
 * a time; the unit not telling the pin is a fault in the table, and throws.
 */
export function sideIn(pin: Pin, unit: string, series: BookmarkSeries): Side {
  const side = sidesOf(pin, series).find((each) => each.unit === unit)
  if (side === undefined) {
    throw new Error(`${unit} does not tell this pin`)
  }

  return side
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

/** One row of a hand-written table of redrawings: a record's stage (0 when unset) at its pin. */
export interface StageRow extends Pin {
  id: string
  stage?: number | undefined
}

/** What `shownIn` asks: a record, a unit, and the stage to look below. */
export interface Shown {
  below?: number
  id: string
  unit: string
}

/**
 * The stage of a record a reader of this unit is shown last, read off the
 * table alone: the highest stage below `below` whose row this unit tells (no
 * `source`, or this one). `undefined` is the first drawing.
 */
export function shownIn(
  rows: StageRow[],
  { below = Infinity, id, unit }: Shown,
): number | undefined {
  const told = rows
    .filter((row) => row.id === id && (row.stage ?? 0) < below)
    .filter((row) => (row.source ?? unitOf(unit)) === unitOf(unit))
    .map((row) => row.stage ?? 0)

  return told.length === 0 ? undefined : Math.max(...told)
}

/**
 * Each `id@stage` the data redraws, of a record the table names, that the
 * table lists no row for: a stage it would otherwise never hold.
 */
export function unlisted(
  rows: StageRow[],
  redrawings: Record<string, undefined | unknown[]>,
): string[] {
  const ids = [...new Set(rows.map(({ id }) => id))]

  return ids.flatMap((id) =>
    (redrawings[id] ?? [])
      .map((_, stage) => stage)
      .filter((stage) =>
        rows.every((row) => row.id !== id || (row.stage ?? 0) !== stage),
      )
      .map((stage) => `${id}@${String(stage)}`),
  )
}

/** A filed record of any kind, or the test is wrong. */
export function recordIn(archive: SeriesArchive, id: string): Entity {
  const record = archive.getEntity(id)
  if (record === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return record
}

/**
 * Whether a record's own page, of whatever kind, is open at a reader. A
 * record of the other source has no page for this reader at all.
 */
function slotOpen(id: string, reader: Reader): boolean {
  const page =
    characterPage(id, reader)
    ?? placePage(id, reader)
    ?? abilityPage(id, reader)
    ?? fruitPage(id, reader)
  if (page === undefined) {
    return false
  }

  return ('ship' in page ? page.ship : page.detail).slot.open
}

/** The fewest strokes a real drawing has. */
const LEAST_STROKES = 4

/**
 * Whether a record of any kind is open on its own page with its drawing sent
 * (true), or covered there with no drawing sent at all, not even an empty
 * one (false). Either half alone is a fault, and throws.
 */
export function opened(id: string, reader: Reader): boolean {
  const open = slotOpen(id, reader)
  const drawing = drawingsFor([id], reader)[id]
  const strokes = drawing?.length ?? 0

  if (open ? strokes >= LEAST_STROKES : drawing === undefined) {
    return open
  }
  throw new Error(`${id} is open: ${String(open)}, strokes: ${String(strokes)}`)
}

/**
 * Where a stage fails to show: each `locale unit` whose drawing of the record
 * at the pin is missing or the same as one step before. A stage that lands
 * at its true pair in both media gives an empty list.
 */
export function stageMissedAt(
  archive: SeriesArchive,
  id: string,
  pin: Pin,
): string[] {
  return LOCALES.flatMap((locale) => {
    return UNITS.filter((unit) => {
      const draw = (count: number): ReturnType<typeof drawingsFor> => {
        return drawingsFor(
          [id],
          readerFor(archive, bookmarkAt(unit, count), locale),
        )
      }
      const at = draw(pin[unit])
      return at[id] === undefined || isDeepStrictEqual(at, draw(pin[unit] - 1))
    }).map((unit) => {
      return `${locale} ${unit}`
    })
  })
}
