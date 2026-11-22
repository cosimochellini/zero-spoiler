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

/**
 * The Blue Planet, Biscuit's gem: a completely spherical stone, its far side
 * hatched. The bands stand for the light it reflects like a planet's moving
 * atmosphere; the highlight is in tint. The glint is a convention.
 */
const BISCUIT_GEM: Stroke[] = [
  { d: circle(80, 100, 36) },
  { d: 'M52 80 Q68 62 96 66 Q70 70 58 90 Z', role: 'accent' },
  { d: 'M45 104 C58 96 70 112 84 104 C96 97 106 102 116 98', role: 'soft' },
  { d: 'M50 122 C62 116 74 126 88 120 C98 116 106 118 111 116', role: 'soft' },
  { d: 'M98 69 Q124 100 98 131', role: 'soft' },
  { d: 'M108 112 l6 -4 M103 123 l6 -4 M95 131 l6 -4', role: 'ambient' },
  { d: 'M36 54 V68 M29 61 H43', role: 'soft' },
]

/**
 * Magical Esthetician, chapter 171 / episode 72: one plain hand of Cookie,
 * the masseuse Biscuit forms out of aura, with drops of her aura lotion as
 * open lines. No figure and no face.
 */
const BISCUIT_COOKIE: Stroke[] = [
  {
    d: 'M126 14 V40 Q116 44 112 54 Q111 59 116 57 L125 50 V66 Q128 72 131 66 V70 Q134 76 137 70 V69 Q140 75 143 69 V66 Q146 71 149 65 V40 L152 14',
  },
  { d: 'M131 52 V66 M137 53 V69 M143 52 V68', role: 'soft' },
  {
    d: 'M128 84 Q125 90 128 92 Q131 90 128 84 M140 88 Q137 94 140 96 Q143 94 140 88 M134 102 Q131 108 134 110 Q137 108 134 102',
    role: 'ambient',
  },
]

/** The gem with Cookie beside it: her stage, and her look again after it. */
const BISCUIT_WITH_COOKIE: Stroke[] = [
  ...BISCUIT_GEM,
  ...BISCUIT_COOKIE,
  shadow(80, 152, 30),
]

/** Kosofftro's broad-brimmed hat, the arrow motifs on its crown in tint. */
const KOSOFFTRO_HAT: Stroke[] = [
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
  // The upper half of Tsezguerra's Air Force-style combat suit, chapter
  // 121 / episode 59, turned 3/4: the collar in tint, the zip and two chest
  // pockets, the far shoulder and sleeve hatched as they turn away. The
  // wiki names only the style; zip and pockets are a flight suit's usual.
  'tsezguerra': [
    {
      d: 'M62 46 L34 58 Q22 64 20 80 L14 150 L32 154 L40 96 L42 168 H112 L114 100 L120 140 L134 136 L128 76 Q126 62 116 56 L100 46',
    },
    {
      d: 'M62 46 L56 66 L76 76 L82 58 M100 46 L106 64 L92 72 L82 58 M62 46 Q82 38 100 46',
      role: 'accent',
    },
    { d: 'M86 70 V168 M82 76 H86 M82 90 H86', role: 'soft' },
    { d: 'M48 88 H72 V114 H48 Z M48 94 H72', role: 'soft' },
    { d: 'M96 88 H110 L109 112 H96 Z M96 94 H110', role: 'soft' },
    { d: 'M16 140 L34 144 M120 132 L133 128', role: 'soft' },
    { d: 'M40 96 Q41 84 38 72 M114 100 Q114 86 116 74', role: 'soft' },
    {
      d: 'M114 112 l5 -3 M114 124 l5 -3 M114 136 l5 -3 M114 148 l5 -3 M114 160 l5 -3',
      role: 'ambient',
    },
    { d: 'M122 92 l5 -3 M123 104 l5 -3 M124 116 l5 -3', role: 'ambient' },
    { d: 'M42 150 Q78 156 112 150', role: 'soft' },
    shadow(78, 184, 46),
  ],
  // Jeitsari's seven Greed Island cartridges, entrusted to the auction in
  // chapter 121, stacked a little askew so each shows its edge. The top one
  // has its label recess in tint and its connector edge; both are a
  // cartridge's usual shape, with no lettering or logo.
  'jeitsari': [
    {
      d: 'M36 80 L90 56 L128 74 L74 98 Z M36 80 V88 L74 106 L128 82 V74 M74 98 V106',
    },
    { d: 'M86.1 86.4 L116.8 72.7 L92.5 61.2 L61.7 74.8 Z', role: 'accent' },
    {
      d: 'M67.7 97 V102 M61.3 94 V99 M55 91 V96 M48.7 88 V93 M42.3 85 V90',
      role: 'soft',
    },
    {
      d: 'M128 78.5 L130.8 79.6 L128 81 M112.6 88.8 L78.1 106.4 L75.5 105.3 M53.2 96.2 L39.2 90.4 V98.4 M78.1 106.4 V114.4 M130.8 79.6 V87.6 M39.2 98.4 L78.1 114.4 L130.8 87.6 M33.9 94.4 L39.2 92.3 M124.5 90.8 L126.1 91.6 L110.7 97.8 M73.9 112.7 L71.3 113.7 L51.2 103.3 M39.2 97.1 L33.9 94.4 V102.4 M71.3 113.7 V121.7 M126.1 91.6 V99.6 M33.9 102.4 L71.3 121.7 L126.1 99.6',
      role: 'soft',
    },
    {
      d: 'M126.1 94.8 L129.9 96.4 L126.1 98.2 M109.8 106.2 L76.7 122.3 L73.4 120.8 M50.2 110.8 L38.1 105.6 V113.6 M76.7 122.3 V130.3 M129.9 96.4 V104.4 M38.1 113.6 L76.7 130.3 L129.9 104.4 M32.9 109.6 L38.1 107.6 M123.4 107.5 L125.1 108.4 L108.8 114.7 M72.7 128.5 L69.9 129.6 L49.2 118.4 M38.1 112.4 L32.9 109.6 V117.6 M69.9 129.6 V137.6 M125.1 108.4 V116.4 M32.9 117.6 L69.9 137.6 L125.1 116.4',
      role: 'soft',
    },
    {
      d: 'M125.1 111.5 L128.9 113.2 L125.1 115 M107.8 123 L75.4 138.1 L72.2 136.7 M48.2 125.9 L37.1 120.8 V128.8 M75.4 138.1 V146.1 M128.9 113.2 V121.2 M37.1 128.8 L75.4 146.1 L128.9 121.2 M34.9 126.4 L37.1 125.5 M125.5 122.8 L127.1 123.6 L102.3 133.6 M73.4 145.2 L72.3 145.7 L57.2 137.9 M37.1 127.5 L34.9 126.4 V134.4 M72.3 145.7 V153.7 M127.1 123.6 V131.6 M34.9 134.4 L72.3 153.7 L127.1 131.6',
      role: 'soft',
    },
    {
      d: 'M106.4 85.6 l3 4 M112.9 82.7 l3 4 M119.4 79.8 l3 4',
      role: 'ambient',
    },
    shadow(80, 176, 52),
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
  // The Blue Planet, the gem Biscuit tells Gon in chapter 138 / episode 63
  // she came to Greed Island for, and turns from its card into the stone in
  // chapter 185 / episode 75. No Nen and no later form are shown.
  'biscuit-krueger': [...BISCUIT_GEM, shadow(80, 152, 30)],
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
    ...KOSOFFTRO_HAT,
    { d: 'M48 156 Q80 166 112 156', role: 'soft' },
    shadow(80, 182, 52),
  ],
  // The reward posters Gon and Killua find on reaching Antokiba in chapter
  // 129 / episode 61, on a board seen 3/4, and the monthly contest list where
  // Gon reads that September is rock-paper-scissors. The scissors hand in
  // tint stands for that contest: a convention, not the list's own artwork.
  'antokiba': [
    { d: 'M34 46 L116 36 L127 43 V144 L45 154 L34 146 Z' },
    { d: 'M34 46 L45 53 L127 43 M45 53 V154', role: 'soft' },
    { d: 'M54 64.9 L96 59.8 L96 111.8 L54 116.9 Z', role: 'soft' },
    {
      d: 'M68 94.2 L62 73.9 Q61 70 65 68.6 Q68 68.2 69 72.1 L73 90.6 L78 69 Q79 64.9 83 65.4 Q86 66 85 70.1 L80 91.7 Q86 90 87 94.9 Q91 96.4 88 101.8 Q90 106.5 84 108.2 L69 111.1 Q64 110.7 65 103.6 Q64 96.7 68 94.2 Z',
      role: 'accent',
    },
    {
      d: 'M65 103.6 Q72 104.7 80 98.7 M80 91.7 Q82 94.5 87 94.9',
      role: 'soft',
    },
    {
      d: 'M101 55.2 L120 52.9 L120 78.9 L101 81.2 Z M101 89.2 L120 86.9 L120 110.9 L101 113.2 Z M54 124.9 L84 121.2 L84 139.2 L54 142.9 Z M90 122.5 L120 118.9 L120 132.9 L90 136.5 Z',
      role: 'soft',
    },
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
  // Three spell cards, as Masadora's card shop sells them, chapter 140 /
  // episode 63, fanned from one corner like a hand of cards, each with its
  // thin edge. The front card's inner frame is in tint; the frames are a
  // card's usual border, not G.I card artwork.
  'masadora': [
    {
      d: 'M14.6 92.2 L41 79.3 M53.4 73.2 L65 67.6 L67.2 72.3 M70.2 163 L53.2 171.3 L49.9 164.4 M49.2 162.9 L48.6 161.8 M46.4 157.4 L14.6 92.2 M40.6 74.1 L69.9 72.1 M83.7 71.1 L96.5 70.2 L96.9 75.4 M68.5 160.4 L46.8 161.9 L46 151.4 M45.7 146.5 L40.6 74.1',
    },
    { d: 'M71.5 67.2 L124.7 84.5 L97.5 168.2 L44.3 150.9 L71.5 67.2' },
    {
      d: 'M75.3 74.7 L117.2 88.3 L93.7 160.6 L51.8 147 L75.3 74.7',
      role: 'accent',
    },
    {
      d: 'M22.7 94.9 L41.4 85.8 M45.3 141.4 L22.7 94.9 M47 79.7 L67.9 78.3 M50.6 131.3 L47 79.7',
      role: 'soft',
    },
    {
      d: 'M67.5 70.1 L68.5 72.2 M77.3 163.3 L55.7 173.8 M65 67.6 L67.5 70.1 M53.2 171.3 L55.7 173.8 M99 72.7 L99.2 76.2 M104.8 156 L105.1 160.5 L103.3 160.7 M75.3 162.6 L49.3 164.4 M96.5 70.2 L99 72.7 M46.8 161.9 L49.3 164.4 M127.2 87 L100 170.7 L46.8 153.4 M124.7 84.5 L127.2 87 M44.3 150.9 L46.8 153.4',
      role: 'soft',
    },
    { d: 'M120 96 l5 -2 M115 112 l5 -2 M110 128 l5 -2', role: 'ambient' },
    shadow(78, 184, 48),
  ],
  // The Starting Point's tower, where Gon enters the game in chapter 127 /
  // episode 60, named Shiso Tree on chapter 134's map. Its outside of wood,
  // stone and straw: the roof and upper room in 3/4, the far side hatched,
  // the stair winding down round the large central pillar (in tint) and the
  // two front pillars of the four smaller ones.
  'shiso-tree': [
    { d: 'M42 68 L82 24 L122 62 L74 80 Z' },
    {
      d: 'M82 24 L74 80 M60 50 L56 74 M70 38 L64 77 M90 40 L92 74 M102 50 L106 70',
      role: 'soft',
    },
    { d: 'M100 52 l6 -2 M104 60 l8 -3 M108 68 l7 -3', role: 'ambient' },
    { d: 'M48 72 V98 L74 106 L116 92 V66 M74 80 V106' },
    { d: 'M100 80 l6 -3 M106 84 l6 -3 M100 92 l6 -3', role: 'ambient' },
    {
      d: 'M76 105 V132.1 M76 137.1 V150 M86 102 V130.5 M86 135.5 V150',
      role: 'accent',
    },
    { d: 'M52 99 V150 M112 94 V150', role: 'soft' },
    {
      d: 'M107 112 C107 116.5 104.2 121 99.4 124.4 C94.6 127.9 87.8 130.4 81 131.5 C74.2 132.6 67.4 132.3 62.6 130.9 C57.8 129.6 55 127.3 55 125 M55 125 C55 123 57.1 120.9 60.9 119.6 C64.7 118.2 70.1 117.6 76 117.9 M86 119.5 C91.9 121.1 97.3 123.6 101.1 126.9 C104.9 130.1 107 134.1 107 138 C107 140.7 106 143.4 104.2 145.8 M107 112 V117 M104.2 145.8 V150.8',
    },
    {
      d: 'M107 117 C107 121.5 104.2 126 99.4 129.4 C94.6 132.9 87.8 135.4 81 136.5 C74.2 137.6 67.4 137.3 62.6 135.9 C57.8 134.6 55 132.3 55 130 M55 130 C55 128 57.1 125.9 60.9 124.6 C64.7 123.2 70.1 122.6 76 122.9 M86 124.5 C91.9 126.1 97.3 128.6 101.1 131.9 C104.9 135.1 107 139.1 107 143 C107 145.7 106 148.4 104.2 150.8',
      role: 'soft',
    },
    { d: 'M20 152 H140', role: 'ambient' },
    shadow(80, 162, 50),
  ],
  'puhat': [...PUHAT_JACKET, shadow(82, 186, 51)],
} satisfies Drawings

export const greedIslandRedrawn: Redrawings = {
  'razor': [
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
  'puhat': [
    {
      episode: 64,
      chapter: 143,
      // Episode 64 / chapter 143, his death: the same open jacket, empty,
      // dropped on the ground and tipped a little; the lapels still read.
      value: [
        ...moved(
          PUHAT_JACKET,
          'translate(84 148) rotate(-16) scale(0.72) translate(-82 -172)',
        ),
        { d: 'M8 150 H152', role: 'ambient' },
        shadow(78, 160, 50),
      ],
    },
  ],
  'biscuit-krueger': [
    {
      episode: 72,
      chapter: 171,
      // Episode 72 / chapter 171: she shows Killua her Hatsu, Magical
      // Esthetician, and Cookie joins the gem.
      value: BISCUIT_WITH_COOKIE,
    },
    {
      episode: 73,
      chapter: 177,
      // Episode 73 / chapter 177: she reverts to her true form, a massive,
      // muscular woman, and knocks Bara out with one punch. Her huge bare
      // fist, knuckles soft and far side hatched, now carries the gem;
      // Cookie stays. Gloves go only with her younger form, so none here.
      value: [
        ...moved(
          BISCUIT_GEM,
          'translate(78 80) scale(0.75) translate(-80 -100)',
        ),
        ...BISCUIT_COOKIE,
        {
          d: 'M30 196 V156 Q22 144 28 132 Q30 118 44 118 Q50 110 60 114 Q68 108 78 113 Q88 108 98 114 Q108 110 116 118 Q130 118 132 132 L134 160 Q132 176 120 182 V196',
        },
        {
          d: 'M60 114 Q58 126 60 136 M78 113 V136 M98 114 Q100 126 98 136 M44 118 Q42 128 46 138',
          role: 'soft',
        },
        {
          d: 'M28 140 Q30 136 40 138 Q70 142 96 136 Q110 134 112 142 Q112 150 100 152 Q70 156 34 152',
          role: 'soft',
        },
        {
          d: 'M122 132 l7 -4 M122 146 l8 -4 M122 160 l8 -4 M116 176 l6 -4',
          role: 'ambient',
        },
      ],
    },
    {
      episode: 74,
      chapter: 181,
      // Episode 74 / chapter 181, her next scene after the fight with Bara,
      // with Killua and the captured Bombers: the true form was only for the
      // fight, so the drawing goes back to the gem with Cookie. The wiki
      // never says when she turns small again; this is her first scene after.
      value: BISCUIT_WITH_COOKIE,
    },
  ],
  // Kosofftro is absent from the 2011 anime, so the stage is the manga's
  // alone (chapter 144, filed at episode 148).
  'kosofftro': [
    {
      episode: 148,
      chapter: 144,
      source: 'chapter',
      // Chapter 144: the Bombers set off every bomb planted on the
      // alliance, and he is presumed dead with it. His hat lies dropped and
      // empty, tipped on its brim on the ground of the forest where he sat.
      value: [
        ...moved(KOSOFFTRO_HAT, 'translate(2 -15.7) rotate(-28 80 132)'),
        { d: 'M8 150 H152', role: 'ambient' },
        shadow(82, 158, 54),
      ],
    },
  ],
}
