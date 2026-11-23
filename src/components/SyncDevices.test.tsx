import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, type MockInstance, vi } from 'vitest'

import { expireCookie, writeCookie } from '~/lib/cookies'
import { renderWithProviders } from '~/test/providers'

import { SyncDevices } from './SyncDevices'

const ID = '0f8fad5b-d9cb-469f-a165-70867728950e'

/** The sync endpoint, answering `create` with this id. */
function endpoint(): MockInstance<typeof fetch> {
  return vi.spyOn(globalThis, 'fetch').mockImplementation(async () => {
    await Promise.resolve()
    return Response.json({ id: ID })
  })
}

describe('More devices', () => {
  afterEach(() => {
    expireCookie('zs_sync')
  })

  it('asks for the record only once it is opened, then shows the code', async () => {
    const user = userEvent.setup()
    const asked = endpoint()
    renderWithProviders(<SyncDevices />)

    expect(asked).not.toHaveBeenCalled()

    await user.click(screen.getByText('More devices?'))

    await screen.findByRole('img', { name: 'QR code of the link' })

    expect(asked).toHaveBeenCalledExactlyOnceWith(
      '/_serverFn/sync',
      expect.objectContaining({ body: '{"op":"create"}', method: 'POST' }),
    )
  })

  it('copies the link with the id in its fragment', async () => {
    const user = userEvent.setup()
    endpoint()
    renderWithProviders(<SyncDevices />)

    await user.click(screen.getByText('More devices?'))
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
    renderWithProviders(<SyncDevices />)

    await user.click(screen.getByText('More devices?'))
    await user.click(await screen.findByRole('button', { name: 'Copy link' }))

    const said = await screen.findByText('Copying failed. Try again.')

    expect(said).toBeVisible()
  })

  it('disconnects this device and closes', async () => {
    const user = userEvent.setup()
    endpoint()
    writeCookie('zs_sync', ID)
    renderWithProviders(<SyncDevices />)

    await user.click(screen.getByText('More devices?'))
    await user.click(
      await screen.findByRole('button', { name: 'Disconnect this device' }),
    )

    expect(document.cookie).not.toContain('zs_sync')
    expect(screen.getByRole('group')).not.toHaveAttribute('open')
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
    renderWithProviders(<SyncDevices />)

    await user.click(screen.getByText('More devices?'))
    await user.click(await screen.findByRole('button', { name: 'Try again' }))

    await waitFor(() => {
      expect(asked).toHaveBeenCalledTimes(2)
    })

    await screen.findByRole('img', { name: 'QR code of the link' })
  })
})
