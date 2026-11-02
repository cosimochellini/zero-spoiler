import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import {
  boxOf,
  type Orientation,
  type Point,
  project,
  type Rect,
  sideOf,
} from '~/components/chartGeometry'
import { type LabelFrame, layoutLabels } from '~/components/chartLabelLayout'
import type { LabelBox } from '~/components/chartLabels'
import { styles } from '~/components/SeaChart.styles'
import { pointOf, type StopName } from '~/components/seaChartModel'
import type { StopView } from '~/lib/view/places'

const PERCENT = 100
const CURRENT_LETTERS = 20

interface PlacedName {
  at: Point
  box: LabelBox
  id: string
  marked: boolean
  name: string
}

/**
 * Reached names stay written at every zoom, with leaders when they need room.
 * A place's map keeps them inside its stretch (`bounds`) and sets its own
 * stop's name in gold (`marked`).
 */
export function StopNames({
  bounds,
  names,
  here,
  marked,
  orientation,
  scale,
}: {
  bounds?: Rect | undefined
  here: null | StopView
  /** The id of the stop whose name is set in gold. */
  marked?: string | undefined
  names: StopName[]
  orientation: Orientation
  scale: number
}): ReactElement {
  const world = boxOf(orientation)
  const placed = placedOf(names, here, { bounds, marked, orientation, scale })
  const room = { x: world.x * scale, y: world.y * scale }

  return (
    <>
      <Leaders
        labels={placed}
        orientation={orientation}
        scale={scale}
      />
      {placed.map((label) => (
        <NameLabel
          key={label.id}
          label={label}
          room={room}
        />
      ))}
    </>
  )
}

/** Every name with its box, the reader's own label's room kept clear. */
function placedOf(
  names: StopName[],
  here: null | StopView,
  { marked, ...frame }: LabelFrame & { marked?: string | undefined },
): PlacedName[] {
  const { orientation } = frame
  const spots = names.map(({ port, side }) => ({
    at: pointOf(port),
    length: port.name.length,
    side: side[orientation],
  }))
  const current =
    here === null ? null : (
      {
        at: pointOf(here),
        length: CURRENT_LETTERS,
        side: sideOf(pointOf(here), orientation),
      }
    )
  const boxes = layoutLabels(spots, frame, current)

  return names.flatMap(({ port }, index): PlacedName[] => {
    const box = boxes[index]
    return box === undefined ?
        []
      : [
          {
            at: project(pointOf(port), orientation),
            box,
            id: port.id,
            marked: port.id === marked,
            name: port.name,
          },
        ]
  })
}

/** Leaders keep a displaced name visibly attached to its own reached island. */
function Leaders({
  labels,
  orientation,
  scale,
}: {
  labels: PlacedName[]
  orientation: Orientation
  scale: number
}): ReactElement {
  const world = boxOf(orientation)
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${String(world.x)} ${String(world.y)}`}
      {...stylex.props(styles.svg)}
    >
      {labels.map(({ at, box, id }) => (
        <path
          key={id}
          d={`M${String(at.x)} ${String(at.y)}L${String(box.x / scale)} ${String(box.y / scale)}`}
          vectorEffect="non-scaling-stroke"
          {...stylex.props(styles.nameLeader)}
        />
      ))}
    </svg>
  )
}

/** A bounded wrapping label; its source is always an open stop. */
function NameLabel({
  label,
  room,
}: {
  label: PlacedName
  room: Point
}): ReactElement {
  return (
    <span
      data-chart-name={label.id}
      {...stylex.props(
        styles.stopName,
        label.marked && styles.stopNameHere,
        styles.nameBox(
          `${String((label.box.x / room.x) * PERCENT)}%`,
          `${String((label.box.y / room.y) * PERCENT)}%`,
          `${String(label.box.width)}px`,
        ),
      )}
    >
      {label.name}
    </span>
  )
}
