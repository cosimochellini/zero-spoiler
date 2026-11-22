import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { opened, recordIn } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('hunter-x-hunter')

// Independent expectations from the naming scenes, not the implementation.
const CHARACTERS = [
  ['tokarine', 359],
  ['vincent', 363],
  ['slakka', 366],
  ['barrigen', 370],
  ['belerainte', 370],
  ['danjin', 370],
  ['furykov', 370],
  ['illardia', 370],
  ['ladiolus', 370],
  ['loberry', 370],
  ['longhi', 370],
  ['maor', 370],
  ['mushaho', 370],
  ['myuhan', 370],
  ['satobi', 370],
  ['shedule', 370],
  ['tenftory', 370],
  ['yuhirai', 370],
  ['yuri', 370],
] as const

const CASES = CHARACTERS.map(([id, chapter]) => ({ id, chapter }))

describe.each(LOCALES)('Kakin phase 2 in %s', (locale) => {
  const read = (bookmark: Bookmark): Reader =>
    readerFor(archive, bookmark, locale)

  it.each(CASES)(
    'opens $id and its drawing at chapter $chapter',
    ({ id, chapter }) => {
      const before = read({ mode: 'chapter', chapter: chapter - 1 })
      const reached = read({ mode: 'chapter', chapter })

      expect(opened(id, before)).toBe(false)
      expect(opened(id, reached)).toBe(true)
    },
  )

  it.each(CASES)(
    'opens $id’s dated facts only at its naming gate',
    ({ id, chapter }) => {
      const owner = recordIn(archive, id)
      const before = read({ mode: 'chapter', chapter: chapter - 1 })
      const reached = read({ mode: 'chapter', chapter })
      for (const field of ['affiliation', 'status', 'relationships'] as const) {
        expect(archive.reachedOf(before, owner, field)).toStrictEqual([])
        expect(archive.reachedOf(reached, owner, field)).toHaveLength(1)
      }
    },
  )

  describe.each<Bookmark>([
    { mode: 'episode', episode: 148 },
    { mode: 'season', season: 6, episode: 12 },
  ])('anime bookmark $mode', (bookmark) => {
    it.each(CASES)('omits $id from the anime', ({ id }) => {
      const reader = read(bookmark)

      expect(characterPage(id, reader)).toBeUndefined()
      expect(drawingsFor([id], reader)).toStrictEqual({})
    })
  })

  it('opens the Black Whale at its chapter 342 naming, for manga readers only', () => {
    const anime = placePage(
      'black-whale',
      read({ mode: 'episode', episode: 148 }),
    )

    expect(opened('black-whale', read({ mode: 'chapter', chapter: 341 }))).toBe(
      false,
    )
    expect(opened('black-whale', read({ mode: 'chapter', chapter: 342 }))).toBe(
      true,
    )
    expect(anime).toBeUndefined()
  })

  it('pins Momoze’s death at chapter 368', () => {
    const owner = recordIn(archive, 'momoze-hui-guo-rou')
    const alive = read({ mode: 'chapter', chapter: 367 })
    const dead = read({ mode: 'chapter', chapter: 368 })

    expect(archive.latestOf(alive, owner, 'status')).toBe('alive')
    expect(archive.latestOf(dead, owner, 'status')).toBe('deceased')
  })

  it('pins Vincent’s death at chapter 364', () => {
    const owner = recordIn(archive, 'vincent')

    expect(
      archive.latestOf(
        read({ mode: 'chapter', chapter: 363 }),
        owner,
        'status',
      ),
    ).toBe('alive')
    expect(
      archive.latestOf(
        read({ mode: 'chapter', chapter: 364 }),
        owner,
        'status',
      ),
    ).toBe('deceased')
  })
})
