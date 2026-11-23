/**
 * The addresses the app answers on that are not pages.
 *
 * One home for the server-function prefix, because two places need it and
 * they must not drift: the CSRF middleware in `src/start.ts` decides what to
 * guard by it, and `robots.txt` tells crawlers to leave the same prefix
 * alone. A typo in either copy would quietly open one of them.
 */
export const SERVER_FN_BASE = '/_serverFn'

/**
 * The bookmark sync endpoint (#1560). Under the server-function prefix so
 * robots and the shared-link redirect leave it alone; `src/server.ts` answers
 * it before Start sees the request.
 */
export const SYNC_ENDPOINT = `${SERVER_FN_BASE}/sync`
