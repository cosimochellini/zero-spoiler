import type { Translate } from '~/i18n/types'
import type { AbilityBandView } from '~/lib/view/abilities'
import type { AbilityNen } from '~/lib/view/facts'

/** A plate a chip can pick: a Nen type, or the abilities with none told. */
export type AbilityType = 'none' | AbilityNen

/**
 * The abilities page's own search parameters: the plate picked and the
 * query, named as the other pages name theirs and clear of the bookmark's
 * `ep`, `s` and `ch` (`src/lib/progress/linkBookmark.ts`). A key is left out
 * when it holds its default (every plate, no query), so the plain address
 * stays plain.
 */
export interface AbilityParams {
  q?: string
  type?: AbilityType
}

const TYPES = new Set<string>([
  'enhancer',
  'transmuter',
  'emitter',
  'conjurer',
  'manipulator',
  'specialist',
  'none',
] satisfies AbilityType[])

function isType(value: unknown): value is AbilityType {
  return typeof value === 'string' && TYPES.has(value)
}

/**
 * The parameters a query string names, each one checked: a value of the
 * wrong shape is left out, which is its default.
 */
export function parseAbilityParams(
  search: Record<string, unknown>,
): AbilityParams {
  const { q, type } = search

  return {
    ...(isType(type) && { type }),
    // Blank is no query; anything else is kept as typed, spaces and all.
    ...(typeof q === 'string' && q.trim() !== '' && { q }),
  }
}

/** The chip a plate answers to. */
export function typeOf(band: AbilityBandView): AbilityType {
  return band.nen ?? 'none'
}

/**
 * The picks with a type no open plate holds left out, so a shared address
 * picked further on than the reader's bookmark names nothing on the page:
 * every plate shows, as with no pick.
 */
export function reachedAbilityParams(
  params: AbilityParams,
  bands: AbilityBandView[],
): AbilityParams {
  const { type, ...rest } = params

  return {
    ...rest,
    ...(bands.some((band) => typeOf(band) === type) && { type }),
  }
}

/** A plate's name: its Nen type, or that the story had not told one. */
export function typeLabel(
  t: Translate<'hunter-x-hunter'>,
  type: AbilityType,
): string {
  return t(type === 'none' ? 'abilities.noType' : `nen.${type}`)
}
