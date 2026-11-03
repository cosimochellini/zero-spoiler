import type { HunterSaga } from './saga'

/**
 * The people of NGL and Kite’s survey team in Chimera Ant phase 2 (#1021).
 * Spread into the Chimera Ant saga in `./chimera-ant`. Every gate is the
 * first chapter and episode whose English-wiki synopsis names the record
 * explicitly (owner ruling, #1021).
 */
export const CHIMERA_ANT_NGL: Pick<HunterSaga, 'dossiers' | 'entries'> = {
  dossiers: {},
  entries: [],
}
