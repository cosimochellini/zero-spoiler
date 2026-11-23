import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useRef, useState } from 'react'
import type { QrCodeGenerateResult } from 'uqr'

import { LoadFailed } from '~/components/BookmarkSkeleton'
import { syncStyles as styles } from '~/components/SyncDevices.styles'
import { Button } from '~/components/ui/Button'
import { useLocale, useT } from '~/i18n/LocaleContext'
import { askSync, disconnectSync, isSyncId } from '~/lib/progress/sync'

/** The quiet zone a scanner needs around the code, in modules. */
const QUIET_ZONE = 4

type Panel =
  | { kind: 'closed' }
  | { kind: 'failed' }
  | { kind: 'loading' }
  | { code: QrCodeGenerateResult; kind: 'ready'; url: string }

/**
 * "More devices?" under the bookmark form (#1560). Opening it ties this
 * device to a synced record, making one if it has none, and shows the link
 * that ties another device to the same record, as a QR code and as a copy
 * button. The QR encoder is fetched only here, so no page pays for it.
 */
export function SyncDevices(): ReactElement {
  const t = useT()
  const { locale } = useLocale()
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const [panel, setPanel] = useState<Panel>({ kind: 'closed' })
  const [copied, setCopied] = useState<'copied' | 'failed' | null>(null)

  const load = async (): Promise<void> => {
    setPanel({ kind: 'loading' })
    try {
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
      const url = `${window.location.origin}/${locale}/sync#${id}`
      setPanel({ code: qr.encode(url, { border: 0 }), kind: 'ready', url })
    } catch {
      setPanel({ kind: 'failed' })
    }
  }

  const copy = async (url: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied('copied')
    } catch {
      setCopied('failed')
    }
  }

  const disconnect = (): void => {
    disconnectSync()
    setPanel({ kind: 'closed' })
    setCopied(null)
    if (detailsRef.current !== null) {
      detailsRef.current.open = false
    }
  }

  return (
    <details
      onToggle={(event) => {
        if (event.currentTarget.open && panel.kind === 'closed') {
          void load()
        }
      }}
      ref={detailsRef}
      {...stylex.props(styles.devices)}
    >
      <summary {...stylex.props(styles.summary)}>{t('dialog.devices')}</summary>
      <div {...stylex.props(styles.panel)}>
        {panel.kind === 'loading' && (
          <p
            role="status"
            {...stylex.props(styles.text)}
          >
            {t('dialog.loading')}
          </p>
        )}
        {panel.kind === 'failed' && (
          <LoadFailed
            onRetry={() => {
              void load()
            }}
            t={t}
          />
        )}
        {panel.kind === 'ready' && (
          <>
            <p {...stylex.props(styles.text)}>{t('dialog.devicesHelp')}</p>
            <QrCode
              code={panel.code}
              label={t('dialog.devicesCode')}
            />
            <p {...stylex.props(styles.text, styles.warning)}>
              {t('dialog.devicesWarning')}
            </p>
            <div {...stylex.props(styles.actions)}>
              <Button
                onClick={() => {
                  void copy(panel.url)
                }}
              >
                {t('dialog.devicesCopy')}
              </Button>
              <Button
                onClick={disconnect}
                sx={styles.disconnect}
              >
                {t('dialog.devicesDisconnect')}
              </Button>
            </div>
            <p
              aria-live="polite"
              {...stylex.props(styles.text)}
            >
              {copied === 'copied' && t('dialog.devicesCopied')}
              {copied === 'failed' && t('dialog.devicesCopyFailed')}
            </p>
          </>
        )}
      </div>
    </details>
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
  const side = code.size + 2 * QUIET_ZONE
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
