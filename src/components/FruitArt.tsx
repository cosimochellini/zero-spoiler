import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { FruitFrame } from '~/components/FruitFrame'
import { useDrawing } from '~/lib/view/drawings'
import type { RecordView } from '~/lib/view/records'
import { morphPart, useTravels } from '~/styles/morph'

/**
 * An open fruit's drawing, or a Nen ability's, in a specimen frame: asked for
 * once it nears the screen, and named for the move to the fruit's page while
 * it is the fruit travelling (or `always`). A second drawing of the fruit on
 * the page passes `morph={false}`, and so does every ability: a name may be
 * on one element of a page only, and only a fruit travels.
 */
export function OpenArt({
  always,
  glow = false,
  morph = true,
  record,
}: {
  always: boolean
  glow?: boolean
  morph?: boolean
  record: Pick<RecordView, 'id' | 'visual'>
}): ReactElement {
  const travels = (useTravels('fruit', record.id) && morph) || always
  const { ref, strokes } = useDrawing(record.id, record.visual)

  return (
    <div
      ref={ref}
      {...stylex.props(travels && morphPart('fruit', record.id, 'art'))}
    >
      <FruitFrame
        glow={glow}
        visual={{ ...record.visual, strokes }}
      />
    </div>
  )
}
