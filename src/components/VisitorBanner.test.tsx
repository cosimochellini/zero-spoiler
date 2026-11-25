import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { preloadBookmarkForm } from '~/components/bookmarkFormLoader'
import { PageUnitContext } from '~/lib/progress/BookmarkContext'
import type { RecordView } from '~/lib/view/records'
import { at, coveredSlot, openSlot, record } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { VisitorBanner } from './VisitorBanner'

const NAMI = openSlot(record({ name: 'Nami', ...at(8) }))

describe('VisitorBanner', () => {
  it('names a record page’s record at its first appearance, with the bookmark control', () => {
    renderWithProviders(<VisitorBanner slot={NAMI} />, {
      path: '/one-piece/en/characters/nami',
    })

    expect(
      screen.getByText(
        'You are seeing Nami as first seen (Episode 8). The rest stays under fog.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Set your bookmark' }),
    ).toBeInTheDocument()
  })

  it('counts in chapters on a page in chapters, and opens the bookmark form there (#1431)', async () => {
    await preloadBookmarkForm()
    const user = userEvent.setup()
    renderWithProviders(
      <PageUnitContext value="chapter">
        <VisitorBanner
          slot={openSlot(
            record({
              name: 'Nami',
              revealedAtEpisode: 8,
              revealedAtChapter: 69,
            }),
          )}
        />
      </PageUnitContext>,
      { path: '/one-piece/en/characters/nami' },
    )

    expect(
      screen.getByText(
        'You are seeing Nami as first seen (Chapter 69). The rest stays under fog.',
      ),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Set your bookmark' }))
    const dialog = screen.getByRole('dialog')
    await within(dialog).findByRole('button', { name: 'Save' })

    expect(within(dialog).getByRole('radio', { name: 'Chapter' })).toBeChecked()
  })

  it('says a list opens only the start of the story', () => {
    renderWithProviders(<VisitorBanner />, { path: '/one-piece/en/characters' })

    expect(
      screen.getByText(/only the start of the story is open/u),
    ).toBeInTheDocument()
  })

  it('says so on a list with nothing open at the start of the story', () => {
    renderWithProviders(<VisitorBanner nothingOpen />, {
      path: '/one-piece/en/characters',
    })

    expect(
      screen.getByText(/Nothing on this page appears that early/u),
    ).toBeInTheDocument()
    expect(screen.queryByText(/The rest stays/u)).not.toBeInTheDocument()
  })

  it('says nothing with a bookmark, in a trial or over a page under fog', () => {
    const { unmount } = renderWithProviders(<VisitorBanner slot={NAMI} />, {
      bookmark: ep(100),
    })

    expect(screen.queryByText(/first seen/u)).not.toBeInTheDocument()

    unmount()
    const view = renderWithProviders(<VisitorBanner />, {
      bookmark: ep(5),
      trial: true,
    })

    expect(screen.queryByText(/start of the story/u)).not.toBeInTheDocument()

    view.unmount()
    renderWithProviders(
      <VisitorBanner slot={coveredSlot<RecordView>({ ...at(8) })} />,
    )

    expect(screen.queryByText(/first seen/u)).not.toBeInTheDocument()
  })
})
