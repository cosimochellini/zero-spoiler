import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow, star } from '~/lib/svg/primitives'

/** The second of a pair: the first, mirrored about x 80. */
const MIRRORED = 'matrix(-1 0 0 1 160 0)'

/**
 * A prince's object made small and set at the foot of the box, so the
 * Guardian Spirit Beast the story shows beside the prince fits above it.
 */
const BESIDE_THE_BEAST = 'translate(80 196) scale(0.56) translate(-80 -196)'

/**
 * Benjamin's military puffer jacket from the front, the quilted channels
 * across it, the stand collar and the zip, the dark belt hatched and its
 * buckle in tint: the standard outfit of his private army.
 */
const BENJAMIN_JACKET: Stroke[] = [
  {
    d: 'M42 58 Q58 48 68 46 L80 56 L92 46 Q102 48 118 58 L126 132 Q80 142 34 132 Z',
  },
  { d: 'M66 48 L67 36 Q80 31 93 36 L94 48' },
  { d: 'M80 56 V136', role: 'soft' },
  {
    d: 'M39 76 Q80 84 121 76 M37 94 Q80 102 123 94 M35 112 Q80 120 125 112',
    role: 'soft',
  },
  {
    d: 'M42 58 C30 72 26 98 26 126 L36 128 M118 58 C130 72 134 98 134 126 L124 128',
  },
  { d: 'M34 128 Q80 138 126 128 V140 Q80 150 34 140 Z' },
  {
    d: 'M40 131 l-4 8 M50 133 l-4 9 M60 134 l-4 10 M98 134 l-4 10 M108 133 l-4 9 M118 131 l-4 8',
    role: 'ambient',
  },
  { d: 'M72 132 H88 V146 H72 Z', role: 'accent' },
  { d: 'M110 64 l6 -3 M114 84 l6 -3 M116 104 l6 -3', role: 'ambient' },
]

/**
 * Camilla's hair from behind: the elaborate updo with its tiara-shaped
 * ornament in tint, and the locks falling down her back.
 */
const CAMILLA_UPDO: Stroke[] = [
  { d: 'M52 104 C48 70 60 50 80 50 C100 50 112 70 108 104' },
  { d: 'M60 58 C52 40 66 30 80 36 C94 30 108 40 100 58' },
  { d: 'M70 40 C74 46 74 52 70 58 M90 40 C86 46 86 52 90 58', role: 'soft' },
  {
    d: 'M60 42 L64 26 L72 36 L80 18 L88 36 L96 26 L100 42 Q80 50 60 42 Z',
    role: 'accent',
  },
  {
    d: 'M64 100 C62 122 68 140 62 160 M80 104 C80 128 84 144 78 166 M96 100 C98 122 92 140 98 160',
    role: 'soft',
  },
  { d: 'M30 172 C34 136 50 118 64 112 M130 172 C126 136 110 118 96 112' },
  { d: 'M70 66 C72 80 72 92 70 104 M90 66 C88 80 88 92 90 104', role: 'soft' },
]

/**
 * Zhang Lei's hands joined inside the large sleeves of his robe, the
 * crossed collar above them and the cuffs where the sleeves meet in tint:
 * how he stands at the eve festival.
 */
const ZHANG_LEI_SLEEVE: Stroke[] = [
  { d: 'M18 132 C20 102 40 84 66 88 L80 118 C60 134 34 142 18 132 Z' },
  {
    d: 'M30 112 C40 104 52 100 62 100 M26 124 C38 118 52 114 66 114',
    role: 'soft',
  },
]
const ZHANG_LEI: Stroke[] = [
  ...ZHANG_LEI_SLEEVE,
  ...moved(ZHANG_LEI_SLEEVE, MIRRORED),
  { d: 'M30 92 C36 62 52 44 64 38 L80 70 L96 38 C108 44 124 62 130 92' },
  { d: 'M64 38 C70 34 90 34 96 38 M80 70 V88', role: 'soft' },
  {
    d: `${ellipse(72, 118, 9, 13)} ${ellipse(88, 118, 9, 13)}`,
    role: 'accent',
  },
  { d: 'M128 104 l6 -4 M132 116 l6 -4 M134 128 l5 -3', role: 'ambient' },
  shadow(80, 160, 54),
]

/**
 * The Scarlet Eyes in a glass jar: two orbs in tint in the liquid, the lid
 * and its rim, the far side of the glass hatched.
 */
const SCARLET_EYES_JAR: Stroke[] = [
  { d: 'M50 70 V150 Q50 158 58 158 H102 Q110 158 110 150 V70' },
  { d: ellipse(80, 70, 30, 7) },
  { d: 'M48 70 V60 M112 70 V60' },
  { d: ellipse(80, 60, 32, 7) },
  { d: ellipse(80, 86, 30, 6), role: 'soft' },
  { d: `${circle(68, 122, 12)} ${circle(94, 114, 12)}`, role: 'accent' },
  { d: 'M57 94 V146', role: 'soft' },
  {
    d: 'M104 98 l4 -3 M104 112 l4 -3 M104 126 l4 -3 M104 140 l4 -3',
    role: 'ambient',
  },
]

/**
 * Tubeppa's eyeglasses folded in 3/4, the rims in tint, and one of her
 * earrings beside them.
 */
const TUBEPPA_GLASSES: Stroke[] = [
  {
    d: `${ellipse(56, 104, 22, 17)} ${ellipse(106, 100, 19, 15)}`,
    role: 'accent',
  },
  { d: 'M78 102 Q82 95 87 99' },
  { d: 'M34 102 L26 92 L72 82 M125 98 L128 90 L84 80' },
  { d: 'M44 96 Q50 92 56 93 M96 92 Q102 89 108 90', role: 'soft' },
  { d: `${circle(132, 118, 7)} M132 111 V102 Q136 100 136 96`, role: 'soft' },
  { d: 'M62 116 l6 -4 M110 110 l5 -3', role: 'ambient' },
  shadow(78, 130, 50),
]

/** One copy of the Book of Tyson, closed, in 3/4: the cover, spine and pages. */
const TYSON_BOOK: Stroke[] = [
  { d: 'M30 120 L96 110 L130 124 L64 136 Z' },
  { d: 'M30 120 V134 L64 150 V136 M64 150 L130 138 V124' },
  { d: 'M68 141 L127 130 M68 145 L127 134', role: 'soft' },
]

/**
 * The Book of Tyson: three copies stacked, the top one's spine in tint, the
 * books she hands out to her guards.
 */
const TYSON_BOOKS: Stroke[] = [
  ...TYSON_BOOK,
  ...moved(TYSON_BOOK, 'translate(2 -24)'),
  ...moved(TYSON_BOOK, 'translate(-2 -48)'),
  { d: 'M28 72 V86 L62 102 V88 Z', role: 'accent' },
  { d: 'M34 128 l-4 6 M34 104 l-4 6', role: 'ambient' },
  shadow(80, 160, 54),
]

/**
 * Luzurus's head from behind: the blond hair combed back in rows, the two
 * large puffs at the sides in tint, the collar beneath.
 */
const LUZURUS_HAIR: Stroke[] = [
  { d: 'M54 104 C52 70 62 46 80 46 C98 46 108 70 106 104' },
  {
    d: 'M68 50 C64 66 64 86 66 104 M80 46 V106 M92 50 C96 66 96 86 94 104',
    role: 'soft',
  },
  { d: `${circle(46, 94, 13)} ${circle(114, 94, 13)}`, role: 'accent' },
  { d: 'M41 88 Q46 84 51 88 M109 88 Q114 84 119 88', role: 'soft' },
  { d: 'M66 104 V122 M94 104 V122' },
  { d: 'M26 166 C30 136 48 124 66 122 M134 166 C130 136 112 124 94 122' },
  { d: 'M66 122 Q80 130 94 122', role: 'soft' },
]

/**
 * Salé-salé's right ear with its circular piercings in tint, the short
 * blond hair above it.
 */
const SALE_SALE_EAR: Stroke[] = [
  {
    d: 'M74 56 C100 44 124 62 120 92 C118 110 106 116 102 132 C98 148 84 152 76 142',
  },
  { d: 'M84 70 C100 64 110 76 106 92 C104 102 96 106 94 116', role: 'soft' },
  { d: 'M90 86 C96 84 98 92 94 96', role: 'soft' },
  {
    d: `${circle(112, 64, 6)} ${circle(122, 82, 6)} ${circle(84, 154, 7)}`,
    role: 'accent',
  },
  { d: 'M58 34 C66 30 76 30 84 34 M54 46 C62 40 72 40 80 44', role: 'soft' },
  { d: 'M60 60 l-6 6 M60 80 l-6 6 M62 100 l-6 6', role: 'ambient' },
]

/** Salé-salé's first drawing: the ear and its shadow. */
const SALE_SALE: Stroke[] = [...SALE_SALE_EAR, shadow(88, 172, 36)]

/**
 * Momoze's knitting in her rocking chair: the seat and back, the curved
 * rockers, the two needles crossed through the piece in tint and the ball
 * of wool on the seat.
 */
const MOMOZE_CHAIR: Stroke[] = [
  { d: 'M44 50 V118 M104 50 V118 M44 56 H104 M44 74 H104' },
  { d: 'M40 118 H112 L108 128 H44 Z' },
  { d: 'M48 128 L44 158 M104 128 L110 158' },
  { d: 'M22 154 Q78 172 134 150', role: 'soft' },
  { d: 'M108 60 l5 -3 M108 76 l5 -3 M108 92 l5 -3', role: 'ambient' },
  shadow(78, 168, 50),
]
const MOMOZE_KNITTING: Stroke[] = [
  ...MOMOZE_CHAIR,
  { d: 'M60 86 V112 M88 86 V112 M60 99 H88', role: 'soft' },
  { d: 'M52 82 L96 116 M96 82 L52 116', role: 'accent' },
  {
    d: `${circle(98, 108, 9)} M92 104 Q98 100 104 106 M91 110 Q98 106 105 112`,
    role: 'soft',
  },
]

/**
 * Marayam's hamster cage, which he carries even to formal events: the
 * domed top and its handle in tint, the bars, the tray, and the round
 * hamster inside, seen from behind.
 */
const MARAYAM_CAGE: Stroke[] = [
  { d: 'M36 150 V92 C36 60 124 60 124 92 V150' },
  { d: 'M30 150 H130 V158 H30 Z' },
  { d: 'M70 52 C70 40 90 40 90 52', role: 'accent' },
  {
    d: 'M52 150 V74 M68 150 V66 M80 150 V64 M92 150 V66 M108 150 V74 M36 112 H124',
    role: 'soft',
  },
  { d: 'M72 148 C70 132 76 124 86 124 C96 124 100 134 98 148 Z' },
  { d: 'M78 126 Q78 120 82 122 M90 124 Q92 118 94 123', role: 'soft' },
  { d: 'M118 88 l5 -3 M118 104 l5 -3 M118 124 l5 -3', role: 'ambient' },
  shadow(80, 166, 52),
]

/**
 * A pistol in 3/4, the trigger guard in tint and the grip hatched: the gun
 * Halkenburg holds on friendly soldiers to stop his siblings dying.
 */
const HALKENBURG_PISTOL: Stroke[] = [
  { d: 'M28 92 H126 L132 98 V112 H28 Z' },
  { d: 'M28 104 H122 M34 92 V112', role: 'soft' },
  { d: 'M92 112 L88 160 H116 L118 112' },
  { d: 'M72 112 Q70 130 84 130 H90', role: 'accent' },
  { d: 'M78 112 V122', role: 'soft' },
  { d: 'M94 124 l18 -8 M93 136 l20 -9 M92 148 l22 -10', role: 'ambient' },
  { d: 'M108 86 V92 M118 88 V92', role: 'soft' },
  shadow(84, 172, 44),
]

/**
 * A queen's portrait in its frame, as the overview of the princes with
 * their mothers shows Unma and Tang Zhao Li: the frame and its inner edge,
 * the hanging cord in tint. Each queen's own outline sits inside it.
 */
const PORTRAIT: Stroke[] = [
  { d: 'M36 40 H124 V160 H36 Z' },
  { d: 'M44 48 H116 V152 H44 Z', role: 'soft' },
  { d: 'M60 40 L80 22 L100 40', role: 'accent' },
  {
    d: 'M120 52 l4 -3 M120 80 l4 -3 M120 108 l4 -3 M120 136 l4 -3',
    role: 'ambient',
  },
]

export const KAKIN_PHASE_ONE_DRAWINGS = {
  // The world as the Dark Continent holds it: the vast land in a ring round
  // Lake Mobius, its coast in tint and its land hatched, and in the middle
  // of the lake the small islands of the known world. The king announces
  // the voyage there in chapter 340.
  'dark-continent': [
    {
      d: 'M10 100 C8 56 44 20 82 18 C122 18 154 50 152 98 C150 146 116 180 78 180 C38 180 12 146 10 100 Z',
      role: 'accent',
    },
    {
      d: 'M34 100 C34 70 54 46 82 46 C110 46 128 70 126 100 C124 128 104 152 80 152 C54 152 34 130 34 100 Z',
    },
    {
      d: 'M18 84 l14 -10 M20 112 l12 -8 M26 138 l16 -12 M42 166 l16 -12 M100 170 l20 -14 M128 150 l16 -12 M138 116 l10 -8 M136 78 l10 -8 M112 34 l14 -10 M66 26 l18 -12 M36 50 l14 -10',
      role: 'ambient',
    },
    {
      d: 'M60 94 C58 80 70 72 78 78 C84 70 96 74 96 84 C104 88 102 100 94 102 C92 112 78 114 74 106 C64 108 58 102 60 94 Z M100 110 C104 106 110 108 108 114 C106 118 100 116 100 110 Z',
    },
    {
      d: 'M44 74 q6 -4 12 0 M106 128 q6 -4 12 0 M48 124 q6 -4 12 0 M104 62 q6 -4 12 0',
      role: 'ambient',
    },
  ],

  // Beyond from behind: his long black hair tied with a band in tint and
  // hatched dark, down the back of the robe of an ancient commander, the
  // armour plates he wears beneath it showing at the shoulders. He is
  // shown in the king's video in chapter 340. No scar: it is on his face.
  'beyond-netero': [
    { d: 'M62 82 C58 62 66 44 80 44 C94 44 102 62 98 82' },
    { d: 'M70 82 C68 106 72 132 78 156 M90 82 C92 106 88 132 82 156' },
    { d: 'M71 94 Q80 98 89 94 M71 100 Q80 104 89 100', role: 'accent' },
    {
      d: 'M68 54 l10 -6 M66 66 l16 -10 M66 78 l20 -12 M74 112 l8 -5 M75 126 l8 -5 M77 140 l6 -4',
      role: 'ambient',
    },
    { d: 'M28 172 C28 128 40 100 62 90 M132 172 C132 128 120 100 98 90' },
    {
      d: 'M36 120 Q48 108 62 106 M34 134 Q46 122 62 120 M124 120 Q112 108 98 106 M126 134 Q114 122 98 120',
      role: 'soft',
    },
    { d: 'M28 172 H132', role: 'soft' },
    { d: 'M44 150 V172 M116 150 V172', role: 'soft' },
    shadow(80, 182, 56),
  ],

  // Golem's machine from the front: the boxy body with its small black
  // window hatched, the seat at its shoulder, the right arm, and in tint
  // the heavy gun that stands for its left arm, which Golem conjures. It is
  // introduced to Ging in chapter 347. Nobody inside is drawn.
  'golem': [
    {
      d: 'M44 72 Q44 50 64 48 H96 Q116 50 116 72 V128 Q116 136 108 136 H52 Q44 136 44 128 Z',
    },
    { d: 'M70 62 H90 V76 H70 Z' },
    { d: 'M72 74 l6 -10 M78 76 l8 -14 M84 76 l6 -10', role: 'ambient' },
    { d: 'M46 48 V38 H60 V48', role: 'soft' },
    {
      d: 'M44 80 C32 84 28 100 30 118 M44 94 C40 98 38 106 40 118 M28 118 H42 V130 H28 Z',
    },
    { d: 'M112 82 H152 V100 H112 M120 100 V112 H132 V100', role: 'accent' },
    { d: ellipse(152, 91, 3, 9), role: 'soft' },
    { d: 'M44 104 H116 M80 104 V136', role: 'soft' },
    { d: 'M56 136 V164 H74 V136 M86 136 V164 H104 V136' },
    { d: 'M52 164 H78 M82 164 H108', role: 'soft' },
    { d: 'M108 112 l5 -4 M108 124 l5 -4 M98 156 l5 -4', role: 'ambient' },
    shadow(80, 172, 50),
  ],

  // Benjamin's military puffer jacket, belt and buckle: the outfit of his
  // private army, which he is most often seen in from chapter 358.
  'benjamin-hui-guo-rou': [...BENJAMIN_JACKET, shadow(80, 162, 54)],

  // Camilla's elaborate updo and its tiara-shaped ornament, as the roster of
  // princes shows her in chapter 349.
  'camilla-hui-guo-rou': [...CAMILLA_UPDO, shadow(80, 182, 50)],

  // Zhang Lei's hands joined in the large sleeves of his robe, as he stands
  // with his siblings at the eve festival, chapter 358.
  'zhang-lei-hui-guo-rou': ZHANG_LEI,

  // The Scarlet Eyes in a jar: Mizaistom shows Kurapika that the Fourth
  // Prince owns a collection of them, chapter 343. Two orbs, no iris.
  'tserriednich-hui-guo-rou': [...SCARLET_EYES_JAR, shadow(80, 166, 40)],

  // Tubeppa's eyeglasses and an earring, which she wears from the roster,
  // chapter 349.
  'tubeppa-hui-guo-rou': TUBEPPA_GLASSES,

  // The Book of Tyson, the book of love she hands to her guards on the
  // voyage. No title on the cover.
  'tyson-hui-guo-rou': TYSON_BOOKS,

  // Luzurus's combed-back rows and the two puffs at his sides, as he stands
  // with his siblings from chapter 349.
  'luzurus-hui-guo-rou': [...LUZURUS_HAIR, shadow(80, 176, 50)],

  // Salé-salé's right ear and its circular piercings, from the roster of
  // chapter 349.
  'sale-sale-hui-guo-rou': SALE_SALE,

  // A pistol in 3/4, the trigger guard in tint and the grip hatched: the
  // gun Halkenburg holds on friendly soldiers to stop his siblings dying,
  // later in the arc. His bow is not drawn: it is his ability.
  'halkenburg-hui-guo-rou': HALKENBURG_PISTOL,

  // Kacho's headphones in 3/4, the band and its cushion in tint: she reads
  // with music in her ears while her mother is questioned.
  'kacho-hui-guo-rou': [
    { d: 'M38 116 C34 60 126 60 122 116', role: 'accent' },
    { d: 'M46 116 C44 72 116 72 114 116' },
    { d: 'M62 78 Q80 72 98 78', role: 'soft' },
    { d: `${ellipse(40, 124, 12, 18)} ${ellipse(120, 124, 10, 17)}` },
    {
      d: `${ellipse(40, 124, 6, 11)} ${ellipse(120, 124, 5, 10)}`,
      role: 'soft',
    },
    { d: 'M30 112 l-4 4 M30 124 l-4 4 M30 136 l-4 4', role: 'ambient' },
    shadow(80, 156, 50),
  ],

  // Fugetsu's glass harp: four wine glasses filled to different heights,
  // the rim of the one she plays in tint. She practises it for the banquet
  // later in the arc.
  'fugetsu-hui-guo-rou': [
    {
      d: 'M24 90 C24 116 48 116 48 90 M36 114 V140 M28 142 H44 M56 84 C56 114 82 114 82 84 M69 112 V140 M61 142 H77 M90 84 C90 114 116 114 116 84 M103 112 V140 M95 142 H111',
    },
    { d: `${ellipse(36, 90, 12, 3)} ${ellipse(69, 84, 13, 3)}` },
    { d: ellipse(103, 84, 13, 3), role: 'accent' },
    { d: 'M126 96 C126 114 146 114 146 96 M136 112 V140 M129 142 H143' },
    { d: ellipse(136, 96, 10, 2.5) },
    {
      d: 'M27 104 Q36 108 45 104 M58 96 Q69 101 80 96 M92 100 Q103 105 114 100 M128 106 Q136 110 144 106',
      role: 'soft',
    },
    { d: 'M14 144 H156', role: 'ambient' },
    shadow(84, 152, 70),
  ],

  // Momoze's knitting in her rocking chair, where she sits while her mother
  // talks to the guards, chapter 361.
  'momoze-hui-guo-rou': MOMOZE_KNITTING,

  // Marayam's hamster cage: he carries his pet even to formal events.
  'marayam-hui-guo-rou': MARAYAM_CAGE,

  // Woble's cradle, the canopy over its head end hatched and its blanket in
  // tint, on two rockers: Kurapika senses aura rising from it in chapter
  // 358. No baby is drawn.
  'woble-hui-guo-rou': [
    { d: 'M34 96 H126 C126 128 112 140 80 140 C48 140 34 128 34 96 Z' },
    { d: 'M34 96 C34 62 60 50 84 52 C70 60 66 78 68 96' },
    { d: 'M42 66 l10 -8 M38 80 l16 -12 M40 94 l18 -14', role: 'ambient' },
    {
      d: 'M70 104 C86 98 106 100 120 106 C112 116 90 118 70 112 Z',
      role: 'accent',
    },
    { d: 'M78 108 Q96 104 112 109', role: 'soft' },
    { d: 'M52 140 L46 156 M108 140 L114 156' },
    { d: 'M26 154 Q80 168 134 154', role: 'soft' },
    shadow(80, 170, 54),
  ],

  // Izunavi's keikogi from the front, the crossed lapels and the black rope
  // knotted at the waist in tint: Kurapika's Nen teacher, whom he hires for
  // the voyage in chapter 350.
  'izunavi': [
    { d: 'M42 52 Q60 44 70 42 L80 86 L90 42 Q100 44 118 52 L126 160 H34 Z' },
    { d: 'M70 42 L96 120 M90 42 L64 120', role: 'soft' },
    { d: 'M34 116 Q80 126 126 116 M34 124 Q80 134 126 124' },
    {
      d: 'M74 122 C70 132 66 144 64 154 M84 124 C88 134 92 146 96 156 M74 122 Q80 116 86 124 Q80 130 74 122 Z',
      role: 'accent',
    },
    { d: 'M42 52 C32 64 26 84 24 104 M118 52 C128 64 134 84 136 104' },
    { d: 'M112 70 l6 -4 M116 92 l6 -4 M118 140 l6 -4', role: 'ambient' },
    shadow(80, 170, 54),
  ],

  // The First Queen's portrait, a woman with short hair, as the overview of
  // the princes with their mothers shows her.
  'unma-hui-guo-rou': [
    ...PORTRAIT,
    { d: 'M64 96 C60 74 68 62 80 62 C92 62 100 74 96 96' },
    { d: 'M64 96 Q80 104 96 96 V110 M64 96 V110', role: 'soft' },
    { d: 'M52 152 C54 126 66 116 80 116 C94 116 106 126 108 152' },
  ],

  // Duazul's fair wavy hair from behind, falling over the collar of her
  // formal clothes, the comb holding it in tint.
  'duazul-hui-guo-rou': [
    { d: 'M54 100 C50 66 62 46 80 46 C98 46 110 66 106 100' },
    {
      d: 'M54 100 C48 112 58 120 52 132 C46 144 56 150 52 160 M106 100 C112 112 102 120 108 132 C114 144 104 150 108 160',
    },
    {
      d: 'M66 60 C60 76 70 88 64 104 C60 116 68 126 64 140 M80 54 C76 70 84 86 80 104 C76 118 84 130 80 146 M94 60 C100 76 90 88 96 104 C100 116 92 126 96 140',
      role: 'soft',
    },
    { d: 'M68 56 Q80 50 92 56', role: 'accent' },
    { d: 'M26 176 C30 152 42 140 52 136 M134 176 C130 152 118 140 108 136' },
    { d: 'M52 160 Q80 168 108 160', role: 'soft' },
    shadow(80, 184, 52),
  ],

  // The Third Queen's portrait, a woman with short curly hair, as the
  // overview of the princes with their mothers shows her.
  'tang-zhao-li-hui-guo-rou': [
    ...PORTRAIT,
    {
      d: 'M62 94 C56 90 58 82 62 80 C58 72 64 64 70 66 C72 58 82 58 84 64 C90 60 98 66 96 72 C102 76 102 86 98 90 C102 96 96 102 92 98',
    },
    { d: 'M66 98 Q80 106 92 98 V112 M66 98 V112', role: 'soft' },
    { d: 'M52 152 C54 128 66 118 80 118 C94 118 106 128 108 152' },
  ],

  // The eight queens as silhouettes, the roster that introduces the king's
  // legal wives in chapter 349, Katrono's in tint: the second shortest. It
  // is how she is first seen.
  'katrono-hui-guo-rou': [
    {
      d: 'M14 150 V124 Q14 116 20 116 Q26 116 26 124 V150 M50 150 V122 Q50 114 56 114 Q62 114 62 122 V150 M68 150 V120 Q68 112 74 112 Q80 112 80 120 V150 M86 150 V123 Q86 115 92 115 Q98 115 98 123 V150 M104 150 V121 Q104 113 110 113 Q116 113 116 121 V150 M122 150 V122 Q122 114 128 114 Q134 114 134 122 V150 M140 150 V120 Q140 112 146 112 Q152 112 152 120 V150',
    },
    {
      d: `${circle(20, 108, 6)} ${circle(56, 106, 6)} ${circle(74, 104, 6)} ${circle(92, 107, 6)} ${circle(110, 105, 6)} ${circle(128, 106, 6)} ${circle(146, 104, 6)}`,
      role: 'soft',
    },
    { d: 'M32 150 V128 Q32 120 38 120 Q44 120 44 128 V150', role: 'accent' },
    { d: circle(38, 112, 6), role: 'accent' },
    { d: 'M8 150 H156', role: 'ambient' },
    shadow(80, 158, 70),
  ],

  // Swinko-swinko's thin vest with its sharp shoulders over a turtleneck,
  // the sash around her waist in tint: she wears a shirt and trousers where
  // the other queens wear dresses, from chapter 366.
  'swinko-swinko-hui-guo-rou': [
    { d: 'M64 46 Q80 40 96 46 V60 Q80 66 64 60 Z' },
    { d: 'M66 52 Q80 57 94 52', role: 'soft' },
    { d: 'M64 60 L30 66 L44 74 L50 124 H110 L116 74 L130 66 L96 60' },
    { d: 'M64 60 L80 120 L96 60', role: 'soft' },
    { d: 'M50 124 Q80 132 110 124 L112 138 Q80 146 48 138 Z', role: 'accent' },
    { d: 'M56 138 L44 172 M104 138 L116 172 M80 144 V172' },
    { d: 'M104 80 l6 -4 M106 98 l6 -4 M106 114 l6 -4', role: 'ambient' },
    shadow(80, 180, 46),
  ],

  // Seiko's short fair hair curling sideways, from behind, over the collar
  // of her light long-sleeved dress, the curls in tint.
  'seiko-hui-guo-rou': [
    { d: 'M56 98 C52 66 62 48 80 48 C98 48 108 66 104 98' },
    {
      d: 'M56 98 C46 98 40 90 44 84 C48 80 54 84 52 90 M104 98 C114 98 120 90 116 84 C112 80 106 84 108 90',
      role: 'accent',
    },
    { d: 'M64 58 C62 72 64 86 62 98 M96 58 C98 72 96 86 98 98', role: 'soft' },
    { d: 'M68 98 V116 M92 98 V116' },
    { d: 'M24 176 C28 138 48 124 68 116 M136 176 C132 138 112 124 92 116' },
    { d: 'M68 116 Q80 124 92 116 M68 120 Q80 128 92 120', role: 'soft' },
    shadow(80, 184, 52),
  ],

  // Zigg's spiky white hair from behind, sticking out in every direction
  // like Killua's, in tint, over a high collar: the young Zoldyck of
  // Netero's expedition, as Ging tells of it in chapter 344.
  'zigg-zoldyck': [
    {
      d: 'M54 100 L40 92 L50 84 L32 74 L50 70 L38 52 L58 58 L56 36 L70 50 L78 26 L86 48 L100 32 L102 56 L120 46 L112 66 L130 70 L112 82 L122 94 L106 100',
      role: 'accent',
    },
    { d: 'M62 60 L70 76 M80 52 L82 74 M98 60 L92 78', role: 'soft' },
    { d: 'M58 100 C60 110 66 116 70 118 M102 100 C100 110 94 116 90 118' },
    { d: 'M64 114 L62 130 Q80 136 98 130 L96 114', role: 'soft' },
    { d: 'M26 176 C30 146 44 134 62 130 M134 176 C130 146 116 134 98 130' },
    { d: 'M118 150 l6 -4 M122 164 l6 -4 M36 150 l-6 -4', role: 'ambient' },
    shadow(80, 184, 54),
  ],

  // Curly's glasses from the front, the swirls on their lenses in tint:
  // the glasses that hide his eyes when he challenges Ging in chapter 346.
  'curly': [
    { d: `${circle(54, 100, 24)} ${circle(106, 100, 24)}` },
    {
      d: 'M54 100 m0 -2 a2 2 0 1 1 -2 2 a5 5 0 1 1 6 4 a9 9 0 1 1 -12 -8 a14 14 0 1 1 18 14 M106 100 m0 -2 a2 2 0 1 1 -2 2 a5 5 0 1 1 6 4 a9 9 0 1 1 -12 -8 a14 14 0 1 1 18 14',
      role: 'accent',
    },
    { d: 'M78 98 Q80 92 82 98' },
    { d: 'M30 96 L18 90 L22 120 M130 96 L142 90 L138 120' },
    { d: 'M38 82 Q46 78 54 78 M90 82 Q98 78 106 78', role: 'soft' },
    shadow(80, 140, 56),
  ],

  // Mark's tuxedo cuff and his wristwatch, the watch face in tint, the
  // satin edge of the cuff hatched: he takes the prince's call in chapter
  // 345.
  'mark': [
    { d: 'M14 118 L70 92 L84 124 L28 150 Z' },
    { d: 'M60 96 L74 128', role: 'soft' },
    { d: 'M70 92 L82 88 L96 118 L84 124' },
    {
      d: 'M84 124 C94 132 112 132 126 126 L144 112 L126 88 C112 82 96 84 82 88',
      role: 'soft',
    },
    { d: ellipse(100, 106, 15, 14), role: 'accent' },
    { d: 'M100 106 V98 M100 106 L106 109', role: 'soft' },
    { d: 'M94 92 L96 82 H106 L108 92 M94 120 L96 130 H106 L108 120' },
    { d: 'M20 140 l8 -4 M30 144 l8 -4 M40 140 l8 -4', role: 'ambient' },
    shadow(76, 166, 52),
  ],
} satisfies Drawings

/** A manga-only stage of a Kakin record. */
const KAKIN = { episode: 148, source: 'chapter' } as const

/** Kacho's headphones, her first drawing without its shadow. */
const KACHO_HEADPHONES = KAKIN_PHASE_ONE_DRAWINGS['kacho-hui-guo-rou'].slice(
  0,
  -1,
)

/** Fugetsu's glass harp, her first drawing. */
const FUGETSU_HARP = KAKIN_PHASE_ONE_DRAWINGS['fugetsu-hui-guo-rou']

/** The Kakin records of phase 1 whose drawing changes in chapters 340–400 (#1154, #1156). */
export const kakinPhaseOneRedrawn: Redrawings = {
  'momoze-hui-guo-rou': [
    // Her Guardian Spirit Beast sits behind her as she knits, chapter 361:
    // a plump, hairy, hamster-like creature with stubby arms, round feet
    // with three clawed toes, large ears, a mouse-like tail and a heart on
    // its belly. Its face is not drawn.
    {
      ...KAKIN,
      chapter: 361,
      value: [
        ...moved(MOMOZE_KNITTING, BESIDE_THE_BEAST),
        {
          d: 'M50 96 C38 70 46 34 80 30 C114 34 122 70 110 96 C104 112 56 112 50 96 Z',
        },
        { d: 'M58 38 C50 22 62 16 66 32 M102 38 C110 22 98 16 94 32' },
        {
          d: 'M74 70 C72 62 80 60 80 66 C80 60 88 62 86 70 L80 78 Z',
          role: 'soft',
        },
        {
          d: 'M48 70 C40 70 38 78 44 80 M112 70 C120 70 122 78 116 80',
          role: 'soft',
        },
        {
          d: 'M58 104 l-4 6 M64 106 l0 7 M70 106 l4 6 M90 106 l-4 6 M96 106 l0 7 M102 104 l4 6',
        },
        { d: 'M112 90 C130 92 140 80 136 66', role: 'soft' },
        {
          d: 'M46 50 l-5 3 M44 64 l-5 3 M114 50 l5 3 M116 64 l5 3',
          role: 'ambient',
        },
      ],
    },
    // The same chair, the knitting dropped on the floor before it and the
    // needles apart: she is suffocated in her room, chapter 368.
    {
      ...KAKIN,
      chapter: 368,
      value: [
        ...MOMOZE_CHAIR,
        { d: 'M98 160 L138 150 M106 170 L144 164', role: 'accent' },
        {
          d: `${circle(26, 166, 8)} M34 168 C44 174 56 174 64 170`,
          role: 'soft',
        },
        { d: 'M64 170 L92 166 L96 176 L68 180 Z', role: 'soft' },
      ],
    },
  ],
  'kacho-hui-guo-rou': [
    // Her headphones lying in the lifeboat as it drifts out to sea, and the
    // same headphones above it in the muted ink, a likeness: she dies in the
    // escape, and her Guardian Spirit Beast takes her form to stay by
    // Fugetsu, chapter 383, the chapter both are shown.
    {
      ...KAKIN,
      chapter: 383,
      value: [
        ...moved(
          KACHO_HEADPHONES,
          'translate(80 144) scale(0.4) translate(-80 -142)',
        ),
        ...moved(
          KACHO_HEADPHONES.map((stroke) => ({
            ...stroke,
            role: 'ambient' as const,
          })),
          'translate(80 92) scale(0.7) translate(-80 -142)',
        ),
        { d: 'M22 138 H138 L124 156 H36 Z' },
        { d: 'M28 144 H132', role: 'soft' },
        ...SEA,
      ],
    },
  ],
  'fugetsu-hui-guo-rou': [
    // The small rounded door of the playground tunnel the twins played in
    // as children, its handle on the left, set in the wall above the same
    // glass harp made small: her Guardian Spirit Beast's door first
    // appears to her, chapter 374.
    {
      ...KAKIN,
      chapter: 374,
      value: [
        ...moved(FUGETSU_HARP, BESIDE_THE_BEAST),
        { d: 'M48 108 V52 C48 26 112 26 112 52 V108' },
        { d: 'M56 108 V56 C56 36 104 36 104 56 V108', role: 'soft' },
        { d: circle(64, 80, 3) },
        { d: 'M6 108 H154', role: 'ambient' },
        { d: 'M104 62 l6 -4 M104 78 l6 -4 M104 94 l6 -4', role: 'ambient' },
      ],
    },
  ],
}

/** One of the teardrop tentacles of Camilla's Guardian Spirit Beast. */
const TENTACLE = 'M80 40 C72 30 72 18 77 12 Q80 16 83 12 C88 18 88 30 80 40'

/**
 * The Guardian Spirit Beasts the story shows in chapters 361, 362 and 366,
 * each above its prince's own object, made small. Only the wiki's prose
 * describes them here, and no face is drawn on any of them.
 */
export const kakinPhaseOneBeasts: Redrawings = {
  'benjamin-hui-guo-rou': [
    // A humanoid beetle resting on his shoulders: a domed head with flat
    // triangular spikes for ears, beetle wings closed down its back, two
    // clawed arms and huge clawed legs, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(BENJAMIN_JACKET, BESIDE_THE_BEAST),
        { d: 'M70 30 C70 14 90 14 90 30' },
        { d: 'M71 26 L56 18 L68 36 M89 26 L104 18 L92 36', role: 'soft' },
        { d: 'M62 36 C48 52 52 84 80 96 C108 84 112 52 98 36 Z' },
        {
          d: 'M80 36 V96 M66 44 C62 60 64 76 74 88 M94 44 C98 60 96 76 86 88',
          role: 'soft',
        },
        {
          d: 'M60 50 C44 56 38 68 40 82 l-6 4 M40 82 v7 M40 82 l5 5 M100 50 C116 56 122 68 120 82 l6 4 M120 82 v7 M120 82 l-5 5',
        },
        {
          d: 'M66 92 C54 100 52 108 56 112 l-6 2 M56 112 l2 5 M94 92 C106 100 108 108 104 112 l6 2 M104 112 l-2 5',
        },
        { d: 'M100 54 l5 -3 M102 66 l5 -3 M100 78 l5 -3', role: 'ambient' },
      ],
    },
    // His right palm over the same jacket made small, a star in tint under
    // each of its four fingers: Benjamin Baton, by which he inherits the
    // abilities of his sworn soldiers when they die, first shown in chapter
    // 373. The wiki gives the four stars (cited to 389) and, at 373, a
    // third star without aura; how many show at 373 is a frame check.
    {
      ...KAKIN,
      chapter: 373,
      value: [
        ...moved(BENJAMIN_JACKET, BESIDE_THE_BEAST),
        {
          d: 'M56 112 L52 50 Q52 44 57 44 Q62 44 62 50 V72 M62 72 V34 Q62 28 67 28 Q72 28 72 34 V70 M72 70 V26 Q72 20 77 20 Q82 20 82 26 V70 M82 70 V32 Q82 26 87 26 Q92 26 92 32 V80 C100 72 110 70 114 76 Q116 82 110 86 C102 94 100 102 98 112',
        },
        {
          d: `${star(57, 80, 5, 2.2)} ${star(67, 76, 5, 2.2)} ${star(77, 76, 5, 2.2)} ${star(87, 80, 5, 2.2)}`,
          role: 'accent',
        },
        {
          d: 'M60 96 Q76 104 96 92 M62 60 h10 M72 52 h10 M82 56 h10',
          role: 'soft',
        },
      ],
    },
  ],
  'camilla-hui-guo-rou': [
    // A large sea anemone: teardrop tentacles, a scaled trunk and roots that
    // spread like a flowing skirt, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(CAMILLA_UPDO, BESIDE_THE_BEAST),
        { d: TENTACLE, transform: 'translate(-24 8) rotate(-24 80 40)' },
        { d: TENTACLE, transform: 'translate(-10 0) rotate(-10 80 40)' },
        { d: TENTACLE, transform: 'translate(0 -4)' },
        { d: TENTACLE, transform: 'translate(12 0) rotate(10 80 40)' },
        { d: TENTACLE, transform: 'translate(24 8) rotate(24 80 40)' },
        {
          d: `${ellipse(80, 44, 22, 5)} M58 44 C56 62 60 76 66 86 M102 44 C104 62 100 76 94 86`,
        },
        {
          d: 'M64 56 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 M66 68 q4 4 7 0 q4 4 7 0 q4 4 7 0 q4 4 7 0',
          role: 'soft',
        },
        {
          d: 'M66 86 C54 94 44 100 34 108 Q80 118 126 108 C116 100 106 94 94 86',
        },
        {
          d: 'M56 98 L50 110 M70 92 L66 114 M90 92 L94 114 M104 98 L110 110',
          role: 'soft',
        },
      ],
    },
    // A huge cat above the same updo made small, the tip of its tail turned
    // white with the life it pours into her mouth: Cat's Name brings her
    // back after Musse shoots her, chapter 373. It appears behind her
    // killer; its pose here is a frame check. No face.
    {
      ...KAKIN,
      chapter: 373,
      value: [
        ...moved(CAMILLA_UPDO, BESIDE_THE_BEAST),
        {
          d: 'M42 108 C34 78 42 52 58 44 L56 18 L72 34 Q80 32 88 34 L104 18 L102 44 C118 52 126 78 118 108',
        },
        { d: 'M60 30 L64 38 M100 30 L96 38', role: 'soft' },
        { d: 'M118 100 C142 94 150 66 136 50' },
        {
          d: 'M136 50 C130 44 132 36 138 38 C144 40 144 48 136 50',
          role: 'soft',
        },
        { d: 'M134 58 l2 6 M140 56 l3 5', role: 'ambient' },
        {
          d: 'M50 70 l-6 4 M48 84 l-6 4 M112 70 l6 4 M114 84 l6 4',
          role: 'ambient',
        },
      ],
    },
  ],
  'zhang-lei-hui-guo-rou': [
    // A great dharmachakra, the wheel of eight spokes, a dark flame running
    // round its rim, eight crosses about it and one in a circle at its top,
    // chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(ZHANG_LEI, BESIDE_THE_BEAST),
        { d: `${circle(80, 56, 32)} ${circle(80, 56, 25)}` },
        { d: circle(80, 56, 7) },
        {
          d: 'M80 49 V31 M80 63 V81 M73 56 H55 M87 56 H105 M75 51 L62.3 38.3 M85 61 L97.7 73.7 M85 51 L97.7 38.3 M75 61 L62.3 73.7',
          role: 'soft',
        },
        {
          d: 'M52 38 C46 34 46 28 50 24 M48 60 C42 60 38 56 38 50 M58 84 C52 88 46 88 42 84 M102 84 C108 88 114 88 118 84 M112 60 C118 60 122 56 122 50 M108 38 C114 34 114 28 110 24',
          role: 'ambient',
        },
        { d: `${circle(80, 16, 6)} M80 12 V20 M76 16 H84` },
        {
          d: 'M44 48 h6 M47 45 v6 M110 48 h6 M113 45 v6 M44 68 h6 M47 65 v6 M110 68 h6 M113 65 v6 M58 92 h6 M61 89 v6 M96 92 h6 M99 89 v6 M58 20 h6 M61 17 v6 M96 20 h6 M99 17 v6',
          role: 'soft',
        },
      ],
    },
  ],
  'tserriednich-hui-guo-rou': [
    // A horse-like beast side on: a long neck, long fair hair down it, high
    // heels for hooves and a tail of many whips. It confronts Theta with
    // him, chapter 362. Its faces are not drawn.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved([...SCARLET_EYES_JAR, shadow(80, 166, 40)], BESIDE_THE_BEAST),
        {
          d: 'M58 60 C72 52 104 52 116 62 C122 72 116 84 104 86 H66 C56 84 52 70 58 60 Z',
        },
        { d: 'M58 62 C50 46 44 32 40 20 M68 56 C60 40 54 28 50 16' },
        { d: 'M40 20 C34 16 36 8 44 8 L52 14 C52 18 50 18 50 16' },
        {
          d: 'M46 8 C62 14 70 32 76 54 M52 10 C70 20 80 38 86 56',
          role: 'soft',
        },
        {
          d: 'M66 86 L62 106 H70 M62 106 V112 M78 86 L76 106 H84 M76 106 V112 M100 86 L102 106 H110 M102 106 V112 M110 84 L114 104 H122 M114 104 V110',
        },
        {
          d: 'M118 64 C132 62 140 70 146 84 M118 66 C130 70 136 82 136 98 M118 68 C126 78 126 92 122 106',
          role: 'soft',
        },
        { d: 'M98 64 l5 -3 M104 74 l5 -3 M96 78 l5 -3', role: 'ambient' },
      ],
    },
    // The same jar, and behind it its likeness in the muted ink where it
    // will be ten seconds later: with his eyes shut in Zetsu he sees ten
    // seconds ahead, and Theta sees him dead where he no longer is, chapter
    // 385 (explained in 387). No glow.
    {
      ...KAKIN,
      chapter: 385,
      value: [
        ...moved(
          SCARLET_EYES_JAR.map((stroke) => ({
            ...stroke,
            role: 'ambient' as const,
          })),
          'translate(22 -22)',
        ),
        ...moved(
          [...SCARLET_EYES_JAR, shadow(80, 166, 40)],
          'translate(-12 10)',
        ),
      ],
    },
  ],
  'tubeppa-hui-guo-rou': [
    // A horned amphibian on spiked axle wheels for legs, a row of pole-like
    // horns standing on its back, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(TUBEPPA_GLASSES, BESIDE_THE_BEAST),
        {
          d: 'M36 70 C36 50 60 42 84 44 C108 42 128 54 128 72 C128 86 110 92 82 92 C56 92 36 86 36 70 Z',
        },
        { d: 'M40 60 L24 46 L44 54' },
        {
          d: 'M60 48 V24 M74 44 V18 M88 44 V20 M102 46 V26 M114 52 V34',
          role: 'soft',
        },
        { d: `${circle(56, 100, 10)} ${circle(108, 100, 10)}` },
        {
          d: 'M56 86 v-4 M56 114 v4 M42 100 h-4 M70 100 h4 M108 86 v-4 M108 114 v4 M94 100 h-4 M122 100 h4',
        },
        { d: `${circle(56, 100, 2)} ${circle(108, 100, 2)}`, role: 'soft' },
        { d: 'M110 60 l6 -4 M114 72 l6 -4 M112 84 l5 -3', role: 'ambient' },
      ],
    },
  ],
  'tyson-hui-guo-rou': [
    // A heart-shaped creature hovering above her on four small wings,
    // chapter 362. Its one eye is not drawn.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(TYSON_BOOKS, BESIDE_THE_BEAST),
        {
          d: 'M80 96 C60 80 46 66 46 48 C46 34 58 28 68 32 C74 34 78 40 80 44 C82 40 86 34 92 32 C102 28 114 34 114 48 C114 66 100 80 80 96 Z',
        },
        { d: 'M48 42 C34 30 22 36 28 48 Z M50 62 C36 62 28 72 38 78 Z' },
        {
          d: 'M112 42 C126 30 138 36 132 48 Z M110 62 C124 62 132 72 122 78 Z',
        },
        { d: 'M56 46 C58 40 64 38 68 40', role: 'soft' },
        { d: 'M100 56 l6 -4 M98 68 l6 -4 M92 78 l5 -3', role: 'ambient' },
      ],
    },
  ],
  'luzurus-hui-guo-rou': [
    // A great centipede curling over him: antennae, small wing-like
    // extensions behind its head and many legs, chapter 362. Its face is not
    // drawn, nor the pincer at its tail, first shown in chapter 375.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved([...LUZURUS_HAIR, shadow(80, 176, 50)], BESIDE_THE_BEAST),
        {
          d: `${ellipse(38, 42, 9, 7)} ${ellipse(52, 52, 8, 6)} ${ellipse(66, 60, 8, 6)} ${ellipse(80, 64, 8, 6)} ${ellipse(94, 64, 8, 6)} ${ellipse(108, 60, 8, 6)} ${ellipse(120, 52, 7, 6)}`,
        },
        {
          d: 'M52 58 l-3 8 M66 66 l-2 8 M80 70 v8 M94 70 v8 M108 66 l2 8 M120 58 l3 8 M52 46 l-3 -8 M66 54 l-2 -8 M80 58 v-8 M94 58 v-8 M108 54 l2 -8',
          role: 'soft',
        },
        { d: 'M32 38 C24 28 20 20 22 10 M36 36 C32 24 34 14 40 8' },
        { d: 'M46 44 C42 32 52 26 58 36', role: 'soft' },
      ],
    },
  ],
  'sale-sale-hui-guo-rou': [
    // A spherical mass with no clear anatomy hovering over him, covered in
    // mouths of many sizes drawn as plain slits, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(SALE_SALE, BESIDE_THE_BEAST),
        {
          d: 'M80 18 C96 16 112 26 116 42 C122 58 114 78 100 86 C88 94 68 94 56 86 C42 76 38 56 44 40 C50 26 64 18 80 18 Z',
        },
        {
          d: 'M52 42 q5 -3 10 0 M86 26 q4 3 8 0 M100 44 q3 5 0 10 M62 66 q-3 5 0 10 M78 46 q5 3 10 0 M96 74 q5 -3 10 0 M48 60 q3 -4 7 -2 M84 86 q-4 -3 -8 0 M70 28 q-3 4 -1 8 M108 58 q-4 2 -6 6',
          role: 'soft',
        },
        { d: 'M104 34 l5 -3 M110 48 l5 -3 M108 64 l5 -3', role: 'ambient' },
      ],
    },
    // Rihan's Predator eats the beast whole, chapter 381: his first drawing
    // again.
    { ...KAKIN, chapter: 381, value: SALE_SALE },
    // The same ear lying on its side on a pillow: he is found in bed, not
    // breathing, killed by Benjamin's soldier, chapter 382.
    {
      ...KAKIN,
      chapter: 382,
      value: [
        {
          d: 'M14 150 C10 130 20 124 40 124 H120 C140 124 150 130 146 150 C150 168 140 174 120 174 H40 C20 174 10 168 14 150 Z',
        },
        { d: 'M30 134 Q80 142 130 134', role: 'soft' },
        ...moved(
          SALE_SALE_EAR,
          'translate(84 142) rotate(-90) scale(0.62) translate(-88 -96)',
        ),
        { d: 'M4 180 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'halkenburg-hui-guo-rou': [
    // A shaggy gargoyle with two horns over its head and three clawed
    // fingers and toes, chapter 361. Its one eye and scowl are not drawn.
    {
      ...KAKIN,
      chapter: 361,
      value: [
        ...moved(HALKENBURG_PISTOL, BESIDE_THE_BEAST),
        {
          d: 'M52 104 C40 84 44 48 62 38 C72 32 88 32 98 38 C116 48 120 84 108 104',
        },
        { d: 'M64 38 C56 26 58 14 64 8 M96 38 C104 26 102 14 96 8' },
        {
          d: 'M50 54 l-6 4 l6 2 l-6 4 l6 2 l-6 4 l6 2 M110 54 l6 4 l-6 2 l6 4 l-6 2 l6 4 l-6 2',
          role: 'ambient',
        },
        {
          d: 'M54 68 C42 74 38 84 40 94 l-6 4 M40 94 v7 M40 94 l5 5 M106 68 C118 74 122 84 120 94 l6 4 M120 94 v7 M120 94 l-5 5',
        },
        {
          d: 'M64 104 l-6 6 M64 104 v8 M64 104 l6 6 M96 104 l-6 6 M96 104 v8 M96 104 l6 6',
        },
        { d: 'M64 52 Q80 46 96 52', role: 'soft' },
      ],
    },
    // A bow drawn with an arrow on its string, over the same pistol made
    // small: the bow his aura forms and the arrow made of his guards' aura,
    // which nothing can stop once drawn, first shot in chapter 382.
    {
      ...KAKIN,
      chapter: 382,
      value: [
        ...moved(HALKENBURG_PISTOL, BESIDE_THE_BEAST),
        { d: 'M60 12 C34 34 34 88 60 110' },
        { d: 'M60 12 L106 61 L60 110', role: 'soft' },
        { d: 'M110 61 H14 M14 61 l10 -6 M14 61 l10 6' },
        {
          d: 'M110 61 l8 -6 M110 61 l8 6 M102 61 l8 -6 M102 61 l8 6',
          role: 'soft',
        },
        {
          d: 'M40 30 l-6 -4 M36 92 l-6 4 M126 48 l6 -4 M126 74 l6 4',
          role: 'ambient',
        },
      ],
    },
  ],
  'marayam-hui-guo-rou': [
    // A long Chinese dragon coiling over the cage: three horns at its head,
    // fins beneath its body and a pointed fin for a tail, chapter 366.
    {
      ...KAKIN,
      chapter: 366,
      value: [
        ...moved(MARAYAM_CAGE, BESIDE_THE_BEAST),
        { d: 'M30 44 C50 22 70 64 90 44 C110 24 128 46 140 62' },
        { d: 'M32 56 C52 36 72 76 92 56 C110 38 124 56 132 68' },
        { d: 'M30 44 C18 44 14 52 20 58 L32 56' },
        { d: 'M24 46 L16 32 M28 44 L26 28 M32 44 L38 30' },
        { d: 'M140 62 L154 56 L146 74 L132 68', role: 'soft' },
        { d: 'M60 62 l-4 10 l8 -6 M104 54 l-2 10 l8 -6', role: 'soft' },
        {
          d: 'M44 42 l4 4 M56 44 l4 4 M72 56 l2 5 M86 54 l3 4 M100 40 l3 4 M114 44 l2 5',
          role: 'ambient',
        },
      ],
    },
  ],
}
