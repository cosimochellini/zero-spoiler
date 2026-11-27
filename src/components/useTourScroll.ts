import { type RefObject, useEffect, useRef, useState } from 'react'

import type { TourStep } from '~/lib/view/tourSteps'

/** What the tour reads off the scroll: its step, its point, and its blocks. */
export interface TourScroll {
  active: number
  /** The reader moved the slider: the scroll leaves the point alone. */
  hold: (value: number) => void
  /** Whether the tour is close enough for its screen to load. */
  near: boolean
  point: number
}

/** The tour's elements: its section, and each step's block by index. */
export interface TourElements {
  blocksRef: RefObject<(HTMLElement | null)[]>
  sectionRef: RefObject<HTMLElement | null>
}

/** How far ahead of the tour the screen starts loading. */
const NEAR = '800px 0px'

// The screen stands beside the words from this width; under it, above them.
const SIDE_BY_SIDE_QUERY = '(min-width: 56rem)'

/** Where a step's words are read: mid-window, or under the screen on a phone. */
const LINE = { beside: 0.5, under: 0.75 }

/**
 * The tour's scroll (#1703): the step whose block has crossed the reading
 * line is the one shown, and a step that scrolls the bookmark moves it by
 * the share of its block passed. The slider holds the point until the next
 * step.
 */
export function useTourScroll(
  steps: TourStep[],
  { blocksRef, sectionRef }: TourElements,
): TourScroll {
  const heldRef = useRef(false)
  const shownRef = useRef(-1)
  const near = useNear(sectionRef)
  const [active, setActive] = useState(0)
  const [point, setPoint] = useState(1)

  // eslint-disable-next-line no-restricted-syntax -- window scroll and resize listeners, read once a frame.
  useEffect(() => {
    function measure(): void {
      const line = readingLine()
      const index = activeAt(blocksRef.current, line)
      const step = steps[index]
      if (index !== shownRef.current) {
        shownRef.current = index
        heldRef.current = false
        setActive(index)
        setPoint((before) => step?.at ?? before)
      }
      if (heldRef.current) {
        return
      }
      const block = blocksRef.current[index] ?? null
      if (block !== null && step?.scrub === true) {
        setPoint(scrubbed(block, line, step.last))
      }
    }
    return onScrollFrame(measure)
  }, [blocksRef, steps])

  return {
    active,
    hold: (value) => {
      heldRef.current = true
      setPoint(value)
    },
    near,
    point,
  }
}

/** Whether an element has come within `NEAR` of the window, once. */
function useNear(ref: RefObject<HTMLElement | null>): boolean {
  const [near, setNear] = useState(false)

  // eslint-disable-next-line no-restricted-syntax -- an IntersectionObserver on the tour's section.
  useEffect(() => {
    const target = ref.current
    // With no observer (jsdom, an old browser) the words stand alone.
    if (target === null || typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.every((entry) => !entry.isIntersecting)) {
          return
        }

        setNear(true)
        observer.disconnect()
      },
      { rootMargin: NEAR },
    )
    observer.observe(target)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return near
}

/** Runs `measure` now and once a frame while the window scrolls or resizes. */
function onScrollFrame(measure: () => void): () => void {
  let frame = 0
  function schedule(): void {
    if (frame === 0) {
      frame = requestAnimationFrame(() => {
        frame = 0
        measure()
      })
    }
  }
  measure()
  globalThis.addEventListener('scroll', schedule, { passive: true })
  globalThis.addEventListener('resize', schedule)
  return () => {
    cancelAnimationFrame(frame)
    globalThis.removeEventListener('scroll', schedule)
    globalThis.removeEventListener('resize', schedule)
  }
}

/** The height in the window at which a step counts as read. */
function readingLine(): number {
  const beside = globalThis.matchMedia(SIDE_BY_SIDE_QUERY).matches
  return globalThis.innerHeight * (beside ? LINE.beside : LINE.under)
}

/** The last step whose block has crossed the line, the first by default. */
export function activeAt(blocks: (HTMLElement | null)[], line: number): number {
  let index = 0
  for (const [at, block] of blocks.entries()) {
    if (block !== null && block.getBoundingClientRect().top <= line) {
      index = at
    }
  }
  return index
}

/** The episode a scrolled step stands at: its share of the block passed. */
export function scrubbed(
  block: HTMLElement,
  line: number,
  last: number,
): number {
  const box = block.getBoundingClientRect()
  const passed = Math.min(1, Math.max(0, (line - box.top) / box.height))
  return 1 + Math.round(passed * (last - 1))
}
