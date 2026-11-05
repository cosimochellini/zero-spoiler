import { type Drawings, moved, type Redrawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

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

export const CHIMERA_ANT_PHASE_FIVE_DRAWINGS = {
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
  // The cup of the Water Divination knocked on its side, the open rim to
  // the right, the water run out and the leaf in tint lying in it: Gon
  // shatters Pitou's skull, episode 131 / chapter 307. No body.
  neferpitou: [
    {
      episode: 131,
      chapter: 307,
      value: [
        { d: ellipse(114, 118, 10, 34) },
        { d: 'M44 92 L114 84 M44 144 L114 152' },
        { d: 'M44 92 A7 26 0 0 0 44 144', role: 'soft' },
        { d: 'M53 96 Q48 118 53 142', role: 'soft' },
        { d: ellipse(114, 118, 6, 29), role: 'soft' },
        { d: 'M58 98 l7 -5 M74 96 l7 -5 M90 94 l7 -5', role: 'ambient' },
        { d: 'M122 152 Q138 146 156 152 Q142 161 116 158', role: 'ambient' },
        { d: 'M120 150 Q128 136 154 142 Q146 156 120 150 Z', role: 'accent' },
        { d: 'M122 150 Q138 147 152 143', role: 'soft' },
        { d: 'M4 156 H108', role: 'ambient' },
        shadow(74, 164, 46),
      ],
    },
  ],
  menthuthuyoupi: [
    ...(chimeraAntRoyalsRedrawn['menthuthuyoupi'] ?? []),
    // The same split cocoon fallen from the ceiling and lying on its side,
    // its stalk torn: Shaiapouf finds Menthuthuyoupi dead by the truck,
    // episode 133 / chapter 310. No body.
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
  // name is Kite, episode 136 / chapter 316. No face or tail. The anime's
  // frame is not viewed.
  kite: [
    ...(chimeraAntReturningRedrawn['kite'] ?? []),
    {
      episode: 136,
      chapter: 316,
      // Chapter 316 names the toy sword; the episode 136 synopsis does not.
      source: 'chapter',
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
