import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { awaited, renderWithProviders } from '~/test/providers'

import { BookmarkDialog } from './BookmarkDialog'

// The first fetch of the form's code fails, the next one lands.
vi.mock(import('~/components/bookmarkFormLoader'), async (importOriginal) => ({
  ...(await importOriginal()),
  formHasLanded: () => false,
  preloadBookmarkForm: vi
    .fn<() => Promise<boolean>>()
    .mockResolvedValueOnce(false)
    .mockResolvedValue(true),
}))

describe('BookmarkDialog when the form fails to load', () => {
  it('says so, then loads the form when the reader tries again', async () => {
    const user = userEvent.setup()
    await awaited(() => {
      renderWithProviders(<BookmarkDialog onClose={vi.fn<() => void>()} />)
    })
    const dialog = screen.getByRole('dialog', { name: 'Where are you up to?' })

    expect(within(dialog).getByRole('alert')).toHaveTextContent(
      'Loading failed. Check your connection and try again.',
    )
    expect(
      within(dialog).queryByRole('button', { name: 'Save' }),
    ).not.toBeInTheDocument()

    await awaited(async () =>
      user.click(within(dialog).getByRole('button', { name: 'Try again' })),
    )
    const save = await within(dialog).findByRole('button', { name: 'Save' })

    expect(save).toBeVisible()
    expect(within(dialog).queryByRole('alert')).not.toBeInTheDocument()
    expect(within(dialog).getByRole('radio', { name: 'Episode' })).toHaveFocus()
  })
})
