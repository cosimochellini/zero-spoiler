import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

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
 * B: nothing of his own shows in either medium.
 */
const CROSSED_SWORDS: Stroke[] = [
  ...moved(
    PRACTICE_SWORD,
    'translate(80 116) rotate(-40) scale(0.85) translate(-80 -100)',
  ),
  ...moved(
    PRACTICE_SWORD,
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
 * the stub of blade above it, the guard, the grip and the pommel.
 */
const MUTINY_DAGGER: Stroke[] = [
  { d: 'M115 59 V46 M122 59 V46 M109 46 H128 V42 H109 Z', role: 'accent' },
  { d: `M116 42 V32 H121 V42 ${circle(118.5, 29, 3)}`, role: 'accent' },
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
const DRAPE_HEM: Stroke = {
  d: 'M16 136 Q24 142 32 138 Q40 143 48 138 Q56 143 64 138 Q72 143 80 138 Q88 143 96 138 Q104 142 112 136',
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
 * Othor: his black cloak hung on a pole with its hood, for the ranger who
 * rides out with Benjen Stark in Jon III (chapter 20); the show brings in
 * his body in "The Pointy End" (episode 8). The book has him alive at his
 * threshold, so the drawing shows no death. The far side is hatched; the
 * accent is the clasp.
 */
const HOODED_CLOAK: Stroke[] = [
  { d: 'M80 40 V30 M80 142 V150 M46 56 H114' },
  { d: 'M64 56 Q62 34 80 28 Q98 34 96 56' },
  {
    d: 'M52 56 Q46 100 40 140 Q60 146 80 142 Q100 146 120 140 Q114 100 108 56',
  },
  { d: 'M66 62 Q62 100 62 142 M94 62 Q98 100 98 142', role: 'soft' },
  {
    d: `${circle(70, 60, 2.5)} ${circle(90, 60, 2.5)} M72.5 61 Q80 64 87.5 61`,
    role: 'accent',
  },
  {
    d: 'M104 80 l6 -3 M106 96 l6 -3 M108 112 l6 -3 M110 128 l6 -3',
    role: 'ambient',
  },
  shadow(80, 154, 46),
]

/** The first season's Night's Watch (#1052), keyed by record id. */
export const WALL_DRAWINGS = {
  'jeor-mormont': BEAR,
  'aemon': RAVEN,
  'samwell-tarly': BOOKS,
  'alliser-thorne': DUMMY,
  'yoren': MANACLES,
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
  'othor': HOODED_CLOAK,
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
    // Arya kills the deserter there in Cat of the Canals (chapter 248). The
    // show keeps him alive, so the stage is the book's alone, ordered by
    // Arya's arrival in Braavos (episode 41).
    {
      episode: 41,
      chapter: 248,
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
  'othor': [
    // The cloak drawn over his body on a sled, an unlit lamp beside it: the
    // rangers bring him back dead in Jon VII (chapter 53). The show has him
    // dead at his threshold, so the stage is the book's alone. The accent
    // is the clasp.
    {
      episode: 8,
      chapter: 53,
      source: 'chapter',
      value: [
        ...SLED,
        DRAPED_CLOAK,
        DRAPE_HEM,
        DRAPE_FOLDS,
        {
          d: `${circle(40, 120, 2.5)} ${circle(52, 120, 2.5)} M42.5 121 H49.5`,
          role: 'accent',
        },
        ...LAMP,
        shadow(80, 156, 68),
      ],
    },
    // The same cloak, its hem burnt ragged, the lamp knocked over: he rises
    // as a wight and Jon burns him in the Lord Commander's rooms in Jon VIII
    // (chapter 61). The show tells it in his threshold episode, so the stage
    // is the book's alone. The accent moves to the burnt hem.
    {
      episode: 8,
      chapter: 61,
      source: 'chapter',
      value: [
        ...SLED,
        DRAPED_CLOAK,
        {
          d: 'M16 136 L20 142 L25 137 L30 144 L36 138 L41 143 L47 137 L54 145 L60 138 L66 143 L72 137 L79 144 L85 138 L91 142 L97 137 L103 143 L108 138 L112 136',
          role: 'accent',
        },
        DRAPE_FOLDS,
        ...moved(LAMP, 'rotate(-35 133 150)'),
        shadow(80, 156, 68),
      ],
    },
  ],
}
