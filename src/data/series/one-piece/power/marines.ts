import type { Holding, PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/** Sengoku is introduced as Fleet Admiral: chapter 234 (p. 4), episode 151. */
const TOLD = { revealedAtEpisode: 151, revealedAtChapter: 234 }

/** Robin names the three admirals: chapter 319 (p. 4), episode 227. */
const THREE_TOLD = { episode: 227, chapter: 319 }

/**
 * Jinbe tells of the duel on Punk Hazard: Sakazuki is Fleet Admiral and
 * Kuzan has left the Marines, chapter 650 (pp. 4–7), episode 570.
 */
const DUEL = { episode: 570, chapter: 650 }

const ADMIRAL = { en: 'Admiral', it: 'Ammiraglio' }

/** One of the three admirals' seats, told with the count. */
function admiral(...holders: Holding[]): Seat {
  return {
    told: {
      revealedAtEpisode: THREE_TOLD.episode,
      revealedAtChapter: THREE_TOLD.chapter,
    },
    title: ADMIRAL,
    holders,
  }
}

/**
 * A vice admiral's seat, opened with its holder: the rank is no counted set,
 * so a seat told before its holder is named would stand as an unnamed vice
 * admiral (owner, 2026-11-07). The first holding is at the holder's record.
 */
function viceAdmiral(first: Holding, ...later: Holding[]): Seat {
  return {
    told: {
      revealedAtEpisode: first.episode,
      revealedAtChapter: first.chapter,
    },
    title: { en: 'Vice Admiral', it: 'Viceammiraglio' },
    holders: [first, ...later],
  }
}

/**
 * The Marines' chain of command (#1089): the Fleet Admiral, the three
 * admirals and the key vice admirals, down to that rank. The admirals'
 * seats are told with their count at chapter 319, long before Kizaru's and
 * Akainu's records open (510 and 556): their seats wait, fogged, for them.
 * Fujitora and Ryokugyu fill the two seats emptied at chapter 650, but the
 * story never says which is whose: Fujitora takes Kuzan's, Ryokugyu
 * Sakazuki's, in the order chapter 713 names both them and the vacancies.
 */
export const MARINES: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'marines',
  kind: 'chain',
  seats: [
    {
      told: TOLD,
      title: { en: 'Fleet Admiral', it: 'Grand’ammiraglio' },
      holders: [
        { episode: 151, chapter: 234, value: 'sengoku' },
        // Ch. 594 pp. 4–5: Sengoku tells Kong he is stepping down.
        { episode: 511, chapter: 594, value: null },
        { ...DUEL, value: 'sakazuki' },
      ],
    },
    admiral(
      { ...THREE_TOLD, value: 'kuzan' },
      // Ch. 650 p. 6: Kuzan has resigned.
      { ...DUEL, value: null },
      // Ch. 705: the blind man puts on his coat and is Admiral Fujitora.
      { episode: 634, chapter: 705, value: 'issho' },
    ),
    admiral({ ...THREE_TOLD, value: 'borsalino' }),
    admiral(
      { ...THREE_TOLD, value: 'sakazuki' },
      // Ch. 650 pp. 4–7: promoted to Fleet Admiral.
      { ...DUEL, value: null },
      // Ch. 713 p. 3: Doflamingo names Fujitora and Ryokugyu the admirals of
      // the World Military Draft; Ryokugyu's record opens at chapter 905.
      { episode: 643, chapter: 713, value: 'ryokugyu' },
    ),
    // Ch. 431: Vice Admiral Garp's ship is in the harbour.
    viceAdmiral({ episode: 313, chapter: 431, value: 'monkey-d-garp' }),
    // Ch. 523: Hancock sails on Vice Admiral Momonga's ship.
    viceAdmiral({ episode: 410, chapter: 523, value: 'momonga' }),
    // Ch. 555, episode 464: Vice Admiral Lacroix of the Giant Squad.
    viceAdmiral({ episode: 464, chapter: 555, value: 'lacroix' }),
    // Introduced as a vice admiral at ch. 234; her record opens at ch. 556.
    viceAdmiral({ episode: 461, chapter: 556, value: 'tsuru' }),
    // Ch. 652: promoted over the timeskip, at the head of G-5.
    viceAdmiral({ episode: 572, chapter: 652, value: 'smoker' }),
    viceAdmiral(
      // Ch. 673 p. 6: Yarisugi names Vice Admiral Vergo of G-5.
      { episode: 599, chapter: 673, value: 'vergo' },
      // Ch. 698: the G-5 men say he died.
      { episode: 624, chapter: 698, value: null },
    ),
    // Ch. 705: Vice Admiral Maynard, undercover; his record opens at ch. 708.
    viceAdmiral({ episode: 634, chapter: 708, value: 'maynard' }),
    // Ch. 717: Vice Admiral Bastille surrounds the colosseum.
    viceAdmiral({ episode: 647, chapter: 717, value: 'bastille' }),
    // Ch. 1061 p. 10: Vice Admiral Doll, commander of G-14.
    viceAdmiral({ episode: 1090, chapter: 1061, value: 'doll' }),
  ],
}
