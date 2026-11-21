import { describe, expect, it } from 'vitest'

import { elbaf } from '~/data/series/one-piece/records/elbaf'
import { elbafRelationships } from '~/data/series/one-piece/records/elbaf.relationships'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  opRelationshipsPage as relationshipsPage,
  withoutDrawings,
} from '~/test/archive'

// eslint-disable-next-line no-restricted-imports -- The cohort omissions live beside the factual evidence.
import coverage from '../../../docs/content-provenance/elbaf-relationships.json' with { type: 'json' }

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = elbaf.entries.filter(({ kind }) => kind === 'character')

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(relationshipsPage(id, bookmark, locale))
}

describe('Elbaf relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(elbafRelationships),
        ...Object.keys(coverage.omitted),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners.filter(({ id }) => !Object.hasOwn(coverage.omitted, id)))(
    'authors at least one supported selection for $id',
    (owner) => {
      expect(elbaf.dossiers[owner.id]?.relationships?.length).toBeGreaterThan(0)
    },
  )

  it.each(Object.keys(coverage.omitted))('omits relationships for %s', (id) => {
    expect(elbaf.dossiers[id]?.relationships).toBeUndefined()
    expect(projected(id, ch(coverage.through.chapter), 'en')).toStrictEqual([])
  })
})

describe.each(LOCALES)('Elbaf verified revelations in %s', (locale) => {
  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  it('delays Harald and Gaban identities behind their filed endpoints', () => {
    for (const [before, at] of [
      [ep(1166), ep(1167)],
      [ch(1136), ch(1137)],
    ] as const) {
      expect(pair('loki', 'harald', before)).toBeUndefined()
      expect(pair('loki', 'harald', at)).toBeDefined()
    }
    for (const [before, at] of [
      [ep(1168), ep(1169)],
      [ch(1138), ch(1139)],
    ] as const) {
      expect(pair('colon', 'scopper-gaban', before)).toBeUndefined()
      expect(pair('ripley', 'scopper-gaban', before)).toBeUndefined()
      expect(pair('colon', 'scopper-gaban', at)?.type).toBe(
        locale === 'en' ? 'Father' : 'Padre',
      )
      expect(pair('ripley', 'scopper-gaban', at)?.type).toBe(
        locale === 'en' ? 'Partner' : 'Compagno',
      )
    }
  })

  it('reveals the twin relationship and sword at the reached event', () => {
    for (const [before, at] of [
      [ep(1167), ep(1168)],
      [ch(1137), ch(1138)],
    ] as const) {
      expect(pair('figarland-shamrock', 'shanks', before)).toBeUndefined()
      expect(pair('figarland-shamrock', 'cerberus', before)).toBeUndefined()
      expect(pair('figarland-shamrock', 'shanks', at)?.type).toBe(
        locale === 'en' ? 'Younger twin brother' : 'Fratello gemello minore',
      )
      expect(pair('cerberus', 'figarland-shamrock', at)?.type).toBe(
        locale === 'en' ? 'Wielder' : 'Portatore',
      )
    }
  })

  it('separates the anime-only early mission from the delayed manga endpoints', () => {
    for (const id of ['shepherd-sommers', 'rimoshifu-killingham']) {
      expect(projected(id, ep(1169), locale)).toStrictEqual([])
      expect(
        projected(id, ep(1170), locale).map(({ person }) => person.id),
      ).toStrictEqual(['figarland-shamrock', 'manmayer-gunko'])
      expect(projected(id, ch(1142), locale)).toStrictEqual([])
      expect(projected(id, ch(1143), locale)).toHaveLength(3)
    }
  })

  it('keeps Shanks’ role in Loki’s capture behind the later account', () => {
    for (const [before, at] of [
      [ep(1165), ep(1166)],
      [ch(1135), ch(1136)],
    ] as const) {
      expect(pair('loki', 'shanks', before)?.type).toBe(
        locale === 'en' ? 'Pirate he insults' : 'Pirata che insulta',
      )
      expect(pair('loki', 'shanks', at)?.type).toBe(
        locale === 'en' ? 'Captor he resents' : 'Carceriere che detesta',
      )
      expect(pair('loki', 'shanks', at)?.history).toHaveLength(2)
      expect(pair('loki', 'shanks', before)?.history).toHaveLength(1)
    }
  })

  it('replaces Lola only when Loki recalls Rocks, without claiming the bond ended', () => {
    for (const [before, at] of [
      [ep(1174), ep(1175)],
      [ch(1144), ch(1145)],
    ] as const) {
      expect(pair('loki', 'lola', before)).toBeDefined()
      expect(pair('loki', 'rocks-d-xebec', before)).toBeUndefined()
      expect(pair('loki', 'lola', at)).toBeUndefined()
      expect(pair('loki', 'rocks-d-xebec', at)).toBeDefined()
      expect(pair('loki', 'lola', before)).toBeDefined()
    }
  })

  it('updates Gunko’s Brook connection and possession independently', () => {
    const fan =
      locale === 'en' ? 'Musician she admires' : 'Musicista che ammira'
    const attacker =
      locale === 'en' ?
        'Musician she tries to enslave'
      : 'Musicista che vuole rendere schiavo'
    for (const [fanAt, attackAt, before, at] of [
      [ep(1174), ep(1177), ep(1178), ep(1179)],
      [ch(1144), ch(1147), ch(1148), ch(1149)],
    ] as const) {
      expect(pair('manmayer-gunko', 'brook', fanAt)?.type).toBe(fan)
      expect(pair('manmayer-gunko', 'brook', attackAt)?.type).toBe(attacker)
      expect(pair('manmayer-gunko', 'im', before)).toBeUndefined()
      expect(pair('manmayer-gunko', 'im', at)).toBeDefined()
      expect(pair('manmayer-gunko', 'brook', at)?.history).toHaveLength(3)
      expect(pair('manmayer-gunko', 'im', before)).toBeUndefined()
    }
  })

  it('keeps unadapted Harald history and Shakky’s assault out of anime', () => {
    expect(pair('harald', 'rocks-d-xebec', ch(1154))).toBeUndefined()
    expect(pair('harald', 'rocks-d-xebec', ch(1155))?.type).toBe(
      locale === 'en' ?
        'Pirate he refuses to join'
      : 'Pirata a cui rifiuta di unirsi',
    )
    expect(pair('harald', 'rocks-d-xebec', ch(1166))?.type).toBe(
      locale === 'en' ?
        'Friend he regrets abandoning'
      : 'Amico che rimpiange di aver abbandonato',
    )
    expect(pair('harald', 'jaguar-d-saul', ch(1166))).toBeUndefined()
    expect(pair('harald', 'jaguar-d-saul', ch(1167))).toBeDefined()
    expect(pair('shepherd-sommers', 'shakky', ch(1158))).toBeUndefined()
    expect(pair('shepherd-sommers', 'shakky', ch(1161))?.type).toBe(
      locale === 'en' ? 'Woman he attacks' : 'Donna che aggredisce',
    )

    for (const bookmark of [ep(1180), ep(1300)]) {
      expect(pair('harald', 'rocks-d-xebec', bookmark)).toBeUndefined()
      expect(pair('harald', 'jaguar-d-saul', bookmark)).toBeUndefined()
      expect(pair('shepherd-sommers', 'shakky', bookmark)).toBeUndefined()
    }
  })

  it('keeps Ragnir’s later living identity outside the authored cutoff', () => {
    expect(projected('ragnir', ch(1140), locale)).toStrictEqual([])
    expect(
      projected('ragnir', ch(1141), locale).map(({ person }) => person.id),
    ).toStrictEqual(['loki'])
    expect(projected('ragnir', ch(1300), locale)).toStrictEqual(
      projected('ragnir', ch(1141), locale),
    )
  })
})
