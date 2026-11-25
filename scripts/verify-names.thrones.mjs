/**
 * Game of Thrones' tables for `verify-names.mjs`, kept apart from the other
 * series' in `./verify-names.tables.mjs` for the file-length cap.
 */

/** Italian Wikipedia's list of the saga's characters. */
const CHARACTERS = 'Personaggi delle Cronache del ghiaccio e del fuoco'

/**
 * A section of the characters' list.
 * @param {string} section The section's heading.
 * @returns {string} The page and the section, as `Page#Section`.
 */
export function characters(section) {
  return `${CHARACTERS}#${section}`
}

/** House Stark's servants, named in the section's prose. */
const STARK_SERVANTS = 'Casa Stark#Servitori di Casa Stark'

/**
 * A section of the Night's Watch's page.
 * @param {string} section The section's heading.
 * @returns {string} The page and the section, as `Page#Section`.
 */
export function watch(section) {
  return `Guardiani della notte#${section}`
}

/** Daenerys's own page, which also names her three dragons. */
const DAENERYS = 'Daenerys Targaryen'

/** The list's TV cast table, which names its rows only in the table. */
export const OTHERS = characters('Altri personaggi')

/** Barristan Selmy's section, which also names Belwas and Arstan in its prose. */
const SELMY = characters('Barristan Selmy')

/**
 * Each character's Italian Wikipedia page, as `Page#Section` for a section.
 * @type {Record<string, string>}
 */
export const THRONES_ITALIAN_TITLES = {
  'eddard-stark': 'Eddard Stark',
  'catelyn-stark': 'Catelyn Stark',
  'robb-stark': 'Casa Stark#Robb Stark',
  'sansa-stark': 'Sansa Stark',
  'arya-stark': 'Arya Stark',
  'bran-stark': 'Bran Stark',
  'rickon-stark': 'Casa Stark#Rickon Stark',
  'jon-snow': 'Jon Snow',
  'benjen-stark': 'Casa Stark#Benjen Stark',
  'grey-wind': 'Casa Stark#Robb Stark',
  'lady-direwolf': 'Sansa Stark',
  'nymeria': 'Arya Stark',
  'summer-direwolf': 'Bran Stark',
  'shaggydog': 'Casa Stark#Rickon Stark',
  'ghost-direwolf': 'Jon Snow',
  'theon-greyjoy': characters('Theon Greyjoy'),
  'luwin': characters('Luwin'),
  'rodrik-cassel': characters('Rodrik Cassel'),
  'old-nan': characters('Vecchia Nan'),
  'hodor': characters('Hodor'),
  'osha': characters('Osha'),
  'mordane': characters('Septa Mordane'),
  'jory-cassel': characters('Jory Cassel'),
  'jeor-mormont': 'Guardiani della notte#Jeor Mormont',
  'aemon': 'Guardiani della notte#Maestro Aemon',
  'samwell-tarly': 'Guardiani della notte#Samwell Tarly',
  'alliser-thorne': 'Guardiani della notte#Alliser Thorne',
  'yoren': 'Guardiani della notte#Yoren',
  'cersei-lannister': 'Cersei Lannister',
  'jaime-lannister': 'Jaime Lannister',
  'tyrion-lannister': 'Tyrion Lannister',
  'tywin-lannister': 'Casa Lannister#Tywin Lannister',
  'joffrey-baratheon': 'Casa Baratheon#Re Joffrey I Baratheon',
  'myrcella-baratheon': 'Casa Baratheon#Myrcella Baratheon',
  'tommen-baratheon': 'Casa Baratheon#Re Tommen I Baratheon',
  'robert-baratheon': 'Casa Baratheon#Re Robert I Baratheon',
  'renly-baratheon': 'Casa Baratheon#Renly Baratheon',
  'lysa-arryn': 'Casa Arryn#Lysa Tully',
  'robin-arryn': 'Casa Arryn#Robin Arryn',
  'bronn': characters('Bronn'),
  'shae': characters('Shae'),
  'walder-frey': characters('Walder Frey'),
  'ros': characters('Ros'),
  'ilyn-payne': characters('Ilyn Payne'),
  'barristan-selmy': SELMY,
  'syrio-forel': characters('Syrio Forel'),
  'petyr-baelish': 'Petyr Baelish',
  'varys': 'Varys',
  'pycelle': characters('Pycelle'),
  'sandor-clegane': 'Sandor Clegane',
  'janos-slynt': characters('Janos Slynt'),
  'gendry': 'Casa Baratheon#Gendry',
  'gregor-clegane': characters('Gregor Clegane'),
  'loras-tyrell': 'Casa Tyrell#Loras Tyrell',
  'daenerys-targaryen': DAENERYS,
  'viserys-targaryen':
    'Casa Targaryen#Re Viserys III Targaryen "Il Re Mendicante"',
  'drogo': 'Dothraki#Drogo',
  'jorah-mormont': 'Jorah Mormont',
  'illyrio-mopatis': characters('Illyrio Mopatis'),
  'irri': 'Dothraki#Irri',
  'doreah': characters('Doreah'),
  'rakharo': 'Dothraki#Rakharo',
  'mirri-maz-duur': characters('Mirri Maz Durr'),
  'hullen': STARK_SERVANTS,
  'jeyne-poole': characters('Jeyne Poole'),
  'mikken': STARK_SERVANTS,
  'hallis-mollen': STARK_SERVANTS,
  'stiv': characters('Stiv'),
  'wallen': characters('Wellen'),
  'greatjon-umber': OTHERS,
  'smalljon-umber': OTHERS,
  'rickard-karstark': OTHERS,
  'roose-bolton': characters('Roose Bolton'),
  'galbart-glover': characters('Galbart Glover'),
  'robett-glover': OTHERS,
  'maege-mormont': characters('Maege Mormont'),
  'dacey-mormont': characters('Dacey Mormont'),
  'wendel-manderly': characters('Wyman Manderly'),
  'marillion': characters('Marillion'),
  'willis-wode': characters('Willis Wode'),
  'donnel-waynwood': characters('Donnel Waynwood'),
  'nestor-royce': characters('Nestor Royce'),
  'mya-stone': 'Casa Baratheon#Mya Stone',
  'vardis-egen': characters('Vardis Egen'),
  'mord': characters('Mord'),
  'lyn-corbray': characters('Lyn Corbray'),
  'anya-waynwood': characters('Anya Waynwood'),
  'shagga': OTHERS,
  'timett': characters('Barbari delle montagne'),
  'chella': characters('Barbari delle montagne'),
  'meryn-trant': characters('Meryn Trant'),
  'boros-blount': characters('Boros Blount'),
  'mandon-moore': characters('Mandon Moore'),
  'arys-oakheart': characters('Arys Oakheart'),
  'lancel-lannister': 'Casa Lannister#Lancel Lannister',
  'dontos-hollard': characters('Dontos Hollard'),
  'tobho-mott': characters('Tobho Mott'),
  'mhaegen': OTHERS,
  'vayon-poole': STARK_SERVANTS,
  'tomard': STARK_SERVANTS,
  'harwin': STARK_SERVANTS,
  'alyn': STARK_SERVANTS,
  'beric-dondarrion': characters('Beric Dondarrion'),
  'thoros-of-myr': characters('Thoros di Myr'),
  'balon-swann': characters('Balon Swann'),
  'robar-royce': characters('Robar Royce'),
  'yohn-royce': characters('Yohn Royce'),
  'jason-mallister': characters('Jason Mallister'),
  'kevan-lannister': 'Casa Lannister#Kevan Lannister',
  'addam-marbrand': 'Casa Lannister#Casate fedeli',
  'podrick-payne': characters('Podrick Payne'),
  'stevron-frey': characters('Stevron Frey'),
  'edmure-tully': 'Casa Tully#Edmure Tully',
  'hoster-tully': 'Casa Tully#Hoster Tully',
  'brynden-tully': 'Casa Tully#Brynden Tully',
  'hot-pie': characters('Tabella 2A: stagioni 1-3'),
  'lommy': OTHERS,
  'jaqen-hghar':
    "Personaggi delle Cronache del ghiaccio e del fuoco#Jaqen H'ghar",
  'rorge': characters('Rorge'),
  'biter': characters('Mordente'),
  'will': watch('Will'),
  'gared': watch('Gared'),
  'waymar-royce': watch('Waymar Royce'),
  'grenn': watch('Grenn'),
  'pypar': watch('Pyp'),
  'rast': watch('Rast'),
  'dareon': watch('Dareon'),
  'halder': watch('Halder'),
  'todder': watch('Todder'),
  'othell-yarwyck': watch('Othell Yarwyck'),
  'bowen-marsh': watch('Bowen Marsh'),
  'jaremy-rykker': watch('Jaremy Rykker'),
  'donal-noye': watch('Donal Noye'),
  'chett': watch('Chett'),
  'qotho': 'Dothraki#Qotho',
  'cohollo': 'Dothraki#Cohollo',
  'haggo': 'Dothraki#Haggo',
  'jhiqui': 'Dothraki#Jhiqui',
  'aggo': 'Dothraki#Aggo',
  'jhogo': 'Dothraki#Jhogo',
  'quaro': 'Dothraki#Quaro',
  'mago': 'Dothraki#Mago',
  'eroeh': 'Dothraki#Jhaqo',
  // #1463, the second stage's King's Landing and Blackwater cast.
  'daisy': OTHERS,
  'hallyne': OTHERS,
  'lollys-stokeworth': characters('Lollys Stokeworth'),
  'osmund-kettleblack': characters('Osmund Kettleblack'),
  'alayaya': characters('Chataya'),
  'garlan-tyrell': 'Casa Tyrell#Garlan Tyrell',
  // #1464, Stannis, Renly and the stormlands.
  'stannis-baratheon': 'Casa Baratheon#Stannis Baratheon',
  'melisandre': characters('Melisandre di Asshai'),
  'davos-seaworth': characters('Davos Seaworth'),
  'cressen': characters('Maestro Cressen'),
  'matthos-seaworth': OTHERS,
  'salladhor-saan': characters('Salladhor Saan'),
  'selyse-baratheon': characters('Selyse Florent'),
  'shireen-baratheon': 'Casa Baratheon#Shireen Baratheon',
  'brienne-of-tarth': characters('Brienne di Tarth'),
  'margaery-tyrell': 'Casa Tyrell#Margaery Tyrell',
  'mace-tyrell': 'Casa Tyrell#Mace Tyrell',
  // #1465, the second stage's Riverlands, Harrenhal and Robb's war cast.
  'alton-lannister': characters('Alton Lannister'),
  'talisa-maegyr': characters('Talisa Maegyr'),
  'vargo-hoat': characters('Vargo Hoat'),
  'amory-lorch': OTHERS,
  'polliver': OTHERS,
  'cleos-frey': 'Casa Lannister#Genna Lannister',
  // #1466, the second stage's Winterfell and Iron Islands cast.
  'balon-greyjoy': 'Casa Greyjoy#Balon Greyjoy',
  'asha-greyjoy': 'Casa Greyjoy#Asha Greyjoy',
  'aeron-greyjoy': 'Casa Greyjoy#Aeron Greyjoy',
  'victarion-greyjoy': 'Casa Greyjoy#Victarion Greyjoy',
  'dagmer': OTHERS,
  'black-lorren': OTHERS,
  'farlen': STARK_SERVANTS,
  'meera-reed': characters('Meera Reed'),
  'jojen-reed': characters('Jojen Reed'),
  'ramsay-snow': characters('Ramsay Bolton'),
  'wyman-manderly': characters('Wyman Manderly'),
  // #1467, the second stage's Wall and beyond-the-Wall cast.
  'eddison-tollett': watch('Eddison Tollett'),
  'craster': characters('Craster'),
  'gilly': characters('Gilly'),
  'qhorin-halfhand': watch('Qhorin il monco'),
  'ygritte': characters('Ygritte'),
  // #1468, the second stage's Essos and Qarth cast.
  'kovarro': characters('Kovarro'),
  'xaro-xhoan-daxos': characters('Xaro Xhoan Daxos'),
  'pyat-pree': OTHERS,
  'quaithe': OTHERS,
  'drogon': DAENERYS,
  'rhaegal': DAENERYS,
  'viserion': DAENERYS,
  'strong-belwas': SELMY,
  // The owner's rulings of 2026-11-22: Arstan Barbabianca, named in prose.
  'arstan-whitebeard': SELMY,
}

/**
 * Names kept after a hand check found no Italian page to read them from;
 * see `NAMES_KEPT`.
 * @type {Record<string, string>}
 */
export const THRONES_NAMES_KEPT = {
  // Italian Wikipedia names each direwolf only in its
  // owner's entry (the page listed in `ITALIAN_TITLES`), in prose.
  'grey-wind': 'Vento Grigio',
  'lady-direwolf': 'Lady',
  'nymeria': 'Nymeria',
  'summer-direwolf': 'Estate',
  'shaggydog': 'Cagnaccio',
  'ghost-direwolf': 'Spettro',
  // #1006. Italian Wikipedia names these only inside a
  // group section (the Starks' servants, the mountain clans, Tywin's
  // bannermen, Wyman Manderly's entry) or in its TV cast tables ("Altri
  // personaggi", "Tabella 2A"), whose heading is not the name.
  'hullen': 'Hullen',
  'mikken': 'Mikken',
  'hallis-mollen': 'Hallis Mollen',
  'vayon-poole': 'Vayon Poole',
  'tomard': 'Tomard',
  'harwin': 'Harwin',
  'greatjon-umber': 'Greatjon Umber',
  'smalljon-umber': 'Smalljon Umber',
  'rickard-karstark': 'Rickard Karstark',
  'robett-glover': 'Robett Glover',
  'wendel-manderly': 'Wendel Manderly',
  'shagga': 'Shagga',
  'timett': 'Timmet',
  'chella': 'Chella',
  'mhaegen': 'Mhaegen',
  'addam-marbrand': 'Addam Marbrand',
  'hot-pie': 'Frittella',
  'lommy': 'Lommy Maniverdi',
  // No Italian Wikipedia entry: the Italian Game of Thrones Wiki on Fandom
  // names them so (owner, #1006).
  'mycah': 'Mycah',
  'hugh-of-the-vale': 'Hugh della Valle',
  'masha-heddle': 'Masha Heddle',
  // Its entries are headed by maiden names (Catelyn Tully, Lysa Tully); the
  // show calls both by their married names.
  'catelyn-stark': 'Catelyn Stark',
  'lysa-arryn': 'Lysa Arryn',
  // The books' list writes "Mirri Maz Durr"; the show's cast list on
  // Italian Wikipedia writes "Mirri Maz Duur".
  'mirri-maz-duur': 'Mirri Maz Duur',
  // #1007. Italian Wikipedia has no entry for these two: Jafer Flowers's name
  // is the Italian Game of Thrones Wiki's, and Othor's stays as it is.
  'othor': 'Othor',
  'jafer-flowers': 'Jafer Flowers',
  // #1008. Italian Wikipedia names her inside Jhaqo’s section, with no heading of her own.
  'eroeh': 'Eroeh',
  // #1463. Italian Wikipedia names Daisy and Hallyne only in its TV cast
  // list and Alayaya inside Chataya's section; it has no entry for Jacelyn
  // Bywater, whose name stays as it is until the Mondadori form is checked.
  'daisy': 'Daisy',
  'hallyne': 'Hallyne',
  'alayaya': 'Alayaya',
  'jacelyn-bywater': 'Jacelyn Bywater',
  // #1464. Italian Wikipedia files Selyse under her maiden name, Florent,
  // and the record keeps the show's; it names Matthos only in the TV cast
  // list and has no entry for Cortnay Penrose, whose name stays as it is
  // until the Mondadori form is checked.
  'selyse-baratheon': 'Selyse Baratheon',
  'matthos-seaworth': 'Matthos Seaworth',
  'cortnay-penrose': 'Cortnay Penrose',
  // #1465. Italian Wikipedia names Amory Lorch and Polliver only in its TV
  // cast list and Cleos Frey inside Genna Lannister's section; it has no
  // entry for the Tickler, Chiswyck or Weese, whose names stay as they are
  // until the dub and Mondadori forms are checked.
  'amory-lorch': 'Amory Lorch',
  'polliver': 'Polliver',
  'cleos-frey': 'Cleos Frey',
  'tickler': 'Tickler',
  'chiswyck': 'Chiswyck',
  'weese': 'Weese',
  // #1466. Italian Wikipedia names Dagmer and Lorren only in its TV cast
  // list, Farlen inside the Starks' servants and Ramsay under his later name
  // (Ramsay Bolton, "nato Snow"); it has no entry for the book-only Wex
  // Pyke, the two Walder Freys and Donella Hornwood, whose names stay as
  // they are until the Mondadori forms are checked.
  'dagmer': 'Dagmer',
  'black-lorren': 'Black Lorren',
  'farlen': 'Farlen',
  'ramsay-snow': 'Ramsay Snow',
  'wex-pyke': 'Wex Pyke',
  'big-walder-frey': 'Big Walder Frey',
  'little-walder-frey': 'Little Walder Frey',
  'donella-hornwood': 'Donella Hornwood',
  // #1467. No Italian Wikipedia entry: the Italian Game of Thrones Wiki's
  // Qhorin page keeps Stonesnake, Ebben and Dalbridge as they are, and the
  // other three book-only rangers' names stay as they are until the
  // Mondadori forms are checked.
  'stonesnake': 'Stonesnake',
  'ebben': 'Ebben',
  'dalbridge': 'Dalbridge',
  'thoren-smallwood': 'Thoren Smallwood',
  'jarman-buckwell': 'Jarman Buckwell',
  'mallador-locke': 'Mallador Locke',
  // Italian Wikipedia heads his entry "Rattleshirt", the books' nickname, and
  // names him "Lord delle Ossa" only in its prose; both media call him the
  // Lord of Bones, and the Italian Game of Thrones Wiki opens his page so.
  'lord-of-bones': 'Lord delle Ossa',
  // #1468. Italian Wikipedia has no entry for Malakho, a rider of the show
  // alone; it names Pyat Pree and Quaithe only in its TV cast list, the
  // dragons in Daenerys's page and Belwas il Forte in Barristan Selmy's
  // section, with no heading of their own.
  'malakho': 'Malakho',
  'pyat-pree': 'Pyat Pree',
  'quaithe': 'Quaithe',
  'drogon': 'Drogon',
  'rhaegal': 'Rhaegal',
  'viserion': 'Viserion',
  'strong-belwas': 'Belwas il Forte',
  // Named in the same section's prose, with no heading of his own.
  'arstan-whitebeard': 'Arstan Barbabianca',
}
