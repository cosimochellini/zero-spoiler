import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { dot, ellipse, shadow } from '~/lib/svg/primitives'

import {
  CHEETU_SHORTS,
  CHIMERA_ANT_ROYALS_DRAWINGS,
} from './chimera-ant-royals'

/**
 * One of Taragetter's dark forewings, the right one, from behind: its
 * leading edge, the trailing edge, the long veins and the cross veins
 * between them, and the dark hatched toward the tip. The near wing is the
 * same one mirrored; the far one is narrowed as it turns away.
 */
const TARAGETTER_LEADING_EDGE =
  'M84 46 C96 50 112 72 124 106 C136 140 136 166 126 174'
const TARAGETTER_TRAILING_EDGE =
  'M126 174 C114 180 100 160 94 130 C88 100 84 72 84 46'
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
const NEAR_WING = 'matrix(-1.1 0 0 1 182.4 0)'

/**
 * One of Netero's single-tooth geta, without its shadow: his first drawing
 * (`'netero'` in `./index`) and the stage of his bodhisattva share it.
 */
export const NETERO_GETA: Stroke[] = [
  { d: 'M28 100 L110 70 L136 92 L54 122 Z' },
  { d: 'M28 100 V110 L54 132 L136 102 V92 M54 122 V132' },
  { d: 'M62.4 128.9 V137.4 L88.4 159.4 V119.4' },
  { d: 'M88.4 159.4 L101.6 154.6 V114.6', role: 'soft' },
  { d: 'M66 136 l14 -10 M68 145 l18 -13 M76 150 l11 -8', role: 'ambient' },
  {
    d: 'M61.8 88.9 Q86.7 75 111.5 85.2 M85.8 109.1 Q98.7 85 111.5 85.2',
    role: 'accent',
  },
  { d: 'M64 92.5 Q87 80 108.5 88 M90 108.5 Q100 90 109.5 88.2', role: 'soft' },
  { d: `M41.2 106.2 L56 100.8 ${dot(111.5, 85.2)}`, role: 'soft' },
  { d: 'M34 109 l6 4 M118 104 l8 -3', role: 'ambient' },
]

export const CHIMERA_ANT_PHASE_FOUR_DRAWINGS = {
  // Taragetter's two dark forewings lying over his shoulders and down his
  // spine to the small of his back, seen from behind and a little to the
  // side: the near wing's leading edge in tint, the far wing narrowed and
  // hatched dark, the line of the shoulders and the back soft. The soldier
  // Knov kills in chapter 251, named in chapter 261 when Welfin finds his
  // blood. No head, face or blood.
  taragetter: [
    {
      d: 'M22 64 Q50 44 90 44 Q114 46 132 58 M22 64 C20 102 26 146 36 184 M132 58 C136 98 134 146 128 184',
      role: 'soft',
    },
    { d: TARAGETTER_LEADING_EDGE, role: 'accent', transform: NEAR_WING },
    { d: TARAGETTER_TRAILING_EDGE, transform: NEAR_WING },
    ...moved(TARAGETTER_VEINS, NEAR_WING),
    ...moved(
      [
        { d: `${TARAGETTER_LEADING_EDGE} ${TARAGETTER_TRAILING_EDGE}` },
        ...TARAGETTER_VEINS,
        {
          d: 'M92 92 l8 -5 M94 108 l10 -6 M98 124 l10 -6 M104 140 l10 -6',
          role: 'ambient',
        },
      ],
      'translate(92 0) scale(0.7 1) translate(-84 0)',
    ),
    shadow(80, 192, 48),
  ],
} satisfies Drawings

export const chimeraAntPhaseFourRedrawn: Redrawings = {
  // The same shorts thrown down among the rubble, one leg folded under: Silva
  // crushes Cheetu with one blow from above, episode 117 / chapter 278. No
  // body is drawn.
  cheetu: [
    // The same shorts, smaller, beside the giant hourglass that stands in
    // the middle of the savanna his first ability conjures, the hourglass
    // in 3/4 with its sand soft: a touch takes him and Morel into it for a
    // game of tag, chapter 245 and episode 103.
    {
      episode: 103,
      chapter: 245,
      value: [
        ...moved(
          CHIMERA_ANT_ROYALS_DRAWINGS.cheetu.slice(0, -1),
          'translate(48 112) scale(0.6) translate(-80 -100)',
        ),
        {
          d: `${ellipse(122, 40, 26, 6)} M96 40 V44 C96 52 148 52 148 44 V40 ${ellipse(122, 168, 26, 6)} M96 168 V172 C96 180 148 180 148 172 V168`,
        },
        { d: 'M100 48 V164 M144 48 V164' },
        {
          d: 'M108 50 C108 80 119 96 119 106 C119 116 108 132 108 164 M136 50 C136 80 125 96 125 106 C125 116 136 132 136 164',
        },
        {
          d: 'M112 72 Q122 77 132 72 M122 108 V150 M110 164 Q122 144 134 164',
          role: 'soft',
        },
        {
          d: 'M138 64 l4 -3 M136 82 l5 -3 M136 128 l5 -3 M138 146 l4 -3',
          role: 'ambient',
        },
        shadow(80, 188, 66),
      ],
    },
    {
      episode: 117,
      chapter: 278,
      value: [
        ...moved(
          CHEETU_SHORTS,
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
  netero: [
    // The same geta, and rising behind it the open palm of the bodhisattva in
    // the muted ink: 100-Type Guanyin Bodhisattva, his Hatsu, strikes Pitou
    // away from the sky over the palace with a single palm, episode 111 /
    // chapter 264. Open lines, no glow; the thong keeps the accent.
    {
      episode: 111,
      chapter: 264,
      value: [
        {
          d: 'M70 84 L67 56 C62 52 56 45 51 38 C48 33 53 29 57 32 L67 42 L69 18 C69 13 76 13 76 18 L77 40 M77 40 L78 11 C78 6 85 6 85 11 L86 40 M86 40 L88 15 C88 10 95 10 95 15 L93 43 M93 43 L98 25 C99 20 105 21 104 26 L98 52 L97 75',
          role: 'ambient',
        },
        { d: 'M71 60 C78 55 86 57 93 52', role: 'ambient' },
        ...NETERO_GETA,
        shadow(82, 163, 44),
      ],
    },
    // His own object at rest, not a scene from the show: one single-tooth
    // geta, his object since the Hunter Exam, upturned on broken ground, its
    // tooth in the air and the thong loose in tint. The Poor Man's Rose goes
    // off when his heart stops, episode 126 / chapter 298. No cloud, no bomb
    // and no body.
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
