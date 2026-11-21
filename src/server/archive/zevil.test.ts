import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import {
  bookmarkAt as at,
  gateCases,
  opened,
  recordIn,
  sidesOf,
  type Unit,
} from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { characterPage, drawingsFor, shelvesPage } from './pages.server'
import { readerFor } from './reader.server'

const { archive } = loadedSeries('hunter-x-hunter')

// A record one source alone names is read in that unit only (#833).
interface Row {
  chapter: number
  episode: number
  id: string
  source?: Unit
}

const RECORDS: Row[] = [
  { id: 'khara', episode: 14, chapter: 23 },
  { id: 'goz', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'agon', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'siper', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'ryu', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'kyu', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'shishito', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'kenmi', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'sommy', episode: 14, chapter: 23, source: 'chapter' },
  { id: 'gittarackur', episode: 19, chapter: 33 },
  { id: 'amori', episode: 3, chapter: 29 },
  { id: 'umori', episode: 3, chapter: 29 },
  { id: 'imori', episode: 3, chapter: 29 },
  { id: 'ponzu', episode: 17, chapter: 30 },
  { id: 'bourbon', episode: 3, chapter: 5 },
  { id: 'pokkle', episode: 18, chapter: 23 },
  { id: 'bodoro', episode: 3, chapter: 33 },
]
const CASES = gateCases(RECORDS, archive.series).map((row) => ({
  ...row,
  mode: row.unit,
}))

// Every applicant who dies after his record opens, and the pair the death
// is told at; the manga's own records die in chapters only.
const DEATHS: Row[] = [
  { id: 'cherry', episode: 5, chapter: 10, source: 'chapter' },
  { id: 'goz', episode: 15, chapter: 26, source: 'chapter' },
  { id: 'siper', episode: 15, chapter: 26, source: 'chapter' },
  { id: 'agon', episode: 16, chapter: 28, source: 'chapter' },
  { id: 'geretta', episode: 16, chapter: 28 },
  { id: 'bourbon', episode: 17, chapter: 30 },
  { id: 'bodoro', episode: 20, chapter: 36 },
]
const DEATH_CASES = gateCases(DEATHS, archive.series).map((row) => ({
  ...row,
  mode: row.unit,
}))

describe('the Fourth Phase and its final bracket', () => {
  it.each(CASES)('gates $id in $mode ($locale)', (row) => {
    const entity = archive.getCharacter(row.id)

    expect(entity?.revealedAtEpisode).toBe(row.episode)
    expect(entity?.revealedAtChapter).toBe(row.chapter)

    const before = readerFor(archive, row.before, row.locale)
    const reached = readerFor(archive, row.reached, row.locale)
    const listedBefore = shelvesPage(before).flatMap((shelf) => shelf.open)
    const listedAt = shelvesPage(reached).flatMap((shelf) => shelf.open)

    expect(listedBefore.some(({ id }) => id === row.id)).toBe(false)
    expect(listedAt.some(({ id }) => id === row.id)).toBe(true)
    expect(opened(row.id, before)).toBe(false)
    expect(opened(row.id, reached)).toBe(true)
  })

  it.each(
    [...RECORDS, ...DEATHS].flatMap(({ id, source }) =>
      source === undefined ?
        []
      : LOCALES.map((locale) => ({ id, locale, source })),
    ),
  )(
    'never gives $id to a reader of the other source ($locale)',
    ({ id, locale, source }) => {
      const other: Unit = source === 'chapter' ? 'episode' : 'chapter'
      const r = readerFor(
        archive,
        at(
          other,
          other === 'episode' ?
            archive.series.episodeCeiling
          : archive.series.chapterCeiling,
        ),
        locale,
      )
      const pages = [shelvesPage(r), drawingsFor([id], r)]

      expect(characterPage(id, r)).toBeUndefined()
      expect(JSON.stringify(pages)).not.toContain(`"${id}"`)
    },
  )

  it.each(LOCALES)(
    'opens Zevil on arrival, with a safe dossier (%s)',
    (locale) => {
      const arrival = sidesOf({ episode: 14, chapter: 23 }, archive.series)
      for (const side of arrival) {
        const before = readerFor(archive, side.before, locale)
        const reached = readerFor(archive, side.reached, locale)

        expect(opened('zevil-island', before)).toBe(false)
        expect(opened('zevil-island', reached)).toBe(true)
      }
    },
  )

  it('keeps the disguise free of the true identity before its revelation', () => {
    const r = readerFor(archive, { mode: 'episode', episode: 19 }, 'en')
    const record = shelvesPage(r)
      .flatMap((shelf) => shelf.open)
      .find(({ id }) => id === 'gittarackur')

    expect(JSON.stringify(record)).not.toMatch(/illumi|zoldyck/iu)
  })

  it.each(DEATH_CASES)(
    'gates $id’s death and drawing together in $mode ($locale)',
    (row) => {
      const entity = recordIn(archive, row.id)
      const before = readerFor(archive, row.before, row.locale)
      const reached = readerFor(archive, row.reached, row.locale)

      expect(archive.latestOf(before, entity, 'status')).toBe('alive')
      expect(archive.latestOf(reached, entity, 'status')).toBe('deceased')
      expect(drawingsFor([row.id], reached)).not.toStrictEqual(
        drawingsFor([row.id], before),
      )
    },
  )
})
