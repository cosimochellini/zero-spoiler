import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import {
  BESIDE_THE_BEAST,
  PINION_HAND,
  ROBE_COLLAR,
  SKULL,
  TURNED_BODY,
  TURNED_COLLAR,
  TURNED_EAR,
  TURNED_SKULL,
} from './kakin-phase-2'

/** A manga-only stage of a phase 5 record, told in Kakin's chapters. */
const KAKIN = { episode: 148, source: 'chapter' } as const

/**
 * Morena's crown of thorns in 3/4: the outer edge of the ring in tint, its
 * inner edge seen across the back, two branches twisting round it and the
 * thorns standing out of it. She wears it in her first appearance, chapter
 * 378.
 */
const MORENA_CROWN: Stroke[] = [
  {
    d: 'M20 110 C22 96 50 88 80 88 C110 88 138 96 140 110 C138 124 110 134 80 134 C50 134 22 124 20 110 Z',
    role: 'accent',
  },
  {
    d: 'M32 106 C38 98 58 94 80 94 C102 94 122 98 128 106 M32 106 C38 116 58 122 80 122 C102 122 122 116 128 106',
    role: 'soft',
  },
  {
    d: 'M24 116 C34 126 44 110 56 124 C66 134 74 118 88 130 C100 138 110 118 122 126 C130 130 134 120 138 114 M26 104 C36 92 46 104 58 96 C68 90 78 100 90 92',
    role: 'soft',
  },
  {
    d: 'M34 99 l-4 -9 M54 92 l-2 -10 M80 88 v-11 M104 90 l2 -10 M126 97 l5 -9 M30 124 l-6 7 M52 131 l-3 10 M80 135 v11 M108 131 l3 10 M130 124 l6 7 M42 132 l-5 6 M118 132 l5 6',
  },
  { d: 'M96 100 l6 -4 M110 102 l6 -4 M64 100 l6 -4', role: 'ambient' },
]

/**
 * Contagion, the ability she passes on with a kiss, drawn as open lines of
 * aura round the crown: it has no object of its own.
 */
const CONTAGION: Stroke = {
  d: 'M10 92 C14 74 30 62 48 56 M150 92 C146 74 130 62 112 56 M8 128 C14 146 30 156 48 160 M152 128 C146 146 130 156 112 160 M64 46 C74 42 86 42 96 46',
  role: 'ambient',
}

/**
 * Shikaku's left hand with thumb and index finger making a corner, the
 * other fingers curled under the index: Culdcept is begun by framing a
 * rectangle between two such corners.
 */
const SHIKAKU_HAND: Stroke[] = [
  {
    d: 'M41 92 Q41 85 45.5 85 Q50 85 50 92 V125 H86 Q92 125 92 129.5 Q92 134 86 134 H56 Q62 138 58 144 Q62 149 56 153 Q52 157 46 156 L36 162 C30 150 28 134 41 120 Z',
  },
  {
    d: 'M56 144 H48 M54 153 L46 150 M41 120 C44 128 46 136 46 144',
    role: 'soft',
  },
  { d: 'M36 162 L30 172 M46 156 L44 170', role: 'soft' },
]

/** Both hands, the right one turned to the far corner of the card. */
const SHIKAKU_HANDS: Stroke[] = [
  ...SHIKAKU_HAND,
  ...moved(SHIKAKU_HAND, 'rotate(180 80 94)'),
]

/** The card's plane in 3/4, tipped back to the right. */
const SHIKAKU_TILT = 'matrix(1 -0.12 0.16 1 -12 10)'

/**
 * Rihan's left hand held up, palm in, the fingers together and the thumb
 * out from the palm: he focuses his aura between his two hands.
 */
const RIHAN_HAND: Stroke[] = [
  {
    d: 'M44 112 C38 92 38 66 44 46 Q48 36 56 40 C60 56 60 70 58 80 C64 76 72 78 70 86 C68 94 60 98 58 104 L58 112',
  },
  { d: 'M46 58 Q52 56 58 60 M44 72 Q50 70 58 74', role: 'soft' },
]

/**
 * Rihan's head from behind and a little to his left: the hair combed back
 * to his queue, the braid down the back of his Kakin army zipper jacket
 * with its rounded side hatched, and the tie at its end in tint. The
 * earpiece is in his left ear.
 */
const RIHAN: Stroke[] = [
  { d: TURNED_SKULL },
  { d: TURNED_EAR },
  { d: circle(44.5, 86, 2.5), role: 'soft' },
  {
    d: 'M56 62 C64 76 70 90 74 100 M80 47 C80 66 80 86 80 100 M104 62 C98 76 92 90 86 100',
    role: 'soft',
  },
  { d: 'M104 70 l5 -4 M106 84 l5 -4', role: 'ambient' },
  {
    d: 'M58 110 Q65 114 72 115 M88 115 Q94 114 99 112 M58 122 Q65 126 72 127 M88 127 Q94 126 100 124',
  },
  {
    d: 'M80 102 C72 108 72 118 80 122 C88 126 88 136 80 140 C72 144 72 154 80 158 M80 102 C88 108 88 118 80 122 C72 126 72 136 80 140 C88 144 88 154 80 158',
  },
  { d: 'M83 112 l3 -3 M83 130 l3 -3 M83 148 l3 -3', role: 'ambient' },
  {
    d: 'M75 158 H85 V166 H75 Z M77 166 L74 178 M83 166 L86 178 M80 166 V180',
    role: 'accent',
  },
  ...TURNED_BODY,
]

/**
 * The shoulder of Musse's Kakin army zipper jacket in 3/4, its stand-up
 * collar, the zip down the front, the far side hatched.
 */
const MUSSE_JACKET: Stroke[] = [
  { d: 'M6 186 C10 152 32 134 58 128 H96 C120 134 144 152 150 186' },
  { d: 'M58 128 V112 Q78 104 98 110 V128' },
  { d: 'M78 106 V186', role: 'soft' },
  { d: 'M24 168 Q40 160 56 160 M102 160 Q118 160 134 168', role: 'soft' },
  { d: 'M122 156 l8 -6 M130 170 l8 -6 M136 182 l8 -6', role: 'ambient' },
]

export const KAKIN_PHASE_5_DRAWINGS = {
  // Queen Oito's light kimono in 3/4, the collar crossed and the obi wound
  // round her, and in her arms the baby, a bundle in tint: she holds her from
  // her first scenes, chapter 350. No face, and nothing on who the baby is;
  // the wrap is a convention.
  'oito-hui-guo-rou': [
    {
      d: 'M66 28 C48 32 34 40 30 54 L24 128 Q24 136 32 136 H46 M94 28 C110 32 122 42 126 56 L130 124 Q130 130 124 130 H114',
    },
    { d: 'M66 28 Q80 34 94 28 M66 28 L86 72 M94 28 L78 76', role: 'soft' },
    {
      d: 'M42 96 C40 82 56 74 78 76 H100 C116 76 126 86 122 100 C118 112 106 116 88 116 H64 C52 116 44 108 42 96 Z',
      role: 'accent',
    },
    {
      d: 'M102 78 C114 82 118 94 112 106 C108 112 102 114 96 114 M52 90 Q72 84 94 94 M54 106 Q72 100 92 108',
      role: 'soft',
    },
    {
      d: 'M46 116 V124 Q80 130 114 122 V114 M46 124 V138 Q80 144 114 136 V122',
      role: 'soft',
    },
    { d: 'M48 138 L50 198 M112 136 L110 198 M90 141 L86 198' },
    {
      d: 'M118 70 l8 -6 M122 90 l6 -5 M124 108 l6 -5 M98 156 l8 -6 M98 172 l8 -6 M98 188 l8 -6',
      role: 'ambient',
    },
  ],

  // Makaha as the flashback shows her, a dark silhouette from behind,
  // hatched, over the collar of a Kakin soldier's uniform in tint: Longhi's
  // half-sister, who found the curse they share, chapter 401. The collar
  // is a convention.
  'makaha': [
    { d: SKULL },
    {
      d: 'M62 80 l14 -10 M60 94 l22 -16 M62 104 l30 -22 M72 106 l28 -20 M88 106 l14 -10 M66 68 l14 -10',
      role: 'ambient',
    },
    { d: 'M64 104 Q80 110 96 104 V116 Q80 122 64 116 Z', role: 'accent' },
    { d: 'M24 176 C28 140 46 126 64 118 M136 176 C132 140 114 126 96 118' },
    {
      d: 'M34 162 l8 -6 M40 172 l10 -7 M126 162 l-8 -6 M120 172 l-10 -7',
      role: 'ambient',
    },
    shadow(80, 184, 54),
  ],

  // Hashito's voluminous fair hair from behind and a little to his left,
  // neatly combed back, its outline in tint, the side turning away hatched,
  // over the collar of his black suit: a guard Zhang Lei lends to Room
  // 1014, chapter 366 (named in 402).
  'hashito': [
    {
      d: 'M48 100 C34 66 50 32 80 30 C110 30 124 58 112 102 M48 100 Q80 112 112 102',
      role: 'accent',
    },
    {
      d: 'M54 50 C50 66 52 84 58 102 M66 38 C60 58 62 82 70 106 M82 32 C78 56 80 82 86 108 M98 36 C100 58 100 82 100 106',
      role: 'soft',
    },
    { d: 'M106 56 l6 -4 M110 72 l6 -4 M110 88 l5 -4', role: 'ambient' },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Sakata's 9mm pistol in 3/4 in his hand, the slide in tint, out of the
  // sleeve of his black suit, fired down at one of the white snakes, drawn
  // plain: he shoots the snakes on Barrigen's body at the Nen class,
  // chapter 370 (named in 402). The body is not drawn.
  'sakata': [
    ...moved(
      [
        {
          d: 'M40 70 H112 V84 H40 Z M40 70 L46 64 H118 L112 70 M118 64 V78 L112 84',
          role: 'accent',
        },
        { d: `${circle(43, 77, 2)} M72 84 C72 98 84 100 90 94`, role: 'soft' },
        { d: 'M92 84 L86 122 H106 L112 84' },
        {
          d: 'M84 90 C76 94 76 100 84 102 C76 106 76 112 84 114 C78 118 80 124 88 124 M104 88 C114 92 118 104 112 120',
        },
        { d: 'M112 98 L136 86 M110 120 L138 108' },
        { d: ellipse(137, 97, 4, 12), role: 'soft' },
        { d: 'M136 86 L160 74 M138 108 L160 98' },
        { d: 'M144 92 l6 -7 M148 102 l8 -8', role: 'ambient' },
        { d: 'M30 78 h-8 M32 86 l-7 4 M32 70 l-7 -4', role: 'ambient' },
      ],
      'rotate(-30 80 90) translate(10 -10)',
    ),
    { d: 'M8 190 C20 170 34 192 48 176 C58 164 54 152 66 148' },
    {
      d: 'M8 190 C20 170 34 192 48 176 C58 164 54 152 66 148',
      transform: 'translate(5 6)',
    },
    { d: `${ellipse(70, 151, 8, 6)} M8 190 L13 196`, role: 'soft' },
  ],

  // An owl-shaped bird of Secret Window perched on the shoulder of Musse's
  // Kakin army zipper jacket, in tint, its wings folded: Musse uses it to
  // eavesdrop in chapter 366. No eyes, no beak.
  'musse': [
    ...MUSSE_JACKET,
    {
      d: 'M100 128 C90 114 90 96 96 86 C92 74 102 62 115 62 C128 62 138 74 134 86 C140 96 140 114 130 128 Z',
      role: 'accent',
    },
    {
      d: 'M96 92 C90 104 94 120 104 130 M134 92 C140 104 136 120 126 130',
      role: 'soft',
    },
    {
      d: 'M108 96 l3 3 l3 -3 M116 96 l3 3 l3 -3 M110 106 l3 3 l3 -3 M118 106 l3 3 l3 -3 M114 116 l3 3 l3 -3',
      role: 'soft',
    },
    { d: 'M108 128 l-2 6 M112 128 v6 M118 128 v6 M122 128 l2 6' },
    { d: 'M128 70 l4 -3 M132 100 l4 -3 M132 112 l4 -3', role: 'ambient' },
  ],

  // The small box Balsamilco opens with a sequence of buttons, in 3/4: its
  // walls with their thickness, the lid up with the keypad on it, and the
  // three vials of TSK-17 inside in tint, chapter 402 (named in 403). The
  // box's shape and where its buttons sit are a frame check. No stage for
  // Halkenburg possessing him: the Chapter 403 synopsis already shows it,
  // in his own opening chapter, so there is no entry or exit to draw.
  'balsamilco': [
    { d: 'M28 110 L96 96 L132 112 L64 128 Z' },
    { d: 'M34 110 L96 98.5 L126 112 L64 125', role: 'soft' },
    { d: 'M28 110 V134 L64 152 V128 M64 152 L132 136 V112' },
    {
      d: 'M49 117.3 L95.2 107.5 A3 3 0 0 0 94 101.7 L47.8 111.5 A3 3 0 0 0 49 117.3 Z M57.5 121.8 L103.7 112 A3 3 0 0 0 102.5 106.2 L56.3 116 A3 3 0 0 0 57.5 121.8 Z M66 126.3 L112.2 116.5 A3 3 0 0 0 111 110.7 L64.8 120.5 A3 3 0 0 0 66 126.3 Z',
      role: 'accent',
    },
    {
      d: 'M96 96 L98 50 L134 66 L132 112 M98 50 L102 47 L138 63 L134 66 M138 63 L136 108 L132 112',
    },
    { d: 'M104 62 L128 73 L126 102 L102 91 Z', role: 'soft' },
    {
      d: dots([
        [109, 72],
        [116, 75],
        [123, 78],
        [109, 80],
        [116, 83],
        [123, 86],
        [109, 88],
        [116, 91],
        [123, 94],
      ]),
      role: 'soft',
    },
    {
      d: 'M72 144 l8 -4 M88 140 l8 -4 M104 136 l8 -4 M118 132 l8 -4',
      role: 'ambient',
    },
    shadow(80, 168, 58),
  ],

  // Worio Bay's left hand held up to Kaiser, back out, the pinion on it in
  // tint, out of the sleeve of his suit, its opening an ellipse at the
  // wrist: he shows Kaiser the mark Halkenburg left on him, chapter 403.
  'worio-bay': [
    ...moved(PINION_HAND, 'translate(0 -10)'),
    { d: ellipse(80, 164, 24, 7) },
    { d: 'M56 164 L52 200 M104 164 L108 200' },
    { d: 'M92 176 l8 -6 M94 190 l8 -6', role: 'ambient' },
  ],

  // Vict's hand raised, palm out, fingers together, out of the quilted
  // sleeve of his light puffer jacket, the quilting seen round the sleeve
  // and the cuff in tint: he talks to Balsamilco in military sign language,
  // chapter 403 (named in 404). Which sign he makes is a frame check.
  'vict': [
    {
      d: 'M58 138 L56 92 Q56 86 61 86 Q66 86 66 92 L68 120 M68 120 L68 56 Q68 50 73 50 Q78 50 78 56 V118 M78 118 V48 Q78 42 83 42 Q88 42 88 48 V118 M88 118 L90 54 Q90 48 95 48 Q100 48 100 54 L100 136',
    },
    {
      d: 'M100 112 C110 104 120 96 126 90 Q130 86 134 90 Q137 94 132 100 C124 112 112 126 104 138',
    },
    { d: 'M62 112 C70 118 86 118 96 110', role: 'soft' },
    { d: ellipse(80, 142, 26, 8), role: 'accent' },
    {
      d: 'M54 142 C48 150 52 158 50 164 C46 172 50 178 48 184 C46 190 48 196 48 200 M106 142 C112 150 108 158 110 164 C114 172 110 178 112 184 C114 190 112 196 112 200',
    },
    { d: 'M51 164 Q80 174 109 164 M48 184 Q80 194 112 184', role: 'soft' },
    { d: 'M100 150 l6 -4 M102 172 l6 -4 M102 192 l6 -4', role: 'ambient' },
  ],

  // Culdcept in 3/4: Shikaku's two hands framing a rectangle with thumb and
  // index finger, and the card of aura between them in tint, darkening,
  // chapter 382. Halkenburg's arrow goes through it in the same chapter;
  // the arrow is not drawn.
  'shikaku': moved(
    [
      ...SHIKAKU_HANDS,
      { d: 'M53 66 H107 V122 H53 Z', role: 'accent' },
      {
        d: 'M58 82 l14 -12 M58 100 l34 -30 M60 116 l46 -40 M78 116 l28 -24 M96 116 l10 -9',
        role: 'ambient',
      },
    ],
    SHIKAKU_TILT,
  ),

  // Shikaku's arm in the sleeve of his Kakin army zipper jacket raised in a
  // salute, the hand in tint at his brow, his head from behind and a
  // little to his left, the earpiece in his left ear: Sumidori's soul,
  // standing up in Shikaku's body, salutes Halkenburg and asks for orders,
  // chapter 382 (named in 386). Which hand salutes is a convention.
  'sumidori': [
    { d: TURNED_SKULL },
    { d: TURNED_EAR },
    { d: circle(44.5, 86, 2.5), role: 'soft' },
    { d: 'M62 54 l3 6 M74 49 l2 7 M86 49 v7 M96 53 l-2 6', role: 'soft' },
    { d: 'M58 104 L58 122 M98 108 V112' },
    { d: 'M57 110 Q78 120 99 112 M58 122 Q78 132 100 124' },
    { d: 'M16 180 C18 146 36 128 58 122' },
    {
      d: 'M100 124 C116 120 130 116 142 114 M146 122 C140 132 134 140 130 146 C134 158 136 170 136 180',
    },
    {
      d: 'M108.5 76 L118 82 L142 114 M104 61 L132 72 L156 106 Q160 120 146 122',
    },
    { d: 'M118 82 L132 72 M121 87 L135 77', role: 'soft' },
    { d: 'M108.5 76 L118 82 L132 72 L104 61', role: 'accent' },
    { d: 'M146 108 l6 -4 M138 98 l6 -4 M134 160 l-2 -6', role: 'ambient' },
    shadow(78, 188, 58),
  ],

  // Cleapatro's headdress in 3/4 from behind, straight and cut square at
  // the shoulders like an ancient Egyptian woman's, its outline in tint,
  // its near side turning towards us, over the high collar of her light
  // uniform with its black stripes: the Supreme Magistrate, first seen in
  // chapter 371 (named in 404).
  'cleapatro': [
    {
      d: 'M40 112 L42 74 C44 54 62 40 84 40 C104 40 118 54 116 76 L118 118 L56 124 Z',
      role: 'accent',
    },
    { d: 'M56 124 L54 76 C54 62 62 50 72 44', role: 'soft' },
    { d: 'M70 52 L71 122 M86 44 L88 121 M102 50 L104 119', role: 'soft' },
    { d: 'M44 94 l8 -7 M44 106 l10 -9 M46 118 l8 -7', role: 'ambient' },
    { d: 'M62 124 V136 Q82 142 104 134 V120' },
    {
      d: 'M68 125 V138 M75 125 V140 M88 124 V140 M96 123 V138',
      role: 'ambient',
    },
    { d: 'M20 182 C24 152 42 138 62 134 M140 182 C138 152 122 138 104 132' },
    { d: 'M122 152 l8 -6 M128 166 l8 -6', role: 'ambient' },
    shadow(80, 188, 56),
  ],

  // A handgun in 3/4, the top face of its slide showing, whose barrel has
  // turned into a snake, in tint: Hinrigh's Biohazard turns the soldiers'
  // guns into snakes, chapter 390 (named in 404). No eyes on the snake; the
  // kind of gun is a frame check.
  'hinrigh': [
    { d: 'M20 86 H84 V102 H20 Z M20 86 L28 78 H92 L84 86 M92 78 V94 L84 102' },
    {
      d: 'M30 102 L24 146 Q24 152 30 152 H44 Q50 152 50 146 L54 116 H68 Q74 116 74 110 V102',
    },
    {
      d: 'M54 116 Q56 128 66 126 Q72 124 72 116 M60 104 Q60 112 64 116',
      role: 'soft',
    },
    { d: 'M30 80 H86 M30 118 l14 2 M28 128 l14 2 M26 138 l14 2', role: 'soft' },
    {
      d: 'M90 80 C106 78 110 66 104 58 C96 48 104 30 124 32 M88 98 C118 98 126 72 116 60 C110 52 116 44 126 46 M124 32 C136 28 150 32 152 40 C150 46 138 48 126 46',
      role: 'accent',
    },
    { d: 'M104 90 l4 6 M114 80 l6 2 M108 52 l4 4', role: 'soft' },
    { d: 'M40 148 l6 -6 M42 136 l6 -6', role: 'ambient' },
    shadow(70, 172, 56),
  ],

  // Morena's crown of thorns in 3/4, and round it the open lines of
  // Contagion, which she passes on with a kiss, chapter 378: the young
  // head of the Heil-Ly, named in chapter 405.
  'morena': [...MORENA_CROWN, CONTAGION, shadow(80, 176, 58)],

  // Risnorth's suit in 3/4, the white collar of his polo shirt, and the
  // plaid tie in tint: the murdered charity chairman a newscast remembers,
  // chapter 405. He is already dead when he is named.
  'risnorth': [
    {
      d: 'M64 44 Q46 50 34 60 C24 76 22 110 22 150 H38 L42 104 M98 42 Q112 46 122 54 C130 68 134 100 134 146 H122 L120 104',
    },
    { d: 'M42 104 L40 172 H120 L120 104' },
    { d: 'M64 44 L54 72 L84 142 M98 42 L108 70 L84 142' },
    { d: 'M64 44 L72 62 L82 54 L92 60 L98 42', role: 'soft' },
    {
      d: 'M78 58 H86 L87 64 L83 68 L89 108 L83 116 L77 108 L80 68 L77 64 Z',
      role: 'accent',
    },
    { d: 'M80 80 H87 M79 92 H88 M81 70 V112 M85 70 V112', role: 'soft' },
    {
      d: 'M124 70 l6 -4 M126 88 l6 -4 M128 106 l6 -4 M126 124 l6 -4 M108 150 l8 -6',
      role: 'ambient',
    },
    shadow(80, 184, 56),
  ],

  // Onior's corpulent head from behind and a little to his left, the far
  // side hatched, the tuft of fair hair standing up on top in tint, over a
  // broad neck: the Xi-Yu boss, chapter 378. His scars and wrinkles are on
  // his face, so they are not drawn.
  'onior': [
    { d: 'M44 110 C34 70 52 40 82 40 C112 40 126 66 118 110' },
    {
      d: 'M76 40 C74 30 78 22 82 18 C84 26 88 28 92 22 C94 30 92 36 88 41',
      role: 'accent',
    },
    { d: 'M40 76 C30 72 26 90 38 96' },
    {
      d: 'M106 58 l6 -5 M112 72 l6 -5 M114 86 l6 -5 M114 100 l5 -4',
      role: 'ambient',
    },
    { d: 'M45 108 L46 130 M117 108 L118 130' },
    { d: 'M8 184 C10 150 26 134 46 130 M152 184 C152 154 138 136 118 130' },
    { d: 'M130 150 l8 -6 M136 164 l8 -6 M140 178 l7 -5', role: 'ambient' },
    shadow(80, 190, 64),
  ],

  // Kako's head from behind and a little to the left, the short fair hair
  // curling at the top in tint, over the collar of the uniform of Camilla's
  // guards: first seen in chapter 389, filed at 411.
  'kako': [
    { d: 'M50 104 C46 86 48 72 56 66 M111 53 C112 66 110 84 108 104' },
    {
      d: 'M56 66 q-6 -8 2 -14 q0 -9 9 -10 q4 -8 13 -6 q6 -6 14 -2 q9 -1 11 7 q8 3 6 12',
      role: 'accent',
    },
    {
      d: 'M60 66 C66 62 70 56 70 50 M76 62 C82 58 86 50 84 42 M92 60 C98 58 102 52 102 46',
      role: 'soft',
    },
    { d: TURNED_EAR },
    { d: 'M104 72 l5 -4 M106 86 l5 -4', role: 'ambient' },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // A seed sprouting in a glass of water, the shoot and its two leaves in
  // tint: Bill's Erigeron, which he uses on a seed for each student Kurapika
  // calls in, chapter 388 (named in 412).
  'bill': [
    { d: 'M54 76 L60 162 Q60 166 66 166 H94 Q100 166 100 162 L106 76' },
    { d: ellipse(80, 76, 26, 5) },
    { d: ellipse(80, 96, 24, 4), role: 'soft' },
    {
      d: `${ellipse(80, 152, 7, 4)} M74 155 q-4 5 -2 9 M86 155 q4 5 2 9`,
      role: 'soft',
    },
    {
      d: 'M80 148 C78 126 84 104 80 62 C79 48 81 40 80 34 M80 50 C68 42 58 46 54 54 C64 58 74 56 80 50 Z M80 40 C90 30 102 32 106 40 C98 46 88 46 80 40 Z',
      role: 'accent',
    },
    { d: 'M96 110 l4 -3 M96 126 l4 -3 M96 142 l4 -3', role: 'ambient' },
    shadow(80, 176, 40),
  ],

  // Shimanu's oval head from behind and a little to her left, her long hair
  // tied tightly back at the nape, the tie in tint, above the collar of her
  // maid's robe: Queen Oito's maid, first seen in chapter 360 (named in
  // 412). Where the tie sits is a convention.
  'shimanu': [
    { d: 'M52 104 C44 72 56 36 80 36 C104 36 114 66 108 104' },
    { d: TURNED_EAR },
    {
      d: 'M56 62 C64 80 70 94 76 101 M80 37 C80 62 82 86 82 101 M102 52 C98 72 92 90 88 101',
      role: 'soft',
    },
    { d: 'M104 66 l5 -4 M106 80 l5 -4', role: 'ambient' },
    { d: 'M74 100 Q82 106 90 100 V107 Q82 113 74 107 Z', role: 'accent' },
    { d: ROBE_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Rihan's queue from behind, the braid down the back of his army jacket
  // and its tie in tint: one of Benjamin's soldiers, first seen in chapter
  // 358 (named in 374).
  'rihan': RIHAN,

  // Saquelle's head from behind and a little to his left, the short fair
  // hair in tint, and his thick neck in the stand-up collar of his Kakin
  // army jacket: one of Benjamin's soldiers, first seen in chapter 358
  // (named in 413), posted with Marayam. The collar's shape is a
  // convention: the wiki gives the army only a jacket, pants and boots.
  'saquelle': [
    { d: 'M50 84 C49 92 50 98 52 104 M109 86 C109 94 109 100 108 104' },
    {
      d: 'M50 84 C47 62 60 46 80 46 C101 46 112 64 109 86 C96 80 66 78 50 84 Z',
      role: 'accent',
    },
    { d: 'M62 58 l3 6 M76 50 l2 7 M90 52 l-1 7 M100 60 l-2 6', role: 'soft' },
    { d: TURNED_EAR },
    { d: 'M52 104 L50 126 M108 104 L110 128' },
    { d: 'M50 116 Q79 128 110 118 M50 126 Q79 138 110 128' },
    { d: 'M12 182 C14 148 30 132 50 126 M148 182 C148 152 134 134 110 128' },
    { d: 'M126 150 l8 -6 M132 164 l8 -6 M136 178 l7 -5', role: 'ambient' },
    shadow(80, 190, 60),
  ],

  // Kanjidol's fist round a knife held point up, out of the sleeve of his
  // Kakin army zipper jacket, the blade in 3/4 with its far face hatched and
  // the guard in tint: he kills Luzurus's guards in their bunks with it,
  // chapter 414 (named in 415). Which hand holds it is a convention.
  'kanjidol': [
    { d: 'M6 196 L50 142 M32 200 L72 152' },
    { d: ellipse(61, 147, 15, 6), transform: 'rotate(-50 61 147)' },
    { d: 'M20 182 l8 4 M32 168 l8 4', role: 'soft' },
    {
      d: 'M60 128 C58 112 70 104 86 106 C100 108 104 120 102 132 C100 146 88 152 74 150 C64 148 60 140 60 128 Z',
    },
    {
      d: 'M64 118 Q72 114 80 118 M64 130 Q72 126 82 130 M66 142 Q74 138 84 142 M90 110 C98 110 102 118 96 124 L84 126',
      role: 'soft',
    },
    {
      d: 'M66 106 L70 102 L104 92 L100 96 Z M66 106 L100 96 L102 102 L70 112 Z',
      role: 'accent',
    },
    { d: 'M80 100 L104 24 L110 30 L96 96' },
    { d: 'M104 24 L88 98', role: 'soft' },
    { d: 'M98 52 l4 3 M96 64 l4 3 M93 76 l4 3 M90 88 l4 3', role: 'ambient' },
    { d: 'M26 188 l6 -4 M36 194 l6 -4', role: 'ambient' },
  ],

  // Zhang Lei's coin tilted in 3/4 so its rim shows, held up between finger
  // and thumb out of the sleeve of Coventoba's Kakin army jacket, the design
  // on its face in tint: he picks up the first coin and keeps it in his
  // pocket, chapter 374 (named in 417). The number on it is lettering, and
  // the flower is the convention of Zhang Lei's coin, a frame check.
  'coventoba': [
    { d: ellipse(84, 62, 30, 23), transform: 'rotate(-15 84 62)' },
    {
      d: 'M109.2 47.1 L112.2 52.1 L114.5 55.5 L116 59.2 L116.6 63.2 L116.3 67.3 L115.1 71.4 L113 75.3 L110.2 79 L106.6 82.4 L102.5 85.2 L97.9 87.5 L93 89.2 L87.8 90.2 L82.7 90.5 L77.7 90.1 L72.9 89 L68.6 87.2 L64.9 84.8 L61.8 81.9 L59.5 78.5 L58 74.8 L55 69.8',
    },
    {
      d: ellipse(84, 62, 24, 18),
      role: 'soft',
      transform: 'rotate(-15 84 62)',
    },
    {
      d: `${ellipse(82.3, 55.6, 4.5, 3.6)} ${ellipse(91.4, 57.9, 4.5, 3.6)} ${ellipse(90.3, 65.8, 4.5, 3.6)} ${ellipse(80.5, 68.5, 4.5, 3.6)} ${ellipse(75.6, 62.1, 4.5, 3.6)}`,
      role: 'accent',
    },
    { d: 'M100 86 l6 -4 M108 80 l5 -4 M90 89 l6 -4', role: 'ambient' },
    { d: 'M30 196 L40 150 L74 160 L66 200' },
    {
      d: 'M40 150 C46 132 56 116 62 102 Q66 94 72 98 Q76 102 72 108 L68 122 M74 160 C86 150 98 134 104 114 Q106 106 100 104 Q94 104 92 110 L86 126',
    },
    { d: 'M46 168 L68 176 M42 182 L64 190', role: 'soft' },
  ],
} satisfies Drawings

/** The phase 5 records whose drawing changes in Kakin's chapters (#1158). */
export const kakinPhaseFiveRedrawn: Redrawings = {
  musse: [
    // The same jacket shoulder, empty, the owl gone, and his handgun dropped
    // below it in tint: Camilla's Cat's Name crushes the life out of him and
    // Benjamin inherits Secret Window, chapter 373. Camilla picks the gun up
    // after his death.
    {
      ...KAKIN,
      chapter: 373,
      value: [
        ...moved(MUSSE_JACKET, 'translate(0 -30)'),
        {
          d: 'M52 176 H104 L106 168 H56 Z M84 176 L80 188 H90 L94 176',
          role: 'accent',
        },
        { d: 'M2 192 H158', role: 'ambient', dashed: true },
      ],
    },
  ],
  morena: [
    // The same crown of thorns and the lines of Contagion made smaller, and
    // under the crown the curve of her brow with two parallel scars in
    // tint: the mark every Carnival Orphan is given at birth (no face is
    // drawn; where the marks run is a frame check). She tells Borksen she
    // is not the real Morena Prudo, who lies in a grave under her name,
    // but a Carnival Orphan sorted as "flesh", chapter 408.
    {
      ...KAKIN,
      chapter: 408,
      value: [
        ...moved(
          [...softened(MORENA_CROWN), CONTAGION],
          'translate(80 60) scale(0.72) translate(-80 -110)',
        ),
        {
          d: 'M40 84 C36 110 44 136 56 150 M120 84 C124 110 116 136 104 150',
          role: 'soft',
        },
        {
          d: 'M82 84 C88 104 94 122 98 142 M90 82 C96 102 102 120 106 140',
          role: 'accent',
        },
        shadow(80, 186, 44),
      ],
    },
  ],
  shikaku: [
    // The same hands made smaller and dropped below where the card was, and
    // the card's frame left in broken pieces, in tint: his body, with
    // Sumidori's soul in it, shoots itself at the door of Room 1007,
    // chapter 386.
    {
      ...KAKIN,
      chapter: 386,
      value: [
        ...moved(SHIKAKU_HAND, 'matrix(0.7 0 0 0.7 -6 72.5)'),
        ...moved(SHIKAKU_HAND, 'matrix(-0.7 0 0 0.7 166 72.5)'),
        {
          d: 'M53 66 H68 M78 66 H107 V80 M107 92 V122 H92 M80 122 H53 V106 M53 94 V74',
          role: 'accent',
          transform: SHIKAKU_TILT,
        },
      ],
    },
  ],
  rihan: [
    // The same queue made small, and above it his two hands held up facing
    // each other, the aura he focuses between them drawn as open lines: he
    // conjures Predator, which swallows Salé-salé's Guardian Spirit Beast
    // and its clone, chapter 381. The Predator's shape is a frame check, so
    // it is not drawn.
    {
      ...KAKIN,
      chapter: 381,
      value: [
        ...moved(RIHAN, BESIDE_THE_BEAST),
        ...moved(RIHAN_HAND, 'translate(0 -6)'),
        ...moved(RIHAN_HAND, 'matrix(-1 0 0 1 160 -6)'),
        {
          d: 'M68 56 C74 46 86 46 92 56 M64 72 C72 62 88 62 96 72 M68 88 C74 80 86 80 92 88 M80 44 C76 34 84 26 80 14',
          role: 'ambient',
        },
      ],
    },
  ],
}
