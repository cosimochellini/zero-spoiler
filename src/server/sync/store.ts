import type { SyncRecord } from '~/lib/progress/sync'

/**
 * Where synced records live (#1560). Every piece of sync code talks to this
 * and never to a vendor: moving off Workers KV means one new implementation
 * and a changed binding. Validation and the per-series merge live above it,
 * in `record.ts`, so every backend gets them.
 */
export interface SyncStore {
  get: (id: string) => Promise<null | SyncRecord>
  set: (id: string, record: SyncRecord) => Promise<void>
}

/** A store in a `Map`, for the tests. */
export function memorySyncStore(): SyncStore {
  const records = new Map<string, SyncRecord>()
  return {
    get: async (id) => Promise.resolve(records.get(id) ?? null),
    set: async (id, record) => {
      records.set(id, { ...record })
      return Promise.resolve()
    },
  }
}
