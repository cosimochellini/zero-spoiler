import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { season1Chronicles } from '~/data/series/game-of-thrones/records/season-1.chronicle'
import type { Dated, Entity, Story } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { chronicleOf, chronicleRestOf } from './chronicle.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 1 chronicle tests require Game of Thrones')
}
const { archive } = series

type Medium = 'books' | 'both' | 'show'

interface Row {
  chapter: number
  episode: number
  id: string
  medium: Medium
  title: string
}

/**
 * Every Essos story of the first stage (#1360), then every King’s Landing,
 * riverlands and Vale story (#1362), written down independently
 * of the data: owner, medium, episode, site chapter and English title. A
 * story both media tell opens at both numbers, a show story at its episode
 * alone and a book story at its chapter alone, so moving any entry, or
 * changing its medium, fails here.
 */
const STORIES: Row[] = [
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 1,
    chapter: 4,
    title: 'The wedding in Pentos',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 1,
    chapter: 4,
    title: 'Shown to the khal',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'The wedding outside the walls',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Doreah’s lessons',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'The ride east',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 3,
    chapter: 24,
    title: 'An order from the khaleesi',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 4,
    chapter: 37,
    title: 'The belt',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 6,
    chapter: 47,
    title: 'The stallion who mounts the world',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 7,
    chapter: 55,
    title: 'The poisoned wine',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 8,
    chapter: 62,
    title: 'The Lhazareen village',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'The girl she claims',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'Blood magic',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'What the maegi took',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 10,
    chapter: 73,
    title: 'Fire and blood',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 1,
    chapter: 4,
    title: 'The beggar king’s bargain',
  },
  {
    id: 'viserys-targaryen',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'Impatient for an army',
  },
  {
    id: 'viserys-targaryen',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Riding with the khalasar',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 3,
    chapter: 24,
    title: 'Made to walk',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 4,
    chapter: 37,
    title: 'The invitation to supper',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 6,
    chapter: 47,
    title: 'A golden crown',
  },
  {
    id: 'drogo',
    medium: 'show',
    episode: 1,
    chapter: 4,
    title: 'A bride from the sunset lands',
  },
  {
    id: 'drogo',
    medium: 'books',
    episode: 1,
    chapter: 4,
    title: 'The feast at the manse',
  },
  {
    id: 'drogo',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'A silver filly',
  },
  {
    id: 'drogo',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Words in Dothraki',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 6,
    chapter: 47,
    title: 'A crown of molten gold',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 7,
    chapter: 55,
    title: 'The poison water',
  },
  {
    id: 'drogo',
    medium: 'show',
    episode: 8,
    chapter: 62,
    title: 'Mago’s challenge',
  },
  {
    id: 'drogo',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'Wounds from the battle',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'The fall from the saddle',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 10,
    chapter: 69,
    title: 'The khal who cannot ride',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 1,
    chapter: 4,
    title: 'Sworn at the wedding',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 1,
    chapter: 4,
    title: 'A knight among the guests',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'Books for the bride',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Why he fled',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 2,
    chapter: 13,
    title: 'Reports to the council',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'Siding with the khaleesi',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 3,
    chapter: 24,
    title: 'A father he shamed',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 4,
    chapter: 37,
    title: 'Poachers and a wife',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 5,
    chapter: 47,
    title: 'The informer',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 6,
    chapter: 47,
    title: 'The dragon eggs',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 7,
    chapter: 55,
    title: 'A royal pardon',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 7,
    chapter: 55,
    title: 'A warning from Pentos',
  },
  {
    id: 'jorah-mormont',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'In armor',
  },
  {
    id: 'jorah-mormont',
    medium: 'both',
    episode: 10,
    chapter: 73,
    title: 'On his knees',
  },
  {
    id: 'illyrio-mopatis',
    medium: 'both',
    episode: 1,
    chapter: 4,
    title: 'The magister’s guests',
  },
  {
    id: 'illyrio-mopatis',
    medium: 'both',
    episode: 2,
    chapter: 12,
    title: 'Three dragon eggs',
  },
  {
    id: 'illyrio-mopatis',
    medium: 'show',
    episode: 5,
    chapter: 47,
    title: 'Under the Red Keep',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'The moon and the sun',
  },
  {
    id: 'irri',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'A wedding gift',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 3,
    chapter: 24,
    title: 'News of a child',
  },
  {
    id: 'irri',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'The first to notice',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 6,
    chapter: 47,
    title: 'Burned hands',
  },
  {
    id: 'doreah',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Not a slave',
  },
  {
    id: 'doreah',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'A handmaiden from Lys',
  },
  {
    id: 'doreah',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'The second moon',
  },
  {
    id: 'doreah',
    medium: 'both',
    episode: 4,
    chapter: 37,
    title: 'Dragged to the khaleesi',
  },
  { id: 'rakharo', medium: 'show', episode: 3, chapter: 24, title: 'The whip' },
  {
    id: 'rakharo',
    medium: 'show',
    episode: 7,
    chapter: 55,
    title: 'The merchant’s ankles',
  },
  {
    id: 'rakharo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'The fight at the tent',
  },
  {
    id: 'rakharo',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'The eggs on the pyre',
  },
  {
    id: 'rakharo',
    medium: 'books',
    episode: 10,
    chapter: 73,
    title: 'A promise and no more',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'both',
    episode: 8,
    chapter: 62,
    title: 'The godswife',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'A life for a life',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'Revenge for her people',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'both',
    episode: 10,
    chapter: 73,
    title: 'Bound to the pyre',
  },
  {
    id: 'qotho',
    medium: 'books',
    episode: 6,
    chapter: 12,
    title: 'The dragonbone bow',
  },
  {
    id: 'qotho',
    medium: 'show',
    episode: 6,
    chapter: 62,
    title: 'The broken arm',
  },
  { id: 'qotho', medium: 'both', episode: 8, chapter: 62, title: 'A maegi' },
  {
    id: 'qotho',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'Death outside the tent',
  },
  {
    id: 'cohollo',
    medium: 'books',
    episode: 4,
    chapter: 37,
    title: 'The oldest bloodrider',
  },
  {
    id: 'cohollo',
    medium: 'books',
    episode: 6,
    chapter: 47,
    title: 'Disarming the beggar king',
  },
  {
    id: 'cohollo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Spitting in her face',
  },
  {
    id: 'haggo',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'Mago’s complaint',
  },
  {
    id: 'haggo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Under Jhogo’s whip',
  },
  {
    id: 'jhiqui',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'A goddess in the sky',
  },
  {
    id: 'jhiqui',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'To teach the tongue',
  },
  {
    id: 'aggo',
    medium: 'books',
    episode: 11,
    chapter: 62,
    title: 'A blade at the godswife’s throat',
  },
  {
    id: 'aggo',
    medium: 'books',
    episode: 11,
    chapter: 65,
    title: 'An arrow for Cohollo',
  },
  {
    id: 'aggo',
    medium: 'books',
    episode: 11,
    chapter: 73,
    title: 'Only a man',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'A whip around the neck',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 7,
    chapter: 55,
    title: 'The wine seller’s flight',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Against the bloodriders',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 10,
    chapter: 73,
    title: 'It would shame him',
  },
  {
    id: 'quaro',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'Honored, he says',
  },
  {
    id: 'quaro',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Answering her call',
  },
  {
    id: 'mago',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'A captive taken from him',
  },
  {
    id: 'mago',
    medium: 'show',
    episode: 8,
    chapter: 63,
    title: 'Challenging the khal',
  },
  {
    id: 'mago',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'Jhaqo’s bloodrider',
  },
  {
    id: 'eroeh',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'The girl Daenerys saved',
  },
  // King’s Landing, the riverlands and the Vale (#1362).
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 1,
    chapter: 5,
    title: 'Arrival at Winterfell',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 1,
    chapter: 6,
    title: 'Counsel in the yard',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 2,
    chapter: 10,
    title: 'Three slaps',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 2,
    chapter: 10,
    title: 'Two slaps for the prince',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 3,
    chapter: 22,
    title: 'At Castle Black',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 3,
    chapter: 22,
    title: 'Dinner with the Lord Commander',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 4,
    chapter: 25,
    title: 'A saddle for Bran',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 4,
    chapter: 29,
    title: 'Taken at the inn',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 4,
    chapter: 29,
    title: 'Recognised at the inn',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 5,
    chapter: 32,
    title: 'The high road',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 5,
    chapter: 35,
    title: 'The sky cells',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 6,
    chapter: 41,
    title: 'This little man is going home',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 6,
    chapter: 41,
    title: 'The trial at the Eyrie',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 8,
    chapter: 43,
    title: 'The Stone Crows',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 8,
    chapter: 57,
    title: 'The hill tribes',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 9,
    chapter: 63,
    title: 'The night before the battle',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 9,
    chapter: 63,
    title: 'The battle on the Green Fork',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 10,
    chapter: 70,
    title: 'Acting Hand of the King',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 10,
    chapter: 70,
    title: 'Sent to court',
  },
  {
    id: 'jaime-lannister',
    medium: 'show',
    episode: 1,
    chapter: 5,
    title: 'The things I do for love',
  },
  {
    id: 'jaime-lannister',
    medium: 'books',
    episode: 1,
    chapter: 9,
    title: 'The abandoned tower',
  },
  {
    id: 'jaime-lannister',
    medium: 'show',
    episode: 3,
    chapter: 21,
    title: 'Burn them all',
  },
  {
    id: 'jaime-lannister',
    medium: 'both',
    episode: 5,
    chapter: 36,
    title: 'The fight in the street',
  },
  {
    id: 'jaime-lannister',
    medium: 'show',
    episode: 7,
    chapter: 57,
    title: 'A dynasty or nothing',
  },
  {
    id: 'jaime-lannister',
    medium: 'books',
    episode: 8,
    chapter: 56,
    title: 'War in the riverlands',
  },
  {
    id: 'jaime-lannister',
    medium: 'both',
    episode: 8,
    chapter: 58,
    title: 'Lord Commander',
  },
  {
    id: 'jaime-lannister',
    medium: 'show',
    episode: 9,
    chapter: 64,
    title: 'Taken prisoner',
  },
  {
    id: 'jaime-lannister',
    medium: 'books',
    episode: 9,
    chapter: 64,
    title: 'The Whispering Wood',
  },
  {
    id: 'jaime-lannister',
    medium: 'show',
    episode: 10,
    chapter: 72,
    title: 'Only me',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 7,
    chapter: 57,
    title: 'The stag',
  },
  {
    id: 'tywin-lannister',
    medium: 'books',
    episode: 8,
    chapter: 57,
    title: 'The clans at the inn',
  },
  {
    id: 'tywin-lannister',
    medium: 'books',
    episode: 8,
    chapter: 58,
    title: 'Hand from afar',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 9,
    chapter: 63,
    title: 'The vanguard',
  },
  {
    id: 'tywin-lannister',
    medium: 'books',
    episode: 9,
    chapter: 63,
    title: 'The clans in the vanguard',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 10,
    chapter: 70,
    title: 'A Hand in his place',
  },
  {
    id: 'tywin-lannister',
    medium: 'books',
    episode: 10,
    chapter: 70,
    title: 'The trap that failed',
  },
  {
    id: 'kevan-lannister',
    medium: 'both',
    episode: 8,
    chapter: 57,
    title: 'At his brother’s side',
  },
  {
    id: 'kevan-lannister',
    medium: 'show',
    episode: 10,
    chapter: 70,
    title: 'A war on every side',
  },
  {
    id: 'cersei-lannister',
    medium: 'books',
    episode: 1,
    chapter: 5,
    title: 'The arrival at Winterfell',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 1,
    chapter: 9,
    title: 'The abandoned tower',
  },
  {
    id: 'cersei-lannister',
    medium: 'books',
    episode: 1,
    chapter: 9,
    title: 'Seen by Bran',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 2,
    chapter: 17,
    title: 'The lost son',
  },
  {
    id: 'cersei-lannister',
    medium: 'books',
    episode: 2,
    chapter: 17,
    title: 'The pelt she never gets',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 3,
    chapter: 21,
    title: 'Anyone who isn’t us',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 4,
    chapter: 30,
    title: 'Born to follow',
  },
  {
    id: 'cersei-lannister',
    medium: 'books',
    episode: 5,
    chapter: 31,
    title: 'The melee',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 5,
    chapter: 34,
    title: 'A drink with the king',
  },
  {
    id: 'cersei-lannister',
    medium: 'both',
    episode: 6,
    chapter: 40,
    title: 'The bruise',
  },
  {
    id: 'cersei-lannister',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'You win or you die',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 8,
    chapter: 52,
    title: 'Sansa’s letter',
  },
  {
    id: 'cersei-lannister',
    medium: 'both',
    episode: 9,
    chapter: 66,
    title: 'The confession at the Sept',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'A new lover',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'both',
    episode: 1,
    chapter: 5,
    title: 'The prince at Winterfell',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'books',
    episode: 1,
    chapter: 8,
    title: 'Sharp steel',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'both',
    episode: 2,
    chapter: 17,
    title: 'The butcher’s boy',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 3,
    chapter: 21,
    title: 'How he would treat the North',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'books',
    episode: 4,
    chapter: 30,
    title: 'The tourney feast',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 6,
    chapter: 45,
    title: 'The necklace',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'King Joffrey',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'both',
    episode: 8,
    chapter: 58,
    title: 'Sansa’s plea',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'both',
    episode: 9,
    chapter: 66,
    title: 'No mercy',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'both',
    episode: 10,
    chapter: 68,
    title: 'The heads on the walls',
  },
  {
    id: 'robert-baratheon',
    medium: 'both',
    episode: 1,
    chapter: 5,
    title: 'The king at Winterfell',
  },
  {
    id: 'robert-baratheon',
    medium: 'both',
    episode: 2,
    chapter: 17,
    title: 'The king’s judgment',
  },
  {
    id: 'robert-baratheon',
    medium: 'show',
    episode: 3,
    chapter: 31,
    title: 'Old war stories',
  },
  {
    id: 'robert-baratheon',
    medium: 'books',
    episode: 5,
    chapter: 31,
    title: 'Too fat for his armour',
  },
  {
    id: 'robert-baratheon',
    medium: 'both',
    episode: 5,
    chapter: 34,
    title: 'Daenerys’s death warrant',
  },
  {
    id: 'robert-baratheon',
    medium: 'both',
    episode: 6,
    chapter: 40,
    title: 'A blow to the queen',
  },
  {
    id: 'robert-baratheon',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'The boar',
  },
  {
    id: 'renly-baratheon',
    medium: 'books',
    episode: 3,
    chapter: 16,
    title: 'The king’s escort',
  },
  {
    id: 'renly-baratheon',
    medium: 'both',
    episode: 3,
    chapter: 21,
    title: 'The small council',
  },
  {
    id: 'renly-baratheon',
    medium: 'show',
    episode: 5,
    chapter: 30,
    title: 'The Knight of Flowers',
  },
  {
    id: 'renly-baratheon',
    medium: 'books',
    episode: 5,
    chapter: 34,
    title: 'A mistake to let them live',
  },
  {
    id: 'renly-baratheon',
    medium: 'show',
    episode: 6,
    chapter: 40,
    title: 'The quarrel on the hunt',
  },
  {
    id: 'renly-baratheon',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'A hundred swords',
  },
  {
    id: 'renly-baratheon',
    medium: 'both',
    episode: 10,
    chapter: 70,
    title: 'Another claimant',
  },
  {
    id: 'myrcella-baratheon',
    medium: 'both',
    episode: 1,
    chapter: 6,
    title: 'The princess at Winterfell',
  },
  {
    id: 'myrcella-baratheon',
    medium: 'both',
    episode: 2,
    chapter: 10,
    title: 'News of Bran',
  },
  {
    id: 'tommen-baratheon',
    medium: 'both',
    episode: 1,
    chapter: 6,
    title: 'The youngest prince',
  },
  {
    id: 'tommen-baratheon',
    medium: 'books',
    episode: 1,
    chapter: 8,
    title: 'The bout with Bran',
  },
  {
    id: 'tommen-baratheon',
    medium: 'both',
    episode: 2,
    chapter: 10,
    title: 'Breakfast with his uncle',
  },
  {
    id: 'lancel-lannister',
    medium: 'show',
    episode: 3,
    chapter: 31,
    title: 'The king’s squire',
  },
  {
    id: 'lancel-lannister',
    medium: 'both',
    episode: 5,
    chapter: 31,
    title: 'The breastplate stretcher',
  },
  {
    id: 'lancel-lannister',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'The wine on the hunt',
  },
  {
    id: 'lancel-lannister',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'In the queen’s bed',
  },
  {
    id: 'barristan-selmy',
    medium: 'show',
    episode: 3,
    chapter: 16,
    title: 'Old war stories',
  },
  {
    id: 'barristan-selmy',
    medium: 'books',
    episode: 3,
    chapter: 17,
    title: 'Escort on the road',
  },
  {
    id: 'barristan-selmy',
    medium: 'both',
    episode: 5,
    chapter: 31,
    title: 'The vigil for Hugh',
  },
  {
    id: 'barristan-selmy',
    medium: 'books',
    episode: 5,
    chapter: 34,
    title: 'Against the assassins',
  },
  {
    id: 'barristan-selmy',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'Robert’s letter',
  },
  {
    id: 'barristan-selmy',
    medium: 'both',
    episode: 8,
    chapter: 58,
    title: 'Removed from the Kingsguard',
  },
  {
    id: 'syrio-forel',
    medium: 'both',
    episode: 3,
    chapter: 23,
    title: 'The dancing master',
  },
  {
    id: 'syrio-forel',
    medium: 'show',
    episode: 6,
    chapter: 44,
    title: 'A mind elsewhere',
  },
  {
    id: 'syrio-forel',
    medium: 'both',
    episode: 8,
    chapter: 51,
    title: 'The wooden sword',
  },
  {
    id: 'petyr-baelish',
    medium: 'show',
    episode: 3,
    chapter: 19,
    title: 'The dagger and the brothel',
  },
  {
    id: 'petyr-baelish',
    medium: 'books',
    episode: 3,
    chapter: 19,
    title: 'Childhood friends',
  },
  {
    id: 'petyr-baelish',
    medium: 'books',
    episode: 3,
    chapter: 21,
    title: 'The way to the brothel',
  },
  {
    id: 'petyr-baelish',
    medium: 'books',
    episode: 4,
    chapter: 26,
    title: 'Three spies and a squire',
  },
  {
    id: 'petyr-baelish',
    medium: 'show',
    episode: 4,
    chapter: 30,
    title: 'Advice and stories',
  },
  {
    id: 'petyr-baelish',
    medium: 'both',
    episode: 5,
    chapter: 36,
    title: 'Robert’s daughter',
  },
  {
    id: 'petyr-baelish',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'A dagger at his throat',
  },
  {
    id: 'varys',
    medium: 'books',
    episode: 3,
    chapter: 19,
    title: 'The secret visitor',
  },
  {
    id: 'varys',
    medium: 'show',
    episode: 3,
    chapter: 21,
    title: 'Prayers for the prince',
  },
  {
    id: 'varys',
    medium: 'books',
    episode: 5,
    chapter: 31,
    title: 'A visitor in disguise',
  },
  {
    id: 'varys',
    medium: 'show',
    episode: 5,
    chapter: 33,
    title: 'Beneath the Red Keep',
  },
  {
    id: 'varys',
    medium: 'books',
    episode: 5,
    chapter: 34,
    title: 'News from across the sea',
  },
  {
    id: 'varys',
    medium: 'show',
    episode: 8,
    chapter: 59,
    title: 'A visit to the cell',
  },
  {
    id: 'varys',
    medium: 'both',
    episode: 9,
    chapter: 66,
    title: 'Advice not taken',
  },
  {
    id: 'pycelle',
    medium: 'both',
    episode: 3,
    chapter: 21,
    title: 'The new Hand’s council',
  },
  {
    id: 'pycelle',
    medium: 'both',
    episode: 4,
    chapter: 26,
    title: 'Questions about Jon Arryn',
  },
  {
    id: 'pycelle',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'The king’s last wound',
  },
  {
    id: 'pycelle',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'Not as frail as he looks',
  },
  {
    id: 'sandor-clegane',
    medium: 'books',
    episode: 4,
    chapter: 5,
    title: 'The prince’s guard',
  },
  {
    id: 'sandor-clegane',
    medium: 'books',
    episode: 4,
    chapter: 17,
    title: 'The butcher’s boy',
  },
  {
    id: 'sandor-clegane',
    medium: 'show',
    episode: 4,
    chapter: 30,
    title: 'Littlefinger’s tale',
  },
  {
    id: 'sandor-clegane',
    medium: 'books',
    episode: 4,
    chapter: 30,
    title: 'The burned face',
  },
  {
    id: 'sandor-clegane',
    medium: 'both',
    episode: 5,
    chapter: 31,
    title: 'Against his brother',
  },
  {
    id: 'sandor-clegane',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'In the throne room',
  },
  {
    id: 'sandor-clegane',
    medium: 'both',
    episode: 8,
    chapter: 58,
    title: 'A white cloak',
  },
  {
    id: 'sandor-clegane',
    medium: 'both',
    episode: 10,
    chapter: 68,
    title: 'The blood on her face',
  },
  {
    id: 'janos-slynt',
    medium: 'both',
    episode: 4,
    chapter: 28,
    title: 'Too few men',
  },
  {
    id: 'janos-slynt',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'The gold cloaks',
  },
  {
    id: 'janos-slynt',
    medium: 'both',
    episode: 8,
    chapter: 58,
    title: 'Lord of Harrenhal',
  },
  { id: 'gendry', medium: 'both', episode: 4, chapter: 28, title: 'The helm' },
  {
    id: 'gendry',
    medium: 'show',
    episode: 10,
    chapter: 75,
    title: 'Recruit for the Wall',
  },
  {
    id: 'ilyn-payne',
    medium: 'both',
    episode: 2,
    chapter: 16,
    title: 'The King’s Justice',
  },
  { id: 'ilyn-payne', medium: 'both', episode: 9, chapter: 66, title: 'Ice' },
  {
    id: 'ilyn-payne',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'The singer’s tongue',
  },
  {
    id: 'mycah',
    medium: 'books',
    episode: 2,
    chapter: 16,
    title: 'Sticks for swords',
  },
  { id: 'mycah', medium: 'both', episode: 2, chapter: 17, title: 'Run down' },
  {
    id: 'ros',
    medium: 'show',
    episode: 4,
    chapter: 25,
    title: 'The brothel at Winterfell',
  },
  {
    id: 'ros',
    medium: 'show',
    episode: 7,
    chapter: 48,
    title: 'To King’s Landing',
  },
  {
    id: 'ros',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'The Grand Maester',
  },
  {
    id: 'mhaegen',
    medium: 'show',
    episode: 5,
    chapter: 36,
    title: 'Robert’s nose',
  },
  {
    id: 'tobho-mott',
    medium: 'both',
    episode: 4,
    chapter: 28,
    title: 'The armorer’s shop',
  },
  {
    id: 'meryn-trant',
    medium: 'books',
    episode: 8,
    chapter: 30,
    title: 'The Hand’s tourney',
  },
  {
    id: 'meryn-trant',
    medium: 'both',
    episode: 8,
    chapter: 51,
    title: 'Sent for Arya',
  },
  {
    id: 'meryn-trant',
    medium: 'both',
    episode: 10,
    chapter: 68,
    title: 'On the king’s order',
  },
  {
    id: 'boros-blount',
    medium: 'books',
    episode: 19,
    chapter: 34,
    title: 'Sworn to the king',
  },
  {
    id: 'boros-blount',
    medium: 'books',
    episode: 19,
    chapter: 58,
    title: 'Barristan’s shame',
  },
  {
    id: 'mandon-moore',
    medium: 'books',
    episode: 19,
    chapter: 52,
    title: 'Escort from the council',
  },
  {
    id: 'arys-oakheart',
    medium: 'books',
    episode: 8,
    chapter: 58,
    title: 'In the throne room',
  },
  {
    id: 'dontos-hollard',
    medium: 'books',
    episode: 11,
    chapter: 58,
    title: 'A greeting turned away',
  },
  {
    id: 'balon-swann',
    medium: 'books',
    episode: 4,
    chapter: 30,
    title: 'A knight of the stormlands',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 5,
    chapter: 30,
    title: 'The red rose',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 5,
    chapter: 31,
    title: 'The Knight of Flowers',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 5,
    chapter: 31,
    title: 'The mare in heat',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 6,
    chapter: 44,
    title: 'Justice for Gregor',
  },
  {
    id: 'loras-tyrell',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'Leaving with Renly',
  },
  {
    id: 'masha-heddle',
    medium: 'both',
    episode: 4,
    chapter: 29,
    title: 'No room left',
  },
  {
    id: 'masha-heddle',
    medium: 'books',
    episode: 8,
    chapter: 57,
    title: 'The gibbet at the inn',
  },
  {
    id: 'jason-mallister',
    medium: 'books',
    episode: 4,
    chapter: 29,
    title: 'A nod on the road',
  },
  {
    id: 'jason-mallister',
    medium: 'books',
    episode: 9,
    chapter: 64,
    title: 'A prisoner in the Whispering Wood',
  },
  {
    id: 'willis-wode',
    medium: 'both',
    episode: 4,
    chapter: 29,
    title: 'Standing with Lady Stark',
  },
  {
    id: 'willis-wode',
    medium: 'show',
    episode: 5,
    chapter: 35,
    title: 'The ambush on the road',
  },
  {
    id: 'gregor-clegane',
    medium: 'both',
    episode: 4,
    chapter: 30,
    title: 'Ser Hugh’s joust',
  },
  {
    id: 'gregor-clegane',
    medium: 'both',
    episode: 5,
    chapter: 31,
    title: 'The mare in heat',
  },
  {
    id: 'gregor-clegane',
    medium: 'both',
    episode: 6,
    chapter: 44,
    title: 'Stripped of his titles',
  },
  {
    id: 'gregor-clegane',
    medium: 'show',
    episode: 10,
    chapter: 70,
    title: 'The riverlands on fire',
  },
  {
    id: 'beric-dondarrion',
    medium: 'books',
    episode: 6,
    chapter: 28,
    title: 'Come for the tourney',
  },
  {
    id: 'beric-dondarrion',
    medium: 'both',
    episode: 6,
    chapter: 44,
    title: 'Sent against the Mountain',
  },
  {
    id: 'thoros-of-myr',
    medium: 'books',
    episode: 22,
    chapter: 30,
    title: 'The red priest at the tourney',
  },
  {
    id: 'thoros-of-myr',
    medium: 'books',
    episode: 22,
    chapter: 44,
    title: 'In Lord Beric’s company',
  },
  {
    id: 'walder-frey',
    medium: 'show',
    episode: 9,
    chapter: 60,
    title: 'The price of the crossing',
  },
  {
    id: 'walder-frey',
    medium: 'books',
    episode: 9,
    chapter: 60,
    title: 'Two marriages for a bridge',
  },
  {
    id: 'stevron-frey',
    medium: 'show',
    episode: 9,
    chapter: 60,
    title: 'The courtesies owed',
  },
  {
    id: 'stevron-frey',
    medium: 'books',
    episode: 9,
    chapter: 60,
    title: 'The parley at the Twins',
  },
  {
    id: 'stevron-frey',
    medium: 'books',
    episode: 10,
    chapter: 72,
    title: 'The council at Riverrun',
  },
  {
    id: 'edmure-tully',
    medium: 'books',
    episode: 23,
    chapter: 72,
    title: 'Freed by his nephew',
  },
  {
    id: 'hoster-tully',
    medium: 'books',
    episode: 23,
    chapter: 72,
    title: 'The ailing lord',
  },
  {
    id: 'brynden-tully',
    medium: 'books',
    episode: 23,
    chapter: 35,
    title: 'The Blackfish in the Vale',
  },
  {
    id: 'brynden-tully',
    medium: 'books',
    episode: 23,
    chapter: 56,
    title: 'In command of the outriders',
  },
  {
    id: 'brynden-tully',
    medium: 'books',
    episode: 23,
    chapter: 64,
    title: 'The screen of outriders',
  },
  {
    id: 'bronn',
    medium: 'show',
    episode: 4,
    chapter: 32,
    title: 'The room at the inn',
  },
  {
    id: 'bronn',
    medium: 'books',
    episode: 4,
    chapter: 32,
    title: 'Jyck’s boots',
  },
  {
    id: 'bronn',
    medium: 'show',
    episode: 5,
    chapter: 35,
    title: 'On the high road',
  },
  {
    id: 'bronn',
    medium: 'both',
    episode: 6,
    chapter: 41,
    title: 'Tyrion’s champion',
  },
  {
    id: 'bronn',
    medium: 'books',
    episode: 8,
    chapter: 43,
    title: 'In Tyrion’s service',
  },
  {
    id: 'bronn',
    medium: 'show',
    episode: 8,
    chapter: 57,
    title: 'For pay, not friendship',
  },
  {
    id: 'bronn',
    medium: 'show',
    episode: 9,
    chapter: 63,
    title: 'The eve of battle',
  },
  {
    id: 'bronn',
    medium: 'books',
    episode: 9,
    chapter: 63,
    title: 'The battle on the Green Fork',
  },
  {
    id: 'shae',
    medium: 'show',
    episode: 9,
    chapter: 63,
    title: 'The drinking game',
  },
  {
    id: 'shae',
    medium: 'books',
    episode: 9,
    chapter: 63,
    title: 'Taken from a knight',
  },
  {
    id: 'shae',
    medium: 'both',
    episode: 10,
    chapter: 70,
    title: 'To the capital',
  },
  {
    id: 'podrick-payne',
    medium: 'books',
    episode: 12,
    chapter: 63,
    title: 'A squire for Tyrion',
  },
  {
    id: 'addam-marbrand',
    medium: 'show',
    episode: 10,
    chapter: 63,
    title: 'No truce',
  },
  {
    id: 'addam-marbrand',
    medium: 'books',
    episode: 10,
    chapter: 70,
    title: 'Two battles do not make a war',
  },
  {
    id: 'hot-pie',
    medium: 'show',
    episode: 10,
    chapter: 75,
    title: 'Arry’s sword',
  },
  {
    id: 'lommy',
    medium: 'show',
    episode: 10,
    chapter: 75,
    title: 'Backing Hot Pie',
  },
  {
    id: 'lysa-arryn',
    medium: 'show',
    episode: 5,
    chapter: 35,
    title: 'The court of the Eyrie',
  },
  {
    id: 'lysa-arryn',
    medium: 'show',
    episode: 6,
    chapter: 41,
    title: 'Lysa’s champion',
  },
  {
    id: 'lysa-arryn',
    medium: 'books',
    episode: 6,
    chapter: 41,
    title: 'The trial at the Eyrie',
  },
  {
    id: 'lysa-arryn',
    medium: 'show',
    episode: 8,
    chapter: 56,
    title: 'The Vale stays out',
  },
  {
    id: 'robin-arryn',
    medium: 'show',
    episode: 5,
    chapter: 35,
    title: 'The little lord',
  },
  {
    id: 'robin-arryn',
    medium: 'show',
    episode: 6,
    chapter: 41,
    title: 'No flight',
  },
  {
    id: 'robin-arryn',
    medium: 'books',
    episode: 6,
    chapter: 41,
    title: 'The prisoner he wants to see fly',
  },
  {
    id: 'hugh-of-the-vale',
    medium: 'both',
    episode: 4,
    chapter: 30,
    title: 'The Hand’s tourney',
  },
  {
    id: 'hugh-of-the-vale',
    medium: 'show',
    episode: 5,
    chapter: 31,
    title: 'Ser Barristan’s vigil',
  },
  {
    id: 'hugh-of-the-vale',
    medium: 'books',
    episode: 5,
    chapter: 31,
    title: 'Armour for his mother',
  },
  {
    id: 'robar-royce',
    medium: 'books',
    episode: 4,
    chapter: 30,
    title: 'Beaten by the Knight of Flowers',
  },
  {
    id: 'yohn-royce',
    medium: 'books',
    episode: 38,
    chapter: 30,
    title: 'The lord of Runestone at the tourney',
  },
  {
    id: 'nestor-royce',
    medium: 'books',
    episode: 5,
    chapter: 35,
    title: 'The Gates of the Moon',
  },
  {
    id: 'mya-stone',
    medium: 'books',
    episode: 5,
    chapter: 35,
    title: 'The climb by night',
  },
  {
    id: 'vardis-egen',
    medium: 'books',
    episode: 6,
    chapter: 35,
    title: 'The captain of the guard',
  },
  {
    id: 'vardis-egen',
    medium: 'show',
    episode: 6,
    chapter: 41,
    title: 'The Moon Door',
  },
  {
    id: 'vardis-egen',
    medium: 'books',
    episode: 6,
    chapter: 41,
    title: 'Jon Arryn’s greatsword',
  },
  {
    id: 'mord',
    medium: 'show',
    episode: 6,
    chapter: 39,
    title: 'A Lannister always pays his debts',
  },
  { id: 'mord', medium: 'books', episode: 6, chapter: 39, title: 'The gaoler' },
  {
    id: 'lyn-corbray',
    medium: 'books',
    episode: 6,
    chapter: 39,
    title: 'One of Lysa’s suitors',
  },
  {
    id: 'lyn-corbray',
    medium: 'books',
    episode: 6,
    chapter: 43,
    title: 'Down the mountain',
  },
  {
    id: 'anya-waynwood',
    medium: 'books',
    episode: 38,
    chapter: 39,
    title: 'Among the lords of the Vale',
  },
  {
    id: 'donnel-waynwood',
    medium: 'books',
    episode: 35,
    chapter: 35,
    title: 'The sortie',
  },
  {
    id: 'marillion',
    medium: 'both',
    episode: 4,
    chapter: 29,
    title: 'The singer at the inn',
  },
  {
    id: 'marillion',
    medium: 'show',
    episode: 5,
    chapter: 35,
    title: 'The song of the capture',
  },
  {
    id: 'marillion',
    medium: 'books',
    episode: 5,
    chapter: 35,
    title: 'Verses on the road',
  },
  {
    id: 'marillion',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'His tongue or his fingers',
  },
  {
    id: 'stiv',
    medium: 'both',
    episode: 6,
    chapter: 38,
    title: 'Ambush in the wolfswood',
  },
  {
    id: 'wallen',
    medium: 'both',
    episode: 6,
    chapter: 38,
    title: 'The outlaws and the boy',
  },
  {
    id: 'shagga',
    medium: 'books',
    episode: 8,
    chapter: 43,
    title: 'Our mountain, our goat',
  },
  {
    id: 'shagga',
    medium: 'show',
    episode: 8,
    chapter: 57,
    title: 'The alliance with the Lannisters',
  },
  {
    id: 'shagga',
    medium: 'books',
    episode: 8,
    chapter: 57,
    title: 'The broken sword',
  },
  { id: 'shagga', medium: 'show', episode: 9, chapter: 63, title: 'Two axes' },
  {
    id: 'shagga',
    medium: 'books',
    episode: 10,
    chapter: 70,
    title: 'The clansmen in battle',
  },
  {
    id: 'timett',
    medium: 'show',
    episode: 8,
    chapter: 57,
    title: 'The Burned Men',
  },
  {
    id: 'timett',
    medium: 'books',
    episode: 8,
    chapter: 57,
    title: 'The Red Hand',
  },
  {
    id: 'timett',
    medium: 'books',
    episode: 10,
    chapter: 70,
    title: 'At the Green Fork',
  },
  {
    id: 'chella',
    medium: 'show',
    episode: 8,
    chapter: 57,
    title: 'The Black Ears',
  },
  {
    id: 'chella',
    medium: 'books',
    episode: 8,
    chapter: 57,
    title: 'The necklace of ears',
  },
  {
    id: 'chella',
    medium: 'books',
    episode: 10,
    chapter: 70,
    title: 'Four ears',
  },
  // End of #1362.
]

/** Each character's first story, at its own gate in each medium it is told in. */
const FIRST: { chapter: number; episode: number; id: string }[] = [
  { id: 'daenerys-targaryen', episode: 1, chapter: 4 },
  { id: 'viserys-targaryen', episode: 1, chapter: 4 },
  { id: 'drogo', episode: 1, chapter: 4 },
  { id: 'jorah-mormont', episode: 1, chapter: 4 },
  { id: 'illyrio-mopatis', episode: 1, chapter: 4 },
  { id: 'irri', episode: 2, chapter: 12 },
  { id: 'doreah', episode: 2, chapter: 12 },
  { id: 'jhiqui', episode: 2, chapter: 12 },
  { id: 'rakharo', episode: 3, chapter: 24 },
  { id: 'jhogo', episode: 3, chapter: 24 },
  { id: 'cohollo', episode: 4, chapter: 37 },
  { id: 'qotho', episode: 6, chapter: 12 },
  { id: 'mirri-maz-duur', episode: 8, chapter: 62 },
  { id: 'haggo', episode: 8, chapter: 62 },
  { id: 'quaro', episode: 8, chapter: 62 },
  { id: 'mago', episode: 8, chapter: 62 },
  { id: 'eroeh', episode: 10, chapter: 69 },
  // The show names him only in season 2, so his stories are the books'.
  { id: 'aggo', episode: 11, chapter: 62 },
  // King’s Landing, the riverlands and the Vale (#1362).
  { id: 'tyrion-lannister', episode: 1, chapter: 5 },
  { id: 'jaime-lannister', episode: 1, chapter: 5 },
  { id: 'tywin-lannister', episode: 7, chapter: 57 },
  { id: 'kevan-lannister', episode: 8, chapter: 57 },
  { id: 'cersei-lannister', episode: 1, chapter: 5 },
  { id: 'joffrey-baratheon', episode: 1, chapter: 5 },
  { id: 'robert-baratheon', episode: 1, chapter: 5 },
  { id: 'renly-baratheon', episode: 3, chapter: 16 },
  { id: 'myrcella-baratheon', episode: 1, chapter: 6 },
  { id: 'tommen-baratheon', episode: 1, chapter: 6 },
  { id: 'lancel-lannister', episode: 3, chapter: 31 },
  { id: 'barristan-selmy', episode: 3, chapter: 16 },
  { id: 'syrio-forel', episode: 3, chapter: 23 },
  { id: 'petyr-baelish', episode: 3, chapter: 19 },
  { id: 'varys', episode: 3, chapter: 19 },
  { id: 'pycelle', episode: 3, chapter: 21 },
  { id: 'sandor-clegane', episode: 4, chapter: 5 },
  { id: 'janos-slynt', episode: 4, chapter: 28 },
  { id: 'gendry', episode: 4, chapter: 28 },
  { id: 'ilyn-payne', episode: 2, chapter: 16 },
  { id: 'mycah', episode: 2, chapter: 16 },
  { id: 'ros', episode: 4, chapter: 25 },
  { id: 'mhaegen', episode: 5, chapter: 36 },
  { id: 'tobho-mott', episode: 4, chapter: 28 },
  { id: 'meryn-trant', episode: 8, chapter: 30 },
  { id: 'boros-blount', episode: 19, chapter: 34 },
  { id: 'mandon-moore', episode: 19, chapter: 52 },
  { id: 'arys-oakheart', episode: 8, chapter: 58 },
  { id: 'dontos-hollard', episode: 11, chapter: 58 },
  { id: 'balon-swann', episode: 4, chapter: 30 },
  { id: 'loras-tyrell', episode: 5, chapter: 30 },
  { id: 'masha-heddle', episode: 4, chapter: 29 },
  { id: 'jason-mallister', episode: 4, chapter: 29 },
  { id: 'willis-wode', episode: 4, chapter: 29 },
  { id: 'gregor-clegane', episode: 4, chapter: 30 },
  { id: 'beric-dondarrion', episode: 6, chapter: 28 },
  { id: 'thoros-of-myr', episode: 22, chapter: 30 },
  { id: 'walder-frey', episode: 9, chapter: 60 },
  { id: 'stevron-frey', episode: 9, chapter: 60 },
  { id: 'edmure-tully', episode: 23, chapter: 72 },
  { id: 'hoster-tully', episode: 23, chapter: 72 },
  { id: 'brynden-tully', episode: 23, chapter: 35 },
  { id: 'bronn', episode: 4, chapter: 32 },
  { id: 'shae', episode: 9, chapter: 63 },
  { id: 'podrick-payne', episode: 12, chapter: 63 },
  { id: 'addam-marbrand', episode: 10, chapter: 63 },
  { id: 'hot-pie', episode: 10, chapter: 75 },
  { id: 'lommy', episode: 10, chapter: 75 },
  { id: 'lysa-arryn', episode: 5, chapter: 35 },
  { id: 'robin-arryn', episode: 5, chapter: 35 },
  { id: 'hugh-of-the-vale', episode: 4, chapter: 30 },
  { id: 'robar-royce', episode: 4, chapter: 30 },
  { id: 'yohn-royce', episode: 38, chapter: 30 },
  { id: 'nestor-royce', episode: 5, chapter: 35 },
  { id: 'mya-stone', episode: 5, chapter: 35 },
  { id: 'vardis-egen', episode: 6, chapter: 35 },
  { id: 'mord', episode: 6, chapter: 39 },
  { id: 'lyn-corbray', episode: 6, chapter: 39 },
  { id: 'anya-waynwood', episode: 38, chapter: 39 },
  { id: 'donnel-waynwood', episode: 35, chapter: 35 },
  { id: 'marillion', episode: 4, chapter: 29 },
  { id: 'stiv', episode: 6, chapter: 38 },
  { id: 'wallen', episode: 6, chapter: 38 },
  { id: 'shagga', episode: 8, chapter: 43 },
  { id: 'timett', episode: 8, chapter: 57 },
  { id: 'chella', episode: 8, chapter: 57 },
  // End of #1362.
]

/** The stage's last episode and last site chapter (#1360). */
const LAST_EPISODE = 10
const LAST_CHAPTER = 73

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

function character(id: string): Entity {
  const owner = archive.getCharacter(id)
  if (owner === undefined) {
    throw new Error(`Missing Essos fixture ${id}`)
  }
  return owner
}

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

/** The data's stories, in the table's shape. */
const FILED: Row[] = Object.entries(season1Chronicles).flatMap(
  ([id, stories]) =>
    stories.map((story) => ({
      // Every story pins its chapter; a missing one fails the comparison.
      chapter: story.chapter ?? 0,
      episode: story.episode,
      id,
      medium: mediumOf(story),
      title: story.value.title.en,
    })),
)

/** The filed stories by owner. */
const BY_OWNER = new Map<string, Dated<Story>[]>(
  Object.entries(season1Chronicles),
)

/** A row's title in one locale, read from the data. */
function titleIn({ id, title }: Row, locale: Locale): string {
  const found = BY_OWNER.get(id)?.find(({ value }) => value.title.en === title)
  if (found === undefined) {
    throw new Error(`No story ${title} for ${id}`)
  }
  return found.value.title[locale]
}

/** The titles of one owner's rows in one locale, sorted. */
function titlesOf(rows: Row[], locale: Locale): string[] {
  return rows.map((row) => titleIn(row, locale)).toSorted(byString())
}

describe('the Essos chronicles of the first stage', () => {
  it('files exactly the stories the table lists', () => {
    const filed = FILED.map((row) => lineOf(row)).toSorted(byString())
    const listed = STORIES.map((row) => lineOf(row)).toSorted(byString())

    expect(filed).toStrictEqual(listed)
  })

  it('files every story on the character the archive holds', () => {
    for (const [id, stories] of Object.entries(season1Chronicles)) {
      const filed = archive.dossierOf(character(id))?.chronicle

      expect(filed, id).toStrictEqual(stories)
    }
  })

  it.each(FIRST)(
    'opens $id’s chronicle at episode $episode and chapter $chapter',
    ({ chapter, episode, id }) => {
      const owner = character(id)
      const first = archive.dossierOf(owner)?.chronicle?.[0]

      expect(first?.episode).toBe(episode)
      expect(first?.chapter).toBe(chapter)
      expect(owner.revealedAtEpisode).toBe(episode)
      expect(owner.revealedAtChapter).toBe(chapter)
    },
  )

  it('keeps Jaqen H’ghar, Rorge and Biter out, past the stage', () => {
    for (const id of ['jaqen-hghar', 'rorge', 'biter']) {
      expect(archive.dossierOf(character(id))?.chronicle, id).toBeUndefined()
    }
  })

  it('stays inside the stage in each medium it is told in', () => {
    const shown = STORIES.filter(({ medium }) => medium !== 'books')
    const told = STORIES.filter(({ medium }) => medium !== 'show')

    expect(Math.max(...shown.map(({ episode }) => episode))).toBe(LAST_EPISODE)
    expect(Math.max(...told.map(({ chapter }) => chapter))).toBe(LAST_CHAPTER)
  })
})

describe.each(LOCALES)('the Essos chronicles in %s', (locale) => {
  const read = (bookmark: Bookmark): Reader =>
    readerFor(archive, bookmark, locale)
  const at = (owner: Entity, bookmark: Bookmark): string[] =>
    chronicleTitles(owner, read(bookmark))

  it.each(STORIES.filter(({ medium }) => medium !== 'books'))(
    'shows $id’s $medium story “$title” at episode $episode, never before',
    (row) => {
      const owner = character(row.id)
      const title = titleIn(row, locale)

      expect(at(owner, ep(row.episode - 1))).not.toContain(title)
      expect(at(owner, ep(row.episode))).toContain(title)
    },
  )

  it.each(STORIES.filter(({ medium }) => medium !== 'show'))(
    'shows $id’s $medium story “$title” at chapter $chapter, never before',
    (row) => {
      const owner = character(row.id)
      const title = titleIn(row, locale)

      expect(at(owner, ch(row.chapter - 1))).not.toContain(title)
      expect(at(owner, ch(row.chapter))).toContain(title)
    },
  )

  it.each(STORIES.filter(({ medium }) => medium !== 'both'))(
    'keeps $id’s $medium story “$title” from the other medium',
    (row) => {
      const owner = character(row.id)
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
      const owner = character(id)

      expect(at(owner, ep(episode - 1))).toStrictEqual([])
      expect(at(owner, ch(chapter - 1))).toStrictEqual([])
    },
  )

  it.each(Object.keys(season1Chronicles))(
    'adds nothing to %s’s chronicle past the stage',
    (id) => {
      const owner = character(id)
      const owned = STORIES.filter((row) => row.id === id)
      const shown = titlesOf(
        owned.filter(({ medium }) => medium !== 'books'),
        locale,
      )
      const told = titlesOf(
        owned.filter(({ medium }) => medium !== 'show'),
        locale,
      )

      expect(at(owner, ep(LAST_EPISODE))).toStrictEqual(shown)
      expect(at(owner, ep(LAST_EPISODE + 1))).toStrictEqual(shown)
      expect(at(owner, ch(LAST_CHAPTER))).toStrictEqual(told)
      expect(at(owner, ch(LAST_CHAPTER + 1))).toStrictEqual(told)
    },
  )
})
