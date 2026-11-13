import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Marillion: a round-backed lute lying aslant, its rose, neck and bent-back
 * pegbox, for the singer at the inn who sings for Catelyn and follows her
 * for a song, in episode 4 and in Catelyn V (chapter 29). The book gives
 * him a woodharp; the show is the reference (owner). The back's far side
 * is hatched; the accent is the rose.
 */
const LUTE: Stroke[] = [
  {
    d: 'M34 148 Q16 132 28 110 Q44 86 70 92 Q86 102 80 124 Q72 146 50 152 Q40 154 34 148 Z',
  },
  { d: circle(54, 122, 7), role: 'accent' },
  { d: 'M76 96 L116 52 M84 104 L122 58' },
  { d: 'M116 52 L126 44 L134 52 L122 58' },
  { d: 'M120 48 l-3 -4 M126 46 l2 -4 M128 54 l4 -2', role: 'soft' },
  { d: 'M46 132 L119 54 M50 136 L121 57', role: 'soft' },
  { d: 'M42 132 L54 140', role: 'soft' },
  { d: 'M78 112 l6 -3 M74 124 l6 -3 M66 136 l6 -3', role: 'ambient' },
  shadow(70, 154, 46),
]

/**
 * A heater shield in 3/4 bearing a bat with its wings spread, the arms of
 * House Whent, which Willis Wode is sworn to. The far edge is hatched; the
 * accent is the bat. His first drawing and his death share it.
 */
const BAT_SHIELD: Stroke[] = [
  { d: 'M44 40 H116 V80 Q116 124 80 148 Q44 124 44 80 Z' },
  { d: 'M116 40 L122 44 V82 Q120 126 84 152', role: 'soft' },
  { d: 'M50 46 H110 V80 Q110 118 80 140 Q50 118 50 80 Z', role: 'soft' },
  {
    d: 'M80 76 Q74 70 70 74 Q62 66 52 70 Q58 76 56 84 Q64 80 68 86 Q74 80 80 92 Q86 80 92 86 Q96 80 104 84 Q102 76 108 70 Q98 66 90 74 Q86 70 80 76 Z M77 74 L76 68 L80 72 L84 68 L83 74',
    role: 'accent',
  },
  {
    d: 'M118 56 l5 -3 M118 72 l5 -3 M116 90 l5 -3 M110 108 l5 -3',
    role: 'ambient',
  },
]
/**
 * Willis Wode: his shield, for the knight who draws his sword for Catelyn
 * against Tyrion at the inn, in episode 4 and in Catelyn V (chapter 29).
 */
const WILLIS: Stroke[] = [...BAT_SHIELD, shadow(82, 156, 30)]

/**
 * Donnel Waynwood: the great iron bar across the Bloody Gate's planks in
 * its two brackets, for the knight who keeps the gate and decides who
 * passes, in Catelyn VI (chapter 35) and in episode 35. The planks' far
 * side is hatched; the accent is the bar.
 */
const GATE_BAR: Stroke[] = [
  { d: 'M24 36 V150 M136 36 V150 M24 36 H136', role: 'soft' },
  { d: 'M52 36 V150 M80 36 V150 M108 36 V150', role: 'soft' },
  { d: 'M16 84 H144 V98 H16 Z', role: 'accent' },
  { d: 'M38 76 V106 H50 V76 Z M110 76 V106 H122 V76 Z' },
  {
    d: `M30 56 h0.01 M66 56 h0.01 M94 56 h0.01 M130 56 h0.01 M30 128 h0.01 M66 128 h0.01 M94 128 h0.01 M130 128 h0.01`,
  },
  { d: 'M120 112 l6 -3 M120 124 l6 -3 M120 136 l6 -3', role: 'ambient' },
  shadow(80, 156, 60),
]

/**
 * Nestor Royce: a steward's staff with its bronze boss on a three-footed
 * stand, for the High Steward of the Vale who receives Catelyn at the Gates
 * of the Moon in Catelyn VI (chapter 35). The book's alone. The accent is
 * the boss.
 */
const STAFF: Stroke[] = [
  { d: 'M77 44 V140 M83 44 V140' },
  { d: circle(80, 34, 10), role: 'accent' },
  { d: circle(80, 34, 4), role: 'soft' },
  { d: 'M72 46 H88 M74 52 H86 M75 138 H85 L84 146 H76 Z', role: 'soft' },
  { d: 'M80 146 L64 152 M80 146 L96 152 M80 146 V154', role: 'soft' },
  { d: 'M84 70 l3 -2 M84 90 l3 -2 M84 110 l3 -2', role: 'ambient' },
  shadow(80, 156, 26),
]

/**
 * Mya Stone: a pack mule side on, with no eye, its packs roped on its back,
 * for the girl who takes supplies up to the Eyrie and leads Catelyn up the
 * mountain in Catelyn VI (chapter 35). The book's alone. The accent is the
 * rope over the packs.
 */
const MULE: Stroke[] = [
  { d: 'M52 84 Q80 78 112 84 Q124 88 122 104 L118 110' },
  {
    d: 'M52 84 Q48 74 46 64 L40 48 L46 54 L48 62 L52 48 L54 56 L52 68 Q50 78 40 88 Q30 94 26 90 Q24 84 32 80 Q40 74 46 64',
  },
  { d: 'M40 88 Q48 98 56 108 Q84 116 118 110' },
  { d: 'M60 110 L58 150 M68 112 L68 150 M108 112 L110 150 M116 110 L120 150' },
  { d: 'M122 92 Q132 102 128 118', role: 'soft' },
  { d: 'M68 82 V106 H96 V82 M68 92 H96', role: 'soft' },
  { d: 'M64 80 Q82 70 100 80 M82 76 V108', role: 'accent' },
  { d: 'M100 92 l6 -3 M104 100 l6 -3', role: 'ambient' },
  shadow(88, 154, 42),
]

/**
 * A knight's closed great helm in 3/4, one slit across the visor, the
 * breaths below it and a crescent moon on the brow, for House Arryn. The
 * far side is hatched; the accent is the moon. Vardis Egen's first drawing
 * and his death share it.
 */
const HELM: Stroke[] = [
  { d: 'M50 52 Q80 36 110 52 V110 Q80 122 50 110 Z' },
  { d: 'M56 76 Q80 70 104 76 M56 82 Q80 76 104 82' },
  { d: 'M74 60 Q80 50 90 56 Q82 54 78 62', role: 'accent' },
  { d: 'M88 92 v6 M94 92 v6 M100 90 v6', role: 'soft' },
  { d: 'M52 110 L46 124 Q80 136 114 124 L108 110' },
  { d: 'M102 60 l5 -3 M102 96 l5 -3 M102 106 l5 -3', role: 'ambient' },
]
/**
 * Vardis Egen: his helm, for the armoured captain of the Arryn guard who
 * fights Bronn as Lysa's champion, from Catelyn VI (chapter 35) and named
 * in episode 6.
 */
const VARDIS: Stroke[] = [...HELM, shadow(80, 140, 36)]

/**
 * Mord: a fat leather purse with coins spilt from it at the lip of a sky
 * cell's sloping floor, for the gaoler Tyrion buys with gold in episode 6
 * and in Tyrion V (chapter 39). The leather's far side is hatched; the
 * accent is the coins. Retinted from `wine`: nothing on it is red.
 */
const PURSE: Stroke[] = [
  { d: 'M60 84 Q48 96 52 118 Q56 140 80 142 Q104 140 108 118 Q112 96 100 84' },
  { d: 'M60 84 Q80 92 100 84 M62 74 L60 84 M98 74 L100 84' },
  { d: 'M62 74 Q80 66 98 74 M80 70 Q86 58 96 60', role: 'soft' },
  {
    d: `${ellipse(122, 142, 6, 2.5)} ${ellipse(134, 150, 6, 2.5)} ${ellipse(112, 152, 6, 2.5)} ${ellipse(118, 136, 6, 2.5)}`,
    role: 'accent',
  },
  { d: 'M96 100 l6 -3 M98 112 l6 -3 M96 124 l6 -3', role: 'ambient' },
  { d: 'M10 144 L142 156', role: 'ambient' },
  { d: 'M142 156 V180', role: 'ambient', dashed: true },
]

/**
 * Lyn Corbray: Lady Forlorn, his Valyrian longsword, laid aslant, the
 * ripples down its blade, for the knight eager to be Lysa's champion in
 * Tyrion V (chapter 39). The book's alone. The accent is the ripples.
 * Retinted from `red`: nothing on it is red.
 */
const LADY_FORLORN: Stroke[] = [
  { d: `${circle(38, 136, 5)} M42 132 L54 120 L60 126 L48 138 Z` },
  { d: 'M44 110 L72 138' },
  { d: 'M60 120 L124 40 L130 46 L64 126' },
  {
    d: 'M66 116 q8 -2 8 -10 t8 -10 t8 -10 t8 -10 t8 -10 t8 -10',
    role: 'accent',
  },
  { d: 'M47 128 l4 4 M51 124 l4 4', role: 'soft' },
  { d: 'M70 124 l5 3 M86 104 l5 3 M102 84 l5 3', role: 'ambient' },
  shadow(80, 154, 40),
]

/**
 * Anya Waynwood: the broken wheel of House Waynwood, its rim snapped and a
 * spoke short, for the head of the house at the Eyrie in Tyrion V (chapter
 * 39) and in episode 38. The accent is the broken ends.
 */
const BROKEN_WHEEL: Stroke[] = [
  { d: 'M100 46 A48 48 0 1 1 52 52' },
  { d: 'M96 52 A40 40 0 1 1 56 58', role: 'soft' },
  { d: circle(80, 92, 9) },
  {
    d: 'M80 83 V52 M80 101 V132 M71 92 H40 M89 92 H120 M74 86 L52 64 M86 98 L108 120 M74 98 L52 120 M86 86 L96 76',
    role: 'soft',
  },
  {
    d: 'M100 46 l4 -8 l-6 2 M52 52 l-6 -6 l1 6 M96 76 l4 -2 l-2 -4',
    role: 'accent',
  },
  { d: 'M116 100 l6 -3 M112 114 l6 -3 M104 126 l6 -3', role: 'ambient' },
  shadow(80, 150, 40),
]

/**
 * A double-bitted battle-axe on its haft. The accent is the two edges.
 * Shagga's pair is two of them.
 */
const AXE: Stroke[] = [
  { d: 'M78 32 V150 M82 32 V150' },
  { d: 'M78 40 Q60 30 54 48 Q58 66 78 58 M82 40 Q100 30 106 48 Q102 66 82 58' },
  { d: 'M56 36 Q48 48 56 62 M104 36 Q112 48 104 62', role: 'accent' },
  { d: 'M78 120 L82 124 M78 128 L82 132', role: 'soft' },
]
/**
 * Shagga: his two battle-axes crossed, for the Stone Crow who surrounds
 * Tyrion and Bronn on the high road in episode 8 and in Tyrion VI (chapter
 * 43), and who wants two axes of black steel.
 */
const AXES: Stroke[] = [
  ...moved(AXE, 'rotate(-34 80 96)'),
  ...moved(AXE, 'rotate(34 80 96)'),
  shadow(80, 156, 50),
]

/**
 * Timett: a knife on a hearthstone, heat rising from its blade, for the
 * Burned Men, who burn themselves in their rite (he burned out an eye),
 * in episode 8 and in Tyrion VII (chapter 57). The stone is hatched; the
 * accent is the heat.
 */
const HOT_KNIFE: Stroke[] = [
  {
    d: 'M24 140 Q30 124 60 122 Q110 120 132 128 Q142 140 128 148 Q80 156 34 150 Q22 148 24 140 Z',
  },
  { d: 'M40 126 L68 120 L70 126 L42 132 Z' },
  { d: 'M68 118 L72 130', role: 'soft' },
  { d: 'M70 121 L124 112 L128 116 L72 126' },
  {
    d: 'M88 106 q-4 -6 0 -12 t0 -12 M102 104 q-4 -6 0 -12 t0 -12 t0 -10 M116 102 q-4 -6 0 -12 t0 -12',
    role: 'accent',
  },
  { d: 'M110 140 l6 -3 M96 144 l6 -3 M120 134 l5 -3', role: 'ambient' },
]

/** One dried ear, drawn from its top. */
const EAR =
  'q-10 -6 -12 6 q-1 10 7 12 q4 0 4 -5 q-1 -3 2 -5 q3 -3 1 -6 m-4 2 q-5 -2 -6 4'
/**
 * Chella: her necklace of dried ears on its cord, one for each foe she
 * has killed, for the leader of the Black Ears in episode 8 and in Tyrion
 * VII (chapter 57). The accent is the ears.
 */
const NECKLACE: Stroke[] = [
  { d: 'M34 30 Q80 160 126 30' },
  { d: 'M30 30 h8 M122 30 h8', role: 'soft' },
  {
    d: `M54 84 ${EAR} M68 106 ${EAR} M86 112 ${EAR} M104 100 ${EAR} M116 76 ${EAR}`,
    role: 'accent',
  },
  {
    d: 'M54 75 V82 M68 91 V104 M86 94 V110 M104 77 V98 M116 56 V74',
    role: 'soft',
  },
  { d: 'M60 140 Q80 148 100 140', role: 'ambient', dashed: true },
]

/** The first season's Vale cast and mountain clans (#1055), keyed by record id. */
export const VALE_DRAWINGS = {
  'marillion': LUTE,
  'willis-wode': WILLIS,
  'donnel-waynwood': GATE_BAR,
  'nestor-royce': STAFF,
  'mya-stone': MULE,
  'vardis-egen': VARDIS,
  'mord': PURSE,
  'lyn-corbray': LADY_FORLORN,
  'anya-waynwood': BROKEN_WHEEL,
  'shagga': AXES,
  'timett': HOT_KNIFE,
  'chella': NECKLACE,
} satisfies Drawings

/** The Vale cast drawn again later in the story. */
export const valeRedrawn: Redrawings = {
  'willis-wode': [
    // The shield fallen on its side on the road, split down its face: the
    // hill tribesmen kill him on the high road in "The Wolf and the Lion"
    // (episode 5). The show's alone; chapter 35 orders it.
    {
      episode: 5,
      chapter: 35,
      source: 'episode',
      value: [
        ...moved(
          [
            ...BAT_SHIELD,
            { d: 'M80 40 L76 60 L84 80 L78 100 L84 120 L80 148', role: 'soft' },
          ],
          'translate(0 14) rotate(-90 80 100)',
        ),
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'vardis-egen': [
    // The helm on its side on the floor, dented: Bronn kills him in the
    // trial by combat in Catelyn VII (chapter 41). The show kills him in "A
    // Golden Crown" (episode 6), the episode that names him, where no stage
    // can sit, so the stage is the book's (owner, as Vayon Poole's in #1054).
    {
      episode: 6,
      chapter: 41,
      source: 'chapter',
      value: [
        ...moved(HELM, 'translate(-4 26) rotate(-80 80 90)'),
        { d: 'M74 102 l6 6 l8 -4', role: 'soft' },
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
}
