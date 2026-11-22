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

import { CHIMERA_ANTS } from './chimera-ants'

const HXH = loadedSeries('hunter-x-hunter')

/** The colony's seats at a bookmark: holder ids, `unknown` or `vacant`. */
const seatsAt = (bookmark: Bookmark): string[] | undefined =>
  seatsOf(HXH, 'chimera-ants', bookmark)

const QUEEN = 'chimera-ant-queen'
const GUARDS = ['neferpitou', 'shaiapouf', 'menthuthuyoupi']

// The manga's seats: Peggy and Bihorn are its alone, Yunju is not in it.
// The King's seat is a title alone from the body's gate until the dying
// Queen names him at chapter 215, though he is born at 213.
const CHAPTERS: Steps = [
  [187, [QUEEN, U]],
  [189, [QUEEN, U, 'peggy', 'zazan']],
  [192, [QUEEN, U, 'peggy', 'zazan', 'cheetu', 'hagya']],
  [197, [QUEEN, U, U, 'peggy', 'zazan', 'cheetu', 'hagya']],
  [198, [QUEEN, U, 'neferpitou', 'peggy', 'zazan', 'cheetu', 'hagya']],
  [202, [QUEEN, U, ...GUARDS, 'peggy', 'zazan', 'cheetu', 'hagya']],
  [213, [QUEEN, U, ...GUARDS, V, 'zazan', 'cheetu', 'hagya']],
  [214, [QUEEN, U, ...GUARDS, V, 'zazan', 'cheetu', 'hagya', 'colt']],
  [215, [V, 'meruem', ...GUARDS, V, 'zazan', 'cheetu', 'hagya', 'colt']],
  [216, [V, 'meruem', ...GUARDS, V, 'zazan', V, 'hagya', 'colt']],
  [224, [V, 'meruem', ...GUARDS, V, V, V, 'hagya', 'colt']],
  [227, [V, 'meruem', ...GUARDS, V, V, V, 'hagya', 'colt', 'bihorn']],
  [254, [V, 'meruem', ...GUARDS, V, V, V, V, 'colt', 'bihorn']],
  [
    307,
    [
      V,
      'meruem',
      V,
      'shaiapouf',
      'menthuthuyoupi',
      V,
      V,
      V,
      V,
      'colt',
      'bihorn',
    ],
  ],
  [310, [V, 'meruem', V, 'shaiapouf', V, V, V, V, V, 'colt', 'bihorn']],
  [314, [V, 'meruem', V, V, V, V, V, V, V, 'colt', 'bihorn']],
  [318, [V, V, V, V, V, V, V, V, V, 'colt', 'bihorn']],
]

// The anime's seats: Yunju is its alone, and it names Hagya only at 106.
const EPISODES: Steps = [
  [77, [QUEEN, U]],
  [79, [QUEEN, U, 'cheetu', 'yunju']],
  [82, [QUEEN, U, 'cheetu', V]],
  [84, [QUEEN, U, 'neferpitou', 'zazan', 'cheetu', V]],
  [86, [QUEEN, U, ...GUARDS, 'zazan', 'cheetu', V]],
  [92, [V, 'meruem', ...GUARDS, 'zazan', V, V, 'colt']],
  [96, [V, 'meruem', ...GUARDS, V, V, V, 'colt']],
  [106, [V, 'meruem', ...GUARDS, V, V, 'hagya', V, 'colt']],
  [107, [V, 'meruem', ...GUARDS, V, V, V, V, 'colt']],
  [131, [V, 'meruem', V, 'shaiapouf', 'menthuthuyoupi', V, V, V, V, 'colt']],
  [133, [V, 'meruem', V, 'shaiapouf', V, V, V, V, V, 'colt']],
  [135, [V, V, V, V, V, V, V, V, V, 'colt']],
]

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

/** Which description version (its index) the page sends, -1 for none. */
function versionAt(bookmark: Bookmark): number {
  const sent = powerPage(readerFor(HXH.archive, bookmark, 'en')).bodies.find(
    ({ id }) => id === 'chimera-ants',
  )?.description

  return CHIMERA_ANTS.description.findIndex(({ value }) => value.en === sent)
}

/** The seats a character's page links at a bookmark, in English. */
function seatLinksAt(id: string, bookmark: Bookmark): unknown {
  const page = characterPage(id, readerFor(HXH.archive, bookmark, 'en'))

  return page !== undefined && 'detail' in page ?
      page.detail.facts.seats
    : undefined
}

describe('the Chimera Ants', () => {
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

  it.each([
    [chapter(186), -1],
    [chapter(187), 0],
    [chapter(215), 0],
    [chapter(216), 1],
    [chapter(317), 1],
    [chapter(318), 2],
    [chapter(340), 2],
    [episode(76), -1],
    [episode(77), 0],
    [episode(91), 0],
    [episode(92), 1],
    [episode(134), 1],
    [episode(135), 2],
    [episode(148), 2],
  ] as const)('describes the colony at %o with version %i', (at, version) => {
    expect(versionAt(at)).toBe(version)
  })

  // Until the Queen's record opens no seat of the colony is held, and a
  // body met with every seat under fog would set the page's fog line.
  it.each([chapter(186), episode(76)])(
    'is not met at all at %o, one unit before its gate',
    (at) => {
      expect(powerPage(readerFor(HXH.archive, at, 'en')).fogged).toBeUndefined()
    },
  )

  it('stands last, after the Zoldyck family', () => {
    const ids = powerPage(
      readerFor(HXH.archive, episode(148), 'en'),
    ).bodies.map(({ id }) => id)

    expect(ids.at(-1)).toBe('chimera-ants')
    expect(ids.indexOf('chimera-ants')).toBeGreaterThan(
      ids.indexOf('zoldyck-family'),
    )
  })

  it('names the colony and titles every seat in Italian', () => {
    const body = powerPage(
      readerFor(HXH.archive, chapter(340), 'it'),
    ).bodies.find(({ id }) => id === 'chimera-ants')

    expect(body?.name).toBe('Formichimere')
    expect(body?.kind).toBe('chain')
    expect(body?.ended).toBe(false)
    expect(body?.seats.map(({ title }) => title)).toStrictEqual([
      'Regina',
      'Re',
      'Guardia reale',
      'Guardia reale',
      'Guardia reale',
      ...Array.from({ length: 6 }, () => 'Comandante di divisione'),
    ])
  })

  it('links Colt’s page to his seat from his naming on', () => {
    const seat = [
      { body: 'Chimera Ants', id: 'chimera-ants', title: 'Squadron Leader' },
    ]

    expect(seatLinksAt('colt', episode(91))).toBeUndefined()
    expect(seatLinksAt('colt', episode(92))).toStrictEqual(seat)
    expect(seatLinksAt('colt', chapter(213))).toBeUndefined()
    expect(seatLinksAt('colt', chapter(214))).toStrictEqual(seat)
    expect(seatLinksAt('colt', chapter(340))).toStrictEqual(seat)
  })

  it('links Meruem’s page to the King’s seat until his death', () => {
    const seat = [{ body: 'Chimera Ants', id: 'chimera-ants', title: 'King' }]

    expect(seatLinksAt('meruem', chapter(215))).toStrictEqual(seat)
    expect(seatLinksAt('meruem', chapter(317))).toStrictEqual(seat)
    expect(seatLinksAt('meruem', chapter(318))).toBeUndefined()
  })

  it('leaks nothing on either side of any of its gates', () => {
    expect(powerLeaks(HXH, bodyGates(HXH, CHIMERA_ANTS))).toStrictEqual([])
  })
})
