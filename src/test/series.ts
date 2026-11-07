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

function onePiece(): LoadedSeries {
  const found = LOADED_SERIES.find(({ slug }) => slug === 'one-piece')
  if (found === undefined) {
    throw new Error('One Piece fixture is not registered')
  }
  return found
}
export const ONE_PIECE_LOADED = onePiece()

/**
 * What a filed series is known to hold: the kinds of text its leak scan
 * reads (`~/data/leaks.test.ts`), whether a record says its name before it
 * opens, and the least it files of what the shared data rules read
 * (`~/data/archive.test.ts`), within nine tenths of the real counts, so a
 * rule over a series that files content cannot pass on nothing or on a
 * reader that lost some of it. A new series needs a row here.
 */
export interface Expected {
  kinds: string[]
  least: Least
  namesSaidEarly: boolean
}

/** The least a series files of each thing the shared rules read. */
export interface Least {
  affiliations: number
  arcs: number
  characters: number
  chronicles: number
  linkedOrigins: number
  places: number
  statuses: number
  timelines: number
  visits: number
}

const EXPECTED: Record<string, Expected> = {
  // What it files on 2026-11-01 (#980 dropped Spandam's unsourced step).
  'one-piece': {
    kinds: [
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
    least: {
      affiliations: 807,
      arcs: 34,
      characters: 534,
      chronicles: 757,
      linkedOrigins: 118,
      places: 39,
      statuses: 799,
      timelines: 2591,
      visits: 13,
    },
    namesSaidEarly: true,
  },
  // What it files on 2026-11-06: the arcs, the Hunter Exam’s road to the
  // exam through the visit to Killua's home, chapter-one characters (#760),
  // the Heavens Arena characters and place (#896), Silva (#834), Yorknew
  // City (#900), Greed Island through the finale (#1016–#1019) and Michael
  // (#1032), and chronicles for the characters filed through #1019 and the
  // returning cast (#906). Chimera Ant phase 1 (#1020) adds five characters
  // and one place, phase 2 (#1021) 27 characters and eight places, and
  // phase 3 (#1022) 11 characters and four places. Phase 4 (#1023) adds
  // one character and opens an existing place in the anime. Phase 5 (#1024)
  // adds one character and files the finale. Election (#912) covers episode
  // 137–148 and chapter 319–339; #914 adds 91 chronicles for its new and returning cast.
  // Kakin phase 1 (#1134) adds 26 manga-only characters and one place, chapter 340–357.
  // Phase 2 (#1135) adds 19 characters and the Black Whale, chapter 358–370.
  // Phase 3 (#1136) adds four characters, chapter 371–383.
  // Phase 4 (#1137) adds 36 characters and two places, chapter 384–400.
  // Phase 5 (#1138) adds 22 characters, chapter 401–420 (counted 2026-11-06).
  // #1155 adds 99 manga-only chronicles for chapters 340–370 (2026-11-07).
  // #1157 adds 120 for chapters 371–400, four manga-only statuses and one affiliation; statuses and affiliations are exact (2026-11-07).
  // #1159 adds 84 for chapters 401–420 and two manga-only statuses; chronicles and statuses are exact, timelines a floor within 90% (2026-11-07).
  'hunter-x-hunter': {
    kinds: [
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
      'summary',
    ],
    least: {
      affiliations: 464,
      arcs: 7,
      characters: 290,
      chronicles: 994,
      linkedOrigins: 10,
      places: 43,
      statuses: 383,
      timelines: 1274,
      visits: 0,
    },
    namesSaidEarly: true,
  },
  // Counted 2026-11-07, after the Night's Watch's characters (#1007): 139
  // characters, 23 places and the season's heading.
  'game-of-thrones': {
    kinds: [
      'affiliation',
      'allRegions',
      'copy',
      'form',
      'landmark',
      'log',
      'region',
      'role',
      'summary',
    ],
    least: {
      affiliations: 158,
      arcs: 1,
      characters: 139,
      chronicles: 0,
      linkedOrigins: 0,
      places: 23,
      statuses: 164,
      timelines: 315,
      visits: 0,
    },
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
