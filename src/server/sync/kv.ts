import { COOKIE_MAX_AGE_SECONDS } from '~/lib/cookies'
import { asSyncRecord } from '~/lib/progress/sync'

import type { SyncStore } from './store'

/**
 * The part of a Workers KV namespace the store uses. Written here rather
 * than taken from `@cloudflare/workers-types`, so this stays the only file
 * that knows the store is KV.
 */
interface KVNamespace {
  get: (key: string, type: 'json') => Promise<unknown>
  put: (
    key: string,
    value: string,
    options: { expirationTtl: number },
  ) => Promise<void>
}

/**
 * Records in Workers KV, one key per reader. Every write restarts a year's
 * expiry, the bookmark cookie's own age, so a record nobody writes for a year
 * is gone.
 */
function kvSyncStore(namespace: KVNamespace): SyncStore {
  return {
    get: async (id) => asSyncRecord(await namespace.get(`sync:${id}`, 'json')),
    set: async (id, record) =>
      namespace.put(`sync:${id}`, JSON.stringify(record), {
        expirationTtl: COOKIE_MAX_AGE_SECONDS,
      }),
  }
}

/** The store bound as `SYNC` in `wrangler.jsonc`, or `null` without one. */
export function syncStoreFromEnv(env: unknown): null | SyncStore {
  const namespace: unknown =
    typeof env === 'object' && env !== null ? Reflect.get(env, 'SYNC') : null
  return isNamespace(namespace) ? kvSyncStore(namespace) : null
}

function isNamespace(value: unknown): value is KVNamespace {
  return (
    typeof value === 'object'
    && value !== null
    && typeof Reflect.get(value, 'get') === 'function'
    && typeof Reflect.get(value, 'put') === 'function'
  )
}
