import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Catelyn Stark: the letter that brings the news of Jon Arryn's death, the
 * news she carries to her husband in the godswood in episode 1 and in
 * Catelyn I (chapter 3). The roll lies on its own unrolled sheet, a plain
 * wax seal on the paper; the accent is the cord round the roll.
 */
const LETTER: Stroke[] = [
  { d: ellipse(50, 96, 7, 14) },
  { d: ellipse(50, 96, 2.5, 6), role: 'soft' },
  { d: 'M50 82 L104 76 M50 110 L104 104' },
  { d: 'M104 76 Q110 90 104 104', role: 'soft' },
  { d: 'M50 110 L40 140 L116 132 L104 104' },
  { d: 'M40 140 Q34 148 42 150 Q48 148 46 142', role: 'soft' },
  { d: 'M74 79 Q70 94 76 107 M80 78 Q76 93 82 106', role: 'accent' },
  { d: circle(80, 122, 6) },
  { d: 'M94 108 l6 -2 M96 96 l6 -2 M96 86 l6 -2', role: 'ambient' },
  shadow(78, 150, 44),
]

/**
 * The same letter dropped and lying open on the ground, its roll undone and
 * its seal still on the sheet: Catelyn's later stages keep it and move only
 * the cord.
 */
const LETTER_DROPPED: Stroke[] = [
  { d: 'M28 138 L58 118 L134 122 L112 146 Z' },
  { d: 'M58 118 Q52 108 60 104 Q68 104 66 112 Q64 118 58 118', role: 'soft' },
  { d: 'M28 138 Q20 144 26 150 Q34 152 36 146', role: 'soft' },
  { d: circle(84, 134, 5) },
  { d: 'M64 128 L100 130 M56 136 L76 137', role: 'soft' },
  { d: 'M18 156 H142', role: 'ambient', dashed: true },
]

/**
 * Robb Stark: a longsword in its scabbard, laid at a slant: the pommel, the
 * wrapped grip, the crossguard, the far side of the leather hatched and the
 * belt's two ends hanging from the locket. The accent is the locket's band.
 * Steel would be Ice, so the blade stays sheathed.
 */
const SHEATHED_SWORD: Stroke[] = [
  { d: circle(80, 26, 6) },
  { d: 'M76 32 H84 V56 H76 Z' },
  { d: 'M76 38 L84 42 M76 45 L84 49 M76 52 L84 56', role: 'soft' },
  { d: 'M56 56 H104 V62 H56 Z' },
  { d: 'M72 62 V142 Q80 156 88 142 V62' },
  { d: 'M72 70 H88 M72 76 H88', role: 'accent' },
  { d: 'M74 136 Q80 146 86 136', role: 'soft' },
  {
    d: 'M84 84 l4 -3 M84 96 l4 -3 M84 108 l4 -3 M84 120 l4 -3',
    role: 'ambient',
  },
  { d: 'M72 73 Q60 74 54 82 M88 75 Q100 76 104 84', role: 'soft' },
]

/** Robb's first drawing: the sheathed sword at a slant, as it stands. */
const ROBB_SWORD: Stroke[] = moved(SHEATHED_SWORD, 'rotate(-28 80 90)')

/**
 * The crown the book forges for him as King in the North, a circlet of
 * bronze seen a little from above with its iron spikes, set on the ground
 * beside the sword.
 */
const NORTHERN_CROWN: Stroke[] = [
  { d: 'M22 120 Q42 128 64 120 V132 Q42 140 22 132 Z' },
  { d: 'M22 120 Q42 112 64 120', role: 'soft' },
  {
    d: 'M26 122 L28 106 L31 124 M36 125 L38 108 L41 126 M46 125 L48 108 L51 125 M56 123 L58 106 L61 122',
  },
  { d: 'M26 128 Q42 134 60 128', role: 'soft' },
  shadow(43, 146, 26),
]

/**
 * Sansa Stark: an embroidery hoop seen a little from above, the cloth
 * hanging loose past its rim and a needle with its thread beside it. The
 * accent is her stitched flower, the work Septa Mordane praises in episode
 * 1. The book first shows her needlework in Arya I (chapter 8), three
 * chapters after her own; the owner rules the hoop her first drawing in
 * both media (#854).
 */
const HOOP: Stroke[] = [
  { d: ellipse(80, 82, 44, 32) },
  { d: ellipse(80, 82, 39, 27.5), role: 'soft' },
  { d: 'M75 50 V42 H85 V50 M80 42 V36', role: 'soft' },
  {
    d: 'M38 92 Q26 112 18 132 Q30 140 40 134 M122 92 Q134 114 144 130 Q132 140 120 134',
  },
  { d: 'M40 134 Q58 120 80 128 Q102 136 120 134', role: 'soft' },
  { d: 'M48 110 Q44 120 38 130 M112 110 Q118 120 124 130', role: 'soft' },
  {
    d: 'M80 98 Q78 88 80 80 M80 80 q-8 -8 0 -14 q8 6 0 14 M80 80 q-9 2 -12 -6 q9 -2 12 6 M80 80 q9 2 12 -6 q-9 -2 -12 6 M80 90 q-7 -4 -10 2',
    role: 'accent',
  },
  { d: 'M104 64 L130 40 M129 41 l2 -2' },
  { d: 'M131 39 Q144 60 128 72 Q116 80 106 74', role: 'soft' },
  { d: 'M110 96 l6 -3 M104 104 l6 -3', role: 'ambient' },
  shadow(80, 152, 46),
]

/**
 * Arya Stark: Needle, the slim sword Jon has made for her, stood on its
 * point: a small pommel, the wrapped grip, a thin crossguard and a blade
 * hardly wider than the line, which is the accent. He gives it to her in
 * episode 2 and in Jon II (chapter 11), within her first season and her
 * first book, so it is her first drawing: the object every reader knows her
 * by (owner, 2026-11-05, #1058).
 */
const NEEDLE_HILT: Stroke[] = [
  { d: circle(84, 34, 4) },
  { d: 'M81 38 H87 V54 H81 Z' },
  { d: 'M81 43 L87 46 M81 49 L87 52', role: 'soft' },
  { d: 'M70 56 Q84 52 98 56 M70 56 Q84 60 98 56', role: 'soft' },
]

/** Needle whole, hilt and blade, as it stands in her first drawing. */
const NEEDLE_SWORD: Stroke[] = [
  ...NEEDLE_HILT,
  { d: 'M82 58 L84 148 L86 58', role: 'accent' },
  { d: 'M84 62 V140', role: 'soft' },
]

const NEEDLE: Stroke[] = [...NEEDLE_SWORD, shadow(84, 153, 16)]

/**
 * Bran Stark: the broken tower he climbs, its corner seen in 3/4 with the
 * stone courses, the handholds and the high window in the accent. He climbs
 * Winterfell's walls in episode 1 and falls from the tower at its end, and
 * the book tells his climbing in Bran II (chapter 9). The owner makes the
 * tower his first drawing in both media at his threshold (2026-11-15,
 * overturning #854): the tower is no fate, and the fall stays out of it.
 */
const BROKEN_TOWER: Stroke[] = [
  { d: 'M40 150 V40 L84 30 L124 40 V150' },
  { d: 'M84 30 V150', role: 'soft' },
  {
    d: 'M40 62 L84 54 M40 86 L84 78 M40 110 L84 102 M40 134 L84 126 M84 54 L124 62 M84 78 L124 86 M84 102 L124 110 M84 126 L124 134',
    role: 'soft',
  },
  { d: 'M60 46 V36 M100 46 V36', role: 'soft' },
  { d: 'M54 72 V60 Q60 54 66 60 V72 Z', role: 'accent' },
  {
    d: 'M90 90 l8 -2 M94 116 l8 -2 M100 140 l8 -2 M106 68 l8 -2 M112 96 l6 -2 M112 122 l6 -2',
    role: 'ambient',
  },
  { d: 'M48 98 h4 M70 118 h4 M58 140 h4', role: 'soft' },
  { d: 'M28 150 H136', role: 'ambient', dashed: true },
]

/**
 * Rickon Stark: a child's mantle, fur at the collar and the hem, the ermine
 * tails along both in the accent. Its far side is hatched.
 */
const MANTLE: Stroke[] = [
  { d: ellipse(80, 50, 18, 6) },
  {
    d: 'M62 50 Q50 58 44 80 Q34 116 30 146 M98 50 Q110 58 116 80 Q126 116 130 146',
  },
  { d: 'M30 146 Q80 158 130 146' },
  {
    d: 'M62 52 Q80 66 98 52 Q100 60 94 64 Q80 74 66 64 Q60 60 62 52',
    role: 'soft',
  },
  { d: 'M32 136 Q80 148 128 136', role: 'soft' },
  { d: 'M74 80 Q70 110 72 142 M92 82 Q96 110 94 144', role: 'soft' },
  {
    d: 'M70 60 v5 M80 66 v5 M90 60 v5 M44 140 v6 M62 144 v6 M80 146 v6 M98 144 v6 M116 140 v6',
    role: 'accent',
  },
  { d: 'M112 96 l6 -3 M116 110 l6 -3 M119 124 l6 -3', role: 'ambient' },
]

/**
 * Benjen Stark: the black cloak of the Night's Watch on a peg, hatched
 * because it is black, its collar turned down. The accent is the silver
 * clasp and its chain. He comes to the feast in black in episode 1 and in
 * Jon I (chapter 6).
 */
/** The peg the cloak hangs from, and the rail it is set in. */
const PEG_HOOK: Stroke = { d: 'M60 30 H100 M80 30 V40', role: 'soft' }
const RAIL: Stroke = { d: 'M28 30 H132', role: 'ambient' }
const PEG: Stroke[] = [PEG_HOOK, RAIL]

const BLACK_CLOAK: Stroke[] = [
  PEG_HOOK,
  { d: 'M66 44 Q80 38 94 44 Q112 70 118 148 Q80 156 42 148 Q48 70 66 44' },
  { d: 'M66 44 Q72 56 80 56 Q88 56 94 44', role: 'soft' },
  {
    d: `${circle(80, 58, 4)} M76 58 Q60 50 56 40 M84 58 Q100 50 104 40`,
    role: 'accent',
  },
  { d: 'M70 70 Q66 110 60 146 M90 70 Q96 110 100 146', role: 'soft' },
  {
    d: 'M98 80 l8 -4 M100 94 l9 -4 M103 108 l9 -4 M105 122 l9 -4 M106 136 l9 -4 M50 100 l7 -4 M48 116 l7 -4 M46 132 l7 -4',
    role: 'ambient',
  },
  RAIL,
  shadow(80, 156, 40),
]

/**
 * The black cloak he comes back in, its hem torn to rags, the far side
 * still hatched and the clasp in the accent.
 */
const TORN_CLOAK: Stroke[] = [
  {
    d: 'M66 44 Q80 38 94 44 Q110 70 114 140 L106 132 L100 146 L92 134 L84 148 L78 134 L70 146 L64 132 L56 144 L50 130 L44 140 Q48 70 66 44',
  },
  { d: 'M66 44 Q72 56 80 56 Q88 56 94 44', role: 'soft' },
  { d: circle(80, 58, 4), role: 'accent' },
  { d: 'M70 70 Q66 100 62 130 M90 70 Q94 100 98 132', role: 'soft' },
  {
    d: 'M98 80 l8 -4 M100 94 l9 -4 M103 108 l8 -4 M104 122 l8 -4 M50 100 l7 -4 M48 116 l7 -4',
    role: 'ambient',
  },
]

/** The flail he swings, its chain hanging from the rail to an iron ball. */
const FLAIL: Stroke[] = [
  { d: 'M126 30 V96 M123 40 h6 M123 52 h6 M123 64 h6 M123 76 h6 M123 88 h6' },
  { d: circle(126, 104, 7) },
]

/** The fire on the flail's ball. */
const FLAME: Stroke = {
  d: 'M120 112 Q108 100 116 84 Q118 94 122 96 Q120 82 128 70 Q134 84 130 96 Q136 92 138 82 Q146 100 132 112',
}

/**
 * Theon Greyjoy: a kraken, the animal of his house, in the water with its
 * arms curled and no eye. Nothing of his own reads at tile size by his
 * threshold in both media, so the house's animal stands in (owner, #854);
 * the accent is one arm.
 */
const KRAKEN_BODY: Stroke[] = [
  { d: 'M64 76 Q60 40 80 28 Q100 40 96 76 Q88 82 80 82 Q72 82 64 76' },
  { d: 'M66 50 Q80 56 94 50', role: 'soft' },
  { d: 'M66 78 Q56 104 40 112 Q28 116 30 104', role: 'soft' },
  { d: 'M72 82 Q66 112 56 128 Q48 140 58 142' },
  { d: 'M80 82 Q82 116 76 136 Q72 150 84 148', role: 'accent' },
  { d: 'M88 82 Q100 112 104 130 Q108 144 98 144' },
  { d: 'M94 78 Q110 100 126 104 Q136 104 132 94', role: 'soft' },
  { d: 'M86 40 l6 -3 M90 52 l5 -3 M90 64 l5 -3', role: 'ambient' },
]

/** The two rows of sea under the kraken. */
const KRAKEN_SEA: Stroke[] = [
  {
    d: 'M20 158 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
  {
    d: 'M30 172 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
]

const KRAKEN: Stroke[] = [...KRAKEN_BODY, ...KRAKEN_SEA]

/**
 * Luwin: a maester's chain laid on a table in a loop, its links of mixed
 * metals, the far ones drawn lighter and the dark iron ones hatched. The
 * accent is one link.
 */
const CHAIN_NEAR_LINKS: Stroke = {
  d: `${ellipse(36, 116, 5, 3)} ${ellipse(46, 128, 4, 3)} ${ellipse(60, 135, 5, 3)} ${ellipse(76, 138, 5, 3)} ${ellipse(92, 137, 5, 3)} ${ellipse(108, 132, 5, 3)} ${ellipse(122, 124, 5, 3)}`,
}

const MAESTER_CHAIN: Stroke[] = [
  CHAIN_NEAR_LINKS,
  {
    d: `${ellipse(126, 110, 4, 3)} ${ellipse(116, 102, 5, 3)} ${ellipse(100, 98, 5, 3)} ${ellipse(68, 98, 5, 3)} ${ellipse(52, 101, 5, 3)} ${ellipse(40, 106, 4, 3)}`,
    role: 'soft',
  },
  { d: ellipse(84, 98, 6, 4), role: 'accent' },
  { d: 'M60 135 l3 -2 M92 137 l3 -2 M122 124 l3 -2', role: 'ambient' },
  { d: 'M76 138 Q80 150 78 156 M78 156 h6', role: 'soft' },
  { d: 'M24 160 H136', role: 'ambient', dashed: true },
  shadow(80, 162, 54),
]

/**
 * Rodrik Cassel: two wooden practice swords leaning crossed against a post
 * in the yard, as he sets the boys to fight with them in Arya I (chapter
 * 8). The accent is the leather wrap on one grip.
 */
const YARD_POST: Stroke[] = [
  { d: 'M80 150 V44 M86 150 V48', role: 'soft' },
  { d: 'M76 44 H90 V150' },
  { d: 'M80 70 l6 3 M80 96 l6 -2 M80 120 l6 3', role: 'ambient' },
]

const PRACTICE_SWORDS: Stroke[] = [
  ...YARD_POST,
  { d: 'M44 148 L96 40 L102 43 L50 151 Z' },
  { d: 'M88 56 L104 64 M93 50 L100 53', role: 'soft' },
  { d: 'M98 44 L106 28 L112 31 L104 47', role: 'accent' },
  { d: 'M124 150 L66 46 L60 49 L118 153' },
  { d: 'M60 62 L76 54', role: 'soft' },
  { d: 'M64 50 L56 34 L50 37 L58 53', role: 'soft' },
  { d: 'M28 152 H136', role: 'ambient', dashed: true },
]

/**
 * Old Nan: a wicker basket of her knitting, a ball of yarn on top with two
 * needles through it, the work trailing over the rim in the accent. The
 * basket's far side is hatched.
 */
const KNITTING_BASKET: Stroke[] = [
  { d: ellipse(80, 104, 40, 12) },
  { d: 'M40 104 Q42 136 52 148 Q80 156 108 148 Q118 136 120 104' },
  { d: 'M44 118 Q80 128 116 118 M48 132 Q80 142 112 132', role: 'soft' },
  { d: 'M60 112 V148 M80 116 V152 M100 112 V148', role: 'soft' },
  { d: 'M108 120 l6 -3 M106 134 l6 -3', role: 'ambient' },
  { d: circle(82, 92, 14) },
  { d: 'M70 86 Q82 82 94 90 M70 96 Q82 92 94 100', role: 'soft' },
  { d: 'M66 100 L44 54 M98 98 L118 52' },
  { d: 'M44 54 h0.01 M118 52 h0.01' },
  { d: 'M96 96 Q120 100 126 80 Q130 66 120 64', role: 'accent' },
  shadow(80, 156, 42),
]

/**
 * Hodor: a stableboy's bucket of staves and hoops, a hayfork leaning on the
 * stall post behind it and a tuft of straw. The accent is the bucket's top
 * hoop.
 */
const BUCKET: Stroke[] = [
  { d: ellipse(64, 104, 26, 8) },
  { d: 'M38 104 L44 148 Q64 156 84 148 L90 104' },
  { d: 'M40 118 Q64 126 88 118', role: 'accent' },
  { d: 'M43 138 Q64 146 85 138', role: 'soft' },
  { d: 'M54 112 L56 150 M74 112 L72 150', role: 'soft' },
  { d: 'M82 112 l5 -3 M82 128 l5 -3', role: 'ambient' },
]

/** The stall post and the hayfork leaning on it. */
const HAYFORK: Stroke[] = [
  { d: 'M110 150 L124 40' },
  {
    d: 'M114 44 Q124 36 134 44 M116 44 L112 24 M124 40 L124 20 M132 44 L136 24',
  },
  { d: 'M128 150 V30 M134 150 V34', role: 'soft' },
]

const STABLE: Stroke[] = [
  ...BUCKET,
  ...HAYFORK,
  { d: 'M92 150 q4 -8 8 0 q4 -10 8 0 q4 -6 8 0', role: 'ambient' },
  shadow(70, 156, 34),
]

/**
 * Osha: her spear planted upright, a long shaft with a binding below the
 * head, its far side hatched. She yields it to Robb in episode 6 and in
 * Bran V (chapter 38); the accent is its steel head. The rust the book
 * gives the head is the book's alone, so it is not drawn.
 */
const SPEAR_SHAFT: Stroke[] = [
  { d: 'M78 150 L84 52 M84 150 L90 52' },
  { d: 'M84 52 Q80 40 87 18 Q94 40 90 52 Z', role: 'accent' },
  { d: 'M87 22 V50', role: 'soft' },
  { d: 'M89 30 l2 -1 M90 40 l2 -1', role: 'ambient' },
  { d: 'M84 56 L91 60 M84 62 L91 66 M83 68 L90 72', role: 'soft' },
  {
    d: 'M88 84 l4 -2 M87 100 l4 -2 M86 116 l4 -2 M85 132 l4 -2',
    role: 'ambient',
  },
]

const SPEAR: Stroke[] = [
  ...SPEAR_SHAFT,
  { d: 'M40 150 H128', role: 'ambient', dashed: true },
  { d: 'M74 150 q6 -6 14 0', role: 'soft' },
  shadow(82, 154, 22),
]

/** Mordane's pincushion: a round cushion seen a little from above. */
const PINCUSHION: Stroke[] = [
  { d: ellipse(64, 128, 26, 10) },
  { d: 'M38 128 Q40 108 64 106 Q88 108 90 128', role: 'soft' },
  {
    d: 'M64 106 V138 M46 112 Q52 124 50 136 M82 112 Q76 124 78 136',
    role: 'soft',
  },
]

/** Mordane's spool of thread, standing, its windings drawn across. */
const SPOOL: Stroke[] = [
  { d: `${ellipse(118, 112, 12, 4)} ${ellipse(118, 146, 12, 4)}` },
  { d: 'M110 114 V144 M126 114 V144' },
  {
    d: 'M110 120 H126 M110 126 H126 M110 132 H126 M110 138 H126',
    role: 'soft',
  },
]

/**
 * Mordane: a needle stuck in a pincushion, its thread running from the eye
 * to a spool beside it, the septa's needlework lesson in episode 1 and in
 * Arya I (chapter 8). The accent is the thread.
 */
const NEEDLEWORK: Stroke[] = [
  ...PINCUSHION,
  ...SPOOL,
  { d: 'M64 112 L80 46 M79 50 l2 -6' },
  { d: 'M81 44 Q100 30 104 60 Q108 90 112 112', role: 'accent' },
  { d: 'M84 120 l5 -3 M86 130 l5 -3', role: 'ambient' },
  shadow(90, 156, 50),
]

/**
 * Jory Cassel: the captain's open steel helm in 3/4, the band round its
 * brim in the accent, its rivets and the far side hatched. He rides out
 * with Eddard Stark to the execution in episode 1 and in Bran I (chapter
 * 2).
 */
const HELM: Stroke[] = [
  { d: 'M42 112 Q42 52 80 46 Q118 52 118 112' },
  { d: ellipse(80, 112, 38, 9) },
  { d: 'M42 98 Q80 108 118 98', role: 'accent' },
  { d: 'M80 46 V102', role: 'soft' },
  {
    d: dots([
      [52, 104],
      [64, 106],
      [96, 106],
      [108, 104],
    ]),
    role: 'soft',
  },
  { d: 'M100 62 l8 -5 M104 76 l9 -5 M106 90 l9 -5', role: 'ambient' },
]

/**
 * The six direwolves, each a silhouette side on with no eye or mouth, told
 * apart by their pose. The accent is the ruff on the chest, or for Ghost,
 * who is white, his tail.
 */

/**
 * Grey Wind: lean and mid-bound, forelegs reaching, hind legs pushing off,
 * named for his speed. His threshold is episode 8, where he leaps on the
 * Greatjon, and chapter 11 in the book.
 */
const GREY_WIND: Stroke[] = [
  {
    d: 'M18 92 L34 84 Q40 76 46 74 L46 60 L54 70 L60 60 L62 74 Q74 76 92 80 Q114 84 128 92',
  },
  { d: 'M18 92 Q22 100 34 98 Q44 98 50 104' },
  { d: 'M50 104 Q60 112 72 112 Q96 114 114 108' },
  { d: 'M54 106 Q44 118 30 122 Q24 124 26 128 Q34 130 46 124 Q58 116 64 112' },
  { d: 'M60 110 Q54 124 44 134 Q40 138 44 140', role: 'soft' },
  {
    d: 'M114 106 Q120 120 134 130 Q144 136 146 142 Q138 144 128 136 Q116 126 108 112',
  },
  { d: 'M120 98 Q132 112 148 118 Q154 120 152 126', role: 'soft' },
  { d: 'M128 92 Q142 92 154 82 Q156 90 146 98 Q138 102 126 102' },
  { d: 'M52 76 Q46 86 50 94 Q44 100 48 106', role: 'accent' },
  { d: 'M50 64 L52 72 M58 64 L58 72', role: 'soft' },
  { d: 'M84 86 Q90 96 86 108 M100 88 Q106 98 102 108', role: 'soft' },
  { d: 'M40 160 H120', role: 'ambient', dashed: true },
]

/**
 * Lady: the gentlest of the litter, sitting with her head bowed and her
 * tail round her feet. Sansa names her in episode 1; the book names her in
 * Sansa I (chapter 16).
 */
const LADY: Stroke[] = [
  {
    d: 'M62 104 L48 114 Q42 114 44 108 L54 94 L54 78 L62 86 L68 78 L70 90 Q78 92 84 94 Q98 98 106 112 Q116 128 112 146',
  },
  { d: 'M48 114 Q54 114 60 110', role: 'soft' },
  { d: 'M60 100 Q58 112 62 120 V146 Q62 150 68 150 Q74 150 74 146 V124' },
  { d: 'M78 122 V148 Q78 150 84 150', role: 'soft' },
  { d: 'M112 146 Q104 150 90 150 M98 132 Q92 140 96 150', role: 'soft' },
  { d: 'M112 146 Q126 154 132 146 Q128 140 118 142', role: 'soft' },
  { d: 'M70 96 Q64 106 66 114 Q62 120 64 126', role: 'accent' },
  { d: 'M57 84 L58 90 M66 84 L66 90', role: 'soft' },
  { d: 'M90 100 Q98 110 96 122', role: 'soft' },
  shadow(88, 153, 40),
]

/**
 * Nymeria: standing alert, head up and tail down, the wolf that waits on
 * Arya. Her threshold is episode 2 and Arya I (chapter 8), where the book
 * has her waiting for Arya after her lesson.
 */
const NYMERIA: Stroke[] = [
  {
    d: 'M26 70 L42 64 Q48 56 54 54 L56 38 L64 50 L70 40 L72 54 Q78 64 90 70 Q112 76 128 78 Q136 80 138 88',
  },
  { d: 'M26 70 Q28 78 42 80 Q52 82 56 92' },
  { d: 'M56 92 Q56 100 60 104 M72 108 Q96 104 118 106' },
  { d: 'M60 102 V146 Q60 150 66 150 Q70 150 70 146 V108' },
  { d: 'M74 108 V150', role: 'soft' },
  {
    d: 'M118 100 Q128 112 122 128 V146 Q122 150 128 150 Q132 150 132 146 V124 Q138 108 134 94',
  },
  { d: 'M112 110 Q114 128 110 150', role: 'soft' },
  { d: 'M138 86 Q150 96 150 122 Q148 130 144 124 Q142 106 134 98' },
  { d: 'M60 66 Q54 76 58 84 Q52 90 56 98', role: 'accent' },
  { d: 'M58 46 L60 54 M68 46 L68 56', role: 'soft' },
  { d: 'M96 82 Q104 90 102 100 M86 80 Q92 88 92 98', role: 'soft' },
  shadow(96, 153, 46),
]

/**
 * Summer: lying watchful at the foot of Bran's bed, head up, as he keeps
 * guard by him in episode 4 and before his naming in Bran III (chapter
 * 18).
 */
const SUMMER: Stroke[] = [
  { d: 'M22 150 V72 M138 150 V72', role: 'ambient' },
  { d: 'M18 72 H142 M22 80 H138', role: 'soft' },
  {
    d: 'M40 120 L54 114 Q60 106 64 104 L64 90 L72 100 L78 90 L80 104 Q90 112 106 116 Q124 120 132 134 Q134 146 124 148',
  },
  { d: 'M40 120 Q42 128 56 128 Q64 130 66 138' },
  {
    d: 'M66 138 Q62 146 50 146 Q40 148 42 150 H80 Q74 146 72 140',
    role: 'soft',
  },
  { d: 'M80 150 H124' },
  { d: 'M124 148 Q138 152 146 148', role: 'soft' },
  { d: 'M74 110 Q68 120 72 128 Q66 134 70 140', role: 'accent' },
  { d: 'M68 94 L70 102 M76 94 L76 102', role: 'soft' },
  { d: 'M98 120 Q104 130 100 142', role: 'soft' },
  shadow(84, 154, 54),
]

/**
 * Shaggydog: the black one, crouched low to spring, hackles up, his body
 * hatched because he is black. He leaps out in the crypt in episode 10 and
 * corners Tyrion with the others in Bran IV (chapter 25).
 */
const SHAGGYDOG: Stroke[] = [
  {
    d: 'M20 112 L36 106 Q42 98 48 96 L50 80 L58 92 L64 82 L66 96 Q78 88 96 92 Q118 96 132 108',
  },
  { d: 'M20 112 Q24 120 38 120 Q50 120 54 128' },
  { d: 'M54 128 L40 146 Q38 150 44 150 H58 L66 132 M72 134 L64 150 H76' },
  { d: 'M90 132 Q104 136 116 132' },
  { d: 'M116 128 Q108 140 112 150 H128 Q124 140 132 126 Q136 116 132 108' },
  {
    d: 'M132 106 Q146 100 150 88 Q154 96 146 108 Q140 114 132 116',
    role: 'soft',
  },
  {
    d: 'M74 100 l8 -6 M84 104 l10 -8 M94 108 l12 -9 M104 114 l12 -9 M80 116 l12 -9 M90 122 l14 -10 M100 126 l14 -10 M112 124 l8 -6',
    role: 'ambient',
  },
  {
    d: 'M60 92 Q54 102 58 110 Q52 116 56 124 M70 90 l2 -8 M78 88 l2 -8 M86 89 l1 -8',
    role: 'accent',
  },
  { d: 'M54 86 L56 94 M62 86 L62 94', role: 'soft' },
  shadow(84, 154, 54),
]

/**
 * Ghost: grown, white and silent, standing tall with his head low and his
 * bushy tail carried high, so he reads apart from Jon's sitting pup. He
 * stands over Rast at Jon's word in episode 4 and is named in Jon I
 * (chapter 6). Nothing is hatched: he is white.
 */
const GHOST: Stroke[] = [
  {
    d: 'M22 86 L38 80 Q46 74 52 72 L54 58 L62 68 L68 58 L70 72 Q80 78 94 78 Q114 78 128 74',
  },
  { d: 'M22 86 Q24 94 38 94 Q50 94 56 102' },
  { d: 'M56 102 Q58 108 62 112 M72 114 Q96 110 116 110' },
  { d: 'M62 110 V146 Q62 150 68 150 Q72 150 72 146 V114' },
  { d: 'M76 114 V150', role: 'soft' },
  {
    d: 'M116 104 Q126 116 120 130 V146 Q120 150 126 150 Q130 150 130 146 V126 Q136 110 130 92',
  },
  { d: 'M110 112 Q112 130 108 150', role: 'soft' },
  { d: 'M128 74 Q140 60 136 40 Q146 46 148 60 Q148 76 130 92', role: 'accent' },
  { d: 'M136 48 Q142 58 138 70', role: 'soft' },
  { d: 'M58 66 L60 72 M66 64 L66 72', role: 'soft' },
  { d: 'M60 82 Q56 92 60 100', role: 'soft' },
  shadow(94, 153, 46),
]

/** The Winterfell household's first drawings, keyed by record id (#854). */
export const WINTERFELL_DRAWINGS = {
  'catelyn-stark': LETTER,
  'robb-stark': [...ROBB_SWORD, shadow(80, 156, 40)],
  'sansa-stark': HOOP,
  'bran-stark': BROKEN_TOWER,
  'rickon-stark': [...MANTLE, shadow(80, 158, 46)],
  'benjen-stark': BLACK_CLOAK,
  'grey-wind': GREY_WIND,
  'lady-direwolf': LADY,
  'nymeria': NYMERIA,
  'summer-direwolf': SUMMER,
  'shaggydog': SHAGGYDOG,
  'ghost-direwolf': GHOST,
  'theon-greyjoy': KRAKEN,
  'luwin': MAESTER_CHAIN,
  'rodrik-cassel': PRACTICE_SWORDS,
  'old-nan': KNITTING_BASKET,
  'hodor': STABLE,
  'osha': SPEAR,
  'mordane': NEEDLEWORK,
  'arya-stark': NEEDLE,
  'jory-cassel': [...HELM, shadow(80, 132, 44)],
} satisfies Drawings

/** Their later stages, each with its true pin in each medium. */
export const winterfellRedrawn: Redrawings = {
  'catelyn-stark': [
    // The letter dropped and lying open, its cord undone beside it: she dies
    // at the Red Wedding, in "The Rains of Castamere" (episode 29) and in
    // Catelyn VII of A Storm of Swords (chapter 195). How she dies is not
    // drawn (owner, 2026-11-15).
    {
      episode: 29,
      chapter: 195,
      value: [
        ...LETTER_DROPPED,
        {
          d: 'M96 150 Q110 158 122 150 Q132 142 142 150 M104 154 Q100 160 92 158',
          role: 'accent',
        },
      ],
    },
    // The same cord taken up as a noose hanging from a branch over the
    // letter: the book alone brings her back as Lady Stoneheart, who hangs
    // her captives, in the epilogue of A Storm of Swords (chapter 225). The
    // show never does, and episode 30 only orders the stage (owner,
    // 2026-11-15).
    {
      episode: 30,
      chapter: 225,
      source: 'chapter',
      value: [
        ...LETTER_DROPPED,
        { d: 'M20 28 Q80 18 142 30 M110 25 L128 10', role: 'soft' },
        {
          d: `M84 24 V64 ${ellipse(84, 82, 9, 14)} M79 64 H89 M79 69 H89`,
          role: 'accent',
        },
      ],
    },
  ],
  'robb-stark': [
    // The crown of bronze and iron spikes set down beside the sword: the
    // book's King in the North wears it, from his proclamation in Catelyn
    // XI of A Game of Thrones (chapter 72). The show's Robb never wears a
    // crown, so the stage is the book's alone and episode 10, the show's
    // proclamation, only orders it (owner, 2026-11-15: a crown is a
    // costume).
    {
      episode: 10,
      chapter: 72,
      source: 'chapter',
      value: [...ROBB_SWORD, shadow(80, 156, 40), ...NORTHERN_CROWN],
    },
    // The sword fallen flat across the ground, without the crown: he dies at
    // the Red Wedding, in "The Rains of Castamere" (episode 29) and in
    // Catelyn VII of A Storm of Swords (chapter 195).
    {
      episode: 29,
      chapter: 195,
      value: [
        ...moved(SHEATHED_SWORD, 'translate(2 52) rotate(-78 80 90)'),
        { d: 'M14 158 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'bran-stark': [
    // A raven perched on a weirwood branch, its three eyes in the accent:
    // Bran is the Three-Eyed Raven from "Blood of My Blood" (episode 56).
    // In the books he is still the raven's pupil, so the stage is the
    // show's alone and chapter 344 only orders it. The three eyes are the
    // owner's exception to the house style, as the raven is the sigil of
    // his title (2026-11-15).
    {
      episode: 56,
      chapter: 344,
      source: 'episode',
      value: [
        {
          d: 'M84 58 Q96 46 108 54 L128 60 L108 66 Q112 82 102 98 Q92 112 72 116 L42 140 L38 134 L58 112 Q54 94 64 78 Q72 64 84 58',
        },
        { d: 'M66 84 Q86 84 98 100 Q86 110 64 112', role: 'soft' },
        { d: 'M72 92 l10 8 M66 100 l12 6', role: 'soft' },
        {
          d: 'M76 70 l8 -5 M68 82 l6 -4 M90 108 l8 -6 M80 112 l6 -4',
          role: 'ambient',
        },
        {
          d: `${circle(98, 56, 1.6)} ${circle(105, 59, 1.6)} ${circle(100, 63, 1.6)}`,
          role: 'accent',
        },
        { d: 'M80 116 L78 126 M90 112 L92 126', role: 'soft' },
        { d: 'M18 128 Q80 120 146 130 M22 135 Q80 128 142 137' },
        {
          d: 'M124 129 L138 112 M138 112 q8 -6 10 2 q-6 6 -10 -2',
          role: 'soft',
        },
      ],
    },
  ],
  'rickon-stark': [
    // The mantle fallen across the ground: he dies at the Battle of the
    // Bastards (episode 59). In the books he lives, so the stage is the
    // show's alone and chapter 344 only orders it. How he dies is not
    // drawn (owner, 2026-11-15).
    {
      episode: 59,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(MANTLE, 'translate(0 68) scale(1 0.6) rotate(-80 80 100)'),
        { d: 'M12 160 H148', role: 'ambient', dashed: true },
      ],
    },
  ],
  'benjen-stark': [
    // The empty peg, the cloak gone and only the clasp's chain left hanging:
    // he rides beyond the Wall and does not come back. His horse returns
    // without him in "You Win or You Die" (episode 7); the book says he is
    // missing in Jon V of A Game of Thrones (chapter 42).
    {
      episode: 7,
      chapter: 42,
      value: [
        ...PEG,
        {
          d: `M80 40 Q70 52 76 62 M80 40 Q90 52 84 62 ${circle(80, 66, 4)}`,
          role: 'accent',
        },
        { d: 'M40 156 H120', role: 'ambient', dashed: true },
      ],
    },
    // The black cloak back on the peg, its hem torn, with a chain hanging
    // beside it that ends in a burning ball: he returns as the hooded rider
    // with the flaming flail in "Blood of My Blood" (episode 56). The book's
    // Coldhands is someone else, so the stage is the show's alone and
    // chapter 344 only orders it.
    {
      episode: 56,
      chapter: 344,
      source: 'episode',
      value: [...PEG, ...TORN_CLOAK, ...FLAIL, FLAME, shadow(80, 156, 40)],
    },
    // The same torn cloak on the ground, the chain slack and the fire out:
    // he dies holding off the dead in "Beyond the Wall" (episode 66), the
    // show's alone.
    {
      episode: 66,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(
          TORN_CLOAK,
          'translate(0 80) scale(1 0.55) rotate(-90 80 100)',
        ),
        {
          d: `M90 160 Q104 166 116 158 Q126 152 136 157 ${circle(142, 157, 6)}`,
        },
        { d: 'M12 162 H148', role: 'ambient', dashed: true },
      ],
    },
  ],
  'grey-wind': [
    // Lying on his side, still, his head low on the ground: he is killed at
    // the Red Wedding, in "The Rains of Castamere" (episode 29); the book
    // first tells it after the wedding, in chapter 54 of A Storm of Swords
    // (chapter 198). How he dies is not drawn (owner, 2026-11-15).
    {
      episode: 29,
      chapter: 198,
      value: [
        {
          d: 'M16 146 L28 142 Q34 138 40 138 L38 126 L46 134 L52 126 L54 138 Q66 130 90 130 Q118 130 132 140 Q138 148 132 152',
        },
        { d: 'M16 146 Q24 154 44 154 Q76 156 104 156 Q122 156 132 152' },
        { d: 'M58 152 L74 160 M66 152 L84 160', role: 'soft' },
        { d: 'M104 154 L122 162 M112 154 L130 162', role: 'soft' },
        { d: 'M132 146 Q146 142 154 150 Q146 156 134 154', role: 'soft' },
        { d: 'M56 134 Q52 142 58 150', role: 'accent' },
        { d: 'M42 128 L44 134 M50 128 L50 134', role: 'soft' },
        { d: 'M86 134 Q92 144 88 154', role: 'soft' },
        { d: 'M10 164 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'summer-direwolf': [
    // Lying on his side in the snow, out of the bed he guarded: he dies
    // holding the cave in "The Door" (episode 55). He lives in the books,
    // so the stage is the show's alone and chapter 344 only orders it.
    {
      episode: 55,
      chapter: 344,
      source: 'episode',
      value: [
        {
          d: 'M144 140 L132 136 Q126 132 120 132 L122 120 L114 128 L108 120 L106 132 Q94 126 72 128 Q46 130 32 140 Q26 148 32 152',
        },
        { d: 'M144 140 Q136 150 116 152 Q86 156 58 156 Q42 156 32 152' },
        { d: 'M100 152 L88 162 M92 152 L78 162', role: 'soft' },
        { d: 'M56 154 L40 162 M48 154 L32 162', role: 'soft' },
        { d: 'M32 146 Q18 140 12 128 Q22 130 30 142', role: 'soft' },
        { d: 'M104 134 Q108 142 102 150', role: 'accent' },
        { d: 'M118 124 L116 130 M110 124 L110 130', role: 'soft' },
        {
          d: 'M126 160 h8 M140 156 h8 M136 166 h8 M150 164 h6 M20 166 h8',
          role: 'ambient',
        },
        { d: 'M14 160 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'shaggydog': [
    // The black wolf lying on his side, his head on the ground, still
    // hatched: his head is brought to Ramsay in "Oathbreaker" (episode 53).
    // He lives in the books, so the stage is the show's alone and chapter
    // 344 only orders it.
    {
      episode: 53,
      chapter: 344,
      source: 'episode',
      value: [
        {
          d: 'M18 144 L30 140 Q36 136 42 136 L42 124 L48 132 L56 124 L56 136 Q70 126 96 128 Q120 130 134 142 Q140 150 132 154',
        },
        { d: 'M18 144 Q26 152 46 152 Q78 156 106 156 Q124 156 132 154' },
        { d: 'M62 152 L76 160 M70 152 L86 160', role: 'soft' },
        { d: 'M108 154 L124 162 M116 154 L132 162', role: 'soft' },
        { d: 'M134 146 Q148 140 152 130 Q154 140 136 152', role: 'soft' },
        {
          d: 'M74 136 l8 -6 M84 140 l10 -8 M96 144 l12 -9 M108 146 l12 -9 M84 150 l12 -9 M98 152 l12 -9',
          role: 'ambient',
        },
        {
          d: 'M58 132 Q54 140 60 148 M66 130 l2 -6 M74 129 l2 -6',
          role: 'accent',
        },
        { d: 'M46 128 L48 134 M54 128 L54 134', role: 'soft' },
        { d: 'M12 164 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'theon-greyjoy': [
    // The kraken dragged out of the sea and huddled on bare ground, an iron
    // ring round one arm chained to a stake: Ramsay breaks him into Reek,
    // naming him so in "Mhysa" (episode 30) and in Reek I of A Dance with
    // Dragons (chapter 284).
    {
      episode: 30,
      chapter: 284,
      value: [
        ...moved(KRAKEN_BODY, 'translate(24 44) scale(0.72)'),
        { d: ellipse(66, 140, 5, 3) },
        {
          d: `M61 141 Q46 146 34 138 ${circle(30, 136, 4)} M30 132 V108 M26 108 H34`,
        },
        { d: 'M14 152 H146', role: 'ambient', dashed: true },
      ],
    },
    // The same kraken capsized on the waves, its arms thrown loose: he dies
    // defending Bran in "The Long Night" (episode 70). He lives in the books,
    // so the stage is the show's alone and chapter 344 only orders it.
    {
      episode: 70,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(KRAKEN_BODY, 'translate(0 66) rotate(-96 80 80)'),
        ...KRAKEN_SEA,
      ],
    },
  ],
  'luwin': [
    // The chain broken open on the table, a few links scattered from it and
    // the accent link lying apart: he dies of his wounds in the godswood, in
    // "Valar Morghulis" (episode 20) and in Bran VII of A Clash of Kings
    // (chapter 143).
    {
      episode: 20,
      chapter: 143,
      value: [
        CHAIN_NEAR_LINKS,
        {
          d: `${ellipse(40, 106, 4, 3)} ${ellipse(52, 101, 5, 3)} ${ellipse(126, 110, 4, 3)}`,
          role: 'soft',
        },
        { d: `${ellipse(98, 152, 4, 3)} ${ellipse(132, 150, 4, 3)}` },
        { d: ellipse(116, 154, 6, 4), role: 'accent' },
        { d: 'M60 135 l3 -2 M92 137 l3 -2 M122 124 l3 -2', role: 'ambient' },
        { d: 'M24 160 H136', role: 'ambient', dashed: true },
        shadow(80, 162, 54),
      ],
    },
  ],
  'rodrik-cassel': [
    // The bare post, the two practice swords fallen at its foot and one
    // snapped in two: Theon has him beheaded in "The Old Gods and the New"
    // (episode 16), and the book's Ramsay kills him outside Winterfell, told
    // in Theon VI of A Clash of Kings (chapter 140). How he dies is not
    // drawn (owner, 2026-11-15).
    {
      episode: 16,
      chapter: 140,
      value: [
        ...YARD_POST,
        { d: 'M18 146 L70 138 L71 144 L19 152 Z' },
        { d: 'M64 139 l1 6 M58 140 l1 6', role: 'soft' },
        { d: 'M70 138 L82 136 L83 142 L71 144', role: 'accent' },
        { d: 'M98 150 L132 140 L134 146 L100 156 Z' },
        { d: 'M120 132 L142 124 L144 130 L122 138' },
        { d: 'M14 158 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'hodor': [
    // The bucket knocked over on its side by the stall, the straw spilled:
    // he dies holding the door in "The Door" (episode 55). He lives in the
    // books, so the stage is the show's alone and chapter 344 only orders
    // it. The door is not drawn (owner, 2026-11-15).
    {
      episode: 55,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(BUCKET, 'rotate(-90 64 128) translate(-4 -18)'),
        ...HAYFORK,
        { d: 'M14 150 q4 -6 8 0 q4 -8 8 0 q4 -6 8 0', role: 'ambient' },
        shadow(64, 156, 44),
      ],
    },
  ],
  'osha': [
    // The spear fallen flat on the ground: she is killed at Winterfell in
    // "Book of the Stranger" (episode 54). She lives in the books, so the
    // stage is the show's alone and chapter 344 only orders it.
    {
      episode: 54,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(SPEAR_SHAFT, 'translate(0 56) rotate(-88 84 92)'),
        { d: 'M12 156 H148', role: 'ambient', dashed: true },
      ],
    },
  ],
  'lady-direwolf': [
    // Lying on her side, still, her head flat on the ground: Eddard Stark
    // kills her himself, at the Inn at the Crossroads in "The Kingsroad"
    // (episode 2) and at Castle Darry in Eddard III (chapter 17). The
    // weapon differs between the two, so none is drawn.
    {
      episode: 2,
      chapter: 17,
      value: [
        {
          d: 'M22 140 L34 134 Q40 130 46 130 L44 118 L52 126 L58 118 L60 130 Q70 122 92 120 Q116 118 128 128 Q136 136 132 146',
        },
        { d: 'M22 140 Q30 148 50 148 Q70 150 96 150 Q116 150 132 146' },
        { d: 'M60 146 L74 152 M68 146 L84 152', role: 'soft' },
        { d: 'M108 146 L124 154 M116 144 L132 152', role: 'soft' },
        { d: 'M132 140 Q146 146 150 154 Q140 156 132 150', role: 'soft' },
        { d: 'M62 128 Q58 136 64 142', role: 'accent' },
        { d: 'M48 122 L50 128 M56 122 L56 128', role: 'soft' },
        { d: 'M16 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'jory-cassel': [
    // The same helm rolled onto its side on the cobbles: the Lannister men
    // kill him in the street in "The Wolf and the Lion" (episode 5) and in
    // Eddard IX (chapter 36).
    {
      episode: 5,
      chapter: 36,
      value: [
        ...moved(HELM, 'rotate(-80 80 100) translate(-14 -10)'),
        { d: 'M24 150 H136', role: 'ambient', dashed: true },
        {
          d: 'M30 156 h12 M54 158 h14 M84 156 h12 M110 158 h14',
          role: 'ambient',
        },
      ],
    },
  ],
  'mordane': [
    // The same pincushion, the needle fallen flat, the spool on its side
    // and the thread loose: the episode and the chapter that show her
    // dead, "Fire and Blood" (episode 10) and Sansa VI (chapter 68).
    {
      episode: 10,
      chapter: 68,
      value: [
        ...PINCUSHION,
        ...moved(SPOOL, 'rotate(40 118 146) translate(8 -2)'),
        { d: 'M40 150 L104 144 M100 144 l6 -1' },
        { d: 'M106 143 Q124 150 132 140 Q140 128 124 130', role: 'accent' },
        { d: 'M28 152 H136', role: 'ambient', dashed: true },
      ],
    },
  ],
  'arya-stark': [
    // Needle thrust through a man-at-arms' belt, no longer hers: Polliver
    // takes it from her when the Lannister men capture her, in "What Is
    // Dead May Never Die" (episode 13) and in Arya V of A Clash of Kings
    // (chapter 93).
    {
      episode: 13,
      chapter: 93,
      value: [
        { d: 'M14 96 Q80 116 146 96 M14 110 Q80 130 146 110' },
        { d: 'M38 100 H56 V122 H38 Z M44 111 H56', role: 'soft' },
        {
          d: dots([
            [72, 112],
            [92, 112],
            [112, 110],
            [130, 104],
          ]),
          role: 'soft',
        },
        { d: 'M24 108 l6 -4 M126 112 l6 -4', role: 'ambient' },
        ...moved(NEEDLE_SWORD, 'rotate(34 84 100)'),
      ],
    },
    // Needle back on its point as in her first drawing: she kills Polliver
    // and takes it back at the inn at the crossroads, in "Two Swords"
    // (episode 31) and in Arya XIII of A Storm of Swords (chapter 218).
    { episode: 31, chapter: 218, value: NEEDLE },
    // The hilt standing out of a pile of stones, the blade hidden under
    // them: she cannot throw it away and hides it before she serves the
    // House of Black and White, in "High Sparrow" (episode 43) and in Arya I
    // of A Feast for Crows (chapter 232).
    {
      episode: 43,
      chapter: 232,
      value: [
        ...moved(NEEDLE_HILT, 'translate(0 52)'),
        { d: 'M82 110 L84 120 L86 110', role: 'accent' },
        {
          d: 'M42 150 L46 132 L60 122 L76 126 L82 150 M82 150 L88 130 L102 122 L118 128 L124 150',
        },
        { d: 'M62 124 L70 112 L96 110 L104 122', role: 'soft' },
        { d: 'M60 134 l6 -3 M104 136 l6 -3 M70 142 l5 -3', role: 'ambient' },
        { d: 'M30 152 H134', role: 'ambient', dashed: true },
      ],
    },
    // Needle on its point again: she takes it back from the stones in
    // "Blood of My Blood" (episode 56). In the books it is still hidden, so
    // the stage is the show's alone and chapter 344 only orders it.
    { episode: 56, chapter: 344, source: 'episode', value: NEEDLE },
  ],
}
