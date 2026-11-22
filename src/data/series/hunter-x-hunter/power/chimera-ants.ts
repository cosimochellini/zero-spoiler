import type { PowerBody, Seat } from '~/data/features'
import type { HunterVocabulary } from '~/data/series/hunter-x-hunter/records/saga'

/**
 * Monta and Podungo tell Kite the leg is like a Chimera Ant Queen's, and
 * the Queen orders her first soldiers out for food so she can bear a King:
 * chapter 187, episode 77, where Monta shows Kite a Chimera Ant Queen's
 * claw. The body opens with her seat and the King's.
 */
const NAMED = { episode: 77, chapter: 187 }

const TOLD = {
  revealedAtEpisode: NAMED.episode,
  revealedAtChapter: NAMED.chapter,
}

const ROYAL_GUARD = { en: 'Royal Guard', it: 'Guardia reale' }
const SQUADRON_LEADER = { en: 'Squadron Leader', it: 'Comandante di divisione' }

/** A point of the story: an episode and the chapter it tells. */
interface At {
  chapter: number
  episode: number
}

/** One of the Queen's three Royal Guards, told with its holder. */
function royalGuard(holder: string, named: At, death: At): Seat {
  return {
    told: {
      revealedAtEpisode: named.episode,
      revealedAtChapter: named.chapter,
    },
    title: ROYAL_GUARD,
    holders: [
      { ...named, value: holder },
      { ...death, value: null },
    ],
  }
}

/** A Squadron Leader's seat, told where the story names its holder. */
function squadronLeader(told: Seat['told'], holders: Seat['holders']): Seat {
  return { told, title: SQUADRON_LEADER, holders }
}

/**
 * The Chimera Ants (#1447), a chain under the Queen: the King, the three
 * Royal Guards, then the Squadron Leaders the story names; plain soldiers
 * and officers are left out (epic #1441). Every seat but the King's opens
 * with its holder (owner, 2026-11-22), so no count travels ahead of a name:
 * the colony's tallies of Squadron Leaders (28 at chapter 204, 14 at 205,
 * 9 at 316) count leaders the story mostly never names.
 *
 * A seat empties at its holder's death, or where the story says they are no
 * longer what it names: Cheetu crowns himself King of Speed and Zazan rules
 * Meteor City as its queen. Leaving the nest alone does not empty one, so
 * Colt, who stays with the Queen, and Bihorn, still a Squadron Leader in
 * Pike's words after her death, keep theirs. Meleoron, Welfin and Bloster
 * are named only once the story calls them former Squadron Leaders, and
 * Baital in the chapter his squad vanishes, so none of them has a seat. The
 * story never says the colony is ended, so the body has no end.
 */
export const CHIMERA_ANTS: PowerBody<HunterVocabulary> = {
  ...TOLD,
  id: 'chimera-ants',
  kind: 'chain',
  description: [
    {
      ...NAMED,
      value: {
        en: 'Insects quarantined as a deadly threat: a queen passes on to her young the traits of what she eats. One far larger than any known has come ashore, and she has started eating humans.',
        it: 'Insetti in quarantena perché pericolosissimi: una regina trasmette ai figli i tratti di ciò che mangia. Una molto più grande del normale è approdata a riva e ha cominciato a mangiare esseri umani.',
      },
    },
    // The Squadron Leaders go their own ways, chapter 216, which episode 92
    // tells with the Queen's death.
    {
      episode: 92,
      chapter: 216,
      value: {
        en: 'A colony whose Queen has died after giving birth to its King. The King has left the nest with his Royal Guards, and many of the Squadron Leaders have gone off to become kings themselves.',
        it: 'Una colonia la cui regina è morta dopo aver dato alla luce il re. Il re ha lasciato il nido con le sue guardie reali, e molti comandanti di divisione se ne sono andati per diventare re a loro volta.',
      },
    },
    // The King dies beside Komugi, chapter 318, episode 135.
    {
      episode: 135,
      chapter: 318,
      value: {
        en: 'A colony whose Queen, King and three Royal Guards are all dead. Of its Squadron Leaders, some were killed in the fighting and the rest have gone their own ways.',
        it: 'Una colonia la cui regina, il re e le tre guardie reali sono tutti morti. Dei comandanti di divisione, alcuni sono stati uccisi nei combattimenti e gli altri hanno preso ciascuno la propria strada.',
      },
    },
  ],
  seats: [
    {
      told: TOLD,
      title: { en: 'Queen', it: 'Regina' },
      holders: [
        { ...NAMED, value: 'chimera-ant-queen' },
        // She dies after naming her son, chapter 215, episode 92.
        { episode: 92, chapter: 215, value: null },
      ],
    },
    {
      told: TOLD,
      title: { en: 'King', it: 'Re' },
      holders: [
        // Born at chapter 213, episode 91; the seat stays a title alone
        // until the dying Queen names him, chapter 215, episode 92.
        { episode: 91, chapter: 213, value: 'meruem' },
        { episode: 135, chapter: 318, value: null },
      ],
    },
    // Rammot knows the newborn for one of the Queen's Royal Guards, chapter
    // 197; the Guard gives the name Neferpitou in chapter 198. Episode 84
    // tells both. Gon shatters Neferpitou's skull, chapter 307, episode 131.
    royalGuard(
      'neferpitou',
      { episode: 84, chapter: 197 },
      { episode: 131, chapter: 307 },
    ),
    // Shaiapouf introduces himself as a fellow Royal Guard, chapter 202,
    // episode 86, and dies of the rose's poison, chapter 314, episode 135.
    royalGuard(
      'shaiapouf',
      { episode: 86, chapter: 202 },
      { episode: 135, chapter: 314 },
    ),
    // Shaiapouf names him in his cocoon, chapter 202, episode 86; the poison
    // kills him, chapter 310, episode 133.
    royalGuard(
      'menthuthuyoupi',
      { episode: 86, chapter: 202 },
      { episode: 133, chapter: 310 },
    ),
    // The manga's alone, as Peggy is: named at chapter 189, killed by the
    // newborn King at chapter 213.
    squadronLeader(
      { revealedAtEpisode: 79, revealedAtChapter: 189, source: 'chapter' },
      [
        { episode: 79, chapter: 189, source: 'chapter', value: 'peggy' },
        { episode: 91, chapter: 213, source: 'chapter', value: null },
      ],
    ),
    // Named at chapter 189 and episode 84; she rules Meteor City as its
    // queen at chapter 224, episode 96.
    squadronLeader({ revealedAtEpisode: 84, revealedAtChapter: 189 }, [
      { episode: 84, chapter: 189, value: 'zazan' },
      { episode: 96, chapter: 224, value: null },
    ]),
    // Named at chapter 192 and episode 79; he crowns himself King of Speed,
    // chapter 216, episode 92.
    squadronLeader({ revealedAtEpisode: 79, revealedAtChapter: 192 }, [
      { episode: 79, chapter: 192, value: 'cheetu' },
      { episode: 92, chapter: 216, value: null },
    ]),
    // Hagya is named at chapter 192; the anime first names him, as Leol,
    // in episode 106. Still a Squadron Leader with a squad of his own when
    // he rejoins the King, he dies at Morel's hands, chapter 254, episode
    // 107.
    squadronLeader({ revealedAtEpisode: 106, revealedAtChapter: 192 }, [
      { episode: 106, chapter: 192, value: 'hagya' },
      { episode: 107, chapter: 254, value: null },
    ]),
    // The anime's alone: Kite kills him in episode 82, three episodes after
    // his naming, while the manga opens him at chapter 193, which already
    // shows his body.
    squadronLeader(
      { revealedAtEpisode: 79, revealedAtChapter: 193, source: 'episode' },
      [
        { episode: 79, chapter: 193, source: 'episode', value: 'yunju' },
        { episode: 82, chapter: 193, source: 'episode', value: null },
      ],
    ),
    // Morel asks his name, chapter 214, episode 92. He never leaves the
    // Queen, and the story never says he stops being a Squadron Leader.
    squadronLeader({ revealedAtEpisode: 92, revealedAtChapter: 214 }, [
      { episode: 92, chapter: 214, value: 'colt' },
    ]),
    // The manga's alone: Pike calls him the strongest of the Squadron
    // Leaders, chapter 227.
    squadronLeader(
      { revealedAtEpisode: 97, revealedAtChapter: 227, source: 'chapter' },
      [{ episode: 97, chapter: 227, source: 'chapter', value: 'bihorn' }],
    ),
  ],
}
