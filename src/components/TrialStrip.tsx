import * as stylex from '@stylexjs/stylex'
import type { ReactElement } from 'react'

import { stripStyles } from '~/components/Strip.styles'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { type Bookmark, bookmarkValue } from '~/lib/progress/episode'
import type { Book } from '~/lib/progress/series'
import { bookmarkBook } from '~/lib/progress/threshold'
import { markWelcome } from '~/lib/progress/welcome'
import { color, space } from '~/styles/tokens.stylex'

/**
 * The line under the bar while a visitor is on a trial point: which point,
 * that nothing is saved, and the two ways out of it.
 */
export function TrialStrip(): null | ReactElement {
  const t = useT()
  const { bookmark, leaveTrial, series, setBookmark, trial } = useBookmark()

  if (!trial || bookmark === null || bookmark.mode === 'season') {
    return null
  }

  return (
    <div
      role="status"
      {...stylex.props(stripStyles.strip)}
    >
      <p {...stylex.props(stripStyles.words)}>
        {trialWords(t, bookmark, series?.books)}
      </p>
      <div {...stylex.props(styles.actions)}>
        <Button
          onClick={() => {
            markWelcome()
            setBookmark(bookmark)
          }}
          sx={styles.save}
        >
          {t('trial.save')}
        </Button>
        <Button onClick={leaveTrial}>{t('trial.leave')}</Button>
      </div>
    </div>
  )
}

/** The trial point, and a chapter on a series with books as its book. */
function trialWords(
  t: Translate,
  bookmark: NonNullable<Bookmark>,
  books: Book[] | undefined,
): string {
  const book = bookmarkBook(bookmark, books)
  if (book !== null) {
    return t('trial.book', { ...book })
  }

  return t(bookmark.mode === 'chapter' ? 'trial.chapter' : 'trial.episode', {
    threshold: bookmarkValue(bookmark),
  })
}

const styles = stylex.create({
  actions: { gap: space.xs, display: 'flex', flexWrap: 'wrap' },
  save: { borderColor: color.accent, color: color.accent },
})
