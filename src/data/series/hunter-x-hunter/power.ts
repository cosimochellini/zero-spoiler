import type { PowerBody } from '~/data/features'

import { HUNTER_ASSOCIATION } from './power/hunter-association'
import { PHANTOM_TROUPE } from './power/phantom-troupe'
import { TEN_DONS } from './power/ten-dons'
import { ZOLDYCK_FAMILY } from './power/zoldyck-family'
import type { HunterVocabulary } from './records/saga'

/**
 * The bodies of power the ranks page lists, in its order (epic #1441): the
 * Hunter Association (#1443), the Zoldyck family (#1444), the Phantom Troupe
 * (#1445), the Ten Dons (#1446) and the Chimera Ants (#1447). Each is filed
 * by its own issue, one module each under `power/`.
 */
export const BODIES: PowerBody<HunterVocabulary>[] = [
  HUNTER_ASSOCIATION,
  ZOLDYCK_FAMILY,
  PHANTOM_TROUPE,
  TEN_DONS,
]
