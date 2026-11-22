import { screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import { useT } from '~/i18n/LocaleContext'
import { ep, renderWithProviders } from '~/test/providers'

import { FogBand, type FogTitles } from './FogBand'

const WORDS: FogTitles = {
  allOpen: 'characters.allOpen',
  hint: 'characters.foggedHint',
  hintUnset: 'characters.foggedHintUnset',
  many: 'characters.foggedTitle',
  one: 'characters.foggedTitleOne',
}

function Band({ count }: { count: number }): ReactElement {
  return (
    <FogBand
      count={count}
      headingId="fog"
      t={useT()}
      words={WORDS}
    >
      <p>covered tiles</p>
    </FogBand>
  )
}

describe('FogBand', () => {
  it('tells a reader with a bookmark to move it forward', () => {
    renderWithProviders(<Band count={3} />, { bookmark: ep(20) })

    expect(
      screen.getByRole('heading', { name: '3 under fog' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Move your bookmark forward to see them\.$/u),
    ).toBeInTheDocument()
    // The bookmark is set: the bar's mark moves it, the band adds no control.
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  // The renderer's default bookmark is none.
  it('tells a reader with no bookmark to set one, and hands them the control', () => {
    renderWithProviders(<Band count={3} />)

    expect(
      screen.getByText(/Set your bookmark to see them\.$/u),
    ).toBeInTheDocument()
    expect(screen.queryByText(/Move your bookmark/u)).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Set your bookmark' }),
    ).toHaveAttribute('aria-haspopup', 'dialog')
  })

  it('says so in Italian', () => {
    renderWithProviders(<Band count={1} />, { locale: 'it' })

    expect(
      screen.getByText(/Imposta il segnalibro per vederli\.$/u),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Imposta il segnalibro' }),
    ).toBeInTheDocument()
  })

  it.each([null, ep(20)])(
    'has no hint and no control with nothing under fog (bookmark %j)',
    (bookmark) => {
      renderWithProviders(<Band count={0} />, { bookmark })

      expect(
        screen.getByRole('heading', {
          name: 'Nothing is under fog. You can see every character.',
        }),
      ).toBeInTheDocument()
      expect(screen.queryByText(/bookmark/u)).not.toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
      expect(screen.queryByText('covered tiles')).not.toBeInTheDocument()
    },
  )
})
