import type { Drawings } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** Flips a stroke about the box's centre line, for a pair. */
const MIRROR = 'matrix(-1 0 0 1 160 0)'

export const CHIMERA_ANT_PHASE_THREE_DRAWINGS = {
  // An apartment block in 3/4 on its street, its windows soft, one
  // window thrown open in tint and the side wall hatched: the blocks
  // where Killua tells the residents to flee and one shouts back at him,
  // chapter 235 and episode 100.
  'luonton-city': [
    { d: 'M30 150 V44 H94 V150' },
    { d: 'M94 44 L122 52 V146 L94 150 M30 44 L58 36 H122' },
    {
      d: 'M38 56 h10 v10 h-10 Z M58 56 h10 v10 h-10 Z M78 56 h10 v10 h-10 Z M38 78 h10 v10 h-10 Z M78 78 h10 v10 h-10 Z M38 100 h10 v10 h-10 Z M58 100 h10 v10 h-10 Z M78 100 h10 v10 h-10 Z M38 122 h10 v10 h-10 Z M78 122 h10 v10 h-10 Z',
      role: 'soft',
    },
    {
      d: 'M58 78 h10 v10 h-10 Z M58 78 L52 75 V91 L58 88 M68 78 L74 75 V91 L68 88',
      role: 'accent',
    },
    { d: 'M56 150 V126 H72 V150', role: 'soft' },
    {
      d: 'M100 62 l14 4 M100 80 l14 4 M100 98 l14 4 M100 116 l14 4 M100 134 l14 4',
      role: 'ambient',
    },
    { d: 'M2 150 V86 H24 V150 M128 150 V96 H156', role: 'soft' },
    { d: 'M2 150 H156', role: 'ambient' },
    shadow(80, 156, 56),
  ],
  // A gungi board in 3/4 with two pieces stacked on one square, the top
  // one in tint, a third piece lying on the board, and the board's edge
  // hatched: the game Komugi plays against the King, episode 103, before
  // she tells him her name in chapter 257. No lettering on the pieces.
  'komugi': [
    { d: 'M12 116 L98 92 L148 118 L62 146 Z' },
    { d: 'M12 116 V126 L62 156 L148 128 V118 M62 146 V156' },
    {
      d: 'M33 110 L83 136 M55 104 L105 129 M77 98 L127 123 M24 122 L110 98 M38 130 L124 105 M50 138 L136 112',
      role: 'soft',
    },
    {
      d: 'M70 152 l6 -5 M88 146 l6 -5 M106 140 l6 -5 M124 134 l6 -5 M140 129 l5 -4',
      role: 'ambient',
    },
    {
      d: 'M84 98 L106 106 L100 120 L70 120 L62 106 Z M62 106 V112 L70 126 H100 L106 112 V106 M70 120 V126 M100 120 V126',
    },
    {
      d: 'M84 84 L106 92 L100 106 L70 106 L62 92 Z M62 92 V98 L70 112 H100 L106 98 V92 M70 106 V112 M100 106 V112',
      role: 'accent',
    },
    {
      d: 'M36 124 L50 119 L54 126 L42 131 Z M36 124 V128 L42 135 L54 130 V126',
      role: 'soft',
    },
    shadow(80, 166, 58),
  ],
  // The "Bar Double Bull" badge seen from the back, its rim and
  // thickness, the pin across the back in tint and the far edge hatched:
  // the badge Remora fixes to Killua's back in chapter 238. No lettering.
  'remora': [
    { d: ellipse(80, 90, 46, 28) },
    { d: 'M34 90 V98 C34 114 54 126 80 126 C106 126 126 114 126 98 V90' },
    { d: 'M40 104 Q60 120 92 120', role: 'soft' },
    {
      d: 'M98 120 l6 -6 M108 116 l6 -6 M116 110 l5 -5 M50 114 l5 -4',
      role: 'ambient',
    },
    {
      d: `${circle(50, 96, 4)} M54 96 L112 84 M50 92 L110 80 Q118 78 116 86 L110 88`,
      role: 'accent',
    },
    { d: 'M44 100 L52 100 M104 88 L114 90', role: 'soft' },
    { d: 'M60 72 Q80 66 104 74', role: 'soft' },
    shadow(80, 140, 46),
  ],
  // A television in 3/4 on its legs, the screen showing a reporter's
  // microphone held out for the interview, the microphone in tint and the
  // side hatched: the news report where the officer Tsukuma tells of the
  // lobster-like monster, chapter 224. No face on the screen.
  'tsukuma': [
    { d: 'M20 54 H112 V136 H20 Z' },
    { d: 'M20 54 L48 44 H140 L112 54 M140 44 V126 L112 136' },
    {
      d: 'M34 64 H86 Q94 64 94 72 V118 Q94 126 86 126 H34 Q26 126 26 118 V72 Q26 64 34 64 Z',
    },
    { d: 'M94 112 L70 100 M94 116 L72 104', role: 'soft' },
    { d: circle(64, 98, 7), role: 'accent' },
    { d: 'M60 92 l8 8 M58 98 l10 0', role: 'soft' },
    { d: `${circle(104, 76, 3)} ${circle(104, 90, 3)}`, role: 'soft' },
    { d: 'M100 104 h8 M100 110 h8 M100 116 h8', role: 'soft' },
    { d: 'M32 74 Q30 86 32 96', role: 'soft' },
    { d: 'M78 44 L62 20 M86 44 L106 16', role: 'soft' },
    {
      d: 'M118 64 l16 -6 M118 80 l16 -6 M118 96 l16 -6 M118 112 l16 -6',
      role: 'ambient',
    },
    { d: 'M30 136 L26 150 M104 136 L108 150 M134 128 V142' },
    { d: 'M4 150 H156', role: 'ambient', dashed: true },
    shadow(80, 158, 56),
  ],
  // Pell's shell seen from the front, round as a ladybug's and parted
  // down the middle where it opens, in tint, with the four spiked arms and
  // a round head under it, and the joystick that steers him on the ground
  // beside: Shalnark crushes both in episode 96, so this drawing stays.
  'pell': [
    {
      d: 'M28 108 C28 58 132 58 132 108 C120 126 40 126 28 108 Z',
      role: 'accent',
    },
    { d: 'M77 66 Q80 94 76 122 M83 66 Q86 94 84 122', role: 'soft' },
    { d: 'M40 88 Q58 78 74 78 M86 78 Q104 78 120 88', role: 'soft' },
    {
      d: 'M108 90 l10 -6 M112 102 l12 -7 M104 112 l12 -7 M116 112 l8 -5',
      role: 'ambient',
    },
    { d: ellipse(80, 126, 12, 6) },
    {
      d: 'M54 120 L34 134 L14 118 M34 134 l-4 6 M26 128 l-4 6 M14 118 l-4 -8 M14 118 l-8 -2',
    },
    {
      d: 'M54 120 L34 134 L14 118 M34 134 l-4 6 M26 128 l-4 6 M14 118 l-4 -8 M14 118 l-8 -2',
      transform: MIRROR,
    },
    {
      d: 'M60 122 L52 146 M100 122 L108 146 M52 146 l-6 2 M108 146 l6 2',
      role: 'soft',
    },
    {
      d: 'M114 170 L134 164 L150 170 L130 176 Z M114 170 V174 L130 180 L150 174 V170 M130 176 V180',
      role: 'soft',
    },
    { d: `M132 170 V156 ${circle(132, 154, 3)}`, role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient', dashed: true },
    shadow(80, 158, 50),
  ],
  // Flutter's two pairs of dragonfly wings spread from his back, the
  // veins soft, the fore pair in tint and the far hind wing hatched: the
  // Ant who watches Killua from high above in chapter 235 and episode 100.
  // No eyes and no dragonflies of his ability.
  'flutter': [
    { d: ellipse(80, 98, 6, 16) },
    { d: 'M80 82 V114 M76 90 H84 M76 104 H84', role: 'soft' },
    {
      d: 'M75 90 C58 72 30 64 10 66 C4 72 14 80 30 84 C46 88 62 92 75 96',
      role: 'accent',
    },
    {
      d: 'M75 90 C58 72 30 64 10 66 C4 72 14 80 30 84 C46 88 62 92 75 96',
      role: 'accent',
      transform: MIRROR,
    },
    {
      d: 'M75 102 C58 106 30 114 14 126 C10 134 26 134 40 128 C54 120 66 112 75 106',
    },
    {
      d: 'M75 102 C58 106 30 114 14 126 C10 134 26 134 40 128 C54 120 66 112 75 106',
      transform: MIRROR,
    },
    {
      d: 'M74 93 C54 80 30 72 12 69 M56 80 L50 87 M40 74 L36 82 M26 70 L22 78 M74 104 C54 112 32 120 16 127 M56 112 L52 122 M40 118 L38 128',
      role: 'soft',
    },
    {
      d: 'M74 93 C54 80 30 72 12 69 M56 80 L50 87 M40 74 L36 82 M26 70 L22 78 M74 104 C54 112 32 120 16 127 M56 112 L52 122 M40 118 L38 128',
      role: 'soft',
      transform: MIRROR,
    },
    { d: 'M110 118 l6 -4 M120 122 l6 -4 M130 126 l5 -4', role: 'ambient' },
    shadow(80, 170, 30),
  ],
  // A bull's two horns on the poll of a head, thick at the base with
  // their rings soft, the horns in tint and their undersides hatched, a
  // few curls of hair between them: the bull-like Ant whose super strength
  // Pike names in chapter 227. No face.
  'bihorn': [
    {
      d: 'M48 118 C22 116 6 92 14 44 M62 100 C40 96 26 80 17 48 M14 44 Q15 47 17 48',
      role: 'accent',
    },
    {
      d: 'M48 118 C22 116 6 92 14 44 M62 100 C40 96 26 80 17 48 M14 44 Q15 47 17 48',
      role: 'accent',
      transform: MIRROR,
    },
    {
      d: 'M48 118 Q44 108 60 102 M41 115 Q37 103 53 98 M34 110 Q30 98 46 93',
      role: 'soft',
    },
    {
      d: 'M112 118 Q116 108 100 102 M119 115 Q123 103 107 98 M126 110 Q130 98 114 93',
      role: 'soft',
    },
    {
      d: 'M14 84 l6 -4 M18 96 l6 -4 M26 106 l6 -4 M128 106 l6 -4 M136 96 l6 -4',
      role: 'ambient',
    },
    { d: 'M62 100 C72 94 88 94 98 100 M48 118 C62 130 98 130 112 118' },
    {
      d: 'M64 106 C60 96 68 90 74 94 M78 102 C76 90 86 86 90 92 M70 116 C68 108 74 104 80 108 M88 112 C90 104 98 102 100 108',
      role: 'soft',
    },
    { d: 'M96 124 l6 -4 M104 120 l6 -4', role: 'ambient' },
    shadow(80, 150, 46),
  ],
  // The road into a low city, the buildings small with distance, and a
  // blank road sign beside it in tint: the city Knuckle names as the
  // place to meet, chapter 243 and episode 102. No lettering on the sign.
  'mandai-city': [
    { d: 'M44 150 L74 104 M116 150 L86 104' },
    { d: 'M80 146 V136 M80 126 V119 M80 112 V108', role: 'soft' },
    {
      d: 'M20 104 V86 H34 V92 H46 V76 H60 V104 M98 104 V80 H110 V88 H122 V72 H136 V104',
    },
    { d: 'M60 80 l4 2 V104 M136 76 l4 2 V104', role: 'soft' },
    {
      d: 'M50 84 V88 M50 94 V98 M26 94 V98 M114 92 V96 M126 80 V84 M126 90 V94',
      role: 'soft',
    },
    { d: 'M2 104 H20 M60 104 H98 M136 104 H158', role: 'ambient' },
    { d: 'M124 62 H150 V82 H124 Z', role: 'accent' },
    { d: 'M150 62 L154 64 V84 L150 82 M134 82 V150 M140 82 V150' },
    { d: 'M138 98 l4 -3 M138 112 l4 -3 M138 126 l4 -3', role: 'ambient' },
    { d: 'M2 150 H156', role: 'ambient' },
    shadow(80, 156, 64),
  ],
  // The capital's towers on their ground, the tallest in the middle with
  // its spire in tint, the near sides hatched: Peijin, where the country's
  // people are gathered, chapter 243.
  'peijin': [
    { d: 'M62 150 V40 H86 V150 M86 40 L94 44 V150 M74 40 V18', role: 'accent' },
    { d: 'M14 150 V98 H32 V150 M36 150 V76 H54 V150' },
    { d: 'M100 150 V68 H118 V150 M122 150 V96 H146 V150' },
    {
      d: 'M32 98 l4 2 M54 76 l4 2 V150 M118 68 l4 2 V96 M146 96 l4 2 V150',
      role: 'soft',
    },
    {
      d: 'M68 52 V140 M80 52 V140 M42 86 V140 M48 86 V140 M106 80 V140 M112 80 V140 M20 108 V140 M26 108 V140',
      role: 'soft',
    },
    {
      d: 'M88 58 l4 -2 M88 78 l4 -2 M88 98 l4 -2 M88 118 l4 -2 M88 138 l4 -2',
      role: 'ambient',
    },
    { d: 'M2 150 H156', role: 'ambient' },
    shadow(80, 156, 66),
  ],
  // A heap of things left behind, with an upright tyre in tint, a box,
  // a pipe and a broken chair in it, its far side hatched, and a steeple
  // behind: the dump the Troupe walk through on the way back, chapter 224
  // and episode 96.
  'meteor-city': [
    {
      d: 'M6 150 C14 128 26 114 40 110 L50 100 L66 104 L80 88 L98 94 L112 86 C126 96 140 120 154 150',
    },
    {
      d: 'M54 112 C46 112 40 124 40 134 C40 144 46 150 54 150 C62 150 68 144 68 134 C68 124 62 112 54 112 Z M54 112 C60 110 70 116 74 126 C76 134 74 146 66 150',
      role: 'accent',
    },
    {
      d: 'M54 124 C50 124 48 130 48 134 C48 138 50 142 54 142 C58 142 60 138 60 134 C60 130 58 124 54 124 Z M70 118 l-4 2 M74 128 l-5 1 M74 140 l-5 0',
      role: 'soft',
    },
    {
      d: 'M82 88 L100 82 L110 112 L92 118 Z M86 92 L98 88 L106 110',
      role: 'soft',
    },
    { d: 'M112 88 L138 72 M114 94 L140 78 M138 72 Q142 74 140 78' },
    { d: 'M30 112 L22 96 M40 108 L36 92 M22 96 L36 92', role: 'soft' },
    {
      d: 'M118 108 l8 -5 M124 120 l9 -6 M130 132 l10 -6 M136 144 l10 -6',
      role: 'ambient',
    },
    {
      d: 'M14 64 V100 M14 64 L22 52 L30 64 V104 M22 52 V44 M18 76 h8',
      role: 'soft',
    },
    { d: 'M2 150 H156', role: 'ambient' },
    shadow(80, 156, 66),
  ],
  // Meleoron's chameleon tail hanging from a branch, wound once round
  // it and curled at the tip, in tint, with the underside of the branch
  // hatched: the hidden Ant who watches Gon in the forest, episode 98, and
  // follows him into the desert, chapter 241. Nothing else of him is drawn.
  'meleoron': [
    { d: 'M2 86 C40 82 92 74 156 56 M2 98 C42 94 94 86 156 68' },
    {
      d: 'M128 64 L148 40 M140 52 Q152 50 158 60 M30 95 Q22 110 28 124',
      role: 'soft',
    },
    {
      d: 'M58 6 C60 34 62 56 64 79 M72 6 C74 34 76 54 78 77 M64 79 C66 89 72 97 82 99 M78 77 C80 83 84 89 92 91 M82 99 C86 108 90 116 90 124 M92 91 C102 104 108 120 106 136 C104 154 86 160 76 150 C66 140 72 124 86 124 C96 124 100 134 94 140 C90 144 84 140 86 136',
      role: 'accent',
    },
    { d: 'M86 108 Q92 110 99 106 M90 120 Q96 121 103 117', role: 'soft' },
    {
      d: 'M20 98 l6 -5 M40 96 l6 -5 M110 86 l6 -5 M126 82 l6 -5 M142 76 l6 -5',
      role: 'ambient',
    },
    shadow(84, 176, 30),
  ],
  // Ikalgo's air rifle, the Fleadom, aimed up and to the right, with an
  // octopus tentacle wound twice round the stock, suckers on its underside
  // and its tip curled: the tentacle is the tint. A flea shaped like a
  // bullet leaves the muzzle. He shoots Killua from a cliff in chapter 236
  // and points the same rifle at him in the cave, chapter 238.
  'ikalgo': [
    { d: 'M70.1 87.8 L124.9 46 M74.3 93.3 L129.1 51.5' },
    { d: 'M124.9 46 A1.6 3 -37.3 1 1 129.1 51.5 A1.6 3 -37.3 1 1 124.9 46' },
    { d: 'M114 54.4 L110.5 49.8 L114.1 47 L117.6 51.6', role: 'soft' },
    { d: 'M74.3 93.3 L78.5 98.8 L111.4 73.7 Q115 70.9 110.8 65.4' },
    {
      d: 'M70.1 87.8 L50.8 96.7 L6.5 133.4 L23.9 156.3 C34.9 147.9 44.5 137.7 49 128.5 Q55.4 117.9 64.1 114.1 L78.5 98.8',
    },
    {
      d: 'M65.2 111.8 Q73.3 118.6 79.9 112.1 Q82.2 107.5 75.5 102.5 M69.8 108.3 L74.2 112.2',
      role: 'soft',
    },
    {
      d: 'M16.9 135.6 Q31.1 127.7 42.5 116.1 M24.3 141.6 Q34.8 136.4 42.6 127.6 M85.5 89.1 L103.8 75.1',
      role: 'soft',
    },
    {
      d: 'M24.6 145.7 L31 146.6 M31.9 140.1 L38.3 141 M39.2 134.5 L45.6 135.4 M85.2 84.9 L91.7 85.8 M96.2 76.6 L102.7 77.4',
      role: 'ambient',
    },
    {
      d: 'M147.1 143.3 C115.9 144 85.4 138.3 60 120.1 M149.7 124 C118 127.9 89 124 69.6 109.9 M60 120.1 L38 106.5 M69.6 109.9 L48.3 97.2 M51.1 131.2 L27.8 115.8 M59.6 123.3 L36.2 107.9 M36.2 107.9 C25.3 97.4 4.7 104.5 4.8 116 C4.9 127.5 17.7 129.2 19.1 119.5 C18.1 114.5 13 115.4 14 120.5 M27.8 115.8 C21.7 111.7 14.9 114 14 120.5',
      role: 'accent',
    },
    {
      d: 'M145.2 133.2 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0 M125.9 130.6 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0 M105.1 126.2 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0',
      role: 'soft',
    },
    {
      d: 'M138 40.4 Q140 31.6 152.6 29.2 Q147 40.7 138 40.4 Z M143.8 40.3 L145.4 46.3 M148.3 36.8 L152.7 40.7',
      role: 'soft',
    },
    { d: 'M128.8 35.8 L117.8 44.2 M139.9 50.5 L132.6 56', role: 'ambient' },
    { d: 'M4 166 H156', role: 'ambient', dashed: true },
    shadow(72, 176, 54),
  ],
  // Welfin's hind leg standing, side on and facing left: the wolf's
  // digitigrade pawfoot on its toes, the heel raised behind, fur along the
  // back of the leg, the claws in tint and the back hatched. He walks the
  // palace grounds with Bloster in chapter 246 and episode 104. No hair,
  // shirt or face.
  'welfin': [
    {
      d: 'M58 12 C48 34 46 54 52 68 C58 80 74 92 80 106 L62 142 M106 12 C112 38 108 62 106 76 C104 90 110 100 112 108 C112 118 96 130 84 144',
    },
    {
      d: 'M62 142 C50 142 40 148 40 156 C40 160 44 162 48 160 C50 164 56 164 58 160 C60 164 68 164 70 160 C72 164 80 164 82 160 C88 162 94 158 92 152 C92 148 88 144 84 144',
    },
    {
      d: 'M50 158 Q50 152 54 148 M62 160 Q62 153 66 149 M74 160 Q74 154 78 150',
      role: 'soft',
    },
    {
      d: 'M42 154 Q34 154 30 162 M50 160 Q43 161 40 168 M60 161 Q53 162 50 169 M72 161 Q65 162 62 169',
      role: 'accent',
    },
    {
      d: 'M112 104 l9 3 l-6 3 l9 4 l-7 3 l6 4 M108 36 l8 2 l-6 4 l8 2 l-6 4 M107 62 l7 2 l-5 4 l6 3',
      role: 'soft',
    },
    { d: 'M50 40 l-6 4 l6 2 M50 58 l-5 4 l6 1', role: 'soft' },
    {
      d: 'M94 28 l7 -4 M96 46 l7 -4 M94 84 l7 -4 M98 98 l7 -4 M92 122 l6 -4 M84 134 l6 -4',
      role: 'ambient',
    },
    { d: 'M4 166 H156', role: 'ambient', dashed: true },
    shadow(66, 176, 44),
  ],
  // Bloster's lobster claw raised open on its forearm, the two fingers
  // in tint with their teeth soft, bumps on the shell and its underside
  // hatched: the lobster Squadron Leader seen on the news in chapter 224,
  // drawn as he walks the palace grounds in chapter 246 and episode 104.
  'bloster': [
    { d: 'M20 170 L40 128 M46 178 L64 138' },
    { d: 'M40 128 Q52 140 64 138 M34 140 Q46 150 60 148', role: 'soft' },
    { d: 'M40 128 C30 102 44 74 74 62 L102 48 M64 138 C94 136 118 114 126 86' },
    {
      d: 'M102 48 C118 38 134 28 150 20 C144 38 132 56 118 68 M126 86 C140 84 152 74 156 58 C144 64 132 72 118 74',
      role: 'accent',
    },
    {
      d: 'M118 68 l4 3 M125 62 l4 3 M132 55 l4 3 M118 74 l3 -3 M127 72 l3 -3 M136 68 l3 -3',
      role: 'soft',
    },
    { d: 'M118 68 Q113 71 118 74 M102 48 Q96 72 126 86', role: 'soft' },
    {
      d: 'M54 86 h0.01 M66 76 h0.01 M52 104 h0.01 M80 70 h0.01 M66 96 h0.01 M88 82 h0.01',
      role: 'soft',
    },
    {
      d: 'M76 130 l6 -6 M88 126 l6 -6 M100 118 l6 -6 M110 108 l5 -5',
      role: 'ambient',
    },
    { d: 'M4 176 H156', role: 'ambient', dashed: true },
    shadow(42, 184, 32),
  ],
  // Bizeff's laptop open on the desk with three pictures on the screen
  // and no lettering, the screen in tint, the keyboard soft and the front
  // edge hatched, and an ashtray beside it with a cigarette smoking: the
  // director lights another cigarette and picks women from emailed
  // pictures in chapter 250.
  'bizeff': [
    { d: 'M24 130 L90 144 L126 116 L60 106 Z' },
    { d: 'M24 130 V135 L90 149 L126 121 V116 M90 144 V149', role: 'soft' },
    { d: 'M60 106 L68 46 L134 54 L126 116' },
    { d: 'M67 102 L74 54 L128 61 L121 110 Z', role: 'accent' },
    {
      d: 'M80 68 L94 70 L92 82 L78 80 Z M100 71 L114 73 L112 85 L98 83 Z M77 88 L91 90 L89 102 L75 100 Z',
      role: 'soft',
    },
    { d: 'M42 128 L96 139 M52 122 L102 132 M62 116 L108 125', role: 'soft' },
    { d: 'M34 138 l6 -4 M52 142 l6 -4 M70 146 l6 -4', role: 'ambient' },
    { d: ellipse(130, 150, 18, 6) },
    { d: 'M112 150 Q114 159 130 160 Q146 159 148 150', role: 'soft' },
    { d: 'M126 147 L146 138 M128 150 L147 141 M146 138 l1 3', role: 'soft' },
    {
      d: 'M150 136 C156 126 146 120 152 110 C158 100 148 94 154 84',
      role: 'ambient',
    },
    shadow(80, 162, 56),
  ],
} satisfies Drawings
