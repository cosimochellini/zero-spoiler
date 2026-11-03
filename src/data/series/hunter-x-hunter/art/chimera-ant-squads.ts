import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Yunju's near foreleg standing, side on and facing left, the horse half of
 * the centaur: the knee, the fetlock bulging behind, the pastern sloping to
 * the hoof, the hoof's wall in tint, and the back of the leg hatched. His
 * death lays this same leg on its side.
 */
const YUNJU_LEG: Stroke[] = [
  { d: 'M70 14 C66 34 66 46 70 58 C68 80 68 100 70 116 C70 122 68 126 64 132' },
  {
    d: 'M96 14 C98 36 94 58 94 80 C94 96 96 108 100 116 C106 124 104 132 96 138',
  },
  { d: 'M64 132 L46 158 H100 L96 138', role: 'accent' },
  { d: 'M64 132 Q80 140 96 138 M52 150 Q74 154 98 152', role: 'soft' },
  { d: 'M70 58 Q82 62 94 58 M100 116 Q108 122 104 128', role: 'soft' },
  {
    d: 'M88 26 l6 -4 M88 42 l6 -4 M88 66 l6 -4 M88 84 l6 -4 M90 102 l6 -4',
    role: 'ambient',
  },
  { d: 'M90 144 l5 -4 M84 146 l5 -4', role: 'ambient' },
]

/**
 * Rammot's forearm raised in a fist, three feathers along its outer edge in
 * tint with their shafts soft, the knuckles in soft lines and the underside
 * hatched. His death lays the same arm on the ground.
 */
const RAMMOT_ARM: Stroke[] = [
  { d: 'M50 170 L66 92 M86 174 L98 98' },
  {
    d: 'M66 92 C58 80 60 60 74 54 C84 50 100 52 106 62 C112 72 108 90 98 98 Z',
  },
  {
    d: 'M74 54 Q78 66 74 76 M88 52 Q92 64 88 76 M100 58 Q104 70 100 80',
    role: 'soft',
  },
  {
    d: 'M66 92 Q60 82 70 76 Q82 74 86 84 M64 102 Q82 108 97 104',
    role: 'soft',
  },
  {
    d: 'M63 106 C50 108 36 118 28 134 C44 130 56 122 61 116 M59 126 C46 128 32 138 24 154 C40 150 52 142 57 136 M55 146 C42 148 30 158 24 172 C38 168 48 162 53 156',
    role: 'accent',
  },
  { d: 'M61 111 L34 128 M57 131 L30 148 M53 151 L30 166', role: 'soft' },
  { d: 'M90 118 l6 -4 M88 134 l6 -4 M86 150 l6 -4', role: 'ambient' },
]

/** The colony’s squad leaders and officers (#1021). */
export const CHIMERA_ANT_SQUADS_DRAWINGS = {
  // Zazan's scorpion tail arched over from the small of her back, its
  // segments ringed in soft lines, the underside hatched, and the bulb and
  // barbed stinger at its tip in tint: the Squadron Leader whose squad
  // Cheetu reports on, chapter 189, and who stings Pokkle, episode 80. No
  // heart is drawn on the bulb.
  zazan: [
    { d: 'M26 146 C20 102 34 52 74 38 C100 30 122 38 128 56' },
    { d: 'M56 148 C50 110 58 72 80 62 C96 56 108 60 114 68' },
    {
      d: 'M25 124 Q40 118 53 126 M28 100 Q42 94 54 102 M38 78 Q50 74 60 84 M54 54 Q64 56 70 68 M78 38 Q82 50 84 62 M102 34 Q102 46 100 58',
      role: 'soft',
    },
    {
      d: 'M128 56 C142 64 142 88 128 96 C118 100 108 90 114 68 M121 98 C116 110 104 114 92 112 C102 108 108 102 112 94',
      role: 'accent',
    },
    { d: 'M122 66 Q130 72 130 84', role: 'soft' },
    {
      d: 'M58 138 l6 -3 M58 122 l6 -3 M60 106 l6 -3 M64 90 l6 -3 M72 76 l6 -4',
      role: 'ambient',
    },
    { d: 'M116 86 l5 -4 M120 92 l5 -4', role: 'ambient' },
    { d: 'M10 156 Q40 140 74 154', role: 'soft' },
    { d: 'M4 160 H156', role: 'ambient', dashed: true },
    shadow(80, 170, 50),
  ],
  // Pike as a spider seen from behind, hanging from his web on the strand
  // he shoots, the strand in tint, the four legs a side bent at the joints
  // and the far side of the body hatched: the officer Zazan scolds by name
  // after he kills a man caught in his web, chapter 190. No face.
  pike: [
    { d: 'M80 14 V58', role: 'accent' },
    { d: 'M80 14 L44 2 M80 14 L116 2 M80 14 V2', role: 'ambient' },
    { d: 'M58 8 Q68 4 80 6 Q92 4 102 8', role: 'ambient' },
    { d: ellipse(80, 84, 22, 26) },
    { d: ellipse(80, 122, 14, 12) },
    {
      d: 'M68 116 L40 98 L26 116 M67 122 L36 120 L22 142 M69 128 L44 140 L36 164 M72 132 L58 154 L56 176',
    },
    {
      d: 'M68 116 L40 98 L26 116 M67 122 L36 120 L22 142 M69 128 L44 140 L36 164 M72 132 L58 154 L56 176',
      transform: 'matrix(-1 0 0 1 160 0)',
    },
    { d: 'M64 72 Q80 80 96 72 M62 90 Q80 98 98 90', role: 'soft' },
    { d: 'M74 60 Q80 64 86 60', role: 'soft' },
    { d: 'M90 66 l6 -4 M92 82 l7 -4 M90 98 l6 -4', role: 'ambient' },
    shadow(80, 186, 34),
  ],
  // Yunju's foreleg, the horse half of the centaur Squadron Leader who
  // hunts humans to keep as pets, episode 79, and whose body Kite stands
  // over, chapter 193.
  yunju: [
    ...YUNJU_LEG,
    { d: 'M4 158 H156', role: 'ambient', dashed: true },
    shadow(74, 168, 40),
  ],
  // Baro rolled into his armadillo ball for the charge he aims at Gon, the
  // bands of the shell in soft lines with their plates, the widest band in
  // tint, the tail he steers with curled out behind and his head plate
  // tucked in: chapter 195, where he is drawn by lot to fight Gon and dies
  // in the fight, so this drawing stays.
  baro: [
    { d: ellipse(84, 104, 44, 44) },
    {
      d: 'M58 68 Q84 86 110 68 M44 88 Q84 112 124 88 M44 124 Q84 146 124 124',
      role: 'soft',
    },
    { d: 'M42 104 Q84 130 126 104', role: 'accent' },
    {
      d: 'M70 78 l-2 6 M84 80 v8 M98 78 l2 6 M60 98 l-2 8 M84 104 v10 M108 98 l2 8 M64 124 l-1 6 M104 124 l1 6',
      role: 'soft',
    },
    { d: 'M40 110 C28 114 22 128 30 138 C34 142 40 140 40 134', role: 'soft' },
    { d: 'M96 136 C100 146 112 146 116 136', role: 'soft' },
    { d: 'M114 120 l6 -6 M118 108 l5 -5 M120 94 l4 -4', role: 'ambient' },
    { d: 'M142 82 h10 M146 98 h10 M144 114 h10', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient', dashed: true },
    shadow(84, 158, 40),
  ],
  // Rammot's feathered forearm in a fist, the arm that fights Gon and
  // Killua over his kill, the officer named at the nest, chapter 192, and
  // told by his Squadron Leader not to eat a child, episode 79.
  rammot: [...RAMMOT_ARM, shadow(70, 186, 32)],
  // Baital's tail lifting out of a bank of smoke, the tuft of hair at its
  // tip in tint and the smoke in drifting open lines: the Squadron Leader
  // who loses touch with the other squads in Morel's smoke, chapter 205.
  baital: [
    { d: 'M10 132 C40 120 60 92 86 76 C104 66 120 66 128 76' },
    { d: 'M14 142 C44 130 64 104 88 88 C104 78 116 78 122 84' },
    {
      d: 'M128 76 C138 82 146 96 148 112 M126 80 C132 92 134 106 132 120 M122 84 C124 96 122 108 116 118 M128 76 C140 74 150 82 154 92',
      role: 'accent',
    },
    { d: 'M122 84 Q126 80 128 76', role: 'soft' },
    { d: 'M60 104 l5 -5 M70 96 l5 -5 M80 90 l5 -5', role: 'ambient' },
    {
      d: 'M6 158 C2 144 14 134 26 140 C30 128 48 126 54 138 C60 128 78 130 80 142 C84 134 98 134 102 144 C108 136 124 138 126 150 C132 144 148 146 150 158',
      role: 'ambient',
    },
    {
      d: 'M30 116 C22 112 22 100 32 98 C40 96 44 106 38 110 M100 118 C92 114 94 102 104 102 C112 102 114 112 108 114 M140 132 C132 128 134 118 142 118 C150 118 150 128 144 128',
      role: 'ambient',
    },
    { d: 'M40 158 Q46 150 56 152 M92 158 Q100 150 110 154', role: 'ambient' },
    shadow(80, 176, 56),
  ],
  // A lion's forepaw planted on the ground, the hooked claws out in tint,
  // the stripes of his hide across the leg in soft lines and the far side
  // hatched: the lion-like Squadron Leader who tells another that his squad
  // kills humans for fun, chapter 192. No face.
  hagya: [
    { d: 'M54 108 L58 20 M108 106 L104 20' },
    { d: 'M40 148 C34 126 42 110 56 106 L108 106 C122 110 128 128 120 148' },
    {
      d: 'M40 148 Q49 158 59 148 Q69 158 79 148 Q89 158 99 148 Q110 158 120 148',
    },
    {
      d: 'M59 148 Q58 136 62 126 M79 148 V124 M99 148 Q100 136 96 126',
      role: 'soft',
    },
    {
      d: 'M48 154 C48 164 42 170 32 170 M68 154 C68 164 62 170 52 170 M88 154 C88 164 82 170 72 170 M108 154 C108 164 102 170 92 170',
      role: 'accent',
    },
    {
      d: 'M57 40 Q70 46 82 40 M57 62 Q72 68 90 60 M56 84 Q68 90 80 86',
      role: 'soft',
    },
    {
      d: 'M96 34 l7 -4 M96 52 l7 -4 M96 72 l7 -4 M98 92 l7 -4',
      role: 'ambient',
    },
    { d: 'M112 124 l6 -4 M114 136 l6 -4', role: 'ambient' },
    { d: 'M4 172 H156', role: 'ambient', dashed: true },
    shadow(80, 182, 52),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntSquadsRedrawn: Redrawings = {
  pike: [
    {
      episode: 97,
      chapter: 228,
      source: 'chapter',
      value: [
        ...moved(
          CHIMERA_ANT_SQUADS_DRAWINGS.pike,
          'translate(80 125) rotate(-85) scale(0.68) translate(-80 -95)',
        ),
        shadow(80, 173, 52),
      ],
    },
  ],
  zazan: [
    {
      episode: 97,
      chapter: 229,
      value: [
        ...moved(
          CHIMERA_ANT_SQUADS_DRAWINGS.zazan.slice(0, 7),
          'translate(83 111) rotate(-66) scale(0.75) translate(-80 -90)',
        ),
        {
          d: 'M36 128 Q26 106 44 90 Q35 106 51 119 M103 126 Q116 112 110 95 Q131 112 119 132',
          role: 'accent',
        },
        shadow(82, 157, 58),
      ],
    },
  ],
  yunju: [
    // The same foreleg laid on its side on the ground, hoof to the right:
    // Kite kills him in the drug factory, episode 82. Chapter 193 shows the
    // body, so chapter readers meet this stage at his gate.
    {
      episode: 82,
      chapter: 193,
      value: [
        ...moved(
          YUNJU_LEG,
          'translate(80 136) rotate(-84) scale(0.62) translate(-80 -90)',
        ),
        { d: 'M4 162 H156', role: 'ambient', dashed: true },
        shadow(80, 172, 60),
      ],
    },
  ],
  rammot: [
    // The same arm laid flat on the ground, one feather fallen beside it:
    // Killua kills him in one move when he comes back for revenge, episode
    // 94 / chapter 219.
    {
      episode: 94,
      chapter: 219,
      value: [
        ...moved(
          RAMMOT_ARM,
          'translate(80 132) rotate(78) scale(0.66) translate(-70 -110)',
        ),
        {
          d: 'M116 154 C124 146 134 144 144 146 C136 152 126 156 116 154 Z M116 154 L144 146',
          role: 'soft',
        },
        { d: 'M4 158 H156', role: 'ambient', dashed: true },
        shadow(80, 168, 60),
      ],
    },
  ],
}
