import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_ARCHIVE as ARCHIVE } from '~/data/series/hunter-x-hunter/archive'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'

import { abilityPage, abilitySheet } from './abilities.server'
import { readerFor } from './reader.server'

const abilities = ARCHIVE.entities.filter(({ kind }) => kind === 'ability')
const boundaries = abilities.flatMap((ability) =>
  LOCALES.flatMap((locale) => [
    {
      ability,
      locale,
      before: {
        mode: 'chapter' as const,
        chapter: ability.revealedAtChapter - 1,
      },
      after: { mode: 'chapter' as const, chapter: ability.revealedAtChapter },
    },
    {
      ability,
      locale,
      before: {
        mode: 'episode' as const,
        episode: ability.revealedAtEpisode - 1,
      },
      after: { mode: 'episode' as const, episode: ability.revealedAtEpisode },
    },
  ]),
)

describe('the filed Hunter x Hunter Nen abilities', () => {
  it.each(boundaries)(
    'opens $ability.id at its $after.mode gate ($locale)',
    ({ ability, after, before, locale }) => {
      const covered = readerFor(ARCHIVE, before, locale)
      const reached = readerFor(ARCHIVE, after, locale)
      const closedPage = abilityPage(ability.id, covered)
      const closed = closedPage?.detail.slot
      const opened = abilityPage(ability.id, reached)?.detail.slot

      const listed = abilitySheet(covered).bands.flatMap(({ open }) => open)

      expect(closed?.open).toBe(false)
      expect(closed).toHaveProperty('covered.kind', 'ability')
      expect(
        Object.keys(closed?.open === false ? closed.covered : {}),
      ).toHaveLength(4)
      expect(JSON.stringify(closedPage)).not.toContain(ability.name[locale])
      expect(listed.map(({ id }) => id)).not.toContain(ability.id)
      expect(opened?.open).toBe(true)
      expect(opened).toHaveProperty('record.name', ability.name[locale])
      expect(opened).toHaveProperty(
        'record.visual.strokes',
        ARCHIVE.drawings[ability.id],
      )
    },
  )

  it.each(LOCALES)(
    'gates Chrollo’s use of the cloth separately (%s)',
    (locale) => {
      const usersAt = (bookmark: Bookmark): string[] => {
        const reader = readerFor(ARCHIVE, bookmark, locale)
        const slot = abilityPage('fun-fun-cloth', reader)?.detail.slot

        return slot?.open === true ? slot.record.users.map(({ id }) => id) : []
      }

      expect(usersAt({ mode: 'episode', episode: 53 })).toStrictEqual(['owl'])
      expect(usersAt({ mode: 'episode', episode: 54 })).toStrictEqual([
        'owl',
        'chrollo',
      ])
      expect(usersAt({ mode: 'chapter', chapter: 98 })).toStrictEqual(['owl'])
      expect(usersAt({ mode: 'chapter', chapter: 99 })).toStrictEqual([
        'owl',
        'chrollo',
      ])
    },
  )
})
