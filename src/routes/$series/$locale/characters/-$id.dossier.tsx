/**
 * The dossier diptych of the character page: the crest, and everything the
 * fog decides beside it.
 *
 * A sibling of the route module rather than a shared component because it is
 * only ever this page's first band; the leading `-` keeps the file out of the
 * generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { CharacterCrest } from '~/components/CharacterCrest'
import { CharacterFacts } from '~/components/CharacterFacts'
import { styles as bandStyles } from '~/components/SpecimenBands.styles'
import { useKindLabel } from '~/components/useKindLabel'
import { type StageVeil, useStageVeil } from '~/components/useStageVeil'
import { useT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { CharacterDetail, Slot } from '~/lib/view/records'
import { morphPart } from '~/styles/morph'

import { styles } from './-$id.styles'

/** The open half of the dossier: the record, with its summary. */
export type DossierRecord =
  CharacterDetail['slot'] extends Slot<infer T> ? T : never

/** A character's page, and how to lift its record from under the fog. */
interface DossierDiptychProps {
  detail: CharacterDetail
  peek: (handle: string) => Promise<DossierRecord>
}

/**
 * The crest beside the dossier: the page's first diptych.
 *
 * The two halves sit under one curtain on the same slot, because a covered
 * page must carry neither the drawing nor the words in its HTML – blurring
 * either one would leave the answer in the page source.
 */
export function DossierDiptych({
  detail,
  peek,
}: DossierDiptychProps): ReactElement {
  const veil = useStageVeil(detail.slot, peek)

  return (
    <section {...stylex.props(styles.diptych, veil.stage)}>
      <CrestPlate veil={veil} />
      <DossierColumn
        detail={detail}
        veil={veil}
      />
    </section>
  )
}

/** The veil the seal is drawn behind. */
interface CrestPlateProps {
  veil: StageVeil<DossierRecord>
}

/** The seal, framed. Under fog it is drawn empty rather than blurred. */
function CrestPlate({ veil }: CrestPlateProps): ReactElement {
  return veil.drawing(
    // A bare seal under fog: the drawing and its colour stay out of the
    // served HTML along with the name.
    <div {...stylex.props(styles.plate)}>
      <CharacterCrest />
    </div>,
    (record) => {
      return (
        <div
          {...stylex.props(
            styles.plate,
            morphPart('character', record.id, 'art'),
          )}
        >
          <CharacterCrest visual={record.visual} />
        </div>
      )
    },
  )
}

/** A character's page, and the veil its words are behind. */
interface DossierColumnProps extends CrestPlateProps {
  detail: CharacterDetail
}

/**
 * The words half: the kind and the threshold in mono, then everything the
 * fog decides.
 *
 * The meta line sits outside the veil on purpose – "character, episode 130"
 * is the promise the page makes to a reader who has not got there yet, and
 * covering it would leave them with nothing at all.
 */
function DossierColumn({ detail, veil }: DossierColumnProps): ReactElement {
  const t = useT()
  const threshold = useThreshold()
  const kindLabel = useKindLabel()
  const filed = detail.slot.open ? detail.slot.record : detail.slot.covered

  return (
    <div {...stylex.props(styles.dossier)}>
      <p {...stylex.props(bandStyles.meta)}>
        <span {...stylex.props(styles.kind)}>{kindLabel(filed.kind)}</span>
        <span {...stylex.props(bandStyles.episode)}>
          {threshold('character.opensAt', filed)}
        </span>
      </p>

      {veil.words(
        <div {...stylex.props(styles.words)}>
          <h1 {...stylex.props(styles.name)}>{t('character.foggedName')}</h1>
          <p {...stylex.props(styles.summary)}>
            {threshold('character.foggedDescription', filed)}
          </p>
        </div>,
        (record) => {
          return (
            <DossierWords
              detail={detail}
              record={record}
            />
          )
        },
      )}
    </div>
  )
}

/** A character's page, and their open record. */
interface DossierWordsProps {
  detail: CharacterDetail
  record: DossierRecord
}

/** The name, the role, the sentence, the facts and the log entry. */
function DossierWords({ detail, record }: DossierWordsProps): ReactElement {
  return (
    <div {...stylex.props(styles.words)}>
      <h1
        {...stylex.props(
          styles.name,
          morphPart('character', record.id, 'name'),
        )}
      >
        {record.name}
      </h1>
      {record.role === undefined ? null : (
        <p {...stylex.props(styles.role)}>{record.role}</p>
      )}
      <p {...stylex.props(styles.summary)}>{record.summary}</p>
      <CharacterFacts facts={detail.facts} />
      {detail.log === null ? null : (
        <p {...stylex.props(styles.entry)}>{detail.log}</p>
      )}
    </div>
  )
}
