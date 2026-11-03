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
 * episode 2 and in Jon II (chapter 11), after her own threshold in both
 * media, so it is a stage; until then she shows the placeholder (owner,
 * #854).
 */
const NEEDLE: Stroke[] = [
  { d: circle(84, 34, 4) },
  { d: 'M81 38 H87 V54 H81 Z' },
  { d: 'M81 43 L87 46 M81 49 L87 52', role: 'soft' },
  { d: 'M70 56 Q84 52 98 56 M70 56 Q84 60 98 56', role: 'soft' },
  { d: 'M82 58 L84 148 L86 58', role: 'accent' },
  { d: 'M84 62 V140', role: 'soft' },
  shadow(84, 153, 16),
]

/**
 * Bran Stark: his pony side on, saddled, with no eye or mouth. He rides it
 * out to the execution in episode 1 and in Bran I (chapter 2). The accent
 * is the bridle; the far flank is hatched.
 */
const PONY: Stroke[] = [
  {
    d: 'M66 108 Q60 98 58 86 L46 100 Q40 104 36 100 Q34 94 40 88 L52 70 L52 58 L60 66 Q70 66 76 80 Q82 92 92 94 Q112 96 124 96 Q134 98 134 112 Q134 124 126 128',
  },
  { d: 'M66 108 Q68 120 74 126 Q96 130 126 128' },
  { d: 'M74 126 V152 M82 128 V152 M114 128 V152 M122 128 V152' },
  { d: 'M60 66 Q66 70 70 78 Q72 84 76 90', role: 'soft' },
  { d: 'M134 106 Q146 112 144 136', role: 'soft' },
  {
    d: 'M88 96 Q90 84 102 84 Q114 84 116 96 M86 98 V118 M114 98 V118',
    role: 'soft',
  },
  { d: 'M40 94 L50 80 L58 90 M50 80 L74 96', role: 'accent' },
  { d: 'M120 112 l6 -3 M122 120 l6 -3', role: 'ambient' },
  shadow(98, 154, 36),
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
  shadow(80, 158, 46),
]

/**
 * Benjen Stark: the black cloak of the Night's Watch on a peg, hatched
 * because it is black, its collar turned down. The accent is the silver
 * clasp and its chain. He comes to the feast in black in episode 1 and in
 * Jon I (chapter 6).
 */
const BLACK_CLOAK: Stroke[] = [
  { d: 'M60 30 H100 M80 30 V40', role: 'soft' },
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
  { d: 'M28 30 H132', role: 'ambient' },
  shadow(80, 156, 40),
]

/**
 * Theon Greyjoy: a kraken, the animal of his house, in the water with its
 * arms curled and no eye. Nothing of his own reads at tile size by his
 * threshold in both media, so the house's animal stands in (owner, #854);
 * the accent is one arm.
 */
const KRAKEN: Stroke[] = [
  { d: 'M64 76 Q60 40 80 28 Q100 40 96 76 Q88 82 80 82 Q72 82 64 76' },
  { d: 'M66 50 Q80 56 94 50', role: 'soft' },
  { d: 'M66 78 Q56 104 40 112 Q28 116 30 104', role: 'soft' },
  { d: 'M72 82 Q66 112 56 128 Q48 140 58 142' },
  { d: 'M80 82 Q82 116 76 136 Q72 150 84 148', role: 'accent' },
  { d: 'M88 82 Q100 112 104 130 Q108 144 98 144' },
  { d: 'M94 78 Q110 100 126 104 Q136 104 132 94', role: 'soft' },
  { d: 'M86 40 l6 -3 M90 52 l5 -3 M90 64 l5 -3', role: 'ambient' },
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

/**
 * Luwin: a maester's chain laid on a table in a loop, its links of mixed
 * metals, the far ones drawn lighter and the dark iron ones hatched. The
 * accent is one link.
 */
const MAESTER_CHAIN: Stroke[] = [
  {
    d: `${ellipse(36, 116, 5, 3)} ${ellipse(46, 128, 4, 3)} ${ellipse(60, 135, 5, 3)} ${ellipse(76, 138, 5, 3)} ${ellipse(92, 137, 5, 3)} ${ellipse(108, 132, 5, 3)} ${ellipse(122, 124, 5, 3)}`,
  },
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
const PRACTICE_SWORDS: Stroke[] = [
  { d: 'M80 150 V44 M86 150 V48', role: 'soft' },
  { d: 'M76 44 H90 V150' },
  { d: 'M80 70 l6 3 M80 96 l6 -2 M80 120 l6 3', role: 'ambient' },
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
const STABLE: Stroke[] = [
  { d: ellipse(64, 104, 26, 8) },
  { d: 'M38 104 L44 148 Q64 156 84 148 L90 104' },
  { d: 'M40 118 Q64 126 88 118', role: 'accent' },
  { d: 'M43 138 Q64 146 85 138', role: 'soft' },
  { d: 'M54 112 L56 150 M74 112 L72 150', role: 'soft' },
  { d: 'M82 112 l5 -3 M82 128 l5 -3', role: 'ambient' },
  { d: 'M110 150 L124 40' },
  {
    d: 'M114 44 Q124 36 134 44 M116 44 L112 24 M124 40 L124 20 M132 44 L136 24',
  },
  { d: 'M128 150 V30 M134 150 V34', role: 'soft' },
  { d: 'M92 150 q4 -8 8 0 q4 -10 8 0 q4 -6 8 0', role: 'ambient' },
  shadow(70, 156, 34),
]

/**
 * Osha: her spear planted upright, a long shaft with a binding below the
 * head, its far side hatched. The accent is the pitting on the rusted head
 * the book gives it in Bran V (chapter 38); the show has her yield her
 * spear to Robb in episode 6.
 */
const SPEAR: Stroke[] = [
  { d: 'M78 150 L84 52 M84 150 L90 52' },
  { d: 'M84 52 Q80 40 87 18 Q94 40 90 52 Z' },
  { d: 'M87 22 V50', role: 'soft' },
  { d: 'M84 46 l3 -2 M88 34 l2 -2 M89 44 l2 -1', role: 'accent' },
  { d: 'M84 56 L91 60 M84 62 L91 66 M83 68 L90 72', role: 'soft' },
  {
    d: 'M88 84 l4 -2 M87 100 l4 -2 M86 116 l4 -2 M85 132 l4 -2',
    role: 'ambient',
  },
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
 * Nymeria: standing alert, head up and tail down, the wolf Arya finds
 * waiting for her in episode 2 and in Arya I (chapter 8).
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
  'robb-stark': [
    ...moved(SHEATHED_SWORD, 'rotate(-28 80 90)'),
    shadow(80, 156, 40),
  ],
  'sansa-stark': HOOP,
  'bran-stark': PONY,
  'rickon-stark': MANTLE,
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
  'jory-cassel': [...HELM, shadow(80, 132, 44)],
} satisfies Drawings

/** Their later stages, each with its true pin in each medium. */
export const winterfellRedrawn: Redrawings = {
  'arya-stark': [
    // Needle, from the episode and the chapter Jon gives it to her: "The
    // Kingsroad" (episode 2) and Jon II (chapter 11).
    { episode: 2, chapter: 11, value: NEEDLE },
  ],
  'bran-stark': [
    // The broken tower he climbs, its corner seen in 3/4 with the stone
    // courses, the handholds and the high window in the accent: the book
    // shows his climbing from Bran II (chapter 9), the chapter he falls in.
    // The show has it only in episode 1, his own threshold, so the stage is
    // the book's alone and episode 2 only orders it (owner, #854).
    {
      episode: 2,
      chapter: 9,
      source: 'chapter',
      value: [
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
      ],
    },
  ],
  'lady-direwolf': [
    // Lying on her side, still, her head flat on the ground: Eddard Stark
    // kills her himself at the Crossroads in "The Kingsroad" (episode 2)
    // and in Eddard III (chapter 17). The weapon differs between the two,
    // so none is drawn.
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
        ...moved(HELM, 'rotate(-80 80 100) translate(-28 -10)'),
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
        ...moved(SPOOL, 'rotate(90 118 140) translate(-12 12)'),
        { d: 'M40 150 L104 144 M100 144 l6 -1' },
        { d: 'M106 143 Q124 150 132 140 Q140 128 124 130', role: 'accent' },
        { d: 'M28 152 H136', role: 'ambient', dashed: true },
      ],
    },
  ],
}
