import type { Drawings, Redrawings } from '~/data/art/stroke'
import { ellipse, shadow } from '~/lib/svg/primitives'

/** The Hunters of Chimera Ant phase 2 (#1021). */
export const CHIMERA_ANT_HUNTERS_DRAWINGS = {
  'palm-siberia': [
    { d: 'M45 89 Q49 130 58 143 Q79 155 102 143 Q111 124 115 89' },
    { d: ellipse(80, 89, 35, 11), role: 'accent' },
    { d: 'M114 101 Q144 91 138 116 Q133 132 108 132' },
    { d: 'M66 66 Q58 54 67 44 M87 66 Q79 55 89 43', role: 'ambient' },
    shadow(80, 169, 42),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntHuntersRedrawn: Redrawings = {}
