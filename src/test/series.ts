import { filedArchiveOf, type ListedSeries, SERIES } from '~/data/series'
import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'

/** A loaded registry entry for synchronous spoiler assertions. */
export interface LoadedSeries extends ListedSeries {
  archive: SeriesArchive
  bookmarks: Bookmark[]
}

export const LOADED_SERIES: LoadedSeries[] = await Promise.all(
  SERIES.map(async (entry) => {
    const archive = await filedArchiveOf(entry.slug)
    return { ...entry, archive, bookmarks: archive.bookmarks }
  }),
)

/** A loaded series by slug, or the test is wrong: it is not registered. */
export function loadedSeries(slug: string): LoadedSeries {
  const found = LOADED_SERIES.find((entry) => entry.slug === slug)
  if (found === undefined) {
    throw new Error(`${slug} is not registered`)
  }
  return found
}
export const ONE_PIECE_LOADED = loadedSeries('one-piece')

/**
 * What a filed series is known to hold: the kinds of text its leak scan
 * reads (`~/data/leaks.test.ts`) and whether a record says its name before it
 * opens. How much it files is the generated count table in
 * `docs/architecture.md` (`npm run docs:counts`, checked by `gate:docs`).
 * A new series needs a row here.
 */
export interface Expected {
  kinds: string[]
  namesSaidEarly: boolean
}

const EXPECTED: Record<string, Expected> = {
  'one-piece': {
    kinds: [
      'about',
      'affiliation',
      'builder',
      'chronicle',
      'copy',
      'epithet',
      'faction',
      'fate',
      'landmark',
      'log',
      'origin',
      'relationships[].summary',
      'relationships[].type',
      'role',
      'seat',
      'summary',
      'title',
      'visit',
    ],
    namesSaidEarly: true,
  },
  'hunter-x-hunter': {
    kinds: [
      'about',
      'affiliation',
      'allRegions',
      'chronicle',
      'copy',
      'epithet',
      'form',
      'landmark',
      'log',
      'origin',
      'region',
      'relationships[].summary',
      'relationships[].type',
      'role',
      'seat',
      'summary',
    ],
    namesSaidEarly: true,
  },
  'game-of-thrones': {
    kinds: [
      'affiliation',
      'allRegions',
      'chronicle',
      'copy',
      'form',
      'landmark',
      'log',
      'region',
      'relationships[].summary',
      'relationships[].type',
      'role',
      'summary',
      'visit',
    ],
    namesSaidEarly: true,
  },
}

/** A series' row, or the test is wrong: a series filed needs one. */
export function expectedOf(slug: string): Expected {
  const row = EXPECTED[slug]
  if (row === undefined) {
    throw new Error(`no EXPECTED row for ${slug}`)
  }

  return row
}
