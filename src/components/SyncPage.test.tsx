import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, type MockInstance, vi } from 'vitest'

import { expireCookie, writeCookie } from '~/lib/cookies'
import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_SERIES } from '~/lib/progress/series'
import { renderWithProviders } from '~/test/providers'

import { SyncPage } from './SyncPage'

const ID = '0f8fad5b-d9cb-469f-a165-70867728950e'
const SERIES = [ONE_PIECE_SERIES, HUNTER_X_HUNTER_SERIES]

/** Opens the page at this fragment. */
function arrive(fragment: string): void {
  history.replaceState(null, '', `/en/sync${fragment}`)
  renderWithProviders(<SyncPage series={SERIES} />, { path: '/en/sync' })
}

/** The endpoint, answering each request with the next of `answers`. */
function endpoint(...answers: (() => Response)[]): MockInstance<typeof fetch> {
  const spy = vi.spyOn(globalThis, 'fetch')
  for (const next of answers) {
    spy.mockImplementationOnce(async () => {
      await Promise.resolve()
      return next()
    })
  }
  return spy
}

const record =
  (body: unknown, status = 200) =>
  (): Response =>
    Response.json({ record: body }, { status })

describe('the sync page', () => {
  afterEach(() => {
    expireCookie('zs_sync')
    expireCookie('zs_one-piece')
  })

  it('says a link without an id is incomplete', async () => {
    arrive('')

    const said = await screen.findByRole('alert')

    expect(said).toHaveTextContent('This link is incomplete.')
    expect(screen.getByRole('link', { name: '← All series' })).toBeVisible()
  })

  it('says this device already has the record', async () => {
    writeCookie('zs_sync', ID)
    const asked = endpoint()
    arrive(`#${ID}`)

    const said = await screen.findByText(
      'This device already has these bookmarks.',
    )

    expect(said).toBeVisible()
    expect(asked).not.toHaveBeenCalled()
  })

  it('says a record that is gone does not work', async () => {
    endpoint(record(null, 404))
    arrive(`#${ID}`)

    const said = await screen.findByRole('alert')

    expect(said).toHaveTextContent('This link does not work any more.')
  })

  it('lists what connecting changes, and connects on the button', async () => {
    const user = userEvent.setup()
    writeCookie('zs_one-piece', '10')
    const stored = { 'hunter-x-hunter': 'c340', 'one-piece': '1120' }
    const asked = endpoint(record(stored), record(stored))
    arrive(`#${ID}`)

    const changes = await screen.findAllByRole('listitem')

    expect(changes.map((item) => item.textContent)).toStrictEqual([
      'Your One Piece bookmark becomes Episode 1120.',
      'Your Hunter x Hunter bookmark is set to Chapter 340.',
    ])

    await user.click(
      screen.getByRole('button', { name: 'Connect this device' }),
    )

    expect(asked.mock.calls.map(([, init]) => init?.body)).toStrictEqual([
      `{"id":"${ID}","op":"read"}`,
      `{"id":"${ID}","op":"join"}`,
    ])
  })

  it('lists nothing when the bookmarks are the same', async () => {
    writeCookie('zs_one-piece', '1120')
    endpoint(record({ 'one-piece': '1120' }))
    arrive(`#${ID}`)

    const connect = await screen.findByRole('button', {
      name: 'Connect this device',
    })

    expect(connect).toBeVisible()
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('offers a retry when the record cannot be read', async () => {
    const user = userEvent.setup()
    endpoint(
      () => new Response(null, { status: 503 }),
      record({ 'one-piece': '1120' }),
    )
    arrive(`#${ID}`)

    await user.click(await screen.findByRole('button', { name: 'Try again' }))
    const connect = await screen.findByRole('button', {
      name: 'Connect this device',
    })

    expect(connect).toBeVisible()
  })
})
