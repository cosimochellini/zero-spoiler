import type { RecordView } from './records'

/**
 * The shape of a body of power, which the page draws: a `council` of equal
 * seats (the Emperors, the Warlords), a `chain` of command ranked from the
 * top (the Marines), a `crew` under its captain.
 */
export type BodyKind = 'chain' | 'council' | 'crew'

/**
 * A seat the reader has met. Its holder is the latest one they have reached:
 * a character, `vacant` once a chapter empties it, or `unknown` while the
 * story has said the seat exists and not yet who sits in it. An unknown seat
 * carries its title alone, nothing that names who comes: no drawing, no tint.
 * A held seat carries its holder's drawing as it stands at the bookmark.
 */
export type SeatView = (
  | { holder: Pick<RecordView, 'id' | 'name' | 'visual'>; state: 'held' }
  | { state: 'unknown' | 'vacant' }
) & { title: string }

/** A body the reader has met, with the seats they have met, in order. */
export interface BodyView {
  /** Set once the reader reaches the chapter that ends it. */
  ended: boolean
  id: string
  kind: BodyKind
  name: string
  seats: SeatView[]
}

/** The power page: the bodies the reader has met, in the archive's order. */
export interface PowerPageView {
  bodies: BodyView[]
}
