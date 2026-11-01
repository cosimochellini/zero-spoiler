import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Greed Island tests require Hunter x Hunter')
}
const { archive } = series
const RECORDS = [
  { id: 'battera', episode: 59, chapter: 120 },
  { id: 'tsezguerra', episode: 59, chapter: 121 },
  { id: 'puhat', episode: 60, chapter: 125 },
]
const CASES = LOCALES.flatMap((locale) =>
  ['episode', 'chapter'].map((unit) => ({ locale, unit })),
)

function at(unit: string, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

function character(id: string): Entity {
  const record = archive.getCharacter(id)
  if (record === undefined) {
    throw new Error(`Missing ${id} fixture`)
  }
  return record
}

describe.each(CASES)('Greed Island recruitment in $locale by $unit', (row) => {
  const read = (count: number): Reader =>
    readerFor(archive, at(row.unit, count), row.locale)
  const pin = (episode: number, chapter: number): number =>
    row.unit === 'chapter' ? chapter : episode

  it.each(RECORDS)('opens $id and its drawing at its named scene', (record) => {
    const threshold = pin(record.episode, record.chapter)
    const before = read(threshold - 1)
    const reached = read(threshold)
    const closedPage = characterPage(record.id, before)
    const openPage = characterPage(record.id, reached)

    expect(
      closedPage !== undefined
        && 'detail' in closedPage
        && closedPage.detail.slot.open,
    ).toBe(false)
    expect(drawingsFor([record.id], before)).toStrictEqual({})
    expect(
      openPage !== undefined
        && 'detail' in openPage
        && openPage.detail.slot.open,
    ).toBe(true)
    expect(
      drawingsFor([record.id], reached)[record.id]?.length,
    ).toBeGreaterThan(3)
  })

  it('opens Puhat’s recruitment, alliance and change of role separately', () => {
    const puhat = character('puhat')
    const hired = pin(60, 126)
    const alliance = pin(61, 131)
    const player = pin(61, 126)
    const working =
      row.locale === 'it' ? 'Al servizio di Battera' : 'Working for Battera'
    const applicant =
      row.locale === 'it' ?
        'Candidato per Greed Island'
      : 'Greed Island applicant'
    const playing =
      row.locale === 'it' ? 'Giocatore di Greed Island' : 'Greed Island player'

    expect(factsOf(puhat, read(hired - 1)).affiliation).toBeUndefined()
    expect(factsOf(puhat, read(hired)).affiliation).toBe(working)
    expect(factsOf(puhat, read(alliance - 1)).affiliation).toBe(working)
    expect(factsOf(puhat, read(alliance)).affiliation).toBe(
      row.locale === 'it' ?
        'Al servizio di Battera, in un’alleanza di giocatori'
      : 'Working for Battera, in an alliance of players',
    )
    expect(archive.roleOf(read(player - 1), puhat)?.[row.locale]).toBe(
      applicant,
    )
    expect(archive.roleOf(read(player), puhat)?.[row.locale]).toBe(playing)
  })

  it('changes Puhat’s status and drawing together at his death', () => {
    const puhat = character('puhat')
    const opening = read(pin(60, 125))
    const death = pin(64, 143)
    const before = read(death - 1)
    const reached = read(death)

    expect(archive.latestOf(before, puhat, 'status')).toBe('alive')
    expect(archive.latestOf(reached, puhat, 'status')).toBe('deceased')
    expect(drawingsFor(['puhat'], before)).toStrictEqual(
      drawingsFor(['puhat'], opening),
    )
    expect(drawingsFor(['puhat'], reached)).not.toStrictEqual(
      drawingsFor(['puhat'], before),
    )
  })

  it.each(['gon-freecss', 'killua'])(
    'dates %s’s recruitment affiliation',
    (id) => {
      const recruit = character(id)
      const hired = pin(60, 126)

      expect(factsOf(recruit, read(hired - 1)).affiliation).not.toContain(
        'Battera',
      )
      expect(factsOf(recruit, read(hired)).affiliation).toContain('Battera')
    },
  )

  it('gates the selected relationships and their changed wording', () => {
    const battera = character('battera')
    const tsezguerra = character('tsezguerra')
    const puhat = character('puhat')
    const rejection = pin(59, 121)
    const accepted = pin(60, 126)
    const introduced = pin(60, 125)
    const people = (entity: Entity, count: number): string[] =>
      relationshipsOf(entity, read(count)).map(({ person }) => person.id)

    expect(people(battera, rejection - 1)).toStrictEqual([])
    expect(people(battera, rejection)).toStrictEqual(['tsezguerra'])
    expect(people(tsezguerra, rejection - 1)).toStrictEqual([])
    expect(people(tsezguerra, rejection)).toStrictEqual([
      'battera',
      'gon-freecss',
      'killua',
    ])
    expect(people(puhat, introduced - 1)).toStrictEqual([])
    expect(people(puhat, introduced)).toStrictEqual(['gon-freecss', 'killua'])

    const gonBefore = relationshipsOf(tsezguerra, read(accepted - 1))[1]
    const gonAfter = relationshipsOf(tsezguerra, read(accepted))[1]

    expect(gonBefore?.type).toBe(
      row.locale === 'it' ? 'Candidato respinto' : 'Applicant he rejects',
    )
    expect(gonAfter?.type).toBe(
      row.locale === 'it' ? 'Giocatore selezionato' : 'Player he selects',
    )
    expect(gonBefore?.history).toHaveLength(1)
    expect(gonAfter?.history).toHaveLength(2)
  })
})

describe('Greed Island leads', () => {
  it('files the recruitment cast', () => {
    expect(archive.leads['greed-island-arc']).toStrictEqual([
      'gon-freecss',
      'killua',
      'battera',
      'tsezguerra',
      'puhat',
    ])
  })
})
