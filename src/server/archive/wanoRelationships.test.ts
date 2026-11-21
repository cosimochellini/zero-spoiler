import { describe, expect, it } from 'vitest'

import { wano } from '~/data/series/one-piece/records/wano'
import { wanoRelationships } from '~/data/series/one-piece/records/wano.relationships'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  opRelationshipsPage as relationshipsPage,
  withoutDrawings,
} from '~/test/archive'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = wano.entries.filter(({ kind }) => kind === 'character')

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(relationshipsPage(id, bookmark, locale))
}

describe('Wano relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      Object.keys(wanoRelationships).toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      expect(wano.dossiers[owner.id]?.relationships?.length).toBeGreaterThan(0)
    },
  )
})

describe.each(LOCALES)('Wano verified revelations in %s', (locale) => {
  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  it('does not reveal the guardians behind the concealed identities early', () => {
    for (const [before, at] of [
      [ep(975), ep(976)],
      [ch(972), ch(973)],
    ] as const) {
      expect(pair('komurasaki', 'denjiro', before)).toBeUndefined()
      expect(pair('komurasaki', 'denjiro', at)).toBeDefined()
      expect(pair('kyoshiro', 'kozuki-oden', before)).toBeUndefined()
      expect(pair('kyoshiro', 'kozuki-oden', at)).toBeDefined()
      expect(pair('kyoshiro', 'kozuki-oden', before)).toBeUndefined()
    }
    for (const [before, at] of [
      [ep(1079), ep(1080)],
      [ch(1052), ch(1053)],
    ] as const) {
      expect(pair('tenguyama-hitetsu', 'kozuki-oden', before)).toBeUndefined()
      expect(pair('kozuki-sukiyaki', 'tama', before)).toBeUndefined()
      expect(pair('tenguyama-hitetsu', 'kozuki-oden', at)).toBeDefined()
      expect(pair('kozuki-sukiyaki', 'tama', at)).toBeDefined()
      expect(pair('tenguyama-hitetsu', 'kozuki-oden', before)).toBeUndefined()
    }
  })

  it('respects the later filed endpoints for Kawamatsu and Izo', () => {
    expect(pair('kozuki-hiyori', 'kawamatsu', ch(945))).toBeUndefined()
    expect(pair('kozuki-hiyori', 'kawamatsu', ch(946))).toBeDefined()
    expect(pair('kiku', 'izo', ch(970))).toBeUndefined()
    expect(pair('kiku', 'izo', ch(971))?.type).toBe(
      locale === 'en' ? 'Older brother' : 'Fratello maggiore',
    )
    expect(pair('kiku', 'izo', ep(969))).toBeUndefined()
    expect(pair('kiku', 'izo', ep(970))).toBeDefined()
  })

  it('reveals the Hiyori link only after her adult identity and the target gates', () => {
    expect(pair('komurasaki', 'momonosuke', ep(935))).toBeUndefined()
    expect(pair('komurasaki', 'momonosuke', ep(936))).toBeDefined()
    expect(pair('komurasaki', 'momonosuke', ch(945))).toBeUndefined()
    expect(pair('komurasaki', 'momonosuke', ch(946))).toBeDefined()
    expect(pair('toko', 'shimotsuki-yasuie', ch(942))).toBeUndefined()
    expect(pair('toko', 'shimotsuki-yasuie', ch(943))).toBeDefined()
  })

  it('updates the Kaido alliance and the final Orochi confrontation at reached events', () => {
    const ally = locale === 'en' ? 'Ally' : 'Alleato'
    const betrayed =
      locale === 'en' ? 'Ally who betrays him' : 'Alleato che lo tradisce'
    for (const [before, at] of [
      [ep(993), ep(994)],
      [ch(984), ch(985)],
    ] as const) {
      expect(pair('kurozumi-orochi', 'kaido', before)?.type).toBe(ally)
      expect(pair('kurozumi-orochi', 'kaido', at)?.type).toBe(betrayed)
      expect(pair('kurozumi-orochi', 'kaido', at)?.history).toHaveLength(2)
      expect(pair('kurozumi-orochi', 'kaido', before)?.type).toBe(ally)
    }
  })

  it('reveals Denjiro’s final confrontation with Orochi at the reached event', () => {
    for (const [before, at] of [
      [ep(1074), ep(1075)],
      [ch(1047), ch(1048)],
    ] as const) {
      expect(pair('kurozumi-orochi', 'denjiro', before)).toBeUndefined()
      expect(pair('kurozumi-orochi', 'denjiro', at)?.type).toBe(
        locale === 'en' ? 'Killer' : 'Uccisore',
      )
    }
  })

  it('keeps taming distinct from Tama asking Speed to stay as a mother', () => {
    for (const [before, at] of [
      [ep(1077), ep(1078)],
      [ch(1050), ch(1051)],
    ] as const) {
      expect(pair('tama', 'speed', before)?.type).toBe(
        locale === 'en' ? 'Protector she tames' : 'Protettrice che addomestica',
      )
      expect(pair('tama', 'speed', at)?.type).toBe(
        locale === 'en' ?
          'Woman she wants as her mother'
        : 'Donna che vorrebbe come madre',
      )
      expect(pair('tama', 'speed', at)?.history).toHaveLength(2)
    }
  })

  it('separates King’s rescue flashback and his defeat from his earlier allegiance', () => {
    for (const [before, at] of [
      [ep(1061), ep(1062)],
      [ch(1034), ch(1035)],
    ] as const) {
      expect(pair('king', 'kaido', before)?.type).toBe(
        locale === 'en' ? 'Captain' : 'Capitano',
      )
      expect(pair('king', 'kaido', at)?.type).toBe(
        locale === 'en' ?
          'Captain who freed him'
        : 'Capitano che lo ha liberato',
      )
      expect(pair('king', 'roronoa-zoro', at)?.type).toBe(
        locale === 'en' ?
          'Opponent who defeats him'
        : 'Avversario che lo sconfigge',
      )
    }
  })

  it('keeps the unadapted cover-story changes out of anime', () => {
    const attacked = locale === 'en' ? 'Attacker' : 'Aggressore'
    const follows =
      locale === 'en' ?
        'Rescuer she pledges to follow'
      : 'Salvatore che promette di seguire'

    expect(pair('ulti', 'yamato', ch(1145))?.type).toBe(attacked)
    expect(pair('ulti', 'yamato', ch(1146))?.type).toBe(follows)
    expect(pair('ulti', 'yamato', ep(1300))?.type).toBe(attacked)
    expect(pair('tsurujo', 'yamato', ch(1115))).toBeUndefined()
    expect(pair('tsurujo', 'yamato', ch(1116))).toBeDefined()
    expect(pair('tsurujo', 'yamato', ep(1300))).toBeUndefined()
    expect(pair('kawamatsu', 'yamato', ch(1151))).toBeUndefined()
    expect(pair('kawamatsu', 'yamato', ch(1152))).toBeDefined()
    expect(pair('kawamatsu', 'yamato', ep(1300))).toBeUndefined()
  })

  it('does not confuse Hatcha with the other Numbers defeated by Franky', () => {
    for (const [before, at] of [
      [ep(1008), ep(1009)],
      [ch(995), ch(996)],
    ] as const) {
      expect(pair('hatcha', 'yamato', before)).toBeUndefined()
      expect(pair('hatcha', 'yamato', at)?.type).toBe(
        locale === 'en' ?
          'Opponent who defeats him'
        : 'Avversario che lo sconfigge',
      )
      expect(pair('hatcha', 'franky', at)?.type).toBe(
        locale === 'en' ? 'Opponent he pursues' : 'Avversario che insegue',
      )
    }
  })

  it('keeps Fukurokuju’s loss behind the end of the endurance contest', () => {
    const rival = locale === 'en' ? 'Ninja rival' : 'Ninja rivale'
    const defeated =
      locale === 'en' ?
        'Opponent who outlasts him'
      : 'Avversario che resiste più a lungo'
    for (const [before, at] of [
      [ep(1068), ep(1069)],
      [ch(1040), ch(1041)],
    ] as const) {
      expect(pair('fukurokuju', 'raizo', before)?.type).toBe(rival)
      expect(pair('fukurokuju', 'raizo', at)?.type).toBe(defeated)
    }
  })

  it('keeps Rocks’s later family and God Valley revelations behind manga gates', () => {
    expect(pair('rocks-d-xebec', 'marshall-d-teach', ch(1153))).toBeUndefined()
    expect(pair('rocks-d-xebec', 'marshall-d-teach', ch(1154))?.type).toBe(
      locale === 'en' ? 'Son' : 'Figlio',
    )
    expect(pair('rocks-d-xebec', 'im', ch(1163))).toBeUndefined()
    expect(pair('rocks-d-xebec', 'im', ch(1164))).toBeDefined()
    expect(pair('rocks-d-xebec', 'figarland-garling', ch(1165))).toBeUndefined()
    expect(pair('rocks-d-xebec', 'figarland-garling', ch(1166))).toBeDefined()

    for (const target of ['marshall-d-teach', 'im', 'figarland-garling']) {
      expect(pair('rocks-d-xebec', target, ep(1300))).toBeUndefined()
    }

    expect(pair('rocks-d-xebec', 'marshall-d-teach', ch(1153))).toBeUndefined()
  })
})
