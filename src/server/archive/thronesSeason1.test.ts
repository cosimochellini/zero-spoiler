import { describe, expect, it } from 'vitest'

import { DRAWINGS, REDRAWINGS } from '~/data/series/game-of-thrones/art'
import type { Entity } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import type { CharacterStatus } from '~/lib/view/records'
import { LOADED_SERIES } from '~/test/series'

import { homePage } from './home.server'
import { onboardingPage } from './onboarding.server'
import { characterPage } from './pages.server'
import { placePage } from './placePage.server'
import { drawingOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 1 tests require Game of Thrones')
}
const { archive } = series

/** Each record's gate in each medium, as filed (#852, #853, #1006, #1007, #1008); `source` for one medium. */
const RECORDS: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { id: 'eddard-stark', episode: 1, chapter: 2 },
  { id: 'catelyn-stark', episode: 1, chapter: 3 },
  { id: 'robb-stark', episode: 1, chapter: 2 },
  { id: 'sansa-stark', episode: 1, chapter: 5 },
  { id: 'arya-stark', episode: 1, chapter: 5 },
  { id: 'bran-stark', episode: 1, chapter: 2 },
  { id: 'rickon-stark', episode: 1, chapter: 5 },
  { id: 'jon-snow', episode: 1, chapter: 2 },
  { id: 'benjen-stark', episode: 1, chapter: 6 },
  { id: 'grey-wind', episode: 8, chapter: 11 },
  { id: 'lady-direwolf', episode: 1, chapter: 16 },
  { id: 'nymeria', episode: 2, chapter: 8 },
  { id: 'summer-direwolf', episode: 4, chapter: 18 },
  { id: 'shaggydog', episode: 10, chapter: 25 },
  { id: 'ghost-direwolf', episode: 4, chapter: 6 },
  { id: 'theon-greyjoy', episode: 1, chapter: 2 },
  { id: 'luwin', episode: 1, chapter: 7 },
  { id: 'rodrik-cassel', episode: 1, chapter: 8 },
  { id: 'old-nan', episode: 3, chapter: 15 },
  { id: 'hodor', episode: 4, chapter: 25 },
  { id: 'osha', episode: 6, chapter: 38 },
  { id: 'mordane', episode: 1, chapter: 8 },
  { id: 'jory-cassel', episode: 1, chapter: 2 },
  { id: 'jeor-mormont', episode: 3, chapter: 20 },
  { id: 'aemon', episode: 3, chapter: 22 },
  { id: 'samwell-tarly', episode: 4, chapter: 27 },
  { id: 'alliser-thorne', episode: 3, chapter: 20 },
  { id: 'yoren', episode: 3, chapter: 14 },
  { id: 'cersei-lannister', episode: 1, chapter: 5 },
  { id: 'jaime-lannister', episode: 1, chapter: 5 },
  { id: 'tyrion-lannister', episode: 1, chapter: 5 },
  { id: 'tywin-lannister', episode: 7, chapter: 57 },
  { id: 'joffrey-baratheon', episode: 1, chapter: 5 },
  { id: 'myrcella-baratheon', episode: 1, chapter: 6 },
  { id: 'tommen-baratheon', episode: 1, chapter: 6 },
  { id: 'robert-baratheon', episode: 1, chapter: 5 },
  { id: 'renly-baratheon', episode: 3, chapter: 16 },
  { id: 'lysa-arryn', episode: 5, chapter: 35 },
  { id: 'robin-arryn', episode: 5, chapter: 35 },
  { id: 'bronn', episode: 4, chapter: 32 },
  { id: 'shae', episode: 9, chapter: 63 },
  { id: 'walder-frey', episode: 9, chapter: 60 },
  { id: 'ros', episode: 4, chapter: 25, source: 'episode' },
  { id: 'ilyn-payne', episode: 2, chapter: 16 },
  { id: 'barristan-selmy', episode: 3, chapter: 16 },
  { id: 'syrio-forel', episode: 3, chapter: 23 },
  { id: 'petyr-baelish', episode: 3, chapter: 19 },
  { id: 'varys', episode: 3, chapter: 19 },
  { id: 'pycelle', episode: 3, chapter: 21 },
  { id: 'sandor-clegane', episode: 4, chapter: 5 },
  { id: 'janos-slynt', episode: 4, chapter: 28 },
  { id: 'gendry', episode: 4, chapter: 28 },
  { id: 'gregor-clegane', episode: 4, chapter: 30 },
  { id: 'loras-tyrell', episode: 5, chapter: 30 },
  { id: 'daenerys-targaryen', episode: 1, chapter: 4 },
  { id: 'viserys-targaryen', episode: 1, chapter: 4 },
  { id: 'drogo', episode: 1, chapter: 4 },
  { id: 'jorah-mormont', episode: 1, chapter: 4 },
  { id: 'illyrio-mopatis', episode: 1, chapter: 4 },
  { id: 'irri', episode: 2, chapter: 12 },
  { id: 'doreah', episode: 2, chapter: 12 },
  { id: 'rakharo', episode: 3, chapter: 24 },
  { id: 'mirri-maz-duur', episode: 8, chapter: 62 },
  { id: 'hullen', episode: 1, chapter: 2, source: 'chapter' },
  { id: 'jeyne-poole', episode: 1, chapter: 8, source: 'chapter' },
  { id: 'mikken', episode: 2, chapter: 54 },
  { id: 'hallis-mollen', episode: 2, chapter: 15, source: 'chapter' },
  { id: 'mycah', episode: 2, chapter: 16 },
  { id: 'stiv', episode: 6, chapter: 38 },
  { id: 'wallen', episode: 6, chapter: 38 },
  { id: 'greatjon-umber', episode: 8, chapter: 54 },
  { id: 'smalljon-umber', episode: 53, chapter: 64 },
  { id: 'rickard-karstark', episode: 17, chapter: 54 },
  { id: 'roose-bolton', episode: 14, chapter: 54 },
  { id: 'galbart-glover', episode: 8, chapter: 56 },
  { id: 'robett-glover', episode: 57, chapter: 54 },
  { id: 'maege-mormont', episode: 8, chapter: 54 },
  { id: 'dacey-mormont', episode: 9, chapter: 64, source: 'chapter' },
  { id: 'wendel-manderly', episode: 29, chapter: 56 },
  { id: 'marillion', episode: 4, chapter: 29 },
  { id: 'willis-wode', episode: 4, chapter: 29 },
  { id: 'donnel-waynwood', episode: 35, chapter: 35 },
  { id: 'nestor-royce', episode: 5, chapter: 35, source: 'chapter' },
  { id: 'mya-stone', episode: 5, chapter: 35, source: 'chapter' },
  { id: 'vardis-egen', episode: 6, chapter: 35 },
  { id: 'mord', episode: 6, chapter: 39 },
  { id: 'lyn-corbray', episode: 6, chapter: 39, source: 'chapter' },
  { id: 'anya-waynwood', episode: 38, chapter: 39 },
  { id: 'shagga', episode: 8, chapter: 43 },
  { id: 'timett', episode: 8, chapter: 57 },
  { id: 'chella', episode: 8, chapter: 57 },
  { id: 'meryn-trant', episode: 8, chapter: 30 },
  { id: 'boros-blount', episode: 19, chapter: 34 },
  { id: 'mandon-moore', episode: 19, chapter: 52 },
  { id: 'arys-oakheart', episode: 8, chapter: 58, source: 'chapter' },
  { id: 'lancel-lannister', episode: 3, chapter: 31 },
  { id: 'dontos-hollard', episode: 11, chapter: 58 },
  { id: 'hugh-of-the-vale', episode: 4, chapter: 30 },
  { id: 'tobho-mott', episode: 4, chapter: 28 },
  { id: 'mhaegen', episode: 5, chapter: 36, source: 'episode' },
  { id: 'vayon-poole', episode: 8, chapter: 17 },
  { id: 'tomard', episode: 7, chapter: 23 },
  { id: 'harwin', episode: 1, chapter: 2, source: 'chapter' },
  { id: 'alyn', episode: 1, chapter: 13, source: 'chapter' },
  { id: 'beric-dondarrion', episode: 6, chapter: 28 },
  { id: 'thoros-of-myr', episode: 22, chapter: 30 },
  { id: 'balon-swann', episode: 4, chapter: 30, source: 'chapter' },
  { id: 'robar-royce', episode: 4, chapter: 30, source: 'chapter' },
  { id: 'yohn-royce', episode: 38, chapter: 30 },
  { id: 'jason-mallister', episode: 4, chapter: 29, source: 'chapter' },
  { id: 'masha-heddle', episode: 4, chapter: 29 },
  { id: 'kevan-lannister', episode: 8, chapter: 57 },
  { id: 'addam-marbrand', episode: 10, chapter: 63 },
  { id: 'podrick-payne', episode: 12, chapter: 63 },
  { id: 'stevron-frey', episode: 9, chapter: 60 },
  { id: 'edmure-tully', episode: 23, chapter: 72 },
  { id: 'hoster-tully', episode: 23, chapter: 72 },
  { id: 'brynden-tully', episode: 23, chapter: 35 },
  { id: 'hot-pie', episode: 10, chapter: 75 },
  { id: 'lommy', episode: 10, chapter: 75 },
  { id: 'jaqen-hghar', episode: 12, chapter: 79 },
  { id: 'rorge', episode: 12, chapter: 79 },
  { id: 'biter', episode: 12, chapter: 79 },
  // The Night's Watch (#1007).
  { id: 'will', episode: 1, chapter: 1 },
  { id: 'gared', episode: 1, chapter: 1 },
  { id: 'waymar-royce', episode: 1, chapter: 1 },
  { id: 'grenn', episode: 3, chapter: 20 },
  { id: 'pypar', episode: 3, chapter: 20 },
  { id: 'rast', episode: 3, chapter: 27 },
  { id: 'dareon', episode: 7, chapter: 20 },
  { id: 'halder', episode: 7, chapter: 20 },
  { id: 'todder', episode: 30, chapter: 20 },
  { id: 'othell-yarwyck', episode: 7, chapter: 49 },
  { id: 'bowen-marsh', episode: 41, chapter: 22 },
  { id: 'jaremy-rykker', episode: 7, chapter: 22 },
  { id: 'othor', episode: 8, chapter: 20 },
  { id: 'jafer-flowers', episode: 8, chapter: 53 },
  { id: 'donal-noye', episode: 3, chapter: 20, source: 'chapter' },
  { id: 'chett', episode: 5, chapter: 42, source: 'chapter' },
  // Daenerys's storyline in Essos (#1008).
  { id: 'qotho', episode: 6, chapter: 62 },
  { id: 'cohollo', episode: 4, chapter: 37, source: 'chapter' },
  { id: 'haggo', episode: 8, chapter: 62, source: 'chapter' },
  { id: 'jhiqui', episode: 2, chapter: 12 },
  { id: 'aggo', episode: 11, chapter: 62 },
  { id: 'jhogo', episode: 3, chapter: 24, source: 'chapter' },
  { id: 'quaro', episode: 8, chapter: 62, source: 'chapter' },
  { id: 'mago', episode: 8, chapter: 62 },
  { id: 'eroeh', episode: 10, chapter: 69, source: 'chapter' },
  // Places (#853): the first scene set there in each medium.
  { id: 'haunted-forest', episode: 1, chapter: 1 },
  { id: 'winterfell', episode: 1, chapter: 2 },
  { id: 'pentos', episode: 1, chapter: 4 },
  { id: 'kings-landing', episode: 1, chapter: 19 },
  { id: 'the-wall', episode: 1, chapter: 22 },
  { id: 'winter-town', episode: 1, chapter: 38 },
  { id: 'inn-at-the-crossroads', episode: 2, chapter: 16 },
  { id: 'darry', episode: 2, chapter: 17, source: 'chapter' },
  { id: 'castle-black', episode: 2, chapter: 20 },
  { id: 'dothraki-sea', episode: 2, chapter: 24 },
  { id: 'red-keep', episode: 3, chapter: 21 },
  { id: 'vaes-dothrak', episode: 4, chapter: 37 },
  { id: 'the-eyrie', episode: 5, chapter: 35 },
  { id: 'wolfswood', episode: 6, chapter: 38 },
  { id: 'kingswood', episode: 6, chapter: 44, source: 'episode' },
  { id: 'lannister-camp', episode: 7, chapter: 63 },
  { id: 'lhazar', episode: 8, chapter: 62 },
  { id: 'the-twins', episode: 9, chapter: 60 },
  { id: 'great-sept-of-baelor', episode: 9, chapter: 66 },
  { id: 'riverrun', episode: 23, chapter: 72 },
  { id: 'moles-town', episode: 33, chapter: 71 },
  { id: 'bloody-gate', episode: 35, chapter: 35 },
  { id: 'moat-cailin', episode: 38, chapter: 56 },
  // Named only (#1035, #1248): each opens where each medium first names it.
  { id: 'bear-island', episode: 1, chapter: 13 },
  { id: 'eastwatch', episode: 4, chapter: 20 },
  { id: 'pyke', episode: 4, chapter: 25 },
  { id: 'white-harbor', episode: 6, chapter: 15 },
  { id: 'the-neck', episode: 8, chapter: 5 },
  // Named only (#1249).
  { id: 'casterly-rock', episode: 1, chapter: 3 },
  { id: 'lannisport', episode: 3, chapter: 21 },
  { id: 'harrenhal', episode: 4, chapter: 29 },
  { id: 'the-fingers', episode: 4, chapter: 14 },
  { id: 'the-trident', episode: 5, chapter: 3 },
  { id: 'tumblestone', episode: 5, chapter: 64 },
  { id: 'golden-tooth', episode: 8, chapter: 41 },
  { id: 'red-fork', episode: 10, chapter: 3 },
  { id: 'gods-eye', episode: 10, chapter: 67 },
  // Named only (#1251).
  { id: 'asshai', episode: 1, chapter: 12 },
  { id: 'lys', episode: 2, chapter: 4 },
  { id: 'qarth', episode: 2, chapter: 24 },
  { id: 'braavos', episode: 3, chapter: 4 },
  { id: 'qohor', episode: 3, chapter: 4 },
  { id: 'myr', episode: 4, chapter: 4 },
  { id: 'valyria', episode: 4, chapter: 3 },
  { id: 'tyrosh', episode: 7, chapter: 4 },
  { id: 'volantis', episode: 7, chapter: 4 },
  { id: 'mother-of-mountains', episode: 7, chapter: 37 },
]

/**
 * Every status change within season 1 / *A Game of Thrones*, pinned in both
 * media; `source` for a change one medium alone tells.
 */
const CHANGES: {
  chapter: number
  episode: number
  id: string
  source?: 'chapter' | 'episode'
  value: CharacterStatus
}[] = [
  { id: 'eddard-stark', episode: 7, chapter: 50, value: 'captured' },
  { id: 'eddard-stark', episode: 9, chapter: 66, value: 'deceased' },
  { id: 'sansa-stark', episode: 8, chapter: 52, value: 'captured' },
  { id: 'lady-direwolf', episode: 2, chapter: 17, value: 'deceased' },
  { id: 'mordane', episode: 10, chapter: 68, value: 'deceased' },
  { id: 'jory-cassel', episode: 5, chapter: 36, value: 'deceased' },
  { id: 'robert-baratheon', episode: 7, chapter: 50, value: 'deceased' },
  { id: 'syrio-forel', episode: 8, chapter: 51, value: 'presumed-dead' },
  { id: 'tyrion-lannister', episode: 4, chapter: 29, value: 'captured' },
  { id: 'tyrion-lannister', episode: 6, chapter: 41, value: 'alive' },
  { id: 'jaime-lannister', episode: 9, chapter: 64, value: 'captured' },
  { id: 'viserys-targaryen', episode: 6, chapter: 47, value: 'deceased' },
  { id: 'drogo', episode: 10, chapter: 69, value: 'deceased' },
  { id: 'mirri-maz-duur', episode: 10, chapter: 73, value: 'deceased' },
  {
    id: 'hullen',
    episode: 8,
    chapter: 51,
    value: 'deceased',
    source: 'chapter',
  },
  // Hoster opens at one pin with a status per medium: alive in the book, a corpse on screen.
  {
    id: 'hoster-tully',
    episode: 23,
    chapter: 72,
    value: 'alive',
    source: 'chapter',
  },
  {
    id: 'hoster-tully',
    episode: 23,
    chapter: 72,
    value: 'deceased',
    source: 'episode',
  },
  { id: 'mycah', episode: 2, chapter: 17, value: 'deceased' },
  { id: 'stiv', episode: 6, chapter: 38, value: 'deceased' },
  { id: 'wallen', episode: 6, chapter: 38, value: 'deceased' },
  {
    id: 'willis-wode',
    episode: 5,
    chapter: 35,
    value: 'deceased',
    source: 'episode',
  },
  { id: 'vardis-egen', episode: 6, chapter: 41, value: 'deceased' },
  { id: 'hugh-of-the-vale', episode: 4, chapter: 30, value: 'deceased' },
  { id: 'vayon-poole', episode: 8, chapter: 52, value: 'deceased' },
  {
    id: 'tomard',
    episode: 7,
    chapter: 50,
    value: 'deceased',
    source: 'chapter',
  },
  {
    id: 'masha-heddle',
    episode: 8,
    chapter: 57,
    value: 'deceased',
    source: 'chapter',
  },
  { id: 'will', episode: 1, chapter: 1, value: 'deceased' },
  { id: 'gared', episode: 1, chapter: 2, value: 'deceased' },
  { id: 'waymar-royce', episode: 1, chapter: 1, value: 'deceased' },
  {
    id: 'jaremy-rykker',
    episode: 8,
    chapter: 61,
    value: 'deceased',
    source: 'chapter',
  },
  { id: 'othor', episode: 8, chapter: 53, value: 'deceased' },
  { id: 'jafer-flowers', episode: 8, chapter: 53, value: 'deceased' },
  { id: 'qotho', episode: 9, chapter: 65, value: 'deceased' },
  {
    id: 'cohollo',
    episode: 9,
    chapter: 65,
    value: 'deceased',
    source: 'chapter',
  },
  {
    id: 'haggo',
    episode: 9,
    chapter: 65,
    value: 'deceased',
    source: 'chapter',
  },
  {
    id: 'quaro',
    episode: 9,
    chapter: 65,
    value: 'deceased',
    source: 'chapter',
  },
  { id: 'mago', episode: 8, chapter: 63, value: 'deceased', source: 'episode' },
  {
    id: 'eroeh',
    episode: 10,
    chapter: 69,
    value: 'deceased',
    source: 'chapter',
  },
]

/**
 * Every role and affiliation step after the first, pinned in both media, by
 * its English text; `source` for a step one medium alone tells.
 */
const STEPS: {
  chapter: number
  en: string
  episode: number
  id: string
  source?: 'chapter' | 'episode'
}[] = [
  { chapter: 7, en: 'Hand of the King', episode: 2, id: 'eddard-stark' },
  {
    chapter: 21,
    en: 'House Stark, small council',
    episode: 3,
    id: 'eddard-stark',
  },
  { chapter: 72, en: 'King in the North', episode: 10, id: 'robb-stark' },
  {
    chapter: 20,
    en: 'Recruit of the Night’s Watch',
    episode: 3,
    id: 'jon-snow',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch, steward to the Lord Commander',
    episode: 7,
    id: 'jon-snow',
  },
  { chapter: 20, en: 'Night’s Watch', episode: 3, id: 'jon-snow' },
  {
    chapter: 56,
    en: 'Castellan of Winterfell',
    episode: 8,
    id: 'rodrik-cassel',
    source: 'chapter',
  },
  { chapter: 54, en: 'Captive servant at Winterfell', episode: 7, id: 'osha' },
  { chapter: 54, en: 'Winterfell, captive', episode: 7, id: 'osha' },
  {
    chapter: 49,
    en: 'Steward to Maester Aemon',
    episode: 7,
    id: 'samwell-tarly',
  },
  {
    chapter: 50,
    en: 'Queen, mother of the new king',
    episode: 7,
    id: 'cersei-lannister',
  },
  {
    chapter: 58,
    en: 'Lord Commander of the Kingsguard',
    episode: 8,
    id: 'jaime-lannister',
  },
  {
    chapter: 70,
    en: 'Acting Hand of the King',
    episode: 10,
    id: 'tyrion-lannister',
  },
  { chapter: 58, en: 'Hand of the King', episode: 10, id: 'tywin-lannister' },
  {
    chapter: 50,
    en: 'King of the Seven Kingdoms',
    episode: 7,
    id: 'joffrey-baratheon',
  },
  {
    chapter: 50,
    en: 'The late king’s brother, fled from King’s Landing',
    episode: 7,
    id: 'renly-baratheon',
  },
  {
    chapter: 70,
    en: 'Claimant to the Iron Throne',
    episode: 10,
    id: 'renly-baratheon',
  },
  { chapter: 41, en: 'Tyrion’s sellsword', episode: 6, id: 'bronn' },
  { chapter: 41, en: 'House Lannister', episode: 6, id: 'bronn' },
  {
    chapter: 48,
    en: 'Littlefinger’s brothel',
    episode: 7,
    id: 'ros',
    source: 'episode',
  },
  {
    chapter: 58,
    en: 'Knight dismissed from the Kingsguard',
    episode: 8,
    id: 'barristan-selmy',
  },
  {
    chapter: 58,
    en: 'Formerly of the Kingsguard',
    episode: 8,
    id: 'barristan-selmy',
  },
  {
    chapter: 58,
    en: 'Member of the Kingsguard',
    episode: 8,
    id: 'sandor-clegane',
  },
  { chapter: 58, en: 'Kingsguard', episode: 8, id: 'sandor-clegane' },
  {
    chapter: 58,
    en: 'Lord of Harrenhal, commander of the City Watch',
    episode: 8,
    id: 'janos-slynt',
  },
  {
    chapter: 66,
    en: 'Night’s Watch recruit',
    episode: 10,
    id: 'gendry',
    source: 'episode',
  },
  {
    chapter: 66,
    en: 'Night’s Watch recruits',
    episode: 10,
    id: 'gendry',
    source: 'episode',
  },
  {
    chapter: 44,
    en: 'Knight stripped of his lands and titles by the Hand',
    episode: 6,
    id: 'gregor-clegane',
  },
  {
    chapter: 12,
    en: 'Khaleesi, Drogo’s wife',
    episode: 2,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 73,
    en: 'Khaleesi at the head of her own khalasar',
    episode: 10,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 12,
    en: 'House Targaryen, Drogo’s khalasar',
    episode: 2,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 73,
    en: 'House Targaryen, her own khalasar',
    episode: 10,
    id: 'daenerys-targaryen',
  },
  {
    chapter: 73,
    en: 'Daenerys’s bloodrider',
    episode: 10,
    id: 'rakharo',
    source: 'chapter',
  },
  { chapter: 73, en: 'Daenerys’s khalasar', episode: 10, id: 'rakharo' },
  { chapter: 73, en: 'Daenerys’s khalasar', episode: 11, id: 'aggo' },
  {
    chapter: 73,
    en: 'Daenerys’s khalasar',
    episode: 10,
    id: 'jhogo',
    source: 'chapter',
  },
  {
    chapter: 69,
    en: 'Jhaqo’s khalasar',
    episode: 10,
    id: 'mago',
    source: 'chapter',
  },
  {
    chapter: 72,
    en: 'House Umber, sworn to Robb Stark, King in the North',
    episode: 10,
    id: 'greatjon-umber',
  },
  {
    chapter: 72,
    en: 'House Karstark, sworn to Robb Stark, King in the North',
    episode: 17,
    id: 'rickard-karstark',
    source: 'chapter',
  },
  {
    chapter: 56,
    en: 'Commander of the northern foot',
    episode: 14,
    id: 'roose-bolton',
    source: 'chapter',
  },
  {
    chapter: 72,
    en: 'House Glover, sworn to Robb Stark, King in the North',
    episode: 10,
    id: 'galbart-glover',
  },
  {
    chapter: 72,
    en: 'House Mormont, sworn to Robb Stark, King in the North',
    episode: 10,
    id: 'maege-mormont',
  },
  {
    chapter: 45,
    en: 'House Stark, Beric Dondarrion’s company',
    episode: 6,
    id: 'harwin',
    source: 'chapter',
  },
  {
    chapter: 46,
    en: 'Captain of the Hand’s guard',
    episode: 6,
    id: 'alyn',
    source: 'chapter',
  },
  {
    chapter: 44,
    en: 'House Stark, Beric Dondarrion’s company',
    episode: 6,
    id: 'alyn',
    source: 'chapter',
  },
  {
    chapter: 44,
    en: 'Leader of the riders sent against Gregor Clegane',
    episode: 6,
    id: 'beric-dondarrion',
    source: 'chapter',
  },
  {
    chapter: 44,
    en: 'Beric Dondarrion’s company',
    episode: 22,
    id: 'thoros-of-myr',
    source: 'chapter',
  },
  {
    chapter: 56,
    en: 'House Tully, Robb Stark’s host',
    episode: 23,
    id: 'brynden-tully',
    source: 'chapter',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch, ranger',
    episode: 7,
    id: 'grenn',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch',
    episode: 7,
    id: 'pypar',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch, steward',
    episode: 8,
    id: 'dareon',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch, builder',
    episode: 8,
    id: 'halder',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch',
    episode: 31,
    id: 'todder',
  },
  {
    chapter: 49,
    en: 'Sworn brother of the Night’s Watch, ranger',
    episode: 7,
    id: 'rast',
    source: 'episode',
  },
  {
    chapter: 49,
    en: 'Kennel hand at Castle Black',
    episode: 7,
    id: 'chett',
    source: 'chapter',
  },
  {
    chapter: 73,
    en: 'Daenerys’s bloodrider',
    episode: 12,
    id: 'aggo',
    source: 'chapter',
  },
  {
    chapter: 73,
    en: 'Daenerys’s bloodrider',
    episode: 10,
    id: 'jhogo',
    source: 'chapter',
  },
  {
    chapter: 69,
    en: 'Jhaqo’s bloodrider',
    episode: 10,
    id: 'mago',
    source: 'chapter',
  },
]

type Unit = 'chapter' | 'episode'
const UNITS: Unit[] = ['episode', 'chapter']

function at(unit: Unit, count: number): Bookmark {
  return unit === 'chapter' ?
      { mode: 'chapter', chapter: count }
    : { mode: 'episode', episode: count }
}

/** A reader at this count of this unit, in this locale. */
function reader(unit: Unit, count: number, locale: Locale = 'en'): Reader {
  return readerFor(archive, at(unit, count), locale)
}

/** Each record in each locale and in each unit that tells it, at its gate. */
const GATES = RECORDS.flatMap((record) =>
  LOCALES.flatMap((locale) =>
    UNITS.filter((unit) => (record.source ?? unit) === unit).map((unit) => ({
      id: record.id,
      gate: unit === 'chapter' ? record.chapter : record.episode,
      locale,
      unit,
    })),
  ),
)

const byText = (a: string, b: string): number => a.localeCompare(b)

function opened(id: string, view: Reader): boolean {
  const page = characterPage(id, view) ?? placePage(id, view)
  return page !== undefined && 'detail' in page && page.detail.slot.open
}

function character(id: string): Entity {
  const record = archive.getCharacter(id)
  if (record === undefined) {
    throw new Error(`Missing ${id} fixture`)
  }
  return record
}

describe('the first season’s cast', () => {
  it('files exactly these records', () => {
    expect(archive.entities.map(({ id }) => id).toSorted(byText)).toStrictEqual(
      RECORDS.map(({ id }) => id).toSorted(byText),
    )
  })

  it.each(GATES)(
    'opens $id at its named scene by $unit in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate, locale))).toBe(true)
    },
  )

  // Gate 1 has no bookmark below it: nothing is read before episode 1.
  it.each(GATES.filter(({ gate }) => gate > 1))(
    'keeps $id closed one $unit before it in $locale',
    ({ id, gate, locale, unit }) => {
      expect(opened(id, reader(unit, gate - 1, locale))).toBe(false)
    },
  )

  it.each(RECORDS.filter(({ source }) => source !== undefined))(
    'never opens the one-medium $id to a reader of the other',
    ({ id, source }) => {
      const last =
        source === 'episode' ?
          reader('chapter', archive.series.chapterCeiling)
        : reader('episode', archive.series.episodeCeiling)

      expect(opened(id, last)).toBe(false)
    },
  )
})

describe.each(
  CHANGES.flatMap((change) =>
    UNITS.filter((unit) => (change.source ?? unit) === unit).map((unit) => ({
      ...change,
      unit,
    })),
  ),
)('$id becomes $value by $unit', ({ id, episode, chapter, value, unit }) => {
  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode
    const owner = character(id)
    const before = reader(unit, pin - 1)
    const reached = reader(unit, pin)

    expect(archive.latestOf(before, owner, 'status')).not.toBe(value)
    expect(archive.latestOf(reached, owner, 'status')).toBe(value)
  })
})

describe('the status changes one medium alone tells', () => {
  it.each(CHANGES.filter(({ source }) => source !== undefined))(
    'never makes $id $value for a reader of the other medium',
    ({ id, source, value }) => {
      const last =
        source === 'episode' ?
          reader('chapter', archive.series.chapterCeiling)
        : reader('episode', archive.series.episodeCeiling)

      expect(archive.latestOf(last, character(id), 'status')).not.toBe(value)
    },
  )
})

describe.each(
  STEPS.flatMap((step) =>
    UNITS.filter((unit) => (step.source ?? unit) === unit).map((unit) => ({
      ...step,
      unit,
    })),
  ),
)('$id: “$en” by $unit', ({ id, en, episode, chapter, unit }) => {
  // A page names a role or an affiliation as a whole string of its own.
  const shown = (count: number): boolean =>
    JSON.stringify(characterPage(id, reader(unit, count)) ?? null).includes(
      JSON.stringify(en),
    )

  it('at its pin, not one before', () => {
    const pin = unit === 'chapter' ? chapter : episode

    expect(shown(pin - 1)).toBe(false)
    expect(shown(pin)).toBe(true)
  })
})

describe('the steps one medium alone tells', () => {
  it.each(STEPS.filter(({ source }) => source !== undefined))(
    'never shows “$en” to a reader of the other medium',
    ({ id, en, source }) => {
      const other: Unit = source === 'chapter' ? 'episode' : 'chapter'
      const last =
        other === 'chapter' ?
          archive.series.chapterCeiling
        : archive.series.episodeCeiling
      const page = JSON.stringify(
        characterPage(id, reader(other, last)) ?? null,
      )

      expect(page).not.toContain(JSON.stringify(en))
    },
  )
})

describe('the season’s leads', () => {
  it.each(UNITS)('heads the home page by %s with the main cast', (unit) => {
    const page = homePage(reader(unit, 10))

    expect(JSON.stringify(page)).toContain('Eddard Stark')
    expect(archive.leads['season-1']).toStrictEqual([
      'eddard-stark',
      'jon-snow',
      'daenerys-targaryen',
      'tyrion-lannister',
      'arya-stark',
    ])
  })
})

/** The five leads, in the order the demo's cast shows them. */
const CAST = [
  'eddard-stark',
  'jon-snow',
  'daenerys-targaryen',
  'tyrion-lannister',
  'arya-stark',
]

describe('the first season’s demo', () => {
  it('gives a new visitor the season, its five leads and its places, and covers the rest', () => {
    const demo = onboardingPage(null, readerFor(archive, null, 'en'))

    expect(demo.arcs.map(({ id }) => id)).toStrictEqual(['season-1'])
    expect(demo.cast.map(({ id }) => id)).toStrictEqual(CAST)
    // The places the first ten episodes and their chapters both reach; Darry
    // and the Kingswood are one medium's, so the two-unit demo skips them.
    expect(demo.places.map(({ id }) => id)).toStrictEqual([
      'haunted-forest',
      'winterfell',
      'casterly-rock',
      'pentos',
      'asshai',
      'bear-island',
      'kings-landing',
      'the-wall',
      'winter-town',
      'lys',
      'inn-at-the-crossroads',
      'castle-black',
      'dothraki-sea',
      'qarth',
      'braavos',
      'qohor',
      'red-keep',
      'lannisport',
      'valyria',
      'myr',
      'the-fingers',
      'eastwatch',
      'pyke',
      'harrenhal',
      'vaes-dothrak',
      'the-trident',
      'the-eyrie',
      'tumblestone',
      'white-harbor',
      'wolfswood',
      'tyrosh',
      'volantis',
      'mother-of-mountains',
      'lannister-camp',
      'the-neck',
      'golden-tooth',
      'lhazar',
      'the-twins',
      'great-sept-of-baelor',
      'red-fork',
      'gods-eye',
    ])
    // Past the demo, only the four places later seasons first show, covered.
    expect(
      demo.tail.map(({ kind, revealedAtEpisode }) => [kind, revealedAtEpisode]),
    ).toStrictEqual([
      ['place', 23],
      ['place', 33],
      ['place', 35],
      ['place', 38],
    ])
    // Ros is the show's alone, so the two-unit demo cannot carry her.
    expect(JSON.stringify(demo)).not.toContain('"ros"')
  })
})

// Beheaded with Ice in "Baelor" (episode 9) and in Arya V (chapter 66).
describe.each([
  { unit: 'episode' as const, pin: 9 },
  { unit: 'chapter' as const, pin: 66 },
])('Eddard Stark’s death stage by $unit', ({ unit, pin }) => {
  const [stage] = REDRAWINGS['eddard-stark'] ?? []
  const ned = character('eddard-stark')

  it('keeps Ice standing one before the pin', () => {
    expect(drawingOf(ned, reader(unit, pin - 1)).strokes).toStrictEqual(
      DRAWINGS['eddard-stark'],
    )
  })

  it('lays Ice down at the pin', () => {
    expect(stage).toBeDefined()
    expect(drawingOf(ned, reader(unit, pin)).strokes).toStrictEqual(
      stage?.value,
    )
  })
})

/**
 * The Winterfell household's stages (#854), the southern cast's (#1051) and
 * the Night's Watch's and Essos cast's (#1052), the northern household's
 * (#1054), the Vale cast's (#1055), the King's Landing cast's (#1056) and
 * the Riverlands cast's (#1057), each pinned in the units that tell it:
 * Bran's climb, which the book alone shows after his threshold, the deaths
 * (Willis Wode's the show's alone; Vardis Egen's, Mycah's and Masha
 * Heddle's the book's alone), Barristan's thrown sword, Syrio's snapped
 * blade, and the reveals of Jorah's master, Aemon's house and Mirri's blood
 * magic. `stage` counts a record's stages from 0, for a record redrawn more
 * than once.
 */
const STAGES: {
  chapter: number
  episode: number
  id: keyof typeof DRAWINGS
  source?: 'chapter' | 'episode'
  stage?: number
}[] = [
  { id: 'lady-direwolf', episode: 2, chapter: 17 },
  { id: 'jory-cassel', episode: 5, chapter: 36 },
  { id: 'mordane', episode: 10, chapter: 68 },
  { id: 'bran-stark', episode: 2, chapter: 9, source: 'chapter' },
  { id: 'robert-baratheon', episode: 7, chapter: 50 },
  { id: 'barristan-selmy', episode: 8, chapter: 58 },
  { id: 'syrio-forel', episode: 8, chapter: 51 },
  { id: 'jorah-mormont', episode: 5, chapter: 13 },
  { id: 'viserys-targaryen', episode: 6, chapter: 47 },
  { id: 'aemon', episode: 9, chapter: 61 },
  { id: 'mirri-maz-duur', episode: 9, chapter: 65 },
  { id: 'drogo', episode: 10, chapter: 69 },
  { id: 'mirri-maz-duur', episode: 10, chapter: 73, stage: 1 },
  { id: 'tomard', episode: 7, chapter: 50, source: 'chapter' },
  { id: 'hullen', episode: 8, chapter: 51, source: 'chapter' },
  { id: 'vayon-poole', episode: 8, chapter: 52, source: 'chapter' },
  { id: 'willis-wode', episode: 5, chapter: 35, source: 'episode' },
  { id: 'vardis-egen', episode: 6, chapter: 41, source: 'chapter' },
  { id: 'mycah', episode: 2, chapter: 17, source: 'chapter' },
  { id: 'masha-heddle', episode: 8, chapter: 57, source: 'chapter' },
]

describe.each(
  STAGES.flatMap((stage) =>
    UNITS.filter((unit) => (stage.source ?? unit) === unit).map((unit) => ({
      ...stage,
      unit,
    })),
  ),
)(
  '$id is redrawn by $unit at $episode/$chapter',
  ({ id, episode, chapter, unit, stage: index = 0 }) => {
    const pin = unit === 'chapter' ? chapter : episode
    const stages = REDRAWINGS[id] ?? []
    const stage = stages[index]
    const previous = index === 0 ? DRAWINGS[id] : stages[index - 1]?.value

    it('at its pin, not one before', () => {
      const owner = character(id)

      expect(stage?.episode).toBe(episode)
      expect(stage?.chapter).toBe(chapter)
      expect(drawingOf(owner, reader(unit, pin - 1)).strokes).toStrictEqual(
        previous,
      )
      expect(drawingOf(owner, reader(unit, pin)).strokes).toStrictEqual(
        stage?.value,
      )
    })
  },
)

describe('the stages one medium alone tells', () => {
  it.each(STAGES.filter(({ source }) => source !== undefined))(
    'never redraws $id for a reader of the other medium',
    ({ id, source }) => {
      const last =
        source === 'chapter' ?
          reader('episode', archive.series.episodeCeiling)
        : reader('chapter', archive.series.chapterCeiling)

      expect(drawingOf(character(id), last).strokes).toStrictEqual(DRAWINGS[id])
    },
  )
})
