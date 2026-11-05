// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from.
import { beforeAll, describe, expect, it } from 'vitest'

import { importArchive } from './archive-loader.mjs'
import { publishedPictures, readManifest } from './og-images.mjs'
import { cardHtml, hashOf, picturesOf, workOf } from './og-pictures.mjs'
import { agreed } from './og-words.mjs'

const PALETTE = { paper: '#000', ink: '#fff', muted: '#888', accent: '#ff0' }

/** @type {{ pictures: Awaited<ReturnType<typeof picturesOf>> }} */
const loaded = { pictures: [] }

/**
 * What a card prints under the name, or nothing.
 * @param {string} file The card's path.
 * @returns {string | undefined} The line.
 */
function lineOf(file) {
  const picture = loaded.pictures.find((candidate) => candidate.file === file)
  if (picture === undefined) {
    throw new Error(`no picture ${file}`)
  }
  return /<p class="line">(?<line>[^<]*)<\/p>/u.exec(picture.html)?.groups?.line
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

  it('cover every record page in both locales, and a square for each', () => {
    const squares = loaded.pictures.filter((picture) => picture.width === 300)

    expect(loaded.pictures).toHaveLength(squares.length * 3)
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

  it('is only what every source agrees on at the threshold', () => {
    expect(agreed(['Captain', 'Captain'])).toBe('Captain')
    expect(agreed(['Captain', 'Admiral'])).toBeUndefined()
    expect(agreed(['Captain', undefined])).toBeUndefined()
    expect(agreed([undefined])).toBeUndefined()
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
