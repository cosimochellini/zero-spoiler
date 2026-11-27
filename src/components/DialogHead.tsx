import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/BookmarkDialog.styles'

/** The title and the lede, and the ids the dialog names itself by. */
interface DialogHeadProps {
  lede: string
  ledeId: string
  title: string
  titleId: string
}

/**
 * The title and the lede together. They carry the two ids the dialog points
 * its `aria-labelledby` and `aria-describedby` at, so neither can be moved
 * without the other losing what names it. The bookmark form and the "More
 * devices?" view each draw one, and only one is on the page at a time.
 */
export function DialogHead({
  lede,
  ledeId,
  title,
  titleId,
}: DialogHeadProps): ReactElement {
  return (
    <div {...stylex.props(styles.head)}>
      <h2
        id={titleId}
        {...stylex.props(styles.title)}
      >
        {title}
      </h2>
      <p
        id={ledeId}
        {...stylex.props(styles.lede)}
      >
        {lede}
      </p>
    </div>
  )
}
