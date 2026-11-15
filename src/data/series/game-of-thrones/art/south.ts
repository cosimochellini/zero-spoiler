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
 * hatched; the accent is the lions.
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
  { d: CROWN_LION, role: 'accent', transform: 'translate(160 0) scale(-1 1)' },
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
 */
const STAG: Stroke[] = [
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
 * Petyr Baelish: a leather glove, palm down, for the name he goes by in
 * both media. The accent is the little finger.
 */
const GLOVE: Stroke[] = [
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
  shadow(82, 155, 42),
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
 * A plain sword in its scabbard, the grip wrapped in white leather: the
 * accent. Barristan Selmy's first drawing and his stage share it.
 */
const SCABBARDED_SWORD: Stroke[] = [
  { d: circle(80, 26, 6) },
  { d: 'M76 32 H84 V54 H76 Z' },
  { d: 'M76 38 L84 42 M76 45 L84 49', role: 'accent' },
  { d: 'M60 54 H100 V60 H60 Z' },
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
 * Ros: a bed with its curtains tied back and its sheet rumpled, in the
 * brothel where the show keeps her, named in episode 4. The record is the
 * show's alone. The accent is the curtain.
 */
const CURTAINED_BED: Stroke[] = [
  { d: 'M24 46 H108 L134 30 H50 Z' },
  { d: 'M24 46 V150 M108 46 V150 M134 30 V130' },
  { d: 'M24 112 H108 L134 94 H50 L24 112' },
  { d: 'M24 128 H108 L134 110', role: 'soft' },
  { d: 'M50 94 V30', role: 'soft' },
  { d: 'M30 46 Q36 76 28 96 M62 46 Q58 76 30 96', role: 'accent' },
  { d: 'M102 46 Q96 76 104 96 M74 46 Q78 74 102 96', role: 'soft' },
  {
    d: 'M42 106 Q56 96 72 106 Q84 112 92 100 M58 110 Q70 100 84 98',
    role: 'soft',
  },
  { d: 'M112 106 l8 -5 M114 118 l8 -5', role: 'ambient' },
  shadow(78, 154, 56),
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

/**
 * Varys: a songbird on a perch, one of the little birds he speaks of from
 * episode 3 and Catelyn IV (chapter 19). No eye. The accent is the ring on
 * the post.
 */
const SONGBIRD: Stroke[] = [
  {
    d: 'M56 66 Q60 50 74 50 Q84 52 88 62 Q100 78 112 100 Q92 98 78 96 Q60 90 56 66',
  },
  { d: 'M56 62 L46 64 L57 69' },
  { d: 'M112 100 L134 118 L122 100', role: 'soft' },
  { d: 'M74 66 Q88 72 102 92 Q84 90 74 82 Q70 74 74 66', role: 'soft' },
  { d: 'M74 96 V108 M84 97 V108', role: 'soft' },
  { d: 'M36 110 H114 M36 106 V114 M114 106 V114' },
  { d: 'M78 112 V146 M82 112 V146' },
  { d: ellipse(80, 126, 9, 3.5), role: 'accent' },
  { d: ellipse(80, 149, 24, 6) },
  { d: 'M88 76 l6 -3 M94 86 l5 -3', role: 'ambient' },
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
 * Sandor Clegane: his dog's-head helm side on, with no eye or teeth, the
 * one he wears at the tourney in episode 4 and rides in with in Eddard I
 * (chapter 5). The steel's far side is hatched; the accent is the snout.
 */
const DOG_HELM: Stroke[] = [
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
  shadow(90, 156, 40),
]

/**
 * Janos Slynt: a spear of the City Watch with a gold cloak knotted round
 * the shaft, for the Commander of the Watch in episode 4 and in Eddard VI
 * (chapter 28). The accent is the cloak.
 */
const WATCH_SPEAR: Stroke[] = [
  { d: 'M80 20 L90 46 L80 56 L70 46 Z' },
  { d: 'M80 26 V52', role: 'soft' },
  { d: 'M76 56 H84 V64 H76 Z' },
  { d: 'M78 64 V86 M82 64 V86 M78 104 V150 M82 104 V150' },
  {
    d: 'M68 90 Q80 84 92 90 Q96 96 92 102 Q80 108 68 102 Q64 96 68 90',
    role: 'accent',
  },
  { d: 'M68 102 Q50 120 42 146 Q56 154 70 146 Q72 124 76 106', role: 'accent' },
  {
    d: 'M92 102 Q106 116 112 132 Q102 138 92 132 Q90 118 86 106',
    role: 'accent',
  },
  { d: 'M60 118 Q56 130 54 146 M66 116 Q64 130 62 148', role: 'soft' },
  { d: 'M84 32 l3 -2 M84 40 l4 -2', role: 'ambient' },
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
  'petyr-baelish': GLOVE,
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
  { d: 'M80 20 q3 -1 2 3 q-3 3 -5 -1 q0 -5 5 -5', role: 'accent' },
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
    // (episode 37) and in Sansa I of A Feast for Crows (chapter 236).
    {
      episode: 37,
      chapter: 236,
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
    // sword, the accent moved to the lamb: he has married Lollys Stokeworth
    // by Jaime II of A Feast for Crows (chapter 242). The book's alone (the
    // show breaks the match); episode 41 orders it.
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
}
