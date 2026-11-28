import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { GLOVE, STAG } from './south'

/**
 * Meryn Trant: the white enamelled helm of the Kingsguard with its visor
 * raised, for the knight who breaks up Arya's lesson in episode 8 and
 * rides in the Hand's tourney in Sansa II (chapter 30). White, so only its
 * far side is hatched; the accent is the visor. His first drawing and his
 * death share it.
 */
const WHITE_HELM: Stroke[] = [
  { d: 'M52 114 V72 Q52 46 80 44 Q108 46 108 72 V114 Q80 122 52 114 Z' },
  { d: 'M54 64 Q80 50 106 64 L104 52 Q80 38 56 52 Z', role: 'accent' },
  { d: 'M62 74 H98 V100 Q80 106 62 100 Z', role: 'soft' },
  { d: `${circle(55, 62, 2)} ${circle(105, 62, 2)}`, role: 'soft' },
  { d: 'M52 114 L46 128 Q80 140 114 128 L108 114' },
  { d: 'M102 80 l5 -3 M102 96 l5 -3 M104 120 l5 -3', role: 'ambient' },
  shadow(80, 144, 36),
]

/** The far side of a white cloak, hatched, and its shadow. */
const CLOAK_SHADE: Stroke[] = [
  { d: 'M118 104 l5 -3 M120 120 l5 -3 M122 136 l5 -3', role: 'ambient' },
  shadow(80, 162, 48),
]

/**
 * Boros Blount: the white cloak of the Kingsguard falling from the
 * shoulder, held there by its round brooch, the white hilt of his sword
 * showing past it: the white he stands in beside Joffrey and Mandon in
 * "Blackwater" (episode 19), and at the small council in Eddard VIII
 * (chapter 34). The accent is the brooch.
 */
const SHOULDER_CLOAK: Stroke[] = [
  {
    d: 'M30 92 Q32 58 62 52 Q92 50 106 66 Q128 96 132 150 Q104 158 78 152 Q52 158 28 150 Q26 120 30 92 Z',
  },
  {
    d: 'M50 78 Q60 112 54 152 M58 72 Q84 104 82 152 M66 66 Q102 98 108 154',
    role: 'soft',
  },
  { d: `${circle(50, 70, 9)} ${circle(50, 70, 3.5)}`, role: 'accent' },
  { d: `M110 62 L130 36 M100 54 L118 68 ${circle(133, 32, 3.5)}` },
  ...CLOAK_SHADE,
]

/**
 * The royal banner, the stag of Joffrey's house crowned on it, its cloth
 * bending on the wind. The stag is Joffrey's own (`south.ts`). Mandon
 * Moore's first drawing and his death share it.
 */
const STAG_BANNER: Stroke[] = [
  {
    d: 'M42 30 Q70 22 92 32 Q112 40 132 32 L122 62 L136 92 Q112 84 92 94 Q70 104 42 98',
  },
  { d: 'M108 38 Q102 64 110 88', role: 'soft' },
  ...moved(STAG.slice(0, 8), 'translate(48 34) scale(0.42)'),
  { d: 'M67 45 L66 39 L70 42 L72.5 37 L75 42 L79 39 L78 45 Z', role: 'soft' },
  { d: 'M116 50 l5 -3 M118 76 l5 -3', role: 'ambient' },
]
/**
 * Mandon Moore: the king's banner borne on its pole, for the Kingsguard
 * Tyrion orders to carry it in "Blackwater" (episode 19). In Sansa IV
 * (chapter 52) he guards the council doors; the book has him carry Joffrey's
 * banner in the same battle. The accent is the stag.
 */
const BANNER_POLE: Stroke[] = [
  { d: `${circle(40, 20, 4)} M40 24 V150` },
  ...STAG_BANNER,
  shadow(40, 156, 18),
]

/**
 * A heater shield in 3/4, its far edge hatched. Beric Dondarrion's shield is
 * this one.
 */
const HEATER: Stroke[] = [
  { d: 'M44 40 H116 V80 Q116 124 80 148 Q44 124 44 80 Z' },
  { d: 'M116 40 L122 44 V82 Q120 126 84 152', role: 'soft' },
]

/**
 * The golden oak leaf of House Oakheart, worn as a brooch, its lobes and its
 * midrib.
 */
const LEAF_BROOCH =
  'M80 84 V80 Q72 80 72 74 Q66 74 67 68 Q62 66 65 61 Q61 57 66 54 Q68 49 74 51 Q76 46 80 46 Q84 46 86 51 Q92 49 94 54 Q99 57 95 61 Q98 66 93 68 Q94 74 88 74 Q88 80 80 80 M80 80 V52'
/**
 * Arys Oakheart: the white cloak of the Kingsguard, fastened at the throat
 * by the golden oak leaf of his house, for the knight in the throne room
 * when Barristan is dismissed in Sansa V (chapter 58). The book's alone. The
 * accent is the leaf.
 */
const LEAF_CLOAK: Stroke[] = [
  {
    d: 'M62 50 Q80 60 98 50 Q114 92 126 150 Q102 158 80 152 Q58 158 34 150 Q46 92 62 50 Z',
  },
  { d: 'M62 50 Q80 40 98 50', role: 'soft' },
  {
    d: 'M70 70 Q62 108 56 152 M80 74 Q80 112 82 152 M90 70 Q98 108 106 154',
    role: 'soft',
  },
  { d: 'M34 150 Q80 140 126 150', role: 'soft' },
  ...CLOAK_SHADE,
  { d: LEAF_BROOCH, role: 'accent', transform: 'translate(0 -4)' },
]

/** A cup on its foot. Lancel Lannister's tray carries it. */
const CUP = 'M98 126 L102 140 H114 L118 126'
/** The tray Lancel Lannister serves from, on its shadow. */
const TRAY: Stroke[] = [{ d: ellipse(86, 142, 50, 9) }, shadow(86, 156, 50)]
/**
 * Lancel Lannister: a tall wine jug and a cup on a tray, for the squire who
 * pours the king's wine in episode 3 and in Eddard VII (chapter 31). The
 * wine is red in both media, so he keeps `red`; the accent is the wine.
 */
const JUG: Stroke[] = [
  {
    d: 'M64 138 Q54 118 60 100 Q66 86 64 74 L58 64 H82 L78 74 Q76 86 82 100 Q88 118 80 138 Z',
  },
  { d: 'M58 64 L52 60', role: 'soft' },
  { d: 'M80 78 Q98 82 94 108 Q92 118 84 122' },
  { d: CUP },
  { d: ellipse(108, 126, 10, 3), role: 'accent' },
  { d: 'M74 96 l5 -3 M76 108 l5 -3 M74 120 l5 -3', role: 'ambient' },
  ...TRAY,
]

/** The seven-pointed star of the Faith, in two halves split down its middle. */
const STAR_LEFT =
  'M70 74 L64.8 89.2 L49.7 83.8 L58.3 97.3 L44.7 105.8 L60.6 107.5 L58.7 123.4 L70 112'
const STAR_RIGHT =
  'M70 74 L75.2 89.2 L90.3 83.8 L81.7 97.3 L95.3 105.8 L79.4 107.5 L81.3 123.4 L70 112'
/** The crack the star breaks along. */
const STAR_CRACK = 'M70 112 L73 101 L67 90 L70 74'

/**
 * A wine cask stood on end, its hoops and the funnel in its head. Dontos
 * Hollard's first drawing and his death share it.
 */
const CASK: Stroke[] = [
  {
    d: `${ellipse(80, 54, 30, 7)} M50 54 Q42 102 50 150 Q80 158 110 150 Q118 102 110 54`,
  },
  { d: 'M46.5 76 Q80 86 113.5 76 M46.5 128 Q80 138 113.5 128', role: 'soft' },
  { d: 'M66 61 Q60 104 66 155 M94 61 Q100 104 94 155', role: 'soft' },
  { d: 'M104 92 l5 -3 M106 106 l5 -3 M104 140 l5 -3', role: 'ambient' },
]
/**
 * Dontos Hollard: a wine cask with a funnel in it, for the drunken knight
 * Joffrey has drowned in wine at his nameday tourney until Sansa saves him,
 * in episode 11 and in Sansa I of A Clash of Kings; the book brings him to
 * court in Sansa V (chapter 58). The jester's cap stays out (owner). The
 * accent is the funnel. Retinted from `wine`: nothing on it is red.
 */
const FUNNEL_CASK: Stroke[] = [
  ...CASK,
  { d: 'M64 20 H96 L84 38 V50 H76 V38 Z', role: 'accent' },
  shadow(80, 160, 40),
]

/**
 * Hugh of the Vale: his shield fallen face up in the sand of the lists, a
 * splinter of lance beside it. Gregor kills him in the joust in the scene
 * his record opens in, in episode 4 and in Sansa II (chapter 30): a change
 * in the episode the record opens in belongs in the first drawing, so the
 * death is drawn here and there is no stage. The accent is the splinter.
 */
const FALLEN_SHIELD: Stroke[] = [
  {
    d: 'M28 122 Q30 106 80 102 Q130 106 132 122 Q118 140 80 148 Q42 140 28 122 Z',
  },
  {
    d: 'M36 122 Q38 110 80 108 Q122 110 124 122 Q112 136 80 142 Q48 136 36 122 Z',
    role: 'soft',
  },
  { d: 'M96 148 L134 132 L138 136 L144 128 L132 128 L94 142', role: 'accent' },
  { d: 'M110 132 l6 -3 M116 124 l5 -3', role: 'ambient' },
  { d: 'M10 156 H150', role: 'ambient', dashed: true },
  {
    d: dots([
      [22, 150],
      [40, 154],
      [60, 152],
      [120, 152],
      [140, 150],
    ]),
    role: 'soft',
  },
]

/**
 * Tobho Mott: a fluted breastplate and its pauldrons on a stand, the work in
 * the armourer's shop Eddard visits in episode 4 and in Eddard VI (chapter
 * 28). The far side is hatched; the accent is the fluting.
 */
const ARMOUR_STAND: Stroke[] = [
  { d: 'M54 60 Q80 52 106 60 L104 108 Q80 120 56 108 Z' },
  { d: 'M68 58 Q80 66 92 58', role: 'soft' },
  {
    d: 'M54 62 Q40 64 36 80 Q46 84 56 78 M106 62 Q120 64 124 80 Q114 84 104 78',
  },
  {
    d: 'M70 72 Q72 92 74 112 M80 68 V116 M90 72 Q88 92 86 112',
    role: 'accent',
  },
  { d: 'M78 118 V148 M82 118 V148 M62 148 H98' },
  { d: 'M96 76 l5 -3 M96 90 l5 -3 M96 104 l5 -3', role: 'ambient' },
  shadow(80, 154, 30),
]

/**
 * Mhaegen: her baby swaddled in a blanket, the opening of the wrap empty,
 * the child she shows Eddard in Littlefinger's brothel in episode 5. The
 * show's alone. The accent is the blanket's wrap.
 */
const SWADDLE: Stroke[] = [
  ...moved(
    [
      {
        d: 'M58 78 Q56 44 80 42 Q104 44 102 78 Q110 112 100 136 Q92 152 80 152 Q68 152 60 136 Q50 112 58 78 Z',
      },
      { d: ellipse(80, 66, 12, 13), role: 'soft' },
      { d: 'M58 84 Q80 96 104 116 M102 84 Q80 100 60 122', role: 'soft' },
      { d: 'M54 104 Q80 116 106 104 M56 112 Q80 124 104 112', role: 'accent' },
      { d: 'M96 128 l5 -3 M98 140 l4 -2.4', role: 'ambient' },
    ],
    'rotate(-28 80 100)',
  ),
  shadow(84, 166, 46),
]

/**
 * Beric Dondarrion: a shield with the forked lightning bolt of his house,
 * the field hatched because it is black, for the lord Eddard sends after
 * Gregor in episode 6, in the city from Eddard VI (chapter 28). The accent
 * is the bolt.
 */
const BOLT = 'M90 50 L70 86 H84 L64 126 L98 80 H84 L100 50 Z M76 108 L60 112'
const BLACK_FIELD: Stroke[] = [
  { d: 'M50 46 H110', role: 'soft' },
  {
    d: 'M50 60 l6 -3 M50 76 l6 -3 M52 92 l6 -3 M104 100 l6 -3 M98 116 l6 -3',
    role: 'ambient',
  },
  shadow(82, 156, 30),
]
const LIGHTNING_SHIELD: Stroke[] = [
  ...HEATER,
  { d: BOLT, role: 'accent' },
  ...BLACK_FIELD,
]

/** A longsword, point up to the left. Beric's and Thoros's blades. */
const LONGSWORD = `M97 125 L44 38 L104 119 Z M83 132 L117 110 M100 121 L112 140 ${circle(114, 143, 3.5)}`
/** The flame Beric's blade burns with. */
const BLADE_FLAME =
  'M92 116 Q74 110 74 94 Q62 90 62 76 Q50 72 50 58 Q40 50 42 32 Q50 42 56 42 Q54 30 62 22 Q62 36 70 46 Q78 54 76 64 Q88 70 84 82 Q96 90 92 102 Q100 110 92 116 Z'

/** The red robe of a priest of R'hllor, spread on the ground. */
const ROBE =
  'M14 140 Q30 118 60 124 Q80 112 104 122 Q130 116 146 136 Q120 150 80 148 Q40 152 14 140 Z'
const ROBE_FOLDS: Stroke = {
  d: 'M40 128 Q48 140 44 148 M70 122 Q80 136 74 148 M112 124 Q116 136 110 148',
  role: 'soft',
}
/**
 * Thoros of Myr: a wineskin lying on the red robe of a priest of R'hllor,
 * for the drinking priest of the tourney in Sansa II (chapter 30) and of
 * the outlaws in episode 22. The robe is red in both media, so he keeps
 * `red`; the accent is the robe.
 */
const ROBE_WINESKIN: Stroke[] = [
  { d: ROBE, role: 'accent' },
  ROBE_FOLDS,
  {
    d: 'M56 116 Q40 100 52 84 Q66 72 90 78 Q108 84 108 100 L118 96 L120 104 L108 108 Q96 120 70 120 Q60 120 56 116 Z',
  },
  { d: 'M118 96 L124 92 L126 100 L120 104', role: 'soft' },
  { d: 'M62 88 Q76 82 94 88', role: 'soft' },
  { d: 'M92 100 l6 -3 M86 110 l6 -3', role: 'ambient' },
  shadow(80, 156, 64),
]

/**
 * A swan side on, its neck curved and no eye. The accent is the beak.
 * Balon Swann's arms are two of them.
 */
const SWAN: Stroke[] = [
  {
    d: 'M24 128 Q24 108 46 106 Q60 104 60 92 Q56 76 62 64 Q66 56 72 60 L80 62 L72 66 Q66 72 70 88 Q74 106 66 118 Q58 130 24 128 Z',
  },
  { d: 'M32 120 Q42 110 58 114', role: 'soft' },
  { d: 'M72 60 L80 62 L72 66', role: 'accent' },
]
/**
 * Balon Swann: the arms of his house, per fess white and black, two swans
 * counterchanged: a black swan on the white upper half, facing the viewer's
 * left, and a white swan on the black lower half, contourny, facing the
 * viewer's right. For the knight who rides in
 * the Hand's tourney in Sansa II (chapter 30). The book's alone. The black
 * swan and the black half are hatched; the accent is the beaks.
 */
const SWAN_SHIELD: Stroke[] = [
  { d: 'M40 40 H120 V80 Q120 126 80 150 Q40 126 40 80 Z M40 94 H119' },
  ...moved(SWAN, 'translate(106 18) scale(-0.52 0.52)'),
  ...moved(SWAN, 'translate(54 66) scale(0.52)'),
  { d: 'M78 80 l5 -3 M86 80 l5 -3', role: 'ambient' },
  {
    d: 'M46 104 l6 -3 M48 116 l6 -3 M56 128 l6 -3 M104 104 l6 -3 M102 116 l6 -3 M94 130 l6 -3 M72 140 l6 -3',
    role: 'ambient',
  },
  shadow(80, 160, 34),
]

/**
 * Robar Royce: a frog-mouthed tilting helm and a lance's coronal, for the
 * knight who jousts in the Hand's tourney in Sansa II (chapter 30). The
 * book's alone. The accent is the coronal. His first drawing and his death
 * share the helm.
 */
const TILTING_HELM: Stroke[] = [
  { d: 'M48 124 V76 Q54 54 80 52 L112 60 L104 76 L120 82 Q120 112 108 126 Z' },
  { d: 'M104 76 L112 60', role: 'soft' },
  { d: 'M56 96 Q80 92 114 96', role: 'soft' },
  { d: 'M108 104 l5 -3 M106 116 l5 -3', role: 'ambient' },
  {
    d: 'M20 146 H60 M60 140 V152 M60 140 l8 -3 M60 146 h9 M60 152 l8 3',
    role: 'accent',
  },
  shadow(84, 132, 38),
]

/**
 * Yohn Royce: a bronze gorget and the plated pauldron on its shoulder, its
 * rivets showing, for Bronze Yohn, the lord of the Vale known by his bronze
 * armour, at the Hand's tourney in Sansa II (chapter 30) and on the Vale's
 * tribunal in episode 38. Its runes are left off, as lettering. The far
 * side is hatched; the accent is the gorget's plate.
 */
const BRONZE_GORGET: Stroke[] = [
  { d: ellipse(80, 58, 18, 6), role: 'soft' },
  { d: 'M44 62 Q80 50 116 62 L112 80 Q80 106 48 80 Z', role: 'accent' },
  { d: 'M50 86 Q80 112 110 86 L106 98 Q80 122 54 98 Z' },
  {
    d: 'M44 62 Q22 62 16 94 Q30 100 46 88 M18 102 Q32 108 48 98 M22 112 Q34 116 50 106',
  },
  {
    d: 'M116 62 Q138 62 144 94 Q130 100 114 88 M142 102 Q128 108 112 98 M138 112 Q126 116 110 106',
  },
  {
    d: dots([
      [58, 74],
      [80, 82],
      [102, 74],
      [30, 80],
      [130, 80],
    ]),
    role: 'soft',
  },
  { d: 'M132 70 l5 -3 M136 84 l5 -3 M100 104 l5 -3', role: 'ambient' },
  shadow(80, 140, 46),
]

/**
 * A butcher's cleaver. Mycah's first drawing and his death share it.
 */
const CLEAVER: Stroke[] = [
  { d: 'M88 150 L132 118 L118 102 L76 134 Z' },
  { d: 'M76 134 L56 116 M80 138 L60 120 M56 116 L60 120', role: 'soft' },
  { d: 'M120 112 l4 -3', role: 'ambient' },
]
/**
 * Mycah: a stick sword bound with twine and a butcher's cleaver crossed,
 * for the butcher's boy who spars with Arya on the kingsroad in episode 2
 * and in Sansa I (chapter 16). The accent is the twine. Retinted from
 * `wine`: nothing on it is red.
 */
const MYCAH: Stroke[] = [
  { d: 'M36 148 L108 44 M42 152 L114 48' },
  { d: 'M52 112 L74 126 M58 104 L80 118', role: 'accent' },
  ...CLEAVER,
  shadow(80, 158, 50),
]

/** Water, three rows of it, at the foot of the box. */
const WATER: Stroke = {
  d: 'M10 158 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 M26 172 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
  role: 'ambient',
}
/** Ground, as a dashed line. */
const GROUND: Stroke = { d: 'M10 154 H150', role: 'ambient', dashed: true }

/**
 * Daisy: a leather belt dropped in a loose S on the floor, its buckle in the
 * accent, the belt Joffrey makes Ros beat her with in "Garden of Bones"
 * (episode 14). The show's alone. The underside is hatched where the
 * leather turns over.
 */
const BELT: Stroke[] = [
  {
    d: 'M46 66 C84 60 130 70 120 92 C112 108 56 104 50 118 C46 132 100 138 130 140',
  },
  {
    d: 'M46 78 C82 72 112 80 108 92 C102 100 44 96 38 116 C34 140 96 150 128 152',
  },
  { d: 'M130 140 Q140 146 128 152' },
  {
    d: dots([
      [104, 146],
      [112, 147],
      [120, 148],
    ]),
    role: 'soft',
  },
  { d: 'M48 72 C84 66 120 74 114 92', role: 'soft' },
  { d: 'M32 60 H48 V84 H32 Z M40 72 H56', role: 'accent' },
  {
    d: 'M114 98 l5 -3 M108 102 l5 -3 M40 110 l5 -3 M38 120 l5 -3',
    role: 'ambient',
  },
  shadow(82, 160, 54),
]

/**
 * Jacelyn Bywater's iron hand, stood upright on its cuff: four rigid fingers
 * jointed in plates, the thumb, the back of the hand with its far face
 * hatched, and the leather straps that hold the cuff to his wrist, in the
 * accent. His first drawing and his death share it.
 */
const IRON_HAND: Stroke[] = [
  {
    d: 'M62 80 V50 Q62 44 66.5 44 Q71 44 71 50 V80 M71 50 V44 Q71 38 75.5 38 Q80 38 80 44 V80 M80 46 Q80 40 84.5 40 Q89 40 89 46 V80 M89 54 Q89 48 93.5 48 Q98 48 98 54 V80',
  },
  {
    d: 'M62 56 H71 M62 68 H71 M71 52 H80 M71 66 H80 M80 54 H89 M80 67 H89 M89 61 H98 M89 71 H98',
    role: 'soft',
  },
  { d: 'M62 80 Q60 96 62 112 M98 80 Q100 96 98 112' },
  { d: 'M62 82 Q80 88 98 80', role: 'soft' },
  { d: 'M62 102 L48 88 Q44 84 48 80 Q52 77 56 81 L63 88' },
  { d: 'M98 54 L104 58 V84 Q105 100 103 116 L98 112' },
  {
    d: 'M100 66 l3 -2 M100 80 l3 -2 M100 94 l3 -2 M100 108 l3 -2',
    role: 'ambient',
  },
  { d: 'M60 112 Q80 118 100 112 M60 112 V142 Q80 150 100 142 V112' },
  {
    d: 'M60 122 Q80 128 100 122 M60 134 Q80 140 100 134 M68 121 h6 v8 h-6 Z M68 133 h6 v8 h-6 Z',
    role: 'accent',
  },
]

/**
 * Jacelyn Bywater: his iron hand stood on its cuff, the hand strapped to the
 * wrist he lost his own at, as Tyrion first sees it in Tyrion II (chapter
 * 82). The books' alone.
 */
const STANDING_IRON_HAND: Stroke[] = [...IRON_HAND, shadow(80, 152, 30)]

/**
 * Hallyne: a jar of wildfire bedded in sand with another behind it, round
 * and short-necked, its clay roughened and pebbled for the grip, as the
 * pyromancers store it in the guild's vaults he shows Tyrion in Tyrion V
 * (chapter 94). The books' alone. The far side is hatched; the accent is
 * the liquid in its mouth.
 */
const WILDFIRE_JAR: Stroke[] = [
  {
    d: 'M68 74 Q48 82 46 106 Q46 122 54 132 M92 74 Q112 82 114 106 Q114 122 106 132',
  },
  { d: 'M68 74 V64 M92 74 V64' },
  { d: ellipse(80, 62, 14, 4) },
  { d: ellipse(80, 63, 9, 2.2), role: 'accent' },
  { d: 'M68 74 Q80 78 92 74', role: 'soft' },
  {
    d: dots([
      [60, 96],
      [70, 90],
      [84, 94],
      [96, 90],
      [58, 112],
      [72, 108],
      [88, 110],
      [66, 124],
      [80, 124],
      [94, 122],
    ]),
    role: 'soft',
  },
  { d: 'M102 94 l6 -3 M104 108 l6 -3 M100 122 l6 -3', role: 'ambient' },
  {
    d: 'M18 140 Q36 130 54 132 Q80 136 106 132 Q126 130 142 140',
    role: 'ambient',
  },
  {
    d: `M126 134 Q120 122 126 114 Q132 110 138 114 Q144 122 138 136 M129 113 V108 M135 113 V108 ${ellipse(132, 107, 4.5, 1.6)}`,
    role: 'soft',
  },
  { d: 'M12 150 H148', role: 'ambient', dashed: true },
]

/**
 * Lollys Stokeworth: a jewelled necklace laid out in its curve, a stone set
 * here and there along the chain and a pendant at its foot: the jewels her maid steals from her in Tyrion X (chapter 118),
 * which opens her household to Shae. The books' alone. The accent is the
 * pendant.
 */
const JEWELS: Stroke[] = [
  { d: 'M38 46 Q80 150 122 46' },
  {
    d: 'M38 46 q-5 -2 -4 -7 M122 46 q5 -2 4 -7 m0 0 q-3 -3 -6 0',
    role: 'soft',
  },
  {
    d: `${circle(53.8, 77.7, 3.5)} ${circle(64.3, 90.7, 3.5)} ${circle(95.8, 90.7, 3.5)} ${circle(106.3, 77.7, 3.5)}`,
    role: 'soft',
  },
  { d: circle(80, 101, 3) },
  { d: 'M80 104 L68 120 L80 142 L92 120 Z', role: 'accent' },
  { d: 'M68 120 L80 126 L92 120 M80 104 V126 V142', role: 'soft' },
  { d: 'M84 130 l4 -2.4 M83 136 l3 -1.8', role: 'ambient' },
  shadow(80, 154, 30),
]

/**
 * A white cloak of the Kingsguard folded in a stack, seen in 3/4: its top
 * face in the accent, the front and the end with their folds. It is white,
 * so nothing on it is hatched. Osmund Kettleblack's drawings share it.
 */
const FOLDED_WHITE_CLOAK: Stroke[] = [
  {
    d: 'M40 100 Q32 98 38 92 L62 80 H122 Q130 82 124 88 L102 99 Q99 100 96 100 Z',
    role: 'accent',
  },
  {
    d: 'M40 100 Q30 104 36 110 Q30 116 36 122 Q32 128 40 128 H96 Q102 128 102 122 V100 M102 122 L122 112 Q126 110 126 104 V88',
  },
  {
    d: 'M36 110 Q68 113 102 110 M36 122 Q68 124 102 120 M102 110 L126 98 M50 84 Q80 88 112 84',
    role: 'soft',
  },
]

/** A plain longsword lying on the ground, point to the right. */
const LYING_SWORD: Stroke[] = [
  { d: circle(24, 140, 4) },
  { d: 'M28 138 H42 V142 H28 Z' },
  { d: 'M42 131 H46 V149 H42 Z' },
  { d: 'M46 137 H128 L138 140 L128 143 H46' },
  { d: 'M48 140 H132', role: 'soft' },
  { d: 'M60 143 l3 3 M80 143 l3 3 M100 143 l3 3', role: 'ambient' },
]

/**
 * Osmund Kettleblack: a white cloak of the Kingsguard folded new, with a
 * plain longsword lying before it, for the sellsword the queen names to the
 * Kingsguard in Boros Blount's place in Tyrion XI (chapter 123). The books'
 * alone.
 */
const SWORN_CLOAK: Stroke[] = [
  ...FOLDED_WHITE_CLOAK,
  ...LYING_SWORD,
  shadow(80, 154, 62),
]

/**
 * Alayaya: a gown of flowing silk standing empty, cinched at the waist by a
 * beaded belt whose tails hang down the skirt, as Tyrion first sees her at
 * Chataya's in Tyrion III of A Clash of Kings (chapter 89). The books' alone.
 * The far side of the skirt is hatched; the accent is the beads.
 */
const BEADED_GOWN: Stroke[] = [
  { d: 'M64 36 L67 54 M96 36 L93 54', role: 'soft' },
  { d: 'M67 54 Q80 62 93 54 Q91 72 94 88 M67 54 Q69 72 66 88' },
  { d: ellipse(80, 88, 15, 4) },
  {
    d: `${circle(67, 90, 1.8)} ${circle(71.3, 91.3, 1.8)} ${circle(75.6, 91.8, 1.8)} ${circle(80, 92, 1.8)} ${circle(84.2, 91.8, 1.8)} ${circle(88.5, 91.3, 1.8)} ${circle(92.8, 90.1, 1.8)} ${circle(73, 120, 1.8)} ${circle(78, 126, 1.8)}`,
    role: 'accent',
  },
  { d: 'M74 94 Q71 106 73 118 M79 94 Q81 110 78 124', role: 'soft' },
  { d: 'M66 90 Q52 120 34 150 Q58 158 80 154 Q104 158 128 150 Q108 120 94 90' },
  { d: 'M68 98 Q60 126 54 154 M90 98 Q98 126 104 156', role: 'soft' },
  { d: 'M104 118 l5 -3 M110 130 l5 -3 M116 142 l5 -3', role: 'ambient' },
  shadow(80, 160, 50),
]

/** The golden rose of House Tyrell, its petals and the curl at its heart. */
const ROSE_BLOOM: Stroke[] = [
  {
    d: 'M80 66 Q90 64 92 74 Q102 78 96 88 Q98 98 86 98 Q80 104 74 98 Q62 98 64 88 Q58 78 68 74 Q70 64 80 66 Z',
    role: 'accent',
  },
  {
    d: 'M80 76 Q86 76 86 82 Q86 88 80 88 Q74 88 74 82 Q75 79 79 79',
    role: 'soft',
  },
  {
    d: 'M80 98 V126 M80 110 Q70 110 66 102 Q76 102 80 110 M80 118 Q90 118 94 110 Q84 110 80 118',
  },
]

/**
 * Garlan Tyrell: a shield with the golden rose of his house on it, for the
 * Tyrell son who asks the king to wed his sister at the court of rewards in
 * Sansa VIII (chapter 139). The books' alone: the show has no Garlan.
 * Nothing of his own reads before the story says what he wore in the
 * battle, so the house's rose stands in. The shield's far face is hatched;
 * the accent is the bloom.
 */
const ROSE_SHIELD: Stroke[] = [
  ...HEATER,
  { d: 'M50 46 H110 V80 Q110 120 80 141 Q50 120 50 80 Z', role: 'soft' },
  {
    d: 'M117 58 l4 -3 M117 78 l4 -3 M116 98 l4 -3 M111 118 l4 -3',
    role: 'ambient',
  },
  ...ROSE_BLOOM,
  shadow(82, 156, 30),
]

/**
 * Renly Baratheon's great helm with its golden antlers, the far side
 * hatched and the antlers in the accent: the armour Garlan Tyrell wears as
 * Renly's ghost on the Blackwater.
 */
const ANTLERED_HELM: Stroke[] = [
  { d: 'M54 132 V84 Q54 54 80 52 Q106 54 106 84 V132 Q80 140 54 132 Z' },
  { d: 'M88 53 Q94 92 90 136', role: 'soft' },
  { d: 'M58 86 Q72 82 86 86 L86 92 Q72 88 58 92 Z' },
  {
    d: dots([
      [64, 106],
      [72, 106],
      [80, 106],
      [64, 114],
      [72, 114],
      [80, 114],
    ]),
    role: 'soft',
  },
  {
    d: 'M62 62 Q50 46 40 26 M50 44 L36 42 M44 34 L48 20 M98 62 Q110 46 120 26 M110 44 L124 42 M116 34 L112 20',
    role: 'accent',
  },
  { d: 'M54 132 L46 146 Q80 156 114 146 L106 132' },
  {
    d: 'M96 76 l6 -3 M98 92 l6 -3 M98 108 l6 -3 M96 124 l6 -3',
    role: 'ambient',
  },
]

/** A wedge of cheese in 3/4, its rind along the back, the top face given. */
const CHEESE_WEDGE: Stroke[] = [
  { d: 'M30 112 Q44 98 62 96 L84 120 Z', role: 'accent' },
  { d: 'M30 112 V124 L84 134 V120' },
  { d: 'M34 112 Q46 101 61 99', role: 'soft' },
]

/** Two small round cakes, each a top and its side. */
const LEMON_CAKES: Stroke[] = [
  { d: `${ellipse(108, 112, 11, 4)} ${ellipse(120, 126, 11, 4)}` },
  {
    d: 'M97 112 V118 Q108 124 119 118 V112 M109 126 V132 Q120 138 131 132 V126',
  },
  { d: 'M114 120 l3 -2 M126 134 l3 -2', role: 'ambient' },
]

/** An oval platter seen from above, its rim showing at the front. */
const PLATTER: Stroke[] = [
  { d: ellipse(80, 122, 58, 18) },
  { d: 'M22 122 V126 Q24 144 80 144 Q136 144 138 126 V122', role: 'soft' },
]

/**
 * Olenna Tyrell: a platter with a wedge of cheese and lemon cakes, the
 * lunch she sets for Sansa in the gardens in "Dark Wings, Dark Words"
 * (episode 22): the lemon cakes are Sansa's favourite, the cheese her own.
 * The book's supper in Sansa I (chapter 150) has no such dish; the show is
 * the reference. The accent is the cheese.
 */
const OLENNA_LUNCH: Stroke[] = [
  ...PLATTER,
  ...CHEESE_WEDGE,
  ...LEMON_CAKES,
  shadow(80, 152, 56),
]

/**
 * Sansa's necklace laid large across the front of the platter (#1667):
 * three crystals in faceted settings and the fourth setting plainly empty,
 * the stone Olenna takes from it at the king's wedding.
 */
const EMPTY_SETTING_NECKLACE: Stroke[] = [
  { d: 'M26 118 Q80 168 134 118' },
  {
    d: 'M47.6 134 l7 8 l-7 11 l-7 -11 Z M40.6 142 h14 M69.2 142 l7 8 l-7 11 l-7 -11 Z M62.2 150 h14 M112.4 134 l7 8 l-7 11 l-7 -11 Z M105.4 142 h14',
    role: 'soft',
  },
  {
    d: `${circle(90.8, 150, 7)} M85.8 145 l-3 -3 M95.8 145 l3 -3 M85.8 155 l-3 3 M95.8 155 l3 3`,
    role: 'accent',
  },
]

/**
 * The tall standard of a house in 3/4: a pole with its finial, a crossbar
 * and the banner hanging from it to a point, its folds given.
 */
const HANGING_BANNER: Stroke[] = [
  { d: `${circle(80, 14, 4)} M80 18 V28 M80 128 V150` },
  { d: 'M42 28 H118' },
  { d: 'M48 28 V112 L80 128 L112 112 V28' },
  { d: 'M60 32 Q58 72 62 114 M100 32 Q102 72 98 114', role: 'soft' },
  { d: 'M104 52 l5 -3 M104 72 l5 -3 M104 92 l5 -3', role: 'ambient' },
]

/**
 * Megga Tyrell: the standard of her house, its golden rose on a banner
 * hung from the crossbar, for the cousin Sansa meets at Margaery's supper
 * in the Maidenvault in Sansa I (chapter 150). The books' alone. No page
 * gives her an object of her own, so the house's rose stands in. The
 * accent is the bloom.
 */
const ROSE_STANDARD: Stroke[] = [
  ...HANGING_BANNER,
  ...moved(ROSE_BLOOM, 'translate(80 76) scale(0.85) translate(-80 -95)'),
  shadow(80, 154, 20),
]

/**
 * Alla Tyrell: a swallow-tailed pennon with the golden rose of her house,
 * flying from its staff, for the cousin Sansa meets at Margaery's supper
 * in Sansa I (chapter 150). The books' alone. No page gives her an object
 * of her own, so the house's rose stands in. The accent is the bloom.
 */
const ROSE_PENNON: Stroke[] = [
  { d: `${circle(40, 20, 4)} M40 24 V150` },
  {
    d: 'M42 30 Q66 22 90 32 Q112 40 140 34 L114 54 L140 74 Q112 80 90 72 Q66 62 42 78',
  },
  { d: 'M96 36 Q92 54 96 72', role: 'soft' },
  { d: 'M118 44 l4 -3 M120 64 l4 -3', role: 'ambient' },
  ...moved(ROSE_BLOOM, 'translate(66 50) scale(0.5) translate(-80 -95)'),
  shadow(40, 156, 18),
]

/**
 * Elinor Tyrell: a round shield in 3/4 with the golden rose of her house,
 * standing on its rim, for the cousin who keeps Margaery's younger cousins
 * in hand when Sansa meets them in Sansa I (chapter 150). The books' alone.
 * No page gives her an object of her own, so the house's rose stands in.
 * Its far edge is hatched; the accent is the bloom.
 */
const ROSE_ROUNDEL: Stroke[] = [
  { d: ellipse(74, 96, 36, 50) },
  { d: 'M74 46 Q118 48 120 96 Q118 144 74 146' },
  { d: ellipse(74, 96, 30, 44), role: 'soft' },
  {
    d: 'M108 60 l6 -4 M112 80 l6 -4 M112 100 l6 -4 M110 120 l6 -4',
    role: 'ambient',
  },
  ...moved(ROSE_BLOOM, 'translate(74 98) scale(0.75) translate(-80 -95)'),
  shadow(82, 152, 40),
]

/**
 * A spear of the show's duel: a long shaft wrapped at the grip, a socket
 * and a heavy leaf-shaped blade with its midrib, the far half of the blade
 * hatched. The blade is the accent.
 */
const SPEAR: Stroke[] = [
  { d: 'M80 6 L87 42 Q87 56 82 62 H78 Q73 56 73 42 Z', role: 'accent' },
  { d: 'M80 14 V58', role: 'soft' },
  { d: 'M83 36 l3 -2 M83 50 l3 -2', role: 'ambient' },
  { d: 'M78 62 L77 72 H83 L82 62 M77 72 L76 76 H84 L83 72' },
  { d: 'M78 76 V146 Q80 149 82 146 V76' },
  { d: 'M78 96 L82 93 M78 101 L82 98 M78 106 L82 103', role: 'soft' },
]

/**
 * Oberyn Martell: his spear stood upright, for the prince who fights the
 * Mountain with it as Tyrion's champion in "The Mountain and the Viper"
 * (episode 38) and in Tyrion X (chapter 214), the season and the book that
 * bring him to King's Landing.
 */
const STANDING_SPEAR: Stroke[] = [...SPEAR, shadow(80, 152, 18)]

/**
 * Ellaria Sand: the banner of House Martell on its pole, the sun pierced by
 * a spear, for Prince Oberyn's paramour, who comes with him to King's
 * Landing in "The Lion and the Rose" (episode 32) and in Tyrion V (chapter
 * 182). Nothing of her own reads, so the house she comes with stands in.
 * The sun is red on the show's banner, so it is the accent.
 */
const SUN_BANNER: Stroke[] = [
  { d: `${circle(40, 20, 4)} M40 24 V150` },
  { d: 'M42 30 Q70 22 92 32 Q112 40 134 32 V94 Q112 102 92 94 Q70 86 42 98' },
  { d: circle(86, 62, 13), role: 'accent' },
  {
    d: 'M86 43 V39 M86 81 V85 M67 62 H63 M105 62 H109 M72.6 48.6 L69.8 45.8 M99.4 75.4 L102.2 78.2',
    role: 'soft',
  },
  { d: 'M60 88 L75 73 M97 51 L102 46 M99.5 43.5 L110 38 L104.5 48.5 Z' },
  { d: 'M120 44 l5 -3 M120 74 l5 -3', role: 'ambient' },
  shadow(40, 156, 18),
]

/** The first season's King's Landing guard and tourney cast (#1056), keyed by record id. */
export const COURT_DRAWINGS = {
  'meryn-trant': WHITE_HELM,
  'boros-blount': SHOULDER_CLOAK,
  'mandon-moore': BANNER_POLE,
  'arys-oakheart': LEAF_CLOAK,
  'lancel-lannister': JUG,
  'dontos-hollard': FUNNEL_CASK,
  'hugh-of-the-vale': FALLEN_SHIELD,
  'tobho-mott': ARMOUR_STAND,
  'mhaegen': SWADDLE,
  'beric-dondarrion': LIGHTNING_SHIELD,
  'thoros-of-myr': ROBE_WINESKIN,
  'balon-swann': SWAN_SHIELD,
  'robar-royce': TILTING_HELM,
  'yohn-royce': BRONZE_GORGET,
  'mycah': MYCAH,
  'daisy': BELT,
  'jacelyn-bywater': STANDING_IRON_HAND,
  'hallyne': WILDFIRE_JAR,
  'lollys-stokeworth': JEWELS,
  'osmund-kettleblack': SWORN_CLOAK,
  'alayaya': BEADED_GOWN,
  'garlan-tyrell': ROSE_SHIELD,
  // #1642: the third stage's King's Landing cast.
  'olenna-tyrell': OLENNA_LUNCH,
  'megga-tyrell': ROSE_STANDARD,
  'alla-tyrell': ROSE_PENNON,
  'elinor-tyrell': ROSE_ROUNDEL,
  'oberyn-martell': STANDING_SPEAR,
  'ellaria-sand': SUN_BANNER,
} satisfies Drawings

/** The King's Landing cast drawn again later in the story. */
export const courtRedrawn: Redrawings = {
  'meryn-trant': [
    // The white helm fallen on its side: Arya kills him in Braavos in
    // "Mother's Mercy" (episode 50). The show's alone: in the books he is
    // still alive, so chapter 344, the last, only orders it.
    {
      episode: 50,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(WHITE_HELM.slice(0, 6), 'translate(0 28) rotate(-90 80 92)'),
        GROUND,
      ],
    },
  ],
  'mandon-moore': [
    // The banner fallen into the river, its pole broken: he goes into the
    // Blackwater, his drowning told by A Clash of Kings 67 (chapter 141), the
    // first chapter known to confirm it. The show kills him in "Blackwater"
    // (episode 19), the episode he opens in, where no stage can sit, so the
    // stage is the book's (owner, as Mycah's).
    {
      episode: 19,
      chapter: 141,
      source: 'chapter',
      value: [
        ...moved(STAG_BANNER, 'translate(6 108) scale(1 0.48)'),
        { d: 'M48 124 L22 92 L18 82 L26 88 L24 80 L30 90' },
        WATER,
      ],
    },
  ],
  'arys-oakheart': [
    // The white cloak torn and fallen in a heap, the leaf brooch lying
    // beside it: he dies on the Greenblood, told in The Queenmaker of A
    // Feast for Crows (chapter 247). The book's alone; episode 8 orders it.
    {
      episode: 8,
      chapter: 247,
      source: 'chapter',
      value: [
        {
          d: 'M10 152 Q24 146 34 136 Q50 126 64 132 Q80 122 96 130 Q106 126 112 134 L106 140 L118 142 L110 148 L120 153 Q70 158 10 152 Z',
        },
        {
          d: 'M34 136 Q44 144 38 153 M64 132 Q72 142 66 154 M96 130 Q90 142 96 154',
          role: 'soft',
        },
        { d: 'M100 142 l5 -3 M102 150 l4 -2.4', role: 'ambient' },
        {
          d: LEAF_BROOCH,
          role: 'accent',
          transform: 'translate(56 74) rotate(70 80 65)',
        },
        GROUND,
      ],
    },
  ],
  'lancel-lannister': [
    // The jug gone from the tray, the seven-pointed star of the Faith in its
    // place and the cup left dry: he comes back a Sparrow, the star carved
    // into his brow in "Sons of the Harpy" (episode 44); the book shows him
    // a penitent of the Faith at Darry in Jaime IV of A Feast for Crows
    // (chapter 256).
    {
      episode: 44,
      chapter: 256,
      value: [
        {
          d: `${STAR_LEFT} ${STAR_RIGHT}`,
          role: 'accent',
          transform: 'translate(-2 16)',
        },
        { d: `${CUP} ${ellipse(108, 126, 10, 3)}` },
        { d: 'M112 132 l4 -2.4', role: 'ambient' },
        ...TRAY,
      ],
    },
    // The star broken in two on the tray and the cup knocked over: he dies
    // under the Great Sept in "The Winds of Winter" (episode 60). The
    // show's alone: in the books he is alive, so chapter 344 only orders
    // it.
    {
      episode: 60,
      chapter: 344,
      source: 'episode',
      value: [
        {
          d: `${STAR_LEFT} ${STAR_CRACK}`,
          role: 'accent',
          transform: 'translate(-14 36) rotate(-96 70 98)',
        },
        {
          d: `${STAR_RIGHT} ${STAR_CRACK}`,
          role: 'accent',
          transform: 'translate(22 30) rotate(80 70 98)',
        },
        {
          d: `${CUP} ${ellipse(108, 126, 10, 3)}`,
          transform: 'translate(-2 -4) rotate(-90 118 134)',
        },
        ...TRAY,
      ],
    },
  ],
  'dontos-hollard': [
    // The cask on its side by the water, the funnel gone: Littlefinger's men
    // kill him in "Breaker of Chains" (episode 33), and in Sansa V of A
    // Storm of Swords (chapter 205). The accent moves to the cask's hoops.
    {
      episode: 33,
      chapter: 205,
      value: [
        ...moved(
          CASK.map((stroke, index) =>
            index === 1 ? { ...stroke, role: 'accent' as const } : stroke,
          ),
          'translate(-4 10) rotate(-90 80 100) scale(0.86)',
        ),
        { d: 'M10 154 H150', role: 'ambient' },
        { ...WATER, transform: 'translate(0 10)' },
      ],
    },
  ],
  'mhaegen': [
    // The blanket empty and rumpled on the floor: the Gold Cloaks take her
    // baby from her arms and Janos Slynt kills the child, in "The North
    // Remembers" (episode 11). The show's alone; chapter 80 only orders it.
    {
      episode: 11,
      chapter: 80,
      source: 'episode',
      value: [
        {
          d: 'M18 146 L30 128 Q34 118 40 112 Q80 104 116 110 L124 104 L128 120 L144 146 Q112 152 80 150 Q48 154 18 146 Z',
        },
        { d: 'M24 142 Q52 148 80 146 Q110 148 138 142', role: 'accent' },
        {
          d: 'M52 114 Q62 130 50 146 M84 108 Q92 128 82 150 M110 112 Q104 130 116 147',
          role: 'soft',
        },
        { d: 'M116 110 L128 120', role: 'soft' },
        { d: 'M128 134 l5 -3 M134 142 l4 -2.4', role: 'ambient' },
        GROUND,
      ],
    },
  ],
  'beric-dondarrion': [
    // The same shield with his sword before it, the blade burning: he lights
    // it to fight the Hound, and Thoros brings him back from the death the
    // Hound gives him, in "Kissed by Fire" (episode 25) and in Arya VI of A
    // Storm of Swords (chapter 178).
    {
      episode: 25,
      chapter: 178,
      value: [
        ...moved(
          [...HEATER, { d: BOLT }, ...BLACK_FIELD.slice(0, 2)],
          'translate(-6 14) scale(0.84)',
        ),
        shadow(66, 150, 26),
        { d: LONGSWORD, transform: 'translate(34 12) rotate(24 100 121)' },
        {
          d: BLADE_FLAME,
          role: 'accent',
          transform: 'translate(34 12) rotate(24 100 121)',
        },
      ],
    },
    // The shield fallen with no bolt on it and the sword lying spent beside
    // it: he dies for Arya in "The Long Night" (episode 70); in Brienne VIII
    // of A Feast for Crows (chapter 268) Thoros tells that he gave his last
    // life to Catelyn.
    {
      episode: 70,
      chapter: 268,
      value: [
        ...moved(
          [...HEATER, ...BLACK_FIELD.slice(0, 2)],
          'translate(14 -6) rotate(-72 80 100) scale(0.8)',
        ),
        {
          d: LONGSWORD,
          role: 'accent',
          transform: 'translate(0 34) rotate(-58 100 121)',
        },
        GROUND,
      ],
    },
  ],
  'thoros-of-myr': [
    // The red robe with a flame burning over an open hand: he calls on the
    // Lord of Light and Beric comes back, in "Kissed by Fire" (episode 25)
    // and in Arya VI of A Storm of Swords (chapter 178).
    {
      episode: 25,
      chapter: 178,
      value: [
        {
          d: `M34 164 Q48 134 62 118 M106 118 Q122 134 134 164 ${ellipse(84, 118, 22, 6)}`,
        },
        {
          d: 'M56 140 Q66 150 62 162 M84 126 Q90 146 84 164 M110 140 Q104 152 110 162',
          role: 'soft',
        },
        {
          d: 'M70 116 Q66 98 72 90 L70 78 Q70 74 74 76 L78 90 L78 72 Q80 68 83 72 L84 90 L86 70 Q89 66 91 70 L90 90 L94 76 Q97 74 98 78 L96 94 L104 90 Q108 90 106 94 L98 106 Q96 112 98 116',
        },
        {
          d: 'M86 56 Q70 44 78 28 Q80 36 84 36 Q82 20 94 10 Q92 22 100 28 Q106 36 102 46 Q98 54 86 56 Z',
          role: 'accent',
        },
        { d: 'M118 146 l5 -3 M124 158 l5 -3', role: 'ambient' },
      ],
    },
    // The red robe dropped on bare ground and his sword lying spent before
    // it: he dies beyond the Wall in "Beyond the Wall" (episode 66). The
    // show's alone: in the books he is alive, so chapter 344 only orders
    // it.
    {
      episode: 66,
      chapter: 344,
      source: 'episode',
      value: [
        { d: ROBE, role: 'accent' },
        ROBE_FOLDS,
        { d: LONGSWORD, transform: 'translate(-8 30) rotate(-58 100 121)' },
        shadow(80, 160, 64),
      ],
    },
  ],
  'robar-royce': [
    // The tilting helm upturned on the ground and the coronal broken off:
    // Loras kills him at Storm's End, told in Tyrion VIII of A Clash of Kings
    // (chapter 110). The book's alone; episode 15, where the show kills a
    // Kingsguard at Renly's death, orders it.
    {
      episode: 15,
      chapter: 110,
      source: 'chapter',
      value: [
        ...moved(TILTING_HELM.slice(0, 4), 'translate(0 24) rotate(166 84 90)'),
        {
          d: 'M14 158 L40 154 M40 154 L44 150 L46 156 M108 152 L116 150 M116 144 L118 156 M116 144 l8 -4 M117 150 l9 -1 M118 156 l8 2',
          role: 'accent',
        },
        GROUND,
      ],
    },
  ],
  'mycah': [
    // The stick sword snapped on the riverbank, the cleaver beside it: the
    // Hound rides him down, told in Eddard III (chapter 17). The show kills
    // him in "The Kingsroad" (episode 2), the episode he opens in, where no
    // stage can sit, so the stage is the book's (owner, as Vayon Poole's in
    // #1054).
    {
      episode: 2,
      chapter: 17,
      source: 'chapter',
      value: [
        { d: 'M20 138 L64 120 L66 126 L58 128 L68 132 L22 146 Z' },
        { d: 'M76 118 L84 122 L80 114 L120 98 L122 104 L82 124', role: 'soft' },
        { d: 'M46 128 L50 136', role: 'accent' },
        ...moved(CLEAVER, 'translate(10 6)'),
        {
          d: 'M10 166 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
          role: 'ambient',
        },
      ],
    },
  ],
  'jacelyn-bywater': [
    // The iron hand fallen on its side: half the gold cloaks run when the
    // king leaves the walls, and they kill him trying to rally them, as
    // Bronn tells Tyrion in Tyrion I of A Storm of Swords (chapter 148). The
    // books' alone; episode 20, where Tyrion wakes after the battle, orders
    // it.
    {
      episode: 20,
      chapter: 148,
      value: [...moved(IRON_HAND, 'translate(0 26) rotate(90 80 100)'), GROUND],
    },
  ],
  'osmund-kettleblack': [
    // Petyr Baelish's glove laid by the folded cloak: Petyr tells Sansa that
    // he sent the Kettleblacks to King's Landing and has had them in his pay
    // all along, in Sansa VI of A Storm of Swords (chapter 212). The books'
    // alone; episode 35, where Petyr brings Sansa to the Eyrie, orders it.
    // The glove's little finger takes the accent from the cloak.
    {
      episode: 35,
      chapter: 212,
      value: [
        ...moved(
          FOLDED_WHITE_CLOAK.map((stroke, index) =>
            index === 0 ? { d: stroke.d } : stroke,
          ),
          'translate(-14 0)',
        ),
        ...moved(GLOVE.slice(0, 7), 'translate(98 62) scale(0.5)'),
        ...LYING_SWORD,
        shadow(80, 154, 62),
      ],
    },
  ],
  'garlan-tyrell': [
    // Renly's antlered helm with the rose shield set by it: Loras tells Jaime
    // that Garlan wore Renly's armour on the Blackwater, the ghost the
    // smallfolk tell of, in Jaime VIII of A Storm of Swords (chapter 211). The
    // books' alone; episode 36, Tyrion's trial, the nearest point the show
    // reaches, orders it.
    {
      episode: 36,
      chapter: 211,
      value: [
        ...moved(ANTLERED_HELM, 'translate(-22 0)'),
        ...moved(
          [...HEATER, ...softened(ROSE_BLOOM)],
          'translate(98 94) scale(0.5) translate(-44 -40)',
        ),
        shadow(80, 156, 60),
      ],
    },
  ],
  'boros-blount': [
    // His cloak brooch dropped on the ground by his sword, the white cloak
    // gone: Joffrey strips him of it for yielding Tommen on the Rosby road,
    // in Tyrion XI of A Clash of Kings (chapter 123). The books' alone; the
    // show never strips him, so episode 19, his record's, orders it.
    {
      episode: 19,
      chapter: 123,
      source: 'chapter',
      value: [
        { d: ellipse(80, 112, 20, 8) },
        { d: 'M60 112 V116 Q62 124 80 125 Q98 124 100 116 V112', role: 'soft' },
        { d: ellipse(80, 112, 8, 3), role: 'accent' },
        { d: 'M92 119 l4 -2 M84 121 l4 -2', role: 'ambient' },
        ...LYING_SWORD,
        shadow(80, 154, 62),
      ],
    },
    // The white cloak on his shoulder again: Tywin gives him back his place
    // in the Kingsguard, in the Hound's, in Tyrion II of A Storm of Swords
    // (chapter 156). The books' alone; episode 21, the show's first after
    // the battle, orders it.
    { episode: 21, chapter: 156, source: 'chapter', value: SHOULDER_CLOAK },
  ],
  'olenna-tyrell': [
    // Sansa's necklace laid over the platter, one setting empty, the
    // accent passing to it: Olenna tells Margaery that she could not leave
    // her to Joffrey, and Margaery sees who poisoned him, in "Oathkeeper"
    // (episode 34). In the books Petyr leads Sansa to see that the Queen of
    // Thorns took the stone from her hair net, in Sansa VI of A Storm of
    // Swords (chapter 212). The show's necklace is drawn.
    {
      episode: 34,
      chapter: 212,
      value: [
        ...PLATTER,
        ...softened(CHEESE_WEDGE),
        ...LEMON_CAKES,
        ...EMPTY_SETTING_NECKLACE,
        shadow(80, 152, 56),
      ],
    },
    // The cheese and the cakes fallen off the platter to the ground, the
    // necklace still over it: she dies at Highgarden in "The Queen's
    // Justice" (episode 63), the show's alone. The books leave her alive,
    // so chapter 344, their last, orders it.
    {
      episode: 63,
      chapter: 344,
      source: 'episode',
      value: [
        ...PLATTER,
        ...EMPTY_SETTING_NECKLACE,
        shadow(80, 152, 56),
        ...moved(
          softened(CHEESE_WEDGE),
          'translate(-12 62) rotate(-16 57 115)',
        ),
        ...moved(LEMON_CAKES, 'translate(10 50)'),
      ],
    },
  ],
  'oberyn-martell': [
    // The spear fallen flat on the ground: he dies fighting the Mountain as
    // Tyrion's champion in "The Mountain and the Viper" (episode 38) and in
    // Tyrion X of A Storm of Swords (chapter 214).
    {
      episode: 38,
      chapter: 214,
      value: [...moved(SPEAR, 'translate(0 62) rotate(-90 80 80)'), GROUND],
    },
  ],
}
