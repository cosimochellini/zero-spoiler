import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, SEA, shadow } from '~/lib/svg/primitives'

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
/**
 * The flayed man of House Bolton bound upside down on his X-shaped cross,
 * as the show's banner has him: a silhouette with no face, his feet tied
 * at the top ends, his hands at the bottom, his head between them. The
 * accent is the ropes. Every stage of Roose's drawing keeps it.
 */
const FLAYED_MAN: Stroke[] = [
  {
    d: 'M43 36.3 L31.8 20.3 L38.4 15.7 L49.6 31.7 M120.1 131.7 L132.8 149.7 L126.2 154.3 L113.5 136.3',
    role: 'ambient',
  },
  {
    d: 'M117 36.3 L128.2 20.3 L121.6 15.7 L110.4 31.7 M39.9 131.7 L27.2 149.7 L33.8 154.3 L46.5 136.3',
    role: 'ambient',
  },
  {
    d: 'M80 72 L58 44 L54 36 L49 38 L52 46 L66 70 L69 80 L64 94 L48 120 L43 127 L47 131 L52 124 L70 98 H90 L108 124 L113 131 L117 127 L112 120 L96 94 L91 80 L94 70 L108 46 L111 38 L106 36 L102 44 Z',
  },
  { d: circle(80, 108, 9) },
  {
    d: 'M40.2 32.3 L46.8 27.7 M37.4 28.3 L44 23.7 M119.8 32.3 L113.2 27.7 M122.6 28.3 L116 23.7 M37 135.7 L43.6 140.3 M34.2 139.7 L40.8 144.3 M123 135.7 L116.4 140.3 M125.8 139.7 L119.2 144.3',
    role: 'accent',
  },
  { d: 'M74 80 H86 M74 86 H86', role: 'soft' },
]
/**
 * Roose Bolton: the flayed man on the X-cross of the Bolton banner, for
 * the lord of the Dreadfort in Bran VI (chapter 54) and in episode 14
 * (owner, #1288).
 */
const X_CROSS: Stroke[] = [
  ...FLAYED_MAN,
  { d: 'M86 92 l4 -3 M86 78 l4 -3', role: 'ambient' },
  shadow(80, 160, 48),
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

/**
 * Farlen: a hound sitting side on with no face, its ears hanging, its
 * collar in the accent and the leash trailing from it, for the
 * kennelmaster whose red bitch begs for bones at the harvest feast in Bran
 * III (chapter 95); he opens in Theon IV (chapter 124). The book's alone.
 * The far side of its haunch is hatched.
 */
const HOUND: Stroke[] = [
  {
    d: 'M28 74 L48 64 Q56 60 62 62 Q70 66 70 76 Q76 92 88 100 Q110 100 118 116 Q124 132 118 150 H106',
  },
  {
    d: 'M28 74 Q28 80 36 80 L56 82 Q60 94 66 102 Q66 122 62 150 H72 Q74 128 78 110',
  },
  { d: 'M58 64 Q66 70 64 86 Q58 80 54 66', role: 'soft' },
  { d: 'M90 112 Q92 132 88 150 H98 Q100 130 102 116', role: 'soft' },
  { d: 'M118 140 Q134 136 142 118', role: 'soft' },
  { d: 'M62 88 Q72 94 78 88 L76 98 Q70 102 64 98 Z', role: 'accent' },
  { d: 'M78 92 Q100 98 122 92 L130 90', role: 'soft' },
  { d: 'M102 108 l6 -4 M108 120 l6 -4 M110 132 l6 -4', role: 'ambient' },
  shadow(88, 154, 40),
]

/**
 * Meera Reed: a strung longbow stood on its tip, the string in the accent,
 * with a quiver of arrows leaning on it. The show arms her with a bow from
 * "Dark Wings, Dark Words" (episode 22); the book's frog spear and net, in
 * Bran III (chapter 95), are the book's alone, so the show's bow is drawn.
 */
const BOW: Stroke[] = [
  { d: 'M60 24 Q92 40 92 88 Q92 136 60 152' },
  { d: 'M60 24 L58 152', role: 'accent' },
  { d: 'M90 82 h6 M90 92 h6', role: 'soft' },
  { d: 'M96 120 L110 152 H128 L122 116 Z' },
  { d: 'M100 116 L94 72 M106 116 L104 70 M114 116 L116 72' },
  {
    d: 'M90 68 l4 6 l4 -6 M100 66 l4 6 l4 -6 M112 68 l4 6 l4 -6',
    role: 'soft',
  },
  { d: 'M114 130 l5 -3 M116 142 l5 -3', role: 'ambient' },
  shadow(88, 156, 40),
]

/**
 * Jojen Reed: the lizard-lion of House Reed curled in a ring to bite its
 * own tail, as its sigil has it, with no eye; it is black, so its flanks
 * are hatched, and the crest of spines down its back is the accent. Jojen
 * carries nothing of his own: in Bran III (chapter 95) he comes unarmed,
 * dressed in green, and the show's Jojen of "Dark Wings, Dark Words"
 * (episode 22) brings only his dreams.
 */
const LIZARD_LION: Stroke[] = [
  {
    d: 'M74 50 Q112 42 122 70 Q130 100 110 122 Q90 136 66 128 Q40 118 38 92 Q38 76 44 64 Q42 50 54 44 L102 30 Q107 31 104 36 L66 50 L100 60 Q104 64 99 66 L60 66 Q56 72 55 86 Q56 112 82 116 Q106 114 108 90 Q108 66 92 58 Q84 54 74 53',
  },
  {
    d: 'M72 48 l3 3 l2 -4 l3 3 l2 -4 l3 3 l2 -4 l3 3 l2 -4 l3 3 l2 -4 M70 52 l3 -2 l2 4 l3 -3 l2 4 l3 -3 l2 4 l3 -3 l2 4',
    role: 'soft',
  },
  {
    d: 'M104 44 l6 -5 l2 8 M114 51 l7 -3 l-1 8 M120 64 l7 -1 l-3 8 M124 80 l7 1 l-4 7 M123 96 l7 3 l-5 6',
    role: 'accent',
  },
  { d: 'M108 104 l6 6 M96 114 l2 8 M58 108 l-6 6 M50 90 l-8 2', role: 'soft' },
  {
    d: 'M106 56 l5 -3 M112 70 l5 -2 M114 88 l5 0 M108 108 l5 2 M70 124 l2 5 M48 106 l-4 3',
    role: 'ambient',
  },
  shadow(80, 154, 40),
]

/** The chopping block the knife stands in, its top in 3/4 with a ring. */
const KNIFE_BLOCK: Stroke[] = [
  { d: ellipse(80, 124, 38, 10) },
  { d: 'M42 124 V144 Q80 160 118 144 V124' },
  { d: ellipse(80, 124, 24, 6), role: 'soft' },
  { d: 'M104 138 l6 -3 M106 148 l6 -3 M96 146 l5 -3', role: 'ambient' },
]

/**
 * A flaying knife, its short blade curved in the belly, the edge in the
 * accent, a plain guard and a riveted grip hatched on its far side.
 */
const FLAYING_KNIFE: Stroke[] = [
  { d: 'M72 126 L70 76 Q92 84 92 126' },
  { d: 'M70 76 Q86 92 86 126', role: 'accent' },
  { d: 'M64 72 H88 V77 H64 Z' },
  { d: 'M70 72 V42 Q76 36 82 42 V72' },
  {
    d: dots([
      [76, 50],
      [76, 62],
    ]),
    role: 'soft',
  },
  { d: 'M78 46 l3 -2 M78 56 l3 -2 M78 66 l3 -2', role: 'ambient' },
]

/**
 * Myranda: the bed in Theon's prison cell, seen in 3/4, its headboard at the
 * far end, the frame's end rail hatched where it turns away, and the
 * blanket thrown back over its foot, its edge in the accent. In "The Bear
 * and the Maiden Fair" (episode 27) she and Violet free Theon from the cross
 * and lay him on a bed; the show gives her nothing of her own in the
 * season, so the bed of her one scene stands in. The show's alone.
 */
const PRISON_BED: Stroke[] = [
  { d: 'M22 130 V78 M46 108 V60' },
  { d: 'M22 86 L46 68 M22 100 L46 82', role: 'soft' },
  { d: 'M22 120 H116 L140 100 M22 130 H116 L140 110 V100 M116 120 V130' },
  { d: 'M22 130 V150 M116 130 V150 M140 110 V138' },
  { d: 'M120 128 l5 -4 M128 122 l5 -4 M134 116 l4 -3', role: 'ambient' },
  { d: 'M24 120 Q22 112 30 110 H112 L136 92 Q142 94 140 100' },
  { d: 'M46 100 L50 96 H136', role: 'soft' },
  {
    d: 'M74 110 Q80 102 90 106 Q98 96 108 100 L124 88 Q132 90 136 92',
    role: 'accent',
  },
  { d: 'M74 110 Q70 126 78 138 Q88 132 96 140 Q104 132 112 136 L116 128' },
  { d: 'M86 114 Q84 126 88 134 M100 112 Q100 124 104 134', role: 'soft' },
  shadow(80, 154, 60),
]

/**
 * Myranda's hunting bow stood on its lower tip, its belly with a second
 * line for its thickness and the grip bound: she hunts with it at Ramsay's
 * side from "The Lion and the Rose" (episode 32) and corners Sansa with it
 * in "Mother's Mercy" (episode 50). Its stage and her death share it.
 */
const HUNTING_BOW: Stroke[] = [
  { d: 'M66 30 Q104 46 104 92 Q104 138 66 154' },
  { d: 'M66 30 Q98 48 98 92 Q98 136 66 154', role: 'soft' },
  { d: 'M66 30 L66 154', role: 'soft' },
  { d: 'M98 84 h8 M98 100 h8 M99 88 h6 M99 92 h6 M99 96 h6', role: 'soft' },
]

/** The arrow on the bow's string, its head in the accent and its fletching soft. */
const HUNTING_ARROW: Stroke[] = [
  { d: 'M60 92 H140' },
  { d: 'M140 92 L130 86 V98 Z', role: 'accent' },
  { d: 'M60 92 l-8 -6 M60 92 l-8 6 M66 92 l-8 -6 M66 92 l-8 6', role: 'soft' },
]

/**
 * Big and Little Walder Frey's helm, the same silver plate for the two
 * cousins: a closed helm with its eye slit, a rib down the crown, the
 * breaths at the face and the far side hatched. Each takes his own crest
 * on top, as Bran sees them ride at the harvest feast in Bran II (chapter
 * 90).
 */
const WALDER_HELM: Stroke[] = [
  { d: 'M50 142 L46 92 Q46 58 80 54 Q114 58 114 92 L110 142 Z' },
  { d: 'M50 96 H74 M86 96 H110', role: 'soft' },
  { d: 'M48 100 H76 M84 100 H112' },
  { d: 'M80 56 V100 M48 118 Q80 126 112 118', role: 'soft' },
  {
    d: dots([
      [62, 128],
      [70, 130],
      [90, 130],
      [98, 128],
    ]),
    role: 'soft',
  },
  {
    d: 'M98 66 l8 -5 M104 80 l8 -5 M104 112 l8 -5 M104 126 l8 -5',
    role: 'ambient',
  },
]

/** Big Walder's crest, shaped like a castle (Bran II, chapter 90). */
const CASTLE_CREST: Stroke = {
  d: 'M66 54 V30 H72 V36 H78 V30 H84 V36 H90 V30 H96 V54 M76 54 V46 Q80 42 84 46 V54',
  role: 'accent',
}

/** Little Walder's crest of silk streamers (Bran II, chapter 90). */
const STREAMERS: Stroke = {
  d: 'M80 54 Q84 34 96 28 M80 54 Q98 40 118 44 Q126 48 130 60 M80 54 Q100 50 112 64 Q118 74 116 86',
  role: 'accent',
}

/**
 * Wyman Manderly: the litter he is carried in, too fat to sit a horse, as
 * he comes to Winterfell for the harvest feast in Bran II (chapter 90): its
 * roof, the window with its curtains drawn back in the accent, its feet
 * and the two long poles. The show brings him in "The Winds of Winter"
 * (episode 60) with nothing of his own, so the book's litter is drawn.
 */
const LITTER: Stroke[] = [
  { d: 'M44 64 L80 50 L116 64 M40 66 H120' },
  { d: 'M46 66 V128 H114 V66' },
  { d: 'M60 76 Q58 98 62 116 H98 Q102 98 100 76 Z' },
  { d: 'M60 76 Q70 92 66 116 M100 76 Q90 92 94 116', role: 'accent' },
  { d: 'M14 112 H146 M14 120 H146' },
  { d: 'M54 128 L50 150 M106 128 L110 150', role: 'soft' },
  { d: 'M104 72 l6 -4 M106 92 l6 -4 M106 108 l6 -4', role: 'ambient' },
  shadow(80, 154, 46),
]

/**
 * Donella Hornwood: a shield with the moose's head of House Hornwood, seen
 * from the front as the arms have it, hatched because it is black, its
 * broad antlers in the accent. She comes to Winterfell a widow for the
 * harvest feast in Bran II (chapter 90) and carries nothing of her own, so
 * the arms of her house stand in. The book's alone. The shield and its
 * arms, without the shadow, are its first six strokes, which her death
 * lays down.
 */
const MOOSE_SHIELD: Stroke[] = [
  { d: 'M36 36 H124 V80 Q124 126 80 150 Q36 126 36 80 Z' },
  { d: 'M42 42 H118 V80 Q118 120 80 142', role: 'soft' },
  { d: 'M74 76 Q80 72 86 76 L88 102 Q86 116 80 120 Q74 116 72 102 Z' },
  {
    d: 'M74 78 Q60 80 54 70 L48 72 L50 62 L44 60 L52 52 L58 58 L62 50 L66 60 Q70 70 76 72 M86 78 Q100 80 106 70 L112 72 L110 62 L116 60 L108 52 L102 58 L98 50 L94 60 Q90 70 84 72',
    role: 'accent',
  },
  { d: 'M76 92 l6 -3 M76 102 l6 -3 M77 110 l5 -3', role: 'ambient' },
  { d: 'M112 96 l6 -4 M106 116 l6 -4', role: 'ambient' },
  shadow(80, 156, 30),
]

/**
 * The first season's northern household and bannermen (#1054), the second
 * stage's Winterfell and northern cast (#1473) and the third stage's
 * Myranda (#1649), keyed by record id.
 */
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
  'farlen': HOUND,
  'meera-reed': BOW,
  'jojen-reed': LIZARD_LION,
  // Ramsay Snow: the flaying knife stood point down in a chopping block,
  // for the Bastard of Bolton of "Mhysa" (episode 30, #1641), the boy who
  // comes at Theon with a knife through season 3, and of Theon VI (chapter
  // 140), whose house flays its enemies. The blade's edge is the accent.
  'ramsay-snow': [...KNIFE_BLOCK, ...FLAYING_KNIFE, shadow(80, 156, 40)],
  'big-walder-frey': [...WALDER_HELM, CASTLE_CREST, shadow(80, 146, 40)],
  'little-walder-frey': [...WALDER_HELM, STREAMERS, shadow(80, 146, 40)],
  'wyman-manderly': LITTER,
  'donella-hornwood': MOOSE_SHIELD,
  'myranda': PRISON_BED,
} satisfies Drawings

/** The northern household drawn again later in the story. */
export const northRedrawn: Redrawings = {
  'tomard': [
    // The belt fallen whole on the floor, the letter tipped over beside it,
    // its foot drawn now the belt no longer hides it: he is cut down in the
    // throne room in Eddard XIV (chapter 50). The book's alone; episode 7,
    // where the show leaves him, orders it.
    {
      episode: 7,
      chapter: 50,
      source: 'chapter',
      value: [
        ...moved(
          BELT_LETTER.slice(3, 7),
          'translate(-12 156) scale(0.82 0.6) translate(0 -138)',
        ),
        ...moved(
          [{ d: 'M98 100 L56 96' }, ...BELT_LETTER.slice(0, 3)],
          'translate(124 138) rotate(16) scale(0.75) translate(-80 -78)',
        ),
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
    // The standard fallen whole on the ground, the cloth draped beside its
    // staff: he is dead by Arya VI of A Storm of Swords (chapter 178), where
    // Tom of Sevenstreams names him among the dead laid at the Hound's feet
    // (A Wiki of Ice and Fire, Alyn, #1628). The book's alone; episode 21
    // orders it.
    {
      episode: 21,
      chapter: 178,
      value: [
        { d: `M14 150 H140 ${circle(144, 150, 4)}` },
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
    // The greatsword slid off the fur, its hilt still on it and its point
    // down on the ground: Tormund kills him in "Battle of the Bastards"
    // (episode 59), and the Bolton men kill him at the Red Wedding in
    // Catelyn VII of A Storm of Swords (chapter 195).
    {
      episode: 59,
      chapter: 195,
      value: [
        ...moved(
          GREATSWORD_FUR.slice(0, 2),
          'translate(6 135) scale(0.66) translate(-14 -116)',
        ),
        ...moved(
          GREATSWORD_FUR.slice(2, 8),
          'translate(8 12) rotate(22 24 112)',
        ),
        { d: 'M8 158 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'rickard-karstark': [
    // The shield fallen flat on its back on the ground, the sun still on
    // it: Robb has him beheaded in "Kissed by Fire" (episode 25) and in
    // Catelyn III of A Storm of Swords (chapter 164).
    {
      episode: 25,
      chapter: 164,
      value: [
        ...moved(
          [...SUNBURST.slice(0, 1), ...SUNBURST.slice(2, 5)],
          'translate(0 150) scale(1 0.4) translate(0 -140)',
        ),
        { d: 'M32 130.8 V135 A48 19.2 0 0 0 128 135 V130.8' },
        { d: 'M116 142 l6 -3 M104 148 l6 -3', role: 'ambient' },
        { d: 'M10 157 H150', role: 'ambient', dashed: true },
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
    // The morningstar fallen on the ground, its head resting on a spike:
    // Ryman Frey kills her at the Red Wedding, in Catelyn VII of A Storm of
    // Swords (chapter 195). The book's alone; episode 29 orders it.
    {
      episode: 29,
      chapter: 195,
      value: [
        ...moved(
          MORNINGSTAR.slice(0, 5),
          'translate(124 124) rotate(42.3) translate(-104 -60)',
        ),
        { d: 'M8 154 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'wendel-manderly': [
    // The trident fallen across the waves: he is killed at the Red Wedding,
    // in Catelyn VII of A Storm of Swords (chapter 195). The record is the
    // books' alone (#1628), so the stage is too; episode 29 orders it.
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
  'farlen': [
    // The hound gone and its collar lying empty on the ground, the leash
    // still tied to the kennel post: Theon beheads him in Theon V (chapter
    // 130). The book's alone; episode 18 only orders it. How he dies is not
    // drawn.
    {
      episode: 18,
      chapter: 130,
      value: [
        { d: 'M118 150 V70 M124 150 V72' },
        { d: circle(121, 80, 4), role: 'soft' },
        { d: 'M121 84 Q112 120 96 134 Q86 140 78 138' },
        {
          d: `${ellipse(56, 140, 22, 7)} ${ellipse(56, 136, 22, 7)}`,
          role: 'accent',
        },
        {
          d: dots([
            [42, 136],
            [56, 133],
            [70, 136],
          ]),
          role: 'soft',
        },
        { d: 'M120 100 l4 -3 M120 116 l4 -3 M120 132 l4 -3', role: 'ambient' },
        { d: 'M10 154 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'jojen-reed': [
    // The lizard-lion uncurled and lying long on the ground: he dies at the
    // mouth of the Three-Eyed Raven's cave in "The Children" (episode 40).
    // The books leave him alive, so the stage is the show's alone and
    // chapter 344 only orders it. How he dies is not drawn.
    {
      episode: 40,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M8 139 L40 132 Q46 127 54 130 Q90 124 120 132 Q138 138 150 150' },
        {
          d: 'M8 139 Q14 143 30 144 Q40 147 54 146 Q80 150 124 146 Q138 146 150 150',
        },
        {
          d: 'M12 139 l3 -3 l3 3 l3 -3 l3 3 l3 -3 l3 3 l3 -3 l3 3',
          role: 'soft',
        },
        {
          d: 'M60 132 l4 -6 l4 6 M76 129 l5 -6 l3 7 M92 128 l5 -6 l3 7 M108 129 l5 -6 l2 7',
          role: 'accent',
        },
        {
          d: 'M48 146 l-4 8 M70 148 l-2 8 M98 148 l2 8 M118 146 l4 8',
          role: 'soft',
        },
        { d: 'M66 138 l4 -2 M84 136 l4 -2 M102 137 l4 -2', role: 'ambient' },
        { d: 'M8 158 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'ramsay-snow': [
    // The knife out of its block and lying on the ground: he dies at
    // Winterfell after the battle, in "Battle of the Bastards" (episode
    // 59). The books leave him alive, so the stage is the show's alone and
    // chapter 344 only orders it. How he dies is not drawn.
    {
      episode: 59,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(FLAYING_KNIFE, 'translate(0 66) rotate(90 80 80)'),
        { d: 'M8 158 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'little-walder-frey': [
    // The helm on its side in the snow: his frozen
    // body is found in a snowbank at Winterfell in Theon I of A Dance with
    // Dragons (chapter 323). The book's alone; episode 50, where the
    // show's Winterfell reaches the same days, only orders it. How he dies
    // is not drawn.
    {
      episode: 50,
      chapter: 323,
      value: [
        ...moved(
          [...WALDER_HELM, STREAMERS],
          'translate(0 18) rotate(-90 80 98)',
        ),
        {
          d: 'M8 150 Q40 142 80 148 Q120 154 152 146',
          role: 'ambient',
          dashed: true,
        },
        {
          d: dots([
            [24, 40],
            [130, 30],
            [140, 80],
            [30, 96],
            [100, 20],
          ]),
          role: 'ambient',
        },
      ],
    },
  ],
  'donella-hornwood': [
    // The shield fallen flat on the ground: Ser Rodrik comes back with a
    // prisoner held for her murder, in Bran V (chapter 109). The book's alone; episode 15 only orders it. How she
    // dies is not drawn.
    {
      episode: 15,
      chapter: 109,
      value: [
        ...moved(
          MOOSE_SHIELD.slice(0, 6),
          'translate(0 150) scale(1 0.34) translate(0 -150)',
        ),
        { d: 'M10 156 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'myranda': [
    // The hunting bow with an arrow on its string: she rides out with Ramsay
    // and his hounds and shoots the girl they hunt in "The Lion and the
    // Rose" (episode 32), and keeps the bow to the end. The record is the
    // show's alone; Reek I of A Dance with Dragons (chapter 284), where the
    // books' Ramsay hunts a girl with his dogs, orders it.
    {
      episode: 32,
      chapter: 284,
      value: [...HUNTING_BOW, ...HUNTING_ARROW, shadow(84, 158, 34)],
    },
    // The bow fallen flat on the ground and the arrow lying apart from it:
    // she dies at Winterfell in "Mother's Mercy" (episode 50). Theon I of A
    // Dance with Dragons (chapter 323), where Theon escapes the castle,
    // orders it. How she dies is not drawn.
    {
      episode: 50,
      chapter: 323,
      value: [
        ...moved(
          HUNTING_BOW,
          'translate(0 150) scale(1 0.45) translate(0 -111) rotate(-90 85 92)',
        ),
        ...moved(HUNTING_ARROW, 'translate(-6 65) rotate(3 100 92)'),
        { d: 'M10 164 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
}
