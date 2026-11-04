// @vitest-environment node
import { spawnSync } from 'node:child_process'
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { describe, expect, it } from 'vitest'

const packagePath = 'node_modules/example'
const version = '2.0.0'

function check(installed, actual = version) {
  const root = mkdtempSync(path.join(tmpdir(), 'dependencies-fresh-'))
  try {
    const scripts = path.join(root, 'scripts')
    const script = path.join(scripts, 'dependencies-fresh.mjs')
    mkdirSync(scripts)
    copyFileSync(new URL('dependencies-fresh.mjs', import.meta.url), script)
    mkdirSync(path.join(root, packagePath), { recursive: true })
    writeFileSync(
      path.join(root, 'package-lock.json'),
      JSON.stringify({
        packages: {
          '': { version },
          [packagePath]: { version },
          'node_modules/optional': { version, optional: true },
        },
      }),
    )
    writeFileSync(
      path.join(root, 'node_modules/.package-lock.json'),
      JSON.stringify({ packages: installed }),
    )
    writeFileSync(
      path.join(root, packagePath, 'package.json'),
      JSON.stringify({ version: actual }),
    )

    return spawnSync(process.execPath, [script], { encoding: 'utf8' })
  } finally {
    rmSync(root, { recursive: true })
  }
}

describe('dependency preflight', () => {
  it('accepts a matching install with an omitted optional package', () => {
    expect(check({ [packagePath]: { version } }).status).toBe(0)
  })

  it.each([
    ['old lock version', { [packagePath]: { version: '1.0.0' } }, version],
    ['missing package', {}, version],
    [
      'extra package',
      { [packagePath]: { version }, 'node_modules/extra': { version } },
      version,
    ],
    ['manual downgrade', { [packagePath]: { version } }, '1.0.0'],
  ])('refuses a stale install with a %s', (_, installed, actual) => {
    const result = check(installed, actual)

    expect(result.status).toBe(1)
    expect(result.stderr).toContain('node_modules is stale: run npm ci')
  })
})
