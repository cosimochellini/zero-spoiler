// The name tables `./verify-names.mjs` reads: the Italian page of a record
// whose English page does not link it, and the names kept after a hand
// check found no Italian page. Kept apart so the script stays readable as
// each arc adds its records here.

/**
 * Records whose Italian page the English page does not link, or links
 * wrongly, by series. A list names the pages of a paired record.
 * @type {Record<string, Record<string, string | string[]>>}
 */
export const ITALIAN_TITLES = {
  'one-piece': {
    'buhichuck': 'Grunfchuck',
    'carne': 'Carne',
    'cerberus': 'Cerbero (spada)',
    'chimney': 'Chimney',
    'coribou': 'Coribou',
    'dosun': 'Sbam',
    'gerd': 'Gerd',
    'gyoro-nin-and-bao': ['Gyoro', 'Nin', 'Bao'],
    'hammond': 'Hammond',
    'hasami': 'Chelotto',
    'heracles': 'Hercules',
    'inuarashi': 'Cane-tempesta',
    'jorul': 'Jorl',
    'kikyo': 'Kikyo',
    'kiwi-and-mozu': ['Kiwi', 'Mozu'],
    'kozuki-sukiyaki': 'Kozuki Sukiyaki',
    'kurozumi-higurashi': 'Kurozumi Higurashi',
    'kurozumi-semimaru': 'Kurozumi Semimaru',
    'minotaurus': 'Minotauros',
    'mocha': 'Mocia',
    'mr-13': 'Mr. Thirteen',
    'rimoshifu-killingham': 'Rimoshifu Killingham',
    'risky-brothers': 'Risky',
    'rock-and-scotch': ['Rock', 'Scotch (cyborg)'],
    'ryuma': 'Shimotsuki Ryuma',
    // The disguise and the man are two records and one page.
    'tenguyama-hitetsu': 'Kozuki Sukiyaki',
    'terracotta': 'Terracotta',
  },
  // On Italian Wikipedia.
  'hunter-x-hunter': {
    'battera': 'Personaggi di Hunter × Hunter#Battera',
    'tsezguerra': 'Associazione Hunter#Tsezgerah',
    'gittarackur': 'Personaggi di Hunter × Hunter#Ghitarakur',
    'ponzu': 'Personaggi di Hunter × Hunter#Ponzu',
    'bourbon': 'Personaggi di Hunter × Hunter#Burbon',
    'bodoro': 'Personaggi di Hunter × Hunter#Bodoro',
    'pokkle': 'Associazione Hunter#Pockul',
    'todo': 'Personaggi di Hunter × Hunter#Todo',
    'geretta': 'Personaggi di Hunter × Hunter#Ghereta',
    'cherry': 'Personaggi di Hunter × Hunter#Cherry',
    'goz': 'Personaggi di Hunter × Hunter#Gozu',
    'siper': 'Personaggi di Hunter × Hunter#Super',
    'kyu': 'Personaggi di Hunter × Hunter#Kyu',
    'kenmi': 'Personaggi di Hunter × Hunter#Kenmi',
    'sommy': 'Personaggi di Hunter × Hunter#Somy',
    'illumi': 'Famiglia Zoldick#Illumi',
    'killua': 'Killua Zoldick',
    'zebro': 'Famiglia Zoldick#Zebro',
    'mike': 'Famiglia Zoldick#Cane da guardia: Miche',
    'seaquant': 'Famiglia Zoldick#Shikant',
    'canary': 'Famiglia Zoldick#Canaria',
    'gotoh': 'Famiglia Zoldick#Goto',
    'milluki': 'Famiglia Zoldick#Milki',
    'zeno': 'Famiglia Zoldick#Zeno',
    'silva': 'Famiglia Zoldick#Silva',
    'kalluto': 'Famiglia Zoldick#Carte',
    'kite': 'Associazione Hunter#Kaito',
    'hisoka': 'Hisoka Morou',
    'tonpa': 'Personaggi di Hunter × Hunter#Tonpa',
    'nicholas': 'Personaggi di Hunter × Hunter#Nicole',
    'satotz': 'Associazione Hunter#Satoshi',
    'hanzo': 'Associazione Hunter#Hanzo',
    'menchi': 'Associazione Hunter#Menci',
    'buhara': 'Associazione Hunter#Buhara',
    'netero': 'Associazione Hunter#Isaac Netero',
    'lippo': 'Associazione Hunter#Rippo',
    'gon-freecss': 'Gon Freecss',
    'kurapika': 'Kurapika Kurata',
    'mito-freecss': 'Personaggi di Hunter × Hunter#Myto Freecss',
    'zushi': 'Personaggi di Hunter × Hunter#Zooci',
    'wing': 'Associazione Hunter#Wing',
    'gido': 'Personaggi di Hunter × Hunter#Ghido',
    'sadaso': 'Personaggi di Hunter × Hunter#Sadaso',
    'riehlvelt': 'Personaggi di Hunter × Hunter#Liroubert',
    'kastro': 'Personaggi di Hunter × Hunter#Kastro',
    'melody': 'Associazione Hunter#Melody',
    'basho': 'Associazione Hunter#Basho',
    'baise': 'Associazione Hunter#Versé',
    'dalzollene': 'Personaggi di Hunter × Hunter#Dalzorne',
    'neon-nostrade': 'Personaggi di Hunter × Hunter#Neon Nostrad',
    'machi': 'Brigata Fantasma#Machi Komachine',
    'shizuku': 'Brigata Fantasma#Shizuku Murasaki',
    'uvogin': 'Brigata Fantasma#Uborghin',
    'feitan': 'Brigata Fantasma#Feitan Pohtoh',
    'franklin': 'Brigata Fantasma#Franklin Bordeaux',
    'nobunaga': 'Brigata Fantasma#Nobunaga Hazama',
    'phinks': 'Brigata Fantasma#Phinks Magkav',
    'shalnark': 'Brigata Fantasma#Shalnark',
    'light-nostrade': 'Personaggi di Hunter × Hunter#Light Nostrad',
    'owl': 'Personaggi di Hunter × Hunter#Civetta',
    'worm': 'Personaggi di Hunter × Hunter#Lombrico',
    'rabid-dog': 'Personaggi di Hunter × Hunter#Cane selvatico',
    'porcupine': 'Personaggi di Hunter × Hunter#Porcospino',
    'leech': 'Personaggi di Hunter × Hunter#Sanguisuga',
    'zepile': 'Personaggi di Hunter × Hunter#Sepail',
    'pakunoda': 'Brigata Fantasma#Pakunoda',
    'kortopi': 'Brigata Fantasma#Kortopi',
    'bonolenov': 'Brigata Fantasma#Bonolenov Ndongo',
    'chrollo': 'Brigata Fantasma#Quoll Lucifer',
  },
  // On Italian Wikipedia, which A Wiki of Ice and Fire does not link: every
  // Game of Thrones character's page is named here.
  'game-of-thrones': {
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
    'theon-greyjoy':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Theon Greyjoy',
    'luwin': 'Personaggi delle Cronache del ghiaccio e del fuoco#Luwin',
    'rodrik-cassel':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Rodrik Cassel',
    'old-nan': 'Personaggi delle Cronache del ghiaccio e del fuoco#Vecchia Nan',
    'hodor': 'Personaggi delle Cronache del ghiaccio e del fuoco#Hodor',
    'osha': 'Personaggi delle Cronache del ghiaccio e del fuoco#Osha',
    'mordane':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Septa Mordane',
    'jory-cassel':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Jory Cassel',
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
    'bronn': 'Personaggi delle Cronache del ghiaccio e del fuoco#Bronn',
    'shae': 'Personaggi delle Cronache del ghiaccio e del fuoco#Shae',
    'walder-frey':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Walder Frey',
    'ros': 'Personaggi delle Cronache del ghiaccio e del fuoco#Ros',
    'ilyn-payne':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Ilyn Payne',
    'barristan-selmy':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Barristan Selmy',
    'syrio-forel':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Syrio Forel',
    'petyr-baelish': 'Petyr Baelish',
    'varys': 'Varys',
    'pycelle': 'Personaggi delle Cronache del ghiaccio e del fuoco#Pycelle',
    'sandor-clegane': 'Sandor Clegane',
    'janos-slynt':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Janos Slynt',
    'gendry': 'Casa Baratheon#Gendry',
    'gregor-clegane':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Gregor Clegane',
    'loras-tyrell': 'Casa Tyrell#Loras Tyrell',
    'daenerys-targaryen': 'Daenerys Targaryen',
    'viserys-targaryen':
      'Casa Targaryen#Re Viserys III Targaryen "Il Re Mendicante"',
    'drogo': 'Dothraki#Drogo',
    'jorah-mormont': 'Jorah Mormont',
    'illyrio-mopatis':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Illyrio Mopatis',
    'irri': 'Dothraki#Irri',
    'doreah': 'Personaggi delle Cronache del ghiaccio e del fuoco#Doreah',
    'rakharo': 'Dothraki#Rakharo',
    'mirri-maz-duur':
      'Personaggi delle Cronache del ghiaccio e del fuoco#Mirri Maz Durr',
  },
}

/**
 * Names kept after a hand check found no Italian page to read them from. The
 * value is the name checked, so a record renamed since falls back to the rule.
 * @type {Record<string, string>}
 */
export const NAMES_KEPT = {
  // No entry in the Italian character/Hunter lists; dub check pending (#1016).
  'puhat': 'Puhat',
  // Game of Thrones. Italian Wikipedia names each direwolf only in its
  // owner's entry (the page listed in `ITALIAN_TITLES`), in prose.
  'grey-wind': 'Vento Grigio',
  'lady-direwolf': 'Lady',
  'nymeria': 'Nymeria',
  'summer-direwolf': 'Estate',
  'shaggydog': 'Cagnaccio',
  'ghost-direwolf': 'Spettro',
  // Its entries are headed by maiden names (Catelyn Tully, Lysa Tully); the
  // show calls both by their married names.
  'catelyn-stark': 'Catelyn Stark',
  'lysa-arryn': 'Lysa Arryn',
  // The books' list writes "Mirri Maz Durr"; the show's cast list on
  // Italian Wikipedia writes "Mirri Maz Duur".
  'mirri-maz-duur': 'Mirri Maz Duur',
  // The page of the people they lead or belong to writes them so: Shandia,
  // Vegapunk (Satelliti), Serafini, Kurozumi Kanjuro.
  'atlas': 'Atlas',
  'edison': 'Edison',
  'kazenbo': 'Kazenbo',
  'lilith': 'Lilith',
  'pythagoras': 'Pythagoras',
  's-bear': 'S-Bear',
  's-hawk': 'S-Hawk',
  's-shark': 'S-Shark',
  's-snake': 'S-Snake',
  'shaka': 'Shaka',
  'shandia-chief': 'Capo degli Shandia',
  'york': 'York',
  // Hunter x Hunter. Italian Wikipedia's character pages write him "Jin",
  // the manga's name; the 2011 dub's is "Ging", in the Italian title of its
  // episode 37, "Ging e Gon" (`Episodi di Hunter × Hunter (serie animata
  // 2011)`).
  'ging-freecss': 'Ging Freecss',
  // Italian Wikipedia has no entry for these Nostrade bodyguards (#900);
  // keep the English forms pending a 2011 dub check.
  'squala': 'Squala',
  'shachmono-tocino': 'Shachmono Tocino',
  'ivlenkov': 'Ivlenkov',
  'linssen': 'Linssen',
  'zenji': 'Zenji',
  'eliza': 'Eliza',
  // Italian Wikipedia's entry is the manga's "Leolio Paladiknight", with a
  // note that the Italian anime says "Leorio" (`Personaggi di Hunter ×
  // Hunter`, section `Leolio Paladiknight`).
  'leorio-paradinight': 'Leorio',
  // Associazione Hunter#Rippo calls him Johnes lo Smembratore.
  'johness': 'Johnes',
  // Italian Wikipedia has no entry for these Trick Tower prisoners or
  // Togari; keep the English forms pending a 2011 dub check (#760).
  'bendot': 'Bendot',
  'sedokan': 'Sedokan',
  'majtani': 'Majtani',
  'leroute': 'Leroute',
  'togari': 'Togari',
  // No Italian page names them: the English name stands.
  'masta': 'Masta',
  'katzo': 'Katzo',
  'khara': 'Khara',
  // Italian Wikipedia lists the other Zevil applicants but not these (#833).
  'agon': 'Agon',
  'ryu': 'Ryu',
  'shishito': 'Shishito',
  // Italian Wikipedia's Fratelli Amori entry names all three in its body.
  'amori': 'Amori',
  'umori': 'Umori',
  'imori': 'Imori',
  'kiriko': 'Kiriko',
  // No Italian Wikipedia page names the tour guide.
  'coco-loo': 'Coco Loo',
  // No Italian Wikipedia entry names the foxbear; retain the English name.
  'kon': 'Kon',
}
