import * as stylex from '@stylexjs/stylex'
import { Link, useMatch, useRouter } from '@tanstack/react-router'
import { type ReactElement, useRef } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { LocaleSwitch } from '~/components/LocaleSwitch'
import { styles } from '~/components/SiteBar.styles'
import { type PageEntry, usePageLinks } from '~/components/usePageLinks'
import { useRevealedPage } from '~/components/useRevealedPage'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useBookmark, useSeriesParams } from '~/lib/progress/BookmarkContext'

/**
 * The bar, edge-aligned.
 *
 * The wordmark hard-left, the controls hard-right. On a series page the
 * series' short name ("HxH") follows the wordmark, a breadcrumb: the wordmark
 * is the way back to the hub, the name the series' home. Its full name
 * follows, read and not shown, so the link is "HxH Hunter x Hunter". Past
 * them the row is empty. It stays pinned at every width, so the pages and
 * the bookmark are one tap away from anywhere down a long listing. Below
 * `BAR.seriesWide` a series bar folds the name and the pages onto a second
 * row, where the name keeps its width and the pages scroll sideways. Where
 * large text leaves no room for the wordmark beside the bookmark and the
 * language, it takes a row of its own and the two follow on the next, in one
 * box that is no box at all where they fit (`styles.controls`).
 * The right edge carries the series' pages, the reader's bookmark and the
 * language select, and no more. The bookmark is the one control the whole
 * site turns on, so it lives here, on every page, as a single mark that opens
 * the dialog where it is set; the route still draws it as the horizon line,
 * which is where the eye goes to see what it did.
 */
export function SiteBar(): ReactElement {
  const { locale } = useLocale()
  const t = useT()
  const { series } = useBookmark()

  return (
    <header {...stylex.props(styles.bar, series === null && styles.sharedBar)}>
      {/* The wordmark is the site's, so it goes to the hub on every page. */}
      <Link
        activeOptions={{ exact: true }}
        aria-label={`${t('site.name')}. ${t('nav.hub')}`}
        params={{ locale }}
        to="/$locale"
        {...stylex.props(
          styles.wordmark,
          series === null ? styles.siteAlone : [styles.quiet, styles.alone],
        )}
      >
        {t('site.name')}
      </Link>
      {series !== null && (
        <div {...stylex.props(styles.seriesRow)}>
          <span
            aria-hidden="true"
            {...stylex.props(styles.slash)}
          >
            /
          </span>
          <SeriesCrumb slug={series.slug} />
          <SeriesNavigation />
        </div>
      )}
      <div
        {...stylex.props(
          styles.controls,
          series === null ? styles.siteControls : styles.seriesControls,
        )}
      >
        {series !== null && <EpisodeMark />}
        <LocaleSwitch />
      </div>
    </header>
  )
}

interface SeriesCrumbProps {
  slug: string
}

/**
 * The series' home, after the wordmark: its short name ("HxH"), then its
 * full name in the reader's language, read and not shown, so the link's name
 * holds its visible text, "HxH Hunter x Hunter" (WCAG 2.5.3).
 */
function SeriesCrumb({ slug }: SeriesCrumbProps): ReactElement {
  const { locale } = useLocale()
  const described = useMatch({ from: '/$series', shouldThrow: false })?.context
    .series

  return (
    <Link
      activeOptions={{ exact: true }}
      activeProps={{ 'aria-current': 'page' }}
      params={{ locale, series: slug }}
      to="/$series/$locale"
      {...stylex.props(styles.seriesName)}
    >
      <span {...stylex.props(styles.seriesText)}>
        {described?.shortName ?? slug}
      </span>
      {described !== undefined && (
        // The space is the link's own text, so no span's edge trims it.
        <>
          {' '}
          <span {...stylex.props(styles.hidden)}>{described.name[locale]}</span>
        </>
      )}
    </Link>
  )
}

/**
 * The bar's pages, in its order; the filler guide is reached from the footer.
 * Labelled by the page's own copy: the fruits and the filler guide are One
 * Piece's, the abilities Hunter x Hunter's, the ranks page both's, and only a
 * series that declares a page links it.
 */
const NAV: PageEntry<TranslationKey>[] = [
  {
    page: 'characters',
    to: '/$series/$locale/characters',
    label: 'nav.characters',
  },
  { page: 'places', to: '/$series/$locale/places', label: 'nav.places' },
]

/** One Piece's own pages in the bar, in its words. */
const ONE_PIECE_NAV: PageEntry<TranslationKey<'one-piece'>>[] = [
  { page: 'fruits', to: '/$series/$locale/fruits', label: 'nav.fruits' },
  { page: 'ranks', to: '/$series/$locale/ranks', label: 'nav.ranks' },
]

/** Hunter x Hunter's own pages in the bar, in its words. */
const HUNTER_NAV: PageEntry<TranslationKey<'hunter-x-hunter'>>[] = [
  {
    page: 'abilities',
    to: '/$series/$locale/abilities',
    label: 'nav.abilities',
  },
  { page: 'ranks', to: '/$series/$locale/ranks', label: 'nav.ranks' },
]

/**
 * Content navigation belongs to the series selected by the route, and lists
 * the pages it declares.
 */
function SeriesNavigation(): ReactElement {
  const t = useT()
  const params = useSeriesParams()
  const links = usePageLinks(NAV, ONE_PIECE_NAV, HUNTER_NAV)
  const boxRef = useRef<HTMLElement>(null)
  useRevealedPage(boxRef, useRouter())
  return (
    <nav
      aria-label={t('nav.label')}
      ref={boxRef}
      {...stylex.props(styles.pages)}
    >
      {links.map(({ label, to }) => (
        <Link
          key={to}
          activeProps={{ 'aria-current': 'page' }}
          params={params}
          to={to}
          {...stylex.props(styles.link)}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
