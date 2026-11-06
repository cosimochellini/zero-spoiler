import type { Relationship } from '~/data/types'

import { chapterOneChronicles } from './chapter-one.chronicle'
import { chapterOneRelationships } from './chapter-one.relationships'
import { chimeraAntPhase1Chronicles } from './chimera-ant-phase-1.chronicle'
import { chimeraAntPhase2Chronicles } from './chimera-ant-phase-2.chronicle'
import { chimeraAntPhase5Chronicles } from './chimera-ant-phase-5.chronicle'
import { electionChronicles } from './election.chronicle'
import type { HunterSaga } from './saga'

/** Kite's last selection in each medium before Neferpitou kills him. */
function kiteBefore(source: 'chapter' | 'episode'): Relationship[] {
  return (
    chapterOneRelationships.kite.findLast((entry) => entry.source === source)
      ?.value ?? []
  )
}

const KITE_PITOU: Relationship = {
  character: 'neferpitou',
  type: { it: 'Guardia reale che lo uccide', en: 'Royal Guard who kills him' },
  summary: {
    it: 'Neferpito attacca Kaito per mettere alla prova la propria forza e lo uccide.',
    en: 'Neferpitou attacks Kite to test their strength and kills him.',
  },
}

/**
 * Chapter 1's two characters the 2011 anime introduces much later (#760).
 * Both are unanchored with an explicit chapter pin on every fact, so the
 * reordered pair never moves chapter-one readers into the later anime. No
 * later abilities or looks are filed; Kite's death is (#1021).
 */
export const chapterOne: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  entries: [
    {
      id: 'kite',
      kind: 'character',
      // The wiki's appearance floor is episode 75, which only ends on an
      // unidentified figure; the naming scene, and so the gate, is 76.
      revealedAtEpisode: 76,
      revealedAtChapter: 1,
      unanchored: true,
      name: { it: 'Kaito', en: 'Kite' },
      summary: {
        it: 'Un Hunter allievo di Ging che salva Gon da un orso-volpe sull’Isola Balena.',
        en: 'A Hunter trained by Ging who saves Gon from a foxbear on Whale Island.',
      },
      visual: { art: 'kite', tint: 'azure' },
    },
    // Italian Wikipedia has no entry for Kon: the English spelling stands.
    {
      id: 'kon',
      kind: 'character',
      revealedAtEpisode: 76,
      revealedAtChapter: 1,
      unanchored: true,
      name: { it: 'Kon', en: 'Kon' },
      summary: {
        it: 'Un orso-volpe dell’Isola Balena che Gon decide di allevare dopo la morte della madre.',
        en: 'A foxbear from Whale Island whom Gon decides to raise after its mother is killed.',
      },
      visual: { art: 'kon', tint: 'ocher' },
    },
  ],
  dossiers: {
    kite: {
      relationships: [
        ...chapterOneRelationships.kite,
        // Each medium keeps its own rows and adds Neferpitou.
        {
          episode: 85,
          chapter: 199,
          source: 'chapter',
          value: [...kiteBefore('chapter'), KITE_PITOU],
        },
        {
          episode: 85,
          chapter: 199,
          source: 'episode',
          value: [...kiteBefore('episode'), KITE_PITOU],
        },
      ],
      chronicle: [
        ...chapterOneChronicles.kite,
        ...chimeraAntPhase1Chronicles.kite,

        ...chimeraAntPhase2Chronicles.kite,

        ...chimeraAntPhase5Chronicles.kite,
        ...electionChronicles.kite,
      ],
      role: [
        { episode: 76, chapter: 1, value: { it: 'Hunter', en: 'Hunter' } },
        {
          episode: 93,
          chapter: 217,
          value: {
            it: 'Hunter ritrovato sotto il controllo nemico',
            en: 'Hunter found under enemy control',
          },
        },
        {
          episode: 136,
          chapter: 316,
          value: {
            it: 'Hunter rinato come formichimera',
            en: 'Hunter reborn as a Chimera Ant',
          },
        },
      ],
      log: {
        it: 'Arriva sull’Isola Balena in cerca di indizi su Ging, il suo maestro, che gli ha assegnato come ultima prova il compito di trovarlo. Salva Gon da un orso-volpe e lo rimprovera per essersi avvicinato al suo territorio.',
        en: 'He comes to Whale Island looking for clues about Ging, his teacher, whose final test is to find him. He saves Gon from a foxbear and rebukes him for entering its territory.',
      },
      status: [
        { episode: 76, chapter: 1, value: 'alive' },
        // Neferpitou holds his head, chapter 199 and episode 85.
        { episode: 85, chapter: 199, value: 'deceased' },
        { episode: 136, chapter: 316, value: 'alive' },
      ],
      affiliation: [
        {
          episode: 76,
          chapter: 1,
          value: {
            it: 'Allievo di Ging Freecss',
            en: 'Ging Freecss’s student',
          },
        },
        {
          episode: 77,
          chapter: 186,
          value: {
            it: 'Squadra di ricerca di nuove specie',
            en: 'New species survey team',
          },
        },
      ],
    },
    kon: {
      relationships: chapterOneRelationships.kon,
      chronicle: chapterOneChronicles.kon,
      role: { it: 'Orso-volpe', en: 'Foxbear' },
      log: {
        it: 'È ancora un cucciolo quando Kaito uccide sua madre per salvare Gon. Kaito vuole abbattere anche lui, ma Gon insiste per allevarlo.',
        en: 'He is still a cub when Kite kills his mother to save Gon. Kite intends to put him down too, but Gon insists on raising him.',
      },
      status: [{ episode: 76, chapter: 1, value: 'alive' }],
      affiliation: [
        {
          episode: 76,
          chapter: 1,
          value: { it: 'Isola Balena', en: 'Whale Island' },
        },
      ],
      origin: [
        {
          episode: 76,
          chapter: 1,
          place: 'whale-island',
          value: { it: 'Isola Balena', en: 'Whale Island' },
        },
      ],
    },
  },
}
