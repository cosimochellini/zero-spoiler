import type { Drawings, Redrawings, Stroke } from '~/data/art/stroke'
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
  shadow(82, 186, 51),
]

export const GREED_ISLAND_DRAWINGS = {
  // Jitonoda is named in chapter 129's TV news report. A plain set with a
  // blank screen and rabbit ears; no portrait, lettering or copied page.
  'jitonoda': [
    { d: 'M30 62 H128 L132 142 H34 Z' },
    { d: 'M30 62 L24 69 L28 149 L34 142 M28 149 H126 L132 142', role: 'soft' },
    { d: 'M42 73 H117 L120 130 H45 Z', role: 'accent' },
    { d: 'M49 82 Q66 78 78 84 M55 118 Q76 112 108 120', role: 'soft' },
    { d: 'M52 62 L36 34 M106 62 L122 34', role: 'soft' },
    { d: 'M60 142 V152 M100 142 V152', role: 'soft' },
    { d: 'M126 96 l4 0 M126 106 l4 0', role: 'ambient' },
    { d: 'M20 84 l5 -3 M18 100 l5 -3 M20 116 l5 -3', role: 'ambient' },
    shadow(80, 166, 48),
  ],
  // Dwun's cigarette, from his chapter 184 appearance description, viewed
  // obliquely. Plain paper and an ash tip; no face, logo or invented ashtray.
  'dwun': [
    { d: 'M31 131 L114 61 M39 143 L124 74' },
    { d: 'M31 131 C25 137 34 148 39 143 M114 61 C120 57 130 68 124 74' },
    { d: 'M111 64 Q120 63 121 76', role: 'accent' },
    { d: 'M106 69 L115 80 M101 73 L111 84', role: 'soft' },
    { d: 'M38 133 L103 78 M42 137 L105 83', role: 'soft' },
    { d: 'M115 65 l5 7 M118 63 l6 7', role: 'ambient' },
    { d: 'M46 125 l4 4 M59 114 l4 4 M72 103 l4 4', role: 'ambient' },
    shadow(78, 166, 45),
  ],
  // List's small tie and overall straps, chapter 184's named introduction.
  // The bow-free knot and the two buckles carry the object's volume.
  'list': [
    { d: 'M65 45 L91 45 L97 57 L83 72 L67 60 Z', role: 'accent' },
    { d: 'M91 45 L99 49 L104 60 L90 74 L83 72', role: 'soft' },
    { d: 'M72 64 L56 130 L77 154 L101 132 L86 68', role: 'accent' },
    {
      d: 'M86 68 L94 71 L108 130 L101 132 M77 154 L85 157 L108 130',
      role: 'soft',
    },
    { d: 'M78 75 L69 124 M67 133 L77 143', role: 'soft' },
    { d: 'M31 44 L37 138 H50 L44 44 M114 42 L120 136 H133 L127 42' },
    { d: 'M33 111 H51 V132 H34 Z M116 109 H134 V130 H117 Z', role: 'soft' },
    { d: 'M38 117 H46 V126 H39 Z M121 115 H129 V124 H122 Z', role: 'soft' },
    { d: 'M97 102 l4 -3 M99 114 l5 -3 M101 126 l4 -3', role: 'ambient' },
    shadow(81, 181, 51),
  ],
  // Eeta's sleeveless robe, chapter 184 identifies the entrance attendant
  // seen in 127. The eye motifs are omitted, as are helmet and face.
  'eta': [
    {
      d: 'M58 39 L68 39 Q80 52 92 39 H102 L106 77 L96 90 L115 159 Q80 171 43 159 L62 90 L53 77 Z',
    },
    { d: 'M58 39 Q56 63 62 76 M102 39 Q104 63 98 76', role: 'soft' },
    { d: 'M68 39 Q80 52 92 39 M70 45 Q80 54 90 45', role: 'accent' },
    { d: 'M43 159 L47 168 Q82 181 121 166 L115 159', role: 'soft' },
    { d: 'M64 94 L56 154 M96 94 L107 156 M80 105 V163', role: 'soft' },
    {
      d: 'M108 130 l5 -3 M111 141 l5 -3 M114 152 l5 -3 M111 168 l6 -3',
      role: 'ambient',
    },
    { d: 'M59 116 l4 -4 M56 133 l4 -4', role: 'ambient' },
    shadow(81, 187, 49),
  ],
  // Elena's square-necked robe and thin choker from her appearance
  // description, named in chapter 184. No helmet motifs or face.
  'elena': [
    {
      d: 'M58 58 H69 V78 H94 V58 H105 L111 98 L98 108 L117 166 H43 L61 108 L51 98 Z',
    },
    { d: 'M105 58 L111 62 L117 100 L105 113 L124 171 L117 166', role: 'soft' },
    { d: 'M43 166 L48 172 H124 V171', role: 'soft' },
    { d: ellipse(81, 40, 23, 5), role: 'accent' },
    { d: 'M58 40 V45 C60 52 102 52 104 45 V40', role: 'soft' },
    {
      d: 'M70 79 H93 V84 H70 Z M64 110 L56 158 M97 111 L108 158',
      role: 'soft',
    },
    { d: 'M80 100 V164 M61 145 Q71 139 78 146', role: 'soft' },
    { d: 'M112 130 l5 -3 M116 143 l5 -3 M119 156 l5 -3', role: 'ambient' },
    shadow(82, 187, 49),
  ],
  // The envelope delivered by the owl in chapter 183 / episode 75,
  // inviting Gon to Limeiro's castle. No seal, text or copied architecture.
  'limeiro': [
    { d: 'M24 78 L113 60 L137 125 L46 146 Z' },
    { d: 'M24 78 L78 104 L113 60', role: 'accent' },
    { d: 'M46 146 L67 101 M137 125 L91 96', role: 'soft' },
    { d: 'M46 146 V153 L138 132 L137 125 M24 78 V85 L46 153', role: 'soft' },
    { d: 'M31 81 L77 103 L107 67', role: 'soft' },
    {
      d: 'M54 146 l6 -3 M71 142 l6 -3 M88 138 l6 -3 M105 134 l6 -3 M122 130 l6 -3',
      role: 'ambient',
    },
    { d: 'M8 150 H35 M140 150 H154', role: 'ambient' },
    shadow(81, 158, 55),
  ],
  // The restaurant's spaghetti challenge, chapter 129; its name comes
  // from the entrance sign described by the wiki, which is not reproduced.
  'caveau-de-riquewihr': [
    { d: ellipse(79, 129, 65, 19) },
    { d: 'M14 129 V135 C23 160 136 160 144 135 V129', role: 'soft' },
    { d: ellipse(79, 126, 53, 12), role: 'soft' },
    {
      d: 'M32 125 C32 105 51 95 76 97 C103 92 122 106 127 124',
      role: 'accent',
    },
    { d: 'M42 119 C37 108 62 104 73 115 S102 124 114 110', role: 'soft' },
    {
      d: 'M42 128 C47 112 79 124 79 108 M61 99 C47 116 93 107 103 122',
      role: 'soft',
    },
    { d: 'M49 126 C56 132 68 118 81 126 S110 131 118 122', role: 'soft' },
    {
      d: 'M28 136 l6 -3 M44 141 l6 -3 M62 143 l6 -3 M104 141 l6 -3 M121 137 l6 -3',
      role: 'ambient',
    },
    { d: 'M8 150 H150', role: 'ambient' },
    shadow(79, 158, 62),
  ],

  // Genthru's angular spectacles, folded in three-quarter view. Chapter
  // 144 names him; the appearance description cites the glasses at 130.
  'genthru': [
    { d: 'M22 100 L63 91 L69 119 L28 130 Z' },
    { d: 'M82 87 L123 78 L130 106 L89 116 Z' },
    { d: 'M63 96 Q72 88 83 92', role: 'accent' },
    { d: 'M25 104 L60 96 L65 115 L31 124 Z', role: 'soft' },
    { d: 'M86 91 L120 84 L125 102 L92 111 Z', role: 'soft' },
    { d: 'M22 100 L40 65 L49 62 M123 78 L139 52 L146 54', role: 'soft' },
    {
      d: 'M28 130 L31 134 L72 123 L69 119 M89 116 L92 120 L133 109 L130 106',
      role: 'soft',
    },
    { d: 'M40 65 L45 68 L27 103 M139 52 L143 56 L127 82', role: 'soft' },
    { d: 'M36 115 L48 104 M96 101 L107 91', role: 'ambient' },
    { d: 'M52 124 l6 -2 M107 111 l6 -2', role: 'ambient' },
    shadow(82, 159, 57),
  ],
  // Jispa's plain tank top, chapter 131 appearance, folded after the death
  // reported by name in chapter 144. He is already dead when filed.
  'jispa': [
    { d: 'M29 108 L104 97 L135 123 L61 137 Z' },
    { d: 'M29 108 V121 L61 151 L135 136 V123 M61 137 V151' },
    { d: 'M49 105 L57 116 Q72 125 88 111 L96 99', role: 'accent' },
    { d: 'M55 105 L62 114 Q72 119 81 111 L87 101', role: 'soft' },
    { d: 'M36 110 L53 126 L44 130 M110 101 L116 115 L128 120', role: 'soft' },
    { d: 'M61 143 L129 130 M36 118 L60 143', role: 'soft' },
    { d: 'M68 130 L107 122 M75 134 L115 126', role: 'soft' },
    {
      d: 'M69 145 l6 -3 M85 142 l6 -3 M101 139 l6 -3 M117 136 l6 -3',
      role: 'ambient',
    },
    shadow(82, 173, 55),
  ],
  // Razor's red shorts from his first encounter with the Troupe, chapter
  // 145; no ball, numbered uniform or later Nen construct is shown.
  'razor': [
    { d: 'M39 62 Q80 74 121 62 L132 153 L94 159 L79 114 L66 159 L28 153 Z' },
    { d: 'M39 62 Q80 51 121 62 L120 72 Q80 83 38 72 Z', role: 'accent' },
    { d: 'M44 78 L37 148 M116 78 L124 148', role: 'soft' },
    { d: 'M28 153 L29 161 L68 166 L66 159 M94 159 L96 166 L133 160 L132 153' },
    { d: 'M79 114 L81 82 M75 86 L72 109 M87 86 L93 111', role: 'soft' },
    { d: 'M42 88 Q49 107 43 123 M117 87 Q109 108 119 125', role: 'soft' },
    { d: 'M78 75 L74 94 M83 75 L89 94', role: 'soft' },
    { d: 'M111 129 l7 -4 M113 140 l8 -4 M116 151 l8 -4', role: 'ambient' },
    { d: 'M39 142 L57 145 M103 146 L121 142', role: 'soft' },
    shadow(81, 183, 51),
  ],
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
  'puhat': PUHAT_JACKET,
} satisfies Drawings

export const greedIslandRedrawn: Redrawings = {
  puhat: [
    {
      episode: 64,
      chapter: 143,
      // The same jacket folded flat after his death; no invented grave or
      // injury on the object. The wiki's episode 64 synopsis shows the death.
      value: [
        { d: 'M32 114 L111 102 L134 126 L55 141 Z' },
        { d: 'M55 141 V153 L134 138 V126 M32 114 V126 L55 153' },
        { d: 'M50 111 L66 124 L79 120 L88 134', role: 'soft' },
        { d: 'M98 105 L89 120 L80 119', role: 'soft' },
        { d: 'M34 124 L54 143 L132 129', role: 'soft' },
        { d: 'M65 137 L77 135 M100 130 L114 127', role: 'accent' },
        {
          d: 'M58 146 l5 -3 M74 143 l5 -3 M90 140 l5 -3 M106 137 l5 -3 M122 134 l5 -3',
          role: 'ambient',
        },
        { d: 'M38 120 l4 -2 M44 126 l4 -2 M49 132 l4 -2', role: 'ambient' },
        shadow(83, 173, 55),
      ],
    },
  ],
}
