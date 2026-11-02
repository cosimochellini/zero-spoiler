// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'

import { SITE_ORIGIN } from '~/lib/seo/site'

import { Route as RobotsRoute } from './robots[.]txt'
import { Route as SitemapRoute } from './sitemap[.]xml'

vi.mock(import('~/server/seo/sitemap.server'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    sitemapXml: vi
      .fn<typeof original.sitemapXml>()
      .mockResolvedValue('<urlset />'),
  }
})

/** The route's GET handler, reached through `unknown`: the typed option wants a whole request context. */
async function get(server: unknown): Promise<Response> {
  const handlers: unknown = Reflect.get(new Object(server), 'handlers')
  const handler: unknown = Reflect.get(new Object(handlers), 'GET')
  if (typeof handler !== 'function') {
    throw new TypeError('the route has no GET handler')
  }
  const response: unknown = await Reflect.apply(handler, undefined, [{}])
  if (!(response instanceof Response)) {
    throw new TypeError('the handler answers with a response')
  }
  return response
}

describe('the crawler files', () => {
  it('serves robots.txt as plain text naming the sitemap', async () => {
    const response = await get(RobotsRoute.options.server)

    expect(response.headers.get('Content-Type')).toBe(
      'text/plain; charset=utf-8',
    )
    await expect(response.text()).resolves.toContain(
      `Sitemap: ${SITE_ORIGIN}/sitemap.xml`,
    )
  })

  it('serves the sitemap as cacheable XML', async () => {
    const response = await get(SitemapRoute.options.server)

    expect(response.headers.get('Content-Type')).toBe(
      'application/xml; charset=utf-8',
    )
    expect(response.headers.get('Cache-Control')).toBe('public, max-age=3600')
    await expect(response.text()).resolves.toBe('<urlset />')
  })
})
