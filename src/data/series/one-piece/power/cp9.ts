import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * When CP9's chief calls the agents on the train to Enies Lobby: chapter 358
 * (p. 14), episode 250, the first chapter that gives CP9 a chain of command.
 * The agents unmask as CP9 at chapter 345, episode 243, but a chain's top rank
 * is told first (`leadsFirst`), so the body opens with its chief.
 */
const CHIEF_CALLS = { episode: 250, chapter: 358 }

const TOLD = {
  revealedAtEpisode: CHIEF_CALLS.episode,
  revealedAtChapter: CHIEF_CALLS.chapter,
}

const AGENT = { en: 'Agent', it: 'Agente' }

/** Jabra, Kumadori and Fukurou report to the chief at Enies Lobby: chapter 375 (pp. 15–17), episode 264. */
const AT_ENIES_LOBBY = { episode: 264, chapter: 375 }

/** When Jabra, Kumadori and Fukurou show up in CP0: chapter 1083 (p. 13), episode 1117. */
const IN_CP0 = { episode: 1117, chapter: 1083, value: null }

/** One of the three agents waiting at Enies Lobby, until they show up in CP0. */
function atEniesLobby(holder: string): Seat {
  return {
    told: {
      revealedAtEpisode: AT_ENIES_LOBBY.episode,
      revealedAtChapter: AT_ENIES_LOBBY.chapter,
    },
    title: AGENT,
    holders: [{ ...AT_ENIES_LOBBY, value: holder }, IN_CP0],
  }
}

/**
 * CP9, a chain under its chief (#1090). Each seat empties at the chapter
 * that shows its holder in CP0 (owner, 2026-11-07): Spandam and Lucci at
 * chapter 801, episode 746, Kaku at chapter 907, episode 886, and Jabra,
 * Kumadori and Fukurou at chapter 1083, episode 1117. Kalifa and Blueno keep
 * theirs: only an SBS and a cover story put them in CP0. The story never says
 * CP9 is dissolved, so the body has no end.
 */
export const CP9: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'cp9',
  kind: 'chain',
  description: [
    {
      chapter: 358,
      episode: 250,
      value: {
        en: 'A secret unit of Cipher Pol whose agents are licensed to kill for the government. A chief gives them their orders.',
        it: 'Un’unità segreta dei Cipher Pol i cui agenti hanno il permesso di uccidere per il governo. Un capo dà loro gli ordini.',
      },
    },
    {
      chapter: 801,
      episode: 746,
      value: {
        en: 'A secret unit of Cipher Pol whose agents were licensed to kill for the government. Its chief and some of its agents are later seen in CP0, the unit that works for the World Nobles.',
        it: 'Un’unità segreta dei Cipher Pol i cui agenti avevano il permesso di uccidere per il governo. Il suo capo e alcuni agenti si vedono poi nella CP0, l’unità che lavora per i Nobili Mondiali.',
      },
    },
  ],
  seats: [
    {
      told: TOLD,
      title: { en: 'Chief', it: 'Capo' },
      holders: [
        // He names himself on the call, chapter 358 (p. 14); his record opens
        // at chapter 360, and the holding waits for it.
        { ...CHIEF_CALLS, value: 'spandam' },
        { episode: 746, chapter: 801, value: null },
      ],
    },
    {
      told: TOLD,
      title: AGENT,
      holders: [
        { ...CHIEF_CALLS, value: 'rob-lucci' },
        { episode: 746, chapter: 801, value: null },
      ],
    },
    {
      told: TOLD,
      title: AGENT,
      holders: [
        { ...CHIEF_CALLS, value: 'kaku' },
        { episode: 886, chapter: 907, value: null },
      ],
    },
    {
      told: TOLD,
      title: AGENT,
      holders: [{ ...CHIEF_CALLS, value: 'kalifa' }],
    },
    {
      told: TOLD,
      title: AGENT,
      holders: [{ ...CHIEF_CALLS, value: 'blueno' }],
    },
    // CP9's newest agent is introduced at chapter 369, episode 259, and Lucci
    // throws him out at chapter 373, episode 262. The seat opens at his
    // record's chapter, 370: at 369 it would stand as an unnamed agent.
    {
      told: { revealedAtEpisode: 259, revealedAtChapter: 370 },
      title: AGENT,
      holders: [
        { episode: 259, chapter: 370, value: 'nero' },
        { episode: 262, chapter: 373, value: null },
      ],
    },
    atEniesLobby('jabra'),
    atEniesLobby('kumadori'),
    atEniesLobby('fukurou'),
  ],
}
