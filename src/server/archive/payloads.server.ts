import { withFeatures } from '~/data/features'
import type { SeriesArchive } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { copyOf } from '~/server/copy.server'
import { legalOf } from '~/server/sources.server'

import { abilityPage, abilitySheet } from './abilities.server'
import { chronicleRestOf } from './chronicle.server'
import { creditsPage } from './credits.server'
import {
  archivePage,
  type DrawnAt,
  seriesPage,
  type Swept,
} from './endpoint.server'
import { fillerPage, peekFiller } from './filler.server'
import { fruitPage } from './fruitPage.server'
import {
  fruitAlbum,
  fruitEaters,
  fruitSheet,
  fruitSiblings,
} from './fruits.server'
import { handleOf, indexHandle } from './handle.server'
import { landingPage } from './home.server'
import { demoDrawingsPage } from './onboarding.server'
import {
  characterPage,
  charactersPage,
  drawingsFor,
  relationshipsPage,
  shelvesPage,
} from './pages.server'
import {
  peekAbility,
  peekCharacter,
  peekDossier,
  peekFruit,
  peekPort,
  peekRecord,
  peekShip,
} from './peek.server'
import { placePage } from './placePage.server'
import { placesPage } from './places.server'
import { powerPage } from './power.server'
import { sagaLabels } from './sagaLabels.server'

/**
 * Every server function, described once: `~/server/api` serves each entry
 * behind one compiler-visible wrapper, and the sweep asks each through
 * `payloadsFor`.
 */

const characterIds = (archive: SeriesArchive): string[] =>
  archive.characters.map(({ id }) => id)
const fruitIds = (archive: SeriesArchive): string[] =>
  withFeatures(archive).fruits.map(({ id }) => id)
const abilityIds = (archive: SeriesArchive): string[] =>
  withFeatures(archive).abilities.map(({ id }) => id)
const handles = (archive: SeriesArchive): string[] =>
  archive.entities.map(({ id }) => handleOf(id, archive))

/**
 * The table, in the deployed sweep order: One Piece's dump stays byte for
 * byte only while the order holds, so a new entry goes at the end.
 */
export const ENDPOINTS = {
  loadCredits: archivePage({
    input: 'located',
    reads: 'cookie',
    page: (_, r) => creditsPage(r),
  }),
  // The sweep asks with no trial (#1394): a trial gives way to a saved
  // bookmark and only stands as the demo's `start` beside the null reader.
  loadHome: archivePage({
    input: 'located',
    reads: 'trial',
    page: (_, r, trial) => landingPage(r, trial),
  }),
  loadCharacters: archivePage({
    input: 'located',
    reads: 'page',
    page: (_, r) => charactersPage(r),
  }),
  // Plain JSON: the browser asks for the shelves once the page is up (#776).
  loadShelves: archivePage({
    input: 'located',
    reads: 'page',
    plain: true,
    page: (_, r) => shelvesPage(r),
  }),
  loadCharacter: archivePage({
    input: 'addressed',
    reads: 'page',
    keys: characterIds,
    page: ({ id }, r) => characterPage(id, r) ?? null,
  }),
  loadRelationships: archivePage({
    input: 'addressed',
    reads: 'page',
    keys: characterIds,
    page: ({ id }, r) => relationshipsPage(id, r),
  }),
  // Plain JSON: the browser asks for the older stories on the reader's click.
  loadChronicleRest: archivePage({
    input: 'addressed',
    reads: 'page',
    plain: true,
    keys: characterIds,
    page: ({ id }, r) => chronicleRestOf(id, r),
  }),
  // Plain JSON, as the album below (#780).
  loadDrawings: archivePage({
    input: 'listed',
    reads: 'page',
    plain: true,
    keys: (archive) => archive.entities.map(({ id }) => id),
    page: ({ ids }, r) => drawingsFor(ids, r),
  }),
  loadFruits: archivePage({
    input: 'located',
    reads: 'page',
    page: (_, r) => fruitSheet(r),
  }),
  // Plain JSON: the browser asks for the plates once the page is up (#780).
  loadFruitAlbum: archivePage({
    input: 'located',
    reads: 'page',
    plain: true,
    page: (_, r) => fruitAlbum(r),
  }),
  loadFruit: archivePage({
    input: 'addressed',
    reads: 'page',
    keys: fruitIds,
    page: ({ id }, r) => fruitPage(id, r) ?? null,
  }),
  loadFruitEaters: archivePage({
    input: 'addressed',
    reads: 'page',
    keys: fruitIds,
    page: ({ id }, r) => fruitEaters(id, r),
  }),
  loadFruitSiblings: archivePage({
    input: 'addressed',
    reads: 'page',
    keys: fruitIds,
    page: ({ id }, r) => fruitSiblings(id, r),
  }),
  loadPlaces: archivePage({
    input: 'located',
    reads: 'page',
    page: (_, r) => placesPage(r),
  }),
  loadPlace: archivePage({
    input: 'addressed',
    reads: 'page',
    keys: (archive) =>
      [...archive.places, ...withFeatures(archive).ships].map(({ id }) => id),
    page: ({ id }, r) => placePage(id, r) ?? null,
  }),
  loadFiller: archivePage({
    input: 'located',
    reads: 'page',
    page: (_, r) => fillerPage(r),
  }),
  loadSagaLabels: archivePage({
    input: 'located',
    reads: 'cookie',
    page: (_, r) => sagaLabels(r),
  }),
  liftFiller: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: (archive) =>
      withFeatures(archive).filler.map((_, index) =>
        indexHandle(index, archive),
      ),
    page: ({ handle }, r) => peekFiller(handle, r) ?? null,
  }),
  liftCharacter: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: handles,
    page: ({ handle }, r) => peekCharacter(handle, r) ?? null,
  }),
  liftDossier: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: handles,
    page: ({ handle }, r) => peekDossier(handle, r) ?? null,
  }),
  liftFruit: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: handles,
    page: ({ handle }, r) => peekFruit(handle, r) ?? null,
  }),
  liftRecord: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: handles,
    page: ({ handle }, r) => peekRecord(handle, r) ?? null,
  }),
  liftPort: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: handles,
    page: ({ handle }, r) => peekPort(handle, r) ?? null,
  }),
  liftShip: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: handles,
    page: ({ handle }, r) => peekShip(handle, r) ?? null,
  }),
  // A series' own copy in one locale, sent with its pages: its words reach no
  // client chunk, so a reader of one series never downloads another's.
  loadSeriesCopy: seriesPage(({ locale }, series) => copyOf(series, locale)),
  // What the legal page needs of an open series: the lines of its copy the
  // page prints and its sources, never the whole copy.
  loadSeriesLegal: seriesPage(({ locale }, series) => legalOf(series, locale)),
  // Public demo only: neither cookies nor request-supplied bookmarks expand it.
  loadDemoDrawings: archivePage({
    input: 'located',
    reads: 'demo',
    plain: true,
    page: (_, r) => demoDrawingsPage(r),
  }),
  loadPower: archivePage({
    input: 'located',
    reads: 'page',
    page: (_, r) => powerPage(r),
  }),
  // Hunter x Hunter's Nen abilities (#923), after every earlier page.
  loadAbilities: archivePage({
    input: 'located',
    reads: 'page',
    page: (_, r) => abilitySheet(r),
  }),
  loadAbility: archivePage({
    input: 'addressed',
    reads: 'page',
    keys: abilityIds,
    page: ({ id }, r) => abilityPage(id, r) ?? null,
  }),
  liftAbility: archivePage({
    input: 'handled',
    reads: 'cookie',
    keys: handles,
    page: ({ handle }, r) => peekAbility(handle, r) ?? null,
  }),
}

/** One server function's payload, bound to one archive, as the sweep asks it. */
export interface Payload {
  /** See `Swept.drawnAt` in `./endpoint.server`. */
  drawnAt?: DrawnAt
  keys?: () => string[]
  name: string
  plain: boolean
  run: (bookmark: Bookmark, locale: Locale, key: string) => unknown
}

/** Load an archive once; every projection and sweep then stays synchronous. */
export function payloadsFor(archive: SeriesArchive): Payload[] {
  const entries: [string, Swept][] = Object.entries(ENDPOINTS)
  return entries.map(([name, { drawnAt, keys, plain, sweep }]) => ({
    ...(drawnAt !== undefined && { drawnAt }),
    ...(keys !== undefined && { keys: () => keys(archive) }),
    name,
    plain: plain === true,
    run: sweep(archive),
  }))
}
