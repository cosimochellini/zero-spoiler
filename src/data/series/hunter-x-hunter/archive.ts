import { sagaArchive } from '~/data/sagaArchive'
import { aroundGates, gatesOf, sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { HUNTER_X_HUNTER_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS, REDRAWINGS } from './art'
import { PLACE_DOSSIERS } from './places'
import { BODIES } from './power'
import { NEN_ABILITIES } from './records/nen-abilities'
import { sagas } from './sagas'

/**
 * Hunter x Hunter's archive: its arcs, and the characters and places of the
 * Hunter Exam (#760), Heavens Arena (#896), Yorknew City (#900) and Greed
 * Island recruitment, training and alliances (#1016–#1018) filed so far. The engine derives their lists, shelves
 * and dated facts from the records and dossiers the sagas file, as it does
 * One Piece's.
 */
const { core } = sagaArchive({
  abilities: NEN_ABILITIES,
  // The main characters of the Hunter Exam, as they are filed: the landing
  // chart and the featured row.
  featured: [
    'gon-freecss',
    'kurapika',
    'leorio-paradinight',
    'killua',
    'hisoka',
  ],
  placeDossiers: PLACE_DOSSIERS,
  redrawings: REDRAWINGS,
  sagas,
  series: SERIES,
})

/** One dynamically loaded archive; its public description contains no records. */
export const HUNTER_X_HUNTER_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // Both sides of every gate, then the first season boundaries (the demo end
  // and a boundary inside an arc).
  bookmarks: sweepOf(sagas, SERIES, [
    ...aroundGates(gatesOf(core), SERIES),
    { mode: 'season', season: 1, episode: 26 },
    { mode: 'season', season: 2, episode: 1 },
    { mode: 'season', season: 2, episode: 12 },
    { mode: 'season', season: 3, episode: 1 },
  ]),
  drawings: DRAWINGS,
  ...core,
  // The ranks page's bodies, empty until #1443–#1447 file them (#1442).
  features: { ...core.features, power: { bodies: BODIES } },
  leads: {
    'kakin-arc': [
      'beyond-netero',
      'kurapika',
      'ging-freecss',
      'leorio-paradinight',
      'tserriednich-hui-guo-rou',
    ],
    'election-arc': [
      'gon-freecss',
      'killua',
      'alluka-zoldyck',
      'leorio-paradinight',
      'ging-freecss',
      'pariston-hill',
      'cheadle-yorkshire',
      'tsubone',
      'illumi',
    ],
    'chimera-ant-arc': [
      'kite',
      'gon-freecss',
      'killua',
      'neferpitou',
      'netero',
      'knov',
      'morel-mackernasey',
      'palm-siberia',
      'knuckle-bine',
      'shoot-mcmahon',
      'colt',
      'meruem',
      'komugi',
      'ikalgo',
      'welfin',
      'shaiapouf',
      'menthuthuyoupi',
    ],
    'hunter-exam-arc': [
      'gon-freecss',
      'kurapika',
      'leorio-paradinight',
      'killua',
      'hisoka',
    ],
    'heavens-arena-arc': ['gon-freecss', 'killua', 'wing', 'zushi', 'hisoka'],
    'greed-island-arc': [
      'gon-freecss',
      'killua',
      'biscuit-krueger',
      'binolt',
      'kosofftro',
      'battera',
      'tsezguerra',
      'puhat',
      'genthru',
      'jispa',
      'razor',
    ],
    'yorknew-city-arc': [
      'kurapika',
      'gon-freecss',
      'killua',
      'leorio-paradinight',
      'melody',
    ],
  },
}
