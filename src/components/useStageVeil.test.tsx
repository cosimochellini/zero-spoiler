import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import type { CharacterView, Slot } from '~/lib/view/records'
import {
  at,
  character,
  coveredSlot,
  openSlot,
  peekPending,
  spyPeek,
} from '~/test/fixtures'
import { ep, renderWithProviders, settle } from '~/test/providers'

import { useStageVeil } from './useStageVeil'

const record = character({ name: 'Spoiler body', ...at(1089) })

interface StageProps {
  peek: (handle: string) => Promise<CharacterView>
  slot: Slot<CharacterView>
  withLink?: boolean
}

/** A record page's first band, cut down to what the veil decides. */
function Stage({ peek, slot, withLink = false }: StageProps): ReactElement {
  const veil = useStageVeil(slot, peek)

  return (
    <>
      <section>
        {veil.drawing(<p data-testid="empty-frame" />, () => {
          return <p data-testid="drawing" />
        })}
        <p>Character · episode 1089</p>
        {veil.words(<h1>A character under fog</h1>, (shown) => {
          return (
            <div data-testid="words">
              <h1>{shown.name}</h1>
              {withLink ?
                <a href="/somewhere">Somewhere</a>
              : null}
            </div>
          )
        })}
      </section>
      {veil.below((shown) => {
        return <p data-testid="below">{shown.id}</p>
      })}
    </>
  )
}

describe('a record page’s one curtain', () => {
  it('has one control: the verb, named with the threshold', () => {
    renderWithProviders(
      <Stage
        peek={peekPending()}
        slot={coveredSlot<CharacterView>({ ...at(1089) })}
      />,
      { bookmark: ep(20) },
    )

    const control = screen.getByRole('button')

    expect(control).toHaveAccessibleName(
      'Under fog until episode 1089. Show anyway',
    )
    // The page prints the threshold once, in its meta line.
    expect(control).toHaveTextContent(/^Show anyway$/u)
  })

  it('keeps both halves inert, with nothing of the record, while covered', () => {
    renderWithProviders(
      <Stage
        peek={peekPending()}
        slot={coveredSlot<CharacterView>({ ...at(1089) })}
      />,
      { bookmark: ep(20) },
    )

    for (const half of [
      screen.getByTestId('empty-frame').parentElement,
      screen.getByText('A character under fog').parentElement,
    ]) {
      expect(half).toHaveAttribute('inert')
      expect(half).toHaveAttribute('aria-hidden', 'true')
    }

    expect(screen.queryByTestId('drawing')).not.toBeInTheDocument()
    expect(screen.queryByText('Spoiler body')).not.toBeInTheDocument()
    // Under both halves: nothing at all, not even a placeholder.
    expect(screen.queryByTestId('below')).not.toBeInTheDocument()
  })

  it('lifts both halves on one press, with one request', async () => {
    const user = userEvent.setup()
    const { asked, peek } = spyPeek(record)
    renderWithProviders(
      <Stage
        peek={peek}
        slot={coveredSlot<CharacterView>({ handle: 'zz' })}
      />,
      { bookmark: ep(20) },
    )

    await user.click(screen.getByRole('button'))
    await settle()

    expect(asked).toStrictEqual(['zz'])
    expect(screen.getByTestId('drawing')).toBeInTheDocument()
    expect(screen.getByTestId('below')).toHaveTextContent(record.id)
    expect(
      screen.getByRole('heading', { name: 'Spoiler body' }),
    ).toBeInTheDocument()
  })

  it('moves focus into the words once they are lifted', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <Stage
        peek={spyPeek(record).peek}
        slot={coveredSlot<CharacterView>()}
      />,
      { bookmark: ep(20) },
    )

    await user.click(screen.getByRole('button'))
    await settle()

    // No link in them: the lifted words take the focus themselves.
    expect(screen.getByTestId('words').parentElement).toHaveFocus()
  })

  it('moves focus to the first link in the lifted words', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <Stage
        peek={spyPeek(record).peek}
        slot={coveredSlot<CharacterView>()}
        withLink
      />,
      { bookmark: ep(20) },
    )

    await user.click(screen.getByRole('button'))
    await settle()

    expect(screen.getByRole('link', { name: 'Somewhere' })).toHaveFocus()
  })

  it('draws no control over a record the reader has reached', () => {
    renderWithProviders(
      <Stage
        peek={peekPending()}
        slot={openSlot(record)}
      />,
      { bookmark: ep(1100) },
    )

    expect(screen.getByTestId('drawing')).toBeInTheDocument()
    expect(screen.getByTestId('below')).toHaveTextContent(record.id)
    expect(
      screen.queryByRole('button', { hidden: true }),
    ).not.toBeInTheDocument()
  })
})
