import * as stylex from '@stylexjs/stylex'
import { lazy, type ReactElement, Suspense, useMemo, useRef } from 'react'

import { styles } from '~/components/HubTour.styles'
import type { LoadTour } from '~/components/useTour'
import { useTourScroll } from '~/components/useTourScroll'
import { useT } from '~/i18n/LocaleContext'
import type { HubSeries } from '~/lib/view/hub'
import { TOUR_ID, type TourStep, tourStepsFor } from '~/lib/view/tourSteps'
import { THEMES } from '~/styles/themes'

// Its own chunk: the screen and its records load once the tour is near, so
// neither rides in the hub's first load (`client-budget`).
const TourScreen = lazy(async () => {
  const { TourScreen: screen } = await import('./TourScreen')
  return { default: screen }
})

/**
 * The hub's tour (#1703): six steps of text beside a screen that stays in
 * view, on a phone above them. Scrolling a step moves the screen's bookmark
 * through the series' demo; its slider moves it by hand until the next step.
 *
 * The steps' words are on the page from the server, so the tour reads with
 * no script. The screen and its records, the demo's, load apart
 * (`TourScreen`, `loadTour`).
 */
export function HubTour({
  load,
  series,
}: {
  load: LoadTour
  series: HubSeries[]
}): ReactElement {
  const t = useT()
  const steps = useMemo(() => tourStepsFor(series), [series])
  const sectionRef = useRef<HTMLElement>(null)
  const blocksRef = useRef<(HTMLElement | null)[]>([])
  const { active, hold, near, point } = useTourScroll(steps, {
    blocksRef,
    sectionRef,
  })
  const step = steps[active]

  return (
    <section
      aria-labelledby={TOUR_ID}
      ref={sectionRef}
      {...stylex.props(styles.tour)}
    >
      <div {...stylex.props(styles.head)}>
        <h2
          id={TOUR_ID}
          {...stylex.props(styles.title)}
        >
          {t('hub.tour.title')}
        </h2>
        <p {...stylex.props(styles.lede)}>{t('hub.tour.lede')}</p>
      </div>
      <div {...stylex.props(styles.stage)}>
        <Screen
          load={load}
          near={near}
          onPoint={hold}
          point={point}
          series={series}
          step={step}
        />
        <ol {...stylex.props(styles.steps)}>
          {steps.map((entry, index) => (
            <Words
              key={entry.key}
              blockRef={(element) => {
                blocksRef.current[index] = element
              }}
              here={index === active}
              step={entry}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

/** One step's words: in view while its block scrolls, quieter when not read. */
function Words({
  blockRef,
  here,
  step,
}: {
  blockRef: (element: HTMLElement | null) => void
  here: boolean
  step: TourStep
}): ReactElement {
  const t = useT()

  return (
    <li
      data-step={step.key}
      ref={blockRef}
      {...stylex.props(styles.block, step.scrub && styles.long)}
    >
      <div {...stylex.props(styles.words)}>
        <h3 {...stylex.props(styles.stepTitle, !here && styles.resting)}>
          {t(`hub.tour.${step.key}.title`)}
        </h3>
        <p {...stylex.props(styles.stepBody, !here && styles.resting)}>
          {t(`hub.tour.${step.key}.body`)}
        </p>
      </div>
    </li>
  )
}

/**
 * The screen's frame, in the colours of the series it shows; its paper
 * changes with the series, as a page's would. What it shows loads once the
 * tour is near.
 */
function Screen({
  load,
  near,
  onPoint,
  point,
  series,
  step,
}: {
  load: LoadTour
  near: boolean
  onPoint: (value: number) => void
  point: number
  series: HubSeries[]
  step: TourStep | undefined
}): ReactElement {
  const theme = series.find(({ slug }) => slug === step?.series)?.theme

  return (
    <div
      {...stylex.props(
        theme === undefined ? null : THEMES[theme],
        styles.screen,
      )}
    >
      {near && step !== undefined ?
        <Suspense fallback={null}>
          <TourScreen
            load={load}
            onPoint={onPoint}
            point={point}
            series={series}
            step={step}
          />
        </Suspense>
      : null}
    </div>
  )
}
