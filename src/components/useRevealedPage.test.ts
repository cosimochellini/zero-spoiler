import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useRevealedPage } from './useRevealedPage'

const span = ([x, width]: [number, number]): DOMRect =>
  DOMRect.fromRect({ height: 44, width, x })

/** What the stubbed resize observer was handed. */
const heard: { disconnect?: () => void; resize?: () => void } = {}

function stubResizeObserver(): void {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      disconnect = vi.fn<() => void>()
      observe = vi.fn<() => void>()

      constructor(resize: () => void) {
        heard.resize = resize
        heard.disconnect = this.disconnect
      }
    },
  )
}

interface RowResult {
  first: HTMLElement
  scrollBy: ReturnType<typeof vi.fn<(options: ScrollToOptions) => void>>
}

/**
 * The bar's row at 320px in Italian: the box from x 52 to the window's edge,
 * with its padding (4px, 16px). "Personaggi" scrolled out at the start,
 * "Cariche", the current page, cut at the edge (284 to 350).
 */
function row(): RowResult {
  const box = document.createElement('nav')
  const first = document.createElement('a')
  const ranks = document.createElement('a')
  ranks.setAttribute('aria-current', 'page')
  box.append(first, ranks)
  box.style.paddingInlineStart = '4px'
  box.style.paddingInlineEnd = '16px'
  vi.spyOn(box, 'getBoundingClientRect').mockReturnValue(span([52, 268]))
  vi.spyOn(ranks, 'getBoundingClientRect').mockReturnValue(span([284, 66]))
  vi.spyOn(first, 'getBoundingClientRect').mockReturnValue(span([10, 93]))
  const scrollBy = vi.fn<(options: ScrollToOptions) => void>()
  Object.defineProperty(box, 'scrollBy', { value: scrollBy })
  document.body.append(box)
  return { first, scrollBy }
}

/** Focus reaching the link, from the keyboard or from a press. */
function focus(link: HTMLElement, keyboard: boolean): void {
  vi.spyOn(link, 'matches').mockReturnValue(keyboard)
  link.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))
}

/** The router's `onRendered`, fired by hand after its scroll restoration. */
const rendered = new Set<() => void>()
const router = {
  subscribe: (_event: 'onRendered', listener: () => void): (() => void) => {
    rendered.add(listener)
    return () => rendered.delete(listener)
  },
}

function mount(): ReturnType<typeof renderHook> {
  const box = document.querySelector('nav')
  return renderHook(() => {
    useRevealedPage({ current: box }, router)
  })
}

describe('a page link in a row that scrolls', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    rendered.clear()
    document.body.replaceChildren()
  })

  it('scrolls the current page wholly in, on load, on a resize and after the router restores the row', () => {
    stubResizeObserver()
    const { first, scrollBy } = row()
    // The router's scroll restoration subscribes first, when the router is
    // made: once the new page is drawn it puts the row's old scroll back,
    // which takes "Personaggi" out at the start again.
    const restoration = vi.spyOn(first, 'getBoundingClientRect')
    rendered.add(() => {
      restoration.mockReturnValue(span([10, 93]))
    })
    restoration.mockReturnValue(span([56, 93]))
    mount()

    expect(scrollBy).toHaveBeenLastCalledWith({ left: 46 })

    heard.resize?.()

    expect(scrollBy).toHaveBeenCalledTimes(2)

    // A move to "Personaggi", in view until the restoration runs.
    document.querySelector('[aria-current]')?.removeAttribute('aria-current')
    first.setAttribute('aria-current', 'page')
    for (const listener of rendered) {
      listener()
    }

    expect(scrollBy).toHaveBeenLastCalledWith({ left: -46 })
  })

  it('scrolls a link the keyboard reaches back in, and not one a press reaches', () => {
    const { first, scrollBy } = row()
    mount()
    scrollBy.mockClear()

    focus(first, false)

    expect(scrollBy).not.toHaveBeenCalled()

    focus(first, true)

    expect(scrollBy).toHaveBeenLastCalledWith({ left: -46 })
  })

  it('stops listening once unmounted', () => {
    stubResizeObserver()
    const { first, scrollBy } = row()
    const { unmount } = mount()
    scrollBy.mockClear()
    unmount()

    focus(first, true)

    expect(scrollBy).not.toHaveBeenCalled()
    expect(heard.disconnect).toHaveBeenCalledWith()
    expect(rendered.size).toBe(0)
  })
})
