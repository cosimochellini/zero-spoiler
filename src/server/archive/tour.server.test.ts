import { describe, expect, it } from 'vitest'

import type { SeriesArchive } from '~/data/types'
import type { Gated } from '~/lib/progress/spoiler'
import type { TourView } from '~/lib/view/tour'
import { LOADED_SERIES, loadedSeries } from '~/test/series'

import { readerFor } from './reader.server'
import { tourPage } from './tour.server'

/** Whether a gate is inside the series' demo, by the landing's own rule. */
function demoOf(archive: SeriesArchive): (gated: Gated) => boolean {
  const { demoLastChapter, demoLastEpisode } = archive.series
  return (gated) =>
    gated.source === undefined
    && gated.revealedAtEpisode <= demoLastEpisode
    && gated.revealedAtChapter <= demoLastChapter
}

/** Every gate the tour opens: cards, their dated facts, the people and links. */
function gatesOf(tour: TourView): Gated[] {
  return [
    ...tour.cast.flatMap((card) => [
      card,
      ...card.affiliation,
      ...card.bounty,
      ...card.drawings,
      ...card.epithet,
      ...card.role,
    ]),
    ...(tour.bonds?.people ?? []),
    ...(tour.bonds?.snapshots ?? []),
  ]
}

const TOURS = LOADED_SERIES.map(({ archive }) => ({
  archive,
  inDemo: demoOf(archive),
  slug: archive.series.slug,
  tour: tourPage(readerFor(archive, null, 'it')),
}))

describe('the hub tour', () => {
  it.each(TOURS)('finds every card $slug picks', ({ tour }) => {
    expect(tour.cast.length).toBeGreaterThan(0)
  })

  it.each(TOURS)('opens nothing of $slug past the demo', ({ inDemo, tour }) => {
    expect(gatesOf(tour).filter((gated) => !inDemo(gated))).toStrictEqual([])
  })

  it.each(TOURS)(
    'says of a covered record of $slug its kind and where it opens, and no more',
    ({ inDemo, tour }) => {
      expect(tour.covered.length).toBeGreaterThan(0)
      expect(tour.covered.filter((covered) => inDemo(covered))).toStrictEqual(
        [],
      )
      expect(
        tour.covered.map(
          ({ handle, kind, revealedAtChapter, revealedAtEpisode }) => ({
            handle,
            kind,
            revealedAtChapter,
            revealedAtEpisode,
          }),
        ),
      ).toStrictEqual(tour.covered)
      expect(tour.fogged).toBeGreaterThan(0)
      expect(tour.fogged).toBeLessThan(tour.total)
    },
  )

  it.each(TOURS)('keeps the tour of $slug small', ({ tour }) => {
    expect(JSON.stringify(tour).length).toBeLessThan(40_000)
  })

  it('follows one lead’s list through the demo, and covers the Nen abilities', () => {
    const tour = tourPage(
      readerFor(loadedSeries('hunter-x-hunter').archive, null, 'en'),
    )

    expect(tour.cast.map(({ id }) => id)).toContain(tour.bonds?.of)
    expect(tour.bonds?.snapshots.length).toBeGreaterThan(1)
    expect(new Set(tour.covered.map(({ kind }) => kind))).toStrictEqual(
      new Set(['ability']),
    )
  })
})
