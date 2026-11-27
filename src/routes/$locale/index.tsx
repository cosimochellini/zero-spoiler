import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { SeriesHub } from '~/components/SeriesHub'
import type { LoadTour } from '~/components/useTour'
import { readPlain } from '~/lib/plain'
import { describeNamedPage } from '~/routes/$locale/-head'
import { loadTour } from '~/server/api'
import { loadHub } from '~/server/series'

/** The tour's records of one series, asked when the tour comes near (#1703). */
const tourOf: LoadTour = async (series, locale) =>
  readPlain(await loadTour({ data: { series, locale } }))

/** The hub: every series, its count, and the reader's bookmark on it. */
export const Route = createFileRoute('/$locale/')({
  loader: async () => loadHub(),
  head: ({ match, params }) =>
    describeNamedPage({
      locale: params.locale,
      pathname: match.pathname,
      kind: 'index',
      titleKey: 'hub.title',
      descriptionKey: 'hub.description',
    }),
  // The cards carry the reader's bookmarks, read from their cookies.
  headers: () => ({ 'Cache-Control': 'private, no-store' }),
  component: Hub,
})

function Hub(): ReactElement {
  const { coming, series } = Route.useLoaderData()
  return (
    <SeriesHub
      coming={coming}
      load={tourOf}
      series={series}
    />
  )
}
