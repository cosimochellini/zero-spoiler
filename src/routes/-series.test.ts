import { describe, expect, it, vi } from 'vitest'

import { ONE_PIECE_SERIES } from '~/lib/progress/series'
import { loadSeriesDescription } from '~/server/series'

import { keepSeriesDescription, seriesDescription } from './-series'

// The lookup is a server function, and there is no server here.
vi.mock(import('~/server/series'), async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    loadSeriesDescription: vi.fn<typeof original.loadSeriesDescription>(),
  }
})

describe('seriesDescription', () => {
  // The first switch of language would otherwise wait on this lookup before
  // it could ask for the series' copy (#1386).
  it('answers from the description the page arrived with, without the server', async () => {
    keepSeriesDescription(ONE_PIECE_SERIES)

    await expect(seriesDescription('one-piece')).resolves.toBe(ONE_PIECE_SERIES)
    expect(loadSeriesDescription).not.toHaveBeenCalled()
  })

  it('asks the server for a series no page has brought', async () => {
    vi.mocked(loadSeriesDescription).mockResolvedValue(null)

    await expect(seriesDescription('nowhere')).resolves.toBeNull()
    expect(loadSeriesDescription).toHaveBeenCalledWith({ data: 'nowhere' })
  })
})
