import { describe, expect, it } from 'vitest'

import type { PowerBody, Seat } from '~/data/features'
import type { Entity, SeriesArchive } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Source } from '~/lib/progress/spoiler'
import type { PowerPageView, SeatView } from '~/lib/view/power'
import { leaksOf } from '~/test/fog'
import {
  bodyFaults,
  EARLY,
  FIRST_VERSION,
  FIXTURE_BODY,
  LATE,
  MANGA_VERSION,
  MIDWAY,
  POWER_ARCHIVE,
  SECOND_VERSION,
  THRONE,
} from '~/test/power'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { powerPage, seatsHeldBy } from './power.server'
import { drawingOf } from './project.server'
import { readerFor } from './reader.server'

/** The fixture's page at one bookmark. */
function pageAt(bookmark: Bookmark, locale: Locale = 'en'): PowerPageView {
  return powerPage(readerFor(POWER_ARCHIVE, bookmark, locale))
}

/** Each seat as its holder's id, `vacant` or `unknown`. */
function seatsAt(bookmark: Bookmark): string[] | undefined {
  return pageAt(bookmark).bodies[0]?.seats.map((seat: SeatView) =>
    seat.state === 'held' ? seat.holder.id : seat.state,
  )
}

const chapter = (at: number): Bookmark => ({ mode: 'chapter', chapter: at })
const episode = (at: number): Bookmark => ({ mode: 'episode', episode: at })

/** `LATE` as a record one source alone tells, under an id of its own. */
function toldOnlyIn(source: Source): Entity {
  return { ...LATE, id: `late-${source}-only`, source }
}

/**
 * A seat that stands vacant from the body's gate, so a body with it stays
 * listed (#1194) while its other seats are under fog.
 */
const STOOL: Seat = {
  told: THRONE.told,
  title: { en: 'Fixture Stool', it: 'Sgabello di prova' },
  holders: [
    {
      episode: EARLY.revealedAtEpisode,
      chapter: EARLY.revealedAtChapter,
      value: null,
    },
  ],
}

/** The fixture archive with one body of these seats, as a council. */
function withSeats(...seats: Seat[]): SeriesArchive {
  return {
    ...POWER_ARCHIVE,
    features: {
      ...POWER_ARCHIVE.features,
      power: { bodies: [{ ...FIXTURE_BODY, seats }] },
    },
  }
}

/**
 * A seat `EARLY` holds until `MIDWAY` tells it passed to `next`: in between
 * a reader who has not met `next` must see it fogged, naming neither. A
 * vacant `STOOL` keeps the body listed.
 */
function passedTo(next: Entity): SeriesArchive {
  return {
    ...POWER_ARCHIVE,
    getCharacter: (id) =>
      id === next.id ? next : POWER_ARCHIVE.getCharacter(id),
    features: {
      ...POWER_ARCHIVE.features,
      power: {
        bodies: [
          {
            ...FIXTURE_BODY,
            seats: [
              {
                ...THRONE,
                holders: [
                  {
                    episode: EARLY.revealedAtEpisode,
                    chapter: EARLY.revealedAtChapter,
                    value: EARLY.id,
                  },
                  { ...MIDWAY, value: next.id },
                ],
              },
              STOOL,
            ],
          },
        ],
      },
    },
  }
}

const PASSED_ARCHIVE = passedTo(LATE)

/** The fixture's seats, by name. */
const [, CROWN = THRONE, SCEPTRE = THRONE] = FIXTURE_BODY.seats
const PASSED_SEAT = PASSED_ARCHIVE.features.power?.bodies[0]?.seats[0] ?? THRONE

/** A body of the Crown alone: under fog until `LATE` is met. */
const CROWN_ONLY = withSeats(CROWN)

/** A page of one of these archives at a bookmark. */
function fixturePage(
  archive: SeriesArchive,
  bookmark: Bookmark,
  locale: Locale = 'en',
): PowerPageView {
  return powerPage(readerFor(archive, bookmark, locale))
}

/** The words of the Crown's body a page sends. */
function namesIn(page: PowerPageView): string[] {
  const served = JSON.stringify(page)

  return [
    FIXTURE_BODY.id,
    'Seven Warlords',
    'Flotta dei Sette',
    CROWN.title.en,
    CROWN.title.it,
  ].filter((word) => served.includes(word))
}

/** That seat: its holder's id when held, else the whole seat as sent. */
function passedAt(
  bookmark: Bookmark,
  locale: Locale = 'en',
  archive: SeriesArchive = PASSED_ARCHIVE,
): SeatView | string | undefined {
  const seat = powerPage(readerFor(archive, bookmark, locale)).bodies[0]
    ?.seats[0]

  return seat?.state === 'held' ? seat.holder.id : seat
}

/** Every word the fixture could leak, in both locales. */
const FIXTURE_WORDS = [
  FIXTURE_BODY.id,
  'Seven Warlords',
  'Flotta dei Sette',
  ...FIXTURE_BODY.seats.flatMap(({ title }) => [title.en, title.it]),
  EARLY.id,
  EARLY.name.en,
  LATE.id,
  LATE.name.en,
]

/** What each version says, in both languages. */
const FIRST = FIRST_VERSION.value
const SECOND = SECOND_VERSION.value
const MANGA = MANGA_VERSION.value

/** The fixture's description at one bookmark. */
function describedAt(
  bookmark: Bookmark,
  locale: Locale = 'en',
): string | undefined {
  return pageAt(bookmark, locale).bodies[0]?.description
}

describe('the power page', () => {
  it.each([null, chapter(1), episode(1)])(
    'names nothing of the fixture at %j',
    (bookmark) => {
      for (const locale of LOCALES) {
        const served = JSON.stringify(pageAt(bookmark, locale))

        expect(served).toBe('{"bodies":[]}')

        for (const word of FIXTURE_WORDS) {
          expect(served).not.toContain(word)
        }
      }
    },
  )

  it('opens a body at its gate with the seats told then', () => {
    const at = chapter(FIXTURE_BODY.revealedAtChapter)
    const [body] = pageAt(at).bodies

    expect(body).toMatchObject({
      id: 'warlords',
      kind: 'council',
      name: 'Seven Warlords of the Sea',
      ended: false,
    })
    expect(seatsAt(at)).toStrictEqual([EARLY.id, 'unknown'])
    expect(pageAt(at, 'it').bodies[0]?.seats[0]?.title).toBe('Trono di prova')
    // A seat met before its holder sends its title and nothing else.
    expect(pageAt(at).bodies[0]?.seats[1]).toStrictEqual({
      title: 'Fixture Crown',
      state: 'unknown',
    })
    expect(JSON.stringify(pageAt(at))).not.toContain(LATE.id)
  })

  it('vacates a seat and counts a new one from the chapter that tells it', () => {
    const at = chapter(MIDWAY.chapter)

    // The second seat's holder is dated here but not met until later: it
    // waits for the character's own gate.
    expect(seatsAt(at)).toStrictEqual(['vacant', 'unknown', 'unknown'])
    expect(seatsAt(chapter(MIDWAY.chapter - 1))).toStrictEqual([
      EARLY.id,
      'unknown',
    ])
    expect(seatsAt(chapter(LATE.revealedAtChapter))).toStrictEqual([
      'vacant',
      LATE.id,
      'unknown',
    ])
  })

  it('ends the body with its seats as they stood', () => {
    expect(pageAt(chapter(599)).bodies[0]?.ended).toBe(false)
    expect(pageAt(chapter(600)).bodies[0]?.ended).toBe(true)
    // The manga alone seats `EARLY` again at chapter 620.
    expect(seatsAt(chapter(620))).toStrictEqual(['vacant', EARLY.id, 'unknown'])
  })

  it('reads the same gates in episodes, without the manga-only entry', () => {
    expect(seatsAt(episode(FIXTURE_BODY.revealedAtEpisode))).toStrictEqual([
      EARLY.id,
      'unknown',
    ])
    expect(seatsAt(episode(MIDWAY.episode))).toStrictEqual([
      'vacant',
      'unknown',
      'unknown',
    ])
    expect(seatsAt(episode(LATE.revealedAtEpisode))).toStrictEqual([
      'vacant',
      LATE.id,
      'unknown',
    ])
    expect(pageAt(episode(500)).bodies[0]?.ended).toBe(true)
    expect(seatsAt(episode(1000))).toStrictEqual(['vacant', LATE.id, 'unknown'])
  })

  it('sends a held holder’s drawing as it stands, and none for the rest', () => {
    const at = chapter(LATE.revealedAtChapter)
    const reader = readerFor(POWER_ARCHIVE, at, 'en')
    const seats = powerPage(reader).bodies[0]?.seats ?? []

    expect(seats.map((seat) => seat.state)).toStrictEqual([
      'vacant',
      'held',
      'unknown',
    ])

    const held = seats[1]

    expect(held?.state === 'held' && held.holder.visual).toStrictEqual(
      drawingOf(LATE, reader),
    )
    expect(drawingOf(LATE, reader).strokes.length).toBeGreaterThan(0)
    // A vacant or fogged seat names no one: no drawing, no tint.
    expect(seats[0]).toStrictEqual({ title: 'Fixture Throne', state: 'vacant' })
    expect(seats[2]).toStrictEqual({
      title: 'Fixture Sceptre',
      state: 'unknown',
    })
  })

  it('would catch a fogged holder’s drawing in the payload', () => {
    const at = chapter(FIXTURE_BODY.revealedAtChapter)
    const page = pageAt(at)
    const [body] = page.bodies
    const lateDrawing = drawingOf(LATE, readerFor(POWER_ARCHIVE, null, 'en'))
    const leaked = {
      bodies: [{ ...body, seats: [...(body?.seats ?? []), lateDrawing] }],
    }
    const leaks = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)

    expect(leaks(page, at)).toStrictEqual([])
    expect(leaks(leaked, at)).toContain(LATE.id)
  })

  it('leaks nothing at any point around its gates', () => {
    const leaks = leaksOf(ONE_PIECE_LOADED, LOADED_SERIES)
    const points = [
      null,
      ...[
        1,
        FIXTURE_BODY.revealedAtChapter - 1,
        FIXTURE_BODY.revealedAtChapter,
        MIDWAY.chapter - 1,
        MIDWAY.chapter,
        LATE.revealedAtChapter - 1,
        LATE.revealedAtChapter,
        619,
        620,
      ].map((at) => chapter(at)),
      ...[
        1,
        FIXTURE_BODY.revealedAtEpisode - 1,
        FIXTURE_BODY.revealedAtEpisode,
        MIDWAY.episode,
        LATE.revealedAtEpisode - 1,
        LATE.revealedAtEpisode,
      ].map((at) => episode(at)),
    ]

    for (const bookmark of points) {
      for (const locale of LOCALES) {
        expect(leaks(pageAt(bookmark, locale), bookmark)).toStrictEqual([])
      }
    }
  })

  it.each([
    [
      chapter(MIDWAY.chapter - 1),
      chapter(MIDWAY.chapter),
      chapter(LATE.revealedAtChapter - 1),
      chapter(LATE.revealedAtChapter),
    ],
    [
      episode(MIDWAY.episode - 1),
      episode(MIDWAY.episode),
      episode(LATE.revealedAtEpisode - 1),
      episode(LATE.revealedAtEpisode),
    ],
  ])(
    'hides the old holder once a change to one not met is told (%j)',
    (...[before, at, unmet, met]) => {
      expect(passedAt(before)).toStrictEqual(EARLY.id)
      expect(passedAt(met)).toStrictEqual(LATE.id)

      for (const bookmark of [at, unmet]) {
        expect(passedAt(bookmark)).toStrictEqual({
          title: 'Fixture Throne',
          state: 'unknown',
        })
        expect(passedAt(bookmark, 'it')).toStrictEqual({
          title: 'Trono di prova',
          state: 'unknown',
        })
      }
    },
  )

  it.each([
    {
      only: 'episode' as const,
      kept: [MIDWAY.chapter, LATE.revealedAtChapter, 1000].map((at) =>
        chapter(at),
      ),
      seen: episode(LATE.revealedAtEpisode),
    },
    {
      only: 'chapter' as const,
      kept: [MIDWAY.episode, LATE.revealedAtEpisode, 1000].map((at) =>
        episode(at),
      ),
      seen: chapter(LATE.revealedAtChapter),
    },
  ])(
    'keeps the old holder when the change is to one only the $only tells',
    ({ kept, only, seen }) => {
      const archive = passedTo(toldOnlyIn(only))

      for (const bookmark of kept) {
        expect(passedAt(bookmark, 'en', archive)).toBe(EARLY.id)
      }

      expect(passedAt(seen, 'en', archive)).toBe(`late-${only}-only`)
    },
  )

  it('never opens a holder the reader’s archive does not have', () => {
    const archive = {
      ...POWER_ARCHIVE,
      features: {
        ...POWER_ARCHIVE.features,
        power: {
          bodies: [
            {
              ...FIXTURE_BODY,
              seats: [
                {
                  ...THRONE,
                  holders: [
                    {
                      episode: EARLY.revealedAtEpisode,
                      chapter: EARLY.revealedAtChapter,
                      value: 'nobody',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    }
    const page = powerPage(readerFor(archive, chapter(1000), 'en'))

    // Its one seat stays under fog, so the body is not listed either.
    expect(page).toStrictEqual({ bodies: [], fogged: true })
  })

  it.each([
    {
      fogged: [
        chapter(FIXTURE_BODY.revealedAtChapter),
        chapter(LATE.revealedAtChapter - 1),
      ],
      met: chapter(LATE.revealedAtChapter),
    },
    {
      fogged: [
        episode(FIXTURE_BODY.revealedAtEpisode),
        episode(LATE.revealedAtEpisode - 1),
      ],
      met: episode(LATE.revealedAtEpisode),
    },
  ])(
    'lists a body only from the first seat of it held or vacant ($met.mode)',
    ({ fogged, met }) => {
      for (const bookmark of fogged) {
        for (const locale of LOCALES) {
          const page = fixturePage(CROWN_ONLY, bookmark, locale)

          expect(page).toStrictEqual({ bodies: [], fogged: true })
          expect(namesIn(page)).toStrictEqual([])
        }
      }

      const page = fixturePage(CROWN_ONLY, met)

      expect(page.fogged).toBeUndefined()
      expect(page.bodies.map(({ id }) => id)).toStrictEqual(['warlords'])
    },
  )

  it('describes the body with the latest version the reader has reached, in their medium', () => {
    expect(describedAt(chapter(FIXTURE_BODY.revealedAtChapter))).toBe(FIRST.en)
    expect(describedAt(chapter(MIDWAY.chapter - 1))).toBe(FIRST.en)
    expect(describedAt(chapter(MIDWAY.chapter))).toBe(SECOND.en)
    expect(describedAt(chapter(MIDWAY.chapter), 'it')).toBe(SECOND.it)
    expect(describedAt(chapter(620))).toBe(MANGA.en)
    // The manga-only version never reaches an episode reader.
    expect(describedAt(episode(520))).toBe(SECOND.en)
    expect(describedAt(episode(MIDWAY.episode - 1))).toBe(FIRST.en)
  })

  it('sends no description for a body not yet listed, nor a later version early', () => {
    const before = chapter(FIXTURE_BODY.revealedAtChapter - 1)

    const early = JSON.stringify(pageAt(chapter(MIDWAY.chapter - 1)))
    const hidden = fixturePage(withSeats(SCEPTRE), chapter(MIDWAY.chapter))

    expect(pageAt(before).bodies).toStrictEqual([])
    expect(early).not.toContain(SECOND.en)
    expect(JSON.stringify(hidden)).not.toContain('Fixture group')
  })

  it('lists a body whose one known seat is vacant', () => {
    const page = fixturePage(
      withSeats(CROWN, STOOL),
      chapter(FIXTURE_BODY.revealedAtChapter),
    )

    expect(page.bodies[0]?.seats.map(({ state }) => state)).toStrictEqual([
      'unknown',
      'vacant',
    ])
  })

  it('keeps a body that ends with every seat under fog in the fog line', () => {
    const archive = withSeats(SCEPTRE)

    for (const bookmark of [chapter(MIDWAY.chapter), chapter(1000)]) {
      expect(fixturePage(archive, bookmark)).toStrictEqual({
        bodies: [],
        fogged: true,
      })
    }
  })

  it('hides a body again while its one known seat is under fog', () => {
    const archive = withSeats(PASSED_SEAT)

    expect(
      fixturePage(archive, chapter(MIDWAY.chapter - 1)).bodies,
    ).toHaveLength(1)
    expect(fixturePage(archive, chapter(MIDWAY.chapter))).toStrictEqual({
      bodies: [],
      fogged: true,
    })
    expect(
      fixturePage(archive, chapter(LATE.revealedAtChapter)).bodies,
    ).toHaveLength(1)
  })

  it.each(LOADED_SERIES.filter(({ slug }) => slug !== 'one-piece'))(
    'is empty for $slug, which has none',
    ({ archive }) => {
      const page = powerPage(readerFor(archive, chapter(1000), 'en'))

      expect(page).toStrictEqual({ bodies: [] })
    },
  )
})

/** The seats a character's page lists at a bookmark, as `title` or `title, body`. */
function heldAt(
  holder: Entity,
  bookmark: Bookmark,
  {
    archive = POWER_ARCHIVE,
    locale = 'en',
  }: { archive?: SeriesArchive; locale?: Locale } = {},
): string[] {
  return seatsHeldBy(holder, readerFor(archive, bookmark, locale)).map(
    ({ body, title }) => (body === undefined ? title : `${title}, ${body}`),
  )
}

describe('a character’s seats', () => {
  it.each([
    [chapter, 'revealedAtChapter', 'chapter'],
    [episode, 'revealedAtEpisode', 'episode'],
  ] as const)(
    'are the ones the power page shows them in, from then to the change (%#)',
    (at, gate, unit) => {
      expect(heldAt(EARLY, at(EARLY[gate] - 1))).toStrictEqual([])
      expect(heldAt(EARLY, at(EARLY[gate]))).toStrictEqual(['Fixture Throne'])
      expect(heldAt(EARLY, at(MIDWAY[unit] - 1))).toStrictEqual([
        'Fixture Throne',
      ])
      // Vacated: the power page says so, and the page lists nothing.
      expect(heldAt(EARLY, at(MIDWAY[unit]))).toStrictEqual([])
      // Told before `LATE` is met: under fog on the power page, so not here.
      expect(heldAt(LATE, at(MIDWAY[unit]))).toStrictEqual([])
      expect(heldAt(LATE, at(LATE[gate] - 1))).toStrictEqual([])
      expect(heldAt(LATE, at(LATE[gate]))).toStrictEqual(['Fixture Crown'])
      expect(heldAt(LATE, at(LATE[gate]), { locale: 'it' })).toStrictEqual([
        'Corona di prova',
      ])
    },
  )

  it.each([chapter(600), episode(500), chapter(1000)])(
    'are none in a body that has ended (%j), which the power page still shows',
    (bookmark) => {
      expect(heldAt(LATE, bookmark)).toStrictEqual([])
      expect(
        powerPage(readerFor(POWER_ARCHIVE, bookmark, 'en')).bodies[0]?.ended,
      ).toBe(true)
    },
  )

  it('name the body of a chain or a crew, whose title does not', () => {
    const archive: SeriesArchive = {
      ...POWER_ARCHIVE,
      features: {
        ...POWER_ARCHIVE.features,
        power: { bodies: [{ ...FIXTURE_BODY, kind: 'chain' }] },
      },
    }

    expect(
      heldAt(EARLY, chapter(MIDWAY.chapter - 1), { archive }),
    ).toStrictEqual(['Fixture Throne, Seven Warlords of the Sea'])
    expect(
      heldAt(EARLY, chapter(MIDWAY.chapter - 1), { archive, locale: 'it' }),
    ).toStrictEqual(['Trono di prova, Flotta dei Sette'])
  })

  it.each([
    { only: 'episode' as const, theirs: episode, other: chapter },
    { only: 'chapter' as const, theirs: chapter, other: episode },
  ])(
    'follow a change only the $only tells in that medium alone',
    ({ only, other, theirs }) => {
      const late = toldOnlyIn(only)
      const archive = passedTo(late)
      const met = {
        chapter: LATE.revealedAtChapter,
        episode: LATE.revealedAtEpisode,
      }

      expect(heldAt(late, theirs(met[only]), { archive })).toStrictEqual([
        'Fixture Throne',
      ])
      expect(heldAt(EARLY, theirs(met[only]), { archive })).toStrictEqual([])

      const otherUnit = only === 'chapter' ? 'episode' : 'chapter'

      expect(heldAt(EARLY, other(met[otherUnit]), { archive })).toStrictEqual([
        'Fixture Throne',
      ])
    },
  )

  it.each(LOADED_SERIES.filter(({ slug }) => slug !== 'one-piece'))(
    'are none in $slug, which has no bodies',
    ({ archive }) => {
      for (const holder of archive.characters.slice(0, 20)) {
        expect(heldAt(holder, chapter(1000), { archive })).toStrictEqual([])
      }
    },
  )
})

/** What is wrong with the fixture body given these description versions. */
function faults(description: PowerBody['description']): string[] {
  return bodyFaults([{ ...FIXTURE_BODY, description }], POWER_ARCHIVE)
}

describe('the bodies of power', () => {
  it.each(LOADED_SERIES)('are sound in $slug', ({ archive }) => {
    expect(
      bodyFaults(archive.features.power?.bodies ?? [], archive),
    ).toStrictEqual([])
  })

  it('tell a chain’s or a crew’s lead seat before the rest', () => {
    const [, crown, sceptre] = FIXTURE_BODY.seats
    const chain = { ...FIXTURE_BODY, kind: 'chain' as const }

    expect(bodyFaults([chain], POWER_ARCHIVE)).toStrictEqual([])
    expect(
      bodyFaults(
        [{ ...chain, seats: [sceptre ?? THRONE, crown ?? THRONE] }],
        POWER_ARCHIVE,
      ),
    ).toStrictEqual(['warlords tells a seat before its lead'])
    expect(
      bodyFaults(
        [
          {
            ...chain,
            seats: [
              { ...THRONE, told: { ...THRONE.told, source: 'episode' } },
              crown ?? THRONE,
            ],
          },
        ],
        POWER_ARCHIVE,
      ),
    ).toStrictEqual(['warlords tells a seat before its lead'])
  })

  it('hold every description to its rules', () => {
    const [first, second, third] = [
      FIRST_VERSION,
      SECOND_VERSION,
      MANGA_VERSION,
    ]
    const short = { en: 'Too short.', it: 'Troppo breve.' }

    expect(faults([first, { ...second, value: short }])).toStrictEqual([
      'warlords description 1 (en) runs 10 characters',
      'warlords description 1 (it) runs 13 characters',
    ])
    expect(faults([first, second, third, third])).toStrictEqual([
      'warlords has more than 3 descriptions',
      'warlords description 3 is out of order',
    ])
    expect(faults([{ ...second, chapter: 1 }])).toStrictEqual([
      'warlords description does not open with the body',
    ])
    expect(
      faults([first, { ...second, episode: 9999, chapter: 9999 }]),
    ).toStrictEqual(['warlords description 1 is past the ceiling'])
    expect(
      faults([first, { ...second, episode: first.episode }]),
    ).toStrictEqual(['warlords description 1 is out of order'])
  })

  it('hold the fixture, and catch a body broken against them', () => {
    expect(bodyFaults([FIXTURE_BODY], POWER_ARCHIVE)).toStrictEqual([])

    const seat = THRONE
    const broken = {
      ...FIXTURE_BODY,
      seats: [
        {
          ...seat,
          told: { revealedAtEpisode: 1, revealedAtChapter: 1 },
          holders: seat.holders.toReversed(),
        },
        {
          ...seat,
          holders: [{ episode: 9999, chapter: 9999, value: 'nobody' }],
        },
      ],
      ended: { revealedAtEpisode: 1, revealedAtChapter: 1 },
    }

    expect(bodyFaults([broken, broken], POWER_ARCHIVE)).toStrictEqual([
      'warlords ends before it opens',
      'warlords seat 0 opens before its body',
      'warlords seat 0 holders are out of order',
      'warlords seat 1 has a holder past the ceiling',
      'warlords seat 1 seats nobody, who is not filed',
      'warlords is filed twice',
      'warlords ends before it opens',
      'warlords seat 0 opens before its body',
      'warlords seat 0 holders are out of order',
      'warlords seat 1 has a holder past the ceiling',
      'warlords seat 1 seats nobody, who is not filed',
    ])
  })
})
