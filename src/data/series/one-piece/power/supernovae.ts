import type { Holding, PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Shakky tells the Straw Hats that eleven rookies with bounties over a
 * hundred million are on Sabaody, Luffy and Zoro among them, and the nine
 * others are shown by name: ch. 498 "The Eleven Supernovas" pp. 10–18,
 * ep 392 "The 11 Supernovas". The name carries the count, and every holder's
 * record opens here too.
 */
const NAMED = { episode: 392, chapter: 498 }

const TOLD = {
  revealedAtEpisode: NAMED.episode,
  revealedAtChapter: NAMED.chapter,
}

/** One of the eleven seats, held from the naming by the rookie it names. */
function supernova(holding: Holding): Seat {
  return {
    told: TOLD,
    title: { en: 'Supernova', it: 'Supernova' },
    holders: [holding],
  }
}

/**
 * The eleven Supernovas (#1094), a council in the order ch. 498 shows them.
 * Holders only, no bounty: that stays on the character page (owner,
 * 2026-11-07). Blackbeard is not one: the "Worst Generation" that adds him
 * (ch. 664 p.11, ep 589) is a larger group under another name. No one stops
 * being a Supernova, so the seats never change; a capture or a defeat is the
 * character's status.
 */
export const SUPERNOVAE: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'supernovae',
  kind: 'council',
  seats: [
    // Ch. 498 pp. 10–11: Shakky counts Luffy and Zoro among the eleven.
    supernova({ ...NAMED, value: 'monkey-d-luffy' }),
    supernova({ ...NAMED, value: 'roronoa-zoro' }),
    // Ch. 498 pp. 12–18: the other nine, each captioned with name and bounty.
    supernova({ ...NAMED, value: 'capone-bege' }),
    supernova({ ...NAMED, value: 'jewelry-bonney' }),
    supernova({ ...NAMED, value: 'basil-hawkins' }),
    supernova({ ...NAMED, value: 'eustass-kid' }),
    supernova({ ...NAMED, value: 'scratchmen-apoo' }),
    supernova({ ...NAMED, value: 'x-drake' }),
    supernova({ ...NAMED, value: 'killer' }),
    supernova({ ...NAMED, value: 'urouge' }),
    supernova({ ...NAMED, value: 'trafalgar-law' }),
  ],
}
