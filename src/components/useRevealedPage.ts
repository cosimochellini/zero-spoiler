import { type RefObject, useEffect } from 'react'

/** A computed length in pixels, as a number. */
const pixels = (length: string): number => Number(length.replace('px', ''))

/**
 * Scrolls the box, and nothing else, until the link is wholly inside the
 * box's padding, the room its focus ring needs.
 */
function reveal(box: HTMLElement, link: Element): void {
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

/**
 * Keeps a page link of a row that scrolls sideways wholly in view: the
 * current page once the page is drawn and after every move, and any link
 * focus reaches. A browser scrolls a focused link in only when it is nearly
 * all out of sight, so a page half shown at the window's edge kept its ring
 * cut, and the current page could load half hidden (#1377).
 */
export function useRevealedPage(
  boxRef: RefObject<HTMLElement | null>,
  /** The page's address: a move to another page reveals the new current. */
  pathname: string,
): void {
  useEffect(() => {
    const box = boxRef.current
    if (box === null) {
      return
    }
    const current = box.querySelector('[aria-current="page"]')
    if (current !== null) {
      reveal(box, current)
    }
    const onFocusIn = ({ target }: FocusEvent): void => {
      if (target instanceof Element) {
        reveal(box, target)
      }
    }
    box.addEventListener('focusin', onFocusIn)
    return () => {
      box.removeEventListener('focusin', onFocusIn)
    }
  }, [boxRef, pathname])
}
