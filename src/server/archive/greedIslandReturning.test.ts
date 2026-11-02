import { describe, expect, it } from 'vitest'

import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'
import { relationshipsOf } from './relationships.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Returning Greed Island tests require Hunter x Hunter')
}
const { archive } = series
const CASES = LOCALES.flatMap((locale) =>
  (['episode', 'chapter'] as const).map((unit) => ({ locale, unit })),
)

function at(unit: 'chapter' | 'episode', count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

function character(id: string): Entity {
  const record = archive.getCharacter(id)
  if (record === undefined) {
    throw new Error(`Missing returning character ${id}`)
  }
  return record
}

const EXAM_FAILURES = [
  'tonpa',
  'todo',
  'zepile',
  'ponzu',
  'amori',
  'umori',
  'imori',
]
const MANGA_EXAM_FAILURES = ['kyu', 'kenmi', 'sommy']
const TROUPE = new Set(['phinks', 'shalnark', 'shizuku', 'franklin'])
const ANIME_TROUPE = ['feitan', 'kortopi']
const AFFILIATIONS = [
  {
    id: 'gon-freecss',
    episode: 65,
    chapter: 145,
    it: 'morra cinese',
    en: 'rock-paper-scissors',
  },
  {
    id: 'gon-freecss',
    episode: 66,
    chapter: 150,
    it: 'raccoglie carte',
    en: 'collecting Greed Island cards',
  },
  {
    id: 'killua',
    episode: 65,
    chapter: 146,
    it: 'ripetere l’Esame Hunter',
    en: 'retake the Hunter Exam',
  },
  ...['gon-freecss', 'killua'].flatMap((id) => [
    {
      id,
      episode: 67,
      chapter: 154,
      it: 'impedire a Boomer',
      en: 'stop the Bomber',
    },
    {
      id,
      episode: 68,
      chapter: 158,
      it: 'accetta l’aiuto di Hisoka',
      en: 'accepting Hisoka’s help',
    },
  ]),
  {
    id: 'hisoka',
    episode: 66,
    chapter: 149,
    it: 'cerca un esorcista',
    en: 'searching for a Nen Exorcist',
  },
  {
    id: 'hisoka',
    episode: 68,
    chapter: 158,
    it: 'aiuta Gon e Killua',
    en: 'helping Gon and Killua',
  },
]

describe.each(CASES)(
  'returning Greed Island cast in $locale by $unit',
  (row) => {
    const read = (count: number): Reader =>
      readerFor(archive, at(row.unit, count), row.locale)
    const pin = (episode: number, chapter: number): number =>
      row.unit === 'chapter' ? chapter : episode
    const affiliation = (id: string, count: number): string | undefined =>
      factsOf(character(id), read(count)).affiliation
    const role = (id: string, count: number): string | undefined =>
      archive.roleOf(read(count), character(id))?.[row.locale]
    const swept = (gate: number): void => {
      expect(archive.bookmarks).toContainEqual(at(row.unit, gate - 1))
      expect(archive.bookmarks).toContainEqual(at(row.unit, gate))
    }

    it('gives Killua his licence at the second exam rather than at recruitment', () => {
      const gate = pin(66, 148)

      expect(role('killua', gate - 1)).toBe(
        row.locale === 'it' ? 'Aspirante Hunter' : 'Hunter Exam applicant',
      )
      expect(role('killua', gate)).toBe('Hunter')
      expect(role('killua', pin(60, 126))).not.toBe('Hunter')

      swept(gate)
    })

    it('dates Neon’s inability to tell fortunes', () => {
      const gate = pin(66, 149)

      expect(role('neon-nostrade', gate - 1)).toBe(
        row.locale === 'it' ? 'Indovina' : 'Fortune-teller',
      )
      expect(role('neon-nostrade', gate)).toBe(
        row.locale === 'it' ?
          'Indovina che non riesce più a usare il suo potere'
        : 'Fortune-teller unable to use her ability',
      )

      swept(gate)
    })

    it.each(EXAM_FAILURES)('dates %s’s repeat exam failure', (id) => {
      const gate = pin(66, 148)
      const outcome =
        row.locale === 'it' ?
          'Esame Hunter, escluso nella prima prova del 288º esame'
        : 'Hunter Exam, failed the First Phase of the 288th exam'

      expect(affiliation(id, gate - 1)).not.toBe(outcome)
      expect(affiliation(id, gate)).toBe(outcome)

      swept(gate)
    })

    it.each(MANGA_EXAM_FAILURES)(
      'keeps %s’s manga exam appearance in its own source',
      (id) => {
        const gate = pin(66, 148)
        const outcome =
          row.locale === 'it' ?
            'Esame Hunter, escluso nella prima prova del 288º esame'
          : 'Hunter Exam, failed the First Phase of the 288th exam'

        expect(affiliation(id, gate - 1)).not.toBe(outcome)

        const expected = { chapter: outcome, episode: undefined }

        expect(affiliation(id, gate)).toBe(expected[row.unit])
      },
    )

    it.each(AFFILIATIONS)(
      'dates $id’s $chapter development independently',
      (fact) => {
        const gate = pin(fact.episode, fact.chapter)
        const words = fact[row.locale]

        expect(affiliation(fact.id, gate - 1)).not.toContain(words)
        expect(affiliation(fact.id, gate)).toContain(words)

        swept(gate)
      },
    )

    it.each([...TROUPE, ...ANIME_TROUPE])(
      'dates %s’s exorcist search only in the source showing the meeting',
      (id) => {
        const gate = pin(66, 149)
        const words = row.locale === 'it' ? 'esorcista' : 'Exorcist'
        const reached = row.unit === 'episode' || TROUPE.has(id)
        const selectedSummary = (count: number): string =>
          relationshipsOf(character(id), read(count)).find(
            ({ person }) => person.id === 'chrollo',
          )?.summary ?? ''

        expect(affiliation(id, gate - 1)?.includes(words)).toBe(false)
        expect(affiliation(id, gate)?.includes(words)).toBe(reached)
        expect(selectedSummary(gate - 1)).not.toContain(words)
        expect(selectedSummary(gate).includes(words)).toBe(reached)

        swept(gate)
      },
    )
  },
)

describe.each(LOCALES)('source-specific training in %s', (locale) => {
  const affiliation = (
    id: string,
    unit: 'chapter' | 'episode',
    count: number,
  ): string | undefined =>
    factsOf(character(id), readerFor(archive, at(unit, count), locale))
      .affiliation

  it.each(['gon-freecss', 'killua'])(
    'keeps %s’s manga drills separate within one anime episode',
    (id) => {
      const distribution =
        locale === 'it' ?
          'distribuire l’aura durante il combattimento'
        : 'redistribute aura during combat'
      const categories =
        locale === 'it' ?
          'esercizi per categoria di Nen'
        : 'aura-category exercises'

      expect(affiliation(id, 'chapter', 141)).toContain('Ken')
      expect(affiliation(id, 'chapter', 141)).not.toContain(distribution)
      expect(affiliation(id, 'chapter', 142)).toContain(distribution)
      expect(affiliation(id, 'chapter', 143)).not.toContain(categories)
      expect(affiliation(id, 'chapter', 144)).toContain(categories)
      expect(affiliation(id, 'episode', 63)).not.toContain(categories)
      expect(affiliation(id, 'episode', 64)).toContain(categories)
      expect(affiliation(id, 'episode', 64)).toContain('Ken')

      for (const chapter of [142, 144]) {
        expect(archive.bookmarks).toContainEqual(at('chapter', chapter - 1))
        expect(archive.bookmarks).toContainEqual(at('chapter', chapter))
      }
    },
  )

  it('keeps Killua’s exam success before his return to collecting cards', () => {
    const success = locale === 'it' ? 'unico promosso' : 'sole successful'
    const collecting =
      locale === 'it' ? 'raccoglie carte' : 'collecting Greed Island cards'

    expect(affiliation('killua', 'chapter', 147)).not.toContain(success)
    expect(affiliation('killua', 'chapter', 148)).toContain(success)
    expect(affiliation('killua', 'chapter', 149)).not.toContain(collecting)
    expect(affiliation('killua', 'chapter', 150)).toContain(collecting)
    expect(affiliation('killua', 'episode', 65)).not.toContain(collecting)
    expect(affiliation('killua', 'episode', 66)).toContain(collecting)
  })
})
