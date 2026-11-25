import { describe, expect, it } from 'vitest'

import { type Reader, readerFor } from '~/server/archive/reader.server'

import { opened, shownIn, sidesOf, type StageRow, unlisted } from './gates'
import { loadedSeries } from './series'

const { archive } = loadedSeries('hunter-x-hunter')
const { series } = archive

/** An English reader at this episode. Zushi is named at episode 27. */
const at = (episode: number): Reader =>
  readerFor(archive, { mode: 'episode', episode }, 'en')

/** The reader's page as it is, with its drawings sent as if reached. */
const leaking = (r: Reader): Reader => ({ ...r, sees: () => true })

/** The same, with every drawing sent empty. */
const blank = (r: Reader): Reader => ({
  ...leaking(r),
  archive: { ...r.archive, drawings: {} },
})

describe('opened', () => {
  it('is false under fog and true from the naming scene', () => {
    expect(opened('zushi', at(26))).toBe(false)
    expect(opened('zushi', at(27))).toBe(true)
  })

  it('throws when a covered page still sends the drawing', () => {
    expect(() => opened('zushi', leaking(at(26)))).toThrow(/zushi/u)
  })

  it('throws when a covered page sends an empty drawing', () => {
    expect(() => opened('zushi', blank(at(26)))).toThrow(/strokes: 0/u)
  })

  it('throws when an open page sends no real drawing', () => {
    expect(() => opened('zushi', blank(at(27)))).toThrow(/open: true/u)
  })
})

describe('sidesOf', () => {
  it('asks a source-only row in its own unit alone', () => {
    expect(
      sidesOf({ episode: 27, chapter: 45, source: 'chapter' }, series),
    ).toStrictEqual([
      {
        unit: 'chapter',
        gate: 45,
        before: { mode: 'chapter', chapter: 44 },
        reached: { mode: 'chapter', chapter: 45 },
      },
    ])
  })

  it('has nothing before gate 1', () => {
    expect(
      sidesOf({ episode: 1, chapter: 1 }, series).map(({ before }) => before),
    ).toStrictEqual([null, null])
  })

  it('throws, naming the row, for a gate past the ceiling of a unit it asks', () => {
    const row = { id: 'late', episode: series.episodeCeiling + 1, chapter: 5 }

    expect(() => sidesOf(row, series)).toThrow(/"late".*episode ceiling/u)
    expect(sidesOf({ ...row, source: 'chapter' }, series)).toHaveLength(1)
  })
})

const ROWS: StageRow[] = [
  { id: 'a', episode: 1, chapter: 2 },
  { id: 'a', episode: 3, chapter: 4, source: 'chapter', stage: 1 },
  { id: 'a', episode: 5, chapter: 6, source: 'episode', stage: 2 },
  { id: 'b', episode: 1, chapter: 1, source: 'chapter' },
]

describe('shownIn', () => {
  it('reads the last stage a unit tells off the table', () => {
    expect(shownIn(ROWS, { id: 'a', unit: 'episode' })).toBe(2)
    expect(shownIn(ROWS, { id: 'a', unit: 'chapter' })).toBe(1)
  })

  it('looks only below a stage when asked', () => {
    expect(shownIn(ROWS, { id: 'a', unit: 'episode', below: 2 })).toBe(0)
    expect(
      shownIn(ROWS, { id: 'a', unit: 'chapter', below: 0 }),
    ).toBeUndefined()
  })

  it('leaves the first drawing to a unit that tells no stage', () => {
    expect(shownIn(ROWS, { id: 'b', unit: 'episode' })).toBeUndefined()
    expect(() => shownIn(ROWS, { id: 'b', unit: 'season' })).toThrow(
      /not a unit/u,
    )
  })
})

describe('unlisted', () => {
  it('names each stage of a named record the table has no row for', () => {
    expect(unlisted(ROWS, { a: [1, 2, 3, 4], b: [1], c: [1] })).toStrictEqual([
      'a@3',
    ])
  })
})
