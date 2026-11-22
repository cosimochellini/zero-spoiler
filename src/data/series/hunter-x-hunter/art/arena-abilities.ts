import { type Drawings, moved, softened, type Stroke } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

import {
  AURA_JET,
  GIDO_SPINNING,
  GIDO_TOP,
  RIEHLVELT_CHAIR,
  SPIN_ARCS,
  TIGER_BITE_HANDS,
} from './heavens-arena'

/**
 * One of Hisoka's playing cards, centred on the origin: its corners
 * rounded and, along its right and lower edges, its thickness.
 */
const CARD: Stroke[] = [
  {
    d: 'M-12 -20 Q-14 -20 -14 -18 V18 Q-14 20 -12 20 H12 Q14 20 14 18 V-18 Q14 -20 12 -20 Z',
  },
  { d: 'M14 -16 L17 -13 V21 Q17 23 15 23 H-9 L-12 20', role: 'soft' },
]

/** The pip in the middle of a card, a diamond. */
const PIP = 'M0 -7 L5 0 L0 7 L-5 0 Z'

/**
 * Bungee Gum: three bands of Hisoka's aura stretched like pulled gum from
 * the foot of his cards down to the floor, open lines in the muted ink.
 * His chapter 55 stage and the ability's drawing share them.
 */
export const GUM_BANDS: Stroke = {
  d: 'M56.9 151.7 C58.9 163.9 57.5 167.9 57.9 169.9 C57.9 173.9 50.1 180 49.1 184 M64.9 151.7 C62.9 163.9 59.5 167.9 59.1 169.9 C59.1 173.9 62.1 180 63.1 184 M76 141 C78 158.5 79 162.5 79.4 164.5 C79.4 168.5 74 180 73 184 M84 141 C82 158.5 81 162.5 80.6 164.5 C80.6 168.5 86 180 87 184 M95.1 151.7 C97.1 163.9 100.5 167.9 100.9 169.9 C100.9 173.9 97.9 180 96.9 184 M103.1 151.7 C101.1 163.9 102.5 167.9 102.1 169.9 C102.1 173.9 109.9 180 110.9 184',
  role: 'ambient',
}

export const ARENA_ABILITY_DRAWINGS = {
  // Three of Gido's tops loose on the ring's stone tiles at different
  // tilts, the nearest with its band in tint, and the open lines of their
  // bounces between them: Battle Waltz, the tops he sends spinning round Gon
  // in his first 200th-floor match, episode 29 / chapter 49.
  'battle-waltz': [
    ...moved(
      GIDO_TOP,
      'translate(56 126) rotate(-12) scale(0.64) translate(-80 -100)',
    ),
    ...moved(
      softened(GIDO_TOP),
      'translate(122 104) rotate(18) scale(0.46) translate(-80 -100)',
    ),
    ...moved(
      softened(GIDO_TOP),
      'translate(74 46) rotate(-30) scale(0.36) translate(-80 -100)',
    ),
    {
      d: 'M80 158 Q108 154 116 128 M126 88 Q120 52 90 44 M60 50 Q34 70 38 104',
      role: 'ambient',
    },
    {
      d: 'M4 162 L156 142 M4 196 L60 188 M96 184 L156 176 M110 154 L104 196 M30 174 L26 196',
      role: 'ambient',
      dashed: true,
    },
  ],
  // Gido spinning on his peg leg as a top on one of the ring's stone tiles,
  // his conical hat in tint, his robe flared into a bell and the turn as
  // open lines round it: Tornado Top, which throws Gon out of the ring,
  // episode 30 / chapter 50. No face.
  'tornado-top': [
    ...GIDO_SPINNING,
    {
      d: 'M70 70 C70 96 58 116 44 136 M90 70 C92 96 100 118 110 136',
      role: 'soft',
    },
    { d: 'M112 96 l6 -6 M118 108 l7 -6 M124 120 l7 -6', role: 'ambient' },
    SPIN_ARCS,
    { d: 'M34 180 L80 168 L126 180 L80 192 Z', role: 'ambient' },
  ],
  // Three of Gido's tops flying in a line at the reader, the nearest
  // largest with its band in tint, along straight lines from Gido spinning
  // far behind them: Shotgun Blues, the volley he throws while he spins, in
  // his rematch with Gon, episode 34 / chapter 58.
  'shotgun-blues': [
    ...moved(
      softened([...GIDO_SPINNING, SPIN_ARCS]),
      'translate(128 40) scale(0.3) translate(-80 -100)',
    ),
    ...moved(
      softened(GIDO_TOP),
      'translate(110 64) rotate(-50) scale(0.3) translate(-80 -100)',
    ),
    ...moved(
      softened(GIDO_TOP),
      'translate(86 96) rotate(-50) scale(0.44) translate(-80 -100)',
    ),
    ...moved(
      GIDO_TOP,
      'translate(50 140) rotate(-50) scale(0.66) translate(-80 -100)',
    ),
    {
      d: 'M100 44 L80 70 M114 60 L102 76 M90 82 L74 104 M110 82 L96 100 M66 112 L44 140 M84 120 L66 144',
      role: 'ambient',
    },
  ],
  // Kastro's two hands side on, set as a tiger's jaws, each from the open
  // cuff of his white robe, the upper cuff's black edging in tint, with the
  // bite closing between them: Tiger Bite Fist, which takes Hisoka's arm,
  // episode 31 / chapter 53.
  'tiger-bite-fist': TIGER_BITE_HANDS,
  // Riehlvelt's wheelchair from his own drawing, tipped forward as it
  // lunges, the hand rim of its big wheel in tint, with the jet of aura
  // streaming from the back of the chair and speed lines along the floor:
  // Aura Burst, the dash he dodges with, episode 34 / chapter 59.
  'aura-burst': [
    ...moved(
      [...RIEHLVELT_CHAIR, AURA_JET],
      'translate(14 0) rotate(6 142 150)',
    ),
    { d: 'M4 140 H44 M10 148 H60 M2 156 H36', role: 'ambient' },
    shadow(88, 156, 60),
  ],
  // A forearm in 3/4, its far end turned away and hatched, ringed by a seam of
  // cross-stitches, and the needle in tint drawing the thread of aura out
  // of it in an open curve: the woman at Heavens Arena sews Hisoka's arms
  // back on, episode 32 / chapter 55. No hand or face of hers.
  'nen-stitches': [
    { d: 'M0 130 C40 108 80 86 112 72 M0 178 C44 152 92 120 126 102' },
    {
      d: 'M112 72 C126 68 134 90 126 102 M118 76 l6 5 M122 86 l6 4',
      role: 'ambient',
    },
    {
      d: 'M54 98 Q46 122 66 142 M47 100 l12 4 M45 110 l12 2 M46 121 l12 -1 M50 131 l11 -4 M56 139 l10 -6',
      role: 'soft',
    },
    {
      d: 'M106 58 Q110 52 116 50 L152 20 L120 56 Q114 60 106 58 Z M111 55 l5 -3',
      role: 'accent',
    },
    { d: 'M54 98 C56 70 84 50 108 56', role: 'soft' },
  ],
  // Three of Hisoka's playing cards flying up off the ring at angles, each
  // with its thickness, the near card's pip in tint, and under each a band
  // of his aura stretched like pulled gum down to the floor: the cards he
  // throws at Kastro, held to the floor with Bungee Gum, episode 32 /
  // chapter 54. His own Bungee Gum stage, chapter 55, shares the bands.
  'bungee-gum': [
    ...moved(CARD, 'translate(38 102) rotate(-22)'),
    ...moved(CARD, 'translate(122 104) rotate(20)'),
    ...moved(
      [...CARD, { d: PIP, role: 'accent' }],
      'translate(80 80) rotate(6) scale(1.2)',
    ),
    { d: PIP, role: 'soft', transform: 'translate(38 102) rotate(-22)' },
    { d: PIP, role: 'soft', transform: 'translate(122 104) rotate(20)' },
    ...moved([GUM_BANDS], 'translate(80 184) scale(2 1.5) translate(-80 -184)'),
    { d: 'M14 184 H146', role: 'ambient', dashed: true },
  ],
  // A square handkerchief draped over the end of a forearm, its corners
  // hanging in soft folds, its hem in tint and the underside hatched where
  // it turns away: the cloth Hisoka throws over his severed arm in the
  // Kastro match, episode 32 / chapter 54, given the texture of skin with
  // Texture Surprise.
  'texture-surprise': [
    { d: 'M4 150 C30 128 52 110 74 98 M18 178 C44 158 70 140 92 128' },
    {
      d: 'M70 96 Q90 60 122 64 Q144 70 142 96 L150 128 Q132 120 120 138 L110 164 Q98 146 82 148 L62 134 Q76 118 70 96 Z',
      role: 'accent',
    },
    {
      d: 'M96 72 Q104 100 100 140 M120 66 Q126 96 132 122 M84 86 Q88 112 84 140',
      role: 'soft',
    },
    {
      d: 'M114 140 l6 -8 M106 150 l6 -8 M138 118 l6 -6 M66 128 l6 -6',
      role: 'ambient',
    },
    shadow(84, 188, 50),
  ],
} satisfies Drawings
