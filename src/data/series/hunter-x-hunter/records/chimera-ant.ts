import { NGL_RECORD } from './chimera-ant-places'
import type { HunterSaga } from './saga'

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
    'meruem': {
      relationships: [
        {
          episode: 92,
          chapter: 215,
          value: [
            {
              character: 'neferpitou',
              type: { it: 'Guardia reale', en: 'Royal Guard' },
              summary: {
                it: 'Lo accompagna fuori dal nido.',
                en: 'Accompanies him away from the nest.',
              },
            },
          ],
        },
      ],
      role: { it: 'Re delle formichimere', en: 'Chimera Ant King' },
      log: {
        it: 'La regina chiede che gli venga riferito il nome che ha scelto per lui.',
        en: 'The Queen asks that he be told the name she chose for him.',
      },
      status: [{ episode: 92, chapter: 215, value: 'alive' }],
      affiliation: [
        {
          episode: 92,
          chapter: 215,
          value: { it: 'Formichimere', en: 'Chimera Ants' },
        },
      ],
    },
    'shaiapouf': {
      relationships: [
        {
          episode: 86,
          chapter: 202,
          value: [
            {
              character: 'neferpitou',
              type: { it: 'Alleato', en: 'Ally' },
              summary: {
                it: 'Si presenta a lui come guardia reale.',
                en: 'Introduces himself as a fellow Royal Guard.',
              },
            },
          ],
        },
      ],
      role: { it: 'Guardia reale', en: 'Royal Guard' },
      log: {
        it: 'Si presenta come guardia reale.',
        en: 'Introduces himself as a Royal Guard.',
      },
      status: [{ episode: 86, chapter: 202, value: 'alive' }],
      affiliation: [
        {
          episode: 86,
          chapter: 202,
          value: { it: 'Guardia della regina', en: 'Queen’s guard' },
        },
      ],
    },
    'palm-siberia': {
      relationships: [
        {
          episode: 86,
          chapter: 200,
          value: [
            {
              character: 'gon-freecss',
              type: { it: 'Alleato', en: 'Ally' },
              summary: {
                it: 'Gli spiega come entrare nella squadra.',
                en: 'Explains how he can join the team.',
              },
            },
          ],
        },
      ],
      role: { it: 'Allieva di un Hunter', en: 'Hunter’s student' },
      log: {
        it: 'Si presenta a Gon e Killua.',
        en: 'Introduces herself to Gon and Killua.',
      },
      status: [{ episode: 86, chapter: 200, value: 'alive' }],
      affiliation: [
        {
          episode: 86,
          chapter: 200,
          value: { it: 'Allieva di un Hunter', en: 'Hunter’s student' },
        },
      ],
    },
    'stick-dinner': surveyDossier,
    'monta-yuras': surveyDossier,
    'banana-kavaro': surveyDossier,
    'spinner-clow': surveyDossier,
    'neferpitou': {
      relationships: [
        {
          episode: 85,
          chapter: 198,
          value: [
            {
              character: 'kite',
              type: { it: 'Hunter che affronta', en: 'Hunter they fight' },
              summary: {
                it: 'Affronta Kaito per mettere alla prova la propria forza.',
                en: 'Fights Kite to test their strength.',
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
      status: [{ episode: 84, chapter: 198, value: 'alive' }],
      affiliation: [
        {
          episode: 84,
          chapter: 198,
          value: { it: 'Guardia della regina', en: 'Queen’s guard' },
        },
      ],
    },
  },
  entries: [
    {
      id: 'meruem',
      kind: 'character',
      revealedAtEpisode: 92,
      revealedAtChapter: 215,
      name: { it: 'Meruem', en: 'Meruem' },
      summary: {
        it: 'La regina chiede che gli venga riferito il nome che ha scelto per lui.',
        en: 'The Queen asks that he be told the name she chose for him.',
      },
      visual: { art: 'meruem', tint: 'vermilion' },
    },
    {
      id: 'shaiapouf',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 202,
      name: { it: 'Shaiapouf', en: 'Shaiapouf' },
      summary: {
        it: 'Si presenta come guardia reale.',
        en: 'Introduces himself as a Royal Guard.',
      },
      visual: { art: 'shaiapouf', tint: 'vermilion' },
    },
    {
      id: 'palm-siberia',
      kind: 'character',
      revealedAtEpisode: 86,
      revealedAtChapter: 200,
      name: { it: 'Palm', en: 'Palm' },
      summary: {
        it: 'Si presenta a Gon e Killua.',
        en: 'Introduces herself to Gon and Killua.',
      },
      visual: { art: 'palm-siberia', tint: 'vermilion' },
    },
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
      name: { it: 'Neferpitou', en: 'Neferpitou' },
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
    NGL_RECORD,
  ],
}
