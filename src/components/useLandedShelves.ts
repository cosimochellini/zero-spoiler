import { useCallback, useSyncExternalStore } from 'react'

import type { Shelves, ShelvesSource } from '~/components/CharacterShelves'

// What each promise came back with. Keyed by the promise, so a retry's new
// one starts with nothing and the old one's answer goes with it.
const landed = new WeakMap<Promise<Shelves>, Shelves>()

/**
 * The shelves once they have landed, and `null` until then.
 *
 * The page's lists read the promise with `use`, each inside a boundary of
 * its own. What sits outside those boundaries (whether a search has any
 * match at all) cannot suspend without taking the search field down with
 * it, so it reads the answer here once there is one.
 */
export function useLandedShelves(source: ShelvesSource): null | Shelves {
  const subscribe = useCallback(
    (notify: () => void) => {
      let listening = true
      const listen = async (pending: Promise<Shelves>): Promise<void> => {
        landed.set(pending, await pending)
        if (listening) {
          notify()
        }
      }
      if (source instanceof Promise) {
        void listen(source)
      }

      return () => {
        listening = false
      }
    },
    [source],
  )

  return useSyncExternalStore(
    subscribe,
    () => (source instanceof Promise ? (landed.get(source) ?? null) : source),
    // The server sends the page with no query, so nothing there asks.
    () => null,
  )
}
