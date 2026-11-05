import type { Relationship } from '~/data/types'

import { CHIMERA_ANT_HUNTERS } from './chimera-ant-hunters'
import { CHIMERA_ANT_NGL } from './chimera-ant-ngl'
import { chimeraAntPhase1Chronicles } from './chimera-ant-phase-1.chronicle'
import { chimeraAntPhase2Chronicles } from './chimera-ant-phase-2.chronicle'
import { chimeraAntPhase3Chronicles } from './chimera-ant-phase-3.chronicle'
import { chimeraAntPhase4Chronicles } from './chimera-ant-phase-4.chronicle'
import { CHIMERA_ANT_PHASE_FIVE } from './chimera-ant-phase-five'
import { CHIMERA_ANT_PHASE_FOUR } from './chimera-ant-phase-four'
import { CHIMERA_ANT_PHASE_THREE } from './chimera-ant-phase-three'
import { CHIMERA_ANT_PLACE_RECORDS } from './chimera-ant-places'
import { CHIMERA_ANT_ROYALS } from './chimera-ant-royals'
import { CHIMERA_ANT_SQUADS } from './chimera-ant-squads'
import type { HunterSaga } from './saga'

const PITOU_POKKLE: Relationship = {
  character: 'pokkle',
  type: {
    it: 'Hunter di cui sonda il cervello',
    en: 'Hunter whose brain they probe',
  },
  summary: {
    it: 'Neferpito trova Pockul nascosto tra le ossa e gli sonda il cervello per imparare il Nen.',
    en: 'Neferpitou finds Pokkle hiding among the bones and probes his brain to learn about Nen.',
  },
}

const PITOU_KITE: Relationship = {
  character: 'kite',
  type: { it: 'Hunter che uccide', en: 'Hunter they kill' },
  summary: {
    it: 'Neferpito attacca Kaito per mettere alla prova la propria forza e lo uccide.',
    en: 'Neferpitou attacks Kite to test their strength and kills him.',
  },
}

const PITOU_SHAIAPOUF: Relationship = {
  character: 'shaiapouf',
  type: { it: 'Altra guardia reale', en: 'Fellow Royal Guard' },
  summary: {
    it: 'Shawapf si presenta a Neferpito come un’altra guardia reale della regina.',
    en: 'Shaiapouf introduces himself to Neferpitou as another of the Queen’s Royal Guards.',
  },
}

const PITOU_MERUEM: Relationship = {
  character: 'meruem',
  type: { it: 'Re che serve', en: 'King they serve' },
  summary: {
    it: 'Neferpito serve il re appena nato, che lo colpisce con la coda per ucciderlo e poi ne loda la forza.',
    en: 'Neferpitou serves the newborn King, who strikes them with his tail meaning to kill, then praises their strength.',
  },
}

const surveyDossier: HunterSaga['dossiers'][string] = {
  relationships: [
    {
      episode: 77,
      chapter: 186,
      value: [
        {
          character: 'kite',
          type: { it: 'Compagno di ricerca', en: 'Survey teammate' },
          summary: {
            it: 'Lavora con Kaito alla ricerca di nuove specie.',
            en: 'Works with Kite to find new species.',
          },
        },
      ],
    },
  ],
  role: { it: 'Ricerca sul campo', en: 'Field surveyor' },
  log: {
    it: 'Si presenta a Gon e Killua quando si uniscono alla squadra di ricerca.',
    en: 'Introduces themself to Gon and Killua when they join the survey team.',
  },
  status: [{ episode: 77, chapter: 186, value: 'alive' }],
  affiliation: [
    {
      episode: 77,
      chapter: 186,
      value: { it: 'Squadra di ricerca', en: 'Survey team' },
    },
  ],
}

/**
 * Chimera Ant: episodes 76–136 of the 2011 anime and chapters 186–318, as the
 * English Hunter x Hunter Wiki's arc page gives them. Italian Wikipedia calls
 * the insects formichimere. The summary leaves out their aggression: the
 * owner's #796 check puts it in chapter 187, pages 6–8, not at 186 (page
 * references follow the owner's digital edition).
 */
export const chimeraAnt: HunterSaga = {
  name: { it: 'Formichimere', en: 'Chimera Ant' },
  dossiers: {
    ...CHIMERA_ANT_PHASE_FIVE.dossiers,
    ...CHIMERA_ANT_PHASE_FOUR.dossiers,
    ...CHIMERA_ANT_PHASE_THREE.dossiers,
    ...CHIMERA_ANT_HUNTERS.dossiers,
    ...CHIMERA_ANT_NGL.dossiers,
    ...CHIMERA_ANT_ROYALS.dossiers,
    ...CHIMERA_ANT_SQUADS.dossiers,
    'stick-dinner': {
      ...surveyDossier,
      chronicle: chimeraAntPhase1Chronicles['stick-dinner'],
    },
    'monta-yuras': {
      ...surveyDossier,
      chronicle: chimeraAntPhase1Chronicles['monta-yuras'],
    },
    'banana-kavaro': {
      ...surveyDossier,
      chronicle: chimeraAntPhase1Chronicles['banana-kavaro'],
    },
    'spinner-clow': {
      ...surveyDossier,
      chronicle: [
        ...chimeraAntPhase1Chronicles['spinner-clow'],
        ...chimeraAntPhase2Chronicles['spinner-clow'],
      ],
    },
    'neferpitou': {
      chronicle: [
        ...chimeraAntPhase1Chronicles.neferpitou,
        ...chimeraAntPhase2Chronicles.neferpitou,

        ...chimeraAntPhase3Chronicles.neferpitou,

        ...chimeraAntPhase4Chronicles.neferpitou,
      ],
      relationships: [
        { episode: 84, chapter: 198, value: [PITOU_POKKLE] },
        { episode: 85, chapter: 199, value: [PITOU_KITE, PITOU_POKKLE] },
        {
          episode: 86,
          chapter: 202,
          value: [PITOU_KITE, PITOU_SHAIAPOUF, PITOU_POKKLE],
        },
        {
          episode: 92,
          chapter: 215,
          value: [PITOU_MERUEM, PITOU_SHAIAPOUF, PITOU_KITE, PITOU_POKKLE],
        },
        // The King orders them to guard Komugi, chapter 259 / episode 109.
        {
          episode: 109,
          chapter: 259,
          value: [
            PITOU_MERUEM,
            PITOU_SHAIAPOUF,
            PITOU_KITE,
            PITOU_POKKLE,
            {
              character: 'komugi',
              type: { it: 'Da proteggere', en: 'Charge' },
              summary: {
                it: 'Il re ordina a Neferpito di sorvegliarla e di togliere di mezzo ogni minaccia.',
                en: 'The King orders Neferpitou to watch over her and deal with any threat.',
              },
            },
          ],
        },
      ],
      role: { it: 'Guardia reale', en: 'Royal Guard' },
      log: {
        it: 'Si presenta con il nome che gli ha dato la regina. Nella prova dell’acqua, la foglia reagisce al suo Nen.',
        en: 'Introduces themself by the name the Queen gave them. In the water test, the leaf reacts to their Nen.',
      },
      status: [
        { episode: 84, chapter: 198, value: 'alive' },
        { episode: 131, chapter: 307, value: 'deceased' },
      ],
      affiliation: [
        {
          episode: 84,
          chapter: 198,
          value: { it: 'Guardia della regina', en: 'Queen’s guard' },
        },
        // The newborn King's guards kneel to him, chapter 213 and episode 91.
        {
          episode: 91,
          chapter: 213,
          value: { it: 'Guardia del re', en: 'King’s guard' },
        },
      ],
    },
  },
  entries: [
    ...CHIMERA_ANT_PHASE_FIVE.entries,
    ...CHIMERA_ANT_PHASE_FOUR.entries,
    ...CHIMERA_ANT_PHASE_THREE.entries,
    ...CHIMERA_ANT_HUNTERS.entries,
    ...CHIMERA_ANT_NGL.entries,
    ...CHIMERA_ANT_ROYALS.entries,
    ...CHIMERA_ANT_SQUADS.entries,
    {
      id: 'chimera-ant-arc',
      kind: 'arc',
      revealedAtEpisode: 76,
      revealedAtChapter: 186,
      name: { it: 'Formichimere', en: 'Chimera Ant' },
      summary: {
        it: 'Gon e Killua lasciano Greed Island per raggiungere un giocatore che sperano sia Ging. Dove arrivano si muovono le formichimere.',
        en: 'Gon and Killua leave Greed Island to meet a player they hope is Ging. Where they land, chimera ants are on the move.',
      },
      visual: { art: 'chimera-ant-arc', tint: 'vermilion' },
    },
    {
      id: 'neferpitou',
      kind: 'character',
      revealedAtEpisode: 84,
      revealedAtChapter: 198,
      name: { it: 'Neferpito', en: 'Neferpitou' },
      summary: {
        it: 'Una guardia reale delle formichimere.',
        en: 'A Royal Guard of the Chimera Ants.',
      },
      visual: { art: 'neferpitou', tint: 'vermilion' },
    },
    {
      id: 'spinner-clow',
      kind: 'character',
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Spinner Clow', en: 'Spinner Clow' },
      summary: {
        it: 'Partecipa a una ricerca sulle specie animali.',
        en: 'Takes part in a survey of animal species.',
      },
      visual: { art: 'spinner-clow', tint: 'ocher' },
    },
    {
      id: 'banana-kavaro',
      kind: 'character',
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Banana Kavaro', en: 'Banana Kavaro' },
      summary: {
        it: 'Partecipa a una ricerca sulle specie animali.',
        en: 'Takes part in a survey of animal species.',
      },
      visual: { art: 'banana-kavaro', tint: 'ocher' },
    },
    {
      id: 'monta-yuras',
      kind: 'character',
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Monta Yuras', en: 'Monta Yuras' },
      summary: {
        it: 'Partecipa a una ricerca sulle specie animali.',
        en: 'Takes part in a survey of animal species.',
      },
      visual: { art: 'monta-yuras', tint: 'ocher' },
    },
    {
      id: 'stick-dinner',
      kind: 'character',
      revealedAtEpisode: 77,
      revealedAtChapter: 186,
      name: { it: 'Stick Dinner', en: 'Stick Dinner' },
      summary: {
        it: 'Partecipa a una ricerca sulle specie animali.',
        en: 'Takes part in a survey of animal species.',
      },
      visual: { art: 'stick-dinner', tint: 'ocher' },
    },
    ...CHIMERA_ANT_PLACE_RECORDS,
  ],
}
