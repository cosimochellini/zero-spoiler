import { sagaArchive } from '~/data/sagaArchive'
import { aroundGates, sweepOf } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { HUNTER_X_HUNTER_SERIES as SERIES } from '~/lib/progress/series'

import { DRAWINGS, REDRAWINGS } from './art'
import { PLACE_DOSSIERS } from './places'
import { sagas } from './sagas'

/**
 * Hunter x Hunter's archive: its arcs, and the characters and places of the
 * Hunter Exam (#760), Heavens Arena (#896), Yorknew City (#900) and Greed
 * Island recruitment, training and alliances (#1016–#1018) filed so far. The engine derives their lists, shelves
 * and dated facts from the records and dossiers the sagas file, as it does
 * One Piece's.
 */
const { core, filed: FILED } = sagaArchive({
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

const { entities, gateOf } = core

/**
 * Every relationship entry's gate, so a new cohort's selections enter the
 * payload sweep without a hand-listed number. One Piece keeps its sweep: its
 * 530 owners would multiply it, and its per-cohort boundary tests
 * (`*Relationships.test.ts`) already ask every entry at gate−1 and gate.
 */
const SWEEP_GATES = entities.flatMap((owner) =>
  (FILED.timelineOf(owner, 'relationships') ?? []).map((entry) =>
    gateOf(entry, owner),
  ),
)

for (const { episode, gate } of core.stories) {
  if (episode >= 76 && episode <= 136) {
    SWEEP_GATES.push(gate)
  }
}

/** The named scenes the sweep asks at, listed by hand in each unit. */
const NAMED_SCENES = {
  episode: [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43,
    44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
    63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
    82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 115, 116, 117, 119, 120,
    122, 123, 124, 125, 126, 127, 128, 130, 131, 132, 133, 134, 135, 136, 137,
    138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
  ],
  chapter: [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
    43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
    62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
    82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 125, 126, 127, 128, 129, 127, 128, 130, 131,
    132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146,
    147, 148, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
    150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 169, 170, 173,
    174, 176, 177, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192,
    193, 194, 195, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 209, 210,
    212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
    227, 228, 229, 233, 234, 235, 237, 238, 239, 240, 241, 242, 243, 245, 246,
    249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 277, 278,
    292, 293, 294, 297, 298, 299, 305, 306, 307, 308, 309, 310, 313, 314, 315,
    316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330,
    331, 332, 333, 334, 335, 336, 337, 338, 339,
  ],
}

/** One dynamically loaded archive; its public description contains no records. */
export const HUNTER_X_HUNTER_ARCHIVE: SeriesArchive = {
  series: SERIES,
  // Both sides of every relationship and Chimera Ant story gate, and scenes listed by
  // hand, followed by the first two season boundaries (the demo end and a
  // boundary inside an arc).
  bookmarks: sweepOf(sagas, SERIES, [
    ...aroundGates(SWEEP_GATES, NAMED_SCENES, SERIES),
    { mode: 'season', season: 1, episode: 26 },
    { mode: 'season', season: 2, episode: 1 },
    { mode: 'season', season: 2, episode: 12 },
    { mode: 'season', season: 3, episode: 1 },
  ]),
  drawings: DRAWINGS,
  ...core,
  leads: {
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
