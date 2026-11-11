import { datedArchive, usersBy } from '~/data/dated'
import type { Reveal } from '~/data/reveal'
import type { Entity } from '~/data/types'
import type { Faction } from '~/lib/view/records'

import { FILED, gateOf } from './chapter-table'
import { characters, getCharacter } from './characters'
import { entities } from './entities'
import { CHARACTER_DOSSIERS } from './sagas'

/**
 * One Piece's dated facts, as one reader may read them (`~/data/dated`), and
 * the two its features add: a character's factions and a fruit's eaters,
 * gated the same way.
 */
export const {
  datedOf,
  latestOf,
  nativesOf,
  reachedOf,
  redrawn,
  roleOf,
  stories,
  timelines,
} = datedArchive({ characters, entities, filed: FILED, gateOf })

/**
 * The factions a character stands with for this reader: the tags of the
 * latest affiliation entry they have reached, the same entry `latestOf`
 * prints. Its own function because `Fields` reads an affiliation as its prose
 * alone; `undefined` with no entry reached yet.
 */
export function factionsOf(at: Reveal, owner: Entity): Faction[] | undefined {
  return CHARACTER_DOSSIERS[owner.id]?.affiliation.findLast((entry) =>
    at.sees(gateOf(entry, owner)),
  )?.factions
}

/**
 * A character the dossiers say ate a fruit, and the gate of the entry that
 * says so: the later of that entry and the character, because a character
 * filed long before the story says what they ate must not be named as an
 * eater the moment the reader meets them.
 */
export type { Eater } from '~/data/features'

/**
 * Every character the dossiers say ate this fruit, earliest first, read in
 * the order the dossiers are filed (`usersBy`). Empty for an id the archive
 * does not file, which is the same answer a fruit nobody has eaten would
 * give — and a data test holds that there is no such fruit.
 */
export const eatersOf = usersBy(
  Object.keys(CHARACTER_DOSSIERS).flatMap((id) => getCharacter(id) ?? []),
  (character) => datedOf(character, 'devilFruit'),
)
