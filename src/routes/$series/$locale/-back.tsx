import * as stylex from '@stylexjs/stylex'
import { DefaultGlobalNotFound, Link } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useDeclares } from '~/components/useDeclares'
import { onlyUnder, useSeriesT, useT } from '~/i18n/LocaleContext'
import { useSeriesParams } from '~/lib/progress/BookmarkContext'

import { recordStyles } from './-record.styles'

const BACK = {
  abilities: { to: '/$series/$locale/abilities', label: null },
  characters: { to: '/$series/$locale/characters', label: 'character.back' },
  fruits: { to: '/$series/$locale/fruits', label: null },
  places: { to: '/$series/$locale/places', label: 'place.back' },
} as const

/**
 * What a back link says. The fruits are One Piece's and the abilities
 * Hunter x Hunter's: only their own pages link back to them, in the
 * series' own words.
 */
function useBackLabel(section: keyof typeof BACK): string {
  const t = useT()
  const onePiece = useSeriesT('one-piece')
  const hunter = useSeriesT('hunter-x-hunter')
  const { label } = BACK[section]
  if (label !== null) {
    return t(label)
  }

  return section === 'abilities' ?
      onlyUnder(hunter, 'hunter-x-hunter')('ability.back')
    : onlyUnder(onePiece, 'one-piece')('fruit.back')
}

/** The record pages return to their own index in the selected series. */
export function RecordBackLink({
  section,
}: {
  section: keyof typeof BACK
}): ReactElement {
  const params = useSeriesParams()
  const { to } = BACK[section]
  const label = useBackLabel(section)

  return (
    <Link
      params={params}
      to={to}
      {...stylex.props(recordStyles.backLink)}
    >
      ← {label}
    </Link>
  )
}

/**
 * `/fruits/<not-a-fruit>` or `/abilities/<not-an-ability>`: says so, and
 * points at the index. A series without the page gets the plain 404, with no
 * link back to it; so does a page whose words are not on this series' page.
 */
export function SectionNotFound({
  body,
  section,
  title,
}: {
  body: string | undefined
  section: 'abilities' | 'fruits'
  title: string | undefined
}): ReactElement {
  const declares = useDeclares()
  if (body === undefined || title === undefined || !declares(section)) {
    return <DefaultGlobalNotFound />
  }

  return (
    <ArchivePage
      count={body}
      title={title}
    >
      <p>
        <RecordBackLink section={section} />
      </p>
    </ArchivePage>
  )
}
