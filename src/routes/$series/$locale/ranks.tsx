import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { PowerBoard } from '~/components/PowerBoard'
import { seriesPageHead } from '~/routes/$locale/-head'
import { requirePage } from '~/routes/$series/$locale/-found'
import { loadPower } from '~/server/api'

/** The ranks page; `/power` until #1194, which `movedPageRedirect` sends here. */
export const Route = createFileRoute('/$series/$locale/ranks')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'ranks')
  },
  loader: async ({ context }) =>
    loadPower({
      data: { series: context.series.slug, locale: context.locale },
    }),
  head: (match) => seriesPageHead('ranks', match),
  component: RanksPage,
})

/** Who holds the world's ranks, as far as the reader has read. */
function RanksPage(): ReactElement {
  return <PowerBoard page={Route.useLoaderData()} />
}
