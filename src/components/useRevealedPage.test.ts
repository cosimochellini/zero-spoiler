import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useRevealedPage } from './useRevealedPage'

const span = ([x, width]: [number, number]): DOMRect =>
  DOMRect.fromRect({ height: 44, width, x })

/** A 268px row with the bar's padding: the current page, and another. */
function row(
  current: [number, number],
  other: [number, number],
): {
  first: HTMLElement
  reveal: () => void
  scrollBy: ReturnType<typeof vi.fn>
} {
  const box = document.createElement('nav')
  const first = document.createElement('a')
  const ranks = document.createElement('a')
  ranks.setAttribute('aria-current', 'page')
  box.append(first, ranks)
  box.style.paddingInlineStart = '4px'
  box.style.paddingInlineEnd = '16px'
  vi.spyOn(box, 'getBoundingClientRect').mockReturnValue(span([0, 268]))
  vi.spyOn(ranks, 'getBoundingClientRect').mockReturnValue(span(current))
  vi.spyOn(first, 'getBoundingClientRect').mockReturnValue(span(other))
  const scrollBy = vi.fn<(options: ScrollToOptions) => void>()
  Object.defineProperty(box, 'scrollBy', { value: scrollBy })
  document.body.append(box)

  return {
    first,
    reveal: () => {
      renderHook(() => {
        useRevealedPage({ current: box }, '/one-piece/it/ranks')
      })
    },
    scrollBy,
  }
}

describe('a page link in a row that scrolls', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.replaceChildren()
  })

  it('scrolls the current page wholly in, and a focused one back', () => {
    // "Cariche" at 320px runs 284 to 350, past the padding's 252.
    const { first, reveal, scrollBy } = row([284, 66], [-10, 60])
    reveal()

    expect(scrollBy).toHaveBeenLastCalledWith({ left: 98 })

    first.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))

    expect(scrollBy).toHaveBeenLastCalledWith({ left: -14 })
  })

  it('leaves the row alone when the link is already in view', () => {
    const { reveal, scrollBy } = row([100, 60], [10, 60])
    reveal()

    expect(scrollBy).not.toHaveBeenCalled()
  })
})
