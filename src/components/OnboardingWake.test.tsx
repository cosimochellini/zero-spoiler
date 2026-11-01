import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import type { DemoDrawings, OnboardingView } from '~/lib/view/records'
import { coveredRecord } from '~/test/fixtures'
import { renderWithProviders, settle } from '~/test/providers'

import { OnboardingLanding } from './OnboardingLanding'

describe('demo drawing section', () => {
  it('loads the demo once on viewport entry and changes drawing steps locally', async () => {
    let enter: (() => void) | undefined
    const observe = vi.fn<(target: Element) => void>()
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe = observe
        constructor(notify: (entries: { isIntersecting: boolean }[]) => void) {
          enter = () => {
            notify([{ isIntersecting: true }])
          }
        }
        disconnect(): void {
          /* No browser observer exists in this fixture. */
        }
      },
    )
    const view: OnboardingView = {
      arcs: [
        {
          id: 'romance-dawn',
          kind: 'arc',
          name: 'Romance Dawn',
          revealedAtEpisode: 1,
          revealedAtChapter: 1,
          affiliation: [],
          bounty: [],
          epithet: [],
        },
      ],
      cast: [],
      places: [],
      chapterAt: [1, 2, 3],
      fogged: 0,
      start: null,
      tail: [],
    }
    const drawings: DemoDrawings = {
      'romance-dawn': [
        {
          revealedAtEpisode: 1,
          revealedAtChapter: 1,
          value: { strokes: [{ d: 'M1 2 L3 4' }], tint: 'orange' },
        },
        {
          revealedAtEpisode: 3,
          revealedAtChapter: 3,
          value: { strokes: [{ d: 'M5 6 L7 8' }], tint: 'orange' },
        },
      ],
    }
    const load = vi
      .fn<() => Promise<DemoDrawings>>()
      .mockResolvedValue(drawings)
    try {
      const { container, unmount } = renderWithProviders(
        <OnboardingLanding
          {...view}
          loadDrawings={load}
        />,
      )
      await settle()

      expect(observe).toHaveBeenCalledTimes(1)
      expect(load).not.toHaveBeenCalled()

      act(() => {
        enter?.()
      })
      await waitFor(() => {
        expect(
          container.querySelector('path[d="M1 2 L3 4"]'),
        ).toBeInTheDocument()
      })
      fireEvent.change(screen.getByRole('slider'), { target: { value: '3' } })

      expect(container.querySelector('path[d="M5 6 L7 8"]')).toBeInTheDocument()
      expect(
        container.querySelector('path[d="M1 2 L3 4"]'),
      ).not.toBeInTheDocument()
      expect(load).toHaveBeenCalledTimes(1)

      unmount()
      const { container: backContainer } = renderWithProviders(
        <OnboardingLanding
          {...view}
          loadDrawings={load}
        />,
      )
      act(() => {
        enter?.()
      })
      await waitFor(() => {
        expect(
          backContainer.querySelector('path[d="M1 2 L3 4"]'),
        ).toBeInTheDocument()
      })

      expect(load).toHaveBeenCalledTimes(1)
    } finally {
      vi.unstubAllGlobals()
    }
  })

  it('leaves out the places shelf and the tail when there are none', () => {
    const place = {
      id: 'shells-town',
      kind: 'place' as const,
      name: 'Shells Town',
      revealedAtEpisode: 2,
      revealedAtChapter: 3,
      affiliation: [],
      bounty: [],
      epithet: [],
    }
    const view: OnboardingView = {
      arcs: [],
      cast: [],
      places: [],
      chapterAt: [1, 2, 3],
      fogged: 1,
      start: null,
      tail: [],
    }
    const { unmount } = renderWithProviders(<OnboardingLanding {...view} />)

    expect(
      screen.queryByRole('heading', { name: 'Places and ships' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'After East Blue' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/more entries stay under fog/u),
    ).not.toBeInTheDocument()

    unmount()
    renderWithProviders(
      <OnboardingLanding
        {...view}
        places={[place]}
        tail={[coveredRecord()]}
      />,
    )

    expect(
      screen.getByRole('heading', { name: 'Places and ships' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'After East Blue' }),
    ).toBeInTheDocument()
  })
})
