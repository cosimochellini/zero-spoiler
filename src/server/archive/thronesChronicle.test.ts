import { byString } from 'sort-es'
import { describe, expect, it } from 'vitest'

import { season1Chronicles } from '~/data/series/game-of-thrones/records/season-1.chronicle'
import type { Dated, Entity, Story } from '~/data/types'
import { type Locale, LOCALES } from '~/i18n/locales'
import type { Bookmark } from '~/lib/progress/episode'
import { LOADED_SERIES } from '~/test/series'

import { chronicleOf, chronicleRestOf } from './chronicle.server'
import { type Reader, readerFor } from './reader.server'

const series = LOADED_SERIES.find(({ slug }) => slug === 'game-of-thrones')
if (series === undefined) {
  throw new Error('Season 1 chronicle tests require Game of Thrones')
}
const { archive } = series

type Medium = 'books' | 'both' | 'show'

interface Row {
  chapter: number
  episode: number
  id: string
  medium: Medium
  title: string
}

/**
 * Every Essos story of the first stage (#1360), written down independently
 * of the data: owner, medium, episode, site chapter and English title. A
 * story both media tell opens at both numbers, a show story at its episode
 * alone and a book story at its chapter alone, so moving any entry, or
 * changing its medium, fails here.
 */
const STORIES: Row[] = [
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 1,
    chapter: 4,
    title: 'The wedding in Pentos',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 1,
    chapter: 4,
    title: 'Shown to the khal',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'The wedding outside the walls',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Doreah’s lessons',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'The ride east',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 3,
    chapter: 24,
    title: 'An order from the khaleesi',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 4,
    chapter: 37,
    title: 'The belt',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 6,
    chapter: 47,
    title: 'The stallion who mounts the world',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 7,
    chapter: 55,
    title: 'The poisoned wine',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'show',
    episode: 8,
    chapter: 62,
    title: 'The Lhazareen village',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'The girl she claims',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'Blood magic',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'What the maegi took',
  },
  {
    id: 'daenerys-targaryen',
    medium: 'both',
    episode: 10,
    chapter: 73,
    title: 'Fire and blood',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 1,
    chapter: 4,
    title: 'The beggar king’s bargain',
  },
  {
    id: 'viserys-targaryen',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'Impatient for an army',
  },
  {
    id: 'viserys-targaryen',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Riding with the khalasar',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 3,
    chapter: 24,
    title: 'Made to walk',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 4,
    chapter: 37,
    title: 'The invitation to supper',
  },
  {
    id: 'viserys-targaryen',
    medium: 'both',
    episode: 6,
    chapter: 47,
    title: 'A golden crown',
  },
  {
    id: 'drogo',
    medium: 'show',
    episode: 1,
    chapter: 4,
    title: 'A bride from the sunset lands',
  },
  {
    id: 'drogo',
    medium: 'books',
    episode: 1,
    chapter: 4,
    title: 'The feast at the manse',
  },
  {
    id: 'drogo',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'A silver filly',
  },
  {
    id: 'drogo',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Words in Dothraki',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 6,
    chapter: 47,
    title: 'A crown of molten gold',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 7,
    chapter: 55,
    title: 'The poison water',
  },
  {
    id: 'drogo',
    medium: 'show',
    episode: 8,
    chapter: 62,
    title: 'Mago’s challenge',
  },
  {
    id: 'drogo',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'Wounds from the battle',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'The fall from the saddle',
  },
  {
    id: 'drogo',
    medium: 'both',
    episode: 10,
    chapter: 69,
    title: 'The khal who cannot ride',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 1,
    chapter: 4,
    title: 'Sworn at the wedding',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 1,
    chapter: 4,
    title: 'A knight among the guests',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'Books for the bride',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Why he fled',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 2,
    chapter: 13,
    title: 'Reports to the council',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'Siding with the khaleesi',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 3,
    chapter: 24,
    title: 'A father he shamed',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 4,
    chapter: 37,
    title: 'Poachers and a wife',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 5,
    chapter: 47,
    title: 'The informer',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 6,
    chapter: 47,
    title: 'The dragon eggs',
  },
  {
    id: 'jorah-mormont',
    medium: 'show',
    episode: 7,
    chapter: 55,
    title: 'A royal pardon',
  },
  {
    id: 'jorah-mormont',
    medium: 'books',
    episode: 7,
    chapter: 55,
    title: 'A warning from Pentos',
  },
  {
    id: 'jorah-mormont',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'In armor',
  },
  {
    id: 'jorah-mormont',
    medium: 'both',
    episode: 10,
    chapter: 73,
    title: 'On his knees',
  },
  {
    id: 'illyrio-mopatis',
    medium: 'both',
    episode: 1,
    chapter: 4,
    title: 'The magister’s guests',
  },
  {
    id: 'illyrio-mopatis',
    medium: 'both',
    episode: 2,
    chapter: 12,
    title: 'Three dragon eggs',
  },
  {
    id: 'illyrio-mopatis',
    medium: 'show',
    episode: 5,
    chapter: 47,
    title: 'Under the Red Keep',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'The moon and the sun',
  },
  {
    id: 'irri',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'A wedding gift',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 3,
    chapter: 24,
    title: 'News of a child',
  },
  {
    id: 'irri',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'The first to notice',
  },
  {
    id: 'irri',
    medium: 'show',
    episode: 6,
    chapter: 47,
    title: 'Burned hands',
  },
  {
    id: 'doreah',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'Not a slave',
  },
  {
    id: 'doreah',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'A handmaiden from Lys',
  },
  {
    id: 'doreah',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'The second moon',
  },
  {
    id: 'doreah',
    medium: 'both',
    episode: 4,
    chapter: 37,
    title: 'Dragged to the khaleesi',
  },
  { id: 'rakharo', medium: 'show', episode: 3, chapter: 24, title: 'The whip' },
  {
    id: 'rakharo',
    medium: 'show',
    episode: 7,
    chapter: 55,
    title: 'The merchant’s ankles',
  },
  {
    id: 'rakharo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'The fight at the tent',
  },
  {
    id: 'rakharo',
    medium: 'show',
    episode: 10,
    chapter: 73,
    title: 'The eggs on the pyre',
  },
  {
    id: 'rakharo',
    medium: 'books',
    episode: 10,
    chapter: 73,
    title: 'A promise and no more',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'both',
    episode: 8,
    chapter: 62,
    title: 'The godswife',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'A life for a life',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'Revenge for her people',
  },
  {
    id: 'mirri-maz-duur',
    medium: 'both',
    episode: 10,
    chapter: 73,
    title: 'Bound to the pyre',
  },
  {
    id: 'qotho',
    medium: 'show',
    episode: 6,
    chapter: 62,
    title: 'The broken arm',
  },
  { id: 'qotho', medium: 'both', episode: 8, chapter: 62, title: 'A maegi' },
  {
    id: 'qotho',
    medium: 'both',
    episode: 9,
    chapter: 65,
    title: 'Death outside the tent',
  },
  {
    id: 'cohollo',
    medium: 'books',
    episode: 4,
    chapter: 37,
    title: 'The oldest bloodrider',
  },
  {
    id: 'cohollo',
    medium: 'books',
    episode: 6,
    chapter: 47,
    title: 'Disarming the beggar king',
  },
  {
    id: 'cohollo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Spitting in her face',
  },
  {
    id: 'haggo',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'An offer to the khal',
  },
  {
    id: 'haggo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Under Jhogo’s whip',
  },
  {
    id: 'jhiqui',
    medium: 'show',
    episode: 2,
    chapter: 12,
    title: 'A goddess in the sky',
  },
  {
    id: 'jhiqui',
    medium: 'books',
    episode: 2,
    chapter: 12,
    title: 'To teach the tongue',
  },
  {
    id: 'aggo',
    medium: 'books',
    episode: 11,
    chapter: 62,
    title: 'A blade at the godswife’s throat',
  },
  {
    id: 'aggo',
    medium: 'books',
    episode: 11,
    chapter: 65,
    title: 'An arrow for Cohollo',
  },
  {
    id: 'aggo',
    medium: 'books',
    episode: 11,
    chapter: 73,
    title: 'Only a man',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 3,
    chapter: 24,
    title: 'A whip around the neck',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 7,
    chapter: 55,
    title: 'The wine seller’s flight',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Against the bloodriders',
  },
  {
    id: 'jhogo',
    medium: 'books',
    episode: 10,
    chapter: 73,
    title: 'It would shame him',
  },
  {
    id: 'quaro',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'Honored, he says',
  },
  {
    id: 'quaro',
    medium: 'books',
    episode: 9,
    chapter: 65,
    title: 'Answering her call',
  },
  {
    id: 'mago',
    medium: 'books',
    episode: 8,
    chapter: 62,
    title: 'A captive taken from him',
  },
  {
    id: 'mago',
    medium: 'show',
    episode: 8,
    chapter: 63,
    title: 'Challenging the khal',
  },
  {
    id: 'mago',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'Jhaqo’s bloodrider',
  },
  {
    id: 'eroeh',
    medium: 'books',
    episode: 10,
    chapter: 69,
    title: 'The girl Daenerys saved',
  },
]

/** Each character's first story, at its own gate in each medium it is told in. */
const FIRST: { chapter: number; episode: number; id: string }[] = [
  { id: 'daenerys-targaryen', episode: 1, chapter: 4 },
  { id: 'viserys-targaryen', episode: 1, chapter: 4 },
  { id: 'drogo', episode: 1, chapter: 4 },
  { id: 'jorah-mormont', episode: 1, chapter: 4 },
  { id: 'illyrio-mopatis', episode: 1, chapter: 4 },
  { id: 'irri', episode: 2, chapter: 12 },
  { id: 'doreah', episode: 2, chapter: 12 },
  { id: 'jhiqui', episode: 2, chapter: 12 },
  { id: 'rakharo', episode: 3, chapter: 24 },
  { id: 'jhogo', episode: 3, chapter: 24 },
  { id: 'cohollo', episode: 4, chapter: 37 },
  { id: 'qotho', episode: 6, chapter: 62 },
  { id: 'mirri-maz-duur', episode: 8, chapter: 62 },
  { id: 'haggo', episode: 8, chapter: 62 },
  { id: 'quaro', episode: 8, chapter: 62 },
  { id: 'mago', episode: 8, chapter: 62 },
  { id: 'eroeh', episode: 10, chapter: 69 },
  // The show names him only in season 2, so his stories are the books'.
  { id: 'aggo', episode: 11, chapter: 62 },
]

/** The stage's last episode and last site chapter (#1360). */
const LAST_EPISODE = 10
const LAST_CHAPTER = 73

const ep = (episode: number): Bookmark => ({ mode: 'episode', episode })
const ch = (chapter: number): Bookmark => ({ mode: 'chapter', chapter })

function character(id: string): Entity {
  const owner = archive.getCharacter(id)
  if (owner === undefined) {
    throw new Error(`Missing Essos fixture ${id}`)
  }
  return owner
}

/** Every title a reader has, the lazily loaded rest included, sorted. */
function chronicleTitles(owner: Entity, reader: Reader): string[] {
  const entries = [
    ...chronicleOf(owner, reader).entries,
    ...chronicleRestOf(owner.id, reader),
  ]
  return entries.map((entry) => entry.title).toSorted(byString())
}

/** A filed story's medium, read off its `source`. */
function mediumOf({ source }: Dated<Story>): Medium {
  if (source === 'episode') {
    return 'show'
  }
  return source === 'chapter' ? 'books' : 'both'
}

/** A row as one comparable line. */
function lineOf({ chapter, episode, id, medium, title }: Row): string {
  return `${id} ${medium} ${String(episode)} ${String(chapter)} ${title}`
}

/** The data's stories, in the table's shape. */
const FILED: Row[] = Object.entries(season1Chronicles).flatMap(
  ([id, stories]) =>
    stories.map((story) => ({
      // Every story pins its chapter; a missing one fails the comparison.
      chapter: story.chapter ?? 0,
      episode: story.episode,
      id,
      medium: mediumOf(story),
      title: story.value.title.en,
    })),
)

/** The filed stories by owner. */
const BY_OWNER = new Map<string, Dated<Story>[]>(
  Object.entries(season1Chronicles),
)

/** A row's title in one locale, read from the data. */
function titleIn({ id, title }: Row, locale: Locale): string {
  const found = BY_OWNER.get(id)?.find(({ value }) => value.title.en === title)
  if (found === undefined) {
    throw new Error(`No story ${title} for ${id}`)
  }
  return found.value.title[locale]
}

/** The titles of one owner's rows in one locale, sorted. */
function titlesOf(rows: Row[], locale: Locale): string[] {
  return rows.map((row) => titleIn(row, locale)).toSorted(byString())
}

describe('the Essos chronicles of the first stage', () => {
  it('files exactly the stories the table lists', () => {
    const filed = FILED.map((row) => lineOf(row)).toSorted(byString())
    const listed = STORIES.map((row) => lineOf(row)).toSorted(byString())

    expect(filed).toStrictEqual(listed)
  })

  it('files every story on the character the archive holds', () => {
    for (const [id, stories] of Object.entries(season1Chronicles)) {
      const filed = archive.dossierOf(character(id))?.chronicle

      expect(filed, id).toStrictEqual(stories)
    }
  })

  it.each(FIRST)(
    'opens $id’s chronicle at episode $episode and chapter $chapter',
    ({ chapter, episode, id }) => {
      const owner = character(id)
      const first = archive.dossierOf(owner)?.chronicle?.[0]

      expect(first?.episode).toBe(episode)
      expect(first?.chapter).toBe(chapter)
      expect(owner.revealedAtEpisode).toBe(episode)
      expect(owner.revealedAtChapter).toBe(chapter)
    },
  )

  it('keeps Jaqen H’ghar, Rorge and Biter out, past the stage', () => {
    for (const id of ['jaqen-hghar', 'rorge', 'biter']) {
      expect(archive.dossierOf(character(id))?.chronicle, id).toBeUndefined()
    }
  })

  it('stays inside the stage in each medium it is told in', () => {
    const shown = STORIES.filter(({ medium }) => medium !== 'books')
    const told = STORIES.filter(({ medium }) => medium !== 'show')

    expect(Math.max(...shown.map(({ episode }) => episode))).toBe(LAST_EPISODE)
    expect(Math.max(...told.map(({ chapter }) => chapter))).toBe(LAST_CHAPTER)
  })
})

describe.each(LOCALES)('the Essos chronicles in %s', (locale) => {
  const read = (bookmark: Bookmark): Reader =>
    readerFor(archive, bookmark, locale)
  const at = (owner: Entity, bookmark: Bookmark): string[] =>
    chronicleTitles(owner, read(bookmark))

  it.each(STORIES.filter(({ medium }) => medium !== 'books'))(
    'shows $id’s $medium story “$title” at episode $episode, never before',
    (row) => {
      const owner = character(row.id)
      const title = titleIn(row, locale)

      expect(at(owner, ep(row.episode - 1))).not.toContain(title)
      expect(at(owner, ep(row.episode))).toContain(title)
    },
  )

  it.each(STORIES.filter(({ medium }) => medium !== 'show'))(
    'shows $id’s $medium story “$title” at chapter $chapter, never before',
    (row) => {
      const owner = character(row.id)
      const title = titleIn(row, locale)

      expect(at(owner, ch(row.chapter - 1))).not.toContain(title)
      expect(at(owner, ch(row.chapter))).toContain(title)
    },
  )

  it.each(STORIES.filter(({ medium }) => medium !== 'both'))(
    'keeps $id’s $medium story “$title” from the other medium',
    (row) => {
      const owner = character(row.id)
      const other =
        row.medium === 'show' ?
          ch(archive.series.chapterCeiling)
        : ep(archive.series.episodeCeiling)

      expect(at(owner, other)).not.toContain(titleIn(row, locale))
    },
  )

  it.each(FIRST)(
    'shows $id no story before the gate in either medium',
    ({ chapter, episode, id }) => {
      const owner = character(id)

      expect(at(owner, ep(episode - 1))).toStrictEqual([])
      expect(at(owner, ch(chapter - 1))).toStrictEqual([])
    },
  )

  it.each(Object.keys(season1Chronicles))(
    'adds nothing to %s’s chronicle past the stage',
    (id) => {
      const owner = character(id)
      const owned = STORIES.filter((row) => row.id === id)
      const shown = titlesOf(
        owned.filter(({ medium }) => medium !== 'books'),
        locale,
      )
      const told = titlesOf(
        owned.filter(({ medium }) => medium !== 'show'),
        locale,
      )

      expect(at(owner, ep(LAST_EPISODE))).toStrictEqual(shown)
      expect(at(owner, ep(LAST_EPISODE + 1))).toStrictEqual(shown)
      expect(at(owner, ch(LAST_CHAPTER))).toStrictEqual(told)
      expect(at(owner, ch(LAST_CHAPTER + 1))).toStrictEqual(told)
    },
  )
})
