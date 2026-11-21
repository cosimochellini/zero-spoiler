import type { SeriesArchive } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Series } from '~/lib/progress/series'
import {
  type InputKind,
  type Inputs,
  INPUTS,
  type Located,
} from '~/server/inputs'

import { pageReader, type Reader, readerFor } from './reader.server'

/**
 * What an entry of `ENDPOINTS` (`./payloads.server`) is made of: its input,
 * the bookmark it reads, its projection and whether it is sent as plain JSON.
 * `~/server/api` serves an entry for the bookmark in the request's cookie,
 * the sweep for each bookmark it asks with; neither takes one from a caller.
 */

/**
 * The bookmark a page is drawn for: the request's cookie, through `readerFor`
 * (`cookie`) or `pageReader` (`page`), the cookie and the trial (`trial`,
 * the landing alone), or the demo's `null` whatever the cookie (`demo`).
 */
export type Reads = 'cookie' | 'demo' | 'page' | 'trial'

/** The two kinds of page `pageReader` draws at a point. */
export type DrawnAt = 'list' | 'record'

/** What the sweep needs of an entry, whatever its input and answer. */
export interface Swept {
  /**
   * How `pageReader` draws the page for a reader with no bookmark (#1430): a
   * record page at its key's first appearance, a list at the end of the demo.
   * Absent for a page read by the bookmark alone.
   */
  drawnAt?: DrawnAt
  keys?: (archive: SeriesArchive) => string[]
  /** Sent as plain JSON (`~/lib/plain`) rather than through seroval. */
  plain?: boolean
  /** The page at one key of the sweep, for an archive and a bookmark. */
  sweep: (
    archive: SeriesArchive,
  ) => (bookmark: Bookmark, locale: Locale, key: string) => unknown
}

/** A page drawn from the archive for a reader. */
export interface ArchivePage<
  K extends InputKind,
  R,
  P extends boolean,
> extends Swept {
  input: K
  page: (data: Inputs[K], r: Reader, trial: Bookmark) => R
  plain?: P
  reads: Reads
}

/** A page of the series' own words, which loads no archive. */
export interface WordsPage<R> extends Swept {
  input: 'located'
  page: (data: Located, series: Series) => R
  reads: 'none'
}

/** The reader an entry draws its page for. */
export function readerAt(
  reads: Reads,
  archive: SeriesArchive,
  ask: { bookmark: Bookmark; id?: string; locale: Locale },
): Reader {
  switch (reads) {
    case 'demo': {
      return readerFor(archive, null, ask.locale)
    }
    case 'page': {
      return pageReader(archive, ask.bookmark, ask)
    }
    default: {
      return readerFor(archive, ask.bookmark, ask.locale)
    }
  }
}

/** The input the wrapper would have been sent for one key of the sweep. */
const ASKS: { [K in InputKind]: (base: Located, key: string) => Inputs[K] } = {
  addressed: (base, id) => ({ ...base, id }),
  handled: (base, handle) => ({ ...base, handle }),
  listed: (base, id) => ({ ...base, ids: [id] }),
  located: (base) => base,
}

/** An entry drawn from the archive, for the reader its `reads` picks. */
export function archivePage<K extends InputKind, R, P extends boolean = false>({
  input,
  keys,
  page,
  plain,
  reads,
}: {
  input: K
  keys?: (archive: SeriesArchive) => string[]
  page: (data: Inputs[K], r: Reader, trial: Bookmark) => R
  plain?: P
  reads: Reads
}): ArchivePage<K, R, P> {
  return {
    // A page with an id is drawn at its record; any other, at the demo's end.
    ...(reads === 'page' && {
      drawnAt: input === 'addressed' ? 'record' : 'list',
    }),
    input,
    ...(keys !== undefined && { keys }),
    page,
    ...(plain !== undefined && { plain }),
    reads,
    sweep: (archive) => (bookmark, locale, key) => {
      const data = ASKS[input]({ locale, series: archive.series.slug }, key)
      return page(data, readerAt(reads, archive, { ...data, bookmark }), null)
    },
  }
}

/** An entry of the series' own words, read with no bookmark at all. */
export function wordsPage<R>(
  page: (data: Located, series: Series) => R,
): WordsPage<R> {
  return {
    input: 'located',
    page,
    reads: 'none',
    sweep: (archive) => (_, locale) =>
      page({ locale, series: archive.series.slug }, archive.series),
  }
}

/** The validator of an entry's input, for its wrapper in `~/server/api`. */
export function inputOf<K extends InputKind>({
  input,
}: {
  input: K
}): (input: unknown) => Inputs[K] {
  return INPUTS[input]
}
