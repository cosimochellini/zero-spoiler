import { createFileRoute } from '@tanstack/react-router'
import { type ReactElement, useCallback } from 'react'

import { isLocale } from '~/i18n/locales'
import type { SeriesSlug } from '~/i18n/types'
import { preloadChunk } from '~/lib/chunks'
import { readPlain } from '~/lib/plain'
import { readTrial } from '~/lib/progress/readBookmark'
import { describeNamedPage } from '~/routes/$locale/-head'
import { LandingPage } from '~/routes/$series/$locale/-landing'
import { preloadLanding } from '~/routes/$series/$locale/-landing.branches'
import { loadDemoDrawings, loadHome } from '~/server/api'

export const Route = createFileRoute('/$series/$locale/')({
  component: Landing,
  // The page is the reader's point, so it is awaited rather than streamed.
  // The server reads the bookmark from the request and sends back only what
  // the reader has reached: with no bookmark, the onboarding with East Blue
  // and nothing past it; with one, the arc they are in, the stories concluded in it,
  // the characters those stories name. Nothing past the bookmark is in it.
  loader: async ({ context }) => {
    const landing = await loadHome({
      data: { series: context.series.slug, locale: context.locale },
    })
    await preloadLanding(landing)
    return landing
  },
  // A trial starts on a click that leaves this page, so the page kept from
  // before it was read with no trial point: drawn from it after Back, the
  // dial stood at 1 and "I'm here" saved episode 1 (#1399). On a trial the
  // page is read again each time it is entered; otherwise the kept page
  // stands as long as the router keeps it.
  shouldReload: ({ cause, context }) =>
    cause === 'enter' && readTrial(context.series) !== null ? true : undefined,
  head: ({ loaderData, match, params }) => {
    if (!isLocale(params.locale)) {
      return {}
    }
    const page = describeNamedPage<SeriesSlug>({
      copy: match.context.copy,
      descriptionKey: 'site.description',
      kind: 'landing',
      locale: params.locale,
      pathname: match.pathname,
      titleKey: 'site.title',
    })
    const links = [...page.links]
    // The branch the loader chose is a chunk of its own (-landing.branches.ts):
    // fetched beside the entry, not once hydration has met it (#1573).
    if (loaderData !== undefined) {
      links.push(
        ...preloadChunk(
          'onboarding' in loaderData ? 'OnboardingLanding' : 'HomeLanding',
        ),
      )
    }
    return { ...page, links }
  },
})

/** The landing page, with the loader's data. */
function Landing(): ReactElement {
  const { series, locale } = Route.useRouteContext()
  const loadDrawings = useCallback(
    async () =>
      readPlain(
        await loadDemoDrawings({ data: { series: series.slug, locale } }),
      ),
    [series.slug, locale],
  )
  return (
    <LandingPage
      landing={Route.useLoaderData()}
      loadDrawings={loadDrawings}
    />
  )
}
