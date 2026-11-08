import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { BodyView } from '~/lib/view/power'
import { powerPage } from '~/server/archive/power.server'
import { readerFor } from '~/server/archive/reader.server'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

/**
 * The Supernovas (#1094) on the real archive: absent just before ch. 498 and
 * ep 392, all eleven held from there to the end, in both media and both
 * locales, named in each, and nothing leaking on either side of the gate.
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

/** The holders' names as each locale prints them, in seat order. */
const NAMES = {
  en: [
    'Monkey D. Luffy',
    'Roronoa Zoro',
    'Capone Bege',
    'Jewelry Bonney',
    'Basil Hawkins',
    'Eustass Kid',
    'Scratchmen Apoo',
    'X Drake',
    'Killer',
    'Urouge',
    'Trafalgar Law',
  ],
  it: [
    'Monkey D. Rufy',
    'Roronoa Zoro',
    'Capone Bege',
    'Jewelry Bonney',
    'Basil Hawkins',
    'Eustass Kidd',
    'Scratchmen Apoo',
    'X Drake',
    'Killer',
    'Urouge',
    'Trafalgar Law',
  ],
}

const LABELS = { en: 'Supernovas', it: 'Supernove' }

/** The Supernovas' body on the page at a bookmark, in a locale. */
function supernovaeAt(
  bookmark: Bookmark,
  locale: Locale,
): BodyView | undefined {
  return powerPage(
    readerFor(ONE_PIECE_LOADED.archive, bookmark, locale),
  ).bodies.find(({ id }) => id === 'supernovae')
}

describe('the Supernovas', () => {
  it.each(
    BOOKMARKS.flatMap(([bookmark, ids]) =>
      LOCALES.map((locale) => ({ bookmark, ids, locale })),
    ),
  )(
    'seat at $bookmark in $locale what the story has told',
    ({ bookmark, ids, locale }) => {
      const seats = supernovaeAt(bookmark, locale)?.seats.map((seat) =>
        seat.state === 'held' ? seat.holder.id : seat.state,
      )

      expect(seats).toStrictEqual(ids)
    },
  )

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

  it.each(
    LOCALES.flatMap((locale) =>
      (
        [
          { mode: 'chapter', chapter: 498 },
          { mode: 'episode', episode: 392 },
        ] as const
      ).map((bookmark) => ({ bookmark, locale })),
    ),
  )('are named in $locale at $bookmark', ({ bookmark, locale }) => {
    const body = supernovaeAt(bookmark, locale)

    expect(body?.name).toBe(LABELS[locale])
    expect(body?.kind).toBe('council')
    expect(body?.seats.map((seat) => seat.title)).toStrictEqual(
      ELEVEN.map(() => 'Supernova'),
    )
    expect(
      body?.seats.map((seat) =>
        seat.state === 'held' ? seat.holder.name : seat.state,
      ),
    ).toStrictEqual(NAMES[locale])
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
