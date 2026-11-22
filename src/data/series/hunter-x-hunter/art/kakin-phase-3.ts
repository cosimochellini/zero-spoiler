import type { Drawings, Redrawings, Stroke } from '~/data/art/stroke'
import { circle, dots, shadow } from '~/lib/svg/primitives'

import { TURNED_BODY, TURNED_COLLAR, TURNED_SKULL } from './kakin-phase-2'

/**
 * A grand piano in 3/4 with its keyboard end to the left: the curved side
 * of the black case toward the viewer, hatched, its far straight side, the
 * three legs and the pedals between them.
 */
const PIANO: Stroke[] = [
  {
    d: 'M32 104 H92 C108 104 116 98 124 90 C134 80 150 82 150 98 V110 C150 96 136 94 126 102 C118 110 108 116 92 116 H32 Z',
  },
  { d: 'M32 104 L44 92 L130 80', role: 'soft' },
  { d: 'M38 116 V156 M96 116 V152 M144 106 V148' },
  { d: 'M64 116 V144 M58 144 H70', role: 'soft' },
  {
    d: 'M44 114 l6 -8 M60 114 l6 -8 M76 114 l6 -8 M100 114 l6 -7 M116 108 l6 -7',
    role: 'ambient',
  },
  shadow(84, 166, 66),
]

/** The keyboard in 3/4 at the piano's left end, under its fallboard. */
const PIANO_KEYBED = 'M8 114 L32 106 V116 L8 124 Z'

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

  // Ken'i Wang's striped single-breasted suit in 3/4 over a white shirt, the
  // stripes following the turn, and the dark tie with polka dots, the dots
  // in tint: his outfit when he first appears, chapter 378. From 379, where
  // he is named, he wears a dark suit and a matching tie. His rectangular
  // glasses are not drawn: there is no head to wear them, and rectangular
  // glasses are already Hyuga's object. No face.
  'ken-i-wang': [
    { d: 'M24 70 L62 50 L90 106 L104 50 L128 60 L134 170 H22 Z' },
    {
      d: 'M62 50 L52 68 L64 76 L56 90 L90 132 M104 50 L110 64 L102 72 L108 84 L90 132',
      role: 'soft',
    },
    { d: 'M62 50 L70 40 L84 56 L96 40 L104 50' },
    { d: 'M80 58 H90 L89 66 H81 Z M81 66 L78 106 L86 114 L92 106 L89 66' },
    {
      d: `${circle(85, 76, 2)} ${circle(82, 88, 2)} ${circle(88, 96, 2)} ${circle(84, 106, 2)}`,
      role: 'accent',
    },
    {
      d: 'M38 74 C36 106 36 140 36 166 M54 96 C52 124 52 148 52 168 M108 92 C110 118 112 144 114 168 M120 64 C122 98 124 136 126 168',
      role: 'soft',
    },
    { d: 'M90 146 h0.01 M90 160 h0.01', role: 'soft' },
    { d: 'M126 88 l6 -4 M128 110 l6 -4 M130 132 l5 -3', role: 'ambient' },
    shadow(78, 182, 56),
  ],

  // Cashew's hair from behind and a little to her left: fair on top, in
  // tint, dark on the sides and at the back, hatched, and the long fringe
  // falling down her left side toward the viewer, as she poses as the only
  // witness, chapter 379.
  'cashew': [
    { d: TURNED_SKULL },
    { d: 'M56 70 C60 50 100 48 106 68 C94 78 66 78 56 70 Z', role: 'accent' },
    { d: 'M56 70 C44 82 40 102 44 120 L52 110 C50 96 52 84 58 76' },
    {
      d: 'M60 88 l8 -6 M58 100 l12 -9 M68 104 l14 -10 M84 104 l14 -10 M94 92 l10 -7 M102 82 l6 -4',
      role: 'ambient',
    },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // A grand piano in 3/4, the lid propped open over it, and the keyboard in
  // tint at its end: Keeney plays the piano solo at the banquet just before
  // he takes the twins to the lifeboat, chapter 383. Its shape is a frame
  // check.
  'keeney': [
    ...PIANO,
    { d: 'M44 92 L60 36 C90 30 120 34 136 46 L130 80' },
    { d: 'M112 100 L118 42', role: 'soft' },
    { d: PIANO_KEYBED, role: 'accent' },
    { d: 'M14 112 V122 M20 110 V120 M26 108 V118', role: 'soft' },
    { d: 'M8 114 V106 L32 98 V106', role: 'soft' },
  ],
} satisfies Drawings

/** The Kakin records of phase 3 whose drawing changes after they open. */
export const kakinPhaseThreeRedrawn: Redrawings = {
  keeney: [
    // The same piano shut, the lid down and the fallboard closed over the
    // keys in tint: after the twins get away he shoots himself, chapter 383.
    {
      episode: 148,
      chapter: 383,
      source: 'chapter',
      value: [
        ...PIANO,
        { d: 'M44 92 L130 80' },
        { d: `${PIANO_KEYBED} M8 114 L32 106`, role: 'accent' },
      ],
    },
  ],
}
