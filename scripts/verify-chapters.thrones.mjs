// How `./verify-chapters.mjs` reads Game of Thrones, whose two media sit on
// two wikis: the books on A Wiki of Ice and Fire (`wiki.en`), the show on
// the Game of Thrones Wiki (`wiki.episodes`). Kept apart so the script
// stays readable.
import { SHOW_TITLES } from './verify-chapters.tables.mjs'
import { fetchPage, redirectsOf, THRONES_BOOKS } from './wiki.mjs'

/** @typedef {import('./wiki.mjs').Wiki} Wiki */
/** @typedef {{ number: number, first: number, last: number }} Book */
/** @typedef {{ page?: string, wiki?: number, wikiEpisode?: number, only?: 'chapter' | 'episode' }} Source */

/**
 * The show's episodes in order, the absolute episode being the place in the
 * list plus one: the Game of Thrones Wiki's `Game of Thrones: Season 1` to
 * `Season 8`, the Title column of `==Episodes==` (read 2026-11-01), without
 * a page's disambiguator (`Garden of Bones (episode)`).
 */
const EPISODES = [
  // Season 1, episodes 1-10.
  'Winter Is Coming',
  'The Kingsroad',
  'Lord Snow',
  'Cripples, Bastards, and Broken Things',
  'The Wolf and the Lion',
  'A Golden Crown',
  'You Win or You Die',
  'The Pointy End',
  'Baelor',
  'Fire and Blood',
  // Season 2, 11-20.
  'The North Remembers',
  'The Night Lands',
  'What Is Dead May Never Die',
  'Garden of Bones',
  'The Ghost of Harrenhal',
  'The Old Gods and the New',
  'A Man Without Honor',
  'The Prince of Winterfell',
  'Blackwater',
  'Valar Morghulis',
  // Season 3, 21-30.
  'Valar Dohaeris',
  'Dark Wings, Dark Words',
  'Walk of Punishment',
  'And Now His Watch Is Ended',
  'Kissed by Fire',
  'The Climb',
  'The Bear and the Maiden Fair',
  'Second Sons',
  'The Rains of Castamere',
  'Mhysa',
  // Season 4, 31-40.
  'Two Swords',
  'The Lion and the Rose',
  'Breaker of Chains',
  'Oathkeeper',
  'First of His Name',
  'The Laws of Gods and Men',
  'Mockingbird',
  'The Mountain and the Viper',
  'The Watchers on the Wall',
  'The Children',
  // Season 5, 41-50.
  'The Wars To Come',
  'The House of Black and White',
  'High Sparrow',
  'Sons of the Harpy',
  'Kill the Boy',
  'Unbowed, Unbent, Unbroken',
  'The Gift',
  'Hardhome',
  'The Dance of Dragons',
  "Mother's Mercy",
  // Season 6, 51-60.
  'The Red Woman',
  'Home',
  'Oathbreaker',
  'Book of the Stranger',
  'The Door',
  'Blood of My Blood',
  'The Broken Man',
  'No One',
  'Battle of the Bastards',
  'The Winds of Winter',
  // Season 7, 61-67.
  'Dragonstone',
  'Stormborn',
  "The Queen's Justice",
  'The Spoils of War',
  'Eastwatch',
  'Beyond the Wall',
  'The Dragon and the Wolf',
  // Season 8, 68-73.
  'Winterfell',
  'A Knight of the Seven Kingdoms',
  'The Long Night',
  'The Last of the Starks',
  'The Bells',
  'The Iron Throne',
]

/**
 * The absolute episode an episode page's title is, with or without the
 * wiki's disambiguator.
 * @param {string} title The page title.
 * @returns {number | undefined} The episode, or nothing for another page.
 */
export function episodeNumberOf(title) {
  const index = EPISODES.indexOf(title.replace(/ \([^)]*\)$/u, '').trim())

  return index === -1 ? undefined : index + 1
}

/**
 * The first episode a Game of Thrones Wiki page gives: the link of its
 * infobox's `| First = "[[Lord Snow]]"`.
 * @param {string} wikitext The page.
 * @returns {number | undefined} The episode, or nothing when the page has none.
 */
export function firstEpisodeOf(wikitext) {
  const line = wikitext
    .split('\n')
    .find((entry) => /^\s*\|\s*First\s*=/u.test(entry))
  const link = /\[\[(?<title>[^\]|]+)/u.exec(line ?? '')?.groups?.['title']

  return link === undefined ? undefined : episodeNumberOf(link)
}

/**
 * The absolute chapter a book's own chapter is: its `first` plus the
 * number, a prologue its first, an epilogue its last.
 * @param {string} code The book's `{{Ref}}` code (`AGOT`).
 * @param {string} chapter `Prologue`, `Epilogue` or the number.
 * @param {Book[]} books The series' books.
 * @returns {number | undefined} The chapter, or nothing for a book or chapter it is not.
 */
export function bookChapterOf(code, chapter, books) {
  const number =
    THRONES_BOOKS.findIndex(({ ref }) => ref === code.toUpperCase()) + 1
  const book = books.find((entry) => entry.number === number)
  if (book === undefined) {
    return
  }

  if (/^prologue$/iu.test(chapter)) {
    return book.first
  }

  if (/^epilogue$/iu.test(chapter)) {
    return book.last
  }

  return /^\d+$/u.test(chapter) ? book.first + Number(chapter) : undefined
}

/**
 * Every chapter of the books a page cites, `{{Ref|AGOT|22}}` or
 * `{{ref|ACOK|Prologue}}`; a citation of anything else
 * (`{{Ref|AWOIAF|Syrio Forel}}`) is left out.
 * @param {string} wikitext The page.
 * @param {Book[]} books The series' books.
 * @returns {number[]} The chapters, as cited.
 */
export function citedChaptersOf(wikitext, books) {
  return wikitext
    .matchAll(/\{\{ref\|(?<code>\w+)\|(?<chapter>\w+)\}\}/giu)
    .map(({ groups }) =>
      bookChapterOf(groups?.['code'] ?? '', groups?.['chapter'] ?? '', books),
    )
    .filter((chapter) => chapter !== undefined)
    .toArray()
}

/**
 * A link target as the wiki resolves it: an underscore is a space, and the
 * first letter is taken in either case.
 * @param {string} title The target.
 * @returns {string} The key.
 */
function linkKeyOf(title) {
  const key = title.replaceAll('_', ' ').trim()

  return key.charAt(0).toUpperCase() + key.slice(1)
}

/**
 * Every link target a page's wikitext names.
 * @param {string} text The wikitext.
 * @returns {IteratorObject<RegExpExecArray>} The links, the target in group `target`.
 */
function links(text) {
  return text.matchAll(/\[\[(?<target>[^\]|#]+)/gu)
}

/**
 * The first chapter whose page links one of a page's titles: `[[Syrio
 * Forel]]`, `[[Syrio Forel|Syrio]]`, a section of it, or a redirect to it
 * (`[[Syrio]]`).
 * @param {Map<number, string>} chapters Every chapter's wikitext, in order.
 * @param {string[]} titles The page's title and its redirects.
 * @returns {number | undefined} The chapter, or nothing.
 */
export function linkingChapterOf(chapters, titles) {
  const wanted = new Set(titles.map((title) => linkKeyOf(title)))
  return chapters
    .entries()
    .find(([, text]) =>
      links(text).some(({ groups }) =>
        wanted.has(linkKeyOf(groups?.['target'] ?? '')),
      ),
    )?.[0]
}

/**
 * A character's chapter floor on A Wiki of Ice and Fire: the first chapter
 * page linking it, since a chapter page links everyone who appears or is
 * mentioned in it, or, when none does, the earliest chapter its page cites.
 * @param {Map<number, string>} chapters Every chapter's wikitext, in order.
 * @param {string[]} titles The page's title and its redirects.
 * @param {string} wikitext The character's page.
 * @param {Book[]} books The series' books.
 * @returns {number | undefined} The floor, or nothing.
 */
export function bookFloorOf(chapters, titles, wikitext, books) {
  const cited = citedChaptersOf(wikitext, books)

  return (
    linkingChapterOf(chapters, titles)
    ?? (cited.length === 0 ? undefined : Math.min(...cited))
  )
}

/**
 * The book floor of a record's pages on A Wiki of Ice and Fire, the latest
 * of them for a paired record.
 * @param {string[]} titles The record's pages there.
 * @param {{ chapters: Map<number, string>, wiki: Wiki, books: Book[] }} read Every chapter's wikitext, the wiki and the books.
 * @returns {Promise<Source>} The pages read and the floor, or neither.
 */
async function bookSourceOf(titles, { chapters, wiki, books }) {
  const pages = await Promise.all(titles.map((title) => fetchPage(title, wiki)))
  if (pages.includes(undefined)) {
    return {}
  }

  const read = /** @type {import('./wiki.mjs').Page[]} */ (pages)
  const floors = await Promise.all(
    read.map(async (page) => {
      const names = await redirectsOf(page.title, wiki)

      return bookFloorOf(chapters, names, page.wikitext, books)
    }),
  )
  const page = read.map(({ title }) => title).join(' + ')

  return floors.includes(undefined) ?
      { page }
    : { page, wiki: Math.max(.../** @type {number[]} */ (floors)) }
}

/**
 * The first episode of a record's page on the Game of Thrones Wiki, whose
 * title is the record's English name.
 * @param {string} name The record's English name.
 * @param {Wiki} episodes The show's wiki.
 * @returns {Promise<Source>} The page read and the episode, or neither.
 */
async function showSourceOf(name, episodes) {
  const page = await fetchPage(name.replaceAll('’', "'"), episodes)
  if (page === undefined) {
    return {}
  }

  const episode = firstEpisodeOf(page.wikitext)

  return {
    page: `${page.title} (show)`,
    ...(episode !== undefined && { wikiEpisode: episode }),
  }
}

/**
 * What the two wikis say of one record, each medium left unread for a
 * record the other alone tells.
 * @param {{ id?: string, name: { en: string }, source?: 'chapter' | 'episode' }} record The record.
 * @param {{ chapters: Map<number, string>, wiki: Wiki, books: Book[], titles: string[] }} read Every chapter's wikitext, the wiki, the books and the record's pages on the book wiki.
 * @returns {Promise<Source>} The pages read and the numbers found.
 */
export async function thronesSourceOf(record, read) {
  /** @type {Source} */
  const book =
    record.source === 'episode' ?
      { only: 'episode' }
    : await bookSourceOf(read.titles, read)
  /** @type {Source} */
  const show =
    record.source === 'chapter' || read.wiki.episodes === undefined ?
      { only: 'chapter' }
    : await showSourceOf(
        SHOW_TITLES[record.id ?? ''] ?? record.name.en,
        read.wiki.episodes,
      )
  const pages = [book.page, show.page].filter((page) => page !== undefined)

  return {
    ...book,
    ...show,
    ...(pages.length > 0 && { page: pages.join(' / ') }),
  }
}
