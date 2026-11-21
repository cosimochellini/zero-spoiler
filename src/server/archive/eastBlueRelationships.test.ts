import { describe, expect, it } from 'vitest'

import { eastBlue } from '~/data/series/one-piece/records/east-blue'
import { eastBlueRelationships } from '~/data/series/one-piece/records/east-blue.relationships'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import {
  opRelationshipsPage as relationshipsPage,
  withoutDrawings,
} from '~/test/archive'

const owners = eastBlue.entries.filter(({ kind }) => kind === 'character')

/** Public page projection, including covered owners and source filtering. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(relationshipsPage(id, bookmark, locale))
}

describe('East Blue relationship coverage', () => {
  it('accounts for exactly the current debut cohort', () => {
    expect(
      Object.keys(eastBlueRelationships).toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual(
      owners.map(({ id }) => id).toSorted((a, b) => a.localeCompare(b)),
    )
  })

  it.each(owners)(
    'authors at least one supported selection for $id',
    (owner) => {
      expect(
        eastBlue.dossiers[owner.id]?.relationships?.length,
      ).toBeGreaterThan(0)
    },
  )
})

describe.each(LOCALES)('East Blue story revelations in %s', (locale) => {
  it('carries an inactive character forward with its reached history', () => {
    expect(
      projected('rika', { mode: 'episode', episode: 1168 }, locale),
    ).toStrictEqual(projected('rika', { mode: 'episode', episode: 3 }, locale))
  })

  it('keeps the late family revelation out of Shanks’s earlier payload', () => {
    const bookmarks: Bookmark[] = [
      { mode: 'episode', episode: 1167 },
      { mode: 'chapter', chapter: 1137 },
    ]
    for (const bookmark of bookmarks) {
      const payload = JSON.stringify(projected('shanks', bookmark, locale))

      expect(payload).not.toContain('figarland-shamrock')
      expect(payload).not.toContain('figarland-garling')
      expect(payload).not.toContain('twin')
      expect(payload).not.toContain('gemello')
    }
  })
})
