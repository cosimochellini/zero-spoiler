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
  // Stannis, Renly and the stormlands (#1485).
  {
    id: 'stannis-baratheon',
    medium: 'show',
    episode: 11,
    chapter: 84,
    title: 'The sword in the fire',
  },
  {
    id: 'stannis-baratheon',
    medium: 'show',
    episode: 12,
    chapter: 84,
    title: 'The promise of a son',
  },
  {
    id: 'stannis-baratheon',
    medium: 'show',
    episode: 14,
    chapter: 116,
    title: 'Until dawn',
  },
  {
    id: 'stannis-baratheon',
    medium: 'show',
    episode: 15,
    chapter: 116,
    title: 'Command of the fleet',
  },
  {
    id: 'stannis-baratheon',
    medium: 'show',
    episode: 18,
    chapter: 128,
    title: 'The Hand',
  },
  {
    id: 'stannis-baratheon',
    medium: 'show',
    episode: 19,
    chapter: 135,
    title: 'Under the walls',
  },
  {
    id: 'stannis-baratheon',
    medium: 'show',
    episode: 20,
    chapter: 139,
    title: 'Visions in the fire',
  },
  {
    id: 'stannis-baratheon',
    medium: 'books',
    episode: 11,
    chapter: 74,
    title: 'A king with few allies',
  },
  {
    id: 'stannis-baratheon',
    medium: 'books',
    episode: 11,
    chapter: 84,
    title: 'A red hawk',
  },
  {
    id: 'stannis-baratheon',
    medium: 'books',
    episode: 14,
    chapter: 105,
    title: 'A peach refused',
  },
  {
    id: 'stannis-baratheon',
    medium: 'books',
    episode: 14,
    chapter: 116,
    title: 'Renly’s peach',
  },
  {
    id: 'stannis-baratheon',
    medium: 'books',
    episode: 19,
    chapter: 132,
    title: 'The fleet on the Blackwater',
  },
  {
    id: 'stannis-baratheon',
    medium: 'books',
    episode: 19,
    chapter: 136,
    title: 'The lost battle',
  },
  {
    id: 'melisandre',
    medium: 'show',
    episode: 11,
    chapter: 84,
    title: 'The burning of the Seven',
  },
  {
    id: 'melisandre',
    medium: 'show',
    episode: 12,
    chapter: 84,
    title: 'Death by fire',
  },
  {
    id: 'melisandre',
    medium: 'show',
    episode: 14,
    chapter: 116,
    title: 'The shadow in the cave',
  },
  {
    id: 'melisandre',
    medium: 'show',
    episode: 20,
    chapter: 139,
    title: 'Stannis’s faith',
  },
  {
    id: 'melisandre',
    medium: 'books',
    episode: 11,
    chapter: 74,
    title: 'A cup for two',
  },
  {
    id: 'melisandre',
    medium: 'books',
    episode: 11,
    chapter: 84,
    title: 'Azor Ahai',
  },
  {
    id: 'melisandre',
    medium: 'books',
    episode: 14,
    chapter: 105,
    title: 'The king’s standard',
  },
  {
    id: 'melisandre',
    medium: 'books',
    episode: 14,
    chapter: 116,
    title: 'Beneath Storm’s End',
  },
  {
    id: 'davos-seaworth',
    medium: 'show',
    episode: 11,
    chapter: 84,
    title: 'The poison in the cup',
  },
  {
    id: 'davos-seaworth',
    medium: 'show',
    episode: 12,
    chapter: 84,
    title: 'Thirty ships',
  },
  {
    id: 'davos-seaworth',
    medium: 'show',
    episode: 14,
    chapter: 116,
    title: 'The boat in the night',
  },
  {
    id: 'davos-seaworth',
    medium: 'show',
    episode: 15,
    chapter: 107,
    title: 'The commander',
  },
  {
    id: 'davos-seaworth',
    medium: 'show',
    episode: 18,
    chapter: 128,
    title: 'An unexpected offer',
  },
  {
    id: 'davos-seaworth',
    medium: 'show',
    episode: 19,
    chapter: 132,
    title: 'The wildfire',
  },
  {
    id: 'davos-seaworth',
    medium: 'books',
    episode: 11,
    chapter: 74,
    title: 'The envoy’s return',
  },
  {
    id: 'davos-seaworth',
    medium: 'books',
    episode: 12,
    chapter: 84,
    title: 'His god is the king',
  },
  {
    id: 'davos-seaworth',
    medium: 'books',
    episode: 14,
    chapter: 116,
    title: 'The birth of the shadow',
  },
  {
    id: 'davos-seaworth',
    medium: 'books',
    episode: 19,
    chapter: 132,
    title: 'The mouth of hell',
  },
  {
    id: 'cressen',
    medium: 'show',
    episode: 11,
    chapter: 74,
    title: 'In the light of the Seven',
  },
  {
    id: 'cressen',
    medium: 'books',
    episode: 11,
    chapter: 74,
    title: 'The red comet',
  },
  {
    id: 'matthos-seaworth',
    medium: 'show',
    episode: 11,
    chapter: 132,
    title: 'The king’s letter',
  },
  {
    id: 'matthos-seaworth',
    medium: 'show',
    episode: 12,
    chapter: 132,
    title: 'The pirate and the queen',
  },
  {
    id: 'matthos-seaworth',
    medium: 'show',
    episode: 19,
    chapter: 132,
    title: 'Faith in his captain',
  },
  {
    id: 'matthos-seaworth',
    medium: 'books',
    episode: 19,
    chapter: 132,
    title: 'Second on the Black Betha',
  },
  {
    id: 'salladhor-saan',
    medium: 'show',
    episode: 12,
    chapter: 84,
    title: 'An excellent pirate',
  },
  {
    id: 'salladhor-saan',
    medium: 'books',
    episode: 12,
    chapter: 84,
    title: 'A burnt sword',
  },
  {
    id: 'selyse-baratheon',
    medium: 'books',
    episode: 25,
    chapter: 74,
    title: 'The Lord of Light will provide',
  },
  {
    id: 'selyse-baratheon',
    medium: 'books',
    episode: 25,
    chapter: 84,
    title: 'The queen’s men',
  },
  {
    id: 'shireen-baratheon',
    medium: 'books',
    episode: 25,
    chapter: 74,
    title: 'The white raven',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'show',
    episode: 13,
    chapter: 96,
    title: 'The tourney champion',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'show',
    episode: 14,
    chapter: 105,
    title: 'Loyalty without charge',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'show',
    episode: 15,
    chapter: 113,
    title: 'The shadow in the tent',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'show',
    episode: 16,
    chapter: 113,
    title: 'At Robb’s camp',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'show',
    episode: 17,
    chapter: 129,
    title: 'The Karstarks’ vengeance',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'show',
    episode: 18,
    chapter: 129,
    title: 'The Kingslayer in chains',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'show',
    episode: 20,
    chapter: 139,
    title: 'The hanged girls',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'books',
    episode: 13,
    chapter: 96,
    title: 'The knight in blue',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'books',
    episode: 14,
    chapter: 105,
    title: 'Renly’s banner',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'books',
    episode: 15,
    chapter: 107,
    title: 'The king’s blood',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'books',
    episode: 15,
    chapter: 113,
    title: 'The sworn sword',
  },
  {
    id: 'brienne-of-tarth',
    medium: 'books',
    episode: 17,
    chapter: 129,
    title: 'Outside the cell',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 13,
    chapter: 96,
    title: 'Renly’s queen',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 14,
    chapter: 105,
    title: 'Littlefinger’s hints',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 15,
    chapter: 107,
    title: 'Not a queen, the Queen',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 20,
    chapter: 139,
    title: 'Loved from afar',
  },
  {
    id: 'margaery-tyrell',
    medium: 'books',
    episode: 13,
    chapter: 96,
    title: 'The mortar of the alliance',
  },
  {
    id: 'margaery-tyrell',
    medium: 'books',
    episode: 15,
    chapter: 107,
    title: 'A son within a year',
  },
  {
    id: 'margaery-tyrell',
    medium: 'books',
    episode: 20,
    chapter: 139,
    title: 'Promised to the king',
  },
  {
    id: 'mace-tyrell',
    medium: 'books',
    episode: 32,
    chapter: 139,
    title: 'Among the heroes of the Blackwater',
  },
  {
    id: 'cortnay-penrose',
    medium: 'books',
    episode: 14,
    chapter: 116,
    title: 'The gauntlet',
  },
  {
    id: 'cortnay-penrose',
    medium: 'books',
    episode: 16,
    chapter: 118,
    title: 'Storm’s End has fallen',
  },
  {
    id: 'renly-baratheon',
    medium: 'show',
    episode: 13,
    chapter: 96,
    title: 'The king with a hundred thousand men',
  },
  {
    id: 'renly-baratheon',
    medium: 'show',
    episode: 14,
    chapter: 105,
    title: 'A man without friends',
  },
  {
    id: 'renly-baratheon',
    medium: 'show',
    episode: 15,
    chapter: 107,
    title: 'Before the mirror',
  },
  {
    id: 'renly-baratheon',
    medium: 'books',
    episode: 13,
    chapter: 96,
    title: 'The knights of summer',
  },
  {
    id: 'renly-baratheon',
    medium: 'books',
    episode: 14,
    chapter: 105,
    title: 'A peach for Stannis',
  },
  {
    id: 'renly-baratheon',
    medium: 'books',
    episode: 15,
    chapter: 107,
    title: 'A shadow in the pavilion',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 13,
    chapter: 96,
    title: 'Beaten by Brienne',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 14,
    chapter: 105,
    title: 'At the parley',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 15,
    chapter: 107,
    title: 'The vigil',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 19,
    chapter: 136,
    title: 'In Renly’s armor',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 20,
    chapter: 139,
    title: 'A reward for the Tyrells',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 13,
    chapter: 96,
    title: 'Unhorsed',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 15,
    chapter: 107,
    title: 'The stag and the rose',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 15,
    chapter: 110,
    title: 'Three guards killed',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 20,
    chapter: 139,
    title: 'The Kingsguard',
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
  // Stannis, Renly and the stormlands (#1485).
  { id: 'stannis-baratheon', episode: 11, chapter: 74 },
  { id: 'melisandre', episode: 11, chapter: 74 },
  { id: 'davos-seaworth', episode: 11, chapter: 74 },
  { id: 'cressen', episode: 11, chapter: 74 },
  { id: 'matthos-seaworth', episode: 11, chapter: 132 },
  { id: 'salladhor-saan', episode: 12, chapter: 84 },
  { id: 'selyse-baratheon', episode: 25, chapter: 74 },
  { id: 'shireen-baratheon', episode: 25, chapter: 74 },
  { id: 'brienne-of-tarth', episode: 13, chapter: 96 },
  { id: 'margaery-tyrell', episode: 13, chapter: 96 },
  { id: 'mace-tyrell', episode: 32, chapter: 139 },
  { id: 'cortnay-penrose', episode: 14, chapter: 116 },
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
