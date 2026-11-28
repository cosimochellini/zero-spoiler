import { describe, expect, it } from 'vitest'

import { reveal } from '~/data/reveal'

import {
  bookmarkForRequest,
  parseTrial,
  trialForRequest,
} from './requestBookmark'
import { ONE_PIECE_BOOKMARK } from './series'

// The last record the archive files, rounded well past it.
const LATE = { revealedAtChapter: 1200, revealedAtEpisode: 1200 }

describe('the bookmark a request stands at', () => {
  it('is the reader’s own when they have one', () => {
    expect(
      bookmarkForRequest('650', undefined, ONE_PIECE_BOOKMARK),
    ).toStrictEqual({ mode: 'episode', episode: 650 })
  })

  it('is nothing at all for a reader who has not set one', () => {
    expect(
      bookmarkForRequest(undefined, undefined, ONE_PIECE_BOOKMARK),
    ).toBeNull()
    expect(bookmarkForRequest('', undefined, ONE_PIECE_BOOKMARK)).toBeNull()
  })

  it('opens nothing to a cookie the parser rejects', () => {
    expect(
      reveal(
        bookmarkForRequest('99999', undefined, ONE_PIECE_BOOKMARK),
        ONE_PIECE_BOOKMARK,
      ).sees(LATE),
    ).toBe(false)
  })
})

describe('a trial point from the onboarding', () => {
  it('stands in for a bookmark the reader has not saved', () => {
    expect(
      bookmarkForRequest(undefined, '12', ONE_PIECE_BOOKMARK),
    ).toStrictEqual({ mode: 'episode', episode: 12 })
    expect(trialForRequest(undefined, 'c40', ONE_PIECE_BOOKMARK)).toStrictEqual(
      { mode: 'chapter', chapter: 40 },
    )
  })

  it('gives way to the reader’s own bookmark', () => {
    expect(bookmarkForRequest('650', '12', ONE_PIECE_BOOKMARK)).toStrictEqual({
      mode: 'episode',
      episode: 650,
    })
    expect(trialForRequest('650', '12', ONE_PIECE_BOOKMARK)).toBeNull()
  })

  it('counts only inside the demo, and never as a season', () => {
    expect(parseTrial('336', ONE_PIECE_BOOKMARK)).not.toBeNull()
    expect(parseTrial('337', ONE_PIECE_BOOKMARK)).toBeNull()
    expect(parseTrial('c441', ONE_PIECE_BOOKMARK)).not.toBeNull()
    expect(parseTrial('c442', ONE_PIECE_BOOKMARK)).toBeNull()
    expect(parseTrial('s1e3', ONE_PIECE_BOOKMARK)).toBeNull()
    expect(bookmarkForRequest(undefined, '650', ONE_PIECE_BOOKMARK)).toBeNull()
  })
})
