import { describe, expect, it } from 'vitest'

import { type Locale, LOCALES } from '~/i18n/locales'
import type { RecordView, Slot } from '~/lib/view/records'
import {
  bookmarkAt as at,
  gateCases,
  opened,
  recordIn,
  stageMissedAt,
} from '~/test/gates'
import { loadedSeries } from '~/test/series'

import { homePage } from './home.server'
import { drawingsFor } from './pages.server'
import { placePage } from './placePage.server'
import { factsOf } from './project.server'
import { type Reader, readerFor } from './reader.server'

const { archive } = loadedSeries('hunter-x-hunter')
const RECORDS = [
  { id: 'melody', episode: 40, chapter: 68 },
  { id: 'basho', episode: 40, chapter: 68 },
  { id: 'baise', episode: 40, chapter: 68 },
  { id: 'squala', episode: 40, chapter: 68 },
  { id: 'shachmono-tocino', episode: 40, chapter: 68 },
  { id: 'dalzollene', episode: 41, chapter: 70 },
  { id: 'neon-nostrade', episode: 41, chapter: 71 },
  { id: 'machi', episode: 41, chapter: 71 },
  { id: 'ivlenkov', episode: 42, chapter: 72 },
  { id: 'linssen', episode: 42, chapter: 72 },
  { id: 'shizuku', episode: 42, chapter: 72 },
  { id: 'uvogin', episode: 43, chapter: 74 },
  { id: 'feitan', episode: 43, chapter: 74 },
  { id: 'worm', episode: 43, chapter: 75 },
  { id: 'rabid-dog', episode: 43, chapter: 75 },
  { id: 'franklin', episode: 44, chapter: 76 },
  { id: 'porcupine', episode: 44, chapter: 76 },
  { id: 'leech', episode: 44, chapter: 76 },
  { id: 'nobunaga', episode: 45, chapter: 77 },
  { id: 'owl', episode: 45, chapter: 77 },
  { id: 'phinks', episode: 45, chapter: 78 },
  { id: 'shalnark', episode: 46, chapter: 79 },
  { id: 'light-nostrade', episode: 46, chapter: 79 },
  { id: 'zepile', episode: 48, chapter: 86 },
  { id: 'pakunoda', episode: 49, chapter: 90 },
  { id: 'zenji', episode: 51, chapter: 95 },
  { id: 'kortopi', episode: 53, chapter: 100 },
  { id: 'chrollo', episode: 54, chapter: 71 },
  { id: 'bonolenov', episode: 55, chapter: 108 },
  { id: 'eliza', episode: 56, chapter: 112 },
  { id: 'southernpiece-auction-house', episode: 48, chapter: 85 },
  { id: 'hotel-beitacle', episode: 57, chapter: 112 },
  { id: 'yorknew-city', episode: 41, chapter: 70 },
  { id: 'lingon-airport', episode: 41, chapter: 71 },
  { id: 'cemetery-building', episode: 42, chapter: 72 },
]
const CASES = gateCases(RECORDS, archive.series)

describe.each(CASES)('$id in $locale by $unit', (row) => {
  it('opens the record and drawing at its named scene, never before', () => {
    const before = readerFor(archive, row.before, row.locale)
    const reached = readerFor(archive, row.reached, row.locale)

    expect(opened(row.id, before)).toBe(false)
    expect(opened(row.id, reached)).toBe(true)
  })
})

const NEON_GUARD = 'Nostrade family, Neon’s bodyguard'

describe('the bodyguards’ dated steps', () => {
  it.each([
    { unit: 'episode', hired: 41, named: 41 },
    { unit: 'chapter', hired: 70, named: 71 },
  ])('dates each step in $unit units', ({ unit, hired, named }) => {
    const read = (count: number): Reader =>
      readerFor(archive, at(unit, count), 'en')
    const role = (id: string, count: number): string | undefined =>
      archive.roleOf(read(count), recordIn(archive, id))?.en
    const affiliation = (id: string, count: number): string | undefined =>
      factsOf(recordIn(archive, id), read(count)).affiliation

    // The three applicants Dalzollene hires.
    for (const id of ['melody', 'basho', 'baise']) {
      expect(role(id, hired - 1), id).toBe('Bodyguard applicant')
      expect(role(id, hired), id).toBe('Bodyguard')
    }
    // The two plants among them, bodyguards once they ride with Neon.
    for (const id of ['squala', 'shachmono-tocino']) {
      expect(role(id, named - 1), id).toBe('Plant among the applicants')
      expect(role(id, named), id).toBe('Bodyguard')
    }

    expect(role('kurapika', hired - 1)).toBe('Hunter')
    expect(role('kurapika', hired)).toBe('Hunter, bodyguard')

    // The family is named with Neon, so every Nostrade affiliation waits.
    for (const id of [
      'melody',
      'basho',
      'baise',
      'squala',
      'shachmono-tocino',
    ]) {
      expect(affiliation(id, named - 1), id).toBeUndefined()
      expect(affiliation(id, named), id).toBe(NEON_GUARD)
    }

    expect(affiliation('dalzollene', named - 1)).toBeUndefined()
    expect(affiliation('dalzollene', named)).toBe(
      'Nostrade family, head of Neon’s bodyguards',
    )
    expect(affiliation('kurapika', named - 1)).toBe(
      'Hunter Association, Hunter',
    )
    expect(affiliation('kurapika', named)).toMatch(/Neon’s bodyguard/u)
  })
})

function shelfOf(id: string, reader: Reader): Slot<RecordView>[] {
  const page = placePage(id, reader)
  if (page === undefined || !('detail' in page) || !page.detail.slot.open) {
    throw new Error(`Expected open place: ${id}`)
  }
  return page.detail.slot.record.dossier?.filedHere ?? []
}

describe('the shelves of the arc’s places', () => {
  const SHELVES = [
    {
      place: 'yorknew-city',
      ids: ['shizuku'],
      episodes: [41],
      chapters: [70, 71],
    },
    {
      place: 'lingon-airport',
      ids: ['ivlenkov', 'linssen'],
      episodes: [41],
      chapters: [71],
    },
  ]

  it.each(
    SHELVES.flatMap((shelf) =>
      LOCALES.flatMap((locale) => [
        {
          ...shelf,
          locale,
          unit: 'episode',
          covered: shelf.episodes,
          open: 42,
        },
        {
          ...shelf,
          locale,
          unit: 'chapter',
          covered: shelf.chapters,
          open: 72,
        },
      ]),
    ),
  )(
    'covers $place’s tiles until 42 / 72 by $unit ($locale)',
    ({ place, ids, locale, unit, covered, open }) => {
      for (const count of covered) {
        const shelf = shelfOf(
          place,
          readerFor(archive, at(unit, count), locale),
        )

        expect(shelf).toHaveLength(ids.length)

        // Exactly the handle, the kind and the thresholds: no name, no id.
        for (const slot of shelf) {
          const tile = slot.open ? undefined : slot.covered

          expect(tile?.handle).toBeTypeOf('string')
          expect({ ...tile, handle: 'opaque' }).toStrictEqual({
            handle: 'opaque',
            kind: 'character',
            revealedAtChapter: 72,
            revealedAtEpisode: 42,
          })
        }

        const text = JSON.stringify(shelf)

        for (const id of ids) {
          const record = recordIn(archive, id)

          expect(text).not.toContain(id)
          expect(text).not.toContain(record.name.en)
          expect(text).not.toContain(record.name.it)
        }
      }

      const reached = shelfOf(place, readerFor(archive, at(unit, open), locale))

      expect(
        reached.map((slot) => (slot.open ? slot.record.id : undefined)),
      ).toStrictEqual(ids)
    },
  )
})

/**
 * Every status step of the second phase, one row per unit: the status a
 * reader sees one before the step and at it. A row whose `before` is
 * `undefined` is the record's own gate. Episode 45 holds Nobunaga's trap
 * and release, and episode 47 Uvogin's second capture and his death, so
 * only a chapter reader stands between them.
 */
const STATUS_STEPS = [
  ...['baise', 'shachmono-tocino', 'ivlenkov'].flatMap((id) => [
    { id, unit: 'episode', count: 43, before: 'alive', after: 'deceased' },
    { id, unit: 'chapter', count: 73, before: 'alive', after: 'deceased' },
  ]),
  {
    id: 'dalzollene',
    unit: 'episode',
    count: 45,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'dalzollene',
    unit: 'chapter',
    count: 78,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'rabid-dog',
    unit: 'episode',
    count: 44,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'rabid-dog',
    unit: 'chapter',
    count: 76,
    before: 'alive',
    after: 'deceased',
  },
  // Worm survives Uvogin's blast. Episode 45 shows the Shadow Beasts
  // killed; chapter 78 reports them all dead, and chapter 89 counts the
  // bodies.
  {
    id: 'worm',
    unit: 'episode',
    count: 45,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'worm',
    unit: 'chapter',
    count: 78,
    before: 'alive',
    after: 'presumed-dead',
  },
  {
    id: 'worm',
    unit: 'chapter',
    count: 89,
    before: 'presumed-dead',
    after: 'deceased',
  },
  {
    id: 'leech',
    unit: 'episode',
    count: 44,
    before: undefined,
    after: 'deceased',
  },
  {
    id: 'leech',
    unit: 'chapter',
    count: 76,
    before: undefined,
    after: 'deceased',
  },
  // The manga kills Porcupine; episode 44 leaves his fate open until 45.
  {
    id: 'porcupine',
    unit: 'episode',
    count: 44,
    before: undefined,
    after: 'unknown',
  },
  {
    id: 'porcupine',
    unit: 'episode',
    count: 45,
    before: 'unknown',
    after: 'deceased',
  },
  {
    id: 'porcupine',
    unit: 'chapter',
    count: 76,
    before: undefined,
    after: 'deceased',
  },
  {
    id: 'uvogin',
    unit: 'episode',
    count: 44,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 77,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'uvogin',
    unit: 'episode',
    count: 45,
    before: 'captured',
    after: 'alive',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 78,
    before: 'captured',
    after: 'alive',
  },
  {
    id: 'uvogin',
    unit: 'episode',
    count: 47,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 82,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'uvogin',
    unit: 'chapter',
    count: 84,
    before: 'captured',
    after: 'deceased',
  },
  {
    id: 'nobunaga',
    unit: 'episode',
    count: 45,
    before: undefined,
    after: 'alive',
  },
  {
    id: 'nobunaga',
    unit: 'chapter',
    count: 77,
    before: undefined,
    after: 'captured',
  },
  {
    id: 'nobunaga',
    unit: 'chapter',
    count: 78,
    before: 'captured',
    after: 'alive',
  },
  // Episode 45 meets Owl already held. The manga reports the Shadow
  // Beasts all dead at 78 and shows him held only at 84.
  {
    id: 'owl',
    unit: 'episode',
    count: 45,
    before: undefined,
    after: 'captured',
  },
  { id: 'owl', unit: 'chapter', count: 77, before: undefined, after: 'alive' },
  {
    id: 'owl',
    unit: 'chapter',
    count: 78,
    before: 'alive',
    after: 'presumed-dead',
  },
  {
    id: 'owl',
    unit: 'chapter',
    count: 84,
    before: 'presumed-dead',
    after: 'captured',
  },
]

/** A character's status for an English reader at a bookmark. */
function statusAt(id: string, unit: string, count: number): string | undefined {
  return archive.latestOf(
    readerFor(archive, at(unit, count), 'en'),
    recordIn(archive, id),
    'status',
  )
}

describe('the deaths and captures of the auction nights', () => {
  it.each(STATUS_STEPS)(
    'pins $id’s status at $unit $count',
    ({ id, unit, count, before, after }) => {
      expect(statusAt(id, unit, count - 1)).toBe(before)
      expect(statusAt(id, unit, count)).toBe(after)
    },
  )
})

/** The third phase's status steps, in the shape of `STATUS_STEPS`. */
const LATE_STATUS_STEPS = [
  {
    id: 'squala',
    unit: 'episode',
    count: 56,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'squala',
    unit: 'chapter',
    count: 112,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'pakunoda',
    unit: 'episode',
    count: 58,
    before: 'alive',
    after: 'deceased',
  },
  {
    id: 'pakunoda',
    unit: 'chapter',
    count: 119,
    before: 'alive',
    after: 'deceased',
  },
  ...['gon-freecss', 'killua'].flatMap((id) => [
    { id, unit: 'episode', count: 49, before: 'alive', after: 'captured' },
    { id, unit: 'chapter', count: 91, before: 'alive', after: 'captured' },
    { id, unit: 'episode', count: 50, before: 'captured', after: 'alive' },
    { id, unit: 'chapter', count: 94, before: 'captured', after: 'alive' },
    { id, unit: 'episode', count: 56, before: 'alive', after: 'captured' },
    { id, unit: 'chapter', count: 111, before: 'alive', after: 'captured' },
    { id, unit: 'episode', count: 58, before: 'captured', after: 'alive' },
    { id, unit: 'chapter', count: 118, before: 'captured', after: 'alive' },
  ]),
  {
    id: 'chrollo',
    unit: 'episode',
    count: 57,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'chrollo',
    unit: 'chapter',
    count: 114,
    before: 'alive',
    after: 'captured',
  },
  {
    id: 'chrollo',
    unit: 'episode',
    count: 58,
    before: 'captured',
    after: 'alive',
  },
  {
    id: 'chrollo',
    unit: 'chapter',
    count: 118,
    before: 'captured',
    after: 'alive',
  },
]

describe('the deaths and captures of the last nights', () => {
  it.each(LATE_STATUS_STEPS)(
    'pins $id’s status at $unit $count',
    ({ id, unit, count, before, after }) => {
      expect(statusAt(id, unit, count - 1)).toBe(before)
      expect(statusAt(id, unit, count)).toBe(after)
    },
  )
})

const HIRED_BY_DONS = 'Zoldyck family; hired by the Ten Dons'

/** Each affiliation step of the third phase, read on each side. */
const AFFILIATION_STEPS = [
  ...['silva', 'zeno'].flatMap((id) => [
    {
      id,
      unit: 'episode',
      count: 51,
      before: 'Zoldyck family',
      after: HIRED_BY_DONS,
    },
    {
      id,
      unit: 'episode',
      count: 53,
      before: HIRED_BY_DONS,
      after: 'Zoldyck family',
    },
    {
      id,
      unit: 'chapter',
      count: 100,
      before: HIRED_BY_DONS,
      after: 'Zoldyck family',
    },
  ]),
  // Zeno is open from chapter 42; Silva only from 95, the step's own chapter.
  {
    id: 'zeno',
    unit: 'chapter',
    count: 95,
    before: 'Zoldyck family',
    after: HIRED_BY_DONS,
  },
  {
    id: 'silva',
    unit: 'chapter',
    count: 95,
    before: undefined,
    after: HIRED_BY_DONS,
  },
  ...[
    { unit: 'episode', count: 53 },
    { unit: 'chapter', count: 100 },
  ].map((row) => ({
    id: 'illumi',
    ...row,
    before: 'Hunter Association, Hunter',
    after: 'Hunter Association, Hunter; hired by Chrollo',
  })),
  ...[
    { unit: 'episode', count: 58 },
    { unit: 'chapter', count: 119 },
  ].map((row) => ({
    id: 'hisoka',
    ...row,
    before: 'Hunter Association, Hunter; fake member of the Phantom Troupe',
    after: 'Hunter Association, Hunter',
  })),
]

/**
 * The deaths that change a drawing: the record opens at `opens`, and the
 * status and the drawing change together at `death`, in each unit.
 */
const DRAWN_DEATHS = [
  {
    id: 'baise',
    episode: { opens: 40, death: 43 },
    chapter: { opens: 68, death: 73 },
  },
  {
    id: 'shachmono-tocino',
    episode: { opens: 40, death: 43 },
    chapter: { opens: 68, death: 73 },
  },
  {
    id: 'ivlenkov',
    episode: { opens: 42, death: 43 },
    chapter: { opens: 72, death: 73 },
  },
  {
    id: 'dalzollene',
    episode: { opens: 41, death: 45 },
    chapter: { opens: 70, death: 78 },
  },
  {
    id: 'squala',
    episode: { opens: 40, death: 56 },
    chapter: { opens: 68, death: 112 },
  },
  {
    id: 'rabid-dog',
    episode: { opens: 43, death: 44 },
    chapter: { opens: 75, death: 76 },
  },
  // Her drawing before the death is her Memory Bomb stage (56 / 112), so
  // that is the one it is held to.
  {
    id: 'pakunoda',
    episode: { opens: 56, death: 58 },
    chapter: { opens: 112, death: 119 },
  },
  // Captured again in chapter 82 alone, so a chapter reader meets the
  // grave from a capture. His drawing before the grave is his Big Bang
  // Impact stage (44 / 76), so that is the one it is held to.
  {
    id: 'uvogin',
    episode: { opens: 44, death: 47 },
    chapter: { opens: 76, death: 84, was: 'captured' },
  },
  // One stage serves both readers: deceased at episode 45, presumed dead at
  // chapter 78 (and confirmed at 89, below).
  {
    id: 'worm',
    episode: { opens: 43, death: 45 },
    chapter: { opens: 75, death: 78, now: 'presumed-dead' },
  },
].flatMap(({ id, episode, chapter }) =>
  LOCALES.flatMap((locale) => [
    { id, unit: 'episode', was: 'alive', now: 'deceased', ...episode, locale },
    { id, unit: 'chapter', was: 'alive', now: 'deceased', ...chapter, locale },
  ]),
)

describe('the deaths drawn in Yorknew City', () => {
  it.each(DRAWN_DEATHS)(
    'pins $id’s death and drawing together in $unit units ($locale)',
    ({ id, unit, opens, death, was, now, locale }) => {
      const record = recordIn(archive, id)
      const alive = readerFor(archive, at(unit, opens), locale)
      const before = readerFor(archive, at(unit, death - 1), locale)
      const reached = readerFor(archive, at(unit, death), locale)

      expect(archive.latestOf(before, record, 'status')).toBe(was)
      expect(archive.latestOf(reached, record, 'status')).toBe(now)
      expect(drawingsFor([id], before)).toStrictEqual(drawingsFor([id], alive))
      expect(drawingsFor([id], reached)).not.toStrictEqual(
        drawingsFor([id], before),
      )
    },
  )

  it.each(LOCALES)(
    'keeps Worm’s drawing when chapter 89 confirms his death (%s)',
    (locale) => {
      const worm = recordIn(archive, 'worm')
      const presumed = readerFor(archive, at('chapter', 88), locale)
      const confirmed = readerFor(archive, at('chapter', 89), locale)

      expect(archive.latestOf(presumed, worm, 'status')).toBe('presumed-dead')
      expect(archive.latestOf(confirmed, worm, 'status')).toBe('deceased')
      expect(drawingsFor(['worm'], confirmed)).toStrictEqual(
        drawingsFor(['worm'], presumed),
      )
    },
  )
})

describe('the Cemetery Building after the blast', () => {
  it.each(
    LOCALES.flatMap((locale) => [
      { unit: 'episode', opens: 42, blast: 53, locale },
      { unit: 'chapter', opens: 72, blast: 100, locale },
    ]),
  )(
    'shows the blast below it and the shaking from $unit $blast ($locale)',
    ({ unit, opens, blast, locale }) => {
      const first = readerFor(archive, at(unit, opens), locale)
      const before = readerFor(archive, at(unit, blast - 1), locale)
      const reached = readerFor(archive, at(unit, blast), locale)

      expect(drawingsFor(['cemetery-building'], before)).toStrictEqual(
        drawingsFor(['cemetery-building'], first),
      )
      expect(drawingsFor(['cemetery-building'], reached)).not.toStrictEqual(
        drawingsFor(['cemetery-building'], before),
      )
    },
  )
})

describe('Kurapika’s Dowsing Chain', () => {
  it.each(
    LOCALES.flatMap((locale) => [
      { unit: 'episode', opens: 1, chain: 40, locale },
      { unit: 'chapter', opens: 2, chain: 68, locale },
    ]),
  )(
    'replaces the wooden swords at $unit $chain ($locale)',
    ({ unit, opens, chain, locale }) => {
      const first = readerFor(archive, at(unit, opens), locale)
      const before = readerFor(archive, at(unit, chain - 1), locale)
      const reached = readerFor(archive, at(unit, chain), locale)

      expect(drawingsFor(['kurapika'], before)).toStrictEqual(
        drawingsFor(['kurapika'], first),
      )
      expect(drawingsFor(['kurapika'], reached)).not.toStrictEqual(
        drawingsFor(['kurapika'], before),
      )
    },
  )
})

// The figures in black are shown empty at Tocino's surrender, never one
// step before, in both media (#1332).
describe('the Eleven Black Children revealed', () => {
  it('empties the robes at episode 40 / chapter 68', () => {
    expect(
      stageMissedAt(archive, 'eleven-black-children', {
        episode: 40,
        chapter: 68,
      }),
    ).toStrictEqual([])
  })
})

// Each Hatsu is a stage from the pair that first shows it, never one step
// before, in both media (#1335, #1337).
describe('the Hatsu drawn for the Yorknew City records', () => {
  it.each([
    { id: 'uvogin', power: 'Big Bang Impact', episode: 44, chapter: 76 },
    { id: 'melody', power: 'her flute', episode: 44, chapter: 77 },
    { id: 'shalnark', power: 'Black Voice', episode: 53, chapter: 98 },
    { id: 'shalnark', power: 'Autopilot', episode: 96, chapter: 227 },
    { id: 'phinks', power: 'Ripper Cyclotron', episode: 96, chapter: 226 },
    { id: 'feitan', power: 'Pain Packer', episode: 97, chapter: 229 },
    { id: 'shizuku', power: 'Blinky', episode: 43, chapter: 73 },
    { id: 'pakunoda', power: 'memory reading', episode: 50, chapter: 92 },
    { id: 'pakunoda', power: 'Memory Bomb', episode: 56, chapter: 112 },
    { id: 'chrollo', power: 'Skill Hunter', episode: 55, chapter: 97 },
    { id: 'bonolenov', power: 'Battle Cantabile', episode: 96, chapter: 225 },
  ])(
    'draws $id’s $power at episode $episode / chapter $chapter',
    ({ id, episode, chapter }) => {
      expect(stageMissedAt(archive, id, { episode, chapter })).toStrictEqual([])
    },
  )
})

// Porcupine dies in the scene his record opens with in the manga, and in
// episode 45 in the anime: his drawing changes at 45 / 78, the first pair
// both media hold (#1337).
describe('Porcupine’s death drawn', () => {
  it('lays the needles down at episode 45 / chapter 78', () => {
    expect(
      stageMissedAt(archive, 'porcupine', { episode: 45, chapter: 78 }),
    ).toStrictEqual([])
  })
})

/** Owl's drawing for a reader at a bookmark. */
function owlAt(
  unit: string,
  count: number,
  locale: Locale,
): ReturnType<typeof drawingsFor> {
  return drawingsFor(['owl'], readerFor(archive, at(unit, count), locale))
}

// Chapter 78 reports the Shadow Beasts all dead and chapter 84 shows Owl
// held: two stages the manga alone tells, so an anime reader keeps the
// bundle (#1337).
describe('Owl’s manga-only stages', () => {
  it.each(LOCALES)('opens the cloth at chapter 78 (%s)', (locale) => {
    expect(owlAt('chapter', 78, locale)).not.toStrictEqual(
      owlAt('chapter', 77, locale),
    )
  })

  it.each(LOCALES)('knots it again at chapter 84 (%s)', (locale) => {
    expect(owlAt('chapter', 83, locale)).toStrictEqual(
      owlAt('chapter', 78, locale),
    )
    expect(owlAt('chapter', 84, locale)).toStrictEqual(
      owlAt('chapter', 77, locale),
    )
  })

  it.each(LOCALES)('keeps the bundle for an anime reader (%s)', (locale) => {
    expect(owlAt('episode', 148, locale)).toStrictEqual(
      owlAt('episode', 45, locale),
    )
  })
})

describe('the returning characters’ last steps', () => {
  it.each(AFFILIATION_STEPS)(
    'pins $id’s affiliation at $unit $count',
    ({ id, unit, count, before, after }) => {
      const affiliation = (n: number): string | undefined =>
        archive.latestOf(
          readerFor(archive, at(unit, n), 'en'),
          recordIn(archive, id),
          'affiliation',
        )?.en

      expect(affiliation(count - 1)).toBe(before)
      expect(affiliation(count)).toBe(after)
    },
  )
})

describe('Kurapika at the head of the bodyguards', () => {
  it.each([
    { unit: 'episode', count: 46 },
    { unit: 'chapter', count: 79 },
  ])('dates his role and affiliation in $unit units', ({ unit, count }) => {
    const read = (n: number): Reader => readerFor(archive, at(unit, n), 'en')
    const kurapika = recordIn(archive, 'kurapika')

    expect(archive.roleOf(read(count - 1), kurapika)?.en).toBe(
      'Hunter, bodyguard',
    )
    expect(archive.roleOf(read(count), kurapika)?.en).toBe(
      'Hunter, head of the bodyguards',
    )
    expect(factsOf(kurapika, read(count - 1)).affiliation).toMatch(
      /Nostrade family, Neon’s bodyguard/u,
    )
    expect(factsOf(kurapika, read(count)).affiliation).toMatch(
      /Nostrade family, head of Neon’s bodyguards/u,
    )
  })
})

describe('the home inside the arc', () => {
  it.each(['episode', 'chapter'])(
    'lists the arc’s own stories from its first one, by %s',
    (unit) => {
      // Killua's first story of the arc: episode 37, chapter 64.
      const first = unit === 'chapter' ? 64 : 37
      const inside = homePage(readerFor(archive, at(unit, first), 'en'))

      expect(inside.saga.id).toBe('yorknew-city-arc')
      expect(inside.before).toBe(false)
      expect(inside.stories.map(({ subject }) => subject.id)).toContain(
        'killua',
      )
    },
  )
})

describe('the arc’s leads', () => {
  it('names the cast row of the Yorknew City arc', () => {
    expect(archive.leads['yorknew-city-arc']).toStrictEqual([
      'kurapika',
      'gon-freecss',
      'killua',
      'leorio-paradinight',
      'melody',
    ])
  })
})
