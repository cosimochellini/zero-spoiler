import { fireEvent, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it, vi } from 'vitest'

import type { SagaPick, StopView } from '~/lib/view/places'
import type { CoveredRecord } from '~/lib/view/records'
import { at, coveredRecord, seasOf, stop } from '~/test/fixtures'
import { ep, renderOnRoute } from '~/test/providers'

import { PlaceIndex } from './-index'
import { usePlacePicks } from './-params'

const open = [
  stop({ id: 'shells-town', name: 'Shells Town', ...at(2), form: 'town' }),
  stop({ id: 'baratie', name: 'Baratie', ...at(20) }),
  stop({
    id: 'whisky-peak',
    name: 'Whisky Peak',
    ...at(64),
    sea: 'grand-line',
    form: 'town',
    saga: 2,
  }),
]

const sagas: SagaPick[] = [
  { number: 1, title: 'East Blue Saga' },
  { number: 2, title: 'Alabasta Saga' },
]

const fogged = [
  coveredRecord({ kind: 'place', handle: 'h1', ...at(70) }),
  coveredRecord({ kind: 'place', handle: 'h2', ...at(80) }),
]

interface IndexProps {
  covered: CoveredRecord[]
  stops: StopView[]
}

/** The index as the page wires it, with the lit stops printed beside it. */
function Index({ covered, stops }: IndexProps): ReactElement {
  const { lit, ...picks } = usePlacePicks(stops)

  return (
    <>
      <pre aria-label="lit">{lit === null ? 'all' : [...lit].join(',')}</pre>
      <PlaceIndex
        covered={covered}
        mapAbove
        open={stops}
        sagas={sagas}
        seas={seasOf(stops)}
        {...picks}
      />
    </>
  )
}

async function draw(
  search = '',
  { stops = open } = {},
): Promise<ReturnType<typeof renderOnRoute>> {
  return renderOnRoute(
    <Index
      covered={fogged}
      stops={stops}
    />,
    {
      bookmark: ep(64),
      path: `/one-piece/en/places${search}`,
      pattern: '/$series/$locale/places',
    },
  )
}

/** The seas the index shows, by their headings, in order. */
function seas(): string[] {
  return screen
    .getAllByRole('heading', { level: 2 })
    .map((heading) => heading.textContent)
}

/** The folded row's toggle, which carries the bar's summary in its name. */
function foldedToggle(): HTMLElement {
  return screen.getByRole('button', { expanded: false })
}

/** Where the bar's foot is, scrolled: everything but a group starts at 0. */
const BAR_FOOT = 156

/**
 * Lays the page out with each group's top where `tops` says, by the sea its
 * heading id ends in, and everything else at 0, its foot at the bar's.
 */
function layOut(tops: Record<string, number>): void {
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(
    function (this: Element) {
      const label = this.getAttribute('aria-labelledby') ?? ''
      const sea = Object.keys(tops).find((key) => label.endsWith(`-${key}`))
      const top = sea === undefined ? 0 : (tops[sea] ?? 0)

      return DOMRect.fromRect({ y: top, height: BAR_FOOT })
    },
  )
}

describe('the places index', () => {
  it('groups the open places by sea, each a link to its page', async () => {
    await draw()

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])

    const eastBlue = screen.getByRole('region', { name: 'East Blue' })

    expect(within(eastBlue).getByText('2 places')).toBeVisible()
    expect(
      within(eastBlue).getByRole('link', { name: /Baratie/u }),
    ).toHaveAttribute('href', '/one-piece/en/places/baratie')
    expect(
      screen.getByRole('link', { name: /Whisky Peak/u }),
    ).toHaveTextContent(/03.*Episode 64/u)
    expect(screen.getByText('Showing 3 of 3 open places')).toBeVisible()
    expect(screen.getByLabelText('lit')).toHaveTextContent('all')
  })

  it('says the stops under fog once, after every sea', async () => {
    await draw()

    expect(screen.getAllByText(/under fog/u)).toHaveLength(1)
    expect(screen.getByText('2 stops under fog')).toBeVisible()
  })

  it('searches the open places and lights only those on the chart', async () => {
    await draw('?q=peak')

    expect(seas()).toStrictEqual(['Grand Line'])
    expect(screen.getByLabelText('lit')).toHaveTextContent('whisky-peak')
    expect(screen.getByText('2 stops under fog')).toBeVisible()
  })

  it('says when a query finds nothing', async () => {
    await draw('?q=zou')

    expect(screen.queryAllByRole('link')).toHaveLength(0)

    await screen.findByText('No open place matches “zou”.')

    expect(screen.getByText('No open place matches “zou”.')).toBeVisible()
  })

  it('keeps a sea pick in the address', async () => {
    const user = userEvent.setup()
    await draw()

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Sea' }),
      'grand-line',
    )

    expect(seas()).toStrictEqual(['Grand Line'])
    expect(screen.getByLabelText('lit')).toHaveTextContent('whisky-peak')
  })

  it('reads a type and a saga from the address, an old layout left out', async () => {
    await draw('?form=town&saga=1&view=list')

    expect(
      screen.queryByRole('radio', { name: 'Grid' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Type' })).toHaveValue('town')
    expect(screen.getByRole('combobox', { name: 'Saga' })).toHaveValue('1')
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(screen.getByLabelText('lit')).toHaveTextContent('shells-town')
  })

  it('offers only the seas, types and sagas of open places', async () => {
    await draw()

    const seaPicks = within(screen.getByRole('combobox', { name: 'Sea' }))

    expect(
      seaPicks.getAllByRole('option').map((option) => option.textContent),
    ).toStrictEqual(['All seas', 'East Blue · 2', 'Grand Line · 1'])

    const types = within(screen.getByRole('combobox', { name: 'Type' }))

    expect(
      types.getAllByRole('option').map((option) => option.textContent),
    ).toStrictEqual(['All types', 'Town · 2', 'Floating restaurant · 1'])
  })

  it('ignores a pick the reader has not reached', async () => {
    await draw('?sea=new-world&saga=8')

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])
    expect(screen.getByLabelText('lit')).toHaveTextContent('all')
    expect(screen.queryByText(/New World/u)).not.toBeInTheDocument()
  })

  it('offers every place back when the picks leave none', async () => {
    const user = userEvent.setup()
    await draw('?sea=grand-line&saga=1')

    expect(
      screen.getByText('No open place matches these filters.'),
    ).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Show all' }))

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])
  })

  it('offers every place back when a query and a pick leave none', async () => {
    const user = userEvent.setup()
    await draw('?q=zou&sea=grand-line')

    await user.click(screen.getByRole('button', { name: 'Show all' }))

    expect(seas()).toStrictEqual(['East Blue', 'Grand Line'])
    expect(screen.getByRole('searchbox')).toHaveValue('')
  })

  it('leaves a query alone that finds nothing, with no pick to clear', async () => {
    await draw('?q=zou')

    expect(
      screen.queryByRole('button', { name: 'Show all' }),
    ).not.toBeInTheDocument()
  })

  // On a phone the group heads scroll away, so the folded row says which
  // sea is under the bar (#1380).
  it('names the sea in view in the folded row', async () => {
    await draw()

    expect(foldedToggle()).toHaveAccessibleName(/All seas$/u)

    // East Blue's group has scrolled above the bar's foot, the next has not.
    layOut({ 'east-blue': -500, 'grand-line': 400 })
    fireEvent.scroll(globalThis.window)

    expect(foldedToggle()).toHaveAccessibleName(/East Blue · 2 places$/u)

    // A turned phone moves the groups with no scroll.
    layOut({ 'east-blue': -900, 'grand-line': -100 })
    fireEvent(globalThis.window, new Event('resize'))

    expect(foldedToggle()).toHaveAccessibleName(/Grand Line · 1 place$/u)

    vi.restoreAllMocks()
  })

  it('names a picked sea as picked, wherever the reader is', async () => {
    await draw('?sea=grand-line')
    layOut({ 'grand-line': -500 })
    fireEvent.scroll(globalThis.window)

    expect(foldedToggle()).toHaveAccessibleName(/\. Grand Line$/u)

    vi.restoreAllMocks()
  })

  it('is not there with nothing open', async () => {
    await draw('', { stops: [] })

    expect(screen.queryByRole('search')).not.toBeInTheDocument()
    expect(screen.queryByText(/under fog/u)).not.toBeInTheDocument()
  })
})
