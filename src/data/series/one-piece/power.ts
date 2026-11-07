import type { Body } from '~/data/features'

import type { OnePieceVocabulary } from './records/saga'

/**
 * The bodies of power the power page lists, in its order (epic #1084). Each
 * is filed by its own issue (#1087 to #1094); until then the page shows
 * its empty state.
 */
export const BODIES: Body<OnePieceVocabulary>[] = []
