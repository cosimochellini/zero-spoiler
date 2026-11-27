import { describe, expect, it } from 'vitest'

import { SERIES } from '~/data/series'
import { archiveIn } from '~/data/source'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'
import { plant } from '~/test/sourceOnly'

import { abilitySheet } from './abilities.server'
import { fruitSheet } from './fruits.server'
import { hubFor, hubSeries, openArchives, openDescriptions } from './hub.server'
import { shelvesPage } from './pages.server'
import { placesPage } from './places.server'
import { readerFor } from './reader.server'

describe('hubSeries', () => {
  const { archive } = ONE_PIECE_LOADED

  it('carries only the series, its counts and the bookmark', () => {
    const bookmark = { mode: 'season', season: 14, episode: 3 } as const
    const { count, open, ...rest } = hubSeries(archive, bookmark)

    expect(rest).toStrictEqual({
      slug: 'one-piece',
      name: { en: 'One Piece', it: 'One Piece' },
      theme: 'one-piece',
      bookmark,
      demoLastEpisode: 61,
    })
    expect(count).toBe(archiveIn(archive, 'episode').entities.length)
    expect(open).toBeLessThanOrEqual(count)
  })

  it('says nothing of a bookmark the reader has not saved', () => {
    expect(hubSeries(archive, null).bookmark).toBeNull()
  })
})

describe('hubFor', () => {
  const { archive } = ONE_PIECE_LOADED
  const { cookie, trialCookie } = archive.series
  const bookmarkIn = (jar: [string, string][]): unknown =>
    hubFor(new Map(jar), [archive])[0]?.bookmark

  it('reads the saved bookmark of each series from its own cookie', () => {
    expect(bookmarkIn([[cookie, 's14e3']])).toStrictEqual({
      mode: 'season',
      season: 14,
      episode: 3,
    })
  })

  const cases: { case: string; jar: [string, string][] }[] = [
    { jar: [], case: 'no cookie' },
    { jar: [[trialCookie, '5']], case: 'a trial only' },
    { jar: [[cookie, 'nope']], case: 'a saved cookie the dialog never wrote' },
  ]

  it.each(cases)('shows no bookmark for $case', ({ jar }) => {
    expect(bookmarkIn(jar)).toBeNull()
  })
})

describe('the count on the hub', () => {
  const { archive } = ONE_PIECE_LOADED
  const episodeOnly = plant(archive, 'episode').archive
  const chapterOnly = plant(archive, 'chapter').archive
  const planted = episodeOnly.entities.length - archive.entities.length
  const countAt = (
    base: typeof archive,
    bookmark: Parameters<typeof hubSeries>[1],
  ): number => hubSeries(base, bookmark).count

  it('plants a record of one source of every kind', () => {
    expect(planted).toBeGreaterThan(0)
  })

  it.each([
    { reader: 'an episode', bookmark: { mode: 'episode', episode: 1 } },
    { reader: 'a season', bookmark: { mode: 'season', season: 1, episode: 1 } },
  ] as const)(
    'counts the episode-only records for $reader reader',
    ({ bookmark }) => {
      expect(countAt(episodeOnly, bookmark)).toBe(
        archive.entities.length + planted,
      )
      expect(countAt(chapterOnly, bookmark)).toBe(archive.entities.length)
    },
  )

  it('counts the chapter-only records for a chapter reader', () => {
    const bookmark = { mode: 'chapter', chapter: 1 } as const

    expect(countAt(chapterOnly, bookmark)).toBe(
      archive.entities.length + planted,
    )
    expect(countAt(episodeOnly, bookmark)).toBe(archive.entities.length)
  })

  it('counts only what both sources tell for a reader with no bookmark', () => {
    expect(countAt(episodeOnly, null)).toBe(archive.entities.length)
    expect(countAt(chapterOnly, null)).toBe(archive.entities.length)
  })
})

/**
 * The open count against what the listings send at the same bookmark: the
 * arcs and characters on the shelves, the places and ships on the places
 * page, the fruits' plates and the abilities' bands. Two known differences:
 * One Piece's first arc, East Blue, is an entry no shelf carries, and Game of
 * Thrones' shelves are headed by seasons that are not entries.
 */
describe('the open count on the hub', () => {
  /** Arcs the hub counts that no shelf heads. */
  const UNSHELVED: Partial<Record<string, string[]>> = {
    'one-piece': ['east-blue'],
  }
  const bookmarks: NonNullable<Bookmark>[] = [
    { mode: 'episode', episode: 20 },
    { mode: 'episode', episode: 60 },
    { mode: 'chapter', chapter: 300 },
  ]
  const cases = LOADED_SERIES.flatMap(({ slug, archive }) =>
    bookmarks.map((bookmark) => ({ slug, archive, bookmark })),
  )

  it.each(cases)(
    'adds up the listings of $slug at $bookmark',
    ({ slug, archive, bookmark }) => {
      const r = readerFor(archive, bookmark, 'en')
      const shelves = shelvesPage(r)
      // Game of Thrones' season headings are not entries, so they are not counted.
      const shelvedArcs = shelves.filter(
        ({ arc }) =>
          arc.open && r.archive.getEntity(arc.record.id) !== undefined,
      )
      const unshelved = (UNSHELVED[slug] ?? []).filter((id) => {
        const arc = r.archive.getEntity(id)
        return arc !== undefined && r.sees(arc)
      })
      const places = placesPage(r)
      const listed =
        shelvedArcs.length
        + unshelved.length
        + shelves.reduce((sum, shelf) => sum + shelf.open.length, 0)
        + places.open.length
        + places.ships.length
        + fruitSheet(r).plates.reduce((sum, plate) => sum + plate.opened, 0)
        + abilitySheet(r).bands.reduce((sum, band) => sum + band.open.length, 0)

      expect(hubSeries(archive, bookmark).open).toBe(listed)
    },
  )

  it('opens nothing with no bookmark', () => {
    for (const { archive } of LOADED_SERIES) {
      expect(hubSeries(archive, null).open).toBe(0)
    }
  })
})

/** The series filed but not open: none once every series has opened. */
const CLOSED = SERIES.filter(({ open }) => !open).map(({ slug }) => slug)

describe('the series a reader reaches', () => {
  // A series filed but not open is swept by every gate and shown nowhere:
  // the hub's cards and the legal page's descriptions leave it out.
  it.skipIf(CLOSED.length === 0)('describes no series that is not open', () => {
    const described = openDescriptions().map(({ slug }) => slug)

    expect(described.filter((slug) => CLOSED.includes(slug))).toStrictEqual([])
  })

  it.skipIf(CLOSED.length === 0)(
    'puts no card on the hub for a series that is not open',
    async () => {
      const cards = hubFor(new Map(), await openArchives()).map(
        ({ slug }) => slug,
      )

      expect(cards.filter((slug) => CLOSED.includes(slug))).toStrictEqual([])
    },
  )
})
