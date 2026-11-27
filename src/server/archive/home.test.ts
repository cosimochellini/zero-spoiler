import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { HomeView } from '~/lib/view/records'
import { ONE_PIECE_LOADED } from '~/test/series'

import { homePage } from './home.server'
import { readerFor } from './reader.server'

const { archive } = ONE_PIECE_LOADED

/** The ids of the characters just met at a point, latest first. */
function metAt(bookmark: NonNullable<Bookmark>): string[] {
  return homePage(readerFor(archive, bookmark, 'it')).met.map(({ id }) => id)
}

/** A home page on the episode an arc opens, and when its newcomers open. */
interface HomeAtStartResult {
  episode: number
  home: HomeView
  opens: number[]
}

/** The home page on the episode an arc opens, and when its newcomers open. */
function homeAtStart(arc: Entity): HomeAtStartResult {
  const episode = arc.revealedAtEpisode
  const home = homePage(readerFor(archive, { mode: 'episode', episode }, 'en'))

  return { episode, home, opens: home.met.map((m) => m.revealedAtEpisode) }
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

  it('stays inside the arc, or the one before while this one has no newcomer', () => {
    const homes = archive.arcs.map((arc) => homeAtStart(arc))

    for (const { episode, home, opens } of homes) {
      const start = home.saga.revealedAtEpisode

      expect(home.met.length).toBeLessThanOrEqual(6)
      expect(opens).toStrictEqual(opens.toSorted((a, b) => b - a))
      expect(opens.every((at) => at <= episode)).toBe(true)
      expect(
        opens.every((at) => (home.metBefore ? at < start : at >= start)),
      ).toBe(true)
    }

    // Some arc opens before anyone new is met in it, so the fallback is held.
    expect(homes.some(({ home }) => home.metBefore)).toBe(true)
  })
})
