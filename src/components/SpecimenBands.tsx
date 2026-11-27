import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useDeferredValue, useId } from 'react'

import {
  AlbumControls,
  type AlbumControlsProps,
} from '~/components/AlbumControls'
import { FRUIT_FOG, groupingOf } from '~/components/albumGrouping'
import { AlbumGroups } from '~/components/AlbumGroups'
import { AlbumNoMatch } from '~/components/AlbumNoMatch'
import { LoadFailed } from '~/components/BookmarkSkeleton'
import { FogBand } from '~/components/FogBand'
import { OpenTiles, PlateFog } from '~/components/FruitTile'
import { PlateHead } from '~/components/PlateHead'
import { matchesIn } from '~/components/recordMatches'
import { SearchResults } from '~/components/SearchField'
import { styles } from '~/components/SpecimenBands.styles'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { Translate, TranslationKey } from '~/i18n/types'
import { foldName } from '~/lib/search/fold'
import type { FruitParams } from '~/lib/search/fruitParams'
import type { FruitAlbumView, FruitPlateCount } from '~/lib/view/fruits'
import type { FruitBandView, FruitForm, FruitView } from '~/lib/view/records'

/** How wide a plate number is printed. `01`, never `1`. */
const NUMBER_WIDTH = 2

/** How many fruits a plate holds. One and many are two sentences. */
function countOf(t: Translate<'one-piece'>, count: number): string {
  return count === 1 ?
      t('fruits.bandCountOne')
    : t('fruits.bandCount', { count })
}

const LEDE_KEY: Record<FruitForm, TranslationKey<'one-piece'>> = {
  logia: 'fruits.lede.logia',
  paramecia: 'fruits.lede.paramecia',
  zoan: 'fruits.lede.zoan',
}

/** The plates and the groups of the saga and faction views. */
export type Album = Omit<FruitAlbumView, 'at'>

/** What the sheet is built from: the counts, the album, the picks, the peek. */
export interface SpecimenBandsProps {
  /** The plates and the groups, `null` until the page has them. */
  album: Album | null
  onParams: AlbumControlsProps['onParams']
  params: FruitParams
  peek: (handle: string) => Promise<FruitView>
  /** Asks for the album again; set only when it could not be fetched. */
  onRetry?: (() => void) | undefined
  /** Every plate's counts, which the bar prints before the album is here. */
  plates: FruitPlateCount[]
}

/**
 * The album: the control bar, then the plates down the page, each a numbered
 * label, a heading, and the fruits of that kind as a grid of tiles. In the
 * saga and faction views their groups take the plates' place (`AlbumGroups`),
 * under the same bar, which stays its container's first child so a pick of either view
 * scrolls back to where it pins.
 *
 * The search rule is the signal book's, applied to a different list: a
 * covered fruit is not on the page to be searched, so typing filters the open
 * tiles and leaves every fogged one exactly where it was. A kind chip keeps
 * one plate on the page. The count under the field is over the plates on the
 * page, so its total is the picked chip's number. A query with no match
 * folds the plates away behind one line and a button that clears it: that
 * depends on open names only, so it says nothing of a covered fruit.
 *
 * With no fruit open there is nothing to search or to pick, so the bar is
 * left out and the plates' fog bands lead the page (#1376).
 *
 * The bar is in the page the server sends; the plates come after, once the
 * browser has asked for the album, and until then the count is the chip's.
 */
export function SpecimenBands({
  album,
  onParams,
  onRetry,
  params,
  peek,
  plates,
}: SpecimenBandsProps): ReactElement {
  const fieldId = useId()
  // The field is never deferred; the plates behind it are.
  const needle = useDeferredValue(foldName((params.q ?? '').trim()))
  const count = foundIn(album, plates, { form: params.form, needle })
  const searchable = openIn(plates, undefined) > 0

  return (
    <div {...stylex.props(styles.sheet)}>
      {searchable ?
        <AlbumControls
          count={count}
          fieldId={fieldId}
          onParams={onParams}
          params={params}
          plates={plates}
        />
      : null}

      {album === null ?
        onRetry !== undefined && <AlbumFailed onRetry={onRetry} />
      : <AlbumResults
          album={album}
          fieldId={fieldId}
          found={count}
          needle={needle}
          onParams={onParams}
          params={params}
          peek={peek}
          searchable={searchable}
        />
      }
    </div>
  )
}

interface FoundInOptions {
  form: FruitForm | undefined
  needle: string
}

/** The open fruits the picks find: the chip's own number until the album. */
function foundIn(
  album: Album | null,
  plates: FruitPlateCount[],
  { form, needle }: FoundInOptions,
): number {
  return album === null ?
      openIn(plates, form)
    : matchesIn(
        shownOf(album.bands, form).flatMap((band) => band.open),
        needle,
      ).length
}

interface AlbumResultsProps extends Pick<
  SpecimenBandsProps,
  'onParams' | 'params' | 'peek'
> {
  album: Album
  fieldId: string
  /** The open fruits the query finds. */
  found: number
  needle: string
  /** False with no fruit open: no bar, so no query to clear. */
  searchable: boolean
}

/**
 * The plates or the groups, folded away while the query has no match. Hidden
 * rather than unmounted, so a lifted tile is still lifted once it is cleared.
 */
function AlbumResults({
  found,
  onParams,
  searchable,
  ...shown
}: AlbumResultsProps): ReactElement {
  const noMatch = searchable && shown.needle !== '' && found === 0

  return (
    <>
      {noMatch ?
        <AlbumNoMatch
          bands={shownOf(shown.album.bands, shown.params.form)}
          fieldId={shown.fieldId}
          onParams={onParams}
          params={shown.params}
        />
      : null}
      <SearchResults folded={noMatch}>
        <Plates {...shown} />
      </SearchResults>
    </>
  )
}

/** The plates a kind chip keeps on the page: all of them, or its own. */
function shownOf(
  bands: FruitBandView[],
  form: FruitForm | undefined,
): FruitBandView[] {
  return bands.filter((band) => form === undefined || band.form === form)
}

interface AlbumFailedProps {
  onRetry: () => void
}

/** The album could not be fetched: one line, and a button that asks again. */
function AlbumFailed({ onRetry }: AlbumFailedProps): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  return (
    <LoadFailed<'one-piece'>
      message="fruits.albumFailed"
      onRetry={onRetry}
      retry="fruits.albumRetry"
      t={t}
    />
  )
}

/** The open fruits of the picked plates, before the album says which match. */
function openIn(
  plates: FruitPlateCount[],
  form: FruitForm | undefined,
): number {
  return plates
    .filter((plate) => form === undefined || plate.form === form)
    .reduce((sum, plate) => sum + plate.opened, 0)
}

interface PlatesProps extends Pick<SpecimenBandsProps, 'params' | 'peek'> {
  album: Album
  fieldId: string
  needle: string
}

/** The plates shown, or the groups of the saga or faction view. */
function Plates({
  album: { bands, ...sent },
  fieldId,
  needle,
  params,
  peek,
}: PlatesProps): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const grouping = groupingOf(t, { ...sent, fieldId, view: params.view })

  if (grouping !== undefined) {
    return (
      <AlbumGroups
        bands={bands}
        fieldId={fieldId}
        form={params.form}
        needle={needle}
        peek={peek}
        {...grouping}
      />
    )
  }

  return (
    <>
      {shownOf(bands, params.form).map((band) => {
        return (
          <Plate
            key={band.form}
            band={band}
            fieldId={fieldId}
            index={bands.indexOf(band)}
            needle={needle}
            peek={peek}
          />
        )
      })}
    </>
  )
}

interface PlateProps {
  band: FruitBandView
  fieldId: string
  index: number
  needle: string
  peek: (handle: string) => Promise<FruitView>
}

/** One plate: its label, its heading, its open tiles and its fog band. */
function Plate({
  band,
  fieldId,
  index,
  needle,
  peek,
}: PlateProps): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const headingId = `${fieldId}-${band.form}`
  const matches = matchesIn(band.open, needle)

  return (
    <section
      aria-labelledby={headingId}
      {...stylex.props(styles.plate)}
    >
      <PlateHead
        headingId={headingId}
        label={`${t('fruits.plate', {
          index: String(index + 1).padStart(NUMBER_WIDTH, '0'),
        })} · ${countOf(t, band.total)}`}
        lede={t(LEDE_KEY[band.form])}
        title={t(`fruitForm.${band.form}`)}
      />

      {matches.length === 0 ? null : (
        <ul {...stylex.props(styles.grid)}>
          <OpenTiles
            matches={matches}
            needle={needle}
            peek={peek}
          />
        </ul>
      )}

      <FogBand
        count={band.covered.length}
        headingId={`${headingId}-fog`}
        t={t}
        words={FRUIT_FOG}
      >
        <PlateFog
          band={band}
          peek={peek}
        />
      </FogBand>
    </section>
  )
}
