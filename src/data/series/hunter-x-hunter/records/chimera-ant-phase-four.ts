import type { HunterSaga } from './saga'

export const CHIMERA_ANT_PHASE_FOUR: Pick<HunterSaga, 'dossiers' | 'entries'> =
  {
    entries: [
      {
        id: 'taragetter',
        kind: 'character',
        source: 'chapter',
        revealedAtEpisode: 110,
        revealedAtChapter: 261,
        name: { it: 'Taragetter', en: 'Taragetter' },
        summary: {
          it: 'Soldato della squadra di Welfang. Nobu lo uccide durante l’infiltrazione nel palazzo.',
          en: 'A soldier in Welfin’s squad. Knov kills him while infiltrating the palace.',
        },
        visual: { art: 'taragetter', tint: 'ivory' },
      },
    ],
    dossiers: {
      taragetter: {
        role: { it: 'Soldato di guardia', en: 'Palace guard' },
        log: {
          it: 'Welfang trova del sangue e un paio di scarpe. Si chiede perché un intruso sia entrato nel palazzo per uccidere Taragetter.',
          en: 'Welfin finds blood and a pair of shoes. He wonders why an intruder would enter the palace to kill Taragetter.',
        },
        status: [{ episode: 110, chapter: 261, value: 'deceased' }],
        affiliation: [
          {
            episode: 110,
            chapter: 261,
            value: { it: 'Squadra di Welfang', en: 'Welfin’s squad' },
          },
        ],
        relationships: [
          {
            episode: 110,
            chapter: 261,
            source: 'chapter',
            value: [
              {
                character: 'welfin',
                type: { it: 'Comandante', en: 'Commander' },
                summary: {
                  it: 'Welfang indaga sulla sua morte e segue la pista lasciata dall’intruso.',
                  en: 'Welfin investigates his death and follows the intruder’s trail.',
                },
              },
              {
                character: 'knov',
                type: { it: 'Lo uccide', en: 'Kills him' },
                summary: {
                  it: 'Nobu lo incontra nel palazzo e lo uccide durante l’infiltrazione.',
                  en: 'Knov encounters him in the palace and kills him during the infiltration.',
                },
              },
            ],
          },
        ],
      },
    },
  }
