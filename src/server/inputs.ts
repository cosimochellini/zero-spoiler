import { descriptionOf } from '~/data/series'
import { isLocale, type Locale } from '~/i18n/locales'

/**
 * What a server function accepts from a request body, read without trusting
 * the body's shape. Each validator returns a new object of the fields it
 * knows and nothing else: a bookmark in the body is dropped here, before any
 * handler sees it (`~/server/api`).
 */

export interface Located {
  locale: Locale
  series: string
}
export interface Addressed extends Located {
  id: string
}
export interface Listed extends Located {
  ids: string[]
}
export interface Handled extends Located {
  handle: string
}

// Long enough for any id or handle the archive mints, short enough that a
// request body cannot be used to make the server do work.
export const MAX_FIELD_LENGTH = 200

// One screen of a long list asks at once; more than that is not a page.
export const MAX_IDS = 64

const UNKNOWN_SERIES = 'A known series is required'

/** One field of a request body, read without trusting the body's shape. */
function field(input: unknown, name: string): unknown {
  if (
    typeof input !== 'object'
    || input === null
    || !Object.hasOwn(input, name)
  ) {
    return undefined
  }

  return Object.getOwnPropertyDescriptor(input, name)?.value
}

/** The locale the page is asking in. */
function locale(input: unknown): Locale {
  const value = field(input, 'locale')
  if (!isLocale(value)) {
    throw new Error('A known locale is required')
  }

  return value
}

/** An id or a handle, as a string the archive could have minted. */
function text(input: unknown, name: 'handle' | 'id'): string {
  const value = field(input, name)
  if (
    typeof value !== 'string'
    || value.length === 0
    || value.length > MAX_FIELD_LENGTH
  ) {
    throw new Error(`A ${name} is required`)
  }

  return value
}

/** A registered slug is required before the archive can be loaded. */
function seriesSlug(input: unknown): string {
  const value = field(input, 'series')
  if (typeof value !== 'string' || descriptionOf(value) === null) {
    throw new Error(UNKNOWN_SERIES)
  }
  return value
}

/** A page that asks for nothing but the locale it is drawn in. */
function located(input: unknown): Located {
  return { series: seriesSlug(input), locale: locale(input) }
}

/** A page about one record the reader has already reached, so it has an id. */
function addressed(input: unknown): Addressed {
  return { ...located(input), id: text(input, 'id') }
}

/** The ids of the drawings a list left behind, as the page asks for them. */
function listed(input: unknown): Listed {
  const ids = field(input, 'ids')
  if (!Array.isArray(ids) || ids.length === 0 || ids.length > MAX_IDS) {
    throw new Error('Some ids are required')
  }

  return {
    ...located(input),
    ids: ids.map((id: unknown) => text({ id }, 'id')),
  }
}

/** A record still under fog, which the reader can only name by its handle. */
function handled(input: unknown): Handled {
  return { ...located(input), handle: text(input, 'handle') }
}

/** Each input shape, by the name a server function's entry gives it. */
export interface Inputs {
  addressed: Addressed
  handled: Handled
  listed: Listed
  located: Located
}

/** The name of an input shape. */
export type InputKind = keyof Inputs

/** The validator of each input shape. */
export const INPUTS: { [K in InputKind]: (input: unknown) => Inputs[K] } = {
  addressed,
  handled,
  listed,
  located,
}
