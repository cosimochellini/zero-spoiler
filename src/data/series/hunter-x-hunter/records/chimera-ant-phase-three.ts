import type { HunterSaga } from './saga'

export const CHIMERA_ANT_PHASE_THREE: Pick<HunterSaga, 'dossiers' | 'entries'> =
  {
    entries: [
      {
        id: 'bihorn',
        kind: 'character',
        revealedAtEpisode: 97,
        revealedAtChapter: 227,
        source: 'chapter',
        name: { it: 'Bihorn', en: 'Bihorn' },
        summary: { it: 'Formichimera.', en: 'Chimera Ant.' },
        visual: { art: 'bihorn', tint: 'ocher' },
      },
      {
        id: 'flutter',
        kind: 'character',
        revealedAtEpisode: 100,
        revealedAtChapter: 235,
        name: { it: 'Flutter', en: 'Flutter' },
        summary: { it: 'Formichimera.', en: 'Chimera Ant.' },
        visual: { art: 'flutter', tint: 'ocher' },
      },
      {
        id: 'pell',
        kind: 'character',
        revealedAtEpisode: 96,
        revealedAtChapter: 226,
        source: 'episode',
        name: { it: 'Pell', en: 'Pell' },
        summary: { it: 'Formichimera.', en: 'Chimera Ant.' },
        visual: { art: 'pell', tint: 'ocher' },
      },
      {
        id: 'komugi',
        kind: 'character',
        revealedAtEpisode: 103,
        revealedAtChapter: 257,
        name: { it: 'Komugi', en: 'Komugi' },
        summary: { it: 'Campionessa di gungi.', en: 'Gungi champion.' },
        visual: { art: 'komugi', tint: 'ocher' },
      },
      {
        id: 'remora',
        kind: 'character',
        revealedAtEpisode: 101,
        revealedAtChapter: 238,
        name: { it: 'Remora', en: 'Remora' },
        summary: { it: 'Formichimera.', en: 'Chimera Ant.' },
        visual: { art: 'remora', tint: 'ocher' },
      },
      {
        id: 'tsukuma',
        kind: 'character',
        revealedAtEpisode: 96,
        revealedAtChapter: 224,
        source: 'chapter',
        name: { it: 'Tsukuma', en: 'Tsukuma' },
        summary: { it: 'Ufficiale.', en: 'Officer.' },
        visual: { art: 'tsukuma', tint: 'ocher' },
      },
    ],
    dossiers: {
      bihorn: {
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Pike lo cita durante uno scontro.',
          en: 'Pike mentions him during a fight.',
        },
        affiliation: [
          {
            episode: 97,
            chapter: 227,
            value: { it: 'Formichimere', en: 'Chimera Ants' },
          },
        ],
        status: [{ episode: 97, chapter: 227, value: 'alive' }],
      },
      flutter: {
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Avverte un compagno del pericolo.',
          en: 'Warns an ally of danger.',
        },
        affiliation: [
          {
            episode: 100,
            chapter: 235,
            value: { it: 'Formichimere', en: 'Chimera Ants' },
          },
        ],
        status: [{ episode: 100, chapter: 235, value: 'alive' }],
      },
      pell: {
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: { it: 'Combatte contro Shalnark.', en: 'Fights Shalnark.' },
        affiliation: [
          {
            episode: 96,
            chapter: 226,
            value: { it: 'Formichimere', en: 'Chimera Ants' },
          },
        ],
        status: [{ episode: 96, chapter: 226, value: 'alive' }],
      },
      komugi: {
        role: { it: 'Campionessa di gungi', en: 'Gungi champion' },
        log: {
          it: 'Si presenta al re durante una partita.',
          en: 'Introduces herself to the King during a game.',
        },
        affiliation: [
          {
            episode: 103,
            chapter: 257,
            value: { it: 'Giocatrici di gungi', en: 'Gungi players' },
          },
        ],
        status: [{ episode: 103, chapter: 257, value: 'alive' }],
      },
      remora: {
        role: { it: 'Formichimera', en: 'Chimera Ant' },
        log: {
          it: 'Aiuta due formichimere a prendere di mira Killua.',
          en: 'Helps two Chimera Ants target Killua.',
        },
        affiliation: [
          {
            episode: 101,
            chapter: 238,
            value: { it: 'Formichimere', en: 'Chimera Ants' },
          },
        ],
        status: [{ episode: 101, chapter: 238, value: 'alive' }],
      },
      tsukuma: {
        role: { it: 'Ufficiale', en: 'Officer' },
        log: {
          it: 'Parla in un servizio televisivo.',
          en: 'Speaks in a television report.',
        },
        affiliation: [
          { episode: 96, chapter: 224, value: { it: 'Polizia', en: 'Police' } },
        ],
        status: [{ episode: 96, chapter: 224, value: 'alive' }],
      },
    },
  }
