import type { Body } from '~/data/features'
import type { Entity, SeriesArchive } from '~/data/types'
import type { Gated } from '~/lib/progress/spoiler'

import { ONE_PIECE_LOADED } from './series'

/** A real One Piece character, so the leak sweep knows their gate. */
function character(id: string): Entity {
  const found = ONE_PIECE_LOADED.archive.getCharacter(id)
  if (found === undefined) {
    throw new Error(`${id} is not filed`)
  }
  return found
}

/** Who the fixture seats: one met early, one met much later. */
export const EARLY = character('dracule-mihawk')
export const LATE = character('boa-hancock')

/** When the fixture's first seat is vacated and its third one told. */
export const MIDWAY = { episode: 300, chapter: 390 }

const BODY_GATE: Gated = {
  revealedAtEpisode: EARLY.revealedAtEpisode,
  revealedAtChapter: EARLY.revealedAtChapter,
}

/**
 * A test body, filed nowhere (#1085), over the One Piece archive: the
 * Warlords' id, because a body's id is a group's. Its first seat is held by
 * `EARLY` from the body's gate and vacated `MIDWAY`; its second is told
 * with the body, left unnamed until `LATE` takes it (an entry dated before
 * `LATE` is met, so it waits for them), then taken by `EARLY` in the manga
 * alone; its third is told `MIDWAY` and never filled. The body ends at
 * episode 500, chapter 600.
 */
export const FIXTURE_BODY: Body = {
  ...BODY_GATE,
  id: 'warlords',
  kind: 'council',
  seats: [
    {
      told: BODY_GATE,
      title: { en: 'Fixture Throne', it: 'Trono di prova' },
      holders: [
        {
          episode: EARLY.revealedAtEpisode,
          chapter: EARLY.revealedAtChapter,
          value: EARLY.id,
        },
        { ...MIDWAY, value: null },
      ],
    },
    {
      told: BODY_GATE,
      title: { en: 'Fixture Crown', it: 'Corona di prova' },
      holders: [
        { ...MIDWAY, value: LATE.id },
        { episode: 520, chapter: 620, source: 'chapter', value: EARLY.id },
      ],
    },
    {
      told: {
        revealedAtEpisode: MIDWAY.episode,
        revealedAtChapter: MIDWAY.chapter,
      },
      title: { en: 'Fixture Sceptre', it: 'Scettro di prova' },
      holders: [],
    },
  ],
  ended: { revealedAtEpisode: 500, revealedAtChapter: 600 },
}

/** The One Piece archive with the fixture as its only body. */
export const POWER_ARCHIVE: SeriesArchive = {
  ...ONE_PIECE_LOADED.archive,
  features: {
    ...ONE_PIECE_LOADED.archive.features,
    power: { bodies: [FIXTURE_BODY] },
  },
}

/** Whether `later` opens no earlier than `earlier` in either unit. */
function noEarlier(later: Gated, earlier: Gated): boolean {
  return (
    later.revealedAtEpisode >= earlier.revealedAtEpisode
    && later.revealedAtChapter >= earlier.revealedAtChapter
  )
}

/**
 * What is wrong with a series' bodies of power, as messages; none for a
 * sound list. A seat opens no earlier than its body, and its holders no
 * earlier than the seat, in timeline order, inside the series' ceilings,
 * each naming a filed character; an end comes no earlier than the body.
 */
export function bodyFaults(bodies: Body[], archive: SeriesArchive): string[] {
  const { chapterCeiling, episodeCeiling } = archive.series
  const faults: string[] = []
  const ids = new Set<string>()

  for (const body of bodies) {
    if (ids.has(body.id)) {
      faults.push(`${body.id} is filed twice`)
    }
    ids.add(body.id)
    if (body.ended !== undefined && !noEarlier(body.ended, body)) {
      faults.push(`${body.id} ends before it opens`)
    }

    for (const [at, seat] of body.seats.entries()) {
      const label = `${body.id} seat ${String(at)}`
      if (!noEarlier(seat.told, body)) {
        faults.push(`${label} opens before its body`)
      }

      let previous: { chapter: number; episode: number } | undefined
      for (const holding of seat.holders) {
        const gate = {
          revealedAtEpisode: holding.episode,
          revealedAtChapter: holding.chapter,
        }
        if (!noEarlier(gate, seat.told)) {
          faults.push(`${label} has a holder before the seat`)
        }
        if (
          previous !== undefined
          && (holding.episode <= previous.episode
            || holding.chapter < previous.chapter)
        ) {
          faults.push(`${label} holders are out of order`)
        }
        if (
          holding.episode > episodeCeiling
          || holding.chapter > chapterCeiling
        ) {
          faults.push(`${label} has a holder past the ceiling`)
        }
        if (
          holding.value !== null
          && archive.getCharacter(holding.value) === undefined
        ) {
          faults.push(`${label} seats ${holding.value}, who is not filed`)
        }
        previous = holding
      }
    }
  }

  return faults
}
