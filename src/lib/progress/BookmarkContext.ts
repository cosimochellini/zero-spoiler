import { createContext, use, useMemo } from 'react'

import { useLocale, useSeriesT } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { SeriesSlug } from '~/i18n/types'

import { type Bookmark, modeOf } from './episode'
import type { BookmarkSeries } from './series'
import type { Gated } from './spoiler'
import { describeThreshold, type ThresholdSentence } from './threshold'

/**
 * What the last save changed, for the line that says so (`BookmarkStatus`).
 */
export interface BookmarkNotice {
  /** The saved bookmark before the move; `null` when there was none. */
  from: Bookmark
  /** How many entries the listing on screen had open; `null` off a listing. */
  open: null | number
  /** The page the save was made on: the notice ends when the reader leaves it. */
  path: string
  /** The saved bookmark now; `null` when it was cleared. */
  to: Bookmark
}

/** What the provider puts on the context: the bookmark, and how to move it. */
export interface BookmarkContextValue {
  /** The series selected by the current route; none on shared site pages. */
  series: BookmarkSeries | null
  /** The point the pages stand at: the saved bookmark, or a trial point. */
  bookmark: Bookmark
  /**
   * Stands at a point for this browser session without saving it. Writes the
   * trial cookie and nothing else: the caller is about to navigate, and the
   * page it lands on reads the cookie.
   */
  enterTrial: (point: NonNullable<Bookmark>) => void
  /** Drops the trial point and re-reads the pages without it. */
  leaveTrial: () => void
  /**
   * What the last save changed. It ends when the reader leaves the page the
   * save was made on, and does not come back with that page.
   */
  notice: BookmarkNotice | null
  /** True while the pages are being re-read for a bookmark that just moved. */
  pending: boolean
  /** Saves a bookmark, or forgets it with `null`. Ends any trial. */
  setBookmark: (next: Bookmark) => void
  /** True when `bookmark` is a trial point rather than a saved one. */
  trial: boolean
}

export const BookmarkContext = createContext<BookmarkContextValue | null>(null)

/**
 * The unit a record page drawn with no bookmark counts in, when it is not
 * the episodes a reader with none counts in elsewhere: chapters, on the page
 * of a record only the manga or the books tell (`PageUnit`, #1431). The page
 * provides it from its payload, so the server renders it; `useThreshold`
 * and the bookmark form read it.
 */
export const PageUnitContext = createContext<'chapter' | undefined>(undefined)

/**
 * The reader's bookmark and the setter that moves it. Throws outside the
 * provider rather than defaulting to "nothing read yet", because a silent
 * default would uncover the whole archive.
 */
export function useBookmark(): BookmarkContextValue {
  const value = use(BookmarkContext)

  if (value === null) {
    throw new Error('useBookmark must be used inside a BookmarkProvider')
  }

  return value
}

/**
 * The series the route selected. Throws on a shared site page rather than
 * falling back to One Piece, because a conversion read with another series'
 * table would name the wrong episode.
 */
export function useBookmarkSeries(): BookmarkSeries {
  const { series } = useBookmark()
  if (series === null) {
    throw new Error('A bookmark conversion needs a selected series')
  }
  return series
}

/** The selected series and language for content links. */
export function useSeriesParams(): { locale: Locale; series: string } {
  const { slug } = useBookmarkSeries()
  const { locale } = useLocale()
  return { locale, series: slug }
}

/** A record's threshold in the reader's unit, by sentence. */
export type Threshold<S extends SeriesSlug = never> = (
  sentence: ThresholdSentence<S>,
  gated: Gated,
) => string

/**
 * Names a record's threshold in the unit the reader counts in, so a card
 * says "Chapter 218" to a manga reader and "Episode 130" to everyone else.
 * With a slug, the sentences of that series' own features as well (One
 * Piece's fruits and ships, Hunter x Hunter's abilities), and `undefined` on
 * another series' page, so a caller branches on it.
 */
export function useThreshold(): Threshold
export function useThreshold<S extends SeriesSlug>(
  slug: S,
): Threshold<S> | undefined
export function useThreshold(
  slug?: SeriesSlug,
): Threshold | Threshold<SeriesSlug> | undefined {
  const shared = useSeriesT()
  const own = useSeriesT(slug ?? 'one-piece')
  const { bookmark } = useBookmark()
  const series = useBookmarkSeries()
  const unit = use(PageUnitContext)
  const mode = (bookmark === null ? unit : undefined) ?? modeOf(bookmark)

  return useMemo(() => {
    if (slug === undefined) {
      return (sentence: ThresholdSentence, gated: Gated) =>
        describeThreshold({ gated, mode, sentence, t: shared, series })
    }
    return own === undefined ? undefined : (
        (sentence: ThresholdSentence<SeriesSlug>, gated: Gated) =>
          describeThreshold<SeriesSlug>({
            gated,
            mode,
            sentence,
            t: own,
            series,
          })
      )
  }, [mode, own, series, shared, slug])
}
