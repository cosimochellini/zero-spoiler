import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useDeferredValue, useId } from 'react'

import { AbilityControls } from '~/components/AbilityControls'
import { AbilityTile, FoggedAbilityTile } from '~/components/AbilityTile'
import { FogBand, type FogTitles } from '~/components/FogBand'
import { matchesIn } from '~/components/recordMatches'
import { PlateHead } from '~/components/SpecimenBands'
import { styles } from '~/components/SpecimenBands.styles'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import {
  type AbilityParams,
  reachedAbilityParams,
  typeLabel,
  typeOf,
} from '~/lib/search/abilityParams'
import { foldName } from '~/lib/search/fold'
import type {
  AbilityBandView,
  AbilitySheetView,
  AbilityView,
} from '~/lib/view/abilities'

const SERIES = 'hunter-x-hunter'

/** What the fog band calls itself at each count. */
const ABILITY_FOG: FogTitles<typeof SERIES> = {
  allOpen: 'abilities.allOpen',
  hint: 'abilities.foggedHint',
  many: 'abilities.foggedTitle',
  one: 'abilities.foggedTitleOne',
}

/** What the page is built from: the sheet, the picks, the peek. */
export interface AbilityAlbumProps {
  /** `replace` for the query, so typing leaves no history entry per letter. */
  onParams: (next: AbilityParams, replace: boolean) => void
  /** The picks and the query, read from the address. */
  params: AbilityParams
  peek: (handle: string) => Promise<AbilityView>
  sheet: AbilitySheetView
}

/**
 * The abilities page's album: the control bar, a plate per Nen type an open
 * ability has, the plate of those with no type told, and one fog band for
 * every covered ability after them all. A covered ability sits in no plate,
 * so the page never says its type.
 *
 * The search filters the open tiles only, and finds an ability by the name
 * of a user the reader has reached too; a type chip keeps one plate.
 */
export function AbilityAlbum({
  onParams,
  params: address,
  peek,
  sheet: { bands, covered },
}: AbilityAlbumProps): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const fieldId = useId()
  const params = reachedAbilityParams(address, bands)
  // The field is never deferred; the plates behind it are.
  const needle = useDeferredValue(foldName((params.q ?? '').trim()))
  const shown = bands.filter(
    (band) => params.type === undefined || typeOf(band) === params.type,
  )

  return (
    <div {...stylex.props(styles.sheet)}>
      <AbilityControls
        bands={bands}
        count={
          matchesIn(
            shown.flatMap((band) => band.open),
            needle,
          ).length
        }
        fieldId={fieldId}
        onParams={onParams}
        params={params}
      />

      {shown.map((band) => {
        return (
          <AbilityPlate
            key={typeOf(band)}
            band={band}
            headingId={`${fieldId}-${typeOf(band)}`}
            needle={needle}
          />
        )
      })}

      <FogBand
        count={covered.length}
        headingId={`${fieldId}-fog`}
        level="h2"
        t={t}
        words={ABILITY_FOG}
      >
        <ul {...stylex.props(styles.grid)}>
          {covered.map((entry, at) => {
            return (
              <FoggedAbilityTile
                key={`fog-${entry.handle}`}
                covered={entry}
                index={at}
                peek={peek}
              />
            )
          })}
        </ul>
      </FogBand>
    </div>
  )
}

/** One plate: its count, its Nen type, and its open tiles the query finds. */
function AbilityPlate({
  band,
  headingId,
  needle,
}: {
  band: AbilityBandView
  headingId: string
  needle: string
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const matches = matchesIn(band.open, needle)

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.plate)}
    >
      <PlateHead
        headingId={headingId}
        label={countOf(t, band.open.length)}
        lede={band.nen === null ? t('abilities.noTypeLede') : undefined}
        title={typeLabel(t, typeOf(band))}
      />

      {matches.length === 0 ? null : (
        <ul {...stylex.props(styles.grid)}>
          {matches.map(({ entry, match }) => {
            return (
              <AbilityTile
                key={`open-${entry.id}`}
                highlight={match.highlight}
                needle={needle}
                record={entry}
              />
            )
          })}
        </ul>
      )}
    </section>
  )
}

/** How many abilities a plate holds. One and many are two sentences. */
function countOf(t: Translate<typeof SERIES>, count: number): string {
  return count === 1 ?
      t('abilities.bandCountOne')
    : t('abilities.bandCount', { count })
}
