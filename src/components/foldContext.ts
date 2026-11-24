import { createContext, use } from 'react'

/**
 * Whether the covered tiles inside a `FoldedFog` are folded to their first
 * row on a phone. Apart from `FoldedFog` because a file that exports a
 * component and something else loses fast refresh; the album tiles read it.
 */
export const FoldedContext = createContext(false)

/** Read by a covered tile: fold it away on a phone past the first row. */
export function useFolded(): boolean {
  return use(FoldedContext)
}
