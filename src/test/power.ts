import type { Description, Holding, PowerBody, Seat } from '~/data/features'
import { aroundGates } from '~/data/sweep'
import type { SeriesArchive } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { powerPage } from '~/server/archive/power.server'
import { readerFor } from '~/server/archive/reader.server'

import { leaksOf } from './fog'
import { recordIn } from './gates'
import { LOADED_SERIES, type LoadedSeries, ONE_PIECE_LOADED } from './series'

/** Who the fixture seats: one met early, one met much later. */
export const EARLY = recordIn(ONE_PIECE_LOADED.archive, 'dracule-mihawk')
export const LATE = recordIn(ONE_PIECE_LOADED.archive, 'boa-hancock')

/** When the fixture's first seat is vacated and its third one told. */
export const MIDWAY = { episode: 300, chapter: 390 }

const BODY_GATE: Gated = {
  revealedAtEpisode: EARLY.revealedAtEpisode,
  revealedAtChapter: EARLY.revealedAtChapter,
}

/** The fixture's first seat, held from the body's gate and vacated `MIDWAY`. */
export const THRONE: Seat = {
  told: BODY_GATE,
  title: { en: 'Fixture Throne', it: 'Trono di prova' },
  holders: [
    {
      episode: EARLY.revealedAtEpisode,
      chapter: EARLY.revealedAtChapter,
      value: EARLY.id,
    },
    { ...MIDWAY, value: null },
  ],
}

/** The fixture's description: at the body's gate, `MIDWAY`, and manga alone. */
export const FIRST_VERSION: Description = {
  episode: EARLY.revealedAtEpisode,
  chapter: EARLY.revealedAtChapter,
  value: {
    en: 'Fixture group, first version. A fixture text long enough to pass the floor on length.',
    it: 'Gruppo di prova, prima versione. Un testo di prova abbastanza lungo da superare il minimo.',
  },
}
export const SECOND_VERSION: Description = {
  ...MIDWAY,
  value: {
    en: 'Fixture group, second version. A fixture text long enough to pass the floor on length.',
    it: 'Gruppo di prova, seconda versione. Un testo di prova abbastanza lungo da superare il minimo.',
  },
}
export const MANGA_VERSION: Description = {
  episode: 520,
  chapter: 620,
  source: 'chapter',
  value: {
    en: 'Fixture group, manga only. A fixture text long enough to pass the floor on length.',
    it: 'Gruppo di prova, solo manga. Un testo di prova abbastanza lungo da superare il minimo.',
  },
}

/**
 * A test body (#1085) that stands in for the filed ones over the One Piece
 * archive: the Warlords' id, because a body's id is a group's. Its
 * description has three versions: at the body's gate, `MIDWAY`, and in the
 * manga alone. Its first seat is held by
 * `EARLY` from the body's gate and vacated `MIDWAY`; its second is told
 * with the body, left unnamed until `LATE` takes it (an entry dated before
 * `LATE` is met, so it waits for them), then taken by `EARLY` in the manga
 * alone; its third is told `MIDWAY` and never filled. The body ends at
 * episode 500, chapter 600.
 */
export const FIXTURE_BODY: PowerBody = {
  ...BODY_GATE,
  id: 'warlords',
  kind: 'council',
  description: [FIRST_VERSION, SECOND_VERSION, MANGA_VERSION],
  seats: [
    THRONE,
    {
      told: BODY_GATE,
      title: { en: 'Fixture Crown', it: 'Corona di prova' },
      holders: [
        { ...MIDWAY, value: LATE.id },
        { episode: 520, chapter: 620, source: 'chapter', value: EARLY.id },
      ],
    },
    {
      told: {
        revealedAtEpisode: MIDWAY.episode,
        revealedAtChapter: MIDWAY.chapter,
      },
      title: { en: 'Fixture Sceptre', it: 'Scettro di prova' },
      holders: [],
    },
  ],
  ended: { revealedAtEpisode: 500, revealedAtChapter: 600 },
}

/** The One Piece archive with the fixture as its only body. */
export const POWER_ARCHIVE: SeriesArchive = {
  ...ONE_PIECE_LOADED.archive,
  features: {
    ...ONE_PIECE_LOADED.archive.features,
    power: { bodies: [FIXTURE_BODY] },
  },
}

/** Whether `later` opens no earlier than `earlier` in either unit. */
function noEarlier(later: Gated, earlier: Gated): boolean {
  return (
    later.revealedAtEpisode >= earlier.revealedAtEpisode
    && later.revealedAtChapter >= earlier.revealedAtChapter
  )
}

/**
 * Whether a holding comes after the one before it: a later episode, or the
 * same one for a change the manga alone tells at a later chapter, since the
 * manga's changes after the anime has ended share its last episode
 * (Kurapika's Rat seat, #1443). Never an earlier chapter.
 */
function follows(holding: Holding, previous: Holding): boolean {
  const later =
    holding.episode > previous.episode
    || (holding.episode === previous.episode
      && holding.source === 'chapter'
      && holding.chapter > previous.chapter)

  return later && holding.chapter >= previous.chapter
}

/** What is wrong with one holding of a seat, after the one before it. */
function holdingFaults(
  holding: Holding,
  previous: Holding | undefined,
  {
    archive,
    label,
    seat,
  }: { archive: SeriesArchive; label: string; seat: Seat },
): string[] {
  const ceiling = {
    revealedAtEpisode: archive.series.episodeCeiling,
    revealedAtChapter: archive.series.chapterCeiling,
  }
  const gate = {
    revealedAtEpisode: holding.episode,
    revealedAtChapter: holding.chapter,
  }
  const outOfOrder = previous !== undefined && !follows(holding, previous)
  const unfiled =
    holding.value !== null && archive.getCharacter(holding.value) === undefined

  return [
    ...(noEarlier(gate, seat.told) ?
      []
    : [`${label} has a holder before the seat`]),
    ...(outOfOrder ? [`${label} holders are out of order`] : []),
    ...(noEarlier(ceiling, gate) ?
      []
    : [`${label} has a holder past the ceiling`]),
    ...(unfiled ?
      [`${label} seats ${String(holding.value)}, who is not filed`]
    : []),
  ]
}

/** What is wrong with one seat of a body. */
function seatFaults(
  seat: Seat,
  label: string,
  { archive, body }: { archive: SeriesArchive; body: PowerBody },
): string[] {
  return [
    ...(noEarlier(seat.told, body) ? [] : [`${label} opens before its body`]),
    ...seat.holders.flatMap((holding, at) =>
      holdingFaults(holding, seat.holders[at - 1], { archive, label, seat }),
    ),
  ]
}

/**
 * Whether a chain's top rank or a crew's captain, its first seat, is told no
 * later than every other seat: the page stands the first seat it sends above
 * the rest, so a lower seat told first would stand there instead. Told in
 * both media, too: a lead one medium alone tells is not sent to the other's
 * readers, and the next seat would stand there for them.
 */
function leadsFirst({ kind, seats }: PowerBody): boolean {
  const [lead] = seats

  return (
    kind === 'council'
    || lead === undefined
    || (lead.told.source === undefined
      && seats.every((seat) => noEarlier(seat.told, lead.told)))
  )
}

/** The fewest and most characters a description may run to. */
const DESCRIPTION_LENGTH = { max: 260, min: 80 }
/** Most versions a description may have: a turning point each, not a log. */
const MOST_VERSIONS = 3

/** What is wrong with a body's description versions (#1196). */
function descriptionFaults(body: PowerBody, archive: SeriesArchive): string[] {
  const [first] = body.description
  const ceiling = {
    revealedAtEpisode: archive.series.episodeCeiling,
    revealedAtChapter: archive.series.chapterCeiling,
  }

  return [
    ...(body.description.length <= MOST_VERSIONS ?
      []
    : [`${body.id} has more than ${String(MOST_VERSIONS)} descriptions`]),
    ...((
      first.episode === body.revealedAtEpisode
      && first.chapter === body.revealedAtChapter
    ) ?
      []
    : [`${body.id} description does not open with the body`]),
    ...body.description.flatMap((version, at) => {
      const previous = body.description[at - 1]
      const label = `${body.id} description ${String(at)}`
      const outOfOrder =
        previous !== undefined
        && (version.episode <= previous.episode
          || version.chapter < previous.chapter)

      return [
        ...(outOfOrder ? [`${label} is out of order`] : []),
        ...((
          noEarlier(ceiling, {
            revealedAtEpisode: version.episode,
            revealedAtChapter: version.chapter,
          })
        ) ?
          []
        : [`${label} is past the ceiling`]),
        ...Object.entries(version.value)
          .filter(
            ([, text]) =>
              text.length < DESCRIPTION_LENGTH.min
              || text.length > DESCRIPTION_LENGTH.max,
          )
          .map(
            ([locale, text]) =>
              `${label} (${locale}) runs ${String(text.length)} characters`,
          ),
      ]
    }),
  ]
}

/**
 * What is wrong with a series' bodies of power, as messages; none for a
 * sound list. A seat opens no earlier than its body, and its holders no
 * earlier than the seat, in timeline order, inside the series' ceilings,
 * each naming a filed character; an end comes no earlier than the body.
 */
export function bodyFaults(
  bodies: PowerBody[],
  archive: SeriesArchive,
): string[] {
  return bodies.flatMap((body, at) => [
    ...(bodies.findIndex(({ id }) => id === body.id) === at ?
      []
    : [`${body.id} is filed twice`]),
    ...(body.ended === undefined || noEarlier(body.ended, body) ?
      []
    : [`${body.id} ends before it opens`]),
    ...descriptionFaults(body, archive),
    ...(leadsFirst(body) ? [] : [`${body.id} tells a seat before its lead`]),
    ...body.seats.flatMap((seat, place) =>
      seatFaults(seat, `${body.id} seat ${String(place)}`, { archive, body }),
    ),
  ])
}

/**
 * A holding's own gate, and its holder's record when it names one: the page
 * shows a holding at the later of the two, so both are a boundary. This
 * restates the server's rule (`holderOf` in `power.server.ts`) on purpose,
 * once, for every power test.
 */
function holdingGates(holding: Holding, archive: SeriesArchive): Gated[] {
  const own: Gated = {
    revealedAtEpisode: holding.episode,
    revealedAtChapter: holding.chapter,
    ...(holding.source !== undefined && { source: holding.source }),
  }
  const holder =
    holding.value === null ? undefined : archive.getCharacter(holding.value)

  return holder === undefined ? [own] : [own, holder]
}

/**
 * Every seat gate of a series' body: its own, its seats', holdings' and
 * holders', the holders read in the series' archive.
 */
export function bodyGates(series: LoadedSeries, body: PowerBody): Gated[] {
  return [
    body,
    ...body.seats.flatMap(({ holders, told }) => [
      told,
      ...holders.flatMap((holding) => holdingGates(holding, series.archive)),
    ]),
  ]
}

/** A series' body's seats at a bookmark: holder ids, `vacant` or `unknown`. */
export function seatsOf(
  series: LoadedSeries,
  id: string,
  bookmark: Bookmark,
): string[] | undefined {
  const page = powerPage(readerFor(series.archive, bookmark, 'en'))

  return page.bodies
    .find((body) => body.id === id)
    ?.seats.map((seat) => (seat.state === 'held' ? seat.holder.id : seat.state))
}

export const U = 'unknown'
export const V = 'vacant'

/**
 * The seats the page lists for a step: none while every one is under fog,
 * since a body is listed only once a seat of it is held or vacant (#1194).
 */
const listed = (seats: string[] | undefined): string[] | undefined =>
  seats?.every((seat) => seat === U) === true ? undefined : seats

/**
 * A body's changes in one medium, in order: the count that tells each and
 * the seats from there on. A holder named before their record opens is
 * fogged until it does, so a row that changes nothing checks that wait.
 */
export type Steps = [count: number, seats: string[]][]

/** One step with the seats the page lists just before it and from it on. */
export interface Edge {
  at: number
  before: string[] | undefined
  seats: string[] | undefined
}

/** Each step with the seats just before it: none before the body opens. */
export function edges(steps: Steps): Edge[] {
  return steps.map(([at, seats], place) => ({
    at,
    before: listed(steps[place - 1]?.[1]),
    seats: listed(seats),
  }))
}

/**
 * What a series' power page leaks on both sides of these gates, in each unit
 * that tells each (`aroundGates`) and in either locale, as
 * `bookmark locale: id`.
 */
export function powerLeaks(series: LoadedSeries, gates: Gated[]): string[] {
  const { archive } = series
  const leaks = leaksOf(series, LOADED_SERIES)

  return aroundGates(gates, archive.series).flatMap((bookmark) =>
    LOCALES.flatMap((locale) =>
      leaks(powerPage(readerFor(archive, bookmark, locale)), bookmark).map(
        (leak) => `${JSON.stringify(bookmark)} ${locale}: ${leak}`,
      ),
    ),
  )
}
