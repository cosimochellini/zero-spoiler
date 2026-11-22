import {
  type Drawings,
  moved,
  type Redrawings,
  type Stroke,
} from '~/data/art/stroke'
import { circle, ellipse, SEA, shadow, star } from '~/lib/svg/primitives'

import { BESIDE_THE_BEAST, TURNED_BODY, TURNED_COLLAR } from './kakin-phase-2'

/**
 * Benjamin's military puffer jacket from the front, the quilted channels
 * across it, the stand collar and the zip, the dark belt hatched and its
 * buckle in tint: the standard outfit of his private army.
 */
const BENJAMIN_JACKET: Stroke[] = [
  {
    d: 'M42 58 Q58 48 68 46 L80 56 L92 46 Q102 48 118 58 L126 132 Q80 142 34 132 Z',
  },
  { d: 'M66 48 L67 36 Q80 31 93 36 L94 48' },
  { d: 'M80 56 V136', role: 'soft' },
  {
    d: 'M39 76 Q80 84 121 76 M37 94 Q80 102 123 94 M35 112 Q80 120 125 112',
    role: 'soft',
  },
  {
    d: 'M42 58 C30 72 26 98 26 126 L36 128 M118 58 C130 72 134 98 134 126 L124 128',
  },
  { d: 'M34 128 Q80 138 126 128 V140 Q80 150 34 140 Z' },
  {
    d: 'M40 131 l-4 8 M50 133 l-4 9 M60 134 l-4 10 M98 134 l-4 10 M108 133 l-4 9 M118 131 l-4 8',
    role: 'ambient',
  },
  { d: 'M72 132 H88 V146 H72 Z', role: 'accent' },
  { d: 'M110 64 l6 -3 M114 84 l6 -3 M116 104 l6 -3', role: 'ambient' },
]

/**
 * Camilla's hair from behind, the head turned a little to her left: the
 * elaborate updo piled on top, the tiara's points rising beyond it in tint
 * (the far ones smaller), the locks tied above the nape and falling down
 * her back, the side turned away hatched, her shoulders beneath.
 */
const CAMILLA_UPDO: Stroke[] = [
  { d: 'M50 106 C44 76 54 54 76 50 C98 48 112 68 108 102' },
  { d: 'M56 62 C46 44 58 30 74 34 C84 26 100 30 104 44 C110 52 106 60 100 62' },
  {
    d: 'M64 50 C70 42 80 42 84 50 M84 40 C92 36 100 42 98 50 M60 58 C68 54 78 56 82 62',
    role: 'soft',
  },
  {
    d: 'M54 40 L54 18 L64 32 L72 10 L80 28 L88 14 L94 28 L100 20 L104 36',
    role: 'accent',
  },
  {
    d: 'M62 104 C60 126 66 142 60 162 M78 106 C78 130 82 146 76 168 M94 102 C96 124 90 142 96 160',
    role: 'soft',
  },
  { d: 'M66 66 C70 80 70 92 68 106 M90 66 C88 80 88 92 90 104', role: 'soft' },
  {
    d: 'M100 72 l7 -4 M102 86 l7 -4 M100 100 l6 -4 M96 126 l5 -3 M98 140 l5 -3',
    role: 'ambient',
  },
  { d: 'M28 174 C32 138 48 120 62 114 M130 172 C126 138 112 120 98 114' },
]

/**
 * Zhang Lei's hands joined inside the large sleeves of his robe, seen in
 * 3/4: the near sleeve full, the far one smaller and hatched, the monk-like
 * crossed collar above them and the two cuffs where the sleeves meet in
 * tint: how he stands at the eve festival.
 */
const ZHANG_LEI: Stroke[] = [
  { d: 'M12 138 C10 104 30 82 60 86 L82 120 C62 140 30 150 12 138 Z' },
  { d: 'M82 120 L100 90 C122 86 140 102 142 128 C128 138 104 136 82 120 Z' },
  {
    d: 'M24 114 C36 106 48 102 62 102 M20 128 C34 122 50 118 70 118',
    role: 'soft',
  },
  { d: 'M104 102 C116 102 126 108 134 118', role: 'soft' },
  { d: 'M116 110 l6 -4 M124 116 l6 -4 M110 122 l6 -4', role: 'ambient' },
  {
    d: `${ellipse(74, 118, 9, 13)} ${ellipse(91, 117, 7, 11)}`,
    role: 'accent',
  },
  { d: 'M28 90 C34 60 50 42 66 36 L86 70 L100 36 C112 42 122 58 126 88' },
  {
    d: 'M66 36 C74 30 92 30 100 36 M58 46 L86 84 M108 46 L92 72',
    role: 'soft',
  },
  { d: 'M18 146 L22 188 M136 134 L134 188 M60 140 L58 188', role: 'soft' },
  shadow(78, 192, 60),
]

/**
 * The Scarlet Eyes in a glass jar: two orbs in tint in the liquid, the lid
 * and its rim, the far side of the glass hatched.
 */
const SCARLET_EYES_JAR: Stroke[] = [
  { d: 'M50 70 V150 Q50 158 58 158 H102 Q110 158 110 150 V70' },
  { d: ellipse(80, 70, 30, 7) },
  { d: 'M48 70 V60 M112 70 V60' },
  { d: ellipse(80, 60, 32, 7) },
  { d: ellipse(80, 86, 30, 6), role: 'soft' },
  { d: `${circle(68, 122, 12)} ${circle(94, 114, 12)}`, role: 'accent' },
  { d: 'M57 94 V146', role: 'soft' },
  {
    d: 'M104 98 l4 -3 M104 112 l4 -3 M104 126 l4 -3 M104 140 l4 -3',
    role: 'ambient',
  },
]

/**
 * Tubeppa's eyeglasses folded and lying in 3/4, the rims in tint with their
 * thickness inside them, the bridge, the arms folded behind,
 * the far lens hatched where it turns away, and one of her earrings beside
 * them.
 */
const TUBEPPA_GLASSES: Stroke[] = [
  {
    d: `${ellipse(52, 108, 24, 18)} ${ellipse(104, 100, 18, 13)}`,
    role: 'accent',
  },
  {
    d: `${ellipse(52, 108, 20, 14)} ${ellipse(104, 100, 15, 10)}`,
    role: 'soft',
  },
  { d: 'M76 104 Q82 94 87 98' },
  { d: 'M28 104 L20 92 L76 80 M122 98 L128 88 L84 78' },
  { d: 'M38 100 Q44 96 50 96', role: 'soft' },
  { d: 'M96 104 l8 -8 M102 108 l10 -10 M110 108 l6 -6', role: 'ambient' },
  { d: `${circle(136, 122, 7)} M136 115 V106 Q140 104 140 100`, role: 'soft' },
  shadow(80, 136, 56),
]

/** One copy of the Book of Tyson, closed, in 3/4: the cover, spine and pages. */
const TYSON_BOOK: Stroke[] = [
  { d: 'M30 120 L96 110 L130 124 L64 136 Z' },
  { d: 'M30 120 V134 L64 150 V136 M64 150 L130 138 V124' },
  { d: 'M68 141 L127 130 M68 145 L127 134', role: 'soft' },
]

/**
 * The Book of Tyson: three copies stacked, the top one's spine in tint, the
 * books she hands out to her guards.
 */
const TYSON_BOOKS: Stroke[] = [
  ...TYSON_BOOK,
  ...moved(TYSON_BOOK, 'translate(2 -24)'),
  ...moved(TYSON_BOOK, 'translate(-2 -48)'),
  { d: 'M28 72 V86 L62 102 V88 Z', role: 'accent' },
  { d: 'M34 128 l-4 6 M34 104 l-4 6', role: 'ambient' },
  shadow(80, 160, 54),
]

/**
 * Luzurus's head from behind, turned a little to his left: the hair combed
 * back in rows that follow the skull, the near puff at his side in tint and
 * the far one half hidden and hatched, his neck and collar beneath.
 */
const LUZURUS_HAIR: Stroke[] = [
  { d: 'M54 106 C48 72 60 46 82 46 C102 46 112 68 108 104' },
  {
    d: 'M66 52 C58 70 60 90 64 108 M80 46 C74 68 76 90 80 110 M94 48 C94 70 96 88 96 106',
    role: 'soft',
  },
  {
    d: `${circle(44, 96, 15)} M106 82 C120 80 124 100 110 108`,
    role: 'accent',
  },
  { d: 'M36 90 Q44 84 52 90 M34 100 Q44 95 54 101', role: 'soft' },
  { d: 'M114 88 l5 -3 M116 96 l5 -3', role: 'ambient' },
  { d: 'M66 108 V124 M98 106 V122' },
  { d: 'M24 168 C28 138 46 126 66 124 M136 168 C132 138 116 124 98 122' },
  { d: 'M66 124 Q82 132 98 122', role: 'soft' },
]

/**
 * Salé-salé's right ear with its circular piercings in tint: the rim and
 * its fold, the bowl and the flap before it, the short blond hair above,
 * and the side of the head behind the ear hatched.
 */
const SALE_SALE_EAR: Stroke[] = [
  {
    d: 'M74 56 C100 44 124 62 120 92 C118 110 106 116 102 132 C98 148 84 152 76 142',
  },
  { d: 'M84 70 C100 64 110 76 106 92 C104 102 96 106 94 116', role: 'soft' },
  { d: 'M88 86 C96 82 100 92 94 98 C90 102 84 100 82 106', role: 'soft' },
  { d: 'M76 102 C70 104 70 114 76 118', role: 'soft' },
  {
    d: `${circle(112, 64, 6)} ${circle(122, 82, 6)} ${circle(84, 154, 7)}`,
    role: 'accent',
  },
  { d: 'M58 34 C66 30 76 30 84 34 M54 46 C62 40 72 40 80 44', role: 'soft' },
  {
    d: 'M126 70 l8 -5 M128 88 l8 -5 M126 106 l8 -5 M120 124 l8 -5',
    role: 'ambient',
  },
]

/**
 * Salé-salé's first drawing: the ear, the line of his jaw below it, his
 * neck and the collar of his light robe.
 */
const SALE_SALE: Stroke[] = [
  ...SALE_SALE_EAR,
  { d: 'M70 134 C64 152 52 164 34 170 M104 142 C108 156 110 166 112 176' },
  { d: 'M22 184 C46 172 82 172 124 186 M60 176 L74 192', role: 'soft' },
]

/**
 * Momoze's rocking chair in 3/4: the back's two posts and top rail, its
 * slats drawn plain (a frame check), the seat
 * with its front edge, the legs and the two rockers curving away, the far
 * side hatched.
 */
const MOMOZE_CHAIR: Stroke[] = [
  { d: 'M42 46 V122 M94 36 V112 M42 46 Q68 34 94 36' },
  { d: 'M56 46 V120 M68 42 V118 M80 40 V116', role: 'soft' },
  {
    d: 'M38 122 L94 112 L122 118 L66 130 Z M38 122 V128 L66 136 L122 124 V118',
  },
  { d: 'M42 128 L40 150 M66 136 V158 M118 124 L122 144' },
  { d: 'M14 144 Q44 160 84 154 M84 150 Q112 156 144 138', role: 'soft' },
  { d: 'M98 44 l5 -3 M98 62 l5 -3 M98 80 l5 -3 M98 98 l5 -3', role: 'ambient' },
  shadow(80, 166, 58),
]

/**
 * The same chair with her knitting on it: the piece on its two needles in
 * tint, and the ball of wool on the seat with its yarn trailing up to it.
 */
const MOMOZE_KNITTING: Stroke[] = [
  ...MOMOZE_CHAIR,
  {
    d: 'M58 88 L88 84 L90 108 L60 112 Z M64 96 L86 93 M65 104 L87 101',
    role: 'soft',
  },
  { d: 'M44 92 L100 80 M46 82 L102 92', role: 'accent' },
  {
    d: `${circle(102, 112, 8)} M96 108 Q102 104 108 110 M98 104 C96 96 90 100 86 98`,
    role: 'soft',
  },
]

/**
 * Marayam's hamster cage in 3/4, which he carries even to formal events:
 * the domed top and its handle in tint, the bars bending round it, the
 * round tray with its depth, and inside the three hamsters he watches,
 * seen from behind, the far side hatched.
 */
const MARAYAM_CAGE: Stroke[] = [
  { d: 'M30 146 V96 C30 52 130 52 130 96 V146' },
  {
    d: `${ellipse(80, 146, 52, 10)} M28 146 V154 C28 168 132 168 132 154 V146`,
  },
  { d: 'M70 56 C70 42 90 42 90 56', role: 'accent' },
  {
    d: 'M46 152 V76 M62 155 V64 M80 156 V60 M98 155 V64 M114 152 V76 M30 110 C30 120 130 120 130 110',
    role: 'soft',
  },
  {
    d: 'M44 148 C42 136 48 130 55 130 C62 130 68 136 66 148 M70 152 C68 138 74 132 81 132 C88 132 94 138 92 152 M96 148 C94 136 100 130 107 130 C114 130 120 136 118 148',
  },
  {
    d: 'M49 132 q0 -4 3 -2 M58 130 q2 -3 4 0 M75 134 q0 -4 3 -2 M84 132 q2 -3 4 0 M101 132 q0 -4 3 -2 M110 130 q2 -3 4 0',
    role: 'soft',
  },
  { d: 'M122 84 l5 -3 M124 100 l5 -3 M124 120 l5 -3', role: 'ambient' },
  shadow(80, 172, 56),
]

/**
 * A pistol in 3/4 from slightly above: the slide's side and top, the
 * muzzle's face, the grip with its far face, the trigger guard in tint and
 * the grip hatched: the gun Halkenburg holds on friendly soldiers to stop
 * his siblings dying.
 */
const HALKENBURG_GUN: Stroke[] = [
  { d: 'M28 96 H128 V112 H28 Z' },
  { d: 'M28 96 L36 88 H136 L128 96 M136 88 V104 L128 112' },
  { d: 'M28 104 H124 M34 96 V112', role: 'soft' },
  { d: 'M94 112 L88 160 H114 L120 112 M114 160 L122 154 L128 112' },
  { d: 'M72 112 Q70 130 84 130 H92', role: 'accent' },
  { d: 'M78 112 V122', role: 'soft' },
  { d: 'M96 124 l18 -8 M94 136 l20 -9 M92 148 l22 -10', role: 'ambient' },
  { d: `M44 88 V84 M126 88 V84 ${circle(132, 100, 1.5)}`, role: 'soft' },
]
const HALKENBURG_PISTOL: Stroke[] = [...HALKENBURG_GUN, shadow(84, 172, 44)]

/** Woble's cradle, its canopy over the head end hatched. */
const WOBLE_CRADLE: Stroke[] = [
  { d: 'M34 96 H126 C126 128 112 140 80 140 C48 140 34 128 34 96 Z' },
  { d: 'M34 96 C34 62 60 50 84 52 C70 60 66 78 68 96' },
  { d: 'M42 66 l10 -8 M38 80 l16 -12 M40 94 l18 -14', role: 'ambient' },
]

/** The blanket in Woble's cradle, in tint. */
const WOBLE_BLANKET: Stroke[] = [
  {
    d: 'M70 104 C86 98 106 100 120 106 C112 116 90 118 70 112 Z',
    role: 'accent',
  },
  { d: 'M78 108 Q96 104 112 109', role: 'soft' },
]

/** The cradle's two rockers and the floor under them. */
const WOBLE_ROCKERS: Stroke[] = [
  { d: 'M52 140 L46 156 M108 140 L114 156' },
  { d: 'M26 154 Q80 168 134 154', role: 'soft' },
  shadow(80, 170, 54),
]

/**
 * A queen's portrait in its frame, as the overview of the princes with
 * their mothers shows Unma: the frame and its inner edge, the hanging cord
 * in tint. Her own outline sits inside it.
 */
const PORTRAIT: Stroke[] = [
  { d: 'M36 40 H124 V160 H36 Z' },
  { d: 'M44 48 H116 V152 H44 Z', role: 'soft' },
  { d: 'M60 40 L80 22 L100 40', role: 'accent' },
  {
    d: 'M120 52 l4 -3 M120 80 l4 -3 M120 108 l4 -3 M120 136 l4 -3',
    role: 'ambient',
  },
]

/**
 * Kacho's headphones in 3/4: the band in tint, the near cup's
 * shell and depth, the far cup showing its cushion, hatched.
 */
const KACHO_HEADPHONES: Stroke[] = [
  { d: 'M34 120 C28 56 132 56 126 120', role: 'accent' },
  { d: 'M42 120 C38 68 122 68 118 120' },
  { d: 'M58 76 Q80 68 102 76 M56 82 Q80 74 104 82', role: 'soft' },
  {
    d: `${ellipse(36, 132, 13, 20)} M36 112 C50 114 54 148 38 152 M30 120 V108 H42 V114`,
  },
  { d: `${ellipse(124, 130, 10, 17)} M118 118 V110 H128 V116` },
  { d: ellipse(124, 130, 5, 10), role: 'soft' },
  { d: 'M130 120 l5 -3 M132 132 l5 -3 M130 144 l5 -3', role: 'ambient' },
]

/**
 * Fugetsu's glass harp in 3/4 on its table: three wine glasses, their rims
 * true ellipses and the water in each at its own height, the rim she plays
 * in tint with open lines where it rings, the table's top seen from above.
 */
const FUGETSU_HARP: Stroke[] = [
  {
    d: 'M6 156 L28 134 H154 L134 156 Z M6 156 V162 H134 V156 M134 162 L154 140 V134',
  },
  {
    d: 'M18 98 C18 124 42 124 42 98 M30 120 V146 M68 92 C68 120 94 120 94 92 M81 116 V142 M114 96 C114 122 138 122 138 96 M126 118 V140',
  },
  {
    d: `${ellipse(30, 98, 12, 3.5)} ${ellipse(126, 96, 12, 3.5)} ${ellipse(30, 147, 8, 2.5)} ${ellipse(81, 143, 8, 2.5)} ${ellipse(126, 141, 8, 2.5)}`,
  },
  { d: ellipse(81, 92, 13, 4), role: 'accent' },
  {
    d: 'M20 108 Q30 112 40 108 M70 100 Q81 104 92 100 M116 112 Q126 116 136 112',
    role: 'soft',
  },
  {
    d: 'M64 84 q-4 -6 0 -12 M98 84 q4 -6 0 -12 M58 88 q-6 -10 0 -20',
    role: 'ambient',
  },
  { d: 'M140 142 l6 -4 M132 150 l6 -4', role: 'ambient' },
]

/**
 * Tang Zhao Li's portrait frame, empty, oval and seen a little from the
 * side: the frame's outer edge and its thickness turned away and hatched,
 * the inner moulding in tint, the bare canvas, the cord on its nail.
 */
const TANG_FRAME: Stroke[] = [
  { d: ellipse(76, 104, 44, 58) },
  { d: 'M76 46 C106 46 126 72 126 104 C126 136 106 162 76 162' },
  {
    d: 'M121 80 l5 -3 M123 98 l4 -3 M123 116 l4 -3 M120 134 l5 -3',
    role: 'ambient',
  },
  { d: ellipse(76, 104, 34, 47), role: 'accent' },
  { d: ellipse(76, 104, 30, 42), role: 'soft' },
  { d: 'M68 52 Q76 44 84 52 M68 156 Q76 164 84 156', role: 'soft' },
  { d: `M56 52 L76 24 L96 52 ${circle(76, 22, 2)}`, role: 'soft' },
  { d: 'M132 78 C138 96 138 120 130 142', role: 'ambient', dashed: true },
]

/**
 * Beyond from behind in 3/4: his long black hair hatched, bound by a band
 * in tint at the nape and falling down his back, the collar either side of
 * it, the robe of an ancient commander with its sleeves ending at the
 * elbows, the far side hatched. No scar: it is on his face.
 */
const BEYOND_BACK: Stroke[] = [
  {
    d: 'M66 60 C64 40 74 28 86 28 C98 28 106 40 104 60 C104 68 100 74 96 78 H74 C70 74 66 68 66 60 Z',
  },
  { d: 'M74 78 Q85 84 96 78 L95 88 Q85 93 75 88 Z', role: 'accent' },
  { d: 'M74 90 C66 114 70 140 84 166 C98 140 102 114 94 90' },
  {
    d: 'M72 46 l14 -10 M70 58 l22 -16 M72 70 l26 -20 M76 104 l14 -8 M76 118 l16 -9 M78 132 l14 -8 M82 146 l8 -5',
    role: 'ambient',
  },
  { d: 'M66 84 Q70 92 75 92 M95 92 Q100 92 104 84', role: 'soft' },
  {
    d: 'M74 84 C52 88 34 98 26 116 L14 154 Q28 162 42 156 L46 122 M96 84 C112 88 124 98 128 114 L136 148 Q126 154 116 150 L114 122',
  },
  { d: 'M46 122 C48 144 48 164 46 186 H114 C112 164 112 144 114 122' },
  { d: 'M60 110 Q64 144 62 182 M102 110 Q100 144 100 182', role: 'soft' },
  {
    d: 'M24 158 L26 190 M40 158 L38 190 M120 152 L122 186 M132 150 L134 182',
    role: 'soft',
  },
  {
    d: 'M116 102 l7 -4 M122 120 l7 -4 M124 136 l7 -4 M106 160 l6 -4',
    role: 'ambient',
  },
  shadow(80, 192, 60),
]

/**
 * Izunavi from the collar down in 3/4, tall and broad: the shoulders and
 * arms, the hem, the legs beneath, the far side hatched.
 */
const IZUNAVI_FIGURE: Stroke[] = [
  {
    d: 'M74 42 C52 46 36 54 30 70 C24 96 20 124 20 150 M104 40 C118 44 128 52 132 66 C136 92 138 120 138 146',
  },
  { d: 'M38 74 L36 150 H128 L126 70' },
  { d: 'M40 150 L38 192 M80 156 V192 M124 150 L126 192', role: 'soft' },
  shadow(80, 194, 58),
]

/**
 * Izunavi's light jacket, open over his undershirt, as he is seen before
 * boarding among the Hunters Kurapika recruits in chapter 350: the
 * jacket's collar and open front in tint, the undershirt's neck.
 */
const IZUNAVI_JACKET: Stroke[] = [
  ...IZUNAVI_FIGURE,
  {
    d: 'M74 42 L64 66 L80 84 L76 150 M104 40 L112 62 L98 84 L104 150',
    role: 'accent',
  },
  { d: 'M78 44 Q90 54 100 44', role: 'soft' },
  { d: 'M126 84 l6 -4 M128 102 l6 -4 M128 120 l6 -4', role: 'ambient' },
]

/**
 * Izunavi as a Royal Bodyguard, from chapter 362: the same figure in the
 * black suit, its lapels, the shirt collar, and the tie in tint,
 * the suit hatched dark.
 */
const IZUNAVI_SUIT: Stroke[] = [
  ...IZUNAVI_FIGURE,
  {
    d: 'M74 42 L60 100 L74 106 L88 150 L100 104 L112 98 L104 40',
    role: 'soft',
  },
  { d: 'M74 42 L80 62 L88 54 L96 62 L104 40', role: 'soft' },
  {
    d: 'M84 56 H94 L92 68 H86 Z M86 68 L82 128 L89 138 L96 128 L92 68',
    role: 'accent',
  },
  {
    d: 'M42 90 l10 -6 M40 110 l12 -7 M40 130 l12 -7 M114 92 l10 -6 M116 112 l10 -6 M116 132 l10 -6 M104 120 l6 -4 M70 124 l-6 -4',
    role: 'ambient',
  },
]

export const KAKIN_PHASE_ONE_DRAWINGS = {
  // The map the king's video shows in chapter 340: the Dark Continent in a
  // ring round Lake Mobius, its outer coast in tint and its land hatched,
  // water lines on the lake, and in the middle of the lake the small
  // landmasses of the known world. It is a map, so it has no shadow.
  'dark-continent': [
    {
      d: 'M14 96 C10 70 22 46 40 36 C48 22 66 14 84 18 C100 12 122 20 132 34 C148 44 154 66 150 88 C156 108 150 130 136 146 C128 164 108 178 86 176 C70 184 48 178 36 164 C20 152 10 132 16 114 C12 108 12 102 14 96 Z',
      role: 'accent',
    },
    {
      d: 'M36 100 C34 80 46 60 62 54 C72 46 90 46 100 52 C116 56 128 72 126 90 C130 104 126 122 114 132 C104 146 84 150 70 144 C54 142 40 130 38 116 C34 110 34 106 36 100 Z',
    },
    {
      d: 'M20 86 l12 -8 M22 116 l12 -8 M28 140 l14 -10 M50 164 l14 -10 M98 166 l16 -12 M122 150 l14 -10 M136 116 l10 -8 M134 72 l10 -8 M110 34 l12 -8 M62 32 l14 -10 M34 60 l12 -8',
      role: 'ambient',
    },
    {
      d: 'M66 94 C64 84 72 78 80 82 C86 76 96 80 96 88 C102 92 100 102 92 104 C88 110 78 110 74 104 C66 104 64 100 66 94 Z',
    },
    {
      d: 'M100 114 C104 110 110 112 108 118 C106 122 100 120 100 114 Z M56 110 C58 106 64 108 62 112 C60 116 54 114 56 110 Z M84 68 C86 64 92 66 90 70 C88 74 82 72 84 68 Z',
      role: 'soft',
    },
    {
      d: 'M46 82 q5 -3 10 0 M104 128 q5 -3 10 0 M48 124 q5 -3 10 0 M106 68 q5 -3 10 0 M74 134 q5 -3 10 0',
      role: 'ambient',
    },
  ],

  // Beyond from behind, his hair bound by a band in tint, in the robe of an
  // ancient commander, as the king's video shows him in chapter 340.
  'beyond-netero': BEYOND_BACK,

  // Golem's machine in 3/4: the boxy body with its front, side and top, the
  // small black window in front hatched, the seat at its shoulder, the
  // right arm, and in tint the heavy gun that stands for its left arm,
  // which Golem conjures, its barrel running forward. It is introduced to
  // Ging in chapter 347. Nobody inside is drawn.
  'golem': [
    { d: 'M40 62 H96 V134 H40 Z' },
    { d: 'M40 62 L58 50 H114 L96 62 M114 50 V122 L96 134' },
    { d: 'M56 72 H78 V86 H56 Z' },
    { d: 'M58 84 l8 -10 M64 86 l10 -12 M72 86 l6 -8', role: 'ambient' },
    { d: 'M44 58 V42 H58 V52', role: 'soft' },
    {
      d: 'M40 74 C28 78 22 94 24 112 M40 88 C36 92 34 100 36 112 M22 112 H38 V124 H22 Z',
    },
    { d: 'M104 70 L144 82 M104 98 L140 110', role: 'accent' },
    { d: `${ellipse(142, 96, 5, 14)} M112 102 V116 H124 V106`, role: 'soft' },
    { d: 'M40 106 H96 M68 106 V134', role: 'soft' },
    { d: 'M50 134 V164 H66 V134 M74 134 V164 H90 V134' },
    { d: 'M46 164 H70 M70 164 H94', role: 'soft' },
    { d: 'M100 72 l9 -5 M100 108 l9 -5 M100 124 l9 -5', role: 'ambient' },
    shadow(80, 172, 52),
  ],

  // Benjamin's military puffer jacket, belt and buckle: the outfit of his
  // private army, which he is most often seen in from chapter 358.
  'benjamin-hui-guo-rou': [...BENJAMIN_JACKET, shadow(80, 162, 54)],

  // Camilla's elaborate updo and her tiara, as the roster of princes shows
  // her in chapter 349.
  'camilla-hui-guo-rou': [...CAMILLA_UPDO, shadow(80, 184, 50)],

  // Zhang Lei's hands joined in the large sleeves of his robe, as he stands
  // with his siblings at the eve festival, chapter 358.
  'zhang-lei-hui-guo-rou': ZHANG_LEI,

  // The Scarlet Eyes in a jar: Mizaistom shows Kurapika that the Fourth
  // Prince owns a collection of them, chapter 343. Two orbs, no iris.
  'tserriednich-hui-guo-rou': [...SCARLET_EYES_JAR, shadow(80, 166, 40)],

  // Tubeppa's eyeglasses and one of her earrings, which she wears from the
  // roster, chapter 349.
  'tubeppa-hui-guo-rou': TUBEPPA_GLASSES,

  // The Book of Tyson, the book of love she hands to her guards on the
  // voyage. No title on the cover.
  'tyson-hui-guo-rou': TYSON_BOOKS,

  // Luzurus's combed-back rows and the two puffs at his sides, as he stands
  // with his siblings from chapter 349.
  'luzurus-hui-guo-rou': [...LUZURUS_HAIR, shadow(80, 176, 52)],

  // Salé-salé's right ear and its circular piercings above his jaw and the
  // collar of his robe, from the roster of chapter 349.
  'sale-sale-hui-guo-rou': SALE_SALE,

  // A pistol in 3/4, the trigger guard in tint and the grip hatched: the
  // gun Halkenburg draws at the VVIP gate in chapter 382, holding friendly
  // soldiers at gunpoint. His bow is not drawn: it is his ability.
  'halkenburg-hui-guo-rou': HALKENBURG_PISTOL,

  // Kacho's headphones: she reads a book with music in her ears while her
  // mother is questioned, chapter 372. No cable.
  'kacho-hui-guo-rou': [...KACHO_HEADPHONES, shadow(80, 162, 52)],

  // Fugetsu's glass harp: kept apart from her sister, she practises it for
  // the twins' performance at the banquet, chapter 381.
  'fugetsu-hui-guo-rou': FUGETSU_HARP,

  // Momoze knitting in her rocking chair, where she sits while her mother
  // talks to the guards, chapter 361.
  'momoze-hui-guo-rou': MOMOZE_KNITTING,

  // Marayam's hamster cage with its three hamsters, as he watches them in
  // the roster of chapter 349: he carries it even to formal events.
  'marayam-hui-guo-rou': MARAYAM_CAGE,

  // Woble's cradle, the canopy over its head end hatched and its blanket in
  // tint, on two rockers: Kurapika senses aura rising from it in chapter
  // 358. No baby is drawn.
  'woble-hui-guo-rou': [...WOBLE_CRADLE, ...WOBLE_BLANKET, ...WOBLE_ROCKERS],

  // Izunavi's light jacket over his undershirt, as he is seen before the
  // voyage in chapter 350. His keikogi belongs to Yorknew, outside the arc
  // his record opens in.
  'izunavi': IZUNAVI_JACKET,

  // The First Queen's portrait, a woman with short hair, as the overview of
  // the princes with their mothers shows her.
  'unma-hui-guo-rou': [
    ...PORTRAIT,
    { d: 'M64 96 C60 74 68 62 80 62 C92 62 100 74 96 96' },
    { d: 'M64 96 Q80 104 96 96 V110 M64 96 V110', role: 'soft' },
    { d: 'M52 152 C54 126 66 116 80 116 C94 116 106 126 108 152' },
  ],

  // Duazul's fair wavy hair from behind, falling over the collar of her
  // formal clothes, the comb holding it in tint.
  'duazul-hui-guo-rou': [
    { d: 'M54 100 C50 66 62 46 80 46 C98 46 110 66 106 100' },
    {
      d: 'M54 100 C48 112 58 120 52 132 C46 144 56 150 52 160 M106 100 C112 112 102 120 108 132 C114 144 104 150 108 160',
    },
    {
      d: 'M66 60 C60 76 70 88 64 104 C60 116 68 126 64 140 M80 54 C76 70 84 86 80 104 C76 118 84 130 80 146 M94 60 C100 76 90 88 96 104 C100 116 92 126 96 140',
      role: 'soft',
    },
    { d: 'M68 56 Q80 50 92 56', role: 'accent' },
    { d: 'M26 176 C30 152 42 140 52 136 M134 176 C130 152 118 140 108 136' },
    { d: 'M52 160 Q80 168 108 160', role: 'soft' },
    shadow(80, 184, 52),
  ],

  // The Third Queen's portrait frame, empty: she never appears in person,
  // and her portrait in the overview of the princes with their mothers
  // (chapter 374) would show a face. The frame's shape and cord are a
  // frame check.
  'tang-zhao-li-hui-guo-rou': TANG_FRAME,

  // The eight queens as silhouettes, the roster that introduces the king's
  // legal wives in chapter 349, Katrono's in tint: the second shortest. It
  // is how she is first seen.
  'katrono-hui-guo-rou': [
    {
      d: 'M14 150 V124 Q14 116 20 116 Q26 116 26 124 V150 M50 150 V122 Q50 114 56 114 Q62 114 62 122 V150 M68 150 V120 Q68 112 74 112 Q80 112 80 120 V150 M86 150 V123 Q86 115 92 115 Q98 115 98 123 V150 M104 150 V121 Q104 113 110 113 Q116 113 116 121 V150 M122 150 V122 Q122 114 128 114 Q134 114 134 122 V150 M140 150 V120 Q140 112 146 112 Q152 112 152 120 V150',
    },
    {
      d: `${circle(20, 108, 6)} ${circle(56, 106, 6)} ${circle(74, 104, 6)} ${circle(92, 107, 6)} ${circle(110, 105, 6)} ${circle(128, 106, 6)} ${circle(146, 104, 6)}`,
      role: 'soft',
    },
    { d: 'M32 150 V128 Q32 120 38 120 Q44 120 44 128 V150', role: 'accent' },
    { d: circle(38, 112, 6), role: 'accent' },
    { d: 'M8 150 H156', role: 'ambient' },
    shadow(80, 158, 70),
  ],

  // Swinko-swinko's thin vest in 3/4, a sharp shoulder pointing toward the
  // viewer, over a turtleneck, the sash around her waist in tint, the
  // trousers she wears where the other queens wear dresses, from chapter
  // 366. The side turned away is hatched.
  'swinko-swinko-hui-guo-rou': [
    { d: 'M68 44 Q82 38 96 44 V58 Q82 64 68 58 Z' },
    { d: 'M70 50 Q82 55 94 50', role: 'soft' },
    { d: 'M68 58 L20 62 L40 76 L46 126 H114 L116 76 L128 66 L96 58' },
    { d: 'M68 58 L80 120 L96 58', role: 'soft' },
    {
      d: 'M20 62 L40 76 L34 70 Z M40 76 C34 98 32 118 34 140 M116 76 C122 96 122 116 120 136',
    },
    { d: 'M46 126 Q80 134 114 126 L116 140 Q80 148 44 140 Z', role: 'accent' },
    { d: 'M54 140 L42 184 M108 140 L116 182 M80 146 V184' },
    {
      d: 'M100 80 l7 -4 M104 96 l7 -4 M104 112 l7 -4 M110 154 l6 -4 M112 170 l6 -4',
      role: 'ambient',
    },
    shadow(80, 188, 48),
  ],

  // Seiko's short fair hair curling sideways, from behind and a little to
  // her left so the near curl turns toward the viewer, the curls in tint,
  // over the shoulders of her light long-sleeved dress: the Sixth Queen as
  // she first appears, chapter 372.
  'seiko-hui-guo-rou': [
    { d: 'M48 98 C42 64 58 44 80 44 C102 44 114 64 110 100' },
    {
      d: 'M48 98 C36 100 30 90 36 82 C42 76 50 82 46 90 M110 100 C118 100 122 94 118 90 C115 87 111 90 113 94',
      role: 'accent',
    },
    {
      d: 'M62 56 C58 70 60 84 58 96 M80 46 C78 64 80 82 78 98 M98 58 C100 72 100 86 100 98',
      role: 'soft',
    },
    { d: 'M104 70 l5 -4 M106 84 l5 -4', role: 'ambient' },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Zigg's spiky white hair from behind and a little to his left, sticking
  // out in every direction like Killua's, its outline in tint and the spikes
  // behind it soft, the nape in its shade: the young Zoldyck of Netero's
  // expedition, as Ging tells of it in chapter 344.
  'zigg-zoldyck': [
    {
      d: 'M50 102 L32 96 L46 86 L24 76 L46 68 L32 50 L54 56 L52 32 L68 48 L76 24 L86 46 L100 30 L102 52 L118 44 L112 64 L126 68 L112 80 L120 92 L106 102',
      role: 'accent',
    },
    {
      d: 'M54 70 L64 82 M68 56 L74 76 M86 54 L86 76 M102 64 L96 80 M58 88 L68 94',
      role: 'soft',
    },
    {
      d: 'M60 110 l8 -6 M64 118 l10 -8 M84 116 l10 -8 M92 108 l6 -5',
      role: 'ambient',
    },
    { d: TURNED_COLLAR, role: 'soft' },
    ...TURNED_BODY,
  ],

  // Curly's glasses in 3/4, the near lens full and the far one turned away,
  // the arms running back from the hinges and the swirls on their lenses in
  // tint: the glasses that hide his eyes when he challenges Ging in chapter
  // 346.
  'curly': [
    { d: `${ellipse(58, 110, 26, 24)} ${ellipse(116, 104, 17, 22)}` },
    {
      d: 'M58 110 m0 -2 a2 2 0 1 1 -2 2 a5 5 0 1 1 6 4 a9 9 0 1 1 -12 -8 a14 14 0 1 1 18 14 M116 104 m0 -2 a1.4 2 0 1 1 -1.4 2 a3.5 5 0 1 1 4.2 4 a6.3 9 0 1 1 -8.4 -8 a9.8 14 0 1 1 12.6 14',
      role: 'accent',
    },
    { d: ellipse(58, 110, 22, 20), role: 'soft' },
    { d: 'M84 106 Q91 98 99 102' },
    { d: 'M32 104 L36 92 L102 62 L108 74 M133 100 L138 92 L152 70 L154 80' },
    { d: 'M100 116 l8 -6 M104 124 l8 -6', role: 'ambient' },
    shadow(84, 152, 60),
  ],

  // Mark's tuxedo cuff and his wristwatch, the watch face in tint, the
  // satin edge of the cuff hatched: he takes the prince's call in chapter
  // 345.
  'mark': [
    { d: 'M14 118 L70 92 L84 124 L28 150 Z' },
    { d: 'M60 96 L74 128', role: 'soft' },
    { d: 'M70 92 L82 88 L96 118 L84 124' },
    {
      d: 'M84 124 C94 132 112 132 126 126 L144 112 L126 88 C112 82 96 84 82 88',
      role: 'soft',
    },
    { d: ellipse(100, 106, 15, 14), role: 'accent' },
    { d: 'M100 106 V98 M100 106 L106 109', role: 'soft' },
    { d: 'M94 92 L96 82 H106 L108 92 M94 120 L96 130 H106 L108 120' },
    { d: 'M20 140 l8 -4 M30 144 l8 -4 M40 140 l8 -4', role: 'ambient' },
    shadow(76, 166, 52),
  ],
} satisfies Drawings

/**
 * Zhang Lei's Guardian Spirit Beast: the dharmachakra, its rim, hub and
 * eight spokes, the dark flame round it, the crosses about it and the one in
 * a circle at its top.
 */
const DHARMACHAKRA: Stroke[] = [
  { d: `${circle(80, 56, 32)} ${circle(80, 56, 25)}` },
  { d: circle(80, 56, 7) },
  {
    d: 'M80 49 V31 M80 63 V81 M73 56 H55 M87 56 H105 M75 51 L62.3 38.3 M85 61 L97.7 73.7 M85 51 L97.7 38.3 M75 61 L62.3 73.7',
    role: 'soft',
  },
  {
    d: 'M52 38 C46 34 46 28 50 24 M48 60 C42 60 38 56 38 50 M58 84 C52 88 46 88 42 84 M102 84 C108 88 114 88 118 84 M112 60 C118 60 122 56 122 50 M108 38 C114 34 114 28 110 24',
    role: 'ambient',
  },
  { d: `${circle(80, 16, 6)} M80 12 V20 M76 16 H84` },
  {
    d: 'M44 48 h6 M47 45 v6 M110 48 h6 M113 45 v6 M44 68 h6 M47 65 v6 M110 68 h6 M113 65 v6 M58 92 h6 M61 89 v6 M96 92 h6 M99 89 v6 M58 20 h6 M61 17 v6 M96 20 h6 M99 17 v6',
    role: 'soft',
  },
]

/** A manga-only stage of a Kakin record. */
const KAKIN = { episode: 148, source: 'chapter' } as const

/** The Kakin records of phase 1 whose drawing changes in chapters 340–412 (#1154, #1156, #1333). */
export const kakinPhaseOneRedrawn: Redrawings = {
  'beyond-netero': [
    // The same back view with open lines rising round it: Longhi tells
    // Kurapika that Beyond marked the children he fathered through sham
    // marriages with a Nen curse that made them curse sacrifices, chapter
    // 401. The curse has no object of its own, so it takes no tint.
    {
      ...KAKIN,
      chapter: 401,
      value: [
        ...BEYOND_BACK,
        {
          d: 'M10 112 q-4 -8 0 -16 q4 -8 0 -16 q-4 -8 0 -16 M150 108 q4 -8 0 -16 q-4 -8 0 -16 q4 -8 0 -16',
          role: 'ambient',
        },
        {
          d: 'M44 32 q-3 -6 0 -12 q3 -6 0 -12 M120 30 q3 -6 0 -12 q-3 -6 0 -12 M24 50 q-3 -5 0 -10 M138 48 q3 -5 0 -10',
          role: 'ambient',
        },
      ],
    },
  ],
  'izunavi': [
    // The black suit and tie he wears as Tyson's Royal Bodyguard, from
    // chapter 362: the same figure, the suit hatched dark, the shirt collar
    // and the tie in tint.
    { ...KAKIN, chapter: 362, value: IZUNAVI_SUIT },
  ],
  'woble-hui-guo-rou': [
    // The same cradle, empty, its blanket in tint thrown over the side:
    // Oito admits that the baby in Room 1014 is her sister's son and that
    // she does not know where her daughter is, chapter 412.
    {
      ...KAKIN,
      chapter: 412,
      value: [
        ...WOBLE_CRADLE,
        ...WOBLE_ROCKERS,
        {
          d: 'M100 96 C104 104 106 114 104 124 L118 126 C122 116 122 104 118 96',
          role: 'accent',
        },
        { d: 'M104 106 l12 2', role: 'soft' },
      ],
    },
  ],
  'momoze-hui-guo-rou': [
    // Her Guardian Spirit Beast sits behind her as she knits, chapter 361:
    // a plump, hairy, hamster-like creature with stubby arms, round feet
    // with three clawed toes, large ears, a mouse-like tail and a heart on
    // its belly. Its face is not drawn.
    {
      ...KAKIN,
      chapter: 361,
      value: [
        ...moved(MOMOZE_KNITTING, BESIDE_THE_BEAST),
        {
          d: 'M50 96 C38 70 46 34 80 30 C114 34 122 70 110 96 C104 112 56 112 50 96 Z',
        },
        { d: 'M58 38 C50 22 62 16 66 32 M102 38 C110 22 98 16 94 32' },
        {
          d: 'M74 70 C72 62 80 60 80 66 C80 60 88 62 86 70 L80 78 Z',
          role: 'soft',
        },
        {
          d: 'M48 70 C40 70 38 78 44 80 M112 70 C120 70 122 78 116 80',
          role: 'soft',
        },
        {
          d: 'M58 104 l-4 6 M64 106 l0 7 M70 106 l4 6 M90 106 l-4 6 M96 106 l0 7 M102 104 l4 6',
        },
        { d: 'M112 90 C130 92 140 80 136 66', role: 'soft' },
        {
          d: 'M46 50 l-5 3 M44 64 l-5 3 M114 50 l5 3 M116 64 l5 3',
          role: 'ambient',
        },
      ],
    },
    // The same chair, the knitting dropped on the floor before it and the
    // needles apart: she is suffocated in her room, chapter 368.
    {
      ...KAKIN,
      chapter: 368,
      value: [
        ...MOMOZE_CHAIR,
        { d: 'M98 160 L138 150 M106 170 L144 164', role: 'accent' },
        {
          d: `${circle(26, 166, 8)} M34 168 C44 174 56 174 64 170`,
          role: 'soft',
        },
        { d: 'M64 170 L92 166 L96 176 L68 180 Z', role: 'soft' },
      ],
    },
  ],
  'kacho-hui-guo-rou': [
    // Her headphones, which stand for her, lying in the lifeboat as it
    // drifts out to sea, and the same headphones above it in the muted ink, a
    // likeness: she dies in the escape, and her Guardian Spirit Beast takes
    // her form to stay by Fugetsu, chapter 383, the chapter both are shown.
    {
      ...KAKIN,
      chapter: 383,
      value: [
        ...moved(
          KACHO_HEADPHONES,
          'translate(80 144) scale(0.4) translate(-80 -142)',
        ),
        ...moved(
          KACHO_HEADPHONES.map((stroke) => ({
            ...stroke,
            role: 'ambient' as const,
          })),
          'translate(80 92) scale(0.7) translate(-80 -142)',
        ),
        { d: 'M22 138 H138 L124 156 H36 Z' },
        { d: 'M28 144 H132', role: 'soft' },
        ...SEA,
      ],
    },
  ],
  'fugetsu-hui-guo-rou': [
    // The small rounded door of the playground tunnel the twins played in
    // as children, set in the wall above the same glass harp made small:
    // her Guardian Spirit Beast's door first appears to her, chapter 374.
    // The handle side is drawn by convention, a frame check: the wiki's
    // note on it is about the outgoing door.
    {
      ...KAKIN,
      chapter: 374,
      value: [
        ...moved(FUGETSU_HARP, BESIDE_THE_BEAST),
        { d: 'M48 108 V52 C48 26 112 26 112 52 V108' },
        { d: 'M56 108 V56 C56 36 104 36 104 56 V108', role: 'soft' },
        { d: circle(64, 80, 3) },
        { d: 'M6 108 H154', role: 'ambient' },
        { d: 'M104 62 l6 -4 M104 78 l6 -4 M104 94 l6 -4', role: 'ambient' },
      ],
    },
  ],
}

/** One of the teardrop tentacles of Camilla's Guardian Spirit Beast. */
const TENTACLE = 'M80 40 C72 30 72 18 77 12 Q80 16 83 12 C88 18 88 30 80 40'

/**
 * The Guardian Spirit Beasts the story shows in chapters 361, 362 and 366,
 * each above its prince's own object, made small. Only the wiki's prose
 * describes them here, and no face is drawn on any of them.
 */
export const kakinPhaseOneBeasts: Redrawings = {
  'benjamin-hui-guo-rou': [
    // A humanoid beetle resting on his shoulders: a domed head with flat
    // triangular spikes for ears, beetle wings closed down its back, two
    // clawed arms and huge clawed legs, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(BENJAMIN_JACKET, BESIDE_THE_BEAST),
        { d: 'M70 30 C70 14 90 14 90 30' },
        { d: 'M71 26 L56 18 L68 36 M89 26 L104 18 L92 36', role: 'soft' },
        { d: 'M62 36 C48 52 52 84 80 96 C108 84 112 52 98 36 Z' },
        {
          d: 'M80 36 V96 M66 44 C62 60 64 76 74 88 M94 44 C98 60 96 76 86 88',
          role: 'soft',
        },
        {
          d: 'M60 50 C44 56 38 68 40 82 l-6 4 M40 82 v7 M40 82 l5 5 M100 50 C116 56 122 68 120 82 l6 4 M120 82 v7 M120 82 l-5 5',
        },
        {
          d: 'M66 92 C54 100 52 108 56 112 l-6 2 M56 112 l2 5 M94 92 C106 100 108 108 104 112 l6 2 M104 112 l-2 5',
        },
        { d: 'M100 54 l5 -3 M102 66 l5 -3 M100 78 l5 -3', role: 'ambient' },
      ],
    },
    // His right palm over the same jacket made small, three stars in tint
    // below its fingers, open lines round the two that hold an inherited
    // ability: Benjamin Baton, by which he inherits the abilities of his
    // sworn soldiers when they die, first shown in chapter 373 with Vincent's
    // and Musse's abilities and a third star without aura. Which fingers the
    // stars sit under is a frame check.
    {
      ...KAKIN,
      chapter: 373,
      value: [
        ...moved(BENJAMIN_JACKET, BESIDE_THE_BEAST),
        {
          d: 'M56 112 L52 50 Q52 44 57 44 Q62 44 62 50 V72 M62 72 V34 Q62 28 67 28 Q72 28 72 34 V70 M72 70 V26 Q72 20 77 20 Q82 20 82 26 V70 M82 70 V32 Q82 26 87 26 Q92 26 92 32 V80 C100 72 110 70 114 76 Q116 82 110 86 C102 94 100 102 98 112',
        },
        {
          d: `${star(61, 86, 4.5, 2)} ${star(77, 84, 4.5, 2)} ${star(93, 88, 4.5, 2)}`,
          role: 'accent',
        },
        {
          d: 'M77 76 v-3 M71 80 l-3 -2 M83 80 l3 -2 M93 80 v-3 M87 84 l-3 -2 M99 84 l3 -2',
          role: 'ambient',
        },
        {
          d: 'M60 96 Q76 104 96 92 M62 60 h10 M72 52 h10 M82 56 h10',
          role: 'soft',
        },
      ],
    },
  ],
  'camilla-hui-guo-rou': [
    // A large sea anemone: teardrop tentacles, a scaled trunk and roots that
    // spread like a flowing skirt, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(CAMILLA_UPDO, BESIDE_THE_BEAST),
        { d: TENTACLE, transform: 'translate(-24 8) rotate(-24 80 40)' },
        { d: TENTACLE, transform: 'translate(-10 0) rotate(-10 80 40)' },
        { d: TENTACLE, transform: 'translate(0 -4)' },
        { d: TENTACLE, transform: 'translate(12 0) rotate(10 80 40)' },
        { d: TENTACLE, transform: 'translate(24 8) rotate(24 80 40)' },
        {
          d: `${ellipse(80, 44, 22, 5)} M58 44 C56 62 60 76 66 86 M102 44 C104 62 100 76 94 86`,
        },
        {
          d: 'M64 56 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 M66 68 q4 4 7 0 q4 4 7 0 q4 4 7 0 q4 4 7 0',
          role: 'soft',
        },
        {
          d: 'M66 86 C54 94 44 100 34 108 Q80 118 126 108 C116 100 106 94 94 86',
        },
        {
          d: 'M56 98 L50 110 M70 92 L66 114 M90 92 L94 114 M104 98 L110 110',
          role: 'soft',
        },
      ],
    },
    // A huge cat above the same updo made small, the tip of its tail turned
    // white (the wiki's ability box) and a drop falling from it: the cat
    // drips the life it took from her killer into her mouth, and Cat's Name
    // brings her back after Musse shoots her, chapter 373. It appears
    // behind her killer; its pose here is a frame check. No face.
    {
      ...KAKIN,
      chapter: 373,
      value: [
        ...moved(CAMILLA_UPDO, BESIDE_THE_BEAST),
        {
          d: 'M42 108 C34 78 42 52 58 44 L56 18 L72 34 Q80 32 88 34 L104 18 L102 44 C118 52 126 78 118 108',
        },
        { d: 'M60 30 L64 38 M100 30 L96 38', role: 'soft' },
        { d: 'M118 100 C142 94 150 66 136 50' },
        {
          d: 'M136 50 C130 44 132 36 138 38 C144 40 144 48 136 50',
          role: 'soft',
        },
        { d: 'M136 60 C133 64 133 68 136 68 C139 68 139 64 136 60 Z' },
        {
          d: 'M50 70 l-6 4 M48 84 l-6 4 M112 70 l6 4 M114 84 l6 4',
          role: 'ambient',
        },
      ],
    },
  ],
  'zhang-lei-hui-guo-rou': [
    // A great dharmachakra, the wheel of eight spokes, a dark flame running
    // round its rim, eight crosses about it and one in a circle at its top,
    // chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [...moved(ZHANG_LEI, BESIDE_THE_BEAST), ...DHARMACHAKRA],
    },
    // The same wheel, and a coin falling from it, its floral design in tint:
    // a coin drops out of the beast's mouth onto the floor behind him while
    // he eats, chapter 374. The number on the coin is lettering, so it is not
    // drawn; the flower is drawn by convention, a frame check. No glow.
    {
      ...KAKIN,
      chapter: 374,
      value: [
        ...moved(ZHANG_LEI, BESIDE_THE_BEAST),
        ...DHARMACHAKRA,
        { d: `${circle(128, 112, 12)} ${circle(128, 112, 9)}` },
        {
          d: `${circle(128, 107, 2.5)} ${circle(132.8, 110.5, 2.5)} ${circle(131, 116, 2.5)} ${circle(125, 116, 2.5)} ${circle(123.2, 110.5, 2.5)}`,
          role: 'accent',
        },
        { d: 'M112 90 l4 6 M120 88 l3 6 M140 92 l-3 6', role: 'ambient' },
      ],
    },
  ],
  'tserriednich-hui-guo-rou': [
    // A horse-like beast side on: a long neck, long fair hair down it, high
    // heels for hooves and a tail of many whips. It confronts Theta with
    // him, chapter 362. Its faces are not drawn.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved([...SCARLET_EYES_JAR, shadow(80, 166, 40)], BESIDE_THE_BEAST),
        {
          d: 'M58 60 C72 52 104 52 116 62 C122 72 116 84 104 86 H66 C56 84 52 70 58 60 Z',
        },
        { d: 'M58 62 C50 46 44 32 40 20 M68 56 C60 40 54 28 50 16' },
        { d: 'M40 20 C34 16 36 8 44 8 L52 14 C52 18 50 18 50 16' },
        {
          d: 'M46 8 C62 14 70 32 76 54 M52 10 C70 20 80 38 86 56',
          role: 'soft',
        },
        {
          d: 'M66 86 L62 106 H70 M62 106 V112 M78 86 L76 106 H84 M76 106 V112 M100 86 L102 106 H110 M102 106 V112 M110 84 L114 104 H122 M114 104 V110',
        },
        {
          d: 'M118 64 C132 62 140 70 146 84 M118 66 C130 70 136 82 136 98 M118 68 C126 78 126 92 122 106',
          role: 'soft',
        },
        { d: 'M98 64 l5 -3 M104 74 l5 -3 M96 78 l5 -3', role: 'ambient' },
      ],
    },
    // The same jar, and behind it its likeness in the muted ink where it
    // will be ten seconds later: with his eyes shut in Zetsu he sees ten
    // seconds ahead, and Theta sees him dead where he no longer is, chapter
    // 385 (explained in 387). No glow.
    {
      ...KAKIN,
      chapter: 385,
      value: [
        ...moved(
          SCARLET_EYES_JAR.map((stroke) => ({
            ...stroke,
            role: 'ambient' as const,
          })),
          'translate(22 -22)',
        ),
        ...moved(
          [...SCARLET_EYES_JAR, shadow(80, 166, 40)],
          'translate(-12 10)',
        ),
      ],
    },
  ],
  'tubeppa-hui-guo-rou': [
    // A horned amphibian on spiked axle wheels for legs, a row of pole-like
    // horns standing on its back, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(TUBEPPA_GLASSES, BESIDE_THE_BEAST),
        {
          d: 'M36 70 C36 50 60 42 84 44 C108 42 128 54 128 72 C128 86 110 92 82 92 C56 92 36 86 36 70 Z',
        },
        { d: 'M40 60 L24 46 L44 54' },
        {
          d: 'M60 48 V24 M74 44 V18 M88 44 V20 M102 46 V26 M114 52 V34',
          role: 'soft',
        },
        { d: `${circle(56, 100, 10)} ${circle(108, 100, 10)}` },
        {
          d: 'M56 86 v-4 M56 114 v4 M42 100 h-4 M70 100 h4 M108 86 v-4 M108 114 v4 M94 100 h-4 M122 100 h4',
        },
        { d: `${circle(56, 100, 2)} ${circle(108, 100, 2)}`, role: 'soft' },
        { d: 'M110 60 l6 -4 M114 72 l6 -4 M112 84 l5 -3', role: 'ambient' },
      ],
    },
  ],
  'tyson-hui-guo-rou': [
    // A heart-shaped creature hovering above her on four small wings,
    // chapter 362. Its one eye is not drawn.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(TYSON_BOOKS, BESIDE_THE_BEAST),
        {
          d: 'M80 96 C60 80 46 66 46 48 C46 34 58 28 68 32 C74 34 78 40 80 44 C82 40 86 34 92 32 C102 28 114 34 114 48 C114 66 100 80 80 96 Z',
        },
        { d: 'M48 42 C34 30 22 36 28 48 Z M50 62 C36 62 28 72 38 78 Z' },
        {
          d: 'M112 42 C126 30 138 36 132 48 Z M110 62 C124 62 132 72 122 78 Z',
        },
        { d: 'M56 46 C58 40 64 38 68 40', role: 'soft' },
        { d: 'M100 56 l6 -4 M98 68 l6 -4 M92 78 l5 -3', role: 'ambient' },
      ],
    },
  ],
  'luzurus-hui-guo-rou': [
    // A great centipede curling over him: antennae, small wing-like
    // extensions behind its head and many legs, chapter 362. Its face is not
    // drawn, nor the pincer at its tail, first shown in chapter 375.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved([...LUZURUS_HAIR, shadow(80, 176, 50)], BESIDE_THE_BEAST),
        {
          d: `${ellipse(38, 42, 9, 7)} ${ellipse(52, 52, 8, 6)} ${ellipse(66, 60, 8, 6)} ${ellipse(80, 64, 8, 6)} ${ellipse(94, 64, 8, 6)} ${ellipse(108, 60, 8, 6)} ${ellipse(120, 52, 7, 6)}`,
        },
        {
          d: 'M52 58 l-3 8 M66 66 l-2 8 M80 70 v8 M94 70 v8 M108 66 l2 8 M120 58 l3 8 M52 46 l-3 -8 M66 54 l-2 -8 M80 58 v-8 M94 58 v-8 M108 54 l2 -8',
          role: 'soft',
        },
        { d: 'M32 38 C24 28 20 20 22 10 M36 36 C32 24 34 14 40 8' },
        { d: 'M46 44 C42 32 52 26 58 36', role: 'soft' },
      ],
    },
  ],
  'sale-sale-hui-guo-rou': [
    // A spherical mass with no clear anatomy hovering over him, covered in
    // mouths of many sizes drawn as plain slits, chapter 362.
    {
      ...KAKIN,
      chapter: 362,
      value: [
        ...moved(SALE_SALE, BESIDE_THE_BEAST),
        {
          d: 'M80 18 C96 16 112 26 116 42 C122 58 114 78 100 86 C88 94 68 94 56 86 C42 76 38 56 44 40 C50 26 64 18 80 18 Z',
        },
        {
          d: 'M52 42 q5 -3 10 0 M86 26 q4 3 8 0 M100 44 q3 5 0 10 M62 66 q-3 5 0 10 M78 46 q5 3 10 0 M96 74 q5 -3 10 0 M48 60 q3 -4 7 -2 M84 86 q-4 -3 -8 0 M70 28 q-3 4 -1 8 M108 58 q-4 2 -6 6',
          role: 'soft',
        },
        { d: 'M104 34 l5 -3 M110 48 l5 -3 M108 64 l5 -3', role: 'ambient' },
      ],
    },
    // Rihan's Predator eats the beast whole, chapter 381: his first drawing
    // again.
    { ...KAKIN, chapter: 381, value: SALE_SALE },
    // The same ear lying on its side on a pillow: he is found in bed, not
    // breathing, killed by Benjamin's soldier, chapter 382.
    {
      ...KAKIN,
      chapter: 382,
      value: [
        {
          d: 'M14 150 C10 130 20 124 40 124 H120 C140 124 150 130 146 150 C150 168 140 174 120 174 H40 C20 174 10 168 14 150 Z',
        },
        { d: 'M30 134 Q80 142 130 134', role: 'soft' },
        ...moved(
          SALE_SALE_EAR,
          'translate(84 142) rotate(-90) scale(0.62) translate(-88 -96)',
        ),
        { d: 'M4 180 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'halkenburg-hui-guo-rou': [
    // A shaggy gargoyle with two horns over its head and three clawed
    // fingers and toes, chapter 361. Its one eye and scowl are not drawn.
    {
      ...KAKIN,
      chapter: 361,
      value: [
        ...moved(HALKENBURG_PISTOL, BESIDE_THE_BEAST),
        {
          d: 'M52 104 C40 84 44 48 62 38 C72 32 88 32 98 38 C116 48 120 84 108 104',
        },
        { d: 'M64 38 C56 26 58 14 64 8 M96 38 C104 26 102 14 96 8' },
        {
          d: 'M50 54 l-6 4 l6 2 l-6 4 l6 2 l-6 4 l6 2 M110 54 l6 4 l-6 2 l6 4 l-6 2 l6 4 l-6 2',
          role: 'ambient',
        },
        {
          d: 'M54 68 C42 74 38 84 40 94 l-6 4 M40 94 v7 M40 94 l5 5 M106 68 C118 74 122 84 120 94 l6 4 M120 94 v7 M120 94 l-5 5',
        },
        {
          d: 'M64 104 l-6 6 M64 104 v8 M64 104 l6 6 M96 104 l-6 6 M96 104 v8 M96 104 l6 6',
        },
        { d: 'M64 52 Q80 46 96 52', role: 'soft' },
      ],
    },
    // A bow drawn with an arrow on its string, over the same pistol made
    // small: the bow his aura forms and the arrow made of his guards' aura,
    // which nothing can stop once drawn, first shot in chapter 382.
    {
      ...KAKIN,
      chapter: 382,
      value: [
        ...moved(HALKENBURG_PISTOL, BESIDE_THE_BEAST),
        { d: 'M60 12 C34 34 34 88 60 110' },
        { d: 'M60 12 L106 61 L60 110', role: 'soft' },
        { d: 'M110 61 H14 M14 61 l10 -6 M14 61 l10 6' },
        {
          d: 'M110 61 l8 -6 M110 61 l8 6 M102 61 l8 -6 M102 61 l8 6',
          role: 'soft',
        },
        {
          d: 'M40 30 l-6 -4 M36 92 l-6 4 M126 48 l6 -4 M126 74 l6 4',
          role: 'ambient',
        },
      ],
    },
    // The same pistol dropped and lying upside down on the floor, and no
    // bow: his body dies in the Tier 3 hospital and the ship is told,
    // chapter 404. His mind lives on in Balsamilco's body, which is that
    // record's state, not drawn here.
    {
      ...KAKIN,
      chapter: 404,
      value: [
        ...moved(HALKENBURG_GUN, 'translate(0 4) rotate(180 80 120)'),
        { d: 'M8 162 H152', role: 'ambient', dashed: true },
        shadow(80, 170, 56),
      ],
    },
  ],
  'marayam-hui-guo-rou': [
    // A long Chinese dragon coiling over the cage: three horns at its head,
    // fins beneath its body and a pointed fin for a tail, chapter 366.
    {
      ...KAKIN,
      chapter: 366,
      value: [
        ...moved(MARAYAM_CAGE, BESIDE_THE_BEAST),
        { d: 'M30 44 C50 22 70 64 90 44 C110 24 128 46 140 62' },
        { d: 'M32 56 C52 36 72 76 92 56 C110 38 124 56 132 68' },
        { d: 'M30 44 C18 44 14 52 20 58 L32 56' },
        { d: 'M24 46 L16 32 M28 44 L26 28 M32 44 L38 30' },
        { d: 'M140 62 L154 56 L146 74 L132 68', role: 'soft' },
        { d: 'M60 62 l-4 10 l8 -6 M104 54 l-2 10 l8 -6', role: 'soft' },
        {
          d: 'M44 42 l4 4 M56 44 l4 4 M72 56 l2 5 M86 54 l3 4 M100 40 l3 4 M114 44 l2 5',
          role: 'ambient',
        },
      ],
    },
  ],
}
