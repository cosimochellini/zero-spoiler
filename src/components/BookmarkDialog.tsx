import * as stylex from '@stylexjs/stylex'
import { type ReactElement, Suspense, useEffect, useId, useState } from 'react'

import { styles } from '~/components/BookmarkDialog.styles'
import type { BookmarkFormProps } from '~/components/BookmarkForm'
import {
  formHasLanded,
  LazyBookmarkForm,
  preloadBookmarkForm,
} from '~/components/bookmarkFormLoader'
import { BookmarkSkeleton, LoadFailed } from '~/components/BookmarkSkeleton'
import { DialogHead } from '~/components/DialogHead'
import { Button } from '~/components/ui/Button'
import { useModal } from '~/components/useModal'
import { useT } from '~/i18n/LocaleContext'

/** The one thing the dialog owes whoever opened it. */
export interface BookmarkDialogProps {
  /** Called once the dialog has closed, however it closed. */
  onClose: () => void
}

/**
 * Where the reader says how far they have got.
 *
 * A native `<dialog>` opened with `showModal()`: the browser puts it in the
 * top layer, makes the page behind it inert, closes it on Escape and gives
 * focus back to the mark that opened it. Nothing here re-implements any of
 * that. A click on the backdrop closes it too, which is why the dialog
 * itself has no padding — a click on padding would count as a click inside.
 *
 * The dialog, its close button and, until the QR view takes over, its title
 * are on the page; the form is fetched on demand, and a skeleton of it holds
 * its place until it arrives, so the dialog opens on the press however slow
 * the connection. Once it has arrived, "More devices?" swaps it for a view of
 * the QR code that draws its own title, from the same chunk.
 */
export function BookmarkDialog({ onClose }: BookmarkDialogProps): ReactElement {
  const { dialogRef, close } = useModal()
  const titleId = useId()
  const ledeId = useId()
  const t = useT()
  // Whether "More devices?" has swapped the form for the QR code. The words
  // of that view are in the form's chunk, so it draws its own head, under the
  // same two ids.
  const [devices, setDevices] = useState(false)

  return (
    <dialog
      aria-describedby={ledeId}
      aria-labelledby={titleId}
      onClose={onClose}
      ref={dialogRef}
      {...stylex.props(styles.dialog)}
    >
      <div {...stylex.props(styles.panel)}>
        {!devices && (
          <DialogHead
            lede={t('dialog.lede')}
            ledeId={ledeId}
            title={t('dialog.title')}
            titleId={titleId}
          />
        )}
        <FormSlot
          devices={devices}
          ledeId={ledeId}
          onDevices={setDevices}
          onDone={close}
          titleId={titleId}
        />
        <CloseButton onClose={close} />
      </div>
    </dialog>
  )
}

/**
 * The form, or its skeleton while its code is on the way, or a way to ask
 * again when the fetch failed.
 */
function FormSlot({
  devices,
  ledeId,
  onDevices,
  onDone,
  titleId,
}: BookmarkFormProps): ReactElement {
  type FormStatus = 'failed' | 'loading' | 'ready'

  const t = useT()
  const [status, setStatus] = useState<FormStatus>(() =>
    formHasLanded() ? 'ready' : 'loading',
  )

  useEffect(() => {
    if (status !== 'loading') {
      return
    }

    let live = true
    const settle = async (): Promise<void> => {
      const landed = await preloadBookmarkForm()
      if (live) {
        setStatus(landed ? 'ready' : 'failed')
      }
    }
    void settle()

    return () => {
      live = false
    }
  }, [status])

  if (status === 'failed') {
    return (
      <LoadFailed
        onRetry={() => {
          setStatus('loading')
        }}
        t={t}
      />
    )
  }
  if (status === 'loading') {
    return <BookmarkSkeleton />
  }

  return (
    <Suspense fallback={<BookmarkSkeleton />}>
      <LazyBookmarkForm
        devices={devices}
        ledeId={ledeId}
        onDevices={onDevices}
        onDone={onDone}
        titleId={titleId}
      />
    </Suspense>
  )
}

/**
 * The way out that keeps the bookmark as it was, drawn as a cross in the top
 * corner. It comes last in the panel, so the keyboard meets the unit first;
 * Escape and a click on the backdrop do the same thing.
 */
function CloseButton({ onClose }: { onClose: () => void }): ReactElement {
  const t = useT()

  return (
    <Button
      aria-label={t('dialog.cancel')}
      onClick={onClose}
      sx={styles.close}
      variant="quiet"
    >
      <span aria-hidden="true">✕</span>
    </Button>
  )
}
