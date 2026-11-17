/**
 * The state behind a `SpoilerVeil`: the record a lift brought back, and the
 * part a lead veil plays in the intro (#864). Kept apart from the component
 * so the curtain reads as markup.
 */
import { useEffect, useEffectEvent } from 'react'

import { type Lift, useLift } from '~/components/useLift'
import { onLeadPeek, registerSubject } from '~/lib/progress/intro'
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
  { lead, twoStep }: { lead: boolean | undefined; twoStep: boolean },
): Lift<T> & { shown: null | T } {
  const lift = useLift(
    slot.open ? undefined : slot.covered.handle,
    peek,
    twoStep,
  )

  useLead(lead, slot, lift.send)

  return { ...lift, shown: slot.open ? slot.record : lift.record }
}

/**
 * A lead veil's part in the intro: it names its covered record while it is
 * mounted, and lifts when the intro asks. An open slot has nothing to name.
 */
function useLead(
  lead: boolean | undefined,
  slot: VeilSlot<Gated>,
  uncover: () => void,
): void {
  const covered = lead === true && !slot.open ? slot.covered : null
  const onPeek = useEffectEvent(uncover)

  useEffect(() => {
    if (covered === null) {
      return
    }
    const forget = registerSubject(covered)
    const stop = onLeadPeek(() => {
      onPeek()
    })

    return () => {
      forget()
      stop()
    }
  }, [covered])
}
