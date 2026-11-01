import type { Drawings, Redrawings, Stroke } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

/**
 * Puhat's open suit jacket, without a shirt, at the tryouts in chapter 125
 * / episode 60. Its broad lapels stay plain; the pocket trims are in tint.
 */
const PUHAT_JACKET: Stroke[] = [
  {
    d: 'M62 48 L40 60 L26 128 L42 134 L54 88 L50 166 H112 L108 88 L124 134 L140 128 L126 60 L102 48',
  },
  { d: 'M62 48 L72 66 L60 82 L76 102 L80 158', role: 'soft' },
  { d: 'M102 48 L92 66 L104 82 L86 102 L80 158', role: 'soft' },
  { d: 'M62 48 Q82 36 102 48 M72 66 Q82 58 92 66', role: 'soft' },
  { d: 'M50 166 L58 172 H118 L112 166 M118 172 L114 108', role: 'soft' },
  { d: 'M54 118 L68 120 M94 120 L108 118', role: 'accent' },
  { d: 'M28 120 L44 126 M122 126 L138 120', role: 'soft' },
  { d: 'M58 142 Q64 146 70 142 M92 144 Q100 148 108 140', role: 'soft' },
  {
    d: 'M114 126 l5 -3 M114 138 l4 -2 M114 150 l4 -2 M114 162 l4 -2',
    role: 'ambient',
  },
  {
    d: 'M36 102 l5 -3 M34 114 l5 -3 M130 102 l5 -3 M132 114 l5 -3',
    role: 'ambient',
  },
  shadow(82, 186, 51),
]

export const GREED_ISLAND_DRAWINGS = {
  // Battera's bow tie and the rose pinned to his suit, chapter 120 /
  // episode 59. Two bent ribbon wings give the tie a far face.
  battera: [
    { d: 'M72 94 L36 76 L32 116 L72 106 M88 94 L126 76 L130 116 L88 106' },
    { d: 'M36 76 L41 70 L74 88 M126 76 L121 70 L86 88', role: 'soft' },
    { d: 'M72 90 Q80 86 88 90 L88 110 Q80 114 72 110 Z' },
    { d: 'M42 86 L65 98 L42 108 M120 86 L96 98 L120 108', role: 'soft' },
    {
      d: 'M42 88 l6 -4 M42 98 l6 -4 M116 90 l5 -3 M118 100 l5 -3',
      role: 'ambient',
    },
    {
      d: 'M78 148 C64 143 65 128 76 124 C72 112 90 106 98 116 C112 108 122 122 114 132 C122 144 104 154 94 146 C88 154 82 153 78 148',
      role: 'accent',
    },
    {
      d: 'M78 126 Q96 117 108 130 Q104 146 90 140 Q78 138 84 130 Q90 124 100 132',
      role: 'soft',
    },
    { d: 'M92 150 Q90 165 82 176', role: 'soft' },
    { d: 'M88 164 Q102 150 112 157 Q102 171 88 164', role: 'soft' },
    { d: 'M88 164 L104 159', role: 'soft' },
    shadow(81, 186, 43),
  ],
  // Tsezguerra's flight-style suit, chapter 121 / episode 59: the collar,
  // front zip and pair of pockets, with the turned right side hatched.
  tsezguerra: [
    {
      d: 'M64 40 L42 52 L26 122 L42 128 L54 86 L52 144 L60 178 H78 L82 150 L86 178 H104 L112 144 L110 86 L122 128 L138 122 L122 52 L100 40',
    },
    { d: 'M64 40 Q82 30 100 40 L94 58 L82 50 L70 58 Z', role: 'accent' },
    { d: 'M82 50 V144 M78 60 V130', role: 'soft' },
    { d: 'M56 70 H72 V92 H54 M92 70 H108 L110 92 H92 Z', role: 'soft' },
    { d: 'M56 76 H72 M92 76 H108', role: 'soft' },
    { d: 'M54 110 L70 114 M94 114 L110 110', role: 'soft' },
    { d: 'M52 138 H112 M62 144 H76 M88 144 H102', role: 'soft' },
    { d: 'M28 114 L44 120 M120 120 L136 114', role: 'soft' },
    { d: 'M64 156 V170 M96 156 V170', role: 'soft' },
    {
      d: 'M111 94 l4 -3 M112 106 l5 -3 M112 118 l5 -3 M112 130 l5 -3',
      role: 'ambient',
    },
    { d: 'M102 152 l5 -3 M100 164 l5 -3 M98 176 l5 -3', role: 'ambient' },
    shadow(82, 188, 48),
  ],
  puhat: PUHAT_JACKET,
} satisfies Drawings

export const greedIslandRedrawn: Redrawings = {
  puhat: [
    {
      episode: 64,
      chapter: 143,
      // The same jacket folded flat after his death; no invented grave or
      // injury on the object. The wiki's episode 64 synopsis shows the death.
      value: [
        { d: 'M32 114 L111 102 L134 126 L55 141 Z' },
        { d: 'M55 141 V153 L134 138 V126 M32 114 V126 L55 153' },
        { d: 'M50 111 L66 124 L79 120 L88 134', role: 'soft' },
        { d: 'M98 105 L89 120 L80 119', role: 'soft' },
        { d: 'M34 124 L54 143 L132 129', role: 'soft' },
        { d: 'M65 137 L77 135 M100 130 L114 127', role: 'accent' },
        {
          d: 'M58 146 l5 -3 M74 143 l5 -3 M90 140 l5 -3 M106 137 l5 -3 M122 134 l5 -3',
          role: 'ambient',
        },
        { d: 'M38 120 l4 -2 M44 126 l4 -2 M49 132 l4 -2', role: 'ambient' },
        shadow(83, 173, 55),
      ],
    },
  ],
}
