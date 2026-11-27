import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  ComingCard,
  REQUEST_URL,
  RequestTicket,
  SeriesCard,
} from '~/components/HubCards'
import { HubTour } from '~/components/HubTour'
import { styles } from '~/components/SeriesHub.styles'
import type { LoadTour } from '~/components/useTour'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { ComingSeries, HubSeries } from '~/lib/view/hub'
import { TOUR_ID } from '~/lib/view/tourSteps'
import { settleStyles } from '~/styles/settle'

/** What the hub's sections are handed: the open series and the coming ones. */
export interface HubProps {
  /** The series filed but not open: a name, no link, no count. */
  coming: ComingSeries[]
  series: HubSeries[]
}

export interface SeriesHubProps extends HubProps {
  load: LoadTour
}

/**
 * The hub (the "Stage" direction, owner 2026-10-24): the house lights
 * are down, as on every page with no series, and each series is a stage in
 * its own colours. A series still to come is a dark stage: fog and its name,
 * nothing else.
 *
 * Since #1703 the hub opens on a compact row, every wiki at a glance and a
 * card that asks for a new one, then the tour (`HubTour`), and closes on the
 * tall stages, where a reader who has followed the tour picks a series.
 *
 * A card says the series' name, how many entries it holds and where the
 * reader's saved bookmark on it stands, and with a bookmark how many of the
 * entries are open. It names no record: the counts are numbers, and the
 * drawing is the series' own (`SeriesEmblem`). The tour is the one part of
 * the hub that shows records, the demo's, and it loads them apart (`load`).
 */
export function SeriesHub({
  coming,
  load,
  series,
}: SeriesHubProps): ReactElement {
  return (
    <main
      id="content"
      {...stylex.props(styles.page)}
    >
      <Opening
        coming={coming}
        series={series}
      />
      <HubTour
        load={load}
        series={series}
      />
      <Choose
        coming={coming}
        series={series}
      />
    </main>
  )
}

/** A card of the opening row, settling in at its turn. */
function settle(index: number): stylex.StyleXStyles[] {
  return [styles.item, settleStyles.band, settleStyles.at(index)]
}

/** The headline, every wiki in one row, the request card, and the tour's link. */
function Opening({ coming, series }: HubProps): ReactElement {
  const { locale } = useLocale()
  const t = useT()

  return (
    <section {...stylex.props(styles.opening)}>
      <header {...stylex.props(styles.head)}>
        <h1 {...stylex.props(styles.headline)}>{t('hub.headline')}</h1>
        <p {...stylex.props(styles.lede)}>{t('hub.lede')}</p>
      </header>
      <ul {...stylex.props(styles.row)}>
        {series.map((entry, index) => (
          <li
            key={entry.slug}
            {...stylex.props(settle(index))}
          >
            <SeriesCard
              entry={entry}
              size="ticket"
            />
          </li>
        ))}
        {coming.map((announced, index) => (
          <li
            key={announced.slug}
            {...stylex.props(settle(series.length + index))}
          >
            <ComingCard
              name={announced.name[locale]}
              size="ticket"
            />
          </li>
        ))}
        <li {...stylex.props(settle(series.length + coming.length))}>
          <RequestTicket />
        </li>
      </ul>
      <a
        href={`#${TOUR_ID}`}
        {...stylex.props(styles.how)}
      >
        {t('hub.how')}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          {...stylex.props(styles.howArrow)}
        >
          <path d="M8 2v11M3 8.5 8 13.5l5-5" />
        </svg>
      </a>
    </section>
  )
}

/** The tour's close: the tall stages, and the request once more. */
function Choose({ coming, series }: HubProps): ReactElement {
  const { locale } = useLocale()
  const t = useT()

  return (
    <section
      aria-labelledby="choose"
      {...stylex.props(styles.choose)}
    >
      <h2
        id="choose"
        {...stylex.props(styles.chooseTitle)}
      >
        {t('hub.tour.end')}
      </h2>
      <ul {...stylex.props(styles.stages)}>
        {series.map((entry) => (
          <li
            key={entry.slug}
            {...stylex.props(styles.item)}
          >
            <SeriesCard
              entry={entry}
              size="stage"
            />
          </li>
        ))}
        {coming.map((announced) => (
          <li
            key={announced.slug}
            {...stylex.props(styles.item)}
          >
            <ComingCard
              name={announced.name[locale]}
              size="stage"
            />
          </li>
        ))}
      </ul>
      <a
        href={REQUEST_URL}
        {...stylex.props(styles.requestLine)}
      >
        {t('hub.request')}
      </a>
    </section>
  )
}
