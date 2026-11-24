import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { withoutDrawings } from '~/test/archive'
import { loadedSeries } from '~/test/series'

import { relationshipsPage } from './pages.server'
import { readerFor } from './reader.server'

const { archive } = loadedSeries('game-of-thrones')

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

function projected(
  id: string,
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView[] {
  return withoutDrawings(
    relationshipsPage(id, readerFor(archive, bookmark, locale)),
  )
}

// Robb's war, the Riverlands and Harrenhal (#1481): the show and the books
// give the same road to Harrenhal different men, and each reader sees only
// his own medium's.
describe.each(LOCALES)(
  'Game of Thrones Riverlands relationships in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)

    it('gives the show the envoy Alton and the books Cleos', () => {
      expect(people('alton-lannister', ep(10))).toStrictEqual([])
      expect(people('alton-lannister', ep(11))).toContain('robb-stark')
      expect(people('alton-lannister', ep(16))).not.toContain(
        'cersei-lannister',
      )
      expect(people('alton-lannister', ep(17))).toContain('jaime-lannister')
      expect(people('alton-lannister', ch(143))).toStrictEqual([])
      expect(people('cleos-frey', ch(80))).toStrictEqual([])
      expect(people('cleos-frey', ch(81))).toContain('grey-wind')
      expect(people('cleos-frey', ch(99))).toContain('tyrion-lannister')
      expect(people('cleos-frey', ep(20))).toStrictEqual([])
    })

    it('opens Talisa at her family name and weds her to Robb at 20', () => {
      expect(people('talisa-maegyr', ep(15))).toStrictEqual([])
      expect(people('talisa-maegyr', ep(16))).toContain('catelyn-stark')
      expect(people('talisa-maegyr', ep(19))).toContain('catelyn-stark')
      expect(people('talisa-maegyr', ep(20))).toStrictEqual(['robb-stark'])
      expect(people('talisa-maegyr', ch(143))).toStrictEqual([])
    })

    it('has the show kill the Tickler and Amory by Jaqen’s hand, not the books', () => {
      expect(people('tickler', ep(15))).toContain('jaqen-hghar')
      expect(people('tickler', ch(100))).not.toContain('jaqen-hghar')
      expect(people('tickler', ch(100))).toContain('chiswyck')
      expect(people('amory-lorch', ep(16))).toContain('jaqen-hghar')
      expect(people('amory-lorch', ch(88))).toStrictEqual([
        'yoren',
        'tywin-lannister',
      ])
      expect(people('amory-lorch', ch(121))).toContain('vargo-hoat')
    })

    it('opens the books’ Chiswyck, Weese and Vargo Hoat at their chapters', () => {
      expect(people('chiswyck', ch(99))).toStrictEqual([])
      expect(people('chiswyck', ch(100))).toContain('hot-pie')
      expect(people('chiswyck', ch(104))).toContain('jaqen-hghar')
      expect(people('chiswyck', ep(20))).toStrictEqual([])
      expect(people('weese', ch(103))).toStrictEqual([])
      expect(people('weese', ch(104))).toStrictEqual(['arya-stark'])
      expect(people('weese', ch(112))).toContain('jaqen-hghar')
      expect(people('vargo-hoat', ch(103))).toStrictEqual([])
      expect(people('vargo-hoat', ch(104))).toStrictEqual(['tywin-lannister'])
      expect(people('vargo-hoat', ch(138))).toContain('roose-bolton')
      expect(people('vargo-hoat', ep(20))).toStrictEqual([])
    })

    it('leaves Jaqen, Rorge, Biter and Lommy out of stage 1 and in stage 2', () => {
      for (const id of ['jaqen-hghar', 'rorge', 'biter', 'lommy']) {
        expect(people(id, ch(73)), id).toStrictEqual([])
      }

      expect(people('jaqen-hghar', ep(12))).toContain('arya-stark')
      expect(people('jaqen-hghar', ep(12))).not.toContain('rorge')
      expect(people('jaqen-hghar', ch(79))).toContain('rorge')
      expect(people('jaqen-hghar', ch(79))).toContain('biter')
      expect(people('rorge', ep(20))).toStrictEqual([])
      expect(people('biter', ep(20))).toStrictEqual([])
      expect(people('rorge', ch(79))).toContain('biter')
      expect(people('biter', ch(121))).toContain('robett-glover')
    })

    it('keeps Lommy to the books until the show names him', () => {
      expect(people('lommy', ch(74))).toStrictEqual([])
      expect(people('lommy', ch(75))).toContain('hot-pie')
      expect(people('lommy', ch(93))).toContain('gregor-clegane')
      expect(people('lommy', ep(30))).toStrictEqual([])
      expect(people('lommy', ep(archive.series.episodeCeiling))).toStrictEqual(
        [],
      )
    })

    it('tells Arya’s road from each medium’s side', () => {
      expect(people('arya-stark', ep(12))).toContain('jaqen-hghar')
      expect(people('arya-stark', ep(12))).not.toContain('rorge')
      expect(people('arya-stark', ch(79))).toContain('rorge')
      expect(people('arya-stark', ep(14))).toContain('tywin-lannister')
      expect(people('arya-stark', ch(100))).toContain('chiswyck')
      expect(people('arya-stark', ep(16))).toContain('tickler')
      expect(people('arya-stark', ep(16))).not.toContain('weese')
      expect(people('arya-stark', ch(112))).toContain('weese')
      expect(people('arya-stark', ch(138))).toContain('roose-bolton')
      expect(people('arya-stark', ep(20))).toContain('jaqen-hghar')
    })

    it('keeps Robb’s show wedding and the books’ envoy apart', () => {
      expect(people('robb-stark', ep(10))).not.toContain('alton-lannister')
      expect(people('robb-stark', ep(11))).toContain('alton-lannister')
      expect(people('robb-stark', ep(20))).toContain('talisa-maegyr')
      expect(people('robb-stark', ch(81))).toContain('cleos-frey')
      expect(people('robb-stark', ch(81))).not.toContain('talisa-maegyr')
    })

    it('files Polliver’s and Gregor’s men in each medium’s own words', () => {
      expect(people('polliver', ep(14))).toContain('tywin-lannister')
      expect(people('polliver', ch(100))).toContain('chiswyck')
      expect(people('gregor-clegane', ch(93))).toContain('lommy')
      expect(people('gregor-clegane', ep(18))).toContain('amory-lorch')
      expect(people('gregor-clegane', ep(14))).not.toContain('tickler')
    })
  },
)
