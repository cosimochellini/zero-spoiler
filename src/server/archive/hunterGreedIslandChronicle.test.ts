import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { HUNTER_X_HUNTER_ARCHIVE as archive } from '~/data/series/hunter-x-hunter/archive'
import { greedIslandReturningChronicles } from '~/data/series/hunter-x-hunter/records/greed-island-returning.chronicle'
import type { Entity, Story } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'

import { chronicleOf, chronicleRestOf } from './chronicle.server'
import { homePage } from './home.server'
import { readerFor } from './reader.server'

const CAST = [
  'battera',
  'tsezguerra',
  'jeitsari',
  'puhat',
  'jitonoda',
  'kosofftro',
  'biscuit-krueger',
  'binolt',
  'genthru',
  'jispa',
  'razor',
  'dwun',
  'list',
  'eta',
  'elena',
] as const

function characterFor(id: string): Entity {
  const character = archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`Missing Greed Island character: ${id}`)
  }
  return character
}

interface Boundary {
  character: Entity
  date: number
  mode: 'chapter' | 'episode'
  story: Story
}

const BOUNDARIES = archive.stories
  .filter(({ episode }) => episode >= 59 && episode <= 75)
  .flatMap(({ character, gate, story }): Boundary[] =>
    (['episode', 'chapter'] as const)
      .filter((mode) => toldIn(gate, mode))
      .map((mode) => ({
        character,
        date:
          mode === 'episode' ? gate.revealedAtEpisode : gate.revealedAtChapter,
        mode,
        story,
      })),
  )

function titlesAt(row: Boundary, count: number, locale: Locale): string[] {
  const bookmark =
    row.mode === 'episode' ?
      { mode: row.mode, episode: count }
    : { mode: row.mode, chapter: count }
  const reader = readerFor(archive, bookmark, locale)
  return [
    ...chronicleOf(row.character, reader).entries,
    ...chronicleRestOf(row.character.id, reader),
  ].map((entry) => entry.title)
}

describe('the Greed Island chronicles (#906)', () => {
  it.each(Object.entries(greedIslandReturningChronicles))(
    'attaches the arc’s returning stories to %s',
    (id, stories) => {
      expect(archive.dossierOf(characterFor(id))?.chronicle).toStrictEqual(
        expect.arrayContaining(stories),
      )
    },
  )

  it.each(CAST)('gives %s an opening story at its own gate', (id) => {
    const character = characterFor(id)
    const [opening] = archive.dossierOf(character)?.chronicle ?? []

    expect(opening?.episode).toBe(character.revealedAtEpisode)
    expect(opening?.chapter).toBe(character.revealedAtChapter)
  })
})

describe.each(LOCALES)('the Greed Island stories in %s', (locale) => {
  it.each([
    { episode: 59, chapter: 120, id: 'battera' },
    { episode: 62, chapter: 137, id: 'biscuit-krueger' },
    { episode: 67, chapter: 145, id: 'razor' },
    { episode: 75, chapter: 184, id: 'dwun' },
  ])('shows reached stories on the home feed ($id)', (row) => {
    for (const mode of ['episode', 'chapter'] as const) {
      const bookmark =
        mode === 'episode' ?
          { mode, episode: row.episode }
        : { mode, chapter: row.chapter }
      const home = homePage(readerFor(archive, bookmark, locale))

      expect(home.saga.id).toBe('greed-island-arc')
      expect(home.before).toBe(false)
      expect(home.stories.some((story) => story.subject.id === row.id)).toBe(
        true,
      )
      expect(
        home.stories.every((story) =>
          mode === 'episode' ?
            story.revealedAtEpisode <= row.episode
          : story.revealedAtChapter <= row.chapter,
        ),
      ).toBe(true)
    }
  })

  it('keeps manga-only subjects out of the anime feed and chronicles', () => {
    const reader = readerFor(archive, { mode: 'episode', episode: 75 }, locale)
    const home = homePage(reader)

    for (const id of CAST) {
      const character = archive.getCharacter(id)
      if (character?.source !== 'chapter') {
        continue
      }

      expect(home.stories.some((story) => story.subject.id === id)).toBe(false)
      expect(chronicleOf(character, reader).entries).toStrictEqual([])
      expect(chronicleRestOf(id, reader)).toStrictEqual([])
    }
  })

  it.each(BOUNDARIES)('opens $character.id at $mode $date', (row) => {
    const title = row.story.title[locale]

    expect(titlesAt(row, row.date - 1, locale)).not.toContain(title)
    expect(titlesAt(row, row.date, locale)).toContain(title)
  })
})
