import { byNumber, byValue } from 'sort-es'

import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import { formatBounty } from '~/i18n/bounty'
import type { Step } from '~/lib/view/records'
import type { TourBonds, TourCard, TourLink, TourView } from '~/lib/view/tour'
import { translatorOf } from '~/server/copy.server'

import {
  demoArcs,
  demoCast,
  demoDrawings,
  demoOf,
  inDemo,
  stepsOf,
} from './onboarding.server'
import { coveredOf, type Reader } from './reader.server'

/**
 * The hub's tour (#1703): a few records of each series' demo for the tour's
 * screen. Owner ruling 2026-11-26: the tour shows the real demo stretch, and
 * past it only covered records. Every card, fact and link here passes
 * `inDemo`, the landing's own rule, so the tour sends nothing the landing
 * does not. The records are chosen by rule, not by id: an id written here
 * would put a series' data in the server functions' shared chunk
 * (`archive-gate`).
 */

/**
 * How many cards the screen's grid holds: four across and three down, or
 * three across and four down on a phone.
 */
const CAST_COUNT = 12

/** How many abilities under fog stand for the rest: one row of tiles. */
const COVERED_COUNT = 3

/** A single role as the one step it always was, from the record's opening. */
function roleSteps(entity: Entity, r: Reader): Step<string>[] {
  const { role } = demoOf(entity, r)
  if (role === undefined) {
    return []
  }
  return typeof role === 'string' ?
      [
        {
          revealedAtEpisode: entity.revealedAtEpisode,
          revealedAtChapter: entity.revealedAtChapter,
          value: role,
        },
      ]
    : role
}

function cardOf(entity: Entity, r: Reader): TourCard {
  const entry = demoOf(entity, r)
  const t = translatorOf(r.archive.series, r.locale)
  const bounty =
    r.archive.series.features.bounty ?
      entry.bounty.map((step) => ({
        ...step,
        value: formatBounty(step.value, r.locale, t) ?? '',
      }))
    : []
  return {
    ...entry,
    bounty,
    drawings: demoDrawings(entity, r),
    role: roleSteps(entity, r),
  }
}

/**
 * The demo's leads who lead the most of its arcs, as many as the grid holds,
 * in the order the story opens them: the crew before the one-arc villains.
 * A tie for the last cards goes to whoever the story opens first.
 */
function castOf(r: Reader): Entity[] {
  const arcs = demoArcs(r)
  const cast = demoCast(arcs, r)
  const arcsLed = new Map<string, number>()
  for (const arc of arcs) {
    const leads = r.archive.leads[arc.id]
    if (leads === undefined) {
      continue
    }
    for (const id of leads) {
      arcsLed.set(id, (arcsLed.get(id) ?? 0) + 1)
    }
  }
  const mostLed = byValue(
    (entity: Entity) => arcsLed.get(entity.id) ?? 0,
    byNumber({ desc: true }),
  )
  const kept = new Set(cast.toSorted(mostLed).slice(0, CAST_COUNT))
  return cast.filter((entity) => kept.has(entity))
}

/** The lead whose list of people changes most often inside the demo. */
function mostBonded(cast: Entity[], r: Reader): Entity | undefined {
  let best: Entity | undefined
  let most = 1
  for (const entity of cast) {
    const changes = r.archive
      .datedOf(entity, 'relationships')
      .filter(({ gate }) => inDemo(gate, r)).length
    if (changes <= most) {
      continue
    }
    best = entity
    most = changes
  }
  return best
}

/** One character's list of people, each snapshot cut to the demo's people. */
export function bondsOf(owner: Entity, r: Reader): TourBonds {
  const people = new Map<string, Entity>()
  const snapshots = stepsOf(
    r.archive.datedOf(owner, 'relationships'),
    (links) =>
      links.flatMap(({ character, type }): TourLink[] => {
        const person = r.archive.getCharacter(character)
        if (person === undefined || !inDemo(person, r)) {
          return []
        }
        people.set(person.id, person)
        return [{ id: person.id, type: type[r.locale] }]
      }),
    r,
  )
  return {
    of: owner.id,
    people: Array.from(people.values(), (person) => ({
      id: person.id,
      name: person.name[r.locale],
      revealedAtEpisode: person.revealedAtEpisode,
      revealedAtChapter: person.revealedAtChapter,
    })),
    snapshots,
  }
}

/** The tour's slice of one series: its leads, one's people, and the fog. */
export function tourPage(r: Reader): TourView {
  const entities = castOf(r)
  // Only Hunter x Hunter's step draws a list of people and covered tiles,
  // its Nen abilities; another series sends neither.
  const nen = r.archive.series.features.nen
  const owner = nen ? mostBonded(entities, r) : undefined
  const past =
    nen ?
      orderByMode(r.archive.abilities, 'episode').filter(
        (entity) => !inDemo(entity, r),
      )
    : []

  return {
    ...(owner !== undefined && { bonds: bondsOf(owner, r) }),
    cast: entities.map((entity) => cardOf(entity, r)),
    covered: past
      .slice(0, COVERED_COUNT)
      .map((entity) => coveredOf(entity, r.archive)),
    fogged: r.archive.entities.filter((entity) => !inDemo(entity, r)).length,
    lastEpisode: r.archive.series.demoLastEpisode,
  }
}
