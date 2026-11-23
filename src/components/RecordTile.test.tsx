import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_SERIES } from '~/lib/progress/series'
import {
  at,
  coveredSlot,
  openSlot,
  peekPending,
  record,
  spyPeek,
} from '~/test/fixtures'
import {
  renderUnderSeries,
  renderWithProviders,
  settle,
} from '~/test/providers'

import { RecordTile } from './RecordTile'

describe('RecordTile', () => {
  it('links an open character to their page', () => {
    renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(record({ id: 'sanji', name: 'Sanji', ...at(20) }))}
      />,
    )

    const link = screen.getByRole('link', { name: 'Sanji' })

    expect(link).toHaveAttribute('href', '/one-piece/en/characters/sanji')
    // The whole card is the target, drawing and all, not the name alone.
    expect(link.querySelector('svg')).not.toBeNull()
    expect(screen.getByText('Episode 20')).toBeVisible()
  })

  it('links an open place to its own page', () => {
    renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(
          record({ id: 'baratie', kind: 'place', name: 'Baratie' }),
        )}
      />,
    )

    expect(screen.getByRole('link', { name: 'Baratie' })).toHaveAttribute(
      'href',
      '/one-piece/en/places/baratie',
    )
  })

  it('links a Nen ability to its own page, and names its kind', async () => {
    await renderUnderSeries(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(
          record({ id: 'rock-fist', kind: 'ability', name: 'Rock Fist' }),
        )}
      />,
      { path: '/hunter-x-hunter/en/places', series: HUNTER_X_HUNTER_SERIES },
    )

    expect(screen.getByRole('link', { name: 'Rock Fist' })).toHaveAttribute(
      'href',
      '/hunter-x-hunter/en/abilities/rock-fist',
    )
    expect(screen.getByText('Ability')).toBeInTheDocument()
  })

  it('links a ship to her own page', () => {
    renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(
          record({ id: 'going-merry', kind: 'ship', name: 'Going Merry' }),
        )}
      />,
    )

    expect(screen.getByRole('link', { name: 'Going Merry' })).toHaveAttribute(
      'href',
      '/one-piece/en/places/going-merry',
    )
  })

  it('leaves an arc as a name', () => {
    renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={openSlot(
          record({ id: 'romance-dawn', kind: 'arc', name: 'Romance Dawn' }),
        )}
      />,
    )

    expect(screen.getByText('Romance Dawn')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('keeps a covered record’s name, drawing and slug out of the DOM', () => {
    const { container } = renderWithProviders(
      <RecordTile
        peek={peekPending()}
        slot={coveredSlot({ ...at(20) })}
      />,
    )

    expect(screen.queryByText('Sanji')).not.toBeInTheDocument()
    expect(screen.getByText('Spoiler')).toBeInTheDocument()
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('svg')).toBeNull()
    expect(screen.getByText('Episode 20')).toBeVisible()
  })

  it('asks before it lifts a covered record, then focuses its link', async () => {
    const user = userEvent.setup()
    const { asked, peek } = spyPeek(record({ name: 'Sanji', ...at(20) }))
    renderWithProviders(
      <RecordTile
        peek={peek}
        slot={coveredSlot({ handle: 'zz', ...at(20) })}
      />,
    )

    await user.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toHaveAccessibleName(
      'Show it anyway? Yes, show',
    )
    expect(asked).toStrictEqual([])
    expect(screen.queryByText('Sanji')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button'))
    await settle()

    expect(asked).toStrictEqual(['zz'])
    expect(screen.getByRole('link', { name: 'Sanji' })).toHaveFocus()
  })
})
