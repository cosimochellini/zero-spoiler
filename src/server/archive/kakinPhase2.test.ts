import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Kakin phase 2 tests require Hunter x Hunter')
}
const { archive } = series

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

function opened(page: ReturnType<typeof characterPage>): boolean {
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

function character(id: string): Entity {
  const owner = archive.getCharacter(id)
  if (owner === undefined) {
    throw new Error(`Missing Kakin fixture ${id}`)
  }
  return owner
}

describe.each(LOCALES)('Kakin phase 2 in %s', (locale) => {
  const read = (bookmark: Bookmark): Reader =>
    readerFor(archive, bookmark, locale)

  it.each(CASES)(
    'opens $id and its drawing at chapter $chapter',
    ({ id, chapter }) => {
      const before = read({ mode: 'chapter', chapter: chapter - 1 })
      const reached = read({ mode: 'chapter', chapter })

      expect(opened(characterPage(id, before))).toBe(false)
      expect(drawingsFor([id], before)).toStrictEqual({})
      expect(opened(characterPage(id, reached))).toBe(true)
      expect(drawingsFor([id], reached)[id]?.length).toBeGreaterThan(3)
    },
  )

  it.each(CASES)(
    'opens $id’s dated facts only at its naming gate',
    ({ id, chapter }) => {
      const owner = character(id)
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

  it('pins Vincent’s death at chapter 364', () => {
    const owner = character('vincent')

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
