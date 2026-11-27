import * as stylex from '@stylexjs/stylex'
import { type ReactElement, type RefObject, useRef } from 'react'

import { styles } from '~/components/BookmarkDialog.styles'
import { NumberField, UnitFields } from '~/components/BookmarkFields'
import { DevicesLink, DevicesView } from '~/components/SyncDevices'
import { Button } from '~/components/ui/Button'
import { useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import type { Bookmark } from '~/lib/progress/episode'
import { useBookmarkDraft } from '~/lib/progress/useBookmarkDraft'

/** What the form needs from the dialog around it. */
export interface BookmarkFormProps {
  /** Whether the QR code view is on show, and the form is out of sight. */
  devices: boolean
  /** The ids the dialog names itself by, for the head the QR view draws. */
  ledeId: string
  /** Asks the dialog to show the QR code view, or the form again. */
  onDevices: (open: boolean) => void
  /** Closes the dialog. Called on every way out, including a successful save. */
  onDone: () => void
  titleId: string
}

/**
 * The part of the dialog fetched on demand: the draft form, and the QR code
 * view that "More devices?" swaps it for. The dialog around them, with its
 * close button, is already on the page.
 *
 * The form stays mounted, out of sight, while the view is on show, so the
 * draft is as the reader left it when they come back.
 */
export function BookmarkForm({
  devices,
  ledeId,
  onDevices,
  onDone,
  titleId,
}: BookmarkFormProps): ReactElement {
  const linkRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <DraftForm
        devices={devices}
        linkRef={linkRef}
        onDevices={onDevices}
        onDone={onDone}
      />
      {devices && (
        <DevicesView
          ledeId={ledeId}
          onBack={() => {
            onDevices(false)
          }}
          onDone={onDone}
          returnFocusTo={linkRef}
          titleId={titleId}
        />
      )}
    </>
  )
}

/** The form's share of the dialog's props, and the link focus returns to. */
interface DraftFormProps extends Pick<
  BookmarkFormProps,
  'devices' | 'onDevices' | 'onDone'
> {
  linkRef: RefObject<HTMLButtonElement | null>
}

/**
 * The draft from the unit down to the number, and the two ways out of it that
 * live inside it: save and forget.
 *
 * Nothing here reaches the cookie until Save, so a reader who opens the
 * dialog, tries a unit and leaves still has the bookmark they arrived with.
 *
 * Out of sight, it is `hidden` to the browser's own rules, and `styles.away`
 * wins over the grid `styles.body` sets, which the attribute alone loses to.
 */
function DraftForm({
  devices,
  linkRef,
  onDevices,
  onDone,
}: DraftFormProps): ReactElement {
  const { bookmark, setBookmark } = useBookmark()

  const commit = (next: Bookmark): void => {
    // `setBookmark` writes the cookie and re-reads the pages, in that order.
    setBookmark(next)
    onDone()
  }
  const {
    canSave,
    draft,
    onBlur,
    onChange,
    onGroup,
    onMode,
    onSubmit,
    problem,
  } = useBookmarkDraft(bookmark, commit)

  return (
    <form
      hidden={devices}
      onSubmit={onSubmit}
      ref={focusOnArrival}
      {...stylex.props(styles.body, devices && styles.away)}
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
      <Actions
        canForget={bookmark !== null}
        canSave={canSave}
        onForget={() => {
          commit(null)
        }}
      />
      <DevicesLink
        linkRef={linkRef}
        onOpen={() => {
          onDevices(true)
        }}
      />
    </form>
  )
}

/**
 * When the form arrives after the dialog has opened, the browser has already
 * given the focus to the close button, the only control there was. It moves
 * to the chosen unit, where it would have started had the form been here.
 * Arriving with the dialog, the form leaves the focus to the dialog: its ref
 * attaches in the commit, and the dialog opens in `useModal`'s effect, which
 * runs after every ref of that commit, so the dialog is not open yet.
 *
 * A ref callback with one identity, so it runs when the form attaches and not
 * on every render, which would pull the focus back from the close button
 * whenever the reader typed.
 */
function focusOnArrival(form: HTMLFormElement | null): void {
  if (
    form?.closest('dialog')?.open === true
    && !form.contains(document.activeElement)
  ) {
    form.querySelector<HTMLInputElement>('input:checked')?.focus()
  }
}

/** Which of the two ways out are on offer, and what forget calls. */
interface ActionsProps {
  canForget: boolean
  canSave: boolean
  onForget: () => void
}

/**
 * Save, and under it the way to drop the bookmark. Save is disabled until the
 * draft grades to a real bookmark, so it cannot be pressed into a silent
 * no-op; the forget line is absent rather than disabled when there is no
 * bookmark to drop.
 */
function Actions({ canSave, canForget, onForget }: ActionsProps): ReactElement {
  const t = useT()

  return (
    <div {...stylex.props(styles.actions)}>
      <Button
        disabled={!canSave}
        sx={styles.save}
        type="submit"
      >
        {t('dialog.save')}
      </Button>
      {canForget && (
        <Button
          onClick={onForget}
          sx={styles.forget}
        >
          {t('dialog.forget')}
        </Button>
      )}
    </div>
  )
}
