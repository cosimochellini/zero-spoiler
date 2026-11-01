import { sagaArchive } from '~/data/sagaArchive'
import { aroundGates, sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { GAME_OF_THRONES_SERIES as SERIES } from '~/lib/progress/series'
import type { Gated } from '~/lib/progress/spoiler'

import { DRAWINGS, REDRAWINGS } from './art'
import { sagas as seasons } from './sagas'

/**
 * Game of Thrones' archive: its seasons, and the first season's main cast
 * (#852). A season with no record has nothing to head, shelve or sweep, so
 * the engine reads only the seasons that file one.
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

const { core, filed: FILED } = sagaArchive({
  featured: LEADS,
  placeDossiers: {},
  redrawings: REDRAWINGS,
  sagas,
  series: SERIES,
})

const { entities, gateOf } = core

/**
 * Every record's gate and every dated step's, redrawings included, so the
 * sweep asks both sides of each in the unit that tells it without a
 * hand-kept list: the two media gate the same record at unrelated numbers.
 */
const GATES: Gated[] = entities.flatMap((owner) => {
  const role = FILED.roleOf(owner)
  const steps = [
    ...(FILED.timelineOf(owner, 'affiliation') ?? []),
    ...(FILED.timelineOf(owner, 'status') ?? []),
    ...(FILED.timelineOf(owner, 'redrawing') ?? []),
    ...(Array.isArray(role) ? role : []),
  ]
  return [owner, ...steps.map((entry) => gateOf(entry, owner))]
})

/** One dynamically loaded archive; its public description contains no records. */
export const GAME_OF_THRONES_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // Both sides of every gate, then the demo's last episode and the first
  // past it.
  bookmarks: sweepOf(sagas, SERIES, [
    ...aroundGates(GATES, { episode: [], chapter: [] }, SERIES),
    { mode: 'season', season: 1, episode: 10 },
    { mode: 'season', season: 2, episode: 1 },
  ]),
  drawings: DRAWINGS,
  ...core,
  leads: { 'season-1': LEADS },
}
