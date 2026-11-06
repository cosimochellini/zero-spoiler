import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor, relationshipsPage } from './pages.server'
import { placePage } from './placePage.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Kakin phase 4 tests require Hunter x Hunter')
}
const { archive } = series
// Independent naming-scene expectations, not derived from the filed records.
const RECORDS = [
  { id: 'tajao', chapter: 384, place: false },
  { id: 'famule', chapter: 389, place: false },
  { id: 'fukataki', chapter: 389, place: false },
  { id: 'taler', chapter: 389, place: false },
  { id: 'zakuro-custard', chapter: 390, place: false },
  { id: 'lynch-fullbokko', chapter: 390, place: false },
  { id: 'tevelares', chapter: 391, place: false },
  { id: 'quorolle', chapter: 391, place: false },
  { id: 'padaille', chapter: 391, place: false },
  { id: 'misha-hao', chapter: 392, place: false },
  { id: 'maizan', chapter: 393, place: false },
  { id: 'daemon', chapter: 393, place: false },
  { id: 'gelato', chapter: 393, place: false },
  { id: 'perigord', chapter: 393, place: false },
  { id: 'bille', chapter: 393, place: false },
  { id: 'voconte', chapter: 393, place: false },
  { id: 'matvere', chapter: 393, place: false },
  { id: 'tassi', chapter: 394, place: false },
  { id: 'terebellum', chapter: 394, place: false },
  { id: 'chiffon-toto', chapter: 394, place: false },
  { id: 'montblanc-toto', chapter: 394, place: false },
  { id: 'sodom', chapter: 394, place: false },
  { id: 'borksen', chapter: 394, place: false },
  { id: 'otocin', chapter: 394, place: false },
  { id: 'gipper', chapter: 394, place: false },
  { id: 'momolly', chapter: 394, place: false },
  { id: 'lisores', chapter: 395, place: false },
  { id: 'sarasa', chapter: 395, place: false },
  { id: 'sheila', chapter: 395, place: false },
  { id: 'renko', chapter: 397, place: false },
  { id: 'yokotani', chapter: 399, place: false },
  { id: 'madwig', chapter: 400, place: false },
  { id: 'himonce', chapter: 400, place: false },
  { id: 'anzel', chapter: 400, place: false },
  { id: 'hyuga', chapter: 400, place: false },
  { id: 'all-faiths-church', chapter: 395, place: true },
  { id: 'uga-forest', chapter: 396, place: true },
]
const RELATIONSHIPS = [
  { id: 'tajao', chapter: 384, target: 'phinks' },
  { id: 'famule', chapter: 389, target: 'basho' },
  { id: 'fukataki', chapter: 389, target: 'camilla-hui-guo-rou' },
  { id: 'taler', chapter: 389, target: 'fukataki' },
  { id: 'zakuro-custard', chapter: 390, target: 'lynch-fullbokko' },
  { id: 'lynch-fullbokko', chapter: 390, target: 'zakuro-custard' },
  { id: 'tevelares', chapter: 391, target: 'quorolle' },
  { id: 'quorolle', chapter: 391, target: 'tevelares' },
  { id: 'padaille', chapter: 391, target: 'tevelares' },
  { id: 'misha-hao', chapter: 392, target: 'padaille' },
  { id: 'maizan', chapter: 393, target: 'hinrigh-biganduffno' },
  { id: 'daemon', chapter: 393, target: 'gelato' },
  { id: 'gelato', chapter: 393, target: 'matvere' },
  { id: 'perigord', chapter: 393, target: 'voconte' },
  { id: 'bille', chapter: 393, target: 'matvere' },
  { id: 'voconte', chapter: 393, target: 'perigord' },
  { id: 'matvere', chapter: 393, target: 'gelato' },
  { id: 'tassi', chapter: 394, target: 'bille' },
  { id: 'terebellum', chapter: 394, target: 'chiffon-toto' },
  { id: 'chiffon-toto', chapter: 394, target: 'montblanc-toto' },
  { id: 'montblanc-toto', chapter: 394, target: 'chiffon-toto' },
  { id: 'sodom', chapter: 394, target: 'matvere' },
  { id: 'borksen', chapter: 394, target: 'otocin' },
  { id: 'otocin', chapter: 394, target: 'borksen' },
  { id: 'gipper', chapter: 394, target: 'otocin' },
  { id: 'momolly', chapter: 394, target: 'borksen' },
  { id: 'lisores', chapter: 395, target: 'chrollo' },
  { id: 'sarasa', chapter: 395, target: 'pakunoda' },
  { id: 'sheila', chapter: 395, target: 'sarasa' },
  { id: 'renko', chapter: 397, target: 'machi' },
  { id: 'yokotani', chapter: 399, target: 'nobunaga' },
  { id: 'madwig', chapter: 400, target: 'tyson-hui-guo-rou' },
  { id: 'himonce', chapter: 400, target: 'tyson-hui-guo-rou' },
  { id: 'anzel', chapter: 400, target: 'tyson-hui-guo-rou' },
  { id: 'hyuga', chapter: 400, target: 'tyson-hui-guo-rou' },
]

function character(id: string): Entity {
  const entity = archive.getCharacter(id)
  if (entity === undefined) {
    throw new Error(`Missing Kakin phase 4 character ${id}`)
  }
  return entity
}

describe.each(LOCALES)('Kakin phase 4 in %s', (locale) => {
  it.each(RECORDS)(
    'opens $id and its drawing only at chapter $chapter',
    ({ id, chapter, place }) => {
      const before = readerFor(
        archive,
        { mode: 'chapter', chapter: chapter - 1 },
        locale,
      )
      const reached = readerFor(archive, { mode: 'chapter', chapter }, locale)
      const beforePage =
        place ? placePage(id, before) : characterPage(id, before)
      const reachedPage =
        place ? placePage(id, reached) : characterPage(id, reached)

      expect(
        beforePage !== undefined
          && 'detail' in beforePage
          && beforePage.detail.slot.open,
      ).toBe(false)
      expect(drawingsFor([id], before)).toStrictEqual({})
      expect(
        reachedPage !== undefined
          && 'detail' in reachedPage
          && reachedPage.detail.slot.open,
      ).toBe(true)
      expect(drawingsFor([id], reached)[id]?.length).toBeGreaterThan(3)
    },
  )

  it.each(RELATIONSHIPS)(
    'gates $id’s selection at chapter $chapter',
    ({ id, chapter, target }) => {
      const before = readerFor(
        archive,
        { mode: 'chapter', chapter: chapter - 1 },
        locale,
      )
      const reached = readerFor(archive, { mode: 'chapter', chapter }, locale)

      expect(relationshipsPage(id, before)).toStrictEqual([])
      expect(
        relationshipsPage(id, reached).map(({ person }) => person.id),
      ).toStrictEqual([target])
    },
  )

  it.each([
    { mode: 'episode', episode: 148 } as const,
    { mode: 'season', season: 6, episode: 12 } as const,
  ])('omits every phase record from the $mode archive', (bookmark) => {
    const reader = readerFor(archive, bookmark, locale)
    for (const { id, place } of RECORDS) {
      expect(reader.archive.getEntity(id)).toBeUndefined()
      expect(reader.archive.entities.some((entity) => entity.id === id)).toBe(
        false,
      )
      expect(
        place ? placePage(id, reader) : characterPage(id, reader),
      ).toBeUndefined()
      expect(relationshipsPage(id, reader)).toStrictEqual([])
    }

    expect(
      drawingsFor(
        RECORDS.map(({ id }) => id),
        reader,
      ),
    ).toStrictEqual({})
  })

  it('pins Sarasa’s death to chapter 397', () => {
    const before = readerFor(archive, { mode: 'chapter', chapter: 396 }, locale)
    const reached = readerFor(
      archive,
      { mode: 'chapter', chapter: 397 },
      locale,
    )

    expect(archive.latestOf(before, character('sarasa'), 'status')).toBe(
      'alive',
    )
    expect(archive.latestOf(reached, character('sarasa'), 'status')).toBe(
      'deceased',
    )
  })

  it('pins Sheila’s departure to chapter 397', () => {
    const before = readerFor(archive, { mode: 'chapter', chapter: 396 }, locale)
    const reached = readerFor(
      archive,
      { mode: 'chapter', chapter: 397 },
      locale,
    )

    expect(
      archive.latestOf(before, character('sheila'), 'affiliation'),
    ).not.toStrictEqual(
      archive.latestOf(reached, character('sheila'), 'affiliation'),
    )
  })

  it.each(['padaille', 'misha-hao', 'tassi'])(
    'files $id’s already-known death at its opening',
    (id) => {
      const entity = character(id)
      const reader = readerFor(
        archive,
        { mode: 'chapter', chapter: entity.revealedAtChapter },
        locale,
      )

      expect(archive.latestOf(reader, entity, 'status')).toBe('deceased')
    },
  )
})
