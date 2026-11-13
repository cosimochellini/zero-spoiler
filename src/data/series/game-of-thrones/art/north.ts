import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow } from '~/lib/svg/primitives'

/**
 * A riding saddle in 3/4, its seat, pommel and flap, the stirrup hanging
 * from it. The far side of the flap is hatched; the accent is the stirrup.
 * Hullen's first drawing and his death share it.
 */
const SADDLE: Stroke[] = [
  {
    d: 'M38 82 Q42 72 52 76 Q70 90 96 84 Q108 80 112 66 L120 68 Q120 90 104 100 H50 Q38 96 38 82 Z',
  },
  { d: 'M56 100 Q54 114 62 124 H92 Q98 112 96 100' },
  { d: 'M60 104 Q60 114 66 120 M90 104 Q92 112 88 120', role: 'soft' },
  { d: 'M78 124 V138 M70 138 H86 L84 148 H72 Z', role: 'accent' },
  { d: 'M88 108 l5 -3 M86 116 l5 -3', role: 'ambient' },
]
/**
 * Hullen: the saddle on its rack in the stables, for the master of horse
 * who rides in Lord Eddard's party in Bran I (chapter 2). The show never
 * casts him, so the drawing is the book's.
 */
const HULLEN: Stroke[] = [
  ...SADDLE,
  {
    d: 'M26 100 H130 M32 100 L22 150 M40 100 L50 150 M116 100 L106 150 M124 100 L134 150',
    role: 'soft',
  },
  shadow(78, 154, 54),
]

/**
 * Jeyne Poole: a pair of sewing shears lying open on a folded length of
 * linen, its hem half stitched, for the steward's daughter who sews beside
 * Sansa at the needlework lesson in Arya I (chapter 8). The book's alone.
 * The accent is the shears' handles.
 */
const SHEARS: Stroke[] = [
  {
    d: 'M24 130 L46 112 H134 L112 130 Z M24 130 V140 H112 V130 M112 140 L134 122 V112',
  },
  { d: 'M30 136 H106 M48 118 H128', role: 'soft' },
  { d: 'M34 134 h4 M44 134 h4 M54 134 h4 M64 134 h4 M74 134 h4', role: 'soft' },
  { d: `${circle(52, 92, 8)} ${circle(56, 112, 8)}`, role: 'accent' },
  { d: 'M59 96 L80 100 M63 109 L80 100' },
  { d: 'M80 100 L128 80 L124 88 Z M80 100 L130 104 L124 108 Z' },
  { d: 'M116 126 l6 -4 M122 120 l6 -4', role: 'ambient' },
  shadow(80, 146, 56),
]

/**
 * Mikken: the anvil on its stump with a hammer laid across its face and
 * the tongs against the stump, for the smith of Winterfell who forges
 * Arya's sword, in episode 2 and in Bran VI (chapter 54). The iron's far
 * side is hatched; the accent is the hammer's head.
 */
const ANVIL: Stroke[] = [
  {
    d: 'M40 74 H110 Q128 74 138 66 Q130 84 112 86 V92 H98 L102 108 H48 L52 92 H40 Z',
  },
  { d: 'M40 74 L50 66 H116 Q126 66 138 66', role: 'soft' },
  { d: 'M54 108 V146 M96 108 V146 M48 146 Q75 154 102 146', role: 'soft' },
  { d: 'M64 66 L112 60' },
  { d: 'M50 60 L64 58 L66 70 L52 72 Z', role: 'accent' },
  { d: 'M108 118 L124 150 M114 116 L126 148', role: 'soft' },
  { d: 'M90 96 l5 -3 M90 120 l5 -3 M90 134 l5 -3', role: 'ambient' },
  shadow(76, 154, 44),
]

/**
 * Hallis Mollen: a kite shield stood on its point, its rim and plain boss,
 * for the captain of Winterfell's guard after Jory goes south, from
 * Catelyn III (chapter 15). The book's alone. The far edge is hatched; the
 * accent is the boss.
 */
const KITE_SHIELD: Stroke[] = [
  { d: 'M50 40 Q80 30 110 40 Q112 92 80 150 Q48 92 50 40 Z' },
  { d: 'M110 40 L116 44 Q118 94 84 152', role: 'soft' },
  { d: 'M56 46 Q80 38 104 46 Q106 92 80 140 Q54 92 56 46 Z', role: 'soft' },
  { d: circle(80, 72, 8), role: 'accent' },
  { d: circle(80, 72, 3), role: 'soft' },
  {
    d: 'M112 60 l5 -3 M112 76 l5 -3 M110 92 l5 -3 M104 110 l5 -3',
    role: 'ambient',
  },
  shadow(82, 156, 30),
]

/**
 * A steward's ring of three keys. The accent is the ring. Vayon Poole's
 * first drawing and his death share it.
 */
const KEYS: Stroke[] = [
  { d: circle(80, 48, 11), role: 'accent' },
  { d: `${circle(72, 62, 3)} M71 65 L64 102 M64 102 l6 1 M65 96 l5 1` },
  { d: `${circle(80, 63, 3)} M80 66 V108 M80 108 h6 M80 102 h5` },
  { d: `${circle(88, 62, 3)} M89 65 L96 102 M96 102 l-6 1 M95 96 l-5 1` },
]
/**
 * Vayon Poole: the steward's keys hanging from a hook over the household
 * ledger, for the man who runs Eddard Stark's household, from Eddard III
 * (chapter 17) and in the show's purge of it in episode 8.
 */
const VAYON: Stroke[] = [
  { d: 'M80 22 V30 Q80 36 86 36', role: 'soft' },
  ...KEYS,
  {
    d: 'M30 140 L46 126 H130 L114 140 Z M30 140 V150 H114 V140 M114 150 L130 136 V126',
  },
  { d: 'M36 145 H110 M52 131 H124', role: 'soft' },
  { d: 'M118 144 l6 -4', role: 'ambient' },
  shadow(80, 156, 54),
]

/**
 * Tomard: a folded letter with a plain seal tucked behind a guard's sword
 * belt, the letter for Stannis Eddard hands him in episode 7; the book has
 * him among Eddard's guards from Arya II (chapter 23). The accent is the
 * seal.
 */
const BELT_LETTER: Stroke[] = [
  { d: 'M56 96 L62 56 L104 60 L98 100' },
  { d: 'M62 56 L82 74 L104 60', role: 'soft' },
  { d: circle(82, 80, 5), role: 'accent' },
  {
    d: 'M28 112 Q28 92 80 92 Q132 92 132 112 Q132 132 80 132 Q28 132 28 112 Z',
  },
  {
    d: 'M36 112 Q36 100 80 100 Q124 100 124 112 Q124 124 80 124 Q36 124 36 112 Z',
    role: 'soft',
  },
  { d: 'M70 124 H90 V138 H70 Z M80 124 V138', role: 'soft' },
  { d: 'M120 112 l6 -3 M114 122 l6 -3', role: 'ambient' },
  shadow(80, 148, 56),
]

/**
 * Harwin: a tourney lance leaning on its vamplate with a shield at its
 * foot, for the guard who rides in the Hand's tourney in Eddard VII; he
 * opens in Bran I (chapter 2). The book's alone. The shield's far side is
 * hatched; the accent is the vamplate.
 */
const LANCE: Stroke[] = [
  { d: 'M98 22 L106 24 L78 128 L70 126 Z' },
  { d: 'M66 112 L50 128 Q66 148 96 140 L84 118', role: 'accent' },
  { d: 'M76 132 L72 150 M80 134 L78 150', role: 'soft' },
  {
    d: 'M94 38 L102 40 M90 54 L98 56 M86 70 L94 72 M82 86 L90 88',
    role: 'soft',
  },
  { d: 'M30 150 V104 Q42 98 58 104 V150 Q44 158 30 150 Z' },
  { d: 'M44 102 V154', role: 'soft' },
  { d: 'M50 112 l5 -3 M50 126 l5 -3 M50 140 l5 -3', role: 'ambient' },
  shadow(70, 156, 44),
]

/**
 * Alyn: the direwolf standard of House Stark on its staff, the wolf
 * running with no eye, which he carries at the head of the Stark men in
 * Eddard XI; he opens in Eddard II (chapter 13). The book's alone. The
 * cloth's far fold is hatched; the accent is the wolf.
 */
const STANDARD: Stroke[] = [
  { d: `${circle(40, 18, 4)} M40 22 V150` },
  { d: 'M40 30 H120' },
  { d: 'M50 30 V112 L84 100 L118 112 V30' },
  {
    d: 'M58 70 L64 66 L66 58 L71 64 Q84 60 98 66 Q106 66 114 60 Q112 70 104 72 L110 86 H104 L96 76 Q86 78 78 76 L72 88 H66 L70 76 Q62 74 58 70 Z',
    role: 'accent',
  },
  { d: 'M58 36 Q56 72 60 104 M110 36 Q112 72 108 104', role: 'soft' },
  { d: 'M112 44 l5 -3 M112 58 l5 -3 M112 86 l5 -3', role: 'ambient' },
  shadow(40, 153, 14),
]

/**
 * Greatjon Umber: an iron ring with two chains hanging from it, their last
 * links snapped, the broken chains of the Umber giant, for the head of the
 * house at Robb's war council in episode 8 and in Bran VI (chapter 54).
 * The accent is the snapped links.
 */
const CHAINS: Stroke[] = [
  { d: `${circle(80, 40, 14)} ${circle(80, 40, 9)}` },
  {
    d: `${ellipse(68, 62, 4, 7)} ${ellipse(60, 80, 7, 4)} ${ellipse(54, 98, 4, 7)} ${ellipse(92, 62, 4, 7)} ${ellipse(100, 80, 7, 4)} ${ellipse(106, 98, 4, 7)}`,
  },
  {
    d: 'M48 112 Q42 118 46 126 M52 128 Q58 124 56 116 M112 112 Q118 118 114 126 M108 128 Q102 124 104 116',
    role: 'accent',
  },
  { d: 'M66 72 l-2 3 M94 72 l2 3 M58 90 l-2 3 M102 90 l2 3', role: 'soft' },
  { d: 'M88 32 l5 -3 M90 44 l5 -3', role: 'ambient' },
  {
    d: 'M40 140 l-4 6 M48 136 l2 8 M112 136 l-2 8 M120 140 l4 6',
    role: 'soft',
  },
  shadow(80, 154, 36),
]

/**
 * Smalljon Umber: a greatsword laid across a fur, for the Umber fighter in
 * Robb's guard in Catelyn X (chapter 64); the show brings him in episode
 * 53. Laid flat, so it is not Eddard's Ice, which stands on its point. The
 * accent is the grip's wrap. Retinted from `red`: nothing on it is red.
 */
const GREATSWORD_FUR: Stroke[] = [
  {
    d: 'M14 132 Q20 116 40 118 Q60 108 82 116 Q106 108 126 118 Q146 118 146 134 Q130 146 110 140 Q90 150 70 142 Q46 150 28 142 Q14 142 14 132 Z',
  },
  {
    d: 'M26 126 l4 -4 M44 120 l3 -5 M70 120 l3 -5 M98 118 l3 -5 M120 122 l3 -5 M34 140 l3 3 M60 144 l3 3 M100 142 l3 3',
    role: 'soft',
  },
  { d: `${circle(24, 112, 5)} M29 110 L60 104 L61 110 L30 116` },
  { d: 'M36 110 l2 6 M44 108 l2 6 M52 106 l2 6', role: 'accent' },
  { d: 'M58 94 L64 122' },
  { d: 'M62 104 L140 92 L146 96 L140 100 L63 112' },
  { d: 'M64 108 L138 96', role: 'soft' },
  { d: 'M80 104 l3 4 M100 101 l3 4 M120 98 l3 4', role: 'ambient' },
  shadow(80, 154, 64),
]

/**
 * Rickard Karstark: a round shield with the white sunburst of his house,
 * the field hatched because it is black, for the lord of Karhold in Bran VI
 * (chapter 54) and in episode 17. The accent is the sun.
 */
const SUNBURST: Stroke[] = [
  { d: circle(80, 92, 48) },
  { d: circle(80, 92, 43), role: 'soft' },
  { d: circle(80, 92, 12), role: 'accent' },
  {
    d: 'M80 76 V56 M80 108 V128 M64 92 H44 M96 92 H116 M69 81 L55 67 M91 103 L105 117 M91 81 L105 67 M69 103 L55 117',
    role: 'accent',
  },
  {
    d: 'M74 77 L70 64 M86 107 L90 120 M65 86 L52 82 M95 98 L108 102 M86 77 L90 64 M74 107 L70 120 M95 86 L108 82 M65 98 L52 102',
    role: 'soft',
  },
  {
    d: 'M104 60 l6 -3 M114 76 l6 -3 M116 92 l6 -3 M112 110 l6 -3',
    role: 'ambient',
  },
  shadow(80, 150, 40),
]

/**
 * Roose Bolton: the X-shaped cross of the Bolton banner, empty, with its
 * ropes at the four ends and no figure on it, for the lord of the Dreadfort
 * in Bran VI (chapter 54) and in episode 14. The accent is the ropes.
 */
const X_CROSS: Stroke[] = [
  { d: 'M36 28 L44 22 L130 144 L122 150 Z' },
  { d: 'M124 28 L116 22 L30 144 L38 150 Z' },
  {
    d: 'M40 38 q-6 4 0 8 q6 4 0 8 M120 38 q6 4 0 8 q6 4 0 8 M42 124 q-6 4 0 8 M118 124 q6 4 0 8',
    role: 'accent',
  },
  { d: 'M74 80 L86 80 M80 74 V86', role: 'soft' },
  { d: 'M88 96 l5 -3 M100 112 l5 -3 M112 128 l5 -3', role: 'ambient' },
  shadow(80, 154, 48),
]

/**
 * Galbart Glover: the mailed fist of House Glover seen from the front, the
 * thumb across the curled fingers, on a cuff of mail, for the lord of
 * Deepwood Motte at Robb's war council in episode 8 and in Catelyn VIII
 * (chapter 56). The accent is the knuckle plate.
 */
const MAILED_FIST: Stroke[] = [
  { d: 'M66 112 V150 M94 112 V150' },
  {
    d: 'M66 124 q4 -4 7 0 t7 0 t7 0 t7 0 M66 136 q4 -4 7 0 t7 0 t7 0 t7 0 M66 148 q4 -4 7 0 t7 0 t7 0 t7 0',
    role: 'soft',
  },
  {
    d: 'M52 104 V80 Q52 64 68 64 H92 Q108 64 108 80 V104 Q108 112 98 112 H62 Q52 112 52 104 Z',
  },
  { d: 'M52 78 Q80 68 108 78', role: 'accent' },
  { d: 'M66 66 V88 M80 64 V88 M94 66 V88 M52 88 H108', role: 'soft' },
  { d: 'M52 98 H86 Q94 98 94 93 Q94 88 86 88' },
  {
    d: 'M100 92 l5 -3 M100 104 l5 -3 M88 128 l5 -3 M88 140 l5 -3',
    role: 'ambient',
  },
  shadow(80, 155, 30),
]

/**
 * Robett Glover: Deepwood Motte, the timber keep on its hill behind a
 * palisade, the house he asks men from for Robb in Bran VI (chapter 54)
 * and where the show finds him in episode 57. The accent is the keep's
 * door.
 */
const DEEPWOOD: Stroke[] = [
  { d: 'M14 150 Q40 104 80 100 Q120 104 146 150' },
  {
    d: 'M40 112 V96 M48 106 V90 M56 102 V86 M104 102 V86 M112 106 V90 M120 112 V96',
    role: 'soft',
  },
  { d: 'M40 96 l4 -6 l4 6 M104 86 l4 -6 l4 6', role: 'soft' },
  { d: 'M64 100 V54 H96 V100 M60 54 L80 40 L100 54' },
  { d: 'M74 100 V84 Q80 78 86 84 V100', role: 'accent' },
  { d: 'M64 66 H96 M64 78 H96', role: 'soft' },
  { d: 'M90 58 l5 -3 M90 70 l5 -3 M90 88 l5 -3', role: 'ambient' },
  { d: 'M10 156 Q80 150 150 156', role: 'ambient', dashed: true },
]

/**
 * Maege Mormont: the bear of her house on all fours, side on with no face,
 * for the lady of Bear Island who brings her fighters in episode 8 and in
 * Bran VI (chapter 54). Jeor's bear rears; hers walks. The bear is black,
 * so its back is hatched; the accent is the claws.
 */
const BEAR_WALKING: Stroke[] = [
  {
    d: 'M24 98 Q28 86 40 84 Q46 72 54 76 Q58 70 62 76 Q86 62 112 74 Q130 84 128 112 L132 150 H118 L116 126 Q96 130 76 126 L74 150 H60 L58 118 Q48 112 44 104 Q34 106 26 104 Z',
  },
  { d: 'M44 104 Q38 112 42 118 L44 150 H58', role: 'soft' },
  { d: 'M118 124 L110 150 H98', role: 'soft' },
  { d: 'M60 150 l-4 3 M66 150 v4 M72 150 l4 3', role: 'accent' },
  { d: 'M56 78 Q58 76 60 79', role: 'soft' },
  {
    d: 'M90 78 l6 -3 M104 82 l6 -3 M114 94 l6 -3 M116 108 l6 -3',
    role: 'ambient',
  },
  shadow(80, 156, 52),
]

/**
 * Dacey Mormont: the morningstar she carries in Robb's guard at the
 * Whispering Wood in Catelyn X (chapter 64). The book's alone. The head's
 * far side is hatched; the accent is the spikes.
 */
const MORNINGSTAR: Stroke[] = [
  { d: 'M44 150 L94 72 M50 152 L99 76' },
  { d: 'M46 140 L52 144 M50 134 L56 138 M54 128 L60 132', role: 'soft' },
  { d: circle(104, 60, 16) },
  {
    d: 'M104 44 V34 M104 76 V86 M88 60 H78 M120 60 H130 M93 49 L86 42 M115 71 L122 78 M115 49 L122 42 M93 71 L86 78',
    role: 'accent',
  },
  { d: 'M110 52 l4 -3 M112 62 l4 -3', role: 'ambient' },
  { d: 'M40 152 H56', role: 'soft' },
  shadow(70, 156, 34),
]

/**
 * Wendel Manderly: the trident of House Manderly's merman standing in the
 * sea off White Harbor, for the knight who rides with Catelyn in Catelyn
 * VIII (chapter 56); the show brings him to the Twins in episode 29. The
 * accent is the prongs.
 */
const TRIDENT: Stroke[] = [
  { d: 'M78 152 V64 M82 152 V64' },
  { d: 'M58 64 H102 M58 64 V40 L54 30 M80 64 V30 M102 64 V40 L106 30' },
  {
    d: 'M58 30 L58 42 M80 22 L76 34 M80 22 L84 34 M102 30 L102 42 M54 30 L62 34 M106 30 L98 34',
    role: 'accent',
  },
  { d: 'M74 70 H86 V78 H74 Z', role: 'soft' },
  { d: 'M84 90 l3 -2 M84 110 l3 -2', role: 'ambient' },
  ...SEA,
]

/** The first season's northern household and bannermen (#1054), keyed by record id. */
export const NORTH_DRAWINGS = {
  'hullen': HULLEN,
  'jeyne-poole': SHEARS,
  'mikken': ANVIL,
  'hallis-mollen': KITE_SHIELD,
  'vayon-poole': VAYON,
  'tomard': BELT_LETTER,
  'harwin': LANCE,
  'alyn': STANDARD,
  'greatjon-umber': CHAINS,
  'smalljon-umber': GREATSWORD_FUR,
  'rickard-karstark': SUNBURST,
  'roose-bolton': X_CROSS,
  'galbart-glover': MAILED_FIST,
  'robett-glover': DEEPWOOD,
  'maege-mormont': BEAR_WALKING,
  'dacey-mormont': MORNINGSTAR,
  'wendel-manderly': TRIDENT,
} satisfies Drawings

/** The northern household drawn again later in the story. */
export const northRedrawn: Redrawings = {
  'tomard': [
    // The belt cut through on the floor, the letter fallen beside it: he is
    // cut down in the throne room in Eddard XIV (chapter 50). The book's
    // alone; episode 7, where the show leaves him, orders it.
    {
      episode: 7,
      chapter: 50,
      source: 'chapter',
      value: [
        {
          d: 'M74 132 Q30 132 28 118 Q30 102 64 98 M66 106 Q38 108 36 118 Q40 126 74 124',
        },
        {
          d: 'M94 98 Q132 102 132 118 Q128 134 88 134 M94 106 Q124 110 124 118 Q120 126 88 126',
        },
        {
          d: 'M64 98 L68 104 L66 106 M74 124 L72 128 L74 132 M94 98 L90 102 L94 106 M88 126 L92 130 L88 134',
          role: 'soft',
        },
        { d: 'M102 150 L112 120 L146 130 L136 158 Z' },
        { d: 'M112 120 L128 142 L146 130', role: 'soft' },
        { d: circle(127, 146, 4), role: 'accent' },
        { d: 'M10 158 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'hullen': [
    // The saddle off its rack and tipped on the straw: he is killed in the
    // Red Keep's stables in Arya IV (chapter 51), where Arya finds him. The
    // record is the book's; episode 8 orders it.
    {
      episode: 8,
      chapter: 51,
      value: [
        ...moved(SADDLE, 'translate(0 16) rotate(-34 78 140)'),
        {
          d: 'M16 156 l6 -8 M24 156 l2 -9 M34 156 l-4 -8 M120 156 l6 -8 M130 156 l2 -9 M140 156 l-4 -8 M60 158 l6 -6 M96 158 l-6 -6',
          role: 'soft',
        },
        { d: 'M10 158 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'vayon-poole': [
    // The chest he was packing left open and his keys dropped on the floor:
    // killed in the purge of Eddard's household, told in Sansa IV (chapter
    // 52). The show kills him in "The Pointy End" (episode 8), the episode
    // he opens in, where no stage can sit, so the stage is the book's
    // (owner, #1054).
    {
      episode: 8,
      chapter: 52,
      source: 'chapter',
      value: [
        {
          d: 'M24 150 V112 H84 V150 Z M84 150 L102 136 V100 L84 112 M24 112 L42 100 H102',
        },
        { d: 'M24 112 L16 78 H76 L84 112', role: 'soft' },
        { d: 'M30 118 Q50 108 76 118 M34 112 q10 -6 20 0', role: 'soft' },
        { d: 'M90 130 l6 -4 M90 142 l6 -4', role: 'ambient' },
        ...moved(
          KEYS,
          'translate(124 146) rotate(-80) scale(0.6) translate(-80 -78)',
        ),
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
}
