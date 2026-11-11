import type { ReactElement } from 'react'

import { CoveredTile, UsedTile } from '~/components/AlbumTile'
import {
  type EaterMatch,
  eaterMatch,
  type Match,
} from '~/components/recordMatches'
import { onlyUnder, useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type {
  EaterView,
  FruitForm,
  FruitView,
  Slot,
  SpecimenView,
} from '~/lib/view/records'

/** How wide a covered tile's number is printed. `01`, never `1`. */
const NUMBER_WIDTH = 2

const FORM_KEY: Record<FruitForm, TranslationKey<'one-piece'>> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

/** The eater a tile shows when no search picked one: the first. */
const FIRST_EATER: EaterMatch = { at: 0, highlight: null }

/** A tile told of no eaters: a covered one lifted by hand. */
const NO_EATERS: EaterView[] = []

/** One place in the album: what fills it, and where it sits on its plate. */
export interface FruitTileProps {
  /** Which eater an open tile shows, and what of their name a search matched. */
  eater?: EaterMatch
  /** The eaters the reader has reached, earliest first. Covered ones are not sent. */
  eaters?: EaterView[]
  /** The plate this tile sits on, so a covered tile still says which it is. */
  form: FruitForm
  highlight?: [number, number] | null
  /** Zero-based within its plate. Only a covered tile prints it, plus one. */
  index: number
  /**
   * Whether the tile may travel to the fruit's page. A fruit on the page
   * twice (the faction view) travels from its first tile only: a name may be
   * on one element of a page only.
   */
  morph?: boolean
  peek: (handle: string) => Promise<FruitView>
  slot: Slot<FruitView>
}

/**
 * One tile of the album: the drawing large, the name under it, who ate it,
 * and the kind. Open, the drawing and the name are one link to the fruit's
 * page and the eater another to theirs: two targets, side by side, since a
 * link may not hold a link.
 *
 * Under fog the tile has no link, no name and no drawing in the DOM: the slug
 * would spell the name and the drawing would say as much (#136). It is a
 * `FogTile`: the same drifting fog for every fruit, and under it only the
 * promise (a number, the kind and the episode the story names it in). Lifted
 * by hand, the fog clears and the drawing draws itself in.
 */
export function FruitTile({
  eater = FIRST_EATER,
  eaters = NO_EATERS,
  form,
  highlight = null,
  index,
  morph = true,
  peek,
  slot,
}: FruitTileProps): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const onePieceThreshold = useThreshold('one-piece')

  if (slot.open) {
    return (
      <UsedTile
        eater={eater}
        foot={t(FORM_KEY[form])}
        highlight={highlight}
        kind="fruit"
        morph={morph}
        record={slot.record}
        said={(count) =>
          count === 1 ?
            t('fruits.moreEatersOne')
          : t('fruits.moreEaters', { count })
        }
        users={eaters}
      />
    )
  }

  const threshold = onlyUnder(onePieceThreshold, 'one-piece')

  return (
    <CoveredTile
      covered={slot.covered}
      kind="fruit"
      lines={[
        `${t('fruits.specimen', {
          index: String(index + 1).padStart(NUMBER_WIDTH, '0'),
        })} · ${t(FORM_KEY[form])}`,
        threshold('fruit.opensAt', slot.covered),
      ]}
      peek={peek}
      phase={index}
    />
  )
}

/**
 * The open tiles a search found, in order, each showing the eater the search
 * matched, or the one a group picked for it (`eater`). An open tile prints no
 * number, so none is passed.
 */
export function OpenTiles({
  matches,
  needle,
  peek,
}: {
  matches: (Match<SpecimenView> & { eater?: EaterMatch; morph?: boolean })[]
  needle: string
  peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  return (
    <>
      {matches.map(({ eater, entry, match, morph = true }) => {
        return (
          <FruitTile
            key={`open-${entry.id}`}
            eater={eater ?? eaterMatch(entry, needle)}
            eaters={entry.eaters}
            form={entry.form}
            highlight={match.highlight}
            index={0}
            morph={morph}
            peek={peek}
            slot={{ open: true, record: entry }}
          />
        )
      })}
    </>
  )
}
