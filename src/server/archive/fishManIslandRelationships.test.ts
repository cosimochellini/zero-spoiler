import { describe, expect, it } from 'vitest'

import { fishManIsland } from '~/data/series/one-piece/records/fish-man-island'
import {
  fishManIslandRelationshipOmissions,
  fishManIslandRelationships,
} from '~/data/series/one-piece/records/fish-man-island.relationships'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  opRelationshipsPage as relationshipsPage,
  withoutDrawings,
} from '~/test/archive'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = fishManIsland.entries.filter(({ kind }) => kind === 'character')

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(relationshipsPage(id, bookmark, locale))
}

describe('Fish-Man Island relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(fishManIslandRelationships),
        ...Object.keys(fishManIslandRelationshipOmissions),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(
    owners.filter(
      ({ id }) => !Object.hasOwn(fishManIslandRelationshipOmissions, id),
    ),
  )('authors at least one supported selection for $id', (owner) => {
    expect(
      fishManIsland.dossiers[owner.id]?.relationships?.length,
    ).toBeGreaterThan(0)
  })

  it.each(Object.entries(fishManIslandRelationshipOmissions))(
    'records why %s has no supported relationships',
    (id, reason) => {
      expect(fishManIsland.dossiers[id]?.relationships).toBeUndefined()
      expect(reason.trim()).not.toBe('')

      for (const locale of LOCALES) {
        expect(projected(id, ep(1180), locale)).toStrictEqual([])
        expect(projected(id, ch(1150), locale)).toStrictEqual([])
      }
    },
  )
})

describe.each(LOCALES)('Fish-Man Island verified events in %s', (locale) => {
  function pair(
    owner: string,
    target: string,
    bookmark: Bookmark,
  ): RelationshipView | undefined {
    return projected(owner, bookmark, locale).find(
      ({ person }) => person.id === target,
    )
  }

  it('does not reveal the killer through Shirahoshi before her explanation', () => {
    for (const [before, at] of [
      [ep(552), ep(553)],
      [ch(632), ch(633)],
    ] as const) {
      expect(pair('shirahoshi', 'hody-jones', before)).toBeUndefined()
      expect(pair('shirahoshi', 'hody-jones', at)).toBeDefined()
      expect(pair('shirahoshi', 'hody-jones', before)).toBeUndefined()
    }
  })

  it('keeps the brothers’ cover-story changes out of anime selections', () => {
    expect(pair('coribou', 'caribou', ch(686))?.type).toBe(
      locale === 'en' ? 'Brother he frees' : 'Fratello che libera',
    )
    expect(pair('coribou', 'caribou', ch(687))?.type).toBe(
      locale === 'en' ?
        'Brother who abandons him'
      : 'Fratello che lo abbandona',
    )
    expect(pair('coribou', 'caribou', ch(715))?.history).toHaveLength(4)
    expect(pair('coribou', 'caribou', ep(1300))?.history).toHaveLength(1)
    expect(pair('caribou', 'coribou', ep(572))?.history).toHaveLength(1)
  })

  it('waits for a named archived endpoint before showing Mjosgard or Big Mom', () => {
    expect(pair('otohime', 'donquixote-mjosgard', ep(885))).toBeUndefined()
    expect(pair('otohime', 'donquixote-mjosgard', ep(886))).toBeDefined()
    expect(pair('bobbin', 'charlotte-linlin', ch(830))).toBeUndefined()
    expect(pair('bobbin', 'charlotte-linlin', ch(831))).toBeDefined()
  })

  it('updates Pekoms’s perspective when he honours Pedro’s sacrifice', () => {
    for (const [before, at] of [
      [ep(870), ep(871)],
      [ch(895), ch(896)],
    ] as const) {
      expect(pair('pekoms', 'monkey-d-luffy', before)).toBeUndefined()
      expect(pair('pekoms', 'monkey-d-luffy', at)?.type).toBe(
        locale === 'en' ?
          'Fugitive he helps escape'
        : 'Fuggitivo che aiuta a scappare',
      )
    }
  })

  it('keeps Devon’s decision source-specific until the later shared confirmation', () => {
    const pending = pair('caribou', 'catarina-devon', ch(1108))
    const accepted = pair('caribou', 'catarina-devon', ep(1142))

    expect(pending?.type).toBe(
      locale === 'en' ?
        'Pirate he asks for passage'
      : 'Pirata a cui chiede un passaggio',
    )
    expect(accepted?.type).toBe(
      locale === 'en' ? 'Escort to Blackbeard' : 'Accompagnatrice da Barbanera',
    )
    expect(pair('caribou', 'marshall-d-teach', ch(1121))?.type).not.toBe(
      pair('caribou', 'marshall-d-teach', ch(1122))?.type,
    )
  })

  it('sends no relationship content for an unset bookmark or covered owner', () => {
    expect(projected('shirahoshi', null, locale)).toStrictEqual([])
    expect(projected('shirahoshi', ep(530), locale)).toStrictEqual([])
    expect(projected('shirahoshi', ch(617), locale)).toStrictEqual([])
  })
})
