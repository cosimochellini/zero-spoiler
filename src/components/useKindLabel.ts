import { useCallback } from 'react'

import { onlyUnder, useSeriesT } from '~/i18n/LocaleContext'
import type { EntityKind } from '~/lib/view/records'

/**
 * A record's kind in the page's words. A devil fruit and a ship are One
 * Piece's kinds, and a Nen ability Hunter x Hunter's, so their labels come
 * through the series' own translate, and a record of such a kind on another
 * series' page throws.
 */
export function useKindLabel(): (kind: EntityKind) => string {
  const t = useSeriesT()
  const onePiece = useSeriesT('one-piece')
  const hunter = useSeriesT('hunter-x-hunter')

  return useCallback(
    (kind: EntityKind) => {
      if (kind === 'ability') {
        return onlyUnder(hunter, 'hunter-x-hunter')('kind.ability')
      }

      return kind === 'fruit' || kind === 'ship' ?
          onlyUnder(onePiece, 'one-piece')(`kind.${kind}`)
        : t(`kind.${kind}`)
    },
    [hunter, onePiece, t],
  )
}
