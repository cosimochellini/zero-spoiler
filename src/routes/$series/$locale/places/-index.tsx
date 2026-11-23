/**
 * The index under the chart on the places page: a control bar (search,
 * sea, type, saga), then the places the reader has reached grouped by sea,
 * as a grid of plates, each a link to its own page, and
 * one line for the stops under fog. A sibling of the route module; the
 * leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import {
  type ReactElement,
  type RefObject,
  useId,
  useRef,
  useSyncExternalStore,
} from 'react'

import { CatalogueSection } from '~/components/CatalogueSection'
import { Marked } from '~/components/CharacterCard'
import { OpenPortPlate } from '~/components/PortPlate'
import { Button } from '~/components/ui/Button'
import { usePlaceLabels } from '~/components/usePlaceLabels'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useSeriesParams, useThreshold } from '~/lib/progress/BookmarkContext'
import { matchFolded } from '~/lib/search/fold'
import type { PlaceParams } from '~/lib/search/placeParams'
import type { StopView } from '~/lib/view/places'
import type { CoveredRecord } from '~/lib/view/records'

import { PlaceControls, type PlaceControlsProps } from './-index.controls'
import { styles } from './-index.styles'

/** How wide a stop's number is printed. `03`, never `3`. */
const NUMBER_WIDTH = 2

/** What the index draws, and the picks it reads and moves. */
export interface PlaceIndexProps extends Omit<
  PlaceControlsProps,
  'count' | 'fieldId' | 'inView'
> {
  covered: CoveredRecord[]
  /**
   * Whether the world map is drawn above the index. It says everything is
   * under fog when nothing is reached; without it the index says so.
   */
  mapAbove: boolean
  /** The query, already folded. Empty matches everything. */
  needle: string
  /** The open stops the picks and the query leave, in the reader's order. */
  shown: StopView[]
}

/**
 * The index. With no place reached, nothing under the world map, which
 * already says everything is under fog, and the fog line alone without it.
 *
 * The picks and the search apply to the open places only. A covered stop has
 * no sea, type or saga in the page, so the stops under fog are one line at
 * the foot, the same whatever is picked: a line per sea would tell how many
 * stops a sea still holds, and so where the next one begins.
 */
export function PlaceIndex(props: PlaceIndexProps): null | ReactElement {
  if (props.open.length > 0) {
    return <OpenIndex {...props} />
  }

  return props.mapAbove ? null : <FogLine count={props.covered.length} />
}

/** The index with a place reached: the bar, the groups, the fog line. */
function OpenIndex({
  covered,
  needle,
  shown,
  ...controls
}: PlaceIndexProps): ReactElement {
  const t = useT()
  const { regionOf } = usePlaceLabels(controls.words, controls.seas)
  const fieldId = useId()
  const indexRef = useRef<HTMLDivElement>(null)
  const groups = groupsOf(controls.open, shown)
  const inView = groups[useGroupInView(indexRef)]

  return (
    <div
      ref={indexRef}
      {...stylex.props(styles.index)}
    >
      <PlaceControls
        count={shown.length}
        fieldId={fieldId}
        inView={
          inView === undefined ? undefined : (
            `${regionOf(inView.sea)} · ${countOf(t, inView.total)}`
          )
        }
        {...controls}
      />

      {shown.length === 0 && isPicked(controls.params) ?
        <NoneShown onParams={controls.onParams} />
      : null}

      {groups.map(({ sea, stops, total }) => {
        return (
          <CatalogueSection
            key={sea}
            headingId={`${fieldId}-${sea}`}
            lede={countOf(t, total)}
            sticky="wide"
            title={regionOf(sea)}
          >
            <Stops
              needle={needle}
              open={controls.open}
              stops={stops}
            />
          </CatalogueSection>
        )
      })}

      <FogLine count={covered.length} />
    </div>
  )
}

/** The picks leave nothing: says so, with the button that clears them. */
function NoneShown({
  onParams,
}: Pick<PlaceIndexProps, 'onParams'>): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.empty)}>
      <p>{t('places.noneShown')}</p>
      <Button
        onClick={() => {
          onParams({}, false)
        }}
      >
        {t('places.showAll')}
      </Button>
    </div>
  )
}

/** Calls `onChange` on every scroll of the window. */
function onScroll(onChange: () => void): () => void {
  globalThis.addEventListener('scroll', onChange, { passive: true })

  return () => {
    globalThis.removeEventListener('scroll', onChange)
  }
}

/**
 * Which group of the index is under the pinned control bar: the last one
 * whose top has scrolled above the bar's foot, by its place among the
 * groups; -1 above the first, and on the server. On a phone the group heads
 * do not pin, so the bar's folded row names the group instead (#1380).
 */
function useGroupInView(indexRef: RefObject<HTMLDivElement | null>): number {
  return useSyncExternalStore(
    onScroll,
    () => {
      const index = indexRef.current
      // The control bar is the index's first child (`ControlBar`).
      const foot = index?.firstElementChild?.getBoundingClientRect().bottom
      if (index === null || foot === undefined) {
        return -1
      }

      return [...index.querySelectorAll(':scope > section')].findLastIndex(
        (section) => section.getBoundingClientRect().top < foot,
      )
    },
    () => -1,
  )
}

/** The stops under fog, one line for all of them; nothing with none. */
function FogLine({ count }: { count: number }): null | ReactElement {
  const t = useT()
  if (count === 0) {
    return null
  }

  return (
    <p {...stylex.props(styles.fog)}>
      <span
        aria-hidden="true"
        {...stylex.props(styles.fogDot)}
      />
      {count === 1 ? t('chart.fogOne') : t('chart.fog', { count })}
    </p>
  )
}

/**
 * Whether a sea, a type or a saga is picked. With only a query, the line
 * under the field already says it finds nothing, and the field's × clears
 * it; with a pick, "Show all" clears the picks and the query together.
 */
function isPicked({ form, saga, sea }: PlaceParams): boolean {
  return [form, saga, sea].some((value) => value !== undefined)
}

/** How many places a sea holds. One and many are two sentences. */
function countOf(t: Translate, count: number): string {
  return count === 1 ?
      t('places.groupCountOne')
    : t('places.groupCount', { count })
}

/** One sea of the index: its shown stops, and how many it holds open. */
interface SeaGroup {
  sea: string
  stops: StopView[]
  total: number
}

/**
 * The shown stops by sea, the seas in the order the reader first reaches
 * them. The order is the open stops', so a pick never moves a sea, and a sea
 * with nothing shown leaves the page.
 */
function groupsOf(open: StopView[], shown: StopView[]): SeaGroup[] {
  const seas = [...new Set(open.map((stop) => stop.sea))]

  return seas.flatMap((sea) => {
    const stops = shown.filter((stop) => stop.sea === sea)

    return stops.length === 0 ?
        []
      : { sea, stops, total: open.filter((stop) => stop.sea === sea).length }
  })
}

/** One sea's stops, as plates. */
function Stops({
  needle,
  open,
  stops,
}: {
  needle: string
  open: StopView[]
  stops: StopView[]
}): ReactElement {
  return (
    <ol {...stylex.props(styles.grid)}>
      {stops.map((stop) => {
        return (
          <li
            key={stop.id}
            {...stylex.props(styles.item)}
          >
            <Entry
              highlight={matchFolded(stop, needle).highlight}
              number={open.indexOf(stop) + 1}
              stop={stop}
            />
          </li>
        )
      })}
    </ol>
  )
}

/**
 * One place, one link: its number on the route, its plate, its name with a
 * search match marked and the episode it first appears in. The drawing
 * leads.
 */
function Entry({
  highlight,
  number,
  stop,
}: {
  highlight: [number, number] | null
  number: number
  stop: StopView
}): ReactElement {
  const { locale, series } = useSeriesParams()
  const threshold = useThreshold()

  return (
    <Link
      params={{ series, locale, id: stop.id }}
      to="/$series/$locale/places/$id"
      {...stylex.props(styles.entry, styles.plate)}
    >
      <span {...stylex.props(styles.plateArt)}>
        <OpenPortPlate port={stop} />
      </span>
      <span {...stylex.props(styles.words)}>
        <span {...stylex.props(styles.name)}>
          <Marked
            span={highlight}
            text={stop.name}
          />
        </span>
        <span {...stylex.props(styles.meta)}>
          <span {...stylex.props(styles.number)}>
            {String(number).padStart(NUMBER_WIDTH, '0')}
          </span>
          <span {...stylex.props(styles.episode)}>
            {threshold('chart.opensAt', stop)}
          </span>
        </span>
      </span>
    </Link>
  )
}
