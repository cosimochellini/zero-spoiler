/**
 * The two landings: the onboarding for a visitor with no bookmark, the home
 * page for a reader with one.
 *
 * A sibling of the route module rather than a shared component, because it
 * is only ever this page; the leading `-` keeps the file out of the
 * generated route tree, and taking the loader data as a prop is what lets a
 * test render either branch.
 */
import type { ReactElement } from 'react'

import type { DemoDrawings, LandingView } from '~/lib/view/records'

import { HomeLanding, OnboardingLanding } from './-landing.branches'

/** What the loader sent. */
export interface LandingPageProps {
  landing: LandingView
  loadDrawings?: (() => Promise<DemoDrawings>) | undefined
}

/**
 * The branch is the loader's, so it moves in the same transition as the data
 * when the bookmark is saved or cleared.
 */
export function LandingPage({
  landing,
  loadDrawings,
}: LandingPageProps): ReactElement {
  return 'onboarding' in landing ?
      <OnboardingLanding
        // A new start, as when a trial ends, sets the dial again.
        key={JSON.stringify(landing.onboarding.start)}
        {...landing.onboarding}
        loadDrawings={loadDrawings}
      />
    : <HomeLanding {...landing.home} />
}
