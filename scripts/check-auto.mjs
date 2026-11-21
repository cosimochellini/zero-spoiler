/**
 * Picks the local check by machine load, so an agent among several parallel
 * sessions does not choose by judgement (#1414). Below the core count it runs
 * the full `npm run check`; at or above it, `npm run check:content` with two
 * Vitest workers. It prints the choice before and after the run, the second
 * line ready for a PR body, and exits as the check did.
 */
import { spawnSync } from 'node:child_process'
import os from 'node:os'
import process from 'node:process'

import { isMain } from './is-main.mjs'

/**
 * The check a machine with this load runs.
 * @param {number} load The one-minute load average.
 * @param {number} cores The cores Node may use.
 * @returns {{ script: string, env: Record<string, string>, line: string }}
 *   The npm script, the extra environment it runs with and the line that
 *   names both, with the load and cores behind the choice.
 */
export function pickCheck(load, cores) {
  const loaded = load >= cores
  const script = loaded ? 'check:content' : 'check'
  const env = loaded ? { VITEST_MAX_WORKERS: '2' } : {}
  const prefix = loaded ? 'VITEST_MAX_WORKERS=2 ' : ''
  const sign = loaded ? '>=' : '<'
  const line = `check:auto ran \`${prefix}npm run ${script}\`: one-minute load ${load.toFixed(2)} ${sign} ${String(cores)} cores`
  return { script, env, line }
}

function main() {
  // ponytail: Windows reports a load of 0, so it always runs the full check.
  const { script, env, line } = pickCheck(
    os.loadavg()[0],
    os.availableParallelism(),
  )
  process.stdout.write(`${line}\n`)
  const result = spawnSync('npm', ['run', script], {
    stdio: 'inherit',
    env: { ...process.env, ...env },
  })
  // npm failing to start leaves status and signal null: `exit null`, then 1.
  const outcome = result.signal ?? `exit ${String(result.status)}`
  process.stdout.write(`${line}, ${outcome}\n`)
  if (result.signal) {
    process.kill(process.pid, result.signal)
  }
  process.exit(result.status ?? 1)
}

if (isMain(import.meta)) {
  main()
}
