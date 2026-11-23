/**
 * The cookie that ties a device to a synced record (#1560). It holds the
 * record's id, a random UUID that works as a bearer secret: whoever has it can
 * read and write the record, so it never goes in a path or a query string.
 * Its own module, so the page code that only asks whether a device is synced
 * (`synced.ts`) does not pull in the rest (`sync.ts`).
 */
export const SYNC_COOKIE = 'zs_sync'

/**
 * The series, comma-separated, whose last change on this device has not
 * reached the record: the push failed or timed out. The next full page load
 * writes this device's bookmark for them instead of reading the record's.
 * Lasts the browser session.
 */
export const SYNC_PENDING_COOKIE = 'zs_sync_pending'
