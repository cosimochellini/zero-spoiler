import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Yosaku tells Luffy and Sanji of the Seven Warlords, naming Mihawk and
 * Jinbe: ch. 69 p.5–6, ep 31. The name carries the count.
 */
const TOLD = { revealedAtEpisode: 31, revealedAtChapter: 69 }

const WARLORD = { en: 'Warlord', it: 'Membro della Flotta dei Sette' }

/** One of the seven seats, told with the body and held as `holders` say. */
function seat(holders: Seat['holders']): Seat {
  return { told: TOLD, title: WARLORD, holders }
}

/**
 * The Seven Warlords (#1088), in the order the story names them. Jinbe,
 * Crocodile, Moria and Hancock are named Warlords before their records
 * open; their seats wait, fogged, for the records. The story never says
 * whose seat Law, Buggy or Weevil takes: they follow the wiki's lineup.
 * The system is abolished at ch. 956, and the seats stay as they stood.
 */
export const WARLORDS: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'warlords',
  kind: 'council',
  seats: [
    // Ch. 69 p.5–6: Yosaku names Mihawk a Warlord.
    seat([{ episode: 31, chapter: 69, value: 'dracule-mihawk' }]),
    seat([
      // Ch. 69 p.5–6: Yosaku names Jinbe a Warlord.
      { episode: 31, chapter: 69, value: 'jinbe' },
      // Ch. 557 p.12: Jinbe tells Sengoku he resigns as a Warlord.
      { episode: 466, chapter: 557, value: null },
      // Ch. 659 p.18–19: Law turns up on Punk Hazard a Warlord.
      { episode: 584, chapter: 659, value: 'trafalgar-law' },
      // Ch. 713: Fujitora revokes Law's title at Green Bit.
      { episode: 643, chapter: 713, value: null },
    ]),
    seat([
      // Ch. 113 p.9: Vivi names Mr. 0 as Crocodile, a Warlord.
      { episode: 67, chapter: 113, value: 'crocodile' },
      // Ch. 211 p.13: Crocodile is arrested and stripped of his title.
      { episode: 127, chapter: 211, value: null },
      // Ch. 474 p.10–15: Kuma tells Moria Blackbeard is the new Warlord.
      { episode: 369, chapter: 474, value: 'marshall-d-teach' },
      // Ch. 576 p.5: Blackbeard quits the title at Marineford.
      { episode: 485, chapter: 576, value: null },
      // Ch. 700 p.13–15: Brannew's roll names Buggy a Warlord.
      { episode: 629, chapter: 700, value: 'buggy' },
    ]),
    // Ch. 233, last pages: Kuma and Doflamingo reach Mary Geoise as Warlords.
    seat([{ episode: 151, chapter: 233, value: 'bartholomew-kuma' }]),
    seat([
      { episode: 151, chapter: 233, value: 'donquixote-doflamingo' },
      // Ch. 699 p.15–19: the newspaper says he has quit the Warlords.
      { episode: 628, chapter: 699, value: null },
      // Ch. 711: Sanji warns Law that he never quit.
      { episode: 642, chapter: 711, value: 'donquixote-doflamingo' },
      // Ch. 801 p.6: stripped of the title and chained in a Marine cell.
      { episode: 746, chapter: 801, value: null },
    ]),
    seat([
      // Ch. 448 p.19: Moria is revealed to be a Warlord.
      { episode: 343, chapter: 448, value: 'gecko-moria' },
      // Ch. 581 p.17: Doflamingo tells him the government dropped him.
      { episode: 490, chapter: 581, value: null },
      // Ch. 700: Brannew's roll counts a Warlord not yet named, who is
      // Weevil (named a Warlord at ch. 802 p.8, ep 751): the seat is held
      // from here, fogged until his record opens.
      { episode: 629, chapter: 700, value: 'edward-weevil' },
    ]),
    // Ch. 516 p.12–13: Hancock is met as a Warlord.
    seat([{ episode: 409, chapter: 516, value: 'boa-hancock' }]),
  ],
  // Ch. 956 p.16–17: the Levely abolishes the Warlord system.
  ended: { revealedAtEpisode: 957, revealedAtChapter: 956 },
}
