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
function characters(section) {
  return `${CHARACTERS}#${section}`
}

/** House Stark's servants, named in the section's prose. */
const STARK_SERVANTS = 'Casa Stark#Servitori di Casa Stark'

/** The list's TV cast table, which names its rows only in the table. */
const OTHERS = characters('Altri personaggi')

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
  'barristan-selmy': characters('Barristan Selmy'),
  'syrio-forel': characters('Syrio Forel'),
  'petyr-baelish': 'Petyr Baelish',
  'varys': 'Varys',
  'pycelle': characters('Pycelle'),
  'sandor-clegane': 'Sandor Clegane',
  'janos-slynt': characters('Janos Slynt'),
  'gendry': 'Casa Baratheon#Gendry',
  'gregor-clegane': characters('Gregor Clegane'),
  'loras-tyrell': 'Casa Tyrell#Loras Tyrell',
  'daenerys-targaryen': 'Daenerys Targaryen',
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
}
