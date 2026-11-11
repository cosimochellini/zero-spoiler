import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { type Choice, ChoiceGroup } from '~/components/ChoiceGroup'
import { ControlBar } from '~/components/ControlBar'
import { SearchField } from '~/components/SearchField'
import { searchStyles } from '~/components/SearchField.styles'
import { styles } from '~/components/SpecimenBands.styles'
import { useSettled } from '~/components/useSettled'
import { useSeriesOnlyT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import {
  type AbilityParams,
  type AbilityType,
  parseAbilityParams,
  typeLabel,
  typeOf,
} from '~/lib/search/abilityParams'
import type { AbilityBandView } from '~/lib/view/abilities'

const SERIES = 'hunter-x-hunter'

// The same delay the other listings announce their count with.
const ANNOUNCE_DELAY_MS = 250

/** A chip: a plate's type, or every plate. */
type Pick = 'all' | AbilityType

/** The chips: every plate on the page, each with its open abilities. */
function typeChoices(
  t: Translate<typeof SERIES>,
  bands: AbilityBandView[],
): Choice<Pick>[] {
  return [
    {
      count: bands.reduce((sum, band) => sum + band.open.length, 0),
      label: t('abilities.all'),
      value: 'all',
    },
    ...bands.map((band) => ({
      count: band.open.length,
      label: typeLabel(t, typeOf(band)),
      value: typeOf(band),
    })),
  ]
}

/**
 * The bar: the search field and its count, and a chip per plate on the
 * page, each with its open abilities, "all" first. Both live in the address.
 */
export function AbilityControls({
  bands,
  count,
  fieldId,
  onParams,
  params,
}: {
  bands: AbilityBandView[]
  /** The open abilities the query finds on the plates shown. */
  count: number
  fieldId: string
  onParams: (next: AbilityParams, replace: boolean) => void
  /** The picks, a type no open plate holds already left out. */
  params: AbilityParams
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const query = (params.q ?? '').trim()
  const pick: Pick = params.type ?? 'all'
  const choices = typeChoices(t, bands)
  // Every pick goes through the parser, so a default ("all", a blank
  // query) is left out of the address rather than written into it.
  const move = (next: Record<string, unknown>, replace: boolean): void => {
    onParams(parseAbilityParams({ ...params, ...next }), replace)
  }

  return (
    <ControlBar
      searchLabel={t('abilities.searchOpen')}
      summary={[
        pick === 'all' ? t('abilities.all') : typeLabel(t, pick),
        ...(query === '' ? [] : [`“${query}”`]),
      ].join(' · ')}
      toggleLabel={t('abilities.controls')}
    >
      <AbilitySearch
        count={count}
        fieldId={fieldId}
        onQuery={(next) => {
          move({ q: next }, true)
        }}
        query={params.q ?? ''}
        total={choices.find((choice) => choice.value === pick)?.count ?? 0}
      />
      <div {...stylex.props(styles.choices)}>
        <ChoiceGroup
          choices={choices}
          legend={t('abilities.typeLegend')}
          look="chips"
          name={`${fieldId}-type`}
          onChoose={(next) => {
            move({ type: next }, false)
          }}
          value={pick}
        />
      </div>
    </ControlBar>
  )
}

/**
 * The search field, and the line under it: how many open abilities are
 * left of the picked chip's number, or that the query finds none. It
 * settles before it is announced.
 */
function AbilitySearch({
  count,
  fieldId,
  onQuery,
  query,
  total,
}: {
  count: number
  fieldId: string
  onQuery: (query: string) => void
  query: string
  total: number
}): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const trimmed = query.trim()
  const empty = trimmed !== '' && count === 0
  const status = useSettled(
    empty ?
      t('abilities.noMatch', { query: trimmed })
    : t('abilities.shown', { count, total }),
    ANNOUNCE_DELAY_MS,
  )

  return (
    <SearchField
      clearLabel={t('abilities.searchClear')}
      fieldId={fieldId}
      label={t('abilities.searchLabel')}
      onQuery={onQuery}
      placeholder={t('abilities.searchPlaceholder')}
      query={query}
      status={
        <p
          aria-live="polite"
          {...stylex.props(
            searchStyles.status,
            empty && searchStyles.statusEmpty,
          )}
        >
          {status}
        </p>
      }
    />
  )
}
