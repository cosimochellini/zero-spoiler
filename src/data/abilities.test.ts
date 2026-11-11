import { describe, expect, it } from 'vitest'

import { withFeatures } from '~/data/features'
import type { SeriesArchive } from '~/data/types'
import { ABILITY_ARCHIVE } from '~/test/abilities'
import { LOADED_SERIES } from '~/test/series'

/**
 * The rules a Nen ability's users are filed by (#923): every series filed,
 * and the fixture that files abilities before any real series does
 * (`~/test/abilities`). A user opens at the later of its entry and the
 * character, so an entry before its ability would name it as used before
 * the reader may open its page.
 */
const ARCHIVES: { archive: SeriesArchive; slug: string }[] = [
  ...LOADED_SERIES.map(({ archive, slug }) => ({ archive, slug })),
  { archive: ABILITY_ARCHIVE, slug: 'abilities fixture' },
]

/** Every `ability` entry of an archive, with its character's id. */
function entriesOf(
  archive: SeriesArchive,
): {
  chapter: number | undefined
  episode: number
  label: string
  value: string[]
}[] {
  return archive.timelines.flatMap(({ field, owner, timeline }) =>
    field === 'ability' ?
      timeline.flatMap((entry) =>
        Array.isArray(entry.value) ?
          {
            chapter: entry.chapter,
            episode: entry.episode,
            label: `${owner.id} @${String(entry.episode)}`,
            value: entry.value.map(String),
          }
        : [],
      )
    : [],
  )
}

describe.each(ARCHIVES)('the abilities of $slug', ({ archive }) => {
  const { abilities, getAbility } = withFeatures(archive)
  const entries = entriesOf(archive)

  it('name only filed abilities, each entry pinned to its chapter', () => {
    for (const entry of entries) {
      expect(entry.chapter, entry.label).toBeDefined()

      for (const id of entry.value) {
        expect(getAbility(id), `${entry.label} ${id}`).toBeDefined()
      }
    }
  })

  it('never name an ability before it opens', () => {
    for (const entry of entries) {
      const named = entry.value.flatMap((id) => getAbility(id) ?? [])
      for (const ability of named) {
        expect(entry.episode, entry.label).toBeGreaterThanOrEqual(
          ability.revealedAtEpisode,
        )
        expect(entry.chapter, entry.label).toBeGreaterThanOrEqual(
          ability.revealedAtChapter,
        )
      }
    }
  })

  it('give every ability a user', () => {
    const used = new Set(entries.flatMap(({ value }) => value))

    expect(abilities.filter(({ id }) => !used.has(id))).toStrictEqual([])
  })
})

describe('the abilities fixture', () => {
  it('files the kind with its slice, as a series must', () => {
    expect(ABILITY_ARCHIVE.series.kinds).toContain('ability')
    expect(ABILITY_ARCHIVE.features.abilities?.abilities).toHaveLength(2)
    expect(
      ABILITY_ARCHIVE.timelines.filter(({ field }) => field === 'ability'),
    ).toHaveLength(2)
  })
})
