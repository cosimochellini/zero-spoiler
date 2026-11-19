// The lefthook pre-push guard: refuses a push to a branch whose pull request
// has merged. GitHub deletes the branch on merge, and a late push would
// recreate it on the remote. Git passes one line per pushed ref on stdin:
// `<local ref> <local sha> <remote ref> <remote sha>`.
//
// It stays quiet and lets the push through when it cannot tell: `gh` missing,
// offline or not signed in. `main` is never checked.
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import process from 'node:process'

import { isMain } from './is-main.mjs'

const DELETE = /^0+$/u

/**
 * The remote branches a push writes to, without `main` and without deletions.
 * @param {string} input What Git passes the pre-push hook on stdin.
 * @returns {string[]} The branch names.
 */
export function pushedBranches(input) {
  const branches = input.split('\n').flatMap((line) => {
    const fields = line.trim().split(/\s+/u)
    const sha = fields[1]
    const ref = fields[2]
    if (sha === undefined || ref === undefined || DELETE.test(sha)) {
      return []
    }
    const branch = ref.replace(/^refs\/heads\//u, '')

    return branch === 'main' ? [] : [branch]
  })

  return [...new Set(branches)]
}

/**
 * The newest pull request opened from a branch, as `gh` reports it.
 * @param {string} branch The head branch.
 * @returns {{ number: number, state: string } | undefined} The PR, or nothing
 *   when the branch has none or `gh` cannot answer.
 */
function newestPr(branch) {
  try {
    const out = execFileSync(
      'gh',
      [
        'pr',
        'list',
        '--head',
        branch,
        '--state',
        'all',
        '--json',
        'number,state',
      ],
      {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
        timeout: 15_000,
      },
    )
    /** @type {{ number: number, state: string }[]} */
    const prs = JSON.parse(out)

    return prs.toSorted((a, b) => b.number - a.number)[0]
  } catch {
    // Missing, offline or signed out: let the push through.
    return
  }
}

/**
 * Why the push is refused; empty when it goes through.
 * @param {string[]} branches The branches pushed to.
 * @param {(branch: string) => { number: number, state: string } | undefined} lookup
 *   The newest PR of a branch.
 * @returns {string[]} One line per refused branch.
 */
export function refusals(branches, lookup = newestPr) {
  return branches
    .map((branch) => ({ branch, pr: lookup(branch) }))
    .filter(({ pr }) => pr?.state === 'MERGED')
    .map(
      ({ branch, pr }) =>
        `${branch}: PR #${pr?.number} has merged, and this push would recreate the branch. Open a new branch from origin/main for a follow-up.`,
    )
}

if (isMain(import.meta)) {
  const found = refusals(pushedBranches(readFileSync(process.stdin.fd, 'utf8')))
  if (found.length > 0) {
    process.stderr.write(`push refused:\n- ${found.join('\n- ')}\n`)
    process.exitCode = 1
  }
}
