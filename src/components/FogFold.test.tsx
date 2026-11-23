import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

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

import {
  type Album,
  SpecimenBands,
  type SpecimenBandsProps,
} from './SpecimenBands'

const GUM = specimen({ id: 'gum-gum-fruit', name: 'Gum-Gum Fruit' })

/** `count` covered fruits. */
function fog(count: number): CoveredRecord[] {
  return Array.from({ length: count }, () => coveredRecord({ kind: 'fruit' }))
}

/**
 * The album at episode 20: Paramecia with Gum-Gum open and these covered,
 * Zoan with two covered. The saga view groups as `sagas` says.
 */
function openAlbum(
  paramecia: CoveredRecord[],
  {
    later = [],
    params = {},
    sagas = [{ saga: 'East Blue Saga', open: [{ id: GUM.id }], covered: [] }],
  }: { later?: string[]; params?: FruitParams; sagas?: Album['sagas'] } = {},
): () => void {
  const bands = [
    fruitBand({ form: 'paramecia', open: [GUM], covered: paramecia }),
    fruitBand({ form: 'zoan', open: [], covered: fog(2) }),
    fruitBand({ form: 'logia', open: [], covered: [] }),
  ]

  return renderWithProviders(
    <SpecimenBands
      album={{ bands, factions: [], later, sagas }}
      onParams={vi.fn<SpecimenBandsProps['onParams']>()}
      params={params}
      peek={peekPending()}
      plates={platesOf(bands)}
    />,
    { bookmark: ep(20) },
  ).unmount
}

/** A region, found by its heading. */
function region(name: string): HTMLElement {
  return screen.getByRole('region', { name })
}

/**
 * jsdom lays nothing out, so no tile has a box. Gives one to the open tiles
 * and the first two covered ones, as a phone's first row would.
 */
function drawFirstRow(list: HTMLElement): void {
  const tiles = within(list).getAllByRole('listitem')
  const open = tiles.filter(
    (tile) => within(tile).queryByRole('link') !== null,
  ).length
  const drawn = tiles.slice(0, open + 2)
  for (const tile of drawn) {
    Object.defineProperty(tile, 'offsetParent', { value: document.body })
  }
}

describe('FogFold', () => {
  beforeEach(() => {
    // Each test is a fresh visit: a history entry with nothing unfolded.
    history.replaceState(null, '')
  })

  it('folds a wall of fog to its first row, saying how many are left for two and for three across', () => {
    openAlbum(fog(5))

    const paramecia = region('5 under fog')
    const expand = within(paramecia).getByRole('button', { name: 'Expand' })
    const list = within(paramecia).getByRole('list')

    // Every tile stays on the page: the fold is CSS, and below 40rem only.
    expect(within(list).getAllByRole('listitem')).toHaveLength(5)
    expect(expand).toHaveAttribute('aria-controls', list.id)
    expect(expand).toHaveAccessibleDescription(
      /^And 3 more under fog\s*And 2 more under fog$/u,
    )
    // It goes once pressed, so it claims no state it would never leave.
    expect(expand).not.toHaveAttribute('aria-expanded')
  })

  it('leaves a band alone when its first row holds it all', () => {
    openAlbum(fog(5))

    expect(
      within(region('2 under fog')).queryByRole('button', { name: 'Expand' }),
    ).not.toBeInTheDocument()
  })

  it('says one more in the singular', () => {
    openAlbum(fog(3))

    expect(screen.getByText('And 1 more under fog')).toBeInTheDocument()
  })

  it('unfolds the wall and hands focus to the first tile it hid', async () => {
    openAlbum(fog(5))

    const paramecia = region('5 under fog')
    drawFirstRow(within(paramecia).getByRole('list'))
    const third = within(paramecia).getAllByRole('listitem')[2]
    const folded = third?.className

    await userEvent.click(
      within(paramecia).getByRole('button', { name: 'Expand' }),
    )

    expect(
      within(paramecia).queryByRole('button', { name: 'Expand' }),
    ).not.toBeInTheDocument()
    expect(third?.className).not.toBe(folded)
    expect(
      within(paramecia).getByRole('button', { name: /^Fruit 04 · Paramecia/u }),
    ).toHaveFocus()
  })

  it('stays unfolded on Back to the same history entry, and starts folded on a new one', async () => {
    const leave = openAlbum(fog(5))
    await userEvent.click(
      within(region('5 under fog')).getByRole('button', { name: 'Expand' }),
    )
    leave()

    // Back: the same entry, so the page is as tall as it was left.
    const leaveAgain = openAlbum(fog(5))

    expect(
      within(region('5 under fog')).queryByRole('button', { name: 'Expand' }),
    ).not.toBeInTheDocument()

    leaveAgain()
    history.pushState(null, '')
    openAlbum(fog(5))

    expect(
      within(region('5 under fog')).getByRole('button', { name: 'Expand' }),
    ).toBeInTheDocument()
  })

  it('folds the later sagas’ band of the saga view', () => {
    const later = fog(6)
    openAlbum(later, {
      later: later.map(({ handle }) => handle),
      params: { view: 'saga' },
    })

    expect(
      within(region('6 fruits from later sagas, under fog')).getByRole(
        'button',
        { name: 'Expand' },
      ),
    ).toBeInTheDocument()
  })

  it('folds a reached saga’s fog tiles after its open ones', async () => {
    const covered = fog(5)
    openAlbum(covered, {
      params: { view: 'saga' },
      sagas: [
        {
          saga: 'East Blue Saga',
          open: [{ id: GUM.id }],
          covered: covered.map(({ handle }) => handle),
        },
      ],
    })

    const east = region('East Blue Saga')
    const list = within(east).getByRole('list')

    // The group's count, 6 fruits, already says how many are under fog.
    expect(within(east).getByText('6 fruits')).toBeInTheDocument()
    expect(within(list).getAllByRole('listitem')).toHaveLength(6)
    expect(within(east).getByText('And 3 more under fog')).toBeInTheDocument()

    drawFirstRow(list)
    await userEvent.click(within(east).getByRole('button', { name: 'Expand' }))

    expect(
      within(east).getByRole('button', { name: /^Fruit 04 · Paramecia/u }),
    ).toHaveFocus()
  })
})
