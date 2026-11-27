import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { EpisodeMark } from '~/components/EpisodeMark'
import { stripStyles } from '~/components/Strip.styles'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark, useThreshold } from '~/lib/progress/BookmarkContext'
import type { RecordView, Slot } from '~/lib/view/records'
import { space } from '~/styles/tokens.stylex'

export interface VisitorBannerProps {
  /**
   * A list with no row open at the end of the demo (#1432): the banner says
   * so rather than that the start of the story is open on it.
   */
  nothingOpen?: boolean
  /** The record page's own record, as the banner names it; none on a list. */
  slot?: Slot<
    Pick<RecordView, 'name' | 'revealedAtChapter' | 'revealedAtEpisode'>
  >
}

/**
 * What a page drawn for a reader with no bookmark says about itself (#1430):
 * a record page shows the record as it stands at its first appearance, a list
 * opens the start of the story, and anything later is under fog. The control
 * beside it sets the bookmark.
 *
 * Every series page but the landing is drawn this way with no bookmark, so
 * the banner is what a reader landing from a search learns the site from
 * (the intro dialog it replaced is gone, #1432). Served with the page, so a
 * search engine reads the same sentence a person does. Nothing with a
 * bookmark or a trial, and nothing over a record still under fog, which it
 * would have to name.
 */
export function VisitorBanner({
  nothingOpen = false,
  slot,
}: VisitorBannerProps): null | ReactElement {
  const t = useT()
  const threshold = useThreshold()
  const { bookmark } = useBookmark()

  if (bookmark !== null || slot?.open === false) {
    return null
  }
  const listKey = nothingOpen ? 'visitor.listEmpty' : 'visitor.list'

  return (
    <div
      {...stylex.props(stripStyles.strip, slot === undefined && styles.list)}
    >
      <p {...stylex.props(stripStyles.words)}>
        {slot === undefined ?
          t(listKey)
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

const styles = stylex.create({
  // A record page's bands keep their own gap; a list's content starts flush.
  list: { marginBlockEnd: space.lg },
})
