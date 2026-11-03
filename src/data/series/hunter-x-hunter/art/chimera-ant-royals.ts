import type { Drawings, Redrawings } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

/** The King, the Royal Guards and the Squadron Leaders closest to the Queen (#1021). */
export const CHIMERA_ANT_ROYALS_DRAWINGS = {
  meruem: [
    {
      d: 'M43 111 Q43 63 80 60 Q117 63 117 111 L102 103 L93 122 H67 L58 103 Z',
    },
    { d: 'M52 95 Q80 77 108 95', role: 'accent' },
    { d: 'M67 122 Q72 145 80 148 Q88 145 93 122 M73 129 H87' },
    shadow(80, 169, 39),
  ],
  shaiapouf: [
    {
      d: 'M79 102 C46 49 23 50 26 84 Q30 107 65 117 C36 115 36 151 61 143 Q73 139 80 122',
    },
    {
      d: 'M81 102 C114 49 137 50 134 84 Q130 107 95 117 C124 115 124 151 99 143 Q87 139 80 122',
    },
    { d: 'M80 94 V134 M80 97 L72 83 M80 97 L88 83', role: 'accent' },
    shadow(80, 169, 42),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntRoyalsRedrawn: Redrawings = {}
