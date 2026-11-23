import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow } from '~/lib/svg/primitives'

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
 * far one hatched where it turns away.
 */
export const TURNED_BACK: Stroke[] = [
  { d: 'M58 104 L58 122 M98 108 L100 124' },
  { d: 'M16 180 C18 146 36 128 58 122 M138 180 C138 150 124 132 100 124' },
  { d: 'M118 148 l8 -6 M124 162 l8 -6 M128 176 l7 -5', role: 'ambient' },
]

/** The same neck and shoulders standing, with the shadow they throw. */
export const TURNED_BODY: Stroke[] = [...TURNED_BACK, shadow(78, 188, 58)]

/** A suit's collar round the back of the same neck. */
export const TURNED_COLLAR = 'M58 122 Q78 132 100 124'

/** The collar of a servant's robe round the back of the same neck. */
export const ROBE_COLLAR =
  'M56 122 C64 134 94 134 102 124 L98 116 C90 126 68 126 60 116 Z'

/**
 * The back of a left hand held up in 3/4, fingers together, the thumb's
 * side of the hand turning away and hatched, and the pinion marked on it in
 * tint: the mark Halkenburg's guards find on the backs of their hands.
 */
export const PINION_HAND: Stroke[] = [
  {
    d: 'M62 172 C58 152 56 132 56 112 V74 Q56 68 61.5 68 Q67 68 67 74 M67 74 V56 Q67 50 73 50 Q79 50 79 56 M79 56 V48 Q79 42 85 42 Q91 42 91 48 V56 Q91 50 97 50 Q103 50 103 56 V104',
  },
  {
    d: 'M103 56 Q108 56 108 62 V108 C116 108 124 102 128 96 Q132 90 136 94 Q139 98 134 106 C126 122 114 140 104 152 L100 172',
  },
  {
    d: 'M68 148 C72 136 82 124 94 116 M74 136 l-5 -5 M79 130 l-4 -6 M85 124 l-2 -6 M77 136 l6 2 M83 129 l6 1 M89 123 l5 0',
    role: 'accent',
  },
  { d: 'M67 74 V100 M79 56 V98 M91 56 V98', role: 'soft' },
  {
    d: 'M58 106 q4 -3 9 0 M68 104 q5 -3 10 0 M80 102 q5 -3 10 0 M92 104 q5 -3 10 0',
    role: 'soft',
  },
  { d: 'M103 70 l5 -4 M103 84 l5 -4 M103 98 l5 -4', role: 'ambient' },
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

/**
 * Kurapika's white tape line across the floor of the Nen class, its two
 * edges, broken where Myuhan's shoe stands on it.
 */
const MYUHAN_TAPE: Stroke = {
  d: 'M4 150 L44 147 M140 140 L156 139 M4 160 L40 157 M144 149 L156 148',
  role: 'soft',
}

/**
 * Myuhan's shoe in 3/4, toe to the right: the opening, the laces, the sole
 * and heel under it, the side turning away hatched, and the seam of the toe
 * in tint.
 */
const MYUHAN_SHOE: Stroke[] = [
  {
    d: 'M46 140 V124 C46 116 50 110 58 110 L84 114 C100 118 122 124 134 130 C144 135 146 146 136 148 L60 146 C52 146 46 144 46 140 Z',
  },
  {
    d: 'M44 140 C44 150 50 154 58 154 L136 156 C146 156 150 150 146 144 M46 148 V158 H62 V154',
    role: 'soft',
  },
  { d: 'M50 116 C56 108 78 110 86 118 C76 122 58 122 50 116 Z', role: 'soft' },
  { d: 'M116 124 C112 132 114 142 120 147', role: 'accent' },
  { d: 'M90 118 l3 6 M96 120 l3 6 M102 122 l3 6', role: 'soft' },
  {
    d: 'M54 140 l10 -8 M66 144 l14 -12 M80 146 l14 -12 M94 146 l12 -10',
    role: 'ambient',
  },
]

/** The roll of tape Kurapika drops, lying on the floor. */
const MYUHAN_ROLL: Stroke[] = [
  { d: `${ellipse(28, 176, 14, 6)} ${ellipse(28, 176, 6, 3)}` },
  { d: 'M14 176 V182 C14 188 42 188 42 182 V176', role: 'soft' },
]

/**
 * The Black Whale 1 in 3/4 from the bow: the hull and its deck, the five
 * tiers stepped up the ship with a row of windows each, the dome on top in
 * tint, on the water. The Kakin arc is drawn as the same ship.
 */
export const BLACK_WHALE: Stroke[] = [
  { d: 'M4 120 L28 130 H150 L134 114 H16 Z' },
  { d: 'M4 120 C8 138 16 148 32 152 H144 L150 130' },
  {
    d: 'M40 126 H132 V115 H40 Z M40 126 l-12 -12 v-11 l12 12 M45 112 H119 V101 H45 Z M45 112 l-7.8 -7.8 v-11 l7.8 7.8 M51 99 H107 V88 H51 Z M51 99 l-5 -5 v-11 l5 5 M58 87 H96 V76 H58 Z M58 87 l-3.3 -3.3 v-11 l3.3 3.3 M65 75 H85 V64 H65 Z M65 75 l-2.1 -2.1 v-11 l2.1 2.1',
  },
  {
    d: 'M28 103 H120 L132 115 M37 93 H111 L119 101 M46 83 H102 L107 88 M55 73 H93 L96 76 M62.9 61.9 H82.9 L85 64',
    role: 'soft',
  },
  { d: 'M64 64 C64 44 86 44 86 64', role: 'accent' },
  { d: 'M64 64 C68 67 82 67 86 64 M75 46 V66', role: 'soft' },
  {
    d: 'M44 120.5 H128 M49 106.5 H115 M55 93.5 H103 M62 81.5 H92 M69 69.5 H81',
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

  // A letter folded in three, lying in 3/4 with its top fold lifted, that
  // fold in tint: Maor and Longhi agree that a letter is the way to deal
  // with the teacher in secret, chapter 369. The wiki shows no letter, so
  // it is drawn plain, with no seal and nothing written on it.
  'maor': [
    {
      d: 'M35 124 L46 136 L126 116 L115 104 M46 136 L56 148 L136 128 L126 116',
    },
    { d: 'M35 124 L115 104', role: 'accent' },
    { d: 'M35 124 L28 98 L108 78 L115 104' },
    { d: 'M46 136 L126 116', role: 'soft' },
    shadow(84, 162, 56),
  ],

  // Mushaho's head from behind and a little to his left, so the broad,
  // protruding forehead and the prominent chin show in its outline past the
  // ear, the short fair hair in tint, over the collar of his black suit:
  // Salé-salé's guard at the class, chapter 369.
  'mushaho': [
    {
      d: 'M52 48 C42 50 38 60 42 70 C44 74 46 76 48 78 M47 96 C42 104 40 110 44 114 C48 118 54 118 58 116',
    },
    {
      d: 'M52 48 C58 36 72 32 86 34 C104 38 112 60 108 104 M52 48 C56 58 56 70 52 78 M54 98 C70 104 92 106 108 104',
      role: 'accent',
    },
    {
      d: 'M64 46 l4 -4 M78 40 l4 -4 M92 42 l4 -4 M68 60 l4 -4 M84 54 l4 -4 M74 74 l4 -4',
      role: 'soft',
    },
    { d: 'M100 66 l6 -5 M102 80 l6 -5 M100 94 l6 -5', role: 'ambient' },
    { d: TURNED_EAR },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Myuhan's shoe planted across Kurapika's white tape line, the seam of
  // its toe in tint, and the roll of tape Kurapika drops beside it: he steps
  // over the line on purpose to provoke the teacher, chapter 370.
  'myuhan': [MYUHAN_TAPE, ...MYUHAN_SHOE, ...MYUHAN_ROLL, shadow(96, 168, 48)],

  // Satobi's short fair hair from behind and a little to his left, styled
  // into a point at either side above the ears, the points in tint, the far
  // one smaller, over the collar of his black suit: Luzurus's guard at the class,
  // chapter 369.
  'satobi': [
    { d: TURNED_SKULL },
    { d: 'M53 54 L30 54 L48 70 M104 56 L120 56 L108 70', role: 'accent' },
    { d: TURNED_EAR },
    { d: 'M62 54 C68 66 70 80 68 98 M90 50 C94 64 94 82 92 100', role: 'soft' },
    { d: 'M103 80 l6 -5 M102 96 l6 -5', role: 'ambient' },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Shedule's left hand held up, the pinion on its back in tint, and his
  // glasses folded on the table beside it, the far lens hatched: he looks at
  // the mark in chapter 369.
  'shedule': [
    ...moved(PINION_HAND, 'translate(-20 14) scale(0.86)'),
    { d: `${ellipse(118, 166, 12, 7)} ${ellipse(142, 162, 9, 6)}` },
    {
      d: 'M130 165 Q131 160 133 162 M106 164 L102 156 L146 150 L152 156',
      role: 'soft',
    },
    { d: 'M136 164 l4 -3', role: 'ambient' },
    shadow(96, 182, 60),
  ],

  // Tenftory's head from behind and a little to his left: the light Mohawk
  // standing up down the middle in tint, its crest a line of its own, the
  // dark hair at the sides hatched and the arm of his glasses over the near
  // ear: Zhang Lei's guard at the class, chapter 369.
  'tenftory': [
    { d: TURNED_SKULL },
    { d: 'M76 104 C72 82 72 60 84 40 C92 58 94 82 92 104', role: 'accent' },
    { d: 'M84 46 C82 64 82 84 84 104', role: 'soft' },
    {
      d: 'M56 70 l10 -8 M54 86 l14 -11 M58 98 l14 -11 M96 76 l8 -6 M96 92 l10 -8',
      role: 'ambient',
    },
    { d: TURNED_EAR },
    { d: 'M30 74 L48 78 C54 80 54 88 50 94', role: 'soft' },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // The back of Yuhirai's hand reaching up out of the sleeve of his black
  // suit, the same pinion on it in tint, the sleeve's opening an ellipse at
  // the wrist and the sleeve hatched: he calls the mark the resolve
  // Halkenburg always espoused, chapter 369.
  'yuhirai': [
    ...moved(
      PINION_HAND,
      'translate(-16 -32) rotate(60 80 172) translate(80 172) scale(0.8) translate(-80 -172)',
    ),
    { d: ellipse(64, 140, 17, 6), transform: 'rotate(60 64 140)' },
    { d: 'M72 154 L4 194 M56 126 L0 158' },
    {
      d: 'M12 176 l-4 -8 M24 168 l-4 -8 M36 162 l-4 -8 M48 154 l-4 -8',
      role: 'ambient',
    },
  ],

  // Yuri's dark bob from behind and a little to her left, hatched, its cut
  // line seen in perspective, over the collar of her servant's robe in
  // tint: Kacho's maid at the class, chapter 370.
  'yuri': [
    {
      d: 'M46 102 C40 70 56 44 80 44 C104 44 116 66 112 100 M46 102 Q78 114 112 100',
    },
    {
      d: 'M54 70 l12 -9 M52 86 l20 -15 M54 100 l26 -20 M74 106 l26 -20 M94 104 l16 -12 M70 58 l12 -9',
      role: 'ambient',
    },
    { d: ROBE_COLLAR, role: 'accent' },
    ...TURNED_BODY,
  ],

  // Slakka's spiky hair from behind and a little to his left, the spikes
  // fanning out from the crown, fair at the top in tint and dark at the
  // sides, hatched, over the collar of his black suit: Zhang Lei's guard,
  // sent to Woble's quarters in chapter 366.
  'slakka': [
    { d: 'M50 104 C46 90 46 82 50 76 M106 66 C110 78 110 90 108 104' },
    {
      d: 'M50 76 L30 66 L52 62 L36 42 L60 52 L54 28 L70 46 L76 22 L84 44 L96 26 L94 48 L110 38 L102 56 L118 54 L106 66',
      role: 'accent',
    },
    { d: 'M52 72 C66 64 92 60 104 66', role: 'soft' },
    {
      d: 'M54 86 l8 -6 M52 98 l12 -9 M64 102 l10 -8 M98 82 l8 -6 M98 96 l10 -8 M70 80 l8 -6 M84 78 l8 -6',
      role: 'ambient',
    },
    { d: TURNED_EAR },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
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
    // The same shoe tipped over, sole up, beside the tape line and the roll,
    // and no one in it: Silent Majority kills him in the toilet during the
    // Nen class, chapter 376.
    {
      episode: 148,
      chapter: 376,
      source: 'chapter',
      value: [
        MYUHAN_TAPE,
        ...moved(MYUHAN_SHOE, 'translate(10 30) matrix(1 0 0 -1 0 270)'),
        ...MYUHAN_ROLL,
      ],
    },
  ],
}
