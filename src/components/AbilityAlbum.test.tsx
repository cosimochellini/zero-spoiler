import { RouterProvider } from '@tanstack/react-router'
import { act, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { type ReactElement, useState } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString as serverMarkup } from 'react-dom/server'
import { describe, expect, it, onTestFinished, vi } from 'vitest'

import type { Locale } from '~/i18n/locales'
import { readOpenEntries } from '~/lib/progress/openEntries'
import { HUNTER_X_HUNTER_SERIES } from '~/lib/progress/series'
import type { AbilityParams } from '~/lib/search/abilityParams'
import type { AbilitySheetView } from '~/lib/view/abilities'
import {
  ability,
  coveredRecord,
  openEntryLinks,
  peekPending,
  untypedAbility,
} from '~/test/fixtures'
import { renderUnderSeries, seriesRouter } from '~/test/providers'

import { AbilityAlbum } from './AbilityAlbum'

const ROCK = ability()
const GLOW = untypedAbility({
  id: 'glow',
  name: 'Glow',
  folded: 'glow',
  users: [
    { id: 'first-user', name: 'First User', visual: ROCK.visual },
    { id: 'second-user', name: 'Second User', visual: ROCK.visual },
  ],
  aliases: ['first user', 'second user'],
})

/** Two plates and two covered abilities, as a reader mid-story meets them. */
const SHEET: AbilitySheetView = {
  bands: [
    { nen: 'enhancer', open: [ROCK] },
    { nen: null, open: [GLOW] },
  ],
  covered: [
    coveredRecord({ handle: 'hxh-9', kind: 'ability' }),
    coveredRecord({ handle: 'hxh-10', kind: 'ability' }),
  ],
  filed: 4,
}

/** The album under Hunter x Hunter, with the picks it is given. */
async function renderAlbum(
  params: AbilityParams = {},
  locale: Locale = 'en',
): Promise<{
  onParams: ReturnType<
    typeof vi.fn<(next: AbilityParams, replace: boolean) => void>
  >
}> {
  const onParams = vi.fn<(next: AbilityParams, replace: boolean) => void>()
  await renderUnderSeries(
    <AbilityAlbum
      onParams={onParams}
      params={params}
      peek={peekPending()}
      sheet={SHEET}
    />,
    {
      locale,
      path: `/hunter-x-hunter/${locale}/abilities`,
      series: HUNTER_X_HUNTER_SERIES,
    },
  )

  return { onParams }
}

/** The album with its picks held in state, as the route holds them. */
function Held({ sheet }: { sheet: AbilitySheetView }): ReactElement {
  const [params, setParams] = useState<AbilityParams>({})

  return (
    <AbilityAlbum
      onParams={setParams}
      params={params}
      peek={peekPending()}
      sheet={sheet}
    />
  )
}

async function renderHeld(sheet: AbilitySheetView = SHEET): Promise<void> {
  await renderUnderSeries(<Held sheet={sheet} />, {
    path: '/hunter-x-hunter/en/abilities',
    series: HUNTER_X_HUNTER_SERIES,
  })
}

/** The headings of the plates and the fog band, in order. */
function headings(): (null | string)[] {
  return screen
    .getAllByRole('heading', { level: 2 })
    .map((heading) => heading.textContent)
}

describe('AbilityAlbum', () => {
  it('sets a plate per Nen type, the untyped plate, then one fog band', async () => {
    await renderAlbum()

    expect(headings()).toStrictEqual([
      'Enhancer',
      'Type not told',
      '2 under fog',
    ])
    expect(
      screen.getByText(
        'Abilities the story shows before it tells their Nen type.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Rock Fist/u })).toHaveAttribute(
      'href',
      '/hunter-x-hunter/en/abilities/test-ability',
    )
  })

  it('says only a number and a threshold under the fog, never a type', async () => {
    await renderAlbum()
    const fog = screen.getByRole('region', { name: '2 under fog' })

    expect(within(fog).getByText('Ability 01')).toBeInTheDocument()
    expect(within(fog).getByText('Ability 02')).toBeInTheDocument()
    expect(fog).not.toHaveTextContent('Enhancer')
    expect(within(fog).queryAllByRole('link')).toStrictEqual([])
  })

  it('finds an ability by a user, and shows that user', async () => {
    await renderAlbum({ q: 'second' })

    expect(
      screen.queryByRole('link', { name: /Rock Fist/u }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Second User/u })).toHaveAttribute(
      'href',
      '/hunter-x-hunter/en/characters/second-user',
    )
  })

  it('keeps one plate for a picked type, and every plate for one not reached', async () => {
    await renderAlbum({ type: 'none' })

    expect(headings()).toStrictEqual(['Type not told', '2 under fog'])
  })

  it('shows every plate for a type no open ability has', async () => {
    await renderAlbum({ type: 'conjurer' })

    expect(headings()).toStrictEqual([
      'Enhancer',
      'Type not told',
      '2 under fog',
    ])
  })

  it('moves the address when a chip is picked', async () => {
    const { onParams } = await renderAlbum({ q: 'rock' })

    await userEvent.click(screen.getByRole('radio', { name: /Enhancer/u }))

    expect(onParams).toHaveBeenCalledWith(
      { q: 'rock', type: 'enhancer' },
      false,
    )
  })

  it('leaves every plate in the address for "all"', async () => {
    const { onParams } = await renderAlbum({ type: 'enhancer' })

    await userEvent.click(screen.getByRole('radio', { name: /All/u }))

    expect(onParams).toHaveBeenCalledWith({}, false)
  })

  it('speaks Italian on an Italian page', async () => {
    await renderAlbum({}, 'it')

    expect(headings()).toStrictEqual([
      'Potenziamento',
      'Tipo non rivelato',
      '2 nella nebbia',
    ])
  })

  it('reports as many open entries as it draws', async () => {
    await renderAlbum()

    expect(openEntryLinks('abilities')).toBe(2)
    expect(readOpenEntries()).toBe(openEntryLinks('abilities'))
  })
})

/** The album with nothing open and `count` abilities under fog. */
function fogAlbum(count: number): ReactElement {
  const covered = Array.from({ length: count }, (_, at) =>
    coveredRecord({ handle: `hxh-${String(at)}`, kind: 'ability' }),
  )

  return (
    <AbilityAlbum
      onParams={vi.fn<(next: AbilityParams, replace: boolean) => void>()}
      params={{}}
      peek={peekPending()}
      sheet={{ bands: [], covered, filed: count }}
    />
  )
}

/** The album with nothing open and `count` abilities under fog. */
async function renderFog(count: number, locale: Locale = 'en'): Promise<void> {
  await renderUnderSeries(fogAlbum(count), {
    locale,
    path: `/hunter-x-hunter/${locale}/abilities`,
    series: HUNTER_X_HUNTER_SERIES,
  })
}

describe('AbilityAlbum on a phone', () => {
  it('folds the fog band to its first row, saying how many are left for two and for three across', async () => {
    await renderFog(28)

    const band = screen.getByRole('region', { name: '28 under fog' })
    const list = within(band).getByRole('list')
    const expand = within(band).getByRole('button', { name: 'Expand' })

    // Every tile stays on the page: the fold is CSS, and below 40rem only.
    expect(within(list).getAllByRole('listitem')).toHaveLength(28)
    expect(expand).toHaveAttribute('aria-controls', list.id)
    expect(expand).toHaveAccessibleDescription(
      /^And 26 more under fog\s*And 25 more under fog$/u,
    )
  })

  it('says one more in the feminine in Italian', async () => {
    await renderFog(3, 'it')

    expect(screen.getByText('E un’altra nella nebbia')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Espandi' })).toBeInTheDocument()
  })

  it('says "E altre" for many in Italian', async () => {
    await renderFog(5, 'it')

    expect(screen.getByText('E altre 3 nella nebbia')).toBeInTheDocument()
  })

  it('leaves a band alone when its first row holds it all', async () => {
    await renderFog(2)

    expect(
      screen.queryByRole('button', { name: 'Expand' }),
    ).not.toBeInTheDocument()
  })

  it('unfolds the band when Expand is pressed', async () => {
    const user = userEvent.setup()
    await renderFog(5)

    const tiles = within(screen.getByRole('list')).getAllByRole('listitem')

    // Folded, a tile past the first row hides itself by its rank.
    expect(tiles[2]?.className).not.toBe(tiles[1]?.className)

    await user.click(screen.getByRole('button', { name: 'Expand' }))

    expect(tiles[2]?.className).toBe(tiles[1]?.className)
    expect(
      screen.queryByRole('button', { name: 'Expand' }),
    ).not.toBeInTheDocument()
    expect(screen.queryByText(/more under fog/u)).not.toBeInTheDocument()
  })
})

describe('AbilityAlbum from the server', () => {
  const AT = {
    path: '/hunter-x-hunter/en/abilities',
    series: HUNTER_X_HUNTER_SERIES,
  }

  it('draws the band folded and hydrates it as drawn', async () => {
    // The server's page: the band comes folded, as a fresh visit finds it.
    const markup = serverMarkup(
      <RouterProvider router={await seriesRouter(fogAlbum(5), AT)} />,
    )
    const container = document.createElement('div')
    const parser = new DOMParser()
    // Opened with <body>, so React's leading markers stay in the body.
    const parsed = parser.parseFromString(`<body>${markup}`, 'text/html')
    container.append(...parsed.body.childNodes)
    document.body.append(container)
    onTestFinished(() => {
      container.remove()
    })

    const tiles = within(container).getAllByRole('listitem')

    expect(
      within(container).getByRole('button', { name: 'Expand' }),
    ).toBeInTheDocument()
    expect(tiles[2]?.className).not.toBe(tiles[1]?.className)

    // Hydrated with the fold memory as a page load leaves it (empty), the
    // browser draws the same: no mismatch, so nothing is drawn again.
    const errors = vi.spyOn(console, 'error').mockImplementation(() => {
      // Silenced: the test reads it.
    })
    onTestFinished(() => {
      errors.mockRestore()
    })
    const recovered = vi.fn<(error: unknown) => void>()
    const router = await seriesRouter(fogAlbum(5), AT)
    await act(async () => {
      hydrateRoot(container, <RouterProvider router={router} />, {
        onRecoverableError: recovered,
      })
      await Promise.resolve()
    })

    expect(recovered).not.toHaveBeenCalled()
    expect(errors).not.toHaveBeenCalled()
    expect(
      within(container).getByRole('button', { name: 'Expand' }),
    ).toBeInTheDocument()
  })
})

describe('AbilityAlbum with nothing open', () => {
  const NONE_OPEN: AbilitySheetView = { ...SHEET, bands: [] }

  it('leaves out the search and the chips, and leads with the fog band', async () => {
    await renderHeld(NONE_OPEN)

    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()
    expect(screen.queryByText(/Showing 0/u)).not.toBeInTheDocument()
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('2 under fog')
  })

  it('still reports that no entry is open', async () => {
    await renderHeld(NONE_OPEN)

    expect(readOpenEntries()).toBe(0)
  })

  it('folds nothing for a query left in the address', async () => {
    await renderUnderSeries(
      <AbilityAlbum
        onParams={vi.fn<(next: AbilityParams, replace: boolean) => void>()}
        params={{ q: 'rock' }}
        peek={peekPending()}
        sheet={NONE_OPEN}
      />,
      { path: '/hunter-x-hunter/en/abilities', series: HUNTER_X_HUNTER_SERIES },
    )

    expect(screen.getByRole('region', { name: '2 under fog' })).toBeVisible()
    expect(screen.queryByText('Clear search')).not.toBeInTheDocument()
  })
})

describe('AbilityAlbum with a query that matches nothing', () => {
  it('folds the plates and the fog band behind one line and a way back', async () => {
    const user = userEvent.setup()
    await renderHeld()

    await user.type(screen.getByRole('searchbox'), 'zzz')

    const line = await screen.findByText('No open ability matches “zzz”.')

    expect(line).toBeVisible()
    // Folded, not unmounted: still in the page, and out of every reader's way.
    expect(screen.getByText('Enhancer', { selector: 'h2' })).not.toBeVisible()
    expect(screen.getByText('2 under fog')).not.toBeVisible()
    expect(
      screen.queryByRole('region', { name: '2 under fog' }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('Clear search')).toBeVisible()
    // What the fold hides is still said: how many are under fog, and why
    // the search does not find them. No bookmark here, so: set one.
    expect(
      screen.getByText(
        '2 under fog. Their names and Nen types are hidden, so search does not find them. Set your bookmark to see them.',
      ),
    ).toBeVisible()
  })

  it('unfolds them and returns to the field when the query is cleared', async () => {
    const user = userEvent.setup()
    await renderHeld()

    await user.type(screen.getByRole('searchbox'), 'zzz')
    await user.click(screen.getByText('Clear search'))

    expect(screen.getByRole('searchbox')).toHaveValue('')
    expect(screen.getByRole('searchbox')).toHaveFocus()
    expect(screen.getByRole('link', { name: /Rock Fist/u })).toBeVisible()
    expect(screen.getByRole('region', { name: '2 under fog' })).toBeVisible()
    expect(screen.queryByText('Clear search')).not.toBeInTheDocument()
  })

  it('says nothing of the fog when nothing is under it', async () => {
    const user = userEvent.setup()
    await renderHeld({ ...SHEET, covered: [] })

    await user.type(screen.getByRole('searchbox'), 'zzz')

    expect(screen.getByText('Clear search')).toBeVisible()
    expect(screen.queryByText(/Their names/u)).not.toBeInTheDocument()
  })
})
