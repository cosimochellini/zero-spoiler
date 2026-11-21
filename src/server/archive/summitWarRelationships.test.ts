import { describe, expect, it } from 'vitest'

import { summitWar } from '~/data/series/one-piece/records/summit-war'
import {
  summitWarRelationshipOmissions,
  summitWarRelationships,
} from '~/data/series/one-piece/records/summit-war.relationships'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  opRelationshipsPage as relationshipsPage,
  withoutDrawings,
} from '~/test/archive'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = summitWar.entries.filter(({ kind }) => kind === 'character')

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(relationshipsPage(id, bookmark, locale))
}

describe('Summit War relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(summitWarRelationships),
        ...Object.keys(summitWarRelationshipOmissions),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(
    owners.filter(
      ({ id }) => !Object.hasOwn(summitWarRelationshipOmissions, id),
    ),
  )('authors at least one supported selection for $id', (owner) => {
    expect(summitWar.dossiers[owner.id]?.relationships?.length).toBeGreaterThan(
      0,
    )
  })

  it.each(Object.entries(summitWarRelationshipOmissions))(
    'records why %s has no supported relationships',
    (id, reason) => {
      expect(summitWar.dossiers[id]?.relationships).toBeUndefined()
      expect(reason.trim()).not.toBe('')

      for (const locale of LOCALES) {
        expect(projected(id, ep(1180), locale)).toStrictEqual([])
        expect(projected(id, ch(1150), locale)).toStrictEqual([])
      }
    },
  )
})

describe.each(LOCALES)('Summit War verified story events in %s', (locale) => {
  const label = (english: string, italian: string): string =>
    locale === 'en' ? english : italian

  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  it('waits for Bepo’s rescue of Law before revealing Chopper’s medicine', () => {
    for (const [before, at] of [
      [ep(1114), ep(1115)],
      [ch(1080), ch(1081)],
    ] as const) {
      expect(pair('bepo', 'tony-tony-chopper', before)).toBeUndefined()
      expect(pair('bepo', 'tony-tony-chopper', at)).toBeDefined()
      expect(pair('bepo', 'tony-tony-chopper', before)).toBeUndefined()
    }
  })

  it('keeps the prison promotions exclusive to manga cover stories', () => {
    expect(pair('hannyabal', 'magellan', ch(660))?.type).toBe(
      label('Superior', 'Superiore'),
    )
    expect(pair('hannyabal', 'magellan', ch(661))?.type).toBe(
      label('Predecessor', 'Predecessore'),
    )
    expect(pair('hannyabal', 'magellan', ep(1300))?.type).toBe(
      label('Superior', 'Superiore'),
    )
    expect(pair('magellan', 'hannyabal', ch(664))?.type).toBe(
      label('Deputy', 'Vice'),
    )
    expect(pair('magellan', 'hannyabal', ch(665))?.type).toBe(
      label('Successor', 'Successore'),
    )
  })

  it('reveals Nyon’s feelings only in the manga flashback', () => {
    expect(pair('nyon', 'gold-roger', ch(1155))).toBeUndefined()
    expect(pair('nyon', 'gold-roger', ch(1156))).toBeDefined()
    expect(pair('nyon', 'gold-roger', ep(1300))).toBeUndefined()
  })

  it('waits for the archived endpoint when Lacroix fights Oars', () => {
    expect(pair('lacroix', 'little-oars-jr', ep(465))).toBeUndefined()
    expect(pair('lacroix', 'little-oars-jr', ep(466))).toBeDefined()
    expect(pair('lacroix', 'little-oars-jr', ch(559))).toBeUndefined()
    expect(pair('lacroix', 'little-oars-jr', ch(560))).toBeDefined()
  })

  it('changes Heracles’s role when Usopp asks for training', () => {
    expect(pair('heracles', 'usopp', ep(514))?.type).toBe(
      label('Castaway he helps', 'Naufrago che aiuta'),
    )
    expect(pair('heracles', 'usopp', ep(515))?.type).toBe(
      label('Pupil', 'Allievo'),
    )
    expect(pair('heracles', 'usopp', ch(595))?.type).toBe(
      label('Castaway he helps', 'Naufrago che aiuta'),
    )
    expect(pair('heracles', 'usopp', ch(596))?.type).toBe(
      label('Pupil', 'Allievo'),
    )
  })

  it('sends no relationship content for an unset bookmark or a covered owner', () => {
    expect(projected('bepo', null, locale)).toStrictEqual([])
    expect(projected('bepo', ep(391), locale)).toStrictEqual([])
    expect(projected('bepo', ch(497), locale)).toStrictEqual([])
  })
})
