import type { Entity } from '~/data/types'
import type {
  AbilityBandView,
  AbilityDetail,
  AbilitySheetView,
  AbilityView,
} from '~/lib/view/abilities'
import type { AbilityNen } from '~/lib/view/facts'
import type { DocumentHead } from '~/lib/view/records'

import { gatedOf } from './fruits.server'
import { headFor, type HeadKeys } from './head.server'
import { abilityOf, deferredOf } from './project.server'
import type { Reader } from './reader.server'

/**
 * What the abilities page and an ability's own page are allowed to know:
 * Hunter x Hunter's Nen abilities, a record kind of the series' own (#923).
 */

/** The plates, in the order the page sets them out; no type comes last. */
const PLATES: (AbilityNen | null)[] = [
  'enhancer',
  'transmuter',
  'emitter',
  'conjurer',
  'manipulator',
  'specialist',
  null,
]

/**
 * How many open tiles ship their drawings with them: a phone's first screen,
 * two across, and the first row of a wide one. The rest come by id.
 */
const INLINE_ABILITIES = 6

/** What an ability's page calls itself, open and under fog. */
const ABILITY_HEAD: HeadKeys = {
  foggedDescription: 'ability.foggedDescription',
  foggedTitle: 'ability.foggedTitle',
  pageTitle: 'ability.pageTitle',
}

/**
 * The users of an ability the reader has reached, in `usersOf` order. The
 * rest are dropped rather than covered, as a fruit's eaters on its tile: a
 * place kept for them would count them.
 */
function openUsers(id: string, r: Reader): Entity[] {
  return r.archive
    .usersOf(id)
    .flatMap((user) => (r.sees(gatedOf(user)) ? [user.entity] : []))
}

/** An open ability, with the users the reader has reached. */
export function openAbilityOf(entity: Entity, r: Reader): AbilityView {
  return abilityOf(entity, openUsers(entity.id, r), r)
}

/**
 * The abilities page: the open abilities by Nen type, a plate per type that
 * has one and the abilities with no type told last, and every covered
 * ability in one list, so no plate counts or places a covered one. Past the
 * first few tiles the drawings are left for the page to ask for.
 */
export function abilitySheet(r: Reader): AbilitySheetView {
  const { covered, open, total } = r.split(r.archive.abilities, (entity) =>
    openAbilityOf(entity, r),
  )
  const bands: AbilityBandView[] = PLATES.flatMap((nen) => {
    const plate = open.filter((ability) => (ability.nen ?? null) === nen)

    return plate.length === 0 ? [] : { nen, open: plate }
  })
  const inline = new Set(
    bands
      .flatMap((band) => band.open)
      .slice(0, INLINE_ABILITIES)
      .map(({ id }) => id),
  )

  return {
    filed: total,
    covered,
    bands: bands.map((band) => ({
      ...band,
      open: band.open.map((ability) =>
        inline.has(ability.id) ? ability : (
          {
            ...deferredOf(ability),
            users: ability.users.map((user) => deferredOf(user)),
          }
        ),
      ),
    })),
  }
}

/** An ability's own page: what names it, and what it says. */
export interface AbilityPage {
  detail: AbilityDetail
  head: DocumentHead
}

/**
 * An ability's page, or `undefined` for an id the archive does not file as
 * an ability: the route turns that into its 404, as a fruit's does.
 */
export function abilityPage(id: string, r: Reader): AbilityPage | undefined {
  const entity = r.archive.getAbility(id)
  if (entity === undefined) {
    return undefined
  }

  return {
    head: headFor(entity, ABILITY_HEAD, r),
    detail: { slot: r.slot(entity, (seen) => openAbilityOf(seen, r)) },
  }
}
