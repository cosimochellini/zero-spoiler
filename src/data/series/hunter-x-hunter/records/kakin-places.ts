import type { PlaceDossier } from '~/data/types'

import type { HunterEntity, HunterVocabulary } from './saga'

// Named in the expedition announcement (340), visited in Netero's flashback (344).
export const KAKIN_PLACE_ENTRIES: HunterEntity[] = [
  {
    id: 'dark-continent',
    kind: 'place',
    revealedAtEpisode: 148,
    revealedAtChapter: 340,
    source: 'chapter',
    name: { it: 'Continente Oscuro', en: 'Dark Continent' },
    summary: {
      it: 'Una terra fuori dalle mappe del mondo conosciuto. Il re di Cakin annuncia una spedizione per raggiungerla.',
      en: 'A land outside the maps of the known world. The King of Kakin announces an expedition to reach it.',
    },
    visual: { art: 'dark-continent', tint: 'green' },
  },
]

export const KAKIN_PLACES: Record<string, PlaceDossier<HunterVocabulary>> = {
  'dark-continent': {
    arc: 'kakin-arc',
    form: 'continent',
    region: 'mainland',
    landmark: {
      it: 'Terre fuori dalla mappa del mondo',
      en: 'Land beyond the world map',
    },
    log: {
      it: 'L’Associazione Hunter discute l’annuncio della spedizione. Le visite precedenti hanno portato disastri al ritorno, e le grandi nazioni hanno firmato un trattato per impedirne altre.',
      en: 'The Hunter Association discusses the expedition announcement. Earlier visits brought disasters back, and the leading nations signed a treaty to prevent further journeys.',
    },
    filedHere: [],
  },
}
