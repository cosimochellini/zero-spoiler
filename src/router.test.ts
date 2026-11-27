import {
  afterEach,
  describe,
  expect,
  it,
  type Mock,
  type MockInstance,
  vi,
} from 'vitest'

import { type Locale, LOCALES } from './i18n/locales'
import type * as Translate from './i18n/translate'

const FLAG = 'zs-copy-reloaded:'

// The root's guard asks the server for the series and the request for its
// cookies; neither is there under Vitest, and neither is what is tested.
vi.mock(import('./routes/-series'), async (importOriginal) => ({
  ...(await importOriginal()),
  seriesDescription: vi.fn<() => Promise<null>>().mockResolvedValue(null),
}))
vi.mock(import('./lib/progress/readBookmark'), () => ({
  readBookmark: vi.fn<() => null>().mockReturnValue(null),
  readTrial: vi.fn<() => null>().mockReturnValue(null),
}))

interface FreshResult {
  failedImports: () => number
  hydrate: () => Promise<void>
  loaded: (locale: Locale) => boolean
  root: Guarded
  translate: typeof Translate
}

/**
 * The router and the dictionary registry, from fresh modules: the test setup
 * has already loaded every locale, which would hide a locale the hook forgot
 * to load. With `failing`, every import of the English copy fails, as it
 * does for a chunk a deploy has replaced.
 */
async function fresh(path: string, failing = false): Promise<FreshResult> {
  let failedImports = 0
  vi.resetModules()
  globalThis.history.replaceState(null, '', path)
  const { getRouter } = await import('./router')
  const translate = await import('./i18n/translate')
  const { Route: root } = await import('./routes/__root')
  // The series' own copy, as the page it came from keeps it.
  const { keepSeriesCopy } = await import('./routes/-series')
  keepSeriesCopy({ slug: 'one-piece', name: 'One Piece', words: {} }, 'en')
  // After the router: the server half of the route tree imports the English
  // copy too, and only the hook's own import should meet the mock.
  if (failing) {
    vi.doMock(import('./i18n/dictionaries/en'), () => {
      failedImports += 1
      throw new TypeError('Importing a module script failed.')
    })
  }
  return {
    failedImports: () => failedImports,
    hydrate: async () => getRouter().options.hydrate?.({}),
    loaded: (locale) => {
      try {
        return translate.getDictionary(locale)['site.name'] === 'Zero Spoiler'
      } catch {
        return false
      }
    },
    root,
    translate,
  }
}

interface Guarded {
  options: { beforeLoad?: unknown }
}

/** The parts of a client navigation the root's guard reads. */
interface ClientNavigation {
  abortController?: AbortController
  preload?: boolean
}

/** Runs the root's real `beforeLoad` on a client navigation to an address. */
async function enter(
  route: Guarded,
  pathname: string,
  navigation: ClientNavigation = {},
): Promise<unknown> {
  const guard: unknown = route.options.beforeLoad
  if (typeof guard !== 'function') {
    throw new TypeError('The root route needs its guard')
  }
  const result: unknown = await Reflect.apply(guard, undefined, [
    {
      abortController: new AbortController(),
      location: { pathname },
      preload: false,
      ...navigation,
    },
  ])
  return result
}

/** A stand-in for `location`, whose own methods jsdom will not let a spy on. */
function stubLocation(pathname: string): Mock<() => void> {
  const reload = vi.fn<() => void>()
  vi.stubGlobal('location', { reload, pathname, search: '' })
  return reload
}

/** Whether a promise has not settled; it fails the test if it rejected. */
async function stillPending(promise: Promise<unknown>): Promise<boolean> {
  const pending = Symbol('pending')
  return (await Promise.race([promise, Promise.resolve(pending)])) === pending
}

function silenceErrors(): MockInstance<typeof console.error> {
  return vi.spyOn(console, 'error').mockImplementation(() => {
    // Silenced: the test reads it.
  })
}

// Each case imports the whole route tree afresh, which the first time, under
// a full parallel run, can take longer than the default 5 s. No case waits on
// a clock.
describe('getRouter', { timeout: 15_000 }, () => {
  afterEach(() => {
    vi.doUnmock('./i18n/dictionaries/en')
    vi.unstubAllGlobals()
    sessionStorage.clear()
    document.documentElement.lang = ''
    globalThis.history.replaceState(null, '', '/')
  })

  it.each([
    ['/en', 'it', 'en'],
    ['/it/legal', 'en', 'it'],
    ['/one-piece/en/characters', 'it', 'en'],
    ['/hunter-x-hunter/it', 'en', 'it'],
    ['/', 'en', 'it'],
  ] as const)(
    'on %s with <html lang="%s"> loads only the %s copy before it hydrates',
    async (path, lang, wanted) => {
      document.documentElement.lang = lang
      const { hydrate, loaded } = await fresh(path)

      await hydrate()

      expect(LOCALES.filter((locale) => loaded(locale))).toStrictEqual([wanted])
    },
  )

  it('forgets an earlier reload once the copy arrives', async () => {
    sessionStorage.setItem(`${FLAG}/en`, '1')
    const { hydrate } = await fresh('/en')

    await hydrate()

    expect(sessionStorage.getItem(`${FLAG}/en`)).toBeNull()
  })

  it('reloads the page once when the copy does not arrive', async () => {
    const { hydrate, failedImports } = await fresh('/en', true)
    const reload = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(reload).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(failedImports()).toBe(1)
    expect(sessionStorage.getItem(`${FLAG}/en`)).toBe('1')
    expect(error).not.toHaveBeenCalled()
  })

  it('after a reload that did not help, leaves the page unhydrated and says why', async () => {
    sessionStorage.setItem(`${FLAG}/en`, '1')
    const { hydrate } = await fresh('/en', true)
    const reload = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(error).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(reload).not.toHaveBeenCalled()
  })

  it('does not reload where storage is out of reach, so it cannot loop', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('The operation is insecure.', 'SecurityError')
    })
    const { hydrate } = await fresh('/en', true)
    const reload = stubLocation('/en')
    const error = silenceErrors()

    const hydrating = hydrate()
    await vi.waitFor(() => {
      expect(error).toHaveBeenCalledTimes(1)
    })

    await expect(stillPending(hydrating)).resolves.toBe(true)
    expect(reload).not.toHaveBeenCalled()
  })
})

// A navigation has pushed its address before the root's `beforeLoad` runs,
// so the stubbed address bar shows the page being opened. The root loads the
// copy for every address: a page of a locale route, and the not-found page of
// an address no locale route matches (#1374).
describe('the root route on a client navigation', { timeout: 15_000 }, () => {
  afterEach(() => {
    vi.doUnmock('./i18n/dictionaries/en')
    vi.unstubAllGlobals()
    sessionStorage.clear()
  })

  it.each(['/en', '/one-piece/en', '/one-piece/en/nope', '/en/nope'])(
    '%s: a preload never reloads, the navigation itself reloads once',
    async (path) => {
      const { root } = await fresh('/it', true)
      const reload = stubLocation(path)

      await expect(enter(root, path, { preload: true })).rejects.toThrow(Error)
      expect(reload).not.toHaveBeenCalled()
      expect(sessionStorage).toHaveLength(0)

      const entering = enter(root, path)
      await vi.waitFor(() => {
        expect(reload).toHaveBeenCalledTimes(1)
      })

      await expect(stillPending(entering)).resolves.toBe(true)
      expect(sessionStorage.getItem(FLAG + path)).toBe('1')
    },
  )

  it('throws for the root to show its error when the reload did not help', async () => {
    sessionStorage.setItem(`${FLAG}/one-piece/en`, '1')
    const { root } = await fresh('/it', true)
    const reload = stubLocation('/one-piece/en')
    const error = silenceErrors()

    await expect(enter(root, '/one-piece/en')).rejects.toThrow(Error)
    expect(reload).not.toHaveBeenCalled()
    expect(error).toHaveBeenCalledTimes(1)
  })

  it('leaves the page alone when a newer navigation superseded this one', async () => {
    const { root } = await fresh('/it', true)
    // Back to the page the reader came from, before the import failed.
    const reload = stubLocation('/it')
    const error = silenceErrors()
    const abortController = new AbortController()
    abortController.abort()

    await expect(
      enter(root, '/one-piece/en', { abortController }),
    ).rejects.toThrow(Error)
    expect(reload).not.toHaveBeenCalled()
    expect(sessionStorage).toHaveLength(0)
    expect(error).not.toHaveBeenCalled()
  })
})

/** Long enough for a navigation to run as far as it can, inside `act`. */
async function moment(): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, 100)
  })
}

interface MountedResult {
  open: (path: string) => Promise<void>
  page: () => string
}

/**
 * The real root route, mounted over one page per language, from the fresh
 * modules `fresh` leaves: React and the router are imported after it, so the
 * page and the root share one copy of each.
 */
async function mounted(): Promise<MountedResult> {
  const { root } = await fresh('/it', true)
  vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true)
  const { act, createElement } = await import('react')
  const { createRoot } = await import('react-dom/client')
  const { createMemoryHistory, createRoute, createRouter, RouterProvider } =
    await import('@tanstack/react-router')
  const { Route: realRoot } = await import('./routes/__root')

  expect(realRoot).toBe(root)

  const page = createRoute({
    getParentRoute: () => realRoot,
    path: '$locale',
    component: () => createElement('main', null, 'A page of the site'),
  })
  const router = createRouter({
    routeTree: realRoot.addChildren([page]),
    history: createMemoryHistory({ initialEntries: ['/it'] }),
  })
  await router.load()
  // eslint-disable-next-line testing-library/no-unnecessary-act -- the rule takes React's own `root.render` for Testing Library's, which cannot render into `document` and would bring a second copy of React.
  await act(async () => {
    createRoot(document).render(createElement(RouterProvider, { router }))
    await Promise.resolve()
  })
  return {
    open: async (path) => {
      await act(async () => {
        void router.navigate({ to: path })
        await new Promise((resolve) => {
          setTimeout(resolve, 50)
        })
      })
    },
    page: () => document.body.textContent,
  }
}

describe('the real root route, mounted', { timeout: 30_000 }, () => {
  afterEach(() => {
    vi.doUnmock('./i18n/dictionaries/en')
    vi.unstubAllGlobals()
    sessionStorage.clear()
  })

  it('reloads when the copy of the page being opened is gone, and keeps the page meanwhile', async () => {
    const { open, page } = await mounted()
    const reload = stubLocation('/en')

    await open('/en')

    expect(reload).toHaveBeenCalledTimes(1)
    expect(page()).toContain('A page of the site')
    expect(page()).not.toContain('Show Error')
  })

  it('draws its own error page, without the copy, when the reload did not help', async () => {
    sessionStorage.setItem(`${FLAG}/en`, '1')
    const { open, page } = await mounted()
    const reload = stubLocation('/en')
    const error = silenceErrors()

    await open('/en')

    expect(reload).not.toHaveBeenCalled()
    expect(document.querySelectorAll('h1')).toHaveLength(1)
    expect(document.querySelector('h1')).toHaveTextContent(
      'Something went wrong',
    )
    expect(document.querySelector('main a')).toHaveAttribute('href', '/en')
    // Set by the page itself: `head` gives a route in error no title.
    expect(document.title).toBe('Something went wrong | Zero Spoiler')
    expect(page()).toContain('This page could not be loaded.')
    // Not the router's white default, and never the error's own message.
    expect(page()).not.toContain('Show Error')
    expect(page()).not.toContain('Importing a module script failed')
    expect(page()).not.toContain('copy is not loaded')
    // The failed import, as the reload path logs it for whoever debugs.
    expect(error).toHaveBeenCalledWith(expect.any(Error))
  })

  // The router moves its location when a navigation starts, before the
  // root's guard has loaded the copy of the new address. A page above every
  // locale route reads its language from the root's context, which lands
  // with that copy: read from the location, the page on screen asked for a
  // copy not loaded yet, and the root's error page showed until the
  // navigation ended (#1386).
  it('keeps the not-found page and `<html lang>` as they are until the copy of the page being opened has arrived', async () => {
    const { loaded } = await fresh('/it')
    const copy = { arrived: false }
    const arrived = (): boolean => copy.arrived
    vi.doMock(import('./i18n/dictionaries/en'), async (importOriginal) => {
      await vi.waitUntil(arrived, { timeout: 20_000, interval: 5 })
      return importOriginal()
    })
    vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true)
    const { act, createElement } = await import('react')
    const { createRoot } = await import('react-dom/client')
    const { createMemoryHistory, createRouter, RouterProvider } =
      await import('@tanstack/react-router')
    const { NotFoundPage } = await import('./routes/-fallback')
    const { Route: realRoot } = await import('./routes/__root')
    const english = '/nowhere/en/x'
    const router = createRouter({
      routeTree: realRoot,
      history: createMemoryHistory({ initialEntries: ['/nowhere/it/x'] }),
      defaultNotFoundComponent: NotFoundPage,
    })
    await router.load()
    // eslint-disable-next-line testing-library/no-unnecessary-act -- as in `mounted`: React's own `root.render`, into `document`.
    await act(async () => {
      createRoot(document).render(createElement(RouterProvider, { router }))
      await Promise.resolve()
    })
    const error = silenceErrors()

    expect(document.querySelector('h1')).toHaveTextContent('Pagina non trovata')
    expect(document.documentElement).toHaveAttribute('lang', 'it')

    await act(async () => {
      router.history.push(english)
      await moment()
    })

    // The address has moved, the copy has not arrived: the page stays.
    expect(router.state.location.pathname).toBe(english)
    expect(loaded('en')).toBe(false)
    expect(document.querySelector('h1')).toHaveTextContent('Pagina non trovata')
    expect(document.documentElement).toHaveAttribute('lang', 'it')

    await act(async () => {
      copy.arrived = true
      await moment()
    })

    expect(document.querySelector('h1')).toHaveTextContent('Page not found')
    expect(document.documentElement).toHaveAttribute('lang', 'en')
    expect(document.title).toBe('Page not found | Zero Spoiler')
    expect(error).not.toHaveBeenCalled()
  })
})
