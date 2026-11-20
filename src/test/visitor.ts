import { archiveIn } from '~/data/source'
import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'

/**
 * The pages drawn for a reader with no bookmark at a point of their own
 * (`pageReader`, #1430): a record page at the record's first appearance, a
 * list at the end of the demo.
 */
const RECORD_PAGES = new Set([
  'loadAbility',
  'loadCharacter',
  'loadChronicleRest',
  'loadFruit',
  'loadFruitEaters',
  'loadFruitSiblings',
  'loadPlace',
  'loadRelationships',
])
const LIST_PAGES = new Set([
  'loadAbilities',
  'loadCharacters',
  'loadDrawings',
  'loadFruitAlbum',
  'loadFruits',
  'loadPlaces',
  'loadShelves',
])

/** The point a page is drawn at for a reader with no bookmark, if any. */
function pointOf(
  archive: SeriesArchive,
  name: string,
  key: string,
): Gated | undefined {
  if (LIST_PAGES.has(name)) {
    const { demoLastChapter, demoLastEpisode } = archive.series
    return {
      revealedAtEpisode: demoLastEpisode,
      revealedAtChapter: demoLastChapter,
    }
  }
  if (!RECORD_PAGES.has(name)) {
    return undefined
  }

  const told = archiveIn(archive, null)
  return (
    told.getEntity(key)
    ?? told.getShip(key)
    ?? told.getFruit(key)
    ?? told.getAbility(key)
  )
}

/**
 * The bookmarks a payload asked for at this one is held to. A page drawn for
 * a reader with no bookmark at a point must name nothing that an anime viewer
 * at the point's episode, nor a manga reader at its chapter, has not reached;
 * any other page, nothing the bookmark itself has not.
 */
export function heldTo(
  archive: SeriesArchive,
  { bookmark, key, name }: { bookmark: Bookmark; key: string; name: string },
): Bookmark[] {
  const point = bookmark === null ? pointOf(archive, name, key) : undefined

  return point === undefined ?
      [bookmark]
    : [
        { mode: 'episode', episode: point.revealedAtEpisode },
        { mode: 'chapter', chapter: point.revealedAtChapter },
      ]
}
