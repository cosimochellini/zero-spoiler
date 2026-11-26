import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useState } from 'react'

import { styles } from '~/components/TourScreen.styles'
import {
  BondsView,
  FocusView,
  GridView,
  GroupsView,
  type ViewProps,
} from '~/components/TourViews'
import { type LoadTour, useTour } from '~/components/useTour'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { HubSeries } from '~/lib/view/hub'
import type { TourStep, TourStepKey } from '~/lib/view/tourSteps'
import { settleStyles } from '~/styles/settle'

/** What each step draws on the screen. */
const VIEWS: Record<TourStepKey, (props: ViewProps) => null | ReactElement> = {
  anyway: GridView,
  bonds: BondsView,
  bookmark: GridView,
  fog: GridView,
  groups: GroupsView,
  grows: FocusView,
}

/** The slider's id, so the episode read out above it names it. */
const SLIDER_ID = 'tour-point'

/**
 * The tour's screen (#1703): one series' demo at the tour's point, drawn as
 * the wiki draws it. A record the point has reached is open, with the facts
 * it has reached; one it has not is under fog, its threshold and nothing
 * else, though the demo sends its name. Every record here is the demo's
 * (`tourPage`), so the slider can go anywhere inside it.
 */
export function TourScreen({
  load,
  onPoint,
  point,
  series,
  step,
}: {
  load: LoadTour
  onPoint: (value: number) => void
  point: number
  series: HubSeries[]
  step: TourStep
}): ReactElement {
  const { locale } = useLocale()
  const t = useT()
  const tour = useTour(load, step.series, locale)
  const [opened, setOpened] = useState<null | string>(null)
  const value = Math.min(point, step.last)
  const name =
    series.find(({ slug }) => slug === step.series)?.name[locale] ?? ''
  const View = VIEWS[step.key]

  return (
    <div
      aria-label={t('hub.tour.screen', { series: name })}
      role="group"
      {...stylex.props(styles.screen)}
    >
      <ScreenBar
        last={step.last}
        name={name}
        onPoint={onPoint}
        value={value}
      />
      {tour === undefined ? null : (
        <div
          key={step.key}
          {...stylex.props(styles.body, settleStyles.band)}
        >
          <View
            at={{ mode: 'episode', value }}
            onOpen={setOpened}
            opened={opened}
            step={step}
            tour={tour}
          />
        </div>
      )}
    </div>
  )
}

/** The screen's head: the series, the episode it stands at, and the slider. */
function ScreenBar({
  last,
  name,
  onPoint,
  value,
}: {
  last: number
  name: string
  onPoint: (value: number) => void
  value: number
}): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.bar)}>
      <span {...stylex.props(styles.mono, styles.series)}>{name}</span>
      <output
        aria-live="polite"
        htmlFor={SLIDER_ID}
        {...stylex.props(styles.point)}
      >
        {t('mark.episode', { threshold: value })}
      </output>
      <input
        aria-label={t('onboarding.unitEpisode')}
        id={SLIDER_ID}
        max={last}
        min={1}
        onChange={(event) => {
          onPoint(Number(event.currentTarget.value))
        }}
        type="range"
        value={value}
        {...stylex.props(styles.slider)}
      />
    </div>
  )
}
