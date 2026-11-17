import { realpathSync } from 'node:fs'
import process from 'node:process'

/**
 * Whether Node was started on this module, so a script runs when called and
 * stays quiet when a test imports it. It compares the real path, not the one
 * typed: through a symlinked checkout the two differ, and a guard that
 * compares them as typed skips the script and exits 0.
 * @param {ImportMeta} meta The module's `import.meta`.
 * @returns {boolean} Whether the module is the entry point.
 */
export function isMain(meta) {
  return realpathSync(process.argv[1] ?? '.') === meta.filename
}
