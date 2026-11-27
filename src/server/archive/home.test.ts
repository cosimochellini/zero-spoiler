import { describe, expect, it } from 'vitest'

import type { SeriesArchive } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { Gated } from '~/lib/progress/spoiler'
import { LOADED_SERIES, ONE_PIECE_LOADED } from '~/test/series'

import { homePage } from './home.server'
import { readerFor } from './reader.server'

const { archive } = ONE_PIECE_LOADED

/** The ids of the characters just met at a point, latest first. */
function metAt(bookmark: NonNullable<Bookmark>): string[] {
  return homePage(readerFor(archive, bookmark, 'it')).met.map(({ id }) => id)
}

type Unit = 'chapter' | 'episode'

/** A record's threshold in one unit. */
function opensIn(record: Gated, unit: Unit): number {
  return unit === 'chapter' ?
      record.revealedAtChapter
    : record.revealedAtEpisode
}

/** Whether one arc's "just met" row holds, and whether it fell back. */
interface ArcCheck {
  fallback: boolean
  ok: boolean
}

/**
 * The home page on the count an arc opens: its "just met" row holds when it
 * is latest first, at most six, none past the bookmark, and inside the arc,
 * or inside the arc before when it fell back.
 */
function checkArc(filed: SeriesArchive, arc: Gated, unit: Unit): ArcCheck {
  const at = opensIn(arc, unit)
  const bookmark: NonNullable<Bookmark> =
    unit === 'chapter' ?
      { mode: 'chapter', chapter: at }
    : { mode: 'episode', episode: at }
  const r = readerFor(filed, bookmark, 'en')
  const home = homePage(r)
  const [here, previous] = r
    .order(r.archive.arcs)
    .filter((reached) => r.sees(reached))
    .toReversed()
  const [floor, ceiling] = home.metBefore ? [previous, here] : [here]
  const low = floor === undefined ? Infinity : opensIn(floor, unit)
  const high = ceiling === undefined ? Infinity : opensIn(ceiling, unit)
  const opens = home.met.map((met) => opensIn(met, unit))
  const fits = opens.every((open) => open <= at && open >= low && open < high)
  const sorted = opens.join(',') === opens.toSorted((x, y) => y - x).join(',')

  return { fallback: home.metBefore, ok: fits && sorted && opens.length <= 6 }
}

/** The arcs whose row breaks at their start, and how many fell back. */
function sweep(filed: SeriesArchive, unit: Unit): [string[], number] {
  const checks = filed.arcs.map((arc) => ({
    id: arc.id,
    ...checkArc(filed, arc, unit),
  }))

  return [
    checks.filter(({ ok }) => !ok).map(({ id }) => id),
    checks.filter(({ fallback }) => fallback).length,
  ]
}

describe('just met', () => {
  it('names Whole Cake Island’s first newcomers, latest first, and no one from Zou', () => {
    const byEpisode = metAt({ mode: 'episode', episode: 784 })
    const byChapter = metAt({ mode: 'chapter', chapter: 826 })

    for (const met of [byEpisode, byChapter]) {
      expect(met.toSorted((a, b) => a.localeCompare(b))).toStrictEqual([
        'gotti',
        'vinsmoke-reiju',
        'vinsmoke-yonji',
      ])
      expect(met.at(-1)).toBe('gotti')
    }

    expect(metAt({ mode: 'episode', episode: 783 })).toStrictEqual(['gotti'])
  })

  it.each(
    LOADED_SERIES.flatMap(({ archive: filed, slug }) =>
      (['episode', 'chapter'] as const).map((unit) => ({ filed, slug, unit })),
    ),
  )(
    'stays inside the arc, or the one before while it has none, in $slug by $unit',
    ({ filed, unit }) => {
      const [broken] = sweep(filed, unit)

      expect(broken).toStrictEqual([])
    },
  )

  it('takes the arc before somewhere, so the fallback is held', () => {
    expect(sweep(archive, 'episode')[1]).toBeGreaterThan(0)
  })
})
