import { orderByMode } from '~/data/order'
import type { Entity } from '~/data/types'
import { formatBounty } from '~/i18n/bounty'
import type { Step } from '~/lib/view/records'
import type { TourBonds, TourCard, TourLink, TourView } from '~/lib/view/tour'
import { translatorOf } from '~/server/copy.server'

import { demoDrawings, demoOf, inDemo, stepsOf } from './onboarding.server'
import { coveredOf, type Reader } from './reader.server'

/**
 * The hub's tour (#1703): the records each series shows on the tour's screen.
 * Owner ruling 2026-11-26: the tour shows the real demo stretch, and past it
 * only covered records. Every card, fact and link here passes `inDemo`, the
 * landing's own rule, so the tour sends nothing the landing does not.
 */
interface Pick {
  /** The character whose list of people the tour follows. */
  bonds?: string
  cast: string[]
  /** Covered tiles from the series' Nen abilities instead of its route. */
  coveredAbilities?: boolean
}

const PICKS: Record<string, Pick> = {
  'one-piece': {
    cast: [
      'monkey-d-luffy',
      'roronoa-zoro',
      'nami',
      'buggy',
      'usopp',
      'kuro',
      'sanji',
      'zeff',
      'don-krieg',
      'dracule-mihawk',
      'arlong',
      'smoker',
    ],
  },
  'game-of-thrones': {
    cast: [
      'eddard-stark',
      'jon-snow',
      'arya-stark',
      'daenerys-targaryen',
      'tyrion-lannister',
    ],
  },
  'hunter-x-hunter': {
    bonds: 'killua',
    cast: ['killua', 'gon-freecss'],
    coveredAbilities: true,
  },
}

/** How many covered tiles stand for what is past the demo. */
const COVERED_COUNT = 6

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

/** One character's list of people, each snapshot cut to the demo's people. */
function bondsOf(id: string, r: Reader): TourBonds | undefined {
  const owner = r.archive.getCharacter(id)
  if (owner === undefined) {
    return undefined
  }
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
    of: id,
    people: Array.from(people.values(), (person) => ({
      id: person.id,
      name: person.name[r.locale],
      revealedAtEpisode: person.revealedAtEpisode,
      revealedAtChapter: person.revealedAtChapter,
    })),
    snapshots,
  }
}

/** The tour's slice of one series. A series with no picks sends no cards. */
export function tourPage(r: Reader): TourView {
  const pick = PICKS[r.archive.series.slug] ?? { cast: [] }
  const cast = pick.cast.flatMap((id) => {
    const entity = r.archive.getCharacter(id)
    return entity !== undefined && inDemo(entity, r) ? [cardOf(entity, r)] : []
  })
  const past = orderByMode(
    pick.coveredAbilities === true ? r.archive.abilities : r.archive.chart,
    'episode',
  ).filter((entity) => !inDemo(entity, r))
  const bonds = pick.bonds === undefined ? undefined : bondsOf(pick.bonds, r)

  return {
    ...(bonds !== undefined && { bonds }),
    cast,
    covered: past
      .slice(0, COVERED_COUNT)
      .map((entity) => coveredOf(entity, r.archive)),
    fogged: r.archive.entities.filter((entity) => !inDemo(entity, r)).length,
    lastEpisode: r.archive.series.demoLastEpisode,
    total: r.archive.entities.length,
  }
}
