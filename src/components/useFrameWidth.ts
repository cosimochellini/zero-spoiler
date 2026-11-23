import { useEffect, useState } from 'react'

/** How wide an upright chart is drawn before the page has measured it: a common phone. */
export const ASSUMED_PHONE = 375

/**
 * The frame's width, measured where the browser can, assumed elsewhere.
 *
 * Apart from `useChartZoom`, which also holds the zoom and its hands: a place
 * record's map measures its frame and never zooms, and Rollup pulls a whole
 * module into the chunk that names one export of it (#1570).
 */
export function useFrameWidth(
  element: HTMLDivElement | null,
  assumed: number,
): number {
  const [width, setWidth] = useState(assumed)

  useEffect(() => {
    if (element === null || typeof ResizeObserver === 'undefined') {
      return
    }
    const observer = new ResizeObserver(([entry]) => {
      if (entry !== undefined && entry.contentRect.width > 0) {
        setWidth(entry.contentRect.width)
      }
    })
    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [element])

  return width
}
