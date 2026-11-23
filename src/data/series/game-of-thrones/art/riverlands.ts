import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { NEEDLE_SWORD } from './winterfell'

/** One eagle's wing, the crest of the Mallister helm; the helm wears two. */
const EAGLE_WING: Stroke[] = [
  {
    d: 'M58 82 Q40 62 26 38 Q40 44 46 54 Q42 48 40 42 Q50 52 54 60 Q52 54 52 48 Q58 60 60 72',
    role: 'accent',
  },
]
/**
 * Jason Mallister: a helm crested with an eagle's wings, for the lord of
 * Seagard who rides past the inn at the crossroads in Catelyn V (chapter
 * 29). The book's alone. The far side is hatched; the accent is the wings.
 */
const EAGLE_HELM: Stroke[] = [
  { d: 'M56 122 V86 Q56 62 80 60 Q104 62 104 86 V122 Q80 130 56 122 Z' },
  ...EAGLE_WING,
  ...moved(EAGLE_WING, 'translate(160 0) scale(-1 1)'),
  { d: 'M60 94 Q80 90 100 94', role: 'soft' },
  { d: 'M56 122 L50 134 Q80 144 110 134 L104 122' },
  { d: 'M98 100 l5 -3 M98 112 l5 -3', role: 'ambient' },
  shadow(80, 150, 36),
]

/**
 * A stoneware ale jug, its far side hatched. Masha Heddle's first drawing
 * and her death share it.
 */
const ALE_JUG: Stroke[] = [
  {
    d: 'M54 138 Q44 118 50 100 Q54 90 52 80 H74 Q72 90 76 100 Q82 118 72 138 Z',
  },
  { d: 'M74 92 Q90 96 86 116 Q84 124 76 126', role: 'soft' },
  { d: 'M66 100 l4 -3 M68 112 l4 -3 M66 124 l4 -3', role: 'ambient' },
]
/** An ale mug drawn from its base, placed by its transform. */
const MUG: Stroke[] = [
  { d: 'M0 0 V-22 H16 V0 Z M16 -16 Q24 -14 22 -6 Q20 -2 16 -4' },
]
/**
 * Masha Heddle: the ale jug and two mugs on a plank, for the innkeeper at
 * the crossroads in episode 4 and in Catelyn V (chapter 29). The accent is
 * the ale's head.
 */
const MASHA: Stroke[] = [
  ...ALE_JUG,
  ...moved(MUG, 'translate(92 138)'),
  ...moved(MUG, 'translate(114 138)'),
  { d: 'M92 116 q4 -5 8 0 t8 0 M114 116 q4 -5 8 0 t8 0', role: 'accent' },
  { d: 'M16 138 H144 M16 146 H144 M16 138 V146 M144 138 V146' },
  shadow(80, 154, 62),
]

/**
 * Kevan Lannister: the lion of his house walking side on, a mane and no
 * muzzle, for Tywin's brother at his side in episode 8 and in Tyrion VII
 * (chapter 57). The accent is the mane. Retinted from `wine`: nothing on
 * it is red.
 */
const LION: Stroke[] = [
  {
    d: 'M50 84 Q44 74 50 64 Q60 54 70 62 Q76 72 76 80 Q96 74 116 80 Q128 86 128 104 L130 150 H118 L116 122 Q96 128 80 124 L78 150 H66 L64 118 Q56 110 52 100',
  },
  { d: 'M52 100 Q40 96 36 90 Q36 82 44 82 L50 84', role: 'soft' },
  {
    d: 'M46 66 q-6 4 -4 10 M50 60 q-4 -6 2 -10 M60 56 q2 -8 8 -6 M70 60 q8 -4 10 2 M76 70 q8 0 6 8 M48 96 q-6 4 -2 10 M58 104 q-2 8 4 10',
    role: 'accent',
  },
  { d: 'M128 98 Q142 96 144 82 Q148 76 144 72', role: 'soft' },
  { d: 'M118 122 L110 150 H100', role: 'soft' },
  { d: 'M96 86 l6 -3 M108 90 l6 -3 M116 100 l6 -3', role: 'ambient' },
  shadow(88, 156, 48),
]

/**
 * Addam Marbrand: the burning tree of his house, a bare tree with flames in
 * its crown, for the knight at Tywin's council in episode 10 and in Tyrion
 * VIII (chapter 63). The trunk's far side is hatched; the accent is the
 * flames.
 */
const BURNING_TREE: Stroke[] = [
  { d: 'M74 150 Q76 120 72 96 M86 150 Q84 120 88 96' },
  {
    d: 'M72 96 Q60 84 46 82 M76 92 Q72 76 64 62 M84 92 Q90 74 98 62 M88 96 Q102 86 116 84',
  },
  {
    d: 'M46 82 Q38 74 44 64 M64 62 Q60 52 66 46 M98 62 Q102 52 96 46 M116 84 Q124 76 118 66',
    role: 'soft',
  },
  {
    d: 'M40 70 q-6 -10 2 -20 q2 8 6 4 q4 10 -2 18 M60 50 q-6 -12 4 -24 q2 10 6 6 q4 12 -4 20 M94 50 q-4 -12 6 -24 q2 10 6 6 q2 12 -6 20 M114 72 q-4 -10 4 -20 q2 8 6 4 q2 10 -4 16',
    role: 'accent',
  },
  { d: 'M82 112 l4 -3 M82 126 l4 -3 M82 140 l4 -3', role: 'ambient' },
  shadow(80, 154, 26),
]

/**
 * Podrick Payne: the spear he drives through Ser Mandon Moore's head to save
 * Tyrion on the Blackwater (episode 19), his show gate, with the wine jug he
 * pours for Tyrion and Janos Slynt in episode 12, before the show names him;
 * the book has him from Tyrion VIII (chapter 63) and gives him no spear. The
 * show is the reference. The jug's far side is hatched; the accent is the
 * spear's point.
 */
const SPEAR_JUG: Stroke[] = [
  { d: 'M42 152 L109 45 M47 154 L113 48' },
  { d: 'M107 44 L114 49 L118 43 L111 38 Z' },
  { d: 'M112 40 Q114 26 132 16 Q127 34 117 45', role: 'accent' },
  { d: 'M115 42 L129 21 M42 152 l5 2', role: 'soft' },
  {
    d: 'M104 150 Q94 134 100 120 Q104 112 102 104 H122 Q120 112 124 120 Q130 134 120 150 Z M102 104 L95 100',
  },
  {
    d: `${ellipse(112, 104, 10, 2.5)} M122 110 Q134 114 131 127 Q129 134 122 134`,
    role: 'soft',
  },
  { d: 'M116 124 l5 -3 M117 136 l5 -3', role: 'ambient' },
  shadow(84, 158, 48),
]

/**
 * Tyrion's battle-axe on its haft, aslant, the blade's far face hatched.
 * The accent is the blade.
 */
const TYRION_AXE: Stroke[] = [
  { d: 'M44 152 L112 40 M50 154 L117 43' },
  { d: 'M104 46 Q88 40 82 56 Q90 72 108 66 L112 56', role: 'accent' },
  { d: 'M117 43 L124 34 L128 40 L120 48' },
  { d: 'M50 144 l6 4 M54 138 l6 4', role: 'soft' },
  { d: 'M94 52 l5 -3 M96 61 l5 -3', role: 'ambient' },
]

/**
 * Stevron Frey: a shield with the twin towers and the bridge of House Frey,
 * for Walder's heir at the Twins in episode 9 and in Catelyn IX (chapter
 * 60). The far edge is hatched; the accent is the towers.
 */
const TOWERS_SHIELD: Stroke[] = [
  { d: 'M44 40 H116 V80 Q116 124 80 148 Q44 124 44 80 Z' },
  { d: 'M116 40 L122 44 V82 Q120 126 84 152', role: 'soft' },
  {
    d: 'M56 112 V60 H70 V112 M90 112 V60 H104 V112 M56 60 V54 H60 V60 M66 60 V54 H70 V60 M90 60 V54 H94 V60 M100 60 V54 H104 V60',
    role: 'accent',
  },
  { d: 'M70 86 H90 M70 92 H90 M74 92 V112 Q80 104 86 112 V92', role: 'soft' },
  { d: 'M118 56 l5 -3 M118 72 l5 -3 M116 90 l5 -3', role: 'ambient' },
  shadow(82, 156, 30),
]

/**
 * Edmure Tully: a longbow with a burning arrow nocked, the arrow he looses
 * at his father's funeral in episode 23; the book has him at Riverrun's
 * council in Catelyn XI (chapter 72). The show is the reference. The
 * accent is the flame.
 */
const BOW_ARROW: Stroke[] = [
  { d: 'M52 24 Q90 88 52 152' },
  { d: 'M52 24 L50 30 M52 152 L50 146', role: 'soft' },
  { d: 'M52 24 L62 88 L52 152', role: 'soft' },
  { d: 'M62 88 L122 52 M62 88 l-6 -2 l2 -5 M62 88 l-2 6 l5 2' },
  { d: 'M118 54 L124 46 L126 54', role: 'soft' },
  {
    d: 'M124 50 q-2 -10 6 -16 q0 6 4 4 q4 8 -4 14 Q126 54 124 50',
    role: 'accent',
  },
  { d: 'M66 64 l5 -3 M70 104 l5 -3', role: 'ambient' },
  shadow(70, 158, 30),
]

/**
 * Hoster Tully: the leaping trout of his house over the water, with no eye.
 * His record opens alive in the book and dead on screen at one pin (episode
 * 23, chapter 72), so the drawing says nothing of either (owner). The
 * accent is the tail.
 */
const TROUT: Stroke[] = [
  {
    d: 'M30 112 Q44 72 84 66 Q118 64 132 86 Q118 96 98 104 Q70 118 44 120 Q34 120 30 112 Z',
  },
  { d: 'M132 86 L148 72 L144 92 L150 108 L132 96', role: 'accent' },
  {
    d: 'M70 70 L78 54 L92 66 M74 116 L80 128 L90 112 M44 120 L38 132 L54 118',
    role: 'soft',
  },
  {
    d: 'M52 92 Q60 84 70 88 M62 102 q4 -3 8 0 t8 0 t8 0 M76 90 q4 -3 8 0 t8 0 t8 0',
    role: 'soft',
  },
  { d: 'M90 100 l5 -3 M102 96 l5 -3 M112 92 l5 -3', role: 'ambient' },
  {
    d: 'M20 150 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
    role: 'ambient',
  },
]

/** The black fish of the clasp, hatched because it is black. */
const BLACK_FISH: Stroke[] = [
  { d: 'M52 76 Q68 58 94 64 Q104 68 106 76 Q98 84 90 86 Q68 92 52 76 Z' },
  { d: 'M106 76 L116 68 L114 78 L118 86 L106 80' },
  {
    d: 'M60 76 l5 -4 M68 78 l6 -5 M76 80 l6 -6 M84 80 l6 -6 M92 78 l5 -5',
    role: 'ambient',
  },
]
/** The clasp's ring and pin, under the fish. */
const CLASP_PIN: Stroke[] = [
  { d: `${circle(80, 98, 5)} M80 86 V93`, role: 'accent' },
]
/**
 * Brynden Tully: the black fish clasp at the throat of his cloak, for the
 * Blackfish who meets Catelyn at the Bloody Gate in Catelyn VI (chapter
 * 35) and takes the bow at the funeral in episode 23. The accent is the
 * pin. His first drawing and his death share the fish and the pin.
 */
const FISH_CLASP: Stroke[] = [
  {
    d: 'M30 56 Q60 62 70 84 Q66 118 60 152 M130 56 Q100 62 90 84 Q94 118 100 152',
  },
  { d: 'M30 56 Q24 104 26 150 M130 56 Q136 104 134 150', role: 'soft' },
  ...BLACK_FISH,
  ...CLASP_PIN,
  { d: 'M44 80 Q40 116 42 148 M116 80 Q120 116 118 148', role: 'soft' },
  shadow(80, 158, 54),
]

/**
 * Hot Pie: a meat pie on a board, its crust crimped and steam rising, for
 * the baker's boy among Yoren's recruits in episode 10 and in A Clash of
 * Kings (chapter 75). The accent is the steam.
 */
const PIE: Stroke[] = [
  { d: ellipse(80, 106, 46, 14) },
  { d: 'M34 106 V118 Q34 132 80 132 Q126 132 126 118 V106' },
  {
    d: 'M36 104 q4 -4 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0',
    role: 'soft',
  },
  { d: 'M70 100 l8 -4 M84 104 l8 -4 M62 108 l8 -4', role: 'soft' },
  {
    d: 'M74 90 q-4 -8 0 -16 t0 -14 M88 92 q-4 -8 0 -16 t0 -12',
    role: 'accent',
  },
  {
    d: 'M14 140 L30 128 H146 L130 140 Z M14 140 V146 H130 V140 M130 146 L146 134 V128',
    role: 'soft',
  },
  { d: 'M112 118 l6 -3 M104 124 l6 -3', role: 'ambient' },
  shadow(80, 154, 64),
]

/**
 * Lommy: a dye vat with a stirring stick and a cloth over its rim, for the
 * dyer's apprentice with green hands among Yoren's recruits, on screen from
 * episode 10 and named only in episode 31, his show gate, and in A Clash of
 * Kings (chapter 75). The accent is the dye.
 */
const DYE_VAT: Stroke[] = [
  { d: ellipse(80, 82, 44, 12) },
  { d: 'M36 82 L42 140 Q80 150 118 140 L124 82' },
  { d: ellipse(80, 84, 38, 9), role: 'accent' },
  { d: 'M40 100 Q80 110 120 100 M42 124 Q80 134 118 124', role: 'soft' },
  { d: 'M96 84 L124 30 M100 86 L128 32' },
  { d: 'M36 82 Q26 100 32 118 Q38 112 42 116', role: 'soft' },
  { d: 'M112 98 l6 -3 M112 112 l6 -3 M110 126 l6 -3', role: 'ambient' },
  shadow(80, 154, 46),
]

/** The box of the cage on Yoren's wagon, seen from the front. */
const CAGE_BOX: Stroke = {
  d: 'M30 40 H130 V150 H30 Z M30 40 L40 30 H140 L130 40 M130 150 L140 140 V30',
}
/** The cage's crossbar. */
const CAGE_RAIL: Stroke = { d: 'M30 96 H130', role: 'soft' }
/**
 * Jaqen H'ghar: the tankard of water he asks Arya to fill for him, in
 * front of the cage on Yoren's wagon, in episode 12 and in A Clash of
 * Kings (chapter 79). The tankard's far side is hatched; the accent is
 * the water.
 */
const TANKARD_CAGE: Stroke[] = [
  ...moved(
    [
      CAGE_BOX,
      { d: 'M50 40 V150 M70 40 V150 M90 40 V150 M110 40 V150', role: 'soft' },
      CAGE_RAIL,
    ],
    'translate(64 14) scale(0.55)',
  ),
  { d: 'M36 104 V144 Q60 154 84 144 V104' },
  { d: ellipse(60, 104, 24, 6) },
  { d: ellipse(60, 106, 20, 4), role: 'accent' },
  { d: 'M84 112 Q102 114 100 128 Q98 140 84 138' },
  { d: 'M36 118 Q60 126 84 118 M36 134 Q60 142 84 134', role: 'soft' },
  { d: 'M72 112 l5 -3 M74 126 l5 -3 M72 140 l5 -3', role: 'ambient' },
  shadow(64, 156, 34),
]
/**
 * Rorge: the cage on its wagon side on, wheels and shaft, for the noseless
 * prisoner Jaqen introduces in A Clash of Kings (chapter 79), the record the
 * books' alone. The accent is the shaft.
 */
const CAGE_WAGON: Stroke[] = [
  { d: 'M24 112 H136 V120 H24 Z' },
  {
    d: 'M30 112 V54 H130 V112 M30 54 L40 46 H140 L130 54 M130 112 L140 104 V46',
  },
  {
    d: 'M46 54 V112 M62 54 V112 M78 54 V112 M94 54 V112 M110 54 V112',
    role: 'soft',
  },
  { d: `${circle(48, 132, 14)} ${circle(112, 132, 14)}` },
  {
    d: `${circle(48, 132, 3)} ${circle(112, 132, 3)} M48 118 V146 M34 132 H62 M112 118 V146 M98 132 H126`,
    role: 'soft',
  },
  { d: 'M136 116 L152 124', role: 'accent' },
  { d: 'M132 70 l6 -4 M132 90 l6 -4', role: 'ambient' },
  shadow(80, 152, 60),
]
/**
 * Biter: a corner of the cage seen from below, chains hanging inside it,
 * for the mute prisoner chained there in A Clash of Kings (chapter 79), the
 * record the books' alone. The accent is the chains.
 */
const CAGE_CORNER: Stroke[] = [
  {
    d: 'M60 30 L120 46 V150 M60 30 L24 50 V146 M120 46 L84 66 V156 M24 50 L84 66',
  },
  {
    d: 'M36 54 V148 M48 57 V151 M60 61 V153 M72 63 V155 M96 60 V153 M108 53 V151',
    role: 'soft',
  },
  {
    d: `M90 70 v10 M90 84 V100 ${ellipse(90, 104, 3, 4.5)} ${ellipse(90, 114, 4.5, 3)} ${ellipse(90, 124, 3, 4.5)}`,
    role: 'accent',
  },
  {
    d: `${ellipse(70, 92, 3, 4.5)} ${ellipse(70, 102, 4.5, 3)}`,
    role: 'accent',
  },
  { d: 'M112 70 l5 -3 M112 90 l5 -3 M112 110 l5 -3', role: 'ambient' },
  shadow(72, 158, 54),
]

/** One fallen leaf, drawn from its stem. */
const LEAVES = 'q4 -6 10 -4 q-2 6 -10 4 z'
/**
 * Stiv: a dagger left standing in the leaves of the wolfswood, for the
 * deserter who holds a knife to Bran in the ambush, in episode 6 and in
 * Bran V (chapter 38). He dies in the scene his record opens in: a change
 * in the episode the record opens in belongs in the first drawing, so it is
 * drawn here, with no stage. The accent is the grip.
 */
const DAGGER_LEAVES: Stroke[] = [
  { d: 'M76 150 L88 74 L94 76 L82 150 Z' },
  { d: 'M78 74 L104 80' },
  { d: 'M92 77 L98 52 M96 78 L102 53 M99 52 l3 -4 l2 5', role: 'accent' },
  { d: 'M84 120 L88 96', role: 'soft' },
  {
    d: `M30 146 ${LEAVES} M50 152 ${LEAVES} M110 148 ${LEAVES} M124 154 ${LEAVES} M60 140 ${LEAVES}`,
    role: 'soft',
  },
  { d: 'M10 156 H150', role: 'ambient', dashed: true },
]

/**
 * Wallen: a deserter's black cloak laid on the path, its hem torn, hatched
 * because it is black, for the gaunt man of the same ambush in episode 6
 * and in Bran V (chapter 38). He too dies in the scene his record opens
 * in, so his death is the first drawing, with no stage. The accent is the
 * torn hem.
 */
const TORN_CLOAK: Stroke[] = [
  { d: 'M68 52 L72 38 Q80 30 88 38 L92 52 Z' },
  {
    d: 'M68 52 Q44 60 32 144 L44 138 L50 148 L62 140 L72 150 L84 140 L96 150 L108 140 L118 148 L128 144 Q116 60 92 52',
  },
  { d: 'M128 144 L118 148 L108 140 L96 150', role: 'accent' },
  {
    d: 'M70 60 Q62 100 58 140 M80 56 V146 M90 60 Q98 100 102 142',
    role: 'soft',
  },
  {
    d: 'M44 110 l6 -4 M42 124 l6 -4 M62 96 l6 -4 M62 116 l6 -4 M92 96 l6 -4 M94 116 l6 -4 M110 108 l6 -4 M112 124 l6 -4',
    role: 'ambient',
  },
  { d: 'M10 158 H150', role: 'ambient', dashed: true },
]

/**
 * Robb's terms, rolled and tied with a cord, lying on the ground: the near
 * end shows the roll, the underside is hatched, and the accent is the seal
 * hanging from the cord.
 */
const TERMS: Stroke[] = [
  { d: `${ellipse(36, 130, 5, 13)} M36 117 H122 M36 143 H122` },
  { d: 'M122 117 A5 13 0 0 1 122 143' },
  { d: 'M36 125 Q33 130 36 135 Q38 130 36 127', role: 'soft' },
  { d: 'M76 117 Q73 130 76 143 M83 117 Q80 130 83 143', role: 'soft' },
  { d: 'M77 143 L70 154 M82 143 L90 153', role: 'soft' },
  { d: circle(79.5, 148, 5.5), role: 'accent' },
  {
    d: 'M50 137 l4 4 M62 137 l4 4 M98 137 l4 4 M110 137 l4 4',
    role: 'ambient',
  },
]
/** A pair of iron cuffs standing on their rims, the chain between them. */
const MANACLES: Stroke[] = [
  { d: `${ellipse(38, 96, 11, 14)} ${ellipse(122, 92, 11, 14)}` },
  { d: `${ellipse(38, 96, 6, 9)} ${ellipse(122, 92, 6, 9)}`, role: 'soft' },
  {
    d: `${ellipse(55, 98, 5, 2.5)} ${ellipse(64, 99, 2.5, 4.5)} ${ellipse(73, 100, 5, 2.5)} ${ellipse(82, 100, 2.5, 4.5)} ${ellipse(91, 99, 5, 2.5)} ${ellipse(100, 97, 2.5, 4.5)} ${ellipse(108, 95, 5, 2.5)}`,
    role: 'soft',
  },
  {
    d: 'M45 86 l4 -3 M47 96 l4 -3 M129 82 l4 -3 M131 92 l4 -3',
    role: 'ambient',
  },
]
/**
 * Alton Lannister: Robb's peace terms, which Robb sends him to King's
 * Landing with in "The North Remembers" (episode 11), lying before the
 * manacles of Robb's prisoner. The show's alone; its Robb has no crown, so
 * the seal is drawn plain.
 */
const TERMS_MANACLES: Stroke[] = [...MANACLES, ...TERMS, shadow(80, 160, 56)]

/**
 * Cleos Frey: the peace banner on its staff, which Robb's envoy rides under
 * to King's Landing and back, told in Tyrion V of A Clash of Kings
 * (chapter 94). The book's alone. The banner is the accent; its far folds
 * are hatched.
 */
const PEACE_BANNER: Stroke[] = [
  { d: 'M54 34 L57 20 L60 34 Z' },
  { d: 'M54 34 V150 M60 34 V150' },
  {
    d: 'M60 40 Q90 32 124 42 Q118 58 126 72 Q120 86 128 100 Q94 90 60 100',
    role: 'accent',
  },
  { d: 'M84 38 Q80 66 86 94 M104 38 Q98 64 106 96', role: 'soft' },
  {
    d: 'M110 48 l5 -3 M110 62 l5 -3 M112 76 l5 -3 M112 90 l5 -3',
    role: 'ambient',
  },
  { d: 'M60 44 l4 -3 M60 58 l4 -3', role: 'ambient' },
  shadow(58, 154, 22),
]

/**
 * A surgeon's saw, the blade narrowing from the grip to the tip, its teeth
 * in the accent, and the grip with its hand hole and two rivets, the grip's
 * far side hatched.
 */
const BONE_SAW: Stroke[] = [
  { d: 'M54 66 L136 82 V96 L54 104' },
  {
    d: 'M54 104 L56.9 107.7 L59.9 103.4 L62.8 107.1 L65.7 102.9 L68.6 106.6 L71.6 102.3 L74.5 106 L77.4 101.7 L80.4 105.4 L83.3 101.1 L86.2 104.9 L89.1 100.6 L92.1 104.3 L95 100 L97.9 103.7 L100.9 99.4 L103.8 103.1 L106.7 98.9 L109.6 102.6 L112.6 98.3 L115.5 102 L118.4 97.7 L121.4 101.4 L124.3 97.1 L127.2 100.9 L130.1 96.6 L133.1 100.3 L136 96',
    role: 'accent',
  },
  { d: 'M54 62 Q34 58 28 76 Q22 98 36 108 L54 108 Z' },
  { d: 'M38 74 Q34 88 42 96 Q48 86 46 76 Z', role: 'soft' },
  {
    d: `M58 70 V100 ${dots([
      [50, 72],
      [50, 98],
    ])}`,
    role: 'soft',
  },
  { d: 'M32 96 l4 -3 M30 86 l4 -3', role: 'ambient' },
]
/** A roll of linen bandage on its side, a loose end run out. */
const BANDAGE: Stroke[] = [
  {
    d: `${ellipse(98, 138, 7, 12)} M98 126 H122 M98 150 H122 A7 12 0 0 0 122 126`,
  },
  { d: ellipse(98, 138, 2.5, 4.5), role: 'soft' },
  { d: 'M112 144 l4 4 M117 140 l4 4', role: 'ambient' },
]
/**
 * Talisa Maegyr: the saw she takes a wounded Lannister soldier's leg off
 * with after Oxcross, in "Garden of Bones" (episode 14), lying with a roll
 * of bandage. The show's alone.
 */
const SAW_BANDAGE: Stroke[] = [
  ...moved(BONE_SAW, 'translate(0 22)'),
  ...BANDAGE,
  { d: 'M122 150 Q134 153 144 148', role: 'soft' },
  shadow(82, 156, 58),
]

/** A heater shield in 3/4, its edge seen on the right and hatched. */
const HEATER_SHIELD: Stroke[] = [
  { d: 'M42 42 H110 V86 Q110 126 76 146 Q42 126 42 86 Z' },
  { d: 'M110 42 L118 46 V88 Q118 130 82 150 L76 146' },
  {
    d: 'M113 56 l3 -2 M113 72 l3 -2 M113 88 l3 -2 M111 104 l3 -2 M106 120 l3 -2',
    role: 'ambient',
  },
]
/**
 * The manticore of House Lorch walking on a shield, no face: a lion's body
 * and mane, a bat's wing folded on its back and the scorpion's tail curled
 * over it, which is the accent.
 */
const MANTICORE: Stroke[] = [
  {
    d: 'M60 96 Q76 90 92 96 Q100 99 100 108 Q100 116 92 116 H66 Q58 114 56 106',
  },
  {
    d: 'M56 106 Q48 104 48 96 Q48 84 58 82 Q66 82 68 92 Q66 98 60 96 M48 90 q-6 2 -6 8 M52 83 q-2 -7 4 -9 M62 82 q4 -6 10 -3 M48 100 q-4 6 0 10',
    role: 'soft',
  },
  { d: 'M66 116 V132 M73 116 V132 M88 116 V132 M95 114 V130', role: 'soft' },
  { d: 'M72 94 Q76 80 88 78 Q86 86 90 92', role: 'soft' },
  {
    d: 'M100 106 Q116 98 112 74 Q108 56 92 56 Q84 58 86 66 L80 62 M86 66 L84 72',
    role: 'accent',
  },
]
/**
 * Amory Lorch: his shield with the manticore on it, which he rides behind
 * to the holdfast in Arya IV of A Clash of Kings (chapter 88). The show
 * gives him no arms of his own; the shield is the book's.
 */
const MANTICORE_SHIELD: Stroke[] = [
  ...HEATER_SHIELD,
  ...MANTICORE,
  shadow(80, 156, 38),
]

/** A man-at-arms' sword belt, the buckle in front and the holes along it. */
const SWORD_BELT: Stroke[] = [
  { d: 'M10 70 Q80 92 150 70 M10 84 Q80 106 150 84' },
  { d: 'M62 82 H80 V102 H62 Z M68 92 H80', role: 'soft' },
  {
    d: dots([
      [94, 94],
      [108, 92],
      [122, 89],
    ]),
    role: 'soft',
  },
  { d: 'M20 76 l5 -4 M136 84 l5 -4', role: 'ambient' },
]
/** His own sword's scabbard, hanging from a frog on the belt's left. */
const SCABBARD: Stroke[] = [
  { d: 'M30 82 L26 100 M40 86 L36 102 M24 100 H40 L34 150 Q32 156 28 150 Z' },
  { d: 'M30 106 L30 144', role: 'soft' },
]
/**
 * Polliver: his sword belt with Needle thrust through it beside his own
 * scabbard. He takes it from Arya in "What Is Dead May Never Die" (episode
 * 13) and in Arya V of A Clash of Kings (chapter 93), and wears it there in
 * "Garden of Bones" (episode 14). Needle's blade is the accent.
 */
const BELT_NEEDLE: Stroke[] = [
  ...SWORD_BELT,
  ...SCABBARD,
  ...moved(NEEDLE_SWORD, 'translate(28 10) rotate(28 84 100)'),
]

/** A wooden bucket with two iron bands, its far side hatched. */
const BUCKET: Stroke[] = [
  { d: `${ellipse(84, 70, 22, 6)} M62 70 L50 140 M106 70 L118 140` },
  { d: 'M50 140 Q84 152 118 140' },
  { d: 'M58 94 Q84 102 110 94 M54 120 Q84 130 114 120', role: 'soft' },
  { d: 'M74 76 L70 146 M94 76 L98 146', role: 'soft' },
  {
    d: 'M106 84 l4 -2 M110 104 l4 -2 M112 124 l4 -2 M115 136 l3 -2',
    role: 'ambient',
  },
  { d: 'M50 112 Q36 108 40 96', role: 'soft' },
]
/**
 * The Tickler: the bucket turned over a prisoner's chest with a rat under
 * it, its tail showing under the rim in the accent, and the torch held to
 * the wood, as he questions the prisoners at Harrenhal in "Garden of
 * Bones" (episode 14). The book gives him no bucket; the show is the
 * reference.
 */
const BUCKET_RAT: Stroke[] = [
  ...BUCKET,
  { d: 'M110 146 Q120 154 128 148 Q136 142 142 150', role: 'accent' },
  { d: 'M18 150 L40 104 M22 152 L44 106' },
  { d: 'M42 104 q-8 -10 0 -24 q2 8 6 4 q6 10 -2 20', role: 'soft' },
  shadow(84, 156, 48),
]

/**
 * Chiswyck: a shield with the three dogs of House Clegane, whose men he
 * rides with, passant and with no face, as the Mountain's men take Arya in
 * Arya V of A Clash of Kings (chapter 93). The book's alone. The dogs are
 * the accent.
 */
const DOGS_SHIELD: Stroke[] = [
  ...HEATER_SHIELD,
  {
    d: 'M88 62 Q88 70 84 72 H68 L64 66 H58 L56 69 L62 71 L66 77 H82 M63 66 L65 62 M68 72 L67 81 M72 77 L73 81 M80 77 L79 81 M84 72 L85 81 M88 90 Q88 98 84 100 H68 L64 94 H58 L56 97 L62 99 L66 105 H82 M63 94 L65 90 M68 100 L67 109 M72 105 L73 109 M80 105 L79 109 M84 100 L85 109 M86 116 Q86 124 82 126 H70 L66 120 H60 L58 123 L64 125 L68 131 H80 M65 120 L67 116 M70 126 L69 134 M74 131 L75 134 M78 131 L77 134 M82 126 L83 134',
    role: 'accent',
  },
  { d: 'M46 46 H106 V86 Q106 122 76 140 Q46 122 46 86 Z', role: 'soft' },
  shadow(80, 156, 38),
]

/**
 * Weese: his spotted bitch sitting side on, no face, a collar round her
 * neck, the bitch he threatens to feed Arya's tongue to in Arya VII of A
 * Clash of Kings (chapter 104). The book's alone. The spots are the accent.
 */
const SPOTTED_BITCH: Stroke[] = [
  {
    d: 'M34 74 Q34 66 44 64 Q52 56 62 56 Q72 56 76 66 Q82 80 84 94 Q106 102 112 124 Q116 142 106 150 H66',
  },
  { d: 'M34 74 Q38 80 48 80 Q60 82 64 94 L64 146 Q64 150 70 150' },
  { d: 'M60 58 Q72 60 70 76 Q62 78 60 68', role: 'soft' },
  { d: 'M76 100 V146 M106 150 Q100 128 88 126', role: 'soft' },
  { d: 'M110 142 Q126 144 134 150', role: 'soft' },
  { d: 'M58 86 Q70 92 80 84', role: 'soft' },
  {
    d: `${circle(94, 114, 4)} ${circle(100, 132, 3)} ${circle(86, 136, 3)} ${circle(72, 112, 3)}`,
    role: 'accent',
  },
  { d: 'M102 106 l5 -3 M106 118 l5 -3 M108 130 l5 -3', role: 'ambient' },
  shadow(88, 154, 40),
]

/** A helm shaped like a goat's head, side on, its back hatched. */
const GOAT_HELM: Stroke[] = [
  {
    d: 'M56 106 V78 Q56 52 80 50 Q100 52 104 74 L118 96 Q120 104 112 106 L104 108 V118 H56 Z',
  },
  { d: 'M64 78 Q50 52 26 50 Q40 58 44 72 Q46 80 56 84', role: 'accent' },
  { d: 'M90 54 Q104 40 122 40 Q110 48 104 62', role: 'soft' },
  { d: 'M84 76 H102 M112 106 Q112 118 104 124', role: 'soft' },
  { d: 'M60 112 l5 -3 M70 112 l5 -3 M60 100 l5 -3', role: 'ambient' },
]
/** The chain of linked coins from every land he has fought in. */
const COIN_CHAIN: Stroke[] = [
  {
    d: `M44 124 Q80 150 116 124 ${circle(52, 132, 4)} ${circle(64, 138, 4)} ${circle(80, 140, 4)} ${circle(96, 138, 4)} ${circle(108, 132, 4)}`,
    role: 'soft',
  },
]
/**
 * Vargo Hoat: his goat's-head helm, the horns in the accent, over the
 * chain of coins he wears, as Arya sees him come to Harrenhal in Arya VII
 * of A Clash of Kings (chapter 104). The book's alone.
 */
const GOAT_COINS: Stroke[] = [...GOAT_HELM, ...COIN_CHAIN, shadow(80, 154, 44)]

/** The first season's Riverlands and kingsroad cast (#1057), keyed by record id. */
export const RIVERLANDS_DRAWINGS = {
  'jason-mallister': EAGLE_HELM,
  'masha-heddle': MASHA,
  'kevan-lannister': LION,
  'addam-marbrand': BURNING_TREE,
  'podrick-payne': SPEAR_JUG,
  'stevron-frey': TOWERS_SHIELD,
  'edmure-tully': BOW_ARROW,
  'hoster-tully': TROUT,
  'brynden-tully': FISH_CLASP,
  'hot-pie': PIE,
  'lommy': DYE_VAT,
  'jaqen-hghar': TANKARD_CAGE,
  'rorge': CAGE_WAGON,
  'biter': CAGE_CORNER,
  'stiv': DAGGER_LEAVES,
  'wallen': TORN_CLOAK,
  // The second season's Riverlands, Harrenhal and Robb's war cast (#1472).
  'alton-lannister': TERMS_MANACLES,
  'cleos-frey': PEACE_BANNER,
  'talisa-maegyr': SAW_BANDAGE,
  'amory-lorch': MANTICORE_SHIELD,
  'polliver': BELT_NEEDLE,
  'tickler': BUCKET_RAT,
  'chiswyck': DOGS_SHIELD,
  'weese': SPOTTED_BITCH,
  'vargo-hoat': GOAT_COINS,
} satisfies Drawings

/** The Riverlands cast drawn again later in the story. */
export const riverlandsRedrawn: Redrawings = {
  'lommy': [
    // The vat on its side and the dye run out across the ground: Raff the
    // Sweetling kills him in Arya V of A Clash of Kings (chapter 93). The show
    // kills him (Polliver) in "What Is Dead May Never Die" (episode 13),
    // before it names him at episode 31, where his record opens dead and no
    // stage can sit, so the stage is the book's (#1457, as Mandon Moore's).
    {
      episode: 31,
      chapter: 93,
      source: 'chapter',
      value: [
        ...moved(DYE_VAT.slice(0, 2), 'rotate(-90 80 110)'),
        ...moved(DYE_VAT.slice(3, 4), 'rotate(-90 80 110)'),
        {
          d: 'M48 120 Q36 134 40 146 Q26 150 14 152 Q10 158 30 158 Q56 158 52 148 Q50 136 54 126',
          role: 'accent',
        },
        { d: 'M10 158 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'stevron-frey': [
    // The shield dropped, leaning on its point, a crack across it: he dies of a wound after Oxcross,
    // told in Bran V of A Clash of Kings (chapter 109). The book's alone;
    // episode 14, the morning after Oxcross, orders it.
    {
      episode: 14,
      chapter: 109,
      source: 'chapter',
      value: [
        ...moved(
          TOWERS_SHIELD.slice(0, 4),
          'rotate(-32 80 148) translate(6 4)',
        ),
        {
          d: 'M108 52 L100 66 L106 74 L96 90',
          role: 'soft',
          transform: 'rotate(-32 80 148) translate(6 4)',
        },
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'hoster-tully': [
    // The trout belly up on the water: he dies at Riverrun, in Catelyn IV of
    // A Storm of Swords (chapter 179). The show's death is his status when
    // his record opens, so this stage is the book's alone; episode 23 orders
    // it.
    {
      episode: 23,
      chapter: 179,
      source: 'chapter',
      value: [
        ...moved(TROUT.slice(0, 5), 'translate(0 214) scale(1 -1)'),
        ...TROUT.slice(5),
      ],
    },
  ],
  'rorge': [
    // The wagon overturned, wheels up: he is killed in Brienne VII of A Feast
    // for Crows (chapter 263, Brienne). The record is the book's alone
    // (#1457), so episode 37, where Arya kills him, only orders it.
    {
      episode: 37,
      chapter: 263,
      source: 'chapter',
      value: [
        ...moved(CAGE_WAGON.slice(0, 6), 'translate(0 196) scale(1 -1)'),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'biter': [
    // The cage empty, its chains fallen to the floor: his death is told in
    // Brienne VIII of A Feast for Crows (chapter 268, Gendry's spear). The
    // record is the book's alone (#1457), so episode 37, where the Hound
    // kills him, only orders it.
    {
      episode: 37,
      chapter: 268,
      source: 'chapter',
      value: [
        ...CAGE_CORNER.slice(0, 2),
        {
          d: `M90 70 v6 M70 76 v4 M44 150 Q60 144 72 150 ${ellipse(76, 151, 4.5, 3)} ${ellipse(86, 152, 3, 4.5)} ${ellipse(96, 153, 4.5, 3)}`,
          role: 'accent',
        },
        ...CAGE_CORNER.slice(4),
      ],
    },
  ],
  'kevan-lannister': [
    // The lion lying on its side, its mane spread on the ground and its legs
    // folded: he is killed in episode 60 (the wildfire under the Great Sept)
    // and in the epilogue of A Dance with Dragons (chapter 344, a crossbow
    // bolt).
    {
      episode: 60,
      chapter: 344,
      value: [
        { d: 'M56 128 Q70 112 96 114 Q122 114 132 132 Q136 144 128 150 H62' },
        { d: 'M56 128 Q44 126 36 134 Q30 142 36 150 H62' },
        {
          d: 'M40 130 q-8 -2 -10 4 M48 126 q-2 -8 4 -10 M58 124 q4 -8 10 -6 M34 140 q-8 0 -10 6 M64 132 q8 2 8 10 M30 150 q-6 -4 -12 0',
          role: 'accent',
        },
        { d: 'M72 150 Q70 140 78 138 Q88 140 88 150', role: 'soft' },
        { d: 'M116 126 Q102 128 102 140 Q102 148 92 150', role: 'soft' },
        { d: 'M132 140 Q144 150 152 148 Q155 145 151 142', role: 'soft' },
        { d: 'M90 120 l6 -3 M104 120 l6 -3 M116 124 l6 -3', role: 'ambient' },
        { d: 'M10 154 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'podrick-payne': [
    // Tyrion's axe, which Bronn brings him from Tyrion when he rides out with
    // Brienne in "Oathkeeper" (episode 34). The show's alone: the book's Pod
    // has had an axe since A Game of Thrones and joins Brienne without this
    // gift, in Brienne II of A Feast for Crows (chapter 235), which orders it.
    {
      episode: 34,
      chapter: 235,
      source: 'episode',
      value: [...TYRION_AXE, shadow(80, 158, 46)],
    },
  ],
  'brynden-tully': [
    // The black fish clasp fallen on the ground beside his slumped cloak, its
    // pin come away: he dies fighting at Riverrun in "No One" (episode 58).
    // The show's alone: the book's Blackfish escapes the siege alive, and
    // Jaime VI of A Feast for Crows (chapter 264), the siege, orders it.
    {
      episode: 58,
      chapter: 264,
      source: 'episode',
      value: [
        { d: 'M8 158 Q10 138 22 128 Q34 118 44 124 Q54 134 54 158' },
        { d: 'M22 128 Q28 140 24 156 M36 121 Q40 138 38 154', role: 'soft' },
        { d: 'M45 134 l4 -3 M48 146 l4 -3', role: 'ambient' },
        ...moved(BLACK_FISH, 'translate(6 66)'),
        ...moved(CLASP_PIN, 'translate(56 58) rotate(90 80 95)'),
        { d: 'M8 158 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'jaqen-hghar': [
    // The cage empty, its door swung open, and the iron coin he gives Arya,
    // its rim marked: he says "valar morghulis" and changes his face in
    // "Valar Morghulis" (episode 20) and in Arya IX of A Clash of Kings
    // (chapter 121).
    {
      episode: 20,
      chapter: 121,
      value: [
        CAGE_BOX,
        { d: 'M50 40 V150 M110 40 V150 M70 40 V96 M90 40 V96', role: 'soft' },
        CAGE_RAIL,
        { d: 'M70 96 L52 104 V158 L70 150' },
        { d: 'M61 100 V154', role: 'soft' },
        { d: circle(90, 124, 10), role: 'accent' },
        { d: circle(90, 124, 6.5), role: 'soft' },
        {
          d: 'M132 60 l6 -4 M132 80 l6 -4 M132 100 l6 -4 M132 120 l6 -4',
          role: 'ambient',
        },
        shadow(84, 156, 58),
      ],
    },
  ],
  'masha-heddle': [
    // The jug on its side and the mugs knocked down, the ale run out: Tywin's
    // men hang her, told in Tyrion VII (chapter 57). The book's alone;
    // episode 8 orders it.
    {
      episode: 8,
      chapter: 57,
      source: 'chapter',
      value: [
        ...moved(ALE_JUG, 'translate(-6 46) rotate(-86 64 110)'),
        ...moved(MUG, 'translate(110 152) rotate(-90)'),
        ...moved(MUG, 'translate(118 138) rotate(20)'),
        {
          d: 'M22 154 Q40 146 62 152 Q72 158 56 160 Q36 162 22 154 Z',
          role: 'accent',
        },
        { d: 'M10 158 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'alton-lannister': [
    // The terms knocked askew and the cuffs fallen flat, empty, the chain
    // slack between them: Jaime kills him in their cell in "A Man Without
    // Honor" (episode 17). The show's alone; chapter 113, where the books'
    // Jaime tries to escape, only orders it.
    {
      episode: 17,
      chapter: 113,
      source: 'episode',
      value: [
        ...moved(TERMS, 'translate(0 -22) rotate(-6 80 130)'),
        { d: `${ellipse(28, 150, 14, 5)} ${ellipse(132, 150, 14, 5)}` },
        {
          d: `${ellipse(28, 150, 8, 2.5)} ${ellipse(132, 150, 8, 2.5)} M42 151 Q62 157 80 154 Q100 151 118 152`,
          role: 'soft',
        },
        { d: 'M8 158 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'cleos-frey': [
    // The staff down on the ground and the banner fallen across it: outlaws
    // ambush him on the road to King's Landing and he dies, in Jaime III of
    // A Storm of Swords (chapter 165). The record is the book's alone;
    // episode 22, where the show's Jaime and Brienne are taken on the same
    // road, only orders it.
    {
      episode: 22,
      chapter: 165,
      source: 'chapter',
      value: [
        { d: 'M12 146 L134 128 M13 152 L135 134' },
        { d: 'M134 128 L148 128 L135 134 Z' },
        {
          d: 'M66 139 Q80 150 64 158 Q100 164 140 156 Q124 146 128 130',
          role: 'accent',
        },
        { d: 'M84 136 Q92 148 84 159 M104 133 Q112 146 106 161', role: 'soft' },
        { d: 'M118 142 l5 -3 M122 152 l5 -3', role: 'ambient' },
        { d: 'M8 158 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'talisa-maegyr': [
    // The saw dropped flat and the bandage run out across the ground: she
    // is killed at the Red Wedding in "The Rains of Castamere" (episode 29).
    // The show's alone; Catelyn VII of A Storm of Swords (chapter 195), the
    // books' wedding, only orders it.
    {
      episode: 29,
      chapter: 195,
      source: 'episode',
      value: [
        ...moved(BONE_SAW, 'translate(0 36) rotate(-8 80 90)'),
        {
          d: `${ellipse(130, 148, 5, 8)} M130 140 H140 M130 156 H140 A5 8 0 0 0 140 140`,
        },
        {
          d: 'M126 152 Q96 158 66 152 Q42 147 16 152 M16 152 V157 M126 157 Q96 163 66 157 Q42 152 16 157',
          role: 'soft',
        },
        { d: 'M8 162 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'amory-lorch': [
    // The shield fallen flat on its back, the manticore still on it: he is
    // thrown to the bear in Harrenhal's pit after the castle falls, in Arya
    // IX of A Clash of Kings (chapter 121). The show kills him in the
    // episode that names him, so his show record opens dead and this stage
    // is the book's; episode 16 only orders it (as Lommy's, #1457).
    {
      episode: 16,
      chapter: 121,
      source: 'chapter',
      value: [
        ...moved(
          [...HEATER_SHIELD.slice(0, 1), ...MANTICORE],
          'translate(0 150) scale(1 0.4) translate(0 -140)',
        ),
        { d: 'M42 128 V132 Q50 146 76 156 Q102 146 110 132 V128' },
        { d: 'M100 146 l5 -3 M90 152 l5 -3', role: 'ambient' },
        { d: 'M8 160 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'polliver': [
    // The belt fallen on the ground with his own scabbard still on it, and
    // Needle gone from it: he dies at the inn at the crossroads, where Arya
    // takes Needle back, in "Two Swords" (episode 31) and in Arya XIII of A
    // Storm of Swords (chapter 218). The buckle takes the accent.
    {
      episode: 31,
      chapter: 218,
      value: [
        {
          d: 'M10 140 Q50 130 90 136 Q130 142 150 134 M10 148 Q50 138 90 144 Q130 150 150 142',
        },
        { d: 'M40 131 H58 V147 H40 Z M46 139 H58', role: 'accent' },
        {
          d: dots([
            [76, 140],
            [96, 142],
            [116, 144],
          ]),
          role: 'soft',
        },
        ...moved(SCABBARD, 'translate(50 4) rotate(-84 32 119)'),
        { d: 'M24 142 l5 -3 M132 144 l5 -3', role: 'ambient' },
        { d: 'M6 158 H154', role: 'ambient', dashed: true },
      ],
    },
  ],
  'tickler': [
    // The bucket on its side, empty, its mouth to the viewer in the accent,
    // and the torch out on the ground: Arya kills him at the inn at the
    // crossroads, in Arya XIII of A Storm of Swords (chapter 218). The show
    // kills him in the episode that names him, so his show record opens
    // dead and this stage is the book's; episode 31, the show's inn, only
    // orders it.
    {
      episode: 31,
      chapter: 218,
      source: 'chapter',
      value: [
        ...moved(
          [
            ...BUCKET.slice(0, 1),
            ...BUCKET.slice(2, 5),
            { d: ellipse(84, 140, 34, 8), role: 'accent' },
          ],
          'translate(8 10) rotate(-90 84 105)',
        ),
        {
          d: 'M10 152 L52 146 M10 157 L52 151 M52 146 Q58 148 52 151',
          role: 'soft',
        },
        { d: 'M6 160 H154', role: 'ambient', dashed: true },
      ],
    },
  ],
  'chiswyck': [
    // The shield fallen flat on its back, the dogs still on it: Arya gives
    // Jaqen his name, and three days later he falls from the wallwalk, in
    // Arya VII of A Clash of Kings (chapter 104). The record is the book's
    // alone; episode 15 only orders it.
    {
      episode: 15,
      chapter: 104,
      source: 'chapter',
      value: [
        ...moved(
          [...HEATER_SHIELD.slice(0, 1), ...DOGS_SHIELD.slice(3, 5)],
          'translate(0 150) scale(1 0.4) translate(0 -140)',
        ),
        { d: 'M42 128 V132 Q50 146 76 156 Q102 146 110 132 V128' },
        { d: 'M100 146 l5 -3 M90 152 l5 -3', role: 'ambient' },
        { d: 'M8 160 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'weese': [
    // The spotted bitch lying on her side, still, the spots still the
    // accent: Arya gives Jaqen his name, and Weese is found dead with his
    // own dog on him, in Arya VIII of A Clash of Kings (chapter 112). The
    // record is the book's alone; episode 16 only orders it. How he dies is
    // not drawn.
    {
      episode: 16,
      chapter: 112,
      source: 'chapter',
      value: [
        {
          d: 'M14 146 Q14 138 24 136 L36 134 Q42 126 52 128 Q66 120 92 120 Q120 122 128 138 Q132 150 120 152 H22 Q14 152 14 146',
        },
        { d: 'M44 128 Q56 130 54 144 Q46 146 44 136', role: 'soft' },
        {
          d: 'M60 152 L52 158 M74 152 L70 159 M112 152 L118 159 M124 148 L134 154',
          role: 'soft',
        },
        { d: 'M128 136 Q140 132 150 140', role: 'soft' },
        {
          d: `${circle(80, 134, 4)} ${circle(98, 140, 3)} ${circle(110, 132, 3)} ${circle(66, 142, 3)}`,
          role: 'accent',
        },
        { d: 'M92 146 l5 -3 M104 148 l5 -3 M116 146 l5 -3', role: 'ambient' },
        { d: 'M8 160 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'vargo-hoat': [
    // The goat's-head helm down on its side and the chain of coins slack
    // beside it: Gregor Clegane takes Harrenhal back and kills him slowly,
    // as Raff and Shitmouth tell Jaime in Jaime III of A Feast for Crows
    // (chapter 253). The record is the book's alone; episode 38, the
    // show's duel Gregor leaves Harrenhal for, only orders it. How he dies
    // is not drawn.
    {
      episode: 38,
      chapter: 253,
      source: 'chapter',
      value: [
        ...moved(GOAT_HELM, 'translate(-12 8) rotate(90 80 100)'),
        {
          d: `M10 154 Q30 148 52 154 ${circle(18, 152, 3.5)} ${circle(31, 150, 3.5)} ${circle(44, 151, 3.5)}`,
          role: 'soft',
        },
        { d: 'M8 160 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
}
