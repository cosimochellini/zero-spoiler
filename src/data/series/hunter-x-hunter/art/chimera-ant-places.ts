import type { Drawings, Redrawings, Stroke } from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * The palace's two wings either side of the central tower, their roofs,
 * the near wing's far end hatched, two floors of windows and the ground.
 * Both the palace's drawings keep them.
 */
const PALACE_WINGS: Stroke[] = [
  { d: 'M10 150 V94 H62 M98 94 H140 V150' },
  { d: 'M6 94 L14 84 H62 M98 84 H136 L144 94', role: 'soft' },
  { d: 'M140 94 L150 90 V146 L140 150 M144 84 L152 82 L150 90', role: 'soft' },
  {
    d: 'M143 102 l4 -2 M143 114 l4 -2 M143 126 l4 -2 M143 138 l4 -2',
    role: 'ambient',
  },
  {
    d: 'M20 104 V114 M32 104 V114 M44 104 V114 M108 104 V114 M120 104 V114 M132 104 V114 M20 126 V136 M32 126 V136 M44 126 V136 M108 126 V136 M120 126 V136 M132 126 V136',
    role: 'soft',
  },
  { d: 'M2 150 H158', role: 'ambient' },
]

/**
 * The upper floors of the palace's central tower, its far face turned away,
 * and its pointed roof in tint. Both the palace's drawings keep them.
 */
const PALACE_TOWER_TOP: Stroke[] = [
  { d: 'M58 46 L80 26 L102 46 Z M80 26 V18', role: 'accent' },
  { d: 'M62 46 V96 M98 46 V96 M62 56 H98' },
  { d: 'M98 46 L104 50 V96', role: 'soft' },
  { d: 'M74 68 V80 M86 68 V80', role: 'soft' },
]

export const CHIMERA_ANT_PLACE_DRAWINGS = {
  // The two great hollow trees that hold the border stop, a doorway cut
  // into each trunk, the far sides hatched, the crowns in tint: where Kite's
  // group is screened before it enters NGL, episode 79 / chapter 189.
  'ngl': [
    { d: 'M4 150 Q20 148 24 130 L28 78 M90 150 Q72 148 68 130 L66 78' },
    {
      d: 'M28 80 Q12 82 10 68 Q2 60 8 48 Q4 34 18 30 Q20 16 36 18 Q44 6 58 14 Q72 8 80 22 Q94 26 92 40 Q100 52 90 62 Q90 76 74 78 Q70 84 64 80 Q46 88 28 80',
      role: 'accent',
    },
    { d: 'M94 150 Q108 148 110 134 L113 94 M156 150 Q142 148 139 134 L136 94' },
    {
      d: 'M113 96 Q100 96 100 86 Q92 78 98 68 Q96 56 110 54 Q114 42 128 46 Q140 40 148 50 Q160 54 156 66 Q162 78 152 84 Q148 94 136 94 Q124 100 113 96',
      role: 'accent',
    },
    {
      d: 'M34 150 V124 Q34 110 46 110 Q58 110 58 124 V150 M114 150 V132 Q114 122 123 122 Q132 122 132 132 V150',
      role: 'soft',
    },
    {
      d: 'M36 84 Q34 94 36 102 M48 86 Q50 94 49 102 M118 100 Q117 108 118 114 M16 150 Q24 142 28 138 M146 150 Q140 144 138 140',
      role: 'soft',
    },
    {
      d: 'M66 70 l6 -6 M76 66 l6 -6 M136 86 l5 -5 M144 80 l5 -5',
      role: 'ambient',
    },
    {
      d: 'M66 92 l-6 4 M66 104 l-6 4 M67 116 l-6 4 M69 128 l-6 4 M136 106 l-5 3 M136 118 l-5 3 M138 130 l-5 3',
      role: 'ambient',
    },
    { d: 'M2 150 H158', role: 'ambient' },
    shadow(80, 156, 70),
  ],
  // The nest the worker ants raise for the Queen out of earth, a tall mound
  // with lesser spires, fluted, its far side hatched and its entrance in
  // tint: the ants fly their prey back to it in episode 78 / chapter 188.
  'chimera-ant-nest': [
    {
      d: 'M20 150 Q30 122 34 98 Q36 82 42 78 Q48 80 50 94 Q56 66 64 46 Q72 20 80 20 Q88 22 94 46 Q100 64 104 86 Q110 66 116 64 Q122 66 124 86 Q128 118 140 150',
    },
    { d: 'M80 20 Q90 64 96 104 Q98 128 100 150', role: 'soft' },
    {
      d: 'M102 98 l8 -4 M104 114 l9 -4 M106 130 l10 -4 M108 144 l11 -4 M98 68 l5 -3 M100 82 l6 -3',
      role: 'ambient',
    },
    { d: 'M58 150 V138 Q58 124 70 124 Q82 124 82 138 V150', role: 'accent' },
    { d: 'M62 148 l8 -8 M68 148 l10 -10 M64 136 l6 -6', role: 'ambient' },
    {
      d: 'M40 144 Q38 118 44 94 M52 120 Q52 96 62 62 M86 118 Q86 84 82 40 M114 140 Q118 110 116 80',
      role: 'soft',
    },
    { d: `${ellipse(72, 46, 2.5, 4)} ${ellipse(117, 78, 2.5, 3.5)}` },
    { d: ellipse(44, 92, 2.5, 3.5) },
    {
      d: 'M24 150 Q30 144 36 150 M88 150 Q94 145 100 150 M124 150 Q130 146 136 150',
      role: 'soft',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 156, 64),
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
  // The town's chalkboard hung between two posts, the slate in tint, the
  // challenge rubbed out to smears, chalk and duster on the ledge: Killua
  // reads the assassins' message on it in episode 85 / chapter 199, and
  // finds it erased when Palm meets them there.
  'doli-city': [
    { d: 'M24 150 V40 H32 V150 M120 146 V48 H126 V146' },
    { d: 'M24 40 L28 36 H36 L32 40 M36 36 V146 L32 150', role: 'soft' },
    { d: 'M32 54 L120 62 V118 L32 126 Z' },
    { d: 'M38 61 L114 68 V112 L38 119 Z', role: 'accent' },
    {
      d: 'M46 82 l10 -8 M52 86 l14 -12 M62 88 l14 -12 M74 86 l12 -10 M50 104 l10 -8 M60 106 l12 -10',
      role: 'ambient',
    },
    { d: 'M88 80 Q96 76 104 82 M84 100 Q92 96 98 100', role: 'soft' },
    { d: 'M32 126 L120 118 V122 L32 130' },
    { d: 'M56 125 l8 -1 M92 118 V114 L104 113 V117', role: 'soft' },
    {
      d: 'M33 60 l2 -2 M33 84 l2 -2 M33 108 l2 -2 M33 134 l2 -2',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(76, 156, 56),
  ],
  // A police car racing through the suburbs towards Cheetu, side on before
  // low rooftops, dark under its sills; the light bar on its roof is the
  // tint, and it has no markings: episode 93 / chapter 218.
  'pata-city': [
    {
      d: 'M14 136 V124 Q14 116 24 114 L48 110 L62 92 H102 L120 110 L138 114 Q148 116 148 126 V136 H128 A12 12 0 0 0 104 136 H56 A12 12 0 0 0 32 136 Z',
    },
    { d: `${circle(44, 140, 10)} ${circle(116, 140, 10)}` },
    { d: `${circle(44, 140, 4)} ${circle(116, 140, 4)}`, role: 'soft' },
    {
      d: 'M72 92 V86 H92 V92 M72 86 L76 82 H96 L92 86 M96 82 V88 L92 92',
      role: 'accent',
    },
    { d: 'M66 96 H80 V108 H55 Z M86 96 H100 L112 108 H86 Z', role: 'soft' },
    { d: 'M83 112 V134 M18 122 H146 M140 118 H146', role: 'soft' },
    {
      d: 'M62 136 l-3 5 M72 136 l-3 5 M82 136 l-3 5 M92 136 l-3 5',
      role: 'ambient',
    },
    { d: 'M2 112 H8 M2 122 H10 M4 132 H10', role: 'ambient' },
    {
      d: 'M18 84 V68 L28 60 L38 68 V84 M118 84 V66 H138 V84 M140 76 V70 L148 64 L156 70 V76',
      role: 'ambient',
    },
    { d: 'M2 150 H158', role: 'ambient' },
    shadow(81, 155, 60),
  ],
  // The open country the King reaches, a dirt road up a low rise to the
  // palace in its walled courtyard, far hills behind. The palace, small
  // with distance, is the tint: episode 92 / chapter 216.
  'republic-of-east-gorteau': [
    { d: 'M2 132 Q30 112 60 110 H100 Q130 112 158 132' },
    {
      d: 'M58 110 V98 H72 M88 98 H102 V110 M72 110 V82 H88 V110 M69 82 L80 72 L91 82 Z',
      role: 'accent',
    },
    { d: 'M52 110 V106 H72 M88 106 H108 V110', role: 'soft' },
    { d: 'M54 150 Q70 132 76 110 M106 150 Q90 132 84 110' },
    { d: 'M2 98 Q24 82 46 96 M112 94 Q134 78 158 92', role: 'ambient' },
    {
      d: 'M118 120 l7 -3 M128 126 l7 -3 M138 132 l7 -3 M146 138 l7 -3',
      role: 'ambient',
    },
    {
      d: 'M24 142 Q28 134 32 142 M30 142 Q34 136 38 142 M126 144 Q130 136 134 144 M132 144 Q136 138 140 144',
      role: 'soft',
    },
    { d: 'M2 150 H158', role: 'ambient' },
    shadow(80, 156, 70),
  ],
  // The palace the King lands at: a wing either side of the central tower,
  // whose ground floor holds the door to the central stair. The tower's roof
  // is the tint: episode 93 / chapter 216.
  'royal-palace-of-east-gorteau': [
    ...PALACE_WINGS,
    ...PALACE_TOWER_TOP,
    { d: 'M62 96 V150 M98 96 V150 M104 96 V146 L98 150' },
    { d: 'M70 150 V126 Q70 116 80 116 Q90 116 90 126 V150', role: 'soft' },
    {
      d: 'M101 62 l2 -1 M101 78 l2 -1 M101 104 l2 -1 M101 120 l2 -1 M101 136 l2 -1',
      role: 'ambient',
    },
    shadow(80, 156, 72),
  ],
  // The hotel by the train station, in 3/4, its far face hatched and its
  // glass doors in tint, beside the station's platform roof and rails; no
  // sign: Palm's crystal ball shows the boys in front of it in episode 94 /
  // chapter 220.
  'tri-orb-hotel': [
    { d: 'M30 150 V38 H88 V150' },
    { d: 'M88 38 L104 30 V142 L88 150 M30 38 L46 30 H104', role: 'soft' },
    {
      d: 'M92 52 l8 -4 M92 72 l8 -4 M92 92 l8 -4 M92 112 l8 -4 M92 132 l8 -4',
      role: 'ambient',
    },
    {
      d: 'M38 50 H48 M54 50 H64 M70 50 H80 M38 68 H48 M54 68 H64 M70 68 H80 M38 86 H48 M54 86 H64 M70 86 H80 M38 104 H48 M54 104 H64 M70 104 H80',
      role: 'soft',
    },
    { d: 'M46 150 V122 H72 V150 M59 122 V150', role: 'accent' },
    { d: 'M42 122 H76', role: 'soft' },
    { d: 'M104 106 H158 M108 106 L112 98 H156' },
    { d: 'M114 106 V150 M150 106 V150 M104 112 H158', role: 'soft' },
    { d: 'M104 144 H158 M104 138 H158', role: 'ambient' },
    { d: 'M2 150 H158', role: 'ambient' },
    shadow(66, 156, 48),
  ],
} satisfies Drawings

/** The Chimera Ant places that change with the story: the palace's damage. */
export const chimeraAntPlacesRedrawn: Redrawings = {
  'royal-palace-of-east-gorteau': [
    // The same wings and tower top over a base blown open, its walls broken
    // off above a heap of rubble: Youpi's rage blast destroys the bottom of
    // the central tower, episode 117 / chapter 278. Youpi is not drawn.
    {
      episode: 117,
      chapter: 278,
      value: [
        ...PALACE_WINGS,
        ...PALACE_TOWER_TOP,
        {
          d: 'M62 96 V114 L56 124 M98 96 V112 L104 120 M104 96 V114 M62 114 H66 V106 H72 V110 H78 V100 H84 V108 H90 V104 H94 V110 H98',
        },
        {
          d: 'M66 122 l8 -8 M70 130 l12 -12 M80 130 l10 -10 M90 128 l6 -6',
          role: 'ambient',
        },
        {
          d: 'M46 150 V144 H54 V138 H62 V132 H72 V128 H86 V134 H96 V138 H104 V144 H114 V150',
        },
        {
          d: 'M56 140 L64 134 L70 140 L62 146 Z M90 136 L98 131 L103 139 L95 144 Z M76 128 V136 H86',
          role: 'soft',
        },
        shadow(80, 156, 72),
      ],
    },
  ],
}
