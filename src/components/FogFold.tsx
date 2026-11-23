import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import { FoldedContext } from '~/components/foldContext'
import { Button } from '~/components/ui/Button'
import { color, leading, space, text } from '~/styles/tokens.stylex'

/**
 * How many fog tiles a phone keeps of a folded band: its first row. Two
 * across up to 37.5rem, three up to 40rem (`SpecimenBands.styles` `grid`).
 */
const ROW = { narrow: 2, wide: 3 } as const

/** What the fold says: how many more are under fog, and its button. */
export interface FoldWords {
  /** "And {count} more under fog", at a count of one and of many. */
  more: (count: number) => string
  open: string
}

/**
 * A fog band's wall of tiles, folded on a phone (#1381).
 *
 * Below 40rem a band of a hundred covered tiles is a hundred near-identical
 * screens. Folded, only its first row is drawn, then one line ("And 80 more
 * under fog") and a button that unfolds it. From 40rem the wall reads as one
 * image and is drawn whole, so the line and the button are never there.
 *
 * Folding hides tiles already on the page and adds only their count, which
 * the band's heading already prints: nothing new about what is covered. The
 * tiles stay in the DOM, hidden by CSS (`useFolded`), so the server's page
 * and the first paint agree at every width.
 */
export function FogFold({
  children,
  count,
  words,
}: {
  children: ReactNode
  count: number
  words: FoldWords
}): ReactElement {
  const [open, setOpen] = useState(false)
  // The first tile the fold hid: it takes focus once it is drawn, so a
  // keyboard carries on down the wall from where the button was.
  const nextRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    nextRef.current?.focus()
    nextRef.current = null
  }, [open])
  const folded = !open && count > ROW.narrow

  return (
    <FoldedContext value={folded}>
      {children}
      {folded ?
        <FoldRow
          count={count}
          onOpen={(next) => {
            nextRef.current = next
            setOpen(true)
          }}
          words={words}
        />
      : null}
    </FoldedContext>
  )
}

/**
 * The line under a folded wall and its button, on a phone only. How many
 * the fold hides depends on the row: two tiles across, or three from 37.5rem.
 */
function FoldRow({
  count,
  onOpen,
  words,
}: {
  count: number
  /** Unfolds the wall, with the button of the first tile it hid. */
  onOpen: (next: HTMLElement | null) => void
  words: FoldWords
}): ReactElement {
  const rowRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={rowRef}
      {...stylex.props(
        styles.row,
        count > ROW.wide ? styles.belowWide : styles.belowNarrow,
      )}
    >
      <p {...stylex.props(styles.more)}>
        <span {...stylex.props(styles.narrow)}>
          {words.more(count - ROW.narrow)}
        </span>
        {count > ROW.wide ?
          <span {...stylex.props(styles.wide)}>
            {words.more(count - ROW.wide)}
          </span>
        : null}
      </p>
      <Button
        aria-expanded={false}
        onClick={() => {
          const tiles = rowRef.current?.parentElement?.querySelectorAll('li')
          const hidden = [...(tiles ?? [])].find(
            (tile) => !tile.checkVisibility(),
          )
          onOpen(hidden?.querySelector('button') ?? null)
        }}
      >
        {words.open}
      </Button>
    </div>
  )
}

const styles = stylex.create({
  row: { gap: space.sm, alignItems: 'center', flexWrap: 'wrap' },
  // Drawn while the grid is two or three across.
  belowWide: {
    display: { 'default': 'flex', '@media (min-width: 40rem)': 'none' },
  },
  // Three tiles fill the first row from 37.5rem: nothing is left to fold.
  belowNarrow: {
    display: { 'default': 'flex', '@media (min-width: 37.5rem)': 'none' },
  },
  more: { color: color.ink2, fontSize: text.base, lineHeight: leading.body },
  narrow: {
    display: { 'default': 'inline', '@media (min-width: 37.5rem)': 'none' },
  },
  wide: {
    display: { 'default': 'none', '@media (min-width: 37.5rem)': 'inline' },
  },
})
