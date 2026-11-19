// @vitest-environment node
import process from 'node:process'
import { describe, expect, it } from 'vitest'

import { pushedBranches, refusals } from './push-guard.mjs'

const sha = 'a'.repeat(40)
const zero = '0'.repeat(40)

describe('the pre-push guard', () => {
  it('reads the remote branches from what git passes on stdin', () => {
    expect(
      pushedBranches(
        [
          `refs/heads/feat/1 ${sha} refs/heads/feat/1 ${zero}`,
          `refs/heads/local ${sha} refs/heads/fix/2 ${sha}`,
          '',
        ].join('\n'),
      ),
    ).toStrictEqual(['feat/1', 'fix/2'])
  })

  it('leaves out main, deletions and an empty push', () => {
    expect(
      pushedBranches(
        [
          `refs/heads/main ${sha} refs/heads/main ${sha}`,
          `(delete) ${zero} refs/heads/old ${sha}`,
        ].join('\n'),
      ),
    ).toStrictEqual([])
    expect(pushedBranches('')).toStrictEqual([])
  })

  it('refuses a branch whose newest PR has merged, naming the PR', () => {
    expect(
      refusals(['feat/1'], () => ({ number: 1304, state: 'MERGED' })),
    ).toStrictEqual([
      'feat/1: PR #1304 has merged, and this push would recreate the branch. Open a new branch from origin/main for a follow-up.',
    ])
  })

  it('lets through an open PR, no PR, and a gh that cannot answer', () => {
    expect(
      refusals(['open', 'none'], (branch) =>
        branch === 'open' ? { number: 7, state: 'OPEN' } : undefined,
      ),
    ).toStrictEqual([])
  })

  it('lets the push through when gh is not on the PATH', () => {
    const path = process.env.PATH
    process.env.PATH = ''
    try {
      expect(refusals(['feat/1'])).toStrictEqual([])
    } finally {
      process.env.PATH = path
    }
  })
})
