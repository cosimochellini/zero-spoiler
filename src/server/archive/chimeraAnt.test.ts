import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { leaksOf } from '~/test/fog'
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
  { id: 'hagya', episode: 106, chapter: 192, place: false },
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
  { id: 'meleoron', episode: 98, chapter: 241, place: false },
  { id: 'meteor-city', episode: 96, chapter: 224, place: true },
  { id: 'peijin', episode: 116, chapter: 243, place: true },
  { id: 'mandai-city', episode: 102, chapter: 243, place: true },
  { id: 'bihorn', episode: 97, chapter: 227, place: false, source: 'chapter' },
  { id: 'flutter', episode: 100, chapter: 235, place: false },
  { id: 'pell', episode: 96, chapter: 226, place: false, source: 'episode' },
  { id: 'luonton-city', episode: 100, chapter: 235, place: true },
  { id: 'komugi', episode: 103, chapter: 257, place: false },
  { id: 'remora', episode: 101, chapter: 238, place: false, source: 'chapter' },
  { id: 'tsukuma', episode: 96, chapter: 224, place: false, source: 'chapter' },
  { id: 'ikalgo', episode: 101, chapter: 238, place: false },
  { id: 'welfin', episode: 104, chapter: 246, place: false },
  { id: 'bloster', episode: 104, chapter: 246, place: false },
  { id: 'bizeff', episode: 135, chapter: 250, place: false },
]

const PHASE_FOUR: Row[] = [
  {
    id: 'taragetter',
    episode: 110,
    chapter: 261,
    place: false,
    source: 'chapter',
  },
]

const PHASE_FIVE: Row[] = [
  { id: 'ming-jol-ik', episode: 135, chapter: 315, place: false },
]

const CASES = [
  ...RECORDS,
  ...PHASE_TWO,
  ...PHASE_THREE,
  ...PHASE_FOUR,
  ...PHASE_FIVE,
].flatMap((record) =>
  LOCALES.flatMap((locale) =>
    UNITS.filter(
      (unit) => record.source === undefined || record.source === unit,
    ).map((unit) => ({ ...record, locale, unit })),
  ),
)
/** The records one medium alone names, asked in the other medium. */
const UNNAMED = [
  ...PHASE_TWO,
  ...PHASE_THREE,
  ...PHASE_FOUR,
  ...PHASE_FIVE,
].flatMap((record) =>
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
    expect(drawingsFor([row.id], reached)[row.id]?.length).toBeGreaterThan(3)
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
  { id: 'cheetu', episode: 117, chapter: 278 },
  { id: 'neferpitou', episode: 131, chapter: 307 },
  { id: 'menthuthuyoupi', episode: 133, chapter: 310 },
  { id: 'shaiapouf', episode: 135, chapter: 314 },
  { id: 'meruem', episode: 135, chapter: 318 },
  { id: 'netero', episode: 126, chapter: 298 },
  { id: 'komugi', episode: 148, chapter: 339 },
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

describe.each([
  { id: 'neferpitou', episode: 131, chapter: 307 },
  { id: 'menthuthuyoupi', episode: 133, chapter: 310 },
  { id: 'meruem', episode: 135, chapter: 318 },
  { id: 'cheetu', episode: 117, chapter: 278 },
  { id: 'netero', episode: 126, chapter: 298 },
  { id: 'komugi', episode: 148, chapter: 339 },
])('$id’s death drawing', ({ id, episode, chapter }) => {
  it.each(LOCALES)('changes at the death in %s', (locale) => {
    for (const unit of UNITS) {
      const gate = unit === 'episode' ? episode : chapter
      const read = (count: number): ReturnType<typeof drawingsFor> =>
        drawingsFor([id], readerFor(archive, at(unit, count), locale))

      expect(read(gate)[id]).toBeDefined()
      expect(read(gate)).not.toStrictEqual(read(gate - 1))
    }
  })
})

describe('the palace’s damage drawing', () => {
  // Youpi's blast takes out the foot of the central tower: ch 278, ep 117.
  it.each(LOCALES)('changes at the blast in %s', (locale) => {
    const id = 'royal-palace-of-east-gorteau'
    for (const [unit, gate] of [
      ['episode', 117],
      ['chapter', 278],
    ] as const) {
      const read = (count: number): ReturnType<typeof drawingsFor> =>
        drawingsFor([id], readerFor(archive, at(unit, count), locale))

      expect(read(gate)[id]).toBeDefined()
      expect(read(gate)).not.toStrictEqual(read(gate - 1))
    }
  })
})

describe('Chimera Ant captives', () => {
  it.each(['knuckle-bine', 'meleoron'])('gates the captivity of %s', (id) => {
    for (const locale of LOCALES) {
      for (const [unit, capture, free] of [
        ['chapter', 308, 316],
        ['episode', 132, 136],
      ] as const) {
        expect(statusAt(id, at(unit, capture - 1), locale)).toBe('alive')
        expect(statusAt(id, at(unit, capture), locale)).toBe('captured')
        expect(statusAt(id, at(unit, free - 1), locale)).toBe('captured')
        expect(statusAt(id, at(unit, free), locale)).toBe('alive')
      }
    }
  })
})

describe('Chimera Ant reincarnations', () => {
  it.each([
    { id: 'kite', chapter: 316 },
    { id: 'reina', chapter: 315 },
  ])('opens the new life of $id only at the reveal', ({ id, chapter }) => {
    for (const locale of LOCALES) {
      for (const unit of UNITS) {
        const gate = unit === 'chapter' ? chapter : 136

        expect(statusAt(id, at(unit, gate - 1), locale)).toBe('deceased')
        expect(statusAt(id, at(unit, gate), locale)).toBe('alive')
      }
    }
  })
})

describe('Chimera Ant phase four boundary', () => {
  it.each(LOCALES)(
    'keeps the phase five rescue out at the mixed episode in %s',
    (locale) => {
      const king = characterById('meruem')
      const read = (count: number): string => {
        const reader = readerFor(archive, at('episode', count), locale)
        return JSON.stringify({
          status: archive.latestOf(reader, king, 'status'),
          relationships: archive.latestOf(reader, king, 'relationships'),
          art: drawingsFor(['meruem'], reader),
        })
      }

      expect(read(127)).toStrictEqual(read(126))
    },
  )
})

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

    const drawn = (count: number): unknown => {
      const reader = readerFor(archive, at(unit, count), locale)
      return drawingsFor(['zazan'], reader)
    }

    expect(drawn(gate)).not.toStrictEqual(drawn(gate - 1))
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
      episode: 106,
      chapter: 252,
      role: { it: 'Infiltrata nel palazzo', en: 'Palace infiltrator' },
    },
    {
      id: 'palm-siberia',
      episode: 123,
      chapter: 293,
      role: {
        it: 'Hunter trasformata in formichimera',
        en: 'Hunter transformed into a Chimera Ant',
      },
    },
    {
      id: 'knov',
      episode: 120,
      chapter: 286,
      role: {
        it: 'Hunter addetto all’evacuazione',
        en: 'Hunter evacuating the wounded',
      },
    },
    {
      id: 'gon-freecss',
      episode: 136,
      chapter: 316,
      role: { it: 'Hunter ricoverato in ospedale', en: 'Hospitalized Hunter' },
    },
    {
      id: 'netero',
      episode: 135,
      chapter: 318,
      role: {
        it: 'Ex presidente dell’Associazione Hunter',
        en: 'Former Chairman of the Hunter Association',
      },
    },
    {
      id: 'kite',
      episode: 136,
      chapter: 316,
      role: {
        it: 'Hunter rinato come formichimera',
        en: 'Hunter reborn as a Chimera Ant',
      },
    },
    {
      id: 'gon-freecss',
      episode: 131,
      chapter: 306,
      role: {
        it: 'Hunter trasformato dal Nen',
        en: 'Hunter transformed by Nen',
      },
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

  it.each(LOCALES)(
    'changes Pike’s status and art at chapter 228 in %s',
    (locale) => {
      const pike = characterById('pike')
      const before = readerFor(archive, at('chapter', 227), locale)
      const reached = readerFor(archive, at('chapter', 228), locale)

      expect(archive.latestOf(before, pike, 'status')).toBe('alive')
      expect(archive.latestOf(reached, pike, 'status')).toBe('deceased')
      expect(drawingsFor(['pike'], reached)['pike']).not.toStrictEqual(
        drawingsFor(['pike'], before)['pike'],
      )
    },
  )

  it.each(LOCALES)('dates Leol’s name and death in %s', (locale) => {
    const hagya = characterById('hagya')
    const read = (chapter: number): Reader =>
      readerFor(archive, at('chapter', chapter), locale)
    const before = read(253)
    const reached = read(254)

    expect(archive.latestOf(read(239), hagya, 'role')?.[locale]).not.toContain(
      'Leol',
    )
    expect(archive.latestOf(read(240), hagya, 'role')?.[locale]).toContain(
      'Leol',
    )
    expect(archive.latestOf(before, hagya, 'status')).toBe('alive')
    expect(archive.latestOf(reached, hagya, 'status')).toBe('deceased')
    expect(drawingsFor(['hagya'], reached)['hagya']).not.toStrictEqual(
      drawingsFor(['hagya'], before)['hagya'],
    )
  })

  it.each(LOCALES)('dates Leol’s death in the anime in %s', (locale) => {
    const before = readerFor(archive, at('episode', 106), locale)
    const reached = readerFor(archive, at('episode', 107), locale)
    const leol = characterById('hagya')

    expect(archive.latestOf(before, leol, 'status')).toBe('alive')
    expect(archive.latestOf(reached, leol, 'status')).toBe('deceased')
    expect(drawingsFor(['hagya'], reached)['hagya']).not.toStrictEqual(
      drawingsFor(['hagya'], before)['hagya'],
    )
  })

  it('stores the chapter the manga names Leol, 240', () => {
    expect(characterById('hagya').episodeName?.chapter).toBe(240)
  })

  it('holds Leol as fog in a payload until each reader reaches it', () => {
    const leaks = leaksOf(series)
    const payload = { name: 'Leol' }

    expect(leaks(payload, at('chapter', 239))).toContain('hagya')
    expect(leaks(payload, at('chapter', 240))).toStrictEqual([])
    expect(leaks(payload, at('episode', 105))).toContain('hagya')
    expect(leaks(payload, at('episode', 106))).toStrictEqual([])
  })

  it.each(LOCALES)('uses the name told by each medium in %s', (locale) => {
    const anime = readerFor(archive, at('episode', 106), locale)
    const manga = readerFor(archive, at('chapter', 192), locale)

    expect(anime.archive.getCharacter('hagya')?.name[locale]).toBe('Leol')
    expect(
      anime.archive.characters.find(({ id }) => id === 'hagya')?.name[locale],
    ).toBe('Leol')
    expect(
      anime.archive.bookSections
        .flatMap(({ characters }) => characters)
        .find(({ id }) => id === 'hagya')?.name[locale],
    ).toBe('Leol')
    expect(manga.archive.getCharacter('hagya')?.name[locale]).toBe('Hagya')
    expect(
      readerFor(archive, at('chapter', 254), locale).archive.getCharacter(
        'hagya',
      )?.name[locale],
    ).toBe('Hagya')
    // Neither copy carries the other medium's name.
    expect(manga.archive.getCharacter('hagya')).not.toHaveProperty(
      'episodeName',
    )
    expect(anime.archive.getCharacter('hagya')).not.toHaveProperty(
      'episodeName',
    )
  })

  it.each(['gon-freecss', 'killua'])(
    'dates the operation assignment for %s',
    (id) => {
      const character = characterById(id)
      for (const locale of LOCALES) {
        for (const [unit, gate] of [
          ['episode', 95],
          ['chapter', 223],
        ] as const) {
          const read = (count: number): string | undefined =>
            archive.latestOf(
              readerFor(archive, at(unit, count), locale),
              character,
              'affiliation',
            )?.[locale]

          expect(read(gate - 1)).not.toMatch(/Neferpit/u)
          expect(read(gate)).toMatch(/Neferpit/u)
        }
      }
    },
  )

  it.each([
    {
      id: 'morel-mackernasey',
      field: 'affiliation',
      episode: 95,
      chapter: 223,
    },
    { id: 'knuckle-bine', field: 'affiliation', episode: 95, chapter: 223 },
    { id: 'shoot-mcmahon', field: 'affiliation', episode: 95, chapter: 223 },
    { id: 'cheetu', field: 'affiliation', episode: 100, chapter: 235 },
    {
      id: 'palm-siberia',
      field: 'affiliation',
      episode: 95,
      chapter: 223,
      source: 'chapter',
    },
    { id: 'cheetu', field: 'role', episode: 100, chapter: 235 },
    { id: 'ikalgo', field: 'affiliation', episode: 107, chapter: 255 },
    { id: 'ikalgo', field: 'role', episode: 107, chapter: 255 },
    { id: 'kite', field: 'role', episode: 93, chapter: 217 },
    { id: 'meleoron', field: 'role', episode: 100, chapter: 241 },
    { id: 'ikalgo', field: 'affiliation', episode: 101, chapter: 241 },
    ...[214, 216, 234].map((chapter) => ({
      id: 'hagya',
      field: 'affiliation' as const,
      episode: 106,
      chapter,
      source: 'chapter' as const,
    })),
    { id: 'netero', field: 'affiliation', episode: 95, chapter: 223 },
    { id: 'knov', field: 'affiliation', episode: 95, chapter: 223 },
  ] as const)('dates the $field step of $id at its scene', (row) => {
    const character = characterById(row.id)
    // A one-source step is asked in its own unit only.
    const gates = (
      [
        ['episode', row.episode],
        ['chapter', row.chapter],
      ] as const
    ).filter(([unit]) => !('source' in row) || row.source === unit)
    for (const locale of LOCALES) {
      for (const [unit, gate] of gates) {
        const read = (count: number): string | undefined =>
          archive.latestOf(
            readerFor(archive, at(unit, count), locale),
            character,
            row.field,
          )?.[locale]

        expect(read(gate), `${unit} ${String(gate)}`).not.toBe(read(gate - 1))
      }
    }
  })

  it.each([
    { id: 'morel-mackernasey', episode: 107, chapter: 254 },
    { id: 'meruem', episode: 103, chapter: 257 },
    { id: 'meruem', episode: 108, chapter: 258 },
    { id: 'neferpitou', episode: 109, chapter: 259 },
    { id: 'flutter', episode: 100, chapter: 235, source: 'chapter' },
    { id: 'flutter', episode: 101, chapter: 238 },
    { id: 'flutter', episode: 106, chapter: 252, source: 'episode' },
    { id: 'ikalgo', episode: 101, chapter: 241 },
    { id: 'ikalgo', episode: 107, chapter: 255 },
    { id: 'meleoron', episode: 100, chapter: 241, source: 'episode' },
    { id: 'meleoron', episode: 102, chapter: 242 },
    { id: 'morel-mackernasey', episode: 121, chapter: 289 },
    { id: 'knuckle-bine', episode: 121, chapter: 289 },
    { id: 'menthuthuyoupi', episode: 121, chapter: 289 },
    { id: 'ikalgo', episode: 119, chapter: 283 },
    { id: 'ikalgo', episode: 123, chapter: 296 },
    { id: 'palm-siberia', episode: 124, chapter: 294 },
    { id: 'netero', episode: 126, chapter: 298 },
    { id: 'meruem', episode: 126, chapter: 298 },
    { id: 'gyro', episode: 123, chapter: 296 },
    { id: 'meruem', episode: 128, chapter: 299 },
    { id: 'meruem', episode: 135, chapter: 318 },
    { id: 'komugi', episode: 135, chapter: 318 },
  ] as const)(
    'changes the relationships of $id at $episode / $chapter',
    (row) => {
      const character = characterById(row.id)
      // A one-source step is asked in its own unit only.
      const gates = (
        [
          ['episode', row.episode],
          ['chapter', row.chapter],
        ] as const
      ).filter(([unit]) => !('source' in row) || row.source === unit)
      for (const locale of LOCALES) {
        for (const [unit, gate] of gates) {
          const read = (count: number): string => {
            const reader = readerFor(archive, at(unit, count), locale)
            const value = archive.latestOf(reader, character, 'relationships')
            return JSON.stringify(value ?? [])
          }

          expect(read(gate), `${unit} ${String(gate)}`).not.toBe(read(gate - 1))
        }
      }
    },
  )

  it.each(LOCALES)(
    'adds Peggy to Meleoron’s relationships at chapter 242 in %s',
    (locale) => {
      const meleoron = characterById('meleoron')
      const read = (chapter: number): string[] =>
        (
          archive.latestOf(
            readerFor(archive, at('chapter', chapter), locale),
            meleoron,
            'relationships',
          ) ?? []
        ).map(({ character }) => character)

      expect(read(241)).not.toContain('peggy')
      expect(read(242)).toContain('peggy')
    },
  )

  it.each(LOCALES)('opens Pell already dead in %s', (locale) => {
    const reader = readerFor(archive, at('episode', 96), locale)

    expect(archive.latestOf(reader, characterById('pell'), 'status')).toBe(
      'deceased',
    )
  })

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
      'ikalgo',
      'welfin',
      'shaiapouf',
      'menthuthuyoupi',
    ])
  })
})
