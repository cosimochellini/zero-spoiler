import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { space } from '~/styles/tokens.stylex'

const styles = stylex.create({
  grid: {
    columnGap: space.md,
    display: 'grid',
    gridTemplateColumns: {
      'default': 'repeat(2, minmax(0, 1fr))',
      '@media (min-width: 40rem)': 'repeat(3, minmax(0, 1fr))',
      '@media (min-width: 60rem)': 'repeat(4, minmax(0, 1fr))',
      '@media (min-width: 76rem)': 'repeat(5, minmax(0, 1fr))',
    },
    listStyleType: 'none',
    paddingInlineStart: 0,
    rowGap: space.xl,
  },
})

/**
 * The grid the cards sit on: two across on a phone, up to five on a wide
 * page, every column the same width. `minmax(0, 1fr)` rather than `1fr`
 * because each cell holds a drawing, and a bare `1fr` track lets a long name
 * push the row past the viewport.
 *
 * A module of its own, not part of `CharacterGrid`: a fruit's eaters and an
 * ability's holders sit on this grid and import nothing else of the
 * characters index, and Rollup pulls a whole module and everything it
 * imports into the chunk that names one export of it (#1570).
 */
export function CharacterCardList({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <ul {...stylex.props(styles.grid)}>{children}</ul>
}
