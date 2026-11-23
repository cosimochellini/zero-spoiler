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
 * @param {object} sample Its bookmark, the record to open of each kind and
 *   the `indexes` it must also list (kinds with one page and no record);
 *   empty for a series the gate has no sample for.
 * @returns {{pages: {path: string, id?: string}[], thin: string[]}} Pages,
 *   the home first, a record page with its id; and one line for the series or
 *   each of its kinds scanned with no sample.
 * @throws {Error} When the sitemap lacks a page the sample asks for.
 */
function seriesPages(slug, own, sample) {
  const home = own.find((parts) => parts.length === 2)
  const { ep, indexes = [], ...ids } = sample
  const kinds = new Set(own.map((parts) => parts[2]).filter(Boolean))
  const sampled = Object.keys(ids).filter((kind) => !EVERY_SERIES.has(kind))
  const wanted =
    ep === undefined ? [] : [...EVERY_SERIES, ...sampled, ...indexes]
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
  const thin =
    ep === undefined ?
      [`${slug}: scanned with no bookmark`]
    : [...kinds]
        .filter((kind) => ids[kind] === undefined && !indexes.includes(kind))
        .map((kind) => `${slug}/${kind}`)
  const pages = [...kinds].flatMap((kind) => {
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
  })
  return { pages: [{ path: root }, ...pages], thin }
}

/**
 * The pages to scan. The sitemap is built from the series registry, so a new
 * series or page type is scanned without an edit here; the samples are the
 * floor it cannot give: each of their series has to be there, with a home,
 * characters, places and every kind the sample names, with a record or in
 * `indexes`.
 * @param {string} sitemap The served sitemap.
 * @param {Record<string, object>} samples Per series, `ep`, a record id for
 *   each kind, and `indexes`.
 * @param {string} locale The one locale scanned.
 * @returns {{landing: string[], bookmarked: object[], thin: string[]}} Paths
 *   with no bookmark, pages (`path`, `slug`, `ep`, `locale`, `id` on a
 *   record) to open with one, and what was scanned with no sample: a series
 *   (`slug: scanned with no bookmark`) or a kind (`slug/kind`), whose record
 *   is then the first in the sitemap.
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
  const thin = []

  const sampled = new Set(Object.keys(samples))
  const slugs = sampled.union(
    new Set(
      paths.filter((parts) => parts[1] === locale).map((parts) => parts[0]),
    ),
  )
  for (const slug of slugs) {
    const sample = samples[slug] ?? {}
    const series = seriesPages(
      slug,
      paths.filter((parts) => parts[0] === slug),
      sample,
    )
    thin.push(...series.thin)
    // With no bookmark to set, the whole series is scanned as a new reader
    // sees it; with one, only its home is.
    landing.push(
      ...series.pages
        .slice(0, sample.ep === undefined ? undefined : 1)
        .map((page) => page.path),
    )
    bookmarked.push(
      ...(sample.ep === undefined ?
        []
      : series.pages.map((page) => ({ ...page, slug, locale, ep: sample.ep }))),
    )
  }
  if (landing.length === 0 || bookmarked.length === 0) {
    throw new Error(
      `the sitemap gives ${landing.length} page(s) with no bookmark and ${bookmarked.length} with one: the gate would scan nothing`,
    )
  }
  return { landing, bookmarked, thin }
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
 * How a waiver's reason starts when it states the house style and stays for
 * good. It lives in the reason because the detector's own config writer
 * (`impeccable ignores …`) drops a field it does not know.
 */
export const PERMANENT = 'Permanent: '

/** A waiver with no `files` covers every page. */
const EVERYWHERE = 'everywhere'

// The three below are the detector's own, as its skill mirrors them in
// `.agents/skills/impeccable/scripts/live-browser-ignores.js`
// (`normalizeIgnoreRule`, `normalizeIgnoreValue`, `globToRegex`), so the gate
// and the design hook, which reads the same file, agree on what a waiver
// covers.

const normalRule = (rule = '') => String(rule).trim().toLowerCase()

const normalValue = (value = '') =>
  String(value)
    .trim()
    .replaceAll(/^["']|["']$/gu, '')
    .replaceAll('+', ' ')
    .replaceAll(/\s+/gu, ' ')
    .toLowerCase()

const GLOB_TOKEN = /\*\*\/|\*\*|[*?]|\{[^{}]*\}|[$()+.[\\\]^{|}]/gu
const escaped = (text) => text.replaceAll(/[$()+.[\\\]^{|}]/gu, String.raw`\$&`)

/**
 * `**` crosses `/` (and before a `/` may match nothing), `*` and `?` do not,
 * `{a,b}` is either, everything else is itself, and case counts.
 * @param {string} glob A `files` entry of a waiver.
 * @returns {RegExp} What it matches, whole.
 */
function globToRegex(glob) {
  const pattern = glob.replaceAll(GLOB_TOKEN, (token) => {
    if (token.startsWith('{') && token.length > 1) {
      return `(?:${token
        .slice(1, -1)
        .split(',')
        .map((part) => escaped(part))
        .join('|')})`
    }
    return (
      { '**/': '(?:.*/)?', '**': '.*', '*': '[^/]*', '?': '[^/]' }[token]
      ?? escaped(token)
    )
  })
  // fallow-ignore-next-line security-sink -- the glob comes from .impeccable/config.json, not from input, and every character but the wildcards is escaped
  return new RegExp(`^${pattern}$`, 'u') // eslint-disable-line security/detect-non-literal-regexp -- see above
}

/**
 * The detector holds a glob against the address and against each of its
 * endings that starts at a segment, so `legal` and `en/legal` both name
 * `http://127.0.0.1:4000/en/legal`.
 * @param {string} glob A `files` entry of a waiver.
 * @param {string} url The address a finding was found on.
 * @returns {boolean} Whether the glob covers the address.
 */
function globCovers(glob, url) {
  const expression = globToRegex(glob)
  const segments = url.split('/').filter(Boolean)
  return [url, ...segments.map((_, at) => segments.slice(at).join('/'))].some(
    (candidate) => expression.test(candidate),
  )
}

/**
 * @param {object} waiver An `ignoreValues` entry.
 * @returns {string[]} Its globs (`file` and `files`, as the detector reads
 *   them), or `everywhere` for a waiver with none.
 */
function partsOf(waiver) {
  const globs = [waiver.file, ...(waiver.files ?? [])].filter(
    (glob) => typeof glob === 'string' && glob.trim(),
  )
  return globs.length > 0 ? globs : [EVERYWHERE]
}

/**
 * What the gate will not take from a waiver. `ignoreRules` and `ignoreFiles`
 * hold bare strings with no room for a reason, so a waiver goes in
 * `ignoreValues`: `"*"` as the value and a `files` glob turn a whole rule off,
 * on every page (`**`) or on the pages of one type. The detector never
 * applies a `"*"` that names no files, and it reads a wildcard inside `{}`
 * as a regular expression, so the gate refuses both rather than guess; `{a,b}`
 * with plain alternatives is read as the detector reads it.
 * @param {object} config The parsed `.impeccable/config.json`.
 * @returns {string[]} One line per waiver the gate refuses, with the cause.
 */
export function refusedWaivers(config) {
  const {
    ignoreRules = [],
    ignoreFiles = [],
    ignoreValues = [],
  } = config.detector ?? {}
  return [
    ...[...ignoreRules, ...ignoreFiles].map((bare) => `${bare}: no reason`),
    ...ignoreValues.flatMap((waiver) => {
      const name = `${waiver.rule}=${waiver.value}`
      const parts = partsOf(waiver)
      const reason = waiver.reason?.trim() ?? ''
      return [
        ...(reason === '' || reason === PERMANENT.trim() ?
          [`${name}: no reason`]
        : []),
        ...(normalValue(waiver.value) === '*' && parts[0] === EVERYWHERE ?
          [
            `${name}: "*" with no files, which the detector never applies; add "files": ["**"] to waive the rule on every page`,
          ]
        : []),
        ...parts
          .filter((glob) =>
            // After each `{`: plain alternatives, then its `}`.
            glob
              .split('{')
              .slice(1)
              .some((rest) => !/^[^*?}]*\}/u.test(rest)),
          )
          .map(
            (glob) =>
              `${name}: ${glob} has a { that is not closed, or one with a wildcard or another { inside, which the detector does not read as a glob; write one glob per alternative`,
          ),
      ]
    }),
  ]
}

/**
 * @param {string} text A finding's snippet or a waiver's value, lower case.
 * @returns {string} Its words, a space on each side of every one.
 */
const worded = (text) => ` ${text.replaceAll(/[^\da-z]+/gu, ' ').trim()} `

/**
 * Whether a waiver's value is the finding's. The detector compares it with
 * the finding's own value, which its JSON carries as `ignoreValue` on some
 * rules (`design-system-*`); on the rest it is only inside the snippet
 * (`Primary font: instrument sans (60% of text)`), and there the gate asks for
 * it as whole words, not as any substring.
 * @param {string} value The waiver's value, normalised; not `*`.
 * @param {object} finding A raw finding.
 * @returns {boolean} Whether they agree.
 */
function valueCovers(value, finding) {
  return finding.ignoreValue === undefined ?
      worded(finding.snippet.toLowerCase()).includes(worded(value))
    : normalValue(finding.ignoreValue) === value
}

/**
 * @param {object} waiver An `ignoreValues` entry.
 * @param {object} finding A raw finding, its `file` the full address.
 * @returns {string[]} The parts of the waiver that cover it: its globs, or
 *   `everywhere` for a waiver with none.
 */
function coveringParts(waiver, finding) {
  const value = normalValue(waiver.value)
  if (
    normalRule(waiver.rule) !== finding.antipattern
    || (value !== '*' && !valueCovers(value, finding))
  ) {
    return []
  }
  return partsOf(waiver).filter((part) =>
    // As in the detector, a "*" that names no files covers nothing.
    part === EVERYWHERE ? value !== '*' : globCovers(part, finding.file),
  )
}

/**
 * Applies the waivers to a raw scan. The gate does this itself, on one scan
 * with `--no-config`, because the detector prints either side and never
 * both; knowing both is what shows a waiver that no longer hides anything.
 * @param {object[]} findings The raw findings, `file` the full address.
 * @param {object} config The parsed `.impeccable/config.json`.
 * @returns {{blocking: object[], stale: string[]}} The findings that fail
 *   the gate, and the temporary waivers (one line per glob) that matched
 *   nothing. A permanent waiver states the house style, which holds whether
 *   or not a page breaks the rule today, so it is never stale.
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
    waiver.reason?.startsWith(PERMANENT) ?
      []
    : partsOf(waiver)
        .filter((part) => !used.has(`${index} ${part}`))
        .map((part) => `${waiver.rule}=${waiver.value} on ${part}`),
  )
  return { blocking, stale }
}

/**
 * The rules that hold a page to the tokens in `DESIGN.md`. The detector loads
 * that file only for a local file target, so they run on saved copies.
 */
const DESIGN_SYSTEM = 'design-system-'

/**
 * Of those, the ones the gate blocks on. The engine calls a colour outside the
 * palette advisory; the gate does not. Radius and type size keep the engine's
 * severity, advisory: they are in the report and never fail the gate.
 */
const BLOCKING_TOKEN_RULES = new Set([
  'design-system-font',
  'design-system-color',
])

/**
 * A page as the detector reads it from a file: its scripts gone, so nothing
 * hydrates or navigates away from `file://`, and a `<base>` to its address,
 * so its stylesheets and fonts load from the server that rendered it.
 * @param {string} html The page as the server sent it.
 * @param {string} address Where it was served.
 * @returns {string} The copy to save.
 */
export function savedCopy(html, address) {
  return html
    .replaceAll(/<script\b[^>]*>[\s\S]*?<\/script>/giu, '')
    .replace(/<head\b[^>]*>/iu, (head) => `${head}<base href="${address}">`)
}

/**
 * The token findings of a scan of saved copies, each under the address its
 * copy was saved from, so the report names the page and a waiver's glob reads
 * the same address as on the address scan.
 * @param {object[]} findings The raw findings of the saved copies.
 * @param {Map<string, string>} addresses Each copy's file, as the detector
 *   names it, to its page's address.
 * @returns {object[]} The `design-system-*` findings, the blocking ones no
 *   longer advisory.
 * @throws {Error} When a finding names a file the gate did not save.
 */
export function tokenFindings(findings, addresses) {
  return findings
    .filter((finding) => finding.antipattern.startsWith(DESIGN_SYSTEM))
    .map((finding) => {
      const file = addresses.get(finding.file)
      if (file === undefined) {
        throw new Error(`a token finding names ${finding.file}, no saved page`)
      }
      return BLOCKING_TOKEN_RULES.has(finding.antipattern) ?
          { ...finding, file, advisory: false }
        : { ...finding, file }
    })
}
