/**
 * The design gate's second scan: the pages against the tokens in `DESIGN.md`.
 *
 * Engine 0.1.24 loads `DESIGN.md` only for a local file target, found upwards
 * from that file, never for an address (#1385, #1403). So the gate saves each
 * page it was served as a file, in a directory of its own outside the
 * repository with `DESIGN.md` and `.impeccable/design.json` beside them and no
 * config, and scans the copies at one width, keeping the `design-system-*`
 * findings. The address scan stays: the copies lose findings it has
 * (`ai-color-palette`).
 */
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { savedCopy, tokenFindings } from './design-gate.rules.mjs'

// The token rules read the stylesheet, which is the same at every width.
export const TOKEN_VIEWPORT = '1440x900'

// What the detector needs beside a saved page to load the tokens.
const DESIGN_CONTEXT = ['DESIGN.md', path.join('.impeccable', 'design.json')]

/**
 * Saves the pages and scans the copies. The copies are gone when the gate
 * exits, however it exits.
 * @param {string} root The repository, which holds the design context.
 * @param {{address: string, html: string}[]} served Every page as served.
 * @param {(viewport: string, urls: string[], cwd: string) => Promise<object[]>} detect
 *   One detector run, in a directory.
 * @returns {Promise<object[]>} The token findings, under page addresses.
 */
export async function scanTokens(root, served, detect) {
  const directory = mkdtempSync(path.join(os.tmpdir(), 'design-gate-'))
  process.on('exit', () => {
    rmSync(directory, { recursive: true, force: true })
  })
  for (const file of DESIGN_CONTEXT) {
    cpSync(path.join(root, file), path.join(directory, file))
  }
  const addresses = new Map()
  const files = served.map(({ address, html }, index) => {
    const file = path.join(directory, `${index}.html`)
    writeFileSync(file, savedCopy(html, address))
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
