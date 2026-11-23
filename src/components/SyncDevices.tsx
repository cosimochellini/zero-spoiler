import * as stylex from '@stylexjs/stylex'
import { type ReactElement, useRef, useState } from 'react'
import type { QrCodeGenerateResult } from 'uqr'

import { LoadFailed } from '~/components/BookmarkSkeleton'
import { syncStyles as styles } from '~/components/SyncDevices.styles'
import { Button } from '~/components/ui/Button'
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
  const [panel, setPanel] = useState<
    'closed' | 'failed' | 'loading' | SyncLink
  >('closed')

  const load = async (): Promise<void> => {
    setPanel('loading')
    try {
      setPanel(await linkFor(locale))
    } catch {
      setPanel('failed')
    }
  }

  const disconnect = (): void => {
    disconnectSync()
    setPanel('closed')
    if (detailsRef.current !== null) {
      detailsRef.current.open = false
    }
  }

  return (
    <details
      onToggle={(event) => {
        if (panel === 'closed' && event.currentTarget.open) {
          void load()
        }
      }}
      ref={detailsRef}
      {...stylex.props(styles.devices)}
    >
      <summary {...stylex.props(styles.summary)}>{t('dialog.devices')}</summary>
      <div {...stylex.props(styles.panel)}>
        {panel === 'loading' && (
          <p
            role="status"
            {...stylex.props(styles.text)}
          >
            {t('dialog.loading')}
          </p>
        )}
        {panel === 'failed' && (
          <LoadFailed
            onRetry={() => {
              void load()
            }}
            t={t}
          />
        )}
        {typeof panel === 'object' && (
          <SyncLinkPanel
            link={panel}
            onDisconnect={disconnect}
          />
        )}
      </div>
    </details>
  )
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
  const t = useT()
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
      <p {...stylex.props(styles.text)}>{t('dialog.devicesHelp')}</p>
      <QrCode
        code={link.code}
        label={t('dialog.devicesCode')}
      />
      <p {...stylex.props(styles.text, styles.warning)}>
        {t('dialog.devicesWarning')}
      </p>
      <div {...stylex.props(styles.actions)}>
        <Button
          onClick={() => {
            void copy()
          }}
        >
          {t('dialog.devicesCopy')}
        </Button>
        <Button
          onClick={onDisconnect}
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
