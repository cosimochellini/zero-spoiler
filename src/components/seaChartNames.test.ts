import { describe, expect, it } from 'vitest'

import { at, stop } from '~/test/fixtures'

import type { Point, Rect } from './chartGeometry'
import { tailOf } from './chartRoute'
import { openingView } from './chartView'
import { openingOf, pointOf } from './seaChartNames'

const eastBlue = [
  stop({ id: 'foosha', ...at(1), chart: { x: 900, y: 95 } }),
  stop({ id: 'shells-town', ...at(2), chart: { x: 930, y: 185 } }),
  stop({ id: 'syrup-village', ...at(9), chart: { x: 1210, y: 70 } }),
  stop({ id: 'baratie', ...at(20), chart: { x: 1360, y: 175 } }),
]

/** Whether a point lies inside a window. */
function inside(view: Rect, point: Point): boolean {
  return (
    point.x >= view.x
    && point.x <= view.x + view.width
    && point.y >= view.y
    && point.y <= view.y + view.height
  )
}

describe('the window the chart opens on', () => {
  it('frames a Blue on its stops and the first dots under fog (#1380)', () => {
    const points = eastBlue.map((port) => pointOf(port))
    const here = eastBlue.at(-1) ?? null
    const tail = tailOf(points.at(-1) ?? points[0]!, 10)
    const view = openingOf(eastBlue, here, tail)

    expect(
      [...points, ...tail.slice(0, 3)].every((point) => inside(view, point)),
    ).toBe(true)
    // Narrower than the window round the reader's own stop, the old opening.
    expect(view.width).toBeLessThan(
      openingView(points, points.at(-1) ?? null).width,
    )
  })
})
