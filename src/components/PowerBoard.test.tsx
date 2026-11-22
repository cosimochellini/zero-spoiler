import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_SERIES } from '~/lib/progress/series'
import type { BodyView, PowerPageView } from '~/lib/view/power'
import { ep, renderWithProviders } from '~/test/providers'

import { PowerBoard } from './PowerBoard'

const page: PowerPageView = {
  bodies: [
    {
      id: 'warlords',
      kind: 'council',
      name: 'Seven Warlords of the Sea',
      ended: true,
      description: 'Seven pirates in the service of the government.',
      seats: [
        {
          title: 'Fixture Throne',
          state: 'held',
          holder: {
            id: 'dracule-mihawk',
            name: 'Dracule Mihawk',
            visual: { strokes: [{ d: 'M0 0 L10 10' }], tint: 'violet' },
          },
        },
        { title: 'Fixture Crown', state: 'vacant' },
        { title: 'Fixture Sceptre', state: 'unknown' },
      ],
    },
  ],
}

describe('PowerBoard', () => {
  it('draws the start of the story under the visitor banner without a bookmark', () => {
    renderWithProviders(<PowerBoard page={page} />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Ranks of the world' }),
    ).toBeVisible()
    expect(
      screen.getByText(/only the start of the story is open\. The rest/u),
    ).toBeVisible()
    expect(
      screen.getByRole('button', { name: 'Set your bookmark' }),
    ).toBeVisible()
    expect(screen.getByText('Dracule Mihawk')).toBeVisible()
  })

  it('says in the banner that nothing is open, and only there, when the start of the story reaches no body', () => {
    renderWithProviders(<PowerBoard page={{ bodies: [] }} />)

    expect(
      screen.getByText(/Nothing on this page appears that early/u),
    ).toBeVisible()
    expect(
      screen.queryByText('Nothing on this page is open at your bookmark.'),
    ).not.toBeInTheDocument()
  })

  it('says nothing is open when the bookmark reaches no body', () => {
    renderWithProviders(<PowerBoard page={{ bodies: [] }} />, {
      bookmark: ep(1),
    })

    expect(
      screen.getByText('Nothing on this page is open at your bookmark.'),
    ).toBeVisible()
    expect(screen.queryByText(/start of the story/u)).not.toBeInTheDocument()
  })

  // Before the bookmark reaches a body, Hunter x Hunter's page says in its
  // own words that nothing is open (#1442).
  it.each([
    [
      'en',
      'Ranks of the world',
      'Nothing on this page is open at your bookmark.',
    ],
    [
      'it',
      'Le cariche del mondo',
      'Niente di questa pagina è visibile al punto del tuo segnalibro.',
    ],
  ] as const)(
    'says on Hunter x Hunter’s page in %s that nothing is open',
    (locale, title, none) => {
      renderWithProviders(<PowerBoard page={{ bodies: [] }} />, {
        bookmark: ep(148),
        locale,
        path: `/hunter-x-hunter/${locale}/ranks`,
        series: HUNTER_X_HUNTER_SERIES,
      })

      expect(
        screen.getByRole('heading', { level: 1, name: title }),
      ).toBeVisible()
      expect(screen.getByText(none)).toBeVisible()
      expect(screen.queryByRole('region')).not.toBeInTheDocument()
    },
  )

  it('says in the banner on Hunter x Hunter’s page that nothing is open when the start of the story reaches no body', () => {
    renderWithProviders(<PowerBoard page={{ bodies: [] }} />, {
      path: '/hunter-x-hunter/en/ranks',
      series: HUNTER_X_HUNTER_SERIES,
    })

    expect(
      screen.getByText(/Nothing on this page appears that early/u),
    ).toBeVisible()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('prints a group’s description under its name', () => {
    renderWithProviders(<PowerBoard page={page} />, { bookmark: ep(600) })

    expect(
      screen.getByText('Seven pirates in the service of the government.'),
    ).toBeVisible()
  })

  it('prints no description line for a group without one', () => {
    const bare: BodyView = {
      id: 'warlords',
      kind: 'council',
      name: 'Seven Warlords of the Sea',
      ended: false,
      seats: [],
    }
    renderWithProviders(<PowerBoard page={{ bodies: [bare] }} />, {
      bookmark: ep(600),
    })

    expect(
      screen.queryByText('Seven pirates in the service of the government.'),
    ).not.toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading.nextElementSibling).toBeNull()
  })

  it('lists each seat with its holder, a vacancy or the fog', () => {
    renderWithProviders(<PowerBoard page={page} />, { bookmark: ep(600) })

    expect(
      screen.getByRole('region', { name: 'Seven Warlords of the Sea' }),
    ).toBeVisible()
    expect(screen.getByText('This group has been dissolved.')).toBeVisible()
    expect(
      screen.getByRole('link', { name: 'Dracule Mihawk' }),
    ).toHaveAttribute('href', '/one-piece/en/characters/dracule-mihawk')
    expect(screen.getByText('Vacant')).toBeVisible()
    expect(screen.getByText('Under fog')).toBeVisible()
    expect(screen.queryByText(/Nothing on this page/u)).not.toBeInTheDocument()
    expect(screen.queryByText('Other groups under fog')).not.toBeInTheDocument()
  })

  it('says it in one line when every group reached is under fog', () => {
    renderWithProviders(<PowerBoard page={{ bodies: [], fogged: true }} />, {
      bookmark: ep(764),
    })

    expect(
      screen.getByText('Every group you have reached is under fog.'),
    ).toBeVisible()
    expect(screen.queryByText(/Nothing on this page/u)).not.toBeInTheDocument()
    expect(screen.queryByText('Other groups under fog')).not.toBeInTheDocument()
  })

  it('ends with one line for the groups under fog, after the rest', () => {
    renderWithProviders(<PowerBoard page={{ ...page, fogged: true }} />, {
      bookmark: ep(600),
    })

    const line = screen.getByText('Other groups under fog')

    expect(line).toBeVisible()
    expect(screen.getByRole('main').lastElementChild).toBe(line)
  })

  it('draws each holder in their throne and leaves the others empty', () => {
    renderWithProviders(<PowerBoard page={page} />, { bookmark: ep(600) })

    const seats = within(
      screen.getByRole('region', { name: 'Seven Warlords of the Sea' }),
    ).getAllByRole('listitem')
    // The throne's back and dais, then the holder's drawing.
    const paths = seats.map((seat) => seat.querySelectorAll('path').length)

    expect(paths).toStrictEqual([3, 2, 2])
    expect(seats[0]?.querySelector('path[d="M0 0 L10 10"]')).not.toBeNull()
  })
})
