import { describe, expect, it, vi } from 'vitest'

import { Route as HubRoute } from '.'
import { Route as LegalRoute } from './legal'
import { Route as PrivacyRoute } from './privacy'
import { Route as SyncRoute } from './sync'

vi.mock(import('~/server/series'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    loadHub: vi.fn<typeof original.loadHub>(),
    loadSeriesDescriptions: vi.fn<typeof original.loadSeriesDescriptions>(),
  }
})

/** A route, as far as these tests read it: its options, untyped. */
interface OptionedRoute {
  options: object
}

/** One option of a route, reached through `unknown`: the typed ones want a whole router context. */
function option(route: OptionedRoute, name: string): unknown {
  return Reflect.get(route.options, name)
}

function call(route: OptionedRoute, name: string, input: object): unknown {
  const handler = option(route, name)
  if (typeof handler !== 'function') {
    throw new TypeError(`the route has no ${name}`)
  }
  return Reflect.apply(handler, undefined, [input])
}

/** What a route's guard throws: the redirect, as the router would catch it. */
function thrownBy(route: OptionedRoute, input: object): unknown {
  try {
    call(route, 'beforeLoad', input)
  } catch (error) {
    return error
  }
  return undefined
}

describe('the privacy notice address', () => {
  it('sends shared links to the legal page with a 301', () => {
    expect(thrownBy(PrivacyRoute, { params: { locale: 'it' } })).toMatchObject({
      options: {
        statusCode: 301,
        to: '/$locale/legal',
        hash: 'privacy',
        params: { locale: 'it' },
      },
    })
  })
})

describe.each([
  ['hub', HubRoute],
  ['legal page', LegalRoute],
  ['sync page', SyncRoute],
])('the %s', (_name, route) => {
  // Both read the reader's bookmark, so a shared cache must never keep them.
  it('is never cached', () => {
    expect(call(route, 'headers', {})).toStrictEqual({
      'Cache-Control': 'private, no-store',
    })
  })
})

describe('the legal page head', () => {
  it('says nothing for an unknown locale', () => {
    expect(
      call(LegalRoute, 'head', {
        match: { pathname: '/xx/legal' },
        params: { locale: 'xx' },
      }),
    ).toStrictEqual({})
  })

  it('titles a known locale', () => {
    expect(
      call(LegalRoute, 'head', {
        match: { pathname: '/en/legal' },
        params: { locale: 'en' },
      }),
    ).not.toStrictEqual({})
  })
})

describe('the sync page head', () => {
  it('keeps the page out of search results', () => {
    expect(call(SyncRoute, 'head', { params: { locale: 'it' } })).toStrictEqual(
      {
        meta: [
          { title: 'Sincronizza i segnalibri | Zero Spoiler' },
          { name: 'robots', content: 'noindex' },
        ],
      },
    )
  })

  it('says nothing for an unknown locale', () => {
    expect(call(SyncRoute, 'head', { params: { locale: 'xx' } })).toStrictEqual(
      {},
    )
  })
})
