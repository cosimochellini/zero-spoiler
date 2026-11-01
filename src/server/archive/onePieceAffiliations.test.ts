import { describe, expect, it } from 'vitest'

import { factionsOf } from '~/data/series/one-piece/dated'
import type { Entity } from '~/data/types'
import type { Bookmark } from '~/lib/progress/episode'
import type { Faction } from '~/lib/view/records'
import { LOADED_SERIES } from '~/test/series'

import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'one-piece')
if (series === undefined) {
  throw new Error('The affiliation tests need the filed One Piece archive')
}
const { archive } = series

const UNITS = ['episode', 'chapter'] as const

/**
 * An affiliation step moved to the scene that tells it: its record, its pair,
 * the English line before it (`undefined` for none) and from it. A step on
 * its record's own chapter opens the record for a chapter reader, who sees
 * nothing before it.
 */
type Moved = [
  id: string,
  episode: number,
  chapter: number,
  from: string | undefined,
  to: string,
  onRecordChapter?: true,
]

const MOVED: Moved[] = [
  // #983: ch 608, the waitresses' dormitory; ep 529, her boss at the café.
  [
    'camie',
    529,
    608,
    'Takoyaki 8, staff; Hatchan’s friend',
    'Mermaid Café, Fish-Man Island',
  ],
  // #986: ch 817, where Kin'emon tells whose son he is; ep 768 adapts it.
  [
    'momonosuke',
    768,
    817,
    'Kin’emon’s son, so he says',
    'Kozuki Momonosuke, heir of Wano',
  ],
  // #980: the steps filed later than their scene, or (Smoker, Tashigi)
  // earlier, at a promotion Smoker refused in ch 212.
  ['smoker', 324, 439, 'Marines, captain', 'Marines, commodore'],
  [
    'tashigi',
    324,
    439,
    'Marines, sergeant major under Smoker',
    'Marines, ensign',
  ],
  ['wapol', 89, 151, 'King of Drum, in exile', 'Deposed'],
  ['mr-3', 512, 593, 'Former Baroque Works officer agent', 'Buggy’s crew'],
  [
    'marco',
    890,
    909,
    'Whitebeard Pirates, acting captain',
    'Doctor on Whitebeard’s home island',
  ],
  [
    'kohza',
    127,
    211,
    'Rebel army of Alabasta, leader',
    'Rebel army of Alabasta, former leader',
  ],
  ['kaku', 244, 345, 'Galley-La Company, foreman of Dock One', 'Cipher Pol 9'],
  [
    'rob-lucci',
    244,
    345,
    'Galley-La Company, foreman of Dock One',
    'Cipher Pol 9',
  ],
  [
    'kalifa',
    244,
    345,
    'Galley-La Company, Iceburg’s secretary',
    'Cipher Pol 9',
  ],
  ['blueno', 244, 345, 'Blueno’s Bar, barkeeper', 'Cipher Pol 9'],
  [
    'hattori',
    244,
    345,
    'Rob Lucci, pigeon',
    'Cipher Pol 9, Rob Lucci’s pigeon',
  ],
  ['spandam', 250, 360, 'Cipher Pol No. 5', 'Cipher Pol 9, chief', true],
  // No demotion: still chief until Cipher Pol 0.
  ['spandam', 746, 801, 'Cipher Pol 9, chief', 'Cipher Pol 0'],
  ['nero', 262, 373, 'Cipher Pol 9', 'Former Cipher Pol 9 agent, expelled'],
  [
    'oimo-and-kashi',
    271,
    385,
    'Enies Lobby, gatekeepers under the World Government',
    'Giant Warrior Pirates, freed',
    true,
  ],
  ['franky', 322, 437, 'Franky Family, boss', 'Straw Hat Pirates'],
  ['lola', 370, 476, undefined, 'Rolling Pirates, captain'],
  [
    'shiryu',
    452,
    549,
    'Impel Down, former head jailer, imprisoned',
    'Blackbeard Pirates',
  ],
  ['jinbe', 466, 557, 'Seven Warlords of the Sea', 'Former Warlord'],
  ['jinbe', 980, 976, 'Former Warlord', 'Straw Hat Pirates'],
  [
    'wadatsumi',
    790,
    830,
    'Flying Dutchman, Vander Decken’s underling',
    'Sun Pirates',
  ],
  [
    'aladine',
    790,
    830,
    'Sun Pirates, doctor',
    'Sun Pirates, vice captain, under Big Mom',
  ],
  ['x-drake', 957, 956, 'Beasts Pirates, headliner', 'Marines, SWORD captain'],
  ['t-bone', 1116, 1082, 'Marines, captain', 'Marines, vice admiral'],
  [
    'vergo',
    599,
    673,
    undefined,
    'Marines, vice admiral of G-5, secretly Doflamingo’s man',
  ],
  [
    'baby-5',
    710,
    771,
    'Donquixote Pirates, assassin and servant',
    'Happo Navy, Sai’s fiancée',
  ],
  [
    'riku-doldo-iii',
    740,
    796,
    'Former king of Dressrosa, deposed',
    'King of Dressrosa, restored',
  ],
  [
    'rebecca',
    740,
    796,
    'Colosseum gladiator of Dressrosa',
    'Riku royal family, princess',
  ],
  [
    'viola',
    660,
    728,
    'Donquixote Pirates, Violet',
    'Riku royal family, princess',
  ],
  [
    'kanjuro',
    936,
    939,
    'Samurai of Wano, Kin’emon’s companion',
    'Nine Red Scabbards',
  ],
  ['kanjuro', 977, 974, 'Nine Red Scabbards', 'Orochi’s spy, exposed'],
  [
    'carrot',
    1083,
    1056,
    'Mokomo Dukedom, Inuarashi Musketeers',
    'Mokomo Dukedom, ruler',
  ],
  [
    'inuarashi',
    936,
    939,
    'Mokomo Dukedom, ruler of the day',
    'Nine Red Scabbards',
  ],
  [
    'inuarashi',
    1083,
    1056,
    'Nine Red Scabbards',
    'Wano, Momonosuke’s retainer',
  ],
  [
    'charlotte-linlin',
    1080,
    1053,
    'Big Mom Pirates, captain; Emperor',
    'Big Mom Pirates, captain; fell at Wano',
  ],
  [
    'stussy',
    841,
    871,
    'Underworld, queen of the pleasure district',
    'Cipher Pol 0',
  ],
  [
    'stussy',
    1104,
    1072,
    'Cipher Pol 0',
    'Cipher Pol 0, defector, a clone of Miss Buckingham Stussy',
  ],
  [
    'sheepshead',
    757,
    808,
    'Pirates, a party hunting a samurai',
    'Beasts Pirates, headliner of the Gifters',
  ],
  [
    'zeus',
    865,
    890,
    'Big Mom Pirates, Big Mom’s homie',
    'Straw Hat Pirates, Nami’s servant',
  ],
  ['zeus', 1033, 1013, 'Back under Big Mom’s command', 'Cast off by Big Mom'],
  [
    'zeus',
    1040,
    1018,
    'Cast off by Big Mom',
    'Straw Hat Pirates, Nami’s partner',
  ],
  [
    'kiku',
    936,
    939,
    'Tea house of Okobore Town, waitress',
    'Nine Red Scabbards',
  ],
  ['ashura-doji', 936, 939, 'Mt. Atama Thieves, boss', 'Nine Red Scabbards'],
  [
    'kawamatsu',
    936,
    946,
    undefined,
    'Nine Red Scabbards; prisoner of the Udon labour camp',
  ],
  [
    'kawamatsu',
    948,
    948,
    'Nine Red Scabbards; prisoner of the Udon labour camp',
    'Nine Red Scabbards',
  ],
  [
    'speed',
    906,
    918,
    'Beasts Pirates, headliner in Bakura Town',
    'Tama’s servant, tamed by one of her dango',
  ],
  [
    'figarland-garling',
    1155,
    1125,
    'Knights of God, Supreme Commander',
    'Five Elders, Warrior God of Science and Defence',
  ],
  [
    'alpha',
    1135,
    1101,
    'Bonney’s nurse',
    'World Government, intelligence agent',
  ],
  // The Straw Hat Grand Fleet, formed in ch 800 (p. 8-12) / ep 745.
  [
    'bartolomeo',
    745,
    800,
    'Barto Club, captain',
    'Straw Hat Grand Fleet; Barto Club',
  ],
  [
    'cavendish',
    745,
    800,
    'Beautiful Pirates, captain',
    'Straw Hat Grand Fleet',
  ],
  ['sai', 745, 800, 'Happo Navy, thirteenth leader', 'Straw Hat Grand Fleet'],
  ['ideo', 745, 800, 'XXX Gym Martial Arts Alliance', 'Straw Hat Grand Fleet'],
  ['blue-gilly', 745, 800, 'Longleg Tribe fighter', 'Straw Hat Grand Fleet'],
  [
    'hajrudin',
    745,
    800,
    'Colosseum gladiator',
    'New Giant Warrior Pirates, captain; Straw Hat Grand Fleet',
  ],
  [
    'orlumbus',
    745,
    800,
    'Yonta Maria Grand Fleet, admiral',
    'Straw Hat Grand Fleet',
  ],
  [
    'leo',
    745,
    800,
    'Tontatta Kingdom, Tonta Corps leader',
    'Straw Hat Grand Fleet',
  ],
  ['suleiman', 745, 800, 'Beautiful Pirates', 'Straw Hat Grand Fleet'],
  [
    'abdullah',
    745,
    800,
    'XXX Gym Martial Arts Alliance',
    'Straw Hat Grand Fleet',
  ],
  ['jeet', 745, 800, 'XXX Gym Martial Arts Alliance', 'Straw Hat Grand Fleet'],
  ['boo', 745, 800, 'Happo Navy, vice-leader', 'Straw Hat Grand Fleet'],
  [
    'gambia',
    745,
    800,
    'Barto Club, staff officer',
    'Straw Hat Grand Fleet; Barto Club',
  ],
  ['wicca', 745, 800, 'Tontatta tribe, scouting unit', 'Straw Hat Grand Fleet'],
]

const CASES = MOVED.flatMap(([id, episode, chapter, from, to, onRecord]) =>
  UNITS.map((unit) => ({
    id,
    unit,
    gate: unit === 'episode' ? episode : chapter,
    from: unit === 'chapter' && onRecord ? undefined : from,
    to,
  })),
)

/** A faction a moved step joins (or, `false`, leaves) at its pair. */
const FACTIONS: [
  id: string,
  faction: Faction,
  joins: boolean,
  episode: number,
  chapter: number,
][] = [
  ['momonosuke', 'kozuki-family', true, 768, 817],
  ['mr-3', 'buggy-pirates', true, 512, 593],
  ['kaku', 'cp9', true, 244, 345],
  ['shiryu', 'blackbeard-pirates', true, 452, 549],
  ['bartolomeo', 'straw-hat-grand-fleet', true, 745, 800],
  ['x-drake', 'marines', true, 957, 956],
  ['kanjuro', 'nine-red-scabbards', true, 936, 939],
  ['charlotte-linlin', 'emperors', false, 1080, 1053],
  ['marco', 'whitebeard-pirates', false, 890, 909],
  ['baby-5', 'donquixote-pirates', false, 710, 771],
  ['viola', 'donquixote-pirates', false, 660, 728],
  ['leo', 'straw-hat-grand-fleet', true, 745, 800],
]

const FACTION_CASES = FACTIONS.flatMap(
  ([id, faction, joins, episode, chapter]) =>
    UNITS.map((unit) => ({
      id,
      faction,
      joins,
      unit,
      gate: unit === 'episode' ? episode : chapter,
    })),
)

function entityOf(id: string): Entity {
  const entity = archive.getEntity(id)
  if (entity === undefined) {
    throw new Error(`Missing One Piece record: ${id}`)
  }

  return entity
}

function bookmark(unit: (typeof UNITS)[number], count: number): Bookmark {
  return unit === 'episode' ?
      { mode: 'episode', episode: count }
    : { mode: 'chapter', chapter: count }
}

function affiliationAt(id: string, at: Bookmark): string | undefined {
  return archive.latestOf(
    readerFor(archive, at, 'en'),
    entityOf(id),
    'affiliation',
  )?.en
}

/** A record's factions, which the fruit album groups its fruit by. */
function inFaction(id: string, faction: Faction, at: Bookmark): boolean {
  return (
    factionsOf(readerFor(archive, at, 'en'), entityOf(id))?.includes(faction)
    ?? false
  )
}

describe('One Piece affiliations moved to the scene that tells them', () => {
  it.each(CASES)(
    'gives $id the new affiliation from $unit $gate, not before',
    ({ from, gate, id, to, unit }) => {
      expect(affiliationAt(id, bookmark(unit, gate - 1))).toBe(from)
      expect(affiliationAt(id, bookmark(unit, gate))).toBe(to)
    },
  )

  it.each(FACTION_CASES)(
    'moves $id’s $faction faction to $unit $gate',
    ({ faction, gate, id, joins, unit }) => {
      expect(inFaction(id, faction, bookmark(unit, gate - 1))).toBe(!joins)
      expect(inFaction(id, faction, bookmark(unit, gate))).toBe(joins)
    },
  )
})
