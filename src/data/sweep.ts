import { byNumber } from 'sort-es'

import type { Bookmark } from '~/lib/progress/episode'
import type { BookmarkSeries } from '~/lib/progress/series'
import { type Gated, type Source, thresholdIn } from '~/lib/progress/spoiler'

import { toldIn } from './reveal'
import { headingsOf } from './shelves'
import type { Entity, Saga, SeriesArchive } from './types'

/**
 * Every saga's start, on both sides, in one unit: its earliest heading, an
 * arc record or the saga's own (`headingsOf`).
 */
function aroundSagas(
  sagas: Saga[],
  threshold: (arc: Entity) => number,
): number[] {
  return sagas.flatMap((saga) => {
    const start = Math.min(
      ...headingsOf([saga]).map((heading) => threshold(heading)),
    )
    return [start - 1, start].filter((count) => count > 0)
  })
}

/**
 * The bookmarks a series' spoiler sweep asks every page at: none, both sides
 * of every saga's start in episodes and in chapters, the season bookmarks
 * given, and the two ceilings, the furthest a reader gets in each unit, last.
 * A bookmark listed twice is asked once, at its last place.
 */
export function sweepOf(
  sagas: Saga[],
  series: BookmarkSeries,
  seasons: Bookmark[],
): Bookmark[] {
  const all: Bookmark[] = [
    null,
    ...aroundSagas(sagas, (arc) => arc.revealedAtEpisode).map(
      (episode): Bookmark => ({ mode: 'episode', episode }),
    ),
    ...aroundSagas(sagas, (arc) => arc.revealedAtChapter).map(
      (chapter): Bookmark => ({ mode: 'chapter', chapter }),
    ),
    ...seasons,
    { mode: 'episode', episode: series.episodeCeiling },
    { mode: 'chapter', chapter: series.chapterCeiling },
  ]
  const keys = all.map((bookmark) => JSON.stringify(bookmark))

  return all.filter(
    (bookmark, index) => keys.lastIndexOf(JSON.stringify(bookmark)) === index,
  )
}

/**
 * Every gate of an archive: each record's, abilities included, and each dated
 * step's of every timeline it files, whatever the field. Name facts
 * (`nameSaidAt`, `episodeName`) and place visits are not timelines, so they
 * are not here. Hunter x Hunter and Game of Thrones sweep both sides of all
 * of them, so a new record or step enters the sweep without a hand-listed
 * number. One Piece does not: its 530 owners would take its sweep from 24
 * bookmarks in each unit to about 1,070, and its per-cohort boundary tests
 * (`*Relationships.test.ts`) already ask every relationship entry at gate−1
 * and gate.
 */
export function gatesOf({
  entities,
  gateOf,
  timelines,
}: Pick<SeriesArchive, 'entities' | 'gateOf' | 'timelines'>): Gated[] {
  return [
    ...entities,
    ...timelines.flatMap(({ owner, timeline }) =>
      timeline.map((entry) => gateOf(entry, owner)),
    ),
  ]
}

/**
 * Both sides of every gate in each unit that tells it (`toldIn`): episodes,
 * then chapters, each ascending and once, and none past the series' ceiling
 * in that unit.
 */
export function aroundGates(
  gates: Gated[],
  series: BookmarkSeries,
): Bookmark[] {
  const around = (source: Source): number[] => {
    const counts = new Set<number>()
    for (const gate of gates) {
      if (!toldIn(gate, source)) {
        continue
      }
      const at = thresholdIn(gate, source)
      counts.add(at - 1).add(at)
    }
    const ceiling =
      source === 'episode' ? series.episodeCeiling : series.chapterCeiling
    return [...counts]
      .filter((count) => count > 0 && count <= ceiling)
      .sort(byNumber())
  }

  return [
    ...around('episode').map((episode): Bookmark => ({
      mode: 'episode',
      episode,
    })),
    ...around('chapter').map((chapter): Bookmark => ({
      mode: 'chapter',
      chapter,
    })),
  ]
}
