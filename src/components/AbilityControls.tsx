import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { type Choice, ChoiceGroup } from '~/components/ChoiceGroup'
import { ControlBar } from '~/components/ControlBar'
import { SearchField, SearchStatus } from '~/components/SearchField'
import { styles } from '~/components/SpecimenBands.styles'
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

/** The collapsed bar's line: the picked chip, then the query if any. */
function summaryOf(
  t: Translate<typeof SERIES>,
  pick: Pick,
  trimmed: string,
): string {
  const chip = pick === 'all' ? t('abilities.all') : typeLabel(t, pick)
  return trimmed === '' ? chip : `${chip} · “${trimmed}”`
}

/** The plates, the count the album worked out, and the picks. */
export interface AbilityControlsProps {
  bands: AbilityBandView[]
  /** The open abilities the query finds on the plates shown. */
  count: number
  fieldId: string
  onParams: (next: AbilityParams, replace: boolean) => void
  /** The picks, a type no open plate holds already left out. */
  params: AbilityParams
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
}: AbilityControlsProps): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const query = params.q ?? ''
  const pick: Pick = params.type ?? 'all'
  const choices = typeChoices(t, bands)
  const total = choices.find((choice) => choice.value === pick)?.count ?? 0
  // Every pick goes through the parser, so a default ("all", a blank
  // query) is left out of the address rather than written into it.
  const move = (next: Record<string, unknown>, replace: boolean): void => {
    onParams(parseAbilityParams({ ...params, ...next }), replace)
  }

  return (
    <ControlBar
      searchLabel={t('abilities.searchOpen')}
      summary={summaryOf(t, pick, query.trim())}
      toggleLabel={t('abilities.controls')}
    >
      <AbilitySearch
        count={count}
        fieldId={fieldId}
        onQuery={(next) => {
          move({ q: next }, true)
        }}
        query={query}
        total={total}
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

/** The field's query, and the counts its status line reads. */
interface AbilitySearchProps {
  count: number
  fieldId: string
  onQuery: (query: string) => void
  query: string
  total: number
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
}: AbilitySearchProps): ReactElement {
  const t = useSeriesOnlyT(SERIES)
  const trimmed = query.trim()
  const empty = trimmed !== '' && count === 0

  return (
    <SearchField
      clearLabel={t('abilities.searchClear')}
      fieldId={fieldId}
      label={t('abilities.searchLabel')}
      onQuery={onQuery}
      placeholder={t('abilities.searchPlaceholder')}
      query={query}
      status={
        <SearchStatus
          noMatch={empty}
          words={
            empty ?
              t('abilities.noMatch', { query: trimmed })
            : t('abilities.shown', { count, total })
          }
        />
      }
    />
  )
}
