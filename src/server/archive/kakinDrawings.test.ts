import { describe, expect, it } from 'vitest'

import { LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { drawingsFor } from './pages.server'
import { readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'hunter-x-hunter')
if (series === undefined) {
  throw new Error('Kakin drawing tests require Hunter x Hunter')
}
const { archive } = series

// Every stage of chapters 340–420 (#1154, #1156, #1158), at the chapter the
// wiki gives it.
const STAGES = [
  { id: 'pariston-hill', chapter: 340, change: 'allegiance to Beyond' },
  { id: 'mizaistom-nana', chapter: 343, change: 'Cross Game' },
  { id: 'ging-freecss', chapter: 347, change: 'remote punch' },
  { id: 'saiyu', chapter: 348, change: 'spy for Beyond' },
  { id: 'chrollo', chapter: 353, change: 'disguise' },
  { id: 'hisoka', chapter: 357, change: 'return' },
  { id: 'shalnark', chapter: 357, change: 'death' },
  { id: 'kortopi', chapter: 357, change: 'death' },
  { id: 'momoze-hui-guo-rou', chapter: 361, change: 'beast' },
  { id: 'halkenburg-hui-guo-rou', chapter: 361, change: 'beast' },
  { id: 'benjamin-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'camilla-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'zhang-lei-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'tserriednich-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'tubeppa-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'tyson-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'luzurus-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'sale-sale-hui-guo-rou', chapter: 362, change: 'beast' },
  { id: 'vincent', chapter: 364, change: 'death' },
  { id: 'marayam-hui-guo-rou', chapter: 366, change: 'beast' },
  { id: 'momoze-hui-guo-rou', chapter: 368, change: 'death' },
  { id: 'hanzo', chapter: 372, change: 'Hanzo Skill 4' },
  { id: 'benjamin-hui-guo-rou', chapter: 373, change: 'Benjamin Baton' },
  { id: 'camilla-hui-guo-rou', chapter: 373, change: 'Cat’s Name' },
  { id: 'fugetsu-hui-guo-rou', chapter: 374, change: 'door' },
  { id: 'zhang-lei-hui-guo-rou', chapter: 374, change: 'coin' },
  { id: 'myuhan', chapter: 376, change: 'death' },
  { id: 'neon-nostrade', chapter: 377, change: 'presumed death' },
  { id: 'sale-sale-hui-guo-rou', chapter: 381, change: 'beast eaten' },
  { id: 'sale-sale-hui-guo-rou', chapter: 382, change: 'death' },
  { id: 'halkenburg-hui-guo-rou', chapter: 382, change: 'bow' },
  { id: 'kacho-hui-guo-rou', chapter: 383, change: 'death and beast' },
  { id: 'tserriednich-hui-guo-rou', chapter: 385, change: 'Laplace Devil' },
  { id: 'sarasa', chapter: 397, change: 'death' },
  { id: 'terebellum', chapter: 399, change: 'Sweet Home' },
  { id: 'longhi', chapter: 401, change: 'Moonlight Act' },
  { id: 'halkenburg-hui-guo-rou', chapter: 404, change: 'death' },
  { id: 'bonolenov', chapter: 405, change: 'Metamorphosen' },
  { id: 'lynch-fullbokko', chapter: 405, change: 'death' },
  { id: 'morena', chapter: 408, change: 'Carnival Orphan' },
  { id: 'borksen', chapter: 410, change: 'Heil-Ly' },
  { id: 'woble-hui-guo-rou', chapter: 412, change: 'missing' },
  { id: 'furykov', chapter: 415, change: 'Combo Master' },
  { id: 'fukataki', chapter: 416, change: 'death' },
]

/** Neon's status as a reader at a bookmark sees it. */
function neonStatusAt(
  bookmark: Bookmark,
  locale: (typeof LOCALES)[number],
): string | undefined {
  const character = archive.getCharacter('neon-nostrade')
  if (character === undefined) {
    throw new Error('Missing character neon-nostrade')
  }
  return archive.latestOf(
    readerFor(archive, bookmark, locale),
    character,
    'status',
  )
}

function inChapter(chapter: number): Bookmark {
  return { mode: 'chapter', chapter }
}

function inEpisode(episode: number): Bookmark {
  return { mode: 'episode', episode }
}

/** One record's drawing at a bookmark, or nothing while it is closed. */
function drawingAt(
  id: string,
  bookmark: Bookmark,
  locale: (typeof LOCALES)[number],
): ReturnType<typeof drawingsFor>[string] | undefined {
  return drawingsFor([id], readerFor(archive, bookmark, locale))[id]
}

describe('Chrollo’s disguise', () => {
  it.each(LOCALES)('ends with the fight, in %s', (locale) => {
    // A temporary costume: from chapter 357 he is in his coat again, his
    // first drawing, and never before.
    const coat = drawingAt('chrollo', inChapter(352), locale)

    expect(drawingAt('chrollo', inChapter(357), locale)).toStrictEqual(coat)
    expect(drawingAt('chrollo', inChapter(356), locale)).not.toStrictEqual(coat)
  })
})

describe('Salé-salé’s beast', () => {
  it.each(LOCALES)('is gone when Predator eats it, in %s', (locale) => {
    // Chapter 381 is his first drawing again; the beast showed from 362.
    const first = drawingAt('sale-sale-hui-guo-rou', inChapter(361), locale)

    expect(
      drawingAt('sale-sale-hui-guo-rou', inChapter(381), locale),
    ).toStrictEqual(first)
  })
})

describe('Neon’s presumed death', () => {
  it.each(LOCALES)('is filed at its stage’s chapter, in %s', (locale) => {
    expect(neonStatusAt(inChapter(376), locale)).toBe('alive')
    expect(neonStatusAt(inChapter(377), locale)).toBe('presumed-dead')
    expect(neonStatusAt(inEpisode(148), locale)).toBe('alive')
  })
})

describe.each(STAGES)('$id’s $change drawing', ({ id, chapter }) => {
  it.each(LOCALES)('changes at its chapter, never before, in %s', (locale) => {
    expect(drawingAt(id, inChapter(chapter), locale)).toBeDefined()
    expect(drawingAt(id, inChapter(chapter), locale)).not.toStrictEqual(
      drawingAt(id, inChapter(chapter - 1), locale),
    )
  })

  it.each(LOCALES)('never reaches an anime reader, in %s', (locale) => {
    // The anime ends at episode 148 before Kakin: a returning record keeps
    // the drawing it had, and a Kakin record stays closed.
    const last = drawingAt(id, inEpisode(148), locale)

    expect(last).toStrictEqual(drawingAt(id, inEpisode(147), locale))
    expect(last).not.toStrictEqual(drawingAt(id, inChapter(chapter), locale))
  })
})
