import type { HunterSaga } from './saga'

/**
 * The Hunters of Chimera Ant phase 2 (#1021): Netero’s team, its students and the doctor.
 * Spread into the Chimera Ant saga in `./chimera-ant`. Every gate is the
 * first chapter and episode whose English-wiki synopsis names the record
 * explicitly (owner ruling, #1021).
 */
export const CHIMERA_ANT_HUNTERS: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {
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
  },
  entries: [
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
  ],
}
