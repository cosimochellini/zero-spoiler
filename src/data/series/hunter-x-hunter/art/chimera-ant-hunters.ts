import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Palm's kitchen knife lying on the table in 3/4: the broad blade's flat
 * catching the light, its spine's top face hatched, the cutting edge in
 * tint, and the handle with its bolster. Every drawing of hers before the
 * Chimera Ants remake her keeps it.
 */
const PALM_KNIFE: Stroke[] = [
  { d: 'M14 120 L104 112 V142 Q42 146 14 120 Z' },
  { d: 'M104 142 Q42 146 14 120', role: 'accent' },
  { d: 'M18 116 L104 108 V112', role: 'soft' },
  {
    d: 'M30 116 l3 -4 M46 115 l3 -4 M62 113 l3 -4 M78 112 l3 -4 M94 110 l3 -4',
    role: 'ambient',
  },
  { d: 'M34 126 Q64 124 96 124', role: 'soft' },
  { d: 'M104 112 L110 114 V140 L104 142' },
  { d: 'M110 118 H146 Q154 118 154 127 Q154 136 146 136 H110' },
  { d: 'M110 118 L114 115 H148 Q156 115 156 122', role: 'soft' },
  { d: 'M124 136 l5 -5 M134 136 l6 -6 M145 135 l6 -6', role: 'ambient' },
  shadow(84, 156, 70),
]

/**
 * The cup on its saucer from her first drawing, overflowing down its side:
 * her Nen makes it spill when she names Knuckle and Shoot. Its overflow is
 * the accent where the cup is drawn alone.
 */
const PALM_CUP: Stroke[] = [
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
]

/**
 * Palm's crystal ball, its rim, and the glint on the glass. The ball on its
 * merman and the orb on her forehead are both drawn from it.
 */
const PALM_BALL: Stroke[] = [
  { d: circle(0, 0, 10), role: 'accent' },
  { d: 'M-6 -2 Q-5 -6 -1 -7', role: 'soft' },
]

/**
 * Palm's long, wavy hair after the cocoon, falling either side of the orb:
 * both her drawings as a Chimera Ant keep it.
 */
const PALM_ANT_HAIR: Stroke[] = [
  { d: 'M54 66 Q50 34 80 30 Q110 34 106 66' },
  {
    d: 'M54 60 Q44 76 52 92 Q42 108 50 124 Q40 138 46 152 M106 60 Q116 76 108 92 Q118 108 110 124 Q120 138 114 152',
  },
  {
    d: 'M60 72 Q54 88 60 102 Q52 118 58 134 M100 72 Q106 88 100 102 Q108 118 102 134',
    role: 'soft',
  },
]

/**
 * Palm's left forearm raised beside her as a Chimera Ant, its fist up and
 * the scales on it; the right is the same, mirrored.
 */
const PALM_FOREARM: Stroke[] = [
  { d: 'M20 170 L30 114 M38 172 L46 116' },
  { d: 'M28 114 Q26 100 36 98 Q48 98 48 112 Q40 118 28 114 Z' },
  {
    d: 'M27 156 q5 -3 10 0 M29 144 q5 -3 10 0 M31 132 q5 -3 10 0',
    role: 'soft',
  },
  { d: 'M40 160 l4 -3 M42 146 l4 -3', role: 'ambient' },
]

/** The second of a pair: the first, mirrored about x 80. */
const MIRRORED = 'matrix(-1 0 0 1 160 0)'

/**
 * Knuckle's white overcoat standing as if worn, in 3/4: the near side and
 * its sleeve, the far side turning away and hatched, the open front, and
 * the rings. The golden rings on it are the accent.
 */
const KNUCKLE_COAT: Stroke[] = [
  { d: 'M64 32 L38 42 Q30 46 28 58 L22 118 L36 121 L42 72 L40 164 H92' },
  {
    d: 'M96 32 L114 40 Q120 44 121 56 L126 114 L114 116 L110 72 L112 160 L92 164',
  },
  { d: 'M64 32 Q80 38 96 32 M64 32 L76 62 L88 46 M96 32 L90 48' },
  { d: 'M88 46 L92 164', role: 'soft' },
  {
    d: `${circle(84, 76, 3)} ${circle(85, 94, 3)} ${circle(86, 112, 3)} ${circle(87, 130, 3)} ${circle(88, 148, 3)}`,
    role: 'accent',
  },
  { d: 'M54 80 Q58 120 54 160 M30 108 L36 110', role: 'soft' },
  {
    d: 'M100 78 l8 -6 M100 96 l9 -7 M100 114 l9 -7 M100 132 l9 -7 M100 150 l9 -7 M116 64 l4 -3',
    role: 'ambient',
  },
  shadow(78, 172, 46),
]

/**
 * Morel's man-sized pipe lying on the table in 3/4, the stem running off to
 * the left and the bowl's rim in tint, its far side hatched. Both of Morel's
 * drawings keep it.
 */
const MOREL_PIPE: Stroke[] = [
  { d: 'M116 112 Q116 150 132 154 Q148 150 148 112', role: 'soft' },
  { d: ellipse(132, 112, 16, 5), role: 'accent' },
  { d: 'M117 132 L18 135 M117 144 L18 141 M18 135 L8 137 L18 141' },
  { d: 'M104 132 V144 M60 134 V143', role: 'soft' },
  { d: 'M138 124 l6 -6 M138 136 l7 -7 M136 148 l6 -6', role: 'ambient' },
  shadow(80, 164, 72),
]

/**
 * Morel's pince-nez sunglasses lying on a table, seen from above: the two
 * dark lenses hatched inside their rims, the rims' thickness, the sprung
 * bridge with its coil and the two nose pads.
 */
const MOREL_PINCE_NEZ: Stroke[] = [
  { d: `${ellipse(50, 120, 34, 16)} ${ellipse(118, 110, 26, 12)}` },
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
]

/** A small smoke rabbit sitting up, facing right, its feet at 0 0. */
const SMOKE_RABBIT =
  'M-9 0 Q-13 -10 -4 -13 Q2 -18 6 -14 Q9 -10 4 -8 Q3 -3 6 0 Z M1 -16 L-2 -27 Q0 -29 3 -17 M3 -16 L6 -26 Q8 -26 6 -15'

/**
 * Shoot's robe in 3/4, crossed at the collar over the bandages and tied with
 * the rope at the hip, the far side hatched, with the stump of the left
 * shoulder where the big sleeve hangs. Both his drawings keep it.
 */
const SHOOT_ROBE: Stroke[] = [
  {
    d: 'M62 34 L36 46 Q22 54 18 70 L12 120 L28 123 L36 84 L40 156 H104 L106 52 L92 34',
  },
  { d: 'M62 34 L92 104 M92 34 L78 66' },
  { d: 'M70 44 H86 M72 52 H84 M75 60 H81', role: 'soft' },
  { d: 'M40 106 Q72 114 104 106 M40 112 Q72 120 104 112' },
  { d: 'M66 117 L62 138 M71 118 L73 136 M50 124 l3 16', role: 'soft' },
  {
    d: 'M88 124 l8 -6 M88 138 l9 -7 M90 152 l9 -7 M94 72 l7 -5 M94 88 l7 -5',
    role: 'ambient',
  },
]

/** One of Shoot's floating hands, open, its fingers up, at 0 0. */
const SHOOT_HAND =
  'M-7 8 Q-9 -2 -7 -8 Q-5 -10 -4 -6 V-14 Q-2 -16 0 -14 V-7 V-15 Q2 -17 4 -15 V-6 Q6 -12 8 -10 Q9 -2 6 8 Z'

/**
 * Gyro's pistol lying on its side, the slide's top face catching the light
 * and its muzzle end showing, the dark grip hatched: one of the guns NGL's
 * men carried.
 */
const GYRO_PISTOL: Stroke[] = [
  { d: 'M28 96 H122 L124 112 H28 Z', role: 'accent' },
  { d: 'M28 96 L34 90 H126 L122 96 M126 90 L128 106 L124 112' },
  { d: 'M28 96 L22 100 V114 L28 112', role: 'soft' },
  { d: 'M98 112 L94 120 L104 160 H126 L122 112' },
  { d: 'M126 112 L130 108 L134 154 L126 160', role: 'soft' },
  { d: 'M76 112 Q76 132 92 132 L98 124' },
  {
    d: 'M86 114 Q84 122 88 126 M108 98 V110 M112 98 V110 M116 98 V110 M60 100 H82 V106 H60 Z',
    role: 'soft',
  },
  { d: 'M102 130 l14 -6 M104 142 l14 -6 M106 154 l14 -6', role: 'ambient' },
  { d: 'M25 106 h0.01', role: 'soft' },
]

/** The two cartridges standing beside Gyro's pistol, in 3/4. */
const GYRO_CARTRIDGES: Stroke[] = [
  {
    d: `M38 162 V144 Q42 134 46 144 V162 M52 162 V144 Q56 134 60 144 V162 ${ellipse(42, 162, 4, 1.5)} ${ellipse(56, 162, 4, 1.5)}`,
    role: 'soft',
  },
  { d: 'M38 150 H46 M52 150 H60', role: 'soft' },
]

/**
 * Knov's black suit jacket in 3/4, as if worn: the near side and its sleeve,
 * the far side turning away and hatched, the white shirt's collar, the blue
 * tie between the lapels, and the two buttons.
 */
const KNOV_JACKET: Stroke[] = [
  { d: 'M58 30 L30 42 L16 112 L30 116 L36 76 L38 136 H96' },
  { d: 'M88 30 L108 38 L120 106 L110 110 L104 74 L104 132 L96 136' },
  { d: 'M58 30 L64 54 L56 62 L78 106 L76 136 M88 30 L92 52 L86 58 L78 106' },
  { d: 'M62 30 L68 42 L74 34 L80 42 L86 30 Q74 36 62 30' },
  {
    d: 'M70 40 L77 40 L76 47 L72 47 Z M72 47 L69 86 L74 94 L78 86 L76 47',
    role: 'soft',
  },
  {
    d: `${dots([
      [76, 114],
      [76, 126],
    ])} M44 88 H58`,
    role: 'soft',
  },
  { d: 'M18 104 L31 108', role: 'soft' },
  {
    d: 'M92 78 l8 -6 M92 94 l9 -7 M92 110 l9 -7 M92 126 l9 -7 M108 52 l3 -2',
    role: 'ambient',
  },
  { d: 'M40 96 l6 -5 M40 112 l6 -5', role: 'ambient' },
]

/** The Hunters of Chimera Ant phase 2 (#1021). */
export const CHIMERA_ANT_HUNTERS_DRAWINGS = {
  // Palm's kitchen knife lying on the table, its edge in tint and its spine
  // hatched, with the cup she makes overflow in her first scene standing
  // small behind it: she carries a knife throughout the arc, threatens Gon
  // and Killua with knives (chapter 205) and goes for Killua with one in
  // episode 94 / chapter 220.
  'palm-siberia': [
    ...PALM_KNIFE,
    ...moved(softened(PALM_CUP), 'translate(78 4) scale(0.56)'),
  ],
  // Knov's black suit jacket in 3/4, the tie soft between the lapels, and
  // before it a portal of Hide and Seek: symbols drawn in a circle on the
  // ground, its edge in tint and the opening hatched. He opens one in the
  // ground to hand Morel his pipe, episode 86 / chapter 202. No glasses or
  // face.
  'knov': [
    ...KNOV_JACKET,
    shadow(62, 146, 40),
    { d: ellipse(116, 168, 36, 10), role: 'accent' },
    { d: ellipse(116, 168, 26, 6), role: 'soft' },
    {
      d: 'M100 170 l6 -4 M110 172 l8 -6 M122 172 l8 -6 M132 170 l4 -3',
      role: 'ambient',
    },
    {
      d: 'M78 166 l3 -3 l3 3 M88 178 h5 M104 182 l2 -4 l2 4 M126 182 v-4 h4 M142 178 l4 -2 M152 168 v-4 M146 158 l-4 -1 M122 157 h4 M100 158 l3 -2 M84 160 h-3',
      role: 'soft',
    },
  ],
  // Morel's man-sized pipe lying on the table, the bowl's rim in tint, its
  // smoke rising into two small rabbits, and his pince-nez sunglasses
  // beside it, smaller: Knov draws the pipe out of a portal for him and its
  // smoke forms rabbits sent towards the nest, episode 86 / chapter 202.
  'morel-mackernasey': [
    ...MOREL_PIPE,
    ...moved(MOREL_PINCE_NEZ, 'translate(6 34) scale(0.5)'),
    {
      d: 'M130 106 Q122 96 130 86 Q138 76 128 66 Q120 58 126 50',
      role: 'ambient',
    },
    {
      d: SMOKE_RABBIT,
      role: 'ambient',
      transform: 'translate(104 64) scale(1.5)',
    },
    {
      d: SMOKE_RABBIT,
      role: 'ambient',
      transform: 'translate(136 46) scale(1.5)',
    },
  ],
  // Knuckle's white overcoat standing as if worn, the golden rings on it in
  // tint and its far side hatched: the coat he wears from his first scene
  // with Shoot, episode 86 / chapter 200.
  'knuckle-bine': KNUCKLE_COAT,
  // Shoot's robe in 3/4, the bandages in its crossed collar and the rope at
  // the hip, and its large left sleeve swinging towards the reader, its
  // open end in tint and hatched inside: the arm he does not have, episode
  // 86 / chapter 200. The floating hands and the cage are his Nen, shown in
  // chapter 211.
  'shoot-mcmahon': [
    ...SHOOT_ROBE,
    {
      d: `M106 52 C128 54 140 74 140 100 C140 120 146 136 150 148 M106 64 C112 96 112 130 118 154 ${ellipse(134, 152, 17, 8)}`,
      role: 'accent',
    },
    { d: ellipse(134, 152, 11, 4.5), role: 'soft' },
    { d: 'M126 152 l5 -3 M132 154 l6 -4 M140 153 l4 -3', role: 'ambient' },
    { d: 'M120 70 C128 96 126 120 130 140', role: 'soft' },
    shadow(80, 178, 56),
  ],
  // A pistol lying on its side with two cartridges standing beside it, the
  // slide in tint: the gunmen who shoot down Chimera Ants say their orders
  // come from Gyro, episode 78; chapter 203 names him as the kingpin of NGL,
  // whose men's guns Killua found in chapter 192. No hood and no figure.
  'gyro': [...GYRO_PISTOL, ...GYRO_CARTRIDGES, shadow(80, 170, 56)],
  // A surgical mask in 3/4, pleated, in tint: its near loop open towards
  // the reader, the far loop turning away behind it and hatched, and a
  // scalpel lying below. Dr. Lee, masked, operates on the Queen in chapter
  // 215. No eyes, no scar and no face.
  'dr-lee': [
    { d: 'M34 86 Q72 72 120 80 L118 118 Q76 136 40 122 Z', role: 'accent' },
    { d: 'M36 98 Q76 86 120 92 M38 110 Q76 100 119 105', role: 'soft' },
    { d: 'M40 88 L44 120 M112 82 L110 118', role: 'soft' },
    { d: 'M120 80 Q128 98 118 118 M58 80 Q76 76 96 78', role: 'soft' },
    { d: 'M34 88 C10 84 8 122 40 120' },
    { d: 'M30 96 C22 98 22 112 32 112', role: 'soft' },
    { d: 'M120 82 C134 86 136 112 118 116' },
    { d: 'M124 90 l6 -3 M126 100 l6 -3 M124 110 l5 -3', role: 'ambient' },
    { d: 'M36 160 L104 150 L106 154 L38 164 Z' },
    { d: 'M104 150 Q122 145 130 150 L106 154', role: 'soft' },
    shadow(80, 174, 54),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntHuntersRedrawn: Redrawings = {
  'palm-siberia': [
    // The same knife before her crystal ball, which stands on a dried
    // merman's raised arms, its tail coiled under it, the ball's rim in
    // tint: she feeds the merman her blood and the ball shows her where Gon
    // and Killua are, episode 94 / chapter 220.
    {
      episode: 94,
      chapter: 220,
      value: [
        ...softened(PALM_KNIFE),
        ...moved(PALM_BALL, 'translate(128 34) scale(1.6)'),
        { d: 'M118 68 Q110 58 114 46 M138 68 Q146 58 142 46' },
        {
          d: 'M118 68 Q128 64 138 68 M118 68 Q114 82 120 92 Q108 104 124 108 H136 M138 68 Q142 82 134 92 Q128 98 136 100 Q146 100 150 94 L158 86 M150 94 L160 98',
        },
        { d: 'M121 74 H135 M121 80 H135 M122 86 H133', role: 'soft' },
        { d: 'M128 104 l4 -3 M136 104 l4 -3', role: 'ambient' },
      ],
    },
    // Reborn as a Chimera Ant: the crystal ball is now an orb on her
    // forehead, in tint, under her long, wavy hair, and scales cover her
    // forearms. Episode 123 ends as she leaves the cocoon; chapter 293. No
    // face.
    {
      episode: 123,
      chapter: 293,
      value: [
        ...moved(PALM_BALL, 'translate(80 50) scale(0.9)'),
        ...PALM_ANT_HAIR,
        ...PALM_FOREARM,
        ...moved(PALM_FOREARM, MIRRORED),
      ],
    },
    // Black Widow: her hair wraps her whole body into a dress with a
    // wide-brimmed hat, the orb on her forehead still in tint under the
    // brim, as she attacks Killua: episode 124 / chapter 293. No face.
    {
      episode: 124,
      chapter: 293,
      value: [
        ...moved(PALM_BALL, 'translate(80 64) scale(0.8)'),
        { d: `${ellipse(80, 44, 46, 9)} M58 42 Q60 22 80 20 Q100 22 102 42` },
        { d: 'M38 46 Q80 54 122 46', role: 'soft' },
        {
          d: 'M62 52 Q60 70 66 80 Q50 120 34 170 Q80 180 126 170 Q110 120 94 80 Q100 70 98 52',
        },
        {
          d: 'M70 82 Q62 104 66 124 Q56 146 54 168 M80 84 Q74 106 82 128 Q74 150 80 174 M90 82 Q98 104 94 124 Q104 146 106 168 M66 80 Q80 86 94 80',
          role: 'soft',
        },
        {
          d: 'M104 120 l6 -4 M108 136 l7 -5 M112 152 l7 -5 M66 30 l4 -4',
          role: 'ambient',
        },
        shadow(80, 186, 50),
      ],
    },
  ],
  'knuckle-bine': [
    // The same coat with A.P.R., Hakoware's small winged mascot, hovering
    // beside it, seen from behind: it clings to Gon after Knuckle's first
    // punch, episode 90 / chapter 210. No face and no number.
    {
      episode: 90,
      chapter: 210,
      value: [
        ...KNUCKLE_COAT,
        { d: ellipse(136, 26, 11, 10) },
        {
          d: 'M126 22 Q116 12 112 20 Q118 22 126 28 M146 22 Q156 12 158 20 Q154 22 146 28',
          role: 'soft',
        },
        { d: 'M132 38 l-2 6 M140 38 l2 6', role: 'ambient' },
      ],
    },
  ],
  'shoot-mcmahon': [
    // The same robe with its left sleeve taken off: the empty shoulder, and
    // beside it the three floating hands, one holding the birdcage, in tint.
    // Shoot shows them to Killua, episode 90 / chapter 211.
    {
      episode: 90,
      chapter: 211,
      value: [
        ...SHOOT_ROBE,
        { d: 'M106 52 Q114 54 112 66 L106 70', role: 'soft' },
        { d: SHOOT_HAND, transform: 'translate(130 40) scale(1.4)' },
        { d: SHOOT_HAND, transform: 'translate(140 76) rotate(20) scale(1.4)' },
        {
          d: SHOOT_HAND,
          transform: 'translate(130 102) rotate(180) scale(1.4)',
        },
        {
          d: `M116 150 V128 Q116 112 130 112 Q144 112 144 128 V150 M123 114 V150 M130 112 V150 M137 114 V150 ${ellipse(130, 150, 14, 3)}`,
          role: 'accent',
        },
        { d: 'M116 132 H144', role: 'soft' },
        shadow(86, 170, 64),
      ],
    },
  ],
  'gyro': [
    // Manga only: the large dark down coat with its hood up that he walks
    // Doli City in, reborn as a Chimera Ant with his memories, standing
    // empty beside his pistol, hatched dark and quilted. Chapter 203 shows
    // the coat and tells his rebirth in the record's own chapter, so the
    // stage opens at chapter 204, which tells his story; the anime never
    // tells it.
    {
      episode: 148,
      chapter: 204,
      source: 'chapter',
      value: [
        ...moved(GYRO_PISTOL, 'translate(66 74) scale(0.56)'),
        ...moved(GYRO_CARTRIDGES, 'translate(80 64) scale(0.56)'),
        {
          d: 'M44 24 Q22 26 20 52 L24 70 Q12 78 10 100 L8 150 Q36 160 76 152 L74 100 Q72 76 62 70 L66 50 Q64 26 44 24 Z',
        },
        { d: 'M30 56 Q42 40 56 56 Q50 66 42 68 Q34 66 30 56 Z' },
        { d: 'M36 58 l6 -6 M40 64 l8 -8 M48 62 l5 -5', role: 'ambient' },
        {
          d: 'M10 100 Q42 108 74 100 M9 120 Q42 128 75 120 M8 140 Q42 148 76 140',
          role: 'soft',
        },
        {
          d: 'M58 84 l8 -6 M60 108 l8 -6 M60 128 l9 -7 M62 148 l8 -6',
          role: 'ambient',
        },
        shadow(80, 172, 70),
      ],
    },
  ],
}
