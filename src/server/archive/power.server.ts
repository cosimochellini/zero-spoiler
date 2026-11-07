import type { Holding, PowerBody, Seat } from '~/data/features'
import { FACTION_LABELS } from '~/i18n/dictionaries/one-piece/factions'
import type { Gated } from '~/lib/progress/spoiler'
import type { BodyView, PowerPageView, SeatView } from '~/lib/view/power'

import { printedFaction } from './printed.server'
import type { Reader } from './reader.server'

/**
 * What the power page may say at one bookmark (epic #1084).
 *
 * A body the reader has not met is absent, not covered, and so is a seat of
 * one they have: the count of seats is a fact the story tells too. A holder
 * opens at the later of their entry, the seat, the body and the character
 * themselves, so a seat met before its holder is named sends its title and
 * nothing else. Only the latest holder reached is sent, never the next.
 */
export function powerPage(r: Reader): PowerPageView {
  const bodies: BodyView[] = []
  for (const body of r.archive.bodies) {
    if (r.sees(body)) {
      bodies.push(bodyOf(body, r))
    }
  }

  return { bodies }
}

function bodyOf(body: PowerBody, r: Reader): BodyView {
  const seats: SeatView[] = []
  for (const seat of body.seats) {
    if (r.sees(seat.told)) {
      seats.push(seatOf(seat, body, r))
    }
  }

  return {
    id: body.id,
    kind: body.kind,
    name: FACTION_LABELS[r.locale][printedFaction(body.id)],
    ended: body.ended !== undefined && r.sees(body.ended),
    seats,
  }
}

function seatOf(seat: Seat, body: PowerBody, r: Reader): SeatView {
  const title = seat.title[r.locale]
  const holding = seat.holders.findLast((entry) =>
    opens(entry, [body, seat.told], r),
  )
  if (holding === undefined) {
    return { title, state: 'unknown' }
  }
  if (holding.value === null) {
    return { title, state: 'vacant' }
  }

  const character = r.archive.getCharacter(holding.value)
  if (character === undefined) {
    throw new Error(`${body.id} seats ${holding.value}, who is not filed`)
  }

  return {
    title,
    state: 'held',
    holder: { id: character.id, name: character.name[r.locale] },
  }
}

/**
 * Whether the reader has reached a holding: past its own gate, the body's,
 * the seat's and the character's. A holder the reader's source does not
 * tell is not in their archive at all, so that holding never opens for them.
 */
function opens(entry: Holding, owners: Gated[], r: Reader): boolean {
  if (entry.value === null) {
    return owners.every((owner) => r.sees(r.archive.gateOf(entry, owner)))
  }

  const character = r.archive.getCharacter(entry.value)

  return (
    character !== undefined
    && [...owners, character].every((owner) =>
      r.sees(r.archive.gateOf(entry, owner)),
    )
  )
}
