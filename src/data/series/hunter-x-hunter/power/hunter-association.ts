import type { Holding, PowerBody, Seat } from '~/data/features'
import type { HunterVocabulary } from '~/data/series/hunter-x-hunter/records/saga'

/**
 * The Association's airship lands at the Second Phase and Menchi calls the
 * old man who jumps from it Chairman Netero: chapter 12, episode 6. The
 * chairman's seat is told with the name.
 */
const TOLD = { revealedAtEpisode: 6, revealedAtChapter: 12 }

/**
 * The Zodiacs meet to set the election rules: twelve Hunters the chairman
 * chose, each under a sign, and Pariston the vice chairman among them.
 * Chapter 319, episode 137. Netero's will names "the Zodiacs" a chapter
 * earlier (318, episode 136) but not how many there are, so the seats are
 * told here.
 */
const ROSTER = { episode: 137, chapter: 319 }

/**
 * Cheadle tells the Zodiacs she has accepted Ging's and Pariston's requests
 * to leave, and sits as chairman: chapter 340, told by the manga alone (the
 * 2011 anime ends at chapter 339).
 */
const WITHDRAWN = { episode: 148, chapter: 340, source: 'chapter' as const }

/**
 * The Zodiacs meet with their two new members, and each sign's role on the
 * expedition is listed: Kurapika is the Rat, Leorio the Boar. Chapter 346,
 * the manga alone. Both accepted a seat at chapter 343, which does not say
 * whose.
 */
const NEW_MEMBERS = { episode: 148, chapter: 346, source: 'chapter' as const }

const ROSTER_TOLD = {
  revealedAtEpisode: ROSTER.episode,
  revealedAtChapter: ROSTER.chapter,
}

/**
 * One Zodiac seat, under its sign as the members' epithets spell it, held
 * from the roster. Several holders open later than the roster in the manga
 * (Kanzai, Pyon, Ginta and Cluck at chapter 320, Gel, Pariston and Saiyu at
 * 321, Mizaistom and Saccho at 326), and their seats stay a title alone
 * until then.
 */
function zodiac(
  sign: { en: string; it: string },
  first: string,
  ...later: Holding[]
): Seat {
  return {
    told: ROSTER_TOLD,
    title: { en: `${sign.en} of the Zodiacs`, it: `${sign.it} dello Zodiaco` },
    holders: [{ ...ROSTER, value: first }, ...later],
  }
}

/**
 * The Hunter Association (#1443): the chairman on top, the vice chairman and
 * the twelve Zodiacs beneath. Pariston's own term as chairman is left out:
 * he wins the vote, names Cheadle his vice and resigns in the same speech
 * (chapter 335, episode 146), so the chair is vacant on either side of it.
 */
export const HUNTER_ASSOCIATION: PowerBody<HunterVocabulary> = {
  ...TOLD,
  id: 'hunter-association',
  kind: 'chain',
  description: [
    {
      chapter: 12,
      episode: 6,
      value: {
        en: 'The organisation that tests those who want to become Hunters and grants a license to those who pass. A chairman heads it and has the last word on who passes.',
        it: 'L’organizzazione che mette alla prova chi vuole diventare Hunter e concede la licenza a chi supera la prova. La guida un presidente, che ha l’ultima parola su chi passa.',
      },
    },
    {
      chapter: 319,
      episode: 137,
      value: {
        en: 'With its chairman dead, the Hunters must elect a new one. The Zodiacs, twelve Hunters the late chairman chose himself, set the rules of the vote and oversee it.',
        it: 'Morto il presidente, gli Hunter devono eleggerne uno nuovo. Lo Zodiaco, dodici Hunter scelti di persona dal defunto presidente, fissa le regole del voto e lo sorveglia.',
      },
    },
  ],
  seats: [
    {
      told: TOLD,
      title: { en: 'Chairman', it: 'Presidente' },
      holders: [
        { episode: 6, chapter: 12, value: 'netero' },
        // Ch. 298, episode 126: he sets off the bomb inside him and dies.
        { episode: 126, chapter: 298, value: null },
        { ...WITHDRAWN, value: 'cheadle-yorkshire' },
      ],
    },
    {
      told: ROSTER_TOLD,
      title: { en: 'Vice Chairman', it: 'Vicepresidente' },
      holders: [
        { ...ROSTER, value: 'pariston-hill' },
        // Ch. 335, episode 146: Pariston, just elected, names Cheadle his
        // vice and resigns.
        { episode: 146, chapter: 335, value: 'cheadle-yorkshire' },
        // She is chairman now, and the story names no new vice.
        { ...WITHDRAWN, value: null },
      ],
    },
    zodiac(
      { en: 'Rat', it: 'Topo' },
      'pariston-hill',
      { ...WITHDRAWN, value: null },
      { ...NEW_MEMBERS, value: 'kurapika' },
    ),
    zodiac({ en: 'Ox', it: 'Bue' }, 'mizaistom-nana'),
    zodiac({ en: 'Tiger', it: 'Tigre' }, 'kanzai'),
    zodiac({ en: 'Rabbit', it: 'Coniglio' }, 'pyon'),
    zodiac({ en: 'Dragon', it: 'Drago' }, 'botobai-gigante'),
    zodiac({ en: 'Snake', it: 'Serpente' }, 'gel'),
    zodiac({ en: 'Horse', it: 'Cavallo' }, 'saccho-kobayakawa'),
    zodiac({ en: 'Sheep', it: 'Pecora' }, 'ginta'),
    zodiac({ en: 'Monkey', it: 'Scimmia' }, 'saiyu'),
    zodiac({ en: 'Chicken', it: 'Gallo' }, 'cluck'),
    // She keeps the Dog's seat as vice chairman and as chairman.
    zodiac({ en: 'Dog', it: 'Cane' }, 'cheadle-yorkshire'),
    zodiac(
      { en: 'Boar', it: 'Cinghiale' },
      'ging-freecss',
      { ...WITHDRAWN, value: null },
      { ...NEW_MEMBERS, value: 'leorio-paradinight' },
    ),
  ],
}
