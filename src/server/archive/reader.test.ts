import { describe, expect, it } from 'vitest'

import { featuredCharacters } from '~/data/series/one-piece/characters'
import { entities, getEntity } from '~/data/series/one-piece/entities'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { ABILITY_ARCHIVE, UNTYPED } from '~/test/abilities'
import {
  opHandleOf as handleOf,
  OP_ARCHIVE,
  opReaderFor as readerFor,
} from '~/test/archive'
import { loadedSeries } from '~/test/series'
import { onlyIn } from '~/test/sourceOnly'
import { handlesIn, isMarked, unmarked } from '~/test/visitor'

import { abilityPage } from './abilities.server'
import { characterPage } from './pages.server'
import { placePage } from './placePage.server'
import { pageReader, readerFor as readerIn } from './reader.server'

/** A page's detail, as far as these tests read it. */
interface UnitDetail {
  unit?: string
}

/** A page's own detail, a ship's included. */
function detailOf(page: unknown): undefined | UnitDetail {
  if (typeof page !== 'object' || page === null) {
    return undefined
  }
  const detail: unknown =
    'ship' in page ? page.ship : Reflect.get(page, 'detail')
  return typeof detail === 'object' && detail !== null ? detail : undefined
}

/** The fixture's untyped ability, told by the manga alone. */
const MANGA_ONLY_ABILITY = onlyIn(ABILITY_ARCHIVE, UNTYPED.id, 'chapter')

/** A record the archive is known to file, or the test is wrong. */
function must(id: string): Entity {
  const entity = getEntity(id)
  if (entity === undefined) {
    throw new Error(`${id} is not filed`)
  }

  return entity
}

/** One bookmark of each kind, and none. */
const MARKS: Bookmark[] = [
  null,
  { mode: 'episode', episode: 92 },
  { mode: 'season', season: 4, episode: 1 },
  { mode: 'chapter', chapter: 155 },
]

describe('readerFor', () => {
  it.each(MARKS)('keeps the open rows a prefix of the order, at %j', (mark) => {
    // Every list page draws one horizon between two runs, which only works
    // when nothing open comes after something covered in the reader's unit.
    const r = readerFor(mark, 'en')
    const split = r.split(entities, (entity) => entity)
    const ordered = r.order(entities)
    const open = ordered.filter((entity) => r.sees(entity))

    expect(split.total).toBe(entities.length)
    expect(split.open).toStrictEqual(ordered.slice(0, open.length))
    expect(split.covered.map((covered) => covered.handle)).toStrictEqual(
      ordered.slice(open.length).map((entity) => handleOf(entity.id)),
    )
  })

  it('covers a record with its handle and thresholds, and nothing else', () => {
    const robin = must('nico-robin')
    const slot = readerFor({ mode: 'episode', episode: 129 }, 'en').slot(
      robin,
      () => {
        throw new Error('a covered record is not projected')
      },
    )

    expect(slot).toStrictEqual({
      open: false,
      covered: {
        handle: handleOf(robin.id),
        kind: 'character',
        revealedAtEpisode: robin.revealedAtEpisode,
        revealedAtChapter: robin.revealedAtChapter,
      },
    })
  })

  it('projects a reached record with the reader it was read by', () => {
    const r = readerFor({ mode: 'episode', episode: 130 }, 'it')
    const slot = r.slot(
      must('nico-robin'),
      (entity, reader) => `${entity.id} ${reader.locale}`,
    )

    expect(slot).toStrictEqual({ open: true, record: 'nico-robin it' })
  })

  it('orders by the reader’s own unit', () => {
    // Shanks is on the first page of the manga and in the fourth episode.
    const shanks = must('shanks')
    const byChapter = readerFor({ mode: 'chapter', chapter: 1 }, 'en').order(
      entities,
    )
    const byEpisode = readerFor(null, 'en').order(entities)

    expect(byChapter.indexOf(shanks)).toBeLessThan(byEpisode.indexOf(shanks))
  })

  it('finds the nearest records in the reader’s own unit, never the record', () => {
    // Luffy is episode 1 and chapter 1; Shanks is episode 4 but chapter 1.
    const luffy = must('monkey-d-luffy')
    const near = (mark: Bookmark): string[] => {
      return readerFor(mark, 'en')
        .nearest(luffy, featuredCharacters, 3)
        .map((entity) => entity.id)
    }

    expect(near(null)).toStrictEqual(['koby', 'roronoa-zoro', 'shanks'])
    expect(near({ mode: 'chapter', chapter: 1 })).toStrictEqual([
      'shanks',
      'koby',
      'roronoa-zoro',
    ])
  })

  it('breaks a tie by whoever the reader’s route reaches first', () => {
    const here = {
      ...must('nami'),
      revealedAtEpisode: 10,
      revealedAtChapter: 10,
    }
    const early = {
      ...here,
      id: 'early',
      revealedAtEpisode: 8,
      revealedAtChapter: 12,
    }
    const late = {
      ...here,
      id: 'late',
      revealedAtEpisode: 12,
      revealedAtChapter: 8,
    }
    const near = (mark: Bookmark): string[] => {
      return readerFor(mark, 'en')
        .nearest(here, [early, late], 2)
        .map((entity) => entity.id)
    }

    expect(near({ mode: 'episode', episode: 1 })).toStrictEqual([
      'early',
      'late',
    ])
    expect(near({ mode: 'chapter', chapter: 1 })).toStrictEqual([
      'late',
      'early',
    ])
  })
})

describe('pageReader', () => {
  const robin = must('nico-robin')

  it.each(MARKS.filter((mark) => mark !== null))(
    'is the bookmark’s own reader at %j',
    (mark) => {
      const page = pageReader(OP_ARCHIVE, mark, { id: robin.id, locale: 'en' })
      const own = readerFor(mark, 'en')

      expect(page.bookmark).toStrictEqual(mark)
      expect(entities.map((entity) => page.sees(entity))).toStrictEqual(
        entities.map((entity) => own.sees(entity)),
      )
    },
  )

  it('draws a record page with no bookmark at the record’s first appearance', () => {
    const r = pageReader(OP_ARCHIVE, null, { id: robin.id, locale: 'en' })

    const seen = entities.filter((entity) => r.sees(entity))

    expect(r.bookmark).toBeNull()
    expect(seen).toContain(robin)
    expect(
      seen.every(
        (entity) =>
          entity.revealedAtEpisode <= robin.revealedAtEpisode
          && entity.revealedAtChapter <= robin.revealedAtChapter,
      ),
    ).toBe(true)
    // The archive a reader with no bookmark lifts from, so the handles match.
    expect(r.archive).toBe(readerFor(null, 'en').archive)
    expect(r.slot(must('franky'), () => null).open).toBe(false)
  })

  it('opens a list with no bookmark up to the end of the demo, in both units', () => {
    const r = pageReader(OP_ARCHIVE, null, { locale: 'en' })
    const { demoLastEpisode, demoLastChapter } = OP_ARCHIVE.series

    const seen = entities.filter((entity) => r.sees(entity))

    expect(seen).not.toContain(must('nico-robin'))
    expect(seen).toContain(must('shanks'))
    expect(
      seen.every(
        (entity) =>
          entity.revealedAtEpisode <= demoLastEpisode
          && entity.revealedAtChapter <= demoLastChapter,
      ),
    ).toBe(true)
  })

  it('sees nothing for an id the archive does not file', () => {
    const r = pageReader(OP_ARCHIVE, null, { id: 'nobody', locale: 'en' })

    expect(entities.some((entity) => r.sees(entity))).toBe(false)
  })
})

/** The page of a record of each kind a record of one source only is filed as. */
const PAGES = {
  ability: abilityPage,
  character: characterPage,
  place: placePage,
} as const

/**
 * Records of one source only, each pinned to the source that tells it, the
 * point it opens at there and the unit its page prints (#1431).
 */
const ONE_SOURCE = [
  // Show only: Theon and Jon name her in "Cripples, Bastards, and Broken
  // Things" (season 1, episode 4); the books have no Ros.
  {
    archive: loadedSeries('game-of-thrones').archive,
    kind: 'character',
    id: 'ros',
    own: { mode: 'episode', episode: 4 },
    other: { mode: 'chapter', chapter: 100 },
    unit: undefined,
  },
  // Manga only: the Kakin succession war is not animated; the third prince
  // is named in the chapter 343 roster.
  {
    archive: loadedSeries('hunter-x-hunter').archive,
    kind: 'character',
    id: 'tserriednich-hui-guo-rou',
    own: { mode: 'chapter', chapter: 343 },
    other: { mode: 'episode', episode: 148 },
    unit: 'chapter',
  },
  // Books only: Eddard III (site chapter 17) holds the judgment in Castle
  // Darry; the show moves it to the Inn at the Crossroads.
  {
    archive: loadedSeries('game-of-thrones').archive,
    kind: 'place',
    id: 'darry',
    own: { mode: 'chapter', chapter: 17 },
    other: { mode: 'episode', episode: 10 },
    unit: 'chapter',
  },
  // Show only: Robert hunts in the Kingswood in "A Golden Crown" (season 1,
  // episode 6); the books keep the hunt off the page.
  {
    archive: loadedSeries('game-of-thrones').archive,
    kind: 'place',
    id: 'kingswood',
    own: { mode: 'episode', episode: 6 },
    other: { mode: 'chapter', chapter: 100 },
    unit: undefined,
  },
  // Manga only: chapter 134's map names the Shiso Tree; no anime scene does.
  {
    archive: loadedSeries('hunter-x-hunter').archive,
    kind: 'place',
    id: 'shiso-tree',
    own: { mode: 'chapter', chapter: 134 },
    other: { mode: 'episode', episode: 148 },
    unit: 'chapter',
  },
  // No Nen ability is filed for one source only: the fixture's untyped
  // ability (episode 45 / chapter 78, `~/test/abilities`) made a manga-only
  // one.
  {
    archive: MANGA_ONLY_ABILITY,
    kind: 'ability',
    id: UNTYPED.id,
    own: { mode: 'chapter', chapter: 78 },
    other: { mode: 'episode', episode: 80 },
    unit: 'chapter',
  },
] as const

describe('the page of a record of one source only, with no bookmark', () => {
  it.each(ONE_SOURCE)(
    '$id is drawn as its source’s reader sees it at its own threshold, in its unit',
    ({ archive, id, kind, own, unit }) => {
      const page = PAGES[kind](
        id,
        pageReader(archive, null, { id, locale: 'en' }),
      )
      const ownPage = PAGES[kind](id, readerIn(archive, own, 'en'))

      expect(ownPage).toBeDefined()
      expect(unmarked(page)).toBe(JSON.stringify(ownPage))
      expect(detailOf(page)).toMatchObject({ slot: { open: true } })
      expect(detailOf(page)?.unit).toBe(unit)
      // Every handle the page covers by carries its source, and none the
      // source's own reader is sent does.
      expect(
        handlesIn(page).filter((handle) => !isMarked(handle)),
      ).toStrictEqual([])
      expect(handlesIn(ownPage).filter(isMarked)).toStrictEqual([])
    },
  )

  it.each(ONE_SOURCE)(
    '$id is no page for a reader of the other source',
    ({ archive, id, kind, other }) => {
      expect(
        PAGES[kind](id, pageReader(archive, other, { id, locale: 'en' })),
      ).toBeUndefined()
    },
  )
})
