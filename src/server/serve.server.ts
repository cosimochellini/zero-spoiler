import { archiveOf, descriptionOf } from '~/data/series'
import { type Plain, plain } from '~/lib/plain'
import { readBookmark, readTrial } from '~/lib/progress/readBookmark'
import type { Series } from '~/lib/progress/series'

import {
  type ArchivePage,
  readerAt,
  type WordsPage,
} from './archive/endpoint.server'
import {
  type InputKind,
  type Inputs,
  type Located,
  UNKNOWN_SERIES,
} from './inputs'

/**
 * Where a server function meets the request: the one place that reads the
 * bookmark and trial cookies, for the entry of `ENDPOINTS` a wrapper in
 * `./api` hands in. It sits apart from `./api` so the Start compiler, which
 * drops each wrapper's handler from the client build, drops it too.
 */

/** The public description of the open series a call names. */
function describedBy(data: Located): Series {
  const series = descriptionOf(data.series)
  if (series === null) {
    throw new Error(UNKNOWN_SERIES)
  }
  return series
}

/** An entry's page, for the bookmark and trial in the request's cookies. */
export async function serve<K extends InputKind, R>(
  entry: ArchivePage<K, R, true>,
  data: Inputs[K],
): Promise<Plain<R>>
export async function serve<K extends InputKind, R>(
  entry: ArchivePage<K, R, false>,
  data: Inputs[K],
): Promise<R>
export async function serve<R>(entry: WordsPage<R>, data: Located): Promise<R>
export async function serve<K extends InputKind, R>(
  entry: ArchivePage<K, R, boolean> | WordsPage<R>,
  data: Inputs[K],
): Promise<Plain<R> | R> {
  if (entry.reads === 'none') {
    return entry.page(data, describedBy(data))
  }

  const archive = await archiveOf(data.series)
  const { series } = archive
  const bookmark = entry.reads === 'demo' ? null : readBookmark(series)
  const trial = entry.reads === 'trial' ? readTrial(series) : null
  const answer = entry.page(
    data,
    readerAt(entry.reads, archive, { ...data, bookmark }),
    trial,
  )

  return entry.plain === true ? plain(answer) : answer
}
