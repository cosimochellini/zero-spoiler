import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { awaited, ep, renderWithProviders } from '~/test/providers'

import { EpisodeMark } from './EpisodeMark'

// The form's code cannot be fetched: a deploy replaced the chunk, or the
// network dropped.
vi.mock(import('~/components/BookmarkForm'), () => {
  throw new Error('Failed to fetch dynamically imported module')
})

describe('EpisodeMark', () => {
  // A trial point is not a bookmark, and the mark does not look like one
  // (#1399).
  it('says a trial point is being tried, dashed, and not saved', () => {
    renderWithProviders(<EpisodeMark />, { bookmark: ep(37), trial: true })
    const mark = screen.getByRole('button', { name: 'Trying EP 37, not saved' })

    expect(mark).toHaveTextContent('TryingEP 37')
  })

  it('names a saved bookmark as one to change', () => {
    renderWithProviders(<EpisodeMark />, { bookmark: ep(37) })

    expect(
      screen.getByRole('button', { name: 'Change bookmark (EP 37)' }),
    ).toHaveTextContent(/^EP 37$/u)
  })

  it('says so in the dialog when the form cannot be fetched, and the page stays up', async () => {
    const user = userEvent.setup()
    renderWithProviders(<EpisodeMark />, { bookmark: ep(650) })
    const mark = screen.getByRole('button', { name: /EP 650/u })

    await awaited(async () => user.click(mark))
    const dialog = screen.getByRole('dialog', { name: 'Where are you up to?' })
    const alert = await within(dialog).findByRole('alert')

    expect(alert).toHaveTextContent(
      'Loading failed. Check your connection and try again.',
    )

    await awaited(async () =>
      user.click(within(dialog).getByRole('button', { name: 'Try again' })),
    )

    const again = await within(dialog).findByRole('alert')

    expect(again).toBeVisible()

    await user.click(within(dialog).getByRole('button', { name: 'Cancel' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(mark).toBeEnabled()
    expect(mark).toHaveAttribute('aria-expanded', 'false')
  })
})
