import { describe, expect, it } from 'vitest'

import type { Holding } from '~/data/features'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { characterPage, drawingsFor } from '~/server/archive/pages.server'
import { powerPage } from '~/server/archive/power.server'
import { factsOf } from '~/server/archive/project.server'
import { readerFor } from '~/server/archive/reader.server'
import { opReaderFor, opRelationshipsPage } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { REVOLUTIONARY_ARMY } from './revolutionary-army'

/** The army's seats at a bookmark: holder ids, or `unknown`. */
function seatsAt(bookmark: Bookmark): string[] | undefined {
  const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))

  return page.bodies
    .find(({ id }) => id === 'revolutionary-army')
    ?.seats.map((seat) => (seat.state === 'held' ? seat.holder.id : seat.state))
}

const U = 'unknown'

const DRAGON = 'monkey-d-dragon'
const IVANKOV = 'emporio-ivankov'
const COMMANDERS = ['belo-betty', 'morley', 'karasu', 'lindbergh']
const DEPUTIES = ['ahiru', 'ushiano', 'jiron', 'gambo']

/**
 * Every change in one medium: where it is told and the seats from there on.
 * A seat told before its holder's record opens stands unnamed until it
 * does, so the two media's steps are not the same list.
 */
type Steps = [number, string[]][]

const CHAPTERS: Steps = [
  [432, [DRAGON]],
  // Ivankov says he is one of its leaders a chapter before his record opens.
  [539, [DRAGON, U]],
  [540, [DRAGON, IVANKOV]],
  [731, [DRAGON, IVANKOV, 'koala']],
  [744, [DRAGON, 'sabo', IVANKOV, 'koala']],
  // The four commanders are captioned a chapter before their records open.
  [904, [DRAGON, 'sabo', IVANKOV, U, U, U, U, 'koala']],
  [905, [DRAGON, 'sabo', IVANKOV, ...COMMANDERS, 'koala']],
  [1082, [DRAGON, 'sabo', IVANKOV, ...COMMANDERS, ...DEPUTIES, 'koala']],
]

const EPISODES: Steps = [
  [314, [DRAGON]],
  [441, [DRAGON, IVANKOV]],
  [663, [DRAGON, IVANKOV, 'koala']],
  [679, [DRAGON, 'sabo', IVANKOV, 'koala']],
  [880, [DRAGON, 'sabo', IVANKOV, ...COMMANDERS, 'koala']],
  [1116, [DRAGON, 'sabo', IVANKOV, ...COMMANDERS, ...DEPUTIES, 'koala']],
]

/** Each step with the seats just before it: none before the army opens. */
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

/** Every gate of the army: its own, its seats', holdings' and holders'. */
const GATES: Gated[] = [
  REVOLUTIONARY_ARMY,
  ...REVOLUTIONARY_ARMY.seats.flatMap(({ holders, told }) => [
    told,
    ...holders.flatMap((holding) => holdingGates(holding)),
  ]),
]

/** A point and the one just before it. */
const sides = (at: number): number[] => [at - 1, at]

/** Each gate and the point just before it, in both media. */
const BOOKMARKS: Bookmark[] = [
  ...[...new Set(GATES.flatMap((g) => sides(g.revealedAtChapter)))].map((at) =>
    chapter(at),
  ),
  ...[...new Set(GATES.flatMap((g) => sides(g.revealedAtEpisode)))].map((at) =>
    episode(at),
  ),
]

describe('the Revolutionary Army', () => {
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

  it('stands after the Cross Guild, the last of the crews', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, chapter(1082), 'en'),
    )
    const ids = page.bodies.map(({ id }) => id)

    expect(ids.indexOf('revolutionary-army')).toBe(
      ids.indexOf('cross-guild') + 1,
    )
  })

  it('titles every rank in Italian too', () => {
    const page = powerPage(
      readerFor(ONE_PIECE_LOADED.archive, chapter(1082), 'it'),
    )
    const body = page.bodies.find(({ id }) => id === 'revolutionary-army')

    expect(body?.name).toBe('Armata Rivoluzionaria')
    expect(body?.seats.map(({ title }) => title)).toStrictEqual([
      'Comandante supremo',
      'Capo di stato maggiore',
      'Comandante',
      'Comandante dell’armata dell’Est',
      'Comandante dell’armata dell’Ovest',
      'Comandante dell’armata del Nord',
      'Comandante dell’armata del Sud',
      'Vicecomandante dell’armata dell’Est',
      'Vicecomandante dell’armata dell’Ovest',
      'Vicecomandante dell’armata del Nord',
      'Vicecomandante dell’armata del Sud',
      'Assistente maestra di karate degli uomini-pesce',
    ])
  })

  it('leaks nothing on either side of any of its gates', () => {
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
  // SWORD lands on Hachinosu in chapter 1080, which episode 1114 adapts.
  {
    id: 'hibari',
    chapter: 1080,
    episode: 1114,
    before: 'Marines, commander',
    after: 'Marines, SWORD commander',
  },
  {
    id: 'prince-grus',
    chapter: 1080,
    episode: 1114,
    before: 'Marines, rear admiral',
    after: 'Marines, SWORD rear admiral',
  },
  {
    id: 'sabo',
    chapter: 731,
    episode: 663,
    before: 'Dadan Family, sworn brother of Luffy and Ace',
    after: 'Revolutionary Army',
  },
  {
    id: 'sabo',
    chapter: 744,
    episode: 679,
    before: 'Revolutionary Army',
    after: 'Revolutionary Army, chief of staff',
  },
]

describe('the Revolutionary Army’s character pages', () => {
  it.each(MOVES)(
    'move $id’s affiliation at chapter $chapter and episode $episode',
    ({ after, before, chapter: at, episode: ep, id }) => {
      expect(affiliationAt(id, chapter(at - 1))).toBe(before)
      expect(affiliationAt(id, chapter(at))).toBe(after)
      expect(affiliationAt(id, episode(ep - 1))).toBe(before)
      expect(affiliationAt(id, episode(ep))).toBe(after)
    },
  )

  // His record opens at chapter 540, the one after he says it; the anime
  // tells it three episodes after his record opens.
  it('make Ivankov a commander from his record in the manga, at 441 in the anime', () => {
    const commander =
      'Impel Down level 5.5, queen; Revolutionary Army, commander'

    expect(affiliationAt(IVANKOV, chapter(540))).toBe(commander)
    expect(affiliationAt(IVANKOV, episode(440))).toBe(
      'Impel Down level 5.5, queen',
    )
    expect(affiliationAt(IVANKOV, episode(441))).toBe(commander)
  })
})

/** The titles of Teach's chronicle at a bookmark. */
function teachStoriesAt(bookmark: Bookmark): string[] {
  const page = characterPage(
    'marshall-d-teach',
    readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'),
  )

  return page !== undefined && 'detail' in page ?
      page.detail.chronicle.entries.map(({ title }) => title)
    : []
}

describe('Teach’s story at Winner Island', () => {
  it('opens at chapter 1081 and episode 1115, not before', () => {
    const title = 'Letting the prize slip'

    expect(teachStoriesAt(chapter(1080))).not.toContain(title)
    expect(teachStoriesAt(chapter(1081))).toContain(title)
    expect(teachStoriesAt(episode(1114))).not.toContain(title)
    expect(teachStoriesAt(episode(1115))).toContain(title)
  })
})

/** The four deputy commanders, each with the commander of their army. */
const DEPUTY_CARDS = [
  { id: 'ahiru', name: 'Ahiru', commander: 'belo-betty' },
  { id: 'ushiano', name: 'Ushiano', commander: 'morley' },
  { id: 'jiron', name: 'Jiron', commander: 'karasu' },
  { id: 'gambo', name: 'Gambo', commander: 'lindbergh' },
]

const DEPUTY_CASES = DEPUTY_CARDS.flatMap((deputy) =>
  LOCALES.flatMap((locale) =>
    [
      { unit: 'chapter', gate: 1082 },
      { unit: 'episode', gate: 1116 },
    ].map((side) => ({ ...deputy, ...side, locale })),
  ),
)

describe.each(DEPUTY_CASES)('$id in $locale by $unit', (row) => {
  const at = (count: number): Bookmark =>
    row.unit === 'chapter' ? chapter(count) : episode(count)

  it('opens the record, its drawing and its card at its caption, never before', () => {
    const before = readerFor(
      ONE_PIECE_LOADED.archive,
      at(row.gate - 1),
      row.locale,
    )
    const reached = readerFor(
      ONE_PIECE_LOADED.archive,
      at(row.gate),
      row.locale,
    )
    const closed = characterPage(row.id, before)
    const open = characterPage(row.id, reached)

    expect(
      closed !== undefined && 'detail' in closed && closed.detail.slot.open,
    ).toBe(false)
    expect(JSON.stringify(closed)).not.toContain(row.name)
    expect(drawingsFor([row.id], before)).toStrictEqual({})
    expect(
      opRelationshipsPage(row.id, at(row.gate - 1), row.locale),
    ).toStrictEqual([])

    expect(
      open !== undefined && 'detail' in open && open.detail.slot.open,
    ).toBe(true)
    expect(drawingsFor([row.id], reached)[row.id]?.length).toBeGreaterThan(3)
    expect(
      opRelationshipsPage(row.id, at(row.gate), row.locale).map(
        ({ person }) => person.id,
      ),
    ).toStrictEqual([row.commander])
  })
})
