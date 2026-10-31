import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

/** Baise's lipstick standing open: both her drawings keep it. */
const LIPSTICK: Stroke[] = [
  { d: 'M62 150 V96 M98 96 V150' },
  { d: ellipse(80, 150, 18, 5) },
  { d: ellipse(80, 96, 18, 5) },
  { d: `M68 96 V80 H92 V96 ${ellipse(80, 80, 12, 3.5)}`, role: 'soft' },
  { d: 'M70 80 V60 L90 48 V80', role: 'accent' },
  { d: 'M90 108 l6 -4 M90 122 l6 -4 M90 136 l6 -4', role: 'ambient' },
]

/** The lipstick's cap lying on its side. */
const LIPSTICK_CAP: Stroke[] = [
  {
    d: 'M112 152 L136 144 M115 162 L139 154 M136 144 C141 143 142 153 139 154',
    role: 'soft',
  },
  {
    d: 'M112 152 C107 153 110 163 115 162 C120 161 117 151 112 152',
    role: 'soft',
  },
]

/**
 * The head of one of Squala's dogs, side on, in silhouette with no muzzle
 * line: the drop ear is the accent. The dogs the wiki names (a Dalmatian, a
 * Golden Retriever, a Bloodhound, chapter 109) all have drop ears.
 */
const DOG_HEAD: Stroke[] = [
  {
    d: 'M60 80 C50 76 34 74 30 68 C28 62 40 58 52 56 C58 48 64 44 72 46 C84 48 90 58 92 72',
  },
  {
    d: 'M68 48 C60 50 56 60 58 72 C62 76 68 72 70 64 C72 58 74 52 74 48',
    role: 'accent',
  },
]

/** The same dog sitting, its haunch and tail on the ground. */
const DOG: Stroke[] = [
  ...DOG_HEAD,
  { d: 'M92 72 C102 82 116 94 121 112 C126 128 123 144 110 150 H88' },
  { d: 'M60 80 C58 100 62 122 64 150 H78 L78 112', role: 'soft' },
  { d: 'M88 150 C88 132 96 120 110 120', role: 'soft' },
  { d: 'M110 150 C124 151 136 150 146 146' },
  { d: 'M108 104 l7 -5 M112 116 l7 -5 M114 130 l7 -5', role: 'ambient' },
]

/** One of Tocino's figures in black: an empty robe, its far half hatched. */
const TOCINO_ROBE: Stroke[] = [
  { d: ellipse(80, 40, 13, 4) },
  {
    d: 'M67 40 L46 50 L32 112 M47 117 L54 82 L44 172 H116 L106 82 L113 117 M128 112 L114 50 L93 40',
  },
  { d: 'M32 112 A8 3.5 12 1 0 47 117 A8 3.5 12 1 0 32 112', role: 'soft' },
  { d: 'M128 112 A8 3.5 -12 1 1 113 117 A8 3.5 -12 1 1 128 112', role: 'soft' },
  { d: 'M80 44 V172 M62 100 Q58 136 56 170', role: 'soft' },
  {
    d: 'M88 64 l12 -9 M88 86 l14 -10 M88 108 l15 -11 M88 130 l16 -11 M88 152 l17 -12 M90 170 l14 -10',
    role: 'ambient',
  },
]

/** The figure's sword, the guard in tint. */
const TOCINO_SWORD: Stroke[] = [
  { d: 'M117 104 L148 30 L152 34 L124 106' },
  { d: 'M110 100 L130 110', role: 'accent' },
  { d: 'M118 108 L114 118 M124 110 L120 120', role: 'soft' },
]

/** Dalzollene's screen on its stand, the frame in tint and its side hatched. */
const DALZOLLENE_SCREEN: Stroke[] = [
  { d: 'M24 44 L118 32 L122 118 L28 126 Z', role: 'accent' },
  { d: 'M32 52 L110 42 L114 110 L36 117 Z', role: 'soft' },
  { d: 'M118 32 L130 40 L134 120 L122 118' },
  {
    d: 'M126 56 l4 -3 M126 76 l4 -3 M127 96 l4 -3 M128 114 l4 -3',
    role: 'ambient',
  },
  { d: 'M72 122 L68 148 M86 121 L90 148', role: 'soft' },
  { d: ellipse(79, 152, 28, 6) },
]

/** Ivlenkov's black suit jacket, buttoned, the tie in tint. */
const IVLENKOV_JACKET: Stroke[] = [
  {
    d: 'M66 38 L40 50 L28 124 M42 128 L47 86 C40 118 44 148 54 168 H106 C116 148 120 118 113 86 L118 128 M132 124 L120 50 L94 38',
  },
  { d: 'M28 124 A7 3 12 1 0 42 128 A7 3 12 1 0 28 124', role: 'soft' },
  { d: 'M132 124 A7 3 -12 1 1 118 128 A7 3 -12 1 1 132 124', role: 'soft' },
  { d: 'M66 38 L80 90 L94 38 M66 38 Q80 46 94 38', role: 'soft' },
  {
    d: 'M77 46 H83 L85 52 L82 80 L80 84 L78 80 L75 52 Z M75 52 H85',
    role: 'accent',
  },
  {
    d: `M80 90 V168 ${dots([
      [86, 104],
      [86, 124],
    ])}`,
    role: 'soft',
  },
  {
    d: 'M96 78 l9 -7 M98 100 l10 -7 M100 122 l10 -7 M100 144 l10 -7 M98 164 l8 -6',
    role: 'ambient',
  },
]

/**
 * The Cemetery Building seen from a corner, its floors in rows and the side
 * turned away hatched, the doors in tint.
 */
const CEMETERY_BUILDING: Stroke[] = [
  { d: 'M42 150 V36 H114 V150' },
  { d: 'M42 36 L56 26 H128 L114 36 M128 26 V140 L114 150' },
  { d: 'M38 36 H118 M38 32 H118', role: 'soft' },
  {
    d: 'M50 52 H106 M50 68 H106 M50 84 H106 M50 100 H106 M50 116 H106',
    role: 'ambient',
  },
  {
    d: 'M118 46 l6 -4 M118 66 l6 -4 M118 86 l6 -4 M118 106 l6 -4 M118 126 l6 -4',
    role: 'ambient',
  },
  { d: 'M64 150 V128 H92 V150 M78 128 V150', role: 'accent' },
  { d: 'M54 128 H58 M98 128 H102 M64 140 h4 M88 140 h4', role: 'soft' },
  { d: 'M4 150 H156', role: 'ambient' },
]

/** Uvogin's bearskin vest, open at the front, the fur edging in tint. */
const UVOGIN_VEST: Stroke[] = [
  { d: 'M58 34 L34 48 L30 152 H70 L72 64 M102 34 L126 48 L130 152 H90 L88 64' },
  { d: 'M58 34 Q80 42 102 34', role: 'soft' },
  {
    d: 'M58 34 l-3 7 l5 2 l-3 7 l5 2 l-3 7 l5 2 l-2 6 M102 34 l3 7 l-5 2 l3 7 l-5 2 l3 7 l-5 2 l2 6 M30 152 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 l4 -6 l4 6 M130 152 l-4 6 l-4 -6 l-4 6 l-4 -6 l-4 6 l-4 -6 l-4 6 l-4 -6 l-4 6',
    role: 'accent',
  },
  {
    d: 'M34 48 C42 54 48 56 56 56 M126 48 C118 54 112 56 104 56',
    role: 'soft',
  },
  {
    d: 'M42 76 l5 4 M40 98 l5 4 M42 120 l5 4 M38 140 l5 4 M118 76 l-5 4 M120 98 l-5 4',
    role: 'soft',
  },
  {
    d: 'M96 80 l9 -6 M96 100 l10 -7 M96 120 l10 -7 M96 140 l10 -7',
    role: 'ambient',
  },
]

/** Rabid Dog's high-necked shirt, the neck in tint. */
const RABID_DOG_SHIRT: Stroke[] = [
  { d: 'M64 38 C64 30 96 30 96 38 V50 C96 56 64 56 64 50 Z', role: 'accent' },
  { d: 'M64 42 C70 46 90 46 96 42', role: 'soft' },
  {
    d: 'M64 48 L38 58 L28 134 M42 138 L50 88 L50 170 H110 L110 88 L118 138 M132 134 L122 58 L96 48',
  },
  { d: 'M28 134 A7 3 12 1 0 42 138 A7 3 12 1 0 28 134', role: 'soft' },
  { d: 'M132 134 A7 3 -12 1 1 118 138 A7 3 -12 1 1 132 134', role: 'soft' },
  { d: 'M40 80 l5 10 M120 80 l-5 10 M70 120 Q72 146 68 168', role: 'soft' },
  {
    d: 'M96 82 l8 -6 M96 104 l8 -6 M96 126 l8 -6 M96 148 l8 -6',
    role: 'ambient',
  },
]

/** The mound Worm comes up through, on its ground line. */
const WORM_MOUND: Stroke[] = [
  { d: 'M10 150 C26 118 54 102 80 102 C106 102 134 118 150 150' },
  { d: 'M4 150 H156', role: 'ambient' },
  {
    d: dots([
      [34, 138],
      [126, 140],
      [50, 124],
      [112, 122],
      [140, 146],
    ]),
    role: 'soft',
  },
  { d: 'M112 112 l6 -3 M124 122 l6 -3 M134 134 l6 -3', role: 'ambient' },
]

/**
 * The Yorknew City records (#900), each at its named scene: first-pass
 * drawings, graded and redrawn in #901.
 */
export const YORKNEW_CITY_DRAWINGS = {
  // Melody's brimmed hat in 3/4, the band in tint and the crown's far side
  // hatched: she wears a hat in public, and is one of the six applicants
  // in the mansion's test, episode 40 / chapter 68. No flute, which she
  // plays later.
  'melody': [
    { d: ellipse(80, 130, 58, 16) },
    { d: 'M22 130 V134 C40 150 120 150 138 134 V130', role: 'soft' },
    { d: 'M44 128 C40 96 50 66 80 64 C110 66 120 96 116 128' },
    { d: 'M44 128 C58 138 102 138 116 128' },
    {
      d: 'M45 116 C60 126 100 126 115 116 M44 106 C60 116 100 116 116 106',
      role: 'accent',
    },
    { d: 'M66 68 C72 76 88 76 94 68', role: 'soft' },
    { d: 'M104 78 l6 -4 M108 90 l6 -4 M110 100 l5 -3', role: 'ambient' },
    shadow(80, 182, 50),
  ],
  // A writing brush across a stack of blank paper, the brush's tip in tint,
  // the far edge of the stack hatched: Basho carries a brush and paper and
  // writes the haiku that come true in the mansion's test, episode 40 /
  // chapter 68. No words on the sheets.
  'basho': [
    { d: 'M24 124 L100 104 L140 128 L64 150 Z' },
    { d: 'M24 124 V132 L64 158 L140 136 V128' },
    { d: 'M24 128 L64 154 L140 132', role: 'soft' },
    {
      d: 'M78 155 l3 -5 M96 150 l3 -5 M114 144 l3 -5 M130 140 l3 -5',
      role: 'ambient',
    },
    { d: 'M34 58 L42 50 L100 108 L92 116 Z' },
    { d: 'M92 116 L100 108 L107 115 L99 123 Z', role: 'soft' },
    {
      d: 'M99 123 C102 132 110 138 120 138 C119 129 113 121 107 115',
      role: 'accent',
    },
    { d: 'M48 68 l4 -4 M60 80 l4 -4 M72 92 l4 -4', role: 'ambient' },
    shadow(82, 176, 58),
  ],
  // A lipstick standing open, its slanted tip in tint, the cap lying on its
  // side beside it: Baise's kiss makes Squala her servant in the mansion's
  // test, episode 40 / chapter 68.
  'baise': [...LIPSTICK, ...LIPSTICK_CAP, shadow(86, 174, 52)],
  // One of Squala's dogs sitting side on, in silhouette, its drop ear
  // in tint: he places dogs round the mansion that all follow his orders,
  // episode 40 / chapter 68 (episode 39 shows him among them). No face, no
  // collar and no leash, which neither medium shows.
  'squala': [...DOG, shadow(86, 160, 54)],
  // One of Tocino's figures in black: an empty robe standing with no hood
  // and no face, its far half hatched, a sword raised in its sleeve with
  // the guard in tint. His figures attack the applicants with swords in
  // episode 40 / chapter 68.
  'shachmono-tocino': [...TOCINO_ROBE, ...TOCINO_SWORD, shadow(80, 186, 56)],
  // A large screen on its stand, blank but for the glare, the frame in tint
  // and its side hatched: Dalzollene sets the applicants their test from a
  // screen, and hires the four who pass, episode 41 / chapter 70. No face
  // on the screen.
  'dalzollene': [
    ...DALZOLLENE_SCREEN,
    { d: 'M46 106 L70 60 M60 110 L82 66', role: 'ambient' },
    shadow(80, 176, 56),
  ],
  // A pen over a stack of blank sheets, the nib in tint and the stack's
  // edge hatched: Neon writes her fortunes with a hand her power guides,
  // episode 41 / chapter 71. No words on the sheets.
  'neon-nostrade': [
    { d: 'M22 130 L98 110 L140 138 L64 160 Z' },
    { d: 'M22 130 V138 L64 168 L140 146 V138' },
    { d: 'M22 134 L64 164 L140 142', role: 'soft' },
    { d: 'M30 126 L96 108 M100 112 L134 134', role: 'soft' },
    {
      d: 'M78 164 l3 -5 M96 159 l3 -5 M114 153 l3 -5 M130 148 l3 -5',
      role: 'ambient',
    },
    { d: 'M44 48 L52 42 L114 112 L106 118 Z' },
    { d: 'M44 48 C40 44 46 38 52 42', role: 'soft' },
    { d: 'M58 62 L66 56 M62 66 L96 104', role: 'soft' },
    { d: 'M106 118 L118 132 L114 112', role: 'accent' },
    { d: 'M70 76 l4 -4 M80 88 l4 -4 M90 100 l4 -4', role: 'ambient' },
    shadow(84, 184, 58),
  ],
  // Ivlenkov's black suit jacket from the front, buttoned over a round
  // front, its far half hatched and the tie in tint: the plump bodyguard
  // Dalzollene sends to bid at the Underground Auction, episode 42 /
  // chapter 72. No number and no face.
  'ivlenkov': [...IVLENKOV_JACKET, shadow(80, 186, 50)],
  // Linssen's high-collared Chinese jacket from the front, the standing
  // collar, the folds of the sleeves and the far half hatched, the frog
  // fastenings down the side in tint: the bodyguard Dalzollene posts at the
  // back entrance, episode 42 / chapter 72. No face.
  'linssen': [
    { d: 'M68 34 C68 26 92 26 92 34 V42 C92 46 68 46 68 42 Z' },
    {
      d: 'M68 40 L42 50 L30 126 M44 130 L50 82 L50 172 H110 L110 82 L116 130 M130 126 L118 50 L92 40',
    },
    { d: 'M30 126 A7 3 12 1 0 44 130 A7 3 12 1 0 30 126', role: 'soft' },
    { d: 'M130 126 A7 3 -12 1 1 116 130 A7 3 -12 1 1 130 126', role: 'soft' },
    { d: 'M68 42 C72 54 84 58 96 54 L96 172', role: 'soft' },
    { d: 'M90 66 H102 M90 84 H102 M90 102 H102 M90 120 H102', role: 'accent' },
    { d: 'M38 74 l6 10 M122 74 l-6 10 M60 140 Q62 156 60 170', role: 'soft' },
    {
      d: 'M54 96 l6 -5 M54 116 l6 -5 M54 136 l6 -5 M54 156 l6 -5 M118 92 l4 -3 M120 108 l4 -3',
      role: 'ambient',
    },
    shadow(80, 186, 46),
  ],
  // Uvogin's bearskin vest from the front, open down the middle, the shaggy
  // fur edging in tint and the far half hatched: the Troupe member named on
  // the phone as they flee the auction, episode 43 / chapter 74. The wiki
  // gives bearskin clothing and seldom a shirt.
  'uvogin': [...UVOGIN_VEST, shadow(80, 182, 56)],
  // A dark bandana tied into a band, seen from the side, the inside of its
  // far edge hatched and the knot with its two tails in tint: Feitan wears
  // it over his mouth, named after the attack on the auction, episode 43 /
  // chapter 74. No crest on it.
  'feitan': [
    { d: 'M20 92 C20 76 112 72 116 90 V110 C112 128 20 124 20 108 Z' },
    { d: 'M24 94 C30 84 108 82 112 92', role: 'soft' },
    {
      d: 'M30 88 l6 -4 M48 84 l6 -4 M66 82 l6 -4 M84 82 l6 -4 M100 84 l6 -4',
      role: 'ambient',
    },
    {
      d: 'M40 118 C52 108 54 100 52 92 M60 120 C68 112 70 104 68 94',
      role: 'soft',
    },
    {
      d: 'M116 96 C124 92 130 98 126 104 C122 110 116 106 116 100',
      role: 'accent',
    },
    {
      d: 'M124 104 L146 136 L136 140 L122 108 M126 100 L152 116 L146 124 L124 106',
      role: 'accent',
    },
    shadow(76, 160, 56),
  ],
  // Franklin's pair of golden earrings, two rings each on its post, the
  // nearer one in tint and their far sides hatched: they hang from his long
  // earlobes, episode 44 / chapter 76. The rings' shape is not checked
  // against a frame.
  'franklin': [
    {
      d: `${ellipse(70, 112, 34, 34)} ${ellipse(70, 112, 25, 25)}`,
      role: 'accent',
    },
    { d: 'M98 92 C108 104 108 122 98 134', role: 'soft' },
    { d: 'M70 78 V56 M64 56 H76', role: 'soft' },
    { d: `${ellipse(124, 120, 16, 16)} ${ellipse(124, 120, 11, 11)}` },
    { d: 'M124 104 V92 M120 92 H128', role: 'soft' },
    {
      d: 'M86 96 l5 -4 M92 110 l5 -4 M90 126 l5 -4 M132 112 l4 -3 M134 124 l4 -3',
      role: 'ambient',
    },
    shadow(90, 168, 54),
  ],
  // Nobunaga's sheathed sword lying across the frame in 3/4, the round
  // guard seen at an angle and the grip's wrapping in tint, the underside
  // of the scabbard hatched: it almost never leaves his side, as when a
  // Shadow Beast's cloth traps him, episode 45 / chapter 77.
  'nobunaga': [
    { d: 'M14 152 L96 84 L102 92 L22 160 C16 162 12 158 14 152 Z' },
    { d: 'M22 160 L28 166 L106 100 L102 92', role: 'soft' },
    { d: ellipse(102, 88, 7, 12), role: 'soft' },
    { d: 'M104 84 L132 60 L138 68 L110 92 Z', role: 'accent' },
    { d: 'M110 80 l6 6 M116 74 l6 6 M122 70 l6 6 M128 64 l5 5', role: 'soft' },
    { d: 'M132 60 C138 56 144 62 138 68', role: 'soft' },
    { d: 'M36 146 l6 6 M54 131 l6 6 M72 116 l6 6', role: 'ambient' },
    shadow(80, 176, 60),
  ],
  // Phinks's pharaoh headdress from the front, its cloth falling to two
  // lappets, the far side hatched, the golden snake at its brow in tint:
  // the look he is introduced in, as the Troupe frees Uvogin, episode 45 /
  // chapter 78 (owner, #901). No face, and no tracksuit, which is later.
  'phinks': [
    {
      d: 'M54 50 C54 30 106 30 106 50 L116 112 L104 150 H90 L96 112 L92 70 H68 L64 112 L70 150 H56 L44 112 Z',
    },
    { d: 'M54 50 C64 44 96 44 106 50', role: 'soft' },
    { d: 'M58 62 H102', role: 'soft' },
    { d: 'M80 44 C76 36 84 30 82 22 C88 26 88 34 84 40', role: 'accent' },
    {
      d: 'M44 112 H64 M96 112 H116 M48 126 L66 126 M94 126 L112 126',
      role: 'soft',
    },
    {
      d: 'M100 78 l8 -5 M102 96 l8 -5 M104 114 l8 -5 M102 134 l6 -4',
      role: 'ambient',
    },
    shadow(80, 166, 44),
  ],
  // A laptop open on its hinge seen from the side and behind, the edge of
  // its lid in tint and the back of the lid hatched: Shalnark looks up the
  // Nostrade family on the Hunter website, episode 46 / chapter 79. Seen
  // from the back, unlike Nicholas's, and with nothing on the screen.
  'shalnark': [
    { d: 'M40 150 L120 150 L132 140 L52 140 Z' },
    { d: 'M40 150 V156 H120 L132 146 V140', role: 'soft' },
    { d: 'M52 140 L36 62 L44 58 L60 140', role: 'accent' },
    { d: 'M44 58 L124 58 L132 140', role: 'soft' },
    { d: 'M48 70 L116 70 M52 90 L120 90 M56 110 L124 110', role: 'ambient' },
    { d: 'M62 146 H108', role: 'soft' },
    shadow(86, 168, 56),
  ],
  // A mobile phone standing in 3/4, its blank screen in tint, the keys
  // below and its side hatched: Light speaks to his daughter's bodyguards
  // by phone, episode 46 / chapter 79. The phone's shape is not checked
  // against a frame.
  'light-nostrade': [
    {
      d: 'M56 40 H100 Q106 40 106 46 V154 Q106 160 100 160 H56 Q50 160 50 154 V46 Q50 40 56 40 Z',
    },
    {
      d: 'M106 46 L116 52 V158 Q116 164 110 164 H60 Q54 164 54 160',
      role: 'soft',
    },
    { d: 'M58 54 H98 V96 H58 Z', role: 'accent' },
    {
      d: dots([
        [66, 112],
        [78, 112],
        [90, 112],
        [66, 124],
        [78, 124],
        [90, 124],
        [66, 136],
        [78, 136],
        [90, 136],
      ]),
    },
    { d: 'M64 90 L92 60 M74 92 L96 68', role: 'ambient' },
    {
      d: 'M110 70 l4 -3 M110 90 l4 -3 M110 110 l4 -3 M110 130 l4 -3 M110 150 l4 -3',
      role: 'ambient',
    },
    shadow(84, 180, 40),
  ],
  // A large cloth knotted into a bundle, the two ends of its knot in tint,
  // its folds and the far side hatched: Owl's Fun Fun Cloth wraps the
  // Troupe's car, and he holds the tiny cloth with Nobunaga shrunk inside,
  // episode 45 / chapter 77.
  'owl': [
    { d: 'M28 150 C18 112 46 84 80 86 C114 84 142 112 132 150 Z' },
    {
      d: 'M64 88 C58 70 52 60 58 52 C66 54 72 70 76 84 M96 88 C102 70 108 60 102 52 C94 54 88 70 84 84',
      role: 'accent',
    },
    { d: ellipse(80, 88, 10, 5), role: 'soft' },
    {
      d: 'M44 140 C50 120 62 106 76 100 M116 140 C110 120 98 106 86 100 M80 98 V146',
      role: 'soft',
    },
    { d: 'M104 110 l8 -6 M110 124 l8 -6 M114 138 l8 -6', role: 'ambient' },
    shadow(80, 158, 56),
  ],
  // A mound of earth with the open mouth of a burrow, its rim in tint and
  // the inside hatched: Worm tunnels out of the ground and introduces
  // himself, episode 43 / chapter 75.
  'worm': [
    ...WORM_MOUND,
    { d: ellipse(80, 118, 22, 8), role: 'accent' },
    { d: 'M62 122 C66 130 94 130 98 122', role: 'soft' },
    { d: 'M64 118 l4 4 M72 116 l4 5 M82 116 l3 6', role: 'ambient' },
    shadow(80, 158, 70),
  ],
  // Rabid Dog's long-sleeved shirt with its high neck from the front, the
  // neck in tint, the sleeves' folds and the far half hatched: one of the
  // Shadow Beasts sent after the Troupe, episode 43 / chapter 75.
  'rabid-dog': [...RABID_DOG_SHIRT, shadow(80, 186, 48)],
  // A round mass bristling with needles, the outer needles in tint and the
  // far side hatched: Porcupine's body hair turns into needles that catch
  // Uvogin's fist, episode 44 / chapter 76.
  'porcupine': [
    { d: 'M30 150 C30 112 52 92 80 92 C108 92 130 112 130 150' },
    {
      d: 'M40 124 L20 108 M48 110 L34 86 M60 100 L52 72 M74 94 L72 62 M88 94 L94 62 M102 100 L114 74 M114 110 L132 90 M122 126 L144 114',
      role: 'accent',
    },
    {
      d: 'M46 140 L36 132 M60 132 L54 118 M74 126 L72 112 M88 126 L92 112 M102 132 L110 120 M114 142 L124 134',
      role: 'soft',
    },
    { d: 'M104 112 l6 -4 M112 126 l6 -4 M118 140 l6 -4', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 58),
  ],
  // A spotted leech curled on the ground, the rings of its body drawn
  // across it and its spots in tint: Leech fills Uvogin with his Spotted
  // Leeches, episode 44 / chapter 76.
  'leech': [
    {
      d: 'M24 134 C22 106 60 88 94 96 C126 104 132 136 108 146 C86 154 70 136 84 126 C96 118 108 128 100 136',
    },
    { d: 'M24 134 C30 150 60 156 84 152', role: 'soft' },
    {
      d: 'M44 106 C42 116 44 126 50 134 M62 98 C60 110 62 124 68 138 M80 96 C80 106 82 116 86 124 M104 100 C104 106 106 112 110 118',
      role: 'soft',
    },
    {
      d: `${circle(38, 120, 3)} ${circle(54, 110, 3)} ${circle(72, 104, 3)} ${circle(94, 106, 3)} ${circle(116, 120, 3)} ${circle(112, 136, 2.5)}`,
      role: 'accent',
    },
    { d: 'M30 138 l4 -6 M44 146 l4 -6 M60 150 l4 -6', role: 'ambient' },
    shadow(78, 170, 58),
  ],
  // A round-bellied vase with a narrow neck, the band round its shoulder in
  // tint: the vase Zepile outbids Gon and Killua for, episode 48 /
  // chapter 86.
  'zepile': [
    {
      d: 'M64 40 H96 M66 40 C66 60 60 66 48 80 C30 100 30 140 52 160 H108 C130 140 130 100 112 80 C100 66 94 60 94 40',
    },
    {
      d: 'M48 82 C68 92 92 92 112 82 M44 92 C66 102 94 102 116 92',
      role: 'accent',
    },
    { d: 'M52 160 C70 166 90 166 108 160', role: 'soft' },
    { d: 'M104 106 l8 -6 M108 124 l8 -6 M104 142 l8 -6', role: 'ambient' },
    shadow(80, 176, 44),
  ],
  // A long dark suit jacket from the front, the lapels in tint: Pakunoda,
  // who traps Gon and Killua with Phinks, episode 49 / chapter 90.
  'pakunoda': [
    {
      d: 'M64 36 L40 46 L30 128 M44 132 L50 84 L50 172 H110 L110 84 L116 132 M130 128 L120 46 L96 36',
    },
    {
      d: 'M64 36 L80 96 L96 36 M64 36 L72 74 L80 96 M96 36 L88 74 L80 96',
      role: 'accent',
    },
    { d: 'M30 128 A7 3 12 1 0 44 132 A7 3 12 1 0 30 128', role: 'soft' },
    { d: 'M130 128 A7 3 -12 1 1 116 132 A7 3 -12 1 1 130 128', role: 'soft' },
    { d: 'M80 96 V172 M76 120 h0.01 M76 140 h0.01', role: 'soft' },
    { d: 'M96 110 l8 -6 M96 132 l8 -6 M96 154 l8 -6', role: 'ambient' },
    shadow(80, 186, 48),
  ],
  // A small pair of sunglasses folded on a table, the lenses in tint:
  // Zenji wears them at the assassins' meeting, episode 51 / chapter 95.
  'zenji': [
    {
      d: 'M38 146 C40 136 62 132 66 140 C68 150 42 154 38 146 Z M84 136 C86 126 108 122 112 130 C114 140 88 144 84 136 Z',
      role: 'accent',
    },
    { d: 'M66 140 Q74 132 84 136' },
    { d: 'M40 142 L70 116 L120 104 M112 128 L126 116 L132 102' },
    {
      d: 'M46 144 l8 -6 M90 134 l8 -6 M50 148 l8 -6 M94 138 l8 -6',
      role: 'ambient',
    },
    { d: 'M14 168 L146 140', role: 'ambient', dashed: true },
  ],
  // Two identical small statues side by side, the second an exact copy, the
  // bands round their middles in tint: Kortopi copies the auction items,
  // episode 53 / chapter 100.
  'kortopi': [
    { d: 'M30 150 V90 C30 70 66 70 66 90 V150 Z' },
    { d: 'M94 150 V90 C94 70 130 70 130 90 V150 Z' },
    { d: 'M30 112 H66 M30 120 H66 M94 112 H130 M94 120 H130', role: 'accent' },
    {
      d: 'M56 96 l6 -4 M56 136 l6 -4 M120 96 l6 -4 M120 136 l6 -4',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 66),
  ],
  // A roll of bandage partly unwound, the loose end in tint: Bonolenov,
  // named when the Troupe splits into groups, episode 55 / chapter 108.
  'bonolenov': [
    { d: ellipse(62, 110, 26, 30) },
    { d: ellipse(62, 110, 10, 12), role: 'soft' },
    {
      d: 'M88 110 C110 110 130 120 140 150 L118 158 C112 136 100 126 84 124',
      role: 'accent',
    },
    {
      d: 'M44 96 C50 90 56 88 62 88 M40 120 C46 128 54 132 62 132',
      role: 'soft',
    },
    { d: 'M74 92 l6 -4 M80 108 l6 -4 M76 126 l6 -4', role: 'ambient' },
    shadow(80, 172, 56),
  ],
  // A shopping bag with rope handles, the handles in tint: Eliza is out
  // shopping with Neon when Squala dies, episode 56 / chapter 112.
  'eliza': [
    { d: 'M44 80 H116 L124 164 H36 Z' },
    {
      d: 'M64 80 C64 56 96 56 96 80 M70 80 C70 64 90 64 90 80',
      role: 'accent',
    },
    { d: 'M116 80 L130 90 L136 158 L124 164', role: 'soft' },
    { d: 'M126 100 l6 -4 M128 120 l6 -4 M130 140 l6 -4', role: 'ambient' },
    shadow(84, 178, 52),
  ],
  // A long open coat from the front, its fur collar and cuffs in tint: the
  // leader of the Troupe at its gathering, episode 54 / chapter 71. No mark
  // on its back.
  'chrollo': [
    {
      d: 'M58 40 L36 52 L26 132 M42 136 L48 84 L46 176 H74 L78 60 M102 40 L124 52 L134 132 M118 136 L112 84 L114 176 H86 L82 60',
    },
    {
      d: 'M58 40 C62 52 72 58 78 60 C74 46 66 38 58 40 Z M102 40 C98 52 88 58 82 60 C86 46 94 38 102 40 Z M26 132 C30 140 40 140 42 136 M134 132 C130 140 120 140 118 136',
      role: 'accent',
    },
    { d: 'M60 60 L62 170 M100 60 L98 170', role: 'soft' },
    { d: 'M90 90 l8 -6 M92 116 l8 -6 M94 142 l8 -6', role: 'ambient' },
    shadow(80, 188, 52),
  ],
  // A columned auction house front with steps, the doors in tint: Gon,
  // Killua and Leorio buy the catalog there, episode 48 / chapter 85.
  'southernpiece-auction-house': [
    { d: 'M24 60 H136 L80 30 Z' },
    {
      d: 'M30 60 V130 M50 60 V130 M70 60 V130 M90 60 V130 M110 60 V130 M130 60 V130',
      role: 'soft',
    },
    { d: 'M20 130 H140 V138 H20 Z M14 138 H146 V146 H14 Z' },
    { d: 'M72 130 V96 H88 V130', role: 'accent' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 64),
  ],
  // A hotel tower with a canopy over its entrance, the canopy in tint: the
  // Troupe waits in its lobby, episode 57 / chapter 112.
  'hotel-beitacle': [
    { d: 'M46 150 V30 H114 V150' },
    {
      d: 'M54 44 H106 M54 60 H106 M54 76 H106 M54 92 H106 M54 108 H106',
      role: 'ambient',
    },
    { d: 'M60 124 H100 L108 132 H52 Z', role: 'accent' },
    { d: 'M58 132 V150 M102 132 V150', role: 'soft' },
    { d: 'M114 150 L128 142 V36 L114 30', role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 60),
  ],
  // Machi's fingerless glove from the back, the finger ends open, with the
  // pincushion on it in tint and three needles stuck in it: the Troupe
  // member named on the way to the gathering, episode 41 / chapter 71. The
  // wiki gives the pincushion on her gloves. No thread, which is her Nen.
  'machi': [
    {
      d: 'M52 166 L52 126 C46 114 46 100 52 90 L52 70 H64 L65 84 M74 82 L74 60 H86 L86 82 M95 84 L96 68 H108 L108 92 C114 104 112 118 106 128 L106 166 C94 172 64 172 52 166',
    },
    { d: 'M65 84 L64 66 H74 M86 64 H96 L95 84', role: 'soft' },
    {
      d: `${ellipse(58, 70, 6, 2)} ${ellipse(80, 60, 6, 2)} ${ellipse(102, 68, 6, 2)}`,
      role: 'soft',
    },
    { d: 'M48 112 L34 96 L40 90 L50 98', role: 'soft' },
    { d: 'M52 156 C64 162 94 162 106 156', role: 'soft' },
    { d: 'M62 122 C62 98 98 98 98 122', role: 'accent' },
    { d: ellipse(80, 122, 18, 5) },
    { d: 'M70 106 L62 84 M80 102 V78 M90 106 L98 86' },
    {
      d: dots([
        [62, 84],
        [80, 78],
        [98, 86],
      ]),
    },
    { d: 'M96 136 l8 -6 M96 150 l8 -6 M96 166 l8 -6', role: 'ambient' },
    shadow(80, 186, 40),
  ],
  // Black-framed glasses folded on a table, seen low and from the side, the
  // frames in tint and the folded arms behind them: Shizuku wears them when
  // she takes on Gon at arm wrestling, episode 42 / chapter 72. No vacuum
  // cleaner, which she conjures later.
  'shizuku': [
    {
      d: 'M34 150 C36 140 62 134 68 142 C72 152 40 158 34 150 Z M84 136 C88 126 114 120 118 128 C122 138 90 144 84 136 Z',
      role: 'accent',
    },
    {
      d: 'M38 149 C40 143 60 139 64 144 M88 135 C91 129 110 125 114 129',
      role: 'soft',
    },
    { d: 'M68 142 Q74 134 84 136' },
    {
      d: 'M34 146 L40 140 L70 118 L126 104 L128 108 L74 122 M118 126 L124 120 L134 112 L140 98 L142 102 L136 116',
    },
    {
      d: 'M44 156 l6 -4 M58 156 l6 -4 M96 142 l6 -4 M108 140 l6 -4',
      role: 'ambient',
    },
    shadow(84, 170, 56),
  ],
  // A fountain in a plaza with tall buildings behind, their sides turned
  // away hatched, the water in tint: Gon and Killua sell their way into
  // the night and reach a fountain in a crowded plaza, episode 41 /
  // chapter 70. No crowd is drawn.
  'yorknew-city': [
    {
      d: 'M10 150 V70 H34 V150 M34 150 V44 H58 V150 M102 150 V56 H126 V150 M126 150 V84 H150 V150',
      role: 'soft',
    },
    {
      d: 'M34 70 L40 66 V44 M58 44 L64 40 V150 M126 84 L132 80 V56',
      role: 'soft',
    },
    {
      d: 'M110 72 l8 -6 M110 92 l8 -6 M110 112 l8 -6 M138 100 l8 -6 M138 120 l8 -6',
      role: 'ambient',
    },
    { d: ellipse(80, 138, 40, 8) },
    { d: 'M40 138 V146 C52 156 108 156 120 146 V138' },
    { d: ellipse(80, 138, 32, 5.5), role: 'soft' },
    { d: `M74 134 V104 M86 104 V134 ${ellipse(80, 104, 16, 4)}`, role: 'soft' },
    {
      d: 'M80 100 C76 86 64 84 60 98 M80 100 C84 86 96 84 100 98 M80 100 V84',
      role: 'accent',
    },
    { d: 'M4 156 H156', role: 'ambient' },
    shadow(80, 162, 56),
  ],
  // An airship coming down over a runway, the envelope in tint, its
  // gondola and fins, the far side of the envelope hatched: the Nostrade
  // family's airship lands here, episode 41 / chapter 71. No tower, which
  // neither synopsis describes.
  'lingon-airport': [
    {
      d: 'M18 64 C18 46 46 38 80 38 C118 38 142 48 142 62 C142 76 118 86 80 86 C46 86 18 80 18 64 Z',
      role: 'accent',
    },
    {
      d: 'M32 54 C56 46 110 46 134 56 M30 74 C56 80 110 80 134 70',
      role: 'soft',
    },
    {
      d: 'M60 86 L62 96 H98 L100 86 M70 96 V90 M80 96 V90 M90 96 V90',
      role: 'soft',
    },
    { d: 'M138 56 L152 46 L150 64 L152 80 L138 70' },
    { d: 'M96 82 l6 -4 M108 80 l6 -4 M120 76 l6 -4', role: 'ambient' },
    { d: 'M4 150 H156', role: 'ambient' },
    { d: 'M54 150 L34 190 M106 150 L126 190' },
    { d: 'M80 156 V164 M80 172 V182', role: 'ambient', dashed: true },
  ],
  // The tall building seen from a corner, its rows of floors and the side
  // turned away hatched, the doors of its entrance in tint: the Mafia's
  // Underground Auction is held here, episode 42 / chapter 72.
  'cemetery-building': [...CEMETERY_BUILDING, shadow(84, 158, 60)],
} satisfies Drawings

/**
 * The Yorknew City drawings that change with the story: the deaths, each
 * pinned with its status entry.
 */
export const yorknewCityRedrawn: Redrawings = {
  'baise': [
    // The same lipstick lying on its side on the floor, its cap rolled away:
    // Shizuku kills her outside the auction hall, episode 43 / chapter 73.
    {
      episode: 43,
      chapter: 73,
      value: [
        ...moved(
          LIPSTICK,
          'translate(72 146) rotate(-84) scale(0.74) translate(-80 -100)',
        ),
        ...moved(LIPSTICK_CAP, 'translate(8 2)'),
        { d: 'M4 166 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'shachmono-tocino': [
    // The same robe fallen in a heap, empty, and its sword lying on the
    // floor: Franklin's bullets break his figures and kill him at the
    // auction, episode 43 / chapter 73.
    {
      episode: 43,
      chapter: 73,
      value: [
        ...moved(
          TOCINO_ROBE,
          'translate(80 140) rotate(-5) scale(0.95 0.36) translate(-80 -106)',
        ),
        ...moved(
          TOCINO_SWORD,
          'translate(30 172) rotate(68) translate(-120 -108)',
        ),
        { d: 'M4 178 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'ivlenkov': [
    // The same jacket and tie laid flat on the floor, empty: Shizuku kills
    // him outside the auction hall, episode 43 / chapter 73.
    {
      episode: 43,
      chapter: 73,
      value: [
        ...moved(
          IVLENKOV_JACKET,
          'translate(80 148) rotate(-4) scale(1 0.42) translate(-80 -104)',
        ),
        { d: 'M4 177 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'rabid-dog': [
    // The same shirt laid flat on the ground, empty: Uvogin kills him in the
    // fight with the Shadow Beasts, episode 44 / chapter 76.
    {
      episode: 44,
      chapter: 76,
      value: [
        ...moved(
          RABID_DOG_SHIRT,
          'translate(80 152) rotate(5) scale(1 0.38) translate(-80 -104)',
        ),
        { d: 'M4 180 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'worm': [
    // The same mound with the mouth of the burrow fallen in, no one in it:
    // episode 45 shows the Shadow Beasts killed. Chapter 78 reports them all
    // dead, so a chapter reader holds him presumed dead from here, a stage
    // too (owner, 2026-10-10), and chapter 89's count confirms it with the
    // drawing unchanged.
    {
      episode: 45,
      chapter: 78,
      value: [
        ...WORM_MOUND,
        {
          d: 'M58 118 C62 112 70 114 74 110 C80 116 88 112 94 116 C100 114 104 120 100 124 C90 128 70 128 58 118 Z',
          role: 'accent',
        },
        {
          d: dots([
            [66, 120],
            [80, 122],
            [92, 120],
            [74, 116],
          ]),
          role: 'soft',
        },
      ],
    },
  ],
  'uvogin': [
    // The same vest laid over a low mound of earth: Kurapika kills him and
    // buries him in a shallow grave, episode 47 / chapter 84.
    {
      episode: 47,
      chapter: 84,
      value: [
        { d: 'M8 168 C24 142 54 132 80 132 C106 132 136 142 152 168' },
        ...moved(
          UVOGIN_VEST,
          'translate(80 146) scale(0.8 0.3) translate(-80 -96)',
        ),
        {
          d: dots([
            [22, 160],
            [140, 162],
            [36, 152],
            [128, 152],
          ]),
          role: 'soft',
        },
        { d: 'M4 168 H156', role: 'ambient' },
      ],
    },
  ],
  'dalzollene': [
    // The same screen gone dark, its glass hatched over: Phinks kills him
    // when the Troupe frees Uvogin, episode 45 / chapter 78.
    {
      episode: 45,
      chapter: 78,
      value: [
        ...DALZOLLENE_SCREEN,
        {
          d: 'M38 110 L52 54 M50 112 L66 52 M62 112 L80 50 M74 110 L94 48 M86 110 L106 46 M98 110 L112 54',
          role: 'ambient',
        },
        { d: 'M4 166 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'squala': [
    // The same dog lying down alone on the ground, its head up: Nobunaga
    // kills Squala by his car, episode 56 / chapter 112. The dog rests: it
    // is not drawn dead, as neither medium shows his dogs harmed.
    {
      episode: 56,
      chapter: 112,
      value: [
        ...moved(DOG_HEAD, 'translate(0 62)'),
        { d: 'M92 134 C108 124 134 124 144 136 C150 146 144 150 132 150 H62' },
        { d: 'M60 142 V144 H28 Q22 150 30 150 H62', role: 'soft' },
        { d: 'M112 150 C112 138 120 132 132 134', role: 'soft' },
        { d: 'M144 146 C150 148 154 146 156 140' },
        { d: 'M110 134 l7 -5 M122 134 l7 -5 M132 140 l7 -5', role: 'ambient' },
        { d: 'M4 158 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
}
