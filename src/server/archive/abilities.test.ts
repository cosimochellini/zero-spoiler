import { describe, expect, it } from 'vitest'

import { sourceOf } from '~/data/reveal'
import { archiveIn } from '~/data/source'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import {
  ABILITY_LOADED,
  ABILITY_ARCHIVE as ARCHIVE,
  BOOKMARKS,
  TYPED,
  UNTYPED,
} from '~/test/abilities'
import { leaksOf } from '~/test/fog'

import { abilityPage, abilitySheet } from './abilities.server'
import { entityForHandle, handleOf } from './handle.server'
import { characterPage } from './pages.server'
import { type Payload, payloadsFor } from './payloads.server'
import { peekAbility } from './peek.server'
import { type Reader, readerFor } from './reader.server'

/**
 * The Nen abilities (#923), proven on the fixture (`~/test/abilities`): Hunter
 * x Hunter with two synthetic abilities filed.
 */

type Unit = 'chapter' | 'episode'

const byText = (a: string, b: string): number => a.localeCompare(b)

const UNITS: Unit[] = ['episode', 'chapter']

/** A bookmark of this unit at this count. */
function at(unit: Unit, count: number): NonNullable<Bookmark> {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

/** A reader of the fixture at this unit and count. */
function reader(unit: Unit, count: number, locale: Locale = 'en'): Reader {
  return readerFor(ARCHIVE, at(unit, count), locale)
}

/** A record's threshold in a unit. */
function gateIn(entity: Entity, unit: Unit): number {
  return unit === 'chapter' ?
      entity.revealedAtChapter
    : entity.revealedAtEpisode
}

/** The ids of the open abilities on the page, in plate order. */
function openIdsOf(sheet: ReturnType<typeof abilitySheet>): string[] {
  return sheet.bands.flatMap((band) => band.open).map(({ id }) => id)
}

/** The ids of the open abilities on the page, plate by plate. */
function plates(r: Reader): [null | string, string[]][] {
  return abilitySheet(r).bands.map((band) => [
    band.nen,
    band.open.map(({ id }) => id),
  ])
}

/** The users an open ability's page names, by id. */
function usersOf(id: string, r: Reader): string[] {
  const slot = abilityPage(id, r)?.detail.slot
  return slot?.open === true ? slot.record.users.map((user) => user.id) : []
}

const CASES = UNITS.flatMap((unit) =>
  LOCALES.flatMap((locale) =>
    [TYPED, UNTYPED].map((ability) => ({
      ability,
      gate: gateIn(ability, unit),
      id: ability.id,
      locale,
      unit,
    })),
  ),
)

describe('a Nen ability', () => {
  it.each(CASES)(
    '$id is covered before its $unit gate and open at it ($locale)',
    ({ ability, gate, locale, unit }) => {
      const before = abilitySheet(reader(unit, gate - 1, locale))
      const after = abilitySheet(reader(unit, gate, locale))
      const handle = handleOf(ability.id, archiveIn(ARCHIVE, unit))

      expect(openIdsOf(before)).not.toContain(ability.id)
      expect(before.covered.map((entry) => entry.handle)).toContain(handle)
      expect(openIdsOf(after)).toContain(ability.id)
      expect(after.filed).toBe(2)
    },
  )

  it('covers a record with its handle, kind and thresholds alone', () => {
    const [covered] = abilitySheet(reader('episode', 43)).covered

    expect(Object.keys(covered ?? {}).toSorted(byText)).toStrictEqual([
      'handle',
      'kind',
      'revealedAtChapter',
      'revealedAtEpisode',
    ])
    expect(covered?.kind).toBe('ability')
  })

  it.each(UNITS)(
    'sits on its Nen type plate, or on the plate with no type (%s)',
    (unit) => {
      const both = reader(unit, gateIn(UNTYPED, unit))
      const one = reader(unit, gateIn(TYPED, unit))

      expect(plates(both)).toStrictEqual([
        ['enhancer', [TYPED.id]],
        [null, [UNTYPED.id]],
      ])
      expect(plates(one)).toStrictEqual([['enhancer', [TYPED.id]]])
    },
  )

  it('says its type only once it is typed', () => {
    const r = reader('episode', 45)
    const typed = abilityPage(TYPED.id, r)?.detail.slot
    const untyped = abilityPage(UNTYPED.id, r)?.detail.slot

    expect(typed?.open === true && typed.record.nen).toBe('enhancer')
    expect(untyped?.open === true && 'nen' in untyped.record).toBe(false)
  })

  it.each([
    { unit: 'episode' as const, before: 79, after: 80 },
    { unit: 'chapter' as const, before: 189, after: 190 },
  ])(
    'names each user from their own entry, and drops a covered one ($unit)',
    ({ after, before, unit }) => {
      expect(usersOf(TYPED.id, reader(unit, before))).toStrictEqual([
        'gon-freecss',
      ])
      expect(usersOf(TYPED.id, reader(unit, after))).toStrictEqual([
        'gon-freecss',
        'killua',
      ])

      const tile = abilitySheet(reader(unit, before)).bands[0]?.open[0]

      expect(tile?.users.map(({ id }) => id)).toStrictEqual(['gon-freecss'])
      expect(tile?.aliases).not.toContain('killua')
    },
  )

  it('finds an ability by the name of a user the reader has reached', () => {
    const tile = abilitySheet(reader('episode', 80)).bands[0]?.open[0]

    expect(tile?.aliases).toContain('gon freecss')
    expect(tile?.aliases.some((alias) => alias.startsWith('killua'))).toBe(true)
  })

  it('keeps its page generic under fog, and its own once open', () => {
    const covered = abilityPage(TYPED.id, reader('episode', 43))
    const open = abilityPage(TYPED.id, reader('episode', 44))

    expect(covered?.head.title).toBe(
      'An ability under fog | Hunter x Hunter | Zero Spoiler',
    )
    expect(JSON.stringify(covered)).not.toContain('Typed Power')
    expect(covered?.head.image).toBeUndefined()
    expect(open?.head.title).toBe(
      'Typed Power | Hunter x Hunter | Zero Spoiler',
    )
  })

  it('has no page under an id that is not an ability', () => {
    expect(abilityPage('gon-freecss', reader('episode', 80))).toBeUndefined()
  })

  it('lifts by its handle, and no other record lifts as one', () => {
    const r = reader('episode', 1)
    const own = handleOf(TYPED.id, r.archive)
    const gon = handleOf('gon-freecss', r.archive)

    expect(peekAbility(own, r)?.name).toBe('Typed Power')
    expect(peekAbility(own, r)?.users).toStrictEqual([])
    expect(peekAbility(gon, r)).toBeUndefined()
    expect(entityForHandle(own, r.archive)?.id).toBe(TYPED.id)
  })

  it.each(UNITS)(
    'links a character to the abilities they use once reached (%s)',
    (unit) => {
      const facts = (count: number): unknown =>
        characterPage('gon-freecss', reader(unit, count))?.detail.facts
          .abilities

      expect(facts(gateIn(TYPED, unit) - 1)).toBeUndefined()
      expect(facts(gateIn(TYPED, unit))).toStrictEqual([
        { id: TYPED.id, name: 'Typed Power' },
      ])
      expect(facts(gateIn(UNTYPED, unit))).toStrictEqual([
        { id: TYPED.id, name: 'Typed Power' },
        { id: UNTYPED.id, name: 'Untold Power' },
      ])
    },
  )
})

/** The users of the fixture's abilities, and the abilities themselves. */
const ASKED = new Set(['gon-freecss', 'killua', TYPED.id, UNTYPED.id])

/** The ability pages, and the pages of the characters who use them. */
const NAMES = new Set([
  'liftAbility',
  'loadAbilities',
  'loadAbility',
  'loadCharacter',
])

/** The record a payload's key stands for, at a bookmark: by id or handle. */
function idOf(name: string, key: string, bookmark: Bookmark): string {
  return name === 'liftAbility' ?
      (entityForHandle(key, archiveIn(ARCHIVE, sourceOf(bookmark)))?.id ?? '')
    : key
}

/** The keys asked for: the abilities and their users, by id or handle. */
function keysOf(p: Payload, bookmark: Bookmark): string[] {
  const all = p.keys?.()
  if (all === undefined) {
    return ['']
  }

  return all.filter((key) => ASKED.has(idOf(p.name, key, bookmark)))
}

/** What a payload names past the bookmark at every ask of the fixture. */
function leaksAcross(p: Payload): string[] {
  const leaksIn = leaksOf(ABILITY_LOADED)
  const asks = BOOKMARKS.flatMap((bookmark) =>
    LOCALES.flatMap((locale) =>
      keysOf(p, bookmark).map((key) => ({ bookmark, key, locale })),
    ),
  )

  return asks.flatMap(({ bookmark, key, locale }) => {
    // A peek is the reader lifting the fog on one record.
    const lifted = (entity: Entity): boolean =>
      p.name === 'liftAbility' && idOf(p.name, key, bookmark) === entity.id

    return leaksIn(p.run(bookmark, locale, key), bookmark, lifted).map(
      (id) => `${id} via '${key}' @ ${JSON.stringify(bookmark)}`,
    )
  })
}

describe('every ability payload of the fixture', () => {
  const payloads = payloadsFor(ARCHIVE).filter(({ name }) => NAMES.has(name))

  it('asks every ability page and its users', () => {
    expect(payloads.map(({ name }) => name).toSorted(byText)).toStrictEqual(
      [...NAMES].toSorted(byText),
    )
  })

  it.each(payloads)('$name names nothing the reader has not reached', (p) => {
    expect(leaksAcross(p)).toStrictEqual([])
  })
})
