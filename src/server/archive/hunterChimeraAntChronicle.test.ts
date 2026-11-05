import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import { HUNTER_X_HUNTER_ARCHIVE as archive } from '~/data/series/hunter-x-hunter/archive'
import { chimeraAnt } from '~/data/series/hunter-x-hunter/records/chimera-ant'
import { chimeraAntPhase1Chronicles } from '~/data/series/hunter-x-hunter/records/chimera-ant-phase-1.chronicle'
import { chimeraAntPhase2Chronicles } from '~/data/series/hunter-x-hunter/records/chimera-ant-phase-2.chronicle'
import { chimeraAntPhase3Chronicles } from '~/data/series/hunter-x-hunter/records/chimera-ant-phase-3.chronicle'
import { chimeraAntPhase4Chronicles } from '~/data/series/hunter-x-hunter/records/chimera-ant-phase-4.chronicle'
import type { Entity, Story, Timeline } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'

import { chronicleOf, chronicleRestOf } from './chronicle.server'
import { homePage } from './home.server'
import { type Reader, readerFor } from './reader.server'

const PHASES: Record<string, Timeline<Story>>[] = [
  chimeraAntPhase1Chronicles,
  chimeraAntPhase2Chronicles,
  chimeraAntPhase3Chronicles,
  chimeraAntPhase4Chronicles,
]
const AUTHORED = PHASES.flatMap((phase) => Object.entries(phase))
const STORIES = new Set(
  AUTHORED.flatMap(([, stories]) => stories.map((row) => row.value)),
)
const CAST = chimeraAnt.entries.filter(
  (entry) => entry.kind === 'character' && entry.revealedAtChapter <= 298,
)

const GYRO_REBIRTH = chimeraAntPhase2Chronicles.gyro.find(
  (story) => story.source === 'chapter',
)
if (GYRO_REBIRTH === undefined) {
  throw new Error('Missing manga-only Gyro rebirth')
}

const KOMUGI_WAGER = chimeraAntPhase3Chronicles.komugi.find(
  (story) => story.episode === 105,
)
if (KOMUGI_WAGER === undefined) {
  throw new Error('Missing Komugi wager recap')
}

function characterFor(id: string): Entity {
  const character = archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`Missing Chimera Ant character: ${id}`)
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
  .filter(({ story }) => STORIES.has(story))
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

function readerAt(
  mode: Boundary['mode'],
  date: number,
  locale: Locale,
): Reader {
  return readerFor(
    archive,
    mode === 'episode' ? { mode, episode: date } : { mode, chapter: date },
    locale,
  )
}

function titlesAt(row: Boundary, date: number, locale: Locale): string[] {
  const reader = readerAt(row.mode, date, locale)
  return [
    ...chronicleOf(row.character, reader).entries,
    ...chronicleRestOf(row.character.id, reader),
  ].map((entry) => entry.title)
}

describe('the Chimera Ant chronicles (#910)', () => {
  it.each(AUTHORED)('uses the Italian dub names in %s', (id, stories) => {
    for (const { value } of stories) {
      expect(value.title.it, id).not.toMatch(
        /\b(?:Morel|Knov|Youpi|Yupi|Ikalgo|Welfin|Kalluto|Flutter)\b/u,
      )
      expect(value.body.it, id).not.toMatch(
        /\b(?:Morel|Knov|Youpi|Yupi|Ikalgo|Welfin|Kalluto|Flutter)\b/u,
      )
    }
  })

  it.each(AUTHORED)('attaches every authored story to %s', (id, stories) => {
    expect(archive.dossierOf(characterFor(id))?.chronicle).toStrictEqual(
      expect.arrayContaining(stories),
    )
  })

  it.each(CAST)(
    'gives $id an opening story at its naming gate',
    (character) => {
      const [opening] = archive.dossierOf(character)?.chronicle ?? []

      expect(opening?.episode).toBe(character.revealedAtEpisode)
      expect(opening?.chapter).toBe(character.revealedAtChapter)
    },
  )
})

describe.each(LOCALES)('the Chimera Ant stories in %s', (locale) => {
  it('retells Komugi’s wager once the manga names her', () => {
    const row: Boundary = {
      character: characterFor('komugi'),
      date: 257,
      mode: 'chapter',
      story: KOMUGI_WAGER.value,
    }

    expect(titlesAt(row, 256, locale)).not.toContain(
      KOMUGI_WAGER.value.title[locale],
    )
    expect(titlesAt(row, 257, locale)).toContain(
      KOMUGI_WAGER.value.title[locale],
    )
  })

  it('keeps Gyro’s rebirth in the manga', () => {
    const rebirth = GYRO_REBIRTH
    const row: Boundary = {
      character: characterFor('gyro'),
      date: 203,
      mode: 'chapter',
      story: rebirth.value,
    }

    expect(titlesAt(row, 203, locale)).toContain(rebirth.value.title[locale])
    expect(titlesAt({ ...row, mode: 'episode' }, 136, locale)).not.toContain(
      rebirth.value.title[locale],
    )
  })

  it.each(BOUNDARIES)('opens $character.id at $mode $date', (row) => {
    const title = row.story.title[locale]

    expect(titlesAt(row, row.date - 1, locale)).not.toContain(title)
    expect(titlesAt(row, row.date, locale)).toContain(title)
  })

  it.each(BOUNDARIES)(
    'includes $character.id in the reached home feed at $mode $date',
    (row) => {
      const home = homePage(readerAt(row.mode, row.date, locale))

      expect(home.saga.id).toBe('chimera-ant-arc')
      expect(home.before).toBe(false)
      expect(
        home.stories.some(
          (entry) =>
            entry.subject.id === row.character.id
            && entry.title === row.story.title[locale],
        ),
      ).toBe(true)

      const before = homePage(readerAt(row.mode, row.date - 1, locale))

      expect(
        before.stories.some(
          (entry) =>
            entry.subject.id === row.character.id
            && entry.title === row.story.title[locale],
        ),
      ).toBe(false)
    },
  )

  it('keeps source-only characters out of the other medium', () => {
    for (const character of CAST) {
      if (character.source === undefined) {
        continue
      }
      const mode = character.source === 'chapter' ? 'episode' : 'chapter'
      const reader = readerAt(mode, mode === 'episode' ? 136 : 318, locale)

      expect(
        chronicleOf(character, reader).entries,
        character.id,
      ).toStrictEqual([])
      expect(chronicleRestOf(character.id, reader), character.id).toStrictEqual(
        [],
      )
      expect(
        homePage(reader).stories.some(
          (entry) => entry.subject.id === character.id,
        ),
        character.id,
      ).toBe(false)
    }
  })
})
