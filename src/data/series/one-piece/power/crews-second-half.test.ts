import { describe, expect, it } from 'vitest'

import type { Holding, PowerBody } from '~/data/features'
import {
  chapterAtEpisode,
  episodeAtChapter,
} from '~/data/series/one-piece/chapter-table'
import { CHARACTER_DOSSIERS } from '~/data/series/one-piece/sagas'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { powerPage } from '~/server/archive/power.server'
import { factsOf } from '~/server/archive/project.server'
import { readerFor } from '~/server/archive/reader.server'
import { opReaderFor } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { BEASTS_PIRATES } from './beasts-pirates'
import { BIG_MOM_PIRATES } from './big-mom-pirates'
import { CROSS_GUILD } from './cross-guild'

const U = 'unknown'
const V = 'vacant'

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

/** A body's seats at a bookmark: holder ids, `vacant` or `unknown`. */
function seatsAt(id: string, bookmark: Bookmark): string[] | undefined {
  const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))

  return page.bodies
    .find((body) => body.id === id)
    ?.seats.map((seat) => (seat.state === 'held' ? seat.holder.id : seat.state))
}

/**
 * Every change in one medium: where it is told and the seats from there on.
 * A holder named before their record opens is fogged until it does, so a
 * row that changes nothing checks that wait.
 */
type Steps = [number, string[]][]

/** Each step with the seats just before it: none before the body opens. */
function edges(
  steps: Steps,
): { at: number; before: string[] | undefined; seats: string[] }[] {
  return steps.map(([at, seats], place) => ({
    at,
    before: steps[place - 1]?.[1],
    seats,
  }))
}

const LINLIN = 'charlotte-linlin'
const CRACKER = 'charlotte-cracker'
const PEROSPERO = 'charlotte-perospero'
const OPERA = 'charlotte-opera'

const BIG_MOM_CHAPTERS: Steps = [
  [653, [U]],
  [831, [LINLIN]],
  [834, [LINLIN, PEROSPERO]],
  [835, [LINLIN, CRACKER, U, U, PEROSPERO]],
  [843, [LINLIN, CRACKER, U, U, PEROSPERO, OPERA, U]],
  [854, [LINLIN, CRACKER, U, 'charlotte-smoothie', PEROSPERO, OPERA, U]],
  [
    855,
    [
      LINLIN,
      CRACKER,
      U,
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
    ],
  ],
  [
    860,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
    ],
  ],
  [
    861,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
      'charlotte-compote',
    ],
  ],
  [
    864,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
      'charlotte-compote',
      'charlotte-daifuku',
      'charlotte-oven',
    ],
  ],
  [
    877,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
      'charlotte-compote',
      'charlotte-daifuku',
      'charlotte-oven',
      'amande',
    ],
  ],
]

const BIG_MOM_EPISODES: Steps = [
  [571, [U]],
  [786, [LINLIN]],
  [795, [LINLIN, PEROSPERO]],
  [796, [LINLIN, CRACKER, U, U, PEROSPERO]],
  [806, [LINLIN, CRACKER, U, U, PEROSPERO, OPERA, U]],
  [811, [LINLIN, CRACKER, U, U, PEROSPERO, OPERA, 'charlotte-mont-dor']],
  [
    812,
    [
      LINLIN,
      CRACKER,
      U,
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
    ],
  ],
  [
    825,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
    ],
  ],
  [
    831,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
      'charlotte-compote',
    ],
  ],
  // Daifuku and Oven arrive at 826 and 827; their posts are told at 834.
  [
    834,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
      'charlotte-compote',
      'charlotte-daifuku',
      'charlotte-oven',
    ],
  ],
  [
    849,
    [
      LINLIN,
      CRACKER,
      'charlotte-katakuri',
      'charlotte-smoothie',
      PEROSPERO,
      OPERA,
      'charlotte-mont-dor',
      'charlotte-compote',
      'charlotte-daifuku',
      'charlotte-oven',
      'amande',
    ],
  ],
]

const TOBIROPPO_FOUR = ['ulti', 'whos-who', 'black-maria', 'sasaki']

const BEASTS_CHAPTERS: Steps = [
  [795, ['kaido']],
  [808, ['kaido', U, U, U]],
  [809, ['kaido', 'jack', U, U]],
  // Queen and King are called All-Stars at 925; their records open at 935.
  [925, ['kaido', 'jack', U, U]],
  [929, ['kaido', 'jack', U, U, 'page-one', 'x-drake', U, U, U, U]],
  [935, ['kaido', 'jack', 'queen', 'king', 'page-one', 'x-drake', U, U, U, U]],
  // The other four walk in at 977; their records open at 980.
  [977, ['kaido', 'jack', 'queen', 'king', 'page-one', 'x-drake', U, U, U, U]],
  [
    980,
    [
      'kaido',
      'jack',
      'queen',
      'king',
      'page-one',
      'x-drake',
      ...TOBIROPPO_FOUR,
    ],
  ],
  [990, ['kaido', 'jack', 'queen', 'king', 'page-one', V, ...TOBIROPPO_FOUR]],
]

// The anime drops chapter 925's captions: Queen's rank waits for his record,
// King's for episode 985, though his record opens at 923.
const BEASTS_EPISODES: Steps = [
  [739, ['kaido']],
  [757, ['kaido', 'jack', U, U]],
  [923, ['kaido', 'jack', U, U, 'page-one', 'x-drake', U, U, U, U]],
  [930, ['kaido', 'jack', 'queen', U, 'page-one', 'x-drake', U, U, U, U]],
  [
    982,
    ['kaido', 'jack', 'queen', U, 'page-one', 'x-drake', ...TOBIROPPO_FOUR],
  ],
  [
    985,
    [
      'kaido',
      'jack',
      'queen',
      'king',
      'page-one',
      'x-drake',
      ...TOBIROPPO_FOUR,
    ],
  ],
  [1001, ['kaido', 'jack', 'queen', 'king', 'page-one', V, ...TOBIROPPO_FOUR]],
]

const CROSS_GUILD_CHAPTERS: Steps = [
  [1056, ['buggy', 'crocodile', 'dracule-mihawk']],
]

const CROSS_GUILD_EPISODES: Steps = [
  [1083, ['buggy', 'crocodile', 'dracule-mihawk']],
]

const CREWS = [
  {
    body: BIG_MOM_PIRATES,
    chapters: BIG_MOM_CHAPTERS,
    episodes: BIG_MOM_EPISODES,
  },
  {
    body: BEASTS_PIRATES,
    chapters: BEASTS_CHAPTERS,
    episodes: BEASTS_EPISODES,
  },
  {
    body: CROSS_GUILD,
    chapters: CROSS_GUILD_CHAPTERS,
    episodes: CROSS_GUILD_EPISODES,
  },
]

/** A holding's own gate, and its holder's when it names one. */
function holdingGates(holding: Holding): Gated[] {
  const own = {
    revealedAtEpisode: holding.episode,
    revealedAtChapter: holding.chapter,
  }
  const holder =
    holding.value === null ?
      undefined
    : ONE_PIECE_LOADED.archive.getCharacter(holding.value)

  return holder === undefined ? [own] : [own, holder]
}

/** Every gate of a body: its own, its seats', holdings' and holders'. */
function gatesOf(body: PowerBody): Gated[] {
  return [
    body,
    ...body.seats.flatMap(({ holders, told }) => [
      told,
      ...holders.flatMap((holding) => holdingGates(holding)),
    ]),
  ]
}

/** A point and the one just before it. */
const sides = (at: number): number[] => [at - 1, at]

/** Every gate of the three crews. */
const GATES: Gated[] = CREWS.flatMap(({ body }) => gatesOf(body))

/** Each gate and the point just before it, in both media. */
const BOOKMARKS: Bookmark[] = [
  ...[...new Set(GATES.flatMap((g) => sides(g.revealedAtChapter)))].map((at) =>
    chapter(at),
  ),
  ...[...new Set(GATES.flatMap((g) => sides(g.revealedAtEpisode)))].map((at) =>
    episode(at),
  ),
]

/** The three crews' ids, in their order. */
const CREW_IDS = new Set<string>(CREWS.map(({ body }) => body.id))

describe.each(CREWS)('the $body.id', ({ body, chapters, episodes }) => {
  it.each(edges(chapters))(
    'seat at chapter $at what the manga has told',
    ({ at, before, seats }) => {
      expect(seatsAt(body.id, chapter(at - 1))).toStrictEqual(before)
      expect(seatsAt(body.id, chapter(at))).toStrictEqual(seats)
    },
  )

  it.each(edges(episodes))(
    'seat at episode $at what the anime has told',
    ({ at, before, seats }) => {
      expect(seatsAt(body.id, episode(at - 1))).toStrictEqual(before)
      expect(seatsAt(body.id, episode(at))).toStrictEqual(seats)
    },
  )

  it('never ends', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, chapter(1300), 'en'),
    )

    expect(page.bodies.find(({ id }) => id === body.id)?.ended).toBe(false)
  })
})

describe('the crews of the second half', () => {
  it('stand after the Emperors, in the page’s order', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, chapter(1300), 'en'),
    )
    const ids = page.bodies.map(({ id }) => id)
    const at = ids.indexOf('emperors')

    expect(at).toBeGreaterThanOrEqual(0)
    expect(ids.filter((id) => CREW_IDS.has(id))).toStrictEqual([
      'big-mom-pirates',
      'beasts-pirates',
      'cross-guild',
    ])
    expect(ids.indexOf('big-mom-pirates')).toBeGreaterThan(at)
  })

  it('titles every seat in Italian too', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, chapter(1300), 'it'),
    )
    const titles = (id: string): [string | undefined, string[] | undefined] => {
      const body = page.bodies.find((found) => found.id === id)

      return [body?.name, body?.seats.map(({ title }) => title)]
    }

    expect(titles('big-mom-pirates')).toStrictEqual([
      'Pirati di Big Mom',
      [
        'Capitano',
        'Sweet Commander',
        'Sweet Commander',
        'Sweet Commander',
        'Ministro delle caramelle',
        'Ministro della panna montata',
        'Ministro del formaggio',
        'Ministra della frutta',
        'Ministro dei fagioli',
        'Ministro della doratura',
        'Ministra di Nuts Island',
      ],
    ])
    expect(titles('beasts-pirates')).toStrictEqual([
      'Pirati delle Cento Bestie',
      [
        'Governatore generale',
        ...Array.from({ length: 3 }, () => 'All-Star'),
        ...Array.from({ length: 6 }, () => 'Tobiroppo'),
      ],
    ])
    expect(titles('cross-guild')).toStrictEqual([
      'Cross Guild',
      ['Capo', 'Dirigente', 'Dirigente'],
    ])
  })

  it('leaks nothing on either side of any of their gates', () => {
    const leaks = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)

    for (const bookmark of BOOKMARKS) {
      for (const locale of LOCALES) {
        const page = powerPage(
          readerFor(ONE_PIECE_LOADED.archive, bookmark, locale),
        )

        expect(leaks(page, bookmark), JSON.stringify(bookmark)).toStrictEqual(
          [],
        )
      }
    }
  })
})

/** A character's affiliation at a bookmark, as a reader of `locale` sees it. */
function affiliationAt(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): unknown {
  const character = ONE_PIECE_LOADED.archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return factsOf(character, opReaderFor(bookmark, locale)).affiliation
}

/** The affiliations moved to match the seats, in both locales. */
const TEXTS = {
  en: {
    beasts: 'Beasts Pirates',
    headliner: 'Beasts Pirates, headliner',
    tobiroppo: 'Beasts Pirates, Tobiroppo',
    allStar: 'Beasts Pirates, All-Star',
  },
  it: {
    beasts: 'Pirati delle Cento Bestie',
    headliner: 'Pirati delle Cento Bestie, headliner',
    tobiroppo: 'Pirati delle Cento Bestie, Tobiroppo',
    allStar: 'Pirati delle Cento Bestie, All-Star',
  },
}

describe.each(LOCALES)('the crews’ character pages in %s', (locale) => {
  const text = TEXTS[locale]
  const at = (id: string, bookmark: Bookmark): unknown =>
    affiliationAt(id, bookmark, locale)

  it('make Drake a Tobiroppo at chapter 929 and episode 923', () => {
    expect(at('x-drake', chapter(928))).toBe(text.headliner)
    expect(at('x-drake', chapter(929))).toBe(text.tobiroppo)
    expect(at('x-drake', episode(922))).toBe(text.headliner)
    expect(at('x-drake', episode(923))).toBe(text.tobiroppo)
  })

  it('make King an All-Star from his record in the manga, at 985 in the anime', () => {
    // Before his record opens there is no affiliation to read, and no rank.
    expect(at('king', chapter(934))).toBeUndefined()
    expect(at('king', chapter(935))).toBe(text.allStar)
    expect(at('king', chapter(978))).toBe(text.allStar)
    expect(at('king', episode(984))).toBe(text.beasts)
    expect(at('king', episode(985))).toBe(text.allStar)
  })
})

describe('King’s manga-only All-Star step', () => {
  const steps = [CHARACTER_DOSSIERS['king']?.affiliation ?? []].flat()

  it('sits beside the sourceless step both media read at episode 985', () => {
    expect(
      steps
        .filter(({ episode: at }) => at === 985)
        .map(({ chapter: told, source }) => [told, source]),
    ).toStrictEqual([
      [935, 'chapter'],
      [979, undefined],
    ])
  })

  it('anchors nothing: the table still reads episode 985 past chapter 935', () => {
    expect(chapterAtEpisode(985)).toBeGreaterThan(935)
    expect(episodeAtChapter(935)).toBeLessThan(985)
  })
})
