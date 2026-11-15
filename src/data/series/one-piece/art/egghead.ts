import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, SEA, shadow, star } from '~/lib/svg/primitives'

import { WORLD_GOVERNMENT_EMBLEM } from './summit-war'

/**
 * The laboratory of Egghead, a giant egg cracked open along its top, seen in
 * 3/4 with the far half of the broken rim behind the near one. The arc draws
 * it full size on its cloud; the place draws it small, over the island.
 */
const EGGHEAD_EGG: Stroke[] = [
  { d: 'M44 70 C36 84 35 104 42 120' },
  { d: 'M116 70 C124 84 125 104 118 120' },
  {
    d: 'M44 70 L52 80 L60 72 L68 84 L76 76 L84 86 L92 76 L100 82 L108 72 L116 70',
    role: 'accent',
  },
  {
    d: 'M44 70 L54 62 L64 67 L74 58 L84 65 L94 58 L104 64 L116 70',
    role: 'soft',
  },
  { d: 'M112 94 l7 -7 M112 106 l8 -8 M110 118 l8 -8', role: 'ambient' },
]

/** Ahiru's arm, raised as she aims it at the incoming ship. */
const AHIRU_AIM = 'rotate(-30 80 110)'

/** The egg moved up over the island and drawn at half size. */
const EGG_OVER_ISLAND = 'translate(40 -12) scale(0.5)'
/** The slant S-Hawk's sword lies at. */
const S_HAWK_SLANT = 'rotate(32 80 100)'
/** The slant Pythagoras's key lies at, its bow up and to the left. */
const PYTHAGORAS_KEY = 'rotate(-40 80 100)'
/** The tilt of Mars's globe on its axis. */
const MARS_TILT = 'rotate(-23 80 90)'
/** Ginny's joint of meat, enlarged by a quarter toward the top left. */
const GINNY_MEAT = 'translate(-20 -20) scale(1.25)'
/** The slant Nusjuro's katana lies at. */
const NUSJURO_KATANA = 'rotate(-24 80 100)'
/** One bearded ear of Ju Peter's wheat, and the beard on it. */
const WHEAT_EAR = 'M80 60 q-7 -12 0 -34 q7 22 0 34'
const WHEAT_AWNS = 'M76 36 l-8 -8 M84 36 l8 -8 M75 46 l-8 -8 M85 46 l8 -8'
/** The two side ears, fanned out from the binding. */
const WHEAT_LEFT = 'rotate(-36 80 118)'
const WHEAT_RIGHT = 'rotate(36 80 118)'
/** The slant Garling's sword lies at, the pommel up and to the right. */
const GARLING_SWORD = 'rotate(-50 80 100)'
/** The tilt of Bluegrass's steering wheel. */
const BLUEGRASS_WHEEL = 'rotate(-10 80 104)'
/** The lunarian flame on a Seraphim's back, as S-Bear's first drawing has it. */
const LUNARIAN_FLAME =
  'M116 106 C134 108 148 96 150 76 C145 84 140 86 136 86 C142 72 140 58 132 46 C132 60 126 68 120 70 C122 62 120 56 116 52 C118 66 116 76 114 84'

/** The lean of the barrel out of Urban's hat. */
const URBAN_BARREL = 'rotate(-14 80 96)'

/**
 * The island cloud under the Labophase once Nusjuro's ranged slash has gone
 * through it (ch. 1115 pp. 8-11, ep. 1149): the upper part still under the
 * egg, the lower part cut off along a straight line and dropping away, its
 * underside hatched, and the slash itself, as the accent, running out past
 * both ends. The cut is below the egg, which stays whole. The arc draws it
 * full size; the place draws it with the egg, over the island.
 */
const EGGHEAD_CLOUD_CUT: Stroke[] = [
  {
    d: 'M6 142 C0 132 10 124 26 130 C28 118 38 114 44 120 C60 130 100 130 116 120 C122 114 132 118 134 130 C150 126 160 134 154 142 Z',
  },
  {
    d: 'M12 154 L150 160 C158 164 156 172 146 173 Q80 182 16 168 C8 166 6 158 12 154 Z',
  },
  {
    d: 'M30 170 l6 -6 M50 174 l6 -6 M108 176 l6 -6 M128 174 l6 -6',
    role: 'ambient',
  },
  { d: 'M-8 150 Q80 140 168 152 Q80 145 -8 150 Z', role: 'accent' },
]

/** The egg drawn small over the island, on its cloud as the place shows it. */
const EGGHEAD_ISLAND_SKY: Stroke[] = [
  ...moved(EGGHEAD_EGG, EGG_OVER_ISLAND),
  {
    d: 'M28 86 C16 80 20 64 36 66 C38 56 50 52 56 58 C66 64 94 64 104 58 C110 52 122 56 124 66 C140 64 144 80 132 86 Z',
  },
  { d: 'M40 80 q10 -6 22 -2', role: 'soft' },
]

/** The island's shore line, under the egg and its cloud. */
const EGGHEAD_ISLAND_SHORE: Stroke = {
  d: 'M6 150 C16 140 28 136 42 138 C54 128 70 126 82 130 C96 124 116 128 128 138 C138 136 148 142 154 150',
}

/** The water line the island stands on, and the sea below it. */
const EGGHEAD_ISLAND_SEA: Stroke[] = [
  { d: 'M-4 150 H164', role: 'ambient' },
  ...SEA,
]

/**
 * The island under the Buster Call from 1139: two of the trees left, the
 * others gone to flames, a blast going up between them and the smoke rising
 * off the fires towards the cloud.
 */
const EGGHEAD_ISLAND_BURNING: Stroke[] = [
  { d: 'M38 137 q4 -10 8 0 M120 134 q4 -10 8 0', role: 'soft' },
  {
    d: 'M58 129 q-3 -6 1 -11 q1 4 4 4 q0 -6 4 -9 q3 8 -1 15 M100 126 q-3 -6 1 -11 q1 4 4 4 q0 -6 4 -9 q3 8 -1 15',
  },
  {
    d: 'M62 116 q-8 -8 0 -14 q8 -6 2 -14 q-4 -6 4 -10 M68 114 q-6 -8 2 -12 q8 -6 4 -12 M104 113 q-8 -8 0 -14 q8 -6 2 -14 q-4 -6 4 -10 M110 111 q-6 -8 2 -12 q8 -6 4 -12',
    role: 'ambient',
  },
  { d: 'M78 128 L74 116 L80 120 L83 108 L86 120 L93 116 L89 128' },
]

/**
 * The Thousand Sunny side on, as Lilith's robot carries it: the hull, the
 * lion's mane at the prow with the round of its face in soft, the mast, the
 * sail and the cabin. No flag and no face.
 */
const LILITH_SUNNY: Stroke[] = [
  { d: 'M34 78 H136 C135 88 130 96 120 98 H46 C38 96 34 88 34 78' },
  {
    d: 'M24 65 Q28.3 60.7 29.3 66.7 Q35.3 65.8 32.6 71.2 Q38 74 32.6 76.8 Q35.3 82.2 29.3 81.3 Q28.3 87.3 24 83 Q19.7 87.3 18.7 81.3 Q12.7 82.2 15.4 76.8 Q10 74 15.4 71.2 Q12.7 65.8 18.7 66.7 Q19.7 60.7 24 65',
  },
  { d: circle(24, 74, 5), role: 'soft' },
  { d: 'M84 78 V18' },
  {
    d: 'M70 28 H98 C101 40 101 54 98 66 H70 C67 54 67 40 70 28 Z',
    role: 'soft',
  },
  { d: 'M116 78 V66 H134 V78', role: 'soft' },
]

/**
 * One fist of the Vegaforce-01 in 3/4, as the accent: the front of the
 * fingers with their joints in soft, the thumb across them, the side face
 * showing its thickness and hatched, and the thin metal bar of the forearm
 * under it, ringed.
 */
const LILITH_FIST: Stroke[] = [
  {
    d: 'M50 102 H104 Q110 102 110 108 V130 Q110 136 104 136 H56 Q50 136 50 130 Z',
    role: 'accent',
  },
  { d: 'M110 106 L120 100 V128 Q120 134 110 136' },
  { d: 'M64 102 V118 M78 102 V118 M92 102 V118', role: 'soft' },
  { d: 'M50 120 H84 q6 0 6 6 q0 6 -6 6 H54' },
  { d: 'M112 116 l6 -4 M112 128 l6 -4', role: 'ambient' },
  { d: 'M70 136 V160 M90 136 V160' },
  { d: 'M70 146 Q80 150 90 146', role: 'soft' },
]

/**
 * Hancock's golden serpent earring, which S-Snake wears from her first
 * appearance: the snake's body bent into a hoop, its thickness showing along
 * the bottom and hatched underneath, scales across it in soft, the tail
 * turning up into the hook through the ear, and the head turned out at the
 * top, with no eye and no mouth. The lunarian flame on her back rises from
 * behind it as the accent.
 */
const S_SNAKE_EARRING: Stroke[] = [
  { d: 'M61.6 72.5 A42 42 0 1 0 103 79.8' },
  { d: 'M65.1 81.9 A32 32 0 1 0 96.6 87.5' },
  { d: 'M61.6 72.5 Q61 78 65.1 81.9' },
  { d: 'M103 79.8 C110 70 124 66 128 72 C130 78 118 86 96.6 87.5' },
  { d: 'M62 72 C58 58 70 50 78 58' },
  { d: 'M34.6 124 A42 42 0 0 0 117.4 124', role: 'soft' },
  {
    d: 'M42 136 l-3 4 M58 149 l-2 4 M94 149 l2 4 M110 136 l3 4',
    role: 'ambient',
  },
  {
    d: 'M36.5 97.6 L45.9 101.1 M43.8 139 L51.5 132.6 M76 154 V144 M108.2 139 L100.5 132.6 M118 112 H108',
    role: 'soft',
  },
  { d: LUNARIAN_FLAME, role: 'accent', transform: 'translate(2 40)' },
]

/**
 * S-Hawk's cross-shaped sword laid at a slant, shaped like Mihawk's but
 * plainer and with a pale blade: the single edge swelling toward the point,
 * the bevel in soft, the spine's far face showing and hatched, the long guard
 * with its top face and its forked ends, the wrapped grip and the round
 * pommel. The lunarian flame burns beside it as the accent.
 */
const S_HAWK_SWORD: Stroke[] = [
  {
    d: 'M76 118 V36 C76 26 80 20 88 12 C94 30 96 48 92 70 C90 88 86 104 86 118',
    transform: S_HAWK_SLANT,
  },
  { d: 'M76 118 L72 114 V38 C72 28 78 18 88 12', transform: S_HAWK_SLANT },
  {
    d: 'M72 50 l4 -4 M72 70 l4 -4 M72 90 l4 -4 M72 108 l4 -4',
    role: 'ambient',
    transform: S_HAWK_SLANT,
  },
  {
    d: 'M80 114 V40 C80 32 83 26 87 20',
    role: 'soft',
    transform: S_HAWK_SLANT,
  },
  { d: 'M42 118 h76 v6 h-76z', transform: S_HAWK_SLANT },
  { d: 'M42 118 l4 -4 h76 l-4 4', role: 'soft', transform: S_HAWK_SLANT },
  {
    d: 'M42 118 q-6 -2 -8 -10 M42 124 q-6 2 -8 10 M118 118 q6 -2 8 -10 M118 124 q6 2 8 10',
    transform: S_HAWK_SLANT,
  },
  { d: 'M76 124 V160 M84 124 V160', transform: S_HAWK_SLANT },
  {
    d: 'M76 134 l8 5 M76 144 l8 5 M76 154 l8 5',
    role: 'soft',
    transform: S_HAWK_SLANT,
  },
  { d: circle(80, 166, 6), transform: S_HAWK_SLANT },
  {
    d: 'M36 92 C18 84 8 66 10 44 C18 58 28 62 36 62 C34 72 36 82 36 92 Z',
    role: 'accent',
  },
]

/**
 * York's plate heaped with food in 3/4, the heap as the accent: the rim and
 * the plate's thickness under it, hatched, the heap's folds in soft and its
 * far side hatched, and a joint of meat sticking out of it.
 */
const YORK_PLATE: Stroke[] = [
  { d: ellipse(80, 138, 58, 16) },
  { d: ellipse(80, 136, 44, 10), role: 'soft' },
  { d: 'M22 138 v5 a58 16 0 0 0 116 0 v-5' },
  {
    d: 'M40 136 C40 120 50 108 64 108 C70 96 92 94 100 106 C112 108 120 120 120 136',
    role: 'accent',
  },
  { d: 'M52 124 q10 -8 20 0 M84 116 q10 -8 22 2', role: 'soft' },
  { d: 'M108 118 l6 -5 M112 128 l6 -5', role: 'ambient' },
  {
    d: 'M100 108 L122 88 M106 112 L128 92 M122 88 q-4 -8 2 -10 q6 -1 6 6 q6 -1 7 5 q-1 6 -7 4',
  },
  { d: 'M96 155 l6 -4 M110 154 l6 -4', role: 'ambient' },
]

/**
 * Saturn's square black hat in 3/4, low and wide, flat on top with softened
 * corners, the band in soft, and hatched because it is black.
 */
const SATURN_HAT: Stroke[] = [
  {
    d: 'M34 94 Q32 92 36 91 L78 84 Q80 83.5 82 84 L124 91 Q128 92 126 94 L82 103 Q80 104 78 103 Z',
  },
  { d: 'M34 94 V108 Q34 112 38 113.5 Q58 119 80 119 V103' },
  { d: 'M80 119 Q102 119 122 113.5 Q126 112 126 108 V94' },
  { d: 'M34 104 Q58 114 80 114 Q102 114 126 104', role: 'soft' },
  {
    d: 'M38 106 l8 -6 M44 115 l14 -10 M60 118 l14 -10 M86 118 l14 -10 M104 115 l14 -10 M64 92 l12 -6 M88 96 l12 -6',
    role: 'ambient',
  },
]

/** Saturn's walking cane lying in front of the hat, the round grip as the accent. */
const SATURN_CANE: Stroke[] = [
  { d: 'M24 176 L132 152 M25.5 182 L133.5 158' },
  { d: 'M24 176 L25.5 182' },
  { d: 'M133 151 c4 -12 26 -10 26 4 c0 12 -16 14 -24 6', role: 'accent' },
]

/**
 * The Five Elders' awakened forms each wear the ribbon of dark, flaming
 * smoke round the shoulders (ch. 1110 pp. 4-7, ep. 1144): a ribbon looping
 * round, its far side dashed, flames licking up off it, all in ambient.
 */
const ELDER_SMOKE: Stroke[] = [
  { d: 'M20 128 C50 146 110 146 140 128', role: 'ambient' },
  { d: 'M30 122 C56 112 104 112 130 122', role: 'ambient', dashed: true },
  {
    d: 'M44 138 q-6 -10 2 -18 M78 142 q-6 -10 2 -18 M112 138 q-6 -10 2 -18',
    role: 'ambient',
  },
]

/**
 * Nusjuro's katana, which he always keeps in his hand, half drawn and laid
 * at a slant: the saya, the bare steel, the guard as the accent with its
 * thickness, and the grip, left plain. Zoro only notices that it is a
 * Kitetsu (ch. 1117 pp. 7-8, ep. 1150), and the manga has not confirmed
 * that it is the first one, Shodai Kitetsu. The wooden look of the saya
 * with its grain in soft, the flame-shaped temper line in soft and the
 * four-lobed shape of the guard come from the wiki's Shodai Kitetsu page,
 * on that unconfirmed identification; the page calls the temper line and
 * the guard's shape typical of a Kitetsu.
 */
const NUSJURO_SWORD: Stroke[] = [
  { d: 'M6 94 H84 V106 H6 Q1 100 6 94 Z', transform: NUSJURO_KATANA },
  {
    d: 'M12 100 q12 -3 24 0 q12 3 24 0 q8 -1.5 14 0',
    role: 'soft',
    transform: NUSJURO_KATANA,
  },
  { d: 'M84 95.5 H116 V104.5 H84', transform: NUSJURO_KATANA },
  {
    d: 'M88 101.5 q2 -2.5 4 0 q2 -2.5 4 0 q2 -2.5 4 0 q2 -2.5 4 0 q2 -2.5 4 0 q2 -2.5 4 0',
    role: 'soft',
    transform: NUSJURO_KATANA,
  },
  {
    d: 'M117.6 87.5 Q122 77.5 126.4 87.5 Q132 100 126.4 112.5 Q122 122.5 117.6 112.5 Q112 100 117.6 87.5 Z',
    role: 'accent',
    transform: NUSJURO_KATANA,
  },
  {
    d: 'M127.6 89 Q133.5 100 127.6 111',
    role: 'soft',
    transform: NUSJURO_KATANA,
  },
  { d: 'M129 94 H156 Q159 100 156 106 H129 Z', transform: NUSJURO_KATANA },
]

/**
 * Prince Grus's Marine cap in 3/4: the crown with its seam and button, its
 * far side hatched, the band without lettering, and the oversized bill as
 * the accent, its red underside showing and hatched.
 */
const GRUS_CAP: Stroke[] = [
  { d: 'M36 114 C34 76 104 70 110 112' },
  { d: 'M72 74 Q70 92 72 112', role: 'soft' },
  { d: dots([[72, 74]]) },
  { d: 'M34 112 Q72 122 112 110 V120 Q72 132 34 122 Z' },
  {
    d: 'M108 112 C128 112 146 118 154 128 C150 136 138 138 126 136 C118 134 112 130 108 124',
    role: 'accent',
  },
  { d: 'M154 128 C140 130 122 128 110 120', role: 'soft' },
  { d: 'M122 130 l6 -4 M134 133 l6 -4 M144 132 l5 -4', role: 'ambient' },
  { d: 'M94 84 l8 -6 M98 96 l10 -8 M100 108 l8 -6', role: 'ambient' },
]

/** The Sunny dropping clear of the wrecked robot, small and tipped up. */
const LILITH_SUNNY_FALLING = 'translate(96 6) rotate(18 0 0) scale(0.42)'
/** The slant York's pistol lies at across her plate. */
const YORK_PISTOL = 'rotate(-14 80 160)'

/**
 * The large pistol York shot Shaka with, laid across her plate: the barrel
 * and the grip in one outline, the trigger guard and the muzzle and breech
 * lines in soft, the grip hatched. It carries the accent.
 */
const YORK_GUN: Stroke[] = [
  {
    d: 'M30 150 H120 V164 H98 L104 186 H86 L80 164 H30 Z',
    role: 'accent',
    transform: YORK_PISTOL,
  },
  { d: 'M80 164 Q76 174 90 174', role: 'soft', transform: YORK_PISTOL },
  { d: 'M36 150 V164 M106 150 V164', role: 'soft', transform: YORK_PISTOL },
  { d: 'M88 172 l6 -5 M90 180 l8 -6', role: 'ambient', transform: YORK_PISTOL },
]

/** The drawings of the records filed in the egghead stretch of the route. */
export const eggheadArt = {
  // The laboratory of Egghead from the sea, as the crew first sees it at
  // 1090: the giant egg cracked open along its top, its broken rim the
  // accent, standing on the island cloud that holds it over the water.
  // No laser bands round the cloud: the Frontier Dome is shown at 1099.
  // The cloud cut through by Nusjuro at 1149, in `eggheadRedrawn`.
  'egghead': [
    ...EGGHEAD_EGG,
    {
      d: 'M8 152 C0 140 10 126 26 130 C28 118 38 114 44 120 C60 130 100 130 116 120 C122 114 132 118 134 130 C150 126 160 140 152 152',
    },
    { d: 'M8 152 Q80 166 152 152', role: 'ambient' },
    ...SEA.slice(1),
  ],

  // The island from the sea, as it first shows at 1090: a low island dotted
  // with trees, and high over it the cloud with the cracked egg of the
  // laboratory on top, the egg of the arc drawn small. Bombarded by the
  // Buster Call from 1139 and its cloud cut through by Nusjuro at 1149, in
  // `eggheadRedrawn`.
  'egghead-island': [
    ...EGGHEAD_ISLAND_SKY,
    EGGHEAD_ISLAND_SHORE,
    {
      d: 'M38 137 q4 -10 8 0 M58 130 q5 -12 10 0 M78 128 q5 -11 10 0 M100 127 q5 -12 10 0 M120 134 q4 -10 8 0',
      role: 'soft',
    },
    ...EGGHEAD_ISLAND_SEA,
  ],

  // The apple core on its shaft that stands on Vegapunk's sliced head, set
  // apart as an object, as he is first met at 1096: the red top of the apple
  // with its cut rim, the stem and leaf as the accent, the core
  // bitten down to a narrow waist under it with a seed pocket in its flesh, the far side
  // hatched, and the shaft that is driven into his head. No head.
  'vegapunk': [
    { d: 'M38 90 C32 58 60 44 80 54 C100 44 128 58 122 90' },
    { d: ellipse(80, 90, 42, 9) },
    { d: 'M52 68 q8 -10 18 -10', role: 'soft' },
    { d: 'M80 54 C80 46 82 40 86 36', role: 'accent' },
    { d: 'M86 36 q16 -8 22 4 q-14 8 -22 -4z', role: 'accent' },
    { d: 'M106 64 l8 -5 M110 76 l8 -5', role: 'ambient' },
    {
      d: 'M48 96 q8 0 10 6 q6 2 6 8 q4 4 4 10 q2 6 4 12 M112 96 q-8 0 -10 6 q-6 2 -6 8 q-4 4 -4 10 q-2 6 -4 12',
    },
    { d: 'M62 102 q12 4 12 20 q-10 -6 -12 -20', role: 'soft' },
    {
      d: 'M66 106 q4 2 3 6 q-4 -2 -3 -6 M69 114 q4 2 3 6 q-4 -2 -3 -6',
      role: 'soft',
    },
    { d: 'M94 110 l6 -4 M90 122 l5 -4', role: 'ambient' },
    { d: ellipse(80, 132, 8, 2.5), role: 'soft' },
    { d: 'M77 134.5 V172 L80 178 L83 172 V134.5' },
    shadow(80, 188, 24),
  ],

  // Shaka's helmet seen from the side, as it first shows at 1091: the black
  // dome hatched on the far side, the edge of the face plate, the band
  // at its base, the gold drum at the ear with the antenna rising out of it.
  // No number on it, and no grille.
  'shaka': [
    { d: 'M36 140 C30 96 46 54 84 52 C120 50 134 92 128 140' },
    { d: 'M36 140 L34 150 Q82 162 130 150 L128 140' },
    { d: 'M36 140 Q82 150 128 140', role: 'soft' },
    { d: 'M58 58 C42 84 42 116 54 142', role: 'soft' },
    {
      d: `M96 94 a10 16 0 0 0 0 32 ${ellipse(104, 110, 10, 16)}`,
      role: 'accent',
    },
    { d: 'M96 94 H104 M96 126 H104', role: 'accent' },
    { d: 'M98 99 h4 M97 106 h4 M97 114 h4 M98 121 h4', role: 'soft' },
    { d: 'M108 95 L134 32' },
    {
      d: 'M40 84 l7 -6 M37 98 l8 -7 M36 112 l8 -7 M36 126 l8 -7 M38 140 l6 -5',
      role: 'ambient',
    },
    shadow(82, 178, 50),
  ],

  // One fist of the Vegaforce-01, her giant robot, rising out of the sea
  // with the Sunny held on it, as she carries the ship up to the Labophase
  // (ch. 1064, ep. 1094; the robot first lifts the ship out of the water at
  // 1090): the fist as the accent, in 3/4, and the Sunny side on above it.
  // No helmet: she wears hers only in the cockpit. Wrecked at 1126, in
  // `eggheadRedrawn`.
  'lilith': [...LILITH_SUNNY, ...LILITH_FIST, ...SEA],

  // Her serpent earring, the same as Hancock's, with her lunarian flame
  // behind it, as she wears it from her first appearance (1087). Her
  // Love-Love beam is added at 1101, in `eggheadRedrawn`.
  's-snake': S_SNAKE_EARRING,

  // His cross-shaped sword and the lunarian flame, both with him from his
  // first appearance (1087), over a shadow. His leg turned into a blade is
  // added at 1108, in `eggheadRedrawn`.
  's-hawk': [...S_HAWK_SWORD, shadow(80, 188, 46)],

  // Kuma's spotted bucket hat with its two round bear ears, the near one
  // whole, and the flame of a lunarian rising from behind its crown. His
  // paw pads are added at 1099, in `eggheadRedrawn`.
  's-bear': [
    { d: LUNARIAN_FLAME, role: 'accent' },
    { d: 'M44 112 C40 82 58 64 80 64 C102 64 118 80 116 112' },
    { d: 'M44 112 Q80 124 116 112', role: 'soft' },
    {
      d: 'M44 106 Q22 108 22 124 Q30 146 80 148 Q130 146 138 122 Q138 108 116 106',
    },
    { d: 'M90 66 a13 13 0 1 1 20 14' },
    { d: 'M96 64 a6 6 0 0 1 9 4', role: 'soft' },
    { d: 'M52 82 a11 11 0 0 1 18 -14' },
    {
      d: 'M43 98 q8 -6 14 1 q3 8 -5 11 q-6 1 -10 -3 M34 126 q8 -5 13 1 q-2 7 -10 6 q-5 -1 -3 -7z M88 136 q7 -3 11 2 q-3 6 -9 4 q-4 -2 -2 -6z M114 128 q7 -4 11 1 q-2 6 -8 5 q-5 -1 -3 -6z',
      role: 'soft',
    },
    { d: 'M48 84 l6 -5 M46 98 l7 -6', role: 'ambient' },
    shadow(80, 180, 58),
  ],

  // His webbed hand coming up out of a floor that ripples round it like
  // water, the way he swims through the ground at Egghead from his first
  // fight (ch. 1065, ep. 1095 covers p. 8-19): the forearm with its far side
  // hatched, the webbing between the fingers with its free edge and
  // hatched, the rings spreading over the floor, drops thrown up, and his
  // lunarian flame breaking the surface behind as the accent.
  's-shark': [
    { d: ellipse(80, 152, 26, 6) },
    { d: ellipse(80, 154, 46, 11), role: 'ambient', dashed: true },
    { d: ellipse(80, 156, 68, 16), role: 'ambient', dashed: true },
    { d: 'M68 150 C68 130 70 112 72 96 M92 150 C92 130 90 112 90 96' },
    { d: 'M86 118 l5 -4 M86 132 l5 -4 M86 146 l5 -4', role: 'ambient' },
    {
      d: 'M72 96 L60 84 L48 56 L54 53 L66 74 L64 40 L71 39 L76 70 L82 38 L89 39 L88 70 L98 44 L105 47 L96 78 L110 68 L115 73 L90 96',
    },
    {
      d: 'M52 66 Q58 70 66 62 M68 56 Q74 62 84 56 M88 58 Q94 64 101 60 M98 74 Q104 78 112 71',
    },
    {
      d: 'M57 70 l5 -5 M61 75 l3 -3 M73 62 l4 -4 M75 67 l2 -2 M89 64 l4 -4 M90 69 l3 -3 M101 76 l4 -3',
      role: 'ambient',
    },
    { d: LUNARIAN_FLAME, role: 'accent', transform: 'translate(-10 42)' },
    {
      d: dots([
        [42, 136],
        [52, 124],
        [116, 112],
        [34, 146],
      ]),
      role: 'ambient',
    },
  ],

  // A power plug in 3/4, its two prongs as the accent: the record and the
  // wiki both describe the two appendages on his head as a plug's prongs
  // (1095). The body hatched on its far face, the grip in soft, the cord
  // coiling away. A likeness, not something he carries; no bulb.
  'edison': [
    { d: 'M48 100 H94 V136 Q94 150 80 150 H62 Q48 150 48 136 Z' },
    { d: 'M48 100 L62 92 H108 L94 100' },
    { d: 'M108 92 V128 Q108 140 96 146' },
    { d: 'M98 104 l6 -4 M98 116 l6 -4 M98 128 l6 -4', role: 'ambient' },
    { d: 'M54 118 h34 M54 126 h34', role: 'soft' },
    { d: 'M64 96 V64 h7 V96 M82 96 V64 h7 V96', role: 'accent' },
    { d: 'M71 64 l3 -2 V94 M89 64 l3 -2 V94', role: 'soft' },
    {
      d: 'M71 150 C72 170 40 160 38 174 C36 186 76 188 98 178 C116 170 132 174 140 186',
    },
    shadow(76, 190, 40),
  ],

  // The wind-up key that turns on top of his round head, set apart as an
  // object and laid at a slant, as he is first seen at 1095: the flat bow of
  // two round lobes as the accent, with its slot and its thickness, the
  // neck, the thick shaft hatched on its far side, the turning collar, and
  // the square bit with its teeth.
  'pythagoras': [
    {
      d: 'M80 40 C70 26 46 30 46 50 C46 70 70 74 80 62 C90 74 114 70 114 50 C114 30 90 26 80 40 Z',
      role: 'accent',
      transform: PYTHAGORAS_KEY,
    },
    {
      d: 'M114 50 C117 60 113 70 104 74 M46 50 C44 58 46 66 52 70',
      role: 'soft',
      transform: PYTHAGORAS_KEY,
    },
    { d: 'M78 44 h4 v14 h-4 Z', role: 'soft', transform: PYTHAGORAS_KEY },
    { d: 'M73 66 h14 v10 h-14 Z', transform: PYTHAGORAS_KEY },
    { d: 'M74 76 V140 M86 76 V140', transform: PYTHAGORAS_KEY },
    { d: 'M86 80 l4 -3 V138', role: 'soft', transform: PYTHAGORAS_KEY },
    { d: 'M70 96 h20 v8 h-20 Z', transform: PYTHAGORAS_KEY },
    { d: 'M70 100 h20', role: 'soft', transform: PYTHAGORAS_KEY },
    {
      d: 'M74 140 h12 v12 h-12 Z M74 146 h-6 v6 h6 M86 144 h5 v5 h-5',
      transform: PYTHAGORAS_KEY,
    },
    {
      d: 'M82 112 l4 -4 M82 124 l4 -4',
      role: 'ambient',
      transform: PYTHAGORAS_KEY,
    },
    shadow(84, 168, 50),
  ],

  // One of her Light-Pressure Gloves as a fist in 3/4, the white sleeve
  // attached to it, punching through a hologram as she does at 1091: the
  // knuckles and fingers in soft, the thumb across them, the underside
  // hatched, and the pane of light breaking where it lands, as the accent.
  'atlas': [
    { d: 'M58 82 H96 Q108 82 108 94 V116 Q108 128 96 128 H62' },
    { d: 'M58 82 L66 74 H98 Q108 74 112 84', role: 'soft' },
    { d: 'M72 94 H104 M72 105 H106 M72 116 H104', role: 'soft' },
    { d: 'M62 128 Q56 112 72 110 H88 q6 0 6 6 q0 6 -6 6 H72' },
    { d: 'M58 76 C46 72 30 78 22 84 M58 134 C46 138 30 136 22 130' },
    { d: 'M22 84 q-8 23 0 46 M40 80 q-6 26 0 52', role: 'soft' },
    { d: 'M64 132 l6 -6 M76 132 l6 -6', role: 'ambient' },
    { d: 'M114 40 L150 52 V172 L114 160 Z', role: 'soft' },
    {
      d: 'M112 104 L126 84 M112 104 L134 98 M112 104 L130 120 M112 104 L122 140',
      role: 'accent',
    },
    {
      d: 'M136 66 l6 4 l-5 5z M140 134 l6 2 l-3 7z M126 58 l4 -4',
      role: 'soft',
    },
  ],

  // Her plate heaped with food, a joint of meat sticking out of it and a bone
  // she has already picked clean beside the plate: she eats for all the
  // satellites from her first appearance (1095). Her pistol across the plate
  // from 1111 and the World Government's emblem from 1123, in
  // `eggheadRedrawn`.
  'york': [
    ...YORK_PLATE,
    {
      d: 'M14 172 L46 164 M14 172 q-7 -1 -6 -6 q2 -4 7 -1 M14 172 q-4 6 -8 3 M46 164 q2 -6 7 -4 q3 4 -2 7 q5 3 1 6 q-5 1 -6 -5',
    },
    shadow(80, 166, 58),
  ],

  // His square black hat and his walking cane, the grip as the accent: he
  // has both from his first appearance (151) and on the way to Egghead
  // (1105). His human-beast form at 1128 and his death at 1155, in
  // `eggheadRedrawn`.
  'jaygarcia-saturn': [...SATURN_HAT, ...SATURN_CANE, shadow(80, 132, 50)],

  // A joint of meat on the bone with a bite taken out of it, the bite as the
  // accent: she has one when she first turns up beside Ivankov, biting it in
  // her debut panel (ch. 1095 p. 15, boxed "Slave Jinny") and holding it up
  // under the caption "Emporio Ivankov and Ginny, slaves" (ep. 1129,
  // 21:13). In 3/4: the meat's cut end round the bone in soft, a fold and a
  // light along its top, its underside hatched, the bone ending in a
  // knuckle. Her grave from 1132, in `eggheadRedrawn`.
  'ginny': [
    {
      d: 'M44 120 C38 92 60 72 84 74 C92 72 96 76 98 80 q-6 4 -4 10 q-6 4 -2 10 q-6 4 -2 10 C102 112 98 118 92 122 C76 132 50 134 44 120 Z',
      transform: GINNY_MEAT,
    },
    {
      d: 'M98 80 q-6 4 -4 10 q-6 4 -2 10 q-6 4 -2 10',
      role: 'accent',
      transform: GINNY_MEAT,
    },
    {
      d: 'M56 100 q10 -10 22 -8 M54 114 q10 4 20 0',
      role: 'soft',
      transform: GINNY_MEAT,
    },
    { d: 'M58 84 q10 -6 20 -4', role: 'soft', transform: GINNY_MEAT },
    {
      d: 'M52 126 l8 -6 M64 128 l10 -8 M80 124 l8 -6',
      role: 'ambient',
      transform: GINNY_MEAT,
    },
    {
      d: ellipse(97, 115, 6, 9),
      role: 'soft',
      transform: `${GINNY_MEAT} rotate(-50 97 115)`,
    },
    { d: 'M94 118 L124 142 M100 112 L130 136', transform: GINNY_MEAT },
    {
      d: 'M124 142 q-4 8 4 10 q6 2 8 -4 q8 0 8 -8 q-2 -6 -10 -4 q0 -6 -8 -4',
      transform: GINNY_MEAT,
    },
    { d: 'M130 146 q4 -2 6 -6', role: 'soft', transform: GINNY_MEAT },
    shadow(84, 180, 54),
  ],

  // A globe tilted on its stand: a title emblem, not an object he holds. It
  // stands for Warrior God of Environment, the title he is named with at
  // ch. 1086 / ep. 1120. The equator is the accent, a meridian in soft, the
  // half ring that holds it, and its night side hatched. His Itsumade form
  // takes its place at 1144, in `eggheadRedrawn`.
  'marcus-mars': [
    { d: circle(80, 90, 44) },
    { d: ellipse(80, 90, 44, 12), role: 'accent', transform: MARS_TILT },
    { d: ellipse(80, 90, 18, 44), role: 'soft', transform: MARS_TILT },
    {
      d: 'M98 52 l10 -2 M106 64 l14 -4 M110 78 l12 -4 M112 94 l10 -4 M110 110 l10 -5 M102 124 l12 -7',
      role: 'ambient',
    },
    { d: 'M59.7 42.1 A52 52 0 0 0 100.3 137.9' },
    { d: 'M100.3 137.9 Q96 150 80 150 V166' },
    { d: 'M54 170 a26 6 0 0 0 52 0 a26 6 0 0 0 -52 0' },
    shadow(80, 186, 34),
  ],

  // A pair of scales in 3/4: a title emblem, not an object he holds. It
  // stands for Warrior God of Justice, the title he is named with at
  // ch. 1086 / ep. 1120. The beam is the accent, tipped toward the near pan,
  // which hangs lower and larger, the undersides of the pans hatched. His
  // Fengxi form takes its place at 1144, in `eggheadRedrawn`.
  'topman-warcury': [
    { d: 'M80 44 V160' },
    { d: 'M76 44 L80 38 L84 44 L80 50 Z', role: 'soft' },
    { d: 'M36 62 L126 76', role: 'accent' },
    { d: 'M36 62 L24 104 M36 62 L48 104', role: 'soft' },
    { d: 'M126 76 L106 120 M126 76 L146 120', role: 'soft' },
    { d: 'M22 104 q14 10 28 0 M22 104 h28' },
    { d: 'M102 120 q24 18 48 0 M102 120 a24 6 0 0 0 48 0' },
    { d: 'M110 128 l6 -4 M124 132 l8 -6', role: 'ambient' },
    { d: 'M30 110 l6 -4', role: 'ambient' },
    {
      d: 'M56 160 a24 6 0 0 0 48 0 a24 6 0 0 0 -48 0 M56 160 v6 a24 6 0 0 0 48 0 v-6',
    },
    shadow(80, 182, 34),
  ],

  // His katana alone, half drawn: he always keeps it in his hand, from his
  // first appearance (151) to Egghead, where his record opens at 1120. His
  // skeletal horse's foreleg is added at 1144, in `eggheadRedrawn`.
  'ethanbaron-v-nusjuro': [...NUSJURO_SWORD, shadow(80, 176, 60)],

  // A sheaf of wheat bound at its waist, the binding as the accent: a title
  // emblem, not something he holds. It stands for Warrior God of
  // Agriculture, the title he is named with at ch. 1086 / ep. 1120. Three
  // bearded ears fan out on top, the stalks splay out under the binding, and
  // the far stalks are hatched. His Sandworm form takes its place at 1144,
  // in `eggheadRedrawn`.
  'shepherd-ju-peter': [
    { d: 'M72 118 L56 166 M76 118 L70 170 M84 118 L90 170 M88 118 L104 166' },
    {
      d: 'M72 118 C70 100 62 84 50 70 M80 118 V60 M88 118 C90 100 98 84 110 70',
    },
    { d: 'M70 112 Q80 118 90 112 M70 120 Q80 126 90 120', role: 'accent' },
    { d: WHEAT_EAR },
    { d: WHEAT_EAR, transform: WHEAT_LEFT },
    { d: WHEAT_EAR, transform: WHEAT_RIGHT },
    { d: `${WHEAT_AWNS} M76 54 l-7 -6 M84 54 l7 -6`, role: 'soft' },
    { d: WHEAT_AWNS, role: 'soft', transform: WHEAT_LEFT },
    { d: WHEAT_AWNS, role: 'soft', transform: WHEAT_RIGHT },
    { d: 'M94 150 l6 -5 M96 162 l6 -5', role: 'ambient' },
    shadow(80, 180, 40),
  ],

  // Her pink headphones in 3/4, as she wears them from her first appearance
  // (1090): the band, the near cup as the accent with its blue stripes in
  // soft and its back rim hatched, the far cup turned away. Below, the strap
  // of her backpack with Kopy-senpai, her teddy bear, hanging from it on a
  // cord. No face on the bear.
  'hibari': [
    { d: 'M40 96 C38 44 118 40 120 92' },
    { d: 'M48 94 C48 54 110 52 112 90', role: 'soft' },
    { d: ellipse(42, 106, 13, 19), role: 'accent' },
    { d: 'M42 87 C34 87 28 95 28 106 C28 117 34 125 42 125' },
    { d: 'M30 100 l5 -4 M30 112 l5 -4', role: 'ambient' },
    { d: ellipse(120, 102, 8, 16) },
    { d: 'M34 98 h16 M32 106 h20 M34 114 h16', role: 'soft' },
    { d: 'M24 146 L136 128 M26 154 L138 136' },
    { d: circle(82, 141, 3), role: 'soft' },
    { d: 'M82 144 V152' },
    { d: circle(82, 161, 9) },
    { d: [circle(74, 153, 3), circle(90, 153, 3)].join(' ') },
    { d: ellipse(82, 179, 11, 8) },
    shadow(82, 194, 40),
  ],
  // His Marine cap with its oversized bill, "his most noticeable trait",
  // over the fur collar of his coat, as he first appears (1090). His clay
  // from 1114, in `eggheadRedrawn`.
  'prince-grus': [
    ...GRUS_CAP,
    {
      d: 'M22 160 q6 -10 14 -3 q8 -10 16 -2 q8 -10 16 -1 q8 -10 16 0 q8 -10 16 -1 q8 -10 16 -2 q8 -8 14 3',
    },
    { d: 'M30 166 Q80 178 134 166', role: 'soft' },
    shadow(80, 186, 54),
  ],
  // Her spiked choker lying open in 3/4, as she wears it from her first
  // appearance (1090): the band with its thickness, hatched at the front,
  // the two cut ends of the opening at the back, seven large spikes round it
  // as the accent, and one of her hoop earrings beside it.
  'doll': [
    { d: 'M89.1 106.1 A50 19 0 1 1 54.9 106.1' },
    { d: 'M85.7 109.7 A40 15.2 0 1 1 58.3 109.7' },
    { d: 'M89.1 106.1 L85.7 109.7 M54.9 106.1 L58.3 109.7' },
    { d: 'M22 124 V132 A50 19 0 0 0 122 132 V124' },
    {
      d: 'M34 139 l4 -5 M52 144 l4 -5 M92 144 l4 -5 M110 139 l4 -5',
      role: 'ambient',
    },
    {
      d: 'M33.1 136 L10.5 137.5 L25.3 130.8 M58.2 142.3 L42 148.5 L44 139.8 M88.3 142 L84.3 150.6 L72.9 143 M112.5 135.2 L122.2 143.1 L101.4 139.4 M122 124.3 L141.9 128.7 L119.3 130.2 M23.9 118.8 L7.7 112.6 L30.5 113.4 M113.5 113.4 L136.3 112.6 L120.1 118.8',
      role: 'accent',
    },
    { d: circle(128, 66, 13) },
    { d: 'M119 74 A13 13 0 0 0 139 72', role: 'soft' },
    { d: 'M128 53 q4 -8 0 -12', role: 'soft' },
    shadow(76, 162, 60),
  ],

  // A coiled whip lying on its side, the handle up and the lash running
  // loose out of the coil.
  'kujaku': [
    { d: ellipse(74, 140, 48, 18) },
    { d: ellipse(74, 132, 38, 13), role: 'soft' },
    { d: ellipse(74, 126, 28, 9), role: 'soft' },
    { d: 'M98 70 L122 42 L130 49 L106 77 Z' },
    { d: 'M102 74 C92 92 70 100 60 118', role: 'accent' },
    { d: 'M118 146 C132 152 140 162 146 176', role: 'accent' },
    { d: dots([[126, 38]]), role: 'accent' },
    shadow(80, 188, 52),
  ],
  // Her mechanical left arm, raised the way she aims it at the ship coming
  // in to Momoiro, ready to shoot (ch. 1082 pp. 12–13, ep. 1116): the ball
  // joint at the elbow as the accent, the plated forearm with its rivets and
  // hatched underside, the wrist ring and the jointed fingers.
  'ahiru': [
    { d: 'M-6 98 L22 100 M-6 122 L22 120', transform: AHIRU_AIM },
    { d: circle(36, 110, 16), role: 'accent', transform: AHIRU_AIM },
    { d: circle(36, 110, 6), role: 'soft', transform: AHIRU_AIM },
    { d: 'M52 97 L112 100 L112 120 L52 123', transform: AHIRU_AIM },
    {
      d: 'M72 98 C76 104 76 116 72 122 M92 99 C96 104 96 116 92 121',
      role: 'soft',
      transform: AHIRU_AIM,
    },
    { d: 'M112 98 h8 v24 h-8', transform: AHIRU_AIM },
    { d: 'M120 100 L138 98 L140 122 L120 120', transform: AHIRU_AIM },
    {
      d: 'M138 99 h9 l2 2 h10 M139 105 h11 l2 1 h10 M139 111 h11 l2 1 h9 M139 117 h9 l2 1 h7 M128 121 l4 9 l9 2',
      transform: AHIRU_AIM,
    },
    {
      d: 'M56 122 l8 -7 M66 122 l8 -7 M78 121 l8 -7 M88 121 l7 -6 M98 120 l8 -7',
      role: 'ambient',
      transform: AHIRU_AIM,
    },
    {
      d: dots([
        [62, 103],
        [82, 104],
        [102, 105],
        [128, 104],
      ]),
      role: 'soft',
      transform: AHIRU_AIM,
    },
    shadow(84, 186, 52),
  ],

  // Seen from behind, as no face is drawn: the aviator helmet with its
  // seams and ear flaps, the cattle horns standing out on either side as
  // the accent, and the very long neck with its Holstein spots running
  // down to his shirt collar (ch. 1082 pp. 12–13, ep. 1116).
  'ushiano': [
    {
      d: 'M56 78 C56 50 104 50 104 78 L106 104 C102 108 98 106 96 100 C88 104 72 104 64 100 C62 106 58 108 54 104 Z',
    },
    { d: 'M80 52 V102 M60 72 C72 66 88 66 100 72', role: 'soft' },
    { d: 'M54 104 l-2 10 M106 104 l2 10', role: 'soft' },
    {
      d: 'M57 68 C42 66 32 56 30 40 C38 48 48 52 60 60 M103 68 C118 66 128 56 130 40 C122 48 112 52 100 60',
      role: 'accent',
    },
    { d: 'M70 104 C69 122 68 140 66 156 M90 104 C91 122 92 140 94 156' },
    {
      d: 'M72 116 C78 112 84 118 80 124 C76 128 70 124 72 116 Z M82 138 C90 136 92 146 86 150 C80 150 78 142 82 138 Z M68 142 c4 -2 7 2 5 7',
      role: 'soft',
    },
    { d: 'M98 82 l7 -6 M98 92 l8 -6 M98 100 l6 -4', role: 'ambient' },
    { d: 'M40 172 L66 156 L80 168 L94 156 L120 172', role: 'soft' },
    shadow(80, 186, 44),
  ],

  // The telescope Gambo says he cheated the bet with, drawn out to its
  // three sections, with the bite Jiron takes out of it to get rid of the
  // evidence as the accent, crumbs falling (ch. 1082 pp. 13–14, ep. 1116).
  'jiron': [
    { d: 'M22 120 L60 106 L66 122 L28 136 Z' },
    {
      d: ellipse(25, 128, 5, 8.5),
      role: 'soft',
      transform: 'rotate(-20 25 128)',
    },
    { d: 'M60 104 L102 90 L109 108 L66 124' },
    { d: 'M102 88 L136 77 L144 99 L109 110' },
    { d: ellipse(140, 88, 5, 11.5), transform: 'rotate(-20 140 88)' },
    { d: 'M60 104 L66 124 M102 88 L109 110', role: 'soft' },
    { d: 'M22 120 l-3 3 l3 3 l-4 3 l3 3 l-3 3 l5 2 L28 136', role: 'accent' },
    {
      d: 'M34 131 l6 -5 M46 127 l6 -5 M74 119 l6 -5 M86 115 l6 -5 M116 106 l6 -5 M128 102 l6 -5',
      role: 'ambient',
    },
    {
      d: dots([
        [16, 150],
        [26, 156],
        [12, 160],
      ]),
      role: 'accent',
    },
    shadow(84, 176, 58),
  ],

  // His hat, shaped like a thumbtack: the wide flat head with its rim
  // turning away hatched, the round grip standing up from it and its point
  // on top as the accent (ch. 1082 pp. 12–13, ep. 1116).
  'gambo': [
    { d: ellipse(80, 118, 58, 18) },
    { d: 'M22 118 V130 A58 18 0 0 0 138 130 V118' },
    { d: 'M28 124 A58 18 0 0 0 132 124', role: 'soft' },
    { d: ellipse(80, 114, 22, 7), role: 'soft' },
    { d: 'M72 113 V68 C72 62 88 62 88 68 V113' },
    { d: 'M76 64 L80 36 L84 64', role: 'accent' },
    { d: 'M76 72 V108', role: 'soft' },
    {
      d: 'M30 138 l6 -7 M42 144 l6 -8 M56 147 l6 -8 M98 147 l6 -8 M112 144 l6 -8 M124 138 l6 -7',
      role: 'ambient',
    },
    shadow(80, 182, 56),
  ],
  // A queen's crown in three-quarters, its straight upright points fanning
  // out as in her silhouette at 1118: the band seen from the front with a
  // ridge and one set stone, the back of the band between the points, and
  // the band's ends hatched where they turn away.
  'nefertari-lili': [
    { d: 'M32 128 Q80 160 128 128 V148 Q80 180 32 148 Z' },
    { d: 'M32 138 Q80 170 128 138', role: 'soft' },
    { d: 'M80 149 L85 154 L80 159 L75 154 Z', role: 'soft' },
    {
      d: 'M44 125.8 Q49 125 54 124.5 M66 123.4 Q70.5 123.2 75 123.1 M85 123.1 Q89.5 123.2 94 123.4 M106 124.5 Q111 125 116 125.8',
      role: 'soft',
    },
    { d: 'M34 129.3 L28 105 L29.8 98.8 L36 109.7 L42 134', role: 'accent' },
    {
      d: 'M55 139.7 L51.6 106.8 L54.6 99.2 L59.6 109.2 L63 142',
      role: 'accent',
    },
    { d: 'M76 143.9 L76 104.9 L80 96 L84 104.9 L84 143.9', role: 'accent' },
    {
      d: 'M97 142 L100.4 109.2 L105.4 99.2 L108.4 106.8 L105 139.7',
      role: 'accent',
    },
    {
      d: 'M118 134 L124 109.7 L130.2 98.8 L132 105 L126 129.3',
      role: 'accent',
    },
    { d: 'M35 147 l6 -6 M35 139 l5 -5 M118 151 l7 -7', role: 'ambient' },
    shadow(80, 182, 54),
  ],
  // His straight sword in its sheath, laid at a slant, as he has it when he
  // first appears at 1120: the black sheath hatched, its two bands near the
  // mouth, the round golden knuckle-bow guard as the accent, the wrapped
  // grip and the round pommel. No glasses.
  'figarland-garling': [
    { d: 'M2 95 H100 V105 H2 Q-4 100 2 95 Z', transform: GARLING_SWORD },
    {
      d: 'M8 95 l8 10 M24 95 l8 10 M40 95 l8 10 M56 95 l8 10 M72 95 l8 10',
      role: 'ambient',
      transform: GARLING_SWORD,
    },
    { d: 'M88 95 V105 M94 95 V105', role: 'soft', transform: GARLING_SWORD },
    { d: 'M100 90 h5 v20 h-5 z', transform: GARLING_SWORD },
    {
      d: 'M105 106 C116 126 140 128 150 104',
      role: 'accent',
      transform: GARLING_SWORD,
    },
    { d: 'M105 97 H146 M105 103 H146', transform: GARLING_SWORD },
    {
      d: 'M112 97 l4 6 M121 97 l4 6 M130 97 l4 6 M139 97 l4 6',
      role: 'soft',
      transform: GARLING_SWORD,
    },
    { d: circle(151, 100, 5), transform: GARLING_SWORD },
    shadow(80, 184, 44),
  ],

  // The steering wheel she grips riding a Pacifista at 1128, when she says
  // she is a Driving Human who ate the Ride-Ride Fruit: the rim in 3/4 with
  // its near edge as the accent, its thickness, the hub and three spokes,
  // the grips wrapped in soft and the underside hatched.
  'bluegrass': [
    { d: ellipse(80, 100, 58, 36), transform: BLUEGRASS_WHEEL },
    { d: ellipse(80, 100, 48, 28), transform: BLUEGRASS_WHEEL },
    {
      d: 'M22 100 a58 36 0 0 0 116 0',
      role: 'accent',
      transform: BLUEGRASS_WHEEL,
    },
    { d: ellipse(80, 104, 12, 7), transform: BLUEGRASS_WHEEL },
    {
      d: 'M68 104 L33 98 M92 104 L127 98 M80 111 V128',
      transform: BLUEGRASS_WHEEL,
    },
    {
      d: 'M26 88 l6 6 M24 100 l8 2 M28 112 l7 -2 M132 88 l-6 6 M136 100 l-8 2 M132 112 l-7 -2',
      role: 'soft',
      transform: BLUEGRASS_WHEEL,
    },
    {
      d: 'M60 128 l8 -6 M80 132 l8 -6 M100 128 l8 -6',
      role: 'ambient',
      transform: BLUEGRASS_WHEEL,
    },
    shadow(80, 170, 54),
  ],

  // A maul whose head is a scallop shell, ribs fanning out from the hinge.
  'pomsky': [
    { d: 'M100 96 L66 60 Q100 20 134 60 Z' },
    {
      d: 'M66 60 q8 -10 17 -14 q8 -8 17 -8 q9 0 17 8 q9 4 17 14',
      role: 'accent',
    },
    {
      d: 'M100 96 L78 46 M100 96 L92 38 M100 96 L108 38 M100 96 L122 46',
      role: 'soft',
    },
    { d: 'M90 96 h20 v8 h-20 Z' },
    { d: 'M96 104 L40 172 M104 104 L48 178' },
    { d: 'M52 158 l8 7 M46 166 l8 7', role: 'soft' },
    shadow(80, 188, 44),
  ],
  // The iron collar of a slave and its chain, as he wears it in Kuma's
  // memories at 1129: the heavy ring lying in 3/4 with its rim as the
  // accent, its thickness hatched underneath, the lock in soft, and the
  // chain running off it, one link flat and the next on its edge.
  'clapp': [
    { d: ellipse(66, 132, 48, 18), role: 'accent' },
    { d: ellipse(66, 130, 32, 10) },
    { d: 'M18 132 v12 a48 18 0 0 0 96 0 v-12' },
    {
      d: 'M30 152 l8 -6 M50 158 l8 -6 M74 158 l8 -6 M96 152 l8 -6',
      role: 'ambient',
    },
    { d: 'M60 150 h12 v14 h-12 z', role: 'soft' },
    { d: ellipse(122, 122, 10, 6), transform: 'rotate(-45 122 122)' },
    { d: ellipse(133, 109, 9, 2.5), transform: 'rotate(-45 133 109)' },
    { d: ellipse(144, 96, 10, 6), transform: 'rotate(-45 144 96)' },
    { d: ellipse(155, 83, 9, 2.5), transform: 'rotate(-45 155 83)' },
    shadow(70, 182, 54),
  ],

  // His crown in 3/4, as he wears it from 1131: a tall gold band flaring
  // out to its top and cut into square battlements, the far rim seen over
  // the near one in soft, the row of round stones near the base as the
  // accent, and the inside and the turning side hatched.
  'bekori': [
    {
      d: 'M30 96 L47.5 99.5 V115.5 H52.5 V100.2 L67.5 101.6 V117.6 H72.5 V101.9 L87.5 101.9 V117.9 H92.5 V101.6 L107.5 100.2 V116.2 H112.5 V99.5 L130 96',
    },
    {
      d: 'M30 96 L48 90.1 V100.1 H52 V89.1 L68 86.6 V96.6 H72 V86.3 L88 86.3 V96.3 H92 V86.6 L108 89.1 V99.1 H112 V90.1 L130 96',
      role: 'soft',
    },
    { d: 'M30 96 L38 150 M130 96 L122 150' },
    { d: 'M38 150 Q80 162 122 150' },
    {
      d: [
        circle(54, 140, 3.5),
        circle(67, 143, 3.5),
        circle(80, 144, 3.5),
        circle(93, 143, 3.5),
        circle(106, 140, 3.5),
      ].join(' '),
      role: 'accent',
    },
    { d: 'M58 90 l8 -6 M94 90 l8 -6', role: 'ambient' },
    { d: 'M116 122 l8 -6 M114 138 l7 -6', role: 'ambient' },
    shadow(80, 176, 44),
  ],

  // Her side cap in 3/4, as she wears it at 1133: the crown dark then, so
  // hatched, and the light brim rolled up round it, its top edge as the
  // accent, with the fold where the brim turns.
  'conney': [
    { d: 'M38 114 C34 80 56 58 84 58 C112 58 130 80 126 112' },
    {
      d: 'M30 122 C30 110 44 108 58 112 C62 106 70 104 76 108 C96 112 126 104 132 118',
      role: 'accent',
    },
    { d: 'M30 122 C34 138 60 144 82 142 C104 142 128 136 132 118' },
    { d: 'M58 112 Q62 126 60 140', role: 'soft' },
    { d: 'M38 128 Q48 134 56 134 M64 136 Q96 140 124 126', role: 'soft' },
    {
      d: 'M44 96 l16 -16 M50 104 l26 -26 M70 106 l30 -30 M90 106 l24 -24 M108 104 l14 -14',
      role: 'ambient',
    },
    shadow(80, 166, 54),
  ],

  // His white ushanka in 3/4, as he wears it at 1133, with its ear flaps
  // turned up and tied over the crown: the near flap's edging as the accent,
  // the tip of the far one showing over the top, the fold of the front in
  // soft, and the side that turns away hatched.
  'bulldog': [
    { d: 'M38 126 C34 90 56 68 84 68 C112 68 130 88 126 124' },
    { d: 'M38 126 Q82 144 126 124' },
    { d: 'M40 112 Q82 128 124 110', role: 'soft' },
    {
      d: 'M80 72 C96 58 126 62 132 82 C136 96 126 104 114 98 C102 92 92 84 80 72 Z',
      role: 'accent',
    },
    { d: 'M92 74 C104 68 120 72 124 84 C126 92 120 94 114 90', role: 'soft' },
    { d: 'M48 88 C46 76 54 70 64 70', role: 'accent' },
    { d: 'M108 112 l10 -8 M112 124 l8 -6 M60 128 l8 -6', role: 'ambient' },
    shadow(82, 160, 52),
  ],

  // Her nurse's cap in 3/4, as she arrives at Kuma's church at 1134: the
  // band with its fold as the accent, the crown pleated to the back, the
  // far side hatched. Before it, the black clipboard she carries in, hatched,
  // with its clip. No medicine: it is first shown at 1135.
  'alpha': [
    { d: 'M10 150 L74 134 L102 160 L38 178 Z' },
    { d: 'M38 178 V184 L102 166 V160' },
    { d: 'M34 146 l14 -4 l2 -6 l-10 3 z', role: 'soft' },
    {
      d: 'M26 164 l10 -10 M42 168 l18 -18 M60 164 l16 -16 M76 160 l10 -10',
      role: 'ambient',
    },
    { d: 'M64 104 Q100 120 144 100 L140 126 Q102 142 68 128 Z' },
    { d: 'M66 114 Q102 130 142 112', role: 'accent' },
    { d: 'M64 104 C70 84 86 76 104 76 C122 76 138 86 144 100' },
    {
      d: 'M104 76 Q100 92 102 112 M82 82 Q92 96 102 112 M126 82 Q112 96 102 112',
      role: 'soft',
    },
    { d: 'M128 124 l8 -6 M132 110 l8 -6', role: 'ambient' },
    shadow(104, 150, 40),
  ],

  // The giant gauntlet punching to the left: a fist in its glove, the
  // cylinder over the forearm hatched underneath, and the Steam Knuckle's
  // steam blasting out of the back. No lettering on the cylinder.
  'red-king': [
    { d: 'M12 90 V120 Q14 136 30 136 H60 Q74 136 76 122 V86' },
    { d: 'M12 90 q7 -10 15 -2 q8 -10 16 -2 q8 -10 16 -2 q8 -8 17 0' },
    { d: 'M19 82 L32 70 H86 M76 86 L88 74', role: 'soft' },
    { d: 'M27 88 V108 M43 86 V108 M59 84 V108', role: 'soft' },
    { d: 'M14 110 H54 q9 0 9 8 q0 8 -9 8 H18' },
    { d: 'M86 64 H118 M76 122 H118' },
    { d: ellipse(118, 93, 9, 29) },
    { d: 'M98 64 a8 29 0 0 1 0 58', role: 'soft' },
    { d: 'M100 120 l8 -8 M108 122 l10 -10', role: 'ambient' },
    {
      d: 'M128 80 q2 -12 14 -10 q10 -2 12 8 q8 6 0 14 M128 106 q10 -6 16 2 q10 2 8 12 q2 10 -10 10',
      role: 'accent',
    },
    shadow(72, 178, 58),
  ],
  // A pair of glasses whose lenses sweep out to sharp points, arms folded
  // under them.
  'hound': [
    { d: 'M16 132 L30 118 H70 q4 18 -8 28 q-26 8 -38 -8 Z' },
    { d: 'M144 132 L130 118 H90 q-4 18 8 28 q26 8 38 -8 Z' },
    { d: 'M70 124 q10 -8 20 0' },
    { d: 'M20 136 L42 166 M140 136 L118 166', role: 'soft' },
    { d: 'M38 128 l14 -5 M102 128 l14 -5', role: 'accent' },
    shadow(80, 188, 52),
  ],
  // The crescent he wears upright on his head, its horns up and curling in,
  // set apart as an object, as he is first named at 1142: the inner edge as
  // the accent, the dark outer half hatched below the line where it turns,
  // and the short foot it sits on.
  'guillotine': [
    { d: 'M40 46 C12 70 18 130 80 134 C142 130 148 70 120 46' },
    { d: 'M40 46 C40 80 58 104 80 104 C102 104 120 80 120 46', role: 'accent' },
    { d: 'M26 80 C32 112 54 122 80 122 C106 122 128 112 134 80', role: 'soft' },
    {
      d: 'M24 92 l8 -8 M30 110 l10 -10 M44 122 l10 -10 M62 128 l10 -10 M84 128 l10 -10 M104 124 l10 -10 M120 112 l10 -10 M130 94 l6 -6',
      role: 'ambient',
    },
    { d: 'M72 134 v14 h16 v-14' },
    { d: 'M72 141 h16', role: 'soft' },
    shadow(80, 166, 40),
  ],

  // His cap in 3/4, as he wears it at 1142: the band across the front as
  // the accent, left blank where it reads MARINES, the seam and the button
  // of the crown, the short peak hatched underneath, the far side hatched.
  'tosa': [
    { d: 'M40 128 C38 92 58 72 86 72 C112 72 128 90 126 124' },
    { d: 'M40 128 Q84 146 126 124' },
    { d: 'M44 102 Q78 116 112 102 L114 124 Q78 138 42 124 Z', role: 'accent' },
    { d: 'M86 72 Q84 96 80 112', role: 'soft' },
    { d: dots([[86, 72]]) },
    { d: 'M40 128 C24 134 18 146 28 152 C48 160 80 156 96 140' },
    {
      d: 'M30 146 l6 -5 M42 152 l7 -6 M56 152 l7 -6 M70 150 l7 -6',
      role: 'ambient',
    },
    { d: 'M114 112 l10 -8 M116 96 l8 -6', role: 'ambient' },
    shadow(80, 176, 50),
  ],

  // His black top hat in 3/4, hatched because it is black, its crown turned
  // into the barrel of a cannon as he points it at Bonney (1129): the
  // muzzle as the accent, a ring round the barrel, and the two lines of the
  // band in soft, with no lettering.
  'urban': [
    { d: ellipse(80, 150, 50, 12) },
    { d: 'M52 148 V96 M108 148 V96' },
    { d: 'M52 96 a28 7 0 0 0 56 0' },
    { d: 'M52 130 Q80 138 108 130 M52 122 Q80 130 108 122', role: 'soft' },
    { d: 'M62 98 L66 42 M98 98 L94 42', transform: URBAN_BARREL },
    { d: ellipse(80, 40, 16, 5), role: 'accent', transform: URBAN_BARREL },
    {
      d: 'M64 50 a16 5 0 0 0 32 0 M65 70 a15 4 0 0 0 30 0',
      role: 'soft',
      transform: URBAN_BARREL,
    },
    {
      d: 'M94 108 l12 -10 M94 120 l12 -10 M94 144 l12 -10 M66 108 l10 -8',
      role: 'ambient',
    },
    {
      d: 'M86 80 l8 -6 M86 92 l8 -6',
      role: 'ambient',
      transform: URBAN_BARREL,
    },
    shadow(80, 184, 58),
  ],

  // A drum with volume, its head in 3/4 as the accent, the hoops above and
  // below, the lacing between them and the turning side hatched: the Drums
  // of Liberation, the rhythm Zunesha hears and names as Joy Boy's return
  // (ch. 1043 / ep. 1070). An emblem, not something he is shown with.
  'joy-boy': [
    { d: ellipse(80, 82, 46, 14), role: 'accent' },
    { d: 'M34 82 V150 M126 82 V150' },
    { d: 'M34 150 a46 14 0 0 0 92 0' },
    { d: 'M34 92 a46 14 0 0 0 92 0 M34 140 a46 14 0 0 0 92 0', role: 'soft' },
    {
      d: 'M40 102 L54 150 L68 106 L82 154 L96 106 L110 150 L120 102',
      role: 'soft',
    },
    { d: 'M112 112 l10 -8 M112 126 l10 -8', role: 'ambient' },
    shadow(80, 184, 52),
  ],

  // A horned iron helmet with a barred visor, one horn snapped off, moss on
  // the rust.
  'emet': [
    { d: 'M36 176 V112 a44 44 0 0 1 88 0 V176' },
    { d: 'M28 176 h104' },
    { d: 'M52 112 h56 v58 h-56z M66 112 V170 M80 112 V170 M94 112 V170' },
    { d: 'M40 104 C22 92 14 70 20 44 C26 66 38 78 52 84', role: 'accent' },
    { d: 'M120 104 C128 100 134 94 138 86 l-5 -4 l-3 6', role: 'accent' },
    {
      d: dots([
        [44, 150],
        [116, 140],
        [46, 164],
        [114, 160],
        [60, 80],
      ]),
      role: 'soft',
    },
    shadow(80, 188, 52),
  ],
} satisfies Drawings

/** Vegapunk's apple core on its shaft, without the shadow under it. */
const VEGAPUNK_APPLE = eggheadArt.vegapunk.slice(0, -1)

/** Edison's plug, without its cord and its shadow. */
const EDISON_PLUG = eggheadArt.edison.slice(0, -2)

/** Pythagoras's key, without its shadow. */
const PYTHAGORAS_KEY_ALONE = eggheadArt.pythagoras.slice(0, -1)

/**
 * Atlas's gloved fist and its sleeve, without the hologram it breaks. With
 * the pane gone the accent moves to the glove, on the line of her knuckles.
 */
const ATLAS_GLOVE: Stroke[] = eggheadArt.atlas
  .slice(0, 7)
  .map((stroke, index) =>
    index === 2 ? { ...stroke, role: 'accent' } : stroke,
  )

/** The records of this stretch drawn again, from the episode the story changes them. */
export const eggheadRedrawn: Redrawings = {
  // The apple core of his first drawing toppled over onto its side, the
  // shaft sticking out along the ground, and above it the line of a heart
  // monitor that peaks once and runs flat. Kizaru runs him through with a
  // sword of light as Sanji carries him off (ch. 1108 p. 12), and the
  // monitor in his laboratory beeps on as his recorded message starts
  // (p. 13). Episode 1142 adapts it.
  'vegapunk': [
    {
      episode: 1142,
      chapter: 1108,
      value: [
        ...moved(VEGAPUNK_APPLE, 'translate(6 26) rotate(-78 80 110)'),
        { d: 'M6 40 H50 L56 26 L62 52 L68 34 L72 40 H154', role: 'ambient' },
        shadow(84, 176, 62),
      ],
    },
  ],
  // His helmet with the side blown open where the gold drum was: the hole
  // as the accent, cracks running out of it, splinters flying off and the
  // antenna snapped to a stub, its far end lying on the ground. He is shot
  // in the head from behind while trying to free Vegapunk (ch. 1077 p. 17,
  // ep. 1110). Then the body Edison builds from spare parts at 1155
  // (ch. 1125 p. 15): Shaka's tall black coat, its circuit stripe as the
  // accent, an empty socket on top for Edison's head and one at each
  // shoulder for the arms of the others, and the legs under its hem. He
  // speaks from it; the helmet is gone.
  'shaka': [
    {
      episode: 1110,
      chapter: 1077,
      value: [
        ...eggheadArt.shaka.slice(0, 4),
        {
          d: 'M94 98 L100 94 L103 101 L110 96 L111 105 L117 110 L110 115 L113 124 L104 122 L100 129 L96 122 L91 117 L95 110 Z',
          role: 'accent',
        },
        { d: 'M108 96 L112 84 L108 78' },
        {
          d: 'M94 98 L86 88 M91 117 L82 124 M100 129 L98 140 M111 105 L118 98',
          role: 'soft',
        },
        {
          d: 'M124 92 l7 -5 l-1 7 z M130 110 l8 1 l-5 6 z M120 74 l5 -6 l2 7 z M136 126 l6 3 l-6 3 z',
          role: 'soft',
        },
        { d: 'M104 172 L146 158' },
        ...eggheadArt.shaka.slice(8),
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        { d: ellipse(80, 40, 16, 5) },
        {
          d: 'M64 41 C50 44 40 50 38 60 V150 M96 41 C110 44 120 50 122 60 V150',
        },
        { d: 'M38 150 Q80 158 122 150' },
        { d: 'M84 46 V78 H90 V96 H84 V124 H92 V152', role: 'accent' },
        {
          d: 'M42 70 l10 -8 M42 86 l12 -10 M42 102 l12 -10 M42 118 l12 -10 M42 134 l12 -10 M100 70 l10 -8 M100 86 l12 -10 M100 102 l12 -10 M100 118 l12 -10 M100 134 l12 -10',
          role: 'ambient',
        },
        { d: circle(38, 64, 7), role: 'soft' },
        { d: circle(122, 64, 7), role: 'soft' },
        { d: 'M54 154 V178 H72 V156 M88 156 V178 H106 V154' },
        shadow(80, 186, 40),
      ],
    },
  ],
  // His plug knocked over onto its side, the prongs pointing off, the
  // cord gone slack along the ground. He is last heard at 1149, badly hurt
  // after flying through the Frontier Dome, and when York asks Punk Records
  // how many Vegapunks are still alive the answer is two, Lilith and Atlas
  // (ch. 1118 p. 5, ep. 1151). Then the plug upright again on the collar of a new
  // body, its shoulders falling away on either side: "It's Edison!! He was
  // supposed to be dead" (ch. 1125 p. 7), and it is his head on the body he
  // builds from spare parts (p. 15).
  'edison': [
    {
      episode: 1151,
      chapter: 1118,
      value: [
        ...moved(EDISON_PLUG, 'translate(-6 30) rotate(-90 78 120)'),
        { d: 'M102 150 C108 166 104 170 100 176 C96 184 130 186 154 178' },
        shadow(64, 182, 56),
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        ...EDISON_PLUG,
        { d: ellipse(78, 156, 24, 6) },
        { d: 'M54 156 V164 A24 6 0 0 0 102 164 V156' },
        {
          d: 'M54 164 C40 166 26 172 20 184 M102 164 C116 166 130 172 136 184',
        },
      ],
    },
  ],
  // His wind-up key, laid down on a heap of rubble with chips flying: S-Snake
  // stamps on his head and crushes it in a blast (ch. 1078 p. 5, ep. 1111).
  // Then his right arm on the body Edison builds at 1155 (ch. 1125 p. 15),
  // the only part of him on it: the ball of the shoulder as the accent, the
  // ringed tubes bent at a round elbow, and the black hand, its fingers in
  // soft and its far side hatched. The key is gone.
  'pythagoras': [
    {
      episode: 1111,
      chapter: 1078,
      value: [
        ...moved(PYTHAGORAS_KEY_ALONE, 'translate(4 26) rotate(-36 80 100)'),
        {
          d: 'M6 176 L18 158 L34 162 L42 148 L58 154 L68 142 L84 150 L96 140 L110 148 L124 144 L136 156 L148 160 L154 176',
        },
        {
          d: 'M34 162 l6 12 M68 142 l4 14 M110 148 l-4 12 M124 144 l8 14',
          role: 'soft',
        },
        {
          d: 'M28 128 l6 -4 l2 6 z M132 118 l7 -2 l-2 7 z M54 114 l5 -5 l2 6 z',
          role: 'soft',
        },
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        { d: circle(50, 48, 14), role: 'accent' },
        { d: 'M60.5 56 L90.5 90 M51.5 64 L81.5 98' },
        { d: 'M62 74 l9 -8 M72 86 l9 -8', role: 'soft' },
        { d: circle(90, 100, 10) },
        { d: 'M84 109 L88 140 M96 108 L100 140' },
        { d: 'M86 120 h12 M87 130 h12', role: 'soft' },
        {
          d: 'M82 140 H108 Q114 140 114 148 V158 Q114 168 102 168 H90 Q78 168 78 158 V148 Q78 140 82 140 Z',
        },
        { d: 'M90 146 V166 M96 146 V167 M102 146 V166', role: 'soft' },
        { d: 'M106 146 l6 -4 M106 156 l6 -4', role: 'ambient' },
        { d: 'M40 40 l6 -6 M38 52 l8 -8', role: 'ambient' },
        shadow(96, 184, 30),
      ],
    },
  ],
  // Her glove and sleeve without the hologram, the accent moved to the line
  // of her knuckles. First tumbling away from a burst of smoke: Nusjuro cuts
  // off her arm and she blows herself up holding him back, so the Sunny can
  // fly off (ch. 1120 p. 17, ep. 1152). Then the same glove hanging at rest
  // from a ball joint: it is the left arm of the body Edison builds at 1155
  // (ch. 1125 p. 15).
  'atlas': [
    {
      episode: 1152,
      chapter: 1120,
      value: [
        ...moved(ATLAS_GLOVE, 'translate(-6 40) rotate(28 70 104)'),
        {
          d: 'M98 64 C90 44 112 30 126 42 C132 26 158 30 156 50 C168 58 162 82 146 82 C140 96 116 96 110 84 C96 88 88 74 98 64 Z',
          transform: 'translate(-12 4)',
        },
        {
          d: 'M84 40 l6 -4 l-1 7 z M70 66 l7 1 l-4 6 z M150 100 l6 3 l-6 3 z',
          role: 'soft',
        },
        shadow(66, 186, 50),
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        ...moved(ATLAS_GLOVE, 'translate(4 26) rotate(64 80 104)'),
        { d: circle(56, 74, 12) },
        { d: circle(56, 74, 4), role: 'soft' },
        { d: 'M48 66 l6 -6 M46 78 l8 -8', role: 'ambient' },
        shadow(88, 186, 40),
      ],
    },
  ],
  // The same small black hat, two great ox horns grown out from under its
  // brim, sweeping out and down and then up to points that turn in, as the
  // accent, their outer curves hatched because they are black. The cane in
  // front has grown with him into a long twisted stick with a lumpy knot of
  // root for a head. He is first seen in this human-beast form on Egghead at
  // 1128 (ch. 1094 p. 14). A Zoan form is a lasting stage, so Joy Boy's Haki
  // forcing him out of it at 1153 changes nothing here. At 1155 (ch. 1125
  // p. 14) Im kills him in front of the vice admirals and leaves only his
  // bones: his hat knocked over onto its side, the cane lying where it
  // was, a bone beside them and smoke rising. No skull, which would be a
  // face.
  'jaygarcia-saturn': [
    {
      episode: 1128,
      chapter: 1094,
      value: [
        ...SATURN_HAT,
        {
          d: 'M36 112.5 C18 118.5 3 105 7.5 84 C10.5 70.5 19.5 60 31.5 54 C22.5 66 16.5 81 21 93 C24 100.5 30 103.5 36 102',
          role: 'accent',
        },
        {
          d: 'M124 112.5 C142 118.5 157 105 152.5 84 C149.5 70.5 140.5 60 128.5 54 C137.5 66 143.5 81 139 93 C136 100.5 130 103.5 124 102',
          role: 'accent',
        },
        {
          d: 'M9.8 97.5 l6.8 -4.5 M16.5 108 l7.5 -5.2 M150.2 97.5 l-6.8 -4.5 M143.5 108 l-7.5 -5.2',
          role: 'ambient',
        },
        { d: 'M14 182 C40 176 60 178 84 170 C102 164 116 162 130 155' },
        { d: 'M15 187 C42 182 62 184 86 176 C104 170 118 168 134 161' },
        { d: 'M14 182 L15 187' },
        {
          d: 'M40 180 q6 4 12 0 M74 174 q6 4 12 -1 M108 166 q6 3 11 -1',
          role: 'soft',
        },
        {
          d: 'M130 155 C130 147 136 140 144 141 C150 138 155 143 153 149 C155 155 149 160 143 158 C139 162 134 162 134 161',
        },
        shadow(80, 132, 50),
      ],
    },
    {
      episode: 1155,
      chapter: 1125,
      value: [
        ...moved(SATURN_HAT, 'translate(-14 34) rotate(-74 80 110)'),
        ...SATURN_CANE,
        {
          d: 'M96 140 q-5 -4 -2 -8 q4 -2 6 2 L124 126 q2 -5 6 -3 q3 4 -2 7 q4 3 1 6 q-4 2 -6 -2 L104 144 q-1 5 -6 3 q-3 -3 2 -7',
        },
        {
          d: 'M110 100 c-8 -10 8 -18 0 -28 c-8 -10 8 -18 0 -28',
          role: 'ambient',
        },
        {
          d: 'M128 106 c-6 -8 6 -14 0 -22 c-6 -8 6 -14 0 -22',
          role: 'ambient',
        },
        shadow(80, 190, 60),
      ],
    },
  ],
  // Her grave in the churchyard in Sorbet: a wooden cross in 3/4, its post
  // and its crossbar each showing their thickness, a low mound, flowers at
  // its foot as the accent and two smaller crosses behind. Her name on the
  // crossbar is left off. Kuma buries her there (ch. 1098 p. 8, ep. 1132)
  // after she dies of the Sapphire Scales.
  'ginny': [
    {
      episode: 1132,
      chapter: 1098,
      value: [
        { d: 'M0 158 C50 154 110 154 160 158', role: 'ambient' },
        { d: 'M74 40 V64 M86 40 V64 M74 40 H86 M74 80 V156 M86 80 V156' },
        { d: 'M74 40 L80 34 H92 L86 40 M92 34 V58 M86 80 L92 76 V152' },
        { d: 'M46 64 H114 V80 H46 Z' },
        { d: 'M46 64 L52 58 H120 L114 64 M120 58 V74 L114 80' },
        {
          d: 'M88 90 l4 -3 M88 104 l4 -3 M88 118 l4 -3 M88 132 l4 -3 M88 146 l4 -3',
          role: 'ambient',
        },
        { d: 'M54 72 H106', role: 'soft' },
        { d: 'M40 160 C52 146 108 146 120 160', role: 'soft' },
        {
          d: `${circle(60, 150, 4)} ${circle(68, 146, 4)} ${circle(98, 148, 4)} ${circle(106, 152, 4)}`,
          role: 'accent',
        },
        { d: 'M60 154 v6 M68 150 v8 M98 152 v6 M106 156 v4', role: 'soft' },
        {
          d: 'M18 124 V156 M10 134 H26 M140 130 V156 M133 138 H147',
          role: 'ambient',
        },
      ],
    },
  ],
  // The island under the Buster Call: the warships open fire on it
  // (ch. 1105 p. 8-9, "BEGIN BOMBARDMENT!!", ep. 1139), and it is still
  // smoking when the arc ends (ch. 1125 p. 3). The egg on its cloud stands
  // whole above, as the first drawing has it; below, two of the trees are
  // gone to flames, a blast goes up between them and the smoke rises off
  // the fires towards the cloud. Then Nusjuro's ranged slash cuts through
  // the cloud under the Labophase (ch. 1115 pp. 8-11, ep. 1149): the egg
  // whole on the cut cloud, drawn small with it over the burning island.
  'egghead-island': [
    {
      episode: 1139,
      chapter: 1105,
      value: [
        ...EGGHEAD_ISLAND_SKY,
        EGGHEAD_ISLAND_SHORE,
        ...EGGHEAD_ISLAND_BURNING,
        ...EGGHEAD_ISLAND_SEA,
      ],
    },
    {
      episode: 1149,
      chapter: 1115,
      value: [
        ...moved(softened(EGGHEAD_EGG), EGG_OVER_ISLAND),
        ...moved(EGGHEAD_CLOUD_CUT, EGG_OVER_ISLAND),
        EGGHEAD_ISLAND_SHORE,
        ...EGGHEAD_ISLAND_BURNING,
        ...EGGHEAD_ISLAND_SEA,
      ],
    },
  ],
  // The egg whole on its cloud, the cloud cut through under it by Nusjuro's
  // ranged slash (ch. 1115 pp. 8-11, ep. 1149), its lower part dropping
  // away; the slash is the accent now, so the egg's rim goes soft.
  'egghead': [
    {
      episode: 1149,
      chapter: 1115,
      value: [...softened(EGGHEAD_EGG), ...EGGHEAD_CLOUD_CUT, ...SEA.slice(2)],
    },
  ],
  // The Vegaforce-01 destroyed: Kizaru kicks Luffy into it, it explodes,
  // and the Sunny falls out of its hands as Franky, Bonney and Lilith run
  // (ch. 1092, ep. 1126). The burst of the explosion is the accent; under it
  // the wreckage lies on the Labophase floor: a plate of the broad torso
  // with the star it carries on its breast, and the thin metal bars of its
  // limbs bent and broken. Above, the Sunny drops clear, small and tipped.
  // Chips fly and smoke rises.
  'lilith': [
    {
      episode: 1126,
      chapter: 1092,
      value: [
        {
          d: 'M80 52 L87.7 73.5 L108.3 63.7 L98.5 84.3 L120 92 L98.5 99.7 L108.3 120.3 L87.7 110.5 L80 132 L72.3 110.5 L51.7 120.3 L61.5 99.7 L40 92 L61.5 84.3 L51.7 63.7 L72.3 73.5 Z',
          role: 'accent',
        },
        { d: 'M20 162 L26 134 L60 126 L70 150 L62 162' },
        { d: 'M60 126 L66 122 L76 146 L70 150', role: 'soft' },
        { d: star(44, 146, 8, 3.5), role: 'soft' },
        { d: 'M96 162 L106 140 L128 132 M102 162 L110 144 L130 138' },
        { d: 'M128 132 L130 138 M134 162 L140 146 L152 150', role: 'soft' },
        {
          d: 'M24 112 l6 -4 l1 7 z M128 104 l7 1 l-4 6 z M30 80 l5 -5 l2 6 z M140 124 l6 3 l-6 3 z',
          role: 'soft',
        },
        { d: 'M66 46 c-6 -8 6 -14 0 -22 c-6 -8 6 -14 0 -22', role: 'ambient' },
        ...moved(LILITH_SUNNY, LILITH_SUNNY_FALLING),
        { d: 'M0 162 H160', role: 'ambient', dashed: true },
      ],
    },
  ],
  // Her Love-Love beam: the earring as before, its flame now soft, and a
  // heart-shaped beam flying out past it as the accent, its trail in soft.
  // She turns soldiers to stone with it (ch. 1070 p. 7, ep. 1101).
  's-snake': [
    {
      episode: 1101,
      chapter: 1070,
      value: [
        ...softened(S_SNAKE_EARRING),
        { d: 'M28 50 C12 38 16 20 28 28 C40 20 44 38 28 50 Z', role: 'accent' },
        { d: 'M40 48 L54 60 M34 56 L48 68', role: 'soft' },
      ],
    },
  ],
  // The Dice-Dice power: his leg turned into a steel blade, kicking across
  // the sword, as he first uses it on Luffy and Zoro (ch. 1076 p. 4,
  // ep. 1108). The knee and shin, then the blade where the foot would be,
  // as the accent, with its bevel in soft; the flame goes soft. No face.
  's-hawk': [
    {
      episode: 1108,
      chapter: 1076,
      value: [
        ...softened(S_HAWK_SWORD),
        { d: 'M-4 24 L28 60 M14 8 L46 56' },
        { d: 'M28 60 C30 68 42 68 46 56', role: 'soft' },
        { d: 'M30 64 L56 104 M46 58 L66 96' },
        { d: 'M56 104 L132 154 L66 96', role: 'accent' },
        { d: 'M62 101 L126 150', role: 'soft' },
        shadow(80, 188, 46),
      ],
    },
  ],
  // His paw pads: the hat as before, its flame now soft, and the print of a
  // paw beside it as the accent, one large pad and four small ones. With it
  // he sends Lucci and his agents straight into Egghead (ch. 1068 p. 10,
  // ep. 1099).
  's-bear': [
    {
      episode: 1099,
      chapter: 1068,
      value: [
        ...softened(eggheadArt['s-bear']),
        {
          d: `M18 48 C18 38 34 34 40 42 C46 50 40 60 30 60 C20 60 18 54 18 48 Z ${ellipse(12, 34, 4, 5)} ${ellipse(22, 25, 4, 5)} ${ellipse(34, 23, 4, 5)} ${ellipse(45, 29, 4, 5)}`,
          role: 'accent',
        },
      ],
    },
  ],
  // The traitor shown: the plate as before, its heap soft now, and the large
  // pistol she shot Shaka with laid across it as the accent, its grip
  // hatched. She steps out as the one who fired and tells Vegapunk she will
  // be the only Vegapunk (ch. 1078 pp. 13-15, ep. 1111). Then the plate and
  // the pistol both soft and the World Government's emblem over them as the
  // accent: chained up by the Straw Hats, she calls the Five Elders, who are
  // listening in at Mary Geoise, and tells them she is the one who told
  // them of Stella's betrayal (ch. 1089, ep. 1123).
  'york': [
    {
      episode: 1111,
      chapter: 1078,
      value: [...softened(YORK_PLATE), ...YORK_GUN, shadow(80, 172, 64)],
    },
    {
      episode: 1123,
      chapter: 1089,
      value: [
        ...softened(YORK_PLATE),
        ...softened(YORK_GUN),
        {
          d: WORLD_GOVERNMENT_EMBLEM,
          role: 'accent',
          transform: 'translate(-80 4)',
        },
        shadow(80, 172, 64),
      ],
    },
  ],
  // His Itsumade form, as he comes to Egghead with the other Elders and his
  // fruit is named (ch. 1110 pp. 5-7, ep. 1144): a great feathered wing as
  // the accent, its feathers in soft and its underside hatched, the
  // serpent's body that the bird ends in coiling down from it with its
  // scales in soft, in the ribbon of dark, flaming smoke. No face.
  'marcus-mars': [
    {
      episode: 1144,
      chapter: 1110,
      value: [
        {
          d: 'M88 100 C68 70 40 38 8 12 C12 24 12 32 18 38 C16 46 20 54 26 58 C26 68 32 74 40 78 C42 86 50 92 58 94 C62 100 70 106 80 108 Z',
          role: 'accent',
        },
        {
          d: 'M84 102 L16 32 M82 104 L24 54 M80 106 L36 74 M80 107 L52 90',
          role: 'soft',
        },
        { d: 'M50 60 l6 -6 M60 72 l6 -6 M68 84 l6 -6', role: 'ambient' },
        {
          d: 'M88 100 C116 108 128 128 112 146 C98 160 108 176 140 180 M80 108 C102 118 112 132 100 144 C86 158 96 184 140 180',
        },
        {
          d: 'M96 112 l-4 8 M112 126 l-8 3 M108 146 l-7 -3 M108 166 l-5 5',
          role: 'soft',
        },
        ...moved(ELDER_SMOKE, 'translate(20 40) scale(0.75)'),
      ],
    },
  ],
  // His Fengxi form, as he comes to Egghead with the other Elders and his
  // fruit is named (ch. 1110 pp. 5-7, ep. 1144): the boar's four tusks as
  // the accent, the two great ones curving out and up, the far sides
  // hatched, over the line of the jaw they grow from, in the ribbon of
  // dark, flaming smoke. No face.
  'topman-warcury': [
    {
      episode: 1144,
      chapter: 1110,
      value: [
        { d: 'M30 116 C40 150 120 150 130 116' },
        { d: 'M38 132 C52 152 108 152 122 132', role: 'soft' },
        {
          d: 'M44 124 C16 116 6 84 22 50 C24 80 38 98 58 110 Z M116 124 C144 116 154 84 138 50 C136 80 122 98 102 110 Z M64 130 C50 120 48 102 56 88 C60 104 66 114 76 120 Z M96 130 C110 120 112 102 104 88 C100 104 94 114 84 120 Z',
          role: 'accent',
        },
        {
          d: 'M16 84 l6 -4 M18 100 l7 -4 M144 84 l-6 -4 M142 100 l-7 -4',
          role: 'ambient',
        },
        ...moved(ELDER_SMOKE, 'translate(0 34)'),
      ],
    },
  ],
  // His Bakotsu form, as he comes to Egghead with the other Elders and his
  // fruit is named (ch. 1110 pp. 4-14, ep. 1144): the katana as before, its
  // guard soft now, and beside it a skeletal horse's foreleg, the bones
  // with their knobbed joints and the hoof as the accent, in the ribbon of
  // dark, flaming smoke.
  'ethanbaron-v-nusjuro': [
    {
      episode: 1144,
      chapter: 1110,
      value: [
        ...softened(NUSJURO_SWORD),
        { d: 'M100 104 L108 134 M106 102 L114 132' },
        { d: circle(112, 138, 5.5) },
        { d: 'M112 144 L114 164 M117 143 L119 163' },
        { d: circle(117, 167, 3.5) },
        { d: 'M118 170 L124 177 M121 168 L128 175', role: 'soft' },
        { d: 'M116 188 L121 176 H135 L140 188 Z', role: 'accent' },
        ...moved(ELDER_SMOKE, 'translate(52 46) scale(0.5)'),
        shadow(80, 176, 60),
      ],
    },
  ],
  // His Sandworm form, as he comes to Egghead with the other Elders and his
  // fruit is named (ch. 1110 p. 5, ep. 1144): the great worm's body rising
  // and turning, the folds round it in soft and its far side hatched, the
  // round rim of its open end as the accent, with no teeth, in the ribbon
  // of dark, flaming smoke.
  'shepherd-ju-peter': [
    {
      episode: 1144,
      chapter: 1110,
      value: [
        { d: 'M50 180 C44 140 40 100 60 70 C70 54 84 44 100 38' },
        { d: 'M92 180 C86 146 84 112 98 90 C106 78 116 72 128 70' },
        {
          d: ellipse(114, 54, 10, 21),
          role: 'accent',
          transform: 'rotate(-42 114 54)',
        },
        {
          d: 'M48 160 Q70 168 90 160 M46 136 Q68 146 86 138 M50 112 Q70 124 88 116 M62 86 Q80 100 98 92',
          role: 'soft',
        },
        { d: 'M82 172 l6 -5 M80 150 l6 -5 M82 126 l6 -5', role: 'ambient' },
        ...ELDER_SMOKE,
        { d: 'M24 182 H136', role: 'ambient', dashed: true },
      ],
    },
  ],
  // His Glorp-Glorp clay: the cap as before, its bill soft now, and beside
  // it the arm of one of his clay golems, its hand open, soft clay sagging
  // off the forearm as the accent. The clay soldiers on Hachinosu are his,
  // and his caption names the fruit (ch. 1080 p. 13, ep. 1114).
  'prince-grus': [
    {
      episode: 1114,
      chapter: 1080,
      value: [
        ...moved(softened(GRUS_CAP), 'translate(36 50) scale(0.75)'),
        { d: 'M8 190 C10 150 14 110 16 76 M34 190 C34 150 34 110 36 78' },
        {
          d: 'M16 76 L8 60 L12 58 L20 70 L18 50 L23 50 L26 70 L30 52 L35 54 L32 72 L40 62 L44 66 L36 78',
        },
        {
          d: 'M35 112 C44 116 44 128 40 136 C38 140 34 138 35 132 M15 124 C8 130 8 140 12 146 C14 150 18 148 16 142',
          role: 'accent',
        },
        { d: 'M28 100 l5 -4 M28 114 l5 -4', role: 'ambient' },
      ],
    },
  ],
}
