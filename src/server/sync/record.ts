import { OPEN_SERIES } from '~/data/series'
import { parseBookmark, serialiseBookmark } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'
import {
  isSyncId,
  SYNC_COOKIE,
  SYNC_PENDING_COOKIE,
  type SyncRecord,
} from '~/lib/progress/sync'

import type { SyncStore } from './store'

/**
 * A series cleared on one device: an empty value, so the other devices
 * clear it too on their next page load, rather than a missing one, which they
 * would read as never set.
 */
const CLEARED = ''

/** The series a record can hold: the open ones. */
function openSeries(): BookmarkSeries[] {
  return OPEN_SERIES.map(({ description }) => description)
}

/** A series' bookmark value, `null` when it does not parse (fail closed). */
function bookmarkValue(
  raw: string | undefined,
  series: BookmarkSeries,
): null | string {
  const bookmark = parseBookmark(raw, series)
  return bookmark === null ? null : serialiseBookmark(bookmark)
}

/**
 * The record with only the open series' valid bookmarks in it, and the empty
 * mark of a series cleared on some device (`CLEARED`). Run on every record
 * read from the store and on every record about to be written.
 */
function validRecord(record: SyncRecord): SyncRecord {
  const valid: Record<string, string> = {}
  for (const series of openSeries()) {
    const raw =
      Object.hasOwn(record, series.slug) ? record[series.slug] : undefined
    const value = raw === CLEARED ? CLEARED : bookmarkValue(raw, series)
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
      openSeries().flatMap((series) => {
        const value = jar.get(series.cookie)
        return value === undefined || value === CLEARED ?
            []
          : [[series.slug, value]]
      }),
    ),
  )
}

/** One series set, or cleared with `null`, the others left as they were. */
export function withSeries(
  record: SyncRecord,
  slug: string,
  value: null | string,
): SyncRecord {
  return validRecord({ ...record, [slug]: value ?? CLEARED })
}

/**
 * The record a device joins: the stored bookmarks, and this device's own for
 * every series the record has no bookmark for, cleared ones included.
 */
export function joinedRecord(stored: SyncRecord, own: SyncRecord): SyncRecord {
  const filled = Object.entries(own).filter(
    ([slug]) => (stored[slug] ?? CLEARED) === CLEARED,
  )
  return validRecord({ ...stored, ...Object.fromEntries(filled) })
}

/** A record filled from the device, and the series it was filled for. */
export interface PendingRecord {
  pending: string[]
  record: SyncRecord
}

/**
 * The record with this device's bookmark for each series its last push did
 * not deliver (`SYNC_PENDING_COOKIE`), and those series, by cookie name.
 */
export function withPending(
  record: SyncRecord,
  jar: Map<string, string>,
): PendingRecord {
  const listed = new Set((jar.get(SYNC_PENDING_COOKIE) ?? '').split(','))
  const pending = openSeries().filter(({ slug }) => listed.has(slug))
  let local = record
  for (const series of pending) {
    local = withSeries(local, series.slug, jar.get(series.cookie) ?? null)
  }
  return { pending: pending.map(({ slug }) => slug), record: local }
}

/** Whether two records hold the same bookmarks. */
export function sameRecord(a: SyncRecord, b: SyncRecord): boolean {
  const keys = Object.keys(a)
  return (
    keys.length === Object.keys(b).length
    && keys.every((key) => Object.hasOwn(b, key) && a[key] === b[key])
  )
}

/** A cookie, by name, with its value. */
export interface NamedCookie {
  name: string
  value: string
}

/** The cookie each stored series' bookmark lives in, with its value. */
export function cookiesOf(record: SyncRecord): NamedCookie[] {
  return openSeries().flatMap((series) => {
    const value = record[series.slug]
    return value === undefined ? [] : { name: series.cookie, value }
  })
}

/** The stored record with its invalid values dropped, or `null`. */
export async function storedRecord(
  store: SyncStore,
  id: string,
): Promise<null | SyncRecord> {
  const record = await store.get(id)
  return record === null ? null : validRecord(record)
}

/** The sync id a request's cookies hold, or `null`. */
export function syncIdOf(jar: Map<string, string>): null | string {
  const id = jar.get(SYNC_COOKIE)
  return isSyncId(id) ? id : null
}
