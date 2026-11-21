import { describe, expect, it } from 'vitest'

import { thrillerBark } from '~/data/series/one-piece/records/thriller-bark'
import {
  thrillerBarkRelationshipOmissions,
  thrillerBarkRelationships,
} from '~/data/series/one-piece/records/thriller-bark.relationships'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  opRelationshipsPage as relationshipsPage,
  withoutDrawings,
} from '~/test/archive'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = thrillerBark.entries.filter(({ kind }) => kind === 'character')

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(relationshipsPage(id, bookmark, locale))
}

describe('Thriller Bark relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [
        ...Object.keys(thrillerBarkRelationships),
        ...Object.keys(thrillerBarkRelationshipOmissions),
      ].toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(
    owners.filter(
      ({ id }) => !Object.hasOwn(thrillerBarkRelationshipOmissions, id),
    ),
  )('authors at least one supported selection for $id', (owner) => {
    expect(
      thrillerBark.dossiers[owner.id]?.relationships?.length,
    ).toBeGreaterThan(0)
  })

  it.each(Object.entries(thrillerBarkRelationshipOmissions))(
    'records why %s has no supported relationships',
    (id, reason) => {
      expect(thrillerBark.dossiers[id]?.relationships).toBeUndefined()
      expect(reason.trim()).not.toBe('')

      for (const locale of LOCALES) {
        expect(projected(id, ep(1180), locale)).toStrictEqual([])
        expect(projected(id, ch(1150), locale)).toStrictEqual([])
      }
    },
  )
})

describe.each(LOCALES)(
  'Thriller Bark independently checked facts in %s',
  (locale) => {
    function relation(
      owner: string,
      target: string,
      bookmark: Bookmark,
    ): RelationshipView | undefined {
      return projected(owner, bookmark, locale).find(
        ({ person }) => person.id === target,
      )
    }

    it('restores the zombie bride’s history before the human captain’s friendship', () => {
      const zombie = locale === 'en' ? 'zombie bride' : 'sposa zombie'
      const human = locale === 'en' ? 'human captain' : 'capitana umana'
      for (const [before, at] of [
        [ep(377), ep(378)],
        [ch(485), ch(486)],
      ] as const) {
        const earlier = relation('lola', 'nami', before)
        const later = relation('lola', 'nami', at)

        expect(earlier?.summary).toContain(zombie)
        expect(later?.summary).toContain(human)
        expect(later?.history).toHaveLength(3)
        expect(relation('lola', 'nami', before)).toStrictEqual(earlier)
      }
    })

    it('dates Lola’s gift to departure rather than the first recognition', () => {
      for (const [before, at] of [
        [ep(380), ep(381)],
        [ch(488), ch(489)],
      ] as const) {
        expect(relation('lola', 'nami', before)?.summary).not.toContain(
          'Vivre Card',
        )
        expect(relation('lola', 'nami', at)?.summary).toContain('Vivre Card')
      }
    })

    it('keeps the human captain’s cover-story marriage manga-only', () => {
      const husband =
        locale === 'en' ?
          'Husband of the human captain'
        : 'Marito della capitana umana'

      expect(relation('lola', 'gotti', ch(973))).toBeUndefined()
      expect(relation('lola', 'gotti', ch(974))).toBeDefined()
      expect(relation('lola', 'gotti', ch(992))?.type).not.toBe(husband)
      expect(relation('lola', 'gotti', ch(993))?.type).toBe(husband)
      expect(relation('lola', 'gotti', ep(1300))).toBeUndefined()
      expect(relation('lola', 'gotti', ch(973))).toBeUndefined()
    })

    it('waits for the confirmed escape rather than claiming a witnessed reunion', () => {
      const escaped =
        locale === 'en' ?
          'Captain whose escape is confirmed'
        : 'Capitano di cui viene confermata la fuga'
      for (const [before, at] of [
        [ep(1155), ep(1156)],
        [ch(1125), ch(1126)],
      ] as const) {
        const earlier = relation('perona', 'gecko-moria', before)

        expect(earlier?.type).not.toBe(escaped)
        expect(relation('perona', 'gecko-moria', at)?.type).toBe(escaped)
        expect(relation('perona', 'gecko-moria', before)).toStrictEqual(earlier)
      }
    })

    it('delays an old opponent until Kaido’s endpoint', () => {
      for (const [before, at] of [
        [ep(738), ep(739)],
        [ch(794), ch(795)],
      ] as const) {
        expect(relation('gecko-moria', 'kaido', before)).toBeUndefined()
        expect(relation('gecko-moria', 'kaido', at)?.type).toBe(
          locale === 'en' ? 'Former opponent' : 'Avversario del passato',
        )
      }
    })

    it('dates the assassination attempt to the attack itself', () => {
      for (const [before, at] of [
        [ep(489), ep(490)],
        [ch(580), ch(581)],
      ] as const) {
        expect(
          relation('gecko-moria', 'donquixote-doflamingo', before),
        ).toBeUndefined()
        expect(
          relation('gecko-moria', 'donquixote-doflamingo', at),
        ).toBeDefined()
      }
    })

    it('describes Shiryu’s acquired power without naming an unverified killer', () => {
      for (const [before, at] of [
        [ep(916), ep(917)],
        [ch(924), ch(925)],
      ] as const) {
        expect(relation('absalom', 'shiryu', before)).toBeUndefined()
        expect(relation('absalom', 'shiryu', at)?.type).toBe(
          locale === 'en' ?
            'Recipient of his stolen power'
          : 'Chi riceve il suo potere rubato',
        )
      }
    })

    it('keeps Brook’s foundational bonds when later battle partners enter the selection', () => {
      for (const bookmark of [ep(1043), ch(1020)]) {
        expect(
          projected('brook', bookmark, locale).map(({ person }) => person.id),
        ).toStrictEqual([
          'laboon',
          'yorki',
          'monkey-d-luffy',
          'charlotte-linlin',
          'nico-robin',
        ])
        expect(relation('brook', 'laboon', bookmark)?.history).toHaveLength(2)
      }
    })

    it('sends no cards for an unset bookmark or a covered source character', () => {
      expect(projected('brook', null, locale)).toStrictEqual([])
      expect(projected('brook', ep(338), locale)).toStrictEqual([])
      expect(projected('brook', ch(442), locale)).toStrictEqual([])
    })
  },
)
