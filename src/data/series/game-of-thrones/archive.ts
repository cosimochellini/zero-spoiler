import { sagaArchive } from '~/data/sagaArchive'
import { aroundGates, gatesOf, sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { GAME_OF_THRONES_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS, REDRAWINGS } from './art'
import { SEASON_1_PLACES } from './records/season-1'
import { SEASON_2_PLACES } from './records/season-2'
import { SEASON_3_PLACES } from './records/season-3'
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
 * Each season's cast row, by its heading's id. An empty row stays out of the
 * archive: a season with no record yet has no heading to key it. A filled
 * row is kept whatever its key, so the leads test catches a wrong one.
 */
const LEADS_BY_SEASON: Record<string, string[]> = {
  'season-1': LEADS,
  // The second stage's cast row (#1455): its filing children add each lead
  // as they file it. King's Landing and the Blackwater (#1463): the acting
  // Hand and the queen regent. The Wall and beyond (#1467): Jon Snow. Essos
  // and Qarth (#1468): Daenerys.
  'season-2': [
    'tyrion-lannister',
    'cersei-lannister',
    'stannis-baratheon',
    'davos-seaworth',
    'theon-greyjoy',
    'jon-snow',
    'daenerys-targaryen',
  ],
  // The third stage's cast row (#1626): its filing children (#1634–#1641)
  // add each lead as they file it. Essos (#1639): Daenerys. King's Landing
  // (#1634): the master of coin, his bride and the Tyrells' grandmother. Robb's
  // war and the Riverlands (#1635): the King in the North and his mother. The
  // Wall and beyond (#1638): Jon Snow and the King-Beyond-the-Wall. Arya, the
  // Brotherhood and the Hound (#1636): the outlaws' captive, their leader and
  // the Hound. Jaime, Brienne and Harrenhal (#1637): the Kingslayer and the
  // woman who guards him.
  'season-3': [
    'daenerys-targaryen',
    'tyrion-lannister',
    'sansa-stark',
    'olenna-tyrell',
    'robb-stark',
    'catelyn-stark',
    'jon-snow',
    'mance-rayder',
    'arya-stark',
    'beric-dondarrion',
    'sandor-clegane',
    'jaime-lannister',
    'brienne-of-tarth',
  ],
}

const { core } = sagaArchive({
  featured: LEADS,
  placeDossiers: { ...SEASON_1_PLACES, ...SEASON_2_PLACES, ...SEASON_3_PLACES },
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
    Object.entries(LEADS_BY_SEASON).filter(([, ids]) => ids.length > 0),
  ),
}
