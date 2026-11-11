import { sagaArchive } from '~/data/sagaArchive'
import { DRAWINGS, REDRAWINGS } from '~/data/series/hunter-x-hunter/art'
import { PLACE_DOSSIERS } from '~/data/series/hunter-x-hunter/places'
import { sagas } from '~/data/series/hunter-x-hunter/sagas'
import type { Entity, SeriesArchive, Timeline } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { HUNTER_X_HUNTER_SERIES } from '~/lib/progress/series'
import type { Stroke } from '~/lib/view/records'
import { LOADED_SERIES, type LoadedSeries } from '~/test/series'

/**
 * Hunter x Hunter with two Nen abilities filed for the tests, which no real
 * record is yet (#924 files them): the kind proven on a series that has it.
 *
 * `TYPED` is shown at episode 44 / chapter 76 and typed (an Enhancer
 * ability); Gon uses it from there, and Killua only from episode 80 /
 * chapter 190, so a reader between the two meets one user and not the
 * other. `UNTYPED` is shown at episode 45 / chapter 78 with no type told,
 * and Gon's second entry names both. Every entry is pinned to a pair the
 * real archive already vouches for, so the chapter table does not move.
 */

/** A fixture ability's drawing: four strokes, one of them the accent. */
const STROKES: Stroke[] = [
  { d: 'M60 150 L100 40 L140 150 Z' },
  { d: 'M100 40 L100 150', role: 'soft' },
  { d: 'M70 120 H130', role: 'ambient' },
  { d: 'M92 96 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0', role: 'accent' },
]

/** One fixture ability, under its own id and name. */
function abilityAt(
  id: string,
  [episode, chapter]: [number, number],
  name: string,
): Entity {
  return {
    id,
    kind: 'ability',
    name: { en: name, it: `${name} (it)` },
    revealedAtEpisode: episode,
    revealedAtChapter: chapter,
    summary: {
      en: `${name}: a test ability, filed for the tests alone.`,
      it: `${name}: un’abilità di prova, solo per i test.`,
    },
    visual: { art: id, tint: 'green' },
  }
}

export const TYPED = abilityAt('test-typed-ability', [44, 76], 'Typed Power')
export const UNTYPED = abilityAt(
  'test-untyped-ability',
  [45, 78],
  'Untold Power',
)

/** Gon's and Killua's `ability` entries, by character. */
const ENTRIES: Partial<Record<string, Timeline<string[]>>> = {
  'gon-freecss': [
    { episode: 44, chapter: 76, value: [TYPED.id] },
    { episode: 45, chapter: 78, value: [TYPED.id, UNTYPED.id] },
  ],
  'killua': [{ episode: 80, chapter: 190, value: [TYPED.id] }],
}

/** The real sagas, with the two characters' entries filed on them. */
const withUses = sagas.map((saga) => ({
  ...saga,
  dossiers: Object.fromEntries(
    Object.entries(saga.dossiers).map(([id, dossier]) => {
      const ability = ENTRIES[id]

      return [id, ability === undefined ? dossier : { ...dossier, ability }]
    }),
  ),
}))

/** Hunter x Hunter's description, with the kind declared. */
const SERIES = {
  ...HUNTER_X_HUNTER_SERIES,
  kinds: [...HUNTER_X_HUNTER_SERIES.kinds, 'ability' as const],
}

const { core } = sagaArchive({
  abilities: { nen: { [TYPED.id]: 'enhancer' }, records: [TYPED, UNTYPED] },
  featured: [
    'gon-freecss',
    'kurapika',
    'leorio-paradinight',
    'killua',
    'hisoka',
  ],
  placeDossiers: PLACE_DOSSIERS,
  redrawings: REDRAWINGS,
  sagas: withUses,
  series: SERIES,
})

/** Both sides of every gate the fixture adds, in both units. */
export const BOOKMARKS: Bookmark[] = [
  null,
  ...[43, 44, 45, 79, 80].map((episode) => ({
    mode: 'episode' as const,
    episode,
  })),
  ...[75, 76, 77, 78, 189, 190].map((chapter) => ({
    mode: 'chapter' as const,
    chapter,
  })),
]

export const ABILITY_ARCHIVE: SeriesArchive = {
  ...core,
  series: SERIES,
  bookmarks: BOOKMARKS,
  drawings: { ...DRAWINGS, [TYPED.id]: STROKES, [UNTYPED.id]: STROKES },
  leads: {},
}

const hunter = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (hunter === undefined) {
  throw new Error('Hunter x Hunter is not registered')
}

/** The fixture as the leak scan reads a series (`leaksOf`). */
export const ABILITY_LOADED: LoadedSeries = {
  ...hunter,
  archive: ABILITY_ARCHIVE,
  bookmarks: BOOKMARKS,
}
