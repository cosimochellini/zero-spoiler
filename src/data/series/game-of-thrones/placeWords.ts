import type { PlaceWords } from '~/data/types'

import type { ThronesVocabulary } from './records/saga'

/**
 * Game of Thrones' place words, each in its own words: a page is sent only
 * the labels its open places use (`wordsOf` in
 * `~/server/archive/printed.server.ts`). The Italian follows the Italian
 * dub.
 */
export const GAME_OF_THRONES_PLACE_WORDS: PlaceWords<ThronesVocabulary> = {
  dictionary: false,
  region: { en: 'Region', it: 'Regione' },
  allRegions: { en: 'All regions', it: 'Tutte le regioni' },
  regions: {
    'the-north': { en: 'The North', it: 'Il Nord' },
    'the-riverlands': { en: 'The Riverlands', it: 'Terre dei Fiumi' },
    'the-vale': { en: 'The Vale', it: 'La Valle' },
    'the-crownlands': { en: 'The Crownlands', it: 'Terre della Corona' },
    'beyond-the-wall': { en: 'Beyond the Wall', it: 'Oltre la Barriera' },
    'essos': { en: 'Essos', it: 'Essos' },
  },
  forms: {
    camp: { en: 'Camp', it: 'Accampamento' },
    castle: { en: 'Castle', it: 'Castello' },
    city: { en: 'City', it: 'Città' },
    forest: { en: 'Forest', it: 'Foresta' },
    fortress: { en: 'Fortress', it: 'Fortezza' },
    inn: { en: 'Inn', it: 'Locanda' },
    plain: { en: 'Plain', it: 'Pianura' },
    sept: { en: 'Sept', it: 'Tempio' },
    town: { en: 'Town', it: 'Borgo' },
  },
}
