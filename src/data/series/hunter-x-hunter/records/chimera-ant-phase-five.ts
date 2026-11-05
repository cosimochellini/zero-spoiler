import { chimeraAntPhase5Chronicles } from './chimera-ant-phase-5.chronicle'
import type { HunterSaga } from './saga'

export const CHIMERA_ANT_PHASE_FIVE: Pick<HunterSaga, 'dossiers' | 'entries'> =
  {
    entries: [
      {
        id: 'ming-jol-ik',
        kind: 'character',
        revealedAtEpisode: 135,
        revealedAtChapter: 315,
        name: { it: 'Digo Masadoru', en: 'Ming Jol-ik' },
        summary: {
          it: 'Ex capo del Golt Orientale. Ha lasciato il governo a un sosia e vive in campagna.',
          en: 'The former leader of East Gorteau. He left his double in charge and lives on a farm.',
        },
        visual: { art: 'ming-jol-ik', tint: 'sand' },
      },
    ],
    dossiers: {
      'ming-jol-ik': {
        chronicle: chimeraAntPhase5Chronicles['ming-jol-ik'],
        role: {
          it: 'Ex capo del Golt Orientale',
          en: 'Former leader of East Gorteau',
        },
        log: {
          it: 'Un notiziario annuncia la morte dell’uomo che lo sostituiva. Lui vive lontano dal palazzo, in campagna.',
          en: 'A news broadcast reports the death of the man who took his place. He lives on a farm far from the palace.',
        },
        affiliation: [
          {
            episode: 135,
            chapter: 315,
            value: {
              it: 'Un tempo al governo del Golt Orientale',
              en: 'Formerly in the government of East Gorteau',
            },
          },
        ],
        status: [{ episode: 135, chapter: 315, value: 'alive' }],
      },
    },
  }
