import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import {
  BESIDE_THE_BEAST,
  FALLEN,
  FROM_BEHIND,
  SKULL,
  TURNED_BACK,
  TURNED_BODY,
  TURNED_COLLAR,
  TURNED_EAR,
  TURNED_SKULL,
} from './kakin-phase-2'

/**
 * The shoulders and sleeves of a top with no one in it, turned a little to
 * its left so the near side is the wider: the sleeves down to their cuffs
 * and back up the inside of the arms. Each record draws its own collar,
 * fastening and body below.
 */
const TURNED_SLEEVES =
  'M60 50 Q44 54 34 64 C24 80 22 108 22 148 H38 L42 102 M100 48 Q112 52 120 60 C128 76 132 104 132 144 H120 L118 102'

/**
 * The same top down to its hem, the hem curving round the body, the seam
 * on the far side and the far sleeve and side hatched where they turn away.
 */
const TURNED_TOP: Stroke[] = [
  { d: TURNED_SLEEVES },
  { d: 'M42 102 L40 166 Q80 176 118 166 L118 102' },
  { d: 'M108 104 L110 168', role: 'soft' },
  {
    d: 'M123 112 l6 -4 M125 126 l6 -4 M125 140 l6 -4 M110 150 l6 -4',
    role: 'ambient',
  },
  shadow(80, 184, 56),
]

/** The far side of a turned head (`TURNED_SKULL`), hatched where it turns away. */
const TURNED_FAR_SIDE: Stroke = {
  d: 'M104 66 l5 -4 M106 80 l5 -4 M106 94 l5 -4',
  role: 'ambient',
}

/**
 * The front door of Room 3101 in 3/4, seen from the corridor: the frame,
 * its inner edge, and the door swung open into the room.
 */
const ROOM_3101_DOOR: Stroke[] = [
  { d: 'M40 30 H112 V160 H40 Z' },
  { d: 'M48 38 H104 V160', role: 'soft' },
  { d: 'M48 38 L78 46 V166 L48 160 Z' },
]

/** Sarasa's heart-shaped purse, its strap and its seam: she always has it. */
const SARASA_PURSE: Stroke[] = [
  {
    d: 'M80 150 C56 132 40 116 40 98 C40 84 52 76 62 78 C70 80 76 86 80 92 C84 86 90 80 98 78 C108 76 120 84 120 98 C120 116 104 132 80 150 Z',
    role: 'accent',
  },
  {
    d: 'M80 140 C62 126 50 114 50 99 C50 90 58 86 64 88 C70 90 76 96 80 102 C84 96 90 90 96 88 C102 86 110 90 110 99 C110 114 98 126 80 140',
    role: 'soft',
  },
  { d: 'M48 86 C46 50 114 50 112 86' },
  { d: `M80 102 V114 ${circle(80, 117, 3)}`, role: 'soft' },
  { d: 'M104 110 l6 -4 M100 122 l6 -4', role: 'ambient' },
]

/**
 * Terebellum's tracksuit top in 3/4: the stand collar, the zip down the
 * front in tint with its pull, the cuffs and the waistband.
 */
const TRACKSUIT: Stroke[] = [
  ...TURNED_TOP,
  { d: 'M60 50 L60 36 Q80 28 100 34 L100 48 Q80 56 60 50 Z' },
  { d: 'M84 40 L86 172 M86 66 H90 V74 H86', role: 'accent' },
  { d: 'M22 140 H38 M120 136 H132 M40 158 Q80 168 118 158', role: 'soft' },
]

/**
 * Fukataki's head from behind and a little to her left: the hair pulled
 * back into a bun at the back of her head, the bun held in a hairnet and
 * the pin through it in tint, over the collar of her maid's black dress,
 * hatched.
 */
const FUKATAKI: Stroke[] = [
  { d: TURNED_SKULL },
  {
    d: 'M56 62 C64 70 68 76 70 82 M78 47 C78 58 78 66 79 73 M104 64 C100 70 98 74 97 79',
    role: 'soft',
  },
  { d: circle(84, 88, 15) },
  {
    d: 'M84 73 L98.8 85.4 M75.9 75.4 L97.9 93.8 M71.1 80.4 L93.7 99.4 M69 87.8 L86.8 102.7 M69.2 85.4 L84 73 M70.1 93.8 L92.1 75.4 M74.3 99.4 L96.9 80.4 M81.2 102.7 L99 87.8',
    role: 'soft',
  },
  { d: `M64 78 L108 100 ${circle(60.6, 76.3, 3.5)}`, role: 'accent' },
  { d: TURNED_EAR },
  { d: TURNED_COLLAR },
  {
    d: 'M24 168 l10 -8 M30 178 l12 -9 M36 150 l10 -8 M108 136 l8 -6 M110 160 l8 -6',
    role: 'ambient',
  },
]

/**
 * Lynch's head from behind and a little to her left: the fair hair
 * gathered into a tube that spirals down the back of her head, in tint,
 * its turns wrapping round it, the locks from her forehead falling to her
 * shoulders, and the high collar of her sleeveless top round her neck.
 */
const LYNCH: Stroke[] = [
  { d: TURNED_SKULL },
  {
    d: 'M72 60 C72 50 94 50 94 60 V104 C94 114 72 114 72 104 Z',
    role: 'accent',
  },
  {
    d: 'M72 66 C78 74 88 72 94 64 M72 78 C78 86 88 84 94 76 M72 90 C78 98 88 96 94 88 M72 102 C78 110 88 108 94 100',
    role: 'soft',
  },
  { d: 'M50 98 C48 110 50 120 44 130 M108 98 C110 110 108 118 112 128' },
  { d: 'M58 110 Q78 120 99 112', role: 'soft' },
  { d: TURNED_COLLAR },
  TURNED_FAR_SIDE,
]

/**
 * Quorolle's long black trench coat in 3/4, hatched, open on the black
 * round-neck top under it, the coat's collar in tint.
 */
const QUOROLLE_COAT: Stroke[] = [
  { d: TURNED_SLEEVES },
  { d: 'M42 102 L38 176 Q80 186 120 176 L118 102' },
  {
    d: 'M60 50 L44 60 L62 88 L70 72 L76 76 M100 48 L114 56 L100 86 L94 70 L88 74',
    role: 'accent',
  },
  { d: 'M76 76 L81 180 M88 74 L88 182' },
  { d: 'M66 50 Q80 64 96 48 M76 76 Q82 80 88 74', role: 'soft' },
  {
    d: 'M48 116 l10 -8 M46 132 l14 -11 M46 150 l16 -12 M46 164 l18 -14 M96 120 l14 -11 M96 140 l18 -14 M98 160 l16 -12 M124 110 l6 -4 M126 124 l6 -4 M126 138 l6 -4',
    role: 'ambient',
  },
  shadow(80, 190, 56),
]

/**
 * Borksen's light hair from behind, falling past her ears and curling up at
 * the ends, in tint, over a soldier's collar.
 */
const BORKSEN: Stroke[] = [
  {
    d: 'M56 98 C50 66 62 52 80 52 C98 52 110 66 104 98 C106 104 112 104 114 98 M56 98 C54 104 48 104 46 98',
    role: 'accent',
  },
  { d: 'M68 58 C64 74 62 86 62 98 M92 58 C96 74 98 86 98 98', role: 'soft' },
  ...FROM_BEHIND,
]

/** The floor a fallen guard or servant lies on, and the shadow on it. */
const FLOOR: Stroke[] = [
  { d: 'M4 180 H156', role: 'ambient', dashed: true },
  shadow(80, 186, 50),
]

export const KAKIN_PHASE_4_DRAWINGS = {
  // Tajao's head from behind and a little to his left: the curtain
  // haircut parted in the middle, its dyed lengths in tint, and below them
  // the shorter hair of his nape in its natural dark colour, hatched: the
  // Cha-R vice boss, chapter 384.
  'tajao': [
    {
      d: 'M50 98 C42 64 58 44 80 44 C104 44 114 64 108 100 C96 94 88 94 80 97 C70 94 60 94 50 98 Z',
      role: 'accent',
    },
    {
      d: 'M82 44 C78 52 78 58 80 64 M66 50 C58 64 56 80 58 94 M80 64 C76 74 74 86 74 95 M96 52 C102 66 104 82 102 96',
      role: 'soft',
    },
    { d: 'M56 97 L58 108 Q80 116 99 110 L102 97' },
    {
      d: 'M62 106 l6 -8 M72 110 l6 -9 M82 110 l6 -9 M92 108 l6 -8',
      role: 'ambient',
    },
    ...TURNED_BODY,
  ],

  // Famule's short permed hair from behind and a little to his left, its
  // curly outline in tint, the far side of the curls hatched, over the
  // collar of his black suit: one of Queen Duazul's guards, first seen in
  // chapter 386 (named in 389).
  'famule': [
    {
      d: 'M50 100 Q45.3 92.4 48.6 84.2 Q45.4 77.1 50.2 70.9 Q48.6 64.1 54.5 60.2 Q54.8 53.8 61.1 52.4 Q63.5 46.5 69.7 47.6 Q74.2 42.9 80 46 Q85.6 42.9 90 47.6 Q96 46.6 97.9 52.4 Q104 54 103.8 60.2 Q109.4 64.3 107.4 70.9 Q112.1 77.1 108.8 84.2 Q112.4 92.3 108 100',
      role: 'accent',
    },
    {
      d: 'M58 66 q4 -4 8 0 M74 58 q4 -4 8 0 M62 82 q4 -4 8 0 M78 74 q4 -4 8 0 M66 96 q4 -4 8 0 M80 90 q4 -4 8 0',
      role: 'soft',
    },
    { d: 'M96 66 l7 -5 M98 80 l7 -5 M96 94 l8 -6', role: 'ambient' },
    { d: 'M50 100 Q78 108 108 100', role: 'soft' },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Fukataki's hair pulled back into a bun at the back of her head, the bun
  // held in a hairnet and the pin through it in tint, over the black dress
  // of her maid's uniform: Camilla's majordomo, chapter 389.
  'fukataki': [...FUKATAKI, ...TURNED_BODY],

  // Taler's head from behind and a little to their left: the straight fair
  // hair down to the neck, combed behind the ear, the line where it tucks
  // behind the ear in tint, over the collar of the uniform of Camilla's
  // private guards: sent to curse Marayam, chapter 389. The curse is never
  // cast on the page, so it is not drawn; the collar's shape is a convention.
  'taler': [
    { d: TURNED_SKULL },
    { d: 'M50 104 Q79 113 108 104' },
    {
      d: 'M66 50 C62 68 62 88 64 108 M80 47 C79 70 79 90 80 111 M95 51 C99 70 99 88 97 108',
      role: 'soft',
    },
    { d: TURNED_EAR },
    { d: 'M50 60 C62 66 62 92 52 104', role: 'accent' },
    TURNED_FAR_SIDE,
    { d: TURNED_COLLAR },
    ...TURNED_BODY,
  ],

  // The infusion set Zakuro always carries, two bags of blood in tint
  // hanging from its hook, the lines joining into the drip chamber and
  // down to the needle; his own blood moves with Nen, a few drops on the
  // ground: a Xi-Yu member, chapter 390. How he carries the set is a frame
  // check.
  'zakuro-custard': [
    { d: 'M54 24 H106 M80 24 V14 M60 24 V32 M100 24 V32' },
    {
      d: 'M46 34 H74 V86 Q74 94 66 94 H54 Q46 94 46 86 Z M86 34 H114 V86 Q114 94 106 94 H94 Q86 94 86 86 Z',
      role: 'accent',
    },
    { d: 'M50 58 H70 M90 58 H110', role: 'soft' },
    { d: 'M60 94 V104 L80 112 L100 104 V94' },
    { d: 'M74 112 H86 V132 H74 Z' },
    { d: 'M80 132 C80 150 56 150 54 162 C52 172 66 176 74 170 L88 164' },
    { d: 'M76 120 H84 M116 168 h0.01 M126 160 h0.01 M132 172 h0.01' },
    {
      d: 'M48 40 l4 -4 M48 52 l4 -4 M88 40 l4 -4 M88 52 l4 -4',
      role: 'ambient',
    },
    shadow(80, 184, 54),
  ],

  // Lynch's spiralled tube of fair hair in 3/4, in tint, the locks falling
  // to her shoulders and the high collar of her sleeveless top, and beside
  // her head two open lines for Body and Soul, the voice her punches make
  // answer, which only she and her target hear: a Xi-Yu member, chapter
  // 390. The ability has no object, so the lines are a convention.
  'lynch-fullbokko': [
    ...LYNCH,
    {
      d: 'M32 62 C24 72 24 90 32 100 M20 54 C10 68 10 94 20 108',
      role: 'ambient',
    },
    ...TURNED_BODY,
  ],

  // Tevelares's head from behind and a little to his left: the hair
  // slicked back, its long ends falling past his ears in tint, over the
  // collar of his jacket: a Heil-Ly member, chapter 391. The Nen ability he
  // gains at level 51 in chapter 405 is never shown, so it is not drawn.
  'tevelares': [
    { d: 'M50 98 C44 68 58 46 80 46 C102 46 112 66 108 98' },
    {
      d: 'M54 66 C62 78 64 94 62 110 M68 52 C74 70 76 92 74 114 M86 48 C90 68 90 92 87 116 M102 58 C104 74 103 92 101 110',
      role: 'soft',
    },
    {
      d: 'M50 98 C50 112 46 122 40 130 M50 98 C56 110 58 122 56 132 M108 98 C108 112 112 122 118 128 M108 98 C102 110 100 122 102 132',
      role: 'accent',
    },
    TURNED_FAR_SIDE,
    { d: TURNED_COLLAR },
    ...TURNED_BODY,
  ],

  // Quorolle's high-collared jacket in 3/4, the collar in tint with its
  // inner face showing, the front open down his chest with the inside of
  // its edges showing: a Heil-Ly member, chapter 391. The Nen ability he
  // gains at level 51 in chapter 405 is never shown, so it is not drawn.
  'quorolle': [
    ...TURNED_TOP,
    { d: 'M60 50 L56 28 Q80 20 102 26 L100 48', role: 'accent' },
    { d: 'M62 46 L60 32 Q80 26 98 30 L97 44', role: 'soft' },
    { d: 'M60 50 L84 118 M100 48 L88 118' },
    { d: 'M66 52 L84 102 M95 52 L88 100', role: 'soft' },
  ],

  // Padaille's right hand turned into a hammer, out of the plain sleeve of
  // his shirt, its open cuff seen end on, the head a block in 3/4,
  // its front face in tint and the far face hatched: his ability, shown as
  // he attacks Hinrigh in chapter 391. He dies in that chapter, the one his
  // record opens in, so his death has no stage (owner, #1324).
  'padaille': [
    { d: 'M4 118 L54 102 M12 150 L62 132' },
    { d: 'M54 102 A7 16 -18 0 1 62 132 A7 16 -18 0 1 54 102', role: 'soft' },
    { d: 'M46 105 A7 15 -18 0 0 54 135', role: 'soft' },
    { d: 'M60 112 L102 98 M64 124 L106 110' },
    { d: 'M98 74 L122 68 L134 120 L110 126 Z', role: 'accent' },
    { d: 'M98 74 L108 66 L132 60 L122 68 M132 60 L144 112 L134 120' },
    { d: 'M126 76 l6 -5 M129 90 l6 -5 M132 104 l6 -5', role: 'ambient' },
    { d: 'M16 144 l8 -6 M28 140 l8 -6 M40 136 l8 -6', role: 'ambient' },
    shadow(80, 172, 60),
  ],

  // Misha Hao's cropped leather jacket in 3/4, the zips down its sleeves in
  // tint, her belt below, and round it open lines for La Vie en rose, the
  // post-mortem Nen that keeps her working: the dead Xi-Yu undertaker,
  // riding on Padaille's back, chapter 392. She is already dead when her
  // record opens, so there is no death stage. Her thigh-high boots are left
  // out: they would need her legs, and the drawing is the jacket.
  'misha-hao': [
    { d: TURNED_SLEEVES },
    { d: 'M42 102 L42 112 Q80 120 118 110 L118 102' },
    {
      d: 'M60 50 L54 70 L66 74 L80 58 M100 48 L106 68 L94 72 L84 58',
      role: 'soft',
    },
    { d: 'M80 58 L84 114' },
    { d: 'M29 84 L27 144 M126 82 L128 140', role: 'accent' },
    {
      d: 'M42 114 Q80 122 118 112 V120 Q80 130 42 122 Z M74 119 V128 M88 117 V126',
    },
    { d: 'M108 70 l8 -6 M110 86 l8 -6 M106 100 l8 -6', role: 'ambient' },
    {
      d: 'M14 40 C8 60 8 80 12 96 M146 40 C152 60 152 80 148 96 M60 22 Q80 14 100 22',
      role: 'ambient',
    },
    shadow(80, 160, 50),
  ],

  // Maizan's head from behind and a little to his left under the black
  // round helmet of a Kakin corporal, hatched, its rim in tint, over the
  // collar of his army jacket: the corporal who sells the Mafia the hidden
  // room, chapter 393. He walks into Room 3101 and vanishes in that same
  // chapter, the one his record opens in, and his fate is not told, so it
  // has no stage.
  'maizan': [
    { d: 'M44 94 C42 60 60 40 80 40 C102 40 116 60 114 92' },
    { d: 'M40 94 Q78 106 118 92 L118 99 Q78 113 40 101 Z', role: 'accent' },
    {
      d: 'M56 62 l10 -8 M56 80 l18 -14 M70 86 l22 -17 M90 86 l18 -14 M102 70 l8 -6',
      role: 'ambient',
    },
    { d: 'M54 106 V112 M100 106 V112' },
    { d: 'M56 112 C66 124 92 126 102 114' },
    { d: TURNED_COLLAR },
    ...TURNED_BODY,
  ],

  // Daemon's head from behind and a little to his left: the long hair
  // slicked back, its swept-back line from the brow in tint, over the
  // collar of his long-sleeved black shirt, hatched: a Heil-Ly member,
  // chapter 393. The Nen ability he gains at level 51 in chapter 405 is
  // never shown, so it is not drawn.
  'daemon': [
    {
      d: 'M50 100 C44 66 58 46 80 46 C102 46 112 66 108 100 C108 112 106 120 104 128 Q80 134 56 128 C52 120 50 112 50 100',
    },
    { d: 'M48 70 C60 54 84 52 96 66 C104 78 104 100 100 126', role: 'accent' },
    {
      d: 'M58 64 C68 76 70 100 68 130 M76 56 C84 72 86 100 84 132',
      role: 'soft',
    },
    TURNED_FAR_SIDE,
    { d: TURNED_COLLAR, role: 'soft' },
    {
      d: 'M24 150 l8 -6 M28 164 l10 -7 M34 176 l10 -7 M42 140 l8 -6',
      role: 'ambient',
    },
    ...TURNED_BODY,
  ],

  // Gelato's head from behind and a little to her left: her hair dark and
  // short on her right, hatched, and on her left a light lock in tint over
  // the rest, dark and longer: a Heil-Ly member, chapter 393.
  'gelato': [
    { d: 'M82 46 C102 46 112 66 108 100 H82' },
    { d: 'M88 62 l12 -8 M88 76 l16 -11 M88 90 l16 -11', role: 'ambient' },
    { d: 'M82 46 C60 46 44 68 50 104 C50 116 48 124 44 134 H64 L62 104' },
    {
      d: 'M82 46 C66 50 56 62 56 82 L74 88 C74 70 76 58 82 46 Z',
      role: 'accent',
    },
    { d: 'M82 46 V100', role: 'soft' },
    { d: 'M52 110 l6 -5 M50 122 l8 -6 M54 132 l8 -6', role: 'ambient' },
    ...TURNED_BODY,
  ],

  // A burger in 3/4, the top bun, the filling and the bottom bun, with a
  // bite out of it in tint: Perigord is eating in a burger joint on Tier 3
  // when he spots the Xi-Yu, and goes on eating after he kicks Lynch,
  // chapter 390 (named in 393). What is in the burger is not drawn.
  'perigord': [
    { d: 'M38 98 C36 62 104 58 116 76' },
    {
      d: 'M116 76 Q108 80 112 86 Q106 92 114 98 Q110 104 120 108',
      role: 'accent',
    },
    { d: 'M38 98 Q60 106 96 104' },
    { d: 'M36 104 Q60 114 96 110 L118 108 M36 104 V112 Q70 124 120 116 V108' },
    { d: 'M38 118 Q80 132 120 120 L118 130 Q80 146 42 130 Z' },
    { d: 'M58 76 Q64 70 72 70', role: 'soft' },
    { d: 'M100 122 l8 -5 M96 134 l8 -5', role: 'ambient' },
    shadow(80, 160, 58),
  ],

  // Bille's head from behind and a little to his left: the bushy hair on
  // top, its outline in tint, the shaved sides below it hatched where they
  // turn away, the ear showing, over the collar of his jacket: a Heil-Ly
  // member, chapter 393. The ability he gains at level 21 in chapter 394 is
  // never shown, so it is not drawn.
  'bille': [
    { d: 'M50 104 C46 88 48 78 53 70 M108 104 C110 90 110 80 107 70' },
    {
      d: 'M54 72 Q44 62 50 52 Q46 40 58 36 Q60 24 72 24 Q80 16 90 22 Q102 20 106 32 Q116 38 112 50 Q118 60 108 68 Q102 78 92 74 Q82 80 72 76 Q60 82 54 72 Z',
      role: 'accent',
    },
    {
      d: 'M58 52 q3 -5 8 -4 M70 36 q4 -4 9 -2 M94 30 q5 0 7 5 M104 52 q-1 6 -6 8',
      role: 'soft',
    },
    {
      d: 'M100 80 l6 -5 M102 92 l6 -5 M102 104 l5 -4 M52 92 l4 -3 M53 102 l4 -3',
      role: 'ambient',
    },
    { d: TURNED_EAR },
    { d: TURNED_COLLAR },
    ...TURNED_BODY,
  ],

  // The front door of Room 3101 in 3/4, ajar on the dark beyond it,
  // hatched, the handle in tint: the trap Voconte connects to the
  // Heil-Ly's hideout, chapters 393 and 394. No number on the door.
  'voconte': [
    ...ROOM_3101_DOOR,
    { d: circle(72, 104, 3), role: 'accent' },
    {
      d: 'M84 50 l14 -10 M84 70 l18 -13 M84 90 l18 -13 M84 110 l18 -13 M84 130 l18 -13 M84 150 l18 -13',
      role: 'ambient',
    },
    { d: 'M8 160 H152', role: 'ambient', dashed: true },
    shadow(80, 172, 50),
  ],

  // The cup of water for Water Divination in 3/4, taller than it is wide,
  // the water line round it and the leaf floating on it in tint, the far
  // wall hatched: Matvere hands Bille the cup, chapter 394.
  'matvere': [
    { d: ellipse(80, 50, 28, 7) },
    { d: 'M52 50 L58 150 Q80 160 102 150 L108 50' },
    { d: ellipse(80, 70, 26, 6), role: 'soft' },
    {
      d: 'M66 70 C70 62 86 62 94 68 C88 76 72 78 66 70 Z M66 70 L94 68',
      role: 'accent',
    },
    {
      d: 'M98 84 l5 -3 M99 100 l5 -3 M99 116 l5 -3 M100 132 l4 -3',
      role: 'ambient',
    },
    shadow(80, 168, 38),
  ],

  // The same open door of Room 3101 (`ROOM_3101_DOOR`), and Hinrigh's knife
  // lying on the floor just inside it, its grip in tint: Tassi walks in to
  // fetch it and vanishes, chapter 394. He is killed in that chapter, the
  // one his record opens in, so his death has no stage (owner, #1324).
  'tassi': [
    ...ROOM_3101_DOOR,
    { d: circle(72, 104, 3), role: 'soft' },
    {
      d: 'M84 50 l14 -10 M84 70 l18 -13 M84 90 l18 -13 M84 110 l18 -13',
      role: 'ambient',
    },
    { d: 'M80 156 L98 148 L100 152 L82 158 Z' },
    { d: 'M98 146 L110 141 L112 146 L100 152 Z', role: 'accent' },
    { d: 'M8 160 H152', role: 'ambient', dashed: true },
    shadow(80, 172, 50),
  ],

  // Terebellum's tracksuit top in 3/4, its zip in tint: a Heil-Ly member,
  // chapter 394. His ability is first shown in chapter 399, so it is not
  // drawn. The collar and the zip are conventions: the wiki says only a
  // full-body tracksuit.
  'terebellum': TRACKSUIT,

  // Chiffon Toto's head from behind and a little to her left: the fair
  // hair falling just below her face, and the blunt edge of her bangs
  // showing at the side in tint: a Heil-Ly seamstress, chapter 394.
  'chiffon-toto': [
    { d: 'M50 108 C42 70 58 46 80 46 C102 46 114 68 108 108 Q79 116 50 108' },
    { d: 'M50 58 C42 60 38 68 38 80 H52', role: 'accent' },
    {
      d: 'M64 52 C58 70 58 90 60 110 M80 47 V113 M96 52 C102 70 102 90 99 110',
      role: 'soft',
    },
    TURNED_FAR_SIDE,
    ...TURNED_BODY,
  ],

  // Montblanc Toto's head from behind and a little to her left: the fair
  // hair divided and tied into two pigtails that hang down to her neck, the
  // dark fabric ties hatched, their edges in tint: a Heil-Ly member,
  // chapter 394.
  'montblanc-toto': [
    { d: TURNED_SKULL },
    { d: 'M82 47 V100', role: 'soft' },
    {
      d: 'M60 56 C62 68 60 78 56 86 M100 56 C100 68 102 78 104 86',
      role: 'soft',
    },
    {
      d: 'M50 92 C42 100 40 110 44 122 L50 126 L56 120 C54 112 56 102 60 96 M106 90 C114 98 116 108 112 120 L106 124 L102 118 C104 110 104 100 102 94',
    },
    {
      d: 'M48 82 L60 86 L58 96 L46 92 Z M102 84 L110 80 L112 90 L104 94 Z',
      role: 'accent',
    },
    { d: 'M50 90 l6 -6 M104 92 l6 -6', role: 'ambient' },
    TURNED_FAR_SIDE,
    ...TURNED_BODY,
  ],

  // Sodom's unkempt hair from behind, its ragged outline in tint: a
  // Heil-Ly back-alley doctor, chapter 394.
  'sodom': [
    {
      d: 'M56 106 L50 96 L56 90 L48 80 L58 76 L52 62 L64 64 L64 50 L74 56 L80 44 L86 56 L96 50 L96 64 L108 62 L102 76 L112 80 L104 90 L110 96 L104 106',
      role: 'accent',
    },
    {
      d: 'M66 72 l4 8 M80 64 v10 M92 72 l-4 8 M72 88 l2 8 M88 88 l-2 8',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Borksen's light hair from behind, falling past her ears and curling up
  // at the ends, in tint, over a soldier's collar: a provisional Hunter in
  // Tserriednich's army, chapter 394.
  'borksen': BORKSEN,

  // Otocin's light hair from behind, parted on his left, in tint, over a
  // soldier's collar: one of Tserriednich's soldiers, chapter 394.
  'otocin': [
    { d: 'M56 102 C50 70 62 54 80 54 C98 54 110 70 104 102', role: 'accent' },
    { d: 'M68 56 C66 70 66 84 64 98', role: 'soft' },
    {
      d: 'M68 62 C80 66 92 74 100 88 M68 74 C78 80 88 88 94 100',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Gipper's buzz cut from behind, the stubble dotted and the round of his
  // head in tint, over a soldier's collar: the corporal leading the search
  // for the Mafia, chapter 394.
  'gipper': [
    { d: SKULL, role: 'accent' },
    {
      d: dots([
        [68, 70],
        [80, 66],
        [92, 70],
        [64, 84],
        [76, 80],
        [88, 80],
        [96, 86],
        [70, 96],
        [82, 94],
        [92, 98],
      ]),
      role: 'soft',
    },
    {
      d: 'M54 90 C48 88 46 96 50 102 M106 90 C112 88 114 96 110 102',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Momolly's long dark hair from behind, hatched, its outline in tint,
  // over a soldier's collar: one of Tserriednich's soldiers, chapter 394.
  'momolly': [
    {
      d: 'M54 128 C48 84 60 54 80 54 C100 54 112 84 106 128 Z',
      role: 'accent',
    },
    {
      d: 'M58 80 l14 -10 M56 98 l22 -16 M58 114 l30 -22 M70 122 l32 -24 M88 124 l18 -14',
      role: 'ambient',
    },
    ...FROM_BEHIND,
  ],

  // Father Lisores's priest's hat in 3/4, a round crown on a broad brim,
  // the band in tint: he welcomes the children to the church in Meteor
  // City, chapter 395. The hat's shape is a frame check.
  'lisores': [
    { d: ellipse(80, 118, 64, 18) },
    { d: 'M46 112 C44 60 116 60 114 112' },
    { d: 'M44 104 Q80 116 116 104 V112 Q80 124 44 112 Z', role: 'accent' },
    { d: ellipse(80, 118, 50, 12), role: 'soft' },
    { d: 'M98 84 l6 -4 M104 94 l6 -4 M108 104 l6 -4', role: 'ambient' },
    shadow(80, 154, 56),
  ],

  // Sarasa's heart-shaped purse in tint, its strap and its clasp: she is
  // always seen with it, chapter 395.
  'sarasa': [...SARASA_PURSE, shadow(80, 166, 40)],

  // The book Sheila keeps reading, The Swashbuckling Adventures of Dino
  // Hunter, open in 3/4, its cover in tint, and her dark headband with its
  // hearts before it: chapter 395. No title.
  'sheila': [
    { d: 'M22 98 L80 112 L138 94 L132 140 L80 156 L28 142 Z', role: 'accent' },
    { d: 'M30 92 L80 104 L130 88 M80 104 V150' },
    {
      d: 'M36 100 L74 110 M36 110 L74 120 M36 120 L74 130 M86 110 L124 98 M86 120 L124 108 M86 130 L124 118',
      role: 'soft',
    },
    { d: 'M26 166 C50 152 110 152 134 166 L130 172 C108 160 52 160 30 172 Z' },
    {
      d: 'M58 160 C56 156 62 154 63 158 C64 154 70 156 68 160 L63 165 Z M92 160 C90 156 96 154 97 158 C98 154 104 156 102 160 L97 165 Z',
      role: 'soft',
    },
    { d: 'M104 126 l6 -4 M112 128 l6 -4', role: 'ambient' },
  ],

  // Renko's broad-brimmed hat with the two horn-like ears standing out of
  // it, in tint, the black crown hatched: the embalmer who restores
  // Sarasa's body, chapter 397.
  'renko': [
    { d: ellipse(80, 122, 66, 16) },
    { d: 'M48 118 C46 80 114 80 112 118' },
    { d: 'M54 92 L42 54 L66 84 M106 92 L118 54 L94 84', role: 'accent' },
    {
      d: 'M60 104 l10 -8 M66 114 l16 -12 M80 116 l16 -12 M94 112 l10 -8',
      role: 'ambient',
    },
    { d: ellipse(80, 122, 52, 10), role: 'soft' },
    shadow(80, 158, 58),
  ],

  // The large book Yokotani carries, lying in 3/4, the bands on its spine
  // in tint: the Heil-Ly lawyer, chapter 399. No title.
  'yokotani': [
    { d: 'M22 96 L100 80 L140 104 L62 122 Z' },
    { d: 'M22 96 V124 L62 152 V122' },
    { d: 'M62 152 L140 134 V104' },
    { d: 'M30 106 L56 124 M30 114 L56 132', role: 'accent' },
    { d: 'M66 130 L136 114 M66 136 L136 120 M66 142 L136 126', role: 'soft' },
    { d: 'M44 98 L96 88 L118 102 L66 114 Z', role: 'soft' },
    { d: 'M34 128 l6 -4 M40 136 l6 -4 M48 142 l6 -4', role: 'ambient' },
    shadow(80, 170, 60),
  ],

  // A hand making a finger gun, out of the black sleeve of his suit, the
  // shirt cuff in tint: Madwig plays a hitman with amnesia who remembers
  // only how to handle a gun, and holds up a finger gun, chapter 400.
  'madwig': [
    { d: 'M6 118 L50 104 L58 130 L14 144 Z' },
    { d: 'M50 104 L60 101 L68 127 L58 130 Z', role: 'accent' },
    {
      d: 'M64 104 L84 98 L84 70 Q84 62 90 62 Q96 62 96 70 L98 96 L136 92 Q144 92 144 99 Q144 105 136 105 L100 108 M100 108 C106 110 108 116 102 120 M102 120 C106 124 104 130 98 130 L72 130 L66 127',
    },
    {
      d: 'M100 108 C94 110 90 114 92 120 M92 120 Q96 124 102 120',
      role: 'soft',
    },
    { d: 'M84 88 Q90 92 96 88 M116 94 V104', role: 'soft' },
    { d: 'M20 138 l8 -6 M32 134 l8 -6 M44 130 l8 -6', role: 'ambient' },
    shadow(80, 168, 58),
  ],

  // Himoncé's light hair from behind, falling past his ears, in tint, over
  // his black suit: one of Tyson's staff, chapter 400.
  'himonce': [
    {
      d: 'M54 108 C48 70 62 52 80 52 C98 52 112 70 106 108 L98 100 L92 106 L80 98 L68 106 L62 100 Z',
      role: 'accent',
    },
    {
      d: 'M68 58 C64 74 64 88 66 100 M92 58 C96 74 96 88 94 100',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Anzel's hair from behind, light on one side, in tint, and dark on the
  // other, hatched: one of Tyson's staff, chapter 400.
  'anzel': [
    { d: 'M80 54 C62 54 52 72 56 104 H80 Z', role: 'accent' },
    { d: 'M80 54 C98 54 108 72 104 104 H80' },
    {
      d: 'M84 64 l12 -8 M84 78 l16 -11 M84 92 l16 -11 M86 102 l14 -10',
      role: 'ambient',
    },
    { d: 'M66 62 C62 76 62 90 64 102', role: 'soft' },
    ...FROM_BEHIND,
  ],

  // Hyuga's rectangular-framed glasses, open in 3/4, the frames in tint:
  // one of Tyson's staff, chapter 400.
  'hyuga': [
    { d: 'M30 92 H72 V116 H30 Z M88 90 H126 V112 H88 Z', role: 'accent' },
    { d: 'M72 102 Q80 96 88 100' },
    { d: 'M30 96 L20 88 L24 128 M126 94 L134 86 L132 124' },
    { d: 'M36 98 l8 -4 M94 96 l8 -4', role: 'soft' },
    { d: 'M60 112 l8 -6 M114 108 l8 -6', role: 'ambient' },
    shadow(78, 140, 54),
  ],

  // The small device with one button, a box in 3/4 with the button domed
  // on its top in tint, that Kaiser hands Steiner to press if the First
  // Prince's men or the army come: chapter 400. Its shape is a frame check.
  'kaiser': [
    { d: 'M30 104 L96 88 L132 108 L66 126 Z' },
    { d: 'M30 104 V122 L66 146 V126 M66 146 L132 128 V108' },
    {
      d: `M66 104 C66 86 98 82 98 98 ${ellipse(82, 101, 16, 5)}`,
      role: 'accent',
    },
    { d: 'M76 96 Q82 92 88 94', role: 'soft' },
    {
      d: 'M76 134 l8 -4 M92 130 l8 -4 M108 126 l8 -4 M120 122 l8 -4',
      role: 'ambient',
    },
    shadow(82, 162, 56),
  ],

  // The church in Meteor City from the front, its arched door in tint:
  // the children watch videos there, chapter 395. The wiki only calls it a
  // large church, so the gabled front, the round window and the tower are
  // drawn by convention and are a frame check. Its faith is not named, so
  // no symbol is drawn.
  'all-faiths-church': [
    { d: 'M30 150 V86 L74 50 L118 86 V150' },
    { d: 'M60 150 V118 C60 100 88 100 88 118 V150', role: 'accent' },
    { d: circle(74, 82, 8), role: 'soft' },
    { d: 'M118 150 V40 H142 V150 M118 40 L130 18 L142 40' },
    { d: 'M124 60 H136 V76 H124 Z', role: 'soft' },
    {
      d: 'M126 94 l10 -8 M126 110 l10 -8 M126 126 l10 -8 M126 142 l10 -8',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 160, 70),
  ],

  // The edge of Uga Forest, and before it the dump where a pile of
  // videotapes lies, one tape in tint: chapter 396.
  'uga-forest': [
    {
      d: 'M6 112 C4 84 26 74 36 88 C40 64 66 62 70 84 C76 60 104 60 108 82 C116 66 140 72 140 92 C152 92 158 104 154 116',
    },
    { d: 'M22 112 V150 M56 104 V150 M92 102 V150 M134 112 V150' },
    {
      d: 'M14 100 l10 -8 M44 90 l12 -9 M80 86 l12 -9 M118 92 l12 -9',
      role: 'ambient',
    },
    { d: 'M30 150 C40 126 60 118 80 118 C104 118 124 128 134 150' },
    { d: 'M58 132 L86 126 L90 140 L62 146 Z', role: 'accent' },
    { d: `${circle(68, 137, 3)} ${circle(80, 134, 3)}`, role: 'soft' },
    { d: 'M92 126 L118 130 L114 142 L90 140', role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
  ],
} satisfies Drawings

/** The Kakin records of phase 4 whose drawing changes in chapters 371–420 (#1156, #1158). */
export const kakinPhaseFourRedrawn: Redrawings = {
  'lynch-fullbokko': [
    // The same head and shoulders (`LYNCH`), fallen to the floor, without
    // Body and Soul's lines: Bonolenov, whom her punch unmasked as a fake
    // Hisoka, recalls killing her, chapter 405.
    {
      episode: 148,
      chapter: 405,
      source: 'chapter',
      value: [...moved([...LYNCH, ...TURNED_BACK], FALLEN), ...FLOOR],
    },
  ],
  'quorolle': [
    // A costume: his long black trench coat in 3/4 (`QUOROLLE_COAT`),
    // hatched, open on the black round-neck top under it, the coat's collar
    // in tint. He wears it on the twelfth day, level 51 with Tevelares and
    // Daemon, chapter 405. The wiki places him in no later chapter, so the
    // coat has no exit yet.
    { episode: 148, chapter: 405, source: 'chapter', value: QUOROLLE_COAT },
  ],
  'borksen': [
    // The cards of Morena's game over the same hair made small, the one she
    // keeps face up, its border in tint: she cheats, the game forces her
    // last answer, and she joins the Heil-Ly before going back to her own
    // side, chapter 410. Nothing is written on the cards.
    {
      episode: 148,
      chapter: 410,
      source: 'chapter',
      value: [
        ...moved(BORKSEN, BESIDE_THE_BEAST),
        { d: 'M14 64 L48 56 L56 96 L22 104 Z' },
        { d: 'M20 68 L44 62 L50 92 L26 98 Z', role: 'accent' },
        {
          d: 'M62 52 L96 44 L104 84 L70 92 Z M110 40 L144 32 L152 72 L118 80 Z',
        },
        {
          d: 'M70 58 l18 -14 M72 72 l26 -20 M76 86 l26 -20 M118 46 l18 -14 M120 60 l26 -20 M124 74 l26 -20',
          role: 'ambient',
        },
      ],
    },
  ],
  'fukataki': [
    // The same head and shoulders from behind, fallen to the floor:
    // Benjamin shoots Camilla's two servants when she fires at him,
    // chapter 416.
    {
      episode: 148,
      chapter: 416,
      source: 'chapter',
      value: [...moved([...FUKATAKI, ...TURNED_BACK], FALLEN), ...FLOOR],
    },
  ],
  'sarasa': [
    // Her purse laid in her open coffin, seen from above, among the flowers
    // the others put in with her: she is abducted and killed, chapter 397. No body is drawn.
    {
      episode: 148,
      chapter: 397,
      source: 'chapter',
      value: [
        { d: 'M56 14 H104 L124 52 L110 186 H50 L36 52 Z' },
        { d: 'M60 22 H100 L116 54 L104 178 H56 L44 54 Z', role: 'soft' },
        ...moved(
          SARASA_PURSE,
          'translate(80 104) scale(0.5) translate(-80 -110)',
        ),
        {
          d: `${circle(60, 50, 6)} ${circle(100, 50, 6)} ${circle(64, 150, 6)} ${circle(96, 150, 6)} ${circle(80, 166, 5)}`,
        },
        {
          d: `${circle(60, 50, 2)} ${circle(100, 50, 2)} ${circle(64, 150, 2)} ${circle(96, 150, 2)} ${circle(80, 166, 2)}`,
          role: 'soft',
        },
        { d: 'M112 80 l6 -4 M110 110 l6 -4 M108 140 l6 -4', role: 'ambient' },
      ],
    },
  ],
  'terebellum': [
    // A drink can with the tip of a thrown knife inside it, and the knife's
    // crushed handle with no blade, over the same tracksuit made small: he
    // moves the damage his right hand takes into what his left hand holds,
    // chapter 399.
    {
      episode: 148,
      chapter: 399,
      source: 'chapter',
      value: [
        ...moved(TRACKSUIT, BESIDE_THE_BEAST),
        {
          d: `M56 30 V86 Q56 92 70 92 Q84 92 84 86 V30 ${ellipse(70, 30, 14, 4)}`,
        },
        { d: 'M66 24 H74 M70 54 L76 40 L80 58 Z', role: 'soft' },
        { d: 'M96 70 L130 58 L134 66 L102 80 Z M100 66 L104 82' },
        { d: 'M110 70 l4 -8 M120 66 l4 -8', role: 'ambient' },
      ],
    },
  ],
}
