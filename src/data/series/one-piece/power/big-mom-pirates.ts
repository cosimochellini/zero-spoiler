import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Tamago and Pekoms come for Big Mom's candy on Fish-Man Island, where the
 * archive first prints the crew's name: chapter 653, episode 571. Tamago
 * calls her his captain, so the crew opens with her seat.
 */
const TOLD = { revealedAtEpisode: 571, revealedAtChapter: 653 }

/** Cracker is introduced as one of the three Sweet Commanders: ch. 835 p.19, ep 796. */
const COMMANDERS_TOLD = { revealedAtEpisode: 796, revealedAtChapter: 835 }

const SWEET_COMMANDER = { en: 'Sweet Commander', it: 'Sweet Commander' }

/** One of the three Sweet Commanders, held from where the story names them. */
function commander(holding: Seat['holders'][number]): Seat {
  return { told: COMMANDERS_TOLD, title: SWEET_COMMANDER, holders: [holding] }
}

/** A minister of Totto Land, told with its holder and held ever since. */
function minister(
  title: Seat['title'],
  holding: Seat['holders'][number],
): Seat {
  return {
    told: {
      revealedAtEpisode: holding.episode,
      revealedAtChapter: holding.chapter,
    },
    title,
    holders: [holding],
  }
}

/**
 * The Big Mom Pirates (#1092), a crew under its captain: her three Sweet
 * Commanders, then the ministers of Totto Land among her children, one seat
 * each at their highest rank (Cracker and Smoothie are ministers too, and
 * Katakuri's ministry is told only in an SBS). Snack, a Sweet Commander
 * before the story begins, is a past holder and is left out. Big Mom falls
 * at Wano, but the story never says the crew ends.
 */
export const BIG_MOM_PIRATES: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'big-mom-pirates',
  kind: 'crew',
  description: [
    {
      chapter: 653,
      episode: 571,
      value: {
        en: 'The crew of one of the four Emperors. Its captain is so fond of sweets that her men go far to fetch them.',
        it: 'La ciurma di uno dei quattro Imperatori. La sua capitana ama i dolci al punto che i suoi uomini vanno lontano a procurarli.',
      },
    },
    {
      chapter: 843,
      episode: 806,
      value: {
        en: 'A crew with three Sweet Commanders, and ministers who are each named for a sweet or a food.',
        it: 'Una ciurma con tre Sweet Commander e dei ministri, ognuno con il nome di un dolce o di un cibo.',
      },
    },
  ],
  seats: [
    {
      told: TOLD,
      title: { en: 'Captain', it: 'Capitano' },
      // Her record opens at chapter 831, episode 786; the seat waits for it.
      holders: [{ episode: 571, chapter: 653, value: 'charlotte-linlin' }],
    },
    // Ch. 835 p.19: Cracker, one of the three Sweet Commanders.
    commander({ episode: 796, chapter: 835, value: 'charlotte-cracker' }),
    // Ch. 843 p.4–5: the other two are named; their records open later.
    commander({ episode: 806, chapter: 843, value: 'charlotte-katakuri' }),
    commander({ episode: 806, chapter: 843, value: 'charlotte-smoothie' }),
    // Ch. 834 p.16: Perospero's caption, Minister of Candy.
    minister(
      { en: 'Minister of Candy', it: 'Ministro delle caramelle' },
      { episode: 795, chapter: 834, value: 'charlotte-perospero' },
    ),
    // Ch. 843 p.5–7: Opera and Mont-d'Or, ministers of cream and cheese.
    minister(
      { en: 'Minister of Cream', it: 'Ministro della panna montata' },
      { episode: 806, chapter: 843, value: 'charlotte-opera' },
    ),
    minister(
      { en: 'Minister of Cheese', it: 'Ministro del formaggio' },
      { episode: 806, chapter: 843, value: 'charlotte-mont-dor' },
    ),
    // Ch. 861 p.2–3: Vito names Compote, Minister of Fruit.
    minister(
      { en: 'Minister of Fruit', it: 'Ministra della frutta' },
      { episode: 831, chapter: 861, value: 'charlotte-compote' },
    ),
    // Ch. 864 p.7–10, ep 834: Daifuku's and Oven's posts are told. The
    // anime shows both arriving at the chateau earlier, in episodes 826 and
    // 827; their seats wait for the episode that adapts the chapter.
    minister(
      { en: 'Minister of Beans', it: 'Ministro dei fagioli' },
      { episode: 834, chapter: 864, value: 'charlotte-daifuku' },
    ),
    minister(
      { en: 'Minister of Browning', it: 'Ministro della doratura' },
      { episode: 834, chapter: 864, value: 'charlotte-oven' },
    ),
    // Ch. 877 p.14: Amande's post is told.
    minister(
      { en: 'Minister of Nuts Island', it: 'Ministra di Nuts Island' },
      { episode: 849, chapter: 877, value: 'amande' },
    ),
  ],
}
