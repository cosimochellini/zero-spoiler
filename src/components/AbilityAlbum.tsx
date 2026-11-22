import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useDeferredValue, useId } from 'react'

import { AbilityControls } from '~/components/AbilityControls'
import { AbilityTile, FoggedAbilityTile } from '~/components/AbilityTile'
import { FogBand, type FogTitles } from '~/components/FogBand'
import { fogNote } from '~/components/fogWords'
import { matchesIn } from '~/components/recordMatches'
import { SearchNoMatch, SearchResults } from '~/components/SearchField'
import { PlateHead } from '~/components/SpecimenBands'
import { styles } from '~/components/SpecimenBands.styles'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { useOpenEntries } from '~/lib/progress/openEntries'
import {
  type AbilityParams,
  parseAbilityParams,
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
  hintUnset: 'abilities.foggedHintUnset',
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
 * of a user the reader has reached too; a type chip keeps one plate. A query
 * with no match folds the plates and the band away behind one line and a
 * button that clears it: that depends on open names only, so it says nothing
 * of a covered ability.
 *
 * With no ability open there is nothing to search or to pick, so the bar is
 * left out and the fog band leads the page (#1376).
 */
export function AbilityAlbum({
  onParams,
  params: address,
  peek,
  sheet: { bands, covered },
}: AbilityAlbumProps): ReactElement {
  const fieldId = useId()
  const params = reachedAbilityParams(address, bands)
  // The field is never deferred; the plates behind it are.
  const needle = useDeferredValue(foldName((params.q ?? '').trim()))
  const shown = shownOf(bands, params.type)
  const count = matchesIn(
    shown.flatMap((band) => band.open),
    needle,
  ).length
  const searchable = bands.length > 0
  // Reported here and not by the bar, which an empty listing leaves out.
  useOpenEntries(bands.reduce((sum, band) => sum + band.open.length, 0))

  return (
    <div {...stylex.props(styles.sheet)}>
      {searchable ?
        <AbilityControls
          bands={bands}
          count={count}
          fieldId={fieldId}
          onParams={onParams}
          params={params}
        />
      : null}

      <AbilityResults
        covered={covered}
        fieldId={fieldId}
        needle={needle}
        noMatch={searchable && needle !== '' && count === 0}
        onClear={() => {
          onParams(parseAbilityParams({ ...params, q: '' }), true)
        }}
        peek={peek}
        shown={shown}
      />
    </div>
  )
}

/** The plates a type chip keeps on the page: all of them, or its own. */
function shownOf(
  bands: AbilityBandView[],
  type: AbilityParams['type'],
): AbilityBandView[] {
  return bands.filter((band) => type === undefined || typeOf(band) === type)
}

/**
 * The plates and the fog band. While the query has no match they are folded
 * away behind the button that clears it and a line on what is under fog:
 * hidden rather than unmounted, so a lifted tile is still lifted once the
 * query is cleared.
 */
function AbilityResults({
  covered,
  fieldId,
  needle,
  noMatch,
  onClear,
  peek,
  shown,
}: Pick<AbilityAlbumProps, 'peek'> & {
  covered: AbilitySheetView['covered']
  fieldId: string
  needle: string
  noMatch: boolean
  onClear: () => void
  shown: AbilityBandView[]
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const { bookmark } = useBookmark()

  return (
    <>
      {noMatch ?
        <SearchNoMatch
          clearLabel={t('abilities.searchClear')}
          fieldId={fieldId}
          note={fogNote(t, ABILITY_FOG, { bookmark, count: covered.length })}
          onClear={onClear}
        />
      : null}
      <AbilityFolded
        covered={covered}
        fieldId={fieldId}
        folded={noMatch}
        needle={needle}
        peek={peek}
        shown={shown}
      />
    </>
  )
}

/** The plates and the fog band themselves. */
function AbilityFolded({
  covered,
  fieldId,
  folded,
  needle,
  peek,
  shown,
}: Pick<AbilityAlbumProps, 'peek'> & {
  covered: AbilitySheetView['covered']
  fieldId: string
  folded: boolean
  needle: string
  shown: AbilityBandView[]
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)

  return (
    <SearchResults folded={folded}>
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
    </SearchResults>
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
