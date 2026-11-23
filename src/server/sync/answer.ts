import { COOKIE_MAX_AGE_SECONDS, serializeCookie } from '~/lib/cookies'
import { SYNC_COOKIE } from '~/lib/progress/sync'

/** The statuses the sync endpoint answers with. */
export const STATUS = {
  badRequest: 400,
  forbidden: 403,
  noContent: 204,
  notAllowed: 405,
  notFound: 404,
  ok: 200,
  unavailable: 503,
} as const

/** A bookmark cookie, as the dialog writes it. */
export function bookmarkCookie(name: string, value: string): string {
  return serializeCookie(name, value, COOKIE_MAX_AGE_SECONDS)
}

/** The cookie that ties this device to its record, for another year. */
export function syncCookie(id: string): string {
  return bookmarkCookie(SYNC_COOKIE, id)
}

/** A JSON answer, or an empty one for `null`, that no cache keeps. */
export function answer(
  body: unknown,
  status: number,
  cookies: string[] = [],
): Response {
  const headers = new Headers({ 'Cache-Control': 'no-store' })
  for (const cookie of cookies) {
    headers.append('Set-Cookie', cookie)
  }
  return body === null ?
      new Response(null, { status, headers })
    : Response.json(body, { status, headers })
}

/**
 * Runs one store call and swallows its failure: KV refuses writes past the
 * Free plan's daily cap, or a second write to one key within a second. The
 * log line names the operation and never the id.
 */
export async function attempt<T>(
  operation: string,
  run: () => Promise<T>,
): Promise<T | undefined> {
  try {
    return await run()
  } catch {
    // eslint-disable-next-line no-console -- The one trace of a failing store in Workers Logs; it carries no id.
    console.warn(`sync: the store failed during ${operation}`)
    return undefined
  }
}
