import type { Redrawings } from '~/data/art/stroke'
import { chapterTable } from '~/data/chapterTable'
import {
  anchorsOf,
  datedArchive,
  type DatedArchive,
  dossiersOf,
  type Filed,
  filedTimelines,
  usersBy,
} from '~/data/dated'
import type { AbilityFeature, Features } from '~/data/features'
import { orderByMode } from '~/data/order'
import { castOf, keptOf } from '~/data/shelves'
import type {
  Entity,
  PlaceDossier,
  Saga,
  SeriesArchive,
  Vocabulary,
} from '~/data/types'
import type { Series } from '~/lib/progress/series'
import type { AbilityNen } from '~/lib/view/facts'

/**
 * A series' Nen abilities: the records, each at its own threshold, and the
 * Nen type of those the story types by then.
 */
export interface FiledAbilities {
  nen: Partial<Record<string, AbilityNen>>
  records: Entity[]
}

/**
 * The abilities slice: the records in route order, each one's Nen type, and
 * who uses it, read off the characters' `ability` entries.
 */
function abilityFeature({
  characters,
  datedOf,
  nen,
  records,
}: Pick<DatedArchive, 'datedOf'>
  & Pick<FiledAbilities, 'nen' | 'records'> & {
    characters: Entity[]
  }): AbilityFeature {
  const byId = new Map(records.map((entity) => [entity.id, entity]))

  return {
    abilities: records,
    abilityNenOf: (entity) => nen[entity.id],
    getAbility: (id) => byId.get(id),
    usersOf: usersBy(characters, (character) => datedOf(character, 'ability')),
  }
}

/** The archive of a series that files every record in its sagas. */
export interface SagaArchive<V extends Vocabulary> {
  /**
   * Everything but what the series adds itself (its sweep, drawings, leads
   * and description), derived from the sagas.
   */
  core: Omit<SeriesArchive<V>, 'bookmarks' | 'drawings' | 'leads' | 'series'>
  /** Its timelines, for the gates its own sweep reads. */
  filed: Filed
}

/**
 * The archive the engine derives from a series' sagas: its records, their
 * dossiers and dated facts, the chapter table, the cast and the places, as
 * Hunter x Hunter and Game of Thrones file them. None of One Piece's
 * features, and no world map. One Piece builds its own. With `abilities`,
 * the Nen abilities slice too (`Features.abilities`).
 */
export function sagaArchive<V extends Vocabulary>({
  abilities,
  featured,
  placeDossiers,
  redrawings,
  sagas,
  series,
}: {
  abilities?: FiledAbilities
  /** The main characters: the landing chart and the featured row. */
  featured: string[]
  placeDossiers: Record<string, PlaceDossier<V>>
  redrawings: Redrawings
  sagas: Saga<V>[]
  series: Series
}): SagaArchive<V> {
  const filedInSagas: Entity[] = sagas.flatMap((saga) => saga.entries)
  const dossiers = dossiersOf(sagas)
  const filed = filedTimelines(dossiers, { redrawing: (id) => redrawings[id] })
  const { chapterAtEpisode, gateOf } = chapterTable({
    anchors: anchorsOf(filedInSagas, filed),
    chapterCeiling: series.chapterCeiling,
    episodeCeiling: series.episodeCeiling,
    records: filedInSagas,
  })
  // The abilities come after the table is built, as One Piece's fruits do,
  // so no ability bounds it.
  const owned = orderByMode(abilities?.records ?? [], 'episode')
  const entities = [...filedInSagas, ...owned]
  const byId = new Map(entities.map((entity) => [entity.id, entity]))
  const cast = castOf({ dossiers, entities: filedInSagas, featured, sagas })
  const places = keptOf(filedInSagas, 'place', placeDossiers)
  const characters = cast.characters
  const dated = datedArchive({ characters, entities, filed, gateOf })
  const features: Features<V> =
    abilities === undefined ?
      {}
    : {
        abilities: abilityFeature({
          characters,
          datedOf: dated.datedOf,
          nen: abilities.nen,
          records: owned,
        }),
      }

  return {
    filed,
    core: {
      entities,
      getEntity: (id) => byId.get(id),
      sagas,
      gateOf,
      chapterAtEpisode,
      ...cast,
      ...dated,
      places: places.records,
      getPlace: places.get,
      placeDossierOf: places.dossierOf,
      // The places map is One Piece's world map; a series without one is #795.
      chartPointOf: () => null,
      features,
    },
  }
}
