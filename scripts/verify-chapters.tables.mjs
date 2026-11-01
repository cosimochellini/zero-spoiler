// The page table `./verify-chapters.mjs` reads: the wiki page of a record
// whose English name is not its page. Kept apart so the script stays
// readable as each arc adds its records here.

/**
 * Records whose English name is not their wiki page, by series. A list names
 * the pages of a paired record (two fish-men filed as one), whose chapter is
 * the later of the two.
 * @type {Record<string, Record<string, string | string[]>>}
 */
export const TITLES = {
  'one-piece': {
    'artificial-dragon-dragon-fruit': 'Artificial Devil Fruit',
    'cat-cat-fruit-ancient-model-sabre-tooth-tiger':
      'Neko Neko no Mi, Model: Saber Tiger',
    'dog-dog-fruit-mythical-model-nine-tailed-fox':
      'Inu Inu no Mi, Model: Kyubi no Kitsune',
    'egghead-island': 'Egghead',
    'fish-fish-fruit-mythical-model-azure-dragon': 'Uo Uo no Mi, Model: Seiryu',
    'kinemon': "Kin'emon",
    'kiwi-and-mozu': ['Kiwi', 'Mozu'],
    'lola': 'Lola (Zombie)',
    'ninjin-piiman-and-tamanegi': ['Ninjin', 'Piiman', 'Tamanegi'],
    'oimo-and-kashi': ['Oimo', 'Kashi'],
    'rock-and-scotch': ['Rock', 'Scotch'],
    'ryuma': 'Ryuma (Zombie)',
    'sodom-and-gomorrah': ['Sodom', 'Gomorrah'],
    'water-seven-arc': 'Water 7 Arc',
  },
  'hunter-x-hunter': {
    'gittarackur': 'Illumi Zoldyck',
    'illumi': 'Illumi Zoldyck',
    'killua': 'Killua Zoldyck',
    'hisoka': 'Hisoka Morow',
    'netero': 'Isaac Netero',
    'milluki': 'Milluki Zoldyck',
    'zeno': 'Zeno Zoldyck',
    'kalluto': 'Kalluto Zoldyck',
    'machi': 'Machi Komacine',
    'shizuku': 'Shizuku Murasaki',
    'feitan': 'Feitan Portor',
    'franklin': 'Franklin Bordeau',
    'nobunaga': 'Nobunaga Hazama',
    'phinks': 'Phinks Magcub',
    'bonolenov': 'Bonolenov Ndongo',
    'chrollo': 'Chrollo Lucilfer',
    // The wiki's arc titles say more than an arc's name may, since the name
    // is shown at every bookmark (#758): the archive's names are neutral.
    'election-arc': '13th Hunter Chairman Election arc',
    'kakin-arc': 'Succession Contest arc',
  },
  // A Game of Thrones record's English name is its Game of Thrones Wiki
  // page; this is its page on A Wiki of Ice and Fire where that differs, as
  // Robin Arryn's is Robert Arryn.
  'game-of-thrones': {
    'nymeria': 'Nymeria (direwolf)',
    'robin-arryn': 'Robert Arryn',
  },
}

/**
 * A Game of Thrones record's page on the Game of Thrones Wiki where its
 * English name is another page: a namesake's, or one that redirects to one.
 * @type {Record<string, string>}
 */
export const SHOW_TITLES = {
  'nymeria': 'Nymeria (direwolf)',
  'viserys-targaryen': 'Viserys Targaryen (son of Aerys II)',
}
