import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, SEA, shadow } from '~/lib/svg/primitives'

/** Perona's parasol, tipped as if over her shoulder. */
const PARASOL_TILT = 'rotate(-24 80 112)'

/**
 * Brook's violin standing in 3/4, the rib on its far side hatched. The 517
 * drawing keeps it and lays the guitar across it.
 */
const BROOK_VIOLIN: Stroke[] = [
  {
    d: 'M78 64 C60 64 52 74 56 90 C60 96 62 100 58 106 C48 116 48 140 62 148 C70 153 86 153 94 148 C108 140 108 116 98 106 C94 100 96 96 100 90 C104 74 96 64 78 64 Z',
  },
  {
    d: 'M83 65 C101 65 109 75 105 91 C101 97 99 101 103 107 C113 117 113 141 99 149 C95 151.4 90 153 86 153.6',
  },
  {
    d: 'M101 76 l5 -1.5 M104.5 116 l5 -1.5 M105.5 128 l5 -1.5 M103 140 l5 -1.5',
    role: 'ambient',
  },
  { d: 'M74 64 V30 M82 64 V30' },
  { d: 'M74 30 C72 20 78 16 82 20 C86 24 80 28 78 24' },
  { d: 'M74 36 h-6 M82 36 h6 M74 44 h-6 M82 44 h6' },
  { d: 'M76.5 40 V136 M79.5 40 V136', role: 'ambient' },
  { d: 'M70 122 h16', role: 'soft' },
  { d: 'M74 136 L72 147 H84 L82 136 Z', role: 'soft' },
  { d: 'M66 104 q-5 10 3 20 M90 104 q5 10 -3 20', role: 'accent' },
]

/** The plate flying off the top of the stack. */
const PLATE_FALL = 'rotate(-30 118 76)'

/** One of Cerberus's heads in profile, drawn about its middle, with no eye. */
const DOG_HEAD =
  'M-14 6 C-16 -6 -8 -13 2 -12 L24 -4 C28 -2 28 4 24 6 L6 9 C0 13 -10 13 -14 6 Z'
const DOG_EARS = 'M-8 -10 L-6 -24 L2 -12'
/** The fox's ears, taller and both showing. */
const FOX_EARS = 'M-10 -9 L-8 -30 L0 -12 M-2 -12 L6 -28 L6 -11'
/** The spiked collar, drawn round a neck at the origin. */
const SPIKED_COLLAR = `${ellipse(0, 0, 4, 10)} M-2 -9 l-3 -6 M2 -9 l3 -6 M2 9 l3 6`

/** One of Jigoro's sabres, hilt at the origin, and its knuckle guard. */
const SABRE_BLADE = 'M0 0 C-4 -36 0 -72 18 -100 C12 -70 8 -36 8 0 Z'
const SABRE_GUARD = 'M-6 0 H14 M4 0 V22 M14 0 C22 8 18 20 4 22'

/**
 * The mast mansion standing, base at y 62: its round body and pointed roof,
 * the bare mast above it. The arc draws the body in its colour.
 */
const MAST_TOWER = 'M68 62 V24 M92 62 V24 M66 24 L80 8 L94 24 Z'
/** The mast mansion's mast, two floor bands, windows and far side hatched. */
const MAST_DETAILS: Stroke[] = [
  { d: 'M80 8 V-2', role: 'soft' },
  { d: 'M68 38 q12 4 24 0 M68 50 q12 4 24 0', role: 'soft' },
  { d: 'M75 29 v5 M80 30 v5 M75 42 v5 M80 43 v5', role: 'soft' },
  { d: 'M86 30 l5 -3 M86 42 l5 -3 M86 54 l5 -3', role: 'ambient' },
]

/** The mast mansion on the arc's island, down on the rise behind the mansion. */
const ARC_TOWER = 'translate(24 30)'
/** The foot of the mast mansion, from the rise up to where the tower starts. */
const ARC_TOWER_FOOT: Stroke = { d: 'M92 120 V92 M116 120 V92' }

/**
 * The island on its rise: Hogback's mansion with two towers and a rose
 * window, its far side hatched, and a dead tree at each end.
 */
const THRILLER_BARK_ISLAND: Stroke[] = [
  { d: 'M10 134 C30 124 52 120 80 119 C108 120 130 124 150 134' },
  { d: 'M26 121 V84 H38 V121 M54 120 V84 H66 V120 M38 100 L46 90 L54 100' },
  { d: 'M24 84 L32 72 L40 84 M52 84 L60 72 L68 84' },
  {
    d: `${circle(46, 108, 4)} M30 92 v8 M34 92 v8 M58 92 v8 M62 92 v8`,
    role: 'soft',
  },
  { d: 'M62 88 l4 -3 M62 100 l4 -3 M62 112 l4 -3', role: 'ambient' },
  { d: 'M16 128 V100 M16 116 l-8 -10 M16 108 l7 -12 M16 120 l6 4' },
  { d: 'M140 130 V104 M140 120 l8 -10 M140 112 l-7 -11 M140 124 l-6 4' },
]

/** The hull under the island, and its underside hatched. */
const THRILLER_BARK_HULL = 'M6 134 L22 156 Q80 168 138 156 L154 134 Z'
const HULL_HATCHING: Stroke = {
  d: 'M30 160 l4 -6 M50 163 l4 -6 M70 164 l4 -6',
  role: 'ambient',
}

/**
 * The outer wall: its top and foot, the gate shaped like a mouth with both
 * rows of teeth in one stroke of the place's colour, two crenellated towers
 * and the courses of stone.
 */
const THRILLER_BARK_WALL: Stroke[] = [
  { d: 'M-4 62 H164 M-4 150 H164' },
  { d: 'M40 150 V100 C40 64 120 64 120 100 V150' },
  {
    d: 'M40 100 L51.8 98.8 L43.4 88.2 L56.4 91.4 L52.5 79.8 L64.8 87 L65.3 74.7 L74.8 85.2 L80 73 L85.2 85.2 L94.7 74.7 L95.2 87 L107.5 79.8 L103.6 91.4 L116.6 88.2 L108.2 98.8 L120 100 M40 150 L46 138 L52 150 L60 136 L68 150 L76 136 L84 150 L92 136 L100 150 L108 136 L114 150 L120 138',
    role: 'accent',
  },
  {
    d: 'M12 62 V38 h6 v6 h6 v-6 h6 v6 h6 v-6 h6 V62 M118 62 V38 h6 v6 h6 v-6 h6 v6 h6 v-6 h6 V62',
  },
  {
    d: 'M4 84 h26 M10 106 h24 M4 128 h26 M130 84 h26 M126 106 h24 M130 128 h26',
    role: 'soft',
  },
]

/** Lola's crown of flowers, the rim and the blooms on it. */
const LOLA_CROWN = ellipse(80, 40, 16, 5)
const LOLA_BLOOMS = 'M66 36 q-2 -6 4 -6 q2 -6 8 -2 q6 -4 8 2 q6 0 4 6'

/** The drawings of the records filed in the thriller bark stretch of the route. */
export const thrillerBarkArt = {
  // The island looming out of the fog: Hogback's mansion and the tall mast
  // mansion on a rise, a dead tree at each end, the sea below. The mast
  // mansion takes the colour. The island comes out of the fog at 338 (ch.
  // 443), inside the arc. The hull is drawn from 343, the mast mansion
  // toppled from 374, in `thrillerBarkRedrawn`.
  'thriller-bark-arc': [
    ...moved(THRILLER_BARK_ISLAND, 'translate(0 16)'),
    {
      d: MAST_TOWER,
      role: 'accent',
      transform: `translate(0 16) ${ARC_TOWER}`,
    },
    ...moved(MAST_DETAILS, `translate(0 16) ${ARC_TOWER}`),
    { ...ARC_TOWER_FOOT, transform: 'translate(0 16)' },
    {
      d: 'M-4 40 H50 M96 22 H164 M-4 72 H18 M126 66 H164 M-4 104 H12 M150 96 H164',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // Brook's ghost ship in 3/4 drifting through bands of fog: the deck seen
  // from above, the stern turning away hatched, the sails in tatters. The
  // torn top sail takes the colour. The crew meets it in the fog at 337
  // (ch. 442).
  'florian-triangle': [
    { d: 'M28 116 L42 146 C70 152 104 150 120 144 L136 110' },
    { d: 'M28 116 C56 126 108 124 136 110' },
    { d: 'M34 113 C62 108 104 104 130 106', role: 'soft' },
    { d: 'M108 140 l6 -10 M118 136 l6 -12 M126 128 l5 -10', role: 'ambient' },
    { d: 'M60 122 V36 M100 118 V48' },
    {
      d: 'M84 54 H116 L114 76 l-6 -5 l-5 7 l-6 -6 l-5 7 l-5 -5 L86 78 Z',
      role: 'accent',
    },
    {
      d: 'M44 44 H76 L74 66 l-6 -6 l-5 8 l-5 -6 l-6 8 l-4 -6 L46 68 Z M46 80 H74 L72 98 l-6 -4 l-6 6 l-5 -5 L48 100 Z M86 86 H114 L112 100 l-6 -4 l-5 6 l-6 -5 L88 102 Z',
      role: 'soft',
    },
    { d: 'M60 36 L32 118 M100 48 L132 112 M60 36 L100 48', role: 'soft' },
    {
      d: 'M-4 30 H40 M70 22 H164 M-4 112 H22 M140 100 H164 M-4 76 H30 M128 70 H164',
      role: 'ambient',
      dashed: true,
    },
    {
      d: 'M-4 150 H30 M130 150 H164 M-4 138 H24 M140 136 H164',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // His violin in 3/4, the rib showing on the far side and hatched, the bow
  // laid across it; the f-holes take the colour. He plays it from 338. No
  // shadow under it: Moria took his, and ch. 443 (ep 338) shows it gone. In
  // `thrillerBarkRedrawn` the shadow is back from 362 and the Soul King's
  // guitar lies across the same violin from 517.
  'brook': [
    ...BROOK_VIOLIN,
    { d: 'M26 176 L134 44' },
    { d: 'M30 180 L138 48', role: 'ambient' },
    { d: 'M28 178 l4 4 M134 44 l4 4', role: 'soft' },
  ],

  // Her parasol, open and tilted in 3/4: the dome with two small devil
  // horns, its far side hatched, the band of square teeth round the rim and
  // the shaft down to its curled handle. Two of her ghosts drift beside it as
  // eyeless wisps, in her colour. She carries it when she is first seen at
  // 343 (ch. 449), as her ghosts drift home to her.
  'perona': [
    {
      d: 'M20 96 C24 64 50 44 80 44 C110 44 136 64 140 96',
      transform: PARASOL_TILT,
    },
    { d: ellipse(80, 96, 60, 14), transform: PARASOL_TILT },
    {
      d: 'M138.3 99.4 V106.4 L133.1 109.5 V102.5 M124.9 105.3 V112.3 L114.1 114.5 V107.5 M101.3 109.1 V116.1 L87.2 116.9 V109.9 M72.8 109.9 V116.9 L58.7 116.1 V109.1 M45.9 107.5 V114.5 L35.1 112.3 V105.3 M26.9 102.5 V109.5 L21.7 106.4 V99.4',
      role: 'soft',
      transform: PARASOL_TILT,
    },
    {
      d: 'M80 44 C68 58 60 80 58 109 M80 44 C92 58 100 80 102 109',
      role: 'soft',
      transform: PARASOL_TILT,
    },
    {
      d: 'M120 60 l6 -4 M128 72 l6 -4 M133 84 l6 -4',
      role: 'ambient',
      transform: PARASOL_TILT,
    },
    {
      d: 'M64 50 c-6 -3 -10 -10 -9 -17 c4 5 9 8 14 9 M96 50 c6 -3 10 -10 9 -17 c-4 5 -9 8 -14 9',
      transform: PARASOL_TILT,
    },
    {
      d: 'M80 110 V166 c0 9 -5 13 -11 13 c-6 0 -8 -6 -4 -9 c3 -2 7 0 6 3',
      transform: PARASOL_TILT,
    },
    {
      d: 'M18 172 C10 162 14 146 26 146 C38 146 42 160 34 168 C29 173 30 182 40 188 C28 190 20 182 18 172 Z',
      role: 'accent',
    },
    {
      d: 'M146 132 C154 124 154 112 144 110 C134 108 128 118 134 126 C138 132 134 140 124 142 C136 146 142 138 146 132 Z',
      role: 'accent',
    },
  ],

  // The bridal veil under its crown of flowers, folds falling to a wavy hem,
  // and the two warthog's tusks curving up out from under it. She proposes
  // to Absalom in it at 345. In `thrillerBarkRedrawn` the real Lola's bowler
  // hat replaces it from 370, her shadow is back from 375, and Big Mom's
  // Jolly Roger stands beside the hat from 797.
  'lola': [
    { d: LOLA_CROWN, role: 'accent' },
    { d: LOLA_BLOOMS, role: 'accent' },
    { d: 'M64 42 C50 58 42 96 40 140 M96 42 C110 58 118 96 120 140' },
    { d: 'M40 140 q10 7 20 1 t20 1 t20 1 t20 -3' },
    {
      d: 'M72 46 C66 76 64 106 64 140 M88 46 C94 76 96 106 96 140 M80 46 V140',
      role: 'soft',
    },
    { d: 'M54 136 C34 136 18 118 16 84 C26 104 40 116 56 120' },
    { d: 'M106 136 C126 136 142 118 144 84 C134 104 120 116 104 120' },
    {
      d: 'M24 112 l5 -5 M34 124 l4 -6 M136 112 l-5 -5 M126 124 l-4 -6',
      role: 'ambient',
    },
    { d: 'M112 64 l6 -3 M116 82 l6 -3 M118 100 l6 -3', role: 'ambient' },
    shadow(80, 172, 50),
  ],

  // His giant scissors on their side and nearly shut, the near blade's
  // serrated edge in his colour, the far blade hatched. A strip of shadow,
  // hatched because it is black, lies on the floor and is pulled up into the
  // jaws, cut straight across. He cuts Luffy's shadow loose with them at 349
  // (ch. 455), where he is first seen whole.
  'gecko-moria': [
    { d: 'M70 92 L150 70 L152 78 L74 98', role: 'accent' },
    {
      d: 'M74 98 L79.1 99.8 L82.7 95.8 L87.7 97.6 L91.3 93.6 L96.4 95.4 L100 91.3 L105.1 93.1 L108.7 89.1 L113.7 90.9 L117.3 86.9 L122.4 88.7 L126 84.7 L131.1 86.5 L134.7 82.4 L139.7 84.2 L143.3 80.2 L148.4 82 L152 78',
      role: 'accent',
    },
    { d: 'M74 104 L150 116 L148 108 L76 100' },
    {
      d: 'M94 108 l1 5 M110 110 l1 5 M126 113 l1 5 M140 115 l1 4',
      role: 'ambient',
    },
    { d: circle(68, 100, 4) },
    { d: 'M64 96 L50 84 M64 104 L50 116', role: 'soft' },
    { d: ellipse(34, 78, 17, 12) },
    { d: ellipse(34, 122, 17, 12) },
    {
      d: 'M16 170 C46 168 76 160 100 146 C112 138 117 124 115 104 L127 102 C130 126 124 146 108 158 C84 174 50 182 18 184 C10 184 8 172 16 170 Z',
      role: 'ambient',
      dashed: true,
    },
    { d: 'M115 104 L127 102', role: 'ambient' },
    {
      d: 'M24 182 l6 -12 M38 181 l6 -12 M52 179 l6 -12 M66 176 l6 -12 M80 172 l7 -13 M94 166 l7 -13 M106 158 l8 -12 M115 148 l8 -10 M120 136 l7 -6 M121 122 l6 -3',
      role: 'ambient',
    },
  ],

  // His ankle-length coat standing open and empty, in one outline from the
  // high collar over the shoulders and down the hanging sleeves: the inside
  // hatched, buttons down one lapel, the hem cut like a parapet in his
  // colour. He wears it when he shows himself in the graveyard at 343
  // (ch. 449). No bazookas: they are seen at 347 and 359.
  'absalom': [
    {
      d: 'M36 168 L38 126 H24 L26 70 C27 60 30 52 36 48 L62 42 L58 14 L72 30 Q82 34 92 30 L104 14 L100 42 L124 48 C130 52 133 60 134 70 L136 126 H122 L124 168',
    },
    { d: 'M72 30 L68 80 L64 168 M92 30 L96 80 L100 168' },
    { d: 'M64 164 Q82 160 100 164', role: 'ambient' },
    {
      d: 'M74 58 l16 -6 M72 82 l20 -7 M71 106 l22 -8 M70 130 l24 -8 M68 154 l26 -9',
      role: 'ambient',
    },
    {
      d: dots([
        [73, 88],
        [72, 104],
        [71, 120],
      ]),
    },
    { d: 'M38 126 L40 66 M122 126 L120 66', role: 'soft' },
    { d: 'M25 116 H38.5 M121.5 116 H135.5', role: 'soft' },
    { d: 'M124 84 l8 -6 M124 100 l9 -6 M124 116 l10 -6', role: 'ambient' },
    { d: 'M36 168 v-8 h7 v8 h7 v-8 h7 v8 h7', role: 'accent' },
    { d: 'M124 168 v-8 h-6 v8 h-6 v-8 h-6 v8 h-6', role: 'accent' },
    shadow(80, 184, 54),
  ],

  // His violet feathery cape standing on its own hem, the fluffy collar on
  // top, one side turned back to show the black lining, hatched, the
  // feathered hem in his colour; the surgical mask he wears under his chin
  // hangs off the collar by one ear loop. He greets the three at his mansion
  // door in both at 340.
  'hogback': [
    { d: 'M64 40 C50 70 34 120 24 168 M129 160 C122 118 110 70 96 40' },
    { d: 'M96 40 C104 76 108 124 106 170' },
    {
      d: 'M100 66 l8 -4 M102 84 l10 -5 M104 102 l12 -6 M105 120 l13 -6 M106 138 l14 -6 M106 156 l16 -7',
      role: 'ambient',
    },
    {
      d: 'M62 40 q-6 -8 2 -10 q2 -8 10 -4 q4 -6 10 0 q8 -4 10 4 q8 2 2 10 q-16 6 -34 0 Z',
      role: 'accent',
    },
    {
      d: 'M24 168 q2 10 10 6 q3 9 11 4 q4 9 11 3 q5 8 12 2 q5 8 12 0 q6 8 12 -2 q6 7 11 -3 q7 6 10 -4 q7 4 8 -6 q8 2 8 -8',
      role: 'accent',
    },
    {
      d: 'M60 70 C54 96 46 128 42 160 M76 46 C72 90 70 130 68 170',
      role: 'soft',
    },
    { d: 'M38 62 Q54 58 70 62 V74 Q54 92 38 74 Z' },
    { d: 'M70 64 C76 56 74 44 68 38 M38 64 C30 62 28 72 38 74', role: 'soft' },
    { d: 'M40 68 Q54 64 68 68 M42 74 Q54 72 66 74', role: 'soft' },
    shadow(78, 186, 58),
  ],

  // A stack of serving plates, one more flying off the top and another broken
  // in two on the floor. She throws them at Usopp at the mansion door (340).
  'victoria-cindry': [
    { d: ellipse(58, 100, 38, 10) },
    { d: ellipse(58, 100, 21, 5.5), role: 'soft' },
    {
      d: 'M20 100 q38 14 76 0 M20 112 q38 14 76 0 M22 124 q36 14 74 0 M20 136 q38 14 76 0',
    },
    {
      d: 'M28 108 q30 10 60 0 M28 120 q30 10 60 0 M30 132 q28 10 58 0 M28 144 q30 10 60 0 V150 q-30 10 -60 0 Z',
    },
    {
      d: 'M90 112 l6 -3 M90 124 l6 -3 M90 136 l6 -3 M90 148 l6 -3',
      role: 'ambient',
    },
    { d: ellipse(118, 76, 26, 7), transform: PLATE_FALL, role: 'accent' },
    { d: ellipse(118, 76, 14, 3.5), transform: PLATE_FALL, role: 'soft' },
    { d: 'M96 52 l-8 -6 M104 44 l-4 -8', role: 'ambient' },
    {
      d: 'M100 176 Q102 168 118 168 L114 172 L120 176 L116 182 Q102 182 100 176 Z M126 168 Q144 168 148 175 Q146 182 128 182 L122 177 L128 172 Z',
      role: 'accent',
    },
    { d: 'M104 164 l-4 -4 M150 164 l4 -4 M126 160 v-5', role: 'soft' },
    shadow(58, 166, 40),
  ],

  // Shusui half drawn: the blade's bare stretch in its colour between the
  // tsuba, seen as an ellipse, and the mouth of the black scabbard, hatched.
  // The hilt keeps its diamond wrap. He carries it from 342.
  'ryuma': [
    { d: 'M27.7 182.9 L68 100.2 L80.6 106.4 L40.3 189.1 Z' },
    { d: 'M31.2 175.7 L43.8 181.9' },
    {
      d: 'M39.3 175.2 L46.8 173.3 M42.8 168 L50.3 166.2 M46.3 160.8 L53.9 159 M49.8 153.6 L57.4 151.8 M53.3 146.4 L60.9 144.6 M56.8 139.3 L64.4 137.4 M60.3 132.1 L67.9 130.2 M63.8 124.9 L71.4 123 M67.3 117.7 L74.9 115.8 M70.8 110.5 L78.4 108.6',
      role: 'ambient',
    },
    { d: 'M70.3 101.3 L81.7 78 M78.4 105.3 L88.4 81.2', role: 'accent' },
    { d: 'M76.9 95.7 L84.4 80.4', role: 'soft' },
    { d: 'M80.3 77.3 L82.5 72.8 L93.3 78.1 L91.1 82.6 Z' },
    { d: 'M76.2 67.5 A14 5 26 1 0 101.4 79.8 A14 5 26 1 0 76.2 67.5' },
    { d: 'M84.3 69.2 L102.2 32.4 L113 37.6 L95 74.5 Z' },
    { d: 'M86 65.6 L100.3 63.7 L93 51.2 L107.3 49.3 L100 36.9', role: 'soft' },
    { d: 'M101.8 32.1 L104.4 26.7 L116.1 32.4 L113.5 37.8 Z' },
  ],

  // The back of his head over the mansion roof he crashed through at 355: a
  // shock of hair, the two great horns in his colour, and a house far too
  // small beneath. Seen from behind, so no face.
  'oars': [
    {
      d: 'M40 112 C38 86 44 68 56 60 L52 50 L64 54 L66 42 L76 50 L82 38 L88 50 L98 42 L100 54 L110 50 L104 62 C116 70 122 86 120 112',
    },
    {
      d: 'M50 78 C34 70 24 52 26 22 C34 42 46 52 58 58 M112 78 C126 70 136 52 134 22 C126 42 114 52 104 58',
      role: 'accent',
    },
    {
      d: 'M48 86 C46 96 44 104 46 112 M112 86 C114 96 116 104 114 112',
      role: 'soft',
    },
    { d: 'M20 150 V112 H86 L92 104 L98 114 L106 102 L112 112 H140 V150' },
    {
      d: 'M34 124 h12 v14 h-12z M114 124 h12 v14 h-12z M74 150 V130 h12 V150',
      role: 'soft',
    },
    { d: 'M128 118 l6 -4 M130 132 l6 -4 M130 146 l6 -4', role: 'ambient' },
    { d: 'M94 98 l-2 -6 M108 96 l3 -5', role: 'ambient' },
    { d: 'M-4 150 H164', role: 'ambient', dashed: true },
  ],

  // His white cowboy hat on top of a coat stand, and the green captain's coat
  // hung beneath it, gold epaulettes in his colour. He is first seen whole in
  // Brook's memory at 378.
  'yorki': [
    { d: 'M24 48 Q34 64 80 64 Q126 64 136 48' },
    { d: 'M24 48 Q38 52 54 50 M106 50 Q122 52 136 48', role: 'soft' },
    { d: 'M54 52 C52 36 58 22 66 22 Q80 30 94 22 C102 22 108 36 106 52' },
    { d: 'M55 44 Q80 50 105 44 M80 28 V40', role: 'soft' },
    {
      d: 'M66 72 C56 74 46 76 42 84 L40 170 H120 L118 84 C114 76 104 74 94 72',
    },
    { d: 'M42 84 L30 146 H44 L52 100 M118 84 L130 146 H116 L108 100' },
    { d: 'M66 72 L80 90 L94 72 M80 90 V170' },
    { d: 'M66 72 L70 106 L80 90 M94 72 L90 106 L80 90', role: 'soft' },
    { d: 'M36 88 Q44 76 60 78 M124 88 Q116 76 100 78', role: 'accent' },
    {
      d: 'M38 90 v8 M43 86 v10 M48 83 v10 M53 81 v10 M122 90 v8 M117 86 v10 M112 83 v10 M107 81 v10',
      role: 'accent',
    },
    {
      d: 'M121 104 l6 -3 M123 116 l6 -3 M125 128 l6 -3 M114 152 l6 -3',
      role: 'ambient',
    },
    { d: 'M80 64 V72 M80 170 V178 M64 184 L80 178 L96 184', role: 'soft' },
    shadow(80, 186, 40),
  ],
  // A bat-winged cape folded shut and hanging upside down from a dead branch,
  // the wings in his colour and spiky hair poking out at the bottom, with the
  // long-necked bottle he carries slung across it. He hangs there to greet the
  // crew at 339.
  'hildon': [
    {
      d: 'M4 34 C40 28 90 36 156 30 M120 32 l14 -14 M36 31 l-10 -12 M128 25 l10 2',
      role: 'ambient',
    },
    { d: 'M72 33 q-2 6 2 8 M84 33 q2 6 -2 8' },
    {
      d: 'M66 40 C52 60 44 92 48 132 L56 124 L62 136 L70 126 L80 140 L90 126 L98 136 L104 124 L112 132 C116 92 108 60 94 40 Z',
      role: 'accent',
    },
    {
      d: 'M72 44 C66 70 64 100 66 128 M88 44 C94 70 96 100 94 128',
      role: 'soft',
    },
    {
      d: 'M102 64 l6 -3 M104 80 l7 -3 M105 96 l7 -3 M104 112 l7 -3',
      role: 'ambient',
    },
    {
      d: 'M70 140 l-4 12 M76 142 l-2 14 M84 142 l2 14 M90 140 l4 12',
      role: 'soft',
    },
    {
      d: 'M55.4 50.1 L89.4 81 C93.9 85.1 92 90.1 94.9 92.8 L111.2 107.6 L107.2 112 L90.9 97.2 C87.9 94.5 83.1 96.9 78.7 92.9 L44.6 61.9 Z',
    },
    { d: 'M111.5 107.2 L116.7 111.9 L112 117.1 L106.8 112.4', role: 'soft' },
    { d: 'M64.3 58.2 L53.5 70 M80.5 73 L69.8 84.8', role: 'soft' },
  ],

  // The three-headed dog side on, with no eyes: bandaged, a red spiked collar
  // on every neck in its colour, and the middle head a fox's, with taller
  // ears. It chases three of the crew at 339.
  'cerberus-thriller-bark': [
    {
      d: 'M80 104 C68 98 46 98 32 106 C20 112 18 128 24 138 V172 h8 L36 144 C50 148 64 146 76 140 L74 172 h8 L90 132 V172 h8 L100 126',
    },
    { d: 'M32 106 C22 96 16 84 18 70' },
    {
      d: 'M80 104 L82 46 M90 102 L94 48 M90 104 L118 78 M94 114 L120 84 M98 120 L106 116',
      role: 'soft',
    },
    { d: DOG_HEAD, transform: 'translate(96 38)' },
    { d: DOG_HEAD, transform: 'translate(130 72)' },
    { d: DOG_HEAD, transform: 'translate(118 110)' },
    { d: DOG_EARS, transform: 'translate(96 38)' },
    { d: FOX_EARS, transform: 'translate(130 72)' },
    { d: DOG_EARS, transform: 'translate(118 110)' },
    { d: SPIKED_COLLAR, transform: 'translate(87 60)', role: 'accent' },
    {
      d: SPIKED_COLLAR,
      transform: 'translate(112 86) rotate(50)',
      role: 'accent',
    },
    {
      d: SPIKED_COLLAR,
      transform: 'translate(102 122) rotate(70)',
      role: 'accent',
    },
    { d: 'M44 110 l10 -6 M48 120 l12 -7 M28 150 h8 M76 152 h8', role: 'soft' },
    { d: 'M30 124 l6 -4 M30 134 l6 -4 M64 134 l8 -5', role: 'ambient' },
    shadow(60, 182, 50),
  ],

  // The trophy plaque hung from a nail, a pig's head in it with its ears
  // flopped down its sides in his colour and the round of the snout, no eyes
  // and no mouth, and the two sabres crossed under its chin. He hangs on the
  // dining-room wall from 340.
  'buhichuck': [
    { d: 'M50 40 L80 20 L110 40', role: 'ambient' },
    { d: dots([[80, 20]]) },
    {
      d: 'M36 40 H66 A14 14 0 0 0 94 40 H124 V92 C124 118 104 134 80 142 C56 134 36 118 36 92 Z',
    },
    { d: 'M124 40 l6 4 V94 C130 120 110 138 84 146 L80 142' },
    {
      d: 'M127 56 l-3 4 M127 72 l-3 4 M127 88 l-3 4 M124 106 l-3 3 M116 122 l-3 3',
      role: 'ambient',
    },
    {
      d: 'M44 48 H60 M100 48 H116 M44 48 V92 C44 112 60 125 80 132 C100 125 116 112 116 92 V48',
      role: 'soft',
    },
    {
      d: 'M52 100 C52 84 64 76 80 76 C96 76 108 84 108 100 C108 114 96 122 80 122 C64 122 52 114 52 100 Z',
    },
    {
      d: 'M70 78 Q60 74 52 80 C46 86 42 96 44 106 C50 100 54 94 58 88 M90 78 Q100 74 108 80 C114 86 118 96 116 106 C110 100 106 94 102 88',
      role: 'accent',
    },
    {
      d: 'M52 80 C52 88 50 96 46 102 M108 80 C108 88 110 96 114 102',
      role: 'soft',
    },
    { d: ellipse(80, 106, 11, 6.5), role: 'soft' },
    { d: 'M32 184 Q74 168 124 128 M128 184 Q86 168 36 128' },
    { d: 'M26 172 l14 18 M134 172 l-14 18', role: 'soft' },
    { d: 'M32 184 l-8 6 M128 184 l8 6' },
  ],

  // A gate in the outer wall shaped like a mouth, its teeth closing on the
  // sea, and the mast mansion standing tall behind the wall, two of its four
  // chains running down to the wall's towers. Thriller Bark opens at 343
  // (ch. 449). The mast mansion lies toppled behind the wall from 374, in
  // `thrillerBarkRedrawn`.
  'thriller-bark': [
    ...THRILLER_BARK_WALL,
    { d: MAST_TOWER },
    ...MAST_DETAILS,
    { d: 'M78 10 Q58 30 30 38 M82 10 Q102 30 130 38', role: 'soft' },
    {
      d: 'M-4 24 q14 -6 28 0 t28 0 M114 20 q14 -6 28 0 t28 0',
      role: 'ambient',
      dashed: true,
    },
    ...SEA.slice(1),
  ],

  // The patchwork bear front on: the oversized striped cap, round ears, the
  // surgical mask in his colour, and a stitched seam across the belly. No eyes.
  // He is first seen at 343, beside Perona's rooms.
  'kumashi': [
    { d: 'M40 60 C40 30 120 30 120 60 C120 66 40 66 40 60 Z' },
    {
      d: 'M60 36 C56 44 54 54 56 64 M80 32 V65 M100 36 C104 44 106 54 104 64',
      role: 'soft',
    },
    { d: 'M40 56 q-8 -2 -10 -10 M120 56 q8 -2 10 -10' },
    { d: `${circle(38, 74, 9)} ${circle(122, 74, 9)}` },
    { d: 'M44 64 C34 76 34 104 50 116 Q80 128 110 116 C126 104 126 76 116 64' },
    { d: 'M58 88 H102 V110 Q80 116 58 110 Z', role: 'accent' },
    {
      d: 'M58 88 L44 76 M102 88 L116 76 M60 96 H100 M60 103 H100',
      role: 'soft',
    },
    { d: 'M50 116 C34 126 28 148 34 176 H126 C132 148 126 126 110 116' },
    { d: 'M34 176 V180 H62 V172 M126 176 V180 H98 V172', role: 'soft' },
    { d: 'M40 132 l-12 22 l10 4 M120 132 l12 22 l-10 4' },
    {
      d: 'M48 146 C62 138 76 140 88 150 C96 156 108 158 120 152 M56 141 l-2 6 M66 140 l0 6 M76 143 l2 6 M96 155 l1 6 M106 156 l-1 6',
      role: 'soft',
    },
    {
      d: 'M112 128 l6 -3 M116 142 l6 -3 M118 156 l6 -3 M118 170 l6 -3',
      role: 'ambient',
    },
    shadow(80, 188, 52),
  ],
  // His open red coat over a bandaged middle, the two swords he died with
  // still stuck in it, in his colour, and his bottle standing beside it. He
  // shuffles in with the others at 344.
  'john': [
    { d: 'M60 52 C44 56 32 62 28 74 L22 176 H114 L108 74 C104 62 92 56 76 52' },
    { d: 'M60 52 L54 88 L50 176 M76 52 L82 88 L86 176' },
    {
      d: 'M54 96 Q68 102 82 96 M53 112 Q68 118 83 112 M52 128 Q68 134 84 128 M51 144 Q68 150 85 144',
      role: 'soft',
    },
    { d: 'M28 74 Q34 64 48 62 M108 74 Q102 64 88 62', role: 'soft' },
    { d: 'M64 120 L26 30 M70 118 L32 28', role: 'accent' },
    { d: 'M18 38 L38 26 M26 31 l-6 -14 l6 -3 l6 14', role: 'accent' },
    { d: 'M72 132 L130 70 M76 138 L134 76', role: 'accent' },
    { d: 'M124 64 L140 80 M133 73 l11 -11 l5 4 l-11 11', role: 'accent' },
    {
      d: 'M98 96 l7 -3 M100 112 l7 -3 M101 128 l7 -3 M102 144 l7 -3 M102 160 l7 -3',
      role: 'ambient',
    },
    {
      d: 'M124 176 V148 C124 140 130 136 132 130 V116 h10 V130 C144 136 150 140 150 148 V176 Z M130 110 h14 v6 h-14z',
    },
    shadow(84, 186, 64),
  ],

  // An old oil lantern with its flame lit, and a shadow on the ground beneath
  // it again.
  'spoil': [
    { d: 'M68 36 C68 18 92 18 92 36' },
    { d: 'M56 50 L66 36 H94 L104 50 Z' },
    { d: 'M58 50 V140 M102 50 V140' },
    {
      d: 'M64 56 C56 80 56 116 64 134 H96 C104 116 104 80 96 56 Z',
      role: 'soft',
    },
    { d: 'M80 118 C70 108 72 94 80 80 C88 94 90 108 80 118 Z', role: 'accent' },
    { d: 'M80 118 V128' },
    { d: 'M52 140 H108 V152 H52 Z' },
    { d: 'M58 152 L62 160 H98 L102 152' },
    {
      d: 'M40 96 h-12 M120 96 h12 M46 70 l-10 -8 M114 70 l10 -8',
      role: 'ambient',
    },
    shadow(80, 174, 44),
  ],

  // The three's things: Nin's bow with the arrow he wakes Moria with at 343,
  // the snot bubble it pops in their colour, Bao's bucket of a head and
  // Gyoro's sword.
  'gyoro-nin-and-bao': [
    { d: 'M30 34 C64 62 64 128 30 156' },
    { d: 'M30 34 L30 156', role: 'soft' },
    { d: 'M30 95 H118 M30 95 l-6 -5 M30 95 l-6 5' },
    { d: 'M118 95 l-10 -5 v10 z' },
    { d: 'M124 90 A14 14 0 1 1 126 106', role: 'accent' },
    {
      d: dots([
        [128, 70],
        [150, 82],
        [152, 108],
        [134, 120],
        [144, 70],
      ]),
      role: 'accent',
    },
    {
      d: `M62 172 L60 136 ${ellipse(76, 136, 16, 4.5)} M92 136 L90 172 Q76 177 62 172`,
    },
    { d: 'M84 142 l5 -3 M84 154 l5 -3 M84 166 l5 -3', role: 'ambient' },
    { d: 'M60 136 C58 112 94 112 92 136', role: 'soft' },
    {
      d: 'M104 176 L148 118 M108 179 L152 121 M144 114 L156 124 M104 176 l4 3',
    },
    { d: 'M116 160 l4 3 M124 150 l4 3 M132 139 l4 3', role: 'soft' },
    shadow(96, 186, 58),
  ],

  // His three identical sabres, one upright in front in his colour with nicks
  // in its edge, two fanned out behind, and the wind curling over them. He
  // carries all three at 346.
  'jigoro': [
    { d: SABRE_BLADE, transform: 'translate(54 154) rotate(-30)' },
    { d: SABRE_GUARD, transform: 'translate(54 154) rotate(-30)' },
    { d: SABRE_BLADE, transform: 'translate(104 154) rotate(30) scale(-1 1)' },
    { d: SABRE_GUARD, transform: 'translate(104 154) rotate(30) scale(-1 1)' },
    { d: 'M76 152 C72 112 78 72 98 42 C92 74 88 112 88 152 Z', role: 'accent' },
    { d: 'M68 152 H96 M82 152 V180 M96 152 C106 164 100 180 82 180' },
    {
      d: 'M76 130 l3 -1 l-2 -3 M76 104 l3 -1 l-2 -3 M80 78 l3 0 l-1 -3',
      role: 'soft',
    },
    {
      d: 'M10 34 q18 -12 36 -2 q8 5 2 10 M116 20 q18 -10 34 2 q6 6 -2 9',
      role: 'ambient',
    },
    shadow(80, 190, 50),
  ],

  // His aviator cap with its one goggle, the lens in his colour, lying under
  // his web where one clean stroke has cut it through, a thread hanging
  // loose down to the cap. Brook cuts him down at 348 (ch. 454) and his
  // shadow leaves him at 349 (ch. 455), both by the record's 349 (ch. 456).
  // No shadow under the cap: it has gone.
  'tararan': [
    {
      d: 'M62 60 L104 60 M62 60 L84.8 79.2 M62 60 L68.3 95.7 M62 60 L28.7 107.5 M62 60 L6 75 M62 60 L9.4 35.5 M62 60 L37.5 7.4 M62 60 L81.8 5.5 M62 60 L112.2 31',
    },
    {
      d: 'M84 60 Q79.1 66.2 78.9 74.1 Q71.1 75.8 65.8 81.7 Q58.1 77.5 49.4 78 Q47.1 70.4 40.7 65.7 Q43.9 58.4 42.1 50.7 Q49.1 47.1 52.7 40.1 Q61.2 42.1 69.5 39.3 Q73.7 46.1 81.1 49 Q80.1 55.2 84 60',
      role: 'soft',
    },
    {
      d: 'M63.8 100.2 Q52.2 92.8 37.9 94.4 Q33.5 79.9 21.4 70.9 Q27.4 57 23.9 42.3 Q37.4 35.4 44.3 21.9 Q60.5 25.9 76.4 20.5 Q84.3 33.4 98.4 39 Q96.5 50.8 104 60',
    },
    { d: 'M150 22 L46 126', role: 'soft' },
    { d: 'M84.8 79.2 C88 92 84 104 90 118', role: 'ambient' },
    { d: 'M84 150 C80 122 98 106 120 108 C140 110 150 126 148 150' },
    {
      d: 'M84 150 C100 156 132 156 148 150 M92 152 C90 164 96 172 104 170 L106 155',
    },
    { d: 'M85 132 C102 123 130 123 147 133', role: 'soft' },
    {
      d: `${ellipse(104, 127, 9, 6)} ${ellipse(104, 127, 5, 3.2)}`,
      role: 'accent',
    },
    { d: 'M128 112 l6 -3 M136 120 l6 -3 M141 130 l5 -3', role: 'ambient' },
    { d: 'M70 162 H160', role: 'ambient', dashed: true },
  ],

  // The short one's big sword in its scabbard on the strap he wears across
  // his chest, and the tall one's torn striped shirt hung beside it. No
  // shadow under either: they have lost theirs. Both are met at 369.
  'risky-brothers': [
    { d: 'M30 172 L70 40 L86 44 L50 176 Z' },
    { d: 'M64 34 L92 42 M74 36 l4 -14 l8 2 l-4 14' },
    { d: 'M36 152 l14 4 M44 126 l14 4', role: 'soft' },
    {
      d: 'M76 56 l6 -4 M72 72 l6 -4 M68 88 l6 -4 M64 104 l6 -4 M60 120 l6 -4 M54 140 l6 -4',
      role: 'ambient',
    },
    { d: 'M72 54 C40 76 30 128 42 162', role: 'accent' },
    { d: 'M30 102 h12 v12 h-12z', role: 'accent' },
    {
      d: 'M104 48 L118 44 L132 48 C140 52 146 60 148 72 L152 130 H142 L138 84 V170 L132 162 L126 172 L120 164 L114 172 L108 164 L102 170 V84 L98 130 H88 L92 72 C94 60 98 52 104 48 Z',
    },
    {
      d: 'M102 98 H138 M102 114 H138 M102 130 H138 M102 146 H138 M91 92 l9 1 M90 108 l9 1 M140 93 l9 -1 M141 109 l9 -1',
      role: 'soft',
    },
    { d: 'M112 46 q6 6 12 0', role: 'soft' },
    { d: 'M138 120 l4 -3 M138 136 l4 -3 M138 152 l4 -3', role: 'ambient' },
  ],
} satisfies Drawings

/**
 * Moria's scissors in parts: the upper blade with its teeth, the lower blade
 * with its hatching, the pivot and the two handles, and the strip of shadow.
 */
const MORIA_SCISSORS = thrillerBarkArt['gecko-moria']
const UPPER_BLADE = MORIA_SCISSORS.slice(0, 2)
const LOWER_BLADE = MORIA_SCISSORS.slice(2, 4)
const HANDLES = MORIA_SCISSORS.slice(4, 8)
const SHADOW_STRIP = MORIA_SCISSORS.slice(8)

/** Absalom's coat without the shadow under it, laid on its side. */
const COAT_FALLEN =
  'translate(80 140) rotate(-86) scale(0.74) translate(-80 -91)'

/** Brook's violin, moved up and right to make room for the guitar. */
const VIOLIN_UP = 'translate(10 -6)'

/** The mast mansion, laid on its side behind the wall. */
const TOPPLED = 'rotate(15 81 40)'
/**
 * The mast mansion on its side: the round tower, its end cap towards us, two
 * floor bands and a few windows, the underside hatched, the base broken off
 * jagged. The arc draws the shell in its colour.
 */
const TOPPLED_SHELL = 'M50 28 H110 L114 33 L109 37 L116 42 L108 46 L106 52 H50'
const TOPPLED_DETAILS: Stroke[] = [
  { d: ellipse(50, 40, 4.5, 12) },
  { d: 'M68 28 a4.5 12 0 0 0 0 24 M90 28 a4.5 12 0 0 0 0 24', role: 'soft' },
  { d: 'M77 34 v6 M83 34 v6 M99 34 v6', role: 'soft' },
  { d: 'M74 52 l5 -5 M86 52 l5 -5 M98 52 l5 -5', role: 'ambient' },
]
/** The fallen mast mansion moved down across the deck of the arc's hull. */
const ACROSS_THE_DECK = 'translate(46 74) rotate(10 81 40)'

/**
 * The real Lola's small black bowler hat in 3/4, the crown hatched where it
 * turns away, laid over the zombie bride's veil folded on the ground, with
 * the crown of flowers beside it. The hat's crown is the one accent until
 * 797.
 */
const LOLA_HAT_CROWN = 'M52 110 C48 60 112 60 108 110'
const LOLA_HAT_AND_VEIL: Stroke[] = [
  { d: 'M14 156 C18 132 44 122 80 122 C116 122 142 132 146 156', role: 'soft' },
  { d: 'M14 156 q11 7 22 0 t22 0 t22 0 t22 0 t22 0 t22 0', role: 'soft' },
  {
    d: 'M34 134 C30 142 30 150 32 157 M126 134 C130 142 130 150 128 157',
    role: 'soft',
  },
  ...moved(
    [
      { d: LOLA_CROWN, role: 'soft' },
      { d: LOLA_BLOOMS, role: 'soft' },
    ],
    'translate(-40 108) rotate(-8 80 40)',
  ),
  {
    d: 'M52 101 C42 102 34 106 34 112 C34 122 56 127 80 127 C104 127 126 122 126 112 C126 106 118 102 108 101 M34 112 c-3 -5 -2 -9 3 -11 M126 112 c3 -5 2 -9 -3 -11',
  },
  { d: 'M51 98 C64 105 96 105 109 98', role: 'soft' },
  { d: 'M94 72 l7 -5 M100 82 l8 -5 M103 92 l6 -4', role: 'ambient' },
]
/** The real Lola, moved left and made smaller to leave room for the flag. */
const BESIDE_THE_FLAG = 'translate(-10 10) scale(0.86)'

/** Brook's guitar, drawn lying flat and tilted to where the bow lay. */
const GUITAR = 'translate(-6 6) rotate(-50 80 110)'

/** The records of this stretch drawn again, from the episode the story changes them. */
export const thrillerBarkRedrawn: Redrawings = {
  // The same sword and shirt with a shadow beneath them again. The stolen
  // shadows return to their owners at 375 (ch. 483), after Moria's defeat.
  'risky-brothers': [
    {
      episode: 375,
      chapter: 483,
      value: [...thrillerBarkArt['risky-brothers'], shadow(88, 184, 62)],
    },
  ],
  // The same island on a hull the size of an island, the hull in the arc's
  // colour: Spoil's line at 343 says the island is the largest pirate ship
  // in the world (ch. 449). From 374 (ch. 482) the mast mansion lies broken
  // across the deck, in the arc's colour, and only its jagged stump stands:
  // Luffy knocks Moria into the main mast and it topples onto him.
  'thriller-bark-arc': [
    {
      episode: 343,
      chapter: 449,
      value: [
        ...THRILLER_BARK_ISLAND,
        { d: MAST_TOWER, transform: ARC_TOWER },
        ...moved(MAST_DETAILS, ARC_TOWER),
        ARC_TOWER_FOOT,
        { d: THRILLER_BARK_HULL, role: 'accent' },
        HULL_HATCHING,
        ...SEA.slice(2),
      ],
    },
    {
      episode: 374,
      chapter: 482,
      value: [
        ...THRILLER_BARK_ISLAND,
        { d: 'M92 120 V104 L97 99 L101 105 L106 98 L111 104 L116 100 V120' },
        ...moved(
          [
            { d: TOPPLED_SHELL, role: 'accent', transform: TOPPLED },
            ...moved(TOPPLED_DETAILS, TOPPLED),
          ],
          ACROSS_THE_DECK,
        ),
        { d: THRILLER_BARK_HULL },
        HULL_HATCHING,
        ...SEA.slice(2),
      ],
    },
  ],

  // The same scissors shut and lying on a newspaper, with no shadow to cut:
  // the paper's edge passes under the handles, its columns are lines. Perona cries
  // over the paper that says he was killed in the war at 509 (ch. 592). At
  // 917 (ch. 925) the scissors stand open again over a smaller paper, a fresh
  // strip of shadow in their jaws: the morning paper says he lives, and he
  // raids Hachinosu with a new zombie army.
  'gecko-moria': [
    {
      episode: 509,
      chapter: 592,
      value: [
        { d: 'M21.5 129.3 L4 132 L26 188 L158 168 L132 112 L45.9 125.5' },
        { d: 'M68 122 L71 128 M86 166 L92 178', role: 'soft' },
        {
          d: 'M98 162 l48 -7 M102 170 l46 -7 M104 178 l30 -4.5',
          role: 'ambient',
        },
        ...moved(
          [
            ...moved(UPPER_BLADE, 'rotate(10 68 100)'),
            ...moved(LOWER_BLADE, 'rotate(-10 68 100)'),
            ...HANDLES,
          ],
          'translate(80 136) rotate(-6) scale(0.9) translate(-85 -100)',
        ),
      ],
    },
    {
      episode: 917,
      chapter: 925,
      value: [
        ...moved(UPPER_BLADE, 'rotate(-12 68 100)'),
        ...moved(LOWER_BLADE, 'rotate(10 68 100)'),
        ...HANDLES,
        ...SHADOW_STRIP,
        { d: 'M100 170 L146 160 L162 184 L114 194 Z' },
        { d: 'M123 165 L138 189', role: 'soft' },
        {
          d: 'M108 174 l12 -2.6 M112 181 l12 -2.6 M131 170 l14 -3 M135 177 l14 -3 M139 184 l12 -2.6',
          role: 'ambient',
        },
      ],
    },
  ],

  // The same coat, empty, fallen on its side on the ground, the hem still in
  // his colour. At 917 (ch. 925) Shiryu turns invisible with his fruit, and
  // Devon says he was killed for it and that they still have his body.
  'absalom': [
    {
      episode: 917,
      chapter: 925,
      value: [
        ...moved(thrillerBarkArt.absalom.slice(0, -1), COAT_FALLEN),
        shadow(80, 182, 64),
      ],
    },
  ],

  // The same violin and bow with a shadow beneath them again: Zoro beats
  // Ryuma and Brook's shadow comes home at 362 (ch. 467). Then the same
  // violin, still upright, the Soul King's guitar laid across it where the
  // bow was: a shark's head for a body, jaws open on its teeth, gills and two
  // fins for horns, and the shadow under both. He plays it at his farewell
  // concert at 517 (ch. 598).
  'brook': [
    {
      episode: 362,
      chapter: 467,
      value: [...thrillerBarkArt.brook, shadow(84, 166, 32)],
    },
    {
      episode: 517,
      chapter: 598,
      value: [
        ...BROOK_VIOLIN.map((stroke) => ({ ...stroke, transform: VIOLIN_UP })),
        {
          d: 'M54 104 C44 94 24 88 8 92 C0 94 -8 100 -10 106 L16 111 L0 119 C8 129 38 128 54 116',
          transform: GUITAR,
        },
        {
          d: 'M-6 107 l2 4 l2 -3.4 l2 4 l2 -3.2 l2 4 l2 -3 l2 3.6 M3 117 l1 -4 l2 3 l1 -4 l2 3 l1 -4 l2 2.6',
          role: 'soft',
          transform: GUITAR,
        },
        { d: 'M14 96 q-2 4 0 8', role: 'soft', transform: GUITAR },
        {
          d: 'M26 96 q-3 11 0 24 M33 95 q-3 12 0 26 M40 96 q-3 11 0 24',
          role: 'soft',
          transform: GUITAR,
        },
        {
          d: 'M44 98 C48 92 50 86 52 78 L56 104 M44 122 C48 128 50 132 54 140 L56 116',
          transform: GUITAR,
        },
        { d: 'M54 107 H144 M54 113 H144', transform: GUITAR },
        {
          d: 'M72 107 v6 M88 107 v6 M104 107 v6 M120 107 v6',
          role: 'ambient',
          transform: GUITAR,
        },
        {
          d: 'M144 106 L148 102 H162 Q168 110 162 118 H148 L144 114',
          transform: GUITAR,
        },
        shadow(80, 172, 46),
      ],
    },
  ],

  // The real Lola's bowler hat, in her colour, over the zombie bride's veil
  // folded on the ground, with its crown of flowers beside it: the veil is
  // kept as the link to the first drawing. The tusks are gone and there is
  // no shadow: Moria has hers. She comes on at 370 (ch. 476). The same hat
  // and veil with a shadow beneath again from 375 (ch. 483), when Moria's
  // defeat sends the stolen shadows home. From 797 (ch. 835) Big Mom's Jolly
  // Roger flies beside them, in her colour, and the hat goes soft: she is
  // revealed as Big Mom's daughter.
  'lola': [
    {
      episode: 370,
      chapter: 476,
      value: [{ d: LOLA_HAT_CROWN, role: 'accent' }, ...LOLA_HAT_AND_VEIL],
    },
    {
      episode: 375,
      chapter: 483,
      value: [
        { d: LOLA_HAT_CROWN, role: 'accent' },
        ...LOLA_HAT_AND_VEIL,
        shadow(80, 172, 66),
      ],
    },
    {
      episode: 797,
      chapter: 835,
      value: [
        ...moved(
          [{ d: LOLA_HAT_CROWN, role: 'soft' }, ...LOLA_HAT_AND_VEIL],
          BESIDE_THE_FLAG,
        ),
        shadow(59, 172, 56),
        { d: 'M148 164 V26' },
        { d: 'M148 30 C134 24 114 34 98 28 L100 86 C116 92 134 82 148 88' },
        {
          d: 'M113 62 C104 46 114 34 125 34 C136 34 146 46 137 62 M110 64 Q117 59 125 62 Q133 59 140 64 Q125 76 110 64 M110 64 H140 M104 40 l6 6 M146 40 l-6 6 M104 82 l6 -6 M146 82 l-6 -6',
          role: 'accent',
        },
        {
          d: dots([
            [119, 50],
            [131, 50],
          ]),
          role: 'soft',
        },
      ],
    },
  ],

  // The same bear toppled onto his side, cap, mask and all, with nothing left
  // to stand him up: Sogeking shoves a ball of salt into his mouth at 360
  // (ch. 465), and the borrowed shadow leaves him.
  'kumashi': [
    {
      episode: 360,
      chapter: 465,
      value: [
        ...moved(
          thrillerBarkArt.kumashi.slice(0, -1),
          'translate(84 140) rotate(-90) scale(0.8) translate(-80 -105)',
        ),
        shadow(84, 184, 64),
      ],
    },
  ],

  // Shusui laid flat across a low heap of ash, a wisp of smoke still rising
  // from it. At 362 (ch. 467) he loses to Zoro and hands him the sword, Brook's
  // shadow goes back to Brook, and the body burns to ash.
  'ryuma': [
    {
      episode: 362,
      chapter: 467,
      value: [
        { d: 'M18 156 Q40 136 80 134 Q120 136 142 156', role: 'ambient' },
        {
          d: 'M40 148 l4 -3 M62 142 l3 -3 M98 142 l3 -3 M118 148 l4 -3',
          role: 'soft',
        },
        ...moved(
          thrillerBarkArt.ryuma,
          'translate(80 126) rotate(64) scale(0.82) translate(-72 -108)',
        ),
        { d: 'M84 112 C76 98 92 88 84 72 C78 60 90 50 86 38', role: 'soft' },
        { d: 'M-4 156 H164', role: 'ambient', dashed: true },
      ],
    },
  ],

  // The same stack of plates, and nothing in the air any more: only the one
  // already broken on the floor. Moria's Shadow's Asgard takes back her
  // shadow at 373 (ch. 481), and she goes still.
  'victoria-cindry': [
    {
      episode: 373,
      chapter: 481,
      value: [
        ...thrillerBarkArt['victoria-cindry'].slice(0, 5),
        ...thrillerBarkArt['victoria-cindry'].slice(8, 9),
        shadow(58, 166, 40),
      ],
    },
  ],

  // The same head tipped over onto its side on the roof he crashed through,
  // one horn up in his colour and the other under it. Moria's Shadow's Asgard
  // pulls Luffy's shadow out of him at 373 (ch. 481), and he lies there
  // lifeless.
  'oars': [
    {
      episode: 373,
      chapter: 481,
      value: [
        ...moved(
          [
            ...thrillerBarkArt.oars.slice(0, 1),
            {
              d: 'M50 78 C34 70 24 52 26 22 C34 42 46 52 58 58',
              role: 'accent',
            },
            ...thrillerBarkArt.oars.slice(2, 3),
          ],
          'translate(50 80) rotate(90) scale(0.8) translate(-80 -112)',
        ),
        ...thrillerBarkArt.oars.slice(3, 6),
        ...thrillerBarkArt.oars.slice(7),
      ],
    },
  ],

  // The same trophy on its nail, its two sabres fallen to the floor beneath
  // it: a hunting trophy again once Moria's Shadow's Asgard takes back its
  // shadow at 373 (ch. 481).
  'buhichuck': [
    {
      episode: 373,
      chapter: 481,
      value: [
        ...thrillerBarkArt.buhichuck.slice(0, 10),
        ...moved(
          thrillerBarkArt.buhichuck.slice(10),
          'translate(80 172) scale(1 0.3) translate(-80 -158)',
        ),
        { d: 'M-4 182 H164', role: 'ambient', dashed: true },
      ],
    },
  ],

  // The same coat laid on its side with the swords still in it, and the
  // bottle tipped over beside it. Moria's Shadow's Asgard takes back his
  // shadow at 373 (ch. 481).
  'john': [
    {
      episode: 373,
      chapter: 481,
      value: [
        ...moved(
          thrillerBarkArt.john.slice(0, 9),
          'translate(62 140) rotate(-86) scale(0.7) translate(-80 -100)',
        ),
        ...moved(
          thrillerBarkArt.john.slice(9, 10),
          'translate(132 176) rotate(-80) scale(0.6) translate(-137 -143)',
        ),
        shadow(80, 186, 66),
      ],
    },
  ],

  // Their things on the floor and nobody to wake: the bow lying flat with its
  // arrow, Bao's bucket on its side in their colour and Gyoro's sword. Moria's
  // Shadow's Asgard takes back their shadows at 373 (ch. 481); the record
  // opens at chapter 486, so the stage is pinned there, like its status.
  'gyoro-nin-and-bao': [
    {
      episode: 373,
      chapter: 486,
      value: [
        ...moved(
          thrillerBarkArt['gyoro-nin-and-bao'].slice(0, 4),
          'translate(76 144) scale(0.85 0.4) rotate(-90) translate(-60 -95)',
        ),
        ...moved(
          thrillerBarkArt['gyoro-nin-and-bao']
            .slice(6, 8)
            .map((stroke, index) =>
              index === 0 ? { ...stroke, role: 'accent' } : stroke,
            ),
          'translate(-36 12) rotate(-90 76 156)',
        ),
        ...moved(
          thrillerBarkArt['gyoro-nin-and-bao'].slice(9, 11),
          'translate(-8 30) rotate(49 128 148)',
        ),
        shadow(80, 186, 66),
      ],
    },
  ],

  // The same three sabres lying flat and apart, with no wind over them.
  // Moria's Shadow's Asgard pulls Zoro's shadow out of him at 373 (ch. 481).
  'jigoro': [
    {
      episode: 373,
      chapter: 481,
      value: [
        ...moved(
          thrillerBarkArt.jigoro.slice(0, 2),
          'translate(-20 -66) rotate(120 54 154)',
        ),
        ...moved(
          thrillerBarkArt.jigoro.slice(2, 4),
          'translate(-70 -6) rotate(60 104 154)',
        ),
        ...moved(
          thrillerBarkArt.jigoro.slice(4, 7),
          'translate(-54 24) rotate(90 82 152)',
        ),
        shadow(80, 186, 66),
      ],
    },
  ],

  // The same cape fallen off the branch into a heap on the ground, the bottle
  // still slung across it. Moria's Shadow's Asgard takes back his shadow at
  // 373 (ch. 481).
  'hildon': [
    {
      episode: 373,
      chapter: 481,
      value: [
        ...thrillerBarkArt.hildon.slice(0, 1),
        ...moved(
          thrillerBarkArt.hildon.slice(2),
          'translate(80 156) rotate(-84) scale(0.78) translate(-80 -90)',
        ),
        shadow(80, 184, 66),
      ],
    },
  ],

  // The same dog on its back with its legs in the air, its three heads
  // drooping to the ground, collars still on. Moria's Shadow's Asgard takes
  // back its shadow at 373 (ch. 481).
  'cerberus-thriller-bark': [
    {
      episode: 373,
      chapter: 481,
      value: [
        ...moved(
          [
            ...thrillerBarkArt['cerberus-thriller-bark'].slice(0, 1),
            ...thrillerBarkArt['cerberus-thriller-bark'].slice(12, 14),
          ],
          'translate(-10 282) scale(1 -1)',
        ),
        {
          d: 'M90 170 C100 176 104 180 108 182 M90 166 C100 156 106 148 113 143 M88 160 C94 130 102 110 112 100',
          role: 'soft',
        },
        { d: DOG_HEAD, transform: 'translate(130 182)' },
        { d: DOG_HEAD, transform: 'translate(134 150) rotate(24)' },
        { d: DOG_HEAD, transform: 'translate(126 114) rotate(56)' },
        { d: DOG_EARS, transform: 'translate(130 182)' },
        { d: FOX_EARS, transform: 'translate(134 150) rotate(24)' },
        { d: DOG_EARS, transform: 'translate(126 114) rotate(56)' },
        { d: SPIKED_COLLAR, transform: 'translate(110 182)', role: 'accent' },
        {
          d: SPIKED_COLLAR,
          transform: 'translate(115.7 141.9) rotate(24)',
          role: 'accent',
        },
        {
          d: SPIKED_COLLAR,
          transform: 'translate(114.8 97.4) rotate(56)',
          role: 'accent',
        },
        shadow(84, 188, 66),
      ],
    },
  ],

  // The same gate and wall without the fog or the chains, and behind them the
  // mast mansion on its side, dust rising off both ends. Luffy knocks Moria
  // into the main mast at 374 (ch. 482) and it topples onto him; the gates
  // still shut as the crew sails off (ch. 486).
  'thriller-bark': [
    {
      episode: 374,
      chapter: 482,
      value: [
        ...THRILLER_BARK_WALL,
        { d: TOPPLED_SHELL, transform: TOPPLED },
        ...moved(TOPPLED_DETAILS, TOPPLED),
        {
          d: 'M116 36 q-2 -10 8 -12 q10 -4 8 -14 q-2 -6 8 -8 M46 28 q-2 -8 6 -11 q8 -4 6 -12',
          role: 'ambient',
        },
        ...SEA.slice(1),
      ],
    },
  ],
}
