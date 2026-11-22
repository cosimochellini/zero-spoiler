import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/**
 * Puhat's open suit jacket, without a shirt, at the tryouts in chapter 125
 * / episode 60. Its broad lapels stay plain; the pocket trims are in tint.
 */
const PUHAT_JACKET: Stroke[] = [
  {
    d: 'M62 48 L40 60 L26 128 L42 134 L54 88 L50 166 H112 L108 88 L124 134 L140 128 L126 60 L102 48',
  },
  { d: 'M62 48 L72 66 L60 82 L76 102 L80 158', role: 'soft' },
  { d: 'M102 48 L92 66 L104 82 L86 102 L80 158', role: 'soft' },
  { d: 'M62 48 Q82 36 102 48 M72 66 Q82 58 92 66', role: 'soft' },
  { d: 'M50 166 L58 172 H118 L112 166 M118 172 L114 108', role: 'soft' },
  { d: 'M54 118 L68 120 M94 120 L108 118', role: 'accent' },
  { d: 'M28 120 L44 126 M122 126 L138 120', role: 'soft' },
  { d: 'M58 142 Q64 146 70 142 M92 144 Q100 148 108 140', role: 'soft' },
  {
    d: 'M114 126 l5 -3 M114 138 l4 -2 M114 150 l4 -2 M114 162 l4 -2',
    role: 'ambient',
  },
  {
    d: 'M36 102 l5 -3 M34 114 l5 -3 M130 102 l5 -3 M132 114 l5 -3',
    role: 'ambient',
  },
]

/**
 * The ball of Razor's dodgeball match, seen 3/4: seams in soft, one seam band
 * in tint, the far side hatched. Shared by his first drawing and his 14 Devils
 * stage.
 */
const RAZOR_BALL: Stroke[] = [
  { d: circle(80, 120, 32) },
  { d: 'M49 112 Q71 118 73 151 M53 101 Q82 112 84 152', role: 'accent' },
  { d: 'M61 94 Q97 98 110 130', role: 'soft' },
  { d: 'M84 88 Q107 97 112 116', role: 'soft' },
  { d: 'M95 145 l6 -5 M103 138 l6 -5 M108 129 l5 -5', role: 'ambient' },
]

/** Open aura lines round the ball and speed lines behind it: the aura ball. */
const RAZOR_AURA_BALL: Stroke[] = [
  {
    d: 'M118 136 Q114 156 98 162 M84 166 Q66 168 52 158 M124 116 Q126 104 122 94',
    role: 'ambient',
  },
  { d: 'M10 54 L32 76 M6 82 L24 94 M28 36 L46 58', role: 'ambient' },
]

export const GREED_ISLAND_DRAWINGS = {
  // Jitonoda is named in chapter 129's news report, which neither anime
  // adapts. The set stands for the report: a deep cabinet in 3/4, its far
  // side hatched, and a blank screen; no portrait, podium or lettering.
  'jitonoda': [
    { d: 'M24 66 H112 V146 H24 Z' },
    { d: 'M112 66 L136 54 V132 L112 146 M24 66 L48 54 H136', role: 'soft' },
    {
      d: 'M118 80 l12 -6 M118 96 l12 -6 M118 112 l12 -6 M118 128 l12 -6',
      role: 'ambient',
    },
    {
      d: 'M36 80 Q36 76 40 76 H96 Q100 76 100 80 V128 Q100 132 96 132 H40 Q36 132 36 128 Z',
      role: 'accent',
    },
    { d: 'M42 82 H94 V126 H42 Z', role: 'soft' },
    { d: 'M46 90 Q54 85 62 87', role: 'soft' },
    { d: 'M36 146 V154 M100 146 V154', role: 'soft' },
    shadow(80, 162, 52),
  ],
  // The case for three cards Dwun digs out of his rubbish for Gon in
  // chapter 184 / episode 75, open on its three slots, with the cigarette
  // he always has resting on it, its ash tip in tint. Scraps lie around it.
  'dwun': [
    { d: 'M26 124 L98 106 L134 126 L62 144 Z' },
    { d: 'M26 124 V136 L62 156 L134 138 V126 M62 144 V156' },
    { d: 'M26 124 L16 80 L88 62 L98 106 M20 84 L86 68', role: 'soft' },
    {
      d: 'M36.4 125.7 L55.2 121.1 L75 132.1 L56.2 136.7 Z M58.8 120.2 L77.5 115.5 L97.3 126.5 L78.6 131.2 Z M81.1 114.6 L99.8 109.9 L119.6 120.9 L100.9 125.6 Z',
      role: 'soft',
    },
    {
      d: 'M64 140 L128 124 M66 145 L130 129 M64 140 Q62 143 66 145 M76 137 L78 142',
      role: 'soft',
    },
    { d: 'M128 124 L138 121 Q141 124 140 127 L130 129', role: 'accent' },
    { d: 'M142 118 Q136 110 144 102 Q152 94 146 86', role: 'ambient' },
    {
      d: 'M70 150 l5 -3 M86 146 l5 -3 M102 142 l5 -3 M118 138 l5 -3',
      role: 'ambient',
    },
    {
      d: 'M6 166 L14 156 L24 160 L20 170 Z M136 160 L146 152 L156 158 L150 168 Z M30 172 L44 166',
      role: 'ambient',
    },
    shadow(80, 170, 56),
  ],
  // List's dress shirt at the castle in chapter 183 / episode 75: the
  // collar with the small tie knotted under it, in tint, and the overall
  // straps down to their buckles. The turned side is hatched.
  'list': [
    { d: 'M58 44 L32 56 L28 172 Q80 182 132 172 L128 56 L102 44' },
    { d: 'M58 44 Q80 54 102 44', role: 'soft' },
    { d: 'M58 44 L64 74 L79 60 M102 44 L96 74 L81 60' },
    {
      d: 'M75 60 H85 L83 70 H77 Z M77 70 L71 120 L80 130 L89 120 L83 70',
      role: 'accent',
    },
    { d: 'M42 53 L46 140 M54 49 L58 140 M106 49 L102 140 M118 53 L114 140' },
    { d: 'M42 140 H60 V156 H42 Z M100 140 H118 V156 H100 Z', role: 'soft' },
    { d: 'M47 144 H55 V152 H47 Z M105 144 H113 V152 H105 Z', role: 'soft' },
    {
      d: 'M122 70 l5 -3 M122 86 l5 -3 M122 102 l5 -3 M122 118 l5 -3 M122 134 l5 -3 M122 150 l5 -3',
      role: 'ambient',
    },
    { d: 'M34 60 L38 110 M126 60 L122 110', role: 'soft' },
    shadow(80, 190, 50),
  ],
  // Eta's helmet in 3/4, as she greets Gon in chapter 127 / episode 60:
  // her two long ponytails fall from it, and one of its eye motifs, outline
  // and iris only, is in tint. The far side is hatched; no face.
  'eta': [
    { d: 'M38 130 C36 84 56 60 82 60 C108 60 126 84 124 130' },
    {
      d: 'M38 130 Q81 148 124 130 M38 130 V137 Q81 156 124 137 V130',
      role: 'soft',
    },
    {
      d: `M50 108 Q70 92 90 108 Q70 122 50 108 Z ${circle(70, 107, 6)}`,
      role: 'accent',
    },
    {
      d: 'M66 64 C60 38 40 26 26 38 C14 50 16 84 22 104 C26 122 22 142 12 158 M68 70 C62 52 46 44 36 50 C28 58 30 82 34 100 C38 120 32 142 12 158',
      role: 'soft',
    },
    {
      d: 'M98 62 C104 36 124 24 138 36 C150 48 148 82 142 102 C138 120 142 140 150 156 M96 68 C102 50 118 42 128 48 C136 56 134 80 130 98 C126 118 132 140 150 156',
      role: 'soft',
    },
    {
      d: 'M30 52 C24 74 30 96 28 116 M134 50 C140 72 134 94 136 114',
      role: 'soft',
    },
    { d: 'M110 90 l7 -4 M114 104 l7 -4 M116 118 l7 -4', role: 'ambient' },
    shadow(81, 174, 46),
  ],
  // Elena's helmet in 3/4, as she sends Killua out of the game in chapter
  // 146 / episode 65: two ponytails on top, two thick braids below and her
  // thin choker between them. The rim is in tint; no face.
  'elena': [
    { d: 'M36 118 C36 76 58 54 84 54 C110 54 126 78 124 118' },
    { d: 'M36 118 Q82 136 124 118', role: 'accent' },
    { d: 'M36 118 V124 Q82 143 124 124 V118', role: 'soft' },
    {
      d: 'M66 58 C64 40 54 30 42 30 C32 30 26 40 28 52 M66 58 C62 46 54 40 46 42 C38 44 36 52 38 60 M66 58 C66 44 62 36 54 34',
      role: 'soft',
    },
    {
      d: 'M100 58 C102 40 112 30 124 30 C134 30 140 40 138 52 M100 58 C104 46 112 40 120 42 C128 44 130 52 128 60 M100 58 C100 44 104 36 112 34',
      role: 'soft',
    },
    {
      d: 'M42 128 L44 180 M56 132 L56 180 M42 138 L49 144 L56 138 M43 150 L49 156 L56 150 M43 162 L49 168 L56 162 M44 174 L50 180 L56 174',
      role: 'soft',
    },
    {
      d: 'M106 132 L106 178 M120 128 L118 178 M106 138 L113 144 L120 136 M106 150 L112 156 L119 148 M106 162 L112 168 L119 160 M106 174 L112 178 L118 172',
      role: 'soft',
    },
    { d: 'M58 146 Q81 156 104 146 M58 150 Q81 160 104 150', role: 'soft' },
    { d: 'M108 80 l7 -4 M112 94 l7 -4 M114 108 l7 -4', role: 'ambient' },
    shadow(81, 192, 44),
  ],
  // Limeiro's castle, the city's symbol, which Gon enters in chapter 183 /
  // episode 75: the keep in 3/4 with its far side hatched, two towers and a
  // few roofs of the town beside it. The gate he walks in by is in tint.
  'limeiro': [
    { d: 'M4 150 H156', role: 'ambient' },
    { d: 'M60 150 V74 H100 V150' },
    { d: 'M100 74 L110 68 V146 L100 150', role: 'soft' },
    {
      d: 'M102 90 l6 -3 M102 104 l6 -3 M102 118 l6 -3 M102 132 l6 -3',
      role: 'ambient',
    },
    { d: 'M56 74 L80 46 L104 74 Z M80 46 L90 41 L114 69 L104 74' },
    { d: 'M70 150 V128 Q80 116 90 128 V150', role: 'accent' },
    { d: 'M76 88 V100 M84 88 V100', role: 'soft' },
    { d: 'M30 150 V88 H50 V150 M26 88 L40 60 L54 88 Z' },
    { d: 'M116 150 V92 H134 V150 M112 92 L125 64 L138 92 Z' },
    { d: 'M134 92 L140 88 V146 L134 150 M138 92 L141 89', role: 'soft' },
    { d: 'M40 102 V112 M125 106 V116', role: 'soft' },
    {
      d: 'M6 150 V134 L15 124 L24 134 V150 M142 150 V136 L149 128 L156 136 V150',
      role: 'soft',
    },
    shadow(80, 158, 62),
  ],

  // Genthru's open hand with a Little Flower blast in its palm, the power
  // he turns on Jispa in chapter 142 / episode 64. A cross-shaped symbol on
  // the cuff of his white cloak is in tint; the blast is open lines.
  'genthru': [
    { d: 'M2 170 L34 128 M28 188 L58 150' },
    { d: 'M34 128 Q52 132 58 150 Q42 148 34 128', role: 'soft' },
    {
      d: 'M23 152 H29 V157 H34 V163 H29 V168 H23 V163 H18 V157 H23 Z',
      role: 'accent',
    },
    {
      d: 'M40 136 C44 128 46 126 48 126 C44 112 50 98 60 90 Q65 86 69 91 C66 100 66 108 72 110 L92 100',
    },
    {
      d: 'M92 100 L128 76 Q134 74 135 80 L100 106 L140 88 Q146 87 146 93 L106 114 L142 104 Q147 104 146 109 L108 122 L136 120 Q140 121 138 125 L108 128',
    },
    { d: 'M56 148 Q86 140 108 128' },
    { d: 'M70 128 Q84 120 98 112 M62 120 Q70 112 78 112', role: 'soft' },
    {
      d: 'M84 102 V80 M95 103 L107 86 M73 104 L61 88 M101 111 L119 104 M67 112 L51 106',
      role: 'ambient',
    },
    { d: 'M90 92 l3 -4 M78 93 l-3 -4', role: 'ambient' },
    { d: 'M10 176 l6 3 M18 166 l6 3', role: 'ambient' },
  ],
  // Jispa's black tank top, from his appearance in chapter 131, laid out
  // with its thickness and folds. It is really dark, so its front is
  // hatched; the neckline is in tint.
  'jispa': [
    {
      d: 'M52 72 L60 70 Q66 84 82 82 Q94 80 96 66 L104 64 Q104 80 118 88 L132 128 L46 144 L40 104 Q54 92 52 72 Z',
    },
    { d: 'M60 70 Q66 84 82 82 Q94 80 96 66', role: 'accent' },
    { d: 'M46 144 L48 150 L134 134 L132 128', role: 'soft' },
    { d: 'M64 100 Q80 110 96 96 M60 122 Q84 118 112 112', role: 'soft' },
    {
      d: 'M58 132 l6 -4 M74 130 l6 -4 M90 127 l6 -4 M106 124 l6 -4 M50 112 l6 -4 M112 100 l6 -4 M100 108 l6 -4 M70 114 l6 -4',
      role: 'ambient',
    },
    { d: 'M8 158 H152', role: 'ambient', dashed: true },
    shadow(88, 164, 52),
  ],
  // The ball of Razor's dodgeball match, wrapped in open aura lines for the
  // aura ball he spikes into the Troupe's boat in chapter 145 / episode 65.
  'razor': [...RAZOR_BALL, ...RAZOR_AURA_BALL, shadow(80, 182, 32)],
  // Dorias's casino slot machine, chapter 151: blank reels and a lever.
  // The cabinet is an original construction, with no letters or logo.
  'dorias': [
    { d: 'M33 150 V55 H109 V150 Z M109 55 L128 45 V140 L109 150' },
    { d: 'M33 55 L52 45 H128', role: 'soft' },
    { d: 'M43 69 H99 V105 H43 Z', role: 'accent' },
    { d: 'M61 70 V104 M81 70 V104', role: 'soft' },
    { d: 'M47 78 H57 M65 86 H77 M85 78 H95', role: 'soft' },
    { d: 'M42 116 H99 L105 129 H38 Z M38 129 V136 H105 V129' },
    { d: 'M48 140 H93 V149 M120 108 L144 83 V67', role: 'soft' },
    { d: circle(144, 62, 5), role: 'soft' },
    {
      d: 'M115 65 l7 -4 M115 80 l7 -4 M115 95 l7 -4 M115 125 l7 -4',
      role: 'ambient',
    },
    { d: 'M8 150 H150', role: 'ambient' },
    shadow(80, 158, 60),
  ],
  // Soufrabi's lighthouse on the coastal headland described in its page
  // at chapter 155 / episode 67. Plain original geometry, no copied facade.
  'soufrabi': [
    { d: 'M7 150 L21 135 L40 130 L49 113 L103 115 L121 130 L153 141' },
    { d: 'M51 115 L59 47 H91 L99 115 Z' },
    { d: 'M91 47 L102 43 L110 111 L99 115 M59 47 L69 43 H102', role: 'soft' },
    { d: 'M55 47 V34 H96 V47 Z', role: 'accent' },
    { d: 'M55 34 L75 21 L96 34 M96 34 L107 30 L87 18 L75 21', role: 'soft' },
    { d: 'M96 34 L107 30 V43 L96 47 M65 35 V46 M84 35 V46', role: 'soft' },
    { d: 'M70 113 V92 H82 V114 M70 63 H81 V76 H70 Z', role: 'soft' },
    { d: 'M97 63 l6 -3 M99 78 l6 -3 M101 93 l6 -3', role: 'ambient' },
    {
      d: 'M45 127 L60 132 L53 143 M109 127 L115 145 M76 136 L81 147',
      role: 'soft',
    },
    { d: 'M5 163 Q32 155 59 163 M89 172 Q119 164 153 172', role: 'ambient' },
  ],
  // Aiai's floating heart, the city's symbol at episode 68, in an
  // original three-quarter outline above the street. No NPC or lettering.
  'aiai': [
    {
      d: 'M78 123 C62 105 30 87 30 63 C30 39 61 31 78 53 C95 28 127 34 128 59 C130 83 96 108 78 123 Z',
      role: 'accent',
    },
    {
      d: 'M78 123 L88 127 C107 111 142 86 140 61 C139 44 128 35 116 35',
      role: 'soft',
    },
    { d: 'M78 53 L88 56 M39 62 C39 49 54 44 65 53', role: 'soft' },
    { d: 'M125 75 l7 -5 M117 89 l8 -6 M107 103 l8 -6', role: 'ambient' },
    {
      d: 'M12 150 H150 M22 150 V137 H42 V150 M119 150 V134 H141 V150',
      role: 'ambient',
    },
    { d: 'M29 137 L33 131 L42 137 M119 134 L130 126 L141 134', role: 'soft' },
    { d: 'M49 166 L70 153 M112 167 L94 153', role: 'ambient' },
    shadow(82, 155, 25),
  ],

  // Battera's bow tie and the rose pinned to his suit, chapter 120 /
  // episode 59. Two bent ribbon wings give the tie a far face.
  'battera': [
    { d: 'M72 94 L36 76 L32 116 L72 106 M88 94 L126 76 L130 116 L88 106' },
    { d: 'M36 76 L41 70 L74 88 M126 76 L121 70 L86 88', role: 'soft' },
    { d: 'M72 90 Q80 86 88 90 L88 110 Q80 114 72 110 Z' },
    { d: 'M42 86 L65 98 L42 108 M120 86 L96 98 L120 108', role: 'soft' },
    {
      d: 'M42 88 l6 -4 M42 98 l6 -4 M116 90 l5 -3 M118 100 l5 -3',
      role: 'ambient',
    },
    {
      d: 'M78 148 C64 143 65 128 76 124 C72 112 90 106 98 116 C112 108 122 122 114 132 C122 144 104 154 94 146 C88 154 82 153 78 148',
      role: 'accent',
    },
    {
      d: 'M78 126 Q96 117 108 130 Q104 146 90 140 Q78 138 84 130 Q90 124 100 132',
      role: 'soft',
    },
    { d: 'M92 150 Q90 165 82 176', role: 'soft' },
    { d: 'M88 164 Q102 150 112 157 Q102 171 88 164', role: 'soft' },
    { d: 'M88 164 L104 159', role: 'soft' },
    shadow(81, 186, 43),
  ],
  // Tsezguerra's flight-style suit, chapter 121 / episode 59: the collar,
  // front zip and pair of pockets, with the turned right side hatched.
  'tsezguerra': [
    {
      d: 'M64 40 L42 52 L26 122 L42 128 L54 86 L52 144 L60 178 H78 L82 150 L86 178 H104 L112 144 L110 86 L122 128 L138 122 L122 52 L100 40',
    },
    { d: 'M64 40 Q82 30 100 40 L94 58 L82 50 L70 58 Z', role: 'accent' },
    { d: 'M82 50 V144 M78 60 V130', role: 'soft' },
    { d: 'M56 70 H72 V92 H54 M92 70 H108 L110 92 H92 Z', role: 'soft' },
    { d: 'M56 76 H72 M92 76 H108', role: 'soft' },
    { d: 'M54 110 L70 114 M94 114 L110 110', role: 'soft' },
    { d: 'M52 138 H112 M62 144 H76 M88 144 H102', role: 'soft' },
    { d: 'M28 114 L44 120 M120 120 L136 114', role: 'soft' },
    { d: 'M64 156 V170 M96 156 V170', role: 'soft' },
    {
      d: 'M111 94 l4 -3 M112 106 l5 -3 M112 118 l5 -3 M112 130 l5 -3',
      role: 'ambient',
    },
    { d: 'M102 152 l5 -3 M100 164 l5 -3 M98 176 l5 -3', role: 'ambient' },
    shadow(82, 188, 48),
  ],
  // Jeitsari's seven game copies, entrusted to the auction in chapter 121.
  // Plain cases keep the stack free of lettering, logos and later clothing.
  'jeitsari': [
    { d: 'M31 66 L82 36 L130 69 L79 100 Z', role: 'accent' },
    { d: 'M31 66 V76 L79 110 L130 79 V69 M79 100 V110', role: 'soft' },
    { d: 'M31 78 V88 L79 122 L130 91 V81', role: 'soft' },
    { d: 'M31 90 V100 L79 134 L130 103 V93', role: 'soft' },
    { d: 'M31 102 V112 L79 146 L130 115 V105', role: 'soft' },
    { d: 'M31 114 V124 L79 158 L130 127 V117', role: 'soft' },
    { d: 'M31 126 V136 L79 170 L130 139 V129', role: 'soft' },
    { d: 'M31 138 V148 L79 182 L130 151 V141', role: 'soft' },
    {
      d: 'M79 112 V120 M79 124 V132 M79 136 V144 M79 148 V156 M79 160 V168 M79 172 V180',
      role: 'soft',
    },
    { d: 'M44 66 L82 44 L116 68 L79 90 Z', role: 'soft' },
    {
      d: 'M103 88 l6 -4 M103 100 l6 -4 M103 112 l6 -4 M103 124 l6 -4 M103 136 l6 -4 M103 148 l6 -4 M103 160 l6 -4',
      role: 'ambient',
    },
    shadow(80, 191, 53),
  ],
  // The card Michael hands Killua in chapter 148, held out from the plain
  // sweater of his appearance. A blank card: no stripe, chip or lettering.
  'michael': [
    { d: 'M50.7 85 L62 38 L130 56 L118 106 L64.2 91.8', role: 'accent' },
    { d: 'M130 56 L133 60 L121 110 L118 106 M121 110 L80 99.1', role: 'soft' },
    { d: 'M4 184 L28 136 M52 144 L26 196' },
    { d: 'M27 124 L56 138 L50 152 L21 138 Z' },
    {
      d: 'M33 128 L27 141 M40 131.4 L34 144.4 M47 134.8 L41 147.8',
      role: 'soft',
    },
    { d: 'M38 99 L65 72 C70 67 79 73 74 82 L47 109' },
    {
      d: 'M29 125 Q30 112 39 102 M70 93.3 Q80 96 79 103 Q78 108 70 108 Q79 112 76 119 Q72 125 62 121 Q63 130 56 138',
    },
    { d: 'M70 108 Q66 107 64 104 M62 121 Q58 119 57 116', role: 'soft' },
    { d: 'M12 168 l6 3 M18 156 l6 3 M24 144 l4 2', role: 'ambient' },
    { d: 'M36 160 Q30 170 34 182', role: 'soft' },
  ],
  // Biscuit's sleeveless dress at her introduction, chapter 137 / episode
  // 62. The skirt turns away on the right; no later form or Nen is shown.
  'biscuit-krueger': [
    {
      d: 'M60 38 L69 38 Q80 50 91 38 H100 L108 70 L98 90 L116 154 Q80 172 42 154 L62 90 L52 70 Z',
    },
    { d: 'M60 38 Q54 58 62 70 M100 38 Q106 58 98 70', role: 'soft' },
    { d: 'M62 90 Q80 98 98 90 L100 98 Q80 106 60 98 Z', role: 'soft' },
    { d: 'M42 154 L44 164 Q82 180 122 162 L116 154', role: 'accent' },
    { d: 'M100 98 Q113 124 122 162 M116 154 Q102 162 82 164', role: 'soft' },
    {
      d: 'M66 102 Q60 126 58 156 M80 106 V162 M94 104 Q98 130 102 160',
      role: 'soft',
    },
    { d: 'M68 54 Q80 60 92 54 M68 76 Q80 82 92 76', role: 'soft' },
    {
      d: 'M108 126 l5 -3 M112 138 l5 -3 M116 150 l5 -3 M108 164 l7 -4',
      role: 'ambient',
    },
    { d: 'M63 114 l4 -4 M60 130 l4 -4 M57 146 l4 -4', role: 'ambient' },
    shadow(82, 186, 48),
  ],
  // Binolt's scissors from chapter 138 / episode 63: open steel blades,
  // rounded grips and a narrow far edge. No hair or Nen is drawn.
  'binolt': [
    { d: 'M74 118 L42 40 Q38 32 44 28 L88 110 Z' },
    { d: 'M84 118 L124 44 Q130 34 126 28 L72 110 Z' },
    { d: 'M44 28 L78 108 M126 28 L82 108', role: 'soft' },
    { d: 'M42 40 L40 44 L70 118 M124 44 L128 46 L88 120', role: 'soft' },
    { d: 'M74 116 L61 140 M86 116 L98 140' },
    { d: ellipse(51, 154, 17, 22), role: 'accent' },
    { d: ellipse(109, 154, 17, 22), role: 'accent' },
    { d: ellipse(51, 154, 10, 15), role: 'soft' },
    { d: ellipse(109, 154, 10, 15), role: 'soft' },
    { d: circle(80, 113, 7), role: 'soft' },
    {
      d: 'M77 113 H83 M119 142 l5 -2 M121 154 l5 -2 M119 166 l4 -2',
      role: 'ambient',
    },
    shadow(80, 188, 48),
  ],
  // Kosofftro's broad-brimmed hat, described with arrow-patterned clothes
  // in chapter 132. The original arrow marks carry the hat's accent.
  'kosofftro': [
    { d: ellipse(80, 132, 59, 17) },
    { d: 'M21 132 V137 C42 159 118 159 139 137 V132', role: 'soft' },
    { d: 'M44 130 L48 70 Q80 53 110 70 L116 130' },
    { d: 'M48 70 Q80 87 110 70 M46 112 Q80 129 114 112', role: 'soft' },
    { d: 'M44 130 Q80 148 116 130 M104 76 L110 124', role: 'soft' },
    {
      d: 'M59 86 V108 M53 101 L59 108 L65 103 M80 91 V114 M74 107 L80 114 L86 107 M99 86 V108 M93 103 L99 108 L105 101',
      role: 'accent',
    },
    {
      d: 'M112 84 l4 -2 M113 96 l5 -3 M115 108 l5 -3 M117 120 l5 -3',
      role: 'ambient',
    },
    {
      d: 'M30 135 l7 -3 M44 143 l7 -3 M60 148 l7 -3 M116 143 l7 -3',
      role: 'ambient',
    },
    { d: 'M48 156 Q80 166 112 156', role: 'soft' },
    shadow(80, 182, 52),
  ],
  // Antokiba's posted reward notices, described on arrival in episode 61.
  // Blank sheets avoid copying lettering, card images or official marks.
  'antokiba': [
    { d: 'M34 46 L116 36 L127 43 V144 L45 154 L34 146 Z' },
    { d: 'M34 46 L45 53 L127 43 M45 53 V154', role: 'soft' },
    { d: 'M55 67 L91 63 V100 L55 104 Z', role: 'accent' },
    { d: 'M96 62 L117 59 V86 L96 89 Z', role: 'soft' },
    { d: 'M55 112 L79 109 V137 L55 140 Z', role: 'soft' },
    { d: 'M86 103 L117 99 V132 L86 136 Z', role: 'soft' },
    { d: 'M56 104 L60 100 M91 63 L87 67 M86 136 L91 131', role: 'soft' },
    {
      d: 'M34 70 l7 4 M34 88 l7 4 M34 106 l7 4 M34 124 l7 4 M34 140 l7 4',
      role: 'ambient',
    },
    {
      d: 'M54 153 V174 L63 178 V152 M105 146 V168 L114 171 V145',
      role: 'soft',
    },
    { d: 'M28 177 H129', role: 'ambient' },
    shadow(80, 186, 56),
  ],
  // Three spell cards bought on the first Masadora visit, chapter 140 /
  // episode 63. Plain cards stand for its shop without copying card artwork.
  'masadora': [
    { d: 'M50 52 L96 30 L139 130 L124 138' },
    { d: 'M96 30 L99 33 L142 132 L127 141', role: 'soft' },
    { d: 'M38 60 L82 44 L124 147 L106 154' },
    { d: 'M82 44 L85 46 L127 149 L109 157', role: 'soft' },
    { d: 'M24 71 L73 60 L101 169 L52 181 Z', role: 'accent' },
    {
      d: 'M73 60 L77 63 L105 172 L56 184 L52 181 M101 169 L105 172',
      role: 'soft',
    },
    { d: 'M35 79 L67 72 L90 161 L57 169 Z', role: 'soft' },
    { d: 'M102 148 l4 -1 M105 160 l4 -1 M108 172 l4 -1', role: 'ambient' },
    { d: 'M122 121 l4 -1 M127 133 l4 -1 M131 145 l4 -1', role: 'ambient' },
    { d: 'M54 56 L92 38 M43 65 L78 53', role: 'soft' },
    shadow(80, 192, 58),
  ],
  // The reception tower already visited in chapter 127, named Shiso Tree
  // on chapter 134's map: a straw roof, central pillar and descending stairs.
  'shiso-tree': [
    { d: 'M48 68 L80 35 L114 68 L106 79 H54 Z' },
    {
      d: 'M48 68 Q80 81 114 68 M55 62 L62 72 M65 51 L74 75 M80 35 V77 M94 49 L88 75 M105 59 L99 73',
      role: 'soft',
    },
    { d: 'M55 79 V106 L64 112 H101 L107 106 V79', role: 'soft' },
    { d: 'M71 109 V145 M88 110 V145', role: 'accent' },
    { d: 'M59 110 V144 M102 110 V144 M65 112 V147 M97 112 V147', role: 'soft' },
    { d: 'M66 88 Q79 79 94 88 V101 H66 Z M81 84 V101', role: 'soft' },
    {
      d: 'M90 115 L105 119 L94 124 L72 126 L60 132 L73 136 L91 137 L101 143',
      role: 'soft',
    },
    {
      d: 'M90 119 L105 123 L94 128 M60 132 V136 L73 140 L91 141 L101 147',
      role: 'soft',
    },
    { d: 'M98 86 l5 -3 M98 94 l5 -3 M98 102 l5 -3', role: 'ambient' },
    { d: 'M49 145 H112 M26 150 H134', role: 'ambient' },
    shadow(80, 159, 49),
  ],
  'puhat': [...PUHAT_JACKET, shadow(82, 186, 51)],
} satisfies Drawings

export const greedIslandRedrawn: Redrawings = {
  razor: [
    {
      episode: 69,
      chapter: 161,
      // Episode 69 / chapter 161: one of the 14 Devils he summons for the
      // dodgeball match holds the same ball: a domed head set with small
      // balls, shoulders and two white hands. No number and no face.
      value: [
        ...RAZOR_BALL,
        ...RAZOR_AURA_BALL,
        { d: 'M60 62 C60 34 100 34 100 62 Q80 70 60 62' },
        {
          d: `${circle(64, 42, 4)} ${circle(80, 33, 4)} ${circle(96, 42, 4)}`,
          role: 'soft',
        },
        { d: 'M70 66 L68 76 L38 84 L36 110 M90 66 L92 76 L122 84 L124 110' },
        {
          d: 'M36 110 Q44 102 52 106 L56 114 M124 110 Q116 102 108 106 L104 114',
          role: 'soft',
        },
        { d: 'M36 110 Q38 124 50 128 M124 110 Q122 124 110 128', role: 'soft' },
        shadow(80, 176, 40),
      ],
    },
  ],
  puhat: [
    {
      episode: 64,
      chapter: 143,
      // The same open jacket laid on its side for the death reported in
      // episode 64 and chapter 143. The empty collar and pockets remain.
      value: [
        ...moved(
          PUHAT_JACKET,
          'translate(80 125) rotate(-70) scale(0.85 0.65) translate(-82 -105)',
        ),
        shadow(80, 185, 52),
      ],
    },
  ],
}
