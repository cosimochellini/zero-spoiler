import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { seatsOf, V } from '~/test/power'
import { loadedSeries } from '~/test/series'

const HUNTER_X_HUNTER = loadedSeries('hunter-x-hunter')

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
})
