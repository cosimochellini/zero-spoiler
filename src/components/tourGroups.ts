import { type DialPoint, dialSees, latestStep } from '~/components/dial'
import type { TourBonds, TourCard, TourLink } from '~/lib/view/tour'

/**
 * The open cards by group: an affiliation's head, so "House Stark, small
 * council" is House Stark's.
 */
export function groupsAt(
  cast: TourCard[],
  at: DialPoint,
): [string, TourCard[]][] {
  const groups = new Map<string, TourCard[]>()
  for (const card of cast) {
    const affiliation = latestStep(card.affiliation, at)
    if (affiliation === undefined || !dialSees(at, card)) {
      continue
    }
    const [group = affiliation] = affiliation.split(',', 1)
    groups.set(group, [...(groups.get(group) ?? []), card])
  }
  return [...groups]
}

/** A link in a character's list, with the name of the person it names. */
export interface NamedLink extends TourLink {
  name: string
}

/** The people a character's list names at the point, each once they open. */
export function linksAt(bonds: TourBonds, at: DialPoint): NamedLink[] {
  const people = new Map(bonds.people.map((person) => [person.id, person]))
  const snapshot = latestStep(bonds.snapshots, at)
  const links: NamedLink[] = []
  if (snapshot === undefined) {
    return links
  }
  for (const link of snapshot) {
    const person = people.get(link.id)
    if (person !== undefined && dialSees(at, person)) {
      links.push({ ...link, name: person.name })
    }
  }
  return links
}
