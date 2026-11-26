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

/** A series in the opening row: small, in its own colours, one tap away. */
export function Ticket({ entry }: { entry: HubSeries }): ReactElement {
  const { locale } = useLocale()

  return (
    <Link
      params={{ series: entry.slug, locale }}
      to="/$series/$locale"
      {...stylex.props(THEMES[entry.theme], styles.ticket, styles.lit)}
    >
      <span
        aria-hidden="true"
        {...stylex.props(styles.ticketArt)}
      >
        <SeriesEmblem slug={entry.slug} />
      </span>
      <div {...stylex.props(styles.copy, styles.besideArt)}>
        <h2 {...stylex.props(styles.ticketName)}>{entry.name[locale]}</h2>
        <Standing entry={entry} />
      </div>
    </Link>
  )
}

/** A series announced but not open, in the opening row. */
export function DarkTicket({ name }: { name: string }): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.ticket, styles.dark, styles.wordsOnly)}>
      <div {...stylex.props(styles.copy, styles.wholeRow)}>
        <h2 {...stylex.props(styles.ticketName, styles.unlitName)}>{name}</h2>
        <span {...stylex.props(styles.mono, styles.point, styles.unset)}>
          {t('hub.coming')}
        </span>
      </div>
    </div>
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

/** A series a reader can open: its tall stage, lit in its own colours. */
export function Stage({ entry }: { entry: HubSeries }): ReactElement {
  const { locale } = useLocale()

  return (
    <Link
      params={{ series: entry.slug, locale }}
      to="/$series/$locale"
      {...stylex.props(THEMES[entry.theme], styles.stage, styles.lit)}
    >
      <span
        aria-hidden="true"
        {...stylex.props(styles.art)}
      >
        <SeriesEmblem slug={entry.slug} />
      </span>
      <div {...stylex.props(styles.copy)}>
        <h3 {...stylex.props(styles.name)}>{entry.name[locale]}</h3>
        <Standing entry={entry} />
      </div>
    </Link>
  )
}

/** A series announced but not open: no link, and the lights still off. */
export function DarkStage({ name }: { name: string }): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.stage, styles.dark)}>
      <span
        aria-hidden="true"
        {...stylex.props(styles.fog)}
      />
      <div {...stylex.props(styles.copy, styles.wholeRow)}>
        <h3 {...stylex.props(styles.name, styles.unlitName)}>{name}</h3>
        <span {...stylex.props(styles.mono, styles.point, styles.unset)}>
          {t('hub.coming')}
        </span>
      </div>
    </div>
  )
}
