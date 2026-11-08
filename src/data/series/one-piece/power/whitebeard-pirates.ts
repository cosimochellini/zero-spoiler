import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Smoker meets Whitebeard's second division commander in Alabasta: chapter
 * 157 (p. 12–17), episode 94. His captain is told with him.
 */
const TOLD = { revealedAtEpisode: 94, revealedAtChapter: 157 }

/** Shanks boards Whitebeard's ship and calls on Marco and Jozu: ch. 434, ep 316. */
const AT_THE_MEETING = { episode: 316, chapter: 434 }

/** A division commander's seat, told and taken at the same point. */
function commander(
  en: string,
  it: string,
  {
    chapter,
    episode,
    value,
  }: { chapter: number; episode: number; value: string },
): Seat {
  return {
    told: { revealedAtEpisode: episode, revealedAtChapter: chapter },
    title: { en, it },
    holders: [{ episode, chapter, value }],
  }
}

/**
 * The Whitebeard Pirates (#1091), a crew under its captain, with the division
 * commanders the story numbers or names, by division. Eight more are named only in a
 * question corner, and Izo is never called a commander in the story, so
 * their seats wait. Oden held the second division before Ace, but the page
 * shows who holds a seat, not who held it. The crew is beaten and scattered
 * at chapter 820, and the story never says it disbanded, so the body has no
 * end.
 */
export const WHITEBEARD_PIRATES: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'whitebeard-pirates',
  kind: 'crew',
  description: [
    {
      chapter: 157,
      episode: 94,
      value: {
        en: 'A large pirate crew split into divisions, each under its own commander, with one captain above them all.',
        it: 'Una grande ciurma di pirati divisa in divisioni, ognuna con il proprio comandante e un solo capitano sopra tutti.',
      },
    },
    {
      chapter: 234,
      episode: 151,
      value: {
        en: 'The crew of the pirate who once fought the Pirate King as an equal. The government watches it closely and fears what would come of it joining forces with another great crew.',
        it: 'La ciurma del pirata che un tempo ha combattuto alla pari con il Re dei Pirati. Il governo la tiene d’occhio e teme cosa accadrebbe se si alleasse con un’altra grande ciurma.',
      },
    },
    {
      chapter: 576,
      episode: 485,
      value: {
        en: 'The crew of an Emperor who has died in the war. With its captain gone, it has lost the one who held it together.',
        it: 'La ciurma di un Imperatore morto nella guerra. Senza il suo capitano ha perso chi la teneva unita.',
      },
    },
  ],
  seats: [
    {
      told: TOLD,
      title: { en: 'Captain', it: 'Capitano' },
      holders: [
        // Ch. 157: Ace is named Whitebeard's commander; the old man's record
        // opens at chapter 234, and the seat waits for it.
        { episode: 94, chapter: 157, value: 'edward-newgate' },
        // Ch. 576 p.15: he dies standing.
        { episode: 485, chapter: 576, value: null },
      ],
    },
    {
      told: {
        revealedAtEpisode: AT_THE_MEETING.episode,
        revealedAtChapter: AT_THE_MEETING.chapter,
      },
      title: {
        en: '1st Division Commander',
        it: 'Comandante della prima divisione',
      },
      holders: [
        { ...AT_THE_MEETING, value: 'marco' },
        // Ch. 909 p.4: a doctor on Whitebeard's home island.
        { episode: 890, chapter: 909, value: null },
      ],
    },
    {
      told: TOLD,
      title: {
        en: '2nd Division Commander',
        it: 'Comandante della seconda divisione',
      },
      holders: [
        // Ch. 157: his record opens at chapter 159, and the seat waits for it.
        { episode: 94, chapter: 157, value: 'portgas-d-ace' },
        // Ch. 574: he dies in Luffy's arms.
        { episode: 483, chapter: 574, value: null },
      ],
    },
    // Ch. 434 p.3: his caption names him and his division; his record opens
    // at chapter 556, and the seat waits for it.
    commander('3rd Division Commander', 'Comandante della terza divisione', {
      ...AT_THE_MEETING,
      value: 'jozu',
    }),
    // Ch. 440 p.17: Teach killed the fourth division's commander for his
    // fruit. The seat is told empty.
    {
      told: { revealedAtEpisode: 325, revealedAtChapter: 440 },
      title: {
        en: '4th Division Commander',
        it: 'Comandante della quarta divisione',
      },
      holders: [{ episode: 325, chapter: 440, value: null }],
    },
    // Ch. 561: Marco calls him over, captioned the fifth division's
    // commander. No episode summary says the anime tells his division, so the
    // seat is the manga's alone.
    {
      told: {
        revealedAtEpisode: 470,
        revealedAtChapter: 561,
        source: 'chapter',
      },
      title: {
        en: '5th Division Commander',
        it: 'Comandante della quinta divisione',
      },
      holders: [
        { episode: 470, chapter: 561, source: 'chapter', value: 'vista' },
      ],
    },
    // Ch. 556 p.3: named as he faces Doflamingo.
    commander(
      '13th Division Commander',
      'Comandante della tredicesima divisione',
      { episode: 465, chapter: 556, value: 'atmos' },
    ),
    // Ch. 573: his crewmates call him by name in the retreat; the story never
    // says which division he leads.
    commander('Division Commander', 'Comandante di divisione', {
      episode: 482,
      chapter: 573,
      value: 'blenheim',
    }),
  ],
}
