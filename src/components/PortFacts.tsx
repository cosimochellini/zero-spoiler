import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/PortEntry.styles'
import { usePlaceLabels } from '~/components/usePlaceLabels'
import { useSeriesOnlyT, useSeriesT } from '~/i18n/LocaleContext'
import type { PortDossier, ShipEntry } from '~/lib/view/records'

interface PortFactsProps {
  dossier: PortDossier
}

/**
 * The four facts, as a definition list. The arc is named directly rather
 * than veiled: an arc opens no later than any place filed under it (the
 * data test holds that), so an open place always has an open arc.
 */
export function PortFacts({ dossier }: PortFactsProps): ReactElement {
  const t = useSeriesT()
  const { formOf, region, regionOf } = usePlaceLabels(dossier.words)

  return (
    <dl {...stylex.props(styles.facts)}>
      <Fact
        label={region}
        value={dossier.seaName ?? regionOf(dossier.sea)}
      />
      <Fact
        label={t('places.form')}
        value={formOf(dossier.form)}
      />
      {dossier.arc === null ? null : (
        <Fact
          label={t('places.arc')}
          value={dossier.arc}
        />
      )}
      <Fact
        label={t('places.landmark')}
        value={dossier.landmark}
      />
    </dl>
  )
}

interface ShipFactsProps {
  entry: ShipEntry
}

/**
 * A ship's facts, in the same ledger as a port's. The fate is the latest one
 * the reader has reached; with none reached there is no row, so nothing on
 * the page says one is coming.
 */
export function ShipFacts({ entry }: ShipFactsProps): ReactElement {
  const t = useSeriesOnlyT('one-piece')

  return (
    <dl {...stylex.props(styles.facts)}>
      <Fact
        label={t('ships.builder')}
        value={entry.builder}
      />
      {entry.launched === null ? null : (
        <Fact
          label={t('ships.launched')}
          value={entry.launched}
        />
      )}
      {entry.fate === undefined ? null : (
        <Fact
          label={t('ships.fate')}
          value={entry.fate}
        />
      )}
    </dl>
  )
}

interface FactProps {
  label: string
  value: string
}

/** One row of the ledger: the term in small caps, the value beside it. */
export function Fact({ label, value }: FactProps): ReactElement {
  return (
    <div {...stylex.props(styles.fact)}>
      <dt {...stylex.props(styles.factLabel)}>{label}</dt>
      <dd {...stylex.props(styles.factValue)}>{value}</dd>
    </div>
  )
}
