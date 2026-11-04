import type { Drawings, Redrawings } from '~/data/art/stroke'
import { ellipse, shadow } from '~/lib/svg/primitives'

import { chimeraAntReturningRedrawn } from './chimera-ant-returning'
import { chimeraAntRoyalsRedrawn } from './chimera-ant-royals'

export const CHIMERA_ANT_PHASE_FIVE_DRAWINGS = {
  // The Panama hat he wears on the farm, chapter 315 and episode 135.
  'ming-jol-ik': [
    { d: 'M54 95 L59 57 Q76 44 100 55 L113 92' },
    { d: 'M59 57 Q79 70 100 55 M55 88 Q82 99 111 85', role: 'soft' },
    {
      d: 'M54 95 Q83 107 113 92 M55 88 L54 95 M111 85 L113 92',
      role: 'accent',
    },
    {
      d: 'M54 90 C27 94 16 106 30 119 C57 138 116 134 137 112 C144 102 130 94 113 90',
    },
    {
      d: 'M33 112 Q74 131 131 106 M67 60 L64 82 M101 65 L105 82',
      role: 'ambient',
    },
    shadow(81, 139, 49),
  ],
} satisfies Drawings

export const chimeraAntPhaseFiveRedrawn: Redrawings = {
  // Pitou's six-button coat at rest after the final blow, chapter 307 / episode 131.
  neferpitou: [
    {
      episode: 131,
      chapter: 307,
      value: [
        {
          d: 'M43 111 L55 84 L78 82 L101 84 L118 110 L102 119 L94 108 L94 143 Q76 151 54 142 L58 109 L51 120 Z',
          transform: 'rotate(-30 80 116)',
        },
        {
          d: 'M60 87 L73 106 L77 95 L86 106 L96 87 M76 100 L73 142',
          role: 'soft',
          transform: 'rotate(-30 80 116)',
        },
        {
          d: `${ellipse(68, 111, 2, 2)} ${ellipse(84, 111, 2, 2)} ${ellipse(67, 121, 2, 2)} ${ellipse(84, 121, 2, 2)} ${ellipse(66, 131, 2, 2)} ${ellipse(83, 131, 2, 2)}`,
          role: 'accent',
          transform: 'rotate(-30 80 116)',
        },
        {
          d: 'M16 151 L30 148 M118 151 L145 146 M29 161 H58 M102 160 H144',
          role: 'ambient',
        },
        shadow(80, 166, 48),
      ],
    },
  ],
  // The transport truck at the scene where Pouf finds him, chapter 310 and episode 133.
  menthuthuyoupi: [
    ...(chimeraAntRoyalsRedrawn['menthuthuyoupi'] ?? []),
    {
      episode: 133,
      chapter: 310,
      value: [
        { d: 'M20 80 H98 V130 H20 Z M98 98 H127 L145 118 V130 H98' },
        { d: 'M106 103 H124 L136 117 H106 Z', role: 'accent' },
        { d: ellipse(44, 134, 10, 10) },
        { d: ellipse(120, 134, 10, 10) },
        { d: 'M26 89 H92 M26 118 H92 M16 146 H149', role: 'ambient' },
        shadow(81, 153, 57),
      ],
    },
  ],
  // The cape blown away in episode 135, beside the crowd.
  shaiapouf: [
    {
      episode: 135,
      chapter: 314,
      source: 'episode',
      value: [
        {
          d: 'M35 111 Q57 82 77 99 Q103 109 127 82 L118 121 Q89 143 59 121 L30 135 Z',
          role: 'accent',
        },
        {
          d: 'M42 117 Q62 105 78 110 T112 107 M63 121 Q82 122 93 128',
          role: 'soft',
        },
        { d: 'M19 99 H46 M112 74 H145 M120 136 H149', role: 'ambient' },
        shadow(79, 150, 44),
      ],
    },
  ],
  // The board and final position, chapter 318 and episode 135.
  meruem: [
    {
      episode: 135,
      chapter: 318,
      value: [
        {
          d: 'M23 115 L79 81 L136 113 L80 149 Z M23 115 V123 L80 157 L136 121 V113 M80 149 V157',
        },
        {
          d: 'M38 106 L94 140 M53 97 L109 131 M66 89 L123 122 M37 124 L93 89 M52 132 L107 97 M66 141 L122 105',
          role: 'soft',
        },
        {
          d: 'M73 108 L83 103 L93 109 L90 118 L78 120 L70 114 Z',
          role: 'accent',
        },
        {
          d: 'M48 112 L56 108 L65 113 L63 119 L54 122 L46 117 Z M101 122 L109 117 L118 123 L115 129 L106 132 L99 127 Z',
        },
        shadow(79, 164, 48),
      ],
    },
  ],
  // The toy sword she plays with when she gives her name, chapter 316.
  kite: [
    ...(chimeraAntReturningRedrawn['kite'] ?? []),
    {
      episode: 136,
      chapter: 316,
      source: 'chapter',
      value: [
        {
          d: 'M48 124 L99 53 Q105 46 116 45 Q118 57 111 66 L61 134 Z',
          role: 'accent',
        },
        { d: 'M56 125 L105 56 M42 116 L71 137 L66 145 L37 124 Z' },
        {
          d: 'M49 131 L36 151 L43 156 L56 136 M36 151 L33 155 L41 161 L45 156',
          role: 'soft',
        },
        { d: 'M77 99 l9 -5 M91 80 l8 -5', role: 'ambient' },
        shadow(80, 169, 40),
      ],
    },
  ],
  // The dress worn when she returns to her village, chapter 315 and episode 136.
  reina: [
    {
      episode: 136,
      chapter: 315,
      value: [
        {
          d: 'M64 57 Q80 74 96 57 L114 76 L102 94 L96 90 L116 147 Q80 162 44 147 L64 90 L58 94 L46 76 Z',
        },
        { d: 'M64 92 Q80 100 96 92 M51 138 Q80 150 109 138', role: 'accent' },
        {
          d: 'M72 103 L64 137 M88 103 L96 137 M54 76 L62 82 M106 76 L98 82',
          role: 'soft',
        },
        { d: 'M103 123 l5 -5 M106 134 l6 -5', role: 'ambient' },
        shadow(80, 166, 41),
      ],
    },
  ],
}
