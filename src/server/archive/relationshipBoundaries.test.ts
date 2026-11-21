import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type { Entity, Opened, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { withoutDrawings } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, type LoadedSeries } from '~/test/series'

import { relationshipsPage } from './pages.server'
import { payloadsFor } from './payloads.server'
import { readerFor } from './reader.server'

// The series whose payload sweep holds both sides of every gate. One Piece's
// sweep is thin: it relies on the boundary property below asking every
// relationship entry at gate−1 and gate instead.
const GATE_SWEPT = new Set(['game-of-thrones', 'hunter-x-hunter'])

type Mode = 'chapter' | 'episode'
const MODES: Mode[] = ['episode', 'chapter']
interface BoundaryCase {
  after: Relationship[]
  at: Relationship[]
  before: Relationship[]
  date: number
  mode: Mode
  owner: string
}
interface Card {
  character: string
  summary: string
  type: string
}

const at = (mode: Mode, count: number): Bookmark =>
  mode === 'episode' ? { mode, episode: count } : { mode, chapter: count }

/** Where an entry opens in one unit: the later of the entry and its owner. */
function dateOf({ gate }: Opened<Relationship[]>, mode: Mode): number {
  return mode === 'episode' ? gate.revealedAtEpisode : gate.revealedAtChapter
}

/** Each source resolves its own selections, in their authored order. */
function casesOf(
  { archive }: LoadedSeries,
  owner: Entity,
  mode: Mode,
): BoundaryCase[] {
  const applicable = archive
    .datedOf(owner, 'relationships')
    .filter((entry) => toldIn(entry, mode))
  return applicable.map((entry, index) => {
    const date = dateOf(entry, mode)
    const next = applicable[index + 1]
    const after =
      next !== undefined && dateOf(next, mode) === date + 1 ?
        next.value
      : entry.value
    return {
      owner: owner.id,
      mode,
      date,
      before: applicable[index - 1]?.value ?? [],
      at: entry.value,
      after,
    }
  })
}

/** Compare only the current cards; separate assertions cover history gates. */
function localized(relations: Relationship[], locale: Locale): Card[] {
  return relations.map(({ character, type, summary }) => ({
    character,
    type: type[locale],
    summary: summary[locale],
  }))
}

/** Each card's last stage is the card, and no stage repeats the one before. */
function hasCurrentHistories(sent: RelationshipView[]): boolean {
  return sent.every(({ history, summary, type }) => {
    const current = history.at(-1)
    return (
      current?.summary === summary
      && current.type === type
      && history.every((stage, index) => {
        const previous = history[index - 1]
        return (
          previous === undefined
          || previous.type !== stage.type
          || previous.summary !== stage.summary
        )
      })
    )
  })
}

/** The current cards a reader is sent, without their history. */
function cardsOf(sent: RelationshipView[]): Card[] {
  return sent.map(({ person, type, summary }) => ({
    character: person.id,
    type,
    summary,
  }))
}

/** Whether every history stage sent has opened by this count. */
function openedBy(
  sent: RelationshipView[],
  mode: Mode,
  count: number,
): boolean {
  return sent
    .flatMap(({ history }) => history)
    .every(
      (stage) =>
        (mode === 'episode' ? stage.revealedAtEpisode : stage.revealedAtChapter)
        <= count,
    )
}

describe.each(LOADED_SERIES)('$slug relationships', (series) => {
  const { archive } = series
  const characterPayload = payloadsFor(archive).find(
    ({ name }) => name === 'loadRelationships',
  )
  const leaksIn = leaksOf(series)
  const owners = archive.entities.filter(
    (entity) =>
      entity.kind === 'character'
      && archive.datedOf(entity, 'relationships').length > 0,
  )
  const cases = owners.flatMap((owner) =>
    MODES.flatMap((mode) =>
      toldIn(owner, mode) ? casesOf(series, owner, mode) : [],
    ),
  )

  /** The page projection a reader at this bookmark receives. */
  const projected = (
    id: string,
    bookmark: Bookmark,
    locale: Locale,
  ): RelationshipView[] =>
    withoutDrawings(relationshipsPage(id, readerFor(archive, bookmark, locale)))

  it('files relationships to check', () => {
    expect(cases.length).toBeGreaterThan(0)
  })

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      for (const owner of owners) {
        for (const selection of archive.datedOf(owner, 'relationships')) {
          expect(selection.value.length).toBeGreaterThan(0)

          for (const relation of selection.value) {
            expect(relation.type[locale].trim()).not.toBe('')
            expect(relation.summary[locale].trim()).not.toBe('')
          }
        }
      }
    },
  )

  describe.runIf(GATE_SWEPT.has(series.slug))('relationship sweep', () => {
    // The bookmarks the payload sweep asks at, saga borders included.
    const swept = archive.bookmarks.map((bookmark) => JSON.stringify(bookmark))

    it.each(cases)(
      'sweeps $owner at $mode $date and the bookmark before',
      ({ mode, date }) => {
        // Before a gate at 1 there is no bookmark but none (`null`).
        for (const count of [Math.max(date - 1, 1), date]) {
          expect(swept).toContain(JSON.stringify(at(mode, count)))
        }
      },
    )
  })

  describe.each(LOCALES)('payload boundaries in %s', (locale) => {
    it.each(cases)(
      '$owner at $mode $date restores exact current words on backwards movement',
      ({ owner, mode, date, before, at: current, after }) => {
        const expected = new Map([
          [date - 1, before],
          [date, current],
          [date + 1, after],
        ])

        expect(Number.isSafeInteger(date)).toBe(true)
        expect(characterPayload).toBeDefined()

        // Revisit the earlier bookmark after the future one to catch retained state.
        for (const count of [date - 1, date, date + 1, date - 1]) {
          const bookmark = at(mode, count)
          const sent = projected(owner, bookmark, locale)
          const payload = characterPayload?.run(bookmark, locale, owner)

          expect(payload).toStrictEqual(
            relationshipsPage(owner, readerFor(archive, bookmark, locale)),
          )
          expect(leaksIn(payload, bookmark)).toStrictEqual([])
          expect(cardsOf(sent)).toStrictEqual(
            localized(expected.get(count) ?? [], locale),
          )
          expect(openedBy(sent, mode, count)).toBe(true)
          expect(hasCurrentHistories(sent)).toBe(true)
        }
      },
    )
  })

  // Each owner's last selection in each unit: `cases` runs in authored order.
  const persistenceCases = cases.filter(
    ({ owner, mode }, index) =>
      cases[index + 1]?.owner !== owner || cases[index + 1]?.mode !== mode,
  )

  describe.each(LOCALES)('selection persistence in %s', (locale) => {
    it.each(persistenceCases)(
      'carries $owner’s last $mode selection to the end of the dial',
      ({ owner, mode, date }) => {
        const ceiling =
          mode === 'episode' ?
            archive.series.episodeCeiling
          : archive.series.chapterCeiling

        expect(projected(owner, at(mode, ceiling), locale)).toStrictEqual(
          projected(owner, at(mode, date), locale),
        )
      },
    )
  })
})
