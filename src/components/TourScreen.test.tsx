import { fireEvent, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import type { Step } from '~/lib/view/records'
import type { TourCard, TourView } from '~/lib/view/tour'
import type { TourStep } from '~/lib/view/tourSteps'
import { renderWithProviders } from '~/test/providers'

import { groupsAt, linksAt } from './tourGroups'
import { TourScreen } from './TourScreen'

/** A card that opens at `episode`, with the dated facts given. */
function card(
  id: string,
  episode: number,
  facts: Partial<Pick<TourCard, 'affiliation' | 'role'>> = {},
): TourCard {
  return {
    affiliation: [],
    bounty: [],
    drawings: [],
    epithet: [],
    id,
    kind: 'character',
    name: id.toUpperCase(),
    revealedAtChapter: episode,
    revealedAtEpisode: episode,
    role: [],
    ...facts,
  }
}

const at = (episode: number, value: string): Step<string> => ({
  revealedAtChapter: episode,
  revealedAtEpisode: episode,
  value,
})

/** The tour's records, as the hub's route would hand them over. */
async function loadTOUR(): Promise<TourView> {
  await Promise.resolve()
  return TOUR
}

/** Each group at the point, with the ids of its cards. */
function namesAt(cast: TourCard[], episode: number): [string, string[]][] {
  return groupsAt(cast, { mode: 'episode', value: episode }).map(
    ([group, cards]) => [group, cards.map(({ id }) => id)],
  )
}

const TOUR: TourView = {
  cast: [card('ada', 1), card('bea', 5), card('cleo', 9)],
  covered: [
    {
      handle: 'h1',
      kind: 'ability',
      revealedAtChapter: 40,
      revealedAtEpisode: 30,
    },
  ],
  fogged: 600,
  lastEpisode: 10,
}

const step = (key: TourStep['key']): TourStep => ({
  key,
  last: 10,
  scrub: key !== 'anyway',
  series: 'one-piece',
})

const SERIES = [
  {
    bookmark: null,
    count: 700,
    demoLastEpisode: 10,
    name: { en: 'One Piece', it: 'One Piece' },
    open: 0,
    slug: 'one-piece',
    theme: 'one-piece' as const,
  },
]

async function showAt(
  key: TourStep['key'],
  point: number,
  onPoint = vi.fn<(value: number) => void>(),
): Promise<HTMLElement> {
  renderWithProviders(
    <TourScreen
      load={loadTOUR}
      onPoint={onPoint}
      point={point}
      series={SERIES}
      step={step(key)}
    />,
    { path: '/en' },
  )
  return screen.findByRole('list')
}

describe('TourScreen', () => {
  it('opens what the point has reached and covers the rest by its episode', async () => {
    const grid = within(await showAt('bookmark', 5))

    expect(grid.getByText('ADA')).toBeInTheDocument()
    expect(grid.getByText('BEA')).toBeInTheDocument()
    expect(grid.queryByText('CLEO')).not.toBeInTheDocument()
    expect(grid.getByText('EP 9')).toBeInTheDocument()
  })

  it('opens one covered card by hand, and only that one', async () => {
    const grid = within(await showAt('anyway', 1))

    fireEvent.click(grid.getByRole('button', { name: 'Show' }))

    expect(grid.getByText('BEA')).toBeInTheDocument()
    expect(grid.getByText('Opened by hand')).toBeInTheDocument()
    expect(grid.queryByText('CLEO')).not.toBeInTheDocument()
    expect(grid.queryByRole('button')).not.toBeInTheDocument()
  })

  it('hands the slider’s episode to the tour', async () => {
    const onPoint = vi.fn<(value: number) => void>()
    await showAt('bookmark', 5, onPoint)

    fireEvent.change(screen.getByRole('slider', { name: 'Episode' }), {
      target: { value: '8' },
    })

    expect(onPoint).toHaveBeenCalledWith(8)
    expect(screen.getByText('EP 5')).toBeInTheDocument()
  })
})

describe('groupsAt', () => {
  it('sorts the open cards by the head of their affiliation at the point', () => {
    const cast = [
      card('ned', 1, {
        affiliation: [
          at(1, 'House Stark'),
          at(3, 'House Stark, small council'),
        ],
      }),
      card('jon', 1, {
        affiliation: [at(1, 'House Stark'), at(3, 'Night’s Watch')],
      }),
      card('dany', 6, { affiliation: [at(6, 'House Targaryen')] }),
    ]

    expect(namesAt(cast, 1)).toStrictEqual([['House Stark', ['ned', 'jon']]])
    expect(namesAt(cast, 6)).toStrictEqual([
      ['House Stark', ['ned']],
      ['Night’s Watch', ['jon']],
      ['House Targaryen', ['dany']],
    ])
  })
})

describe('linksAt', () => {
  it('names a person in the list once the point has reached them', () => {
    const bonds = {
      of: 'killua',
      people: [
        { id: 'gon', name: 'Gon', revealedAtChapter: 1, revealedAtEpisode: 1 },
        {
          id: 'illumi',
          name: 'Illumi',
          revealedAtChapter: 9,
          revealedAtEpisode: 9,
        },
      ],
      snapshots: [
        {
          revealedAtChapter: 4,
          revealedAtEpisode: 4,
          value: [
            { id: 'gon', type: 'Friend' },
            { id: 'illumi', type: 'Brother' },
          ],
        },
      ],
    }

    expect(linksAt(bonds, { mode: 'episode', value: 3 })).toStrictEqual([])
    expect(linksAt(bonds, { mode: 'episode', value: 5 })).toStrictEqual([
      { id: 'gon', name: 'Gon', type: 'Friend' },
    ])
    expect(
      linksAt(bonds, { mode: 'episode', value: 9 }).map(({ name }) => name),
    ).toStrictEqual(['Gon', 'Illumi'])
  })
})
