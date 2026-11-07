import { describe, expect, it } from 'vitest'

import type { Holding } from '~/data/features'
import { CP9 } from '~/data/series/one-piece/power/cp9'
import { FIVE_ELDERS } from '~/data/series/one-piece/power/five-elders'
import { WORLD_GOVERNMENT } from '~/data/series/one-piece/power/world-government'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { powerPage } from './power.server'
import { readerFor } from './reader.server'

/**
 * The World Government's bodies on the real archive (#1090): each opens at
 * its gate, each holder at the later of their entry and their record, and
 * nothing of them leaks around any of those points.
 */

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

/** One body's seats at a bookmark, each as its holder's id or its state. */
function seatsOf(id: string, bookmark: Bookmark): string[] | undefined {
  const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))

  return page.bodies
    .find((body) => body.id === id)
    ?.seats.map((seat) => (seat.state === 'held' ? seat.holder.id : seat.state))
}

const UNKNOWN_ELDERS = Array.from({ length: 5 }, () => 'unknown')
const ELDERS = [
  'marcus-mars',
  'topman-warcury',
  'ethanbaron-v-nusjuro',
  'shepherd-ju-peter',
]

interface Pair {
  chapter: number
  episode: number
}

const pairOf = (gate: Gated): Pair => ({
  episode: gate.revealedAtEpisode,
  chapter: gate.revealedAtChapter,
})

/** A holding's own pair, and its holder's gate when it names one. */
function holdingGates(holding: Holding): Pair[] {
  const holder =
    holding.value === null ?
      undefined
    : ONE_PIECE_LOADED.archive.getCharacter(holding.value)

  return holder === undefined ? [holding] : [holding, pairOf(holder)]
}

/** Every gate of the three bodies: theirs, their seats', their holdings' and their holders'. */
const GATES: Pair[] = [WORLD_GOVERNMENT, FIVE_ELDERS, CP9].flatMap((body) => [
  pairOf(body),
  ...body.seats.flatMap(({ holders, told }) => [
    pairOf(told),
    ...holders.flatMap((holding) => holdingGates(holding)),
  ]),
])

describe('the World Government on the power page', () => {
  it.each([chapter(233), episode(151), chapter(396), episode(276)])(
    'has no Elders at %j',
    (at) => {
      expect(seatsOf('five-elders', at)).toBeUndefined()
    },
  )

  it.each([chapter(397), episode(277), chapter(1072), episode(1104)])(
    'counts five unnamed Elders at %j',
    (at) => {
      expect(seatsOf('five-elders', at)).toStrictEqual(UNKNOWN_ELDERS)
    },
  )

  it.each([chapter(1073), episode(1105)])('names Saturn alone at %j', (at) => {
    expect(seatsOf('five-elders', at)).toStrictEqual([
      'jaygarcia-saturn',
      ...UNKNOWN_ELDERS.slice(1),
    ])
  })

  it.each([
    [chapter(1086), 'jaygarcia-saturn'],
    [episode(1120), 'jaygarcia-saturn'],
    [chapter(1124), 'jaygarcia-saturn'],
    [episode(1154), 'jaygarcia-saturn'],
    [chapter(1125), 'figarland-garling'],
    [episode(1155), 'figarland-garling'],
  ])('seats all five at %j, the first %s', (at, first) => {
    expect(seatsOf('five-elders', at)).toStrictEqual([first, ...ELDERS])
  })

  it.each([chapter(907), episode(888)])(
    'has no throne above them at %j',
    (at) => {
      expect(seatsOf('world-government', at)).toBeUndefined()
    },
  )

  it.each([chapter(908), episode(889)])(
    'stands Im above Kong from %j',
    (at) => {
      expect(seatsOf('world-government', at)).toStrictEqual(['im', 'kong'])
    },
  )

  it.each([chapter(357), episode(249)])('has no CP9 at %j', (at) => {
    expect(seatsOf('cp9', at)).toBeUndefined()
  })

  it('counts CP9 from its chief’s call, and names him at his record', () => {
    expect(seatsOf('cp9', chapter(358))).toStrictEqual([
      'unknown',
      'rob-lucci',
      'kaku',
      'kalifa',
      'blueno',
    ])
    expect(seatsOf('cp9', episode(250))?.slice(0, 2)).toStrictEqual([
      'spandam',
      'rob-lucci',
    ])
    expect(seatsOf('cp9', chapter(360))?.[0]).toBe('spandam')
  })

  it.each([
    [chapter(369), []],
    [chapter(370), ['nero']],
    [chapter(372), ['nero']],
    [chapter(373), ['vacant']],
    [episode(258), []],
    [episode(259), ['nero']],
    [episode(261), ['nero']],
    [episode(262), ['vacant']],
    [episode(263), ['vacant']],
    [episode(264), ['vacant', 'jabra', 'kumadori', 'fukurou']],
  ])('seats Nero and the Enies Lobby three at %j', (at, rest) => {
    expect(seatsOf('cp9', at)?.slice(5)).toStrictEqual(rest)
  })

  it('throws Nero out, and waits for the Enies Lobby three’s names', () => {
    expect(seatsOf('cp9', chapter(372))?.slice(5)).toStrictEqual(['nero'])
    expect(seatsOf('cp9', chapter(375))?.slice(5)).toStrictEqual([
      'vacant',
      'unknown',
      'unknown',
      'unknown',
    ])
    expect(seatsOf('cp9', chapter(385))?.slice(5)).toStrictEqual([
      'vacant',
      'jabra',
      'kumadori',
      'fukurou',
    ])
  })

  it.each([
    [chapter(1082), ['vacant', 'jabra', 'kumadori', 'fukurou']],
    [episode(1116), ['vacant', 'jabra', 'kumadori', 'fukurou']],
    [chapter(1083), ['vacant', 'vacant', 'vacant', 'vacant']],
    [episode(1117), ['vacant', 'vacant', 'vacant', 'vacant']],
  ])('empties the Enies Lobby three’s seats at %j', (at, last) => {
    expect(seatsOf('cp9', at)?.slice(5)).toStrictEqual(last)
  })

  it.each([
    [chapter(800), ['spandam', 'rob-lucci', 'kaku']],
    [episode(745), ['spandam', 'rob-lucci', 'kaku']],
    [chapter(906), ['vacant', 'vacant', 'kaku']],
    [episode(885), ['vacant', 'vacant', 'kaku']],
    [chapter(801), ['vacant', 'vacant', 'kaku']],
    [episode(746), ['vacant', 'vacant', 'kaku']],
    [chapter(907), ['vacant', 'vacant', 'vacant']],
    [episode(886), ['vacant', 'vacant', 'vacant']],
  ])('empties the seats of those who move to CP0 at %j', (at, first) => {
    expect(seatsOf('cp9', at)?.slice(0, 3)).toStrictEqual(first)
  })

  it('leaks nothing on either side of any of its gates', () => {
    const leaks = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)
    const chapters = new Set<number>()
    const episodes = new Set<number>()
    for (const { episode: at, chapter: inChapter } of GATES) {
      episodes.add(at - 1).add(at)
      chapters.add(inChapter - 1).add(inChapter)
    }
    const bookmarks = [
      ...[...chapters].map((at) => chapter(at)),
      ...[...episodes].map((at) => episode(at)),
    ]

    for (const bookmark of bookmarks) {
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
