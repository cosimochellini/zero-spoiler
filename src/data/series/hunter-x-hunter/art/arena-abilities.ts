import type { Drawings } from '~/data/art/stroke'

export const ARENA_ABILITY_DRAWINGS: Drawings = {
  'battle-waltz': [
    {
      d: 'M52 106 Q74 80 95 106 Q77 128 52 106Z M73 115 L74 130 M73 95 L73 82',
    },
    {
      d: 'M94 142 Q112 124 130 142 Q112 156 94 142Z M113 149 L113 159',
      role: 'soft',
    },
    { d: 'M113 133 L113 123', role: 'ambient' },
    { d: 'M38 117 Q42 97 54 93 M95 155 Q121 168 139 144', role: 'accent' },
  ],
  'tornado-top': [
    { d: 'M73 63 L84 63 L85 127 L79 151 L75 128Z M66 64 L90 64 M74 71 L82 71' },
    { d: 'M36 116 C44 91 123 92 129 115 C131 133 79 146 47 133', role: 'soft' },
    { d: 'M33 130 C46 155 118 150 137 124', role: 'accent' },
    { d: 'M72 155 Q79 159 88 155', role: 'ambient' },
  ],
  'shotgun-blues': [
    {
      d: 'M53 78 Q64 63 76 78 Q64 92 53 78Z M64 83 L64 93 M92 110 Q104 95 116 110 Q104 124 92 110Z M104 116 L104 127',
    },
    { d: 'M62 145 Q74 130 89 145 Q75 160 62 145Z', role: 'soft' },
    { d: 'M75 151 L75 162', role: 'ambient' },
    { d: 'M28 83 L47 78 M31 120 L86 110 M36 155 L56 148', role: 'accent' },
  ],
  'tiger-bite-fist': [
    {
      d: 'M35 65 L60 66 Q69 65 78 81 L89 101 Q93 112 86 114 L74 101 Q77 115 72 115 L59 96 L38 98 M37 151 L58 148 Q68 148 75 133 L89 116',
    },
    { d: 'M61 76 L70 91 M56 82 L62 95 M62 138 L71 126', role: 'soft' },
    { d: 'M52 144 L61 132', role: 'ambient' },
    { d: 'M97 100 L118 90 M102 112 L130 112 M95 126 L119 138', role: 'accent' },
  ],
  'aura-burst': [
    {
      d: 'M86 67 L93 102 L120 102 L131 139 L142 139 M90 101 L81 137 L117 137 M84 65 L95 65',
    },
    { d: 'M98 140 A16 20 0 1 1 66 140 A16 20 0 1 1 98 140', role: 'soft' },
    { d: 'M142 144 A5 6 0 1 1 132 144 A5 6 0 1 1 142 144', role: 'ambient' },
    {
      d: 'M66 110 L35 101 L44 111 L20 116 L56 123 M58 136 L35 140',
      role: 'accent',
    },
  ],
  'nen-stitches': [
    {
      d: 'M31 125 Q63 99 80 99 L121 99 M30 151 Q64 126 81 125 L124 124 M75 99 L81 125',
    },
    { d: 'M74 102 L84 107 L75 111 L86 116 L78 121', role: 'soft' },
    { d: 'M114 99 Q126 106 129 121', role: 'ambient' },
    {
      d: 'M81 106 Q104 58 122 68 Q140 82 116 97 M85 107 Q107 84 124 90',
      role: 'accent',
    },
  ],
  'bungee-gum': [
    { d: 'M30 114 L53 83 L75 111 L52 142Z M93 93 L116 64 L137 92 L115 120Z' },
    { d: 'M38 116 L53 132', role: 'soft' },
    { d: 'M120 76 L130 91', role: 'ambient' },
    {
      d: 'M61 106 C70 75 92 140 106 100 M63 113 C73 84 93 148 110 104',
      role: 'accent',
    },
  ],
  'texture-surprise': [
    {
      d: 'M30 117 Q50 101 74 100 L122 99 Q138 102 137 118 Q135 132 121 134 L74 136 Q52 136 35 151',
    },
    { d: 'M73 99 L86 134 M77 103 L82 112', role: 'soft' },
    { d: 'M79 117 L86 126', role: 'ambient' },
    {
      d: 'M84 98 Q93 73 114 70 L129 76 Q110 82 121 99 M91 96 L106 94',
      role: 'accent',
    },
  ],
}
