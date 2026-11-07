import type { PowerBody, Seat } from '~/data/features'
import type { OnePieceVocabulary } from '~/data/series/one-piece/records/saga'

/** Kid shows Luffy the Cross Guild's flyer, Buggy on top: ch. 1056 p.14–15, ep 1083. */
const TOLD = { revealedAtEpisode: 1083, revealedAtChapter: 1056 }

/** Buggy announces Crocodile and Mihawk as executives: ch. 1058 p.6–15, ep 1086. */
const EXECUTIVES = { episode: 1086, chapter: 1058 }

/** One of the two executives, from Buggy's announcement on. */
function executive(holding: Seat['holders'][number]): Seat {
  return {
    told: {
      revealedAtEpisode: EXECUTIVES.episode,
      revealedAtChapter: EXECUTIVES.chapter,
    },
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
    executive({ ...EXECUTIVES, value: 'crocodile' }),
    executive({ ...EXECUTIVES, value: 'dracule-mihawk' }),
  ],
}
