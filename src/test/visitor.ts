import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { Payload } from '~/server/archive/payloads.server'
import { pointOf } from '~/server/archive/reader.server'

/**
 * The bookmarks a payload asked for at this one is held to. A page drawn for
 * a reader with no bookmark at a point (`Payload.drawnAt`, #1430) must name
 * nothing that an anime viewer at the point's episode, nor a manga reader at
 * its chapter, has not reached; any other page, nothing the bookmark itself
 * has not. The point is `pageReader`'s own (`pointOf`).
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
