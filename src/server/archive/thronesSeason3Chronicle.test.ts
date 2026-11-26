import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { season1Chronicles } from '~/data/series/game-of-thrones/records/season-1.chronicle'
import { season2Chronicles } from '~/data/series/game-of-thrones/records/season-2.chronicle'
import { season3Chronicles } from '~/data/series/game-of-thrones/records/season-3.chronicle'
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

interface Stage {
  chapter: number
  episode: number
}

/** The second stage's last episode and last site chapter (#1455). */
const STAGE_2: Stage = { episode: 20, chapter: 143 }

/** The third stage's last episode and last site chapter (#1626). */
const STAGE_3: Stage = { episode: 30, chapter: 196 }

/**
 * Every story of the third stage, written down independently of the data:
 * owner, medium, episode, site chapter and English title. The new cast's
 * stories are in `season-3.chronicle.ts`; a returning character's are in the
 * module that first filed them, `season-1.chronicle.ts` or
 * `season-2.chronicle.ts`. A story both media tell opens at both numbers, a
 * show story at its episode alone and a book story at its chapter alone, so
 * moving any entry, or changing its medium, fails here. Each cast group's
 * chronicle child adds its rows: Essos first (#1659).
 */
const STORIES: Row[] = [
  // Essos (#1659).
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 21,
    chapter: 167,
    title: 'Eight thousand for sale',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 23,
    chapter: 171,
    title: 'One dragon for an army',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 24,
    chapter: 171,
    title: 'A dragon is not a slave',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 25,
    chapter: 186,
    title: 'Names for free men',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 27,
    chapter: 186,
    title: 'The envoy of Yunkai',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 28,
    chapter: 186,
    title: 'The Second Sons',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 29,
    chapter: 186,
    title: 'A night outside Yunkai',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 30,
    chapter: 186,
    title: 'Mhysa',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 21,
    chapter: 152,
    title: 'Toward Slaver’s Bay',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 21,
    chapter: 167,
    title: 'Slaves or sellswords',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 24,
    chapter: 171,
    title: 'The price of the Unsullied',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 30,
    chapter: 186,
    title: 'Mother',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 21,
    chapter: 167,
    title: 'The hooded man',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 23,
    chapter: 171,
    title: 'Honor and the Trident',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 25,
    chapter: 186,
    title: 'Knighted at Pyke',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 29,
    chapter: 186,
    title: 'The back gate',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 21,
    chapter: 152,
    title: 'Three heads',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 21,
    chapter: 167,
    title: 'Why Astapor stands',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 29,
    chapter: 186,
    title: 'A Tyroshi not to trust',
  },
  {
    id: 'barristan-selmy',
    medium: 'show',
    episode: 21,
    chapter: 201,
    title: 'Come to serve her',
  },
  {
    id: 'barristan-selmy',
    medium: 'show',
    episode: 23,
    chapter: 201,
    title: 'The last dragon',
  },
  {
    id: 'barristan-selmy',
    medium: 'show',
    episode: 25,
    chapter: 201,
    title: 'Someone to believe in',
  },
  {
    id: 'irri',
    medium: 'books',
    episode: 21,
    chapter: 167,
    title: 'A night with the khaleesi',
  },
  {
    id: 'arstan-whitebeard',
    medium: 'books',
    episode: 21,
    chapter: 152,
    title: 'Rhaegar and the scroll',
  },
  {
    id: 'arstan-whitebeard',
    medium: 'books',
    episode: 21,
    chapter: 167,
    title: 'No slave army',
  },
  {
    id: 'arstan-whitebeard',
    medium: 'books',
    episode: 29,
    chapter: 186,
    title: 'Born in grief',
  },
  {
    id: 'drogon',
    medium: 'books',
    episode: 40,
    chapter: 152,
    title: 'The hunter',
  },
  {
    id: 'drogon',
    medium: 'books',
    episode: 40,
    chapter: 171,
    title: 'Dracarys on the plaza',
  },
  {
    id: 'drogon',
    medium: 'books',
    episode: 40,
    chapter: 186,
    title: 'A tokar on fire',
  },
  {
    id: 'rhaegal',
    medium: 'books',
    episode: 41,
    chapter: 152,
    title: 'Play over the sea',
  },
  {
    id: 'viserion',
    medium: 'books',
    episode: 41,
    chapter: 152,
    title: 'Above the ships',
  },
  {
    id: 'missandei',
    medium: 'show',
    episode: 23,
    chapter: 171,
    title: 'Valar morghulis',
  },
  {
    id: 'missandei',
    medium: 'show',
    episode: 28,
    chapter: 186,
    title: 'Nineteen languages',
  },
  {
    id: 'missandei',
    medium: 'show',
    episode: 30,
    chapter: 186,
    title: 'Mother in Ghiscari',
  },
  {
    id: 'missandei',
    medium: 'books',
    episode: 24,
    chapter: 171,
    title: 'Freed in High Valyrian',
  },
  {
    id: 'kraznys-mo-nakloz',
    medium: 'books',
    episode: 24,
    chapter: 171,
    title: 'The Good Master’s bargain',
  },
  {
    id: 'grey-worm',
    medium: 'show',
    episode: 25,
    chapter: 186,
    title: 'A lucky name',
  },
  {
    id: 'grey-worm',
    medium: 'show',
    episode: 29,
    chapter: 186,
    title: 'Into Yunkai',
  },
  {
    id: 'grey-worm',
    medium: 'books',
    episode: 25,
    chapter: 186,
    title: 'One name for good',
  },
  {
    id: 'grazdan-mo-eraz',
    medium: 'show',
    episode: 27,
    chapter: 186,
    title: 'The Wise Masters’ offer',
  },
  {
    id: 'grazdan-mo-eraz',
    medium: 'books',
    episode: 27,
    chapter: 186,
    title: 'A burning tokar',
  },
  {
    id: 'mero',
    medium: 'show',
    episode: 28,
    chapter: 186,
    title: 'An offer refused',
  },
  {
    id: 'mero',
    medium: 'books',
    episode: 28,
    chapter: 186,
    title: 'A wagon of wine',
  },
  {
    id: 'daario-naharis',
    medium: 'show',
    episode: 28,
    chapter: 186,
    title: 'The Braavosi coin',
  },
  {
    id: 'daario-naharis',
    medium: 'show',
    episode: 29,
    chapter: 186,
    title: 'Yunkai’s flag',
  },
  {
    id: 'daario-naharis',
    medium: 'books',
    episode: 28,
    chapter: 186,
    title: 'The heads of two captains',
  },
  {
    id: 'prendahl-na-ghezn',
    medium: 'books',
    episode: 28,
    chapter: 186,
    title: 'The Stormcrows’ answer',
  },
  // King’s Landing (#1660).
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'No claim to the Rock',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 23,
    chapter: 176,
    title: 'The crown’s debts',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'The man in the crate',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 25,
    chapter: 163,
    title: 'The key to the North',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'Joffrey’s order',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 27,
    chapter: 172,
    title: 'A wife and a mistress',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 28,
    chapter: 172,
    title: 'A dagger in the table',
  },
  {
    id: 'tyrion-lannister',
    medium: 'show',
    episode: 30,
    chapter: 197,
    title: 'Word from the Twins',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 21,
    chapter: 148,
    title: 'Heir to the Rock',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 22,
    chapter: 156,
    title: 'One last favour',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 25,
    chapter: 163,
    title: 'Master of coin',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 28,
    chapter: 172,
    title: 'A cloak for the bride',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 28,
    chapter: 176,
    title: 'Valyrian steel',
  },
  {
    id: 'tyrion-lannister',
    medium: 'books',
    episode: 31,
    chapter: 182,
    title: 'The Red Viper',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'Ships in the bay',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 22,
    chapter: 150,
    title: 'He is a monster',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'Highgarden',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 25,
    chapter: 163,
    title: 'Call me Petyr',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'Two ways out',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 28,
    chapter: 172,
    title: 'A Lannister cloak',
  },
  {
    id: 'sansa-stark',
    medium: 'show',
    episode: 30,
    chapter: 197,
    title: 'A walk in the garden',
  },
  {
    id: 'sansa-stark',
    medium: 'books',
    episode: 22,
    chapter: 150,
    title: 'Supper with the Tyrells',
  },
  {
    id: 'sansa-stark',
    medium: 'books',
    episode: 26,
    chapter: 160,
    title: 'Lannisters with flowers',
  },
  {
    id: 'sansa-stark',
    medium: 'books',
    episode: 28,
    chapter: 172,
    title: 'Wed to a Lannister',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'A mockery of the name',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 23,
    chapter: 163,
    title: 'The Hand’s table',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'Not as clever as she thinks',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 25,
    chapter: 163,
    title: 'Two marriages',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'A flower in the dirt',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 27,
    chapter: 172,
    title: 'The steps to the throne',
  },
  {
    id: 'tywin-lannister',
    medium: 'show',
    episode: 30,
    chapter: 197,
    title: 'No true king',
  },
  {
    id: 'tywin-lannister',
    medium: 'books',
    episode: 21,
    chapter: 148,
    title: 'Mummers and monkeys',
  },
  {
    id: 'tywin-lannister',
    medium: 'books',
    episode: 25,
    chapter: 163,
    title: 'A son for Winterfell',
  },
  {
    id: 'tywin-lannister',
    medium: 'books',
    episode: 28,
    chapter: 176,
    title: 'New swords',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'Supper with the Tyrells',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'Her father’s heir',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 25,
    chapter: 163,
    title: 'Married off again',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'Which of us has it worst',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 28,
    chapter: 172,
    title: 'The Rains of Castamere',
  },
  {
    id: 'cersei-lannister',
    medium: 'show',
    episode: 30,
    chapter: 206,
    title: 'Jaime’s return',
  },
  {
    id: 'cersei-lannister',
    medium: 'books',
    episode: 25,
    chapter: 163,
    title: 'Offered to Willas',
  },
  {
    id: 'cersei-lannister',
    medium: 'books',
    episode: 28,
    chapter: 172,
    title: 'The bride’s gown',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'Bread in Flea Bottom',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 22,
    chapter: 150,
    title: 'The new crossbow',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'Tales of the Great Sept',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'A gift from Littlefinger',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 27,
    chapter: 172,
    title: 'Who rules',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 28,
    chapter: 172,
    title: 'The stool',
  },
  {
    id: 'joffrey-baratheon',
    medium: 'show',
    episode: 30,
    chapter: 197,
    title: 'Robb Stark’s head',
  },
  {
    id: 'petyr-baelish',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'A place on a ship',
  },
  {
    id: 'petyr-baelish',
    medium: 'show',
    episode: 23,
    chapter: 163,
    title: 'The seat nearest the Hand',
  },
  {
    id: 'petyr-baelish',
    medium: 'show',
    episode: 25,
    chapter: 163,
    title: 'A spy in Loras’s bed',
  },
  {
    id: 'petyr-baelish',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'Chaos is a ladder',
  },
  {
    id: 'petyr-baelish',
    medium: 'books',
    episode: 23,
    chapter: 163,
    title: 'To the Eyrie',
  },
  {
    id: 'varys',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'The voice in the flames',
  },
  {
    id: 'varys',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'Serving the realm',
  },
  {
    id: 'varys',
    medium: 'show',
    episode: 30,
    chapter: 197,
    title: 'Diamonds for Shae',
  },
  {
    id: 'varys',
    medium: 'books',
    episode: 22,
    chapter: 156,
    title: 'Whisperers at the Citadel',
  },
  {
    id: 'varys',
    medium: 'books',
    episode: 23,
    chapter: 163,
    title: 'A three-headed dragon',
  },
  {
    id: 'pycelle',
    medium: 'show',
    episode: 23,
    chapter: 163,
    title: 'The third seat',
  },
  {
    id: 'pycelle',
    medium: 'show',
    episode: 30,
    chapter: 197,
    title: 'Lord Frey’s letter',
  },
  {
    id: 'pycelle',
    medium: 'books',
    episode: 23,
    chapter: 163,
    title: 'Grand Maester again',
  },
  {
    id: 'pycelle',
    medium: 'books',
    episode: 28,
    chapter: 176,
    title: 'Word from the Wall',
  },
  {
    id: 'shae',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'Ros’s request',
  },
  { id: 'shae', medium: 'show', episode: 22, chapter: 150, title: 'One thing' },
  {
    id: 'shae',
    medium: 'show',
    episode: 27,
    chapter: 172,
    title: 'Not after the wedding',
  },
  {
    id: 'shae',
    medium: 'show',
    episode: 30,
    chapter: 197,
    title: 'Only if he asks',
  },
  {
    id: 'shae',
    medium: 'books',
    episode: 22,
    chapter: 156,
    title: 'Steps beneath the bed',
  },
  {
    id: 'bronn',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'Ser Bronn of the Blackwater',
  },
  {
    id: 'bronn',
    medium: 'show',
    episode: 23,
    chapter: 163,
    title: 'Copious notes',
  },
  {
    id: 'bronn',
    medium: 'show',
    episode: 27,
    chapter: 172,
    title: 'Two women and a kingdom',
  },
  {
    id: 'bronn',
    medium: 'books',
    episode: 21,
    chapter: 148,
    title: 'News for a wounded man',
  },
  {
    id: 'bronn',
    medium: 'books',
    episode: 28,
    chapter: 176,
    title: 'The singer',
  },
  {
    id: 'podrick-payne',
    medium: 'show',
    episode: 23,
    chapter: 163,
    title: 'Three women',
  },
  {
    id: 'podrick-payne',
    medium: 'books',
    episode: 21,
    chapter: 148,
    title: 'Back on his feet',
  },
  {
    id: 'ros',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'The bells of Winterfell',
  },
  {
    id: 'ros',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'Two feather beds',
  },
  {
    id: 'ros',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'Given to a friend',
  },
  {
    id: 'kevan-lannister',
    medium: 'books',
    episode: 25,
    chapter: 163,
    title: 'Terms from Balon Greyjoy',
  },
  {
    id: 'addam-marbrand',
    medium: 'books',
    episode: 21,
    chapter: 148,
    title: 'Commander of the gold cloaks',
  },
  {
    id: 'dontos-hollard',
    medium: 'books',
    episode: 26,
    chapter: 160,
    title: 'A warning in the godswood',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 22,
    chapter: 150,
    title: 'An escort for Sansa',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 25,
    chapter: 163,
    title: 'A new squire',
  },
  {
    id: 'loras-tyrell',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'The most terrible place',
  },
  {
    id: 'loras-tyrell',
    medium: 'books',
    episode: 22,
    chapter: 150,
    title: 'A forgotten rose',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 21,
    chapter: 148,
    title: 'The orphans of Flea Bottom',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 22,
    chapter: 150,
    title: 'Renly’s bride',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'A friend or a sister',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 27,
    chapter: 172,
    title: 'Not the worst Lannister',
  },
  {
    id: 'margaery-tyrell',
    medium: 'show',
    episode: 28,
    chapter: 172,
    title: 'Never call me sister',
  },
  {
    id: 'margaery-tyrell',
    medium: 'books',
    episode: 22,
    chapter: 150,
    title: 'An invitation to supper',
  },
  {
    id: 'margaery-tyrell',
    medium: 'books',
    episode: 26,
    chapter: 160,
    title: 'Her brother’s white cloak',
  },
  {
    id: 'mace-tyrell',
    medium: 'books',
    episode: 32,
    chapter: 176,
    title: 'The Lord of Highgarden',
  },
  {
    id: 'garlan-tyrell',
    medium: 'books',
    episode: 28,
    chapter: 172,
    title: 'A bigger man than he seems',
  },
  {
    id: 'alayaya',
    medium: 'books',
    episode: 21,
    chapter: 148,
    title: 'Whipped and freed',
  },
  {
    id: 'olenna-tyrell',
    medium: 'show',
    episode: 22,
    chapter: 150,
    title: 'The truth about the king',
  },
  {
    id: 'olenna-tyrell',
    medium: 'show',
    episode: 24,
    chapter: 150,
    title: 'Growing Strong',
  },
  {
    id: 'olenna-tyrell',
    medium: 'show',
    episode: 25,
    chapter: 163,
    title: 'Half the cost',
  },
  {
    id: 'olenna-tyrell',
    medium: 'show',
    episode: 26,
    chapter: 172,
    title: 'Loras for Cersei',
  },
  {
    id: 'olenna-tyrell',
    medium: 'books',
    episode: 22,
    chapter: 150,
    title: 'The Queen of Thorns',
  },
  {
    id: 'megga-tyrell',
    medium: 'books',
    episode: 22,
    chapter: 150,
    title: 'Margaery’s cousins',
  },
  {
    id: 'megga-tyrell',
    medium: 'books',
    episode: 28,
    chapter: 172,
    title: 'A dance with the prince',
  },
  {
    id: 'alla-tyrell',
    medium: 'books',
    episode: 22,
    chapter: 150,
    title: 'A new friend',
  },
  {
    id: 'alla-tyrell',
    medium: 'books',
    episode: 26,
    chapter: 160,
    title: 'Songs of chivalry',
  },
  {
    id: 'elinor-tyrell',
    medium: 'books',
    episode: 22,
    chapter: 150,
    title: 'Among Margaery’s ladies',
  },
  {
    id: 'elinor-tyrell',
    medium: 'books',
    episode: 28,
    chapter: 172,
    title: 'Alyn’s favour',
  },
  {
    id: 'oberyn-martell',
    medium: 'books',
    episode: 31,
    chapter: 182,
    title: 'Justice for Elia',
  },
  {
    id: 'ellaria-sand',
    medium: 'books',
    episode: 32,
    chapter: 182,
    title: 'Ellaria is curious',
  },
]

/**
 * Each new character's first story, at its own gate in each medium it is
 * told in. A record one medium has opens its chronicle in that medium only.
 */
const FIRST: { chapter: number; episode: number; id: string }[] = [
  // Essos (#1659).
  { id: 'missandei', episode: 23, chapter: 171 },
  { id: 'kraznys-mo-nakloz', episode: 24, chapter: 171 },
  { id: 'grey-worm', episode: 25, chapter: 186 },
  { id: 'grazdan-mo-eraz', episode: 27, chapter: 186 },
  { id: 'mero', episode: 28, chapter: 186 },
  { id: 'daario-naharis', episode: 28, chapter: 186 },
  { id: 'prendahl-na-ghezn', episode: 28, chapter: 186 },
  // King’s Landing (#1660).
  { id: 'olenna-tyrell', episode: 22, chapter: 150 },
  { id: 'megga-tyrell', episode: 22, chapter: 150 },
  { id: 'alla-tyrell', episode: 22, chapter: 150 },
  { id: 'elinor-tyrell', episode: 22, chapter: 150 },
  { id: 'oberyn-martell', episode: 31, chapter: 182 },
  { id: 'ellaria-sand', episode: 32, chapter: 182 },
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

/** Whether a row opens by a stage's end in each medium it is told in. */
function inStage({ chapter, episode, medium }: Row, stage: Stage): boolean {
  const shown = medium === 'books' || episode <= stage.episode
  const told = medium === 'show' || chapter <= stage.chapter

  return shown && told
}

/** Every filed story, all three modules, in the table's shape. */
const ALL: Row[] = [
  ...rowsOf(season1Chronicles),
  ...rowsOf(season2Chronicles),
  ...rowsOf(season3Chronicles),
]

/** Every character's stories, from the three modules. */
const STORIES_BY_ID = new Map<string, Dated<Story>[]>(
  Object.entries({
    ...season1Chronicles,
    ...season2Chronicles,
    ...season3Chronicles,
  }),
)

/** The data's stories of the third stage. */
const FILED: Row[] = ALL.filter(
  (row) => !inStage(row, STAGE_2) && inStage(row, STAGE_3),
)

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

/** Every character with a story in the third stage. */
const OWNERS = [...new Set(STORIES.map(({ id }) => id))]

describe('the chronicles of the third stage', () => {
  it('files exactly the stories the table lists', () => {
    const filed = FILED.map((row) => lineOf(row)).toSorted(byString())
    const listed = STORIES.map((row) => lineOf(row)).toSorted(byString())

    expect(filed).toStrictEqual(listed)
  })

  it('files every new story on the character the archive holds', () => {
    for (const [id, stories] of Object.entries(season3Chronicles)) {
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
    ).toBeLessThanOrEqual(STAGE_3.episode)
    expect(Math.max(...told.map(({ chapter }) => chapter))).toBeLessThanOrEqual(
      STAGE_3.chapter,
    )
  })
})

describe.each(LOCALES)('the chronicles of the third stage in %s', (locale) => {
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
    const shownBy = (episode: number): string[] =>
      titlesOf(
        owned.filter((row) => row.medium !== 'books' && row.episode <= episode),
        locale,
      )
    const toldBy = (chapter: number): string[] =>
      titlesOf(
        owned.filter((row) => row.medium !== 'show' && row.chapter <= chapter),
        locale,
      )

    // The next stage's stories may open at its first episode or chapter.
    expect(at(owner, ep(STAGE_3.episode))).toStrictEqual(
      shownBy(STAGE_3.episode),
    )
    expect(at(owner, ep(STAGE_3.episode + 1))).toStrictEqual(
      shownBy(STAGE_3.episode + 1),
    )
    expect(at(owner, ch(STAGE_3.chapter))).toStrictEqual(
      toldBy(STAGE_3.chapter),
    )
    expect(at(owner, ch(STAGE_3.chapter + 1))).toStrictEqual(
      toldBy(STAGE_3.chapter + 1),
    )
  })
})
