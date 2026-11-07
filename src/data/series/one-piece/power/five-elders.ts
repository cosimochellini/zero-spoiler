import type { Holding, PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * When the story first names the Five Elders, as the archive's own texts
 * date it: Clover speaks to them over a transponder snail at Ohara in
 * episode 277 (chapter 395 in the wiki's account), and the first text with a
 * chapter pin that names them is Spandine's, chapter 397. The five are first
 * shown, unnamed, at chapter 233, episode 151; a body opens where it is named,
 * like a record (owner, 2026-11-07). The count is the name's, so the five
 * seats open here too.
 */
const NAMED = { episode: 277, chapter: 397 }

const TOLD = {
  revealedAtEpisode: NAMED.episode,
  revealedAtChapter: NAMED.chapter,
}

/**
 * One Elder's seat, held from the naming by the man the story names later: each holder opens at their own record's gate (chapter 1073 for
 * Saturn, 1086 for the other four), so until then the seat is a title alone.
 */
function elder(...holders: [string, ...Holding[]]): Seat {
  const [first, ...later] = holders

  return {
    told: TOLD,
    title: { en: 'Elder', it: 'Astro di Saggezza' },
    holders: [{ ...NAMED, value: first }, ...later],
  }
}

/**
 * The Five Elders, a council of five equal seats (#1090). The "Warrior God"
 * titles, told at chapter 1086 (pp. 6–10), episode 1120, stay on the Elders'
 * own affiliation lines: a seat's title is told with the seat, and the seats
 * are told with the name (owner, 2026-11-07). Im strips Saturn of his seat and kills
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
