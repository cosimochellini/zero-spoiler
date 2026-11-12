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

/** The first season's Night's Watch (#1052), keyed by record id. */
export const WALL_DRAWINGS = {
  'jeor-mormont': BEAR,
  'aemon': RAVEN,
  'samwell-tarly': BOOKS,
  'alliser-thorne': DUMMY,
  'yoren': MANACLES,
} satisfies Drawings

/** The Night's Watch drawn again later in the story. */
export const wallRedrawn: Redrawings = {
  aemon: [
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
}
