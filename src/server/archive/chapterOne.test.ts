import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { bookmarkAt as at, opened } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { characterPage, drawingsFor, shelvesPage } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('hunter-x-hunter')
const IDS = ['kite', 'kon']
const CASES = LOCALES.flatMap((locale) => IDS.map((id) => ({ id, locale })))

function shelfContaining(id: string, reader: Reader): unknown {
  return shelvesPage(reader).find((candidate) =>
    candidate.open.some((character) => character.id === id),
  )?.arc
}

describe.each(CASES)('$id in $locale', ({ id, locale }) => {
  it('uses the reader’s source to choose the heading and opens its pinned facts', () => {
    const manga = readerFor(archive, { mode: 'chapter', chapter: 1 }, locale)
    const anime = readerFor(archive, { mode: 'episode', episode: 76 }, locale)
    for (const [reader, arc] of [
      [manga, 'hunter-exam-arc'],
      [anime, 'chimera-ant-arc'],
    ] as const) {
      expect(shelfContaining(id, reader)).toMatchObject({
        open: true,
        record: { id: arc },
      })

      expect(opened(id, reader)).toBe(true)
      expect(characterPage(id, reader)?.detail.log).not.toBeNull()
    }
  })

  it('keeps the record and its drawing covered at episode 75 and without progress', () => {
    for (const bookmark of [null, { mode: 'episode', episode: 75 }] as const) {
      const reader = readerFor(archive, bookmark, locale)

      expect(opened(id, reader)).toBe(false)
      expect(characterPage(id, reader)?.detail.log).toBeNull()
    }
  })
})

/**
 * Kite's manga selection waits for Ging's record (chapter 66); being
 * unanchored, it vouches for no pair either. Anime readers have Ging already.
 */
function waitsForGing(
  field: string,
  { source, value }: { source?: string; value: unknown },
): boolean {
  return (
    field === 'relationships'
    && source === 'chapter'
    && Array.isArray(value)
    && value.some(
      (relation: { character?: string }) =>
        relation.character === 'ging-freecss',
    )
  )
}

const CHRONICLE_CHAPTERS: Record<number, number> = {
  76: 1,
  77: 186,
  80: 190,
  82: 194,
  83: 196,
  85: 199,
  95: 222,
  136: 316,
  147: 337,
}

/** Kite's later stages: Crazy Slots, his death and his return (#1325). */
const STAGE_CHAPTERS: Record<number, number> = { 82: 193, 85: 199, 136: 316 }

function expectedChapter(
  field: Parameters<typeof waitsForGing>[0],
  entry: Parameters<typeof waitsForGing>[1] & { episode: number },
): number {
  // Chimera Ant: the survey at 77/186, and Kite's death and the Neferpitou
  // row at 85/199 (#1020, #1021).
  if (field === 'affiliation' && entry.episode === 77) {
    return 186
  }
  if (field === 'role' && entry.episode === 93) {
    return 217
  }
  return STAGE_CHAPTERS[entry.episode] ?? (waitsForGing(field, entry) ? 66 : 1)
}

describe('chapter-one pins', () => {
  it.each(IDS)(
    'pins every %s fact and excludes the reordered conversion anchor',
    (id) => {
      const record = archive.getCharacter(id)
      const timelines = archive.timelines.filter(
        (timeline) => timeline.owner.id === id,
      )

      expect(record?.unanchored).toBe(true)
      expect(record?.revealedAtChapter).toBe(1)
      expect(record?.revealedAtEpisode).toBe(76)
      expect(timelines.length).toBeGreaterThan(0)

      for (const { field, timeline } of timelines) {
        for (const entry of timeline) {
          expect(entry.chapter).toBe(
            field === 'chronicle' ?
              CHRONICLE_CHAPTERS[entry.episode]
            : expectedChapter(field, entry),
          )
        }
      }
    },
  )

  it('does not advance chapter one into the later anime', () => {
    expect(archive.chapterAtEpisode(76)).toBeGreaterThan(43)
  })
})

describe('a reordered character beside a source-only arc', () => {
  const first = archive.arcs.find(({ id }) => id === 'hunter-exam-arc')
  const character = archive.getCharacter('kite')
  if (first === undefined || character === undefined) {
    throw new Error('Missing chapter-one shelf fixture')
  }

  it('chooses an earlier heading the manga actually tells', () => {
    const unavailable = {
      ...first,
      id: 'anime-only-bridge',
      source: 'episode' as const,
    }
    const future = { ...first, id: 'future-heading', revealedAtChapter: 50 }
    const fixture = {
      ...archive,
      arcs: [first, unavailable, future],
      characters: [character],
      bookSections: [{ arc: future, characters: [character] }],
    }
    const reader = readerFor(fixture, { mode: 'chapter', chapter: 1 }, 'en')

    expect(reader.archive.bookSections).toStrictEqual([
      { arc: first, characters: [character] },
    ])
  })
})

describe('Kite’s Crazy Slots stage', () => {
  // The carbine lies beside the cap from 82 / 193, never one step before.
  it.each(LOCALES)('changes the drawing at the pair in %s', (locale) => {
    for (const [unit, gate] of [
      ['episode', 82],
      ['chapter', 193],
    ] as const) {
      const read = (count: number): ReturnType<typeof drawingsFor> =>
        drawingsFor(['kite'], readerFor(archive, at(unit, count), locale))

      expect(read(gate)['kite']).toBeDefined()
      expect(read(gate)).not.toStrictEqual(read(gate - 1))
    }
  })
})
