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
  keys?: () => string[]
  name: string
  run: (bookmark: Bookmark, locale: Locale, key: string) => unknown
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
    {
      name: 'loadCharacters',
      run: (b, l) => charactersPage(pageReader(archive, b, { locale: l })),
    },
    {
      name: 'loadShelves',
      run: (b, l) => shelvesPage(pageReader(archive, b, { locale: l })),
    },
    {
      name: 'loadFruits',
      run: (b, l) => fruitSheet(pageReader(archive, b, { locale: l })),
    },
    {
      name: 'loadFruitAlbum',
      run: (b, l) => fruitAlbum(pageReader(archive, b, { locale: l })),
    },
    {
      name: 'loadPlaces',
      run: (b, l) => placesPage(pageReader(archive, b, { locale: l })),
    },
    { name: 'loadFiller', run: (b, l) => fillerPage(readerFor(archive, b, l)) },
    { name: 'loadPower', run: (b, l) => powerPage(readerFor(archive, b, l)) },
    {
      name: 'loadAbilities',
      run: (b, l) => abilitySheet(pageReader(archive, b, { locale: l })),
    },
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
  // A record page with no bookmark is drawn at the record's first appearance.
  const at = (b: Bookmark, l: Locale, id: string): Reader =>
    pageReader(archive, b, { id, locale: l })
  return [
    {
      name: 'loadCharacter',
      keys: characterIds,
      run: (b, l, id) => characterPage(id, at(b, l, id)) ?? null,
    },
    {
      name: 'loadRelationships',
      keys: characterIds,
      run: (b, l, id) => relationshipsPage(id, at(b, l, id)),
    },
    {
      name: 'loadChronicleRest',
      keys: characterIds,
      run: (b, l, id) => chronicleRestOf(id, at(b, l, id)),
    },
    {
      name: 'loadDrawings',
      keys: () => archive.entities.map(({ id }) => id),
      run: (b, l, id) =>
        drawingsFor([id], pageReader(archive, b, { locale: l })),
    },
    {
      name: 'loadFruit',
      keys: fruitIds,
      run: (b, l, id) => fruitPage(id, at(b, l, id)) ?? null,
    },
    {
      name: 'loadFruitEaters',
      keys: fruitIds,
      run: (b, l, id) => fruitEaters(id, at(b, l, id)),
    },
    {
      name: 'loadFruitSiblings',
      keys: fruitIds,
      run: (b, l, id) => fruitSiblings(id, at(b, l, id)),
    },
    {
      name: 'loadPlace',
      keys: () =>
        [...archive.places, ...withFeatures(archive).ships].map(({ id }) => id),
      run: (b, l, id) => placePage(id, at(b, l, id)) ?? null,
    },
    {
      name: 'loadAbility',
      keys: abilityIds,
      run: (b, l, id) => abilityPage(id, at(b, l, id)) ?? null,
    },
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
