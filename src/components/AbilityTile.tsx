import type { ReactElement } from 'react'

import { CoveredTile, UsedTile } from '~/components/AlbumTile'
import { eaterMatch } from '~/components/recordMatches'
import { onlyUnder, useSeriesOnlyT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { typeLabel } from '~/lib/search/abilityParams'
import type { AbilityView } from '~/lib/view/abilities'
import type { CoveredRecord } from '~/lib/view/records'

const SERIES = 'hunter-x-hunter'

/** How wide a covered tile's number is printed. `01`, never `1`. */
const NUMBER_WIDTH = 2

/**
 * An open ability's tile: the drawing and the name as one link to its page,
 * the user the search found (or the first), and its Nen type at the foot,
 * or that the story had not told it.
 */
export function AbilityTile({
  highlight,
  needle,
  record,
}: {
  highlight: [number, number] | null
  /** The folded query, which picks the user the tile shows. */
  needle: string
  record: AbilityView
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)

  return (
    <UsedTile
      eater={eaterMatch(
        { eaters: record.users, folded: record.folded },
        needle,
      )}
      foot={typeLabel(t, record.nen ?? 'none')}
      highlight={highlight}
      kind="ability"
      morph={false}
      record={record}
      said={(count) =>
        count === 1 ?
          t('abilities.moreUsersOne')
        : t('abilities.moreUsers', { count })
      }
      users={record.users}
    />
  )
}

/**
 * A covered ability's tile: a number and the episode it is first shown in,
 * and no Nen type, so the fog says nothing a covered record may not.
 */
export function FoggedAbilityTile({
  covered,
  index,
  peek,
}: {
  covered: CoveredRecord
  /** Zero-based within the fog band; printed plus one. */
  index: number
  peek: (handle: string) => Promise<AbilityView>
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const threshold = onlyUnder(useThreshold(SERIES), SERIES)

  return (
    <CoveredTile
      covered={covered}
      kind="ability"
      lines={[
        t('abilities.specimen', {
          index: String(index + 1).padStart(NUMBER_WIDTH, '0'),
        }),
        threshold('ability.opensAt', covered),
      ]}
      peek={peek}
      phase={index}
    />
  )
}
