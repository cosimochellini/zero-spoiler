import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId } from 'react'

import { styles } from '~/components/PortEntry.styles'
import { RecordTile } from '~/components/RecordTile'
import type { RecordView, Slot } from '~/lib/view/records'

/** The records filed, how to peek at a covered one, and the band's title. */
export interface FiledHereProps {
  filed: Slot<RecordView>[]
  peekRecord: (handle: string) => Promise<RecordView>
  title: string
}

/**
 * The records the archive files at a place, or the places a ship reaches.
 * Each tile keeps its own fog: a swordsman who reaches the restaurant four
 * episodes after the crew does is a covered tile beside an open one. An empty
 * list draws nothing, heading included: a heading over nothing reads as
 * missing data.
 *
 * A section of the band under the entry, titled as the page's other bands
 * are: the tiles run the page's full width rather than down the entry's
 * column, which ran several screens past its plate (#1576).
 */
export function FiledHere({
  filed,
  peekRecord,
  title,
}: FiledHereProps): null | ReactElement {
  const titleId = useId()

  if (filed.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={titleId}
      {...stylex.props(styles.band)}
    >
      <h2
        id={titleId}
        {...stylex.props(styles.bandTitle)}
      >
        {title}
      </h2>
      <ul {...stylex.props(styles.crew)}>
        {filed.map((slot) => {
          return (
            <li
              key={
                slot.open ?
                  `open-${slot.record.id}`
                : `fog-${slot.covered.handle}`
              }
              {...stylex.props(styles.crewItem)}
            >
              <RecordTile
                peek={peekRecord}
                slot={slot}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
