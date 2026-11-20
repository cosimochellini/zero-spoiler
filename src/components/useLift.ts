import { type KeyboardEvent, type RefObject, useRef, useState } from 'react'

import { say } from '~/components/announce'
import { useT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'

/** Resting, asked once, waiting on the server, or back with nothing. */
export type LiftState = 'asking' | 'confirming' | 'failed' | 'resting'

/** What a fog control says in each state. Resting, the fog says nothing. */
export const SAYS: Record<Exclude<LiftState, 'resting'>, TranslationKey> = {
  asking: 'veil.revealing',
  confirming: 'veil.ask',
  failed: 'veil.peekFailed',
}

/** The record once it is here, the lift's state, and the control's wiring. */
export interface Lift<T> {
  /** Spread on the button that lifts the fog. */
  button: {
    onBlur: () => void
    onClick: () => void
    onKeyDown: (event: KeyboardEvent) => void
    ref: RefObject<HTMLButtonElement | null>
  }
  record: null | T
  state: LiftState
}

/**
 * How fog is lifted by hand, the same on every surface (#1376). In two steps
 * the first press asks, in place, and the second sends for the record; Escape
 * or leaving the control cancels. In one step, for a curtain that already
 * says "Show anyway" in full on a page the reader chose, the first press
 * sends. A failed request leaves the question answered, so the next press
 * retries. Each change is said aloud through the page's one live region.
 */
export function useLift<T>(
  handle: string | undefined,
  peek: (handle: string) => Promise<T>,
  twoStep = true,
): Lift<T> {
  const t = useT()
  const [record, setRecord] = useState<null | T>(null)
  const [state, setState] = useState<LiftState>('resting')
  const ref = useRef<HTMLButtonElement>(null)

  const move = (next: LiftState): void => {
    setState(next)
    say(next === 'resting' ? '' : t(SAYS[next]))
  }

  // Not a transition: the state has to survive the await, so the words do
  // not flicker back while the record is still on its way.
  const ask = async (asked: string): Promise<void> => {
    move('asking')
    try {
      setRecord(await peek(asked))
      move('resting')
    } catch {
      move('failed')
    }
  }

  const send = (): void => {
    if (handle !== undefined && record === null && state !== 'asking') {
      void ask(handle)
    }
  }

  const cancel = (): void => {
    if (state === 'confirming') {
      move('resting')
    }
  }

  return {
    button: {
      onBlur: cancel,
      onClick: () => {
        if (twoStep && state === 'resting' && record === null) {
          move('confirming')
          return
        }
        send()
      },
      onKeyDown: (event) => {
        if (event.key === 'Escape') {
          cancel()
        }
      },
      ref,
    },
    record,
    state,
  }
}

/**
 * Focus was on the button the reader pressed. Once that button is spent it
 * follows the reader into what the fog was hiding, rather than falling back
 * to the top of the page: to the first link or button there, or to the
 * lifted content itself when it holds neither (an arc's name).
 */
export function followFocus(
  node: HTMLElement | null,
  buttonRef: RefObject<HTMLButtonElement | null>,
): void {
  if (node === null || document.activeElement !== buttonRef.current) {
    return
  }
  const target = node.querySelector<HTMLElement>('a[href], button')
  if (target === null) {
    node.setAttribute('tabindex', '-1')
  }
  ;(target ?? node).focus({ preventScroll: true })
}
