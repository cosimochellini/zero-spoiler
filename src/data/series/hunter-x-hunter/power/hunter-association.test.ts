import { describe, expect, it } from 'vitest'

import type { Bookmark } from '~/lib/progress/episode'
import { seatsOf, U, V } from '~/test/power'
import { loadedSeries } from '~/test/series'

const HUNTER_X_HUNTER = loadedSeries('hunter-x-hunter')

/** The Association's seats at a bookmark: holder ids, `vacant` or `unknown`. */
const associationAt = (bookmark: Bookmark): string[] | undefined =>
  seatsOf(HUNTER_X_HUNTER, 'hunter-association', bookmark)

/**
 * The fourteen seats in order: chairman, vice chairman, then the Rat, Ox,
 * Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Chicken, Dog and Boar.
 */
type Seats = string[]

const ZODIACS_319: Seats = [
  V,
  U,
  U,
  U,
  U,
  U,
  'botobai-gigante',
  U,
  U,
  U,
  U,
  U,
  'cheadle-yorkshire',
  'ging-freecss',
]
const ZODIACS_320: Seats = ZODIACS_319.with(4, 'kanzai')
  .with(5, 'pyon')
  .with(9, 'ginta')
  .with(11, 'cluck')
const ZODIACS_321: Seats = ZODIACS_320.with(1, 'pariston-hill')
  .with(2, 'pariston-hill')
  .with(7, 'gel')
  .with(10, 'saiyu')
const ZODIACS_326: Seats = ZODIACS_321.with(3, 'mizaistom-nana').with(
  8,
  'saccho-kobayakawa',
)
const VICE_335: Seats = ZODIACS_326.with(1, 'cheadle-yorkshire')
const WITHDRAWN_340: Seats = VICE_335.with(0, 'cheadle-yorkshire')
  .with(1, V)
  .with(2, V)
  .with(13, V)
const NEW_346: Seats = WITHDRAWN_340.with(2, 'kurapika').with(
  13,
  'leorio-paradinight',
)

/** Every seat held at the roster, as the anime names all twelve at once. */
const ROSTER_137: Seats = [
  V,
  'pariston-hill',
  'pariston-hill',
  'mizaistom-nana',
  'kanzai',
  'pyon',
  'botobai-gigante',
  'gel',
  'saccho-kobayakawa',
  'ginta',
  'saiyu',
  'cluck',
  'cheadle-yorkshire',
  'ging-freecss',
]

describe('the Hunter Association', () => {
  it.each([
    [11, undefined],
    [12, ['netero']],
    [297, ['netero']],
    [298, [V]],
    [318, [V]],
    [319, ZODIACS_319],
    [320, ZODIACS_320],
    [321, ZODIACS_321],
    [325, ZODIACS_321],
    [326, ZODIACS_326],
    [334, ZODIACS_326],
    [335, VICE_335],
    [339, VICE_335],
    [340, WITHDRAWN_340],
    [345, WITHDRAWN_340],
    [346, NEW_346],
    [430, NEW_346],
  ])('seat at chapter %i what the manga has told', (chapter, seats) => {
    expect(associationAt({ mode: 'chapter', chapter })).toStrictEqual(seats)
  })

  it.each([
    [5, undefined],
    [6, ['netero']],
    [125, ['netero']],
    [126, [V]],
    [136, [V]],
    [137, ROSTER_137],
    [145, ROSTER_137],
    [146, ROSTER_137.with(1, 'cheadle-yorkshire')],
    // The manga-only changes of chapters 340 and 346 never reach the anime.
    [148, ROSTER_137.with(1, 'cheadle-yorkshire')],
  ])('seat at episode %i what the anime has told', (episode, seats) => {
    expect(associationAt({ mode: 'episode', episode })).toStrictEqual(seats)
  })
})
