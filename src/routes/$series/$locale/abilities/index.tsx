/* Hallmark · pre-emit critique: P4 H4 E4 S5 R5 V4 */
/* Hallmark · genre: atmospheric · macrostructure: Portfolio Grid · theme:
 *   the series' own (locked) · enrichment: Tier B hand-built SVG (each
 *   ability's own drawing) · nav: N9 edge-aligned (shared) · footer: Ft4
 *   colophon (shared)
 * · idea: "the fruits' album, plated by Nen type: a pinned control bar
 *   (search, type chips, both in the address) over a plate per type an open
 *   ability has, the abilities whose type the story had not told last, and
 *   one band of fog for every covered ability, so no plate says the type of
 *   one the reader has not reached"
 * · motion: the fog tiles' drift and clear (shared) */
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { AbilityAlbum } from '~/components/AbilityAlbum'
import { ArchivePage } from '~/components/ArchivePage'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
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
 * Hunter x Hunter's Nen abilities page (Hallmark macrostructure 18,
 * Portfolio Grid): the brand line and a count, then the album
 * (`AbilityAlbum`).
 */
function AbilitiesPage(): ReactElement {
  const t = useSeriesOnlyT('hunter-x-hunter')
  const sheet = Route.useLoaderData()
  const [params, onParams] = useAddressParams(parseAbilityParams)

  return (
    <ArchivePage
      count={t('abilities.count', { count: sheet.filed })}
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
