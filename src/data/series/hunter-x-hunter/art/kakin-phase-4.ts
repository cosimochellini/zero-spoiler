import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { FROM_BEHIND, SKULL } from './kakin-phase-2'

/**
 * A front of clothes with no one in it, below the collar: the shoulders,
 * the sleeves down to the hem, the far side hatched. Each record draws its
 * own collar and fastening over it.
 */
const TOP: Stroke[] = [
  {
    d: 'M42 62 Q56 52 66 50 M94 50 Q104 52 118 62 C130 76 134 104 134 150 H120 L116 100 M42 62 C30 76 26 104 26 150 H40 L44 100',
  },
  { d: 'M44 100 L42 168 H118 L116 100' },
  { d: 'M120 112 l6 -4 M122 128 l6 -4 M122 144 l6 -4', role: 'ambient' },
  shadow(80, 182, 54),
]

/** Sarasa's heart-shaped purse, its strap and its seam: she always has it. */
const SARASA_PURSE: Stroke[] = [
  {
    d: 'M80 150 C56 132 40 116 40 98 C40 84 52 76 62 78 C70 80 76 86 80 92 C84 86 90 80 98 78 C108 76 120 84 120 98 C120 116 104 132 80 150 Z',
    role: 'accent',
  },
  {
    d: 'M80 140 C62 126 50 114 50 99 C50 90 58 86 64 88 C70 90 76 96 80 102 C84 96 90 90 96 88 C102 86 110 90 110 99 C110 114 98 126 80 140',
    role: 'soft',
  },
  { d: 'M48 86 C46 50 114 50 112 86' },
  { d: `M80 102 V114 ${circle(80, 117, 3)}`, role: 'soft' },
  { d: 'M104 110 l6 -4 M100 122 l6 -4', role: 'ambient' },
]

/** Terebellum's tracksuit top: the stand collar, the zip in tint, the cuffs. */
const TRACKSUIT: Stroke[] = [
  ...TOP,
  { d: 'M66 50 L66 36 Q80 30 94 36 L94 50 Q80 56 66 50 Z' },
  { d: 'M80 52 V168 M80 60 H84 V68 H80', role: 'accent' },
  { d: 'M26 142 H40 M120 142 H134 M42 158 H118', role: 'soft' },
  { d: 'M56 112 H72 M88 112 H104', role: 'soft' },
]

export const KAKIN_PHASE_4_DRAWINGS = {
  // Tajao's head from behind: the curtain haircut parted in the middle, its
  // dyed hair in tint, and the shorter dark hair of his nape, its natural
  // colour, hatched: the Cha-R vice boss, chapter 384.
  'tajao': [
    { d: 'M54 98 C50 66 62 50 80 50 C98 50 110 66 106 98', role: 'accent' },
    {
      d: 'M80 50 V62 M68 56 C62 70 60 84 60 96 M92 56 C98 70 100 84 100 96',
      role: 'soft',
    },
    { d: 'M60 98 Q80 104 100 98 L98 110 Q80 116 62 110 Z' },
    { d: 'M66 110 l6 -8 M76 112 l6 -8 M86 112 l6 -8', role: 'ambient' },
    ...FROM_BEHIND,
  ],

  // Famule's short permed hair from behind, its curly outline in tint, over
  // the collar of his black suit: one of Queen Duazul's guards, chapter 389.
  'famule': [
    {
      d: 'M58 104 q-8 -6 -4 -12 q-6 -6 0 -12 q-4 -8 4 -12 q0 -8 8 -8 q4 -6 14 -4 q8 -4 12 2 q8 0 8 8 q8 4 4 12 q6 6 0 12 q4 6 -4 12',
      role: 'accent',
    },
    {
      d: 'M66 70 q4 -4 8 0 M84 66 q4 -4 8 0 M62 86 q4 -4 8 0 M78 82 q4 -4 8 0 M92 86 q4 -4 8 0 M70 98 q4 -4 8 0 M86 98 q4 -4 8 0',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Fukataki's hair pulled back into a bun at the back of her head, the bun
  // held in a hairnet and the pin through it in tint, over the black
  // dress of her maid's uniform: Camilla's majordomo, chapter 389.
  'fukataki': [
    { d: SKULL },
    { d: 'M66 64 C72 70 74 76 74 80 M94 64 C88 70 86 76 86 80', role: 'soft' },
    { d: circle(80, 90, 15) },
    {
      d: 'M68 82 L92 98 M66 92 L84 104 M74 78 L94 90 M92 82 L68 98 M94 92 L76 104 M86 78 L66 90',
      role: 'soft',
    },
    { d: `M58 80 L102 100 ${circle(56, 79, 3)}`, role: 'accent' },
    ...FROM_BEHIND,
  ],

  // The curse a Have-Not like Taler carries out: an object connected to the
  // target, drawn as a photograph face down, its back's border in tint,
  // and the dagger beside it. Taler is sent to curse Marayam, chapter 389.
  // The wiki gives a photograph only as the example, so the object is a
  // frame check.
  'taler': [
    { d: 'M30 74 L100 60 L114 124 L44 138 Z', role: 'accent' },
    { d: 'M38 78 L96 66 L106 118 L48 130 Z', role: 'soft' },
    { d: 'M60 152 L132 104 L138 110 L66 158 Z' },
    { d: 'M66 158 L136 108', role: 'soft' },
    { d: 'M54 140 L64 160 M48 150 L60 146 L52 160' },
    { d: 'M40 160 L54 148 L60 154 L46 166 Z' },
    { d: 'M44 156 l6 -5 M48 160 l6 -5', role: 'ambient' },
    shadow(84, 176, 56),
  ],

  // The infusion set Zakuro always carries, two bags of blood in tint
  // hanging from its hook, the lines joining into the drip chamber and
  // down to the needle; his own blood moves with Nen, a few drops on the
  // ground: a Xi-Yu member, chapter 390. How he carries the set is a frame
  // check.
  'zakuro-custard': [
    { d: 'M54 24 H106 M80 24 V14 M60 24 V32 M100 24 V32' },
    {
      d: 'M46 34 H74 V86 Q74 94 66 94 H54 Q46 94 46 86 Z M86 34 H114 V86 Q114 94 106 94 H94 Q86 94 86 86 Z',
      role: 'accent',
    },
    { d: 'M50 58 H70 M90 58 H110', role: 'soft' },
    { d: 'M60 94 V104 L80 112 L100 104 V94' },
    { d: 'M74 112 H86 V132 H74 Z' },
    { d: 'M80 132 C80 150 56 150 54 162 C52 172 66 176 74 170 L88 164' },
    { d: 'M76 120 H84 M116 168 h0.01 M126 160 h0.01 M132 172 h0.01' },
    {
      d: 'M48 40 l4 -4 M48 52 l4 -4 M88 40 l4 -4 M88 52 l4 -4',
      role: 'ambient',
    },
    shadow(80, 184, 54),
  ],

  // Lynch's fair hair from behind, gathered into a tube that spirals down
  // the back of her head, in tint, the locks from her forehead falling to
  // her shoulders: a Xi-Yu member, chapter 390.
  'lynch-fullbokko': [
    { d: SKULL },
    {
      d: 'M70 66 C70 58 90 58 90 66 V106 C90 116 70 116 70 106 Z',
      role: 'accent',
    },
    {
      d: 'M70 76 Q80 82 90 74 M70 86 Q80 92 90 84 M70 96 Q80 102 90 94',
      role: 'soft',
    },
    { d: 'M58 94 C56 106 58 116 52 128 M102 94 C104 106 102 116 108 128' },
    ...FROM_BEHIND,
  ],

  // Tevelares's hair from behind, slicked back in long strands that fall
  // past his ears, the ends in tint, over his jacket: a Heil-Ly member,
  // chapter 391.
  'tevelares': [
    { d: SKULL },
    {
      d: 'M66 60 C64 78 66 94 64 108 M74 57 C72 76 74 94 72 110 M86 57 C88 76 86 94 88 110 M94 60 C96 78 94 94 96 108',
      role: 'soft',
    },
    {
      d: 'M58 104 C54 112 48 114 44 112 M102 104 C106 112 112 114 116 112',
      role: 'accent',
    },
    ...FROM_BEHIND,
  ],

  // Quorolle's jacket from the front, its high collar in tint and the
  // front open down his chest: a Heil-Ly member, chapter 391.
  'quorolle': [
    ...TOP,
    { d: 'M66 50 L62 30 Q80 24 98 30 L94 50', role: 'accent' },
    { d: 'M68 48 L66 34 Q80 30 94 34 L92 48', role: 'soft' },
    { d: 'M66 50 L80 118 L94 50' },
    { d: 'M74 70 Q80 76 86 70', role: 'soft' },
  ],

  // Padaille's right hand turned into a hammer, out of the plain sleeve of
  // his shirt, the head in tint: his ability, shown as he attacks Hinrigh
  // in chapter 391, the chapter he is named and dies in.
  'padaille': [
    { d: 'M8 128 L64 110 L72 134 L16 152 Z' },
    { d: 'M58 112 L66 136', role: 'soft' },
    { d: 'M68 116 L110 104 L114 116 L72 128' },
    { d: 'M106 72 L128 66 L144 122 L122 128 Z', role: 'accent' },
    { d: 'M128 66 L134 62 L150 118 L144 122', role: 'soft' },
    { d: 'M20 146 l8 -6 M32 142 l8 -6 M44 138 l8 -6', role: 'ambient' },
    shadow(80, 170, 60),
  ],

  // Misha Hao's cropped leather jacket from the front, the zips down its
  // sleeves in tint, and her belt below: the dead Xi-Yu undertaker, riding
  // on Padaille's back, chapter 392.
  'misha-hao': [
    { d: 'M42 62 Q56 52 66 50 L80 60 L94 50 Q104 52 118 62 L120 112 H40 Z' },
    {
      d: 'M42 62 C30 78 26 106 26 150 H40 L44 100 M118 62 C130 78 134 106 134 150 H120 L116 100',
    },
    { d: 'M33 84 L31 146 M127 84 L129 146', role: 'accent' },
    {
      d: 'M66 50 L56 72 L66 78 L80 60 M94 50 L104 72 L94 78 L80 60',
      role: 'soft',
    },
    { d: 'M44 112 V124 M116 112 V124', role: 'soft' },
    { d: 'M42 124 H118 V134 H42 Z M74 124 V134 H86 V124' },
    {
      d: 'M100 80 l8 -6 M102 94 l10 -7 M90 104 l10 -7 M50 90 l8 -6',
      role: 'ambient',
    },
    shadow(80, 172, 52),
  ],

  // Maizan's dark soldier's helmet in 3/4, hatched, its chin strap in tint:
  // the corporal who sells the Mafia the hidden room, chapter 393.
  'maizan': [
    { d: 'M34 112 C34 52 126 52 126 112' },
    { d: 'M26 112 H134 Q132 122 124 122 H36 Q28 122 26 112 Z' },
    {
      d: 'M46 122 C52 134 70 138 80 138 C90 138 108 134 114 122',
      role: 'accent',
    },
    {
      d: 'M96 76 l10 -6 M104 88 l12 -8 M108 102 l12 -8 M44 94 l8 -6',
      role: 'ambient',
    },
    { d: 'M48 82 Q80 68 112 82', role: 'soft' },
    shadow(80, 166, 52),
  ],

  // Daemon's long hair from behind, slicked back to his shoulders, its
  // outline in tint, over his black shirt, hatched: a Heil-Ly member,
  // chapter 393.
  'daemon': [
    {
      d: 'M56 112 C50 74 62 52 80 52 C98 52 110 74 104 112 Q80 120 56 112',
      role: 'accent',
    },
    {
      d: 'M68 56 C66 78 68 98 66 114 M80 52 V118 M92 56 C94 78 92 98 94 114',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Gelato's hair from behind: dark and short on her right, hatched, and on
  // her left a light lock in tint over the rest, dark and longer: a
  // Heil-Ly member, chapter 393.
  'gelato': [
    { d: 'M80 54 C96 54 106 72 102 102 H80' },
    { d: 'M84 64 l12 -8 M84 78 l16 -11 M84 92 l16 -11', role: 'ambient' },
    {
      d: 'M80 54 C64 54 54 72 56 96 C56 108 52 118 50 128 H66 L62 96',
      role: 'soft',
    },
    { d: 'M80 54 C70 60 66 72 66 88 L80 92 Z', role: 'accent' },
    { d: 'M58 110 l6 -5 M56 122 l8 -6', role: 'ambient' },
    ...FROM_BEHIND,
  ],

  // Perigord's open hand put out to meet a knife thrown at him, the cuff in
  // tint: he means to try his ability on the wound, chapter 399. No glow.
  'perigord': [
    {
      d: 'M70 168 L72 112 C64 104 62 94 66 88 L68 58 Q68 52 73 52 Q78 52 78 58 V86 M78 84 V46 Q78 40 83 40 Q88 40 88 46 V84 M88 84 V50 Q88 44 93 44 Q98 44 98 50 V88 M98 90 V62 Q98 56 103 56 Q108 56 108 62 V112 C108 128 104 140 102 168',
    },
    {
      d: 'M70 112 C60 108 52 100 48 90 Q46 84 52 84 Q56 84 58 90 C60 96 64 100 70 102',
    },
    { d: 'M68 168 H104 V180 H68 Z', role: 'accent' },
    { d: 'M68 64 h10 M78 52 h10 M88 56 h10 M98 68 h10', role: 'soft' },
    { d: 'M4 22 L10 16 L24 28 L18 34 Z M18 34 L24 28 L50 56 Z' },
    { d: 'M8 36 l10 0 M12 44 l10 0 M28 10 l0 10', role: 'ambient' },
  ],

  // Bille's bushy hair from behind, its outline in tint, the shaved sides
  // hatched: a Heil-Ly member, chapter 393.
  'bille': [
    { d: SKULL },
    {
      d: 'M64 74 C58 58 62 40 72 38 C76 30 86 30 90 38 C100 40 102 58 96 74 Z',
      role: 'accent',
    },
    { d: 'M72 48 q4 -4 8 0 M80 56 q4 -4 8 0 M68 62 q4 -4 8 0', role: 'soft' },
    {
      d: 'M60 82 l6 -5 M58 94 l8 -6 M62 104 l8 -6 M94 82 l6 -5 M92 94 l8 -6 M92 104 l8 -6',
      role: 'ambient',
    },
    ...FROM_BEHIND,
  ],

  // The front door of Room 3101 in 3/4, ajar on the dark beyond it,
  // hatched, the handle in tint: the trap Voconte connects to the
  // Heil-Ly's hideout, chapters 393 and 394. No number on the door.
  'voconte': [
    { d: 'M40 30 H112 V160 H40 Z' },
    { d: 'M48 38 H104 V160', role: 'soft' },
    { d: 'M48 38 L78 46 V166 L48 160 Z' },
    { d: circle(72, 104, 3), role: 'accent' },
    {
      d: 'M84 50 l14 -10 M84 70 l18 -13 M84 90 l18 -13 M84 110 l18 -13 M84 130 l18 -13 M84 150 l18 -13',
      role: 'ambient',
    },
    { d: 'M8 160 H152', role: 'ambient', dashed: true },
    shadow(80, 172, 50),
  ],

  // A glass of water in 3/4 with a leaf floating on it, the leaf in tint:
  // Matvere hands Bille the cup for his Water Divination, chapter 394.
  'matvere': [
    { d: 'M50 70 L58 150 Q58 156 66 156 H94 Q102 156 102 150 L110 70' },
    { d: ellipse(80, 70, 30, 6) },
    { d: ellipse(80, 90, 27, 5), role: 'soft' },
    {
      d: 'M70 90 C74 82 88 82 92 90 C88 96 74 96 70 90 Z M70 90 H92',
      role: 'accent',
    },
    { d: 'M98 104 l4 -3 M98 120 l4 -3 M96 136 l4 -3', role: 'ambient' },
    shadow(80, 168, 40),
  ],

  // Hinrigh's knife lying on the floor inside the open door of Room 3101,
  // its grip in tint: Tassi goes in to fetch it, chapter 394, the chapter
  // he is named and dies in.
  'tassi': [
    { d: 'M30 20 V150 M130 20 V150 M30 20 H130' },
    { d: 'M38 28 H122 V150', role: 'soft' },
    { d: 'M4 150 H156' },
    {
      d: 'M44 136 l8 -6 M60 136 l8 -6 M92 136 l8 -6 M108 136 l8 -6',
      role: 'ambient',
    },
    { d: 'M54 156 L96 146 L98 150 L58 160 Z' },
    { d: 'M96 144 L120 138 L122 146 L98 152 Z', role: 'accent' },
    { d: 'M94 142 L96 154', role: 'soft' },
    shadow(88, 172, 44),
  ],

  // Terebellum's tracksuit top, its zip in tint: a Heil-Ly member, chapter
  // 394. His ability is first shown in chapter 399, so it is not drawn.
  'terebellum': TRACKSUIT,

  // Chiffon Toto's fair hair from behind, falling just below her face, its
  // outline in tint: a Heil-Ly seamstress, chapter 394.
  'chiffon-toto': [
    {
      d: 'M54 110 C50 72 62 54 80 54 C98 54 110 72 106 110 Q80 116 54 110',
      role: 'accent',
    },
    {
      d: 'M66 60 C62 78 62 94 62 110 M94 60 C98 78 98 94 98 110',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Montblanc Toto's two pigtails from behind, tied with a dark fabric, the
  // ties in tint: a Heil-Ly member, chapter 394.
  'montblanc-toto': [
    { d: SKULL },
    { d: 'M80 58 V104', role: 'soft' },
    {
      d: 'M58 92 C48 98 46 110 50 124 M66 96 C60 104 58 114 60 124 M102 92 C112 98 114 110 110 124 M94 96 C100 104 102 114 100 124',
    },
    {
      d: 'M54 86 L66 90 L62 98 L52 94 Z M106 86 L94 90 L98 98 L108 94 Z',
      role: 'accent',
    },
    { d: 'M64 70 l6 -4 M90 70 l6 -4', role: 'soft' },
    ...FROM_BEHIND,
  ],

  // Sodom's unkempt hair from behind, its ragged outline in tint: a
  // Heil-Ly back-alley doctor, chapter 394.
  'sodom': [
    {
      d: 'M56 106 L50 96 L56 90 L48 80 L58 76 L52 62 L64 64 L64 50 L74 56 L80 44 L86 56 L96 50 L96 64 L108 62 L102 76 L112 80 L104 90 L110 96 L104 106',
      role: 'accent',
    },
    {
      d: 'M66 72 l4 8 M80 64 v10 M92 72 l-4 8 M72 88 l2 8 M88 88 l-2 8',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Borksen's light hair from behind, falling past her ears and curling up
  // at the ends, in tint, over a soldier's collar: a provisional Hunter in
  // Tserriednich's army, chapter 394.
  'borksen': [
    {
      d: 'M56 98 C50 66 62 52 80 52 C98 52 110 66 104 98 C106 104 112 104 114 98 M56 98 C54 104 48 104 46 98',
      role: 'accent',
    },
    { d: 'M68 58 C64 74 62 86 62 98 M92 58 C96 74 98 86 98 98', role: 'soft' },
    ...FROM_BEHIND,
  ],

  // Otocin's light hair from behind, parted on his left, in tint, over a
  // soldier's collar: one of Tserriednich's soldiers, chapter 394.
  'otocin': [
    { d: 'M56 102 C50 70 62 54 80 54 C98 54 110 70 104 102', role: 'accent' },
    { d: 'M68 56 C66 70 66 84 64 98', role: 'soft' },
    {
      d: 'M68 62 C80 66 92 74 100 88 M68 74 C78 80 88 88 94 100',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Gipper's buzz cut from behind, the stubble dotted and the round of his
  // head in tint, over a soldier's collar: the corporal leading the search
  // for the Mafia, chapter 394.
  'gipper': [
    { d: SKULL, role: 'accent' },
    {
      d: dots([
        [68, 70],
        [80, 66],
        [92, 70],
        [64, 84],
        [76, 80],
        [88, 80],
        [96, 86],
        [70, 96],
        [82, 94],
        [92, 98],
      ]),
      role: 'soft',
    },
    {
      d: 'M54 90 C48 88 46 96 50 102 M106 90 C112 88 114 96 110 102',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Momolly's long dark hair from behind, hatched, its outline in tint,
  // over a soldier's collar: one of Tserriednich's soldiers, chapter 394.
  'momolly': [
    {
      d: 'M54 128 C48 84 60 54 80 54 C100 54 112 84 106 128 Z',
      role: 'accent',
    },
    {
      d: 'M58 80 l14 -10 M56 98 l22 -16 M58 114 l30 -22 M70 122 l32 -24 M88 124 l18 -14',
      role: 'ambient',
    },
    ...FROM_BEHIND,
  ],

  // Father Lisores's priest's hat in 3/4, a round crown on a broad brim,
  // the band in tint: he welcomes the children to the church in Meteor
  // City, chapter 395. The hat's shape is a frame check.
  'lisores': [
    { d: ellipse(80, 118, 64, 18) },
    { d: 'M46 112 C44 60 116 60 114 112' },
    { d: 'M44 104 Q80 116 116 104 V112 Q80 124 44 112 Z', role: 'accent' },
    { d: ellipse(80, 118, 50, 12), role: 'soft' },
    { d: 'M98 84 l6 -4 M104 94 l6 -4 M108 104 l6 -4', role: 'ambient' },
    shadow(80, 154, 56),
  ],

  // Sarasa's heart-shaped purse in tint, its strap and its clasp: she is
  // always seen with it, chapter 395.
  'sarasa': [...SARASA_PURSE, shadow(80, 166, 40)],

  // The book Sheila keeps reading, The Swashbuckling Adventures of Dino
  // Hunter, open in 3/4, its cover in tint, and her dark headband with its
  // hearts before it: chapter 395. No title.
  'sheila': [
    { d: 'M22 98 L80 112 L138 94 L132 140 L80 156 L28 142 Z', role: 'accent' },
    { d: 'M30 92 L80 104 L130 88 M80 104 V150' },
    {
      d: 'M36 100 L74 110 M36 110 L74 120 M36 120 L74 130 M86 110 L124 98 M86 120 L124 108 M86 130 L124 118',
      role: 'soft',
    },
    { d: 'M26 166 C50 152 110 152 134 166 L130 172 C108 160 52 160 30 172 Z' },
    {
      d: 'M58 160 C56 156 62 154 63 158 C64 154 70 156 68 160 L63 165 Z M92 160 C90 156 96 154 97 158 C98 154 104 156 102 160 L97 165 Z',
      role: 'soft',
    },
    { d: 'M104 126 l6 -4 M112 128 l6 -4', role: 'ambient' },
  ],

  // Renko's broad-brimmed hat with the two horn-like ears standing out of
  // it, in tint, the black crown hatched: the embalmer who restores
  // Sarasa's body, chapter 397.
  'renko': [
    { d: ellipse(80, 122, 66, 16) },
    { d: 'M48 118 C46 80 114 80 112 118' },
    { d: 'M54 92 L42 54 L66 84 M106 92 L118 54 L94 84', role: 'accent' },
    {
      d: 'M60 104 l10 -8 M66 114 l16 -12 M80 116 l16 -12 M94 112 l10 -8',
      role: 'ambient',
    },
    { d: ellipse(80, 122, 52, 10), role: 'soft' },
    shadow(80, 158, 58),
  ],

  // The large book Yokotani carries, lying in 3/4, the bands on its spine
  // in tint: the Heil-Ly lawyer, chapter 399. No title.
  'yokotani': [
    { d: 'M22 96 L100 80 L140 104 L62 122 Z' },
    { d: 'M22 96 V124 L62 152 V122' },
    { d: 'M62 152 L140 134 V104' },
    { d: 'M30 106 L56 124 M30 114 L56 132', role: 'accent' },
    { d: 'M66 130 L136 114 M66 136 L136 120 M66 142 L136 126', role: 'soft' },
    { d: 'M44 98 L96 88 L118 102 L66 114 Z', role: 'soft' },
    { d: 'M34 128 l6 -4 M40 136 l6 -4 M48 142 l6 -4', role: 'ambient' },
    shadow(80, 170, 60),
  ],

  // A handgun side on, the slide, the grip hatched and the trigger guard in
  // tint: Madwig plays a hitman who remembers nothing but how to use one,
  // chapter 400.
  'madwig': [
    { d: 'M20 82 H128 V102 H20 Z' },
    { d: 'M128 86 H138 V98 H128', role: 'soft' },
    { d: 'M30 90 H118 M36 82 V102', role: 'soft' },
    { d: 'M88 102 L80 156 H110 L114 102' },
    { d: 'M62 102 Q60 124 78 124 H84', role: 'accent' },
    { d: 'M70 102 V114', role: 'soft' },
    { d: 'M88 116 l20 -8 M86 130 l22 -9 M84 144 l24 -10', role: 'ambient' },
    shadow(76, 172, 52),
  ],

  // Himoncé's light hair from behind, falling past his ears, in tint, over
  // his black suit: one of Tyson's staff, chapter 400.
  'himonce': [
    {
      d: 'M54 108 C48 70 62 52 80 52 C98 52 112 70 106 108 L98 100 L92 106 L80 98 L68 106 L62 100 Z',
      role: 'accent',
    },
    {
      d: 'M68 58 C64 74 64 88 66 100 M92 58 C96 74 96 88 94 100',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Anzel's hair from behind, light on one side, in tint, and dark on the
  // other, hatched: one of Tyson's staff, chapter 400.
  'anzel': [
    { d: 'M80 54 C62 54 52 72 56 104 H80 Z', role: 'accent' },
    { d: 'M80 54 C98 54 108 72 104 104 H80' },
    {
      d: 'M84 64 l12 -8 M84 78 l16 -11 M84 92 l16 -11 M86 102 l14 -10',
      role: 'ambient',
    },
    { d: 'M66 62 C62 76 62 90 64 102', role: 'soft' },
    ...FROM_BEHIND,
  ],

  // Hyuga's rectangular-framed glasses, open in 3/4, the frames in tint:
  // one of Tyson's staff, chapter 400.
  'hyuga': [
    { d: 'M30 92 H72 V116 H30 Z M88 90 H126 V112 H88 Z', role: 'accent' },
    { d: 'M72 102 Q80 96 88 100' },
    { d: 'M30 96 L20 88 L24 128 M126 94 L134 86 L132 124' },
    { d: 'M36 98 l8 -4 M94 96 l8 -4', role: 'soft' },
    { d: 'M60 112 l8 -6 M114 108 l8 -6', role: 'ambient' },
    shadow(78, 140, 54),
  ],

  // The small device with one button, the button in tint, that Kaiser
  // hands Steiner to press if the First Prince's men or the army come:
  // chapter 400. Its shape is a frame check.
  'kaiser': [
    { d: 'M48 70 L100 60 L112 130 L60 140 Z' },
    {
      d: 'M100 60 L108 64 L120 134 L112 130 M60 140 L68 144 L120 134',
      role: 'soft',
    },
    { d: `${circle(80, 92, 12)} ${circle(80, 92, 7)}`, role: 'accent' },
    { d: 'M66 114 H94 M68 124 H96', role: 'soft' },
    { d: 'M110 80 l4 -3 M112 96 l4 -3 M114 112 l4 -3', role: 'ambient' },
    shadow(84, 158, 44),
  ],

  // The church in Meteor City from the front, its arched door in tint:
  // the children watch videos there, chapter 395. The wiki only calls it a
  // large church, so the gabled front, the round window and the tower are
  // drawn by convention and are a frame check. Its faith is not named, so
  // no symbol is drawn.
  'all-faiths-church': [
    { d: 'M30 150 V86 L74 50 L118 86 V150' },
    { d: 'M60 150 V118 C60 100 88 100 88 118 V150', role: 'accent' },
    { d: circle(74, 82, 8), role: 'soft' },
    { d: 'M118 150 V40 H142 V150 M118 40 L130 18 L142 40' },
    { d: 'M124 60 H136 V76 H124 Z', role: 'soft' },
    {
      d: 'M126 94 l10 -8 M126 110 l10 -8 M126 126 l10 -8 M126 142 l10 -8',
      role: 'ambient',
    },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 160, 70),
  ],

  // The edge of Uga Forest, and before it the dump where a pile of
  // videotapes lies, one tape in tint: chapter 396.
  'uga-forest': [
    {
      d: 'M6 112 C4 84 26 74 36 88 C40 64 66 62 70 84 C76 60 104 60 108 82 C116 66 140 72 140 92 C152 92 158 104 154 116',
    },
    { d: 'M22 112 V150 M56 104 V150 M92 102 V150 M134 112 V150' },
    {
      d: 'M14 100 l10 -8 M44 90 l12 -9 M80 86 l12 -9 M118 92 l12 -9',
      role: 'ambient',
    },
    { d: 'M30 150 C40 126 60 118 80 118 C104 118 124 128 134 150' },
    { d: 'M58 132 L86 126 L90 140 L62 146 Z', role: 'accent' },
    { d: `${circle(68, 137, 3)} ${circle(80, 134, 3)}`, role: 'soft' },
    { d: 'M92 126 L118 130 L114 142 L90 140', role: 'soft' },
    { d: 'M4 150 H156', role: 'ambient' },
  ],
} satisfies Drawings

/** The Kakin records of phase 4 whose drawing changes in chapters 371–400 (#1156). */
export const kakinPhaseFourRedrawn: Redrawings = {
  sarasa: [
    // Her purse laid in her casket among the flowers the others put in with
    // her: she is abducted and killed, chapter 397. No body is drawn.
    {
      episode: 148,
      chapter: 397,
      source: 'chapter',
      value: [
        { d: 'M14 120 L40 58 H120 L146 120 Z' },
        { d: 'M14 120 V132 H146 V120', role: 'soft' },
        ...moved(
          SARASA_PURSE,
          'translate(80 90) scale(0.42) translate(-80 -110)',
        ),
        {
          d: `${circle(44, 96, 6)} ${circle(116, 96, 6)} ${circle(56, 72, 5)} ${circle(104, 72, 5)}`,
        },
        {
          d: `${circle(44, 96, 2)} ${circle(116, 96, 2)} ${circle(56, 72, 2)} ${circle(104, 72, 2)}`,
          role: 'soft',
        },
        { d: 'M128 104 l6 -4 M132 116 l6 -4', role: 'ambient' },
        shadow(80, 150, 66),
      ],
    },
  ],
  terebellum: [
    // A drink can with the tip of a thrown knife inside it, and the knife's
    // crushed handle with no blade, over the same tracksuit made small: he
    // moves the damage his right hand takes into what his left hand holds,
    // chapter 399.
    {
      episode: 148,
      chapter: 399,
      source: 'chapter',
      value: [
        ...moved(
          TRACKSUIT,
          'translate(80 196) scale(0.56) translate(-80 -196)',
        ),
        {
          d: `M56 30 V86 Q56 92 70 92 Q84 92 84 86 V30 ${ellipse(70, 30, 14, 4)}`,
        },
        { d: 'M66 24 H74 M70 54 L76 40 L80 58 Z', role: 'soft' },
        { d: 'M96 70 L130 58 L134 66 L102 80 Z M100 66 L104 82' },
        { d: 'M110 70 l4 -8 M120 66 l4 -8', role: 'ambient' },
      ],
    },
  ],
}
