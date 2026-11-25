import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow } from '~/lib/svg/primitives'

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
 * Pentos: Illyrio's manse on its rise above the beach, the sea behind it,
 * where Viserys presents his sister in episode 1 and in Daenerys I (chapter
 * 4); the wedding is on the beach below. The house is seen corner on, its
 * far side hatched; the accent is the roof.
 */
const PENTOS: Stroke[] = [
  { d: 'M10 100 H32 M116 94 H150', role: 'ambient' },
  {
    d: 'M12 110 q5 -3 10 0 t10 0 M120 104 q5 -3 10 0 t10 0 t10 0',
    role: 'ambient',
  },
  { d: 'M10 124 Q20 122 30 122 H104 Q118 124 124 134 L136 150' },
  { d: 'M36 122 V88 H96 V122 M96 88 L112 80 V116 L104 122' },
  { d: 'M32 88 L46 72 H102 L116 80 M100 72 L96 88', role: 'accent' },
  { d: 'M100 94 l8 -4 M100 104 l8 -4 M100 114 l6 -3', role: 'ambient' },
  { d: 'M28 122 H108', role: 'soft' },
  { d: 'M122 150 Q134 146 150 148', role: 'ambient', dashed: true },
  {
    d: 'M126 158 q6 -3 12 0 t12 0 M118 168 q6 -3 12 0 t12 0 t12 0',
    role: 'ambient',
  },
]

/** The ground the Red Keep's towers stand on, above King's Landing's roofs. */
const KL_KEEP_GROUND: Stroke = { d: 'M50 68 H110' }

/**
 * King's Landing: the Red Keep's towers on the hill, the roofs packed tier
 * on tier below them and the city wall low on the bay, as the show opens on
 * it in episode 1 and Catelyn lands there in Catelyn IV (chapter 19). The
 * towers' far faces are hatched; the accent is the Red Keep.
 */
const KINGS_LANDING: Stroke[] = [
  {
    d: `M56 68 V46 H68 V68 M72 68 V34 H88 V68 M92 68 V48 H104 V68 ${ellipse(62, 46, 6, 1.8)} ${ellipse(98, 48, 6, 1.8)}`,
    role: 'accent',
  },
  { d: 'M72 34 V29 H77 V34 M83 34 V29 H88 V34', role: 'soft' },
  KL_KEEP_GROUND,
  {
    d: 'M46 80 V76 L51 71 L56 76 V80 M58 80 V73 L62 69 L66 73 V80 M68 80 V77 L74 71 L80 77 V80 M82 80 V74 L86.5 71 L91 74 V80 M93 80 V76 L98 71 L103 76 V80 M105 80 V73 L109 69 L113 73 V80 M30 95 V89 L36 83 L42 89 V95 M44 95 V92 L48.5 88 L53 92 V95 M55 95 V87 L62 82 L69 87 V95 M71 95 V91 L76 84 L81 91 V95 M83 95 V90 L87 86 L91 90 V95 M93 95 V89 L99 83 L105 89 V95 M107 95 V92 L111.5 88 L116 92 V95 M118 95 V87 L124 82 L130 87 V95 M16 110 V105 L23 98 L30 105 V110 M32 110 V102 L37 97 L42 102 V110 M44 110 V106 L50 98 L56 106 V110 M58 110 V104 L66 100 L74 104 V110 M76 110 V101 L80.5 95 L85 101 V110 M87 110 V107 L93.5 102 L100 107 V110 M102 110 V105 L109 98 L116 105 V110 M118 110 V102 L123 97 L128 102 V110 M130 110 V106 L136 98 L142 106 V110',
    role: 'soft',
  },
  {
    d: 'M14 116 V111 H20 V116 M30 116 V111 H36 V116 M46 116 V111 H52 V116 M62 116 V111 H68 V116 M92 116 V111 H98 V116 M108 116 V111 H114 V116 M124 116 V111 H130 V116 M140 116 V111 H146 V116',
    role: 'soft',
  },
  { d: 'M14 140 V116 H146 V140' },
  {
    d: 'M83 44 l5 -3 M83 56 l5 -3 M99 56 l5 -3 M134 124 l6 -3 M134 134 l6 -3',
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
 * Riverrun: the wedge of a castle in the fork where two rivers meet, its
 * point towards the viewer with the water gate at its foot and the Tully
 * trout flying over it, where Catelyn returns by boat in Catelyn XI
 * (chapter 72) and the show buries Hoster Tully in episode 23. The right
 * wall turns away and is hatched; the accent is the trout banner.
 */
const RIVERRUN: Stroke[] = [
  { d: 'M68 142 V74 H92 V142' },
  { d: 'M68 86 L30 72 M68 136 L30 114 M92 86 L130 72 M92 136 L130 114' },
  { d: 'M20 116 V60 H32 V112 M128 112 V60 H140 V116' },
  {
    d: 'M20 60 V55 H24 V60 M28 60 V55 H32 V60 M128 60 V55 H132 V60 M136 60 V55 H140 V60 M68 74 V69 H73 V74 M78 74 V69 H82 V74 M87 74 V69 H92 V74',
    role: 'soft',
  },
  { d: 'M72 142 V128 Q80 118 88 128 V142', role: 'soft' },
  { d: 'M76 142 V126 M80 142 V122 M84 142 V126', role: 'soft' },
  {
    d: 'M80 69 V40 M80 40 H100 L95 46 L100 52 H80 M84 46 Q89 42 94 46 Q89 50 84 46 L82 44 M84 46 L82 48',
    role: 'accent',
  },
  {
    d: 'M100 92 l6 -3 M106 104 l6 -3 M112 116 l6 -3 M134 72 l4 -2 M134 86 l4 -2',
    role: 'ambient',
  },
  {
    d: 'M10 128 q6 -2 12 2 t12 4 t12 6 M114 140 q6 -2 12 -4 t12 -6 t12 -4',
    role: 'ambient',
  },
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
 * The Neck: a plank causeway on piles crossing the marsh, seen side on,
 * reeds standing out of the water at either end, named in Eddard I
 * (chapter 5) and in episode 8, and never a scene's setting in the first
 * season or book. The accent is the reed heads.
 */
const THE_NECK: Stroke[] = [
  {
    d: 'M24 150 Q26 124 20 104 M30 150 Q32 120 38 100 M36 150 Q38 128 34 112 M118 150 Q120 126 114 108 M124 150 Q126 120 132 102 M130 150 Q132 130 128 114',
    role: 'soft',
  },
  {
    d: 'M17 100 Q20 92 23 100 Q20 106 17 100 M35 96 Q38 88 41 96 Q38 102 35 96 M111 104 Q114 96 117 104 Q114 110 111 104 M129 98 Q132 90 135 98 Q132 104 129 98',
    role: 'accent',
  },
  { d: 'M28 124 H132 M28 130 H132 M28 124 V130 M132 124 V130' },
  {
    d: 'M42 124 V130 M56 124 V130 M70 124 V130 M84 124 V130 M98 124 V130 M112 124 V130',
    role: 'soft',
  },
  { d: 'M36 130 V152 M62 130 V152 M88 130 V152 M114 130 V152' },
  { d: 'M10 144 H150', role: 'ambient', dashed: true },
  {
    d: 'M40 150 q6 -3 12 0 M66 154 q6 -3 12 0 M92 150 q6 -3 12 0 M14 158 q8 -4 16 0 t16 0 M108 160 q8 -4 16 0 t16 0',
    role: 'ambient',
  },
]

/**
 * Casterly Rock: a great rock over the sea with the castle cut into it,
 * named in episode 1 (Cersei's cliffs) and in Catelyn I (chapter 3) and
 * never visited in the first season or book. The rock's far side is
 * hatched; the accent is the gate.
 */
const CASTERLY_ROCK: Stroke[] = [
  { d: 'M14 140 Q18 96 44 70 Q70 44 104 50 Q132 60 146 140' },
  {
    d: 'M60 92 V74 H72 V92 M84 86 V64 H96 V86 M108 96 V80 H118 V96',
    role: 'soft',
  },
  { d: 'M74 140 V118 Q84 106 94 118 V140', role: 'accent' },
  {
    d: 'M118 104 l6 -3 M124 116 l6 -3 M130 128 l6 -3 M112 90 l6 -3',
    role: 'ambient',
  },
  { d: 'M40 120 Q50 108 46 96 M128 82 Q120 70 110 66', role: 'soft' },
  ...SEA,
]

/**
 * The Narrow Sea: open water between two coasts, a ship under sail between
 * them, named in episode 1 (the caption over Pentos) and in Catelyn I
 * (chapter 3); no scene is set on it in the first season or book. The
 * coasts' far sides are hatched; the accent is the ship.
 */
const NARROW_SEA: Stroke[] = [
  { d: 'M10 70 Q24 76 30 96 Q34 110 22 122 L10 126' },
  { d: 'M150 64 Q134 72 130 92 Q128 108 138 118 L150 124' },
  {
    d: 'M60 112 Q80 120 100 112 L96 104 H64 Z M80 104 V68 M80 70 L98 98 H80',
    role: 'accent',
  },
  {
    d: 'M16 90 l5 -3 M18 104 l5 -3 M136 88 l5 -3 M134 102 l5 -3',
    role: 'ambient',
  },
  ...SEA,
]

/**
 * Lannisport: a port city's towers and spires on the waterfront, two ships
 * at the quay, named in episode 3 and in Jon III (chapter 21) and never
 * visited in the first season or book. The accent is the ships.
 */
const LANNISPORT: Stroke[] = [
  { d: 'M10 128 H150' },
  {
    d: 'M20 128 V100 H40 V128 M48 128 V88 H62 V128 M70 128 V96 H90 V128 M98 128 V84 H112 V128 M120 128 V102 H140 V128',
  },
  { d: 'M48 88 L55 74 L62 88 M98 84 L105 68 L112 84', role: 'soft' },
  { d: 'M76 108 h8 M126 112 h8 M26 110 h8', role: 'soft' },
  {
    d: 'M28 146 Q40 152 58 146 L56 140 H32 Z M44 140 V118 M44 120 L56 136 H44 M100 146 Q112 152 130 146 L128 140 H104 Z M116 140 V120 M116 122 L128 136 H116',
    role: 'accent',
  },
  { d: 'M134 108 l5 -3 M134 118 l5 -3', role: 'ambient' },
  ...SEA,
]

/**
 * Harrenhal: a castle of five great towers joined by its walls, named in
 * episode 4 (the black bat of Harrenhal) and in Catelyn V (chapter 29) and
 * never visited in the first season or book. The towers' far faces are
 * hatched; the accent is the gate.
 */
const HARRENHAL: Stroke[] = [
  {
    d: 'M14 150 V84 Q20 76 26 84 V150 M44 150 V70 Q52 62 60 70 V150 M76 150 V58 Q84 50 92 58 V150 M108 150 V70 Q116 62 124 70 V150 M134 150 V84 Q140 76 146 84 V150',
  },
  { d: 'M26 120 H44 M60 110 H76 M92 110 H108 M124 120 H134' },
  { d: 'M78 150 V132 Q84 124 90 132 V150', role: 'accent' },
  { d: 'M52 86 V94 M84 74 V82 M116 86 V94', role: 'soft' },
  {
    d: 'M88 70 l4 -3 M88 90 l4 -3 M120 82 l4 -3 M120 102 l4 -3 M56 82 l4 -3 M56 102 l4 -3',
    role: 'ambient',
  },
  shadow(80, 156, 66),
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
 * The Citadel: the Hightower's tiers rising over Oldtown, its beacon burning
 * on top, and the maesters' arcaded halls at its foot, for the order named
 * in episode 3 and in Tyrion III (chapter 22). Sam first reaches it in
 * season 6; the owner ruled that a named place may open on that later look.
 * The tiers' far faces are hatched; the accent is the beacon.
 */
const THE_CITADEL: Stroke[] = [
  {
    d: 'M64 150 V110 H96 V150 M68 110 V80 H92 V110 M72 80 V54 H88 V80 M75 54 V38 H85 V54',
  },
  { d: 'M80 36 q-6 -6 -1 -14 q2 5 4 2 q4 7 -3 12', role: 'accent' },
  { d: 'M80 92 V100 M80 62 V70 M80 124 V134', role: 'soft' },
  {
    d: 'M90 116 l4 -2 M90 130 l4 -2 M90 144 l4 -2 M87 86 l3 -2 M87 98 l3 -2 M84 60 l3 -2',
    role: 'ambient',
  },
  { d: 'M18 150 V124 H58 V150 M104 150 V128 H142 V150' },
  { d: 'M28 124 Q38 108 48 124', role: 'soft' },
  {
    d: 'M24 150 V140 Q28 134 32 140 V150 M44 150 V140 Q48 134 52 140 V150 M112 150 V140 Q116 134 120 140 V150 M128 150 V140 Q132 134 136 140 V150',
    role: 'soft',
  },
  shadow(80, 156, 70),
]

/**
 * Horn Hill: a castle on a wooded hill, named in episode 4 (Samwell Tarly of
 * Horn Hill) and in Jon IV (chapter 27) and never visited in the first
 * season or book. The hill's far side is hatched; the accent is the castle.
 */
const HORN_HILL: Stroke[] = [
  { d: 'M10 150 Q40 96 80 92 Q120 96 150 150' },
  {
    d: 'M62 92 V62 H76 V92 M76 92 V72 H98 V92 M62 62 V56 H66 V62 M72 62 V56 H76 V62',
    role: 'accent',
  },
  {
    d: 'M24 136 L30 122 L36 136 M40 124 L46 110 L52 124 M110 122 L116 108 L122 124 M126 136 L132 122 L138 136',
    role: 'soft',
  },
  { d: 'M104 112 l6 -3 M112 124 l6 -3 M120 136 l6 -3', role: 'ambient' },
  { d: 'M86 92 V84 Q90 80 94 84 V92', role: 'soft' },
  shadow(80, 156, 66),
]

/**
 * The Fingers: five long, bare peninsulas reaching from the Vale's coast
 * into the sea, the land they leave from behind them and the sea in the
 * inlets between them, named in episode 4 (Littlefinger's spit of land) and
 * in Tyrion II (chapter 14) and never visited in the first season or book.
 * Each finger's far side is hatched; the accent is the rock at their tips.
 */
const THE_FINGERS: Stroke[] = [
  {
    d: 'M10 52 Q12 58 14 60 L14.3 80.4 L10.1 100.8 L11.6 117.8 L12 128 L14.8 114.4 L20.8 98.4 L20.4 79.2 L26 60 Q33 36 40 60 L38.5 84.6 L41 109.2 L39 129.7 L42 142 L47.2 126.3 L45.2 106.8 L51.1 83.4 L52 60 Q59 36 66 60 L70 87 L71 114 L76.5 136.5 L78 150 L77.7 133.1 L80.7 111.6 L77.1 85.8 L78 60 Q85 36 92 60 L97 82.8 L106 105.6 L107 124.6 L114 136 L115.7 121.2 L109.7 103.2 L108.6 81.6 L104 60 Q110 36 116 60 L125.2 75 L128.4 90 L137.9 102.5 L142 110 L139.8 99.1 L137.8 87.6 L130.4 73.8 L126 60 Q136 38 150 48',
  },
  {
    d: 'M9 125 l3 3 l3 -3 M39 139 l3 3 l3 -3 M75 147 l3 3 l3 -3 M111 133 l3 3 l3 -3 M139 107 l3 3 l3 -3',
    role: 'accent',
  },
  {
    d: 'M17.2 85.6 l4 -3 M13.6 104.8 l4 -3 M44.8 91.2 l4 -3 M42.4 114.6 l4 -3 M74.8 94.4 l4 -3 M75.4 120.2 l4 -3 M104.8 88.8 l4 -3 M108.4 110.4 l4 -3 M129.2 78.4 l4 -3 M134.6 92.2 l4 -3',
    role: 'ambient',
  },
  {
    d: 'M10 30 Q22 18 34 26 Q48 12 62 24 Q78 10 94 22 Q108 14 122 24 Q138 14 150 26',
    role: 'soft',
  },
  {
    d: 'M20 40 l4 -3 M46 36 l4 -3 M72 38 l4 -3 M98 36 l4 -3 M120 38 l4 -3 M140 40 l4 -3 M30 32 l4 -3 M86 30 l4 -3 M132 30 l4 -3',
    role: 'ambient',
  },
  {
    d: 'M29 54 q3 -2 6 0 M55 54 q3 -2 6 0 M81 54 q3 -2 6 0 M107 54 q3 -2 6 0 M30 84 q3 -2 6 0 M56 92 q4 -2 8 0 M88 96 q4 -2 8 0 M116 86 q4 -2 8 0 M134 64 q4 -2 8 0 M28 112 q4 -2 8 0 M58 120 q4 -2 8 0 M92 124 q4 -2 8 0',
    role: 'ambient',
  },
  {
    d: 'M18 150 q6 -3 12 0 M52 156 q6 -3 12 0 M96 152 q6 -3 12 0 t12 0 M126 128 q6 -3 12 0 M16 168 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
    role: 'ambient',
  },
]

/**
 * The Trident: three rivers coming down from the horizon and running
 * together into one wide water, seen from the water's level, named in
 * episode 5 and in Catelyn I (chapter 3); its bank and its crossing are no
 * scene's setting in the first season or book. The spits between the
 * rivers are hatched on their far side; the accent is the joined river.
 */
const THE_TRIDENT: Stroke[] = [
  {
    d: 'M10 60 Q16 56 20 60 M34 60 Q52 54 72 60 M88 60 Q108 54 126 60 M140 60 Q146 56 150 60',
    role: 'soft',
  },
  { d: 'M20 60 Q24 90 10 110 M140 60 Q136 90 150 110' },
  {
    d: 'M34 60 Q56 74 62 114 Q64 76 72 60 M88 60 Q96 76 98 114 Q104 74 126 60',
  },
  {
    d: 'M62 100 l3 -2 M64 86 l3 -2 M66 72 l3 -2 M100 100 l3 -2 M102 86 l3 -2 M106 72 l3 -2',
    role: 'ambient',
  },
  {
    d: 'M24 76 q3 -2 6 0 M26 96 q4 -2 8 0 M78 70 q2 -1 4 0 M76 86 q4 -2 8 0 M74 104 q6 -3 12 0 M128 76 q3 -2 6 0 M126 96 q4 -2 8 0',
    role: 'ambient',
  },
  {
    d: 'M52 74 l-1 -4 M58 88 l-1 -4 M104 88 l1 -4 M110 72 l1 -4',
    role: 'ambient',
  },
  {
    d: 'M10 126 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 M24 142 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'accent',
  },
  {
    d: 'M14 160 q8 -4 16 0 t16 0 M108 160 q8 -4 16 0 t16 0 M60 172 q8 -4 16 0 t16 0',
    role: 'ambient',
  },
]

/**
 * Tumblestone: a river breaking over stones between two low banks, named in
 * episode 5 (Ser Marlon of Tumblestone) and in Catelyn X (chapter 64) and
 * never visited in the first season or book. The stones' far sides are
 * hatched; the accent is the broken water.
 */
const TUMBLESTONE: Stroke[] = [
  { d: 'M10 70 H62 M98 70 H150', role: 'soft' },
  { d: 'M62 70 Q40 96 10 116 M98 70 Q120 96 150 116' },
  {
    d: 'M20 110 l3 -6 M34 98 l3 -6 M126 98 l-3 -6 M140 110 l-3 -6',
    role: 'ambient',
  },
  {
    d: 'M30 146 Q32 132 44 132 Q56 132 58 146 Z M70 128 Q72 118 80 118 Q88 118 90 128 Z M98 152 Q100 138 112 138 Q124 138 126 152 Z M72 100 Q74 92 80 92 Q86 92 88 100 Z',
  },
  {
    d: 'M50 136 l4 -3 M52 142 l4 -3 M84 122 l3 -2 M85 126 l3 -2 M118 142 l4 -3 M120 148 l4 -3 M83 96 l3 -2',
    role: 'ambient',
  },
  {
    d: 'M18 148 q4 -4 8 0 M58 140 q4 -4 8 0 t8 0 M60 128 q4 -4 8 0 M90 124 q4 -4 8 0 t8 0 M86 152 q4 -4 8 0 M126 148 q4 -4 8 0 M64 100 q4 -4 8 0 M88 98 q4 -4 8 0',
    role: 'accent',
  },
  {
    d: 'M70 78 Q66 90 58 104 M90 78 Q94 90 104 104 M80 74 V86',
    role: 'ambient',
  },
  {
    d: 'M16 164 q8 -4 16 0 t16 0 t16 0 M84 168 q8 -4 16 0 t16 0 t16 0',
    role: 'ambient',
  },
]

/**
 * The Golden Tooth: a narrow keep on a high peak, seen corner on, with a
 * dashed track at its foot on either side, for the Lefford seat named in
 * episode 8 and in Catelyn VII (chapter 41) and never visited in the first
 * season or book. The peak's far face and the keep's side are hatched; the
 * accent is the keep.
 */
const GOLDEN_TOOTH: Stroke[] = [
  { d: 'M14 150 L46 106 L58 114 L72 62 M94 64 L104 102 L116 94 L146 150' },
  { d: 'M72 60 V30 H86 V60', role: 'accent' },
  { d: 'M86 30 L94 34 V62 M72 60 L94 62' },
  { d: 'M72 30 V24 H77 V30 M81 30 V24 H86 V30 M79 40 V46', role: 'soft' },
  { d: 'M90 64 L98 106 L106 150', role: 'soft' },
  {
    d: 'M88 42 l4 -2 M88 52 l4 -2 M102 84 l6 -3 M108 100 l6 -3 M116 114 l6 -3 M126 128 l6 -3 M134 142 l6 -3',
    role: 'ambient',
  },
  {
    d: 'M22 150 Q38 136 58 132 M138 150 Q122 136 104 130',
    role: 'ambient',
    dashed: true,
  },
  shadow(80, 156, 66),
]

/**
 * The Red Fork: a wide river bending toward the viewer, a tributary joining
 * it, and Riverrun on the point where the two meet, as Catelyn I (chapter 3)
 * sets the castle on the Red Fork; the show names the river in episode 10.
 * No scene of the first season or book is set on it. The castle's side is
 * hatched; the accent is the water.
 */
const RED_FORK: Stroke[] = [
  { d: 'M10 52 Q40 36 70 48 Q100 34 150 50', role: 'soft' },
  {
    d: 'M150 70 Q116 72 104 92 Q88 116 40 120 Q20 122 10 124 M150 84 Q126 86 118 104 Q102 140 46 148 Q24 150 10 151',
  },
  { d: 'M14 82 Q46 90 62 117 M24 64 Q66 70 86 108' },
  { d: 'M78 90 V62 H85 V70 H93 V62 H100 V90' },
  {
    d: 'M78 62 V58 H82 V62 M96 62 V58 H100 V62 M87 90 V83 Q89 80 91 83 V90',
    role: 'soft',
  },
  { d: 'M100 62 L104 65 V86', role: 'soft' },
  {
    d: 'M30 136 q6 -3 12 0 M92 132 q6 -3 12 0 M124 80 q5 -2 10 0 M26 76 q5 -2 10 0',
    role: 'accent',
  },
  {
    d: 'M101 72 l2 -1 M101 80 l2 -1 M120 60 l5 -3 M40 58 l5 -3',
    role: 'ambient',
  },
]

/**
 * The Gods Eye: a wide lake seen from its shore under a line of hills, the
 * far bank's edge drawn inside the rim and two tufts of reeds growing on
 * the near shore, named in episode 10 and in Bran VII (chapter 67) and
 * never visited in the first season or book. No island: the Isle of Faces
 * waits until that chapter is checked for it. The far bank is hatched; the
 * accent is the water.
 */
const GODS_EYE: Stroke[] = [
  { d: 'M10 62 Q30 48 50 56 Q72 40 96 52 Q122 42 150 56', role: 'soft' },
  {
    d: 'M14 102 Q20 78 80 76 Q140 78 146 102 Q140 126 80 128 Q20 126 14 102 Z',
  },
  { d: 'M24 90 Q44 84 80 84 Q116 84 136 90', role: 'soft' },
  { d: 'M44 104 q8 -4 16 0 t16 0 M90 114 q8 -4 16 0 t16 0', role: 'accent' },
  {
    d: 'M34 150 Q30 144 22 138 M34 150 Q34 142 32 136 M34 150 Q38 144 44 138 M34 150 Q42 146 52 142 M122 148 Q120 144 114 140 M122 148 V138 M122 148 Q126 144 132 140',
    role: 'soft',
  },
  { d: 'M32 136 q-2 -3 0 -6 M122 138 q2 -3 0 -6' },
  { d: 'M10 150 Q80 142 150 150', role: 'ambient', dashed: true },
  { d: 'M100 82 l5 -2 M114 83 l5 -2 M128 86 l5 -2', role: 'ambient' },
]

/**
 * Asshai: three dark towers, for the far city named in episode 1 and in
 * Daenerys II (chapter 12), Illyrio's "the Shadow Lands beyond Asshai", and
 * never visited in the first season or book. The towers are hatched dark;
 * the accent is their peaks.
 */
const ASSHAI: Stroke[] = [
  { d: 'M30 150 V80 H48 V150 M70 150 V50 H90 V150 M112 150 V72 H130 V150' },
  { d: 'M48 150 V110 H70 M90 120 H112', role: 'soft' },
  {
    d: 'M30 80 L39 66 L48 80 M70 50 L80 32 L90 50 M112 72 L121 58 L130 72',
    role: 'accent',
  },
  {
    d: 'M34 90 l10 -6 M34 104 l10 -6 M34 118 l10 -6 M34 132 l10 -6 M74 70 l12 -7 M74 86 l12 -7 M74 102 l12 -7 M74 118 l12 -7 M74 134 l12 -7 M116 82 l10 -6 M116 96 l10 -6 M116 110 l10 -6 M116 124 l10 -6 M116 138 l10 -6',
    role: 'ambient',
  },
  shadow(80, 156, 66),
]

/**
 * Valyria: old columns round a standing arch, for the land named in Catelyn I
 * (chapter 3) and in episode 4 and never visited in the first season or book.
 * Neither tells its fate by then, so nothing is broken or burning. The accent
 * is the arch.
 */
const VALYRIA: Stroke[] = [
  {
    d: 'M30 150 V96 L35 90 L40 96 V150 M60 150 V78 L66 70 L72 78 V150 M100 150 V78 L106 70 L112 78 V150 M120 150 V96 L125 90 L130 96 V150',
  },
  { d: 'M72 110 Q86 92 100 110', role: 'accent' },
  {
    d: 'M68 100 l3 -2 M68 120 l3 -2 M108 100 l3 -2 M108 120 l3 -2 M38 110 l2 -2 M38 130 l2 -2 M128 110 l2 -2 M128 130 l2 -2',
    role: 'ambient',
  },
  shadow(80, 156, 66),
]

/**
 * Braavos: the Titan, the giant armoured statue astride the harbour
 * entrance, its feet on two stone piers and one fist raised, for the city
 * named in Daenerys I (chapter 4) and in episode 3 (the Sealord of
 * Braavos). The show first sails under it in season 4; the owner ruled
 * that a named city may open on the look a later season gives it. The
 * piers' far faces are hatched; the accent is the helm.
 */
const BRAAVOS: Stroke[] = [
  { d: 'M34 152 V122 H62 V152 M98 152 V122 H126 V152' },
  { d: 'M46 122 L70 84 M114 122 L90 84 M56 122 L76 92 H84 L104 122' },
  { d: 'M70 84 L68 58 M90 84 L92 58 M64 58 H96' },
  { d: 'M74 58 V48 Q80 40 86 48 V58 M74 52 H86', role: 'accent' },
  {
    d: 'M96 58 L111 42 L113 30 M92 66 L104 46 L105 30 M103 30 H115 L116 22 Q109 16 102 22 Z M104 24 H114',
  },
  { d: 'M64 58 L58 82 M68 66 L64 84' },
  { d: 'M69 68 H91 M70 78 H90', role: 'soft' },
  {
    d: 'M86 70 l4 -2 M87 80 l4 -2 M120 130 l6 -3 M120 142 l6 -3 M56 130 l6 -3 M56 142 l6 -3',
    role: 'ambient',
  },
  ...SEA,
]

/**
 * Myr: three domed houses on a coast, named in Daenerys I (chapter 4) and in
 * episode 4 (Thoros of Myr) and never visited in the first season or book.
 * The accent is the domes.
 */
const MYR: Stroke[] = [
  { d: 'M10 128 Q50 120 80 126 Q120 132 150 124' },
  { d: 'M24 124 V100 H56 V122 M64 126 V92 H96 V128 M104 128 V102 H136 V126' },
  {
    d: 'M24 100 Q40 80 56 100 M64 92 Q80 68 96 92 M104 102 Q120 82 136 102',
    role: 'accent',
  },
  { d: 'M90 104 l4 -3 M90 116 l4 -3 M130 112 l4 -3', role: 'ambient' },
  ...SEA,
]

/**
 * Tyrosh: a tall tower on an island, named in Daenerys I (chapter 4) and in
 * episode 7 (a trader's pear brandy) and never visited in the first season or
 * book. The accent is the tower.
 */
const TYROSH: Stroke[] = [
  { d: 'M20 140 Q40 112 80 110 Q120 112 140 140' },
  {
    d: 'M70 112 V56 H90 V112 M66 56 H94 M70 56 V48 H76 V56 M84 56 V48 H90 V56',
    role: 'accent',
  },
  { d: 'M44 124 V104 H62 V116 M98 116 V100 H116 V126', role: 'soft' },
  {
    d: 'M86 70 l3 -2 M86 86 l3 -2 M86 100 l3 -2 M120 128 l6 -3 M128 136 l6 -3',
    role: 'ambient',
  },
  ...SEA,
]

/**
 * Dragonstone: the Targaryen castle on its rock in the sea, one tower rising
 * into a carved dragon's long neck and horned head, jaws open, and the stair
 * cut into the cliff, for the island named in Daenerys I (chapter 4) and in
 * episode 7. The show goes there from season 2 and opens up its
 * dragon-carved castle in season 7; the owner ruled that a named place may
 * open on that later look. The rock's far side is hatched; the accent is
 * the dragon.
 */
const DRAGONSTONE: Stroke[] = [
  { d: 'M14 150 L24 122 L38 128 L50 96 H110 L122 120 L136 114 L146 150' },
  { d: 'M54 96 V66 H106 V96' },
  {
    d: 'M60 66 V44 Q60 26 76 24 L98 30 L80 33 L96 39 L76 38 Q68 38 68 48 V66',
    role: 'accent',
  },
  { d: 'M71 25 L62 13 M76 24 L72 12' },
  { d: 'M94 66 V48 H104 V66 M94 48 V44 H98 V48 M100 48 V44 H104 V48' },
  { d: 'M74 96 V84 Q80 78 86 84 V96', role: 'soft' },
  { d: 'M86 98 h6 v4 h6 v4 h6 v4 h6 v4', role: 'soft' },
  {
    d: 'M100 54 l4 -2 M100 76 l5 -3 M100 88 l5 -3 M118 128 l6 -3 M126 138 l6 -3 M34 138 l6 -3',
    role: 'ambient',
  },
  ...SEA,
]

/**
 * Qohor: a walled city at the edge of a forest, named in Daenerys I (chapter
 * 4) and in episode 3 and never visited in the first season or book. The
 * accent is the trees.
 */
const QOHOR: Stroke[] = [
  {
    d: 'M60 150 V96 H140 V150 M60 96 V88 H68 V96 M84 96 V88 H92 V96 M108 96 V88 H116 V96 M132 96 V88 H140 V96',
  },
  { d: 'M90 150 V128 Q100 118 110 128 V150', role: 'soft' },
  {
    d: 'M22 150 V140 M10 140 L22 120 L34 140 Z M14 124 L22 108 L30 124 M44 150 V136 M32 136 L44 112 L56 136 Z M36 116 L44 98 L52 116',
    role: 'accent',
  },
  { d: 'M130 110 l6 -3 M130 124 l6 -3 M130 138 l6 -3', role: 'ambient' },
  shadow(80, 156, 70),
]

/**
 * Volantis: two dark walls joined by a long bridge over water, named in
 * Daenerys I (chapter 4) and in episode 7 (the wine seller) and never visited
 * in the first season or book. The walls are hatched; the accent is the
 * bridge's arches.
 */
const VOLANTIS: Stroke[] = [
  { d: 'M10 112 H150 M10 120 H150' },
  {
    d: 'M14 140 Q24 122 34 140 M38 140 Q48 122 58 140 M62 140 Q72 122 82 140 M86 140 Q96 122 106 140 M110 140 Q120 122 130 140 M134 140 Q144 122 150 134 M34 140 V120 M58 140 V120 M82 140 V120 M106 140 V120 M130 140 V120',
    role: 'accent',
  },
  { d: 'M20 112 V72 H60 V112 M100 112 V68 H140 V112', role: 'soft' },
  {
    d: 'M24 82 l8 -5 M24 96 l8 -5 M44 82 l8 -5 M44 96 l8 -5 M104 80 l8 -5 M104 94 l8 -5 M124 80 l8 -5 M124 94 l8 -5',
    role: 'ambient',
  },
  {
    d: 'M10 152 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
    role: 'ambient',
  },
]

/**
 * Lys: three pale towers on an island, named in Daenerys I (chapter 4) and in
 * episode 2 (Doreah) and never visited in the first season or book. The
 * accent is their domes.
 */
const LYS: Stroke[] = [
  { d: 'M16 140 Q40 114 80 112 Q120 114 144 140' },
  { d: 'M52 114 V66 H66 V114 M73 112 V52 H87 V112 M94 114 V70 H108 V114' },
  {
    d: 'M52 66 Q59 54 66 66 M73 52 Q80 38 87 52 M94 70 Q101 58 108 70',
    role: 'accent',
  },
  { d: 'M110 124 l6 -3 M118 132 l6 -3', role: 'ambient' },
  ...SEA,
]

/**
 * The Arbor: vineyard rows on an island under the sun, named in episode 7
 * (the wine seller) and in Eddard X (chapter 40) and never visited in the
 * first season or book. The accent is the vines.
 */
const THE_ARBOR: Stroke[] = [
  { d: 'M14 140 Q30 108 80 104 Q130 108 146 140' },
  {
    d: 'M34 130 Q60 120 90 122 M44 120 Q70 112 100 114 M60 112 Q80 106 110 108',
    role: 'soft',
  },
  {
    d: 'M50 122 q2 -6 6 -2 M70 116 q2 -6 6 -2 M90 118 q2 -6 6 -2 M80 110 q2 -6 6 -2',
    role: 'accent',
  },
  {
    d: `${circle(120, 50, 12)} M120 30 V34 M120 66 V70 M100 50 H104 M136 50 H140`,
    role: 'soft',
  },
  { d: 'M126 122 l6 -3 M134 132 l6 -3', role: 'ambient' },
  ...SEA,
]

/**
 * Qarth: the city's great gate seen corner on, its arched doors set with
 * carved panels between the high walls, for the city named in episode 2 and
 * in Daenerys III (chapter 24), a trader from Qarth. Daenerys first stands
 * before it in season 2; the owner ruled that a named city may open on that
 * later look. The gatehouse's side is hatched; the accent is the gate.
 */
const QARTH: Stroke[] = [
  { d: 'M10 150 V100 H50 M120 104 H150 V150' },
  { d: 'M50 150 V58 H110 V150' },
  { d: 'M110 58 L120 64 V150', role: 'soft' },
  { d: 'M64 150 V96 Q80 74 96 96 V150', role: 'accent' },
  {
    d: 'M80 150 V86 M68 106 h8 v10 h-8 Z M84 106 h8 v10 h-8 Z M68 124 h8 v10 h-8 Z M84 124 h8 v10 h-8 Z',
    role: 'soft',
  },
  { d: 'M46 58 H114 M50 68 H110', role: 'soft' },
  {
    d: 'M112 76 l6 -3 M112 92 l6 -3 M112 108 l6 -3 M112 124 l6 -3 M112 140 l6 -3',
    role: 'ambient',
  },
  shadow(80, 156, 70),
]

/**
 * The Mother of Mountains: a lone mountain over a flat plain, named in
 * episode 7 (Drogo's vow) and in Daenerys IV (chapter 37). The first season
 * and book stay in the city below it. Its far side is hatched; the accent is
 * the snow line.
 */
const MOTHER_OF_MOUNTAINS: Stroke[] = [
  { d: 'M24 140 L64 70 L80 52 L96 70 L136 140' },
  { d: 'M64 70 L72 78 L80 70 L88 80 L96 70', role: 'accent' },
  { d: 'M10 140 H150', role: 'soft' },
  {
    d: 'M98 84 l6 -4 M106 98 l6 -4 M114 112 l6 -4 M122 126 l6 -4',
    role: 'ambient',
  },
  {
    d: 'M20 150 q6 -3 12 0 M60 152 q6 -3 12 0 M110 150 q6 -3 12 0',
    role: 'soft',
  },
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
 * The Whispering Wood: a narrow valley at night between two ridges, thick
 * pines on both flanks and a line of spears waiting between the trunks,
 * where Robb's host falls on Jaime's in Catelyn X (chapter 64), a book-only
 * record. The pines' far sides are hatched; the accent is the trees.
 */
const WHISPERING_WOOD: Stroke[] = [
  { d: 'M10 84 Q50 126 80 130 Q110 126 150 84' },
  { d: 'M4 62 Q30 48 58 72 M156 62 Q130 48 102 72', role: 'soft' },
  {
    d: 'M18 106 V96 M6 96 L18 66 L30 96 Z M38 118 V108 M26 108 L38 78 L50 108 Z M122 118 V108 M110 108 L122 78 L134 108 Z M142 106 V96 M130 96 L142 66 L154 96 Z',
    role: 'accent',
  },
  {
    d: 'M28 92 L18 76 M48 104 L38 88 M132 104 L122 88 M152 92 L142 76',
    role: 'ambient',
  },
  {
    d: 'M58 124 V100 M66 126 V102 M74 128 V104 M86 128 V104 M94 126 V102 M102 124 V100',
  },
  {
    d: 'M56 100 L58 94 L60 100 M64 102 L66 96 L68 102 M72 104 L74 98 L76 104 M84 104 L86 98 L88 104 M92 102 L94 96 L96 102 M100 100 L102 94 L104 100',
    role: 'soft',
  },
  { d: 'M76 30 a12 12 0 1 0 10 20 a9 9 0 1 1 -10 -20', role: 'soft' },
]

/**
 * Craster's Keep: a low hall of logs with smoke from its roof, between the
 * banks of its earthen wall, as the ranging finds it in episode 11 and in
 * Jon III (chapter 97). The hall's far end is hatched; the accent is its
 * door.
 */
const CRASTERS_KEEP: Stroke[] = [
  { d: 'M40 150 V114 H120 V150' },
  { d: 'M34 116 L56 94 H104 L126 116' },
  { d: 'M40 124 H72 M88 124 H120 M40 134 H72 M88 134 H120', role: 'soft' },
  { d: 'M72 150 V128 H88 V150', role: 'accent' },
  { d: 'M10 150 Q16 136 30 138 L34 150 M126 150 L130 138 Q144 136 150 150' },
  { d: 'M88 92 q-6 -8 2 -16 q-6 -8 2 -16', role: 'soft' },
  { d: 'M110 122 l6 -3 M110 134 l6 -3 M110 146 l6 -3', role: 'ambient' },
  shadow(80, 156, 64),
]

/**
 * The Red Waste: low red ridges over a cracked plain under the sun, for the
 * desert Daenerys leads her people into in episode 11 and in Daenerys I
 * (chapter 86). The ridges' far sides are hatched; the accent is the
 * cracked earth.
 */
const RED_WASTE: Stroke[] = [
  { d: 'M10 112 Q30 96 50 104 Q70 88 96 100 Q120 90 150 106' },
  { d: 'M10 128 Q40 118 70 124 Q100 116 150 126', role: 'soft' },
  {
    d: 'M24 142 l10 -4 l6 3 l10 -5 M80 140 l8 4 l10 -3 l6 4 M112 146 l10 -4 l8 2',
    role: 'accent',
  },
  { d: circle(116, 52, 12), role: 'soft' },
  { d: 'M44 150 q4 -8 10 -6 q4 0 6 6 M120 150 q3 -6 8 -5 q4 1 4 5' },
  { d: 'M60 100 l5 -3 M104 98 l5 -3 M134 102 l5 -3', role: 'ambient' },
  { d: 'M10 150 Q80 144 150 150', role: 'ambient', dashed: true },
]

/**
 * Whitetree: the great heart tree spreading over two empty stone huts, for
 * the wildling village the ranging finds empty in Jon II (chapter 87); the
 * show names no village. The trunk's far side is hatched; the accent is the
 * tree's red leaves.
 */
const WHITETREE: Stroke[] = [
  { d: 'M72 150 Q74 120 70 96 M88 150 Q86 120 90 96' },
  {
    d: 'M70 96 Q56 84 40 82 M72 100 Q60 92 52 96 M90 96 Q104 84 120 82 M88 100 Q100 92 110 96 M80 98 V80',
    role: 'soft',
  },
  {
    d: 'M34 86 Q24 72 40 66 Q46 50 66 54 Q78 40 96 52 Q116 48 120 64 Q138 70 126 86 Z',
    role: 'accent',
  },
  {
    d: 'M14 150 V132 L24 124 L34 132 V150 M126 150 V134 L136 126 L146 134 V150',
  },
  { d: 'M14 141 H34 M126 142 H146 M78 140 V126 M82 116 V104', role: 'soft' },
  { d: 'M86 132 l4 -2 M86 120 l4 -2', role: 'ambient' },
  GROUND,
]

/**
 * Vaes Tolorro: cracked white walls and a broken gate before the ruins of
 * a palace, for the empty city Daenerys names in Daenerys I (chapter 86);
 * the show has none. The towers' faces are hatched; the accent is the
 * broken gate.
 */
const VAES_TOLORRO: Stroke[] = [
  {
    d: 'M14 150 V100 H40 L46 108 L50 102 V150 M110 150 V104 L114 98 L120 106 H146 V150',
  },
  {
    d: 'M50 150 V112 Q56 96 64 104 M96 104 Q104 96 110 112 V150',
    role: 'accent',
  },
  { d: 'M58 104 V82 H72 V104 M86 104 V72 Q93 58 100 72 V104', role: 'soft' },
  { d: 'M24 118 l4 5 l-4 5 l4 5 M130 118 l-4 5 l4 5 l-4 5', role: 'soft' },
  { d: 'M40 116 l6 -3 M40 130 l6 -3 M140 118 l5 -3', role: 'ambient' },
  GROUND,
]

/** A longship's hull and mast, at the origin, for a harbour or a fleet. */
const SHIP_HULL: Stroke[] = [
  { d: 'M-16 0 Q0 7 16 0 L19 -6 M-16 0 L-19 -6' },
  { d: 'M0 3 V-30', role: 'soft' },
]

/** A ship's square sail, at the origin, above `SHIP_HULL`. */
const SAIL = 'M-10 -28 H10 Q12 -18 10 -8 H-10 Q-12 -18 -10 -28 Z'

/**
 * Lordsport: a longship moored by the stone quay below the harbour town's
 * houses, where Theon lands in episode 12 and in Theon I (chapter 85). The
 * houses' sides are hatched; the accent is the longship's sail.
 */
const LORDSPORT: Stroke[] = [
  { d: 'M14 132 V108 L26 98 L38 108 V132 M40 132 V112 L50 104 L60 112 V132' },
  { d: 'M10 132 H70 V146' },
  { d: 'M18 140 h10 M38 138 h10 M54 142 h8', role: 'soft' },
  ...moved(SHIP_HULL, 'translate(110 142) scale(1.6)'),
  { d: SAIL, role: 'accent', transform: 'translate(110 142) scale(1.6)' },
  { d: 'M30 116 l5 -3 M54 118 l5 -3', role: 'ambient' },
  ...SEA,
]

/**
 * The Stony Shore: fishing huts on a beach of stones under a rocky
 * headland, with a boat drawn up and a longship on the sea, for the
 * villages Balon sends Theon to raid in episode 13 and that Theon raids in
 * Theon III (chapter 111). The huts' sides are hatched; the accent is the
 * raider's sail.
 */
const STONY_SHORE: Stroke[] = [
  { d: 'M10 120 L28 110 L40 118 L56 106 L64 136' },
  {
    d: 'M74 136 V118 L86 108 L98 118 V136 M104 136 V122 L114 114 L124 122 V136',
  },
  { d: 'M10 138 Q80 132 150 140' },
  { d: 'M24 146 q4 -4 8 0 M46 148 q4 -4 8 0 M118 148 q4 -4 8 0', role: 'soft' },
  { d: 'M26 134 Q40 140 56 132', role: 'soft' },
  { d: 'M116 64 H144 Q146 78 144 92 H116 Q114 78 116 64 Z', role: 'accent' },
  { d: 'M108 98 Q130 106 152 98 L154 92 M108 98 L106 92 M130 100 V60' },
  { d: 'M84 100 H150', role: 'ambient' },
  { d: 'M92 122 l4 -2 M118 126 l4 -2', role: 'ambient' },
  ...SEA,
]

/**
 * Bitterbridge: the long stone bridge over the river below the castle, with
 * the tents of Renly's host at either end, for the camp Catelyn reaches in
 * Catelyn II (chapter 96); the show's camp is unnamed. The towers' sides
 * are hatched; the accent is the bridge.
 */
const BITTERBRIDGE: Stroke[] = [
  { d: 'M56 96 V64 H72 V96 M88 96 V58 H104 V96 M72 80 H88' },
  {
    d: 'M56 64 V58 H62 V64 M66 64 V58 H72 V64 M88 58 V52 H94 V58 M98 58 V52 H104 V58',
    role: 'soft',
  },
  {
    d: 'M10 104 H150 M10 128 Q24 108 38 128 Q52 108 66 128 Q80 108 94 128 Q108 108 122 128 Q136 108 150 128',
    role: 'accent',
  },
  { d: 'M38 128 V104 M66 128 V104 M94 128 V104 M122 128 V104', role: 'soft' },
  {
    d: 'M10 140 q10 -4 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
  { d: 'M14 96 L22 84 L30 96 M124 96 L132 84 L140 96', role: 'soft' },
  { d: 'M98 66 l5 -3 M98 80 l5 -3', role: 'ambient' },
]

/**
 * Storm's End: the one great drum tower behind its high curtain wall on the
 * cliff over the sea, for the castle Stannis besieges in Catelyn III
 * (chapter 105). The tower's far side is hatched; the accent is the tower.
 */
const STORMS_END: Stroke[] = [
  { d: 'M14 132 V104 H52 M108 104 H146 V132' },
  {
    d: 'M14 104 V98 H20 V104 M26 104 V98 H32 V104 M128 104 V98 H134 V104 M140 104 V98 H146 V104',
    role: 'soft',
  },
  { d: 'M52 104 V48 Q80 40 108 48 V104 M52 48 Q80 56 108 48', role: 'accent' },
  {
    d: 'M56 46 V40 H64 V45 M76 44 V38 H84 V44 M96 45 V40 H104 V46',
    role: 'soft',
  },
  { d: 'M72 132 V118 Q80 110 88 118 V132' },
  { d: 'M10 150 L14 132 H146 L150 150' },
  { d: 'M100 62 l5 -3 M100 78 l5 -3 M100 94 l5 -3', role: 'ambient' },
  ...SEA,
]

/**
 * Oxcross: a river ford beside a village's houses, with a torn tent and
 * the winner's banner over the field, for the camp Robb destroys in
 * episode 14, named in Sansa III (chapter 106). The houses' sides are
 * hatched; the accent is the banner.
 */
const OXCROSS: Stroke[] = [
  { d: 'M18 128 V108 L30 98 L42 108 V128 M46 128 V112 L56 104 L66 112 V128' },
  { d: 'M10 136 Q80 130 150 138 M10 148 Q80 142 150 150', role: 'ambient' },
  { d: 'M70 140 h6 M84 141 h6 M98 142 h6', role: 'soft' },
  { d: 'M84 128 L94 112 L104 128 M94 112 L98 122', role: 'soft' },
  { d: 'M118 134 V70' },
  { d: 'M118 72 H144 L136 80 L144 88 H118', role: 'accent' },
  { d: 'M36 112 l5 -3 M60 116 l5 -3', role: 'ambient' },
]

/**
 * The Garden of Bones: a traveller's ribs and bones in the sand before the
 * far walls of Qarth, for the desert the khalasar waits in, which Jorah
 * names in episode 14; the books have no such place. The towers are
 * hatched; the accent is the ribcage.
 */
const GARDEN_OF_BONES: Stroke[] = [
  { d: 'M10 96 H30 V72 H44 V96 H116 V72 H130 V96 H150' },
  { d: 'M70 96 V82 Q80 72 90 82 V96', role: 'soft' },
  { d: 'M10 124 Q40 112 70 120 Q110 108 150 122' },
  {
    d: 'M48 146 Q70 138 92 146 M56 143 q-2 -10 4 -14 M66 141 q-2 -12 4 -16 M76 141 q0 -12 6 -15 M86 143 q2 -10 6 -12',
    role: 'accent',
  },
  {
    d: 'M104 148 l22 -6 M102 146 l-1 4 M126 142 l2 -4 M22 146 l16 4',
    role: 'soft',
  },
  {
    d: 'M38 80 l4 -2 M38 90 l4 -2 M124 80 l4 -2 M124 90 l4 -2',
    role: 'ambient',
  },
  GROUND,
]

/** A clay jar, at the origin's left, for the alchemists' vaults. */
const JAR = 'M34 112 H46 M36 112 V118 Q24 128 30 146 H50 Q56 128 44 118 V112'

/**
 * The Guildhall of the Alchemists: jars of wildfire under the vaults'
 * arches, as Hallyne shows them to Tyrion in episode 15 and in Tyrion V
 * (chapter 94). The vault's inner curves are hatched; the accent is the
 * green fire in the middle jar.
 */
const GUILDHALL_OF_THE_ALCHEMISTS: Stroke[] = [
  { d: 'M10 150 V70 Q45 40 80 70 Q115 40 150 70 V150 M80 70 V100' },
  { d: JAR },
  { d: JAR, transform: 'translate(40 0)' },
  { d: JAR, transform: 'translate(80 0)' },
  { d: 'M68 132 q6 -4 12 0 t10 0', role: 'accent' },
  {
    d: 'M20 76 l5 -3 M20 90 l5 -3 M130 76 l5 -3 M130 90 l5 -3',
    role: 'ambient',
  },
  { d: 'M10 150 H150', role: 'ambient', dashed: true },
]

/**
 * The Fist of the First Men: a steep bare hill with the stones of the old
 * ring wall on its crown, for the hill the ranging camps on in episode 15
 * and in Jon IV (chapter 108). The far flank is hatched; the accent is the
 * ring of stones.
 */
const FIST_OF_THE_FIRST_MEN: Stroke[] = [
  { d: 'M10 150 Q30 146 44 110 L60 76 H100 L116 110 Q130 146 150 150' },
  {
    d: 'M58 76 V68 h8 V76 M72 76 V64 h8 V76 M86 76 V66 h8 V76 M98 76 V70 h4',
    role: 'accent',
  },
  { d: 'M44 120 l8 -4 M108 116 l6 4 M36 136 l8 -2', role: 'soft' },
  { d: 'M110 96 l6 -3 M116 112 l6 -3 M122 128 l6 -3', role: 'ambient' },
  shadow(80, 156, 66),
]

/**
 * The Skirling Pass: a narrow way climbing between two snowy peaks, with
 * the wind through it and the wildling watchers' fire at its head, for the
 * pass Qhorin's party climbs in episode 16 and in Jon VI (chapter 125). The
 * peaks' far faces are hatched; the accent is the watchers' fire.
 */
const SKIRLING_PASS: Stroke[] = [
  { d: 'M10 150 L44 60 L66 114 M94 114 L118 50 L150 150' },
  { d: 'M36 82 L44 74 L52 82 M110 70 L118 62 L126 72', role: 'soft' },
  { d: 'M66 114 Q80 126 94 114' },
  { d: 'M80 150 Q70 138 80 128 Q88 122 80 118', role: 'soft' },
  { d: 'M80 110 q-5 -6 -1 -12 q2 4 4 2 q4 6 -3 10', role: 'accent' },
  {
    d: 'M54 96 l5 -3 M58 108 l5 -3 M128 84 l5 -3 M134 102 l5 -3',
    role: 'ambient',
  },
  { d: 'M68 70 q8 -3 14 0 M72 80 q6 -2 10 0', role: 'soft' },
]

/**
 * Blackwater Bay: the city's walled hill over the river's mouth, with
 * Stannis's fleet on the bay, as it sails in in episode 18 and in Davos
 * III (chapter 132). The hill is hatched; the accent is the lead ship's
 * sail.
 */
const BLACKWATER_BAY: Stroke[] = [
  { d: 'M10 104 Q24 70 54 70 Q76 76 86 104 Q118 100 150 106' },
  {
    d: 'M24 86 V76 H32 V82 M42 74 V62 H50 V72 M60 76 V68 H68 V80',
    role: 'soft',
  },
  ...moved(SHIP_HULL, 'translate(50 140)'),
  { d: SAIL, role: 'accent', transform: 'translate(50 140)' },
  ...moved(SHIP_HULL, 'translate(96 136)'),
  { d: SAIL, role: 'soft', transform: 'translate(96 136)' },
  ...moved(SHIP_HULL, 'translate(134 144) scale(0.8)'),
  { d: 'M20 98 l5 -3 M70 90 l5 -3', role: 'ambient' },
  ...SEA,
]

/**
 * The House of the Undying: the warlocks' tall round tower with no door,
 * as Daenerys finds it in episode 20, named in episode 15 and entered in
 * Daenerys IV (chapter 122). Its far side is hatched; the accent is its
 * crown.
 */
const HOUSE_OF_THE_UNDYING: Stroke[] = [
  { d: 'M60 150 V60 M100 60 V150' },
  {
    d: 'M60 60 Q80 70 100 60 M60 60 Q64 40 80 34 Q96 40 100 60',
    role: 'accent',
  },
  {
    d: 'M60 84 Q80 92 100 84 M60 108 Q80 116 100 108 M60 132 Q80 140 100 132',
    role: 'soft',
  },
  {
    d: 'M92 74 l5 -3 M92 98 l5 -3 M92 122 l5 -3 M92 144 l5 -3',
    role: 'ambient',
  },
  { d: 'M14 150 V136 H44 M116 136 H146 V150', role: 'soft' },
  shadow(80, 156, 50),
]

/**
 * Torrhen's Square: a stone keep between four towers behind its wall, on
 * the shore of its lake, named in episode 11 and in Bran II (chapter 90)
 * and never visited in the stage. The towers' far faces are hatched; the
 * accent is the gate.
 */
const TORRHENS_SQUARE: Stroke[] = [
  { d: 'M22 132 V76 H40 V132 M120 132 V76 H138 V132' },
  { d: 'M40 132 V96 H120 V132' },
  {
    d: 'M22 76 V70 H28 V76 M34 76 V70 H40 V76 M120 76 V70 H126 V76 M132 76 V70 H138 V76',
    role: 'soft',
  },
  {
    d: 'M60 96 V62 H100 V96 M60 62 V56 H68 V62 M76 62 V56 H84 V62 M92 62 V56 H100 V62',
  },
  { d: 'M70 132 V114 H90 V132', role: 'accent' },
  { d: 'M40 104 H60 M100 104 H120 M44 116 H64 M96 116 H116', role: 'soft' },
  {
    d: 'M130 86 l5 -3 M130 100 l5 -3 M130 114 l5 -3 M92 70 l5 -3 M92 84 l5 -3',
    role: 'ambient',
  },
  { d: 'M10 132 H150' },
  {
    d: 'M10 142 q10 -4 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0',
    role: 'ambient',
    dashed: true,
  },
  {
    d: 'M24 152 q8 -3 16 0 M72 154 q8 -3 16 0 M118 152 q8 -3 16 0',
    role: 'ambient',
  },
]

/**
 * Deepwood Motte: a wooden hall inside a palisade on top of its mound,
 * pines at either side, for the castle Balon sends his daughter to take in
 * episode 13 and in Theon II (chapter 98). The mound's far side is hatched;
 * the accent is the palisade.
 */
const DEEPWOOD_MOTTE: Stroke[] = [
  { d: 'M24 150 Q40 108 80 104 Q120 108 136 150' },
  {
    d: 'M44 112 V84 M52 108 V80 M60 106 V78 M68 105 V77 M76 104 V76 M84 104 V76 M92 105 V77 M100 106 V78 M108 108 V80 M116 112 V84',
    role: 'accent',
  },
  { d: 'M62 77 V58 H98 V77 M58 60 L80 44 L102 60' },
  { d: 'M66 64 H94 M66 70 H94', role: 'soft' },
  { d: 'M10 150 L20 120 L30 150 M130 150 L140 116 L150 150', role: 'soft' },
  { d: 'M20 120 V114 M140 116 V110', role: 'soft' },
  {
    d: 'M112 124 l6 -3 M118 136 l6 -3 M124 146 l6 -3 M90 52 l5 -3',
    role: 'ambient',
  },
  GROUND,
  shadow(80, 158, 60),
]

/**
 * The Dreadfort: two dark towers either side of the gate, with the flayed
 * man's banner over it, named in episode 16 and in Bran II (chapter 90) and
 * never visited in the stage. The towers are hatched all over, for their
 * dark stone; the accent is the banner.
 */
const DREADFORT: Stroke[] = [
  { d: 'M24 150 V80 H48 V150 M112 150 V80 H136 V150' },
  { d: 'M48 150 V100 H112 V150' },
  {
    d: 'M24 80 V74 H30 V80 M36 80 V74 H42 V80 M112 80 V74 H118 V80 M124 80 V74 H130 V80',
    role: 'soft',
  },
  { d: 'M70 150 V128 Q80 118 90 128 V150' },
  { d: 'M80 100 V36' },
  { d: 'M80 38 H106 V68 H80', role: 'accent' },
  {
    d: 'M93 47 V58 M87 49 L93 52 L99 49 M89 64 L93 58 L97 64 M93 43 V43.1',
    role: 'soft',
  },
  {
    d: 'M38 90 l6 -3 M38 104 l6 -3 M38 118 l6 -3 M38 132 l6 -3 M126 90 l6 -3 M126 104 l6 -3 M126 118 l6 -3 M126 132 l6 -3 M56 112 l6 -3 M100 112 l6 -3 M100 128 l6 -3',
    role: 'ambient',
  },
  GROUND,
  shadow(80, 158, 70),
]

/**
 * Seagard: a tall bell tower between the castle's walls on the shore, named
 * in episode 20 and in Catelyn I (chapter 81) and never visited in the
 * stage. The tower's far side is hatched; the accent is the bell.
 */
const SEAGARD: Stroke[] = [
  { d: 'M12 136 V108 H62 V136 M104 136 V112 H148 V136' },
  {
    d: 'M62 136 V42 H104 V136 M62 42 V36 H70 V42 M78 42 V36 H88 V42 M96 42 V36 H104 V42',
  },
  { d: 'M74 52 Q83 46 92 52 V68 H74 Z M83 68 V72', role: 'accent' },
  {
    d: 'M12 108 V102 H18 V108 M26 108 V102 H32 V108 M120 112 V106 H126 V112 M134 112 V106 H140 V112',
    role: 'soft',
  },
  { d: 'M76 136 V120 Q83 112 90 120 V136', role: 'soft' },
  {
    d: 'M96 80 l5 -3 M96 96 l5 -3 M96 112 l5 -3 M140 118 l5 -3',
    role: 'ambient',
  },
  { d: 'M8 136 H152 L150 146 H10 Z' },
  ...SEA,
]

/**
 * Ashemark: two towers and a gate on a hilltop, a banner over them, named
 * in episode 20 and in Bran V (chapter 109) and never visited in the
 * stage. The tower's far side is hatched; the accent is the banner.
 */
const ASHEMARK: Stroke[] = [
  {
    d: 'M10 150 Q34 118 58 124 Q80 104 104 122 Q128 112 150 150',
    role: 'soft',
  },
  { d: 'M50 118 V78 H70 V112 M90 108 V70 H110 V120' },
  { d: 'M70 112 V92 H90 V108' },
  {
    d: 'M50 78 V72 H56 V78 M64 78 V72 H70 V78 M90 70 V64 H96 V70 M104 70 V64 H110 V70',
    role: 'soft',
  },
  { d: 'M100 64 V30' },
  { d: 'M100 32 H124 L118 40 L124 48 H100', role: 'accent' },
  { d: 'M74 108 V100 Q80 94 86 100 V108', role: 'soft' },
  { d: 'M104 80 l5 -3 M104 94 l5 -3 M104 108 l5 -3', role: 'ambient' },
  GROUND,
]

/**
 * The Crag: towers on a great rock over the sea, for the castle Robb goes
 * to in episode 18, named in Catelyn VII (chapter 129). The rock's far side
 * is hatched; the accent is the lit windows.
 */
const THE_CRAG: Stroke[] = [
  { d: 'M10 150 L26 112 Q40 96 52 92 L72 88 Q96 90 108 108 L120 150' },
  { d: 'M44 92 V62 H64 V88 M64 74 H88 V89 M88 89 V56 H104 V100' },
  {
    d: 'M44 62 V56 H50 V62 M58 62 V56 H64 V62 M88 56 V50 H94 V56 M98 56 V50 H104 V56',
    role: 'soft',
  },
  { d: 'M52 72 V80 M94 64 V72', role: 'accent' },
  {
    d: 'M96 116 l6 -3 M102 128 l6 -3 M108 140 l6 -3 M98 78 l5 -3',
    role: 'ambient',
  },
  { d: 'M30 132 Q40 120 38 108 M66 112 Q76 104 86 110', role: 'soft' },
  { d: 'M126 128 q8 -4 16 0 M130 136 q6 -3 12 0', role: 'soft' },
  ...SEA,
]

/**
 * Flea Bottom: crooked hovels along a lane, a pot steaming over a fire
 * between them, for the district named in episode 11 and in Arya I
 * (chapter 75). The houses' sides are hatched; the accent is the steam.
 */
const FLEA_BOTTOM: Stroke[] = [
  { d: 'M10 150 V104 L24 92 L38 104 V150 M38 150 V112 L50 100 L62 112 V150' },
  {
    d: 'M98 150 V110 L112 98 L126 110 V150 M126 150 V100 L138 90 L150 100 V150',
  },
  { d: 'M24 92 L30 80 M112 98 L118 84 M30 80 V74 M118 84 V78', role: 'soft' },
  { d: 'M66 132 H94 L90 150 H70 Z' },
  {
    d: 'M72 128 q-4 -8 2 -14 q-4 -8 2 -14 M86 128 q-4 -8 2 -14',
    role: 'accent',
  },
  {
    d: 'M70 154 L66 160 M90 154 L94 160 M74 152 l4 -6 l4 6 l4 -6',
    role: 'soft',
  },
  { d: 'M18 120 h8 M46 124 h8 M106 124 h8 M134 116 h8', role: 'soft' },
  {
    d: 'M30 132 l5 -3 M54 136 l5 -3 M118 136 l5 -3 M142 130 l5 -3',
    role: 'ambient',
  },
  GROUND,
]

/**
 * Highgarden: walls and towers under the Tyrells' banner of the rose, with
 * rose bushes before the walls, named in episode 13 and in Davos I
 * (chapter 84) and never visited in the stage. The towers' far faces are
 * hatched; the accent is the rose.
 */
const HIGHGARDEN: Stroke[] = [
  { d: 'M20 150 V108 H40 V150 M120 150 V108 H140 V150 M40 150 V122 H120 V150' },
  { d: 'M62 122 V76 H98 V122' },
  {
    d: 'M20 108 V102 H26 V108 M34 108 V102 H40 V108 M120 108 V102 H126 V108 M134 108 V102 H140 V108 M62 76 V70 H68 V76 M77 76 V70 H83 V76 M92 76 V70 H98 V76',
    role: 'soft',
  },
  { d: 'M72 150 V134 Q80 126 88 134 V150' },
  { d: 'M80 70 V24' },
  { d: 'M80 26 H112 V54 H80', role: 'soft' },
  {
    d: 'M96 34 q-6 2 -5 7 q-4 5 2 8 q4 3 8 -1 q6 -2 4 -8 q-1 -6 -9 -6 Z M96 38 q-3 2 0 5 q3 1 3 -3',
    role: 'accent',
  },
  {
    d: 'M10 150 Q16 140 22 150 M138 150 Q144 140 150 150 M44 150 Q50 140 56 150 M104 150 Q110 140 116 150',
    role: 'soft',
  },
  {
    d: 'M130 116 l5 -3 M130 130 l5 -3 M90 86 l5 -3 M90 102 l5 -3',
    role: 'ambient',
  },
  GROUND,
]

/**
 * Tarth: an island's mountains over the sea, a waterfall down their side
 * and a small castle on the shore, named in the prologue (chapter 74) and
 * in episode 13. The far slopes are hatched; the accent is the waterfall.
 */
const TARTH: Stroke[] = [
  {
    d: 'M10 140 Q22 112 40 104 L58 80 L74 98 L92 70 L112 100 Q134 110 150 140',
  },
  { d: 'M84 84 Q80 104 86 124 Q90 134 86 140', role: 'accent' },
  { d: 'M50 88 L58 80 L66 90 M86 78 L92 70 L98 80', role: 'soft' },
  {
    d: 'M26 112 V98 H40 V108 M26 98 V94 H31 V98 M35 98 V94 H40 V98',
    role: 'soft',
  },
  {
    d: 'M104 98 l5 -3 M112 108 l5 -3 M124 118 l6 -3 M132 128 l6 -3',
    role: 'ambient',
  },
  { d: 'M40 126 Q60 118 76 124 M100 124 Q116 118 132 128', role: 'soft' },
  ...SEA,
]

/**
 * Lorath: a walled city's pointed towers on an island, a ship on the sea
 * before it, for the Free City Jaqen says he comes from in episode 12 and
 * in the book by Arya IX (chapter 121). The far slope is hatched; the
 * accent is the towers' roofs.
 */
const LORATH: Stroke[] = [
  { d: 'M10 140 Q20 116 40 112 H102 Q114 118 116 140' },
  { d: 'M30 112 V88 H50 V112 M56 112 V72 H74 V112 M80 112 V82 H100 V112' },
  {
    d: 'M56 72 L65 58 L74 72 M30 88 L40 78 L50 88 M80 82 L90 70 L100 82',
    role: 'accent',
  },
  { d: 'M62 86 h6 M36 98 h8 M86 96 h8', role: 'soft' },
  {
    d: 'M68 96 l4 -2 M92 104 l4 -2 M104 124 l5 -3 M108 132 l5 -3',
    role: 'ambient',
  },
  ...moved(SHIP_HULL, 'translate(134 156)'),
  { d: SAIL, role: 'soft', transform: 'translate(134 156)' },
  ...SEA,
]

/**
 * The Summer Isles: two islands with palm trees and a ship between them,
 * named in the prologue (chapter 74) and in episode 18, by Varys. The
 * trunks are hatched; the accent is the palms' fronds.
 */
const SUMMER_ISLES: Stroke[] = [
  {
    d: 'M10 142 Q24 112 50 110 Q72 112 84 142 M118 142 Q126 124 140 124 Q148 128 152 142',
  },
  { d: 'M40 112 Q42 90 50 72 M134 124 Q134 108 138 96' },
  {
    d: 'M50 72 Q36 66 28 74 M50 72 Q44 58 32 58 M50 72 Q62 60 72 64 M50 72 Q66 72 70 84 M138 96 Q128 88 120 94 M138 96 Q146 86 154 90 M138 96 Q140 82 134 78',
    role: 'accent',
  },
  {
    d: 'M44 98 l5 -2 M47 86 l4 -2 M135 112 l4 -2 M66 128 l6 -3',
    role: 'ambient',
  },
  ...moved(SHIP_HULL, 'translate(100 158) scale(0.9)'),
  { d: SAIL, role: 'soft', transform: 'translate(100 158) scale(0.9)' },
  { d: 'M22 132 Q42 126 64 132', role: 'soft' },
  ...SEA,
]

/**
 * Oldtown: the Hightower, a tall stepped tower with a beacon burning at its
 * top over the city's roofs, named in episode 11 and in the prologue
 * (chapter 74) and never visited in the stage. The tiers' far sides are
 * hatched; the accent is the beacon.
 */
const OLDTOWN: Stroke[] = [
  { d: 'M50 150 V112 H110 V150 M58 112 V84 H102 V112' },
  { d: 'M64 84 V58 H96 V84 M70 58 V36 H90 V58' },
  { d: 'M74 36 V28 H86 V36', role: 'soft' },
  { d: 'M80 28 q-6 -6 -2 -14 q2 5 4 2 q5 6 -2 12', role: 'accent' },
  { d: 'M76 70 h8 M72 96 h16 M64 128 h32', role: 'soft' },
  {
    d: 'M14 150 V132 L24 124 L34 132 V150 M126 150 V128 L136 120 L146 128 V150',
  },
  {
    d: 'M102 120 l5 -3 M102 136 l5 -3 M94 92 l5 -3 M88 66 l5 -3 M86 46 l4 -2',
    role: 'ambient',
  },
  GROUND,
  shadow(80, 158, 70),
]

/**
 * The first season's places (#1053), the ones it only names (#1035), and
 * the second stage's visited places (#1469) and named ones (#1476), keyed
 * by record id.
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
  'casterly-rock': CASTERLY_ROCK,
  'lannisport': LANNISPORT,
  'harrenhal': HARRENHAL,
  'the-fingers': THE_FINGERS,
  'the-trident': THE_TRIDENT,
  'tumblestone': TUMBLESTONE,
  'golden-tooth': GOLDEN_TOOTH,
  'red-fork': RED_FORK,
  'gods-eye': GODS_EYE,
  'asshai': ASSHAI,
  'valyria': VALYRIA,
  'braavos': BRAAVOS,
  'myr': MYR,
  'tyrosh': TYROSH,
  'qohor': QOHOR,
  'volantis': VOLANTIS,
  'lys': LYS,
  'qarth': QARTH,
  'mother-of-mountains': MOTHER_OF_MOUNTAINS,
  'narrow-sea': NARROW_SEA,
  'the-citadel': THE_CITADEL,
  'horn-hill': HORN_HILL,
  'dragonstone': DRAGONSTONE,
  'the-arbor': THE_ARBOR,
  'street-of-the-sisters': STREET_OF_THE_SISTERS,
  'street-of-steel': STREET_OF_STEEL,
  'mountains-of-the-moon': MOUNTAINS_OF_THE_MOON,
  'green-fork': GREEN_FORK,
  'gates-of-the-moon': GATES_OF_THE_MOON,
  'western-market': WESTERN_MARKET,
  'womb-of-the-world': WOMB_OF_THE_WORLD,
  'whispering-wood': WHISPERING_WOOD,
  'crasters-keep': CRASTERS_KEEP,
  'red-waste': RED_WASTE,
  'whitetree': WHITETREE,
  'vaes-tolorro': VAES_TOLORRO,
  'lordsport': LORDSPORT,
  'stony-shore': STONY_SHORE,
  'bitterbridge': BITTERBRIDGE,
  'storms-end': STORMS_END,
  'oxcross': OXCROSS,
  'garden-of-bones': GARDEN_OF_BONES,
  'guildhall-of-the-alchemists': GUILDHALL_OF_THE_ALCHEMISTS,
  'fist-of-the-first-men': FIST_OF_THE_FIRST_MEN,
  'skirling-pass': SKIRLING_PASS,
  'blackwater-bay': BLACKWATER_BAY,
  'house-of-the-undying': HOUSE_OF_THE_UNDYING,
  'torrhens-square': TORRHENS_SQUARE,
  'deepwood-motte': DEEPWOOD_MOTTE,
  'dreadfort': DREADFORT,
  'seagard': SEAGARD,
  'ashemark': ASHEMARK,
  'the-crag': THE_CRAG,
  'flea-bottom': FLEA_BOTTOM,
  'highgarden': HIGHGARDEN,
  'tarth': TARTH,
  'lorath': LORATH,
  'summer-isles': SUMMER_ISLES,
  'oldtown': OLDTOWN,
} satisfies Drawings

/** Smoke rising from a ruin: two curls. */
const smokeAt = (x: number, y: number): string =>
  `M${String(x)} ${String(y)} q-6 -8 2 -16 q-6 -8 2 -16 `
  + `M${String(x + 14)} ${String(y + 6)} q-4 -6 2 -12 q-4 -6 2 -12`

/** Winterfell after the sack: the towers and keep broken, the gate burned out. */
const WINTERFELL_BURNED: Stroke[] = [
  {
    d: 'M20 150 V90 L26 84 L32 92 L40 86 M120 86 L128 94 L134 84 L140 90 V150 M40 150 V86 M120 150 V86',
  },
  { d: 'M40 150 V104 H56 L60 112 L66 104 H120 V150' },
  { d: 'M60 104 V66 L68 60 L74 70 L82 58 L90 68 L96 62 V104' },
  { d: 'M70 150 V130 Q80 120 90 130 V150' },
  { d: 'M74 146 l8 -6 M74 138 l10 -8 M78 150 l8 -6', role: 'ambient' },
  { d: 'M108 104 Q106 84 112 70 M110 86 Q118 80 122 74', role: 'soft' },
  {
    d: 'M100 70 q2 -10 12 -8 q6 -8 14 0 q8 2 4 10 q4 8 -6 8 q-6 6 -14 0 q-10 0 -10 -10 Z',
    role: 'accent',
  },
  { d: smokeAt(70, 56), role: 'soft' },
  {
    d: 'M134 100 l5 -3 M134 114 l5 -3 M134 128 l5 -3 M90 76 l5 -3 M90 90 l5 -3',
    role: 'ambient',
  },
  shadow(80, 156, 64),
]

/** Winterfell after the battle with the dead: a breach in the wall, the gate smashed. */
const WINTERFELL_BREACHED: Stroke[] = [
  { d: 'M20 150 V82 H40 V150 M120 150 V82 H140 V150' },
  { d: 'M20 82 V76 H25 V82 M130 82 V76 H135 V82', role: 'soft' },
  {
    d: 'M40 150 V104 H50 L56 118 L62 110 M100 112 L106 120 L112 104 H120 V150 M40 150 H120',
  },
  { d: 'M60 104 V58 H96 V104 M60 58 V52 H66 V58 M84 58 V52 H90 V58' },
  {
    d: 'M70 150 V130 Q80 120 90 130 V150 M74 150 L84 128 M88 150 L80 138',
    role: 'soft',
  },
  { d: 'M108 104 Q106 84 112 70 M110 86 Q118 80 122 74', role: 'soft' },
  {
    d: 'M100 70 q2 -10 12 -8 q6 -8 14 0 q8 2 4 10 q4 8 -6 8 q-6 6 -14 0 q-10 0 -10 -10 Z',
    role: 'accent',
  },
  { d: 'M62 118 l6 4 M68 112 l6 4 M94 116 l6 4', role: 'soft' },
  {
    d: 'M134 92 l5 -3 M134 106 l5 -3 M134 120 l5 -3 M90 66 l5 -3 M90 80 l5 -3',
    role: 'ambient',
  },
  shadow(80, 156, 64),
]

/** The winter town burned: roofless frames and fallen beams under the wall. */
const WINTER_TOWN_BURNED: Stroke[] = [
  {
    d: 'M10 78 H150 M10 78 V72 H16 V78 M28 78 V72 H34 V78 M108 78 V72 H114 V78 M126 78 V72 H132 V78',
    role: 'soft',
  },
  {
    d: 'M20 150 V120 M52 150 V124 M20 120 L32 112 M58 150 V114 M98 150 V118 M58 114 L72 104',
  },
  { d: 'M104 150 V122 M136 150 V128 M104 122 L116 114', role: 'soft' },
  { d: 'M70 150 V136 M86 150 V140 M66 150 L90 140', role: 'accent' },
  { d: 'M24 150 L40 140 M110 150 L128 142', role: 'soft' },
  { d: smokeAt(78, 98), role: 'soft' },
  { d: 'M92 130 l5 -3 M92 142 l5 -3 M130 136 l5 -3', role: 'ambient' },
  shadow(78, 156, 62),
]

/** Darry burned: the keep and the gatehouse broken, smoke over them. */
const DARRY_BURNED: Stroke[] = [
  { d: 'M88 150 V60 L96 52 L102 62 L110 50 L120 58 V150' },
  { d: 'M24 150 V104 H88' },
  { d: 'M30 150 V98 L38 92 L44 100 L52 90 L62 96 V150' },
  { d: 'M38 150 V132 Q46 122 54 132 V150', role: 'accent' },
  { d: 'M42 146 l8 -6 M42 138 l8 -6', role: 'ambient' },
  { d: smokeAt(100, 46), role: 'soft' },
  {
    d: 'M114 70 l5 -3 M114 86 l5 -3 M114 102 l5 -3 M114 118 l5 -3 M114 134 l5 -3',
    role: 'ambient',
  },
  GROUND,
  shadow(76, 156, 58),
]

/**
 * Blackwater Bay after the wildfire: the same walled hill, untouched, and
 * Stannis's ships burned down to the waterline, their masts broken, smoke
 * on the water. The accent is the lead ship's torn sail.
 */
const BLACKWATER_BAY_BURNED: Stroke[] = [
  ...BLACKWATER_BAY.slice(0, 2),
  { d: 'M34 140 Q50 147 66 140 M50 143 V124 L56 116' },
  {
    d: 'M51 124 L62 122 L59 129 L63 133 L56 134 L58 138 L51 137 Z',
    role: 'accent',
  },
  { d: 'M80 136 Q96 143 112 136 M96 139 V124 L92 119' },
  { d: 'M121 144 Q134 150 147 144 M134 146 V138', role: 'soft' },
  {
    d: 'M40 142 l3 -3 M60 142 l3 -3 M86 139 l3 -3 M104 139 l3 -3 M128 146 l3 -3',
    role: 'ambient',
  },
  { d: `${smokeAt(98, 116)} ${smokeAt(128, 132)}`, role: 'soft' },
  { d: 'M20 98 l5 -3 M70 90 l5 -3', role: 'ambient' },
  ...SEA,
]

/**
 * The House of the Undying burning: the same tower with no door, smoke
 * pouring up from its crown, the crown and the walls under it scorched
 * and hatched. The accent stays on the crown.
 */
const HOUSE_OF_THE_UNDYING_BURNING: Stroke[] = [
  ...HOUSE_OF_THE_UNDYING.slice(0, 3),
  {
    d: 'M66 54 l6 -8 M76 50 l6 -10 M86 52 l6 -8 M66 74 l6 -6 M78 76 l6 -6 M66 98 l5 -5',
    role: 'ambient',
  },
  ...HOUSE_OF_THE_UNDYING.slice(4, 5),
  { d: `${smokeAt(76, 30)} ${smokeAt(96, 40)}`, role: 'soft' },
  shadow(80, 156, 50),
]

/** Mole's Town after the raid: cold huts, no smoke, a door hanging open. */
const MOLES_TOWN_SACKED: Stroke[] = [
  { d: 'M24 150 V128 L40 114 L56 128 V150' },
  { d: 'M96 150 V124 L114 108 L132 124 V150' },
  { d: 'M60 150 V136 L72 126 L84 136 V150', role: 'soft' },
  {
    d: 'M24 128 Q40 120 56 128 M96 124 Q114 114 132 124 M104 118 L112 126 L120 114',
    role: 'soft',
  },
  { d: 'M36 150 V138 H44 V150', role: 'soft' },
  { d: 'M108 150 V136 L118 140 V152', role: 'accent' },
  { d: 'M50 136 l5 -3 M126 134 l5 -3', role: 'ambient' },
  { d: 'M70 150 L56 176 M90 150 L104 176', role: 'ambient', dashed: true },
  {
    d: 'M10 150 Q40 146 70 150 M90 150 Q120 146 150 150',
    role: 'ambient',
    dashed: true,
  },
]

/** The Great Sept blown apart: broken stumps over a heap of stone on the steps. */
const GREAT_SEPT_DESTROYED: Stroke[] = [
  { d: 'M42 116 Q52 100 62 108 Q72 94 84 104 Q96 92 108 106 Q116 100 118 116' },
  {
    d: 'M26 128 V96 L30 90 L34 98 L36 94 V128 M124 128 V100 L128 94 L132 102 L134 98 V128',
  },
  {
    d: 'M20 150 H140 M26 142 H134 M32 134 H128 M38 126 H122 M38 116 V126 M122 116 V126 M42 116 H118',
  },
  { d: 'M66 116 V108 Q72 102 78 108', role: 'accent' },
  { d: 'M54 112 l4 -3 M92 110 l4 -3 M104 112 l4 -3', role: 'soft' },
  { d: smokeAt(74, 90), role: 'soft' },
  { d: 'M128 108 l5 -3 M128 120 l5 -3', role: 'ambient' },
  shadow(80, 156, 62),
]

/** King's Landing burned: the Red Keep's towers broken, roofs fallen, the wall breached, smoke over the city. */
const KINGS_LANDING_BURNED: Stroke[] = [
  {
    d: 'M56 68 V52 L60 48 L64 54 L68 50 V68 M72 68 V42 L77 36 L80 46 L84 38 L88 44 V68 M92 68 V56 L97 52 L104 58 V68',
    role: 'accent',
  },
  KL_KEEP_GROUND,
  {
    d: 'M46 80 V76 L51 71 L56 76 V80 M68 80 V77 L72 74 L76 78 M93 80 V76 L98 71 L103 76 V80 M30 95 V89 L36 83 L42 89 V95 M55 95 V87 L60 84 L64 88 M83 95 V90 L87 86 L91 90 V95 M118 95 V87 L124 82 L130 87 V95 M16 110 V105 L23 98 L30 105 V110 M44 110 V106 L48 102 L52 105 M76 110 V101 L80.5 95 L85 101 V110 M102 110 V105 L106 101 L110 104 M130 110 V106 L136 98 L142 106 V110',
    role: 'soft',
  },
  { d: 'M14 140 V116 H40 L46 126 L52 116 H98 L104 128 L110 116 H146 V140' },
  { d: `${smokeAt(40, 96)} ${smokeAt(112, 88)}`, role: 'soft' },
  {
    d: 'M83 50 l5 -3 M83 60 l5 -3 M134 124 l6 -3 M134 134 l6 -3',
    role: 'ambient',
  },
  { d: 'M10 140 H150' },
  ...SEA,
]

/** The Red Keep ruined: the curtain wall breached, the keep and towers broken. */
const RED_KEEP_RUINED: Stroke[] = [
  { d: 'M10 150 Q40 118 80 116 Q120 118 150 150' },
  {
    d: 'M34 120 V80 H54 L60 96 L66 88 L72 100 M100 98 L106 86 L112 94 L120 80 H126 V120',
    role: 'accent',
  },
  { d: 'M30 80 V70 L38 66 L46 72 V80 M114 80 V72 L120 66 L130 70 V80' },
  { d: 'M64 80 V52 L72 46 L78 56 L86 44 L96 54 V80' },
  { d: 'M74 112 L80 104 L88 110 L94 104', role: 'soft' },
  { d: smokeAt(80, 40), role: 'soft' },
  {
    d: 'M90 58 l5 -3 M90 70 l5 -3 M118 94 l6 -3 M118 108 l6 -3',
    role: 'ambient',
  },
  { d: 'M10 156 Q80 150 150 156', role: 'ambient', dashed: true },
]

/** The Wall's gate tunnel sealed: rubble packed into the arch. */
const THE_WALL_SEALED: Stroke[] = [
  { d: 'M14 28 L150 106 M14 150 H150 M14 28 V150' },
  { d: 'M14 64 L150 118 M14 104 L150 132', role: 'soft' },
  { d: 'M60 52 L64 80 L58 104 M100 76 L104 96 M126 92 L128 110', role: 'soft' },
  { d: 'M36 150 V128 Q50 112 64 128 V150', role: 'accent' },
  {
    d: 'M38 150 V142 H48 V150 M48 150 V144 H62 V150 M40 142 V134 H54 V142 M54 142 V132 H62 V144 M44 134 Q50 124 58 128',
    role: 'soft',
  },
  { d: 'M10 156 Q60 150 150 156', role: 'ambient', dashed: true },
]

/** Castle Black after the attack: the hall burned to posts, the stair's lower flights broken off. */
const CASTLE_BLACK_BURNED: Stroke[] = [
  { d: 'M10 40 Q46 34 80 38 T150 36', role: 'soft' },
  {
    d: 'M16 44 L20 70 M40 40 L44 64 M140 40 L136 62 M118 38 L116 52',
    role: 'soft',
  },
  { d: 'M96 108 L134 88 L96 68 L134 48', role: 'accent' },
  {
    d: 'M100 150 L110 140 L118 146 L128 136 L134 150 M106 128 l6 -4',
    role: 'soft',
  },
  {
    d: 'M24 150 V86 H62 V150 M24 86 V80 H30 V86 M37 86 V80 H43 V86 M50 86 V80 H56 V86',
  },
  { d: 'M66 150 V124 M90 150 V128 M66 124 L76 118' },
  { d: 'M38 100 V110 M48 100 V110', role: 'soft' },
  { d: 'M54 96 l5 -3 M54 112 l5 -3 M54 128 l5 -3', role: 'ambient' },
  shadow(70, 156, 56),
]

/** Castle Black rebuilding: a new stair going up the ice, scaffold at its foot; the hall still gone. */
const CASTLE_BLACK_REBUILDING: Stroke[] = [
  { d: 'M10 40 Q46 34 80 38 T150 36', role: 'soft' },
  {
    d: 'M16 44 L20 70 M40 40 L44 64 M140 40 L136 62 M118 38 L116 52',
    role: 'soft',
  },
  { d: 'M96 150 L134 128 L96 108 L134 88 L96 68 L134 48', role: 'accent' },
  {
    d: 'M100 150 V128 M112 150 V122 M124 150 V132 M100 136 H124',
    role: 'soft',
  },
  {
    d: 'M24 150 V86 H62 V150 M24 86 V80 H30 V86 M37 86 V80 H43 V86 M50 86 V80 H56 V86',
  },
  { d: 'M66 150 V124 M90 150 V128', role: 'soft' },
  { d: 'M38 100 V110 M48 100 V110', role: 'soft' },
  { d: 'M54 96 l5 -3 M54 112 l5 -3 M54 128 l5 -3', role: 'ambient' },
  shadow(70, 156, 56),
]

/** Eastwatch destroyed: the castle fallen into a heap on the cliff, its tower a stump. */
const EASTWATCH_DESTROYED: Stroke[] = [
  { d: 'M12 140 L28 100 H100 L112 140' },
  { d: 'M38 100 V80 L44 74 L50 82 L56 76 L62 84 V100', role: 'accent' },
  { d: 'M62 100 Q70 90 78 94 Q86 88 92 100' },
  { d: 'M100 108 l6 -3 M104 120 l6 -3 M108 132 l5 -3', role: 'ambient' },
  { d: 'M118 92 q8 -4 16 0 M122 100 q6 -3 12 0', role: 'soft' },
  ...SEA,
]

/**
 * The places later seasons and books destroy, badly damage or rebuild
 * (#1236), each stage pinned in the units that tell it. A show-only stage
 * past the books takes chapter 344, the last, only to order it.
 */
export const placesRedrawn: Redrawings = {
  'winterfell': [
    // Sacked: Ramsay orders Winterfell burned in Theon VI (ACOK 66, site 140).
    { episode: 20, chapter: 140, value: WINTERFELL_BURNED },
    // Rebuilt: the squatters Roose finds raise new gates and a new roof over
    // the Great Hall in "The Prince of Winterfell" (ADWD 37, site 309, Theon).
    { episode: 43, chapter: 309, value: WINTERFELL },
    {
      episode: 70,
      chapter: 344,
      source: 'episode',
      value: WINTERFELL_BREACHED,
    },
  ],
  'winter-town': [
    { episode: 20, chapter: 143, source: 'chapter', value: WINTER_TOWN_BURNED },
  ],
  'darry': [
    // Burned: Roose orders the castle burned in Arya X (ACOK 64, site 138),
    // the first telling. Gregor's earlier sack (Catelyn I, ACOK 7, site 81)
    // kills its people and draws no stage of its own.
    { episode: 20, chapter: 138, value: DARRY_BURNED },
    // Rebuilt: Lancel has set the burned castle to rights in Jaime IV
    // (AFFC 30, site 256).
    { episode: 41, chapter: 256, value: DARRY },
  ],
  'moles-town': [{ episode: 38, chapter: 199, value: MOLES_TOWN_SACKED }],
  // Burned: the wildfire takes Stannis's fleet in "Blackwater" (episode
  // 19) and in Davos III (ACOK 58, site 132), the chapter the bay opens in.
  'blackwater-bay': [
    { episode: 19, chapter: 132, value: BLACKWATER_BAY_BURNED },
  ],
  // Burning, the books alone: Drogon sets the warlocks' chamber on fire and
  // Daenerys flees the burning house in Daenerys IV (ACOK 48, site 122),
  // the chapter its record opens in, so the stage is pinned at the next
  // chapter, 123. The show leaves the house standing; episode 20, its own
  // visit, only orders it.
  'house-of-the-undying': [
    {
      episode: 20,
      chapter: 123,
      source: 'chapter',
      value: HOUSE_OF_THE_UNDYING_BURNING,
    },
  ],
  'great-sept-of-baelor': [
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: GREAT_SEPT_DESTROYED,
    },
  ],
  'kings-landing': [
    {
      episode: 72,
      chapter: 344,
      source: 'episode',
      value: KINGS_LANDING_BURNED,
    },
  ],
  'red-keep': [
    { episode: 72, chapter: 344, source: 'episode', value: RED_KEEP_RUINED },
  ],
  'the-wall': [
    { episode: 39, chapter: 208, source: 'chapter', value: THE_WALL_SEALED },
  ],
  'castle-black': [
    {
      episode: 39,
      chapter: 199,
      source: 'chapter',
      value: CASTLE_BLACK_BURNED,
    },
    {
      episode: 41,
      chapter: 231,
      source: 'chapter',
      value: CASTLE_BLACK_REBUILDING,
    },
  ],
  'eastwatch': [
    {
      episode: 67,
      chapter: 344,
      source: 'episode',
      value: EASTWATCH_DESTROYED,
    },
  ],
}
