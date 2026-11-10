import { describe, expect, it } from 'vitest'

import { type PowerBody, withFeatures } from '~/data/features'
import { aroundGates } from '~/data/sweep'
import type { Entity } from '~/data/types'
import { FACTION_LABELS } from '~/i18n/dictionaries/one-piece/factions'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import type { CharacterFacts } from '~/lib/view/facts'
import type { PowerPageView } from '~/lib/view/power'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { characterPage } from './pages.server'
import { powerPage, seatsHeldBy } from './power.server'
import { printedFaction } from './printed.server'
import { type Reader, readerFor } from './reader.server'

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
    ...body.description.map((version) => archive.gateOf(version, body)),
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

/**
 * Each held seat of a body still standing, as `body|title|holder`: from the
 * power page, and from every holder's own page (`seatsHeldBy`).
 */
function seatsAt(
  bookmark: Bookmark,
  locale: Locale,
): { onPages: string[]; onPower: string[] } {
  const r = readerFor(archive, bookmark, locale)
  const onPower: string[] = []
  for (const body of powerPage(r).bodies) {
    for (const seat of body.seats) {
      if (seat.state !== 'held' || body.ended) {
        continue
      }
      onPower.push(`${body.id}|${seat.title}|${seat.holder.id}`)
    }
  }
  const onPages = HOLDERS.flatMap((holder) =>
    seatsHeldBy(holder, r).map(
      ({ id, title }) => `${id}|${title}|${holder.id}`,
    ),
  )

  return {
    onPages: onPages.toSorted(alphabetically),
    onPower: onPower.toSorted(alphabetically),
  }
}

/**
 * What is wrong with every holder's seats at one ask: any seat at all while
 * their own record is under fog or not in the reader's medium, and once it is
 * open, any record the seats name that the reader has not reached.
 */
function seatFaults(
  { bookmark, locale }: { bookmark: Bookmark; locale: Locale },
  leaksIn: ReturnType<typeof leaksOf>,
): string[] {
  const r = readerFor(archive, bookmark, locale)
  const at = `@ ${JSON.stringify(bookmark)} ${locale}`

  return HOLDERS.flatMap((holder) =>
    holderFaults(holder, { at, bookmark, r }, leaksIn),
  )
}

/** What is wrong with one holder's seats at one ask (`seatFaults`). */
function holderFaults(
  holder: Entity,
  { at, bookmark, r }: { at: string; bookmark: Bookmark; r: Reader },
  leaksIn: ReturnType<typeof leaksOf>,
): string[] {
  const seats = seatsHeldBy(holder, r)
  const open = r.archive.getCharacter(holder.id) !== undefined && r.sees(holder)
  if (!open) {
    return seats.length === 0 ? [] : [`${holder.id} seated under fog ${at}`]
  }

  return leaksIn(seats, bookmark).map(
    (id) => `${id} via ${holder.id}'s seats ${at}`,
  )
}

/** The records the power page names at one ask that the reader has not reached. */
function powerLeaks(
  { bookmark, locale }: { bookmark: Bookmark; locale: Locale },
  leaksIn: ReturnType<typeof leaksOf>,
): string[] {
  const page = powerPage(readerFor(archive, bookmark, locale))

  return leaksIn(page, bookmark).map(
    (id) => `${id} @ ${JSON.stringify(bookmark)} ${locale}`,
  )
}

const alphabetically = (a: string, b: string): number => a.localeCompare(b)

/** Every string a payload holds, keys left out. */
function stringsIn(payload: unknown): string[] {
  if (typeof payload === 'string') {
    return [payload]
  }
  if (typeof payload !== 'object' || payload === null) {
    return []
  }
  return Object.values(payload).flatMap((value) => stringsIn(value))
}

/** Every word that names a body, in either locale: id, label, seat titles. */
function wordsOf(body: PowerBody): string[] {
  const label = FACTION_LABELS
  return [
    body.id,
    ...LOCALES.map((locale) => label[locale][printedFaction(body.id)]),
    ...body.seats.flatMap(({ title }) => [title.en, title.it]),
  ]
}

/**
 * What is wrong with one ask's page under the rule of #1194: a body listed
 * with every seat under fog; a word naming a body the reader has met that it
 * does not list (a seat title it shares with a listed body, "Captain", is
 * that body's word); a key besides `bodies` and `fogged`; and a `fogged`
 * line missing, or set with no such body.
 */
function hiddenFaults({
  bookmark,
  locale,
}: {
  bookmark: Bookmark
  locale: Locale
}): string[] {
  const r = readerFor(archive, bookmark, locale)
  const page = powerPage(r)
  const at = `@ ${JSON.stringify(bookmark)} ${locale}`
  const listed = new Set(page.bodies.map(({ id }) => id))
  const hidden = bodies.filter((body) => r.sees(body) && !listed.has(body.id))
  const shown = new Set(
    page.bodies.flatMap(({ seats }) => seats.map(({ title }) => title)),
  )
  const said = new Set(stringsIn(page))
  const faults = [
    ...page.bodies
      .filter(({ seats }) => seats.every(({ state }) => state === 'unknown'))
      .map(({ id }) => `${id} listed under fog ${at}`),
    ...hidden
      .flatMap((body) => wordsOf(body))
      .filter((word) => said.has(word) && !shown.has(word))
      .map((word) => `"${word}" of a hidden body ${at}`),
  ]
  const keys = Object.keys(page).filter((key) => key !== 'bodies')
  if (keys.some((key) => key !== 'fogged')) {
    faults.push(`unexpected keys ${keys.join(', ')} ${at}`)
  }
  if ((page.fogged === true) !== hidden.length > 0) {
    faults.push(`fogged is ${String(page.fogged)} ${at}`)
  }

  return faults
}

/**
 * Whether a bookmark has reached a version of a body's description, worked
 * out from the raw numbers rather than the reader's gate: the later of the
 * body's and the version's, in the bookmark's own unit, and not a version the
 * other medium alone tells.
 */
function reaches(
  bookmark: Bookmark,
  body: PowerBody,
  version: PowerBody['description'][number],
): boolean {
  if (bookmark === null) {
    return false
  }
  if (bookmark.mode === 'chapter') {
    return (
      version.source !== 'episode'
      && bookmark.chapter >= Math.max(body.revealedAtChapter, version.chapter)
    )
  }

  return (
    version.source !== 'chapter'
    && bookmark.episode >= Math.max(body.revealedAtEpisode, version.episode)
  )
}

/**
 * What is wrong with the descriptions on one ask's page (#1196): a listed
 * body not described by the latest version the bookmark reaches; the text of
 * any other version, or of a body not listed, in the payload; and a text that
 * prints the label of a group the page does not list, in either language.
 */
function descriptionFaults(ask: {
  bookmark: Bookmark
  locale: Locale
}): string[] {
  const { bookmark, locale } = ask
  const page = powerPage(readerFor(archive, bookmark, locale))
  const at = `@ ${JSON.stringify(bookmark)} ${locale}`
  const served = JSON.stringify(page)

  return [
    ...bodies.flatMap((body) => {
      const view = page.bodies.find(({ id }) => id === body.id)
      const reached = body.description.findLast((version) =>
        reaches(bookmark, body, version),
      )

      return [
        ...(view === undefined || view.description === reached?.value[locale] ?
          []
        : [`${body.id} is described wrongly ${at}`]),
        ...body.description
          .filter((version) => version !== reached || view === undefined)
          .filter((version) =>
            served.includes(JSON.stringify(version.value[locale]).slice(1, -1)),
          )
          .map(() => `${body.id} sends a version it has not reached ${at}`),
      ]
    }),
    ...labelFaults(page, { at, locale }),
  ]
}

/**
 * The labels, in the page's language and in any case, of groups a page does
 * not list, printed in its descriptions.
 */
function labelFaults(
  page: PowerPageView,
  { at, locale }: { at: string; locale: Locale },
): string[] {
  const listed = new Set(page.bodies.map(({ id }) => id))
  const labels = bodies
    .filter(({ id }) => !listed.has(id))
    .map(({ id }) => FACTION_LABELS[locale][printedFaction(id)])

  return page.bodies.flatMap(({ description = '' }) =>
    labels
      .filter((label) =>
        description.toLowerCase().includes(label.toLowerCase()),
      )
      .map((label) => `"${label}" of a body not listed ${at}`),
  )
}

/** A bookmark's count in its own unit, 0 for none. */
function countOf(point: Bookmark): number {
  if (point === null) {
    return 0
  }
  return point.mode === 'chapter' ? point.chapter : point.episode
}

/** The bodies listed at each sweep point of one medium, in reading order. */
function listedIn(
  mode: 'chapter' | 'episode',
): { listed: string[]; point: Bookmark }[] {
  return POINTS.filter((point) => point?.mode === mode)
    .toSorted((a, b) => countOf(a) - countOf(b))
    .map((point) => ({
      point,
      listed: powerPage(readerFor(archive, point, 'en')).bodies.map(
        ({ id }) => id,
      ),
    }))
}

/** The bodies one medium lists at a point and no longer at the next. */
function droppedIn(mode: 'chapter' | 'episode'): string[] {
  const points = listedIn(mode)
  const dropped: string[] = []
  for (const [at, { listed, point }] of points.entries()) {
    const next = points[at + 1]?.listed ?? listed
    dropped.push(
      ...listed
        .filter((id) => !next.includes(id))
        .map((id) => `${id} after ${JSON.stringify(point)}`),
    )
  }

  return dropped
}

// About 400 bookmarks in both locales, each a power page and every holder's
// seats: a few seconds alone, more on a loaded runner.
const TIMEOUT = 60_000

describe('the power feature at every dated change', () => {
  it('has a point on both sides of each change', () => {
    expect(HOLDERS.length).toBeGreaterThan(90)
    expect(POINTS.length).toBeGreaterThan(400)
  })

  it(
    'lists only bodies with a seat held or vacant, and names none of the rest',
    () => {
      expect(ASKS.flatMap((ask) => hiddenFaults(ask))).toStrictEqual([])
    },
    TIMEOUT,
  )

  it(
    'describes each listed body by the latest version reached and names no group the page does not list',
    () => {
      expect(ASKS.flatMap((ask) => descriptionFaults(ask))).toStrictEqual([])
    },
    TIMEOUT,
  )

  // Hiding a body again would say something changed in it: the archive does
  // not do it today, and a filing that would has to be looked at (#1194).
  it(
    'keeps a body listed once it is, in each medium',
    () => {
      expect([...droppedIn('chapter'), ...droppedIn('episode')]).toStrictEqual(
        [],
      )
    },
    TIMEOUT,
  )

  // The scan that catches a holder named before their record opens: a
  // `holderOf` that skipped the character's own gate would name them here
  // (and fail `power.test.ts`'s fixture), while the equality below, which
  // reads `holderOf` on both sides, would not see it.
  it(
    'names on the power page no record the reader has not reached',
    () => {
      const leaksIn = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)
      const leaks = ASKS.flatMap((ask) => powerLeaks(ask, leaksIn))

      expect(leaks).toStrictEqual([])
    },
    TIMEOUT,
  )

  it(
    'lists no seat on a holder’s page while their record is under fog, and names nothing unreached after',
    () => {
      const leaksIn = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)

      expect(ASKS.flatMap((ask) => seatFaults(ask, leaksIn))).toStrictEqual([])
    },
    TIMEOUT,
  )

  it(
    'lists on each holder’s page exactly the seats the power page shows them holding, so none it shows unknown or vacant',
    () => {
      for (const { bookmark, locale } of ASKS) {
        const { onPages, onPower } = seatsAt(bookmark, locale)

        expect(onPages, `${JSON.stringify(bookmark)} ${locale}`).toStrictEqual(
          onPower,
        )
      }
    },
    TIMEOUT,
  )
})

/** A character's page, as `loadCharacter` sends it, at a chapter. */
function factsAt(id: string, at: number): CharacterFacts | undefined {
  return characterPage(
    id,
    readerFor(archive, { mode: 'chapter', chapter: at }, 'en'),
  )?.detail.facts
}

describe('the character page', () => {
  it('sends a holder’s seats from the chapter they are reached', () => {
    expect(factsAt('sakazuki', 649)?.seats).toStrictEqual([
      { id: 'marines', title: 'Admiral', body: 'Marines' },
    ])
    expect(factsAt('sakazuki', 1143)?.seats).toStrictEqual([
      { id: 'marines', title: 'Fleet Admiral', body: 'Marines' },
    ])
  })

  it('sends no seats before the holder is met, though the seat is told', () => {
    // The admirals' seats are told at 319; Sakazuki's record opens at 556.
    for (const at of [1, 319, 555]) {
      const facts = factsAt('sakazuki', at)

      expect(facts, String(at)).toBeDefined()
      expect(facts, String(at)).not.toHaveProperty('seats')
    }
  })

  it('sends no seats for a character who holds none', () => {
    expect(factsAt('kaya', 1143)).toBeDefined()
    expect(factsAt('kaya', 1143)).not.toHaveProperty('seats')
    expect(HOLDERS.map(({ id }) => id)).not.toContain('kaya')
  })
})
