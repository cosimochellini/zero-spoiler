import { useLayoutEffect, useSyncExternalStore } from 'react'

/**
 * How many entries the listing on screen has open, as the listing itself
 * counted them from what its loader sent.
 *
 * The line that says what a bookmark move changed (`BookmarkStatus`) reads
 * it before the move and again after. A count of open entries only, from
 * records the reader already holds: nothing here counts or names a covered
 * one. A page that is not a listing reports nothing, and the line then says
 * where the bookmark is and no more.
 */
const store: { open: null | number } = { open: null }
const listeners = new Set<() => void>()

function report(next: null | number): void {
  store.open = next
  for (const listener of listeners) {
    listener()
  }
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

/** The count on screen now, or `null` off a listing. */
export function readOpenEntries(): null | number {
  return store.open
}

/**
 * Reports a listing's open entries while it is on screen. In a layout effect,
 * so the status line has the new count before the browser paints the move.
 */
export function useOpenEntries(count: number): void {
  useLayoutEffect(() => {
    report(count)

    return () => {
      report(null)
    }
  }, [count])
}

/** The count on screen, kept current. The server has none. */
export function useOpenCount(): null | number {
  return useSyncExternalStore(subscribe, readOpenEntries, () => null)
}
