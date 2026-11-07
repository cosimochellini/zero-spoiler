import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { FROM_BEHIND, PINION_HAND, SKULL } from './kakin-phase-2'
import { TOP } from './kakin-phase-4'

/** A manga-only stage of a phase 5 record, told in Kakin's chapters. */
const KAKIN = { episode: 148, source: 'chapter' } as const

/**
 * Morena's crown of thorns in 3/4: the twisted ring in tint, its two
 * branches crossing round it and the thorns standing out of it. She wears
 * it in her first appearance, chapter 378.
 */
const MORENA_CROWN: Stroke[] = [
  {
    d: 'M20 110 C24 94 52 88 80 90 C108 92 136 96 140 110 C138 124 108 132 80 130 C52 128 22 124 20 110 Z',
    role: 'accent',
  },
  {
    d: 'M22 104 C36 120 52 94 68 112 C80 126 94 94 108 110 C120 122 132 100 140 108 M24 116 C40 98 56 124 72 104 C86 90 98 122 112 104 C122 92 132 114 138 116',
    role: 'soft',
  },
  {
    d: 'M32 98 l-5 -10 M52 92 l-2 -11 M80 89 v-12 M106 91 l3 -11 M128 97 l6 -10 M26 122 l-7 6 M50 128 l-3 10 M80 131 v11 M108 128 l3 10 M132 120 l7 6 M42 94 l-1 -8 M118 94 l3 -8',
  },
  { d: 'M112 116 l8 -4 M96 120 l8 -4 M44 116 l6 -4', role: 'ambient' },
  shadow(80, 160, 58),
]

export const KAKIN_PHASE_5_DRAWINGS = {
  // Queen Oito's light kimono from the front, the collar crossed and the
  // obi in tint, holding the swaddled baby she carries everywhere: Room
  // 1014, chapter 401. No face, and nothing on who the baby is.
  'oito-hui-guo-rou': [
    {
      d: 'M66 34 L42 44 Q30 50 28 64 L22 128 Q22 134 28 134 H46 L50 176 H110 L114 134 H132 Q138 134 138 128 L132 64 Q130 50 118 44 L94 34',
    },
    { d: 'M66 34 Q80 40 94 34 M66 34 L80 72 M94 34 L74 80', role: 'soft' },
    {
      d: 'M44 100 C44 86 58 80 78 80 H96 C112 78 122 88 120 100 C118 112 106 118 90 118 H70 C54 118 44 112 44 100 Z',
    },
    {
      d: 'M100 82 C112 84 118 94 114 104 C112 110 106 114 98 114 M54 94 Q74 88 94 96 M56 108 Q74 104 92 110',
      role: 'soft',
    },
    { d: 'M34 72 C38 90 42 100 46 104 M126 72 C122 88 118 98 116 104' },
    { d: 'M48 120 H112 V136 H48 Z', role: 'accent' },
    { d: 'M48 128 H112', role: 'soft' },
    {
      d: 'M122 70 l8 -6 M124 90 l8 -6 M126 110 l8 -6 M100 150 l8 -6 M100 164 l8 -6',
      role: 'ambient',
    },
    shadow(80, 186, 50),
  ],

  // Makaha as the flashback shows her, a dark silhouette from behind,
  // hatched, over the collar of a Kakin soldier's uniform in tint: Longhi's
  // half-sister, who found the curse they share, chapter 401. The collar
  // is a convention.
  'makaha': [
    { d: SKULL },
    {
      d: 'M62 80 l14 -10 M60 94 l22 -16 M62 104 l30 -22 M72 106 l28 -20 M88 106 l14 -10 M66 68 l14 -10',
      role: 'ambient',
    },
    { d: 'M64 104 Q80 110 96 104 V116 Q80 122 64 116 Z', role: 'accent' },
    { d: 'M24 176 C28 140 46 126 64 118 M136 176 C132 140 114 126 96 118' },
    {
      d: 'M34 162 l8 -6 M40 172 l10 -7 M126 162 l-8 -6 M120 172 l-10 -7',
      role: 'ambient',
    },
    shadow(80, 184, 54),
  ],

  // Hashito's voluminous fair hair from behind, neatly combed, its outline
  // in tint, over his black suit: a guard Zhang Lei lends to Room 1014,
  // chapter 402.
  'hashito': [
    { d: 'M52 104 C44 70 56 44 80 44 C104 44 116 70 108 104', role: 'accent' },
    {
      d: 'M64 50 C58 68 58 88 60 102 M74 46 C70 66 70 88 72 104 M86 46 C90 66 90 88 88 104 M96 50 C102 68 102 88 100 102',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Sakata's fist knocking on the double doors of Room 1014's master
  // bedroom, his shirt cuff in tint out of the black sleeve: he knocks when
  // the talk with Longhi runs long, chapter 401 (named in 402).
  'sakata': [
    { d: 'M18 14 H122 V178 H18 Z' },
    {
      d: 'M70 14 V178 M28 26 H60 V90 H28 Z M80 26 H112 V90 H80 Z M28 102 H60 V166 H28 Z M80 102 H112 V166 H80 Z',
      role: 'soft',
    },
    { d: 'M160 90 L132 84 L128 120 L160 128' },
    { d: 'M132 84 L124 82 L120 118 L128 120 Z', role: 'accent' },
    {
      d: 'M124 82 C116 78 104 80 100 86 C96 94 96 106 100 112 C104 118 114 120 120 118',
    },
    {
      d: 'M100 94 Q106 92 112 96 M99 102 Q105 100 112 104 M100 110 Q106 108 112 112',
      role: 'soft',
    },
    { d: 'M92 88 q-6 10 0 22 M84 84 q-8 16 0 30', role: 'ambient' },
    { d: 'M136 98 l8 2 M136 112 l8 2', role: 'ambient' },
    shadow(70, 190, 56),
  ],

  // An owl-shaped bird of Secret Window perched on the shoulder of a Kakin
  // army zipper jacket, in tint: Musse's ability, which Benjamin inherits.
  // Musse is already dead when he is named, chapter 402, so the drawing is
  // what he left. No eyes, no beak.
  'musse': [
    { d: 'M8 186 C12 150 36 132 62 128 H98 C124 132 148 150 152 186' },
    { d: 'M62 128 V114 Q80 108 98 114 V128' },
    { d: 'M80 112 V186 M76 122 H84 V130 H76', role: 'soft' },
    { d: 'M24 168 Q40 160 56 160 M104 160 Q120 160 136 168', role: 'soft' },
    {
      d: 'M102 134 C92 118 94 100 104 92 L96 86 L112 88 H128 L144 86 L136 92 C146 100 148 118 138 134 L130 144 H110 Z',
      role: 'accent',
    },
    {
      d: 'M104 104 C100 118 104 130 114 140 M136 104 C140 118 136 130 126 140',
      role: 'soft',
    },
    { d: 'M114 144 l-2 6 M118 144 v6 M122 144 v6 M126 144 l2 6' },
    { d: 'M128 160 l8 -6 M132 174 l8 -6 M110 152 l8 -6', role: 'ambient' },
  ],

  // The small box Balsamilco opens with a sequence of buttons, its lid up
  // with the keypad on it, and the three vials of TSK-17 inside in tint:
  // he loads one into his shoe to kill Halkenburg, chapter 402 (named in
  // 403). The box's shape is a frame check.
  'balsamilco': [
    { d: 'M30 112 L96 98 L130 114 L64 130 Z' },
    { d: 'M30 112 V134 L64 152 V130 M64 152 L130 136 V114' },
    {
      d: 'M49 117.3 L95.2 107.5 A3 3 0 0 0 94 101.7 L47.8 111.5 A3 3 0 0 0 49 117.3 Z M57.5 121.8 L103.7 112 A3 3 0 0 0 102.5 106.2 L56.3 116 A3 3 0 0 0 57.5 121.8 Z M66 126.3 L112.2 116.5 A3 3 0 0 0 111 110.7 L64.8 120.5 A3 3 0 0 0 66 126.3 Z',
      role: 'accent',
    },
    { d: 'M96 98 L98 52 L132 68 L130 114' },
    { d: 'M102 62 L128 74 L126 104 L100 92 Z', role: 'soft' },
    {
      d: dots([
        [107, 72],
        [114, 75],
        [121, 78],
        [107, 80],
        [114, 83],
        [121, 86],
        [107, 88],
        [114, 91],
        [121, 94],
      ]),
      role: 'soft',
    },
    {
      d: 'M72 144 l8 -4 M88 140 l8 -4 M104 136 l8 -4 M118 132 l8 -4',
      role: 'ambient',
    },
    shadow(80, 168, 56),
  ],

  // Worio Bay's left hand held up out of his suit sleeve, the pinion on its
  // back in tint: he shows Kaiser the mark Halkenburg left on him, chapter
  // 403.
  'worio-bay': [
    ...moved(PINION_HAND, 'translate(0 -14)'),
    { d: 'M52 154 H104 V166 H52 Z', role: 'soft' },
    { d: 'M48 166 H108 L112 200 M48 166 L44 200' },
    { d: 'M96 174 l8 -6 M98 188 l8 -6', role: 'ambient' },
  ],

  // Vict's right hand raised out of the quilted sleeve of his puffer jacket,
  // the cuff in tint: he talks to Balsamilco in military sign language,
  // chapter 403 (named in 404). Which sign he makes is a frame check.
  'vict': [
    { d: 'M50 200 L54 150 Q80 144 106 150 L110 200' },
    { d: 'M52 172 Q80 166 108 172 M51 188 Q80 182 109 188', role: 'soft' },
    { d: 'M54 150 Q80 144 106 150 L104 138 Q80 132 56 138 Z', role: 'accent' },
    {
      d: 'M58 138 L56 92 Q56 86 61 86 Q66 86 66 92 L68 120 M68 120 L68 56 Q68 50 73 50 Q78 50 78 56 V118 M78 118 V48 Q78 42 83 42 Q88 42 88 48 V118 M88 118 L90 54 Q90 48 95 48 Q100 48 100 54 L100 136',
    },
    {
      d: 'M100 112 C110 104 120 96 126 90 Q130 86 134 90 Q137 94 132 100 C124 112 112 126 104 138',
    },
    { d: 'M60 104 h6 M70 72 h8 M80 66 h8 M91 70 h8', role: 'soft' },
    { d: 'M90 124 l6 -4 M92 132 l6 -4', role: 'ambient' },
    { d: 'M40 70 q-6 10 0 20 M146 60 q6 10 0 20', role: 'ambient' },
  ],

  // Culdcept: Shikaku's two hands framing a rectangle with thumb and index
  // finger, and the card of aura between them in tint, darkening, chapter
  // 382. He is already dead when he is named, chapter 404, and Benjamin
  // inherits the ability, so the drawing is what he left.
  'shikaku': [
    {
      d: 'M36 60 Q36 54 41 54 Q46 54 46 60 V126 H108 Q114 126 114 131 Q114 136 108 136 H46 C40 148 30 154 20 150 C12 146 12 134 18 126 C24 120 30 116 36 112 Z',
    },
    { d: 'M18 138 Q26 142 34 138 M16 130 Q24 134 32 130', role: 'soft' },
    {
      d: 'M36 60 Q36 54 41 54 Q46 54 46 60 V126 H108 Q114 126 114 131 Q114 136 108 136 H46 C40 148 30 154 20 150 C12 146 12 134 18 126 C24 120 30 116 36 112 Z',
      transform: 'rotate(180 80 95)',
    },
    {
      d: 'M18 138 Q26 142 34 138 M16 130 Q24 134 32 130',
      role: 'soft',
      transform: 'rotate(180 80 95)',
    },
    { d: 'M52 68 H108 V122 H52 Z', role: 'accent' },
    {
      d: 'M56 84 l14 -12 M56 102 l34 -30 M58 118 l46 -40 M76 118 l28 -24 M94 118 l10 -9',
      role: 'ambient',
    },
  ],

  // Sumidori's short fair hair from behind, its outline in tint, over his
  // black suit: one of Halkenburg's men, chapter 404.
  'sumidori': [
    { d: 'M58 102 C54 72 64 56 80 56 C96 56 106 72 102 102', role: 'accent' },
    {
      d: 'M66 62 l2 8 M76 58 l1 8 M86 58 l-1 8 M94 62 l-2 8 M62 76 l2 6 M98 76 l-2 6',
      role: 'soft',
    },
    ...FROM_BEHIND,
  ],

  // Cleapatro's headdress from behind, straight and cut square at the
  // shoulders like an ancient Egyptian woman's, its band in tint, over the
  // high collar of her uniform with its black stripes: the Supreme
  // Magistrate, chapter 404. The band is a convention.
  'cleapatro': [
    {
      d: 'M48 120 L50 78 C50 58 64 46 80 46 C96 46 110 58 110 78 L112 120 H48',
    },
    { d: 'M62 56 L60 120 M80 48 V120 M98 56 L100 120', role: 'soft' },
    { d: 'M50 74 Q80 62 110 74 V82 Q80 70 50 82 Z', role: 'accent' },
    { d: 'M49 110 H111', role: 'soft' },
    { d: 'M62 120 V132 Q80 138 98 132 V120' },
    {
      d: 'M68 122 V134 M74 122 V136 M86 122 V136 M92 122 V134',
      role: 'ambient',
    },
    { d: 'M24 182 C28 150 44 136 62 132 M136 182 C132 150 116 136 98 132' },
    shadow(80, 188, 54),
  ],

  // A handgun whose muzzle has turned into a snake, in tint: Hinrigh's
  // Biohazard turns the soldiers' guns into snakes, chapter 390 (named in
  // 404). No eyes on the snake.
  'hinrigh': [
    { d: 'M20 84 H96 V100 H20 Z' },
    {
      d: 'M28 100 L22 146 Q22 152 28 152 H42 Q48 152 48 146 L52 112 H68 Q74 112 74 106 V100',
    },
    {
      d: 'M52 112 Q54 124 64 122 Q70 120 70 112 M58 104 Q58 112 62 116',
      role: 'soft',
    },
    { d: 'M30 90 H86 M28 116 l14 2 M26 126 l14 2 M24 136 l14 2', role: 'soft' },
    {
      d: 'M96 84 C110 84 112 72 104 64 C94 54 104 34 126 36 M96 100 C120 100 126 74 116 62 C110 54 116 46 128 48 M126 36 C138 32 150 36 152 42 C150 48 138 52 128 48',
      role: 'accent',
    },
    { d: 'M106 90 l4 6 M114 82 l6 2 M108 52 l4 4', role: 'soft' },
    shadow(70, 170, 54),
  ],

  // Morena's crown of thorns: the young head of the Heil-Ly, named in
  // chapter 405.
  'morena': MORENA_CROWN,

  // Risnorth's white polo collar and plaid tie, in tint, under his suit:
  // the murdered charity chairman a newscast remembers, chapter 405. He is
  // already dead when he is named.
  'risnorth': [
    ...TOP,
    { d: 'M66 50 L58 72 L74 116 M94 50 L102 72 L86 116' },
    { d: 'M66 50 L72 64 L80 56 L88 64 L94 50', role: 'soft' },
    {
      d: 'M76 60 H84 L86 66 L82 70 L88 108 L80 116 L72 108 L78 70 L74 66 Z',
      role: 'accent',
    },
    {
      d: 'M77 82 H85 M76 94 H86 M75 104 H85 M78 72 V112 M83 72 V112',
      role: 'soft',
    },
  ],

  // Onior's corpulent head from behind, the tuft of fair hair on top in
  // tint, the folds of his neck: the Xi-Yu boss, chapter 410. His scars are
  // on his face, so they are not drawn.
  'onior': [
    { d: 'M52 110 C44 72 60 50 80 50 C100 50 116 72 108 110' },
    {
      d: 'M74 52 C72 42 76 34 80 30 C82 38 86 40 90 34 C92 42 90 48 86 52',
      role: 'accent',
    },
    { d: 'M54 114 Q80 122 106 114 M56 124 Q80 132 104 124', role: 'soft' },
    { d: 'M96 70 l8 -6 M100 84 l8 -6 M102 98 l6 -5', role: 'ambient' },
    { d: 'M52 110 L50 128 M108 110 L110 128' },
    { d: 'M12 182 C16 146 34 132 50 128 M148 182 C144 146 126 132 110 128' },
    {
      d: 'M24 166 l8 -6 M30 176 l10 -7 M136 166 l-8 -6 M130 176 l-10 -7',
      role: 'ambient',
    },
    shadow(80, 188, 60),
  ],

  // Kako's short fair hair from behind, curling at the top, in tint: one
  // of Camilla's guards, chapter 411.
  'kako': [
    { d: SKULL },
    {
      d: 'M60 80 C58 72 60 66 64 64 q-4 -8 4 -12 q0 -8 8 -8 q4 -6 8 -6 q4 0 8 6 q8 0 8 8 q8 4 4 12 C100 66 102 72 100 80',
      role: 'accent',
    },
    { d: 'M68 58 q4 -4 8 0 M84 58 q4 -4 8 0 M76 50 q4 -4 8 0', role: 'soft' },
    ...FROM_BEHIND,
  ],

  // A seed sprouting in a glass of water, the shoot and its two leaves in
  // tint: Bill's Erigeron, which he uses on a seed for each student Kurapika
  // calls in, chapter 388 (named in 412).
  'bill': [
    { d: 'M54 76 L60 162 Q60 166 66 166 H94 Q100 166 100 162 L106 76' },
    { d: ellipse(80, 76, 26, 5) },
    { d: ellipse(80, 96, 24, 4), role: 'soft' },
    {
      d: `${ellipse(80, 152, 7, 4)} M74 155 q-4 5 -2 9 M86 155 q4 5 2 9`,
      role: 'soft',
    },
    {
      d: 'M80 148 C78 126 84 104 80 62 C79 48 81 40 80 34 M80 50 C68 42 58 46 54 54 C64 58 74 56 80 50 Z M80 40 C90 30 102 32 106 40 C98 46 88 46 80 40 Z',
      role: 'accent',
    },
    { d: 'M96 110 l4 -3 M96 126 l4 -3 M96 142 l4 -3', role: 'ambient' },
    shadow(80, 176, 40),
  ],

  // Shimanu's long hair from behind, tied tightly back at the nape, the
  // tie in tint, above the collar of her maid's robe: Queen Oito's maid,
  // chapter 412. Where the tie sits is a convention.
  'shimanu': [
    { d: SKULL },
    {
      d: 'M66 62 C66 78 70 92 74 102 M80 58 V102 M94 62 C94 78 90 92 86 102',
      role: 'soft',
    },
    { d: 'M72 102 H88 V108 H72 Z', role: 'accent' },
    {
      d: 'M74 108 C72 124 74 138 78 150 M86 108 C88 124 86 138 82 150 M78 150 L80 154 L82 150',
    },
    ...FROM_BEHIND,
  ],

  // Rihan's queue from behind, the braid down the back of his army jacket
  // and its tie in tint: one of Benjamin's soldiers, chapter 413.
  'rihan': [
    { d: SKULL },
    { d: 'M66 70 Q80 62 94 70 M62 84 Q80 76 98 84', role: 'soft' },
    {
      d: 'M80 64 C72 70 72 80 80 84 C88 88 88 98 80 102 C72 106 72 116 80 120 C88 124 88 134 80 138 C72 142 72 152 80 156 M80 64 C88 70 88 80 80 84 C72 88 72 98 80 102 C88 106 88 116 80 120 C72 124 72 134 80 138 C88 142 88 152 80 156',
    },
    {
      d: 'M75 156 H85 V164 H75 Z M77 164 L74 176 M83 164 L86 176 M80 164 V178',
      role: 'accent',
    },
    ...FROM_BEHIND,
  ],

  // Saquelle's short fair hair from behind, in tint, and his thick neck:
  // one of Benjamin's soldiers, posted with Marayam, chapter 413.
  'saquelle': [
    { d: 'M60 104 C54 76 64 58 80 58 C96 58 106 76 100 104' },
    {
      d: 'M60 84 C58 66 68 58 80 58 C92 58 102 66 100 84 Q80 76 60 84 Z',
      role: 'accent',
    },
    { d: 'M68 64 l2 6 M80 60 v7 M92 64 l-2 6', role: 'soft' },
    {
      d: 'M60 104 L56 126 M100 104 L104 126 M64 114 Q80 120 96 114',
      role: 'soft',
    },
    { d: 'M14 182 C18 148 36 132 56 126 M146 182 C142 148 124 132 104 126' },
    {
      d: 'M24 166 l8 -6 M30 176 l10 -7 M136 166 l-8 -6 M130 176 l-10 -7',
      role: 'ambient',
    },
    shadow(80, 188, 58),
  ],

  // Kanjidol's fist round a knife held point up, the guard in tint, out of
  // the sleeve of his army jacket: he kills Luzurus's guards in their bunks
  // with it, chapter 414 (named in 415).
  'kanjidol': [
    { d: 'M10 196 L58 136 M34 200 L76 146' },
    { d: 'M24 182 L48 194 M36 166 L60 178', role: 'soft' },
    {
      d: 'M58 124 C56 110 68 102 84 104 C98 106 102 118 100 130 C98 144 86 150 72 148 C62 146 58 136 58 124 Z',
    },
    {
      d: 'M64 116 Q72 112 80 116 M64 128 Q72 124 82 128 M66 140 Q74 136 84 140',
      role: 'soft',
    },
    { d: 'M66 104 L100 94 L102 100 L70 110 Z', role: 'accent' },
    { d: 'M78 100 L100 26 L108 30 L94 98' },
    { d: 'M98 40 L90 92', role: 'soft' },
    { d: 'M30 184 l6 -4 M40 192 l6 -4', role: 'ambient' },
  ],

  // Zhang Lei's coin held up between finger and thumb, the floral design on
  // its face in tint, out of an army jacket sleeve: Coventoba keeps the coin
  // that manipulates him, chapter 417. The number on it is lettering, and
  // the flower is the convention of Zhang Lei's coin.
  'coventoba': [
    { d: circle(80, 70, 30) },
    { d: circle(80, 70, 24), role: 'soft' },
    {
      d: `${circle(80, 61, 5)} ${circle(88.6, 67.2, 5)} ${circle(85.3, 77.3, 5)} ${circle(74.7, 77.3, 5)} ${circle(71.4, 67.2, 5)}`,
      role: 'accent',
    },
    { d: 'M30 196 L40 150 L74 160 L66 200' },
    {
      d: 'M40 150 C46 132 58 114 66 98 Q70 92 76 96 Q80 100 76 106 L70 120 M74 160 C86 150 98 132 102 112 Q104 104 98 102 Q92 102 90 108 L86 124',
    },
    { d: 'M46 168 L68 176 M42 182 L64 190', role: 'soft' },
    { d: 'M104 56 l6 -4 M106 70 l6 -4 M104 84 l6 -4', role: 'ambient' },
  ],
} satisfies Drawings

/** The phase 5 records whose drawing changes in chapters 401–420 (#1158). */
export const kakinPhaseFiveRedrawn: Redrawings = {
  morena: [
    // The same crown of thorns, and above it two parallel scars in tint:
    // the mark every Carnival Orphan is given at birth, which she bears on
    // her face (no face drawn; the marks are a frame check). She tells
    // Borksen she is not the real Morena Prudo, who lies in a grave under
    // her name, but a Carnival Orphan sorted as "flesh", chapter 408.
    {
      ...KAKIN,
      chapter: 408,
      value: [
        ...MORENA_CROWN,
        {
          d: 'M64 24 C70 40 76 54 80 68 M78 20 C84 36 90 50 94 64',
          role: 'accent',
        },
      ],
    },
  ],
}
