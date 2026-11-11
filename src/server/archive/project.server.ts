import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import { foldName } from '~/lib/search/fold'
import type { AbilityView } from '~/lib/view/abilities'
import type { CharacterFacts, RecordLink } from '~/lib/view/facts'
import type {
  CharacterView,
  Drawing,
  EaterView,
  FruitForm,
  FruitView,
  RecordView,
  Searchable,
  SearchableCharacter,
  SpecimenView,
  WaypointView,
} from '~/lib/view/records'

import type { Reader } from './reader.server'

/**
 * Records into the shapes a page is allowed to see.
 *
 * Every projection resolves the strings to one locale and drops everything
 * the page does not print, which is most of a record. Each takes the reader,
 * which carries the locale and the bookmark both. The covered projection is
 * the reader's own (`./reader.server`): it is the only thing a reader is told
 * about a record they have not reached, so what it leaves out is the feature.
 */

/**
 * The drawing as it stands at the reader's bookmark. A record drawn again
 * later in the story follows the bookmark like a dossier fact does, and a
 * reader who has reached no redrawing — none set, or no bookmark — is shown
 * the first drawing, which fails closed.
 */
export function drawingOf(entity: Entity, r: Reader): Drawing {
  return {
    strokes:
      r.archive.latestOf(r, entity, 'redrawing')
      ?? r.archive.drawings[entity.visual.art]
      ?? [],
    tint: entity.visual.tint,
  }
}

/**
 * A record with its strokes left behind for the page to ask for later
 * (`Drawing.deferred`), so a long list does not ship every drawing on it.
 */
export function deferredOf<T extends Pick<RecordView, 'visual'>>(view: T): T {
  return {
    ...view,
    visual: { strokes: [], tint: view.visual.tint, deferred: true },
  }
}

/** A record as a small tile draws it: a name, a drawing, two thresholds. */
export function recordOf(entity: Entity, r: Reader): RecordView {
  return {
    id: entity.id,
    kind: entity.kind,
    name: entity.name[r.locale],
    visual: drawingOf(entity, r),
    revealedAtEpisode: entity.revealedAtEpisode,
    revealedAtChapter: entity.revealedAtChapter,
  }
}

/** A character, with the role their dossier gives them. */
export function characterOf(entity: Entity, r: Reader): CharacterView {
  const role = r.archive.roleOf(r, entity)

  return {
    ...recordOf(entity, r),
    ...(role !== undefined && { role: role[r.locale] }),
  }
}

/** A waypoint on the landing chart, which does print a summary. */
export function waypointOf(entity: Entity, r: Reader): WaypointView {
  return { ...recordOf(entity, r), summary: entity.summary[r.locale] }
}

/** A record's searchable surface, folded: the shown name and what matches it. */
function foldedOf(shown: string, aliases: string[]): Searchable {
  return { name: shown, folded: foldName(shown), aliases: foldAll(aliases) }
}

/** Names folded for matching, with the empty ones dropped. */
function foldAll(names: string[]): string[] {
  return names.flatMap((alias) => {
    const folded = foldName(alias)

    return folded === '' ? [] : folded
  })
}

/** A record's name in every locale but the one the page is drawn in. */
function otherNames(entity: Entity, locale: Locale): string[] {
  return LOCALES.flatMap((other) =>
    other === locale ? [] : entity.name[other],
  )
}

/**
 * The epithets the reader has reached, in both locales.
 *
 * Gated here rather than in the browser: an epithet learned later than the
 * reader's episode would confirm a name the fog is meant to hide, and now it
 * is not sent at all rather than sent and declined.
 */
function reachedEpithets(entity: Entity, r: Reader): string[] {
  return r.archive
    .reachedOf(r, entity, 'epithet')
    .flatMap((entry) => LOCALES.map((other) => entry.value[other]))
}

/**
 * A record's own searchable surface: its name, and the other locale's as an
 * alias, so an Italian reader who types the English name still finds it.
 */
export function namedOf(entity: Entity, r: Reader): Searchable {
  return foldedOf(entity.name[r.locale], otherNames(entity, r.locale))
}

/**
 * A character with its searchable surface folded, and gated.
 *
 * The aliases are the other locale's name — an Italian reader who knows the
 * character as Luffy should still find Rufy — and the epithets the reader has
 * already reached.
 */
export function searchableOf(entity: Entity, r: Reader): SearchableCharacter {
  return {
    ...characterOf(entity, r),
    ...foldedOf(entity.name[r.locale], [
      ...otherNames(entity, r.locale),
      ...reachedEpithets(entity, r),
    ]),
  }
}

/**
 * A devil fruit as the specimen sheet draws it.
 *
 * The kind is passed in rather than looked up, because the sheet is built one
 * plate at a time and already knows which plate it is setting: a projection
 * that guessed would put a fruit on the wrong one rather than fail.
 */
export function fruitOf(entity: Entity, form: FruitForm, r: Reader): FruitView {
  return {
    ...recordOf(entity, r),
    form,
    summary: entity.summary[r.locale],
    ...namedOf(entity, r),
  }
}

/**
 * The users of a record (a fruit's eaters, an ability's users) the caller
 * has already gated, each as a crest and a name, and the record's aliases
 * with their names in both locales joined to them, so "Luffy" finds the
 * Gum-Gum Fruit and so does "Rufy". Only the users passed in are folded, so
 * a search can only ever answer with a user the tile shows.
 */
function usedBy(
  record: Searchable,
  users: Entity[],
  r: Reader,
): { aliases: string[]; crests: EaterView[] } {
  // Each once: most users go by the same name in both locales.
  const named = foldAll(
    users.flatMap((user) => LOCALES.map((locale) => user.name[locale])),
  ).filter(
    (alias, at, all) =>
      all.indexOf(alias) === at && !record.aliases.includes(alias),
  )

  return {
    aliases: [...record.aliases, ...named],
    crests: users.map((user) => ({
      id: user.id,
      name: user.name[r.locale],
      visual: drawingOf(user, r),
    })),
  }
}

/**
 * A devil fruit as its tile in the album draws it: the fruit (`fruitOf`), and
 * the eaters the caller has already gated (`usedBy`).
 */
export function specimenOf(
  fruit: FruitView,
  eaters: Entity[],
  r: Reader,
): SpecimenView {
  const { aliases, crests } = usedBy(fruit, eaters, r)

  return { ...fruit, aliases, eaters: crests }
}

/**
 * A Nen ability as its tile and its page draw it: the record, its Nen type
 * when it has one, its sentence, and the users the caller has already gated
 * (`usedBy`).
 */
export function abilityOf(
  entity: Entity,
  users: Entity[],
  r: Reader,
): AbilityView {
  const nen = r.archive.abilityNenOf(entity)
  const named = namedOf(entity, r)
  const { aliases, crests } = usedBy(named, users, r)

  return {
    ...recordOf(entity, r),
    ...(nen !== undefined && { nen }),
    summary: entity.summary[r.locale],
    ...named,
    aliases,
    users: crests,
  }
}

/**
 * The records one dossier entry names (fruits, abilities), as links to their
 * own pages, through the lookup of their kind.
 *
 * An id the lookup does not find is dropped rather than printed, which fails
 * closed: a row that named a record with no page would be a dead link on a
 * page the reader has reached. `undefined` for no entry and for an entry that
 * named nothing, because an empty "Devil fruit" row says a fruit is coming,
 * and that is itself a spoiler.
 */
function linksFor(
  ids: string[] | undefined,
  lookup: (id: string) => Entity | undefined,
  r: Reader,
): RecordLink[] | undefined {
  if (ids === undefined) {
    return undefined
  }

  const links = ids.flatMap((id) => {
    const record = lookup(id)

    return record === undefined ?
        []
      : { id: record.id, name: record.name[r.locale] }
  })

  return links.length === 0 ? undefined : links
}

/**
 * A dossier's facts as they stand at the reader's bookmark. A fact they have
 * not reached is not in the result, so it is not in the payload either.
 */
export function factsOf(entity: Entity, r: Reader): CharacterFacts {
  return {
    mode: 'facts',
    ...wordFactsOf(entity, r),
    ...codedFactsOf(entity, r),
  }
}

/**
 * The facts themselves, before `mode` is set on them.
 *
 * Every one is optional, and an absent one is absent rather than `undefined`:
 * under `exactOptionalPropertyTypes` those are different types, and the
 * difference is the feature — a key that is not there is a row the page does
 * not draw.
 */
type ReachedFacts = Omit<Extract<CharacterFacts, { mode: 'facts' }>, 'mode'>

/** The facts that are prose, in the reader's own language. */
function wordFactsOf(entity: Entity, r: Reader): ReachedFacts {
  const words = (
    field: 'affiliation' | 'epithet' | 'origin',
  ): string | undefined => r.archive.latestOf(r, entity, field)?.[r.locale]

  const epithet = words('epithet')
  const affiliation = words('affiliation')
  const origin = words('origin')

  return {
    ...(epithet !== undefined && { epithet }),
    ...(affiliation !== undefined && { affiliation }),
    ...(origin !== undefined && { origin }),
  }
}

/**
 * The facts that are not prose: a state, a fruit, a number, a Nen type.
 *
 * Split from the prose half because one projection spreading six optional
 * facts is one `&&` over the complexity ceiling, and the ceiling is the
 * review budget rather than a number to argue with.
 */
function codedFactsOf(entity: Entity, r: Reader): ReachedFacts {
  const status = r.archive.latestOf(r, entity, 'status')
  const devilFruit = linksFor(
    r.archive.latestOf(r, entity, 'devilFruit'),
    r.archive.getFruit,
    r,
  )
  const bounty = r.archive.latestOf(r, entity, 'bounty')
  const nen = r.archive.latestOf(r, entity, 'nen')

  return {
    ...(status !== undefined && { status }),
    ...(devilFruit !== undefined && { devilFruit }),
    ...(bounty !== undefined && { bounty }),
    ...(nen !== undefined && { nen }),
    ...abilityFactsOf(entity, r),
  }
}

/**
 * The abilities row: only abilities the reader has reached become links. A
 * data test holds that no entry opens before the ability it names, so this
 * drops nothing filed right; it fails closed on anything else.
 */
function abilityFactsOf(entity: Entity, r: Reader): ReachedFacts {
  const abilities = linksFor(
    r.archive.latestOf(r, entity, 'ability'),
    (id) => {
      const ability = r.archive.getAbility(id)
      return ability !== undefined && r.sees(ability) ? ability : undefined
    },
    r,
  )

  return abilities === undefined ? {} : { abilities }
}
