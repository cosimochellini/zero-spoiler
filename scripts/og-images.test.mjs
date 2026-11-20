// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { createHash } from 'node:crypto'
import { beforeAll, describe, expect, it } from 'vitest'

import { importArchive } from './archive-loader.mjs'
import { publishedPictures, readManifest } from './og-images.mjs'
import {
  cardHtml,
  FIT_NAME,
  FONT_RULES,
  hashOf,
  picturesOf,
  SCALE,
  workOf,
} from './og-pictures.mjs'
import { pagedRecords } from './og-words.mjs'

const PALETTE = { paper: '#000', ink: '#fff', muted: '#888', accent: '#ff0' }

/** @type {{ pictures: Awaited<ReturnType<typeof picturesOf>> }} */
const loaded = { pictures: [] }

/**
 * One drawn picture.
 * @param {string} file Its path.
 * @returns {Awaited<ReturnType<typeof picturesOf>>[number]} The picture.
 */
function pictureOf(file) {
  const picture = loaded.pictures.find((candidate) => candidate.file === file)
  if (picture === undefined) {
    throw new Error(`no picture ${file}`)
  }
  return picture
}

/**
 * What a card prints under the name, or nothing.
 * @param {string} file The card's path.
 * @returns {string | undefined} The line.
 */
function lineOf(file) {
  return /<p class="line">(?<line>[^<]*)<\/p>/u.exec(pictureOf(file).html)
    ?.groups?.line
}

/**
 * The name a card prints.
 * @param {string} file The card's path.
 * @returns {string | undefined} The name.
 */
function nameOf(file) {
  return /<h1 class="name">(?<name>[^<]*)<\/h1>/u.exec(pictureOf(file).html)
    ?.groups?.name
}

// The first `picturesOf` imports every series' archive through the one Vite
// server all test files share, which can take far longer than the 5s default
// under load (#279).
beforeAll(async () => {
  loaded.pictures = await picturesOf()
}, 60_000)

describe('the committed pictures', () => {
  it('are every picture there should be, each drawn from its current page (run `npm run og:images`)', () => {
    const { draw, orphans } = workOf(
      loaded.pictures,
      readManifest(),
      publishedPictures(),
    )

    const files = [...draw.map((picture) => picture.file), ...orphans]

    expect(
      {
        stale: draw.length,
        orphans: orphans.length,
        first: files.slice(0, 10),
      },
      'run `npm run og:images` and commit public/og/ and the manifest',
    ).toStrictEqual({ stale: 0, orphans: 0, first: [] })
  })

  it('are there for every record page the sitemap publishes, in its locale', async () => {
    const { sitemapXml } = await importArchive('server/seo/sitemap.server.ts')
    const xml = await sitemapXml()
    const files = new Set(loaded.pictures.map((picture) => picture.file))
    const records = xml
      .matchAll(
        /<loc>[^<]*\/(?<series>[^/]+)\/(?<locale>[a-z]{2})\/(?:abilities|characters|fruits|places)\/(?<id>[^<]+)<\/loc>/gu,
      )
      .map((match) => match.groups)
      .toArray()
    const squares = xml
      .matchAll(/<image:loc>[^<]*(?<file>\/og\/[^<]+)<\/image:loc>/gu)
      .map((match) => match.groups.file)
      .toArray()
    const missing = [
      ...records.map(
        ({ series, locale, id }) => `/og/${series}/${locale}/${id}.png`,
      ),
      ...squares,
    ].filter((file) => !files.has(file))

    expect(records.length).toBeGreaterThan(1000)
    expect(squares).toHaveLength(records.length)
    expect(missing).toStrictEqual([])
  })
})

describe('what a card prints under the name', () => {
  it('is an epithet a reader has at the record’s threshold', () => {
    expect(lineOf('/og/one-piece/en/nico-robin.png')).toBe('Devil Child')
    expect(lineOf('/og/one-piece/it/nico-robin.png')).toBe('Figlia del Demonio')
  })

  it('is the role while the epithet is still to come', () => {
    expect(lineOf('/og/one-piece/en/monkey-d-luffy.png')).toBe('Captain')
  })

  it('is a fruit’s type, a place’s form and sea, a ship’s kind', () => {
    expect(lineOf('/og/one-piece/en/gum-gum-fruit.png')).toBe('Paramecia')
    expect(lineOf('/og/one-piece/en/going-merry.png')).toBe('Ship')
    expect(lineOf('/og/one-piece/en/foosha-village.png')).toBe(
      'Village · East Blue',
    )
  })
})

/** The page payload that draws a record of each kind. */
const LOADERS = {
  ability: 'loadAbility',
  character: 'loadCharacter',
  fruit: 'loadFruit',
  place: 'loadPlace',
  ship: 'loadPlace',
}

/**
 * Every card of a record the anime names otherwise (`Entity.episodeName`), in
 * every open series and locale, beside the head of the page a reader with no
 * bookmark is given.
 * @returns {Promise<{ file: string, card?: string, page: string, titled: boolean }[]>} One per card.
 */
async function renamedCards() {
  const [
    { OPEN_SERIES, archiveOf },
    { hasPage },
    { LOCALES },
    { withFeatures },
    { payloadsFor },
  ] = await Promise.all(
    [
      'data/series/index.ts',
      'lib/progress/series.ts',
      'i18n/locales.ts',
      'data/features.ts',
      'server/archive/payloads.server.ts',
    ].map((module) => importArchive(module)),
  )
  const cards = []
  for (const { slug } of OPEN_SERIES) {
    const archive = await archiveOf(slug)
    const payloads = payloadsFor(archive)
    const renamed = pagedRecords(withFeatures(archive), hasPage).filter(
      ({ episodeName }) => episodeName !== undefined,
    )
    for (const entity of renamed) {
      const load = payloads.find(({ name }) => name === LOADERS[entity.kind])
      for (const locale of LOCALES) {
        const file = `/og/${slug}/${locale}/${entity.id}.png`
        const { head } = load.run(null, locale, entity.id)
        cards.push({
          file,
          card: nameOf(file),
          page: head.image.alt,
          titled: head.title.includes(head.image.alt),
        })
      }
    }
  }
  return cards
}

describe('the name on a card', () => {
  it('is the one the page with no bookmark is titled with, for every record the anime names otherwise', async () => {
    const cards = await renamedCards()

    expect(cards.map(({ file }) => file)).toContain(
      '/og/hunter-x-hunter/en/hagya.png',
    )
    expect(
      cards.filter(({ card, page, titled }) => card !== page || !titled),
    ).toStrictEqual([])
    expect(cards.find(({ file }) => file.endsWith('/en/hagya.png'))?.card).toBe(
      'Hagya',
    )
  })
})

describe('the drawing on a picture', () => {
  it('is the first one, never a later redrawing', async () => {
    const { DRAWINGS, REDRAWINGS } = await importArchive(
      'data/series/one-piece/art/index.ts',
    )
    const square =
      loaded.pictures.find(
        (picture) => picture.file === '/og/one-piece/going-merry.png',
      )?.html ?? ''
    const first = DRAWINGS['going-merry'].map((stroke) => stroke.d)
    const redrawn = REDRAWINGS['going-merry'].flatMap((entry) => entry.value)
    const later = redrawn
      .map((stroke) => stroke.d)
      .filter((d) => !first.includes(d))
    const drawn = (d) => square.includes(`d="${d}"`)

    expect(later.length).toBeGreaterThan(0)
    expect(first.every((d) => drawn(d))).toBe(true)
    expect(later.some((d) => drawn(d))).toBe(false)
  })
})

describe('a card page', () => {
  it('escapes what it prints', () => {
    const html = cardHtml(
      { strokes: [], tint: 'ivory', name: 'A <b> & "c"', brand: 'Z' },
      PALETTE,
    )

    expect(html).toContain('A &lt;b&gt; &amp; &quot;c&quot;')
    expect(html).not.toContain('class="line"')
  })

  it('hashes to a new value when anything it prints changes', () => {
    const card = { strokes: [], tint: 'ivory', name: 'A', brand: 'Z' }

    expect(hashOf(cardHtml(card, PALETTE))).toBe(
      hashOf(cardHtml(card, PALETTE)),
    )
    expect(hashOf(cardHtml(card, PALETTE))).not.toBe(
      hashOf(cardHtml({ ...card, line: 'B' }, PALETTE)),
    )
  })

  it('digests its fonts, how its name is fitted and its scale too', () => {
    const html = cardHtml(
      { strokes: [], tint: 'ivory', name: 'A', brand: 'Z' },
      PALETTE,
    )
    const digest = createHash('sha256')
      .update(html)
      .update(FONT_RULES)
      .update(FIT_NAME)
      .update(String(SCALE))
      .digest('hex')

    expect(FONT_RULES).toContain('@font-face')
    expect(FIT_NAME).toContain('.name')
    expect(hashOf(html)).toBe(digest.slice(0, 16))
  })
})

describe('a run’s work', () => {
  const picture = {
    file: '/og/a.png',
    hash: 'h',
    width: 1,
    height: 1,
    html: '',
  }

  it('draws what is missing or changed and deletes what nothing wants', () => {
    expect(workOf([picture], {}, ['/og/b.png'])).toStrictEqual({
      draw: [picture],
      orphans: ['/og/b.png'],
    })
    expect(
      workOf([picture], { '/og/a.png': 'old' }, ['/og/a.png']).draw,
    ).toStrictEqual([picture])
    expect(
      workOf([picture], { '/og/a.png': 'h' }, ['/og/a.png']),
    ).toStrictEqual({ draw: [], orphans: [] })
  })
})
