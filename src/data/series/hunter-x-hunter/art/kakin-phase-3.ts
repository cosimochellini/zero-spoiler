import type { Drawings } from '~/data/art/stroke'
import { circle, dots, shadow } from '~/lib/svg/primitives'

import { FROM_BEHIND, SKULL } from './kakin-phase-2'

export const KAKIN_PHASE_THREE_DRAWINGS = {
  // A telephone on its base, the receiver in tint resting on the cradle and
  // its coiled cord down the side: Vergei is first heard over the phone,
  // calling Kurapika from Marayam's hidden room, chapters 373 and 374. The
  // wiki does not describe the phone, so its shape is a frame check.
  'vergei': [
    { d: 'M34 150 L48 112 H112 L126 150 Z' },
    { d: 'M34 150 V158 H126 V150', role: 'soft' },
    { d: 'M58 112 V102 M102 112 V102' },
    {
      d: 'M36 100 C36 86 50 82 58 90 H102 C110 82 124 86 124 100 L114 106 C110 98 102 98 98 102 H62 C58 98 50 98 46 106 Z',
      role: 'accent',
    },
    {
      d: dots([
        [66, 126],
        [80, 126],
        [94, 126],
        [66, 138],
        [80, 138],
        [94, 138],
      ]),
      role: 'soft',
    },
    {
      d: 'M40 106 q-10 4 -4 8 q8 2 -2 6 q-10 4 -4 8 q8 2 -2 6 q-10 4 -4 8',
      role: 'soft',
    },
    { d: 'M112 122 l6 -4 M116 134 l6 -4 M120 146 l5 -3', role: 'ambient' },
    shadow(80, 168, 54),
  ],

  // Ken'i Wang's striped single-breasted suit over a white shirt, and the
  // dark tie with polka dots, the dots in tint: his outfit when he first
  // appears, chapter 378. From 379, where he is named, he wears a dark suit
  // and a matching tie. His rectangular glasses are not drawn: there is no
  // head to wear them, and rectangular glasses are already Hyuga's object.
  // No face.
  'ken-i-wang': [
    { d: 'M40 62 L66 52 L80 96 L94 52 L120 62 L128 170 H32 Z' },
    {
      d: 'M66 52 L58 66 L68 74 L60 86 L80 124 M94 52 L102 66 L92 74 L100 86 L80 124',
      role: 'soft',
    },
    { d: 'M66 52 L72 44 L80 58 L88 44 L94 52' },
    {
      d: 'M76 60 H84 L83 68 H77 Z M77 68 L73 110 L80 118 L87 110 L83 68',
      role: 'accent',
    },
    {
      d: `${circle(80, 78, 2)} ${circle(77, 90, 2)} ${circle(82, 100, 2)} ${circle(78, 110, 2)}`,
      role: 'accent',
    },
    { d: 'M48 76 V166 M60 100 V166 M100 100 V166 M112 76 V166', role: 'soft' },
    { d: 'M80 136 h0.01 M80 152 h0.01', role: 'soft' },
    { d: 'M118 96 l6 -4 M120 116 l6 -4 M122 136 l6 -4', role: 'ambient' },
    shadow(80, 182, 52),
  ],

  // Cashew's hair from behind: fair on top, in tint, dark on the sides and
  // at the back, hatched, and the long fringe falling down her left side,
  // as she poses as the only witness, chapter 379.
  'cashew': [
    { d: SKULL },
    { d: 'M60 72 C64 54 96 54 100 72 C92 78 68 78 60 72 Z', role: 'accent' },
    { d: 'M60 72 C54 84 52 100 54 112 L60 106', role: 'soft' },
    {
      d: 'M62 86 l8 -6 M60 98 l14 -10 M66 104 l14 -10 M82 104 l12 -9 M90 92 l10 -7',
      role: 'ambient',
    },
    ...FROM_BEHIND,
  ],

  // A piano side on, the lid propped open, the keyboard in tint and the
  // black case hatched: Keeney plays the piano solo at the banquet just
  // before he helps the twins to the lifeboat, chapter 383. It is drawn as a grand by convention, a frame
  // check.
  'keeney': [
    {
      d: 'M24 100 H98 C112 100 118 96 126 88 C136 78 148 82 148 98 V112 H24 Z',
    },
    { d: 'M24 112 V120 H148 V112', role: 'soft' },
    { d: 'M34 100 L118 54 L148 96 M98 100 L106 66' },
    { d: 'M8 100 H24 V112 H8 Z', role: 'accent' },
    { d: 'M12 100 V107 M16 100 V107 M20 100 V107', role: 'soft' },
    { d: 'M32 100 L38 86 H54 L52 100', role: 'soft' },
    { d: 'M30 120 V156 M140 120 V156 M98 120 V152' },
    { d: 'M62 120 V146 M56 146 H68', role: 'soft' },
    {
      d: 'M44 110 l6 -8 M64 110 l6 -8 M84 110 l6 -8 M104 110 l6 -8 M124 110 l6 -8',
      role: 'ambient',
    },
    shadow(84, 166, 66),
  ],
} satisfies Drawings
