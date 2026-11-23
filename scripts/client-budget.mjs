/**
 * Compare the raw bytes of the client entry's JavaScript with a
 * separately built PR base. A chunk loaded only through a dynamic `import()`
 * (a route's own code, a dialog's form, a QR encoder) is left out: it costs
 * only the reader who opens it. The archive gate still scans every chunk.
 */
import console from 'node:console'
import { readFileSync, realpathSync, statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const GROWTH_BUDGET = 2048

/**
 * A PR explicitly accepts larger growth with a reason on its own line.
 * @param {number} base The base build's total bytes.
 * @param {number} head The head build's total bytes.
 * @param {string} body The PR body, passed as data.
 * @returns {{accepted: boolean, difference: number, ok: boolean}} The size verdict.
 */
export function judgeClientBudget(base, head, body) {
  const difference = head - base
  const accepted = /^client-budget:[\t ]*\S[^\r\n]*$/mu.test(body)
  return { accepted, difference, ok: difference <= GROWTH_BUDGET || accepted }
}

/**
 * The scripts the entry loads: each entry of the build's Vite manifest and
 * everything it imports statically, followed to the end. Dynamic imports are
 * not followed.
 * @param {Record<string, {file: string, imports?: string[], isEntry?: boolean}>} manifest The build's `.vite/manifest.json`.
 * @returns {string[]} Their files, relative to the client directory.
 */
export function eagerScripts(manifest) {
  const seen = new Set()
  const visit = (key) => {
    if (seen.has(key) || manifest[key] === undefined) {
      return
    }
    seen.add(key)
    const { imports } = manifest[key]
    if (imports !== undefined) {
      for (const imported of imports) {
        visit(imported)
      }
    }
  }
  for (const [key, chunk] of Object.entries(manifest)) {
    if (chunk.isEntry === true) {
      visit(key)
    }
  }
  return [...seen]
    .map((key) => manifest[key].file)
    .filter((file) => file.endsWith('.js'))
}

/**
 * Measure the eager scripts of one build, refusing a build without them.
 * @param {string} directory A built client directory.
 * @returns {number} Their total raw bytes.
 */
function clientBytes(directory) {
  const manifest = JSON.parse(
    // fallow-ignore-next-line security-sink -- directory is a build folder named on the command line.
    readFileSync(path.join(directory, '.vite', 'manifest.json'), 'utf8'),
  )
  const files = eagerScripts(manifest)
  if (files.length === 0) {
    throw new Error(`no entry scripts in ${directory}`)
  }
  return files.reduce(
    // fallow-ignore-next-line security-sink -- a file the build's own manifest names.
    (total, file) => total + statSync(path.join(directory, file)).size,
    0,
  )
}

/**
 * Print the measured totals and decision.
 * @param {number} base The base bytes.
 * @param {number} head The head bytes.
 * @param {string} body The PR body.
 * @returns {number} The comparison exit code.
 */
function reportClientBudget(base, head, body) {
  const verdict = judgeClientBudget(base, head, body)
  console.log(
    `client-budget: base ${String(base)} bytes, head ${String(head)} bytes, difference ${String(verdict.difference)} bytes (budget ${String(GROWTH_BUDGET)} bytes).`,
  )
  if (!verdict.ok) {
    console.error(
      'client-budget: growth exceeds the budget. Add a standalone "client-budget: <reason>" line to the PR body to accept it.',
    )
    return 1
  }
  if (verdict.difference > GROWTH_BUDGET) {
    console.log(
      'client-budget: larger growth explicitly accepted in the PR body.',
    )
  }
  return 0
}

/**
 * Report the comparison. Missing build evidence fails rather than skipping.
 * @param {string} baseDirectory The base's built client directory.
 * @param {string} headDirectory The head's built client directory.
 * @param {string} body The PR body.
 * @returns {number} Exit code: 0 passed, 1 over budget, 2 missing build.
 */
export function checkClientBudget(baseDirectory, headDirectory, body) {
  try {
    return reportClientBudget(
      clientBytes(baseDirectory),
      clientBytes(headDirectory),
      body,
    )
  } catch (error) {
    console.error(`client-budget: cannot compare builds: ${String(error)}`)
    return 2
  }
}

if (realpathSync(process.argv[1] ?? '.') === import.meta.filename) {
  const [baseDirectory, headDirectory] = process.argv.slice(2)
  if (!baseDirectory || !headDirectory) {
    console.error(
      'Usage: node scripts/client-budget.mjs BASE_CLIENT_DIR HEAD_CLIENT_DIR',
    )
    process.exit(2)
  }
  process.exit(
    checkClientBudget(
      baseDirectory,
      headDirectory,
      process.env['PR_BODY'] ?? '',
    ),
  )
}
