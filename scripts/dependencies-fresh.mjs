import { readFileSync } from 'node:fs'
import process from 'node:process'

/**
 * @param {string} file Path relative to this script.
 * @returns {object} The npm lockfile or package manifest.
 */
function read(file) {
  return JSON.parse(readFileSync(new URL(file, import.meta.url), 'utf8'))
}

function fresh() {
  const expected = read('../package-lock.json').packages
  const installed = read('../node_modules/.package-lock.json').packages

  // npm omits optional packages on unsupported platforms, including their
  // optional dependencies. Every installed entry must still match the lock.
  if (
    Object.entries(expected).some(
      ([name, entry]) =>
        name !== '' && !entry.optional && !Object.hasOwn(installed, name),
    )
  ) {
    return false
  }

  return Object.entries(installed).every(
    ([name, entry]) =>
      Object.hasOwn(expected, name)
      && expected[name].version === entry.version
      // npm's hidden lock can survive a manual change inside a package.
      && read(`../${name}/package.json`).version === entry.version,
  )
}

try {
  process.exitCode = Number(!fresh())
} catch {
  // An unreadable lock or package manifest also calls for a fresh install.
  process.exitCode = 1
}
if (process.exitCode === 1) {
  console.error('node_modules is stale: run npm ci')
}
