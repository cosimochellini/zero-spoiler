/**
 * An ability's page under its back link: the stage every record with one
 * shares (`../-stage`), and the band of who uses it. Siblings of the route
 * module; the leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { tintOf } from '~/components/drawing'
import { OpenArt } from '~/components/FruitArt'
import { FruitEater } from '~/components/FruitEater'
import { onlyUnder, useSeriesOnlyT } from '~/i18n/LocaleContext'
import { useThreshold } from '~/lib/progress/BookmarkContext'
import { typeLabel } from '~/lib/search/abilityParams'
import type { AbilityView } from '~/lib/view/abilities'
import type { Slot } from '~/lib/view/records'
import { RecordStage } from '~/routes/$series/$locale/-stage'
import { Band } from '~/routes/$series/$locale/fruits/-$id.bands'
import { styles } from '~/routes/$series/$locale/fruits/-$id.styles'

const SERIES = 'hunter-x-hunter'

/**
 * The stage: the drawing large in a glow of its tint, the kind and the
 * episode it is first shown in, then the name, its Nen type as a chip when
 * the story told one by then, and the sentence.
 */
export function AbilityStage({
  peek,
  slot,
}: {
  peek: (handle: string) => Promise<AbilityView>
  slot: Slot<AbilityView>
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const threshold = onlyUnder(useThreshold(SERIES), SERIES)
  const gate = slot.open ? slot.record : slot.covered

  return (
    <RecordStage
      art={(record) => {
        return (
          <div {...stylex.props(styles.glow(tintOf(record.visual.tint)))}>
            <OpenArt
              always={false}
              glow
              morph={false}
              record={record}
            />
          </div>
        )
      }}
      chips={(record) =>
        record.nen === undefined ?
          []
        : [{ label: `${t('character.nen')} · ${typeLabel(t, record.nen)}` }]
      }
      fogged={{
        description: threshold('ability.foggedDescription', gate),
        name: t('ability.foggedName'),
      }}
      kind={t('kind.ability')}
      opensAt={threshold('ability.opensAt', gate)}
      peek={peek}
      slot={slot}
    />
  )
}

/**
 * Who uses it: the users the reader has reached, each a crest and a name
 * that lead to their page. A user past the bookmark is not sent, so it is
 * neither shown nor counted. Nothing under fog.
 */
export function UsersBand({
  slot,
}: {
  slot: Slot<AbilityView>
}): null | ReactElement {
  const t = useSeriesOnlyT(SERIES)
  if (!slot.open) {
    return null
  }
  const { users } = slot.record

  return (
    <Band
      id="users"
      lede={t('ability.usersLede')}
      title={t('ability.usersTitle')}
    >
      {users.length === 0 ?
        <p {...stylex.props(styles.lede)}>{t('ability.usersNone')}</p>
      : <ul {...stylex.props(styles.chips)}>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <FruitEater
                  eater={user}
                  highlight={null}
                  more={0}
                  said=""
                />
              </li>
            )
          })}
        </ul>
      }
    </Band>
  )
}
