import type { Holding, PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'
import type { LocalizedText } from '~/data/types'

/**
 * Zoro tells Luffy he will join him: chapter 6, episode 3. The crew is two
 * from here, where the archive already prints its name on both their pages.
 */
const TOLD = { revealedAtEpisode: 3, revealedAtChapter: 6 }

/** A seat told when its first holder joins, who holds it from there. */
function joins(
  title: LocalizedText,
  [first, ...rest]: [Holding, ...Holding[]],
): Seat {
  return {
    told: {
      revealedAtEpisode: first.episode,
      revealedAtChapter: first.chapter,
    },
    title,
    holders: [first, ...rest],
  }
}

/**
 * The Straw Hat Pirates (#1091), a crew under its captain, each seat the post
 * its holder joins to fill, in the order they join. Usopp and Robin leave and
 * come back, and their seats stand empty in between; Chopper's Davy Back
 * Fight and Sanji's wedding take neither of them out of the crew.
 */
export const STRAW_HAT_PIRATES: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'straw-hat-pirates',
  kind: 'crew',
  seats: [
    joins({ en: 'Captain', it: 'Capitano' }, [
      { episode: 3, chapter: 6, value: 'monkey-d-luffy' },
    ]),
    joins({ en: 'Swordsman', it: 'Spadaccino' }, [
      { episode: 3, chapter: 6, value: 'roronoa-zoro' },
    ]),
    joins({ en: 'Sniper', it: 'Tiratore scelto' }, [
      // Ch. 41: he sails with them on the Going Merry.
      { episode: 17, chapter: 41, value: 'usopp' },
      // Ch. 331 p.16–19: he quits the crew over the Merry.
      { episode: 235, chapter: 331, value: null },
      // Ch. 438 p.15–18: he apologises and Luffy pulls him aboard.
      { episode: 323, chapter: 438, value: 'usopp' },
    ]),
    joins({ en: 'Cook', it: 'Cuoco' }, [
      // Ch. 68: he leaves the Baratie with them.
      { episode: 30, chapter: 68, value: 'sanji' },
    ]),
    joins({ en: 'Navigator', it: 'Navigatrice' }, [
      // Ch. 95: she sails from Cocoyasi as one of the crew.
      { episode: 44, chapter: 95, value: 'nami' },
    ]),
    joins({ en: 'Doctor', it: 'Medico' }, [
      // Ch. 152 p.10–19: Luffy talks him into joining as their doctor.
      { episode: 90, chapter: 152, value: 'tony-tony-chopper' },
    ]),
    joins({ en: 'Archaeologist', it: 'Archeologa' }, [
      // Ch. 218: she asks to stay aboard.
      { episode: 130, chapter: 218, value: 'nico-robin' },
      // Ch. 340: she tells Sanji and Chopper goodbye and walks away.
      { episode: 240, chapter: 340, value: null },
      // Ch. 398 p.18: she tells Luffy she wants to live.
      { episode: 278, chapter: 398, value: 'nico-robin' },
    ]),
    joins({ en: 'Shipwright', it: 'Carpentiere' }, [
      // Ch. 437: he agrees to sail with them.
      { episode: 322, chapter: 437, value: 'franky' },
    ]),
    joins({ en: 'Musician', it: 'Musicista' }, [
      // Ch. 489: he asks to be taken on, and Luffy says yes.
      { episode: 381, chapter: 489, value: 'brook' },
    ]),
    joins({ en: 'Helmsman', it: 'Timoniere' }, [
      // Ch. 976 p.8–19: he joins the crew at Onigashima.
      { episode: 980, chapter: 976, value: 'jinbe' },
    ]),
  ],
}
