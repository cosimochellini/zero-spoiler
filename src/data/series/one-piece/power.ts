import type { PowerBody } from '~/data/features'

import { EMPERORS } from './power/emperors'
import { WARLORDS } from './power/warlords'
import type { OnePieceVocabulary } from './records/saga'

/**
 * The bodies of power the power page lists, in its order (epic #1084), one
 * module each under `power/`.
 */
export const BODIES: PowerBody<OnePieceVocabulary>[] = [WARLORDS, EMPERORS]
