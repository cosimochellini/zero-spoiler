// @vitest-environment node
import { describe, expect, it, vi } from 'vitest'

import entry from './server'

// Start's own handler, recorded: the Worker only has to pass the request on
// and choose which preload hints become the `Link` header.
const start = vi.hoisted(() => ({
  handler: vi.fn<(request: Request, options: unknown) => Response>(),
}))

vi.mock(import('@tanstack/react-start/server'), async (importOriginal) => {
  const original = await importOriginal()
  return { ...original, createStartHandler: () => start.handler }
})

/** The filter the entry gave the handler, reached through `unknown`. */
function hintFilter(options: unknown): (input: { hint: object }) => unknown {
  const link: unknown = Reflect.get(new Object(options), 'responseLinkHeader')
  const filter: unknown = Reflect.get(new Object(link), 'filter')
  if (typeof filter !== 'function') {
    throw new TypeError('the entry sets no hint filter')
  }
  return (input) => {
    const kept: unknown = Reflect.apply(filter, undefined, [input])
    return kept
  }
}

describe('the Worker entry', () => {
  it('keeps only stylesheet and font hints in the Link header', async () => {
    const request = new Request('https://zero.test/en')
    start.handler.mockReturnValue(new Response('page'))

    await entry.fetch(request)

    const [passed, options] = start.handler.mock.calls[0] ?? []
    const filter = hintFilter(options)
    const kept = ['style', 'font', 'script', 'image'].filter(
      (as) => filter({ hint: { as, href: '/x', rel: 'preload' } }) === true,
    )

    expect(passed).toBe(request)
    expect(kept).toStrictEqual(['style', 'font'])
  })
})
