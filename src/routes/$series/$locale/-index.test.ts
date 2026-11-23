import { describe, expect, it, vi } from 'vitest'

import { readTrial } from '~/lib/progress/readBookmark'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'

import { Route } from '.'

// The cookie readers ask the request for its headers, and there is none here.
vi.mock(import('~/lib/progress/readBookmark'), () => ({
  readBookmark: vi.fn<() => null>().mockReturnValue(null),
  readTrial: vi.fn<typeof readTrial>().mockReturnValue(null),
}))

/** The landing's reload rule, for a match entered or kept. */
function reloads(cause: 'enter' | 'preload' | 'stay'): unknown {
  const option: unknown = Route.options.shouldReload
  if (typeof option !== 'function') {
    throw new TypeError('the landing has no reload rule')
  }
  return Reflect.apply(option, undefined, [
    { cause, context: { series: ONE_PIECE_BOOKMARK } },
  ])
}

describe('the landing route', () => {
  // The page kept from before a trial was read with no trial point, and the
  // dial drawn from it after Back stood at 1 (#1399).
  it('reads the landing again when it is entered on a trial', () => {
    vi.mocked(readTrial).mockReturnValue({ mode: 'episode', episode: 37 })

    expect(reloads('enter')).toBe(true)
    // Left to the router's own rules: a re-read of the page on screen, and
    // a preload, which reads the trial cookie already set.
    expect(reloads('stay')).toBeUndefined()
    expect(reloads('preload')).toBeUndefined()
  })

  it('keeps the page the router kept when there is no trial', () => {
    vi.mocked(readTrial).mockReturnValue(null)

    expect(reloads('enter')).toBeUndefined()
  })
})
