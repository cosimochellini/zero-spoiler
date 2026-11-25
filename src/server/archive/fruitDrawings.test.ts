import { describe, expect, it } from 'vitest'

import type { Drawings } from '~/data/art/stroke'
import { DRAWINGS } from '~/data/series/one-piece/art'
import { fruitRedrawn } from '~/data/series/one-piece/art/fruits'
import { getFruit } from '~/data/series/one-piece/fruits'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import { locateEpisode } from '~/lib/progress/seasons'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import type { FruitDetail } from '~/lib/view/records'
import { opFruitPage as fruitPage } from '~/test/archive'
import { leaksIn, saysNothing } from '~/test/fog'
import type { Pin } from '~/test/gates'

/** The drawings by any record's id, as the archive hands them out. */
const DRAWN: Drawings = DRAWINGS

/**
 * The drawings a fruit's page lets the reader switch between: only those
 * reached, each on the later of its own gate and the fruit's, in either unit,
 * and none at all while there is only one.
 */

/** The last chapter a bookmark can hold. */
const LAST_CHAPTER = ONE_PIECE_BOOKMARK.chapterCeiling

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** An absolute episode as a season viewer's bookmark. */
function season(absolute: number): Bookmark {
  const at = locateEpisode(absolute, ONE_PIECE_BOOKMARK)
  if (at === null) {
    throw new Error(`no season holds episode ${String(absolute)}`)
  }

  return { mode: 'season', ...at }
}

function detailOf(id: string, bookmark: Bookmark): FruitDetail {
  const page = fruitPage(id, bookmark, 'en')
  if (page === undefined) {
    throw new Error(`no fruit ${id}`)
  }

  return page.detail
}

function fruitOf(id: string): Entity {
  const entity = getFruit(id)
  if (entity === undefined) {
    throw new Error(`no fruit ${id}`)
  }

  return entity
}

/**
 * The scene that first shows each redrawn fruit drawn again, pinned by hand
 * (#1410): the real fruit, or the awakening, at its chapter and episode, the
 * one medium that alone shows it (`source`, #1683), and how many times the
 * fruit is drawn again in all (`stages`, 1 when unset).
 */
const REDRAWN: (Pin & { id: string; stages?: number })[] = [
  { id: 'chop-chop-fruit', episode: 8, chapter: 19 },
  { id: 'ox-ox-fruit-model-bison', episode: 1101, chapter: 1070 },
  { id: 'flame-flame-fruit', episode: 629, chapter: 700 },
  { id: 'op-op-fruit', episode: 704, chapter: 765 },
  { id: 'string-string-fruit', episode: 723, chapter: 782 },
  { id: 'mochi-mochi-fruit', episode: 855, chapter: 882 },
  {
    id: 'snake-snake-fruit-mythical-model-yamata-no-orochi',
    episode: 965,
    chapter: 965,
  },
  {
    id: 'fish-fish-fruit-mythical-model-azure-dragon',
    episode: 1101,
    chapter: 1070,
  },
  {
    id: 'cat-cat-fruit-model-leopard',
    episode: 1100,
    chapter: 1069,
    stages: 2,
  },
  // Episode 1101 alone shows it; chapter 1070 is the one the episode adapts.
  { id: 'love-love-fruit', episode: 1101, chapter: 1070, source: 'episode' },
  // Episode 1041 shows it before the fruit is named at 1042 (chapter 1020);
  // the manga's own showing, chapter 1070 page 6, is the second stage.
  {
    id: 'dog-dog-fruit-model-okuchi-no-makami',
    episode: 1042,
    chapter: 1020,
    source: 'episode',
    stages: 2,
  },
  { id: 'paw-paw-fruit', episode: 1130, chapter: 1096 },
]

/** Two `[id, count]` pairs in the order of their ids. */
const byId = ([a]: [string, number], [b]: [string, number]): number =>
  a.localeCompare(b)

/** A fruit's first redrawing, or the test is wrong. */
function firstRedrawingOf(
  id: string,
): NonNullable<(typeof fruitRedrawn)[string]>[number] {
  const entry = fruitRedrawn[id]?.[0]
  if (entry === undefined) {
    throw new Error(`${id} files no redrawing`)
  }

  return entry
}

/** The two units a pin is told in, each at the bookmarks below. */
const UNITS = ['episode', 'chapter'] as const

/**
 * A pin's bookmarks in one unit: one count before it, and at it; a season
 * viewer counts episodes.
 */
function bookmarksIn(
  unit: (typeof UNITS)[number],
  { chapter, episode }: Pin,
): { at: Bookmark[]; before: Bookmark[] } {
  return unit === 'chapter' ?
      { before: [ch(chapter - 1)], at: [ch(chapter)] }
    : {
        before: [ep(episode - 1), season(episode - 1)],
        at: [ep(episode), season(episode)],
      }
}

/** What a fruit's page sends: the drawings to switch between, the one held. */
interface Sent {
  drawings: { look: string; strokes: unknown }[]
  /** The strokes the stage holds; the last of `drawings` when unset. */
  shown?: unknown
}

/**
 * A fruit's page at each bookmark: the drawings it lets the reader switch
 * between, and the one its stage holds. Nothing on it says more than the
 * bookmark allows.
 */
function expectDrawings(
  id: string,
  bookmarks: Bookmark[],
  { drawings, shown = drawings.at(-1)?.strokes }: Sent,
): void {
  for (const bookmark of bookmarks) {
    const detail = detailOf(id, bookmark)
    const held = detail.slot.open ? detail.slot.record.visual.strokes : null

    expect(detail.drawings, JSON.stringify(bookmark)).toStrictEqual(drawings)
    expect(held, JSON.stringify(bookmark)).toBe(shown)

    saysNothing(detail, bookmark)
  }
}

describe('a fruit’s drawings', () => {
  it('pins every fruit drawn again, and how many times', () => {
    expect(
      REDRAWN.map(({ id, stages = 1 }): [string, number] => [
        id,
        stages,
      ]).toSorted(byId),
    ).toStrictEqual(
      Object.entries(fruitRedrawn)
        .map(([id, entries]): [string, number] => [id, entries.length])
        .toSorted(byId),
    )
  })

  it.each(REDRAWN)(
    'switches $id only from its redrawing, in the units that show it',
    ({ id, source, ...pin }) => {
      const entry = firstRedrawingOf(id)
      const first = DRAWN[fruitOf(id).visual.art]

      for (const unit of UNITS) {
        const { before, at } = bookmarksIn(unit, pin)

        for (const bookmark of before) {
          const detail = detailOf(id, bookmark)

          expect(detail.drawings, JSON.stringify(bookmark)).toStrictEqual([])

          saysNothing(detail, bookmark)
        }
        // The medium that does not show it keeps the first drawing at the
        // pin; the other switches to the stage, which the slot then holds.
        if ((source ?? unit) === unit) {
          expectDrawings(id, at, {
            drawings: [
              { look: 'power', strokes: first },
              { look: entry.look, strokes: entry.value },
            ],
          })
        } else {
          expectDrawings(id, at, { drawings: [], shown: first })
        }
      }
    },
  )

  it('switches a fruit drawn twice again between all three, in order', () => {
    // The real fruit is the anime's alone (episode 1101): a manga reader
    // switches between the first drawing and the awakening, at any chapter.
    const id = 'cat-cat-fruit-model-leopard'
    const [awakening, real] = fruitRedrawn[id] ?? []
    const first = { look: 'power', strokes: DRAWN[fruitOf(id).visual.art] }
    const awakened = { look: 'awakening', strokes: awakening?.value }

    expect.hasAssertions()

    expectDrawings(id, [ep(1101), season(1101)], {
      drawings: [first, awakened, { look: 'real', strokes: real?.value }],
    })
    expectDrawings(id, [ch(1070), ch(LAST_CHAPTER)], {
      drawings: [first, awakened],
    })
  })

  it('never shows a manga reader the anime’s Love-Love Fruit', () => {
    const id = 'love-love-fruit'

    expect.hasAssertions()

    expectDrawings(id, [ch(1070), ch(LAST_CHAPTER)], {
      drawings: [],
      shown: DRAWN[fruitOf(id).visual.art],
    })
  })

  it('shows the Okuchi-no-Makami fruit from each medium’s own showing', () => {
    // Episode 1041 shows the real fruit before the fruit is named (1042);
    // the manga draws it only in chapter 1070, page 6. Both stages hold the
    // same drawing, each told in one medium.
    const id = 'dog-dog-fruit-model-okuchi-no-makami'
    const [anime, manga] = fruitRedrawn[id] ?? []
    const first = DRAWN[fruitOf(id).visual.art]

    expect(manga?.value).toBe(anime?.value)

    expectDrawings(id, [ep(1042), season(1042), ep(1101)], {
      drawings: [
        { look: 'power', strokes: first },
        { look: 'real', strokes: anime?.value },
      ],
    })
    expectDrawings(id, [ch(1020), ch(1069)], { drawings: [], shown: first })
    expectDrawings(id, [ch(1070), ch(LAST_CHAPTER)], {
      drawings: [
        { look: 'power', strokes: first },
        { look: 'real', strokes: manga?.value },
      ],
    })
  })

  it('sends nothing to switch between under fog', () => {
    // The Op-Op Fruit is first named at 590; the bookmark is long before.
    expect(detailOf('op-op-fruit', ep(100)).drawings).toStrictEqual([])
  })

  it('sends one drawing for a fruit never drawn again', () => {
    expect(detailOf('gum-gum-fruit', ep(1100)).drawings).toStrictEqual([])
  })

  it('is read by the spoiler sweep: a drawing slipped in early fails it', () => {
    // The Flame-Flame Fruit is open at 628 and shown as a real fruit at 629.
    const real = fruitRedrawn['flame-flame-fruit']?.[0]?.value ?? []
    const detail = detailOf('flame-flame-fruit', ep(628))
    const slipped = { ...detail, drawings: [{ look: 'real', strokes: real }] }

    saysNothing(detail, ep(628))

    expect(leaksIn(slipped, ep(628))).toStrictEqual(['flame-flame-fruit'])
    expect(leaksIn(slipped, ep(629))).toStrictEqual([])
  })
})
