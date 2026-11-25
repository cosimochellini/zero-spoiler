/**
 * Game of Thrones' third-stage tables for `verify-names.mjs` (#1626), kept
 * apart from `./verify-names.thrones.mjs` for the file-length cap. Each cast
 * group's filing child appends its rows here.
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

/**
 * Each third-stage character's Italian Wikipedia page, as `Page#Section`
 * for a section.
 * @type {Record<string, string>}
 */
export const THRONES_STAGE_3_TITLES = {
  // #1641, Bran's road and Theon.
  myranda: characters('Myranda'),
}

/**
 * Third-stage names kept after a hand check found no Italian page.
 * @type {Record<string, string>}
 */
export const THRONES_STAGE_3_KEPT = {}
