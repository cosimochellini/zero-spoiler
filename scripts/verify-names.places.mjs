// The places' rows of `./verify-names.tables.mjs`, which spreads them: kept
// apart for the file-length cap (#1244).

/** Italian Wikipedia's list of Hunter x Hunter's places. */
const GEOGRAPHY = 'Geografia di Hunter × Hunter'

/** Italian Wikipedia's list of the saga's places. */
const PLACES = 'Luoghi delle Cronache del ghiaccio e del fuoco'

/**
 * Places whose Italian page the English page does not link, or links
 * wrongly, by series; see `ITALIAN_TITLES`.
 * @type {Record<string, Record<string, string>>}
 */
export const PLACE_ITALIAN_TITLES = {
  'one-piece': {
    // The English page links no Italian page, or a missing one.
    'orange-town': 'Orange',
    'fish-man-district': 'Quartiere degli uomini-pesce',
    // The English page links the castle, not the island.
    'whole-cake-island': 'Whole Cake Island',
    // Sections of the island or country they belong to.
    'whisky-peak': 'Cactus#Whisky Peak',
    'upper-yard': 'Skypiea#Luoghi di Upper Yard',
    'angel-island': 'Skypiea#Luoghi di Angel Island',
    'flower-capital': 'Paese di Wa#Capitale fiorita',
  },
  'hunter-x-hunter': {
    'whale-island': `${GEOGRAPHY}#Isola Balena`,
    'dolle-harbor': `${GEOGRAPHY}#Porto di Doré`,
    'zaban-city': `${GEOGRAPHY}#Città di Zapan`,
    'republic-of-padokea': `${GEOGRAPHY}#Repubblica di Padokia`,
    'kukuroo-mountain': `${GEOGRAPHY}#Monte Kucruu`,
    'heavens-arena': `${GEOGRAPHY}#Arena Celeste`,
    'yorknew-city': `${GEOGRAPHY}#York Shin City`,
    'meteor-city': `${GEOGRAPHY}#Città delle Stelle Cadenti`,
    'republic-of-east-gorteau': `${GEOGRAPHY}#Repubblica del Golt Orientale`,
    'dark-continent': `${GEOGRAPHY}#Continente Oscuro`,
  },
  'game-of-thrones': {
    'haunted-forest': `${PLACES}#Foresta Stregata`,
    'winterfell': `${PLACES}#Grande Inverno`,
    'pentos': `${PLACES}#Pentos`,
    'kings-landing': `${PLACES}#Approdo del Re`,
    'the-wall': `${PLACES}#La Barriera`,
    'castle-black': "Guardiani della notte#Castello Nero (''Castle Black'')",
    'dothraki-sea': `${PLACES}#Mare Dothraki`,
    'red-keep': `${PLACES}#La Fortezza Rossa`,
    'vaes-dothrak': `${PLACES}#Vaes Dothrak`,
    'the-eyrie': `${PLACES}#Nido dell'Aquila`,
    'the-twins': `${PLACES}#Le Torri Gemelle`,
    'great-sept-of-baelor': `${PLACES}#Il Grande Tempio di Baelor`,
    'riverrun': `${PLACES}#Delta delle Acque`,
    'moles-town': `${PLACES}#Città della Talpa`,
    'moat-cailin': `${PLACES}#Moat Cailin`,
    'bear-island': `${PLACES}#Isola dell'Orso`,
    'pyke': `${PLACES}#Pyke`,
    'white-harbor': `${PLACES}#Porto Bianco`,
    'casterly-rock': `${PLACES}#Castel Granito`,
    'lannisport': `${PLACES}#Lannisport`,
    'harrenhal': `${PLACES}#Harrenhal`,
  },
}

/**
 * Place names kept after a hand check found no Italian page or section to
 * read them from; see `NAMES_KEPT`.
 * @type {Record<string, string>}
 */
export const PLACE_NAMES_KEPT = {
  // Game of Thrones. Italian Wikipedia's places page names Eastwatch and the
  // Neck in its prose (under La Barriera and Westeros), not in a section.
  'eastwatch': 'Forte Orientale',
  'the-neck': 'Incollatura',
  // The Trident, its Red Fork and the Tumblestone are named in the prose of
  // the page's Riverlands sections. The Fingers, the Golden Tooth and the Gods
  // Eye are not on the page: the books' Italian forms, the dub's unconfirmed
  // (owner, #1249).
  'the-trident': 'Tridente',
  'red-fork': 'Forca Rossa',
  'tumblestone': 'Tumblestone',
  'the-fingers': 'Dita',
  'golden-tooth': 'Dente d’Oro',
  'gods-eye': 'Occhio degli Dei',
  // One Piece: the Italian wiki's Erbaf page (revision 372881) names the
  // kingdom and the level in its prose, not in a section.
  'warland': 'Warland',
  'sun-world': 'Regno del Sole',
  // Hunter x Hunter. Italian Wikipedia names the Greed Island capital only
  // inside the Greed Island paragraph of `Geografia di Hunter × Hunter`
  // (revision 153230604), and List's entry in `Personaggi di Hunter × Hunter`
  // says the same (#1233).
  'limeiro': 'Riimeilo',
  // Italian Wikipedia names these only in prose (2026-11-13): Super's
  // entry and the Kakin entries of `Personaggi di Hunter × Hunter`, Rippo's
  // and Ging's entries of `Associazione Hunter`, and the York Shin City,
  // Federazione di Mitene and Repubblica del Golt Orientale sections of
  // `Geografia di Hunter × Hunter`.
  'zevil-island': 'Isola di Zebir',
  'trick-tower': 'Torre di Lotta',
  'southernpiece-auction-house': 'Sazan Piece',
  'republic-of-rokario': 'Repubblica di Rokario',
  'peijin': 'Peijin',
  'world-tree': 'Albero del Mondo',
  'black-whale': 'Black Whale',
  // Named so in the 2011 dub's title of episode 79, "Le ombre della NGL".
  'ngl': 'NGL',
  // Italian chapter titles and summaries of `Capitoli di Hunter × Hunter`.
  'antokiba': 'Antokiba',
  'masadora': 'Masadora',
  'soufrabi': 'Soufrabi',
  'aiai': 'Aiai',
  // No Italian page names them; dub unviewed. The palace's name joins the
  // chapter summaries' "palazzo reale" to Geografia's "Golt Orientale".
  'royal-palace-of-east-gorteau': 'Palazzo reale del Golt Orientale',
  'd2-manufacturing-plant': 'Fabbrica di D²',
  'chimera-ant-nest': 'Nido delle formichimere',
  'milsy-wetlands': 'Palude di Numere',
  'visca-forest-preserve': 'Riserva forestale di Visca',
  'split-mountain': 'Monte Spaccato',
  'hotel-beitacle': 'Hotel Beitacle',
  'lingon-airport': 'Aeroporto di Lingon',
  'cemetery-building': 'Cemetery Building',
  'shiso-tree': 'Albero Shiso',
  'dorias': 'Dorias',
  'mandai-city': 'Mandai City',
  'luonton-city': 'Luonton',
  'parasta-airport': 'Aeroporto di Parasta',
  'swardani-city': 'Swardani',
  'all-faiths-church': 'All-Faiths Church',
  'uga-forest': 'Uga Forest',
  // Game of Thrones: Italian Wikipedia names these only in prose or in a
  // bullet (`Luoghi delle Cronache del ghiaccio e del fuoco`, the Houses'
  // and characters' pages); `accampamento Lannister` is no proper name.
  'inn-at-the-crossroads': 'Locanda all’Incrocio',
  'darry': 'Darry',
  'lannister-camp': 'Accampamento Lannister',
  'lhazar': 'Lhazar',
  'wolfswood': 'Foresta del Lupo',
  'kingswood': 'Bosco del Re',
  'bloody-gate': 'Porta Insanguinata',
  // No Italian Wikipedia mention: the Italian Game of Thrones Wiki's page
  // "Città dell'Inverno" (revision 56441).
  'winter-town': 'Città dell’Inverno',
}
