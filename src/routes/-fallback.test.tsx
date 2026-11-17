import {
  createMemoryHistory,
  createRootRouteWithContext,
  createRoute,
  createRouter,
  notFound,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router'
import { render, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

import { FirstVisitIntro } from '~/components/IntroDialog'
import { isLocale, type Locale, localeOfPath } from '~/i18n/locales'
import { isMissing } from '~/lib/missing'
import { BookmarkProvider } from '~/lib/progress/BookmarkProvider'
import {
  GAME_OF_THRONES_SERIES,
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_SERIES,
  type Series,
  seriesSlugFromPath,
} from '~/lib/progress/series'
import { copyOf } from '~/server/copy.server'

import { requirePage } from './$series/$locale/-found'
import { Route as AbilityRoute } from './$series/$locale/abilities/$id'
import { Route as FruitRoute } from './$series/$locale/fruits/$id'
import { ErrorPage, NotFoundPage } from './-fallback'
import { LocaleShell } from './-LocaleShell'

const SERIES = [
  ONE_PIECE_SERIES,
  HUNTER_X_HUNTER_SERIES,
  GAME_OF_THRONES_SERIES,
]

/**
 * The app's three layouts, around the real shell, intro and fallback pages:
 * the root holds the bookmark of the series the address names, by the rule
 * the real root reads it with.
 */
const root = createRootRouteWithContext<{ series: null | Series }>()({
  beforeLoad: ({ location }) => ({
    locale: localeOfPath(location.pathname),
    series:
      SERIES.find(({ slug }) => slug === seriesSlugFromPath(location.pathname))
      ?? null,
  }),
  component: function Root(): ReactElement {
    const { series } = root.useRouteContext()
    return (
      <BookmarkProvider
        initialBookmark={null}
        series={series}
      >
        <Outlet />
      </BookmarkProvider>
    )
  },
})

function localeOf({ locale }: { locale: string }): false | { locale: Locale } {
  return isLocale(locale) ? { locale } : false
}

const shared = createRoute({
  getParentRoute: () => root,
  path: '$locale',
  params: { parse: localeOf },
  component: function Shared(): ReactElement {
    return (
      <LocaleShell
        locale={shared.useParams().locale}
        shared
      >
        <Outlet />
      </LocaleShell>
    )
  },
})
const series = createRoute({
  getParentRoute: () => root,
  path: '$series',
  params: {
    parse: ({ series: slug }) => (isLocale(slug) ? false : { series: slug }),
  },
  // The real guard's rule: an unknown series answers 404.
  beforeLoad: ({ context }) => {
    if (context.series === null) {
      throw notFound()
    }
    return { series: context.series }
  },
})
const seriesLocale = createRoute({
  getParentRoute: () => series,
  path: '$locale',
  params: { parse: localeOf },
  component: function SeriesLayout(): ReactElement {
    const { locale } = seriesLocale.useParams()
    const { series: described } = seriesLocale.useRouteContext()
    return (
      <LocaleShell
        copy={copyOf(described, locale)}
        locale={locale}
        series
      >
        <Outlet />
        <FirstVisitIntro />
      </LocaleShell>
    )
  },
})
const hub = createRoute({ getParentRoute: () => shared, path: '/' })
const home = createRoute({ getParentRoute: () => seriesLocale, path: '/' })
const broken = createRoute({
  getParentRoute: () => seriesLocale,
  path: 'broken',
  component: (): never => {
    throw new Error('a page that fails to render')
  },
})
/** A record route's own not-found page, which it must have. */
function ownPage<Page>(page: Page | undefined): Page {
  if (page === undefined) {
    throw new TypeError('The record route needs its own not-found page')
  }
  return page
}

// The record routes' own guard and not-found page, for a section the series
// does not declare.
const fruit = createRoute({
  getParentRoute: () => seriesLocale,
  path: 'fruits/$id',
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'fruits')
  },
  notFoundComponent: ownPage(FruitRoute.options.notFoundComponent),
})
const ability = createRoute({
  getParentRoute: () => seriesLocale,
  path: 'abilities/$id',
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'abilities')
  },
  notFoundComponent: ownPage(AbilityRoute.options.notFoundComponent),
})
const tree = root.addChildren([
  shared.addChildren([hub]),
  series.addChildren([
    seriesLocale.addChildren([home, broken, fruit, ability]),
  ]),
])

async function open(
  path: string,
): Promise<ReturnType<typeof createRouter<typeof tree>>> {
  const router = createRouter({
    routeTree: tree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { series: null },
    defaultNotFoundComponent: NotFoundPage,
    defaultErrorComponent: ErrorPage,
  })
  await router.load()
  render(<RouterProvider router={router} />)
  await screen.findByRole('heading', { level: 1 })
  return router
}

describe('an address no page answers', () => {
  afterEach(() => {
    sessionStorage.clear()
  })

  it.each([
    { path: '/nope', title: 'Pagina non trovata', back: '/it' },
    { path: '/en/nope', title: 'Page not found', back: '/en' },
    { path: '/missing/en/characters', title: 'Page not found', back: '/en' },
    { path: '/one-piece/fr/nope', title: 'Pagina non trovata', back: '/it' },
  ])(
    'is the not-found page in the shared shell at $path',
    async ({ path, title, back }) => {
      const router = await open(path)

      expect(isMissing(router.state.matches)).toBe(true)
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(title)
      expect(screen.getAllByRole('main')).toHaveLength(1)
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
      expect(
        screen.getByRole('main').querySelector('a')?.getAttribute('href'),
      ).toBe(back)
    },
  )

  // The bug of #1374: the root read no series from an address no page
  // answers, the series shell rendered all the same, and the first hook to
  // ask for the series (the intro's, which only a browser opens) threw.
  it('keeps its series under a series, where the intro stays shut', async () => {
    // No bookmark and a fresh session: the intro is owed.
    const router = await open('/one-piece/en/nope')

    expect(isMissing(router.state.matches)).toBe(true)
    expect(router.state.matches[0]?.context.series).toBe(ONE_PIECE_SERIES)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Page not found',
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    // The bar is the series' own, and the way out is the series' home.
    expect(
      screen.getByRole('main').querySelector('a')?.getAttribute('href'),
    ).toBe('/one-piece/en')
    expect(screen.getByRole('link', { name: 'Characters' })).toHaveAttribute(
      'href',
      '/one-piece/en/characters',
    )
  })

  // A record route of a section the series does not have: the site's page,
  // not the router's bare one, with the way out to the series' home.
  it.each([
    {
      path: '/game-of-thrones/en/fruits/x',
      title: 'Page not found',
      back: '/game-of-thrones/en',
    },
    {
      path: '/hunter-x-hunter/it/fruits/x',
      title: 'Pagina non trovata',
      back: '/hunter-x-hunter/it',
    },
    {
      path: '/one-piece/en/abilities/x',
      title: 'Page not found',
      back: '/one-piece/en',
    },
  ])(
    'is the not-found page in the series shell at $path',
    async ({ path, title, back }) => {
      const router = await open(path)

      expect(isMissing(router.state.matches)).toBe(true)
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(title)
      expect(screen.getAllByRole('main')).toHaveLength(1)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(
        screen.getByRole('main').querySelector('a')?.getAttribute('href'),
      ).toBe(back)
    },
  )

  it('answers a page that fails to render with the error page, in the shell', async () => {
    await open('/one-piece/en/broken')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Something went wrong',
    )
    expect(
      screen.getByRole('link', { name: 'Zero Spoiler. All series' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
