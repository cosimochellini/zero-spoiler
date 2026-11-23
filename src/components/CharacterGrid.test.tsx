import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import type { Locale } from '~/i18n/locales'
import { readOpenEntries } from '~/lib/progress/openEntries'
import type {
  CharacterView,
  CoveredRecord,
  SearchableCharacter,
  ShelfView,
} from '~/lib/view/records'
import {
  shelf as aShelf,
  at,
  coveredRecord,
  coveredSlot,
  openEntryLinks,
  openSlot,
  peekPending,
  peekTo,
  record,
  searchable,
} from '~/test/fixtures'
import { renderWithProviders, settle } from '~/test/providers'

import { CharacterGrid } from './CharacterGrid'

const luffy = searchable({
  id: 'monkey-d-luffy',
  name: 'Monkey D. Luffy',
  folded: 'monkey d. luffy',
  aliases: ['monkey d. rufy'],
  ...at(1),
})
const nami = searchable({
  id: 'nami',
  name: 'Nami',
  folded: 'nami',
  aliases: [],
  ...at(5),
})
const robinCovered = coveredRecord({ ...at(130) })

const eastBlueArc = record({
  id: 'east-blue',
  kind: 'arc',
  name: 'East Blue Saga',
  ...at(1),
})

const eastBlue: ShelfView = aShelf({
  arc: openSlot(eastBlueArc),
  total: 2,
  open: [luffy, nami],
  covered: [],
})
const alabasta: ShelfView = aShelf({
  arc: coveredSlot({ kind: 'arc', ...at(92) }),
  total: 1,
  open: [],
  covered: [robinCovered],
})

/** A covered arc past Alabasta: two covered, and any open ones given. */
function laterArc(
  episode: number,
  open: SearchableCharacter[] = [],
): ShelfView {
  const covered = [coveredRecord(at(episode)), coveredRecord(at(episode))]

  return aShelf({
    arc: coveredSlot({ kind: 'arc', ...at(episode) }),
    total: open.length + covered.length,
    open,
    covered,
  })
}

/** A shelf whose heading is sent open, as Game of Thrones' seasons are. */
function season(episode: number): ShelfView {
  const name = `Season ${String(episode)}`
  const heading = record({ id: name, kind: 'arc', name, ...at(episode) })

  return aShelf({
    arc: openSlot(heading),
    total: 1,
    open: [],
    covered: [coveredRecord(at(episode))],
  })
}

/** Characters, with the shelves already here rather than streaming. */
function book({
  featuredCovered = [robinCovered],
  featuredOpen = [luffy, nami],
  locale = 'en',
  shelves = [eastBlue, alabasta],
}: {
  featuredCovered?: CoveredRecord[]
  featuredOpen?: SearchableCharacter[]
  locale?: Locale
  shelves?: ShelfView[]
} = {}): void {
  renderWithProviders(
    <CharacterGrid
      featuredCovered={featuredCovered}
      featuredOpen={featuredOpen}
      onRetry={vi.fn<() => void>()}
      peek={peekPending()}
      shelfCount={shelves.length}
      shelves={shelves}
    />,
    { locale },
  )
}

const chapterArc = coveredRecord({
  kind: 'arc',
  revealedAtChapter: 100,
  revealedAtEpisode: 92,
})
const revealedArc = { ...eastBlueArc, name: 'A later arc', role: '' }

/** A manga reader can reach a character before the arc's own heading opens. */
function chapterBook(peek: (handle: string) => Promise<CharacterView>): void {
  renderWithProviders(
    <CharacterGrid
      featuredCovered={[]}
      featuredOpen={[]}
      onRetry={vi.fn<() => void>()}
      peek={peek}
      shelfCount={1}
      shelves={[
        aShelf({
          arc: { open: false, covered: chapterArc },
          total: 2,
          open: [luffy, nami],
        }),
      ]}
    />,
    { bookmark: { mode: 'chapter', chapter: 50 } },
  )
}

/**
 * Shelves that never arrive, so the pending state is the one under test. The
 * settled case passes the array instead: `use()` does not resume under jsdom
 * inside an `act` scope.
 */
async function onTheirWay(): Promise<ShelfView[]> {
  return new Promise(() => {
    // Never settles.
  })
}

function fogBand(): HTMLElement {
  return screen.getByRole('region', { name: /^\d+ under fog$/u })
}

function shelf(name: RegExp): HTMLElement {
  return screen.getByRole('region', { name })
}

function observeShelves(): (list: Element) => void {
  const observed: {
    callback: (entries: { isIntersecting: boolean }[]) => void
    target: Element
  }[] = []

  class Observer {
    private notify: (entries: { isIntersecting: boolean }[]) => void
    disconnect = vi.fn<() => void>()
    observe = vi.fn<(target: Element) => void>((target) => {
      observed.push({ callback: this.notify, target })
    })
    takeRecords = (): IntersectionObserverEntry[] => []
    unobserve = vi.fn<(target: Element) => void>()

    constructor(notify: (entries: { isIntersecting: boolean }[]) => void) {
      this.notify = notify
    }
  }

  vi.stubGlobal('IntersectionObserver', Observer)
  return (list) => {
    const found = observed.find((entry) => entry.target === list)
    if (found === undefined) {
      throw new Error('the shelf is not being observed')
    }
    found.callback([{ isIntersecting: true }])
  }
}

describe('CharacterGrid', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('lists the open characters as links to their pages and fogs the rest', () => {
    book()

    // Once as a crest and once as a tile on the East Blue shelf.
    const links = screen.getAllByRole('link', { name: /Monkey D\. Luffy/u })

    for (const link of links) {
      expect(link).toHaveAttribute(
        'href',
        '/one-piece/en/characters/monkey-d-luffy',
      )
    }

    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(2)
    // Robin is under fog: no link a keyboard can reach, one card in the band.
    expect(
      screen.queryByRole('link', { name: /Nico Robin/u }),
    ).not.toBeInTheDocument()
    expect(fogBand()).toHaveTextContent('1 under fog')
    // The covered name never reached the browser, so there is nothing to hide.
    expect(within(fogBand()).getByText('Spoiler')).toBeInTheDocument()
    expect(fogBand().querySelectorAll(':scope svg svg')).toHaveLength(0)
    expect(within(fogBand()).getByText('Episode 130')).toBeVisible()
  })

  it('shelves the tiles by arc and veils the heading of a covered shelf', () => {
    book()

    const open = shelf(/East Blue Saga/u)

    expect(within(open).getByText('From episode 1')).toBeVisible()
    expect(within(open).getByText('2 characters')).toBeVisible()
    expect(within(open).getAllByRole('link')).toHaveLength(2)

    // The Alabasta shelf is covered with everyone on it: no arc name, no
    // link, no drawing, and its one tile says only the episode.
    const covered = shelf(/Arc under fog/u)

    expect(screen.queryByText('Alabasta Saga')).not.toBeInTheDocument()
    expect(within(covered).queryByRole('link')).not.toBeInTheDocument()
    expect(covered.querySelectorAll('path')).toHaveLength(0)
    expect(within(covered).getByText('Episode 130')).toBeVisible()
  })

  it('draws a shelf under fog past the next one as its head alone', () => {
    book({
      shelves: [eastBlue, alabasta, laterArc(300), laterArc(400, [nami])],
    })

    const [next, past, cameo] = screen.getAllByRole('region', {
      name: /Arc under fog/u,
    })

    // The next arc keeps its covered tile; the one past it says how many and
    // from when, and draws none.
    expect(within(next!).getByText('Episode 130')).toBeVisible()
    expect(within(past!).getByText('2 characters')).toBeVisible()
    expect(within(past!).getByText('From episode 300')).toBeVisible()
    expect(within(past!).queryByRole('list')).not.toBeInTheDocument()
    // A shelf with an open character is drawn whole, fog and all.
    expect(within(cameo!).getByRole('link', { name: /Nami/u })).toBeVisible()
    expect(within(cameo!).getAllByText('Episode 400')).toHaveLength(2)
  })

  it('starts the fog at the first shelf with nothing open when every heading is open', () => {
    book({ shelves: [eastBlue, season(11), season(21)] })

    expect(within(shelf(/Season 11/u)).getByText('Episode 11')).toBeVisible()
    expect(
      within(shelf(/Season 21/u)).queryByRole('list'),
    ).not.toBeInTheDocument()
  })

  it('mounts a shelf when it nears the viewport and leaves distant shelves light', async () => {
    const enter = observeShelves()
    book()

    const open = shelf(/East Blue Saga/u)
    const covered = shelf(/Arc under fog/u)
    const openList = within(open).getByRole('list')
    const coveredList = within(covered).getByRole('list')

    expect(
      openList.querySelectorAll(':scope > [aria-hidden="true"]'),
    ).toHaveLength(2)
    expect(within(open).queryByRole('link')).not.toBeInTheDocument()

    enter(openList)

    await expect(within(open).findAllByRole('link')).resolves.toHaveLength(2)
    expect(
      coveredList.querySelectorAll(':scope > [aria-hidden="true"]'),
    ).toHaveLength(1)
    expect(within(covered).queryByText('Episode 130')).not.toBeInTheDocument()
  })

  it('mounts the next shelf as scrolling brings it near', async () => {
    const enter = observeShelves()
    book()

    const covered = shelf(/Arc under fog/u)
    const list = within(covered).getByRole('list')

    expect(within(covered).queryByText('Episode 130')).not.toBeInTheDocument()

    enter(list)

    const episode = await within(covered).findByText('Episode 130')

    expect(episode).toBeVisible()
    expect(within(covered).queryByRole('link')).not.toBeInTheDocument()
  })

  it('shows internal search results immediately in a distant shelf', async () => {
    observeShelves()
    const user = userEvent.setup()
    book()

    const open = shelf(/East Blue Saga/u)
    await user.type(screen.getByRole('searchbox'), 'nami')

    expect(within(open).getByRole('link', { name: /Nami/u })).toBeVisible()
    expect(
      within(open).queryByRole('link', { name: /Luffy/u }),
    ).not.toBeInTheDocument()
    expect(shelf(/Arc under fog/u)).toBeInTheDocument()
  })

  it('mounts all tiles immediately without IntersectionObserver', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    book()

    expect(within(shelf(/East Blue Saga/u)).getAllByRole('link')).toHaveLength(
      2,
    )
    expect(
      within(shelf(/Arc under fog/u)).getByText('Episode 130'),
    ).toBeVisible()
  })

  it('keeps the covered arc’s slug out of the shelf’s own id', () => {
    book()

    // The heading id used to be built from the arc's id, so a covered shelf
    // carried the covered arc's slug in the markup.
    const covered = shelf(/Arc under fog/u)

    expect(covered.getAttribute('aria-labelledby')).not.toContain('alabasta')
  })

  it('keeps open chapter tiles and metadata when the covered shelf heading is revealed', async () => {
    const user = userEvent.setup()
    const peek = vi.fn<(handle: string) => Promise<CharacterView>>(
      peekTo(revealedArc),
    )
    chapterBook(peek)

    const section = shelf(/Arc under fog/u)
    const threshold = within(section).getByText('From chapter 100')
    const count = within(section).getByText('2 characters')
    const control = within(section).getByRole('button', {
      name: 'Under fog until chapter 100. Show anyway',
    })

    expect(within(section).getAllByRole('link')).toHaveLength(2)
    expect(threshold).toBeVisible()
    expect(count).toBeVisible()
    expect(count.parentElement).not.toContainElement(threshold)
    expect(control).toHaveTextContent('Show')
    expect(screen.queryByText('A later arc')).not.toBeInTheDocument()

    // A heading in a list asks first (#1376): the second press sends, and
    // the one call below is all the server hears.
    await user.click(control)
    await user.click(control)
    await settle()

    expect(section).toHaveAccessibleName('A later arc')
    expect(threshold).toBeVisible()
    expect(count).toBeVisible()
    expect(within(section).getAllByRole('link')).toHaveLength(2)
    expect(peek).toHaveBeenCalledExactlyOnceWith(chapterArc.handle)
  })

  it('keeps the covered chapter shelf intact after failure and lets the reader retry', async () => {
    const user = userEvent.setup()
    const peek = vi
      .fn<(handle: string) => Promise<CharacterView>>(peekTo(revealedArc))
      .mockRejectedValueOnce(new Error('peek failed'))
    chapterBook(peek)

    const section = shelf(/Arc under fog/u)
    const control = within(section).getByRole('button', {
      name: 'Under fog until chapter 100. Show anyway',
    })
    await user.click(control)
    await user.click(control)
    await settle()

    expect(control).toHaveAccessibleName('Could not load it. Try again.')
    expect(screen.queryByText('A later arc')).not.toBeInTheDocument()
    expect(within(section).getByText('From chapter 100')).toBeVisible()
    expect(within(section).getByText('2 characters')).toBeVisible()
    expect(within(section).getAllByRole('link')).toHaveLength(2)

    await user.click(control)
    await settle()

    expect(section).toHaveAccessibleName('A later arc')
    expect(within(section).getByText('From chapter 100')).toBeVisible()
    expect(within(section).getByText('2 characters')).toBeVisible()
    expect(peek).toHaveBeenNthCalledWith(2, chapterArc.handle)
    expect(peek).toHaveBeenCalledTimes(2)
  })

  it('filters the open characters as the reader types, and marks the match', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'nam')

    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(2)
    expect(
      screen.queryByRole('link', { name: /Luffy/u }),
    ).not.toBeInTheDocument()

    for (const mark of screen.getAllByText('Nam')) {
      expect(mark.tagName).toBe('MARK')
    }
  })

  it('matches the other locale’s name without marking it', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'rufy')

    // An Italian reader who knows him as Rufy finds Luffy; the mark would
    // have to point at letters that are not on the card, so there is none.
    expect(
      screen.getAllByRole('link', { name: /Luffy/u }).length,
    ).toBeGreaterThan(0)
    expect(screen.queryByText('Ruf')).not.toBeInTheDocument()
  })

  it('never lets the fog answer a search', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'robin')

    // A covered character's name finds nothing, exactly as a name nobody
    // has would: the open results are empty, the crests and the shelves fold
    // away, and the page says so in the reader's words.
    const none = await screen.findByText('No open character matches “robin”.')

    expect(none).toBeVisible()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    // Folded, not unmounted, and the covered card is as it was.
    expect(screen.getByText('1 under fog')).not.toBeVisible()
    expect(screen.queryByText(/Robin/u)).not.toBeInTheDocument()
  })

  it('folds the same way for a name nobody has', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'zzz')

    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    expect(screen.getByText('Clear search')).toBeVisible()
    // The shelves' covered characters, counted; no bookmark here, so: set one.
    expect(
      screen.getByText(
        '1 under fog. Their names are hidden, so search does not find them. Set your bookmark to see them.',
      ),
    ).toBeVisible()
  })

  it('keeps the fog where it was while the query has a match', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'nami')

    expect(fogBand()).toHaveTextContent('1 under fog')
    expect(shelf(/Arc under fog/u)).toBeVisible()
    expect(screen.queryByText('Clear search')).not.toBeInTheDocument()
  })

  it('unfolds the crests and the shelves when the query is cleared', async () => {
    const user = userEvent.setup()
    book()

    const field = screen.getByRole('searchbox')
    await user.type(field, 'zzz')
    await user.click(screen.getByText('Clear search'))

    expect(field).toHaveValue('')
    expect(field).toHaveFocus()
    expect(fogBand()).toBeVisible()
    expect(shelf(/East Blue Saga/u)).toBeVisible()
    expect(screen.queryByText('Clear search')).not.toBeInTheDocument()
  })

  it('does not fold while the shelves are still on their way', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <CharacterGrid
        featuredCovered={[robinCovered]}
        featuredOpen={[luffy, nami]}
        onRetry={vi.fn<() => void>()}
        peek={peekPending()}
        shelfCount={2}
        shelves={onTheirWay()}
      />,
    )

    await user.type(screen.getByRole('searchbox'), 'zzz')

    // The shelves hold every open character: until they land, nothing says
    // the query has no match.
    expect(fogBand()).toBeVisible()
    expect(screen.queryByText('Clear search')).not.toBeInTheDocument()
  })

  it('folds once the shelves it was waiting for land', async () => {
    const user = userEvent.setup()
    // Lands on cue, so the query is in before the shelves are.
    const landing = new EventTarget()
    const shelves = new Promise<ShelfView[]>((resolve) => {
      landing.addEventListener(
        'land',
        () => {
          resolve([eastBlue, alabasta])
        },
        { once: true },
      )
    })
    renderWithProviders(
      <CharacterGrid
        featuredCovered={[robinCovered]}
        featuredOpen={[luffy, nami]}
        onRetry={vi.fn<() => void>()}
        peek={peekPending()}
        shelfCount={2}
        // The page's own path: a promise, not an array.
        shelves={shelves}
      />,
    )

    await user.type(screen.getByRole('searchbox'), 'zzz')

    expect(screen.queryByText('Clear search')).not.toBeInTheDocument()

    landing.dispatchEvent(new Event('land'))
    await screen.findByText('Clear search')

    expect(screen.getByText('Clear search')).toBeVisible()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('announces the count once the typing has settled', async () => {
    const user = userEvent.setup()
    book()

    await user.type(screen.getByRole('searchbox'), 'na')

    // Not yet: the announcement waits 250ms after the last keystroke, so a
    // screen reader hears one count and not one per letter.
    expect(screen.getByText('Showing 2 of 2 open characters')).toBeVisible()

    const announced = await screen.findByText('Showing 1 of 2 open characters')

    expect(announced).toBeVisible()
  })

  it('clears the search from the button beside the field', async () => {
    const user = userEvent.setup()
    book()

    const field = screen.getByRole('searchbox')

    // Hidden until there is something to clear, but its slot is reserved.
    expect(
      screen.queryByRole('button', { name: 'Clear search' }),
    ).not.toBeInTheDocument()

    await user.type(field, 'nami')
    await user.click(screen.getByRole('button', { name: 'Clear search' }))

    expect(field).toHaveValue('')
    expect(screen.getAllByRole('link', { name: /Luffy/u })).toHaveLength(2)
  })

  // `null` is the served page and its first render in the browser, before
  // the browser has asked for the shelves (#776).
  it.each([
    { when: 'on their way', shelves: onTheirWay },
    { when: 'not asked for yet', shelves: (): null => null },
  ])(
    'reserves the shelves’ height, and stays usable, while they are $when',
    ({ shelves }) => {
      renderWithProviders(
        <CharacterGrid
          featuredCovered={[robinCovered]}
          featuredOpen={[luffy, nami]}
          onRetry={vi.fn<() => void>()}
          peek={peekPending()}
          shelfCount={2}
          shelves={shelves()}
        />,
      )

      // The search field and the crests are up before the shelves arrive.
      expect(screen.getByRole('searchbox')).toBeInTheDocument()
      expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(1)
      expect(
        screen.queryByRole('region', { name: /East Blue/u }),
      ).not.toBeInTheDocument()
    },
  )

  it('says the shelves failed, keeps the crests and the search, and asks again', async () => {
    const user = userEvent.setup()
    const onRetry = vi.fn<() => void>()
    renderWithProviders(
      <CharacterGrid
        featuredCovered={[robinCovered]}
        featuredOpen={[luffy, nami]}
        onRetry={onRetry}
        peek={peekPending()}
        shelfCount={2}
        shelves="failed"
      />,
    )

    expect(screen.getByRole('alert')).toHaveTextContent('Loading failed')
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Nami/u })).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: 'Try again' }))

    expect(onRetry).toHaveBeenCalledTimes(1)
  })

  it('says so when nothing is under fog', () => {
    book({ featuredCovered: [], shelves: [eastBlue] })

    expect(
      screen.getByText('Nothing is under fog. You can see every character.'),
    ).toBeInTheDocument()
  })

  it('speaks the active locale', () => {
    book({
      featuredOpen: [],
      featuredCovered: [robinCovered, coveredRecord(), coveredRecord()],
      locale: 'it',
    })

    expect(screen.getByLabelText('Cerca un personaggio')).toBeInTheDocument()
    expect(screen.getByText('3 nella nebbia')).toBeInTheDocument()
  })

  it('reports as many open entries as it draws', async () => {
    book()
    await settle()

    expect(openEntryLinks('characters')).toBeGreaterThan(0)
    expect(readOpenEntries()).toBe(openEntryLinks('characters'))
  })
})
