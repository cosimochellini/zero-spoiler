import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { characterPage } from '~/server/archive/pages.server'
import { powerPage } from '~/server/archive/power.server'
import { readerFor } from '~/server/archive/reader.server'
import {
  bodyGates,
  edges,
  powerLeaks,
  seatsOf,
  type Steps,
  U,
  V,
} from '~/test/power'
import { loadedSeries } from '~/test/series'

import { ZOLDYCK_FAMILY } from './zoldyck-family'

const HXH = loadedSeries('hunter-x-hunter')

/** The family's seats at a bookmark: holder ids, `unknown` or `vacant`. */
const seatsAt = (bookmark: Bookmark): string[] | undefined =>
  seatsOf(HXH, 'zoldyck-family', bookmark)

const FAMILY = ['zeno', 'illumi', 'milluki', 'killua']

// The manga names Silva only at chapter 95, so the head's seat stands
// unnamed from chapter 42 until then; the anime names him in episode 24.
const CHAPTERS: Steps = [
  [39, [U, 'illumi', 'killua']],
  [42, [U, ...FAMILY, 'kalluto', 'canary']],
  [43, [U, ...FAMILY, 'kalluto', 'gotoh', 'canary']],
  [95, ['silva', ...FAMILY, 'kalluto', 'gotoh', 'canary']],
  [321, ['silva', ...FAMILY, 'alluka-zoldyck', 'kalluto', 'gotoh', 'canary']],
  [
    324,
    [
      'silva',
      ...FAMILY,
      'alluka-zoldyck',
      'kalluto',
      'gotoh',
      'tsubone',
      'amane',
      'canary',
    ],
  ],
  [
    327,
    [
      'silva',
      ...FAMILY,
      'alluka-zoldyck',
      'kalluto',
      V,
      'tsubone',
      'amane',
      'canary',
    ],
  ],
  [
    329,
    [
      'silva',
      ...FAMILY,
      'alluka-zoldyck',
      'kalluto',
      V,
      'tsubone',
      'amane',
      'hishita',
      'canary',
    ],
  ],
]

const EPISODES: Steps = [
  [22, [U, 'illumi', 'killua']],
  [23, [U, 'illumi', 'milluki', 'killua']],
  [24, ['silva', ...FAMILY, 'kalluto', 'canary']],
  [25, ['silva', ...FAMILY, 'kalluto', 'gotoh', 'canary']],
  [138, ['silva', ...FAMILY, 'alluka-zoldyck', 'kalluto', 'gotoh', 'canary']],
  [
    140,
    [
      'silva',
      ...FAMILY,
      'alluka-zoldyck',
      'kalluto',
      'gotoh',
      'tsubone',
      'amane',
      'canary',
    ],
  ],
  [
    142,
    [
      'silva',
      ...FAMILY,
      'alluka-zoldyck',
      'kalluto',
      V,
      'tsubone',
      'amane',
      'canary',
    ],
  ],
  [
    143,
    [
      'silva',
      ...FAMILY,
      'alluka-zoldyck',
      'kalluto',
      V,
      'tsubone',
      'amane',
      'hishita',
      'canary',
    ],
  ],
]

/** The seats Killua's page links at a bookmark, in English. */
function killuaSeatsAt(bookmark: Bookmark): unknown {
  const page = characterPage('killua', readerFor(HXH.archive, bookmark, 'en'))

  return page !== undefined && 'detail' in page ?
      page.detail.facts.seats
    : undefined
}

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

describe('the Zoldyck family', () => {
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

  it('stands right after the Hunter Association, first while that is not filed', () => {
    const ids = powerPage(
      readerFor(HXH.archive, episode(148), 'en'),
    ).bodies.map(({ id }) => id)

    expect(ids.indexOf('zoldyck-family')).toBe(
      ids.indexOf('hunter-association') + 1,
    )
  })

  it('names the family and titles every seat in Italian', () => {
    const body = powerPage(
      readerFor(HXH.archive, episode(148), 'it'),
    ).bodies.find(({ id }) => id === 'zoldyck-family')

    expect(body?.name).toBe('Famiglia Zoldick')
    expect(body?.seats.map(({ title }) => title)).toStrictEqual([
      'Capofamiglia',
      'Nonno',
      'Figlio',
      'Figlio',
      'Figlio',
      'Figlia',
      'Figlio',
      'Maggiordomo',
      'Maggiordoma',
      'Maggiordoma',
      'Maggiordomo',
      'Apprendista maggiordoma',
    ])
  })

  it('links Killua’s page to his seat once the family is met', () => {
    expect(killuaSeatsAt(episode(21))).toBeUndefined()
    expect(killuaSeatsAt(episode(22))).toStrictEqual([
      { body: 'Zoldyck family', id: 'zoldyck-family', title: 'Son' },
    ])
  })

  it('leaks nothing on either side of any of its gates', () => {
    expect(powerLeaks(HXH, bodyGates(HXH, ZOLDYCK_FAMILY))).toStrictEqual([])
  })
})
