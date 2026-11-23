import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, type MockInstance, vi } from 'vitest'

import { expireCookie, writeCookie } from '~/lib/cookies'
import { renderWithProviders } from '~/test/providers'

import { DevicesLink, DevicesView } from './SyncDevices'

const ID = '0f8fad5b-d9cb-469f-a165-70867728950e'

/** The sync endpoint, answering `create` with this id. */
function endpoint(): MockInstance<typeof fetch> {
  return vi.spyOn(globalThis, 'fetch').mockImplementation(async () => {
    await Promise.resolve()
    return Response.json({ id: ID })
  })
}

function renderView(
  handlers: { onBack?: () => void; onDone?: () => void } = {},
): void {
  renderWithProviders(
    <DevicesView
      ledeId="lede"
      onBack={handlers.onBack ?? vi.fn<() => void>()}
      onDone={handlers.onDone ?? vi.fn<() => void>()}
      returnFocusTo={{ current: null }}
      titleId="title"
    />,
  )
}

describe('More devices', () => {
  afterEach(() => {
    expireCookie('zs_sync')
  })

  it('asks the dialog to open the view, and asks the endpoint for nothing', async () => {
    const user = userEvent.setup()
    const asked = endpoint()
    const onOpen = vi.fn<() => void>()
    renderWithProviders(
      <DevicesLink
        linkRef={{ current: null }}
        onOpen={onOpen}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'More devices?' }))

    expect(onOpen).toHaveBeenCalledExactlyOnceWith(expect.anything())
    expect(asked).not.toHaveBeenCalled()
  })

  it('asks for the record once it is shown, then shows the code', async () => {
    const asked = endpoint()
    renderView()

    await screen.findByRole('img', { name: 'QR code of the link' })

    expect(asked).toHaveBeenCalledExactlyOnceWith(
      '/_serverFn/sync',
      expect.objectContaining({ body: '{"op":"create"}', method: 'POST' }),
    )
  })

  it('names itself with the ids the dialog points at, and keeps the help as its lede', async () => {
    endpoint()
    renderView()

    await screen.findByRole('img', { name: 'QR code of the link' })

    expect(
      screen.getByRole('heading', { name: 'More devices' }),
    ).toHaveAttribute('id', 'title')
    expect(
      screen.getByText(/Scan this code with another device/u),
    ).toHaveAttribute('id', 'lede')
  })

  it('puts the focus on the way back', async () => {
    endpoint()
    renderView()

    await screen.findByRole('img', { name: 'QR code of the link' })

    expect(screen.getByRole('button', { name: 'Back' })).toHaveFocus()
  })

  it('goes back on Back', async () => {
    const user = userEvent.setup()
    endpoint()
    const onBack = vi.fn<() => void>()
    renderView({ onBack })

    await user.click(await screen.findByRole('button', { name: 'Back' }))

    expect(onBack).toHaveBeenCalledExactlyOnceWith(expect.anything())
  })

  it('copies the link with the id in its fragment', async () => {
    const user = userEvent.setup()
    endpoint()
    renderView()

    await user.click(await screen.findByRole('button', { name: 'Copy link' }))

    await expect(navigator.clipboard.readText()).resolves.toBe(
      `${location.origin}/en/sync#${ID}`,
    )
    expect(screen.getByText('Link copied.')).toBeInTheDocument()
  })

  it('says so when the copy fails', async () => {
    const user = userEvent.setup()
    endpoint()
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(
      new Error('denied'),
    )
    renderView()

    await user.click(await screen.findByRole('button', { name: 'Copy link' }))

    const said = await screen.findByText('Copying failed. Try again.')

    expect(said).toBeVisible()
  })

  it('disconnects this device and closes the dialog', async () => {
    const user = userEvent.setup()
    endpoint()
    writeCookie('zs_sync', ID)
    const onDone = vi.fn<() => void>()
    renderView({ onDone })

    await user.click(
      await screen.findByRole('button', { name: 'Disconnect this device' }),
    )

    expect(document.cookie).not.toContain('zs_sync')
    expect(onDone).toHaveBeenCalledExactlyOnceWith()
  })

  it('offers a retry when the record cannot be made', async () => {
    const user = userEvent.setup()
    const asked = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(null, { status: 503 }))
      .mockImplementation(async () => {
        await Promise.resolve()
        return Response.json({ id: ID })
      })
    renderView()

    await user.click(await screen.findByRole('button', { name: 'Try again' }))

    await waitFor(() => {
      expect(asked).toHaveBeenCalledTimes(2)
    })

    await screen.findByRole('img', { name: 'QR code of the link' })
  })
})
