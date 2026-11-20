// Pins wiki revisions into `docs/content-provenance/sources.json`:
// `npm run provenance:pin -- --series <slug> [--wiki books] "Title" ["Title" …] [--dry-run]`.
// A title already pinned from the series' wiki keeps its revision; any other
// is read at its latest revision and appended, never rewriting an entry. Each
// title prints its key and the cached wikitext to read.
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { parseArgs } from 'node:util'

import { ROOT, seriesOrExit } from './archive-loader.mjs'
import { isMain } from './is-main.mjs'
import { cached, wikiOf } from './wiki.mjs'

// fallow-ignore-next-line security-sink -- ROOT is this repository's absolute path; the rest is a literal.
const MANIFEST = path.join(ROOT, 'docs', 'content-provenance', 'sources.json')

/** The query of a pinned revision, missing only `revids=` or `titles=`. */
const PARAMETERS = new URLSearchParams({
  action: 'query',
  prop: 'revisions',
  rvprop: 'ids|timestamp|content',
  rvslots: 'main',
  format: 'json',
  formatversion: '2',
})
const QUERY = `?${PARAMETERS.toString()}`

/** What a series' keys start with, before `en-`. */
const PREFIX = { 'one-piece': '', 'hunter-x-hunter': 'hxh-' }

/**
 * Game of Thrones' wikis, by `--wiki`: the Game of Thrones Wiki (the show,
 * the default) and the Ice and Fire Wiki (the books), each with its key
 * prefix and a cache folder inside the series' one. Never A Wiki of Ice and
 * Fire, the series' `wiki.en`: it refuses scripted requests (#1009).
 */
const THRONES = {
  show: {
    prefix: 'got-',
    folder: 'episodes',
    api: 'https://gameofthrones.fandom.com/api.php',
  },
  books: {
    prefix: 'iaf-',
    folder: 'books',
    api: 'https://iceandfire.fandom.com/api.php',
  },
}

/** @typedef {{ locale: string, title: string, revision: number, revisionDate: string, url: string, revisionUrl: string, apiUrl: string, contentSha256: string }} Source */
/** @typedef {{ key: string, file: string, source?: Source }} Pin */
/** @typedef {{ prefix: string, wiki: import('./wiki.mjs').Wiki }} Target */
/** @typedef {{ title: string, missing?: boolean, revisions?: { revid: number, timestamp: string, slots: { main: { content: string } } }[] }} RevisionPage */

/**
 * A title in a page URL: underscores for spaces, URI-encoded, with the
 * parentheses MediaWiki leaves bare encoded too, and the subpage slash and
 * namespace colon left bare, as every pinned entry has them.
 * @param {string} title The page title.
 * @returns {string} The URL path segment.
 */
export function urlTitle(title) {
  return encodeURIComponent(title.replaceAll(' ', '_'))
    .replaceAll(/[()]/gu, (bracket) => (bracket === '(' ? '%28' : '%29'))
    .replaceAll('%2F', '/')
    .replaceAll('%3A', ':')
}

/**
 * The key of a new entry: `en-<Title>.json` for One Piece, whose prefix is
 * empty, unless another title holds it, and `<prefix>en-<Title>-<rev>.json`
 * for every other wiki (`hxh-`, `got-`, `iaf-`).
 * @param {string} prefix The wiki's key prefix.
 * @param {string} title The page title.
 * @param {number} revision Its revision.
 * @param {Record<string, Source>} sources The pinned sources.
 * @returns {string} The key.
 */
export function keyOf(prefix, title, revision, sources) {
  const name = `${prefix}en-${title.replaceAll(' ', '_')}`
  const bare = `${name}.json`
  if (prefix === '' && sources[bare] === undefined) {
    return bare
  }

  const key = `${name}-${String(revision)}.json`
  if (sources[key] !== undefined) {
    throw new Error(`${key} already pins another page`)
  }

  return key
}

/**
 * What a series' keys start with, before `en-`.
 * @param {string} slug The series.
 * @returns {string} The prefix.
 */
function prefixOf(slug) {
  return PREFIX[slug] ?? `${slug}-`
}

/**
 * The wiki a series pins from, with its key prefix. Game of Thrones picks
 * one of its two fandom wikis by `--wiki`; any other series has one wiki
 * and takes no `--wiki`.
 * @param {import('./archive-loader.mjs').Series} series The series.
 * @param {string} [name] The `--wiki` asked for.
 * @returns {Target} The prefix and wiki.
 */
export function targetOf(series, name) {
  const own = wikiOf(series)
  if (series.slug !== 'game-of-thrones') {
    if (name !== undefined) {
      throw new Error(`${series.slug} has one wiki: drop --wiki`)
    }
    return { prefix: prefixOf(series.slug), wiki: own }
  }

  const asked = name ?? 'show'
  if (!Object.hasOwn(THRONES, asked)) {
    throw new Error(`--wiki is show or books, not ${asked}`)
  }

  const thrones = THRONES[asked]

  return {
    prefix: thrones.prefix,
    wiki: {
      ...own,
      // fallow-ignore-next-line security-sink -- the series' cache folder and a literal
      cache: path.join(own.cache, thrones.folder),
      en: thrones.api,
    },
  }
}

/**
 * How plainly a key names its title: the wiki's bare form first, then any
 * key of the wiki's form, then the rest (such as an issue-scoped
 * `issue815-en-…` copy of the same revision).
 * @param {string} key The key.
 * @param {string} title Its page title.
 * @param {string} prefix The wiki's key prefix.
 * @returns {number} Lower is plainer.
 */
function plainness(key, title, prefix) {
  const name = `${prefix}en-${title.replaceAll(' ', '_')}`
  if (key === `${name}.json`) {
    return 0
  }

  return key.startsWith(name) ? 1 : 2
}

/**
 * Each title pinned from a series' English wiki, under its plainest key;
 * between equally plain keys, the first in the file.
 * @param {Record<string, Source>} sources The pinned sources.
 * @param {string} api The wiki's English `api.php`.
 * @param {string} prefix The wiki's key prefix.
 * @returns {Map<string, string>} Title to key.
 */
export function pinnedTitles(sources, api, prefix) {
  // The English wiki's pages: One Piece's Italian wiki shares its host.
  const pages = `${api.replace(/api\.php$/u, '')}wiki/`
  /** @type {Map<string, string>} */
  const pinned = new Map()
  for (const [key, { title, url }] of Object.entries(sources)) {
    const held = pinned.get(title)
    if (
      url.startsWith(pages)
      && (held === undefined
        || plainness(key, title, prefix) < plainness(held, title, prefix))
    ) {
      pinned.set(title, key)
    }
  }

  return pinned
}

/**
 * The entry pinning one revision, in the shape every entry has.
 * @param {string} api The wiki's `api.php`.
 * @param {RevisionPage} page The API's page, with its one revision.
 * @returns {Source} The entry.
 */
export function sourceOf(api, { title, revisions = [] }) {
  const [{ revid, timestamp, slots }] = revisions
  const site = api.replace(/api\.php$/u, '')

  return {
    locale: 'en',
    title,
    revision: revid,
    revisionDate: timestamp,
    url: `${site}wiki/${urlTitle(title)}`,
    revisionUrl: `${site}index.php?oldid=${String(revid)}`,
    apiUrl: `${api}${QUERY}&revids=${String(revid)}`,
    contentSha256: createHash('sha256')
      .update(slots.main.content)
      .digest('hex'),
  }
}

/**
 * One page at one revision, or at its latest when `revision` is left out,
 * from the cache or the API.
 * @param {import('./wiki.mjs').Wiki} wiki The series' wiki.
 * @param {string} title The page title.
 * @param {number} [revision] The pinned revision.
 * @returns {Promise<RevisionPage>} The page.
 */
async function revisionPage(wiki, title, revision) {
  const [file, query] =
    revision === undefined ?
      [
        `latest/${encodeURIComponent(title)}.json`,
        `&redirects=1&titles=${encodeURIComponent(title)}`,
      ]
    : [`revisions/${String(revision)}.json`, `&revids=${String(revision)}`]
  const { query: answer } = await cached(
    // fallow-ignore-next-line security-sink -- the series' cache folder and a URI-encoded title or a revision number, neither of which can hold a path separator
    path.join(wiki.cache, file),
    title,
    wiki.en + QUERY + query,
    (whole) => whole.query?.pages?.[0] !== undefined,
  )

  return answer.pages[0]
}

/**
 * The pinned page a title lands on, at its pinned revision, when this
 * series' English wiki has it pinned under that title or the one it
 * redirects to; otherwise the page at its latest revision, with no key.
 * @param {string} title The page title.
 * @param {Target & { sources: Record<string, Source> }} pin The key prefix, the wiki and the pinned sources.
 * @returns {Promise<{ key?: string, page: RevisionPage }>} The key and page.
 */
async function pinnedPage(title, { prefix, wiki, sources }) {
  const pinned = pinnedTitles(sources, wiki.en, prefix)
  const asked = pinned.get(title)
  if (asked !== undefined) {
    return {
      key: asked,
      page: await revisionPage(wiki, title, sources[asked]?.revision),
    }
  }

  const page = await revisionPage(wiki, title)
  const landed = pinned.get(page.title)

  return landed === undefined ?
      { page }
    : {
        key: landed,
        page: await revisionPage(wiki, page.title, sources[landed]?.revision),
      }
}

/**
 * Pins one title and caches its wikitext: the pinned key, or a new key and
 * the entry to append. A missing page throws.
 * @param {string} asked The title as asked, underscores or spaces.
 * @param {Target & { sources: Record<string, Source> }} pin The key prefix, the wiki and the pinned sources.
 * @returns {Promise<Pin>} The key, the wikitext file and the entry when it is new.
 */
export async function pinTitle(asked, { prefix, wiki, sources }) {
  const { key, page } = await pinnedPage(asked.replaceAll('_', ' '), {
    prefix,
    wiki,
    sources,
  })
  const [revision] = page.revisions ?? []
  if (revision === undefined) {
    throw new Error(`MISSING\t${asked}`)
  }

  // fallow-ignore-next-line security-sink -- the series' cache folder and a revision number
  const file = path.join(
    wiki.cache,
    'revisions',
    `${String(revision.revid)}.txt`,
  )
  mkdirSync(path.dirname(file), { recursive: true })
  writeFileSync(file, revision.slots.main.content)

  return key === undefined ?
      {
        key: keyOf(prefix, page.title, revision.revid, sources),
        file,
        source: sourceOf(wiki.en, page),
      }
    : { key, file }
}

/**
 * One title pinned, or its failure printed.
 * @param {string} title The title.
 * @param {Parameters<typeof pinTitle>[1]} pin The series, its wiki and the pinned sources.
 * @returns {Promise<Pin | undefined>} The pin, or nothing when it failed.
 */
async function reported(title, pin) {
  try {
    return await pinTitle(title, pin)
  } catch (error) {
    console.error(error.message)
  }
}

/**
 * Pins each title in turn, so a title asked twice is pinned once, and
 * prints its key and wikitext file; a title that fails is reported and
 * skipped.
 * @param {string[]} titles The titles.
 * @param {Target} target The key prefix and the wiki.
 * @param {Record<string, Source>} pinned The pinned sources.
 * @returns {Promise<{ sources: Record<string, Source>, failed: boolean }>} The sources with the new entries, and whether any title failed.
 */
export async function pinAll(titles, { prefix, wiki }, pinned) {
  const sources = { ...pinned }
  let failed = false
  for (const title of titles) {
    const pinned = await reported(title, { prefix, wiki, sources })
    if (pinned === undefined) {
      failed = true
      continue
    }

    const { key, file, source } = pinned
    if (source !== undefined) {
      sources[key] = source
    }
    console.log(
      `${key}\t${path.relative(ROOT, file)}${source === undefined ? '' : '\t(new)'}`,
    )
  }

  return { sources, failed }
}

/**
 * The manifest's text with its sources replaced, formatted as the file is,
 * so earlier entries keep every byte and new ones follow them.
 * @param {Record<string, unknown>} manifest The parsed manifest.
 * @param {Record<string, Source>} sources Its sources, with the new entries.
 * @returns {string} The file's new text.
 */
export function manifestText(manifest, sources) {
  return `${JSON.stringify({ ...manifest, sources }, undefined, 2)}\n`
}

/**
 * Appends the new sources to the manifest file unless this is a dry run,
 * and says how many there were.
 * @param {string} file The manifest file.
 * @param {Record<string, Source>} pinned The sources as first read.
 * @param {Record<string, Source>} sources The sources with the new entries.
 * @param {boolean} dryRun Whether to write nothing.
 */
export function save(file, pinned, sources, dryRun) {
  const added = Object.entries(sources).filter(
    ([key]) => !Object.hasOwn(pinned, key),
  )
  if (!dryRun && added.length > 0) {
    append(file, added)
  }
  const done =
    dryRun ? 'dry run: nothing written' : `appended to ${path.basename(file)}`
  console.error(`${String(added.length)} new, ${done}`)
}

/**
 * Appends entries to the manifest as it is now, not as it was read before a
 * long run of requests: another session may have appended meanwhile. A key
 * it already holds for another entry stops the write. The new text replaces
 * the file in one rename, so a reader never sees half of it.
 * @param {string} file The manifest file.
 * @param {[string, Source][]} added The new entries.
 */
function append(file, added) {
  const manifest = JSON.parse(readFileSync(file, 'utf8'))
  for (const [key, source] of added) {
    const held = manifest.sources[key]
    if (held !== undefined && JSON.stringify(held) !== JSON.stringify(source)) {
      throw new Error(`${key} already pins another entry; nothing written`)
    }
  }

  const temporary = `${file}.${String(process.pid)}.tmp`
  writeFileSync(
    temporary,
    manifestText(manifest, {
      ...manifest.sources,
      ...Object.fromEntries(added),
    }),
  )
  renameSync(temporary, file)
}

/**
 * The command line, or nothing once its fault is printed.
 * @param {string[]} args The arguments after the script.
 * @returns {{ values: { series: string, wiki?: string, 'dry-run': boolean }, positionals: string[] } | undefined} The parsed arguments.
 */
export function argsOf(args) {
  try {
    return parseArgs({
      args,
      allowPositionals: true,
      options: {
        'series': { type: 'string', default: 'one-piece' },
        'wiki': { type: 'string' },
        'dry-run': { type: 'boolean', default: false },
      },
    })
  } catch (error) {
    console.error(error.message)
  }
}

/**
 * Pins every title on the command line and writes the manifest once.
 * @returns {Promise<number>} Zero, one when a title failed, two on bad usage.
 */
async function main() {
  const parsed = argsOf(process.argv.slice(2))
  if (parsed === undefined || parsed.positionals.length === 0) {
    console.error(
      'Usage: npm run provenance:pin -- --series <slug> [--wiki show|books] "Title" ["Title" …] [--dry-run]',
    )
    return 2
  }

  const { values, positionals } = parsed
  const series = await seriesOrExit(['--series', values.series])
  let target
  try {
    target = targetOf(series, values.wiki)
  } catch (error) {
    console.error(error.message)
    return 2
  }

  const { sources: pinned } = JSON.parse(readFileSync(MANIFEST, 'utf8'))
  const { sources, failed } = await pinAll(positionals, target, pinned)
  save(MANIFEST, pinned, sources, values['dry-run'])

  return failed ? 1 : 0
}

// Sets the exit code from inside a function: unicorn's no-top-level-side-effects
// rejects a module-level write to `process` in a file that exports, and
// `process.exit()` could cut off output still queued for a pipe.
const run = async () => {
  process.exitCode = await main()
}

if (isMain(import.meta)) {
  await run()
}
