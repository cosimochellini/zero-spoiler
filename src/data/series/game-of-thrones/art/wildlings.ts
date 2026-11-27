import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/** A chopping block, the end of a log in 3/4, its rings and bark. */
const BLOCK: Stroke[] = [
  { d: ellipse(80, 118, 40, 10) },
  { d: 'M40 118 V142 Q80 158 120 142 V118' },
  { d: `${ellipse(80, 118, 26, 6)} ${ellipse(80, 118, 12, 3)}`, role: 'soft' },
  { d: 'M50 130 V146 M64 132 V150 M100 132 V150', role: 'soft' },
  { d: 'M106 134 l5 -4 M112 140 l5 -4', role: 'ambient' },
]

/** A throwing axe, the haft and the iron head, laid along the origin. */
const AXE: Stroke[] = [
  { d: 'M0 -3 H70 V3 H0 Z' },
  { d: 'M10 -3 L13 3 M18 -3 L21 3', role: 'soft' },
  { d: 'M62 -3 L66 -22 Q82 -16 86 0 Q82 16 66 22 L62 3', role: 'accent' },
  { d: 'M70 -10 l4 3 M70 8 l4 -3', role: 'ambient' },
]

/**
 * Craster: an axe struck into a chopping block. In "The North Remembers"
 * (episode 11) he asks for the axe an officer of the Watch is holding,
 * the Lord Commander has it handed over, and Craster tries it by cutting
 * into the wood at his feet; the books' ranging reaches his keep in Jon
 * III (chapter 97). The accent is the axe's iron head.
 */
const CRASTER_AXE: Stroke[] = [
  ...BLOCK,
  ...moved(AXE, 'translate(26 52) rotate(28)'),
  shadow(80, 158, 50),
]

/**
 * A thimble in 3/4, the dome dimpled, the rim rolled and the far side
 * hatched.
 */
const THIMBLE: Stroke[] = [
  { d: 'M54 128 L60 70 Q62 46 80 46 Q98 46 100 70 L106 128' },
  { d: ellipse(80, 128, 26, 7) },
  {
    d: dots([
      [70, 60],
      [80, 56],
      [90, 60],
      [66, 76],
      [76, 74],
      [86, 74],
      [64, 92],
      [74, 90],
      [84, 90],
      [62, 108],
      [72, 106],
      [82, 106],
    ]),
    role: 'soft',
  },
  { d: 'M54 120 Q80 130 106 120', role: 'accent' },
  { d: 'M94 70 l5 -3 M96 88 l5 -3 M98 106 l5 -3', role: 'ambient' },
]

/**
 * Gilly: Sam's mother's thimble, which he gives her to keep until he comes
 * back for her in "What Is Dead May Never Die" (episode 13), with a needle
 * and its thread beside it. The books have no thimble, and the show is the
 * reference. The accent is the rolled rim.
 */
const GILLY_THIMBLE: Stroke[] = [
  ...THIMBLE,
  { d: 'M112 146 L146 118' },
  { d: 'M144 120 Q132 104 118 116 Q108 126 122 132', role: 'soft' },
  shadow(80, 140, 34),
]

/**
 * A red-haired archer seen from behind with no face: the tangle of curls,
 * a fur collar over her shoulders, her bow across her back and the
 * fletchings of her arrows over her shoulder.
 */
const ARCHER_BACK: Stroke[] = [
  {
    d: 'M60 78 q-8 -6 -4 -14 q-6 -8 2 -14 q-2 -10 8 -12 q2 -10 12 -8 q6 -8 14 -2 q10 -2 10 8 q10 2 6 12 q8 6 2 14 q4 8 -4 14 q2 8 -6 10 q-6 8 -14 4 q-8 6 -14 0 q-10 2 -10 -6 q-8 -2 -2 -6',
    role: 'accent',
  },
  {
    d: 'M62 86 q-5 6 -1 12 q-4 5 0 10 M98 86 q5 6 1 12 q4 5 0 10 M80 90 q-4 6 0 12',
    role: 'soft',
  },
  { d: 'M52 96 Q36 100 30 120 L26 150 M108 96 Q124 100 130 120 L134 150' },
  {
    d: 'M52 96 q4 -6 10 -2 q4 -6 10 -2 q4 -6 10 -2 q4 -6 10 -2 q4 -6 10 -2 q4 -4 6 4',
    role: 'soft',
  },
  { d: 'M36 150 L120 40 M42 150 L126 44', role: 'soft' },
  { d: 'M116 34 l-6 -10 M120 36 l2 -12 M126 38 l8 -8' },
  { d: 'M110 120 l5 -4 M114 132 l5 -4 M118 144 l5 -4', role: 'ambient' },
]

/**
 * Ygritte: a red-haired spearwife from behind, her bow and arrows on her
 * back, for the wildling lookout Jon cannot put to death in "The Old Gods
 * and the New" (episode 16) and in Jon VI (chapter 125). The wildlings call
 * hair like hers kissed by fire. The accent is her red hair.
 */
const YGRITTE: Stroke[] = [...ARCHER_BACK, shadow(80, 154, 54)]

/**
 * A shirt of bones laced on leather, standing, in 3/4: a great bone across
 * the shoulders, rows of small bones down the front, the far side hatched.
 */
const BONE_SHIRT: Stroke[] = [
  {
    d: 'M58 52 Q80 62 102 52 L120 62 Q112 80 114 100 Q112 122 106 146 Q80 152 54 146 Q48 122 46 100 Q48 80 40 62 Z',
  },
  {
    d: 'M54 76 q2 -4 5 0 h18 q3 -4 5 0 M80 78 q2 -4 5 0 h16 q3 -4 5 0 M52 94 q2 -4 5 0 h18 q3 -4 5 0 M82 96 q2 -4 5 0 h18 q3 -4 5 0 M52 112 q2 -4 5 0 h18 q3 -4 5 0 M82 114 q2 -4 5 0 h18 q3 -4 5 0 M54 130 q2 -4 5 0 h18 q3 -4 5 0 M82 132 q2 -4 5 0 h16 q3 -4 5 0',
  },
  { d: 'M80 62 V148', role: 'soft' },
  {
    d: 'M100 84 l5 -3 M102 102 l5 -3 M102 120 l5 -3 M100 138 l5 -3',
    role: 'ambient',
  },
]

/** The great bone across the shoulders, knobbed at both ends. */
const SHOULDER_BONE =
  'M40 58 q-6 -6 0 -10 q4 -2 6 4 Q80 66 114 52 q2 -6 6 -4 q6 4 0 10 q2 6 -4 6 q-2 -2 -2 -2 Q80 74 46 60 q0 0 -2 2 q-6 0 -4 -6'

/**
 * Lord of Bones: his armour of bones, the shirt that gives him the Watch's
 * name for him, Rattleshirt, when his band overtakes Jon and Qhorin in Jon
 * VIII (chapter 142). The record is the books'; the show's Lord of Bones
 * wears bones as well. The accent is the great bone across the shoulders.
 */
const LORD_OF_BONES: Stroke[] = [
  ...BONE_SHIRT,
  { d: SHOULDER_BONE, role: 'accent' },
  shadow(80, 154, 40),
]

/**
 * A lute standing on its foot, in 3/4: the pear-shaped soundboard, the
 * rounded back of its bowl on the far side, hatched, the frets of the neck
 * and the pegbox bent back. The accent is the rose, the sound hole.
 */
const LUTE: Stroke[] = [
  { d: 'M71 70 Q48 84 46 114 Q46 148 80 150 Q114 148 114 114 Q112 84 89 70 Z' },
  { d: 'M89 70 Q118 82 121 114 Q120 146 86 153', role: 'soft' },
  { d: circle(80, 104, 9), role: 'accent' },
  { d: 'M74 70 L76 32 H84 L86 70' },
  { d: 'M74.6 60 H85.4 M75.1 50 H84.9 M75.6 40 H84.4', role: 'soft' },
  { d: 'M76 32 L66 12 L72 9 L84 32' },
  { d: 'M67 17 l-6 1 M69 22 l-6 1 M72 27 l-6 1', role: 'soft' },
  { d: 'M68 132 H92 M77 132 L78 36 M83 132 L82 36', role: 'soft' },
  {
    d: 'M108 96 l6 -3 M111 110 l6 -3 M111 124 l6 -3 M107 138 l6 -3',
    role: 'ambient',
  },
]

/**
 * Mance Rayder: his lute. In Jon I of A Storm of Swords (chapter 151) Jon
 * takes the Magnar of Thenn for the king, but the king is the grey-haired
 * man playing the lute and singing "The Dornishman's Wife" (A Wiki of Ice
 * and Fire). The show gives him no object of his own, and leaves out the
 * black cloak patched with red silk the books give him, so the lute stands
 * in for both media. The accent is the rose.
 */
const MANCE_LUTE: Stroke[] = [...LUTE, shadow(80, 156, 40)]

/** An eagle perched side on, no eye: hooked beak, folded wing, talons. */
const EAGLE: Stroke[] = [
  {
    d: 'M58 46 Q66 34 78 38 Q86 42 86 54 Q106 64 110 98 L124 134 L108 132 L100 116 Q90 120 82 116 L86 108 Q66 104 62 80 Q60 68 62 62 L54 58',
  },
  { d: 'M60 45 Q46 42 42 54 Q44 60 48 58 Q48 52 56 54', role: 'soft' },
  {
    d: 'M76 62 Q100 70 106 100 L116 128 M84 72 Q98 86 102 106 M92 72 Q102 84 106 98',
    role: 'accent',
  },
  {
    d: 'M70 104 Q68 112 72 116 L70 122 M82 116 L84 122 M64 124 l6 -2 l6 3 M80 124 l5 -3 l6 3',
    role: 'soft',
  },
  { d: 'M66 72 q4 4 8 2 M64 84 q4 4 8 2 M68 96 q4 4 8 2', role: 'soft' },
]

/** A dead branch, a snag at each end. */
const BRANCH: Stroke[] = [
  { d: 'M18 126 Q70 120 144 128 M120 126 L134 106 M40 124 l-10 -12' },
  { d: 'M54 128 l4 -3 M98 129 l4 -3', role: 'ambient' },
]

/**
 * Orell: his eagle perched on a dead branch. He scouts the Fist of the
 * First Men through it in "Dark Wings, Dark Words" (episode 22); in the
 * books it is "the eagle that was once Orell" from Jon II (chapter 159).
 * The accent is the folded wing.
 */
const ORELL_EAGLE: Stroke[] = [...EAGLE, ...BRANCH, shadow(80, 156, 50)]

/**
 * The branch empty, one feather fallen under it: Orell's stages, the eagle
 * gone. The feather is the accent.
 */
const EMPTY_BRANCH: Stroke[] = [
  ...BRANCH,
  { d: 'M52 152 Q80 142 110 146', role: 'accent' },
  {
    d: 'M60 149 l-2 -6 M68 147 l-1 -7 M76 145 l0 -7 M84 144 l1 -7 M92 144 l2 -6 M100 145 l2 -5 M62 149 l1 5 M72 146 l2 5 M82 144 l2 5 M92 144 l2 5',
    role: 'soft',
  },
]

/**
 * Tormund: a climbing pick struck into the face of the Wall's ice, a loop
 * of cord at the foot of its haft. Leading one of the ropes up the Wall in
 * "The Climb" (episode 26), his pick breaks off a piece of ice under Jon
 * (Game of Thrones Wiki, Tormund). The books' Tormund stays with Mance's
 * host, and the show is the reference. The ice's layers are soft and its
 * face hatched; the accent is the pick's point.
 */
const TORMUND_PICK: Stroke[] = [
  { d: 'M50 10 L54 40 L50 62 L56 92 L52 118 L58 150' },
  {
    d: 'M10 30 Q30 34 51 28 M10 78 Q30 74 53 80 M10 126 Q32 130 55 124',
    role: 'soft',
  },
  {
    d: 'M40 46 l6 -4 M42 58 l6 -4 M44 96 l6 -4 M42 108 l6 -4 M46 140 l6 -4',
    role: 'ambient',
  },
  { d: 'M78 72 L140 136 L135 141 L73 77' },
  { d: 'M70 70 L86 50 L96 58 L78 78 Z' },
  { d: 'M70 72 Q58 80 54 96 Q64 86 76 78', role: 'accent' },
  { d: 'M84 54 L92 60', role: 'soft' },
  { d: 'M118 114 l-5 5 M124 120 l-5 5', role: 'soft' },
  { d: 'M136 140 Q146 158 132 162 Q118 164 124 152', role: 'soft' },
  { d: 'M58 100 l6 6 M60 108 l2 8', role: 'soft' },
  shadow(84, 154, 60),
]

/**
 * A two-handed greatsword in its leather sheath, laid on the slant: the
 * pommel, the wrapped grip, the crossguard, the sheath with its two
 * mounts, its far side hatched, and the slack strap between them.
 */
const GREATSWORD: Stroke[] = [
  { d: circle(40, 26, 5) },
  { d: 'M37 31 L54 56 L60 52 L43 27' },
  { d: 'M40 36 l6 -4 M44 42 l6 -4 M48 48 l6 -4', role: 'soft' },
  { d: 'M42 64 L70 44 L73 48 L45 68 Z', role: 'accent' },
  { d: 'M54 62 L118 150 Q124 156 128 150 L66 54 Z' },
  { d: 'M60 58 L122 148', role: 'soft' },
  { d: 'M70 74 l12 -8 M96 110 l12 -8' },
  { d: 'M76 70 Q78 116 102 106', role: 'soft' },
  {
    d: 'M100 94 l5 -3 M108 106 l5 -3 M116 118 l5 -3 M124 130 l5 -3',
    role: 'ambient',
  },
]

/**
 * Styr: the two-handed greatsword he slings across his back in a leather
 * sheath, as Jon sees him in Mance's tent in Jon I (chapter 151; A Wiki of
 * Ice and Fire, Styr). The record is the books'. The accent is the
 * crossguard.
 */
const STYR_SWORD: Stroke[] = [...GREATSWORD, shadow(92, 156, 44)]

/** An iron brazier on three legs, a ring at each side, its far side hatched. */
const BRAZIER: Stroke[] = [
  { d: ellipse(80, 100, 36, 9) },
  { d: 'M44 100 Q48 122 80 124 Q112 122 116 100' },
  { d: 'M58 120 Q50 136 46 150 M102 120 Q110 136 114 150 M80 124 V150' },
  { d: `${circle(40, 106, 5)} ${circle(120, 106, 5)}`, role: 'soft' },
  { d: 'M100 108 l6 -4 M96 116 l6 -4', role: 'ambient' },
]

/** The coals in the brazier's bowl. */
const COALS = dots([
  [62, 100],
  [72, 102],
  [82, 99],
  [92, 102],
  [100, 99],
  [76, 96],
  [88, 96],
])

/**
 * Dalla: the brazier she cooks a brace of hens at in Mance's tent, in Jon
 * I (chapter 151): Mance calls her "the good woman at the brazier" (A Wiki
 * of Ice and Fire, Dalla and Jarl). The spit the hens turn on is drawn by
 * eye. The record is the books'. The accent is the fire.
 */
const DALLA_BRAZIER: Stroke[] = [
  ...BRAZIER,
  { d: COALS, role: 'soft' },
  {
    d: 'M64 92 q-4 -10 2 -16 q2 6 6 4 q2 8 -2 12 M80 90 q-6 -14 2 -22 q3 8 7 5 q3 10 -3 17 M96 92 q-4 -10 2 -16 q2 6 6 4 q2 8 -2 12',
    role: 'accent',
  },
  { d: 'M24 60 H136 M24 56 V64 M136 56 V64' },
  {
    d: 'M46 60 Q46 48 60 48 Q74 48 74 60 Q74 70 60 70 Q46 70 46 60 Z M86 60 Q86 48 100 48 Q114 48 114 60 Q114 70 100 70 Q86 70 86 60 Z',
  },
  {
    d: 'M66 50 L74 40 M70 52 L79 44 M106 50 L114 40 M110 52 L119 44',
    role: 'soft',
  },
  shadow(80, 154, 42),
]

/**
 * Val: her long hair seen from behind, falling past her shoulders in a
 * braid, no face. Jon meets her in Mance's tent in Jon I (chapter 151), a
 * beautiful young woman with blonde hair; in Jon X (chapter 217) it
 * reaches her waist (A Wiki of Ice and Fire, Val). The record is the
 * books'. The accent is the braid.
 */
const VAL_BRAID: Stroke[] = [
  { d: 'M64 54 Q64 30 80 30 Q96 30 96 54 L98 96 M64 54 L62 96' },
  { d: 'M80 30 V70 M72 34 Q68 52 69 90 M88 34 Q92 52 91 90', role: 'soft' },
  {
    d: 'M74 76 q6 4 12 0 q-6 8 -12 8 q6 4 12 0 q-6 8 -12 8 q6 4 12 0 q-6 8 -12 8 q6 4 12 0 q-6 8 -12 8 q6 4 12 0 q-4 6 -6 10 q-2 -4 -6 -10',
    role: 'accent',
  },
  { d: 'M62 82 Q40 84 34 112 L28 150 M98 82 Q120 84 126 112 L132 150' },
  { d: 'M48 104 Q50 128 46 150 M112 104 Q110 128 114 150', role: 'soft' },
  { d: 'M116 112 l6 -4 M118 126 l6 -4 M120 140 l6 -4', role: 'ambient' },
  shadow(80, 154, 54),
]

/** Two iron climbing spikes, each with a ring at its head. */
const SPIKES: Stroke[] = [
  { d: 'M116 146 L140 110 M126 148 L148 116' },
  { d: `${circle(141, 107, 3)} ${circle(149, 113, 3)}`, role: 'soft' },
]

/**
 * Jarl: a coil of climbing rope, its loose end the accent, and the iron
 * spikes beside it. He leads his band of raiders up the Wall near
 * Greyguard in Jon IV (chapter 174), his eleven men in teams of four (A
 * Wiki of Ice and Fire, Jarl). The spikes follow that chapter page's
 * picture of a wildling climbing the Wall on them. The record is the
 * books'.
 */
const JARL_ROPE: Stroke[] = [
  { d: `${ellipse(68, 130, 38, 12)} ${ellipse(68, 124, 32, 9)}` },
  { d: `${ellipse(68, 118, 26, 7)} ${ellipse(68, 113, 18, 5)}`, role: 'soft' },
  { d: 'M86 113 Q112 104 118 80 Q122 62 108 56', role: 'accent' },
  ...SPIKES,
  { d: 'M90 136 l5 -3 M96 130 l5 -3', role: 'ambient' },
  shadow(84, 148, 56),
]

/**
 * The wildlings of the second season (#1474) and the third (#1646), keyed
 * by record id.
 */
export const WILDLING_DRAWINGS = {
  'craster': CRASTER_AXE,
  'gilly': GILLY_THIMBLE,
  'ygritte': YGRITTE,
  'lord-of-bones': LORD_OF_BONES,
  'mance-rayder': MANCE_LUTE,
  'tormund': TORMUND_PICK,
  'orell': ORELL_EAGLE,
  'styr': STYR_SWORD,
  'dalla': DALLA_BRAZIER,
  'val': VAL_BRAID,
  'jarl': JARL_ROPE,
} satisfies Drawings

/** The wildlings drawn again later in the story. */
export const wildlingsRedrawn: Redrawings = {
  'craster': [
    // The block empty and the axe fallen on the ground beside it: the
    // mutineers kill him in his hall in "And Now His Watch Is Ended"
    // (episode 24) and in Samwell II of A Storm of Swords (chapter 177),
    // the night they kill the Lord Commander.
    {
      episode: 24,
      chapter: 177,
      value: [
        ...moved(BLOCK, 'translate(-20 0)'),
        ...moved(AXE, 'translate(70 150) rotate(-6)'),
        { d: 'M14 152 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'ygritte': [
    // The same archer laid down on her side in the snow, her hair still
    // the accent: she dies in Jon's arms in the attack on Castle Black, in
    // "The Watchers on the Wall" (episode 39) and in Jon VII of A Storm of
    // Swords (chapter 199).
    {
      episode: 39,
      chapter: 199,
      value: [
        ...moved(ARCHER_BACK, 'rotate(-90 80 100) translate(-40 6)'),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'lord-of-bones': [
    // The shirt of bones fallen flat on the ground: Melisandre tells that
    // the man burned at Castle Black as Mance Rayder was Rattleshirt under
    // a glamour, in Melisandre I of A Dance with Dragons (chapter 303). The
    // record is the books', and "The Wars to Come" (episode 41), where the
    // show burns Mance, orders it.
    {
      episode: 41,
      chapter: 303,
      value: [
        ...moved(
          [...BONE_SHIRT, { d: SHOULDER_BONE, role: 'accent' }],
          'rotate(-90 80 100) translate(-48 0)',
        ),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'mance-rayder': [
    // The lute laid on its side on the ground: Stannis has him burned at
    // Castle Black and Jon ends it with an arrow, in "The Wars to Come"
    // (episode 41). The books burn him in Jon III of A Dance with Dragons
    // (chapter 282), where Jon's archers give him a quick death.
    {
      episode: 41,
      chapter: 282,
      value: [
        ...moved(LUTE, 'translate(0 20) rotate(-90 80 100)'),
        shadow(80, 158, 66),
      ],
    },
    // The lute stood up again beside a shirt of bones: Melisandre tells
    // Jon that the man burned was Rattleshirt under a glamour, and that
    // the Lord of Bones at her side is Mance, in Melisandre I of A Dance
    // with Dragons (chapter 303). The books' alone: the show's Mance stays
    // dead, and episode 41 orders it.
    {
      episode: 41,
      chapter: 303,
      source: 'chapter',
      value: [
        ...moved(
          softened([...BONE_SHIRT, { d: SHOULDER_BONE, role: 'accent' }]),
          'translate(-28 4) scale(0.95)',
        ),
        ...moved(LUTE, 'translate(52 26) scale(0.76)'),
        shadow(80, 156, 60),
      ],
    },
  ],
  'orell': [
    // The branch empty and a feather under it: Jon kills him at
    // Queenscrown in "The Rains of Castamere" (episode 29), and Orell
    // passes into his eagle as he dies. The show's alone: the books open
    // on him dead (chapter 151), so there the first drawing's eagle is
    // what he left.
    { episode: 29, chapter: 151, source: 'episode', value: EMPTY_BRANCH },
    // The same empty branch: the eagle Orell lives on in bursts into
    // flames in the battle beneath the Wall, in Jon X (chapter 217). The
    // books' alone; "The Children" (episode 40), the show's battle beneath
    // the Wall, orders it.
    { episode: 40, chapter: 217, source: 'chapter', value: EMPTY_BRANCH },
  ],
  'styr': [
    // The sheathed greatsword fallen flat on the ground: he dies with his
    // Thenns when the stair at Castle Black comes down on them, in Jon VII
    // (chapter 199). The record is the books', and "The Watchers on the
    // Wall" (episode 39), the show's attack on Castle Black, orders it.
    {
      episode: 39,
      chapter: 199,
      value: [
        ...moved(GREATSWORD, 'translate(8 60) rotate(-56 80 90)'),
        shadow(80, 156, 64),
      ],
    },
  ],
  'dalla': [
    // The brazier cold, its coals dead, the spit fallen on the ground and
    // the hens gone: she dies giving birth to Mance's son in the battle
    // beneath the Wall, which Samwell IV (chapter 219) tells. The record
    // is the books', and "The Children" (episode 40), the show's battle,
    // orders it.
    {
      episode: 40,
      chapter: 219,
      value: [
        ...BRAZIER,
        { d: COALS, role: 'ambient' },
        { d: 'M30 152 L132 140 M30 148 V156 M132 136 V144', role: 'accent' },
        shadow(80, 154, 42),
      ],
    },
  ],
  'jarl': [
    // The rope lying slack along the ground and the spikes fallen flat:
    // he falls to his death in the climb, in Jon IV (chapter 174). The
    // record is the books', and "The Climb" (episode 26) orders it.
    {
      episode: 26,
      chapter: 174,
      value: [
        {
          d: 'M14 146 Q30 134 48 142 T84 140 T118 142 Q134 144 146 136',
          role: 'accent',
        },
        {
          d: `${ellipse(40, 138, 14, 4)} ${ellipse(42, 134, 10, 3)}`,
          role: 'soft',
        },
        ...moved(SPIKES, 'translate(-10 18) rotate(48 128 128)'),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
}
