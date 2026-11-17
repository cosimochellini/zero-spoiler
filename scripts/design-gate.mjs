/**
 * Blocking design gate: impeccable's detector over the rendered pages.
 *
 * It serves the build `npm run build` already made with `vite preview` (never
 * `vite dev`, whose StyleX layer order differs), reads the page list from the
 * served sitemap, and runs `impeccable detect --json` over it at a phone and a
 * desktop width. URLs are scanned, not source: the detector applies only a few
 * regex rules to `.tsx` and cannot read `stylex.create`.
 *
 * Waivers live in `.impeccable/config.json` under `detector`, each with a
 * reason, and the detector applies them itself, so the design hook reads the
 * same baseline. Advisory rules never fail the gate.
 *
 * The bookmark: `?ep=N` answers 302 and sets the series cookie. The detector's
 * browser follows it and keeps cookies for the rest of one run, on a profile
 * that starts empty. So each width takes two runs: one with no bookmark (the
 * landing and onboarding pages), one where every address carries `?ep=N`.
 *
 * Exit codes:
 *   0  clean
 *   1  findings that no waiver covers
 *   2  the tool failed: no build, the server did not start, a page did not
 *      answer 200, or the detector could not scan a target
 */
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { createServer } from 'node:net'
import path from 'node:path'
import process from 'node:process'
import { setTimeout as sleep } from 'node:timers/promises'

const EXIT_CLEAN = 0
const EXIT_FINDINGS = 1
const EXIT_TOOL_FAILURE = 2

// The detector's own codes: 0 clean, 2 findings, 1 a target was not scanned.
const DETECTOR_FINDINGS = 2

const VIEWPORTS = ['390x844', '1440x900']
const LOCALE = 'en'
const READY_TIMEOUT_MS = 60_000
const READY_POLL_MS = 250
const DETECT_TIMEOUT_MS = 300_000
const MAX_PRINTED = 60

/**
 * Per series: a bookmark in the middle of the story, so a page shows revealed
 * and fogged content together, and the record of each kind to open. A series
 * that is not listed is still scanned, with no bookmark and the first record
 * of each kind in the sitemap.
 */
const SAMPLES = {
  'one-piece': {
    ep: 500,
    characters: 'monkey-d-luffy',
    places: 'water-seven',
    fruits: 'gum-gum-fruit',
  },
  'hunter-x-hunter': {
    ep: 75,
    characters: 'gon-freecss',
    places: 'heavens-arena',
  },
  'game-of-thrones': { ep: 35, characters: 'jon-snow', places: 'winterfell' },
}

const repositoryRoot = path.resolve(import.meta.dirname, '..')
const reportPath = path.join(repositoryRoot, '.gate', 'design.json')
const configPath = path.join(repositoryRoot, '.impeccable', 'config.json')

// The preview server and the detector runs. None may outlive the gate, on a
// pass, a failure or an uncaught throw alike.
const children = new Set()
process.on('exit', () => {
  for (const child of children) {
    child.kill()
  }
})

function fail(headline) {
  process.stderr.write(
    `\ndesign gate: TOOL FAILURE\n  ${headline}\n\n`
      + '  This is not a design finding: the pages were not scanned, so the\n'
      + '  gate refuses to pass.\n',
  )
  process.exit(EXIT_TOOL_FAILURE)
}

/**
 * Every waiver says why. `ignoreRules` and `ignoreFiles` hold bare strings
 * with no room for a reason, so a waiver goes in `ignoreValues`: `"*"` as the
 * value and a `files` glob turn a whole rule off, on every page (`**`) or on
 * the pages of one type.
 */
function assertWaiversExplained() {
  const { detector = {} } = JSON.parse(readFileSync(configPath, 'utf8'))
  const bare = [
    ...(detector.ignoreRules ?? []),
    ...(detector.ignoreFiles ?? []),
  ]
  const unexplained = (detector.ignoreValues ?? [])
    .filter((waiver) => !waiver.reason?.trim())
    .map((waiver) => `${waiver.rule}=${waiver.value}`)
  if (bare.length > 0 || unexplained.length > 0) {
    fail(
      `.impeccable/config.json waives ${[...bare, ...unexplained].join(', ')} with no reason.\n`
        + '  Use `impeccable ignores add-value <rule> "*" --file <glob> --reason "..."`.',
    )
  }
}

/**
 * Starts this Node binary on a script and keeps what it prints.
 * @param {string[]} args The script and its arguments.
 * @returns {{child: import('node:child_process').ChildProcess, output: {stdout: string, stderr: string}}}
 *   The child and both streams, filled as it writes.
 */
function start(args) {
  const child = spawn(process.execPath, args, {
    cwd: repositoryRoot,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  children.add(child)
  const output = { stdout: '', stderr: '' }
  child.stdout.on('data', (chunk) => (output.stdout += chunk))
  child.stderr.on('data', (chunk) => (output.stderr += chunk))
  return { child, output }
}

/** @returns {Promise<number>} A port nothing listens on. */
function freePort() {
  return new Promise((resolve, reject) => {
    const probe = createServer()
    probe.on('error', reject)
    probe.listen(0, '127.0.0.1', () => {
      const { port } = probe.address()
      probe.close(() => {
        resolve(port)
      })
    })
  })
}

/**
 * @param {string} origin The preview server.
 * @returns {Promise<null | string>} Its sitemap, or null while it is not up.
 */
async function sitemapOf(origin) {
  let response
  try {
    response = await fetch(`${origin}/sitemap.xml`)
  } catch {
    // Not listening yet.
    return null
  }
  return response.ok ? response.text() : null
}

/**
 * Starts `vite preview` and waits until it serves the sitemap.
 * @returns {Promise<{origin: string, sitemap: string}>} The server's origin
 *   and its sitemap.
 */
async function serve() {
  if (!existsSync(path.join(repositoryRoot, 'dist', 'client'))) {
    fail('dist/ is missing: run `npm run build` first')
  }
  const port = await freePort()
  const origin = `http://localhost:${port}`
  const { child, output } = start([
    path.join(repositoryRoot, 'node_modules', 'vite', 'bin', 'vite.js'),
    'preview',
    '--port',
    String(port),
    '--strictPort',
  ])

  const deadline = Date.now() + READY_TIMEOUT_MS
  while (Date.now() < deadline && child.exitCode === null) {
    const sitemap = await sitemapOf(origin)
    if (sitemap !== null) {
      return { origin, sitemap }
    }
    await sleep(READY_POLL_MS)
  }
  return fail(
    `vite preview did not serve ${origin}/sitemap.xml within ${READY_TIMEOUT_MS / 1000}s`
      + ` (exit code ${child.exitCode}). Its output:\n${output.stdout}${output.stderr}`,
  )
}

/**
 * The home of one series, its indexes and one record of each kind.
 * @param {string} slug The series.
 * @param {string[][]} own Its sitemap paths, split: slug, locale, kind, id.
 * @returns {string[]} Paths, the home first.
 */
function seriesPages(slug, own) {
  const home = `/${slug}/${LOCALE}`
  const kinds = new Set(own.map((parts) => parts[2]).filter(Boolean))
  return [home, ...kinds].flatMap((kind) => {
    if (kind === home) {
      return home
    }
    const ids = own.filter((p) => p[2] === kind && p[3]).map((p) => p[3])
    const id = SAMPLES[slug]?.[kind] ?? ids[0]
    if (id === undefined) {
      return `${home}/${kind}`
    }
    if (!ids.includes(id)) {
      fail(
        `SAMPLES names ${slug}/${kind}/${id}, which the sitemap does not list: update scripts/design-gate.mjs`,
      )
    }
    return [`${home}/${kind}`, `${home}/${kind}/${id}`]
  })
}

/**
 * The pages to scan, as paths. The sitemap is built from the series registry,
 * so a new series or page type is scanned without an edit here.
 * @param {string} sitemap The served sitemap.
 * @returns {{landing: string[], bookmarked: string[]}} Paths with no bookmark,
 *   and paths that set one.
 */
function pagesOf(sitemap) {
  const paths = sitemap
    .matchAll(/<loc>(?<loc>[^<]+)<\/loc>/gu)
    .map((match) => URL.parse(match.groups.loc).pathname.split('/').slice(1))
    .filter((parts) => parts.includes(LOCALE))
    .toArray()

  // `/en` and `/en/legal`: the pages outside any series.
  const landing = paths
    .filter((parts) => parts[0] === LOCALE)
    .map((parts) => `/${parts.join('/')}`)
  const bookmarked = []

  const slugs = new Set(
    paths.filter((parts) => parts[1] === LOCALE).map((parts) => parts[0]),
  )
  for (const slug of slugs) {
    const pages = seriesPages(
      slug,
      paths.filter((parts) => parts[0] === slug),
    )
    const ep = SAMPLES[slug]?.ep
    // With no bookmark to set, the whole series is scanned as a new reader
    // sees it; with one, only its home is.
    landing.push(...(ep === undefined ? pages : pages.slice(0, 1)))
    bookmarked.push(
      ...(ep === undefined ? [] : pages.map((page) => `${page}?ep=${ep}`)),
    )
  }
  return { landing, bookmarked }
}

/**
 * A wrong id or a server error still renders a page the detector would scan
 * and pass, so every address has to answer 200 first.
 * @param {string} origin The preview server.
 * @param {string[]} pages Paths to request.
 */
async function assertServed(origin, pages) {
  for (const page of pages) {
    const response = await fetch(origin + page)
    if (response.status !== 200) {
      fail(`${page} answered ${response.status}, expected 200`)
    }
  }
}

/**
 * One detector run: one browser profile, one viewport.
 * @param {string} origin The preview server.
 * @param {string} viewport Width and height, as `390x844`.
 * @param {string[]} pages Paths, scanned in order.
 * @returns {Promise<object[]>} The findings, each with its page and viewport.
 */
async function detect(origin, viewport, pages) {
  const cli = path.join(
    repositoryRoot,
    'node_modules',
    'impeccable',
    'cli',
    'bin',
    'cli.js',
  )
  const { child, output } = start([
    cli,
    'detect',
    '--json',
    '--viewport',
    viewport,
    // Anything after `npm run gate:design --` goes to the detector, so
    // `-- --no-config` shows the findings the waivers hide.
    ...process.argv.slice(2),
    ...pages.map((page) => origin + page),
  ])
  const timer = setTimeout(() => child.kill(), DETECT_TIMEOUT_MS)
  const [status] = await once(child, 'close')
  clearTimeout(timer)
  const { stdout, stderr } = output
  if (status !== 0 && status !== DETECTOR_FINDINGS) {
    fail(
      `impeccable detect exited ${status} at ${viewport}: a page could not be scanned.\n`
        + '  It needs Chrome, Chromium or Edge: set IMPECCABLE_BROWSER (or CHROME_PATH) to the\n'
        + '  executable when it is not on PATH. If Chrome refuses to start for want of a sandbox,\n'
        + '  PUPPETEER_DANGEROUS_NO_SANDBOX=1 turns it off for this run.\n'
        + `  Its output:\n${stderr}${stdout}`,
    )
  }
  let findings
  try {
    findings = JSON.parse(stdout)
  } catch (error) {
    fail(
      `impeccable detect printed no JSON at ${viewport}: ${String(error)}\n${stderr}`,
    )
  }
  return findings.map((finding) => ({
    ...finding,
    file: finding.file.replace(origin, ''),
    viewport,
  }))
}

function report(findings) {
  // Advisory rules are listed in the report and never block.
  const blocking = findings.filter((finding) => !finding.advisory)
  process.stdout.write(
    `\ndesign gate: ${findings.length} finding(s), ${blocking.length} blocking\n`
      + `  report: ${path.relative(repositoryRoot, reportPath)}\n`,
  )
  if (blocking.length === 0) {
    process.stdout.write('\ndesign gate: PASSED\n')
    return EXIT_CLEAN
  }
  process.stdout.write('\n  blocking findings:\n')
  for (const finding of blocking.slice(0, MAX_PRINTED)) {
    process.stdout.write(
      `    [${finding.antipattern}] ${finding.file} at ${finding.viewport}\n`
        + `        ${finding.snippet}\n        ${finding.selector ?? ''}\n`,
    )
  }
  if (blocking.length > MAX_PRINTED) {
    process.stdout.write(
      `    ... and ${blocking.length - MAX_PRINTED} more, see the report\n`,
    )
  }
  process.stderr.write(
    `\ndesign gate: FAILED with ${blocking.length} blocking finding(s).\n`
      + '  Fix the page, or waive a rule the house style contradicts in\n'
      + '  .impeccable/config.json with a reason (`impeccable ignores --help`).\n',
  )
  return EXIT_FINDINGS
}

/**
 * Scans every page at every width, each run in a browser of its own, side by
 * side: in sequence they take four times as long.
 * @param {string} origin The preview server.
 * @param {string} sitemap Its sitemap.
 * @returns {Promise<object[]>} Every finding.
 */
async function scan(origin, sitemap) {
  const { landing, bookmarked } = pagesOf(sitemap)
  await assertServed(origin, [...landing, ...bookmarked])
  process.stdout.write(
    `design gate: scanning ${landing.length + bookmarked.length} page(s) at ${VIEWPORTS.join(' and ')}\n`,
  )
  const runs = await Promise.all(
    VIEWPORTS.flatMap((viewport) => [
      detect(origin, viewport, landing),
      detect(origin, viewport, bookmarked),
    ]),
  )
  return runs.flat()
}

async function main() {
  mkdirSync(path.dirname(reportPath), { recursive: true })
  // A stale report must never survive a failed run.
  rmSync(reportPath, { force: true })
  assertWaiversExplained()

  const started = Date.now()
  const { origin, sitemap } = await serve()
  const findings = await scan(origin, sitemap)
  writeFileSync(reportPath, `${JSON.stringify(findings, null, 2)}\n`)
  const verdict = report(findings)
  process.stdout.write(`  took ${Math.round((Date.now() - started) / 1000)}s\n`)
  return verdict
}

// An explicit exit: the preview server would keep the process alive.
process.exit(await main())
