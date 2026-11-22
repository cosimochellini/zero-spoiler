import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Yunju's near foreleg standing, side on and facing left: the knee, the
 * fetlock bulging behind, the pastern sloping to the hoof, the hoof's wall
 * in tint, and the back of the leg hatched. His death lays this same leg
 * on its side.
 */
const YUNJU_LEG: Stroke[] = [
  { d: 'M54 76 C58 92 60 104 62 116 C62 124 60 130 58 136' },
  { d: 'M84 86 C82 98 80 108 82 116 C88 124 86 132 80 140' },
  { d: 'M58 136 L46 158 H84 L80 140', role: 'accent' },
  { d: 'M58 136 Q70 142 80 140 M50 151 Q66 154 82 152', role: 'soft' },
  { d: 'M60 100 Q70 104 81 100 M82 116 Q88 120 86 126', role: 'soft' },
  { d: 'M72 106 l6 -4 M72 122 l6 -4', role: 'ambient' },
]

/**
 * The rest of his horse half in 3/4 above and behind the leg: the curve of
 * the chest, the belly running back out of the frame, hatched beneath, and
 * the far foreleg.
 */
const YUNJU_BODY: Stroke[] = [
  { d: 'M156 26 C118 18 80 20 60 34 C46 44 44 62 54 76' },
  { d: 'M156 86 C138 92 110 92 84 86' },
  {
    d: 'M98 90 C98 108 100 124 104 138 L98 152 H120 L116 138 C114 124 112 108 112 91',
    role: 'soft',
  },
  { d: 'M110 86 l6 -5 M126 88 l6 -5 M142 86 l6 -5', role: 'ambient' },
  { d: 'M102 106 l6 -4 M104 122 l6 -4', role: 'ambient' },
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

/**
 * Hagya's foot in its sandal, side on and facing left: the leg with its
 * tiger stripes soft and its far side hatched, the foot and its toes on the
 * sole, the sole's edge, and the strap over the instep in tint. His death
 * lays it on its side.
 */
const HAGYA_FOOT: Stroke[] = [
  { d: 'M60 18 C58 54 58 90 62 118 M100 18 C104 54 104 92 102 124' },
  {
    d: 'M62 118 C50 124 36 132 26 140 Q20 146 26 152 H108 Q114 146 110 134 Q108 128 102 124',
  },
  { d: 'M20 152 Q18 160 26 160 H110 Q118 160 114 152', role: 'soft' },
  {
    d: 'M40 136 C52 132 62 136 68 152 M52 129 C66 128 76 134 80 152',
    role: 'accent',
  },
  { d: 'M30 142 q-3 5 0 10 M37 138 q-3 6 0 13', role: 'soft' },
  {
    d: 'M60 36 Q72 41 84 35 M59 58 Q70 63 82 57 M60 80 Q70 85 84 79 M62 102 Q72 106 82 101',
    role: 'soft',
  },
  {
    d: 'M92 30 l7 -4 M94 50 l7 -4 M95 70 l7 -4 M95 90 l7 -4 M96 110 l6 -4',
    role: 'ambient',
  },
  { d: 'M96 138 l6 -4 M100 146 l6 -4', role: 'ambient' },
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
  // Yunju's horse half in 3/4, the near foreleg with its hoof in tint under
  // the curve of the chest: the centaur Squadron Leader who hunts humans to
  // keep as pets, episode 79, and whose body Kite stands over, chapter 193.
  yunju: [
    ...YUNJU_BODY,
    ...YUNJU_LEG,
    { d: 'M4 158 H156', role: 'ambient', dashed: true },
    shadow(84, 168, 56),
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
  // Baital's tail lifting out of a bank of smoke and turning toward the
  // viewer at its end, so its underside shows, hatched; the plume of hair
  // at its tip one tuft in tint, its strands soft; the smoke in open curls:
  // the Squadron Leader who loses touch with the other squads in Morel's
  // smoke, chapter 205.
  baital: [
    { d: 'M10 136 C38 122 60 92 86 72 C102 60 120 58 130 66' },
    { d: 'M20 148 C48 132 70 104 94 86 C104 79 112 78 118 82' },
    { d: 'M118 82 C120 74 126 68 130 66', role: 'soft' },
    {
      d: 'M118 82 L114 98 L122 93 L121 110 L129 101 L133 118 L137 104 L147 113 L145 98 L157 101 L149 89 L158 80 L146 79 L150 68 L138 72 L130 66',
      role: 'accent',
    },
    { d: 'M124 86 L128 102 M130 80 L140 98 M136 74 L150 86', role: 'soft' },
    {
      d: 'M34 138 l4 -9 M48 126 l5 -9 M62 112 l5 -9 M76 98 l5 -8 M92 86 l4 -7',
      role: 'ambient',
    },
    {
      d: 'M6 160 C2 146 14 136 26 142 C30 130 48 128 54 140 C60 130 78 132 80 144 C84 136 98 136 102 146 C108 138 124 140 126 152 C132 146 148 148 150 160',
      role: 'ambient',
    },
    {
      d: 'M30 112 C22 108 22 96 32 94 C40 92 44 102 38 106 M98 124 C90 120 92 108 102 108 C110 108 112 118 106 120 M142 138 C134 134 136 124 144 124 C152 124 152 134 146 134',
      role: 'ambient',
    },
    { d: 'M40 160 Q46 152 56 154 M92 160 Q100 152 110 156', role: 'ambient' },
    shadow(80, 176, 56),
  ],
  // His foot in its sandal, side on with the toes to the left, the striped
  // leg rising from it, the sandal's strap in tint, the sole's edge showing
  // its thickness and the far side hatched: the lion-like Squadron Leader,
  // one of the few Ants who wear clothes, who tells another that his squad
  // kills humans for fun, chapter 192. No face, and no skull necklace.
  hagya: [
    ...HAGYA_FOOT,
    { d: 'M4 163 H156', role: 'ambient', dashed: true },
    shadow(70, 173, 54),
  ],
} satisfies Drawings

/** Their later stages, each with its true chapter pin. */
export const chimeraAntSquadsRedrawn: Redrawings = {
  hagya: [
    // The same foot in its sandal laid on its side on the stone floor:
    // Morel's smoke fills Leol's lungs and he sinks and drowns, episode 107
    // / chapter 254. The wave he rides is his borrowed Nen, so it is not
    // drawn.
    {
      episode: 107,
      chapter: 254,
      value: [
        ...moved(
          HAGYA_FOOT,
          'translate(80 132) rotate(90) scale(0.72) translate(-80 -96)',
        ),
        { d: 'M4 158 H156', role: 'ambient', dashed: true },
        shadow(80, 168, 62),
      ],
    },
  ],
  pike: [
    // The spider fallen on his back, the abdomen shrivelled and the legs
    // folded up, his strand slack on the ground in tint: Shizuku's vacuum
    // drains his blood through twenty-nine wounds, chapter 228 / episode
    // 97.
    {
      episode: 97,
      chapter: 228,
      source: 'chapter',
      value: [
        {
          d: 'M36 130 C24 128 16 138 14 146 C12 152 6 152 2 148',
          role: 'accent',
        },
        { d: ellipse(66, 128, 30, 18) },
        { d: ellipse(110, 134, 14, 11) },
        { d: 'M42 121 Q66 113 90 121 M40 135 Q66 143 92 135', role: 'soft' },
        {
          d: 'M100 126.3 L80 104 L92 86 M105 123.7 L96 96 L110 82 M112 123.1 L116 96 L130 86 M119 125.6 L136 104 L148 98',
        },
        {
          d: 'M108 123.3 L106 102 L118 92 M116 124 L128 104 L140 96',
          role: 'soft',
        },
        {
          d: 'M52 143 l5 -4 M66 145 l5 -4 M80 143 l5 -4 M114 144 l4 -3',
          role: 'ambient',
        },
        { d: 'M4 150 H156', role: 'ambient', dashed: true },
        shadow(80, 160, 56),
      ],
    },
  ],
  zazan: [
    // The tail she tears off herself, lying alone on the ground, the
    // stinger in tint at its end and the torn root ragged: she rips it out
    // in her rage before she transforms, and Feitan's Rising Sun burns her
    // to death, episode 97 / chapter 229. She dies without it, so the tail
    // is not burnt; the sun is his Nen, so it is not drawn.
    {
      episode: 97,
      chapter: 229,
      value: [
        ...moved(
          [
            ...CHIMERA_ANT_SQUADS_DRAWINGS.zazan.slice(0, 7),
            {
              d: 'M26 146 l4 6 l4 -5 l4 6 l4 -5 l4 6 l4 -5 l4 6 l3 -5',
              role: 'soft',
            },
          ],
          'translate(80 134) scale(1 0.5) rotate(100) scale(0.8) translate(-84 -96)',
        ),
        { d: 'M4 158 H156', role: 'ambient', dashed: true },
        shadow(84, 168, 62),
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
          'translate(80 135) rotate(-84) scale(1.1) translate(-70 -118)',
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
