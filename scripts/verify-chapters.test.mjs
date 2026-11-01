import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  chapterOf,
  episodeOf,
  episodeStandOf,
  episodeVerdictOf,
  japaneseNameOf,
  namingChapterOf,
  readingOf,
  titlesOf,
  verdictOf,
} from './verify-chapters.mjs'
import {
  bookChapterOf,
  bookFloorOf,
  citedChaptersOf,
  episodeNumberOf,
  firstEpisodeOf,
  linkingChapterOf,
  thronesSourceOf,
} from './verify-chapters.thrones.mjs'

// Cache pacing needs no wall-clock time in unit tests.
vi.mock('node:timers/promises', () => ({
  setTimeout: vi.fn(() => Promise.resolve()),
}))

const name = (en, it) => ({ en, it })
const page = (wikitext, text = '') => ({ title: 't', wikitext, text })
const boxed = (title, first) => ({ ...page(`| first = ${first}`), title })

describe('the page a record is read from', () => {
  it.each([
    ['killua', 'Killua', 'Killua Zoldyck'],
    ['hisoka', 'Hisoka', 'Hisoka Morow'],
    ['netero', 'Netero', 'Isaac Netero'],
  ])(
    'reads %s from its full wiki title without exposing it in the record',
    (id, en, title) => {
      expect(
        titlesOf(
          { id, kind: 'character', name: name(en, en) },
          'hunter-x-hunter',
        ),
      ).toEqual([[title]])
    },
  )

  it('reads a character from the English edition name, straight apostrophe', () => {
    expect(
      titlesOf({
        id: 'whos-who',
        kind: 'character',
        name: name('Who’s-Who', 'Who’s-Who'),
      }),
    ).toEqual([["Who's-Who"]])
  })

  it('adds Arc to an arc name that lacks it and leaves a saga alone', () => {
    expect(
      titlesOf({ id: 'a', kind: 'arc', name: name('Arlong Park', 'x') }),
    ).toEqual([['Arlong Park Arc']])
    expect(
      titlesOf({ id: 'b', kind: 'arc', name: name('East Blue Saga', 'x') }),
    ).toEqual([['East Blue Saga']])
  })

  it('tries the English fruit name, then the Japanese one', () => {
    expect(
      titlesOf({
        id: 'f',
        kind: 'fruit',
        name: name(
          'Ox-Ox Fruit, Model: Bison',
          'Frutto Ushi Ushi, modello Bisonte',
        ),
      }),
    ).toEqual([
      ['Ox-Ox Fruit, Model: Bison'],
      ['Ushi Ushi no Mi, Model: Bison'],
    ])
    expect(japaneseNameOf(name('Chop-Chop Fruit', 'Frutto Bara Bara'))).toBe(
      'Bara Bara no Mi',
    )
  })

  it('reads a paired record from both pages', () => {
    expect(
      titlesOf({
        id: 'kiwi-and-mozu',
        kind: 'character',
        name: name('x', 'x'),
      }),
    ).toEqual([['Kiwi', 'Mozu']])
  })
})

describe('the chapter a page gives', () => {
  it('reads the infobox first line', () => {
    expect(
      chapterOf(
        page('{{Char Box\n| first = [[Chapter 3]]; [[Episode 1]]\n}}'),
        'character',
      ),
    ).toBe(3)
  })

  it('falls back to the rendered debut when the infobox is transcluded', () => {
    expect(
      chapterOf(
        page('{{Zoro Tabs Top}}', '<b>Debut:</b> <a>Chapter 3</a> ; Episode 1'),
        'character',
      ),
    ).toBe(3)
  })

  it('reads an arc from its rendered chapter range', () => {
    expect(
      chapterOf(
        page(
          '{{Arc Box|chapter = auto}}',
          'Manga Chapters: 69-95, 27 chapters',
        ),
        'arc',
      ),
    ).toBe(69)
  })

  it('reads the episode beside the chapter', () => {
    expect(
      episodeOf(page('| first = [[Chapter 3]]; [[Episode 1]]'), 'character'),
    ).toBe(1)
    expect(
      episodeOf(
        page('{{Tabs}}', '<b>Debut:</b> Chapter 3; <a>Episode 1</a>'),
        'character',
      ),
    ).toBe(1)
    expect(
      episodeOf(
        page('{{Arc Box}}', 'Manga Chapters: 69-95 Anime Episodes: 31-44'),
        'arc',
      ),
    ).toBe(31)
  })

  it('reads a Hunter x Hunter debut, counting in the 2011 anime', () => {
    // The wiki's own layout: the 2011 anime after a `----`, below the field.
    const ging = page(
      [
        '{{Hunterpedia:Character',
        '|manga debut = [[Chapter 1]] (Image) <br /> [[Chapter 66]] (Official)',
        '|anime debut = [[Hunter × Hunter Pilot OVA|Episode 00 (1998)]] (Image) <br /> [[Episode 1 (1999)]] (Image) <br /> [[Episode 47 (1999)]] (Official)',
        '----',
        '[[Episode 1 (2011)]] (Image) <br /> [[Episode 37 (2011)]] (Official)',
        '|gender = Male',
      ].join('\n'),
    )
    const only1999 = page(
      '|manga debut = [[Chapter 2]]\n|anime debut = [[Episode 3 (1999)]]\n}}',
    )

    expect(chapterOf(ging, 'character')).toBe(1)
    expect(episodeOf(ging, 'character')).toBe(1)
    expect(episodeOf(only1999, 'character')).toBeUndefined()
  })

  it('reads a Hunter x Hunter arc, counting in the 2011 anime', () => {
    const arc = page(
      '{{Arc Template}}',
      '<td>Chapters</td><td>Chapters 44 - 63</td><td>Episodes</td><td>Episodes 37 - 44 (1999) <br/> Episodes 27 - 36 (2011)</td>',
    )

    expect(chapterOf(arc, 'arc')).toBe(44)
    expect(episodeOf(arc, 'arc')).toBe(27)
    expect(
      episodeOf(
        page('{{Arc Template}}', '<td>Episodes</td><td>Episodes 76 - 136</td>'),
        'arc',
      ),
    ).toBe(76)
    expect(() =>
      episodeOf(
        page(
          '{{Arc Template}}',
          '<td>Episodes</td><td>Episodes 37 - 44 (1999)</td>',
        ),
        'arc',
      ),
    ).toThrow(/1999 anime's episodes only/u)
  })

  it('reads a page under the series it belongs to', () => {
    const record = { id: 'kakin-arc', kind: 'arc', name: name('Kakin', 'x') }

    expect(titlesOf(record, 'hunter-x-hunter')).toStrictEqual([
      ['Succession Contest arc'],
    ])
    expect(titlesOf(record)).toStrictEqual([['Kakin Arc']])
  })

  it('takes the earliest chapter a line names, chapter 0 only alone', () => {
    expect(
      chapterOf(
        page(
          '| first = [[Chapter 530]] (mentioned); [[Chapter 0]]; [[Episode 425]]',
        ),
        'character',
      ),
    ).toBe(530)
    expect(chapterOf(page('| first = [[Chapter 0]]'), 'character')).toBe(0)
    expect(
      chapterOf(
        page(
          "| first = [[Chapter 491]]; [[Chapter 195]] ([[Hatchan's Sea-Floor Stroll|cover]])",
        ),
        'character',
      ),
    ).toBe(195)
  })

  it('gives nothing for a page without a chapter', () => {
    expect(chapterOf(page('text', 'text'), 'character')).toBeUndefined()
  })
})

describe('the chapter that names a fruit', () => {
  const chapters = new Map([
    [
      264,
      'Enel uses a Logia type Devil Fruit. [[Raki]] thinks of [[Goro Goro no Mi|his powers]].',
    ],
    [
      266,
      "*[[Enel]]'s [[Devil Fruit]] is revealed to be the [[Goro Goro no Mi]].\n*Other notes.",
    ],
  ])

  it('is the first summary that names it with a naming verb', () => {
    expect(namingChapterOf(chapters, 'Goro Goro no Mi')).toBe(266)
    expect(
      namingChapterOf(
        new Map([
          [933, "*Orochi's Devil Fruit is called the [[Hebi Hebi no Mi]]."],
          [521, '*Hancock was fed the [[Mero Mero no Mi]].'],
        ]),
        'Hebi Hebi no Mi',
      ),
    ).toBe(933)
    expect(
      namingChapterOf(
        new Map([[521, '*Hancock was fed the [[Mero Mero no Mi]].']]),
        'Mero Mero no Mi',
      ),
    ).toBe(521)
    expect(namingChapterOf(chapters, 'Gomu Gomu no Mi')).toBeUndefined()
    // A piped link or a model's link does not name the fruit.
    expect(
      namingChapterOf(
        new Map([
          [16, 'She asks how he [[Gomu Gomu no Mi|inflated himself]], named.'],
        ]),
        'Gomu Gomu no Mi',
      ),
    ).toBeUndefined()
    expect(
      namingChapterOf(
        new Map([[1023, 'Jack ate the [[Zou Zou no Mi, Model: Mammoth]].']]),
        'Zou Zou no Mi',
      ),
    ).toBeUndefined()
  })
})

describe('what the pages say about a record', () => {
  it('takes the latest floor and episode across paired pages', () => {
    expect(
      readingOf(
        { id: 'kiwi-and-mozu', kind: 'character' },
        [
          boxed('Kiwi', '[[Chapter 3]]; [[Episode 1]]'),
          boxed('Mozu', '[[Chapter 5]]; [[Episode 2]]'),
        ],
        new Map(),
      ),
    ).toStrictEqual({ page: 'Kiwi + Mozu', wiki: 5, wikiEpisode: 2 })
  })

  it('names only the pages when one has no chapter', () => {
    expect(
      readingOf(
        { id: 'x', kind: 'character' },
        [boxed('X', '[[Chapter 3]]'), { title: 'Y', wikitext: '', text: '' }],
        new Map(),
      ),
    ).toStrictEqual({ page: 'X + Y' })
  })

  it('raises a fruit to the chapter that names it, by hand or by summary', () => {
    expect(
      readingOf(
        { id: 'gum-gum-fruit', kind: 'fruit' },
        [boxed('Gomu Gomu no Mi', '[[Chapter 1]]')],
        new Map(),
      ),
    ).toStrictEqual({ page: 'Gomu Gomu no Mi (named ch 1)', wiki: 1 })
    expect(
      readingOf(
        { id: 'flame-flame-fruit', kind: 'fruit' },
        [boxed('Mera Mera no Mi', '[[Chapter 100]]')],
        new Map([[158, 'Ace ate the [[Mera Mera no Mi]].']]),
      ),
    ).toStrictEqual({ page: 'Mera Mera no Mi (named ch 158)', wiki: 158 })
    expect(
      readingOf(
        { id: 'flame-flame-fruit', kind: 'fruit' },
        [boxed('Mera Mera no Mi', '[[Chapter 100]]')],
        new Map(),
      ),
    ).toStrictEqual({ page: 'Mera Mera no Mi', wiki: 100 })
  })
})

describe('the verdict', () => {
  it('fails a chapter below the wiki and keeps one above', () => {
    expect(verdictOf(1, { wiki: 2 })).toBe('too low')
    expect(verdictOf(2, { wiki: 2 })).toBe('equal')
    expect(verdictOf(3, { wiki: 2 })).toBe('kept')
    expect(verdictOf(3, {})).toBe('unresolved')
  })
})

describe('the episode verdict', () => {
  it('fails an episode below the wiki unless it was kept by hand', () => {
    expect(episodeVerdictOf('x', 1, 2)).toBe('too low')
    expect(episodeVerdictOf('x', 2, 2)).toBe('ok')
    expect(episodeVerdictOf('x', 1)).toBe('ok')
    expect(episodeVerdictOf('gold-roger', 1, 48)).toBe('kept')
    // A kept record moved since falls back to the rule.
    expect(episodeVerdictOf('gold-roger', 2, 48)).toBe('too low')
  })
})

describe('Game of Thrones', () => {
  const books = [
    { number: 1, first: 1, last: 73 },
    { number: 2, first: 74, last: 143 },
    { number: 3, first: 144, last: 225 },
  ]

  it('counts an episode title from the start of the show', () => {
    expect(episodeNumberOf('Winter Is Coming')).toBe(1)
    expect(episodeNumberOf('Fire and Blood')).toBe(10)
    expect(episodeNumberOf('Garden of Bones (episode)')).toBe(14)
    expect(episodeNumberOf('The Iron Throne')).toBe(73)
    expect(episodeNumberOf('Winterfell')).toBe(68)
    expect(episodeNumberOf('Arya Stark')).toBeUndefined()
  })

  it('reads the first episode from the infobox', () => {
    expect(
      firstEpisodeOf(
        '| Season = 1\n| First       = "[[Lord Snow]]"\n| Last = "[[The Pointy End]]"',
      ),
    ).toBe(3)
    expect(
      firstEpisodeOf(
        '| First = "[[Walk of Punishment (episode)|Walk of Punishment]]"',
      ),
    ).toBe(23)
    expect(firstEpisodeOf('| Last = "[[Baelor]]"')).toBeUndefined()
  })

  it('counts a book chapter from the book first, a prologue first, an epilogue last', () => {
    expect(bookChapterOf('AGOT', '1', books)).toBe(2)
    expect(bookChapterOf('agot', '22', books)).toBe(23)
    expect(bookChapterOf('ACOK', 'Prologue', books)).toBe(74)
    expect(bookChapterOf('ASOS', 'Epilogue', books)).toBe(225)
    expect(bookChapterOf('AFFC', '1', books)).toBeUndefined()
    expect(bookChapterOf('AWOIAF', '1', books)).toBeUndefined()
    expect(bookChapterOf('AGOT', 'Appendix', books)).toBeUndefined()
  })

  it('reads the book chapters a page cites, in either case, and no other source', () => {
    expect(
      citedChaptersOf(
        'a{{ref|AGOT|50}} b{{Ref|AGOT|22}} c{{Ref|AWOIAF|Syrio Forel}} d{{ref|ACOK|Prologue}}',
        books,
      ),
    ).toStrictEqual([51, 23, 74])
  })

  const chapters = new Map([
    [1, '[[Will]] and [[Waymar Royce]]'],
    [22, '[[Arya Stark|Arya]] meets [[Syrio]]'],
    [23, 'Arya trains with [[Syrio Forel]]'],
    [24, '[[syrio Forel|the bravo]] again'],
  ])

  it('finds the first chapter linking a page, through its redirects and either case', () => {
    expect(linkingChapterOf(chapters, ['Syrio Forel'])).toBe(23)
    expect(linkingChapterOf(chapters, ['Syrio Forel', 'Syrio'])).toBe(22)
    expect(linkingChapterOf(chapters, ['Arya Stark'])).toBe(22)
    expect(linkingChapterOf(chapters, ['Will (prologue)'])).toBeUndefined()
    // A link to a longer title is not a link to this one.
    expect(linkingChapterOf(chapters, ['Waymar'])).toBeUndefined()
  })

  it('floors a character at its first linking chapter, else at its first citation', () => {
    expect(
      bookFloorOf(chapters, ['Syrio Forel'], '{{Ref|AGOT|1}}', books),
    ).toBe(23)
    expect(
      bookFloorOf(
        chapters,
        ['Ser Nobody'],
        '{{Ref|AGOT|30}}{{Ref|AGOT|9}}',
        books,
      ),
    ).toBe(10)
    expect(
      bookFloorOf(chapters, ['Ser Nobody'], 'no refs', books),
    ).toBeUndefined()
  })

  it('lists a record one medium alone tells apart, not as unresolved', () => {
    expect(verdictOf(5, { only: 'episode' })).toBe('episode only')
    expect(verdictOf(5, { only: 'chapter', wiki: 6 })).toBe('too low')
    expect(
      episodeStandOf(
        { id: 'x', revealedAtEpisode: 1 },
        { only: 'chapter' },
        true,
      ),
    ).toBe('chapter only')
  })

  it('holds a show record to its first episode, and calls a missing one unresolved', () => {
    const record = { id: 'syrio-forel', revealedAtEpisode: 3 }

    expect(episodeStandOf(record, { wikiEpisode: 3 }, true)).toBe('ok')
    expect(episodeStandOf(record, { wikiEpisode: 4 }, true)).toBe('too low')
    expect(episodeStandOf(record, {}, true)).toBe('unresolved')
    // One Piece reads both on one wiki, and a page without an episode passes.
    expect(episodeStandOf(record, {}, false)).toBe('ok')
  })
})

describe('what the two Game of Thrones wikis say of a record', () => {
  let directory = ''
  const parse = (wikitext) =>
    JSON.stringify({
      parse: {
        title: 'Syrio Forel',
        wikitext: { '*': wikitext },
        text: { '*': '' },
      },
    })
  const answers = {
    'https://b/api.php?action=parse': parse('{{Ref|AGOT|50}}'),
    'https://b/api.php?action=query&prop=redirects': JSON.stringify({
      batchcomplete: '',
      query: {
        pages: { 1: { title: 'Syrio Forel', redirects: [{ title: 'Syrio' }] } },
      },
    }),
    'https://s/api.php?action=parse': parse('| First = "[[Lord Snow]]"'),
  }

  const answer = (url) => {
    const [, body] = Object.entries(answers).find(([prefix]) =>
      url.startsWith(prefix),
    )

    return Promise.resolve(new Response(body))
  }

  beforeEach(() => {
    directory = mkdtempSync(path.join(tmpdir(), 'thrones-'))
    vi.stubGlobal('fetch', vi.fn(answer))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    rmSync(directory, { recursive: true, force: true })
  })

  const read = () => {
    const own = {
      cache: directory,
      en: 'https://b/api.php',
      it: 'https://i',
      slug: 'game-of-thrones',
    }

    return {
      chapters: new Map([
        [22, '[[Arya Stark]]'],
        [23, '[[Syrio|the bravo]]'],
      ]),
      wiki: {
        ...own,
        episodes: {
          ...own,
          cache: path.join(directory, 'episodes'),
          en: 'https://s/api.php',
        },
      },
      books: [{ number: 1, first: 1, last: 73 }],
      titles: ['Syrio Forel'],
    }
  }

  it('floors the books at the first chapter linking a redirect, and reads the first episode', async () => {
    await expect(
      thronesSourceOf({ name: { en: 'Syrio Forel' } }, read()),
    ).resolves.toStrictEqual({
      page: 'Syrio Forel / Syrio Forel (show)',
      wiki: 23,
      wikiEpisode: 3,
    })
  })

  it('reads a record one medium alone tells on that medium wiki only', async () => {
    await expect(
      thronesSourceOf(
        { name: { en: 'Syrio Forel' }, source: 'episode' },
        read(),
      ),
    ).resolves.toStrictEqual({
      only: 'episode',
      page: 'Syrio Forel (show)',
      wikiEpisode: 3,
    })
    await expect(
      thronesSourceOf(
        { name: { en: 'Syrio Forel' }, source: 'chapter' },
        read(),
      ),
    ).resolves.toStrictEqual({ only: 'chapter', page: 'Syrio Forel', wiki: 23 })
  })
})
