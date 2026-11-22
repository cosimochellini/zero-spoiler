import { createServerFn } from '@tanstack/react-start'

import { ENDPOINTS } from './archive/payloads.server'
import { INPUTS } from './inputs'
import { serve } from './serve.server'

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
 * but hand its entry to `serve` (`./serve.server`), which reads the cookies.
 * The validator names its entry's input shape from `./inputs` rather than
 * reading the entry: the validator stays in the server build's route chunks,
 * and reading `ENDPOINTS` there would load every projection with the route,
 * not only with the server function (`api.test.ts` holds the two equal).
 * Under Vitest the Start plugin is deliberately absent, so calling one of
 * these directly throws out of `getStartContext()` rather than running.
 */

export const loadCredits = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadCredits, data))

export const loadHome = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadHome, data))

export const loadCharacters = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadCharacters, data))

export const loadShelves = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadShelves, data))

export const loadCharacter = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadCharacter, data))

export const loadRelationships = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadRelationships, data))

export const loadChronicleRest = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadChronicleRest, data))

export const loadDrawings = createServerFn()
  .validator(INPUTS.listed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadDrawings, data))

export const loadFruits = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruits, data))

export const loadFruitAlbum = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruitAlbum, data))

export const loadFruit = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruit, data))

export const loadFruitEaters = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruitEaters, data))

export const loadFruitSiblings = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadFruitSiblings, data))

export const loadPlaces = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadPlaces, data))

export const loadPlace = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadPlace, data))

export const loadFiller = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadFiller, data))

export const loadSagaLabels = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadSagaLabels, data))

export const liftFiller = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftFiller, data))

export const liftCharacter = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftCharacter, data))

export const liftDossier = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftDossier, data))

export const liftFruit = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftFruit, data))

export const liftRecord = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftRecord, data))

export const liftPort = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftPort, data))

export const liftShip = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftShip, data))

export const loadSeriesCopy = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadSeriesCopy, data))

export const loadSeriesLegal = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadSeriesLegal, data))

export const loadDemoDrawings = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadDemoDrawings, data))

export const loadPower = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadPower, data))

export const loadAbilities = createServerFn()
  .validator(INPUTS.located)
  .handler(async ({ data }) => serve(ENDPOINTS.loadAbilities, data))

export const loadAbility = createServerFn()
  .validator(INPUTS.addressed)
  .handler(async ({ data }) => serve(ENDPOINTS.loadAbility, data))

export const liftAbility = createServerFn()
  .validator(INPUTS.handled)
  .handler(async ({ data }) => serve(ENDPOINTS.liftAbility, data))
