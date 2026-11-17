import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { FillerGuide } from '~/components/FillerGuide'
import { seriesPageHead } from '~/routes/$locale/-head'
import { requirePage } from '~/routes/$series/$locale/-found'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { liftFiller, loadFiller } from '~/server/api'

export const Route = createFileRoute('/$series/$locale/filler')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'filler')
  },
  // Awaited, so a skip range's `#ep-54` lands on a row that is in the first
  // paint.
  loader: async ({ context }) =>
    loadFiller({
      data: { series: context.series.slug, locale: context.locale },
    }),
  head: (match) => seriesPageHead('filler', match),
  component: FillerPage,
})

/** The filler guide, reached by its address only: it is not in the bar. */
function FillerPage(): ReactElement {
  return (
    <FillerGuide
      page={Route.useLoaderData()}
      peek={usePeek(liftFiller)}
    />
  )
}
