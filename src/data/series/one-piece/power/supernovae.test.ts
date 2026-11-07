import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { powerPage } from '~/server/archive/power.server'
import { readerFor } from '~/server/archive/reader.server'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

/**
 * The Supernovas (#1094) on the real archive: absent just before ch. 498 and
 * ep 392, all eleven held from there to the end, named in both locales, and
 * nothing leaking on either side of the gate.
 */

const ELEVEN = [
  'monkey-d-luffy',
  'roronoa-zoro',
  'capone-bege',
  'jewelry-bonney',
  'basil-hawkins',
  'eustass-kid',
  'scratchmen-apoo',
  'x-drake',
  'killer',
  'urouge',
  'trafalgar-law',
]

const BOOKMARKS: [Bookmark, string[] | undefined][] = [
  [{ mode: 'chapter', chapter: 497 }, undefined],
  [{ mode: 'chapter', chapter: 498 }, ELEVEN],
  [{ mode: 'chapter', chapter: 1143 }, ELEVEN],
  [{ mode: 'episode', episode: 391 }, undefined],
  [{ mode: 'episode', episode: 392 }, ELEVEN],
  [{ mode: 'episode', episode: 1172 }, ELEVEN],
]

describe('the Supernovas', () => {
  it.each(BOOKMARKS)('seat at %o what the story has told', (bookmark, ids) => {
    const page = powerPage(readerFor(ONE_PIECE_LOADED.archive, bookmark, 'en'))
    const seats = page.bodies
      .find(({ id }) => id === 'supernovae')
      ?.seats.map((seat) =>
        seat.state === 'held' ? seat.holder.id : seat.state,
      )

    expect(seats).toStrictEqual(ids)
  })

  it('come last on the page', () => {
    const page = powerPage(
      readerFor(
        ONE_PIECE_LOADED.archive,
        { mode: 'chapter', chapter: 1143 },
        'en',
      ),
    )

    expect(page.bodies.at(-1)?.id).toBe('supernovae')
  })

  it.each([
    ['en', 'Supernovas', 'Supernova'],
    ['it', 'Supernove', 'Supernova'],
  ] as const)('are named in %s', (locale, name, title) => {
    const page = powerPage(
      readerFor(
        ONE_PIECE_LOADED.archive,
        { mode: 'chapter', chapter: 498 },
        locale,
      ),
    )
    const body = page.bodies.find(({ id }) => id === 'supernovae')

    expect(body?.name).toBe(name)
    expect(body?.kind).toBe('council')
    expect(new Set(body?.seats.map((seat) => seat.title))).toStrictEqual(
      new Set([title]),
    )
  })

  it('leak nothing on either side of the gate, in either locale', () => {
    const leaks = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)
    for (const [bookmark] of BOOKMARKS) {
      for (const locale of LOCALES) {
        const page = powerPage(
          readerFor(ONE_PIECE_LOADED.archive, bookmark, locale),
        )

        expect(leaks(page, bookmark), JSON.stringify(bookmark)).toStrictEqual(
          [],
        )
      }
    }
  })
})
