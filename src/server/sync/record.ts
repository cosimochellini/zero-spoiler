import { parseBookmark, serialiseBookmark } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'
import type { SyncRecord } from '~/lib/progress/sync'
import { openDescriptions } from '~/server/archive/hub.server'

/** A series' bookmark value, `null` when it does not parse (fail closed). */
function bookmarkValue(
  raw: string | undefined,
  series: BookmarkSeries,
): null | string {
  const bookmark = parseBookmark(raw, series)
  return bookmark === null ? null : serialiseBookmark(bookmark)
}

/**
 * The record with only the open series' valid bookmarks in it. Run on every
 * record read from the store and on every record about to be written.
 */
export function validRecord(record: SyncRecord): SyncRecord {
  const valid: Record<string, string> = {}
  for (const series of openDescriptions()) {
    const value =
      Object.hasOwn(record, series.slug) ?
        bookmarkValue(record[series.slug], series)
      : null
    if (value !== null) {
      valid[series.slug] = value
    }
  }
  return valid
}

/** The bookmarks a request's cookies hold, saved ones only, never a trial. */
export function recordFromCookies(jar: Map<string, string>): SyncRecord {
  return validRecord(
    Object.fromEntries(
      openDescriptions().flatMap((series) => {
        const value = jar.get(series.cookie)
        return value === undefined ? [] : [[series.slug, value]]
      }),
    ),
  )
}

/** One series set, or removed with `null`, the others left as they were. */
export function withSeries(
  record: SyncRecord,
  slug: string,
  value: null | string,
): SyncRecord {
  const { [slug]: _dropped, ...rest } = record
  return validRecord(value === null ? rest : { ...rest, [slug]: value })
}

/** Whether two records hold the same bookmarks. */
export function sameRecord(a: SyncRecord, b: SyncRecord): boolean {
  const keys = Object.keys(a)
  return (
    keys.length === Object.keys(b).length
    && keys.every((key) => Object.hasOwn(b, key) && a[key] === b[key])
  )
}

/** The cookie each stored series' bookmark lives in, with its value. */
export function cookiesOf(
  record: SyncRecord,
): { name: string; slug: string; value: string }[] {
  return openDescriptions().flatMap((series) => {
    const value = record[series.slug]
    return value === undefined ? [] : [
        { name: series.cookie, slug: series.slug, value },
      ]
  })
}
