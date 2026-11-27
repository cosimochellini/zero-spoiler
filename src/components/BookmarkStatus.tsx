import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useEffect, useRef } from 'react'

import { MARK_ID } from '~/components/EpisodeMark'
import { stripStyles } from '~/components/Strip.styles'
import { Button } from '~/components/ui/Button'
import { useSettled } from '~/components/useSettled'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import {
  type BookmarkNotice,
  useBookmark,
} from '~/lib/progress/BookmarkContext'
import type { Bookmark } from '~/lib/progress/episode'
import { useOpenCount } from '~/lib/progress/openEntries'
import type { Book } from '~/lib/progress/series'
import { bookmarkPoint } from '~/lib/progress/threshold'

/** How long the sentence waits for a listing's count before it is said. */
const SETTLE_MS = 250

/**
 * The line under the bar after the bookmark is saved, moved or cleared: where
 * it is now, and on a listing how many entries that opened or sent back under
 * fog. It stays until the reader leaves the page, and ends there: the
 * provider drops the notice as the navigation starts.
 *
 * The count is the listing's own count of its open entries, before and after
 * (`openEntries`). It says how many, never which, and nothing about an entry
 * still under fog. A move between the anime's units and the manga's changes
 * which entries exist at all, so it gets no count.
 *
 * The sentence waits `SETTLE_MS` before it is said, and starts again if the
 * count arrives meanwhile, so the live region changes once and not twice.
 *
 * A cleared bookmark can be put back from here. The dialog's line clears at
 * once, with no question asked, so the way back is offered after the fact.
 *
 * The paragraph is on every series page, empty, so a screen reader hears the
 * sentence arrive in a live region it already knows.
 */
export function BookmarkStatus(): ReactElement {
  const t = useT()
  const { setBookmark } = useBookmark()
  const { notice, stripRef } = useArrivingNotice()
  const said = useSaid(notice)
  const cleared = said !== '' && notice?.to === null

  return (
    <div
      ref={stripRef}
      {...stylex.props(said !== '' && stripStyles.strip)}
    >
      <p
        role="status"
        {...stylex.props(stripStyles.words)}
      >
        {said}
      </p>
      {cleared && (
        <Button
          onClick={() => {
            setBookmark(notice.from)
          }}
        >
          {t('status.undo')}
        </Button>
      )}
    </div>
  )
}

interface ArrivingNotice {
  notice: BookmarkNotice | null
  stripRef: React.RefObject<HTMLDivElement | null>
}

/**
 * The notice, and a ref for its strip. When a notice arrives the reader is
 * brought to it.
 */
function useArrivingNotice(): ArrivingNotice {
  const { notice } = useBookmark()
  const stripRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-restricted-syntax -- DOM focus and scroll when a notice arrives from the bookmark context, raised by a save elsewhere
  useEffect(() => {
    if (notice === null) {
      return
    }
    // The control that saved may be gone with the page it was on, as the
    // landing's is. Focus goes to the mark, which now reads the new point,
    // not to the top of the document.
    if (document.activeElement === document.body) {
      document.querySelector<HTMLElement>(`#${MARK_ID}`)?.focus()
    }
    // A reader who saved from halfway down a page would not see the line.
    // `nearest` leaves the page where it is when the line is in view.
    stripRef.current?.scrollIntoView({ block: 'nearest' })
  }, [notice])

  return { notice, stripRef }
}

/**
 * The sentence once it has settled, or nothing. It is dropped at once when
 * the notice ends, so it never lingers on the next page.
 */
function useSaid(notice: BookmarkNotice | null): string {
  const t = useT()
  const { series } = useBookmark()
  const open = useOpenCount()
  const words =
    notice === null ? '' : wordsOf(t, { books: series?.books, notice, open })
  const settled = useSettled(words, SETTLE_MS)

  return notice === null ? '' : settled
}

interface WordsOfOptions {
  books: Book[] | undefined
  notice: BookmarkNotice
  open: null | number
}

/** Where the bookmark is now, and what that changed on this listing. */
function wordsOf(
  t: Translate,
  { books, notice, open }: WordsOfOptions,
): string {
  const moved = movedWords(t, notice, books)
  const change = changeOf(notice, open)
  if (change === 0) {
    return moved
  }

  const count = Math.abs(change)
  const key = change > 0 ? 'status.opened' : 'status.fogged'
  const changed = t(count === 1 ? `${key}One` : key, { count })

  return `${moved} ${changed}`
}

/**
 * How many more entries the listing has open than before the save; negative
 * when they went back under fog. Zero when either count is missing, and when
 * the bookmark moved between the anime's units and the manga's.
 */
function changeOf(
  { from, open: before, to }: BookmarkNotice,
  now: null | number,
): number {
  if (now === null || before === null || !sameSource(from, to)) {
    return 0
  }

  return now - before
}

/** Whether two bookmarks count in the same medium; no bookmark fits either. */
function sameSource(from: Bookmark, to: Bookmark): boolean {
  return (
    from === null
    || to === null
    || (from.mode === 'chapter') === (to.mode === 'chapter')
  )
}

/** "Bookmark cleared.", or where it was set or moved to, said in words. */
function movedWords(
  t: Translate,
  { from, to }: BookmarkNotice,
  books: Book[] | undefined,
): string {
  if (to === null) {
    return t('status.cleared')
  }

  // No-break spaces, so a narrow phone never parts "Episode" from its number.
  return t(from === null ? 'status.set' : 'status.moved', {
    point: bookmarkPoint(t, to, books).replaceAll(' ', '\u{A0}'),
  })
}
