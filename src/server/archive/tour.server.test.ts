import { describe, expect, it } from 'vitest'

import type { SeriesArchive } from '~/data/types'
import type { Gated } from '~/lib/progress/spoiler'
import type { TourView } from '~/lib/view/tour'
import { LOADED_SERIES, loadedSeries } from '~/test/series'

import { demoArcs, demoCast } from './onboarding.server'
import { readerFor } from './reader.server'
import { bondsOf, tourPage } from './tour.server'

/** Whether a gate is inside the series' demo, by the landing's own rule. */
function demoOf(archive: SeriesArchive): (gated: Gated) => boolean {
  const { demoLastChapter, demoLastEpisode } = archive.series
  return (gated) =>
    gated.source === undefined
    && gated.revealedAtEpisode <= demoLastEpisode
    && gated.revealedAtChapter <= demoLastChapter
}

/** A gate's two numbers, to compare a step with the filed entry it came from. */
function thresholdsOf(gated: Gated): [number, number] {
  return [gated.revealedAtEpisode, gated.revealedAtChapter]
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
    ({ archive, inDemo, tour }) => {
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
      expect(tour.fogged).toBeLessThan(archive.entities.length)
    },
  )

  // One Piece's tour runs through Enies Lobby (owner, 2026-11-28), its cards'
  // redrawings with it: about 47,000 characters.
  it.each(TOURS)('keeps the tour of $slug small', ({ tour }) => {
    expect(JSON.stringify(tour).length).toBeLessThan(54_000)
  })

  it('follows one lead’s list through the demo, and covers the Nen abilities', () => {
    const tour = tourPage(
      readerFor(loadedSeries('hunter-x-hunter').archive, null, 'en'),
    )

    expect(tour.cast.map(({ id }) => id)).toContain(tour.bonds?.of)
    expect(tour.bonds?.snapshots.length).toBeGreaterThan(1)
    expect(tour.covered.length).toBeGreaterThan(0)
    expect(new Set(tour.covered.map(({ kind }) => kind))).toStrictEqual(
      new Set(['ability']),
    )
  })

  // The payload carries thresholds only, so its own gates cannot tell a
  // single-source snapshot from one both media tell: read the filed archive,
  // for every lead of every demo, Gon's source-only snapshots among them.
  it('drops the relationship snapshots only one medium tells', () => {
    let dropped = 0
    for (const { archive } of LOADED_SERIES) {
      const { demoLastChapter, demoLastEpisode } = archive.series
      const r = readerFor(archive, null, 'en')
      const leads = demoCast(demoArcs(r), r)
      for (const lead of leads) {
        const filed = archive
          .datedOf(lead, 'relationships')
          .filter(
            ({ gate }) =>
              gate.revealedAtEpisode <= demoLastEpisode
              && gate.revealedAtChapter <= demoLastChapter,
          )
        const both = filed.filter(({ gate }) => gate.source === undefined)
        dropped += filed.length - both.length

        expect(
          bondsOf(lead, r).snapshots.map((snapshot) => thresholdsOf(snapshot)),
        ).toStrictEqual(both.map(({ gate }) => thresholdsOf(gate)))
      }
    }

    expect(dropped).toBeGreaterThan(0)
  })

  it('sends a list of people and covered tiles only where a step shows them', () => {
    for (const { archive } of LOADED_SERIES) {
      const tour = tourPage(readerFor(archive, null, 'en'))
      const shown = archive.series.features.nen

      expect(tour.bonds !== undefined).toBe(shown)
      expect(tour.covered.length > 0).toBe(shown)
    }
  })
})
