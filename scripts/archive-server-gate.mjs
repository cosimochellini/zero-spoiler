/**
 * The emitted SSR build must keep each series behind its dynamic import, and
 * the server-function provider out of every other runtime chunk.
 *
 * Start splits each server function's handler into a `?tss-serverfn-split`
 * chunk that only its resolver imports, dynamically. A route chunk that
 * statically reaches what that chunk holds loads every projection with the
 * route: PR #1496's first round did it through one validator reading
 * `ENDPOINTS`, and the shared chunk it made was named after `src/lib/plain`,
 * so only the modules inside a chunk can tell. Rolldown writes one
 * `//#region <module id>` line per module into the unminified server chunks;
 * a reached chunk without one leaves the gate unusable, never clean.
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
 * The provider-only modules one emitted chunk holds, read from its region lines.
 * @param {string} key The chunk's manifest key.
 * @param {string | undefined} text The chunk's emitted text.
 * @returns {null | string[]} The modules, or null when the chunk marks none.
 */
function providerModules(key, text = '') {
  const regions = text
    .matchAll(/^\/\/#region (?<id>.+)$/gmu)
    .map((match) => match.groups.id)
    .toArray()
  if (regions.length === 0) {
    return null
  }
  const held = new Set([key, ...regions].filter((id) => providerOnly(id)))
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
 * @returns {{problems: string[], unreadable: string[]}} The provider verdict.
 */
function providerBoundary(manifest, chunks) {
  if (Object.keys(manifest).every((key) => !key.includes(SERVER_FN_SPLIT))) {
    return { problems: [], unreadable: [`a ${SERVER_FN_SPLIT} chunk`] }
  }
  const { firstRoot, missing } = closuresOf(manifest)
  const problems = []
  const unreadable = new Set(missing)
  for (const [key, root] of firstRoot) {
    const { file } = manifest[key]
    const held = providerModules(key, chunks[file])
    if (held === null) {
      unreadable.add(file)
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
 * @returns {{ok: boolean, problems: string[], unreadable: string[]}} The server verdict.
 */
export function judgeServer(manifest, archives, chunks) {
  if (
    manifest === null
    || Object.values(manifest).every((entry) => entry.isEntry !== true)
  ) {
    return { ok: false, problems: [], unreadable: [SERVER_MANIFEST] }
  }
  const verdicts = [
    ...archives.map((archive) => archiveBoundary(manifest, archive, chunks)),
    providerBoundary(manifest, chunks),
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
 * Reads each script named by the emitted SSR manifest, failing closed.
 * @param {string} repositoryRoot The repository root or a test fixture.
 * @returns {{manifest: null | Record<string, object>, chunks: Record<string, string>}} The server build, or missing evidence.
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
    return { manifest, chunks }
  } catch {
    return { manifest: null, chunks: {} }
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
  const { manifest, chunks } = readServerBuild(repositoryRoot)
  const archives = SERIES.map(({ folder }) => ({
    folder,
    canaries: canaries.filter(({ file }) =>
      file.startsWith(`${SERIES_DIR}/${folder}/`),
    ),
  }))
  const verdict = judgeServer(manifest, archives, chunks)
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
