import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { dots, ellipse, shadow } from '~/lib/svg/primitives'

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

/** The wildlings of the second season (#1474), keyed by record id. */
export const WILDLING_DRAWINGS = {
  'craster': CRASTER_AXE,
  'gilly': GILLY_THIMBLE,
  'ygritte': YGRITTE,
  'lord-of-bones': LORD_OF_BONES,
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
}
