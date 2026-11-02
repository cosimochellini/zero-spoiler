// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'

import { SERVER_FN_BASE } from '~/lib/endpoints'

import { startInstance } from './start'

interface Context {
  next: () => Promise<{ response: Response }>
  request: Request
}

/** The `.server` callback of each request middleware, outermost first. */
function handlers(): ((context: Context) => Promise<Response>)[] {
  const options = startInstance.getOptions()
  if (options instanceof Promise) {
    throw new TypeError('the start options are synchronous')
  }
  return (options.requestMiddleware ?? []).map((middleware) => {
    const server: unknown = Reflect.get(middleware.options, 'server')
    if (typeof server !== 'function') {
      throw new TypeError('a request middleware has no server step')
    }
    return async (context) => {
      const result: unknown = await Reflect.apply(server, undefined, [context])
      // The CSRF check hands `next`'s own result back when it lets a request by.
      const response: unknown = Reflect.get(new Object(result), 'response')
      if (result instanceof Response) {
        return result
      }
      if (!(response instanceof Response)) {
        throw new TypeError('a request middleware answers with a response')
      }
      return response
    }
  })
}

/** Runs one request through a middleware; `next` answers 200 "page". */
async function run(
  index: number,
  request: Request,
  next: Context['next'] = vi
    .fn<Context['next']>()
    .mockResolvedValue({ response: new Response('page') }),
): Promise<Response> {
  const handler = handlers()[index]
  if (handler === undefined) {
    throw new RangeError(`no request middleware at ${String(index)}`)
  }
  return handler({ request, next })
}

describe('the request middlewares', () => {
  it('times the first request as cold and the next ones as warm', async () => {
    const first = await run(0, new Request('https://zero.test/en'))
    const second = await run(0, new Request('https://zero.test/en'))

    expect(first.headers.get('Server-Timing')).toMatch(
      /^app;dur=[\d.]+, cold$/u,
    )
    expect(second.headers.get('Server-Timing')).toMatch(/^app;dur=[\d.]+$/u)
    await expect(second.text()).resolves.toBe('page')
  })

  it('redirects the bare root to the hub before routing', async () => {
    const response = await run(
      1,
      new Request('https://zero.test/', {
        headers: { 'accept-language': 'it' },
      }),
    )

    expect(response.status).toBe(302)
    expect(response.headers.get('Location')).toBe('/it')
  })

  it('lets any other address through to the page', async () => {
    const response = await run(1, new Request('https://zero.test/en'))

    expect(response.status).toBe(200)
    await expect(response.text()).resolves.toBe('page')
  })

  it('rejects a cross-site server-function call but not a navigation', async () => {
    const crossSite = { 'Sec-Fetch-Site': 'cross-site' }
    const next = vi
      .fn<Context['next']>()
      .mockResolvedValue({ response: new Response('page') })
    const asked = (url: string): Request =>
      new Request(url, { headers: crossSite })

    const blocked = await run(
      2,
      asked(`https://zero.test${SERVER_FN_BASE}/x`),
      next,
    )

    expect(blocked.status).toBe(403)
    expect(next).not.toHaveBeenCalled()

    await run(2, asked('https://zero.test/en'), next)

    expect(next).toHaveBeenCalledTimes(1)
  })
})
