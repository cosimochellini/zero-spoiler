import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { COLT_FLAG } from './chimera-ant-royals'

/**
 * Kurt's dark blue vest seen from the back in 3/4, standing as if worn
 * over the long sleeves of his shirt: the cross on its back in tint, the
 * far side and its sleeve turning away hatched. Both his drawings keep it.
 */
const KURT_VEST: Stroke[] = [
  {
    d: 'M60 58 Q78 64 94 58 L104 66 Q99 86 104 102 L106 128 L78 134 L48 128 L50 102 Q56 86 50 66 Z',
  },
  { d: 'M60 58 Q78 50 94 58', role: 'soft' },
  { d: 'M77 82 V124 M62 98 H92', role: 'accent' },
  { d: 'M50 66 Q34 70 32 92 L28 140 H40 L48 104' },
  { d: 'M104 66 Q116 70 118 92 L120 138 H112 L106 104' },
  { d: 'M28 132 H40 M112 130 H120', role: 'soft' },
  { d: 'M50 102 Q56 108 54 120', role: 'soft' },
  {
    d: 'M94 96 l7 -5 M94 110 l8 -6 M94 124 l8 -6 M110 100 l6 -4 M111 116 l6 -4',
    role: 'ambient',
  },
  { d: 'M48 128 L50 146 H104 L106 128' },
  { d: 'M50 140 H104 M64 146 L62 164 M90 146 L92 164', role: 'soft' },
]

/** Kurt's fishing rod standing beside his vest, its line hanging slack. */
const KURT_ROD: Stroke[] = [
  { d: 'M124 172 L150 22' },
  { d: 'M150 22 Q158 70 148 110', role: 'soft' },
  { d: 'M121 170 L127 140 M126 172 L131 141', role: 'soft' },
]

/** The people of NGL and the survey team, Chimera Ant phase 2 (#1021). */
export const CHIMERA_ANT_NGL_DRAWINGS = {
  // Lin's plain two-button dress shirt in 3/4, tucked into his dress
  // trousers, the far side turning away hatched and the buttons in tint, as
  // he introduces himself to Gon and Killua in chapter 186 and sits with the
  // team in episode 77.
  'lin-koshi': [
    { d: 'M64 56 L44 62 Q34 66 32 78 L26 132 L40 135 L46 94 L46 150 H92' },
    {
      d: 'M98 56 L114 62 Q122 66 124 78 L128 128 L118 130 L112 94 L112 146 L92 150',
    },
    { d: 'M64 56 L74 74 L84 62 L92 72 L98 56' },
    { d: 'M64 56 Q82 50 98 56', role: 'soft' },
    { d: 'M84 62 L88 150', role: 'soft' },
    { d: `${circle(85, 90, 2.6)} ${circle(86, 114, 2.6)}`, role: 'accent' },
    { d: 'M26 124 L40 127 M46 94 Q44 80 46 70', role: 'soft' },
    { d: 'M58 140 Q62 146 60 150', role: 'soft' },
    { d: 'M46 150 V160 H112 V146' },
    { d: 'M62 160 L60 180 M100 160 L102 180 M86 160 V172', role: 'soft' },
    {
      d: 'M96 100 l9 -7 M96 116 l9 -7 M96 132 l9 -7 M114 90 l6 -4 M116 106 l6 -4',
      role: 'ambient',
    },
    shadow(80, 186, 40),
  ],
  // Podungo's navy cape in 3/4, open down the front and closed at the
  // throat, its white fur trim along the edges and the hem in tint, the near
  // edge turned back to show the cloth's thickness, as she meets Gon and
  // Killua in chapter 186 and episode 77. The dark cape turns away hatched
  // on the far side; her matching trousers show below.
  'podungo-lapoy': [
    { d: 'M78 62 Q50 66 42 92 L28 146 M92 62 Q108 66 114 90 L124 142' },
    { d: 'M78 62 Q85 58 92 62 L87 72 H83 Z' },
    {
      d: 'M83 72 Q77 75.9 80.8 82 Q74.7 85.9 78.5 92 Q72.5 95.9 76.2 102 Q70.2 105.9 74 112 Q68 115.9 71.8 122 Q65.7 125.9 69.5 132 Q63.5 135.9 67.2 142 Q61.2 145.9 65 152 M87 72 Q92.8 76 88.8 81.8 Q94.5 85.7 90.5 91.5 Q96.3 95.5 92.2 101.2 Q98 105.2 94 111 Q99.8 115 95.8 120.8 Q101.5 124.7 97.5 130.5 Q103.3 134.5 99.2 140.2 Q105 144.2 101 150 M28 146 Q33.2 142.8 37 147.5 Q42.2 144.3 46 149 Q51.2 145.8 55 150.5 Q60.2 147.3 65 152 M101 150 Q103.7 144.9 109 147.3 Q111.7 142.2 117 144.7 Q119.7 139.5 124 142',
      role: 'accent',
    },
    { d: 'M71 120 L56 136 L62 150', role: 'soft' },
    { d: circle(85, 76, 2.4) },
    { d: 'M74 152 L72 176 H80 L82 154 M90 151 L92 174 H84' },
    { d: 'M50 98 Q44 120 40 146 M60 92 Q56 112 54 132', role: 'soft' },
    {
      d: 'M100 100 l8 -6 M102 114 l10 -8 M106 128 l10 -8 M110 140 l8 -6',
      role: 'ambient',
    },
    shadow(80, 182, 44),
  ],
  // The contract Wong has Kite sign, lying in 3/4 at the edge of his desk
  // with its corner turned up and the pen beside it: he hires Kite's team in
  // episode 77. The sheet is the accent; no lettering, only ruled lines and
  // a signature's squiggle. The underside of the turned corner is hatched.
  'wong': [
    { d: 'M18 146 L48 66 H138 L122 146 Z', role: 'accent' },
    { d: 'M98 146 L108 122 L126 126', role: 'soft' },
    { d: 'M104 142 l4 -6 M110 140 l4 -6 M116 138 l3 -5', role: 'ambient' },
    {
      d: 'M54 80 H128 M50 92 H124 M46 104 H120 M42 116 H118 M38 128 H72',
      role: 'soft',
    },
    { d: 'M66 136 Q70 128 74 133 Q78 125 84 131 Q88 126 92 130', role: 'soft' },
    { d: 'M122 56 L150 90 L145 94 L117 60 Z' },
    { d: 'M150 90 L154 100 L145 94 M117 60 L114 52 L122 56' },
    { d: 'M130 70 L134 66', role: 'soft' },
    { d: 'M4 154 H156 M4 160 H156', role: 'ambient' },
    {
      d: 'M24 160 l6 -6 M52 160 l6 -6 M80 160 l6 -6 M108 160 l6 -6 M136 160 l6 -6',
      role: 'ambient',
    },
  ],
  // Kurt's dark blue vest in 3/4, seen from the back and standing as worn
  // over the long sleeves of his shirt, the cross on its back in tint and
  // the far side hatched, with his fishing rod beside it: the rod he tries
  // to fight the ant soldier off with in episode 77. His death in that
  // episode stays out of the drawing.
  'kurt': [...KURT_VEST, ...KURT_ROD, shadow(84, 172, 48)],
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
  // Haruna's bowl of broth, the broth in tint and its steam rising, the
  // foot ring below and the side turning away hatched: the family has
  // dinner at home in episode 77, and in episode 78 she sets the same broth
  // out in bowls on their table. No spoon.
  'haruna': [
    { d: ellipse(80, 104, 46, 14) },
    { d: ellipse(80, 106, 40, 10), role: 'accent' },
    { d: 'M34 104 Q38 142 80 146 Q122 142 126 104' },
    { d: 'M62 146 L64 154 H96 L98 146' },
    { d: 'M64 154 Q80 158 96 154', role: 'soft' },
    { d: 'M106 132 l8 -10 M96 140 l12 -14 M114 122 l6 -7', role: 'ambient' },
    { d: 'M44 124 Q60 134 80 136', role: 'soft' },
    { d: 'M60 110 Q80 116 100 110', role: 'soft' },
    { d: 'M64 88 Q58 76 66 66 Q72 58 66 48', role: 'ambient' },
    { d: 'M88 86 Q82 74 92 64 Q98 56 92 46', role: 'ambient' },
    shadow(80, 164, 40),
  ],
  // Pekuba's pink-purple scarf in 3/4, wound twice and knotted over the
  // collar of his green shirt, its two tails hanging, as he rides into NGL
  // with Pokkle and Ponzu in episode 79. The near turn is the accent; the
  // far turn rises behind it, hatched.
  'pekuba': [
    { d: 'M48 84 Q80 94 112 84 V98 Q80 110 48 98 Z', role: 'accent' },
    { d: 'M48 84 Q50 66 80 64 Q110 66 112 84' },
    { d: 'M54 82 Q56 72 80 71 Q104 72 106 82', role: 'soft' },
    {
      d: 'M58 78 l5 -5 M70 74 l5 -4 M90 74 l5 -4 M100 78 l5 -5',
      role: 'ambient',
    },
    { d: 'M56 92 Q80 100 104 92', role: 'soft' },
    { d: ellipse(88, 106, 11, 8) },
    { d: 'M78 112 L68 124 L62 152 L78 154 L84 118' },
    { d: 'M96 112 L104 124 L114 148 L126 142 L106 116' },
    {
      d: 'M64 142 L78 144 M110 138 L122 134 M72 126 L70 146 M104 124 L114 140',
      role: 'soft',
    },
    { d: 'M52 100 L44 114 L60 112 M108 100 L116 114 L100 112' },
    shadow(84, 166, 40),
  ],
  // Balda's white short-sleeved shirt, the sleeves seen open at the elbow
  // and the light blue long sleeves underneath in tint, down to the cuffs,
  // the far side hatched: one of Pokkle's companions, named as Pokkle tells
  // him to run in chapter 190 and episode 80, the scene he dies in (#1046).
  // No figure and no web.
  'balda': [
    {
      d: 'M58 50 L38 58 L28 96 M48 102 L50 82 L50 150 H110 L110 82 L112 102 M132 96 L122 58 L102 50',
    },
    { d: 'M28 96 A10.4 4 15 1 0 48 102 A10.4 4 15 1 0 28 96' },
    { d: 'M132 96 A10.4 4 -15 1 1 112 102 A10.4 4 -15 1 1 132 96' },
    {
      d: 'M31 100 L24 144 H38 L45 102 M129 100 L136 144 H122 L115 102',
      role: 'accent',
    },
    { d: 'M25 138 H38 M122 138 H135', role: 'soft' },
    { d: 'M58 50 L68 68 L80 58 L92 68 L102 50 Q80 60 58 50' },
    { d: 'M80 60 V150', role: 'soft' },
    {
      d: dots([
        [85, 82],
        [85, 102],
        [85, 122],
      ]),
    },
    { d: 'M60 112 Q63 130 59 146', role: 'soft' },
    { d: 'M98 110 l7 -5 M98 124 l7 -5 M98 138 l7 -5', role: 'ambient' },
    shadow(80, 166, 56),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntNglRedrawn: Redrawings = {
  kurt: [
    // Back as Colt: his vest, its cross still in tint, beside the white flag
    // Colt carries. Holding the Queen's newborn, Colt thinks back to his
    // mother and sister, and an ant explains he still remembers his human
    // life, episode 92 (chapter 215). Anime-only, as his record.
    {
      episode: 92,
      chapter: 215,
      source: 'episode',
      value: [
        ...moved(KURT_VEST, 'translate(-12 18) scale(0.82)'),
        ...moved(softened(COLT_FLAG), 'translate(52 36) scale(0.72)'),
        { d: 'M4 166 H156', role: 'ambient' },
        shadow(84, 172, 54),
      ],
    },
  ],
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
