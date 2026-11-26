import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { ComingSeries, HubSeries } from '~/lib/view/hub'
import { ep, renderWithProviders } from '~/test/providers'
import { settleDelay } from '~/test/settle'

import { REQUEST_URL } from './HubCards'
import { SeriesHub } from './SeriesHub'

const HUNTER_X_HUNTER: ComingSeries = {
  slug: 'hunter-x-hunter',
  name: { en: 'Hunter x Hunter', it: 'Hunter x Hunter' },
}

const onePiece = (bookmark: HubSeries['bookmark']): HubSeries => ({
  slug: 'one-piece',
  name: { en: 'One Piece', it: 'One Piece' },
  theme: 'one-piece',
  count: 737,
  demoLastEpisode: 61,
  open: bookmark === null ? 0 : 58,
  bookmark,
})

// The tour's records are not asked for here: jsdom never brings it near.
async function noTour(): Promise<never> {
  await Promise.resolve()
  throw new Error('no tour')
}

/** The opening row: every wiki at a glance, and the request card. */
function openingRow(): HTMLElement {
  const [row] = screen.getAllByRole('list')
  if (row === undefined) {
    throw new Error('The hub has no opening row')
  }
  return row
}

/** The opening row's card of One Piece. */
function onePieceCard(): HTMLElement {
  return within(openingRow()).getByRole('link', { name: /One Piece/u })
}

describe('SeriesHub', () => {
  it('shows its header at once and settles the row in order', () => {
    renderWithProviders(
      <SeriesHub
        coming={[HUNTER_X_HUNTER]}
        load={noTour}
        series={[onePiece(null)]}
      />,
    )

    const header = screen.getByRole('banner')
    const cards = within(openingRow()).getAllByRole('listitem')

    expect(settleDelay(header)).toBeNull()
    expect(cards.map((card) => settleDelay(card))).toStrictEqual([
      '0ms',
      '70ms',
      '140ms',
    ])
  })

  it('links a series to its own home, with its count and the bookmark', () => {
    renderWithProviders(
      <SeriesHub
        coming={[]}
        load={noTour}
        series={[onePiece(ep(650))]}
      />,
      { locale: 'it', path: '/it' },
    )

    const card = onePieceCard()

    expect(card).toHaveAttribute('href', '/one-piece/it')
    expect(card).toHaveTextContent('Episodio 650')
    expect(card).toHaveTextContent('58 su 737 visibili')
  })

  it('gives the size alone with no bookmark', () => {
    renderWithProviders(
      <SeriesHub
        coming={[]}
        load={noTour}
        series={[onePiece(null)]}
      />,
      { path: '/en' },
    )

    expect(onePieceCard()).toHaveTextContent('737 entries')
    expect(onePieceCard()).not.toHaveTextContent('open')
  })

  it.each([
    {
      bookmark: { mode: 'chapter', chapter: 1044 } as const,
      said: 'Chapter 1044',
    },
    {
      bookmark: { mode: 'season', season: 14, episode: 3 } as const,
      said: 'Season 14 · episode 3',
    },
    { bookmark: null, said: 'No bookmark yet' },
  ])('says where the reader stands: $said', ({ bookmark, said }) => {
    renderWithProviders(
      <SeriesHub
        coming={[]}
        load={noTour}
        series={[onePiece(bookmark)]}
      />,
      { path: '/en' },
    )

    expect(onePieceCard()).toHaveTextContent(said)
  })

  it('announces a series still to come with no link and no count', () => {
    renderWithProviders(
      <SeriesHub
        coming={[HUNTER_X_HUNTER]}
        load={noTour}
        series={[onePiece(null)]}
      />,
      { path: '/en' },
    )

    const row = within(openingRow())
    const coming = row.getByRole('heading', { name: 'Hunter x Hunter' })

    expect(coming.closest('a')).not.toBeInTheDocument()
    expect(coming.parentElement).toHaveTextContent('Coming later')
    expect(row.getAllByText(/entries/u)).toHaveLength(1)
    expect(
      row.getAllByRole('link').map((link) => link.getAttribute('href')),
    ).toStrictEqual(['/one-piece/en', REQUEST_URL])
  })

  it('asks for a new wiki through the GitHub form', () => {
    renderWithProviders(
      <SeriesHub
        coming={[]}
        load={noTour}
        series={[onePiece(null)]}
      />,
      { locale: 'it', path: '/it' },
    )

    expect(
      within(openingRow()).getByRole('link', {
        name: /Richiedi una nuova wiki/u,
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/cosimochellini/zero-spoiler/issues/new?template=series.yml',
    )
  })

  it('writes out the tour’s steps with no script, the open series’ only', () => {
    renderWithProviders(
      <SeriesHub
        coming={[HUNTER_X_HUNTER]}
        load={noTour}
        series={[onePiece(null)]}
      />,
      { path: '/en' },
    )

    const tour = screen.getByRole('region', { name: 'How it works' })

    expect(
      within(tour)
        .getAllByRole('heading', { level: 3 })
        .map((heading) => heading.textContent),
    ).toStrictEqual([
      'One bookmark per series',
      'The rest is under fog',
      'Show anyway',
      'Each entry follows your bookmark',
    ])
    expect(screen.getByRole('link', { name: /How it works/u })).toHaveAttribute(
      'href',
      '#how-it-works',
    )
  })
})
