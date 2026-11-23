import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import {
  circle,
  dots,
  ellipse,
  polygon,
  SEA,
  shadow,
} from '~/lib/svg/primitives'

/**
 * The three-headed dragon of House Targaryen, with no eyes: three necks
 * from one body, the wings spread and the tail curled. The accent is the
 * necks and tail. Viserys's banner carries it, and so does Aemon's stage
 * in `wall.ts`.
 */
export const DRAGON_SIGIL: Stroke[] = [
  {
    d: 'M80 98 Q68 88 66 72 L59 71 L65 66 M80 98 V66 L75 61 L82 59 M80 98 Q92 88 94 72 L101 71 L95 66 M80 98 Q74 108 80 116 Q84 122 76 126',
    role: 'accent',
  },
  {
    d: 'M78 94 Q64 80 54 84 Q60 90 58 98 Q66 96 76 102 M82 94 Q96 80 106 84 Q100 90 102 98 Q94 96 84 102',
    role: 'soft',
  },
]

/**
 * Viserys Targaryen: the dragon banner of the house he claims the throne
 * for, hung from its pole, in Pentos from episode 1 and Daenerys I
 * (chapter 4). The cloth's far fold is hatched. His first drawing, stood on
 * its shadow, and his death share it.
 */
const BANNER: Stroke[] = [
  { d: `${circle(36, 20, 4)} M36 24 V150` },
  { d: 'M36 32 H124' },
  { d: 'M48 32 V124 L80 110 L112 124 V32' },
  { d: 'M60 36 Q58 76 62 116 M100 36 Q102 76 98 116', role: 'soft' },
  ...DRAGON_SIGIL,
  {
    d: 'M104 44 l5 -3 M104 58 l5 -3 M104 72 l5 -3 M104 86 l5 -3 M104 100 l5 -3',
    role: 'ambient',
  },
]

/**
 * Drogo: the long braid of a khal never defeated, tied off with a bell at
 * its end. Viserys points it out in episode 1, and the book hangs bells in
 * it at the feast in Daenerys I (chapter 4). The accent is the bell. His
 * first drawing and his death share it.
 */
const BRAID: Stroke[] = [
  {
    d: 'M85.6 28.2 L83.2 34.9 L81.4 41.6 L80 48 L79.3 54.3 L79 60.5 L79.3 66.5 L80 72.4 L81.3 78.2 L83.1 83.9 L85.4 89.5 L88.1 95.5 L90.3 101.3 L92 106.8 L93.3 112 L94 116.9 L94.2 121.6 L93.8 126.1 L92.7 130.4 L91 134.3 L88.6 137.8',
  },
  {
    d: 'M74.4 23.8 L71.8 31.3 L69.7 38.8 L68.2 46.1 L67.3 53.3 L67 60.5 L67.3 67.6 L68.2 74.5 L69.7 81.3 L71.8 88 L74.6 94.5 L77 100.1 L79 105.3 L80.5 110 L81.5 114.3 L82 118.1 L82.2 121.4 L81.9 124.2 L81.3 126.6 L80.5 128.5 L79.4 130.2',
  },
  {
    d: 'M84.3 31.6 L76.9 34.9 L73 27.6 M80 48 L73.4 52.2 L68.2 46.1 M79.1 63.5 L73.4 68.7 L67.1 64 M81.3 78.2 L76.9 84.4 L69.7 81.3 M86.8 92.5 L83.1 99.2 L75.8 97.4 M92 106.8 L87.1 112 L80.5 110 M94.1 119.3 L88.1 122.5 L82.1 119.8',
    role: 'soft',
  },
  { d: 'M79.4 130.2 L88.6 137.8 M80 132 L86 140', role: 'soft' },
  {
    d: 'M82 140 Q78 148 82 152 H92 Q96 148 92 140 Z M87 152 V155',
    role: 'accent',
  },
  { d: 'M73 24 Q80 18 87 28', role: 'soft' },
  { d: 'M90 100 l5 -3 M93 112 l5 -3', role: 'ambient' },
]

/**
 * Jorah Mormont's longsword on its own: the pommel, the grip with its wrap
 * in the accent, the crossguard and the blade, its far face hatched. His
 * first drawing, his stage and his death share it.
 */
const LONGSWORD: Stroke[] = [
  { d: circle(80, 34, 5) },
  { d: 'M76 39 H84 V60 H76 Z' },
  { d: 'M76 45 L84 49 M76 52 L84 56', role: 'accent' },
  { d: 'M60 60 H100 V66 H60 Z' },
  { d: 'M72 66 V140 L76 150 M88 66 V140 L84 150' },
  { d: 'M80 68 V146', role: 'soft' },
  {
    d: 'M83 76 l4 -3 M83 90 l4 -3 M83 104 l4 -3 M83 118 l4 -3 M83 132 l4 -3',
    role: 'ambient',
  },
]

/**
 * Jorah Mormont: a longsword stood point down in the grass of the Dothraki
 * sea, the Westerosi steel he weighs against the arakh in episode 3, a
 * knight's sword in both media from episode 1 and Daenerys I (chapter 4).
 * The blade's far face is hatched; the accent is the grip. His first
 * drawing and his stage share it.
 */
const PLANTED_SWORD: Stroke[] = [
  ...LONGSWORD,
  {
    d: 'M40 150 q3 -10 6 0 q3 -12 6 0 M108 150 q3 -10 6 0 q3 -12 6 0 M30 150 H130',
    role: 'ambient',
  },
  shadow(80, 154, 30),
]

/**
 * Illyrio Mopatis: the chest he gives at the wedding, its lid thrown back
 * and three stone dragon eggs in it, in episode 1 and in Daenerys II
 * (chapter 12). The eggs' scales are soft and the chest's far side is
 * hatched; the accent is the velvet they lie in.
 */
const EGG_CHEST: Stroke[] = [
  { d: 'M28 150 V110 H108 V150 Z M108 150 L130 136 V96 L108 110' },
  { d: 'M28 110 L50 96 H130' },
  { d: 'M50 96 L44 54 H124 L130 96 M44 54 L46 62 H126 L124 54', role: 'soft' },
  {
    d: 'M46 108 Q44 86 54 84 Q64 86 62 106 M66 104 Q64 80 76 78 Q88 80 86 102 M90 100 Q88 82 98 80 Q108 82 106 98',
  },
  {
    d: 'M50 94 q4 -2 8 0 M70 90 q5 -3 10 0 M71 96 q4 -2 8 0 M94 90 q4 -2 8 0',
    role: 'soft',
  },
  { d: 'M30 112 q6 -5 12 0 t12 0 t12 0 t12 0 t12 0 t12 0', role: 'accent' },
  { d: 'M48 110 V150 M88 110 V150', role: 'soft' },
  { d: 'M114 136 l10 -7 M114 124 l10 -7 M114 112 l10 -7', role: 'ambient' },
  shadow(80, 155, 56),
]

/** Irri's brazier: the rim of its bowl in 3/4, the bowl and its legs. */
const BRAZIER_RIM: Stroke = { d: ellipse(80, 100, 40, 10) }
const BRAZIER_BODY: Stroke = { d: 'M40 100 Q44 126 80 130 Q116 126 120 100' }
const BRAZIER_LEGS: Stroke = {
  d: 'M56 126 L44 150 M104 126 L116 150 M80 130 V150',
}
const BRAZIER_HATCH: Stroke = {
  d: 'M108 110 l6 -3 M104 120 l6 -3',
  role: 'ambient',
}

/**
 * Irri: a bronze brazier on three legs with a dragon egg in its coals, the
 * egg she burns her hands lifting out in episode 6. The show is the
 * reference where the media differ; the book has her teach Daenerys to
 * ride from Daenerys II (chapter 12). The bowl's far side is hatched; the
 * accent is the flames.
 */
const BRAZIER: Stroke[] = [
  BRAZIER_RIM,
  BRAZIER_BODY,
  BRAZIER_LEGS,
  {
    d: 'M48 102 q4 -4 8 0 t8 0 t8 0 M96 102 q4 -4 8 0 t8 0 t8 0',
    role: 'soft',
  },
  { d: 'M70 98 Q68 72 80 70 Q92 72 90 98' },
  { d: 'M74 84 q3 -2 6 0 M80 92 q3 -2 6 0', role: 'soft' },
  {
    d: 'M54 96 q-6 -10 0 -20 q4 8 6 2 q4 8 2 18 M104 96 q-4 -12 2 -22 q4 8 6 4 q2 10 -2 18',
    role: 'accent',
  },
  BRAZIER_HATCH,
  shadow(80, 154, 42),
]

/**
 * Doreah's whole moon, its far side hatched, and the two halves of the
 * cracked one. Her first drawing and her death share them.
 */
const WHOLE_MOON: Stroke[] = [
  { d: circle(54, 62, 26) },
  { d: 'M54 36 Q42 62 54 88', role: 'soft' },
  { d: 'M66 46 l6 -3 M72 56 l6 -3 M74 68 l6 -3 M70 80 l5 -3', role: 'ambient' },
]
const MOON_LEFT: Stroke = {
  d: 'M112 88 A24 24 0 0 0 96 132 L104 118 L98 108 L108 100 Z',
}
const MOON_RIGHT: Stroke = {
  d: 'M118 90 A24 24 0 0 1 106 136 L112 120 L106 110 L116 102 Z',
}

/**
 * Doreah: two moons, one whole and one cracked open by the sun, for the
 * story she tells of where dragons came from, in episode 2 and in
 * Daenerys III (chapter 24). The whole moon's far side is hatched; the
 * accent is the crack.
 */
const MOONS: Stroke[] = [
  ...WHOLE_MOON,
  MOON_LEFT,
  MOON_RIGHT,
  {
    d: 'M108 100 L98 108 L104 118 L96 132 M116 102 L106 110 L112 120 L106 136',
    role: 'accent',
  },
  {
    d: 'M100 80 l-4 -6 M110 76 l0 -8 M120 80 l4 -6 M92 88 l-7 -2',
    role: 'soft',
  },
  { d: 'M18 150 H142', role: 'ambient', dashed: true },
]

/**
 * Rakharo: an arakh, the curved Dothraki blade he argues for against
 * Jorah's longsword in episode 3 and carries in the book from Daenerys III
 * (chapter 24). The back of the blade is hatched; the accent is its edge.
 */
const ARAKH: Stroke[] = [
  { d: 'M56 128 Q58 72 114 36 Q122 32 120 40 Q82 80 70 132' },
  { d: 'M62 128 Q68 80 114 40', role: 'soft' },
  { d: 'M70 132 Q82 80 120 40', role: 'accent' },
  { d: 'M48 126 L78 136' },
  { d: 'M58 132 L48 154 M68 135 L58 157 M48 154 L58 157' },
  { d: 'M55 139 L64 142 M52 146 L61 149', role: 'soft' },
  { d: 'M66 96 l-5 -3 M74 78 l-5 -3 M86 62 l-5 -3', role: 'ambient' },
  shadow(70, 160, 30),
]

/**
 * A clay bowl on a low foot, its far side hatched. Mirri Maz Duur's first
 * drawing and her blood stage share it.
 */
const BOWL: Stroke[] = [
  { d: ellipse(76, 100, 36, 9) },
  { d: 'M40 100 Q44 128 76 132 Q108 128 112 100' },
  { d: 'M62 131 L60 140 H92 L90 131' },
  { d: 'M100 112 l6 -3 M96 122 l6 -3', role: 'ambient' },
]

/**
 * Mirri Maz Duur: the bowl of poultice with herbs in it and beside it, for
 * the healer who offers to treat Drogo's wound in episode 8 and in
 * Daenerys VII (chapter 62). The accent is the herbs.
 */
const HEALER_BOWL: Stroke[] = [
  ...BOWL,
  { d: 'M46 101 q6 -4 12 0 t12 0 t12 0 t12 0 t10 0', role: 'soft' },
  {
    d: 'M100 146 Q122 140 140 130 M112 142 q0 -8 8 -8 q0 6 -8 8 M126 136 q0 -8 8 -8 q0 6 -8 8',
    role: 'accent',
  },
  { d: 'M84 98 Q90 80 98 72 M92 84 q6 -4 10 0', role: 'accent' },
  shadow(76, 146, 40),
]

/** The grip and pommel of a khas warrior's arakh, held point down. */
const KHAS_GRIP = `M76 24 H84 V54 H76 Z ${circle(80, 20, 4)}`

/** The cutting edge of the same arakh. */
const KHAS_EDGE = 'M86 62 Q84 96 104 120 Q114 132 100 146'

/**
 * The narrow arakh the riders of Drogo's khalasar carry, point down: the
 * guard, the blade's back with its spine, and the back hatched. Each
 * drawing adds the grip and the edge, with the accent where it belongs.
 */
const KHAS_BLADE: Stroke[] = [
  { d: 'M64 58 H96 V62 H64 Z' },
  { d: 'M76 62 Q70 100 92 126 Q98 134 100 146' },
  { d: 'M81 64 Q80 100 98 126', role: 'soft' },
  { d: 'M74 80 l-5 -3 M76 96 l-5 -3 M82 112 l-5 -3', role: 'ambient' },
]

/**
 * The arakh with its grip in accent. Qotho's first drawing and his death
 * share it, and so do Quaro's.
 */
const KHAS_ARAKH: Stroke[] = [
  ...KHAS_BLADE,
  { d: KHAS_GRIP, role: 'accent' },
  { d: KHAS_EDGE },
]

/**
 * Qotho: his arakh driven point down into the grass, for the bloodrider
 * who favours it, at Drogo's side from episode 6 and Daenerys II
 * (chapter 12). The accent is the grip.
 */
const PLANTED_ARAKH: Stroke[] = [
  ...KHAS_ARAKH,
  {
    d: 'M30 150 q3 -10 6 0 q3 -12 6 0 M112 150 q3 -10 6 0 q3 -12 6 0 M20 150 H140',
    role: 'ambient',
  },
  shadow(92, 154, 24),
]

/**
 * The arakh chased in gold that Cohollo gives at the wedding. Both his
 * drawings share it; the accent is the gold.
 */
const CHASED_ARAKH: Stroke[] = [
  ...KHAS_BLADE,
  { d: KHAS_GRIP },
  { d: KHAS_EDGE },
  { d: 'M80 70 q-2 6 0 12 t1 12 t3 12 t5 10', role: 'accent' },
]

/**
 * Cohollo: the arakh chased in gold laid flat on a folded cloth, his
 * wedding gift to Daenerys in the book, where he opens in Daenerys IV
 * (chapter 37). The cloth's far side is hatched.
 */
const ARAKH_GIFT: Stroke[] = [
  {
    d: 'M20 128 L42 110 H140 L118 128 Z M20 128 V136 H118 V128 M118 136 L140 118 V110',
  },
  { d: 'M50 114 Q80 118 110 114 M60 122 Q90 126 116 120', role: 'soft' },
  { d: 'M120 134 l14 -11 M124 126 l10 -8', role: 'ambient' },
  ...moved(CHASED_ARAKH, 'translate(-2 28) rotate(-90 80 80)'),
  shadow(80, 142, 56),
]

/** The silver handle of Haggo's whip; both his drawings share it. */
const SILVER_HANDLE: Stroke[] = [
  { d: 'M86 116 L128 88 L132 94 L90 122 Z', role: 'accent' },
  { d: `${circle(132, 89, 4)} M100 108 l4 6 M112 100 l4 6`, role: 'soft' },
]

/**
 * Haggo: the great leather whip with a silver handle he gives at the
 * wedding in the book, coiled on the ground, where he opens in Daenerys
 * VII (chapter 62). The leather is dark, so the coil's near side is
 * hatched; the accent is the silver handle.
 */
const COILED_WHIP: Stroke[] = [
  { d: ellipse(74, 126, 44, 16) },
  { d: ellipse(74, 124, 34, 12) },
  { d: ellipse(74, 122, 24, 8), role: 'soft' },
  { d: 'M50 122 Q60 132 74 130', role: 'soft' },
  { d: 'M40 136 l6 -3 M58 141 l6 -3 M104 138 l6 -3', role: 'ambient' },
  ...SILVER_HANDLE,
  shadow(76, 146, 48),
]

/**
 * Jhiqui: the tent she helps Daenerys into with Irri and Doreah, its flap
 * thrown open, in episode 2; the book gives her to Daenerys in Daenerys II
 * (chapter 12). The far side and the dark inside are hatched; the accent is
 * the flap.
 */
const TENT: Stroke[] = [
  { d: 'M22 150 Q28 92 80 62 Q132 92 138 150' },
  { d: 'M80 62 L72 40 M80 62 L88 40 M80 62 V48' },
  { d: 'M64 150 L80 98 L96 150' },
  { d: 'M80 98 L110 150 L120 132 Z', role: 'accent' },
  { d: 'M48 76 Q52 112 46 150 M112 76 Q108 112 114 150', role: 'soft' },
  { d: 'M30 118 L10 150 M134 118 L150 146', role: 'soft' },
  {
    d: 'M74 128 l6 -4 M70 140 l8 -5 M120 104 l6 -4 M126 118 l6 -4',
    role: 'ambient',
  },
  { d: 'M6 150 H154', role: 'ambient' },
  shadow(80, 154, 60),
]

/**
 * Aggo: a Dothraki recurve bow with an arrow on the string, for the archer
 * of the book from Daenerys VII (chapter 62); the show sends him out to
 * scout in episode 11. The limbs' backs are hatched; the accent is the
 * grip.
 */
const RECURVE_BOW: Stroke[] = [
  { d: 'M80 22 Q70 24 70 34 Q92 60 94 90 Q92 120 70 146 Q70 156 80 158' },
  { d: 'M74 32 Q98 60 100 90 Q98 120 74 148' },
  { d: 'M70 34 L70 146', role: 'soft' },
  {
    d: 'M92 82 H102 V98 H92 Z M92 86 h10 M92 90 h10 M92 94 h10',
    role: 'accent',
  },
  { d: 'M70 90 H142 M134 84 L144 90 L134 96' },
  { d: 'M70 90 l-8 -6 M70 90 l-8 6 M78 90 l-8 -6 M78 90 l-8 6', role: 'soft' },
  {
    d: 'M90 54 l-5 3 M96 70 l-5 3 M96 110 l-5 3 M90 126 l-5 3',
    role: 'ambient',
  },
  shadow(84, 166, 30),
]

/**
 * Jhogo: a long-handled whip, its lash thrown into an open loop, the whip
 * that catches Viserys around the neck in Daenerys III (chapter 24). The
 * show has no Jhogo. The accent is the handle.
 */
const LOOPED_WHIP: Stroke[] = [
  { d: 'M34 148 L60 52 L67 54 L41 150 Z', role: 'accent' },
  { d: 'M40 128 l7 2 M46 106 l7 2 M52 84 l7 2', role: 'soft' },
  {
    d: 'M63 52 Q72 30 98 40 Q126 52 122 82 Q118 112 94 112 Q72 110 76 88 Q82 70 104 76 Q132 90 126 124 Q122 142 136 150',
  },
  { d: 'M136 150 l6 -2 M136 150 l5 3', role: 'soft' },
  { d: 'M20 150 H70 M110 150 H146', role: 'ambient' },
  shadow(42, 154, 20),
]

/** A low boulder on the ground, its far side hatched. */
const BOULDER: Stroke[] = [
  { d: 'M84 150 Q84 132 100 128 Q122 122 142 132 Q152 140 148 150' },
  { d: 'M130 134 l6 -3 M136 142 l6 -3', role: 'ambient' },
  { d: 'M14 150 H146', role: 'ambient' },
]

/**
 * Quaro: a khas arakh leaned on a boulder, point up. The book gives him
 * no object of his own when he rides as Daenerys's guard in Daenerys VII
 * (chapter 62), and the show has no Quaro, so this is the arakh every rider
 * of the khalasar carries, in a pose of its own (a declared B). The accent
 * is the grip.
 */
const LEANING_ARAKH: Stroke[] = [
  ...BOULDER,
  ...moved(KHAS_ARAKH, 'translate(14 34) rotate(-118 80 80)'),
  shadow(90, 154, 50),
]

/**
 * Mago: an arakh laid flat on its side, its edge towards the viewer, for
 * the rider who cuts Drogo with it in episode 8 and complains to him in
 * Daenerys VII (chapter 62). The back is hatched; the accent is the edge.
 */
const FLAT_ARAKH: Stroke[] = [
  ...moved(
    [...KHAS_BLADE, { d: KHAS_GRIP }, { d: KHAS_EDGE, role: 'accent' }],
    'translate(4 46) rotate(90 80 80)',
  ),
  { d: 'M14 150 H146', role: 'ambient', dashed: true },
  shadow(80, 148, 56),
]

/**
 * Eroeh: a lamb with no eye beside a shepherd's crook, for the Lhazareen
 * girl, of the people the Dothraki call the lamb men, who is already dead
 * when the book names her in Daenerys IX (chapter 69). The show has no
 * Eroeh. The lamb is white, so nothing is hatched; the accent is the crook.
 */
const LAMB_AND_CROOK: Stroke[] = [
  {
    d: 'M52 96 q2 -10 12 -8 q4 -8 14 -4 q8 -6 16 2 q10 -2 12 8 q10 4 6 14 q4 10 -6 14 q-4 8 -14 4 q-8 6 -16 0 q-10 4 -14 -4 q-10 -2 -8 -12 q-6 -8 -2 -14 Z',
  },
  { d: 'M52 96 Q40 92 34 100 Q30 110 38 114 Q46 116 52 108' },
  { d: 'M44 96 Q48 86 56 90', role: 'soft' },
  { d: 'M62 124 V148 M72 126 V148 M92 126 V148 M100 124 V148' },
  { d: 'M60 118 q4 -4 8 0 M78 121 q4 -4 8 0 M96 118 q4 -4 8 0', role: 'soft' },
  { d: 'M126 150 V46 Q126 26 110 26 Q96 28 98 42', role: 'accent' },
  { d: 'M14 150 H146 M28 150 q2 -8 4 0 q2 -9 4 0', role: 'ambient' },
  shadow(80, 154, 40),
]

/**
 * Kovarro: a horse walking, side on and with no face, the bridle's reins in
 * the accent. In "The North Remembers" (episode 11) Daenerys sends him east
 * across the Red Waste on one of the last horses, and he rides back with the
 * news of Qarth in "Garden of Bones" (episode 14). The far legs are soft and
 * the belly is hatched.
 */
const HORSE: Stroke[] = [
  {
    d: 'M64 78 Q90 86 112 80 Q128 80 126 96 Q124 110 112 112 H66 Q52 110 50 98 Q46 88 40 82 L30 96 Q22 100 18 94 L38 54 Q42 46 48 48 Q58 56 64 78 Z',
  },
  { d: 'M42 49 L43 41 L48 47', role: 'soft' },
  { d: 'M50 46 q6 2 6 8 q6 2 6 8 q6 2 6 10', role: 'soft' },
  { d: 'M24 92 L38 74 Q52 76 66 86', role: 'accent' },
  { d: 'M64 112 L64 146 M110 112 Q118 128 114 146', role: 'soft' },
  { d: 'M60 112 L58 148 H64 M70 112 L74 148 H80' },
  { d: 'M104 112 Q112 128 106 148 H112 M116 110 Q126 128 118 148 H124' },
  { d: 'M126 86 Q140 94 136 126 M130 90 Q144 104 140 124', role: 'soft' },
  { d: 'M78 110 l5 -4 M92 110 l5 -4 M106 108 l5 -4', role: 'ambient' },
  { d: 'M16 150 H146', role: 'ambient' },
  shadow(84, 154, 46),
]

/**
 * Malakho: the golden peacock in Xaro's garden, its tail fanned and set
 * with jewels, on its plinth. "Malakho says the statue is too heavy to
 * carry," Jorah tells Daenerys in "The Ghost of Harrenhal" (episode 15). No
 * face; the accent is the jewels, the plinth's far side is hatched.
 */
const PEACOCK: Stroke[] = [
  { d: 'M38 118 A50 50 0 1 1 134 118' },
  { d: 'M52 114 A36 36 0 1 1 120 114', role: 'soft' },
  {
    d: 'M86 110 L48 84 M86 110 L58 62 M86 110 L78 48 M86 110 L100 48 M86 110 L118 62 M86 110 L126 86',
    role: 'soft',
  },
  {
    d: `${circle(48, 84, 4)} ${circle(58, 62, 4)} ${circle(78, 48, 4)} ${circle(100, 48, 4)} ${circle(118, 62, 4)} ${circle(126, 86, 4)}`,
    role: 'accent',
  },
  {
    d: 'M70 128 Q62 112 74 102 Q78 96 76 86 Q72 76 70 70 Q70 62 76 62 Q82 64 80 72 Q82 86 88 96 Q100 110 94 128 Z',
  },
  { d: 'M70 66 L63 69 L70 70 M74 62 L70 54 M77 62 L78 54', role: 'soft' },
  { d: 'M78 106 Q84 112 82 124 M84 102 Q92 110 90 124', role: 'soft' },
  {
    d: 'M58 128 H114 L106 136 H50 Z M50 136 V150 H106 V136 M106 150 L114 142 V128',
  },
  { d: 'M108 146 l5 -4 M108 138 l5 -4', role: 'ambient' },
  shadow(82, 154, 38),
]

/**
 * Xaro's vault: the round door in its wall, in 3/4 with its thickness
 * hatched, the inner ring and the bolts. His first drawing and his death
 * share it.
 */
const VAULT_DOOR: Stroke[] = [
  { d: 'M24 150 V30 H136 V150' },
  {
    d: `${ellipse(76, 90, 44, 50)} M120 90 Q124 60 108 46 M120 90 Q124 120 108 134`,
  },
  { d: ellipse(76, 90, 34, 40), role: 'soft' },
  {
    d: dots([
      [76, 44],
      [104, 58],
      [114, 90],
      [104, 122],
      [76, 136],
      [48, 122],
      [38, 90],
      [48, 58],
    ]),
    role: 'soft',
  },
  { d: 'M122 70 l6 -4 M124 90 l6 -4 M122 110 l6 -4', role: 'ambient' },
  { d: 'M16 150 H144', role: 'ambient' },
]

/**
 * Xaro Xhoan Daxos: his vault door with the round key pendant in its lock,
 * the key he wears around his neck and the only one that opens it, shown
 * to Daenerys in "The Ghost of Harrenhal" (episode 15). The accent is the
 * key.
 */
const LOCKED_VAULT: Stroke[] = [
  ...VAULT_DOOR,
  {
    d: `${circle(76, 90, 10)} ${circle(76, 90, 4)} M76 80 V64`,
    role: 'accent',
  },
]

/**
 * Pyat Pree: a tall glass of shade of the evening, the thick blue drink of
 * the warlocks, in the accent, with two leaves of the ink-blue trees it is
 * brewed from on the ground. Daenerys drinks it at the door of the House of
 * the Undying, where he leads her, in Daenerys IV (chapter 122). The bowl's
 * far side is hatched; no face, so none of his blue lips.
 */
const SHADE_GLASS: Stroke[] = [
  { d: ellipse(80, 44, 16, 5) },
  { d: 'M64 44 Q64 92 80 98 Q96 92 96 44' },
  {
    d: `${ellipse(80, 62, 15, 4)} M65.5 62 Q66 89 80 94 Q94 89 94.5 62`,
    role: 'accent',
  },
  { d: `M80 98 V132 ${ellipse(80, 116, 4, 2)}`, role: 'soft' },
  { d: ellipse(80, 136, 18, 5) },
  { d: 'M90 72 l4 -2 M89 82 l4 -2 M86 91 l4 -2', role: 'ambient' },
  {
    d: 'M106 148 Q118 136 132 144 Q118 152 106 148 Z M30 148 Q42 138 54 146 Q42 152 30 148 Z',
    role: 'soft',
  },
  { d: 'M112 147 L126 144 M36 147 L48 146', role: 'soft' },
  shadow(80, 146, 26),
]

/**
 * Quaithe: her mask, front on with its rim on one side and its ties, two
 * eye slits cut in it and hexagons worked over it, as the show makes it in
 * metal. The book's is dark red lacquer, worn when she comes to Daenerys
 * in Daenerys I (chapter 86). The accent is the mask's edge; nothing is
 * behind the slits.
 */
const MASK: Stroke[] = [
  {
    d: 'M80 34 Q112 34 116 66 Q118 100 102 124 Q92 138 80 140 Q68 138 58 124 Q42 100 44 66 Q48 34 80 34 Z',
    role: 'accent',
  },
  { d: 'M116 66 Q124 98 106 128 Q96 142 82 144', role: 'soft' },
  { d: 'M56 80 H74 M86 80 H104' },
  {
    d: `${polygon(68, 54, 8, 6)} ${polygon(92, 54, 8, 6)} ${polygon(80, 62, 6, 6)} ${polygon(58, 102, 8, 6)} ${polygon(102, 102, 8, 6)} ${polygon(70, 118, 8, 6)} ${polygon(90, 118, 8, 6)}`,
    role: 'soft',
  },
  { d: 'M44 66 Q30 70 24 84 M116 66 Q130 70 136 84', role: 'soft' },
  { d: 'M112 90 l6 -3 M108 104 l6 -3 M102 118 l6 -3', role: 'ambient' },
  shadow(80, 160, 28),
]

/**
 * A young dragon's head in profile, facing left, with no eye, and its two
 * horns; each dragon places them at the top of its neck.
 */
const DRAGON_HEAD = 'M0 0 Q-8 -8 -16 -7 L-28 -3 Q-32 0 -28 3 L-14 6 Q-6 8 0 6'
const DRAGON_HORNS = 'M-5 -6 Q1 -13 10 -15 M-10 -7 Q-6 -15 0 -20'

/** The head and horns, placed by `at`. */
function dragonHead(at: string): Stroke[] {
  return [
    { d: DRAGON_HEAD, transform: at },
    { d: DRAGON_HORNS, transform: at, role: 'soft' },
  ]
}

/**
 * Drogon: the young black dragon in flight, side on, both wings raised,
 * the near wing's membrane in the accent and the far wing hatched, at the
 * size of the hatchlings Daenerys names in Daenerys I (chapter 86).
 */
const FLYING_DRAGON: Stroke[] = [
  { d: 'M54 98 Q70 84 96 88 Q112 92 120 102 Q104 110 84 108 Q64 108 54 98 Z' },
  { d: 'M58 92 Q46 86 40 72 M56 102 Q40 94 32 80' },
  ...dragonHead('translate(38 76) rotate(10)'),
  { d: 'M120 102 Q134 108 140 120 Q144 130 136 136 M136 136 l-7 -1 l3 7 Z' },
  { d: 'M76 108 L70 118 L64 118 M100 106 L106 116 L100 118', role: 'soft' },
  { d: 'M78 90 L70 54 L48 28 M70 54 L44 50 M70 54 L56 66' },
  {
    d: 'M48 28 Q54 42 58 48 Q50 48 44 50 Q54 58 56 66 Q68 72 72 80 Q80 84 92 88',
    role: 'accent',
  },
  { d: 'M90 88 L112 50 L140 30 M112 50 L144 50', role: 'soft' },
  { d: 'M140 30 Q128 46 124 52 Q134 50 144 50 Q122 64 102 90', role: 'soft' },
  { d: 'M118 62 l6 -2 M112 72 l6 -2 M106 82 l6 -2', role: 'ambient' },
  shadow(88, 154, 34),
]

/**
 * Rhaegal's folded wing: the bone from shoulder to wrist and back, the
 * fingers, and the scalloped membrane in the accent. His first drawing and
 * his death share it.
 */
const FOLDED_WING: Stroke[] = [
  { d: 'M66 118 L94 100 L132 114' },
  {
    d: 'M66 118 Q76 112 84 118 Q94 110 104 120 Q116 112 132 114',
    role: 'accent',
  },
  { d: 'M94 100 L84 118 M94 100 L104 120', role: 'soft' },
]

/**
 * Rhaegal: the young green dragon lying down, side on, neck raised, wing
 * folded along his back and tail curled round in front, the hatchling
 * Daenerys names in Daenerys I (chapter 86). The flank is hatched.
 */
const RESTING_DRAGON: Stroke[] = [
  { d: 'M50 150 Q44 126 64 116 Q90 106 114 118 Q128 128 124 150' },
  { d: 'M62 140 Q52 146 40 150 M50 150 H40', role: 'soft' },
  { d: 'M64 118 Q50 106 46 90 M76 112 Q62 100 58 84' },
  ...dragonHead('translate(52 88) rotate(-6)'),
  ...FOLDED_WING,
  { d: 'M124 148 Q142 150 146 138 Q148 128 138 128' },
  { d: 'M110 132 l6 -3 M114 142 l6 -3', role: 'ambient' },
  { d: 'M20 150 H150', role: 'ambient' },
  shadow(86, 154, 44),
]

/**
 * Viserion sitting up, side on: the body, the neck and head, the tail round
 * his feet, and the bones of both wings half raised. His first drawing and
 * his return share it.
 */
const SITTING_DRAGON: Stroke[] = [
  { d: 'M70 148 Q60 128 66 108 Q72 92 86 92 Q100 96 100 116 Q102 136 94 148' },
  { d: 'M76 94 Q66 78 66 58 M88 94 Q80 76 78 56' },
  ...dragonHead('translate(74 56) rotate(-20)'),
  { d: 'M94 148 Q114 154 124 144 Q130 134 120 132' },
  { d: 'M72 148 V138 H64 M90 148 V138 H82', role: 'soft' },
  { d: 'M94 124 l5 -3 M95 134 l5 -3', role: 'ambient' },
  { d: 'M94 104 L116 72 L138 60 M116 72 L136 86 M116 72 L126 100' },
  { d: 'M70 104 L50 78 L32 70 M50 78 L38 92', role: 'soft' },
  { d: 'M20 150 H140', role: 'ambient' },
  shadow(84, 154, 32),
]

/**
 * Viserion: the young cream dragon sitting up with his wings half raised,
 * the near wing's membrane in the accent, the hatchling Daenerys names in
 * Daenerys I (chapter 86).
 */
const SITTING_UP: Stroke[] = [
  ...SITTING_DRAGON,
  {
    d: 'M138 60 Q130 74 136 86 Q126 92 126 100 Q112 104 100 120',
    role: 'accent',
  },
  { d: 'M32 70 Q38 84 38 92 Q52 96 66 112', role: 'soft' },
]

/**
 * Strong Belwas: a huge bare chest and belly crossed with scars, the
 * accent, for the scarred eunuch who comes to Daenerys at the port of Qarth
 * in Daenerys V (chapter 137). No head and no face; the far side is
 * hatched. The show has no Belwas.
 */
const SCARRED_CHEST: Stroke[] = [
  {
    d: 'M62 34 Q56 44 36 48 Q16 54 16 78 L20 112 M98 34 Q104 44 124 48 Q144 54 144 78 L140 112',
  },
  {
    d: 'M36 70 Q30 104 42 130 Q58 152 80 152 Q102 152 118 130 Q130 104 124 70',
  },
  { d: 'M44 70 Q62 82 80 74 Q98 82 116 70', role: 'soft' },
  { d: 'M80 132 h0.01 M60 34 Q80 42 100 34', role: 'soft' },
  {
    d: 'M46 58 L66 86 M96 54 L112 80 M74 50 L86 64 M58 102 L90 94 M94 116 L120 102 M50 116 L70 136 M28 70 L34 94',
    role: 'accent',
  },
  { d: 'M120 90 l6 -3 M120 104 l6 -3 M116 118 l6 -3', role: 'ambient' },
  shadow(80, 160, 46),
]

/**
 * Arstan Whitebeard: his tall hardwood staff, the accent, with its knots,
 * beside the manticore it knocks from Daenerys's hands at the port of Qarth
 * in Daenerys V (chapter 137), on its back by its open box.
 * The staff's far side and the box's are hatched. The show has no Arstan.
 */
const STAFF_AND_BOX: Stroke[] = [
  {
    d: 'M98 20 Q108 20 106 30 L90 150 H80 L94 28 Q92 20 98 20 Z',
    role: 'accent',
  },
  { d: 'M98 44 q4 2 3 7 M93 82 q4 2 3 7 M88 118 q4 2 3 7', role: 'soft' },
  {
    d: 'M102 40 l2 -2 M98 72 l2 -2 M94 104 l2 -2 M91 132 l2 -2',
    role: 'ambient',
  },
  {
    d: 'M22 150 V128 H50 V150 Z M50 150 L60 142 V120 L50 128 M22 128 L32 120 H60',
  },
  { d: 'M22 128 L14 108 L42 104 L50 128', role: 'soft' },
  { d: 'M54 140 l4 -3 M54 132 l4 -3', role: 'ambient' },
  {
    d: `${ellipse(120, 145, 8, 5)} M114 141 l-4 -5 M120 140 l0 -6 M126 141 l4 -5 M128 145 Q138 139 134 131 Q130 127 128 131`,
  },
  { d: 'M14 150 H146', role: 'ambient' },
  shadow(82, 154, 52),
]

/**
 * The Essos cast, keyed by record id: the first season's (#1052) and the
 * second season's Essos and Qarth cast (#1475).
 */
export const ESSOS_DRAWINGS = {
  'viserys-targaryen': [...BANNER, shadow(36, 153, 14)],
  'drogo': [...BRAID, shadow(87, 160, 18)],
  'jorah-mormont': PLANTED_SWORD,
  'illyrio-mopatis': EGG_CHEST,
  'irri': BRAZIER,
  'doreah': MOONS,
  'rakharo': ARAKH,
  'mirri-maz-duur': HEALER_BOWL,
  'qotho': PLANTED_ARAKH,
  'cohollo': ARAKH_GIFT,
  'haggo': COILED_WHIP,
  'jhiqui': TENT,
  'aggo': RECURVE_BOW,
  'jhogo': LOOPED_WHIP,
  'quaro': LEANING_ARAKH,
  'mago': FLAT_ARAKH,
  'eroeh': LAMB_AND_CROOK,
  'kovarro': HORSE,
  'xaro-xhoan-daxos': LOCKED_VAULT,
  'pyat-pree': SHADE_GLASS,
  'quaithe': MASK,
  'malakho': PEACOCK,
  'drogon': FLYING_DRAGON,
  'rhaegal': RESTING_DRAGON,
  'viserion': SITTING_UP,
  'strong-belwas': SCARRED_CHEST,
  'arstan-whitebeard': STAFF_AND_BOX,
} satisfies Drawings

/** The Essos cast drawn again later in the story. */
export const essosRedrawn: Redrawings = {
  'xaro-xhoan-daxos': [
    // The vault shut, its key gone from the lock, the empty lock in the
    // accent: Daenerys has him locked in his empty vault in "Valar
    // Morghulis" (episode 20), the show's alone. The books keep him alive;
    // Daenerys V (chapter 137), the chapter the episode adapts, orders it.
    {
      episode: 20,
      chapter: 137,
      source: 'episode',
      value: [...VAULT_DOOR, { d: circle(76, 90, 6), role: 'accent' }],
    },
  ],
  'viserion': [
    // The same dragon with his wings torn to rags: the Night King kills him
    // beyond the Wall and raises him as a wight in "Beyond the Wall"
    // (episode 66), the show's alone. The books leave him alive, so chapter
    // 344, their last, orders it.
    {
      episode: 66,
      chapter: 344,
      source: 'episode',
      value: [
        ...SITTING_DRAGON,
        {
          d: 'M138 60 L132 68 L136 72 L132 78 L136 86 L130 88 M126 100 L118 102 L114 108 M106 112 L100 120',
          role: 'accent',
        },
        {
          d: 'M32 70 L36 78 L34 84 L38 92 M48 96 L56 100 M60 106 L66 112',
          role: 'soft',
        },
        { d: 'M122 82 l4 2 l-2 4 Z M112 92 l4 1 l-2 4 Z', role: 'soft' },
      ],
    },
    // The torn dragon down on the ground, neck and tail stretched out, one
    // ragged wing over him: he falls with the Night King in "The Long
    // Night" (episode 70), the show's alone; chapter 344 orders it.
    {
      episode: 70,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M50 150 Q46 132 70 126 Q96 122 112 134 Q120 142 118 150' },
        { d: 'M54 142 Q40 142 28 148 M60 132 Q42 130 30 138' },
        ...dragonHead('translate(30 144) rotate(-14)'),
        { d: 'M118 148 Q134 152 148 146' },
        { d: 'M78 126 L98 108 L134 116 M98 108 L112 128' },
        {
          d: 'M134 116 L128 120 L130 126 L122 128 M112 128 L104 127 L100 132 M90 128 L78 126',
          role: 'accent',
        },
        { d: 'M68 140 l5 -3 M80 142 l5 -3 M98 140 l5 -3', role: 'ambient' },
        { d: 'M12 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'rhaegal': [
    // His folded wing and his back going down into the sea, the tail's tip
    // still above the waves, with nothing of how: he falls into the sea off
    // Dragonstone in "The Last of the Starks" (episode 71), the show's
    // alone. The books leave him alive; chapter 344 orders it.
    {
      episode: 71,
      chapter: 344,
      source: 'episode',
      value: [
        ...SEA,
        { d: 'M40 158 Q60 140 90 146 Q112 150 124 158' },
        ...moved(FOLDED_WING, 'translate(-8 38) rotate(12 92 110)'),
        { d: 'M36 158 Q28 146 18 150', role: 'soft' },
        { d: 'M128 158 Q134 140 146 142 Q152 148 146 154' },
      ],
    },
  ],
  'jorah-mormont': [
    // The same sword with a little bird on its guard, Varys's: from the
    // episode and the chapter that tell he reports to King's Landing, "The
    // Wolf and the Lion" (episode 5) and Eddard II (chapter 13).
    {
      episode: 5,
      chapter: 13,
      value: [
        ...PLANTED_SWORD,
        {
          d: 'M60 60 Q56 50 62 46 Q66 44 70 48 Q74 54 70 60 M70 50 l8 -2 l-7 4 M60 56 L50 62 L58 60',
          role: 'accent',
        },
      ],
    },
    // The sword down flat in the snow, the little bird gone from its guard:
    // he dies at Winterfell in "The Long Night" (episode 70), the show's
    // alone. The books leave him alive, so chapter 344, their last, only
    // orders it.
    {
      episode: 70,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(LONGSWORD, 'translate(0 52) rotate(-90 80 90)'),
        {
          d: 'M12 150 q14 -6 28 0 M64 156 q16 -6 32 0 M116 150 q16 -6 32 0',
          role: 'ambient',
        },
        shadow(80, 154, 62),
      ],
    },
  ],
  'irri': [
    // The brazier knocked over on its side, the coals cold and spilled, the
    // egg gone: she dies in Qarth the night the dragons are taken,
    // "The Old Gods and the New" (episode 16), the show's alone. The book
    // keeps her alive; its Qarth chapter the episode adapts, Daenerys III
    // of A Clash of Kings (chapter 114), orders it.
    {
      episode: 16,
      chapter: 114,
      source: 'episode',
      value: [
        ...moved(
          [
            { ...BRAZIER_RIM, role: 'accent' },
            BRAZIER_BODY,
            BRAZIER_LEGS,
            BRAZIER_HATCH,
          ],
          'translate(14 -2) rotate(-90 80 110)',
        ),
        {
          d: dots([
            [28, 148],
            [36, 146],
            [44, 149],
            [52, 147],
            [60, 149],
          ]),
          role: 'soft',
        },
        { d: 'M14 152 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'doreah': [
    // The two moons fallen to the ground, the cracked one in its two
    // halves, with nothing of how she dies: the show ends her in "Valar
    // Morghulis" (episode 20), the book in the Red Waste, in Daenerys I of
    // A Clash of Kings (chapter 86). Two deaths, one stage.
    {
      episode: 20,
      chapter: 86,
      value: [
        ...moved(WHOLE_MOON, 'translate(-14 62)'),
        ...moved(
          [
            MOON_LEFT,
            { d: 'M108 100 L98 108 L104 118 L96 132', role: 'accent' },
          ],
          'translate(0 22) rotate(-24 104 110)',
        ),
        ...moved(
          [
            MOON_RIGHT,
            { d: 'M116 102 L106 110 L112 120 L106 136', role: 'soft' },
          ],
          'translate(22 18) rotate(30 112 112)',
        ),
        { d: 'M14 150 H146', role: 'ambient' },
      ],
    },
  ],
  'rakharo': [
    // The arakh broken in two in the grass, its point on the ground: he
    // dies in the Red Waste in "The Night Lands" (episode 12), the
    // show's alone. The book's Rakharo lives; Daenerys I of A Clash of Kings
    // (chapter 86), the Red Waste chapter the episode adapts, orders it.
    {
      episode: 12,
      chapter: 86,
      source: 'episode',
      value: [
        { d: 'M16 134 H36 V142 H16 Z' },
        { d: 'M22 134 L25 142 M28 134 L31 142', role: 'soft' },
        { d: 'M40 124 L36 152' },
        { d: 'M38 134 Q58 130 76 122 L73 128 L79 131 L77 136 Q60 142 38 142' },
        { d: 'M38 142 Q60 142 77 136', role: 'accent' },
        {
          d: 'M92 134 L96 129 L91 125 L94 121 Q118 112 142 98 Q124 124 94 140 Z',
        },
        { d: 'M94 140 Q124 124 142 98', role: 'soft' },
        {
          d: 'M52 132 l-2 -4 M64 128 l-2 -4 M106 122 l-2 -4 M120 114 l-2 -4',
          role: 'ambient',
        },
        {
          d: 'M8 150 H152 M46 150 q3 -10 6 0 q3 -12 6 0 M84 150 q3 -10 6 0 q3 -12 6 0 M124 150 q3 -10 6 0',
          role: 'ambient',
        },
      ],
    },
  ],
  'viserys-targaryen': [
    // The banner fallen flat, and the pot the gold was poured from tipped
    // over it: crowned with molten gold in "A Golden Crown" (episode 6) and
    // in Daenerys V (chapter 47).
    {
      episode: 6,
      chapter: 47,
      value: [
        ...moved(BANNER, 'translate(120 0) rotate(-90 36 150)'),
        { d: 'M104 44 L126 28 Q138 34 136 48 L112 60 Q100 56 104 44 Z' },
        { d: ellipse(131, 38, 5, 10), role: 'soft' },
        {
          d: `M110 60 Q116 70 112 80 ${ellipse(112, 84, 10, 3)}`,
          role: 'accent',
        },
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'mirri-maz-duur': [
    // The same bowl brimming with blood and the bronze knife beside it: she
    // kills Drogo's stallion for her rite in "Baelor" (episode 9) and in
    // Daenerys VIII (chapter 65).
    {
      episode: 9,
      chapter: 65,
      value: [
        ...BOWL,
        { d: ellipse(76, 101, 30, 6), role: 'accent' },
        { d: 'M56 106 q-2 8 0 14 M98 106 q2 6 0 10', role: 'accent' },
        { d: 'M22 154 L62 144 L64 150 Z M61 141 L66 153', role: 'soft' },
        { d: 'M64 146 L82 142 L83 146 L65 150', role: 'soft' },
        shadow(76, 146, 40),
      ],
    },
    // The bowl gone, and the stake she is bound to standing in the flames
    // of Drogo's pyre: "Fire and Blood" (episode 10), Daenerys X (chapter 73).
    {
      episode: 10,
      chapter: 73,
      value: [
        { d: 'M78 20 V140 M84 20 V140' },
        { d: 'M74 56 L88 62 M74 64 L88 70', role: 'soft' },
        { d: 'M30 150 L130 126 M30 126 L130 150 M24 140 H136' },
        {
          d: 'M40 124 q-6 -14 2 -26 q4 10 8 4 q6 12 0 22 M66 118 q-8 -18 4 -36 q4 12 8 6 q4 14 -2 30 M96 118 q-6 -18 4 -34 q4 12 8 6 q4 14 -2 28 M118 124 q-6 -12 2 -22 q4 8 6 2 q4 10 -2 20',
          role: 'accent',
        },
        { d: 'M44 146 l6 -3 M110 146 l6 -3', role: 'ambient' },
        shadow(80, 156, 56),
      ],
    },
  ],
  'drogo': [
    // The braid lying limp across the pillow Daenerys smothers him with,
    // in "Fire and Blood" (episode 10) and in Daenerys IX (chapter 69).
    {
      episode: 10,
      chapter: 69,
      value: [
        {
          d: 'M24 120 Q20 104 34 100 H126 Q140 104 136 120 Q140 136 126 140 H34 Q20 136 24 120 Z',
        },
        { d: 'M34 104 Q30 120 34 136 M126 104 Q130 120 126 136', role: 'soft' },
        ...moved(BRAID, 'rotate(-62 80 90) translate(-10 10)'),
        shadow(80, 150, 60),
      ],
    },
  ],
  'qotho': [
    // The same arakh fallen whole in the grass: Jorah kills him in "Baelor"
    // (episode 9) and in Daenerys VIII (chapter 65).
    {
      episode: 9,
      chapter: 65,
      value: [
        ...moved(KHAS_ARAKH, 'translate(0 56) rotate(-74 80 80)'),
        {
          d: 'M20 150 H140 M30 150 q3 -10 6 0 q3 -12 6 0 M76 150 q2 -9 4 0 q3 -11 6 0 M118 150 q3 -10 6 0 q3 -12 6 0',
          role: 'ambient',
        },
        shadow(80, 154, 50),
      ],
    },
  ],
  'cohollo': [
    // The same arakh turned over off its cloth, the cloth thrown into
    // folds: he dies in the fight at Mirri Maz Duur's tent in Daenerys VIII
    // (chapter 65). The book's alone; episode 9 orders it.
    {
      episode: 9,
      chapter: 65,
      value: [
        {
          d: 'M16 132 L30 116 Q44 122 56 112 L70 120 L84 110 L80 132 Q60 128 46 136 Q30 128 16 132 Z',
        },
        {
          d: 'M30 116 Q36 124 32 130 M56 112 Q60 124 46 136 M70 120 Q76 126 80 132',
          role: 'soft',
        },
        ...moved(
          CHASED_ARAKH,
          'translate(4 206) scale(1 -1) rotate(-90 80 80)',
        ),
        shadow(80, 152, 60),
      ],
    },
  ],
  'haggo': [
    // The same whip uncoiled along the ground: he dies in the fight at Mirri
    // Maz Duur's tent in Daenerys VIII (chapter 65). The book's alone;
    // episode 9 orders it.
    {
      episode: 9,
      chapter: 65,
      value: [
        ...moved(SILVER_HANDLE, 'translate(-60 26)'),
        { d: 'M28 145 Q46 156 70 146 Q96 134 112 146 Q126 156 142 140' },
        {
          d: 'M30 140 Q48 151 70 141 Q96 129 112 141 Q125 150 140 137',
          role: 'soft',
        },
        { d: 'M142 140 l6 -2 M142 140 l3 -6', role: 'soft' },
        { d: 'M60 152 l6 -3 M100 146 l6 -3', role: 'ambient' },
        { d: 'M10 154 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'quaro': [
    // The same arakh fallen flat in front of the boulder: he dies
    // in Daenerys VIII (chapter 65). The book's alone; episode 9 orders it.
    {
      episode: 9,
      chapter: 65,
      value: [
        ...BOULDER,
        ...moved(KHAS_ARAKH, 'translate(-6 238) scale(1 -1) rotate(-92 80 80)'),
        shadow(74, 180, 56),
      ],
    },
  ],
}
