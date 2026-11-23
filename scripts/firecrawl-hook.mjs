// The Claude Code hook on Firecrawl's scrape tool (`.claude/settings.json`),
// for PreToolUse and PostToolUse: every page is paid for once per machine.
// - PostToolUse saves the page's markdown in the cache and hands the agent a
//   pointer to the file instead of the page.
// - PreToolUse refuses a page the cache holds, and turns a 5-credit `query`,
//   `json` or `summary` scrape into a 1-credit markdown one.
// The cache is the folder `.gate/firecrawl` of the main checkout, which
// CLAUDE_PROJECT_DIR names even inside a worktree, so every worktree shares
// it. Pages never expire; delete a page's `.md` and `.json` to fetch it again.
// Only a JSON body with a `markdown` string and no failure is saved; anything
// else, plain text included, passes through untouched, so an error is never
// kept as a page.
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import { isMain } from './is-main.mjs'

/** The formats that cost 5 credits, each replaced by a markdown scrape. */
const PAID = new Set(['query', 'json', 'summary'])

/** The options that belong only to the formats in `PAID`. */
const PAID_OPTIONS = new Set(['queryOptions', 'jsonOptions'])

/** The longest key kept as written; a longer one ends in a hash. */
const MAX_KEY = 150

/**
 * @typedef {{ url?: unknown, formats?: unknown, [key: string]: unknown }}
 *   ScrapeInput
 */

/**
 * The cache folder: `FIRECRAWL_CACHE_DIR` when set (tests), else the main
 * checkout's `.gate/firecrawl/`, found through `CLAUDE_PROJECT_DIR` or, when
 * that is missing, the parent of Git's common directory.
 * @param {NodeJS.ProcessEnv} env The environment.
 * @param {string} cwd The directory the session works in.
 * @returns {string} The absolute folder.
 */
export function cacheDir(env, cwd) {
  if (env.FIRECRAWL_CACHE_DIR) {
    return path.resolve(env.FIRECRAWL_CACHE_DIR)
  }
  const root =
    env.CLAUDE_PROJECT_DIR
    ?? path.dirname(
      execFileSync(
        'git',
        ['rev-parse', '--path-format=absolute', '--git-common-dir'],
        { cwd, encoding: 'utf8' },
      ).trim(),
    )

  return path.join(root, '.gate', 'firecrawl')
}

/**
 * The page a URL names: lowercase host (with its port) and decoded path
 * without a trailing slash, then the query sorted; the scheme and hash are
 * dropped. A MediaWiki `index.php?title=X` reads as `index.php/X`, and spaces
 * read as `_`, as MediaWiki reads them.
 * @param {string} url The URL, with or without its scheme.
 * @returns {string} Host, path and query, as `host/path?query`.
 */
export function normalise(url) {
  const parsed = new URL(url.includes('://') ? url : `https://${url}`)
  const title = parsed.searchParams.get('title')
  const base = parsed.pathname.replace(/\/$/u, '')
  const folded = title !== null && base.endsWith('/index.php')
  const page = folded ? `${base}/${encodeURIComponent(title)}` : base
  if (folded) {
    parsed.searchParams.delete('title')
  }
  const sorted = new URLSearchParams(
    [...parsed.searchParams].toSorted(([a], [b]) => a.localeCompare(b)),
  )
  const query = sorted.toString()
  let decoded = page
  try {
    decoded = decodeURIComponent(page)
  } catch {
    // A stray `%` stays as written.
  }
  const location = `${parsed.host.toLowerCase()}${decoded.replaceAll(' ', '_')}`

  return query === '' ? location : `${location}?${query}`
}

/**
 * The file name a page is kept under: the normalised URL with every run of
 * other characters as `_`, cut at `MAX_KEY` characters, then a hash of the
 * whole normalised URL, so two pages whose names read alike never share a
 * file.
 * @param {string} url The URL.
 * @returns {string} The key, without an extension.
 */
export function pageKey(url) {
  const page = normalise(url)
  const key = page.replaceAll(/[^\w.-]+/gu, '_').slice(0, MAX_KEY)
  const hash = createHash('sha256').update(page).digest('hex').slice(0, 12)

  return `${key}_${hash}`
}

/**
 * One field of a value that may be an object.
 * @param {unknown} value The value.
 * @param {string} key The field.
 * @returns {unknown} The field, or undefined.
 */
const field = (value, key) =>
  typeof value === 'object' && value !== null ?
    /** @type {Record<string, unknown>} */ (value)[key]
  : undefined

/**
 * The requested formats' names; a format may be a string or `{ type }`.
 * @param {unknown} formats The `formats` input.
 * @returns {string[]} The names, empty when none is given.
 */
function formatNames(formats) {
  return Array.isArray(formats) ?
      formats.map((format) => String(field(format, 'type') ?? format))
    : []
}

/**
 * When the cache holds a page, the date it was fetched.
 * @param {string} dir The cache folder.
 * @param {string} key The page's key.
 * @returns {string | undefined} The date, `YYYY-MM-DD`, or undefined.
 */
function cachedOn(dir, key) {
  const page = path.join(dir, `${key}.md`)
  if (!existsSync(page)) {
    return
  }
  try {
    const meta = JSON.parse(readFileSync(path.join(dir, `${key}.json`), 'utf8'))

    return String(meta.fetched).slice(0, 10)
  } catch {
    return statSync(page).mtime.toISOString().slice(0, 10)
  }
}

/**
 * The input with markdown in place of the paid formats, every other format
 * kept, and without the paid formats' options.
 * @param {ScrapeInput} input The tool input.
 * @returns {ScrapeInput} The whole new input.
 */
function asMarkdown(input) {
  const kept = Object.entries(input).filter(([key]) => !PAID_OPTIONS.has(key))
  const formats = Array.isArray(input.formats) ? input.formats : []
  const others = formats.filter(
    (format) => !PAID.has(String(field(format, 'type') ?? format)),
  )
  const hasMarkdown = others.some(
    (format) => String(field(format, 'type') ?? format) === 'markdown',
  )

  return {
    ...Object.fromEntries(kept),
    formats: hasMarkdown ? others : [...others, 'markdown'],
    onlyMainContent: true,
  }
}

/**
 * The PreToolUse answer for a scrape: deny a cached page, turn a paid format
 * into markdown, else nothing.
 * @param {ScrapeInput | undefined} input The tool input.
 * @param {string} dir The cache folder.
 * @returns {object | undefined} The hook output, or undefined to pass.
 */
export function beforeScrape(input, dir) {
  if (typeof input?.url !== 'string' || input.url === '') {
    return
  }
  const key = pageKey(input.url)
  const date = cachedOn(dir, key)
  if (date !== undefined) {
    const file = path.join(dir, `${key}.md`)

    return {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason: `Already fetched on ${date}: read \`${file}\` (grep it); no credit spent. If that copy is wrong, delete it and its .json to fetch it again.`,
    }
  }
  if (formatNames(input.formats).every((name) => !PAID.has(name))) {
    return
  }

  return {
    hookEventName: 'PreToolUse',
    permissionDecision: 'allow',
    updatedInput: asMarkdown(input),
  }
}

/**
 * Whether a JSON body reports a failure: `success: false`, an `error` or an
 * HTTP status of 400 or more.
 * @param {unknown} body The parsed body.
 * @returns {boolean} Whether the body is a failure.
 */
function failed(body) {
  const metadata =
    field(body, 'metadata') ?? field(field(body, 'data'), 'metadata')
  const status = Number(field(metadata, 'statusCode') ?? 200)

  return (
    field(body, 'success') === false
    || Boolean(field(body, 'error'))
    || status >= 400
  )
}

/**
 * The markdown a JSON body carries in `markdown` or `data.markdown`.
 * @param {unknown} body The parsed body.
 * @returns {string | undefined} The markdown, or undefined for a failure.
 */
function fromBody(body) {
  const markdown =
    field(body, 'markdown') ?? field(field(body, 'data'), 'markdown')

  return typeof markdown === 'string' && !failed(body) ? markdown : undefined
}

/**
 * The markdown in a text that holds a JSON body. Plain text is never taken
 * for a page: an error message would read the same.
 * @param {string} text The text.
 * @returns {string | undefined} The markdown, or undefined.
 */
function fromText(text) {
  try {
    return fromBody(JSON.parse(text))
  } catch {
    return
  }
}

/**
 * The content blocks a response holds, when it is shaped as MCP content.
 * @param {unknown} response The tool response.
 * @returns {unknown[] | undefined} The blocks.
 */
function blocksOf(response) {
  if (Array.isArray(response)) {
    return response
  }
  const content = field(response, 'content')

  return Array.isArray(content) ? content : undefined
}

/**
 * The page's markdown in a scrape response: a JSON body with `markdown` or
 * `data.markdown`, given as an object, as a JSON string, or as the one text
 * block of MCP content (alone or as `{ content }`).
 * @param {unknown} response The tool response.
 * @returns {string | undefined} The markdown, or undefined when the response
 *   is a failure or a shape the hook does not know.
 */
export function extractMarkdown(response) {
  if (typeof response === 'string') {
    return fromText(response)
  }
  if (field(response, 'isError') === true) {
    return
  }
  const blocks = blocksOf(response)
  if (blocks === undefined) {
    return fromBody(response)
  }
  const texts = blocks
    .filter((block) => field(block, 'type') === 'text')
    .map((block) => field(block, 'text'))
    .filter((text) => typeof text === 'string')

  return texts.length === 1 ? fromText(String(texts[0])) : undefined
}

/**
 * Writes a file in one rename, so a reader never sees half of it.
 * @param {string} file The file.
 * @param {string} text Its text.
 */
function writeAtomic(file, text) {
  const temporary = `${file}.${String(process.pid)}.tmp`
  writeFileSync(temporary, text)
  renameSync(temporary, file)
}

/**
 * Saves a page and its metadata (URL, fetched time, size); the metadata goes
 * last, so it marks a complete page.
 * @param {string} dir The cache folder.
 * @param {{ url: string, markdown: string, fetched: string }} page The page
 *   and its ISO fetch time.
 * @returns {string} The page's file.
 */
export function savePage(dir, { url, markdown, fetched }) {
  mkdirSync(dir, { recursive: true })
  const key = pageKey(url)
  const file = path.join(dir, `${key}.md`)
  const meta = { url, fetched, characters: markdown.length }
  writeAtomic(file, markdown)
  writeAtomic(
    path.join(dir, `${key}.json`),
    `${JSON.stringify(meta, undefined, 2)}\n`,
  )

  return file
}

/**
 * The pointer in the shape the response came in: a string, MCP content or
 * `{ content }`.
 * @param {unknown} response The tool response.
 * @param {string} text The pointer.
 * @returns {unknown} The replacement output.
 */
function sameShape(response, text) {
  const blocks = [{ type: 'text', text }]
  if (Array.isArray(response)) {
    return blocks
  }

  return typeof response === 'string' ? text : { content: blocks }
}

/**
 * The PostToolUse answer for a scrape: save the page and replace the output
 * with a pointer to it. A request for formats besides markdown is saved but
 * its output kept, so the agent still gets the links or HTML it asked for.
 * @param {{ tool_input?: ScrapeInput, tool_response?: unknown }} input The
 *   hook input.
 * @param {string} dir The cache folder.
 * @param {string} fetched The ISO time of the fetch.
 * @returns {object | undefined} The hook output, or undefined to pass.
 */
export function afterScrape(input, dir, fetched) {
  const url = input.tool_input?.url
  const markdown = extractMarkdown(input.tool_response)
  if (typeof url !== 'string' || url === '' || !markdown?.trim()) {
    return
  }
  const file = savePage(dir, { url, markdown, fetched })
  const others = formatNames(input.tool_input?.formats).filter(
    (name) => name !== 'markdown' && !PAID.has(name),
  )
  if (others.length > 0) {
    return
  }
  const lines = markdown.split('\n').length
  const pointer = `Saved ${url} to \`${file}\` (${String(lines)} lines of markdown). Grep it for the passage you need; a second scrape of this page is refused.`
  const output = sameShape(input.tool_response, pointer)

  return {
    hookEventName: 'PostToolUse',
    updatedMCPToolOutput: output,
    updatedToolOutput: output,
  }
}

/**
 * The hook output for one hook input.
 * @param {{ hook_event_name?: unknown, cwd?: string, tool_input?: ScrapeInput,
 *   tool_response?: unknown }} input The hook input.
 * @param {NodeJS.ProcessEnv} env The environment.
 * @param {string} now The ISO time now.
 * @returns {object | undefined} The `hookSpecificOutput`, or undefined.
 */
export function respond(input, env, now) {
  const dir = cacheDir(env, input.cwd ?? process.cwd())
  if (input.hook_event_name === 'PreToolUse') {
    return beforeScrape(input.tool_input, dir)
  }

  return input.hook_event_name === 'PostToolUse' ?
      afterScrape(input, dir, now)
    : undefined
}

/**
 * The output for the input on stdin. A bug in the hook lets the call and its
 * output through, with a note, rather than break every scrape.
 * @returns {object | undefined} The `hookSpecificOutput`, if any.
 */
function fromStdin() {
  // eslint-disable-next-line unicorn/prefer-temporal -- Node 24 has no Temporal yet
  const now = new Date()
  try {
    return respond(
      JSON.parse(readFileSync(process.stdin.fd, 'utf8')),
      process.env,
      now.toISOString(),
    )
  } catch (error) {
    process.stderr.write(
      `firecrawl hook passed the call through: ${String(error)}\n`,
    )

    return
  }
}

if (isMain(import.meta)) {
  const output = fromStdin()
  if (output !== undefined) {
    process.stdout.write(`${JSON.stringify({ hookSpecificOutput: output })}\n`)
  }
}
