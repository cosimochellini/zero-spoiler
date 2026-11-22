import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import {
  BASHO_BRUSH,
  BIG_BANG_IMPACT,
  BLACK_VOICE_ARCS,
  KISS,
  KORTOPI_VASE,
  LIPSTICK,
  MACHINE_GUN_HAND,
  NEON_PEN,
  NEON_SHEETS,
  OWL_BUNDLE,
  SHALNARK_PHONE,
  TOCINO_ROBE,
  TOCINO_ROBE_OUTLINE,
  TOCINO_SWORD,
  UVOGIN_VEST,
} from './yorknew-city'

/** The outline of the head of Zeno's aura dragon, facing right. */
const DRAGON_SKULL: Stroke = {
  d: 'M-20 -10 C-12 -20 4 -20 14 -12 L30 -8 M20 18 C6 16 -6 14 -14 10',
}

/** Its open jaws. */
const DRAGON_JAWS: Stroke = { d: 'M30 -8 L28 -1 L4 2 L24 14 L20 18' }

/** Its two horns, swept back, and a line down the cheek. */
const DRAGON_HORNS: Stroke = {
  d: 'M-8 -15 L-32 -28 L-2 -18 M0 -17 L-14 -40 L6 -16',
}
const DRAGON_CHEEK: Stroke = { d: 'M-16 2 C-8 4 -2 4 4 2', role: 'soft' }

/**
 * Zeno's aura dragon of Dragon Head thrown as a straight shot: the head in
 * 3/4 at the upper right, horns in tint and jaws open, no eye, the body
 * trailing behind it in a straight line to the lower left. Zeno's own stage
 * lays it over his robe.
 */
export const DRAGON_HEAD: Stroke[] = [
  ...moved(
    [
      DRAGON_SKULL,
      { ...DRAGON_JAWS, role: 'soft' },
      { ...DRAGON_HORNS, role: 'accent' },
      DRAGON_CHEEK,
    ],
    'translate(110 62) rotate(-38) scale(1.5)',
  ),
  {
    d: 'M77 69 C64 72 58 86 46 96 C34 106 30 120 22 132 L12 156 M103 87 C90 92 82 106 68 114 C54 122 48 134 38 142 L12 156',
  },
  { d: 'M70 82 L82 98 M52 100 L60 116 M32 124 L42 136', role: 'soft' },
  { d: 'M66 64 L36 92 M122 98 L92 126 M92 134 L68 154', role: 'ambient' },
]

/** The ring a chain of Kurapika's hangs from, seen a little from above. */
const CHAIN_RING: Stroke[] = [
  { d: ellipse(80, 40, 11, 4.5), role: 'soft' },
  { d: 'M69 40 V44 C72 50 88 50 91 44 V40' },
]

/** Five links hanging from the ring, each face on and edge on in turn. */
const CHAIN_LINKS: Stroke[] = [
  {
    d: 'M79.7 45.8 A6.5 3.4 80.9 1 0 81.7 58.8 A6.5 3.4 80.9 1 0 79.7 45.8 M82.5 63.1 A6.6 3.4 79.6 1 0 84.9 75.9 A6.6 3.4 79.6 1 0 82.5 63.1 M85.7 80.3 A6.5 3.4 80.4 1 0 87.9 93.2 A6.5 3.4 80.4 1 0 85.7 80.3 M88.5 97.4 A6.5 3.4 81.7 1 0 90.4 110.4 A6.5 3.4 81.7 1 0 88.5 97.4 M91 114.7 A6.5 3.4 81.6 1 0 92.9 127.6 A6.5 3.4 81.6 1 0 91 114.7',
  },
  {
    d: 'M81 54.5 L83.3 67.4 M84.1 71.6 L86.4 84.6 M87.2 88.9 L89.2 101.8 M89.8 106.1 L91.6 119 M92.2 123.3 L94.4 136.1',
    role: 'soft',
  },
]

/**
 * The Dowsing Chain hanging from its ring, the ball-shaped weight at its end
 * in tint and its far side hatched. Kurapika's stage from episode 40 /
 * chapter 68 draws it too.
 */
export const DOWSING_CHAIN: Stroke[] = [
  ...CHAIN_RING,
  ...CHAIN_LINKS,
  { d: circle(95, 150, 12), role: 'accent' },
  { d: 'M91 140 h8', role: 'soft' },
  { d: 'M88 143 C85 146 84 150 85 153', role: 'soft' },
  { d: 'M100 156 l5 -4 M98 160 l6 -5 M102 150 l4 -3', role: 'ambient' },
]

/** Chain Jail's hook, its end piece, hanging from the origin, in tint. */
const CHAIN_JAIL_HOOK: Stroke[] = [
  {
    d: 'M-3 0 V20 C-3 35 19 35 19 20 V8 L11 18 V20 C11 27 3 27 3 20 V0 Z',
    role: 'accent',
  },
]

/** A few open lines over a far figure's robe: it is black. */
const FAR_ROBE_HATCH: Stroke[] = [
  { d: 'M90 80 l14 -10 M90 118 l16 -11 M90 156 l17 -12', role: 'ambient' },
]

/**
 * A bony fish swimming left: a skull with no eyes, its spine in tint, the
 * ribs above and below and the rays of its tail.
 */
const BONE_FISH: Stroke[] = [
  {
    d: 'M62 96 C50 94 38 100 32 108 C38 116 50 120 62 120 C59 112 59 104 62 96 Z',
  },
  { d: 'M34 110 L50 112 M52 100 C54 106 54 112 52 118', role: 'soft' },
  { d: 'M62 108 C82 105 104 105 124 109', role: 'accent' },
  {
    d: 'M72 106 C72 96 76 90 82 88 M84 106 C84 96 88 90 94 89 M96 106 C96 98 100 93 105 92 M108 107 C108 101 111 98 115 97 M72 107 C72 117 76 123 82 125 M84 106 C84 116 88 122 94 123 M96 106 C96 114 100 119 105 120 M108 107 C108 113 111 116 115 117',
  },
  { d: 'M124 109 L144 94 L139 109 L144 124 Z', role: 'soft' },
]

export const YORKNEW_ABILITY_DRAWINGS: Drawings = {
  // Three of the hooded figures in black who ambush the applicants, the
  // front one raising a sword with the guard in tint, each robe's far half
  // hatched because they are black: they burst into the room in chapter 67 and
  // attack with swords in episode 39. The front figure is Tocino's own robe
  // and sword. No faces, and nothing that says who sends them.
  'eleven-black-children': [
    ...moved(
      [...TOCINO_ROBE_OUTLINE, ...FAR_ROBE_HATCH],
      'translate(92 66) scale(0.3) translate(-80 -100)',
    ),
    ...moved(
      [...TOCINO_ROBE_OUTLINE, ...FAR_ROBE_HATCH],
      'translate(120 102) scale(0.42) translate(-80 -100)',
    ),
    ...moved(
      [...TOCINO_ROBE, ...TOCINO_SWORD],
      'translate(56 112) scale(-0.6 0.6) translate(-80 -100)',
    ),
    shadow(56, 170, 34),
  ],
  // Baise's lipstick standing open, and beside it a pair of lips in tint as
  // the sign of her kiss: the kiss puts the one who receives it under her
  // orders, as she shows on a thug in episode 39 and on Squala in chapter 68.
  // No face.
  'instant-lover': [
    ...moved(softened(LIPSTICK), 'translate(-26 4)'),
    ...KISS,
    {
      d: 'M94 82 l-6 -6 M116 76 v-8 M138 82 l6 -6 M94 118 l-6 6 M138 118 l6 6',
      role: 'ambient',
    },
    shadow(54, 168, 26),
  ],
  // Neon's pen over her stack of sheets, and on it the little winged ghost
  // her aura makes, its wings in tint, guiding her hand as she writes the
  // fortunes, episode 41 / chapter 71. Her lines of writing are open
  // strokes, never words. No face on the ghost.
  'lovely-ghostwriter': [
    ...NEON_SHEETS,
    ...softened(NEON_PEN),
    {
      d: 'M66 60 C62 40 68 24 80 24 C92 24 98 40 94 58 C90 54 88 62 84 59 C80 55 78 64 74 60 C70 56 68 64 66 60 Z',
    },
    {
      d: 'M66 40 C58 32 50 34 48 40 C54 42 60 44 65 46 M95 38 C104 30 112 32 112 38 C106 41 100 43 95 45',
      role: 'accent',
    },
    {
      d: 'M50 132 l28 -7.4 M54 136 l28 -7.4 M58 139 l20 -5.3 M74 146 l26 -6.9 M78 150 l26 -6.9 M82 153 l16 -4.2',
      role: 'ambient',
    },
    shadow(84, 184, 58),
  ],
  // Blinky, the vacuum cleaner Shizuku conjures: its canister in 3/4 with
  // its side hatched, its eyes and mouth drawn on the front as a symbol in
  // tint, the hose curling to the nozzle on the floor and the air drawn in
  // by it. She cleans up the auction hall with it in episode 43 / chapter
  // 73. The canister's shape is not checked against a frame.
  'blinky': [
    { d: 'M28 152 V112 C28 92 44 84 64 84 C84 84 100 92 100 112 V152 Z' },
    { d: 'M56 85 C62 77 70 74 78 74 C98 74 114 82 114 102 V142 L100 152' },
    { d: 'M100 112 L114 102', role: 'soft' },
    {
      d: `${circle(50, 106, 8)} ${circle(52, 107, 3)} ${circle(78, 106, 8)} ${circle(80, 107, 3)} M40 126 C52 136 76 136 88 126 C80 144 48 144 40 126 Z`,
      role: 'accent',
    },
    { d: 'M104 140 l7 -6 M104 126 l7 -6 M104 112 l7 -6', role: 'ambient' },
    {
      d: 'M92 76 C100 48 138 40 144 68 C148 88 140 116 140 140 M100 80 C106 60 132 54 136 72 C140 90 132 116 132 140',
    },
    { d: 'M124 140 H148 L154 154 H120 Z' },
    { d: 'M104 156 h10 M108 150 h8 M106 162 h10', role: 'ambient' },
    shadow(70, 164, 46),
  ],
  // The chain wound round and round Uvogin's bearskin vest, its links drawn
  // and its hook in tint: Kurapika's Chain Jail binds him and drags him off,
  // episode 44 / chapter 77. No head and no face.
  'chain-jail': [
    ...softened(UVOGIN_VEST),
    {
      d: 'M24 62 A5 3 25.3 1 0 33 66.3 A5 3 25.3 1 0 24 62 M36.7 67.9 A5 3 21.6 1 0 46 71.6 A5 3 21.6 1 0 36.7 67.9 M49.8 72.9 A5 3 17.7 1 0 59.3 75.9 A5 3 17.7 1 0 49.8 72.9 M63.2 77 A5 3 13.6 1 0 72.9 79.4 A5 3 13.6 1 0 63.2 77 M76.8 80.2 A5 3 9.1 1 0 86.7 81.8 A5 3 9.1 1 0 76.8 80.2 M90.7 82.2 A5 3 4.2 1 0 100.6 83 A5 3 4.2 1 0 90.7 82.2 M104.6 83.1 A5 3 -1.1 1 0 114.6 82.9 A5 3 -1.1 1 0 104.6 83.1 M118.6 82.6 A5 3 -6.9 1 0 128.5 81.4 A5 3 -6.9 1 0 118.6 82.6',
    },
    {
      d: 'M24 92 A5 3 25.3 1 0 33 96.3 A5 3 25.3 1 0 24 92 M36.7 97.9 A5 3 21.6 1 0 46 101.6 A5 3 21.6 1 0 36.7 97.9 M49.8 102.9 A5 3 17.7 1 0 59.3 105.9 A5 3 17.7 1 0 49.8 102.9 M63.2 107 A5 3 13.6 1 0 72.9 109.4 A5 3 13.6 1 0 63.2 107 M76.8 110.2 A5 3 9.1 1 0 86.7 111.8 A5 3 9.1 1 0 76.8 110.2 M90.7 112.2 A5 3 4.2 1 0 100.6 113 A5 3 4.2 1 0 90.7 112.2 M104.6 113.1 A5 3 -1.1 1 0 114.6 112.9 A5 3 -1.1 1 0 104.6 113.1 M118.6 112.6 A5 3 -6.9 1 0 128.5 111.4 A5 3 -6.9 1 0 118.6 112.6',
    },
    {
      d: 'M24 122 A5 3 25.3 1 0 33 126.3 A5 3 25.3 1 0 24 122 M36.7 127.9 A5 3 21.6 1 0 46.1 131.6 A5 3 21.6 1 0 36.7 127.9 M49.8 132.9 A5 3 17.8 1 0 59.3 136 A5 3 17.8 1 0 49.8 132.9 M63.2 137.1 A5 3 13.7 1 0 72.9 139.4 A5 3 13.7 1 0 63.2 137.1 M76.8 140.2 A5 3 9.1 1 0 86.7 141.8 A5 3 9.1 1 0 76.8 140.2 M90.6 142.3 A5 3 4.1 1 0 100.6 143 A5 3 4.1 1 0 90.6 142.3 M104.6 143.1 A5 3 -1.5 1 0 114.6 142.8 A5 3 -1.5 1 0 104.6 143.1 M118.6 142.5 A5 3 -7.9 1 0 128.5 141.1 A5 3 -7.9 1 0 118.6 142.5',
    },
    {
      d: 'M30 64.9 L39.9 69.2 M42.8 70.3 L53 74 M56.1 75 L66.4 77.9 M69.6 78.6 L80.2 80.8 M83.3 81.3 L94.1 82.6 M97.2 82.8 L108 83.1 M111.2 83 L122 82.3 M30 94.9 L39.9 99.2 M42.8 100.3 L53 104 M56.1 105 L66.4 107.9 M69.6 108.6 L80.2 110.8 M83.3 111.3 L94.1 112.6 M97.2 112.8 L108 113.1 M111.2 113 L122 112.3 M30 124.9 L39.9 129.2 M42.8 130.3 L53 134 M56.1 135 L66.4 137.9 M69.6 138.7 L80.1 140.8 M83.3 141.3 L94 142.6 M97.2 142.8 L108 143.1 M111.2 143 L122 142.1 M128.5 141.1 L136 144',
      role: 'soft',
    },
    ...moved(CHAIN_JAIL_HOOK, 'translate(138 146)'),
  ],
  // A scarlet eye as a symbol in tint, over Chain Jail's hook hanging from
  // its ring and bristling with open lines of aura: Kurapika's eyes turn
  // scarlet and every type of Nen is his at full strength while Chain Jail
  // holds Uvogin, episode 47 / chapter 83. Only the chain that scene shows.
  // No hand and no face.
  'emperor-time': [
    {
      d: `M56 26 Q80 6 104 26 Q80 46 56 26 Z ${circle(80, 26, 7)}`,
      role: 'accent',
    },
    ...moved(
      [
        ...CHAIN_RING,
        ...CHAIN_LINKS,
        ...moved(softened(CHAIN_JAIL_HOOK), 'translate(93.5 136)'),
      ],
      'translate(74 58) scale(0.9) translate(-80 -40)',
    ),
    {
      d: 'M56 76 l-12 -6 M52 108 h-14 M58 140 l-12 6 M108 76 l12 -6 M114 108 h14 M116 140 l12 6',
      role: 'ambient',
    },
  ],
  // Bandit's Secret standing half open, its spine to the reader in tint and
  // the front cover turned towards them, the page block's top and the far
  // cover hatched: Chrollo holds it as his Indoor Fish devour an assassin,
  // episode 51 / chapter 97. Nothing on the cover.
  'skill-hunter': [
    { d: 'M76 56 L30 40 V150 L76 170' },
    { d: 'M84 56 L128 42 V152 L84 170' },
    {
      d: 'M76 56 C76 50 84 50 84 56 V170 C84 176 76 176 76 170 Z',
      role: 'accent',
    },
    { d: 'M36 46 Q80 30 122 46 M76 56 L36 46 M84 56 L122 46', role: 'soft' },
    {
      d: 'M48 46 L78 52 M60 42 L80 50 M100 42 L82 50 M112 44 L84 52',
      role: 'ambient',
    },
    { d: 'M38 60 V140 M44 62 V142', role: 'soft' },
    {
      d: 'M94 66 l26 -8 M94 86 l26 -8 M94 106 l26 -8 M94 126 l26 -8 M94 146 l26 -8',
      role: 'ambient',
    },
    shadow(80, 184, 52),
  ],
  // A chair in 3/4 wrapped in flames in tint, its far side hatched, and
  // beside it Basho's brush lying on a blank strip of paper: the haiku he
  // writes makes the chair he punches catch fire, episode 40 / chapter 68.
  // No words on the strip.
  'great-hiker': [
    { d: 'M30 112 L60 98 L106 104 L80 120 Z' },
    { d: 'M30 112 V118 L80 126 V120 M80 126 L106 110 V104' },
    { d: 'M32 118 V158 M78 126 V166 M104 110 V150 M60 104 V112', role: 'soft' },
    {
      d: 'M60 98 V40 M106 104 V46 M60 40 L106 46 M60 52 L106 58 M60 64 L106 70',
    },
    { d: 'M92 122 l8 -6 M92 136 l8 -6 M92 150 l8 -6', role: 'ambient' },
    {
      d: 'M36 112 C28 96 38 86 34 72 C46 80 48 92 46 104 M72 120 C66 100 80 92 74 76 C88 86 90 100 86 116 M56 64 C48 48 58 40 52 24 C66 34 68 48 64 62 M100 70 C108 54 100 42 106 28 C118 42 116 56 106 74',
      role: 'accent',
    },
    { d: 'M108 168 L140 154 L152 160 L120 174 Z', role: 'soft' },
    ...moved(
      softened(BASHO_BRUSH),
      'translate(128 160) rotate(-67) scale(0.42) translate(-77 -94)',
    ),
    shadow(68, 176, 46),
  ],
  // The Dowsing Chain hanging from its ring, its ball weight in tint
  // between the open arcs of its swing: Kurapika swings it before each
  // applicant and it sways for the liar, episode 40 / chapter 68. No hand.
  'dowsing-chain': [
    ...DOWSING_CHAIN,
    { d: 'M58 148 Q66 152 76 152 M114 147 Q122 145 130 140', role: 'ambient' },
    shadow(92, 184, 22),
  ],
  // Franklin's two hands seen from the side, pointing ahead with their
  // fingers spread, the tips hanging below on small chains in tint and
  // bullets of aura streaking on from the cut ends, the far hand hatched:
  // he massacres the auction hall, episode 43 / chapter 73. No face.
  'double-machine-gun': [
    ...moved(
      [
        ...softened(MACHINE_GUN_HAND),
        { d: 'M-34 -2 l8 -8 M-22 6 l8 -8 M-10 12 l8 -8', role: 'ambient' },
      ],
      'translate(80 50) scale(0.72)',
    ),
    ...moved(MACHINE_GUN_HAND, 'translate(52 122)'),
  ],
  // Uvogin's right fist driven down into the ground, seen from the front:
  // the curled fingers with the thumb across them and the knuckles in tint,
  // the crater it blasts open around it with the far wall hatched and lines
  // of the blast flying off: Big Bang Impact, episode 44 / chapter 76.
  'big-bang-impact': BIG_BANG_IMPACT,
  // Owl's knotted bundle shrunk small on an open palm, the two ends of its
  // knot in tint: he holds the tiny cloth with Nobunaga shrunk inside,
  // episode 45 / chapter 77. No face.
  'fun-fun-cloth': [
    ...moved(OWL_BUNDLE, 'translate(90 139) scale(0.5) translate(-80 -150)'),
    {
      d: 'M6 128 C24 130 38 132 48 134 C46 124 48 114 54 110 C58 108 62 112 60 118 C58 126 58 132 62 138 C80 142 104 142 120 138 C128 130 132 118 138 110 C142 104 150 106 148 114 C144 128 136 144 122 152 C100 164 50 166 6 158',
    },
    {
      d: 'M124 142 C130 134 136 126 142 118 M64 150 C80 154 100 154 112 150',
      role: 'soft',
    },
    { d: 'M30 156 l6 -6 M48 158 l6 -6 M66 160 l6 -6', role: 'ambient' },
  ],
  // Kurapika's forearm with the Holy Chain draped over it, its links drawn
  // and the cross pendant in 3/4 hanging below in tint, the underside of
  // the arm hatched: the chain heals the arm Uvogin broke, episode 47 /
  // chapter 84. No hand and no face.
  'holy-chain': [
    {
      d: 'M4 86 C30 80 60 84 90 90 C116 96 140 96 156 94 M4 130 C30 132 56 128 84 122 C110 118 136 118 156 118',
    },
    { d: 'M30 96 C46 98 58 102 70 108', role: 'soft' },
    {
      d: 'M24 122 l6 -6 M44 121 l6 -6 M108 120 l6 -6 M128 121 l6 -6',
      role: 'ambient',
    },
    {
      d: 'M28 104 A4.5 2.6 -13.3 1 0 36.8 101.9 A4.5 2.6 -13.3 1 0 28 104 M39.7 101.3 A4.5 2.6 -10.7 1 0 48.6 99.6 A4.5 2.6 -10.7 1 0 39.7 101.3 M51.5 99.2 A4.5 2.6 -6.5 1 0 60.4 98.1 A4.5 2.6 -6.5 1 0 51.5 99.2 M63.5 98 A4.5 2.6 1.8 1 0 72.4 98.3 A4.5 2.6 1.8 1 0 63.5 98 M75.4 98.8 A4.4 2.6 27.8 1 0 83.2 102.9 A4.4 2.6 27.8 1 0 75.4 98.8 M84 104 A4.5 2.6 66.3 1 0 87.6 112.2 A4.5 2.6 66.3 1 0 84 104 M88.6 115.1 A4.5 2.6 75.8 1 0 90.8 123.8 A4.5 2.6 75.8 1 0 88.6 115.1 M91.3 126.8 A4.5 2.6 85.6 1 0 92 135.7 A4.5 2.6 85.6 1 0 91.3 126.8',
    },
    {
      d: 'M33.8 102.6 L42.7 100.7 M45.5 100.2 L54.5 98.7 M57.4 98.4 L66.5 97.9 M69.4 98 L78.3 99.6 M81 100 L86 108 M86.5 109.4 L89.5 118 M90.2 120.8 L91.6 129.8 M92 134 V142',
      role: 'soft',
    },
    {
      d: 'M88 142 H96 V152 H106 V160 H96 V180 H88 V160 H78 V152 H88 Z',
      role: 'accent',
    },
    {
      d: 'M96 142 L100 139 V149 H110 V157 L106 160 M100 149 L96 152 M96 180 L100 177 V160',
      role: 'soft',
    },
  ],
  // A heart with the Judgment Chain coiled round it, its links drawn and
  // the blade at its end in tint, poised and not yet piercing, the far side
  // of the heart hatched: Kurapika wraps it round Uvogin's heart, episode
  // 47 / chapter 84.
  'judgment-chain': [
    {
      d: 'M80 150 C40 118 30 96 36 78 C42 58 68 56 80 76 C92 56 118 58 124 78 C130 96 120 118 80 150 Z',
    },
    { d: 'M46 80 C50 70 60 68 66 74', role: 'soft' },
    { d: 'M108 82 l8 -6 M112 98 l8 -6 M106 114 l8 -6', role: 'ambient' },
    {
      d: 'M34 104 A4.7 2.8 53.8 1 0 39.6 111.7 A4.7 2.8 53.8 1 0 34 104 M42.2 114.1 A4.7 2.8 34.4 1 0 50 119.4 A4.7 2.8 34.4 1 0 42.2 114.1 M53.1 121 A4.8 2.8 19.6 1 0 62.1 124.2 A4.8 2.8 19.6 1 0 53.1 121 M65.4 125 A4.7 2.8 8 1 0 74.8 126.3 A4.7 2.8 8 1 0 65.4 125 M78.3 126.5 A4.7 2.8 -2.5 1 0 87.8 126.1 A4.7 2.8 -2.5 1 0 78.3 126.5 M91.3 125.6 A4.7 2.8 -13.3 1 0 100.5 123.4 A4.7 2.8 -13.3 1 0 91.3 125.6 M103.8 122.3 A4.7 2.8 -26.2 1 0 112.4 118.1 A4.7 2.8 -26.2 1 0 103.8 122.3 M115.3 116.1 A4.7 2.8 -43 1 0 122.2 109.7 A4.7 2.8 -43 1 0 115.3 116.1',
    },
    {
      d: 'M37.5 109.2 L44.7 116.1 M47.2 117.8 L56.1 122.2 M58.9 123.3 L68.6 125.6 M71.7 126 L81.6 126.5 M84.6 126.4 L94.5 125 M97.4 124.3 L106.8 121 M109.5 119.7 L117.8 114.1 M122.2 109.7 L130 98',
      role: 'soft',
    },
    { d: 'M130 98 L140 70 L144 92 L134 102 Z', role: 'accent' },
    { d: 'M137 84 L135 96', role: 'soft' },
  ],
  // Two bony fish, all skull, spine and ribs and no eyes, swimming in the
  // corner of a closed room, the walls and floor in faint lines and the
  // nearer fish's spine in tint: Chrollo's Indoor Fish feed on an assassin
  // in a sealed room, episode 51 / chapter 97.
  'indoor-fish': [
    {
      d: 'M30 16 V160 M30 160 H156 M30 160 L6 184 M30 16 H156 M30 16 L6 4',
      role: 'ambient',
    },
    ...moved(BONE_FISH, 'translate(8 20)'),
    ...moved(
      softened(BONE_FISH),
      'translate(86 60) scale(-0.6 0.6) translate(-88 -108)',
    ),
  ],
  // Zeno's aura dragon thrown as a straight shot, the head in 3/4 with its
  // horns in tint and jaws open, no eye, the body trailing behind it in a
  // straight line: Dragon Head, which he hurls at Chrollo, episode 52 /
  // chapter 99.
  'dragon-head': DRAGON_HEAD,
  // The same dragon's head at the end of a body that bends back to Zeno's
  // outstretched hand, the jaws in tint: Dragon Lance keeps the dragon
  // joined to him and steers it with his hand until it grips Chrollo,
  // episode 52 / chapter 99. No face.
  'dragon-lance': [
    ...moved(
      [
        DRAGON_SKULL,
        { ...DRAGON_JAWS, role: 'accent' },
        { ...DRAGON_HORNS, role: 'soft' },
        DRAGON_CHEEK,
      ],
      'translate(116 100) rotate(40) scale(1.3)',
    ),
    {
      d: 'M40 130 C30 70 64 28 92 40 C102 46 106 58 104 73 M54 136 C46 86 70 56 86 60 C92 64 94 80 94 98',
    },
    {
      d: 'M8 196 L34 150 C32 142 34 136 40 130 M26 200 L50 158 C54 150 56 142 54 136 M40 146 L46 134 M46 151 L51 139',
      role: 'soft',
    },
    {
      d: 'M30 100 C30 76 46 50 70 38 M70 94 C76 80 84 72 94 72',
      role: 'ambient',
    },
  ],
  // Shalnark's demon-shaped phone in 3/4, a horned head on top with a bat's
  // wings in tint, the blank screen and keys on the front and its side
  // hatched, with the open arcs of the control it gives him: he steers the
  // auctioneer through it, episode 53 / chapter 98. No antenna, whose shape
  // the wiki cites only from chapter 227.
  'black-voice': [...SHALNARK_PHONE, BLACK_VOICE_ARCS, shadow(74, 176, 40)],
  // Kortopi's vase on the floor with a left hand resting on its mouth, and
  // its copy in tint standing on an open right hand: he touches an object
  // with his left hand and conjures the copy with his right, as with the
  // porcelain vase at the auction, episode 53 / chapter 100. No face.
  'gallery-fake': [
    ...KORTOPI_VASE,
    ...moved(
      KORTOPI_VASE.map((stroke) => ({ ...stroke, role: 'accent' as const })),
      'translate(64 -12)',
    ),
    {
      d: 'M30 100 C42 106 54 106 66 100 M94 88 C106 94 118 94 130 88',
      role: 'soft',
    },
    {
      d: 'M4 34 L24 52 C26 58 30 63 34 66 C35 70 40 70 41 66 C42 70 47 70 48 65 C49 69 54 69 55 64 C56 68 61 67 62 62 C62 54 56 46 50 42 L22 14',
    },
    {
      d: 'M41 66 L40 56 M48 65 L47 54 M55 64 L53 52 M26 54 C22 60 24 66 30 68',
      role: 'soft',
    },
    {
      d: 'M152 192 L132 156 M134 198 L116 162 M116 162 C104 156 96 148 100 140 H128 C132 144 134 150 132 156 M100 140 C95 136 97 131 102 133',
    },
    {
      d: 'M58 116 l6 -4 M58 132 l6 -4 M122 104 l6 -4 M122 120 l6 -4',
      role: 'ambient',
    },
    { d: 'M4 150 H92', role: 'ambient' },
    shadow(48, 158, 26),
  ],
  // Pakunoda's six-shot revolver from the side in 3/4, the cylinder's face
  // turned to the reader with its chambers, the grip's far side hatched,
  // and a conjured bullet in tint leaving the muzzle: Memory Bomb shoots
  // Squala's memories into Nobunaga, episode 56 / chapter 112.
  'memory-bomb': [
    {
      d: 'M64 80 H52 L46 84 L40 78 L36 80 L42 90 L48 100 H64 M48 100 L36 146 Q35 152 41 152 H52 Q57 152 58 147 L64 104',
    },
    { d: 'M64 80 H90 V104 H64 Z M95 86 H126 V95 H95 M120 86 V82 H124 V86' },
    { d: 'M64 88 H90 M64 96 H90', role: 'soft' },
    {
      d: `${ellipse(91, 92, 5, 12)} ${dots([
        [91, 84],
        [93.5, 88],
        [93.5, 96],
        [91, 100],
        [88.5, 96],
        [88.5, 88],
      ])} ${ellipse(126, 90.5, 2, 4.5)}`,
      role: 'soft',
    },
    {
      d: 'M64 104 C64 118 82 118 84 104 M70 104 C70 110 72 112 74 112',
      role: 'soft',
    },
    {
      d: 'M132 86 H144 C150 86 154 90.5 154 90.5 C154 90.5 150 95 144 95 H132 Z',
      role: 'accent',
    },
    { d: 'M130 80 l4 -4 M130 101 l4 4', role: 'ambient' },
    { d: 'M44 116 l8 -4 M42 128 l8 -4 M40 140 l8 -4', role: 'ambient' },
    shadow(80, 172, 50),
  ],
}

/** The Yorknew City abilities whose drawing changes with a reveal. */
export const yorknewAbilitiesRedrawn: Redrawings = {
  'eleven-black-children': [
    // The same robes fallen empty on the floor, hood and all, and their
    // swords lying beside them, the front guard still in tint: Kurapika
    // makes Tocino call off his figures, and their suits and swords drop to
    // the floor, masses of aura, episode 40 / chapter 68.
    {
      episode: 40,
      chapter: 68,
      value: [
        ...moved(
          TOCINO_ROBE_OUTLINE,
          'translate(118 138) rotate(6) scale(0.42 0.2) translate(-80 -100)',
        ),
        ...moved(
          softened(TOCINO_SWORD),
          'translate(14 160) rotate(60) scale(0.5) translate(-120 -108)',
        ),
        ...moved(
          TOCINO_ROBE,
          'translate(64 150) rotate(-4) scale(0.62 0.26) translate(-80 -100)',
        ),
        ...moved(
          TOCINO_SWORD,
          'translate(88 178) rotate(66) scale(0.7) translate(-120 -108)',
        ),
        { d: 'M4 184 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
}
