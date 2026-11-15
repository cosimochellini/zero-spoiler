import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { STAG } from './south'

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
}
