import * as stylex from '@stylexjs/stylex'
import { useLocation } from '@tanstack/react-router'
import { type ReactElement, useEffect, useRef } from 'react'

import { MARK_ID } from '~/components/EpisodeMark'
import { stripStyles } from '~/components/Strip.styles'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import {
  type BookmarkNotice,
  useBookmark,
} from '~/lib/progress/BookmarkContext'
import { useOpenCount } from '~/lib/progress/openEntries'
import type { Book } from '~/lib/progress/series'
import { describeBookmark } from '~/lib/progress/threshold'

/**
 * The line under the bar after the bookmark is saved, moved or cleared: where
 * it is now, and on a listing how many entries that opened or sent back under
 * fog. It stays until the reader leaves the page.
 *
 * The count is the listing's own count of its open entries, before and after
 * (`openEntries`). It says how many, never which, and nothing about an entry
 * still under fog.
 *
 * A cleared bookmark can be put back from here. The dialog's line clears at
 * once, with no question asked, so the way back is offered after the fact.
 *
 * The paragraph is on every series page, empty, so a screen reader hears the
 * sentence arrive in a live region it already knows.
 */
export function BookmarkStatus(): ReactElement {
  const t = useT()
  const { series, setBookmark } = useBookmark()
  const open = useOpenCount()
  const { shown, stripRef } = useNotice()

  return (
    <div
      ref={stripRef}
      {...stylex.props(shown !== null && stripStyles.strip)}
    >
      <p
        role="status"
        {...stylex.props(stripStyles.words)}
      >
        {shown !== null
          && wordsOf(t, { books: series?.books, notice: shown, open })}
      </p>
      {shown !== null && shown.to === null && (
        <Button
          onClick={() => {
            setBookmark(shown.from)
          }}
        >
          {t('status.undo')}
        </Button>
      )}
    </div>
  )
}

/**
 * The notice of this page, or `null` once the reader has left the page it
 * was made on, and a ref for its strip. When a notice arrives the reader is
 * brought to it.
 */
function useNotice(): {
  shown: BookmarkNotice | null
  stripRef: React.RefObject<HTMLDivElement | null>
} {
  const { notice } = useBookmark()
  const path = useLocation({ select: (location) => location.pathname })
  const shown = notice?.path === path ? notice : null
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shown === null) {
      return
    }
    // The control that saved may be gone with the page it was on, as the
    // landing's is. Focus goes to the mark, which now reads the new point,
    // not to the top of the document.
    if (document.activeElement === document.body) {
      document.querySelector<HTMLElement>(`#${MARK_ID}`)?.focus()
    }
    // A reader who saved from halfway down a page would not see the line.
    stripRef.current?.scrollIntoView({ block: 'nearest' })
  }, [shown])

  return { shown, stripRef }
}

/** Where the bookmark is now, and what that changed on this listing. */
function wordsOf(
  t: Translate,
  {
    books,
    notice,
    open,
  }: { books: Book[] | undefined; notice: BookmarkNotice; open: null | number },
): string {
  const moved = movedWords(t, notice, books)
  const change = open === null || notice.open === null ? 0 : open - notice.open
  if (change === 0) {
    return moved
  }

  const count = Math.abs(change)
  const key = change > 0 ? 'status.opened' : 'status.fogged'
  const changed = t(count === 1 ? `${key}One` : key, { count })

  return `${moved} ${changed}`
}

/** "Bookmark cleared.", or where it was set or moved to, as the mark says it. */
function movedWords(
  t: Translate,
  { from, to }: BookmarkNotice,
  books: Book[] | undefined,
): string {
  if (to === null) {
    return t('status.cleared')
  }

  return t(from === null ? 'status.set' : 'status.moved', {
    threshold: describeBookmark(t, 'mark', { bookmark: to, books }),
  })
}
