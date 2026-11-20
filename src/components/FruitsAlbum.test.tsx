import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { readOpenEntries } from '~/lib/progress/openEntries'
import type { FruitBandView } from '~/lib/view/records'
import {
  coveredRecord,
  fruitBand,
  openEntryLinks,
  peekTo,
  platesOf,
  specimen,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { FruitsAlbum } from './FruitsAlbum'
import type { Album, SpecimenBandsProps } from './SpecimenBands'

const GUM = specimen({ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' })

// The start of the story open, the rest covered: what a page drawn at the
// end of the demo sends a reader with no bookmark (#1432).
const OPEN = [
  fruitBand({
    form: 'paramecia',
    open: [GUM],
    covered: [coveredRecord({ kind: 'fruit' })],
    total: 2,
  }),
]

/** The album the browser asks for, with these plates and no groups. */
function albumOf(bands: FruitBandView[]): Album {
  return { bands, factions: [], later: [], sagas: [] }
}

/** The album, with these plates and nothing else set. */
function renderAlbum(
  options: Parameters<typeof renderWithProviders>[1] = {},
): ReturnType<typeof renderWithProviders> {
  return renderWithProviders(
    <FruitsAlbum
      album={albumOf(OPEN)}
      marquee={null}
      onParams={vi.fn<SpecimenBandsProps['onParams']>()}
      params={{}}
      peek={peekTo(GUM)}
      plates={platesOf(OPEN)}
    />,
    options,
  )
}

describe('FruitsAlbum', () => {
  it('shows the album, search and all, with no bookmark', () => {
    renderAlbum()

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByText('Gum-Gum Fruit')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Show anyway/u }),
    ).toBeInTheDocument()
  })

  it('shows the album at a trial point', () => {
    renderAlbum({ bookmark: ep(1), trial: true })

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByText('Gum-Gum Fruit')).toBeInTheDocument()
  })

  it('reports as many open entries as it draws', async () => {
    renderAlbum({ bookmark: ep(650) })
    await settle()

    expect(openEntryLinks('fruits')).toBe(1)
    expect(readOpenEntries()).toBe(openEntryLinks('fruits'))
  })
})
