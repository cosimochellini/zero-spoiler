import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useSyncExternalStore } from 'react'

import { hearSaid, saying } from '~/components/announce'
import { styles } from '~/components/FogTile.styles'

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
