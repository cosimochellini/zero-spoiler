import { type RefObject, useEffect } from 'react'

/** A computed length in pixels, as a number. */
const pixels = (length: string): number => Number(length.replace('px', ''))

/**
 * Scrolls the box, and nothing else, until the link is wholly inside the
 * box's padding, the room its focus ring needs.
 */
function reveal(box: HTMLElement, link: Element | null): void {
  if (link === null) {
    return
  }
  const view = box.getBoundingClientRect()
  const { left, right } = link.getBoundingClientRect()
  const style = getComputedStyle(box)
  const start = view.left + pixels(style.paddingInlineStart)
  const end = view.right - pixels(style.paddingInlineEnd)
  if (left < start) {
    box.scrollBy({ left: left - start })
  } else if (right > end) {
    box.scrollBy({ left: right - end })
  }
}

/** The one router event the row waits for: a page drawn after a move. */
export interface RenderedEvents {
  subscribe: (event: 'onRendered', listener: () => void) => () => void
}

/**
 * Keeps a page link of a row that scrolls sideways wholly in view: the
 * current page once the page is drawn, after every move and whenever the row
 * changes size (a turned phone, larger text), and any link the keyboard
 * reaches. After a move it waits for the router's `onRendered`: by then the
 * new page's links (a language switch renames them) are drawn, and the
 * router's scroll restoration, which subscribed first, has put back the
 * row's old `scrollLeft`, so the reveal comes last. A browser scrolls a
 * focused link in only when it is nearly all out of sight, so a page half
 * shown at the window's edge kept its ring cut, and the current page could
 * load half hidden (#1377). A press focuses a link before it lets go, so
 * focus from a pointer moves nothing: the row sliding under a tap on the
 * edge would make the tap miss.
 */
export function useRevealedPage(
  boxRef: RefObject<HTMLElement | null>,
  router: RenderedEvents,
): void {
  // eslint-disable-next-line no-restricted-syntax -- focusin listener, ResizeObserver and router.subscribe('onRendered')
  useEffect(() => {
    const box = boxRef.current
    if (box === null) {
      return
    }
    const revealCurrent = (): void => {
      reveal(box, box.querySelector('[aria-current="page"]'))
    }
    revealCurrent()
    const onFocusIn = ({ target }: FocusEvent): void => {
      if (target instanceof Element && target.matches(':focus-visible')) {
        reveal(box, target)
      }
    }
    box.addEventListener('focusin', onFocusIn)
    const resize =
      typeof ResizeObserver === 'undefined' ? undefined : (
        new ResizeObserver(revealCurrent)
      )
    resize?.observe(box)
    const stopRendered = router.subscribe('onRendered', revealCurrent)
    return () => {
      box.removeEventListener('focusin', onFocusIn)
      resize?.disconnect()
      stopRendered()
    }
  }, [boxRef, router])
}
