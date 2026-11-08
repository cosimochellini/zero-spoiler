import { describe, expect, it } from 'vitest'

import type { Holding, PowerBody } from '~/data/features'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { powerPage } from '~/server/archive/power.server'
import { factsOf } from '~/server/archive/project.server'
import { readerFor } from '~/server/archive/reader.server'
import { opReaderFor } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { BLACKBEARD_PIRATES } from './blackbeard-pirates'
import { RED_HAIR_PIRATES } from './red-hair-pirates'
import { STRAW_HAT_PIRATES } from './straw-hat-pirates'
import { WHITEBEARD_PIRATES } from './whitebeard-pirates'

/**
 * The four Emperors' crews of #1091 on the real archive: each seat at both
 * sides of every change, in each medium, the titles in both locales, and
 * nothing leaking around any gate.
 */

type Unit = 'chapter' | 'episode'

const at = (unit: Unit, count: number): Bookmark =>
  unit === 'chapter' ?
    { mode: 'chapter', chapter: count }
  : { mode: 'episode', episode: count }

/** A crew's seats at a bookmark: holder ids, `vacant` or `unknown`. */
function seatsOf(id: string, bookmark: Bookmark): string[] | undefined {
  const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))

  return page.bodies
    .find((body) => body.id === id)
    ?.seats.map((seat) => (seat.state === 'held' ? seat.holder.id : seat.state))
}

const U = 'unknown'
const V = 'vacant'

/**
 * The seats the page lists for a step: none while every one is under fog,
 * since a body is listed only once a seat of it is held or vacant (#1194).
 */
const listed = (seats: string[] | undefined): string[] | undefined =>
  seats?.every((seat) => seat === U) === true ? undefined : seats

/**
 * One crew's changes in one medium, in order: the count that tells each and
 * the seats from there on. The seats just before the first are none.
 */
type Steps = [count: number, seats: string[]][]

/** One step of one crew, with the seats just before it. */
interface Edge {
  before: string[] | undefined
  count: number
  id: string
  seats: string[] | undefined
  unit: Unit
}

/** Each step with the seats just before it, for `it.each`. */
function edgesOf(id: string, unit: Unit, steps: Steps): Edge[] {
  return steps.map(([count, seats], index) => ({
    id,
    unit,
    count,
    before: listed(steps[index - 1]?.[1]),
    seats: listed(seats),
  }))
}

const RED_HAIR = ['shanks', 'benn-beckman']
const RED_HAIR_ALL = [...RED_HAIR, 'yasopp']

const SH_EARLY = ['monkey-d-luffy', 'roronoa-zoro']
const SH_SANJI = [...SH_EARLY, 'usopp', 'sanji']
const SH_CHOPPER = [...SH_SANJI, 'nami', 'tony-tony-chopper']
const SH_ROBIN = [...SH_CHOPPER, 'nico-robin']
const SH_NO_USOPP = [...SH_EARLY, V, 'sanji', 'nami', 'tony-tony-chopper']
const SH_FRANKY = [...SH_NO_USOPP, 'nico-robin', 'franky']
const SH_BROOK = [...SH_ROBIN, 'franky', 'brook']

const SH_CHAPTERS: Steps = [
  [6, SH_EARLY],
  [41, [...SH_EARLY, 'usopp']],
  [68, SH_SANJI],
  [95, [...SH_SANJI, 'nami']],
  [152, SH_CHOPPER],
  [218, SH_ROBIN],
  [331, [...SH_NO_USOPP, 'nico-robin']],
  [340, [...SH_NO_USOPP, V]],
  [398, [...SH_NO_USOPP, 'nico-robin']],
  [437, SH_FRANKY],
  [438, [...SH_ROBIN, 'franky']],
  [489, SH_BROOK],
  [976, [...SH_BROOK, 'jinbe']],
]

const SH_EPISODES: Steps = [
  [3, SH_EARLY],
  [17, [...SH_EARLY, 'usopp']],
  [30, SH_SANJI],
  [44, [...SH_SANJI, 'nami']],
  [90, SH_CHOPPER],
  [130, SH_ROBIN],
  [235, [...SH_NO_USOPP, 'nico-robin']],
  [240, [...SH_NO_USOPP, V]],
  [278, [...SH_NO_USOPP, 'nico-robin']],
  [322, SH_FRANKY],
  [323, [...SH_ROBIN, 'franky']],
  [381, SH_BROOK],
  [980, [...SH_BROOK, 'jinbe']],
]

const WB_MET = ['edward-newgate', 'marco', 'portgas-d-ace']

/** Whitebeard's seats once Blenheim is named, with or without Vista's. */
function whitebeard(vista: string[]): [string[], string[], string[], string[]] {
  const all = [...WB_MET, 'jozu', V, ...vista, 'atmos', 'blenheim']
  const noAce = ['edward-newgate', 'marco', V, ...all.slice(3)]
  const noCaptain = [V, ...noAce.slice(1)]

  return [all, noAce, noCaptain, [V, V, ...noCaptain.slice(2)]]
}

const [WB_ALL, WB_NO_ACE, WB_NO_CAPTAIN, WB_NO_MARCO] = whitebeard(['vista'])

const WB_CHAPTERS: Steps = [
  // Ace and his captain are told before either record opens.
  [157, [U, U]],
  [159, [U, 'portgas-d-ace']],
  [234, ['edward-newgate', 'portgas-d-ace']],
  // Jozu's caption tells his division here; his record opens at 556.
  [434, [...WB_MET, U]],
  [440, [...WB_MET, U, V]],
  [556, [...WB_MET, 'jozu', V, 'atmos']],
  // Vista's division, a caption only the manga has.
  [561, [...WB_MET, 'jozu', V, 'vista', 'atmos']],
  [573, WB_ALL],
  [574, WB_NO_ACE],
  [576, WB_NO_CAPTAIN],
  [909, WB_NO_MARCO],
]

const [EP_ALL, EP_NO_ACE, EP_NO_CAPTAIN, EP_NO_MARCO] = whitebeard([])

const WB_EPISODES: Steps = [
  [94, [U, U]],
  [95, [U, 'portgas-d-ace']],
  [151, ['edward-newgate', 'portgas-d-ace']],
  [316, [...WB_MET, U]],
  [325, [...WB_MET, U, V]],
  [463, [...WB_MET, 'jozu', V]],
  [465, [...WB_MET, 'jozu', V, 'atmos']],
  [482, EP_ALL],
  [483, EP_NO_ACE],
  [485, EP_NO_CAPTAIN],
  [890, EP_NO_MARCO],
]

const TEACH = ['marshall-d-teach']
/** The four Titanic Captains the story never seats. */
const UNSEATED = [U, U, U, U]
const BB_BURGESS = [...TEACH, 'jesus-burgess']
const BB_SHIRYU = [...BB_BURGESS, 'shiryu', 'laffitte']
const BB_DEVON = [...BB_SHIRYU, 'catarina-devon', 'avalo-pizarro']

const blackbeard = (seated: string[]): string[] => [
  ...seated,
  ...Array.from({ length: 11 - seated.length - 4 }, () => U),
  ...UNSEATED,
]

const BB_CHAPTERS: Steps = [
  [234, TEACH],
  [737, blackbeard(BB_BURGESS)],
  [803, blackbeard(BB_SHIRYU)],
  [925, blackbeard(BB_DEVON)],
  [1081, blackbeard([...BB_DEVON, 'kuzan'])],
]

/** Devon's seat is the manga's alone: the anime never fills it. */
const BB_PIZARRO = [...BB_SHIRYU, U, 'avalo-pizarro']

const BB_EPISODES: Steps = [
  [151, TEACH],
  [670, blackbeard(BB_BURGESS)],
  [752, blackbeard(BB_SHIRYU)],
  [917, blackbeard(BB_PIZARRO)],
  [1114, blackbeard([...BB_PIZARRO, 'kuzan'])],
]

const EDGES = [
  ...edgesOf('red-hair-pirates', 'chapter', [
    [1, RED_HAIR],
    [25, RED_HAIR_ALL],
  ]),
  ...edgesOf('red-hair-pirates', 'episode', [
    [4, RED_HAIR],
    [9, RED_HAIR_ALL],
  ]),
  ...edgesOf('straw-hat-pirates', 'chapter', SH_CHAPTERS),
  ...edgesOf('straw-hat-pirates', 'episode', SH_EPISODES),
  ...edgesOf('whitebeard-pirates', 'chapter', WB_CHAPTERS),
  ...edgesOf('whitebeard-pirates', 'episode', WB_EPISODES),
  ...edgesOf('blackbeard-pirates', 'chapter', BB_CHAPTERS),
  ...edgesOf('blackbeard-pirates', 'episode', BB_EPISODES),
]

describe('the Emperors’ crews, first half', () => {
  it.each(EDGES)(
    'seat the $id at $unit $count as told',
    ({ count, id, seats, unit }) => {
      expect(seatsOf(id, at(unit, count))).toStrictEqual(seats)
    },
  )

  // Chapter 0 is no bookmark: the first crew opens with the story.
  it.each(EDGES.filter(({ count }) => count > 1))(
    'seat the $id just before $unit $count as before',
    ({ before, count, id, unit }) => {
      expect(seatsOf(id, at(unit, count - 1))).toStrictEqual(before)
    },
  )

  it('lists the crews after the Emperors, in the epic’s order', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, at('chapter', 1100), 'en'),
    )
    const ids = page.bodies.map(({ id }) => id)

    expect(
      ids.slice(ids.indexOf('emperors'), ids.indexOf('cross-guild') + 1),
    ).toStrictEqual([
      'emperors',
      'red-hair-pirates',
      'straw-hat-pirates',
      'whitebeard-pirates',
      'blackbeard-pirates',
      'big-mom-pirates',
      'beasts-pirates',
      'cross-guild',
    ])
  })

  it.each([
    ['red-hair-pirates', 'Pirati del Rosso', 'Capitano'],
    ['straw-hat-pirates', 'Pirati di Cappello di Paglia', 'Capitano'],
    ['whitebeard-pirates', 'Pirati di Barbabianca', 'Capitano'],
    ['blackbeard-pirates', 'Pirati di Barbanera', 'Capitano'],
  ])('names %s and its seats in Italian', (id, name, lead) => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, at('chapter', 1126), 'it'),
    )
    const body = page.bodies.find((each) => each.id === id)

    expect(body?.name).toBe(name)
    expect(body?.kind).toBe('crew')
    expect(body?.seats[0]?.title).toBe(lead)
  })

  it('titles the Titanic Captains and a numbered division in Italian', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, at('chapter', 1126), 'it'),
    )
    const titles = (id: string): string[] | undefined =>
      page.bodies
        .find((each) => each.id === id)
        ?.seats.map(({ title }) => title)

    expect(titles('blackbeard-pirates')?.[1]).toBe('Capitano titanico')
    expect(titles('whitebeard-pirates')?.[6]).toBe(
      'Comandante della tredicesima divisione',
    )
  })
})

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

const CREWS: PowerBody[] = [
  RED_HAIR_PIRATES,
  STRAW_HAT_PIRATES,
  WHITEBEARD_PIRATES,
  BLACKBEARD_PIRATES,
]

/** Every gate of the crews: theirs, their seats', their holdings' and their holders'. */
const GATES: Pair[] = CREWS.flatMap((body) => [
  pairOf(body),
  ...body.seats.flatMap(({ holders, told }) => [
    pairOf(told),
    ...holders.flatMap((holding) => holdingGates(holding)),
  ]),
])

describe('the Emperors’ crews on either side of their gates', () => {
  it('leak nothing in either locale', () => {
    const leaks = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)
    const chapters = new Set<number>()
    const episodes = new Set<number>()
    for (const { chapter, episode } of GATES) {
      episodes.add(Math.max(episode - 1, 1)).add(episode)
      chapters.add(Math.max(chapter - 1, 1)).add(chapter)
    }
    const bookmarks = [
      ...[...chapters].map((count) => at('chapter', count)),
      ...[...episodes].map((count) => at('episode', count)),
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

/** A character's affiliation at a bookmark, as an English reader sees it. */
function affiliationAt(id: string, bookmark: Bookmark): unknown {
  const character = ONE_PIECE_LOADED.archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return factsOf(character, opReaderFor(bookmark, 'en')).affiliation
}

/**
 * The steps only the manga tells, as their seats are: the chapter moves the
 * page, and no episode ever does.
 */
const MANGA_ONLY = [
  {
    id: 'vista',
    chapter: 561,
    before: 'Whitebeard Pirates, division commander',
    after: 'Whitebeard Pirates, fifth division commander',
  },
  {
    id: 'catarina-devon',
    chapter: 925,
    before: 'Blackbeard Pirates; former prisoner of Impel Down level 6',
    after: 'Blackbeard Pirates, sixth ship captain',
  },
]

describe('the crews’ manga-only steps on the character pages', () => {
  it.each(MANGA_ONLY)(
    'move $id’s affiliation at chapter $chapter and never in the anime',
    ({ after, before, chapter, id }) => {
      expect(affiliationAt(id, at('chapter', chapter - 1))).toBe(before)
      expect(affiliationAt(id, at('chapter', chapter))).toBe(after)
      expect(affiliationAt(id, at('episode', 1300))).toBe(before)
    },
  )
})
