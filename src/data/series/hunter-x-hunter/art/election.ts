import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, house, shadow } from '~/lib/svg/primitives'

import { ZOLDYCK_DRAWINGS } from './zoldyck'

/** Gotoh's coins from his first drawing: the stack, the upright coin, the shadow. */
const GOTOH_STACK = ZOLDYCK_DRAWINGS.gotoh.slice(0, 5)
const GOTOH_COIN = ZOLDYCK_DRAWINGS.gotoh.slice(5, 9)
const GOTOH_SHADOW = ZOLDYCK_DRAWINGS.gotoh.slice(9)

/** The ground a fallen object lies on. */
const GROUND: Stroke = { d: 'M4 150 H156', role: 'ambient', dashed: true }

/** The second of a pair: the first, mirrored about x 80. */
const MIRRORED = 'matrix(-1 0 0 1 160 0)'

/**
 * Bushidora's police cap in 3/4: the flat top, the band, the peak and its
 * underside hatched, the flames on the crown in tint. His death lays this
 * same cap on its side.
 */
const BUSHIDORA_CAP: Stroke[] = [
  { d: ellipse(88, 76, 56, 15) },
  { d: 'M34 80 C42 90 50 96 54 102 M142 72 C136 86 130 96 126 102' },
  { d: 'M54 102 Q90 112 126 102 V116 Q90 126 54 116 Z' },
  { d: 'M54 116 C40 120 26 128 20 138 C40 142 66 134 82 122' },
  { d: 'M30 136 l6 -5 M42 134 l7 -6 M56 130 l7 -6', role: 'ambient' },
  {
    d: 'M70 102 C66 96 70 92 68 86 C74 90 76 94 76 100 C78 94 80 90 80 84 C86 90 88 96 86 102 C90 96 94 94 96 88 C100 94 100 100 98 104',
    role: 'accent',
  },
  { d: 'M60 109 Q90 118 120 109', role: 'soft' },
  { d: 'M120 84 l6 -4 M122 96 l5 -4', role: 'ambient' },
]

/**
 * Teradein's tie from its knot to its tip, the fold down the blade: the
 * yellow tie he wears with his teal suit. His death lays it on the floor.
 */
const TERADEIN_TIE: Stroke[] = [
  { d: 'M73 54 H87 L84 67 H76 Z', role: 'accent' },
  { d: 'M76 67 L67 148 L80 164 L93 148 L84 67', role: 'accent' },
  { d: 'M79 72 L73 146', role: 'soft' },
  { d: 'M88 96 l3 -2 M89 116 l3 -2 M90 136 l3 -2', role: 'ambient' },
]

/**
 * Tsubone's monocle in 3/4, the rim in tint, its edge and the glint, the
 * chain falling from it. Kikyo watches the escort through it (ch 324).
 */
const MONOCLE: Stroke[] = [
  { d: ellipse(74, 84, 28, 32), role: 'accent' },
  { d: ellipse(74, 84, 22, 26), role: 'soft' },
  { d: 'M102 84 C102 104 92 118 78 118', role: 'soft' },
  { d: 'M60 66 Q66 60 76 60 M58 76 Q60 72 64 70', role: 'soft' },
  { d: 'M90 108 l5 -4 M96 98 l5 -4 M98 86 l4 -3', role: 'ambient' },
  { d: 'M98 112 C112 128 110 146 96 156 C84 164 78 172 84 182', dashed: true },
  { d: ellipse(86, 185, 4, 2.5) },
]

/**
 * One of Saccho's two katanas lying on the diagonal: the brown sheath with
 * its seam, the round guard, and the hilt wrapped in white bandages, in
 * tint. The second is the same sword moved beside it.
 */
const KATANA: Stroke[] = [
  { d: 'M52.6 139.2 L122.1 43.5 Q127.2 41.1 126.5 46.8 L57.1 142.4 Z' },
  { d: 'M56 139.2 L121.9 48.4', role: 'soft' },
  { d: 'M46.7 136.7 A9 3 36 1 0 61.2 147.3 A9 3 36 1 0 46.7 136.7' },
  {
    d: 'M34 164 L50.4 141.3 M39.3 167.8 L55.7 145.2 M34 164 Q34.9 168.3 39.3 167.8',
    role: 'accent',
  },
  {
    d: 'M35.8 161.6 L44 161.3 M39.3 156.7 L47.5 156.5 M42.8 151.9 L51 151.6 M46.3 147 L54.5 146.8',
    role: 'accent',
  },
  {
    d: 'M77.6 114.1 L83.2 113.2 M87 101.2 L92.6 100.3 M96.4 88.2 L102 87.3 M105.8 75.3 L111.4 74.4',
    role: 'ambient',
  },
]

/** One curled horn of Ginta's headpiece, out from the side of its band. */
const RAM_HORN: Stroke[] = [
  {
    d: 'M54 112 C40 98 16 104 14 126 C12 146 34 158 48 146 C58 138 52 122 40 126 C32 130 34 142 42 142',
    role: 'accent',
  },
  { d: 'M54 128 C46 118 30 120 28 132 C26 142 34 148 42 146', role: 'soft' },
  { d: 'M26 108 l4 7 M16 122 l7 2 M18 140 l6 -3', role: 'soft' },
]

/** One of Pyon's rabbit ears, standing up off her band. */
const BUNNY_EAR = 'M60 122 C50 88 48 50 58 28 C70 42 74 84 74 118'

/** One of Cutie's bow's loops, out to the left of its knot. */
const BOW_LOOP: Stroke[] = [
  { d: 'M74 96 C60 72 34 66 24 80 C16 94 24 118 42 120 C56 122 66 114 74 106' },
  { d: 'M72 101 C58 98 44 98 32 98', role: 'soft' },
  {
    d: `${circle(40, 86, 3.5)} ${circle(56, 108, 3.5)} ${circle(32, 108, 3)} ${circle(58, 86, 3)}`,
    role: 'soft',
  },
]

/** One of Alluka's two locks, hanging from her headband with four bands. */
const ALLUKA_LOCK: Stroke[] = [
  { d: 'M46 80 C44 104 46 132 50 160 L54 168 L58 160 C56 132 54 106 56 84' },
  {
    d: `${ellipse(50, 98, 6.5, 2.5)} ${ellipse(51, 114, 6.5, 2.5)} ${ellipse(52, 130, 6.5, 2.5)} ${ellipse(53, 146, 6.5, 2.5)}`,
    role: 'soft',
  },
]

/** One of Yasuha's banknotes, its border and the round seal at its middle. */
const BANKNOTE: Stroke = {
  d: `M-12 -6 H12 V6 H-12 Z ${circle(0, 0, 2.5)}`,
  role: 'accent',
}

/** The tail fin of an airship, out to the left of its envelope. */
const AIRSHIP_FIN = 'M30 0 L14 -12 L18 0 L14 12 Z'

/** Tsubone's motorbike, the shape her Rider's High takes. */
const MOTORBIKE: Stroke[] = [
  { d: `${circle(36, 140, 20)} ${circle(126, 140, 20)}` },
  { d: `${circle(36, 140, 6)} ${circle(126, 140, 6)}`, role: 'soft' },
  { d: 'M36 140 L62 108 H104 L126 140 M62 108 L76 140 H100 L104 108' },
  { d: 'M54 100 C60 92 80 90 96 94 L104 108 H62 Z' },
  { d: 'M30 98 H58 L54 104 H34 Z', role: 'soft' },
  { d: 'M104 108 L114 82 M108 80 L122 76', role: 'soft' },
  { d: ellipse(115, 92, 6, 8), role: 'accent' },
  { d: 'M66 104 l6 -6 M76 104 l6 -6 M86 104 l6 -6', role: 'ambient' },
  { d: 'M4 162 H156', role: 'ambient', dashed: true },
]

/**
 * The Election's characters and places (#912), each drawn as the object
 * the reader knows them by in the arc (owner, 2026-11-05, #1097).
 */
export const ELECTION_DRAWINGS = {
  // Beans's black tuxedo, short and round, the satin lapels and the far
  // side hatched, the bow tie in tint: the secretary in the suit he always
  // wears draws the lot for the rules, episode 137 / chapter 319.
  'beans': [
    {
      d: 'M62 66 C44 70 34 90 34 116 C34 140 46 160 64 164 H96 C114 160 126 140 126 116 C126 90 116 70 98 66',
    },
    { d: 'M62 66 C66 90 72 108 80 122 C88 108 94 90 98 66' },
    { d: 'M62 66 Q80 60 98 66 M68 66 L80 72 L92 66', role: 'soft' },
    {
      d: `M80 77 L66 69 V85 Z M80 77 L94 69 V85 Z ${ellipse(80, 77, 3.5, 4)}`,
      role: 'accent',
    },
    {
      d: `M80 122 V164 ${circle(80, 134, 2.5)} M80 92 h0.01 M80 104 h0.01`,
      role: 'soft',
    },
    {
      d: 'M104 92 l8 -6 M108 108 l9 -6 M110 124 l9 -6 M110 140 l8 -6 M104 156 l8 -6',
      role: 'ambient',
    },
    { d: 'M70 80 l3 -4 M70 92 l4 -5 M88 92 l4 -5', role: 'ambient' },
    shadow(80, 182, 46),
  ],

  // Botobai's long coat from behind, the flame-like collar in tint and the
  // dragon's head on its back drawn as a mark, horns and whiskers only:
  // the senior Zodiac offered the chair at the meeting, episode 137 /
  // chapter 319.
  'botobai-gigante': [
    { d: 'M56 62 L30 74 L22 172 H138 L130 74 L104 62' },
    { d: 'M30 74 L16 142 H28 L36 98 M130 74 L144 142 H132 L124 98' },
    {
      d: 'M56 62 C50 50 54 40 50 28 C60 36 62 44 64 50 C64 38 70 30 70 20 C76 30 78 40 78 48 C82 38 88 32 90 22 C94 34 92 42 92 50 C96 42 102 38 110 32 C106 44 106 54 104 62 Q80 70 56 62 Z',
      role: 'accent',
    },
    { d: circle(80, 106, 18), role: 'soft' },
    {
      d: 'M71 104 C71 96 89 96 89 104 C89 112 86 118 80 120 C74 118 71 112 71 104 Z M72 99 L64 88 M88 99 L96 88 M73 112 C66 116 62 116 58 112 M87 112 C94 116 98 116 102 112',
      role: 'soft',
    },
    { d: 'M80 132 V172', role: 'soft' },
    {
      d: 'M118 92 l7 -5 M120 110 l7 -5 M121 128 l7 -5 M122 146 l7 -5 M123 164 l7 -5',
      role: 'ambient',
    },
    shadow(80, 184, 60),
  ],

  // Cheadle's headdress, a close cap with its two drooping dog's ears in
  // tint and the far side hatched, her round glasses folded in front of
  // it: the Dog of the Zodiacs at the meeting, episode 137 / chapter 319.
  'cheadle-yorkshire': [
    { d: 'M40 104 C40 64 58 44 82 44 C106 44 122 64 122 104' },
    { d: 'M40 104 Q81 116 122 104 M42 96 Q81 108 120 96', role: 'soft' },
    {
      d: 'M50 62 C34 66 24 90 28 118 C30 128 40 128 44 118 C48 104 50 90 56 76 M112 62 C128 66 138 90 134 118 C132 128 122 128 118 118 C114 104 112 90 106 76',
      role: 'accent',
    },
    {
      d: 'M36 112 C36 96 42 82 50 72 M126 112 C126 96 120 82 112 72',
      role: 'soft',
    },
    { d: 'M100 60 l6 -4 M106 74 l6 -4 M110 88 l6 -4', role: 'ambient' },
    { d: `${circle(64, 146, 12)} ${circle(98, 146, 12)}` },
    {
      d: 'M76 145 Q81 141 86 145 M52 144 L42 138 M110 144 L120 138',
      role: 'soft',
    },
    shadow(80, 172, 50),
  ],

  // One of Cluck's pigeons in flight with a folded ballot in its beak, the
  // ballot in tint: she sends one to every Hunter, episode 137. No eye.
  'cluck': [
    {
      d: 'M40 104 C52 90 76 86 96 90 C108 92 114 86 120 80 C126 76 132 80 132 86 C130 94 122 100 112 104 C96 112 70 116 52 112 L30 120 L36 106 Z',
    },
    { d: 'M132 84 L140 87 L132 90' },
    { d: 'M66 94 C58 68 64 46 78 30 C84 50 90 70 92 92' },
    { d: 'M80 90 C84 70 98 52 114 44 C110 64 104 80 96 92', role: 'soft' },
    { d: 'M70 78 L80 72 M68 64 L78 58 M76 50 L82 46', role: 'soft' },
    { d: 'M36 106 L22 102 M34 112 L18 114', role: 'soft' },
    { d: 'M126 94 L142 98 L136 128 L120 124 Z', role: 'accent' },
    { d: 'M124 109 L139 113', role: 'soft' },
    { d: 'M84 112 L90 122 M92 112 L98 122', role: 'soft' },
    { d: 'M60 108 l6 -6 M70 110 l6 -6 M80 110 l6 -6', role: 'ambient' },
  ],

  // Gel's arm turned into a snake, rising from the black sleeve of her
  // dress (hatched), four hearts on its head and the ribbon round its neck
  // in tint: she threatens the vice chairman with it at the meeting,
  // episode 137 / chapter 319. No eyes and no tongue.
  'gel': [
    { d: 'M24 184 L50 136 L80 148 L62 192' },
    { d: 'M38 174 l10 -18 M48 180 l10 -20 M58 184 l8 -18', role: 'ambient' },
    {
      d: 'M54 138 C62 116 92 116 98 96 C104 78 80 68 84 52 C82 36 94 26 106 30 C118 34 118 48 106 54 C102 70 122 80 116 102 C110 124 84 126 76 146',
    },
    { d: 'M64 132 l6 3 M76 122 l6 4 M90 114 l5 5 M100 100 l6 3', role: 'soft' },
    {
      d: `M97 44 C90.6 40 93 36 97 38.8 C101 36 103.4 40 97 44 Z M88 43.5 C84 41 85.5 38.5 88 40.2 C90.5 38.5 92 41 88 43.5 Z M106 43.5 C102 41 103.5 38.5 106 40.2 C108.5 38.5 110 41 106 43.5 Z M97 34.5 C93 32 94.5 29.5 97 31.2 C99.5 29.5 101 32 97 34.5 Z`,
      role: 'soft',
    },
    {
      d: 'M84 60 Q94 66 105 58 M105 58 l11 -8 l2 13 z M105 58 l12 5 l-7 8 z M105 58 l5 14 M105 58 l-2 15',
      role: 'accent',
    },
    { d: 'M108 86 l6 -2 M110 98 l6 -1', role: 'ambient' },
  ],

  // Ginta's headpiece standing on its band, a curled horn coming out of
  // each side in tint: the Sheep of the Zodiacs wears it at the meeting,
  // episode 137 / chapter 320.
  'ginta': [
    { d: 'M50 150 C50 96 110 96 110 150 M60 150 C60 108 100 108 100 150' },
    ...RAM_HORN,
    ...moved(RAM_HORN, MIRRORED),
    { d: 'M94 112 l4 -4 M98 124 l4 -3 M99 136 l4 -3', role: 'ambient' },
    shadow(80, 156, 56),
  ],

  // Kanzai's baseball jersey from behind, its short sleeves piped, and his
  // ponytail hanging down its back with the tiger's stripes in tint: the
  // Tiger of the Zodiacs at the polling place, episode 137 / chapter 320.
  // The name on the back is left off.
  'kanzai': [
    {
      d: 'M58 50 L30 64 L18 96 L36 104 L44 86 V168 H116 V86 L124 104 L142 96 L130 64 L102 50',
    },
    { d: 'M58 50 Q80 58 102 50 M22 90 L38 98 M138 90 L122 98', role: 'soft' },
    { d: 'M74 52 C68 74 76 98 70 126 C80 118 88 98 88 72 C88 62 86 54 86 50' },
    {
      d: 'M72 66 L86 62 M71 82 L87 80 M72 98 L86 100 M73 112 L82 115',
      role: 'accent',
    },
    {
      d: 'M100 80 l8 -6 M102 100 l9 -6 M103 120 l9 -6 M103 140 l9 -6 M104 160 l8 -6',
      role: 'ambient',
    },
    shadow(80, 184, 46),
  ],

  // Mizaistom's hat in 3/4, its small horns in tint and the cow's spots on
  // the crown and brim: the Ox of the Zodiacs, named at the count in
  // chapter 326 and at the meeting in episode 137.
  'mizaistom-nana': [
    { d: ellipse(80, 130, 56, 15) },
    { d: 'M24 130 V134 C40 150 120 150 136 134 V130', role: 'soft' },
    { d: 'M42 128 C38 90 52 66 80 64 C108 66 122 90 118 128' },
    { d: 'M43 118 C56 128 104 128 117 118', role: 'soft' },
    {
      d: 'M56 76 C44 70 38 58 42 46 C50 56 56 62 64 68 M104 76 C116 70 122 58 118 46 C110 56 104 62 96 68',
      role: 'accent',
    },
    {
      d: 'M64 90 c6 -6 16 -2 14 6 c-2 6 -14 6 -14 -6 Z M88 100 c4 -4 12 -2 10 4 c-2 4 -10 4 -10 -4 Z M40 134 c4 -4 12 -2 10 3 c-2 4 -10 3 -10 -3 Z M110 138 c4 -3 10 -1 8 3 c-2 3 -8 2 -8 -3 Z',
      role: 'soft',
    },
    { d: 'M104 82 l6 -4 M108 96 l6 -4 M110 110 l6 -4', role: 'ambient' },
    shadow(80, 176, 54),
  ],

  // Pariston's suit from the front, the notched lapels and the striped
  // shirt, the tie in tint: the vice chairman, who never dresses as the Rat,
  // late to the meeting, episode 137 / chapter 321.
  'pariston-hill': [
    { d: 'M64 40 L42 50 L32 168 H128 L118 50 L96 40' },
    { d: 'M64 40 L58 76 L66 80 L72 112 M96 40 L102 76 L94 80 L88 112' },
    { d: 'M64 40 L72 54 L80 46 L88 54 L96 40', role: 'soft' },
    {
      d: 'M77 48 H83 L85 54 L83 102 L80 108 L77 102 L75 54 Z M75 54 H85',
      role: 'accent',
    },
    { d: 'M70 60 L73 106 M90 60 L87 106', role: 'soft' },
    {
      d: `M80 112 V168 ${circle(84, 126, 2)} ${circle(84, 144, 2)}`,
      role: 'soft',
    },
    {
      d: 'M104 80 l9 -7 M106 102 l10 -7 M108 124 l10 -7 M108 146 l10 -7',
      role: 'ambient',
    },
    shadow(80, 186, 50),
  ],

  // Pyon's band with its two rabbit's ears in tint, one standing and one
  // bent over: the Rabbit of the Zodiacs at the polling place, episode 137 /
  // chapter 320.
  'pyon': [
    { d: 'M40 150 C40 108 120 108 120 150 M48 150 C48 118 112 118 112 150' },
    { d: BUNNY_EAR, role: 'accent' },
    {
      d: 'M86 120 C90 90 98 64 114 52 C128 44 136 56 126 64 C114 74 104 94 100 120',
      role: 'accent',
    },
    {
      d: 'M62 112 C58 86 58 60 62 44 M94 108 C98 88 106 70 118 60',
      role: 'soft',
    },
    { d: 'M104 128 l5 -4 M108 140 l5 -4', role: 'ambient' },
    shadow(80, 156, 48),
  ],

  // Saccho's two katanas side by side, the hilts wrapped in white bandages
  // in tint, the sheaths' undersides hatched: the Horse of the Zodiacs at
  // the meeting, named at the count in chapter 326 and in episode 137.
  'saccho-kobayakawa': [
    ...KATANA,
    ...moved(KATANA, 'translate(24 8)'),
    shadow(84, 184, 56),
  ],

  // Saiyu's headband standing in 3/4, a reference to the Monkey King's,
  // in tint, and his fake tail curled before it: the Monkey of the Zodiacs
  // at the meeting, episode 137 / chapter 321.
  'saiyu': [
    { d: ellipse(80, 84, 46, 16), role: 'accent' },
    { d: 'M34 84 V92 C34 110 126 110 126 92 V84', role: 'accent' },
    { d: ellipse(80, 85, 38, 11), role: 'soft' },
    { d: 'M108 102 l6 -5 M116 96 l5 -5', role: 'ambient' },
    {
      d: 'M20 160 C40 150 64 152 80 146 C100 138 110 124 102 116 C94 110 84 118 90 126',
    },
    { d: 'M20 166 C42 158 66 160 84 152', role: 'soft' },
    shadow(80, 172, 60),
  ],

  // Bushidora's police cap, the flames on its crown in tint: the candidate
  // introduced in the round of sixteen, episode 141 / chapter 326.
  'bushidora-ambitious': [...BUSHIDORA_CAP, shadow(82, 146, 50)],

  // Cutie's big polka-dot bow, its two loops and tails, the knot in tint:
  // she wears it with the matching dress in the round of sixteen, episode
  // 141 / chapter 326.
  'cutie-beauty': [
    ...BOW_LOOP,
    ...moved(BOW_LOOP, MIRRORED),
    {
      d: 'M72 92 C72 86 88 86 88 92 V110 C88 116 72 116 72 110 Z',
      role: 'accent',
    },
    {
      d: 'M76 114 C70 130 62 146 56 160 L68 156 L72 166 C78 148 80 130 82 116 M84 116 C90 130 96 146 102 158 L92 156 L90 166 C86 148 84 132 82 118',
    },
    shadow(80, 182, 46),
  ],

  // Ickshonpe's panda mask with its round ears, the dot on its brow in
  // tint, the strap and the far side hatched: he is never seen without it,
  // episode 141 / chapter 326. The eyes, the teeth and the letters in the
  // dot are left off.
  'ickshonpe-katocha': [
    {
      d: 'M40 98 C40 64 58 46 80 46 C102 46 120 64 120 98 C120 128 102 148 80 148 C58 148 40 128 40 98 Z',
    },
    {
      d: 'M50 64 C36 58 34 40 48 34 C58 30 66 38 66 48 M110 64 C124 58 126 40 112 34 C102 30 94 38 94 48',
    },
    { d: circle(80, 66, 7), role: 'accent' },
    { d: 'M120 98 C121 128 104 150 82 152', role: 'soft' },
    {
      d: 'M40 98 C28 100 22 106 20 114 M120 98 C132 100 138 106 140 114',
      role: 'soft',
    },
    {
      d: 'M104 70 l6 -4 M108 86 l7 -4 M110 102 l7 -4 M108 118 l7 -4 M102 134 l6 -4',
      role: 'ambient',
    },
    shadow(80, 176, 44),
  ],

  // A covered dish on its plate, the knob of the cover in tint and its far
  // side hatched: the emblem of Linne's title, a double-star Gourmet
  // Hunter, as the round of sixteen introduces her, episode 141 / chapter
  // 326. The story gives her no object of her own.
  'linne-horsdoeuvre': [
    { d: 'M34 140 C34 96 56 76 80 76 C104 76 126 96 126 140' },
    { d: ellipse(80, 142, 56, 10) },
    { d: 'M24 142 V146 C30 156 130 156 136 146 V142', role: 'soft' },
    { d: `M74 76 C74 66 86 66 86 76 ${ellipse(80, 66, 4, 2)}`, role: 'accent' },
    { d: 'M48 124 C50 108 58 98 68 92', role: 'soft' },
    {
      d: 'M104 96 l6 -4 M110 108 l7 -4 M114 122 l7 -4 M116 134 l6 -3',
      role: 'ambient',
    },
    shadow(80, 166, 58),
  ],

  // Loupe's glasses folded on his black turtleneck, the frames in tint and
  // the folded sweater hatched: the candidate introduced in the round of
  // sixteen, episode 141 / chapter 326.
  'loupe-highland': [
    { d: 'M26 128 L54 112 H134 L106 128 Z' },
    { d: 'M26 128 V152 H106 V128 M106 152 L134 136 V112' },
    {
      d: 'M54 120 C56 114 96 112 100 118 M60 126 C62 120 92 120 94 124',
      role: 'soft',
    },
    {
      d: 'M34 136 l6 12 M46 134 l7 14 M58 134 l7 14 M70 134 l7 14 M82 134 l7 14 M94 134 l6 12 M112 140 l6 -4 M114 126 l8 -5',
      role: 'ambient',
    },
    {
      d: 'M46 90 H70 V100 Q70 108 62 108 H54 Q46 108 46 100 Z M82 88 H106 V98 Q106 106 98 106 H90 Q82 106 82 98 Z',
      role: 'accent',
    },
    {
      d: 'M70 94 Q76 89 82 93 M46 94 L40 104 L52 110 M106 92 L112 102 L100 108',
      role: 'soft',
    },
    shadow(80, 158, 60),
  ],

  // Sanbica's surgical mask in 3/4, its pleats and ear loops, the mask in
  // tint: she is always seen in a gown, gloves and a mask, episode 141 /
  // chapter 326.
  'sanbica-norton': [
    {
      d: 'M40 84 C60 76 100 76 120 84 L116 124 C100 134 60 134 44 124 Z',
      role: 'accent',
    },
    {
      d: 'M42 96 C60 90 100 90 118 96 M43 108 C60 102 100 102 117 108 M44 118 C60 114 100 114 116 118',
      role: 'soft',
    },
    {
      d: 'M40 86 C24 84 20 104 26 116 C30 122 38 122 44 120 M120 86 C136 84 140 104 134 116 C130 122 122 122 116 120',
    },
    { d: 'M60 80 Q80 74 100 80', role: 'soft' },
    { d: 'M104 120 l6 -6 M110 112 l5 -5', role: 'ambient' },
    shadow(80, 166, 48),
  ],

  // Teradein's yellow tie under his shirt collar, the tie in tint: the
  // candidate introduced in the round of sixteen, episode 141 / chapter 326.
  'teradein-neutral': [
    { d: 'M54 40 C60 52 100 52 106 40' },
    { d: 'M60 44 L70 64 L80 52 L90 64 L100 44' },
    ...TERADEIN_TIE,
    { d: 'M60 44 Q80 36 100 44', role: 'soft' },
    shadow(80, 184, 30),
  ],

  // Alluka's headband, the charms along it in tint with their faces left
  // off, and the two locks that frame her face, each tied with four bands:
  // Killua's sister in her room, episode 138 / chapter 321. No face.
  'alluka-zoldyck': [
    { d: 'M40 64 C40 34 120 34 120 64', role: 'soft' },
    { d: 'M40 64 V70 C40 86 120 86 120 70 V64 C120 56 40 56 40 64 Z' },
    {
      d: `${circle(58, 76, 5)} ${circle(80, 80, 5.5)} ${circle(102, 76, 5)}`,
      role: 'accent',
    },
    ...ALLUKA_LOCK,
    ...moved(ALLUKA_LOCK, MIRRORED),
    { d: 'M110 66 l4 -4 M114 74 l3 -3', role: 'ambient' },
    shadow(80, 186, 40),
  ],

  // Nanika's small hand, in tint, laid on a large bandaged one: it heals
  // only what it touches, and asks to hold Gon's hand to restore him,
  // episode 145 / chapter 333. No face.
  'nanika': [
    {
      d: 'M6 118 H58 C74 118 86 112 102 112 C112 112 114 122 104 124 L88 128 C98 130 100 140 90 142 H58 C40 142 24 144 6 144',
    },
    {
      d: 'M20 118 L28 144 M34 118 L42 142 M48 118 L56 142 M62 118 L70 142',
      role: 'soft',
    },
    {
      d: 'M154 82 H120 C104 82 92 90 84 102 C80 110 86 116 94 112 L104 104 C100 112 102 120 110 118 L118 110 C118 118 124 122 130 116 C136 110 140 102 154 102',
      role: 'accent',
    },
    { d: 'M126 86 C122 92 120 98 120 104', role: 'soft' },
    { d: 'M10 138 l6 -6 M78 136 l6 -5', role: 'ambient' },
    shadow(70, 158, 64),
  ],

  // The stairs of Alluka's playroom in 3/4, the handrail in tint: Mitsuba
  // carries the child up them, the first of the requests she grants,
  // episode 138 / chapter 322.
  'mitsuba': [
    {
      d: 'M20 162 V148 H40 V134 H60 V120 H80 V106 H100 V92 H120 V78 H140 V162',
    },
    {
      d: 'M20 148 L32 140 H52 M40 134 L52 126 H72 M60 120 L72 112 H92 M80 106 L92 98 H112 M100 92 L112 84 H132 M120 78 L132 70 H150 V150 L140 162',
      role: 'soft',
    },
    { d: 'M24 112 L144 40', role: 'accent' },
    {
      d: 'M30 108 V146 M50 96 V132 M70 84 V118 M90 72 V104 M110 60 V90 M130 48 V76',
      role: 'soft',
    },
    { d: 'M24 112 V148', role: 'accent' },
    {
      d: 'M24 158 h10 M44 144 h10 M64 130 h10 M84 116 h10 M104 102 h10 M124 88 h10',
      role: 'ambient',
    },
    { d: 'M4 162 H156', role: 'ambient', dashed: true },
  ],

  // A mobile phone standing, a heart on its blank screen in tint: Kasuga
  // loves someone she met online, which the household's rules forbid,
  // episode 138 / chapter 322.
  'kasuga': [
    {
      d: 'M58 38 H102 Q108 38 108 44 V156 Q108 162 102 162 H58 Q52 162 52 156 V44 Q52 38 58 38 Z',
    },
    {
      d: 'M108 44 L116 50 V158 Q116 166 108 166 H62 Q56 166 56 162',
      role: 'soft',
    },
    { d: 'M60 50 H100 V138 H60 Z', role: 'soft' },
    {
      d: 'M80 106 C60.8 94 68 82 80 90.4 C92 82 99.2 94 80 106 Z',
      role: 'accent',
    },
    { d: 'M74 150 H86', role: 'soft' },
    {
      d: 'M110 70 l4 -3 M110 94 l4 -3 M110 118 l4 -3 M110 142 l4 -3',
      role: 'ambient',
    },
    shadow(84, 180, 40),
  ],

  // Muna's camera in 3/4, the lens in tint, the strap and the far side
  // hatched: he takes photographs on his tour of the estate, episode 139 /
  // chapter 323.
  'muna': [
    { d: 'M30 86 H118 V140 H30 Z' },
    { d: 'M30 86 L40 78 H128 L118 86 M118 140 L128 132 V78' },
    { d: 'M48 86 V76 H70 V82 M98 79 V74 H110 V78', role: 'soft' },
    { d: circle(72, 114, 20), role: 'accent' },
    { d: `${circle(72, 114, 13)} M64 106 Q68 102 74 102`, role: 'soft' },
    {
      d: 'M30 96 C14 100 12 130 20 150 M128 88 C142 94 146 124 138 146',
      role: 'soft',
    },
    { d: 'M121 96 l4 -3 M121 110 l4 -3 M121 124 l4 -3', role: 'ambient' },
    shadow(78, 162, 54),
  ],

  // Tsubone's monocle and its chain: she wears it on her right eye and
  // Kikyo watches the escort through it, episode 140 / chapter 324.
  'tsubone': [...MONOCLE],

  // A butler's black jacket from the front, the far half hatched, the tie
  // in tint: Amane wears the Zoldyck butlers' suit and tie when Silva
  // gives her to Killua's escort, episode 140 / chapter 324.
  'amane': [
    { d: 'M64 40 L42 52 L34 168 H126 L118 52 L96 40 M64 40 L80 94 L96 40' },
    { d: 'M64 40 Q80 48 96 40 M80 94 V168', role: 'soft' },
    {
      d: 'M77 48 H83 L84 54 L82 84 L80 88 L78 84 L76 54 Z M76 54 H84',
      role: 'accent',
    },
    { d: `${circle(86, 110, 2)} ${circle(86, 130, 2)}`, role: 'soft' },
    {
      d: 'M98 72 l9 -7 M100 94 l10 -7 M102 116 l10 -7 M102 138 l10 -7 M100 160 l9 -7',
      role: 'ambient',
    },
    { d: 'M42 52 L30 140 M118 52 L130 140', role: 'soft' },
    shadow(80, 186, 50),
  ],

  // The Zoldyck car Hishita drives, side on, its windows in tint and the
  // black body hatched: he waits with it where Killua lands, episode 143 /
  // chapter 329.
  'hishita': [
    { d: 'M14 136 L20 118 L50 112 L66 92 H108 L126 112 L146 118 L148 136 Z' },
    { d: 'M70 96 H86 V112 H58 Z M90 96 H106 L120 112 H90 Z', role: 'accent' },
    { d: `${circle(42, 138, 13)} ${circle(120, 138, 13)}` },
    { d: `${circle(42, 138, 5)} ${circle(120, 138, 5)}`, role: 'soft' },
    { d: 'M86 114 V134 M20 124 H30 M136 122 H146', role: 'soft' },
    {
      d: 'M60 132 l8 -12 M72 132 l8 -12 M96 132 l8 -12 M136 132 l6 -9',
      role: 'ambient',
    },
    shadow(80, 158, 66),
  ],

  // An airship and the banknotes raining from it, the notes in tint: Yasuha
  // wishes to become rich and money falls from the sky, episode 138 /
  // chapter 322.
  'yasuha': [
    { d: ellipse(84, 46, 54, 17) },
    { d: AIRSHIP_FIN, transform: 'translate(0 46)' },
    { d: 'M70 63 H98 L94 72 H74 Z', role: 'soft' },
    {
      d: 'M52 58 l6 -4 M68 62 l6 -4 M100 60 l6 -4 M116 56 l6 -4',
      role: 'ambient',
    },
    { ...BANKNOTE, transform: 'translate(46 96) rotate(-18)' },
    { ...BANKNOTE, transform: 'translate(98 92) rotate(24)' },
    { ...BANKNOTE, transform: 'translate(72 124) rotate(8)' },
    { ...BANKNOTE, transform: 'translate(122 132) rotate(-30)' },
    { ...BANKNOTE, transform: 'translate(36 150) rotate(36)' },
    { ...BANKNOTE, transform: 'translate(92 166) rotate(-10)' },
  ],

  // An airship moored at its mast over the terminal, a second one leaving,
  // the docked envelope in tint: Killua slips away from the butlers in one
  // of the airships here, episode 142.
  'parasta-airport': [
    { d: ellipse(70, 70, 46, 15), role: 'accent' },
    { d: AIRSHIP_FIN, transform: 'translate(-6 70)' },
    { d: 'M58 85 H82 L78 93 H62 Z', role: 'soft' },
    { d: 'M116 70 H124 V150 M118 150 L120 70 M126 150 L122 72' },
    { d: 'M118 92 H126 M118 114 H126 M118 134 H126', role: 'soft' },
    { d: `${ellipse(118, 30, 20, 7)} M98 30 l-8 -5 v10 z`, role: 'soft' },
    {
      d: 'M14 150 V124 H90 V150 M24 134 H36 M46 134 H58 M68 134 H80',
      role: 'soft',
    },
    { d: 'M40 80 l6 -4 M56 82 l6 -4 M80 82 l6 -4', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient', dashed: true },
  ],

  // The city hospital with the cross on its front in tint, towers behind
  // it, and the room built for Gon in its car park: Gon lies here while his
  // friends look for help, episode 142.
  'swardani-city': [
    { d: 'M40 150 V66 H120 V150' },
    {
      d: 'M76 48 H84 V56 H92 V64 H84 V72 H76 V64 H68 V56 H76 Z',
      role: 'accent',
    },
    {
      d: 'M50 80 H62 M70 80 H90 M98 80 H110 M50 98 H62 M70 98 H90 M98 98 H110 M50 116 H62 M98 116 H110 M72 150 V124 H88 V150',
      role: 'soft',
    },
    { d: 'M12 150 V40 H32 V150 M128 150 V30 H150 V150', role: 'soft' },
    { d: 'M18 60 h8 M18 80 h8 M134 50 h10 M134 72 h10', role: 'ambient' },
    {
      d: 'M104 172 V158 H140 V172 Z M104 158 L110 152 H146 L140 158',
      role: 'soft',
    },
    {
      d: 'M16 176 L24 160 M36 176 L44 160 M56 176 L64 160 M76 176 L84 160',
      role: 'ambient',
    },
    {
      d: 'M112 66 l6 -4 M112 90 l6 -4 M112 114 l6 -4 M112 138 l6 -4',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient', dashed: true },
  ],

  // The World Tree rising out of the town, its trunk climbing past the
  // clouds and its branches in tint near the top: Ging waits for Gon at
  // the top of it, episode 147 / chapter 337.
  'world-tree': [
    { d: 'M62 150 C68 120 70 70 72 -4 M98 150 C92 120 90 70 88 -4' },
    {
      d: 'M62 150 C56 154 46 156 38 158 M98 150 C104 154 114 156 122 158 M74 150 L72 160 M86 150 L88 160',
      role: 'soft',
    },
    {
      d: 'M76 140 C76 100 78 60 79 10 M84 120 C84 90 85 50 85 20',
      role: 'soft',
    },
    {
      d: 'M72 30 C58 26 46 30 38 20 C50 18 62 18 72 22 M88 40 C102 34 116 38 124 28 C112 26 98 28 88 32 M72 60 C60 58 52 62 44 56 C54 52 64 52 72 54',
      role: 'accent',
    },
    { d: 'M30 100 Q46 92 62 98 M96 86 Q112 78 132 86', role: 'ambient' },
    { d: house(14, 16, 134, 126), role: 'soft' },
    { d: house(124, 18, 132, 124), role: 'soft' },
    {
      d: 'M92 140 l5 -4 M91 120 l5 -4 M90 100 l5 -4 M89 80 l5 -4',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient', dashed: true },
  ],
} satisfies Drawings

/** The Election records' later stages, each with its true chapter pin. */
export const electionRedrawn: Redrawings = {
  'gotoh': [
    // The same stack of coins, the coin that stood beside it laid flat in
    // front and two more scattered: Hisoka kills him in the woods,
    // episode 142 / chapter 327. No cards and no wound.
    {
      episode: 142,
      chapter: 327,
      value: [
        ...GOTOH_STACK,
        ...moved(
          GOTOH_COIN,
          'translate(96 166) scale(1 0.32) translate(-82 -74)',
        ),
        {
          d: `${ellipse(34, 166, 10, 3.5)} ${ellipse(134, 160, 9, 3)}`,
          role: 'soft',
        },
        ...GOTOH_SHADOW,
      ],
    },
  ],
  'bushidora-ambitious': [
    // The same cap fallen on its side on the ground: he goes after Illumi
    // himself and is killed, reported in episode 143 / chapter 329.
    {
      episode: 143,
      chapter: 329,
      value: [
        ...moved(
          BUSHIDORA_CAP,
          'translate(84 120) rotate(64) scale(0.74) translate(-84 -100)',
        ),
        GROUND,
      ],
    },
  ],
  'teradein-neutral': [
    // The same tie lying loose on the floor, its knot undone: Hisoka kills
    // him in his room, episode 143 / chapter 330.
    {
      episode: 143,
      chapter: 330,
      value: [
        ...moved(
          TERADEIN_TIE,
          'translate(80 138) rotate(-76) translate(-80 -110)',
        ),
        GROUND,
      ],
    },
  ],
  'tsubone': [
    // Rider's High: she turns into a motorbike that Amane and Canary ride on
    // their own aura, episode 142 / chapter 328, the headlamp in tint. The
    // glider of episode 143 is a later shape of the same ability.
    { episode: 142, chapter: 328, value: MOTORBIKE },
  ],
}
