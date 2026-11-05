import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Morel's pince-nez sunglasses lying on a table, seen from above: the two
 * dark lenses hatched inside their rims, the rims' thickness, the sprung
 * bridge with its coil and the two nose pads. `rims` is the role of the
 * rims, the accent until the pipe takes it.
 */
const morelPinceNez = (rims?: 'accent'): Stroke[] => [
  {
    d: `${ellipse(50, 120, 34, 16)} ${ellipse(118, 110, 26, 12)}`,
    ...(rims !== undefined && { role: rims }),
  },
  { d: 'M16 122 Q50 142 84 122 M92 112 Q118 128 144 112', role: 'soft' },
  {
    d: `${ellipse(50, 119, 28, 12)} ${ellipse(118, 109, 21, 9)}`,
    role: 'soft',
  },
  { d: 'M83 114 C84 94 92 92 93 106' },
  { d: 'M84 104 q4 -3 8 0 M85 99 q3 -3 6 0', role: 'soft' },
  { d: `${ellipse(80, 124, 3, 5)} ${ellipse(97, 113, 3, 5)}`, role: 'soft' },
  {
    d: 'M30 128 L44 112 M38 132 L56 113 M50 133 L68 115 M62 131 L74 119 M104 114 L114 104 M110 118 L124 104 M122 118 L132 108',
    role: 'ambient',
  },
  { d: 'M30 114 Q36 110 42 110 M106 104 Q110 102 114 102', role: 'soft' },
  shadow(80, 148, 66),
]

/**
 * Gyro's pistol lying on its side, the slide's top face catching the light
 * and the dark grip hatched: one of the guns NGL's men carried.
 */
const GYRO_PISTOL: Stroke[] = [
  { d: 'M28 96 H122 L124 112 H28 Z', role: 'accent' },
  { d: 'M28 96 L34 90 H126 L122 96 M126 90 L128 106 L124 112' },
  { d: 'M98 112 L94 120 L104 160 H126 L122 112' },
  { d: 'M76 112 Q76 132 92 132 L98 124' },
  {
    d: 'M86 114 Q84 122 88 126 M108 98 V110 M112 98 V110 M116 98 V110',
    role: 'soft',
  },
  { d: 'M102 130 l14 -6 M104 142 l14 -6 M106 154 l14 -6', role: 'ambient' },
  { d: 'M28 104 h0.01', role: 'soft' },
  shadow(80, 170, 56),
]

/** The Hunters of Chimera Ant phase 2 (#1021). */
export const CHIMERA_ANT_HUNTERS_DRAWINGS = {
  // A cup on its saucer, overflowing in tint down its side and onto the
  // saucer, the far side hatched: Palm's Nen makes her cup overflow when she
  // names Knuckle and Shoot to Gon and Killua, episode 86 / chapter 200. No
  // hair and no knife.
  'palm-siberia': [
    { d: ellipse(80, 150, 50, 10) },
    { d: ellipse(80, 148, 30, 5), role: 'soft' },
    { d: 'M50 88 Q51 126 62 140 Q80 152 98 140 Q109 126 110 88' },
    { d: ellipse(80, 88, 30, 8) },
    { d: 'M109 98 C136 92 138 126 104 132' },
    {
      d: 'M108 106 C126 104 126 122 106 124 M66 146 Q80 151 94 146',
      role: 'soft',
    },
    {
      d: 'M54 88 Q80 78 106 88 M58 94 Q56 108 60 116 Q64 122 66 114 Q65 104 67 95 M84 96 Q86 112 83 128 Q84 136 88 130 Q90 118 90 96 M38 152 Q50 160 68 158',
      role: 'accent',
    },
    { d: 'M100 104 l6 -5 M99 116 l6 -5 M95 128 l6 -5', role: 'ambient' },
    shadow(80, 166, 52),
  ],
  // The front of a black suit jacket, buttoned, with the white shirt's
  // collar and the blue tie in tint between the lapels, the dark cloth
  // hatched: "the man in the black suit" beside Netero, whom Palm names as
  // her teacher in episode 86 / chapter 200. No glasses or face.
  'knov': [
    {
      d: 'M62 36 L30 48 L16 122 L30 126 L36 84 L38 150 H122 L124 84 L130 126 L144 122 L130 48 L98 36',
    },
    { d: 'M62 36 L68 62 L58 70 L80 122 L102 70 L92 62 L98 36' },
    { d: 'M80 122 L77 150' },
    { d: 'M66 36 L72 50 L80 42 L88 50 L94 36 Q80 42 66 36' },
    {
      d: 'M76 46 L84 46 L82 54 L78 54 Z M78 54 L74 100 L80 108 L86 100 L82 54',
      role: 'accent',
    },
    {
      d: `${dots([
        [80, 128],
        [79, 140],
      ])} M104 86 H120`,
      role: 'soft',
    },
    { d: 'M18 114 L31 118 M142 114 L129 118', role: 'soft' },
    {
      d: 'M40 100 l8 -7 M40 116 l8 -7 M40 132 l8 -7 M112 100 l8 -7 M112 116 l8 -7 M112 132 l8 -7',
      role: 'ambient',
    },
    {
      d: 'M62 80 l5 -5 M66 92 l5 -5 M93 92 l5 -5 M97 80 l5 -5',
      role: 'ambient',
    },
    shadow(80, 160, 62),
  ],
  // Morel's pince-nez sunglasses lying on a table, the rims in tint: the
  // dark glasses he wears when he arrives with Netero and talks down to
  // Killua, chapter 199 / episode 85. His pipe comes in chapter 202, so it
  // is a later stage.
  'morel-mackernasey': morelPinceNez('accent'),
  // Knuckle's half of the split wooden tile, standing, its broken edge in
  // tint and its side faces hatched, with the matching half behind it,
  // plain: he and Shoot must keep their halves for a month against Gon and
  // Killua, episode 86 / chapter 200. No marking is drawn on the wood.
  'knuckle-bine': [
    { d: 'M80 30 L44 58 L36 150 H80' },
    {
      d: 'M80 30 L84 42 L78 54 L85 68 L79 82 L86 96 L80 110 L85 124 L79 138 L80 150',
      role: 'accent',
    },
    { d: 'M80 30 L70 24 L32 52 L22 144 L36 150 M44 58 L32 52' },
    { d: 'M64 32 l-5 8 M54 39 l-5 8 M44 46 l-5 8', role: 'ambient' },
    {
      d: 'M28 72 l8 -4 M27 92 l8 -4 M26 112 l8 -4 M25 132 l8 -4',
      role: 'ambient',
    },
    { d: 'M54 70 Q62 100 55 142 M66 60 Q72 98 67 146', role: 'soft' },
    { d: 'M108 52 L134 72 L140 142 H108' },
    {
      d: 'M108 52 L111 62 L106 72 L112 84 L107 96 L113 108 L108 120 L112 132 L107 142',
      role: 'soft',
    },
    { d: 'M122 80 Q126 108 122 136', role: 'soft' },
    shadow(60, 160, 40),
    shadow(124, 150, 22),
  ],
  // Shoot's robe from the front, the bandages wrapped in the V of its
  // crossed collar and a rope at the hip, and its large left sleeve in tint
  // hanging empty, the inside hatched: the arm he does not have, episode 86
  // / chapter 200. The floating hands and the cage are his Nen, shown in
  // chapter 211.
  'shoot-mcmahon': [
    {
      d: 'M64 36 L36 50 L20 66 L14 120 L32 122 L40 86 L42 152 H114 L116 52 L96 36',
    },
    {
      d: 'M116 52 C138 56 148 78 146 106 C144 132 150 150 142 170 C130 176 118 170 114 156 L116 100',
      role: 'accent',
    },
    { d: 'M124 70 C132 96 128 130 132 160', role: 'soft' },
    { d: 'M120 152 l6 -6 M128 157 l6 -6 M136 161 l5 -5', role: 'ambient' },
    { d: 'M64 36 L96 108 M96 36 L80 72' },
    { d: 'M72 46 H88 M74 54 H86 M77 62 H83', role: 'soft' },
    { d: 'M42 108 Q78 116 114 108 M42 114 Q78 122 114 114' },
    { d: 'M70 119 L66 140 M75 120 L77 138 M50 128 l4 18', role: 'soft' },
    shadow(80, 182, 56),
  ],
  // A pistol lying on its side with two cartridges standing beside it, the
  // slide in tint: the gunmen who shoot down Chimera Ants say their orders
  // come from Gyro, episode 78; chapter 203 names him as the kingpin of NGL,
  // whose men's guns Killua found in chapter 192. No hood and no figure.
  'gyro': [
    ...GYRO_PISTOL,
    {
      d: 'M40 160 V142 Q44 132 48 142 V160 Z M54 160 V142 Q58 132 62 142 V160 Z',
      role: 'soft',
    },
  ],
  // A surgical mask, pleated, its loops open and the far side curving away,
  // in tint, with a scalpel lying below it: Dr. Lee, masked, operates on the
  // Queen in chapter 215. No eyes, no scar and no face.
  'dr-lee': [
    { d: 'M38 84 Q80 70 122 84 L118 122 Q80 138 42 122 Z', role: 'accent' },
    { d: 'M40 97 Q80 86 120 97 M41 110 Q80 100 119 110', role: 'soft' },
    { d: 'M44 86 L46 120 M116 86 L114 120', role: 'soft' },
    { d: 'M122 84 Q130 102 118 122 M62 78 Q80 74 98 78', role: 'soft' },
    { d: 'M38 86 C18 84 16 120 42 120' },
    { d: 'M122 86 C142 84 144 120 118 120' },
    { d: 'M36 160 L104 150 L106 154 L38 164 Z' },
    { d: 'M104 150 Q122 145 130 150 L106 154', role: 'soft' },
    shadow(80, 174, 54),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntHuntersRedrawn: Redrawings = {
  'morel-mackernasey': [
    // The same pince-nez, farther back on the table, and Morel's
    // man-sized pipe lying in front of it, the bowl's rim in tint and its
    // far side hatched: Knov draws it out of a portal for him in chapter
    // 202. Episode 86 already shows it, the anime threshold itself, so the
    // stage opens at episode 88, where Morel's smoke picks off the ants one
    // by one: late in the anime, never early.
    {
      episode: 88,
      chapter: 202,
      value: [
        ...moved(morelPinceNez(), 'translate(0 -66)'),
        { d: 'M116 108 Q116 146 132 150 Q148 146 148 108', role: 'soft' },
        { d: ellipse(132, 108, 16, 5), role: 'accent' },
        { d: 'M117 128 L18 131 M117 140 L18 137 M18 131 L8 133 L18 137' },
        { d: 'M104 128 V140 M60 130 V139', role: 'soft' },
        { d: 'M138 120 l6 -6 M138 132 l7 -7 M136 144 l6 -6', role: 'ambient' },
        shadow(80, 160, 72),
      ],
    },
  ],
}
