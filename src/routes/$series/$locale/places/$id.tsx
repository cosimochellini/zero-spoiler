import * as stylex from '@stylexjs/stylex'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement, ReactNode } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { VisitorBanner } from '~/components/VisitorBanner'
import { useT } from '~/i18n/LocaleContext'
import { PageUnitContext } from '~/lib/progress/BookmarkContext'
import type { PageUnit } from '~/lib/view/records'
import { recordHead } from '~/routes/$locale/-head'
import { RecordBackLink } from '~/routes/$series/$locale/-back'
import {
  orNotFound,
  recordArgs,
  requirePage,
} from '~/routes/$series/$locale/-found'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { recordStyles } from '~/routes/$series/$locale/-record.styles'
import { liftPort, liftRecord, liftShip, loadPlace } from '~/server/api'
import { settleStyles } from '~/styles/settle'

import { DrawingsBand, MapBand } from './-$id.bands'
import { PlaceDiptych, ShipDiptych } from './-$id.entry'

// The bands under the first in DOM order. The back link and the first band
// are the page's header, there from the first frame. Named rather than
// counted at the call, so a band inserted in the middle is one edit here and
// not three down the page.
const BAND = { map: 0, drawings: 1 } as const

export const Route = createFileRoute('/$series/$locale/places/$id')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'places')
  },
  // The one decision the page turns on is made on the server, from the
  // bookmark in the request: the document title must not carry a name the
  // reader has not reached, and a title is set before any component runs.
  // Awaited whole: the map and the drawings are the page, not an extra.
  loader: async (match) => orNotFound(await loadPlace(recordArgs(match))),
  head: (match) => recordHead(match, 'places') ?? {},
  component: PlacePage,
  notFoundComponent: PlaceNotFound,
})

/** A place's page, as far as its unit goes. */
interface PlaceUnit {
  detail: PageUnit
}

/** A ship's page, as far as its unit goes. */
interface ShipUnit {
  ship: PageUnit
}

/** What says which unit a place's or a ship's page counts in (#1431). */
function unitOf(page: PlaceUnit | ShipUnit): PageUnit {
  return 'ship' in page ? page.ship : page.detail
}

/**
 * A place's page, and a ship's, which is served from the same address.
 *
 * Down a place's page: first the plate beside the entry, kind and episode
 * in mono, the name as the only display line, the sentence, the facts and
 * the log entry. Under both halves, full width, the records found there and
 * the characters who come from it, so the two halves end together (#1576).
 * Then the place on the map: its stop number and the later visits the reader
 * has reached, beside the stretch of the sea chart around it. Last, every
 * drawing the place has had up to the bookmark, when there is more than one.
 *
 * A ship's page has her plate beside her entry (who designed her, where the
 * crew receives her, her fate, each as far as the bookmark), the places she
 * reaches under both, then her drawings. No map: a ship is not a stop.
 *
 * Under fog the plate and the entry are covered together, the title is
 * generic, and nothing places or draws it: the stop number and the episode
 * stay, because "stop 23 of 39, episode 336" is the promise and not the
 * spoiler.
 */
function PlacePage(): ReactElement {
  const page = Route.useLoaderData()
  const peekPort = usePeek(liftPort)
  const peekShip = usePeek(liftShip)
  const peekRecord = usePeek(liftRecord)
  const place = 'detail' in page ? page.detail : null
  const { unit } = unitOf(page)

  return (
    <PageUnitContext value={unit}>
      <main
        id="content"
        {...stylex.props(recordStyles.page)}
      >
        <p {...stylex.props(recordStyles.back)}>
          <RecordBackLink section="places" />
        </p>

        <VisitorBanner
          slot={'ship' in page ? page.ship.slot : page.detail.slot}
        />

        {'ship' in page ?
          <ShipDiptych
            peek={peekShip}
            peekRecord={peekRecord}
            slot={page.ship.slot}
          />
        : <PlaceDiptych
            detail={page.detail}
            peek={peekPort}
            peekRecord={peekRecord}
          />
        }

        {place === null ? null : (
          <Band at={BAND.map}>
            <MapBand detail={place} />
          </Band>
        )}

        <Band at={BAND.drawings}>
          <DrawingsBand detail={'ship' in page ? page.ship : page.detail} />
        </Band>
      </main>
    </PageUnitContext>
  )
}

/** The band's turn to settle, and what it holds. */
interface BandProps {
  at: number
  children: ReactNode
}

/** One band, settling into place in its turn. */
function Band({ at, children }: BandProps): ReactElement {
  return (
    <div {...stylex.props(settleStyles.band, settleStyles.at(at))}>
      {children}
    </div>
  )
}

/** `/places/<not-a-place>`: says so, and points at the places page. */
function PlaceNotFound(): ReactElement {
  const t = useT()

  return (
    <ArchivePage
      count={t('place.notFoundBody')}
      title={t('place.notFoundTitle')}
    >
      <p>
        <RecordBackLink section="places" />
      </p>
    </ArchivePage>
  )
}
