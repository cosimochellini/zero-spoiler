import { OPEN_SERIES } from '~/data/series'
import { parseCookieHeader } from '~/lib/cookies'
import { SYNC_ENDPOINT } from '~/lib/endpoints'
import type { SyncRecord } from '~/lib/progress/sync'

import {
  answer,
  attempt,
  bookmarkCookie,
  pendingCleared,
  STATUS,
  syncCookie,
} from './answer'
import { syncEndpoint } from './endpoint'
import {
  cookiesOf,
  sameRecord,
  storedRecord,
  syncIdOf,
  withPending,
  withSeries,
} from './record'
import type { SyncStore } from './store'

const SET_COOKIE = 'Set-Cookie'

/** Start's handler, or whatever answers a request sync leaves alone. */
export type Next = (request: Request) => Promise<Response>

/** A synced device: its id and the store its record lives in. */
interface Synced {
  id: string
  store: SyncStore
}

/**
 * The Worker's sync layer (#1560), around Start's handler.
 *
 * - The sync endpoint is answered here.
 * - A full page load of a synced device reads the stored record first, and
 *   each stored bookmark replaces the request's cookie before Start sees it,
 *   so every loader keeps reading cookies and nothing downstream changes. The
 *   response sets the same cookies in the browser. A bookmark cookie the page
 *   itself sets, a shared link's, is written to the store.
 * - Server functions and assets pass untouched: a bookmark push still in
 *   flight cannot be undone by an older stored value during a client
 *   navigation.
 *
 * A store that fails is skipped: the cookies stay and the page renders as it
 * would without sync.
 */
export async function syncedFetch(
  request: Request,
  store: null | SyncStore,
  next: Next,
): Promise<Response> {
  const { pathname } = new URL(request.url)
  if (pathname === SYNC_ENDPOINT) {
    return store === null ?
        answer(null, STATUS.unavailable)
      : syncEndpoint(request, store)
  }
  const id = syncIdOf(parseCookieHeader(request.headers.get('cookie')))
  if (
    store === null
    || id === null
    || request.headers.get('Sec-Fetch-Dest') !== 'document'
  ) {
    return next(request)
  }
  return syncedDocument(request, { id, store }, next)
}

async function syncedDocument(
  request: Request,
  synced: Synced,
  next: Next,
): Promise<Response> {
  const stored = await attempt('read', async () =>
    storedRecord(synced.store, synced.id),
  )
  if (stored === undefined) {
    return next(request)
  }
  // A change this device could not push wins over the record, once.
  const { pending, record } = withPending(
    stored ?? {},
    parseCookieHeader(request.headers.get('cookie')),
  )
  const settled =
    pending.length > 0
    && (sameRecord(record, stored ?? {}) || (await saved(synced, record)))
  const response = await synchronised(
    await next(withStoredCookies(request, record)),
    record,
    synced,
  )
  if (settled) {
    response.headers.append(SET_COOKIE, pendingCleared())
  }
  return response
}

/** Writes the record, and says whether the store took it. */
async function saved(
  { id, store }: Synced,
  record: SyncRecord,
): Promise<boolean> {
  const done = await attempt('write', async () => {
    await store.set(id, record)
    return true
  })
  return done === true
}

/**
 * The request with each stored bookmark in place of its cookie, and no
 * cookie for a series cleared on another device.
 */
function withStoredCookies(request: Request, record: SyncRecord): Request {
  const jar = parseCookieHeader(request.headers.get('cookie'))
  for (const { name, value } of cookiesOf(record)) {
    if (value === '') {
      jar.delete(name)
    } else {
      jar.set(name, value)
    }
  }
  const headers = new Headers(request.headers)
  headers.set(
    'Cookie',
    [...jar]
      .map(([name, value]) => `${name}=${encodeURIComponent(value)}`)
      .join('; '),
  )
  return new Request(request, { headers })
}

/**
 * The response, setting every stored bookmark and the id in the browser.
 * A bookmark cookie the response sets already, a shared link's, is newer
 * than the store's: it goes to the store, and its cookie is left alone.
 */
async function synchronised(
  response: Response,
  record: SyncRecord,
  { id, store }: Synced,
): Promise<Response> {
  const written = cookiesSetBy(response)
  let fresh = record
  for (const { description: series } of OPEN_SERIES) {
    const value = written.get(series.cookie)
    if (value !== undefined) {
      fresh = withSeries(fresh, series.slug, value)
    }
  }
  if (!sameRecord(fresh, record)) {
    await attempt('write', async () => store.set(id, fresh))
  }

  const synced = new Response(response.body, response)
  for (const { name, value } of cookiesOf(record)) {
    if (!written.has(name)) {
      synced.headers.append(SET_COOKIE, bookmarkCookie(name, value))
    }
  }
  synced.headers.append(SET_COOKIE, syncCookie(id))
  synced.headers.set('Cache-Control', 'no-store')
  return synced
}

/** Each cookie a response sets, by name, with the value it sets. */
function cookiesSetBy(response: Response): Map<string, string> {
  return new Map(
    response.headers
      .getSetCookie()
      .flatMap((cookie) => [...parseCookieHeader(cookie.split(';', 1)[0])]),
  )
}
