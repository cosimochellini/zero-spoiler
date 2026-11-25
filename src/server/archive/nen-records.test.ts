import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_ARCHIVE as ARCHIVE } from '~/data/series/hunter-x-hunter/archive'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { gateCases, type Pin, recordIn } from '~/test/gates'

import { abilityPage, abilitySheet } from './abilities.server'
import { factsOf } from './project.server'
import { readerFor } from './reader.server'

/**
 * The scene each filed ability is first shown in, pinned by hand (#1410):
 * checked against the owners' links in `nen-timelines.test.ts`, and on the
 * wiki where the ability shows before its owner is named.
 */
const ABILITIES: (Pin & { id: string })[] = [
  { id: 'battle-waltz', episode: 29, chapter: 49 },
  { id: 'tornado-top', episode: 30, chapter: 50 },
  { id: 'shotgun-blues', episode: 34, chapter: 58 },
  { id: 'tiger-bite-fist', episode: 31, chapter: 53 },
  { id: 'aura-burst', episode: 34, chapter: 59 },
  { id: 'nen-stitches', episode: 32, chapter: 55 },
  { id: 'eleven-black-children', episode: 39, chapter: 67 },
  { id: 'bungee-gum', episode: 32, chapter: 54 },
  { id: 'texture-surprise', episode: 32, chapter: 54 },
  { id: 'instant-lover', episode: 39, chapter: 68 },
  { id: 'great-hiker', episode: 40, chapter: 68 },
  { id: 'dowsing-chain', episode: 40, chapter: 68 },
  { id: 'lovely-ghostwriter', episode: 41, chapter: 71 },
  { id: 'double-machine-gun', episode: 43, chapter: 73 },
  { id: 'blinky', episode: 43, chapter: 73 },
  { id: 'big-bang-impact', episode: 44, chapter: 76 },
  { id: 'chain-jail', episode: 44, chapter: 77 },
  { id: 'fun-fun-cloth', episode: 45, chapter: 77 },
  { id: 'emperor-time', episode: 47, chapter: 83 },
  { id: 'holy-chain', episode: 47, chapter: 84 },
  { id: 'judgment-chain', episode: 47, chapter: 84 },
  { id: 'skill-hunter', episode: 51, chapter: 97 },
  { id: 'indoor-fish', episode: 51, chapter: 97 },
  { id: 'dragon-head', episode: 52, chapter: 99 },
  { id: 'dragon-lance', episode: 52, chapter: 99 },
  { id: 'black-voice', episode: 53, chapter: 98 },
  { id: 'gallery-fake', episode: 53, chapter: 100 },
  { id: 'memory-bomb', episode: 56, chapter: 112 },
]

const boundaries = gateCases(ABILITIES, ARCHIVE.series).map((row) => ({
  ...row,
  ability: recordIn(ARCHIVE, row.id),
}))

describe('the filed Hunter x Hunter Nen abilities', () => {
  it('pins every filed ability', () => {
    expect(
      ABILITIES.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      ARCHIVE.entities
        .filter(({ kind }) => kind === 'ability')
        .map(({ id }) => id)
        .toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(boundaries)(
    'opens $ability.id at its $unit gate ($locale)',
    ({ ability, before, locale, reached: after }) => {
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

  it.each([
    {
      id: 'pakunoda',
      before: { mode: 'episode', episode: 49 } as const,
      after: { mode: 'episode', episode: 50 } as const,
      expected: [undefined, 'unknown'],
    },
    {
      id: 'pakunoda',
      before: { mode: 'chapter', chapter: 91 } as const,
      after: { mode: 'chapter', chapter: 92 } as const,
      expected: [undefined, 'unknown'],
    },
    {
      id: 'shachmono-tocino',
      before: { mode: 'chapter', chapter: 72 } as const,
      after: { mode: 'chapter', chapter: 73 } as const,
      expected: ['unknown', 'emitter'],
    },
    {
      id: 'shachmono-tocino',
      before: { mode: 'episode', episode: 42 } as const,
      after: { mode: 'episode', episode: 43 } as const,
      expected: ['unknown', 'unknown'],
    },
  ])(
    'reveals $id’s Nen at the $after.mode pin',
    ({ id, before, after, expected }) => {
      const character = ARCHIVE.getEntity(id)
      const nen = [before, after].map((bookmark) => {
        const reader = readerFor(ARCHIVE, bookmark, 'en')
        return character === undefined ? undefined : (
            factsOf(character, reader).nen
          )
      })

      expect(character).toBeDefined()
      expect(nen).toStrictEqual(expected)
    },
  )

  it('leaves Holy Chain untyped at its first use', () => {
    const reader = readerFor(ARCHIVE, { mode: 'chapter', chapter: 84 }, 'en')
    const slot = abilityPage('holy-chain', reader)?.detail.slot

    expect(slot?.open).toBe(true)
    expect(slot).not.toHaveProperty('record.nen')
  })

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
