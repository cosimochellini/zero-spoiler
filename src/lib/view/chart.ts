import type { BookmarkMode } from '~/lib/progress/episode'
import { type Gated, thresholdIn } from '~/lib/progress/spoiler'
import type { Sea } from '~/lib/view/records'

/**
 * A port's place on the sea chart, in the chart's own box
 * (`~/components/chartGeometry`). Close to where Oda puts it, spaced so the
 * names stay clear: the stops sit along the route in order. Only an open
 * port carries one, so a covered stop's position is never in the HTML.
 * Declared apart from `records.ts` only for that file's length.
 */
export interface ChartPoint {
  x: number
  y: number
  /**
   * The island's outline as the chart draws it: path data around the point,
   * in the chart's own units. Only an open port carries one.
   */
  isle?: string
  /**
   * `luffy` on a stop the ship does not sail to, where Luffy goes alone: the
   * chart draws his own line to it off the route.
   */
  line?: 'luffy'
  /** Set on a place the story only shows: a mark, and no leg to it. */
  seen?: true
}

/**
 * Which of the ships the reader has reached sailed to a stop: the last one
 * whose own threshold is no later than the stop's, in the reader's unit, or
 * `null` before the first. The places page's chart and a place's own map ask
 * the same question, so the leg into a stop is drawn in the same line on
 * both.
 */
export function sailedBy(
  stop: Gated,
  ships: Gated[],
  mode: BookmarkMode,
): null | number {
  const at = ships.findLastIndex(
    (ship) => thresholdIn(ship, mode) <= thresholdIn(stop, mode),
  )

  return at === -1 ? null : at
}

/**
 * One part of the world, drawn and named once the reader has opened it: the
 * sea chart (`~/components/chartGeometry`) draws it, and the server sends
 * its name (`seasOf`, `~/server/archive/printed.server`).
 */
export type Region =
  | 'calm-belt'
  | 'east-blue'
  | 'grand-line'
  | 'new-world'
  | 'new-world-calm-belt'
  | 'north-blue'
  | 'red-line'
  | 'south-blue'
  | 'west-blue'

/**
 * What entering each sea opens. Reverse Mountain, on the way into the Grand
 * Line, shows and names the Red Line, both Calm Belts and the four Blues
 * (owner, #674), so the first stop in the Grand Line opens all of them. The
 * New World opens at its own first stop. The chart draws these regions and
 * the server sends their names, both from here, so a name reaches a page no
 * earlier than the chart draws its sea (#993). The one exception is the
 * reader's own: a port lifted with "Show anyway" names its own sea.
 */
const OPENS: Record<Sea, Region[]> = {
  'east-blue': ['east-blue'],
  'grand-line': [
    'east-blue',
    'grand-line',
    'calm-belt',
    'red-line',
    'north-blue',
    'west-blue',
    'south-blue',
  ],
  'new-world': ['new-world', 'new-world-calm-belt'],
  'calm-belt': ['calm-belt'],
  'red-line': ['red-line'],
}

/** Whether a region is one of the seas the map opens. */
function isSea(region: string): region is Sea {
  return Object.hasOwn(OPENS, region)
}

/**
 * The regions a reader who has entered these seas may see. A stop's region
 * is a word of its series (`PlaceWords`); only One Piece draws this map, and
 * a word that is none of its seas opens nothing.
 */
export function regionsFor(seas: Iterable<string>): Set<Region> {
  return new Set([...seas].flatMap((sea) => (isSea(sea) ? OPENS[sea] : [])))
}
