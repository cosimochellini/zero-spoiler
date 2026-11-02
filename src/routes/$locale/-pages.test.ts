import { describe, expect, it, vi } from 'vitest'

import { Route as HubRoute } from '.'
import { Route as LegalRoute } from './legal'
import { Route as PrivacyRoute } from './privacy'

vi.mock(import('~/server/series'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    loadHub: vi.fn<typeof original.loadHub>(),
    loadSeriesDescriptions: vi.fn<typeof original.loadSeriesDescriptions>(),
  }
})

/** One option of a route, reached through `unknown`: the typed ones want a whole router context. */
function option(route: { options: object }, name: string): unknown {
  return Reflect.get(route.options, name)
}

function call(
  route: { options: object },
  name: string,
  input: object,
): unknown {
  const handler = option(route, name)
  if (typeof handler !== 'function') {
    throw new TypeError(`the route has no ${name}`)
  }
  return Reflect.apply(handler, undefined, [input])
}

/** What a route's guard throws: the redirect, as the router would catch it. */
function thrownBy(route: { options: object }, input: object): unknown {
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
