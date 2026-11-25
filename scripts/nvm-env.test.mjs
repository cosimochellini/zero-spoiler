// @vitest-environment node
import { execFileSync, spawnSync } from 'node:child_process'
import {
  chmodSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterAll, describe, expect, it } from 'vitest'

const SCRIPT = path.join(import.meta.dirname, 'nvm-env.sh')
const root = mkdtempSync(path.join(tmpdir(), 'nvm env '))
afterAll(() => rmSync(root, { recursive: true }))

/**
 * A folder holding an executable that prints a line.
 * @param {string} name The executable's name.
 * @param {string} output What it prints.
 * @returns {string} The folder, whose name has a space.
 */
const bin = (name, output) => {
  const dir = mkdtempSync(path.join(root, 'bin '))
  writeFileSync(path.join(dir, name), `#!/bin/sh\necho ${output}\n`)
  chmodSync(path.join(dir, name), 0o755)
  return dir
}

const NODE_22 = bin('node', 'v22.15.0')
const NODE_24 = bin('node', 'v24.22.2')

/**
 * An NVM_DIR whose nvm.sh defines `nvm`.
 * @param {boolean} installed Whether `nvm use` finds Node 24.22.2.
 * @returns {string} The NVM_DIR.
 */
const nvmDir = (installed = true) => {
  const dir = mkdtempSync(path.join(root, 'nvm '))
  const use = installed ? `export NVM_BIN='${NODE_24}'` : 'return 3'
  writeFileSync(path.join(dir, 'nvm.sh'), `nvm() { ${use}; }\n`)
  return dir
}

/**
 * Runs the hook in a project whose folder name has a space.
 * @param {object} [setup] What differs from a project that needs a switch.
 * @param {string | null} [setup.nvmrc] The .nvmrc text, null for none.
 * @param {string} [setup.envFile] What the env file holds beforehand.
 * @param {Record<string, string | undefined>} [setup.env] Extra variables.
 * @returns {{ status: number | null, stderr: string, envFile: string }} The
 *   exit status, stderr and the env file afterwards.
 */
const run = ({ nvmrc = '24.22.2\n', envFile = '', env = {} } = {}) => {
  const project = mkdtempSync(path.join(root, 'project '))
  if (nvmrc !== null) {
    writeFileSync(path.join(project, '.nvmrc'), nvmrc)
  }
  const file = path.join(project, 'env')
  writeFileSync(file, envFile)
  const result = spawnSync('bash', [SCRIPT], {
    encoding: 'utf8',
    // spawnSync leaves out a variable set to undefined.
    env: {
      HOME: project,
      PATH: `${NODE_22}:/usr/bin:/bin`,
      NVM_DIR: nvmDir(),
      CLAUDE_PROJECT_DIR: project,
      CLAUDE_ENV_FILE: file,
      ...env,
    },
  })
  return {
    status: result.status,
    stderr: result.stderr,
    envFile: readFileSync(file, 'utf8'),
  }
}

/**
 * The Node a Bash command gets after Claude Code runs the env file.
 * @param {string} envFile The env file's contents.
 * @returns {string} What `node --version` prints.
 */
const nodeAfter = (envFile) =>
  execFileSync('bash', ['-c', `${envFile}\nnode --version`], {
    env: { PATH: `${NODE_22}:/usr/bin:/bin` },
    encoding: 'utf8',
  }).trim()

/** A run that must change nothing, quietly. */
const UNTOUCHED = { status: 0, stderr: '', envFile: '' }

describe('nvm-env SessionStart hook', () => {
  it('puts the .nvmrc Node first on PATH', () => {
    const { status, stderr, envFile } = run()

    expect({ status, stderr }).toEqual({ status: 0, stderr: '' })
    expect(envFile.split('\n')).toHaveLength(2)
    expect(nodeAfter(envFile)).toBe('v24.22.2')
  })

  it('keeps what the env file already holds', () => {
    const { envFile } = run({ envFile: 'export A=1\n' })

    expect(envFile).toMatch(/^export A=1\nexport PATH=/u)
  })

  it('adds the line once when it runs again', () => {
    const first = run().envFile

    expect(run({ envFile: first }).envFile).toBe(first)
  })

  it('leaves PATH alone when Node already matches .nvmrc', () => {
    expect(run({ env: { PATH: `${NODE_24}:/usr/bin:/bin` } })).toEqual(
      UNTOUCHED,
    )
  })

  it('reads an .nvmrc written with a v', () => {
    expect(
      run({ nvmrc: 'v24.22.2\n', env: { PATH: `${NODE_24}:/usr/bin:/bin` } }),
    ).toEqual(UNTOUCHED)
  })

  it('does nothing without nvm.sh, even with an nvm on PATH', () => {
    // A shell that already ran nvm keeps NVM_BIN and could reach an `nvm`.
    const path_ = `${NODE_22}:${bin('nvm', '')}:/usr/bin:/bin`
    const env = { PATH: path_, NVM_DIR: root, NVM_BIN: NODE_24 }

    expect(run({ env })).toEqual(UNTOUCHED)
  })

  it('does nothing when the .nvmrc version is not installed', () => {
    const env = { NVM_DIR: nvmDir(false), NVM_BIN: NODE_22 }

    expect(run({ env })).toEqual(UNTOUCHED)
  })

  it('does nothing without .nvmrc', () => {
    expect(run({ nvmrc: null })).toEqual(UNTOUCHED)
  })

  it('does nothing without CLAUDE_ENV_FILE', () => {
    expect(run({ env: { CLAUDE_ENV_FILE: undefined } })).toEqual(UNTOUCHED)
  })
})
