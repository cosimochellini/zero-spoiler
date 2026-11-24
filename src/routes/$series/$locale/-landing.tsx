/**
 * The two landings: the onboarding for a visitor with no bookmark, the home
 * page for a reader with one.
 *
 * A sibling of the route module rather than a shared component, because it
 * is only ever this page; the leading `-` keeps the file out of the
 * generated route tree, and taking the loader data as a prop is what lets a
 * test render either branch.
 */
import { lazyRouteComponent } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import type { DemoDrawings, LandingView } from '~/lib/view/records'

// A chunk each, because the loader sends one branch and the other would ride
// in every visitor's first load (#1573). Router's `lazyRouteComponent` rather
// than React's `lazy`, for its `preload`: see `preloadLanding`. A file's name
// is its chunk's, which the route's `head` preloads.
const OnboardingLanding = lazyRouteComponent(
  async () => import('~/components/OnboardingLanding'),
  'OnboardingLanding',
)
const HomeLanding = lazyRouteComponent(
  async () => import('~/components/HomeLanding'),
  'HomeLanding',
)

/**
 * The loader's last step: fetch the branch it chose. The page is rendered
 * with the branch in hand and never suspends on it. A render that suspended
 * would send the page's empty fallback first and the branch after it, in a
 * later part of the document, where the document is meant to carry the one
 * page whole, for everyone. Hydration, which has no loader, waits on the
 * chunk the head preloaded.
 */
export async function preloadLanding(landing: LandingView): Promise<void> {
  await ('onboarding' in landing ? OnboardingLanding : HomeLanding).preload?.()
}

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
