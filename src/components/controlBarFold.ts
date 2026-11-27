import { STACK_PROPERTY } from '~/styles/sticky'

/**
 * The DOM side of `ControlBar`: measuring it, watching whether it has
 * pinned, and the focus, keys and picks that open and fold it.
 */

/** Nothing to stop: without the observers, nothing started. */
function ignore(): void {
  // Deliberately empty.
}

/** What the bar knows about itself: pinned or not, and by how much it tucks. */
export interface Fold {
  /** How far down the window the bar pins: the site bar's height, or 0. */
  offset: number
  pinned: boolean
  tuck: number
}

/** Reads the bar's fold as it stands, and stops watching it. */
export interface WatchResult {
  read: () => Fold
  stop: () => void
}

/**
 * Measures the bar and watches whether it has pinned.
 *
 * The folded row is the bar's last child. It is `display: none` where the
 * bar never folds, and then it has no offset parent and the bar tucks by
 * nothing. The line the bar pins at moves when the window crosses the phone
 * breakpoint, and the pin is watched afresh when it does.
 */
export function watch(
  bar: HTMLElement,
  /** The custom property the bar's folded top reads its tuck from. */
  tuckProperty: string,
  onPin: (pinned: boolean) => void,
): WatchResult {
  let tuck = 0
  let offset = 0
  const row = bar.lastElementChild
  if (
    typeof ResizeObserver === 'undefined'
    || typeof IntersectionObserver === 'undefined'
    || !(row instanceof HTMLElement)
  ) {
    return { read: () => ({ offset, pinned: false, tuck }), stop: ignore }
  }
  // The stack goes on the document, where the scroll padding reads it too,
  // so a control or tile that focus scrolls to is never left under the bar.
  const root = document.documentElement.style
  const pin = watchPin(bar, () => offset, onPin)
  const resize = new ResizeObserver(() => {
    const box = bar.getBoundingClientRect()
    tuck =
      row.offsetParent === null ? 0 : row.getBoundingClientRect().top - box.top
    bar.style.setProperty(tuckProperty, `${String(-tuck)}px`)
    root.setProperty(STACK_PROPERTY, `${String(box.height - tuck)}px`)
    // The bar's scroll margin is the site bar's pinned height, resolved to
    // pixels: `96px` on a phone at the default text size, up to `368px` with
    // large text, `52px` on a wider screen.
    const next = Number(getComputedStyle(bar).scrollMarginTop.replace('px', ''))
    if (next === offset) {
      return
    }

    offset = next
    pin.redraw()
  })
  resize.observe(bar)
  // The row too: crossing the phone breakpoint shows or hides it.
  resize.observe(row)

  return {
    read: () => ({ offset, pinned: pin.pinned(), tuck }),
    stop: () => {
      resize.disconnect()
      pin.stop()
      root.removeProperty(STACK_PROPERTY)
    },
  }
}

/** Whether the bar is pinned, and how to look again or stop looking. */
interface WatchPinResult extends Pick<WatchResult, 'stop'> {
  pinned: () => boolean
  redraw: () => void
}

/**
 * Whether the bar has pinned: its top has reached the line it pins at, the
 * foot of the site bar on a phone and the top of the window elsewhere.
 *
 * The observer's root has its top edge pulled in to a pixel below that line,
 * so a bar pinned on it is cut as well as one pinned above it, and a bar in
 * its own place never is. A jump (the End key, an in-page link) can take the
 * bar from part in sight to pinned without crossing the observer's
 * threshold, and Chrome then reports nothing (#1377), so where a scroll ends
 * the bar's own top decides too.
 */
function watchPin(
  bar: HTMLElement,
  /** How far down the window the line is, in pixels. */
  line: () => number,
  onPin: (pinned: boolean) => void,
): WatchPinResult {
  let pinned = false
  const decide = (top: number): void => {
    if (top < line() + 1 === pinned) {
      return
    }

    pinned = !pinned
    onPin(pinned)
  }
  const observe = (): IntersectionObserver => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry !== undefined) {
          decide(entry.boundingClientRect.top)
        }
      },
      { rootMargin: `-${String(line() + 1)}px 0px 0px`, threshold: 1 },
    )
    observer.observe(bar)
    return observer
  }
  let observer = observe()
  const atScrollEnd = (): void => {
    decide(bar.getBoundingClientRect().top)
  }
  globalThis.addEventListener('scrollend', atScrollEnd)

  return {
    pinned: () => pinned,
    redraw: () => {
      observer.disconnect()
      observer = observe()
    },
    stop: () => {
      globalThis.removeEventListener('scrollend', atScrollEnd)
      observer.disconnect()
    },
  }
}

/**
 * Opens the bar when focus moves into a control, folds it
 * when focus leaves the bar, and settles it after a pick or a query.
 */
export function listen(
  bar: HTMLElement,
  read: () => Fold,
  setOpen: (open: boolean) => void,
): () => void {
  // Focus reaching a control opens the bar; the folded row's two buttons,
  // its own children, do not.
  const onFocusIn = ({ target }: Event): void => {
    if (
      target instanceof Element
      && target.parentElement !== bar.lastElementChild
    ) {
      setOpen(true)
    }
  }
  // A press inside the bar is not focus leaving it (an iOS tap takes none).
  let pressed = false
  const onFocusOut = (event: Event): void => {
    const next = event instanceof FocusEvent ? event.relatedTarget : null
    if (!pressed && (!(next instanceof Node) || !bar.contains(next))) {
      setOpen(false)
    }
  }
  // A pick made with an arrow key (not a letter typed in the field) keeps
  // the bar open and focus on the group, so the next arrow steps on.
  let keyed = false
  const onInput = (event: Event): void => {
    keyed = event instanceof KeyboardEvent && event.key.startsWith('Arrow')
    pressed = event.type === 'pointerdown'
  }
  const onRelease = (): void => {
    pressed = false
  }
  const onChange = ({ target }: Event): void => {
    if (!(target instanceof HTMLInputElement) || target.type !== 'radio') {
      return
    }
    if (!keyed) {
      setOpen(false)
    }
    const fold = read()
    if (fold.pinned) {
      settle(bar, fold, !keyed)
    }
    keyed = false
  }
  const listeners: [EventTarget, string, (event: Event) => void][] = [
    [bar, 'focusin', onFocusIn],
    [bar, 'input', backOnQuery(bar, read)],
    [bar, 'focusout', onFocusOut],
    [bar, 'keydown', onInput],
    [bar, 'pointerdown', onInput],
    [bar, 'change', onChange],
    [globalThis, 'pointerup', onRelease],
    [globalThis, 'pointercancel', onRelease],
  ]
  for (const [on, type, listener] of listeners) {
    on.addEventListener(type, listener)
  }

  return () => {
    for (const [on, type, listener] of listeners) {
      on.removeEventListener(type, listener)
    }
  }
}

/**
 * After a pick on a pinned bar: back to where the bar has just pinned, the
 * top of the new results, if the reader was further down. When the pick
 * folds the bar on a phone, the control picked with has just slid off
 * screen, so focus goes to the toggle.
 */
function settle(
  bar: HTMLElement,
  { offset, tuck }: Fold,
  folds: boolean,
): void {
  backToResults(bar, offset - tuck)
  if (folds && tuck > 0) {
    bar
      .querySelector<HTMLElement>('[aria-expanded]')
      ?.focus({ preventScroll: true })
  }
}

/**
 * A query typed deep in the listing filters what is above the window too,
 * and the page can shrink to a few screens with the matches far above it
 * (#1379). Each keystroke in a pinned bar's search goes back to the top of
 * the results, the whole bar showing and focus left in the field.
 */
function backOnQuery(
  bar: HTMLElement,
  read: () => Fold,
): (event: Event) => void {
  return ({ target }) => {
    const fold = read()
    if (
      target instanceof HTMLInputElement
      && target.type === 'search'
      && fold.pinned
    ) {
      backToResults(bar, fold.offset)
    }
  }
}

/**
 * Scrolls up to where the bar's container starts `below` pixels down the
 * window, if the reader is further down; never down.
 */
function backToResults(bar: HTMLElement, below: number): void {
  const container = bar.parentElement
  if (container === null) {
    return
  }
  const top = container.getBoundingClientRect().top + window.scrollY - below
  if (window.scrollY > top) {
    window.scrollTo({ top, behavior: 'instant' })
  }
}
