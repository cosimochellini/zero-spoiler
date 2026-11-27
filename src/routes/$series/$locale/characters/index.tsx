import { createFileRoute, useRouter } from '@tanstack/react-router'
import { type ReactElement, useEffect } from 'react'

import { ArchivePage } from '~/components/ArchivePage'
import { CharacterGrid } from '~/components/CharacterGrid'
import { VisitorBanner } from '~/components/VisitorBanner'
import { useSeriesT } from '~/i18n/LocaleContext'
import { seriesPageHead } from '~/routes/$locale/-head'
import { requirePage } from '~/routes/$series/$locale/-found'
import { usePeek } from '~/routes/$series/$locale/-peek'
import { useScrollBackOnceTall } from '~/routes/$series/$locale/-scrollBack'
import { liftCharacter, loadCharacters } from '~/server/api'

import { seen, shelvesShown } from './-seen'
import { fetchShelves, useShelvesSource } from './-shelves'

export const Route = createFileRoute('/$series/$locale/characters/')({
  beforeLoad: ({ context }) => {
    requirePage(context.series, 'characters')
  },
  loader: async ({ context }) => {
    const data = { series: context.series.slug, locale: context.locale }

    // The served page has no shelves: their seven thousand elements were
    // most of its render, far past a Worker's CPU limit. The browser asks
    // for them once the page is up (#776).
    if (import.meta.env.SSR) {
      return { page: await loadCharacters({ data }), shelves: null }
    }

    // Never rejects (a failed call answers `'failed'`), so it cannot go
    // unhandled if the page call below throws first.
    const shelves = fetchShelves(data.series, data.locale)
    const page = await loadCharacters({ data })

    if (!seen.shelves) {
      return { page, shelves }
    }

    // Back after half an hour, a retry, or a re-read after the bookmark
    // moved: keep the old shelves
    // until the replacement is ready, so the restored position cannot be
    // clamped by the shorter loading placeholders.
    return { page, shelves: await shelves }
  },
  head: (match) => seriesPageHead('characters', match),
  component: CharactersPage,
})

/**
 * The characters page, a catalogue.
 *
 * A signal book: the brand line and a count, then the featured crests on one
 * uniform grid and the whole cast on shelves by arc, in the order the reader's
 * unit meets them. No hero, no display headline; the crests are the page. The
 * search above the grid filters the open characters, and the fogged ones sit
 * where they were, which is the spoiler rule applied to a text field.
 */
function CharactersPage(): ReactElement {
  const t = useSeriesT()
  const router = useRouter()
  const { page, shelves } = Route.useLoaderData()
  const source = useShelvesSource(page, shelves)
  useScrollBackOnceTall(shelves === null)

  const peek = usePeek(liftCharacter)

  // eslint-disable-next-line no-restricted-syntax -- flags in module state, read by the client loader, that the page has committed in the browser, hydration included
  useEffect(shelvesShown, [])

  return (
    <ArchivePage
      count={t('characters.count', { count: page.filed })}
      title={t('characters.title')}
    >
      <VisitorBanner />
      <CharacterGrid
        featuredCovered={page.featuredCovered}
        featuredOpen={page.featuredOpen}
        onRetry={() => {
          // The loader runs again in the browser and waits for the shelves.
          void router.invalidate({
            filter: (match) => match.routeId === Route.id,
          })
        }}
        peek={peek}
        shelfCount={page.shelfCount}
        shelves={source}
      />
    </ArchivePage>
  )
}
