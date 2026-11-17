/**
 * The two pages the router falls back to: an address no route answers, and a
 * page that failed to render. Both are the record routes' not-found layout
 * (a heading, one sentence, a link back) in the site's shell (#1374).
 *
 * The leading `-` keeps the file out of the generated route tree.
 */
import * as stylex from '@stylexjs/stylex'
import { Link, useLocation, useMatch, useRouter } from '@tanstack/react-router'
import { type ReactElement, type ReactNode, use, useEffect } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { useInLocale, useLocale, useT } from '~/i18n/LocaleContext'
import { localeOfPath } from '~/i18n/locales'
import { BookmarkContext } from '~/lib/progress/BookmarkContext'
import { recordStyles } from '~/routes/$series/$locale/-record.styles'
import { LocaleShell } from '~/routes/-LocaleShell'

/**
 * The shell, when the page is not in one already. Under a locale route the
 * shell is that route's, the series' own on a series page. An unknown series
 * or locale, or a page whose shell failed, has none: it gets the shared
 * one, in the language of the address.
 */
function InShell({ children }: { children: ReactNode }): ReactNode {
  const inShell = useInLocale()
  const locale = localeOfPath(useLocation({ select: (at) => at.pathname }))

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
 * else. The series is read without `useBookmark`, which throws outside its
 * provider: the root's own error page has none.
 */
function HomeLink(): ReactElement {
  const t = useT()
  const { locale } = useLocale()
  const series = use(BookmarkContext)?.series ?? null
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
export function Notice({ kind }: { kind: 'error' | 'notFound' }): ReactElement {
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
