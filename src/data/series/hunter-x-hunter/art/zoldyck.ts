import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, shadow } from '~/lib/svg/primitives'

import { DRAGON_HEAD } from './yorknew-abilities'

/**
 * Zeno's robe in 3/4 under its standing collar: the near sleeve and side,
 * the far side narrower, the long panel down the front in tint with its
 * edge turned and its hem turning away, the far side hatched.
 */
const ZENO_ROBE: Stroke[] = [
  { d: 'M64 40 Q76 46 90 40 V33 Q76 39 64 33 Z' },
  { d: 'M90 33 L95 36 V42 L90 40', role: 'soft' },
  { d: 'M64 40 Q46 44 28 56 L20 96 L32 98 L38 72 L40 170 Q54 175 66 172' },
  { d: 'M90 40 Q102 44 114 52 L120 90 L112 92 L110 72 L108 160' },
  {
    d: 'M64 44 L92 44 C96 80 98 120 104 156 L66 162 C62 124 60 84 64 44 Z',
    role: 'accent',
  },
  { d: 'M92 44 L96 46 C100 82 102 120 108 154 L104 156' },
  { d: 'M66 162 C68 168 78 170 90 166 L108 160 L104 156' },
  { d: 'M73 58 C74 90 74 124 77 154', role: 'soft' },
  {
    d: 'M99 66 L104 62 M100 88 L106 84 M102 110 L107 106 M104 132 L108 129 M78 167 L82 164 M88 167 L92 164',
    role: 'ambient',
  },
]

/**
 * Silva's sleeveless shinobi top in 3/4, the crossed collar turning round
 * the neck and the far side hatched, and the far wristband lying below it.
 * The near wristband, in tint, is `SILVA_BAND`.
 */
const SILVA_TOP: Stroke[] = [
  {
    d: 'M62 30 L44 40 Q36 62 46 78 L48 142 Q76 150 104 144 L106 80 Q114 64 110 42 L96 30',
  },
  { d: 'M62 30 Q78 36 96 30', role: 'soft' },
  { d: 'M62 30 C66 56 80 86 104 116' },
  { d: 'M70 31 C74 54 86 80 105 106', role: 'soft' },
  { d: 'M96 30 C92 44 86 54 78 64', role: 'soft' },
  { d: 'M60 98 Q62 120 58 140 M72 110 Q74 126 72 146', role: 'soft' },
  {
    d: 'M96 56 L102 52 M97 76 L103 72 M98 128 L103 124 M99 138 L103 135',
    role: 'ambient',
  },
  {
    d: `${ellipse(108, 168, 13, 4.5)} M95 168 V174 A13 4.5 0 0 0 121 174 V168`,
  },
]
const SILVA_BAND = `${ellipse(54, 166, 16, 5.5)} M38 166 V174 A16 5.5 0 0 0 70 174 V166`

/**
 * Kalluto's dark furisode in 3/4: the near sleeve swung forward with its
 * second face, the far sleeve narrower and hatched, and the broad obi in
 * tint wrapping round the waist.
 */
const KALLUTO_FURISODE: Stroke[] = [
  { d: 'M68 34 L42 44 L16 58 L12 134 Q14 142 24 142 L42 140 L46 84' },
  { d: 'M16 58 L8 66 L6 128 Q6 136 12 134' },
  { d: 'M88 34 L108 42 L122 50 L124 122 Q124 128 118 128 L106 126 L104 84' },
  { d: 'M46 112 L48 172 Q74 178 102 172 L104 112' },
  { d: 'M68 34 L84 70 M75 34 L88 62 M88 34 L80 50', role: 'soft' },
  { d: 'M46 84 Q75 92 104 84 V110 Q75 118 46 110 Z', role: 'accent' },
  { d: 'M104 84 Q110 97 104 110 M46 84 L42 44 M104 84 L108 42', role: 'soft' },
  { d: 'M84 116 L88 174 M26 70 Q30 100 26 128', role: 'soft' },
  {
    d: 'M110 60 L118 55 M110 76 L119 70 M110 92 L119 86 M110 108 L119 102',
    role: 'ambient',
  },
]

/**
 * The Troupe's twelve-legged spider as a symbol, its abdomen and head and
 * six legs a side, centred on the origin. The member's number is left off.
 */
export const TROUPE_SPIDER: Stroke[] = [
  { d: `${ellipse(0, 5, 5.5, 7.5)} ${circle(0, -6, 3.5)}` },
  {
    d: 'M-4 -5 L-8.3 -17.7 L-9.9 -16.5 M-4 -2.8 L-12.4 -13.2 L-16.6 -10.4 M-4 -0.6 L-14.7 -6.9 L-20.5 -1.5 M-4 1.6 L-14.7 -0.1 L-20.5 8.5 M-4 3.8 L-12.4 6.2 L-16.6 17.4 M-4 6 L-8.3 10.7 L-9.9 23.5 M4 -5 L8.3 -17.7 L9.9 -16.5 M4 -2.8 L12.4 -13.2 L16.6 -10.4 M4 -0.6 L14.7 -6.9 L20.5 -1.5 M4 1.6 L14.7 -0.1 L20.5 8.5 M4 3.8 L12.4 6.2 L16.6 17.4 M4 6 L8.3 10.7 L9.9 23.5',
  },
]

/** The spider set beside Kalluto's far sleeve, off the garment. */
const KALLUTO_SPIDER = moved(TROUPE_SPIDER, 'translate(142 26) scale(0.8)')

/** Original objects; the cited episode/chapter references await direct viewing. */
export const ZOLDYCK_DRAWINGS = {
  // Coco Loo's small tour-guide hat, tilted and seen a little from below:
  // the round crown with a fold, the band in tint at its rim and the open
  // underside showing, its inside hatched. She welcomes the bus tour in
  // episode 22 / chapter 39. No badge, no lettering.
  'coco-loo': [
    ...moved(
      [
        { d: 'M42 106 C40 76 56 58 80 58 C104 58 120 76 118 106' },
        {
          d: 'M41 96 C54 88 106 88 119 96 L118 106 C106 98 54 98 42 106 Z',
          role: 'accent',
        },
        { d: 'M42 106 C54 121 106 121 118 106' },
        {
          d: 'M56 108 l6 5 M70 107 l8 7 M86 107 l8 7 M102 108 l6 5',
          role: 'ambient',
        },
        { d: 'M54 82 Q60 68 74 62', role: 'soft' },
        { d: 'M80 59 C74 70 72 80 74 92', role: 'soft' },
        {
          d: 'M106 70 L111 66 M109 78 L115 74 M111 86 L117 82',
          role: 'ambient',
        },
      ],
      'rotate(-14 80 100)',
    ),
    shadow(80, 172, 40),
  ],
  // Zebro's key to the service door, seen from its corner: the guard keeps
  // it at the gate for intruders, in episode 22 / chapter 39.
  'zebro': [
    { d: ellipse(80, 50, 22, 15), role: 'accent' },
    { d: 'M58 50 V55 A22 15 0 0 0 102 55 V50' },
    { d: ellipse(80, 48, 10, 6) },
    { d: 'M63 44 Q68 39 76 37.5', role: 'soft' },
    { d: ellipse(80, 72, 7, 2.5), role: 'soft' },
    { d: 'M76 73 V154 H82 V73' },
    { d: 'M82 154 L86 151 V148 M86 123 V74' },
    { d: 'M82 126 H100 V133 H94 V139 H100 V148 H82' },
    { d: 'M82 126 L86 123 H104 L100 126 M104 123 V145 L100 148', role: 'soft' },
    {
      d: 'M82.5 92 L85.5 90 M82.5 106 L85.5 104 M101 132 L103.5 130 M101 141 L103.5 139',
      role: 'ambient',
    },
    shadow(84, 184, 28),
  ],
  // Mike's long, hand-like forepaw curling round the service door from the
  // dark: the hand that opens it and throws the intruders out in episode 22 /
  // chapter 40. Fingers and claws only; no head.
  'mike': [
    { d: 'M26 162 V32 H130 V162' },
    { d: 'M32 162 V38 H124 V162', role: 'soft' },
    { d: 'M96 164 L32 160 V40 L96 36 V48 M96 64 V71 M96 87 V96 M96 110 V164' },
    { d: 'M96 36 L102 38 V48 M102 64 V71 M102 87 V96 M102 110 V162 L96 164' },
    { d: 'M42 122 L86 120 V150 L42 152 Z', role: 'soft' },
    {
      d: 'M106 44 L120 40 M106 128 L114 124 M106 140 L122 132 M106 152 L122 144',
      role: 'ambient',
    },
    {
      d: 'M124 52 C116 49 106 47 99 49 C93 51 89 56 85 61 M88 66 C92 62 96 61 101 62 C107 63 115 64 124 66',
    },
    {
      d: 'M124 74 C116 71 106 70 99 72 C91 75 83 81 76 88 M80 92 C87 86 94 83 100 84 C108 85 116 87 124 89',
    },
    {
      d: 'M124 98 C116 96 107 96 101 98 C96 100 92 104 89 108 M92 112 C96 108 100 107 104 108 C110 109 118 110 124 112',
    },
    {
      d: 'M85 61 C78 65 76 73 79 80 C81 74 84 70 88 66 M76 88 C69 93 67 102 70 108 C72 102 75 96 80 92 M89 108 C84 112 83 119 85 124 C87 119 89 115 92 112',
      role: 'accent',
    },
    { d: 'M91 54 Q93 57 91 61 M86 79 Q89 82 87 86', role: 'soft' },
    {
      d: 'M118 46 L121 50 L119 52 L123 55 M117 116 L121 119 L119 122 L123 124',
      role: 'soft',
    },
    shadow(80, 167, 54),
  ],
  // Seaquant's white headband, off and still in its loop, seen from a little
  // above: the knot pulled tight in tint, the cloth gathered where it is
  // tied and the two long tails trailing to the ground. The groundskeeper
  // wears it at the servants' quarters in episode 23 / chapter 40.
  'seaquant': [
    { d: ellipse(70, 104, 48, 17) },
    { d: 'M22 104 V114 A48 17 0 0 0 118 114 V104' },
    { d: 'M28 110 A42 12 0 0 1 112 110', role: 'soft' },
    {
      d: 'M40 98 L44 93 M54 93 L57 88 M70 91 L72 86 M86 92 L88 87',
      role: 'ambient',
    },
    {
      d: 'M106 112 C108 102 124 100 130 108 C136 116 130 128 120 130 C110 131 104 122 106 112 Z',
      role: 'accent',
    },
    { d: 'M112 108 L117 116 M124 106 L121 115', role: 'soft' },
    {
      d: 'M124 128 C134 140 140 158 134 176 L144 174 C150 156 142 136 130 125',
    },
    { d: 'M114 131 C112 148 102 164 90 174 L98 180 C112 168 121 150 121 132' },
    { d: 'M128 150 l-2 10 M106 160 l-4 6', role: 'soft' },
    shadow(84, 186, 56),
  ],
  // Canary's staff, its foot on the line she draws across the path:
  // she stops anyone who crosses it in episode 23 / chapter 41, ahead of
  // her named scene in episode 24 / chapter 42.
  'canary': [
    { d: 'M45.6 155.7 L107.6 37.6 M54.4 160.4 L116.4 42.4' },
    { d: 'M45.6 155.7 A5 2.3 28 0 0 54.4 160.4', role: 'soft' },
    { d: 'M49.7 153.2 L108.6 42.8', role: 'soft' },
    { d: circle(116, 33, 8), role: 'accent' },
    { d: 'M107.6 37.6 A5 2 28 0 0 116.4 42.4', role: 'soft' },
    { d: 'M111 29 Q113 25.5 118 25.5', role: 'soft' },
    { d: 'M119 38 L122 35 M116 40 L121 35', role: 'ambient' },
    {
      d: 'M60.5 140.5 l4 -2 M66.9 128.5 l4 -2 M73.3 116.5 l4 -2 M79.7 104.5 l4 -2',
      role: 'ambient',
    },
    { d: 'M12 160 Q70 156 148 158', role: 'soft' },
    shadow(86, 164, 44),
  ],
  // Gotoh's unlettered coins, turned edge on and resting in a small stack:
  // named-scene gate episode25 / chapter43; no later Nen attack.
  'gotoh': [
    { d: ellipse(76, 130, 37, 12) },
    { d: 'M39 130 V139 C39 155 113 155 113 139 V130' },
    { d: ellipse(76, 130, 28, 7), role: 'soft' },
    { d: 'M40 139 C54 151 99 151 112 138', role: 'soft' },
    {
      d: 'M47 141 V145 M57 145 V148 M69 147 V150 M82 148 V151 M95 145 V148 M105 141 V145',
      role: 'ambient',
    },
    { d: ellipse(82, 74, 21, 30), role: 'accent' },
    { d: 'M89 45 C119 48 120 95 90 103', role: 'soft' },
    { d: ellipse(82, 74, 14, 23), role: 'soft' },
    { d: 'M107 61 L111 64 M108 71 L113 73 M106 83 L111 85', role: 'ambient' },
    shadow(78, 181, 48),
  ],
  // Milluki's whip, the wrapped handle seen from its end and the lash
  // tapering to its tip: he whips the chained Killua in episode 23 /
  // chapter 42.
  'milluki': [
    { d: 'M53.7 123.5 L29.7 165.5 M62.3 128.5 L38.3 170.5', role: 'accent' },
    { d: 'M29.7 165.5 A5 2.5 30 1 0 38.3 170.5 A5 2.5 30 1 0 29.7 165.5' },
    { d: 'M53.7 123.5 A5 2.5 30 0 0 62.3 128.5', role: 'soft' },
    {
      d: 'M36.7 153.3 L43.3 161.7 M42.7 142.8 L49.3 151.2 M48.7 132.3 L55.3 140.7',
      role: 'soft',
    },
    { d: 'M54 122 C48 80 92 38 126 54 C150 66 140 108 114 114' },
    { d: 'M62 126 C57 86 96 46 124 58 C144 67 136 104 114 114' },
    {
      d: 'M114 114 C96 120 86 136 98 150 C110 162 132 158 146 166',
      role: 'soft',
    },
    { d: 'M146 166 L151 164 M146 166 L150 170', role: 'soft' },
    { d: 'M60 100 L64 98 M66 82 L70 81 M78 66 L81 66', role: 'ambient' },
    shadow(84, 186, 50),
  ],
  // Zeno's robe in 3/4 from under its standing collar, the long panel
  // hanging down its front in tint, its edge turned to show a second face
  // and the hem turning away, the far side hatched: Killua's grandfather
  // in episode 24 / chapter 42. The words on the panel are left off.
  'zeno': [...ZENO_ROBE, shadow(78, 186, 44)],
  // Silva's sleeveless shinobi top in 3/4, the crossed collar turning
  // round the neck and the far side hatched, with the pair of wristbands he
  // wears below it, the near one in tint: Killua's father talks with his
  // son in episode 24 / chapter 42, named there in the anime and in chapter
  // 95 in the manga. No face.
  'silva': [
    ...SILVA_TOP,
    { d: SILVA_BAND, role: 'accent' },
    shadow(80, 190, 50),
  ],
  // Kalluto's dark furisode in 3/4, the near sleeve swinging forward to
  // show its depth, the broad obi in tint wrapping round it and the far
  // side hatched: he follows his mother to the gate in episode 24 / chapter
  // 42. No fan, no paper.
  'kalluto': [...KALLUTO_FURISODE, shadow(72, 186, 46)],
  // The tour bus that takes the three from town towards Kukuroo Mountain,
  // its summit over the roof and the windscreen in tint: the arrival in
  // Padokea in episode 22 / chapter 39. No route board, no company name.
  // A bus, not a train: episode 22 and chapter 39 both have the bus tour,
  // the train is in the chapter alone.
  'republic-of-padokea': [
    { d: 'M64 81.6 L90 46 L100 51 L110 44 L160 98', role: 'soft' },
    { d: 'M24 90 L50 80 V142 L24 138 Z' },
    { d: 'M50 80 L138 90 V136 L50 142' },
    { d: 'M28 94 L46 87 V110 L28 114 Z', role: 'accent' },
    { d: 'M24 130 L50 134 M50 128 L138 124', role: 'soft' },
    {
      d: 'M58 88.9 L73 90.6 V112.6 L58 110.9 Z M77 91.1 L92 92.8 V114.8 L77 113.1 Z M96 93.2 L111 94.9 V116.9 L96 115.2 Z M115 95.4 L130 97.1 V119.1 L115 117.4 Z',
    },
    {
      d: 'M58.5 140.8 A9.5 9.5 0 0 0 77.5 140.8 M111.5 137.6 A9 9 0 0 0 128.5 137.6',
    },
    { d: `${circle(68, 143, 3)} ${circle(120, 142, 2.6)}`, role: 'soft' },
    { d: 'M27 120 L33 117.6 M27 127 L35 123.8', role: 'ambient' },
    { d: 'M6 150 H154', role: 'ambient' },
    shadow(84, 151, 58),
  ],
  // The Testing Gate in 3/4, set in the stone wall round the estate: its
  // tall double doors in tint, the smaller doors nested inside them marked
  // without their numbers, the jamb showing its depth and the dormant
  // summit behind. Zebro opens it and the three train to push it in
  // episode 22 / chapter 39 onwards.
  'kukuroo-mountain': [
    { d: 'M8 69 L40 22 L54 16 L66 20 L80 14 L150 77', role: 'soft' },
    { d: 'M4 70 L44 64 M4 156 L44 154 M104 70 L156 78 M104 148 L156 144' },
    { d: 'M44 54 L50 50 V152 L44 156 Z', role: 'soft' },
    { d: 'M50 50 L104 58 V148 L50 152 Z', role: 'accent' },
    { d: 'M77 54 V150' },
    {
      d: 'M73.1 150.3 V136.4 L80.9 136.1 V149.7 M69.3 150.6 V122.7 L84.7 122.5 V149.4 M65.4 150.9 V108.6 L88.6 109.1 V149.1 M61.6 151.1 V94.3 L92.4 96 V148.9 M57.7 151.4 V79.8 L96.3 83.1 V148.6 M53.9 151.7 V65 L100.1 70.4 V148.3',
      role: 'soft',
    },
    {
      d: 'M114 84 l6 -4 M126 90 l6 -4 M138 96 l6 -4 M114 116 l6 -4 M126 120 l6 -4 M138 124 l6 -4',
      role: 'ambient',
    },
    { d: 'M14 96 l8 -2 M12 120 l10 -2', role: 'ambient' },
    { d: 'M2 158 H158', role: 'ambient' },
    shadow(78, 166, 48),
  ],
} satisfies Drawings

/** The Zoldycks' later stages: each power, and Kalluto's place in the Troupe. */
export const zoldyckRedrawn: Redrawings = {
  zeno: [
    // The same robe with the aura dragon of Dragon Head rising over its far
    // shoulder in open lines, the accent still on the panel: Zeno sends the
    // dragon at Chrollo, episode 52 / chapter 99. Dragon Lance in the same
    // fight and the later Dragon Dive are the same dragon and keep this.
    {
      episode: 52,
      chapter: 99,
      value: [
        ...ZENO_ROBE,
        ...moved(
          DRAGON_HEAD.map((stroke) => {
            return { ...stroke, role: 'ambient' as const }
          }),
          'translate(58 -22) scale(0.75)',
        ),
        shadow(78, 186, 44),
      ],
    },
  ],
  silva: [
    // The same top and wristbands with a large orb of aura round each
    // band, open lines with no accent: Silva throws the two orbs at Chrollo,
    // episode 52 / chapter 99.
    {
      episode: 52,
      chapter: 99,
      value: [
        ...SILVA_TOP,
        { d: SILVA_BAND, role: 'accent' },
        {
          d: `${circle(54, 170, 22)} ${circle(108, 171, 19)}`,
          role: 'ambient',
        },
        shadow(80, 194, 50),
      ],
    },
  ],
  kalluto: [
    // The same furisode with the Troupe's spider beside it as a symbol, not
    // on the garment, since his tattoo is never shown, and with no number:
    // Nobunaga introduces him as Hisoka's replacement in the Troupe,
    // episode 72 / chapter 170.
    {
      episode: 72,
      chapter: 170,
      value: [...KALLUTO_FURISODE, ...KALLUTO_SPIDER, shadow(72, 186, 46)],
    },
    // The same furisode and spider, with his paper fan held open in tint
    // and a stream of confetti swirling up from it: he cuts the Ant's steel
    // rope with the fan and dismembers it with Dance of the Serpent's Bite,
    // episode 96 / chapter 226. The obi turns soft.
    {
      episode: 96,
      chapter: 226,
      value: [
        ...softened(KALLUTO_FURISODE),
        ...KALLUTO_SPIDER,
        {
          d: 'M110.2 174.3 L84.5 169.7 A36 36 0 0 1 126.3 140.5 L121.7 166.2 Z',
          role: 'accent',
        },
        {
          d: 'M110.9 171.8 L87.4 160.8 M112.3 169.6 L92.4 152.9 M114.3 167.8 L99.4 146.5 M116.6 166.6 L107.7 142.2 M119.1 166 L116.9 140.1',
          role: 'soft',
        },
        { d: 'M120 176 L110.2 174.3 M120 176 L121.7 166.2' },
        {
          d: 'M130 138 C150 126 154 104 138 92 C126 84 132 66 150 60',
          role: 'soft',
        },
        {
          d: 'M134 128 l4 2 M146 116 l3 3 M148 100 l4 -1 M136 94 l3 3 M132 76 l4 -1 M142 64 l3 3 M152 70 l4 1 M126 108 l3 2',
          role: 'ambient',
        },
        shadow(72, 186, 46),
      ],
    },
  ],
}
