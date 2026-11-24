import { screen, within } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'

import { renderWithProviders } from '~/test/providers'

import { BookmarkDialog } from './BookmarkDialog'
import { preloadBookmarkForm } from './bookmarkFormLoader'

// A file of its own, with nothing else opening the dialog first: a `lazy()`
// that has once been read stays resolved, so a second test would pass on the
// first one's work.
describe('BookmarkDialog when the form has already landed', () => {
  // The reader pointed at the mark before pressing it.
  beforeAll(async () => {
    await preloadBookmarkForm()
  })

  it('draws the form on the first frame, with no skeleton, and focuses the chosen unit', () => {
    renderWithProviders(<BookmarkDialog onClose={vi.fn<() => void>()} />, {
      bookmark: { mode: 'season', season: 2, episode: 3 },
    })
    // No `await`, no `findBy`: the frame the press paints.
    const dialog = screen.getByRole('dialog', { name: 'Where are you up to?' })

    expect(within(dialog).queryByRole('status')).not.toBeInTheDocument()
    expect(within(dialog).getByRole('button', { name: 'Save' })).toBeVisible()
    expect(within(dialog).getByRole('radio', { name: 'Season' })).toHaveFocus()
  })
})
