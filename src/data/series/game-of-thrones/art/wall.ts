import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

import { DRAGON_SIGIL } from './essos'

/**
 * Jeor Mormont: the bear of his house, reared up side on with no face.
 * Nothing of his own reads at his threshold in both media (the book's raven
 * is not on screen in season 1), so the animal stands in, as Joffrey's
 * stag does. The bear is black, so its back is hatched; the accent is the
 * claws of the raised paw.
 */
const BEAR: Stroke[] = [
  {
    d: 'M40 58 Q44 50 54 48 Q58 40 66 38 Q68 28 76 30 Q82 32 80 40 Q100 46 106 72 Q112 100 106 124 Q104 134 108 140 L110 150 H94 L92 140 Q80 130 76 112',
  },
  { d: 'M40 58 Q42 64 50 64 Q58 66 62 74' },
  { d: 'M62 74 Q52 78 44 80 Q36 84 42 90 Q54 90 70 92 Q74 100 76 112' },
  { d: 'M70 70 Q60 64 52 66 Q46 70 52 74 L62 74', role: 'soft' },
  { d: 'M96 128 Q86 136 86 150 H76', role: 'soft' },
  { d: 'M40 81 l-6 -3 M38 85 h-7 M40 89 l-6 3', role: 'accent' },
  { d: 'M71 34 Q75 32 77 37', role: 'soft' },
  {
    d: 'M94 56 l6 -3 M98 70 l6 -3 M100 84 l6 -3 M100 98 l6 -3 M99 112 l5 -3',
    role: 'ambient',
  },
  shadow(92, 154, 30),
]

/**
 * Aemon: a raven on the rookery perch, side on and with no eye, for the
 * maester whose ravens carry the Watch's letters, at Castle Black from
 * episode 3 and Tyrion III (chapter 22). The raven is black, so its far
 * side is hatched; the accent is the letter tied to its leg. His first
 * drawing and his stage share it.
 */
const RAVEN: Stroke[] = [
  {
    d: 'M54 60 Q56 46 68 46 Q80 48 84 60 Q100 74 110 96 L132 116 L118 118 L106 104',
  },
  { d: 'M54 60 Q52 76 60 88 Q72 102 106 104' },
  { d: 'M55 55 L36 63 L55 67' },
  { d: 'M70 66 Q90 74 104 98 Q84 98 72 88 Q66 78 70 66', role: 'soft' },
  { d: 'M86 70 l6 -3 M92 80 l6 -3 M96 90 l5 -3', role: 'ambient' },
  { d: 'M76 102 V114 M86 104 V114', role: 'soft' },
  { d: 'M87 106 H94 V112 H87 Z', role: 'accent' },
  { d: 'M30 114 H130 V120 H30 Z' },
  { d: 'M76 120 V150 M84 120 V150 M62 150 H98' },
  shadow(80, 154, 26),
]

/**
 * Samwell Tarly: two closed books and an open one on top, for the recruit
 * who has read what the others have not, at Castle Black from episode 4
 * and Jon IV (chapter 27). The far sides are hatched; the accent is the
 * ribbon that marks the page.
 */
const BOOKS: Stroke[] = [
  { d: 'M30 150 V136 H112 V150 Z M30 136 L44 126 H126 L112 136' },
  { d: 'M112 150 L126 140 V126' },
  {
    d: 'M40 126 V114 H108 V126 M40 114 L52 106 H120 L108 114 M108 126 L120 118 V106',
  },
  {
    d: 'M80 104 Q62 94 42 100 L48 86 Q64 80 80 90 Q96 80 112 86 L118 100 Q98 94 80 104 Z',
  },
  { d: 'M80 90 V104', role: 'soft' },
  { d: 'M52 92 Q64 88 76 94 M84 94 Q96 88 108 92', role: 'soft' },
  { d: 'M80 104 Q86 116 80 130', role: 'accent' },
  { d: 'M114 146 l10 -7 M114 141 l10 -7 M110 122 l8 -6', role: 'ambient' },
  shadow(78, 155, 52),
]

/**
 * Alliser Thorne: a straw dummy on a post in the yard with a sword struck
 * into it, for the master-at-arms who drills the recruits from episode 3
 * and Jon III (chapter 20). The head is blank. The sack's far side is
 * hatched; the accent is the sword's grip.
 */
const DUMMY: Stroke[] = [
  { d: circle(80, 38, 10) },
  { d: 'M64 54 Q58 80 64 112 H96 Q102 80 96 54 Z' },
  { d: 'M38 66 H64 M96 66 H122 M38 72 H64 M96 72 H122 M38 66 V72 M122 66 V72' },
  {
    d: 'M38 66 l-6 -3 M38 69 h-7 M38 72 l-6 3 M122 66 l6 -3 M122 69 h7 M122 72 l6 3',
    role: 'soft',
  },
  { d: 'M64 76 Q80 80 96 76 M63 98 Q80 102 97 98', role: 'soft' },
  { d: 'M78 112 V150 M82 112 V150 M62 150 H98' },
  { d: 'M97 86 L119 62 M101 90 L123 66' },
  { d: 'M113 58 L129 72' },
  {
    d: `M120 63 L131 52 M123 66 L134 55 ${circle(135, 51, 3)}`,
    role: 'accent',
  },
  {
    d: 'M90 60 l5 -3 M91 72 l5 -3 M91 86 l5 -3 M90 100 l5 -3',
    role: 'ambient',
  },
  shadow(80, 154, 30),
]

/**
 * Yoren: a pair of iron manacles on their chain, for the recruiter who
 * brings two convicts from the dungeons to the Wall, met on the road in
 * episode 3 and in Tyrion II (chapter 14). The iron's far sides are
 * hatched; the accent is the chain.
 */
const MANACLES: Stroke[] = [
  { d: ellipse(44, 116, 20, 10) },
  { d: 'M24 116 V122 Q24 132 44 132 Q64 132 64 122 V116' },
  { d: ellipse(116, 116, 20, 10) },
  { d: 'M96 116 V122 Q96 132 116 132 Q136 132 136 122 V116' },
  {
    d: `${ellipse(66, 112, 6, 3.5)} ${ellipse(80, 116, 6, 3.5)} ${ellipse(94, 112, 6, 3.5)}`,
    role: 'accent',
  },
  {
    d: 'M73 113 L74 115 M87 115 L88 113 M59 110 L62 108 M98 108 L101 110',
    role: 'soft',
  },
  { d: 'M40 106 h8 M112 106 h8', role: 'soft' },
  { d: 'M54 124 l6 -3 M126 124 l6 -3 M30 126 l4 -2', role: 'ambient' },
  shadow(80, 140, 64),
]

/**
 * Jafer Flowers: his severed hand lying in the snow, the fingers stiff, for
 * the ranger who is already dead when he opens: Ghost brings the hand back
 * in episode 7, and his body is carried to Castle Black in episode 8 and
 * in Jon VII (chapter 53). The accent is the cut wrist.
 */
const SEVERED_HAND: Stroke[] = [
  ...moved(
    [
      {
        d: 'M116 104 Q100 98 82 101 L54 95 Q48 95 49 100 Q50 103 56 104 L80 108 L50 106 Q44 107 45 112 Q46 115 52 115 L80 115 L54 118 Q48 120 50 124 Q52 127 58 126 L82 122 L62 128 Q56 131 59 135 Q62 137 67 135 L90 129 Q104 128 116 126',
      },
      { d: 'M100 101 Q94 90 82 84 Q76 82 76 87 Q78 92 88 98' },
      { d: 'M80 103 v4 M80 110 v4 M81 117 v4 M84 123 v4', role: 'soft' },
      { d: ellipse(116, 115, 4.5, 11), role: 'accent' },
    ],
    'translate(-24 -36) scale(1.3)',
  ),
  {
    d: 'M14 140 Q40 130 66 140 Q92 132 118 140 Q134 134 148 140',
    role: 'ambient',
  },
  { d: 'M40 132 Q60 138 74 132 M96 138 Q116 142 132 134', role: 'ambient' },
  shadow(82, 134, 40),
]

/**
 * The armorer's anvil in 3/4, its horn to the left, on a footed base. The
 * far faces are hatched. Donal Noye's first drawing and his death share it.
 */
const NOYE_ANVIL: Stroke[] = [
  { d: 'M20 90 Q34 84 50 84 H120 V96 H54 Q36 96 20 90 Z' },
  { d: 'M50 84 L60 76 H130 L120 84 M130 76 V88 L120 96' },
  { d: 'M62 96 Q68 110 62 126 M110 96 Q104 110 110 126' },
  { d: 'M50 126 H122 V136 H50 Z M122 126 L130 120 V130 L122 136' },
  { d: 'M50 136 L44 150 H128 L122 136' },
  {
    d: 'M123 87 l5 -4 M123 93 l5 -4 M112 104 l5 -4 M112 114 l5 -4 M124 132 l5 -4',
    role: 'ambient',
  },
  shadow(86, 154, 48),
]

/** His hammer's head in 3/4; the handle is added by each drawing. */
const NOYE_HAMMER_HEAD: Stroke[] = [
  { d: 'M50 70 H64 V82 H50 Z' },
  { d: 'M50 70 L54 66 H68 L64 70 M68 66 V78 L64 82', role: 'soft' },
]

/**
 * Donal Noye: the hammer laid on the anvil's face beside a bar of iron
 * still hot from the forge, for the one-armed smith who keeps Castle
 * Black's armory, in Jon III (chapter 20). The show has no Donal Noye; the
 * accent is the hot iron.
 */
const NOYE_FORGE: Stroke[] = [
  ...NOYE_ANVIL,
  ...NOYE_HAMMER_HEAD,
  { d: 'M64 74 H92 V78 H64' },
  { d: 'M96 79 L122 77 L123 81 L97 83 Z', role: 'accent' },
  { d: 'M104 72 q-3 -5 0 -10 M114 71 q-3 -5 0 -10', role: 'accent' },
]

/**
 * The kennel's beam with the peg the leash hangs from, the boards of the
 * pens behind it. Chett's first drawing and his death share it.
 */
const KENNEL_BEAM: Stroke[] = [
  { d: 'M24 30 H136 V44 H24 Z' },
  { d: 'M40 36 h22 M90 38 h30', role: 'soft' },
  { d: `M78 44 V58 ${circle(78, 60, 3)}` },
]

/**
 * Chett: a leash and its collar hung from a peg in the kennels, for the
 * steward sent from Maester Aemon's door to the hounds, from Jon V
 * (chapter 42) and Jon VI (chapter 49). The show has no Chett. The
 * collar's far side is hatched; the accent is the chain.
 */
const KENNEL_LEASH: Stroke[] = [
  ...KENNEL_BEAM,
  { d: 'M24 44 V150 M136 44 V150 M52 44 V150 M108 44 V150', role: 'ambient' },
  { d: 'M74 58 Q64 70 72 84 L84 84 Q92 70 82 58' },
  {
    d: `${ellipse(78, 92, 3, 6)} ${ellipse(78, 103, 2, 5)} ${ellipse(78, 114, 3, 6)}`,
    role: 'accent',
  },
  { d: ellipse(78, 128, 24, 8) },
  { d: 'M54 128 V134 Q54 142 78 142 Q102 142 102 134 V128' },
  { d: 'M70 136 h12 v8 h-12 z M76 136 v8', role: 'soft' },
  { d: 'M92 137 l5 -3 M98 134 l3 -2', role: 'ambient' },
]

/** The first season's Night's Watch (#1052), keyed by record id. */
export const WALL_DRAWINGS = {
  'jeor-mormont': BEAR,
  'aemon': RAVEN,
  'samwell-tarly': BOOKS,
  'alliser-thorne': DUMMY,
  'yoren': MANACLES,
  'jafer-flowers': SEVERED_HAND,
  'donal-noye': NOYE_FORGE,
  'chett': KENNEL_LEASH,
} satisfies Drawings

/** The Night's Watch drawn again later in the story. */
export const wallRedrawn: Redrawings = {
  'aemon': [
    // The same raven, with the three-headed dragon of his house on a banner
    // under the perch: he tells Jon he is a Targaryen in "Baelor" (episode
    // 9) and in Jon VIII (chapter 61).
    {
      episode: 9,
      chapter: 61,
      value: [
        ...RAVEN,
        { d: 'M32 120 V152 L47 146 L62 152 V120' },
        ...moved(
          DRAGON_SIGIL,
          'translate(47 135) scale(0.34) translate(-80 -92)',
        ),
      ],
    },
  ],
  'donal-noye': [
    // The anvil cold and the hammer fallen on the ground beside it: he dies
    // holding the gate against the giants in Jon VIII (chapter 208). The
    // book's alone; episode 39, where the show gives the gate to Grenn,
    // orders it.
    {
      episode: 39,
      chapter: 208,
      value: [
        ...NOYE_ANVIL,
        ...moved(
          [...NOYE_HAMMER_HEAD, { d: 'M64 74 H92 V78 H64', role: 'accent' }],
          'translate(-36 72)',
        ),
      ],
    },
  ],
  'chett': [
    // The peg empty and the leash fallen to the ground, the collar lying
    // flat: he dies at the Fist of the First Men, which Samwell III
    // (chapter 190) tells when Sam meets him among the dead. The book's
    // alone; episode 28, where the show reaches the same scene, orders it.
    {
      episode: 28,
      chapter: 190,
      value: [
        ...KENNEL_BEAM,
        { d: ellipse(56, 140, 24, 7) },
        { d: 'M32 140 V144 Q32 150 56 150 Q80 150 80 144 V140' },
        {
          d: `${ellipse(88, 144, 6, 3)} ${ellipse(100, 146, 5, 2.5)} ${ellipse(112, 144, 6, 3)}`,
          role: 'accent',
        },
        { d: 'M118 144 Q132 136 140 146 Q130 152 118 148', role: 'soft' },
        { d: 'M14 152 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
}
