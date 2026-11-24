import { lazyRouteComponent } from '@tanstack/react-router'

import type { LandingView } from '~/lib/view/records'

// A chunk each, because the loader sends one branch and the other would ride
// in every visitor's first load (#1573). Router's `lazyRouteComponent` rather
// than React's `lazy`, for its `preload`: see `preloadLanding`. A file's name
// is its chunk's, which the route's `head` preloads.
export const OnboardingLanding = lazyRouteComponent(
  async () => import('~/components/OnboardingLanding'),
  'OnboardingLanding',
)
export const HomeLanding = lazyRouteComponent(
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
