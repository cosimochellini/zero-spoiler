import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

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
 * (chapter 4). The cloth's far fold is hatched. His first drawing and his
 * death share it.
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
  shadow(36, 153, 14),
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
 * Jorah Mormont: a longsword stood point down in the grass of the Dothraki
 * sea, the Westerosi steel he weighs against the arakh in episode 3, a
 * knight's sword in both media from episode 1 and Daenerys I (chapter 4).
 * The blade's far face is hatched; the accent is the grip. His first
 * drawing and his stage share it.
 */
const PLANTED_SWORD: Stroke[] = [
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

/**
 * Irri: a bronze brazier on three legs with a dragon egg in its coals, the
 * egg she burns her hands lifting out in episode 6. The show is the
 * reference where the media differ; the book has her teach Daenerys to
 * ride from Daenerys II (chapter 12). The bowl's far side is hatched; the
 * accent is the flames.
 */
const BRAZIER: Stroke[] = [
  { d: ellipse(80, 100, 40, 10) },
  { d: 'M40 100 Q44 126 80 130 Q116 126 120 100' },
  { d: 'M56 126 L44 150 M104 126 L116 150 M80 130 V150' },
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
  { d: 'M108 110 l6 -3 M104 120 l6 -3', role: 'ambient' },
  shadow(80, 154, 42),
]

/**
 * Doreah: two moons, one whole and one cracked open by the sun, for the
 * story she tells of where dragons came from, in episode 2 and in
 * Daenerys III (chapter 24). The whole moon's far side is hatched; the
 * accent is the crack.
 */
const MOONS: Stroke[] = [
  { d: circle(54, 62, 26) },
  { d: 'M54 36 Q42 62 54 88', role: 'soft' },
  { d: 'M66 46 l6 -3 M72 56 l6 -3 M74 68 l6 -3 M70 80 l5 -3', role: 'ambient' },
  { d: 'M112 88 A24 24 0 0 0 96 132 L104 118 L98 108 L108 100 Z' },
  { d: 'M118 90 A24 24 0 0 1 106 136 L112 120 L106 110 L116 102 Z' },
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

/** The first season's Essos cast (#1052), keyed by record id. */
export const ESSOS_DRAWINGS = {
  'viserys-targaryen': BANNER,
  'drogo': [...BRAID, shadow(87, 160, 18)],
  'jorah-mormont': PLANTED_SWORD,
  'illyrio-mopatis': EGG_CHEST,
  'irri': BRAZIER,
  'doreah': MOONS,
  'rakharo': ARAKH,
  'mirri-maz-duur': HEALER_BOWL,
} satisfies Drawings

/** The Essos cast drawn again later in the story. */
export const essosRedrawn: Redrawings = {
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
        {
          d: 'M24 152 L64 144 L70 148 L30 156 Z M64 144 L80 140 M70 148 L84 144',
          role: 'soft',
        },
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
}
