import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { PowerBoard } from '~/components/PowerBoard'
import { seriesPageHead } from '~/routes/$locale/-head'
import { requirePage } from '~/routes/$series/$locale/-found'
import { loadPower } from '~/server/api'

export const Route = createFileRoute('/$series/$locale/power')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'power')
  },
  loader: async ({ context }) =>
    loadPower({
      data: { series: context.series.slug, locale: context.locale },
    }),
  head: (match) => seriesPageHead('power', match),
  component: PowerPage,
})

/** Who holds the world's seats of power, as far as the reader has read. */
function PowerPage(): ReactElement {
  return <PowerBoard page={Route.useLoaderData()} />
}
