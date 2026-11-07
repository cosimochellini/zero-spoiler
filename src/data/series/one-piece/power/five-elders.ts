import type { Holding, PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * When five old men at Mary Geoise, the World Government's highest
 * authority, talk over Shanks and Whitebeard: chapter 233 (pp. 15–18),
 * episode 151. The count is the name's, so the five seats open here.
 */
const FIRST_SEEN = { episode: 151, chapter: 233 }

const TOLD = {
  revealedAtEpisode: FIRST_SEEN.episode,
  revealedAtChapter: FIRST_SEEN.chapter,
}

/**
 * One Elder's seat, held from the first scene by the man the story names
 * later: each holder opens at their own record's gate (chapter 1073 for
 * Saturn, 1086 for the other four), so until then the seat is a title alone.
 */
function elder(...holders: [string, ...Holding[]]): Seat {
  const [first, ...later] = holders

  return {
    told: TOLD,
    title: { en: 'Elder', it: 'Astro di Saggezza' },
    holders: [{ ...FIRST_SEEN, value: first }, ...later],
  }
}

/**
 * The Five Elders, a council of five equal seats (#1090). The "Warrior God"
 * titles, told at chapter 1086 (pp. 6–10), episode 1120, stay on the Elders'
 * own affiliation lines: a seat's title is told with the seat, and the seats
 * are told at 233 (owner, 2026-11-07). Im strips Saturn of his seat and kills
 * him, and Garling takes it, in the same chapter: 1125 (pp. 9–10), episode
 * 1155.
 */
export const FIVE_ELDERS: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'five-elders',
  kind: 'council',
  seats: [
    elder('jaygarcia-saturn', {
      episode: 1155,
      chapter: 1125,
      value: 'figarland-garling',
    }),
    elder('marcus-mars'),
    elder('topman-warcury'),
    elder('ethanbaron-v-nusjuro'),
    elder('shepherd-ju-peter'),
  ],
}
