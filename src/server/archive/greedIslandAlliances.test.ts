import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { type Reader, readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Hunter x Hunter must be filed')
}
const { archive } = series
const jispa = archive.getCharacter('jispa')
if (jispa === undefined) {
  throw new Error('Missing Jispa')
}
const RECORDS = [
  { id: 'genthru', episode: 65, chapter: 144, source: 'chapter', place: false },
  { id: 'jispa', episode: 65, chapter: 144, source: 'chapter', place: false },
  { id: 'razor', episode: 67, chapter: 145, source: undefined, place: false },
  { id: 'dorias', episode: 66, chapter: 151, source: 'chapter', place: true },
  { id: 'soufrabi', episode: 67, chapter: 155, source: undefined, place: true },
  { id: 'aiai', episode: 68, chapter: 159, source: 'episode', place: true },
]
const CASES = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    (['episode', 'chapter'] as const).map((unit) => ({
      ...record,
      locale,
      unit,
    })),
  ),
)
const NAMED = CASES.filter(
  ({ source, unit }) => source === undefined || source === unit,
)
const OTHER = CASES.filter(
  ({ source, unit }) => source !== undefined && source !== unit,
)
function at(unit: string, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}
function pageFor(
  record: (typeof RECORDS)[number],
  reader: Reader,
): ReturnType<typeof characterPage> | ReturnType<typeof placePage> {
  return record.place ?
      placePage(record.id, reader)
    : characterPage(record.id, reader)
}
function isOpen(page: ReturnType<typeof pageFor>): boolean {
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

describe.each(NAMED)('$id alliance gate in $locale by $unit', (record) => {
  it('opens its page and drawing together at the verified naming scene', () => {
    const gate = record.unit === 'chapter' ? record.chapter : record.episode
    const before = readerFor(archive, at(record.unit, gate - 1), record.locale)
    const reached = readerFor(archive, at(record.unit, gate), record.locale)
    const closed = pageFor(record, before)
    const opened = pageFor(record, reached)

    expect(isOpen(closed)).toBe(false)
    expect(drawingsFor([record.id], before)).toStrictEqual({})
    expect(isOpen(opened)).toBe(true)
    expect(
      drawingsFor([record.id], reached)[record.id]?.length,
    ).toBeGreaterThan(3)
    expect(archive.bookmarks).toContainEqual(at(record.unit, gate - 1))
    expect(archive.bookmarks).toContainEqual(at(record.unit, gate))
  })
})

describe.each(OTHER)('$id outside its verified medium in $locale', (record) => {
  it('omits the page and drawing even at the other source ceiling', () => {
    const ceiling =
      record.unit === 'chapter' ?
        archive.series.chapterCeiling
      : archive.series.episodeCeiling
    const reader = readerFor(archive, at(record.unit, ceiling), record.locale)

    expect(pageFor(record, reader)).toBeUndefined()
    expect(drawingsFor([record.id], reader)).toStrictEqual({})
  })
})

describe.each(LOCALES)('manga naming evidence in %s', (locale) => {
  it('opens Jispa already deceased with his reached relationship', () => {
    const reader = readerFor(archive, at('chapter', 144), locale)
    const status = archive.latestOf(reader, jispa, 'status')
    const people = relationshipsOf(jispa, reader).map(({ person }) => person.id)

    expect(status).toBe('deceased')
    expect(people).toContain('genthru')
  })
})
