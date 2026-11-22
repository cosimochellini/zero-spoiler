import {
  type Drawings,
  moved,
  type Redrawings,
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
 * Longhi's long fair ponytail down the back of her black suit, the tie that
 * holds it in tint.
 */
const LONGHI: Stroke[] = [
  { d: SKULL },
  { d: 'M64 66 C70 60 90 60 96 66', role: 'soft' },
  {
    d: 'M74 82 C70 112 72 146 78 172 M86 82 C90 112 88 146 82 172 M78 172 L80 178 L82 172',
  },
  { d: 'M74 80 Q80 84 86 80 M74 86 Q80 90 86 86', role: 'accent' },
  { d: 'M80 92 V166', role: 'soft' },
  ...FROM_BEHIND,
]

/**
 * A combat boot of Benjamin's private army side on, the laces in tint and
 * the heavy sole hatched.
 */
const FURYKOV_BOOT: Stroke[] = [
  { d: 'M58 40 H94 V112 C110 116 128 122 134 134 V146 H40 V40' },
  { d: 'M40 146 V156 H136 V146' },
  {
    d: 'M46 154 l6 -6 M58 154 l8 -8 M74 154 l8 -8 M90 154 l8 -8 M106 154 l8 -8 M122 154 l8 -8',
    role: 'ambient',
  },
  {
    d: 'M64 50 L88 58 M88 50 L64 58 M64 66 L88 74 M88 66 L64 74 M64 82 L88 90 M88 82 L64 90 M64 98 L88 106 M88 98 L64 106',
    role: 'accent',
  },
  { d: 'M58 40 V112 M94 112 C90 120 82 126 70 128', role: 'soft' },
  { d: 'M40 52 H46 M40 64 H46', role: 'soft' },
  shadow(88, 170, 52),
]

/** Vincent's knife, its grip in tint. */
const VINCENT_KNIFE: Stroke[] = [
  { d: 'M18 132 L92 112 L96 120 L24 140 Q16 140 18 132 Z' },
  { d: 'M26 134 L90 117', role: 'soft' },
  { d: 'M92 108 L98 106 L102 124 L96 126 Z' },
  { d: 'M100 114 L136 104 L140 112 L104 122', role: 'accent' },
  { d: 'M112 112 l4 -1 M122 109 l4 -1', role: 'soft' },
]

/** The vial of poison Vincent shows to frame the attendant he killed. */
const VINCENT_VIAL: Stroke[] = [
  { d: 'M110 52 H128 V60 H110 Z' },
  { d: 'M113 60 V88 Q119 96 125 88 V60' },
  { d: 'M113 74 Q119 77 125 74', role: 'soft' },
  { d: 'M121 78 l3 -2 M121 86 l3 -2', role: 'ambient' },
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

export const KAKIN_PHASE_TWO_DRAWINGS = {
  // The Black Whale side on in the water: the long hull hatched below the
  // waterline, the five tiers stepped up the ship with their rows of
  // windows, and the dome over the top in tint. It is presented to the
  // public in chapter 342.
  'black-whale': [
    { d: 'M8 122 L20 146 H140 L154 122 Z' },
    { d: 'M24 122 V104 H136 V122 M34 104 V88 H126 V104 M44 88 V74 H116 V88' },
    { d: 'M54 74 C56 46 104 46 106 74', role: 'accent' },
    { d: 'M62 62 H98 M70 52 V74 M90 52 V74', role: 'soft' },
    {
      d: 'M30 113 H130 M40 96 H120 M50 81 H110 M14 132 H146',
      role: 'soft',
      dashed: true,
    },
    {
      d: 'M30 144 l6 -8 M48 144 l6 -8 M66 144 l6 -8 M84 144 l6 -8 M102 144 l6 -8 M120 144 l6 -8',
      role: 'ambient',
    },
    ...SEA,
  ],

  // Tokarine's dark bob from behind, the top dyed lighter in tint, the two
  // locks pointing out to the sides and the earring under one of them: the
  // transport Hunter of chapter 359.
  'tokarine': [
    { d: 'M54 104 C50 70 62 50 80 50 C98 50 110 70 106 104 Z' },
    { d: 'M62 60 C70 50 90 50 98 60 C90 66 70 66 62 60 Z', role: 'accent' },
    { d: 'M54 102 L38 108 M106 102 L122 108' },
    { d: circle(52, 114, 4), role: 'soft' },
    {
      d: 'M60 78 l8 -6 M58 92 l12 -9 M64 102 l14 -11 M80 102 l14 -11 M92 102 l10 -8',
      role: 'ambient',
    },
    ...FROM_BEHIND,
  ],

  // Vincent's knife and his vial of poison: he kills an attendant with the
  // knife and shows the vial to frame her, chapter 363.
  'vincent': [...VINCENT_KNIFE, ...VINCENT_VIAL, shadow(80, 156, 60)],

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

  // Belerainte's raised hand in the sleeve of his black suit, the shirt
  // cuff in tint: he raises it when Kurapika asks who already uses Nen,
  // chapter 370.
  'belerainte': [
    {
      d: 'M62 112 V58 Q62 52 67 52 Q72 52 72 58 V96 M72 94 V46 Q72 40 77 40 Q82 40 82 46 V94 M82 94 V50 Q82 44 87 44 Q92 44 92 50 V98 M92 100 V62 Q92 56 97 56 Q102 56 102 62 V114',
    },
    {
      d: 'M62 112 C52 104 44 96 42 86 Q40 80 46 80 Q50 80 52 86 C54 94 58 98 62 100',
    },
    { d: 'M60 116 H104 V128 H60 Z', role: 'accent' },
    { d: 'M56 128 H108 L114 184 H50 Z' },
    { d: 'M98 140 l8 -5 M100 156 l8 -5 M102 172 l8 -5', role: 'ambient' },
    { d: 'M64 66 h8 M72 56 h10 M82 60 h10 M92 72 h10', role: 'soft' },
  ],

  // Danjin's head from behind, shaved but for the tall tuft on top, in tint,
  // over the collar of his black suit: Tserriednich's guard at the Nen
  // class, chapter 370.
  'danjin': [
    { d: SKULL },
    { d: 'M72 58 V34 M88 58 V34', role: 'accent' },
    { d: ellipse(80, 34, 8, 3), role: 'accent' },
    { d: 'M74 44 l6 -4 M74 52 l12 -8 M80 56 l8 -6', role: 'ambient' },
    {
      d: 'M54 86 C48 84 46 92 50 98 M106 86 C112 84 114 92 110 98',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // A combat boot of Benjamin's private army side on, the laces in tint and
  // the heavy sole hatched: Furykov is one of his soldiers, chapter 363.
  'furykov': FURYKOV_BOOT,

  // Illardia's ear-length fair hair from behind, parted in the middle, over
  // the collar of a servant's robe in tint: Fugetsu's maid at the class,
  // chapter 370.
  'illardia': [
    { d: 'M54 104 C50 70 62 52 80 52 C98 52 110 70 106 104' },
    { d: 'M80 52 V70', role: 'soft' },
    {
      d: 'M54 104 Q58 98 62 104 Q66 98 70 104 M90 104 Q94 98 98 104 Q102 98 106 104',
      role: 'soft',
    },
    {
      d: 'M62 64 C60 78 62 92 60 104 M98 64 C100 78 98 92 100 104',
      role: 'soft',
    },
    {
      d: 'M60 124 C68 132 92 132 100 124 L96 116 C88 122 72 122 64 116 Z',
      role: 'accent',
    },
    ...FROM_BEHIND,
  ],

  // Ladiolus's dark hair from behind, gathered in two buns at the nape, the
  // buns in tint: Fugetsu's other maid at the class, chapter 370.
  'ladiolus': [
    { d: SKULL },
    { d: `${circle(68, 104, 9)} ${circle(92, 104, 9)}`, role: 'accent' },
    { d: 'M64 64 C70 80 70 92 68 96 M96 64 C90 80 90 92 92 96', role: 'soft' },
    {
      d: 'M66 66 l10 -7 M64 80 l18 -13 M70 90 l20 -14 M86 92 l12 -9',
      role: 'ambient',
    },
    ...FROM_BEHIND,
  ],

  // Loberry's hand pointing out of the sleeve of her servant's robe, the
  // cuff in tint: she points the whole class at a woman nobody else can
  // see, chapter 370.
  'loberry': [
    { d: 'M14 120 L62 104 L68 128 L20 144 Z' },
    { d: 'M62 104 L72 100 L78 124 L68 128', role: 'accent' },
    {
      d: 'M76 102 C86 98 96 98 100 102 L140 94 Q146 94 146 100 Q146 104 140 106 L104 114 M104 114 C104 120 98 124 92 124 M90 124 C96 126 98 132 92 134 H80 L78 124',
    },
    { d: 'M98 112 Q94 116 96 120 M90 124 Q88 120 90 116', role: 'soft' },
    { d: 'M24 136 l8 -4 M36 134 l8 -4 M46 130 l8 -4', role: 'ambient' },
    shadow(76, 160, 56),
  ],

  // Longhi's long fair ponytail down the back of her black suit, the tie
  // that holds it in tint: Tubeppa's guard at the class, chapter 370.
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

  // Myuhan's shoe planted across Kurapika's white tape line, the seam of
  // its toe in tint, and the roll of tape Kurapika drops beside it: he steps
  // over the line on purpose to provoke the teacher, chapter 370.
  'myuhan': [MYUHAN_TAPE, ...MYUHAN_SHOE, ...MYUHAN_ROLL, shadow(96, 168, 48)],

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
    // screen in tint, over the same boot made small: Combo Master, which he
    // conjures in the flashback of chapter 415. The tree is the Kakin tree
    // the wiki names; its drawing is a frame check.
    {
      episode: 148,
      chapter: 415,
      source: 'chapter',
      value: [
        ...moved(
          FURYKOV_BOOT,
          'translate(80 196) scale(0.5) translate(-80 -196)',
        ),
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
    // The dropped knife and vial, the vial tipped on its side: caught by
    // Kurapika and Bill, he swallows the poison pill hidden in his molar,
    // chapter 364. The vial is not what kills him.
    {
      episode: 148,
      chapter: 364,
      source: 'chapter',
      value: [
        ...moved(VINCENT_KNIFE, 'translate(0 20)'),
        ...moved(VINCENT_VIAL, 'rotate(-90 119 74) translate(-80 -20)'),
        { d: 'M4 162 H156', role: 'ambient', dashed: true },
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
