import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { PowerPageView, SeatView } from '~/lib/view/power'
import { leaksOf } from '~/test/fog'
import {
  bodyFaults,
  EARLY,
  FIXTURE_BODY,
  LATE,
  MIDWAY,
  POWER_ARCHIVE,
  THRONE,
} from '~/test/power'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { powerPage } from './power.server'
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

    expect(page.bodies[0]?.seats).toStrictEqual([
      { title: 'Fixture Throne', state: 'unknown' },
    ])
  })

  it.each(LOADED_SERIES.filter(({ slug }) => slug !== 'one-piece'))(
    'is empty for $slug, which has none',
    ({ archive }) => {
      const page = powerPage(readerFor(archive, chapter(1000), 'en'))

      expect(page).toStrictEqual({ bodies: [] })
    },
  )
})

describe('the bodies of power', () => {
  it.each(LOADED_SERIES)('are sound in $slug', ({ archive }) => {
    expect(
      bodyFaults(archive.features.power?.bodies ?? [], archive),
    ).toStrictEqual([])
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
