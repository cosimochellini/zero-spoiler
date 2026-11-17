import { act, fireEvent, screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

import { expireCookie, parseCookieHeader } from '~/lib/cookies'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import type { Bookmark } from '~/lib/progress/episode'
import { useOpenEntries } from '~/lib/progress/openEntries'
import { ONE_PIECE_BOOKMARK } from '~/lib/progress/series'
import { dismissWelcome } from '~/lib/progress/welcome'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { BookmarkStatus } from './BookmarkStatus'
import { EpisodeMark } from './EpisodeMark'
import { TrialStrip } from './TrialStrip'

/** How many entries a listing has open at a bookmark, for the fixture. */
const OPEN = new Map<null | number, number>([
  [20, 36],
  [45, 51],
  [46, 52],
  [null, 0],
])

/** A listing that counts its open entries, and a control that moves on. */
function Listing({ to }: { to: Bookmark }): ReactElement {
  const { bookmark, setBookmark } = useBookmark()
  useOpenEntries(
    OPEN.get(bookmark?.mode === 'episode' ? bookmark.episode : null) ?? 0,
  )

  return (
    <button
      onClick={() => {
        setBookmark(to)
      }}
      type="button"
    >
      Move
    </button>
  )
}

/** A control that leaves the page with the save, as the landing's does. */
function Landing(): null | ReactElement {
  const { bookmark, setBookmark } = useBookmark()

  return bookmark === null ?
      <button
        onClick={() => {
          setBookmark(ep(12))
        }}
        type="button"
      >
        I’m here
      </button>
    : null
}

async function press(name: string): Promise<void> {
  fireEvent.click(screen.getByRole('button', { name }))
  await settle()
}

describe('BookmarkStatus', () => {
  afterEach(() => {
    expireCookie(ONE_PIECE_BOOKMARK.cookie)
    expireCookie(ONE_PIECE_BOOKMARK.trialCookie)
    dismissWelcome()
  })

  it('is an empty live region until the bookmark moves', () => {
    renderWithProviders(<BookmarkStatus />, { bookmark: ep(20) })

    expect(screen.getByRole('status')).toBeEmptyDOMElement()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('says where the bookmark moved and how many entries that opened', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <Listing to={ep(45)} />
      </>,
      { bookmark: ep(20) },
    )

    await press('Move')

    expect(screen.getByRole('status')).toHaveTextContent(
      'Bookmark moved to EP 45. 15 more entries are open.',
    )
  })

  it('says how many entries went back under fog on a move back', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <Listing to={ep(20)} />
      </>,
      { bookmark: ep(45), locale: 'it' },
    )

    await press('Move')

    expect(screen.getByRole('status')).toHaveTextContent(
      'Segnalibro spostato su EP 20. 15 voci sono tornate nella nebbia.',
    )
  })

  it('counts a single entry in the singular', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <Listing to={ep(46)} />
      </>,
      { bookmark: ep(45) },
    )

    await press('Move')

    expect(screen.getByRole('status')).toHaveTextContent(
      'Bookmark moved to EP 46. 1 more entry is open.',
    )
  })

  it('gives no count off a listing', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <Landing />
      </>,
    )

    await press('I’m here')

    expect(screen.getByRole('status')).toHaveTextContent(
      /^Bookmark set to EP 12\.$/u,
    )
  })

  it('says nothing when the save is the bookmark already held', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <Listing to={ep(20)} />
      </>,
      { bookmark: ep(20) },
    )

    await press('Move')

    expect(screen.getByRole('status')).toBeEmptyDOMElement()
  })

  it('offers to undo a cleared bookmark, and puts it back', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <Listing to={null} />
      </>,
      { bookmark: ep(20) },
    )

    await press('Move')

    expect(screen.getByRole('status')).toHaveTextContent(
      'Bookmark cleared. 36 entries went back under fog.',
    )
    expect(
      parseCookieHeader(document.cookie).has(ONE_PIECE_BOOKMARK.cookie),
    ).toBe(false)

    await press('Undo')

    expect(
      parseCookieHeader(document.cookie).get(ONE_PIECE_BOOKMARK.cookie),
    ).toBe('20')
    expect(screen.getByRole('status')).toHaveTextContent(
      'Bookmark set to EP 20. 36 more entries are open.',
    )
    expect(
      screen.queryByRole('button', { name: 'Undo' }),
    ).not.toBeInTheDocument()
  })

  it('moves focus to the mark when the control that saved leaves the page', async () => {
    renderWithProviders(
      <>
        <EpisodeMark />
        <BookmarkStatus />
        <Landing />
      </>,
    )
    const here = screen.getByRole('button', { name: 'I’m here' })
    here.focus()

    await press('I’m here')

    expect(here).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Change bookmark (EP 12)' }),
    ).toHaveFocus()
  })

  it('leaves focus where it is when the control that saved is still there', async () => {
    renderWithProviders(
      <>
        <EpisodeMark />
        <BookmarkStatus />
        <Listing to={ep(45)} />
      </>,
      { bookmark: ep(20) },
    )
    const move = screen.getByRole('button', { name: 'Move' })
    move.focus()

    await press('Move')

    expect(move).toHaveFocus()
  })

  it('announces a trial point saved as the bookmark', async () => {
    renderWithProviders(
      <>
        <TrialStrip />
        <BookmarkStatus />
      </>,
      { bookmark: ep(12), trial: true },
    )

    await press('Save this point')

    expect(screen.getByRole('status')).toHaveTextContent(
      'Bookmark set to EP 12.',
    )
  })

  it('leaves with the page it was made on', async () => {
    const { router } = renderWithProviders(
      <>
        <BookmarkStatus />
        <Listing to={ep(45)} />
      </>,
      { bookmark: ep(20), path: '/one-piece/en/characters' },
    )
    await press('Move')

    expect(screen.getByRole('status')).not.toBeEmptyDOMElement()

    await act(async () => {
      await router.navigate({
        to: '/$series/$locale/places',
        params: { series: 'one-piece', locale: 'en' },
      })
    })

    expect(screen.getByRole('status')).toBeEmptyDOMElement()
  })
})
