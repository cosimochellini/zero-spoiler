import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { styles } from '~/components/SpecimenBands.styles'
import { stickyStyles } from '~/styles/sticky'

/**
 * A plate's label, its heading and the sentence under it, if it has one: a
 * fruit plate's and an ability plate's.
 */
export function PlateHead({
  headingId,
  label,
  lede,
  title,
}: {
  headingId: string
  label: string
  lede?: string | undefined
  title: string
}): ReactElement {
  return (
    <>
      <div
        {...stylex.props(
          stickyStyles.bar,
          stickyStyles.underBar,
          styles.plateHead,
        )}
      >
        <p {...stylex.props(styles.plateNumber)}>{label}</p>
        <h2
          id={headingId}
          {...stylex.props(styles.plateTitle)}
        >
          {title}
        </h2>
      </div>
      {lede === undefined ? null : (
        <p {...stylex.props(styles.plateLede)}>{lede}</p>
      )}
    </>
  )
}
