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
 * @param {number} filed The archive pin.
 * @param {number} expected The pin from the editorial source table.
 * @param {number | undefined} printed The wiki page's own scene number.
 * @param {string} match The report's success label.
 * @returns {string} Whether both the pin and its scene reference agree.
 */
function pinVerdict(filed, expected, printed, match) {
  if (printed !== expected) {
    return 'unresolved'
  }
  return filed === expected ? match : 'pin mismatch'
}

/**
 * Ability names on this wiki usually redirect to a character's page.
 * Compare exact pins to the reviewed scene table and check its references.
 * The first-use evidence is reviewed in provenance, not inferred here.
 * @param {{id: string, revealedAtEpisode: number, revealedAtChapter: number}} record The ability and its filed pins.
 * @param {import('./wiki.mjs').Wiki} wiki The series' wiki.
 * @returns {Promise<{page?: string, wiki?: number, wikiEpisode?: number, verdict: string, episodeVerdict: string}>} The reviewed pins and their verdicts.
 */
export async function abilityReadingOf(record, wiki) {
  const pair = /** @type {Record<string, number[]>} */ (ABILITY_SCENES)[
    record.id
  ]
  if (pair === undefined) {
    return { verdict: 'unresolved', episodeVerdict: 'unresolved' }
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
    wiki: chapter,
    wikiEpisode: episode,
    verdict: pinVerdict(
      record.revealedAtChapter,
      chapter,
      wikiChapter,
      'equal',
    ),
    episodeVerdict: pinVerdict(
      record.revealedAtEpisode,
      episode,
      wikiEpisode,
      'ok',
    ),
  }
}
