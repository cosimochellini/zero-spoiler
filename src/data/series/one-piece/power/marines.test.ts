import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { powerPage } from '~/server/archive/power.server'
import { readerFor } from '~/server/archive/reader.server'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { MARINES } from './marines'

/** The Marines' seats at a bookmark: holder ids, `vacant` or `unknown`. */
function seatsAt(bookmark: Bookmark): string[] | undefined {
  const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))

  return page.bodies
    .find(({ id }) => id === 'marines')
    ?.seats.map((seat) => (seat.state === 'held' ? seat.holder.id : seat.state))
}

const U = 'unknown'
const V = 'vacant'

/** Garp's id, in every step from his seat on. */
const GARP = 'monkey-d-garp'

/**
 * Every change in one medium: where it is told and the seats from there on.
 * A holder named before their record opens is fogged until it does, so the
 * two media's steps are not the same list.
 */
type Steps = [number, string[]][]

const CHAPTERS: Steps = [
  [234, ['sengoku']],
  [319, ['sengoku', U, U, U]],
  [321, ['sengoku', 'kuzan', U, U]],
  [431, ['sengoku', 'kuzan', U, U, GARP]],
  [510, ['sengoku', 'kuzan', 'borsalino', U, GARP]],
  [523, ['sengoku', 'kuzan', 'borsalino', U, GARP, 'momonga']],
  [555, ['sengoku', 'kuzan', 'borsalino', U, GARP, 'momonga', 'lacroix']],
  [
    556,
    [
      'sengoku',
      'kuzan',
      'borsalino',
      'sakazuki',
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
    ],
  ],
  [
    594,
    [V, 'kuzan', 'borsalino', 'sakazuki', GARP, 'momonga', 'lacroix', 'tsuru'],
  ],
  [650, ['sakazuki', V, 'borsalino', V, GARP, 'momonga', 'lacroix', 'tsuru']],
  [
    652,
    [
      'sakazuki',
      V,
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
    ],
  ],
  [
    673,
    [
      'sakazuki',
      V,
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      'vergo',
    ],
  ],
  [
    698,
    [
      'sakazuki',
      V,
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
    ],
  ],
  // Fujitora is told an admiral one chapter before his record opens.
  [
    705,
    [
      'sakazuki',
      U,
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
    ],
  ],
  [
    706,
    [
      'sakazuki',
      'issho',
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
    ],
  ],
  [
    708,
    [
      'sakazuki',
      'issho',
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
    ],
  ],
  // Ryokugyu is named at 713, and his record opens at 905.
  [
    713,
    [
      'sakazuki',
      'issho',
      'borsalino',
      U,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
    ],
  ],
  [
    717,
    [
      'sakazuki',
      'issho',
      'borsalino',
      U,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
      'bastille',
    ],
  ],
  [
    905,
    [
      'sakazuki',
      'issho',
      'borsalino',
      'ryokugyu',
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
      'bastille',
    ],
  ],
  [
    1061,
    [
      'sakazuki',
      'issho',
      'borsalino',
      'ryokugyu',
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
      'bastille',
      'doll',
    ],
  ],
]

const EPISODES: Steps = [
  [151, ['sengoku']],
  [227, ['sengoku', 'kuzan', U, U]],
  [313, ['sengoku', 'kuzan', U, U, GARP]],
  [401, ['sengoku', 'kuzan', 'borsalino', U, GARP]],
  [410, ['sengoku', 'kuzan', 'borsalino', U, GARP, 'momonga']],
  // Tsuru's record opens two episodes before Akainu's and three before
  // Lacroix's, so her seat stands before his in the anime.
  [461, ['sengoku', 'kuzan', 'borsalino', U, GARP, 'momonga', 'tsuru']],
  [
    463,
    ['sengoku', 'kuzan', 'borsalino', 'sakazuki', GARP, 'momonga', 'tsuru'],
  ],
  [
    464,
    [
      'sengoku',
      'kuzan',
      'borsalino',
      'sakazuki',
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
    ],
  ],
  [
    511,
    [V, 'kuzan', 'borsalino', 'sakazuki', GARP, 'momonga', 'lacroix', 'tsuru'],
  ],
  [570, ['sakazuki', V, 'borsalino', V, GARP, 'momonga', 'lacroix', 'tsuru']],
  [
    572,
    [
      'sakazuki',
      V,
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
    ],
  ],
  [
    599,
    [
      'sakazuki',
      V,
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      'vergo',
    ],
  ],
  [
    624,
    [
      'sakazuki',
      V,
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
    ],
  ],
  [
    634,
    [
      'sakazuki',
      'issho',
      'borsalino',
      V,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
    ],
  ],
  [
    643,
    [
      'sakazuki',
      'issho',
      'borsalino',
      U,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
    ],
  ],
  [
    647,
    [
      'sakazuki',
      'issho',
      'borsalino',
      U,
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
      'bastille',
    ],
  ],
  [
    882,
    [
      'sakazuki',
      'issho',
      'borsalino',
      'ryokugyu',
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
      'bastille',
    ],
  ],
  [
    1090,
    [
      'sakazuki',
      'issho',
      'borsalino',
      'ryokugyu',
      GARP,
      'momonga',
      'lacroix',
      'tsuru',
      'smoker',
      V,
      'maynard',
      'bastille',
      'doll',
    ],
  ],
]

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

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

/** Every chapter and episode a gate of the body, a seat or a holder falls on. */
function gates(): Bookmark[] {
  const chapters = new Set<number>()
  const episodes = new Set<number>()
  const add = (inEpisode: number, inChapter: number): void => {
    episodes.add(inEpisode - 1).add(inEpisode)
    chapters.add(inChapter - 1).add(inChapter)
  }
  add(MARINES.revealedAtEpisode, MARINES.revealedAtChapter)
  for (const { holders, told } of MARINES.seats) {
    add(told.revealedAtEpisode, told.revealedAtChapter)
    for (const holding of holders) {
      add(holding.episode, holding.chapter)
      const holder =
        holding.value === null ?
          undefined
        : ONE_PIECE_LOADED.archive.getCharacter(holding.value)
      if (holder !== undefined) {
        add(holder.revealedAtEpisode, holder.revealedAtChapter)
      }
    }
  }

  return [
    ...[...chapters].map((at) => chapter(at)),
    ...[...episodes].map((at) => episode(at)),
  ]
}

describe('the Marines’ chain of command', () => {
  it.each(edges(CHAPTERS))(
    'seat at chapter $at what the manga has told',
    ({ at, before, seats }) => {
      expect(seatsAt(chapter(at - 1))).toStrictEqual(before)
      expect(seatsAt(chapter(at))).toStrictEqual(seats)
    },
  )

  it.each(edges(EPISODES))(
    'seat at episode $at what the anime has told',
    ({ at, before, seats }) => {
      expect(seatsAt(episode(at - 1))).toStrictEqual(before)
      expect(seatsAt(episode(at))).toStrictEqual(seats)
    },
  )

  it('titles every rank in Italian too', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, chapter(1061), 'it'),
    )
    const body = page.bodies.find(({ id }) => id === 'marines')

    expect(body?.name).toBe('Marina')
    expect(body?.seats.slice(0, 5).map(({ title }) => title)).toStrictEqual([
      'Grand’ammiraglio',
      'Ammiraglio',
      'Ammiraglio',
      'Ammiraglio',
      'Viceammiraglio',
    ])
  })

  it('leaks nothing on either side of any of its gates', () => {
    const leaks = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)

    for (const bookmark of gates()) {
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
