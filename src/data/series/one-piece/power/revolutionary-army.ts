import type { Holding, PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Garp names Luffy's father, and Robin says Dragon leads the Revolutionary
 * Army: chapter 432 (pp. 16–18), episode 314.
 */
const TOLD = { revealedAtEpisode: 314, revealedAtChapter: 432 }

/**
 * The four army commanders arrive at Lulusia, each captioned with their
 * army: chapter 904 (pp. 10–11), episode 880. Their records open at chapter
 * 905, so their seats stand unnamed for one chapter.
 */
const COMMANDERS = { episode: 880, chapter: 904 }

/**
 * The four deputy commanders watch Sabo's ship come in, each captioned with
 * their army: chapter 1082 (p. 12), episode 1116.
 */
const DEPUTIES = { episode: 1116, chapter: 1082 }

/** A seat told with its one holder, held ever since. */
function seat(title: Seat['title'], holding: Holding): Seat {
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
 * The Revolutionary Army (#1093), a chain under its supreme commander: the
 * chief of staff, Ivankov, the four army commanders and their deputies, and
 * Koala, each at the rank the story gives them. Ivankov's army and Inazuma's
 * and Hack's posts are told only in the SBS; Kuma's rank and Ginny's command
 * of the East Army are told only once they are past, so none of them sits
 * here. The army never ends.
 */
export const REVOLUTIONARY_ARMY: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'revolutionary-army',
  kind: 'chain',
  description: [
    {
      chapter: 432,
      episode: 314,
      value: {
        en: 'An army that fights to bring down the government. Its supreme commander is the most dangerous criminal in the world.',
        it: 'Un’armata che combatte per abbattere il governo. Il suo comandante supremo è il criminale più pericoloso del mondo.',
      },
    },
    {
      chapter: 904,
      episode: 880,
      value: {
        en: 'An army that fights the government, led by a supreme commander. It is split into the East, West, North and South armies, each under a commander.',
        it: 'Un’armata che combatte il governo, guidata da un comandante supremo. È divisa nelle armate dell’Est, dell’Ovest, del Nord e del Sud, ognuna con un comandante.',
      },
    },
  ],
  seats: [
    seat(
      { en: 'Supreme Commander', it: 'Comandante supremo' },
      { episode: 314, chapter: 432, value: 'monkey-d-dragon' },
    ),
    // Ch. 744 p. 13: Sabo gives his rank to Rebecca.
    seat(
      { en: 'Chief of Staff', it: 'Capo di stato maggiore' },
      { episode: 679, chapter: 744, value: 'sabo' },
    ),
    // Ch. 539 p. 13: one of the army's leaders, jailed for it. His record
    // opens at chapter 540.
    seat(
      { en: 'Commander', it: 'Comandante' },
      { episode: 441, chapter: 539, value: 'emporio-ivankov' },
    ),
    seat(
      { en: 'East Army Commander', it: 'Comandante dell’armata dell’Est' },
      { ...COMMANDERS, value: 'belo-betty' },
    ),
    seat(
      { en: 'West Army Commander', it: 'Comandante dell’armata dell’Ovest' },
      { ...COMMANDERS, value: 'morley' },
    ),
    seat(
      { en: 'North Army Commander', it: 'Comandante dell’armata del Nord' },
      { ...COMMANDERS, value: 'karasu' },
    ),
    seat(
      { en: 'South Army Commander', it: 'Comandante dell’armata del Sud' },
      { ...COMMANDERS, value: 'lindbergh' },
    ),
    seat(
      {
        en: 'East Army Deputy Commander',
        it: 'Vicecomandante dell’armata dell’Est',
      },
      { ...DEPUTIES, value: 'ahiru' },
    ),
    seat(
      {
        en: 'West Army Deputy Commander',
        it: 'Vicecomandante dell’armata dell’Ovest',
      },
      { ...DEPUTIES, value: 'ushiano' },
    ),
    seat(
      {
        en: 'North Army Deputy Commander',
        it: 'Vicecomandante dell’armata del Nord',
      },
      { ...DEPUTIES, value: 'jiron' },
    ),
    seat(
      {
        en: 'South Army Deputy Commander',
        it: 'Vicecomandante dell’armata del Sud',
      },
      { ...DEPUTIES, value: 'gambo' },
    ),
    // Ch. 731: her caption gives her post. The officer rank is only in a
    // magazine.
    seat(
      {
        en: 'Assistant Fish-Man Karate Instructor',
        it: 'Assistente maestra di karate degli uomini-pesce',
      },
      { episode: 663, chapter: 731, value: 'koala' },
    ),
  ],
}
