// @vitest-environment node
import { execFileSync } from 'node:child_process'
import {
  chmodSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterAll, describe, expect, it } from 'vitest'

const SCRIPT = path.join(import.meta.dirname, 'nvm-env.sh')
const root = mkdtempSync(path.join(tmpdir(), 'nvm-env-'))
afterAll(() => rmSync(root, { recursive: true }))

/**
 * A folder holding a `node` that prints the given version.
 * @param {string} version What `node --version` prints.
 * @returns {string} The folder.
 */
const nodeBin = (version) => {
  const bin = mkdtempSync(path.join(root, 'bin-'))
  writeFileSync(path.join(bin, 'node'), `#!/bin/sh\necho ${version}\n`)
  chmodSync(path.join(bin, 'node'), 0o755)
  return bin
}

/**
 * An NVM_DIR whose `nvm use` switches to a Node 24.22.2 folder.
 * @returns {{ nvmDir: string, bin: string }} The NVM_DIR and that folder.
 */
const fakeNvm = () => {
  const nvmDir = mkdtempSync(path.join(root, 'nvm-'))
  const bin = nodeBin('v24.22.2')
  writeFileSync(
    path.join(nvmDir, 'nvm.sh'),
    `nvm() { [ "$1" = use ] && export NVM_BIN='${bin}'; }\n`,
  )
  return { nvmDir, bin }
}

/**
 * Runs the hook and returns what it left in $CLAUDE_ENV_FILE.
 * @param {{ nvmrc?: boolean, nvmDir: string, node: string }} setup Whether
 *   the project has an .nvmrc, the NVM_DIR and the folder of the running node.
 * @returns {string} The env file's contents.
 */
const run = ({ nvmrc = true, nvmDir, node }) => {
  const project = mkdtempSync(path.join(root, 'project-'))
  if (nvmrc) {
    writeFileSync(path.join(project, '.nvmrc'), '24.22.2\n')
  }
  const envFile = path.join(project, 'env')
  writeFileSync(envFile, '')
  execFileSync('bash', [SCRIPT], {
    env: {
      HOME: project,
      PATH: `${node}:/usr/bin:/bin`,
      NVM_DIR: nvmDir,
      CLAUDE_PROJECT_DIR: project,
      CLAUDE_ENV_FILE: envFile,
    },
  })
  return readFileSync(envFile, 'utf8')
}

describe('nvm-env SessionStart hook', () => {
  it('puts the .nvmrc Node first on PATH', () => {
    const { nvmDir, bin } = fakeNvm()
    const env = run({ nvmDir, node: nodeBin('v22.15.0') })

    expect(env).toBe(`export PATH=${bin}:"$PATH"\n`)
    const shell = `. '${path.join(root, 'out')}'; node --version`
    writeFileSync(path.join(root, 'out'), env)
    expect(
      execFileSync('bash', ['-c', shell], {
        env: { PATH: `${nodeBin('v22.15.0')}:/usr/bin:/bin` },
        encoding: 'utf8',
      }),
    ).toBe('v24.22.2\n')
  })

  it('leaves PATH alone when Node already matches .nvmrc', () => {
    const { nvmDir } = fakeNvm()
    expect(run({ nvmDir, node: nodeBin('v24.22.2') })).toBe('')
  })

  it('does nothing without nvm', () => {
    const nvmDir = path.join(root, 'no-nvm')
    mkdirSync(nvmDir, { recursive: true })
    expect(run({ nvmDir, node: nodeBin('v22.15.0') })).toBe('')
  })

  it('does nothing without .nvmrc', () => {
    const { nvmDir } = fakeNvm()
    expect(run({ nvmrc: false, nvmDir, node: nodeBin('v22.15.0') })).toBe('')
  })
})
