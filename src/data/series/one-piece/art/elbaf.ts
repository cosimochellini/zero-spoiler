import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow } from '~/lib/svg/primitives'

import { BAT_WING } from './alabasta'

/**
 * One of Scopper Gaban's axes, the haft upright through the origin and the
 * single-edged head at the top, its bit facing right. The drawing crosses
 * two of them, the second mirrored.
 */
const GABAN_AXE: Stroke[] = [
  { d: 'M-3 -78 H3 M-3 -78 V76 M3 -78 V76 M-3 76 Q0 82 3 76' },
  {
    d: 'M5 -72 H-6 V-54 H5 M-6 -70 h-8 v12 h8 M5 -70 L16 -68 Q22 -80 30 -86 M5 -56 L16 -58 Q22 -46 30 -40',
  },
  { d: 'M30 -86 Q44 -63 30 -40', role: 'accent' },
  { d: 'M25 -78 Q35 -63 25 -48', role: 'soft' },
  { d: 'M12 -64 l6 -6 M12 -58 l10 -10 M16 -56 l8 -8', role: 'ambient' },
]

/** The head of Gunko's arrows, point up, as her first drawing has it. */
const GUNKO_ARROWHEAD = 'M106 68 L122 34 L138 68 L122 60 Z'

/**
 * One of Gunko's arrows at the origin, the point down: a shaft and her
 * arrowhead at half size.
 */
const GUNKO_ARROW: Stroke[] = [
  { d: 'M0 -44 V12' },
  {
    d: GUNKO_ARROWHEAD,
    transform: 'translate(0 27) rotate(180) scale(0.5) translate(-122 -34)',
  },
]

/**
 * The hilt of Shamrock's saber, upright with the guard at y 70: a plain
 * grip, the gold guard seen as a disc in 3/4 and the round knuckle bow. The
 * saber is Cerberus, so both drawings hold it.
 */
const SHAMROCK_HILT: Stroke[] = [
  { d: 'M76 36 V65 M84 36 V65 M75 36 Q80 28 85 36' },
  { d: ellipse(80, 70, 13, 4), role: 'accent' },
  { d: 'M92.5 68.5 C106 54 100 30 85 33', role: 'accent' },
]

/**
 * One of Cerberus's spiked collars at the origin, seen in 3/4 with its
 * spikes and the flame its neck flies on. The drawing places three, and
 * puts its accent on the blades they carry.
 */
const CERBERUS_COLLAR: Stroke[] = [
  {
    d: 'M-15 0 a15 6.5 0 1 0 30 0 a15 6.5 0 1 0 -30 0 M-15 0 v6 a15 6.5 0 0 0 30 0 v-6',
  },
  {
    d: 'M-15.9 6 L-13.4 11 L-10.9 6 M-10.5 8.5 L-8 13.5 L-5.5 8.5 M-2.5 9.5 L0 14.5 L2.5 9.5 M5.5 8.5 L8 13.5 L10.5 8.5 M10.9 6 L13.4 11 L15.9 6 M-15 1 l-6 2 l6 2 M15 1 l6 2 l-6 2',
    role: 'soft',
  },
  {
    d: 'M-6 16 q-6 10 2 20 q-2 -8 4 -12 q4 8 0 16 q8 -6 6 -18',
    role: 'ambient',
  },
]

/** One collar of Cerberus's moved into place. */
function collarAt(transform: string): Stroke[] {
  return CERBERUS_COLLAR.map((stroke) => ({ ...stroke, transform }))
}

/** Shamrock's sheathed saber, enlarged and leaning right. */
const SABER_TILT =
  'translate(80 104) scale(1.18) translate(-80 -108) rotate(22 80 104)'

/** The same saber drawn, leaning left to leave room for the collars. */
const DRAWN_TILT = 'translate(-30 10) rotate(-12 80 100)'

/**
 * The saber drawn and leaning left, its hilt without an accent: Shamrock's
 * 1168 stage and Cerberus's first drawing both hold it, and each puts its
 * one accent on what the sword does.
 */
const DRAWN_SABER: Stroke[] = [
  ...moved(
    SHAMROCK_HILT.map(({ d }) => ({ d })),
    DRAWN_TILT,
  ),
  { d: 'M75 75 V170 Q78 180 85 186 V75', transform: DRAWN_TILT },
  { d: 'M79 80 V168', role: 'soft', transform: DRAWN_TILT },
]

/**
 * The cover of the book Biblo grows, upright in 3/4: the front, the top
 * edge and the fore-edge, the pages in soft and two bands on the cover.
 */
const BIBLO_COVER = 'M66 70 H126 V160 H66 Z'
const BIBLO_BOOK: Stroke[] = [
  { d: 'M66 70 L78 62 H138 L126 70 M126 160 L138 152 V62' },
  { d: 'M129 68 V156 M133 65 V153', role: 'soft' },
  { d: 'M74 84 H118 M74 146 H118', role: 'soft' },
]

/** The same book at the size a human holds it, at the bigger one's foot. */
const HUMAN_SIZE = 'translate(20 128) scale(0.4) translate(-66 -70)'

/** The two halves of Colon's wooden sword, enlarged together. */
const SWORD_HILT_HALF =
  'translate(80 96) scale(1.15) translate(-86 -134) rotate(-55 60 150)'
const SWORD_POINT_HALF =
  'translate(80 96) scale(1.15) translate(-110 -100) rotate(-4 120 150)'

/**
 * How far Goldberg's mace leans; Killingham's trident and Kiba's hammer
 * share the second one.
 */
const MACE_TILT = 'rotate(26 80 110)'
const LEAN = 'rotate(14 80 110)'

/** The tilt Sommers's sword and Ragnir are both drawn at. */
const TILT = 'rotate(-24 80 100)'

/** The drawings of the records filed in the elbaf stretch of the route. */
export const elbafArt = {
  // The colossal tree rising out of the mist that hangs round Elbaph (1158),
  // its trunk's far side hatched and its limbs running out of the top, and
  // in front of it, small, the giants' longboat the crew sails on from 1156:
  // shields along the rail, the building in the middle, the horns of the
  // figurehead and the white sail. The tree is seen at 1160 and the ship
  // docks under it at 1162, both within the arc.
  'elbaf': [
    {
      d: 'M72 96 C76 76 74 56 70 34 C66 18 56 8 44 -4 M138 104 C134 84 134 62 140 34 C144 18 154 8 166 -4',
    },
    { d: 'M90 44 C90 26 86 12 82 -4 M120 44 C120 26 124 12 128 -4' },
    {
      d: 'M88 96 C90 84 88 72 90 58 M120 100 C118 88 122 76 120 62',
      role: 'soft',
    },
    {
      d: 'M128 98 l6 -4 M128 84 l6 -4 M129 70 l6 -4 M131 56 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M108 102 q8 -4 16 0 t16 0 t16 0 M98 114 q8 -4 16 0 t16 0 t16 0 t16 0',
      role: 'soft',
    },
    { d: 'M10 132 L18 146 Q50 158 84 146 L94 130 Q52 142 10 132 Z' },
    { d: 'M10 132 C6 124 8 118 14 117' },
    {
      d: 'M94 130 C98 124 98 118 95 114 M95 114 q-6 -4 -4 -11 M95 114 q6 -4 11 -2',
    },
    {
      d: [
        circle(28, 143, 3.5),
        circle(42, 145, 3.5),
        circle(56, 146, 3.5),
        circle(70, 145, 3.5),
      ].join(' '),
    },
    { d: 'M26 137 V126 L36 118 L46 126 V138.5' },
    { d: 'M66 139 V92' },
    { d: 'M54 96 H78 L80 126 H52 Z', role: 'accent' },
    { d: 'M53 111 H79', role: 'soft' },
    ...SEA,
  ],

  // Bigstein Castle, where it rules, built of toy bricks and drawn in 3/4:
  // the studs on top, the seams between the bricks, the far faces hatched.
  // Behind the walls, the massive cat: its ears over the tower, the robe on
  // its back and its tail curling out. The crown is left out: it breaks in
  // the fight the crew finds it in (1157), before the record opens.
  'iscat': [
    { d: 'M38 158 V108 H108 V158 Z' },
    { d: 'M108 108 L126 96 V146 L108 158 M38 108 L54 97.3 M106 96 H126' },
    { d: 'M54 102 V60 H94 V102' },
    { d: 'M94 60 L106 52 V94 L94 102 M54 60 L66 52 H106' },
    {
      d: 'M66 57 v-3 a4 1.6 0 0 1 8 0 v3 M84 57 v-3 a4 1.6 0 0 1 8 0 v3 M112 103 v-3 a4 1.6 0 0 1 8 0 v3',
      role: 'soft',
    },
    {
      d: 'M38 133 H108 M58 108 V133 M94 133 V158 M54 81 H94 M74 60 V81',
      role: 'soft',
    },
    { d: 'M62 158 v-14 a9 9 0 0 1 18 0 v14' },
    {
      d: 'M112 118 l10 -7 M112 130 l10 -7 M112 142 l10 -7 M97 70 l6 -4 M97 84 l6 -4',
      role: 'ambient',
    },
    { d: 'M106 70 C122 62 140 74 144 98 C147 116 146 136 142 152' },
    { d: 'M126 100 C132 104 138 108 145 114' },
    { d: 'M120 70 C124 80 126 90 126 96', role: 'soft' },
    {
      d: 'M144 138 C158 132 160 108 152 96 C148 90 150 82 156 82',
      role: 'accent',
    },
    {
      d: 'M66 52 C67 42 72 36 75 30 L84 42 C88 41 92 41 96 42 L104 30 C108 36 109 44 108 52',
    },
    shadow(92, 172, 60),
  ],

  // The diorama he rules as the Sun God, toy houses on a slab in 3/4, his
  // staff standing behind it, and the deer skull he wears as the Sun God
  // (1158) looming over the slab in profile, antlers up, no eye socket. The
  // staff's sun-shaped head holds the metal net he traps the crew with
  // (1159).
  'road': [
    { d: 'M10 148 H110 V166 H10 Z' },
    { d: 'M10 148 L30 134 H108 M117 134 H130 L110 148 M110 166 L130 152 V134' },
    { d: 'M114 160 l12 -8 M114 150 l12 -8', role: 'ambient' },
    {
      d: 'M20 144 V122 L30 112 L40 122 V144 M40 122 L50 116 V138 M30 112 L40 106 L50 116',
      role: 'soft',
    },
    {
      d: 'M54 142 V114 H70 V142 M70 114 L78 109 V137 M54 114 L62 109 H78',
      role: 'soft',
    },
    {
      d: 'M84 140 V126 L91 119 L98 126 V140 M98 126 L104 122 V136 M91 119 L97 115 L104 122',
      role: 'soft',
    },
    { d: 'M108 61 V134 M117 61 V134' },
    { d: circle(112, 42, 16) },
    {
      d: 'M131 42 L141 42 M128.5 51.5 L133.7 54.5 M121.5 58.5 L126.5 67.1 M102.5 58.5 L97.5 67.1 M95.5 51.5 L90.3 54.5 M93 42 L83 42 M95.5 32.5 L90.3 29.5 M102.5 25.5 L97.5 16.9 M112 23 L112 17 M121.5 25.5 L126.5 16.9 M128.5 32.5 L133.7 29.5',
      role: 'soft',
    },
    {
      d: 'M98.5 35.5 L118.5 55.5 M105.5 28.5 L125.5 48.5 M98.5 48.5 L118.5 28.5 M105.5 55.5 L125.5 35.5',
      role: 'accent',
    },
    {
      d: 'M16 50 C14 40 22 34 34 36 L44 37 C50 39 52 44 54 48 L80 86 C81 90 78 92 75 90 L46 68 L30 66 C22 64 17 58 16 50 Z',
    },
    {
      d: 'M28 37 C20 24 14 14 2 4 M22 26 l-14 -2 M16 17 l-3 -14 M40 36 C42 22 50 12 64 4 M44 24 l14 -4 M50 15 l0 -13',
    },
    { d: 'M28 58 C36 56 42 60 48 66 M54 52 L76 84', role: 'soft' },
    shadow(70, 180, 60),
  ],

  // The colossal tree seen from the sea, its trunk rising off the island and
  // splitting into limbs that run out of the top into cloud, the crown out
  // of sight. Elbaph is first shown in Big Mom's flashback (836) and named
  // when the crew learns where it is (1160).
  'elbaf-island': [
    { d: 'M8 152 C40 144 120 144 152 152' },
    {
      d: 'M54 149 C60 130 62 100 62 72 M106 149 C100 130 98 100 98 72 M54 149 C48 147 40 149 30 152 M106 149 C112 147 120 149 130 152',
    },
    {
      d: 'M62 72 C56 54 40 40 28 -4 M98 72 C104 54 120 40 132 -4 M70 66 C70 40 66 20 64 -4 M90 66 C90 40 94 20 96 -4',
      role: 'accent',
    },
    {
      d: 'M4 30 q4 -10 16 -6 q8 -10 20 -2 q6 4 2 10 H8 q-6 0 -4 -2 M108 46 q4 -10 16 -6 q8 -10 20 -2 q8 2 6 8 H112 q-6 0 -4 0 M60 20 q6 -8 16 -4 q8 -6 16 2 q4 6 -2 8 H64 q-8 0 -4 -6',
      role: 'soft',
    },
    {
      d: 'M72 140 C74 120 72 104 74 88 M86 142 C84 124 88 106 86 88',
      role: 'soft',
    },
    {
      d: 'M100 92 l5 -4 M100 106 l5 -4 M101 120 l5 -4 M102 134 l5 -4',
      role: 'ambient',
    },
    ...SEA,
  ],

  // The land where wars come from, as the crew sees it on escaping the
  // diorama (1160): snowy peaks with their shaded faces hatched, the castle
  // on the highest one, and the rope bridge climbing from it to the upper
  // lands, past the foot of the colossal tree.
  'warland': [
    { d: 'M-4 150 L28 92 M60 92 L74 118 L92 100 L112 136 L132 104 L164 150' },
    {
      d: 'M26 92 V66 H60 V92 M60 66 L68 61 V86 L60 92 M26 66 L34 61 H68 M34 66 V50 H50 V66',
    },
    { d: 'M36 92 v-10 a6 6 0 0 1 12 0 v10', role: 'soft' },
    {
      d: 'M14 120 q5 6 9 0 q5 6 9 0 M80 112 q4 5 8 0 q4 5 8 2 M122 120 q5 6 9 0 q5 6 10 2',
      role: 'soft',
    },
    { d: 'M68 64 Q102 50 108 -4 M68 72 Q110 58 116 -4', role: 'accent' },
    {
      d: 'M78 61 l3 6 M88 55 l4 6 M96 46 l4 5 M102 34 l5 3 M105 20 l5 2',
      role: 'soft',
    },
    { d: 'M121 121.6 C118 70 118 30 116 -4 M156 138.5 C158 80 158 30 160 -4' },
    {
      d: 'M130 110 C128 80 130 50 128 20 M142 100 C140 70 144 40 142 6',
      role: 'soft',
    },
    {
      d: 'M148 30 l10 -8 M148 46 l10 -8 M148 62 l10 -8 M148 78 l10 -8 M63 76 l3 -2 M63 84 l3 -2',
      role: 'ambient',
    },
    {
      d: 'M40 112 l-6 10 M46 126 l-8 12 M100 118 l-6 10 M144 122 l-8 12 M152 136 l-6 9',
      role: 'ambient',
    },
    { d: 'M-4 152 H164', role: 'ambient', dashed: true },
  ],

  // The foot of the colossal tree he is bound to in the Underworld, two
  // turns of heavy chain wound round its trunk, and the drum-shaped cuff
  // they run down to lying at its foot, every link still whole (1160). The
  // chains come off in `elbafRedrawn`.
  'loki': [
    { d: 'M30 -4 C34 50 34 104 24 128 C18 140 6 148 -4 150' },
    { d: 'M130 -4 C126 50 126 104 136 128 C142 140 154 148 164 150' },
    {
      d: 'M50 4 C52 18 50 26 52 36 M106 2 C104 18 106 30 104 42 M54 64 C56 72 54 80 56 88',
      role: 'soft',
    },
    {
      d: 'M121 18 l7 -4 M121 30 l7 -4 M121 72 l7 -4 M122 132 l8 -4',
      role: 'ambient',
    },
    {
      d: 'M32.3 30.5 A6 3.4 44.1 1 0 40.9 38.8 A6 3.4 44.1 1 0 32.3 30.5 M41.2 39.1 L50.5 46.7 M50.3 46.5 A6 3.4 33.8 1 0 60.2 53.2 A6 3.4 33.8 1 0 50.3 46.5 M59.4 52.7 L70 58.3 M68.6 57.7 A6 3.4 20.9 1 0 79.8 62 A6 3.4 20.9 1 0 68.6 57.7 M78 61.4 L89.6 64.3 M87.5 63.9 A6 3.4 6 1 0 99.5 65.1 A6 3.4 6 1 0 87.5 63.9 M97.3 65.1 L109.2 64.7 M107.2 64.9 A6 3.4 -9.3 1 0 119 62.9 A6 3.4 -9.3 1 0 107.2 64.9 M117.3 63.3 L128.8 59.9',
      role: 'accent',
    },
    {
      d: 'M32.3 82.5 A6 3.4 44.1 1 0 40.9 90.8 A6 3.4 44.1 1 0 32.3 82.5 M41.2 91.1 L50.5 98.7 M50.3 98.5 A6 3.4 33.8 1 0 60.2 105.2 A6 3.4 33.8 1 0 50.3 98.5 M59.4 104.7 L70 110.3 M68.6 109.7 A6 3.4 20.9 1 0 79.8 114 A6 3.4 20.9 1 0 68.6 109.7 M78 113.4 L89.6 116.3 M87.5 115.9 A6 3.4 6 1 0 99.5 117.1 A6 3.4 6 1 0 87.5 115.9 M97.3 117.1 L109.2 116.7 M107.2 116.9 A6 3.4 -9.3 1 0 119 114.9 A6 3.4 -9.3 1 0 107.2 116.9 M117.3 115.3 L128.8 111.9',
      role: 'accent',
    },
    {
      d: 'M106.7 116 A6 3.4 56.3 1 0 113.3 126 A6 3.4 56.3 1 0 106.7 116 M110.7 122 L117.3 132',
      role: 'accent',
    },
    { d: 'M104 134 H132 M104 158 H132 M132 134 a6 12 0 0 1 0 24' },
    { d: ellipse(104, 146, 6, 12) },
    { d: 'M110 134 a6 12 0 0 1 0 24 M126 134 a6 12 0 0 1 0 24', role: 'soft' },
    { d: 'M114.5 134 v-3 a3 3 0 0 1 6 0 v3', role: 'accent' },
    { d: 'M114 150 l4 -4 M120 152 l6 -6 M126 154 l5 -5', role: 'ambient' },
    {
      d: 'M-4 150 H20 M140 150 H164 M40 150 H96',
      role: 'ambient',
      dashed: true,
    },
  ],

  // His mace, as long as he is tall, the haft swelling towards a round head
  // ringed with spikes, its seams in soft and its far side hatched. He
  // carries it from the cover story the crew first appears in (899) and up
  // the bridge (1161).
  'goldberg': [
    { d: circle(80, 50, 26), transform: MACE_TILT },
    {
      d: 'M74.8 24.5 L80 15 L85.2 24.5 M92.4 27.2 L102.5 23.2 L100.3 33.8 M104.2 40.5 L114.5 43.9 L106 50.7 M104.7 58.3 L110.3 67.5 L99.5 67.2 M60.5 67.2 L49.7 67.5 L55.3 58.3 M54 50.7 L45.5 43.9 L55.8 40.5 M59.7 33.8 L57.5 23.2 L67.6 27.2',
      role: 'accent',
      transform: MACE_TILT,
    },
    {
      d: 'M80 24 C64 34 64 66 80 76 M80 24 C98 32 100 66 80 76 M54 50 C64 56 96 56 106 50',
      role: 'soft',
      transform: MACE_TILT,
    },
    {
      d: 'M92 70 l10 -10 M96 60 l8 -8 M98 48 l6 -6 M96 38 l4 -4',
      role: 'ambient',
      transform: MACE_TILT,
    },
    {
      d: 'M68 72 C68 104 76 140 76.5 184 M92 72 C92 104 84 140 83.5 184 M76.5 184 Q80 190 83.5 184',
      transform: MACE_TILT,
    },
    { d: 'M80 82 C80 110 80 150 80 176', role: 'soft', transform: MACE_TILT },
    {
      d: 'M85 88 l5 -5 M85 102 l4 -4 M84 116 l3 -3',
      role: 'ambient',
      transform: MACE_TILT,
    },
    shadow(80, 186, 44),
  ],

  // One of the colossal tree's branches, its underside hatched, two
  // longhouses on it in 3/4 with crossed boards at their gables, a sprig at
  // its tip, and clouds below it: the Sun World is high enough for sea
  // clouds, which the giants use to get about (1163). The giants live up
  // here from the climb at 1162.
  'sun-world': [
    {
      d: 'M-4 116 C40 112 100 104 148 92 M-4 162 C40 152 100 134 148 108 M148 92 C158 90 160 102 148 108',
    },
    { d: 'M148 92 C143 94 142 106 148 108', role: 'soft' },
    {
      d: 'M150 94 C152 82 156 74 164 68 M156 76 q8 -8 6 -14 q-8 2 -6 14 M152 84 q-8 -6 -14 -2 q6 6 14 2',
      role: 'soft',
    },
    {
      d: 'M12 132 C40 128 70 122 92 116 M50 144 C80 136 110 124 132 112',
      role: 'soft',
    },
    {
      d: 'M4 160 l9 -9 M18 158 l10 -10 M34 155 l10 -10 M50 151 l10 -10 M66 147 l10 -10 M82 142 l10 -10 M98 136 l9 -9 M114 129 l8 -8 M128 121 l7 -7',
      role: 'ambient',
    },
    {
      d: 'M14 115 V92 L30 76 L46 92 V112.5 M46 92 L62 86 V110 M30 76 L46 70 L62 86',
    },
    { d: 'M24 114.5 v-12 h10 v11 M50 102 l8 -3', role: 'soft' },
    {
      d: 'M84 106.5 V90 L96 78 L108 90 V103.5 M108 90 L120 85 V100.5 M96 78 L108 73 L120 85',
    },
    { d: 'M90 105 v-9 h8 v8 M111 96 l6 -2.5', role: 'soft' },
    {
      d: 'M30 76 L21 66 M30 76 L39 66 M96 78 L89 70 M96 78 L103 70',
      role: 'accent',
    },
    {
      d: 'M96 170 q-2 -10 10 -10 q6 -10 20 -6 q8 -8 20 -2 q12 -2 14 8 q6 10 -6 10 H102 q-8 0 -6 0 M70 186 q-2 -8 8 -8 q6 -8 18 -4 q8 -6 18 0 q10 0 8 8 q0 6 -8 6 H76 q-6 0 -6 -2',
      role: 'soft',
    },
    { d: 'M100 182 q8 -3 16 0 t16 0 t16 0', role: 'ambient' },
  ],

  // Two of the books she keeps at the Owl Library, stacked in 3/4 with the
  // fore-edges in soft, and on top her chupalla, the straw hat she wears
  // from her first scene (1161): a wide flat brim with its thickness
  // showing, a low round crown, the band bright, the far side hatched.
  'ange': [
    { d: 'M26 148 H116 V168 H26 Z M116 148 L132 138 V158 L116 168' },
    { d: 'M36 130 H112 V148 M36 130 V148 M112 130 L126 121 V139.6' },
    { d: 'M26 148 L36 141.8 M126 139.6 L132 138 M36 130 L50 121 H126' },
    {
      d: 'M120 153 l9 -6 M120 159 l9 -6 M120 165 l9 -6 M115 136 l8 -5 M115 142 l8 -5',
      role: 'soft',
    },
    { d: 'M40 148 V168 M102 148 V168 M46 130 V148', role: 'soft' },
    { d: ellipse(82, 118, 36, 8.5) },
    { d: 'M46 118 v2.5 a36 8.5 0 0 0 72 0 v-2.5' },
    { d: 'M64 117 C64 104 70 98 82 98 C94 98 100 104 100 117' },
    { d: 'M64.3 112 A17.8 4.4 0 0 0 99.7 112', role: 'accent' },
    { d: 'M93 102 l4 -2 M95.5 108 l4 -2 M108 125 l5 -2', role: 'ambient' },
    shadow(80, 178, 56),
  ],

  // Her green tank top, cut off above the midriff, with the horned Jolly
  // Roger printed on its front, and her fur cape falling behind it to a
  // tufted hem (1164).
  // The flag's shape is drawn by eye: the wiki only calls it horned, and
  // gives it no crossbones.
  'ripley': [
    {
      d: 'M56 34 H64 C68 56 92 56 96 34 H104 C104 54 112 64 118 70 L116 128 Q80 136 44 128 L42 70 C48 64 56 54 56 34 Z',
    },
    { d: 'M58 38 C62 60 98 60 102 38', role: 'soft' },
    { d: 'M46 124 Q80 131 114 124', role: 'soft' },
    {
      d: `M68 92 C68 76 92 76 92 92 C92 98 88 100 87 106 H73 C72 100 68 98 68 92 Z ${circle(74.5, 91, 3.4)} ${circle(85.5, 91, 3.4)} M80 96 l-2 4 h4 Z M69 86 C60 86 56 80 56 72 C60 78 64 80 70 81 M91 86 C100 86 104 80 104 72 C100 78 96 80 90 81`,
      role: 'accent',
    },
    {
      d: 'M56 34 C40 34 30 40 24 50 C16 90 12 130 10 170 M104 34 C120 34 130 40 136 50 C144 90 148 130 150 170',
    },
    {
      d: 'M10 170 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0',
      role: 'soft',
    },
    {
      d: 'M134 160 l8 -8 M136 140 l8 -8 M136 120 l8 -8 M134 100 l8 -8',
      role: 'ambient',
    },
    { d: 'M108 74 l5 -4 M110 88 l5 -4 M110 102 l5 -4', role: 'ambient' },
  ],

  // His giant hammer, held level: the barrel-shaped head in 3/4 with iron
  // hoops near both ends, the far side hatched, a long wooden haft. He holds
  // it on the cover that makes him the crew's shipwright (897), and grips it
  // in their first scene in the anime (885).
  'stansen': [
    { d: ellipse(118, 75, 17, 6) },
    {
      d: 'M101 75 C93 90.5 93 121.5 101 137 A17 6 0 0 0 135 137 C143 121.5 143 90.5 135 75',
    },
    {
      d: 'M98.6 82 A19.4 6 0 0 0 137.4 82 M97 88 A21 6 0 0 0 139 88 M97 124 A21 6 0 0 0 139 124 M98.6 130 A19.4 6 0 0 0 137.4 130',
      role: 'accent',
    },
    {
      d: 'M110.4 81 C104.3 90.5 104.3 121.5 110.4 142.4 M121.4 81 C123.5 90.5 123.5 121.5 121.4 143',
      role: 'soft',
    },
    {
      d: 'M133.7 101 l5.4 -5 M134.1 109 l5.5 -5 M133.9 117 l5.4 -5',
      role: 'ambient',
    },
    { d: 'M96 98 H8 Q1 106 8 114 H96' },
    {
      d: 'M88 104 C66 105 38 103 18 104 M72 108.5 C56 109 48 107.5 30 108.5',
      role: 'soft',
    },
    shadow(88, 156, 58),
  ],

  // His wooden sword snapped in two, the hilt half falling and the point
  // half on the ground, grain in soft and the splintered ends bright. It
  // breaks on Luffy's head the first time he swings it at him (1165).
  'colon': [
    { d: 'M44 143 H14 Q6 150 14 157 H44', transform: SWORD_HILT_HALF },
    {
      d: 'M44 126 H54 V174 H44 Z M54 126 l4 -4 V170 l-4 4',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M54 137 H114 M54 163 H116 M58 167 H116 V163',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M114 137 L121 141 L115 145 L124 149 L116 153 L123 157 L116 160 L116 163',
      role: 'accent',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M58 145 C76 143 92 147 112 145 M58 155 C76 157 94 153 114 155',
      role: 'soft',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M64 171 l4 -4 M78 171 l4 -4 M92 171 l4 -4 M106 171 l4 -4',
      role: 'ambient',
      transform: SWORD_HILT_HALF,
    },
    {
      d: 'M108 137 H164 Q182 150 164 163 H108 M110 167 H164 Q174 165 177 158',
      transform: SWORD_POINT_HALF,
    },
    {
      d: 'M108 137 L101 141 L107 145 L99 149 L106 153 L100 157 L108 163',
      role: 'accent',
      transform: SWORD_POINT_HALF,
    },
    {
      d: 'M112 145 C126 143 140 147 160 145 M112 155 C128 157 142 153 164 155',
      role: 'soft',
      transform: SWORD_POINT_HALF,
    },
    {
      d: 'M116 171 l4 -4 M130 171 l4 -4 M144 171 l4 -4 M158 170 l4 -4',
      role: 'ambient',
      transform: SWORD_POINT_HALF,
    },
    shadow(30, 178, 20),
    shadow(112, 182, 50),
  ],

  // A book at the size humans print it beside the same book grown to a
  // giant's size, as books grow the moment they enter his library (1164),
  // and on top of the big one the owl perched with his back turned, a wing
  // folded and his talons over the edge. The ear tufts, his mark, are left
  // out: over a book they would read as a face.
  'biblo': [
    { d: BIBLO_COVER, role: 'accent' },
    ...BIBLO_BOOK,
    ...moved([{ d: BIBLO_COVER }, ...BIBLO_BOOK], HUMAN_SIZE),
    { d: 'M78 66 C70 50 70 26 84 14 C94 6 110 6 120 14 C134 26 134 50 126 66' },
    {
      d: 'M108 22 C120 30 124 48 120 64 L114 58 L110 66 L104 58 L100 66 C96 52 98 34 108 22 Z',
    },
    {
      d: 'M110 32 C114 40 114 50 112 58 M104 40 C106 46 106 54 104 60',
      role: 'soft',
    },
    {
      d: 'M86 72 q-2 -7 4 -9 M92 72 q0 -8 4 -10 M108 72 q-2 -7 4 -9 M114 72 q0 -8 4 -10',
    },
    { d: 'M122 58 l5 -4 M124 46 l5 -4 M123 34 l5 -4', role: 'ambient' },
    shadow(100, 164, 44),
    shadow(30, 166, 18),
  ],

  // One of the bandage-like strips she cuts the castle guards down with,
  // spiralling up off the ground and ending in an arrowhead (1165).
  'manmayer-gunko': [
    {
      d: 'M80 168 C84 166.8 98.4 163.8 104 160.5 C109.7 157.3 112.3 150.5 114 148.5 M80 177 C84 175.8 98.4 172.8 104 169.5 C109.7 166.3 112.3 159.5 114 157.5 M46 131.5 C47.7 132.1 50.3 134.6 56 135 C61.6 135.4 72 135.4 80 134 C88 132.6 98.4 129.8 104 126.5 C109.7 123.3 112.3 116.5 114 114.5 M46 140.5 C47.7 141.1 50.3 143.6 56 144 C61.6 144.4 72 144.4 80 143 C88 141.6 98.4 138.8 104 135.5 C109.7 132.3 112.3 125.5 114 123.5 M46 97.5 C47.7 98.1 50.3 100.6 56 101 C61.6 101.4 76 100.2 80 100 M46 106.5 C47.7 107.1 50.3 109.6 56 110 C61.6 110.4 76 109.2 80 109',
    },
    {
      d: 'M114 148.5 C112.3 146.5 109.7 139.7 104 136.5 C98.4 133.2 88 130.4 80 129 C72 127.6 61.6 127.6 56 128 C50.3 128.4 47.7 130.9 46 131.5 M114 157.5 C112.3 155.5 109.7 148.7 104 145.5 C98.4 142.2 88 139.4 80 138 C72 136.6 61.6 136.6 56 137 C50.3 137.4 47.7 139.9 46 140.5 M114 114.5 C112.3 112.5 109.7 105.7 104 102.5 C98.4 99.2 88 96.4 80 95 C72 93.6 61.6 93.6 56 94 C50.3 94.4 47.7 96.9 46 97.5 M114 123.5 C112.3 121.5 109.7 114.7 104 111.5 C98.4 108.2 88 105.4 80 104 C72 102.6 61.6 102.6 56 103 C50.3 103.4 47.7 105.9 46 106.5',
      role: 'soft',
    },
    {
      d: 'M109.4 141.7 L109.4 147.7 M97 134.8 L97 140.8 M80 130.5 L80 136.5 M63 129.1 L63 135.1 M50.6 130.3 L50.6 136.3 M109.4 107.7 L109.4 113.7 M97 100.8 L97 106.8 M80 96.5 L80 102.5 M63 95.1 L63 101.1 M50.6 96.3 L50.6 102.3',
      role: 'ambient',
    },
    { d: 'M80 168 C66 170 52 176 38 177 M80 177 C68 180 54 185 40 186' },
    {
      d: 'M38 177 l-3 2 l4 2 l-4 2 l5 3 M36 181 l-8 1 M37 184 l-7 4',
      role: 'soft',
    },
    { d: 'M80 100 C100 99 114 88 117 64 M80 109 C106 108 126 92 127 64' },
    { d: GUNKO_ARROWHEAD, role: 'accent' },
    shadow(96, 190, 26),
  ],

  // The empty throne in 3/4, its far side hatched, under the royal portrait
  // the crew is shown (1167), framed so it holds only his shoulders: the
  // cloak with its claw-like points, the chainmail tunic under it.
  'harald': [
    { d: 'M40 2 H120 V58 H40 Z' },
    { d: 'M47 9 H113 V51 H47 Z', role: 'soft' },
    {
      d: 'M74 9 V16 M86 9 V16 M74 16 C64 17 56 21 52 30 C50 38 50 44 50 51 M86 16 C96 17 104 21 108 30 C110 38 110 44 110 51',
    },
    {
      d: 'M54 24 C48 22 44 24 41 28 C45 26 49 27 52 29 M52 31 C46 31 43 34 41 38 C45 35 48 35 51 35 M106 24 C112 22 116 24 119 28 C115 26 111 27 108 29 M108 31 C114 31 117 34 119 38 C115 35 112 35 109 35',
      role: 'accent',
    },
    {
      d: 'M62 26 L86 50 M70 22 L98 50 M80 20 L100 40 M62 38 L74 50 M98 26 L74 50 M90 22 L62 50 M80 20 L60 40 M98 38 L86 50',
      role: 'soft',
    },
    { d: 'M48 129 V74 Q74 62 100 74 V129' },
    { d: 'M100 74 L110 68 V122' },
    {
      d: 'M40 140 H100 V150 H40 Z M40 140 L48 130 H110 L100 140 M100 150 L110 140 V130',
    },
    { d: 'M44 150 V180 M96 150 V180 M106 144 V172' },
    {
      d: 'M104 84 l4 -3 M104 96 l4 -3 M104 108 l4 -3 M103 148 l5 -5',
      role: 'ambient',
    },
    { d: 'M58 86 Q74 78 90 86 V122 M58 86 V122', role: 'soft' },
    shadow(76, 186, 44),
  ],

  // His saber in its white sheath, tilted, the gold knuckle-bow guard bright,
  // the locket and chape in soft. He wears it at his hip when he arrives
  // with Gunko (1167).
  'figarland-shamrock': [
    ...SHAMROCK_HILT.map((stroke) => ({ ...stroke, transform: SABER_TILT })),
    {
      d: 'M75 75 C74 120 77 156 84 182 M85 75 C84 118 87 154 93 179 M84 182 Q90 186 93 179',
      transform: SABER_TILT,
    },
    { d: 'M75 86 H85 M74.5 92 H84.8', role: 'soft', transform: SABER_TILT },
    {
      d: 'M81.5 166 L90 163.5 M82.5 172 L91 169',
      role: 'soft',
      transform: SABER_TILT,
    },
    { d: 'M80 98 C80 128 82 154 87 174', role: 'soft', transform: SABER_TILT },
    shadow(96, 190, 34),
  ],

  // The same saber drawn, and the three spiked collars of the dog it turns
  // into flying off with flame at their necks, each carrying the blade that
  // juts from that head's mouth, as when Shamrock sends the heads after
  // Loki (1168). The heads themselves are left out.
  'cerberus': [
    ...DRAWN_SABER,
    ...collarAt('translate(104 30) rotate(-14)'),
    ...collarAt('translate(116 84) rotate(10)'),
    ...collarAt('translate(96 134) rotate(-6)'),
    {
      d: 'M116 22 L152 10 L119 30 M128 82 L162 80 L129 90 M108 128 L146 122 L110 136',
      role: 'accent',
    },
    shadow(66, 192, 28),
  ],

  // His two single-edged axes crossed, the dark cheeks of their heads
  // hatched and the cutting edges bright. He throws one at a door the first
  // time the crew meets him (1169).
  'scopper-gaban': [
    ...GABAN_AXE.map((stroke) => ({
      // The right axe, its haft leaning right.
      ...stroke,
      transform: 'translate(80 104) rotate(28)',
    })),
    ...GABAN_AXE.map((stroke) => ({
      // The left axe is the right one mirrored.
      ...stroke,
      transform: 'translate(80 104) scale(-1 1) rotate(28)',
    })),
    shadow(80, 186, 50),
  ],

  // The sword he keeps at his side, sheathed and tilted, its guard a disc
  // ringed with thorns. He wears it once he has dressed after the summons
  // (1170).
  'shepherd-sommers': [
    { d: 'M75 90 V176 Q80 186 85 176 V90', transform: TILT },
    { d: 'M80 96 V176', role: 'soft', transform: TILT },
    { d: ellipse(80, 80, 18, 6), transform: TILT },
    { d: 'M62 80 v4 a18 6 0 0 0 36 0 v-4', transform: TILT },
    {
      d: 'M97 78.7 L104.5 81.2 L98.7 82.8 M98.8 83.7 L101.6 86.6 L96.1 87.2 M96.2 86.8 L92.9 96.9 L92.2 88.6 M88 89.4 L87.9 94.5 L83.7 89.9 M77.8 90 L71.6 96.5 L73.5 89.6 M70.3 89.1 L69 92.9 L66.1 87.9 M64.3 87.4 L56.7 88 L61.3 84.1 M61.3 81.6 L57 79 L64.1 78.3',
      role: 'accent',
      transform: TILT,
    },
    { d: 'M76.5 80 V40 M83.5 80 V40', transform: TILT },
    { d: ellipse(80, 34, 6, 6), transform: TILT },
    shadow(80, 188, 34),
  ],

  // His trident, tilted, three barbed prongs of different lengths on a
  // doubled crossbar, a collar where it meets the shaft, as he carries it
  // when he is summoned (1170). At its foot, the resin bubble he wears over
  // his head, its orange respirator with two disk filters on the front.
  'rimoshifu-killingham': [
    { d: 'M77 82 V186 M83 82 V186 M77 186 Q80 190 83 186', transform: LEAN },
    { d: 'M75 70 H85 V82 H75 Z', transform: LEAN },
    { d: 'M75 76 H85', role: 'soft', transform: LEAN },
    {
      d: 'M52 56 C52 66 66 70 80 70 C94 70 108 66 108 52 M58 56 C58 62 68 64 80 64 C92 64 102 62 102 52',
      transform: LEAN,
    },
    {
      d: 'M76 64 V34 L80 4 L84 34 V64 M52 56 L48 40 L50 26 L57 38 L58 56 M102 52 L108 24 L114 4 L114 28 L108 52',
      transform: LEAN,
    },
    {
      d: 'M84 34 l4 4 M76 34 l-4 4 M57 38 l3 6 M108 24 l-4 6 M80 20 V58 M110.5 20 L106 46',
      role: 'soft',
      transform: LEAN,
    },
    {
      d: 'M86 92 l-3 3 M86 104 l-3 3 M86 116 l-3 3',
      role: 'ambient',
      transform: LEAN,
    },
    { d: circle(124, 158, 22) },
    { d: ellipse(124, 177, 11, 3), role: 'soft' },
    { d: 'M112 146 C116 141 122 139 128 140', role: 'soft' },
    {
      d: `M98 150 C100 144 108 142 114 145 L116 166 C110 170 102 168 98 162 Z ${circle(96, 156, 9)} ${ellipse(112, 158, 5, 8.5)}`,
      role: 'accent',
    },
    { d: 'M138 148 l6 -4 M141 160 l5 -4 M138 172 l5 -4', role: 'ambient' },
    shadow(70, 190, 22),
    shadow(122, 186, 24),
  ],

  // Loki's warhammer: a rectangular sledge head in 3/4 with its far end
  // hatched, the raised plate the haft juts from, and the long haft wrapped
  // in bandages. It lies behind the chained prince from the first time Luffy
  // finds him, and is named when he takes hold of it (1171).
  'ragnir': [
    { d: 'M36 30 H112 V78 H36 Z', transform: TILT },
    { d: 'M36 30 L48 20 H124 L112 30 M124 20 V68 L112 78', transform: TILT },
    {
      d: 'M114 38 l8 -6 M114 50 l8 -6 M114 62 l8 -6 M114 74 l8 -6',
      role: 'ambient',
      transform: TILT,
    },
    { d: 'M50 40 H98 V68 H50 Z', role: 'soft', transform: TILT },
    { d: 'M64 78 V88 H84 V78', role: 'accent', transform: TILT },
    { d: 'M70 88 V184 M78 88 V184 M70 184 H78', transform: TILT },
    {
      d: 'M70 104 l8 -5 M70 114 l8 -5 M70 124 l8 -5 M70 134 l8 -5 M70 144 l8 -5 M70 154 l8 -5 M70 164 l8 -5 M70 174 l8 -5',
      role: 'soft',
      transform: TILT,
    },
    shadow(80, 190, 36),
  ],

  // His warhammer, the block head in 3/4 with its far end hatched and a pair
  // of tusks curving out of its back. He charges the serpent with it at the
  // school (1172).
  'kiba': [
    { d: 'M30 34 H92 V70 H30 Z', transform: LEAN },
    { d: 'M30 34 L40 26 H102 L92 34 M102 26 V62 L92 70', transform: LEAN },
    {
      d: 'M95 40 l5 -4 M95 50 l5 -4 M95 60 l5 -4',
      role: 'ambient',
      transform: LEAN,
    },
    { d: 'M36 40 V64', role: 'soft', transform: LEAN },
    {
      d: 'M100 36 C130 34 146 60 138 94 C130 68 118 54 100 48 M98 54 C122 56 134 78 124 108 C120 84 110 72 97 66',
      role: 'accent',
      transform: LEAN,
    },
    { d: 'M76 70 V186 M84 70 V186 M76 186 Q80 190 84 186', transform: LEAN },
    { d: 'M80 80 C81 110 79 150 80 178', role: 'soft', transform: LEAN },
    shadow(96, 190, 34),
  ],

  // His green feathered coat, as he wears it the day the serpent reaches
  // the school (1172): the feathers at the collar bright, more down the
  // body, the far sleeve hatched, and leaning on it the stick he faces the
  // serpent with to protect the children.
  'wolf-elbaph': [
    {
      d: 'M58 44 C50 46 40 52 36 60 L28 150 H48 L50 92 L54 172 H106 L110 92 L112 150 H132 L124 60 C120 52 110 46 102 44',
    },
    {
      d: 'M58 44 L62 32 L68 42 L72 28 L78 40 L82 28 L88 40 L94 30 L98 42 L102 44',
      role: 'accent',
    },
    { d: 'M80 48 V172 M50 92 L48 60 M110 92 L112 60', role: 'soft' },
    {
      d: 'M62 80 l4 6 l4 -6 M64 112 l4 6 l4 -6 M60 144 l4 6 l4 -6 M88 96 l4 6 l4 -6 M90 128 l4 6 l4 -6 M92 158 l4 6 l4 -6',
      role: 'soft',
    },
    {
      d: 'M116 80 l6 -4 M117 96 l6 -4 M118 112 l6 -4 M119 128 l6 -4 M120 144 l6 -4',
      role: 'ambient',
    },
    { d: 'M144 186 L118 34 M150 185 L124 34 M118 34 Q121 30 124 34' },
    { d: 'M128 92 l6 -2', role: 'soft' },
    shadow(84, 186, 56),
  ],

  // The horns of his ancient giants' blood (1172), the one thing that marks
  // him out among the teachers, over the collar of his dark fur cape, its
  // tufted edge in soft and its dark fur hatched.
  'blade': [
    {
      d: 'M62 84 C50 72 46 52 54 30 C58 50 64 64 74 78 M98 84 C110 72 114 52 106 30 C102 50 96 64 86 78',
      role: 'accent',
    },
    {
      d: 'M55 62 C58 64 62 66 66 68 M53 50 C55 52 58 54 61 55 M105 62 C102 64 98 66 94 68 M107 50 C105 52 102 54 99 55',
      role: 'soft',
    },
    {
      d: 'M20 150 C26 120 50 104 80 104 C110 104 134 120 140 150 M58 108 C64 118 96 118 102 108',
    },
    {
      d: 'M20 150 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l6 6 l5 -6 l5 6 l5 -6',
      role: 'soft',
    },
    {
      d: 'M30 140 l8 -8 M44 134 l10 -10 M60 130 l10 -10 M84 128 l10 -10 M100 130 l10 -10 M116 134 l10 -10 M128 142 l6 -6',
      role: 'ambient',
    },
    shadow(80, 172, 56),
  ],
} satisfies Drawings

/** The foot of the tree Loki was bound to, bark and hatching, without its chains. */
const LOKI_TRUNK = elbafArt.loki.slice(0, 4)

/** The drum-shaped cuff at the tree's foot, as his first drawing has it. */
const LOKI_CUFF = elbafArt.loki.slice(7, 12)

/** Gunko's bandage strip and its arrowhead, a little smaller, without its shadow. */
const GUNKO_COIL = moved(
  elbafArt['manmayer-gunko'].slice(0, 7),
  'translate(80 124) scale(0.8) translate(-80 -124)',
)

/** The records of this stretch drawn again, from the episode the story changes them. */
export const elbafRedrawn: Redrawings = {
  // The same tree with its trunk bare: Luffy unlocks the chains and they lie
  // slack in a loose ring at its foot, every link whole, and the one chain
  // left on him, to the shackle on his left ankle, runs taut out of the
  // picture. He is freed of all but that one in 1171 (ch. 1141).
  'loki': [
    {
      episode: 1171,
      chapter: 1141,
      value: [
        ...LOKI_TRUNK,
        {
          d: 'M17.2 150.5 A6 3.4 52.8 1 0 24.4 160 A6 3.4 52.8 1 0 17.2 150.5 M24.9 159.4 L35.3 165.2 M35.4 165.5 A6 3.4 14.5 1 0 47.1 168.5 A6 3.4 14.5 1 0 35.4 165.5 M46.9 168.2 L58.9 169.3 M59.1 169.5 A6 3.4 -3.4 1 0 71.1 168.8 A6 3.4 -3.4 1 0 59.1 169.5 M70.8 168.6 L82.5 166 M82.9 166.3 A6 3.4 -25.7 1 0 93.7 161.1 A6 3.4 -25.7 1 0 82.9 166.3',
          role: 'accent',
        },
        {
          d: 'M29.5 151.6 A6 3.4 -56.9 1 0 36.1 141.5 A6 3.4 -56.9 1 0 29.5 151.6 M36.6 142.2 L47.1 136.4 M47.2 136 A6 3.4 -11.6 1 0 58.9 133.6 A6 3.4 -11.6 1 0 47.2 136 M58.8 133.9 L70.7 134.1 M71 133.7 A6 3.4 14.1 1 0 82.7 136.7 A6 3.4 14.1 1 0 71 133.7 M82.3 137 L92.1 143.7',
          role: 'accent',
        },
        {
          d: 'M118 129 A6 3.4 -36.6 1 0 127.6 121.8 A6 3.4 -36.6 1 0 118 129 M127.5 122 L137.1 114.9 M137.3 114.7 A6 3.4 -36 1 0 147 107.7 A6 3.4 -36 1 0 137.3 114.7 M146.8 107.8 L156.6 100.8 M156.7 100.7 A6 3.4 -35.7 1 0 166.5 93.7 A6 3.4 -35.7 1 0 156.7 100.7 M166.3 93.8 L176.1 86.8',
          role: 'accent',
        },
        ...LOKI_CUFF,
        { d: 'M-4 150 H12 M140 150 H164', role: 'ambient', dashed: true },
      ],
    },
  ],
  // The same strip, smaller, between a pair of bat wings, and the devil's
  // tail curling out under it to a point like her arrows: Im possesses her
  // and flies her body over Elbaph from 1180 (ch. 1150). The trident it
  // carries is left out, and the shadow goes: she is in the air.
  'manmayer-gunko': [
    {
      episode: 1180,
      chapter: 1150,
      value: [
        ...moved(BAT_WING, 'translate(56 116) rotate(-48) scale(0.52)'),
        ...moved(
          BAT_WING,
          'translate(105 124) scale(-1 1) rotate(-48) scale(0.52)',
        ),
        ...GUNKO_COIL,
        { d: 'M104 160 C122 162 122 182 138 180' },
        {
          d: GUNKO_ARROWHEAD,
          transform:
            'translate(146 179) rotate(83) scale(0.32) translate(-122 -34)',
        },
      ],
    },
  ],
  // The saber drawn, and the black wisp of smoke that runs off its blade
  // to the dog it has become: its Zoan power, shown when Shamrock turns it
  // on Loki in 1168 (ch. 1138).
  'figarland-shamrock': [
    {
      episode: 1168,
      chapter: 1138,
      value: [
        ...DRAWN_SABER,
        {
          d: 'M66 150 C82 146 86 130 100 126 C114 122 116 108 130 104 C142 100 146 88 166 82 M70 164 C86 160 92 146 106 142',
          role: 'accent',
        },
        shadow(66, 192, 28),
      ],
    },
  ],
  // The same sword, its thorn guard no longer bright, with a thorny vine
  // wound round the sheath: his Thorn-Thorn power, first felt when Saul
  // runs into it in 1173 (ch. 1143). The show keeps the thorns invisible;
  // they are drawn so they show, as the fruit's own drawing has them.
  'shepherd-sommers': [
    {
      episode: 1173,
      chapter: 1143,
      value: [
        ...softened(elbafArt['shepherd-sommers']),
        {
          d: 'M62 102 C58 110 66 116 80 116 C94 116 100 122 96 130 C92 136 78 136 70 138 C60 140 58 148 66 152 C76 156 92 154 98 162 M64 114 l-6 2 l5 3 M90 117 l3 -6 l2 6 M96 133 l6 1 l-4 4 M66 139 l-4 -5 l-1 6 M82 155 l1 6 l3 -5',
          role: 'accent',
          transform: TILT,
        },
      ],
    },
  ],
  // The same hammer, its plate no longer bright, with lightning striking
  // its head: Loki brings it down on the tree and calls the bolts down in
  // 1172 (ch. 1142).
  'ragnir': [
    {
      episode: 1172,
      chapter: 1142,
      value: [
        ...softened(elbafArt.ragnir),
        {
          d: 'M56 -4 L44 14 L52 16 L36 38 M86 -4 L74 8 L82 10 L62 27 M120 -4 L106 6 L112 8 L86 17',
          role: 'accent',
        },
      ],
    },
  ],
  // He drops his axes to yield, one already on the branch, the other still
  // tumbling from his hand, and Gunko's arrows send him over its edge: the
  // dashed line is his fall into the Underworld. The page leaves his fate
  // open, from 1179 (ch. 1149).
  'scopper-gaban': [
    {
      episode: 1179,
      chapter: 1149,
      value: [
        { d: 'M0 178 H100 Q114 178 116 190 V200' },
        { d: 'M106 188 l6 -6 M106 199 l8 -8', role: 'ambient' },
        ...moved(GABAN_AXE, 'translate(58 120) rotate(-62) scale(0.7)'),
        ...moved(GABAN_AXE, 'translate(54 169) rotate(-90) scale(0.62)'),
        ...moved(GUNKO_ARROW, 'translate(116 52) rotate(-28)'),
        ...moved(GUNKO_ARROW, 'translate(137 62) rotate(-28)'),
        ...moved(GUNKO_ARROW, 'translate(126 90) rotate(-28)'),
        { d: 'M142 128 Q154 160 148 198', role: 'ambient', dashed: true },
      ],
    },
  ],
}
