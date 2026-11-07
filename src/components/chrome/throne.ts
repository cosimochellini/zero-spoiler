/**
 * The throne a seat of power is drawn as on the power page (#1086): an arched
 * back with two arms over a two-step dais. A character's drawing sits in the
 * arch once the reader has reached who holds the seat; until then the throne
 * is empty. `PowerBoard` owns the `<svg>` and the ink; which line goes where
 * is here, as the crest's and the plate's are.
 *
 * Coordinates are in the throne's own 160x200, the same box as `ART_VIEWBOX`,
 * so the drawing inside keeps its proportions.
 */

/** Taller than wide, like the record drawings it holds. */
export const THRONE_VIEWBOX = '0 0 160 200'

/** The back and both arms: the line that takes the holder's colour. */
export const THRONE_BACK =
  'M24 178 V64 A56 50 0 0 1 136 64 V178 M24 132 H10 V178 M136 132 H150 V178'

/** The dais, two steps under the seat, in the ambient ink. */
export const THRONE_DAIS = 'M4 178 H156 M12 190 H148'

/** The 4:5 box the holder's drawing sits in, inside the arch. */
export const THRONE_ART_BOX = { height: 115, width: 92, x: 34, y: 46 }
