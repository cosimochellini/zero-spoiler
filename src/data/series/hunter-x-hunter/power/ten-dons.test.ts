import { describe, expect, it } from 'vitest'

import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { PowerPageView } from '~/lib/view/power'
import { powerPage } from '~/server/archive/power.server'
import { readerFor } from '~/server/archive/reader.server'
import { seatsOf, V } from '~/test/power'
import { loadedSeries } from '~/test/series'

import { TEN_DONS } from './ten-dons'

const HUNTER_X_HUNTER = loadedSeries('hunter-x-hunter')

/** The series with the Dons as its only body, so the fog line is theirs. */
const DONS_ONLY: SeriesArchive = {
  ...HUNTER_X_HUNTER.archive,
  features: {
    ...HUNTER_X_HUNTER.archive.features,
    power: { bodies: [TEN_DONS] },
  },
}

/** The ranks page at a bookmark, with the Dons as its only body. */
const aloneAt = (bookmark: Bookmark): PowerPageView =>
  powerPage(readerFor(DONS_ONLY, bookmark, 'en'))

/** The Dons' seats at a bookmark: `vacant` or `unknown`, as no one is named. */
const donsAt = (bookmark: Bookmark): string[] | undefined =>
  seatsOf(HUNTER_X_HUNTER, 'ten-dons', bookmark)

/** The ten seats once all ten Dons are killed. */
const KILLED = Array.from({ length: 10 }, () => V)

describe('the Ten Dons', () => {
  // Named at chapter 74 with every seat under fog, the body is not listed
  // until the seats empty at chapter 100 (#1194).
  it.each([
    [73, undefined],
    [74, undefined],
    [99, undefined],
    [100, KILLED],
    [430, KILLED],
  ])('seat at chapter %i what the manga has told', (chapter, seats) => {
    expect(donsAt({ mode: 'chapter', chapter })).toStrictEqual(seats)
  })

  it.each([
    [42, undefined],
    [43, undefined],
    [52, undefined],
    [53, KILLED],
    [148, KILLED],
  ])('seat at episode %i what the anime has told', (episode, seats) => {
    expect(donsAt({ mode: 'episode', episode })).toStrictEqual(seats)
  })

  // The fog line is the Dons' own from their naming at 74 / 43 until their
  // seats empty at 100 / 53, where the second description shows.
  it.each([
    [{ mode: 'chapter', chapter: 73 }, undefined],
    [{ mode: 'chapter', chapter: 74 }, true],
    [{ mode: 'chapter', chapter: 99 }, true],
    [{ mode: 'chapter', chapter: 100 }, undefined],
    [{ mode: 'episode', episode: 42 }, undefined],
    [{ mode: 'episode', episode: 43 }, true],
    [{ mode: 'episode', episode: 52 }, true],
    [{ mode: 'episode', episode: 53 }, undefined],
  ] satisfies [Bookmark, true | undefined][])(
    'puts the Dons in the fog line at %j: %s',
    (bookmark, fogged) => {
      expect(aloneAt(bookmark).fogged).toBe(fogged)
    },
  )

  it.each([
    { mode: 'chapter', chapter: 100 },
    { mode: 'episode', episode: 53 },
  ] satisfies Bookmark[])('describes them dead at %j', (bookmark) => {
    expect(aloneAt(bookmark).bodies[0]?.description).toBe(
      TEN_DONS.description[1]?.value.en,
    )
  })
})
