import { withFeatures } from '~/data/features'
import type { SeriesArchive } from '~/data/types'
import type { Locale } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { copyOf } from '~/server/copy.server'
import { legalOf } from '~/server/sources.server'

import { abilityPage, abilitySheet } from './abilities.server'
import { chronicleRestOf } from './chronicle.server'
import { creditsPage } from './credits.server'
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
import { pageReader, type Reader, readerFor } from './reader.server'
import { sagaLabels } from './sagaLabels.server'

/** Every payload served by the compiler-visible server-function wrappers. */
export interface Payload {
  /**
   * How `pageReader` draws the page for a reader with no bookmark (#1430): a
   * record page at its key's first appearance, a list at the end of the demo.
   * Absent for a page read by the bookmark alone.
   */
  drawnAt?: DrawnAt
  keys?: () => string[]
  name: string
  run: (bookmark: Bookmark, locale: Locale, key: string) => unknown
}

/** The two kinds of page `pageReader` draws at a point. */
export type DrawnAt = 'list' | 'record'

/**
 * A page `api.ts` reads through `pageReaderIn`: one place picks both its
 * reader and its `drawnAt`, so the sweep cannot hold a page to a point it is
 * not drawn at.
 */
function drawnPage(
  archive: SeriesArchive,
  {
    drawnAt,
    keys,
    name,
    page,
  }: Pick<Payload, 'keys' | 'name'> & {
    drawnAt: DrawnAt
    page: (key: string, r: Reader) => unknown
  },
): Payload {
  return {
    drawnAt,
    name,
    ...(keys !== undefined && { keys }),
    run: (b, l, key) =>
      page(
        key,
        pageReader(
          archive,
          b,
          drawnAt === 'record' ? { id: key, locale: l } : { locale: l },
        ),
      ),
  }
}

function listPayloads(archive: SeriesArchive): Payload[] {
  return [
    {
      name: 'loadCredits',
      run: (b, l) => creditsPage(readerFor(archive, b, l)),
    },
    {
      name: 'loadDemoDrawings',
      run: (_, l) => demoDrawingsPage(readerFor(archive, null, l)),
    },
    {
      name: 'loadHome',
      run: (b, l) => landingPage(readerFor(archive, b, l), null),
    },
    drawnPage(archive, {
      drawnAt: 'list',
      name: 'loadCharacters',
      page: (_, r) => charactersPage(r),
    }),
    drawnPage(archive, {
      drawnAt: 'list',
      name: 'loadShelves',
      page: (_, r) => shelvesPage(r),
    }),
    drawnPage(archive, {
      drawnAt: 'list',
      name: 'loadFruits',
      page: (_, r) => fruitSheet(r),
    }),
    drawnPage(archive, {
      drawnAt: 'list',
      name: 'loadFruitAlbum',
      page: (_, r) => fruitAlbum(r),
    }),
    drawnPage(archive, {
      drawnAt: 'list',
      name: 'loadPlaces',
      page: (_, r) => placesPage(r),
    }),
    { name: 'loadFiller', run: (b, l) => fillerPage(readerFor(archive, b, l)) },
    { name: 'loadPower', run: (b, l) => powerPage(readerFor(archive, b, l)) },
    drawnPage(archive, {
      drawnAt: 'list',
      name: 'loadAbilities',
      page: (_, r) => abilitySheet(r),
    }),
    { name: 'loadSeriesCopy', run: (_, l) => copyOf(archive.series, l) },
    { name: 'loadSeriesLegal', run: (_, l) => legalOf(archive.series, l) },
    {
      name: 'loadSagaLabels',
      run: (b, l) => sagaLabels(readerFor(archive, b, l)),
    },
  ]
}

function recordPayloads(archive: SeriesArchive): Payload[] {
  const characterIds = (): string[] => archive.characters.map(({ id }) => id)
  const fruitIds = (): string[] =>
    withFeatures(archive).fruits.map(({ id }) => id)
  const abilityIds = (): string[] =>
    withFeatures(archive).abilities.map(({ id }) => id)
  const record = (
    name: string,
    keys: () => string[],
    page: (id: string, r: Reader) => unknown,
  ): Payload => drawnPage(archive, { drawnAt: 'record', name, keys, page })
  return [
    record(
      'loadCharacter',
      characterIds,
      (id, r) => characterPage(id, r) ?? null,
    ),
    record('loadRelationships', characterIds, (id, r) =>
      relationshipsPage(id, r),
    ),
    record('loadChronicleRest', characterIds, (id, r) =>
      chronicleRestOf(id, r),
    ),
    drawnPage(archive, {
      drawnAt: 'list',
      name: 'loadDrawings',
      keys: () => archive.entities.map(({ id }) => id),
      page: (id, r) => drawingsFor([id], r),
    }),
    record('loadFruit', fruitIds, (id, r) => fruitPage(id, r) ?? null),
    record('loadFruitEaters', fruitIds, (id, r) => fruitEaters(id, r)),
    record('loadFruitSiblings', fruitIds, (id, r) => fruitSiblings(id, r)),
    record(
      'loadPlace',
      () =>
        [...archive.places, ...withFeatures(archive).ships].map(({ id }) => id),
      (id, r) => placePage(id, r) ?? null,
    ),
    record('loadAbility', abilityIds, (id, r) => abilityPage(id, r) ?? null),
  ]
}

function liftedPayloads(archive: SeriesArchive): Payload[] {
  const keys = (): string[] =>
    archive.entities.map(({ id }) => handleOf(id, archive))
  return [
    {
      name: 'liftFiller',
      keys: () =>
        withFeatures(archive).filler.map((_, index) =>
          indexHandle(index, archive),
        ),
      run: (b, l, h) => peekFiller(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftCharacter',
      keys,
      run: (b, l, h) => peekCharacter(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftDossier',
      keys,
      run: (b, l, h) => peekDossier(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftFruit',
      keys,
      run: (b, l, h) => peekFruit(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftRecord',
      keys,
      run: (b, l, h) => peekRecord(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftPort',
      keys,
      run: (b, l, h) => peekPort(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftShip',
      keys,
      run: (b, l, h) => peekShip(h, readerFor(archive, b, l)) ?? null,
    },
    {
      name: 'liftAbility',
      keys,
      run: (b, l, h) => peekAbility(h, readerFor(archive, b, l)) ?? null,
    },
  ]
}

/** Load an archive once; every projection and sweep then stays synchronous. */
export function payloadsFor(archive: SeriesArchive): Payload[] {
  const all = [
    ...listPayloads(archive),
    ...recordPayloads(archive),
    ...liftedPayloads(archive),
  ]
  // Preserve the deployed sweep order for byte-for-byte One Piece parity.
  const order = [
    'loadCredits',
    'loadHome',
    'loadCharacters',
    'loadShelves',
    'loadCharacter',
    'loadRelationships',
    'loadChronicleRest',
    'loadDrawings',
    'loadFruits',
    'loadFruitAlbum',
    'loadFruit',
    'loadFruitEaters',
    'loadFruitSiblings',
    'loadPlaces',
    'loadPlace',
    'loadFiller',
    'loadSagaLabels',
    'liftFiller',
    'liftCharacter',
    'liftDossier',
    'liftFruit',
    'liftRecord',
    'liftPort',
    'liftShip',
    'loadSeriesCopy',
    'loadSeriesLegal',
    'loadDemoDrawings',
    'loadPower',
    // Hunter x Hunter's Nen abilities (#923), after every earlier page.
    'loadAbilities',
    'loadAbility',
    'liftAbility',
  ]
  return order.flatMap((name) => all.filter((payload) => payload.name === name))
}
