import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * An iron brazier on its stand, the wide bowl in 3/4 with its far side
 * hatched, the stem and three splayed feet. Balon's first drawing burns a
 * letter in it; his death tips it over.
 */
const BRAZIER: Stroke[] = [
  { d: ellipse(80, 98, 38, 8) },
  { d: 'M42 98 Q46 116 80 118 Q114 116 118 98' },
  { d: 'M76 118 V134 M84 118 V134' },
  {
    d: 'M76 134 Q60 138 50 152 M84 134 Q100 138 110 152 M80 134 V152',
    role: 'soft',
  },
  { d: 'M100 106 l6 -4 M92 112 l6 -4', role: 'ambient' },
]

/**
 * Balon Greyjoy: Robb Stark's letter, its seal still on it, burning in the
 * brazier, the fire in the accent. Balon reads Robb's offer and burns it in
 * "The Night Lands" (episode 12) and in Theon I (chapter 85): no man gives
 * him a crown.
 */
const BURNING_LETTER: Stroke[] = [
  { d: 'M62 98 L52 44 Q64 36 78 42 Q92 36 104 42 L98 96' },
  { d: 'M52 44 Q58 52 66 46 M60 58 L94 54 M62 68 L96 64', role: 'soft' },
  { d: circle(88, 80, 5), role: 'soft' },
  {
    d: 'M58 98 Q46 84 54 70 Q58 82 64 84 Q62 68 72 58 Q80 74 76 86 Q86 80 88 68 Q102 84 100 98',
    role: 'accent',
  },
]

/**
 * Asha Greyjoy: her throwing axe crossed over her dirk, the axe's bearded
 * head in the accent and its far face hatched. At the feast in Theon II
 * (chapter 98) she catches a flying axe, splits Theon's trencher with it
 * and calls it her husband, then draws the dirk she calls her babe. The
 * show's Yara, from "The Night Lands" (episode 12), is given no object of
 * her own in its season, so the book's pair is drawn.
 */
const DIRK: Stroke[] = [
  { d: 'M36 66 L46 58 L112 136 L110 142 L104 140 Z' },
  { d: 'M44 64 L106 136', role: 'soft' },
  { d: 'M28 80 L52 52' },
  { d: 'M40 66 L28 54 M34 60 l-3 3', role: 'soft' },
  { d: circle(24, 50, 4) },
]

const THROWING_AXE: Stroke[] = [
  { d: 'M34 146 L112 50 M40 150 L118 54' },
  { d: 'M44 128 l5 4 M50 120 l5 4 M56 112 l5 4', role: 'soft' },
  {
    d: 'M104 58 Q96 40 108 26 Q126 30 140 44 Q130 58 118 66 Q122 56 114 54',
    role: 'accent',
  },
  { d: 'M112 36 Q124 38 132 46', role: 'soft' },
  { d: 'M108 46 l6 -2 M112 54 l5 -2', role: 'ambient' },
]

/**
 * Aeron Greyjoy: a leather waterskin hung from its strap, its neck tipped
 * down and seawater pouring from it onto the waves, the water in the
 * accent. He kneels Theon in the mud at Lordsport and drenches his head
 * from a waterskin in Theon I (chapter 85). The skin's seams are soft and
 * its underside hatched.
 */
const WATERSKIN: Stroke[] = [
  {
    d: 'M62 52 Q54 60 58 74 Q50 96 62 112 Q80 128 104 116 Q122 102 112 80 Q104 60 84 56 Q72 44 62 52 Z',
  },
  { d: 'M60 58 Q48 60 40 70 L34 80' },
  { d: 'M44 62 L52 72 M40 66 L48 76', role: 'soft' },
  { d: 'M64 50 Q96 18 118 92', role: 'soft' },
  { d: 'M76 70 Q70 92 78 112 M96 66 Q104 88 98 116', role: 'soft' },
  { d: 'M106 100 l6 -4 M100 112 l6 -4 M110 86 l5 -4', role: 'ambient' },
  {
    d: 'M32 84 Q28 100 32 116 Q36 128 30 140 M38 86 Q36 102 40 118',
    role: 'accent',
  },
  {
    d: 'M14 150 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
  {
    d: 'M24 164 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
]

/**
 * Victarion Greyjoy: the Iron Victory, the war galley of the Lord Captain
 * of the Iron Fleet, under sail on the waves with its oars out, among
 * the ships at Pyke in Theon II (chapter 98), where he opens. The accent
 * is the iron beak at its bow, for ramming. The book's alone.
 */
const GALLEY: Stroke[] = [
  {
    d: 'M18 112 Q24 128 40 134 H118 Q132 130 140 108 Q130 116 116 118 H40 Q28 118 18 112 Z',
  },
  { d: 'M40 124 H120', role: 'soft' },
  { d: 'M136 128 L154 133 L136 138', role: 'accent' },
  {
    d: 'M48 134 L40 150 M64 134 L58 150 M80 134 L76 150 M96 134 L94 150 M112 134 L112 150',
    role: 'soft',
  },
  { d: 'M78 118 V24 M82 118 V24' },
  { d: 'M52 30 H108' },
  { d: 'M54 32 Q50 66 56 100 H104 Q110 66 106 32' },
  { d: 'M62 34 Q60 66 64 98 M98 34 Q100 66 96 98', role: 'soft' },
  { d: 'M48 128 l5 -3 M64 128 l5 -3 M96 128 l5 -3', role: 'ambient' },
  {
    d: 'M-4 152 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
  {
    d: 'M6 166 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
]

/**
 * Dagmer: rings on a table, one stood on its edge with its stone in the
 * accent, two lying flat. Theon III (chapter 111) gives him many rings of
 * gold, silver and bronze, set with sapphires, garnets and dragonglass,
 * every one paid for with the iron price. The show's Dagmer opens in "The
 * Ghost of Harrenhal" (episode 15).
 */
const RINGS: Stroke[] = [
  { d: `${circle(96, 100, 22)} ${circle(96, 100, 15)}` },
  { d: 'M74 100 Q74 108 80 114 M118 100 Q118 108 112 114', role: 'soft' },
  { d: 'M88 70 L96 62 L104 70 L96 80 Z', role: 'accent' },
  { d: 'M90 74 H102', role: 'soft' },
  { d: 'M110 92 l5 -3 M112 104 l5 -3', role: 'ambient' },
  { d: `${ellipse(52, 134, 22, 7)} ${ellipse(52, 134, 15, 4)}` },
  { d: 'M30 134 V138 Q52 150 74 138 V134', role: 'soft' },
  { d: `${ellipse(118, 140, 14, 5)} ${ellipse(118, 140, 9, 3)}` },
  { d: 'M104 140 V143 Q118 151 132 143 V140', role: 'soft' },
  shadow(84, 156, 58),
]

/**
 * Black Lorren: a longaxe stood on the butt of its haft, the bearded head
 * hatched because the iron is dark, a spike on its back and the wrap on the
 * grip in the accent. He fights with axe and sword at Winterfell; he opens
 * in Theon IV (chapter 124). The book's alone. The head and haft, without
 * the shadow, are its first seven strokes, which his death lays down.
 */
const LONGAXE: Stroke[] = [
  { d: 'M76 152 L78 34 M82 152 L84 34' },
  { d: 'M78 34 Q81 28 84 34', role: 'soft' },
  { d: 'M84 40 Q110 30 120 50 Q124 68 114 84 Q102 72 84 72' },
  { d: 'M78 46 L62 52 L78 60' },
  {
    d: 'M90 46 l8 -5 M92 56 l10 -6 M94 66 l10 -6 M104 72 l6 -4',
    role: 'ambient',
  },
  { d: 'M77 116 l6 4 M77 124 l6 4 M77 132 l6 4 M77 140 l6 4', role: 'accent' },
  { d: 'M114 52 Q118 66 112 80', role: 'soft' },
  shadow(80, 156, 22),
]

/**
 * Wex Pyke: the head and neck of Smiler, Theon's warhorse, side on with no
 * eye, its bridle in the accent. Theon buys the horse in Theon II (chapter
 * 98) and takes Wex as his squire in the same bargain; Wex saddles it for
 * him. The mane is soft and the far side of the neck hatched. The book's
 * alone.
 */
const SMILER: Stroke[] = [
  {
    d: 'M46 150 Q44 112 56 88 Q66 66 80 52 L80 34 L90 46 Q100 46 108 54 Q122 70 130 88 Q134 98 124 100 Q114 100 106 92 Q98 88 96 98 Q92 118 104 150',
  },
  { d: 'M80 52 Q66 74 62 100 Q58 120 62 150', role: 'soft' },
  { d: 'M84 56 Q72 72 70 92 M74 60 Q64 78 64 100', role: 'soft' },
  {
    d: 'M90 50 L106 92 M104 66 Q116 76 126 88 M114 98 Q120 92 128 92',
    role: 'accent',
  },
  { d: circle(110, 96, 4), role: 'soft' },
  { d: 'M110 100 Q96 118 80 120', role: 'soft' },
  { d: 'M92 108 l6 -3 M94 122 l6 -3 M96 136 l6 -3', role: 'ambient' },
  { d: 'M30 150 H124', role: 'ambient', dashed: true },
]

/** The Iron Islands cast of the second stage (#1473), keyed by record id. */
export const IRONBORN_DRAWINGS = {
  'balon-greyjoy': [...BRAZIER, ...BURNING_LETTER, shadow(80, 156, 40)],
  'asha-greyjoy': [...DIRK, ...THROWING_AXE, shadow(76, 156, 54)],
  'aeron-greyjoy': WATERSKIN,
  'victarion-greyjoy': GALLEY,
  'dagmer': RINGS,
  'black-lorren': LONGAXE,
  'wex-pyke': SMILER,
} satisfies Drawings

/** The Iron Islands cast drawn again later in the story. */
export const ironbornRedrawn: Redrawings = {
  'balon-greyjoy': [
    // The brazier tipped over on its side, the letter gone and the cold
    // ash spilled from its mouth in the accent: he dies in a fall from a
    // bridge at Pyke, in "Home" (episode 52), and the books first tell it
    // in Catelyn V of A Storm of Swords (chapter 189). How he dies is not
    // drawn.
    {
      episode: 52,
      chapter: 189,
      value: [
        ...moved(BRAZIER, 'translate(0 -13) rotate(-90 80 125)'),
        {
          d: dots([
            [18, 150],
            [26, 147],
            [34, 151],
            [42, 148],
            [30, 154],
          ]),
          role: 'accent',
        },
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'dagmer': [
    // The rings scattered on the ground, the jewelled one fallen on its
    // side: Balon and Yara read that the Boltons flayed Dagmer and his men,
    // in "Mhysa" (episode 30). The books leave him holding Torrhen's
    // Square, so the stage is the show's alone and chapter 344 only orders
    // it.
    {
      episode: 30,
      chapter: 344,
      source: 'episode',
      value: [
        { d: `${ellipse(96, 140, 22, 7)} ${ellipse(96, 140, 15, 4)}` },
        { d: 'M74 140 V144 Q96 156 118 144 V140', role: 'soft' },
        { d: 'M110 128 L118 122 L126 128 L118 136 Z', role: 'accent' },
        { d: `${ellipse(44, 146, 14, 5)} ${ellipse(44, 146, 9, 3)}` },
        { d: `${ellipse(140, 150, 10, 3.5)} ${ellipse(140, 150, 6, 2)}` },
        { d: 'M10 158 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'black-lorren': [
    // The longaxe fallen flat in the yard: Bran finds his body among the
    // ironborn dead after the sack of Winterfell, in Bran VII (chapter 143).
    // The book's alone; episode 20 only orders it.
    {
      episode: 20,
      chapter: 143,
      value: [
        ...moved(LONGAXE.slice(0, 7), 'translate(0 66) rotate(-86 80 90)'),
        { d: 'M8 156 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
}
