import type { PowerBody, Seat } from '~/data/features'
import type { Entity } from '~/data/types'
import { FACTION_LABELS } from '~/i18n/dictionaries/one-piece/factions'
import type {
  BodyView,
  PowerPageView,
  SeatLink,
  SeatView,
} from '~/lib/view/power'

import { printedFaction } from './printed.server'
import { drawingOf } from './project.server'
import type { Reader } from './reader.server'

/**
 * What the power page may say at one bookmark (epic #1084).
 *
 * A body the reader has not met is absent, not covered, and so is a seat of
 * one they have: the count of seats is a fact the story tells too. A holder
 * opens at the later of their entry, the seat, the body and the character
 * themselves, so a seat met before its holder is named sends its title and
 * nothing else. The latest change the reader has reached decides the seat:
 * once it is told, the holder before it is gone, so a change to someone not
 * met yet sends the title alone too, never the old holder nor the new one.
 * Only a holder reached sends a drawing: the one at the reader's bookmark.
 * A body's description is the latest version the reader has reached, in
 * their medium, and only that one: a later version never travels ahead.
 *
 * A body is listed only once the reader sees a seat of it held or vacant
 * (#1194): a name over seats all under fog is one the reader may not
 * recognise. Such a body sends nothing, not even its place in the order;
 * `fogged` says only that at least one exists, never how many.
 */
export function powerPage(r: Reader): PowerPageView {
  const bodies: BodyView[] = []
  let fogged = false
  for (const body of r.archive.bodies) {
    if (!r.sees(body)) {
      continue
    }
    const view = bodyOf(body, r)
    if (view.seats.some((seat) => seat.state !== 'unknown')) {
      bodies.push(view)
    } else {
      fogged = true
    }
  }

  return fogged ? { bodies, fogged } : { bodies }
}

function bodyOf(body: PowerBody, r: Reader): BodyView {
  const seats: SeatView[] = []
  for (const seat of body.seats) {
    if (r.sees(seat.told)) {
      seats.push(seatOf(seat, body, r))
    }
  }

  const described = body.description.findLast((version) =>
    r.sees(r.archive.gateOf(version, body)),
  )

  return {
    ...(described !== undefined && { description: described.value[r.locale] }),
    id: body.id,
    kind: body.kind,
    name: labelOf(body, r),
    ended: body.ended !== undefined && r.sees(body.ended),
    seats,
  }
}

function seatOf(seat: Seat, body: PowerBody, r: Reader): SeatView {
  const title = seat.title[r.locale]
  const holder = holderOf(seat, body, r)
  if (holder === undefined) {
    return { title, state: 'unknown' }
  }
  if (holder === null) {
    return { title, state: 'vacant' }
  }

  return {
    title,
    state: 'held',
    holder: {
      id: holder.id,
      name: holder.name[r.locale],
      visual: drawingOf(holder, r),
    },
  }
}

/**
 * Who sits in a seat at the reader's bookmark: a character, `null` once it is
 * vacant, `undefined` while it is under fog. The power page and a
 * character's own page (`seatsHeldBy`) both ask here, so the two can never
 * disagree on who holds what.
 */
function holderOf(
  seat: Seat,
  body: PowerBody,
  r: Reader,
): Entity | null | undefined {
  // A holder the reader's source does not tell is not in their archive at
  // all, so that change never happened for them and the source's own last
  // holder stays. A mistyped id is caught by `bodyFaults`, not here.
  const holding = seat.holders.findLast(
    (entry) =>
      (entry.value === null
        || r.archive.getCharacter(entry.value) !== undefined)
      && [body, seat.told].every((owner) =>
        r.sees(r.archive.gateOf(entry, owner)),
      ),
  )
  if (holding === undefined) {
    return undefined
  }
  if (holding.value === null) {
    return null
  }

  // A change told before its holder is met names no one yet: the seat is
  // fogged, neither the old holder nor the new.
  const character = r.archive.getCharacter(holding.value)

  return (
      character !== undefined && r.sees(r.archive.gateOf(holding, character))
    ) ?
      character
    : undefined
}

/**
 * The seats a character holds at the reader's bookmark, for their own page
 * (#1095): exactly the seats the power page shows them in, by the same
 * `holderOf`, less those of a body that has ended, which they hold no more.
 * Only the current seat: a past one is history, which the power page does
 * not tell either. A council's seat title names its body already
 * ("Emperor"), so only a chain's or a crew's sends the body's name too.
 */
export function seatsHeldBy(entity: Entity, r: Reader): SeatLink[] {
  return r.archive.bodies.flatMap((body) =>
    stands(body, r) ? heldIn(body, entity, r) : [],
  )
}

/** The seats of one body a character holds at the bookmark. */
function heldIn(body: PowerBody, entity: Entity, r: Reader): SeatLink[] {
  const held: SeatLink[] = []
  for (const seat of body.seats) {
    if (!r.sees(seat.told) || holderOf(seat, body, r)?.id !== entity.id) {
      continue
    }
    held.push({
      id: body.id,
      title: seat.title[r.locale],
      ...nameIfUntold(body, r),
    })
  }

  return held
}

/** Whether the reader has met a body and not yet seen it end. */
function stands(body: PowerBody, r: Reader): boolean {
  return r.sees(body) && (body.ended === undefined || !r.sees(body.ended))
}

/** A chain's or a crew's name, which its seat titles do not say. */
function nameIfUntold(body: PowerBody, r: Reader): { body?: string } {
  return body.kind === 'council' ? {} : { body: labelOf(body, r) }
}

/** A body's name as the pages print it. */
function labelOf(body: PowerBody, r: Reader): string {
  return FACTION_LABELS[r.locale][printedFaction(body.id)]
}
