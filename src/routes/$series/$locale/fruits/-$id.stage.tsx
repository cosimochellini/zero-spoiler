/**
 * The top of a fruit's page: its drawing, name and story, on the stage every
 * record with one shares (`../-stage`).
 *
 * Siblings of the route module, like the bands under them; the leading `-`
 * keeps the file out of the generated route tree.
 */
import type { ReactElement } from 'react'

import { onlyUnder, useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { TranslationKey } from '~/i18n/types'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import type { FruitDetail, FruitForm, FruitView } from '~/lib/view/records'
import { RecordStage } from '~/routes/$series/$locale/-stage'

import { StageArt } from './-$id.art'

const FORM_KEY: Record<FruitForm, TranslationKey<'one-piece'>> = {
  logia: 'fruitForm.logia',
  paramecia: 'fruitForm.paramecia',
  zoan: 'fruitForm.zoan',
}

/**
 * The stage: the drawing large in a glow of its own tint, drawing itself in
 * on arrival, then the name at display size, its kind and its saga, and the
 * sentence. Under fog no saga is named.
 */
export function StageBand({
  detail,
  peek,
}: {
  detail: FruitDetail
  peek: (handle: string) => Promise<FruitView>
}): ReactElement {
  const t = useSeriesOnlyT('one-piece')
  const threshold = onlyUnder(useThreshold('one-piece'), 'one-piece')
  const { saga, slot } = detail
  const gate = slot.open ? slot.record : slot.covered

  return (
    <RecordStage
      art={(record) => {
        return (
          <StageArt
            key={record.id}
            drawings={detail.drawings}
            record={record}
          />
        )
      }}
      chips={(record) => [
        { label: `${t('fruit.form')} · ${t(FORM_KEY[record.form])}` },
        ...(saga === null ? [] : [{ accent: true, label: saga }]),
      ]}
      fogged={{
        description: threshold('fruit.foggedDescription', gate),
        name: t('fruit.foggedName'),
      }}
      kind={t('kind.fruit')}
      morph="fruit"
      opensAt={threshold('fruit.opensAt', gate)}
      peek={peek}
      slot={slot}
    />
  )
}
