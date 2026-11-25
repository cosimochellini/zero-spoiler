// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import { createHash } from 'node:crypto'
import {
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  argsOf,
  keyOf,
  manifestText,
  pinAll,
  pinnedTitles,
  pinTitle,
  save,
  sourceOf,
  targetOf,
  urlTitle,
} from './provenance-pin.mjs'

// Cache pacing needs no wall-clock time in unit tests.
vi.mock('node:timers/promises', () => ({
  setTimeout: vi.fn(() => Promise.resolve()),
}))

const HXH = 'https://hunterxhunter.fandom.com/api.php'
const OP = 'https://onepiece.fandom.com/api.php'
const sha = (text) => createHash('sha256').update(text).digest('hex')

/**
 * The API's answer for one page at one revision.
 * @param {string} title The page title.
 * @param {number} revid Its revision.
 * @returns {object} The `formatversion=2` page.
 */
function page(title, revid) {
  return {
    title,
    revisions: [
      {
        revid,
        timestamp: '2026-10-01T00:00:00Z',
        slots: {
          main: { content: `wikitext of ${title} at ${String(revid)}` },
        },
      },
    ],
  }
}

/**
 * Stands in for the API: each answer by the end of its URL; any other URL
 * fails the test, so nothing reaches the network.
 * @param {Record<string, object>} pages Page by URL suffix.
 * @returns {import('vitest').Mock} The stub.
 */
function answering(pages) {
  const fetch = vi.fn((url) => {
    const found = Object.entries(pages).find(([end]) => url.endsWith(end))
    if (found === undefined) {
      throw new Error(`unexpected request ${url}`)
    }
    return Promise.resolve(Response.json({ query: { pages: [found[1]] } }))
  })
  vi.stubGlobal('fetch', fetch)
  return fetch
}

describe('key and URL forms', () => {
  it('encodes parentheses the way pinned entries do', () => {
    expect(urlTitle('Episode 3 (2011)')).toBe('Episode_3_%282011%29')
    expect(urlTitle("Kin'emon")).toBe("Kin'emon")
    expect(urlTitle('Gyoro, Nin, and Bao')).toBe('Gyoro%2C_Nin%2C_and_Bao')
  })

  it('leaves subpage slashes and namespace colons bare', () => {
    expect(urlTitle('Vegapunk/Atlas')).toBe('Vegapunk/Atlas')
    expect(urlTitle('Template:WC')).toBe('Template:WC')
    expect(urlTitle('One Piece Film: Red')).toBe('One_Piece_Film:_Red')
  })

  it('keys One Piece by title and Hunter x Hunter by title and revision', () => {
    expect(keyOf('', 'Lola (Zombie)', 9, {})).toBe('en-Lola_(Zombie).json')
    expect(keyOf('hxh-', 'Episode 3 (2011)', 416_001, {})).toBe(
      'hxh-en-Episode_3_(2011)-416001.json',
    )
  })

  it("pins Game of Thrones from its two fandom wikis, the series list's", () => {
    const thrones = {
      slug: 'game-of-thrones',
      wiki: {
        en: 'https://iceandfire.fandom.com/api.php',
        episodes: 'https://gameofthrones.fandom.com/api.php',
        it: 'https://it.wikipedia.org/w/api.php',
      },
    }
    const show = targetOf(thrones)
    const books = targetOf(thrones, 'books')

    expect(show.prefix).toBe('got-')
    expect(show.wiki.en).toBe('https://gameofthrones.fandom.com/api.php')
    expect(show.wiki.cache).toMatch(/game-of-thrones[/\\]episodes$/u)
    expect(targetOf(thrones, 'show')).toStrictEqual(show)
    expect(books.prefix).toBe('iaf-')
    expect(books.wiki.en).toBe('https://iceandfire.fandom.com/api.php')
    expect(books.wiki.cache).toMatch(/game-of-thrones[/\\]books$/u)
    expect(keyOf(books.prefix, 'Eddard Stark', 26_314, {})).toBe(
      'iaf-en-Eddard_Stark-26314.json',
    )
    expect(() => targetOf(thrones, 'awoiaf')).toThrow('show or books')
    expect(() => targetOf(thrones, 'toString')).toThrow('show or books')
  })

  it('takes no --wiki for a series with one wiki', () => {
    const hunter = { slug: 'hunter-x-hunter', wiki: { en: HXH, it: '' } }

    expect(targetOf(hunter)).toMatchObject({
      prefix: 'hxh-',
      wiki: { en: HXH },
    })
    expect(() => targetOf(hunter, 'books')).toThrow('drop --wiki')
  })

  it('adds the revision to a One Piece key another title holds', () => {
    expect(keyOf('', 'Tama', 7, { 'en-Tama.json': {} })).toBe('en-Tama-7.json')
  })

  it('refuses a revision key another page already holds', () => {
    expect(() => keyOf('hxh-', 'Gon', 7, { 'hxh-en-Gon-7.json': {} })).toThrow(
      'hxh-en-Gon-7.json already pins another page',
    )
    expect(() =>
      keyOf('', 'Tama', 7, { 'en-Tama.json': {}, 'en-Tama-7.json': {} }),
    ).toThrow('en-Tama-7.json')
  })

  it('reuses the plainest key of a title pinned under several', () => {
    const chapter = sourceOf(OP, page('Chapter 433', 1))
    const gon = sourceOf(HXH, page('Gon Freecss', 2))
    const italian = { ...chapter, url: 'https://onepiece.fandom.com/it/wiki/X' }
    const sources = {
      'issue815-en-Chapter_433.json': chapter,
      'en-Chapter_433.json': chapter,
      'issue816-en-Chapter_433.json': chapter,
      'it-Chapter_433.json': italian,
      'issue900-hxh-en-Gon_Freecss-2.json': gon,
      'hxh-en-Gon_Freecss-2.json': gon,
      'hxh-en-Gon_Freecss-3.json': gon,
    }

    expect(pinnedTitles(sources, OP, '').get('Chapter 433')).toBe(
      'en-Chapter_433.json',
    )
    expect(
      pinnedTitles(
        { 'issue815-en-Chapter_433.json': chapter, 'it-X.json': italian },
        OP,
        '',
      ).get('Chapter 433'),
    ).toBe('issue815-en-Chapter_433.json')
    expect(pinnedTitles(sources, HXH, 'hxh-').get('Gon Freecss')).toBe(
      'hxh-en-Gon_Freecss-2.json',
    )
  })

  it('builds an entry whose hash is over the wikitext', () => {
    const answer = page('Episode 3 (2011)', 416_001)
    expect(sourceOf(HXH, answer)).toStrictEqual({
      locale: 'en',
      title: 'Episode 3 (2011)',
      revision: 416_001,
      revisionDate: '2026-10-01T00:00:00Z',
      // eslint-disable-next-line no-secrets/no-secrets -- a public wiki URL, the form under test
      url: 'https://hunterxhunter.fandom.com/wiki/Episode_3_%282011%29',
      revisionUrl: 'https://hunterxhunter.fandom.com/index.php?oldid=416001',
      apiUrl:
        // eslint-disable-next-line no-secrets/no-secrets -- a public API URL, the form under test
        'https://hunterxhunter.fandom.com/api.php?action=query&prop=revisions&rvprop=ids%7Ctimestamp%7Ccontent&rvslots=main&format=json&formatversion=2&revids=416001',
      contentSha256: sha(answer.revisions[0].slots.main.content),
    })
    expect(sourceOf(OP, page('Lola (Zombie)', 5)).url).toBe(
      'https://onepiece.fandom.com/wiki/Lola_%28Zombie%29',
    )
  })
})

describe('pinning a title', () => {
  let directory = ''
  const wikiFor = (en) => ({ cache: directory, en, it: '', slug: '' })

  beforeEach(() => {
    directory = mkdtempSync(path.join(tmpdir(), 'pin-'))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    rmSync(directory, { recursive: true, force: true })
  })

  it('reuses the pinned revision of this series and adds nothing', async () => {
    const pinned = sourceOf(HXH, page('Gon Freecss', 10))
    const sources = {
      'hxh-en-Gon_Freecss-10.json': pinned,
      // The same title on another wiki is no pin of this one.
      'en-Gon_Freecss.json': sourceOf(OP, page('Gon Freecss', 99)),
    }
    const fetch = answering({ '&revids=10': page('Gon Freecss', 10) })

    const result = await pinTitle('Gon_Freecss', {
      prefix: 'hxh-',
      wiki: wikiFor(HXH),
      sources,
    })

    expect(result).toMatchObject({ key: 'hxh-en-Gon_Freecss-10.json' })
    expect(result.source).toBeUndefined()
    expect(readFileSync(result.file, 'utf8')).toBe(
      'wikitext of Gon Freecss at 10',
    )
    expect(fetch).toHaveBeenCalledOnce()
  })

  it('pins a book page apart from the show page of the same title', async () => {
    const GOT = 'https://gameofthrones.fandom.com/api.php'
    const IAF = 'https://iceandfire.fandom.com/api.php'
    const sources = {
      'got-en-Eddard_Stark-5.json': sourceOf(GOT, page('Eddard Stark', 5)),
    }
    answering({ '&titles=Eddard%20Stark': page('Eddard Stark', 6) })

    const result = await pinTitle('Eddard Stark', {
      prefix: 'iaf-',
      wiki: wikiFor(IAF),
      sources,
    })

    expect(result.key).toBe('iaf-en-Eddard_Stark-6.json')
    expect(result.source?.url).toBe(
      'https://iceandfire.fandom.com/wiki/Eddard_Stark',
    )
  })

  it('follows a redirect onto a pinned page', async () => {
    const sources = {
      'en-Monkey_D._Luffy.json': sourceOf(OP, page('Monkey D. Luffy', 3)),
    }
    answering({
      '&titles=Luffy': page('Monkey D. Luffy', 8),
      '&revids=3': page('Monkey D. Luffy', 3),
    })

    const result = await pinTitle('Luffy', {
      prefix: '',
      wiki: wikiFor(OP),
      sources,
    })

    expect(result).toMatchObject({ key: 'en-Monkey_D._Luffy.json' })
    expect(result.source).toBeUndefined()
  })

  it('adds a new title at its latest revision', async () => {
    const sources = {}
    answering({
      '&titles=Episode%203%20(2011)': page('Episode 3 (2011)', 416_001),
    })

    const result = await pinTitle('Episode 3 (2011)', {
      prefix: 'hxh-',
      wiki: wikiFor(HXH),
      sources,
    })

    expect(result.key).toBe('hxh-en-Episode_3_(2011)-416001.json')
    expect(result.source?.contentSha256).toBe(
      sha(readFileSync(result.file, 'utf8')),
    )
  })

  it('fails on a missing page', async () => {
    answering({ '&titles=Nobody': { title: 'Nobody', missing: true } })

    await expect(
      pinTitle('Nobody', { prefix: '', wiki: wikiFor(OP), sources: {} }),
    ).rejects.toThrow('MISSING\tNobody')
  })

  it('pins a run of titles once each and reports the missing', async () => {
    vi.spyOn(console, 'log').mockReturnValue()
    const error = vi.spyOn(console, 'error').mockReturnValue()
    const fetch = answering({
      '&titles=Den%20Den%20Mushi': page('Den Den Mushi', 4),
      '&titles=Nobody': { title: 'Nobody', missing: true },
      '&revids=4': page('Den Den Mushi', 4),
    })
    const pinned = {}

    const { sources, failed } = await pinAll(
      ['Den Den Mushi', 'Nobody', 'Den_Den_Mushi'],
      { prefix: '', wiki: wikiFor(OP) },
      pinned,
    )

    expect(Object.keys(sources)).toStrictEqual(['en-Den_Den_Mushi.json'])
    expect(pinned).toStrictEqual({})
    expect(failed).toBe(true)
    expect(error).toHaveBeenCalledWith('MISSING\tNobody')
    expect(fetch).toHaveBeenCalledTimes(3)
  })

  it('writes the manifest only when something is new and it is no dry run', () => {
    vi.spyOn(console, 'error').mockReturnValue()
    const file = path.join(directory, 'sources.json')
    const manifest = { accessed: '2026-10-27', sources: {} }
    const text = manifestText(manifest, manifest.sources)
    const sources = { 'en-Gem.json': sourceOf(OP, page('Gem', 2)) }
    writeFileSync(file, text)

    save(file, manifest.sources, sources, true)
    save(file, manifest.sources, manifest.sources, false)
    expect(readFileSync(file, 'utf8')).toBe(text)

    save(file, manifest.sources, sources, false)
    expect(JSON.parse(readFileSync(file, 'utf8'))).toStrictEqual({
      ...manifest,
      sources,
    })
    expect(readdirSync(directory)).toStrictEqual(['sources.json'])
  })

  it('keeps what another session appended while this one ran', () => {
    vi.spyOn(console, 'error').mockReturnValue()
    const file = path.join(directory, 'sources.json')
    const gem = sourceOf(OP, page('Gem', 2))
    const theirs = { 'en-Laboon.json': sourceOf(OP, page('Laboon', 3)) }
    writeFileSync(file, manifestText({ accessed: 'x' }, theirs))

    save(file, {}, { 'en-Gem.json': gem }, false)

    expect(JSON.parse(readFileSync(file, 'utf8')).sources).toStrictEqual({
      ...theirs,
      'en-Gem.json': gem,
    })
  })

  it('writes nothing when another session took the key for another entry', () => {
    const file = path.join(directory, 'sources.json')
    const text = manifestText(
      { accessed: 'x' },
      { 'en-Gem.json': sourceOf(OP, page('Gem', 1)) },
    )
    writeFileSync(file, text)

    expect(() =>
      save(file, {}, { 'en-Gem.json': sourceOf(OP, page('Gem', 2)) }, false),
    ).toThrow('en-Gem.json already pins another entry')
    expect(readFileSync(file, 'utf8')).toBe(text)
  })

  it('reads the command line, or prints why it cannot', () => {
    const error = vi.spyOn(console, 'error').mockReturnValue()

    expect(argsOf(['--series', 'hunter-x-hunter', 'Gon', '--dry-run'])).toEqual(
      {
        values: { 'series': 'hunter-x-hunter', 'dry-run': true },
        positionals: ['Gon'],
      },
    )
    expect(argsOf(['--seires', 'x'])).toBeUndefined()
    expect(error).toHaveBeenCalledOnce()
  })
})

describe('the manifest', () => {
  it('keeps every earlier byte and appends after them', () => {
    const file = path.resolve(
      import.meta.dirname,
      '../docs/content-provenance/sources.json',
    )
    const text = readFileSync(file, 'utf8')
    const manifest = JSON.parse(text)
    const entry = sourceOf(HXH, page('Heavens Arena', 1))

    expect(manifestText(manifest, manifest.sources)).toBe(text)
    const next = manifestText(manifest, {
      ...manifest.sources,
      'hxh-en-Heavens_Arena-1.json': entry,
    })
    const end = text.lastIndexOf('    }\n')
    expect(next.slice(0, end)).toBe(text.slice(0, end))
    expect(Object.keys(JSON.parse(next).sources).at(-1)).toBe(
      'hxh-en-Heavens_Arena-1.json',
    )
  })
})
