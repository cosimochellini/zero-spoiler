// Every payload the server sends, for every key, at every bookmark of the
// spoiler sweep and in both locales, one JSON line each (about 1 GB for One
// Piece). `npm run archive:parity` (`scripts/archive-parity.mjs`) pipes the
// dump of a refactor's base and of its head and compares them line by line;
// stdout waits for `drain`, so a pipe or a file both take the whole dump:
//   npm run --silent archive:dump -- --series game-of-thrones | wc -l
// The list is the sweep's own (`src/server/archive/payloads.server.ts`), so
// a page added to the server is in the dump too, and so are the bookmarks
// (the series', in `src/data/series/index.ts`).
//
// The dump opens with one line per episode, `{"table":N,"chapter":C}`, from
// the series' episode↔chapter table, so a pair that moves an anchor
// (`anchorsOf`, `src/data/dated.ts`) shows up in the comparison too. Flags,
// after `--`:
//   --series <slug>     a series other than One Piece;
//   --skip <name>       leave out a payload the change is meant to alter
//                       (repeatable), such as `loadRelationships`;
//   --bookmarks <file>  a JSON array that replaces the series' bookmarks, so
//                       a head that added sweep bookmarks dumps the base's.
import { once } from 'node:events'
import { readFileSync } from 'node:fs'
import process from 'node:process'
import { parseArgs } from 'node:util'

import { importArchive } from './archive-loader.mjs'
import { isMain } from './is-main.mjs'

/**
 * The flags of one dump.
 * @param {string[]} args The command line after the script.
 * @returns {{ series: string, skip: string[], bookmarks: string | undefined }} The series slug, the payload names to leave out and the bookmark file, if any.
 */
export function dumpArgs(args) {
  const { values } = parseArgs({
    args,
    options: {
      series: { type: 'string', default: 'one-piece' },
      skip: { type: 'string', multiple: true, default: [] },
      bookmarks: { type: 'string' },
    },
  })

  return {
    series: values.series,
    skip: values.skip,
    bookmarks: values.bookmarks,
  }
}

/**
 * The payloads a dump writes: the sweep's list without the skipped names. A
 * name the list lacks is a typo that would skip nothing, so it throws.
 * @template {{ name: string }} P
 * @param {P[]} payloads The sweep's payloads.
 * @param {string[]} skip The names to leave out.
 * @returns {P[]} The payloads to dump.
 */
export function keptPayloads(payloads, skip) {
  const names = payloads.map(({ name }) => name)
  const unknown = skip.filter((name) => !names.includes(name))
  if (unknown.length > 0) {
    throw new Error(
      `--skip ${unknown.join(', ')} is not a payload (${names.join(', ')})`,
    )
  }

  return payloads.filter(({ name }) => !skip.includes(name))
}

/** The number fields of each bookmark mode (`src/lib/progress/episode.ts`). */
const BOOKMARK_FIELDS = new Map([
  ['chapter', ['chapter']],
  ['episode', ['episode']],
  ['season', ['episode', 'season']],
])

/**
 * The bookmarks of a `--bookmarks` file. Anything but an array of bookmarks
 * throws here, before the first line: a payload would throw on it halfway
 * through, and two dumps cut at the same line would still compare equal.
 * @param {string} file The JSON file.
 * @returns {import('../src/lib/progress/episode.ts').Bookmark[]} The bookmarks.
 */
export function bookmarksFrom(file) {
  const bookmarks = JSON.parse(readFileSync(file, 'utf8'))
  const bad =
    Array.isArray(bookmarks) ?
      bookmarks.find((entry) => {
        if (entry === null) {
          return false
        }
        const fields = BOOKMARK_FIELDS.get(entry?.mode)
        return (
          fields === undefined
          || fields.some((field) => !Number.isSafeInteger(entry[field]))
        )
      })
    : bookmarks
  if (bad !== undefined) {
    throw new Error(
      `--bookmarks ${file} is not an array of bookmarks: ${JSON.stringify(bad)}`,
    )
  }

  return bookmarks
}

/**
 * One run's dump: what it reads and the payloads it writes.
 * @typedef {{ archive: import('../src/data/types.ts').SeriesArchive, payloads: import('../src/server/archive/payloads.server.ts').Payload[], bookmarks: import('../src/lib/progress/episode.ts').Bookmark[], locales: import('../src/i18n/locales.ts').Locale[] }} Dump
 */

/**
 * What one run dumps, read off its flags.
 * @param {string[]} args The command line after the script.
 * @returns {Promise<Dump>} The dump.
 */
async function dumpOf(args) {
  const flags = dumpArgs(args)
  const { SERIES } = await importArchive('data/series/index.ts')
  const series = SERIES.find(({ slug }) => slug === flags.series)
  if (series === undefined) {
    const known = SERIES.map(({ slug }) => slug).join(', ')
    throw new Error(
      `--series ${flags.series} is not in src/data/series/index.ts (${known})`,
    )
  }

  const { payloadsFor } = await importArchive(
    'server/archive/payloads.server.ts',
  )
  const { LOCALES } = await importArchive('i18n/locales.ts')
  const archive = await series.load()
  const payloads = keptPayloads(payloadsFor(archive), flags.skip)
  const bookmarks =
    flags.bookmarks === undefined ?
      archive.bookmarks
    : bookmarksFrom(flags.bookmarks)

  return { archive, payloads, bookmarks, locales: LOCALES }
}

/**
 * The lines of one dump: the table lines, then the payload lines.
 * @param {Dump} dump What to dump.
 * @yields {string} One JSON line, newline included.
 */
export function* dumpLines({ archive, payloads, bookmarks, locales }) {
  for (let episode = 1; episode <= archive.series.episodeCeiling; episode++) {
    const chapter = archive.chapterAtEpisode(episode)
    yield `${JSON.stringify({ table: episode, chapter })}\n`
  }

  const asks = bookmarks.flatMap((bookmark) =>
    locales.map((locale) => ({ bookmark, locale })),
  )
  for (const { keys, name, run } of payloads) {
    const all = keys?.() ?? ['']
    // Bookmarked home needs a current arc. Onboarding works without one.
    const eligible = asks.filter(
      ({ bookmark }) =>
        bookmark === null || name !== 'loadHome' || archive.arcs.length > 0,
    )
    for (const key of all) {
      for (const { bookmark, locale } of eligible) {
        const payload = run(bookmark, locale, key)
        yield `${JSON.stringify({ name, key, bookmark, locale, payload })}\n`
      }
    }
  }
}

/**
 * Writes the lines, waiting for `drain` whenever the stream asks: a pipe
 * that is read slower than the dump is written would otherwise buffer it
 * all, and fails with ENOBUFS.
 * @param {Iterable<string>} lines The lines.
 * @param {import('node:stream').Writable} out Where to write them.
 * @returns {Promise<void>} When the last line is handed over.
 */
export async function writeLines(lines, out) {
  for (const line of lines) {
    if (!out.write(line)) {
      await once(out, 'drain')
    }
  }
}

if (isMain(import.meta)) {
  let run
  try {
    run = await dumpOf(process.argv.slice(2))
  } catch (error) {
    // A wrong flag, slug, payload name or bookmark file is a command to fix.
    console.error(error.message)
    process.exit(2)
  }
  await writeLines(dumpLines(run), process.stdout)
}
