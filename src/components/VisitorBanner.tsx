import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useEffect } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { stripStyles } from '~/components/Strip.styles'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark, useThreshold } from '~/lib/progress/BookmarkContext'
import { dismissIntro } from '~/lib/progress/intro'
import type { RecordView, Slot } from '~/lib/view/records'
import { space } from '~/styles/tokens.stylex'

/** The record a page is about, as its banner names it. */
type Named = Pick<
  RecordView,
  'name' | 'revealedAtChapter' | 'revealedAtEpisode'
>

/**
 * What a page drawn for a reader with no bookmark says about itself (#1430):
 * a record page shows the record as it stands at its first appearance, a list
 * opens the start of the story, and anything later is under fog. The control
 * beside it sets the bookmark.
 *
 * It stands in for the intro dialog on these pages, and closes it for the
 * session once it is on the page, so the dialog never opens over it. Served
 * with the page, so a search engine reads the same sentence a person does.
 * Nothing with a bookmark or a trial, and nothing on a record page still
 * under fog, where the intro does the explaining.
 */
export function VisitorBanner({
  slot,
}: {
  /** The record page's own record; none on a list. */
  slot?: Slot<Named>
}): null | ReactElement {
  const t = useT()
  const threshold = useThreshold()
  const { bookmark } = useBookmark()

  if (bookmark !== null || slot?.open === false) {
    return null
  }

  return (
    <div
      {...stylex.props(stripStyles.strip, slot === undefined && styles.list)}
    >
      <ClosesIntro />
      <p {...stylex.props(stripStyles.words)}>
        {slot === undefined ?
          t('visitor.list')
        : t('visitor.record', {
            name: slot.record.name,
            at: threshold('chart.opensAt', slot.record),
          })
        }
      </p>
      <EpisodeMark placement="fold" />
    </div>
  )
}

/** Closes the intro for the session once mounted; draws nothing. */
export function ClosesIntro(): null {
  useEffect(dismissIntro, [])
  return null
}

const styles = stylex.create({
  // A record page's bands keep their own gap; a list's content starts flush.
  list: { marginBlockEnd: space.lg },
})
