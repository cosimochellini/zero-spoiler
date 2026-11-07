import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/**
 * Kid shows Luffy the Cross Guild's flyer: Buggy on top, Crocodile and
 * Mihawk under him (ch. 1056 p.14–15, ep 1083). Buggy announces the two as
 * the guild's executives at ch. 1058, ep 1086.
 */
const TOLD = { revealedAtEpisode: 1083, revealedAtChapter: 1056 }

/** One of the two Warlords the flyer puts under Buggy, held from the flyer on. */
function executive(holding: Seat['holders'][number]): Seat {
  return {
    told: TOLD,
    title: { en: 'Executive', it: 'Dirigente' },
    holders: [holding],
  }
}

/**
 * The Cross Guild (#1092), a crew under the leader its flyer names. The
 * story shows at chapter 1058 that Crocodile and Mihawk founded it and keep
 * Buggy as a figurehead; he keeps the seat all the same.
 */
export const CROSS_GUILD: PowerBody<OnePieceVocabulary> = {
  ...TOLD,
  id: 'cross-guild',
  kind: 'crew',
  seats: [
    {
      told: TOLD,
      title: { en: 'Leader', it: 'Capo' },
      holders: [{ episode: 1083, chapter: 1056, value: 'buggy' }],
    },
    executive({ episode: 1083, chapter: 1056, value: 'crocodile' }),
    executive({ episode: 1083, chapter: 1056, value: 'dracule-mihawk' }),
  ],
}
