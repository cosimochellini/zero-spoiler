import { describe, expect, it } from 'vitest'

import { dressrosa } from '~/data/series/one-piece/records/dressrosa'
import { dressrosaRelationships } from '~/data/series/one-piece/records/dressrosa.relationships'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  opRelationshipsPage as relationshipsPage,
  withoutDrawings,
} from '~/test/archive'

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const owners = dressrosa.entries.filter(({ kind }) => kind === 'character')

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(relationshipsPage(id, bookmark, locale))
}

describe('Dressrosa relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      [...Object.keys(dressrosaRelationships), 'mansherry'].toSorted((a, b) =>
        a.localeCompare(b),
      ),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      const selections = dressrosa.dossiers[owner.id]?.relationships

      expect(selections?.length).toBeGreaterThan(0)
    },
  )
})

describe.each(LOCALES)('Dressrosa story revelations in %s', (locale) => {
  const fiance = locale === 'en' ? 'Fiancé' : 'Fidanzato'
  const fiancee = locale === 'en' ? 'Fiancée' : 'Fidanzata'
  const husband = locale === 'en' ? 'Husband' : 'Marito'
  const wife = locale === 'en' ? 'Wife' : 'Moglie'

  it('keeps Rebecca’s mother behind the endpoint independently in each source', () => {
    expect(
      projected('rebecca', ep(650), locale).map(({ person }) => person.id),
    ).not.toContain('scarlett')
    expect(
      projected('rebecca', ep(651), locale).map(({ person }) => person.id),
    ).toContain('scarlett')
    expect(
      projected('rebecca', ch(721), locale).map(({ person }) => person.id),
    ).not.toContain('scarlett')
    expect(
      projected('rebecca', ch(741), locale).map(({ person }) => person.id),
    ).not.toContain('scarlett')
    expect(
      projected('rebecca', ch(742), locale).map(({ person }) => person.id),
    ).toContain('scarlett')
  })

  it('withholds the father reveal and restores the earlier selection after reading it', () => {
    const boundaries: [Bookmark, Bookmark][] = [
      [ep(674), ep(675)],
      [ch(741), ch(742)],
    ]
    for (const [before, at] of boundaries) {
      const earlier = projected('rebecca', before, locale)

      expect(earlier.map(({ person }) => person.id)).not.toContain('kyros')

      const family = projected('rebecca', at, locale)

      expect(family.map(({ person }) => person.id)).toStrictEqual([
        'kyros',
        'scarlett',
        'riku-doldo-iii',
        'viola',
        'monkey-d-luffy',
      ])
      expect(family[0]?.type).toBe(locale === 'en' ? 'Father' : 'Padre')
      expect(projected('rebecca', before, locale)).toStrictEqual(earlier)
    }
  })

  it('keeps Bartolomeo’s later confrontation out of his Dressrosa selection', () => {
    for (const bookmark of [ep(1155), ch(1125)]) {
      expect(
        projected('bartolomeo', bookmark, locale).map(
          ({ person }) => person.id,
        ),
      ).not.toContain('shanks')
    }
    for (const bookmark of [ep(1156), ch(1126)]) {
      expect(
        projected('bartolomeo', bookmark, locale).map(
          ({ person }) => person.id,
        ),
      ).toStrictEqual([
        'monkey-d-luffy',
        'shanks',
        'gambia',
        'bellamy',
        'cavendish',
      ])
    }
  })

  it('reveals Kanjuro’s betrayal only at the reached turning point', () => {
    const boundaries: [Bookmark, Bookmark][] = [
      [ep(976), ep(977)],
      [ch(973), ch(974)],
    ]
    for (const [before, at] of boundaries) {
      const earlier = projected('kanjuro', before, locale)

      expect(earlier.map(({ person }) => person.id)).not.toContain(
        'kurozumi-orochi',
      )

      const betrayal = projected('kanjuro', at, locale)

      expect(betrayal[0]?.person.id).toBe('kurozumi-orochi')

      const kinemon = betrayal.find(({ person }) => person.id === 'kinemon')

      expect(kinemon?.type).toBe(
        locale === 'en' ? 'Comrade he betrays' : 'Compagno che tradisce',
      )
      expect(kinemon?.history.length).toBeGreaterThan(1)
      expect(projected('kanjuro', before, locale)).toStrictEqual(earlier)
    }
  })

  it('keeps the manga wedding independent through later shared-source selections', () => {
    expect(
      projected('baby-5', ch(880), locale).find(
        ({ person }) => person.id === 'sai',
      )?.type,
    ).toBe(fiance)
    expect(
      projected('baby-5', ch(881), locale).find(
        ({ person }) => person.id === 'sai',
      )?.type,
    ).toBe(husband)
    expect(
      projected('baby-5', ep(1180), locale).find(
        ({ person }) => person.id === 'sai',
      )?.type,
    ).toBe(fiance)
    expect(
      projected('sai', ch(1150), locale).find(
        ({ person }) => person.id === 'baby-5',
      )?.type,
    ).toBe(wife)
    expect(
      projected('sai', ep(1180), locale).find(
        ({ person }) => person.id === 'baby-5',
      )?.type,
    ).toBe(fiancee)
  })

  it('retains Mansherry’s existing rescue history throughout later sagas', () => {
    const rescue = projected('mansherry', ep(714), locale)

    expect(rescue.map(({ person }) => person.id)).toStrictEqual(['leo', 'jora'])
    expect(rescue[0]?.history).toHaveLength(2)
    expect(projected('mansherry', ep(1180), locale)).toStrictEqual(rescue)
    expect(projected('mansherry', ch(1150), locale)).toStrictEqual(
      projected('mansherry', ch(774), locale),
    )
  })
})
