import { describe, expect, it } from 'vitest'

import { toldIn } from '~/data/reveal'
import type { Dated, Entity, Relationship } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { Source } from '~/lib/progress/spoiler'
import type { RelationshipView } from '~/lib/view/relationships'
import { withoutDrawings } from '~/test/archive'
import { loadedSeries } from '~/test/series'

// eslint-disable-next-line no-restricted-imports -- The omissions live beside the factual evidence.
import coverage from '../../../docs/content-provenance/game-of-thrones-relationships.json' with { type: 'json' }
import { relationshipsPage } from './pages.server'
import { readerFor } from './reader.server'

const { archive } = loadedSeries('game-of-thrones')

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
})

/**
 * One stage's edge, its last episode and its last chapter, as pairs of
 * bookmarks: the stage's last number in each unit, and the first past it,
 * the next season's first episode among them.
 */
function edgeBookmarks(edge: Edge): [Bookmark, Bookmark][] {
  const season = archive.series.seasons.find(
    ({ last }) => last === edge.episode,
  )
  if (season === undefined) {
    throw new Error(`No season ends at episode ${String(edge.episode)}`)
  }

  return [
    [ep(edge.episode), ep(edge.episode + 1)],
    [ch(edge.chapter), ch(edge.chapter + 1)],
    [
      {
        mode: 'season',
        season: season.number,
        episode: edge.episode - season.first + 1,
      },
      { mode: 'season', season: season.number + 1, episode: 1 },
    ],
  ]
}

/** A stage's last episode and last chapter. */
interface Edge {
  chapter: number
  episode: number
}

/** Each stage's edge, oldest first. */
const STAGES: (Edge & { stage: number })[] = [
  { stage: 1, episode: 10, chapter: 73 },
  { stage: 2, episode: 20, chapter: 143 },
  { stage: 3, episode: 30, chapter: 196 },
]

/**
 * The owners each stage-2 relationships child authors (#1461), one row per
 * cast group: its new characters and the season-1 characters it gives a
 * stage-2 snapshot. Each later child (#1479–#1483) adds its row.
 */
const STAGE_2_GROUPS: { group: string; issue: string; owners: string[] }[] = [
  {
    group: 'Essos and Qarth',
    issue: '#1477',
    owners: [
      'kovarro',
      'xaro-xhoan-daxos',
      'pyat-pree',
      'quaithe',
      'malakho',
      'drogon',
      'rhaegal',
      'viserion',
      'strong-belwas',
      'arstan-whitebeard',
      'daenerys-targaryen',
      'jorah-mormont',
      'illyrio-mopatis',
      'irri',
      'jhiqui',
      'doreah',
      'rakharo',
      'jhogo',
      'aggo',
    ],
  },
  {
    group: 'King’s Landing and the Blackwater',
    issue: '#1479',
    owners: [
      'daisy',
      'jacelyn-bywater',
      'hallyne',
      'lollys-stokeworth',
      'osmund-kettleblack',
      'alayaya',
      'garlan-tyrell',
      'tyrion-lannister',
      'cersei-lannister',
      'joffrey-baratheon',
      'myrcella-baratheon',
      'sansa-stark',
      'bronn',
      'shae',
      'ros',
      'petyr-baelish',
      'varys',
      'pycelle',
      'sandor-clegane',
      'janos-slynt',
      'lancel-lannister',
    ],
  },
  {
    group: 'The Wall and beyond',
    issue: '#1483',
    owners: [
      'thoren-smallwood',
      'eddison-tollett',
      'jarman-buckwell',
      'mallador-locke',
      'craster',
      'gilly',
      'qhorin-halfhand',
      'stonesnake',
      'ygritte',
      'ebben',
      'dalbridge',
      'lord-of-bones',
      'jon-snow',
      'jeor-mormont',
      'samwell-tarly',
      'grenn',
      'ghost-direwolf',
    ],
  },
  {
    group: 'Winterfell and the Iron Islands',
    issue: '#1482',
    owners: [
      'balon-greyjoy',
      'asha-greyjoy',
      'aeron-greyjoy',
      'victarion-greyjoy',
      'dagmer',
      'black-lorren',
      'wex-pyke',
      'farlen',
      'meera-reed',
      'jojen-reed',
      'ramsay-snow',
      'big-walder-frey',
      'little-walder-frey',
      'wyman-manderly',
      'donella-hornwood',
      'bran-stark',
      'rickon-stark',
      'theon-greyjoy',
      'luwin',
      'osha',
      'hodor',
      'old-nan',
      'summer-direwolf',
      'shaggydog',
      'rodrik-cassel',
      'mikken',
    ],
  },
  {
    group: 'Robb’s war, the Riverlands and Harrenhal',
    issue: '#1481',
    owners: [
      'alton-lannister',
      'cleos-frey',
      'talisa-maegyr',
      'amory-lorch',
      'polliver',
      'tickler',
      'chiswyck',
      'weese',
      'vargo-hoat',
      'jaqen-hghar',
      'rorge',
      'biter',
      'lommy',
      'arya-stark',
      'gendry',
      'hot-pie',
      'yoren',
      'robb-stark',
      'tywin-lannister',
      'gregor-clegane',
      'roose-bolton',
      'edmure-tully',
      'catelyn-stark',
      'jaime-lannister',
    ],
  },
  {
    group: 'Stannis, Renly and the stormlands',
    issue: '#1480',
    owners: [
      'stannis-baratheon',
      'melisandre',
      'davos-seaworth',
      'cressen',
      'matthos-seaworth',
      'salladhor-saan',
      'selyse-baratheon',
      'shireen-baratheon',
      'brienne-of-tarth',
      'margaery-tyrell',
      'mace-tyrell',
      'cortnay-penrose',
      'renly-baratheon',
      'loras-tyrell',
    ],
  },
]

/**
 * Season-1 owners with a stage-2 card filed before the stage-2 children, by
 * the issue that filed it: each leaves this list for its group's row.
 */
const STAGE_2_EARLY: Record<string, string> = { 'dontos-hollard': '#1434' }

/**
 * The owners each stage-3 relationships child authors (#1632), one row per
 * cast group of #1626: its new characters and the earlier characters it
 * gives a stage-3 snapshot. Each child fills its own row's `owners`.
 */
const STAGE_3_GROUPS: { group: string; issue: string; owners: string[] }[] = [
  {
    group: 'Essos',
    issue: '#1650',
    owners: [
      'missandei',
      'kraznys-mo-nakloz',
      'grey-worm',
      'grazdan-mo-eraz',
      'mero',
      'daario-naharis',
      'prendahl-na-ghezn',
      'daenerys-targaryen',
      'jorah-mormont',
      'barristan-selmy',
      'arstan-whitebeard',
      'drogon',
    ],
  },
  { group: 'King’s Landing', issue: '#1651', owners: [] },
  { group: 'Robb’s war and the Riverlands', issue: '#1653', owners: [] },
  {
    group: 'Arya, the Brotherhood Without Banners and the Hound',
    issue: '#1654',
    owners: [],
  },
  { group: 'Jaime, Brienne and Harrenhal', issue: '#1655', owners: [] },
  { group: 'The Wall and beyond', issue: '#1656', owners: [] },
  { group: 'Dragonstone', issue: '#1657', owners: [] },
  { group: 'Bran’s road and Theon', issue: '#1658', owners: [] },
]

/**
 * Earlier owners with a stage-3 card filed before the stage-3 relationships
 * children, by the issue that filed it, as `STAGE_2_EARLY`.
 */
const STAGE_3_EARLY: Record<string, string> = {}

/** Ids in alphabetical order. */
function byId(a: string, b: string): number {
  return a.localeCompare(b)
}

/** A snapshot's number in one unit; a chapter left unpinned counts as none. */
function dateIn(
  entry: { chapter?: number; episode: number },
  unit: Source,
): number {
  return unit === 'episode' ? entry.episode : (entry.chapter ?? 0)
}

/** The unit a bookmark counts in and its number there, seasons as episodes. */
function unitAt(bookmark: Bookmark): { at: number; unit: Source } {
  if (bookmark === null) {
    throw new Error('An edge bookmark is never empty')
  }
  if (bookmark.mode === 'chapter') {
    return { unit: 'chapter', at: bookmark.chapter }
  }
  if (bookmark.mode === 'episode') {
    return { unit: 'episode', at: bookmark.episode }
  }
  const { season, episode } = bookmark
  const first =
    archive.series.seasons.find(({ number }) => number === season)?.first ?? 1

  return { unit: 'episode', at: first + episode - 1 }
}

/**
 * Whether one of the owner's snapshots told in the bookmark's unit is pinned
 * at exactly its number: the one bookmark where a selection may change.
 */
function pinnedAt(owner: string, bookmark: Bookmark): boolean {
  const entity = archive.getCharacter(owner)
  if (entity === undefined) {
    return false
  }
  const { unit, at } = unitAt(bookmark)

  return archive
    .datedOf(entity, 'relationships')
    .some((entry) => toldIn(entry, unit) && dateIn(entry, unit) === at)
}

/** One stage's edge. */
function stageEdge(number: number): Edge {
  const edge = STAGES.find(({ stage }) => stage === number)
  if (edge === undefined) {
    throw new Error(`No stage-${String(number)} edge`)
  }
  return edge
}

/** The edge's bookmark pairs at whose far side the owner pins nothing. */
function unpinnedEdges(owner: string, edge: Edge): [Bookmark, Bookmark][] {
  return edgeBookmarks(edge).filter(([, next]) => !pinnedAt(owner, next))
}

/** The owners with a snapshot told inside the stage, in either medium. */
function stageOwners(number: number): string[] {
  return owners
    .filter((owner) =>
      archive
        .datedOf(owner, 'relationships')
        .some((entry) => inStage(entry, number)),
    )
    .map(({ id }) => id)
}

/** Whether a snapshot is told, in some medium, inside the stage. */
function inStage(entry: Dated<Relationship[]>, number: number): boolean {
  const previous = stageEdge(number - 1)
  const edge = stageEdge(number)
  const units: Source[] = ['episode', 'chapter']

  return units.some(
    (unit) =>
      toldIn(entry, unit)
      && dateIn(entry, unit) > previous[unit]
      && dateIn(entry, unit) <= edge[unit],
  )
}

/** An owner's snapshots pinned past the last stage in a medium that tells them, as labels. */
function lateEntries(owner: Entity): string[] {
  const last = STAGES.at(-1)
  if (last === undefined) {
    return []
  }
  const units: Source[] = ['episode', 'chapter']
  const late = (entry: Dated<Relationship[]>): boolean =>
    units.some(
      (unit) => toldIn(entry, unit) && dateIn(entry, unit) > last[unit],
    )

  return archive
    .datedOf(owner, 'relationships')
    .filter((entry) => late(entry))
    .map(
      (entry) =>
        `${owner.id} ${String(entry.episode)}/${String(entry.chapter)}`,
    )
}

describe('Game of Thrones relationship stages', () => {
  it('pins no snapshot past the last stage in the medium that tells it', () => {
    const late = owners.flatMap((owner) => lateEntries(owner))

    expect(late).toStrictEqual([])
  })

  it.each([
    { stage: 2, groups: STAGE_2_GROUPS, early: STAGE_2_EARLY },
    { stage: 3, groups: STAGE_3_GROUPS, early: STAGE_3_EARLY },
  ])(
    'files every stage-$stage owner in exactly one group row',
    ({ stage, groups, early }) => {
      const grouped = [
        ...groups.flatMap(({ owners: ids }) => ids),
        ...Object.keys(early),
      ]

      expect(new Set(grouped)).toHaveProperty('size', grouped.length)
      expect(stageOwners(stage).toSorted(byId)).toStrictEqual(
        grouped.toSorted(byId),
      )
    },
  )

  it.each([...STAGE_2_GROUPS, ...STAGE_3_GROUPS])(
    'moves the $group group ($issue) out of pending',
    ({ owners: ids }) => {
      for (const id of ids) {
        expect(Object.keys(coverage.authored), id).toContain(id)
      }
    },
  )
})

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

    // A selection crosses a stage's edge unchanged, unless the next stage
    // pins a snapshot at the first number past it.
    it.each(STAGES)(
      'keeps the last stage-$stage selection across both stage edges',
      (edge) => {
        for (const owner of owners) {
          for (const [last, next] of unpinnedEdges(owner.id, edge)) {
            expect(projected(owner.id, next, locale), owner.id).toStrictEqual(
              projected(owner.id, last, locale),
            )
          }
        }
      },
    )

    // Each stage's group shows its reached selection at the stage's last
    // episode or chapter, and keeps it past the edge, unless the next stage
    // pins a snapshot at the first number past it (Daenerys at episode 21).
    it.each([
      ...STAGE_2_GROUPS.map((row) => ({ ...row, stage: 2 })),
      ...STAGE_3_GROUPS.map((row) => ({ ...row, stage: 3 })),
    ])(
      'holds the $group selections at the stage-$stage edge',
      ({ owners: ids, stage }) => {
        const edge = stageEdge(stage)
        for (const id of ids) {
          const shown = [ep(edge.episode), ch(edge.chapter)].some(
            (bookmark) => projected(id, bookmark, locale).length > 0,
          )

          expect(shown, id).toBe(true)

          for (const [last, next] of unpinnedEdges(id, edge)) {
            expect(projected(id, next, locale), id).toStrictEqual(
              projected(id, last, locale),
            )
          }
        }
      },
    )

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

    it('gives Qotho his books-only wedding card at chapter 12 (#1355)', () => {
      const bride = locale === 'it' ? 'Sposa del khal' : 'Khal’s bride'
      const types = (bookmark: Bookmark): string[] =>
        projected('qotho', bookmark, locale).map(({ type }) => type)

      expect(projected('qotho', ch(11), locale)).toStrictEqual([])
      expect(people('qotho', ch(12))).toStrictEqual([
        'drogo',
        'daenerys-targaryen',
      ])
      expect(types(ch(12))).toContain(bride)

      for (const episode of [6, archive.series.episodeCeiling]) {
        expect(types(ep(episode))).not.toContain(bride)
      }
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
      for (const id of ['cohollo', 'haggo', 'jhogo', 'quaro', 'eroeh']) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
        ).toStrictEqual([])
        expect(projected(id, ch(73), locale)).not.toStrictEqual([])
      }

      // The show names Aggo only in season 2, where his show cards open
      // (#1477).
      expect(projected('aggo', ep(10), locale)).toStrictEqual([])
      expect(projected('aggo', ep(11), locale)).not.toStrictEqual([])
      expect(projected('aggo', ch(73), locale)).not.toStrictEqual([])
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
function magoWords(mode: 'chapter' | 'episode', locale: Locale): string {
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
      expect(said('nymeria', 'arya-stark', ch(17))).not.toBe(
        said('nymeria', 'arya-stark', ep(2)),
      )
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

    it('has Luwin lead the crypt visit in the books alone', () => {
      expect(people('rickon-stark', ep(9))).not.toContain('osha')
      expect(people('rickon-stark', ep(10))).toContain('osha')
      expect(people('rickon-stark', ep(10))).not.toContain('luwin')
      expect(people('rickon-stark', ch(66))).not.toContain('luwin')
      expect(people('rickon-stark', ch(67))).toContain('luwin')
      expect(people('rickon-stark', ch(67))).toContain('osha')
      expect(people('shaggydog', ep(10))).toContain('bran-stark')
      expect(people('shaggydog', ch(66))).not.toContain('luwin')
      expect(people('shaggydog', ch(67))).toContain('luwin')
    })

    it('brings Osha into the crypts at episode 10 and chapter 67', () => {
      expect(people('osha', ep(9))).not.toContain('rickon-stark')
      expect(people('osha', ep(10))).toContain('rickon-stark')
      expect(people('osha', ch(66))).not.toContain('rickon-stark')
      expect(people('osha', ch(67))).toContain('rickon-stark')
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
      expect(typed(...king, ch(73))).toBe(typed(...king, ep(9)))

      for (const id of ['benjen-stark', 'osha', 'galbart-glover']) {
        const last = people(id, ch(73))

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

    it('has Maege proclaim Robb at episode 10 and chapter 72', () => {
      const liege = ['maege-mormont', 'robb-stark'] as const

      expect(typed(...liege, ep(10))).not.toBe(typed(...liege, ep(9)))
      expect(typed(...liege, ch(72))).not.toBe(typed(...liege, ch(71)))
      expect(typed(...liege, ch(72))).toBe(typed(...liege, ep(10)))
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
        'robett-glover',
        'wendel-manderly',
      ]) {
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
          id,
        ).toStrictEqual([])
        expect(projected(id, ch(73), locale), id).not.toStrictEqual([])
      }

      // Roose's show cards open with episode 14 (#1481): stage 1 has none.
      expect(projected('roose-bolton', ep(10), locale)).toStrictEqual([])
      expect(projected('roose-bolton', ch(73), locale)).not.toStrictEqual([])
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
      expect(people('yoren', ch(73))).not.toContain('gendry')
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
      expect(projected('hot-pie', ep(9), locale)).toStrictEqual([])
      expect(projected('hot-pie', ep(10), locale)).not.toStrictEqual([])
      expect(projected('hot-pie', ch(73), locale)).toStrictEqual([])
      // Lommy's show record opens at episode 31, past stage 2 (#1457).
      expect(
        projected('lommy', ep(archive.series.episodeCeiling), locale),
      ).toStrictEqual([])
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

/**
 * Dontos's book cards, by their English text (#1424): Sansa V (chapter 58)
 * shows him only drunk at court, and Sansa saves him and Joffrey makes him a
 * fool in Sansa I of A Clash of Kings (chapter 76).
 */
const DONTOS_CARDS: { chapter: number; texts: string[] }[] = [
  {
    chapter: 58,
    texts: [
      'Noblewoman at court',
      'Eddard Stark’s daughter, whom he starts to hail, drunk, until Ser Balon Swann warns him away.',
      'The young king, at whose court he turns up drunk.',
    ],
  },
  {
    chapter: 76,
    texts: [
      'Saviour',
      'Eddard Stark’s daughter, who talks the king out of killing him.',
      'The young king, who wants him killed for coming to court drunk, then makes him his fool.',
    ],
  },
]

describe.each(
  DONTOS_CARDS.flatMap(({ chapter, texts }) =>
    texts.map((text) => ({ chapter, text })),
  ),
)('Dontos’s card “$text”', ({ chapter, text }) => {
  const shown = (count: number): boolean =>
    JSON.stringify(projected('dontos-hollard', ch(count), 'en')).includes(
      JSON.stringify(text),
    )

  it('opens at its chapter, not one before', () => {
    expect(shown(chapter - 1)).toBe(false)
    expect(shown(chapter)).toBe(true)
  })
})

// Essos and Qarth in stage 2 (#1477): each link the two media time or tell
// apart, checked just before its pin and at it.
describe.each(LOCALES)(
  'Game of Thrones stage-2 Essos revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    const typed = (
      owner: string,
      person: string,
      bookmark: Bookmark,
    ): string | undefined => wordsOf([owner, person], bookmark, locale)?.type
    // What Daenerys's card says of Rakharo at a bookmark.
    const rakharoWords = (bookmark: Bookmark): string | undefined =>
      wordsOf(['daenerys-targaryen', 'rakharo'], bookmark, locale)?.summary
    // What an owner's own card says of Daenerys at a bookmark.
    const ownWords = (owner: string, bookmark: Bookmark): string | undefined =>
      wordsOf([owner, 'daenerys-targaryen'], bookmark, locale)?.summary

    it('opens Quaithe’s cards at chapter 86, where she introduces herself', () => {
      expect(projected('quaithe', ch(85), locale)).toStrictEqual([])
      expect(people('quaithe', ch(86))).toStrictEqual([
        'daenerys-targaryen',
        'jhogo',
      ])
      expect(people('jhogo', ch(85))).not.toContain('quaithe')
      expect(people('jhogo', ch(86))).toContain('quaithe')
      expect(
        projected('quaithe', ep(archive.series.episodeCeiling), locale),
      ).toStrictEqual([])
    })

    it('names the dragons on Daenerys’s book page at chapter 86 alone', () => {
      for (const dragon of ['drogon', 'rhaegal', 'viserion']) {
        expect(people('daenerys-targaryen', ch(85))).not.toContain(dragon)
        expect(people('daenerys-targaryen', ch(86))).toContain(dragon)
        expect(projected(dragon, ch(86), locale)).not.toStrictEqual([])
        expect(
          projected(dragon, ep(archive.series.episodeCeiling), locale),
        ).toStrictEqual([])
      }
    })

    it('turns Rakharo’s and Irri’s own show cards to the past where each dies', () => {
      expect(ownWords('rakharo', ep(12))).not.toBe(ownWords('rakharo', ep(11)))
      expect(ownWords('irri', ep(16))).not.toBe(ownWords('irri', ep(15)))

      expect(people('irri', ep(16))).toStrictEqual([
        'daenerys-targaryen',
        'doreah',
      ])
    })

    it('ends Doreah in the Red Waste at chapter 86 but in Xaro’s vault at episode 20', () => {
      expect(typed('daenerys-targaryen', 'doreah', ch(86))).toBeDefined()
      expect(people('daenerys-targaryen', ch(86))).not.toContain(
        'xaro-xhoan-daxos',
      )
      expect(people('doreah', ep(14))).not.toContain('xaro-xhoan-daxos')
      expect(people('doreah', ep(15))).toContain('xaro-xhoan-daxos')
      expect(typed('doreah', 'xaro-xhoan-daxos', ep(19))).not.toBe(
        typed('doreah', 'xaro-xhoan-daxos', ep(20)),
      )
      expect(people('doreah', ch(archive.series.chapterCeiling))).not.toContain(
        'xaro-xhoan-daxos',
      )
    })

    it('kills Rakharo on Daenerys’s show page at episode 12', () => {
      expect(people('daenerys-targaryen', ep(10))).not.toContain('kovarro')
      expect(people('daenerys-targaryen', ep(11))).toContain('kovarro')
      expect(rakharoWords(ep(11))).toBeDefined()
      expect(rakharoWords(ep(12))).not.toBe(rakharoWords(ep(11)))
    })

    it('gives Xaro his show and book cards at their own gates', () => {
      expect(projected('xaro-xhoan-daxos', ep(14), locale)).toStrictEqual([])
      expect(people('xaro-xhoan-daxos', ep(15))).toContain('kovarro')
      expect(projected('xaro-xhoan-daxos', ch(113), locale)).toStrictEqual([])
      expect(people('xaro-xhoan-daxos', ch(114))).toContain('pyat-pree')
      expect(people('xaro-xhoan-daxos', ch(114))).not.toContain('kovarro')
      expect(people('xaro-xhoan-daxos', ep(19))).not.toContain('malakho')
      expect(people('xaro-xhoan-daxos', ep(20))).toContain('malakho')
      expect(people('xaro-xhoan-daxos', ch(137))).not.toContain('doreah')
    })

    it('keeps Pyat Pree, Quaithe and the books’ rescuers off show pages', () => {
      for (const owner of ['daenerys-targaryen', 'jorah-mormont']) {
        const shown = people(owner, ep(20))
        for (const id of [
          'pyat-pree',
          'quaithe',
          'strong-belwas',
          'arstan-whitebeard',
          'drogon',
        ]) {
          expect(shown, `${owner} ${id}`).not.toContain(id)
        }
      }

      expect(people('daenerys-targaryen', ch(136))).not.toContain(
        'strong-belwas',
      )
      expect(people('daenerys-targaryen', ch(137))).toContain('strong-belwas')
    })

    it('has Jhogo and Rakharo stop Pyat Pree in chapter 122', () => {
      for (const owner of ['jhogo', 'rakharo']) {
        expect(people(owner, ch(121))).not.toContain('pyat-pree')
        expect(people(owner, ch(122))).toContain('pyat-pree')
      }
    })

    it('keeps Kovarro and Malakho out of book pages', () => {
      for (const id of ['kovarro', 'malakho']) {
        expect(
          projected(id, ch(archive.series.chapterCeiling), locale),
        ).toStrictEqual([])
        expect(people('daenerys-targaryen', ch(143))).not.toContain(id)
      }
    })
  },
)

// The King's Landing and Blackwater cast in stage 2 (#1479): each new
// character's cards open at its gate, and each medium keeps its own.
describe.each(LOCALES)(
  'Game of Thrones stage-2 King’s Landing revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)

    it('opens each new book character’s cards at the chapter that names them', () => {
      for (const [id, gate] of [
        ['jacelyn-bywater', 82],
        ['hallyne', 94],
        ['lollys-stokeworth', 118],
        ['osmund-kettleblack', 123],
        ['alayaya', 128],
        ['garlan-tyrell', 139],
      ] as const) {
        expect(projected(id, ch(gate - 1), locale), id).toStrictEqual([])
        expect(projected(id, ch(gate), locale), id).not.toStrictEqual([])
        expect(
          projected(id, ep(archive.series.episodeCeiling), locale),
          id,
        ).toStrictEqual([])
      }
    })

    it('keeps Daisy to the show and gives her three steps', () => {
      expect(projected('daisy', ep(10), locale)).toStrictEqual([])
      expect(people('daisy', ep(11))).toStrictEqual(['ros'])
      expect(people('daisy', ep(12))).not.toContain('pycelle')
      expect(people('daisy', ep(13))).toContain('pycelle')
      expect(people('daisy', ep(13))).not.toContain('joffrey-baratheon')
      expect(people('daisy', ep(14))).toContain('joffrey-baratheon')
      expect(
        projected('daisy', ch(archive.series.chapterCeiling), locale),
      ).toStrictEqual([])
    })

    it('turns the City Watch over in Tyrion’s cards at 12 in the show and 82 in the books', () => {
      expect(people('tyrion-lannister', ep(11))).not.toContain('janos-slynt')
      expect(people('tyrion-lannister', ep(12))).toContain('janos-slynt')
      expect(people('tyrion-lannister', ep(12))).not.toContain(
        'jacelyn-bywater',
      )
      expect(people('tyrion-lannister', ch(81))).not.toContain(
        'jacelyn-bywater',
      )
      expect(people('tyrion-lannister', ch(82))).toContain('jacelyn-bywater')
    })

    it('keeps the books’ King’s Landing cast off show pages and the show’s off book pages', () => {
      for (const id of ['jacelyn-bywater', 'osmund-kettleblack']) {
        expect(people('tyrion-lannister', ep(20))).not.toContain(id)
      }

      expect(people('cersei-lannister', ep(18))).toContain('ros')
      expect(people('cersei-lannister', ep(18))).not.toContain('alayaya')
      expect(people('cersei-lannister', ch(127))).not.toContain('alayaya')
      expect(people('cersei-lannister', ch(128))).toContain('alayaya')
      expect(people('cersei-lannister', ch(128))).not.toContain('ros')
    })

    it('has the show’s Pycelle arrested at 13 and Sansa freed of Joffrey at 20', () => {
      expect(people('pycelle', ep(12))).not.toContain('daisy')
      expect(people('pycelle', ep(13))).toContain('daisy')
      expect(people('pycelle', ch(99))).toContain('shagga')
      expect(people('pycelle', ep(13))).not.toContain('shagga')
      expect(people('sansa-stark', ep(19))).not.toContain('petyr-baelish')
      expect(people('sansa-stark', ep(20))).toContain('petyr-baelish')
      expect(people('sansa-stark', ch(139))).toContain('dontos-hollard')
      expect(people('sansa-stark', ch(139))).not.toContain('petyr-baelish')
    })

    it('opens Sansa’s beating and rescue cards at episodes 14 and 16 and Joffrey’s match at 20', () => {
      expect(people('sansa-stark', ep(13))).toContain('shae')
      expect(people('sansa-stark', ep(13))).not.toContain('tyrion-lannister')
      expect(people('sansa-stark', ep(14))).toContain('tyrion-lannister')
      expect(people('sansa-stark', ch(105))).not.toContain('tyrion-lannister')
      expect(people('sansa-stark', ch(106))).toContain('tyrion-lannister')
      expect(people('sansa-stark', ep(15))).not.toContain('sandor-clegane')
      expect(people('sansa-stark', ep(16))).toContain('sandor-clegane')
      expect(people('sansa-stark', ep(18))).not.toContain('cersei-lannister')
      expect(people('sansa-stark', ep(19))).toContain('cersei-lannister')
      expect(people('joffrey-baratheon', ep(19))).not.toContain(
        'margaery-tyrell',
      )
      expect(people('joffrey-baratheon', ep(20))).toContain('margaery-tyrell')
    })
  },
)

// Winterfell and the Iron Islands (#1482): the show and the books tell the
// castle's fall in their own words, and the books alone have the Reeds, the
// Walders and the Hornwood.
describe.each(LOCALES)(
  'Game of Thrones Winterfell and Iron Islands revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    const said = (
      owner: string,
      person: string,
      bookmark: Bookmark,
    ): string | undefined => wordsOf([owner, person], bookmark, locale)?.summary

    it('opens Balon with Theon and his daughter in the show and Aeron in the books', () => {
      expect(projected('balon-greyjoy', ep(11), locale)).toStrictEqual([])
      expect(people('balon-greyjoy', ep(12))).toStrictEqual([
        'theon-greyjoy',
        'asha-greyjoy',
      ])
      expect(projected('balon-greyjoy', ch(84), locale)).toStrictEqual([])
      expect(people('balon-greyjoy', ch(85))).toStrictEqual([
        'theon-greyjoy',
        'aeron-greyjoy',
      ])
      expect(people('balon-greyjoy', ch(98))).toContain('victarion-greyjoy')
      expect(people('balon-greyjoy', ep(20))).not.toContain('victarion-greyjoy')
    })

    it('keeps the books’ Winterfell cast off show pages', () => {
      for (const id of [
        'aeron-greyjoy',
        'victarion-greyjoy',
        'black-lorren',
        'wex-pyke',
        'farlen',
        'meera-reed',
        'jojen-reed',
        'ramsay-snow',
        'big-walder-frey',
        'little-walder-frey',
        'wyman-manderly',
        'donella-hornwood',
      ]) {
        expect(projected(id, ep(20), locale), id).toStrictEqual([])
        expect(projected(id, ch(143), locale), id).not.toStrictEqual([])
      }

      for (const owner of ['bran-stark', 'theon-greyjoy', 'rickon-stark']) {
        const shown = people(owner, ep(20))
        for (const id of ['meera-reed', 'jojen-reed', 'ramsay-snow']) {
          expect(shown, `${owner} ${id}`).not.toContain(id)
        }
      }
    })

    it('gives the Reeds their cards at the harvest feast and not before', () => {
      for (const id of ['meera-reed', 'jojen-reed']) {
        expect(projected(id, ch(94), locale), id).toStrictEqual([])
        expect(people(id, ch(95)), id).toContain('bran-stark')
      }

      expect(people('bran-stark', ch(101))).not.toContain('jojen-reed')
      expect(people('bran-stark', ch(102))).toContain('jojen-reed')
    })

    it('tells the fall of Winterfell at episode 16 and chapter 120', () => {
      expect(people('bran-stark', ep(15))).not.toContain('theon-greyjoy')
      expect(people('bran-stark', ep(16))).toContain('theon-greyjoy')
      expect(people('bran-stark', ch(119))).not.toContain('theon-greyjoy')
      expect(people('bran-stark', ch(120))).toContain('theon-greyjoy')
      expect(said('bran-stark', 'theon-greyjoy', ep(16))).not.toBe(
        said('bran-stark', 'theon-greyjoy', ch(120)),
      )
    })

    it('has Ramsay name himself to Theon at chapter 140 in the books alone', () => {
      expect(projected('ramsay-snow', ch(139), locale)).toStrictEqual([])
      expect(people('ramsay-snow', ch(140))).toContain('theon-greyjoy')
      expect(people('theon-greyjoy', ch(139))).not.toContain('ramsay-snow')
      expect(people('theon-greyjoy', ch(140))).toContain('ramsay-snow')
      expect(people('theon-greyjoy', ep(20))).not.toContain('ramsay-snow')
    })

    it('ends the Hornwood widow in the past tense at chapter 109', () => {
      expect(people('donella-hornwood', ch(101))).toStrictEqual([
        'bran-stark',
        'rodrik-cassel',
        'wyman-manderly',
      ])
      expect(said('wyman-manderly', 'donella-hornwood', ch(108))).not.toBe(
        said('wyman-manderly', 'donella-hornwood', ch(109)),
      )
      expect(people('donella-hornwood', ch(109))).toStrictEqual([
        'wyman-manderly',
        'rodrik-cassel',
      ])
    })

    it('lays Farlen, Black Lorren and Mikken to rest at their deaths', () => {
      expect(said('farlen', 'theon-greyjoy', ch(129))).not.toBe(
        said('farlen', 'theon-greyjoy', ch(130)),
      )
      expect(said('black-lorren', 'theon-greyjoy', ch(142))).not.toBe(
        said('black-lorren', 'theon-greyjoy', ch(143)),
      )
      expect(people('mikken', ch(119))).not.toContain('theon-greyjoy')
      expect(people('mikken', ch(120))).toContain('theon-greyjoy')
    })

    it('splits Dagmer’s show and book cards', () => {
      expect(projected('dagmer', ep(14), locale)).toStrictEqual([])
      expect(people('dagmer', ep(15))).toStrictEqual(['theon-greyjoy'])
      expect(people('dagmer', ep(20))).toContain('luwin')
      expect(projected('dagmer', ch(110), locale)).toStrictEqual([])
      expect(people('dagmer', ch(111))).toContain('aeron-greyjoy')
      expect(people('dagmer', ch(143))).not.toContain('luwin')
    })
  },
)

// Stannis, Renly and the stormlands in stage 2 (#1480): each link the two
// media time or tell apart, checked just before its pin and at it.
describe.each(LOCALES)(
  'Game of Thrones stage-2 stormlands revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    // What an owner's card says of a person at a bookmark.
    const said = (
      owner: string,
      person: string,
      bookmark: Bookmark,
    ): string | undefined => wordsOf([owner, person], bookmark, locale)?.summary
    const lastEpisode = ep(archive.series.episodeCeiling)

    it('opens the Dragonstone cast at episode 11 and chapter 74, not before', () => {
      for (const id of ['stannis-baratheon', 'melisandre', 'davos-seaworth']) {
        expect(projected(id, ep(10), locale), id).toStrictEqual([])
        expect(projected(id, ep(11), locale), id).not.toStrictEqual([])
        expect(projected(id, ch(73), locale), id).toStrictEqual([])
        expect(projected(id, ch(74), locale), id).not.toStrictEqual([])
      }
    })

    it('keeps Selyse, Shireen and Mace on book pages in this stage', () => {
      for (const id of ['selyse-baratheon', 'shireen-baratheon']) {
        expect(projected(id, ep(20), locale), id).toStrictEqual([])
        expect(projected(id, ch(73), locale), id).toStrictEqual([])
        expect(projected(id, ch(74), locale), id).not.toStrictEqual([])
      }

      expect(projected('mace-tyrell', ep(20), locale)).toStrictEqual([])
      expect(projected('mace-tyrell', ch(138), locale)).toStrictEqual([])
      expect(people('mace-tyrell', ch(139))).toStrictEqual([
        'joffrey-baratheon',
        'loras-tyrell',
      ])
    })

    it('names the queen and princess on book pages alone', () => {
      expect(people('stannis-baratheon', ch(74))).toContain('selyse-baratheon')
      expect(people('stannis-baratheon', ep(11))).not.toContain(
        'selyse-baratheon',
      )
      expect(people('stannis-baratheon', ep(20))).not.toContain(
        'selyse-baratheon',
      )
      expect(people('cressen', ch(74))).toContain('shireen-baratheon')
      expect(people('cressen', ep(20))).not.toContain('shireen-baratheon')
    })

    it('opens Matthos on the show at episode 11 and on the books at chapter 132', () => {
      expect(projected('matthos-seaworth', ep(10), locale)).toStrictEqual([])
      expect(people('matthos-seaworth', ep(11))).toStrictEqual([
        'stannis-baratheon',
        'davos-seaworth',
      ])
      expect(projected('matthos-seaworth', ch(131), locale)).toStrictEqual([])
      expect(people('matthos-seaworth', ch(132))).toStrictEqual([
        'davos-seaworth',
      ])
      expect(people('davos-seaworth', ch(131))).not.toContain(
        'matthos-seaworth',
      )
      expect(people('davos-seaworth', ch(132))).toContain('matthos-seaworth')
    })

    it('turns Davos’s card for Matthos to the past where he dies', () => {
      expect(said('davos-seaworth', 'matthos-seaworth', ep(19))).not.toBe(
        said('davos-seaworth', 'matthos-seaworth', ep(18)),
      )
    })

    it('opens Salladhor at episode 12 and chapter 84', () => {
      expect(projected('salladhor-saan', ep(11), locale)).toStrictEqual([])
      expect(people('salladhor-saan', ep(12))).toContain('davos-seaworth')
      expect(projected('salladhor-saan', ch(83), locale)).toStrictEqual([])
      expect(people('salladhor-saan', ch(84))).toStrictEqual([
        'davos-seaworth',
        'stannis-baratheon',
      ])
      expect(people('davos-seaworth', ch(83))).not.toContain('salladhor-saan')
      expect(people('davos-seaworth', ch(84))).toContain('salladhor-saan')
    })

    it('keeps Cortnay off show pages and turns his card at chapter 118', () => {
      expect(projected('cortnay-penrose', lastEpisode, locale)).toStrictEqual(
        [],
      )
      expect(projected('cortnay-penrose', ch(115), locale)).toStrictEqual([])
      expect(people('cortnay-penrose', ch(116))).toStrictEqual([
        'stannis-baratheon',
      ])
      expect(people('stannis-baratheon', ch(115))).not.toContain(
        'cortnay-penrose',
      )
      expect(people('stannis-baratheon', ch(116))).toContain('cortnay-penrose')
      expect(said('cortnay-penrose', 'stannis-baratheon', ch(118))).not.toBe(
        said('cortnay-penrose', 'stannis-baratheon', ch(117)),
      )
      expect(people('stannis-baratheon', ep(20))).not.toContain(
        'cortnay-penrose',
      )
    })

    it('opens Brienne and Margaery at episode 13 and chapter 96', () => {
      for (const id of ['brienne-of-tarth', 'margaery-tyrell']) {
        expect(projected(id, ep(12), locale), id).toStrictEqual([])
        expect(projected(id, ep(13), locale), id).not.toStrictEqual([])
        expect(projected(id, ch(95), locale), id).toStrictEqual([])
        expect(projected(id, ch(96), locale), id).not.toStrictEqual([])
      }
    })

    it('sends Brienne with Jaime in the show and to Catelyn’s side in the books', () => {
      expect(people('brienne-of-tarth', ep(17))).not.toContain(
        'jaime-lannister',
      )
      expect(people('brienne-of-tarth', ep(18))).toContain('jaime-lannister')
      expect(people('brienne-of-tarth', ch(143))).not.toContain(
        'jaime-lannister',
      )
      expect(said('brienne-of-tarth', 'catelyn-stark', ch(113))).not.toBe(
        said('brienne-of-tarth', 'catelyn-stark', ch(112)),
      )
    })

    it('has Renly die in the show at episode 15 and in the books at chapter 107', () => {
      expect(people('renly-baratheon', ep(14))).toContain('petyr-baelish')
      expect(people('renly-baratheon', ep(14))).not.toContain('margaery-tyrell')
      expect(people('renly-baratheon', ep(15))).toContain('margaery-tyrell')
      expect(said('renly-baratheon', 'stannis-baratheon', ep(15))).not.toBe(
        said('renly-baratheon', 'stannis-baratheon', ep(14)),
      )
      expect(people('renly-baratheon', ch(106))).toContain('stannis-baratheon')
      expect(people('renly-baratheon', ch(107))).not.toContain(
        'stannis-baratheon',
      )
    })

    it('has Margaery’s hand asked for at episode 20 and chapter 139', () => {
      expect(people('margaery-tyrell', ep(19))).not.toContain(
        'joffrey-baratheon',
      )
      expect(people('margaery-tyrell', ep(20))).toContain('joffrey-baratheon')
      expect(people('margaery-tyrell', ch(138))).not.toContain(
        'joffrey-baratheon',
      )
      expect(people('margaery-tyrell', ch(139))).toContain('joffrey-baratheon')
      expect(people('loras-tyrell', ch(138))).not.toContain('mace-tyrell')
      expect(people('loras-tyrell', ch(139))).toContain('mace-tyrell')
      expect(people('loras-tyrell', ep(20))).not.toContain('mace-tyrell')
    })

    it('tells Renly’s killing by Melisandre’s shadow in the show alone', () => {
      expect(people('melisandre', ep(14))).not.toContain('renly-baratheon')
      expect(people('melisandre', ep(15))).toContain('renly-baratheon')
      expect(people('melisandre', ch(143))).not.toContain('renly-baratheon')
    })
  },
)

// Essos in stage 3 (#1650): each link the two media time or tell apart,
// checked just before its pin and at it.
describe.each(LOCALES)(
  'Game of Thrones stage-3 Essos revelations in %s',
  (locale) => {
    const people = (owner: string, bookmark: Bookmark): string[] =>
      projected(owner, bookmark, locale).map(({ person }) => person.id)
    const said = (
      owner: string,
      person: string,
      bookmark: Bookmark,
    ): string | undefined => wordsOf([owner, person], bookmark, locale)?.summary
    const showCeiling = ep(archive.series.episodeCeiling)

    it('opens Missandei’s cards at episode 23 and chapter 171', () => {
      expect(projected('missandei', ep(22), locale)).toStrictEqual([])
      expect(people('missandei', ep(23))).toStrictEqual(['daenerys-targaryen'])
      expect(projected('missandei', ch(170), locale)).toStrictEqual([])
      expect(people('missandei', ch(171))).toStrictEqual([
        'daenerys-targaryen',
        'kraznys-mo-nakloz',
      ])
      expect(people('daenerys-targaryen', ep(22))).not.toContain('missandei')
      expect(people('daenerys-targaryen', ep(23))).toContain('missandei')
      expect(people('daenerys-targaryen', ch(170))).not.toContain('missandei')
      expect(people('daenerys-targaryen', ch(171))).toContain('missandei')
    })

    it('keeps Kraznys and Prendahl, named in the books alone, off show pages', () => {
      for (const id of ['kraznys-mo-nakloz', 'prendahl-na-ghezn']) {
        expect(projected(id, showCeiling, locale), id).toStrictEqual([])
      }

      expect(projected('kraznys-mo-nakloz', ch(170), locale)).toStrictEqual([])
      expect(people('kraznys-mo-nakloz', ch(171))).toContain('drogon')
      expect(projected('prendahl-na-ghezn', ch(185), locale)).toStrictEqual([])
      expect(people('prendahl-na-ghezn', ch(186))).toContain('daario-naharis')
      expect(people('missandei', ep(30))).not.toContain('kraznys-mo-nakloz')
      expect(people('daario-naharis', ep(30))).not.toContain(
        'prendahl-na-ghezn',
      )
    })

    it('has Barristan join Daenerys at episode 21 in the show alone', () => {
      expect(people('barristan-selmy', ep(20))).not.toContain(
        'daenerys-targaryen',
      )
      expect(people('barristan-selmy', ep(21))).toContain('daenerys-targaryen')
      expect(people('daenerys-targaryen', ep(20))).not.toContain(
        'barristan-selmy',
      )
      expect(people('daenerys-targaryen', ep(21))).toContain('barristan-selmy')
      expect(people('jorah-mormont', ep(21))).toContain('barristan-selmy')

      // The books bring him as Arstan Whitebeard through the stage.
      const ceiling = ch(196)

      expect(people('barristan-selmy', ceiling)).not.toContain(
        'daenerys-targaryen',
      )
      expect(people('daenerys-targaryen', ceiling)).not.toContain(
        'barristan-selmy',
      )
      expect(people('daenerys-targaryen', ceiling)).toContain(
        'arstan-whitebeard',
      )
    })

    it('opens Grey Worm at episode 25 and chapter 186', () => {
      expect(projected('grey-worm', ep(24), locale)).toStrictEqual([])
      expect(people('grey-worm', ep(25))).toContain('daenerys-targaryen')
      expect(projected('grey-worm', ch(185), locale)).toStrictEqual([])
      expect(people('grey-worm', ch(186))).toContain('jorah-mormont')
      expect(people('jorah-mormont', ch(185))).not.toContain('grey-worm')
      expect(people('jorah-mormont', ch(186))).toContain('grey-worm')
    })

    it('has the show’s Daario kill Mero and the book’s kill Prendahl', () => {
      expect(projected('daario-naharis', ep(27), locale)).toStrictEqual([])
      expect(people('daario-naharis', ep(28))).toContain('mero')
      expect(said('daario-naharis', 'mero', ep(29))).not.toBe(
        said('daario-naharis', 'mero', ep(28)),
      )
      expect(projected('daario-naharis', ch(185), locale)).toStrictEqual([])
      expect(people('daario-naharis', ch(186))).toContain('prendahl-na-ghezn')
      expect(people('daario-naharis', ch(186))).not.toContain('mero')
      expect(people('daenerys-targaryen', ep(28))).toContain('mero')
      expect(people('daenerys-targaryen', ch(186))).not.toContain('mero')
      expect(said('mero', 'daenerys-targaryen', ch(186))).not.toBe(
        said('mero', 'daenerys-targaryen', ep(28)),
      )
    })

    it('gives the envoy of Yunkai his show and book cards at their own gates', () => {
      expect(projected('grazdan-mo-eraz', ep(26), locale)).toStrictEqual([])
      expect(people('grazdan-mo-eraz', ep(27))).toStrictEqual([
        'daenerys-targaryen',
        'missandei',
      ])
      expect(projected('grazdan-mo-eraz', ch(185), locale)).toStrictEqual([])
      expect(people('grazdan-mo-eraz', ch(186))).toStrictEqual([
        'daenerys-targaryen',
        'drogon',
      ])
    })

    it('has Drogon burn Kraznys at chapter 171 on book pages alone', () => {
      expect(people('drogon', ch(170))).not.toContain('kraznys-mo-nakloz')
      expect(people('drogon', ch(171))).toContain('kraznys-mo-nakloz')
      expect(people('drogon', ch(185))).not.toContain('grazdan-mo-eraz')
      expect(people('drogon', ch(186))).toContain('grazdan-mo-eraz')
      expect(said('drogon', 'kraznys-mo-nakloz', ch(186))).not.toBe(
        said('drogon', 'kraznys-mo-nakloz', ch(171)),
      )
      expect(projected('drogon', showCeiling, locale)).toStrictEqual([])
    })

    it('opens the books’ voyage to Astapor at chapter 152', () => {
      for (const owner of ['jorah-mormont', 'arstan-whitebeard']) {
        expect(said(owner, 'daenerys-targaryen', ch(152)), owner).not.toBe(
          said(owner, 'daenerys-targaryen', ch(151)),
        )
      }

      expect(people('daenerys-targaryen', ch(151))).not.toContain(
        'illyrio-mopatis',
      )
      expect(people('daenerys-targaryen', ch(152))).toContain('illyrio-mopatis')
    })
  },
)
