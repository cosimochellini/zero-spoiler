import { describe, expect, it } from 'vitest'

import { type Reader, readerFor } from '~/server/archive/reader.server'

import { opened, sidesOf } from './gates'
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
