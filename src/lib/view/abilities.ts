/**
 * What a page is allowed to know about Hunter x Hunter's Nen abilities
 * (#923): the shapes their tiles, their page and an ability's own page draw,
 * beside the record shapes they build on (`./records`).
 */

import type { AbilityNen } from '~/lib/view/facts'
import type {
  CoveredRecord,
  EaterView,
  RecordView,
  Searchable,
  Slot,
} from '~/lib/view/records'

/**
 * A Nen ability as its tile and its page draw it: the record, the Nen type
 * the story told by its threshold (none when it had not), the sentence, and
 * the users the reader has reached, earliest first. A covered user is
 * dropped, not slotted. Their names in both locales are among the aliases,
 * so a search for a user finds the ability.
 */
export interface AbilityView extends RecordView, Searchable {
  nen?: AbilityNen
  summary: string
  users: EaterView[]
}

/**
 * One plate of the abilities page: the open abilities of one Nen type, or
 * (`nen: null`) those whose type the story had not told.
 */
export interface AbilityBandView {
  nen: AbilityNen | null
  open: AbilityView[]
}

/**
 * The abilities page: a plate per Nen type an open ability has, the plate
 * of open abilities with no type last, and every covered ability in one fog
 * band after them all, so no band says a covered ability's type.
 */
export interface AbilitySheetView {
  bands: AbilityBandView[]
  covered: CoveredRecord[]
  /** How many abilities the archive files, open or not. */
  filed: number
}

/** An ability's own page: the record, and its users inside it. */
export interface AbilityDetail {
  slot: Slot<AbilityView>
}
