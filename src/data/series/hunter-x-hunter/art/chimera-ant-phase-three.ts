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
  'pell': [
    {
      d: 'M33 102 Q48 69 80 70 Q112 69 127 102 Q120 130 80 147 Q40 130 33 102 Z',
      role: 'accent',
    },
    { d: 'M80 71 V145', role: 'soft' },
    { d: 'M39 103 L20 90', role: 'ambient' },
    { d: 'M121 103 L140 90', role: 'ambient' },
    shadow(80, 164, 43),
  ],
  'flutter': [
    {
      d: 'M80 107 Q38 37 16 57 Q16 92 80 107 Q144 92 144 57 Q122 37 80 107',
      role: 'accent',
    },
    {
      d: 'M80 107 Q40 100 37 127 Q56 145 80 107 Q104 145 123 127 Q120 100 80 107',
      role: 'soft',
    },
    { d: 'M80 95 V146', role: 'ambient' },
    shadow(80, 164, 43),
  ],
  'bihorn': [
    { d: 'M59 122 Q30 101 23 60 Q48 94 71 101', role: 'accent' },
    { d: 'M101 122 Q130 101 137 60 Q112 94 89 101', role: 'soft' },
    { d: 'M59 122 Q80 138 101 122', role: 'ambient' },
    shadow(80, 164, 43),
  ],
  'mandai-city': [
    { d: 'M18 145 V93 H48 V145', role: 'accent' },
    { d: 'M53 145 V69 H83 V145', role: 'soft' },
    { d: 'M89 145 V104 H139 V145', role: 'ambient' },
    { d: 'M62 82 H74', role: 'ambient' },
    { d: 'M62 96 H74', role: 'ambient' },
    { d: 'M100 119 H128', role: 'ambient' },
    shadow(80, 160, 54),
  ],
  'peijin': [
    { d: 'M12 145 H148', role: 'accent' },
    { d: 'M22 145 V112 H53 V145', role: 'soft' },
    { d: 'M57 145 V90 H108 V145', role: 'ambient' },
    { d: 'M57 90 L82 66 L108 90', role: 'ambient' },
    { d: 'M115 145 V108 H140 V145', role: 'ambient' },
    shadow(80, 160, 54),
  ],
  'meteor-city': [
    {
      d: 'M12 146 L32 117 L49 120 L65 91 L92 113 L113 84 L149 146 Z',
      role: 'accent',
    },
    { d: 'M24 140 H44', role: 'soft' },
    { d: 'M55 135 L74 112', role: 'ambient' },
    { d: 'M90 136 L112 107', role: 'ambient' },
    { d: 'M115 140 H138', role: 'ambient' },
    shadow(80, 160, 54),
  ],
} satisfies Drawings
