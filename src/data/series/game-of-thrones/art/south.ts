import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * A small gold lion sitting side on, facing right, as the crown carries it on
 * its band: a scalloped mane, back, forelegs and tail, with no face.
 */
const CROWN_LION =
  'M48 138 Q47 130 52 128 L56 127 q-3 -3 0 -6 q0 -4 4 -3 q3 -3 6 0 q4 1 2 5 q2 4 -2 5 q-1 3 -4 3 L63 138 M58 132 V138 M48 134 Q42 132 44 125 q1 -2 2 0'

/** The band of Cersei Lannister's crown: its two sides and its lower rim. */
const CROWN_BAND: Stroke = { d: 'M34 112 V134 Q80 150 126 134 V112' }

/**
 * Cersei Lannister: a slim gold queen's crown in 3/4, its three points
 * tipped with beads and two small lions facing each other on the band, for
 * the queen who comes north with the court in episode 1 and in Eddard I
 * (chapter 5); the owner's pick (#1286). The far side of the band is
 * hatched; the accent is the left lion, and its mirror is soft.
 */
const CROWN: Stroke[] = [
  CROWN_BAND,
  { d: 'M34 112 Q80 128 126 112' },
  { d: 'M34 112 Q80 96 126 112', role: 'soft' },
  {
    d: 'M72 119.8 L80 84 L88 119.8 M51 116.8 L57 96 L63 118.9 M97 118.9 L103 96 L109 116.8',
  },
  {
    d: dots([
      [80, 79],
      [57, 91],
      [103, 91],
    ]),
  },
  { d: 'M44 108 L48 95 L52 106.5 M108 106.5 L112 95 L116 108', role: 'soft' },
  { d: CROWN_LION, role: 'accent' },
  { d: CROWN_LION, role: 'soft', transform: 'translate(160 0) scale(-1 1)' },
  { d: ellipse(80, 131, 4, 5), role: 'soft' },
  { d: 'M116 119 l6 -3 M116 127 l6 -3 M115 135 l6 -3', role: 'ambient' },
]

/** The crown on the table: Cersei Lannister's first drawing. */
const STANDING_CROWN: Stroke[] = [...CROWN, shadow(80, 151, 50)]

/** The legs of the bench Jaime Lannister's cloak lies on. */
const BENCH_LEGS: Stroke = { d: 'M30 110 V150 M116 110 V150 M130 101 V140' }

/** The hatching on the far end of that bench. */
const BENCH_HATCH: Stroke = {
  d: 'M122 104 l6 -3 M122 116 l6 -3 M122 128 l6 -3',
  role: 'ambient',
}

/**
 * Jaime Lannister: the white cloak of the Kingsguard thrown over a bench,
 * the sworn brother's cloak he wears from episode 1 and Eddard I (chapter
 * 5). White, so nothing on it is hatched; the bench's far end is. The
 * accent is the plain clasp at its shoulder.
 */
const WHITE_CLOAK: Stroke[] = [
  { d: 'M58 88 H44 L22 102 H54 M106 102 H116 L138 88 H102' },
  { d: 'M22 102 V110 H52 M108 110 H116 L138 96 V88' },
  BENCH_LEGS,
  {
    d: 'M58 88 Q80 80 102 88 L106 104 Q100 130 104 148 Q80 156 54 148 Q60 126 54 104 Z',
  },
  { d: 'M60 94 Q80 102 100 94', role: 'soft' },
  {
    d: 'M68 106 Q72 128 68 148 M82 108 Q80 130 82 151 M94 106 Q90 128 94 149',
    role: 'soft',
  },
  { d: `${circle(68, 96, 5)} M73 96 H80`, role: 'accent' },
  BENCH_HATCH,
  shadow(80, 155, 52),
]

/** The rim of Tywin Lannister's tankard. */
const TANKARD_RIM = ellipse(76, 66, 28, 8)

/**
 * Tywin Lannister: a pewter tankard of ale on a plank table, the owner's
 * pick (#1051). The book has him drink ale with Kevan in Tyrion VII (chapter
 * 57); the show is not confirmed. The far side is hatched; the accent is the
 * ale.
 */
const TANKARD: Stroke[] = [
  { d: TANKARD_RIM },
  { d: ellipse(76, 66, 24, 6), role: 'accent' },
  { d: 'M48 66 V124 Q76 136 104 124 V66' },
  { d: 'M48 80 Q76 90 104 80 M48 114 Q76 124 104 114', role: 'soft' },
  { d: 'M104 78 Q130 76 130 96 Q130 114 104 114' },
  { d: 'M104 86 Q120 86 120 96 Q120 106 104 106', role: 'soft' },
  { d: 'M90 92 l8 -4 M90 102 l8 -4 M90 112 l8 -4', role: 'ambient' },
  { d: 'M14 136 H146 M14 150 H146 M14 136 V150 M146 136 V150' },
  { d: 'M52 136 V150 M112 136 V150', role: 'soft' },
  shadow(80, 156, 60),
]

/**
 * Joffrey Baratheon: a stag, the animal of the house he is the heir of,
 * side on with no eye or mouth. Nothing of his own reads at his threshold
 * in both media, so the animal stands in. The accent is the antlers.
 * Mandon Moore's banner in `court.ts` carries it.
 */
export const STAG: Stroke[] = [
  {
    d: 'M68 100 Q64 88 60 76 Q50 80 42 82 Q34 82 34 76 Q36 70 46 66 L58 56 Q66 56 72 68 Q78 86 92 90 Q110 92 122 92 Q134 94 134 108 Q134 120 126 126',
  },
  { d: 'M68 100 Q70 116 78 124 Q100 130 126 126' },
  { d: 'M78 124 V152 M86 127 V152 M116 128 V152 M124 126 V152' },
  {
    d: 'M56 56 Q52 40 40 26 M50 42 Q40 42 32 34 M44 32 Q44 24 38 14 M62 56 Q68 40 82 30 M72 42 Q82 44 90 38 M78 34 Q80 24 88 16',
    role: 'accent',
  },
  { d: 'M66 58 Q74 52 80 56 Q76 62 70 64', role: 'soft' },
  { d: 'M134 100 Q142 98 142 90', role: 'soft' },
  { d: 'M72 92 Q80 104 78 118', role: 'soft' },
  { d: 'M116 106 l6 -3 M118 114 l6 -3', role: 'ambient' },
  shadow(100, 154, 36),
]

/**
 * Myrcella Baratheon: a silk hair ribbon tied in a bow, for the girl who
 * comes to Winterfell with the court in episode 1 and in Jon I (chapter 6).
 * The far side of each loop is hatched; the accent is the gold thread that
 * runs through the silk.
 */
const RIBBON: Stroke[] = [
  { d: 'M72 80 Q48 50 28 62 Q18 82 32 100 Q54 106 72 92' },
  { d: 'M88 80 Q112 50 132 62 Q142 82 128 100 Q106 106 88 92' },
  { d: 'M72 78 Q80 74 88 78 Q92 86 88 94 Q80 98 72 94 Q68 86 72 78' },
  { d: 'M74 96 Q66 122 44 146 L58 144 L64 154 Q82 126 82 97' },
  { d: 'M86 96 Q98 122 118 142 L104 142 L100 152 Q84 126 82 97', role: 'soft' },
  { d: 'M34 82 Q52 74 70 86 M126 82 Q108 74 90 86', role: 'accent' },
  { d: 'M40 66 Q36 82 42 98 M120 66 Q124 82 118 98', role: 'soft' },
  { d: 'M52 64 l6 -3 M58 74 l6 -3 M102 62 l6 3 M96 72 l6 3', role: 'ambient' },
  shadow(80, 158, 40),
]

/** The dome of Tommen Baratheon's applecake. */
const APPLECAKE_TOP: Stroke = {
  d: 'M32 124 Q28 92 64 88 Q100 92 98 126 Q64 136 32 124',
}

/**
 * Tommen Baratheon: an applecake on a plate with an apple beside it, for the plump boy who comes
 * north with the court in episode 1 and in Jon I (chapter 6). The book
 * gives him his sweet tooth later; the owner rules the cake his first
 * drawing in both media (#1051). The accent is the glaze.
 */
const APPLECAKE: Stroke[] = [
  { d: ellipse(80, 126, 60, 15) },
  { d: 'M20 128 Q26 144 80 146 Q134 144 140 128' },
  APPLECAKE_TOP,
  {
    d: 'M33 106 q5 10 11 2 q6 14 12 2 q6 12 12 0 q6 10 12 0 q6 8 16 -4',
    role: 'accent',
  },
  { d: 'M50 98 Q60 90 72 96', role: 'soft' },
  { d: 'M106 120 Q100 98 118 98 Q136 98 130 120 Q118 128 106 120' },
  {
    d: 'M118 98 Q118 92 122 88 M122 92 Q130 88 134 92 Q128 98 122 94',
    role: 'soft',
  },
  { d: 'M84 118 l7 -4 M122 112 l5 -3', role: 'ambient' },
  { d: 'M30 132 Q80 146 130 132', role: 'soft' },
  shadow(80, 151, 54),
]

/**
 * A great horn, its mouth up and its tip curling down. The accent is the
 * band under the rim. Robert Baratheon's first drawing and his death share
 * it.
 */
const HORN: Stroke[] = [
  { d: ellipse(102, 46, 25, 7) },
  { d: ellipse(102, 46, 21, 5), role: 'soft' },
  { d: 'M77 46 Q76 92 30 112 Q24 116 28 120 Q110 128 127 46' },
  { d: 'M78 60 Q102 70 125 60', role: 'accent' },
  { d: 'M71 82 Q90 96 113 84 M58 96 Q72 112 94 102', role: 'soft' },
  { d: 'M42 106 Q48 114 56 114', role: 'soft' },
  { d: 'M108 76 l7 -3 M106 88 l6 -3 M96 100 l6 -3', role: 'ambient' },
]

/**
 * Robert Baratheon: a drinking horn on its iron stand, for the king who
 * drinks at the feast in episode 1 and in Jon I (chapter 6).
 */
const STANDING_HORN: Stroke[] = [
  ...HORN,
  { d: 'M62 118 L54 150 M100 112 L110 150 M46 150 H118', role: 'soft' },
  shadow(82, 154, 40),
]

/**
 * A pale wooden hilt, the guard and the wrap of the grip, stood in a block
 * with the blade above it. The accent is the wrap. Syrio Forel's first
 * drawing and his stage share it.
 */
const PRACTICE_HILT: Stroke[] = [
  { d: 'M50 150 V136 L60 128 H100 L110 136 V150 Z M50 136 H110' },
  { d: 'M75 128 V106 H85 V128' },
  { d: 'M75 112 L85 116 M75 119 L85 123', role: 'accent' },
  { d: 'M60 106 H100 V100 H60 Z' },
  { d: 'M96 142 l6 -3 M88 146 l6 -3', role: 'ambient' },
]

/**
 * Syrio Forel: one wooden sword held point up in a block, the blade Arya
 * learns on from episode 3 and Arya II (chapter 23). The soft line down
 * the blade is the grain.
 */
const PRACTICE_SWORD: Stroke[] = [
  ...PRACTICE_HILT,
  { d: 'M74 100 V30 L80 20 L86 30 V100' },
  { d: 'M80 28 V96', role: 'soft' },
  shadow(80, 153, 38),
]

/**
 * A leather glove, palm down, its little finger in the accent: Petyr
 * Baelish's, for the name he goes by in both media. His every drawing
 * keeps it.
 */
export const GLOVE: Stroke[] = [
  { d: 'M50 98 Q46 80 45 70 Q45 61 51 61 Q57 61 58 69 L61 92', role: 'accent' },
  { d: 'M61 92 L61 52 Q62 44 68 44 Q74 44 75 52 L77 88' },
  { d: 'M77 88 V40 Q78 32 84 32 Q90 32 91 40 L92 88' },
  { d: 'M92 88 L95 50 Q96 42 102 43 Q108 44 107 52 L104 98' },
  { d: 'M104 98 L120 86 Q126 82 130 87 Q133 92 128 97 L106 122' },
  { d: 'M50 98 Q52 116 58 126' },
  { d: 'M58 126 Q80 134 106 122 L112 146 Q82 156 50 148 Z' },
  { d: 'M60 132 Q82 140 106 130', role: 'soft' },
  { d: 'M61 92 V104 M77 88 V104 M92 88 V104', role: 'soft' },
  { d: 'M64 112 Q80 120 98 112', role: 'soft' },
  { d: 'M96 136 l8 -4 M98 144 l8 -4', role: 'ambient' },
]

/**
 * The catspaw's dagger stood on its point: a round pommel, the grip, a
 * curved guard and the blade of Valyrian steel with its ripple. The grip's
 * wrap is left to each drawing, which says whether it carries the accent.
 */
const DAGGER: Stroke[] = [
  { d: circle(130, 66, 4) },
  { d: 'M127 70 H133 V88 H127 Z' },
  { d: 'M119 88 Q130 85 141 88 V92 Q130 89 119 92 Z' },
  { d: 'M125 92 V136 L130 150 L135 136 V92' },
  { d: 'M130 95 q-2 5 0 10 t0 10 t0 10 t0 10', role: 'soft' },
]

/** The dagger's wrapped grip. */
const DAGGER_WRAP = 'M127 75 L133 78 M127 81 L133 84'

/**
 * Petyr Baelish: the glove, and the dagger leaning on it, the one he looks
 * over and claims as his own when Catelyn shows it to him in "Lord Snow"
 * (episode 3) and in Catelyn IV (chapter 19), the scenes he is first named
 * in. The owner keeps the glove and adds the dagger (#1287).
 */
const GLOVE_DAGGER: Stroke[] = [
  ...moved(GLOVE, 'translate(-10.5 21) scale(0.86)'),
  ...moved(
    [...DAGGER, { d: DAGGER_WRAP, role: 'soft' }],
    'rotate(-24 130 150)',
  ),
  shadow(80, 155, 50),
]

/**
 * Renly Baratheon: a silk cloak falling from its round clasp to the floor,
 * for the king's youngest brother, who rides into the story richly dressed
 * in episode 3 and in Sansa I (chapter 16). The accent is the clasp.
 */
const FOLDED_CLOAK: Stroke[] = [
  {
    d: 'M68 42 Q42 46 34 72 Q26 110 22 146 Q60 158 104 150 Q122 158 142 148 Q124 138 116 118 Q108 76 90 42',
  },
  { d: `${circle(79, 40, 9)} ${circle(79, 40, 4)}`, role: 'accent' },
  {
    d: 'M70 50 Q52 88 48 148 M78 50 Q72 100 76 152 M86 50 Q92 96 102 148',
    role: 'soft',
  },
  { d: 'M104 150 Q112 138 112 124', role: 'soft' },
  { d: 'M60 30 H98', role: 'ambient' },
  { d: 'M104 92 l7 -3 M108 106 l7 -3 M112 120 l7 -3', role: 'ambient' },
  shadow(82, 158, 56),
]

/**
 * Renly's crown at the origin, a gold band in 3/4 with its far rim
 * lighter and golden antlers rising from it, as both media give it.
 */
const ANTLER_CROWN: Stroke[] = [
  { d: 'M-18 -4 Q0 2 18 -4 V2 Q0 8 -18 2 Z' },
  { d: 'M-18 -4 Q0 -10 18 -4', role: 'soft' },
  {
    d: 'M-10 -6 Q-14 -14 -12 -24 M-12 -16 L-18 -20 M-13 -21 L-8 -26 M10 -6 Q14 -14 12 -24 M12 -16 L18 -20 M13 -21 L8 -26',
  },
  { d: 'M0 -7 V-14', role: 'soft' },
]

/**
 * Lysa Arryn: a falcon, the animal of her house, perched side on with its
 * wings folded and no eye. Nothing of her own reads at her threshold in
 * both media, so the animal stands in. The accent is one wing feather.
 */
const FALCON: Stroke[] = [
  {
    d: 'M60 42 Q68 30 82 34 Q92 40 92 54 Q108 76 112 102 Q114 116 128 140 L110 138 L104 122',
  },
  {
    d: 'M60 42 Q48 44 46 56 Q52 50 60 52 Q56 72 60 92 Q66 112 86 118 L104 122',
  },
  { d: 'M78 58 Q98 76 104 116 Q84 104 76 84 Q72 72 78 58', role: 'soft' },
  { d: 'M84 72 Q96 88 99 106', role: 'accent' },
  {
    d: 'M72 116 Q70 124 64 128 M72 116 Q74 124 72 130 M86 118 Q86 126 82 130 M86 118 Q90 126 90 130',
    role: 'soft',
  },
  { d: 'M34 150 L46 134 L70 130 H94 L108 150', role: 'soft' },
  { d: 'M100 64 l6 -3 M106 76 l6 -3 M110 90 l6 -3', role: 'ambient' },
  shadow(72, 153, 42),
]

/**
 * Robin Arryn: a cloth doll sitting slumped, blank where a face would be,
 * the doll he grasps in Catelyn VI (chapter 35). The show does not confirm
 * it; the owner rules it his drawing (#1051). The accent is the sash.
 */
const DOLL: Stroke[] = [
  { d: circle(80, 46, 19) },
  {
    d: 'M64 36 Q80 24 96 36 M62 46 Q60 38 66 32 M98 46 Q100 38 94 32',
    role: 'soft',
  },
  { d: 'M68 64 Q60 86 62 112 H98 Q100 86 92 64' },
  { d: 'M66 72 Q46 82 38 104 Q36 112 44 112 Q50 110 52 102 Q58 92 64 88' },
  {
    d: 'M94 72 Q114 82 122 104 Q124 112 116 112 Q110 110 108 102 Q102 92 96 88',
  },
  { d: 'M64 112 Q48 124 40 142 Q38 150 48 150 Q58 146 62 136 L72 122' },
  { d: 'M96 112 Q112 124 120 142 Q122 150 112 150 Q102 146 98 136 L88 122' },
  { d: 'M66 70 L96 104 M60 90 L92 66', role: 'accent' },
  { d: 'M72 112 V118 M88 112 V118', role: 'soft' },
  shadow(80, 154, 46),
]

/**
 * A longsword below its pommel: the wrapped grip (the accent), a plain guard
 * and a bare blade.
 */
const SWORD_BELOW_POMMEL: Stroke[] = [
  { d: 'M76 27 H84 V48 H76 Z' },
  { d: 'M76 33 L84 37 M76 40 L84 44', role: 'accent' },
  { d: 'M60 48 H100 V54 H60 Z' },
  { d: 'M72 54 V136 L80 150 L88 136 V54' },
  { d: 'M80 56 V146', role: 'soft' },
  {
    d: 'M83 64 l4 -3 M83 78 l4 -3 M83 92 l4 -3 M83 106 l4 -3 M83 120 l4 -3',
    role: 'ambient',
  },
]

/**
 * A longsword, the wrapped grip, a plain guard and a bare blade.
 */
const LONGSWORD: Stroke[] = [{ d: circle(80, 22, 5) }, ...SWORD_BELOW_POMMEL]

/** Bronn's planted sword's ground and shadow, the same in every stage. */
const SWORD_GROUND: Stroke[] = [
  { d: 'M64 150 H96 M70 150 l-6 4 M90 150 l7 3', role: 'soft' },
  shadow(84, 158, 34),
]

/** The slant Bronn's sword stands at, pivoted on its point. */
const PLANTED = 'rotate(18 80 150)'

/**
 * Bronn: a bare longsword planted point down in the ground at a slant, for
 * the sellsword who joins Catelyn's party in episode 4 and in Tyrion IV
 * (chapter 32). No whetstone: the show never gives him one (owner, #1286).
 * The accent is the leather of the grip.
 */
const PLANTED_SWORD: Stroke[] = [...moved(LONGSWORD, PLANTED), ...SWORD_GROUND]

/**
 * A plain sword's hilt, the grip wrapped in white leather: the accent.
 * Barristan Selmy's sword in its scabbard and his broken blade share it.
 */
const WHITE_HILT: Stroke[] = [
  { d: circle(80, 26, 6) },
  { d: 'M76 32 H84 V54 H76 Z' },
  { d: 'M76 38 L84 42 M76 45 L84 49', role: 'accent' },
  { d: 'M60 54 H100 V60 H60 Z' },
]

/**
 * The same sword in its scabbard. Barristan Selmy's first drawing and his
 * stage share it.
 */
const SCABBARDED_SWORD: Stroke[] = [
  ...WHITE_HILT,
  { d: 'M72 60 V144 Q80 152 88 144 V60' },
  { d: 'M72 70 H88 M72 134 H88', role: 'soft' },
  { d: 'M84 84 l4 -3 M84 98 l4 -3 M84 112 l4 -3', role: 'ambient' },
]

/**
 * Barristan Selmy: his sword laid across a low rack, for the old Lord
 * Commander of the Kingsguard, who rides in with the king in episode 3 and
 * in Sansa I (chapter 16).
 */
const RACKED_SWORD: Stroke[] = [
  ...moved(SCABBARDED_SWORD, 'translate(0 18) rotate(-90 80 85)'),
  { d: 'M46 116 V150 M114 116 V150 M38 150 H54 M106 150 H122' },
  { d: 'M40 116 L46 122 L52 116 M108 116 L114 122 L120 116', role: 'soft' },
  shadow(80, 154, 50),
]

/**
 * Shae: a tent's flap tied back with a lamp hanging inside, the tent she
 * comes to at the Lannister camp in episode 9 and in Tyrion VIII (chapter
 * 63). The dark inside is hatched; the accent is the cord on the flap.
 */
const TENT: Stroke[] = [
  { d: 'M80 34 L18 150 H142 L80 34 M80 34 V22' },
  { d: 'M80 36 Q72 96 56 150' },
  { d: 'M80 36 Q88 76 108 94 Q106 124 118 150' },
  { d: 'M100 88 Q106 96 116 92 M100 96 Q108 102 116 100', role: 'accent' },
  { d: 'M80 44 V66', role: 'soft' },
  { d: 'M73 66 H87 L84 88 H76 Z M80 72 V82', role: 'soft' },
  {
    d: 'M70 110 l8 -4 M66 122 l10 -5 M64 134 l12 -6 M62 146 l14 -7 M88 118 l6 -3 M86 134 l10 -5',
    role: 'ambient',
  },
  { d: 'M44 104 Q40 128 36 150 M124 114 Q128 130 130 150', role: 'soft' },
  shadow(80, 154, 58),
]

/**
 * Walder Frey: an old man's walking stick left against a chair, for the
 * lord of the Crossing, old and bent, in episode 9 and in Catelyn IX
 * (chapter 60). The accent is the stick's crook.
 */
const WALKING_STICK: Stroke[] = [
  { d: 'M50 104 L68 92 H126 L108 104 Z' },
  { d: 'M50 104 V150 M108 104 V150 M126 92 V140' },
  { d: 'M68 92 V36 M126 92 V36' },
  { d: 'M68 36 Q97 28 126 36 M68 50 Q97 42 126 50' },
  { d: 'M82 46 V92 M97 44 V92 M112 46 V92', role: 'soft' },
  { d: 'M50 110 H108', role: 'soft' },
  { d: 'M18 150 L38 82 M23 151 L43 84' },
  {
    d: 'M38 82 Q42 66 54 68 Q62 72 58 80 Q54 84 50 80 M43 84 Q44 74 52 74',
    role: 'accent',
  },
  { d: 'M114 58 l6 -3 M114 70 l6 -3 M114 82 l6 -3', role: 'ambient' },
  shadow(78, 154, 56),
]

/**
 * A songbird side on, with no eye: one of Varys's little birds. His
 * drawings and Ros's stage share it.
 */
const LITTLE_BIRD: Stroke[] = [
  {
    d: 'M56 66 Q60 50 74 50 Q84 52 88 62 Q100 78 112 100 Q92 98 78 96 Q60 90 56 66',
  },
  { d: 'M56 62 L46 64 L57 69' },
  { d: 'M112 100 L134 118 L122 100', role: 'soft' },
  { d: 'M74 66 Q88 72 102 92 Q84 90 74 82 Q70 74 74 66', role: 'soft' },
  { d: 'M74 96 V108 M84 97 V108', role: 'soft' },
  { d: 'M88 76 l6 -3 M94 86 l5 -3', role: 'ambient' },
]

/**
 * The canopy bed's frame and its rumpled sheet, without the curtains. Ros's
 * first drawing, her stage and her death share it.
 */
const BED_FRAME: Stroke[] = [
  { d: 'M24 46 H108 L134 30 H50 Z' },
  { d: 'M24 46 V150 M108 46 V150 M134 30 V130' },
  { d: 'M24 112 H108 L134 94 H50 L24 112' },
  { d: 'M24 128 H108 L134 110', role: 'soft' },
  { d: 'M50 94 V30', role: 'soft' },
  {
    d: 'M42 106 Q56 96 72 106 Q84 112 92 100 M58 110 Q70 100 84 98',
    role: 'soft',
  },
  { d: 'M112 106 l8 -5 M114 118 l8 -5', role: 'ambient' },
  shadow(78, 154, 56),
]

/**
 * Ros: a bed with its curtains tied back and its sheet rumpled, in the
 * brothel where the show keeps her, named in episode 4. The record is the
 * show's alone. The accent is the curtain.
 */
const CURTAINED_BED: Stroke[] = [
  ...BED_FRAME,
  { d: 'M30 46 Q36 76 28 96 M62 46 Q58 76 30 96', role: 'accent' },
  { d: 'M102 46 Q96 76 104 96 M74 46 Q78 74 102 96', role: 'soft' },
]

/**
 * Ilyn Payne: a mail hauberk on a stand, rusted and left open at the neck,
 * for the King's Justice, who rides in with the court in episode 2 and in
 * Sansa I (chapter 16). No sword, which would tell what he does in episode
 * 9. The rings are hatched; the accent is the leather strap at the shoulder.
 */
const HAUBERK: Stroke[] = [
  {
    d: 'M64 46 Q44 50 30 66 L22 118 L40 122 L50 84 V136 q5 5 10 0 t10 0 t10 0 t10 0 t10 0 t10 0 V84 L120 122 L138 118 L130 66 Q116 50 96 46',
  },
  { d: 'M64 46 Q80 58 96 46' },
  { d: 'M80 52 V30 M72 30 H88', role: 'soft' },
  { d: 'M64 46 Q70 70 104 96', role: 'accent' },
  {
    d: 'M56 96 q4 4 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 M56 110 q4 4 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 M56 124 q4 4 8 0 t8 0 t8 0 t8 0 t8 0 t8 0',
    role: 'ambient',
  },
  {
    d: 'M36 72 q3 3 6 0 M32 88 q3 3 6 0 M28 104 q3 3 6 0 M118 72 q3 3 6 0 M122 88 q3 3 6 0 M126 104 q3 3 6 0',
    role: 'ambient',
  },
  { d: 'M80 141 V150 M58 150 H102' },
  shadow(80, 154, 34),
]

/** The perch's crossbar and the ring on its post, the accent. */
const PERCH_BAR: Stroke[] = [
  { d: 'M36 110 H114 M36 106 V114 M114 106 V114' },
  { d: ellipse(80, 126, 9, 3.5), role: 'accent' },
]

/**
 * Varys: a songbird on a perch, one of the little birds he speaks of from
 * episode 3 and Catelyn IV (chapter 19). No eye. The accent is the ring on
 * the post.
 */
const SONGBIRD: Stroke[] = [
  ...LITTLE_BIRD,
  ...PERCH_BAR,
  { d: 'M78 112 V146 M82 112 V146' },
  { d: ellipse(80, 149, 24, 6) },
  shadow(80, 158, 26),
]

/**
 * Pycelle: the Grand Maester's heavy chain, two rows of links hung on a
 * stand, for the old man who sits on the small council from episode 3 and
 * Eddard IV (chapter 21). Wider than Luwin's, and hung rather than laid.
 * The accent is one link.
 */
const GRAND_CHAIN: Stroke[] = [
  { d: 'M42 42 Q80 30 118 42 M80 36 V24' },
  { d: 'M80 36 V62 M80 118 V146' },
  {
    d: `${ellipse(46, 50, 5, 4)} ${ellipse(44, 62, 5, 4)} ${ellipse(45, 74, 5, 4)} ${ellipse(50, 86, 5, 4)} ${ellipse(58, 97, 5, 4)} ${ellipse(68, 105, 5, 4)} ${ellipse(92, 105, 5, 4)} ${ellipse(102, 97, 5, 4)} ${ellipse(110, 86, 5, 4)} ${ellipse(115, 74, 5, 4)} ${ellipse(116, 62, 5, 4)} ${ellipse(114, 50, 5, 4)}`,
  },
  { d: ellipse(80, 108, 7, 5), role: 'accent' },
  {
    d: `${ellipse(60, 50, 4, 3)} ${ellipse(59, 60, 4, 3)} ${ellipse(62, 70, 4, 3)} ${ellipse(70, 78, 4, 3)} ${ellipse(90, 78, 4, 3)} ${ellipse(98, 70, 4, 3)} ${ellipse(101, 60, 4, 3)} ${ellipse(100, 50, 4, 3)}`,
    role: 'soft',
  },
  { d: ellipse(80, 82, 5, 3.5), role: 'soft' },
  { d: 'M112 88 l5 -3 M104 100 l5 -3', role: 'ambient' },
  { d: ellipse(80, 149, 26, 6) },
  shadow(80, 158, 28),
]

/**
 * The Hound's dog's-head helm side on, with no eye or teeth. The steel's
 * far side is hatched; the accent is the snout.
 */
const HOUND_HELM: Stroke[] = [
  {
    d: 'M60 72 Q64 56 78 48 L82 24 L98 44 L110 22 Q120 44 120 62 Q128 88 118 124',
  },
  { d: 'M60 106 Q62 118 66 128' },
  { d: 'M60 72 L28 84 Q22 92 28 98 L60 106', role: 'accent' },
  { d: 'M66 128 Q92 136 118 124 L124 148 Q92 158 60 148 Z' },
  { d: 'M78 48 Q90 56 104 54', role: 'soft' },
  { d: 'M66 136 Q92 146 120 134', role: 'soft' },
  {
    d: 'M112 70 l6 -3 M114 84 l6 -3 M114 98 l6 -3 M112 112 l6 -3',
    role: 'ambient',
  },
]

/**
 * Sandor Clegane: his helm standing, the one he wears at the tourney in
 * episode 4 and rides in with in Eddard I (chapter 5).
 */
const DOG_HELM: Stroke[] = [...HOUND_HELM, shadow(90, 156, 40)]

/**
 * A bare tree, its trunk forked and its branches leafless, on a dashed
 * ground: where Arya leaves the Hound after the fight with Brienne.
 */
const BARE_TREE: Stroke[] = [
  { d: 'M126 152 Q132 112 126 76 M138 152 Q136 116 140 92' },
  {
    d: 'M126 76 Q120 58 108 50 M126 76 Q130 56 126 38 M140 92 Q148 74 150 56 M128 96 Q118 92 110 96',
    role: 'soft',
  },
  { d: 'M134 120 l4 -2 M134 132 l4 -2', role: 'ambient' },
  { d: 'M14 152 H150', role: 'ambient', dashed: true },
]

/** The dog's-head helm fallen on its side, the snout turned up. */
const FALLEN_HOUND_HELM: Stroke[] = moved(
  HOUND_HELM,
  'translate(66 112) scale(0.75) rotate(60) translate(-80 -100)',
)

/** A spear's leaf-shaped head, its far edge hatched. */
const SPEARHEAD: Stroke[] = [
  { d: 'M80 20 L90 46 L80 56 L70 46 Z' },
  { d: 'M80 26 V52', role: 'soft' },
  { d: 'M84 32 l3 -2 M84 40 l4 -2', role: 'ambient' },
]

/** The iron socket that holds the head on the shaft. */
const SPEAR_SOCKET = 'M76 56 H84 V64 H76 Z'

/**
 * The shaft with a cloak knotted round it, the knot in the accent and the
 * folds of the near tail; the tails are left to each drawing.
 */
const KNOTTED_SHAFT: Stroke[] = [
  { d: 'M78 64 V86 M82 64 V86 M78 104 V150 M82 104 V150' },
  {
    d: 'M68 90 Q80 84 92 90 Q96 96 92 102 Q80 108 68 102 Q64 96 68 90',
    role: 'accent',
  },
  { d: 'M60 118 Q56 130 54 146 M66 116 Q64 130 62 148', role: 'soft' },
]

/** The cloak's two tails, falling from the knot. */
const CLOAK_TAILS = [
  'M68 102 Q50 120 42 146 Q56 154 70 146 Q72 124 76 106',
  'M92 102 Q106 116 112 132 Q102 138 92 132 Q90 118 86 106',
] as const

/**
 * Janos Slynt: a spear of the City Watch with a gold cloak knotted round
 * the shaft, for the Commander of the Watch in episode 4 and in Eddard VI
 * (chapter 28). The accent is the cloak.
 */
const WATCH_SPEAR: Stroke[] = [
  ...SPEARHEAD,
  { d: SPEAR_SOCKET },
  ...KNOTTED_SHAFT,
  { d: CLOAK_TAILS[0], role: 'accent' },
  { d: CLOAK_TAILS[1], role: 'accent' },
  shadow(80, 154, 40),
]

/**
 * Gendry: the bull's-head helm he made, side on, with no eye or muzzle, as
 * it stands in the armourer's shop in episode 4 and in Eddard VI (chapter
 * 28). The accent is the two great horns.
 */
const BULL_HELM: Stroke[] = [
  {
    d: 'M48 130 Q42 78 80 66 Q116 66 122 100 L138 112 Q142 122 132 126 L118 124 L112 130 Q80 140 48 130',
  },
  {
    d: 'M68 70 Q58 34 26 30 Q42 46 50 74 Q58 80 68 70 M94 68 Q104 36 136 30 Q124 50 112 76 Q102 78 94 68',
    role: 'accent',
  },
  { d: 'M50 112 Q80 122 112 112', role: 'soft' },
  { d: 'M84 72 Q98 84 120 98', role: 'soft' },
  { d: 'M64 92 l8 -4 M58 100 l8 -4 M54 108 l8 -4', role: 'ambient' },
  { d: 'M60 136 L54 148 H118 L110 134' },
  shadow(84, 153, 42),
]

/**
 * Gregor Clegane: a jousting lance broken at the point, the one that kills
 * Hugh of the Vale at the tourney in episode 4 and in Sansa II (chapter
 * 30). The vamplate is the cone over the grip; the accent is the
 * splintered end.
 */
const BROKEN_LANCE: Stroke[] = [
  ...moved(
    [
      { d: 'M74 118 V58 M86 118 V54' },
      { d: 'M74 58 L70 42 L77 52 L80 32 L83 48 L90 38 L86 54', role: 'accent' },
      { d: 'M74 118 L52 134 Q80 146 108 134 L86 118' },
      { d: 'M60 132 Q80 140 100 132', role: 'soft' },
      { d: 'M76 141 V156 H84 V141' },
      { d: 'M80 62 V112', role: 'soft' },
      { d: 'M92 128 l6 -3 M86 134 l6 -3', role: 'ambient' },
    ],
    'rotate(26 80 150)',
  ),
  { d: 'M116 146 L132 142 L136 150 L120 154 Z', role: 'soft' },
  shadow(80, 158, 44),
]

/**
 * The lance down on the ground in two pieces, the point gone: the butt with
 * its vamplate, snapped short, and a length of shaft splintered at both
 * ends. The accent is the splintered shaft; the butt's snapped end is soft.
 */
const FALLEN_LANCE: Stroke[] = [
  ...moved(
    [
      { d: 'M74 118 V92 M86 118 V92' },
      { d: 'M74 92 L77 86 L80 94 L83 84 L86 92', role: 'soft' },
      { d: 'M74 118 L52 134 Q80 146 108 134 L86 118' },
      { d: 'M60 132 Q80 140 100 132', role: 'soft' },
      { d: 'M76 141 V156 H84 V141' },
      { d: 'M92 128 l6 -3 M86 134 l6 -3', role: 'ambient' },
    ],
    'translate(-28 12) rotate(90 80 120)',
  ),
  { d: 'M92 150 H136 M92 158 H136' },
  {
    d: 'M92 150 L88 153 L93 154 L89 158 M136 150 L141 152 L137 154 L142 157 L136 158',
    role: 'accent',
  },
  { d: 'M100 154 H130', role: 'soft' },
  { d: 'M14 160 H146', role: 'ambient', dashed: true },
]

/**
 * A white Kingsguard great helm, flat-topped and closed, seen in 3/4. It is
 * white, so nothing is hatched; the accent is the eye slit, with no eyes
 * drawn in it.
 */
const WHITE_GREAT_HELM: Stroke[] = [
  { d: 'M52 62 Q80 42 108 62 Q80 56 52 62' },
  { d: 'M52 62 V134 Q80 146 108 134 V62' },
  { d: 'M80 54 V142', role: 'soft' },
  { d: 'M56 90 Q80 96 104 90 M56 98 Q80 104 104 98', role: 'accent' },
  {
    d: dots([
      [88, 114],
      [95, 113],
      [88, 122],
      [95, 121],
      [102, 112],
      [102, 120],
    ]),
    role: 'soft',
  },
  { d: 'M52 112 Q60 116 66 114', role: 'soft' },
]

/**
 * Loras Tyrell: a long-stemmed rose, the flower he gives Sansa at the
 * tourney in episode 5 and in Sansa II (chapter 30). The book's is red and
 * the show's colour is not confirmed, so the bloom is left bare: the accent
 * is the stem and its leaves, green in both.
 */
const ROSE: Stroke[] = [
  { d: 'M56 60 Q50 34 80 28 Q110 34 104 60 Q96 78 80 78 Q64 78 56 60' },
  {
    d: 'M70 44 Q80 36 90 44 Q94 54 82 58 Q72 56 76 48 Q82 44 86 50',
    role: 'soft',
  },
  { d: 'M56 60 Q70 54 72 72 M104 60 Q92 54 90 72', role: 'soft' },
  { d: 'M72 76 L64 88 M88 76 L96 88', role: 'soft' },
  { d: 'M80 78 Q86 116 78 150', role: 'accent' },
  { d: 'M82 104 Q62 94 50 106 Q64 120 82 110', role: 'accent' },
  { d: 'M82 124 Q102 112 114 124 Q98 136 81 130', role: 'accent' },
  { d: 'M84 92 l5 -2 M78 138 l-5 -2', role: 'soft' },
  { d: 'M96 44 l5 -3 M98 54 l5 -3 M94 66 l5 -3', role: 'ambient' },
  shadow(80, 154, 26),
]

/** The first season's southern cast (#1051), keyed by record id. */
export const SOUTH_DRAWINGS = {
  'cersei-lannister': STANDING_CROWN,
  'jaime-lannister': WHITE_CLOAK,
  'tywin-lannister': TANKARD,
  'joffrey-baratheon': STAG,
  'myrcella-baratheon': RIBBON,
  'tommen-baratheon': APPLECAKE,
  'robert-baratheon': STANDING_HORN,
  'renly-baratheon': FOLDED_CLOAK,
  'lysa-arryn': FALCON,
  'robin-arryn': DOLL,
  'bronn': PLANTED_SWORD,
  'shae': TENT,
  'walder-frey': WALKING_STICK,
  'ros': CURTAINED_BED,
  'ilyn-payne': HAUBERK,
  'barristan-selmy': RACKED_SWORD,
  'syrio-forel': PRACTICE_SWORD,
  'petyr-baelish': GLOVE_DAGGER,
  'varys': SONGBIRD,
  'pycelle': GRAND_CHAIN,
  'sandor-clegane': DOG_HELM,
  'janos-slynt': WATCH_SPEAR,
  'gendry': BULL_HELM,
  'gregor-clegane': BROKEN_LANCE,
  'loras-tyrell': ROSE,
} satisfies Drawings

/** How a fallen object lies on the floor: a dashed line under it. */
const FLOOR: Stroke = { d: 'M8 156 H152', role: 'ambient', dashed: true }

/**
 * Stone blocks fallen round an object on the floor, their far faces
 * hatched: Cersei Lannister's and Jaime Lannister's deaths share them.
 */
const RUBBLE: Stroke[] = [
  {
    d: 'M4 152 L6 126 L28 122 L32 152 M6 126 L14 118 L34 115 L28 122 M34 115 L36 146 L32 152',
  },
  {
    d: 'M130 152 L132 130 L152 128 L154 152 M132 130 L138 124 L156 122 L152 128',
  },
  { d: 'M42 152 l3 -6 l6 1 l1 5 M114 152 l2 -5 l6 0 l1 5', role: 'soft' },
  {
    d: 'M30 128 l4 -3 M31 138 l4 -3 M31 147 l4 -3 M151 134 l3 -2 M152 144 l3 -2',
    role: 'ambient',
  },
  FLOOR,
]

/** How Cersei Lannister's crown lies at her death: tipped onto its side. */
const CROWN_FALLEN =
  'translate(0 6) rotate(16 80 142) translate(16 28.4) scale(0.8)'

/** The bench bare, the white cloak gone and its clasp left on the wood. */
const BARE_BENCH: Stroke[] = [
  { d: 'M22 102 L44 88 H138 L116 102 Z' },
  { d: 'M22 102 V110 H116 V102 M116 110 L138 96 V88' },
  BENCH_LEGS,
  { d: 'M40 95 H124', role: 'soft' },
  { d: `${circle(76, 95, 5)} M81 95 H88`, role: 'accent' },
  BENCH_HATCH,
  shadow(80, 155, 52),
]

/** A small gold crown seen side on, three points over a plain band. */
const LITTLE_CROWN =
  'M48 58 L49 46 L54 52 L59 42 L64 52 L69 46 L70 58 Q59 62 48 58'

/**
 * A stag lying on its side on the ground, its neck slack and its head down,
 * the antlers flat behind it.
 */
const LYING_STAG: Stroke[] = [
  { d: 'M54 146 Q48 124 74 116 Q104 110 126 120 Q142 128 136 148' },
  { d: 'M54 146 Q96 154 136 148' },
  { d: 'M62 126 Q48 132 40 142 Q32 150 22 149 Q14 147 18 142 Q26 138 36 136' },
  {
    d: 'M30 140 Q22 128 10 122 M24 131 Q16 131 10 126 M36 137 Q36 124 28 112 M33 126 Q39 122 42 116',
    role: 'soft',
  },
  { d: 'M84 149 Q92 142 104 146 M112 150 Q120 144 128 148', role: 'soft' },
  { d: 'M136 130 Q144 128 144 120', role: 'soft' },
  { d: 'M116 126 l6 -3 M120 134 l6 -3', role: 'ambient' },
  FLOOR,
]

/** Myrcella Baratheon's gold chain, hanging round under her ribbon. */
const NECKLACE_CHAIN: Stroke = { d: 'M38 72 Q40 132 80 138 Q120 132 122 72' }

/** Bronn's rose on its pommel, the Tyrell rose of Highgarden. */
const POMMEL_ROSE: Stroke[] = [
  { d: circle(80, 20, 7), role: 'accent' },
  { d: 'M80 20 q3 -1 2 3 q-3 3 -5 -1 q0 -5 5 -5', role: 'soft' },
]

/**
 * The Stokeworth banner hung from a pole beside Bronn's sword: a white lamb
 * holding a golden goblet. The accent is the lamb.
 */
const STOKEWORTH_BANNER: Stroke[] = [
  { d: 'M28 152 V22 M28 30 H66' },
  { d: 'M31 30 V90 L47 82 L63 90 V30' },
  {
    d: 'M36 64 Q34 58 40 57 Q42 52 48 54 Q53 51 56 56 Q61 57 59 63 Q60 68 54 69 H40 Q35 69 36 64 M56 56 Q60 52 63 55 Q63 59 59 59 M41 69 V75 M53 69 V75',
    role: 'accent',
  },
  { d: 'M58 60 H63 L62 64 H59 Z', role: 'soft' },
  { d: 'M55 38 l5 -3 M55 46 l5 -3', role: 'ambient' },
]

/** Walder Frey's chair and stick, smaller and lower, under two banners. */
const UNDER_BANNERS = 'translate(4 30) scale(0.8)'

/** Walder Frey's stick fallen flat on the floor in front of the chair. */
const STICK_FALLEN = 'translate(122 0) rotate(-106 18 150)'

/** The southern cast drawn again later in the story. */
export const southRedrawn: Redrawings = {
  'cersei-lannister': [
    // The crown fallen on its side among stones, the lions gone out and the
    // band taking the accent: she dies under the Red Keep as it falls, in
    // "The Bells" (episode 72). The show's alone (the books leave her
    // alive); chapter 344, the last, orders it.
    {
      episode: 72,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(
          [{ ...CROWN_BAND, role: 'accent' }, ...softened(CROWN.slice(1))],
          CROWN_FALLEN,
        ),
        ...RUBBLE,
      ],
    },
  ],
  'jaime-lannister': [
    // The bench bare, the cloak gone and the clasp left on the wood: Tommen
    // removes him from the Kingsguard in "Blood of My Blood" (episode 56).
    // The show's alone (in the books he stays Lord Commander); chapter 344
    // orders it.
    { episode: 56, chapter: 344, source: 'episode', value: BARE_BENCH },
    // The bench broken under fallen stones and the white cloak on the
    // floor: he dies with Cersei under the Red Keep in "The Bells" (episode
    // 72). The show's alone; chapter 344 orders it.
    {
      episode: 72,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M16 146 L120 96 L134 102 L30 152 Z' },
        { d: 'M124 104 V150 M40 152 l18 -4', role: 'soft' },
        {
          d: 'M58 130 L62 112 L84 108 L88 124 Z M94 114 L98 98 L114 96 L116 108 Z',
        },
        {
          d: 'M44 156 Q48 138 70 142 Q86 128 108 138 Q124 132 136 146 Q142 150 140 157 Q92 164 44 156',
        },
        { d: 'M60 155 Q68 144 80 146 M94 158 Q100 144 116 142', role: 'soft' },
        { d: `${circle(74, 148, 4)} M78 148 H84`, role: 'accent' },
        { d: 'M84 116 l4 -3 M84 124 l4 -3 M112 102 l4 -3', role: 'ambient' },
        FLOOR,
      ],
    },
  ],
  'tywin-lannister': [
    // The tankard on its side on the table, the ale run out and dark, the
    // rim taking the accent: Tyrion kills him in the privy of the Tower of
    // the Hand, in "The Children" (episode 40) and in Tyrion XI of A Storm
    // of Swords (chapter 221).
    {
      episode: 40,
      chapter: 221,
      value: [
        ...moved(
          [{ d: TANKARD_RIM, role: 'accent' }, ...TANKARD.slice(2, 7)],
          'rotate(-90 76 107)',
        ),
        {
          d: 'M44 136 Q30 131 18 134 Q12 136 16 137 M20 137 V146 M27 137 V142',
          role: 'ambient',
        },
        ...TANKARD.slice(7),
      ],
    },
  ],
  'joffrey-baratheon': [
    // A crown on the stag's head between its antlers, the accent moved to
    // it: he is king from Robert's death, in "You Win or You Die" (episode
    // 7) and in Eddard XIV (chapter 50). Crowns count (owner, #1286).
    {
      episode: 7,
      chapter: 50,
      value: [...softened(STAG), { d: LITTLE_CROWN, role: 'accent' }],
    },
    // The stag down on its side, its antlers out, the crown fallen off: he
    // dies at his wedding feast, in "The Lion and the Rose" (episode 32) and
    // in Tyrion VIII of A Storm of Swords (chapter 204).
    {
      episode: 32,
      chapter: 204,
      value: [
        ...LYING_STAG,
        {
          d: LITTLE_CROWN,
          role: 'accent',
          transform: 'translate(84 92) rotate(24 59 52)',
        },
      ],
    },
  ],
  'myrcella-baratheon': [
    // Her gold necklace hanging round under a smaller ribbon, its round
    // pendant carrying the Lannister lion, the accent moved to the lion:
    // Cersei knows it as hers when Dorne sends it back in a viper's jaws, in
    // "The House of Black and White" (episode 42), the first episode to
    // show it. The show's alone; chapter 344 orders it.
    {
      episode: 42,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(softened(RIBBON.slice(0, 8)), 'translate(32 10) scale(0.6)'),
        NECKLACE_CHAIN,
        { d: circle(80, 152, 14) },
        {
          d: CROWN_LION,
          role: 'accent',
          transform: 'translate(80 152) scale(0.9) translate(-56 -130)',
        },
        shadow(80, 178, 36),
      ],
    },
    // The ribbon untied and lying flat, the chain broken beside it and the
    // pendant face down: she
    // dies on the ship home from Dorne, in "Mother's Mercy" (episode 50).
    // The show's alone (the books leave her alive); chapter 344 orders it.
    {
      episode: 50,
      chapter: 344,
      source: 'episode',
      value: [
        {
          d: 'M13.8 140 Q27.8 122 41.8 136 Q55.8 150 69.8 134 Q82.4 120 96.4 134 Q103.4 142 109 138',
        },
        {
          d: 'M16.6 147 Q29.2 130 41.8 143 Q55.8 157 71.2 141 Q83.8 127 96.4 141 Q102 147 107.6 145',
        },
        { d: 'M13.8 140 L16.6 147 M109 138 L107.6 145', role: 'soft' },
        {
          d: 'M15.2 143.5 Q28.5 126 41.8 139.5 Q55.8 153.5 70.5 137.5 Q83.1 123.5 96.4 137.5',
          role: 'accent',
        },
        {
          d: 'M110 150 Q114 140 121 146 M139 147 Q146 139 152 146',
          role: 'soft',
        },
        { d: ellipse(130, 149, 10, 4), role: 'soft' },
        { d: 'M46 133 l5 -3 M82 128 l5 -3', role: 'ambient' },
        FLOOR,
      ],
    },
  ],
  'tommen-baratheon': [
    // The plate upside down, the cake rolled off on its side and the apple
    // away, the glaze gone out and the cake taking the accent: he falls from
    // a window of the Red Keep in "The Winds of Winter" (episode 60). The
    // show's alone (the books leave him alive); chapter 344 orders it.
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M62 152 Q66 138 92 136 Q118 138 122 152 Z' },
        { d: ellipse(92, 140, 13, 2.5), role: 'soft' },
        ...moved(
          [
            { ...APPLECAKE_TOP, role: 'accent' },
            ...softened(APPLECAKE.slice(3, 5)),
          ],
          'translate(-24 22) rotate(-30 64 128)',
        ),
        ...moved(APPLECAKE.slice(5, 7), 'translate(22 30)'),
        { d: 'M108 146 l5 -3 M114 149 l5 -3', role: 'ambient' },
        FLOOR,
      ],
    },
  ],
  'renly-baratheon': [
    // The crown of golden antlers set on the rail above the cloak: Renly is
    // a crowned king when Catelyn finds his camp, in "What Is Dead May Never
    // Die" (episode 13) and in Catelyn II of A Clash of Kings (chapter 96),
    // where the book's crown is a ring of gold roses with a jade stag's
    // head and golden antlers at its front (a crown is a costume, owner,
    // 2026-11-15).
    {
      episode: 13,
      chapter: 96,
      value: [
        ...FOLDED_CLOAK,
        ...moved(ANTLER_CROWN, 'translate(79 24) scale(0.8)'),
      ],
    },
    // The cloak in a heap on the floor and the clasp come away, lying far
    // from it: he dies in his tent, in "The Ghost of Harrenhal" (episode 15)
    // and in Catelyn IV of A Clash of Kings (chapter 107).
    {
      episode: 15,
      chapter: 107,
      value: [
        {
          d: 'M18 150 Q24 128 46 132 Q60 116 82 124 Q102 114 116 132 Q128 136 128 150 Q72 160 18 150',
        },
        {
          d: 'M36 148 Q44 138 56 140 M64 152 Q72 134 88 132 M96 152 Q102 140 114 140',
          role: 'soft',
        },
        { d: 'M46 132 Q56 136 60 126 M82 124 Q90 130 100 120', role: 'soft' },
        { d: 'M112 142 l6 -3 M116 148 l6 -3', role: 'ambient' },
        {
          d: `${ellipse(142, 151, 8, 3.5)} ${ellipse(142, 151, 3.5, 1.5)}`,
          role: 'accent',
        },
        FLOOR,
      ],
    },
  ],
  'lysa-arryn': [
    // The perch empty and the falcon falling past it, head down and wings
    // open: Petyr pushes her through the Moon Door, in "Mockingbird"
    // (episode 37) and in Sansa VII of A Storm of Swords (chapter 224).
    {
      episode: 37,
      chapter: 224,
      value: [
        {
          d: 'M56 144 Q48 136 50 122 Q50 104 56 88 Q62 104 62 122 Q64 136 56 144 L54 150',
        },
        {
          d: 'M52 114 Q36 104 16 76 L26 80 L22 68 L32 74 L32 60 Q46 86 54 100',
        },
        {
          d: 'M60 114 Q76 104 96 76 L86 80 L90 68 L80 74 L80 60 Q66 86 58 100',
        },
        { d: 'M38 92 Q30 82 26 74', role: 'accent' },
        { d: 'M53 90 L48 72 H64 L59 90', role: 'soft' },
        { d: 'M66 96 l5 -3 M68 104 l5 -3', role: 'ambient' },
        ...moved(
          [...FALCON.slice(5, 6), ...FALCON.slice(7)],
          'translate(40 0)',
        ),
      ],
    },
  ],
  'bronn': [
    // The Stokeworth banner, a lamb holding a goblet, on a pole beside the
    // sword, the accent moved to the lamb: he is wed to Lollys Stokeworth,
    // their son born and named, by Jaime II of A Feast for Crows (chapter
    // 242). The match is arranged earlier (Tyrion IX of A Storm of Swords,
    // chapter 210, still to check), so the pin is late, never early. The
    // book's alone (the show breaks the match); episode 41 orders it.
    {
      episode: 41,
      chapter: 242,
      source: 'chapter',
      value: [...softened(PLANTED_SWORD), ...STOKEWORTH_BANNER],
    },
    // A Tyrell rose for a pommel, the accent moved to it: he is made Lord of
    // Highgarden in "The Iron Throne" (episode 73). The show's alone;
    // chapter 344 orders it.
    {
      episode: 73,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved([...POMMEL_ROSE, ...softened(SWORD_BELOW_POMMEL)], PLANTED),
        ...SWORD_GROUND,
      ],
    },
  ],
  'shae': [
    // The flap untied and fallen shut, the cord on the ground and the lamp
    // down beside it: Tyrion strangles her in his father's bed, in "The
    // Children" (episode 40) and in Tyrion XI of A Storm of Swords (chapter
    // 221).
    {
      episode: 40,
      chapter: 221,
      value: [
        ...TENT.slice(0, 2),
        { d: 'M80 36 Q82 98 74 150' },
        ...TENT.slice(4, 5),
        { d: 'M64 140 l8 -4 M62 148 l10 -5', role: 'ambient' },
        {
          d: 'M94 150 L98 136 L114 140 L112 152 Z M102 140 L106 150',
          role: 'soft',
        },
        { d: 'M118 150 Q124 144 130 150 Q136 156 142 150', role: 'accent' },
        ...TENT.slice(7),
      ],
    },
  ],
  'walder-frey': [
    // Two banners behind the chair, the Frey towers and the Lannister lion,
    // the accent moved to the lion: the Red Wedding shows whom he serves,
    // in "The Rains of Castamere" (episode 29) and in Catelyn VII of A
    // Storm of Swords (chapter 195).
    {
      episode: 29,
      chapter: 195,
      value: [
        ...moved(softened(WALKING_STICK), UNDER_BANNERS),
        { d: 'M100 14 H154' },
        {
          d: 'M104 14 V54 L114 47 L124 54 V14 M130 14 V54 L140 47 L150 54 V14',
        },
        {
          d: 'M107 44 V30 L109 26 L111 30 V44 M117 44 V30 L119 26 L121 30 V44 M111 38 H117',
          role: 'soft',
        },
        {
          d: CROWN_LION,
          role: 'accent',
          transform: 'translate(140 32) scale(0.75) translate(-56 -130)',
        },
      ],
    },
    // The chair empty and the stick fallen on the floor: Arya kills him at
    // the Twins in "The Winds of Winter" (episode 60). The show's alone (the
    // books leave him alive); chapter 344 orders it.
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: [
        ...WALKING_STICK.slice(0, 6),
        ...moved(WALKING_STICK.slice(6, 8), STICK_FALLEN),
        ...WALKING_STICK.slice(8, 9),
        FLOOR,
      ],
    },
  ],
  'robert-baratheon': [
    // The horn on its side, the stand gone and the wine run out: the
    // episode and the chapter that tell his death, "You Win or You Die"
    // (episode 7) and Eddard XIV (chapter 50). Both media blame the wine.
    {
      episode: 7,
      chapter: 50,
      value: [
        ...moved(HORN, 'translate(4 42) rotate(38 80 90)'),
        { d: 'M26 146 Q44 138 60 146 Q50 154 30 152 Z', role: 'ambient' },
        { d: 'M18 156 H142', role: 'ambient', dashed: true },
      ],
    },
  ],
  'barristan-selmy': [
    // The rack gone and the sword on the floor where he threw it, dismissed
    // from the Kingsguard: "The Pointy End" (episode 8), Sansa V (chapter 58).
    {
      episode: 8,
      chapter: 58,
      value: [
        ...moved(SCABBARDED_SWORD, 'translate(0 58) rotate(-74 80 85)'),
        { d: 'M18 156 H142', role: 'ambient', dashed: true },
      ],
    },
    // The books alone: a plain wooden staff against a wall and no sword,
    // the old squire Arstan Whitebeard he has been at Daenerys's side,
    // until he names himself in Daenerys V (chapter 201). The show cuts the
    // disguise; episode 21 only orders the stage. The accent is the staff.
    {
      episode: 21,
      chapter: 201,
      source: 'chapter',
      value: [
        { d: 'M112 14 H150 V152 H112 Z' },
        {
          d: 'M112 42 H150 M112 70 H150 M112 98 H150 M112 126 H150 M130 14 V42 M124 42 V70 M138 70 V98 M126 98 V126 M136 126 V152',
          role: 'soft',
        },
        { d: 'M142 52 l6 -3 M142 84 l6 -3 M142 112 l6 -3', role: 'ambient' },
        { d: 'M52 150 L102 30 Q107 22 112 28 L63 152 Z', role: 'accent' },
        { d: 'M70 126 L98 58', role: 'soft' },
        { d: 'M14 154 H112', role: 'ambient', dashed: true },
        shadow(58, 158, 18),
      ],
    },
    // The show alone: the sword out of its scabbard and broken in two on
    // the floor, the white grip whole. He falls to the Sons of the Harpy in
    // "Sons of the Harpy" (episode 44); the books keep him alive, so their
    // last chapter only orders the stage.
    {
      episode: 44,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(
          [
            ...WHITE_HILT,
            { d: 'M74 60 V98 L78 92 L81 102 L86 94 V60' },
            { d: 'M80 62 V94', role: 'soft' },
          ],
          'translate(-20 80) rotate(-80 80 60)',
        ),
        { d: 'M110 150 L144 144 L152 148 L144 152 L112 158 L114 153 Z' },
        { d: 'M118 152 L144 148', role: 'soft' },
        { d: 'M14 160 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'syrio-forel': [
    // The same block and hilt, the blade snapped and its point on the floor:
    // he stands against Meryn Trant with a wooden sword, and neither medium
    // shows what comes after. "The Pointy End" (episode 8), Arya IV (chapter 51).
    {
      episode: 8,
      chapter: 51,
      value: [
        ...PRACTICE_HILT,
        { d: 'M74 100 V68 L79 74 L82 62 L86 70 V100' },
        { d: 'M80 96 V78', role: 'soft' },
        { d: 'M116 150 L136 124 L142 130 L124 152 Z' },
        { d: 'M124 144 L138 128', role: 'soft' },
        shadow(88, 153, 48),
      ],
    },
  ],
  'ros': [
    // One of Varys's little birds perched on the canopy: he takes her into
    // his service against Littlefinger in "Valar Morghulis" (episode 20).
    // The record is the show's alone; chapter 143 only orders it.
    {
      episode: 20,
      chapter: 143,
      value: [
        ...CURTAINED_BED,
        ...moved(LITTLE_BIRD, 'translate(39.5 -2.6) scale(0.45)'),
      ],
    },
    // The curtains torn down and fallen in a heap before the empty bed,
    // the bird gone: Littlefinger gives her to Joffrey, who kills her, in
    // "The Climb" (episode 26). Chapter 175 only orders it.
    {
      episode: 26,
      chapter: 175,
      value: [
        ...BED_FRAME,
        {
          d: 'M30 46 L32 56 L28 60 L33 66 M62 46 L58 54 L63 58 M102 46 L104 54 L100 58',
          role: 'soft',
        },
        {
          d: 'M26 158 Q32 144 46 148 Q56 140 66 150 Q80 142 96 156 Q60 164 26 158',
          role: 'accent',
        },
        { d: 'M44 150 Q48 154 46 158 M64 152 Q68 156 70 160', role: 'soft' },
      ],
    },
  ],
  'petyr-baelish': [
    // The glove and the dagger, and on the glove's cuff a round badge with
    // the crescent moon of House Arryn: Lord Protector of the Vale once
    // Lysa is dead, in "The Mountain and the Viper" (episode 38), when the
    // lords of the Vale take his word, and in Sansa VII (chapter 224).
    {
      episode: 38,
      chapter: 224,
      value: [
        ...GLOVE_DAGGER,
        ...moved(
          [
            { d: circle(82, 140, 8) },
            { d: 'M84 134 A6 6 0 1 0 84 146 A4.5 4.5 0 0 1 84 134' },
          ],
          'translate(-10.5 21) scale(0.86)',
        ),
      ],
    },
    // The show alone: the glove flat on the ground, its accent off, and the
    // dagger lying in front of it. Arya kills him with it at his trial in
    // "The Dragon and the Wolf" (episode 67); the books keep him alive, so
    // their last chapter only orders the stage. A drawing needs one accent,
    // so it moves to the dagger's grip.
    {
      episode: 67,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(softened(GLOVE), 'translate(-2 75) scale(1 0.5)'),
        ...moved(
          [...DAGGER, { d: DAGGER_WRAP, role: 'accent' }],
          'translate(0 10) rotate(-90 130 150)',
        ),
        shadow(80, 166, 56),
      ],
    },
  ],
  'varys': [
    // The show alone: a three-headed dragon carved in a disc on the post,
    // the sigil of House Targaryen, whom he tells Tyrion he serves in "The
    // Wars to Come" (episode 41). Chapter 274, where the book brings Tyrion
    // to Pentos, only orders it.
    {
      episode: 41,
      chapter: 274,
      source: 'episode',
      value: [
        ...LITTLE_BIRD,
        ...PERCH_BAR,
        { d: 'M78 112 V130 M82 112 V130 M78 148 V152 M82 148 V152' },
        { d: circle(80, 139, 9) },
        {
          d: 'M74 145 Q71 138 75 133 l-3 -1 M80 146 V132 l-3 -1 M86 145 Q89 138 85 133 l3 -1',
        },
        { d: ellipse(80, 154, 24, 6) },
        shadow(80, 163, 26),
      ],
    },
    // The show alone: the perch empty and the bird on its back on the
    // ground. Daenerys has him burned in "The Bells" (episode 72); the books
    // keep him alive, so their last chapter only orders the stage.
    {
      episode: 72,
      chapter: 344,
      source: 'episode',
      value: [
        ...PERCH_BAR,
        { d: 'M78 112 V146 M82 112 V146' },
        { d: ellipse(80, 149, 24, 6) },
        ...moved(
          LITTLE_BIRD,
          'translate(128 142) scale(0.55) rotate(180) translate(-90 -79)',
        ),
        { d: 'M14 158 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'pycelle': [
    // The chain on its stand, smaller, under a banner of the Lannister
    // lion, the accent moved to the lion: he confesses that all he did, he
    // did for House Lannister, when Tyrion has him taken, in "What Is Dead
    // May Never Die" (episode 13) and in Tyrion VI (chapter 99).
    {
      episode: 13,
      chapter: 99,
      value: [
        ...moved(softened(GRAND_CHAIN), 'translate(0 30) scale(0.8)'),
        { d: 'M104 22 H152' },
        { d: 'M110 22 V74 L128 66 L146 74 V22' },
        { d: 'M140 30 V66', role: 'soft' },
        {
          d: CROWN_LION,
          role: 'accent',
          transform: 'translate(128 44) scale(0.8) translate(-56 -130)',
        },
      ],
    },
    // The show alone: the stand empty and the chain down on the floor,
    // broken, one link apart. Qyburn's little birds kill him in "The Winds
    // of Winter" (episode 60); the books keep him alive, so their last
    // chapter only orders the stage. The accent is the loose link.
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M42 42 Q80 30 118 42 M80 36 V24' },
        { d: 'M80 36 V144' },
        { d: ellipse(80, 147, 22, 5) },
        {
          d: `${ellipse(22, 165.9, 5, 3.5)} ${ellipse(40, 162.4, 5, 3.5)} ${ellipse(58, 160, 5, 3.5)} ${ellipse(76, 163.2, 5, 3.5)} ${ellipse(113, 163, 5, 3.5)} ${ellipse(131, 160, 5, 3.5)}`,
        },
        {
          d: `${ellipse(31, 164.6, 4, 1.5)} ${ellipse(49, 160.6, 4, 1.5)} ${ellipse(67, 161.1, 4, 1.5)} ${ellipse(85, 165.2, 4, 1.5)} ${ellipse(122, 161, 4, 1.5)} ${ellipse(140, 160.7, 4, 1.5)}`,
          role: 'soft',
        },
        { d: ellipse(99, 172, 7, 4), role: 'accent' },
        { d: 'M14 176 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'sandor-clegane': [
    // The helm fallen on its side against a bare tree: Arya leaves him
    // dying after his fight with Brienne in "The Children" (episode 40) and
    // in Arya XIII (chapter 218). Neither medium shows him die there.
    { episode: 40, chapter: 218, value: [...FALLEN_HOUND_HELM, ...BARE_TREE] },
    // The show alone: an axe sunk in a stump where the helm stood. He is
    // back, alive, among the smallfolk in "The Broken Man" (episode 57); the
    // books leave only a rumour, so their last chapter orders the stage.
    // The accent is the axe's blade.
    {
      episode: 57,
      chapter: 344,
      source: 'episode',
      value: [
        { d: ellipse(80, 112, 32, 8) },
        { d: 'M48 112 V144 Q80 156 112 144 V112' },
        {
          d: `${ellipse(80, 112, 18, 4.5)} ${ellipse(80, 112, 8, 2)}`,
          role: 'soft',
        },
        { d: 'M56 122 V146 M100 124 V148', role: 'soft' },
        { d: 'M102 124 l6 -3 M102 136 l6 -3', role: 'ambient' },
        { d: 'M84 100 L120 40 M89 104 L125 44 M120 40 L125 44' },
        { d: 'M88 104 L72 84 Q54 90 50 112 H84', role: 'accent' },
        { d: 'M70 92 Q60 98 58 108', role: 'soft' },
        shadow(80, 156, 40),
      ],
    },
    // The show alone: the helm fallen on its side, and his sword down in
    // front of it. He goes down with Gregor in "The Bells" (episode 72); the
    // books never kill him, so their last chapter only orders the stage.
    {
      episode: 72,
      chapter: 344,
      source: 'episode',
      value: [
        ...FALLEN_HOUND_HELM,
        ...moved(softened(LONGSWORD), 'translate(0 80) rotate(-86 80 85)'),
        { d: 'M14 172 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'janos-slynt': [
    // The same spear standing bare, the gold cloak dropped in a heap at its
    // foot: Tyrion takes the City Watch from him and sends him to the
    // Night's Watch, in "The Night Lands" (episode 12) and in Tyrion II
    // (chapter 82). The heap keeps the accent.
    {
      episode: 12,
      chapter: 82,
      value: [
        ...SPEARHEAD,
        { d: SPEAR_SOCKET },
        { d: 'M78 64 V150 M82 64 V150' },
        {
          d: 'M86 150 Q88 136 100 138 Q106 126 118 130 Q130 128 136 140 Q148 142 150 152 Q144 156 138 152 Q132 158 124 153 Q116 158 108 153 Q100 158 94 153 Q88 156 86 150 Z',
          role: 'accent',
        },
        {
          d: 'M100 138 Q106 144 104 152 M118 130 Q118 142 126 150 M136 140 Q136 146 142 150',
          role: 'soft',
        },
        { d: 'M128 138 l5 -3 M140 144 l4 -2.4', role: 'ambient' },
        shadow(98, 158, 54),
      ],
    },
    // The same spear with a black cloak knotted where the gold one was: a
    // brother of the Night's Watch at Castle Black, in "Two Swords"
    // (episode 31) and in Jon IX (chapter 213). Black, so the tails are
    // hatched; the accent stays on the knot.
    {
      episode: 31,
      chapter: 213,
      value: [
        ...SPEARHEAD,
        { d: SPEAR_SOCKET },
        ...KNOTTED_SHAFT,
        { d: CLOAK_TAILS[0] },
        { d: CLOAK_TAILS[1] },
        {
          d: 'M50 140 l10 -5 M54 130 l8 -4 M58 120 l8 -4 M96 124 l6 -3 M100 130 l6 -3',
          role: 'ambient',
        },
        shadow(80, 154, 40),
      ],
    },
    // The spear down on the ground, no cloak on it: Jon has him beheaded in
    // "High Sparrow" (episode 43) and in Jon II (chapter 279). The accent
    // moves to the iron socket.
    {
      episode: 43,
      chapter: 279,
      value: [
        ...moved(
          [
            ...SPEARHEAD,
            { d: SPEAR_SOCKET, role: 'accent' },
            { d: 'M78 64 V150 M82 64 V150' },
          ],
          'translate(4 58) rotate(-100 80 85)',
        ),
        { d: 'M14 154 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'gregor-clegane': [
    // The books alone: the lance down on the ground in two pieces. The
    // manticore venom on Oberyn's spear kills him slowly, and Qyburn
    // prepares his skull for Dorne in Cersei IV (chapter 243, unverified).
    // The show keeps him alive after the duel; episode 38 only orders the
    // stage.
    { episode: 38, chapter: 243, source: 'chapter', value: [...FALLEN_LANCE] },
    // The show alone: the lance gone and a white Kingsguard great helm in
    // its place, the new knight Qyburn brings to Cersei in "Mother's Mercy"
    // (episode 50). The books leave it a guess; their last chapter orders it.
    {
      episode: 50,
      chapter: 344,
      source: 'episode',
      value: [
        ...WHITE_GREAT_HELM,
        { d: 'M52 134 L46 150 H114 L108 134' },
        shadow(80, 156, 40),
      ],
    },
    // The show alone: the helm down on its side beside the broken lance,
    // the lance's splinters soft so the eye slit keeps the one accent. He
    // falls with Sandor in "The Bells" (episode 72); the books' last chapter
    // orders it.
    {
      episode: 72,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(softened(FALLEN_LANCE), 'translate(3.5 40) scale(0.75)'),
        ...moved(
          WHITE_GREAT_HELM,
          'translate(132 146) scale(0.5) rotate(-90) translate(-80 -94)',
        ),
        { d: 'M112 160 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'loras-tyrell': [
    // The show alone: the rose wilted, its stem bent over and the bloom
    // hanging closed, one petal on the floor. He dies in the wildfire under
    // the Great Sept in "The Winds of Winter" (episode 60); the books keep
    // him alive, so their last chapter only orders the stage.
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M78 150 Q84 112 92 84 Q98 62 86 54' },
        { d: 'M86 54 Q76 52 72 62 Q68 76 76 88 Q86 86 88 72 Q90 62 86 54' },
        { d: 'M76 88 Q72 94 66 94 M76 88 Q80 96 86 96', role: 'soft' },
        { d: 'M78 64 Q82 72 80 82', role: 'soft' },
        { d: 'M86 108 Q68 110 58 124 Q74 126 85 116', role: 'accent' },
        { d: 'M89 94 Q106 98 112 114 Q98 112 90 102', role: 'soft' },
        { d: 'M84 70 l4 -2 M83 78 l4 -2', role: 'ambient' },
        { d: 'M100 150 Q106 144 114 149 Q106 154 100 150', role: 'soft' },
        shadow(84, 154, 30),
      ],
    },
  ],
}
