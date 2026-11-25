import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { Payload } from '~/server/archive/payloads.server'
import { ownBookmark, pointOf } from '~/server/archive/reader.server'

/**
 * The bookmarks a payload asked for at this one is held to. A page drawn for
 * a reader with no bookmark at a point (`Payload.drawnAt`, #1430) must name
 * nothing that an anime viewer at the point's episode, nor a manga reader at
 * its chapter, has not reached; a record page of one source only, nothing
 * a reader of that source at its own threshold has not (#1431); any other
 * page, nothing the bookmark itself has not. The point is `pageReader`'s own
 * (`pointOf`).
 */
export function heldTo(
  archive: SeriesArchive,
  {
    bookmark,
    key,
    payload,
  }: { bookmark: Bookmark; key: string; payload: Pick<Payload, 'drawnAt'> },
): Bookmark[] {
  if (!sweptInFull(payload, bookmark)) {
    return [bookmark]
  }
  const point = pointOf(archive, payload.drawnAt === 'record' ? key : undefined)

  if (point?.source !== undefined) {
    return [ownBookmark(point, point.source)]
  }

  return point === undefined ?
      [bookmark]
    : [
        { mode: 'episode', episode: point.revealedAtEpisode },
        { mode: 'chapter', chapter: point.revealedAtChapter },
      ]
}

/**
 * Whether a sweep asks for every key of this payload at this bookmark rather
 * than a sample: a page drawn at a point with no bookmark is a different page
 * for every key, held to that key's own point, and `null` is one bookmark in
 * a sweep of many, so a sample would leave most of those pages unread.
 */
export function sweptInFull(
  payload: Pick<Payload, 'drawnAt'>,
  bookmark: Bookmark,
): boolean {
  return bookmark === null && payload.drawnAt !== undefined
}

/**
 * A handle a marked copy minted (`markedCopy`): its source, first or after
 * the series' namespace, then the ordinal.
 */
const MARKED = /(?:^|:)[ce]:[\da-z]{1,4}$/u

/** What a page's JSON writes before a handle. */
const HANDLE_KEY = '"handle":"'

/** Every handle a page holds, under any key. */
export function handlesIn(page: unknown): string[] {
  return Array.from(
    JSON.stringify(page).matchAll(/"handle":"[^"]+"/gu),
    ([found]) => found.slice(HANDLE_KEY.length, -1),
  )
}

/** Whether a handle carries the source of the copy that minted it. */
export function isMarked(handle: string): boolean {
  return MARKED.test(handle)
}

/**
 * A page drawn with no bookmark for a record of one source only (#1431), as
 * JSON with the marks taken off its handles and its `unit` left out: what
 * the reader of that source at the record's threshold is sent, if the page
 * is right. The marks and the unit are held on their own.
 */
export function unmarked(page: unknown): string {
  return JSON.stringify(page)
    .replaceAll(/(?<lead>[":])[ce]:(?<at>[\da-z]{1,4})"/gu, '$<lead>$<at>"')
    .replace('"unit":"chapter",', '')
}
