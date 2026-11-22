import { describe, expect, it } from 'vitest'

import { electionChronicles } from '~/data/series/hunter-x-hunter/records/election.chronicle'
import type { Entity, Field } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Gated } from '~/lib/progress/spoiler'
import { bookmarkAt as at, opened, recordIn, sideIn } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { chronicleOf, chronicleRestOf } from './chronicle.server'
import { homePage } from './home.server'
import { characterPage, drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('hunter-x-hunter')

const UNITS = ['episode', 'chapter'] as const
type Unit = (typeof UNITS)[number]
type Gate = [id: string, episode: number, chapter: number, source?: Unit]
const CHARACTERS: Gate[] = [
  ['alluka-zoldyck', 138, 321],
  ['amane', 140, 324],
  ['hishita', 143, 329],
  ['kasuga', 138, 322],
  ['mitsuba', 138, 322],
  ['muna', 139, 323],
  ['yasuha', 139, 323],
  ['nanika', 139, 332],
  ['tsubone', 140, 324],
  ['beans', 137, 319],
  ['botobai-gigante', 137, 319],
  ['cheadle-yorkshire', 137, 319],
  ['cluck', 137, 320],
  ['gel', 137, 321],
  ['ginta', 137, 320],
  ['kanzai', 137, 320],
  ['mizaistom-nana', 137, 326],
  ['pariston-hill', 137, 321],
  ['pyon', 137, 320],
  ['saccho-kobayakawa', 137, 326],
  ['saiyu', 137, 321],
  ['bushidora-ambitious', 141, 326],
  ['cutie-beauty', 141, 326],
  ['ickshonpe-katocha', 141, 326],
  ['linne-horsdoeuvre', 141, 326],
  ['loupe-highland', 141, 326],
  ['sanbica-norton', 141, 326],
  ['teradein-neutral', 141, 326],
]
const PLACES: Gate[] = [
  ['parasta-airport', 142, 328, 'episode'],
  ['swardani-city', 142, 328, 'episode'],
  ['world-tree', 147, 337],
]

const CASES = [...CHARACTERS, ...PLACES].map(
  ([id, episode, chapter, source]) => ({ id, episode, chapter, source }),
)

type FactPin = [
  id: string,
  field: Field,
  episode: number,
  chapter: number,
  source?: Unit,
]

const FACT_PINS: FactPin[] = [
  ['gon-freecss', 'chronicle', 145, 334],
  ['gon-freecss', 'chronicle', 146, 335],
  ['gon-freecss', 'chronicle', 147, 338],
  ['gon-freecss', 'chronicle', 148, 339],
  ['ging-freecss', 'chronicle', 148, 339],
  ['gotoh', 'chronicle', 142, 327],
  ['killua', 'chronicle', 143, 330],
  ['killua', 'chronicle', 145, 333],
  ['killua', 'chronicle', 146, 336],
  ['nanika', 'chronicle', 145, 333],
  ['alluka-zoldyck', 'chronicle', 146, 336],
  ['pariston-hill', 'chronicle', 146, 335],
  ['cheadle-yorkshire', 'chronicle', 146, 335],
  ['kite', 'chronicle', 147, 337],
  ['kiriko', 'chronicle', 148, 339],
  ['ickshonpe-katocha', 'chronicle', 144, 331, 'chapter'],
  ['leorio-paradinight', 'chronicle', 148, 339, 'episode'],
  ['gon-freecss', 'role', 145, 334],
  ['gon-freecss', 'affiliation', 145, 334],
  ['leorio-paradinight', 'role', 141, 326],
  ['leorio-paradinight', 'role', 146, 335],
  ['leorio-paradinight', 'role', 148, 339, 'episode'],
  ['kiriko', 'role', 148, 339],
  ['hisoka', 'affiliation', 142, 327],
  ['killua', 'affiliation', 147, 338],
  ['canary', 'affiliation', 140, 324],
  ['gotoh', 'status', 142, 327],
  ['ging-freecss', 'role', 137, 319],
  ['ging-freecss', 'affiliation', 137, 319],
  ['biscuit-krueger', 'role', 141, 326],
  ['morel-mackernasey', 'role', 141, 326],
  ['morel-mackernasey', 'affiliation', 140, 325],
  ['knov', 'role', 140, 325],
  ['knov', 'affiliation', 140, 325],
  ['cheadle-yorkshire', 'role', 146, 335],
  ['cheadle-yorkshire', 'relationships', 144, 332],
  ['cheadle-yorkshire', 'relationships', 146, 335],
  ['gel', 'relationships', 138, 321],
  ['pariston-hill', 'role', 146, 335],
  ['pariston-hill', 'relationships', 146, 335],
  ['saiyu', 'relationships', 138, 321],
  ['mizaistom-nana', 'relationships', 144, 332],
  ['alluka-zoldyck', 'status', 140, 324],
  ['alluka-zoldyck', 'relationships', 145, 332],
  ['alluka-zoldyck', 'relationships', 146, 336],
  ['nanika', 'relationships', 145, 333],
  ['nanika', 'relationships', 146, 336],
  ['tsubone', 'relationships', 143, 330],
  ['amane', 'relationships', 141, 326],
  ['bushidora-ambitious', 'status', 143, 329],
  ['bushidora-ambitious', 'relationships', 142, 328],
  ['cutie-beauty', 'role', 143, 329],
  ['cutie-beauty', 'relationships', 143, 329],
  ['ickshonpe-katocha', 'role', 143, 330],
  ['ickshonpe-katocha', 'relationships', 144, 331],
  ['linne-horsdoeuvre', 'role', 143, 329],
  ['loupe-highland', 'role', 143, 329],
  ['loupe-highland', 'relationships', 142, 328],
  ['sanbica-norton', 'role', 143, 329],
  ['teradein-neutral', 'status', 143, 330],
  ['teradein-neutral', 'relationships', 142, 328],
]

const FACT_CASES = FACT_PINS.map(([id, field, episode, chapter, source]) => ({
  id,
  field,
  source,
  pin: { episode, chapter, source },
  gate: {
    revealedAtEpisode: episode,
    revealedAtChapter: chapter,
    ...(source !== undefined && { source }),
  },
}))

function reachedGates(reader: Reader, owner: Entity, field: Field): Gated[] {
  return archive.reachedOf(reader, owner, field).map((entry) => entry.gate)
}

describe.each(UNITS)('Election by %s', (unit) => {
  describe.each(LOCALES)('in %s', (locale) => {
    const read = (count: number): Reader =>
      readerFor(archive, at(unit, count), locale)
    const applicable = CASES.filter(
      ({ source }) => source === undefined || source === unit,
    )
    const excluded = CASES.filter(
      ({ source }) => source !== undefined && source !== unit,
    )

    it.each(applicable)('gates $id and its artwork', (row) => {
      const side = sideIn(row, unit, archive.series)

      expect(opened(row.id, readerFor(archive, side.before, locale))).toBe(
        false,
      )
      expect(opened(row.id, readerFor(archive, side.reached, locale))).toBe(
        true,
      )
    })

    it.each(excluded)('excludes $id from the other medium', ({ id }) => {
      const finale = read(unit === 'chapter' ? 339 : 148)

      expect(characterPage(id, finale) ?? placePage(id, finale)).toBeUndefined()
      expect(drawingsFor([id], finale)).toStrictEqual({})
    })

    it.each(
      FACT_CASES.filter(
        ({ source }) => source === undefined || source === unit,
      ),
    )('pins $id $field at $gate', ({ id, field, gate, pin }) => {
      const owner = recordIn(archive, id)
      const side = sideIn(pin, unit, archive.series)
      const before = reachedGates(
        readerFor(archive, side.before, locale),
        owner,
        field,
      )
      const reached = reachedGates(
        readerFor(archive, side.reached, locale),
        owner,
        field,
      )

      expect(before).not.toContainEqual(gate)
      expect(reached).toContainEqual(gate)
    })

    it('pins Gotoh’s death and Gon’s recovery', () => {
      const gotoh = recordIn(archive, 'gotoh')
      const gon = recordIn(archive, 'gon-freecss')
      const death = unit === 'chapter' ? 327 : 142
      const recovery = unit === 'chapter' ? 334 : 145

      expect(archive.latestOf(read(death - 1), gotoh, 'status')).toBe('alive')
      expect(archive.latestOf(read(death), gotoh, 'status')).toBe('deceased')
      expect(archive.roleOf(read(recovery - 1), gon)?.[locale]).toMatch(
        /Hospitalized|ricoverato/u,
      )
      expect(archive.roleOf(read(recovery), gon)?.[locale]).toMatch(
        /Recovered|guarito/u,
      )
    })
  })
})

describe('the Election home', () => {
  it('opens the Election arc at home and registers its leads', () => {
    expect(archive.leads['election-arc']).toStrictEqual([
      'gon-freecss',
      'killua',
      'alluka-zoldyck',
      'leorio-paradinight',
      'ging-freecss',
      'pariston-hill',
      'cheadle-yorkshire',
      'tsubone',
      'illumi',
    ])

    const reader = readerFor(archive, at('episode', 140), 'en')

    expect(homePage(reader).saga.id).toBe('election-arc')
  })
})

/**
 * A chronicle that opens apart from its record: Cluck's first story is the
 * anime's alone (her objection to signed ballots), while her record opens in
 * the manga too (#1443).
 */
const CHRONICLE_OPENS: Partial<Record<string, Gate>> = {
  cluck: ['cluck', 137, 320, 'episode'],
}

describe.each(LOCALES)('Election chronicles in %s', (locale) => {
  it.each(
    CHARACTERS.map((gate) => {
      const [id, episode, chapter, source] = CHRONICLE_OPENS[gate[0]] ?? gate

      return { id, episode, chapter, source }
    }),
  )(
    'opens a chronicle with the new record $id',
    ({ id, episode, chapter, source }) => {
      const owner = recordIn(archive, id)
      const first = archive.dossierOf(owner)?.chronicle?.[0]

      expect(first?.episode).toBe(episode)
      expect(first?.chapter).toBe(chapter)
      expect(first?.source).toBe(source)
    },
  )

  describe.each(UNITS)('by %s', (unit) => {
    it.each(Object.entries(electionChronicles))(
      `assembles %s behind each ${unit} gate`,
      (id, stories) => {
        const owner = recordIn(archive, id)
        for (const story of stories) {
          const threshold = unit === 'episode' ? story.episode : story.chapter
          const before = readerFor(archive, at(unit, threshold - 1), locale)
          const reached = readerFor(archive, at(unit, threshold), locale)
          const title = story.value.title[locale]

          expect(chronicleTitles(owner, before)).not.toContain(title)

          const told = !('source' in story) || story.source === unit

          expect(chronicleTitles(owner, reached).includes(title)).toBe(told)
        }
      },
    )

    it(`shows this arc’s stories at home by ${unit}`, () => {
      const reader = readerFor(
        archive,
        at(unit, unit === 'episode' ? 140 : 325),
        locale,
      )
      const home = homePage(reader)

      expect(home.before).toBe(false)
      expect(home.stories).toContainEqual(
        expect.objectContaining({
          title:
            electionChronicles['leorio-paradinight'][0]?.value.title[locale],
        }),
      )
    })
  })
})

/** Includes the lazy continuation when an older story has left the first page. */
function chronicleTitles(owner: Entity, reader: Reader): string[] {
  return [
    ...chronicleOf(owner, reader).entries,
    ...chronicleRestOf(owner.id, reader),
  ].map((entry) => entry.title)
}

describe.each(['gittarackur', 'illumi'])('%s’s election disguise', (id) => {
  // A temporary costume: the vote in the disguise, then the drawing he had
  // before it from the airship bar on.
  it.each(LOCALES)('returns to the drawing before it, in %s', (locale) => {
    for (const [unit, before, after] of [
      ['episode', 136, 139],
      ['chapter', 319, 323],
    ] as const) {
      const read = (count: number): ReturnType<typeof drawingsFor> =>
        drawingsFor([id], readerFor(archive, at(unit, count), locale))

      expect(read(after)).toStrictEqual(read(before))
    }
  })
})

describe('Election copy', () => {
  it('keeps the established Italian dub names in titles and prose', () => {
    for (const stories of Object.values(electionChronicles)) {
      for (const { value } of stories) {
        expect(`${value.title.it} ${value.body.it}`).not.toMatch(
          /\b(?:Morel|Milluki|Canary|Gotoh)\b/u,
        )
      }
    }
  })
})

describe.each([
  { id: 'gotoh', episode: 142, chapter: 327, change: 'death' },
  { id: 'bushidora-ambitious', episode: 143, chapter: 329, change: 'death' },
  { id: 'teradein-neutral', episode: 143, chapter: 330, change: 'death' },
  { id: 'tsubone', episode: 142, chapter: 328, change: 'Rider’s High' },
  { id: 'leorio-paradinight', episode: 140, chapter: 325, change: 'Nen punch' },
  { id: 'gittarackur', episode: 137, chapter: 320, change: 'disguise' },
  { id: 'gittarackur', episode: 139, chapter: 323, change: 'disguise off' },
  { id: 'illumi', episode: 137, chapter: 320, change: 'disguise' },
  { id: 'illumi', episode: 139, chapter: 323, change: 'disguise off' },
])('$id’s $change drawing', ({ id, episode, chapter }) => {
  it.each(LOCALES)('changes at its pin, never before, in %s', (locale) => {
    for (const unit of UNITS) {
      const gate = unit === 'episode' ? episode : chapter
      const read = (count: number): ReturnType<typeof drawingsFor> =>
        drawingsFor([id], readerFor(archive, at(unit, count), locale))

      expect(read(gate)[id]).toBeDefined()
      expect(read(gate)).not.toStrictEqual(read(gate - 1))
    }
  })
})
