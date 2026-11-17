import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { AbilityAlbum } from '~/components/AbilityAlbum'
import { ArchivePage } from '~/components/ArchivePage'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import { useOpenEntries } from '~/lib/progress/openEntries'
import { parseAbilityParams } from '~/lib/search/abilityParams'
import { seriesPageHead } from '~/routes/$locale/-head'
import { requirePage } from '~/routes/$series/$locale/-found'
import { useAddressParams } from '~/routes/$series/$locale/-params'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { liftAbility, loadAbilities } from '~/server/api'

export const Route = createFileRoute('/$series/$locale/abilities/')({
  // The type picked and the query live in the address, so a filtered page
  // can be shared and Back steps through the picks.
  validateSearch: parseAbilityParams,
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'abilities')
  },
  loader: async ({ context }) =>
    loadAbilities({
      data: { series: context.series.slug, locale: context.locale },
    }),
  head: (match) => seriesPageHead('abilities', match),
  component: AbilitiesPage,
})

/**
 * Hunter x Hunter's Nen abilities page, an album of tiles: the brand line and a count, then the album
 * (`AbilityAlbum`).
 */
function AbilitiesPage(): ReactElement {
  const t = useSeriesOnlyT('hunter-x-hunter')
  const sheet = Route.useLoaderData()
  useOpenEntries(sheet.filed - sheet.covered.length)
  const [params, onParams] = useAddressParams(parseAbilityParams)

  return (
    <ArchivePage
      count={t(sheet.filed === 1 ? 'abilities.countOne' : 'abilities.count', {
        count: sheet.filed,
      })}
      title={t('abilities.title')}
    >
      <AbilityAlbum
        onParams={onParams}
        params={params}
        peek={usePeek(liftAbility)}
        sheet={sheet}
      />
    </ArchivePage>
  )
}
