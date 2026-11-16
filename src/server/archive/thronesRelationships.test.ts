import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type { Entity, Opened, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { withoutDrawings } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The omissions live beside the factual evidence.
import coverage from '../../../docs/content-provenance/game-of-thrones-relationships.json' with { type: 'json' }
import { relationshipsPage } from './pages.server'
import { payloadsFor } from './payloads.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Game of Thrones is not registered')
}
const { archive } = series

const characterPayload = payloadsFor(archive).find(
  ({ name }) => name === 'loadRelationships',
)
const leaksIn = leaksOf(series)

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const characters = archive.entities.filter(({ kind }) => kind === 'character')
const owners = characters.filter(
  (owner) => archive.datedOf(owner, 'relationships').length > 0,
)

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

/** The page projection a reader at this bookmark receives. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(
    relationshipsPage(id, readerFor(archive, bookmark, locale)),
  )
}

/** Where an entry opens in one unit: the later of the entry and its owner. */
function dateOf({ gate }: Opened<Relationship[]>, mode: Mode): number {
  return mode === 'episode' ? gate.revealedAtEpisode : gate.revealedAtChapter
}

/** Each source resolves its own selections. */
function casesOf(owner: Entity, mode: Mode): BoundaryCase[] {
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

const cases = owners.flatMap((owner) =>
  MODES.flatMap((mode) => (toldIn(owner, mode) ? casesOf(owner, mode) : [])),
)

/** Compare only the current cards; separate assertions cover history gates. */
function localized(relations: Relationship[], locale: Locale): Card[] {
  return relations.map(({ character, type, summary }) => ({
    character,
    type: type[locale],
    summary: summary[locale],
  }))
}

function hasCurrentHistory({
  history,
  summary,
  type,
}: RelationshipView): boolean {
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
}

describe('Game of Thrones relationship coverage', () => {
  it('authors or omits every archived character', () => {
    expect(
      owners.length
        + Object.keys(coverage.omitted).length
        + Object.keys(coverage.pending).length,
    ).toBe(characters.length)
  })

  it.each([...Object.keys(coverage.omitted), ...Object.keys(coverage.pending)])(
    'shows no relationships for %s',
    (id) => {
      for (const bookmark of [
        ep(archive.series.episodeCeiling),
        ch(archive.series.chapterCeiling),
      ]) {
        expect(projected(id, bookmark, 'en')).toStrictEqual([])
      }
    },
  )

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap((owner) =>
        archive.datedOf(owner, 'relationships'),
      )
      for (const selection of selections) {
        expect(selection.value.length).toBeGreaterThan(0)

        for (const relation of selection.value) {
          expect(relation.type[locale].trim()).not.toBe('')
          expect(relation.summary[locale].trim()).not.toBe('')
        }
      }
    },
  )
})

// The bookmarks the payload sweep asks at, saga borders included.
const swept = archive.bookmarks.map((bookmark) => JSON.stringify(bookmark))

describe('Game of Thrones relationship sweep', () => {
  it.each(cases)(
    'sweeps $owner at $mode $date and the bookmark before',
    ({ mode, date }) => {
      // Before a gate at 1 there is no bookmark but none (`null`).
      for (const count of [Math.max(date - 1, 1), date]) {
        const bookmark = mode === 'episode' ? ep(count) : ch(count)

        expect(swept).toContain(JSON.stringify(bookmark))
      }
    },
  )
})

describe.each(LOCALES)('Game of Thrones payload boundaries in %s', (locale) => {
  it.each(cases)(
    '$owner at $mode $date restores exact current words on backwards movement',
    ({ owner, mode, date, before, at, after }) => {
      const expected = new Map([
        [date - 1, before],
        [date, at],
        [date + 1, after],
      ])

      expect(Number.isSafeInteger(date)).toBe(true)

      // Revisit the earlier bookmark after the future one to catch retained state.
      for (const count of [date - 1, date, date + 1, date - 1]) {
        const bookmark = mode === 'episode' ? ep(count) : ch(count)
        const sent = projected(owner, bookmark, locale)
        const payload = characterPayload?.run(bookmark, locale, owner)

        expect(payload).toStrictEqual(
          relationshipsPage(owner, readerFor(archive, bookmark, locale)),
        )
        expect(leaksIn(payload, bookmark)).toStrictEqual([])
        expect(
          sent.map(({ person, type, summary }) => ({
            character: person.id,
            type,
            summary,
          })),
        ).toStrictEqual(localized(expected.get(count) ?? [], locale))

        const stages = sent.flatMap(({ history }) => history)

        expect(
          stages.every(
            (stage) =>
              (mode === 'episode' ?
                stage.revealedAtEpisode
              : stage.revealedAtChapter) <= count,
          ),
        ).toBe(true)
        expect(sent.every((relation) => hasCurrentHistory(relation))).toBe(true)
      }
    },
  )
})

const persistenceCases = owners.flatMap((owner) =>
  MODES.filter((mode) => toldIn(owner, mode)).flatMap((mode) =>
    archive
      .datedOf(owner, 'relationships')
      .filter((entry) => toldIn(entry, mode))
      .slice(-1)
      .map((last) => ({ owner: owner.id, mode, date: dateOf(last, mode) })),
  ),
)

describe.each(LOCALES)(
  'Game of Thrones selection persistence in %s',
  (locale) => {
    it.each(persistenceCases)(
      'carries $owner’s last $mode selection to the end of the dial',
      ({ owner, mode, date }) => {
        const at = mode === 'episode' ? ep(date) : ch(date)
        const later =
          mode === 'episode' ?
            ep(archive.series.episodeCeiling)
          : ch(archive.series.chapterCeiling)

        expect(projected(owner, later, locale)).toStrictEqual(
          projected(owner, at, locale),
        )
      },
    )
  },
)

describe.each(LOCALES)(
  'Game of Thrones verified revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    // The type Daenerys's selection gives Mirri at a bookmark.
    const mirriType = (bookmark: Bookmark): string | undefined =>
      projected('daenerys-targaryen', bookmark, locale).find(
        ({ person }) => person.id === 'mirri-maz-duur',
      )?.type

    it('keeps the last stage-1 selection across both stage edges', () => {
      for (const owner of owners) {
        expect(projected(owner.id, ep(11), locale), owner.id).toStrictEqual(
          projected(owner.id, ep(10), locale),
        )
        expect(projected(owner.id, ch(74), locale), owner.id).toStrictEqual(
          projected(owner.id, ch(73), locale),
        )
        expect(
          projected(
            owner.id,
            { mode: 'season', season: 2, episode: 1 },
            locale,
          ),
          owner.id,
        ).toStrictEqual(
          projected(
            owner.id,
            { mode: 'season', season: 1, episode: 10 },
            locale,
          ),
        )
      }
    })

    it('tells why Jorah fled Eddard in episode 2 and chapter 37', () => {
      expect(people('jorah-mormont', ep(1))).not.toContain('eddard-stark')
      expect(people('jorah-mormont', ep(2))).toContain('eddard-stark')
      expect(people('jorah-mormont', ch(36))).not.toContain('eddard-stark')
      expect(people('jorah-mormont', ch(37))).toContain('eddard-stark')
    })

    it('gives Jorah his wedding links at episode 1 but chapter 12', () => {
      expect(people('jorah-mormont', ep(1))).toContain('viserys-targaryen')
      expect(projected('jorah-mormont', ch(11), locale)).toStrictEqual([])
      expect(people('jorah-mormont', ch(12))).toContain('viserys-targaryen')
    })

    it('keeps Varys a show-only link', () => {
      expect(people('jorah-mormont', ep(4))).not.toContain('varys')
      expect(people('jorah-mormont', ep(5))).toContain('varys')
      expect(people('illyrio-mopatis', ep(4))).not.toContain('varys')
      expect(people('illyrio-mopatis', ep(5))).toContain('varys')

      for (const id of ['jorah-mormont', 'illyrio-mopatis']) {
        expect(people(id, ch(archive.series.chapterCeiling))).not.toContain(
          'varys',
        )
      }
    })

    it('hands the whip on Viserys to Rakharo in the show and Jhogo in the books', () => {
      expect(people('viserys-targaryen', ep(3))).toContain('rakharo')
      expect(people('viserys-targaryen', ep(3))).not.toContain('jhogo')
      expect(people('viserys-targaryen', ch(24))).toContain('jhogo')
      expect(people('viserys-targaryen', ch(24))).not.toContain('rakharo')
    })

    it('tells Mago’s fate apart in the two media', () => {
      const words = (bookmark: Bookmark): string[] =>
        projected('drogo', bookmark, locale)
          .filter(({ person }) => person.id === 'mago')
          .map(({ summary }) => summary)

      expect(words(ep(8))).toStrictEqual([magoWords('episode', locale)])
      expect(words(ch(62))).toStrictEqual([magoWords('chapter', locale)])
      expect(words(ep(8))).not.toStrictEqual(words(ch(62)))
      expect(people('mago', ep(archive.series.episodeCeiling))).not.toContain(
        'eroeh',
      )
      expect(people('mago', ch(68))).not.toContain('eroeh')
      expect(people('mago', ch(69))).toContain('eroeh')
    })

    it('keeps the books-only roster out of show pages', () => {
      for (const id of [
        'cohollo',
        'haggo',
        'jhogo',
        'quaro',
        'eroeh',
        'aggo',
      ]) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
        ).toStrictEqual([])
        expect(projected(id, ch(73), locale)).not.toStrictEqual([])
      }
    })

    it('opens Mirri’s revenge at chapter 69 and the pyre at chapter 73', () => {
      expect(people('daenerys-targaryen', ch(68))).not.toContain('rakharo')
      expect(mirriType(ch(68))).toBeDefined()
      expect(mirriType(ch(69))).toBeDefined()
      expect(mirriType(ch(69))).not.toBe(mirriType(ch(68)))
      expect(people('daenerys-targaryen', ch(69))).not.toContain('rakharo')
      expect(people('daenerys-targaryen', ch(73))).toContain('rakharo')
      expect(people('daenerys-targaryen', ep(9))).not.toContain('rakharo')
      expect(people('daenerys-targaryen', ep(10))).toContain('rakharo')
    })
  },
)

/** The words Drogo's latest selection in one medium gives Mago. */
function magoWords(mode: Mode, locale: Locale): string {
  const drogo = archive.getCharacter('drogo')
  if (drogo === undefined) {
    throw new Error('no drogo')
  }
  const relation = archive
    .datedOf(drogo, 'relationships')
    .filter((dated) => toldIn(dated, mode))
    .flatMap(({ value }) => value)
    .findLast(({ character }) => character === 'mago')
  if (relation === undefined) {
    throw new Error('no mago on drogo')
  }

  return relation.summary[locale]
}
