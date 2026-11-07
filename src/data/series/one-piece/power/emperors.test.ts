import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { powerPage } from '~/server/archive/power.server'
import { readerFor } from '~/server/archive/reader.server'
import { ONE_PIECE_LOADED } from '~/test/series'

/** The Emperors' seats at a bookmark: holder ids, `vacant` or `unknown`. */
function emperorsAt(bookmark: Bookmark): string[] | undefined {
  const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))

  return page.bodies
    .find(({ id }) => id === 'emperors')
    ?.seats.map((seat) => (seat.state === 'held' ? seat.holder.id : seat.state))
}

const BEFORE = ['shanks', 'edward-newgate', 'unknown', 'unknown']
const VACANT = ['shanks', 'vacant', 'unknown', 'unknown']
const TEACH = ['shanks', 'marshall-d-teach', 'unknown', 'unknown']
const KAIDO = ['shanks', 'marshall-d-teach', 'kaido', 'unknown']
const OLD = ['shanks', 'marshall-d-teach', 'kaido', 'charlotte-linlin']
const NEW = ['shanks', 'marshall-d-teach', 'monkey-d-luffy', 'buggy']

describe('the Four Emperors', () => {
  it.each([
    [431, undefined],
    [432, BEFORE],
    [575, BEFORE],
    [576, VACANT],
    [577, VACANT],
    [649, VACANT],
    [650, TEACH],
    [794, TEACH],
    [795, KAIDO],
    [830, KAIDO],
    [831, OLD],
    [1052, OLD],
    [1053, NEW],
  ])('seat at chapter %i what the manga has told', (chapter, seats) => {
    expect(emperorsAt({ mode: 'chapter', chapter })).toStrictEqual(seats)
  })

  it.each([
    [313, undefined],
    [314, BEFORE],
    [484, BEFORE],
    [485, VACANT],
    [486, VACANT],
    [569, VACANT],
    [570, TEACH],
    [738, TEACH],
    [739, KAIDO],
    [785, KAIDO],
    [786, OLD],
    [1079, OLD],
    [1080, NEW],
  ])('seat at episode %i what the anime has told', (episode, seats) => {
    expect(emperorsAt({ mode: 'episode', episode })).toStrictEqual(seats)
  })
})
