import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Meryn Trant: the white enamelled helm of the Kingsguard with its visor
 * raised, for the knight who breaks up Arya's lesson in episode 8 and
 * rides in the Hand's tourney in Sansa II (chapter 30). White, so only its
 * far side is hatched; the accent is the visor.
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

/**
 * Boros Blount: a Kingsguard's white scabbard, the sword in it, hung by its
 * belt from a peg, for the knight who sits the small council in his white
 * in Eddard VIII (chapter 34) and is sent to the Blackwater in episode 19.
 * The accent is the buckle.
 */
const HUNG_SWORD: Stroke[] = [
  { d: `${circle(80, 28, 3)} M80 31 V38`, role: 'soft' },
  {
    d: 'M80 38 Q56 56 58 92 Q60 104 72 104 M80 38 Q104 56 102 92 Q100 104 88 104',
  },
  { d: 'M72 104 H88 V112 H72 Z M80 104 V112', role: 'accent' },
  { d: 'M62 74 L108 150 L114 146 L68 70 Z' },
  { d: 'M66 77 L71 73 M103 141 L109 137', role: 'soft' },
  {
    d: `M56.5 77.2 L73.5 66.8 M63 73 L53 56 M67 71 L57 54 ${circle(54, 52, 3)}`,
  },
  { d: 'M84 104 l4 -3 M92 118 l4 -3 M100 132 l4 -3', role: 'ambient' },
]

/**
 * Mandon Moore: a white plate gauntlet side on, its fingers in plates, for
 * the Kingsguard at the council doors in Sansa IV (chapter 52) and on the
 * Blackwater in episode 19. The accent is the knuckle ridge.
 */
const GAUNTLET: Stroke[] = [
  { d: 'M48 150 L54 112 H100 L106 150' },
  { d: 'M50 132 H104 M52 120 H102', role: 'soft' },
  { d: 'M54 112 Q56 92 66 86 H104 Q112 88 110 98 L100 112' },
  { d: 'M66 86 Q86 80 106 88', role: 'accent' },
  {
    d: 'M104 88 H122 Q128 90 122 94 H106 M106 96 H124 Q130 98 124 102 H104 M102 104 H120 Q126 106 120 110 H100',
    role: 'soft',
  },
  { d: 'M60 98 Q48 92 44 82 Q46 76 52 80 Q58 86 66 90', role: 'soft' },
  { d: 'M94 120 l5 -3 M94 136 l5 -3', role: 'ambient' },
  shadow(78, 156, 34),
]

/**
 * A heater shield in 3/4, its far edge hatched. Arys Oakheart's and Beric
 * Dondarrion's shields are this one.
 */
const HEATER: Stroke[] = [
  { d: 'M44 40 H116 V80 Q116 124 80 148 Q44 124 44 80 Z' },
  { d: 'M116 40 L122 44 V82 Q120 126 84 152', role: 'soft' },
]

/** One oak leaf, drawn from its stem. */
const OAK_LEAF =
  'q-6 -4 -4 -10 q-4 -4 0 -8 q-2 -6 4 -6 q2 -6 6 0 q6 0 4 6 q4 4 0 8 q2 6 -4 10 z'
/**
 * Arys Oakheart: a white shield with the three oak leaves of his house, for
 * the Kingsguard in the throne room when Barristan is dismissed in Sansa V
 * (chapter 58). The book's alone. The far edge is hatched; the accent is
 * the leaves.
 */
const OAK_SHIELD: Stroke[] = [
  ...HEATER,
  {
    d: `M64 80 ${OAK_LEAF} M96 80 ${OAK_LEAF} M80 116 ${OAK_LEAF}`,
    role: 'accent',
  },
  { d: 'M64 80 V60 M96 80 V60 M80 116 V96', role: 'soft' },
  { d: 'M118 56 l5 -3 M118 72 l5 -3 M116 90 l5 -3', role: 'ambient' },
  shadow(82, 156, 30),
]

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
  { d: 'M98 126 L102 140 H114 L118 126' },
  { d: ellipse(108, 126, 10, 3), role: 'accent' },
  { d: ellipse(86, 142, 50, 9) },
  { d: 'M74 96 l5 -3 M76 108 l5 -3 M74 120 l5 -3', role: 'ambient' },
  shadow(86, 156, 50),
]

/**
 * Dontos Hollard: a melon carved into a helm with a feather in it, for the
 * drunken knight Joffrey makes his fool once Sansa saves him, in Sansa V
 * (chapter 58) and in episode 11. Which medium puts a melon on his head,
 * and when, is not confirmed: the owner's pick. The accent is the feather. Retinted
 * from `wine`: nothing on it is red.
 */
const MELON_HELM: Stroke[] = [
  { d: 'M42 122 Q40 64 80 60 Q120 64 118 122 Z' },
  {
    d: 'M60 120 Q54 90 66 64 M80 122 V60 M100 120 Q106 90 94 64',
    role: 'soft',
  },
  {
    d: 'M42 122 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6 l6 -6 l6 6',
    role: 'soft',
  },
  {
    d: 'M84 62 Q98 36 122 28 Q106 44 92 62 M90 60 Q104 42 118 32',
    role: 'accent',
  },
  { d: 'M104 80 l6 -3 M108 94 l6 -3 M108 108 l6 -3', role: 'ambient' },
  shadow(80, 132, 44),
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
 * Mhaegen: a hooded cradle on its rockers with a blanket in it, for the
 * mother of Robert's baby in Littlefinger's brothel in episode 5. The show's
 * alone. The accent is the blanket.
 */
const CRADLE: Stroke[] = [
  { d: `M30 96 Q34 132 80 134 Q126 132 130 96 ${ellipse(80, 96, 50, 8)}` },
  { d: 'M30 96 Q28 68 54 62 Q68 68 68 96' },
  { d: 'M36 92 Q38 74 54 70', role: 'soft' },
  {
    d: 'M68 98 q8 -6 16 0 t16 0 t16 0 M74 106 q8 -4 16 0 t16 0',
    role: 'accent',
  },
  { d: 'M44 130 L40 144 M116 130 L120 144 M22 140 Q80 156 138 140' },
  { d: 'M112 108 l6 -3 M108 120 l6 -3', role: 'ambient' },
  shadow(80, 154, 54),
]

/**
 * Beric Dondarrion: a shield with the forked lightning bolt of his house,
 * the field hatched because it is black, for the lord Eddard sends after
 * Gregor in episode 6, in the city from Eddard VI (chapter 28). The accent
 * is the bolt.
 */
const LIGHTNING_SHIELD: Stroke[] = [
  ...HEATER,
  {
    d: 'M90 50 L70 86 H84 L64 126 L98 80 H84 L100 50 Z M76 108 L60 112',
    role: 'accent',
  },
  { d: 'M50 46 H110', role: 'soft' },
  {
    d: 'M50 60 l6 -3 M50 76 l6 -3 M52 92 l6 -3 M104 100 l6 -3 M98 116 l6 -3',
    role: 'ambient',
  },
  shadow(82, 156, 30),
]

/**
 * Thoros of Myr: a wineskin lying on the red robe of a priest of R'hllor,
 * for the drinking priest of the tourney in Sansa II (chapter 30) and of
 * the outlaws in episode 22. The robe is red in both media, so he keeps
 * `red`; the accent is the robe.
 */
const ROBE_WINESKIN: Stroke[] = [
  {
    d: 'M14 140 Q30 118 60 124 Q80 112 104 122 Q130 116 146 136 Q120 150 80 148 Q40 152 14 140 Z',
    role: 'accent',
  },
  {
    d: 'M40 128 Q48 140 44 148 M70 122 Q80 136 74 148 M112 124 Q116 136 110 148',
    role: 'soft',
  },
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
 * Balon Swann: the two swans of his house face to face on the water, for
 * the knight who rides in the Hand's tourney in Sansa II (chapter 30). The
 * book's alone. One swan is black, so it is hatched.
 */
const SWANS: Stroke[] = [
  ...SWAN,
  ...moved(SWAN, 'translate(160 0) scale(-1 1)'),
  { d: 'M110 112 l6 -3 M116 120 l6 -3 M104 124 l6 -3', role: 'ambient' },
  {
    d: 'M14 138 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
    role: 'ambient',
  },
]

/**
 * Robar Royce: a frog-mouthed tilting helm and a lance's coronal, for the
 * knight who jousts in the Hand's tourney in Sansa II (chapter 30). The
 * book's alone. The accent is the coronal.
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
 * Yohn Royce: a round bronze shield, its boss and its rivets, for Bronze
 * Yohn at the Hand's tourney in Sansa II (chapter 30) and on the Vale's
 * tribunal in episode 38. Its runes are left off, as lettering. The accent
 * is the boss.
 */
const BRONZE_SHIELD: Stroke[] = [
  { d: circle(80, 90, 48) },
  { d: circle(80, 90, 41), role: 'soft' },
  { d: `${circle(80, 90, 11)} ${circle(80, 90, 4)}`, role: 'accent' },
  {
    d: dots([
      [80, 46],
      [111, 59],
      [124, 90],
      [111, 121],
      [80, 134],
      [49, 121],
      [36, 90],
      [49, 59],
    ]),
    role: 'soft',
  },
  { d: 'M104 112 l6 -3 M96 122 l6 -3 M112 98 l6 -3', role: 'ambient' },
  shadow(80, 146, 40),
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

/** The first season's King's Landing guard and tourney cast (#1056), keyed by record id. */
export const COURT_DRAWINGS = {
  'meryn-trant': WHITE_HELM,
  'boros-blount': HUNG_SWORD,
  'mandon-moore': GAUNTLET,
  'arys-oakheart': OAK_SHIELD,
  'lancel-lannister': JUG,
  'dontos-hollard': MELON_HELM,
  'hugh-of-the-vale': FALLEN_SHIELD,
  'tobho-mott': ARMOUR_STAND,
  'mhaegen': CRADLE,
  'beric-dondarrion': LIGHTNING_SHIELD,
  'thoros-of-myr': ROBE_WINESKIN,
  'balon-swann': SWANS,
  'robar-royce': TILTING_HELM,
  'yohn-royce': BRONZE_SHIELD,
  'mycah': MYCAH,
} satisfies Drawings

/** The King's Landing cast drawn again later in the story. */
export const courtRedrawn: Redrawings = {
  mycah: [
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
