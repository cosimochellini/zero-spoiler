import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

/**
 * The cocoon Menthuthuyoupi waits in: the rock of the chamber's ceiling, the
 * stalk it hangs from, and its shell in tint. It still hangs there, empty,
 * once he has hatched.
 */
const YOUPI_COCOON: Stroke[] = [
  {
    d: 'M4 20 Q40 12 80 18 T156 16 M18 16 l4 -8 M44 14 l3 -7 M110 15 l4 -8 M136 14 l3 -7',
    role: 'ambient',
  },
  { d: 'M76 18 Q74 30 77 42 M84 18 Q86 30 83 42', role: 'soft' },
  {
    d: 'M80 42 C106 42 118 76 117 108 C116 140 100 162 80 162 C60 162 44 140 43 108 C42 76 54 42 80 42 Z',
    role: 'accent',
  },
]

/**
 * Peggy's black coat, open over his yellow turtleneck: the rolled collar in
 * tint, the coat's far half hatched, the hands hidden in the sleeves. His
 * death lays this same coat on the floor of the nest.
 */
const PEGGY_COAT: Stroke[] = [
  { d: 'M66 30 V40 Q80 47 94 40 V30 Q80 37 66 30 Z', role: 'accent' },
  { d: 'M66 35 Q80 42 94 35', role: 'soft' },
  {
    d: 'M66 38 L38 50 L26 124 M44 128 L50 82 L50 172 H110 L110 82 L116 128 M134 124 L122 50 L94 38',
  },
  { d: 'M26 124 A9 4 15 1 0 44 128 A9 4 15 1 0 26 124' },
  { d: 'M134 124 A9 4 -15 1 1 116 128 A9 4 -15 1 1 134 124' },
  {
    d: 'M68 42 L76 98 L64 108 M92 42 L84 98 L96 108 M76 98 L80 172',
    role: 'soft',
  },
  { d: 'M84 98 L82 172 M72 120 h0.01 M72 142 h0.01', role: 'soft' },
  {
    d: 'M100 60 l7 -5 M100 76 l8 -6 M98 118 l9 -6 M98 134 l9 -6 M98 150 l9 -6 M98 164 l8 -5',
    role: 'ambient',
  },
  { d: 'M118 64 l5 -3 M120 80 l5 -3 M122 96 l5 -3', role: 'ambient' },
]

/** The King, the Royal Guards and the Squadron Leaders closest to the Queen (#1021). */
export const CHIMERA_ANT_ROYALS_DRAWINGS = {
  // Cheetu's cut-off shorts in mid-stride, one leg thrown forward and one
  // back, the frayed hems in tint and the inside of the legs hatched: the
  // only thing the cheetah-like Squadron Leader wears, named in episode 79 /
  // chapter 192.
  cheetu: [
    { d: 'M48 58 Q80 50 112 58 V70 Q80 62 48 70 Z' },
    { d: 'M48 70 L22 120 M112 70 L136 128 M58 134 L80 96 L100 138' },
    {
      d: 'M22 120 l4 6 l4 -5 l4 6 l4 -5 l4 6 l4 -5 l4 6 l4 -5 l4 6 l4 -5 M100 138 l4 4 l4 -6 l4 5 l4 -6 l4 5 l4 -6 l4 4 l4 -5 l4 1',
      role: 'accent',
    },
    { d: 'M22 120 Q40 110 58 134 M100 138 Q118 122 136 128', role: 'soft' },
    { d: 'M80 66 V96 M62 76 Q66 88 56 94 M98 76 Q94 88 104 94', role: 'soft' },
    {
      d: 'M34 118 l8 -6 M42 122 l10 -8 M108 132 l8 -6 M116 130 l10 -8',
      role: 'ambient',
    },
    { d: 'M106 82 l6 -4 M110 96 l6 -4 M114 110 l6 -4', role: 'ambient' },
    { d: 'M62 62 V70 M98 62 V70', role: 'soft' },
    shadow(80, 176, 50),
  ],
  // Peggy's coat over the turtleneck, standing empty: the analyst named in
  // chapter 189 while he examines the dead soldiers. No book, which only
  // the anime is known to give him.
  peggy: [...PEGGY_COAT, shadow(80, 184, 44)],
  // Shaiapouf's frilly white shirt from the front, the cascade of ruffles
  // down its chest in tint, ruffled cuffs and the black trousers hatched:
  // the Royal Guard who steps out of the shadows beside Neferpitou, episode
  // 86 / chapter 202. No wings, which he first opens in chapter 213, and no
  // violin, first played in chapter 206.
  shaiapouf: [
    { d: 'M66 28 L64 40 Q80 47 96 40 L94 28 M66 28 Q80 34 94 28' },
    {
      d: 'M64 38 C50 42 40 46 36 52 L22 114 M38 118 L46 80 L48 142 H112 L114 80 L122 118 M138 114 L124 52 C120 46 110 42 96 38',
    },
    {
      d: 'M22 114 q4 7 8 2 q3 7 8 2 M122 118 q4 6 8 0 q3 6 8 -4',
      role: 'soft',
    },
    {
      d: 'M72 44 q2.7 8 5.3 0 q2.7 8 5.3 0 q2.7 8 5.3 0 M68 58 q3 8 6 0 q3 8 6 0 q3 8 6 0 q3 8 6 0 M64 73 q3.2 8 6.4 0 q3.2 8 6.4 0 q3.2 8 6.4 0 q3.2 8 6.4 0 q3.2 8 6.4 0 M60 89 q3.3 8 6.7 0 q3.3 8 6.7 0 q3.3 8 6.7 0 q3.3 8 6.7 0 q3.3 8 6.7 0 q3.3 8 6.7 0',
      role: 'accent',
    },
    {
      d: 'M72 44 L68 58 L64 73 L60 89 M88 44 L92 58 L96 73 L100 89',
      role: 'accent',
    },
    { d: 'M80 98 V142 M80 112 h0.01 M80 128 h0.01', role: 'soft' },
    {
      d: 'M54 100 Q58 122 56 140 M106 100 Q102 122 104 140 M42 66 Q44 84 40 98 M118 66 Q116 84 120 98',
      role: 'soft',
    },
    {
      d: 'M48 142 V152 H112 V142 M48 152 L46 186 M112 152 L114 186 M80 156 V186',
    },
    {
      d: 'M100 160 l8 -5 M100 172 l8 -5 M100 184 l8 -5 M102 147 l6 -4',
      role: 'ambient',
    },
    shadow(80, 192, 40),
  ],
  // The cocoon Menthuthuyoupi has not yet left, hanging from the ceiling of
  // the nest, its veins soft and its far side hatched: Shaiapouf says he will
  // soon awaken, episode 86 / chapter 202. Nothing of him is drawn.
  menthuthuyoupi: [
    ...YOUPI_COCOON,
    {
      d: 'M66 46 Q54 96 62 156 M96 46 Q108 100 98 156 M80 42 V58',
      role: 'soft',
    },
    { d: 'M60 92 Q68 104 66 118 M102 80 Q92 90 92 104', role: 'soft' },
    {
      d: 'M106 62 l6 -4 M110 80 l6 -4 M112 98 l6 -4 M112 116 l6 -4 M110 134 l6 -4 M104 150 l6 -4',
      role: 'ambient',
    },
    shadow(80, 184, 34),
  ],
  // A white flag on a stick planted in the ground, the cloth in tint with
  // its folds: the flag Colt carries to Morel and Knov to beg them to save
  // the Queen, the scene where Morel asks his name, chapter 214 / episode
  // 91–92. No wings or face of his.
  colt: [
    { d: 'M56 152 L66 24 M61 152 L71 25' },
    { d: 'M66 24 Q68.5 19 71 25', role: 'soft' },
    {
      d: 'M70 30 C88 22 106 42 132 30 C130 48 134 66 140 82 C116 92 96 72 67 84',
      role: 'accent',
    },
    { d: 'M88 30 Q94 52 88 80 M112 38 Q118 60 114 84', role: 'soft' },
    {
      d: 'M92 52 l5 -3 M92 64 l5 -3 M116 58 l5 -3 M116 70 l5 -3',
      role: 'ambient',
    },
    { d: 'M69 34 l5 2 M66.8 76 l5 2', role: 'soft' },
    {
      d: 'M42 154 Q58 144 76 154 M36 154 l4 -3 l4 3 M80 154 l3 -2 l3 2',
      role: 'soft',
    },
    { d: 'M4 154 H156', role: 'ambient' },
    shadow(80, 166, 44),
  ],
  // The King's tail, lying on the floor and rising to its stinger: the rings
  // drawn soft, the dark ones hatched on the inner side, and the needle in
  // tint, the weapon he is born with. Named by the dying Queen, episode 92 /
  // chapter 215. No head, no face.
  meruem: [
    {
      d: 'M-8.7 157 L8.8 157.6 L26 157.5 L42.6 156.6 L58.3 154.5 L72.9 151.2 L86.2 146.2 L97.8 139.3 L107.3 130.1 L114 118.6 L117.4 105.2 L118.2 92.6 L117.6 80.8 L115.7 69.9 L112.4 60 L108 51.2 L102.5 43.7 L96 37.7 L88.6 33.2 L80.6 30.6 L72.1 30',
    },
    {
      d: 'M-7.3 135 L9.6 136.3 L25.9 136.9 L41.3 136.7 L55.4 135.5 L68.1 133.3 L79 129.9 L87.9 125.4 L94.7 119.6 L99.6 112.3 L102.6 102.8 L104 92.1 L104.1 81.9 L103 72.6 L101 64.2 L98 56.8 L94.2 50.5 L89.6 45.5 L84.4 41.6 L78.5 39.1 L71.9 38',
    },
    {
      d: 'M17.5 157.6 Q25 147.3 17.9 136.7 M46.6 156.2 Q52.7 145.7 44.9 136.5 M72.9 151.2 Q76.8 140.6 68.1 133.3 M95.1 141.2 Q95.6 130.7 85.9 126.6 M111 124.7 Q107.2 115.7 97.4 116.2 M117.8 101.9 Q111 95.9 103 100.1 M117.6 80.8 Q110.4 76.6 104.1 81.9 M113.3 62.3 Q106.1 60.2 101.6 66.2 M105.4 47.3 Q98.6 47.2 96.2 53.5 M94.2 36.4 Q88.5 38.3 88.4 44.4',
      role: 'soft',
    },
    {
      d: 'M25.9 136.9 L26 146.2 M37.5 136.8 L38 145.9 M73.8 131.8 L76.5 139.5 M81.4 128.9 L84.9 136 M99.6 112.3 L106.1 115.2 M102 105.5 L108.7 106.9 M103.7 77.2 L109.6 76.3 M102.6 70.4 L108.2 69 M94.2 50.5 L97.9 47.5 M90.8 46.6 L93.9 43.2',
      role: 'ambient',
    },
    { d: 'M72.1 30 C62 24 50 28 49 36 C48 45 62 46 71.9 38' },
    { d: 'M60 27 Q57 36 61 44.5', role: 'soft' },
    { d: 'M50 40 Q38 50 43 68 Q46 54 56 44', role: 'accent' },
    { d: 'M4 158 H156', role: 'ambient' },
    shadow(70, 168, 60),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntRoyalsRedrawn: Redrawings = {
  menthuthuyoupi: [
    // The same cocoon split open and empty, the inside hatched and bits of
    // shell on the floor: he hatches, episode 88 / chapter 206.
    {
      episode: 88,
      chapter: 206,
      value: [
        ...YOUPI_COCOON,
        {
          d: 'M62 70 L72 80 L76 64 L86 78 L94 64 L98 84 L106 96 L96 104 L104 122 L92 126 L96 146 L82 136 L74 150 L68 132 L56 140 L60 118 L50 110 L60 98 L54 84 Z',
        },
        { d: 'M64 76 L72 86 L76 72 L86 84 L92 72 L96 88', role: 'soft' },
        {
          d: 'M66 92 l10 -8 M62 108 l22 -18 M64 122 l28 -24 M72 132 l24 -20 M80 136 l12 -10',
          role: 'ambient',
        },
        {
          d: 'M34 182 l10 -6 l4 7 Z M112 184 l12 -2 l-4 -7 Z M60 186 l6 -3 l1 4 Z',
          role: 'soft',
        },
        shadow(80, 184, 34),
      ],
    },
  ],
  peggy: [
    // The same coat laid on the floor of the nest, empty: the newborn King
    // kills him with his tail, chapter 213. The manga's alone, as Peggy is.
    {
      episode: 91,
      chapter: 213,
      source: 'chapter',
      value: [
        ...moved(
          PEGGY_COAT,
          'translate(80 136) rotate(-8) scale(0.95 0.42) translate(-80 -100)',
        ),
        { d: 'M4 172 H156', role: 'ambient' },
        shadow(80, 180, 64),
      ],
    },
  ],
}
