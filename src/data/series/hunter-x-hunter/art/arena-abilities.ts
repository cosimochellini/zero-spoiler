import { type Drawings, moved, softened } from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

import {
  AURA_JET,
  GIDO_SPINNING,
  GIDO_TOP,
  RIEHLVELT_CHAIR,
  SPIN_ARCS,
  TIGER_BITE_HANDS,
} from './heavens-arena'

export const ARENA_ABILITY_DRAWINGS: Drawings = {
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
  'nen-stitches': [
    {
      d: 'M31 125 Q63 99 80 99 L121 99 M30 151 Q64 126 81 125 L124 124 M75 99 L81 125',
    },
    { d: 'M74 102 L84 107 L75 111 L86 116 L78 121', role: 'soft' },
    { d: 'M114 99 Q126 106 129 121', role: 'ambient' },
    {
      d: 'M81 106 Q104 58 122 68 Q140 82 116 97 M85 107 Q107 84 124 90',
      role: 'accent',
    },
  ],
  'bungee-gum': [
    { d: 'M30 114 L53 83 L75 111 L52 142Z M93 93 L116 64 L137 92 L115 120Z' },
    { d: 'M44 113 L53 103 L59 114 L50 124Z', role: 'soft' },
    { d: 'M107 92 L116 82 L122 93 L113 103Z', role: 'ambient' },
    { d: 'M24 132 L35 117 M79 121 L89 107 M131 65 L140 54', role: 'accent' },
  ],
  'texture-surprise': [
    {
      d: 'M27 136 Q51 115 79 116 L123 111 Q137 112 139 125 Q140 138 123 145 L83 151 Q59 150 38 164',
    },
    {
      d: 'M51 117 Q62 95 60 75 Q86 88 111 62 Q105 94 132 105 Q92 106 73 126Z',
      role: 'accent',
    },
    { d: 'M73 115 Q82 96 103 91 M63 103 Q76 98 84 89', role: 'soft' },
    { d: 'M110 62 Q122 52 130 53 M115 72 Q129 64 137 65', role: 'ambient' },
  ],
}
