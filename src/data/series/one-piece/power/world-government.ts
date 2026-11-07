import type { PowerBody } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/** When the Five Elders kneel before the figure on the Empty Throne. */
const THRONE_TAKEN = { episode: 889, chapter: 908 }

const TOLD = {
  revealedAtEpisode: THRONE_TAKEN.episode,
  revealedAtChapter: THRONE_TAKEN.chapter,
}

/**
 * The World Government as a chain of command (#1090). It opens at chapter
 * 908 (pp. 14–17), episode 889, where the Five Elders kneel before Im on the
 * Empty Throne: the first chapter that puts anyone above them. Kong is
 * captioned Commander-in-Chief at chapter 594 (pp. 4–5), episode 511, but a
 * chain's top rank is told first (`leadsFirst`), so his seat opens with the
 * body (owner, 2026-11-07). The Five Elders are a body of their own
 * (`./five-elders`).
 */
export const WORLD_GOVERNMENT: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'world-government',
  kind: 'chain',
  seats: [
    {
      told: TOLD,
      title: { en: 'The Empty Throne', it: 'Il Trono Vuoto' },
      holders: [{ ...THRONE_TAKEN, value: 'im' }],
    },
    {
      told: TOLD,
      title: { en: 'Commander-in-Chief', it: 'Comandante in capo' },
      holders: [{ ...THRONE_TAKEN, value: 'kong' }],
    },
  ],
}
