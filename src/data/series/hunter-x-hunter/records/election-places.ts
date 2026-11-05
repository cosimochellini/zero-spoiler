import type { PlaceDossier } from '~/data/types'

import type { HunterEntity, HunterVocabulary } from './saga'

export const ELECTION_PLACE_ENTRIES: HunterEntity[] = [
  {
    id: 'parasta-airport',
    kind: 'place',
    source: 'episode',
    revealedAtEpisode: 142,
    revealedAtChapter: 328,
    name: { it: 'Aeroporto di Parasta', en: 'Parasta Airport' },
    summary: {
      it: 'Canary e Amane aspettano Killua all’aeroporto con un dirigibile pronto a partire.',
      en: 'Canary and Amane wait for Killua at the airport with an airship ready to leave.',
    },
    visual: { art: 'parasta-airport', tint: 'sand' },
  },
  {
    id: 'swardani-city',
    kind: 'place',
    source: 'episode',
    revealedAtEpisode: 142,
    revealedAtChapter: 328,
    name: { it: 'Swardani', en: 'Swardani City' },
    summary: {
      it: 'La città dove si trova l’ospedale in cui è ricoverato Gon.',
      en: 'The city where Gon is in hospital.',
    },
    visual: { art: 'swardani-city', tint: 'sand' },
  },
  {
    id: 'world-tree',
    kind: 'place',
    revealedAtEpisode: 147,
    revealedAtChapter: 337,
    name: { it: 'Albero del Mondo', en: 'World Tree' },
    summary: {
      it: 'Ging dice a Gon che lo aspetterà in cima all’albero.',
      en: 'Ging tells Gon he will wait for him at the top of the tree.',
    },
    visual: { art: 'world-tree', tint: 'green' },
  },
]

export const ELECTION_PLACES: Record<string, PlaceDossier<HunterVocabulary>> = {
  'parasta-airport': {
    form: 'airport',
    region: 'mainland',
    arc: 'election-arc',
    landmark: { it: 'I dirigibili in partenza', en: 'The departing airships' },
    log: {
      it: 'Killua chiede di preparare più dirigibili con rotte diverse. Mentre le maggiordome organizzano i voli, lui parte con sua sorella.',
      en: 'Killua asks for several airships to fly in different directions. While the butlers arrange the flights, he leaves with his sister.',
    },
    filedHere: ['killua', 'canary'],
  },
  'swardani-city': {
    form: 'city',
    region: 'mainland',
    arc: 'election-arc',
    landmark: {
      it: 'L’ospedale e il suo parcheggio',
      en: 'The hospital and its car park',
    },
    log: {
      it: 'Nell’ospedale della città gli amici di Gon cercano di curarlo. Killua cerca di raggiungerli in dirigibile.',
      en: 'Gon’s friends look for a way to help him at the city hospital. Killua tries to reach them by airship.',
    },
    filedHere: ['gon-freecss', 'leorio-paradinight'],
  },
  'world-tree': {
    form: 'tree',
    region: 'mainland',
    arc: 'election-arc',
    landmark: {
      it: 'Il tronco che si alza sopra la città',
      en: 'The trunk rising above the town',
    },
    log: {
      it: 'Per parlare con suo padre, Gon deve raggiungere la cima. Riceve il messaggio di Ging alla sede dell’Associazione Hunter.',
      en: 'To talk to his father, Gon has to reach the top. He gets Ging’s message at the Hunter Association headquarters.',
    },
    filedHere: ['gon-freecss', 'ging-freecss'],
  },
}
