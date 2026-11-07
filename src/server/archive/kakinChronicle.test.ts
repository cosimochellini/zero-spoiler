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

describe('the Kakin chronicles, chapters 340–370', () => {
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
      expect(story.chapter, id).toBeLessThanOrEqual(370)
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
      expect(`${story.value.title.it} ${story.value.body.it}`, id).not.toMatch(
        /\b(?:Chrollo|Morel|Knov|Gel|Mito|Linne|Zoldyck|Izunavi|Tubeppa|Zhang Lei|Luzurus|Salé-salé|Halkenburg|Kacho|Tang Zhao Li|Hui Guo Rou|Heavens Arena|Whale Island|Kakin|Dark Continent)\b/u,
      )
    }
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

    expect(manga.saga.id).toBe('kakin-arc')
    expect(manga.stories.some(({ title }) => titles.has(title))).toBe(true)
    expect(anime.stories.some(({ title }) => titles.has(title))).toBe(false)
  })
})
