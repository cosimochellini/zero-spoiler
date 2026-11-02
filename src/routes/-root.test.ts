import { describe, expect, it, vi } from 'vitest'

import { createSecurityHeaders } from '~/security-headers'

import { Route } from './__root'

// The series lookup is a server function; the root guard only needs its answer.
vi.mock(import('~/routes/-series'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    seriesDescription: vi
      .fn<typeof original.seriesDescription>()
      .mockResolvedValue(null),
  }
})

/** One option of the root route, reached through `unknown`: the typed ones want a whole router context. */
function call(name: string, input: object): unknown {
  const option: unknown = Reflect.get(Route.options, name)
  if (typeof option !== 'function') {
    throw new TypeError(`the root route has no ${name}`)
  }
  return Reflect.apply(option, undefined, [input])
}

describe('the root route', () => {
  it('answers 404 for an address under an unknown series', async () => {
    await expect(
      call('beforeLoad', { location: { pathname: '/no-such-series/en' } }),
    ).rejects.toMatchObject({ isNotFound: true })
  })

  it('puts the security headers on the document, nonce included', () => {
    expect(call('headers', { ssr: { nonce: 'abc123' } })).toStrictEqual(
      createSecurityHeaders('abc123'),
    )
  })
})
