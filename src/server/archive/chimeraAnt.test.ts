import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { type Reader, readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Chimera Ant tests require Hunter x Hunter')
}
const { archive } = series

function characterById(
  id: string,
): NonNullable<ReturnType<typeof archive.getCharacter>> {
  const character = archive.getCharacter(id)
  if (character === undefined) {
    throw new Error(`Missing character ${id}`)
  }
  return character
}
interface Row {
  chapter: number
  episode: number
  id: string
  place: boolean
  source?: 'chapter' | 'episode'
}

const RECORDS: Row[] = [
  { id: 'spinner-clow', episode: 77, chapter: 186, place: false },
  { id: 'banana-kavaro', episode: 77, chapter: 186, place: false },
  { id: 'monta-yuras', episode: 77, chapter: 186, place: false },
  { id: 'stick-dinner', episode: 77, chapter: 186, place: false },
  { id: 'ngl', episode: 79, chapter: 189, place: true },
  { id: 'neferpitou', episode: 84, chapter: 198, place: false },
]
/**
 * Chimera Ant phase 2 (#1021): every record at the first chapter and episode
 * whose synopsis names it. A record one medium alone names opens only for
 * that medium's readers; its other number only orders it.
 */
const PHASE_TWO: Row[] = [
  { id: 'lin-koshi', episode: 77, chapter: 186, place: false },
  { id: 'podungo-lapoy', episode: 77, chapter: 186, place: false },
  { id: 'wong', episode: 77, chapter: 187, place: false, source: 'episode' },
  { id: 'kurt', episode: 77, chapter: 187, place: false, source: 'episode' },
  { id: 'haruna', episode: 77, chapter: 187, place: false, source: 'episode' },
  { id: 'gyro', episode: 78, chapter: 203, place: false },
  { id: 'pekuba', episode: 79, chapter: 189, place: false, source: 'episode' },
  { id: 'reina', episode: 80, chapter: 189, place: false },
  { id: 'balda', episode: 80, chapter: 190, place: false },
  { id: 'peggy', episode: 79, chapter: 189, place: false, source: 'chapter' },
  { id: 'zazan', episode: 84, chapter: 189, place: false },
  { id: 'pike', episode: 80, chapter: 190, place: false, source: 'chapter' },
  { id: 'cheetu', episode: 79, chapter: 192, place: false },
  { id: 'rammot', episode: 79, chapter: 192, place: false },
  { id: 'hagya', episode: 81, chapter: 192, place: false, source: 'chapter' },
  { id: 'yunju', episode: 79, chapter: 193, place: false },
  { id: 'baro', episode: 83, chapter: 195, place: false, source: 'chapter' },
  { id: 'morel-mackernasey', episode: 86, chapter: 199, place: false },
  { id: 'palm-siberia', episode: 86, chapter: 200, place: false },
  { id: 'knov', episode: 86, chapter: 200, place: false },
  { id: 'knuckle-bine', episode: 86, chapter: 200, place: false },
  { id: 'shoot-mcmahon', episode: 86, chapter: 200, place: false },
  { id: 'shaiapouf', episode: 86, chapter: 202, place: false },
  { id: 'menthuthuyoupi', episode: 86, chapter: 202, place: false },
  { id: 'baital', episode: 88, chapter: 205, place: false, source: 'chapter' },
  { id: 'colt', episode: 92, chapter: 214, place: false },
  { id: 'meruem', episode: 92, chapter: 215, place: false },
  { id: 'dr-lee', episode: 92, chapter: 215, place: false, source: 'chapter' },
  { id: 'chimera-ant-nest', episode: 78, chapter: 188, place: true },
  { id: 'd2-manufacturing-plant', episode: 82, chapter: 192, place: true },
  { id: 'republic-of-east-gorteau', episode: 92, chapter: 216, place: true },
  {
    id: 'royal-palace-of-east-gorteau',
    episode: 93,
    chapter: 216,
    place: true,
  },
  {
    id: 'republic-of-rokario',
    episode: 93,
    chapter: 218,
    place: true,
    source: 'chapter',
  },
  {
    id: 'doli-city',
    episode: 93,
    chapter: 218,
    place: true,
    source: 'chapter',
  },
  {
    id: 'pata-city',
    episode: 93,
    chapter: 218,
    place: true,
    source: 'chapter',
  },
  {
    id: 'tri-orb-hotel',
    episode: 94,
    chapter: 220,
    place: true,
    source: 'chapter',
  },
]
const UNITS = ['episode', 'chapter'] as const
const PHASE_THREE: Row[] = [
  { id: 'meteor-city', episode: 24, chapter: 102, place: true },
  { id: 'peijin', episode: 102, chapter: 243, place: true, source: 'chapter' },
  { id: 'mandai-city', episode: 102, chapter: 243, place: true },
  { id: 'bihorn', episode: 97, chapter: 227, place: false, source: 'chapter' },
  { id: 'flutter', episode: 100, chapter: 235, place: false },
  { id: 'pell', episode: 96, chapter: 226, place: false, source: 'episode' },
  { id: 'luonton-city', episode: 100, chapter: 235, place: true },
  { id: 'komugi', episode: 103, chapter: 257, place: false },
  { id: 'remora', episode: 101, chapter: 238, place: false },
  { id: 'tsukuma', episode: 96, chapter: 224, place: false, source: 'chapter' },
]

const CASES = [...RECORDS, ...PHASE_TWO, ...PHASE_THREE].flatMap((record) =>
  LOCALES.flatMap((locale) =>
    UNITS.filter(
      (unit) => record.source === undefined || record.source === unit,
    ).map((unit) => ({ ...record, locale, unit })),
  ),
)
/** The records one medium alone names, asked in the other medium. */
const UNNAMED = [...PHASE_TWO, ...PHASE_THREE].flatMap((record) =>
  record.source === undefined ?
    []
  : LOCALES.map((locale) => ({
      ...record,
      locale,
      unit: record.source === 'chapter' ? 'episode' : 'chapter',
    })),
)

function at(unit: string, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

function opened(id: string, place: boolean, reader: Reader): boolean {
  const page = place ? placePage(id, reader) : characterPage(id, reader)
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

describe.each(CASES)('$id in $locale by $unit', (row) => {
  it('opens the record and drawing at its named scene, never before', () => {
    const threshold = row.unit === 'chapter' ? row.chapter : row.episode
    const before = readerFor(archive, at(row.unit, threshold - 1), row.locale)
    const reached = readerFor(archive, at(row.unit, threshold), row.locale)

    expect(opened(row.id, row.place, before)).toBe(false)
    expect(drawingsFor([row.id], before)).toStrictEqual({})

    expect(opened(row.id, row.place, reached)).toBe(true)
    expect(drawingsFor([row.id], reached)[row.id]?.length).toBeGreaterThan(0)
  })
})

describe.each(UNNAMED)('$id in $locale by $unit', (row) => {
  it('never opens for a reader of the medium that does not name it', () => {
    const far = row.unit === 'chapter' ? 340 : 148
    const reader = readerFor(archive, at(row.unit, far), row.locale)

    expect(opened(row.id, row.place, reader)).toBe(false)
    expect(drawingsFor([row.id], reader)).toStrictEqual({})
  })
})

/** A character's status as a reader at a bookmark sees it. */
function statusAt(
  id: string,
  bookmark: Bookmark,
  locale: (typeof LOCALES)[number],
): string | undefined {
  return archive.latestOf(
    readerFor(archive, bookmark, locale),
    characterById(id),
    'status',
  )
}

/** A death filed after its record opens: the status turns at its pin. */
const DEATHS = [
  { id: 'kite', episode: 85, chapter: 199 },
  { id: 'ponzu', episode: 80, chapter: 190 },
  { id: 'pokkle', episode: undefined, chapter: 198 },
  { id: 'pekuba', episode: 80, chapter: undefined },
  { id: 'yunju', episode: 82, chapter: undefined },
  { id: 'peggy', episode: undefined, chapter: 213 },
  { id: 'rammot', episode: 94, chapter: 219 },
].flatMap(({ id, episode, chapter }) =>
  [
    { unit: 'episode' as const, gate: episode },
    { unit: 'chapter' as const, gate: chapter },
  ].flatMap(({ unit, gate }) =>
    gate === undefined ?
      []
    : LOCALES.map((locale) => ({ id, unit, gate, locale })),
  ),
)

describe.each(DEATHS)(
  '$id in $locale by $unit',
  ({ id, unit, gate, locale }) => {
    it('dies at the pin that tells it, never before', () => {
      expect(statusAt(id, at(unit, gate - 1), locale)).not.toBe('deceased')
      expect(statusAt(id, at(unit, gate), locale)).toBe('deceased')
    })
  },
)

describe('Chimera Ant dated facts', () => {
  it.each(
    CASES.filter(
      ({ id, place }) => !place && RECORDS.some((record) => record.id === id),
    ),
  )(
    'opens the relationship with Kite for $id in $locale by $unit',
    ({ id, locale, unit, episode, chapter }) => {
      const character = characterById(id)
      const episodeGate = id === 'neferpitou' ? 85 : episode
      // Neferpitou's row with Kite opens at the kill, chapter 199.
      const chapterGate = id === 'neferpitou' ? 199 : chapter
      const gate = unit === 'chapter' ? chapterGate : episodeGate
      const related = (count: number): boolean =>
        relationshipsOf(
          character,
          readerFor(archive, at(unit, count), locale),
        ).some(({ person }) => person.id === 'kite')

      expect(related(gate - 1)).toBe(false)
      expect(related(gate)).toBe(true)
    },
  )

  it.each(
    LOCALES.flatMap((locale) => [
      { locale, unit: 'episode', gate: 77 },
      { locale, unit: 'chapter', gate: 186 },
    ]),
  )(
    'dates Kite’s survey affiliation in $locale by $unit',
    ({ locale, unit, gate }) => {
      const kite = characterById('kite')
      const affiliation = (count: number): string | undefined =>
        archive.latestOf(
          readerFor(archive, at(unit, count), locale),
          kite,
          'affiliation',
        )?.[locale]

      expect(affiliation(gate - 1)).not.toMatch(/ricerca|survey/u)
      expect(affiliation(gate)).toMatch(/ricerca|survey/u)
    },
  )

  it.each(
    LOCALES.flatMap((locale) => [
      { locale, unit: 'episode', gate: 97 },
      { locale, unit: 'chapter', gate: 229 },
    ]),
  )('dates Zazan’s death in $locale by $unit', ({ locale, unit, gate }) => {
    const zazan = characterById('zazan')
    const status = (count: number): string | undefined =>
      archive.latestOf(
        readerFor(archive, at(unit, count), locale),
        zazan,
        'status',
      )

    expect(status(gate - 1)).toBe('alive')
    expect(status(gate)).toBe('deceased')
  })

  it.each([
    {
      id: 'knov',
      episode: 106,
      chapter: 251,
      role: {
        it: 'Hunter ritirato dall’assalto',
        en: 'Hunter withdrawn from the assault',
      },
    },
    {
      id: 'palm-siberia',
      episode: 107,
      chapter: 254,
      role: { it: 'Infiltrata nel palazzo', en: 'Palace infiltrator' },
    },
  ])(
    'reveals the changed role for $id at its scene',
    ({ id, episode, chapter, role }) => {
      const character = characterById(id)
      for (const locale of LOCALES) {
        for (const unit of ['episode', 'chapter'] as const) {
          const gate = unit === 'episode' ? episode : chapter
          const read = (count: number): string | undefined =>
            archive.latestOf(
              readerFor(archive, at(unit, count), locale),
              character,
              'role',
            )?.[locale]

          expect(read(gate - 1)).not.toBe(role[locale])
          expect(read(gate)).toBe(role[locale])
        }
      }
    },
  )

  it('lists the Chimera Ant arc leads', () => {
    expect(archive.leads['chimera-ant-arc']).toStrictEqual([
      'kite',
      'gon-freecss',
      'killua',
      'neferpitou',
      'netero',
      'knov',
      'morel-mackernasey',
      'palm-siberia',
      'knuckle-bine',
      'shoot-mcmahon',
      'colt',
      'meruem',
      'komugi',
      'shaiapouf',
      'menthuthuyoupi',
    ])
  })
})
