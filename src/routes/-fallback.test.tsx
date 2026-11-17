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
import { isLocale, type Locale } from '~/i18n/locales'
import { BookmarkProvider } from '~/lib/progress/BookmarkProvider'
import {
  ONE_PIECE_SERIES,
  type Series,
  seriesSlugFromPath,
} from '~/lib/progress/series'
import { copyOf } from '~/server/copy.server'

import { isMissing } from './$series/$locale/-found'
import { ErrorPage, NotFoundPage } from './-fallback'
import { LocaleShell } from './-LocaleShell'

/**
 * The app's three layouts, around the real shell, intro and fallback pages:
 * the root holds the bookmark of the series the address names, by the rule
 * the real root reads it with.
 */
const root = createRootRouteWithContext<{ series: null | Series }>()({
  beforeLoad: ({ location }) => ({
    series:
      seriesSlugFromPath(location.pathname) === ONE_PIECE_SERIES.slug ?
        ONE_PIECE_SERIES
      : null,
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
    return (
      <LocaleShell
        copy={copyOf(ONE_PIECE_SERIES, locale)}
        locale={locale}
        trial
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
const tree = root.addChildren([
  shared.addChildren([hub]),
  series.addChildren([seriesLocale.addChildren([home, broken])]),
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
