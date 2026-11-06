import { describe, expect, it } from 'vitest'

import type { Entity, Field } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { LOADED_SERIES } from '~/test/series'

import { homePage } from './home.server'
import { characterPage, drawingsFor } from './pages.server'
import { payloadsFor } from './payloads.server'
import { placePage } from './placePage.server'
import { readerFor } from './reader.server'

const archive = LOADED_SERIES.find(
  ({ slug }) => slug === 'hunter-x-hunter',
)?.archive
if (archive === undefined) {
  throw new Error('Kakin requires Hunter x Hunter')
}

// Expected dates come from the named scenes in the phase inventory, not the records.
const GATES: [string, number][] = [
  ['beyond-netero', 340],
  ['golem', 347],
  ['benjamin-hui-guo-rou', 349],
  ['camilla-hui-guo-rou', 349],
  ['zhang-lei-hui-guo-rou', 349],
  ['tserriednich-hui-guo-rou', 343],
  ['tubeppa-hui-guo-rou', 349],
  ['tyson-hui-guo-rou', 349],
  ['luzurus-hui-guo-rou', 349],
  ['sale-sale-hui-guo-rou', 349],
  ['halkenburg-hui-guo-rou', 349],
  ['kacho-hui-guo-rou', 349],
  ['fugetsu-hui-guo-rou', 349],
  ['momoze-hui-guo-rou', 349],
  ['marayam-hui-guo-rou', 349],
  ['woble-hui-guo-rou', 349],
  ['izunavi', 350],
  ['unma-hui-guo-rou', 349],
  ['duazul-hui-guo-rou', 349],
  ['tang-zhao-li-hui-guo-rou', 349],
  ['katrono-hui-guo-rou', 349],
  ['swinko-swinko-hui-guo-rou', 349],
  ['seiko-hui-guo-rou', 349],
  ['zigg-zoldyck', 344],
  ['curly', 346],
  ['mark', 345],
]
const PINS: [string, Field, number][] = [
  ['beyond-netero', 'status', 341],
  ['beyond-netero', 'status', 342],
  ['gon-freecss', 'role', 344],
  ['gon-freecss', 'role', 345],
  ['leorio-paradinight', 'role', 343],
  ['leorio-paradinight', 'affiliation', 343],
  ['leorio-paradinight', 'epithet', 346],
  ['kurapika', 'role', 343],
  ['kurapika', 'affiliation', 343],
  ['kurapika', 'epithet', 346],
  ['kurapika', 'role', 350],
  ['hisoka', 'role', 351],
  ['hisoka', 'affiliation', 351],
  ['hisoka', 'affiliation', 357],
  ['ging-freecss', 'role', 340],
  ['ging-freecss', 'affiliation', 340],
  ['ging-freecss', 'role', 347],
  ['ging-freecss', 'affiliation', 347],
  ['shalnark', 'status', 357],
  ['kortopi', 'status', 357],
  ['chrollo', 'role', 351],
  ['cheadle-yorkshire', 'role', 340],
  ['pariston-hill', 'affiliation', 340],
  ['saiyu', 'affiliation', 348],
]

describe.each(LOCALES)('Kakin phase 1 in %s', (locale) => {
  const read = (chapter: number): ReturnType<typeof readerFor> =>
    readerFor(archive, { mode: 'chapter', chapter }, locale)

  it.each(GATES)('opens %s and its drawing at chapter %i', (id, chapter) => {
    const before = read(chapter - 1)
    const reached = read(chapter)
    const page = characterPage(id, reached)

    expect(characterPage(id, before)?.detail.slot.open).toBe(false)
    expect(drawingsFor([id], before)).toStrictEqual({})
    expect(page?.detail.slot.open).toBe(true)
    expect(drawingsFor([id], reached)[id]?.length).toBeGreaterThanOrEqual(4)
  })

  it.each(PINS)('pins %s %s at chapter %i', (id, field, chapter) => {
    const owner = character(id)

    const expected = {
      revealedAtEpisode: 148,
      revealedAtChapter: chapter,
      source: 'chapter',
    }

    expect(
      archive
        .reachedOf(read(chapter - 1), owner, field)
        .map(({ gate }) => gate),
    ).not.toContainEqual(expected)
    expect(
      archive.reachedOf(read(chapter), owner, field).map(({ gate }) => gate),
    ).toContainEqual(expected)
  })

  it('preserves anime and season readers at the end of the anime', () => {
    for (const bookmark of [
      { mode: 'episode', episode: 148 },
      { mode: 'season', season: 6, episode: 12 },
    ] as const) {
      const reader = readerFor(archive, bookmark, locale)
      for (const [id] of GATES) {
        expect(characterPage(id, reader)).toBeUndefined()
        expect(drawingsFor([id], reader)).toStrictEqual({})
      }

      expect(homePage(reader).saga.id).toBe('election-arc')

      for (const [id, field] of PINS) {
        const owner = character(id)

        expect(
          archive
            .reachedOf(reader, owner, field)
            .some(
              ({ gate }) =>
                gate.source === 'chapter' && gate.revealedAtChapter >= 340,
            ),
        ).toBe(false)
      }
    }
  })

  it('does not send any Kakin character ID in anime payloads', () => {
    for (const { keys, run } of payloadsFor(archive)) {
      const payloadKeys = keys?.() ?? ['']
      for (const key of payloadKeys) {
        const payload = JSON.stringify(
          run({ mode: 'episode', episode: 148 }, locale, key),
        )
        for (const [id] of GATES) {
          expect(payload).not.toContain(JSON.stringify(id))
        }
      }
    }
  })

  it('opens the named flashback place only for manga readers', () => {
    const closed = placePage('dark-continent', read(339))
    const open = placePage('dark-continent', read(340))

    expect(opened(closed)).toBe(false)
    expect(opened(open)).toBe(true)
    expect(
      placePage(
        'dark-continent',
        readerFor(archive, { mode: 'episode', episode: 148 }, locale),
      ),
    ).toBeUndefined()
  })

  it('opens the arc and registers its leads', () => {
    expect(homePage(read(339)).saga.id).toBe('election-arc')
    expect(homePage(read(340)).saga.id).toBe('kakin-arc')
    expect(archive.leads['kakin-arc']).toContain('beyond-netero')
    expect(archive.leads['kakin-arc']).toContain('kurapika')
  })
})

function opened(page: ReturnType<typeof placePage>): boolean {
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

function character(id: string): Entity {
  const entity = archive?.getCharacter(id)
  if (entity === undefined) {
    throw new Error(`Missing Kakin fixture ${id}`)
  }
  return entity
}
