import { sagaArchive } from '~/data/sagaArchive'
import { aroundGates, gatesOf, sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { GAME_OF_THRONES_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS, REDRAWINGS } from './art'
import { SEASON_1_PLACES } from './records/season-1'
import { SEASON_2_PLACES } from './records/season-2'
import { sagas as seasons } from './sagas'

/**
 * Game of Thrones' archive: its seasons, the first season's main cast
 * (#852), its other recurring characters (#1006, …) and its places (#853). A season with no record has nothing to
 * head, shelve or sweep, so the engine reads only the seasons that file one.
 */
const sagas = seasons.filter((season) => season.entries.length > 0)

/** The cast at the head of the landing chart and the featured row. */
const LEADS = [
  'eddard-stark',
  'jon-snow',
  'daenerys-targaryen',
  'tyrion-lannister',
  'arya-stark',
]

/**
 * Each season's cast row, by its heading's id. A season with no record yet
 * has no heading on the shelves, so its row waits out of the archive until
 * the season files one.
 */
const LEADS_BY_SEASON: Record<string, string[]> = {
  'season-1': LEADS,
  // The second stage's cast row (#1455): its filing children add each lead
  // as they file it.
  'season-2': [],
}

const { core } = sagaArchive({
  featured: LEADS,
  placeDossiers: { ...SEASON_1_PLACES, ...SEASON_2_PLACES },
  redrawings: REDRAWINGS,
  sagas,
  series: SERIES,
})

/** One dynamically loaded archive; its public description contains no records. */
export const GAME_OF_THRONES_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // Both sides of every gate, then the demo's last episode and the first
  // past it.
  bookmarks: sweepOf(sagas, SERIES, [
    ...aroundGates(gatesOf(core), SERIES),
    { mode: 'season', season: 1, episode: 10 },
    { mode: 'season', season: 2, episode: 1 },
  ]),
  drawings: DRAWINGS,
  ...core,
  leads: Object.fromEntries(
    Object.entries(LEADS_BY_SEASON).filter(([id]) =>
      sagas.some(({ heading }) => heading?.id === id),
    ),
  ),
}
