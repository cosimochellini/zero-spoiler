import { createContext, use } from 'react'

/**
 * What a `FogFold` shares with the tiles in it, and where it remembers being
 * unfolded. Apart from `FogFold` because a file that exports a component and
 * something else loses fast refresh.
 */

/** Whether the covered tiles inside are folded to their first row on a phone. */
export const FoldedContext = createContext(false)

/** Read by a covered tile: fold it away on a phone past the first row. */
export function useFolded(): boolean {
  return use(FoldedContext)
}

/** The key in the history entry's state that lists the folds opened there. */
const UNFOLDED = 'zsUnfolded'

/**
 * The folds opened in this history entry. Kept in the entry's own state, so
 * Back and Forward draw the page as tall as it was and the router's scroll
 * restoration lands on the same tile (#621), while a fresh visit, a new
 * entry, starts folded. Nothing is stored on the device beyond the entry.
 */
function unfoldedHere(): string[] {
  if (typeof history === 'undefined') {
    return []
  }
  const state: unknown = history.state
  const list: unknown =
    typeof state === 'object' && state !== null ?
      Reflect.get(state, UNFOLDED)
    : undefined

  return Array.isArray(list) ?
      list.filter((id): id is string => typeof id === 'string')
    : []
}

/** Whether the fold `id` was opened in this history entry. */
export function wasUnfolded(id: string): boolean {
  return unfoldedHere().includes(id)
}

/** Notes the fold `id` as opened in this history entry, beside the router's own state. */
export function rememberUnfolded(id: string): void {
  const state: unknown = history.state
  history.replaceState(
    {
      ...(typeof state === 'object' && state),
      [UNFOLDED]: [...unfoldedHere(), id],
    },
    '',
  )
}
