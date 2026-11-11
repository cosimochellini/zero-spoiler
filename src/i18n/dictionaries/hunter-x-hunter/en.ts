import type { OwnCopy } from '~/i18n/types'

/**
 * Hunter x Hunter's own copy, in English: the keys every series words for
 * itself (`CommonKey`), and none of One Piece's features. It stays on the
 * server and reaches a reader with Hunter x Hunter's pages only. Its sources
 * are the English Hunter x Hunter Wiki and Italian Wikipedia (#725).
 */
export const hunterXHunterEn = {
  // The Nen type row (#922): the six categories of Water Divination, and the
  // state of a Nen user whose type the story has not told yet.
  'character.nen': 'Nen type',
  'nen.conjurer': 'Conjurer',
  'nen.emitter': 'Emitter',
  'nen.enhancer': 'Enhancer',
  'nen.manipulator': 'Manipulator',
  'nen.specialist': 'Specialist',
  'nen.transmuter': 'Transmuter',
  'nen.unknown': 'Not yet known',
  // Nen abilities (#923): the kind, the page and an ability's own page. No
  // ability's name is here: they reach a page with their records only.
  'nav.abilities': 'Abilities',
  'kind.ability': 'Ability',
  'character.abilities': 'Abilities',
  'abilities.title': 'Nen abilities',
  'abilities.count':
    '{count} Nen abilities, grouped by Nen type and listed in the order the story shows them. Abilities under fog do not show up in search.',
  'abilities.pageTitle': 'Nen abilities | {series} | Zero Spoiler',
  'abilities.pageDescription':
    'Hunter x Hunter Nen abilities, grouped by Nen type, each hidden until the episode where it is first shown.',
  'abilities.searchLabel': 'Search abilities',
  'abilities.searchClear': 'Clear search',
  'abilities.searchPlaceholder': 'Ability or character',
  'abilities.searchOpen': 'Search',
  'abilities.controls': 'Filters',
  'abilities.typeLegend': 'Nen type',
  'abilities.all': 'All',
  'abilities.shown': 'Showing {count} of {total} open abilities',
  'abilities.noMatch': 'No open ability matches “{query}”.',
  'abilities.noType': 'Type not told',
  'abilities.noTypeLede':
    'Abilities the story shows before it tells their Nen type.',
  'abilities.bandCount': '{count} abilities',
  'abilities.bandCountOne': '1 ability',
  'abilities.specimen': 'Ability {index}',
  'abilities.foggedTitle': '{count} under fog',
  'abilities.foggedTitleOne': '1 under fog',
  'abilities.foggedHint':
    'Their names and Nen types are hidden, so search does not find them. Move your bookmark forward to see them.',
  'abilities.allOpen': 'No ability is under fog.',
  'abilities.moreUsers': 'and {count} more characters who use it',
  'abilities.moreUsersOne': 'and 1 more character who uses it',
  'ability.opensAt.episode': 'First shown in episode {threshold}',
  'ability.opensAt.season': 'First shown in {threshold}',
  'ability.opensAt.chapter': 'First shown in chapter {threshold}',
  'ability.opensAt.book': 'First shown in book {book}, chapter {chapter}',
  'ability.foggedName': 'An ability under fog',
  'ability.foggedTitle': 'An ability under fog | {series} | Zero Spoiler',
  'ability.foggedDescription.episode':
    'A Hunter x Hunter Nen ability first shown in episode {threshold}. Set your bookmark to read this page.',
  'ability.foggedDescription.season':
    'A Hunter x Hunter Nen ability first shown in {threshold}. Set your bookmark to read this page.',
  'ability.foggedDescription.chapter':
    'A Hunter x Hunter Nen ability first shown in chapter {threshold}. Set your bookmark to read this page.',
  'ability.foggedDescription.book':
    'A Hunter x Hunter Nen ability first shown in book {book}, chapter {chapter}. Set your bookmark to read this page.',
  'ability.pageTitle': '{name} | {series} | Zero Spoiler',
  'ability.back': 'All Nen abilities',
  'ability.usersTitle': 'Who uses it',
  'ability.usersLede': 'The characters you have reached who use this ability.',
  'ability.usersNone': 'No character you have reached uses it.',
  'ability.notFoundTitle': 'Ability not found',
  'ability.notFoundBody':
    'There is no ability at this address. The Nen abilities page lists all of them.',
  'characters.bookLede':
    'Every character in the wiki, grouped by the arc they first appear in.',
  'dialog.saga': 'Arc · {name}',
  'onboarding.arcs': 'Arcs',
  'characters.sectionFogged': 'Arc under fog',
  'kind.arc': 'Arc',
  'places.allSagas': 'All sagas',
  'places.arc': 'Arc',
  'places.saga': 'Saga',
  'characters.count':
    '{count} characters, in the order they appear in the anime. Characters under fog do not show up in search.',
  'characters.featuredLede': 'The key characters of the story.',
  'credits.coverage':
    'No Hunter x Hunter entry has a documented source review yet, so none is listed below. Hunter x Hunter’s episode and chapter numbers are checked against the English Hunter x Hunter Wiki, and its Italian names against Italian Wikipedia.',
  'credits.otherTerms':
    'Facts and citations taken from a source do not grant permission to copy its prose, images or an entire compilation. Official titles and Hunter x Hunter material are not offered as project-owned content.',
  'credits.source.wiki-en':
    'English Hunter x Hunter Wiki contributors: source revision',
  'credits.source.wiki-it': 'Italian Wikipedia contributors: source revision',
  'credits.wikiEn': 'English Hunter x Hunter Wiki',
  'credits.wikiIt': 'Italian Wikipedia',
  'credits.wikiTerms':
    'The English Hunter x Hunter Wiki declares CC BY-SA 3.0 Unported for community text by default, and Italian Wikipedia declares CC BY-SA 4.0. Exceptions, imported material and images can have different terms. Both permit author attribution through links to the contributed articles.',
  'faq.animeA':
    'Both. You can count by anime episode, by season and episode, or by manga chapter. Every entry has an episode number and a chapter number. When the exact point is uncertain, the later one is used, so an entry is more likely to open late than early.',
  'faq.animeQ': 'Anime or manga?',
  'faq.bookmarkA':
    'In a cookie on this device. The server reads it before it builds the page, so entries past your bookmark are not in the page you receive. Without a bookmark, this page carries the Hunter Exam for the dial and nothing past it. There is no account and no tracking.',
  'legal.credits':
    'Hunter x Hunter was created by Yoshihiro Togashi. Credit for the 2011 anime: © POT (Yoshihiro Togashi) 1998-2011 © VAP・NTV・Madhouse/Shueisha for episodes 1–100, and © POT (Yoshihiro Togashi) 1998-2011 © VAP・NTV・Madhouse for episodes 101–148.',
  'onboarding.lede':
    'Move the dial through the Hunter Exam. Entries up to that point open, and the ones after it stay under fog. Once you set your bookmark, every page of the wiki works this way.',
  'onboarding.places': 'Places',
  'onboarding.tailTitle': 'After the Hunter Exam',
  'places.count':
    '{count} places, grouped by region. Each one opens at the episode where it first appears.',
  'places.pageDescription':
    'Hunter x Hunter places, grouped by region, each hidden until the episode where it first appears.',
  'site.description':
    'A Hunter x Hunter wiki that hides every character, arc and place you have not reached yet. Set the episode or chapter you are on and read up to there.',
} as const satisfies OwnCopy
