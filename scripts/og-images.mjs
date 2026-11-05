// Draws every record page's social pictures into public/og/, ahead of time:
// the wide card WhatsApp and Telegram unfurl (drawing, name, one line, the
// site's name) and the square icon search engines show beside a result.
//
//   npm run og:images
//
// Run it after adding records or changing a first drawing, a name, the line
// under it or the layout (`og-pictures.mjs`); `og-images.test.mjs` fails
// until it has been run. Only the pictures whose page changed are drawn
// again, and the ones no record wants any more are deleted. The PNGs and the
// manifest are committed, so neither the build nor the Worker ever draws one.
// Needs Chrome, found as `npm run art:shots` finds it (or CHROME_PATH).
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { ROOT } from './archive-loader.mjs'
import { chromePath } from './art-shots.mjs'
import { FIT, picturesOf, SCALE, workOf } from './og-pictures.mjs'

/** @typedef {import('./og-pictures.mjs').Picture} Picture */

const PUBLIC = path.join(ROOT, 'public')
const MANIFEST = path.join(ROOT, 'scripts', 'og-images.manifest.json')

/**
 * Every PNG under public/og/, as the paths the site serves them at.
 * @returns {string[]} The paths, e.g. `/og/one-piece/franky.png`.
 */
export function publishedPictures() {
  const folder = path.join(PUBLIC, 'og')
  if (!existsSync(folder)) {
    return []
  }
  return readdirSync(folder, { recursive: true })
    .filter((file) => file.endsWith('.png'))
    .map((file) => `/og/${file.split(path.sep).join('/')}`)
}

/**
 * The digests the committed pictures were drawn from, or none.
 * @returns {Record<string, string>} Digest by path.
 */
export function readManifest() {
  return existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {}
}

/**
 * The site's own `@font-face` rules, each font inlined: a page set from a
 * string has no origin to load `/fonts/` from.
 * @returns {string} The rules.
 */
function fontFaces() {
  const css = readFileSync(
    path.join(ROOT, 'src', 'styles', 'global.css'),
    'utf8',
  )
  return (css.match(/@font-face\s*\{[^}]*\}/gu) ?? [])
    .map((rule) =>
      rule.replaceAll(/url\('\/fonts\/(?<file>[^']+)'\)/gu, (...match) => {
        const { file } = match.at(-1)
        // fallow-ignore-next-line security-sink -- a font file the repository's own stylesheet names
        const font = readFileSync(path.join(PUBLIC, 'fonts', file))
        // eslint-disable-next-line unicorn/prefer-uint8array-base64 -- Node 24 has no Uint8Array#toBase64
        return `url(data:font/woff2;base64,${font.toString('base64')})`
      }),
    )
    .join('\n')
}

/**
 * Shrinks the name until it fits its lines. Runs in the page, once the fonts
 * have loaded, so it measures the type that is drawn.
 * @param {{ size: number, floor: number, lines: number, leading: number }} fit The bounds.
 * @returns {void}
 */
function fitName({ size, floor, lines, leading }) {
  const name = globalThis.document.querySelector('.name')
  if (name === null) {
    return
  }
  const fits = (current) =>
    name.scrollWidth <= name.clientWidth
    && name.getBoundingClientRect().height <= current * leading * lines + 1
  for (let current = size; current > floor && !fits(current); current -= 1) {
    name.style.fontSize = `${current - 1}px`
  }
}

/**
 * Draws the pictures with one Chrome tab.
 * @param {Picture[]} pictures What to draw.
 * @returns {Promise<void>} Once every file is written.
 */
async function draw(pictures) {
  const { launch } = await import('puppeteer-core')
  const fonts = `<style>${fontFaces()}</style>`
  await using browser = await launch({ executablePath: chromePath() })
  const page = await browser.newPage()
  for (const [index, picture] of pictures.entries()) {
    await page.setViewport({
      width: picture.width,
      height: picture.height,
      deviceScaleFactor: SCALE,
    })
    await page.setContent(
      picture.html.replace('<style>', () => `${fonts}<style>`),
    )
    await page.evaluate(async () => {
      await globalThis.document.fonts.ready
    })
    await page.evaluate(fitName, FIT)
    // fallow-ignore-next-line security-sink -- a path built from the repository's own record ids
    const file = path.join(PUBLIC, picture.file)
    mkdirSync(path.dirname(file), { recursive: true })
    await page.screenshot({ path: file, type: 'png' })
    if ((index + 1) % 100 === 0) {
      process.stdout.write(`${index + 1}/${pictures.length}\n`)
    }
  }
}

/**
 * The command: draw what changed, delete what is gone, write the manifest.
 * @returns {Promise<void>} Once done.
 */
async function main() {
  const pictures = await picturesOf()
  const { draw: todo, orphans } = workOf(
    pictures,
    readManifest(),
    publishedPictures(),
  )
  await draw(todo)
  for (const file of orphans) {
    // fallow-ignore-next-line security-sink -- a file found under public/og/
    rmSync(path.join(PUBLIC, file))
  }
  const manifest = Object.fromEntries(
    pictures.map((picture) => [picture.file, picture.hash]),
  )
  writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`)
  process.stdout.write(
    `drew ${todo.length}, deleted ${orphans.length}, ${pictures.length} pictures in all\n`,
  )
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  await main()
}
