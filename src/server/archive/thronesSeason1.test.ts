import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/series/game-of-thrones/art'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'
import { LOADED_SERIES } from '~/test/series'

import { homePage } from './home.server'
import { onboardingPage } from './onboarding.server'
import { characterPage } from './pages.server'
import { drawingOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 1 tests require Game of Thrones')
}
const { archive } = series

/** Each record's gate in each medium, as filed (#852); `source` for one medium. */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'episode'
}[] = [
  { id: 'eddard-stark', episode: 1, chapter: 2 },
  { id: 'catelyn-stark', episode: 1, chapter: 3 },
  { id: 'robb-stark', episode: 1, chapter: 2 },
  { id: 'sansa-stark', episode: 1, chapter: 5 },
  { id: 'arya-stark', episode: 1, chapter: 5 },
  { id: 'bran-stark', episode: 1, chapter: 2 },
  { id: 'rickon-stark', episode: 1, chapter: 5 },
  { id: 'jon-snow', episode: 1, chapter: 2 },
  { id: 'benjen-stark', episode: 1, chapter: 6 },
  { id: 'grey-wind', episode: 8, chapter: 11 },
  { id: 'lady-direwolf', episode: 1, chapter: 16 },
  { id: 'nymeria', episode: 2, chapter: 8 },
  { id: 'summer-direwolf', episode: 4, chapter: 18 },
  { id: 'shaggydog', episode: 10, chapter: 25 },
  { id: 'ghost-direwolf', episode: 4, chapter: 6 },
  { id: 'theon-greyjoy', episode: 1, chapter: 2 },
  { id: 'luwin', episode: 1, chapter: 7 },
  { id: 'rodrik-cassel', episode: 1, chapter: 8 },
  { id: 'old-nan', episode: 3, chapter: 15 },
  { id: 'hodor', episode: 4, chapter: 25 },
  { id: 'osha', episode: 6, chapter: 38 },
  { id: 'mordane', episode: 1, chapter: 8 },
  { id: 'jory-cassel', episode: 1, chapter: 2 },
  { id: 'jeor-mormont', episode: 3, chapter: 20 },
  { id: 'aemon', episode: 3, chapter: 22 },
  { id: 'samwell-tarly', episode: 4, chapter: 27 },
  { id: 'alliser-thorne', episode: 3, chapter: 20 },
  { id: 'yoren', episode: 3, chapter: 14 },
  { id: 'cersei-lannister', episode: 1, chapter: 5 },
  { id: 'jaime-lannister', episode: 1, chapter: 5 },
  { id: 'tyrion-lannister', episode: 1, chapter: 5 },
  { id: 'tywin-lannister', episode: 7, chapter: 57 },
  { id: 'joffrey-baratheon', episode: 1, chapter: 5 },
  { id: 'myrcella-baratheon', episode: 1, chapter: 6 },
  { id: 'tommen-baratheon', episode: 1, chapter: 6 },
  { id: 'robert-baratheon', episode: 1, chapter: 5 },
  { id: 'renly-baratheon', episode: 3, chapter: 16 },
  { id: 'lysa-arryn', episode: 5, chapter: 35 },
  { id: 'robin-arryn', episode: 5, chapter: 35 },
  { id: 'bronn', episode: 4, chapter: 32 },
  { id: 'shae', episode: 9, chapter: 63 },
  { id: 'walder-frey', episode: 9, chapter: 60 },
  { id: 'ros', episode: 4, chapter: 25, source: 'episode' },
  { id: 'ilyn-payne', episode: 2, chapter: 16 },
  { id: 'barristan-selmy', episode: 3, chapter: 16 },
  { id: 'syrio-forel', episode: 3, chapter: 23 },
  { id: 'petyr-baelish', episode: 3, chapter: 19 },
  { id: 'varys', episode: 3, chapter: 19 },
  { id: 'pycelle', episode: 3, chapter: 21 },
  { id: 'sandor-clegane', episode: 4, chapter: 5 },
  { id: 'janos-slynt', episode: 4, chapter: 28 },
  { id: 'gendry', episode: 4, chapter: 28 },
  { id: 'gregor-clegane', episode: 4, chapter: 30 },
  { id: 'loras-tyrell', episode: 5, chapter: 30 },
  { id: 'daenerys-targaryen', episode: 1, chapter: 4 },
  { id: 'viserys-targaryen', episode: 1, chapter: 4 },
  { id: 'drogo', episode: 1, chapter: 4 },
  { id: 'jorah-mormont', episode: 1, chapter: 4 },
  { id: 'illyrio-mopatis', episode: 1, chapter: 4 },
  { id: 'irri', episode: 2, chapter: 12 },
  { id: 'doreah', episode: 2, chapter: 12 },
  { id: 'rakharo', episode: 3, chapter: 24 },
  { id: 'mirri-maz-duur', episode: 8, chapter: 62 },
]

/** Every status change within season 1 / *A Game of Thrones*, pinned in both media. */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  value: CharacterStatus
}[] = [
  { id: 'eddard-stark', episode: 7, chapter: 50, value: 'captured' },
  { id: 'eddard-stark', episode: 9, chapter: 66, value: 'deceased' },
  { id: 'sansa-stark', episode: 8, chapter: 52, value: 'captured' },
  { id: 'lady-direwolf', episode: 2, chapter: 17, value: 'deceased' },
  { id: 'mordane', episode: 10, chapter: 68, value: 'deceased' },
  { id: 'jory-cassel', episode: 5, chapter: 36, value: 'deceased' },
  { id: 'robert-baratheon', episode: 7, chapter: 50, value: 'deceased' },
  { id: 'tyrion-lannister', episode: 4, chapter: 29, value: 'captured' },
  { id: 'tyrion-lannister', episode: 6, chapter: 41, value: 'alive' },
  { id: 'jaime-lannister', episode: 9, chapter: 64, value: 'captured' },
  { id: 'viserys-targaryen', episode: 6, chapter: 47, value: 'deceased' },
  { id: 'drogo', episode: 10, chapter: 69, value: 'deceased' },
  { id: 'mirri-maz-duur', episode: 10, chapter: 73, value: 'deceased' },
]

/**
 * Every role and affiliation step after the first, pinned in both media, by
 * its English text; `source` for a step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { chapter: 7, en: 'Hand of the King', episode: 2, id: 'eddard-stark' },
  {
    chapter: 21,
    en: 'House Stark, small council',
    episode: 3,
    id: 'eddard-stark',
  },
  { chapter: 72, en: 'King in the North', episode: 10, id: 'robb-stark' },
  {
    chapter: 20,
    en: 'Recruit of the Night’s Watch',
    episode: 3,
    id: 'jon-snow',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch, steward to the Lord Commander',
    episode: 7,
    id: 'jon-snow',
  },
  { chapter: 20, en: 'Night’s Watch', episode: 3, id: 'jon-snow' },
  {
    chapter: 56,
    en: 'Castellan of Winterfell',
    episode: 8,
    id: 'rodrik-cassel',
    source: 'chapter',
  },
  { chapter: 54, en: 'Captive servant at Winterfell', episode: 7, id: 'osha' },
  { chapter: 54, en: 'Winterfell, captive', episode: 7, id: 'osha' },
  {
    chapter: 49,
    en: 'Steward to Maester Aemon',
    episode: 7,
    id: 'samwell-tarly',
  },
  {
    chapter: 50,
    en: 'Queen, mother of the new king',
    episode: 7,
    id: 'cersei-lannister',
  },
  {
    chapter: 58,
    en: 'Lord Commander of the Kingsguard',
    episode: 8,
    id: 'jaime-lannister',
  },
  {
    chapter: 70,
    en: 'Acting Hand of the King',
    episode: 10,
    id: 'tyrion-lannister',
  },
  { chapter: 58, en: 'Hand of the King', episode: 10, id: 'tywin-lannister' },
  {
    chapter: 50,
    en: 'King of the Seven Kingdoms',
    episode: 7,
    id: 'joffrey-baratheon',
  },
  {
    chapter: 50,
    en: 'The late king’s brother, fled from King’s Landing',
    episode: 7,
    id: 'renly-baratheon',
  },
  {
    chapter: 70,
    en: 'Claimant to the Iron Throne',
    episode: 10,
    id: 'renly-baratheon',
  },
  { chapter: 41, en: 'Tyrion’s sellsword', episode: 6, id: 'bronn' },
  { chapter: 41, en: 'House Lannister', episode: 6, id: 'bronn' },
  {
    chapter: 48,
    en: 'Littlefinger’s brothel',
    episode: 7,
    id: 'ros',
    source: 'episode',
  },
  {
    chapter: 58,
    en: 'Knight dismissed from the Kingsguard',
    episode: 8,
    id: 'barristan-selmy',
  },
  {
    chapter: 58,
    en: 'Formerly of the Kingsguard',
    episode: 8,
    id: 'barristan-selmy',
  },
  {
    chapter: 58,
    en: 'Member of the Kingsguard',
    episode: 8,
    id: 'sandor-clegane',
  },
  { chapter: 58, en: 'Kingsguard', episode: 8, id: 'sandor-clegane' },
  {
    chapter: 58,
    en: 'Lord of Harrenhal, commander of the City Watch',
    episode: 8,
    id: 'janos-slynt',
  },
  {
    chapter: 66,
    en: 'Night’s Watch recruit',
    episode: 10,
    id: 'gendry',
    source: 'episode',
  },
  {
    chapter: 66,
    en: 'Night’s Watch recruits',
    episode: 10,
    id: 'gendry',
    source: 'episode',
  },
  {
    chapter: 44,
    en: 'Knight stripped of his lands and titles by the Hand',
    episode: 6,
    id: 'gregor-clegane',
  },
  {
    chapter: 12,
    en: 'Khaleesi, Drogo’s wife',
    episode: 2,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 73,
    en: 'Khaleesi at the head of her own khalasar',
    episode: 10,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 12,
    en: 'House Targaryen, Drogo’s khalasar',
    episode: 2,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 73,
    en: 'House Targaryen, her own khalasar',
    episode: 10,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 73,
    en: 'Daenerys’s bloodrider',
    episode: 10,
    id: 'rakharo',
    source: 'chapter',
  },
  { chapter: 73, en: 'Daenerys’s khalasar', episode: 10, id: 'rakharo' },
]

type Unit = 'chapter' | 'episode'
const UNITS: Unit[] = ['episode', 'chapter']

function at(unit: Unit, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

/** A reader at this count of this unit, in this locale. */
function reader(unit: Unit, count: number, locale: Locale = 'en'): Reader {
  return readerFor(archive, at(unit, count), locale)
}

/** Each record in each locale and in each unit that tells it, at its gate. */
const GATES = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    UNITS.filter((unit) => (record.source ?? unit) === unit).map((unit) => ({
      id: record.id,
      gate: unit === 'chapter' ? record.chapter : record.episode,
      locale,
      unit,
    })),
  ),
)

const byText = (a: string, b: string): number => a.localeCompare(b)

function opened(id: string, view: Reader): boolean {
  const page = characterPage(id, view)
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

function character(id: string): Entity {
  const record = archive.getCharacter(id)
  if (record === undefined) {
    throw new Error(`Missing ${id} fixture`)
  }
  return record
}

describe('the first season’s cast', () => {
  it('files exactly these records', () => {
    expect(archive.entities.map(({ id }) => id).toSorted(byText)).toStrictEqual(
      RECORDS.map(({ id }) => id).toSorted(byText),
    )
  })

  it.each(GATES)(
    'opens $id at its named scene by $unit in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate, locale))).toBe(true)
    },
  )

  // Gate 1 has no bookmark below it: nothing is read before episode 1.
  it.each(GATES.filter(({ gate }) => gate > 1))(
    'keeps $id closed one $unit before it in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate - 1, locale))).toBe(false)
    },
  )

  it.each(RECORDS.filter(({ source }) => source !== undefined))(
    'never opens the show-only $id to a reader of the books',
    ({ id }) => {
      const last = reader('chapter', archive.series.chapterCeiling)

      expect(opened(id, last)).toBe(false)
    },
  )
})

describe.each(
  CHANGES.flatMap((change) => UNITS.map((unit) => ({ ...change, unit }))),
)('$id becomes $value by $unit', ({ id, episode, chapter, value, unit }) => {
  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode
    const owner = character(id)
    const before = reader(unit, pin - 1)
    const reached = reader(unit, pin)

    expect(archive.latestOf(before, owner, 'status')).not.toBe(value)
    expect(archive.latestOf(reached, owner, 'status')).toBe(value)
  })
})

describe.each(
  STEPS.flatMap((step) =>
    UNITS.filter((unit) => (step.source ?? unit) === unit).map((unit) => ({
      ...step,
      unit,
    })),
  ),
)('$id: “$en” by $unit', ({ id, en, episode, chapter, unit }) => {
  // A page names a role or an affiliation as a whole string of its own.
  const shown = (count: number): boolean =>
    JSON.stringify(characterPage(id, reader(unit, count)) ?? null).includes(
      JSON.stringify(en),
    )

  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode

    expect(shown(pin - 1)).toBe(false)
    expect(shown(pin)).toBe(true)
  })
})

describe('the steps one medium alone tells', () => {
  it.each(STEPS.filter(({ source }) => source !== undefined))(
    'never shows “$en” to a reader of the other medium',
    ({ id, en, source }) => {
      const other: Unit = source === 'chapter' ? 'episode' : 'chapter'
      const last =
        other === 'chapter' ?
          archive.series.chapterCeiling
        : archive.series.episodeCeiling
      const page = JSON.stringify(
        characterPage(id, reader(other, last)) ?? null,
      )

      expect(page).not.toContain(JSON.stringify(en))
    },
  )
})

describe('the season’s leads', () => {
  it.each(UNITS)('heads the home page by %s with the main cast', (unit) => {
    const page = homePage(reader(unit, 10))

    expect(JSON.stringify(page)).toContain('Eddard Stark')
    expect(archive.leads['season-1']).toStrictEqual([
      'eddard-stark',
      'jon-snow',
      'daenerys-targaryen',
      'tyrion-lannister',
      'arya-stark',
    ])
  })
})

/** The five leads, in the order the demo's cast shows them. */
const CAST = [
  'eddard-stark',
  'jon-snow',
  'daenerys-targaryen',
  'tyrion-lannister',
  'arya-stark',
]

describe('the first season’s demo', () => {
  it('gives a new visitor the season and its five leads, with no places and no tail', () => {
    const demo = onboardingPage(null, readerFor(archive, null, 'en'))

    expect(demo.arcs.map(({ id }) => id)).toStrictEqual(['season-1'])
    expect(demo.cast.map(({ id }) => id)).toStrictEqual(CAST)
    expect(demo.places).toStrictEqual([])
    expect(demo.tail).toStrictEqual([])
    // Ros is the show's alone, so the two-unit demo cannot carry her.
    expect(JSON.stringify(demo)).not.toContain('"ros"')
  })
})

// Beheaded with Ice in "Baelor" (episode 9) and in Arya V (chapter 66).
describe.each([
  { unit: 'episode' as const, pin: 9 },
  { unit: 'chapter' as const, pin: 66 },
])('Eddard Stark’s death stage by $unit', ({ unit, pin }) => {
  const [stage] = REDRAWINGS['eddard-stark'] ?? []
  const ned = character('eddard-stark')

  it('keeps Ice standing one before the pin', () => {
    expect(drawingOf(ned, reader(unit, pin - 1)).strokes).toStrictEqual(
      DRAWINGS['eddard-stark'],
    )
  })

  it('lays Ice down at the pin', () => {
    expect(stage).toBeDefined()
    expect(drawingOf(ned, reader(unit, pin)).strokes).toStrictEqual(
      stage?.value,
    )
  })
})
