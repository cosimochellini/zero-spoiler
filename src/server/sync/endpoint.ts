import { descriptionOf } from '~/data/series'
import { parseCookieHeader } from '~/lib/cookies'
import { isSyncId, type SyncRequest } from '~/lib/progress/sync'

import { answer, attempt, bookmarkCookie, STATUS, syncCookie } from './answer'
import {
  cookiesOf,
  recordFromCookies,
  sameRecord,
  storedRecord,
  syncIdOf,
  validRecord,
  withSeries,
} from './record'
import type { SyncStore } from './store'

/** A request body is a few dozen bytes; anything longer is not ours. */
const MAX_BODY_LENGTH = 512

/** What every operation is handed: the request's cookies and the store. */
interface Context {
  jar: Map<string, string>
  store: SyncStore
}

/**
 * The endpoint. Every operation is a same-origin `POST` whose cookies carry
 * the bookmarks and, for `create` and `push`, the id: `SameSite=Lax` keeps
 * them off another site's request. Only `read` and `join` name an id in the
 * body, the one the new device read from the link's fragment. The id never
 * goes in the address, which Workers Logs keep.
 */
export async function syncEndpoint(
  request: Request,
  store: SyncStore,
): Promise<Response> {
  if (request.method !== 'POST') {
    return answer(null, STATUS.notAllowed)
  }
  const site = request.headers.get('Sec-Fetch-Site')
  if (site !== null && site !== 'same-origin') {
    return answer(null, STATUS.forbidden)
  }
  const asked = operationOf(await bodyOf(request))
  if (asked === null) {
    return answer(null, STATUS.badRequest)
  }
  const context = {
    jar: parseCookieHeader(request.headers.get('cookie')),
    store,
  }
  const answered = await attempt(asked.op, async () => operate(asked, context))
  return answered ?? answer(null, STATUS.unavailable)
}

async function operate(
  asked: SyncRequest,
  context: Context,
): Promise<Response> {
  switch (asked.op) {
    case 'create': {
      return create(context)
    }
    case 'join': {
      return join(asked.id, context)
    }
    case 'push': {
      return push(asked.series, context)
    }
    case 'read': {
      const stored = await storedRecord(context.store, asked.id)
      return answer(
        { record: stored },
        stored === null ? STATUS.notFound : STATUS.ok,
      )
    }
  }
}

/**
 * The record this device shares, seeded with its bookmarks when it has none.
 * A device that already holds an id keeps it, so the link it showed before
 * still works; a record of that id gone after a year unwritten is seeded
 * again under the same id.
 */
async function create({ jar, store }: Context): Promise<Response> {
  const id = syncIdOf(jar) ?? crypto.randomUUID()
  if ((await store.get(id)) === null) {
    await store.set(id, recordFromCookies(jar))
  }
  return answer({ id }, STATUS.ok, [syncCookie(id)])
}

/**
 * One series' bookmark, as this device's cookie now holds it, into the
 * record; no cookie removes it, which is how a cleared bookmark syncs.
 */
async function push(slug: string, { jar, store }: Context): Promise<Response> {
  const id = syncIdOf(jar)
  const series = descriptionOf(slug)
  if (id === null || series === null) {
    return answer(null, STATUS.badRequest)
  }
  const stored = (await storedRecord(store, id)) ?? {}
  const fresh = withSeries(stored, slug, jar.get(series.cookie) ?? null)
  if (!sameRecord(fresh, stored)) {
    await store.set(id, fresh)
  }
  return answer(null, STATUS.noContent)
}

/**
 * This device joins a record. Its stored bookmarks win; a series only this
 * device has goes into the record. The answer sets every bookmark and the
 * id, so the next page load is already synced.
 */
async function join(id: string, { jar, store }: Context): Promise<Response> {
  const stored = await storedRecord(store, id)
  if (stored === null) {
    return answer({ record: null }, STATUS.notFound)
  }
  const joined = validRecord({ ...recordFromCookies(jar), ...stored })
  if (!sameRecord(joined, stored)) {
    await store.set(id, joined)
  }
  return answer({ record: joined }, STATUS.ok, [
    ...cookiesOf(joined).map(({ name, value }) => bookmarkCookie(name, value)),
    syncCookie(id),
  ])
}

/** The request's JSON body, or `null` when it is too long or not JSON. */
async function bodyOf(request: Request): Promise<unknown> {
  const text = await request.text()
  if (text.length > MAX_BODY_LENGTH) {
    return null
  }
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

/** The body, if it is one of the four operations. */
function operationOf(body: unknown): null | SyncRequest {
  if (typeof body !== 'object' || body === null) {
    return null
  }
  const op: unknown = Reflect.get(body, 'op')
  if (op === 'create') {
    return { op }
  }
  if (op === 'push') {
    const series: unknown = Reflect.get(body, 'series')
    return typeof series === 'string' ? { op, series } : null
  }
  return op === 'read' || op === 'join' ?
      withId(op, Reflect.get(body, 'id'))
    : null
}

function withId(op: 'join' | 'read', id: unknown): null | SyncRequest {
  return isSyncId(id) ? { id, op } : null
}
