// Checks every record's `revealedAtChapter` against the One Piece Wiki
// (onepiece.fandom.com), the way the episode thresholds were checked by hand:
// the infobox of a character, place or ship page carries `| first = [[Chapter
// N]]; [[Episode M]]`, an arc page renders `Manga Chapters: N-M`, and a fruit
// is named in the summary of the chapter that names it.
//
// The wiki's chapter is a floor, not the threshold itself: it is the first
// appearance, and a record is filed where it is named and seen, which can be
// later. So a chapter filed below the wiki's is wrong and the script fails on
// it; one filed above is kept and only listed, and whether it is the chapter
// that names the record is a reader's check, not this script's. For a fruit
// the floor rises to the first chapter whose wiki summary says who ate it or
// what it is (`namingChapterOf`, or `NAMED_AT` where that was checked by
// hand), because a fruit is filed where it is named, not where it is first
// used. A fruit's chapter is derived from the dossier
// entry that names it (`src/data/series/one-piece/entities.ts`), so a too-low fruit is
// fixed by pinning `chapter:` on that entry, not here.
//
// Episodes are read from the same line and fail the same way: a record
// filed below the wiki's first episode opens before the anime shows it,
// unless a hand check found the wiki late (`EPISODE_KEPT`, issue #175).
//
// Game of Thrones reads its two media on two wikis (`wiki.en` and
// `wiki.episodes` in the series list). A Wiki of Ice and Fire has no "first
// appearance" field, so a character's chapter floor is the first chapter page
// that links it, by its title or a redirect to it, or else
// the earliest chapter its page cites (`{{Ref|AGOT|22}}`). The Game of
// Thrones Wiki's infobox names the first episode by title (`| First =
// "[[Lord Snow]]"`), counted through `EPISODES`. A record one medium alone
// tells (`source`) is listed as such and not read on the other's wiki. A
// chapter kept below its floor after a hand check goes in `CHAPTER_KEPT`. The
// reading is `./verify-chapters.thrones.mjs`'s.
//
// Run it with `npm run verify:chapters`, or `npm run verify:chapters --
// --series <slug>` for a series of `src/data/series/index.ts` other than One
// Piece. It talks to the network, so it is not part of `npm run check` or CI;
// the pages it reads are cached under `.gate/wiki/<slug>/` (`./wiki.mjs`) and
// never expire, so delete that folder to read the wiki afresh, for instance
// after new chapters come out.
import process from 'node:process'
import { pathToFileURL } from 'node:url'

import { seriesOrExit } from './archive-loader.mjs'
import { TITLES } from './verify-chapters.tables.mjs'
import { thronesSourceOf } from './verify-chapters.thrones.mjs'
import { chapterTexts, chapterTitles, fetchPage, wikiOf } from './wiki.mjs'

/** @typedef {import('./wiki.mjs').Page} Page */
/** @typedef {import('./wiki.mjs').Wiki} Wiki */

/**
 * The wiki pages a record is read from, in the order to try them. The English
 * edition's name is the page for most records; an arc page ends in `Arc`; a
 * fruit page is the Japanese name, which the Italian edition keeps.
 * @param {{ id: string, kind: string, name: { en: string, it: string } }} record The record.
 * @param {string} [slug] Its series.
 * @returns {string[][]} Alternatives, each a list of pages whose later chapter counts.
 */
export function titlesOf(record, slug = 'one-piece') {
  const known = TITLES[slug]?.[record.id]
  if (known !== undefined) {
    return [typeof known === 'string' ? [known] : [...known]]
  }

  const en = record.name.en.replaceAll('’', "'")
  if (record.kind === 'arc') {
    return [[/ (?:Arc|Saga)$/u.test(en) ? en : `${en} Arc`]]
  }

  if (record.kind === 'fruit') {
    return [[en], [japaneseNameOf(record.name)]]
  }

  return [[en]]
}

/**
 * A fruit's wiki page from the two editions' names: the Italian edition keeps
 * the Japanese name (`Frutto Ushi Ushi`), the English one the model
 * (`Model: Bison`), and the wiki files every zoan under `Model:` whatever its
 * class.
 * @param {{ en: string, it: string }} name The record's names.
 * @returns {string} The page title.
 */
export function japaneseNameOf(name) {
  const japanese = name.it.replace(/^Frutto /u, '').split(',', 1)[0]
  const model = /Model: (?<model>[^,]+)$/u.exec(name.en)?.groups?.['model']

  return model === undefined ?
      `${japanese} no Mi`
    : `${japanese} no Mi, Model: ${model}`
}

/**
 * The chapter a page gives for its subject, by the kind of record it is.
 * @param {Page} page The parsed page.
 * @param {string} kind The record's kind.
 * @returns {number | undefined} The chapter, or nothing when the page has none.
 */
export function chapterOf(page, kind) {
  return numberOf(page, kind, {
    arc: [/Chapters?:(?<n>\d+)/u, /ChaptersChapters(?<n>\d+)/u],
    debut: /Debut:Chapter(?<n>\d+)/u,
    field: 'manga debut',
    line: storyChapterOf,
  })
}

/**
 * A number a page gives for its subject: an arc's from its rendered range,
 * by the first of the arc patterns that matches (One Piece's wiki writes
 * `Chapters: 69-95`, Hunter x Hunter's a label and `Chapters 1 - 43`),
 * anything else's from the infobox first line (One Piece's `first`, Hunter x
 * Hunter's `manga debut` or `anime debut`), or from the rendered debut when
 * the infobox is transcluded.
 * @param {Page} page The parsed page.
 * @param {string} kind The record's kind.
 * @param {{ arc: RegExp[], debut: RegExp, field: string, line: (first: string) => number | undefined }} read How to read each of the three, and the infobox field that gives a debut where no `first` line does.
 * @returns {number | undefined} The number, or nothing when the page has none.
 */
function numberOf(page, kind, read) {
  if (kind === 'arc') {
    const text = tagless(page.text)
    return read.arc
      .map((pattern) => numberAfter(pattern, text))
      .find((number) => number !== undefined)
  }

  const first = firstLineOf(page) ?? infoboxLineOf(page, read.field)

  return first === undefined ?
      numberAfter(read.debut, tagless(page.text))
    : read.line(first)
}

/**
 * The earliest chapter an infobox line names. A line can name several:
 * Shiki's `[[Chapter 0]]; [[Chapter 530]] (mentioned)`, Camie's
 * `[[Chapter 195]] ([[…|cover]])`. A cover story is a manga page a reader
 * has turned too, so it counts towards the floor; chapter 0 (the Strong
 * World tie-in) counts only when the line names nothing else. What the floor
 * cannot say is whether the record was named there.
 * @param {string} first The infobox line.
 * @returns {number | undefined} The chapter.
 */
function storyChapterOf(first) {
  const chapters = first
    .matchAll(/\[\[Chapter (?<n>\d+)\]\]/gu)
    .map((match) => Number(match.groups?.['n']))
    .toArray()
  const numbered = chapters.filter((chapter) => chapter > 0)

  return numbered.length === 0 ? chapters.at(0) : Math.min(...numbered)
}

/**
 * Fruits whose naming chapter was checked by hand because the chapter
 * summaries do not say it: a fruit named in a scene the summary paraphrases
 * (Gum-Gum, chapter 1, "named" Qref; Zou Zou, chapter 400, Funkfreed's
 * infobox; Wapu Wapu, chapter 1063, Augur's introduction; Momonosuke's
 * artificial fruit, chapter 684, its debut), or a fruit whose full name the
 * story never says, held at the chapter that shows the power and who has it
 * (Jack's Zou Zou class, chapter 810; Tama's Kibi Kibi, chapter 911, its
 * debut; the rule is in `src/data/series/one-piece/entities.ts`).
 * @type {Record<string, number>}
 */
const NAMED_AT = {
  'artificial-dragon-dragon-fruit': 684,
  'elephant-elephant-fruit': 400,
  'elephant-elephant-fruit-ancient-model-mammoth': 810,
  'gum-gum-fruit': 1,
  'millet-millet-fruit': 911,
  'warp-warp-fruit': 1063,
}

/**
 * Records kept below the wiki's first episode after a hand check found the
 * wiki late: it dates a first appearance the archive has an earlier, named
 * sighting for. The value is the episode checked, so a record moved since
 * falls back to the rule.
 * @type {Record<string, number>}
 */
const EPISODE_KEPT = {
  // Episode 1's opening narration names him over his execution (chapter 1,
  // page 1); the wiki dates his first flashback, episode 48.
  'gold-roger': 1,
}

/**
 * Records kept below the wiki's chapter floor after a hand check found the
 * wiki early: a chapter page links a character the chapter does not name
 * yet. The value is the chapter checked, so a record moved since falls back
 * to the rule.
 * @type {Record<string, number>}
 */
const CHAPTER_KEPT = {}

/** A naming verb: the chapter summary says who ate the fruit or what it is. */
const NAMING =
  /\b(?:ate|eaten|fed|reveal|explain|named?|identif|called|known as)/iu

/**
 * The first chapter whose wiki summary names a fruit in the same sentence as
 * a naming verb: "Enel's Devil Fruit is revealed to be the [[Goro Goro no
 * Mi]]" is chapter 266, while chapter 264 only says "a Logia type Devil
 * Fruit". The fruit pages do not label that moment the same way twice, so
 * the chapter pages are read instead. A summary can paraphrase a name the
 * story has not said yet, so a hit is a flag for a hand check, not a verdict.
 * @param {Map<number, string>} chapters Every chapter's wikitext.
 * @param {string} title The fruit's page title.
 * @returns {number | undefined} The chapter, or nothing.
 */
export function namingChapterOf(chapters, title) {
  // Only a bare link: `[[Gomu Gomu no Mi|inflated himself]]` is the summary
  // using the name, not the story saying it, and a model's link shares the
  // base fruit's prefix.
  const link = `[[${title}]]`
  const hit = chapters.entries().find(([, text]) => {
    return text
      .split(/\n|(?<=\.) /u)
      .some((sentence) => sentence.includes(link) && NAMING.test(sentence))
  })

  return hit?.[0]
}

/**
 * The episode a page gives for its subject, read the same way. A record whose
 * episode sits below it fails unless a hand check kept it (`EPISODE_KEPT`).
 * @param {Page} page The parsed page.
 * @param {string} kind The record's kind.
 * @returns {number | undefined} The episode, or nothing when the page has none.
 */
export function episodeOf(page, kind) {
  if (kind === 'arc') {
    only1999(page)
  }

  return numberOf(page, kind, {
    // The Hunter x Hunter Wiki gives the 1999 and the 2011 anime side by
    // side; the archive counts in the 2011 one (#749).
    arc: [
      /Episodes?:(?<n>\d+)/u,
      /Episodes(?<n>\d+)-\d+\(2011\)/u,
      /EpisodesEpisodes(?<n>\d+)/u,
    ],
    debut: /Debut:Chapter\d+;Episode(?<n>\d+)/u,
    field: 'anime debut',
    line: episodeIn,
  })
}

/**
 * Fails on an arc page that gives the 1999 anime's episodes and not the 2011
 * one's: read on, its first range would be the wrong anime's.
 * @param {Page} page The parsed page.
 * @returns {void}
 */
function only1999(page) {
  const text = tagless(page.text)
  if (/Episodes\d+-\d+\(1999\)/u.test(text) && !text.includes('(2011)')) {
    throw new Error(
      `${page.title}: the wiki gives the 1999 anime's episodes only, and the archive counts in the 2011 one`,
    )
  }
}

/**
 * Which way a record's episode disagrees with the wiki's first, if it does.
 * @param {string} id The record's id.
 * @param {number} episode The record's episode.
 * @param {number} [wikiEpisode] The wiki's first episode, if the page gives one.
 * @returns {'kept' | 'ok' | 'too low'} The verdict.
 */
export function episodeVerdictOf(id, episode, wikiEpisode) {
  if (wikiEpisode === undefined || episode >= wikiEpisode) {
    return 'ok'
  }

  return EPISODE_KEPT[id] === episode ? 'kept' : 'too low'
}

/**
 * One infobox field's value, when the page has it, up to the next field: the
 * Hunter x Hunter Wiki gives a debut as `| manga debut = [[Chapter 1]]` and
 * `| anime debut = …`, the 1998 OVA's and the 1999 anime's on that line and
 * the 2011 anime's after a `----` on the lines below.
 * @param {Page} page The parsed page.
 * @param {string} field The field.
 * @returns {string | undefined} The value, from the field's line on.
 */
function infoboxLineOf(page, field) {
  const lines = page.wikitext.split('\n')
  const from = lines.findIndex((line) =>
    line.replace(/^\s*\|\s*/u, '').startsWith(`${field} `),
  )
  if (from === -1) {
    return
  }
  const to = lines.findIndex(
    (line, index) => index > from && /^\s*(?:\||\}\})/u.test(line),
  )

  return lines.slice(from, to === -1 ? lines.length : to).join('\n')
}

/**
 * The episode a debut names: the 2011 anime's where the wiki gives several
 * anime side by side, never the 1998 OVA's or the 1999 anime's, which the
 * archive does not count in (#749); else the first one named.
 * @param {string} debut The infobox line or field.
 * @returns {number | undefined} The episode.
 */
function episodeIn(debut) {
  if (debut.includes('(2011)')) {
    return numberAfter(/Episode (?<n>\d+) \(2011\)/u, debut)
  }

  return /\((?:1998|1999)\)/u.test(debut) ? undefined : (
      numberAfter(/Episode (?<n>\d+)/u, debut)
    )
}

/**
 * The infobox line that gives the first appearance, when the page has one.
 * @param {Page} page The parsed page.
 * @returns {string | undefined} The line.
 */
function firstLineOf(page) {
  return page.wikitext
    .split('\n')
    .find((line) => /^\s*\|\s*first\s*=/u.test(line))
}

/**
 * Rendered HTML with every tag and every space taken out, so that a label
 * and its value sit next to each other whatever markup lies between.
 * @param {string} html The rendered page.
 * @returns {string} The bare text.
 */
function tagless(html) {
  let text = ''
  let depth = 0
  for (const char of html) {
    if (char === '<') {
      depth += 1
    } else if (char === '>') {
      depth = Math.max(0, depth - 1)
    } else if (depth === 0 && !/\s/u.test(char)) {
      text += char
    }
  }

  return text
}

/**
 * The first captured number, or nothing.
 * @param {RegExp} pattern A pattern with one numeric group named `n`.
 * @param {string} text Where to look.
 * @returns {number | undefined} The number.
 */
function numberAfter(pattern, text) {
  const match = pattern.exec(text)

  return match?.groups === undefined ? undefined : Number(match.groups['n'])
}

/** @typedef {{ page?: string, wiki?: number, wikiEpisode?: number, only?: 'chapter' | 'episode' }} Source */

/**
 * The chapter the wiki gives one record, trying each alternative in turn;
 * or, for a series whose show has a wiki of its own, what the two wikis say
 * (`./verify-chapters.thrones.mjs`).
 * @param {{ id: string, kind: string, name: { en: string, it: string }, source?: 'chapter' | 'episode' }} record The record.
 * @param {{ chapters: Map<number, string>, wiki: Wiki, books?: { number: number, first: number, last: number }[] }} read Every chapter's wikitext, the wiki, and the series' books.
 * @returns {Promise<Source>} The page(s) read and the chapter, or neither.
 */
async function sourceOf(record, { chapters, wiki, books = [] }) {
  if (wiki.episodes !== undefined) {
    const titles = titlesOf(record, wiki.slug)[0] ?? []

    return thronesSourceOf(record, { chapters, wiki, books, titles })
  }

  const pages = await pagesOf(record, wiki)

  return pages === undefined ? {} : readingOf(record, pages, chapters)
}

/**
 * The wiki pages of one record: the first alternative of `titlesOf` whose
 * pages all exist.
 * @param {{ id: string, kind: string, name: { en: string, it: string } }} record The record.
 * @param {Wiki} wiki The series' wiki.
 * @returns {Promise<Page[] | undefined>} The pages, or nothing when none resolves.
 */
export async function pagesOf(record, wiki) {
  for (const titles of titlesOf(record, wiki.slug)) {
    const pages = await Promise.all(
      titles.map((title) => fetchPage(title, wiki)),
    )
    if (pages.every((page) => page !== undefined)) {
      return pages
    }
  }
}

/**
 * What the pages found for a record say, with a fruit's floor raised to the
 * first chapter whose summary names it, or the hand-checked one.
 * @param {{ id: string, kind: string }} record The record.
 * @param {Page[]} pages The pages read.
 * @param {Map<number, string>} chapters Every chapter's wikitext.
 * @returns {Source} The page(s) and the chapter, or neither.
 */
export function readingOf(record, pages, chapters) {
  const { kind } = record
  const floors = pages.map((page) => chapterOf(page, kind))
  const episodes = pages.map((page) => episodeOf(page, kind))
  const page = pages.map((page) => page.title).join(' + ')
  if (floors.includes(undefined)) {
    return { page }
  }

  const named =
    kind === 'fruit' ?
      (NAMED_AT[record.id] ?? namingChapterOf(chapters, pages[0].title))
    : undefined

  return {
    page: named === undefined ? page : `${page} (named ch ${String(named)})`,
    wiki: Math.max(...floors, named ?? 0),
    ...(!episodes.includes(undefined) && {
      wikiEpisode: Math.max(...episodes),
    }),
  }
}

/**
 * Which way a record disagrees with its source, if it does.
 * @param {number} filed The record's chapter.
 * @param {Source} source What the wiki says.
 * @param {string} [id] The record's id, for `CHAPTER_KEPT`.
 * @returns {'episode only' | 'equal' | 'kept' | 'too low' | 'unresolved'} The verdict.
 */
export function verdictOf(filed, source, id = '') {
  if (source.only === 'episode') {
    return 'episode only'
  }

  if (source.wiki === undefined) {
    return 'unresolved'
  }

  if (filed < source.wiki) {
    return CHAPTER_KEPT[id] === filed ? 'kept' : 'too low'
  }

  return filed === source.wiki ? 'equal' : 'kept'
}

/**
 * Which way a record's episode stands (`episodeVerdictOf`). A record the
 * books alone tell is listed apart; and where the show has a wiki of its own
 * (Game of Thrones), a page that gives no first episode is unresolved, since
 * the show is half of what that series checks.
 * @param {{ id: string, revealedAtEpisode: number }} record The record.
 * @param {Source} source What the wikis say.
 * @param {boolean} apart Whether the show is read on a wiki of its own.
 * @returns {'chapter only' | 'kept' | 'ok' | 'too low' | 'unresolved'} The verdict.
 */
export function episodeStandOf(record, source, apart) {
  if (source.only === 'chapter') {
    return 'chapter only'
  }

  return apart && source.wikiEpisode === undefined ?
      'unresolved'
    : episodeVerdictOf(record.id, record.revealedAtEpisode, source.wikiEpisode)
}

/** @typedef {{ id: string, kind: string, filed: number, episode: number, page?: string, wiki?: number, wikiEpisode?: number, verdict: string, episodeVerdict: string }} Row */

/**
 * Every record of the series on the command line against its page, in
 * archive order.
 * @returns {Promise<{ rows: Row[], thrones: boolean }>} One row per record, and whether the series reads its show on a wiki of its own.
 */
async function verify() {
  const series = await seriesOrExit()
  const wiki = wikiOf(series)
  const { books, chapterCeiling } = series.archive.series
  const chapters = await chapterTexts(
    chapterTitles(chapterCeiling, books),
    wiki,
  )
  /** @type {Row[]} */
  const rows = []
  for (const record of series.archive.entities) {
    const source = await sourceOf(record, { chapters, wiki, books })

    rows.push({
      id: record.id,
      kind: record.kind,
      filed: record.revealedAtChapter,
      episode: record.revealedAtEpisode,
      ...source,
      verdict: verdictOf(record.revealedAtChapter, source, record.id),
      episodeVerdict: episodeStandOf(
        record,
        source,
        wiki.episodes !== undefined,
      ),
    })
  }

  return { rows, thrones: wiki.episodes !== undefined }
}

/**
 * A markdown table of the rows one filter keeps, under a heading.
 * @param {string} title The heading.
 * @param {Row[]} rows The rows to list.
 * @param {(row: Row) => (number | string | undefined)[]} cells The three columns after kind and record.
 * @returns {string} The heading and the table, or a one-line "none".
 */
function table(title, rows, cells) {
  const heading = `### ${title} (${String(rows.length)})`
  if (rows.length === 0) {
    return `${heading}\n\nnone`
  }

  const lines = rows.map(
    (row) =>
      `| ${[row.kind, row.id, ...cells(row)].map((cell = '—') => String(cell)).join(' | ')} |`,
  )

  return `${heading}\n\n| kind | record | filed | wiki | page |\n| --- | --- | ---: | ---: | --- |\n${lines.join('\n')}`
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const { rows, thrones } = await verify()
  const wrong = rows.filter((row) => {
    return (
      row.verdict === 'too low'
      || row.verdict === 'unresolved'
      || row.episodeVerdict === 'too low'
      || row.episodeVerdict === 'unresolved'
    )
  })
  // Only Game of Thrones reads its media apart, so only it has these.
  const apart = thrones ? ['episode only'] : []
  const episodesApart = thrones ? ['unresolved', 'chapter only'] : []
  const verdicts = ['too low', 'unresolved', 'equal', 'kept', ...apart]
  const tables = verdicts.map((verdict) => {
    return table(
      verdict,
      rows.filter((row) => row.verdict === verdict),
      (row) => [row.filed, row.wiki, row.page],
    )
  })
  const episodes = ['too low', 'kept', ...episodesApart].map((verdict) => {
    return table(
      `episode ${verdict}`,
      rows.filter((row) => row.episodeVerdict === verdict),
      (row) => [row.episode, row.wikiEpisode, row.page],
    )
  })

  console.log([...tables, ...episodes].join('\n\n'))
  process.exitCode = wrong.length === 0 ? 0 : 1
}
