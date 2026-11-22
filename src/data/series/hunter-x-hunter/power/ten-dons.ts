import type { Holding, PowerBody, Seat } from '~/data/features'
import type { HunterVocabulary } from '~/data/series/hunter-x-hunter/records/saga'

/**
 * On the phone with Chrollo, Uvogin tells of the Ten Dons, the heads of the
 * Mafia who meet once a year at the auction: chapter 74 (about pp. 8–10),
 * episode 43. The Dons are silhouettes alone; the name carries the count, so
 * the ten seats are told here too.
 */
const TOLD = { revealedAtEpisode: 43, revealedAtChapter: 74 }

/**
 * Illumi's needles are in the head of the Don speaking on screen, all ten sit
 * dead around their table, and Illumi tells Silva he has dealt with them:
 * chapter 100 (about pp. 3–7), episode 53. The Mafia goes on taking orders
 * from their bodies (chapter 105, episode 54), which empties no seat further.
 */
const KILLED: Holding = { episode: 53, chapter: 100, value: null }

/** One of the ten seats: the story never names who holds any of them. */
function don(): Seat {
  return { told: TOLD, title: { en: 'Don', it: 'Anziano' }, holders: [KILLED] }
}

/**
 * The Ten Dons (#1446), a council of ten equal seats, none of them ever held
 * by a named Don: each is a seat with no one named until all ten are killed
 * at once. So the page lists the body only from chapter 100, episode 53, as
 * ten vacant seats (#1194); before that it is among the groups in the fog.
 * The story never says the council ends or that anyone takes a seat, so it
 * has no end and the seats stay vacant (owner, #1446).
 */
export const TEN_DONS: PowerBody<HunterVocabulary> = {
  ...TOLD,
  id: 'ten-dons',
  kind: 'council',
  description: [
    {
      chapter: 74,
      episode: 43,
      value: {
        en: 'The ten heads of the Mafia, each ruling the turf of one of ten regions across six continents. Once a year all ten gather at the Underground Auction to discuss their affairs and give orders.',
        it: 'I dieci capi della mafia, ognuno padrone del territorio di una delle dieci regioni dei sei continenti. Una volta l’anno si riuniscono tutti all’asta sotterranea per discutere dei loro affari e dare ordini.',
      },
    },
    {
      chapter: 100,
      episode: 53,
      value: {
        en: 'The ten heads of the Mafia. An assassin hired by the leader of the Phantom Troupe has killed all ten, yet on screen their bodies still speak to the Mafia.',
        it: 'I dieci capi della mafia. Un assassino ingaggiato dal capo della Brigata Fantasma li ha uccisi tutti e dieci, ma sullo schermo i loro corpi parlano ancora alla mafia.',
      },
    },
  ],
  seats: Array.from({ length: 10 }, don),
}
