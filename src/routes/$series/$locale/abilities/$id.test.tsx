import { screen } from '@testing-library/react'
import type { ReactElement } from 'react'
import { describe, expect, it } from 'vitest'

import type { Locale } from '~/i18n/locales'
import { HUNTER_X_HUNTER_SERIES, ONE_PIECE_SERIES } from '~/lib/progress/series'
import type { AbilityView } from '~/lib/view/abilities'
import type { Slot } from '~/lib/view/records'
import {
  ability,
  coveredSlot,
  openSlot,
  peekPending,
  untypedAbility,
} from '~/test/fixtures'
import { renderUnderSeries } from '~/test/providers'

import { Route } from './$id'
import { AbilityStage, UsersBand } from './-$id.stage'

/** The stage and the users band of one slot, under Hunter x Hunter. */
async function renderPage(
  slot: Slot<AbilityView>,
  locale: Locale = 'en',
): Promise<void> {
  await renderUnderSeries(
    <>
      <AbilityStage
        peek={peekPending()}
        slot={slot}
      />
      <UsersBand slot={slot} />
    </>,
    {
      locale,
      path: `/hunter-x-hunter/${locale}/abilities/test-ability`,
      series: HUNTER_X_HUNTER_SERIES,
    },
  )
}

describe('an ability’s page', () => {
  it('names an open ability, its Nen type and its users', async () => {
    await renderPage(openSlot(ability()))

    expect(
      screen.getByRole('heading', { level: 1, name: 'Rock Fist' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Nen type · Enhancer')).toBeInTheDocument()
    expect(screen.getByText('Ability')).toBeInTheDocument()
    expect(
      screen.getByRole('region', { name: 'Who uses it' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Test User/u })).toHaveAttribute(
      'href',
      '/hunter-x-hunter/en/characters/test-user',
    )
  })

  it('prints no type chip for an ability with none told', async () => {
    await renderPage(openSlot(untypedAbility()))

    expect(screen.queryByText(/Nen type/u)).not.toBeInTheDocument()
  })

  it('says that no reached character uses it yet', async () => {
    await renderPage(openSlot(ability({ users: [] })), 'it')

    expect(
      screen.getByText('Nessun personaggio a cui sei arrivato la usa.'),
    ).toBeInTheDocument()
  })

  it('keeps everything but the promise under fog', async () => {
    await renderPage(coveredSlot({ kind: 'ability', revealedAtEpisode: 44 }))

    expect(screen.getByText('An ability under fog')).toBeInTheDocument()
    expect(screen.queryByText('Rock Fist')).not.toBeInTheDocument()
    expect(screen.getByText(/First shown in episode 44/u)).toBeInTheDocument()
    expect(
      screen.queryByRole('region', { name: 'Who uses it' }),
    ).not.toBeInTheDocument()
  })
})

/** The ability route's own 404, as the router renders it. */
function AbilityNotFound(): ReactElement {
  const NotFound = Route.options.notFoundComponent
  if (NotFound === undefined) {
    throw new TypeError('the ability route has no 404')
  }

  return (
    <NotFound
      data={undefined}
      isNotFound
      routeId="/$series/$locale/abilities/$id"
    />
  )
}

describe('an ability address that is not found', () => {
  // Its own 404 links back to the index, which only a series that files the
  // kind has; any other series gets the router's plain one.
  it.each([
    {
      series: HUNTER_X_HUNTER_SERIES,
      said: 'Ability not found',
      back: ['/hunter-x-hunter/en/abilities'],
    },
    { series: ONE_PIECE_SERIES, said: 'Not Found', back: [] },
  ])('says $said on $series.slug', async ({ series, said, back }) => {
    await renderUnderSeries(<AbilityNotFound />, {
      path: `/${series.slug}/en/abilities/missing`,
      series,
    })

    expect(screen.getByText(said)).toBeInTheDocument()
    expect(
      screen.queryAllByRole('link').map((link) => link.getAttribute('href')),
    ).toStrictEqual(back)
  })
})
