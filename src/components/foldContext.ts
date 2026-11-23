import { createContext, use } from 'react'

/**
 * What a `FogFold` shares with the tiles in it, and what it remembers of the
 * folds a reader opened. Apart from `FogFold` because a file that exports a
 * component and something else loses fast refresh.
 */

/** Whether the covered tiles inside are folded to their first row on a phone. */
export const FoldedContext = createContext(false)

/** Read by a covered tile: fold it away on a phone past the first row. */
export function useFolded(): boolean {
  return use(FoldedContext)
}

/**
 * The folds opened, by the router's key of the history entry they were open
 * in. Kept for the tab's life, like the album (`fruits/-album.ts`), and never
 * written to the history entry or to storage: the router owns both.
 */
const opened = new Map<string, Set<string>>()

/** Whether the fold `id` was open when the reader left the entry `entry`. */
export function wasUnfolded(entry: string, id: string): boolean {
  return opened.get(entry)?.has(id) === true
}

/** Notes the fold `id` as open in the entry `entry`. */
export function rememberUnfolded(entry: string, id: string): void {
  const folds = opened.get(entry) ?? new Set<string>()
  folds.add(id)
  opened.set(entry, folds)
}
