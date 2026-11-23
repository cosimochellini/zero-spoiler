// @vitest-environment node
import { describe, expect, it, type MockInstance, vi } from 'vitest'

import { SYNC_ENDPOINT } from '~/lib/endpoints'

import { syncedFetch } from './request'
import { memorySyncStore, type SyncStore } from './store'

const ID = '0f8fad5b-d9cb-469f-a165-70867728950e'
const OTHER = '7c9e6679-7425-40de-944b-e07fc1f90ae7'
const ORIGIN = 'https://zero.test'

/** A request as a browser sends it, with these cookies. */
function page(
  cookie: string,
  destination = 'document',
  path = '/one-piece/en',
): Request {
  return new Request(`${ORIGIN}${path}`, {
    headers: { 'Cookie': cookie, 'Sec-Fetch-Dest': destination },
  })
}

function ask(body: unknown, cookie = '', site = 'same-origin'): Request {
  return new Request(`${ORIGIN}${SYNC_ENDPOINT}`, {
    body: JSON.stringify(body),
    headers: { 'Cookie': cookie, 'Sec-Fetch-Site': site },
    method: 'POST',
  })
}

/** Start, recorded: what it was handed, answering with `response`. */
function start(response = new Response('page')): {
  next: (request: Request) => Promise<Response>
  seen: Request[]
} {
  const seen: Request[] = []
  return {
    next: async (request) => {
      await Promise.resolve()
      seen.push(request)
      return response
    },
    seen,
  }
}

async function seeded(record: Record<string, string>): Promise<SyncStore> {
  const store = memorySyncStore()
  await store.set(ID, record)
  return store
}

/** Silences the store's warning, and records it. */
function quietWarn(): MockInstance<typeof console.warn> {
  return vi.spyOn(console, 'warn').mockImplementation(() => {
    // The warning is asserted, not printed.
  })
}

function failing(): SyncStore {
  return {
    get: async () => {
      await Promise.resolve()
      throw new Error(`KV ${ID} failed`)
    },
    set: async () => {
      await Promise.resolve()
      throw new Error(`KV ${ID} failed`)
    },
  }
}

describe('a full page load of a synced device', () => {
  it('reads the stored bookmark over the cookie and sets it', async () => {
    const store = await seeded({
      'one-piece': '1120',
      'game-of-thrones': 's2e3',
    })
    const { next, seen } = start()

    const response = await syncedFetch(
      page(`zs_sync=${ID}; zs_one-piece=10; opzs_lang=en`),
      store,
      next,
    )

    const cookie = seen[0]?.headers.get('cookie') ?? ''

    expect(cookie).toContain('zs_one-piece=1120')
    expect(cookie).toContain('zs_game-of-thrones=s2e3')
    expect(cookie).toContain('opzs_lang=en')
    expect(response.headers.getSetCookie()).toStrictEqual([
      expect.stringMatching(
        /^zs_one-piece=1120; Path=\/; SameSite=Lax; Max-Age=\d+$/u,
      ),
      expect.stringMatching(/^zs_game-of-thrones=s2e3;/u),
      expect.stringMatching(new RegExp(`^zs_sync=${ID};`, 'u')),
    ])
    expect(response.headers.get('Cache-Control')).toBe('no-store')
    await expect(response.text()).resolves.toBe('page')
  })

  it('ignores a stored value that is not a bookmark', async () => {
    const store = await seeded({ 'one-piece': '99999', 'hunter-x-hunter': 'x' })
    const { next, seen } = start()

    const response = await syncedFetch(
      page(`zs_sync=${ID}; zs_one-piece=10`),
      store,
      next,
    )

    expect(seen[0]?.headers.get('cookie')).toContain('zs_one-piece=10')
    expect(response.headers.getSetCookie()).toStrictEqual([
      expect.stringMatching(/^zs_sync=/u),
    ])
  })

  it('writes a shared link’s bookmark to the store and keeps its cookie', async () => {
    const store = await seeded({
      'one-piece': '600',
      'game-of-thrones': 's2e3',
    })
    const redirect = new Response(null, {
      headers: {
        'Location': '/one-piece/en',
        'Set-Cookie': 'zs_one-piece=700; Path=/; SameSite=Lax; Max-Age=1',
      },
      status: 302,
    })
    const { next } = start(redirect)

    const response = await syncedFetch(
      page(`zs_sync=${ID}`, 'document', '/one-piece/en?ep=700'),
      store,
      next,
    )

    await expect(store.get(ID)).resolves.toStrictEqual({
      'game-of-thrones': 's2e3',
      'one-piece': '700',
    })

    const cookies = response.headers.getSetCookie()

    expect(cookies.filter((c) => c.startsWith('zs_one-piece='))).toStrictEqual([
      'zs_one-piece=700; Path=/; SameSite=Lax; Max-Age=1',
    ])
    expect(response.status).toBe(302)
  })

  it('leaves the cookies alone when the store fails, and logs no id', async () => {
    const warn = quietWarn()
    const request = page(`zs_sync=${ID}; zs_one-piece=10`)
    const { next, seen } = start()

    const response = await syncedFetch(request, failing(), next)

    expect(seen[0]).toBe(request)
    expect(response.headers.getSetCookie()).toStrictEqual([])
    expect(warn).toHaveBeenCalledExactlyOnceWith(
      'sync: the store failed during read',
    )
    expect(JSON.stringify(warn.mock.calls)).not.toContain(ID)
  })

  it.each([
    ['a server function', page(`zs_sync=${ID}`, 'empty', '/_serverFn/abc')],
    ['an image', page(`zs_sync=${ID}`, 'image', '/art/x.svg')],
    ['a device that is not synced', page('zs_one-piece=10')],
    ['a cookie that is not an id', page('zs_sync=nope')],
  ])('passes %s through untouched', async (_name, request) => {
    const store = await seeded({ 'one-piece': '1120' })
    const { next, seen } = start()

    const response = await syncedFetch(request, store, next)

    expect(seen[0]).toBe(request)
    expect(response.headers.getSetCookie()).toStrictEqual([])
  })

  it('passes everything through with no store', async () => {
    const request = page(`zs_sync=${ID}`)
    const { next, seen } = start()

    await syncedFetch(request, null, next)

    expect(seen[0]).toBe(request)
  })
})

describe('the sync endpoint', () => {
  const unused = start().next

  it('creates a record from the device’s bookmarks, never its trial', async () => {
    const store = memorySyncStore()

    const response = await syncedFetch(
      ask({ op: 'create' }, 'zs_one-piece=500; zs_hunter-x-hunter_try=3'),
      store,
      unused,
    )
    const body: unknown = await response.json()
    const id = String(Reflect.get(new Object(body), 'id'))

    await expect(store.get(id)).resolves.toStrictEqual({ 'one-piece': '500' })
    expect(response.headers.getSetCookie()).toStrictEqual([
      `zs_sync=${id}; Path=/; SameSite=Lax; Max-Age=31536000`,
    ])
  })

  it('keeps the id a device already holds, and its record', async () => {
    const store = await seeded({ 'one-piece': '900' })

    const response = await syncedFetch(
      ask({ op: 'create' }, `zs_sync=${ID}; zs_one-piece=500`),
      store,
      unused,
    )

    await expect(response.json()).resolves.toStrictEqual({ id: ID })
    await expect(store.get(ID)).resolves.toStrictEqual({ 'one-piece': '900' })
  })

  it('pushes one series from its cookie, and removes a cleared one', async () => {
    const store = await seeded({ 'one-piece': '600', 'hunter-x-hunter': 'c10' })

    const moved = await syncedFetch(
      ask(
        { op: 'push', series: 'one-piece' },
        `zs_sync=${ID}; zs_one-piece=650; zs_hunter-x-hunter=c99`,
      ),
      store,
      unused,
    )
    await syncedFetch(
      ask({ op: 'push', series: 'hunter-x-hunter' }, `zs_sync=${ID}`),
      store,
      unused,
    )

    expect(moved.status).toBe(204)
    await expect(store.get(ID)).resolves.toStrictEqual({ 'one-piece': '650' })
  })

  it('reads a record, and answers 404 for an unknown one', async () => {
    const store = await seeded({ 'one-piece': '1120' })

    const found = await syncedFetch(ask({ id: ID, op: 'read' }), store, unused)
    const missing = await syncedFetch(
      ask({ id: OTHER, op: 'read' }),
      store,
      unused,
    )

    await expect(found.json()).resolves.toStrictEqual({
      record: { 'one-piece': '1120' },
    })
    expect(missing.status).toBe(404)
  })

  it('joins: the stored bookmarks win and this device’s extra series go in', async () => {
    const store = await seeded({ 'one-piece': '1120' })

    const response = await syncedFetch(
      ask({ id: ID, op: 'join' }, 'zs_one-piece=10; zs_game-of-thrones=s2e3'),
      store,
      unused,
    )

    const joined = { 'game-of-thrones': 's2e3', 'one-piece': '1120' }

    await expect(response.json()).resolves.toStrictEqual({ record: joined })
    await expect(store.get(ID)).resolves.toStrictEqual(joined)
    expect(response.headers.getSetCookie()).toStrictEqual([
      expect.stringMatching(/^zs_one-piece=1120;/u),
      expect.stringMatching(/^zs_game-of-thrones=s2e3;/u),
      expect.stringMatching(new RegExp(`^zs_sync=${ID};`, 'u')),
    ])
  })

  it.each([
    ['another site', ask({ op: 'create' }, '', 'cross-site'), 403],
    ['a GET', new Request(`${ORIGIN}${SYNC_ENDPOINT}`), 405],
    [
      'a body that is not JSON',
      new Request(`${ORIGIN}${SYNC_ENDPOINT}`, { body: '{', method: 'POST' }),
      400,
    ],
    ['an id that is not one', ask({ id: 'x', op: 'read' }), 400],
    ['an unknown operation', ask({ op: 'drop' }), 400],
    [
      'a push from a device that is not synced',
      ask({ op: 'push', series: 'one-piece' }),
      400,
    ],
    [
      'a push for an unknown series',
      ask({ op: 'push', series: 'naruto' }, `zs_sync=${ID}`),
      400,
    ],
    ['a body too long', ask({ op: 'create', pad: 'x'.repeat(600) }), 400],
  ])('refuses %s', async (_name, request, status) => {
    const response = await syncedFetch(request, memorySyncStore(), unused)

    expect(response.status).toBe(status)
  })

  it('answers 503 when the store fails or is missing', async () => {
    quietWarn()

    const failed = await syncedFetch(
      ask({ id: ID, op: 'read' }),
      failing(),
      unused,
    )
    const missing = await syncedFetch(ask({ id: ID, op: 'read' }), null, unused)

    expect([failed.status, missing.status]).toStrictEqual([503, 503])
  })
})
