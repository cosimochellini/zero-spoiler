import type { Holding, PowerBody, Seat } from '~/data/features'
import type { HunterVocabulary } from '~/data/series/hunter-x-hunter/records/saga'

/**
 * Gon, Kurapika and Leorio reach the family's mountain: a shopkeeper names
 * the Zoldyck estate and the tour guide the family, chapter 39, and the guide
 * names it in episode 22. The guard there tells them Killua came home.
 */
const ESTATE = { episode: 22, chapter: 39 }

const TOLD = {
  revealedAtEpisode: ESTATE.episode,
  revealedAtChapter: ESTATE.chapter,
}

const SON = { en: 'Son', it: 'Figlio' }
const BUTLER = { en: 'Butler', it: 'Maggiordomo' }
const BUTLER_F = { en: 'Butler', it: 'Maggiordoma' }

/**
 * A seat opened with its holder (owner, #1444): the family's count is told
 * at chapter 39, but three of its members are never named, so a seat told
 * before its holder would stand unnamed.
 */
function seat(title: Seat['title'], first: Holding, ...later: Holding[]): Seat {
  return {
    told: {
      revealedAtEpisode: first.episode,
      revealedAtChapter: first.chapter,
    },
    title,
    holders: [first, ...later],
  }
}

/**
 * The Zoldyck family (#1444), a chain under its head: the head, the
 * grandfather and the five children by age, then the named butlers who serve
 * in the story's present. The story never names the mother, the grandmother
 * or the great-grandfather, so they have no seat; it tells no change of head
 * (Zeno as a former head is only in the databook). Leaving home empties no
 * seat, only a death does: Gotoh's, at chapter 327, episode 142. The chain's
 * top rank is told first (`leadsFirst`), so the head's seat opens with the
 * body. Manga and 2011 anime only: no seat changes after chapter 339.
 */
export const ZOLDYCK_FAMILY: PowerBody<HunterVocabulary> = {
  ...TOLD,
  id: 'zoldyck-family',
  kind: 'chain',
  description: [
    {
      ...ESTATE,
      value: {
        en: 'A family of assassins who own a whole mountain and the forest around it. Every member is a killer for hire, and no outsider has ever seen their house.',
        it: 'Una famiglia di assassini che possiede un’intera montagna e la foresta che la circonda. Ogni membro uccide su commissione, e nessun estraneo ha mai visto la loro casa.',
      },
    },
  ],
  seats: [
    // Ch. 42, ep. 24: the father who lets Killua go while his mother says it
    // is the turning point of his path to head the family. The manga names
    // him only at chapter 95, where his record opens; the seat waits for it.
    {
      told: TOLD,
      title: { en: 'Head of the family', it: 'Capofamiglia' },
      holders: [{ episode: 24, chapter: 42, value: 'silva' }],
    },
    // Ch. 42, ep. 24: he ends Killua's punishment.
    seat(
      { en: 'Grandfather', it: 'Nonno' },
      { episode: 24, chapter: 42, value: 'zeno' },
    ),
    // Ch. 36, ep. 20: Killua's older brother; the body opens at chapter 39.
    seat(SON, { ...ESTATE, value: 'illumi' }),
    // Ch. 42, ep. 23: he whips Killua in the family's cell.
    seat(SON, { episode: 23, chapter: 42, value: 'milluki' }),
    // Ch. 39, ep. 22: the guard says Killua came home and opened the gate.
    seat(SON, { ...ESTATE, value: 'killua' }),
    // Ch. 321, ep. 138: Killua asks his father to let him see her.
    seat(
      { en: 'Daughter', it: 'Figlia' },
      { episode: 138, chapter: 321, value: 'alluka-zoldyck' },
    ),
    // Ch. 42, ep. 24: his mother introduces him.
    seat(SON, { episode: 24, chapter: 42, value: 'kalluto' }),
    seat(
      BUTLER,
      // Ch. 43, ep. 25: the coin game in the butlers' quarters.
      { episode: 25, chapter: 43, value: 'gotoh' },
      // Ch. 327, ep. 142: Hisoka kills him. The Kiriko who poses as him at
      // chapter 339 holds no seat.
      { episode: 142, chapter: 327, value: null },
    ),
    // Ch. 324, ep. 140: Silva sends them with Killua and his sister.
    seat(BUTLER_F, { episode: 140, chapter: 324, value: 'tsubone' }),
    seat(BUTLER_F, { episode: 140, chapter: 324, value: 'amane' }),
    // Ch. 329, ep. 143: another of the family's butlers, waiting with a car.
    seat(BUTLER, { episode: 143, chapter: 329, value: 'hishita' }),
    // Ch. 42, ep. 24: she introduces herself to Killua as an apprentice.
    seat(
      { en: 'Apprentice butler', it: 'Apprendista maggiordoma' },
      { episode: 24, chapter: 42, value: 'canary' },
    ),
  ],
}
