import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { withoutDrawings } from '~/test/archive'
import { LOADED_SERIES } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The omissions live beside the factual evidence.
import coverage from '../../../docs/content-provenance/hunter-x-hunter-relationships.json' with { type: 'json' }
import { relationshipsPage } from './pages.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Hunter x Hunter is not registered')
}
const { archive } = series

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const characters = archive.entities.filter(({ kind }) => kind === 'character')
const owners = characters.filter(
  (owner) => archive.datedOf(owner, 'relationships').length > 0,
)

/** The page projection a reader at this bookmark receives. */
function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(
    relationshipsPage(id, readerFor(archive, bookmark, locale)),
  )
}

describe('Hunter x Hunter relationship coverage', () => {
  it('authors or omits every archived character', () => {
    expect(
      owners.length
        + Object.keys(coverage.omitted).length
        + Object.keys(coverage.pending).length,
    ).toBe(characters.length)
  })

  it.each([...Object.keys(coverage.omitted), ...Object.keys(coverage.pending)])(
    'shows no relationships for %s',
    (id) => {
      for (const bookmark of [
        ep(archive.series.episodeCeiling),
        ch(archive.series.chapterCeiling),
      ]) {
        expect(projected(id, bookmark, 'en')).toStrictEqual([])
      }
    },
  )
})

describe.each(LOCALES)(
  'Hunter x Hunter verified revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)

    it('keeps a pair hidden until its event, although both people are known', () => {
      for (const [before, at] of [
        [ep(6), ep(7)],
        [ch(13), ch(14)],
      ] as const) {
        expect(projected('gon-freecss', before, locale)).not.toStrictEqual([])
        expect(people('netero', before)).toStrictEqual(['menchi'])
        expect(people('netero', at)).toContain('gon-freecss')
      }
    })

    it('opens Gon’s father only with Ging’s record, although he is named from the start', () => {
      for (const [before, at] of [
        [ep(36), ep(37)],
        [ch(65), ch(66)],
      ] as const) {
        expect(people('gon-freecss', before)).not.toContain('ging-freecss')
        expect(people('gon-freecss', at)).toContain('ging-freecss')
        expect(people('mito-freecss', before)).not.toContain('ging-freecss')
        expect(people('mito-freecss', at)).toContain('ging-freecss')
      }
    })

    it('gives Kite to manga readers from chapter 1 and to anime readers from episode 76', () => {
      expect(people('gon-freecss', ch(1))).toContain('kite')
      expect(people('gon-freecss', ep(75))).not.toContain('kite')
      expect(people('gon-freecss', ep(76))).toContain('kite')
      expect(projected('kite', ep(75), locale)).toStrictEqual([])
      expect(people('kite', ep(76))).toContain('gon-freecss')
    })

    it('keeps the manga-only roster out of anime pages', () => {
      for (const id of ['goz', 'agon', 'siper', 'sommy', 'cherry']) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
        ).toStrictEqual([])
        expect(projected(id, ch(43), locale)).not.toStrictEqual([])
      }

      expect(people('tonpa', ep(archive.series.episodeCeiling))).not.toContain(
        'sommy',
      )
      expect(people('tonpa', ch(43))).toContain('sommy')
    })

    it('swaps the disguise for Illumi only at the unmasking', () => {
      for (const [before, at] of [
        [ep(19), ep(20)],
        [ch(34), ch(35)],
      ] as const) {
        expect(people('hisoka', before)).toContain('gittarackur')
        expect(people('hisoka', before)).not.toContain('illumi')
        expect(people('hisoka', at)).toContain('illumi')
        expect(people('hisoka', at)).not.toContain('gittarackur')
      }

      // The manga-only roster he wounded or killed swaps with the same chapter.
      for (const id of ['goz', 'siper']) {
        expect(people(id, ch(34))).toContain('gittarackur')
        expect(people(id, ch(35))).toContain('illumi')
        expect(people(id, ch(35))).not.toContain('gittarackur')
      }

      expect(people('killua', ep(19))).not.toContain('illumi')
      expect(people('killua', ep(20))).toContain('illumi')
      expect(people('killua', ch(35))).not.toContain('illumi')
      expect(people('killua', ch(36))).toContain('illumi')
    })

    it('never ties Gittarackur’s own page to Illumi or his family', () => {
      for (const bookmark of [
        ep(19),
        ep(archive.series.episodeCeiling),
        ch(33),
        ch(archive.series.chapterCeiling),
      ]) {
        const sent = projected('gittarackur', bookmark, locale)

        expect(sent).not.toStrictEqual([])
        expect(JSON.stringify(sent)).not.toMatch(
          /illumi|zoldyck|zoldick|killua/iu,
        )
      }
    })
  },
)
