import type { Drawings } from '~/data/art/stroke'

export const CHIMERA_ANT_PLACE_DRAWINGS = {
  // The two hollow border trees, approached in chapter 188 and episode 79.
  ngl: [
    {
      d: 'M12 155 Q27 150 31 133 L37 80 Q20 77 19 65 Q7 60 15 46 Q14 34 29 28 Q32 16 47 22 Q56 13 67 23 Q81 25 81 39 Q93 48 85 61 Q81 74 62 79 L66 129 Q67 145 77 152',
    },
    {
      d: 'M84 152 Q99 146 101 130 L105 75 Q88 74 87 62 Q76 53 88 43 Q86 31 102 26 Q108 13 122 21 Q136 17 140 31 Q156 32 151 49 Q159 62 146 69 Q140 77 130 77 L132 127 Q135 146 150 154',
    },
    {
      d: 'M36 150 V127 Q36 115 47 114 Q58 115 58 127 V150 M106 150 V126 Q106 113 116 113 Q126 113 126 126 V150',
      role: 'accent',
    },
    { d: 'M64 90 Q83 94 103 87 M65 100 Q83 104 102 98' },
    {
      d: 'M42 81 L39 104 M58 85 L61 112 M112 83 L110 103 M124 83 L127 108',
      role: 'soft',
    },
    { d: 'M14 161 H149 M58 169 H113', role: 'ambient' },
  ],
} satisfies Drawings
