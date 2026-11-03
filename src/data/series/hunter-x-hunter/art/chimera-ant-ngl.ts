import type { Drawings, Redrawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** The people of NGL and the survey team, Chimera Ant phase 2 (#1021). */
export const CHIMERA_ANT_NGL_DRAWINGS = {
  // Lin's plain dress shirt with its two buttons, tucked into his trousers,
  // as he introduces himself to Gon and Killua in chapter 186 and sits with
  // the team in episode 77. The buttons are the accent; the far side is
  // hatched.
  'lin-koshi': [
    {
      d: 'M62 58 L44 64 Q34 68 32 80 L28 132 L40 134 L46 94 L46 150 H114 L114 94 L120 134 L132 132 L128 80 Q126 68 116 64 L98 58',
    },
    { d: 'M62 58 L71 76 L80 64 L89 76 L98 58' },
    { d: 'M62 58 Q80 52 98 58', role: 'soft' },
    { d: 'M80 64 V150', role: 'soft' },
    { d: `${circle(80, 90, 2.6)} ${circle(80, 114, 2.6)}`, role: 'accent' },
    { d: 'M28 124 L40 126 M132 124 L120 126', role: 'soft' },
    { d: 'M46 94 Q44 80 46 70 M114 94 Q116 80 114 70', role: 'soft' },
    { d: 'M58 140 Q62 146 60 150 M100 140 Q98 146 100 150', role: 'soft' },
    { d: 'M46 150 V160 H114 V150' },
    { d: 'M64 160 L62 178 M96 160 L98 178 M80 160 V170', role: 'soft' },
    {
      d: 'M104 100 l8 -6 M104 116 l8 -6 M104 132 l8 -6 M122 92 l4 -3',
      role: 'ambient',
    },
    shadow(80, 184, 40),
  ],
  // Podungo's navy cape, open down the front and closed at the throat, its
  // white fur trim along the edges and the hem in tint, as she meets Gon
  // and Killua in chapter 186 and episode 77. The dark cape turns away
  // hatched on the far side; her matching trousers show below.
  'podungo-lapoy': [
    { d: 'M70 62 Q48 66 42 90 L30 144 M90 62 Q112 66 118 90 L130 144' },
    { d: 'M70 62 Q80 58 90 62 L82 72 H78 Z' },
    {
      d: 'M78 72 Q72.8 76.8 75.4 83.4 Q70.2 88.3 72.9 94.9 Q67.7 99.7 70.3 106.3 Q65.1 111.1 67.7 117.7 Q62.5 122.6 65.1 129.1 Q60 134 62.6 140.6 Q57.4 145.4 60 152',
      role: 'accent',
    },
    {
      d: 'M82 72 Q87.2 76.8 84.6 83.4 Q89.8 88.3 87.1 94.9 Q92.3 99.7 89.7 106.3 Q94.9 111.1 92.3 117.7 Q97.5 122.6 94.9 129.1 Q100 134 97.4 140.6 Q102.6 145.4 100 152',
      role: 'accent',
    },
    {
      d: 'M30 144 Q30.7 149.6 36.4 149 Q38.4 154.2 43.5 152 Q46.9 156.5 51.4 153 Q56.1 156.5 60 152 M100 152 Q103.9 156.5 108.6 153 Q113.1 156.5 116.5 152 Q121.6 154.2 123.6 149 Q129.3 149.6 130 144',
      role: 'accent',
    },
    { d: circle(80, 75, 2.4) },
    { d: 'M72 152 L70 176 H78 L80 154 M88 152 L90 176 H82' },
    { d: 'M50 96 Q44 120 42 146 M60 92 Q56 116 54 150', role: 'soft' },
    {
      d: 'M104 102 l8 -6 M106 116 l10 -8 M108 130 l12 -9 M112 142 l10 -7',
      role: 'ambient',
    },
    shadow(80, 182, 40),
  ],
  // The contract on Wong's desk, its corner turned up, and the pen beside
  // it: he hires Kite's team in episode 77. The sheet is the accent; no
  // lettering, only ruled lines. The desk's front face is hatched.
  'wong': [
    { d: 'M8 132 L42 96 H152 L130 132 Z', role: 'ambient' },
    { d: 'M8 132 V146 H130 V132 M130 146 L152 110 V96', role: 'ambient' },
    {
      d: 'M20 146 l6 -12 M44 146 l6 -12 M68 146 l6 -12 M92 146 l6 -12 M116 146 l6 -12',
      role: 'ambient',
    },
    { d: 'M38 124 L58 100 H112 L100 124 Z', role: 'accent' },
    { d: 'M100 124 L96 116 L104 116 Z', role: 'soft' },
    { d: 'M58 106 H102 M54 111 H98 M50 116 H86', role: 'soft' },
    { d: 'M72 120 Q76 116 80 119 Q84 115 88 118', role: 'soft' },
    { d: 'M112 90 L140 116 L136 120 L108 94 Z' },
    { d: 'M140 116 L146 124 L136 120 M108 94 L104 88 L112 90' },
    { d: 'M120 101 L124 97', role: 'soft' },
    shadow(80, 158, 66),
  ],
  // Kurt's dark vest seen from the back, the cross on it in tint, over the
  // long sleeves of his shirt: the boy who fights the ant soldier in
  // episode 77. The vest's far side is hatched.
  'kurt': [
    {
      d: 'M62 58 Q80 64 98 58 L110 66 Q104 86 110 102 L112 128 L80 134 L48 128 L50 102 Q56 86 50 66 Z',
    },
    { d: 'M62 58 Q80 50 98 58', role: 'soft' },
    { d: 'M80 82 V124 M64 98 H96', role: 'accent' },
    { d: 'M50 66 Q36 70 34 92 L30 140 H40 L48 104' },
    { d: 'M110 66 Q124 70 126 92 L130 140 H120 L112 104' },
    { d: 'M30 132 H40 M120 132 H130', role: 'soft' },
    { d: 'M50 102 Q56 108 54 120 M110 102 Q104 108 106 120', role: 'soft' },
    { d: 'M100 98 l8 -6 M100 112 l10 -8 M100 126 l8 -6', role: 'ambient' },
    { d: 'M50 128 L50 146 H110 L110 128' },
    { d: 'M50 140 H110', role: 'soft' },
    { d: 'M66 146 L64 164 M94 146 L96 164', role: 'soft' },
    shadow(80, 172, 40),
  ],
  // Reina's hair bow, the two loops in tint, as she walks home from the
  // river with her brother in chapter 187 and episode 77. The far loop
  // turns away hatched.
  'reina': [
    {
      d: 'M78 96 Q58 72 34 80 Q26 96 34 112 Q58 120 78 104 M86 96 Q104 70 126 78 Q134 96 126 114 Q104 120 86 104',
      role: 'accent',
    },
    { d: ellipse(82, 100, 7, 9) },
    { d: 'M78 92 Q82 96 86 92 M78 108 Q82 104 86 108', role: 'soft' },
    { d: 'M78 106 L62 146 L72 142 L76 150 L84 108' },
    { d: 'M88 106 L104 144 L94 140 L92 150 L84 108' },
    { d: 'M72 124 L80 126 M92 124 L86 126', role: 'soft' },
    { d: 'M40 92 Q56 94 72 98 M42 106 Q58 104 72 102', role: 'soft' },
    { d: 'M120 88 Q104 92 92 98 M120 106 Q104 104 92 102', role: 'soft' },
    { d: 'M112 84 l6 6 M118 96 l6 6 M114 110 l5 4', role: 'ambient' },
    shadow(82, 164, 34),
  ],
  // The bowl Haruna serves at dinner with her two children, episode 77,
  // the broth in tint and its steam rising, a spoon resting in it. The
  // side turning away is hatched.
  'haruna': [
    { d: ellipse(80, 104, 46, 14) },
    { d: ellipse(80, 106, 40, 10), role: 'accent' },
    { d: 'M34 104 Q38 142 80 146 Q122 142 126 104' },
    { d: 'M62 146 L64 154 H96 L98 146' },
    { d: 'M64 154 Q80 158 96 154', role: 'soft' },
    { d: 'M106 132 l8 -10 M96 140 l12 -14 M114 122 l6 -7', role: 'ambient' },
    { d: 'M98 110 L130 78', role: 'soft' },
    { d: 'M130 78 Q136 70 142 74 Q144 80 134 82 Z' },
    { d: 'M44 124 Q60 134 80 136', role: 'soft' },
    { d: 'M64 88 Q58 76 66 66 Q72 58 66 48', role: 'ambient' },
    { d: 'M88 86 Q82 74 92 64 Q98 56 92 46', role: 'ambient' },
    shadow(80, 164, 40),
  ],
  // Pekuba's pink-purple scarf, wound once and knotted over the collar of
  // his green shirt, its two tails hanging, as he rides into NGL with
  // Pokkle and Ponzu in episode 79. The wrap is the accent; its back turns
  // away hatched.
  'pekuba': [
    {
      d: 'M50 84 Q50 70 80 68 Q110 70 110 84 Q110 98 80 100 Q50 98 50 84 Z',
      role: 'accent',
    },
    { d: 'M54 78 Q80 86 106 78', role: 'soft' },
    { d: 'M58 76 l5 -5 M96 72 l5 -4 M84 70 l4 -3', role: 'ambient' },
    { d: ellipse(84, 100, 7, 5) },
    { d: 'M74 98 L68 112 L64 146 L78 148 L82 112 L84 100' },
    { d: 'M88 98 L94 114 L104 140 L116 134 L100 110 L94 98' },
    { d: 'M66 136 L78 138 M104 130 L114 126', role: 'soft' },
    { d: 'M72 112 L70 140 M98 114 L106 132', role: 'soft' },
    { d: 'M56 94 L48 108 L62 106 M104 94 L112 108 L98 106' },
    shadow(84, 162, 36),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntNglRedrawn: Redrawings = {
  pekuba: [
    // The same scarf slack on the ground, its knot loose and no one in it:
    // an ant kills him as the party turns to leave NGL, episode 80 (the
    // same scene, unnamed, in chapter 190). Anime-only, as his record.
    {
      episode: 80,
      chapter: 190,
      source: 'episode',
      value: [
        {
          d: 'M28 134 Q40 122 80 124 Q122 126 132 136 Q120 146 80 146 Q40 146 28 134 Z',
          role: 'accent',
        },
        { d: 'M40 130 Q80 138 120 130', role: 'soft' },
        { d: 'M44 128 l5 -4 M110 128 l5 -4', role: 'ambient' },
        { d: ellipse(80, 146, 7, 4) },
        { d: 'M86 146 L96 154 L136 158 L138 148 L102 144' },
        { d: 'M74 146 L62 156 L22 162 L20 152 L56 144' },
        { d: 'M126 152 L134 152 M30 154 L22 156', role: 'soft' },
        { d: 'M4 168 H156', role: 'ambient', dashed: true },
        shadow(80, 176, 64),
      ],
    },
  ],
}
