/**
 * Blocking design gate: impeccable's detector over the rendered pages.
 *
 * It serves the build `npm run build` already made with `vite preview` (never
 * `vite dev`, whose StyleX layer order differs), reads the page list from the
 * served sitemap, and runs `impeccable detect --json` over it at a phone and a
 * desktop width. URLs are scanned, not source: the detector applies only a few
 * regex rules to `.tsx` and cannot read `stylex.create`.
 *
 * Waivers live in the shared `.impeccable/config.json` under
 * `detector.ignoreValues`, each with a reason; the design hook reads the same
 * file. The scan itself is raw (`--no-config`) and the gate applies the
 * waivers, in `design-gate.rules.mjs`, because that is the only way one scan
 * shows both what a waiver hides and that it still hides something: a waiver
 * that matches nothing fails the gate, unless its reason starts with
 * `Permanent: ` (the house style). `.impeccable/config.local.json` and
 * in-file ignore comments are therefore never read, so a developer's machine
 * and CI agree. Advisory rules never fail the gate.
 *
 * The detector's `design-system-*` rules need `DESIGN.md`, and engine 0.1.24
 * loads it only for a local file target, found upwards from that file: never
 * for an HTTP address, whatever the working directory, the config or the
 * environment (probed in #1385). So a fifth run, in
 * `design-gate.tokens.mjs`, scans saved copies of the same pages at 1440 px
 * and keeps only those rules, with a canary page set in a font and a colour
 * outside the tokens that proves the engine read `DESIGN.md`. A font or a
 * colour outside the tokens blocks; a radius or a type size off the scale
 * stays advisory, as the engine rates it (#1403). The copies are the server's
 * markup with no script (streamed sections and `<details>` opened), so what
 * the browser builds after hydration, most of the characters, places, fruits
 * and abilities indexes, is not checked; the gate prints those pages.
 *
 * The bookmark: `?ep=N` answers 302 and sets the series cookie. The detector's
 * browser follows it and keeps cookies for the rest of one run, on a profile
 * that starts empty. So each width takes two runs: one with no bookmark (the
 * landing and onboarding pages), one where every address carries `?ep=N`.
 * Before either, the gate asks for every page itself and refuses to scan one
 * that is not in the state it wants.
 *
 * Exit codes:
 *   0  clean
 *   1  findings that no waiver covers
 *   2  the gate cannot vouch for the scan: no build, the server did not
 *      start, the page list is short, a page was not served as asked, the
 *      detector could not scan a target or ran out of time on a run and on
 *      its one retry, the token scan's canary page was not flagged as
 *      expected, or a waiver gives no reason, is one the detector would not
 *      apply, or is temporary and matches nothing
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
import { fileURLToPath } from 'node:url'

import {
  bookmarkedPageProblem,
  bookmarkProblem,
  detectWithRetry,
  judge,
  pageProblem,
  pagesOf,
  refusedWaivers,
} from './design-gate.rules.mjs'
import { scanTokens, TOKEN_VIEWPORT } from './design-gate.tokens.mjs'

const EXIT_CLEAN = 0
const EXIT_FINDINGS = 1
const EXIT_TOOL_FAILURE = 2
// 128 + the signal's number, as a shell reports a process a signal ended.
const SIGNAL_EXITS = { SIGINT: 130, SIGTERM: 143 }

const VIEWPORTS = ['390x844', '1440x900']
const LOCALE = 'en'
const HOST = '127.0.0.1'
const READY_TIMEOUT_MS = 60_000
const READY_POLL_MS = 250
const FETCH_TIMEOUT_MS = 15_000
const DETECT_TIMEOUT_MS = 300_000
const MAX_PRINTED = 60

/**
 * Per series: a bookmark in the middle of the story, so a page shows revealed
 * and fogged content together, and the record of each kind to open, which has
 * to be open at that bookmark. `indexes` are its kinds with one page and no
 * record. The sitemap has to list every kind named here, so a page type that
 * leaves it fails the gate; add a kind here when a series gains one. A series
 * or a kind that is not listed is still scanned, the series with no bookmark
 * and the kind on its first record in the sitemap, and the gate says so.
 */
const SAMPLES = {
  'one-piece': {
    ep: 500,
    characters: 'monkey-d-luffy',
    places: 'water-seven',
    fruits: 'gum-gum-fruit',
    indexes: ['filler', 'ranks'],
  },
  'hunter-x-hunter': {
    ep: 75,
    characters: 'gon-freecss',
    places: 'heavens-arena',
    abilities: 'battle-waltz',
    indexes: ['ranks'],
  },
  'game-of-thrones': { ep: 35, characters: 'jon-snow', places: 'winterfell' },
}

const repositoryRoot = path.resolve(import.meta.dirname, '..')
const reportPath = path.join(repositoryRoot, '.gate', 'design.json')
const configPath = path.join(repositoryRoot, '.impeccable', 'config.json')

// The preview server and the detector runs, each the leader of a process
// group of its own: the preview starts workerd, and the detector is a shim
// that starts the engine, which starts Chrome. Killing the group is the only
// way to reach all of them, and only groups started here are ever killed.
const children = new Set()

function killGroup(child) {
  try {
    process.kill(-child.pid, 'SIGKILL')
  } catch {
    // The group is already gone.
  }
}

// On a pass, a failure, an uncaught throw or a cancelled run alike, nothing
// started here outlives the gate. The groups are detached, so a Ctrl-C does
// not reach them by itself: the handlers turn the signal into an exit.
process.on('exit', () => {
  for (const child of children) {
    killGroup(child)
  }
})
for (const [signal, code] of Object.entries(SIGNAL_EXITS)) {
  process.on(signal, () => process.exit(code))
}

function fail(headline) {
  process.stderr.write(
    `\ndesign gate: TOOL FAILURE\n  ${headline}\n\n`
      + '  This is not a design finding: the gate cannot vouch for the scan,\n'
      + '  so it refuses to pass.\n',
  )
  process.exit(EXIT_TOOL_FAILURE)
}

/**
 * Starts this Node binary on a script, in a process group of its own, and
 * keeps what it prints.
 * @param {string[]} args The script and its arguments.
 * @param {string} [cwd] Where it runs.
 * @returns {{child: import('node:child_process').ChildProcess, output: {stdout: string, stderr: string}}}
 *   The child and both streams, filled as it writes.
 */
function start(args, cwd = repositoryRoot) {
  // fallow-ignore-next-line security-sink -- this Node binary, on a script path this file builds
  const child = spawn(process.execPath, args, {
    cwd,
    detached: true,
    // The scan passes --no-config, which also skips the config's own
    // `telemetry: false`.
    env: { ...process.env, IMPECCABLE_NO_TELEMETRY: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  children.add(child)
  child.on('close', () => children.delete(child))
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
    probe.listen(0, HOST, () => {
      const { port } = probe.address()
      probe.close(() => resolve(port))
    })
  })
}

/**
 * One request to the preview server, never followed and never left waiting.
 * @param {string} url The address.
 * @param {string} [cookie] A `name=value` to send.
 * @returns {Promise<{status: number, html: string, setCookie: null | string, location: null | string}>}
 *   What it answered.
 */
async function ask(url, cookie) {
  // fallow-ignore-next-line security-sink -- the preview server this gate started on 127.0.0.1
  const response = await fetch(url, {
    headers: cookie === undefined ? {} : { cookie },
    redirect: 'manual',
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  })
  return {
    status: response.status,
    html: await response.text(),
    setCookie: response.headers.get('set-cookie'),
    location: response.headers.get('location'),
  }
}

/**
 * @param {string} origin The preview server.
 * @returns {Promise<null | string>} Its sitemap, or null while it is not up.
 */
async function sitemapOf(origin) {
  let answer
  try {
    answer = await ask(`${origin}/sitemap.xml`)
  } catch {
    // Not listening yet, or accepting and not answering.
    return null
  }
  return answer.status === 200 ? answer.html : null
}

/**
 * Starts `vite preview` and waits until it serves the sitemap.
 * @returns {Promise<{origin: string, sitemap: string}>} The server's origin
 *   and its sitemap.
 */
async function serve() {
  const port = await freePort()
  // An address, not `localhost`: on Linux Vite binds that name to ::1 alone,
  // and neither this process nor the detector's browser then reaches it.
  const origin = `http://${HOST}:${port}`
  const { child, output } = start([
    path.join(repositoryRoot, 'node_modules', 'vite', 'bin', 'vite.js'),
    'preview',
    '--host',
    HOST,
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
 * @param {string} url A page with no bookmark.
 * @returns {Promise<{problem: null | string, html: string}>} What is wrong
 *   with it, or null, and the page.
 */
async function pageAnswer(url) {
  const answer = await ask(url)
  return { problem: pageProblem(answer), html: answer.html }
}

/**
 * Sets the bookmark as the detector's browser will, then asks for the page
 * with it.
 * @param {string} origin The preview server.
 * @param {object} page A bookmarked page of `pagesOf`.
 * @returns {Promise<{problem: null | string, html: string}>} What is wrong
 *   with it, or null, and the page.
 */
async function bookmarkedAnswer(origin, page) {
  const redirect = await ask(`${origin}${page.path}?ep=${page.ep}`)
  const problem = bookmarkProblem(page, redirect)
  if (problem !== null) {
    return { problem, html: '' }
  }
  const [cookie] = redirect.setCookie.split(';', 1)
  const answer = await ask(origin + redirect.location, cookie)
  return { problem: bookmarkedPageProblem(page, answer), html: answer.html }
}

/**
 * A wrong id, a server error, a bookmark the site refused or a record under
 * fog all render a page the detector would scan and pass, so every page is
 * asked for first.
 * @param {string} origin The preview server.
 * @param {{landing: string[], bookmarked: object[]}} pages The page list.
 * @returns {Promise<{address: string, html: string}[]>} Every page as served,
 *   under the address the detector scans.
 */
async function assertServed(origin, { landing, bookmarked }) {
  const checks = [
    ...landing.map((page) => [origin + page, () => pageAnswer(origin + page)]),
    ...bookmarked.map((page) => [
      `${origin}${page.path}?ep=${page.ep}`,
      () => bookmarkedAnswer(origin, page),
    ]),
  ]
  const problems = []
  const served = []
  for (const [address, check] of checks) {
    const { problem, html } = await check()
    served.push({ address, html })
    if (problem !== null) {
      problems.push(`${address.replace(origin, '')} ${problem}`)
    }
  }
  if (problems.length > 0) {
    fail(
      `${problems.length} page(s) were not served as the gate asked:\n    ${problems.join('\n    ')}`,
    )
  }
  return served
}

/**
 * One detector run: one browser profile, one viewport.
 * @param {string} viewport Width and height, as `390x844`.
 * @param {string[]} urls Addresses, scanned in order; never empty.
 * @param {string} [cwd] Where it runs; any other than the repository's root
 *   is a run of saved copies, with their design context and no config.
 * @returns {Promise<object[]>} The raw findings, each with its viewport.
 */
async function detect(viewport, urls, cwd = repositoryRoot) {
  // `--no-config` would drop DESIGN.md too. The saved copies sit in a
  // directory that holds no config, so none is read there either.
  const flag = cwd === repositoryRoot ? '--no-config' : '--no-inline-ignores'
  // The npm shim: it runs the engine of this platform's optional package.
  // Resolved here, inside `main`, so a missing package is a tool failure.
  const cli = fileURLToPath(import.meta.resolve('impeccable/cli/bin/cli.js'))
  const args = [cli, 'detect', '--json', flag, '--viewport', viewport, ...urls]
  const run = async () => {
    const { child, output } = start(args, cwd)
    const timer = setTimeout(() => killGroup(child), DETECT_TIMEOUT_MS)
    child.on('close', () => clearTimeout(timer))
    const [status] = await once(child, 'close')
    return { status, output }
  }
  // The engine scans every address in one browser and does not say which one
  // failed in a form worth parsing, so the whole run goes again.
  const label = `${urls.length} page(s) at ${viewport}`
  const { problem, output } = await detectWithRetry(run, label, (line) =>
    process.stdout.write(line),
  )
  if (problem !== null) {
    fail(
      `impeccable detect ${problem} (${viewport}, limit ${DETECT_TIMEOUT_MS / 1000}s).\n`
        + '  It needs Chrome, Chromium or Edge: IMPECCABLE_BROWSER names the executable. If\n'
        + '  Chrome will not start for want of a sandbox, set PUPPETEER_DANGEROUS_NO_SANDBOX=1.\n'
        + `  Its output:\n${output.stderr}${output.stdout}`,
    )
  }
  return JSON.parse(output.stdout).map((finding) => ({ ...finding, viewport }))
}

/**
 * Scans every page at every width, each run in a browser of its own, side by
 * side: in sequence they take four times as long. The saved copies get a
 * fifth browser, at one width.
 * @param {string} origin The preview server.
 * @param {string} sitemap Its sitemap.
 * @returns {Promise<object[]>} Every raw finding.
 */
async function scan(origin, sitemap) {
  const pages = pagesOf(sitemap, SAMPLES, LOCALE)
  const served = await assertServed(origin, pages)
  const addresses = served.map(({ address }) => address)
  const landing = addresses.slice(0, pages.landing.length)
  const bookmarked = addresses.slice(pages.landing.length)
  const thin = pages.thin.map((line) => `  no sample for ${line}\n`)
  process.stdout.write(
    `design gate: scanning ${landing.length + bookmarked.length} page(s) at ${VIEWPORTS.join(' and ')}, and saved copies of them against DESIGN.md at ${TOKEN_VIEWPORT}\n${thin.join('')}`,
  )
  const runs = await Promise.all([
    ...VIEWPORTS.flatMap((viewport) => [
      detect(viewport, landing),
      detect(viewport, bookmarked),
    ]),
    scanTokens(repositoryRoot, served, detect),
  ])
  return runs.flat()
}

function report(findings, blocking, origin) {
  process.stdout.write(
    `\ndesign gate: ${findings.length} raw finding(s), ${blocking.length} blocking\n`
      + `  report: ${path.relative(repositoryRoot, reportPath)}\n`,
  )
  if (blocking.length === 0) {
    return EXIT_CLEAN
  }
  // Only the first MAX_PRINTED are listed; the report file keeps the rest.
  const lines = blocking
    .slice(0, MAX_PRINTED)
    .map(
      (finding) =>
        `    [${finding.antipattern}] ${finding.file.replace(origin, '')} at ${finding.viewport}\n`
        + `        ${finding.snippet}\n        ${finding.selector ?? ''}\n`,
    )
  process.stdout.write(`\n  blocking findings:\n${lines.join('')}`)
  process.stderr.write(
    `\ndesign gate: FAILED with ${blocking.length} blocking finding(s).\n`
      + '  Fix the page, or waive a rule the house style contradicts in\n'
      + '  .impeccable/config.json with a reason (see CONTRIBUTING.md, "Checks").\n',
  )
  return EXIT_FINDINGS
}

/**
 * A waiver that hides nothing would hide the next violation on its pages, so
 * it fails the gate even when every finding is covered.
 * @param {number} verdict The exit code the findings ask for.
 * @param {string[]} stale The waivers that matched no finding.
 * @returns {number} The exit code.
 */
function conclude(verdict, stale) {
  if (stale.length > 0) {
    fail(
      `${stale.length} temporary waiver(s) in .impeccable/config.json match no finding any more. Remove them:\n    ${stale.join('\n    ')}`,
    )
  }
  if (verdict === EXIT_CLEAN) {
    process.stdout.write('\ndesign gate: PASSED\n')
  }
  return verdict
}

function readConfig() {
  const config = JSON.parse(readFileSync(configPath, 'utf8'))
  const refused = refusedWaivers(config)
  if (refused.length > 0) {
    fail(
      `.impeccable/config.json holds ${refused.length} waiver(s) the gate refuses (see CONTRIBUTING.md, "Checks"):\n    ${refused.join('\n    ')}`,
    )
  }
  return config
}

async function main() {
  mkdirSync(path.dirname(reportPath), { recursive: true })
  // A stale report must never survive a failed run.
  rmSync(reportPath, { force: true })
  const config = readConfig()
  if (!existsSync(path.join(repositoryRoot, 'dist', 'client'))) {
    fail('dist/ is missing: run `npm run build` first')
  }

  const started = Date.now()
  const { origin, sitemap } = await serve()
  const findings = await scan(origin, sitemap)
  const { blocking, stale } = judge(findings, config)
  writeFileSync(
    reportPath,
    `${JSON.stringify({ blocking, stale, findings }, null, 2)}\n`,
  )
  const verdict = report(findings, blocking, origin)
  process.stdout.write(`  took ${Math.round((Date.now() - started) / 1000)}s\n`)
  return conclude(verdict, stale)
}

// No main guard: nothing imports this file, and a guard is one more way to
// skip the gate and exit 0.
try {
  // An explicit exit: the preview server would keep the process alive.
  process.exit(await main())
} catch (error) {
  fail(String(error))
}
