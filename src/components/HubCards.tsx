import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { SeriesEmblem } from '~/components/SeriesEmblem'
import { styles } from '~/components/SeriesHub.styles'
import { REPOSITORY } from '~/components/SiteFooter'
import { useLocale, useT } from '~/i18n/LocaleContext'
import { bookmarkPoint } from '~/lib/progress/threshold'
import type { HubSeries } from '~/lib/view/hub'
import { THEMES } from '~/styles/themes'

/** The issue form a reader asks for a new series with (#1703). */
export const REQUEST_URL = `${REPOSITORY}/issues/new?template=series.yml`

/** Where the reader's bookmark on a series stands, and its counts. */
function Standing({ entry }: { entry: HubSeries }): ReactElement {
  const t = useT()

  return (
    <>
      <span
        {...stylex.props(
          styles.mono,
          styles.point,
          entry.bookmark === null && styles.unset,
        )}
      >
        {entry.bookmark === null ?
          t('hub.noBookmark')
        : bookmarkPoint(t, entry.bookmark, entry.books)}
      </span>
      <span {...stylex.props(styles.mono, styles.count)}>
        {entry.bookmark === null ?
          t('hub.count', { count: entry.count })
        : t('hub.countOpen', { count: entry.count, open: entry.open })}
      </span>
    </>
  )
}

/** The card that asks for a series the site does not have: a GitHub form. */
export function RequestTicket(): ReactElement {
  const t = useT()

  return (
    <a
      href={REQUEST_URL}
      {...stylex.props(styles.ticket, styles.request, styles.lit)}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        {...stylex.props(styles.plus)}
      >
        <circle
          cx="24"
          cy="24"
          r="21"
        />
        <path d="M24 14v20M14 24h20" />
      </svg>
      <div {...stylex.props(styles.copy, styles.besideArt)}>
        <h2 {...stylex.props(styles.ticketName)}>{t('hub.request')}</h2>
        <span {...stylex.props(styles.mono, styles.count)}>
          {t('hub.requestHint')}
        </span>
      </div>
    </a>
  )
}

/** Where a card stands: in the opening row, or among the closing stages. */
export type CardSize = 'stage' | 'ticket'

/** Each size's boxes, and the level its name takes under the section's. */
const LOOK = {
  stage: {
    art: styles.art,
    box: styles.stage,
    copy: null,
    Heading: 'h3',
    name: styles.name,
  },
  ticket: {
    art: styles.ticketArt,
    box: styles.ticket,
    copy: styles.besideArt,
    Heading: 'h2',
    name: styles.ticketName,
  },
} as const

/**
 * A series a reader can open, lit in its own colours: small in the opening
 * row, one tap away, or a tall stage at the tour's close.
 */
export function SeriesCard({
  entry,
  size,
}: {
  entry: HubSeries
  size: CardSize
}): ReactElement {
  const { locale } = useLocale()
  const look = LOOK[size]

  return (
    <Link
      params={{ series: entry.slug, locale }}
      to="/$series/$locale"
      {...stylex.props(THEMES[entry.theme], look.box, styles.lit)}
    >
      <span
        aria-hidden="true"
        {...stylex.props(look.art)}
      >
        <SeriesEmblem slug={entry.slug} />
      </span>
      <div {...stylex.props(styles.copy, look.copy)}>
        <look.Heading {...stylex.props(look.name)}>
          {entry.name[locale]}
        </look.Heading>
        <Standing entry={entry} />
      </div>
    </Link>
  )
}

/** A series announced but not open: no link, and the lights still off. */
export function ComingCard({
  name,
  size,
}: {
  name: string
  size: CardSize
}): ReactElement {
  const t = useT()
  const look = LOOK[size]

  return (
    <div
      {...stylex.props(
        look.box,
        styles.dark,
        size === 'ticket' && styles.wordsOnly,
      )}
    >
      {size === 'stage' && (
        <span
          aria-hidden="true"
          {...stylex.props(styles.fog)}
        />
      )}
      <div {...stylex.props(styles.copy, styles.wholeRow)}>
        <look.Heading {...stylex.props(look.name, styles.unlitName)}>
          {name}
        </look.Heading>
        <span {...stylex.props(styles.mono, styles.point, styles.unset)}>
          {t('hub.coming')}
        </span>
      </div>
    </div>
  )
}
