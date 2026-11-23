import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import type { FruitParams } from '~/lib/search/fruitParams'
import type { CoveredRecord } from '~/lib/view/records'
import {
  coveredRecord,
  fruitBand,
  peekPending,
  platesOf,
  specimen,
} from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { SpecimenBands, type SpecimenBandsProps } from './SpecimenBands'

const GUM = specimen({ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' })

/** `count` covered fruits. */
function fog(count: number): CoveredRecord[] {
  return Array.from({ length: count }, () => coveredRecord({ kind: 'fruit' }))
}

/** The album at episode 20: Paramecia with these covered, Zoan with two. */
function renderAlbum(
  paramecia: CoveredRecord[],
  params: FruitParams = {},
  later: string[] = [],
): void {
  const bands = [
    fruitBand({ form: 'paramecia', open: [GUM], covered: paramecia }),
    fruitBand({ form: 'zoan', open: [], covered: fog(2) }),
    fruitBand({ form: 'logia', open: [], covered: [] }),
  ]
  renderWithProviders(
    <SpecimenBands
      album={{
        bands,
        factions: [],
        later,
        sagas: [
          { saga: 'East Blue Saga', open: [{ id: GUM.id }], covered: [] },
        ],
      }}
      onParams={vi.fn<SpecimenBandsProps['onParams']>()}
      params={params}
      peek={peekPending()}
      plates={platesOf(bands)}
    />,
    { bookmark: ep(20) },
  )
}

/** A plate's fog band, found by its heading. */
function band(name: string): HTMLElement {
  return screen.getByRole('region', { name })
}

describe('FogFold', () => {
  it('folds a wall of fog to its first row, saying how many are left for two and for three across', () => {
    renderAlbum(fog(5))

    const paramecia = band('5 under fog')

    // Every tile stays on the page: the fold is CSS, and below 40rem only.
    expect(within(paramecia).getAllByRole('listitem')).toHaveLength(5)
    expect(within(paramecia).getByText('And 3 more under fog')).toBeVisible()
    expect(within(paramecia).getByText('And 2 more under fog')).toBeVisible()
    expect(
      within(paramecia).getByRole('button', { name: 'Expand' }),
    ).toHaveAttribute('aria-expanded', 'false')
  })

  it('leaves a band alone when its first row holds it all', () => {
    renderAlbum(fog(5))

    expect(
      within(band('2 under fog')).queryByRole('button', { name: 'Expand' }),
    ).not.toBeInTheDocument()
  })

  it('says one more in the singular', () => {
    renderAlbum(fog(3))

    expect(screen.getByText('And 1 more under fog')).toBeInTheDocument()
  })

  it('unfolds the wall and hands focus to the first tile it hid', async () => {
    renderAlbum(fog(5))

    const paramecia = band('5 under fog')
    const tiles = within(paramecia).getAllByRole('listitem')
    // jsdom lays nothing out: the first row is the two tiles still drawn.
    for (const [at, tile] of tiles.entries()) {
      tile.checkVisibility = () => at < 2
    }
    const before = tiles[2]?.className

    await userEvent.click(
      within(paramecia).getByRole('button', { name: 'Expand' }),
    )

    expect(
      within(paramecia).queryByRole('button', { name: 'Expand' }),
    ).not.toBeInTheDocument()
    expect(tiles[2]?.className).not.toBe(before)
    expect(
      within(paramecia).getByRole('button', { name: /^Fruit 04 · Paramecia/u }),
    ).toHaveFocus()
  })

  it('folds the later sagas’ band of the saga view', () => {
    const later = fog(6)
    renderAlbum(
      later,
      { view: 'saga' },
      later.map(({ handle }) => handle),
    )

    expect(
      within(band('6 fruits from later sagas, under fog')).getByRole('button', {
        name: 'Expand',
      }),
    ).toBeInTheDocument()
  })
})
