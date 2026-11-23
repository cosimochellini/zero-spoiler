import { type SyntheticEvent, useState } from 'react'

import { useBookmarkSeries } from './BookmarkContext'
import {
  type Bookmark,
  type BookmarkMode,
  type Draft,
  draftOf,
  type DraftProblem,
  gradeDraft,
  twinDraft,
} from './episode'
import type { BookmarkSeries } from './series'

/** A bookmark under edit, and what its fields and its form are handed. */
export interface BookmarkDraft {
  /** Whether the draft grades to a bookmark that Save would store. */
  canSave: boolean
  draft: Draft
  /** The field has been left once: from now on its problem shows. */
  onBlur: () => void
  onChange: (number: string) => void
  /** A new season or book: the number in it begins again, untouched. */
  onGroup: (group: string) => void
  /** A new unit: its own draft comes back, untouched. */
  onMode: (mode: BookmarkMode) => void
  /** The form's submit: saves the graded bookmark, if there is one. */
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void
  /** Null until the field has been blurred once; live on every keystroke after. */
  problem: DraftProblem | null
}

/** One draft per unit, so switching away and back loses nothing. */
type Drafts = Record<BookmarkMode, Draft>

const EMPTY: Drafts = {
  chapter: { mode: 'chapter', group: '', number: '' },
  episode: { mode: 'episode', group: '', number: '' },
  season: { mode: 'season', group: '', number: '' },
}

/**
 * Stores a draft under its unit. A valid episode or season draft also rewrites
 * the other of the two, which says the same point exactly; a half-typed one
 * leaves it as it was.
 */
function keep(drafts: Drafts, draft: Draft, series: BookmarkSeries): Drafts {
  const twin = twinDraft(draft, series)
  return {
    ...drafts,
    [draft.mode]: draft,
    ...(twin !== null && { [twin.mode]: twin }),
  }
}

/**
 * The draft from the unit down to the number, shared by the dialog and the
 * onboarding's inline fields.
 *
 * Each unit keeps its own draft. The saved bookmark fills its unit and, for
 * episodes and seasons, the other one too; a chapter is not an episode, so the
 * chapter draft starts empty unless the bookmark is a chapter.
 *
 * Nothing reaches the cookie until Save, so a reader who tries a unit and
 * leaves still has the bookmark they arrived with. Validation follows the
 * touched pattern: silent until the field is blurred, then live on every
 * keystroke.
 */
export function useBookmarkDraft(
  from: Bookmark,
  save: (next: NonNullable<Bookmark>) => void,
): BookmarkDraft {
  const series = useBookmarkSeries()
  const [mode, setMode] = useState(() => draftOf(from, series).mode)
  const [drafts, setDrafts] = useState(() =>
    keep(EMPTY, draftOf(from, series), series),
  )
  const [touched, setTouched] = useState(false)
  const draft = drafts[mode]
  const graded = gradeDraft(draft, series)

  return {
    canSave: graded.bookmark !== null,
    draft,
    problem: touched ? graded.problem : null,
    onBlur: () => {
      setTouched(true)
    },
    onChange: (number) => {
      setDrafts(keep(drafts, { ...draft, number }, series))
    },
    onGroup: (group) => {
      setDrafts(keep(drafts, { ...draft, group, number: '' }, series))
      setTouched(false)
    },
    onMode: (next) => {
      setMode(next)
      // A number left out of range in that unit shows its problem again on
      // return; an empty one stays quiet until it is left.
      const back = drafts[next]
      setTouched(
        back.number.trim() !== '' && gradeDraft(back, series).problem !== null,
      )
    },
    onSubmit: (event) => {
      event.preventDefault()
      if (graded.bookmark !== null) {
        save(graded.bookmark)
      }
    },
  }
}
