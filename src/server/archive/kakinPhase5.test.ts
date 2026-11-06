import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor, relationshipsPage } from './pages.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Kakin phase 5 tests require Hunter x Hunter')
}
const { archive } = series
// Independent naming-scene expectations, not derived from the filed records.
const RECORDS = [
  { id: 'oito-hui-guo-rou', chapter: 401 },
  { id: 'makaha', chapter: 401 },
  { id: 'hashito', chapter: 402 },
  { id: 'sakata', chapter: 402 },
  { id: 'musse', chapter: 402 },
  { id: 'balsamilco', chapter: 403 },
  { id: 'worio-bay', chapter: 403 },
  { id: 'vict', chapter: 404 },
  { id: 'shikaku', chapter: 404 },
  { id: 'sumidori', chapter: 404 },
  { id: 'cleapatro', chapter: 404 },
  { id: 'hinrigh', chapter: 404 },
  { id: 'morena', chapter: 405 },
  { id: 'risnorth', chapter: 405 },
  { id: 'onior', chapter: 410 },
  { id: 'kako', chapter: 411 },
  { id: 'bill', chapter: 412 },
  { id: 'shimanu', chapter: 412 },
  { id: 'rihan', chapter: 413 },
  { id: 'saquelle', chapter: 413 },
  { id: 'kanjidol', chapter: 415 },
  { id: 'coventoba', chapter: 417 },
]
const RELATIONSHIPS = [
  {
    id: 'oito-hui-guo-rou',
    chapter: 401,
    targets: ['woble-hui-guo-rou', 'kurapika'],
  },
  { id: 'makaha', chapter: 401, targets: ['longhi', 'beyond-netero'] },
  { id: 'hashito', chapter: 402, targets: ['zhang-lei-hui-guo-rou'] },
  { id: 'sakata', chapter: 402, targets: ['zhang-lei-hui-guo-rou'] },
  { id: 'musse', chapter: 402, targets: ['benjamin-hui-guo-rou'] },
  { id: 'balsamilco', chapter: 403, targets: ['halkenburg-hui-guo-rou'] },
  {
    id: 'worio-bay',
    chapter: 403,
    targets: ['kaiser', 'halkenburg-hui-guo-rou'],
  },
  { id: 'vict', chapter: 404, targets: ['halkenburg-hui-guo-rou'] },
  { id: 'shikaku', chapter: 404, targets: ['halkenburg-hui-guo-rou'] },
  { id: 'sumidori', chapter: 404, targets: ['shikaku'] },
  { id: 'cleapatro', chapter: 404, targets: ['benjamin-hui-guo-rou'] },
  { id: 'hinrigh', chapter: 406, targets: ['zakuro-custard'] },
  { id: 'morena', chapter: 407, targets: ['borksen'] },
  { id: 'onior', chapter: 410, targets: ['zhang-lei-hui-guo-rou'] },
  { id: 'kako', chapter: 411, targets: ['fukataki'] },
  { id: 'bill', chapter: 412, targets: ['kurapika'] },
  { id: 'shimanu', chapter: 412, targets: ['oito-hui-guo-rou'] },
  { id: 'rihan', chapter: 413, targets: ['benjamin-hui-guo-rou'] },
  { id: 'saquelle', chapter: 413, targets: ['benjamin-hui-guo-rou'] },
  { id: 'kanjidol', chapter: 415, targets: ['luzurus-hui-guo-rou'] },
  { id: 'coventoba', chapter: 417, targets: ['zhang-lei-hui-guo-rou'] },
]
// Each change of status in the window, with the status before and at its pin.
const STATUSES = [
  {
    id: 'halkenburg-hui-guo-rou',
    chapter: 404,
    before: 'alive',
    after: 'deceased',
  },
  { id: 'lynch-fullbokko', chapter: 406, before: 'alive', after: 'deceased' },
  { id: 'borksen', chapter: 407, before: 'alive', after: 'captured' },
  { id: 'borksen', chapter: 410, before: 'captured', after: 'alive' },
  { id: 'woble-hui-guo-rou', chapter: 412, before: 'alive', after: 'missing' },
  { id: 'onior', chapter: 417, before: 'alive', after: 'captured' },
]

function character(id: string): Entity {
  const entity = archive.getCharacter(id)
  if (entity === undefined) {
    throw new Error(`Missing Kakin phase 5 character ${id}`)
  }
  return entity
}

function chapter(
  at: number,
  locale: (typeof LOCALES)[number],
): ReturnType<typeof readerFor> {
  return readerFor(archive, { mode: 'chapter', chapter: at }, locale)
}

describe.each(LOCALES)('Kakin phase 5 in %s', (locale) => {
  it.each(RECORDS)(
    'opens $id and its drawing only at chapter $chapter',
    ({ id, chapter: gate }) => {
      const before = chapter(gate - 1, locale)
      const reached = chapter(gate, locale)
      const beforePage = characterPage(id, before)
      const reachedPage = characterPage(id, reached)

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
    ({ id, chapter: met, targets }) => {
      expect(relationshipsPage(id, chapter(met - 1, locale))).toStrictEqual([])
      expect(
        relationshipsPage(id, chapter(met, locale)).map(
          ({ person }) => person.id,
        ),
      ).toStrictEqual(targets)
    },
  )

  it.each(STATUSES)(
    'pins $id’s change to $after at chapter $chapter',
    ({ id, chapter: pin, before, after }) => {
      const entity = character(id)

      expect(archive.latestOf(chapter(pin - 1, locale), entity, 'status')).toBe(
        before,
      )
      expect(archive.latestOf(chapter(pin, locale), entity, 'status')).toBe(
        after,
      )
    },
  )

  it('pins Borksen’s Heil-Ly membership to chapter 410', () => {
    const borksen = character('borksen')

    expect(
      archive.latestOf(chapter(409, locale), borksen, 'affiliation'),
    ).not.toStrictEqual(
      archive.latestOf(chapter(410, locale), borksen, 'affiliation'),
    )
  })

  it.each([
    { id: 'musse', status: 'deceased' },
    { id: 'shikaku', status: 'deceased' },
    { id: 'risnorth', status: 'deceased' },
    { id: 'kanjidol', status: 'captured' },
  ])('files $id as $status at the opening', ({ id, status }) => {
    const entity = character(id)

    expect(
      archive.latestOf(
        chapter(entity.revealedAtChapter, locale),
        entity,
        'status',
      ),
    ).toBe(status)
  })

  it.each([
    { mode: 'episode', episode: 148 } as const,
    { mode: 'season', season: 6, episode: 12 } as const,
  ])('omits every phase record from the $mode archive', (bookmark) => {
    const reader = readerFor(archive, bookmark, locale)
    for (const { id } of RECORDS) {
      expect(reader.archive.getEntity(id)).toBeUndefined()
      expect(reader.archive.entities.some((entity) => entity.id === id)).toBe(
        false,
      )
      expect(characterPage(id, reader)).toBeUndefined()
      expect(relationshipsPage(id, reader)).toStrictEqual([])
    }

    expect(
      drawingsFor(
        RECORDS.map(({ id }) => id),
        reader,
      ),
    ).toStrictEqual({})
  })

  it.each(['episode', 'season'] as const)(
    'keeps the window’s fates out of the %s archive',
    (mode) => {
      const reader = readerFor(
        archive,
        mode === 'episode' ?
          { mode, episode: 148 }
        : { mode, season: 6, episode: 12 },
        locale,
      )

      for (const id of [
        'halkenburg-hui-guo-rou',
        'lynch-fullbokko',
        'woble-hui-guo-rou',
      ]) {
        expect(['deceased', 'missing']).not.toContain(
          archive.latestOf(reader, character(id), 'status'),
        )
      }
    },
  )
})
