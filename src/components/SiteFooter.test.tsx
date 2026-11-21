import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_SERIES } from '~/lib/progress/series'
import { renderUnderSeries, renderWithProviders } from '~/test/providers'

import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it.each([
    {
      locale: 'en',
      lead: 'A One Piece wiki that hides what comes after your bookmark.',
      unofficial:
        'Unofficial fan project, not endorsed by the One Piece rights holders.',
      legal: 'Legal notice',
      filler: 'See which episodes are filler',
    },
    {
      locale: 'it',
      lead: 'Una wiki di One Piece che nasconde quello che viene dopo il tuo segnalibro.',
      unofficial:
        'Progetto amatoriale non ufficiale, non approvato dai titolari dei diritti di One Piece.',
      legal: 'Note legali',
      filler: 'Vedi quali episodi sono filler',
    },
  ] as const)(
    'closes with a colophon, the filler guide, the legal link and the repository in $locale',
    ({ locale, lead, unofficial, legal, filler }) => {
      renderWithProviders(<SiteFooter />, { locale })

      expect(screen.getByText(lead)).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toHaveTextContent(unofficial)
      expect(screen.getAllByRole('link')).toHaveLength(3)
      expect(screen.getByRole('link', { name: filler })).toHaveAttribute(
        'href',
        `/one-piece/${locale}/filler`,
      )
      expect(screen.getByRole('link', { name: legal })).toHaveAttribute(
        'href',
        `/${locale}/legal`,
      )
    },
  )

  it.each([
    { series: ONE_PIECE_SERIES, filler: ['/one-piece/en/filler'] },
    { series: HUNTER_X_HUNTER_SERIES, filler: [] },
  ])(
    'links the filler guide only where $series.slug declares it',
    async ({ series, filler }) => {
      await renderUnderSeries(<SiteFooter />, {
        path: `/${series.slug}/en`,
        series,
      })

      expect(
        screen
          .getAllByRole('link')
          .map((link) => link.getAttribute('href'))
          .filter((href) => href?.endsWith('/filler') === true),
      ).toStrictEqual(filler)
    },
  )

  it.each([
    {
      locale: 'en',
      lead: 'Wikis that hide what comes after your bookmark.',
      colophon: 'Your bookmarks are saved in cookies on this device',
      unofficial:
        'Unofficial fan project, not endorsed by the rights holders of the series.',
    },
    {
      locale: 'it',
      lead: 'Wiki che nascondono quello che viene dopo il tuo segnalibro.',
      colophon: 'I segnalibri vengono salvati in cookie su questo dispositivo',
      unofficial:
        'Progetto amatoriale non ufficiale, non approvato dai titolari dei diritti delle serie.',
    },
  ] as const)(
    'names no series on a page with none, in $locale',
    ({ locale, lead, colophon, unofficial }) => {
      renderWithProviders(<SiteFooter shared />, { locale, path: `/${locale}` })

      expect(screen.getByText(lead)).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toHaveTextContent(colophon)
      expect(screen.getByRole('contentinfo')).toHaveTextContent(unofficial)
      expect(screen.getByRole('contentinfo')).not.toHaveTextContent('One Piece')
      expect(screen.getAllByRole('link')).toHaveLength(2)
    },
  )
})
