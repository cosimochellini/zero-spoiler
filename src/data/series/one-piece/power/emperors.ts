import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/** Garp tells the Straw Hats of the Four Emperors: ch. 432, ep 314. */
const TOLD = { revealedAtEpisode: 314, revealedAtChapter: 432 }

const EMPEROR = { en: 'Emperor', it: 'Imperatore' }

/** One of the four seats, told with the body and held as `holders` say. */
function seat(holders: Seat['holders']): Seat {
  return { told: TOLD, title: EMPEROR, holders }
}

/**
 * The Four Emperors (#1087), in the order the story names them. Kaido is
 * named an Emperor at ch. 483 and Big Mom at ch. 581, long before their
 * records open (795 and 831): their seats wait, fogged, for the records.
 * Luffy and Buggy are named together at ch. 1053; the story pairs neither
 * with the seat he takes, so Luffy takes the one of Kaido, whom he beat.
 */
export const EMPERORS: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'emperors',
  kind: 'council',
  description: [
    {
      chapter: 432,
      episode: 314,
      value: {
        en: 'Four pirates so strong that the world counts them as one of its three great powers, which keep it in balance. Each stands at the head of a pirate crew.',
        it: 'Quattro pirati così forti che il mondo li conta come una delle sue tre grandi potenze, quelle che lo tengono in equilibrio. Ognuno guida una ciurma di pirati.',
      },
    },
    {
      chapter: 1053,
      episode: 1080,
      value: {
        en: 'Four pirates the world names as its Emperors. Two of them are newly named, in place of two who fell.',
        it: 'Quattro pirati che il mondo nomina suoi Imperatori. Due sono nominati da poco, al posto di due che sono caduti.',
      },
    },
  ],
  seats: [
    // Ch. 432 p.4–7: Garp names Shanks one of the Four Emperors.
    seat([{ episode: 314, chapter: 432, value: 'shanks' }]),
    seat([
      // Ch. 432 p.7: Whitebeard is an Emperor too.
      { episode: 314, chapter: 432, value: 'edward-newgate' },
      // Ch. 576 p.15: Whitebeard dies.
      { episode: 485, chapter: 576, value: null },
      // Ch. 650 p.7–8: Jinbe tells that Blackbeard took his seat.
      { episode: 570, chapter: 650, value: 'marshall-d-teach' },
    ]),
    seat([
      // Ch. 483 p.6: a captain says Moria fought Kaido, an Emperor.
      { episode: 375, chapter: 483, value: 'kaido' },
      // Ch. 1053 p.16–17: Luffy is named one of the new Emperors.
      { episode: 1080, chapter: 1053, value: 'monkey-d-luffy' },
    ]),
    seat([
      // Ch. 581 p.5: Kid names Big Mom among the remaining Emperors.
      { episode: 490, chapter: 581, value: 'charlotte-linlin' },
      // Ch. 1053 p.16–17: Buggy is named one of the new Emperors.
      { episode: 1080, chapter: 1053, value: 'buggy' },
    ]),
  ],
}
