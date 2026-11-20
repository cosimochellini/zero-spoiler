/**
 * The state behind a `SpoilerVeil`: the record a lift brought back. Kept
 * apart from the component so the curtain reads as markup.
 */
import { type Lift, useLift } from '~/components/useLift'
import type { Gated } from '~/lib/progress/spoiler'

/** A place on the page: a record, or the fog that stands in for one. */
export type VeilSlot<T> =
  | { covered: Gated & { handle: string }; open: false }
  | { open: true; record: T }

/**
 * What the curtain shows and how it asks for the rest: an open slot's record,
 * or the one a lift brought back.
 */
export function useVeilPeek<T extends Gated>(
  slot: VeilSlot<T>,
  peek: (handle: string) => Promise<T>,
  { twoStep }: { twoStep: boolean },
): Lift<T> & { shown: null | T } {
  const lift = useLift(
    slot.open ? undefined : slot.covered.handle,
    peek,
    twoStep,
  )

  return { ...lift, shown: slot.open ? slot.record : lift.record }
}
