import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import type { Locale } from '~/i18n/locales'
import { HUNTER_X_HUNTER_SERIES } from '~/lib/progress/series'
import type { AbilityParams } from '~/lib/search/abilityParams'
import type { AbilitySheetView } from '~/lib/view/abilities'
import {
  ability,
  coveredRecord,
  peekPending,
  untypedAbility,
} from '~/test/fixtures'
import { renderUnderSeries } from '~/test/providers'

import { AbilityAlbum } from './AbilityAlbum'

const ROCK = ability()
const GLOW = untypedAbility({
  id: 'glow',
  name: 'Glow',
  folded: 'glow',
  users: [
    { id: 'first-user', name: 'First User', visual: ROCK.visual },
    { id: 'second-user', name: 'Second User', visual: ROCK.visual },
  ],
  aliases: ['first user', 'second user'],
})

/** Two plates and two covered abilities, as a reader mid-story meets them. */
const SHEET: AbilitySheetView = {
  bands: [
    { nen: 'enhancer', open: [ROCK] },
    { nen: null, open: [GLOW] },
  ],
  covered: [
    coveredRecord({ handle: 'hxh-9', kind: 'ability' }),
    coveredRecord({ handle: 'hxh-10', kind: 'ability' }),
  ],
  filed: 4,
}

/** The album under Hunter x Hunter, with the picks it is given. */
async function renderAlbum(
  params: AbilityParams = {},
  locale: Locale = 'en',
): Promise<{
  onParams: ReturnType<
    typeof vi.fn<(next: AbilityParams, replace: boolean) => void>
  >
}> {
  const onParams = vi.fn<(next: AbilityParams, replace: boolean) => void>()
  await renderUnderSeries(
    <AbilityAlbum
      onParams={onParams}
      params={params}
      peek={peekPending()}
      sheet={SHEET}
    />,
    {
      locale,
      path: `/hunter-x-hunter/${locale}/abilities`,
      series: HUNTER_X_HUNTER_SERIES,
    },
  )

  return { onParams }
}

/** The headings of the plates and the fog band, in order. */
function headings(): (null | string)[] {
  return screen
    .getAllByRole('heading', { level: 2 })
    .map((heading) => heading.textContent)
}

describe('AbilityAlbum', () => {
  it('sets a plate per Nen type, the untyped plate, then one fog band', async () => {
    await renderAlbum()

    expect(headings()).toStrictEqual([
      'Enhancer',
      'Type not told',
      '2 under fog',
    ])
    expect(
      screen.getByText(
        'Abilities the story shows before it tells their Nen type.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Rock Fist/u })).toHaveAttribute(
      'href',
      '/hunter-x-hunter/en/abilities/test-ability',
    )
  })

  it('says only a number and a threshold under the fog, never a type', async () => {
    await renderAlbum()
    const fog = screen.getByRole('region', { name: '2 under fog' })

    expect(within(fog).getByText('Ability 01')).toBeInTheDocument()
    expect(within(fog).getByText('Ability 02')).toBeInTheDocument()
    expect(fog).not.toHaveTextContent('Enhancer')
    expect(within(fog).queryAllByRole('link')).toStrictEqual([])
  })

  it('finds an ability by a user, and shows that user', async () => {
    await renderAlbum({ q: 'second' })

    expect(
      screen.queryByRole('link', { name: /Rock Fist/u }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Second User/u })).toHaveAttribute(
      'href',
      '/hunter-x-hunter/en/characters/second-user',
    )
  })

  it('keeps one plate for a picked type, and every plate for one not reached', async () => {
    await renderAlbum({ type: 'none' })

    expect(headings()).toStrictEqual(['Type not told', '2 under fog'])
  })

  it('shows every plate for a type no open ability has', async () => {
    await renderAlbum({ type: 'conjurer' })

    expect(headings()).toStrictEqual([
      'Enhancer',
      'Type not told',
      '2 under fog',
    ])
  })

  it('moves the address when a chip is picked', async () => {
    const { onParams } = await renderAlbum({ q: 'rock' })

    await userEvent.click(screen.getByRole('radio', { name: /Enhancer/u }))

    expect(onParams).toHaveBeenCalledWith(
      { q: 'rock', type: 'enhancer' },
      false,
    )
  })

  it('leaves every plate in the address for "all"', async () => {
    const { onParams } = await renderAlbum({ type: 'enhancer' })

    await userEvent.click(screen.getByRole('radio', { name: /All/u }))

    expect(onParams).toHaveBeenCalledWith({}, false)
  })

  it('speaks Italian on an Italian page', async () => {
    await renderAlbum({}, 'it')

    expect(headings()).toStrictEqual([
      'Potenziamento',
      'Tipo non rivelato',
      '2 nella nebbia',
    ])
  })
})
