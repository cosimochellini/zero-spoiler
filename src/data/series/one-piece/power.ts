import type { PowerBody } from '~/data/features'

import { CP9 } from './power/cp9'
import { FIVE_ELDERS } from './power/five-elders'
import { WORLD_GOVERNMENT } from './power/world-government'
import type { OnePieceVocabulary } from './records/saga'

/**
 * The bodies of power the power page lists, in its order (epic #1084): the
 * World Government and the Five Elders, the Marines, the Warlords, Cipher
 * Pol, the Emperors and their crews, the Revolutionary Army, the Supernovae.
 * Each is filed by its own issue (#1087 to #1094), one file per body in
 * `./power`.
 */
export const BODIES: PowerBody<OnePieceVocabulary>[] = [
  WORLD_GOVERNMENT,
  FIVE_ELDERS,
  CP9,
]
