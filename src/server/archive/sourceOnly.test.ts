import { describe, expect, it } from 'vitest'

import type { ReaderArchive } from '~/data/features'
import { sourceOf } from '~/data/reveal'
import type { BookSection, Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Source } from '~/lib/progress/spoiler'
import { OP_ARCHIVE as BASE } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { ONE_PIECE_LOADED } from '~/test/series'
import { plant } from '~/test/sourceOnly'

import { entityForHandle, handleOf } from './handle.server'
import { landingPage } from './home.server'
import { characterPage, charactersPage } from './pages.server'
import { type Payload, payloadsFor } from './payloads.server'
import { pageReader, type Reader, readerFor } from './reader.server'
import { sagaLabels } from './sagaLabels.server'

/**
 * The owner's rule (2026-10-23): a record one source alone tells does not
 * exist for a reader of the other, nor for one with no bookmark, except on
 * its own page, which a reader with none is shown as a reader of its source
 * at its own threshold (#1431). Proved on records planted for the test
 * (`~/test/sourceOnly`), beside the archive.
 */

const SOURCES: Source[] = ['episode', 'chapter']

/**
 * Every key at every bookmark is most of the sweep's time, so a page asked
 * for by key is asked for one key in seven at each bookmark, a different
 * seventh each time, as the sweep does; a key the planting added always.
 */
const STRIDE = 7

/** A bookmark of this source at this count. */
function at(source: Source, count: number): NonNullable<Bookmark> {
  return source === 'episode' ?
      { mode: 'episode', episode: count }
    : { mode: 'chapter', chapter: count }
}

/** The last count of a source: a reader there has reached everything. */
function ceilingOf(source: Source): number {
  return source === 'episode' ?
      BASE.series.episodeCeiling
    : BASE.series.chapterCeiling
}

/** A payload of the list, or the test is wrong. */
function payloadNamed(payloads: Payload[], name: string): Payload {
  const found = payloads.find((payload) => payload.name === name)
  if (found === undefined) {
    throw new Error(`No ${name} to ask`)
  }
  return found
}

/** A record a reader covers, by the handle it covers it with. */
interface Covered {
  handle: string
  id: string
}

/** Every record a reader covers. */
function coveredBy(r: Reader): Covered[] {
  const covered: Covered[] = []
  for (const entity of r.archive.entities) {
    const slot = r.slot(entity, () => null)
    if (!slot.open) {
      covered.push({ handle: slot.covered.handle, id: entity.id })
    }
  }
  return covered
}

/** The id a lifted record answers with, if it is one. */
function idOf(value: unknown): unknown {
  return typeof value === 'object' && value !== null && 'id' in value ?
      value.id
    : undefined
}

/** Whether a handle stands for a record in any of these copies. */
function resolvesIn(handle: string, copies: ReaderArchive[]): boolean {
  return copies.some((copy) => entityForHandle(handle, copy) !== undefined)
}

/** Whether a handle lifts anything under any of these bookmarks. */
function liftsUnder(
  lift: Payload,
  handle: string,
  bookmarks: Bookmark[],
): boolean {
  return bookmarks.some((bookmark) => lift.run(bookmark, 'en', handle) !== null)
}

/** A record's threshold in a source's own unit. */
function ownThreshold(entity: Entity, source: Source): number {
  return source === 'episode' ?
      entity.revealedAtEpisode
    : entity.revealedAtChapter
}

/** The source a reader of this one is not. */
function otherThan(source: Source): Source {
  return source === 'episode' ? 'chapter' : 'episode'
}

/** The names of a table of saga labels. */
function names(rows: { name: string }[]): string[] {
  return rows.map(({ name }) => name)
}

/** An excuse for every record, as a page that names arcs by design has. */
function byDesign(): boolean {
  return true
}

/** The first two shelves of the archive, and the rest. */
function firstShelves(): [BookSection, BookSection, BookSection[]] {
  const [first, second, ...rest] = BASE.bookSections
  if (first === undefined || second === undefined) {
    throw new Error('The archive shelves too little')
  }

  return [first, second, rest]
}

/** One question to put to a page: a bookmark, a locale and a key. */
interface Ask {
  bookmark: Bookmark
  key: string
  locale: Locale
}

/** The questions to put to one page at these bookmarks. */
function asksOf(mine: Payload, real: Payload, bookmarks: Bookmark[]): Ask[] {
  const keys = mine.keys?.() ?? ['']
  const filed = new Set(real.keys?.() ?? [''])

  return bookmarks.flatMap((bookmark, step) =>
    keys
      .filter((key, k) => !filed.has(key) || (k + step) % STRIDE === 0)
      .flatMap((key) => LOCALES.map((locale) => ({ bookmark, key, locale }))),
  )
}

describe.each(SOURCES)('a record of the %s alone', (source) => {
  const planted = plant(BASE, source)
  const { twin } = planted
  const other = otherThan(source)
  const others = BASE.bookmarks.filter(
    (bookmark) => sourceOf(bookmark) !== source,
  )
  const before = payloadsFor(BASE)
  const after = payloadsFor(planted.archive)
  const twins = new Set(Object.values(twin).map(({ id }) => id))

  it.each(after.map((mine, index) => ({ mine, name: mine.name, index })))(
    '$name is sent to a reader of the other source, or of none, byte for byte as before',
    ({ index, mine }) => {
      // The planting adds no page, so the two lists match one for one.
      const real = before[index] ?? mine

      // Its own page, which opens with no bookmark (#1431), is held below.
      const asks = asksOf(mine, real, others).filter(
        ({ bookmark, key }) =>
          bookmark !== null || mine.drawnAt !== 'record' || !twins.has(key),
      )
      const changed = asks.flatMap(({ bookmark, key, locale }) => {
        const sent = JSON.stringify(mine.run(bookmark, locale, key))
        const was = JSON.stringify(real.run(bookmark, locale, key))

        return sent === was ? [] : `'${key}' @ ${JSON.stringify(bookmark)}`
      })

      expect(changed).toStrictEqual([])
    },
  )

  it('opens for a reader of its own source at its threshold, and is covered and counted before it', () => {
    const threshold =
      source === 'episode' ?
        twin.character.revealedAtEpisode
      : twin.character.revealedAtChapter
    const open = charactersPage(
      readerFor(planted.archive, at(source, threshold), 'en'),
    )
    const covered = charactersPage(
      readerFor(planted.archive, at(source, threshold - 1), 'en'),
    )
    const real = charactersPage(
      readerFor(BASE, at(source, threshold - 1), 'en'),
    )

    expect(open.featuredOpen.map(({ id }) => id)).toContain(twin.character.id)
    expect(covered.featuredOpen.map(({ id }) => id)).not.toContain(
      twin.character.id,
    )
    expect(covered.featuredCovered).toHaveLength(
      real.featuredCovered.length + 1,
    )
    expect(covered.filed).toBe(real.filed + 1)
  })

  it('tells its own reader the facts only it tells', () => {
    const reader = readerFor(
      planted.archive,
      at(source, ceilingOf(source)),
      'en',
    )

    expect(JSON.stringify(characterPage(planted.host.id, reader))).toContain(
      JSON.stringify(planted.strokes),
    )
  })

  it('has no page and no handle for a reader of the other source', () => {
    const reader = readerFor(planted.archive, at(other, ceilingOf(other)), 'en')

    expect(reader.has(twin.character)).toBe(false)
    expect(characterPage(twin.character.id, reader)).toBeUndefined()
    expect(() => handleOf(twin.character.id, reader.archive)).toThrow(
      /no handle/u,
    )
  })

  it('opens its page for a reader with no bookmark at its own threshold, in its own unit', () => {
    const visitor = pageReader(planted.archive, null, {
      id: twin.character.id,
      locale: 'en',
    })
    const page = characterPage(twin.character.id, visitor)
    const own = at(source, ownThreshold(twin.character, source))
    const ownPage = characterPage(
      twin.character.id,
      readerFor(planted.archive, own, 'en'),
    )

    expect(page?.detail.slot.open).toBe(true)
    expect(visitor.bookmark).toBeNull()
    expect(visitor.mode).toBe(source)
    expect(ownPage).toBeDefined()
    // What its own reader has by then, and the unit to print it in.
    expect(page).toStrictEqual({
      ...ownPage,
      detail: {
        ...ownPage?.detail,
        ...(source === 'chapter' && { unit: 'chapter' }),
      },
    })
  })

  it('lifts every handle its page covers, with no bookmark, to the record it covered, and none under a bookmark', () => {
    const visitor = pageReader(planted.archive, null, {
      id: twin.place.id,
      locale: 'en',
    })
    const lift = payloadNamed(after, 'liftRecord')
    const covered = coveredBy(visitor)
    const plain = [
      null,
      at(source, ceilingOf(source)),
      at(other, ceilingOf(other)),
    ].map((bookmark) => readerFor(planted.archive, bookmark, 'en').archive)
    const marks = [at(source, ceilingOf(source)), at(other, 1)]

    expect(covered.length).toBeGreaterThan(0)
    expect(
      covered.map(({ handle }) => idOf(lift.run(null, 'en', handle))),
    ).toStrictEqual(covered.map(({ id }) => id))
    // Not one is a handle in the copy of a reader with no bookmark, nor in
    // the copy of a reader of either source, so none lifts under a bookmark.
    expect(
      covered.filter(({ handle }) => resolvesIn(handle, plain)),
    ).toStrictEqual([])
    expect(
      covered.filter(({ handle }) => liftsUnder(lift, handle, marks)),
    ).toStrictEqual([])
  })

  it('stays out of the demo, even for a reader of its own source on a trial', () => {
    const trial = at(source, 1)
    const demo = JSON.stringify(
      landingPage(readerFor(planted.archive, trial, 'en'), trial),
    )
    const shown = Object.values(twin).filter(({ id }) => demo.includes(id))

    expect(shown).toStrictEqual([])
    expect(demo).not.toContain(planted.epithet)
  })

  it('names its arc only in the saga labels of its own unit', () => {
    const reader = readerFor(
      planted.archive,
      at(source, ceilingOf(source)),
      'en',
    )
    const { chapter, episode } = sagaLabels(reader)
    const [own, theirs] =
      source === 'episode' ? [episode, chapter] : [chapter, episode]

    expect(names(own)).toContain(twin.arc.name.en)
    expect(names(theirs)).not.toContain(twin.arc.name.en)
  })

  it('is fog to the sweep for a reader of the other source, even on a page that names arcs on purpose', () => {
    const leaks = leaksOf({ ...ONE_PIECE_LOADED, archive: planted.archive })
    const named = { id: twin.arc.id }
    const otherCeiling = at(other, ceilingOf(other))
    const ownCeiling = at(source, ceilingOf(source))

    expect(leaks(named, otherCeiling, byDesign)).toStrictEqual([twin.arc.id])
    expect(leaks(named, null, byDesign)).toStrictEqual([twin.arc.id])
    expect(leaks(named, ownCeiling, byDesign)).toStrictEqual([])
  })
})

describe('the archive a reader is handed', () => {
  it('is built once per source and kept, not once per request', () => {
    const episodes = readerFor(BASE, at('episode', 1), 'en').archive

    expect(
      readerFor(BASE, { mode: 'season', season: 1, episode: 1 }, 'it').archive,
    ).toBe(episodes)
    expect(readerFor(BASE, at('chapter', 1), 'en').archive).toBe(
      readerFor(BASE, at('chapter', 2), 'it').archive,
    )
    expect(readerFor(BASE, null, 'en').archive).toBe(
      readerFor(BASE, null, 'it').archive,
    )
    expect(readerFor(BASE, null, 'en').archive).not.toBe(episodes)
  })

  it('refuses to shelve the characters of a first arc it drops', () => {
    const [first, second, rest] = firstShelves()
    const archive = {
      ...BASE,
      bookSections: [
        { ...first, arc: { ...first.arc, source: 'episode' as const } },
        second,
        ...rest,
      ],
    }

    expect(() => readerFor(archive, at('chapter', 1), 'en')).toThrow(
      /one source alone/u,
    )
  })
})
