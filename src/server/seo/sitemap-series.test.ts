import { describe, expect, it, vi } from 'vitest'

import { withFeatures } from '~/data/features'
import { archiveOf, OPEN_SERIES } from '~/data/series'
import type { SeriesArchive } from '~/data/types'
import { SITE_ORIGIN } from '~/lib/seo/site'

import { sitemapXml } from './sitemap.server'

vi.mock(import('~/data/series'), async (original) => {
  const registry = await original()
  const base = await registry.archiveOf('one-piece')
  // Lookups that find nothing: One Piece files no ability.
  const none = withFeatures(base)
  const other: SeriesArchive = {
    ...base,
    series: {
      ...base.series,
      slug: 'test-series',
      kinds: ['character', 'ability'],
      features: {
        bounty: false,
        factions: false,
        filler: false,
        fruits: false,
        nen: false,
        power: false,
        worldMap: false,
      },
    },
    // The second is told by the anime alone, so no crawler is sent to it.
    characters: [
      ...base.characters.slice(0, 1),
      ...base.characters
        .slice(1, 2)
        .map((entity) => ({
          ...entity,
          id: 'anime-only',
          source: 'episode' as const,
        })),
    ],
    places: [],
    // One Nen ability, so its index and its page are listed (#923).
    features: {
      abilities: {
        abilities: base.characters
          .slice(2, 3)
          .map((entity) => ({
            ...entity,
            id: 'test-ability',
            kind: 'ability' as const,
          })),
        abilityNenOf: none.abilityNenOf,
        getAbility: none.getAbility,
        usersOf: none.usersOf,
      },
    },
  }
  const loadOther = vi
    .fn<() => Promise<SeriesArchive>>()
    .mockResolvedValue(other)
  return {
    OPEN_SERIES: [
      ...registry.OPEN_SERIES,
      {
        ...registry.ONE_PIECE,
        slug: other.series.slug,
        description: other.series,
        load: loadOther,
      },
    ],
    archiveOf: vi.fn<(slug: string) => Promise<SeriesArchive>>(async (slug) => {
      if (slug === other.series.slug) {
        return other
      }
      const archive = await registry.archiveOf(slug)
      return archive
    }),
  }
})

describe('a sitemap with more than one series', () => {
  it('loads each registered archive and keeps its addresses and alternates separate', async () => {
    vi.mocked(archiveOf).mockRejectedValueOnce(
      new Error('Temporary archive failure'),
    )

    await expect(sitemapXml()).rejects.toThrow('Temporary archive failure')

    const xml = await sitemapXml()

    expect(xml).toContain(`${SITE_ORIGIN}/one-piece/en/characters/`)
    expect(xml).toContain(`${SITE_ORIGIN}/test-series/en/characters/`)
    expect(xml).toContain(
      `hreflang="it" href="${SITE_ORIGIN}/test-series/it/characters/`,
    )
    expect(xml).not.toContain('/characters/anime-only')
    expect(xml).not.toContain(`${SITE_ORIGIN}/test-series/en/fruits`)
    expect(xml).not.toContain(`${SITE_ORIGIN}/test-series/en/filler`)
    expect(xml).not.toContain(`${SITE_ORIGIN}/test-series/en/ranks`)
    expect(xml).not.toContain(`${SITE_ORIGIN}/test-series/en/places`)

    await expect(sitemapXml()).resolves.toBe(xml)
    expect(archiveOf).toHaveBeenCalledTimes(OPEN_SERIES.length * 2)
  })

  it('lists the abilities of a series that files the kind', async () => {
    const xml = await sitemapXml()

    expect(xml).toContain(`${SITE_ORIGIN}/test-series/en/abilities</loc>`)
    expect(xml).toContain(
      `${SITE_ORIGIN}/test-series/en/abilities/test-ability</loc>`,
    )
  })
})
