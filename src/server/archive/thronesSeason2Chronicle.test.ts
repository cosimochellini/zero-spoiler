import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { season1Chronicles } from '~/data/series/game-of-thrones/records/season-1.chronicle'
import { season2Chronicles } from '~/data/series/game-of-thrones/records/season-2.chronicle'
import type { Dated, Entity, Story } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { recordIn } from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { chronicleOf, chronicleRestOf } from './chronicle.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('game-of-thrones')

type Medium = 'books' | 'both' | 'show'

interface Row {
  chapter: number
  episode: number
  id: string
  medium: Medium
  title: string
}

/** The first stage's last episode and last site chapter (#1360). */
const STAGE_1 = { episode: 10, chapter: 73 }

/** The second stage's last episode and last site chapter (#1455). */
const STAGE_2 = { episode: 20, chapter: 143 }

/**
 * Every story of the second stage, written down independently of the data:
 * owner, medium, episode, site chapter and English title. The new cast's
 * stories are in `season-2.chronicle.ts`; a returning character's are in the
 * module that first filed them, `season-1.chronicle.ts`. A story both media
 * tell opens at both numbers, a show story at its episode alone and a book
 * story at its chapter alone, so moving any entry, or changing its medium,
 * fails here. Each cast group's chronicle child adds its rows: Essos and
 * Qarth first (#1478).
 */
const STORIES: Row[] = [
  // Essos and Qarth (#1478).
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 11,
    chapter: 86,
    title: 'Into the Red Waste',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 12,
    chapter: 86,
    title: 'Rakharo’s head',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 14,
    chapter: 101,
    title: 'At the gates of Qarth',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 15,
    chapter: 114,
    title: 'Xaro’s guest',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 16,
    chapter: 114,
    title: 'The stolen dragons',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 17,
    chapter: 114,
    title: 'The King of Qarth',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 18,
    chapter: 114,
    title: 'Toward the House of the Undying',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 20,
    chapter: 137,
    title: 'Dracarys',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 11,
    chapter: 86,
    title: 'The red comet',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 15,
    chapter: 101,
    title: 'Arrival in Qarth',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 16,
    chapter: 114,
    title: 'No ships in Qarth',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 20,
    chapter: 122,
    title: 'The House of the Undying',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 20,
    chapter: 137,
    title: 'The manticore',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 12,
    chapter: 86,
    title: 'A head in the saddlebag',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 15,
    chapter: 114,
    title: 'A single ship',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 17,
    chapter: 114,
    title: 'The thief beside her',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 20,
    chapter: 137,
    title: 'Xaro’s gold',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 11,
    chapter: 86,
    title: 'Lynesse',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 15,
    chapter: 101,
    title: 'News from the docks',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 16,
    chapter: 114,
    title: 'The wedding gift',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 20,
    chapter: 137,
    title: 'Followed at the docks',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 12,
    chapter: 86,
    title: 'Mourning Rakharo',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 16,
    chapter: 114,
    title: 'In Xaro’s house',
  },
  {
    id: 'doreah',
    medium: 'books',
    episode: 11,
    chapter: 86,
    title: 'The fever',
  },
  {
    id: 'doreah',
    medium: 'show',
    episode: 15,
    chapter: 114,
    title: 'The men of Qarth',
  },
  {
    id: 'doreah',
    medium: 'show',
    episode: 20,
    chapter: 137,
    title: 'In the vault',
  },
  {
    id: 'rakharo',
    medium: 'show',
    episode: 11,
    chapter: 86,
    title: 'A bad time to start',
  },
  {
    id: 'rakharo',
    medium: 'show',
    episode: 12,
    chapter: 86,
    title: 'The riderless horse',
  },
  {
    id: 'rakharo',
    medium: 'books',
    episode: 11,
    chapter: 86,
    title: 'As far as the sea',
  },
  {
    id: 'rakharo',
    medium: 'books',
    episode: 20,
    chapter: 122,
    title: 'The warlock on the ground',
  },
  {
    id: 'aggo',
    medium: 'show',
    episode: 11,
    chapter: 86,
    title: 'One of three riders',
  },
  {
    id: 'aggo',
    medium: 'books',
    episode: 11,
    chapter: 86,
    title: 'Balerion reborn',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 11,
    chapter: 86,
    title: 'Three strangers from Qarth',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 20,
    chapter: 122,
    title: 'Whip against dagger',
  },
  {
    id: 'jhiqui',
    medium: 'books',
    episode: 11,
    chapter: 86,
    title: 'Haunted places',
  },
  {
    id: 'kovarro',
    medium: 'show',
    episode: 11,
    chapter: 86,
    title: 'A bloodrider',
  },
  {
    id: 'kovarro',
    medium: 'show',
    episode: 14,
    chapter: 101,
    title: 'Qarth’s invitation',
  },
  {
    id: 'kovarro',
    medium: 'show',
    episode: 20,
    chapter: 137,
    title: 'Guarding the khaleesi',
  },
  {
    id: 'malakho',
    medium: 'show',
    episode: 15,
    chapter: 114,
    title: 'The golden peacock',
  },
  {
    id: 'malakho',
    medium: 'show',
    episode: 20,
    chapter: 137,
    title: 'The empty vault',
  },
  {
    id: 'xaro-xhoan-daxos',
    medium: 'show',
    episode: 15,
    chapter: 114,
    title: 'The proposal',
  },
  {
    id: 'xaro-xhoan-daxos',
    medium: 'books',
    episode: 16,
    chapter: 114,
    title: 'The merchant prince',
  },
  {
    id: 'xaro-xhoan-daxos',
    medium: 'show',
    episode: 17,
    chapter: 114,
    title: 'King of Qarth',
  },
  {
    id: 'xaro-xhoan-daxos',
    medium: 'show',
    episode: 20,
    chapter: 137,
    title: 'The empty vault',
  },
  {
    id: 'xaro-xhoan-daxos',
    medium: 'books',
    episode: 20,
    chapter: 137,
    title: 'Ten ships for a dragon',
  },
  {
    id: 'pyat-pree',
    medium: 'books',
    episode: 14,
    chapter: 114,
    title: 'The warlock',
  },
  {
    id: 'pyat-pree',
    medium: 'books',
    episode: 20,
    chapter: 122,
    title: 'The door on the right',
  },
  {
    id: 'quaithe',
    medium: 'books',
    episode: 15,
    chapter: 86,
    title: 'The masked woman',
  },
  {
    id: 'quaithe',
    medium: 'books',
    episode: 15,
    chapter: 114,
    title: 'The ladder of fire',
  },
  {
    id: 'drogon',
    medium: 'books',
    episode: 40,
    chapter: 86,
    title: 'Named for Drogo',
  },
  {
    id: 'drogon',
    medium: 'books',
    episode: 40,
    chapter: 122,
    title: 'The heart of the Undying',
  },
  {
    id: 'rhaegal',
    medium: 'books',
    episode: 41,
    chapter: 86,
    title: 'Named for Rhaegar',
  },
  {
    id: 'viserion',
    medium: 'books',
    episode: 41,
    chapter: 86,
    title: 'Named for Viserys',
  },
  {
    id: 'strong-belwas',
    medium: 'books',
    episode: 20,
    chapter: 137,
    title: 'Sent by Illyrio',
  },
  {
    id: 'arstan-whitebeard',
    medium: 'books',
    episode: 20,
    chapter: 137,
    title: 'The old man with the staff',
  },
  // Winterfell and the Iron Islands (#1487).
  {
    id: 'balon-greyjoy',
    medium: 'books',
    episode: 12,
    chapter: 85,
    title: 'A crown given',
  },
  {
    id: 'balon-greyjoy',
    medium: 'show',
    episode: 12,
    chapter: 98,
    title: 'The iron price',
  },
  {
    id: 'balon-greyjoy',
    medium: 'show',
    episode: 13,
    chapter: 98,
    title: 'War on the North',
  },
  {
    id: 'balon-greyjoy',
    medium: 'books',
    episode: 13,
    chapter: 98,
    title: 'The plan in the solar',
  },
  {
    id: 'asha-greyjoy',
    medium: 'show',
    episode: 12,
    chapter: 98,
    title: 'The ride to Pyke',
  },
  {
    id: 'asha-greyjoy',
    medium: 'show',
    episode: 13,
    chapter: 98,
    title: 'Thirty ships',
  },
  {
    id: 'asha-greyjoy',
    medium: 'books',
    episode: 13,
    chapter: 98,
    title: 'Esgred',
  },
  {
    id: 'asha-greyjoy',
    medium: 'show',
    episode: 15,
    chapter: 111,
    title: 'A crew that waits',
  },
  {
    id: 'asha-greyjoy',
    medium: 'show',
    episode: 18,
    chapter: 130,
    title: 'Twenty men',
  },
  {
    id: 'asha-greyjoy',
    medium: 'books',
    episode: 18,
    chapter: 130,
    title: 'The wise course',
  },
  {
    id: 'aeron-greyjoy',
    medium: 'books',
    episode: 55,
    chapter: 85,
    title: 'The Drowned God’s priest',
  },
  {
    id: 'aeron-greyjoy',
    medium: 'books',
    episode: 55,
    chapter: 98,
    title: 'In the solar',
  },
  {
    id: 'aeron-greyjoy',
    medium: 'books',
    episode: 55,
    chapter: 111,
    title: 'An offering to the Drowned God',
  },
  {
    id: 'victarion-greyjoy',
    medium: 'books',
    episode: 13,
    chapter: 98,
    title: 'Toward Moat Cailin',
  },
  {
    id: 'dagmer',
    medium: 'show',
    episode: 15,
    chapter: 111,
    title: 'The first mate',
  },
  {
    id: 'dagmer',
    medium: 'books',
    episode: 15,
    chapter: 111,
    title: 'Balon’s best man',
  },
  {
    id: 'dagmer',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'Before the crew',
  },
  {
    id: 'dagmer',
    medium: 'show',
    episode: 17,
    chapter: 124,
    title: 'Walnut shells',
  },
  {
    id: 'dagmer',
    medium: 'show',
    episode: 18,
    chapter: 130,
    title: 'The farmer’s silence',
  },
  {
    id: 'dagmer',
    medium: 'books',
    episode: 18,
    chapter: 130,
    title: 'Defeat at Torrhen’s Square',
  },
  {
    id: 'dagmer',
    medium: 'show',
    episode: 20,
    chapter: 140,
    title: 'The blow from behind',
  },
  {
    id: 'black-lorren',
    medium: 'books',
    episode: 17,
    chapter: 124,
    title: 'The Hunter’s Gate',
  },
  {
    id: 'black-lorren',
    medium: 'books',
    episode: 20,
    chapter: 140,
    title: 'The noose on the wall',
  },
  {
    id: 'black-lorren',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'Among the dead',
  },
  {
    id: 'wex-pyke',
    medium: 'books',
    episode: 13,
    chapter: 98,
    title: 'The squire',
  },
  {
    id: 'wex-pyke',
    medium: 'books',
    episode: 17,
    chapter: 124,
    title: 'Only pawprints',
  },
  {
    id: 'wex-pyke',
    medium: 'books',
    episode: 20,
    chapter: 140,
    title: 'The first to step forward',
  },
  {
    id: 'farlen',
    medium: 'books',
    episode: 16,
    chapter: 124,
    title: 'The wrong wolves',
  },
  {
    id: 'farlen',
    medium: 'books',
    episode: 18,
    chapter: 130,
    title: 'Four blows',
  },
  {
    id: 'meera-reed',
    medium: 'books',
    episode: 22,
    chapter: 95,
    title: 'The oath of the crannogmen',
  },
  {
    id: 'meera-reed',
    medium: 'books',
    episode: 22,
    chapter: 102,
    title: 'The net',
  },
  {
    id: 'meera-reed',
    medium: 'books',
    episode: 22,
    chapter: 109,
    title: 'Fighting fate',
  },
  {
    id: 'meera-reed',
    medium: 'books',
    episode: 22,
    chapter: 143,
    title: 'Out of the crypts',
  },
  {
    id: 'jojen-reed',
    medium: 'books',
    episode: 22,
    chapter: 95,
    title: 'Summer’s touch',
  },
  {
    id: 'jojen-reed',
    medium: 'books',
    episode: 22,
    chapter: 102,
    title: 'The winged wolf',
  },
  {
    id: 'jojen-reed',
    medium: 'books',
    episode: 22,
    chapter: 109,
    title: 'The sea comes to Winterfell',
  },
  {
    id: 'jojen-reed',
    medium: 'books',
    episode: 22,
    chapter: 120,
    title: 'The dream comes true',
  },
  {
    id: 'jojen-reed',
    medium: 'books',
    episode: 22,
    chapter: 143,
    title: 'Three days a wolf',
  },
  {
    id: 'ramsay-snow',
    medium: 'books',
    episode: 32,
    chapter: 140,
    title: 'The man called Reek',
  },
  {
    id: 'big-walder-frey',
    medium: 'books',
    episode: 13,
    chapter: 90,
    title: 'The ward from the Twins',
  },
  {
    id: 'big-walder-frey',
    medium: 'books',
    episode: 15,
    chapter: 109,
    title: 'The line of succession',
  },
  {
    id: 'little-walder-frey',
    medium: 'books',
    episode: 13,
    chapter: 90,
    title: 'A wolfskin cloak',
  },
  {
    id: 'little-walder-frey',
    medium: 'books',
    episode: 15,
    chapter: 109,
    title: 'A crowd of heirs',
  },
  {
    id: 'wyman-manderly',
    medium: 'books',
    episode: 60,
    chapter: 90,
    title: 'No prince is ever late',
  },
  {
    id: 'wyman-manderly',
    medium: 'books',
    episode: 60,
    chapter: 109,
    title: 'The Hornwood',
  },
  {
    id: 'donella-hornwood',
    medium: 'books',
    episode: 13,
    chapter: 90,
    title: 'The widow',
  },
  {
    id: 'donella-hornwood',
    medium: 'books',
    episode: 14,
    chapter: 102,
    title: 'Taken by force',
  },
  {
    id: 'donella-hornwood',
    medium: 'books',
    episode: 15,
    chapter: 109,
    title: 'Justice from the east',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 11,
    chapter: 78,
    title: 'The wolf in the pool',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 11,
    chapter: 78,
    title: 'Wolf dreams',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 11,
    chapter: 90,
    title: 'The harvest audiences',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 13,
    chapter: 95,
    title: 'The harvest feast',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 13,
    chapter: 102,
    title: 'Through Summer’s eyes',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 13,
    chapter: 102,
    title: 'Greensight',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 15,
    chapter: 109,
    title: 'Two hundred men',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 15,
    chapter: 109,
    title: 'The drowned men',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'Yielding Winterfell',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 16,
    chapter: 120,
    title: 'Prisoner in his own castle',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 17,
    chapter: 124,
    title: 'The shepherd’s farm',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 17,
    chapter: 124,
    title: 'Gone in the night',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 18,
    chapter: 130,
    title: 'Hiding in the crypts',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 20,
    chapter: 143,
    title: 'Go north',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'Not dead, but broken',
  },
  {
    id: 'rickon-stark',
    medium: 'books',
    episode: 13,
    chapter: 95,
    title: 'Wild at the feast',
  },
  {
    id: 'rickon-stark',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'Pleading for Rodrik',
  },
  {
    id: 'rickon-stark',
    medium: 'books',
    episode: 16,
    chapter: 120,
    title: 'The ironborn in the castle',
  },
  {
    id: 'rickon-stark',
    medium: 'show',
    episode: 17,
    chapter: 124,
    title: 'The walnut shells',
  },
  {
    id: 'rickon-stark',
    medium: 'books',
    episode: 17,
    chapter: 124,
    title: 'The empty beds',
  },
  {
    id: 'rickon-stark',
    medium: 'show',
    episode: 20,
    chapter: 143,
    title: 'North with Osha',
  },
  {
    id: 'rickon-stark',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'Separate ways',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 11,
    chapter: 81,
    title: 'Envoy to Pyke',
  },
  {
    id: 'theon-greyjoy',
    medium: 'books',
    episode: 12,
    chapter: 85,
    title: 'The kraken’s son',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 12,
    chapter: 98,
    title: 'Homecoming',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 13,
    chapter: 98,
    title: 'The drowned faith',
  },
  {
    id: 'theon-greyjoy',
    medium: 'books',
    episode: 13,
    chapter: 98,
    title: 'Eight ships',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 15,
    chapter: 111,
    title: 'A plan of his own',
  },
  {
    id: 'theon-greyjoy',
    medium: 'books',
    episode: 15,
    chapter: 111,
    title: 'Not Torrhen’s Square',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'Prince of Winterfell',
  },
  {
    id: 'theon-greyjoy',
    medium: 'books',
    episode: 16,
    chapter: 120,
    title: 'The postern gate',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 17,
    chapter: 124,
    title: 'Two bodies on the gate',
  },
  {
    id: 'theon-greyjoy',
    medium: 'books',
    episode: 17,
    chapter: 124,
    title: 'Mercy was for the morning',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 18,
    chapter: 130,
    title: 'Too far from the sea',
  },
  {
    id: 'theon-greyjoy',
    medium: 'books',
    episode: 18,
    chapter: 130,
    title: 'The miller’s sons',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 20,
    chapter: 140,
    title: 'A sack over his head',
  },
  {
    id: 'theon-greyjoy',
    medium: 'books',
    episode: 20,
    chapter: 140,
    title: 'Reek’s true name',
  },
  {
    id: 'luwin',
    medium: 'show',
    episode: 13,
    chapter: 102,
    title: 'The higher mysteries',
  },
  {
    id: 'luwin',
    medium: 'books',
    episode: 13,
    chapter: 102,
    title: 'No living man',
  },
  {
    id: 'luwin',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'The oath to Winterfell',
  },
  {
    id: 'luwin',
    medium: 'show',
    episode: 17,
    chapter: 124,
    title: 'A scream at the gate',
  },
  {
    id: 'luwin',
    medium: 'books',
    episode: 17,
    chapter: 124,
    title: 'A promise of mercy',
  },
  {
    id: 'luwin',
    medium: 'show',
    episode: 18,
    chapter: 130,
    title: 'Bread in the crypts',
  },
  {
    id: 'luwin',
    medium: 'books',
    episode: 20,
    chapter: 140,
    title: 'Take the black',
  },
  {
    id: 'luwin',
    medium: 'show',
    episode: 20,
    chapter: 143,
    title: 'The gift of mercy',
  },
  {
    id: 'luwin',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'Last counsel',
  },
  {
    id: 'osha',
    medium: 'show',
    episode: 11,
    chapter: 78,
    title: 'The red comet',
  },
  {
    id: 'osha',
    medium: 'books',
    episode: 11,
    chapter: 90,
    title: 'Out of the pool',
  },
  {
    id: 'osha',
    medium: 'show',
    episode: 15,
    chapter: 109,
    title: 'The three-eyed raven',
  },
  {
    id: 'osha',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'The way out',
  },
  {
    id: 'osha',
    medium: 'books',
    episode: 16,
    chapter: 120,
    title: 'In Theon’s service',
  },
  {
    id: 'osha',
    medium: 'books',
    episode: 16,
    chapter: 124,
    title: 'The broken oath',
  },
  {
    id: 'osha',
    medium: 'show',
    episode: 18,
    chapter: 130,
    title: 'Doubling back',
  },
  {
    id: 'osha',
    medium: 'show',
    episode: 20,
    chapter: 143,
    title: 'A quick death',
  },
  {
    id: 'osha',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'The sword from the tomb',
  },
  {
    id: 'hodor',
    medium: 'books',
    episode: 11,
    chapter: 90,
    title: 'An ugly horse',
  },
  {
    id: 'hodor',
    medium: 'books',
    episode: 13,
    chapter: 102,
    title: 'Chasing the wolves',
  },
  {
    id: 'hodor',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'Out of the castle',
  },
  {
    id: 'hodor',
    medium: 'books',
    episode: 16,
    chapter: 124,
    title: 'Among the missing',
  },
  {
    id: 'hodor',
    medium: 'show',
    episode: 20,
    chapter: 143,
    title: 'The wheelbarrow',
  },
  {
    id: 'hodor',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'The stone at the door',
  },
  {
    id: 'old-nan',
    medium: 'books',
    episode: 11,
    chapter: 78,
    title: 'The smell of the comet',
  },
  {
    id: 'summer-direwolf',
    medium: 'show',
    episode: 11,
    chapter: 78,
    title: 'Bran’s reflection',
  },
  {
    id: 'summer-direwolf',
    medium: 'books',
    episode: 13,
    chapter: 95,
    title: 'Stronger than he knows',
  },
  {
    id: 'summer-direwolf',
    medium: 'show',
    episode: 13,
    chapter: 102,
    title: 'On Bran’s bed',
  },
  {
    id: 'summer-direwolf',
    medium: 'books',
    episode: 13,
    chapter: 102,
    title: 'Caught in the net',
  },
  {
    id: 'summer-direwolf',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'Watching the sack',
  },
  {
    id: 'shaggydog',
    medium: 'books',
    episode: 13,
    chapter: 102,
    title: 'Full of rage',
  },
  {
    id: 'shaggydog',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'Fleeing the ironborn',
  },
  {
    id: 'shaggydog',
    medium: 'show',
    episode: 20,
    chapter: 143,
    title: 'North with the boys',
  },
  {
    id: 'shaggydog',
    medium: 'books',
    episode: 20,
    chapter: 143,
    title: 'With Rickon and Osha',
  },
  {
    id: 'rodrik-cassel',
    medium: 'show',
    episode: 11,
    chapter: 81,
    title: 'Back to Winterfell',
  },
  {
    id: 'rodrik-cassel',
    medium: 'books',
    episode: 11,
    chapter: 90,
    title: 'A widow’s hint',
  },
  {
    id: 'rodrik-cassel',
    medium: 'books',
    episode: 15,
    chapter: 109,
    title: 'The prisoner from the Hornwood',
  },
  {
    id: 'rodrik-cassel',
    medium: 'show',
    episode: 15,
    chapter: 111,
    title: 'Torrhen’s Square under siege',
  },
  {
    id: 'rodrik-cassel',
    medium: 'show',
    episode: 16,
    chapter: 120,
    title: 'Theon’s prisoner',
  },
  {
    id: 'rodrik-cassel',
    medium: 'books',
    episode: 20,
    chapter: 140,
    title: 'The parley',
  },
  {
    id: 'mikken',
    medium: 'books',
    episode: 15,
    chapter: 109,
    title: 'The sea he wanted to see',
  },
  {
    id: 'mikken',
    medium: 'books',
    episode: 16,
    chapter: 120,
    title: 'Refusing to kneel',
  },
  // The Wall and beyond (#1488).
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 11,
    chapter: 80,
    title: 'A king for a brother',
  },
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 11,
    chapter: 87,
    title: 'The empty village',
  },
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 11,
    chapter: 97,
    title: 'Craster’s Keep',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 11,
    chapter: 97,
    title: 'Learning to follow',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 12,
    chapter: 97,
    title: 'In the woods at night',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 13,
    chapter: 97,
    title: 'What Mormont knew',
  },
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 15,
    chapter: 108,
    title: 'The buried cloak',
  },
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 15,
    chapter: 117,
    title: 'Chosen by the Halfhand',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 15,
    chapter: 117,
    title: 'With the Halfhand',
  },
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 16,
    chapter: 125,
    title: 'The spearwife',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 16,
    chapter: 125,
    title: 'The wildling lookout',
  },
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 17,
    chapter: 127,
    title: 'The wolf dream',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 17,
    chapter: 127,
    title: 'Led into a trap',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 18,
    chapter: 142,
    title: 'Before the wildlings',
  },
  {
    id: 'jon-snow',
    medium: 'books',
    episode: 20,
    chapter: 142,
    title: 'Bastard blood',
  },
  {
    id: 'jon-snow',
    medium: 'show',
    episode: 20,
    chapter: 142,
    title: 'We are the watchers on the Wall',
  },
  {
    id: 'jeor-mormont',
    medium: 'books',
    episode: 11,
    chapter: 80,
    title: 'Too old for a ranging',
  },
  {
    id: 'jeor-mormont',
    medium: 'books',
    episode: 11,
    chapter: 97,
    title: 'A man who swore no vows',
  },
  {
    id: 'jeor-mormont',
    medium: 'show',
    episode: 11,
    chapter: 97,
    title: 'Craster’s rules',
  },
  {
    id: 'jeor-mormont',
    medium: 'show',
    episode: 13,
    chapter: 97,
    title: 'Known all along',
  },
  {
    id: 'jeor-mormont',
    medium: 'books',
    episode: 15,
    chapter: 108,
    title: 'Good ground',
  },
  {
    id: 'jeor-mormont',
    medium: 'books',
    episode: 15,
    chapter: 117,
    title: 'Three parties',
  },
  {
    id: 'jeor-mormont',
    medium: 'show',
    episode: 15,
    chapter: 117,
    title: 'Letting Jon go',
  },
  {
    id: 'samwell-tarly',
    medium: 'books',
    episode: 11,
    chapter: 80,
    title: 'Keeper of the ravens',
  },
  {
    id: 'samwell-tarly',
    medium: 'books',
    episode: 11,
    chapter: 87,
    title: 'Less afraid',
  },
  {
    id: 'samwell-tarly',
    medium: 'books',
    episode: 11,
    chapter: 97,
    title: 'A map for Craster',
  },
  {
    id: 'samwell-tarly',
    medium: 'show',
    episode: 11,
    chapter: 97,
    title: 'A ride on the sledge',
  },
  {
    id: 'samwell-tarly',
    medium: 'show',
    episode: 12,
    chapter: 97,
    title: 'Craster’s wife',
  },
  {
    id: 'samwell-tarly',
    medium: 'show',
    episode: 13,
    chapter: 97,
    title: 'His mother’s thimble',
  },
  {
    id: 'samwell-tarly',
    medium: 'books',
    episode: 15,
    chapter: 117,
    title: 'The broken horn',
  },
  {
    id: 'samwell-tarly',
    medium: 'show',
    episode: 15,
    chapter: 117,
    title: 'Three blasts',
  },
  {
    id: 'samwell-tarly',
    medium: 'show',
    episode: 18,
    chapter: 142,
    title: 'Dragonglass',
  },
  {
    id: 'samwell-tarly',
    medium: 'show',
    episode: 20,
    chapter: 142,
    title: 'The army of the dead',
  },
  {
    id: 'grenn',
    medium: 'show',
    episode: 11,
    chapter: 97,
    title: 'The sledge',
  },
  {
    id: 'grenn',
    medium: 'books',
    episode: 15,
    chapter: 117,
    title: 'A dagger of dragonglass',
  },
  {
    id: 'grenn',
    medium: 'show',
    episode: 18,
    chapter: 142,
    title: 'The stone with runes',
  },
  { id: 'grenn', medium: 'show', episode: 20, chapter: 142, title: 'Run' },
  {
    id: 'ghost-direwolf',
    medium: 'books',
    episode: 11,
    chapter: 97,
    title: 'Stolen rabbits',
  },
  {
    id: 'ghost-direwolf',
    medium: 'show',
    episode: 12,
    chapter: 97,
    title: 'A dead rabbit',
  },
  {
    id: 'ghost-direwolf',
    medium: 'books',
    episode: 15,
    chapter: 108,
    title: 'The mound',
  },
  {
    id: 'ghost-direwolf',
    medium: 'show',
    episode: 16,
    chapter: 125,
    title: 'Gone into the mountains',
  },
  {
    id: 'ghost-direwolf',
    medium: 'books',
    episode: 17,
    chapter: 127,
    title: 'Through the wolf’s eyes',
  },
  {
    id: 'ghost-direwolf',
    medium: 'books',
    episode: 20,
    chapter: 142,
    title: 'The bite',
  },
  {
    id: 'thoren-smallwood',
    medium: 'books',
    episode: 11,
    chapter: 80,
    title: 'The First Ranger’s place',
  },
  {
    id: 'thoren-smallwood',
    medium: 'books',
    episode: 11,
    chapter: 87,
    title: 'A year ago',
  },
  {
    id: 'thoren-smallwood',
    medium: 'books',
    episode: 15,
    chapter: 117,
    title: 'Up the river',
  },
  {
    id: 'eddison-tollett',
    medium: 'books',
    episode: 20,
    chapter: 87,
    title: 'Hard times',
  },
  {
    id: 'eddison-tollett',
    medium: 'books',
    episode: 20,
    chapter: 97,
    title: 'Secret graves',
  },
  {
    id: 'eddison-tollett',
    medium: 'show',
    episode: 20,
    chapter: 142,
    title: 'Nothing interesting',
  },
  {
    id: 'jarman-buckwell',
    medium: 'books',
    episode: 11,
    chapter: 87,
    title: 'Much can change in a year',
  },
  {
    id: 'jarman-buckwell',
    medium: 'books',
    episode: 11,
    chapter: 97,
    title: 'Craster’s king',
  },
  {
    id: 'jarman-buckwell',
    medium: 'books',
    episode: 15,
    chapter: 117,
    title: 'Into the mountains',
  },
  {
    id: 'mallador-locke',
    medium: 'books',
    episode: 11,
    chapter: 87,
    title: 'Fewer worries',
  },
  {
    id: 'mallador-locke',
    medium: 'books',
    episode: 15,
    chapter: 108,
    title: 'The council on the Fist',
  },
  {
    id: 'craster',
    medium: 'books',
    episode: 11,
    chapter: 97,
    title: 'Free folk',
  },
  {
    id: 'craster',
    medium: 'show',
    episode: 11,
    chapter: 97,
    title: 'The Lord Crow’s host',
  },
  {
    id: 'craster',
    medium: 'show',
    episode: 12,
    chapter: 97,
    title: 'An offering in the woods',
  },
  {
    id: 'craster',
    medium: 'show',
    episode: 13,
    chapter: 97,
    title: 'Out of my house',
  },
  {
    id: 'gilly',
    medium: 'books',
    episode: 15,
    chapter: 97,
    title: 'If it is a boy',
  },
  {
    id: 'gilly',
    medium: 'show',
    episode: 15,
    chapter: 108,
    title: 'Something to hope for',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'books',
    episode: 15,
    chapter: 117,
    title: 'From the Shadow Tower',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'show',
    episode: 15,
    chapter: 117,
    title: 'The Halfhand arrives',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'books',
    episode: 16,
    chapter: 125,
    title: 'The watchers in the pass',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'show',
    episode: 16,
    chapter: 125,
    title: 'Leaving Jon behind',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'books',
    episode: 17,
    chapter: 127,
    title: 'Knowing his men',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'show',
    episode: 18,
    chapter: 142,
    title: 'A prisoner’s plan',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'books',
    episode: 20,
    chapter: 142,
    title: 'The oath recited',
  },
  {
    id: 'qhorin-halfhand',
    medium: 'show',
    episode: 20,
    chapter: 142,
    title: 'The last watch',
  },
  {
    id: 'stonesnake',
    medium: 'books',
    episode: 15,
    chapter: 125,
    title: 'The climb',
  },
  {
    id: 'stonesnake',
    medium: 'books',
    episode: 20,
    chapter: 142,
    title: 'On foot through the high passes',
  },
  {
    id: 'ygritte',
    medium: 'books',
    episode: 16,
    chapter: 125,
    title: 'Bael the Bard',
  },
  { id: 'ygritte', medium: 'show', episode: 16, chapter: 125, title: 'Spared' },
  {
    id: 'ygritte',
    medium: 'show',
    episode: 17,
    chapter: 127,
    title: 'The wrong side of the Wall',
  },
  {
    id: 'ygritte',
    medium: 'show',
    episode: 18,
    chapter: 142,
    title: 'A present',
  },
  {
    id: 'ygritte',
    medium: 'books',
    episode: 20,
    chapter: 142,
    title: 'The eagle',
  },
  {
    id: 'ygritte',
    medium: 'show',
    episode: 20,
    chapter: 142,
    title: 'The host in the valley',
  },
  {
    id: 'ebben',
    medium: 'books',
    episode: 17,
    chapter: 127,
    title: 'Skinchanger',
  },
  {
    id: 'ebben',
    medium: 'books',
    episode: 20,
    chapter: 142,
    title: 'Sent east',
  },
  {
    id: 'dalbridge',
    medium: 'books',
    episode: 17,
    chapter: 127,
    title: 'Holding the pass',
  },
  {
    id: 'lord-of-bones',
    medium: 'books',
    episode: 18,
    chapter: 142,
    title: 'Proof of loyalty',
  },
]

/**
 * Each new character's first story, at its own gate in each medium it is
 * told in. A record one medium has, or one whose other gate falls past the
 * stage, opens its chronicle in that medium only.
 */
const FIRST: { chapter: number; episode: number; id: string }[] = [
  // Essos and Qarth (#1478).
  { id: 'kovarro', episode: 11, chapter: 86 },
  { id: 'xaro-xhoan-daxos', episode: 15, chapter: 114 },
  { id: 'pyat-pree', episode: 14, chapter: 114 },
  { id: 'quaithe', episode: 15, chapter: 86 },
  { id: 'malakho', episode: 15, chapter: 114 },
  { id: 'drogon', episode: 40, chapter: 86 },
  { id: 'rhaegal', episode: 41, chapter: 86 },
  { id: 'viserion', episode: 41, chapter: 86 },
  { id: 'strong-belwas', episode: 20, chapter: 137 },
  { id: 'arstan-whitebeard', episode: 20, chapter: 137 },
  // Winterfell and the Iron Islands (#1487).
  { id: 'balon-greyjoy', episode: 12, chapter: 85 },
  { id: 'asha-greyjoy', episode: 12, chapter: 98 },
  { id: 'aeron-greyjoy', episode: 55, chapter: 85 },
  { id: 'victarion-greyjoy', episode: 13, chapter: 98 },
  { id: 'dagmer', episode: 15, chapter: 111 },
  { id: 'black-lorren', episode: 17, chapter: 124 },
  { id: 'wex-pyke', episode: 13, chapter: 98 },
  { id: 'farlen', episode: 16, chapter: 124 },
  { id: 'meera-reed', episode: 22, chapter: 95 },
  { id: 'jojen-reed', episode: 22, chapter: 95 },
  { id: 'ramsay-snow', episode: 32, chapter: 140 },
  { id: 'big-walder-frey', episode: 13, chapter: 90 },
  { id: 'little-walder-frey', episode: 13, chapter: 90 },
  { id: 'wyman-manderly', episode: 60, chapter: 90 },
  { id: 'donella-hornwood', episode: 13, chapter: 90 },
  // The Wall and beyond (#1488).
  { id: 'thoren-smallwood', episode: 11, chapter: 80 },
  { id: 'eddison-tollett', episode: 20, chapter: 87 },
  { id: 'jarman-buckwell', episode: 11, chapter: 87 },
  { id: 'mallador-locke', episode: 11, chapter: 87 },
  { id: 'craster', episode: 11, chapter: 97 },
  { id: 'gilly', episode: 15, chapter: 97 },
  { id: 'qhorin-halfhand', episode: 15, chapter: 117 },
  { id: 'stonesnake', episode: 15, chapter: 125 },
  { id: 'ygritte', episode: 16, chapter: 125 },
  { id: 'ebben', episode: 17, chapter: 127 },
  { id: 'dalbridge', episode: 17, chapter: 127 },
  { id: 'lord-of-bones', episode: 18, chapter: 142 },
]

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

/** Every title a reader has, the lazily loaded rest included, sorted. */
function chronicleTitles(owner: Entity, reader: Reader): string[] {
  const entries = [
    ...chronicleOf(owner, reader).entries,
    ...chronicleRestOf(owner.id, reader),
  ]
  return entries.map((entry) => entry.title).toSorted(byString())
}

/** A filed story's medium, read off its `source`. */
function mediumOf({ source }: Dated<Story>): Medium {
  if (source === 'episode') {
    return 'show'
  }
  return source === 'chapter' ? 'books' : 'both'
}

/** A row as one comparable line. */
function lineOf({ chapter, episode, id, medium, title }: Row): string {
  return `${id} ${medium} ${String(episode)} ${String(chapter)} ${title}`
}

/** One module's stories, in the table's shape. */
function rowsOf(chronicles: Record<string, Dated<Story>[]>): Row[] {
  return Object.entries(chronicles).flatMap(([id, stories]) =>
    stories.map((story) => ({
      // Every story pins its chapter; a missing one fails the comparison.
      chapter: story.chapter ?? 0,
      episode: story.episode,
      id,
      medium: mediumOf(story),
      title: story.value.title.en,
    })),
  )
}

/** Whether a row opens inside the first stage in each medium it is told in. */
function inStage1({ chapter, episode, medium }: Row): boolean {
  const shown = medium === 'books' || episode <= STAGE_1.episode
  const told = medium === 'show' || chapter <= STAGE_1.chapter

  return shown && told
}

/** Every filed story, both modules, in the table's shape. */
const ALL: Row[] = [...rowsOf(season1Chronicles), ...rowsOf(season2Chronicles)]

/** Every character's stories, from both modules. */
const STORIES_BY_ID = new Map<string, Dated<Story>[]>(
  Object.entries({ ...season1Chronicles, ...season2Chronicles }),
)

/** The data's stories of the second stage. */
const FILED: Row[] = ALL.filter((row) => !inStage1(row))

/** A row's title in one locale, read from the data. */
function titleIn({ id, title }: Row, locale: Locale): string {
  const stories: Dated<Story>[] = STORIES_BY_ID.get(id) ?? []
  const found = stories.find(({ value }) => value.title.en === title)
  if (found === undefined) {
    throw new Error(`No story ${title} for ${id}`)
  }
  return found.value.title[locale]
}

/** The titles of some rows in one locale, sorted. */
function titlesOf(rows: Row[], locale: Locale): string[] {
  return rows.map((row) => titleIn(row, locale)).toSorted(byString())
}

/** Every character with a story in the second stage. */
const OWNERS = [...new Set(STORIES.map(({ id }) => id))]

describe('the chronicles of the second stage', () => {
  it('files exactly the stories the table lists', () => {
    const filed = FILED.map((row) => lineOf(row)).toSorted(byString())
    const listed = STORIES.map((row) => lineOf(row)).toSorted(byString())

    expect(filed).toStrictEqual(listed)
  })

  it('files every new story on the character the archive holds', () => {
    for (const [id, stories] of Object.entries(season2Chronicles)) {
      const filed = archive.dossierOf(recordIn(archive, id))?.chronicle

      expect(filed, id).toStrictEqual(stories)
    }
  })

  it.each(FIRST)(
    'opens $id’s chronicle at episode $episode and chapter $chapter',
    ({ chapter, episode, id }) => {
      const owner = recordIn(archive, id)
      const first = archive.dossierOf(owner)?.chronicle?.[0]

      expect(first?.episode).toBe(episode)
      expect(first?.chapter).toBe(chapter)
      expect(owner.revealedAtEpisode).toBe(episode)
    },
  )

  it('stays inside the stage in each medium it is told in', () => {
    const shown = STORIES.filter(({ medium }) => medium !== 'books')
    const told = STORIES.filter(({ medium }) => medium !== 'show')

    expect(
      Math.max(...shown.map(({ episode }) => episode)),
    ).toBeLessThanOrEqual(STAGE_2.episode)
    expect(Math.max(...told.map(({ chapter }) => chapter))).toBeLessThanOrEqual(
      STAGE_2.chapter,
    )
  })
})

describe.each(LOCALES)('the chronicles of the second stage in %s', (locale) => {
  const read = (bookmark: Bookmark): Reader =>
    readerFor(archive, bookmark, locale)
  const at = (owner: Entity, bookmark: Bookmark): string[] =>
    chronicleTitles(owner, read(bookmark))

  it.each(STORIES.filter(({ medium }) => medium !== 'books'))(
    'shows $id’s $medium story “$title” at episode $episode, never before',
    (row) => {
      const owner = recordIn(archive, row.id)
      const title = titleIn(row, locale)

      expect(at(owner, ep(row.episode - 1))).not.toContain(title)
      expect(at(owner, ep(row.episode))).toContain(title)
    },
  )

  it.each(STORIES.filter(({ medium }) => medium !== 'show'))(
    'shows $id’s $medium story “$title” at chapter $chapter, never before',
    (row) => {
      const owner = recordIn(archive, row.id)
      const title = titleIn(row, locale)

      expect(at(owner, ch(row.chapter - 1))).not.toContain(title)
      expect(at(owner, ch(row.chapter))).toContain(title)
    },
  )

  it.each(STORIES.filter(({ medium }) => medium !== 'both'))(
    'keeps $id’s $medium story “$title” from the other medium',
    (row) => {
      const owner = recordIn(archive, row.id)
      const other =
        row.medium === 'show' ?
          ch(archive.series.chapterCeiling)
        : ep(archive.series.episodeCeiling)

      expect(at(owner, other)).not.toContain(titleIn(row, locale))
    },
  )

  it.each(FIRST)(
    'shows $id no story before the gate in either medium',
    ({ chapter, episode, id }) => {
      const owner = recordIn(archive, id)

      expect(at(owner, ep(episode - 1))).toStrictEqual([])
      expect(at(owner, ch(chapter - 1))).toStrictEqual([])
    },
  )

  it.each(OWNERS)('adds nothing to %s’s chronicle past the stage', (id) => {
    const owner = recordIn(archive, id)
    const owned = ALL.filter((row) => row.id === id)
    const shown = titlesOf(
      owned.filter(
        ({ episode, medium }) =>
          medium !== 'books' && episode <= STAGE_2.episode,
      ),
      locale,
    )
    const told = titlesOf(
      owned.filter(
        ({ chapter, medium }) =>
          medium !== 'show' && chapter <= STAGE_2.chapter,
      ),
      locale,
    )

    expect(at(owner, ep(STAGE_2.episode))).toStrictEqual(shown)
    expect(at(owner, ep(STAGE_2.episode + 1))).toStrictEqual(shown)
    expect(at(owner, ch(STAGE_2.chapter))).toStrictEqual(told)
    expect(at(owner, ch(STAGE_2.chapter + 1))).toStrictEqual(told)
  })
})
