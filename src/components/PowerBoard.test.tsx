import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { PowerPageView } from '~/lib/view/power'
import { ep, renderWithProviders } from '~/test/providers'

import { PowerBoard } from './PowerBoard'

const page: PowerPageView = {
  bodies: [
    {
      id: 'warlords',
      kind: 'council',
      name: 'Seven Warlords of the Sea',
      ended: true,
      seats: [
        {
          title: 'Fixture Throne',
          state: 'held',
          holder: { id: 'dracule-mihawk', name: 'Dracule Mihawk' },
        },
        { title: 'Fixture Crown', state: 'vacant' },
        { title: 'Fixture Sceptre', state: 'unknown' },
      ],
    },
  ],
}

describe('PowerBoard', () => {
  it('asks for a bookmark without one', () => {
    renderWithProviders(<PowerBoard page={{ bodies: [] }} />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Power in the world' }),
    ).toBeVisible()
    expect(screen.getByText(/not set a bookmark/u)).toBeVisible()
  })

  it('says nothing is open when the bookmark reaches no body', () => {
    renderWithProviders(<PowerBoard page={{ bodies: [] }} />, {
      bookmark: ep(1),
    })

    expect(
      screen.getByText('Nothing on this page is open at your bookmark.'),
    ).toBeVisible()
    expect(screen.queryByText(/not set a bookmark/u)).not.toBeInTheDocument()
  })

  it('lists each seat with its holder, a vacancy or the fog', () => {
    renderWithProviders(<PowerBoard page={page} />, { bookmark: ep(600) })

    expect(
      screen.getByRole('region', { name: 'Seven Warlords of the Sea' }),
    ).toBeVisible()
    expect(screen.getByText('This group has been dissolved.')).toBeVisible()
    expect(
      screen.getByRole('link', { name: 'Dracule Mihawk' }),
    ).toHaveAttribute('href', '/one-piece/en/characters/dracule-mihawk')
    expect(screen.getByText('Vacant')).toBeVisible()
    expect(screen.getByText('Under fog')).toBeVisible()
    expect(screen.queryByText(/Nothing on this page/u)).not.toBeInTheDocument()
  })
})
