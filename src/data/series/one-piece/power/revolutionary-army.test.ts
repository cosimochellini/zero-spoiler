import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { characterPage } from '~/server/archive/pages.server'
import { powerPage } from '~/server/archive/power.server'
import { factsOf } from '~/server/archive/project.server'
import { readerFor } from '~/server/archive/reader.server'
import { opReaderFor, opRelationshipsPage } from '~/test/archive'
import { gateCases, opened, recordIn, sidesOf } from '~/test/gates'
import {
  bodyGates,
  edges,
  powerLeaks,
  seatsOf,
  type Steps,
  U,
} from '~/test/power'
import { ONE_PIECE_LOADED } from '~/test/series'

import { REVOLUTIONARY_ARMY } from './revolutionary-army'

/** The army's seats at a bookmark: holder ids, or `unknown`. */
const seatsAt = (bookmark: Bookmark): string[] | undefined =>
  seatsOf(ONE_PIECE_LOADED, 'revolutionary-army', bookmark)

const DRAGON = 'monkey-d-dragon'
const IVANKOV = 'emporio-ivankov'
const COMMANDERS = ['belo-betty', 'morley', 'karasu', 'lindbergh']
const DEPUTIES = ['ahiru', 'ushiano', 'jiron', 'gambo']

// A seat told before its holder's record opens stands unnamed until it
// does, so the two media's steps are not the same list.
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

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

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
    expect(
      powerLeaks(
        ONE_PIECE_LOADED,
        bodyGates(ONE_PIECE_LOADED, REVOLUTIONARY_ARMY),
      ),
    ).toStrictEqual([])
  })
})

/** A character's affiliation at a bookmark, as an English reader sees it. */
function affiliationAt(id: string, bookmark: Bookmark): unknown {
  return factsOf(
    recordIn(ONE_PIECE_LOADED.archive, id),
    opReaderFor(bookmark, 'en'),
  ).affiliation
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
    (move) => {
      for (const side of sidesOf(move, ONE_PIECE_LOADED.archive.series)) {
        expect(affiliationAt(move.id, side.before)).toBe(move.before)
        expect(affiliationAt(move.id, side.reached)).toBe(move.after)
      }
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
].map((deputy) => ({ ...deputy, chapter: 1082, episode: 1116 }))

describe.each(gateCases(DEPUTY_CARDS, ONE_PIECE_LOADED.archive.series))(
  '$id in $locale by $unit',
  (row) => {
    it('opens the record, its drawing and its card at its caption, never before', () => {
      const r = (bookmark: Bookmark): ReturnType<typeof readerFor> =>
        readerFor(ONE_PIECE_LOADED.archive, bookmark, row.locale)

      const closed = characterPage(row.id, r(row.before))

      expect(opened(row.id, r(row.before))).toBe(false)
      expect(JSON.stringify(closed)).not.toContain(row.name)
      expect(opRelationshipsPage(row.id, row.before, row.locale)).toStrictEqual(
        [],
      )

      expect(opened(row.id, r(row.reached))).toBe(true)
      expect(
        opRelationshipsPage(row.id, row.reached, row.locale).map(
          ({ person }) => person.id,
        ),
      ).toStrictEqual([row.commander])
    })
  },
)
