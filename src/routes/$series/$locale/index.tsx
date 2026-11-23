import { createFileRoute } from '@tanstack/react-router'
import { type ReactElement, useCallback } from 'react'

import { isLocale } from '~/i18n/locales'
import type { SeriesSlug } from '~/i18n/types'
import { readPlain } from '~/lib/plain'
import { readTrial } from '~/lib/progress/readBookmark'
import { describeNamedPage } from '~/routes/$locale/-head'
import { LandingPage } from '~/routes/$series/$locale/-landing'
import { loadDemoDrawings, loadHome } from '~/server/api'

export const Route = createFileRoute('/$series/$locale/')({
  component: Landing,
  // The page is the reader's point, so it is awaited rather than streamed.
  // The server reads the bookmark from the request and sends back only what
  // the reader has reached: with no bookmark, the onboarding with East Blue
  // and nothing past it; with one, the arc they are in, the stories concluded in it,
  // the characters those stories name. Nothing past the bookmark is in it.
  loader: async ({ context }) =>
    loadHome({ data: { series: context.series.slug, locale: context.locale } }),
  // A trial starts on a click that leaves this page, so the page kept from
  // before it was read with no trial point: drawn from it after Back, the
  // dial stood at 1 and "I'm here" saved episode 1 (#1399). On a trial the
  // page is read again each time it is entered; otherwise the kept page
  // stands as long as the router keeps it.
  shouldReload: ({ cause, context }) =>
    cause === 'enter' && readTrial(context.series) !== null ? true : undefined,
  head: (context) =>
    isLocale(context.params.locale) ?
      describeNamedPage<SeriesSlug>({
        copy: context.match.context.copy,
        descriptionKey: 'site.description',
        kind: 'landing',
        locale: context.params.locale,
        pathname: context.match.pathname,
        titleKey: 'site.title',
      })
    : {},
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
