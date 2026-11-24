import { describe, expect, it, vi } from 'vitest'

import { LANDING_CHUNKS } from '~/lib/chunks'
import { readTrial } from '~/lib/progress/readBookmark'
import { ONE_PIECE_BOOKMARK, ONE_PIECE_SERIES } from '~/lib/progress/series'
import { loadHome } from '~/server/api'
import { copyOf } from '~/server/copy.server'
import { opLandingPage } from '~/test/archive'
import { ep } from '~/test/providers'

import { Route } from '.'
import { preloadLanding } from './-landing.branches'

// The build names the chunks; here each is named after itself.
vi.mock(import('~/lib/chunks'), async (importOriginal) => ({
  ...(await importOriginal()),
  preloadChunk: (name: string) => [
    { rel: 'modulepreload' as const, href: name },
  ],
}))

vi.mock(import('~/server/api'), async (importOriginal) => {
  const original = await importOriginal()
  return { ...original, loadHome: vi.fn<typeof original.loadHome>() }
})

vi.mock(import('./-landing.branches'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    preloadLanding: vi.fn<typeof original.preloadLanding>(),
  }
})

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
    expect(readTrial).toHaveBeenLastCalledWith(ONE_PIECE_BOOKMARK)
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

type Head = (input: {
  loaderData: unknown
  match: { context: { copy: unknown }; pathname: string }
  params: { locale: string }
}) => { links: { href: string; rel: string }[] }

function isHead(value: unknown): value is Head {
  return typeof value === 'function'
}

/** The chunks the landing's head preloads, for what the loader sent. */
function preloadedFor(loaderData: unknown): unknown {
  const head: unknown = Route.options.head
  if (!isHead(head)) {
    throw new TypeError('the landing has no head')
  }
  const { links } = head({
    loaderData,
    match: {
      context: { copy: copyOf(ONE_PIECE_SERIES, 'en') },
      pathname: '/one-piece/en',
    },
    params: { locale: 'en' },
  })
  return links.filter(({ href }) => href.endsWith('Landing'))
}

describe('the landing head', () => {
  // One branch is sent, so one is fetched beside the entry (#1573).
  it('preloads the branch the loader chose, and only that one', () => {
    expect(preloadedFor({ onboarding: {} })).toStrictEqual([
      { rel: 'modulepreload', href: LANDING_CHUNKS.onboarding },
    ])
    expect(preloadedFor({ home: {} })).toStrictEqual([
      { rel: 'modulepreload', href: LANDING_CHUNKS.home },
    ])
    expect(preloadedFor(undefined)).toStrictEqual([])
  })
})

type Loader = (args: {
  context: { locale: string; series: { slug: string } }
}) => Promise<unknown>

function isLoader(value: unknown): value is Loader {
  return typeof value === 'function'
}

function loaderOf(): Loader {
  const loader: unknown = Route.options.loader
  if (!isLoader(loader)) {
    throw new TypeError('the landing has no loader')
  }
  return loader
}

describe('the landing loader', () => {
  // The server renders the branch whole only if the loader has fetched it
  // first: a render that suspended would send an empty fallback (#1573).
  it('answers only once the branch it chose has been fetched', async () => {
    const landing = opLandingPage(ep(650), null, 'en')
    vi.mocked(loadHome).mockResolvedValue(landing)
    let fetched = false
    vi.mocked(preloadLanding).mockImplementation(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 0)
      })
      fetched = true
    })

    await expect(
      loaderOf()({ context: { locale: 'en', series: { slug: 'one-piece' } } }),
    ).resolves.toBe(landing)

    expect(preloadLanding).toHaveBeenCalledExactlyOnceWith(landing)
    expect(fetched).toBe(true)
  })
})
