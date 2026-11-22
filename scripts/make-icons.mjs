// Renders public/icon.svg into the hub's bitmap icons, each open series' hub
// emblem (src/components/seriesEmblems.ts) into that series' own icons, the
// web app manifests the head links point at (#1517), and scripts/og-card.svg
// into the social card the Open Graph tags point at. Run by hand after
// editing either SVG, an emblem, a theme or a series' name:
// `node scripts/make-icons.mjs`; `make-icons.test.mjs` fails until then on
// the manifests and on each series' tab SVG, the text its bitmaps are drawn
// from. Needs
// `rsvg-convert` (librsvg) on PATH; the outputs are committed, so the build
// never depends on it. A record's own card and square icon are drawn by
// scripts/og-images.mjs instead.
import { Buffer } from 'node:buffer'
import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import { importArchive } from './archive-loader.mjs'
import { seriesPalette } from './art-sheet.mjs'
import { isMain } from './is-main.mjs'

const root = path.join(import.meta.dirname, '..')
const svg = path.join(root, 'public', 'icon.svg')
const icons = path.join(root, 'public', 'icons')
const card = path.join(root, 'scripts', 'og-card.svg')

// The icons are square, the card is not, so the two edges are separate
// arguments: rsvg-convert stretches to the box it is given rather than
// letterboxing into it.
function render(source, width, height = width) {
  return execFileSync('rsvg-convert', [
    '-w',
    String(width),
    '-h',
    String(height),
    source,
  ])
}

/**
 * A file in public/icons.
 * @param {string} name Its name: a series slug from the repository's own
 * list, or a literal, with a literal suffix.
 * @returns {string} Its path.
 */
function iconFile(name) {
  // fallow-ignore-next-line security-sink -- the name is built from the repository's own series list and literals, never outside input
  return path.join(icons, name)
}

// rsvg-convert reads a file, so an icon drawn here is written out first.
function renderText(text, size) {
  const file = iconFile('.render.svg')
  writeFileSync(file, text)
  return render(file, size)
}

const HEADER_BYTES = 6
const ENTRY_BYTES = 16
// An edge of 256 is stored as 0: the field is one byte, so 256 does not fit
// and 0 is how the format spells it.
const OVERSIZE_EDGE = 256

// The file header: reserved, then the type (1 is an icon, 2 a cursor), then
// how many directory entries follow.
function icoHeader(count) {
  const header = Buffer.alloc(HEADER_BYTES)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)
  return header
}

// One directory entry, pointing at an image already laid out in the file.
function icoEntry({ size, byteLength, offset }) {
  const edge = size === OVERSIZE_EDGE ? 0 : size
  const entry = Buffer.alloc(ENTRY_BYTES)
  entry.writeUInt8(edge, 0) // width
  entry.writeUInt8(edge, 1) // height
  entry.writeUInt8(0, 2) // palette
  entry.writeUInt8(0, 3) // reserved
  entry.writeUInt16LE(1, 4) // colour planes
  entry.writeUInt16LE(32, 6) // bits per pixel
  entry.writeUInt32LE(byteLength, 8)
  entry.writeUInt32LE(offset, 12)
  return entry
}

// ICO container holding PNG-encoded images, which every current browser reads.
function ico(images) {
  const entries = []
  // The images sit after the header and the whole directory, so every offset
  // is known before a single byte of image data is copied.
  let offset = HEADER_BYTES + ENTRY_BYTES * images.length
  for (const { size, data } of images) {
    entries.push(icoEntry({ size, byteLength: data.length, offset }))
    offset += data.length
  }

  return Buffer.concat([
    icoHeader(images.length),
    ...entries,
    ...images.map((image) => image.data),
  ])
}

/**
 * Which strokes of a series' hub emblem its icon keeps, and the square of
 * the 160×200 drawing it shows: `[x, y, edge]`. A tab icon keeps the plain
 * and accent strokes, a home-screen icon the soft ones too; ambient strokes
 * (the sea, the weave, a shadow) never survive the size. `omit` lists the
 * strokes, by index, left out of both, `omitSmall` those left out of the tab
 * icon only, and `pen` the tab icon's line in 32ths of the tile.
 * Owner, 2026-11-22: the emblem on a tile of the theme's `paper3`.
 * @type {Record<string, { box: [number, number, number], omit?: number[], omitSmall?: number[], pen?: number }>}
 */
const CUTS = {
  'one-piece': { box: [10, 72, 140] },
  // The compass alone: the folded map under it turns to a smudge at 16px.
  'hunter-x-hunter': { box: [26, 32, 108], omit: [0, 1, 2] },
  // The balls on the crown's tips run together below the home-screen size.
  'game-of-thrones': { box: [22, 60, 116], omitSmall: [2], pen: 1.7 },
}

const TILE = 32
const RADIUS = 7

/**
 * A length cut to four decimals, all an icon this size can show.
 * @param {number} value The length.
 * @returns {number} The length, as the SVG prints it.
 */
const round = (value) => Math.round(value * 10_000) / 10_000
// The share of the tile the drawing spans: a tab icon fills it, a home-screen
// icon breathes, and a maskable one stays inside the 80% circle Android may
// crop it to.
const INSET = { small: 0.86, large: 0.78, touch: 0.78, maskable: 0.62 }

/**
 * The strokes an icon leaves out of its emblem, by index.
 * @param {(typeof CUTS)[string]} cut What the icons keep of the emblem.
 * @param {boolean} small Whether it is the tab icon.
 * @returns {Set<number>} Their indexes in the emblem.
 */
function omittedFrom(cut, small) {
  const omitted = new Set(cut.omit)
  if (small && cut.omitSmall !== undefined) {
    for (const index of cut.omitSmall) {
      omitted.add(index)
    }
  }
  return omitted
}

/**
 * One icon of a series, as SVG text.
 * @param {{ d: string, role?: string }[]} emblem The series' hub emblem.
 * @param {Record<string, string>} palette Its theme, as hex.
 * @param {(typeof CUTS)[string]} cut What the icon keeps of the emblem.
 * @param {'small' | 'large' | 'touch' | 'maskable'} variant The icon.
 * @returns {string} The SVG.
 */
export function iconSvg(emblem, palette, cut, variant) {
  const small = variant === 'small'
  const [x, y, edge] = cut.box
  const span = TILE * INSET[variant]
  const scale = span / edge
  const offset = (TILE - span) / 2
  const pen = round((small ? (cut.pen ?? 2.2) : 1.4) / scale)
  const omitted = omittedFrom(cut, small)
  const kept = emblem.filter(
    (stroke, index) => !omitted.has(index) && stroke.role !== 'ambient',
  )
  // Soft strokes first, so the plain and accent lines sit on top of them.
  const soft = small ? [] : kept.filter(({ role }) => role === 'soft')
  const strokes = [
    ...soft.map(
      ({ d }) =>
        `<path d="${d}" stroke="${palette.ink}" stroke-opacity="0.55" stroke-width="${round(pen * 0.7)}"/>`,
    ),
    ...kept
      .filter(({ role }) => role !== 'soft')
      .map(
        ({ d, role }) =>
          `<path d="${d}" stroke="${role === 'accent' ? palette.accent : palette.ink}" stroke-width="${pen}"/>`,
      ),
  ]
  const radius = variant === 'small' || variant === 'large' ? RADIUS : 0
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TILE} ${TILE}" width="${TILE}" height="${TILE}">`,
    `<clipPath id="tile"><rect width="${TILE}" height="${TILE}" rx="${radius}"/></clipPath>`,
    `<rect width="${TILE}" height="${TILE}" rx="${radius}" fill="${palette.paper3}"/>`,
    `<g clip-path="url(#tile)">`,
    `<g fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(${round(offset)} ${round(offset)}) scale(${round(scale)}) translate(${-x} ${-y})">`,
    ...strokes,
    '</g>',
    '</g>',
    '</svg>',
    '',
  ].join('\n')
}

/**
 * The web app manifest of the hub (`series` null) or of a series, in one
 * language: an installed series is an app of its own, scoped to its
 * addresses, and one `id` per series keeps the two languages one app.
 * @param {{ slug: string, name: Record<string, string> } | null} series The series.
 * @param {string} locale The language it opens in.
 * @param {{ name: string, short: string }} names Its install dialog's name and the one under its icon.
 * @param {string} theme Its tile colour, as hex.
 * @returns {object} The manifest.
 */
function manifestOf(series, locale, names, theme) {
  const scope = series === null ? '/' : `/${series.slug}/`
  const icon = series === null ? '/icons/hub' : `/icons/${series.slug}`
  return {
    id: scope,
    name: names.name,
    short_name: names.short,
    lang: locale,
    start_url: series === null ? `/${locale}` : `/${series.slug}/${locale}`,
    scope,
    display: 'standalone',
    background_color: theme,
    theme_color: theme,
    icons: [
      { src: `${icon}-192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${icon}-512.png`, sizes: '512x512', type: 'image/png' },
      {
        src: `${icon}-maskable-512.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}

/**
 * The hub's tile, read off public/icon.svg so the two never disagree.
 * @returns {string} The colour, as hex.
 */
function hubTile() {
  const tile = /fill="(?<tile>#[\da-f]{6})"/u.exec(readFileSync(svg, 'utf8'))
    ?.groups?.tile
  if (tile === undefined) {
    throw new Error(
      'public/icon.svg has no lowercase #rrggbb fill for its tile',
    )
  }
  return tile
}

const HUB_TILE = hubTile()

/**
 * Every manifest file, by its name in public/icons, as the head links name
 * them.
 * @returns {Promise<Map<string, object>>} The manifests.
 */
export async function manifests() {
  const { OPEN_SERIES } = await importArchive('data/series/index.ts')
  const { LOCALES } = await importArchive('i18n/locales.ts')
  const { appShortName } = await importArchive('lib/appIcons.ts')
  const files = new Map()
  for (const locale of LOCALES) {
    const hub = appShortName(null, locale)
    files.set(
      `hub.${locale}.webmanifest`,
      manifestOf(null, locale, { name: hub, short: hub }, HUB_TILE),
    )
    for (const { description } of OPEN_SERIES) {
      files.set(
        `${description.slug}.${locale}.webmanifest`,
        manifestOf(
          description,
          locale,
          {
            name: `${description.name[locale]} · ${hub}`,
            short: appShortName(description, locale),
          },
          seriesPalette(description.slug).paper3,
        ),
      )
    }
  }
  return files
}

/**
 * A manifest as its file holds it.
 * @param {object} manifest The manifest.
 * @returns {string} The text.
 */
export function manifestText(manifest) {
  return `${JSON.stringify(manifest, null, 2)}\n`
}

const SIZES = [16, 32]

/** The hub's compass as a home-screen and a maskable icon. */
function hubIcons() {
  writeFileSync(
    path.join(root, 'public', 'favicon.ico'),
    ico(SIZES.map((size) => ({ size, data: render(svg, size) }))),
  )
  writeFileSync(
    path.join(root, 'public', 'apple-touch-icon.png'),
    render(svg, 180),
  )
  writeFileSync(iconFile('hub-192.png'), render(svg, 192))
  writeFileSync(iconFile('hub-512.png'), render(svg, 512))
  // The compass shrunk into the safe circle, on a square of its own tile.
  const hub = readFileSync(svg, 'utf8')
  const inner = hub.slice(hub.indexOf('>') + 1, hub.lastIndexOf('</svg>'))
  writeFileSync(
    iconFile('hub-maskable-512.png'),
    renderText(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="${HUB_TILE}"/><g transform="translate(5 5) scale(0.6875)">${inner}</g></svg>`,
      512,
    ),
  )
}

// A series' bitmaps beside its SVG and `.ico`: file suffix, icon, edge.
const BITMAPS = [
  ['-180.png', 'touch', 180],
  ['-192.png', 'large', 192],
  ['-512.png', 'large', 512],
  ['-maskable-512.png', 'maskable', 512],
]

/**
 * What draws one open series' icons, from its hub emblem and its theme.
 * @param {string} slug The series.
 * @param {{ d: string, role?: string }[] | undefined} emblem Its hub emblem.
 * @returns {(variant: 'small' | 'large' | 'touch' | 'maskable') => string} The drawer.
 */
export function seriesDrawer(slug, emblem) {
  const cut = CUTS[slug]
  if (cut === undefined || emblem === undefined) {
    throw new Error(`${slug} has no hub emblem or no cut in CUTS`)
  }
  const palette = seriesPalette(slug)
  return (variant) => iconSvg(emblem, palette, cut, variant)
}

/**
 * Every icon of one open series.
 * @param {string} slug The series.
 * @param {{ d: string, role?: string }[] | undefined} emblem Its hub emblem.
 */
function seriesIcons(slug, emblem) {
  const draw = seriesDrawer(slug, emblem)
  const tab = draw('small')
  writeFileSync(iconFile(`${slug}.svg`), tab)
  writeFileSync(
    iconFile(`${slug}.ico`),
    ico(SIZES.map((size) => ({ size, data: renderText(tab, size) }))),
  )
  for (const [suffix, variant, size] of BITMAPS) {
    writeFileSync(iconFile(`${slug}${suffix}`), renderText(draw(variant), size))
  }
}

async function main() {
  mkdirSync(icons, { recursive: true })
  hubIcons()
  const { OPEN_SERIES } = await importArchive('data/series/index.ts')
  const { EMBLEMS } = await importArchive('components/seriesEmblems.ts')
  for (const { slug } of OPEN_SERIES) {
    seriesIcons(slug, EMBLEMS[slug])
  }
  rmSync(iconFile('.render.svg'))
  const files = await manifests()
  for (const [file, manifest] of files) {
    writeFileSync(iconFile(file), manifestText(manifest))
  }

  // The size every platform crops its link preview from: 1.91:1, and large
  // enough that Twitter and Slack take the wide card rather than the small one.
  const CARD_WIDTH = 1200
  const CARD_HEIGHT = 630
  writeFileSync(
    path.join(root, 'public', 'og-card.png'),
    render(card, CARD_WIDTH, CARD_HEIGHT),
  )

  process.stdout.write(
    'wrote public/favicon.ico, public/apple-touch-icon.png, public/icons/ and public/og-card.png\n',
  )
}

if (isMain(import.meta)) {
  await main()
}
