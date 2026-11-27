/**
 * The two pages the router falls back to: an address no route answers, and a
 * page that failed to render. Both are the record routes' not-found layout
 * (a heading, one sentence, a link back) in the site's shell (#1374).
 *
 * The leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import {
  Link,
  useMatch,
  useRouteContext,
  useRouter,
} from '@tanstack/react-router'
import { type ReactElement, type ReactNode, useEffect } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useInLocale, useLocale, useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { recordStyles } from '~/routes/$series/$locale/-record.styles'
import { LocaleShell } from '~/routes/-LocaleShell'

/**
 * The shell, when the page is not in one already. Under a locale route the
 * shell is that route's, the series' own on a series page. An unknown series
 * or locale has none, and neither has a locale layout that failed to render
 * (a series' included): they get the shared one, in the language of the
 * address. If that fails too, the root's own error page is left.
 *
 * The language is the root's, which lands with its copy. Not the address's:
 * that changes when a navigation starts, before the new copy is loaded
 * (#1386).
 */
function InShell({ children }: { children: ReactNode }): ReactNode {
  const inShell = useInLocale()
  const locale = useRouteContext({
    from: '__root__',
    select: (context) => context.locale,
  })

  return inShell ? children : (
      <LocaleShell
        locale={locale}
        shared
      >
        {children}
      </LocaleShell>
    )
}

/**
 * The way out: the series' home on a page of a series, the hub anywhere
 * else.
 */
function HomeLink(): ReactElement {
  const t = useT()
  const { locale } = useLocale()
  const { series } = useBookmark()
  // The public description, for the series' name in the reader's language.
  const described = useMatch({ from: '/$series', shouldThrow: false })?.context
    .series

  return series === null ?
      <Link
        params={{ locale }}
        to="/$locale"
        {...stylex.props(recordStyles.backLink)}
      >
        ← {t('nav.hub')}
      </Link>
    : <Link
        params={{ locale, series: series.slug }}
        to="/$series/$locale"
        {...stylex.props(recordStyles.backLink)}
      >
        ← {described?.name[locale] ?? series.slug}
      </Link>
}

/**
 * Moves the focus to the page after a navigation inside the site: the link
 * that was followed is gone, and the focus would fall back to the document.
 * Not on the page the server sent, where the browser starts at the top.
 */
function useFocusOnArrival(): void {
  const router = useRouter()
  // eslint-disable-next-line no-restricted-syntax -- reads the router's resolved location once the page commits, then moves DOM focus
  useEffect(() => {
    // Read once, on arrival: the page resolves a moment after it mounts.
    const { location, resolvedLocation } = router.state
    if (
      resolvedLocation !== undefined
      && resolvedLocation.href !== location.href
    ) {
      document.querySelector<HTMLElement>('#content')?.focus()
    }
  }, [router])
}

/** The heading, the sentence and the link. */
function Notice({ kind }: { kind: 'error' | 'notFound' }): ReactElement {
  const t = useT()
  useFocusOnArrival()

  return (
    <ArchivePage
      count={t(`${kind}.body`)}
      title={t(`${kind}.title`)}
    >
      <p>
        <HomeLink />
      </p>
    </ArchivePage>
  )
}

/** An address no route answers. A record route keeps its own page. */
export function NotFoundPage(): ReactNode {
  return (
    <InShell>
      <Notice kind="notFound" />
    </InShell>
  )
}

/** A page that failed to render, in place of the router's white default. */
export function ErrorPage(): ReactNode {
  return (
    <InShell>
      <Notice kind="error" />
    </InShell>
  )
}
