import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { seatsOf, U, V } from '~/test/power'
import { loadedSeries } from '~/test/series'

const HUNTER_X_HUNTER = loadedSeries('hunter-x-hunter')

/** The Troupe's seats at a bookmark: holder ids, `vacant` or `unknown`. */
const troupeAt = (bookmark: Bookmark): string[] | undefined =>
  seatsOf(HUNTER_X_HUNTER, 'phantom-troupe', bookmark)

/** The leader and no. 4, told before the count: the leader not yet met. */
const CALLED = [U, 'hisoka']

/** The leader, then nos. 1 to 12, once the count of thirteen is told. */
const COUNTED = [U, U, U, U, 'hisoka', U, U, U, U, U, U, U, U]

const MET = COUNTED.with(0, 'chrollo')
const UVOGIN = MET.with(11, 'uvogin')
const NO_UVOGIN = MET.with(11, V)
const NO_HISOKA = NO_UVOGIN.with(4, V)
const KALLUTO = NO_UVOGIN.with(4, 'kalluto')
const SHIZUKU = KALLUTO.with(8, 'shizuku')
const ROSTER = [
  'chrollo',
  'nobunaga',
  'feitan',
  'machi',
  'kalluto',
  'phinks',
  V,
  'franklin',
  'shizuku',
  V,
  'bonolenov',
  'illumi',
  V,
]

/**
 * In the anime each numbered seat opens with its holder, no count told: the
 * leader, then nos. 4, 6, 8, 9 and 11 as they open.
 */
const UVOGIN_EP = [...CALLED, 'uvogin']
const FORTUNES = ['chrollo', 'hisoka', 'shalnark', 'pakunoda', V]
const NO_PAKUNODA = FORTUNES.with(3, V)
const EP_KALLUTO = NO_PAKUNODA.with(1, 'kalluto')
const EP_SHIZUKU = EP_KALLUTO.toSpliced(3, 0, 'shizuku')

describe('the Phantom Troupe', () => {
  it.each([
    [54, undefined],
    [55, CALLED],
    [70, CALLED],
    [71, MET],
    [75, MET],
    [76, UVOGIN],
    [84, NO_UVOGIN],
    // The manga never says Pakunoda's number, so her death empties nothing.
    [119, NO_HISOKA],
    [170, KALLUTO],
    [227, SHIZUKU],
    // Shalnark's and Kortopi's deaths empty no seat the manga gave them.
    [357, SHIZUKU],
    [376, SHIZUKU],
    [377, ROSTER],
    [430, ROSTER],
  ])('seat at chapter %i what the manga has told', (chapter, seats) => {
    expect(troupeAt({ mode: 'chapter', chapter })).toStrictEqual(seats)
  })

  it.each([
    [31, undefined],
    [32, CALLED],
    // No source confirms episode 41 says thirteen: no seat opens with it.
    [41, CALLED],
    [43, CALLED],
    [44, UVOGIN_EP],
    [47, UVOGIN_EP.with(2, V)],
    [53, UVOGIN_EP.with(2, V)],
    [54, FORTUNES],
    // Hisoka keeps no. 4 in the anime until Kalluto takes it.
    [58, NO_PAKUNODA],
    [71, NO_PAKUNODA],
    [72, EP_KALLUTO],
    [96, EP_KALLUTO],
    [97, EP_SHIZUKU],
    // The manga-only roster of chapter 377 never reaches the anime.
    [148, EP_SHIZUKU],
  ])('seat at episode %i what the anime has told', (episode, seats) => {
    expect(troupeAt({ mode: 'episode', episode })).toStrictEqual(seats)
  })
})
