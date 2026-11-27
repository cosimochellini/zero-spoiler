// @vitest-environment node
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it, type Mock, vi } from 'vitest'

import { COOKIE_MAX_AGE_SECONDS } from '~/lib/cookies'

import { syncStoreFromEnv } from './kv'

const ID = '0f8fad5b-d9cb-469f-a165-70867728950e'

/** A mocked KV namespace: the two calls the store makes. */
interface MockNamespace {
  get: Mock<(key: string, type: 'json') => Promise<unknown>>
  put: Mock<(key: string, value: string, options: object) => Promise<undefined>>
}

/** A KV namespace that holds `stored` under every key. */
function namespace(stored: unknown): MockNamespace {
  return {
    get: vi
      .fn<(key: string, type: 'json') => Promise<unknown>>()
      .mockResolvedValue(stored),
    put: vi
      .fn<(key: string, value: string, options: object) => Promise<undefined>>()
      .mockResolvedValue(undefined),
  }
}

describe('the KV store', () => {
  it('keeps one key per reader, for a year after its last write', async () => {
    const kv = namespace(null)
    const store = syncStoreFromEnv({ SYNC: kv })

    await store?.set(ID, { 'one-piece': '1120' })

    expect(kv.put).toHaveBeenCalledWith(`sync:${ID}`, '{"one-piece":"1120"}', {
      expirationTtl: COOKIE_MAX_AGE_SECONDS,
    })
  })

  it('reads a record, keeping only its string values', async () => {
    const kv = namespace({ 'one-piece': '1120', 'x': 3 })

    const record = await syncStoreFromEnv({ SYNC: kv })?.get(ID)

    expect(kv.get).toHaveBeenCalledWith(`sync:${ID}`, 'json')
    expect(record).toStrictEqual({ 'one-piece': '1120' })
  })

  it.each([undefined, null, {}, { SYNC: 'kv' }])(
    'is absent without a binding (%j)',
    (env) => {
      expect(syncStoreFromEnv(env)).toBeNull()
    },
  )

  it('is the only module that knows the store is KV', () => {
    const source = path.resolve(import.meta.dirname, '../..')
    const naming = readdirSync(source, { recursive: true, encoding: 'utf8' })
      .filter((file) => /\.tsx?$/u.test(file) && !/\.test\.tsx?$/u.test(file))
      .filter((file) =>
        /KVNamespace|expirationTtl/u.test(
          // eslint-disable-next-line security/detect-non-literal-fs-filename -- a file listed in src above.
          readFileSync(path.join(source, file), 'utf8'),
        ),
      )

    expect(naming).toStrictEqual([path.join('server', 'sync', 'kv.ts')])
  })
})
