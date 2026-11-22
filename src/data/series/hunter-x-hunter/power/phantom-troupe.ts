import type { Holding, PowerBody, Seat } from '~/data/features'
import type { HunterVocabulary } from '~/data/series/hunter-x-hunter/records/saga'
import type { Gated } from '~/lib/progress/spoiler'

/** Kurapika names the Troupe that killed his clan: chapter 2, episode 1. */
const NAMED = { revealedAtEpisode: 1, revealedAtChapter: 2 }

/**
 * Machi brings Hisoka the boss's call to Yorknew, and his spider tattoo
 * shows a 4: chapter 55, episode 32. The leader's seat and the fourth are
 * told here.
 */
const CALLED: Gated = { revealedAtEpisode: 32, revealedAtChapter: 55 }

/**
 * Four members on the road to Yorknew: "all 13 members" meet for the first
 * time in three years, and nos. 4 and 8 are new: chapter 71 (pp. 8–20). The
 * count tells every numbered seat to a manga reader. Episode 41 adapts those
 * pages, but no source confirms it says thirteen, so in the anime each
 * numbered seat opens with its holder instead, and a seat the anime never
 * fills never opens there (owner, #1445).
 */
const COUNTED_AT = 71

/**
 * The ten members left meet on the ship's fifth tier, each named with their
 * number, Illumi as the newest in Uvogin's place: chapter 377, which the
 * anime never reached.
 */
const ROSTER = { episode: 148, chapter: 377, source: 'chapter' } as const

/**
 * A numbered seat, told by the count in the manga and, in the anime, at the
 * episode of its first holder (`aired`), or never when the anime has none.
 */
function member(number: number, holders: Holding[], aired?: number): Seat {
  return {
    told:
      aired === undefined ?
        {
          revealedAtEpisode: 41,
          revealedAtChapter: COUNTED_AT,
          source: 'chapter',
        }
      : { revealedAtEpisode: aired, revealedAtChapter: COUNTED_AT },
    title: {
      en: `Member no. ${String(number)}`,
      it: `Membro n. ${String(number)}`,
    },
    holders,
  }
}

/**
 * The Phantom Troupe (#1445), a crew under its leader with twelve members
 * numbered on their tattoos (the leader is no. 0, which only chapter 377
 * says). A seat names its holder only where the story ties the number to
 * them: before chapter 377 the manga ties Hisoka and Kalluto to no. 4,
 * Uvogin to no. 11 and Shizuku to no. 8; the anime adds Shalnark's no. 6
 * and Pakunoda's no. 9 in episode 54. In the manga the rest stay seats with
 * no one named; in the anime they never open (owner, #1445). Shalnark's and
 * Kortopi's deaths at
 * chapter 357 empty no seat the manga had tied to them; the roster of
 * chapter 377 shows nos. 6, 9 and 12 empty.
 */
export const PHANTOM_TROUPE: PowerBody<HunterVocabulary> = {
  ...NAMED,
  id: 'phantom-troupe',
  kind: 'crew',
  description: [
    {
      chapter: 2,
      episode: 1,
      value: {
        en: 'A band of thieves who wiped out an entire clan, leaving a single survivor who sets out to become a Hunter and catch them.',
        it: 'Una banda di ladri che ha sterminato un intero clan, lasciando un solo superstite deciso a diventare Hunter per catturarli.',
      },
    },
    // The count, which no source confirms the anime says: the manga's alone.
    {
      chapter: 71,
      episode: 41,
      source: 'chapter',
      value: {
        en: 'Thirteen thieves under one leader, each marked with a numbered twelve-legged spider. They seldom meet all together, and the leader has now called every one of them.',
        it: 'Tredici ladri agli ordini di un capo, ognuno segnato da un ragno a dodici zampe con un numero. Si riuniscono di rado tutti insieme, e ora il capo li ha chiamati tutti.',
      },
    },
    {
      chapter: 377,
      episode: 148,
      source: 'chapter',
      value: {
        en: 'Down to ten members, with three numbered places now empty. They have boarded a crowded ship to hunt down a man who once wore their tattoo and has killed two of them.',
        it: 'Ridotti a dieci membri, con tre posti numerati ormai vuoti. Sono saliti su una nave affollata per dare la caccia a un uomo che un tempo portava il loro tatuaggio e ne ha uccisi due.',
      },
    },
  ],
  seats: [
    {
      told: CALLED,
      title: { en: 'Leader', it: 'Capo' },
      // The boss Machi speaks of, chapter 55, episode 32; his record opens
      // at chapter 71 and episode 54, and the holding waits for it. Neither
      // the chain that cuts him off (chapter 119) nor Feitan's turn as
      // acting leader (chapter 225) takes the seat from him.
      holders: [{ episode: 32, chapter: 55, value: 'chrollo' }],
    },
    member(1, [{ ...ROSTER, value: 'nobunaga' }]),
    member(2, [{ ...ROSTER, value: 'feitan' }]),
    member(3, [{ ...ROSTER, value: 'machi' }]),
    {
      told: CALLED,
      title: { en: 'Member no. 4', it: 'Membro n. 4' },
      holders: [
        // His tattoo shows a 4 as he showers, chapter 55, episode 32.
        { episode: 32, chapter: 55, value: 'hisoka' },
        // He tells Chrollo he only pretended to join and throws the tattoo
        // away, chapter 119. Episode 58 adapts it, but no source confirms
        // the scene, so the anime keeps him here until Kalluto (owner, #1445).
        { episode: 58, chapter: 119, source: 'chapter', value: null },
        // Nobunaga introduces him as Hisoka's replacement, chapter 170
        // (pp. 9–15), episode 72.
        { episode: 72, chapter: 170, value: 'kalluto' },
      ],
    },
    member(5, [{ ...ROSTER, value: 'phinks' }]),
    member(
      6,
      [
        // The anime ties him to no. 6 as Shizuku reads the fortunes, episode
        // 54; the manga's chapter 104 leaves 6 and 9 between him and Pakunoda.
        { episode: 54, chapter: 104, source: 'episode', value: 'shalnark' },
        { ...ROSTER, value: null },
      ],
      54,
    ),
    member(7, [{ ...ROSTER, value: 'franklin' }]),
    // Her tattoo shows the 8 when she slips out of Pike's web, chapter 227,
    // episode 97.
    member(8, [{ episode: 97, chapter: 227, value: 'shizuku' }], 97),
    member(
      9,
      [
        // The anime ties her to no. 9 in episode 54, and her death in episode
        // 58 empties it there; the manga never says which of the two was hers.
        { episode: 54, chapter: 104, source: 'episode', value: 'pakunoda' },
        { episode: 58, chapter: 119, source: 'episode', value: null },
        { ...ROSTER, value: null },
      ],
      54,
    ),
    member(10, [{ ...ROSTER, value: 'bonolenov' }]),
    member(
      11,
      [
        // The Shadow Beasts and Kurapika see the 11 on his back, chapter 76,
        // episode 44.
        { episode: 44, chapter: 76, value: 'uvogin' },
        // Kurapika's chain kills him, chapter 84, episode 47.
        { episode: 47, chapter: 84, value: null },
        { ...ROSTER, value: 'illumi' },
      ],
      44,
    ),
    member(12, [{ ...ROSTER, value: null }]),
  ],
}
