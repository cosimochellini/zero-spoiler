import { afterEach, describe, expect, it, vi } from 'vitest'

import { expireCookie, writeCookie } from '~/lib/cookies'

import { pushIfSynced } from './synced'

// The sync code's chunk is gone, as after a deploy or offline.
vi.mock(import('./sync'), () => {
  throw new Error('Failed to fetch dynamically imported module')
})

describe('a push whose code cannot load (#1560)', () => {
  afterEach(() => {
    expireCookie('zs_sync')
    expireCookie('zs_sync_pending')
  })

  it('leaves the series on the pending list for the next load', async () => {
    writeCookie('zs_sync', '0f8fad5b-d9cb-469f-a165-70867728950e')
    writeCookie('zs_sync_pending', 'game-of-thrones')

    await pushIfSynced('one-piece')

    expect(document.cookie).toContain(
      'zs_sync_pending=game-of-thrones%2Cone-piece',
    )
  })

  it('marks nothing on a device that is not synced', async () => {
    await pushIfSynced('one-piece')

    expect(document.cookie).not.toContain('zs_sync_pending')
  })
})
