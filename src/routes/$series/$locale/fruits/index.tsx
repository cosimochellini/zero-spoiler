import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { FruitsAlbum } from '~/components/FruitsAlbum'
import { VisitorBanner } from '~/components/VisitorBanner'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { type AlbumView, parseFruitParams } from '~/lib/search/fruitParams'
import { seriesPageHead } from '~/routes/$locale/-head'
import { requirePage } from '~/routes/$series/$locale/-found'
import { useAddressParams } from '~/routes/$series/$locale/-params'
import { usePeek } from '~/routes/$series/$locale/-peek'
import {
  primeAlbum,
  useFruitAlbum,
} from '~/routes/$series/$locale/fruits/-album'
import { liftFruit, loadFruits } from '~/server/api'

export const Route = createFileRoute('/$series/$locale/fruits/')({
  // The view, the kind and the query live in the address, so a filtered
  // album can be shared and Back steps through the picks. An unknown value
  // falls back to its default.
  validateSearch: parseFruitParams,
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'fruits')
  },
  // The marquee and the counts, awaited. The plates are not in the page the
  // server renders: the browser asks for them (`-album`), here on a
  // navigation, so they come with the page, and after hydration otherwise.
  loader: async ({ context }) => {
    const data = { series: context.series.slug, locale: context.locale }
    const [sheet] = await Promise.all([loadFruits({ data }), primeAlbum(data)])

    return sheet
  },
  head: (match) => seriesPageHead('fruits', match),
  component: FruitsPage,
})

/** The line under the heading, which says how the view groups the fruits. */
const COUNT_KEY: Record<AlbumView, TranslationKey<'one-piece'>> = {
  faction: 'fruits.countFaction',
  saga: 'fruits.countSaga',
  type: 'fruits.count',
}

/**
 * The devil fruits page, an album of tiles.
 *
 * The saga the reader is watching leads (`SagaMarquee`): its name, its open
 * fruits so far as a rail of large tiles, the latest first. Then an album:
 * the brand line and a count, then three plates — Paramecia, Zoan, Logia —
 * each a pinned head over a grid of tiles. The saga view (`?view=saga`)
 * groups the same tiles by the saga the story names them in instead, up to
 * the bookmark's, with every later saga one band of fog. The faction view
 * (`?view=faction`) groups them by the faction each open eater stands in at
 * the bookmark, a fruit under every one of them, with every covered fruit one
 * band of fog. A tile is the drawing,
 * large, and the name, as one link; under them the eater the reader has
 * reached, as a link of their own, and the kind. Two across on a phone, up
 * to six on a wide page. The sentence is the fruit page's.
 *
 * A control bar pins over the plates: the search, the view and the kind
 * chips, all three kept in the address so a filtered album can be shared and
 * Back steps through the picks. On a phone it folds to one row.
 *
 * The search filters the open tiles only, and the covered ones keep their own
 * band at the foot of every plate, which is the spoiler rule applied to a
 * text field. A covered tile is a `FogTile`: the same drifting fog for every
 * fruit, lifted by hand in two presses.
 *
 * With no bookmark the server draws the page at the end of the demo, under
 * the visitor banner (#1432).
 */
function FruitsPage(): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const { filed, marquee, plates } = Route.useLoaderData()
  const { album, retry } = useFruitAlbum()

  const peek = usePeek(liftFruit)
  const [params, onParams] = useAddressParams(parseFruitParams)
  const countKey = COUNT_KEY[params.view ?? 'type']

  return (
    <ArchivePage
      count={t(countKey, { count: filed })}
      title={t('fruits.title')}
    >
      <VisitorBanner />
      <FruitsAlbum
        album={album}
        marquee={marquee}
        onParams={onParams}
        onRetry={retry}
        params={params}
        peek={peek}
        plates={plates}
      />
    </ArchivePage>
  )
}
