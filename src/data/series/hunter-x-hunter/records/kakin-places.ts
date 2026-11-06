import type { PlaceDossier } from '~/data/types'

import type { HunterEntity, HunterVocabulary } from './saga'

export const KAKIN_PLACE_ENTRIES: HunterEntity[] = [
  // Named in the expedition announcement (340), visited in Netero's flashback (344).
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
  // Presented on television at 342; the story first goes on board at 358.
  {
    id: 'black-whale',
    kind: 'place',
    revealedAtEpisode: 148,
    revealedAtChapter: 342,
    source: 'chapter',
    name: { it: 'Black Whale', en: 'Black Whale' },
    summary: {
      it: 'La nave da trasporto di Cakin, costruita per duecentomila passeggeri. Il viaggio inaugurale porterà Beyond, il re e i quattordici principi.',
      en: 'Kakin’s transport ship, built for two hundred thousand passengers. Its maiden voyage will carry Beyond, the king and the fourteen princes.',
    },
    visual: { art: 'black-whale', tint: 'violet' },
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
  'black-whale': {
    arc: 'kakin-arc',
    form: 'vessel',
    // ponytail: no sea region yet; it sails from Kakin's harbour.
    region: 'mainland',
    landmark: {
      it: 'Duecentomila passeggeri a bordo',
      en: 'Two hundred thousand passengers on board',
    },
    log: {
      it: 'Cakin la presenta in televisione. I civili vincono un posto a bordo con un sorteggio, una possibilità su 1.300.',
      en: 'Kakin presents it on television. Civilians win a seat on board by lottery, at odds of one in 1,300.',
    },
    filedHere: [],
  },
}
