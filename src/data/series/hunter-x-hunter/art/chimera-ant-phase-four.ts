import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { shadow } from '~/lib/svg/primitives'

import { CHIMERA_ANT_ROYALS_DRAWINGS } from './chimera-ant-royals'

/**
 * One of Taragetter's dark forewings, the right one, from behind: its
 * outline, the long veins and the cross veins between them, and the dark
 * hatched toward the tip. The left wing is the same one mirrored.
 */
const TARAGETTER_WING_EDGE =
  'M84 46 C96 50 112 72 124 106 C136 140 136 166 126 174 C114 180 100 160 94 130 C88 100 84 72 84 46 Z'
const TARAGETTER_VEINS: Stroke[] = [
  {
    d: 'M87 54 C102 80 118 116 127 166 M90 72 C96 102 100 136 110 170',
    role: 'soft',
  },
  {
    d: 'M97 82 L107 78 M102 108 L117 104 M106 136 L125 134 M112 160 L129 154',
    role: 'soft',
  },
  {
    d: 'M98 150 l6 -5 M100 162 l8 -6 M110 170 l8 -6 M116 120 l6 -4 M120 138 l6 -4',
    role: 'ambient',
  },
]

export const CHIMERA_ANT_PHASE_FOUR_DRAWINGS = {
  // Taragetter's two dark forewings folded down his back from the shoulders,
  // the right one's edge in tint, veined and hatched: the soldier Knov kills
  // in chapter 251, named in chapter 261 when Welfin finds his blood. No
  // head, face or blood.
  taragetter: [
    { d: TARAGETTER_WING_EDGE, role: 'accent' },
    ...TARAGETTER_VEINS,
    ...moved(
      [{ d: TARAGETTER_WING_EDGE }, ...TARAGETTER_VEINS],
      'matrix(-1 0 0 1 160 0)',
    ),
    { d: 'M76 46 Q80 38 84 46', role: 'soft' },
    shadow(80, 188, 44),
  ],
} satisfies Drawings

export const chimeraAntPhaseFourRedrawn: Redrawings = {
  // The same shorts thrown down among the rubble, one leg folded under: Silva
  // crushes Cheetu with one blow from above, episode 117 / chapter 278. No
  // body is drawn.
  cheetu: [
    {
      episode: 117,
      chapter: 278,
      value: [
        ...moved(
          CHIMERA_ANT_ROYALS_DRAWINGS.cheetu.slice(0, -1),
          'translate(80 121) rotate(-76) scale(0.67) translate(-80 -100)',
        ),
        {
          d: 'M12 145 L26 138 L34 145 M115 147 L126 137 L142 141 L150 149',
          role: 'soft',
        },
        {
          d: 'M9 152 H47 M101 153 H153 M53 155 L60 151 L67 154',
          role: 'ambient',
        },
      ],
    },
  ],
  // His own object at rest, not a scene from the show: one single-tooth
  // geta, his object since the Hunter Exam, upturned on broken ground, its
  // tooth in the air and the thong loose in tint. The Poor Man's Rose goes
  // off when his heart stops, episode 126 / chapter 298. No cloud, no bomb
  // and no body.
  netero: [
    {
      episode: 126,
      chapter: 298,
      value: [
        { d: 'M26 124 L108 96 L136 116 L54 146 Z' },
        { d: 'M26 124 V130 L54 152 L136 122 V116 M54 146 V152' },
        { d: 'M67 110 V84 L95 105 V131' },
        { d: 'M67 84 L75 81 L103 102 L95 105 M103 102 V125', role: 'soft' },
        { d: 'M71 96 l8 6 M71 106 l14 10 M80 104 l11 8', role: 'ambient' },
        {
          d: 'M58 150 Q64 168 82 166 L88 160 M90 166 Q106 168 112 158 Q104 150 94 142',
          role: 'accent',
        },
        { d: 'M34 132 l6 4 M118 124 l7 -3', role: 'ambient' },
        { d: 'M4 164 Q20 150 30 162 M130 162 Q140 150 156 164', role: 'soft' },
        { d: 'M4 176 H52 M108 176 H156', role: 'ambient' },
        shadow(82, 172, 52),
      ],
    },
  ],
}
