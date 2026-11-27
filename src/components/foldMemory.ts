import { useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

/** A history entry: its place in the tab's history, and the router's key. */
interface Entry {
  index: number
  key: string
}

/**
 * Whether a fold is open, in each history entry the page has stood at, by
 * the entry's place in the tab's history. One place holds one entry at a
 * time, as the history does: a search replaces the entry and a push after
 * Back replaces the ones ahead, and either takes the place over with a new
 * key. So the notes count real entries, however much the reader types.
 * Kept in memory for the tab's life, like the album (`fruits/-album.ts`),
 * and never written to the history entry or to storage: the router owns
 * both, and writing either made it reload.
 */
const notes = new Map<number, { folds: Map<string, boolean>; key: string }>()

/** The entries kept; the oldest noted goes once there are more. */
export const KEPT = 50

/** The folds noted in `entry`, if the page has stood at it. */
function notesOf({ index, key }: Entry): Map<string, boolean> | undefined {
  const at = notes.get(index)
  return at?.key === key ? at.folds : undefined
}

function note(entry: Entry, id: string, open: boolean): void {
  let folds = notesOf(entry)
  if (folds === undefined) {
    folds = new Map<string, boolean>()
    notes.delete(entry.index)
    notes.set(entry.index, { folds, key: entry.key })
    const [oldest] = notes.keys()
    if (oldest !== undefined && notes.size > KEPT) {
      notes.delete(oldest)
    }
  }
  folds.set(id, open)
}

/**
 * The fold `id`'s state in the history entry on screen, and a way to open
 * it. A fold is as it was left in an entry the page has stood at before:
 * Back or Forward to it brings that back, so the page is as tall as it was
 * and the router's scroll restoration lands on the same tile (#621). A new
 * entry carries the fold as it is: a search replaces the entry and a pick
 * pushes one, and neither folds what the reader opened. A fold that mounts
 * on an entry with no note, a fresh visit, starts folded.
 */
export function useEntryFold(id: string): [open: boolean, unfold: () => void] {
  // A navigation, even one that replaces the entry, brings a new key; Back
  // and Forward bring an old one back.
  const index = useRouterState({
    select: ({ location }) => location.state.__TSR_index,
  })
  const key = useRouterState({
    select: ({ location }) => location.state.__TSR_key ?? location.href,
  })
  const [shown, setShown] = useState(() => ({
    key,
    open: notesOf({ index, key })?.get(id) === true,
  }))
  let { open } = shown
  if (shown.key !== key) {
    const left = notesOf({ index, key })
    open = left === undefined ? shown.open : left.get(id) === true
    setShown({ key, open })
  }
  // eslint-disable-next-line no-restricted-syntax -- the module notes per history entry, written only for a committed render
  useEffect(() => {
    note({ index, key }, id, open)
  }, [id, index, key, open])

  return [
    open,
    () => {
      setShown({ key, open: true })
    },
  ]
}
