import { describe, expect, it, vi } from 'vitest'

import { chunkOf } from './chunkOf'

describe('chunkOf', () => {
  it('asks once however many ask, and says when the code has landed', async () => {
    const load = vi.fn<() => Promise<{ code: string }>>(async () => {
      await Promise.resolve()
      return { code: 'here' }
    })
    const chunk = chunkOf(load)

    expect(chunk.hasLanded()).toBe(false)

    const [first, second] = await Promise.all([chunk.get(), chunk.get()])

    expect(first).toBe(second)
    await expect(chunk.preload()).resolves.toBe(true)
    expect(load).toHaveBeenCalledTimes(1)
    expect(chunk.hasLanded()).toBe(true)
  })

  it('drops a failed request, so the next attempt asks again', async () => {
    const load = vi
      .fn<() => Promise<string>>()
      .mockRejectedValueOnce(new Error('offline'))
      .mockResolvedValue('here')
    const chunk = chunkOf(load)

    await expect(chunk.get()).rejects.toThrow('offline')
    expect(chunk.hasLanded()).toBe(false)

    await expect(chunk.preload()).resolves.toBe(true)
    expect(load).toHaveBeenCalledTimes(2)
  })

  it('says a preload failed rather than throwing', async () => {
    const chunk = chunkOf(async () => {
      await Promise.resolve()
      throw new Error('offline')
    })

    await expect(chunk.preload()).resolves.toBe(false)
    expect(chunk.hasLanded()).toBe(false)
  })
})
