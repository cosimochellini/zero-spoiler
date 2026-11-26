import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow, star } from '~/lib/svg/primitives'

import { HOUND_HELM } from './south'

/**
 * Anguy: his longbow strung and leaning, and the duck he brings down by a
 * brook on the road to the inn, an arrow through it, in Arya II of A Storm
 * of Swords (chapter 157). The book's alone. The bow's back is the accent.
 */
const LONGBOW_AND_DUCK: Stroke[] = [
  { d: 'M42 150 Q40 62 122 22', role: 'accent' },
  { d: 'M42 150 Q48 70 122 22' },
  { d: 'M42 150 L122 22', role: 'soft' },
  { d: 'M50 88 l8 4 M48 96 l8 4 M47 104 l8 4', role: 'soft' },
  {
    d: 'M90 146 Q94 126 114 126 Q132 126 140 138 Q134 150 112 150 Q96 150 90 146 Z',
  },
  { d: 'M92 140 Q82 134 76 140 Q74 148 82 148 M76 140 L68 143 L75 146' },
  { d: 'M102 134 Q118 130 130 140', role: 'soft' },
  {
    d: 'M98 108 L128 154 M98 108 l-2 -8 M98 108 l-8 -1 M101 112 l-2 -8 M101 112 l-8 -1',
    role: 'soft',
  },
  { d: 'M132 132 l4 -3 M136 140 l4 -3', role: 'ambient' },
  shadow(108, 154, 36),
]

/**
 * Tom of Sevenstreams: his woodharp, the strings he plucks as he talks,
 * with his woodman's axe leaning beside it, as he comes singing up the
 * river road in Arya II of A Storm of Swords (chapter 157). The book's
 * alone. The soundbox's back face is hatched; the strings are the accent.
 */
const WOODHARP_AND_AXE: Stroke[] = [
  { d: 'M50 146 Q42 100 54 50 M56 144 Q49 100 59 53' },
  { d: 'M54 50 Q72 28 90 44 Q104 56 118 42' },
  { d: 'M118 42 L62 146 H50 M118 42 L126 48 L72 150 L62 146' },
  {
    d: 'M64 43 V141 M72 39 V126 M80 39 V111 M88 42 V96 M96 48 V81 M104 51 V66',
    role: 'accent',
  },
  { d: `${circle(98, 88, 2.5)} ${circle(84, 114, 2.5)}`, role: 'soft' },
  {
    d: 'M118 66 l6 -2 M110 82 l6 -2 M102 98 l6 -2 M94 114 l6 -2',
    role: 'ambient',
  },
  { d: 'M112 150 L138 70 M116 151 L142 71' },
  { d: 'M136 78 Q146 60 156 66 Q152 80 142 86 Z' },
  { d: 'M114 136 l4 1 M117 128 l4 1', role: 'soft' },
  shadow(86, 156, 48),
]

/**
 * Lem's big hooded yellow cloak, patched with deerskin, hung from a stand:
 * the cloak he is known by in Arya II of A Storm of Swords (chapter 157).
 * The cloak is the accent; its far side is hatched. The helm on the stand,
 * and the stretch of pole between it and the bar, are left to each drawing.
 */
const YELLOW_CLOAK: Stroke[] = [
  { d: 'M80 148 V150 M62 156 L80 150 L98 156' },
  { d: 'M48 62 H112' },
  {
    d: 'M48 62 Q38 100 34 146 Q80 156 126 146 Q122 100 112 62',
    role: 'accent',
  },
  { d: 'M58 62 Q66 86 80 88 Q94 86 102 62' },
  {
    d: 'M54 84 Q50 116 54 148 M106 84 Q112 116 108 148 M80 96 V150',
    role: 'soft',
  },
  { d: 'M88 112 h14 v12 h-14 Z' },
  {
    d: dots([
      [90, 110],
      [96, 110],
      [104, 114],
      [104, 120],
      [86, 120],
    ]),
    role: 'soft',
  },
  { d: 'M114 100 l5 -3 M116 114 l5 -3 M117 128 l5 -3', role: 'ambient' },
  shadow(80, 160, 46),
]

/**
 * Lem: the cloak with his black iron conic helm on the stand above it, as
 * he wears both in Arya II (chapter 157), the pole showing below the brim.
 * The book's alone. The iron is hatched on its far side.
 */
const CLOAK_AND_CONIC_HELM: Stroke[] = [
  { d: 'M62 48 Q62 26 80 12 Q98 26 98 48' },
  { d: ellipse(80, 48, 18, 4) },
  { d: 'M80 14 V52', role: 'soft' },
  { d: 'M80 52 V62' },
  { d: 'M88 24 l4 -2 M91 32 l4 -2 M93 40 l4 -2', role: 'ambient' },
  ...YELLOW_CLOAK,
]

/**
 * Jack-Be-Lucky: the hunting horn he blows to call the people of a village
 * out to the outlaws, on its strap, and behind it the rusty pothelm he
 * wears, in Arya III of A Storm of Swords (chapter 161). The book's alone.
 * The helm's far side is hatched and its rust dotted; the horn's bell is
 * the accent.
 */
const HORN_AND_POTHELM: Stroke[] = [
  { d: 'M28 72 Q28 36 56 34 Q84 36 84 72' },
  { d: ellipse(56, 72, 28, 6) },
  {
    d: `M28 62 Q56 70 84 62 ${dots([
      [42, 50],
      [52, 44],
      [64, 46],
      [46, 58],
    ])}`,
    role: 'soft',
  },
  { d: 'M74 46 l5 -3 M77 56 l5 -3', role: 'ambient' },
  { d: 'M30 112 Q66 128 108.3 82.8 M32 118 Q76 146 123.7 101.2' },
  {
    d: ellipse(116, 92, 12, 5),
    role: 'accent',
    transform: 'rotate(50 116 92)',
  },
  { d: 'M28 110 L34 120 M58 120 l-2 9 M90 113 l4 8', role: 'soft' },
  { d: 'M38 122 Q74 168 116 112', role: 'soft' },
  { d: 'M100 128 l5 -3 M110 120 l5 -3', role: 'ambient' },
  shadow(78, 156, 52),
]

/**
 * Greenbeard: a sack of grain, its mouth rolled down and the grain heaped
 * in it. Lord Beric sends him south of the Mander with the Mad Huntsman to
 * buy grain with the Hound's gold, in Arya VI of A Storm of Swords (chapter
 * 183). The book's alone; no page gives him an object of his own, so the
 * errand stands in. The grain is the accent; the sack's far side is
 * hatched.
 */
const SACK_OF_GRAIN: Stroke[] = [
  {
    d: 'M52 82 Q36 110 38 140 Q40 152 80 152 Q120 152 122 140 Q124 110 108 82',
  },
  { d: ellipse(80, 82, 28, 7) },
  { d: 'M52 82 Q54 92 52 98 Q80 106 108 98 Q106 92 108 82', role: 'soft' },
  { d: 'M56 80 Q68 60 80 62 Q92 60 104 80', role: 'accent' },
  {
    d: dots([
      [72, 70],
      [82, 68],
      [90, 72],
      [78, 76],
      [66, 76],
    ]),
    role: 'soft',
  },
  { d: 'M58 114 Q64 130 60 146 M98 108 Q92 128 100 148', role: 'soft' },
  { d: 'M112 108 l5 -3 M114 122 l5 -3 M112 136 l5 -3', role: 'ambient' },
  {
    d: dots([
      [128, 154],
      [134, 152],
      [132, 158],
      [140, 156],
    ]),
  },
  shadow(80, 158, 44),
]

/**
 * The Mad Huntsman: a crow cage hung on its chain from a gibbet, the kind
 * he leaves the northmen he catches to starve in at Stoney Sept, in Arya V
 * of A Storm of Swords (chapter 173). The book's alone. The bars are the
 * accent; the cage's far side and the post are hatched.
 */
const CROW_CAGE: Stroke[] = [
  { d: 'M34 150 V24 H100 M34 44 L54 24' },
  {
    d: `${ellipse(92, 30, 2, 4)} ${ellipse(92, 38, 2, 4)} ${ellipse(92, 46, 2, 4)}`,
  },
  { d: 'M68 72 Q92 46 116 72' },
  { d: `${ellipse(92, 72, 24, 6)} ${ellipse(92, 134, 24, 6)}` },
  { d: 'M68 72 V134 M116 72 V134' },
  { d: 'M80 77 V139 M92 78 V140 M104 77 V139', role: 'accent' },
  { d: 'M92 50 V66 M80 58 Q86 64 84 70 M104 58 Q98 64 100 70', role: 'soft' },
  { d: 'M110 92 l4 -2 M110 104 l4 -2 M110 116 l4 -2', role: 'ambient' },
  { d: 'M38 70 l4 -2 M38 90 l4 -2', role: 'ambient' },
  { d: 'M20 152 H140', role: 'ambient', dashed: true },
]

/**
 * Edric Dayne: the arms of his house, a white sword and a falling star, on
 * a shield in 3/4, for the young Lord of Starfall who squires for Lord
 * Beric in Arya VIII of A Storm of Swords (chapter 187). The book's alone;
 * the only thing of his own a page names is a pale purple cloak, so his
 * house's sigil stands in. The shield's edge is hatched; the falling star
 * is the accent.
 */
const FALLING_STAR_SHIELD: Stroke[] = [
  { d: 'M46 40 H110 V90 Q110 128 78 150 Q46 128 46 90 Z' },
  { d: 'M110 40 L116 44 V92 Q116 130 82 152 L78 150' },
  {
    d: 'M112 60 l3 -2 M112 76 l3 -2 M112 92 l3 -2 M108 112 l3 -2',
    role: 'ambient',
  },
  { d: 'M75 70 V118 L78 128 L81 118 V70' },
  { d: 'M66 70 H90 M78 70 V58', role: 'soft' },
  { d: circle(78, 55, 3), role: 'soft' },
  { d: star(98, 100, 10, 4.2), role: 'accent' },
  { d: 'M90 93 L64 64 M95 90 L76 60 M88 98 L58 76', role: 'soft' },
  shadow(80, 158, 38),
]

/**
 * The ghost of High Heart: her gnarled black cane leaning on one of the
 * weirwood stumps she sleeps among, in Arya IV of A Storm of Swords
 * (chapter 166). The book's alone. The cane is the accent, hatched for its
 * black wood; a second stump stands behind.
 */
const CANE_AND_STUMP: Stroke[] = [
  {
    d: `${ellipse(32, 120, 14, 4)} M18 120 V138 M46 120 V136`,
    role: 'ambient',
  },
  { d: ellipse(72, 110, 30, 8) },
  {
    d: 'M42 110 V138 Q36 146 28 150 M102 110 V138 Q108 146 118 150 M60 146 Q72 150 86 146',
  },
  {
    d: `${ellipse(72, 110, 18, 4.5)} ${ellipse(72, 110, 7, 1.8)}`,
    role: 'soft',
  },
  { d: 'M42 138 Q50 146 60 146 M86 146 Q96 146 102 138', role: 'soft' },
  {
    d: 'M118 150 Q114 132 120 118 Q116 100 122 84 Q118 66 126 52 Q124 40 116 36 Q110 36 110 44',
    role: 'accent',
  },
  { d: 'M121 117 l-4 -3 M121 84 l4 -4', role: 'soft' },
  {
    d: 'M118 140 l4 -1 M117 128 l4 -1 M120 104 l4 -1 M121 94 l4 -1 M122 72 l4 -1 M124 62 l4 -1',
    role: 'ambient',
  },
  { d: 'M10 152 H146', role: 'ambient', dashed: true },
]

/**
 * Arya's group of the third season (#1636): the Brotherhood Without
 * Banners' outlaws and the people of the holdfasts they ride through,
 * keyed by record id (#1644). Every one is the books' alone.
 */
export const BROTHERHOOD_DRAWINGS = {
  'anguy': LONGBOW_AND_DUCK,
  'tom-of-sevenstreams': WOODHARP_AND_AXE,
  'lem': CLOAK_AND_CONIC_HELM,
  'jack-be-lucky': HORN_AND_POTHELM,
  'greenbeard': SACK_OF_GRAIN,
  'mad-huntsman': CROW_CAGE,
  'edric-dayne': FALLING_STAR_SHIELD,
  'ghost-of-high-heart': CANE_AND_STUMP,
} satisfies Drawings

/** Arya's group drawn again later in the story. */
export const brotherhoodRedrawn: Redrawings = {
  lem: [
    // The same cloak with the Hound's dog's-head helm on the stand in place
    // of his own: he takes it from Rorge's body and wears it, though Thoros
    // tells him nothing good comes of it, in Brienne VIII of A Feast for
    // Crows (chapter 268). The record is the books' alone, so episode 57,
    // where the show first brings its Lem on, only orders the stage. The
    // helm is the Hound's own drawing, scaled; the cloak keeps the accent.
    {
      episode: 57,
      chapter: 268,
      source: 'chapter',
      value: [
        ...moved(softened(HOUND_HELM), 'translate(49 -3) scale(0.42)'),
        ...YELLOW_CLOAK,
      ],
    },
  ],
}
