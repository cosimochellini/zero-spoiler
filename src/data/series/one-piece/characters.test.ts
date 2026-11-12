import { byNumber } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type { Timeline } from '~/data/types'

import {
  characters,
  dossierOf,
  FEATURED_CHARACTER_IDS,
  featuredCharacters,
  getCharacter,
} from './characters'
import { stories } from './dated'
import { FILLER, FILLER_ARCS, LAST_AIRED } from './filler'

/**
 * One Piece's own rules about its characters: its featured list, its
 * bounties and chronicles. The rules every
 * series' characters follow (dossiers, statuses, chronicles, shelves) are
 * in `~/data/archive.test.ts`.
 */

/** Every bounty timeline, named by the character it came from. */
const BOUNTY_TIMELINES: { label: string; timeline: Timeline<number> }[] =
  characters.flatMap((character) => {
    const timeline = dossierOf(character)?.bounty

    return timeline === undefined ?
        []
      : { label: `${character.id}.bounty`, timeline }
  })

/** The most canon episodes in a row an episode viewer may go without a story. */
const MAX_UNTOLD = 5

/**
 * The runs over `MAX_UNTOLD` the chronicle still has, as `last story→next
 * story`. Each is to be filled in #1163; none may be added.
 */
const KNOWN_GAPS = [
  '798→806',
  '936→943',
  '965→976',
  '1002→1009',
  '1046→1055',
  '1094→1101',
  '1156→LAST_AIRED',
]

/** The episodes the filler guide numbers; every other aired one is canon. */
const NUMBERED = new Set(
  FILLER.flatMap((entry) => ('episode' in entry ? entry.episode : [])),
)

/** The aired episodes the filler guide does not number. */
const CANON = Array.from(
  { length: LAST_AIRED },
  (_, index) => index + 1,
).filter((episode) => !NUMBERED.has(episode))

/**
 * The runs of more than `MAX_UNTOLD` canon episodes between two told ones,
 * as `last story→next story`, the last run closed by `LAST_AIRED`.
 */
function untoldRuns(told: Set<number>): string[] {
  let last = 0

  return [...[...told].toSorted(byNumber()), LAST_AIRED + 1].flatMap((next) => {
    const from = last
    const untold = CANON.filter((episode) => episode > from && episode < next)
    const to = next > LAST_AIRED ? 'LAST_AIRED' : String(next)
    last = next

    return untold.length > MAX_UNTOLD ? `${String(from)}→${to}` : []
  })
}

describe('the featured list', () => {
  it('lists exactly thirty-six distinct characters that all exist', () => {
    const distinct = new Set(FEATURED_CHARACTER_IDS)

    expect(FEATURED_CHARACTER_IDS).toHaveLength(36)
    expect(distinct.size).toBe(36)

    for (const id of FEATURED_CHARACTER_IDS) {
      expect(getCharacter(id)?.kind, id).toBe('character')
    }

    expect(featuredCharacters).toHaveLength(36)
  })
})

describe('the dossiers', () => {
  it('says what became of every featured character', () => {
    for (const character of featuredCharacters) {
      expect(
        dossierOf(character)?.status?.length,
        character.id,
      ).toBeGreaterThan(0)
    }
  })

  it('files every bounty as a whole number of Berry above zero', () => {
    for (const { label, timeline } of BOUNTY_TIMELINES) {
      for (const entry of timeline) {
        expect(Number.isSafeInteger(entry.value), label).toBe(true)
        expect(entry.value, label).toBeGreaterThan(0)
      }
    }
  })
})

describe('the chronicles', () => {
  it('tells the story of every featured character, in several stories', () => {
    // A character the chart puts in evidence has a chronicle, and one of
    // more than a story or two; a featured character with none is a test
    // failure, so a chronicle cannot be dropped by accident.
    for (const character of featuredCharacters) {
      const chronicle = dossierOf(character)?.chronicle

      expect(chronicle?.length, character.id).toBeGreaterThanOrEqual(4)
    }
  })

  it('leaves no more than five canon episodes in a row without a story', () => {
    // The home page's "Just happened" is built from the stories, so a run of
    // episodes with none reads as nothing having happened (#1164). Canon is
    // every aired episode the filler guide does not number.
    for (const arc of FILLER_ARCS) {
      for (let episode = arc.first; episode <= arc.last; episode += 1) {
        expect(NUMBERED.has(episode), arc.name.en).toBe(true)
      }
    }

    const told = new Set(
      stories
        .filter(({ gate }) => toldIn(gate, 'episode'))
        .map((filed) => filed.episode),
    )

    // The list only shrinks: a gap filled must leave it too.
    expect(untoldRuns(told)).toStrictEqual(KNOWN_GAPS)
  })
})

describe('getCharacter', () => {
  it('finds a character and refuses an arc', () => {
    expect(getCharacter('nami')?.name.en).toBe('Nami')
    // Exists in the archive, but `/characters/alabasta` is not a page.
    expect(getCharacter('alabasta')).toBeUndefined()
    expect(getCharacter('nobody')).toBeUndefined()
  })
})
