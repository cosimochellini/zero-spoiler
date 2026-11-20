import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { archiveOf } from '~/data/series'
import { type Locale, LOCALES } from '~/i18n/locales'
import {
  GAME_OF_THRONES_SERIES,
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_BOOKMARK,
  ONE_PIECE_SERIES,
} from '~/lib/progress/series'
import type { SeriesCredits, SourceCredit } from '~/lib/view/credits'
import { creditsPage } from '~/server/archive/credits.server'
import { readerFor } from '~/server/archive/reader.server'
import { legalOf } from '~/server/sources.server'
import { ep, renderWithProviders } from '~/test/providers'

import { LegalPage } from './LegalPage'

const archive = await archiveOf('one-piece')

const OFFICIAL = 'https://one-piece.com/anime/o6217/index.html'

/** One Piece alone, as the legal page is sent while it is the one open. */
function onePiece(locale: Locale, credits: SourceCredit[]): SeriesCredits[] {
  return [{ ...legalOf(ONE_PIECE_SERIES, locale), credits }]
}

describe('LegalPage', () => {
  it.each([
    {
      locale: 'en',
      title: 'Legal notice',
      privacy: 'Privacy and cookies',
      sources: 'Sources and licenses',
    },
    {
      locale: 'it',
      title: 'Note legali',
      privacy: 'Privacy e cookie',
      sources: 'Fonti e licenze',
    },
  ] as const)(
    'holds every notice without a bookmark in $locale',
    ({ locale, title, privacy, sources }) => {
      renderWithProviders(
        <LegalPage
          series={onePiece(
            locale,
            creditsPage(readerFor(archive, null, locale)),
          )}
        />,
        { locale },
      )
      const main = screen.getByRole('main')

      expect(main).toHaveAttribute('id', 'content')
      expect(
        screen.getByRole('heading', { level: 1, name: title }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { level: 2, name: privacy }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { level: 2, name: sources }),
      ).toBeInTheDocument()
      expect(
        document.querySelector(
          'a[href="https://www.toei-animation.com/copyrights/"]',
        ),
      ).toBeInTheDocument()

      for (const name of [
        'zs_one-piece',
        'opzs_lang',
        'zs_one-piece_try',
        'zs_hunter-x-hunter',
        'zs_hunter-x-hunter_try',
        'zs_game-of-thrones',
        'zs_game-of-thrones_try',
        'opzs_welcome',
        'zs-copy-reloaded:',
      ]) {
        expect(main).toHaveTextContent(name)
      }

      expect(main).toHaveTextContent('Workers Logs')
      expect(main).toHaveTextContent('6(1)(f)')
      expect(main).toHaveTextContent('CC BY-SA 3.0 Unported')
      expect(screen.queryAllByRole('heading', { level: 4 })).toHaveLength(0)
      expect(
        document.querySelector('a[href*="oldid="]'),
      ).not.toBeInTheDocument()
      expect(
        document.querySelector(`a[href="${CSS.escape(OFFICIAL)}"]`),
      ).not.toBeInTheDocument()
    },
  )

  it.each(LOCALES)(
    'renders article attribution and the official replacement separately in %s',
    (locale) => {
      const credits = creditsPage(
        readerFor(archive, ep(ONE_PIECE_BOOKMARK.episodeCeiling), locale),
      )
      renderWithProviders(<LegalPage series={onePiece(locale, credits)} />, {
        locale,
      })

      expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(17)

      const revisions = document.querySelectorAll('a[href*="oldid="]')

      expect(revisions).toHaveLength(32)

      // The link's text, then its entry's title: a list of links tells them apart.
      const names = [...revisions].map((link) =>
        link.getAttribute('aria-label'),
      )

      expect(names).toStrictEqual(
        [...revisions].map(
          (link) =>
            `${link.textContent}. ${link.closest('ul')?.closest('li')?.querySelector('h4')?.textContent ?? ''}`,
        ),
      )
      expect(new Set(names)).toHaveProperty('size', 32)
      expect(
        document.querySelector(`a[href="${CSS.escape(OFFICIAL)}"]`),
      ).toBeInTheDocument()

      for (const { sources } of credits) {
        for (const { url } of sources) {
          expect(
            document.querySelector(`a[href="${CSS.escape(url)}"]`),
          ).toBeInTheDocument()
        }
      }

      expect(screen.getByRole('main')).not.toHaveTextContent('Kurozumi')
    },
  )

  it.each(LOCALES)(
    'links every heading of the page from its section list, in order, in %s',
    (locale) => {
      renderWithProviders(<LegalPage series={onePiece(locale, [])} />, {
        locale,
      })
      const links = screen
        .getByRole('navigation', {
          name: locale === 'en' ? 'On this page' : 'In questa pagina',
        })
        .querySelectorAll('a')
      // A section is reached by the id of its <section>, a part by its own.
      const headings = [...screen.getByRole('main').querySelectorAll('h2, h3')]

      expect(links).toHaveLength(14)
      expect([...links].map((link) => link.getAttribute('href'))).toStrictEqual(
        headings.map(
          (heading) =>
            `#${heading.id === '' ? (heading.closest('section')?.id ?? '') : heading.id}`,
        ),
      )
      expect([...links].map((link) => link.textContent)).toStrictEqual(
        headings.map((heading) => heading.textContent),
      )
    },
  )

  it.each(LOCALES)(
    'tells the credit link of each series apart in %s',
    (locale) => {
      const open = [
        ONE_PIECE_SERIES,
        HUNTER_X_HUNTER_SERIES,
        GAME_OF_THRONES_SERIES,
      ].map((series) => ({ ...legalOf(series, locale), credits: [] }))
      renderWithProviders(<LegalPage series={open} />, { locale })
      const prefix =
        locale === 'en' ?
          'Official credit source for'
        : 'Fonte ufficiale dei crediti:'

      expect(
        screen
          .getAllByRole('link')
          .map((link) => link.textContent)
          .filter((name) => name.startsWith(prefix)),
      ).toStrictEqual(open.map(({ copy }) => `${prefix} ${copy.name}`))
    },
  )

  it.each(LOCALES)(
    'gives each open series its own rights line and sources in %s',
    (locale) => {
      renderWithProviders(
        <LegalPage
          series={[
            ...onePiece(locale, []),
            { ...legalOf(HUNTER_X_HUNTER_SERIES, locale), credits: [] },
          ]}
        />,
        { locale },
      )
      const main = screen.getByRole('main')

      for (const href of [
        'https://www.toei-animation.com/copyrights/',
        'https://www.viz.com/copyrights',
        'https://onepiece.fandom.com/',
        'https://hunterxhunter.fandom.com/',
        'https://it.wikipedia.org/',
        'https://creativecommons.org/licenses/by-sa/4.0/',
      ]) {
        expect(
          document.querySelector(`a[href="${CSS.escape(href)}"]`),
        ).toBeInTheDocument()
      }

      expect(main).toHaveTextContent('Eiichiro Oda')
      expect(main).toHaveTextContent('Yoshihiro Togashi')
    },
  )

  it.each(LOCALES)(
    'is sent only the lines of a series it prints in %s',
    (locale) => {
      const { copy } = legalOf(ONE_PIECE_SERIES, locale)
      const keys = Object.keys(copy.words)

      expect(keys).toContain('legal.credits')
      expect(keys).toContain('credits.wikiTerms')
      expect(
        keys.filter((key) => !/^(?:credits|legal)\./u.test(key)),
      ).toStrictEqual([])
      // Nothing of the fruits, the factions or the onboarding.
      expect(JSON.stringify(copy)).not.toContain('Kozuki')
    },
  )

  it('names no series of its own without one', () => {
    renderWithProviders(<LegalPage series={[]} />)

    expect(screen.getByRole('main')).not.toHaveTextContent('One Piece')
  })
})
