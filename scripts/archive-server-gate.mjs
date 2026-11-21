/**
 * The emitted SSR build must keep each series behind its dynamic import, and
 * the server-function provider out of every other runtime chunk.
 *
 * Start splits each server function's handler into a `?tss-serverfn-split`
 * chunk that only its resolver imports, dynamically. A route chunk that
 * statically reaches what that chunk holds loads every projection with the
 * route: PR #1496's first round did it through one validator reading
 * `ENDPOINTS`, and the shared chunk it made was named after `src/lib/plain`,
 * so only the modules inside a chunk can tell. A chunk's modules are the
 * `//#region <module id>` lines Rolldown writes into the unminified server
 * chunks together with the `sources` of its source map: Rolldown gives some
 * modules no region of their own (`chronicle.server.ts` sits under
 * `markers.ts`'s), and only the map names them. So every reached chunk needs a
 * readable map (`environments.ssr.build.sourcemap` in `vite.config.ts`), save
 * one whose regions are all virtual (`\0…`, Start's resolver and manifest);
 * without it the gate is unusable, never clean.
 */
import console from 'node:console'
import { readFileSync } from 'node:fs'
import path from 'node:path'

import { importArchive } from './archive-loader.mjs'

const EXIT_CLEAN = 0
const EXIT_FOUND = 1
const EXIT_UNUSABLE = 2
const SERIES_DIR = 'src/data/series'

/** Start's query on the chunk that holds the server functions' handlers. */
const SERVER_FN_SPLIT = '?tss-serverfn-split'

/** Server-only modules that belong in a server-function chunk and nowhere else. */
const PROVIDER_ONLY = [
  'src/server/archive/',
  'src/server/serve.server.ts',
  'src/server/copy.server.ts',
  'src/server/sources.server.ts',
]

/** How many provider-only modules a problem names before counting the rest. */
const QUOTED = 3

/** What a chunk without a readable source map leaves the gate unable to see. */
const MAPS_REQUIRED =
  'the server build must emit source maps (environments.ssr.build.sourcemap in vite.config.ts)'

/** The emitted SSR dependency graph, not a guess from source imports. */
export const SERVER_MANIFEST = 'dist/server/.vite/manifest.json'

/**
 * Every statically loaded dependency of runtime entry points.
 * @param {Record<string, {imports?: string[]}>} manifest The Vite manifest.
 * @param {string[]} roots The entry points to walk.
 * @returns {{missing: string[], reached: Set<string>}} The static closure.
 */
function staticClosure(manifest, roots) {
  const reached = new Set()
  const missing = []
  const pending = [...roots]
  while (pending.length > 0) {
    const key = pending.pop()
    if (reached.has(key)) {
      continue
    }
    const entry = manifest[key]
    if (entry === undefined) {
      missing.push(key)
      continue
    }
    reached.add(key)
    pending.push(...(entry.imports ?? []))
  }
  return { missing, reached }
}

/**
 * Archive fingerprints in chunks loaded before that archive's import().
 * @param {{manifest: Record<string, {file: string}>, chunks: Record<string, string>, reached: Set<string>}} build The emitted server build.
 * @param {{file: string, phrase: null | string}[]} canaries The series' fingerprints.
 * @returns {{problems: string[], unreadable: string[]}} Eager data or missing evidence.
 */
function eagerCanaries({ manifest, chunks, reached }, canaries) {
  const names = [...reached].map((key) => manifest[key].file)
  const unreadable = [
    ...names.filter((name) => chunks[name] === undefined),
    ...canaries.filter(({ phrase }) => phrase === null).map(({ file }) => file),
  ]
  const problems = canaries.flatMap(({ file, phrase }) => {
    if (phrase === null) {
      return []
    }
    return names
      .filter((name) => chunks[name]?.includes(phrase) === true)
      .map((name) => `${file} is statically loaded in ${name}`)
  })
  return { problems, unreadable }
}

/**
 * The dynamic boundary of one registered series.
 * @param {Record<string, {file: string, imports?: string[], dynamicImports?: string[], isEntry?: boolean, isDynamicEntry?: boolean}>} manifest The Vite manifest.
 * @param {{folder: string, canaries: {file: string, phrase: null | string}[]}} archive The registered archive.
 * @param {Record<string, string>} chunks Emitted chunk text, keyed by output file.
 * @returns {{problems: string[], unreadable: string[]}} The boundary verdict.
 */
function archiveBoundary(manifest, archive, chunks) {
  const key = `${SERIES_DIR}/${archive.folder}/archive.ts`
  const entry = manifest[key]
  if (entry === undefined) {
    return { problems: [], unreadable: [key] }
  }
  const roots = Object.keys(manifest).filter(
    (name) =>
      name !== key
      && (manifest[name].isEntry === true
        || manifest[name].isDynamicEntry === true),
  )
  const { reached, missing } = staticClosure(manifest, roots)
  const problems = []
  const dynamic = Object.values(manifest).some(
    (node) => node.dynamicImports?.includes(key) === true,
  )
  if (!dynamic || entry.isDynamicEntry !== true) {
    problems.push(`${key} is not a dynamically imported archive entry`)
  }
  if (reached.has(key)) {
    problems.push(`${key} has a static runtime import`)
  }
  const eager = eagerCanaries({ manifest, chunks, reached }, archive.canaries)
  return {
    problems: [...problems, ...eager.problems],
    unreadable: [
      ...missing,
      ...eager.unreadable,
      ...(chunks[entry.file] === undefined ? [entry.file] : []),
    ],
  }
}

/**
 * Whether a module or chunk belongs in a server-function chunk only.
 * @param {string} id A module id or a manifest key.
 * @returns {boolean} Whether no other runtime chunk may load it.
 */
function providerOnly(id) {
  return (
    id.includes(SERVER_FN_SPLIT)
    || PROVIDER_ONLY.some((prefix) => id.startsWith(prefix))
  )
}

/**
 * The provider-only modules one emitted chunk holds, read from its region
 * lines and its source map.
 * @param {string} key The chunk's manifest key.
 * @param {string} text The chunk's emitted text.
 * @param {string | string[]} mapped The modules its source map names, or why it has none.
 * @returns {string | string[]} The modules, or why the chunk cannot be read.
 */
function providerModules(key, text = '', mapped = 'no source map') {
  const regions = text
    .matchAll(/^\/\/#region (?<id>.+)$/gmu)
    .map((match) => match.groups.id)
    .toArray()
  const virtual =
    regions.length > 0 && regions.every((id) => id.startsWith(String.raw`\0`))
  if (typeof mapped === 'string' && !virtual) {
    return `${mapped}; ${MAPS_REQUIRED}`
  }
  const ids = typeof mapped === 'string' ? regions : [...regions, ...mapped]
  const held = new Set([key, ...ids].filter((id) => providerOnly(id)))
  return held.values().toArray()
}

/**
 * Every chunk a runtime root but the split chunks loads statically, with the
 * first root that loads it.
 * @param {Record<string, {imports?: string[], isEntry?: boolean, isDynamicEntry?: boolean}>} manifest The Vite manifest.
 * @returns {{firstRoot: Map<string, string>, missing: string[]}} The static closures.
 */
function closuresOf(manifest) {
  const roots = Object.keys(manifest).filter(
    (key) =>
      !key.includes(SERVER_FN_SPLIT)
      && (manifest[key].isEntry === true
        || manifest[key].isDynamicEntry === true),
  )
  const firstRoot = new Map()
  const missing = []
  // Walked last to first, so the first root to reach a chunk is the one kept.
  for (const root of roots.toReversed()) {
    const closure = staticClosure(manifest, [root])
    missing.push(...closure.missing)
    for (const key of closure.reached) {
      firstRoot.set(key, root)
    }
  }
  return { firstRoot, missing }
}

/**
 * One crossing, naming the first few provider-only modules and counting the rest.
 * @param {string} root The runtime root that loads the chunk.
 * @param {string} file The chunk's output file.
 * @param {string[]} held The provider-only modules it holds.
 * @returns {string} The problem.
 */
function crossing(root, file, held) {
  const more =
    held.length > QUOTED ? ` and ${String(held.length - QUOTED)} more` : ''
  return `${root} statically loads ${file}, which holds ${held.slice(0, QUOTED).join(', ')}${more}`
}

/**
 * Provider-only modules statically loaded by any runtime root but the split chunks.
 * @param {Record<string, {file: string, imports?: string[], isEntry?: boolean, isDynamicEntry?: boolean}>} manifest The Vite manifest.
 * @param {Record<string, string>} chunks Emitted chunk text, keyed by output file.
 * @param {Record<string, string | string[]>} sources The modules each chunk's source map names, or why it has none, keyed by output file.
 * @returns {{problems: string[], unreadable: string[]}} The provider verdict.
 */
function providerBoundary(manifest, chunks, sources) {
  if (Object.keys(manifest).every((key) => !key.includes(SERVER_FN_SPLIT))) {
    return { problems: [], unreadable: [`a ${SERVER_FN_SPLIT} chunk`] }
  }
  const { firstRoot, missing } = closuresOf(manifest)
  const problems = []
  const unreadable = new Set(missing)
  for (const [key, root] of firstRoot) {
    const { file } = manifest[key]
    const held = providerModules(key, chunks[file], sources[file])
    if (typeof held === 'string') {
      unreadable.add(`${file} (${held})`)
    } else if (held.length > 0) {
      problems.push(crossing(root, file, held))
    }
  }
  return { problems, unreadable: unreadable.values().toArray() }
}

/**
 * Pure emitted-graph audit: no source grep can prove a built dynamic boundary.
 * @param {null | Record<string, {file: string, imports?: string[], dynamicImports?: string[], isEntry?: boolean, isDynamicEntry?: boolean}>} manifest The emitted Vite SSR manifest.
 * @param {{folder: string, canaries: {file: string, phrase: null | string}[]}[]} archives Every row of the single series registry, with its fingerprints.
 * @param {Record<string, string>} chunks Emitted chunk text, keyed by output file.
 * @param {Record<string, string | string[]>} [sources] The repository-relative modules each chunk's source map names, or why it has none, keyed by output file.
 * @returns {{ok: boolean, problems: string[], unreadable: string[]}} The server verdict.
 */
export function judgeServer(manifest, archives, chunks, sources = {}) {
  if (
    manifest === null
    || Object.values(manifest).every((entry) => entry.isEntry !== true)
  ) {
    return { ok: false, problems: [], unreadable: [SERVER_MANIFEST] }
  }
  const verdicts = [
    ...archives.map((archive) => archiveBoundary(manifest, archive, chunks)),
    providerBoundary(manifest, chunks, sources),
  ]
  const problems = verdicts.flatMap((verdict) => verdict.problems)
  const unreadable = verdicts.flatMap((verdict) => verdict.unreadable)
  return {
    ok: problems.length === 0 && unreadable.length === 0,
    problems,
    unreadable,
  }
}

/**
 * JSON text as a value, or null when it does not parse.
 * @param {string} text The text.
 * @returns {unknown} The value.
 */
function parsed(text) {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

/**
 * A source map file, or why there is none to read.
 * @param {string} mapPath The map's absolute path.
 * @returns {string | {sources: string[], sourceRoot?: string}} The map, or the reason.
 */
function readMap(mapPath) {
  let text
  try {
    text = readFileSync(mapPath, 'utf8')
  } catch {
    return 'no source map'
  }
  const map = parsed(text)
  return Array.isArray(map?.sources) ? map : 'an unreadable source map'
}

/**
 * The modules a chunk's source map names, relative to the repository root.
 * @param {string} repositoryRoot The repository root.
 * @param {string} file The chunk's output file.
 * @param {string} text The chunk's emitted text.
 * @returns {string | string[]} The modules, or why the chunk has no map to read.
 */
export function mappedSources(repositoryRoot, file, text) {
  const url =
    /^\/\/# sourceMappingURL=(?<url>\S+)$/mu.exec(text)?.groups.url
    ?? `${path.basename(file)}.map`
  if (url.startsWith('data:')) {
    return 'an inline source map'
  }
  // fallow-ignore-next-line security-sink -- file comes from Vite's local emitted manifest and the map's name from the chunk it wrote, never a request or CLI argument
  const mapPath = path.resolve(
    repositoryRoot,
    'dist/server',
    path.dirname(file),
    url,
  )
  const map = readMap(mapPath)
  if (typeof map === 'string') {
    return map
  }
  // fallow-ignore-next-line security-sink -- sourceRoot comes from the local emitted map, and the result is only compared, never read
  const base = path.resolve(path.dirname(mapPath), map.sourceRoot ?? '')
  return map.sources.map((source) =>
    path
      // fallow-ignore-next-line security-sink -- the map's own sources, turned into module ids to compare, never read
      .relative(repositoryRoot, path.resolve(base, source))
      .split(path.sep)
      .join('/'),
  )
}

/**
 * Reads each script named by the emitted SSR manifest, failing closed, and
 * the modules each one's source map names.
 * @param {string} repositoryRoot The repository root or a test fixture.
 * @returns {{manifest: null | Record<string, object>, chunks: Record<string, string>, sources: Record<string, string | string[]>}} The server build, or missing evidence.
 */
function readServerBuild(repositoryRoot) {
  try {
    const manifest = JSON.parse(
      // fallow-ignore-next-line security-sink -- the caller supplies this script's repository root; SERVER_MANIFEST is a fixed build-artifact path
      readFileSync(path.join(repositoryRoot, SERVER_MANIFEST), 'utf8'),
    )
    const files = new Set(Object.values(manifest).map((entry) => entry.file))
    const chunks = Object.fromEntries(
      [...files].map((file) => [
        file,
        // fallow-ignore-next-line security-sink -- file comes from Vite's local emitted manifest, never a request or CLI argument
        readFileSync(path.join(repositoryRoot, 'dist/server', file), 'utf8'),
      ]),
    )
    const sources = Object.fromEntries(
      Object.entries(chunks).map(([file, text]) => [
        file,
        mappedSources(repositoryRoot, file, text),
      ]),
    )
    return { manifest, chunks, sources }
  } catch {
    return { manifest: null, chunks: {}, sources: {} }
  }
}

/**
 * Runs the server half of the gate against the same series list and canaries.
 * @param {string} repositoryRoot The repository root.
 * @param {{file: string, phrase: null | string}[]} canaries The client gate's fingerprints.
 * @returns {Promise<number>} The process exit code.
 */
export async function checkServer(repositoryRoot, canaries) {
  const { SERIES } = await importArchive('data/series/index.ts')
  const { manifest, chunks, sources } = readServerBuild(repositoryRoot)
  const archives = SERIES.map(({ folder }) => ({
    folder,
    canaries: canaries.filter(({ file }) =>
      file.startsWith(`${SERIES_DIR}/${folder}/`),
    ),
  }))
  const verdict = judgeServer(manifest, archives, chunks, sources)
  for (const problem of verdict.problems) {
    console.error(`archive-gate: ${problem}`)
  }
  if (verdict.unreadable.length > 0) {
    console.error(
      `archive-gate: server boundary evidence missing: ${verdict.unreadable.join(', ')}`,
    )
    return EXIT_UNUSABLE
  }
  if (!verdict.ok) {
    return EXIT_FOUND
  }
  console.log(
    `archive-gate: server archives are dynamically isolated — ${String(archives.length)} series; server functions stay in their own chunks.`,
  )
  return EXIT_CLEAN
}
