import { useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

/**
 * Whether a fold is open, by the router's key of each history entry the
 * page has stood at. Kept in memory for the tab's life, like the album
 * (`fruits/-album.ts`), and never written to the history entry or to
 * storage: the router owns both, and writing either made it reload.
 */
const notes = new Map<string, Map<string, boolean>>()

/** The entries kept; the oldest goes once there are more. */
const KEPT = 50

function note(entry: string, id: string, open: boolean): void {
  let folds = notes.get(entry)
  if (folds === undefined) {
    folds = new Map<string, boolean>()
    notes.set(entry, folds)
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
  const entry = useRouterState({
    select: ({ location }) => location.state.__TSR_key ?? location.href,
  })
  const [shown, setShown] = useState(() => ({
    entry,
    open: notes.get(entry)?.get(id) === true,
  }))
  let { open } = shown
  if (shown.entry !== entry) {
    const left = notes.get(entry)
    open = left === undefined ? shown.open : left.get(id) === true
    setShown({ entry, open })
  }
  useEffect(() => {
    note(entry, id, open)
  }, [entry, id, open])

  return [
    open,
    () => {
      setShown({ entry, open: true })
    },
  ]
}
