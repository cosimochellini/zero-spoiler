import type { ReactElement, ReactNode } from 'react'

import { ControlBar } from '~/components/ControlBar'
import { SearchField } from '~/components/SearchField'
import { useT } from '~/i18n/LocaleContext'

/**
 * The search, pinned in a control bar as the other listings pin theirs, so
 * the field is in reach from any shelf of a page this long (#1379). Its
 * folded row on a phone reads the query, or "All characters" with none.
 */
export function CharacterSearch({
  fieldId,
  onQuery,
  query,
  status,
}: {
  fieldId: string
  onQuery: (query: string) => void
  query: string
  status: ReactNode
}): ReactElement {
  const t = useT()
  const trimmed = query.trim()

  return (
    <ControlBar
      searchLabel={t('characters.searchOpen')}
      summary={trimmed === '' ? t('characters.bookTitle') : `“${trimmed}”`}
      toggleLabel={t('characters.searchLabel')}
    >
      <SearchField
        clearLabel={t('characters.searchClear')}
        fieldId={fieldId}
        label={t('characters.searchLabel')}
        onQuery={onQuery}
        placeholder="Nami"
        query={query}
        status={status}
      />
    </ControlBar>
  )
}
