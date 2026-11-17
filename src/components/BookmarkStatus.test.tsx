import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { type ReactElement, useState } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { expireCookie, parseCookieHeader } from '~/lib/cookies'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { type Bookmark, serialiseBookmark } from '~/lib/progress/episode'
import { useOpenEntries } from '~/lib/progress/openEntries'
import {
  GAME_OF_THRONES_SERIES,
  ONE_PIECE_BOOKMARK,
} from '~/lib/progress/series'
import { dismissWelcome } from '~/lib/progress/welcome'
import {
  ep,
  type RenderOptions,
  renderWithProviders,
  settle,
} from '~/test/providers'

import { BookmarkStatus } from './BookmarkStatus'
import { EpisodeMark } from './EpisodeMark'
import { TrialStrip } from './TrialStrip'

/** How many entries the fixture's listing has open at an episode. */
const OPEN = new Map<null | number, number>([
  [20, 36],
  [21, 37],
  [45, 51],
  [null, 0],
])

function openAt(bookmark: Bookmark): number {
  return OPEN.get(bookmark?.mode === 'episode' ? bookmark.episode : null) ?? 40
}

/** A listing that counts its open entries, and a control that moves on. */
function Listing({ to }: { to: Bookmark }): ReactElement {
  const { bookmark, setBookmark } = useBookmark()
  useOpenEntries(openAt(bookmark))

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

/** The count, on screen once it has arrived. */
function Count({ count }: { count: number }): null {
  useOpenEntries(count)

  return null
}

/**
 * A listing whose count arrives behind the page, as the characters' does
 * behind its deferred shelves: on "Arrive", for the bookmark held then. With
 * `fromStart` false it has no count yet when the save is made.
 */
function LateListing({ fromStart }: { fromStart: boolean }): ReactElement {
  const { bookmark, setBookmark } = useBookmark()
  const [counted, setCounted] = useState(fromStart ? bookmark : undefined)

  return (
    <>
      {counted !== undefined && <Count count={openAt(counted)} />}
      <span>{bookmark === null ? 'none' : serialiseBookmark(bookmark)}</span>
      <button
        onClick={() => {
          setCounted(bookmark)
        }}
        type="button"
      >
        Arrive
      </button>
      <button
        onClick={() => {
          setBookmark(ep(45))
        }}
        type="button"
      >
        Move
      </button>
    </>
  )
}

/** Steps the stepped clock, inside React's scope. */
async function tick(ms: number): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms)
  })
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

/** Presses Move on a listing and waits for the sentence to be said. */
async function move(
  from: Bookmark,
  to: Bookmark,
  options: RenderOptions = {},
): Promise<HTMLElement> {
  renderWithProviders(
    <>
      <BookmarkStatus />
      <Listing to={to} />
    </>,
    { bookmark: from, ...options },
  )
  await press('Move')
  const region = screen.getByRole('status')
  await waitFor(() => {
    expect(region).not.toBeEmptyDOMElement()
  })

  return region
}

function cookie(name: string): string | undefined {
  return parseCookieHeader(document.cookie).get(name)
}

describe('BookmarkStatus', () => {
  afterEach(() => {
    expireCookie(ONE_PIECE_BOOKMARK.cookie)
    expireCookie(ONE_PIECE_BOOKMARK.trialCookie)
    expireCookie(GAME_OF_THRONES_SERIES.cookie)
    dismissWelcome()
    vi.useRealTimers()
  })

  it('is an empty live region until the bookmark moves', () => {
    renderWithProviders(<BookmarkStatus />, { bookmark: ep(20) })

    expect(screen.getByRole('status')).toBeEmptyDOMElement()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('says where the bookmark moved and how many entries that opened', async () => {
    const said = await move(ep(20), ep(45))

    expect(said).toHaveTextContent(
      'Bookmark moved: Episode 45. 15 more entries are open.',
    )
  })

  it('says how many entries went back under fog on a move back', async () => {
    const said = await move(ep(45), ep(20), { locale: 'it' })

    expect(said).toHaveTextContent(
      'Segnalibro spostato: Episodio 20. 15 voci sono tornate nella nebbia.',
    )
  })

  it('counts a single entry in the singular, either way', async () => {
    const said = await move(ep(20), ep(21))

    expect(said).toHaveTextContent(
      'Bookmark moved: Episode 21. 1 more entry is open.',
    )
  })

  it('counts a single entry gone back under fog in the singular', async () => {
    const said = await move(ep(21), ep(20), { locale: 'it' })

    expect(said).toHaveTextContent(
      'Segnalibro spostato: Episodio 20. Una voce è tornata nella nebbia.',
    )
  })

  it('says a season bookmark in words', async () => {
    const said = await move(ep(20), { mode: 'season', season: 2, episode: 3 })

    expect(said).toHaveTextContent(/^Bookmark moved: Season 2 · episode 3\./u)
  })

  it('says a chapter of a series with books as its book', async () => {
    const said = await move(
      { mode: 'chapter', chapter: 5 },
      { mode: 'chapter', chapter: 20 },
      {
        locale: 'it',
        path: '/game-of-thrones/it/characters',
        series: GAME_OF_THRONES_SERIES,
      },
    )

    expect(said).toHaveTextContent(
      /^Segnalibro spostato: Libro 1, capitolo 20\.$/u,
    )
  })

  it('gives no count when the unit changed between the anime and the manga', async () => {
    // The listing counts 36 open at episode 20 and 40 at any chapter: other
    // records exist in the manga, so the difference is not what the move
    // opened.
    const said = await move(ep(20), { mode: 'chapter', chapter: 100 })

    expect(said).toHaveTextContent(/^Bookmark moved: Chapter 100\.$/u)
  })

  it('gives no count off a listing', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <Landing />
      </>,
    )

    await press('I’m here')

    const said = await screen.findByText('Bookmark set: Episode 12.')

    expect(said).toHaveRole('status')
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
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 300)
      })
    })

    expect(screen.getByRole('status')).toBeEmptyDOMElement()
  })

  it('changes the live region once when the count arrives behind the page', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <LateListing fromStart />
      </>,
      { bookmark: ep(20) },
    )
    const region = screen.getByRole('status')
    const said: string[] = []
    const observer = new MutationObserver(() => {
      said.push(region.textContent)
    })
    observer.observe(region, {
      characterData: true,
      childList: true,
      subtree: true,
    })
    // The hold's clock is stepped by hand, so a busy machine cannot let it
    // run out before the count arrives.
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })

    fireEvent.click(screen.getByRole('button', { name: 'Move' }))
    // The re-read commits within a few turns of the loop; no time passes.
    for (let pass = 0; pass < 5; pass += 1) {
      await tick(0)
    }

    expect(screen.getByText('45')).toBeInTheDocument()

    await tick(200)

    expect(region).toBeEmptyDOMElement()

    fireEvent.click(screen.getByRole('button', { name: 'Arrive' }))
    await tick(249)

    expect(region).toBeEmptyDOMElement()

    await tick(1)
    observer.disconnect()

    // The point is held together by a no-break space.
    expect(said).toStrictEqual([
      'Bookmark moved: Episode\u{A0}45. 15 more entries are open.',
    ])
  })

  it('gives no count when the listing had none at the save', async () => {
    renderWithProviders(
      <>
        <BookmarkStatus />
        <LateListing fromStart={false} />
      </>,
      { bookmark: ep(20) },
    )

    // The save comes first: the baseline is unknown.
    await press('Move')
    await press('Arrive')
    const line = await screen.findByText(/^Bookmark moved: Episode 45\.$/u)

    expect(line).toHaveRole('status')
  })

  it('offers to undo a cleared bookmark, and puts it back', async () => {
    const region = await move(ep(20), null)

    expect(region).toHaveTextContent(
      'Bookmark cleared. 36 entries went back under fog.',
    )
    expect(cookie(ONE_PIECE_BOOKMARK.cookie)).toBeUndefined()

    await press('Undo')

    expect(cookie(ONE_PIECE_BOOKMARK.cookie)).toBe('20')
    expect(
      screen.queryByRole('button', { name: 'Undo' }),
    ).not.toBeInTheDocument()

    await waitFor(() => {
      expect(region).toHaveTextContent(
        'Bookmark set: Episode 20. 36 more entries are open.',
      )
    })
  })

  it('puts a chapter bookmark back in chapters', async () => {
    await move({ mode: 'chapter', chapter: 40 }, null)
    await press('Undo')

    expect(cookie(ONE_PIECE_BOOKMARK.cookie)).toBe('c40')

    const said = await screen.findByText(/^Bookmark set: Chapter 40\./u)

    expect(said).toBeInTheDocument()
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
    const control = screen.getByRole('button', { name: 'Move' })
    control.focus()

    await press('Move')

    expect(control).toHaveFocus()
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

    const said = await screen.findByText('Bookmark set: Episode 12.')

    expect(said).toBeInTheDocument()
  })

  it('ends when the reader leaves the page, and does not come back with it', async () => {
    const scroll = vi.spyOn(Element.prototype, 'scrollIntoView')
    const { router } = renderWithProviders(
      <>
        <EpisodeMark />
        <BookmarkStatus />
        <Listing to={null} />
      </>,
      { bookmark: ep(20), path: '/one-piece/en/characters' },
    )
    await press('Move')
    const region = screen.getByRole('status')
    await waitFor(() => {
      expect(region).toHaveTextContent('Bookmark cleared.')
    })
    const scrolled = scroll.mock.calls.length

    await act(async () => {
      await router.navigate({
        to: '/$series/$locale/places',
        params: { series: 'one-piece', locale: 'en' },
      })
    })

    expect(region).toBeEmptyDOMElement()
    expect(
      screen.queryByRole('button', { name: 'Undo' }),
    ).not.toBeInTheDocument()

    // Back on the page the save was made on, with focus lost to the body as
    // after a navigation: nothing is said, focused or scrolled.
    screen.getByRole('button', { name: 'Set episode' }).blur()
    await act(async () => {
      await router.navigate({
        to: '/$series/$locale/characters',
        params: { series: 'one-piece', locale: 'en' },
      })
    })
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 300)
      })
    })

    expect(region).toBeEmptyDOMElement()
    expect(
      screen.queryByRole('button', { name: 'Undo' }),
    ).not.toBeInTheDocument()
    expect(document.body).toHaveFocus()
    expect(scroll).toHaveBeenCalledTimes(scrolled)
  })
})
