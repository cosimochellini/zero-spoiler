import type { Drawings } from '~/data/art/stroke'
import { ellipse, shadow } from '~/lib/svg/primitives'

export const CHIMERA_ANT_PHASE_THREE_DRAWINGS = {
  // A street between rows of buildings, seen from the road.
  'luonton-city': [
    {
      d: 'M12 146 V57 L47 70 V132 M47 132 V83 L65 92 V123 M148 146 V62 L110 74 V132 M110 132 V85 L94 93 V123',
    },
    {
      d: 'M12 146 L72 115 H88 L148 146 M52 160 L76 124 M108 160 L84 124',
      role: 'accent',
    },
    {
      d: 'M22 72 L37 77 V89 L22 84 Z M22 95 L37 99 V111 L22 107 Z M122 84 L137 79 V91 L122 96 Z',
      role: 'soft',
    },
    shadow(80, 170, 56),
  ],
  // A gungi piece on the corner of the board.
  'komugi': [
    {
      d: 'M17 116 L105 89 L144 119 L54 148 Z M17 116 V124 L54 156 L144 127 V119',
    },
    {
      d: 'M36 110 L73 142 M59 103 L97 134 M82 96 L120 126 M31 128 L119 100 M43 138 L132 110',
      role: 'soft',
    },
    {
      d: 'M63 105 L68 82 L82 72 L96 82 L101 105 Z M63 105 V111 H101 V105',
      role: 'accent',
    },
    shadow(82, 166, 55),
  ],
  // The pin Remora attaches, with the head turned toward the viewer.
  'remora': [
    { d: 'M67 80 L104 153 L111 160 L110 149 L78 75' },
    { d: ellipse(65, 68, 23, 13), role: 'accent' },
    { d: 'M42 68 V75 C44 91 87 89 88 73 V68' },
    { d: 'M49 65 Q57 58 75 61 M52 80 L56 85 M63 81 L67 87', role: 'soft' },
    shadow(100, 173, 23),
  ],
  // A television screen for the officer’s interview.
  'tsukuma': [
    {
      d: 'M22 56 H130 L140 65 V142 H22 Z M130 56 V142 M22 142 L31 150 H140 V142',
    },
    { d: 'M32 66 H119 V130 H32 Z', role: 'accent' },
    { d: 'M41 112 H108 M41 120 H89 M53 56 L44 39 M53 56 L73 34', role: 'soft' },
    shadow(82, 164, 56),
  ],
} satisfies Drawings
