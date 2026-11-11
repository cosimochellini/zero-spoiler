/**
 * The top of a record's page that sets one drawing under the lights: a
 * devil fruit's, a Nen ability's. A sibling of the route modules; the
 * leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { FruitFrame } from '~/components/FruitFrame'
import { SpoilerVeil } from '~/components/SpoilerVeil'
import type { RecordView, Slot } from '~/lib/view/records'
import { morphPart } from '~/styles/morph'

import { styles } from './fruits/-$id.styles'

/** One chip under the name; `accent` sets it in the accent ink. */
export interface StageChip {
  accent?: boolean
  label: string
}

/** What a record's stage is told: its record, and its words. */
export interface RecordStageProps<T extends RecordView> {
  /** The open record's drawing, in its frame. */
  art: (record: T) => ReactNode
  /** The chips under an open record's name, in order. */
  chips: (record: T) => StageChip[]
  /** What the stage says under fog: a name that names nothing, and a line. */
  fogged: { description: string; name: string }
  /** The kind, printed outside the veil. */
  kind: string
  /** Names the open record's name for the move from its tile (a fruit's). */
  morph?: 'fruit'
  /** The threshold, printed outside the veil: the page's promise. */
  opensAt: string
  peek: (handle: string) => Promise<T>
  slot: Slot<T>
}

/**
 * The stage: the drawing large, then the meta line, the name at display
 * size, its chips and the sentence.
 *
 * The meta line sits outside the veil on purpose: "a devil fruit, episode
 * 462" is the promise the page makes to a reader who has not got there yet.
 * Under fog the rest is veiled and the frame is empty.
 */
export function RecordStage<T extends RecordView & { summary: string }>({
  art,
  chips,
  fogged,
  kind,
  morph,
  opensAt,
  peek,
  slot,
}: RecordStageProps<T>): ReactElement {
  return (
    <section {...stylex.props(styles.stage)}>
      <div {...stylex.props(styles.drawing)}>
        <SpoilerVeil
          density="block"
          lead
          peek={peek}
          placeholder={<FruitFrame />}
          slot={slot}
          strength="media"
        >
          {art}
        </SpoilerVeil>
      </div>

      <div {...stylex.props(styles.words)}>
        <p {...stylex.props(styles.meta)}>
          <span {...stylex.props(styles.kind)}>{kind}</span>
          <span {...stylex.props(styles.episode)}>{opensAt}</span>
        </p>

        <SpoilerVeil
          lead
          peek={peek}
          placeholder={
            <>
              <h1 {...stylex.props(styles.name)}>{fogged.name}</h1>
              <p {...stylex.props(styles.summary)}>{fogged.description}</p>
            </>
          }
          slot={slot}
        >
          {(record) => {
            return (
              <StageWords
                chips={chips(record)}
                morph={morph}
                record={record}
              />
            )
          }}
        </SpoilerVeil>
      </div>
    </section>
  )
}

/** An open record's name, its chips and its sentence. */
function StageWords({
  chips,
  morph,
  record,
}: {
  chips: StageChip[]
  morph: 'fruit' | undefined
  record: RecordView & { summary: string }
}): ReactElement {
  return (
    <>
      <h1
        {...stylex.props(
          styles.name,
          morph !== undefined && morphPart(morph, record.id, 'name'),
        )}
      >
        {record.name}
      </h1>
      {chips.length === 0 ? null : (
        <ul {...stylex.props(styles.chips)}>
          {chips.map((chip) => {
            return (
              <li
                key={chip.label}
                {...stylex.props(
                  styles.chip,
                  chip.accent === true && styles.sagaChip,
                )}
              >
                {chip.label}
              </li>
            )
          })}
        </ul>
      )}
      <p {...stylex.props(styles.summary)}>{record.summary}</p>
    </>
  )
}
