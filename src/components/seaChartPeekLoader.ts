import { lazy } from 'react'

import { chunkOf } from '~/components/chunkOf'

/*
 * The sea chart's peeks, fetched apart from the page: each opens on a click,
 * a tap or a rest of the pointer, so none is in the served HTML and few
 * readers open one at all.
 */

const peeks = chunkOf(async () => import('~/components/SeaChartPeek'))

/** Whether the peeks' code is already here. */
export const peeksHaveLanded = peeks.hasLanded

/**
 * Fetches the peeks' code, and says whether it is here. The chart calls it
 * as soon as a stop or a ship is pointed at or focused, so the code is often
 * in before the peek opens.
 */
export const preloadChartPeeks = peeks.preload

// Rendered only once the peeks' code has landed (`useChartPeek` shows no
// target before), so the lazy loader never sees a failed fetch: React would
// cache that rejection and throw it into the page.
export const LazyFogPeek = lazy(async () => {
  const module = await peeks.get()
  return { default: module.FogPeek }
})

export const LazyShipPeek = lazy(async () => {
  const module = await peeks.get()
  return { default: module.ShipPeek }
})

export const LazyStopPeek = lazy(async () => {
  const module = await peeks.get()
  return { default: module.StopPeek }
})
