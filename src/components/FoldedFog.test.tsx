import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  type RouterHistory,
  RouterProvider,
} from '@tanstack/react-router'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { KEPT } from '~/components/foldMemory'
import { LocaleProvider } from '~/i18n/LocaleProvider'
import { BookmarkProvider } from '~/lib/progress/BookmarkProvider'
import { ONE_PIECE_BOOKMARK, ONE_PIECE_SERIES } from '~/lib/progress/series'
import type { FruitParams } from '~/lib/search/fruitParams'
import type { CoveredRecord } from '~/lib/view/records'
import { copyOf } from '~/server/copy.server'
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

interface OpenAlbumOptions {
  later?: string[]
  params?: FruitParams
  sagas?: Album['sagas']
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
  }: OpenAlbumOptions = {},
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

describe('FoldedFog', () => {
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

/** One album the router pages below all draw, so its handles stay put. */
const ROUTED = [
  fruitBand({ form: 'paramecia', open: [GUM], covered: fog(5) }),
  fruitBand({ form: 'zoan', open: [], covered: [] }),
  fruitBand({ form: 'logia', open: [], covered: [] }),
]

interface OnRouterResult {
  go: (move: (history: RouterHistory) => void) => Promise<void>
  history: RouterHistory
  loads: () => number
  navigations: () => number
}

/**
 * The album on a real route, `/fruits`, beside another page, `/away`. Hands
 * back the history, a way to move it and wait for the router to settle, and
 * counts of the album route's loads and of the router's navigations.
 */
async function onRouter(start: string): Promise<OnRouterResult> {
  let loads = 0
  let navigations = 0
  let resolved = 0
  const root = createRootRoute({
    component: () => (
      <LocaleProvider
        copy={copyOf(ONE_PIECE_SERIES, 'en')}
        locale="en"
      >
        <BookmarkProvider
          initialBookmark={ep(20)}
          series={ONE_PIECE_BOOKMARK}
        >
          <Outlet />
        </BookmarkProvider>
      </LocaleProvider>
    ),
  })
  const fruits = createRoute({
    getParentRoute: () => root,
    path: '/fruits',
    loader: () => {
      loads += 1
    },
    component: () => (
      <SpecimenBands
        album={{ bands: ROUTED, factions: [], later: [], sagas: [] }}
        onParams={vi.fn<SpecimenBandsProps['onParams']>()}
        params={{}}
        peek={peekPending()}
        plates={platesOf(ROUTED)}
      />
    ),
  })
  const away = createRoute({ getParentRoute: () => root, path: '/away' })
  const history = createMemoryHistory({ initialEntries: [start] })
  const router = createRouter({
    routeTree: root.addChildren([fruits, away]),
    history,
  })
  router.subscribe('onBeforeNavigate', () => {
    navigations += 1
  })
  router.subscribe('onResolved', () => {
    resolved += 1
  })
  await router.load()
  render(<RouterProvider router={router} />)
  await screen.findByRole('region', { name: '5 under fog' })

  return {
    go: async (move) => {
      const from = resolved
      act(() => {
        move(history)
      })
      await waitFor(() => {
        expect(resolved).toBeGreaterThan(from)
      })
    },
    history,
    loads: () => loads,
    navigations: () => navigations,
  }
}

/** The Paramecia band's Expand, if it is on the page. */
function expandButton(): HTMLElement | null {
  return within(region('5 under fog')).queryByRole('button', { name: 'Expand' })
}

describe('FoldedFog under the router', () => {
  it('stays open through a replacing navigation and on Back, and starts folded on a new visit', async () => {
    const { go } = await onRouter('/fruits')
    await userEvent.click(
      within(region('5 under fog')).getByRole('button', { name: 'Expand' }),
    )

    // Typing in the search replaces the entry, with a new key.
    await go((history) => {
      history.replace('/fruits?q=o')
    })

    expect(expandButton()).not.toBeInTheDocument()

    await go((history) => {
      history.push('/away')
    })
    await go((history) => {
      history.back()
    })

    // Back: the entry it was open in, so the page is as tall as it was left.
    expect(expandButton()).not.toBeInTheDocument()

    // A new visit from another page: a new entry.
    await go((history) => {
      history.push('/away')
    })
    await go((history) => {
      history.push('/fruits')
    })

    expect(expandButton()).toBeInTheDocument()
  })

  it('unfolds on an address with a hash without a navigation, a load or a history write', async () => {
    const { history, loads, navigations } = await onRouter('/fruits#saga-1')
    const before = { loads: loads(), navigations: navigations() }
    // The page's own history, which the router in the browser watches.
    const pushed = vi.spyOn(globalThis.history, 'pushState')
    const replaced = vi.spyOn(globalThis.history, 'replaceState')

    await userEvent.click(
      within(region('5 under fog')).getByRole('button', { name: 'Expand' }),
    )

    expect(expandButton()).not.toBeInTheDocument()
    expect({ loads: loads(), navigations: navigations() }).toStrictEqual(before)
    expect(history.location.hash).toBe('#saga-1')
    expect(pushed).not.toHaveBeenCalled()
    expect(replaced).not.toHaveBeenCalled()

    pushed.mockRestore()
    replaced.mockRestore()
  })

  it('keeps a note per entry, however many keystrokes replace one, and drops the oldest past the cap', async () => {
    const { go } = await onRouter('/fruits')

    // Left folded at the first entry; opened at the second.
    await go((history) => {
      history.push('/fruits?form=paramecia')
    })
    await userEvent.click(
      within(region('5 under fog')).getByRole('button', { name: 'Expand' }),
    )
    // Each keystroke replaces the second entry with a new key.
    for (let typed = 1; typed <= KEPT + 10; typed += 1) {
      await go((history) => {
        history.replace(`/fruits?form=paramecia&q=${'o'.repeat(typed)}`)
      })
    }
    await go((history) => {
      history.back()
    })

    // The first entry's note is still there: folded, as it was left.
    expect(expandButton()).toBeInTheDocument()

    // Now push past the cap from the second entry on.
    await go((history) => {
      history.forward()
    })
    for (let pushed = 1; pushed <= KEPT; pushed += 1) {
      await go((history) => {
        history.push(`/fruits?n=${String(pushed)}`)
      })
    }
    await go((history) => {
      history.go(-(KEPT + 1))
    })

    // The oldest note is gone, so the entry is taken as new: the fold
    // stays as it is, open.
    expect(expandButton()).not.toBeInTheDocument()
    // A hundred-odd router navigations, each awaited.
  }, 30_000)

  it('is as the reader left it on Back and Forward within the page', async () => {
    const { go } = await onRouter('/fruits')

    // A pick pushes an entry on the same page, the fold still mounted.
    await go((history) => {
      history.push('/fruits?form=paramecia')
    })
    await userEvent.click(
      within(region('5 under fog')).getByRole('button', { name: 'Expand' }),
    )

    // Back to the entry it was left folded in.
    await go((history) => {
      history.back()
    })

    expect(expandButton()).toBeInTheDocument()

    // Forward to the entry it was opened in.
    await go((history) => {
      history.forward()
    })

    expect(expandButton()).not.toBeInTheDocument()
  })
})
