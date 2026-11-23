import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useId, useState } from 'react'

import { NumberField, UnitFields } from '~/components/BookmarkFields'
import {
  dialBookmark,
  dialLast,
  type DialPoint,
  switchUnit,
} from '~/components/dial'
import { modeKey } from '~/components/modeKey'
import { styles } from '~/components/Onboarding.styles'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import type { Translate } from '~/i18n/types'
import { useBookmark, useBookmarkSeries } from '~/lib/progress/BookmarkContext'
import { locateChapter } from '~/lib/progress/books'
import type { Bookmark } from '~/lib/progress/episode'
import type { Book } from '~/lib/progress/series'
import { useBookmarkDraft } from '~/lib/progress/useBookmarkDraft'
import { markWelcome } from '~/lib/progress/welcome'
import { stickyStyles } from '~/styles/sticky'

/** The dial's point, how to move it, and what it is standing in. */
export interface OnboardingDialProps {
  /** The name of the arc the point is in, if the dial has reached one. */
  arc: string | undefined
  chapterAt: number[]
  onPoint: (next: DialPoint) => void
  point: DialPoint
}

/**
 * The dial's unit in words and its point in that unit: "Episode" 12,
 * "Chapter" 45, or on a series with books "Book 1, chapter" 45, counted
 * within the book.
 */
function readingOf(
  t: Translate,
  point: DialPoint,
  books: Book[] | undefined,
): { unit: string; value: number } {
  const book =
    point.mode === 'chapter' ? locateChapter(point.value, books) : null
  if (book !== null) {
    return {
      unit: t('onboarding.unitBook', { book: book.book }),
      value: book.chapter,
    }
  }

  return {
    unit: t(
      point.mode === 'chapter' ?
        'onboarding.unitChapter'
      : 'onboarding.unitEpisode',
    ),
    value: point.value,
  }
}

/**
 * The dial: the arc its point is in, then one row, the point in large
 * figures, a native range input over the series' demo span (East Blue for
 * One Piece) and the button that saves it.
 *
 * The row is pinned while the preview scrolls under it, folded: the arc and
 * the label scroll away above it, and the unit and the scale tuck under the
 * site bar. Pinned, the whole dial took a third of a phone's screen (#1399).
 * Where the row has no room for a usable range beside the numeral and the
 * button, as on a 320px phone or with large text, the range takes a line of
 * its own and the numeral and the button go under it.
 * The fold is the sticky offset alone, so nothing moves, nothing is
 * animated, and the range keeps its name, its value text and its keys.
 */
export function OnboardingDial({
  arc,
  onPoint,
  point,
}: Omit<OnboardingDialProps, 'chapterAt'>): ReactElement {
  const t = useT()
  const id = useId()
  const series = useBookmarkSeries()
  const last = dialLast(point.mode, series)
  const reading = readingOf(t, point, series.books)
  // On a series with books the numeral counts within the book, and so do the
  // ends of the scale; the unit over them names the book.
  const edge = (value: number): string =>
    String(readingOf(t, { ...point, value }, series.books).value)
  const widest = edge(last)

  return (
    <>
      <DialHead
        arc={arc}
        rangeId={id}
      />

      <div {...stylex.props(styles.dial)}>
        <span {...stylex.props(styles.unitLabel, styles.unit)}>
          {reading.unit}
        </span>
        <div
          aria-hidden="true"
          {...stylex.props(styles.scale)}
        >
          <span>{edge(1)}</span>
          <span>{widest}</span>
        </div>
        <input
          aria-valuetext={`${reading.unit} ${String(reading.value)}`}
          id={id}
          max={last}
          min={1}
          onChange={(event) => {
            onPoint({ ...point, value: event.currentTarget.valueAsNumber })
          }}
          type="range"
          value={point.value}
          {...stylex.props(styles.range, stickyStyles.insideRoom)}
        />
        <span
          {...stylex.props(
            styles.numeral,
            styles.beside,
            styles.digits(widest.length),
          )}
        >
          {reading.value}
        </span>
        <HereButton point={point} />
      </div>
    </>
  )
}

/** "I'm here": saves the dial's point as the bookmark. */
function HereButton({
  point,
}: Pick<OnboardingDialProps, 'point'>): ReactElement {
  const t = useT()
  const save = useSave()

  return (
    <Button
      onClick={() => {
        save(dialBookmark(point))
      }}
      sx={[
        styles.primary,
        styles.beside,
        styles.hereCell,
        stickyStyles.insideRoom,
      ]}
    >
      {t('onboarding.here')}
    </Button>
  )
}

/**
 * Over the dial, scrolling away when it pins: what the range is, and the
 * arc its point is in, announced politely as the dial moves.
 */
function DialHead({
  arc,
  rangeId,
}: Pick<OnboardingDialProps, 'arc'> & { rangeId: string }): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.dialHead)}>
      <label
        htmlFor={rangeId}
        {...stylex.props(styles.unitLabel)}
      >
        {t('onboarding.dial')}
      </label>
      {arc !== undefined && (
        <span
          aria-live="polite"
          {...stylex.props(styles.arcName)}
        >
          {arc}
        </span>
      )}
    </div>
  )
}

/**
 * Under the dial: the unit it counts in, and the two other ways to save a
 * point, one for a reader past the demo span and one for a reader starting
 * now.
 */
export function OnboardingControls({
  chapterAt,
  onPoint,
  point,
}: Omit<OnboardingDialProps, 'arc'>): ReactElement {
  const t = useT()
  const save = useSave()
  const [further, setFurther] = useState(false)
  const formId = useId()

  return (
    <div {...stylex.props(styles.controls)}>
      <UnitSwitch
        chapterAt={chapterAt}
        onPoint={onPoint}
        point={point}
      />

      <p {...stylex.props(styles.hint)}>{t('onboarding.tryHint')}</p>

      <div {...stylex.props(styles.actions)}>
        <Button
          aria-controls={further ? formId : undefined}
          aria-expanded={further}
          onClick={() => {
            setFurther(!further)
          }}
          sx={styles.clearsDial}
        >
          {t('onboarding.further')}
        </Button>
        <Button
          onClick={() => {
            save({ mode: 'episode', episode: 1 })
          }}
          sx={styles.clearsDial}
        >
          {t('onboarding.start')}
        </Button>
      </div>

      {further && (
        <FurtherForm
          id={formId}
          save={save}
        />
      )}
    </div>
  )
}

/** Anime episodes or manga chapters, keeping the dial at the same moment. */
function UnitSwitch({
  chapterAt,
  onPoint,
  point,
}: Omit<OnboardingDialProps, 'arc'>): ReactElement {
  const t = useT()
  const series = useBookmarkSeries()

  return (
    <div
      aria-label={t('dialog.modeLabel')}
      role="group"
      {...stylex.props(styles.units)}
    >
      {(['episode', 'chapter'] as const).map((mode) => {
        return (
          <Button
            key={mode}
            aria-pressed={point.mode === mode}
            onClick={() => {
              if (point.mode !== mode) {
                onPoint(switchUnit(point, chapterAt))
              }
            }}
            sx={[styles.clearsDial, point.mode === mode && styles.unitOn]}
          >
            {t(modeKey(mode, series))}
          </Button>
        )
      })}
    </div>
  )
}

/** The bookmark fields, inline: the same draft the dialog edits. */
function FurtherForm({
  id,
  save,
}: {
  id: string
  save: (next: NonNullable<Bookmark>) => void
}): ReactElement {
  const t = useT()
  const {
    canSave,
    draft,
    onBlur,
    onChange,
    onGroup,
    onMode,
    onSubmit,
    problem,
  } = useBookmarkDraft(null, save)

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      {...stylex.props(styles.form)}
    >
      <UnitFields
        draft={draft}
        onGroup={onGroup}
        onMode={onMode}
      />
      <NumberField
        draft={draft}
        onBlur={onBlur}
        onChange={onChange}
        problem={problem}
      />
      <Button
        disabled={!canSave}
        sx={[styles.primary, styles.clearsDial]}
        type="submit"
      >
        {t('dialog.save')}
      </Button>
    </form>
  )
}

/**
 * Saves a bookmark from the onboarding, and asks the home page it opens on
 * for the one-time welcome.
 */
function useSave(): (next: NonNullable<Bookmark>) => void {
  const { setBookmark } = useBookmark()

  return (next) => {
    markWelcome()
    setBookmark(next)
  }
}
