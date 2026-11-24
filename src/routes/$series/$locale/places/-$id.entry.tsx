/**
 * The entry diptych of a place's or a ship's page: the plate, and
 * everything the fog decides beside it, then the records it names in a band
 * of their own under both. Laid out as a character's dossier is, in the same
 * sheet, because the pages are one macrostructure.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever this page's first band; the leading `-` keeps the file out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ComponentType, ReactElement } from 'react'

import { FiledHere } from '~/components/FiledHere'
import { PortFacts, ShipFacts } from '~/components/PortFacts'
import { OpenPortPlate, PortPlate } from '~/components/PortPlate'
import { styles as bandStyles } from '~/components/SpecimenBands.styles'
import { type StageVeil, useStageVeil } from '~/components/useStageVeil'
import {
  onlyUnder,
  useSeriesOnlyT,
  useSeriesT,
  useT,
} from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { Gated } from '~/lib/progress/spoiler'
import type { PlaceDetail } from '~/lib/view/places'
import type { PortView, RecordView, ShipView, Slot } from '~/lib/view/records'
import { styles } from '~/routes/$series/$locale/characters/-$id.styles'

/** The words a place's entry and a ship's differ by. */
interface EntryWords {
  description: string
  kind: string
  name: string
  /** When the record opens, in the reader's unit. */
  opens: string
}

/**
 * A place's words, or a ship's. A ship is One Piece's, in its words: only its
 * pages draw one. "Episode 324" rather than "first seen" for a ship: the
 * Sunny is unveiled three episodes before her name, and her entry opens at
 * the name.
 */
function useEntryWords(kind: 'place' | 'ship', gate: Gated): EntryWords {
  const t = useT()
  const threshold = useThreshold()
  const onePiece = useSeriesT('one-piece')
  const onePieceThreshold = useThreshold('one-piece')

  if (kind === 'place') {
    return {
      kind: t('kind.place'),
      opens: threshold('places.firstSeen', gate),
      name: t('places.foggedName'),
      description: threshold('places.foggedDescription', gate),
    }
  }
  const say = onlyUnder(onePiece, 'one-piece')
  const at = onlyUnder(onePieceThreshold, 'one-piece')
  return {
    kind: say('kind.ship'),
    opens: at('chart.opensAt', gate),
    name: say('ship.foggedName'),
    description: at('ship.foggedDescription', gate),
  }
}

/** A place's or a ship's record, as the entry draws it. */
export type Entry = RecordView & { summary: string }

/** How to lift the fog on a record the entry names. */
export type PeekRecord = (handle: string) => Promise<RecordView>

/** One titled list of records in the band under the entry. */
export interface FiledList {
  filed: Slot<RecordView>[]
  title: string
}

/** What the band is given: the record, how to lift its fog, and its body. */
export interface EntryProps<T extends Entry> {
  /** Its facts and its log entry, beside the plate once open. */
  Body: ComponentType<{ record: T }>
  kind: 'place' | 'ship'
  /**
   * The records it names, under the plate and the entry once open: never
   * drawn under fog, so they add nothing to a covered page.
   */
  lists: (record: T) => FiledList[]
  peek: (handle: string) => Promise<T>
  peekRecord: PeekRecord
  slot: Slot<T>
}

/**
 * The plate beside the entry, then the records it names. The two halves sit
 * under one curtain on the same slot, because a covered page must carry
 * neither the drawing nor the words in its HTML: blurring either one would
 * leave the answer in the page source. The lists under them open with the
 * same lift and are left out until then: page bands, each with its own h2,
 * rather than a tail of the entry's column, which ran several screens past
 * the plate on a busy place (#1576).
 */
function EntryDiptych<T extends Entry>(props: EntryProps<T>): ReactElement {
  const veil = useStageVeil(props.slot, props.peek)

  return (
    <>
      <section {...stylex.props(styles.diptych, veil.stage)}>
        {veil.drawing(
          // A bare plate under fog: the drawing and its colour stay out of the
          // served HTML along with the name.
          <div {...stylex.props(styles.plate)}>
            <PortPlate />
          </div>,
          (record) => {
            return (
              <div {...stylex.props(styles.plate)}>
                <OpenPortPlate port={record} />
              </div>
            )
          },
        )}
        <EntryColumn
          {...props}
          veil={veil}
        />
      </section>
      {veil.below((record) => {
        return props.lists(record).map((list) => {
          return (
            <FiledHere
              key={list.title}
              filed={list.filed}
              peekRecord={props.peekRecord}
              title={list.title}
            />
          )
        })
      })}
    </>
  )
}

/**
 * The words half: the kind and the episode in mono, then everything the fog
 * decides. The meta line sits outside the veil on purpose: "place, episode
 * 336" is the promise the page makes to a reader who has not got there yet.
 */
function EntryColumn<T extends Entry>({
  Body,
  kind,
  slot,
  veil,
}: EntryProps<T> & { veil: StageVeil<T> }): ReactElement {
  const gate = slot.open ? slot.record : slot.covered
  const words = useEntryWords(kind, gate)

  return (
    <div {...stylex.props(styles.dossier)}>
      <p {...stylex.props(bandStyles.meta)}>
        <span {...stylex.props(styles.kind)}>{words.kind}</span>
        <span {...stylex.props(bandStyles.episode)}>{words.opens}</span>
      </p>

      {veil.words(
        <div {...stylex.props(styles.words)}>
          <h1 {...stylex.props(styles.name)}>{words.name}</h1>
          <p {...stylex.props(styles.summary)}>{words.description}</p>
        </div>,
        (record) => {
          return (
            <div {...stylex.props(styles.words)}>
              <h1 {...stylex.props(styles.name)}>{record.name}</h1>
              <p {...stylex.props(styles.summary)}>{record.summary}</p>
              <Body record={record} />
            </div>
          )
        },
      )}
    </div>
  )
}

/** A port's facts and its log entry. */
function PortBody({ record: port }: { record: PortView }): null | ReactElement {
  return port.dossier === null ?
      null
    : <>
        <PortFacts dossier={port.dossier} />
        <p {...stylex.props(styles.entry)}>{port.dossier.log}</p>
      </>
}

/** Every record of a list open: the server sends only those reached. */
function allOpen(records: RecordView[]): Slot<RecordView>[] {
  return records.map((record) => ({ open: true, record }))
}

/**
 * A place's entry: the diptych with its facts and its log entry, then the
 * records found there and the characters who come from it. Only the natives
 * the reader has reached are sent, so each is open and none is counted.
 */
export function PlaceEntry({
  detail,
  peek,
  peekRecord,
}: {
  detail: PlaceDetail
  peek: (handle: string) => Promise<PortView>
  peekRecord: PeekRecord
}): ReactElement {
  const t = useT()

  return (
    <EntryDiptych
      Body={PortBody}
      kind="place"
      lists={(port) => {
        return [
          {
            title: t('places.filedHere'),
            filed: port.dossier?.filedHere ?? [],
          },
          { title: t('place.nativesTitle'), filed: allOpen(detail.natives) },
        ]
      }}
      peek={peek}
      peekRecord={peekRecord}
      slot={detail.slot}
    />
  )
}

/** A ship's facts and her log entry. */
function ShipBody({ record: ship }: { record: ShipView }): ReactElement {
  return (
    <>
      <ShipFacts entry={ship.dossier} />
      <p {...stylex.props(styles.entry)}>{ship.dossier.log}</p>
    </>
  )
}

/**
 * A ship's entry: the diptych with her facts and her log entry, then the
 * places she reaches. Only the places the reader has reached are sent, so
 * each is open and none is counted.
 */
export function ShipEntry({
  peek,
  peekRecord,
  slot,
}: {
  peek: (handle: string) => Promise<ShipView>
  peekRecord: PeekRecord
  slot: Slot<ShipView>
}): ReactElement {
  // A ship is One Piece's: only its pages draw one.
  const t = useSeriesOnlyT('one-piece')

  return (
    <EntryDiptych
      Body={ShipBody}
      kind="ship"
      lists={(ship) => {
        return [{ title: t('ships.ports'), filed: allOpen(ship.dossier.ports) }]
      }}
      peek={peek}
      peekRecord={peekRecord}
      slot={slot}
    />
  )
}
