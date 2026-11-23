import { act, renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useLoaded } from './useLoaded'

/** Answers `value` once `ms` have passed. */
async function after(ms: number, value: string): Promise<string> {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
  return value
}

const quick = async (): Promise<string> => after(10, 'quick')
const slow = async (): Promise<string> => after(100, 'slow')
const here = async (): Promise<string> => after(0, 'here')

describe('useLoaded', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('is null until the asking has answered, then the answer', async () => {
    const { result } = renderHook(() => useLoaded(here))

    expect(result.current).toBeNull()

    await waitFor(() => {
      expect(result.current).toBe('here')
    })
  })

  it('drops the answer of an asking that a later one replaced', async () => {
    vi.useFakeTimers()
    const { rerender, result } = renderHook(({ ask }) => useLoaded(ask), {
      initialProps: { ask: slow },
    })
    rerender({ ask: quick })
    await act(async () => {
      await vi.advanceTimersByTimeAsync(200)
    })

    expect(result.current).toBe('quick')
  })
})
