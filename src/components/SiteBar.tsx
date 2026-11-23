import * as stylex from '@stylexjs/stylex'
import { Link, useMatch } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { LocaleSwitch } from '~/components/LocaleSwitch'
import { type PageEntry, usePageLinks } from '~/components/usePageLinks'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useBookmark, useSeriesParams } from '~/lib/progress/BookmarkContext'
import {
  BAR,
  color,
  dur,
  ease,
  font,
  leading,
  pin,
  rule,
  space,
  text,
  z,
} from '~/styles/tokens.stylex'

/**
 * The bar, edge-aligned.
 *
 * The wordmark hard-left, the controls hard-right. On a series page the
 * series' short name ("HxH") follows the wordmark, a breadcrumb: the wordmark
 * is the way back to the hub, the name the series' home. Its full name
 * follows, read and not shown, so the link is "HxH Hunter x Hunter". Past
 * them the row is empty. It stays pinned at every width, so the pages and
 * the bookmark are one tap away from anywhere down a long listing. Below
 * `ROOMY` a series bar folds the name and the pages onto a second row, where
 * the name keeps its width and the pages scroll sideways.
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
        {...stylex.props(styles.wordmark, series !== null && styles.quiet)}
      >
        {t('site.name')}
      </Link>
      {series !== null && (
        <>
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
          <EpisodeMark />
        </>
      )}
      <LocaleSwitch />
    </header>
  )
}

/**
 * The series' home, after the wordmark: its short name ("HxH"), then its
 * full name in the reader's language, read and not shown, so the link's name
 * holds its visible text, "HxH Hunter x Hunter" (WCAG 2.5.3).
 */
function SeriesCrumb({ slug }: { slug: string }): ReactElement {
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
  return (
    <nav
      aria-label={t('nav.label')}
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

// The site's breakpoint: below it the bar is the phone bar.
const WIDE = '@media (min-width: 40rem)'
// A series bar needs more room for one row: the wordmark, the short name,
// its pages, the bookmark and the language fit from `BAR.seriesWide` with the
// most pages (four, One Piece's and Hunter x Hunter's, in Italian). Below it
// the name and the pages fold under, as on a phone, where the name gives way
// first.
const ROOMY = BAR.seriesWide
// The least height of every control in the bar, the wordmark's included.
const TAP = '44px'

const styles = stylex.create({
  // One grid at every width, pinned to the top of the window, its height
  // `pin.bar`: the value every other pinned element offsets itself by. From
  // `ROOMY` a series bar sets wordmark, slash, name, pages, bookmark and
  // language on one row, and the free space is the name's column, so a name
  // too long for the row ends in an ellipsis rather than under the pages.
  // Below it the first row has the wordmark, bookmark and language, and the
  // series' row folds under.
  bar: {
    'paddingBlock': space.xs2,
    'paddingInline': space.md,
    'alignItems': 'center',
    'columnGap': { [WIDE]: space.lg, default: space.sm },
    'display': 'grid',
    'gridTemplateColumns': {
      [ROOMY]: 'auto auto minmax(0, 1fr) auto auto auto',
      default: 'minmax(0, 1fr) auto auto',
    },
    'insetBlockStart': 0,
    'position': 'sticky',
    'zIndex': z.bar,
    'height': pin.bar,
    'minWidth': 0,
    // The glass, frosted so the lantern bloom still shows where the page
    // begins and a page scrolling under the bar is never read through it. It
    // runs to both edges of the window while the bar's row keeps the
    // column's 76rem: drawn on the bar's own box, it ended at the column's
    // edge, a hard line through the bloom on a wide screen. `100vw` counts a
    // classic scrollbar too, which only paints under it; the document clips
    // what spills past (src/styles/global.css).
    '::before': {
      insetBlock: 0,
      insetInline: 'calc(50% - 50vw)',
      backdropFilter: 'blur(14px) saturate(1.4)',
      backgroundColor: color.veil,
      content: '""',
      position: 'absolute',
      zIndex: -1,
    },
  },
  sharedBar: {
    gridTemplateColumns: {
      [WIDE]: 'minmax(0, 1fr) auto',
      default: 'minmax(0, 1fr) auto',
    },
  },
  // Below `ROOMY` the pages scroll sideways in their own box, out to the
  // window's edge, where the next page cut in half says there is more: the
  // name before them keeps its width. The box reaches past the row by the
  // focus ring's room, a ring's width and its offset, so a scroll box that
  // clips at its edge never cuts a ring; the margins take that room back.
  // No scrollbar: it would take the row's height on a desktop mouse.
  pages: {
    gap: space.xs,
    marginBlock: { [ROOMY]: 0, default: `calc(-1 * ${space.xs2})` },
    paddingBlock: { [ROOMY]: 0, default: space.xs2 },
    alignItems: 'center',
    display: 'flex',
    flexShrink: { [ROOMY]: 0, default: 1 },
    marginInlineEnd: { [ROOMY]: 0, default: `calc(-1 * ${space.md})` },
    marginInlineStart: { [ROOMY]: 0, default: `calc(-1 * ${space.xs2})` },
    paddingInlineEnd: { [ROOMY]: 0, default: space.md },
    paddingInlineStart: { [ROOMY]: 0, default: space.xs2 },
    scrollbarWidth: 'none',
    minWidth: 0,
    overflowX: { [ROOMY]: 'visible', default: 'auto' },
  },
  // A phone's second row: the series' name, a hairline, then its pages,
  // flush with the wordmark above. The row spans the bar rather than the
  // first column, which the bookmark's width decides. From `ROOMY` the row
  // unwraps, so the slash, the name and the pages take their own columns.
  seriesRow: {
    gridRow: { [ROOMY]: 'auto', default: 2 },
    alignItems: 'center',
    columnGap: space.xs,
    display: { [ROOMY]: 'contents', default: 'flex' },
    gridColumnEnd: { [ROOMY]: 'auto', default: -1 },
    gridColumnStart: { [ROOMY]: 'auto', default: 1 },
    minWidth: 0,
  },
  // A column of no width, the glyph centred on it, so the slash sits halfway
  // between the wordmark and the name whatever its own width.
  slash: {
    color: color.rule2,
    display: { [ROOMY]: 'flex', default: 'none' },
    fontFamily: font.display,
    fontSize: text.lg,
    fontWeight: 400,
    justifyContent: 'center',
    width: 0,
  },
  // On a phone the name keeps its width and the pages scroll beside it; from
  // `ROOMY` it is the row's free column, and a long name ends in an ellipsis.
  seriesName: {
    alignItems: 'center',
    borderInlineEndColor: color.rule2,
    borderInlineEndStyle: { [ROOMY]: 'none', default: 'solid' },
    borderInlineEndWidth: rule.hair,
    color: { 'default': color.ink, ':hover': color.accent },
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: font.display,
    fontSize: { [ROOMY]: text.lg, default: text.base },
    fontStretch: 'semi-condensed',
    fontWeight: 800,
    justifySelf: 'start',
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    paddingInlineEnd: { [ROOMY]: 0, default: space.sm },
    textDecorationLine: 'none',
    // The short name keeps its own case: "HxH", "GoT".
    textTransform: 'none',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    minHeight: TAP,
    minWidth: 0,
  },
  seriesText: { overflow: 'hidden', textOverflow: 'ellipsis' },
  // Out of sight and still read: the series' full name.
  hidden: {
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
  },
  // On a series page the series' name is the louder of the two.
  quiet: { color: { 'default': color.ink2, ':hover': color.accent } },

  // The way to the hub, as tall as the other controls, its type the same.
  wordmark: {
    alignItems: 'center',
    color: color.ink,
    display: 'flex',
    fontFamily: font.display,
    fontSize: { [WIDE]: text.lg, default: text.base },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: leading.heading,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs2,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    // A wordmark is one line or it is not a wordmark.
    whiteSpace: 'nowrap',
    minHeight: TAP,
  },

  // The same voice as the language switch beside it; the current page is
  // marked with the accent rule and `aria-current`, never with colour alone.
  link: {
    paddingInline: { [WIDE]: space.xs, default: space.xs2 },
    alignItems: 'center',
    color: {
      'default': color.ink2,
      ':is([aria-current="page"])': color.ink,
      ':hover': color.accent,
      ':active': color.ink,
    },
    display: 'inline-flex',
    fontFamily: font.body,
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationColor: {
      'default': 'transparent',
      ':is([aria-current="page"])': color.accent,
    },
    textDecorationLine: 'underline',
    textDecorationThickness: rule.fine,
    textUnderlineOffset: '4px',
    transitionDuration: dur.micro,
    transitionProperty: 'color',
    transitionTimingFunction: ease.out,
    whiteSpace: 'nowrap',
    minHeight: TAP,
  },
})
