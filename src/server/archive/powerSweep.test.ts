import { describe, expect, it } from 'vitest'

import { withFeatures } from '~/data/features'
import { aroundGates } from '~/data/sweep'
import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { powerPage, seatsHeldBy } from './power.server'
import { readerFor } from './reader.server'

/**
 * The whole power feature on the real archive (#1095), at both sides of every
 * dated change of every body, in each unit that tells it: a body opening or
 * ending, a seat told, a holder changing, and each holder's own record, since
 * a change waits for the character it names. The sweep's own bookmarks
 * (`payloads.test.ts`) fall between most of these.
 */

const { archive } = ONE_PIECE_LOADED
const { bodies } = withFeatures(archive)

/** Every gate the power page reads. */
function gatesOf(): Gated[] {
  return bodies.flatMap((body) => [
    body,
    ...(body.ended === undefined ? [] : [body.ended]),
    ...body.seats.flatMap((seat) => [
      seat.told,
      ...seat.holders.flatMap((holding) => {
        const holder =
          holding.value === null ?
            undefined
          : archive.getCharacter(holding.value)

        return [
          {
            revealedAtEpisode: holding.episode,
            revealedAtChapter: holding.chapter,
            ...(holding.source !== undefined && { source: holding.source }),
          },
          ...(holder === undefined ? [] : [holder]),
        ]
      }),
    ]),
  ])
}

/** Everyone who ever holds a seat, once. */
const HOLDERS: Entity[] = [
  ...new Set(
    bodies
      .flatMap(({ seats }) => seats)
      .flatMap(({ holders }) => holders.map(({ value }) => value)),
  ),
].flatMap((id) => (id === null ? [] : (archive.getCharacter(id) ?? [])))

const POINTS: Bookmark[] = [
  null,
  ...aroundGates(gatesOf(), { episode: [], chapter: [] }, archive.series),
]

const ASKS = POINTS.flatMap((bookmark) =>
  LOCALES.map((locale) => ({ bookmark, locale })),
)

/** Each seat as `body|title|holder`, as the power page and the characters' pages show it. */
function seatsAt(
  bookmark: Bookmark,
  locale: (typeof LOCALES)[number],
): { onPages: string[]; onPower: string[]; ruled: Map<string, number> } {
  const r = readerFor(archive, bookmark, locale)
  const onPower: string[] = []
  // How many seats of each title a body has held on the power page.
  const ruled = new Map<string, number>()
  for (const body of powerPage(r).bodies) {
    for (const seat of body.seats) {
      if (seat.state !== 'held' || body.ended) {
        continue
      }
      const key = `${body.id}|${seat.title}`
      onPower.push(`${key}|${seat.holder.id}`)
      ruled.set(key, (ruled.get(key) ?? 0) + 1)
    }
  }
  const onPages = HOLDERS.flatMap((holder) =>
    seatsHeldBy(holder, r).map(
      ({ id, title }) => `${id}|${title}|${holder.id}`,
    ),
  )

  return { onPages, onPower: onPower.toSorted(alphabetically), ruled }
}

/**
 * The `body|title` pairs the characters' pages list at an ask more often than
 * the power page holds a seat of that title: one it shows under fog or vacant.
 */
function beyondHeldAt({ bookmark, locale }: (typeof ASKS)[number]): string[] {
  const { onPages, ruled } = seatsAt(bookmark, locale)
  const listed = new Map<string, number>()
  for (const seat of onPages) {
    const key = seat.slice(0, seat.lastIndexOf('|'))
    listed.set(key, (listed.get(key) ?? 0) + 1)
  }

  return [...listed]
    .filter(([key, count]) => count > (ruled.get(key) ?? 0))
    .map(([key]) => `${key} @ ${JSON.stringify(bookmark)} ${locale}`)
}

const alphabetically = (a: string, b: string): number => a.localeCompare(b)

// About 400 bookmarks in both locales, each a power page and every holder's
// seats: a few seconds alone, more on a loaded runner.
const TIMEOUT = 60_000

describe('the power feature at every dated change', () => {
  it('has a point on both sides of each change', () => {
    expect(HOLDERS.length).toBeGreaterThan(90)
    expect(POINTS.length).toBeGreaterThan(400)
  })

  it(
    'leaks nothing on the power page or in a character’s seats',
    () => {
      const leaksIn = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)
      const leaks: string[] = []
      for (const { bookmark, locale } of ASKS) {
        const r = readerFor(archive, bookmark, locale)
        const at = `@ ${JSON.stringify(bookmark)} ${locale}`
        const onPower = leaksIn(powerPage(r), bookmark)
        for (const id of onPower) {
          leaks.push(`${id} via loadPower ${at}`)
        }
        const seats = HOLDERS.flatMap((holder) => seatsHeldBy(holder, r))
        const onPages = leaksIn(seats, bookmark)
        for (const id of onPages) {
          leaks.push(`${id} via seats ${at}`)
        }
      }

      expect(leaks).toStrictEqual([])
    },
    TIMEOUT,
  )

  it(
    'never lists a seat on a character’s page that the power page shows unknown or vacant',
    () => {
      const extra = ASKS.flatMap((ask) => beyondHeldAt(ask))

      expect(extra).toStrictEqual([])
    },
    TIMEOUT,
  )

  it(
    'lists every held seat of a body still standing on its holder’s page, and only those',
    () => {
      for (const { bookmark, locale } of ASKS) {
        const { onPages, onPower } = seatsAt(bookmark, locale)

        expect(
          onPages.toSorted(alphabetically),
          JSON.stringify(bookmark),
        ).toStrictEqual(onPower)
      }
    },
    TIMEOUT,
  )
})
