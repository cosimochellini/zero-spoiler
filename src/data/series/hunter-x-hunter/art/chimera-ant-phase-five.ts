import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, shadow } from '~/lib/svg/primitives'

import { chimeraAntReturningRedrawn } from './chimera-ant-returning'
import {
  CHIMERA_ANT_ROYALS_DRAWINGS,
  chimeraAntRoyalsRedrawn,
  YOUPI_ROCK,
  YOUPI_SHELL,
  YOUPI_SPLIT,
} from './chimera-ant-royals'

/** How a drawing is laid on the floor, flattened as a cloth lies. */
const LAID = 'translate(80 132) rotate(-6) scale(0.95 0.42) translate(-80 -110)'

/**
 * Neferpitou's head from behind: the mop of wavy white hair, the two cat
 * ears rising from it in tint with their fur soft, the far side of the
 * hair hatched, and the collar of the blue overcoat below. No face. Every
 * stage keeps it.
 */
const PITOU_HEAD: Stroke[] = [
  {
    d: 'M80 44 C98 44 112 52 118 64 Q128 72 124 84 Q132 94 126 106 Q130 118 120 122 Q112 130 104 122 Q96 132 88 124 Q80 132 72 124 Q64 132 56 122 Q48 130 40 122 Q30 118 34 106 Q28 94 36 84 Q32 72 42 64 C48 52 62 44 80 44 Z',
  },
  {
    d: 'M47 60 C43 46 41 32 43 18 C53 24 63 34 69 47 M91 47 C97 34 107 24 117 18 C119 32 117 46 113 60',
    role: 'accent',
  },
  {
    d: 'M49 50 Q48 38 49 28 Q57 34 62 42 M98 42 Q103 34 111 28 Q112 38 111 50',
    role: 'soft',
  },
  {
    d: 'M78 54 Q64 70 66 92 Q68 106 60 116 M86 56 Q98 74 96 94 Q94 106 100 114 M56 66 Q46 82 48 100',
    role: 'soft',
  },
  {
    d: 'M112 78 l7 -5 M116 92 l7 -5 M116 106 l6 -4 M110 118 l6 -4',
    role: 'ambient',
  },
  { d: 'M70 127 V140 M90 127 V140' },
  {
    d: 'M70 140 Q80 145 90 140 M70 140 C54 142 38 150 28 168 M90 140 C106 142 122 150 132 168',
  },
  { d: 'M96 146 l6 -4 M106 150 l6 -4 M116 156 l6 -4', role: 'ambient' },
]

/** Neferpitou's head made smaller and set low on the right, for the powers. */
const PITOU_SMALL = 'translate(96 120) scale(0.7) translate(-80 -104)'

/**
 * Doctor Blythe, the giant doll Neferpitou conjures to operate, sitting
 * low on the left with no face, and the cord that ties it to Neferpitou's
 * tail running to it from below.
 */
const DOCTOR_BLYTHE: Stroke[] = [
  { d: circle(30, 112, 19) },
  { d: 'M20 129 C14 140 14 152 18 160 H42 C46 152 46 140 40 129' },
  {
    d: 'M18 138 Q8 144 8 154 M42 138 Q52 144 52 152 M22 160 L18 172 M38 160 L42 172',
    role: 'soft',
  },
  { d: 'M96 172 C90 188 62 190 44 152', role: 'soft' },
]

/**
 * The clownesque puppeteer's strings hanging beside the ears from a
 * control above, in open lines: Neferpitou's puppets.
 */
const PITOU_PUPPETEER: Stroke = {
  d: 'M118 14 H152 M135 6 V24 M120 14 L118 56 M150 14 L148 62 M135 24 L134 52',
  role: 'ambient',
}

/**
 * Terpsichora: the fingertips of the monstrous ballerina above, and the
 * strings that join them to Neferpitou's body.
 */
const TERPSICHORA: Stroke[] = [
  {
    d: 'M22 2 C20 12 16 18 10 26 C8 30 12 32 15 29 L22 22 C20 30 18 38 20 44 C22 48 26 46 26 42 L29 30 C30 38 32 44 36 48 C39 50 42 47 40 43 L36 30 C40 36 44 40 49 41 C53 42 53 38 50 36 L40 24 C44 18 48 10 48 2',
  },
  {
    d: 'M12 30 L86 82 M23 46 L90 80 M38 49 L96 78 M51 40 L102 79',
    role: 'ambient',
  },
]

export const CHIMERA_ANT_PHASE_FIVE_DRAWINGS = {
  // Neferpitou's head from behind, the cat ears in tint over the mop of
  // wavy white hair: the newborn Royal Guard the reader knows by the ears
  // from the first scene, episode 84 / chapter 198. No face, which would
  // show the ruby-red eyes.
  'neferpitou': PITOU_HEAD,
  // The light brown Panama hat from a little above, the crown pinched at
  // the front and dented on top, the band in tint, the brim's far side
  // hatched: the real Ming Jol-ik on his farm, episode 135 / chapter 315.
  // No sunglasses or face.
  'ming-jol-ik': [
    {
      d: 'M18 112 C10 98 40 86 80 86 C120 86 150 98 142 112 C134 128 26 128 18 112 Z',
    },
    {
      d: 'M18 112 C20 120 34 128 54 130 M142 112 C140 120 126 128 106 130',
      role: 'soft',
    },
    { d: 'M48 98 C46 78 52 58 62 50 C70 44 90 44 98 50 C108 58 114 78 112 98' },
    { d: 'M64 50 C72 60 88 60 96 50', role: 'soft' },
    { d: 'M64 62 Q66 76 70 88 M96 62 Q94 76 90 88', role: 'soft' },
    {
      d: 'M48 98 C64 108 96 108 112 98 L113 88 C96 98 64 98 47 88 Z',
      role: 'accent',
    },
    { d: 'M58 92 L56 103 M62 93 L61 104', role: 'soft' },
    { d: 'M102 62 l6 -4 M105 74 l6 -4 M107 86 l5 -3', role: 'ambient' },
    {
      d: 'M40 118 l8 4 M60 122 l8 3 M100 122 l8 -3 M120 118 l8 -4',
      role: 'ambient',
    },
    shadow(80, 140, 56),
  ],
} satisfies Drawings

export const chimeraAntPhaseFiveRedrawn: Redrawings = {
  neferpitou: [
    // The same head, smaller, with Doctor Blythe sitting beside it on the
    // cord from Neferpitou's tail: Neferpitou decides to fix Kite's body
    // and an aura with a face starts to form, episode 86 / chapter 200.
    {
      episode: 86,
      chapter: 200,
      value: [...moved(PITOU_HEAD, PITOU_SMALL), ...DOCTOR_BLYTHE],
    },
    // The same, with the puppeteer's strings beside the ears: Kite, worked
    // as a puppet, attacks Gon, episode 95 / chapter 222.
    {
      episode: 95,
      chapter: 222,
      value: [
        ...moved(PITOU_HEAD, PITOU_SMALL),
        ...DOCTOR_BLYTHE,
        PITOU_PUPPETEER,
      ],
    },
    // The same, with Terpsichora's fingertips and strings above: Neferpitou
    // leaps at Netero on the palace roof, episode 111 / chapter 264.
    {
      episode: 111,
      chapter: 264,
      value: [
        ...moved(PITOU_HEAD, PITOU_SMALL),
        ...DOCTOR_BLYTHE,
        PITOU_PUPPETEER,
        ...TERPSICHORA,
      ],
    },
    // The same head laid on its side on the ground, ears and hair, with no
    // body and no wound: Gon shatters Neferpitou's skull, episode 131 /
    // chapter 307.
    {
      episode: 131,
      chapter: 307,
      value: [
        ...moved(
          PITOU_HEAD.slice(0, 5),
          'translate(80 140) rotate(-76) scale(0.74) translate(-80 -86)',
        ),
        { d: 'M4 166 H156', role: 'ambient' },
        shadow(80, 174, 56),
      ],
    },
  ],
  menthuthuyoupi: [
    ...(chimeraAntRoyalsRedrawn['menthuthuyoupi'] ?? []),
    // His own object at rest, not a scene from the show: the same split
    // cocoon laid on its side below its empty stalk. Shaiapouf finds
    // Menthuthuyoupi dead, episode 133 / chapter 310. No body.
    {
      episode: 133,
      chapter: 310,
      value: [
        YOUPI_ROCK,
        {
          d: 'M76 18 Q75 25 76 32 L78 29 L80 33 L82 28 L84 32 Q85 25 84 18',
          role: 'soft',
        },
        ...moved(
          [...YOUPI_SHELL, ...YOUPI_SPLIT],
          'translate(82 120) rotate(-62) scale(0.74) translate(-80 -102)',
        ),
        { d: 'M30 152 l8 -5 l3 5 Z M126 154 l9 -2 l-3 -5 Z', role: 'soft' },
        { d: 'M4 154 H156', role: 'ambient' },
        shadow(80, 162, 56),
      ],
    },
  ],
  // The same frilly shirt and trousers laid on the ground, empty: Shaiapouf
  // lies dead among the hypnotised crowd, episode 135 / chapter 314. No
  // wings, cape or body.
  shaiapouf: [
    {
      episode: 135,
      chapter: 314,
      value: [
        ...moved(CHIMERA_ANT_ROYALS_DRAWINGS.shaiapouf.slice(0, -1), LAID),
        { d: 'M4 170 H156', role: 'ambient' },
        shadow(80, 178, 64),
      ],
    },
  ],
  // The same tail lowered to the floor, flat, the stinger in tint resting
  // at its end: he dies holding Komugi's hand over the Gungi board, episode
  // 135 / chapter 318. The board is Komugi's drawing, so it is not here.
  meruem: [
    {
      episode: 135,
      chapter: 318,
      value: [
        ...moved(
          CHIMERA_ANT_ROYALS_DRAWINGS.meruem.slice(0, -2),
          'translate(84 132) scale(1 0.5) translate(-60 -110)',
        ),
        { d: 'M4 158 H156', role: 'ambient' },
        shadow(80, 166, 60),
      ],
    },
  ],
  // A child's wooden toy sword, the blunt blade in tint, the block guard and
  // the wrapped grip: the girl Colt looks after plays with it and says her
  // name is Kite, episode 136 / chapter 316. Both media show the return:
  // episode 136 adapts chapter 316's pages 5-18, and the wiki's gallery has
  // her swinging the sword in it. No face or tail. The anime's frame is not
  // viewed.
  kite: [
    ...(chimeraAntReturningRedrawn['kite'] ?? []),
    {
      episode: 136,
      chapter: 316,
      value: [
        {
          d: 'M50 120 L106 50 Q112 44 120 42 Q120 50 114 58 L60 128',
          role: 'accent',
        },
        {
          d: 'M50 120 L46 126 L56 134 L60 128 M106 50 L109 53 L117 61 L114 58',
          role: 'soft',
        },
        { d: 'M58 118 L110 54', role: 'soft' },
        {
          d: 'M36 112 L44 104 L74 128 L66 136 Z M66 136 L67 141 L37 117 L36 112',
        },
        { d: 'M48 136 L30 158 L38 165 L56 143' },
        { d: 'M44 141 l7 6 M40 146 l7 6 M36 151 l7 6', role: 'soft' },
        { d: circle(31, 164, 5) },
        { d: 'M82 96 l7 -6 M94 81 l7 -6 M70 111 l7 -6', role: 'ambient' },
        shadow(76, 184, 54),
      ],
    },
  ],
  // Back from the dead: the cream dress Shidore wears, standing empty over
  // her knee boots, the dress in tint, its folds soft and the far side
  // hatched: her mother knows her as Reina, episode 136 / chapter 315. No
  // face, feelers or bow.
  reina: [
    {
      episode: 136,
      chapter: 315,
      value: [
        {
          d: 'M66 40 Q80 50 94 40 L110 50 L116 70 L104 76 L102 66 L114 140 Q80 152 46 140 L58 66 L56 76 L44 70 L50 50 Z',
          role: 'accent',
        },
        { d: 'M66 40 Q80 58 94 40', role: 'soft' },
        { d: 'M60 64 Q80 72 100 64', role: 'soft' },
        {
          d: 'M68 74 Q64 110 58 144 M80 74 V148 M92 74 Q98 110 104 144',
          role: 'soft',
        },
        {
          d: 'M100 80 l7 -4 M103 96 l7 -4 M106 112 l7 -4 M108 128 l6 -4',
          role: 'ambient',
        },
        {
          d: 'M62 150 V170 Q62 176 56 178 H72 V150 M88 150 V178 H104 Q98 176 98 170 V150',
        },
        { d: 'M62 156 H72 M88 156 H98', role: 'soft' },
        { d: 'M94 160 l4 -3 M94 168 l4 -3', role: 'ambient' },
        shadow(80, 186, 36),
      ],
    },
  ],
}
