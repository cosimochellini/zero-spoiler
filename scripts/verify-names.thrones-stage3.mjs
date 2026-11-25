/**
 * Game of Thrones' third-stage rows (#1626) for `verify-names.mjs`, kept apart
 * from `./verify-names.thrones.mjs` for the file-length cap. Each cast group's
 * filing child appends its block to both tables.
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

/** The list's TV cast table, which names its rows only in the table. */
const OTHERS = characters('Altri personaggi')

/**
 * Each third-stage character's Italian Wikipedia page, as `Page#Section` for a
 * section.
 * @type {Record<string, string>}
 */
export const THRONES_STAGE_3_TITLES = {
  // #1639, the third stage's Essos cast. Kraznys, Razdal, Mero and Prendahl
  // appear only in the list's TV cast table.
  'missandei': characters('Missandei'),
  'kraznys-mo-nakloz': OTHERS,
  'grey-worm': characters('Verme Grigio'),
  'grazdan-mo-eraz': OTHERS,
  'mero': OTHERS,
  'daario-naharis': characters('Daario Naharis'),
  'prendahl-na-ghezn': OTHERS,
  // #1634, the third stage's King's Landing cast.
  'olenna-tyrell': 'Casa Tyrell#Olenna Redwyne',
  'oberyn-martell': 'Casa Martell#Oberyn Martell',
  'ellaria-sand': 'Casa Martell#Ellaria Sand',
  // #1635, the third stage's Robb's war and Riverlands cast.
  'jeyne-westerling': 'Casa Stark#Jeyne Westerling',
  'willem-lannister': 'Casa Lannister#Willem Lannister',
  'martyn-lannister': 'Casa Lannister#Martyn Lannister',
  'lothar-frey': OTHERS,
  'walder-rivers': OTHERS,
  'roslin-frey': characters('Roslin Frey'),
  'ryman-frey': characters('Ryman Frey'),
  'aegon-frey': characters('Aegon Frey'),
}

/**
 * Third-stage names kept after a hand check found no Italian page; see
 * `NAMES_KEPT`.
 * @type {Record<string, string>}
 */
export const THRONES_STAGE_3_KEPT = {
  // #1639. Italian Wikipedia names Kraznys, Mero and Prendahl only in its TV
  // cast table, with no heading of their own; it names the Yunkish envoy
  // only as the show's Razdal mo Eraz, and the books' Grazdan stays as it is
  // until the Mondadori form is checked.
  'kraznys-mo-nakloz': 'Kraznys mo Nakloz',
  'grazdan-mo-eraz': 'Grazdan mo Eraz',
  'mero': 'Mero',
  'prendahl-na-ghezn': 'Prendahl na Ghezn',
  // #1634. Italian Wikipedia heads Olenna's entry by her maiden name,
  // Redwyne, and the record keeps the name both media use; it has no entry
  // for Margaery's three cousins, whose names stay as they are until the
  // Mondadori forms are checked.
  'olenna-tyrell': 'Olenna Tyrell',
  'megga-tyrell': 'Megga Tyrell',
  'alla-tyrell': 'Alla Tyrell',
  'elinor-tyrell': 'Elinor Tyrell',
  // #1635. Italian Wikipedia names Lothar Frey and Walder Rivers only in its
  // TV cast list, and has no entry for Rolph Spicer or Raynald Westerling,
  // whose names stay as they are until the Mondadori forms are checked.
  'lothar-frey': 'Lothar Frey',
  'walder-rivers': 'Walder Rivers',
  'rolph-spicer': 'Rolph Spicer',
  'raynald-westerling': 'Raynald Westerling',
}
