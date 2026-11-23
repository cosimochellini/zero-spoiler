import {
  COOKIE_MAX_AGE_SECONDS,
  parseCookieHeader,
  serializeCookie,
} from '~/lib/cookies'
import { SYNC_ENDPOINT } from '~/lib/endpoints'
import {
  isSyncId,
  SYNC_COOKIE,
  type SyncRecord,
  type SyncRequest,
} from '~/lib/progress/sync'
import { openDescriptions } from '~/server/archive/hub.server'

import {
  cookiesOf,
  recordFromCookies,
  sameRecord,
  validRecord,
  withSeries,
} from './record'
import type { SyncStore } from './store'

/** Start's handler, or whatever answers a request sync leaves alone. */
type Next = (request: Request) => Promise<Response>

/** A request body is a few dozen bytes; anything longer is not ours. */
const MAX_BODY_LENGTH = 512

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
  if (new URL(request.url).pathname === SYNC_ENDPOINT) {
    return store === null ? answer(null, 503) : syncEndpoint(request, store)
  }
  const id = syncIdOf(parseCookieHeader(request.headers.get('cookie')))
  if (
    store === null
    || id === null
    || request.headers.get('Sec-Fetch-Dest') !== 'document'
  ) {
    return next(request)
  }
  return syncedDocument(request, store, id, next)
}

async function syncedDocument(
  request: Request,
  store: SyncStore,
  id: string,
  next: Next,
): Promise<Response> {
  const stored = await attempt('read', async () => storedRecord(store, id))
  if (stored === undefined) {
    return next(request)
  }

  const jar = parseCookieHeader(request.headers.get('cookie'))
  const cookies = cookiesOf(stored ?? {})
  for (const { name, value } of cookies) {
    jar.set(name, value)
  }
  const headers = new Headers(request.headers)
  headers.set(
    'Cookie',
    [...jar]
      .map(([name, value]) => `${name}=${encodeURIComponent(value)}`)
      .join('; '),
  )
  const response = await next(new Request(request, { headers }))

  // A shared link's redirect sets the cookie it names: that value is newer
  // than the store's, so it goes to the store and its cookie is left alone.
  const written = cookiesSetBy(response)
  const fresh = openDescriptions().reduce(
    (record, series) => {
      const value = written.get(series.cookie)
      return value === undefined ? record : (
          withSeries(record, series.slug, value)
        )
    },
    stored ?? {},
  )
  if (!sameRecord(fresh, stored ?? {})) {
    await attempt('write', async () => store.set(id, fresh))
  }

  const synced = new Response(response.body, response)
  for (const { name, value } of cookies) {
    if (!written.has(name)) {
      synced.headers.append(
        'Set-Cookie',
        serializeCookie(name, value, COOKIE_MAX_AGE_SECONDS),
      )
    }
  }
  synced.headers.append('Set-Cookie', syncCookie(id))
  synced.headers.set('Cache-Control', 'no-store')
  return synced
}

/**
 * The endpoint. Every operation is a same-origin `POST` whose cookies carry
 * the bookmarks, and for `create`, `push` and every page load, the id too:
 * `SameSite=Lax` keeps them off another site's request. Only `read` and
 * `join` name an id in the body, the one the new device read from the link's
 * fragment. The id never goes in the address, which Workers Logs keep.
 */
async function syncEndpoint(
  request: Request,
  store: SyncStore,
): Promise<Response> {
  const site = request.headers.get('Sec-Fetch-Site')
  if (request.method !== 'POST') {
    return answer(null, 405)
  }
  if (site !== null && site !== 'same-origin') {
    return answer(null, 403)
  }
  const asked = await askedOf(request)
  if (asked === null) {
    return answer(null, 400)
  }
  const jar = parseCookieHeader(request.headers.get('cookie'))
  const answered = await attempt(asked.op, async () =>
    operate(asked, jar, store),
  )
  return answered ?? answer(null, 503)
}

async function operate(
  asked: SyncRequest,
  jar: Map<string, string>,
  store: SyncStore,
): Promise<Response> {
  switch (asked.op) {
    case 'create': {
      return create(jar, store)
    }
    case 'join': {
      return join(asked.id, jar, store)
    }
    case 'push': {
      return push(asked.series, jar, store)
    }
    case 'read': {
      const stored = await storedRecord(store, asked.id)
      return answer({ record: stored }, stored === null ? 404 : 200)
    }
  }
}

/**
 * The record this device shares, seeded with its bookmarks when it has none.
 * A device that already holds an id keeps it, so the link it showed before
 * still works; a record of that id gone after a year unwritten is seeded
 * again under the same id.
 */
async function create(
  jar: Map<string, string>,
  store: SyncStore,
): Promise<Response> {
  const id = syncIdOf(jar) ?? crypto.randomUUID()
  if ((await store.get(id)) === null) {
    await store.set(id, recordFromCookies(jar))
  }
  return answer({ id }, 200, [syncCookie(id)])
}

/**
 * One series' bookmark, as this device's cookie now holds it, into the
 * record; no cookie removes it, which is how a cleared bookmark syncs.
 */
async function push(
  slug: string,
  jar: Map<string, string>,
  store: SyncStore,
): Promise<Response> {
  const id = syncIdOf(jar)
  const series = openDescriptions().find((open) => open.slug === slug)
  if (id === null || series === undefined) {
    return answer(null, 400)
  }
  const stored = (await storedRecord(store, id)) ?? {}
  const fresh = withSeries(stored, slug, jar.get(series.cookie) ?? null)
  if (!sameRecord(fresh, stored)) {
    await store.set(id, fresh)
  }
  return answer(null, 204)
}

/**
 * This device joins a record. Its stored bookmarks win; a series only this
 * device has goes into the record. The response sets every bookmark and the
 * id, so the next page load is already synced.
 */
async function join(
  id: string,
  jar: Map<string, string>,
  store: SyncStore,
): Promise<Response> {
  const stored = await storedRecord(store, id)
  if (stored === null) {
    return answer({ record: null }, 404)
  }
  const joined = validRecord({ ...recordFromCookies(jar), ...stored })
  if (!sameRecord(joined, stored)) {
    await store.set(id, joined)
  }
  return answer({ record: joined }, 200, [
    ...cookiesOf(joined).map(({ name, value }) =>
      serializeCookie(name, value, COOKIE_MAX_AGE_SECONDS),
    ),
    syncCookie(id),
  ])
}

/** The stored record with its invalid values dropped, or `null`. */
async function storedRecord(
  store: SyncStore,
  id: string,
): Promise<null | SyncRecord> {
  const record = await store.get(id)
  return record === null ? null : validRecord(record)
}

/** The request body, if it is one of the four operations. */
async function askedOf(request: Request): Promise<null | SyncRequest> {
  const text = await request.text()
  if (text.length > MAX_BODY_LENGTH) {
    return null
  }
  let body: unknown
  try {
    body = JSON.parse(text)
  } catch {
    return null
  }
  if (typeof body !== 'object' || body === null) {
    return null
  }
  const op: unknown = Reflect.get(body, 'op')
  const id: unknown = Reflect.get(body, 'id')
  const series: unknown = Reflect.get(body, 'series')
  if (op === 'create') {
    return { op }
  }
  if (op === 'push' && typeof series === 'string') {
    return { op, series }
  }
  return (op === 'read' || op === 'join') && isSyncId(id) ? { id, op } : null
}

function syncIdOf(jar: Map<string, string>): null | string {
  const id = jar.get(SYNC_COOKIE)
  return isSyncId(id) ? id : null
}

function syncCookie(id: string): string {
  return serializeCookie(SYNC_COOKIE, id, COOKIE_MAX_AGE_SECONDS)
}

/** Each cookie a response sets, by name, with the value it sets. */
function cookiesSetBy(response: Response): Map<string, string> {
  return new Map(
    response.headers
      .getSetCookie()
      .flatMap((cookie) => [...parseCookieHeader(cookie.split(';', 1)[0])]),
  )
}

function answer(
  body: unknown,
  status: number,
  cookies: string[] = [],
): Response {
  const headers = new Headers({ 'Cache-Control': 'no-store' })
  for (const cookie of cookies) {
    headers.append('Set-Cookie', cookie)
  }
  return status === 204 || body === null ?
      new Response(null, { status, headers })
    : Response.json(body, { status, headers })
}

/**
 * Runs one store call and swallows its failure: KV refuses writes past the
 * Free plan's daily cap or a second write to one key within a second. The log
 * line names the operation and never the id.
 */
async function attempt<T>(
  operation: string,
  run: () => Promise<T>,
): Promise<T | undefined> {
  try {
    return await run()
  } catch {
    // eslint-disable-next-line no-console -- The one trace of a failing store in Workers Logs; it carries no id.
    console.warn(`sync: the store failed during ${operation}`)
    return undefined
  }
}
