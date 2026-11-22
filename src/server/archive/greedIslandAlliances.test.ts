import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import { bookmarkAt as at, gateCases, opened, recordIn } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const { archive } = loadedSeries('hunter-x-hunter')
const jispa = recordIn(archive, 'jispa')
const RECORDS = [
  { id: 'genthru', episode: 65, chapter: 144, source: 'chapter' },
  { id: 'jispa', episode: 65, chapter: 144, source: 'chapter' },
  { id: 'razor', episode: 67, chapter: 145, source: undefined },
  { id: 'dorias', episode: 66, chapter: 151, source: 'chapter' },
  { id: 'soufrabi', episode: 67, chapter: 155, source: undefined },
  { id: 'aiai', episode: 68, chapter: 159, source: 'episode' },
]
const NAMED = gateCases(RECORDS, archive.series)
const OTHER = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    (['episode', 'chapter'] as const).map((unit) => ({
      ...record,
      locale,
      unit,
    })),
  ),
).filter(({ source, unit }) => source !== undefined && source !== unit)

describe.each(NAMED)('$id alliance gate in $locale by $unit', (record) => {
  it('opens its page and drawing together at the verified naming scene', () => {
    const before = readerFor(archive, record.before, record.locale)
    const reached = readerFor(archive, record.reached, record.locale)

    expect(opened(record.id, before)).toBe(false)
    expect(opened(record.id, reached)).toBe(true)
    expect(archive.bookmarks).toContainEqual(record.before)
    expect(archive.bookmarks).toContainEqual(record.reached)
  })
})

describe.each(OTHER)('$id outside its verified medium in $locale', (record) => {
  it('omits the page and drawing even at the other source ceiling', () => {
    const ceiling =
      record.unit === 'chapter' ?
        archive.series.chapterCeiling
      : archive.series.episodeCeiling
    const reader = readerFor(archive, at(record.unit, ceiling), record.locale)

    expect(
      characterPage(record.id, reader) ?? placePage(record.id, reader),
    ).toBeUndefined()
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
