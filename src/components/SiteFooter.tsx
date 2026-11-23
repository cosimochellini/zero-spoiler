import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { type PageEntry, usePageLinks } from '~/components/usePageLinks'
import { useLocale, useSeriesT, useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

export const REPOSITORY = 'https://github.com/cosimochellini/zero-spoiler'

/**
 * The footer, a dense colophon.
 *
 * One block of small type that says what the page is made of and how it
 * behaves, the way a colophon closes a book. Four columns of links and a row of
 * social icons is the footer every generated page ships, and this site has
 * nothing to put in them. The lead sentence is the one the whole page argues.
 * A series page names its series, its 404s included; a `shared` page (the
 * hub, the legal notices) speaks for every series at once. One Piece's
 * footer also points to its filler guide, which is not in the bar, so every
 * page of the series links to it at any bookmark (#1382).
 */
export function SiteFooter({
  shared = false,
}: {
  shared?: boolean
}): ReactElement {
  const { locale } = useLocale()
  const t = useT()

  return (
    <footer {...stylex.props(styles.footer)}>
      <p {...stylex.props(styles.colophon)}>
        <b {...stylex.props(styles.lead)}>
          {t(shared ? 'footer.sharedLead' : 'footer.lead')}
        </b>{' '}
        {t(shared ? 'footer.sharedColophon' : 'footer.colophon')}
      </p>
      {!shared && <FillerLine />}
      <p {...stylex.props(styles.colophon)}>
        {t(shared ? 'footer.sharedUnofficial' : 'footer.unofficial')}{' '}
        <Link
          params={{ locale }}
          to="/$locale/legal"
          {...stylex.props(styles.link)}
        >
          {t('legal.title')}
        </Link>
      </p>
      <p {...stylex.props(styles.colophon)}>
        {t('footer.openSource')}{' '}
        <a
          href={REPOSITORY}
          {...stylex.props(styles.link, styles.whole)}
        >
          {t('footer.star')}
        </a>
        .
      </p>
    </footer>
  )
}

/** The filler guide, for a series that declares it: One Piece's alone. */
const FILLER: PageEntry<TranslationKey<'one-piece'>>[] = [
  { page: 'filler', to: '/$series/$locale/filler', label: 'footer.fillerLink' },
]

/** A line that links the filler guide, or nothing on a series without one. */
function FillerLine(): null | ReactElement {
  const { locale } = useLocale()
  const onePiece = useSeriesT('one-piece')
  const { series } = useBookmark()
  const [filler] = usePageLinks([], FILLER, [])

  if (filler === undefined || onePiece === undefined || series === null) {
    return null
  }

  return (
    <p {...stylex.props(styles.colophon)}>
      {onePiece('footer.filler')}{' '}
      <Link
        params={{ locale, series: series.slug }}
        to={filler.to}
        {...stylex.props(styles.link)}
      >
        {filler.label}
      </Link>
      .
    </p>
  )
}

const styles = stylex.create({
  footer: {
    paddingInline: space.md,
    borderBlockStartColor: color.rule,
    borderBlockStartStyle: 'solid',
    borderBlockStartWidth: rule.hair,
    paddingBlockEnd: space.xl,
    paddingBlockStart: space.lg,
  },

  // A colophon is read once, slowly, so it keeps a measure: the narrow end
  // of the running text's 52 to 66ch, which in this face is under 80
  // characters a line in both languages.
  colophon: {
    color: color.muted,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    marginBlockEnd: space.sm,
    maxWidth: '52ch',
  },
  link: {
    color: color.ink2,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'underline',
    textUnderlineOffset: '3px',
  },
  // A link that wraps reads as two links.
  whole: { whiteSpace: 'nowrap' },
  lead: { color: color.ink2, fontWeight: 700 },
})
