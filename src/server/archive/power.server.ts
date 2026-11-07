import type { PowerBody, Seat } from '~/data/features'
import { FACTION_LABELS } from '~/i18n/dictionaries/one-piece/factions'
import type { BodyView, PowerPageView, SeatView } from '~/lib/view/power'

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
    [body, seat.told].every((owner) => r.sees(r.archive.gateOf(entry, owner))),
  )
  if (holding === undefined) {
    return { title, state: 'unknown' }
  }
  if (holding.value === null) {
    return { title, state: 'vacant' }
  }

  // A holder the reader's source does not tell is not in their archive at
  // all, so that holding never opens for them; nor does one not met yet.
  const character = r.archive.getCharacter(holding.value)
  if (
    character === undefined
    || !r.sees(r.archive.gateOf(holding, character))
  ) {
    return { title, state: 'unknown' }
  }

  return {
    title,
    state: 'held',
    holder: {
      id: character.id,
      name: character.name[r.locale],
      visual: drawingOf(character, r),
    },
  }
}
