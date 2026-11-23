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

/**
 * The bar's row at 320px in Italian: the box from x 52 to the window's edge,
 * with its padding (4px, 16px). "Personaggi" scrolled out at the start,
 * "Cariche", the current page, cut at the edge (284 to 350).
 */
function row(): {
  first: HTMLElement
  scrollBy: ReturnType<typeof vi.fn<(options: ScrollToOptions) => void>>
} {
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

function mount(): ReturnType<typeof renderHook<void, { path: string }>> {
  const box = document.querySelector('nav')
  return renderHook(
    ({ path }) => {
      useRevealedPage({ current: box }, path)
    },
    { initialProps: { path: '/one-piece/it/ranks' } },
  )
}

describe('a page link in a row that scrolls', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    document.body.replaceChildren()
  })

  it('scrolls the current page wholly in, on load, on a move and on a resize', () => {
    stubResizeObserver()
    const { scrollBy } = row()
    const { rerender } = mount()

    expect(scrollBy).toHaveBeenLastCalledWith({ left: 46 })

    rerender({ path: '/one-piece/it/characters' })

    expect(scrollBy).toHaveBeenCalledTimes(2)

    heard.resize?.()

    expect(scrollBy).toHaveBeenCalledTimes(3)
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
  })
})
