import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type { Entity, Opened, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { RelationshipView } from '~/lib/view/relationships'
import { withoutDrawings } from '~/test/archive'
import { leaksOf } from '~/test/fog'
import { LOADED_SERIES } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The omissions live beside the factual evidence.
import coverage from '../../../docs/content-provenance/game-of-thrones-relationships.json' with { type: 'json' }
import { relationshipsPage } from './pages.server'
import { payloadsFor } from './payloads.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Game of Thrones is not registered')
}
const { archive } = series

const characterPayload = payloadsFor(archive).find(
  ({ name }) => name === 'loadRelationships',
)
const leaksIn = leaksOf(series)

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

const characters = archive.entities.filter(({ kind }) => kind === 'character')
const owners = characters.filter(
  (owner) => archive.datedOf(owner, 'relationships').length > 0,
)

type Mode = 'chapter' | 'episode'
const MODES: Mode[] = ['episode', 'chapter']
interface BoundaryCase {
  after: Relationship[]
  at: Relationship[]
  before: Relationship[]
  date: number
  mode: Mode
  owner: string
}
interface Card {
  character: string
  summary: string
  type: string
}

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

/** Where an entry opens in one unit: the later of the entry and its owner. */
function dateOf({ gate }: Opened<Relationship[]>, mode: Mode): number {
  return mode === 'episode' ? gate.revealedAtEpisode : gate.revealedAtChapter
}

/** Each source resolves its own selections. */
function casesOf(owner: Entity, mode: Mode): BoundaryCase[] {
  const applicable = archive
    .datedOf(owner, 'relationships')
    .filter((entry) => toldIn(entry, mode))
  return applicable.map((entry, index) => {
    const date = dateOf(entry, mode)
    const next = applicable[index + 1]
    const after =
      next !== undefined && dateOf(next, mode) === date + 1 ?
        next.value
      : entry.value
    return {
      owner: owner.id,
      mode,
      date,
      before: applicable[index - 1]?.value ?? [],
      at: entry.value,
      after,
    }
  })
}

const cases = owners.flatMap((owner) =>
  MODES.flatMap((mode) => (toldIn(owner, mode) ? casesOf(owner, mode) : [])),
)

/** Compare only the current cards; separate assertions cover history gates. */
function localized(relations: Relationship[], locale: Locale): Card[] {
  return relations.map(({ character, type, summary }) => ({
    character,
    type: type[locale],
    summary: summary[locale],
  }))
}

function hasCurrentHistory({
  history,
  summary,
  type,
}: RelationshipView): boolean {
  const current = history.at(-1)
  return (
    current?.summary === summary
    && current.type === type
    && history.every((stage, index) => {
      const previous = history[index - 1]
      return (
        previous === undefined
        || previous.type !== stage.type
        || previous.summary !== stage.summary
      )
    })
  )
}

describe('Game of Thrones relationship coverage', () => {
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

  it.each(LOCALES)(
    'has nonempty localized types and explanations in %s',
    (locale) => {
      const selections = owners.flatMap((owner) =>
        archive.datedOf(owner, 'relationships'),
      )
      for (const selection of selections) {
        expect(selection.value.length).toBeGreaterThan(0)

        for (const relation of selection.value) {
          expect(relation.type[locale].trim()).not.toBe('')
          expect(relation.summary[locale].trim()).not.toBe('')
        }
      }
    },
  )
})

// The bookmarks the payload sweep asks at, saga borders included.
const swept = archive.bookmarks.map((bookmark) => JSON.stringify(bookmark))

describe('Game of Thrones relationship sweep', () => {
  it.each(cases)(
    'sweeps $owner at $mode $date and the bookmark before',
    ({ mode, date }) => {
      // Before a gate at 1 there is no bookmark but none (`null`).
      for (const count of [Math.max(date - 1, 1), date]) {
        const bookmark = mode === 'episode' ? ep(count) : ch(count)

        expect(swept).toContain(JSON.stringify(bookmark))
      }
    },
  )
})

describe.each(LOCALES)('Game of Thrones payload boundaries in %s', (locale) => {
  it.each(cases)(
    '$owner at $mode $date restores exact current words on backwards movement',
    ({ owner, mode, date, before, at, after }) => {
      const expected = new Map([
        [date - 1, before],
        [date, at],
        [date + 1, after],
      ])

      expect(Number.isSafeInteger(date)).toBe(true)

      // Revisit the earlier bookmark after the future one to catch retained state.
      for (const count of [date - 1, date, date + 1, date - 1]) {
        const bookmark = mode === 'episode' ? ep(count) : ch(count)
        const sent = projected(owner, bookmark, locale)
        const payload = characterPayload?.run(bookmark, locale, owner)

        expect(payload).toStrictEqual(
          relationshipsPage(owner, readerFor(archive, bookmark, locale)),
        )
        expect(leaksIn(payload, bookmark)).toStrictEqual([])
        expect(
          sent.map(({ person, type, summary }) => ({
            character: person.id,
            type,
            summary,
          })),
        ).toStrictEqual(localized(expected.get(count) ?? [], locale))

        const stages = sent.flatMap(({ history }) => history)

        expect(
          stages.every(
            (stage) =>
              (mode === 'episode' ?
                stage.revealedAtEpisode
              : stage.revealedAtChapter) <= count,
          ),
        ).toBe(true)
        expect(sent.every((relation) => hasCurrentHistory(relation))).toBe(true)
      }
    },
  )
})

const persistenceCases = owners.flatMap((owner) =>
  MODES.filter((mode) => toldIn(owner, mode)).flatMap((mode) =>
    archive
      .datedOf(owner, 'relationships')
      .filter((entry) => toldIn(entry, mode))
      .slice(-1)
      .map((last) => ({ owner: owner.id, mode, date: dateOf(last, mode) })),
  ),
)

describe.each(LOCALES)(
  'Game of Thrones selection persistence in %s',
  (locale) => {
    it.each(persistenceCases)(
      'carries $owner’s last $mode selection to the end of the dial',
      ({ owner, mode, date }) => {
        const at = mode === 'episode' ? ep(date) : ch(date)
        const later =
          mode === 'episode' ?
            ep(archive.series.episodeCeiling)
          : ch(archive.series.chapterCeiling)

        expect(projected(owner, later, locale)).toStrictEqual(
          projected(owner, at, locale),
        )
      },
    )
  },
)

describe.each(LOCALES)(
  'Game of Thrones verified revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    // The type Daenerys's selection gives Mirri at a bookmark.
    const mirriType = (bookmark: Bookmark): string | undefined =>
      projected('daenerys-targaryen', bookmark, locale).find(
        ({ person }) => person.id === 'mirri-maz-duur',
      )?.type

    it('keeps the last stage-1 selection across both stage edges', () => {
      for (const owner of owners) {
        expect(projected(owner.id, ep(11), locale), owner.id).toStrictEqual(
          projected(owner.id, ep(10), locale),
        )
        expect(projected(owner.id, ch(74), locale), owner.id).toStrictEqual(
          projected(owner.id, ch(73), locale),
        )
        expect(
          projected(
            owner.id,
            { mode: 'season', season: 2, episode: 1 },
            locale,
          ),
          owner.id,
        ).toStrictEqual(
          projected(
            owner.id,
            { mode: 'season', season: 1, episode: 10 },
            locale,
          ),
        )
      }
    })

    it('tells why Jorah fled Eddard in episode 2 and chapter 37', () => {
      expect(people('jorah-mormont', ep(1))).not.toContain('eddard-stark')
      expect(people('jorah-mormont', ep(2))).toContain('eddard-stark')
      expect(people('jorah-mormont', ch(36))).not.toContain('eddard-stark')
      expect(people('jorah-mormont', ch(37))).toContain('eddard-stark')
    })

    it('gives Jorah his wedding links at episode 1 but chapter 12', () => {
      expect(people('jorah-mormont', ep(1))).toContain('viserys-targaryen')
      expect(projected('jorah-mormont', ch(11), locale)).toStrictEqual([])
      expect(people('jorah-mormont', ch(12))).toContain('viserys-targaryen')
    })

    it('keeps Varys a show-only link', () => {
      expect(people('jorah-mormont', ep(4))).not.toContain('varys')
      expect(people('jorah-mormont', ep(5))).toContain('varys')
      expect(people('illyrio-mopatis', ep(4))).not.toContain('varys')
      expect(people('illyrio-mopatis', ep(5))).toContain('varys')

      for (const id of ['jorah-mormont', 'illyrio-mopatis']) {
        expect(people(id, ch(archive.series.chapterCeiling))).not.toContain(
          'varys',
        )
      }
    })

    it('hands the whip on Viserys to Rakharo in the show and Jhogo in the books', () => {
      expect(people('viserys-targaryen', ep(3))).toContain('rakharo')
      expect(people('viserys-targaryen', ep(3))).not.toContain('jhogo')
      expect(people('viserys-targaryen', ch(24))).toContain('jhogo')
      expect(people('viserys-targaryen', ch(24))).not.toContain('rakharo')
    })

    it('tells Mago’s fate apart in the two media', () => {
      const words = (bookmark: Bookmark): string[] =>
        projected('drogo', bookmark, locale)
          .filter(({ person }) => person.id === 'mago')
          .map(({ summary }) => summary)

      expect(words(ep(8))).toStrictEqual([magoWords('episode', locale)])
      expect(words(ch(62))).toStrictEqual([magoWords('chapter', locale)])
      expect(words(ep(8))).not.toStrictEqual(words(ch(62)))
      expect(people('mago', ep(archive.series.episodeCeiling))).not.toContain(
        'eroeh',
      )
      expect(people('mago', ch(68))).not.toContain('eroeh')
      expect(people('mago', ch(69))).toContain('eroeh')
    })

    it('keeps the books-only roster out of show pages', () => {
      for (const id of [
        'cohollo',
        'haggo',
        'jhogo',
        'quaro',
        'eroeh',
        'aggo',
      ]) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
        ).toStrictEqual([])
        expect(projected(id, ch(73), locale)).not.toStrictEqual([])
      }
    })

    it('opens Mirri’s revenge at chapter 69 and the pyre at chapter 73', () => {
      expect(people('daenerys-targaryen', ch(68))).not.toContain('rakharo')
      expect(mirriType(ch(68))).toBeDefined()
      expect(mirriType(ch(69))).toBeDefined()
      expect(mirriType(ch(69))).not.toBe(mirriType(ch(68)))
      expect(people('daenerys-targaryen', ch(69))).not.toContain('rakharo')
      expect(people('daenerys-targaryen', ch(73))).toContain('rakharo')
      expect(people('daenerys-targaryen', ep(9))).not.toContain('rakharo')
      expect(people('daenerys-targaryen', ep(10))).toContain('rakharo')
    })
  },
)

/** The words Drogo's latest selection in one medium gives Mago. */
function magoWords(mode: Mode, locale: Locale): string {
  const drogo = archive.getCharacter('drogo')
  if (drogo === undefined) {
    throw new Error('no drogo')
  }
  const relation = archive
    .datedOf(drogo, 'relationships')
    .filter((dated) => toldIn(dated, mode))
    .flatMap(({ value }) => value)
    .findLast(({ character }) => character === 'mago')
  if (relation === undefined) {
    throw new Error('no mago on drogo')
  }

  return relation.summary[locale]
}

// Winterfell and the North (#1345): each link the two media time or word
// apart, checked just before its pin and at it.
describe.each(LOCALES)(
  'Game of Thrones northern revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    // What one owner's card says about one person at a bookmark.
    const said = (
      owner: string,
      person: string,
      bookmark: Bookmark,
    ): string | undefined => wordsOf([owner, person], bookmark, locale)?.summary
    const typed = (
      owner: string,
      person: string,
      bookmark: Bookmark,
    ): string | undefined => wordsOf([owner, person], bookmark, locale)?.type

    it('has Jaime push Bran in episode 1 but chapter 9', () => {
      expect(people('bran-stark', ep(1))).toContain('jaime-lannister')
      expect(people('bran-stark', ch(8))).not.toContain('jaime-lannister')
      expect(people('bran-stark', ch(9))).toContain('jaime-lannister')
    })

    it('names Sansa’s wolf at episode 1 but chapter 16', () => {
      expect(people('sansa-stark', ep(1))).toContain('lady-direwolf')
      expect(people('sansa-stark', ch(15))).not.toContain('lady-direwolf')
      expect(people('sansa-stark', ch(16))).toContain('lady-direwolf')
    })

    it('has Nymeria bite Joffrey at her show gate but in chapter 17', () => {
      expect(people('nymeria', ep(2))).toContain('joffrey-baratheon')
      expect(people('nymeria', ch(8))).toStrictEqual(['arya-stark'])
      expect(people('nymeria', ch(16))).not.toContain('joffrey-baratheon')
      expect(people('nymeria', ch(17))).toContain('joffrey-baratheon')
    })

    it('gives Grey Wind his master at chapter 11 and the Greatjon at 8 / 54', () => {
      expect(projected('grey-wind', ch(10), locale)).toStrictEqual([])
      expect(people('grey-wind', ch(11))).toStrictEqual(['robb-stark'])
      expect(people('grey-wind', ch(53))).not.toContain('greatjon-umber')
      expect(people('grey-wind', ch(54))).toContain('greatjon-umber')
      expect(projected('grey-wind', ep(7), locale)).toStrictEqual([])
      expect(people('grey-wind', ep(8))).toContain('greatjon-umber')
    })

    it('names Rickon’s wolf at chapter 25 but episode 10', () => {
      expect(people('rickon-stark', ch(24))).not.toContain('shaggydog')
      expect(people('rickon-stark', ch(25))).toContain('shaggydog')
      expect(people('rickon-stark', ep(9))).not.toContain('shaggydog')
      expect(people('rickon-stark', ep(10))).toContain('shaggydog')
    })

    it('takes Bran into the crypts with Osha in the show and Luwin in the books', () => {
      expect(people('rickon-stark', ep(9))).not.toContain('osha')
      expect(people('rickon-stark', ep(10))).toContain('osha')
      expect(people('rickon-stark', ep(10))).not.toContain('luwin')
      expect(people('rickon-stark', ch(66))).not.toContain('luwin')
      expect(people('rickon-stark', ch(67))).toContain('luwin')
      expect(people('rickon-stark', ch(67))).not.toContain('osha')
      expect(people('shaggydog', ep(10))).toContain('bran-stark')
      expect(people('shaggydog', ch(66))).not.toContain('luwin')
      expect(people('shaggydog', ch(67))).toContain('luwin')
      expect(people('osha', ep(9))).not.toContain('rickon-stark')
      expect(people('osha', ep(10))).toContain('rickon-stark')
      expect(people('osha', ch(archive.series.chapterCeiling))).not.toContain(
        'rickon-stark',
      )
    })

    it('kills Tomard in chapter 50 and lets the show’s survive', () => {
      const lord = ['tomard', 'eddard-stark'] as const

      expect(said(...lord, ch(50))).not.toBe(said(...lord, ch(49)))
      expect(said(...lord, ep(9))).not.toBe(said(...lord, ep(8)))
      expect(said(...lord, ep(9))).not.toBe(said(...lord, ch(50)))
    })

    it('opens Vayon Poole at his death in the show and alive in the books', () => {
      expect(projected('vayon-poole', ch(16), locale)).toStrictEqual([])
      expect(people('vayon-poole', ch(17))).toContain('jeyne-poole')
      expect(people('vayon-poole', ep(8))).toStrictEqual(['eddard-stark'])

      const lord = ['vayon-poole', 'eddard-stark'] as const

      expect(said(...lord, ch(52))).not.toBe(said(...lord, ch(51)))
      expect(said(...lord, ep(8))).toBe(said(...lord, ch(52)))
    })

    it('tells the Twins at chapter 60 and Eddard’s death at 66', () => {
      expect(people('catelyn-stark', ch(59))).not.toContain('walder-frey')
      expect(people('catelyn-stark', ch(60))).toContain('walder-frey')
      expect(people('catelyn-stark', ep(8))).not.toContain('walder-frey')
      expect(people('catelyn-stark', ep(9))).toContain('walder-frey')

      const husband = ['catelyn-stark', 'eddard-stark'] as const

      expect(said(...husband, ch(66))).not.toBe(said(...husband, ch(65)))
      expect(said(...husband, ep(9))).toBe(said(...husband, ch(66)))
      expect(people('robb-stark', ch(63))).not.toContain('jaime-lannister')
      expect(people('robb-stark', ch(64))).toContain('jaime-lannister')
    })

    it('opens Old Nan with Bran in the show and Catelyn in the books', () => {
      expect(people('old-nan', ep(3))).toStrictEqual(['bran-stark'])
      expect(people('old-nan', ch(15))).toStrictEqual(['catelyn-stark'])
      expect(people('old-nan', ch(24))).not.toContain('bran-stark')
      expect(people('old-nan', ch(25))).toContain('bran-stark')
    })

    it('keeps the show’s own scenes out of the books', () => {
      expect(people('benjen-stark', ep(2))).not.toContain('yoren')
      expect(people('benjen-stark', ep(3))).toContain('yoren')
      expect(people('rickon-stark', ep(7))).toStrictEqual(
        people('rickon-stark', ep(1)),
      )
      expect(said('rickon-stark', 'robb-stark', ep(8))).not.toBe(
        said('rickon-stark', 'robb-stark', ep(7)),
      )
      expect(people('osha', ep(6))).not.toContain('luwin')
      expect(people('osha', ep(7))).toContain('luwin')
      expect(people('mordane', ep(7))).toStrictEqual(people('mordane', ep(1)))
      expect(said('mordane', 'sansa-stark', ep(8))).not.toBe(
        said('mordane', 'sansa-stark', ep(7)),
      )
      expect(people('galbart-glover', ep(8))).toContain('greatjon-umber')
      expect(people('galbart-glover', ch(56))).toStrictEqual(['robb-stark'])
    })

    it('swears Theon to King Robb and keeps the show’s scenes out of the books', () => {
      const king = ['theon-greyjoy', 'robb-stark'] as const

      expect(typed(...king, ep(10))).not.toBe(typed(...king, ep(9)))
      expect(typed(...king, ch(archive.series.chapterCeiling))).toBe(
        typed(...king, ep(9)),
      )

      for (const id of ['benjen-stark', 'osha', 'galbart-glover']) {
        const last = people(id, ch(archive.series.chapterCeiling))

        expect(last, id).not.toContain('yoren')
        expect(last, id).not.toContain('luwin')
        expect(last, id).not.toContain('greatjon-umber')
      }
    })

    it('tells Smalljon, Dacey and Jeyne Poole in the books alone', () => {
      expect(people('greatjon-umber', ch(63))).not.toContain('smalljon-umber')
      expect(people('greatjon-umber', ch(64))).toContain('smalljon-umber')
      expect(people('maege-mormont', ch(63))).not.toContain('dacey-mormont')
      expect(people('maege-mormont', ch(64))).toContain('dacey-mormont')
      expect(people('mordane', ch(8))).toContain('jeyne-poole')

      for (const id of ['greatjon-umber', 'maege-mormont', 'mordane']) {
        const last = people(id, ep(archive.series.episodeCeiling))

        expect(last, id).not.toContain('smalljon-umber')
        expect(last, id).not.toContain('dacey-mormont')
        expect(last, id).not.toContain('jeyne-poole')
      }
    })

    it('gives Harwin his father’s death at chapter 51', () => {
      expect(said('harwin', 'hullen', ch(51))).not.toBe(
        said('harwin', 'hullen', ch(50)),
      )
    })

    it('turns Eddard to the past tense on Rickon’s and Luwin’s pages at 9 / 66', () => {
      for (const owner of ['rickon-stark', 'luwin']) {
        const father = [owner, 'eddard-stark'] as const

        expect(said(...father, ch(66)), owner).not.toBe(said(...father, ch(65)))
        expect(said(...father, ep(9)), owner).not.toBe(said(...father, ep(8)))
        expect(said(...father, ep(9)), owner).toBe(said(...father, ch(66)))
      }
    })

    it('holds Sansa on Arya’s page at episode 8 but chapter 52', () => {
      const sister = ['arya-stark', 'sansa-stark'] as const

      expect(said(...sister, ch(52))).not.toBe(said(...sister, ch(51)))
      expect(said(...sister, ch(51))).not.toBe(said(...sister, ep(8)))
      expect(said(...sister, ep(8))).toBe(said(...sister, ch(52)))
    })

    it('opens Mikken in each medium at its own gate', () => {
      expect(projected('mikken', ep(1), locale)).toStrictEqual([])
      expect(people('mikken', ep(2))).toContain('arya-stark')
      expect(projected('mikken', ch(53), locale)).toStrictEqual([])
      expect(people('mikken', ch(54))).toContain('arya-stark')
    })

    it('keeps the book-only roster and the late northern lords out of show pages', () => {
      for (const id of [
        'hullen',
        'jeyne-poole',
        'hallis-mollen',
        'dacey-mormont',
        'harwin',
        'alyn',
        'smalljon-umber',
        'rickard-karstark',
        'roose-bolton',
        'robett-glover',
        'wendel-manderly',
      ]) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
          id,
        ).toStrictEqual([])
        expect(projected(id, ch(73), locale), id).not.toStrictEqual([])
      }
    })
  },
)

/** The current card one owner shows for one person at a bookmark. */
function wordsOf(
  [owner, person]: [string, string],
  bookmark: Bookmark,
  locale: Locale,
): RelationshipView | undefined {
  return projected(owner, bookmark, locale).find(
    (relation) => relation.person.id === person,
  )
}

// The Night's Watch cast (#1347): the links the two media time or word
// differently. Each check compares the bookmark before a pin with the pin.
describe.each(LOCALES)(
  'Game of Thrones Night’s Watch revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    // The card an owner's selection gives one person at a bookmark.
    const card = (
      owner: string,
      person: string,
      bookmark: Bookmark,
    ): RelationshipView | undefined =>
      projected(owner, bookmark, locale).find(
        (relation) => relation.person.id === person,
      )
    // Ned's words on Jon's page, Jafer's type on Jaremy's, Jon's on Halder's.
    const ned = (bookmark: Bookmark): string | undefined =>
      card('jon-snow', 'eddard-stark', bookmark)?.summary
    const jafer = (bookmark: Bookmark): string | undefined =>
      card('jaremy-rykker', 'jafer-flowers', bookmark)?.type
    const halderJon = (bookmark: Bookmark): string | undefined =>
      card('halder', 'jon-snow', bookmark)?.summary

    it('has the show’s Ned behead Will and the book’s behead Gared', () => {
      expect(people('will', ep(1))).toContain('eddard-stark')
      expect(people('will', ch(archive.series.chapterCeiling))).not.toContain(
        'eddard-stark',
      )
      expect(people('gared', ch(1))).not.toContain('eddard-stark')
      expect(people('gared', ch(2))).toContain('eddard-stark')
      expect(people('gared', ep(archive.series.episodeCeiling))).not.toContain(
        'eddard-stark',
      )
    })

    it('lets Tyrion stop the armory fight in the show and Donal Noye in the books', () => {
      expect(people('jon-snow', ep(2))).not.toContain('alliser-thorne')
      expect(people('jon-snow', ep(3))).toContain('alliser-thorne')

      const tyrionShow = card('jon-snow', 'tyrion-lannister', ep(3))?.summary
      const tyrionBooks = card('jon-snow', 'tyrion-lannister', ch(20))?.summary

      expect(tyrionShow).toBeDefined()
      expect(tyrionBooks).toBeDefined()
      expect(tyrionShow).not.toBe(tyrionBooks)
      expect(people('jon-snow', ep(3))).not.toContain('donal-noye')
      expect(people('jon-snow', ch(19))).not.toContain('donal-noye')
      expect(people('jon-snow', ch(20))).toContain('donal-noye')
    })

    it('tells Ned’s death on Jon’s page at episode 9 and chapter 66', () => {
      expect(ned(ep(8))).toBeDefined()
      expect(ned(ep(9))).not.toBe(ned(ep(8)))
      expect(ned(ch(65))).toBeDefined()
      expect(ned(ch(66))).not.toBe(ned(ch(65)))
      expect(ned(ep(9))).toBe(ned(ch(66)))
    })

    it('gives Jeor the letter for Jon in the books alone', () => {
      expect(projected('jeor-mormont', ch(19), locale)).toStrictEqual([])
      expect(people('jeor-mormont', ch(20))).toContain('jon-snow')
      expect(people('jeor-mormont', ep(6))).not.toContain('jon-snow')
      expect(people('jeor-mormont', ep(7))).toContain('jon-snow')
    })

    it('opens Rast at episode 3 but chapter 27', () => {
      expect(projected('rast', ep(2), locale)).toStrictEqual([])
      expect(people('rast', ep(3))).toContain('jon-snow')
      expect(people('rast', ep(3))).not.toContain('samwell-tarly')
      expect(people('rast', ep(4))).toContain('samwell-tarly')
      expect(projected('rast', ch(26), locale)).toStrictEqual([])
      expect(people('rast', ch(27))).toContain('samwell-tarly')
    })

    it('sends Yoren north with Gendry in the show alone', () => {
      expect(people('yoren', ep(8))).not.toContain('arya-stark')
      expect(people('yoren', ep(9))).toContain('arya-stark')
      expect(people('yoren', ch(65))).not.toContain('arya-stark')
      expect(people('yoren', ch(66))).toContain('arya-stark')
      expect(people('yoren', ep(9))).not.toContain('gendry')
      expect(people('yoren', ep(10))).toContain('gendry')
      expect(people('yoren', ch(archive.series.chapterCeiling))).not.toContain(
        'gendry',
      )
    })

    it('kills Jaremy by Jafer’s corpse in the books alone', () => {
      expect(jafer(ch(60))).toBeDefined()
      expect(jafer(ch(61))).not.toBe(jafer(ch(60)))
      expect(people('jafer-flowers', ch(60))).not.toContain('jaremy-rykker')
      expect(people('jafer-flowers', ch(61))).toContain('jaremy-rykker')
      expect(
        people('jafer-flowers', ep(archive.series.episodeCeiling)),
      ).not.toContain('jaremy-rykker')
    })

    it('keeps the show’s escort at the oath out of the books', () => {
      expect(projected('othell-yarwyck', ep(6), locale)).toStrictEqual([])
      expect(people('othell-yarwyck', ep(7))).toContain('jon-snow')
      expect(
        projected('othell-yarwyck', ch(archive.series.chapterCeiling), locale),
      ).toStrictEqual([])
      expect(people('jaremy-rykker', ep(6))).not.toContain('jon-snow')
      expect(people('jaremy-rykker', ep(7))).toContain('jon-snow')
      expect(
        people('jaremy-rykker', ch(archive.series.chapterCeiling)),
      ).not.toContain('jon-snow')
    })

    it('has Halder ride after Jon in the books alone', () => {
      expect(halderJon(ch(70))).toBeDefined()
      expect(halderJon(ch(71))).not.toBe(halderJon(ch(70)))
      expect(halderJon(ep(archive.series.episodeCeiling))).toBeDefined()
      expect(halderJon(ep(archive.series.episodeCeiling))).not.toBe(
        halderJon(ch(71)),
      )
    })

    it('names Jorah on Jeor’s page in the show alone', () => {
      expect(people('jeor-mormont', ep(8))).not.toContain('jorah-mormont')
      expect(people('jeor-mormont', ep(9))).toContain('jorah-mormont')
      expect(people('jeor-mormont', ep(10))).toContain('jorah-mormont')
      expect(people('jeor-mormont', ch(61))).toContain('jon-snow')
      expect(people('jeor-mormont', ch(61))).not.toContain('jorah-mormont')
      expect(
        people('jeor-mormont', ch(archive.series.chapterCeiling)),
      ).not.toContain('jorah-mormont')
    })

    it('has Sam bring Jon word of Robb in the show alone', () => {
      const samShow = card('jon-snow', 'samwell-tarly', ep(9))?.summary
      const samBooks = card('jon-snow', 'samwell-tarly', ch(66))?.summary

      expect(samShow).toBeDefined()
      expect(samBooks).toBeDefined()
      expect(samShow).not.toBe(
        card('jon-snow', 'samwell-tarly', ep(8))?.summary,
      )
      expect(samBooks).not.toBe(samShow)
      expect(samBooks).toBe(card('jon-snow', 'samwell-tarly', ch(53))?.summary)
    })

    it('keeps the Wall’s books-only roster out of show pages', () => {
      for (const id of ['donal-noye', 'chett', 'todder', 'bowen-marsh']) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
        ).toStrictEqual([])
        expect(projected(id, ch(73), locale)).not.toStrictEqual([])
      }
    })

    it.each([
      // owner, the chapter of an entry, a person it adds there
      ['donal-noye', 20, 'jon-snow'],
      ['todder', 20, 'jon-snow'],
      ['todder', 71, 'samwell-tarly'],
      ['bowen-marsh', 22, 'tyrion-lannister'],
      ['bowen-marsh', 49, 'samwell-tarly'],
      ['chett', 42, 'aemon'],
      ['chett', 49, 'samwell-tarly'],
    ])('opens %s’s chapter %i entry with %s', (owner, chapter, person) => {
      expect(people(owner, ch(chapter - 1))).not.toContain(person)
      expect(people(owner, ch(chapter))).toContain(person)
    })
  },
)

// King's Landing, the riverlands and the Vale (#1346): the links the two
// media time or word differently. Each check compares the bookmark before a
// pin with the pin, so moving the entry fails it.
describe.each(LOCALES)(
  'Game of Thrones King’s Landing revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    const type = (
      pair: [string, string],
      bookmark: Bookmark,
    ): string | undefined => wordsOf(pair, bookmark, locale)?.type
    const summary = (
      pair: [string, string],
      bookmark: Bookmark,
    ): string | undefined => wordsOf(pair, bookmark, locale)?.summary

    it('tells the twins are lovers at episode 1 but chapter 9', () => {
      const twins: [string, string] = ['cersei-lannister', 'jaime-lannister']
      const lover = type(twins, ep(1))

      expect(lover).toBeDefined()
      expect(type(twins, ch(8))).not.toBe(lover)
      expect(type(twins, ch(9))).toBe(lover)
      expect(people('jaime-lannister', ep(1))).toContain('bran-stark')
      expect(people('jaime-lannister', ch(8))).not.toContain('bran-stark')
      expect(people('jaime-lannister', ch(9))).toContain('bran-stark')
    })

    it('names Jaime the children’s father at episode 7 and chapter 50', () => {
      for (const child of [
        'joffrey-baratheon',
        'myrcella-baratheon',
        'tommen-baratheon',
      ]) {
        expect(people(child, ep(6)), child).not.toContain('jaime-lannister')
        expect(people(child, ep(7)), child).toContain('jaime-lannister')
        expect(people(child, ch(49)), child).not.toContain('jaime-lannister')
        expect(people(child, ch(50)), child).toContain('jaime-lannister')
      }
    })

    it('puts Robert in the past tense at his death in each medium', () => {
      for (const owner of [
        'cersei-lannister',
        'joffrey-baratheon',
        'ilyn-payne',
        'barristan-selmy',
        'gendry',
      ]) {
        const robert: [string, string] = [owner, 'robert-baratheon']

        expect(summary(robert, ep(7)), owner).toBeDefined()
        expect(summary(robert, ep(7)), owner).not.toBe(summary(robert, ep(6)))
        expect(summary(robert, ch(50)), owner).not.toBe(summary(robert, ch(49)))
      }
    })

    it('tells Eddard’s death at episode 9 and chapter 66', () => {
      for (const owner of ['cersei-lannister', 'pycelle', 'renly-baratheon']) {
        const ned: [string, string] = [owner, 'eddard-stark']

        expect(summary(ned, ep(9)), owner).toBeDefined()
        expect(summary(ned, ep(9)), owner).not.toBe(summary(ned, ep(8)))
        expect(summary(ned, ch(66)), owner).not.toBe(summary(ned, ch(65)))
      }

      expect(people('ilyn-payne', ch(65))).not.toContain('eddard-stark')
      expect(people('ilyn-payne', ch(66))).toContain('eddard-stark')
      expect(people('ilyn-payne', ep(8))).not.toContain('eddard-stark')
      expect(people('ilyn-payne', ep(9))).toContain('eddard-stark')
    })

    it('tells Sansa’s plea to Joffrey at episode 8 and chapter 58', () => {
      const sansa: [string, string] = ['joffrey-baratheon', 'sansa-stark']

      expect(summary(sansa, ep(7))).toBeDefined()
      expect(summary(sansa, ep(8))).not.toBe(summary(sansa, ep(7)))
      expect(summary(sansa, ch(57))).toBeDefined()
      expect(summary(sansa, ch(58))).not.toBe(summary(sansa, ch(57)))
      expect(summary(sansa, ep(8))).toBe(summary(sansa, ch(58)))
    })

    it('tells Robin’s wish to see Tyrion fly at episode 5 and chapter 39', () => {
      const tyrion: [string, string] = ['robin-arryn', 'tyrion-lannister']
      const robin: [string, string] = ['lysa-arryn', 'robin-arryn']

      expect(summary(tyrion, ch(38))).toBeDefined()
      expect(summary(tyrion, ch(39))).not.toBe(summary(tyrion, ch(38)))
      expect(summary(tyrion, ep(5))).toBe(summary(tyrion, ch(39)))
      expect(summary(robin, ch(38))).toBeDefined()
      expect(summary(robin, ch(39))).not.toBe(summary(robin, ch(38)))
      expect(summary(robin, ep(5))).toBe(summary(robin, ch(39)))
    })

    it('stops calling Robert the children’s father at his death', () => {
      for (const child of [
        'joffrey-baratheon',
        'myrcella-baratheon',
        'tommen-baratheon',
      ]) {
        const robert: [string, string] = [child, 'robert-baratheon']

        expect(type(robert, ch(50)), child).not.toBe(type(robert, ch(49)))
        expect(type(robert, ep(7)), child).not.toBe(type(robert, ep(6)))
      }
    })

    it('has Sandor guard a king from Robert’s death', () => {
      const joffrey: [string, string] = ['sandor-clegane', 'joffrey-baratheon']

      expect(summary(joffrey, ep(7))).not.toBe(summary(joffrey, ep(6)))
      expect(summary(joffrey, ch(50))).not.toBe(summary(joffrey, ch(49)))
    })

    it('keeps Varys’s meeting with Illyrio and his informer to the show', () => {
      expect(people('varys', ep(4))).not.toContain('illyrio-mopatis')
      expect(people('varys', ep(5))).toContain('illyrio-mopatis')
      expect(people('varys', ep(4))).not.toContain('jorah-mormont')
      expect(people('varys', ep(5))).toContain('jorah-mormont')
      expect(people('varys', ch(archive.series.chapterCeiling))).not.toContain(
        'illyrio-mopatis',
      )
      // The books bring Jorah's reports to the council in Eddard VIII.
      expect(people('varys', ch(33))).not.toContain('jorah-mormont')
      expect(people('varys', ch(34))).toContain('jorah-mormont')
      expect(type(['varys', 'eddard-stark'], ch(59))).not.toBe(
        type(['varys', 'eddard-stark'], ch(58)),
      )
    })

    it('makes Renly and Loras lovers in the show alone', () => {
      const pair: [string, string] = ['renly-baratheon', 'loras-tyrell']
      const lover = type(pair, ep(5))

      expect(people('renly-baratheon', ep(4))).not.toContain('loras-tyrell')
      expect(lover).toBeDefined()
      expect(people('renly-baratheon', ch(49))).not.toContain('loras-tyrell')
      expect(people('renly-baratheon', ch(50))).toContain('loras-tyrell')
      expect(type(pair, ch(50))).not.toBe(lover)
      expect(people('loras-tyrell', ep(4))).not.toContain('renly-baratheon')
      expect(people('loras-tyrell', ep(5))).toContain('renly-baratheon')
      expect(people('loras-tyrell', ch(49))).not.toContain('renly-baratheon')
      expect(people('loras-tyrell', ch(50))).toContain('renly-baratheon')
    })

    it('gives the rose at chapter 30 and the fight with Gregor at 31', () => {
      expect(people('loras-tyrell', ch(29))).toStrictEqual([])
      expect(people('loras-tyrell', ch(30))).toStrictEqual(['sansa-stark'])
      expect(people('loras-tyrell', ch(31))).toContain('gregor-clegane')
      expect(people('loras-tyrell', ep(5))).toContain('gregor-clegane')
      expect(people('gregor-clegane', ch(30))).not.toContain('loras-tyrell')
      expect(people('gregor-clegane', ch(31))).toContain('loras-tyrell')
      expect(people('sandor-clegane', ch(30))).not.toContain('gregor-clegane')
      expect(people('sandor-clegane', ch(31))).toContain('gregor-clegane')
    })

    it('keeps Cersei’s and Lancel’s affair to the show', () => {
      const ceiling = ch(archive.series.chapterCeiling)

      expect(people('cersei-lannister', ep(9))).not.toContain(
        'lancel-lannister',
      )
      expect(people('cersei-lannister', ep(10))).toContain('lancel-lannister')
      expect(people('lancel-lannister', ep(9))).not.toContain(
        'cersei-lannister',
      )
      expect(people('lancel-lannister', ep(10))).toContain('cersei-lannister')
      expect(people('cersei-lannister', ceiling)).not.toContain(
        'lancel-lannister',
      )
      expect(people('lancel-lannister', ceiling)).not.toContain(
        'cersei-lannister',
      )
    })

    it('has Robb kill Wallen in the show and Grey Wind in the books', () => {
      expect(people('wallen', ep(6))).toContain('robb-stark')
      expect(people('wallen', ep(6))).not.toContain('grey-wind')
      expect(people('wallen', ch(38))).toContain('grey-wind')
      expect(people('wallen', ch(38))).not.toContain('robb-stark')
    })

    it('splits Tywin’s first links between episode 7 and chapter 57', () => {
      const jaime: [string, string] = ['tywin-lannister', 'jaime-lannister']

      expect(people('tywin-lannister', ep(7))).not.toContain('kevan-lannister')
      expect(people('tywin-lannister', ep(8))).toContain('kevan-lannister')
      expect(people('tywin-lannister', ch(57))).toContain('kevan-lannister')
      expect(summary(jaime, ep(7))).toBeDefined()
      expect(summary(jaime, ep(7))).not.toBe(summary(jaime, ch(57)))
    })

    it.each([
      // owner, the chapter of an entry, a person it adds there
      ['tyrion-lannister', 6, 'jon-snow'],
      ['petyr-baelish', 21, 'eddard-stark'],
      ['varys', 21, 'eddard-stark'],
      ['mycah', 17, 'sandor-clegane'],
      ['sandor-clegane', 17, 'mycah'],
      ['masha-heddle', 57, 'tywin-lannister'],
      ['beric-dondarrion', 44, 'thoros-of-myr'],
      ['stevron-frey', 72, 'robb-stark'],
      ['brynden-tully', 56, 'robb-stark'],
      ['mandon-moore', 58, 'barristan-selmy'],
      ['lyn-corbray', 43, 'lysa-arryn'],
      ['shagga', 57, 'tywin-lannister'],
    ])('opens %s’s chapter %i entry with %s', (owner, chapter, person) => {
      expect(people(owner, ch(chapter - 1))).not.toContain(person)
      expect(people(owner, ch(chapter))).toContain(person)
    })

    it('pins the show’s side of those links to its episodes', () => {
      expect(people('tyrion-lannister', ep(1))).toContain('jon-snow')
      expect(people('petyr-baelish', ep(2))).toStrictEqual([])
      expect(people('petyr-baelish', ep(3))).toContain('eddard-stark')
      expect(people('mycah', ep(3))).not.toContain('sandor-clegane')
      expect(people('mycah', ep(4))).toContain('sandor-clegane')
      expect(
        people('masha-heddle', ep(archive.series.episodeCeiling)),
      ).not.toContain('tywin-lannister')
      expect(
        people('beric-dondarrion', ep(archive.series.episodeCeiling)),
      ).not.toContain('thoros-of-myr')
    })

    it('keeps the show-only recruits out of book pages', () => {
      for (const id of ['hot-pie', 'lommy']) {
        expect(projected(id, ep(9), locale), id).toStrictEqual([])
        expect(projected(id, ep(10), locale), id).not.toStrictEqual([])
        expect(
          projected(id, ch(archive.series.chapterCeiling), locale),
          id,
        ).toStrictEqual([])
      }
    })

    it('keeps the riverlands and Vale books-only roster out of show pages', () => {
      for (const id of [
        'boros-blount',
        'mandon-moore',
        'arys-oakheart',
        'dontos-hollard',
        'thoros-of-myr',
        'balon-swann',
        'robar-royce',
        'yohn-royce',
        'jason-mallister',
        'podrick-payne',
        'edmure-tully',
        'hoster-tully',
        'brynden-tully',
        'donnel-waynwood',
        'nestor-royce',
        'mya-stone',
        'lyn-corbray',
        'anya-waynwood',
      ]) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
          id,
        ).toStrictEqual([])
        expect(projected(id, ch(73), locale), id).not.toStrictEqual([])
      }
    })
  },
)
