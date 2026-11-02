// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { describe, expect, it } from 'vitest'

import config from '../doctor.config.ts'

const repositoryRoot = path.resolve(import.meta.dirname, '..')
const cli = path.join(
  repositoryRoot,
  'node_modules',
  'react-doctor',
  'bin',
  'react-doctor.js',
)

// The rules doctor.config.ts turns off on purpose, each with its reason there.
const OFF_ON_PURPOSE = new Set([
  'js-set-map-lookups',
  'jsx-props-no-spreading',
  'react-in-jsx-scope',
  'unused-dev-dependency',
])

// Rule families for platforms this app does not run on.
const OTHER_PLATFORMS = new Set(['ink', 'react-native'])

/**
 * Every rule react-doctor knows, at the severity doctor.config.ts gives it.
 * @returns {{id: string, framework: string, tags: string[], severity: string}[]} The rules.
 */
function rules() {
  const child = spawnSync(process.execPath, [cli, 'rules', 'list', '--json'], {
    cwd: repositoryRoot,
    encoding: 'utf8',
  })
  return JSON.parse(child.stdout)
}

/**
 * Whether a rule can fire on this stack.
 * @param {{framework: string, tags: string[]}} rule - One listed rule.
 * @returns {boolean} True for the global and TanStack Start rules, minus
 *   other platforms.
 */
function applies(rule) {
  return (
    ['global', 'tanstack-start'].includes(rule.framework)
    && rule.tags.every((tag) => !OTHER_PLATFORMS.has(tag))
  )
}

describe('the react-doctor configuration', () => {
  it('runs every rule that applies here, at error', () => {
    const notAtError = rules()
      .filter((rule) => applies(rule) && rule.severity !== 'error')
      .map((rule) => rule.id)

    expect(new Set(notAtError)).toStrictEqual(OFF_ON_PURPOSE)
  })

  // scripts/react-doctor-gate.mjs passes its own flags for both, and says the
  // config must agree so a bare `npx react-doctor` fails on the same findings.
  it('lets no inline comment hide a finding and blocks on every warning', () => {
    expect(config).toMatchObject({
      respectInlineDisables: false,
      blocking: 'warning',
    })
  })
})
