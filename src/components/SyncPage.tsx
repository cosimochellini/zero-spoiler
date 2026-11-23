import * as stylex from '@stylexjs/stylex'
import { Link, Navigate } from '@tanstack/react-router'
import { type ReactElement, useEffect, useState } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { LoadFailed } from '~/components/BookmarkSkeleton'
import { Button } from '~/components/ui/Button'
import { useLocale, useT } from '~/i18n/LocaleContext'
import type { Locale } from '~/i18n/locales'
import type { Translate } from '~/i18n/types'
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
import { color, font, leading, rule, space, text } from '~/styles/tokens.stylex'

/** Where the page stands: a notice, a wait, or the link's record. */
type Step =
  | { id: string; kind: 'failed' }
  | { id: string; kind: 'ready'; record: SyncRecord }
  | { kind: 'already' | 'checking' | 'incomplete' | 'joined' | 'unknown' }

/**
 * The page a link from "More devices?" opens (#1560). The record's id is in
 * the address's fragment, which never reaches the server, so the page reads
 * it here, asks for the record, and lists what connecting would change on
 * this device. Connecting is always a press of the button: a link someone
 * else sent never takes over this device's bookmarks on its own.
 */
export function SyncPage({ series }: { series: Series[] }): ReactElement {
  const t = useT()
  const [step, setStep] = useState<Step>({ kind: 'checking' })

  const check = async (id: string): Promise<void> => {
    setStep({ kind: 'checking' })
    try {
      setStep(readStep(id, await askSync({ id, op: 'read' })))
    } catch {
      setStep({ id, kind: 'failed' })
    }
  }

  const join = async (id: string): Promise<void> => {
    setStep({ kind: 'checking' })
    try {
      setStep(joinedStep(await askSync({ id, op: 'join' })))
    } catch {
      setStep({ id, kind: 'failed' })
    }
  }

  useEffect(() => {
    void arrive(setStep, check)
    // Once, on arrival: the fragment is read when the page opens.
  }, [])

  return (
    <ArchivePage
      count={t('sync.lede')}
      title={t('sync.title')}
    >
      <div {...stylex.props(styles.body)}>
        <StepBody
          onConnect={(id) => {
            void join(id)
          }}
          onRetry={(id) => {
            void check(id)
          }}
          series={series}
          step={step}
        />
      </div>
    </ArchivePage>
  )
}

/** What the page shows at one step. */
function StepBody({
  onConnect,
  onRetry,
  series,
  step,
}: {
  onConnect: (id: string) => void
  onRetry: (id: string) => void
  series: Series[]
  step: Step
}): ReactElement {
  const t = useT()
  const { locale } = useLocale()

  switch (step.kind) {
    case 'checking': {
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
    // A full load of the hub, which reads the cookies the join has just set.
    case 'joined': {
      return (
        <Navigate
          params={{ locale }}
          reloadDocument
          to="/$locale"
        />
      )
    }
    case 'ready': {
      return (
        <Connect
          changes={changesOf(step.record, series, { locale, t })}
          onConnect={() => {
            onConnect(step.id)
          }}
        />
      )
    }
    default: {
      return <Notice kind={step.kind} />
    }
  }
}

/** Reads the fragment once the page is in the browser. */
async function arrive(
  setStep: (step: Step) => void,
  check: (id: string) => Promise<void>,
): Promise<void> {
  const id = globalThis.location.hash.slice(1)
  if (!isSyncId(id)) {
    setStep({ kind: 'incomplete' })
  } else if (readSyncId() === id) {
    setStep({ kind: 'already' })
  } else {
    await check(id)
  }
}

function readStep(id: string, answer: unknown): Step {
  const record = answeredRecord(answer)
  return record === null ? { kind: 'unknown' } : { id, kind: 'ready', record }
}

function joinedStep(answer: unknown): Step {
  return answeredRecord(answer) === null ?
      { kind: 'unknown' }
    : { kind: 'joined' }
}

/** What connecting changes, and the button that does it. */
function Connect({
  changes,
  onConnect,
}: {
  changes: string[]
  onConnect: () => void
}): ReactElement {
  const t = useT()

  return (
    <>
      {changes.length > 0 && (
        <ul {...stylex.props(styles.changes)}>
          {changes.map((change) => (
            <li key={change}>{change}</li>
          ))}
        </ul>
      )}
      <Button onClick={onConnect}>{t('sync.connect')}</Button>
    </>
  )
}

/** A link that cannot connect this device, and the way out. */
function Notice({
  kind,
}: {
  kind: 'already' | 'incomplete' | 'unknown'
}): ReactElement {
  const t = useT()
  const { locale } = useLocale()

  return (
    <>
      <p
        role={kind === 'already' ? 'status' : 'alert'}
        {...stylex.props(styles.text)}
      >
        {t(`sync.${kind}`)}
      </p>
      <p>
        <Link
          params={{ locale }}
          to="/$locale"
          {...stylex.props(styles.link)}
        >
          ← {t('sync.toHub')}
        </Link>
      </p>
    </>
  )
}

/**
 * One sentence per series whose bookmark connecting would set or change on
 * this device. A series the record lacks keeps this device's bookmark, and
 * connecting sends it to the record, so it changes nothing here.
 */
function changesOf(
  record: SyncRecord,
  series: Series[],
  { locale, t }: { locale: Locale; t: Translate },
): string[] {
  const jar = parseCookieHeader(document.cookie)
  return series.flatMap((one) => {
    const stored = parseBookmark(record[one.slug], one)
    const own = parseBookmark(jar.get(one.cookie), one)
    if (
      stored === null
      || (own !== null && serialiseBookmark(own) === serialiseBookmark(stored))
    ) {
      return []
    }
    return t(own === null ? 'sync.add' : 'sync.change', {
      point: bookmarkPoint(t, stored, one.books),
      series: one.name[locale],
    })
  })
}

const styles = stylex.create({
  link: {
    color: { 'default': color.ink2, ':hover': color.accent },
    fontSize: text.base,
    fontWeight: 600,
    outlineColor: { 'default': 'transparent', ':focus-visible': color.focus },
    outlineOffset: space.xs3,
    outlineStyle: 'solid',
    outlineWidth: rule.fine,
    textDecorationLine: 'underline',
    textUnderlineOffset: '0.25em',
  },
  body: { gap: space.lg, display: 'grid', justifyItems: 'start' },
  text: {
    color: color.ink2,
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    maxWidth: '52ch',
  },
  changes: {
    margin: 0,
    gap: space.xs,
    color: color.ink,
    display: 'grid',
    fontFamily: font.body,
    fontSize: text.base,
    lineHeight: leading.body,
    paddingInlineStart: space.lg,
    maxWidth: '52ch',
  },
})
