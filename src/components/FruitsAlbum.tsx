import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { SagaMarquee } from '~/components/SagaMarquee'
import {
  SpecimenBands,
  type SpecimenBandsProps,
} from '~/components/SpecimenBands'
import { useOpenEntries } from '~/lib/progress/openEntries'
import { sagaAnchor } from '~/lib/search/fruitParams'
import type { FruitPlateCount } from '~/lib/view/fruits'
import type { FruitMarqueeView, FruitView } from '~/lib/view/records'
import { space } from '~/styles/tokens.stylex'

/**
 * What the fruits page is built from: the album once it is here, the
 * marquee, the peek, and the picks the album reads from the address.
 */
export interface FruitsAlbumProps {
  album: SpecimenBandsProps['album']
  marquee: FruitMarqueeView | null
  onParams: SpecimenBandsProps['onParams']
  onRetry?: SpecimenBandsProps['onRetry']
  params: SpecimenBandsProps['params']
  peek: (handle: string) => Promise<FruitView>
  plates: FruitPlateCount[]
}

/**
 * The fruits page under its heading: the saga marquee over the album. With
 * no bookmark the server draws both at the end of the demo (#1432), so a
 * reader without one gets the same album, its start open.
 */
export function FruitsAlbum({
  marquee,
  onParams,
  params,
  ...sheet
}: FruitsAlbumProps): ReactElement {
  useOpenEntries(sheet.plates.reduce((sum, plate) => sum + plate.opened, 0))

  return (
    <div {...stylex.props(styles.album)}>
      <SagaMarquee
        link={{
          // The marquee's saga is the bookmark's, the saga view's last.
          hash: sagaAnchor(marquee?.group ?? 0),
          search: { ...params, view: 'saga' },
        }}
        marquee={marquee}
      />
      <SpecimenBands
        onParams={onParams}
        params={params}
        {...sheet}
      />
    </div>
  )
}

const styles = stylex.create({
  album: {
    gap: { 'default': space.xl, '@media (min-width: 40rem)': space.xl2 },
    display: 'grid',
  },
})
