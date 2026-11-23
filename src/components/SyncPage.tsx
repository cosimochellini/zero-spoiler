import * as stylex from '@stylexjs/stylex'
import { Link } from '@tanstack/react-router'
import { type ReactElement, useEffect, useState } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { LoadFailed } from '~/components/BookmarkSkeleton'
import { Button } from '~/components/ui/Button'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { Translate } from '~/i18n/translate'
import { parseCookieHeader } from '~/lib/cookies'
import { parseBookmark, serialiseBookmark } from '~/lib/progress/episode'
import type { Series } from '~/lib/progress/series'
import {
  answeredRecord,
  askSync,
  isSyncId,
  readSyncId,
  type SyncRecord,
} from '~/lib/progress/sync'
import { bookmarkPoint } from '~/lib/progress/threshold'
import { recordStyles } from '~/routes/$series/$locale/-record.styles'
import { color, font, leading, space, text } from '~/styles/tokens.stylex'

type Step =
  | { changes: string[]; id: string; kind: 'ready' }
  | { id: string; kind: 'failed' }
  | { id: string; kind: 'joining' }
  | { kind: 'already' }
  | { kind: 'checking' }
  | { kind: 'incomplete' }
  | { kind: 'unknown' }

/**
 * The page a link from "More devices?" opens (#1560). The record's id is in
 * the address's fragment, which never reaches the server, so the page reads
 * it here, asks for the record, and lists what connecting would change on
 * this device. Connecting is always a press of the button: a link someone
 * else sent never takes over this device's bookmarks on its own.
 */
export function SyncPage({ series }: { series: Series[] }): ReactElement {
  const t = useT()
  const { locale } = useLocale()
  const [step, setStep] = useState<Step>({ kind: 'checking' })

  const check = async (id: string): Promise<void> => {
    setStep({ kind: 'checking' })
    try {
      const record = answeredRecord(await askSync({ id, op: 'read' }))
      setStep(
        record === null ?
          { kind: 'unknown' }
        : { changes: changesOf(record, series, t, locale), id, kind: 'ready' },
      )
    } catch {
      setStep({ id, kind: 'failed' })
    }
  }

  const join = async (id: string): Promise<void> => {
    setStep({ id, kind: 'joining' })
    try {
      const record = answeredRecord(await askSync({ id, op: 'join' }))
      if (record === null) {
        setStep({ kind: 'unknown' })
        return
      }
      // A full load: the hub reads the cookies the answer has just set.
      window.location.assign(`/${locale}`)
    } catch {
      setStep({ id, kind: 'failed' })
    }
  }

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!isSyncId(id)) {
      setStep({ kind: 'incomplete' })
    } else if (readSyncId() === id) {
      setStep({ kind: 'already' })
    } else {
      void check(id)
    }
    // Once, on arrival: the fragment is read when the page opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- check reads only this render's copy and series.
  }, [])

  return (
    <ArchivePage
      count={t('sync.lede')}
      title={t('sync.title')}
    >
      <div {...stylex.props(styles.body)}>
        <SyncStep
          onConnect={(id) => {
            void join(id)
          }}
          onRetry={(id) => {
            void check(id)
          }}
          step={step}
        />
      </div>
    </ArchivePage>
  )
}

function SyncStep({
  onConnect,
  onRetry,
  step,
}: {
  onConnect: (id: string) => void
  onRetry: (id: string) => void
  step: Step
}): ReactElement {
  const t = useT()
  const { locale } = useLocale()

  switch (step.kind) {
    case 'checking':
    case 'joining': {
      return (
        <p
          role="status"
          {...stylex.props(styles.text)}
        >
          {t('dialog.loading')}
        </p>
      )
    }
    case 'failed': {
      return (
        <LoadFailed
          onRetry={() => {
            onRetry(step.id)
          }}
          t={t}
        />
      )
    }
    case 'ready': {
      return (
        <>
          {step.changes.length > 0 && (
            <ul {...stylex.props(styles.changes)}>
              {step.changes.map((change) => (
                <li key={change}>{change}</li>
              ))}
            </ul>
          )}
          <Button
            onClick={() => {
              onConnect(step.id)
            }}
          >
            {t('sync.connect')}
          </Button>
        </>
      )
    }
    case 'already':
    case 'incomplete':
    case 'unknown': {
      return (
        <>
          <p
            role={step.kind === 'already' ? 'status' : 'alert'}
            {...stylex.props(styles.text)}
          >
            {t(`sync.${step.kind}`)}
          </p>
          <p>
            <Link
              params={{ locale }}
              to="/$locale"
              {...stylex.props(recordStyles.backLink)}
            >
              ← {t('sync.toHub')}
            </Link>
          </p>
        </>
      )
    }
  }
}

/**
 * One sentence per series whose bookmark connecting would set or change on
 * this device. A series the record lacks keeps this device's bookmark, and
 * connecting sends it to the record, so it changes nothing here.
 */
function changesOf(
  record: SyncRecord,
  series: Series[],
  t: Translate,
  locale: Locale,
): string[] {
  const jar = parseCookieHeader(document.cookie)
  return series.flatMap((one) => {
    const stored = parseBookmark(record[one.slug], one)
    if (stored === null) {
      return []
    }
    const own = parseBookmark(jar.get(one.cookie), one)
    if (own !== null && serialiseBookmark(own) === serialiseBookmark(stored)) {
      return []
    }
    const words = {
      point: bookmarkPoint(t, stored, one.books),
      series: one.name[locale],
    }
    return [t(own === null ? 'sync.add' : 'sync.change', words)]
  })
}

const styles = stylex.create({
  body: { gap: space.lg, display: 'grid', justifyItems: 'start' },
  text: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  changes: {
    gap: space.xs,
    margin: 0,
    paddingInlineStart: space.lg,
    color: color.ink,
    display: 'grid',
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
})
