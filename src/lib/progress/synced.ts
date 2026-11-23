import { parseCookieHeader } from '~/lib/cookies'

import { markPending, SYNC_COOKIE } from './syncCookie'

/**
 * Sends one series' bookmark to the synced record, when this device has one.
 * The only piece of sync every page carries: the code that talks to the
 * endpoint is fetched on a synced device's first save. The series goes on the
 * pending list first, and comes off only once the record has it, so a push
 * that never happens (the code or the endpoint out of reach) is written by
 * the next full page load instead of being undone by it.
 */
export async function pushIfSynced(series: string): Promise<void> {
  if (!parseCookieHeader(document.cookie).has(SYNC_COOKIE)) {
    return
  }
  markPending(series, true)
  try {
    const { pushBookmark } = await import('./sync')
    await pushBookmark(series)
  } catch {
    // The code or the endpoint could not be reached; the page goes on.
  }
}
