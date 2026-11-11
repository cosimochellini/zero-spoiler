import { ABILITY_SCENES } from './verify-chapters.tables.mjs'
import { fetchPage } from './wiki.mjs'

/**
 * @param {import('./wiki.mjs').Page | undefined} page The scene page.
 * @param {RegExp} header The template field for its scene number.
 * @returns {number | undefined} The number printed on the page.
 */
function sceneNumber(page, header) {
  const digits = page?.wikitext.match(header)?.groups?.number
  return digits === undefined ? undefined : Number(digits)
}

/**
 * Ability names on this wiki usually redirect to a character's page.
 * Read the independently researched first-use scene in each medium.
 * @param {string} id The ability's archive id.
 * @param {import('./wiki.mjs').Wiki} wiki The series' wiki.
 * @returns {Promise<{page?: string, wiki?: number, wikiEpisode?: number}>} The numbers confirmed by the scene pages.
 */
export async function abilityReadingOf(id, wiki) {
  const pair = /** @type {Record<string, number[]>} */ (ABILITY_SCENES)[id]
  if (pair === undefined) {
    return {}
  }
  const [episode, chapter] = pair
  const [manga, anime] = await Promise.all([
    fetchPage(`Chapter ${chapter}`, wiki),
    fetchPage(`Episode ${episode} (2011)`, wiki),
  ])
  const wikiChapter = sceneNumber(
    manga,
    /^\|\s*Chapter\s*=\s*(?<number>\d+)/imu,
  )
  const wikiEpisode = sceneNumber(
    anime,
    /^\|\s*Episode\s*=\s*(?<number>\d+)/imu,
  )

  return {
    page: `Chapter ${chapter} + Episode ${episode} (2011)`,
    ...(wikiChapter !== undefined && { wiki: wikiChapter }),
    ...(wikiEpisode !== undefined && { wikiEpisode }),
  }
}
