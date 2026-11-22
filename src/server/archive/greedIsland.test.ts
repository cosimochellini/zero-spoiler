import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import {
  bookmarkAt as at,
  gateCases,
  opened,
  recordIn,
  stageMissedAt,
} from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const { archive } = loadedSeries('hunter-x-hunter')
const RECORDS = [
  { id: 'battera', episode: 59, chapter: 120 },
  { id: 'tsezguerra', episode: 59, chapter: 121 },
  { id: 'puhat', episode: 60, chapter: 125 },
]
const CASES = LOCALES.flatMap((locale) =>
  ['episode', 'chapter'].map((unit) => ({ locale, unit })),
)

describe.each(gateCases(RECORDS, archive.series))(
  '$id in $locale by $unit',
  (row) => {
    it('opens the record and its drawing at its named scene', () => {
      expect(opened(row.id, readerFor(archive, row.before, row.locale))).toBe(
        false,
      )
      expect(opened(row.id, readerFor(archive, row.reached, row.locale))).toBe(
        true,
      )
    })
  },
)

describe.each(CASES)('Greed Island recruitment in $locale by $unit', (row) => {
  const read = (count: number): Reader =>
    readerFor(archive, at(row.unit, count), row.locale)
  const pin = (episode: number, chapter: number): number =>
    row.unit === 'chapter' ? chapter : episode

  it('opens Puhat’s recruitment, alliance and change of role separately', () => {
    const puhat = recordIn(archive, 'puhat')
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
    const puhat = recordIn(archive, 'puhat')
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
      const recruit = recordIn(archive, id)
      const hired = pin(60, 126)

      expect(factsOf(recruit, read(hired - 1)).affiliation).not.toContain(
        'Battera',
      )
      expect(factsOf(recruit, read(hired)).affiliation).toContain('Battera')
    },
  )

  it('gates the selected relationships and their changed wording', () => {
    const battera = recordIn(archive, 'battera')
    const tsezguerra = recordIn(archive, 'tsezguerra')
    const puhat = recordIn(archive, 'puhat')
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
      'biscuit-krueger',
      'binolt',
      'kosofftro',
      'battera',
      'tsezguerra',
      'puhat',
      'genthru',
      'jispa',
      'razor',
    ])
  })
})

const ARRIVAL = [
  { id: 'jeitsari', episode: 59, chapter: 121, source: 'chapter' },
  { id: 'biscuit-krueger', episode: 62, chapter: 137, source: undefined },
  { id: 'binolt', episode: 63, chapter: 138, source: undefined },
  { id: 'kosofftro', episode: 62, chapter: 132, source: 'chapter' },
  { id: 'antokiba', episode: 61, chapter: 134, source: undefined },
  { id: 'masadora', episode: 63, chapter: 140, source: undefined },
  { id: 'shiso-tree', episode: 62, chapter: 134, source: 'chapter' },
  { id: 'michael', episode: 66, chapter: 148, source: 'chapter' },
  { id: 'jitonoda', episode: 61, chapter: 129, source: 'chapter' },
  { id: 'limeiro', episode: 75, chapter: 183, source: undefined },
  { id: 'dwun', episode: 75, chapter: 184, source: undefined },
  { id: 'list', episode: 75, chapter: 184, source: 'chapter' },
  { id: 'eta', episode: 75, chapter: 184, source: 'chapter' },
  { id: 'elena', episode: 75, chapter: 184, source: 'chapter' },
]

const NAMED_CASES = gateCases(ARRIVAL, archive.series)
const OTHER_SOURCE_CASES = ARRIVAL.flatMap((record) =>
  CASES.map((row) => ({ ...record, ...row })),
).filter(({ source, unit }) => source !== undefined && source !== unit)

describe.each(NAMED_CASES)('$id arrival in $locale by $unit', (record) => {
  it('opens its record and drawing at the naming gate', () => {
    const before = readerFor(archive, record.before, record.locale)
    const reached = readerFor(archive, record.reached, record.locale)

    expect(opened(record.id, before)).toBe(false)
    expect(opened(record.id, reached)).toBe(true)
    expect(archive.bookmarks).toContainEqual(record.before)
    expect(archive.bookmarks).toContainEqual(record.reached)
  })
})

describe.each(OTHER_SOURCE_CASES)(
  '$id outside its verified medium in $locale',
  (record) => {
    it('sends neither a page nor a drawing even at the source ceiling', () => {
      const ceiling =
        record.unit === 'chapter' ?
          archive.series.chapterCeiling
        : archive.series.episodeCeiling
      const reader = readerFor(archive, at(record.unit, ceiling), record.locale)

      expect(
        characterPage(record.id, reader) ?? placePage(record.id, reader),
      ).toBeUndefined()
      expect(drawingsFor([record.id], reader)).toStrictEqual({})
    })
  },
)

describe.each(CASES)(
  'later naming gates in $locale by $unit',
  ({ locale, unit }) => {
    it.each([
      'eta',
      'elena',
      'abengane',
      'nickes',
      'jispa',
      'assam',
      'isaac',
      'nomdieu',
      'contarch',
    ])('keeps %s closed through this phase', (id) => {
      const cutoff = unit === 'chapter' ? 141 : 63
      const reader = readerFor(archive, at(unit, cutoff), locale)

      expect(opened(id, reader)).toBe(false)
    })
  },
)

describe.each(CASES)(
  'Greed Island training facts in $locale by $unit',
  ({ locale, unit }) => {
    const read = (count: number): Reader =>
      readerFor(archive, at(unit, count), locale)
    const pin = (episode: number, chapter: number): number =>
      unit === 'chapter' ? chapter : episode

    it.each(['gon-freecss', 'killua'])(
      'dates %s’s offer, training and later exercises separately',
      (id) => {
        const pupil = recordIn(archive, id)
        const offer = pin(62, 137)
        const training = pin(63, 138)
        const exercises = pin(64, 141)

        expect(factsOf(pupil, read(offer - 1)).affiliation).not.toContain(
          'Biscuit',
        )
        expect(factsOf(pupil, read(offer)).affiliation).toContain('Biscuit')
        expect(factsOf(pupil, read(training - 1)).affiliation).not.toContain(
          'Binolt',
        )
        expect(factsOf(pupil, read(training)).affiliation).toContain('Binolt')
        expect(factsOf(pupil, read(exercises - 1)).affiliation).not.toContain(
          'Ken',
        )
        expect(factsOf(pupil, read(exercises)).affiliation).toContain('Ken')

        const selected = (count: number): string[] =>
          relationshipsOf(pupil, read(count)).map(({ person }) => person.id)

        expect(selected(offer - 1)).not.toContain('biscuit-krueger')
        expect(selected(offer)).toContain('biscuit-krueger')
      },
    )

    it('dates Biscuit’s accepted teaching role after her initial offer', () => {
      const teacher = recordIn(archive, 'biscuit-krueger')
      const teaching = pin(63, 138)

      expect(factsOf(teacher, read(teaching - 1)).affiliation).toContain(
        locale === 'it' ? 'propone' : 'offers',
      )
      expect(factsOf(teacher, read(teaching)).affiliation).toContain(
        locale === 'it' ? 'maestra' : 'teacher',
      )
    })

    it.each([
      { id: 'feitan', episode: 59, chapter: 123 },
      { id: 'phinks', episode: 59, chapter: 123 },
      { id: 'shalnark', episode: 62, chapter: 134 },
      { id: 'kortopi', episode: 62, chapter: 134 },
      { id: 'shizuku', episode: 62, chapter: 134 },
    ])('dates $id’s entry into the game', ({ id, episode, chapter }) => {
      const member = recordIn(archive, id)
      const gate = pin(episode, chapter)

      expect(factsOf(member, read(gate - 1)).affiliation).not.toContain(
        'Greed Island',
      )
      expect(factsOf(member, read(gate)).affiliation).toContain('Greed Island')
    })
  },
)

describe.each(LOCALES)('Binolt’s source-specific status in %s', (locale) => {
  it.each([
    { unit: 'chapter', count: 138, status: 'captured' },
    { unit: 'chapter', count: 139, status: 'alive' },
    { unit: 'episode', count: 63, status: 'alive' },
  ])('shows $status at $unit $count', ({ unit, count, status }) => {
    const reader = readerFor(archive, at(unit, count), locale)
    const binolt = recordIn(archive, 'binolt')

    expect(archive.latestOf(reader, binolt, 'status')).toBe(status)
  })

  it('keeps Wing out of Biscuit’s earlier anime introduction', () => {
    const biscuit = recordIn(archive, 'biscuit-krueger')
    const before = readerFor(archive, at('episode', 62), locale)
    const reached = readerFor(archive, at('episode', 63), locale)
    const manga = readerFor(archive, at('chapter', 137), locale)
    const people = (reader: Reader): string[] =>
      relationshipsOf(biscuit, reader).map(({ person }) => person.id)

    expect(people(before)).toStrictEqual(['gon-freecss', 'killua'])
    expect(people(reached)).toStrictEqual(['gon-freecss', 'killua', 'wing'])
    expect(people(manga)).toStrictEqual(['gon-freecss', 'killua', 'wing'])
  })
})

type Pin = [episode: number, chapter: number, source?: 'chapter']
const FINALE_STEPS: Record<string, Pin[]> = {
  'tsezguerra': [
    [69, 160],
    [72, 170],
    [73, 174],
  ],
  'battera': [
    [72, 173],
    [73, 174],
    [74, 182],
  ],
  'biscuit-krueger': [
    [69, 160],
    [72, 170],
    [73, 177],
    [75, 185],
  ],
  'razor': [
    [69, 161],
    [71, 169],
  ],
  'genthru': [[74, 181, 'chapter']],
  'elena': [[76, 185, 'chapter']],
  'gon-freecss': [
    [69, 161],
    [74, 181, 'chapter'],
    [75, 184],
  ],
  'killua': [
    [69, 161],
    [75, 184],
  ],
  'hisoka': [[69, 161]],
}
const STEP_CASES = Object.entries(FINALE_STEPS).flatMap(([id, pins]) =>
  pins.flatMap(([episode, chapter, source]) =>
    CASES.filter((row) => source === undefined || source === row.unit).map(
      (row) => ({
        ...row,
        id,
        pin: row.unit === 'chapter' ? chapter : episode,
      }),
    ),
  ),
)

describe.each(STEP_CASES)(
  '$id’s dated step at $pin in $locale by $unit',
  ({ id, locale, pin, unit }) => {
    it('changes the affiliation only once the step is reached', () => {
      const entity = recordIn(archive, id)
      const before = factsOf(
        entity,
        readerFor(archive, at(unit, pin - 1), locale),
      )
      const reached = factsOf(entity, readerFor(archive, at(unit, pin), locale))

      expect(reached.affiliation).toBeDefined()
      expect(before.affiliation).not.toBe(reached.affiliation)
    })
  },
)

describe('the powers first shown in Greed Island', () => {
  it.each([
    // Killua's first spark, after the taser (#1329).
    { id: 'killua', episode: 59, chapter: 122 },
    // Gon's Rock shatters the boulder (#1329).
    { id: 'gon-freecss', episode: 65, chapter: 145 },
    // Razor summons his 14 Devils for the dodgeball match (#1338).
    { id: 'razor', episode: 69, chapter: 161 },
  ])('changes $id’s drawing at $episode / $chapter', (stage) => {
    expect(stageMissedAt(archive, stage.id, stage)).toStrictEqual([])
  })
})
