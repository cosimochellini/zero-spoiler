import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { opened, recordIn } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('hunter-x-hunter')

// Independent expectations from the naming scenes, not the implementation.
const CHARACTERS = [
  ['vergei', 373],
  ['ken-i-wang', 379],
  ['cashew', 379],
  ['keeney', 381],
] as const

// Deaths dated in this window, new and returning records alike.
const DEATHS = [
  ['keeney', 383],
  ['myuhan', 376],
  ['sale-sale-hui-guo-rou', 382],
  ['kacho-hui-guo-rou', 383],
] as const

const CASES = CHARACTERS.map(([id, chapter]) => ({ id, chapter }))

describe.each(LOCALES)('Kakin phase 3 in %s', (locale) => {
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
      for (const field of ['affiliation', 'status'] as const) {
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

  it('opens Keeney’s escape-plan relationship at chapter 383', () => {
    const owner = recordIn(archive, 'keeney')

    expect(
      archive.reachedOf(
        read({ mode: 'chapter', chapter: 382 }),
        owner,
        'relationships',
      ),
    ).toStrictEqual([])
    expect(
      archive.reachedOf(
        read({ mode: 'chapter', chapter: 383 }),
        owner,
        'relationships',
      ),
    ).toHaveLength(1)
  })

  it('adds Vergei’s Nen teacher only at chapter 375', () => {
    const owner = recordIn(archive, 'vergei')
    const before = archive.latestOf(
      read({ mode: 'chapter', chapter: 374 }),
      owner,
      'relationships',
    )
    const reached = archive.latestOf(
      read({ mode: 'chapter', chapter: 375 }),
      owner,
      'relationships',
    )

    expect(before?.map(({ character: id }) => id)).toStrictEqual(['kurapika'])
    expect(reached?.map(({ character: id }) => id)).toStrictEqual([
      'biscuit-krueger',
      'kurapika',
    ])
  })

  it.each(DEATHS)(
    'files %s as deceased only from chapter %i',
    (id, chapter) => {
      const owner = recordIn(archive, id)
      const before = read({ mode: 'chapter', chapter: chapter - 1 })
      const reached = read({ mode: 'chapter', chapter })

      expect(archive.latestOf(before, owner, 'status')).not.toBe('deceased')
      expect(archive.latestOf(reached, owner, 'status')).toBe('deceased')
    },
  )

  it('adds Illumi’s Troupe membership only at chapter 377', () => {
    const owner = recordIn(archive, 'illumi')
    const before = archive.latestOf(
      read({ mode: 'chapter', chapter: 376 }),
      owner,
      'affiliation',
    )
    const reached = archive.latestOf(
      read({ mode: 'chapter', chapter: 377 }),
      owner,
      'affiliation',
    )
    const anime = archive.latestOf(
      read({ mode: 'episode', episode: 148 }),
      owner,
      'affiliation',
    )

    expect(before?.en).not.toContain('Phantom Troupe')
    expect(reached?.en).toContain('Phantom Troupe')
    expect(anime?.en).not.toContain('Phantom Troupe')
  })
})
