import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { QrCodeGenerateResult } from 'uqr'

import { LoadFailed } from '~/components/BookmarkSkeleton'
import { DialogHead } from '~/components/DialogHead'
import { syncStyles as styles } from '~/components/SyncDevices.styles'
import { Button } from '~/components/ui/Button'
import { syncTranslator } from '~/i18n/dictionaries/sync'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import { askSync, disconnectSync, isSyncId } from '~/lib/progress/sync'

/** The quiet zone a scanner needs around the code, in modules. */
const QUIET_ZONE = 4

/** The link that ties another device to this one's record, and its code. */
interface SyncLink {
  code: QrCodeGenerateResult
  url: string
}

/** Where the asking for the link stands: under way, failed, or answered. */
type LinkState = 'failed' | 'loading' | SyncLink

/**
 * "More devices?" under the bookmark form (#1560). It only asks the dialog to
 * swap the form for `DevicesView`.
 */
export function DevicesLink({
  linkRef,
  onOpen,
}: {
  linkRef: RefObject<HTMLButtonElement | null>
  onOpen: () => void
}): ReactElement {
  const words = syncTranslator(useLocale().locale)

  return (
    <div {...stylex.props(styles.devices)}>
      <Button
        onClick={onOpen}
        ref={linkRef}
        sx={styles.link}
      >
        {words('dialog.devices')}
      </Button>
    </div>
  )
}

/**
 * What the dialog shows in place of the bookmark form once "More devices?" is
 * pressed: the link that ties another device to the same record, as a QR code
 * and as a copy button, and a way back. Showing it ties this device to a
 * synced record, making one if it has none. The QR encoder is fetched only
 * here, so no page pays for it.
 */
export function DevicesView({
  ledeId,
  onBack,
  onDone,
  returnFocusTo,
  titleId,
}: {
  /** The ids the dialog names itself by, passed on to the head shown here. */
  ledeId: string
  onBack: () => void
  /** Closes the dialog. */
  onDone: () => void
  /** What takes the focus back when the view goes: the link that opened it. */
  returnFocusTo: RefObject<HTMLButtonElement | null>
  titleId: string
}): ReactElement {
  const t = useT()
  const words = syncTranslator(useLocale().locale)
  const { retry, state } = useSyncLink()
  useReturnFocus(returnFocusTo)

  return (
    <div {...stylex.props(styles.view)}>
      <BackButton
        label={words('dialog.devicesBack')}
        onBack={onBack}
      />
      <DialogHead
        lede={words('dialog.devicesHelp')}
        ledeId={ledeId}
        title={words('dialog.devicesTitle')}
        titleId={titleId}
      />
      <div {...stylex.props(styles.panel)}>
        {state === 'loading' && (
          <p
            role="status"
            {...stylex.props(styles.text)}
          >
            {t('dialog.loading')}
          </p>
        )}
        {state === 'failed' && (
          <LoadFailed
            onRetry={retry}
            t={t}
          />
        )}
        {typeof state === 'object' && (
          <SyncLinkPanel
            link={state}
            onDisconnect={() => {
              disconnectSync()
              onDone()
            }}
          />
        )}
      </div>
    </div>
  )
}

/**
 * The link that opened the view was out of sight while the view was on show
 * and could not hold the focus, so it takes it back when the view goes. The
 * cleanup runs once the form is back in sight.
 */
function useReturnFocus(link: RefObject<HTMLButtonElement | null>): void {
  useEffect(
    () => () => {
      link.current?.focus()
    },
    [link],
  )
}

/**
 * The way back, drawn with a chevron. It takes the focus on arrival: the
 * link that opened the view is out of sight and cannot keep it.
 */
function BackButton({
  label,
  onBack,
}: {
  label: string
  onBack: () => void
}): ReactElement {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <Button
      onClick={onBack}
      ref={ref}
      sx={styles.back}
    >
      <svg
        aria-hidden="true"
        height="18"
        viewBox="0 0 18 18"
        width="18"
      >
        <path
          d="M11 3 5 9l6 6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      {label}
    </Button>
  )
}

/**
 * Asks for the link as soon as it is mounted, and again on `retry`. An answer
 * that arrives after the view has gone is dropped.
 */
function useSyncLink(): { retry: () => void; state: LinkState } {
  const { locale } = useLocale()
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<LinkState>('loading')

  useEffect(() => {
    let live = true
    const load = async (): Promise<void> => {
      const answer = await answerFor(locale)
      if (live) {
        setState(answer)
      }
    }
    void load()

    return () => {
      live = false
    }
  }, [attempt, locale])

  return {
    retry: () => {
      setState('loading')
      setAttempt((count) => count + 1)
    },
    state,
  }
}

/** The link, or `'failed'` when it could not be made. */
async function answerFor(locale: Locale): Promise<LinkState> {
  try {
    return await linkFor(locale)
  } catch {
    return 'failed'
  }
}

/** Asks for this device's record and encodes the link to it. */
async function linkFor(locale: Locale): Promise<SyncLink> {
  const [answer, qr] = await Promise.all([
    askSync({ op: 'create' }),
    import('uqr'),
  ])
  const id: unknown =
    typeof answer === 'object' && answer !== null ?
      Reflect.get(answer, 'id')
    : null
  if (!isSyncId(id)) {
    throw new TypeError('the sync endpoint gave no id')
  }
  const url = `${globalThis.location.origin}/${locale}/sync#${id}`
  return { code: qr.encode(url, { border: 0 }), url }
}

/** The code, the warning that comes with it, and the two actions. */
function SyncLinkPanel({
  link,
  onDisconnect,
}: {
  link: SyncLink
  onDisconnect: () => void
}): ReactElement {
  const words = syncTranslator(useLocale().locale)
  const [copied, setCopied] = useState<'copied' | 'failed' | null>(null)

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(link.url)
      setCopied('copied')
    } catch {
      setCopied('failed')
    }
  }

  return (
    <>
      <QrCode
        code={link.code}
        label={words('dialog.devicesCode')}
      />
      <p {...stylex.props(styles.text, styles.warning)}>
        {words('dialog.devicesWarning')}
      </p>
      <div {...stylex.props(styles.actions)}>
        <Button
          onClick={() => {
            void copy()
          }}
        >
          {words('dialog.devicesCopy')}
        </Button>
        <Button
          onClick={onDisconnect}
          sx={styles.disconnect}
        >
          {words('dialog.devicesDisconnect')}
        </Button>
      </div>
      <p
        aria-live="polite"
        {...stylex.props(styles.text)}
      >
        {copied === 'copied' && words('dialog.devicesCopied')}
        {copied === 'failed' && words('dialog.devicesCopyFailed')}
      </p>
    </>
  )
}

/**
 * The code as one path of unit squares on a light ground with its quiet
 * zone: dark on light, the way every camera app reads one.
 */
function QrCode({
  code,
  label,
}: {
  code: QrCodeGenerateResult
  label: string
}): ReactElement {
  const side = code.size + QUIET_ZONE + QUIET_ZONE
  const modules = code.data
    .flatMap((row, y) =>
      row.map((dark, x) => (dark ? `M${String(x)} ${String(y)}h1v1h-1z` : '')),
    )
    .join('')

  return (
    <svg
      aria-label={label}
      role="img"
      viewBox={`${String(-QUIET_ZONE)} ${String(-QUIET_ZONE)} ${String(side)} ${String(side)}`}
      {...stylex.props(styles.code)}
    >
      <rect
        height={side}
        width={side}
        x={-QUIET_ZONE}
        y={-QUIET_ZONE}
        {...stylex.props(styles.ground)}
      />
      <path
        d={modules}
        {...stylex.props(styles.modules)}
      />
    </svg>
  )
}
