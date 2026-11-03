import type { Drawings } from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

export const CHIMERA_ANT_PLACE_DRAWINGS = {
  // The two hollow border trees, approached in chapter 188 and episode 79.
  'ngl': [
    {
      d: 'M12 155 Q27 150 31 133 L37 80 Q20 77 19 65 Q7 60 15 46 Q14 34 29 28 Q32 16 47 22 Q56 13 67 23 Q81 25 81 39 Q93 48 85 61 Q81 74 62 79 L66 129 Q67 145 77 152',
    },
    {
      d: 'M84 152 Q99 146 101 130 L105 75 Q88 74 87 62 Q76 53 88 43 Q86 31 102 26 Q108 13 122 21 Q136 17 140 31 Q156 32 151 49 Q159 62 146 69 Q140 77 130 77 L132 127 Q135 146 150 154',
    },
    {
      d: 'M36 150 V127 Q36 115 47 114 Q58 115 58 127 V150 M106 150 V126 Q106 113 116 113 Q126 113 126 126 V150',
      role: 'accent',
    },
    { d: 'M64 90 Q83 94 103 87 M65 100 Q83 104 102 98' },
    {
      d: 'M42 81 L39 104 M58 85 L61 112 M112 83 L110 103 M124 83 L127 108',
      role: 'soft',
    },
    { d: 'M14 161 H149 M58 169 H113', role: 'ambient' },
  ],
  // The nest the worker ants raise for the Queen, a tall mound of earth
  // with lesser spires, its far side hatched, as chapter 188 and episode 78
  // show the ants flying their prey back to it. The entrance is the tint.
  'chimera-ant-nest': [
    {
      d: 'M24 150 Q32 120 36 96 Q38 80 43 76 Q48 78 50 92 Q56 66 64 46 Q72 22 79 22 Q86 24 92 46 Q98 64 102 84 Q108 66 114 64 Q120 66 122 84 Q126 116 138 150',
    },
    { d: 'M79 22 Q88 64 94 104 Q96 128 98 150', role: 'soft' },
    {
      d: 'M100 98 l8 -4 M102 114 l9 -4 M104 130 l10 -4 M106 144 l11 -4 M98 70 l5 -3',
      role: 'ambient',
    },
    { d: 'M62 150 V138 Q62 126 72 126 Q82 126 82 138 V150', role: 'accent' },
    { d: `${ellipse(72, 64, 3.5, 5)} ${ellipse(54, 104, 4, 5.5)}` },
    { d: `${ellipse(112, 92, 3, 4.5)} ${ellipse(82, 96, 3.5, 5)}` },
    {
      d: 'M38 122 Q48 117 58 123 M84 116 Q92 112 100 117 M56 82 Q64 78 70 84 M106 126 Q114 122 122 128',
      role: 'soft',
    },
    { d: 'M42 140 Q48 136 54 141 M88 136 Q94 132 98 137', role: 'soft' },
    { d: 'M6 150 H22 M140 150 H154', role: 'ambient' },
    shadow(81, 156, 60),
  ],
  // The rock face Gon takes for the nest in chapter 192 and episode 82,
  // with the three tunnels into the drug factory; the middle one, dark
  // inside, is the tint.
  'd2-manufacturing-plant': [
    {
      d: 'M10 150 L20 120 L32 106 L40 80 L54 62 L66 72 L76 64 L90 42 L104 32 L116 46 L126 72 L138 94 L150 150',
    },
    { d: 'M104 32 L100 62 L110 98 L106 150', role: 'soft' },
    {
      d: 'M114 60 l6 -4 M118 80 l7 -4 M124 100 l7 -4 M126 120 l8 -4 M128 138 l8 -4',
      role: 'ambient',
    },
    { d: 'M64 150 V132 Q64 118 79 118 Q94 118 94 132 V150', role: 'accent' },
    { d: 'M30 150 V140 Q30 130 40 130 Q50 130 50 140 V150' },
    { d: 'M108 150 V142 Q108 134 116 134 Q124 134 124 142 V150' },
    { d: 'M70 146 l6 -6 M72 136 l10 -10 M80 146 l10 -10', role: 'ambient' },
    { d: `${ellipse(50, 96, 3.5, 4.5)} ${ellipse(88, 74, 3.5, 4.5)}` },
    {
      d: 'M24 118 L42 112 M58 82 L72 88 M84 58 L96 62 M44 102 L60 108',
      role: 'soft',
    },
    { d: 'M2 150 H10 M150 150 H158', role: 'ambient' },
    shadow(80, 156, 64),
  ],
  // The map of the country Killua checks during the news in chapter 218,
  // folded in three and standing open, its middle panel turned away. The
  // road from Doli City through two towns to Pata City is the tint.
  'republic-of-rokario': [
    { d: 'M26 48 L62 58 V142 L26 150 Z' },
    { d: 'M62 58 L98 48 V150 L62 142', role: 'soft' },
    { d: 'M98 48 L134 58 V142 L98 150 Z' },
    {
      d: 'M66 66 l6 -2 M66 80 l8 -2 M66 94 l8 -2 M66 108 l8 -2 M66 122 l8 -2',
      role: 'ambient',
    },
    {
      d: 'M30 70 Q40 66 46 74 Q52 82 60 78 M102 66 Q112 74 118 70 Q126 66 130 74',
      role: 'soft',
    },
    { d: 'M40 116 Q50 104 60 102 M102 98 Q112 92 120 94', role: 'accent' },
    {
      d: dots([
        [40, 116],
        [60, 102],
        [102, 98],
        [120, 94],
      ]),
      role: 'accent',
    },
    { d: 'M32 132 Q42 126 52 134 M106 128 Q116 122 128 128', role: 'soft' },
    { d: 'M8 150 H24 M136 150 H152', role: 'ambient' },
    shadow(80, 156, 58),
  ],
  // The message board where the boys find their challenge, from chapter
  // 199, in 3/4 on its legs beside a street lamp. The board is the tint;
  // the old message is rubbed out, with no lettering.
  'doli-city': [
    { d: 'M36 58 H118 V114 H36 Z' },
    { d: 'M43 65 H111 V107 H43 Z', role: 'accent' },
    {
      d: 'M118 58 L126 62 V117 L118 114 M36 58 L44 54 H126 L118 58',
      role: 'soft',
    },
    { d: 'M54 79 Q66 75 80 81 M60 94 Q76 89 96 95', role: 'soft' },
    { d: 'M48 114 L44 150 M106 114 L110 150' },
    { d: 'M122 116 L124 146 M50 132 H104', role: 'soft' },
    { d: 'M120 70 l5 2 M120 84 l5 2 M120 98 l5 2', role: 'ambient' },
    {
      d: 'M142 150 V54 Q142 44 132 44 M128 44 H136 L134 50 H130 Z',
      role: 'soft',
    },
    { d: 'M6 150 H156', role: 'ambient' },
    shadow(78, 156, 50),
  ],
  // A police car racing through the suburbs towards Cheetu in chapter 218,
  // side on before low rooftops. Its roof light is the tint; no markings.
  'pata-city': [
    {
      d: 'M20 132 Q22 117 40 114 L56 96 H104 L122 114 Q140 117 142 132 V138 H128 M104 138 H58 M34 138 H20 Z',
    },
    { d: `${circle(46, 140, 10)} ${circle(116, 140, 10)}` },
    { d: 'M70 96 V88 H90 V96', role: 'accent' },
    { d: 'M60 101 H78 V113 H49 Z M84 101 H101 L113 113 H84 Z', role: 'soft' },
    { d: 'M81 114 V136 M24 124 H40 M122 124 H138', role: 'soft' },
    { d: `${circle(46, 140, 4)} ${circle(116, 140, 4)}`, role: 'soft' },
    { d: 'M2 112 H14 M4 122 H14 M2 132 H12', role: 'ambient' },
    {
      d: 'M20 86 V70 L30 62 L40 70 V86 M120 86 V66 H140 V86 M54 80 V72 H66 V80',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(81, 155, 58),
  ],
  // The open country the King reaches in chapter 216 and episode 92, a road
  // across a low rise to the palace, far hills behind. The palace, small
  // with distance, is the tint.
  'republic-of-east-gorteau': [
    { d: 'M10 150 Q40 122 66 116 Q80 113 94 116 Q120 122 150 150' },
    { d: 'M58 116 V98 H102 V116 M70 98 V84 H90 V98', role: 'accent' },
    { d: 'M66 84 L80 76 L94 84 M54 98 L60 92 H100 L106 98', role: 'soft' },
    { d: 'M80 150 Q66 140 76 132 Q90 124 80 117', role: 'soft' },
    {
      d: 'M112 128 l7 -4 M120 137 l7 -4 M128 146 l7 -4 M104 121 l6 -3',
      role: 'ambient',
    },
    { d: 'M4 104 Q22 90 40 102 M118 100 Q138 86 156 98', role: 'ambient' },
    { d: 'M30 142 Q36 136 42 142 M108 142 Q114 136 120 142', role: 'soft' },
    { d: 'M2 150 H10 M150 150 H158', role: 'ambient' },
    shadow(80, 156, 68),
  ],
  // The palace the King lands at in chapter 216 and episode 93: the main
  // hall over its stair, a wing either side, the near wing's end turned
  // away. The top roof is the tint.
  'royal-palace-of-east-gorteau': [
    { d: 'M56 150 V84 H104 V150' },
    { d: 'M48 84 L58 72 H102 L112 84 Z' },
    { d: 'M64 72 L70 58 H90 L96 72', role: 'accent' },
    { d: 'M20 150 V104 H56 M104 104 H140 V150' },
    { d: 'M16 104 L24 96 H56 M104 96 H136 L144 104', role: 'soft' },
    { d: 'M140 104 L148 100 V146 L140 150', role: 'soft' },
    { d: 'M143 112 l3 -2 M143 124 l3 -2 M143 136 l3 -2', role: 'ambient' },
    {
      d: 'M28 114 V126 M40 114 V126 M120 114 V126 M132 114 V126',
      role: 'soft',
    },
    { d: 'M72 136 V112 Q80 104 88 112 V136', role: 'soft' },
    { d: 'M64 150 L68 136 H92 L96 150 M66 143 H94', role: 'soft' },
    { d: 'M4 150 H16 M144 150 H156', role: 'ambient' },
    shadow(80, 156, 66),
  ],
  // The hotel by the station where Killua carries Gon in chapter 220, in
  // 3/4 beside the station's canopy and clock. The entrance awning is the
  // tint; no sign.
  'tri-orb-hotel': [
    { d: 'M44 150 V40 H100 V150' },
    { d: 'M100 40 L118 48 V146 L100 150 M44 40 L62 32 H118', role: 'soft' },
    {
      d: 'M104 62 l10 4 M104 80 l10 4 M104 98 l10 4 M104 116 l10 4 M104 134 l10 4',
      role: 'ambient',
    },
    {
      d: 'M54 54 H64 M80 54 H90 M54 72 H64 M80 72 H90 M54 90 H64 M80 90 H90 M54 108 H64 M80 108 H90',
      role: 'soft',
    },
    { d: 'M50 126 H94 L90 118 H54 Z', role: 'accent' },
    { d: 'M58 126 V150 M86 126 V150 M66 150 V134 H78 V150', role: 'soft' },
    { d: 'M4 112 H34 L30 104 H8 Z M10 112 V150 M30 112 V150' },
    { d: `${circle(20, 92, 5)} M20 97 V104`, role: 'soft' },
    { d: 'M2 150 H156', role: 'ambient' },
    shadow(80, 156, 50),
  ],
} satisfies Drawings
