import { describe, expect, it } from 'vitest'

import { CP9 } from '~/data/series/one-piece/power/cp9'
import { FIVE_ELDERS } from '~/data/series/one-piece/power/five-elders'
import { WORLD_GOVERNMENT } from '~/data/series/one-piece/power/world-government'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { bodyGates, powerLeaks, seatsOf } from '~/test/power'
import { ONE_PIECE_LOADED } from '~/test/series'

import { powerPage } from './power.server'
import { readerFor } from './reader.server'

/**
 * The World Government's bodies on the real archive (#1090): each opens at
 * its gate, each holder at the later of their entry and their record, and
 * nothing of them leaks around any of those points.
 */

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

const UNKNOWN_ELDERS = Array.from({ length: 5 }, () => 'unknown')
const ELDERS = [
  'marcus-mars',
  'topman-warcury',
  'ethanbaron-v-nusjuro',
  'shepherd-ju-peter',
]

describe('the World Government on the power page', () => {
  it.each([chapter(233), episode(151), chapter(396), episode(276)])(
    'has no Elders at %j',
    (at) => {
      expect(seatsOf(ONE_PIECE_LOADED, 'five-elders', at)).toBeUndefined()
    },
  )

  // Named at 397/277, but every seat under fog until Saturn's record opens:
  // the page lists them only in its one line for such groups (#1194).
  it.each([chapter(397), episode(277), chapter(1072), episode(1104)])(
    'keeps the five unnamed Elders in the fog line at %j',
    (at) => {
      expect(seatsOf(ONE_PIECE_LOADED, 'five-elders', at)).toBeUndefined()
      expect(
        powerPage(readerFor(ONE_PIECE_LOADED.archive, at, 'en')).fogged,
      ).toBe(true)
    },
  )

  it.each([episode(764), chapter(780)])(
    'sends nothing of the Elders at %j',
    (at) => {
      for (const locale of LOCALES) {
        const served = JSON.stringify(
          powerPage(readerFor(ONE_PIECE_LOADED.archive, at, locale)),
        )

        for (const word of [
          'five-elders',
          'Five Elders',
          'Cinque Astri',
          '"Elder"',
          'Astro di Saggezza',
        ]) {
          expect(served, `${word} ${locale}`).not.toContain(word)
        }
      }
    },
  )

  it.each([chapter(1073), episode(1105)])('names Saturn alone at %j', (at) => {
    expect(seatsOf(ONE_PIECE_LOADED, 'five-elders', at)).toStrictEqual([
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
    expect(seatsOf(ONE_PIECE_LOADED, 'five-elders', at)).toStrictEqual([
      first,
      ...ELDERS,
    ])
  })

  it.each([chapter(907), episode(888)])(
    'has no throne above them at %j',
    (at) => {
      expect(seatsOf(ONE_PIECE_LOADED, 'world-government', at)).toBeUndefined()
    },
  )

  it.each([chapter(908), episode(889)])(
    'stands Im above Kong from %j',
    (at) => {
      expect(seatsOf(ONE_PIECE_LOADED, 'world-government', at)).toStrictEqual([
        'im',
        'kong',
      ])
    },
  )

  it.each([chapter(357), episode(249)])('has no CP9 at %j', (at) => {
    expect(seatsOf(ONE_PIECE_LOADED, 'cp9', at)).toBeUndefined()
  })

  it('counts CP9 from its chief’s call, and names him at his record', () => {
    expect(seatsOf(ONE_PIECE_LOADED, 'cp9', chapter(358))).toStrictEqual([
      'unknown',
      'rob-lucci',
      'kaku',
      'kalifa',
      'blueno',
    ])
    expect(
      seatsOf(ONE_PIECE_LOADED, 'cp9', episode(250))?.slice(0, 2),
    ).toStrictEqual(['spandam', 'rob-lucci'])
    expect(seatsOf(ONE_PIECE_LOADED, 'cp9', chapter(360))?.[0]).toBe('spandam')
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
    expect(seatsOf(ONE_PIECE_LOADED, 'cp9', at)?.slice(5)).toStrictEqual(rest)
  })

  it('throws Nero out, and waits for the Enies Lobby three’s names', () => {
    expect(
      seatsOf(ONE_PIECE_LOADED, 'cp9', chapter(372))?.slice(5),
    ).toStrictEqual(['nero'])
    expect(
      seatsOf(ONE_PIECE_LOADED, 'cp9', chapter(375))?.slice(5),
    ).toStrictEqual(['vacant', 'unknown', 'unknown', 'unknown'])
    expect(
      seatsOf(ONE_PIECE_LOADED, 'cp9', chapter(385))?.slice(5),
    ).toStrictEqual(['vacant', 'jabra', 'kumadori', 'fukurou'])
  })

  it.each([
    [chapter(1082), ['vacant', 'jabra', 'kumadori', 'fukurou']],
    [episode(1116), ['vacant', 'jabra', 'kumadori', 'fukurou']],
    [chapter(1083), ['vacant', 'vacant', 'vacant', 'vacant']],
    [episode(1117), ['vacant', 'vacant', 'vacant', 'vacant']],
  ])('empties the Enies Lobby three’s seats at %j', (at, last) => {
    expect(seatsOf(ONE_PIECE_LOADED, 'cp9', at)?.slice(5)).toStrictEqual(last)
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
    expect(seatsOf(ONE_PIECE_LOADED, 'cp9', at)?.slice(0, 3)).toStrictEqual(
      first,
    )
  })

  it('leaks nothing on either side of any of its gates', () => {
    expect(
      powerLeaks(
        ONE_PIECE_LOADED,
        [WORLD_GOVERNMENT, FIVE_ELDERS, CP9].flatMap((body) =>
          bodyGates(ONE_PIECE_LOADED, body),
        ),
      ),
    ).toStrictEqual([])
  })
})
