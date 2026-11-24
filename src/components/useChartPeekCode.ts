import {
  type Dispatch,
  type RefCallback,
  type RefObject,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  peeksHaveLanded,
  preloadChartPeeks,
} from '~/components/seaChartPeekLoader'

/** What of an open peek its code's arrival needs. */
export interface Waiting {
  /** A Tab from its stop waits for the peek to be drawn. */
  entering: boolean
  /** The stop or ship it belongs to: the Tab is pressed on it, and Esc gives it the focus back. */
  from: HTMLElement
}

/** What a peek's first control is: where a Tab from its stop leads. */
const FIRST_CONTROL = 'a[href], button'

/** Fetches the peeks' code, and tells which way it went. */
async function fetchInto(
  landed: () => void,
  failed: () => void,
): Promise<void> {
  if (await preloadChartPeeks()) {
    landed()
  } else {
    failed()
  }
}

/**
 * While the open peek is not drawn, a Tab from its stop is held back and
 * marked on the peek (`entering`), to go in with it when it comes.
 */
function useTabWait<Open extends Waiting>(
  open: null | Open,
  peekRef: RefObject<HTMLElement | null>,
  setOpen: Dispatch<SetStateAction<null | Open>>,
): void {
  useEffect(() => {
    if (open === null) {
      return
    }
    const wait = (event: KeyboardEvent): void => {
      if (
        event.key !== 'Tab'
        || event.shiftKey
        || event.target !== open.from
        || peekRef.current !== null
      ) {
        return
      }
      event.preventDefault()
      setOpen((previous) =>
        previous === open ? { ...open, entering: true } : previous,
      )
    }

    document.addEventListener('keydown', wait)
    return () => {
      document.removeEventListener('keydown', wait)
    }
  }, [open, peekRef, setOpen])
}

/**
 * The peeks' code is fetched apart from the page, so a peek can be asked for
 * before it can be drawn. While it is on the way nothing is drawn, and a
 * fetch that fails closes the peek. A Tab from a stop walks into its peek, so
 * one pressed before the peek is there waits for it, instead of letting the
 * focus go on past the stop: the peek takes the focus on its first control
 * when it is drawn, where the Tab would have led. The wait is the open
 * peek's own, so it ends with it.
 */
export function usePeekCode<Open extends Waiting>(
  open: null | Open,
  setOpen: Dispatch<SetStateAction<null | Open>>,
): {
  /** Hands the peek's element to the hook, and the focus to its first control. */
  attach: RefCallback<HTMLElement>
  /** The open peek, once there is code to draw it with; `null` before. */
  drawn: null | Open
  /** Asks for the code, the first time a stop or a ship is reached. */
  fetchPeeks: () => void
  /** The peek's element while it is drawn, for the hook to tell a press inside it. */
  peekRef: RefObject<HTMLElement | null>
} {
  const [ready, setReady] = useState(peeksHaveLanded)
  const peekRef = useRef<HTMLElement | null>(null)
  const entering = open?.entering === true
  useTabWait(open, peekRef, setOpen)

  const attach = useCallback<RefCallback<HTMLElement>>(
    (peek) => {
      peekRef.current = peek
      if (entering) {
        peek?.querySelector<HTMLElement>(FIRST_CONTROL)?.focus()
      }
    },
    [entering],
  )
  const fetchPeeks = (): void => {
    if (!ready) {
      void fetchInto(
        () => {
          setReady(true)
        },
        () => {
          setOpen(null)
        },
      )
    }
  }

  return { attach, drawn: ready ? open : null, fetchPeeks, peekRef }
}
