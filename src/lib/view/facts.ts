/**
 * The facts of a character's page as the server sends them: the payload
 * `CharacterFacts` draws, its links and its vocabularies.
 */

import type { SeatLink } from '~/lib/view/power'
import type { CharacterStatus } from '~/lib/view/records'

/**
 * A character's dossier as it stands at the reader's bookmark.
 *
 * Every fact is a timeline in the archive, and only the latest entry the
 * reader has reached is here. That is stricter than it used to be: the whole
 * timeline used to be in the browser and the component merely declined to
 * draw the future rows, so a bounty the reader had not reached was a
 * devtools panel away.
 *
 * The labels and the digit grouping stay in the component — they are the
 * reader's language, not the archive's.
 */
export interface CharacterFacts {
  affiliation?: string
  /**
   * The fruits the reader has been told this character ate, each with the
   * id of its own page. A row is only ever built from a timeline entry the
   * reader has reached, and a fruit opens no later than the entry that
   * names it, so a link here always leads somewhere the reader may go.
   */
  devilFruit?: FruitLink[]
  epithet?: string
  mode: 'facts'
  nen?: NenType
  origin?: string
  /** The seats the power page shows them in now (`seatsHeldBy`). */
  seats?: SeatLink[]
  /** Where the character stands at the last entry the reader has reached. */
  status?: CharacterStatus
  /** In Berry, ungrouped. */
  bounty?: number
}

/** A fruit named on another record's page, and the page it leads to. */
export interface FruitLink {
  id: string
  name: string
}

/**
 * A Hunter x Hunter character's Nen type, the category Water Divination
 * sorts an aura into, or `unknown` for a Nen user whose type the story has
 * not told yet. A closed vocabulary like the status, labelled in the series'
 * own dictionaries.
 */
export type NenType =
  | 'conjurer'
  | 'emitter'
  | 'enhancer'
  | 'manipulator'
  | 'specialist'
  | 'transmuter'
  | 'unknown'
