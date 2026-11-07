/**
 * The archive gate's canaries for the bodies of power (#1087).
 *
 * A body's seat titles are a word or two ("Emperor"), never a sentence the
 * prose canary could read, and a body names its holders by record id, which
 * the client never holds. So a body module is looked for by the longest
 * hyphenated id among its holders, as a drawing module is by its keys. A
 * body seating no such id is an unreadable canary: the gate refuses to vouch
 * for it rather than passing it unchecked.
 */
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

/** A seat's holder, `value: 'edward-newgate'`, long enough to trust. */
const HOLDER_PATTERN = /value: '(?<id>[a-z\d-]{12,})'/gu

/**
 * One canary per body of power a series files under its `power/` folder;
 * none for a series with no such folder, which files no body.
 * @param {string} repositoryRoot The repository root.
 * @param {string} folder The series' folder under `src/data/series/`.
 * @returns {{file: string, phrase: null | string}[]} What to look for.
 */
export function powerCanaries(repositoryRoot, folder) {
  const dir = `src/data/series/${folder}/power`
  let names
  try {
    // fallow-ignore-next-line security-sink -- The root is the gate's directory or a test fixture; dir is a series folder named in the repository's own series list.
    names = readdirSync(path.join(repositoryRoot, dir))
  } catch {
    return []
  }

  return names
    .filter((name) => name.endsWith('.ts') && !name.endsWith('.test.ts'))
    .map((name) => {
      const file = `${dir}/${name}`
      // fallow-ignore-next-line security-sink -- As above: a module of that folder.
      const ids = readFileSync(path.join(repositoryRoot, file), 'utf8')
        .matchAll(HOLDER_PATTERN)
        .map((match) => match.groups?.['id'] ?? '')
        .filter((id) => id.includes('-'))
        .toArray()
        .toSorted((a, b) => b.length - a.length)

      return { file, phrase: ids[0] ?? null }
    })
}
