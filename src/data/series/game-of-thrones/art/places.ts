import { type Drawings, moved, type Stroke } from '~/data/art/stroke'
import { ellipse, SEA, shadow } from '~/lib/svg/primitives'

/** A ground line in the rule colour, for a place that stands on open ground. */
const GROUND: Stroke = { d: 'M14 150 H146', role: 'ambient', dashed: true }

/**
 * The Haunted Forest: two sentinel pines under snow beyond the Wall, with a
 * ranger's torch stuck in a drift, for the rangers who ride into it in the
 * cold open of episode 1 and in the Prologue (chapter 1). The far side of
 * each tier is hatched; the accent is the torch's flame.
 */
const HAUNTED_FOREST: Stroke[] = [
  { d: 'M60 30 L44 62 H52 L36 96 H46 L28 136 H92 L74 96 H84 L68 62 H76 Z' },
  { d: 'M60 136 V150 M108 136 V150' },
  {
    d: 'M108 62 L96 86 H102 L88 112 H96 L84 136 H132 L120 112 H128 L114 86 H120 Z',
  },
  {
    d: 'M46 62 Q58 68 74 62 M38 96 Q58 104 82 96 M30 136 Q60 142 90 136 M98 86 Q108 90 118 86 M90 112 Q108 118 126 112',
    role: 'soft',
  },
  {
    d: 'M68 74 l6 -3 M72 108 l6 -3 M78 124 l6 -3 M116 100 l5 -3 M120 124 l5 -3',
    role: 'ambient',
  },
  { d: 'M142 152 L134 112 M137 126 l-3 1', role: 'soft' },
  { d: 'M134 112 q-7 -8 -1 -18 q2 7 5 3 q5 9 -4 15', role: 'accent' },
  {
    d: 'M14 150 Q40 144 66 150 T118 150 T146 148',
    role: 'ambient',
    dashed: true,
  },
]

/**
 * Winterfell: the grey keep between its towers, the curtain wall and gate,
 * and the godswood's heart tree over the wall, as Bran's archery practice
 * shows it in episode 1 and Bran I (chapter 2) names it. The towers' far
 * faces are hatched; the accent is the heart tree's red leaves.
 */
const WINTERFELL: Stroke[] = [
  { d: 'M20 150 V82 H40 V150 M120 150 V82 H140 V150' },
  {
    d: 'M20 82 V76 H25 V82 M30 82 V76 H35 V82 M120 82 V76 H125 V82 M130 82 V76 H135 V82',
    role: 'soft',
  },
  { d: 'M40 150 V104 H120 V150' },
  {
    d: 'M60 104 V58 H96 V104 M60 58 V52 H66 V58 M72 58 V52 H78 V58 M84 58 V52 H90 V58',
  },
  { d: 'M70 150 V130 Q80 120 90 130 V150' },
  { d: 'M70 70 V78 M86 84 V92', role: 'soft' },
  { d: 'M108 104 Q106 84 112 70 M110 86 Q118 80 122 74', role: 'soft' },
  {
    d: 'M100 70 q2 -10 12 -8 q6 -8 14 0 q8 2 4 10 q4 8 -6 8 q-6 6 -14 0 q-10 0 -10 -10 Z',
    role: 'accent',
  },
  {
    d: 'M134 92 l5 -3 M134 106 l5 -3 M134 120 l5 -3 M134 134 l5 -3 M90 66 l5 -3 M90 80 l5 -3',
    role: 'ambient',
  },
  shadow(80, 156, 64),
]

/**
 * Pentos: Illyrio's domed manse on its colonnade above the sea, where
 * Viserys presents his sister in episode 1 and in Daenerys I (chapter 4).
 * The dome's far side is hatched; the accent is its finial.
 */
const PENTOS: Stroke[] = [
  { d: 'M30 140 V100 H130 V140' },
  { d: 'M56 100 Q80 60 104 100' },
  { d: 'M78 70 L80 58 L82 70', role: 'accent' },
  {
    d: 'M40 140 V118 Q46 110 52 118 V140 M60 140 V118 Q66 110 72 118 V140 M88 140 V118 Q94 110 100 118 V140 M108 140 V118 Q114 110 120 118 V140',
    role: 'soft',
  },
  { d: 'M24 100 H136 M20 140 H140', role: 'soft' },
  {
    d: 'M92 80 l6 -3 M98 90 l5 -3 M122 106 l5 -3 M122 120 l5 -3',
    role: 'ambient',
  },
  ...SEA,
]

/**
 * King's Landing: the city wall and its gatehouse on the bay, the roofs
 * climbing the hill behind, as Catelyn lands there in Catelyn IV (chapter
 * 19) and the show opens on it in episode 1. The accent is the gate.
 */
const KINGS_LANDING: Stroke[] = [
  { d: 'M14 112 Q60 70 146 96', role: 'soft' },
  {
    d: 'M24 112 L32 102 L40 112 M44 106 L54 94 L64 106 M98 100 L108 88 L118 100 M120 104 L130 94 L140 104',
    role: 'soft',
  },
  { d: 'M14 140 V112 H66 M94 112 H146 V140' },
  {
    d: 'M14 112 V106 H20 V112 M28 112 V106 H34 V112 M42 112 V106 H48 V112 M112 112 V106 H118 V112 M126 112 V106 H132 V112 M140 112 V106 H146 V112',
    role: 'soft',
  },
  {
    d: 'M66 140 V92 H94 V140 M66 92 V86 H72 V92 M77 92 V86 H83 V92 M88 92 V86 H94 V92',
  },
  { d: 'M73 140 V122 Q80 112 87 122 V140', role: 'accent' },
  {
    d: 'M88 100 l5 -3 M88 112 l5 -3 M134 120 l6 -3 M134 132 l6 -3',
    role: 'ambient',
  },
  { d: 'M10 140 H150' },
  ...SEA,
]

/**
 * The Wall: the sheer face of ice running off to the horizon, the gate
 * tunnel the rangers ride out through at its foot, in the cold open of
 * episode 1; Tyrion first stands on it in Tyrion III (chapter 22). The
 * tunnel's dark is hatched; the accent is the gate.
 */
const THE_WALL: Stroke[] = [
  { d: 'M14 28 L150 106 M14 150 H150 M14 28 V150' },
  { d: 'M14 64 L150 118 M14 104 L150 132', role: 'soft' },
  { d: 'M60 52 L64 80 L58 104 M100 76 L104 96 M126 92 L128 110', role: 'soft' },
  { d: 'M36 150 V128 Q50 112 64 128 V150', role: 'accent' },
  { d: 'M44 150 V128 M50 150 V122 M56 150 V128', role: 'soft' },
  { d: 'M40 146 l6 -3 M58 146 l5 -3 M40 136 l6 -3', role: 'ambient' },
  { d: 'M10 156 Q60 150 150 156', role: 'ambient', dashed: true },
]

/**
 * The winter town: three timber houses under Winterfell's wall, smoke from
 * one chimney, where Tyrion finds the brothel in episode 1 and Bran rides
 * through in Bran V (chapter 38). The accent is the middle house's door.
 */
const WINTER_TOWN: Stroke[] = [
  {
    d: 'M10 78 H150 M10 78 V72 H16 V78 M28 78 V72 H34 V78 M46 78 V72 H52 V78 M108 78 V72 H114 V78 M126 78 V72 H132 V78 M144 78 V72 H150 V78',
    role: 'soft',
  },
  { d: 'M70 78 V58 H90 V78', role: 'soft' },
  { d: 'M20 150 V118 L36 104 L52 118 V150' },
  { d: 'M58 150 V112 L78 96 L98 112 V150' },
  { d: 'M104 150 V120 L120 106 L136 120 V150' },
  { d: 'M70 150 V132 H86 V150', role: 'accent' },
  {
    d: 'M24 122 L48 146 M48 122 L24 146 M108 124 L132 146 M132 124 L108 146',
    role: 'soft',
  },
  { d: 'M88 102 V92 M88 92 q-4 -6 2 -12 q-4 -6 2 -12', role: 'soft' },
  { d: 'M92 118 l5 -3 M92 130 l5 -3 M130 128 l5 -3', role: 'ambient' },
  shadow(78, 156, 62),
]

/**
 * The Inn at the Crossroads: a two-storey inn in 3/4 where two roads cross,
 * a blank sign on its bracket and a post at the crossing, where the royal
 * party stops in episode 2 and in Sansa I (chapter 16). The accent is the
 * sign.
 */
const INN: Stroke[] = [
  {
    d: 'M24 136 V84 L50 64 L76 84 V136 M76 84 L108 74 V128 L76 136 M50 64 L84 56 L108 74',
  },
  {
    d: 'M42 136 V116 H58 V136 M32 94 H44 V104 H32 Z M56 94 H68 V104 H56 Z M86 92 L98 89 V99 L86 102 Z',
    role: 'soft',
  },
  { d: 'M24 92 H12 M14 92 V96', role: 'soft' },
  { d: 'M8 96 H20 V106 H8 Z', role: 'accent' },
  { d: 'M10 160 L96 134 M150 160 L64 134', role: 'ambient', dashed: true },
  { d: 'M124 148 V110 M118 116 H136 M118 124 H132', role: 'soft' },
  { d: 'M96 92 l6 -2 M96 104 l6 -2 M96 116 l6 -2', role: 'ambient' },
  shadow(66, 140, 50),
]

/**
 * Darry: a small castle, its gatehouse and the tall Plowman's Keep, where
 * Ned sits in judgment in Eddard III (chapter 17). The show never goes
 * there, so the drawing is the book's. The keep's far face is hatched; the
 * accent is the gate.
 */
const DARRY: Stroke[] = [
  {
    d: 'M88 150 V48 H120 V150 M88 48 V42 H94 V48 M101 48 V42 H107 V48 M114 48 V42 H120 V48',
  },
  { d: 'M24 150 V104 H88' },
  {
    d: 'M30 150 V92 H62 V150 M30 92 V86 H36 V92 M43 92 V86 H49 V92 M56 92 V86 H62 V92',
  },
  { d: 'M38 150 V132 Q46 122 54 132 V150', role: 'accent' },
  { d: 'M100 66 V76 M108 92 V102', role: 'soft' },
  {
    d: 'M114 60 l5 -3 M114 76 l5 -3 M114 92 l5 -3 M114 108 l5 -3 M114 124 l5 -3',
    role: 'ambient',
  },
  GROUND,
  shadow(76, 156, 58),
]

/**
 * Castle Black: the stone tower and a timber hall at the foot of the Wall,
 * the wooden stair zigzagging up the ice behind them, as the party reaches
 * it in episode 2 and Jon trains there in Jon III (chapter 20). The accent
 * is the stair.
 */
const CASTLE_BLACK: Stroke[] = [
  { d: 'M10 40 Q46 34 80 38 T150 36', role: 'soft' },
  {
    d: 'M16 44 L20 70 M40 40 L44 64 M140 40 L136 62 M118 38 L116 52',
    role: 'soft',
  },
  { d: 'M96 150 L134 128 L96 108 L134 88 L96 68 L134 48', role: 'accent' },
  {
    d: 'M24 150 V86 H62 V150 M24 86 V80 H30 V86 M37 86 V80 H43 V86 M50 86 V80 H56 V86',
  },
  { d: 'M62 150 V118 L78 104 L94 118 V150' },
  { d: 'M74 150 V134 H84 V150 M38 100 V110 M48 100 V110', role: 'soft' },
  { d: 'M54 96 l5 -3 M54 112 l5 -3 M54 128 l5 -3', role: 'ambient' },
  shadow(70, 156, 56),
]

/**
 * The Dothraki sea: tall grass in waves to the horizon, bent by the wind,
 * as the khalasar rides into it in episode 2 and in Daenerys III (chapter
 * 24). The accent is the grass the wind bends.
 */
const DOTHRAKI_SEA: Stroke[] = [
  { d: 'M10 96 H150', role: 'ambient', dashed: true },
  {
    d: 'M10 112 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'soft',
  },
  { d: 'M10 128 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0', role: 'soft' },
  {
    d: 'M24 150 Q26 126 40 106 M32 150 Q34 124 50 108 M40 150 Q40 130 54 116',
    role: 'accent',
  },
  {
    d: 'M104 150 Q106 124 122 104 M112 150 Q114 126 130 110 M120 150 Q122 132 136 118',
    role: 'accent',
  },
  { d: 'M64 150 Q66 134 76 122 M72 150 Q74 136 84 126', role: 'soft' },
  { d: 'M40 60 q10 -4 20 0 t20 0 M76 76 q10 -4 20 0 t20 0', role: 'soft' },
]

/**
 * The Red Keep: the castle on its hill, a curtain wall between drum towers
 * and the tall keep inside, where Ned sits his first small council in
 * episode 3 and in Eddard IV (chapter 21). Its stone is red in both media,
 * so it keeps `red`; the accent is the curtain wall.
 */
const RED_KEEP: Stroke[] = [
  { d: 'M10 150 Q40 118 80 116 Q120 118 150 150' },
  { d: 'M34 120 V80 H126 V120', role: 'accent' },
  {
    d: `M30 80 V66 H46 V80 M114 80 V66 H130 V80 ${ellipse(38, 66, 8, 2.5)} ${ellipse(122, 66, 8, 2.5)}`,
  },
  {
    d: 'M64 80 V40 H96 V80 M64 40 V34 H70 V40 M77 40 V34 H83 V40 M90 40 V34 H96 V40',
  },
  { d: 'M72 50 V58 M88 62 V70 M52 96 V104 M108 96 V104', role: 'soft' },
  {
    d: 'M90 48 l5 -3 M90 62 l5 -3 M118 90 l6 -3 M118 104 l6 -3',
    role: 'ambient',
  },
  { d: 'M10 156 Q80 150 150 156', role: 'ambient', dashed: true },
]

/**
 * A bronze stallion reared up on its plinth, side on with no eye, its head
 * thrown up and its forelegs reaching out. The accent is the mane. Vaes
 * Dothrak's horse gate is two of them.
 */
const HORSE: Stroke[] = [
  { d: 'M28 150 L32 124 M42 150 L44 126' },
  {
    d: 'M30 124 Q24 100 40 86 Q48 72 54 62 Q56 48 62 38 L60 31 L66 34 L76 24 L80 30 L70 42 Q66 52 64 62',
  },
  { d: 'M44 126 Q50 108 58 94 Q62 84 64 62' },
  { d: 'M63 76 L72 66 L79 62 M61 86 L72 80 L79 74', role: 'soft' },
  { d: 'M54 62 Q48 54 52 46 M58 50 Q54 42 58 36', role: 'accent' },
  { d: 'M40 106 l5 -3 M44 96 l5 -3', role: 'ambient' },
  { d: 'M20 150 V156 H60 V150 Z', role: 'soft' },
]

/**
 * Vaes Dothrak: the horse gate, two bronze stallions rearing to meet over
 * the road, which the khalasar rides under in episode 4 and in Daenerys IV
 * (chapter 37).
 */
const VAES_DOTHRAK: Stroke[] = [
  ...HORSE,
  ...moved(HORSE, 'translate(160 0) scale(-1 1)'),
  { d: 'M66 150 L52 176 M94 150 L108 176', role: 'ambient', dashed: true },
]

/**
 * The Eyrie: slender white towers on top of a mountain peak, clouds below
 * them, where Lysa holds court in episode 5 and Catelyn climbs to in
 * Catelyn VI (chapter 35). The mountain's far face is hatched; the accent
 * is the tallest tower's spire.
 */
const THE_EYRIE: Stroke[] = [
  { d: 'M10 150 L44 96 L58 104 L76 70 L96 100 L110 88 L150 150' },
  {
    d: 'M70 72 V46 H76 V72 M78 70 V34 H84 V70 M86 72 V42 H92 V72 M70 46 L73 38 L76 46 M86 42 L89 34 L92 42',
  },
  { d: 'M78 34 L81 24 L84 34', role: 'accent' },
  { d: 'M66 74 H96', role: 'soft' },
  {
    d: 'M84 110 l6 -3 M92 122 l6 -3 M100 134 l6 -3 M112 112 l5 -3 M120 128 l5 -3',
    role: 'ambient',
  },
  {
    d: 'M18 108 q8 -6 16 0 q8 -6 16 0 M106 74 q8 -6 16 0 q8 -6 16 0',
    role: 'soft',
  },
]

/**
 * The wolfswood: two dark pines over a forest path and a fallen trunk, an
 * arrow stuck in one of them, for the ambush on Bran that Theon's arrow
 * ends, in episode 6 and in Bran V (chapter 38). The pines are dark, so
 * they are hatched; the accent is the arrow.
 */
const WOLFSWOOD: Stroke[] = [
  { d: 'M44 30 L30 70 H38 L24 112 H64 L50 70 H58 Z M44 112 V150' },
  { d: 'M116 24 L100 66 H108 L92 110 H140 L124 66 H132 Z M116 110 V150' },
  {
    d: 'M48 62 l5 -3 M50 92 l6 -3 M52 104 l6 -3 M124 58 l5 -3 M126 90 l6 -3 M128 102 l6 -3',
    role: 'ambient',
  },
  { d: 'M54 150 L86 138 L92 142 L60 154 Z' },
  { d: 'M86 138 Q94 136 92 142', role: 'soft' },
  {
    d: 'M116 128 H98 M100 124 L96 128 L100 132 M98 128 l-4 -4 M98 128 l-4 4',
    role: 'accent',
  },
  {
    d: 'M70 150 Q80 120 76 100 M84 150 Q92 124 88 100',
    role: 'ambient',
    dashed: true,
  },
  shadow(80, 158, 60),
]

/**
 * The Kingswood: two broad oaks over a hunting trail, a boar spear leaning
 * on one, for the forest Robert hunts in, in episode 6. The show alone goes
 * there. The accent is the great oak's crown.
 */
const KINGSWOOD: Stroke[] = [
  {
    d: 'M50 150 V108 Q46 100 40 96 M56 150 V106 Q60 98 68 94 M50 108 Q53 104 56 106',
  },
  {
    d: 'M20 84 Q16 64 34 60 Q36 42 56 44 Q72 34 84 50 Q100 52 96 70 Q104 86 86 92 Q72 102 56 96 Q40 104 28 96 Q16 96 20 84 Z',
    role: 'accent',
  },
  { d: 'M116 150 V112 M122 150 V112' },
  {
    d: 'M100 102 Q96 86 110 82 Q114 70 128 74 Q142 76 140 90 Q146 102 132 106 Q118 112 106 108 Q98 108 100 102 Z',
  },
  {
    d: 'M108 150 L132 70 M128 82 L136 84 M130 70 L134 60 L136 72',
    role: 'soft',
  },
  { d: 'M36 72 q6 -4 12 0 M60 60 q6 -4 12 0 M70 80 q6 -4 12 0', role: 'soft' },
  { d: 'M60 124 l5 -3 M60 136 l5 -3 M124 124 l4 -3', role: 'ambient' },
  {
    d: 'M70 150 Q86 130 84 112 M92 150 Q100 132 96 112',
    role: 'ambient',
    dashed: true,
  },
  shadow(80, 156, 60),
]

/**
 * The Lannister camp: a great pavilion with a pennant on its pole between
 * two smaller tents, where Tywin talks with Jaime in episode 7 and Bronn
 * brings Shae in Tyrion VIII (chapter 63). The pavilion's far side is
 * hatched; the accent is the pennant.
 */
const LANNISTER_CAMP: Stroke[] = [
  { d: 'M44 150 L58 100 L80 86 L102 100 L116 150' },
  { d: 'M80 86 V40' },
  { d: 'M80 42 H108 L100 50 L108 58 H80', role: 'accent' },
  { d: 'M72 150 V120 Q80 110 88 120 V150', role: 'soft' },
  { d: 'M58 100 Q80 106 102 100', role: 'soft' },
  {
    d: 'M10 150 L24 116 L38 150 M24 116 V106 M122 150 L136 116 L150 150 M136 116 V106',
  },
  { d: 'M98 112 l6 -3 M102 126 l6 -3 M106 140 l6 -3', role: 'ambient' },
  shadow(80, 156, 66),
]

/**
 * Lhazar: two mud houses and the temple between them, its roof on fire, as
 * the khalasar sacks the town of the Lamb Men in episode 8 and in Daenerys
 * VII (chapter 62), the scene the record opens at. The accent is the
 * flames.
 */
const LHAZAR: Stroke[] = [
  { d: 'M14 150 V134 Q26 116 38 134 V150 M122 150 V134 Q134 116 146 134 V150' },
  { d: 'M50 150 V108 H110 V150' },
  { d: 'M54 108 Q80 80 106 108' },
  { d: 'M74 150 V130 Q80 122 86 130 V150', role: 'soft' },
  {
    d: 'M62 96 q-6 -10 0 -20 q4 8 6 2 q4 10 0 18 M84 86 q-8 -14 2 -28 q4 10 8 4 q4 14 -4 26 M98 98 q-4 -10 2 -18 q4 6 6 2 q2 10 -2 16',
    role: 'accent',
  },
  { d: 'M80 50 q-6 -8 0 -16 q6 -8 0 -16 M96 66 q-4 -6 2 -12', role: 'soft' },
  {
    d: 'M100 116 l6 -3 M100 130 l6 -3 M32 138 l4 -2 M140 138 l4 -2',
    role: 'ambient',
  },
  shadow(80, 156, 66),
]

/**
 * The Twins: two towers facing each other across the river, the bridge
 * between them on its arches, where Catelyn bargains with Walder Frey in
 * episode 9 and in Catelyn IX (chapter 60). The towers' far faces are
 * hatched; the accent is the bridge's arches.
 */
const THE_TWINS: Stroke[] = [
  { d: 'M16 150 V58 H44 V150 M116 150 V58 H144 V150' },
  {
    d: 'M16 58 V52 H22 V58 M27 58 V52 H33 V58 M38 58 V52 H44 V58 M116 58 V52 H122 V58 M127 58 V52 H133 V58 M138 58 V52 H144 V58',
    role: 'soft',
  },
  { d: 'M44 104 H116 M44 112 H116' },
  {
    d: 'M44 112 V140 Q52 124 60 140 Q68 124 76 140 V112 M84 112 V140 Q92 124 100 140 Q108 124 116 140',
    role: 'accent',
  },
  { d: 'M70 104 V86 H90 V104', role: 'soft' },
  {
    d: 'M36 70 l5 -3 M36 86 l5 -3 M36 102 l5 -3 M136 70 l5 -3 M136 86 l5 -3 M136 102 l5 -3',
    role: 'ambient',
  },
  ...SEA,
]

/**
 * The Great Sept of Baelor: the great dome on its drum between two towers,
 * above broad steps, where Ned confesses in episode 9 and in Arya V
 * (chapter 66). The marble is white, so only the dome's far side is
 * hatched; the accent is the door.
 */
const GREAT_SEPT: Stroke[] = [
  { d: 'M46 92 Q80 34 114 92' },
  { d: 'M77 48 L80 36 L83 48', role: 'soft' },
  { d: 'M42 92 H118 V116 H42 Z' },
  { d: 'M26 128 V74 L31 66 L36 74 V128 M124 128 V74 L129 66 L134 74 V128' },
  {
    d: 'M20 150 H140 M26 142 H134 M32 134 H128 M38 126 H122 M38 116 V126 M122 116 V126',
  },
  { d: 'M72 116 V102 Q80 94 88 102 V116', role: 'accent' },
  { d: 'M52 106 V100 M108 106 V100 M60 76 Q80 60 100 76', role: 'soft' },
  { d: 'M100 64 l5 -3 M106 76 l5 -3 M110 88 l5 -3', role: 'ambient' },
  shadow(80, 156, 62),
]

/**
 * Riverrun: the castle where two rivers meet, its towers on the water and
 * the water gate at its foot, where Catelyn returns by boat in Catelyn XI
 * (chapter 72) and the show buries Hoster Tully in episode 23. The accent
 * is the water gate.
 */
const RIVERRUN: Stroke[] = [
  { d: 'M36 140 V82 H124 V140' },
  { d: 'M30 140 V70 H48 V140 M112 140 V70 H130 V140' },
  {
    d: 'M30 70 V64 H36 V70 M42 70 V64 H48 V70 M112 70 V64 H118 V70 M124 70 V64 H130 V70 M60 82 V76 H66 V82 M76 82 V76 H82 V82 M92 82 V76 H98 V82',
    role: 'soft',
  },
  { d: 'M66 140 V122 Q80 108 94 122 V140', role: 'accent' },
  { d: 'M70 140 V124 M80 140 V116 M90 140 V124', role: 'soft' },
  {
    d: 'M122 84 l6 -3 M122 98 l6 -3 M122 112 l6 -3 M122 126 l6 -3',
    role: 'ambient',
  },
  { d: 'M10 140 H150' },
  ...SEA,
]

/**
 * Mole's Town: a few low huts in the snow on the road south of Castle
 * Black, smoke from one, as Jon rides through in Jon IX (chapter 71) and
 * Sam brings Gilly there in episode 33. The accent is the smoke.
 */
const MOLES_TOWN: Stroke[] = [
  { d: 'M24 150 V128 L40 114 L56 128 V150' },
  { d: 'M96 150 V124 L114 108 L132 124 V150' },
  { d: 'M60 150 V136 L72 126 L84 136 V150', role: 'soft' },
  { d: 'M24 128 Q40 120 56 128 M96 124 Q114 114 132 124', role: 'soft' },
  { d: 'M36 150 V138 H44 V150 M108 150 V136 H120 V150', role: 'soft' },
  { d: 'M124 110 V100 M124 100 q-4 -6 2 -12 q-4 -6 2 -12', role: 'accent' },
  { d: 'M50 136 l5 -3 M126 134 l5 -3', role: 'ambient' },
  { d: 'M70 150 L56 176 M90 150 L104 176', role: 'ambient', dashed: true },
  {
    d: 'M10 150 Q40 146 70 150 M90 150 Q120 146 150 150',
    role: 'ambient',
    dashed: true,
  },
]

/**
 * The Bloody Gate: a gatehouse across a narrow pass between two cliffs,
 * where Catelyn's party reaches the Vale in Catelyn VI (chapter 35) and
 * Littlefinger brings Sansa in episode 35. The cliffs are hatched; the
 * accent is the gate.
 */
const BLOODY_GATE: Stroke[] = [
  { d: 'M10 30 L36 56 L40 96 L48 150 M150 30 L124 56 L120 96 L112 150' },
  { d: 'M48 150 V96 H112 V150' },
  {
    d: 'M48 96 V88 H56 V96 M64 96 V88 H72 V96 M88 96 V88 H96 V96 M104 96 V88 H112 V96',
    role: 'soft',
  },
  { d: 'M68 150 V122 Q80 108 92 122 V150', role: 'accent' },
  { d: 'M72 150 V124 M80 150 V116 M88 150 V124 M68 132 H92', role: 'soft' },
  {
    d: 'M20 50 l6 -3 M26 70 l6 -3 M32 92 l6 -3 M36 116 l6 -3 M130 70 l6 -3 M126 92 l6 -3 M120 116 l6 -3',
    role: 'ambient',
  },
  shadow(80, 156, 40),
]

/**
 * Moat Cailin: three broken towers standing in the marsh, one leaning, as
 * Catelyn joins Robb's host there in Catelyn VIII (chapter 56) and the
 * show sends Reek to it in episode 38. It is a ruin at its threshold, so
 * the ruin is no fate. The accent is the leaning tower.
 */
const MOAT_CAILIN: Stroke[] = [
  { d: 'M22 142 V70 L28 76 L32 66 L38 74 L42 64 V142' },
  { d: 'M66 142 V54 L72 62 L78 50 L84 60 L90 52 V142' },
  { d: 'M112 142 L122 78 L128 86 L134 76 L140 84 L130 142', role: 'accent' },
  { d: 'M74 80 V90 M28 92 V100 M124 104 L122 112', role: 'soft' },
  {
    d: 'M84 70 l5 -3 M84 90 l5 -3 M84 110 l5 -3 M36 90 l4 -3 M36 110 l4 -3',
    role: 'ambient',
  },
  {
    d: 'M14 142 H146 M20 150 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
    role: 'ambient',
  },
  {
    d: 'M50 142 Q48 126 44 118 M54 142 Q56 124 60 116 M100 142 Q98 128 94 120 M104 142 Q106 126 110 120',
    role: 'soft',
  },
]

/**
 * Bear Island: a wooded island rising from the sea, pines along its ridge,
 * named in episode 1 (Jorah of Bear Island) and in Eddard II (chapter 13).
 * No one goes there in the first season or book. The far slope is hatched;
 * the accent is the pines.
 */
const BEAR_ISLAND: Stroke[] = [
  { d: 'M12 140 Q26 116 52 110 Q72 94 100 100 Q128 106 148 140' },
  {
    d: 'M40 116 L48 96 L56 116 M62 104 L72 78 L82 104 M88 102 L96 84 L104 102',
    role: 'accent',
  },
  { d: 'M48 96 V90 M72 78 V70 M96 84 V78', role: 'soft' },
  { d: 'M112 118 l6 -3 M122 126 l6 -3 M130 134 l6 -3', role: 'ambient' },
  { d: 'M30 132 Q60 124 90 128', role: 'soft' },
  ...SEA,
]

/**
 * Eastwatch: a castle of the Night's Watch on a cliff over the sea, named in
 * episode 4 and in Jon III (chapter 20) and never visited in the first
 * season or book. The cliff's far side is hatched; the accent is the lit
 * window.
 */
const EASTWATCH: Stroke[] = [
  { d: 'M12 140 L28 100 H100 L112 140' },
  { d: 'M38 100 V62 H62 V100 M38 62 V56 H44 V62 M50 62 V56 H56 V62' },
  { d: 'M62 100 V78 H90 V100 M62 78 V72 H68 V78 M76 78 V72 H82 V78' },
  { d: 'M48 74 V82', role: 'accent' },
  { d: 'M100 108 l6 -3 M104 120 l6 -3 M108 132 l5 -3', role: 'ambient' },
  { d: 'M118 92 q8 -4 16 0 M122 100 q6 -3 12 0', role: 'soft' },
  ...SEA,
]

/**
 * Pyke: towers on rocks standing in the sea, bridges strung between them,
 * named in episode 4 (the siege) and in Bran IV (chapter 25) and never
 * visited in the first season or book. The rocks are hatched; the accent is
 * the bridges.
 */
const PYKE: Stroke[] = [
  {
    d: 'M24 140 L30 96 H48 L52 140 M70 140 L74 80 H92 L96 140 M112 140 L116 100 H132 L136 140',
  },
  { d: 'M32 96 V70 H46 V96 M76 80 V44 H90 V80 M118 100 V78 H130 V100' },
  {
    d: 'M76 44 L83 32 L90 44 M32 70 L39 60 L46 70 M118 78 L124 68 L130 78',
    role: 'soft',
  },
  { d: 'M46 82 Q61 90 76 82 M90 72 Q104 82 118 86', role: 'accent' },
  {
    d: 'M86 92 l5 -3 M86 112 l5 -3 M44 112 l5 -3 M128 116 l5 -3',
    role: 'ambient',
  },
  ...SEA,
]

/**
 * White Harbor: a walled city on the waterfront, a domed hall behind the
 * walls and a ship at the quay, named in episode 6 and in Catelyn III
 * (chapter 15) and never visited in the first season or book. The accent is
 * the ship.
 */
const WHITE_HARBOR: Stroke[] = [
  { d: 'M10 128 H150' },
  {
    d: 'M18 128 V98 H142 V128 M18 98 V92 H24 V98 M34 98 V92 H40 V98 M50 98 V92 H56 V98 M104 98 V92 H110 V98 M120 98 V92 H126 V98 M136 98 V92 H142 V98',
  },
  { d: 'M64 98 V70 H96 V98 M68 70 Q80 54 92 70', role: 'soft' },
  {
    d: 'M30 128 V112 Q34 106 38 112 V128 M122 128 V112 Q126 106 130 112 V128',
    role: 'soft',
  },
  {
    d: 'M44 146 Q60 152 84 146 L80 140 H48 Z M64 140 V112 M64 114 L80 132 H64',
    role: 'accent',
  },
  { d: 'M132 104 l6 -3 M132 116 l6 -3', role: 'ambient' },
  ...SEA,
]

/**
 * The Neck: reeds and pools in the marsh, a plank causeway running into it,
 * named in Eddard I (chapter 5) and in episode 8, and never a scene's
 * setting in the first season or book. The accent is the reed heads.
 */
const THE_NECK: Stroke[] = [
  { d: 'M10 150 H150', role: 'ambient', dashed: true },
  {
    d: 'M14 134 q8 -4 16 0 t16 0 M96 138 q8 -4 16 0 t16 0 t16 0 M40 120 q8 -4 16 0 t16 0',
    role: 'ambient',
  },
  {
    d: 'M24 150 Q26 124 20 104 M30 150 Q32 120 38 100 M36 150 Q38 128 34 112 M118 150 Q120 126 114 108 M124 150 Q126 120 132 102 M130 150 Q132 130 128 114',
    role: 'soft',
  },
  {
    d: 'M17 100 Q20 92 23 100 Q20 106 17 100 M35 96 Q38 88 41 96 Q38 102 35 96 M111 104 Q114 96 117 104 Q114 110 111 104 M129 98 Q132 90 135 98 Q132 104 129 98',
    role: 'accent',
  },
  {
    d: 'M60 150 H100 M64 140 H96 M67 131 H93 M70 123 H90 M72 116 H88 M74 110 H86',
    role: 'soft',
  },
  shadow(80, 156, 54),
]

/**
 * The Street of the Sisters: a long straight street running away between
 * rows of houses, named in episode 4 (Janos Slynt's report) and in Catelyn IV
 * (chapter 19); Arya V is set in its crowd. The accent is the street's
 * middle line.
 */
const STREET_OF_THE_SISTERS: Stroke[] = [
  { d: 'M10 150 L70 70 M150 150 L90 70' },
  {
    d: 'M10 120 L40 110 V92 L58 84 V88 M150 120 L120 110 V92 L102 84 V88 M40 110 V150 M120 110 V150',
    role: 'soft',
  },
  {
    d: 'M80 150 V138 M80 128 V118 M80 108 V100 M80 92 V86 M80 80 V76',
    role: 'accent',
  },
  {
    d: 'M44 118 l6 -3 M44 132 l6 -3 M126 118 l6 -3 M126 132 l6 -3',
    role: 'ambient',
  },
  { d: 'M70 70 H90', role: 'soft' },
]

/**
 * The Street of Steel: a street climbing a hill past forges, an anvil at the
 * top, named in episode 4 and in Eddard VI (chapter 28), when Ned climbs it
 * to Tobho Mott's shop. The accent is the anvil.
 */
const STREET_OF_STEEL: Stroke[] = [
  { d: 'M10 150 Q60 130 90 90 Q110 64 150 50' },
  {
    d: 'M20 138 V112 H44 V130 M58 124 V96 H80 V108 M96 84 V60 H118 V72',
    role: 'soft',
  },
  {
    d: 'M124 70 H146 M128 70 V78 H142 V70 M132 78 V86 H138 V78 M126 86 H144',
    role: 'accent',
  },
  { d: 'M26 120 l6 -3 M64 104 l6 -3 M102 68 l6 -3', role: 'ambient' },
  { d: 'M30 108 Q26 100 30 94 M68 92 Q64 84 68 78', role: 'soft' },
]

/**
 * The Mountains of the Moon: high peaks with a road winding up through them,
 * named in Catelyn V (chapter 29), a book-only record. The far slopes are
 * hatched; the accent is the road.
 */
const MOUNTAINS_OF_THE_MOON: Stroke[] = [
  { d: 'M10 140 L40 80 L56 100 L80 50 L104 96 L120 76 L150 140' },
  {
    d: 'M30 140 Q48 124 60 128 Q76 132 84 116 Q92 100 108 104',
    role: 'accent',
    dashed: true,
  },
  { d: 'M74 62 L80 50 L86 62 M36 88 L40 80 L44 88', role: 'soft' },
  {
    d: 'M92 74 l6 -4 M98 88 l6 -4 M124 98 l6 -4 M130 112 l6 -4 M60 90 l6 -4',
    role: 'ambient',
  },
  shadow(80, 150, 70),
]

/**
 * The Green Fork: a river through green hills, a tower on its bank, named in
 * Catelyn V (chapter 29), a book-only record. The accent is the water.
 */
const GREEN_FORK: Stroke[] = [
  {
    d: 'M70 20 Q60 60 76 90 Q92 120 80 160 M90 20 Q80 60 94 90 Q110 120 100 160',
  },
  { d: 'M78 52 q4 -3 8 0 M88 104 q4 -3 8 0 M86 136 q4 -3 8 0', role: 'accent' },
  {
    d: 'M10 60 Q30 44 56 56 M104 50 Q128 36 150 50 M10 140 Q34 124 62 136 M106 140 Q130 126 150 136',
    role: 'soft',
  },
  {
    d: 'M26 106 V86 H40 V106 M26 86 V82 H30 V86 M36 86 V82 H40 V86',
    role: 'soft',
  },
  { d: 'M104 80 l5 -3 M110 112 l5 -3', role: 'ambient' },
]

/**
 * The Gates of the Moon: a castle at the foot of a mountain, the path up
 * behind it, named in Catelyn VI (chapter 35), a book-only record. The accent
 * is the gate.
 */
const GATES_OF_THE_MOON: Stroke[] = [
  { d: 'M10 108 L80 24 L150 108', role: 'soft' },
  {
    d: 'M30 150 V108 H130 V150 M30 108 V100 H40 V108 M54 108 V100 H64 V108 M96 108 V100 H106 V108 M120 108 V100 H130 V108',
  },
  { d: 'M68 150 V128 Q80 116 92 128 V150', role: 'accent' },
  { d: 'M80 100 Q92 86 84 70 Q76 56 82 40', role: 'ambient', dashed: true },
  { d: 'M112 120 l6 -3 M112 134 l6 -3', role: 'ambient' },
  shadow(80, 156, 66),
]

/**
 * The Western Market: stalls under peaked awnings on a square of beaten
 * earth, named in Daenerys IV (chapter 37), a book-only record. The accent is
 * the awnings.
 */
const WESTERN_MARKET: Stroke[] = [
  { d: 'M10 140 H150' },
  {
    d: 'M20 140 V112 M48 140 V112 M66 140 V108 M94 140 V108 M112 140 V112 M140 140 V112',
  },
  {
    d: 'M16 112 L34 100 L52 112 M62 108 L80 94 L98 108 M108 112 L126 100 L144 112',
    role: 'accent',
  },
  {
    d: 'M24 140 V132 H34 V140 M70 140 V132 H80 M84 140 V134 H92 V140 M118 140 V132 H128 V140',
    role: 'soft',
  },
  { d: 'M44 104 l4 -3 M90 100 l4 -3 M136 104 l4 -3', role: 'ambient' },
  shadow(80, 150, 70),
]

/**
 * The Womb of the World: still water ringed with reeds, named in Daenerys V
 * (chapter 47), a book-only record. The accent is the reeds.
 */
const WOMB_OF_THE_WORLD: Stroke[] = [
  {
    d: 'M14 124 Q24 106 64 108 Q100 102 140 112 Q152 124 134 132 Q100 142 70 136 Q26 140 14 124 Z',
  },
  { d: 'M56 122 q8 -3 16 0 t16 0 t16 0', role: 'soft' },
  {
    d: 'M20 112 V92 M26 114 V96 M32 110 V88 M128 110 V90 M134 112 V94 M140 114 V96',
    role: 'accent',
  },
  { d: 'M32 88 q-3 -4 0 -8 M128 90 q3 -4 0 -8', role: 'soft' },
  { d: 'M110 130 l6 -3 M118 134 l6 -3', role: 'ambient' },
]

/**
 * The Whispering Wood: trees on both sides of a narrow valley, named in
 * Catelyn X (chapter 64), a book-only record. The accent is the trees.
 */
const WHISPERING_WOOD: Stroke[] = [
  { d: 'M10 70 Q50 120 80 126 Q110 120 150 70' },
  {
    d: 'M24 96 V86 M14 86 L24 66 L34 86 Z M44 112 V102 M34 102 L44 82 L54 102 Z M116 112 V102 M106 102 L116 82 L126 102 Z M136 96 V86 M126 86 L136 66 L146 86 Z',
    role: 'accent',
  },
  {
    d: 'M60 118 V110 M54 110 L60 98 L66 110 M100 118 V110 M94 110 L100 98 L106 110',
    role: 'soft',
  },
  { d: 'M120 92 l4 -3 M140 76 l4 -3', role: 'ambient' },
]

/**
 * The first season's places (#1053), and the ones it only names (#1035),
 * keyed by record id.
 */
export const PLACE_DRAWINGS = {
  'haunted-forest': HAUNTED_FOREST,
  'winterfell': WINTERFELL,
  'pentos': PENTOS,
  'kings-landing': KINGS_LANDING,
  'the-wall': THE_WALL,
  'winter-town': WINTER_TOWN,
  'inn-at-the-crossroads': INN,
  'darry': DARRY,
  'castle-black': CASTLE_BLACK,
  'dothraki-sea': DOTHRAKI_SEA,
  'red-keep': RED_KEEP,
  'vaes-dothrak': VAES_DOTHRAK,
  'the-eyrie': THE_EYRIE,
  'wolfswood': WOLFSWOOD,
  'kingswood': KINGSWOOD,
  'lannister-camp': LANNISTER_CAMP,
  'lhazar': LHAZAR,
  'the-twins': THE_TWINS,
  'great-sept-of-baelor': GREAT_SEPT,
  'riverrun': RIVERRUN,
  'moles-town': MOLES_TOWN,
  'bloody-gate': BLOODY_GATE,
  'moat-cailin': MOAT_CAILIN,
  'bear-island': BEAR_ISLAND,
  'eastwatch': EASTWATCH,
  'pyke': PYKE,
  'white-harbor': WHITE_HARBOR,
  'the-neck': THE_NECK,
  'street-of-the-sisters': STREET_OF_THE_SISTERS,
  'street-of-steel': STREET_OF_STEEL,
  'mountains-of-the-moon': MOUNTAINS_OF_THE_MOON,
  'green-fork': GREEN_FORK,
  'gates-of-the-moon': GATES_OF_THE_MOON,
  'western-market': WESTERN_MARKET,
  'womb-of-the-world': WOMB_OF_THE_WORLD,
  'whispering-wood': WHISPERING_WOOD,
} satisfies Drawings
