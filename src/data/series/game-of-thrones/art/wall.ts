import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { DRAGON_SIGIL } from './essos'

/**
 * Jeor Mormont: the bear of his house, reared up side on with no face.
 * Nothing of his own reads at his threshold in both media (the book's raven
 * is not on screen in season 1), so the animal stands in, as Joffrey's
 * stag does. The bear is black, so its back is hatched; the accent is the
 * claws of the raised paw. His first drawing and his death share the
 * animal, `BEAR_BODY`.
 */
const BEAR_BODY: Stroke[] = [
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
]
const BEAR: Stroke[] = [...BEAR_BODY, shadow(92, 154, 30)]

/** The rookery perch: its bar, and the post on its foot. */
const PERCH: Stroke[] = [
  { d: 'M30 114 H130 V120 H30 Z' },
  { d: 'M76 120 V150 M84 120 V150 M62 150 H98' },
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
  ...PERCH,
  shadow(80, 154, 26),
]

/**
 * The three-headed dragon of his house on a banner hung under the perch,
 * from the episode and chapter where he tells Jon he is a Targaryen.
 */
const AEMON_BANNER: Stroke[] = [
  { d: 'M32 120 V152 L47 146 L62 152 V120' },
  ...moved(DRAGON_SIGIL, 'translate(47 135) scale(0.34) translate(-80 -92)'),
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
 * hatched; the accent is the sword's grip. His first drawing and his death
 * share the dummy and its sword, `DUMMY_BODY`.
 */
const DUMMY_BODY: Stroke[] = [
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
]
const DUMMY: Stroke[] = [...DUMMY_BODY, shadow(80, 154, 30)]

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
  { d: 'M104 72 q-3 -5 0 -10 M114 71 q-3 -5 0 -10', role: 'soft' },
]

/**
 * The kennel's beam with the peg the leash hangs from, the boards of the
 * pens behind it. Chett's first drawing and his death share it.
 */
const KENNEL_BEAM: Stroke[] = [
  { d: 'M24 30 H136 V44 H24 Z' },
  { d: 'M40 36 h22 M90 38 h30', role: 'soft' },
  { d: `M78 44 V58 ${circle(78, 60, 3)}` },
  { d: 'M24 44 V150 M136 44 V150 M52 44 V150 M108 44 V150', role: 'ambient' },
]

/**
 * Chett: a leash and its collar hung from a peg in the kennels, for the
 * steward sent from Maester Aemon's door to the hounds, from Jon V
 * (chapter 42) and Jon VI (chapter 49). The show has no Chett. The
 * collar's far side is hatched; the accent is the chain.
 */
const KENNEL_LEASH: Stroke[] = [
  ...KENNEL_BEAM,
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

/**
 * One of Yoren's manacles lying open: the band, the near half of the
 * cuff, and the far half swung up on its hinge. The other is its mirror.
 */
const OPEN_CUFF: Stroke[] = [
  { d: 'M24 116 V122 Q24 132 44 132 Q64 132 64 122 V116' },
  { d: 'M24 116 Q24 126 44 126 Q64 126 64 116', role: 'soft' },
  { d: 'M64 116 Q66 96 50 88 Q34 82 30 92 Q42 92 54 100 Q60 106 60 116' },
  { d: 'M30 126 l4 -2 M36 128 l4 -2', role: 'ambient' },
]

/**
 * Will: his black cloak fallen in a heap, the hood thrown back, for the
 * ranger Eddard beheads as a deserter in episode 1; the book's Will dies
 * in the Prologue (chapter 1). He is dead in the scene that opens him in
 * both media, so the first drawing shows it. The far side is hatched; the
 * accent is the clasp.
 */
const FALLEN_CLOAK: Stroke[] = [
  {
    d: 'M68 104 Q42 110 16 136 Q22 144 32 142 Q40 150 52 146 Q62 154 74 148 Q86 154 98 148 Q110 154 120 146 Q132 150 136 142 Q146 142 144 136 Q118 110 92 104',
  },
  { d: 'M68 104 Q64 86 80 84 Q96 86 92 104' },
  { d: 'M72 98 Q80 92 88 98', role: 'soft' },
  { d: 'M68 104 Q80 110 92 104', role: 'soft' },
  {
    d: 'M70 110 Q50 124 40 144 M78 112 Q72 130 74 148 M86 112 Q96 130 98 148 M92 110 Q112 122 122 144',
    role: 'soft',
  },
  {
    d: `${circle(66, 106, 2.5)} ${circle(94, 106, 2.5)} M68.5 107 Q80 112 91.5 107`,
    role: 'accent',
  },
  { d: 'M118 124 l6 -3 M126 130 l7 -3 M132 138 l6 -3', role: 'ambient' },
  shadow(80, 156, 64),
]

/** A scrap of cloth with a torn edge and a dark stain, upright. */
const SCRAP: Stroke[] = [
  {
    d: 'M44 134 Q44 110 58 96 Q72 84 98 82 L101 90 L107 86 L109 95 L116 94 Q108 112 114 134',
  },
  {
    d: 'M70 104 Q80 96 90 102 Q98 112 90 120 Q78 126 72 118 Q66 110 70 104 Z',
    role: 'accent',
  },
  { d: 'M56 106 Q54 120 58 132 M98 90 Q92 104 96 116', role: 'soft' },
  { d: 'M106 104 l5 -3 M106 116 l6 -3 M108 128 l5 -3', role: 'ambient' },
]
/**
 * Gared: the bloodied scrap of clothing he finds half buried in the snow
 * in episode 1, before the White Walker comes for the patrol. The book's
 * Gared lives through the Prologue (chapter 1), so the drawing shows no
 * death. The accent is the stain.
 */
const SCRAP_IN_SNOW: Stroke[] = [
  ...SCRAP,
  { d: 'M16 140 Q38 126 58 132 Q80 140 100 130 Q124 122 144 140' },
  { d: 'M24 146 Q50 140 70 146 M96 144 Q118 138 138 146', role: 'soft' },
  {
    d: dots([
      [40, 108],
      [118, 100],
      [128, 116],
      [30, 124],
    ]),
    role: 'soft',
  },
  shadow(80, 152, 60),
]

/** A wooden practice sword's hilt: knob, wrapped grip, square guard. */
const PRACTICE_HILT: Stroke[] = [
  { d: circle(80, 30, 5) },
  { d: 'M76 35 H84 V60 H76 Z' },
  { d: 'M76 41 L84 45 M76 48 L84 52 M76 55 L84 59', role: 'accent' },
  { d: 'M58 60 H102 V68 H58 Z M102 60 L106 57 V65 L102 68' },
]
/** Its blunt blade, the side face turned away and hatched. */
const PRACTICE_BLADE: Stroke[] = [
  { d: 'M70 68 V134 Q70 146 80 150 Q90 146 90 134 V68' },
  { d: 'M90 68 L94 65 V132 Q94 144 83 149', role: 'soft' },
  { d: 'M78 76 Q76 100 78 124 M83 84 Q85 104 83 130', role: 'soft' },
  {
    d: 'M91 80 l3 -2 M91 94 l3 -2 M91 108 l3 -2 M91 122 l3 -2',
    role: 'ambient',
  },
]
/**
 * A wooden practice sword, the kind the recruits fight Jon with in the
 * yard at Castle Black in episode 3. The accent is the grip's wrap.
 */
const PRACTICE_SWORD: Stroke[] = [...PRACTICE_HILT, ...PRACTICE_BLADE]

/**
 * Grenn: a practice sword stood on its point, for the recruit Jon beats in
 * the yard in episode 3 and in Jon III (chapter 20). Nothing in either
 * medium is his own, so the drawing is a declared B, posed apart from
 * Pypar's and Rast's swords.
 */
const GRENN_SWORD: Stroke[] = [...PRACTICE_SWORD, shadow(80, 153, 24)]

/** The practice sword snapped: the hilt with its stub, and the blade. */
const SNAPPED_HILT: Stroke[] = [
  ...PRACTICE_HILT,
  { d: 'M70 68 V98 L74 94 L78 100 L82 93 L86 99 L90 95 V68' },
  { d: 'M90 68 L94 65 V92 L90 95', role: 'soft' },
]
const SNAPPED_BLADE: Stroke[] = [
  {
    d: 'M70 102 L74 98 L78 104 L82 97 L86 103 L90 99 V134 Q90 146 80 150 Q70 146 70 134 Z',
  },
  { d: 'M90 99 L94 96 V132 Q94 144 83 149', role: 'soft' },
  { d: 'M91 112 l3 -2 M91 126 l3 -2', role: 'ambient' },
]

/**
 * Pypar: two practice swords crossed and stood on their points, for the
 * recruit in the yard in episode 3 and in Jon III (chapter 20). A declared
 * B: nothing of his own shows in either medium. The accent is the grip of
 * the sword leaning left; the one leaning right is softened.
 */
const CROSSED_SWORDS: Stroke[] = [
  ...moved(
    PRACTICE_SWORD,
    'translate(80 116) rotate(-40) scale(0.85) translate(-80 -100)',
  ),
  ...moved(
    softened(PRACTICE_SWORD),
    'translate(80 116) rotate(40) scale(0.85) translate(-80 -100)',
  ),
  shadow(80, 152, 46),
]

/**
 * Rast: a practice sword laid flat on the ground, for the recruit sent
 * against Jon in the yard in episode 3 and in Jon IV (chapter 27). A
 * declared B, posed apart from Grenn's and Pypar's.
 */
const LAID_SWORD: Stroke[] = [
  ...moved(PRACTICE_SWORD, 'translate(0 50) rotate(-90 80 88)'),
  shadow(80, 156, 64),
]

/**
 * A sworn brother's steel sword: pommel, wrapped grip, curved guard and a
 * dark blade, hatched on its far half.
 */
const STEEL_SWORD: Stroke[] = [
  { d: circle(80, 30, 4) },
  { d: 'M77 34 H83 V56 H77 Z' },
  { d: 'M77 39 L83 42 M77 45 L83 48 M77 51 L83 54', role: 'accent' },
  { d: 'M60 56 Q80 52 100 56 V60 Q80 56 60 60 Z' },
  { d: 'M74 60 V138 L80 150 L86 138 V60' },
  { d: 'M80 62 V146', role: 'soft' },
  {
    d: 'M81 72 l4 -3 M81 86 l4 -3 M81 100 l4 -3 M81 114 l4 -3 M81 128 l4 -3',
    role: 'ambient',
  },
]

/** A knight's longsword cut off where it goes into the snow. */
const KNIGHT_SWORD: Stroke[] = [
  { d: `${circle(80, 26, 5)} M77 31 V54 M83 31 V54` },
  { d: 'M77 37 L83 40 M77 43 L83 46 M77 49 L83 52', role: 'soft' },
  {
    d: 'M56 58 Q60 52 68 54 H92 Q100 52 104 58 Q98 58 92 60 H68 Q62 58 56 58 Z',
    role: 'accent',
  },
  { d: 'M74 60 V128 M86 60 V128' },
  { d: 'M80 62 V128', role: 'soft' },
  { d: 'M81 74 l4 -3 M81 88 l4 -3 M81 102 l4 -3', role: 'ambient' },
]
/**
 * Waymar Royce: a knight's longsword fallen in a snowdrift, its point under
 * the snow, for the young commander of the patrol who dies in the Haunted
 * Forest in episode 1 and in the Prologue (chapter 1). He is dead in the
 * scene that opens him in both media. The book shatters the blade; the
 * show is the reference, and its sword stays whole. The accent is the
 * guard.
 */
const SWORD_IN_SNOW: Stroke[] = [
  ...moved(KNIGHT_SWORD, 'translate(-20 4) rotate(40 80 128)'),
  { d: 'M14 144 Q34 124 56 130 Q76 136 96 128 Q120 120 146 140' },
  { d: 'M22 150 Q60 142 96 150 M104 148 Q124 142 142 150', role: 'soft' },
  {
    d: dots([
      [30, 96],
      [122, 82],
      [136, 104],
      [44, 70],
      [112, 52],
    ]),
    role: 'soft',
  },
  { d: 'M118 134 l6 -3 M128 138 l6 -3', role: 'ambient' },
]

/**
 * A black cloak folded into a square: the top with the hood laid on it and
 * the clasp, the folds along the front, the far side hatched.
 */
const FOLDED_CLOAK: Stroke[] = [
  { d: 'M122 104 H54 Q32 104 32 122 Q32 140 54 140 H126' },
  {
    d: 'M122 104 Q128 109 123 114 Q118 119 125 124 Q131 129 125 134 Q121 137 126 140',
  },
  { d: 'M54 112 Q42 112 42 122 Q42 132 54 132 H124', role: 'soft' },
  { d: 'M64 104 Q60 114 66 122 M96 104 Q100 114 94 122', role: 'soft' },
  {
    d: `${circle(70, 108, 2.5)} ${circle(88, 108, 2.5)} M72.5 109 Q79 112 85.5 109`,
    role: 'accent',
  },
  {
    d: 'M60 138 l6 -4 M76 138 l6 -4 M92 138 l6 -4 M108 138 l6 -4',
    role: 'ambient',
  },
]
/**
 * Dareon: the black cloak of a sworn brother, folded, for the recruit in
 * Jon's group who is sent to the stewards in episode 7, in the book a
 * singer in Jon III (chapter 20). Neither medium gives him an object of
 * his own; the cloak is what the scene gives him, a declared B.
 */
const DAREON_CLOAK: Stroke[] = [...FOLDED_CLOAK, shadow(82, 148, 52)]

/**
 * Halder: a chisel struck into a block of stone with a mallet laid beside
 * it, for the recruit sent to the builders in episode 7 and in Jon III
 * (chapter 20) an apprentice stonemason, who helps carve the wolf's head
 * on Longclaw's pommel. The block's far side is hatched; the accent is the
 * chisel's blade.
 */
const CHISEL: Stroke[] = [
  { d: 'M28 118 H108 V150 H28 Z M28 118 L44 104 H124 L108 118' },
  { d: 'M108 150 L124 136 V104' },
  { d: 'M111 122 l10 -8 M111 134 l10 -8 M111 146 l10 -8', role: 'ambient' },
  { d: 'M40 132 l6 3 M86 140 l6 -3', role: 'soft' },
  { d: 'M54 66 L61 101 M61 65 L68 100 M52 67 Q57 58 63 64' },
  { d: 'M61 101 L60 111 L69 110 L68 100', role: 'accent' },
  {
    d: `${ellipse(86, 104, 3, 7)} M86 97 H104 M86 111 H104 M104 97 Q108 104 104 111`,
  },
  { d: 'M107 102 L136 94 M107 106 L137 98 M136 94 L137 98', role: 'soft' },
  shadow(78, 154, 52),
]

/**
 * Todder: a black cloak rolled into a bedroll, the clasp on it, for the
 * brother on watch at the gate who calls "Halt!" when Jon comes back in
 * "Mhysa" (episode 30); the book has him among the recruits in Jon III
 * (chapter 20). Nothing of his own shows in either medium, so the drawing
 * is a declared B, posed apart from the other cloaks. The underside is
 * hatched.
 */
const ROLLED_CLOAK: Stroke[] = [
  { d: `${ellipse(38, 128, 8, 16)} M38 112 H116 M38 144 H116` },
  { d: 'M38 120 Q32 128 38 136 Q44 128 40 122', role: 'soft' },
  { d: 'M116 112 Q126 128 116 144' },
  { d: 'M120 116 Q136 110 148 122 L140 127 Q142 138 128 142 L120 140' },
  { d: 'M60 112 Q56 128 60 144 M96 112 Q92 128 96 144', role: 'soft' },
  {
    d: `${circle(72, 124, 2.5)} ${circle(84, 130, 2.5)} M74 126 L82 128.5`,
    role: 'accent',
  },
  {
    d: 'M48 142 l5 -4 M64 143 l5 -4 M80 143 l5 -4 M100 143 l5 -4',
    role: 'ambient',
  },
  shadow(78, 152, 50),
]

/** A block of the Wall's ice, its far side hatched and a crack or two. */
const ICE_BLOCK: Stroke[] = [
  { d: 'M84 64 H132 V150 H84 Z M84 64 L96 54 H144 L132 64' },
  { d: 'M132 150 L144 140 V54' },
  { d: 'M96 80 L104 94 L100 108 M116 116 L108 132', role: 'soft' },
  {
    d: 'M134 72 l8 -6 M134 92 l8 -6 M134 112 l8 -6 M134 132 l8 -6',
    role: 'ambient',
  },
]
/** A mason's hammer stood on its head, the handle leaning on the block. */
const HAMMER_HANDLE: Stroke[] = [
  { d: 'M41 150 L68.2 83.4 M47 150 L73.6 85.8 M41 150 H47' },
  { d: 'M62.8 79 L80.6 83.2', role: 'soft' },
]
const HAMMER_HEAD = 'M66 75.3 L84.2 79.5 L80 88.7 L61.8 84.5 Z'
/**
 * A dagger struck point down into a surface, for the mutiny against Jon:
 * the stub of blade above it, the guard, the grip and the pommel. The
 * accent is the blade and guard.
 */
const MUTINY_DAGGER: Stroke[] = [
  { d: 'M115 59 V46 M122 59 V46 M109 46 H128 V42 H109 Z', role: 'accent' },
  { d: `M116 42 V32 H121 V42 ${circle(118.5, 29, 3)}` },
]
/**
 * Othell Yarwyck: a mason's hammer leaning on a block of the Wall, for the
 * First Builder at the swearing of the new brothers in episode 7 and in
 * Jon VI (chapter 49). The show never puts the tool in his hand: it is his
 * trade, a declared B. The accent is the hammer's head.
 */
const MASON_HAMMER: Stroke[] = [
  ...ICE_BLOCK,
  ...HAMMER_HANDLE,
  { d: HAMMER_HEAD, role: 'accent' },
  shadow(84, 154, 62),
]

/**
 * A ledger lying open: two pages ruled for accounts, the cover's edge
 * under them, its far side hatched.
 */
const OPEN_LEDGER: Stroke[] = [
  {
    d: 'M80 98 Q58 90 34 96 L26 132 Q54 126 80 134 Q106 126 134 132 L126 96 Q102 90 80 98 Z',
  },
  { d: 'M80 98 V134', role: 'soft' },
  { d: 'M26 132 V137 Q54 131 80 139 Q106 131 134 137 V132' },
  {
    d: 'M38 104 Q56 100 74 105 M36 112 Q54 108 74 113 M34 120 Q52 116 74 121 M86 105 Q104 100 122 104 M86 113 Q106 108 124 112 M86 121 Q106 116 126 120',
    role: 'soft',
  },
  { d: 'M112 136 l5 -3 M122 136 l5 -3', role: 'ambient' },
]
const QUILL = {
  d: 'M96 128 L140 70 Q132 72 122 84 Q114 96 104 116 M140 70 Q138 82 128 94 Q118 108 108 120',
}
/**
 * Bowen Marsh: a ledger lying open with a quill across it, for the head of
 * the stewards who counts the Watch's stores, at Castle Black from "The
 * Wars to Come" (episode 41) and at the Lord Commander's table in Tyrion
 * III (chapter 22). Neither medium shows him with a ledger: it is the
 * steward's work, a declared B. The accent is the quill.
 */
const LEDGER: Stroke[] = [
  ...OPEN_LEDGER,
  { ...QUILL, role: 'accent' },
  shadow(80, 150, 56),
]

/** A knight's sword: round pommel, wrapped grip and a straight guard. */
const RANGER_HILT: Stroke[] = [
  { d: circle(80, 28, 5) },
  { d: 'M77 33 H83 V58 H77 Z' },
  { d: 'M77 39 L83 42 M77 46 L83 49 M77 53 L83 56', role: 'soft' },
  { d: 'M58 58 H102 V63 H58 Z', role: 'accent' },
]
/** Its scabbard, the locket and the chape, the far half hatched. */
const RANGER_SCABBARD: Stroke[] = [
  { d: 'M73 63 V136 L80 146 L87 136 V63' },
  { d: 'M73 72 H87 M73 76 H87 M75 132 L80 140 L85 132', role: 'soft' },
  {
    d: 'M81 86 l5 -3 M81 100 l5 -3 M81 114 l5 -3 M81 128 l5 -3',
    role: 'ambient',
  },
]
/** The root of a tree beyond the Wall, its underside hatched. */
const ROOT: Stroke[] = [
  { d: 'M96 150 Q100 122 120 116 Q136 112 148 124' },
  { d: 'M110 150 Q114 132 126 128 Q138 126 144 134', role: 'soft' },
  { d: 'M126 140 l6 -4 M136 142 l6 -4', role: 'ambient' },
]
/**
 * Jaremy Rykker: a knight's longsword in its scabbard, leaning on a root,
 * for the ser who leads the rangers' escort in episode 7 and sits at the
 * Lord Commander's table in Tyrion III (chapter 22). The show never puts a
 * sword of his own in view: a knight's, a declared B. The accent is the
 * guard.
 */
const SHEATHED_SWORD: Stroke[] = [
  ...moved(
    [...RANGER_HILT, ...RANGER_SCABBARD],
    'rotate(48 80 146) translate(-30 0)',
  ),
  ...ROOT,
  shadow(80, 154, 64),
]

/** A sled's runners, deck and struts, side on. */
const SLED: Stroke[] = [
  { d: 'M10 150 H106 Q118 150 120 138 M14 144 H110' },
  { d: 'M14 144 L10 150 M110 144 L116 145', role: 'soft' },
]
/** A black cloak drawn over a long shape on the sled, its folds. */
const DRAPED_CLOAK = {
  d: 'M16 136 Q16 120 32 116 Q50 110 72 114 Q98 116 108 126 Q112 130 112 136',
}
const DRAPE_FOLDS: Stroke = {
  d: 'M34 118 Q48 124 52 138 M76 116 Q90 124 92 138',
  role: 'soft',
}
/** An oil lamp on the ground, side on, unlit. */
const LAMP: Stroke[] = [
  { d: 'M122 150 Q120 142 128 140 H140 Q146 142 144 150 Z' },
  { d: 'M144 144 L154 140 L152 147 M122 146 Q114 144 118 138' },
]

/**
 * Othor: his black cloak drawn over his body on a sled, its hem burnt
 * ragged, the lamp knocked over. Both media open him when the rangers bring
 * him back dead, and both tell the same night his corpse rising and Jon
 * burning it in the Lord Commander's rooms: "The Pointy End" (episode 8)
 * and Jon VII (chapter 53). The drawing shows what that leaves. The accent
 * is the burnt hem.
 */
const BURNT_CLOAK: Stroke[] = [
  ...SLED,
  DRAPED_CLOAK,
  {
    d: 'M16 136 L20 142 L25 137 L30 144 L36 138 L41 143 L47 137 L54 145 L60 138 L66 143 L72 137 L79 144 L85 138 L91 142 L97 137 L103 143 L108 138 L112 136',
    role: 'accent',
  },
  DRAPE_FOLDS,
  ...moved(LAMP, 'rotate(-35 133 150)'),
  shadow(80, 156, 68),
]

/**
 * Jaremy Rykker's heavy breastplate in 3/4, standing, the ridge down its
 * front and the faulds at its waist, the far side hatched, with his
 * sable-trimmed cloak hanging behind it.
 */
const SMALLWOOD_PLATE: Stroke[] = [
  {
    d: 'M64 60 Q80 68 96 60 L108 62 Q100 78 108 96 Q110 114 104 128 Q80 136 56 128 Q50 114 52 96 Q60 78 52 62 Z',
  },
  { d: 'M64 60 Q80 74 96 60', role: 'soft' },
  { d: 'M80 70 Q83 100 80 132', role: 'soft' },
  {
    d: dots([
      [58, 70],
      [60, 84],
      [102, 70],
      [100, 84],
      [62, 122],
      [98, 122],
    ]),
    role: 'soft',
  },
  { d: 'M56 128 L54 138 Q80 146 106 138 L104 128', role: 'soft' },
  {
    d: 'M92 84 l6 -4 M94 98 l6 -4 M94 112 l6 -4 M92 124 l5 -3',
    role: 'ambient',
  },
]

/** The cloak behind the plate, falling wide to the ground, its folds. */
const SMALLWOOD_CLOAK: Stroke[] = [
  {
    d: 'M52 64 Q36 62 30 82 Q22 116 16 150 H54 M108 64 Q124 62 130 82 Q138 116 144 150 H106',
  },
  { d: 'M54 150 Q80 156 106 150 M54 140 V150 M106 140 V150', role: 'soft' },
  { d: 'M34 100 Q32 126 28 146 M126 100 Q128 126 132 146', role: 'soft' },
]

/** The cloak's sable trim, round the shoulders behind the plate. */
const SABLE_TRIM =
  'M40 66 q1 -6 8 -8 q2 -5 8 -6 q3 -4 8 -4 q3 -3 8 -2 q4 -3 8 0 q4 -3 8 0 q5 -1 8 2 q5 0 8 4 q6 1 8 6 q6 2 8 8'

/**
 * Thoren Smallwood: the heavy breastplate and the sable-trimmed cloak he
 * takes for himself when Jaremy Rykker's command falls to him, in Jon I
 * (chapter 80). The show never has him. The accent is the sable trim.
 */
const SMALLWOOD: Stroke[] = [
  ...SMALLWOOD_CLOAK,
  ...SMALLWOOD_PLATE,
  { d: SABLE_TRIM, role: 'accent' },
  shadow(80, 154, 62),
]

/** A spade's D-grip, shaft and iron blade in 3/4, its far face hatched. */
const SPADE: Stroke[] = [
  { d: 'M70 22 H90 M72 22 Q72 36 78 38 M88 22 Q88 36 82 38' },
  { d: 'M78 38 V104 M82 38 V104' },
  { d: 'M66 104 H94 L96 132 Q80 140 64 132 Z' },
  { d: 'M66 104 Q80 110 94 104', role: 'accent' },
  { d: 'M88 112 l5 -3 M89 122 l5 -3', role: 'ambient' },
]

/**
 * Eddison Tollett: a spade stuck in the frozen ground at the Fist of the
 * First Men, where he digs latrines with Grenn and Sam in "The Prince of
 * Winterfell" (episode 18). The books give him nothing of his own to draw,
 * so the show's chore stands in. The accent is the blade's top edge, where
 * a boot drives it in.
 */
const EDD_SPADE: Stroke[] = [
  ...SPADE,
  { d: 'M24 150 Q40 124 64 124 M96 124 Q120 124 136 150' },
  { d: 'M40 150 Q46 138 56 136 M104 136 Q114 138 120 150', role: 'soft' },
  { d: 'M110 140 l5 -4 M120 146 l5 -4', role: 'ambient' },
  { d: 'M16 150 H144', role: 'ambient', dashed: true },
]

/**
 * A ranger's horn on its strap, the bell in 3/4 with its mouth open to the
 * viewer, the rings round it and the far side hatched.
 */
const HORN: Stroke[] = [
  { d: 'M30 55 Q60 60 82 76 Q100 90 114 88' },
  { d: 'M30 63 Q56 74 76 94 Q94 116 114 120' },
  { d: 'M26 54 H31 V64 H26 Z' },
  { d: ellipse(114, 104, 7, 16) },
  { d: ellipse(114, 104, 3.5, 11), role: 'soft' },
  { d: 'M58 62 Q55 72 60 82 M84 77 Q80 90 86 103', role: 'accent' },
  { d: 'M48 72 l3 4 M70 90 l3 4 M94 110 l3 4', role: 'ambient' },
  { d: 'M34 64 Q28 130 80 136 Q116 140 116 120', role: 'soft' },
]

/**
 * Jarman Buckwell: a ranger's horn, for the ranger whose scouts ride out
 * ahead of the column in Jon II (chapter 87). One blast is rangers coming
 * home. The show never has him and the books give him nothing of his own,
 * so the scouts' horn stands in, a declared B. The accent is the two rings
 * round the horn.
 */
const BUCKWELL_HORN: Stroke[] = [...HORN, shadow(80, 146, 48)]

/**
 * A pack frame on the ground, two bundles lashed across it in 3/4, their
 * ends round and the far one hatched.
 */
const PACK: Stroke[] = [
  { d: 'M34 150 L58 88 M126 150 L102 88 M58 88 L102 88' },
  { d: 'M48 150 L66 98 M112 150 L94 98', role: 'soft' },
  { d: 'M30 110 H130 V132 H30 Z' },
  { d: `${ellipse(30, 121, 5, 11)} ${ellipse(130, 121, 5, 11)}`, role: 'soft' },
  { d: 'M40 80 H120 V104 H40 Z' },
  { d: ellipse(120, 92, 5, 12), role: 'soft' },
  { d: 'M64 76 V136 M96 76 V136', role: 'accent' },
  {
    d: 'M104 84 l5 -3 M108 96 l5 -3 M110 114 l5 -3 M112 126 l5 -3',
    role: 'ambient',
  },
]

/**
 * Mallador Locke: a pack frame with its bundles lashed on, for the knight
 * who leads the baggage train of the ranging in Jon II (chapter 87). The
 * show never has him, and the books give him nothing of his own: the
 * baggage he leads stands in, a declared B. The accent is the lashing.
 */
const LOCKE_PACK: Stroke[] = [...PACK, shadow(80, 154, 56)]

/**
 * A right hand held up and seen from the back in 3/4, the thumb and the
 * forefinger whole and the three other fingers lost at the knuckle, the
 * hand's outer edge hatched, over a fur cuff.
 */
const HALFHAND_PALM: Stroke[] = [
  {
    d: 'M64 140 V120 Q58 112 54 104 L42 86 Q38 78 46 76 Q52 76 56 84 L66 98 Q72 90 82 84 V40 Q88 32 96 40 V82 M125 92 Q128 112 120 128 V140',
  },
  { d: 'M83 56 Q89 59 95 56 M83 68 Q89 71 95 68', role: 'soft' },
  { d: 'M88 92 Q86 110 82 126 M102 96 Q102 112 98 126', role: 'soft' },
  { d: 'M118 102 l-4 3 M120 114 l-4 3 M116 126 l-4 3', role: 'ambient' },
  {
    d: 'M58 140 q4 -5 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 M58 140 Q55 150 60 158 H120 Q125 150 122 140',
  },
  {
    d: 'M66 146 l4 6 M78 146 l4 6 M90 146 l4 6 M102 146 l4 6 M112 146 l4 6',
    role: 'ambient',
  },
]

/** The three lost fingers, three stumps along the knuckles. */
const STUMPS = {
  d: 'M96 82 Q96 74 101 74 Q106 74 106 82 Q106 86 108 86 Q108 78 112.5 78 Q117 78 117 86 Q117 90 119 90 Q119 84 122 84 Q125 84 125 92',
}

/**
 * Qhorin Halfhand: the right hand that names him, held up with only the
 * thumb and forefinger left, a wildling axe having taken the rest. The
 * show keeps his gloves on but names him for it from "The Ghost of
 * Harrenhal" (episode 15), the books from Jon V (chapter 117). The back
 * of the hand is turned to the reader, so there is no palm to draw; the
 * accent is the three stumps.
 */
const HALFHAND: Stroke[] = [
  ...HALFHAND_PALM,
  { ...STUMPS, role: 'accent' },
  shadow(90, 164, 36),
]

/**
 * A crag at night, its face climbing to the left and a thin moon above
 * it, the far face hatched.
 */
const CRAG: Stroke[] = [
  {
    d: 'M20 150 L44 112 L40 92 L62 60 L60 40 L78 22 L100 40 L112 74 L132 100 L144 150',
  },
  { d: 'M78 22 L84 54 L112 74 M84 54 L96 104 L132 100', role: 'soft' },
  {
    d: 'M104 54 l6 -3 M114 84 l6 -3 M120 104 l6 -3 M126 120 l6 -3',
    role: 'ambient',
  },
  { d: 'M126 20 A12 12 0 1 0 138 36 A10 10 0 1 1 126 20', role: 'soft' },
  { d: 'M12 150 H148', role: 'ambient', dashed: true },
]

/**
 * Stonesnake: the cliff he climbs by moonlight to the wildling watchers,
 * Jon behind him, in Jon VI (chapter 125); the Watch calls him Stonesnake
 * for climbing. The show never names him. The accent is his way up the
 * face, a declared B: a place stands in for a man the books give nothing
 * else to.
 */
const STONESNAKE_CLIMB: Stroke[] = [
  ...CRAG,
  { d: 'M48 146 L56 128 L50 110 L60 96 L56 80 L68 64 L66 46', role: 'accent' },
]

/**
 * A riding saddle seen from the side, its pommel and cantle, the flap and
 * a stirrup hanging, with a saddlebag strapped behind.
 */
const SADDLE: Stroke[] = [
  {
    d: 'M30 92 Q34 76 46 80 Q64 90 96 88 Q114 86 118 70 Q128 72 128 86 Q124 104 100 106 H52 Q34 106 30 92 Z',
  },
  { d: 'M52 106 V128 Q70 136 92 128 V106', role: 'soft' },
  { d: 'M72 106 V132 M64 132 H80 L82 142 H62 Z' },
  {
    d: 'M118 86 Q132 94 132 110 Q132 124 118 124 Q108 124 108 108',
    role: 'accent',
  },
  { d: 'M40 96 l5 -4 M48 100 l5 -4 M88 116 l4 -3', role: 'ambient' },
]

/**
 * Ebben: a ranger's saddle with its saddlebag, for the ranger who rides with
 * Qhorin's party from Jon VII (chapter 127) and is sent back to warn the
 * Lord Commander. The show never has him and the books give him nothing of
 * his own: the ride stands in, a declared B. The accent is the saddlebag
 * that carries the word.
 */
const EBBEN_SADDLE: Stroke[] = [...SADDLE, shadow(80, 148, 50)]

/** A longbow strung, its belly toward the viewer, stood on its end. */
const LONGBOW: Stroke[] = [
  { d: 'M48 22 Q78 86 48 150' },
  { d: 'M52 22 Q82 86 52 150', role: 'soft' },
  { d: 'M48 22 V150', role: 'soft' },
  { d: 'M58 80 H66 M58 92 H66', role: 'soft' },
]

/** A sheaf of arrows stuck in the snow, fanned, the fletchings up. */
const ARROWS: Stroke[] = [
  { d: 'M100 150 L92 46 M104 150 L106 42 M108 150 L120 48' },
  {
    d: 'M92 46 l-4 -12 M92 46 l4 -12 M106 42 l-4 -12 M106 42 l4 -12 M120 48 l-2 -12 M120 48 l6 -10',
    role: 'accent',
  },
  { d: 'M88 150 Q104 140 120 150', role: 'ambient' },
]

/**
 * Dalbridge: his longbow and a sheaf of arrows stuck in the snow, for the
 * squire who stays behind in the pass with all the arrows to hold off the
 * wildlings in Jon VII (chapter 127). The show never has him. The accent is
 * the fletchings.
 */
const DALBRIDGE_BOW: Stroke[] = [
  ...LONGBOW,
  ...ARROWS,
  { d: 'M20 150 H140', role: 'ambient', dashed: true },
]

/**
 * A long-hafted axe stood on the butt of its haft: the bearded head with
 * its edge, the poll behind it, the bindings low on the haft.
 */
const LONG_AXE: Stroke[] = [
  { d: 'M77 26 H83 V150 H77 Z' },
  { d: 'M77 32 L60 24 Q48 46 60 70 L77 60', role: 'accent' },
  { d: 'M83 30 H90 V58 H83', role: 'soft' },
  { d: 'M64 34 Q58 47 64 60', role: 'soft' },
  { d: 'M77 120 L83 116 M77 128 L83 124 M77 136 L83 132', role: 'soft' },
  {
    d: 'M81 76 l2 -2 M81 112 l2 -2 M81 124 l2 -2 M81 136 l2 -2',
    role: 'ambient',
  },
]

/**
 * Small Paul: the long-hafted axe he straps to his back, which he charges
 * the Other with in Samwell I of A Storm of Swords (chapter 162; A Wiki of
 * Ice and Fire, Small Paul). The record is the books'. The accent is the
 * axe's head.
 */
const SMALL_PAUL_AXE: Stroke[] = [...LONG_AXE, shadow(80, 154, 26)]

/**
 * Dirk: his dirk laid across a whetstone, the blade's far edge soft. He
 * takes his name from the weapon, which he sharpens every night without a
 * word, in the prologue of A Storm of Swords (chapter 144; A Wiki of Ice
 * and Fire, Dirk). The record is the books'. The accent is the blade.
 */
const DIRK_WHETSTONE: Stroke[] = [
  {
    d: 'M30 132 L104 132 L118 120 L44 120 Z M30 132 V140 H104 L118 128 V120 M104 132 V140',
  },
  { d: 'M54 104 L122 86 L136 84 L124 94 L58 112', role: 'accent' },
  { d: 'M58 108 L128 89', role: 'soft' },
  { d: 'M52 102 L48 94 L54 92 L60 112 L62 120 L56 122 Z' },
  { d: 'M52 106 L24 114 L26 120 L56 112' },
  { d: circle(21, 118, 4) },
  { d: 'M32 112 l2 6 M40 110 l2 6', role: 'soft' },
  { d: 'M106 136 l5 -4 M112 132 l5 -4', role: 'ambient' },
  shadow(74, 146, 50),
]

/**
 * A forearm raised out of a black sleeve, the hand gone and the stump
 * bound round in leather: the sleeve with its cuff, its folds soft and its
 * far side hatched.
 */
const STUMP: Stroke[] = [
  { d: 'M44 150 Q48 120 56 104 H104 Q112 120 116 150' },
  { d: 'M54 104 Q80 96 106 104 Q108 98 104 94 Q80 88 56 94 Q52 98 54 104 Z' },
  { d: 'M66 93 L68 60 Q70 46 80 46 Q90 46 92 60 L94 93' },
  {
    d: 'M68 62 L92 54 M68 72 L93 64 M68 82 L94 74 M70 50 L90 62',
    role: 'accent',
  },
  { d: 'M64 116 Q66 132 62 148 M96 116 Q94 132 98 148', role: 'soft' },
  {
    d: 'M100 118 l6 -4 M103 130 l6 -4 M106 142 l6 -4 M54 124 l6 -4 M52 138 l6 -4',
    role: 'ambient',
  },
]

/**
 * Ollo Lophand: the stump of the hand he lost for thieving in Tyrosh, as
 * Chett remembers it in the prologue (chapter 144); A Dance with Dragons
 * has it bound in leather (A Wiki of Ice and Fire, Ollo Lophand). The
 * record is the books'. The accent is the leather.
 */
const OLLO_STUMP: Stroke[] = [...STUMP, shadow(80, 154, 40)]

/**
 * Clubfoot Karl: a pair of boots, the right one turned in on a club foot,
 * its heel built up. Samwell II (chapter 177) has him a large man with a
 * clubfoot (A Wiki of Ice and Fire, Clubfoot Karl); the boots are drawn by
 * eye. The record is the books'. The accent is the club foot's boot.
 */
const KARL_BOOTS: Stroke[] = [
  { d: 'M30 66 H52 V130 Q68 132 72 142 V150 H30 Z' },
  { d: 'M30 76 H52 M30 140 H72', role: 'soft' },
  {
    d: 'M108 66 H130 V124 Q134 134 128 140 V150 H100 Q92 150 94 142 Q96 134 108 128 Z',
    role: 'accent',
  },
  { d: 'M108 76 H130 M98 140 H128', role: 'soft' },
  {
    d: 'M46 88 l5 -3 M46 102 l5 -3 M46 116 l5 -3 M124 88 l5 -3 M124 102 l5 -3 M124 116 l5 -3',
    role: 'ambient',
  },
  shadow(80, 154, 56),
]

/**
 * The first season's Night's Watch (#1052), the second season's rangers
 * (#1474) and the third season's brothers of Chett's plot (#1646), keyed
 * by record id.
 */
export const WALL_DRAWINGS = {
  'jeor-mormont': BEAR,
  'aemon': RAVEN,
  'samwell-tarly': BOOKS,
  'alliser-thorne': DUMMY,
  'yoren': MANACLES,
  'jafer-flowers': SEVERED_HAND,
  'donal-noye': NOYE_FORGE,
  'chett': KENNEL_LEASH,
  'will': FALLEN_CLOAK,
  'gared': SCRAP_IN_SNOW,
  'waymar-royce': SWORD_IN_SNOW,
  'grenn': GRENN_SWORD,
  'pypar': CROSSED_SWORDS,
  'rast': LAID_SWORD,
  'dareon': DAREON_CLOAK,
  'halder': CHISEL,
  'todder': ROLLED_CLOAK,
  'othell-yarwyck': MASON_HAMMER,
  'bowen-marsh': LEDGER,
  'jaremy-rykker': SHEATHED_SWORD,
  'othor': BURNT_CLOAK,
  'thoren-smallwood': SMALLWOOD,
  'eddison-tollett': EDD_SPADE,
  'jarman-buckwell': BUCKWELL_HORN,
  'mallador-locke': LOCKE_PACK,
  'qhorin-halfhand': HALFHAND,
  'stonesnake': STONESNAKE_CLIMB,
  'ebben': EBBEN_SADDLE,
  'dalbridge': DALBRIDGE_BOW,
  'small-paul': SMALL_PAUL_AXE,
  'dirk': DIRK_WHETSTONE,
  'ollo-lophand': OLLO_STUMP,
  'clubfoot-karl': KARL_BOOTS,
} satisfies Drawings

/** The Night's Watch drawn again later in the story. */
export const wallRedrawn: Redrawings = {
  'aemon': [
    // The same raven, with the three-headed dragon of his house on a banner
    // under the perch: he tells Jon he is a Targaryen in "Baelor" (episode
    // 9) and in Jon VIII (chapter 61).
    { episode: 9, chapter: 61, value: [...RAVEN, ...AEMON_BANNER] },
    // The perch empty, the banner still hanging and the letter fallen to
    // the floor under it: the raven has gone with him. He dies at Castle
    // Black in "The Gift" (episode 47), and in Samwell IV of A Feast for
    // Crows (chapter 261).
    {
      episode: 47,
      chapter: 261,
      value: [
        ...PERCH,
        ...softened(AEMON_BANNER),
        { d: 'M98 152 L116 147 L118 151 L100 156 Z', role: 'accent' },
        { d: 'M107 150 q5 4 10 1', role: 'soft' },
        shadow(80, 154, 26),
      ],
    },
  ],
  'jeor-mormont': [
    // The bear fallen on its side, its back hatched and the claws of the
    // paw still raised: the mutineers kill him at Craster's Keep in "And
    // Now His Watch Is Ended" (episode 24) and in Samwell II of A Storm of
    // Swords (chapter 177).
    {
      episode: 24,
      chapter: 177,
      value: [
        ...moved(BEAR_BODY, 'translate(11 2) rotate(-90 80 100)'),
        { d: 'M10 154 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'alliser-thorne': [
    // The dummy knocked over on the ground, the sword still struck into it:
    // Jon hangs him for the mutiny in "Oathbreaker" (episode 53). The
    // show's alone: the books leave him alive, so chapter 344, their last,
    // orders it.
    {
      episode: 53,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(DUMMY_BODY, 'translate(10 2) rotate(-90 80 100)'),
        { d: 'M10 154 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'yoren': [
    // The manacles lying open on the ground, the chain slack between them:
    // Amory Lorch's men kill him in "What Is Dead May Never Die" (episode
    // 13). In A Clash of Kings Arya last sees him in the fight in Arya IV
    // (chapter 88) and finds his body in Arya V (chapter 93).
    {
      episode: 13,
      chapter: 93,
      value: [
        ...OPEN_CUFF,
        ...moved(OPEN_CUFF, 'translate(160 0) scale(-1 1)'),
        {
          d: `${ellipse(70, 128, 6, 3)} ${ellipse(81, 131, 6, 3)} ${ellipse(92, 128, 6, 3)}`,
          role: 'accent',
        },
        { d: 'M10 140 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'gared': [
    // The same scrap out of the snow, lying on bare ground: the book's Gared
    // is the deserter Eddard beheads in Bran I (chapter 2). The show killed
    // him at his threshold, so the stage is the book's alone.
    {
      episode: 1,
      chapter: 2,
      source: 'chapter',
      value: [
        ...moved(
          SCRAP,
          'translate(80 146) scale(1.2 0.55) translate(-80 -134)',
        ),
        { d: 'M14 150 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'grenn': [
    // The practice sword snapped, the two halves on the ground: he dies
    // holding the gate in "The Watchers on the Wall" (episode 39). The book
    // keeps him alive, so the stage is the show's alone, ordered by the
    // attack on Castle Black (chapter 199).
    {
      episode: 39,
      chapter: 199,
      source: 'episode',
      value: [
        ...moved(SNAPPED_HILT, 'translate(-22 60) rotate(-84 80 62)'),
        ...moved(SNAPPED_BLADE, 'translate(26 14) rotate(-100 80 126)'),
        shadow(80, 154, 62),
      ],
    },
  ],
  'pypar': [
    // One of the two practice swords left on the ground: he dies in "The
    // Watchers on the Wall" (episode 39). The book keeps him alive, so the
    // stage is the show's alone, ordered by the attack on Castle Black
    // (chapter 199).
    {
      episode: 39,
      chapter: 199,
      source: 'episode',
      value: [
        ...moved(
          PRACTICE_SWORD,
          'translate(80 132) rotate(72) scale(0.85 0.85) translate(-80 -88)',
        ),
        shadow(80, 154, 58),
      ],
    },
  ],
  'rast': [
    // A sworn brother's steel sword fallen in the snow, the practice sword
    // gone: Ghost kills him in "First of His Name" (episode 35), and a Thenn
    // in the attack on Castle Black in Jon VII (chapter 199).
    {
      episode: 35,
      chapter: 199,
      value: [
        ...moved(STEEL_SWORD, 'translate(0 44) rotate(-78 80 90)'),
        { d: 'M14 146 Q40 136 66 142 Q96 148 120 138 Q136 134 148 142' },
        {
          d: dots([
            [30, 112],
            [124, 104],
            [46, 92],
          ]),
          role: 'soft',
        },
      ],
    },
  ],
  'dareon': [
    // The same cloak tipped over and come open on the cobbles of Braavos:
    // Arya kills the deserter there in Cat of the Canals (chapter 260). The
    // show keeps him alive, so the stage is the book's alone, ordered by
    // Arya's arrival in Braavos (episode 41).
    {
      episode: 41,
      chapter: 260,
      source: 'chapter',
      value: [
        ...moved(FOLDED_CLOAK, 'translate(4 6) rotate(-10 80 140)'),
        { d: 'M128 136 Q140 140 142 150 Q130 154 118 150' },
        {
          d: 'M12 156 h22 M40 156 h24 M70 156 h26 M102 156 h24 M132 156 h18 M24 164 h24 M54 164 h26 M86 164 h24 M116 164 h24',
          role: 'ambient',
        },
      ],
    },
  ],
  'othell-yarwyck': [
    // The same hammer, with a dagger struck into the block: he is the second
    // to stab Jon in the mutiny in "Mother's Mercy" (episode 50). The book
    // leaves open whether he strikes, so the stage is the show's alone,
    // ordered by Jon XIII (chapter 341). The accent moves to the dagger.
    {
      episode: 50,
      chapter: 341,
      source: 'episode',
      value: [
        ...ICE_BLOCK,
        ...HAMMER_HANDLE,
        { d: HAMMER_HEAD },
        ...MUTINY_DAGGER,
        shadow(84, 154, 62),
      ],
    },
    // The hammer fallen on the ground by the block, the dagger gone: Jon has
    // him hanged in "Oathbreaker" (episode 53). The book keeps him alive, so
    // the stage is the show's alone, at the books' last chapter (344).
    {
      episode: 53,
      chapter: 344,
      source: 'episode',
      value: [
        ...ICE_BLOCK,
        ...moved(
          [...HAMMER_HANDLE, { d: HAMMER_HEAD, role: 'accent' }],
          'translate(84 10) rotate(-106 44 150)',
        ),
        shadow(84, 166, 62),
      ],
    },
  ],
  'bowen-marsh': [
    // The dagger struck into the open ledger: he stabs Jon in the mutiny in
    // "Mother's Mercy" (episode 50) and in Jon XIII (chapter 341). The
    // accent moves to the dagger.
    {
      episode: 50,
      chapter: 341,
      value: [
        ...OPEN_LEDGER,
        { ...QUILL, role: 'soft' },
        ...moved(MUTINY_DAGGER, 'translate(-54 54)'),
        shadow(80, 150, 56),
      ],
    },
    // The ledger closed, the quill laid beside it, the dagger gone: Jon has
    // him hanged in "Oathbreaker" (episode 53). The book keeps him alive, so
    // the stage is the show's alone, at the books' last chapter (344).
    {
      episode: 53,
      chapter: 344,
      source: 'episode',
      value: [
        { d: 'M30 112 L78 98 L130 110 L82 126 Z' },
        { d: 'M30 112 V126 L82 140 L130 124 V110 M82 126 V140' },
        {
          d: 'M33 117 L80 130 M33 122 L80 135 M84 130 L127 115 M84 135 L127 120',
          role: 'soft',
        },
        { d: 'M100 134 l5 -4 M112 130 l5 -4 M122 126 l5 -4', role: 'ambient' },
        {
          ...QUILL,
          role: 'accent',
          transform:
            'translate(20 146) rotate(60) scale(0.7) translate(-96 -128)',
        },
        shadow(80, 150, 58),
      ],
    },
  ],
  'jaremy-rykker': [
    // The sword out of its scabbard, both fallen by the root: the dead men
    // kill him in Jon VIII (chapter 61). The show keeps him alive, so the
    // stage is the book's alone, ordered by episode 8.
    {
      episode: 8,
      chapter: 61,
      source: 'chapter',
      value: [
        ...moved(
          [
            ...RANGER_HILT,
            { d: 'M74 63 V136 L80 146 L86 136 V63' },
            { d: 'M80 64 V140', role: 'soft' },
          ],
          'translate(-2 26) rotate(-84 80 86)',
        ),
        ...moved(RANGER_SCABBARD, 'translate(-2 40) rotate(-98 80 104)'),
        shadow(80, 156, 64),
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
    // (chapter 190) tells when Sam meets him among the dead (A Wiki of Ice
    // and Fire, Chett, #1628). The book's
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
  'thoren-smallwood': [
    // The breastplate fallen on its side, the cloak's trim lying by it: he
    // dies at the Fist of the First Men, where the dead bear takes his head,
    // as Sam remembers it in Samwell I of A Storm of Swords (chapter 162; A
    // Wiki of Ice and Fire, Thoren Smallwood, #1628). The record is the
    // books', and "Valar Dohaeris" (episode 21), where the show reaches the
    // aftermath of the Fist, orders it.
    {
      episode: 21,
      chapter: 162,
      value: [
        { d: 'M14 150 Q20 140 40 142 H124 Q140 140 146 150' },
        {
          d: 'M14 150 q2 -6 8 -6 q2 -5 8 -4 q3 -4 8 -2 q4 -3 8 0 M146 150 q-2 -6 -8 -6 q-2 -5 -8 -4 q-3 -4 -8 -2 q-4 -3 -8 0',
          role: 'accent',
        },
        ...moved(SMALLWOOD_PLATE, 'translate(0 24) rotate(-90 80 100)'),
        { d: 'M8 152 H152', role: 'ambient', dashed: true },
      ],
    },
  ],
  'eddison-tollett': [
    // The spade fallen flat on the ground, the mound gone: he dies at
    // Winterfell in "The Long Night" (episode 70), the show's alone. The
    // books keep him alive, so chapter 344, their last, orders it.
    {
      episode: 70,
      chapter: 344,
      source: 'episode',
      value: [
        ...moved(SPADE, 'rotate(-90 80 80) translate(-60 0)'),
        { d: 'M14 152 H146', role: 'ambient', dashed: true },
      ],
    },
  ],
  'qhorin-halfhand': [
    // The hand laid down on its side in the snow: Jon kills him on his own
    // orders, so that the wildlings will take Jon for a deserter, in
    // "Valar Morghulis" (episode 20) and in Jon VIII (chapter 142).
    {
      episode: 20,
      chapter: 142,
      value: [
        ...moved(
          [...HALFHAND_PALM, { ...STUMPS, role: 'accent' }],
          'rotate(-90 80 100) translate(-10 0)',
        ),
        {
          d: dots([
            [24, 60],
            [60, 40],
            [110, 52],
            [136, 80],
            [40, 96],
          ]),
          role: 'ambient',
        },
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'ebben': [
    // The saddle tipped over on the snow: the wildlings who overtake Qhorin
    // carry his head, in Jon VIII (chapter 142). The record is the books',
    // and episode 20 orders it.
    {
      episode: 20,
      chapter: 142,
      value: [
        ...moved(SADDLE, 'rotate(180 80 110)'),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
  'small-paul': [
    // The axe fallen flat on the snow: the Other kills him as he carries
    // Sam, in Samwell I (chapter 162). The record is the books', and
    // "Valar Dohaeris" (episode 21), where the show reaches the aftermath
    // of the Fist, orders it.
    {
      episode: 21,
      chapter: 162,
      value: [
        ...moved(
          LONG_AXE,
          'translate(80 140) rotate(-80) scale(0.9) translate(-72 -88)',
        ),
        shadow(80, 156, 62),
      ],
    },
  ],
  'ollo-lophand': [
    // The arm laid down on its side: Coldhands' ravens kill the deserters
    // in the haunted forest, and Summer finds the largest of the bodies,
    // its hand missing and the stump bound in leather, in Bran I of A Dance
    // with Dragons (chapter 276). The record is the books', and "First of
    // His Name" (episode 35), where the show ends the mutineers at
    // Craster's Keep, orders it.
    {
      episode: 35,
      chapter: 276,
      value: [
        ...moved(STUMP, 'translate(2 16) rotate(-90 80 100)'),
        { d: 'M10 152 H150', role: 'ambient', dashed: true },
      ],
    },
  ],
}
