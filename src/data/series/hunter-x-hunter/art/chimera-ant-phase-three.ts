import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

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

/**
 * Welfin's blue shirt from behind, a little turned, its sleeves, the folds
 * down the back and the far side hatched; his hair covers the collar and the
 * tops of the shoulders. All three of his drawings keep it.
 */
const WELFIN_SHIRT: Stroke[] = [
  {
    d: 'M46 55 Q38 58 32 62 L16 102 L32 110 L42 86 L44 170 H110 L112 88 L118 106 L132 100 L122 62 Q118 59 114 57',
  },
  { d: 'M16 102 Q22 108 32 110 M118 106 Q126 104 132 100', role: 'soft' },
  { d: 'M66 116 Q70 140 64 166 M90 112 Q88 140 94 166', role: 'soft' },
  {
    d: 'M100 116 l8 -5 M100 132 l9 -6 M100 148 l9 -6 M100 164 l8 -5 M120 74 l5 -3 M124 88 l5 -3',
    role: 'ambient',
  },
]
/** His long blond hair, the crown of his head and the locks over the collar. */
const WELFIN_HAIR: Stroke[] = [
  {
    d: 'M60 36 C56 12 104 12 100 36 C104 52 116 62 124 78 C120 84 114 82 110 88 C104 84 100 92 94 90 C88 96 84 92 80 98 C76 92 72 96 66 90 C60 92 56 84 50 88 C46 82 40 84 36 78 C44 62 56 52 60 36 Z',
    role: 'accent',
  },
  {
    d: 'M70 22 Q64 56 52 84 M80 18 Q80 60 80 94 M90 22 Q96 56 108 84',
    role: 'soft',
  },
]
/**
 * Missileman on his back: the launcher, its shrunken head drawn as a knob,
 * and its four limbs, each holding a missile, the tips in tint.
 */
const WELFIN_MISSILEMAN: Stroke[] = [
  { d: `${ellipse(80, 130, 15, 19)} ${circle(80, 106, 5)}` },
  { d: 'M68 124 Q80 129 92 124 M69 140 Q80 145 91 140', role: 'soft' },
  {
    d: 'M66 122 L53 110 M94 122 L107 110 M66 140 L51 150 M94 140 L109 150',
    role: 'soft',
  },
  {
    d: 'M47 114 V104 M53 114 V104 M47 114 H53 M107 114 V104 M113 114 V104 M107 114 H113 M45 156 V146 M51 156 V146 M45 156 H51 M109 156 V146 M115 156 V146 M109 156 H115',
  },
  {
    d: 'M47 104 L50 98 L53 104 M107 104 L110 98 L113 104 M45 146 L48 140 L51 146 M109 146 L112 140 L115 146',
    role: 'accent',
  },
]
const WELFIN_SHADOW = shadow(74, 184, 50)

/**
 * Flutter's wings folded together and lying flat: the fore wing, the hind
 * wing under it and their veins. His death draws all three; Ikalgo's
 * disguise in his body draws the two outlines alone, so they stay open at
 * tile size over the rifle.
 */
const FLUTTER_FORE_WING =
  'M20 140 C40 128 96 124 140 130 C146 134 142 138 134 138 C96 140 48 142 20 140 Z'
const FLUTTER_HIND_WING =
  'M20 140 C42 136 96 136 136 144 C142 148 136 152 128 151 C94 150 48 146 20 140 Z'
const FLUTTER_WING_VEINS: Stroke = {
  d: 'M22 139 C50 132 96 128 132 132 M22 141 C50 141 96 142 130 147 M56 132 L54 138 M84 129 L82 136 M64 141 L62 146 M96 143 L94 148',
  role: 'soft',
}

/**
 * The branch Meleoron's tail hangs in front of, with its leafy twig and
 * the hatching under it; the tail's upper half with its rings. His drawings
 * keep them.
 */
const MELEORON_BRANCH: Stroke[] = [
  {
    d: 'M2 92 Q34 88 63 81.5 M81.5 78 Q118 70 158 62 M2 104 Q36 100 65 93 M82.5 90 Q122 82 158 74',
  },
  {
    d: 'M126 70 C134 58 144 50 154 44 M144 50 C146 40 156 38 156 44 C154 50 148 52 144 50 Z M136 58 C134 48 140 42 146 44 C146 52 140 56 136 58 Z',
    role: 'soft',
  },
  {
    d: 'M20 101 l5 -4 M40 99 l5 -4 M96 89 l5 -4 M114 86 l5 -4 M144 78 l5 -4 M78 20 l5 -3 M79 44 l5 -3 M81 68 l5 -3',
    role: 'ambient',
  },
  {
    d: 'M26 96 Q32 98 38 96 M104 82 Q110 83 116 80 M61 30 Q67 33 75 30 M62 56 Q69 59 77 56 M65 84 Q72 87 81 82',
    role: 'soft',
  },
]
const MELEORON_TAIL = 'M60 4 C60 34 62 64 66 96 M76 4 C76 34 78 62 82 92'
const MELEORON_SHADOW = shadow(84, 180, 32)

/**
 * Ikalgo's air rifle, the Fleadom, aimed up and to the right: barrel,
 * muzzle, sight, trigger guard and stock, the stock's far side hatched.
 * His first drawing and his disguise in Flutter's body both draw it.
 */
const IKALGO_RIFLE: Stroke[] = [
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
]
/** The octopus tentacle wound twice round the stock, and its suckers. */
const IKALGO_TENTACLE: Stroke[] = [
  {
    d: 'M147.1 143.3 C115.9 144 85.4 138.3 60 120.1 M149.7 124 C118 127.9 89 124 69.6 109.9 M60 120.1 L38 106.5 M69.6 109.9 L48.3 97.2 M51.1 131.2 L27.8 115.8 M59.6 123.3 L36.2 107.9 M36.2 107.9 C25.3 97.4 4.7 104.5 4.8 116 C4.9 127.5 17.7 129.2 19.1 119.5 C18.1 114.5 13 115.4 14 120.5 M27.8 115.8 C21.7 111.7 14.9 114 14 120.5',
    role: 'accent',
  },
  {
    d: 'M145.2 133.2 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0 M125.9 130.6 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0 M105.1 126.2 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0',
    role: 'soft',
  },
]
/** The bullet-shaped flea leaving the muzzle, with its motion lines. */
const IKALGO_FLEA: Stroke[] = [
  {
    d: 'M138 40.4 Q140 31.6 152.6 29.2 Q147 40.7 138 40.4 Z M143.8 40.3 L145.4 46.3 M148.3 36.8 L152.7 40.7',
    role: 'soft',
  },
  { d: 'M128.8 35.8 L117.8 44.2 M139.9 50.5 L132.6 56', role: 'ambient' },
]
const IKALGO_GROUND: Stroke[] = [
  { d: 'M4 166 H156', role: 'ambient', dashed: true },
  shadow(72, 176, 54),
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
  // Remora's tail, a lizard's ending in a fish's forked fin, curving up
  // toward the viewer so its underside shows as a second face, hatched,
  // the fin in tint with its rays soft, and beside it on the ground the
  // round badge he pins to Killua's back in chapter 238 and episode 101,
  // in 3/4. No lettering on the badge.
  'remora': [
    {
      d: 'M4 112 C34 100 62 96 88 84 C104 76 114 64 118 52 M6 140 C40 140 74 130 100 112 C112 102 120 90 124 72',
    },
    { d: 'M5 128 C40 124 70 116 94 100 C108 90 116 78 120 64', role: 'soft' },
    {
      d: 'M118 52 C122 38 130 24 144 14 C140 32 136 46 132 60 C142 66 152 72 158 84 C146 84 132 80 124 72',
      role: 'accent',
    },
    { d: 'M124 58 L138 26 M128 68 L150 80', role: 'soft' },
    { d: 'M36 104 Q38 114 36 126 M64 97 Q66 106 64 118', role: 'soft' },
    {
      d: 'M20 138 l4 -8 M40 136 l4 -8 M60 130 l4 -8 M80 122 l4 -8 M98 110 l4 -7 M110 98 l4 -6',
      role: 'ambient',
    },
    { d: `${ellipse(110, 156, 14, 6)} ${ellipse(110, 156, 8, 3.4)}` },
    { d: 'M96 156 V160 C96 166 124 166 124 160 V156', role: 'soft' },
    { d: 'M4 170 H156', role: 'ambient', dashed: true },
    shadow(80, 180, 60),
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
    { d: circle(56, 88, 9), role: 'accent' },
    {
      d: 'M50 82 L62 94 M48 88 L56 96 M56 80 L64 88 M50 94 L62 82',
      role: 'soft',
    },
    { d: 'M61 95 L76 112 M55 99 L70 116 L76 112' },
    { d: 'M73 115 Q78 124 94 120', role: 'soft' },
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
  // Pell's shell in 3/4, round as a ladybug's and parted where it opens,
  // in tint, its far side hatched, his round head under it and the four
  // spiked arms reaching forward, and the joystick that steers him small
  // on the ground beside: Shalnark crushes both in episode 96, so this
  // drawing stays.
  'pell': [
    {
      d: 'M24 112 C24 60 120 50 136 100 C132 120 44 132 24 112 Z',
      role: 'accent',
    },
    { d: 'M86 57 Q70 90 76 125 M24 112 C46 102 110 96 136 100', role: 'soft' },
    {
      d: 'M104 66 l8 -5 M114 78 l9 -6 M120 92 l10 -6 M110 104 l9 -6',
      role: 'ambient',
    },
    { d: ellipse(58, 128, 12, 6) },
    {
      d: 'M40 122 L22 138 L10 130 M22 138 l-3 6 M16 134 l-4 4 M10 130 l-6 -2 M50 130 L40 150 L26 154 M40 150 l2 6 M33 152 l0 6 M26 154 l-6 2',
    },
    {
      d: 'M98 122 L114 142 L128 140 M114 142 l0 6 M121 141 l2 6 M128 140 l6 -2 M120 114 L138 124 L148 116 M138 124 l4 5 M143 120 l5 3 M148 116 l2 -6',
    },
    { d: 'M68 132 L64 150 M88 130 L92 150', role: 'soft' },
    {
      d: 'M122 172 L136 166 L150 172 L136 178 Z M122 172 V175 L136 181 L150 175 V172 M136 178 V181',
      role: 'soft',
    },
    { d: `M136 172 V160 ${circle(136, 158, 2.5)}`, role: 'soft' },
    { d: 'M4 158 H156', role: 'ambient', dashed: true },
    shadow(80, 166, 52),
  ],
  // Flutter's two pairs of transparent wings spread from his back over the
  // Korean collar and the baggy shoulders of his loose top, seen from
  // behind, the fore pair in tint, the veins soft and the far side of the
  // top hatched, and three of his Satellite Dragonflies flying out: the
  // Ant who watches Killua from high above in chapter 235 and sends the
  // dragonflies after him in episode 100. No face.
  'flutter': [
    {
      d: 'M68 60 C52 62 36 70 28 84 C20 102 20 128 24 152 L40 154 C42 136 44 120 46 108 V166 H114 V108 C116 120 118 136 120 154 L136 152 C140 128 140 102 132 84 C124 70 108 62 92 60',
    },
    { d: 'M68 62 V54 Q80 50 92 54 V62 Q80 58 68 62 Z' },
    {
      d: 'M58 68 Q54 90 58 112 M102 68 Q106 90 102 112 M30 120 Q34 136 32 150 M130 120 Q126 136 128 150',
      role: 'soft',
    },
    {
      d: 'M120 98 l8 -5 M122 114 l9 -6 M124 130 l9 -6 M104 142 l8 -5 M104 158 l8 -5',
      role: 'ambient',
    },
    {
      d: 'M74 84 C60 64 34 48 10 46 C4 52 14 60 30 66 C46 72 62 80 74 90 M86 84 C100 64 126 48 150 46 C156 52 146 60 130 66 C114 72 98 80 86 90',
      role: 'accent',
    },
    {
      d: 'M74 94 C58 98 32 108 14 122 C10 130 26 130 40 124 C54 116 66 106 74 100 M86 94 C102 98 128 108 146 122 C150 130 134 130 120 124 C106 116 94 106 86 100',
    },
    {
      d: 'M73 87 C54 66 32 54 12 49 M50 64 L46 71 M32 55 L28 62 M87 87 C106 66 128 54 148 49 M110 64 L114 71 M128 55 L132 62 M73 97 C54 104 34 114 16 124 M50 106 L48 115 M87 97 C106 104 126 114 144 124 M110 106 L112 115',
      role: 'soft',
    },
    {
      d: 'M14 30 l14 -7 M19 27.5 q-4 -6 -8 -3 M19 27.5 q2 -7 6 -6 M98 24 l14 -7 M103 21.5 q-4 -6 -8 -3 M103 21.5 q2 -7 6 -6 M120 36 l14 -7 M125 33.5 q-4 -6 -8 -3 M125 33.5 q2 -7 6 -6',
      role: 'ambient',
    },
    shadow(80, 182, 50),
  ],
  // A bull's two horns on the poll of his head in 3/4, thick at the base
  // with their rings soft, the near horn's tip in tint and the far horn,
  // turning away, hatched beneath, a few curls of hair between them: the
  // bull-like Ant whose super strength Pike names in chapter 227. No face.
  'bihorn': [
    { d: 'M50 118 C26 116 12 98 14 74 M62 102 C42 98 30 86 24 70' },
    {
      d: 'M14 74 C13 62 13 52 16 42 Q17 45 19 46 C20 54 21 62 24 70',
      role: 'accent',
    },
    {
      d: 'M50 118 Q46 108 62 102 M41 114 Q37 102 53 98 M33 108 Q29 96 45 92',
      role: 'soft',
    },
    {
      d: 'M108 104 C126 102 136 84 132 52 Q131 54 129 56 C124 78 114 92 100 96',
    },
    { d: 'M100 96 Q104 100 108 104 M112 101 Q108 95 106 94', role: 'soft' },
    {
      d: 'M118 101 l5 -5 M126 94 l5 -5 M131 82 l4 -4 M20 100 l6 -4 M28 110 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M62 102 C74 94 90 94 100 96 M50 118 C64 130 100 128 114 112 C116 108 112 104 108 104',
    },
    {
      d: 'M66 106 C62 96 70 92 76 96 M80 104 C78 92 88 88 92 94 M70 116 C68 108 74 104 80 108 M88 114 C90 106 98 104 100 110',
      role: 'soft',
    },
    { d: 'M92 126 l6 -4 M102 122 l6 -4', role: 'ambient' },
    shadow(70, 150, 50),
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
  // Meleoron's chameleon tail hanging in front of a branch, its rings
  // soft and its far side hatched, the curl at its tip turned toward the
  // viewer so the coil shows its underside, the curl alone in tint: the
  // hidden Ant who watches Gon from the trees, episode 98, and follows him
  // into the desert, chapter 241. Nothing else of him is drawn.
  'meleoron': [
    ...MELEORON_BRANCH,
    { d: MELEORON_TAIL },
    { d: 'M66 96 C70 108 76 118 80 128 M82 92 C90 106 96 120 96 136' },
    {
      d: 'M96 136 C96 156 76 162 66 152 C56 142 62 126 76 126 C86 126 90 136 84 142 C80 146 74 142 76 138',
      role: 'accent',
    },
    {
      d: 'M90 142 C90 152 78 156 70 149 M70 108 Q78 110 88 105 M75 119 Q84 121 93 116',
      role: 'soft',
    },
    {
      d: 'M90 116 l5 -4 M93 128 l4 -4 M92 146 l4 -4 M86 154 l4 -4',
      role: 'ambient',
    },
    MELEORON_SHADOW,
  ],
  // Ikalgo's air rifle, the Fleadom, aimed up and to the right, with an
  // octopus tentacle wound twice round the stock, suckers on its underside
  // and its tip curled: the tentacle is the tint. A flea shaped like a
  // bullet leaves the muzzle. He shoots Killua from a cliff in chapter 236
  // and points the same rifle at him in the cave, chapter 238.
  'ikalgo': [
    ...IKALGO_RIFLE,
    ...IKALGO_TENTACLE,
    ...IKALGO_FLEA,
    ...IKALGO_GROUND,
  ],
  // Welfin's blue shirt from behind, his long blond hair falling over the
  // collar and the shoulders in tint, the shirt's far side hatched: the
  // wolf-like Ant who walks the palace grounds with Bloster in chapter 246
  // and episode 104. No face and no Missileman.
  'welfin': [...WELFIN_SHIRT, ...WELFIN_HAIR, WELFIN_SHADOW],
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

/** The phase's drawings that change with the story. */
export const chimeraAntPhaseThreeRedrawn: Redrawings = {
  flutter: [
    // His wings folded and still on the ground, the fore wing in tint, no
    // body: after Knov's ambush his corpse first shows among
    // the Extermination Team in Knov's dimension, chapter 262 and episode
    // 110.
    {
      episode: 110,
      chapter: 262,
      value: [
        ...moved(
          [
            { d: FLUTTER_FORE_WING, role: 'accent' },
            { d: FLUTTER_HIND_WING },
            FLUTTER_WING_VEINS,
          ],
          'translate(80 132) scale(1.1 2) translate(-80 -140)',
        ),
        { d: 'M4 156 H156', role: 'ambient' },
        shadow(80, 166, 60),
      ],
    },
  ],
  ikalgo: [
    // Flutter's folded wings over the same rifle, the tip of a tentacle
    // showing from under them in tint: Ikalgo moves inside Flutter's body
    // with Living Dead Dolls from the raid, chapter 263 and episode 111.
    {
      episode: 111,
      chapter: 263,
      value: [
        ...IKALGO_RIFLE,
        ...moved(
          [{ d: FLUTTER_FORE_WING }, { d: FLUTTER_HIND_WING }],
          'translate(60 116) rotate(-37) scale(0.8 1.5) translate(-80 -137)',
        ),
        {
          d: 'M30 140 C18 144 12 158 20 164 C28 168 32 158 26 156',
          role: 'accent',
        },
        ...IKALGO_FLEA,
        ...IKALGO_GROUND,
      ],
    },
    // The rifle and its tentacle again: Bloster blows Flutter's body apart
    // and Ikalgo gets out of it first, chapter 279 and episode 118.
    {
      episode: 118,
      chapter: 279,
      value: CHIMERA_ANT_PHASE_THREE_DRAWINGS.ikalgo,
    },
  ],
  meleoron: [
    // The same tail fading out, its lower half broken open lines that stop
    // short and the curl gone, the half still seen in tint: Perfect Plan,
    // which hides him from every sense while he holds his breath, shown to
    // Gon in chapter 242 and episode 102.
    {
      episode: 102,
      chapter: 242,
      value: [
        ...MELEORON_BRANCH,
        { d: MELEORON_TAIL, role: 'accent' },
        {
          d: 'M66 96 L67.5 101 M70 107 L72 112 M82 92 L84.5 97 M88 104 L90 110 M93 117 L94 122',
          role: 'ambient',
        },
        MELEORON_SHADOW,
      ],
    },
  ],
  bloster: [
    // The same claw with his aura bullets streaming from between its
    // fingers as open lines: he first fires them at Flutter's body,
    // chapter 279 and episode 118.
    {
      episode: 118,
      chapter: 279,
      value: [
        ...CHIMERA_ANT_PHASE_THREE_DRAWINGS.bloster,
        {
          d: 'M128 62 L140 55 M146 51.6 L158 44.6 M124 67 L134 62 M140 59 L152 53 M158 49 L166 45 M134 55 L142 50 M150 46 L160 40 M136 66 L146 61 M152 58 L162 53',
          role: 'ambient',
        },
      ],
    },
  ],
  welfin: [
    // Missileman on the shirt's back, the hair turned plain: he first
    // conjures it in the courtyard when he senses Meleoron, chapter 276
    // and episode 115.
    {
      episode: 115,
      chapter: 276,
      value: [
        ...WELFIN_SHIRT,
        ...softened(WELFIN_HAIR),
        ...WELFIN_MISSILEMAN,
        WELFIN_SHADOW,
      ],
    },
    // The hair gone and the collar bare in tint, the launcher kept plain:
    // facing the King, his terror makes him lose his hair and age at once,
    // chapter 313 and episode 134.
    {
      episode: 134,
      chapter: 313,
      value: [
        ...WELFIN_SHIRT,
        {
          d: 'M64 46 C58 10 102 10 96 46 M62 50 Q54 52 46 55 M96 50 Q105 53 114 57',
        },
        {
          d: 'M62 50 L60 44 Q79 38 98 44 L96 50 Q79 44 62 50 Z',
          role: 'accent',
        },
        ...softened(WELFIN_MISSILEMAN),
        WELFIN_SHADOW,
      ],
    },
  ],
  komugi: [
    // The same board with the game left as it was, the stack's top piece
    // turned plain, and the two gungi pieces beside it now in tint: chapter
    // 339 shows her dead beside the King with two pieces by them, and
    // episode 148 adapts it. No body and no hands are drawn.
    {
      episode: 148,
      chapter: 339,
      value: [
        ...softened(CHIMERA_ANT_PHASE_THREE_DRAWINGS.komugi.slice(0, -1)),
        {
          d: 'M50 161.8 L43 158.6 L33 158.6 L26 161.8 L26 166.2 L33 169.4 L43 169.4 L50 166.2 Z M26 166.2 V172.2 L33 175.4 H43 L50 172.2 V166.2 M33 169.4 V175.4 M43 169.4 V175.4 M136 162.8 L129 159.6 L119 159.6 L112 162.8 L112 167.2 L119 170.4 L129 170.4 L136 167.2 Z M112 167.2 V173.2 L119 176.4 H129 L136 173.2 V167.2 M119 170.4 V176.4 M129 170.4 V176.4',
          role: 'accent',
        },
        shadow(80, 186, 66),
      ],
    },
  ],
}
