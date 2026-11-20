import * as stylex from '@stylexjs/stylex'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
  useMatch,
} from '@tanstack/react-router'
import { type ReactElement, type ReactNode, useEffect } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { type Locale, localeOfPath } from '~/i18n/locales'
import {
  getDictionary,
  loadDictionary,
  loadDictionaryOrReload,
  translate,
} from '~/i18n/translate'
import { isMissing } from '~/lib/missing'
import { BookmarkProvider } from '~/lib/progress/BookmarkProvider'
import { readBookmark, readTrial } from '~/lib/progress/readBookmark'
import { type Series, seriesSlugFromPath } from '~/lib/progress/series'
import { recordStyles } from '~/routes/$series/$locale/-record.styles'
import { seriesCopy, seriesDescription } from '~/routes/-series'
import { createSecurityHeaders } from '~/security-headers'
import { seriesBarPin, stickyStyles } from '~/styles/sticky'
import { themeOf } from '~/styles/themes'
import { color, dur, ease, font, leading, text } from '~/styles/tokens.stylex'
// A plain side-effect import, deliberately not `?url`. Vite folds it into the
// client entry chunk's `viteMetadata.importedCss`, which is the only source
// TanStack Start reads when it builds the route manifest, so the <link> is
// emitted on every document automatically. It is also the CSS asset
// @stylexjs/unplugin appends its compiled output to. `?url` would break both:
// Vite classifies `url` as a side-effect-free param, so the import would land
// in neither the manifest nor Start's dev-mode style collector.
import '~/styles/global.css'

export const Route = createRootRoute({
  // Runs on the server for a document request and on the client for a
  // navigation, and `readBookmark` has a branch for each. Reading the bookmark
  // this early is what makes the first painted HTML already correct.
  beforeLoad: async ({ location, preload, abortController }) => {
    const slug = seriesSlugFromPath(location.pathname)
    const locale = localeOfPath(location.pathname)
    const [series] = await Promise.all([
      // An unknown series is `null` here and a 404 at the series route's
      // guard: thrown from here, the signal would leave this route's own
      // component without the context it reads.
      slug === null ? null : describedWithCopy(slug, locale, location.pathname),
      // The shared copy of the address's language, for every page under it:
      // the locale routes' pages, and the not-found page of an address no
      // locale route matches. A copy that cannot be fetched reloads the page
      // once (#930, #938); a hovered link's preload must not reload the page
      // into it.
      preload ?
        loadDictionary(locale)
      : loadDictionaryOrReload(locale, abortController.signal),
    ])
    return {
      series,
      initialBookmark: readBookmark(series),
      initialTrial: readTrial(series) !== null,
      // The language of the page on screen, for everything above a locale
      // route: it lands with the copy loaded above, when the page does. The
      // address changes as soon as a navigation starts, before either.
      locale,
    }
  },
  head: ({ match, matches }) => ({
    meta: [
      // A 404: on any other page a deeper route's title wins.
      ...(isMissing(matches) ?
        [
          {
            title: translate(
              getDictionary(match.context.locale),
              'notFound.pageTitle',
            ),
          },
        ]
      : []),
      // eslint-disable-next-line unicorn/text-encoding-identifier-case -- HTML requires this attribute to be an ASCII case-insensitive match for "utf-8"; `utf8` is a valid encoding label everywhere else, but not here.
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Proves ownership of the property to Google Search Console. The tag
      // has to stay on every document: Search Console re-checks it, and a
      // page that drops it fails verification.
      {
        name: 'google-site-verification',
        // eslint-disable-next-line no-secrets/no-secrets -- the token is a public ownership proof Google hands out to be served in the HTML of every page; it grants nothing and is meant to be read by anyone.
        content: 'h5qpGoxTYVlSKZU1U4-E74deg8MRRDnKdRa3Wb-kkPI',
      },
      // Proves ownership of the property to Bing Webmaster Tools. Same rule as
      // the Google tag above: it has to stay on every document.
      { name: 'msvalidate.01', content: '9711E0529A53A545FFEC16864511D537' },
    ],
    links: [
      // The .ico comes first so Safari, which ignores SVG icons, still finds
      // a bitmap; Chromium and Firefox prefer the SVG that follows. All three
      // are generated from public/icon.svg by scripts/make-icons.mjs.
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      // The display face at 800 and the body face are needed by the wordmark
      // and the first paragraph, so they are fetched in parallel with the
      // stylesheet rather than after it. Only the Latin subsets: no first
      // view in either locale sets Latin Extended text. Not preloaded: the
      // lighter display weights, which paint a few words on a few pages (a
      // wide bar's slash, the sea chart, the legal page) and would compete
      // with the two faces every page needs; and the mono face, which sets
      // episode numerals and the horizon label, never the largest paint, and
      // whose metric-matched fallback keeps the swap from moving anything.
      // `type` and `crossOrigin` match the `@font-face` rules (woff2, and a
      // font is always fetched with CORS), so the browser reuses the preload
      // instead of fetching the file twice. Firefox logs these two as
      // "preloaded but not used" even when its network panel shows one
      // request per font, served from the preload; Chromium does not, so the
      // warning is noise, not a mismatch.
      {
        rel: 'preload',
        href: '/fonts/bricolage-grotesque-800-latin.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: '/fonts/instrument-sans-latin.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      // Dev only. In a production build the compiled StyleX CSS lives inside
      // the hashed asset imported above and needs no link of its own, and
      // `import.meta.env.DEV` is replaced with `false` so this entry is dead
      // code. In dev the plugin serves the aggregated sheet from an in-memory
      // middleware instead, because nothing has been emitted to disk yet.
      ...(import.meta.env.DEV ?
        [{ rel: 'stylesheet', href: '/virtual:stylex.css' }]
      : []),
    ],
  }),
  // public/_headers reaches static files only, and every document here is
  // rendered by the server, so the security headers have to be part of the
  // response the app itself returns.
  headers: ({ ssr }) => createSecurityHeaders(ssr?.nonce),
  component: RootComponent,
  errorComponent: RootError,
})

/**
 * A series' description. Once the series is known, its own copy in the
 * address's language is asked for without being waited on, so the series
 * route finds it on its way: asked there, it would start only after the
 * shared copy had arrived (#1386). An unknown series asks for nothing, and
 * neither does `/{series}`, which names no language.
 */
async function describedWithCopy(
  slug: string,
  locale: Locale,
  pathname: string,
): Promise<null | Series> {
  const series = await seriesDescription(slug)
  if (series !== null && pathname.startsWith(`/${slug}/${locale}`)) {
    void startSeriesCopy(slug, locale)
  }
  return series
}

async function startSeriesCopy(slug: string, locale: Locale): Promise<void> {
  try {
    await seriesCopy(slug, locale)
  } catch {
    // The series route's to meet, when it asks again.
  }
}

function RootComponent(): ReactElement {
  const { series, initialBookmark, initialTrial, locale } =
    Route.useRouteContext()

  return (
    <RootDocument
      locale={locale}
      seriesPage={series !== null}
    >
      <BookmarkProvider
        initialBookmark={initialBookmark}
        initialTrial={initialTrial}
        series={series}
      >
        <Outlet />
      </BookmarkProvider>
    </RootDocument>
  )
}

/**
 * The words of `RootError`, here and not in the dictionaries: the copy that
 * failed to load is one of the things that end on that page.
 */
const ROOT_ERROR: Record<
  Locale,
  { body: string; link: string; title: string }
> = {
  en: {
    title: 'Something went wrong',
    body: 'This page could not be loaded.',
    link: 'Reload the page',
  },
  it: {
    title: 'Qualcosa è andato storto',
    body: 'Non è stato possibile caricare questa pagina.',
    link: 'Ricarica la pagina',
  },
}

/**
 * This route's own failure, the last page there is: its guard, the bookmark
 * provider, or a shell above every other error page. It reads nothing that
 * can be what failed: no dictionary, no locale or bookmark provider, no
 * series. The document, a heading, a sentence and a link that loads the
 * address again from the server; never the error's own message. Its language
 * is the address's: this route's context is what failed. The title is set
 * here because `head` gives a route in error none.
 */
function RootError(): ReactElement {
  const { href, pathname } = useLocation()
  const locale = localeOfPath(pathname)
  const words = ROOT_ERROR[locale]

  return (
    <RootDocument
      locale={locale}
      seriesPage={false}
      title={`${words.title} | Zero Spoiler`}
    >
      <ArchivePage
        count={words.body}
        title={words.title}
      >
        <p>
          <a
            href={href}
            {...stylex.props(recordStyles.backLink)}
          >
            {words.link}
          </a>
        </p>
      </ArchivePage>
    </RootDocument>
  )
}

// The default client entry hydrates the whole document, so the root route has
// to render <html> itself.
function RootDocument({
  children,
  locale,
  seriesPage,
  title,
}: {
  children: ReactNode
  locale: Locale
  /** A series page, as `SiteBar` reads it: its bar keeps two rows longer. */
  seriesPage: boolean
  /** The title of a page whose `head` has none: this route's error page. */
  title?: string
}): ReactElement {
  // A series page, its 404s included, wears the theme its description names;
  // the hub, the legal notices and an unknown address keep the site's own.
  const theme = themeOf(
    useMatch({ from: '/$series', shouldThrow: false })?.context.series,
  )

  // The dev stylesheet above is a static URL, so the browser never refetches
  // it after an edit. `virtual:stylex:css-only` is the shim the plugin ships
  // for exactly that: it listens for `stylex:css-update` and rewrites the
  // link's cache-busting query. It touches `document` at module scope, so the
  // import has to be dynamic and inside an effect rather than a top-level
  // import the SSR pass would evaluate. Note the module id: under
  // `devMode: 'css-only'` the plugin resolves this one and never
  // `virtual:stylex:runtime`.
  useEffect(() => {
    if (!import.meta.env.DEV) {
      return
    }
    // eslint-disable-next-line import-x/no-unresolved -- the id is minted by @stylexjs/unplugin at dev time and exists on no filesystem, so no resolver can be pointed at it.
    void import('virtual:stylex:css-only')
  }, [])

  // `suppressHydrationWarning` on <html> and <body> only: browser extensions
  // (Grammarly writes `data-gr-ext-installed` on the body, others add classes
  // to <html>) change these two elements before React hydrates, and the
  // warning would blame the site for it. It covers their own attributes, one
  // level deep, so a real mismatch anywhere inside the page still shows up.
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      {...stylex.props(
        stickyStyles.document,
        styles.document,
        theme,
        seriesPage && seriesBarPin,
      )}
    >
      <head>
        {title !== undefined && <title>{title}</title>}
        <HeadContent />
      </head>
      {/*
        The document colours and the body face are set once here and inherit
        everywhere. src/styles/global.css is a reset plus @font-face only, so
        every value the page renders still comes from tokens.stylex.ts.
      */}
      <body
        suppressHydrationWarning
        {...stylex.props(styles.body)}
      >
        {children}
        <Scripts />
      </body>
    </html>
  )
}

// The crossfade the router starts between two pages (see src/router.tsx),
// timed from the tokens instead of the browser's default quarter second. The
// old and new snapshots of the whole viewport inherit the group's timing and
// keep the browser's own fade, so the masthead, whose pixels do not change,
// reads as standing still while the page under it turns over. Opacity is the
// form every spatial motion here collapses to under reduced motion, so it
// runs for every reader; the blanket reset in global.css does not reach the
// view transition pseudo-elements.
const pageTransition = stylex.viewTransitionClass({
  group: { animationDuration: dur.short, animationTimingFunction: ease.inOut },
})

const styles = stylex.create({
  document: {
    // eslint-disable-next-line @stylexjs/valid-styles -- the compiler emits `view-transition-class` from this, but the rule's property table predates it, and its `propLimits` escape admits only string literals, never the class name `stylex.viewTransitionClass` returns.
    viewTransitionClass: pageTransition,
  },
  body: {
    backgroundColor: color.paper,
    // The two blooms the genre allows, and the only decoration on the canvas:
    // a lantern glow high on the right where the page begins, and a paler
    // patch of sea low on the left where it ends. Both are two-stop radial
    // gradients that resolve against the document, so they sit where the
    // page sits and never repaint on scroll.
    backgroundImage: `radial-gradient(60rem 36rem at 88% -6%, ${color.glow}, transparent 62%), radial-gradient(70rem 30rem at 8% 102%, ${color.paper3}, transparent 70%)`,
    backgroundRepeat: 'no-repeat',
    color: color.ink,
    fontFamily: font.body,
    // Optical sizing on is what makes Bricolage Grotesque's `opsz` axis open
    // up its counters when it is set small, as on the legend figures.
    fontOpticalSizing: 'auto',
    fontSize: text.base,
    lineHeight: leading.body,
    textRendering: 'optimizeLegibility',
  },
})

console.debug('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')
