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
 * Every story of the first stage (#1360, #1361), written down independently
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
  // Winterfell and the North (#1361).
  {
    id: 'eddard-stark',
    medium: 'books',
    episode: 1,
    chapter: 2,
    title: 'The man who passes the sentence',
  },
  {
    id: 'eddard-stark',
    medium: 'show',
    episode: 1,
    chapter: 5,
    title: 'The king at Winterfell',
  },
  {
    id: 'eddard-stark',
    medium: 'books',
    episode: 1,
    chapter: 7,
    title: 'The offer in the crypts',
  },
  {
    id: 'eddard-stark',
    medium: 'both',
    episode: 2,
    chapter: 17,
    title: 'Sansa’s wolf',
  },
  {
    id: 'eddard-stark',
    medium: 'both',
    episode: 3,
    chapter: 21,
    title: 'The small council',
  },
  {
    id: 'eddard-stark',
    medium: 'both',
    episode: 4,
    chapter: 30,
    title: 'The armorer’s apprentice',
  },
  {
    id: 'eddard-stark',
    medium: 'both',
    episode: 5,
    chapter: 36,
    title: 'The ambush in the street',
  },
  {
    id: 'eddard-stark',
    medium: 'both',
    episode: 6,
    chapter: 46,
    title: 'The book of lineages',
  },
  {
    id: 'eddard-stark',
    medium: 'both',
    episode: 7,
    chapter: 50,
    title: 'The throne and the dagger',
  },
  {
    id: 'eddard-stark',
    medium: 'show',
    episode: 8,
    chapter: 59,
    title: 'In the cells',
  },
  {
    id: 'eddard-stark',
    medium: 'books',
    episode: 8,
    chapter: 59,
    title: 'Varys’s offer',
  },
  {
    id: 'eddard-stark',
    medium: 'both',
    episode: 9,
    chapter: 66,
    title: 'Before the Great Sept',
  },
  {
    id: 'sansa-stark',
    medium: 'both',
    episode: 1,
    chapter: 5,
    title: 'Promised to the prince',
  },
  {
    id: 'sansa-stark',
    medium: 'both',
    episode: 2,
    chapter: 17,
    title: 'I don’t remember',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 4,
    chapter: 30,
    title: 'The Hand’s tourney',
  },
  {
    id: 'sansa-stark',
    medium: 'books',
    episode: 5,
    chapter: 30,
    title: 'The ride back with the Hound',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 6,
    chapter: 46,
    title: 'Joffrey’s necklace',
  },
  {
    id: 'sansa-stark',
    medium: 'books',
    episode: 8,
    chapter: 52,
    title: 'To the queen',
  },
  {
    id: 'sansa-stark',
    medium: 'both',
    episode: 8,
    chapter: 58,
    title: 'The plea',
  },
  {
    id: 'sansa-stark',
    medium: 'both',
    episode: 9,
    chapter: 66,
    title: 'The broken promise',
  },
  {
    id: 'sansa-stark',
    medium: 'both',
    episode: 10,
    chapter: 68,
    title: 'The heads on the walls',
  },
  {
    id: 'arya-stark',
    medium: 'both',
    episode: 1,
    chapter: 5,
    title: 'The younger daughter',
  },
  {
    id: 'arya-stark',
    medium: 'books',
    episode: 1,
    chapter: 8,
    title: 'Crooked stitches',
  },
  {
    id: 'arya-stark',
    medium: 'both',
    episode: 2,
    chapter: 17,
    title: 'The butcher’s boy',
  },
  {
    id: 'arya-stark',
    medium: 'both',
    episode: 3,
    chapter: 23,
    title: 'The dancing master',
  },
  {
    id: 'arya-stark',
    medium: 'show',
    episode: 4,
    chapter: 28,
    title: 'That’s not me',
  },
  {
    id: 'arya-stark',
    medium: 'both',
    episode: 5,
    chapter: 33,
    title: 'Under the castle',
  },
  {
    id: 'arya-stark',
    medium: 'both',
    episode: 8,
    chapter: 51,
    title: 'The wooden sword',
  },
  {
    id: 'arya-stark',
    medium: 'both',
    episode: 9,
    chapter: 66,
    title: 'On Baelor’s statue',
  },
  { id: 'arya-stark', medium: 'show', episode: 10, chapter: 66, title: 'Arry' },
  {
    id: 'jory-cassel',
    medium: 'both',
    episode: 1,
    chapter: 2,
    title: 'The captain of the guard',
  },
  {
    id: 'jory-cassel',
    medium: 'books',
    episode: 2,
    chapter: 17,
    title: 'The direwolf’s pelt',
  },
  {
    id: 'jory-cassel',
    medium: 'show',
    episode: 4,
    chapter: 30,
    title: 'Memories of Pyke',
  },
  {
    id: 'jory-cassel',
    medium: 'both',
    episode: 5,
    chapter: 36,
    title: 'A lesson for Lord Stark',
  },
  {
    id: 'mordane',
    medium: 'both',
    episode: 1,
    chapter: 8,
    title: 'The needlework lesson',
  },
  {
    id: 'mordane',
    medium: 'books',
    episode: 4,
    chapter: 30,
    title: 'The tourney and the feast',
  },
  {
    id: 'mordane',
    medium: 'show',
    episode: 8,
    chapter: 52,
    title: 'Run to your room',
  },
  {
    id: 'mordane',
    medium: 'both',
    episode: 10,
    chapter: 68,
    title: 'Beside her lord',
  },
  {
    id: 'jeyne-poole',
    medium: 'books',
    episode: 1,
    chapter: 8,
    title: 'Sansa’s friend',
  },
  {
    id: 'jeyne-poole',
    medium: 'books',
    episode: 4,
    chapter: 30,
    title: 'The tourney',
  },
  {
    id: 'jeyne-poole',
    medium: 'books',
    episode: 8,
    chapter: 52,
    title: 'Taken away',
  },
  {
    id: 'vayon-poole',
    medium: 'books',
    episode: 8,
    chapter: 17,
    title: 'The steward',
  },
  {
    id: 'vayon-poole',
    medium: 'both',
    episode: 8,
    chapter: 52,
    title: 'The Hand’s household',
  },
  {
    id: 'tomard',
    medium: 'show',
    episode: 7,
    chapter: 23,
    title: 'The letter for Stannis',
  },
  { id: 'tomard', medium: 'books', episode: 7, chapter: 23, title: 'Fat Tom' },
  {
    id: 'tomard',
    medium: 'books',
    episode: 7,
    chapter: 50,
    title: 'A spear in the back',
  },
  {
    id: 'harwin',
    medium: 'books',
    episode: 1,
    chapter: 2,
    title: 'They cannot be kept',
  },
  {
    id: 'harwin',
    medium: 'books',
    episode: 6,
    chapter: 45,
    title: 'With Lord Beric',
  },
  {
    id: 'alyn',
    medium: 'books',
    episode: 1,
    chapter: 13,
    title: 'The king wants to ride',
  },
  {
    id: 'alyn',
    medium: 'books',
    episode: 5,
    chapter: 31,
    title: 'The Hand’s tourney',
  },
  {
    id: 'alyn',
    medium: 'books',
    episode: 6,
    chapter: 46,
    title: 'Twenty men for Lord Beric',
  },
  {
    id: 'hullen',
    medium: 'books',
    episode: 1,
    chapter: 2,
    title: 'The master of horse',
  },
  {
    id: 'hullen',
    medium: 'books',
    episode: 8,
    chapter: 51,
    title: 'In the stables',
  },
  {
    id: 'lady-direwolf',
    medium: 'show',
    episode: 1,
    chapter: 16,
    title: 'The gentlest pup',
  },
  {
    id: 'lady-direwolf',
    medium: 'books',
    episode: 1,
    chapter: 16,
    title: 'Left behind',
  },
  {
    id: 'lady-direwolf',
    medium: 'both',
    episode: 2,
    chapter: 17,
    title: 'In another’s place',
  },
  {
    id: 'nymeria',
    medium: 'books',
    episode: 2,
    chapter: 8,
    title: 'Outside the lesson',
  },
  { id: 'nymeria', medium: 'show', episode: 2, chapter: 8, title: 'The bite' },
  {
    id: 'nymeria',
    medium: 'books',
    episode: 2,
    chapter: 17,
    title: 'Driven off with stones',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 1,
    chapter: 2,
    title: 'The broken tower',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 1,
    chapter: 2,
    title: 'A lord’s justice',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 1,
    chapter: 9,
    title: 'In the broken tower',
  },
  {
    id: 'bran-stark',
    medium: 'both',
    episode: 2,
    chapter: 15,
    title: 'The man with the dagger',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 2,
    chapter: 18,
    title: 'The crow',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 3,
    chapter: 18,
    title: 'He will not walk again',
  },
  {
    id: 'bran-stark',
    medium: 'both',
    episode: 4,
    chapter: 25,
    title: 'Tyrion’s saddle',
  },
  {
    id: 'bran-stark',
    medium: 'both',
    episode: 6,
    chapter: 38,
    title: 'Outlaws in the woods',
  },
  {
    id: 'bran-stark',
    medium: 'both',
    episode: 8,
    chapter: 54,
    title: 'His brother goes to war',
  },
  {
    id: 'bran-stark',
    medium: 'show',
    episode: 10,
    chapter: 67,
    title: 'The dream of the crypts',
  },
  {
    id: 'bran-stark',
    medium: 'books',
    episode: 10,
    chapter: 67,
    title: 'His father in the crypts',
  },
  {
    id: 'rickon-stark',
    medium: 'both',
    episode: 1,
    chapter: 5,
    title: 'The youngest',
  },
  {
    id: 'rickon-stark',
    medium: 'both',
    episode: 8,
    chapter: 54,
    title: 'No one comes back',
  },
  {
    id: 'rickon-stark',
    medium: 'show',
    episode: 10,
    chapter: 67,
    title: 'The same dream',
  },
  {
    id: 'rickon-stark',
    medium: 'books',
    episode: 10,
    chapter: 67,
    title: 'Father is coming home',
  },
  {
    id: 'theon-greyjoy',
    medium: 'both',
    episode: 1,
    chapter: 2,
    title: 'The ward',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 4,
    chapter: 25,
    title: 'The Starks’ lackey',
  },
  {
    id: 'theon-greyjoy',
    medium: 'both',
    episode: 6,
    chapter: 38,
    title: 'The arrow',
  },
  {
    id: 'theon-greyjoy',
    medium: 'show',
    episode: 10,
    chapter: 72,
    title: 'His sword for the king',
  },
  {
    id: 'luwin',
    medium: 'both',
    episode: 1,
    chapter: 7,
    title: 'The secret letter',
  },
  {
    id: 'luwin',
    medium: 'both',
    episode: 2,
    chapter: 15,
    title: 'The castle’s accounts',
  },
  {
    id: 'luwin',
    medium: 'show',
    episode: 10,
    chapter: 67,
    title: 'The letter from the capital',
  },
  {
    id: 'luwin',
    medium: 'books',
    episode: 10,
    chapter: 67,
    title: 'Dreams are only dreams',
  },
  {
    id: 'old-nan',
    medium: 'show',
    episode: 3,
    chapter: 15,
    title: 'The Long Night',
  },
  {
    id: 'old-nan',
    medium: 'books',
    episode: 3,
    chapter: 15,
    title: 'Washing away the blood',
  },
  {
    id: 'hodor',
    medium: 'both',
    episode: 4,
    chapter: 25,
    title: 'Carrying Bran',
  },
  {
    id: 'osha',
    medium: 'both',
    episode: 6,
    chapter: 38,
    title: 'The surrender',
  },
  {
    id: 'osha',
    medium: 'show',
    episode: 7,
    chapter: 38,
    title: 'What sleeps under the ice',
  },
  {
    id: 'osha',
    medium: 'both',
    episode: 8,
    chapter: 54,
    title: 'The wrong way',
  },
  {
    id: 'osha',
    medium: 'show',
    episode: 10,
    chapter: 67,
    title: 'Into the crypts',
  },
  {
    id: 'osha',
    medium: 'books',
    episode: 10,
    chapter: 67,
    title: 'Some dreams are not dreams',
  },
  {
    id: 'mikken',
    medium: 'both',
    episode: 2,
    chapter: 54,
    title: 'A sword for Arya',
  },
  {
    id: 'hallis-mollen',
    medium: 'books',
    episode: 2,
    chapter: 15,
    title: 'The new captain',
  },
  {
    id: 'summer-direwolf',
    medium: 'both',
    episode: 4,
    chapter: 18,
    title: 'Bran’s wolf',
  },
  {
    id: 'summer-direwolf',
    medium: 'books',
    episode: 6,
    chapter: 38,
    title: 'The wolves in the woods',
  },
  {
    id: 'summer-direwolf',
    medium: 'books',
    episode: 10,
    chapter: 67,
    title: 'The fight in the crypts',
  },
  {
    id: 'shaggydog',
    medium: 'books',
    episode: 10,
    chapter: 25,
    title: 'Rickon’s wolf',
  },
  {
    id: 'shaggydog',
    medium: 'show',
    episode: 10,
    chapter: 67,
    title: 'Out of the empty tomb',
  },
  {
    id: 'shaggydog',
    medium: 'books',
    episode: 10,
    chapter: 67,
    title: 'Biting the maester',
  },
  {
    id: 'ghost-direwolf',
    medium: 'books',
    episode: 4,
    chapter: 6,
    title: 'The sixth pup',
  },
  {
    id: 'ghost-direwolf',
    medium: 'both',
    episode: 4,
    chapter: 27,
    title: 'A visit to Rast',
  },
  {
    id: 'ghost-direwolf',
    medium: 'both',
    episode: 8,
    chapter: 53,
    title: 'The dead man walks',
  },
  {
    id: 'benjen-stark',
    medium: 'both',
    episode: 1,
    chapter: 6,
    title: 'Jon’s request',
  },
  {
    id: 'benjen-stark',
    medium: 'both',
    episode: 2,
    chapter: 14,
    title: 'Riding north',
  },
  {
    id: 'benjen-stark',
    medium: 'both',
    episode: 3,
    chapter: 20,
    title: 'Beyond the Wall',
  },
  {
    id: 'benjen-stark',
    medium: 'both',
    episode: 7,
    chapter: 42,
    title: 'Missing',
  },
  {
    id: 'catelyn-stark',
    medium: 'show',
    episode: 1,
    chapter: 3,
    title: 'Lysa’s letter',
  },
  {
    id: 'catelyn-stark',
    medium: 'books',
    episode: 1,
    chapter: 3,
    title: 'In the godswood',
  },
  {
    id: 'catelyn-stark',
    medium: 'books',
    episode: 1,
    chapter: 7,
    title: 'Her sister’s letter',
  },
  {
    id: 'catelyn-stark',
    medium: 'both',
    episode: 2,
    chapter: 15,
    title: 'The man sent to kill Bran',
  },
  {
    id: 'catelyn-stark',
    medium: 'show',
    episode: 3,
    chapter: 19,
    title: 'Littlefinger’s brothel',
  },
  {
    id: 'catelyn-stark',
    medium: 'books',
    episode: 3,
    chapter: 21,
    title: 'By sea to the capital',
  },
  {
    id: 'catelyn-stark',
    medium: 'both',
    episode: 4,
    chapter: 29,
    title: 'The inn at the crossroads',
  },
  {
    id: 'catelyn-stark',
    medium: 'both',
    episode: 5,
    chapter: 35,
    title: 'Toward the Eyrie',
  },
  {
    id: 'catelyn-stark',
    medium: 'books',
    episode: 6,
    chapter: 41,
    title: 'The trial at the Eyrie',
  },
  {
    id: 'catelyn-stark',
    medium: 'show',
    episode: 8,
    chapter: 56,
    title: 'Joining Robb’s host',
  },
  {
    id: 'catelyn-stark',
    medium: 'books',
    episode: 8,
    chapter: 56,
    title: 'At Moat Cailin',
  },
  {
    id: 'catelyn-stark',
    medium: 'both',
    episode: 9,
    chapter: 64,
    title: 'The crossing and the captive',
  },
  {
    id: 'catelyn-stark',
    medium: 'show',
    episode: 10,
    chapter: 72,
    title: 'Grief in the camp',
  },
  {
    id: 'catelyn-stark',
    medium: 'books',
    episode: 10,
    chapter: 72,
    title: 'Back to her father’s house',
  },
  {
    id: 'robb-stark',
    medium: 'both',
    episode: 1,
    chapter: 2,
    title: 'The direwolf pups',
  },
  {
    id: 'robb-stark',
    medium: 'both',
    episode: 2,
    chapter: 15,
    title: 'Running the castle',
  },
  {
    id: 'robb-stark',
    medium: 'show',
    episode: 3,
    chapter: 25,
    title: 'Never to walk again',
  },
  {
    id: 'robb-stark',
    medium: 'both',
    episode: 4,
    chapter: 25,
    title: 'Tyrion’s saddle',
  },
  {
    id: 'robb-stark',
    medium: 'both',
    episode: 6,
    chapter: 38,
    title: 'Outlaws in the wolfswood',
  },
  {
    id: 'robb-stark',
    medium: 'both',
    episode: 8,
    chapter: 54,
    title: 'Calling the banners',
  },
  {
    id: 'robb-stark',
    medium: 'books',
    episode: 8,
    chapter: 56,
    title: 'Two roads south',
  },
  {
    id: 'robb-stark',
    medium: 'both',
    episode: 9,
    chapter: 64,
    title: 'Jaime taken',
  },
  {
    id: 'robb-stark',
    medium: 'both',
    episode: 10,
    chapter: 72,
    title: 'The King in the North',
  },
  {
    id: 'rodrik-cassel',
    medium: 'show',
    episode: 1,
    chapter: 8,
    title: 'The deserter',
  },
  {
    id: 'rodrik-cassel',
    medium: 'books',
    episode: 1,
    chapter: 8,
    title: 'No live steel',
  },
  {
    id: 'rodrik-cassel',
    medium: 'both',
    episode: 2,
    chapter: 15,
    title: 'Escort for the lady',
  },
  {
    id: 'rodrik-cassel',
    medium: 'both',
    episode: 4,
    chapter: 29,
    title: 'The singer at the inn',
  },
  {
    id: 'rodrik-cassel',
    medium: 'books',
    episode: 8,
    chapter: 56,
    title: 'Castellan of Winterfell',
  },
  {
    id: 'rodrik-cassel',
    medium: 'show',
    episode: 10,
    chapter: 72,
    title: 'With Robb’s host',
  },
  {
    id: 'grey-wind',
    medium: 'books',
    episode: 8,
    chapter: 11,
    title: 'Robb’s pup',
  },
  {
    id: 'grey-wind',
    medium: 'both',
    episode: 8,
    chapter: 54,
    title: 'Two fingers',
  },
  {
    id: 'grey-wind',
    medium: 'show',
    episode: 10,
    chapter: 72,
    title: 'A dozen men',
  },
  {
    id: 'grey-wind',
    medium: 'books',
    episode: 10,
    chapter: 72,
    title: 'The wolf in the Whispering Wood',
  },
  {
    id: 'greatjon-umber',
    medium: 'both',
    episode: 8,
    chapter: 54,
    title: 'Steel at Robb’s table',
  },
  {
    id: 'greatjon-umber',
    medium: 'books',
    episode: 8,
    chapter: 56,
    title: 'Passed over for the foot',
  },
  {
    id: 'greatjon-umber',
    medium: 'show',
    episode: 9,
    chapter: 60,
    title: 'A warning about the Freys',
  },
  {
    id: 'greatjon-umber',
    medium: 'both',
    episode: 10,
    chapter: 72,
    title: 'Proclaiming the king',
  },
  {
    id: 'smalljon-umber',
    medium: 'books',
    episode: 53,
    chapter: 64,
    title: 'In Robb’s guard',
  },
  {
    id: 'rickard-karstark',
    medium: 'books',
    episode: 17,
    chapter: 54,
    title: 'The last to arrive',
  },
  {
    id: 'rickard-karstark',
    medium: 'books',
    episode: 17,
    chapter: 72,
    title: 'Two sons lost',
  },
  {
    id: 'roose-bolton',
    medium: 'books',
    episode: 14,
    chapter: 54,
    title: 'The silent lord',
  },
  {
    id: 'roose-bolton',
    medium: 'books',
    episode: 14,
    chapter: 63,
    title: 'Command of the foot',
  },
  {
    id: 'galbart-glover',
    medium: 'both',
    episode: 8,
    chapter: 56,
    title: 'At Robb’s war council',
  },
  {
    id: 'galbart-glover',
    medium: 'both',
    episode: 10,
    chapter: 72,
    title: 'Among the king’s lords',
  },
  {
    id: 'robett-glover',
    medium: 'books',
    episode: 57,
    chapter: 54,
    title: 'Asking for a command',
  },
  {
    id: 'maege-mormont',
    medium: 'both',
    episode: 8,
    chapter: 54,
    title: 'The lady of Bear Island',
  },
  {
    id: 'maege-mormont',
    medium: 'both',
    episode: 10,
    chapter: 72,
    title: 'Hailing the king',
  },
  {
    id: 'dacey-mormont',
    medium: 'books',
    episode: 9,
    chapter: 64,
    title: 'In Robb’s guard',
  },
  {
    id: 'wendel-manderly',
    medium: 'books',
    episode: 29,
    chapter: 56,
    title: 'From White Harbor',
  },
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
  { id: 'qotho', episode: 6, chapter: 62 },
  { id: 'mirri-maz-duur', episode: 8, chapter: 62 },
  { id: 'haggo', episode: 8, chapter: 62 },
  { id: 'quaro', episode: 8, chapter: 62 },
  { id: 'mago', episode: 8, chapter: 62 },
  { id: 'eroeh', episode: 10, chapter: 69 },
  // The show names him only in season 2, so his stories are the books'.
  { id: 'aggo', episode: 11, chapter: 62 },
  // Winterfell and the North (#1361).
  { id: 'eddard-stark', episode: 1, chapter: 2 },
  { id: 'sansa-stark', episode: 1, chapter: 5 },
  { id: 'arya-stark', episode: 1, chapter: 5 },
  { id: 'jory-cassel', episode: 1, chapter: 2 },
  { id: 'mordane', episode: 1, chapter: 8 },
  { id: 'jeyne-poole', episode: 1, chapter: 8 },
  { id: 'vayon-poole', episode: 8, chapter: 17 },
  { id: 'tomard', episode: 7, chapter: 23 },
  { id: 'harwin', episode: 1, chapter: 2 },
  { id: 'alyn', episode: 1, chapter: 13 },
  { id: 'hullen', episode: 1, chapter: 2 },
  { id: 'lady-direwolf', episode: 1, chapter: 16 },
  { id: 'nymeria', episode: 2, chapter: 8 },
  { id: 'bran-stark', episode: 1, chapter: 2 },
  { id: 'rickon-stark', episode: 1, chapter: 5 },
  { id: 'theon-greyjoy', episode: 1, chapter: 2 },
  { id: 'luwin', episode: 1, chapter: 7 },
  { id: 'old-nan', episode: 3, chapter: 15 },
  { id: 'hodor', episode: 4, chapter: 25 },
  { id: 'osha', episode: 6, chapter: 38 },
  { id: 'mikken', episode: 2, chapter: 54 },
  { id: 'hallis-mollen', episode: 2, chapter: 15 },
  { id: 'summer-direwolf', episode: 4, chapter: 18 },
  { id: 'shaggydog', episode: 10, chapter: 25 },
  { id: 'ghost-direwolf', episode: 4, chapter: 6 },
  { id: 'benjen-stark', episode: 1, chapter: 6 },
  { id: 'catelyn-stark', episode: 1, chapter: 3 },
  { id: 'robb-stark', episode: 1, chapter: 2 },
  { id: 'rodrik-cassel', episode: 1, chapter: 8 },
  { id: 'grey-wind', episode: 8, chapter: 11 },
  { id: 'greatjon-umber', episode: 8, chapter: 54 },
  { id: 'smalljon-umber', episode: 53, chapter: 64 },
  { id: 'rickard-karstark', episode: 17, chapter: 54 },
  { id: 'roose-bolton', episode: 14, chapter: 54 },
  { id: 'galbart-glover', episode: 8, chapter: 56 },
  { id: 'robett-glover', episode: 57, chapter: 54 },
  { id: 'maege-mormont', episode: 8, chapter: 54 },
  { id: 'dacey-mormont', episode: 9, chapter: 64 },
  { id: 'wendel-manderly', episode: 29, chapter: 56 },
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

describe('the chronicles of the first stage', () => {
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

describe.each(LOCALES)('the first stage’s chronicles in %s', (locale) => {
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
