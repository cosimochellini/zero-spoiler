import type { Drawings, Redrawings, Stroke } from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

/** Flips a stroke about the box's centre line, for a pair. */
const MIRROR = 'matrix(-1 0 0 1 160 0)'

/**
 * Komugi's gungi board in 3/4: its top, its thickness and the hatched
 * near-right edge. Both her drawings keep it.
 */
const KOMUGI_BOARD: Stroke[] = [
  { d: 'M12 114 L92 90 L150 118 L70 142 Z' },
  { d: 'M12 114 V124 L70 152 L150 128 V118 M70 142 V152' },
  {
    d: 'M80 148 l5 -6 M96 143.5 l5 -6 M112 139 l5 -6 M128 134.5 l5 -6 M142 130.5 l4 -5',
    role: 'ambient',
  },
]

/** The two single pieces on Komugi's board, which both drawings keep. */
const KOMUGI_PIECES: Stroke[] = [
  {
    d: 'M104.8 123.8 L97.7 120.6 L87.8 120.6 L80.7 123.8 L80.7 128.2 L87.8 131.4 L97.7 131.4 L104.8 128.2 Z M80.7 128.2 V134.2 L87.8 137.4 H97.7 L104.8 134.2 V128.2 M87.8 131.4 V137.4 M97.7 131.4 V137.4',
    role: 'soft',
  },
  {
    d: 'M130.3 104.8 L123.2 101.6 L113.3 101.6 L106.2 104.8 L106.2 109.2 L113.3 112.4 L123.2 112.4 L130.3 109.2 Z M106.2 109.2 V115.2 L113.3 118.4 H123.2 L130.3 115.2 V109.2 M113.3 112.4 V118.4 M123.2 112.4 V118.4',
    role: 'soft',
  },
]

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
  // A gungi board in 3/4 with three pieces stacked on one square, the
  // top one in tint, two single pieces on the board, the grid soft and
  // the board's edge hatched: the game Komugi plays against the King,
  // episode 103, before she tells him her name in chapter 257. No
  // lettering on the pieces.
  'komugi': [
    ...KOMUGI_BOARD,
    {
      d: 'M32 108 L79.4 130.9 M52 102 L70.4 110.9 M106.1 128.1 L110 130 M97.1 108.1 L104.9 111.9 M122 120.2 L130 124 M26.5 121 L70.5 107.8 M97.1 99.8 L106.5 97 M41 128 L73.8 118.2 M97 111.2 L105 108.8 M55.5 135 L79.5 127.8 M102.5 120.9 L109.9 118.7 M131.5 112.2 L135.5 111',
      role: 'soft',
    },
    {
      d: 'M71.7 108.2 V114.2 L78.8 117.4 H88.7 L95.8 114.2 V108.2 M78.8 111.4 V117.4 M88.7 111.4 V117.4 M71.7 102.2 V108.2 L78.8 111.4 H88.7 L95.8 108.2 V102.2 M78.8 105.4 V111.4 M88.7 105.4 V111.4',
    },
    {
      d: 'M95.8 91.8 L88.7 88.6 L78.8 88.6 L71.7 91.8 L71.7 96.2 L78.8 99.4 L88.7 99.4 L95.8 96.2 Z M71.7 96.2 V102.2 L78.8 105.4 H88.7 L95.8 102.2 V96.2 M78.8 99.4 V105.4 M88.7 99.4 V105.4',
      role: 'accent',
    },
    ...KOMUGI_PIECES,
    shadow(80, 166, 62),
  ],
  // Remora's tail, a lizard's ending in a fish's forked fin, the fin in
  // tint with its rays soft and the underside hatched, and beside it on
  // the ground the badge he pins to Killua's back in chapter 238 and
  // episode 101. No lettering on the badge.
  'remora': [
    {
      d: 'M8 132 C36 124 66 116 92 100 C104 92 112 82 116 72 M10 144 C40 140 72 130 98 114 C108 106 116 96 120 86',
    },
    {
      d: 'M116 72 C120 56 128 40 142 28 C138 46 134 62 130 76 C138 84 148 92 154 104 C142 102 130 96 120 86',
      role: 'accent',
    },
    { d: 'M120 76 L136 38 M123 80 L146 98 M122 78 L140 62', role: 'soft' },
    {
      d: 'M36 126 Q40 133 40 141 M62 118 Q66 126 66 134 M86 104 Q92 112 92 120',
      role: 'soft',
    },
    {
      d: 'M26 140 l5 -4 M50 134 l5 -4 M76 124 l5 -4 M100 108 l5 -4',
      role: 'ambient',
    },
    {
      d: `${ellipse(118, 152, 16, 6)} M102 152 V155 C102 160 134 160 134 155 V152`,
      role: 'soft',
    },
    { d: `M106 151 L128 150 ${circle(104, 151, 2)}`, role: 'soft' },
    { d: 'M4 162 H156', role: 'ambient', dashed: true },
    shadow(80, 172, 60),
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
  // The capital's towers in 3/4 on their ground, the tallest in the
  // middle in tint with its mast, the side faces hatched: Peijin, where
  // the country's people are gathered, chapter 243, and where Gon asks
  // Pitou to come with him, episode 116.
  'peijin': [
    {
      d: 'M64 150 V36 H90 V150 M90 36 L100 31 V146 L90 150 M64 36 L74 31 H100 M82 33 V10',
      role: 'accent',
    },
    { d: 'M30 150 V70 H56 V150 M56 70 L62 67 M30 70 L38 66 H62 V146' },
    {
      d: 'M108 150 V60 H130 V150 M130 60 L138 56 V146 L130 150 M108 60 L116 56 H138',
    },
    {
      d: 'M4 150 V106 H24 V150 M24 106 L30 103 M4 106 L10 103 H30 M140 150 V100 H156',
      role: 'soft',
    },
    {
      d: 'M71 46 V140 M77 46 V140 M83 46 V140 M37 80 V140 M43 80 V140 M49 80 V140 M115 70 V140 M123 70 V140',
      role: 'soft',
    },
    {
      d: 'M92 50 l6 -3 M92 66 l6 -3 M92 82 l6 -3 M92 98 l6 -3 M92 114 l6 -3 M92 130 l6 -3',
      role: 'ambient',
    },
    {
      d: 'M132 72 l4 -2 M132 88 l4 -2 M132 104 l4 -2 M132 120 l4 -2 M132 136 l4 -2',
      role: 'ambient',
    },
    { d: 'M2 150 H156', role: 'ambient' },
    shadow(80, 158, 66),
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
  // Meleoron's chameleon tail hanging in front of a branch and curled at
  // the tip, in tint, its rings soft, a leafy twig at the branch's end and
  // the underside hatched: the hidden Ant who watches Gon from the trees,
  // episode 98, and follows him into the desert, chapter 241. Nothing
  // else of him is drawn.
  'meleoron': [
    {
      d: 'M2 92 Q34 88 63 81 M78 77.6 Q118 70 158 62 M2 104 Q36 100 68 91.5 M85 88 Q122 82 158 74',
    },
    {
      d: 'M126 70 C134 58 144 50 154 44 M144 50 C146 40 156 38 156 44 C154 50 148 52 144 50 Z M136 58 C134 48 140 42 146 44 C146 52 140 56 136 58 Z',
      role: 'soft',
    },
    {
      d: 'M60 4 C60 30 62 56 64 82 C66 90 68 94 70 97 C72 108 78 118 82 128 M74 4 C74 30 76 54 78 80 C80 88 82 92 84 95 C92 110 98 124 96 140 C94 156 76 162 66 152 C56 142 62 126 76 126 C86 126 90 136 84 142 C80 146 74 142 76 138',
      role: 'accent',
    },
    {
      d: 'M61 30 Q67 33 74 30 M62 56 Q69 59 76 56 M65 86 Q72 88 79 84 M73 108 Q80 110 87 105 M78 118 Q86 120 93 115',
      role: 'soft',
    },
    {
      d: 'M20 101 l5 -4 M40 99 l5 -4 M96 89 l5 -4 M114 86 l5 -4 M144 78 l5 -4',
      role: 'ambient',
    },
    {
      d: 'M92 128 l4 -4 M90 142 l4 -4 M68 20 l5 -3 M69 44 l5 -3',
      role: 'ambient',
    },
    { d: 'M26 96 Q32 98 38 96 M104 82 Q110 83 116 80', role: 'soft' },
    shadow(84, 180, 32),
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
  // Welfin's hind pawfoot planted on its toes, side on and facing left,
  // the heel raised behind, fur along the back of the leg, the claws in
  // tint and the back hatched. He walks the palace grounds with Bloster
  // in chapter 246 and episode 104. No hair, shirt or face.
  'welfin': [
    {
      d: 'M70 4 C68 40 62 72 56 104 M110 4 C112 30 116 60 112 84 C110 98 108 108 108 118',
    },
    {
      d: 'M56 104 C40 106 24 118 22 132 C20 140 26 144 34 142 C36 148 46 148 48 142 C52 148 62 148 64 142 C68 148 78 148 82 142 C90 146 104 142 110 132 C114 126 112 120 108 118',
    },
    {
      d: 'M34 142 Q34 132 42 126 M48 142 Q50 132 56 126 M64 142 Q66 132 72 126',
      role: 'soft',
    },
    {
      d: 'M24 134 Q14 136 12 146 M36 143 Q28 146 28 154 M50 144 Q42 147 42 155 M66 144 Q58 147 58 155',
      role: 'accent',
    },
    {
      d: 'M112 20 l8 3 l-6 4 l8 3 M116 50 l8 3 l-6 4 l8 3 M113 88 l8 2 l-6 4 l7 3',
      role: 'soft',
    },
    { d: 'M64 30 l-6 4 l6 2 M60 64 l-6 4 l6 2', role: 'soft' },
    {
      d: 'M100 24 l7 -4 M100 44 l7 -4 M100 64 l7 -4 M98 84 l7 -4 M96 104 l7 -4 M98 130 l6 -4',
      role: 'ambient',
    },
    { d: 'M4 158 H156', role: 'ambient', dashed: true },
    shadow(66, 168, 52),
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

/** The phase's drawings that change with the story: Komugi's death. */
export const chimeraAntPhaseThreeRedrawn: Redrawings = {
  komugi: [
    // The same board with the game left as it was, the stack gone down to
    // one piece, and two pieces lying on the floor beside it, one in tint:
    // chapter 339 shows her dead beside the King with two gungi pieces by
    // them, and episode 148 adapts it. No body and no hands are drawn.
    {
      episode: 148,
      chapter: 339,
      value: [
        ...KOMUGI_BOARD,
        {
          d: 'M32 108 L79.4 130.9 M52 102 L70.4 110.9 M106.1 128.1 L110 130 M72 96 L78.1 98.9 M97.1 108.1 L104.9 111.9 M122 120.2 L130 124 M26.5 121 L70.5 107.8 M93.5 100.9 L106.5 97 M41 128 L75.4 117.7 M97 111.2 L105 108.8 M55.5 135 L79.5 127.8 M102.5 120.9 L109.9 118.7 M131.5 112.2 L135.5 111',
          role: 'soft',
        },
        {
          d: 'M95.8 103.8 L88.7 100.6 L78.8 100.6 L71.7 103.8 L71.7 108.2 L78.8 111.4 L88.7 111.4 L95.8 108.2 Z M71.7 108.2 V114.2 L78.8 117.4 H88.7 L95.8 114.2 V108.2 M78.8 111.4 V117.4 M88.7 111.4 V117.4',
          role: 'soft',
        },
        ...KOMUGI_PIECES,
        {
          d: 'M46 157.8 L39 154.6 L29 154.6 L22 157.8 L22 162.2 L29 165.4 L39 165.4 L46 162.2 Z M22 162.2 V168.2 L29 171.4 H39 L46 168.2 V162.2 M29 165.4 V171.4 M39 165.4 V171.4',
          role: 'accent',
        },
        {
          d: 'M140 158.8 L133 155.6 L123 155.6 L116 158.8 L116 163.2 L123 166.4 L133 166.4 L140 163.2 Z M116 163.2 V169.2 L123 172.4 H133 L140 169.2 V163.2 M123 166.4 V172.4 M133 166.4 V172.4',
        },
        shadow(80, 180, 66),
      ],
    },
  ],
}
