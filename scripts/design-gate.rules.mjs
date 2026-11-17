/**
 * The decisions of the design gate, apart from the processes it runs: which
 * pages to scan, whether a page was served in the state the gate asked for,
 * what the detector's exit status means, and which findings a waiver covers.
 * `scripts/design-gate.mjs` acts on them.
 */

/** What `data-impeccable-ignore` is spelled as in a page. */
const INLINE_IGNORE = 'data-impeccable-ignore'

/** The two record kinds every series files. */
const EVERY_SERIES = new Set(['characters', 'places'])

/**
 * The home of one series, its indexes and one record of each kind.
 * @param {string} slug The series.
 * @param {string[][]} own Its sitemap paths, split: slug, locale, kind, id.
 * @param {object} sample Its bookmark and the record to open of each kind;
 *   empty for a series the gate has no sample for.
 * @returns {{path: string, id?: string}[]} Pages, the home first; a record
 *   page carries its id.
 * @throws {Error} When the sitemap lacks a page the sample asks for.
 */
function seriesPages(slug, own, sample) {
  const home = own.find((parts) => parts.length === 2)
  const { ep, ...ids } = sample
  const kinds = new Set(own.map((parts) => parts[2]).filter(Boolean))
  const sampled = Object.keys(ids).filter((kind) => !EVERY_SERIES.has(kind))
  const wanted = ep === undefined ? [] : [...EVERY_SERIES, ...sampled]
  const missing = [
    ...(home === undefined ? ['home'] : []),
    ...wanted.filter((kind) => !kinds.has(kind)),
  ]
  if (missing.length > 0) {
    throw new Error(
      `the sitemap lists no ${missing.join(', ')} page for ${slug}`,
    )
  }
  const root = `/${home.join('/')}`
  return [
    { path: root },
    ...[...kinds].flatMap((kind) => {
      const listed = own.filter((p) => p[2] === kind && p[3]).map((p) => p[3])
      const id = ids[kind] ?? listed[0]
      if (id !== undefined && !listed.includes(id)) {
        throw new Error(
          `the sample ${slug}/${kind}/${id} is not in the sitemap: update SAMPLES in scripts/design-gate.mjs`,
        )
      }
      const index = { path: `${root}/${kind}` }
      return id === undefined ? index : (
          [index, { path: `${root}/${kind}/${id}`, id }]
        )
    }),
  ]
}

/**
 * The pages to scan. The sitemap is built from the series registry, so a new
 * series or page type is scanned without an edit here; the samples are the
 * floor it cannot give: each of their series has to be there, with a home,
 * characters, places and every kind the sample names.
 * @param {string} sitemap The served sitemap.
 * @param {Record<string, object>} samples Per series, `ep` and a record id
 *   for each kind.
 * @param {string} locale The one locale scanned.
 * @returns {{landing: string[], bookmarked: object[]}} Paths with no
 *   bookmark, and pages (`path`, `slug`, `ep`, `locale`, `id` on a record)
 *   to open with one.
 * @throws {Error} When a list is empty or the sitemap lacks a sampled page.
 */
export function pagesOf(sitemap, samples, locale) {
  const paths = sitemap
    .matchAll(/<loc>(?<loc>[^<]+)<\/loc>/gu)
    .map((match) => URL.parse(match.groups.loc).pathname.split('/').slice(1))
    .filter((parts) => parts[0] === locale || parts[1] === locale)
    .toArray()

  // `/en` and `/en/legal`: the pages outside any series.
  const landing = paths
    .filter((parts) => parts[0] === locale)
    .map((parts) => `/${parts.join('/')}`)
  const bookmarked = []

  const sampled = new Set(Object.keys(samples))
  const slugs = sampled.union(
    new Set(
      paths.filter((parts) => parts[1] === locale).map((parts) => parts[0]),
    ),
  )
  for (const slug of slugs) {
    const sample = samples[slug] ?? {}
    const pages = seriesPages(
      slug,
      paths.filter((parts) => parts[0] === slug),
      sample,
    )
    // With no bookmark to set, the whole series is scanned as a new reader
    // sees it; with one, only its home is.
    const open = sample.ep === undefined ? pages : pages.slice(0, 1)
    landing.push(...open.map((page) => page.path))
    bookmarked.push(
      ...(sample.ep === undefined ?
        []
      : pages.map((page) => ({ ...page, slug, locale, ep: sample.ep }))),
    )
  }
  if (landing.length === 0 || bookmarked.length === 0) {
    throw new Error(
      `the sitemap gives ${landing.length} page(s) with no bookmark and ${bookmarked.length} with one: the gate would scan nothing`,
    )
  }
  return { landing, bookmarked }
}

/**
 * A page as the gate must find it before the detector may scan it: answered,
 * and with nothing in its markup that silences the detector, which neither
 * `--no-config` nor `--no-inline-ignores` turns off.
 * @param {{status: number, html: string}} response What the server sent.
 * @returns {null | string} What is wrong, or null.
 */
export function pageProblem({ status, html }) {
  if (status !== 200) {
    return `answered ${status}, expected 200`
  }
  return html.includes(INLINE_IGNORE) ?
      `carries ${INLINE_IGNORE}, which hides a finding from the gate: waive it in .impeccable/config.json with a reason instead`
    : null
}

/**
 * Whether `?ep=N` set the bookmark. The site drops a number it does not
 * accept with the same 302 and no cookie, and the page then renders as a new
 * reader's.
 * @param {{slug: string, ep: number}} page The page asked for.
 * @param {{status: number, setCookie: null | string}} response The answer
 *   to its address with `?ep=N`, not followed.
 * @returns {null | string} What is wrong, or null.
 */
export function bookmarkProblem({ slug, ep }, { status, setCookie }) {
  if (status !== 302) {
    return `?ep=${ep} answered ${status}, expected the 302 that sets the bookmark`
  }
  return setCookie?.split(';', 1)[0].endsWith(`${slug}=${ep}`) ?
      null
    : `?ep=${ep} set no ${slug} bookmark (Set-Cookie: ${setCookie ?? 'none'})`
}

/**
 * A bookmarked page as the gate must find it. A record whose gate moved past
 * the sample's bookmark still answers 200, as a page under fog; an open
 * record is the only page whose `og:image` is the record's own card.
 * @param {{slug: string, locale: string, ep: number, id?: string}} page The
 *   page asked for.
 * @param {{status: number, html: string}} response What the server sent
 *   with the bookmark cookie.
 * @returns {null | string} What is wrong, or null.
 */
export function bookmarkedPageProblem({ slug, locale, ep, id }, response) {
  const problem = pageProblem(response)
  if (problem !== null || id === undefined) {
    return problem
  }
  return response.html.includes(`/og/${slug}/${locale}/${id}.png`) ?
      null
    : `is under fog at episode ${ep}: raise the bookmark or pick another record in SAMPLES`
}

/**
 * What the detector's exit status means: 0 is clean, 2 is findings, and
 * anything else is a scan that cannot be trusted.
 * @param {null | number} status Its exit status; null when it was killed.
 * @returns {null | string} Why the scan failed, or null when it completed.
 */
export function detectorProblem(status) {
  if (status === 0 || status === 2) {
    return null
  }
  return status === null ?
      'was killed: it did not finish in time'
    : `exited ${status}: a page could not be scanned`
}

/**
 * Every waiver says why. `ignoreRules` and `ignoreFiles` hold bare strings
 * with no room for a reason, so a waiver goes in `ignoreValues`: `"*"` as the
 * value and a `files` glob turn a whole rule off, on every page (`**`) or on
 * the pages of one type.
 * @param {object} config The parsed `.impeccable/config.json`.
 * @returns {string[]} The waivers that give no reason.
 */
export function unexplainedWaivers(config) {
  const {
    ignoreRules = [],
    ignoreFiles = [],
    ignoreValues = [],
  } = config.detector ?? {}
  return [
    ...ignoreRules,
    ...ignoreFiles,
    ...ignoreValues
      .filter((waiver) => !waiver.reason?.trim())
      .map((waiver) => `${waiver.rule}=${waiver.value}`),
  ]
}

/**
 * The detector's globs, as it reads them on an address: `**` crosses `/`,
 * `*` and `?` do not, case counts, and a glob with no `/` is held against
 * the last segment.
 * @param {string} glob A `files` entry of a waiver.
 * @param {string} url The address a finding was found on.
 * @returns {boolean} Whether the glob covers the address.
 */
function globCovers(glob, url) {
  const pattern = glob
    .replaceAll(/[$()+.[\\\]^{|}]/gu, String.raw`\$&`)
    .replaceAll('?', '[^/]')
    .replaceAll(/\*+/gu, (stars) => (stars.length > 1 ? '.*' : '[^/]*'))
  const subject = glob.includes('/') ? url : url.slice(url.lastIndexOf('/') + 1)
  // Built from a glob of this repository's committed config, with every
  // character but the wildcards escaped.
  // fallow-ignore-next-line security-sink -- the glob comes from .impeccable/config.json, not from input
  const expression = new RegExp(`^${pattern}$`, 'u') // eslint-disable-line security/detect-non-literal-regexp -- see above
  return expression.test(subject)
}

/**
 * @param {object} waiver An `ignoreValues` entry.
 * @param {object} finding A raw finding, its `file` the full address.
 * @returns {string[]} The parts of the waiver that cover it: its globs, or
 *   `everywhere` for a waiver with none.
 */
function coveringParts(waiver, finding) {
  if (waiver.rule !== finding.antipattern) {
    return []
  }
  const valued =
    waiver.value === '*'
    || finding.snippet.toLowerCase().includes(waiver.value.toLowerCase())
  if (!valued) {
    return []
  }
  return waiver.files === undefined ?
      ['everywhere']
    : waiver.files.filter((glob) => globCovers(glob, finding.file))
}

/**
 * Applies the waivers to a raw scan. The gate does this itself, on one scan
 * with `--no-config`, because the detector prints either side and never
 * both; knowing both is what shows a waiver that no longer hides anything.
 * @param {object[]} findings The raw findings, `file` the full address.
 * @param {object} config The parsed `.impeccable/config.json`.
 * @returns {{blocking: object[], stale: string[]}} The findings that fail
 *   the gate, and the waivers (one line per glob) that matched nothing.
 */
export function judge(findings, config) {
  const waivers = config.detector?.ignoreValues ?? []
  const used = new Set()
  const blocking = findings.filter((finding) => {
    const covered = waivers.flatMap((waiver, index) =>
      coveringParts(waiver, finding).map((part) => `${index} ${part}`),
    )
    for (const key of covered) {
      used.add(key)
    }
    // Advisory rules are listed in the report and never block.
    return covered.length === 0 && !finding.advisory
  })
  const stale = waivers.flatMap((waiver, index) =>
    (waiver.files ?? ['everywhere'])
      .filter((part) => !used.has(`${index} ${part}`))
      .map((part) => `${waiver.rule}=${waiver.value} on ${part}`),
  )
  return { blocking, stale }
}
