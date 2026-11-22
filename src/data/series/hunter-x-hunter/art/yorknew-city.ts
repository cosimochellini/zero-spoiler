import {
  type Drawings,
  moved,
  type Redrawings,
  softened,
  type Stroke,
} from '~/data/art/stroke'
import { circle, dots, ellipse, shadow } from '~/lib/svg/primitives'

import { NEN_NEEDLE } from './arena-abilities'

/**
 * Baise's lipstick standing open: both her drawings keep it, and so does
 * Instant Lover's.
 */
export const LIPSTICK: Stroke[] = [
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
 * A pair of lips in tint, the sign of Baise's kiss: drawn as a symbol, never
 * as part of a face (owner, 2026-11-16). Instant Lover draws it.
 */
export const KISS: Stroke[] = [
  {
    d: 'M98 98 C102 93 106 88 110 88 C113 88 115 90 116 91 C117 90 119 88 122 88 C126 88 130 93 134 98 C128 106 122 110 116 110 C110 110 104 106 98 98 Z',
    role: 'accent',
  },
  { d: 'M98 98 C108 100 124 100 134 98', role: 'soft' },
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

/**
 * The outline of one of Tocino's figures in black: the hood up with its
 * opening dark and empty, the robe's collar, body and sleeves. Eleven Black
 * Children draws the figures behind with it.
 */
export const TOCINO_ROBE_OUTLINE: Stroke[] = [
  { d: 'M67 40 C62 26 68 10 80 8 C92 10 98 26 93 40' },
  { d: 'M72 39 C70 28 74 18 80 17 C86 18 90 28 88 39', role: 'soft' },
  { d: 'M73 33 L85 22 M74 38 L88 26 M81 39 L88 33', role: 'ambient' },
  { d: ellipse(80, 40, 13, 4) },
  {
    d: 'M67 40 L46 50 L32 112 M47 117 L54 82 L44 172 H116 L106 82 L113 117 M128 112 L114 50 L93 40',
  },
]

/**
 * One of Tocino's figures in black: an empty hooded robe, its far half
 * hatched.
 */
export const TOCINO_ROBE: Stroke[] = [
  ...TOCINO_ROBE_OUTLINE,
  { d: 'M32 112 A8 3.5 12 1 0 47 117 A8 3.5 12 1 0 32 112', role: 'soft' },
  { d: 'M128 112 A8 3.5 -12 1 1 113 117 A8 3.5 -12 1 1 128 112', role: 'soft' },
  { d: 'M80 44 V172 M62 100 Q58 136 56 170', role: 'soft' },
  {
    d: 'M88 64 l12 -9 M88 86 l14 -10 M88 108 l15 -11 M88 130 l16 -11 M88 152 l17 -12 M90 170 l14 -10',
    role: 'ambient',
  },
]

/** The figure's sword, the guard in tint. */
export const TOCINO_SWORD: Stroke[] = [
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

/**
 * Ivlenkov's black suit jacket in 3/4, buttoned over a round front, the far
 * sleeve turning away and hatched, the tie in tint.
 */
const IVLENKOV_JACKET: Stroke[] = [
  {
    d: 'M66 38 L38 50 L24 124 M38 128 L46 86 C34 118 38 150 52 170 H102 C110 150 112 120 106 86 L108 120 M118 118 L110 46 L92 38',
  },
  { d: 'M24 124 A7 3 12 1 0 38 128 A7 3 12 1 0 24 124', role: 'soft' },
  { d: 'M118 118 A5 2.5 -12 1 1 108 120 A5 2.5 -12 1 1 118 118', role: 'soft' },
  { d: 'M66 38 L76 88 L92 38 M66 38 Q79 46 92 38', role: 'soft' },
  {
    d: 'M75 46 H81 L83 52 L80 80 L78 84 L76 80 L73 52 Z M73 52 H83',
    role: 'accent',
  },
  {
    d: `M76 88 C90 108 94 140 84 170 ${dots([
      [88, 108],
      [91, 130],
    ])}`,
    role: 'soft',
  },
  {
    d: 'M96 92 l8 -6 M98 112 l8 -6 M98 134 l8 -6 M96 156 l8 -6 M110 70 l4 -3 M112 90 l4 -3 M113 108 l4 -3',
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

/**
 * Uvogin's bearskin vest in 3/4, open at the front: shaggy fur at the collar
 * and armholes, the fur edging in tint, the far panel turning away hatched.
 */
export const UVOGIN_VEST: Stroke[] = [
  { d: 'M62 32 L34 42 C44 54 44 72 36 82 L32 152 H76 L78 66 Z' },
  { d: 'M96 32 L114 40 C106 52 106 70 112 80 L116 150 L92 152 L90 66 Z' },
  { d: 'M62 32 Q79 40 96 32 M76 148 C80 146 88 146 92 148', role: 'soft' },
  {
    d: 'M62 32 L67.6 34.5 L66 40.5 L71.6 43 L70 49 L75.6 51.5 L74 57.5 L79.6 60 L78 66 M32 152 L35.4 157.2 L39.3 152.3 L42.8 157.5 L46.7 152.7 L50.1 157.8 L54 153 L57.4 158.2 L61.3 153.3 L64.8 158.5 L68.7 153.7 L72.1 158.8 L76 154 M96 32 L91.3 35.6 L94.5 40.5 L89.8 44.1 L93 49 L88.3 52.6 L91.5 57.5 L86.8 61.1 L90 66 M92 152 L95.4 156.7 L98 151.5 L101.4 156.2 L104 151 L107.4 155.7 L110 150.5 L113.4 155.2 L116 150',
    role: 'accent',
  },
  {
    d: 'M34 42 l-4 -4 M39.6 51.9 l-5 -1 M41.8 62.8 l-5 0 M40.5 73.2 l-5 1 M114 40 l4 -4 M109.5 49.9 l5 -1 M107.8 60.8 l5 0 M108.7 71.2 l5 1 M68 30 l-1 -5 M79 36 v-5 M90 30 l1 -5',
    role: 'soft',
  },
  { d: 'M46 98 l5 4 M42 120 l5 4 M48 140 l5 4 M58 86 l5 4', role: 'soft' },
  {
    d: 'M95 88 l9 -6 M95 108 l10 -7 M96 128 l10 -7 M97 146 l9 -6',
    role: 'ambient',
  },
]

/**
 * Rabid Dog's long-sleeved shirt in 3/4, its high neck a tube seen from a
 * little above, in tint, the far sleeve turning away and the far side
 * hatched.
 */
const RABID_DOG_SHIRT: Stroke[] = [
  {
    d: `${ellipse(80, 28, 14, 4.5)} M66 28 V46 C70 52 90 52 94 46 V28`,
    role: 'accent',
  },
  { d: 'M66 36 C70 41 90 41 94 36', role: 'soft' },
  {
    d: 'M66 46 L40 56 L28 130 M42 134 L50 90 L50 172 H106 L106 90 L110 126 M120 124 L112 56 L94 46',
  },
  { d: 'M28 130 A7 3 12 1 0 42 134 A7 3 12 1 0 28 130', role: 'soft' },
  { d: 'M120 124 A5 2.5 -12 1 1 110 126 A5 2.5 -12 1 1 120 124', role: 'soft' },
  { d: 'M94 52 V172 M38 82 l5 10 M68 120 Q70 146 66 168', role: 'soft' },
  {
    d: 'M96 92 l8 -6 M96 114 l8 -6 M96 136 l8 -6 M96 158 l8 -6 M112 72 l4 -3 M113 90 l4 -3 M114 108 l4 -3',
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
 * Pakunoda's long suit jacket in 3/4, cut low, the lapels in tint, the far
 * sleeve turning away and the far side hatched.
 */
const PAKUNODA_JACKET: Stroke[] = [
  {
    d: 'M66 36 L40 46 L28 128 M42 132 L48 86 C44 120 46 150 50 172 H108 C110 150 110 120 106 86 L108 120 M118 118 L112 46 L94 36',
  },
  {
    d: 'M66 36 L78 100 L94 36 M66 36 L72 70 L78 100 M94 36 L86 70 L78 100',
    role: 'accent',
  },
  { d: 'M28 128 A7 3 12 1 0 42 132 A7 3 12 1 0 28 128', role: 'soft' },
  { d: 'M118 118 A5 2.5 -12 1 1 108 120 A5 2.5 -12 1 1 118 118', role: 'soft' },
  {
    d: `M78 100 C82 126 84 150 82 172 ${dots([
      [76, 118],
      [77, 138],
    ])}`,
    role: 'soft',
  },
  { d: 'M38 78 l5 9 M62 130 Q64 150 60 170', role: 'soft' },
  {
    d: 'M94 104 l8 -6 M96 126 l8 -6 M97 148 l8 -6 M109 64 l4 -3 M110 82 l4 -3 M111 100 l4 -3',
    role: 'ambient',
  },
]

/**
 * Open rings of aura round the jacket's near cuff, where her hand reads a
 * memory by touch: her first Hatsu has no object of its own, so it is
 * drawn as open lines, never the accent.
 */
const PAKUNODA_READING: Stroke = {
  d: 'M24 140 A12 12 0 0 0 46 140 M18 144 A18 18 0 0 0 52 144 M12 148 A24 24 0 0 0 58 148',
  role: 'ambient',
}

/**
 * Pakunoda's six-shot revolver from the side in 3/4, the cylinder's face
 * turned to the reader with its chambers and the grip's far side hatched:
 * Memory Bomb and both her later stages draw it.
 */
export const PAKUNODA_REVOLVER: Stroke[] = [
  {
    d: 'M64 80 H52 L46 84 L40 78 L36 80 L42 90 L48 100 H64 M48 100 L36 146 Q35 152 41 152 H52 Q57 152 58 147 L64 104',
  },
  { d: 'M64 80 H90 V104 H64 Z M95 86 H126 V95 H95 M120 86 V82 H124 V86' },
  { d: 'M64 88 H90 M64 96 H90', role: 'soft' },
  {
    d: `${ellipse(91, 92, 5, 12)} ${dots([
      [91, 84],
      [93.5, 88],
      [93.5, 96],
      [91, 100],
      [88.5, 96],
      [88.5, 88],
    ])} ${ellipse(126, 90.5, 2, 4.5)}`,
    role: 'soft',
  },
  {
    d: 'M64 104 C64 118 82 118 84 104 M70 104 C70 110 72 112 74 112',
    role: 'soft',
  },
  { d: 'M44 116 l8 -4 M42 128 l8 -4 M40 140 l8 -4', role: 'ambient' },
]

/** A conjured Memory Bomb in tint, leaving the revolver's muzzle. */
export const MEMORY_BOMB_SHOT: Stroke[] = [
  {
    d: 'M132 86 H144 C150 86 154 90.5 154 90.5 C154 90.5 150 95 144 95 H132 Z',
    role: 'accent',
  },
  { d: 'M130 80 l4 -4 M130 101 l4 4', role: 'ambient' },
]

/**
 * The open mouth of Kortopi's vase seen from above and the round of its
 * foot: the vase's depth, kept apart so a copy in tint stays one stroke.
 */
const VASE_DEPTH: Stroke = {
  d: `${ellipse(48, 66.6, 6.5, 1.7)} M38 150 C42 154 54 154 58 150`,
  role: 'soft',
}

/**
 * One of Bonolenov's boxing gloves lying on its side, its thumb and cuff:
 * his first drawing and his Battle Cantabile stage keep it.
 */
export const BONOLENOV_GLOVE: Stroke[] = [
  {
    d: 'M18 154 C18 144 28 140 40 140 C54 140 60 150 60 160 C60 170 54 176 40 176 C28 176 18 172 18 166 Z M18 152 H6 V170 H18',
    role: 'soft',
  },
  { d: 'M30 166 C26 158 32 152 40 154', role: 'soft' },
]

/** The canister of Blinky, the vacuum cleaner Shizuku conjures, in 3/4. */
export const BLINKY_CANISTER: Stroke[] = [
  { d: 'M28 152 V112 C28 92 44 84 64 84 C84 84 100 92 100 112 V152 Z' },
  { d: 'M56 85 C62 77 70 74 78 74 C98 74 114 82 114 102 V142 L100 152' },
  { d: 'M100 112 L114 102', role: 'soft' },
]

/**
 * Blinky's side hatched, its hose curling to the nozzle on the floor and
 * the air drawn in by it. Blinky's own drawing puts a face on the canister;
 * Shizuku's stage leaves it out.
 */
export const BLINKY_HOSE: Stroke[] = [
  { d: 'M104 140 l7 -6 M104 126 l7 -6 M104 112 l7 -6', role: 'ambient' },
  {
    d: 'M92 76 C100 48 138 40 144 68 C148 88 140 116 140 140 M100 80 C106 60 132 54 136 72 C140 90 132 116 132 140',
  },
  { d: 'M124 140 H148 L154 154 H120 Z' },
  { d: 'M104 156 h10 M108 150 h8 M106 162 h10', role: 'ambient' },
]

/**
 * Shizuku's black-framed glasses folded and standing in 3/4, the frames in
 * tint, the folded arms crossing behind the clear lenses.
 */
const SHIZUKU_GLASSES: Stroke[] = [
  {
    d: 'M34 96 Q34 86 44 86 H66 Q74 86 74 96 V108 Q74 118 64 118 H44 Q34 118 34 108 Z M88 92 Q88 84 95 84 H112 Q118 84 118 92 V104 Q118 112 111 112 H95 Q88 112 88 104 Z',
    role: 'accent',
  },
  { d: 'M74 96 Q81 89 88 93' },
  {
    d: 'M34 94 L100 98 Q104 98 104 102 M118 90 L56 94 Q52 94 52 98',
    role: 'soft',
  },
  { d: 'M40 112 l10 -10 M94 108 l8 -8', role: 'ambient' },
]

/** One of the vases Kortopi copies, standing, its mouth seen from above. */
export const KORTOPI_VASE: Stroke[] = [
  {
    d: `${ellipse(48, 66, 10, 3)} M38 66 H58 M40 66 C40 80 28 90 28 112 C28 134 34 146 38 150 H58 C62 146 68 134 68 112 C68 90 56 80 56 66`,
  },
]

/** Basho's writing brush, its tip in tint and the handle's shade hatched. */
export const BASHO_BRUSH: Stroke[] = [
  { d: 'M34 58 L42 50 L100 108 L92 116 Z' },
  { d: 'M92 116 L100 108 L107 115 L99 123 Z', role: 'soft' },
  {
    d: 'M99 123 C102 132 110 138 120 138 C119 129 113 121 107 115',
    role: 'accent',
  },
  { d: 'M48 68 l4 -4 M60 80 l4 -4 M72 92 l4 -4', role: 'ambient' },
]

/**
 * Owl's cloth knotted into a bundle, seen in 3/4 a little from above: the
 * knot on top with its two ends lying over in tint, the folds gathered up
 * into it and the far side hatched. His drawing and Fun Fun Cloth's keep it.
 */
export const OWL_BUNDLE: Stroke[] = [
  {
    d: 'M24 146 C14 118 36 92 66 88 M94 88 C124 92 146 118 136 146 C120 158 40 158 24 146',
  },
  { d: ellipse(80, 86, 14, 7) },
  {
    d: 'M68 82 C58 74 44 74 34 84 C44 86 56 90 67 90 M92 82 C104 72 120 74 128 86 C118 88 104 90 93 90',
    role: 'accent',
  },
  {
    d: 'M70 92 C56 106 46 124 44 148 M80 93 V154 M90 92 C104 106 114 124 116 150 M66 90 C50 98 36 112 30 128',
    role: 'soft',
  },
  {
    d: 'M118 110 l8 -6 M122 124 l9 -7 M124 138 l9 -7 M110 98 l6 -5',
    role: 'ambient',
  },
]

/**
 * The same cloth lying open and flat on the ground, the knot undone and
 * its two ends loose in tint: Owl's presumed death for a chapter reader.
 */
const OWL_CLOTH_OPEN: Stroke[] = [
  {
    d: 'M12 164 C26 146 52 140 74 144 C96 138 130 142 150 158 C134 174 98 178 76 174 C50 178 26 174 12 164 Z',
  },
  {
    d: 'M74 144 C70 132 60 126 46 128 C54 134 62 140 70 146 M98 141 C106 128 120 124 134 128 C124 134 114 140 106 143',
    role: 'accent',
  },
  {
    d: 'M34 166 C50 158 64 160 80 166 M94 156 C110 162 124 162 138 158 M60 152 C72 156 84 154 94 150',
    role: 'soft',
  },
  { d: 'M110 170 l8 -5 M124 168 l8 -5 M136 164 l7 -5', role: 'ambient' },
]

/**
 * The Yorknew City records (#900), each at its named scene: first-pass
 * drawings, graded and redrawn in #901.
 */
/** Neon's stack of blank sheets in 3/4, its edge hatched. */
export const NEON_SHEETS: Stroke[] = [
  { d: 'M22 130 L98 110 L140 138 L64 160 Z' },
  { d: 'M22 130 V138 L64 168 L140 146 V138' },
  { d: 'M22 134 L64 164 L140 142', role: 'soft' },
  { d: 'M30 126 L96 108 M100 112 L134 134', role: 'soft' },
  {
    d: 'M78 164 l3 -5 M96 159 l3 -5 M114 153 l3 -5 M130 148 l3 -5',
    role: 'ambient',
  },
]

/** The pen her power guides, the nib in tint. */
export const NEON_PEN: Stroke[] = [
  { d: 'M44 48 L52 42 L114 112 L106 118 Z' },
  { d: 'M44 48 C40 44 46 38 52 42', role: 'soft' },
  { d: 'M58 62 L66 56 M62 66 L96 104', role: 'soft' },
  { d: 'M106 118 L118 132 L114 112', role: 'accent' },
  { d: 'M70 76 l4 -4 M80 88 l4 -4 M90 100 l4 -4', role: 'ambient' },
]

/**
 * One of Franklin's hands from the little finger's side, pointing to the
 * right with its four fingers spread and cut at the last joint, each tip
 * hanging below its finger on a short chain, in tint, and a streak of aura
 * flying on from each. Drawn about the origin. Franklin's drawing and
 * Double Machine Gun's keep it.
 */
export const MACHINE_GUN_HAND: Stroke[] = [
  { d: 'M12.4 -16.3 C2 -20 -12 -14 -50 -10 M13.5 15.4 C2 20 -12 18 -50 16' },
  {
    d: 'M12.4 -16.3 L40 -39.4 M18.2 -9.4 L45.8 -32.5 M18.3 -9.2 L57.1 -18.9 M20.5 -0.5 L59.3 -10.1 M20.5 -0.6 L57.8 6.6 M18.8 8.2 L56.1 15.5 M18.8 8.1 L43.1 25.7 M13.5 15.4 L37.8 33',
  },
  {
    d: 'M40 -39.4 A4.5 2.2 50 1 0 45.8 -32.5 A4.5 2.2 50 1 0 40 -39.4 M57.1 -18.9 A4.5 2.2 76 1 0 59.3 -10.1 A4.5 2.2 76 1 0 57.1 -18.9 M57.8 6.6 A4.5 2.2 101 1 0 56.1 15.5 A4.5 2.2 101 1 0 57.8 6.6 M43.1 25.7 A4.5 2.2 126 1 0 37.8 33 A4.5 2.2 126 1 0 43.1 25.7',
    role: 'soft',
  },
  {
    d: 'M23.2 -25.3 L28.9 -18.4 M31.9 -12.6 L34.1 -3.9 M34.2 2.1 L32.5 10.9 M30.2 16.3 L24.9 23.6 M-6 -6 C0 -2 2 6 -2 12',
    role: 'soft',
  },
  {
    d: 'M42.9 -32.5 V-27.5 M39.9 -27.5 H45.9 V-23.5 C45.9 -20.5 39.9 -20.5 39.9 -23.5 Z M58.2 -10.1 V-5.1 M55.2 -5.1 H61.2 V-1.1 C61.2 1.9 55.2 1.9 55.2 -1.1 Z M56.9 15.5 V20.5 M53.9 20.5 H59.9 V24.5 C59.9 27.5 53.9 27.5 53.9 24.5 Z M40.5 33 V38 M37.5 38 H43.5 V42 C43.5 45 37.5 45 37.5 42 Z',
    role: 'accent',
  },
  {
    d: 'M49 -41.1 L62.8 -52.7 M66 -16.5 L83.4 -20.8 M64.8 12.6 L82.5 16 M46.9 34.1 L61.5 44.7',
    role: 'ambient',
  },
]

/**
 * Uvogin's right fist driven down into the ground, the knuckles in tint,
 * and the crater it blasts open: Big Bang Impact's drawing and Uvogin's
 * stage keep it.
 */
export const BIG_BANG_IMPACT: Stroke[] = [
  { d: 'M68 6 L70 64 M104 6 L102 66' },
  { d: 'M58 100 C56 88 58 74 64 66 C68 60 102 60 106 68 L110 98 L106 122' },
  { d: 'M70 104 V124 M82 104 V124 M94 104 V124', role: 'soft' },
  {
    d: 'M58 100 C70 94 90 94 100 98 C107 101 106 109 99 110 C88 112 72 109 59 106',
  },
  { d: 'M94 100 C97 100 99 102 99 105', role: 'soft' },
  {
    d: 'M58 106 V124 C58 132 70 132 70 124 C70 132 82 132 82 124 C82 132 94 132 94 124 C94 132 106 132 106 122',
    role: 'accent',
  },
  {
    d: 'M54 132 C30 132 10 138 8 146 C8 156 40 164 80 164 C120 164 152 156 152 146 C150 138 130 132 112 132',
  },
  { d: 'M26 146 C40 160 120 160 134 146', role: 'soft' },
  {
    d: 'M20 142 l8 -6 M34 140 l8 -6 M118 140 l8 -6 M132 142 l8 -6',
    role: 'ambient',
  },
  {
    d: 'M12 128 l-8 -6 M28 120 l-6 -8 M132 120 l6 -8 M148 128 l8 -6 M10 168 l-6 6 M150 168 l6 6',
    role: 'ambient',
  },
]

/**
 * Shalnark's demon-shaped phone standing in 3/4: a horned head on top with
 * a bat's wings spread in tint, the blank screen and keys on the front and
 * the side hatched. Black Voice's drawing and his own stage keep it.
 */
export const SHALNARK_PHONE: Stroke[] = [
  {
    d: 'M56 78 H86 Q90 78 90 82 V150 Q90 154 86 154 H56 Q52 154 52 150 V82 Q52 78 56 78 Z',
  },
  { d: 'M56 78 L62 72 H92 Q96 72 96 76 V146 L90 152 M90 82 L95 75' },
  { d: 'M58 86 H84 V114 H58 Z', role: 'soft' },
  {
    d: 'M60 124 h6 M69 124 h6 M78 124 h6 M60 133 h6 M69 133 h6 M78 133 h6 M60 142 h6 M69 142 h6 M78 142 h6',
    role: 'soft',
  },
  { d: 'M70 72 C68 62 86 62 84 72 M71 66 L66 56 L74 63 M83 66 L88 56 L80 63' },
  {
    d: 'M70 68 C62 58 48 54 36 58 C40 62 40 66 37 70 C43 69 47 71 49 75 C54 71 60 71 64 73 M84 68 C92 58 106 54 118 58 C114 62 114 66 117 70 C111 69 107 71 105 75 C100 71 94 71 90 73',
    role: 'accent',
  },
  {
    d: 'M91 96 l5 -4 M91 112 l5 -4 M91 128 l5 -4 M91 144 l4 -3',
    role: 'ambient',
  },
]

/** The open arcs of Black Voice's control, going out from the phone. */
export const BLACK_VOICE_ARCS: Stroke = {
  d: 'M104 98 Q112 106 104 114 M112 90 Q124 106 112 122 M120 82 Q136 106 120 130',
  role: 'ambient',
}

/** The base of Shalnark's laptop in 3/4, its rows of keys. */
const LAPTOP_BASE: Stroke[] = [
  { d: 'M24 140 L96 156 L140 128 L70 114 Z' },
  { d: 'M24 140 V146 L96 162 L140 134 V128', role: 'soft' },
  {
    d: 'M45.5 135.7 L52.7 137.2 M55.8 137.9 L63 139.5 M66.1 140.1 L73.3 141.7 M76.4 142.4 L83.6 143.9 M86.7 144.6 L93.9 146.2 M54.7 130.4 L61.8 131.9 M64.9 132.6 L72.1 134.1 M75.1 134.8 L82.3 136.3 M85.4 136.9 L92.5 138.5 M95.6 139.1 L102.8 140.6 M63.8 125.2 L70.9 126.6 M74 127.3 L81.1 128.8 M84.2 129.4 L91.3 130.9 M94.3 131.5 L101.5 133 M104.5 133.6 L111.6 135.1',
    role: 'soft',
  },
]

/** The same laptop open, the lid's frame in tint and the screen blank. */
const LAPTOP: Stroke[] = [
  ...LAPTOP_BASE,
  { d: 'M70 114 L80 44 L148 60 L140 128', role: 'accent' },
  { d: 'M77 108 L85 52 L141 65 L134 121 Z', role: 'soft' },
  { d: 'M92 106 l10 -40 M104 110 l8 -32', role: 'ambient' },
]

/**
 * Shalnark's laptop made smaller, its frame softened, and his phone with
 * Black Voice's arcs standing beside it on the same floor: his two stages
 * keep them.
 */
const SHALNARK_GEAR: Stroke[] = [
  ...moved(softened(LAPTOP), 'translate(4 80) scale(0.55)'),
  ...moved(
    [...SHALNARK_PHONE, BLACK_VOICE_ARCS],
    'translate(62 58) scale(0.7)',
  ),
]

/**
 * Melody's brimmed hat in 3/4, the band in tint, the crown's far side
 * hatched.
 */
const MELODY_HAT: Stroke[] = [
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
]

/**
 * Feitan's bandana in 3/4, worn over the lower face and tied behind, its
 * underside hatched and the skull crest on it in tint, as a symbol.
 */
const FEITAN_BANDANA: Stroke[] = [
  {
    d: 'M118 80 C96 74 64 70 46 76 C40 80 34 88 36 94 C38 104 40 116 44 126 C58 134 74 136 88 130 C100 120 110 104 118 98 Z',
  },
  {
    d: 'M42 110 C56 112 74 114 92 112 M46 122 C60 126 76 126 90 122',
    role: 'soft',
  },
  {
    d: `M66 92 C66 82 82 82 82 92 C82 96 80 98 78 99 V103 H70 V99 C68 98 66 96 66 92 Z ${circle(71, 92, 1.8)} ${circle(77, 92, 1.8)}`,
    role: 'accent',
  },
  {
    d: 'M118 82 C126 78 132 84 128 90 C124 96 118 94 118 88 M126 92 L146 122 L138 126 L122 96 M128 86 L152 100 L148 108 L124 92',
    role: 'soft',
  },
  {
    d: 'M56 130 l5 -6 M68 132 l5 -6 M80 130 l5 -6 M92 124 l5 -6',
    role: 'ambient',
  },
]

/**
 * Phinks's pharaoh headdress in 3/4: the cloth falling to its lappets over
 * the broad collar of his necklace, the far side hatched, the golden cobra
 * raised at its brow in tint.
 */
const PHINKS_NEMES: Stroke[] = [
  {
    d: 'M50 52 C52 30 102 28 108 48 L116 104 L106 114 L100 108 L96 68 H64 L60 110 L52 120 L38 108 Z',
  },
  { d: 'M54 62 C66 56 92 56 104 60', role: 'soft' },
  { d: 'M52 118 L54 136 H64 L62 110 M100 108 L100 132 H107 L107 114' },
  {
    d: 'M80 56 C74 50 73 38 80 32 C87 38 86 50 80 56 Z M75 60 C70 64 76 70 82 66 C88 62 86 58 82 57',
    role: 'accent',
  },
  {
    d: 'M34 122 C50 146 106 146 122 122 M44 126 C58 140 98 140 112 126',
    role: 'soft',
  },
  { d: 'M100 80 l8 -5 M101 94 l8 -5 M103 106 l6 -4', role: 'ambient' },
]

export const YORKNEW_CITY_DRAWINGS = {
  // Melody's brimmed hat in 3/4, the band in tint and the crown's far side
  // hatched: she wears a hat in public, and is one of the six applicants
  // in the mansion's test, episode 40 / chapter 68. No flute, which she
  // plays later.
  'melody': [...MELODY_HAT, shadow(80, 182, 50)],
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
    ...BASHO_BRUSH,
    shadow(82, 176, 58),
  ],
  // Baise's lipstick standing open, its cap lying on its side beside it,
  // and her kiss drawn as a symbol in tint, a pair of lips with no face:
  // the kiss makes Squala her servant in the mansion's test, episode 40 /
  // chapter 68 (owner, 2026-11-16). The wiki gives her pink lipstick.
  'baise': [
    ...softened(LIPSTICK),
    ...LIPSTICK_CAP,
    ...moved(KISS, 'translate(2 -36)'),
    shadow(86, 174, 52),
  ],
  // One of Squala's dogs sitting side on, in silhouette, its drop ear
  // in tint: he places dogs round the mansion that all follow his orders,
  // episode 40 / chapter 68 (episode 39 shows him among them). No face, no
  // collar and no leash, which neither medium shows.
  'squala': [...DOG, shadow(86, 160, 54)],
  // One of Tocino's figures in black: an empty robe standing with its hood
  // up, the hood's opening dark and no face in it, its far half hatched, a
  // sword raised in its sleeve with the guard in tint. His hooded figures
  // ambush the applicants with guns and swords, episode 39 / chapter 67,
  // and he owns them in episode 40 / chapter 68.
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
  'neon-nostrade': [...NEON_SHEETS, ...NEON_PEN, shadow(84, 184, 58)],
  // Ivlenkov's black suit jacket in 3/4, buttoned over a round front, the
  // far sleeve turning away and the far side hatched, the tie in tint: the
  // plump bodyguard Dalzollene sends to bid at the Underground Auction,
  // episode 42 / chapter 72. No number and no face.
  'ivlenkov': [...IVLENKOV_JACKET, shadow(78, 186, 50)],
  // Linssen's Chinese jacket in 3/4, its standing collar seen from a
  // little above, the opening running across to the far side and down,
  // the frog fastenings along it in tint and the far side hatched: the
  // bodyguard Dalzollene posts at the back entrance, episode 42 / chapter
  // 72. No face.
  'linssen': [
    { d: ellipse(78, 34, 12, 4) },
    { d: 'M66 34 V42 C70 47 86 47 90 42 V34' },
    {
      d: 'M66 42 L40 52 L26 126 M40 130 L48 84 L48 172 H104 L104 84 L108 122 M118 120 L110 52 L90 42',
    },
    { d: 'M26 126 A7 3 12 1 0 40 130 A7 3 12 1 0 26 126', role: 'soft' },
    {
      d: 'M118 120 A5 2.5 -12 1 1 108 122 A5 2.5 -12 1 1 118 120',
      role: 'soft',
    },
    { d: 'M67 46 C72 56 82 58 92 54 L92 172', role: 'soft' },
    { d: 'M86 66 H98 M86 84 H98 M86 102 H98 M86 120 H98', role: 'accent' },
    { d: 'M36 76 l6 10 M60 140 Q62 156 60 170', role: 'soft' },
    {
      d: 'M95 140 l6 -5 M95 156 l6 -5 M95 170 l6 -5 M110 76 l4 -3 M111 92 l4 -3 M112 108 l4 -3',
      role: 'ambient',
    },
    shadow(76, 186, 46),
  ],
  // Uvogin's bearskin vest in 3/4, open down the middle, shaggy fur at the
  // collar and armholes, the fur edging in tint and the far panel hatched:
  // the Troupe member named on the phone as they flee the auction, episode
  // 43 / chapter 74. The wiki gives bearskin clothing and seldom a shirt.
  'uvogin': [...UVOGIN_VEST, shadow(76, 182, 56)],
  // Feitan's dark bandana in 3/4, worn over the lower face and tied
  // behind, its underside hatched, its skull crest in tint as a symbol: he
  // wears it over his mouth, named after the attack on the auction, episode
  // 43 / chapter 74. No face.
  'feitan': [...FEITAN_BANDANA, shadow(80, 160, 54)],
  // Franklin's hand from the side, pointing ahead with its fingers spread,
  // the tips separated at the last joint and hanging below on small chains
  // in tint, bullets of aura streaking on from the cut ends, and one of his
  // golden earrings beside it: the Double Machine Gun he massacres the
  // auction hall with, episode 43 / chapter 73, the night before he is
  // named. No face.
  'franklin': [
    ...moved(MACHINE_GUN_HAND, 'translate(70 112) scale(1.05)'),
    { d: `${circle(32, 50, 11)} ${circle(32, 50, 7)}`, role: 'soft' },
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
  // Phinks's pharaoh headdress (nemes) in 3/4, its cloth falling to two
  // lappets over the broad collar of his necklace, the far side hatched,
  // the golden cobra raised at its brow in tint: the look he is introduced
  // in, as the Troupe frees Uvogin, episode 45 / chapter 78 (owner, #901).
  // No face, no stripes, which the wiki does not give, and no tracksuit,
  // which is later.
  'phinks': [...PHINKS_NEMES, shadow(80, 164, 44)],
  // A laptop open in 3/4, the lid's frame in tint, the screen blank but for
  // the glare and the rows of keys on the base: Shalnark uses the computer
  // to look up the Nostrade family on the Hunter website, episode 46 /
  // chapter 79. The computer's shape is not checked against a frame.
  'shalnark': [...LAPTOP, shadow(84, 178, 60)],
  // A mobile phone standing in 3/4 and seen a little from above, its top
  // and its side turned away, the side hatched, its blank screen in tint
  // with the glare across it, the keys below: Light speaks to his
  // daughter's bodyguards by phone, episode 46 / chapter 79. The wiki gives
  // the phone no shape, so it has no antenna or hinge, and it is not
  // checked against a frame.
  'light-nostrade': [
    {
      d: 'M54 50 H98 Q104 50 104 56 V160 Q104 166 98 166 H54 Q48 166 48 160 V56 Q48 50 54 50 Z',
    },
    { d: 'M50 52 L64 40 H110 Q116 40 116 46 V152 L102 164 M102 52 L114 42' },
    { d: 'M56 62 H96 V104 H56 Z', role: 'accent' },
    { d: 'M62 98 L90 68 M72 100 L94 77', role: 'ambient' },
    {
      d: dots([
        [64, 120],
        [76, 120],
        [88, 120],
        [64, 132],
        [76, 132],
        [88, 132],
        [64, 144],
        [76, 144],
        [88, 144],
      ]),
    },
    {
      d: 'M107 68 l6 -5 M107 88 l6 -5 M107 108 l6 -5 M107 128 l6 -5 M107 148 l6 -5',
      role: 'ambient',
    },
    shadow(84, 180, 44),
  ],
  // A large cloth knotted into a bundle in 3/4, the two ends of its knot
  // lying over in tint, its folds gathered into the knot and the far side
  // hatched: Owl's Fun Fun Cloth wraps the Troupe's car, and he holds the
  // tiny cloth with Nobunaga shrunk inside, episode 45 / chapter 77.
  'owl': [...OWL_BUNDLE, shadow(80, 162, 58)],
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
  // Rabid Dog's long-sleeved shirt in 3/4, its high neck a tube seen from
  // a little above, in tint, the far sleeve turning away and the far side
  // hatched: one of the Shadow Beasts sent after the Troupe, episode 43 /
  // chapter 75. No face, so not his filed teeth.
  'rabid-dog': [...RABID_DOG_SHIRT, shadow(78, 186, 48)],
  // A round mass in 3/4 bristling with needles, the near row long and in
  // tint, the far row shorter behind it, the far side hatched: Porcupine's
  // body hair turns into needles that catch Uvogin's fist, episode 44 /
  // chapter 76. No face and no fist.
  'porcupine': [
    { d: 'M26 150 C26 112 50 90 80 90 C110 90 134 112 134 150' },
    { d: 'M26 150 C40 160 120 160 134 150', role: 'soft' },
    {
      d: 'M32 132 L12 124 M38 116 L18 100 M48 104 L34 80 M62 95 L54 66 M80 90 V58 M98 95 L106 66 M112 104 L126 80 M122 116 L142 100 M128 132 L148 124',
      role: 'accent',
    },
    {
      d: 'M42 110 L32 92 M56 99 L48 78 M71 93 L67 70 M89 93 L93 70 M104 99 L112 78 M118 110 L128 92 M48 138 L42 126 M64 132 L60 118 M80 130 V116 M96 132 L100 118 M112 138 L118 126',
      role: 'soft',
    },
    {
      d: 'M104 120 l7 -5 M110 132 l7 -5 M116 144 l7 -5 M98 108 l6 -4',
      role: 'ambient',
    },
    shadow(80, 166, 60),
  ],
  // One spotted leech on the ground, arched as it moves, its broad sucker
  // at one end and the narrow head at the other, its rings soft, its spots
  // in tint and its underside hatched: Leech fills Uvogin with his Spotted
  // Leeches, episode 44 / chapter 76. No face, so not Leech himself.
  'leech': [
    {
      d: 'M18 146 C16 102 46 72 74 72 C102 72 116 100 124 124 C128 136 136 144 148 146 M40 146 C40 116 56 94 74 94 C92 94 104 112 110 128 C114 138 122 146 134 148',
    },
    {
      d: `${ellipse(29, 146, 11, 4)} ${ellipse(141, 147, 7, 2.4)}`,
      role: 'soft',
    },
    {
      d: 'M20 122 L41 128 M32 94 L50 108 M54 77 L62 96 M80 72 L79 94 M102 84 L94 102 M116 104 L106 118 M124 126 L113 133',
      role: 'soft',
    },
    {
      d: `${circle(30, 106, 2.4)} ${circle(44, 86, 2.4)} ${circle(66, 75, 2.4)} ${circle(92, 77, 2.2)} ${circle(110, 94, 2)} ${circle(122, 116, 1.8)} ${circle(134, 138, 1.6)}`,
      role: 'accent',
    },
    {
      d: 'M42 128 l6 -3 M48 108 l6 -2 M62 92 l6 -1 M90 92 l5 2 M100 106 l5 3 M108 124 l5 3',
      role: 'ambient',
    },
    shadow(82, 154, 64),
  ],
  // A round-bellied vase with a narrow neck seen a little from above, its
  // mouth open, its foot ring, the band round its shoulder in tint and the
  // far side hatched: the strange vase Zepile outbids Gon and Killua for,
  // episode 48 / chapter 86. No aura.
  'zepile': [
    { d: ellipse(80, 40, 15, 4) },
    {
      d: 'M65 40 C66 58 60 66 48 80 C30 100 30 140 54 158 H106 C130 140 130 100 112 80 C100 66 94 58 95 40',
    },
    {
      d: 'M48 82 C68 92 92 92 112 82 M44 92 C66 102 94 102 116 92',
      role: 'accent',
    },
    {
      d: 'M54 158 C70 164 90 164 106 158 M58 158 V164 C72 168 88 168 102 164 V158',
      role: 'soft',
    },
    { d: 'M58 110 C56 124 60 136 66 144', role: 'soft' },
    { d: 'M104 110 l8 -6 M108 126 l8 -6 M104 142 l8 -6', role: 'ambient' },
    shadow(80, 176, 44),
  ],
  // Pakunoda's long dark suit jacket in 3/4, cut low, its lapels in tint,
  // the far sleeve turning away and the far side hatched: she corners Gon
  // and Killua with Phinks, episode 49 / chapter 90. No gun and no aura,
  // which come later.
  'pakunoda': [...PAKUNODA_JACKET, shadow(78, 186, 48)],
  // Zenji's small round sunglasses in 3/4, standing open on a table, the
  // far lens foreshortened, the lenses in tint and hatched dark, both arms
  // reaching back: he wears them at the assassins' meeting, episode 51 /
  // chapter 95. Round and dark, unlike Shizuku's folded black frames. No
  // face behind them.
  'zenji': [
    {
      d: `${ellipse(56, 104, 18, 17)} ${ellipse(108, 98, 11, 15)}`,
      role: 'accent',
    },
    { d: 'M74 102 C82 94 90 94 97 98' },
    { d: 'M38 100 L84 74 Q90 71 92 77 M119 96 L146 80 Q151 77 152 83' },
    {
      d: 'M44 114 l20 -20 M50 120 l16 -16 M46 102 l10 -10 M101 108 l12 -14 M104 113 l9 -10',
      role: 'ambient',
    },
    shadow(82, 132, 52),
  ],
  // Two identical porcelain vases standing side by side, their mouths
  // open and seen from above, the round of each foot and the far side of
  // each hatched, the second, the copy, in tint: Kortopi makes exact
  // copies of the auction items, a porcelain vase among them, episode 53 /
  // chapter 100. The vase is Gallery Fake's own.
  'kortopi': [
    ...KORTOPI_VASE,
    ...moved(
      KORTOPI_VASE.map((stroke) => ({ ...stroke, role: 'accent' as const })),
      'translate(64 0)',
    ),
    VASE_DEPTH,
    { ...VASE_DEPTH, transform: 'translate(64 0)' },
    {
      d: 'M30 100 C42 106 54 106 66 100 M94 100 C106 106 118 106 130 100',
      role: 'soft',
    },
    {
      d: 'M56 86 l6 -4 M60 104 l6 -4 M60 120 l7 -5 M59 136 l6 -4 M120 86 l6 -4 M124 104 l6 -4 M124 120 l7 -5 M123 136 l6 -4',
      role: 'ambient',
    },
    shadow(80, 160, 66),
  ],
  // A roll of bandage lying on its side in 3/4, its turns drawn round the
  // core on the near face, the loose end in tint unwinding down onto the
  // floor, the underside hatched, and one of his boxing gloves beside it:
  // Bonolenov, covered in bandages, named when the Troupe splits into
  // groups, episode 55 / chapter 108.
  'bonolenov': [
    { d: ellipse(56, 104, 22, 30) },
    { d: ellipse(56, 104, 15.5, 21), role: 'soft' },
    { d: ellipse(56, 104, 7, 10) },
    {
      d: 'M56 74 L96 66 C106 66 116 80 116 96 C116 112 106 126 96 126 L56 134',
    },
    {
      d: 'M98 125 C106 136 106 148 98 156 C94 162 108 166 142 160 L144 168 C104 176 82 168 90 152 C96 144 96 134 92 127',
      role: 'accent',
    },
    {
      d: 'M68 129 l6 -5 M80 127 l6 -5 M92 124 l6 -5 M106 116 l6 -5',
      role: 'ambient',
    },
    ...BONOLENOV_GLOVE,
    shadow(82, 180, 66),
  ],
  // Eliza's dark kimono in 3/4, its near sleeve hanging long and the far
  // one swinging back, the collar crossed wearer's left over right, the
  // obi round the waist in tint, the far side hatched: she always wears
  // one, and is named in Squala's memories, episode 56 / chapter 112. No
  // face, and no bow on the obi, which the wiki does not give.
  'eliza': [
    {
      d: 'M64 34 L40 44 L14 52 V122 Q14 130 22 130 H42 L46 174 H108 L110 128 L122 126 Q132 122 133 112 L134 56 L114 44 L94 34',
    },
    { d: 'M94 34 L64 110 M64 34 L77 70', role: 'soft' },
    { d: 'M64 34 Q79 40 94 34', role: 'soft' },
    {
      d: 'M44 106 C64 111 92 110 110 104 V126 C92 132 64 133 44 128 Z',
      role: 'accent',
    },
    { d: 'M42 130 V80 M110 104 V82 M20 62 V118', role: 'soft' },
    {
      d: 'M96 140 l8 -6 M98 156 l8 -6 M98 170 l8 -6 M100 60 l8 -6 M102 80 l8 -6 M118 70 l8 -6 M120 88 l8 -6 M120 106 l8 -6',
      role: 'ambient',
    },
    shadow(78, 186, 50),
  ],
  // Chrollo's long coat seen from the back in 3/4, its white fur collar
  // and cuffs soft, the far side hatched, and on its back the St. Peter's
  // Cross with two horns in tint, as a symbol: the leader of the Troupe at
  // its gathering, episode 54 / chapter 71. The wiki gives the cross on
  // the back; which scene first shows the back is not frame-checked.
  'chrollo': [
    {
      d: 'M58 44 L36 54 L26 134 M42 138 L48 86 L46 178 H110 L110 86 L114 132 M126 128 L118 54 L100 44',
    },
    {
      d: 'M58 44 C58 36 70 33 79 34 C88 33 100 36 100 44 C92 50 66 50 58 44 Z M60 47 q3 3 6 1 q3 3 6 1 q3 3 6 1 q3 3 6 1 q3 3 6 1 q3 2 6 0',
      role: 'soft',
    },
    {
      d: 'M26 134 C24 142 40 145 42 138 M126 128 C126 136 114 137 114 132',
      role: 'soft',
    },
    {
      d: 'M76 64 H80 V92 H90 V96 H80 V110 H76 V96 H66 V92 H76 Z M76 64 C68 64 62 58 62 50 C66 56 72 58 77 59 M80 64 C88 64 94 58 94 50 C90 56 84 58 79 59',
      role: 'accent',
    },
    { d: 'M78 120 V178 M36 78 l5 10 M58 130 Q60 154 56 176', role: 'soft' },
    {
      d: 'M98 74 l8 -6 M100 98 l8 -6 M100 122 l8 -6 M100 146 l8 -6 M100 168 l8 -6',
      role: 'ambient',
    },
    shadow(78, 190, 50),
  ],
  // The auction house's catalog, a thick hardback lying closed in 3/4: its
  // rounded spine, the page block between the covers, the light trim round
  // its dark cover in tint and the far corner hatched, and beside it the
  // admission card that comes with it: Gon, Killua and Leorio buy it there
  // as their ticket in, episode 48 / chapter 85. No words on the cover.
  'southernpiece-auction-house': [
    { d: 'M22 98 L98 80 L142 104 L66 124 Z' },
    {
      d: 'M22 98 C12 106 12 124 22 132 L66 158 C58 150 58 132 66 124 M66 158 L142 138 V104',
    },
    {
      d: 'M70 130 L138 112 M70 138 L138 120 M70 146 L138 128 M66 128 L142 108 M66 154 L142 134',
      role: 'soft',
    },
    { d: 'M34 98 L98 84 L130 104 L66 119 Z', role: 'accent' },
    { d: 'M18 110 L62 136 M18 122 L62 148', role: 'soft' },
    {
      d: 'M102 88 l7 -3 M112 94 l7 -3 M122 100 l6 -3 M106 96 l6 -2',
      role: 'ambient',
    },
    { d: 'M108 162 L134 154 L148 163 L122 172 Z', role: 'soft' },
    shadow(80, 178, 64),
  ],
  // A tall hotel seen from a corner, its rows of windows, the side hatched
  // and the doors of the lobby in tint: the Troupe waits in its lobby,
  // episode 57 / chapter 112. No canopy or sign.
  'hotel-beitacle': [
    { d: 'M34 150 V34 H112 V150' },
    { d: 'M112 34 L128 26 V142 L112 150 M34 34 L50 26 H128', role: 'soft' },
    {
      d: dots([
        [46, 48],
        [60, 48],
        [74, 48],
        [88, 48],
        [100, 48],
        [46, 64],
        [60, 64],
        [74, 64],
        [88, 64],
        [100, 64],
        [46, 80],
        [60, 80],
        [74, 80],
        [88, 80],
        [100, 80],
        [46, 96],
        [60, 96],
        [74, 96],
        [88, 96],
        [100, 96],
        [46, 112],
        [60, 112],
        [74, 112],
        [88, 112],
        [100, 112],
      ]),
      role: 'soft',
    },
    {
      d: 'M116 48 l8 -4 M116 70 l8 -4 M116 92 l8 -4 M116 114 l8 -4 M116 136 l8 -4',
      role: 'ambient',
    },
    { d: 'M56 150 V126 H90 V150 M67 126 V150 M79 126 V150', role: 'accent' },
    { d: 'M4 150 H156', role: 'ambient' },
    shadow(80, 158, 62),
  ],
  // Machi's fingerless glove from the back, the finger ends open, with the
  // pincushion on it in tint and three needles stuck in it, and one more
  // drawn out above, Nen Stitches' own needle, its thread running off in a
  // loose curve: the Troupe member named on the way to the gathering,
  // episode 41 / chapter 71, whose threads are filed from the same pair.
  // The wiki gives the pincushion on her gloves.
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
    ...moved([{ ...NEN_NEEDLE, role: 'soft' }], 'translate(56 4) scale(0.62)'),
    {
      d: 'M122 40 C112 50 116 62 128 68 C142 76 150 92 140 108 C134 118 138 128 148 134',
      role: 'soft',
    },
    { d: 'M96 136 l8 -6 M96 150 l8 -6 M96 166 l8 -6', role: 'ambient' },
    shadow(80, 186, 40),
  ],
  // Shizuku's black-framed glasses folded and standing on a table in 3/4,
  // the far lens foreshortened, the frames in tint, the folded arms seen
  // through the clear lenses and a glint on each: she wears them when she
  // takes on Gon at arm wrestling, episode 42 / chapter 72. No vacuum
  // cleaner, which she conjures later.
  'shizuku': [...SHIZUKU_GLASSES, shadow(78, 132, 50)],
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
 * The Yorknew City drawings that change with the story: each Hatsu as it is
 * first shown, and the deaths, each pinned with its status entry. Shalnark's
 * chapter 357 stage lives here with his first one.
 */
export const yorknewCityRedrawn: Redrawings = {
  'melody': [
    // The same hat made smaller and set down, her flute laid across its
    // brim in tint, keys on it, and open lines for the music: she plays it
    // to calm Kurapika and the other bodyguards before Uvogin is taken,
    // episode 44 / chapter 77. Her flute is the medium of her power.
    {
      episode: 44,
      chapter: 77,
      value: [
        ...moved(
          softened(MELODY_HAT),
          'translate(80 150) scale(0.72) translate(-80 -130)',
        ),
        {
          d: 'M18 160 L140 134 C143.5 133.3 145.5 139.3 142 140 L20 166 C16.5 166.7 14.5 160.7 18 160 Z',
          role: 'accent',
        },
        {
          d: dots([
            [40, 158],
            [84, 149],
            [96, 146.4],
            [108, 143.9],
            [120, 141.3],
          ]),
          role: 'soft',
        },
        {
          d: 'M96 80 q8 -8 16 0 M106 64 q10 -10 20 0 M116 48 q12 -12 24 0',
          role: 'ambient',
        },
        shadow(80, 182, 56),
      ],
    },
  ],
  'shalnark': [
    // The same laptop made smaller, its frame softened, and standing beside
    // it his demon-shaped phone with its wings in tint and the open arcs of
    // Black Voice: he controls a Mafia man and the auctioneer with it,
    // episode 53 / chapter 98. The antenna stays out: its shape is cited
    // only from chapter 227.
    {
      episode: 53,
      chapter: 98,
      value: [...SHALNARK_GEAR, shadow(86, 178, 66)],
    },
    // The same laptop and phone, and above them one of his antennas, tip
    // down, a demon's head with spread wings at its top, soft, with open
    // lines of aura bursting round it: he stabs it into his own leg and
    // turns Autopilot on, his second Hatsu, against Pell, episode 96 /
    // chapter 227. No body is drawn.
    {
      episode: 96,
      chapter: 227,
      value: [
        ...SHALNARK_GEAR,
        ...moved(
          [
            { d: 'M0 0 L-2 -40 H2 Z' },
            {
              d: 'M-5 -40 C-6 -48 6 -48 5 -40 M-4 -46 L-7 -52 L-2 -48 M4 -46 L7 -52 L2 -48 M-4 -44 C-10 -50 -18 -50 -22 -46 C-18 -44 -16 -42 -16 -40 C-12 -42 -8 -42 -5 -41 M4 -44 C10 -50 18 -50 22 -46 C18 -44 16 -42 16 -40 C12 -42 8 -42 5 -41',
              role: 'soft',
            },
          ],
          'translate(44 96) scale(1.3)',
        ),
        {
          d: 'M18 34 l-8 -6 M70 34 l8 -6 M14 62 h-10 M74 62 h10 M24 86 l-8 6 M64 86 l8 6 M44 14 v-10',
          role: 'ambient',
        },
        shadow(86, 178, 66),
      ],
    },
    // The same laptop, shut, on the ground under an empty swing: Hisoka
    // kills him and leaves him tied to a swing, chapter 357. No body is
    // drawn, and no phone: he had lent it to Chrollo (chapter 351).
    {
      episode: 148,
      chapter: 357,
      source: 'chapter',
      value: [
        ...moved(
          [
            ...LAPTOP_BASE,
            { d: 'M24 136 L96 152 L140 124 L70 110 Z', role: 'accent' },
            { d: 'M24 136 V140 M96 152 V156 M140 124 V128', role: 'soft' },
          ],
          'translate(82 148) scale(0.8) translate(-82 -136)',
        ),
        { d: 'M20 18 H140 M28 18 L14 172 M132 18 L146 172' },
        { d: 'M50 18 V92 M110 18 V92', role: 'soft' },
        { d: 'M44 92 H116 V100 H44 Z' },
        { d: 'M4 172 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'phinks': [
    // The same headdress made smaller, and beside it a fist with the open
    // lines of his arm's rotations wound round it: Ripper Cyclotron, his
    // Hatsu, kills a Chimera Ant in Meteor City, episode 96 / chapter 226.
    // The accent stays on the cobra.
    {
      episode: 96,
      chapter: 226,
      value: [
        ...moved(
          PHINKS_NEMES,
          'translate(46 70) scale(0.55) translate(-80 -88)',
        ),
        {
          d: 'M94 112 C94 104 106 104 106 112 C106 104 118 104 118 112 C118 104 130 104 130 112 C130 104 142 104 142 112 V134 C142 144 132 148 118 148 C104 148 94 144 94 134 Z',
        },
        {
          d: 'M106 112 V122 M118 112 V122 M130 112 V122 M94 128 C104 124 114 126 120 132',
          role: 'soft',
        },
        { d: 'M104 147 L100 176 M132 147 L136 176' },
        {
          d: 'M84 104 C78 80 122 66 148 86 M154 104 C160 126 154 148 144 158 M86 152 C78 142 76 132 78 120',
          role: 'ambient',
        },
      ],
    },
  ],
  'feitan': [
    // The same bandana made smaller, and above it the sun of Rising Sun in
    // open lines, no glow and no fill, with the three inverted crosses of
    // the Pain Packer suit beside it as a symbol: he burns Zazan to death,
    // episode 97 / chapter 229. Rising Sun is a form of Pain Packer, his
    // one Hatsu, so one stage.
    {
      episode: 97,
      chapter: 229,
      value: [
        ...moved(
          FEITAN_BANDANA,
          'translate(80 130) scale(0.62) translate(-94 -103)',
        ),
        {
          d: `${circle(76, 50, 16)} M76 24 V16 M76 76 V84 M50 50 H42 M102 50 H110 M58 32 l-6 -6 M94 32 l6 -6 M58 68 l-6 6 M94 68 l6 6`,
          role: 'ambient',
        },
        {
          d: 'M118 14 V48 M112 40 H124 M134 14 V48 M128 40 H140 M150 14 V48 M144 40 H156',
          role: 'soft',
        },
        shadow(80, 166, 36),
      ],
    },
  ],
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
  'porcupine': [
    // The same mass sunk low on the ground, its needles fallen and lying
    // scattered round it, the fallen ones in tint: episode 45 shows the
    // Shadow Beasts killed. Chapter 76 kills him in the scene his record
    // opens with, so a chapter reader meets him alive in the drawing until
    // chapter 78 reports them all dead: the first pair both media hold.
    {
      episode: 45,
      chapter: 78,
      value: [
        { d: 'M32 160 C36 146 56 140 80 140 C104 140 124 146 128 160' },
        { d: 'M32 160 C46 168 114 168 128 160', role: 'soft' },
        {
          d: 'M10 170 l16 2 M22 182 l14 -4 M48 180 l12 5 M100 182 l14 -3 M120 176 l16 2 M134 166 l16 5 M64 186 l14 1',
          role: 'accent',
        },
        {
          d: 'M48 150 L42 156 M62 145 L58 152 M80 143 V150 M98 145 L102 152 M112 150 L118 156',
          role: 'soft',
        },
        { d: 'M106 152 l7 -5 M114 158 l7 -5', role: 'ambient' },
        { d: 'M4 190 H156', role: 'ambient', dashed: true },
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
  'shizuku': [
    // The same glasses made smaller in front, the frames still in tint, and
    // behind them Blinky, the vacuum cleaner she conjures, with its hose and
    // nozzle, shared with the ability but with no face on it: she cleans up
    // the auction hall with it, episode 43 / chapter 73.
    {
      episode: 43,
      chapter: 73,
      value: [
        ...moved(
          [...BLINKY_CANISTER, ...BLINKY_HOSE],
          'translate(30 -4) scale(0.8)',
        ),
        ...moved(SHIZUKU_GLASSES, 'translate(-4 96) scale(0.6)'),
        shadow(84, 176, 64),
      ],
    },
  ],
  'owl': [
    // The same cloth lying open and flat on the ground, the knot undone and
    // its two ends loose in tint: chapter 78 reports the Shadow Beasts all
    // dead, so a chapter reader holds him presumed dead from here, as Worm
    // (owner, 2026-10-10). Episode 45 shows him held instead, so this stage
    // and the next are the manga's alone.
    {
      episode: 148,
      chapter: 78,
      source: 'chapter',
      value: [
        ...OWL_CLOTH_OPEN,
        { d: 'M4 184 H156', role: 'ambient', dashed: true },
      ],
    },
    // His first drawing again: chapter 84 shows him alive, held at the
    // Troupe's hideout. Being held is a state, so the bundle is unchanged.
    {
      episode: 148,
      chapter: 84,
      source: 'chapter',
      value: YORKNEW_CITY_DRAWINGS.owl,
    },
  ],
  'uvogin': [
    // The same vest made smaller beside Big Bang Impact, his one Hatsu: the
    // fist driven into the ground and the crater it blasts open, the accent
    // still on the vest's fur. He uses it on Worm, episode 44 / chapter 76.
    {
      episode: 44,
      chapter: 76,
      value: [
        ...moved(UVOGIN_VEST, 'translate(4 24) scale(0.5)'),
        ...moved(softened(BIG_BANG_IMPACT), 'translate(50 50) scale(0.68)'),
      ],
    },
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
  'pakunoda': [
    // The same jacket, with open rings of aura round its near cuff: her
    // first Hatsu reads a memory by touch, and Killua works it out from her
    // arm round his shoulders, episode 50 / chapter 92. The rings are the
    // house's way to draw a power with no object.
    {
      episode: 50,
      chapter: 92,
      value: [...PAKUNODA_JACKET, PAKUNODA_READING, shadow(78, 186, 48)],
    },
    // The same jacket and rings made smaller, their lapels softened, and
    // beside them her revolver with a conjured Memory Bomb in tint leaving
    // the muzzle, shared with the ability: she shoots Squala's memories
    // into Nobunaga, episode 56 / chapter 112.
    {
      episode: 56,
      chapter: 112,
      value: [
        ...moved(
          softened([...PAKUNODA_JACKET, PAKUNODA_READING]),
          'translate(2 44) scale(0.6)',
        ),
        ...moved(
          [...PAKUNODA_REVOLVER, ...MEMORY_BOMB_SHOT],
          'translate(52 38) scale(0.66)',
        ),
        shadow(84, 170, 64),
      ],
    },
    // The same jacket laid flat on the floor, empty, and her revolver lying
    // beside it: she fires her memories into the others and dies of the
    // chain in her heart, episode 58 / chapter 119. A death drops the aura.
    {
      episode: 58,
      chapter: 119,
      value: [
        ...moved(
          PAKUNODA_JACKET,
          'translate(66 153) rotate(-4) scale(1 0.4) translate(-80 -104)',
        ),
        ...moved(
          PAKUNODA_REVOLVER,
          'translate(100 128) rotate(-6) scale(0.42)',
        ),
        { d: 'M4 192 H156', role: 'ambient', dashed: true },
      ],
    },
  ],
  'cemetery-building': [
    // The same building shaken by a blast below its ground line: the
    // Zoldycks' blast shakes it (chapter 100) and the guests feel the
    // explosion in the basement (episode 53), episode 53 / chapter 100. The
    // ruined room is inside and not drawn. No rebuild follows, so this is
    // its last drawing in the arc.
    {
      episode: 53,
      chapter: 100,
      value: [
        ...CEMETERY_BUILDING,
        {
          d: 'M78 186 V158 M70 186 L54 160 M86 186 L102 160 M64 190 L36 168 M92 190 L120 168 M60 194 L22 182 M96 194 L134 182',
          role: 'ambient',
        },
        {
          d: 'M34 50 v14 M28 60 v14 M34 96 v14 M136 50 v14 M142 60 v14 M136 96 v14',
          role: 'soft',
        },
      ],
    },
  ],
  'dalzollene': [
    // The same screen gone dark, its glass hatched over: the Troupe kills him
    // when it frees Uvogin, episode 45 / chapter 78.
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
