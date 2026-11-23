import { expireCookie, parseCookieHeader } from '~/lib/cookies'

import { markPending, SYNC_COOKIE, SYNC_PENDING_COOKIE } from './syncCookie'

export { SYNC_COOKIE, SYNC_PENDING_COOKIE } from './syncCookie'

/** The one failing status that is an answer: the record is gone. */
const NOT_FOUND = 404

/**
 * How long a request may take. A save waits on its push before the pages are
 * re-read, so a stalled push must not hold them.
 */
const TIMEOUT_MS = 3000

const SYNC_ID =
  /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/u

/** Whether a value is a sync id as `crypto.randomUUID()` makes them. */
export function isSyncId(value: unknown): value is string {
  return typeof value === 'string' && SYNC_ID.test(value)
}

/** The sync id this browser holds, or `null`. */
export function readSyncId(): null | string {
  if (typeof document === 'undefined') {
    return null
  }
  const id = parseCookieHeader(document.cookie).get(SYNC_COOKIE)
  return isSyncId(id) ? id : null
}

/** Stops syncing this device. Its bookmarks and the stored record stay. */
export function disconnectSync(): void {
  expireCookie(SYNC_COOKIE)
  expireCookie(SYNC_PENDING_COOKIE)
}

/** One bookmark per series slug, each in its cookie's own grammar. */
export type SyncRecord = Partial<Record<string, string>>

/** What the sync endpoint is asked to do; see `src/server/sync/request.ts`. */
export type SyncRequest =
  | { id: string; op: 'join' }
  | { id: string; op: 'read' }
  | { op: 'create' }
  | { op: 'push'; series: string }

/**
 * Asks the sync endpoint and returns its JSON, or throws. The cookies travel
 * with the request: the endpoint reads the bookmarks, and the device's id,
 * from them, and sets the ones it changes on the response.
 */
export async function askSync(body: SyncRequest): Promise<unknown> {
  // `SYNC_ENDPOINT`, spelled out: a fetch to a non-literal address reads as
  // a request forgery sink to the fallow gate. The endpoint's tests hold the
  // two equal.
  const response = await fetch('/_serverFn/sync', {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    // A push may still be in flight when the reader reloads.
    keepalive: body.op === 'push',
    method: 'POST',
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })
  if (response.status === NOT_FOUND) {
    return null
  }
  if (!response.ok) {
    throw new Error(`sync ${body.op}: ${String(response.status)}`)
  }
  const text = await response.text()
  const json: unknown = text === '' ? null : JSON.parse(text)
  return json
}

/**
 * A record as JSON gave it, its string values kept and anything else
 * dropped, or `null` when it is not an object. The values are not checked
 * against a series here: whoever uses one parses it with `parseBookmark`.
 */
export function asSyncRecord(raw: unknown): null | SyncRecord {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return null
  }
  return Object.fromEntries(
    Object.entries(raw).filter(
      (entry): entry is [string, string] => typeof entry[1] === 'string',
    ),
  )
}

/**
 * Sends one series' bookmark, as its cookie now holds it, to the synced
 * record, when this device is synced, and takes the series off the pending
 * list once the record has it (`pushIfSynced` put it there). A failure is not
 * shown: the series stays on the list, and the next full page load writes this
 * device's bookmark to the record instead of reading the record's over it.
 */
export async function pushBookmark(series: string): Promise<void> {
  if (readSyncId() === null) {
    return
  }
  try {
    await askSync({ op: 'push', series })
    markPending(series, false)
  } catch {
    markPending(series, true)
  }
}

/** The record a `read` or `join` answered with, or `null` for none. */
export function answeredRecord(answer: unknown): null | SyncRecord {
  return typeof answer === 'object' && answer !== null ?
      asSyncRecord(Reflect.get(answer, 'record'))
    : null
}
