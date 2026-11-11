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
    'beans': 'Mamen Beans',
    'shiso-tree': 'Greed Island Starting Point',
    'world-tree': 'World Trees',
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
    // Kakin phase 5 (#1138): filed under the name said in chapters 401–420.
    'balsamilco': 'Balsamilco Might',
    'hinrigh': 'Hinrigh Biganduffno',
    'morena': 'Morena Prudo',
    'onior': 'Onior Longbao',
    // No page of its own: the Meteor City page describes the church (#1137).
    'all-faiths-church': 'Meteor City',
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

// The reviewed first-use pins. See the scene evidence in the Nen inventory.
export const ABILITY_SCENES = {
  'battle-waltz': [29, 49],
  'tornado-top': [30, 50],
  'shotgun-blues': [34, 58],
  'tiger-bite-fist': [31, 53],
  'aura-burst': [34, 59],
  'nen-stitches': [32, 55],
  'bungee-gum': [32, 54],
  'texture-surprise': [32, 54],
  'eleven-black-children': [39, 67],
  'instant-lover': [39, 68],
  'great-hiker': [40, 68],
  'dowsing-chain': [40, 68],
  'lovely-ghostwriter': [41, 71],
  'double-machine-gun': [43, 73],
  'blinky': [43, 73],
  'big-bang-impact': [44, 76],
  'chain-jail': [44, 77],
  'fun-fun-cloth': [45, 77],
  'emperor-time': [47, 83],
  'holy-chain': [47, 84],
  'judgment-chain': [47, 84],
  'skill-hunter': [51, 97],
  'indoor-fish': [51, 97],
  'dragon-head': [52, 99],
  'dragon-lance': [52, 99],
  'black-voice': [53, 98],
  'gallery-fake': [53, 100],
  'memory-bomb': [56, 112],
}

/**
 * Records kept below the wiki's first episode after a hand check found the
 * wiki late: it dates a first appearance the archive has an earlier, named
 * sighting for. The value is the episode checked, so a record moved since
 * falls back to the rule.
 * @type {Record<string, number>}
 */
export const EPISODE_KEPT = {
  // Episode 1's opening narration names him over his execution (chapter 1,
  // page 1); the wiki dates his first flashback, episode 48.
  'gold-roger': 1,
  // Pouf names him in episode 86 (chapter 202), before he hatches; the wiki
  // dates his first sight, episode 88 (#1021).
  'menthuthuyoupi': 86,
}
