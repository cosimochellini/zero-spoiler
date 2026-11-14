import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

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
 * Podrick Payne: Tyrion's battle-axe and half-helm, carried by the squire
 * Kevan gives him before the battle in Tyrion VIII (chapter 63); the show
 * brings him in episode 12. The accent is the axe's blade.
 */
const AXE_HELM: Stroke[] = [
  { d: 'M44 152 L112 40 M50 154 L117 43' },
  { d: 'M104 46 Q88 40 82 56 Q90 72 108 66 L112 56', role: 'accent' },
  { d: 'M117 43 L124 34 L128 40 L120 48' },
  { d: 'M50 144 l6 4 M54 138 l6 4', role: 'soft' },
  { d: 'M90 150 V128 Q90 110 110 110 Q130 110 130 128 V150' },
  { d: 'M110 110 V150 M88 150 H132', role: 'soft' },
  { d: 'M120 122 l5 -3 M122 134 l5 -3', role: 'ambient' },
  shadow(90, 158, 46),
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

/**
 * Brynden Tully: the black fish clasp at the throat of his cloak, hatched
 * because it is black, for the Blackfish who meets Catelyn at the Bloody
 * Gate in Catelyn VI (chapter 35) and takes the bow at the funeral in
 * episode 23. The accent is the pin.
 */
const FISH_CLASP: Stroke[] = [
  {
    d: 'M30 56 Q60 62 70 84 Q66 118 60 152 M130 56 Q100 62 90 84 Q94 118 100 152',
  },
  { d: 'M30 56 Q24 104 26 150 M130 56 Q136 104 134 150', role: 'soft' },
  { d: 'M52 76 Q68 58 94 64 Q104 68 106 76 Q98 84 90 86 Q68 92 52 76 Z' },
  { d: 'M106 76 L116 68 L114 78 L118 86 L106 80' },
  {
    d: 'M60 76 l5 -4 M68 78 l6 -5 M76 80 l6 -6 M84 80 l6 -6 M92 78 l5 -5',
    role: 'ambient',
  },
  { d: `${circle(80, 98, 5)} M80 86 V93`, role: 'accent' },
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
 * dyer's apprentice with green hands among Yoren's recruits in episode 10
 * and in A Clash of Kings (chapter 75). The accent is the dye.
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

/**
 * Jaqen H'ghar: the cage on Yoren's wagon seen from the front, its door
 * padlocked, for the prisoner who asks Arya for water in episode 12 and in
 * A Clash of Kings (chapter 79). The far side is hatched; the accent is
 * the padlock.
 */
const CAGE_FRONT: Stroke[] = [
  {
    d: 'M30 40 H130 V150 H30 Z M30 40 L40 30 H140 L130 40 M130 150 L140 140 V30',
  },
  { d: 'M50 40 V150 M70 40 V150 M90 40 V150 M110 40 V150', role: 'soft' },
  { d: 'M30 96 H130', role: 'soft' },
  { d: 'M82 100 H98 V114 H82 Z M85 100 V94 Q90 88 95 94 V100', role: 'accent' },
  {
    d: 'M132 60 l6 -4 M132 80 l6 -4 M132 100 l6 -4 M132 120 l6 -4',
    role: 'ambient',
  },
  shadow(84, 156, 58),
]
/**
 * Rorge: the cage on its wagon side on, wheels and shaft, for the prisoner
 * who demands beer and threatens Arya in episode 12 and in A Clash of Kings
 * (chapter 79). The accent is the shaft.
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
 * for the mute prisoner chained there in episode 12 and in A Clash of
 * Kings (chapter 79). The accent is the chains.
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

/** The first season's Riverlands and kingsroad cast (#1057), keyed by record id. */
export const RIVERLANDS_DRAWINGS = {
  'jason-mallister': EAGLE_HELM,
  'masha-heddle': MASHA,
  'kevan-lannister': LION,
  'addam-marbrand': BURNING_TREE,
  'podrick-payne': AXE_HELM,
  'stevron-frey': TOWERS_SHIELD,
  'edmure-tully': BOW_ARROW,
  'hoster-tully': TROUT,
  'brynden-tully': FISH_CLASP,
  'hot-pie': PIE,
  'lommy': DYE_VAT,
  'jaqen-hghar': CAGE_FRONT,
  'rorge': CAGE_WAGON,
  'biter': CAGE_CORNER,
  'stiv': DAGGER_LEAVES,
  'wallen': TORN_CLOAK,
} satisfies Drawings

/** The Riverlands cast drawn again later in the story. */
export const riverlandsRedrawn: Redrawings = {
  'lommy': [
    // The vat on its side and the dye run out across the ground: Lannister
    // men kill him, in episode 13 (Polliver) and in Arya V of A Clash of
    // Kings (chapter 93, Raff the Sweetling).
    {
      episode: 13,
      chapter: 93,
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
    // The shield fallen flat on the ground: he dies of a wound after Oxcross,
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
    // The wagon tipped over, a wheel off and the shaft on the ground: he is
    // killed in episode 37 (Arya) and in Brienne VII of A Feast for Crows
    // (chapter 263, Brienne).
    {
      episode: 37,
      chapter: 263,
      value: [
        ...moved(CAGE_WAGON.slice(0, 6), 'translate(0 196) scale(1 -1)'),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'biter': [
    // The cage corner thrown down and its chains slack on the ground: he is
    // killed in episode 37 (the Hound), and his death is told in Brienne VIII
    // of A Feast for Crows (chapter 268, Gendry's spear).
    {
      episode: 37,
      chapter: 268,
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
    // The lion fallen on its side: he is killed in episode 60 (the wildfire
    // under the Great Sept) and in the epilogue of A Dance with Dragons
    // (chapter 344, a crossbow bolt).
    {
      episode: 60,
      chapter: 344,
      value: [
        ...moved(LION.slice(0, 6), 'translate(0 202) scale(1 -1)'),
        { d: 'M10 154 H150', role: 'ambient', dashed: true },
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
}
