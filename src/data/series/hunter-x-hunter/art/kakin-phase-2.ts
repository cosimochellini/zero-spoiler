import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow } from '~/lib/svg/primitives'

/**
 * A royal bodyguard or servant seen from behind, below the hair each one is
 * drawn by: the neck, the shoulders of the black suit or the robe, its
 * collar, and the shade across the back hatched.
 */
export const FROM_BEHIND_BODY: Stroke[] = [
  { d: 'M66 106 V122 M94 106 V122' },
  { d: 'M24 176 C28 140 46 126 66 122 M136 176 C132 140 114 126 94 122' },
  { d: 'M66 122 Q80 130 94 122', role: 'soft' },
  {
    d: 'M34 162 l8 -6 M40 172 l10 -7 M126 162 l-8 -6 M120 172 l-10 -7',
    role: 'ambient',
  },
]

/** The same back standing, with the shadow it throws. */
export const FROM_BEHIND: Stroke[] = [...FROM_BEHIND_BODY, shadow(80, 184, 54)]

/**
 * A head and shoulders from behind tipped onto the floor, head to the
 * left: how a guard or servant drawn from behind lies once killed.
 */
export const FALLEN =
  'translate(80 136) rotate(-90) scale(0.7) translate(-80 -116)'

/**
 * A record's object made small and set at the foot of the box, so what
 * the story shows beside it (a Guardian Spirit Beast, an ability) fits
 * above it.
 */
export const BESIDE_THE_BEAST =
  'translate(80 196) scale(0.56) translate(-80 -196)'

/** The back of a head, down to the nape, under its hair. */
export const SKULL = 'M58 106 C54 74 64 56 80 56 C96 56 106 74 102 106'

/**
 * The back of a head seen a little from its left, down to the nape: the
 * near side fuller, the far side turning away.
 */
export const TURNED_SKULL = 'M50 104 C44 70 58 46 80 46 C102 46 112 66 108 104'

/** The near ear of the same head, from behind. */
export const TURNED_EAR = 'M49 78 C40 74 36 90 47 96'

/**
 * The neck and shoulders under the same head: the near shoulder wider, the
 * far one hatched where it turns away, and the shadow they throw.
 */
export const TURNED_BODY: Stroke[] = [
  { d: 'M58 104 L58 122 M98 108 L100 124' },
  { d: 'M16 180 C18 146 36 128 58 122 M138 180 C138 150 124 132 100 124' },
  { d: 'M118 148 l8 -6 M124 162 l8 -6 M128 176 l7 -5', role: 'ambient' },
  shadow(78, 188, 58),
]

/** A suit's collar round the back of the same neck. */
export const TURNED_COLLAR = 'M58 122 Q78 132 100 124'

/** The collar of a servant's robe round the back of the same neck. */
export const ROBE_COLLAR =
  'M56 122 C64 134 94 134 102 124 L98 116 C90 126 68 126 60 116 Z'

/**
 * A left hand from the back, fingers together, the pinion marked on it in
 * tint: the mark Halkenburg's guards find on the back of their left hands.
 */
export const PINION_HAND: Stroke[] = [
  {
    d: 'M56 168 L58 112 C58 104 62 100 66 100 V60 Q66 54 71 54 Q76 54 76 60 V96 M76 92 V50 Q76 44 81 44 Q86 44 86 50 V94 M86 94 V54 Q86 48 91 48 Q96 48 96 54 V98 M96 100 V66 Q96 60 101 60 Q106 60 106 66 V116 C106 132 100 144 98 168',
  },
  {
    d: 'M58 124 C48 118 40 108 36 98 Q34 92 40 92 Q44 92 46 98 C50 106 54 110 58 112',
  },
  {
    d: 'M70 140 C74 128 84 118 96 112 M76 128 l-4 -6 M82 122 l-3 -7 M88 117 l-2 -7 M80 128 l6 2 M86 122 l6 1',
    role: 'accent',
  },
  { d: 'M66 64 h10 M76 54 h10 M86 58 h10 M96 70 h10', role: 'soft' },
  { d: 'M100 120 l5 -4 M100 134 l5 -4 M98 148 l5 -4', role: 'ambient' },
]

/**
 * Longhi's head from behind and a little to her left: the fair hair combed
 * back to the tie at her nape, in tint, and the long ponytail falling from
 * it over her shoulder blade, down the back of her black suit.
 */
const LONGHI: Stroke[] = [
  { d: TURNED_SKULL },
  {
    d: 'M58 62 C68 76 74 88 76 96 M80 48 C80 70 82 84 84 96 M104 64 C98 78 94 88 90 96',
    role: 'soft',
  },
  { d: 'M74 96 Q83 102 92 96 M74 103 Q83 109 92 103', role: 'accent' },
  {
    d: 'M76 106 C70 128 62 150 58 172 M90 106 C90 130 82 154 70 176 M58 172 L62 182 L70 176',
  },
  { d: 'M83 110 C80 132 74 152 64 174', role: 'soft' },
  { d: 'M104 70 l5 -4 M106 84 l5 -4 M104 98 l5 -4', role: 'ambient' },
  { d: TURNED_COLLAR, role: 'soft' },
  ...TURNED_BODY,
]

/**
 * Furykov's head from behind and a little to his left: the short fair hair,
 * its outline in tint, the dark beard along his jaw just showing below the
 * ear, over the collar of his Kakin army zipper jacket.
 */
const FURYKOV: Stroke[] = [
  { d: 'M50 94 C44 62 58 44 80 44 C102 44 112 64 108 98', role: 'accent' },
  {
    d: 'M50 94 L56 99 L62 96 L68 101 L74 98 L80 102 L86 99 L92 102 L98 99 L104 101 L108 98',
    role: 'soft',
  },
  {
    d: 'M60 62 l4 -5 M70 54 l4 -5 M82 52 l4 -5 M94 56 l4 -5 M64 78 l4 -5 M78 72 l4 -5 M92 74 l4 -5',
    role: 'soft',
  },
  { d: 'M50 76 C41 72 37 88 48 94' },
  { d: 'M48 94 C44 106 48 116 58 120' },
  { d: 'M47 100 l4 -3 M48 108 l5 -3 M52 115 l5 -3', role: 'ambient' },
  { d: 'M104 72 l5 -4 M106 86 l5 -4', role: 'ambient' },
  { d: 'M56 114 C66 126 92 128 102 116 M56 122 C66 134 92 136 102 124' },
  ...TURNED_BODY,
]

/**
 * Vincent's knife lying in 3/4: the blade with its two faces, the guard,
 * and the grip in tint.
 */
const VINCENT_KNIFE: Stroke[] = [
  { d: 'M10 150 L80 124 L84 136 L20 156 Q8 158 10 150 Z' },
  { d: 'M14 152 L82 130', role: 'soft' },
  { d: 'M78 118 L86 115 L92 137 L84 140 Z M86 115 L90 113 L96 135 L92 137' },
  {
    d: 'M90 121 L116 112 Q124 110 125 116 Q126 122 118 124 L94 132',
    role: 'accent',
  },
  { d: 'M100 120 l2 6 M108 117 l2 6', role: 'soft' },
]

/**
 * The stoppered vial of poison Vincent shows to frame the attendant he
 * killed, standing.
 */
const VINCENT_VIAL: Stroke[] = [
  { d: `${ellipse(138, 98, 7, 2.5)} M131 98 V106 Q138 110 145 106 V98` },
  { d: 'M133 107 V138 Q138 148 143 138 V107' },
  { d: 'M133 124 Q138 127 143 124', role: 'soft' },
  { d: 'M140 128 l3 -2 M140 136 l3 -2', role: 'ambient' },
]

/** Kurapika's tape line across the floor of the Nen class. */
const MYUHAN_TAPE: Stroke = {
  d: 'M4 140 L156 128 M4 148 L156 136',
  role: 'soft',
}

/** Myuhan's black shoe side on, its toe in tint and its side hatched. */
const MYUHAN_SHOE: Stroke[] = [
  {
    d: 'M54 150 C52 132 60 122 76 120 L104 118 C122 118 134 126 134 140 H58 Z',
  },
  { d: 'M100 118 C110 118 124 124 128 132', role: 'accent' },
  { d: 'M54 150 H136 V144', role: 'soft' },
  {
    d: 'M62 132 l10 -8 M66 140 l14 -12 M78 140 l14 -12 M90 140 l12 -10',
    role: 'ambient',
  },
]

/** The roll of tape, lying on the floor. */
const MYUHAN_ROLL: Stroke[] = [
  { d: `${ellipse(30, 164, 14, 6)} ${ellipse(30, 164, 6, 3)}` },
  { d: 'M16 164 V170 C16 176 44 176 44 170 V164', role: 'soft' },
]

/**
 * The Black Whale 1 in 3/4 from the bow: the hull and its deck, the five
 * tiers stepped up the ship with a row of windows each, the dome on top in
 * tint, on the water.
 */
const BLACK_WHALE: Stroke[] = [
  { d: 'M4 120 L28 130 H150 L134 114 H16 Z' },
  { d: 'M4 120 C8 138 16 148 32 152 H144 L150 130' },
  {
    d: 'M40 126 H132 V115 H40 Z M40 126 l-12 -12 v-11 l12 12 M45 112 H119 V101 H45 Z M45 112 l-7.8 -7.8 v-11 l7.8 7.8 M51 99 H107 V88 H51 Z M51 99 l-5 -5 v-11 l5 5 M58 87 H96 V76 H58 Z M58 87 l-3.3 -3.3 v-11 l3.3 3.3',
  },
  {
    d: 'M28 103 H120 L132 115 M37 93 H111 L119 101 M46 83 H102 L107 88 M55 73 H93 L96 76',
    role: 'soft',
  },
  { d: 'M60 76 C60 52 94 52 94 76', role: 'accent' },
  { d: 'M60 76 C66 80 88 80 94 76 M77 54 V79', role: 'soft' },
  {
    d: 'M44 120.5 H128 M49 106.5 H115 M55 93.5 H103 M62 81.5 H92',
    role: 'soft',
    dashed: true,
  },
  {
    d: 'M40 150 l8 -14 M60 150 l8 -14 M80 150 l8 -14 M100 150 l8 -14 M120 150 l8 -14',
    role: 'ambient',
  },
  ...SEA,
]

export const KAKIN_PHASE_TWO_DRAWINGS = {
  // The Black Whale 1 in 3/4 from the bow, on the water: the hull, the
  // five tiers its habitable areas are split into stepped up the ship with
  // their rows of windows, and the top dome in tint. Kakin presents it in
  // chapter 342.
  'black-whale': BLACK_WHALE,

  // Tokarine's dark bob from behind and a little to her left, the top dyed
  // lighter in tint, the two locks pointing out to the sides and the earring
  // under the near one: the transport Hunter of chapter 359.
  'tokarine': [
    { d: 'M48 104 C42 68 58 44 80 44 C104 44 114 66 110 104 Z' },
    { d: 'M58 62 C66 46 98 46 106 62 C96 70 68 70 58 62 Z', role: 'accent' },
    { d: 'M48 102 L30 112 M110 102 L122 106' },
    { d: circle(44, 114, 4), role: 'soft' },
    {
      d: 'M56 82 l8 -6 M54 96 l12 -9 M62 104 l14 -11 M80 104 l14 -11 M96 102 l12 -9 M100 86 l8 -6',
      role: 'ambient',
    },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Vincent's knife and the stoppered vial of poison standing beside it: he
  // kills an attendant with the knife and shows the vial to frame her,
  // chapter 363.
  'vincent': [...VINCENT_KNIFE, ...VINCENT_VIAL, shadow(80, 166, 64)],

  // Barrigen's shirt collar and tie under his black suit, a white snake
  // coiled round the collar: the snakes that drain his blood in the Nen
  // class where he is named, chapter 370. The tie is in tint.
  'barrigen': [
    { d: 'M44 64 L68 56 L80 78 L92 56 L116 64 L124 160 H36 Z' },
    { d: 'M68 56 L72 72 L80 78 L88 72 L92 56', role: 'soft' },
    {
      d: 'M76 78 H84 L83 86 H77 Z M77 86 L71 144 L80 154 L89 144 L83 86',
      role: 'accent',
    },
    { d: 'M64 60 C60 44 100 44 96 60 C94 70 66 70 64 60' },
    {
      d: 'M96 60 C104 66 110 62 112 54 M64 60 C58 70 56 82 60 90',
      role: 'soft',
    },
    {
      d: 'M44 90 l10 -6 M42 106 l12 -7 M40 122 l14 -8 M106 90 l10 6 M106 106 l12 7 M106 122 l14 8',
      role: 'ambient',
    },
    shadow(80, 170, 50),
  ],

  // The chest of Belerainte's black suit in 3/4, the capital H on its top
  // left in tint, the lapels and collar, the far side hatched: the Hunter
  // guard who tells Kurapika's class he already uses Nen, chapter 370.
  'belerainte': [
    {
      d: 'M58 40 L30 54 C22 90 20 140 22 184 M96 38 L136 56 C144 96 146 140 146 184',
    },
    { d: 'M58 40 Q76 32 96 38', role: 'soft' },
    {
      d: 'M58 40 L48 62 L58 70 L50 82 L76 150 M96 38 L104 60 L94 70 L104 84 L76 150',
    },
    {
      d: 'M108 94 L110 120 M126 92 L128 118 M109 107 L127 105',
      role: 'accent',
    },
    { d: 'M48 62 L58 70 M104 60 L94 70', role: 'soft' },
    {
      d: 'M28 80 l10 -7 M26 100 l12 -8 M24 120 l14 -9 M24 140 l14 -9 M24 160 l14 -9',
      role: 'ambient',
    },
  ],

  // Danjin's shaved head from behind and a little to his left, the tall
  // cylindrical tuft on top in tint, the mutton chop down his jaw below the
  // ear, over the collar of his black suit: Tserriednich's guard, named at
  // the Nen class in chapter 369.
  'danjin': [
    { d: TURNED_SKULL },
    { d: `M74 50 V32 M90 50 V32 ${ellipse(82, 32, 8, 3)}`, role: 'accent' },
    { d: TURNED_EAR },
    { d: 'M47 96 C44 108 48 116 56 120 M53 96 C52 106 54 112 58 116' },
    { d: 'M48 104 l4 -3 M50 112 l5 -3', role: 'ambient' },
    { d: 'M104 66 l5 -4 M106 80 l5 -4 M106 94 l5 -4', role: 'ambient' },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Furykov's short fair hair from behind, the dark beard along his jaw just
  // showing, over the collar of his Kakin army zipper jacket: one of
  // Benjamin's soldiers, chapter 363.
  'furykov': FURYKOV,

  // Illardia's ear-length fair hair from behind and a little to her left,
  // parted in the middle, over the collar of her maid's robe in tint:
  // Fugetsu's maid at the class, chapter 369.
  'illardia': [
    { d: 'M48 94 C42 64 58 44 80 44 C102 44 114 64 110 96' },
    { d: 'M82 44 C80 50 80 56 81 60', role: 'soft' },
    {
      d: 'M48 94 Q53 88 58 94 Q63 88 68 94 M98 96 Q102 90 106 96 Q108 92 110 96',
      role: 'soft',
    },
    {
      d: 'M60 58 C56 72 58 84 58 94 M100 60 C102 72 100 84 100 96',
      role: 'soft',
    },
    { d: 'M58 94 C60 100 60 104 58 108 M98 96 C98 102 98 106 98 110' },
    { d: 'M104 70 l5 -4 M106 84 l5 -4', role: 'ambient' },
    { d: ROBE_COLLAR, role: 'accent' },
    ...TURNED_BODY,
  ],

  // Ladiolus's dark hair from behind and a little to her left, gathered in
  // two buns at the nape, the buns in tint, over the collar of her maid's
  // robe: Fugetsu's other maid at the class, chapter 369.
  'ladiolus': [
    { d: TURNED_SKULL },
    {
      d: `${circle(70, 108, 9)} M76.9 102.3 A8 8 0 1 1 78.3 111.6`,
      role: 'accent',
    },
    { d: 'M64 104 Q70 101 76 104', role: 'soft' },
    { d: 'M56 62 C62 76 66 88 68 99', role: 'soft' },
    {
      d: 'M54 78 l8 -6 M52 92 l10 -8 M68 66 l12 -10 M70 82 l8 -6 M92 62 l10 -8 M96 76 l10 -8 M98 90 l8 -6',
      role: 'ambient',
    },
    { d: ROBE_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Loberry's hand pointing out of the sleeve of her maid's robe, in 3/4,
  // the cuff in tint: she points at a doll nobody else in the class can
  // see, chapter 370.
  'loberry': [
    { d: 'M55 100 L5 155 M81 124 L31 179' },
    {
      d: ellipse(68, 112, 18, 7),
      role: 'accent',
      transform: 'rotate(42 68 112)',
    },
    {
      d: 'M66 104 C78 98 92 94 102 96 L136 92 Q142 92 142 97 Q142 102 136 102 L106 104 C110 106 110 112 104 113 C108 116 107 121 101 121 C104 125 101 129 95 128 L76 124',
    },
    {
      d: 'M80 112 C88 110 96 112 100 116 M102 96 C100 100 102 103 106 104',
      role: 'soft',
    },
    { d: 'M30 132 C36 142 38 152 36 162', role: 'soft' },
    {
      d: 'M44 154 l8 -8 M36 164 l8 -8 M54 142 l8 -8 M62 132 l6 -6',
      role: 'ambient',
    },
  ],

  // Longhi's long fair ponytail from behind, the tie that holds it in tint,
  // down the back of her black suit: Tubeppa's guard at the class, chapter
  // 369.
  'longhi': LONGHI,

  // A sealed letter in 3/4, its flap and seal, the seal in tint: Maor
  // agrees with Longhi that a letter is the way to deal with the teacher in
  // secret, chapter 369.
  'maor': [
    { d: 'M24 84 L120 70 L136 132 L40 146 Z' },
    { d: 'M24 84 L82 112 L120 70', role: 'soft' },
    { d: 'M40 146 L72 110 M136 132 L92 106', role: 'soft' },
    { d: circle(82, 112, 8), role: 'accent' },
    { d: 'M136 132 V140 L40 154 V146', role: 'soft' },
    { d: 'M100 136 l6 -4 M114 134 l6 -4 M84 140 l6 -4', role: 'ambient' },
    shadow(82, 168, 54),
  ],

  // Mushaho's head from behind: short fair hair over a broad, high crown,
  // the crown's outline in tint, over the collar of his black suit:
  // Salé-salé's guard at the class, chapter 370.
  'mushaho': [
    { d: 'M54 106 C48 66 60 44 80 44 C100 44 112 66 106 106', role: 'accent' },
    {
      d: 'M60 66 l4 -4 M68 58 l4 -4 M78 54 l4 -4 M88 56 l4 -4 M96 62 l4 -4',
      role: 'soft',
    },
    {
      d: 'M54 88 C48 86 46 94 50 100 M106 88 C112 86 114 94 110 100',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Kurapika's white tape line across the floor and Myuhan's black shoe
  // stepping over it, the shoe's toe in tint, the roll of tape beside it:
  // he crosses it on purpose to provoke the teacher, chapter 370.
  'myuhan': [
    MYUHAN_TAPE,
    ...MYUHAN_SHOE,
    { d: 'M60 120 V96 H80 V118', role: 'soft' },
    ...MYUHAN_ROLL,
    shadow(96, 160, 48),
  ],

  // Satobi's short fair hair from behind, styled into a point at either
  // side, the points in tint: Luzurus's guard at the class, chapter 370.
  'satobi': [
    { d: SKULL },
    { d: 'M58 84 L40 70 L58 70 M102 84 L120 70 L102 70', role: 'accent' },
    { d: 'M62 64 C68 72 70 84 68 96 M98 64 C92 72 90 84 92 96', role: 'soft' },
    {
      d: 'M54 92 C48 90 46 98 50 104 M106 92 C112 90 114 98 110 104',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // The back of Shedule's left hand and the pinion marked on it, his
  // glasses folded beside it: he looks at the mark in chapter 369.
  'shedule': [
    ...moved(PINION_HAND, 'translate(-14 0)'),
    { d: `${ellipse(124, 150, 12, 9)} ${ellipse(146, 148, 10, 8)}` },
    { d: 'M136 150 Q137 146 138 148 M112 148 L108 140 L132 136', role: 'soft' },
    shadow(80, 178, 56),
  ],

  // Tenftory's head from behind: the light Mohawk down the middle in tint,
  // the dark hair at the sides hatched and the arms of his glasses over his
  // ears: Zhang Lei's guard at the class, chapter 370.
  'tenftory': [
    { d: SKULL },
    { d: 'M72 106 C70 84 72 64 80 50 C88 64 90 84 88 106', role: 'accent' },
    {
      d: 'M60 72 l8 -6 M58 86 l10 -8 M60 98 l10 -8 M92 74 l8 -6 M92 88 l10 -8 M92 100 l8 -6',
      role: 'ambient',
    },
    {
      d: 'M44 86 L58 88 Q52 94 54 100 M116 86 L102 88 Q108 94 106 100',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // The back of Yuhirai's left hand laid across the box, the black cuff of
  // his suit at the wrist and the same pinion on it: he calls it the mark
  // of the resolve Halkenburg always espoused, chapter 369.
  'yuhirai': [
    ...moved(PINION_HAND, 'translate(184 26) rotate(90)'),
    { d: 'M6 80 H34 V132 H6 Z', role: 'soft' },
    {
      d: 'M10 88 l8 -6 M10 102 l14 -10 M10 116 l20 -14 M14 128 l18 -13',
      role: 'ambient',
    },
    shadow(90, 156, 62),
  ],

  // Yuri's dark bob from behind, hatched, over the collar of her servant's
  // robe in tint: Kacho's maid at the class, chapter 370.
  'yuri': [
    { d: 'M54 106 C50 70 62 52 80 52 C98 52 110 70 106 106 H54' },
    {
      d: 'M58 72 l12 -9 M56 88 l20 -15 M58 102 l26 -20 M74 104 l26 -20 M92 102 l12 -9',
      role: 'ambient',
    },
    {
      d: 'M60 124 C68 132 92 132 100 124 L96 116 C88 122 72 122 64 116 Z',
      role: 'accent',
    },
    ...FROM_BEHIND,
  ],

  // Slakka's spiky hair from behind, fair at the top in tint and dark at the
  // sides, hatched: Zhang Lei's guard, sent to Woble's quarters in chapter
  // 366.
  'slakka': [
    { d: SKULL },
    {
      d: 'M62 66 L58 46 L70 58 L72 36 L80 54 L88 36 L90 58 L102 46 L98 66',
      role: 'accent',
    },
    {
      d: 'M58 76 l8 -6 M56 90 l12 -9 M60 102 l10 -8 M94 76 l8 -6 M92 90 l12 -9 M92 102 l10 -8',
      role: 'ambient',
    },
    {
      d: 'M54 90 C48 88 46 96 50 102 M106 90 C112 88 114 96 110 102',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],
} satisfies Drawings

/** The Kakin records of phase 2 whose drawing changes in chapters 340–420 (#1154, #1156, #1158). */
export const kakinPhaseTwoRedrawn: Redrawings = {
  longhi: [
    // A sheet and a pen made of aura over the same ponytail made small, a
    // line left for the signature and open lines of aura round them: Moonlight
    // Act, the contract ability she shows Kurapika behind closed doors,
    // chapter 401. Nothing is written on the sheet.
    {
      episode: 148,
      chapter: 401,
      source: 'chapter',
      value: [
        ...moved(LONGHI, BESIDE_THE_BEAST),
        { d: 'M26 30 L108 16 L124 88 L42 102 Z' },
        { d: 'M42 102 L44 108 L126 94 L124 88', role: 'soft' },
        { d: 'M56 84 L112 74', role: 'soft' },
        { d: 'M120 30 L146 92 L142 98 L138 88 L114 34 Z M138 88 L142 98' },
        {
          d: 'M16 24 q-6 8 0 16 M134 14 q8 4 8 14 M150 62 q6 8 2 16 M30 112 q8 6 16 4',
          role: 'ambient',
        },
      ],
    },
  ],
  furykov: [
    // An open laptop seen from behind, the great tree on the back of its
    // screen in tint, over the same head made small, its hair now soft:
    // Combo Master, which he conjures in the flashback of chapter 415. The
    // tree is the Kakin tree the wiki names; its drawing is a frame check.
    {
      episode: 148,
      chapter: 415,
      source: 'chapter',
      value: [
        ...moved(softened(FURYKOV), BESIDE_THE_BEAST),
        { d: 'M34 20 L126 20 L122 92 L38 92 Z' },
        { d: 'M30 96 H130 L126 102 H34 Z', role: 'soft' },
        {
          d: 'M80 82 V62 M80 70 l-8 -6 M80 66 l8 -6 M80 82 l-8 6 M80 82 l8 6 M80 64 C64 64 56 54 60 46 C58 36 70 30 80 32 C90 30 102 36 100 46 C104 54 96 64 80 64',
          role: 'accent',
        },
        { d: 'M110 30 l8 -6 M112 50 l8 -6 M112 70 l8 -6', role: 'ambient' },
      ],
    },
  ],
  vincent: [
    // The same knife dropped on the floor at a sharp angle, the vial still
    // standing stoppered beside it: caught by Kurapika and Bill, he uses the
    // suicide pill hidden in one of his molars, chapter 364. The vial was
    // only his frame-up, so it stays shut.
    {
      episode: 148,
      chapter: 364,
      source: 'chapter',
      value: [
        ...moved(VINCENT_KNIFE, 'rotate(-14 96 140) matrix(-1 0 0 1 164 8)'),
        ...moved(VINCENT_VIAL, 'translate(-112 14)'),
        { d: 'M4 158 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  myuhan: [
    // The same shoe knocked over, sole up, at the tape line, the roll of
    // tape beside it, and no one in it: the Silent Majority user kills him
    // during the Nen class, chapter 376.
    {
      episode: 148,
      chapter: 376,
      source: 'chapter',
      value: [
        MYUHAN_TAPE,
        ...moved(MYUHAN_SHOE, 'translate(6 24) matrix(1 0 0 -1 0 270)'),
        ...MYUHAN_ROLL,
      ],
    },
  ],
}
