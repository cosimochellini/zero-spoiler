/** A chunk of code fetched apart from the page, and what is known of it. */
export interface Chunk<Module> {
  /** The module: asked for once, and rejected when the fetch fails. */
  get: () => Promise<Module>
  /** Whether the code is already here. */
  hasLanded: () => boolean
  /** Fetches it ahead of its use, and says whether it is here. */
  preload: () => Promise<boolean>
}

/**
 * Fetches the module `load` imports at most once at a time. The request in
 * flight or done is kept, and whether it has landed; a failed one is dropped,
 * so the next attempt asks again rather than failing for good.
 */
export function chunkOf<Module>(load: () => Promise<Module>): Chunk<Module> {
  const requests = new Map<'chunk', Promise<Module>>()
  const landed = new Set<'chunk'>()

  const get = async (): Promise<Module> => {
    const asked = requests.get('chunk')
    if (asked !== undefined) {
      return asked
    }

    const request = load()
    requests.set('chunk', request)
    try {
      const module = await request
      landed.add('chunk')
      return module
    } catch (error) {
      requests.delete('chunk')
      throw error
    }
  }

  return {
    get,
    hasLanded: () => landed.has('chunk'),
    preload: async () => {
      try {
        await get()
        return true
      } catch {
        return false
      }
    },
  }
}
