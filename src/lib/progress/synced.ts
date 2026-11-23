import { parseCookieHeader } from '~/lib/cookies'

import { SYNC_COOKIE } from './syncCookie'

/**
 * Sends one series' bookmark to the synced record, when this device has one.
 * The only piece of sync every page carries: the code that talks to the
 * endpoint is fetched on a synced device's first save. A failure is swallowed,
 * the cookie stays, and a later save sends it again.
 */
export async function pushIfSynced(series: string): Promise<void> {
  if (!parseCookieHeader(document.cookie).has(SYNC_COOKIE)) {
    return
  }
  try {
    const { pushBookmark } = await import('./sync')
    await pushBookmark(series)
  } catch {
    // The code or the endpoint could not be reached; the page goes on.
  }
}
