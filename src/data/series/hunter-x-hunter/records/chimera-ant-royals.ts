import type { HunterSaga } from './saga'

/**
 * The King, the Royal Guards and the Squadron Leaders closest to the Queen, Chimera Ant phase 2 (#1021).
 * Spread into the Chimera Ant saga in `./chimera-ant`. Every gate is the
 * first chapter and episode whose English-wiki synopsis names the record
 * explicitly (owner ruling, #1021).
 */
export const CHIMERA_ANT_ROYALS: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {
    meruem: {
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
    shaiapouf: {
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
  ],
}
