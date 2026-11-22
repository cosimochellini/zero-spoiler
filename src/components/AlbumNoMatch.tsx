import type { ReactElement } from 'react'

import { FRUIT_FOG } from '~/components/albumGrouping'
import { fogNote } from '~/components/fogWords'
import { SearchNoMatch } from '~/components/SearchField'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { type FruitParams, fruitParams } from '~/lib/search/fruitParams'
import type { FruitBandView } from '~/lib/view/records'

/**
 * What stands in for the album while the query finds no open fruit: the
 * button that clears it, and how many fruits are under fog, if any.
 */
export function AlbumNoMatch({
  bands,
  fieldId,
  onParams,
  params,
}: {
  /** The plates on the page: the picked kind's, or all of them. */
  bands: FruitBandView[]
  fieldId: string
  onParams: (next: FruitParams, replace: boolean) => void
  params: FruitParams
}): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const { bookmark } = useBookmark()
  const covered = bands.reduce((sum, band) => sum + band.covered.length, 0)

  return (
    <SearchNoMatch
      clearLabel={t('fruits.searchClear')}
      fieldId={fieldId}
      note={fogNote(t, FRUIT_FOG, { bookmark, count: covered })}
      onClear={() => {
        onParams(
          fruitParams({
            form: params.form ?? 'all',
            query: '',
            view: params.view ?? 'type',
          }),
          true,
        )
      }}
    />
  )
}
