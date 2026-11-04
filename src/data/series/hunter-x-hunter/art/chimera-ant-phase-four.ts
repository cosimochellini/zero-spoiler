import { type Drawings, moved, type Redrawings } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

import { CHIMERA_ANT_ROYALS_DRAWINGS } from './chimera-ant-royals'

export const CHIMERA_ANT_PHASE_FOUR_DRAWINGS = {
  // The dark forewings described on Taragetter's Appearance page.
  taragetter: [
    {
      d: 'M76 39 C59 33 41 42 32 62 C23 83 24 119 30 146 C51 138 67 122 74 98 Z',
      role: 'accent',
    },
    {
      d: 'M84 39 C101 33 119 42 128 62 C137 83 136 119 130 146 C109 138 93 122 86 98 Z',
      role: 'accent',
    },
    { d: 'M70 47 C54 59 43 85 35 134 M90 47 C106 59 117 85 125 134' },
    {
      d: 'M62 62 L42 72 M54 79 L35 91 M47 99 L32 110 M98 62 L118 72 M106 79 L125 91 M113 99 L128 110',
      role: 'soft',
    },
    {
      d: 'M51 111 L43 120 M55 103 L50 116 M109 111 L117 120 M105 103 L110 116',
      role: 'ambient',
    },
    shadow(80, 153, 49),
  ],
} satisfies Drawings

export const chimeraAntPhaseFourRedrawn: Redrawings = {
  // Cheetu's shorts lie amid the rubble after Silva's strike, ch 278 / ep 117.
  cheetu: [
    {
      episode: 117,
      chapter: 278,
      value: [
        ...moved(
          CHIMERA_ANT_ROYALS_DRAWINGS.cheetu.slice(0, -1),
          'translate(80 121) rotate(-76) scale(0.67) translate(-80 -100)',
        ),
        {
          d: 'M12 145 L26 138 L34 145 M115 147 L126 137 L142 141 L150 149',
          role: 'soft',
        },
        {
          d: 'M9 152 H47 M101 153 H153 M53 155 L60 151 L67 154',
          role: 'ambient',
        },
      ],
    },
  ],
  // The Rose rises above the tomb when Netero detonates it, ch 298 / ep 126.
  netero: [
    {
      episode: 126,
      chapter: 298,
      value: [
        {
          d: 'M62 141 C75 124 71 104 65 91 C52 94 42 88 40 79 C26 77 25 62 34 54 C30 41 42 30 54 32 C62 17 79 19 86 28 C100 20 115 29 115 40 C129 41 136 54 130 65 C141 77 130 89 115 89 C108 96 101 96 95 91 C89 108 87 124 98 141',
          role: 'accent',
        },
        {
          d: 'M47 61 C58 47 72 56 76 65 C78 49 95 41 108 53 M54 77 C62 72 71 76 76 83 C82 73 93 74 100 79',
          role: 'soft',
        },
        {
          d: 'M80 103 C77 117 80 132 86 144 M71 145 C74 139 78 137 80 136',
          role: 'ambient',
        },
        {
          d: 'M10 156 L34 148 L52 154 L64 149 M96 149 L110 153 L129 146 L150 156',
          role: 'soft',
        },
        { d: 'M16 163 H52 M110 162 H144', role: 'ambient' },
        shadow(80, 165, 52),
      ],
    },
  ],
}
