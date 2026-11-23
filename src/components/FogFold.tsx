import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import {
  FoldedContext,
  rememberUnfolded,
  wasUnfolded,
} from '~/components/foldContext'
import { styles as album, FIRST_ROW } from '~/components/SpecimenBands.styles'
import { Button } from '~/components/ui/Button'
import { color, leading, space, text } from '~/styles/tokens.stylex'

/** What the fold says: how many more are under fog, and its button. */
export interface FoldWords {
  /** "And {count} more under fog", at a count of one and of many. */
  more: (count: number) => string
  open: string
}

/**
 * A grid of fog tiles, folded on a phone (#1381): a fog band's, or a saga
 * group's tiles, the open ones first.
 *
 * Below 40rem a band of a hundred covered tiles is a hundred near-identical
 * screens. Folded, only the first row of fog tiles is drawn, then one line
 * ("And 80 more under fog") and a button that unfolds it. From 40rem the
 * wall reads as one image and is drawn whole, so the line and the button
 * are never there.
 *
 * Folding hides tiles already on the page and adds only how many, which the
 * group's count or the band's heading already gives: nothing new about what
 * is covered. The tiles stay in the DOM and a covered tile hides itself by
 * CSS (`useFolded`), so no width is read in script. The album, and every
 * fold with it, is drawn in the browser only (`fruits/-album.ts`), so the
 * opened folds can be read from the history entry as it mounts: Back draws
 * the page as tall as it was left.
 */
export function FogFold({
  children,
  count,
  id,
  words,
}: {
  /** The tiles: any open ones, then the covered ones, each with its rank. */
  children: ReactNode
  /** How many of the tiles are covered. */
  count: number
  /** The list's id, unique on the page and the same after Back. */
  id: string
  words: FoldWords
}): ReactElement {
  const [open, setOpen] = useState(() => wasUnfolded(id))
  // The first tile the fold hid: it takes focus once it is drawn, so a
  // keyboard carries on down the wall from where the button was.
  const nextRef = useRef<HTMLElement | null>(null)
  const listRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    nextRef.current?.focus()
    nextRef.current = null
  }, [open])
  const folded = !open && count > FIRST_ROW.narrow

  return (
    <FoldedContext value={folded}>
      <ul
        id={id}
        ref={listRef}
        {...stylex.props(album.grid)}
      >
        {children}
      </ul>
      {folded ?
        <FoldRow
          count={count}
          list={id}
          onOpen={() => {
            // A tile the fold hid has no box (`display: none`).
            const hidden = [...(listRef.current?.children ?? [])].find(
              (tile) =>
                tile instanceof HTMLElement && tile.offsetParent === null,
            )
            const next = hidden?.querySelector('button') ?? null
            nextRef.current = next
            rememberUnfolded(id)
            setOpen(true)
          }}
          words={words}
        />
      : null}
    </FoldedContext>
  )
}

/**
 * The line under a folded grid and its button, on a phone only. How many
 * the fold hides depends on the row: two tiles across, or three from 37.5rem.
 * The button goes once pressed, so it says what it opens by `aria-controls`
 * and the line rather than by a state it would never leave.
 */
function FoldRow({
  count,
  list,
  onOpen,
  words,
}: {
  count: number
  /** The id of the list the button unfolds. */
  list: string
  onOpen: () => void
  words: FoldWords
}): ReactElement {
  const lineId = useId()

  return (
    <div
      {...stylex.props(
        styles.row,
        count > FIRST_ROW.wide ? styles.belowWide : styles.belowNarrow,
      )}
    >
      <p
        id={lineId}
        {...stylex.props(styles.more)}
      >
        <span {...stylex.props(styles.narrow)}>
          {words.more(count - FIRST_ROW.narrow)}
        </span>
        {count > FIRST_ROW.wide ?
          <span {...stylex.props(styles.wide)}>
            {words.more(count - FIRST_ROW.wide)}
          </span>
        : null}
      </p>
      <Button
        aria-controls={list}
        aria-describedby={lineId}
        onClick={onOpen}
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
  // From 37.5rem the first row holds three tiles: with three, nothing is left.
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
