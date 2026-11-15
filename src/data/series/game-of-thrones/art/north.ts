import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
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
 * A folded length of linen, its hem half stitched, with its hatching and
 * shadow. Jeyne's shears lie on it, and the wedding cloak after them.
 */
const HEM_STITCHES: Stroke = {
  d: 'M34 134 h4 M44 134 h4 M54 134 h4 M64 134 h4 M74 134 h4',
  role: 'soft',
}
const LINEN: Stroke[] = [
  {
    d: 'M24 130 L46 112 H134 L112 130 Z M24 130 V140 H112 V130 M112 140 L134 122 V112',
  },
  { d: 'M30 136 H106 M48 118 H128', role: 'soft' },
  HEM_STITCHES,
]
const LINEN_SHADE: Stroke[] = [
  { d: 'M116 126 l6 -4 M122 120 l6 -4', role: 'ambient' },
  shadow(80, 146, 56),
]
/**
 * Jeyne Poole: a pair of sewing shears lying open on the linen, for the
 * steward's daughter who sews beside Sansa at the needlework lesson in
 * Arya I (chapter 8). The book's alone. The accent is the shears' handles.
 */
const SHEARS: Stroke[] = [
  ...LINEN,
  { d: `${circle(52, 92, 8)} ${circle(56, 112, 8)}`, role: 'accent' },
  { d: 'M59 96 L80 100 M63 109 L80 100' },
  { d: 'M80 100 L128 80 L124 88 Z M80 100 L130 104 L124 108 Z' },
  ...LINEN_SHADE,
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

/** The running direwolf of House Stark, with no eye, as its banner shows it. */
const DIREWOLF =
  'M58 70 L64 66 L66 58 L71 64 Q84 60 98 66 Q106 66 114 60 Q112 70 104 72 L110 86 H104 L96 76 Q86 78 78 76 L72 88 H66 L70 76 Q62 74 58 70 Z'

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
  { d: DIREWOLF, role: 'accent' },
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
/** The two halves of Rickard's shield once it is split, along one crack. */
const KARSTARK_CRACK = 'L83 124 L78 108 L82 92 L78 76 L82 60 Z'
const KARSTARK_HALF_LEFT: Stroke[] = [
  { d: `M80 44 A48 48 0 0 0 80 140 ${KARSTARK_CRACK}` },
  { d: 'M80 49 A43 43 0 0 0 80 135', role: 'soft' },
  {
    d: 'M78 80.2 A12 12 0 0 0 78 103.8 M64 92 H44 M69 81 L55 67 M69 103 L55 117',
    role: 'accent',
  },
  { d: 'M65 86 L52 82 M65 98 L52 102 M74 77 L70 64', role: 'soft' },
  { d: 'M44 64 l6 -3 M38 92 l6 -3 M44 120 l6 -3', role: 'ambient' },
]
const KARSTARK_HALF_RIGHT: Stroke[] = [
  { d: `M80 44 A48 48 0 0 1 80 140 ${KARSTARK_CRACK}` },
  { d: 'M84 49.2 A43 43 0 0 1 84 134.8', role: 'soft' },
  {
    d: 'M86 81.7 A12 12 0 0 1 86 102.3 M96 92 H116 M91 81 L105 67 M91 103 L105 117',
    role: 'accent',
  },
  { d: 'M95 86 L108 82 M95 98 L108 102 M86 107 L90 120', role: 'soft' },
]

/**
 * The flayed man of House Bolton bound upside down on his X-shaped cross,
 * as the show's banner has him: a silhouette with no face, his feet tied
 * at the top ends, his hands at the bottom, his head between them. The
 * accent is the ropes. Every stage of Roose's drawing keeps it.
 */
const FLAYED_MAN: Stroke[] = [
  {
    d: 'M54.1 55.5 L35.1 28.5 L44.9 21.5 L63.9 48.5 M96.4 115.5 L121.1 150.5 L130.9 143.5 L106.2 108.5',
  },
  {
    d: 'M105.9 55.5 L124.9 28.5 L115.1 21.5 L96.1 48.5 M63.6 115.5 L38.9 150.5 L29.1 143.5 L53.8 108.5',
  },
  {
    d: 'M80 77.5 L58.2 46.6 L55 40 L50 42 L54.2 49.4 L71 73.2 V90.3 L52.9 116 L47 124 L51 126 L56.9 118.8 L76 91.6 H84 L103.1 118.8 L109 126 L113 124 L107.1 116 L89 90.3 V73.2 L105.8 49.4 L110 42 L105 40 L101.8 46.6 Z',
  },
  { d: circle(80, 99, 6) },
  {
    d: 'M58.3 40.5 L48.5 47.5 M55.5 36.5 L45.7 43.5 M101.7 40.5 L111.5 47.5 M104.5 36.5 L114.3 43.5 M46.7 118.5 L56.5 125.5 M43.9 122.5 L53.7 129.5 M113.3 118.5 L103.5 125.5 M116.1 122.5 L106.3 129.5',
    role: 'accent',
  },
  { d: 'M75 80 H85 M75 85 H85', role: 'soft' },
]
/**
 * Roose Bolton: the flayed man on the X-cross of the Bolton banner, for
 * the lord of the Dreadfort in Bran VI (chapter 54) and in episode 14
 * (owner, #1288).
 */
const X_CROSS: Stroke[] = [
  ...FLAYED_MAN,
  { d: 'M116 134 l5 -3 M122 142 l5 -3', role: 'ambient' },
  shadow(80, 156, 48),
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
  'jeyne-poole': [
    // The shears gone and a maiden's cloak spread on the linen, fur at its
    // collar, the Stark direwolf on it and its clasp at the top: she is
    // passed off as Arya Stark to wed Ramsay Bolton. The book's alone;
    // episode 29 orders it. Cersei tells the council of the "steward's
    // whelp" in Cersei IV of A Feast for Crows (chapter 17, site 243).
    {
      episode: 29,
      chapter: 243,
      value: [
        {
          d: 'M24 130 L30 125 M128 112 H134 L112 130 H24 V140 H112 V130 M112 140 L134 122 V112',
        },
        { d: 'M30 136 H106', role: 'soft' },
        HEM_STITCHES,
        {
          d: 'M64 38 Q54 50 46 74 Q36 102 26 124 Q36 130 46 126 Q56 132 68 128 Q80 134 92 128 Q104 132 114 126 Q124 130 134 124 Q124 102 114 74 Q106 50 96 38',
        },
        { d: 'M58 40 q4 -6 9 -3 t9 -3 t9 0 t9 3 t9 3 M60 42 Q80 54 100 42' },
        { d: 'M66 50 Q56 90 46 126 M94 50 Q104 90 114 126', role: 'soft' },
        {
          d: DIREWOLF,
          transform: 'translate(80 90) scale(0.8) translate(-86 -73)',
        },
        { d: `${circle(80, 33, 4)} M72 35 H76 M84 35 H88`, role: 'accent' },
        { d: 'M114 80 l5 -3 M118 96 l5 -3', role: 'ambient' },
        ...LINEN_SHADE,
      ],
    },
  ],
  'mikken': [
    // The anvil tipped over on the ground, the hammer and tongs dropped
    // beside it: an ironborn kills him when Theon takes Winterfell. The
    // book's alone; episode 16, where the show takes the castle and leaves
    // him out, orders it.
    {
      episode: 16,
      chapter: 120,
      source: 'chapter',
      value: [
        ...moved(
          ANVIL.slice(0, 2),
          'translate(36 154) rotate(-14) translate(-48 -108)',
        ),
        ...moved(
          ANVIL.slice(3, 5),
          'translate(150 150) scale(-1 1) translate(-50 -72)',
        ),
        ...moved(ANVIL.slice(5, 6), 'translate(-96 0)'),
        { d: 'M120 104 l5 -3 M112 122 l5 -3', role: 'ambient' },
        { d: 'M8 154 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'alyn': [
    // The standard down on the ground, its staff broken and the stump left
    // standing: he is killed at
    // the Mummer's Ford with Beric's men, told in Arya III of A Storm of
    // Swords (chapter 161). The book's alone; episode 21 orders it.
    {
      episode: 21,
      chapter: 161,
      value: [
        { d: 'M24 154 V104 l3 -4 l-2 -3 M24 104 l-3 -3' },
        {
          d: `M48 150 l-4 -3 M48 150 l-3 4 M48 150 H140 ${circle(144, 150, 4)}`,
        },
        {
          d: 'M42 154 Q44 136 56 126 Q64 118 76 122 Q92 114 108 118 L136 116 L118 132 L134 150',
        },
        { d: 'M60 128 Q56 140 60 152 M104 120 Q100 136 106 150', role: 'soft' },
        {
          d: DIREWOLF,
          role: 'accent',
          transform:
            'translate(84 136) rotate(-4) scale(0.6) translate(-86 -73)',
        },
        { d: 'M118 138 l5 -3', role: 'ambient' },
        { d: 'M8 154 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'greatjon-umber': [
    // The ring down on the ground and the chains slack beside it: Smalljon
    // tells Ramsay his father is dead in "Oathbreaker" (episode 53). The
    // show's alone; in the books he is alive, a prisoner of the Freys, so
    // the last chapter orders it.
    {
      episode: 53,
      chapter: 344,
      source: 'episode',
      value: [
        { d: `${ellipse(80, 136, 16, 12)} ${ellipse(80, 136, 10, 7)}` },
        {
          d: `${ellipse(58, 144, 7, 4)} ${ellipse(46, 148, 4, 6)} ${ellipse(34, 150, 7, 4)} ${ellipse(102, 144, 7, 4)} ${ellipse(114, 148, 4, 6)} ${ellipse(126, 150, 7, 4)}`,
        },
        {
          d: 'M24 150 Q18 148 18 142 M22 156 Q16 156 14 152 M136 150 Q142 148 142 142 M138 156 Q144 156 146 152',
          role: 'accent',
        },
        { d: 'M88 128 l5 -3 M90 140 l5 -3', role: 'ambient' },
        { d: 'M8 156 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'smalljon-umber': [
    // The Umber banner down on the ground beside a fur, its giant in broken
    // chains upside down: Tormund kills him in "Battle of the Bastards" (episode 59), and
    // the Bolton men kill him at the Red Wedding in Catelyn VII of A Storm
    // of Swords (chapter 195).
    {
      episode: 59,
      chapter: 195,
      value: [
        { d: 'M70 151 H144' },
        {
          d: 'M64 124 Q74 96 98 98 Q116 90 130 94 L150 92 L134 120 L150 148 L138 154',
        },
        {
          d: `${circle(102, 142, 7)} M95 133 V113 H109 V133 Z M97 113 L90 100 M107 113 L114 100 M95 130 L82 142 M109 130 L122 142`,
        },
        {
          d: 'M82 142 l-6 3 M80 138 l-6 -2 M122 142 l6 3 M124 138 l6 -2',
          role: 'accent',
        },
        {
          d: 'M18 142 Q20 126 34 124 Q46 116 60 122 Q72 126 70 140 Q66 152 50 150 Q34 154 22 150 Q16 148 18 142 Z',
        },
        {
          d: 'M26 134 l3 -4 M40 126 l3 -4 M56 126 l3 -4 M30 148 l3 3 M54 148 l3 3',
          role: 'soft',
        },
        { d: 'M132 104 l5 -3 M136 136 l5 -3', role: 'ambient' },
        { d: 'M8 156 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'rickard-karstark': [
    // The shield split in two, one half still standing and the other down
    // on the ground: Robb has him beheaded in "Kissed by Fire" (episode 25)
    // and in Catelyn III of A Storm of Swords (chapter 164).
    {
      episode: 25,
      chapter: 164,
      value: [
        ...moved(KARSTARK_HALF_LEFT, 'translate(-20 6) rotate(-6 80 140)'),
        ...moved(
          KARSTARK_HALF_RIGHT,
          'translate(30 58) rotate(-90 80 92) scale(0.8)',
        ),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'roose-bolton': [
    // The flayed man with a dagger stood before him, the mail Roose wears
    // under his sleeve at its grip: at the Red Wedding he stabs Robb, in
    // "The Rains of Castamere" (episode 29) and in Catelyn VII of A Storm
    // of Swords (chapter 195), and shows he is the Lannisters' man.
    {
      episode: 29,
      chapter: 195,
      value: [
        ...moved(softened(FLAYED_MAN), 'translate(-12 0)'),
        { d: `${circle(140, 66, 4)} M136 70 V92 M144 70 V92` },
        {
          d: 'M134 76 q3 -3 6 0 t6 0 M134 82 q3 -3 6 0 t6 0 M134 88 q3 -3 6 0 t6 0',
          role: 'accent',
        },
        { d: 'M128 94 H152 V98 H128 Z M135 98 V142 L140 152 L145 142 V98' },
        { d: 'M140 102 V142', role: 'soft' },
        { d: 'M104 134 l5 -3 M110 142 l5 -3', role: 'ambient' },
        shadow(80, 156, 60),
      ],
    },
    // The flayed man's cross fallen flat on the ground: Ramsay stabs his father in
    // "Home" (episode 52). The show's alone; in the books Roose is alive,
    // so the last chapter orders it.
    {
      episode: 52,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(
          FLAYED_MAN,
          'translate(0 152) scale(1 0.42) translate(0 -152)',
        ),
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'galbart-glover': [
    // The mailed fist down on its side on the ground: Robett speaks of him
    // as gone in "The Broken Man" (episode 57), so he is left for dead. The
    // show's alone; the books never tell his fate, so the last chapter
    // orders it.
    {
      episode: 57,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(MAILED_FIST.slice(0, 6), 'translate(0 15) rotate(90 80 107)'),
        { d: 'M84 104 l5 -3 M100 104 l5 -3', role: 'ambient' },
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'maege-mormont': [
    // The bear on its back, legs up, as Kevan's lion lies: Lyanna says
    // her mother died fighting for Robb in "The Broken Man" (episode 57).
    // The show's alone; the books never tell her fate, so the last chapter
    // orders it.
    {
      episode: 57,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(BEAR_WALKING.slice(0, 6), 'translate(0 214) scale(1 -1)'),
        { d: 'M8 156 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'dacey-mormont': [
    // The morningstar down on the ground, its haft broken: Ryman Frey kills
    // her at the Red Wedding, in Catelyn VII of A Storm of Swords (chapter
    // 195). The book's alone; episode 29 orders it.
    {
      episode: 29,
      chapter: 195,
      value: [
        { d: 'M14 146 L60 140 l4 -4 M14 152 L61 146 l3 2' },
        { d: 'M24 144 L25 150 M32 143 L33 149 M40 142 L41 148', role: 'soft' },
        { d: 'M72 146 l-4 -3 M72 146 l-3 4 M72 146 L98 140 M73 152 L99 146' },
        ...moved(
          MORNINGSTAR.slice(2, 5),
          'translate(114 130) rotate(22) translate(-104 -60)',
        ),
        { d: 'M8 156 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'wendel-manderly': [
    // The trident fallen across the waves: he is killed at the Red Wedding,
    // in Catelyn VII of A Storm of Swords (chapter 195). The show kills him
    // in "The Rains of Castamere" (episode 29), the episode he opens in,
    // where no stage can sit, so the stage is the book's (owner, #1288).
    {
      episode: 29,
      chapter: 195,
      source: 'chapter',
      value: [
        ...moved(TRIDENT.slice(0, 5), 'translate(0 52) rotate(-80 80 90)'),
        ...SEA,
      ],
    },
  ],
}
