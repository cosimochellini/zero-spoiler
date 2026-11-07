import type { PowerBody } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Shanks and his crew in the Foosha Village tavern: chapter 1, episode 4,
 * where the archive already prints the crew's name on its captain's page.
 */
const TOLD = { revealedAtEpisode: 4, revealedAtChapter: 1 }

/**
 * The Red Hair Pirates (#1091), a crew under its captain. The story gives
 * it only three ranks: its captain, his first mate and its sniper. The
 * officers the volumes name (Limejuice, Hongo and the rest) are named only in
 * question corners and a film booklet, so they wait for the story.
 */
export const RED_HAIR_PIRATES: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'red-hair-pirates',
  kind: 'crew',
  seats: [
    {
      told: TOLD,
      title: { en: 'Captain', it: 'Capitano' },
      // Ch. 1 p.2–5: the crew's captain stops in the village.
      holders: [{ episode: 4, chapter: 1, value: 'shanks' }],
    },
    {
      told: TOLD,
      title: { en: 'First Mate', it: 'Primo ufficiale' },
      // Ch. 1 p.10: his second ends the bandits' brawl.
      holders: [{ episode: 4, chapter: 1, value: 'benn-beckman' }],
    },
    {
      told: { revealedAtEpisode: 9, revealedAtChapter: 25 },
      title: { en: 'Sniper', it: 'Tiratore scelto' },
      // Ch. 25 p.16–17: Luffy tells Usopp his father is the crew's sniper.
      holders: [{ episode: 9, chapter: 25, value: 'yasopp' }],
    },
  ],
}
