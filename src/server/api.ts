import { createServerFn } from '@tanstack/react-start'

import { archiveOf, descriptionOf } from '~/data/series'
import { type Plain, plain } from '~/lib/plain'
import { readBookmark, readTrial } from '~/lib/progress/readBookmark'
import type { Series } from '~/lib/progress/series'

import {
  type ArchivePage,
  inputOf,
  readerAt,
  type SeriesPage,
} from './archive/endpoint.server'
import { ENDPOINTS } from './archive/payloads.server'
import {
  type InputKind,
  type Inputs,
  type Located,
  UNKNOWN_SERIES,
} from './inputs'

/**
 * The archive's only door.
 *
 * Bookmark-dependent functions read it from the request itself; none accepts
 * one as an argument, and the validators (`./inputs`) drop any a request body
 * carries. Public demo drawings always use a null bookmark. This is the
 * invariant the whole design rests on: a bookmark that arrived in a request
 * body would make the fog a suggestion, and it would also mean a stale one in
 * the router's context could hand a reader records they have not reached.
 *
 * Each function is described once, in `ENDPOINTS`
 * (`./archive/payloads.server`): its input, the bookmark it reads, its
 * projection and whether it answers in plain JSON. The leak sweep asks the
 * same table. A record page and a list (`reads: 'page'`) are drawn through
 * `pageReader`: with no bookmark, at a point the page itself picks, the
 * record's first appearance or the end of the demo, and never at one the
 * request names. The id only says which record the page is about.
 *
 * Start's compiler needs one literal `createServerFn().validator(...)
 * .handler(...)` per export, so each is written out below and does nothing
 * but serve its entry. Under Vitest the Start plugin is deliberately absent,
 * so calling one of these directly throws out of `getStartContext()` rather
 * than running.
 */

/** The public description of the open series a call names. */
function describedBy(data: Located): Series {
  const series = descriptionOf(data.series)
  if (series === null) {
    throw new Error(UNKNOWN_SERIES)
  }
  return series
}

/** An entry's page, for the bookmark and trial in the request's cookies. */
async function serve<K extends InputKind, R>(
  entry: ArchivePage<K, R, true>,
  data: Inputs[K],
): Promise<Plain<R>>
async function serve<K extends InputKind, R>(
  entry: ArchivePage<K, R, false>,
  data: Inputs[K],
): Promise<R>
async function serve<R>(entry: SeriesPage<R>, data: Located): Promise<R>
async function serve<K extends InputKind, R>(
  entry: ArchivePage<K, R, boolean> | SeriesPage<R>,
  data: Inputs[K],
): Promise<Plain<R> | R> {
  if (entry.reads === 'none') {
    return entry.page(data, describedBy(data))
  }

  const archive = await archiveOf(data.series)
  const { series } = archive
  const bookmark = entry.reads === 'demo' ? null : readBookmark(series)
  const trial = entry.reads === 'trial' ? readTrial(series) : null
  const answer = entry.page(
    data,
    readerAt(entry.reads, archive, { ...data, bookmark }),
    trial,
  )

  return entry.plain === true ? plain(answer) : answer
}

export const loadCredits = createServerFn()
  .validator(inputOf(ENDPOINTS.loadCredits))
  .handler(async ({ data }) => serve(ENDPOINTS.loadCredits, data))

export const loadHome = createServerFn()
  .validator(inputOf(ENDPOINTS.loadHome))
  .handler(async ({ data }) => serve(ENDPOINTS.loadHome, data))

export const loadCharacters = createServerFn()
  .validator(inputOf(ENDPOINTS.loadCharacters))
  .handler(async ({ data }) => serve(ENDPOINTS.loadCharacters, data))

export const loadShelves = createServerFn()
  .validator(inputOf(ENDPOINTS.loadShelves))
  .handler(async ({ data }) => serve(ENDPOINTS.loadShelves, data))

export const loadCharacter = createServerFn()
  .validator(inputOf(ENDPOINTS.loadCharacter))
  .handler(async ({ data }) => serve(ENDPOINTS.loadCharacter, data))

export const loadRelationships = createServerFn()
  .validator(inputOf(ENDPOINTS.loadRelationships))
  .handler(async ({ data }) => serve(ENDPOINTS.loadRelationships, data))

export const loadChronicleRest = createServerFn()
  .validator(inputOf(ENDPOINTS.loadChronicleRest))
  .handler(async ({ data }) => serve(ENDPOINTS.loadChronicleRest, data))

export const loadDrawings = createServerFn()
  .validator(inputOf(ENDPOINTS.loadDrawings))
  .handler(async ({ data }) => serve(ENDPOINTS.loadDrawings, data))

export const loadFruits = createServerFn()
  .validator(inputOf(ENDPOINTS.loadFruits))
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruits, data))

export const loadFruitAlbum = createServerFn()
  .validator(inputOf(ENDPOINTS.loadFruitAlbum))
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruitAlbum, data))

export const loadFruit = createServerFn()
  .validator(inputOf(ENDPOINTS.loadFruit))
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruit, data))

export const loadFruitEaters = createServerFn()
  .validator(inputOf(ENDPOINTS.loadFruitEaters))
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruitEaters, data))

export const loadFruitSiblings = createServerFn()
  .validator(inputOf(ENDPOINTS.loadFruitSiblings))
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruitSiblings, data))

export const loadPlaces = createServerFn()
  .validator(inputOf(ENDPOINTS.loadPlaces))
  .handler(async ({ data }) => serve(ENDPOINTS.loadPlaces, data))

export const loadPlace = createServerFn()
  .validator(inputOf(ENDPOINTS.loadPlace))
  .handler(async ({ data }) => serve(ENDPOINTS.loadPlace, data))

export const loadFiller = createServerFn()
  .validator(inputOf(ENDPOINTS.loadFiller))
  .handler(async ({ data }) => serve(ENDPOINTS.loadFiller, data))

export const loadSagaLabels = createServerFn()
  .validator(inputOf(ENDPOINTS.loadSagaLabels))
  .handler(async ({ data }) => serve(ENDPOINTS.loadSagaLabels, data))

export const liftFiller = createServerFn()
  .validator(inputOf(ENDPOINTS.liftFiller))
  .handler(async ({ data }) => serve(ENDPOINTS.liftFiller, data))

export const liftCharacter = createServerFn()
  .validator(inputOf(ENDPOINTS.liftCharacter))
  .handler(async ({ data }) => serve(ENDPOINTS.liftCharacter, data))

export const liftDossier = createServerFn()
  .validator(inputOf(ENDPOINTS.liftDossier))
  .handler(async ({ data }) => serve(ENDPOINTS.liftDossier, data))

export const liftFruit = createServerFn()
  .validator(inputOf(ENDPOINTS.liftFruit))
  .handler(async ({ data }) => serve(ENDPOINTS.liftFruit, data))

export const liftRecord = createServerFn()
  .validator(inputOf(ENDPOINTS.liftRecord))
  .handler(async ({ data }) => serve(ENDPOINTS.liftRecord, data))

export const liftPort = createServerFn()
  .validator(inputOf(ENDPOINTS.liftPort))
  .handler(async ({ data }) => serve(ENDPOINTS.liftPort, data))

export const liftShip = createServerFn()
  .validator(inputOf(ENDPOINTS.liftShip))
  .handler(async ({ data }) => serve(ENDPOINTS.liftShip, data))

export const loadSeriesCopy = createServerFn()
  .validator(inputOf(ENDPOINTS.loadSeriesCopy))
  .handler(async ({ data }) => serve(ENDPOINTS.loadSeriesCopy, data))

export const loadSeriesLegal = createServerFn()
  .validator(inputOf(ENDPOINTS.loadSeriesLegal))
  .handler(async ({ data }) => serve(ENDPOINTS.loadSeriesLegal, data))

export const loadDemoDrawings = createServerFn()
  .validator(inputOf(ENDPOINTS.loadDemoDrawings))
  .handler(async ({ data }) => serve(ENDPOINTS.loadDemoDrawings, data))

export const loadPower = createServerFn()
  .validator(inputOf(ENDPOINTS.loadPower))
  .handler(async ({ data }) => serve(ENDPOINTS.loadPower, data))

export const loadAbilities = createServerFn()
  .validator(inputOf(ENDPOINTS.loadAbilities))
  .handler(async ({ data }) => serve(ENDPOINTS.loadAbilities, data))

export const loadAbility = createServerFn()
  .validator(inputOf(ENDPOINTS.loadAbility))
  .handler(async ({ data }) => serve(ENDPOINTS.loadAbility, data))

export const liftAbility = createServerFn()
  .validator(inputOf(ENDPOINTS.liftAbility))
  .handler(async ({ data }) => serve(ENDPOINTS.liftAbility, data))
