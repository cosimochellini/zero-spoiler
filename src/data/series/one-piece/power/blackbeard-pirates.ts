import type { Holding, PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Laffitte names the Blackbeard Pirates to the Warlords' meeting: chapter
 * 234 (p. 16), episode 151.
 */
const TOLD = { revealedAtEpisode: 151, revealedAtChapter: 234 }

/** The Ten Titanic Captains are counted: chapter 737 (p. 5), episode 670. */
const COUNTED = { revealedAtEpisode: 670, revealedAtChapter: 737 }

/** One of the ten seats, told with the count and held as `holders` say. */
function titanicCaptain(holders: Holding[] = []): Seat {
  return {
    told: COUNTED,
    title: { en: 'Titanic Captain', it: 'Capitano titanico' },
    holders,
  }
}

/**
 * The Blackbeard Pirates (#1091), a crew under its captain and his Ten
 * Titanic Captains, each of whom commands a ship. A captain sits from the
 * point the story says he commands one; four seats have no such point in the
 * story (Augur's, Doc Q's, Wolf's and Shot's ships are numbered only in the
 * Vivre Cards), so they stay unnamed. Teach is named the fleet's admiral at
 * chapter 803, but his seat keeps the title the archive gives him.
 */
export const BLACKBEARD_PIRATES: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'blackbeard-pirates',
  kind: 'crew',
  seats: [
    {
      told: TOLD,
      title: { en: 'Captain', it: 'Capitano' },
      holders: [{ episode: 151, chapter: 234, value: 'marshall-d-teach' }],
    },
    // Ch. 704 p.17–19: the captain of the first ship, before the count; he
    // sits from the count.
    titanicCaptain([{ episode: 670, chapter: 737, value: 'jesus-burgess' }]),
    // Ch. 803 p.8–9: the captains of the second and fifth ships.
    titanicCaptain([{ episode: 752, chapter: 803, value: 'shiryu' }]),
    titanicCaptain([{ episode: 752, chapter: 803, value: 'laffitte' }]),
    // Ch. 925: the captain of the sixth ship, and Pizarro a ship's captain
    // (the chapter gives his ship the wrong number).
    titanicCaptain([{ episode: 917, chapter: 925, value: 'catarina-devon' }]),
    titanicCaptain([{ episode: 917, chapter: 925, value: 'avalo-pizarro' }]),
    // Ch. 1081 p.14 makes him the tenth ship's captain, a line the anime
    // drops; the first caption that says it is at episode 1156 (ch. 1126),
    // where his page says it too.
    titanicCaptain([{ episode: 1156, chapter: 1126, value: 'kuzan' }]),
    titanicCaptain(),
    titanicCaptain(),
    titanicCaptain(),
    titanicCaptain(),
  ],
}
