import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * When CP9's chief calls the agents on the train to Enies Lobby: chapter 358
 * (p. 14), episode 250, the first chapter that gives CP9 a chain of command.
 * The agents unmask as CP9 at chapter 345, episode 244, but a chain's top rank
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

/** One of the three agents waiting at Enies Lobby. */
function atEniesLobby(holder: string): Seat {
  return {
    told: {
      revealedAtEpisode: AT_ENIES_LOBBY.episode,
      revealedAtChapter: AT_ENIES_LOBBY.chapter,
    },
    title: AGENT,
    holders: [{ ...AT_ENIES_LOBBY, value: holder }],
  }
}

/**
 * CP9, a chain under its chief (#1090). Each seat empties at the chapter
 * that shows its holder in CP0, as the holder's own affiliation lines do
 * (owner, 2026-11-07): Spandam and Lucci at chapter 801, episode 746, and
 * Kaku at chapter 907, episode 886. The story shows no other agent in CP0,
 * and never says CP9 is dissolved, so the body has no end.
 */
export const CP9: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'cp9',
  kind: 'chain',
  seats: [
    {
      told: TOLD,
      title: { en: 'Chief', it: 'Capo' },
      holders: [
        // Named at chapter 360, which his record's gate waits for.
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
    // CP9's newest agent fights Franky on the Puffing Tom at chapter 370,
    // episode 259, and Lucci throws him out at chapter 373, episode 262.
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
