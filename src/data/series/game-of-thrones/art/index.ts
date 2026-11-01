import type { Drawings, Redrawings } from '~/data/art/stroke'

/**
 * Game of Thrones' drawings, keyed by the id of the record each was drawn
 * for. None yet: the first season's are #854.
 */
export const DRAWINGS = {} satisfies Drawings

/**
 * The drawing a record names, by its own id. Any id while the series is
 * closed: its records are filed before their drawings (owner, #852), and
 * #854 narrows this back to `keyof typeof DRAWINGS`.
 */
// eslint-disable-next-line sonarjs/redundant-type-aliases -- #854 narrows it to the drawings' keys
export type ArtId = string

/** The records drawn again later in the story: none yet. */
export const REDRAWINGS: Redrawings = {}
