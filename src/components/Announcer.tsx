import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useSyncExternalStore } from 'react'

import { hearSaid, saying } from '~/components/announce'

// Out of sight and still read: the live region a screen reader hears. Its own
// rule, not `FogTile.styles`: that file holds every fog tile style, and the
// announcer is in the entry of every page, veil or none (#1570).
const styles = stylex.create({
  hidden: {
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
  },
})

/**
 * The page's one polite live region, out of sight. Mounted empty with the
 * shell, since a live region born with its text is not announced. Every fog
 * control speaks through it (`say`), where each used to carry a region of
 * its own: a listing held one per covered card (#1376).
 */
export function Announcer(): ReactElement {
  const line = useSyncExternalStore(hearSaid, saying, () => '')

  return (
    <p
      role="status"
      {...stylex.props(styles.hidden)}
    >
      {line}
    </p>
  )
}
