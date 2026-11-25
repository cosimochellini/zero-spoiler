import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { loadedSeries } from '~/test/series'
import { heldTo } from '~/test/visitor'

/**
 * The bookmarks the sweep holds a record page drawn with no bookmark to,
 * pinned from the scenes rather than read off the records (#1410): both
 * points for a record both media tell, its own source's alone for one only
 * a single source tells (#1431). `heldTo` builds them with the helper the
 * page itself is drawn by, so these keep it honest.
 */
const PINS: { held: Bookmark[]; id: string; series: string }[] = [
  // One Piece, a place: Foosha Village opens chapter 1, "Romance Dawn", and
  // episode 4, "Luffy's Past! The Red-haired Shanks Appears!".
  {
    series: 'one-piece',
    id: 'foosha-village',
    held: [
      { mode: 'episode', episode: 4 },
      { mode: 'chapter', chapter: 1 },
    ],
  },
  // Hunter x Hunter, an ability: Gido sets Battle Waltz's tops spinning
  // against Gon in chapter 49 and episode 29 (2011).
  {
    series: 'hunter-x-hunter',
    id: 'battle-waltz',
    held: [
      { mode: 'episode', episode: 29 },
      { mode: 'chapter', chapter: 49 },
    ],
  },
  // Hunter x Hunter, a place of the manga alone: chapter 134's map names the
  // Shiso Tree; no anime scene does.
  {
    series: 'hunter-x-hunter',
    id: 'shiso-tree',
    held: [{ mode: 'chapter', chapter: 134 }],
  },
  // Game of Thrones, a place of the books alone: the judgment at Castle
  // Darry, Eddard III (site chapter 17).
  {
    series: 'game-of-thrones',
    id: 'darry',
    held: [{ mode: 'chapter', chapter: 17 }],
  },
  // Game of Thrones, a place of the show alone: Robert's hunt in the
  // Kingswood, "A Golden Crown" (season 1, episode 6).
  {
    series: 'game-of-thrones',
    id: 'kingswood',
    held: [{ mode: 'episode', episode: 6 }],
  },
]

describe('the bookmarks a record page with no bookmark is held to', () => {
  it.each(PINS)('$id in $series', ({ held, id, series }) => {
    expect(
      heldTo(loadedSeries(series).archive, {
        bookmark: null,
        key: id,
        payload: { drawnAt: 'record' },
      }),
    ).toStrictEqual(held)
  })
})
