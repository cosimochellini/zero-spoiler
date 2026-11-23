/**
 * The design gate's second scan: the pages against the tokens in `DESIGN.md`.
 *
 * Engine 0.1.24 loads `DESIGN.md` only for a local file target, found upwards
 * from that file, never for an address (#1385, #1403). So the gate saves each
 * page it was served as a file, in a directory of its own outside the
 * repository with `DESIGN.md` and `.impeccable/design.json` beside them and no
 * config, and scans the copies at one width, keeping the `design-system-*`
 * findings, and checks on a canary page that the engine read `DESIGN.md` at
 * all. The address scan stays: the copies lose findings it has
 * (`ai-color-palette`).
 */
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import {
  CANARY,
  CANARY_PAGE,
  savedCopy,
  tokenFindings,
} from './design-gate.rules.mjs'

// The token rules read the stylesheet, which is the same at every width.
export const TOKEN_VIEWPORT = '1440x900'

// What the detector needs beside a saved page to load the tokens.
const DESIGN_CONTEXT = ['DESIGN.md', path.join('.impeccable', 'design.json')]

/**
 * Saves the design context, the pages and the canary in a folder, and scans
 * them there.
 * @param {string} root The repository, which holds the design context.
 * @param {string} directory The empty folder to save into.
 * @param {{address: string, html: string}[]} served Every page as served.
 * @param {(viewport: string, urls: string[], cwd: string) => Promise<object[]>} detect
 *   One detector run, in a directory.
 * @returns {Promise<object[]>} The token findings, under page addresses.
 */
async function saveAndScan(root, directory, served, detect) {
  for (const file of DESIGN_CONTEXT) {
    // fallow-ignore-next-line security-sink -- the repository's root and the constant DESIGN_CONTEXT, into the folder made above
    cpSync(path.join(root, file), path.join(directory, file))
  }
  const addresses = new Map()
  const pages = [
    ...served.map(({ address, html }) => [address, savedCopy(html, address)]),
    [CANARY, CANARY_PAGE],
  ]
  const files = pages.map(([address, html], index) => {
    // fallow-ignore-next-line security-sink -- the folder made above and a number
    const file = path.join(directory, `${index}.html`)
    writeFileSync(file, html)
    const url = pathToFileURL(file).href
    // The detector may name a copy by its path or by its URL.
    addresses.set(url, address).set(file, address)
    return url
  })
  return tokenFindings(
    await detect(TOKEN_VIEWPORT, files, directory),
    addresses,
  )
}

/**
 * Saves the pages and a canary, and scans the copies. The folder goes when
 * the scan returns or throws, and on `process.exit`, which is how the gate's
 * `fail()` ends a detector run that went wrong and how `design-gate.mjs` ends
 * on SIGINT or SIGTERM. A SIGKILL leaves it in the system's temporary folder.
 * @param {string} root The repository, which holds the design context.
 * @param {{address: string, html: string}[]} served Every page as served.
 * @param {(viewport: string, urls: string[], cwd: string) => Promise<object[]>} detect
 *   One detector run, in a directory.
 * @returns {Promise<object[]>} The token findings, under page addresses.
 */
export async function scanTokens(root, served, detect) {
  // fallow-ignore-next-line security-sink -- the system's temporary folder and a constant prefix
  const directory = mkdtempSync(path.join(os.tmpdir(), 'design-gate-'))
  const remove = () => {
    rmSync(directory, { recursive: true, force: true })
  }
  process.on('exit', remove)
  try {
    return await saveAndScan(root, directory, served, detect)
  } finally {
    process.off('exit', remove)
    remove()
  }
}
