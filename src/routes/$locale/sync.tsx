import { createFileRoute } from '@tanstack/react-router'
import type { ReactElement } from 'react'

import { SyncPage } from '~/components/SyncPage'
import { isLocale } from '~/i18n/locales'
import { translatorFor } from '~/i18n/translate'
import { loadSeriesDescriptions } from '~/server/series'

/**
 * Where a link from "More devices?" lands (#1560). The id is in the
 * fragment, so the server sends the same page to everyone; it stays out of
 * the sitemap and out of search results.
 */
export const Route = createFileRoute('/$locale/sync')({
  // The open series, for their names and bookmark grammar.
  loader: async () => loadSeriesDescriptions(),
  head: ({ params }) =>
    isLocale(params.locale) ?
      {
        meta: [
          { title: translatorFor(params.locale)('sync.pageTitle') },
          { name: 'robots', content: 'noindex' },
        ],
      }
    : {},
  headers: () => ({ 'Cache-Control': 'private, no-store' }),
  component: SyncRoute,
})

function SyncRoute(): ReactElement {
  return <SyncPage series={Route.useLoaderData()} />
}
