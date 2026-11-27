import type { HubSeries } from '~/lib/view/hub'

/** Where the "How it works" link sends the reader: the tour's heading. */
export const TOUR_ID = 'how-it-works'

/** A step of the tour, named as its words are keyed (`hub.tour.<key>`). */
export type TourStepKey =
  'anyway' | 'bonds' | 'bookmark' | 'fog' | 'groups' | 'grows'

/** One step of the hub's tour: what its words say and what the screen shows. */
export interface TourStep {
  /** The episode the screen stands at when the step does not scroll it. */
  at?: number
  key: TourStepKey
  /** The last episode of the series' demo: the end of the screen's slider. */
  last: number
  /** Whether scrolling through the step moves the screen's episode. */
  scrub: boolean
  series: string
}

/**
 * The tour, in order (#1703, owner 2026-11-26): One Piece shows the bookmark,
 * the fog, Show anyway and an entry that changes; Game of Thrones the houses;
 * Hunter x Hunter the relationships and the Nen abilities under fog.
 */
const STEPS: Omit<TourStep, 'last'>[] = [
  { key: 'bookmark', scrub: true, series: 'one-piece' },
  { at: 4, key: 'fog', scrub: false, series: 'one-piece' },
  { at: 4, key: 'anyway', scrub: false, series: 'one-piece' },
  { key: 'grows', scrub: true, series: 'one-piece' },
  { key: 'groups', scrub: true, series: 'game-of-thrones' },
  { key: 'bonds', scrub: true, series: 'hunter-x-hunter' },
]

/** The steps of the series the hub has open, so a closed one is skipped. */
export function tourStepsFor(
  open: Pick<HubSeries, 'demoLastEpisode' | 'slug'>[],
): TourStep[] {
  const lasts = new Map(
    open.map(({ demoLastEpisode, slug }) => [slug, demoLastEpisode]),
  )
  const steps: TourStep[] = []
  for (const step of STEPS) {
    const last = lasts.get(step.series)
    if (last !== undefined) {
      steps.push({ ...step, last })
    }
  }
  return steps
}
