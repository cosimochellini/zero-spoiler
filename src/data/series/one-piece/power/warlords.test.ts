import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import type { BodyView } from '~/lib/view/power'
import { powerPage } from '~/server/archive/power.server'
import { factsOf } from '~/server/archive/project.server'
import { readerFor } from '~/server/archive/reader.server'
import { opReaderFor } from '~/test/archive'
import { ONE_PIECE_LOADED } from '~/test/series'

/** The Warlords at a bookmark, if the reader has met them. */
function warlordsAt(bookmark: Bookmark): BodyView | undefined {
  const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))

  return page.bodies.find(({ id }) => id === 'warlords')
}

/** The Warlords' seats at a bookmark: holder ids, `vacant` or `unknown`. */
function seatsAt(bookmark: Bookmark): string[] | undefined {
  return warlordsAt(bookmark)?.seats.map((seat) =>
    seat.state === 'held' ? seat.holder.id : seat.state,
  )
}

const U = 'unknown'
const V = 'vacant'

/**
 * Every change, in the same order in both media: the chapter and episode
 * that tell it, and the seats from there on. A change named before its
 * holder's record opens is listed at the record's gate, with the seat
 * fogged until then (the rows that change nothing check that wait).
 */
const STEPS: [number, number, string[]][] = [
  [69, 31, ['dracule-mihawk', U, U, U, U, U, U]],
  // Crocodile is named a Warlord at ch. 113 / ep 67, his record opens later.
  [113, 67, ['dracule-mihawk', U, U, U, U, U, U]],
  [155, 92, ['dracule-mihawk', U, 'crocodile', U, U, U, U]],
  [211, 127, ['dracule-mihawk', U, V, U, U, U, U]],
  [
    233,
    151,
    ['dracule-mihawk', U, V, 'bartholomew-kuma', 'donquixote-doflamingo', U, U],
  ],
  // Moria is revealed a Warlord at ch. 448 / ep 343, his record opens later.
  [
    448,
    343,
    ['dracule-mihawk', U, V, 'bartholomew-kuma', 'donquixote-doflamingo', U, U],
  ],
  [
    455,
    349,
    [
      'dracule-mihawk',
      U,
      V,
      'bartholomew-kuma',
      'donquixote-doflamingo',
      'gecko-moria',
      U,
    ],
  ],
  [
    474,
    369,
    [
      'dracule-mihawk',
      U,
      'marshall-d-teach',
      'bartholomew-kuma',
      'donquixote-doflamingo',
      'gecko-moria',
      U,
    ],
  ],
  [
    516,
    410,
    [
      'dracule-mihawk',
      U,
      'marshall-d-teach',
      'bartholomew-kuma',
      'donquixote-doflamingo',
      'gecko-moria',
      'boa-hancock',
    ],
  ],
  [
    528,
    430,
    [
      'dracule-mihawk',
      'jinbe',
      'marshall-d-teach',
      'bartholomew-kuma',
      'donquixote-doflamingo',
      'gecko-moria',
      'boa-hancock',
    ],
  ],
  [
    557,
    466,
    [
      'dracule-mihawk',
      V,
      'marshall-d-teach',
      'bartholomew-kuma',
      'donquixote-doflamingo',
      'gecko-moria',
      'boa-hancock',
    ],
  ],
  [
    576,
    485,
    [
      'dracule-mihawk',
      V,
      V,
      'bartholomew-kuma',
      'donquixote-doflamingo',
      'gecko-moria',
      'boa-hancock',
    ],
  ],
  [
    581,
    490,
    [
      'dracule-mihawk',
      V,
      V,
      'bartholomew-kuma',
      'donquixote-doflamingo',
      V,
      'boa-hancock',
    ],
  ],
  [
    659,
    584,
    [
      'dracule-mihawk',
      'trafalgar-law',
      V,
      'bartholomew-kuma',
      'donquixote-doflamingo',
      V,
      'boa-hancock',
    ],
  ],
  [
    699,
    628,
    [
      'dracule-mihawk',
      'trafalgar-law',
      V,
      'bartholomew-kuma',
      V,
      V,
      'boa-hancock',
    ],
  ],
  // A Warlord not yet named holds the last free seat: fogged, not vacant.
  [
    700,
    629,
    [
      'dracule-mihawk',
      'trafalgar-law',
      'buggy',
      'bartholomew-kuma',
      V,
      U,
      'boa-hancock',
    ],
  ],
  [
    711,
    642,
    [
      'dracule-mihawk',
      'trafalgar-law',
      'buggy',
      'bartholomew-kuma',
      'donquixote-doflamingo',
      U,
      'boa-hancock',
    ],
  ],
  [
    713,
    643,
    [
      'dracule-mihawk',
      V,
      'buggy',
      'bartholomew-kuma',
      'donquixote-doflamingo',
      U,
      'boa-hancock',
    ],
  ],
  [
    801,
    746,
    ['dracule-mihawk', V, 'buggy', 'bartholomew-kuma', V, U, 'boa-hancock'],
  ],
  [
    802,
    751,
    [
      'dracule-mihawk',
      V,
      'buggy',
      'bartholomew-kuma',
      V,
      'edward-weevil',
      'boa-hancock',
    ],
  ],
]

/** Each step with the seats just before it: none before the body opens. */
const EDGES = STEPS.map(([chapter, episode, seats], at) => ({
  chapter,
  episode,
  before: STEPS[at - 1]?.[2],
  seats,
}))

describe('the Seven Warlords', () => {
  it.each(EDGES)(
    'seat at chapter $chapter what the manga has told',
    ({ before, chapter, seats }) => {
      expect(seatsAt({ mode: 'chapter', chapter: chapter - 1 })).toStrictEqual(
        before,
      )
      expect(seatsAt({ mode: 'chapter', chapter })).toStrictEqual(seats)
    },
  )

  it.each(EDGES)(
    'seat at episode $episode what the anime has told',
    ({ before, episode, seats }) => {
      expect(seatsAt({ mode: 'episode', episode: episode - 1 })).toStrictEqual(
        before,
      )
      expect(seatsAt({ mode: 'episode', episode })).toStrictEqual(seats)
    },
  )

  it.each([
    { mode: 'chapter', chapter: 956 },
    { mode: 'episode', episode: 957 },
  ] as const)('ends at $chapter$episode with the seats as they stood', (at) => {
    const before =
      at.mode === 'chapter' ?
        { ...at, chapter: at.chapter - 1 }
      : { ...at, episode: at.episode - 1 }

    expect(warlordsAt(before)?.ended).toBe(false)
    expect(warlordsAt(at)?.ended).toBe(true)
    expect(seatsAt(at)).toStrictEqual(STEPS.at(-1)?.[2])
  })

  it('titles every seat in Italian too', () => {
    const page = powerPage(
      readerFor(
        ONE_PIECE_LOADED.archive,
        { mode: 'chapter', chapter: 69 },
        'it',
      ),
    )
    const body = page.bodies.find(({ id }) => id === 'warlords')

    expect(body?.name).toBe('Flotta dei Sette')
    expect(body?.seats[0]?.title).toBe('Membro della Flotta dei Sette')
  })
})

/** A character's affiliation at a bookmark, as an English reader sees it. */
function affiliationAt(id: string, bookmark: Bookmark): unknown {
  const character = ONE_PIECE_LOADED.archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return factsOf(character, opReaderFor(bookmark, 'en')).affiliation
}

/**
 * The character pages' affiliations moved to match the seats: each step,
 * as chapter and episode, with the text just before and from there on.
 */
const MOVES = [
  {
    id: 'crocodile',
    chapter: 211,
    episode: 127,
    before: 'Seven Warlords; Baroque Works, head',
    after: 'Former Warlord, under arrest',
  },
  {
    id: 'marshall-d-teach',
    chapter: 474,
    episode: 369,
    before: 'Blackbeard Pirates, captain; formerly of the Whitebeard Pirates',
    after: 'Blackbeard Pirates, captain; Seven Warlords',
  },
  {
    id: 'gecko-moria',
    chapter: 581,
    episode: 490,
    before: 'Thriller Bark Pirates, captain; Seven Warlords of the Sea',
    after: 'Former Warlord',
  },
  {
    id: 'trafalgar-law',
    chapter: 713,
    episode: 643,
    before: 'Seven Warlords; Heart Pirates, captain',
    after: 'Former Warlord; Heart Pirates',
  },
  {
    id: 'donquixote-doflamingo',
    chapter: 801,
    episode: 746,
    before: 'Donquixote Pirates, captain; Seven Warlords; king of Dressrosa',
    after: 'Former Warlord, under arrest',
  },
]

describe('the Warlords’ character pages', () => {
  it.each(MOVES)(
    'move $id’s affiliation at chapter $chapter and episode $episode',
    ({ after, before, chapter, episode, id }) => {
      expect(affiliationAt(id, { mode: 'chapter', chapter: chapter - 1 })).toBe(
        before,
      )
      expect(affiliationAt(id, { mode: 'chapter', chapter })).toBe(after)
      expect(affiliationAt(id, { mode: 'episode', episode: episode - 1 })).toBe(
        before,
      )
      expect(affiliationAt(id, { mode: 'episode', episode })).toBe(after)
    },
  )
})
