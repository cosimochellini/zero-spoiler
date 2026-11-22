import * as stylex from '@stylexjs/stylex'
import type { ReactElement, ReactNode } from 'react'

import { Covered, Curtain } from '~/components/SpoilerVeil'
import { veilStyles as styles } from '~/components/SpoilerVeil.styles'
import { useVeilPeek, type VeilSlot } from '~/components/useVeilPeek'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { Gated } from '~/lib/progress/spoiler'

/** One curtain over a record page's two halves, as its caller lays it out. */
export interface StageVeil<T> {
  /** The drawing half, with the curtain's control centred in it. */
  drawing: (
    placeholder: ReactNode,
    children: (record: T) => ReactNode,
  ) => ReactElement
  /** For the section holding both halves: it bounds the control's hit area. */
  stage: stylex.StyleXStyles
  /** The words half. Focus lands here once the fog is lifted. */
  words: (
    placeholder: ReactNode,
    children: (record: T) => ReactNode,
  ) => ReactElement
}

/**
 * A record page's own curtain: one control for the drawing and the words
 * (#1376). The page prints the threshold once, in its meta line, so the
 * control shows the verb alone, in the empty drawing frame, and its hit area
 * stretches over the whole section: a tap on the blurred words lifts too.
 *
 * A hook and not a component, because the two halves are apart in the
 * caller's layout with the meta line between them, and one lift has to feed
 * both. Neither half is in the HTML while the slot is covered, exactly as
 * under two veils.
 */
export function useStageVeil<T extends Gated>(
  slot: VeilSlot<T>,
  peek: (handle: string) => Promise<T>,
): StageVeil<T> {
  const threshold = useThreshold()
  // One press, as a block veil: the reader chose this page.
  const { button, shown, state } = useVeilPeek(slot, peek, { twoStep: false })
  const visible = shown !== null

  return {
    stage: styles.stage,
    drawing: (placeholder, children) => {
      return (
        // Not positioned, and neither is the control: the section is the
        // containing block of the control's stretched hit area.
        <div {...stylex.props(styles.stageFrame)}>
          <Covered
            // Focus follows into the words, not into a drawing.
            control={undefined}
            density="block"
            strength="media"
            sx={styles.stageCell}
            visible={visible}
          >
            {shown === null ? placeholder : children(shown)}
          </Covered>
          {slot.open ? null : (
            <Curtain
              button={button}
              density="stage"
              lifted={visible}
              notice={threshold('veil.locked', slot.covered)}
              state={state}
            />
          )}
        </div>
      )
    },
    words: (placeholder, children) => {
      return (
        <Covered
          control={slot.open ? undefined : button.ref}
          density="block"
          strength="text"
          visible={visible}
        >
          {shown === null ? placeholder : children(shown)}
        </Covered>
      )
    },
  }
}
