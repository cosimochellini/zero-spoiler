// The name tables `./verify-names.mjs` reads: the Italian page of a record
// whose English page does not link it, and the names kept after a hand
// check found no Italian page. Kept apart so the script stays readable as
// each arc adds its records here.

import { KAKIN_NAMES_KEPT } from './verify-names.kakin.mjs'
import {
  THRONES_ITALIAN_TITLES,
  THRONES_NAMES_KEPT,
} from './verify-names.thrones.mjs'

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
    // Kakin phase 1: Italian Wikipedia's named entries, read 2026-11-06.
    'beyond-netero': 'Personaggi di Hunter × Hunter#Beyond Netero',
    'benjamin-hui-guo-rou': 'Personaggi di Hunter × Hunter#Benjamin Hoicoro',
    'camilla-hui-guo-rou': 'Personaggi di Hunter × Hunter#Camilla Hoicoro',
    'zhang-lei-hui-guo-rou': 'Personaggi di Hunter × Hunter#Chowrai Hoicoro',
    'tserriednich-hui-guo-rou':
      'Personaggi di Hunter × Hunter# Tserriednich Hoicoro',
    'tubeppa-hui-guo-rou': 'Personaggi di Hunter × Hunter# Tsubeppa Hoicoro',
    'tyson-hui-guo-rou': 'Personaggi di Hunter × Hunter#Tyson Hoicoro',
    'luzurus-hui-guo-rou': 'Personaggi di Hunter × Hunter#Loozlus Hoicoro',
    'sale-sale-hui-guo-rou': 'Personaggi di Hunter × Hunter#Saresare Hoicoro',
    'halkenburg-hui-guo-rou':
      'Personaggi di Hunter × Hunter#Harkenburg Hoicoro',
    'kacho-hui-guo-rou': 'Personaggi di Hunter × Hunter#Kachow Hoicoro',
    'fugetsu-hui-guo-rou': 'Personaggi di Hunter × Hunter#Fugetsu Hoicoro',
    'momoze-hui-guo-rou': 'Personaggi di Hunter × Hunter#Momoze Hoicoro',
    'marayam-hui-guo-rou': 'Personaggi di Hunter × Hunter#Marayam Hoicoro',
    'woble-hui-guo-rou': 'Personaggi di Hunter × Hunter#Woble Hoicoro',
    'izunavi': 'Personaggi di Hunter × Hunter#Izunabi',
    'unma-hui-guo-rou': 'Personaggi di Hunter × Hunter#Unma Hoicoro',
    'duazul-hui-guo-rou': 'Personaggi di Hunter × Hunter#Duazul Hoicoro',
    'tang-zhao-li-hui-guo-rou':
      'Personaggi di Hunter × Hunter#Towchowrai Hoicoro',
    'katrono-hui-guo-rou': 'Personaggi di Hunter × Hunter#Katrono Hoicoro',
    'swinko-swinko-hui-guo-rou':
      'Personaggi di Hunter × Hunter#Swinko-swinko Hoicoro',
    'seiko-hui-guo-rou': 'Personaggi di Hunter × Hunter#Seiko Hoicoro',
    // Kakin phase 5: the same list, read 2026-11-06.
    'oito-hui-guo-rou': 'Personaggi di Hunter × Hunter#Oito Hoicoro',
    'morena': 'Personaggi di Hunter × Hunter#Morena Prudo',
    'onior': 'Personaggi di Hunter × Hunter#Onior Longbao',
    'zigg-zoldyck': 'Famiglia Zoldick#Zigg',
    'alluka-zoldyck': 'Famiglia Zoldick#Alluka',
    'amane': 'Famiglia Zoldick#Amane',
    'botobai-gigante': 'Associazione Hunter#Botobai Gigante',
    'bushidora-ambitious': 'Associazione Hunter#Bushidora Ambitious',
    'cheadle-yorkshire': 'Associazione Hunter#Cheadle Yorkshire',
    'cluck': 'Associazione Hunter#Clook',
    'gel': 'Associazione Hunter#Gell',
    'ginta': 'Associazione Hunter#Ginta',
    'kanzai': 'Associazione Hunter#Kanzai',
    'kasuga': 'Famiglia Zoldick#Kasuga',
    'loupe-highland': 'Associazione Hunter#Lupe Highland',
    'mizaistom-nana': 'Associazione Hunter#Mizaistom Nana',
    'pariston-hill': 'Associazione Hunter#Pariston Hill',
    'pyon': 'Associazione Hunter#Piyon',
    'saccho-kobayakawa': 'Associazione Hunter#Saccho Kobayakawa',
    'saiyu': 'Associazione Hunter#Saiyu',
    'teradein-neutral': 'Associazione Hunter#Teradain Neutral',
    'tsubone': 'Famiglia Zoldick#Tsubone',
    'ming-jol-ik': 'Personaggi di Hunter × Hunter#Digo Masadoru',
    'palm-siberia': 'Associazione Hunter#Pahm Sibelia',
    'knov': 'Associazione Hunter#Nobu',
    'morel-mackernasey': 'Associazione Hunter#Morau McCarnathy',
    'knuckle-bine': 'Associazione Hunter#Nackul Bain',
    'shoot-mcmahon': 'Associazione Hunter#Schult MacMahone',
    'gyro': 'Formichimere#Giairo',
    'republic-of-rokario': 'Geografia di Hunter × Hunter#Federazione di Mitene',
    'republic-of-east-gorteau':
      'Geografia di Hunter × Hunter#Repubblica del Golt Orientale',
    'neferpitou': 'Formichimere#Neferpito',
    'meruem': 'Formichimere#Meruem',
    'shaiapouf': 'Formichimere#Shawapf',
    'menthuthuyoupi': 'Formichimere#Montowtoyupih',
    'colt': 'Formichimere#Coluto',
    'peggy': 'Formichimere#Pegyi',
    'cheetu': 'Formichimere#Jeedo',
    'zazan': 'Formichimere#Zazan',
    'pike': 'Formichimere#Pike',
    'rammot': 'Formichimere#Rammot',
    'meleoron': 'Formichimere#Meleolon',
    'flutter': 'Formichimere#Flatta',
    'ikalgo': 'Formichimere#Calamaro',
    'welfin': 'Formichimere#Welfang',
    'bloster': 'Formichimere#Bloburda',
    'dwun': 'Personaggi di Hunter × Hunter#Doon',
    'list': 'Personaggi di Hunter × Hunter#List',
    'eta': 'Personaggi di Hunter × Hunter#Ether',
    'elena': 'Personaggi di Hunter × Hunter#Elena',
    'genthru': 'Personaggi di Hunter × Hunter#Gensul',
    'razor': 'Personaggi di Hunter × Hunter#Razer',
    'biscuit-krueger': 'Associazione Hunter#Biscuit Krueger',
    'binolt': 'Personaggi di Hunter × Hunter#Binolt',
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
  // Game of Thrones character's page is named in `./verify-names.thrones.mjs`.
  'game-of-thrones': THRONES_ITALIAN_TITLES,
}

/**
 * Names kept after a hand check found no Italian page to read them from. The
 * value is the name checked, so a record renamed since falls back to the rule.
 * @type {Record<string, string>}
 */
export const NAMES_KEPT = {
  ...THRONES_NAMES_KEPT,
  ...KAKIN_NAMES_KEPT,
  // Election names retained after checking Italian Wikipedia; dub not viewed.
  'beans': 'Beans',
  'cutie-beauty': 'Cutie Beauty',
  'hishita': 'Hishita',
  'ickshonpe-katocha': 'Ickshonpai Kattouger',
  'linne-horsdoeuvre': 'Rinne Hors D’Oeuvre',
  'mitsuba': 'Mitsuba',
  'muna': 'Muna',
  'nanika': 'Cosa',
  'yasuha': 'Yasuha',
  'sanbica-norton': 'Sanbika Norton',
  // No Italian Wikipedia entry; the 2011 dub is unviewed (#1023).
  'taragetter': 'Taragetter',
  // Chimera Ant phase 3 (#1022): no section of their own in the Italian
  // Hunter, Formichimere or character pages; dub unviewed. Komugi is an
  // entry of a list inside a section, Bizeff is "Bizef" in passing.
  'komugi': 'Komugi',
  'pell': 'Pell',
  'remora': 'Remora',
  'tsukuma': 'Tsukuma',
  'bihorn': 'Bihorn',
  'bizeff': 'Bizeff',
  // Kite's survey team: no section in the Italian Hunter or Formichimere
  // lists; dub unviewed (#1020).
  'spinner-clow': 'Spinner Clow',
  'banana-kavaro': 'Banana Kavaro',
  'monta-yuras': 'Monta Yuras',
  'stick-dinner': 'Stick Dinner',
  // Chimera Ant phase 2 (#1021): no section of their own in the Italian
  // Hunter, Formichimere or geography pages; dub unviewed. Kurt and Reina
  // are spelled so inside other sections, Hagya inside the one headed by the
  // name he takes later.
  'dr-lee': 'Dr. Lee',
  'lin-koshi': 'Lin Koshi',
  'podungo-lapoy': 'Podungo Lapoy',
  'wong': 'Wong',
  'kurt': 'Kurt',
  'reina': 'Reina',
  'haruna': 'Haruna',
  'pekuba': 'Pekuba',
  'balda': 'Balda',
  'yunju': 'Yunju',
  'baro': 'Baro',
  'baital': 'Baital',
  'hagya': 'Hagya',
  'doli-city': 'Doli City',
  'pata-city': 'Pata City',
  'tri-orb-hotel': 'Tri-Orb Hotel',
  // No Michael entry in the Italian character/Hunter lists; dub unviewed (#1032).
  'michael': 'Michael',
  // No Jitonoda entry in the Italian character/Hunter lists; dub unviewed (#1019).
  'jitonoda': 'Jitonoda',
  // No Jispa entry in either Italian character/Hunter list; dub unviewed (#1018).
  'jispa': 'Jispa',
  // No Kosofftro entry in the Italian character or Hunter lists (#1017).
  'kosofftro': 'Kosofftro',
  'jeitsari': 'Jeitsari',
  // No entry in the Italian character/Hunter lists; dub check pending (#1016).
  'puhat': 'Puhat',
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
  // Places are not read by this script yet (#1244). Italian Wikipedia
  // names the Greed Island capital only inside the Greed Island paragraph of
  // `Geografia di Hunter × Hunter` (revision 153230604), and List's entry in
  // `Personaggi di Hunter × Hunter` says the same (#1233).
  'limeiro': 'Riimeilo',
}
