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

// Every stage of chapters 340–370 (#1154), at the chapter the wiki gives it.
const STAGES = [
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
]

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
