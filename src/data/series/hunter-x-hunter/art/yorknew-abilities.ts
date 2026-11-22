import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

import {
  BASHO_BRUSH,
  KISS,
  LIPSTICK,
  NEON_PEN,
  NEON_SHEETS,
  OWL_BUNDLE,
  TOCINO_ROBE,
  TOCINO_ROBE_OUTLINE,
  TOCINO_SWORD,
  UVOGIN_VEST,
} from './yorknew-city'

/**
 * Zeno's aura dragon of Dragon Head, its body rising from the lower left to
 * the head at the upper right. Zeno's own stage lays it over his
 * robe.
 */
export const DRAGON_HEAD: Stroke[] = [
  {
    d: 'M31 143 C42 98 70 111 89 84 L84 65 L99 73 L110 58 L111 78 L129 88 L119 104 L102 107 Q90 128 66 129 L47 148',
  },
  {
    d: 'M111 86 L121 91 M113 98 L125 94 M62 121 L66 129 M76 111 L81 121',
    role: 'soft',
  },
  { d: 'M88 103 L94 112', role: 'ambient' },
  { d: 'M25 153 Q46 109 62 108 M92 56 L93 45 M114 57 L122 45', role: 'accent' },
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

/** The hood of one of Tocino's figures over its robe, its opening dark. */
const HOOD: Stroke[] = [
  { d: 'M67 40 C62 26 68 10 80 8 C92 10 98 26 93 40' },
  { d: 'M72 39 C70 28 74 18 80 17 C86 18 90 28 88 39', role: 'soft' },
  { d: 'M73 33 L85 22 M74 38 L88 26 M81 39 L88 33', role: 'ambient' },
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

/**
 * One of Franklin's hands from the little finger's side, pointing to the
 * right with its four fingers spread and cut at the last joint, each tip
 * hanging below its finger on a short chain, in tint, and a streak of aura
 * flying on from each. Drawn about the origin.
 */
const MACHINE_GUN_HAND: Stroke[] = [
  { d: 'M12.4 -16.3 C2 -20 -12 -14 -50 -10 M13.5 15.4 C2 20 -12 18 -50 16' },
  {
    d: 'M12.4 -16.3 L40 -39.4 M18.2 -9.4 L45.8 -32.5 M18.3 -9.2 L57.1 -18.9 M20.5 -0.5 L59.3 -10.1 M20.5 -0.6 L57.8 6.6 M18.8 8.2 L56.1 15.5 M18.8 8.1 L43.1 25.7 M13.5 15.4 L37.8 33',
  },
  {
    d: 'M40 -39.4 A4.5 2.2 50 1 0 45.8 -32.5 A4.5 2.2 50 1 0 40 -39.4 M57.1 -18.9 A4.5 2.2 76 1 0 59.3 -10.1 A4.5 2.2 76 1 0 57.1 -18.9 M57.8 6.6 A4.5 2.2 101 1 0 56.1 15.5 A4.5 2.2 101 1 0 57.8 6.6 M43.1 25.7 A4.5 2.2 126 1 0 37.8 33 A4.5 2.2 126 1 0 43.1 25.7',
    role: 'soft',
  },
  {
    d: 'M23.2 -25.3 L28.9 -18.4 M31.9 -12.6 L34.1 -3.9 M34.2 2.1 L32.5 10.9 M30.2 16.3 L24.9 23.6 M-6 -6 C0 -2 2 6 -2 12',
    role: 'soft',
  },
  {
    d: 'M42.9 -32.5 V-27.5 M39.9 -27.5 H45.9 V-23.5 C45.9 -20.5 39.9 -20.5 39.9 -23.5 Z M58.2 -10.1 V-5.1 M55.2 -5.1 H61.2 V-1.1 C61.2 1.9 55.2 1.9 55.2 -1.1 Z M56.9 15.5 V20.5 M53.9 20.5 H59.9 V24.5 C59.9 27.5 53.9 27.5 53.9 24.5 Z M40.5 33 V38 M37.5 38 H43.5 V42 C43.5 45 37.5 45 37.5 42 Z',
    role: 'accent',
  },
  {
    d: 'M49 -41.1 L62.8 -52.7 M66 -16.5 L83.4 -20.8 M64.8 12.6 L82.5 16 M46.9 34.1 L61.5 44.7',
    role: 'ambient',
  },
]

export const YORKNEW_ABILITY_DRAWINGS: Drawings = {
  // Three of the hooded figures in black who ambush the applicants, the
  // front one raising a sword with the guard in tint, the robes hatched
  // because they are black: they burst into the room in chapter 67 and
  // attack with swords in episode 39. The front figure is Tocino's own robe
  // and sword. No faces, and nothing that says who sends them.
  'eleven-black-children': [
    ...moved(
      [...TOCINO_ROBE_OUTLINE, ...HOOD],
      'translate(92 66) scale(0.3) translate(-80 -100)',
    ),
    ...moved(
      [...TOCINO_ROBE_OUTLINE, ...HOOD],
      'translate(120 102) scale(0.42) translate(-80 -100)',
    ),
    ...moved(
      [...TOCINO_ROBE, ...HOOD, ...TOCINO_SWORD],
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
  // A scarlet eye as a symbol in tint, over the Dowsing Chain's ball and
  // Chain Jail's hook hanging from their rings, both bristling with open
  // lines of aura: Kurapika's eyes turn scarlet and every type of Nen is his
  // at full strength, episode 47 / chapter 83. Only the chains that scene
  // shows. No hand and no face.
  'emperor-time': [
    {
      d: `M56 26 Q80 6 104 26 Q80 46 56 26 Z ${circle(80, 26, 7)}`,
      role: 'accent',
    },
    ...moved(
      softened(DOWSING_CHAIN),
      'translate(50 58) scale(0.85) translate(-80 -40)',
    ),
    ...moved(
      [
        ...CHAIN_RING,
        ...CHAIN_LINKS,
        ...moved(softened(CHAIN_JAIL_HOOK), 'translate(93.5 136)'),
      ],
      'translate(108 58) scale(0.85) translate(-80 -40)',
    ),
    {
      d: 'M30 72 l-12 -6 M26 102 h-14 M30 132 l-12 6 M134 72 l12 -6 M138 102 h14 M136 132 l12 6',
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
  'big-bang-impact': [
    { d: 'M68 6 L70 64 M104 6 L102 66' },
    { d: 'M58 100 C56 88 58 74 64 66 C68 60 102 60 106 68 L110 98 L106 122' },
    { d: 'M70 104 V124 M82 104 V124 M94 104 V124', role: 'soft' },
    {
      d: 'M58 100 C70 94 90 94 100 98 C107 101 106 109 99 110 C88 112 72 109 59 106',
    },
    { d: 'M94 100 C97 100 99 102 99 105', role: 'soft' },
    {
      d: 'M58 106 V124 C58 132 70 132 70 124 C70 132 82 132 82 124 C82 132 94 132 94 124 C94 132 106 132 106 122',
      role: 'accent',
    },
    {
      d: 'M54 132 C30 132 10 138 8 146 C8 156 40 164 80 164 C120 164 152 156 152 146 C150 138 130 132 112 132',
    },
    { d: 'M26 146 C40 160 120 160 134 146', role: 'soft' },
    {
      d: 'M20 142 l8 -6 M34 140 l8 -6 M118 140 l8 -6 M132 142 l8 -6',
      role: 'ambient',
    },
    {
      d: 'M12 128 l-8 -6 M28 120 l-6 -8 M132 120 l6 -8 M148 128 l8 -6 M10 168 l-6 6 M150 168 l6 6',
      role: 'ambient',
    },
  ],
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
  'dragon-head': DRAGON_HEAD,
  'dragon-lance': [
    {
      d: 'M31 140 C38 89 68 79 81 104 C95 126 114 98 121 82 L115 65 L126 72 L138 62 L136 77 L146 83 L141 97 L126 100 C110 131 90 139 73 114 C62 97 46 114 42 142',
    },
    {
      d: 'M128 85 L135 85 M132 94 L142 89 M58 98 L62 108 M83 113 L89 121',
      role: 'soft',
    },
    { d: 'M111 104 L118 112', role: 'ambient' },
    {
      d: 'M27 126 Q31 103 43 94 M68 84 Q84 84 92 99 M98 139 Q118 134 128 117',
      role: 'accent',
    },
  ],
  'black-voice': [
    {
      d: 'M45 75 L78 75 L78 141 L45 141Z M49 82 L74 82 L74 108 L49 108Z M56 73 L54 63',
    },
    {
      d: 'M50 116 L57 116 M63 116 L71 116 M50 126 L57 126 M63 126 L71 126',
      role: 'soft',
    },
    { d: 'M58 134 L66 134', role: 'ambient' },
    {
      d: 'M89 97 Q100 88 107 92 M87 86 Q101 76 114 81 M85 75 Q105 64 122 70',
      role: 'accent',
    },
  ],
  'gallery-fake': [
    {
      d: 'M50 79 L65 79 L63 91 Q79 113 71 138 Q58 145 43 137 Q35 116 51 91Z M98 79 L114 79 L112 91 Q127 113 120 138 Q107 145 92 137 Q84 116 100 91Z',
    },
    {
      d: 'M46 117 Q58 125 70 117 M94 117 Q106 125 118 117 M48 132 Q58 138 67 132',
      role: 'soft',
    },
    { d: 'M97 132 Q107 138 115 132', role: 'ambient' },
    { d: 'M80 89 L86 89 M82 82 L82 96 M78 151 L86 151', role: 'accent' },
  ],
  'memory-bomb': [
    {
      d: 'M36 108 L78 108 L88 115 L88 130 L65 130 L58 151 L45 146 L50 127 L36 127Z M62 130 Q67 145 74 131',
    },
    { d: 'M40 115 L76 115 M74 119 L82 119', role: 'soft' },
    { d: 'M46 121 L56 121', role: 'ambient' },
    {
      d: 'M108 119 L118 119 L124 124 L118 129 L108 129Z M94 118 L102 118 M94 129 L103 129',
      role: 'accent',
    },
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
          [...TOCINO_ROBE_OUTLINE, ...HOOD],
          'translate(118 138) rotate(6) scale(0.42 0.2) translate(-80 -100)',
        ),
        ...moved(
          softened(TOCINO_SWORD),
          'translate(14 160) rotate(60) scale(0.5) translate(-120 -108)',
        ),
        ...moved(
          [...TOCINO_ROBE, ...HOOD],
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
