// @vitest-environment node
//
// The suite-wide environment is jsdom for the React components. This module is
// plain Node, so a DOM here would only cost startup time.
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript, where ESLint's
// `no-undef` has no TypeScript program to learn the Vitest globals from. The
// archive is imported by path for the same reason — the `~/` alias is resolved
// from `tsconfig`, which does not cover `scripts/`.
import { readFileSync } from 'node:fs'
import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { filedArchiveOf } from '../src/data/series/index.ts'
import {
  characters as onePieceCharacters,
  dossierOf as onePieceDossierOf,
} from '../src/data/series/one-piece/characters.ts'
import { GAME_OF_THRONES_SOURCES } from './chronicle-sources-got.mjs'
import { HUNTER_X_HUNTER_SOURCES } from './chronicle-sources-hxh.mjs'
import { CHRONICLE_SOURCES } from './chronicle-sources.mjs'
import { DOC_PATH } from './chronicle-verification.mjs'

const hunter = await filedArchiveOf('hunter-x-hunter')
const thrones = await filedArchiveOf('game-of-thrones')

/** The log keeps each series' characters, dossiers and evidence together. */
const ARCHIVES = {
  'one-piece': {
    characters: onePieceCharacters,
    dossierOf: onePieceDossierOf,
    sources: CHRONICLE_SOURCES,
  },
  'hunter-x-hunter': {
    characters: hunter.characters,
    dossierOf: hunter.dossierOf,
    sources: HUNTER_X_HUNTER_SOURCES,
  },
  'game-of-thrones': {
    characters: thrones.characters,
    dossierOf: thrones.dossierOf,
    sources: GAME_OF_THRONES_SOURCES,
  },
}

/** The medium a dated story is told in, as the log prints it. */
const MEDIA = { chapter: 'books', episode: 'show' }

/** Every story with its series-qualified character id. */
const STORIES = Object.entries(ARCHIVES).flatMap(([series, archive]) =>
  archive.characters.flatMap((character) =>
    (archive.dossierOf(character)?.chronicle ?? []).map((story) => ({
      series,
      id: character.id,
      chapter: story.chapter,
      episode: story.episode,
      medium: story.source,
      dated:
        series === 'game-of-thrones' ?
          `${story.chapter} ${MEDIA[story.source] ?? 'both'}`
        : undefined,
      title: story.value.title.en,
    })),
  ),
)

const DOCUMENT = readFileSync(DOC_PATH, 'utf8')

/** The quotation marks a note quotes with: English, straight, Japanese. */
const QUOTATION_MARKS = [
  ['\u{201C}', '\u{201D}'],
  ['"', '"'],
  ['\u{300C}', '\u{300D}'],
  ['\u{2018}', '\u{2019}'],
]

/** One kana or kanji, so subtitle lines left unquoted are counted too. */
const JAPANESE = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/gu

/**
 * Every quoted span in a note, without its marks. A mark left open runs to the
 * end of the note, so a missing closer cannot hide a long quotation.
 * @param {string} note The note.
 * @returns {string[]} The quotations.
 */
function quotationsIn(note) {
  return QUOTATION_MARKS.flatMap(([open, close]) => {
    const quotations = []
    let start = note.indexOf(open)

    while (start !== -1) {
      const end = note.indexOf(close, start + 1)

      if (end === -1) {
        quotations.push(note.slice(start + 1))
        break
      }

      quotations.push(note.slice(start + 1, end))
      start = note.indexOf(open, end + 1)
    }

    return quotations
  })
}

const HEADING =
  /^## (?<name>.+) \(`(?<id>[a-z\d-]+)`, threshold ep (?<threshold>\d+)\)$/u

/** A date cell that is an episode alone. */
const EPISODE = /^(?<episode>\d+)$/u

/** A Game of Thrones date cell: an episode, a site chapter and the medium. */
const DATED = /^(?<episode>\d+) \/ (?<chapter>\d+) (?<medium>show|books|both)$/u

/**
 * A date cell read back: its episode, and for Game of Thrones its chapter and
 * medium, or `null` when the cell is not a date.
 * @param {string} cell The cell.
 * @returns {null | object} The episode and, when dated, `chapter medium`.
 */
function dateIn(cell) {
  const dated = DATED.exec(cell)
  if (dated !== null) {
    const { chapter, episode, medium } = dated.groups

    return { episode: Number(episode), dated: `${chapter} ${medium}` }
  }
  const alone = EPISODE.exec(cell)

  return alone === null ? null : { episode: Number(alone.groups.episode) }
}

/**
 * One table line read as a story row, or `null` when the line is the header,
 * the alignment rule, or not a table line at all.
 * @param {string} line The document line.
 * @param {object | undefined} section The heading groups the line sits under.
 * @returns {null | object} The row.
 */
function rowIn(line, section) {
  if (section === undefined || !line.startsWith('|')) {
    return null
  }

  const cells = line
    .slice(1, -1)
    .split('|')
    .map((cell) => cell.trim())
  const date = dateIn(cells[1] ?? '')

  if (date === null || cells.length !== 4) {
    return null
  }

  return {
    series: section.series,
    id: section.id,
    name: section.name,
    threshold: Number(section.threshold),
    ...date,
    title: cells[0],
    source: cells[2],
    note: cells[3],
  }
}

/**
 * The wiki pages each series may cite. Game of Thrones cites the show's wiki,
 * the Ice and Fire Wiki for the books, and A Wiki of Ice and Fire where it
 * could be read.
 */
const WIKI_PAGES = {
  'game-of-thrones':
    /^https:\/\/(?:(?:gameofthrones|iceandfire)\.fandom\.com\/wiki|awoiaf\.westeros\.org\/index\.php)\/\S+$/u,
  'hunter-x-hunter': /^https:\/\/hunterxhunter\.fandom\.com\/wiki\/\S+$/u,
  'one-piece': /^https:\/\/onepiece\.fandom\.com\/wiki\/\S+$/u,
}

/** The series each top-level heading opens; One Piece needs none. */
const SERIES_HEADINGS = {
  '# Game of Thrones': 'game-of-thrones',
  '# Hunter x Hunter': 'hunter-x-hunter',
}

/**
 * The document read back as rows, so a row can be matched against a story.
 * @returns {object[]} One row per table line, under the section it sits in.
 */
function rowsInDocument() {
  const rows = []
  let section
  let series = 'one-piece'

  for (const line of DOCUMENT.split('\n')) {
    const opened = SERIES_HEADINGS[line]

    if (opened !== undefined) {
      series = opened
      section = undefined
      continue
    }
    const heading = HEADING.exec(line)

    if (heading !== null) {
      section = { ...heading.groups, series }
      continue
    }
    const row = rowIn(line, section)
    if (row !== null) {
      rows.push(row)
    }
  }

  return rows
}

const ROWS = rowsInDocument()

/**
 * One comparable line per story or row, so a mismatch reads as a diff.
 * @param {object} entry A story or a row.
 * @returns {string} The line.
 */
function asLine(entry) {
  const date =
    entry.dated === undefined ?
      String(entry.episode)
    : `${entry.episode} / ${entry.dated}`

  return `${entry.series}/${entry.id} @${date} — ${entry.title}`
}

/**
 * The character the archive files under an id, if it files one.
 * @param {string} id The record's id.
 * @param {string} series The series containing that id.
 * @returns {object | undefined} The character record.
 */
function filed(id, series) {
  return ARCHIVES[series]?.characters.find((character) => character.id === id)
}

/**
 * The source a story is vouched for by, looked up the way the script does:
 * by episode and chapter, then by episode and medium, then by episode.
 * @param {object} story A story with its series and character id.
 * @returns {object | undefined} The source and note.
 */
function sourceOf(story) {
  const sources = ARCHIVES[story.series]?.sources[story.id]

  return (
    sources?.[`${story.episode}:${story.chapter}`]
    ?? sources?.[`${story.episode}:${story.medium}`]
    ?? sources?.[story.episode]
  )
}

describe('the chronicle verification log', () => {
  it('vouches for every story, and for no story the archive does not hold', () => {
    // The document is the only record of which episode page settles which
    // story. A chronicle extended without it would ship prose nobody checked.
    const inDocument = ROWS.map((row) => asLine(row)).toSorted(byString())
    const inArchive = STORIES.map((story) => asLine(story)).toSorted(byString())

    expect(inDocument).toStrictEqual(inArchive)
  })

  it('heads every section with the character the archive files', () => {
    for (const row of ROWS) {
      expect(row.name, row.id).toBe(filed(row.id, row.series)?.name.en)
      expect(row.threshold, row.id).toBe(
        filed(row.id, row.series)?.revealedAtEpisode,
      )
    }
  })

  it('cites a wiki page of its own series and a note for every story', () => {
    for (const row of ROWS) {
      expect(row.source, asLine(row)).toMatch(WIKI_PAGES[row.series])
      expect(row.note.length, asLine(row)).toBeGreaterThan(0)
    }
  })

  it('keeps the sources beside the script in step with the document', () => {
    const expected = STORIES.map((story) => {
      const source = sourceOf(story)

      return JSON.stringify([asLine(story), source?.source, source?.note])
    }).toSorted(byString())
    const actual = ROWS.map((row) =>
      JSON.stringify([asLine(row), row.source, row.note]),
    ).toSorted(byString())

    expect(actual).toStrictEqual(expected)
  })

  it('quotes a source only as far as a name or a threshold needs', () => {
    // A note records what the wiki, the manga or the subtitles show, in its own
    // words. Two short quotations are left for a name or a line an episode
    // turns on (#738); anything longer goes back to paraphrase.
    for (const row of ROWS) {
      const quotations = quotationsIn(row.note)

      expect(quotations.length, asLine(row)).toBeLessThanOrEqual(2)

      for (const quotation of quotations) {
        const words = quotation.split(/\s+/u).filter(Boolean)

        expect(words.length, quotation).toBeLessThanOrEqual(12)
        expect(quotation.length, quotation).toBeLessThanOrEqual(80)
      }
    }
  })

  it('leaves no subtitle line unquoted', () => {
    // Japanese has no spaces to count words by, and a cue copied without
    // marks escapes the quotation count. Outside 「」 a note keeps only speaker
    // labels and names.
    for (const row of ROWS) {
      const quoted = quotationsIn(row.note).join('').match(JAPANESE) ?? []
      const all = row.note.match(JAPANESE) ?? []

      expect(all.length - quoted.length, asLine(row)).toBeLessThanOrEqual(30)
    }
  })
})
