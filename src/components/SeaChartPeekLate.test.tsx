import { act, fireEvent, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { at, peekTo, port, seasOf, stop } from '~/test/fixtures'
import { ep, renderWithProviders } from '~/test/providers'

import { SeaChart } from './SeaChart'

// The peeks' code is not there until the test lets it come: a slow
// connection, or none (a failure is the next attempt's to retry).
const network = vi.hoisted(() => {
  const attempts: { deliver: () => void; fail: () => void }[] = []
  return {
    attempts,
    ask: async () =>
      new Promise<void>((resolve, reject) => {
        attempts.push({
          deliver: resolve,
          fail: () => {
            reject(new Error('offline'))
          },
        })
      }),
  }
})

vi.mock(import('~/components/SeaChartPeek'), async (importOriginal) => {
  await network.ask()
  return importOriginal()
})

const eastBlue = [
  stop({ id: 'shells-town', name: 'Shells Town', ...at(2) }),
  stop({ id: 'baratie', name: 'Baratie', ...at(20) }),
]

function draw(): void {
  renderWithProviders(
    <SeaChart
      bookmark={ep(30)}
      covered={[]}
      open={eastBlue}
      peekPort={peekTo(port())}
      sagas={[]}
      seas={seasOf(eastBlue)}
      served="across"
      ships={[]}
    />,
    { bookmark: ep(30) },
  )
}

/** Settles the request for the code now asked for, as the network would. */
async function settle(outcome: 'deliver' | 'fail'): Promise<void> {
  await act(async () => {
    network.attempts.at(-1)?.[outcome]()
    await Promise.resolve()
  })
}

function stops(): HTMLElement {
  const [across] = screen.getAllByRole('list', { name: 'Map of the places' })
  if (across === undefined) {
    throw new Error('no chart')
  }

  return across
}

describe('the peek, its code on the way', () => {
  it('asks for the code as the pointer comes, before it rests long enough to open', async () => {
    const user = userEvent.setup()
    draw()

    const shells = within(stops()).getByRole('link', { name: /Shells Town/u })
    await user.hover(shells)

    expect(network.attempts).toHaveLength(1)

    await user.unhover(shells)
    await settle('fail')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('asks for the code when a stop is focused, and closes the peek when it never comes', async () => {
    const user = userEvent.setup()
    draw()

    await user.tab()
    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })

    expect(baratie).toHaveFocus()
    expect(network.attempts).toHaveLength(2)
    // Nothing is open before the code is here.
    expect(baratie).toHaveAttribute('aria-expanded', 'false')

    await user.tab()

    // The Tab waits for the peek, rather than going on past the stop; one
    // that leads away from it is left alone.
    expect(baratie).toHaveFocus()
    expect(fireEvent.keyDown(baratie, { key: 'Tab', shiftKey: true })).toBe(
      true,
    )

    await settle('fail')
    await user.tab()

    // No peek was coming, so the Tab was not held for one.
    expect(baratie).not.toHaveFocus()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('walks into the peek the code brings, whenever it comes', async () => {
    const user = userEvent.setup()
    draw()

    await user.tab()
    const baratie = within(stops()).getByRole('link', { name: /Baratie/u })

    expect(baratie).toHaveFocus()
    // The earlier tries failed: this focus is a new attempt.
    expect(network.attempts).toHaveLength(3)

    await user.tab()

    // The Tab waits, rather than letting the focus go on past the stop.
    expect(baratie).toHaveFocus()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await settle('deliver')
    const entry = await screen.findByRole('link', { name: 'Open the entry' })

    await waitFor(() => {
      expect(entry).toHaveFocus()
    })

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(baratie).toHaveFocus()
  })
})
