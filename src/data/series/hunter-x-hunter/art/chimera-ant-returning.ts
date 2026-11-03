import type { Drawings, Redrawings } from '~/data/art/stroke'

/** Records filed in earlier arcs whose drawing changes in Chimera Ant phase 2 (#1021): their stages only. */
export const CHIMERA_ANT_RETURNING_DRAWINGS = {} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntReturningRedrawn: Redrawings = {}
