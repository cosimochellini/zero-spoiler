/**
 * The archive gate's server-only words (#791): what the copy canaries look
 * for, kept apart from `./archive-gate.mjs` so a table added here does not
 * grow the gate itself.
 */
import { importArchive } from './archive-loader.mjs'

/**
 * The words that stay on the server, under the folder or file that holds
 * them: every series' own copy, One Piece's faction labels and seas, and
 * Hunter x Hunter's group names.
 * @returns {Promise<Record<string, Record<string, Record<string, string>>>>} Each one's words, by locale.
 */
export async function serverCopies() {
  const [
    { COPIES },
    { FACTION_LABELS },
    { SEA_LABELS },
    { HUNTER_X_HUNTER_GROUPS },
  ] = await Promise.all([
    importArchive('server/copy.server.ts'),
    importArchive('i18n/dictionaries/one-piece/factions.ts'),
    importArchive('i18n/dictionaries/one-piece/seas.ts'),
    importArchive('i18n/dictionaries/hunter-x-hunter/groups.ts'),
  ])
  return {
    ...COPIES,
    'one-piece/factions': FACTION_LABELS,
    'one-piece/seas': SEA_LABELS,
    'hunter-x-hunter/groups': HUNTER_X_HUNTER_GROUPS,
  }
}
