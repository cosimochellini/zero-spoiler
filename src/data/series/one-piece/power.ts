import type { PowerBody } from '~/data/features'

import { BEASTS_PIRATES } from './power/beasts-pirates'
import { BIG_MOM_PIRATES } from './power/big-mom-pirates'
import { BLACKBEARD_PIRATES } from './power/blackbeard-pirates'
import { CP9 } from './power/cp9'
import { CROSS_GUILD } from './power/cross-guild'
import { EMPERORS } from './power/emperors'
import { FIVE_ELDERS } from './power/five-elders'
import { MARINES } from './power/marines'
import { RED_HAIR_PIRATES } from './power/red-hair-pirates'
import { STRAW_HAT_PIRATES } from './power/straw-hat-pirates'
import { WARLORDS } from './power/warlords'
import { WHITEBEARD_PIRATES } from './power/whitebeard-pirates'
import { WORLD_GOVERNMENT } from './power/world-government'
import type { OnePieceVocabulary } from './records/saga'

/**
 * The bodies of power the power page lists, in its order (epic #1084): the
 * World Government and the Five Elders, the Marines, the Warlords, Cipher
 * Pol, the Emperors and their crews, the Revolutionary Army, the Supernovae.
 * Each is filed by its own issue (#1087 to #1094), one module each under
 * `power/`.
 */
export const BODIES: PowerBody<OnePieceVocabulary>[] = [
  WORLD_GOVERNMENT,
  FIVE_ELDERS,
  MARINES,
  WARLORDS,
  CP9,
  EMPERORS,
  RED_HAIR_PIRATES,
  STRAW_HAT_PIRATES,
  WHITEBEARD_PIRATES,
  BLACKBEARD_PIRATES,
  BIG_MOM_PIRATES,
  BEASTS_PIRATES,
  CROSS_GUILD,
]
