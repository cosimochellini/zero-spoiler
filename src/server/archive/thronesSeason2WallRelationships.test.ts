import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { withoutDrawings } from '~/test/archive'
import { loadedSeries } from '~/test/series'

import { relationshipsPage } from './pages.server'
import { readerFor } from './reader.server'

const { archive } = loadedSeries('game-of-thrones')

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

// The Wall and beyond in stage 2 (#1483): each link the two media time or
// tell apart, checked just before its pin and at it.
describe.each(LOCALES)(
  'Game of Thrones stage-2 Wall relationships in %s',
  (locale: Locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      withoutDrawings(
        relationshipsPage(owner, readerFor(archive, bookmark, locale)),
      ).map(({ person }) => person.id)

    it('keeps the books-only officers and rangers off show pages', () => {
      for (const id of [
        'thoren-smallwood',
        'jarman-buckwell',
        'mallador-locke',
        'stonesnake',
        'ebben',
        'dalbridge',
        'lord-of-bones',
      ]) {
        expect(people(id, ep(archive.series.episodeCeiling)), id).toStrictEqual(
          [],
        )
        expect(people(id, ch(143)), id).not.toStrictEqual([])
      }
    })

    it('opens the new Wall cards at each character’s own gate', () => {
      expect(people('craster', ep(10))).toStrictEqual([])
      expect(people('craster', ep(11))).toContain('benjen-stark')
      expect(people('craster', ch(96))).toStrictEqual([])
      expect(people('craster', ch(97))).toContain('gilly')
      expect(people('gilly', ep(14))).toStrictEqual([])
      expect(people('gilly', ep(15))).toContain('samwell-tarly')
      expect(people('gilly', ch(96))).toStrictEqual([])
      expect(people('gilly', ch(97))).toContain('jon-snow')
      expect(people('qhorin-halfhand', ep(14))).toStrictEqual([])
      expect(people('qhorin-halfhand', ep(15))).toStrictEqual([
        'jeor-mormont',
        'jon-snow',
      ])
      expect(people('ygritte', ep(15))).toStrictEqual([])
      expect(people('ygritte', ep(16))).toContain('qhorin-halfhand')
    })

    it('gives Edd the show cards at episode 20 and the books’ at chapter 87', () => {
      expect(people('eddison-tollett', ep(19))).toStrictEqual([])
      expect(people('eddison-tollett', ep(20))).toStrictEqual([
        'samwell-tarly',
        'grenn',
        'jon-snow',
        'craster',
      ])
      expect(people('eddison-tollett', ch(86))).toStrictEqual([])
      expect(people('eddison-tollett', ch(87))).toStrictEqual([
        'jon-snow',
        'jeor-mormont',
      ])
      expect(people('eddison-tollett', ch(97))).toContain('craster')
    })

    it('keeps the books’ rangers off Jon’s show page, and the show’s Gilly off his book page before 97', () => {
      const shown = people('jon-snow', ep(archive.series.episodeCeiling))
      for (const id of ['stonesnake', 'ebben', 'lord-of-bones']) {
        expect(shown, id).not.toContain(id)
      }

      expect(people('jon-snow', ep(14))).not.toContain('gilly')
      expect(people('jon-snow', ep(15))).toContain('gilly')
      expect(people('jon-snow', ch(96))).not.toContain('gilly')
      expect(people('jon-snow', ch(97))).toContain('gilly')
    })

    it('sends Jon from Ygritte to the Lord of Bones only in the books', () => {
      expect(people('jon-snow', ch(124))).not.toContain('ygritte')
      expect(people('jon-snow', ch(125))).toContain('ygritte')
      expect(people('jon-snow', ch(141))).not.toContain('lord-of-bones')
      expect(people('jon-snow', ch(142))).toContain('lord-of-bones')
      expect(people('jon-snow', ep(19))).toContain('ygritte')
      expect(people('jon-snow', ep(20))).not.toContain('lord-of-bones')
    })

    it('tells Qhorin’s end in the show at 20 and in the books at 142', () => {
      expect(people('qhorin-halfhand', ep(19))).not.toContain('ygritte')
      expect(people('qhorin-halfhand', ep(20))).toContain('ygritte')
      expect(people('qhorin-halfhand', ch(141))).not.toContain('lord-of-bones')
      expect(people('qhorin-halfhand', ch(142))).toContain('lord-of-bones')
      expect(people('qhorin-halfhand', ch(142))).toContain('ebben')
    })

    it('gives Ghost a show card at 15 and book cards at 97 and 127', () => {
      expect(people('ghost-direwolf', ep(14))).not.toContain('gilly')
      expect(people('ghost-direwolf', ep(15))).toContain('gilly')
      expect(people('ghost-direwolf', ch(96))).not.toContain('gilly')
      expect(people('ghost-direwolf', ch(97))).toContain('gilly')
      expect(people('ghost-direwolf', ch(126))).not.toContain('qhorin-halfhand')
      expect(people('ghost-direwolf', ch(127))).toContain('qhorin-halfhand')
    })
  },
)
