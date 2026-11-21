import { beforeEach, describe, expect, it, vi } from 'vitest'

import { archiveOf } from '~/data/series'
import type { Bookmark } from '~/lib/progress/episode'
import { readBookmark, readTrial } from '~/lib/progress/readBookmark'

import { archivePage, wordsPage } from './archive/endpoint.server'
import { serve } from './serve.server'

// The request is not there under Vitest: the cookies are stubs, and the
// archive loader is the real one, watched.
vi.mock(import('~/lib/progress/readBookmark'), () => ({
  readBookmark: vi.fn<() => Bookmark>(),
  readTrial: vi.fn<() => Bookmark>(),
}))
vi.mock(import('~/data/series'), async (importOriginal) => {
  const real = await importOriginal()
  return { ...real, archiveOf: vi.fn<typeof real.archiveOf>(real.archiveOf) }
})

const SAVED: Bookmark = { mode: 'episode', episode: 100 }
const TRIAL: Bookmark = { mode: 'episode', episode: 5 }
const DATA = { series: 'one-piece', locale: 'en' } as const

/** What a page was drawn for: the reader's bookmark and the trial. */
const seen = archivePage({
  input: 'located',
  reads: 'cookie',
  page: (_, r, trial) => ({ bookmark: r.bookmark, trial }),
})

describe('serving an entry', () => {
  beforeEach(() => {
    vi.mocked(readBookmark).mockClear().mockReturnValue(SAVED)
    vi.mocked(readTrial).mockClear().mockReturnValue(TRIAL)
    vi.mocked(archiveOf).mockClear()
  })

  it('loads no archive and reads no cookie for the series’ own words', async () => {
    const words = wordsPage(({ locale }, series) => `${series.slug} ${locale}`)

    await expect(serve(words, DATA)).resolves.toBe('one-piece en')
    expect(archiveOf).not.toHaveBeenCalled()
    expect(readBookmark).not.toHaveBeenCalled()
  })

  it('draws a cookie page at the saved bookmark, with no trial', async () => {
    await expect(serve(seen, DATA)).resolves.toStrictEqual({
      bookmark: SAVED,
      trial: null,
    })
    expect(readTrial).not.toHaveBeenCalled()
  })

  it('never reads the cookie for the demo', async () => {
    const demo = { ...seen, reads: 'demo' as const }

    await expect(serve(demo, DATA)).resolves.toStrictEqual({
      bookmark: null,
      trial: null,
    })
    expect(readBookmark).not.toHaveBeenCalled()
    expect(readTrial).not.toHaveBeenCalled()
  })

  it('hands the trial to the landing alone', async () => {
    const trial = { ...seen, reads: 'trial' as const }

    await expect(serve(trial, DATA)).resolves.toStrictEqual({
      bookmark: SAVED,
      trial: TRIAL,
    })
  })

  it('answers in plain JSON exactly when the entry says so', async () => {
    const sent = await serve({ ...seen, plain: true as const }, DATA)

    expect(sent).toBeInstanceOf(Response)
    await expect(sent.json()).resolves.toStrictEqual({
      bookmark: SAVED,
      trial: null,
    })
    await expect(serve(seen, DATA)).resolves.not.toBeInstanceOf(Response)
  })
})
