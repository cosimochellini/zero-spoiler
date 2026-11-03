import type { HunterSaga } from './saga'

/**
 * The squad leaders and officers of the colony, Chimera Ant phase 2 (#1021).
 * Spread into the Chimera Ant saga in `./chimera-ant`. Every gate is the
 * first chapter and episode whose English-wiki synopsis names the record
 * explicitly (owner ruling, #1021).
 */
export const CHIMERA_ANT_SQUADS: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {},
  entries: [],
}
