import type { PowerBody } from '~/data/features'

import type { HunterVocabulary } from './records/saga'

/**
 * The bodies of power the ranks page lists, in its order (epic #1441): the
 * Hunter Association (#1443), the Zoldyck family (#1444), the Phantom Troupe
 * (#1445), the Ten Dons (#1446) and the Chimera Ants (#1447). Each is filed
 * by its own issue, one module each under `power/`; until the first lands
 * the page has nothing to open.
 */
export const BODIES: PowerBody<HunterVocabulary>[] = []
