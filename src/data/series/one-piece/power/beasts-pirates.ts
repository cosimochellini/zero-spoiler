import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Kaido of the Beasts drops onto the Kid Pirates' hideout: chapter 795,
 * episode 739, where the archive already prints his crew and his rank on
 * his record. The crew opens with his seat.
 */
const TOLD = { revealedAtEpisode: 739, revealedAtChapter: 795 }

/** Jack is one of the three Calamities closest to Kaido: ch. 808 p.4, ep 757. */
const ALL_STARS_TOLD = { revealedAtEpisode: 757, revealedAtChapter: 808 }

/** Two of Kaido's six strongest Headliners set out: ch. 929 p.17–18, ep 923. */
const TOBIROPPO_TOLD = { revealedAtEpisode: 923, revealedAtChapter: 929 }

/**
 * The other four walk in together at ch. 977 p.16–17, and are introduced at
 * ch. 978 p.15–17; both are episode 982.
 */
const WITH_THE_REST = { episode: 982, chapter: 977 }

const ALL_STAR = { en: 'All-Star', it: 'All-Star' }
const TOBIROPPO = { en: 'Tobiroppo', it: 'Tobiroppo' }

/** One of the three All-Stars, held as `holders` say. */
function allStar(holders: Seat['holders']): Seat {
  return { told: ALL_STARS_TOLD, title: ALL_STAR, holders }
}

/** One of the six Tobiroppo, held as `holders` say. */
function tobiroppo(holders: Seat['holders']): Seat {
  return { told: TOBIROPPO_TOLD, title: TOBIROPPO, holders }
}

/**
 * The Beasts Pirates (#1092), a crew under its governor-general: the three
 * All-Stars, then the six Tobiroppo. Drake's seat empties when he is found
 * out, and no one takes it. Kaido falls at Wano, but the story never says
 * the crew ends.
 */
export const BEASTS_PIRATES: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'beasts-pirates',
  kind: 'crew',
  seats: [
    {
      told: TOLD,
      title: { en: 'Governor-General', it: 'Governatore generale' },
      holders: [{ episode: 739, chapter: 795, value: 'kaido' }],
    },
    // Ch. 808 p.4: Jack the Drought, one of the three.
    allStar([{ episode: 757, chapter: 808, value: 'jack' }]),
    // Ch. 925 p.16–17: Queen's and King's captions call them All-Stars.
    // Episode 918 adapts the scene, but the archive files the anime as
    // dropping the captions (King's record): Queen's rank waits for his
    // record, at episode 930, and King's for his own words at episode 985.
    // Both records open at chapter 935.
    allStar([{ episode: 930, chapter: 925, value: 'queen' }]),
    allStar([{ episode: 985, chapter: 925, value: 'king' }]),
    tobiroppo([{ episode: 923, chapter: 929, value: 'page-one' }]),
    tobiroppo([
      { episode: 923, chapter: 929, value: 'x-drake' },
      // Ch. 990 p.14–17: found out as a spy and declared an enemy.
      { episode: 1001, chapter: 990, value: null },
    ]),
    // Their records open at chapter 980; the seats wait for them.
    tobiroppo([{ ...WITH_THE_REST, value: 'ulti' }]),
    tobiroppo([{ ...WITH_THE_REST, value: 'whos-who' }]),
    tobiroppo([{ ...WITH_THE_REST, value: 'black-maria' }]),
    tobiroppo([{ ...WITH_THE_REST, value: 'sasaki' }]),
  ],
}
