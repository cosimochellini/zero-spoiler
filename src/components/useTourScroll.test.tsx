import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { TourStep } from '~/lib/view/tourSteps'

import { activeAt, scrubbed, useTourScroll } from './useTourScroll'

/** Every block's height in the window. */
const HEIGHT = 1000

/** A block whose box sits at `start` until the scroll moves it. */
function blockAt(start: number): {
  element: HTMLElement
  move: (top: number) => void
} {
  let top = start
  const element = document.createElement('li')
  vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
    () => new DOMRect(0, top, 100, HEIGHT),
  )
  return {
    element,
    move: (next) => {
      top = next
    },
  }
}

/** A block that stays where it is. */
function block(top: number): HTMLElement {
  return blockAt(top).element
}

const STEPS: TourStep[] = [
  { key: 'bookmark', last: 61, scrub: true, series: 'one-piece' },
  { at: 4, key: 'fog', last: 61, scrub: false, series: 'one-piece' },
]

describe('activeAt', () => {
  it('takes the last block whose top has crossed the line', () => {
    const blocks = [block(-500), null, block(300), block(900)]

    expect(activeAt(blocks, 400)).toBe(2)
    expect(activeAt(blocks, 1000)).toBe(3)
    expect(activeAt([block(200), block(900)], 100)).toBe(0)
  })
})

describe('scrubbed', () => {
  it('maps the share of the block passed to the demo’s episodes', () => {
    const element = block(100)

    expect(scrubbed(element, 0, 61)).toBe(1)
    expect(scrubbed(element, 600, 61)).toBe(31)
    expect(scrubbed(element, 5000, 61)).toBe(61)
  })
})

describe('useTourScroll', () => {
  beforeEach(() => {
    // One frame at once, so a scroll event measures before the assertion.
    vi.stubGlobal('requestAnimationFrame', (run: FrameRequestCallback) => {
      run(0)
      return 0
    })
    vi.stubGlobal('innerHeight', 1000)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('scrolls the point, holds the slider’s, and lets the next step go', () => {
    const first = blockAt(0)
    const second = blockAt(2000)
    const blocksRef = { current: [first.element, second.element] }
    const sectionRef = { current: null }
    const { result } = renderHook(() =>
      useTourScroll(STEPS, { blocksRef, sectionRef }),
    )
    const scroll = (): void => {
      act(() => {
        globalThis.dispatchEvent(new Event('scroll'))
      })
    }

    // The phone's reading line is three quarters down: 750 of 1000.
    expect(result.current.active).toBe(0)
    expect(result.current.point).toBe(46)

    act(() => {
      result.current.hold(10)
    })
    first.move(-200)
    scroll()

    expect(result.current.point).toBe(10)

    second.move(500)
    scroll()

    expect(result.current.active).toBe(1)
    expect(result.current.point).toBe(4)

    second.move(2000)
    first.move(0)
    scroll()

    expect(result.current.active).toBe(0)
    expect(result.current.point).toBe(46)
  })
})
