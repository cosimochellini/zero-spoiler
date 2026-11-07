// @vitest-environment node
//
// Runs the real scripts/land-pr.sh against a fake `gh`, `git` and `sleep`
// first on the PATH. The fake `gh` answers with fixture JSON through the
// script's own `-q` queries, run by jq, so the queries are under test too.
import { spawnSync } from 'node:child_process'
import {
  chmodSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import process from 'node:process'
import { describe, expect, it } from 'vitest'

const script = path.resolve(import.meta.dirname, 'land-pr.sh')
const head = 'a'.repeat(40)
const headRepositoryName = 'owner/zero-spoiler'

// Workflow runs come one fixture line per `gh api` call, the last one repeated.
// `gh pr merge` refuses when refused.json exists, which is the PR after that.
const fakeGh = `#!/bin/bash
d=$(dirname "$0")
echo "$*" >>"$d/calls.log"
q=
prev=
for a; do [ "$prev" = -q ] && q=$a; prev=$a; done
case "$1 $2" in
  "api repos/"*)
    n=$(($(cat "$d/n" 2>/dev/null || echo 0) + 1))
    echo "$n" >"$d/n"
    line=$(sed -n "$n p" "$d/runs.jsonl")
    [ -n "$line" ] || line=$(tail -n 1 "$d/runs.jsonl")
    echo "$line" ;;
  "pr view")
    # A second PR file, when there is one, answers every read after the first
    # mergeable one: main moving into a conflict while CI runs.
    if [ "$q" = .mergeable ] && [ -f "$d/later.json" ]; then
      if [ -f "$d/read" ]; then jq -r "$q" "$d/later.json"; exit; fi
      touch "$d/read"
    fi
    jq -r "$q" "$d/pr.json" ;;
  "pr ready") ;;
  "pr merge")
    [ -f "$d/refused.json" ] || exit 0
    cp "$d/refused.json" "$d/pr.json"
    echo "GraphQL: Merge already in progress (mergePullRequest)" >&2
    exit 1 ;;
  *) exit 1 ;;
esac
`

/**
 * A workflow run as the GitHub API lists it.
 * @param {number} id - The run id: a newer run has a higher one.
 * @param {string} status - queued, in_progress or completed.
 * @param {string | null} conclusion - The conclusion once completed.
 * @returns {object} The run.
 */
const run = (id, status, conclusion) => ({
  id,
  status,
  conclusion,
  head_repository: { full_name: headRepositoryName },
})

/**
 * The PR as `gh pr view --json` sees it.
 * @param {string} state - OPEN or MERGED.
 * @param {string} [mergeable] - MERGEABLE or CONFLICTING.
 * @returns {object} The PR fields the script reads.
 */
const pr = (state, mergeable = 'MERGEABLE') => ({
  state,
  baseRefName: 'main',
  headRefName: 'topic',
  headRepository: { nameWithOwner: headRepositoryName },
  mergeable,
  headRefOid: head,
  mergeCommit: state === 'MERGED' ? { oid: 'b'.repeat(40) } : null,
  closingIssuesReferences: [],
})

/**
 * Writes the fakes and the fixtures into the bin directory.
 * @param {string} bin - The directory put first on the PATH.
 * @param {object[][]} runs - The workflow runs each `gh api` call returns.
 * @param {string} [refusedThen] - When set, `gh pr merge` is refused and the PR state reads this after.
 * @param {string} [mergeable] - What GitHub reports about merging the PR.
 * @param {string} [later] - What GitHub reports on every later read.
 * @param {boolean} [clean] - Whether a merge with main is free of conflicts.
 */
function prepare(bin, runs, refusedThen, mergeable, later, clean) {
  /**
   * Writes an executable fake into the bin directory.
   * @param {string} name - The command it stands in for.
   * @param {string} body - The script text.
   */
  const fake = (name, body) => {
    writeFileSync(path.join(bin, name), body)
    chmodSync(path.join(bin, name), 0o755)
  }
  fake('gh', fakeGh)
  // Git logs its calls beside gh's. A merge with main conflicts on one file
  // unless clean is set; the script asks only when GitHub does not say
  // MERGEABLE.
  fake(
    'git',
    `#!/bin/sh
echo "git $*" >>"$(dirname "$0")/calls.log"
[ "$1" = merge-tree ] || exit 0
echo tree
${clean ? 'exit 0' : 'echo src/a.ts; exit 1'}
`,
  )
  fake('sleep', '#!/bin/sh\nexit 0\n')
  writeFileSync(
    path.join(bin, 'runs.jsonl'),
    runs.map((list) => JSON.stringify({ workflow_runs: list })).join('\n'),
  )
  writeFileSync(
    path.join(bin, 'pr.json'),
    JSON.stringify(pr('OPEN', mergeable)),
  )
  if (later) {
    writeFileSync(
      path.join(bin, 'later.json'),
      JSON.stringify(pr('OPEN', later)),
    )
  }
  if (refusedThen) {
    writeFileSync(
      path.join(bin, 'refused.json'),
      JSON.stringify(pr(refusedThen)),
    )
  }
  writeFileSync(path.join(bin, 'calls.log'), '')
}

/**
 * Runs land-pr.sh once in a fresh directory of fakes, removed afterwards.
 * @param {object[][]} runs - The workflow runs each `gh api` call returns.
 * @param {string} [refusedThen] - When set, `gh pr merge` is refused and the PR state reads this after.
 * @param {string} [mergeable] - What GitHub reports about merging the PR.
 * @param {string} [later] - What GitHub reports on every later read.
 * @param {boolean} [clean] - Whether a merge with main is free of conflicts.
 * @param {string} [expectedHead] - The full or abbreviated SHA passed by the caller.
 * @returns {{ status: number | null, stdout: string, calls: string }} The exit status, output and the `gh` calls made.
 */
function land(runs, refusedThen, mergeable, later, clean, expectedHead = head) {
  const bin = mkdtempSync(path.join(tmpdir(), 'land-pr-'))
  try {
    prepare(bin, runs, refusedThen, mergeable, later, clean)
    const child = spawnSync('bash', [script, '42', expectedHead], {
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${bin}${path.delimiter}${process.env.PATH}`,
      },
    })
    const calls = readFileSync(path.join(bin, 'calls.log'), 'utf8')
    return { status: child.status, stdout: child.stdout, calls }
  } finally {
    rmSync(bin, { recursive: true })
  }
}

describe('land-pr.sh', () => {
  it('pins a short SHA to the full head for CI and merge', () => {
    const { status, calls } = land(
      [[run(1, 'completed', 'success')]],
      undefined,
      undefined,
      undefined,
      undefined,
      head.slice(0, 9),
    )

    expect(calls).toContain(`head_sha=${head} -f branch=topic`)
    expect(calls).toContain(
      `pr merge 42 --squash --match-head-commit ${head}\n`,
    )
    expect(status).toBe(0)
  })

  it('refuses an unknown SHA before querying CI or merging', () => {
    const { status, stdout, calls } = land(
      [],
      undefined,
      undefined,
      undefined,
      undefined,
      'b'.repeat(9),
    )

    expect(stdout).toContain('does not match the head of PR 42')
    expect(calls).not.toContain('actions/workflows/ci.yml/runs')
    expect(calls).not.toContain('pr merge')
    expect(status).toBe(5)
  })

  it('waits out a cancelled run and merges on the newer green one', () => {
    const cancelled = run(1, 'completed', 'cancelled')
    const { status, stdout, calls } = land([
      [cancelled],
      [cancelled, run(2, 'in_progress', null)],
      [cancelled, run(2, 'completed', 'success')],
    ])

    expect(stdout).toContain(`merged ${head}`)
    expect(calls).toContain('pr merge 42 --squash')
    expect(status).toBe(0)
  })

  it('marks a draft ready, waits out its skipped run and merges on green', () => {
    const skipped = run(1, 'completed', 'skipped')
    const { status, stdout, calls } = land([
      [skipped],
      [skipped, run(2, 'in_progress', null)],
      [skipped, run(2, 'completed', 'success')],
    ])

    expect(calls.indexOf('pr ready 42')).toBeGreaterThan(-1)
    expect(calls.indexOf('pr ready 42')).toBeLessThan(
      calls.indexOf('actions/workflows/ci.yml/runs'),
    )
    expect(stdout).toContain(`merged ${head}`)
    expect(status).toBe(0)
  })

  it('exits 0 when GitHub had already merged the reviewed head', () => {
    const { status, stdout } = land(
      [[run(1, 'completed', 'success')]],
      'MERGED',
    )

    expect(stdout).toContain(`merged ${head}`)
    expect(status).toBe(0)
  })

  it('exits 5 when the merge is refused and the PR stays open', () => {
    const { status, stdout } = land([[run(1, 'completed', 'success')]], 'OPEN')

    expect(stdout).not.toContain('merged')
    expect(status).toBe(5)
  })

  it('merges a head behind main without syncing it', () => {
    const { status, stdout, calls } = land([[run(1, 'completed', 'success')]])

    expect(stdout).toContain(`merged ${head}`)
    expect(calls).not.toMatch(/graphql|git (?:rev-list|rebase|merge-tree)/u)
    expect(status).toBe(0)
  })

  it('exits 2 naming the files when the head conflicts with main', () => {
    const { status, stdout, calls } = land(
      [[run(1, 'completed', 'success')]],
      undefined,
      'CONFLICTING',
    )

    expect(stdout).toContain('merge main into the branch')
    expect(stdout).toContain('src/a.ts')
    expect(calls).not.toContain('actions/workflows/ci.yml/runs')
    expect(calls).not.toContain('pr merge')
    expect(status).toBe(2)
  })

  it('settles an UNKNOWN answer with git: a conflict exits 2', () => {
    const { status, stdout } = land(
      [[run(1, 'completed', 'success')]],
      undefined,
      'UNKNOWN',
    )

    expect(stdout).toContain('src/a.ts')
    expect(status).toBe(2)
  })

  it('settles an UNKNOWN answer with git: a clean tree merges', () => {
    const ok = [[run(1, 'completed', 'success')]]
    const { status, stdout } = land(ok, undefined, 'UNKNOWN', undefined, true)

    expect(stdout).toContain(`merged ${head}`)
    expect(status).toBe(0)
  })

  it('exits 5 when GitHub reports a conflict that git does not find', () => {
    const ok = [[run(1, 'completed', 'success')]]
    const { status, stdout, calls } = land(
      ok,
      undefined,
      'CONFLICTING',
      undefined,
      true,
    )

    expect(stdout).toContain('no file conflicts with main')
    expect(calls).not.toContain('pr merge')
    expect(status).toBe(5)
  })

  it('exits 2 when main moves into a conflict while CI runs', () => {
    const { status, stdout, calls } = land(
      [[run(1, 'completed', 'success')]],
      undefined,
      'MERGEABLE',
      'CONFLICTING',
    )

    expect(calls).toContain('actions/workflows/ci.yml/runs')
    expect(stdout).toContain('src/a.ts')
    expect(calls).not.toContain('pr merge')
    expect(status).toBe(2)
  })

  it('rejects a failed workflow even if a newer run from another fork passed', () => {
    const { status, stdout, calls } = land([
      [
        run(1, 'completed', 'failure'),
        {
          ...run(2, 'completed', 'success'),
          head_repository: { full_name: 'other/zero-spoiler' },
        },
      ],
    ])

    expect(calls).toContain(
      `event=pull_request -f head_sha=${head} -f branch=topic`,
    )

    expect(stdout).toContain(`CI on ${head}: failure`)
    expect(calls).not.toContain('pr merge')
    expect(status).toBe(3)
  })
})
