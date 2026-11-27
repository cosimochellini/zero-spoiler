import { byNumber, byValue } from 'sort-es'

import { type ReaderArchive, withFeatures } from '~/data/features'
import { orderByMode } from '~/data/order'
import { type Reveal, reveal, revealAt, sourceOf } from '~/data/reveal'
import { archiveIn } from '~/data/source'
import type { Entity, SeriesArchive } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated, Source } from '~/lib/progress/spoiler'
import type { CoveredRecord, PageUnit, Slot } from '~/lib/view/records'

import { handleOf, markedCopy, markOf } from './handle.server'

/**
 * One reader, for one request: the bookmark's `Reveal`, the locale the page
 * is drawn in, and the few things every page does with them.
 *
 * Every list page orders its records, splits them into open and covered, and
 * slots a single record one way or the other; a rail measures which records
 * are nearest. Each of those is a rule about the reader's unit, and written
 * once here a page cannot forget to cover a record, or count a chapter
 * reader's neighbours in episodes. The projections take the reader too, so
 * the locale and the bookmark travel as one.
 */
export interface Reader extends Reveal {
  /**
   * The archive as the reader's source tells it (`~/data/source`): a record
   * the reader does not have is in none of its lists, so no page can cover,
   * count or hand out a handle for one.
   */
  archive: ReaderArchive
  bookmark: Bookmark
  locale: Locale
  /**
   * The records closest to this one, this one excluded. Measured in the
   * reader's unit, because the page prints thresholds in it and a rail sorted
   * by the other would be a neighbourhood the reader cannot see they are in.
   */
  nearest: (entity: Entity, among: Entity[], count: number) => Entity[]
  /** Records in the order the reader's unit reaches them. */
  order: (entries: Entity[]) => Entity[]
  /** Either the record, projected, or the little that may be said about it. */
  slot: <T>(entity: Entity, open: (entity: Entity, r: Reader) => T) => Slot<T>
  /**
   * Records in the reader's order, split at the bookmark. For a bookmark's
   * reader the open ones are a prefix of the order, which is what lets a page
   * draw one horizon between two runs. Not for a page drawn at a point with
   * no bookmark (`pageReader`): it orders in episodes but opens only what the
   * chapter has reached too, so a record early in episodes and late in
   * chapters is covered among open ones. No page draws a horizon from it;
   * each run keeps its own order.
   */
  split: <T>(
    entries: Entity[],
    open: (entity: Entity, r: Reader) => T,
  ) => Split<T>
}

/** A list split at the bookmark, and how long it was. */
export interface Split<T> {
  covered: CoveredRecord[]
  open: T[]
  total: number
}

/**
 * Everything a record under fog is allowed to say about itself, with its
 * handle in the reader's own archive.
 */
export function coveredOf(
  entity: Entity,
  archive: ReaderArchive,
): CoveredRecord {
  return {
    handle: handleOf(entity.id, archive),
    kind: entity.kind,
    revealedAtEpisode: entity.revealedAtEpisode,
    revealedAtChapter: entity.revealedAtChapter,
  }
}

/** The reader at this bookmark, drawing pages in this locale. */
export function readerFor(
  archive: SeriesArchive,
  bookmark: Bookmark,
  locale: Locale,
): Reader {
  return readerSeeing(archive, {
    at: reveal(bookmark, archive.series),
    bookmark,
    locale,
  })
}

/** What a reader sees, and the language they read in. */
interface ReaderSight {
  at: Reveal
  locale: Locale
}

/** A reader's sight, bookmark and copy of the archive. */
interface ReaderSeeingOptions extends ReaderSight {
  bookmark: Bookmark
  told?: ReaderArchive
}

/**
 * A reader who sees what `at` sees: the bookmark's own, unless `pageReader`
 * draws a page for a reader with none. `told` is the bookmark's own copy
 * unless the page is about a record of one source only (`toldBy`).
 */
function readerSeeing(
  archive: SeriesArchive,
  {
    at,
    bookmark,
    locale,
    told = archiveIn(archive, sourceOf(bookmark)),
  }: ReaderSeeingOptions,
): Reader {
  const order = (entries: Entity[]): Entity[] => orderByMode(entries, at.mode)

  const reader: Reader = {
    ...at,
    archive: told,
    bookmark,
    locale,
    order,
    slot: (entity, open) => {
      return at.sees(entity) ?
          { open: true, record: open(entity, reader) }
        : { open: false, covered: coveredOf(entity, told) }
    },
    split: (entries, open) => {
      const ordered = order(entries)

      return {
        total: ordered.length,
        open: ordered.flatMap((entity) =>
          at.sees(entity) ? [open(entity, reader)] : [],
        ),
        covered: ordered.flatMap((entity) =>
          at.sees(entity) ? [] : [coveredOf(entity, told)],
        ),
      }
    },
    nearest: (entity, among, count) => {
      const here = at.threshold(entity)

      // Ordered first, so a tie goes to whoever the reader's route reaches
      // first rather than to the archive's own order.
      return order(among)
        .filter((candidate) => candidate.id !== entity.id)
        .toSorted(
          byValue(
            (candidate) => Math.abs(at.threshold(candidate) - here),
            byNumber(),
          ),
        )
        .slice(0, count)
    },
  }

  return reader
}

/** The record a page is about, if any, and the reader's language. */
export interface PageReaderOptions {
  id?: string
  locale: Locale
}

/**
 * The reader a record page or a list is drawn for (#1430).
 *
 * With a bookmark (or a trial), the bookmark's own reader, byte for byte.
 * Without one, a search engine and a person landing from it get the same
 * page: a record page as the record stands at its own first appearance, a
 * list (no `id`) open up to the end of the series' demo, both drawn by
 * `revealAt`. The bookmark stays `null` and the archive is the one a reader
 * with no bookmark is handed, so a handle this page mints is one "Show anyway"
 * (`lift*`, `liftReader`) resolves.
 *
 * A record of one source only is in no such archive (#1431): its page is
 * drawn as a reader of its source sees it at its own threshold in that
 * source, the other unit's number, which only orders it, left out. The
 * archive is that source's copy with its handles marked (`markedCopy`), so
 * "Show anyway" resolves them in the same copy. An id the series does not
 * file falls back to the plain null reader, under which the page is not
 * found.
 */
export function pageReader(
  archive: SeriesArchive,
  bookmark: Bookmark,
  { id, locale }: PageReaderOptions,
): Reader {
  if (bookmark !== null) {
    return readerFor(archive, bookmark, locale)
  }

  const point = pointOf(archive, id)
  if (point === undefined) {
    return readerFor(archive, null, locale)
  }

  return point.source === undefined ?
      readerSeeing(archive, {
        at: revealAt(point, archive.series),
        bookmark: null,
        locale,
      })
    : toldBy(archive, point.source, {
        at: reveal(ownBookmark(point, point.source), archive.series),
        locale,
      })
}

/** The handle a reader lifts, and their language. */
export interface LiftReaderOptions {
  handle: string
  locale: Locale
}

/**
 * The reader "Show anyway" lifts a handle for: the bookmark's own, or, with
 * no bookmark, a reader of the copy a marked handle names (`markOf`), who
 * counts in its unit and has reached nothing, as the null reader has. A
 * marked handle under a bookmark is resolved in the bookmark's own copy,
 * where it is no handle at all: it fails closed, so a reader of one source
 * cannot lift a record only the other tells.
 */
export function liftReader(
  archive: SeriesArchive,
  bookmark: Bookmark,
  { handle, locale }: LiftReaderOptions,
): Reader {
  const source = bookmark === null ? markOf(handle, archive) : undefined
  if (source === undefined) {
    return readerFor(archive, bookmark, locale)
  }

  const unit = reveal(ownBookmark(FIRST, source), archive.series)
  return toldBy(archive, source, { at: { ...unit, sees: () => false }, locale })
}

/** Episode 1 and chapter 1: only `liftReader`'s unit is read from it. */
const FIRST: Gated = { revealedAtEpisode: 1, revealedAtChapter: 1 }

/** A reader with no bookmark handed one source's copy, its handles marked. */
function toldBy(
  archive: SeriesArchive,
  source: Source,
  { at, locale }: ReaderSight,
): Reader {
  return readerSeeing(archive, {
    at,
    bookmark: null,
    locale,
    told: markedCopy(archiveIn(archive, source), source),
  })
}

/** The bookmark of this source at a point's threshold in it. */
export function ownBookmark(
  point: Gated,
  source: Source,
): NonNullable<Bookmark> {
  return source === 'episode' ?
      { mode: 'episode', episode: point.revealedAtEpisode }
    : { mode: 'chapter', chapter: point.revealedAtChapter }
}

/**
 * What a record page drawn with no bookmark in chapters says so (#1431), for
 * the browser to print thresholds and open the bookmark form in chapters: a
 * page about a record only the manga or the books tell. Nothing on any other
 * page, which the browser draws in the unit of its bookmark.
 */
export function pageUnit(r: Reader): PageUnit {
  return r.bookmark === null && r.mode === 'chapter' ? { unit: 'chapter' } : {}
}

/**
 * The point `pageReader` draws a page at for a reader with no bookmark: a
 * record page's record (`id`) at its first appearance, a list at the end of
 * the series' demo. A record of one source only keeps its `source`.
 * `undefined` for an id the series does not file, whose page is then not
 * found.
 */
export function pointOf(
  archive: SeriesArchive,
  id?: string,
): Gated | undefined {
  const { series } = archive

  return id === undefined ?
      {
        revealedAtEpisode: series.demoLastEpisode,
        revealedAtChapter: series.demoLastChapter,
      }
    : recordOf(withFeatures(archive), id)
}

/** Any record a page can be about: ships and fruits are kept apart. */
function recordOf(archive: ReaderArchive, id: string): Entity | undefined {
  return (
    archive.getEntity(id)
    ?? archive.getShip(id)
    ?? archive.getFruit(id)
    ?? archive.getAbility(id)
  )
}
