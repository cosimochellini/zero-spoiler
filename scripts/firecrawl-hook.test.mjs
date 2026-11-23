// @vitest-environment node
import {
  existsSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterAll, describe, expect, it } from 'vitest'

import {
  afterScrape,
  beforeScrape,
  cacheDir,
  extractMarkdown,
  normalise,
  pageKey,
  respond,
  savePage,
} from './firecrawl-hook.mjs'

const HOST = 'awoiaf.westeros.org'
const TITLE = 'A_Clash_of_Kings-Chapter_12'
const CHAPTER = `https://${HOST}/index.php/${TITLE}`
const PAGE = '# Chapter 12\n\nArya rides north.\n'
const NOW = '2026-11-23T10:00:00.000Z'
const CREDITS =
  'Insufficient credits for this connected-app request. Upgrade your plan.'
const ERROR = { isError: true, content: [{ type: 'text', text: PAGE }] }

const root = mkdtempSync(path.join(tmpdir(), 'firecrawl-hook-'))
afterAll(() => rmSync(root, { recursive: true }))

/**
 * A new, empty cache folder.
 * @returns {string} Its path.
 */
const fresh = () => mkdtempSync(path.join(root, 'cache-'))

/**
 * The text of an MCP content response.
 * @param {string} text The text.
 * @returns {{ content: { type: string, text: string }[] }} The response.
 */
const content = (text) => ({ content: [{ type: 'text', text }] })

/**
 * The PostToolUse output for a scrape of the chapter.
 * @param {unknown} response The tool response.
 * @param {string} dir The cache folder.
 * @param {unknown[]} [formats] The requested formats.
 * @returns {object | undefined} The hook output.
 */
const after = (response, dir, formats = ['markdown']) =>
  afterScrape(
    { tool_input: { url: CHAPTER, formats }, tool_response: response },
    dir,
    NOW,
  )

describe('the page key', () => {
  it('drops the scheme, query and hash and lowercases the host', () => {
    expect(
      normalise(`https://AWOIAF.Westeros.org/index.php/Arya?x=1#Bio`),
    ).toBe(`${HOST}/index.php/Arya`)
    expect(normalise(`${HOST}/index.php/Arya/`)).toBe(`${HOST}/index.php/Arya`)
  })

  it('reads index.php?title=X as index.php/X, and spaces as underscores', () => {
    const spaced = ['A', 'Clash', 'of', 'Kings-Chapter_12'].join('%20')

    expect(pageKey(`https://${HOST}/index.php?title=${spaced}`)).toBe(
      pageKey(CHAPTER),
    )
    expect(pageKey(`https://${HOST}/index.php/${spaced}`)).toBe(
      pageKey(CHAPTER),
    )
    expect(pageKey(CHAPTER)).toBe(`${HOST}_index.php_${TITLE}`)
  })

  it('ends a long key in a hash', () => {
    const key = pageKey(`https://example.com/${'a'.repeat(300)}`)

    expect(key).toHaveLength(163)
    expect(pageKey(`https://example.com/${'a'.repeat(301)}`)).not.toBe(key)
  })
})

describe('the cache folder', () => {
  it('prefers the override, then the project folder', () => {
    expect(
      cacheDir(
        { FIRECRAWL_CACHE_DIR: '/cache', CLAUDE_PROJECT_DIR: '/p' },
        '/',
      ),
    ).toBe('/cache')
    expect(cacheDir({ CLAUDE_PROJECT_DIR: '/p' }, '/')).toBe(
      '/p/.gate/firecrawl',
    )
  })

  it('falls back to the parent of the Git common directory', () => {
    expect(cacheDir({}, import.meta.dirname)).toMatch(/\/\.gate\/firecrawl$/u)
  })
})

describe('before a scrape', () => {
  it('rewrites query, json and summary to markdown and keeps the rest', () => {
    for (const format of ['query', 'json', { type: 'summary' }]) {
      const input = {
        url: CHAPTER,
        formats: [format],
        queryOptions: { prompt: 'who?' },
        maxAge: 0,
      }

      expect(beforeScrape(input, fresh())).toStrictEqual({
        hookEventName: 'PreToolUse',
        permissionDecision: 'allow',
        updatedInput: {
          url: CHAPTER,
          formats: ['markdown'],
          onlyMainContent: true,
          maxAge: 0,
        },
      })
    }
  })

  it('lets markdown and alexandria calls through', () => {
    const alexandria = { alexandria: { provider: 'p', capability: 'c' } }

    expect(
      beforeScrape({ url: CHAPTER, formats: ['markdown'] }, fresh()),
    ).toBeUndefined()
    expect(beforeScrape({ url: CHAPTER }, fresh())).toBeUndefined()
    expect(beforeScrape(alexandria, fresh())).toBeUndefined()
  })

  it('denies a cached page with its path, whatever the format', () => {
    const dir = fresh()
    const file = savePage(dir, { url: CHAPTER, markdown: PAGE, fetched: NOW })
    const reason = `Already fetched on 2026-11-23: read \`${file}\` (grep it); no credit spent.`

    for (const formats of [['markdown'], ['query']]) {
      expect(
        beforeScrape({ url: `${CHAPTER}?action=view`, formats }, dir),
      ).toStrictEqual({
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: reason,
      })
    }
  })
})

describe('the markdown in a response', () => {
  it('reads each shape', () => {
    const body = JSON.stringify({
      markdown: PAGE,
      metadata: { statusCode: 200 },
    })
    const nested = JSON.stringify({ success: true, data: { markdown: PAGE } })

    expect(extractMarkdown(PAGE)).toBe(PAGE)
    expect(extractMarkdown(body)).toBe(PAGE)
    expect(extractMarkdown(nested)).toBe(PAGE)
    expect(extractMarkdown(content(body))).toBe(PAGE)
    expect(extractMarkdown([{ type: 'text', text: PAGE }])).toBe(PAGE)
    expect(extractMarkdown({ data: { markdown: PAGE } })).toBe(PAGE)
  })

  it('finds none in a failure or an unknown shape', () => {
    const missing = { markdown: 'Not found', metadata: { statusCode: 404 } }

    expect(extractMarkdown(CREDITS)).toBeUndefined()
    expect(extractMarkdown(content(CREDITS))).toBeUndefined()
    expect(extractMarkdown(ERROR)).toBeUndefined()
    expect(
      extractMarkdown(JSON.stringify({ success: false, error: 'x' })),
    ).toBeUndefined()
    expect(extractMarkdown(JSON.stringify(missing))).toBeUndefined()
    expect(extractMarkdown({ content: [] })).toBeUndefined()
    expect(extractMarkdown(42)).toBeUndefined()
    expect(extractMarkdown(null)).toBeUndefined()
  })
})

describe('after a scrape', () => {
  it('saves the page atomically and returns a pointer in the same shape', () => {
    const dir = fresh()
    const output = after(content(JSON.stringify({ markdown: PAGE })), dir)
    const key = pageKey(CHAPTER)
    const file = path.join(dir, `${key}.md`)
    const pointer = `Saved ${CHAPTER} to \`${file}\` (4 lines of markdown). Grep it for the passage you need; a second scrape of this page is refused.`
    const meta = readFileSync(path.join(dir, `${key}.json`), 'utf8')

    expect(output).toStrictEqual({
      hookEventName: 'PostToolUse',
      updatedMCPToolOutput: content(pointer),
      updatedToolOutput: content(pointer),
    })
    expect(readFileSync(file, 'utf8')).toBe(PAGE)
    expect(JSON.parse(meta)).toStrictEqual({
      url: CHAPTER,
      fetched: NOW,
      characters: PAGE.length,
    })
    expect(
      readdirSync(dir).toSorted((a, b) => a.localeCompare(b)),
    ).toStrictEqual([`${key}.json`, `${key}.md`])
  })

  it('answers a string with a string', () => {
    expect(typeof after(PAGE, fresh())?.updatedMCPToolOutput).toBe('string')
  })

  it('saves nothing for an error or a credits failure', () => {
    const dir = fresh()

    expect(after(CREDITS, dir)).toBeUndefined()
    expect(after(ERROR, dir)).toBeUndefined()
    expect(readdirSync(dir)).toStrictEqual([])
  })

  it('saves but keeps the output when other formats were asked for', () => {
    const dir = fresh()
    const response = JSON.stringify({ markdown: PAGE, links: ['a'] })

    const file = path.join(dir, `${pageKey(CHAPTER)}.md`)

    expect(after(response, dir, ['markdown', 'links'])).toBeUndefined()
    expect(existsSync(file)).toBe(true)
  })
})

describe('the hook input', () => {
  it('routes by event and ignores alexandria calls', () => {
    const env = { FIRECRAWL_CACHE_DIR: fresh() }
    const query = { url: CHAPTER, formats: ['query'] }
    const alexandria = { alexandria: {} }

    expect(
      respond({ hook_event_name: 'PreToolUse', tool_input: query }, env, NOW),
    ).toHaveProperty('permissionDecision', 'allow')
    expect(
      respond(
        {
          hook_event_name: 'PostToolUse',
          tool_input: alexandria,
          tool_response: PAGE,
        },
        env,
        NOW,
      ),
    ).toBeUndefined()
    expect(respond({ hook_event_name: 'Stop' }, env, NOW)).toBeUndefined()
  })
})
