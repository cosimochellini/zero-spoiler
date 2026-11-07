import { describe, expect, it } from 'vitest'

import { kakinChronicles } from '~/data/series/hunter-x-hunter/records/kakin.chronicle'
import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { chronicleOf, chronicleRestOf } from './chronicle.server'
import { homePage } from './home.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Kakin chronicle tests require Hunter x Hunter')
}
const { archive } = series

/** The anime's last episode: it orders the manga-only arc and never opens it. */
const LAST_EPISODE = 148

// Independent expectations from the synopses: each new record's first story.
const FIRST_STORIES: [id: string, chapter: number][] = [
  ['beyond-netero', 340],
  ['tserriednich-hui-guo-rou', 343],
  ['zigg-zoldyck', 344],
  ['mark', 345],
  ['curly', 346],
  ['golem', 347],
  ['benjamin-hui-guo-rou', 349],
  ['unma-hui-guo-rou', 349],
  ['tang-zhao-li-hui-guo-rou', 349],
  ['katrono-hui-guo-rou', 349],
  ['seiko-hui-guo-rou', 349],
  ['woble-hui-guo-rou', 350],
  ['izunavi', 350],
  ['tokarine', 359],
  ['kacho-hui-guo-rou', 359],
  ['fugetsu-hui-guo-rou', 359],
  ['halkenburg-hui-guo-rou', 361],
  ['momoze-hui-guo-rou', 361],
  ['camilla-hui-guo-rou', 363],
  ['zhang-lei-hui-guo-rou', 363],
  ['vincent', 363],
  ['tubeppa-hui-guo-rou', 365],
  ['tyson-hui-guo-rou', 366],
  ['luzurus-hui-guo-rou', 366],
  ['sale-sale-hui-guo-rou', 366],
  ['swinko-swinko-hui-guo-rou', 366],
  ['duazul-hui-guo-rou', 366],
  ['marayam-hui-guo-rou', 367],
  ['slakka', 367],
  ...[
    'barrigen',
    'belerainte',
    'danjin',
    'furykov',
    'illardia',
    'ladiolus',
    'loberry',
    'longhi',
    'maor',
    'mushaho',
    'myuhan',
    'satobi',
    'shedule',
    'tenftory',
    'yuhirai',
    'yuri',
  ].map((id): [string, number] => [id, 370]),
  // Chapters 371–400 (#1157).
  ['vergei', 374],
  ['cashew', 379],
  ['ken-i-wang', 379],
  ['keeney', 383],
  ['tajao', 384],
  ['famule', 389],
  ['fukataki', 389],
  ['taler', 389],
  ['lynch-fullbokko', 390],
  ['zakuro-custard', 390],
  ['padaille', 391],
  ['tevelares', 391],
  ['misha-hao', 392],
  ['daemon', 393],
  ['gelato', 393],
  ['maizan', 393],
  ['perigord', 393],
  ['quorolle', 393],
  ...[
    'bille',
    'borksen',
    'chiffon-toto',
    'gipper',
    'matvere',
    'momolly',
    'montblanc-toto',
    'otocin',
    'sodom',
    'tassi',
    'voconte',
  ].map((id): [string, number] => [id, 394]),
  ['lisores', 395],
  ['sheila', 395],
  ['sarasa', 396],
  ['renko', 397],
  ['terebellum', 399],
  ['yokotani', 399],
  ...['anzel', 'himonce', 'hyuga', 'kaiser', 'madwig'].map(
    (id): [string, number] => [id, 400],
  ),
  // Chapters 401–420 (#1159).
  ['makaha', 401],
  ['oito-hui-guo-rou', 401],
  ['musse', 413],
  ['hashito', 404],
  ['sakata', 412],
  ['balsamilco', 403],
  ['worio-bay', 403],
  ...['vict', 'shikaku', 'sumidori'].map((id): [string, number] => [id, 404]),
  ['cleapatro', 412],
  ['hinrigh', 406],
  ['morena', 405],
  ['risnorth', 405],
  ['onior', 417],
  ['kako', 411],
  ['bill', 412],
  ['shimanu', 414],
  ...['rihan', 'saquelle', 'kanjidol'].map((id): [string, number] => [id, 415]),
  ['coventoba', 417],
]

const STORIES = Object.entries(kakinChronicles).flatMap(([id, stories]) =>
  stories.map((story) => ({ id, story })),
)

function character(id: string): Entity {
  const owner = archive.getCharacter(id)
  if (owner === undefined) {
    throw new Error(`Missing Kakin fixture ${id}`)
  }
  return owner
}

/** Includes the lazy continuation when an older story has left the first page. */
function chronicleTitles(owner: Entity, reader: Reader): string[] {
  return [
    ...chronicleOf(owner, reader).entries,
    ...chronicleRestOf(owner.id, reader),
  ].map((entry) => entry.title)
}

describe('the Kakin chronicles, chapters 340–420', () => {
  it.each(FIRST_STORIES)(
    'opens a chronicle for the new record %s at chapter %i',
    (id, chapter) => {
      const first = archive.dossierOf(character(id))?.chronicle?.[0]

      expect(first?.chapter).toBe(chapter)
    },
  )

  it('tells every story in the manga alone, inside the window', () => {
    for (const { id, story } of STORIES) {
      expect(story.source, id).toBe('chapter')
      expect(story.episode, id).toBe(LAST_EPISODE)
      expect(story.chapter, id).toBeGreaterThanOrEqual(340)
      expect(story.chapter, id).toBeLessThanOrEqual(420)
    }
  })

  it('files every story on a character the archive holds', () => {
    for (const [id, stories] of Object.entries(kakinChronicles)) {
      const filed = archive.dossierOf(character(id))?.chronicle ?? []

      expect(filed, id).toStrictEqual(expect.arrayContaining(stories))
    }
  })

  it('keeps the Italian names in titles and prose', () => {
    for (const { id, story } of STORIES) {
      const italian = `${story.value.title.it} ${story.value.body.it}`

      expect(italian, id).not.toMatch(/\b(?:Uvogin|Kalluto|Neon Nostrade)\b/u)
      expect(italian, id).not.toMatch(
        /\b(?:Chrollo|Morel|Knov|Gel|Mito|Linne|Zoldyck|Izunavi|Tubeppa|Zhang Lei|Luzurus|Salé-salé|Halkenburg|Kacho|Tang Zhao Li|Hui Guo Rou|Heavens Arena|Whale Island|Kakin|Dark Continent)\b/u,
      )
    }
  })
})

// The dated entries the 371–420 stories imply, each with its status before
// and at its pin (#1157, #1159): custody pending trial is `captured`.
const PINS = [
  { id: 'loberry', chapter: 371, before: 'alive', after: 'captured' },
  {
    id: 'camilla-hui-guo-rou',
    chapter: 373,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'camilla-hui-guo-rou',
    chapter: 376,
    before: 'captured',
    after: 'alive',
  },
  {
    id: 'halkenburg-hui-guo-rou',
    chapter: 389,
    before: 'alive',
    after: 'captured',
  },
  // Chapters 401–420 (#1159): Lynch's death is told at 405, before her body
  // is found at 406.
  { id: 'lynch-fullbokko', chapter: 405, before: 'alive', after: 'deceased' },
  { id: 'oito-hui-guo-rou', chapter: 415, before: 'alive', after: 'captured' },
  { id: 'fukataki', chapter: 416, before: 'alive', after: 'deceased' },
  { id: 'danjin', chapter: 416, before: 'alive', after: 'captured' },
] as const

function at(chapter: number): Reader {
  return readerFor(archive, { mode: 'chapter', chapter }, 'en')
}

describe('the dated entries of chapters 371–420', () => {
  it.each(PINS)(
    'pins $id’s change to $after at chapter $chapter',
    ({ id, chapter, before, after }) => {
      const owner = character(id)

      expect(archive.latestOf(at(chapter - 1), owner, 'status')).toBe(before)
      expect(archive.latestOf(at(chapter), owner, 'status')).toBe(after)
    },
  )

  it('moves Hanzo to Marayam’s guard at chapter 361', () => {
    const owner = character('hanzo')

    expect(archive.latestOf(at(360), owner, 'affiliation')?.en).toBe(
      'Hunter Association, Hunter; Momoze’s bodyguards',
    )
    expect(archive.latestOf(at(361), owner, 'affiliation')?.en).toBe(
      'Hunter Association, Hunter; Marayam’s bodyguards',
    )
  })
})

describe.each(LOCALES)('Kakin chronicles in %s', (locale) => {
  const read = (bookmark: Bookmark): Reader =>
    readerFor(archive, bookmark, locale)

  it.each(Object.entries(kakinChronicles))(
    'shows %s’s stories from their chapter, never before',
    (id, stories) => {
      const owner = character(id)
      for (const { chapter = 0, value } of stories) {
        const title = value.title[locale]
        const before = read({ mode: 'chapter', chapter: chapter - 1 })
        const reached = read({ mode: 'chapter', chapter })

        expect(chronicleTitles(owner, before), title).not.toContain(title)
        expect(chronicleTitles(owner, reached), title).toContain(title)
      }
    },
  )

  it.each(Object.entries(kakinChronicles))(
    'never shows %s’s stories to an anime reader',
    (id, stories) => {
      const owner = character(id)
      const titles = chronicleTitles(
        owner,
        read({ mode: 'episode', episode: LAST_EPISODE }),
      )

      for (const { value } of stories) {
        expect(titles).not.toContain(value.title[locale])
      }
    },
  )

  it('lists the arc’s stories at home for a manga reader only', () => {
    const titles = new Set(
      STORIES.map(({ story }) => story.value.title[locale]),
    )
    const manga = homePage(read({ mode: 'chapter', chapter: 370 }))
    const anime = homePage(read({ mode: 'episode', episode: LAST_EPISODE }))

    const later = homePage(read({ mode: 'chapter', chapter: 400 }))
    const latest = homePage(read({ mode: 'chapter', chapter: 420 }))

    expect(manga.saga.id).toBe('kakin-arc')
    expect(manga.stories.some(({ title }) => titles.has(title))).toBe(true)
    expect(later.stories.some(({ title }) => titles.has(title))).toBe(true)
    expect(latest.stories.some(({ title }) => titles.has(title))).toBe(true)
    expect(anime.stories.some(({ title }) => titles.has(title))).toBe(false)
  })
})
