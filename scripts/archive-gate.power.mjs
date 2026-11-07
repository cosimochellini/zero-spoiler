/**
 * The archive gate's canaries for the bodies of power (#1087).
 *
 * A body's seat titles are a word or two ("Emperor"), never a sentence the
 * prose canary could read, and a body names its holders by record id, which
 * the client never holds. So a body module is looked for by the longest
 * hyphenated id among its holders, as a drawing module is by its keys, or,
 * when it seats none long enough (the World Government's `im` and `kong`),
 * by its longest seat title of twelve characters or more ("The Empty
 * Throne"). Every `.ts` module in `power/` but a `.test.ts` is a body, and
 * must hold one or the other: a body with neither is an unreadable canary,
 * and the gate refuses to vouch for it rather than passing it unchecked.
 */
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

/** A seat's holder, `value: 'rob-lucci'`, long enough to trust. */
const HOLDER_PATTERN = /value: '(?<id>[a-z\d-]{9,})'/gu

/** A seat's English title, `title: { en: 'The Empty Throne'`, as long. */
const TITLE_PATTERN = /title: \{ en: '(?<title>[^']{12,})'/gu

/**
 * The matches of a pattern's one group in a module, longest first.
 * @param {string} source The module's text.
 * @param {RegExp} pattern A global pattern with one named group.
 * @param {string} group The group's name.
 * @returns {string[]} What it matched.
 */
function longestFirst(source, pattern, group) {
  return source
    .matchAll(pattern)
    .map((match) => match.groups?.[group] ?? '')
    .toArray()
    .toSorted((a, b) => b.length - a.length)
}

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
  } catch (error) {
    // No `power/` folder: the series files no body. Anything else is a fault.
    if (error?.code === 'ENOENT') {
      return []
    }
    throw error
  }

  return names
    .filter((name) => name.endsWith('.ts') && !name.endsWith('.test.ts'))
    .map((name) => {
      const file = `${dir}/${name}`
      // fallow-ignore-next-line security-sink -- As above: a module of that folder.
      const source = readFileSync(path.join(repositoryRoot, file), 'utf8')
      const id = longestFirst(source, HOLDER_PATTERN, 'id').find((holder) =>
        holder.includes('-'),
      )
      const [title] = longestFirst(source, TITLE_PATTERN, 'title')

      return { file, phrase: id ?? title ?? null }
    })
}
