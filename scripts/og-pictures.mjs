// The social pictures there should be, each with the page it is captured
// from and a digest of that page: the wide card a messaging app unfurls and
// the square icon a search engine shows. Pure, so the test can hold the
// committed files to it without a browser; `og-images.mjs` draws them.
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import path from 'node:path'

import { importArchive, ROOT } from './archive-loader.mjs'
import { drawingSvg, seriesPalette } from './art-sheet.mjs'
import { pagedRecords, readersAt, wordsOf } from './og-words.mjs'

/** @typedef {import('./art-sheet.mjs').Palette} Palette */
/** @typedef {import('../src/lib/view/records.ts').Stroke} Stroke */
/** @typedef {import('../src/data/types.ts').SeriesArchive} SeriesArchive */
/** @typedef {import('../src/server/archive/reader.server.ts').Reader} Reader */
/** @typedef {{ file: string, width: number, height: number, html: string, hash: string }} Picture */

const [
  { OPEN_SERIES, archiveOf },
  { hasPage },
  { LOCALES },
  { readerFor },
  { recordImages },
  { withFeatures },
] = await Promise.all(
  [
    'data/series/index.ts',
    'lib/progress/series.ts',
    'i18n/locales.ts',
    'server/archive/reader.server.ts',
    'lib/seo/socialImage.ts',
    'data/features.ts',
  ].map((module) => importArchive(module)),
)

// Laid out at half size and captured at twice the pixels (`SCALE`), so a
// stroke keeps the site's 2px pen at the drawing's own scale and the text
// stays sharp: the card comes out 1200×630, the square 600×600.
export const SCALE = 2
const CARD = { width: 600, height: 315 }
const SQUARE = { width: 300, height: 300 }
const CARD_ART = { x: 0, y: 0, width: 228, height: 285 }
const SQUARE_ART = { x: 0, y: 0, width: 208, height: 260 }

/** How far a long name may shrink to fit its lines (`fitName`). */
export const FIT = { size: 46, floor: 24, lines: 2, leading: 1.04 }

// fallow-ignore-next-line security-sink -- a constant path under the repository
const STYLESHEET = path.join(ROOT, 'src', 'styles', 'global.css')

/**
 * The site's own `@font-face` rules, as `src/styles/global.css` writes them.
 * A font is renamed when it changes, so the rules name every font a picture
 * is set in, and a picture is drawn again when they change.
 */
export const FONT_RULES = (
  readFileSync(STYLESHEET, 'utf8').match(/@font-face\s*\{[^}]*\}/gu) ?? []
).join('\n')

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }

/**
 * Text safe to put in an element.
 * @param {string} text The text.
 * @returns {string} The text with markup characters escaped.
 */
function escapeHtml(text) {
  return text.replaceAll(/["&<>]/gu, (char) => ESCAPES[char])
}

/**
 * The page a picture is captured from, without the fonts: they are the
 * site's own, and are added when it is drawn.
 * @param {{ width: number, height: number }} size The page's size in CSS pixels.
 * @param {Palette} palette The series' colours.
 * @param {string} body The page's content.
 * @param {string} style Its own rules.
 * @returns {string} The page.
 */
function pageOf(size, palette, body, style) {
  return [
    '<!doctype html><html><head><meta charset="utf-8"><style>',
    `html,body{margin:0}body{width:${size.width}px;height:${size.height}px;overflow:hidden;position:relative;background:${palette.paper};color:${palette.ink}}`,
    style,
    '</style></head><body>',
    body,
    '</body></html>',
  ].join('')
}

/**
 * The square icon: the drawing alone, centred.
 * @param {Stroke[]} strokes The first drawing.
 * @param {string} tint The record's tint.
 * @param {Palette} palette The series' colours.
 * @returns {string} The page.
 */
function squareHtml(strokes, tint, palette) {
  return pageOf(
    SQUARE,
    palette,
    `<div class="art">${drawingSvg({ strokes, tint }, palette, SQUARE_ART)}</div>`,
    `.art{position:absolute;left:${(SQUARE.width - SQUARE_ART.width) / 2}px;top:${(SQUARE.height - SQUARE_ART.height) / 2}px;width:${SQUARE_ART.width}px;height:${SQUARE_ART.height}px}`,
  )
}

/**
 * The wide card: the drawing, the name, the line under it and the site's name.
 * @param {{ strokes: Stroke[], tint: string, name: string, line?: string, brand: string }} card What it prints.
 * @param {Palette} palette The series' colours.
 * @returns {string} The page.
 */
export function cardHtml({ strokes, tint, name, line, brand }, palette) {
  const lineHtml =
    line === undefined ? '' : `<p class="line">${escapeHtml(line)}</p>`
  return pageOf(
    CARD,
    palette,
    [
      `<div class="art">${drawingSvg({ strokes, tint }, palette, CARD_ART)}</div>`,
      '<div class="text"><div class="rule"></div>',
      `<h1 class="name">${escapeHtml(name)}</h1>`,
      lineHtml,
      `</div><p class="brand">${escapeHtml(brand)}</p>`,
    ].join(''),
    [
      `.art{position:absolute;left:28px;top:${(CARD.height - CARD_ART.height) / 2}px;width:${CARD_ART.width}px;height:${CARD_ART.height}px}`,
      `.text{position:absolute;left:280px;right:32px;top:0;bottom:44px;display:flex;flex-direction:column;justify-content:center;gap:12px}`,
      `.rule{width:44px;height:4px;border-radius:2px;background:${palette.accent}}`,
      `.name{margin:0;font:800 ${FIT.size}px/${FIT.leading} 'Bricolage Grotesque',sans-serif;letter-spacing:-0.02em;overflow-wrap:anywhere}`,
      `.line{margin:0;font:400 21px/1.3 'Instrument Sans',sans-serif;color:${palette.muted}}`,
      `.brand{position:absolute;left:280px;bottom:22px;margin:0;font:600 14px/1 'Bricolage Grotesque',sans-serif;letter-spacing:0.04em;color:${palette.accent}}`,
    ].join(''),
  )
}

/**
 * A short digest of what a picture is drawn from: its page, its fonts, the
 * scale it is captured at and the bounds its name is fitted to.
 * @param {string} html The page.
 * @returns {string} Sixteen hex digits.
 */
export function hashOf(html) {
  return createHash('sha256')
    .update(html)
    .update(FONT_RULES)
    .update(JSON.stringify({ SCALE, FIT }))
    .digest('hex')
    .slice(0, 16)
}

/**
 * A reader at a bookmark, built once for every record that stands there.
 * @param {SeriesArchive} archive The series' archive.
 * @param {string} locale The locale.
 * @returns {(bookmark: import('../src/lib/progress/episode.ts').Bookmark) => Reader} The readers.
 */
function readersIn(archive, locale) {
  const readers = new Map()
  return (bookmark) => {
    const key = JSON.stringify(bookmark)
    if (!readers.has(key)) {
      readers.set(key, readerFor(archive, bookmark, locale))
    }
    return readers.get(key)
  }
}

/**
 * The pictures of one series, without their digests.
 * @param {string} slug The series' slug.
 * @returns {Promise<Omit<Picture, 'hash'>[]>} A square per record, then a card per locale.
 */
async function seriesPictures(slug) {
  const archive = await archiveOf(slug)
  const palette = seriesPalette(slug)
  const records = pagedRecords(withFeatures(archive), hasPage)
  const readers = new Map(
    LOCALES.map((locale) => [locale, readersIn(archive, locale)]),
  )
  return records.flatMap((entity) => {
    const strokes = archive.drawings[entity.visual.art]
    if (strokes === undefined || strokes.length === 0) {
      throw new Error(
        `${entity.id} has no first drawing to put on its pictures`,
      )
    }
    const { tint } = entity.visual
    const cards = LOCALES.map((locale) => {
      const words = wordsOf(entity, readersAt(entity, readers.get(locale)))
      const brand = `Zero Spoiler · ${archive.series.name[locale]}`
      return {
        file: recordImages(slug, locale, entity.id).card,
        ...CARD,
        html: cardHtml({ strokes, tint, ...words, brand }, palette),
      }
    })
    return [
      {
        file: recordImages(slug, 'en', entity.id).square,
        ...SQUARE,
        html: squareHtml(strokes, tint, palette),
      },
      ...cards,
    ]
  })
}

/**
 * Every picture of every open series, with the page it is captured from.
 * @returns {Promise<Picture[]>} The pictures, sorted by file.
 */
export async function picturesOf() {
  const bySeries = await Promise.all(
    OPEN_SERIES.map(({ slug }) => seriesPictures(slug)),
  )
  return bySeries
    .flat()
    .map((picture) => ({ ...picture, hash: hashOf(picture.html) }))
    .toSorted((a, b) => a.file.localeCompare(b.file))
}

/**
 * What a run has to do: the pictures to draw, and the files to delete.
 * @param {Picture[]} pictures Every picture there should be.
 * @param {Record<string, string>} manifest The committed digests.
 * @param {string[]} published The files there are.
 * @returns {{ draw: Picture[], orphans: string[] }} The work.
 */
export function workOf(pictures, manifest, published) {
  const there = new Set(published)
  const wanted = new Set(pictures.map((picture) => picture.file))
  return {
    draw: pictures.filter(
      (picture) =>
        !there.has(picture.file) || manifest[picture.file] !== picture.hash,
    ),
    orphans: published
      .filter((file) => !wanted.has(file))
      .toSorted((a, b) => a.localeCompare(b)),
  }
}
