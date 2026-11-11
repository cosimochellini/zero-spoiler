import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_SERIES } from '~/lib/progress/series'
import { facts } from '~/test/fixtures'
import { renderUnderSeries, renderWithProviders } from '~/test/providers'

import { CharacterFacts } from './CharacterFacts'

/**
 * The rows, the labels and the digit grouping. Which fact the reader has
 * reached is decided on the server now, and is asserted there:
 * `src/server/archive/facts.test.ts`.
 */
describe('CharacterFacts', () => {
  it('shows a row for each fact it is given, and none for the rest', () => {
    renderWithProviders(
      <CharacterFacts facts={facts({ affiliation: 'Straw Hat Pirates' })} />,
    )

    expect(screen.getByText('Affiliation')).toBeInTheDocument()
    expect(screen.getByText('Straw Hat Pirates')).toBeInTheDocument()
    // A fact with no value is not a row: an empty "Bounty" line would say
    // that a bounty is coming, which is itself a spoiler.
    expect(screen.queryByText('Origin')).not.toBeInTheDocument()
    expect(screen.queryByText('Epithet')).not.toBeInTheDocument()
    expect(screen.queryByText('Bounty')).not.toBeInTheDocument()
    expect(screen.queryByText('Status')).not.toBeInTheDocument()
    expect(screen.queryByText(/Berry/u)).not.toBeInTheDocument()
  })

  it('groups a bounty’s digits the English way in English', () => {
    renderWithProviders(
      <CharacterFacts facts={facts({ bounty: 30_000_000 })} />,
    )

    expect(screen.getByText('30,000,000 Berry')).toBeInTheDocument()
  })

  it('groups them the Italian way in Italian', () => {
    renderWithProviders(
      <CharacterFacts
        facts={facts({ bounty: 100_000_000, epithet: 'Cappello di Paglia' })}
      />,
      { locale: 'it' },
    )

    expect(screen.getByText('Taglia')).toBeInTheDocument()
    expect(screen.getByText('100.000.000 Berry')).toBeInTheDocument()
    expect(screen.getByText('Cappello di Paglia')).toBeInTheDocument()
  })

  it('prints what became of the character before every other fact', () => {
    renderWithProviders(
      <CharacterFacts
        facts={facts({ status: 'deceased', bounty: 30_000_000 })}
      />,
    )

    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Deceased')).toBeInTheDocument()
    // First in the ledger: it is the fact the rest of the dossier is read
    // against, and a row that moved would move on every character at once.
    expect(screen.getAllByRole('term')[0]).toHaveTextContent('Status')
  })

  it('says the state in Italian without agreeing with a gender', () => {
    renderWithProviders(
      <CharacterFacts facts={facts({ status: 'presumed-dead' })} />,
      { locale: 'it' },
    )

    expect(screen.getByText('Stato')).toBeInTheDocument()
    expect(screen.getByText('Morte presunta')).toBeInTheDocument()
  })

  it('links each seat to its body on the ranks page', async () => {
    await renderUnderSeries(
      <CharacterFacts
        facts={facts({
          seats: [
            {
              id: 'straw-hat-pirates',
              title: 'Captain',
              body: 'Straw Hat Pirates',
            },
            { id: 'emperors', title: 'Emperor' },
          ],
          bounty: 3_000_000_000,
        })}
      />,
      {
        path: '/one-piece/en/characters/monkey-d-luffy',
        series: ONE_PIECE_SERIES,
      },
    )

    // A crew's title needs its crew; a council's title names it already.
    expect(
      screen
        .getAllByRole('link')
        .map((link) => [link.textContent, link.getAttribute('href')]),
    ).toStrictEqual([
      [
        'Captain, Straw Hat Pirates',
        '/one-piece/en/ranks#ranks-straw-hat-pirates',
      ],
      ['Emperor', '/one-piece/en/ranks#ranks-emperors'],
    ])
    // First of One Piece's own rows, after the facts every series has.
    expect(
      screen.getAllByRole('term').map((term) => term.textContent),
    ).toStrictEqual(['Ranks', 'Bounty'])
  })

  it.each([
    ['en', 'Nen type', 'Transmuter'],
    ['it', 'Tipo di Nen', 'Trasformazione'],
    ['en', 'Nen type', 'Not yet known'],
  ] as const)(
    'prints Hunter x Hunter’s Nen type in %s as %s: %s',
    async (locale, label, value) => {
      await renderUnderSeries(
        <CharacterFacts
          facts={facts({
            status: 'alive',
            nen: value === 'Not yet known' ? 'unknown' : 'transmuter',
          })}
        />,
        {
          locale,
          path: `/hunter-x-hunter/${locale}/characters/killua`,
          series: HUNTER_X_HUNTER_SERIES,
        },
      )

      expect(
        screen.getAllByRole('term').map((term) => term.textContent),
      ).toStrictEqual([locale === 'it' ? 'Stato' : 'Status', label])
      expect(screen.getByText(value)).toBeInTheDocument()
    },
  )

  it.each([
    ['en', 'Abilities'],
    ['it', 'Abilità'],
  ] as const)(
    'links Hunter x Hunter’s abilities in %s under %s',
    async (locale, label) => {
      await renderUnderSeries(
        <CharacterFacts
          facts={facts({
            nen: 'enhancer',
            abilities: [
              { id: 'rock-fist', name: 'Rock Fist' },
              { id: 'paper-blade', name: 'Paper Blade' },
            ],
          })}
        />,
        {
          locale,
          path: `/hunter-x-hunter/${locale}/characters/gon-freecss`,
          series: HUNTER_X_HUNTER_SERIES,
        },
      )

      expect(
        screen.getAllByRole('term').map((term) => term.textContent),
      ).toStrictEqual([locale === 'it' ? 'Tipo di Nen' : 'Nen type', label])
      expect(
        screen
          .getAllByRole('link')
          .map((link) => [link.textContent, link.getAttribute('href')]),
      ).toStrictEqual([
        ['Rock Fist', `/hunter-x-hunter/${locale}/abilities/rock-fist`],
        ['Paper Blade', `/hunter-x-hunter/${locale}/abilities/paper-blade`],
      ])
    },
  )

  it('prints no Nen row on a Hunter x Hunter page without a type', async () => {
    await renderUnderSeries(
      <CharacterFacts facts={facts({ status: 'alive' })} />,
      {
        path: '/hunter-x-hunter/en/characters/mito-freecss',
        series: HUNTER_X_HUNTER_SERIES,
      },
    )

    expect(screen.queryByText('Nen type')).not.toBeInTheDocument()
  })

  it('renders nothing at all when the reader has reached no fact', () => {
    const { container } = renderWithProviders(
      <CharacterFacts facts={facts()} />,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
