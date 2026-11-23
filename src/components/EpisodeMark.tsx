import * as stylex from '@stylexjs/stylex'
import { type ReactElement, type ReactNode, useState } from 'react'

import { BookmarkDialog } from '~/components/BookmarkDialog'
import { preloadBookmarkForm } from '~/components/bookmarkFormLoader'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { describeBookmark } from '~/lib/progress/threshold'
import { color, font, leading, space, text } from '~/styles/tokens.stylex'

/**
 * Which of the mark's two homes it is standing in. In the bar it is the
 * reader's place, written as a numeral; in the fold it is the invitation to
 * name one, written as a verb — the same control, asked for twice.
 */
export interface EpisodeMarkProps {
  placement?: 'bar' | 'fold'
}

/**
 * The id of the mark in the bar: where focus goes when the control that saved
 * the bookmark left the page with the save (`BookmarkStatus`).
 */
export const MARK_ID = 'bookmark-mark'

/** What the mark shows, and what a screen reader is told beyond that. */
interface MarkFace {
  hint: string | undefined
  /** The bar's mark carries `MARK_ID`; the fold's invitation has none. */
  id: string | undefined
  label: ReactNode
  look: stylex.StyleXStyles
}

/**
 * Turns the bookmark, as the mark says it (`null` when there is none), into
 * what the control shows and its name.
 *
 * In the bar the label is the numeral alone, so the sentence that explains
 * what pressing it does has to be the accessible name. In the fold the label
 * is already that sentence, and repeating it in an `aria-label` would only
 * make the button announce itself twice.
 */
function faceOf(
  t: Translate,
  said: null | string,
  { inFold, trial }: { inFold: boolean; trial: boolean },
): MarkFace {
  const mark = said ?? t('mark.unset')

  // Unset, the bar paints the empty slot (`EP ?`), which fits beside the
  // wordmark on the narrowest phone, and keeps the words as the accessible
  // name.
  if (!inFold) {
    if (said === null) {
      return {
        hint: mark,
        id: MARK_ID,
        label: t('mark.unsetShort'),
        look: [styles.mark, styles.markUnset],
      }
    }
    // A trial point is not saved, so it is not dressed as a bookmark: the
    // word goes above the point, which keeps the mark a few pixels wider than
    // the saved one rather than twice as wide, inside the bar at 320px. The
    // name starts with what is shown.
    if (trial) {
      return {
        hint: t('mark.trialHint', { threshold: mark }),
        id: MARK_ID,
        label: (
          <>
            <span {...stylex.props(styles.trialWord)}>{t('mark.trial')}</span>
            <span>{mark}</span>
          </>
        ),
        look: [styles.mark, styles.markUnset, styles.markTrial],
      }
    }
    return {
      hint: t('mark.change', { threshold: mark }),
      id: MARK_ID,
      label: mark,
      look: styles.mark,
    }
  }

  return {
    hint: undefined,
    id: undefined,
    label:
      said === null ?
        t('hero.setBookmark')
      : t('hero.changeBookmark', { threshold: mark }),
    look: styles.invite,
  }
}

function handlePreload(): void {
  void preloadBookmarkForm()
}

/**
 * The reader's bookmark, as one mark in the bar: `EP 650`, `S02E03` or
 * `CH 1044`, or the invitation to set one. It is the one control the whole
 * site turns on, so it is the one gold thing in the bar. Pressing it opens
 * the dialog where the bookmark is chosen; nothing is edited in place.
 *
 * The fold asks for the same thing in words, and gets the same control rather
 * than a copy of it: each instance owns its own short-lived open state, and
 * the dialog is mounted only while it is open, so two invitations never mean
 * two dialogs. The native `<dialog>` returns focus to whichever of them was
 * pressed.
 *
 * The dialog is mounted only while it is open, so every opening starts from
 * the bookmark as it stands, and nothing about it is in the served HTML.
 */
export function EpisodeMark({
  placement = 'bar',
}: EpisodeMarkProps): ReactElement {
  const t = useT()
  const { bookmark, pending, series, trial } = useBookmark()
  const [open, setOpen] = useState(false)

  const inFold = placement === 'fold'
  const face = faceOf(
    t,
    bookmark === null ? null : (
      describeBookmark(t, 'mark', { bookmark, books: series?.books })
    ),
    { inFold, trial },
  )

  return (
    <>
      <Button
        // The records come from the server now, so a new bookmark takes a
        // round trip. The mark says so rather than looking inert; it is not
        // `disabled`, which would drop focus and the announcement with it.
        aria-busy={pending}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={face.hint}
        id={face.id}
        onClick={() => {
          setOpen(true)
        }}
        onFocus={handlePreload}
        onPointerEnter={handlePreload}
        sx={face.look}
      >
        {face.label}
      </Button>

      {open && (
        <BookmarkDialog
          onClose={() => {
            setOpen(false)
          }}
        />
      )}
    </>
  )
}

const styles = stylex.create({
  // The episode numeral's voice, the mono outlier, set in the accent: the
  // same ink as the horizon line it moves. The accent is the text and the
  // border on hover, never a fill.
  mark: {
    borderColor: {
      'default': color.rule2,
      ':hover:not(:disabled)': color.accent,
    },
    paddingInline: space.sm,
    color: { 'default': color.accent, ':hover:not(:disabled)': color.ink },
    fontFamily: font.mono,
    fontSize: text.xs,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  // No bookmark yet: the dashed rule of the fogged stretch of route, in the
  // ambient ink, so the unset state reads as "still under fog". A trial
  // point wears it too: nothing is saved.
  markUnset: {
    borderStyle: 'dashed',
    color: { 'default': color.ink2, ':hover:not(:disabled)': color.accent },
  },
  // Two short lines in the mark's 44px: the word over the point, on less
  // padding so the mark is no taller than the saved one.
  markTrial: {
    gap: 0,
    paddingBlock: space.xs2,
    flexDirection: 'column',
    lineHeight: leading.heading,
  },
  trialWord: { color: color.muted },
  // In the fold it is the page's one first action, so it is given the accent
  // outright — as the border and as the word, and still never as a fill: a
  // gold surface that size would stop being a signal.
  invite: {
    borderColor: {
      'default': color.accent,
      ':hover:not(:disabled)': color.ink,
    },
    paddingBlock: space.sm,
    // The label carries the threshold, so the longest of them — `Change your
    // bookmark · CH 1044` — is what has to fit. At 320px it only does with the
    // narrower padding: a chip label that wraps reads as a styling error, and
    // `overflow-x: clip` on the document hides an overflow rather than letting
    // the reader scroll to it.
    paddingInline: {
      'default': space.md,
      '@media (min-width: 40rem)': space.lg,
    },
    color: { 'default': color.accent, ':hover:not(:disabled)': color.ink },
    fontWeight: 700,
    letterSpacing: '0.01em',
  },
})
