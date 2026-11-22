import * as stylex from '@stylexjs/stylex'
import {
  type ReactElement,
  type ReactNode,
  Suspense,
  use,
  useDeferredValue,
  useId,
  useState,
} from 'react'

import { CatalogueSection } from '~/components/CatalogueSection'
import { CharacterCard } from '~/components/CharacterCard'
import { styles } from '~/components/CharacterGrid.styles'
import {
  CharacterShelves,
  type Shelves,
  type ShelvesSource,
} from '~/components/CharacterShelves'
import { FogBand, type FogTitles } from '~/components/FogBand'
import { fogNote } from '~/components/fogWords'
import { matchesIn } from '~/components/recordMatches'
import {
  SearchField,
  SearchNoMatch,
  SearchResults,
} from '~/components/SearchField'
import { searchStyles } from '~/components/SearchField.styles'
import { useLandedShelves } from '~/components/useLandedShelves'
import { useSettled } from '~/components/useSettled'
import { useSeriesT, useT } from '~/i18n/LocaleContext'
import { useBookmark } from '~/lib/progress/BookmarkContext'
import { useOpenEntries } from '~/lib/progress/openEntries'
import { foldName } from '~/lib/search/fold'
import type {
  CharacterView,
  CoveredRecord,
  SearchableCharacter,
  ShelfView,
} from '~/lib/view/records'

// Long enough that a reader typing "Nami" hears one count and not four, short
// enough that the count still arrives while the query is under their hands.
const ANNOUNCE_DELAY_MS = 250

/** What the signal book's fog band calls itself at each count. */
const CHARACTER_FOG: FogTitles = {
  allOpen: 'characters.allOpen',
  hint: 'characters.foggedHint',
  hintUnset: 'characters.foggedHintUnset',
  many: 'characters.foggedTitle',
  one: 'characters.foggedTitleOne',
}

/** What the signal book is built from: the crests, the shelves, the query. */
export interface CharacterGridProps {
  /** The characters in evidence: the ones drawn as crests. */
  featuredCovered: CoveredRecord[]
  featuredOpen: SearchableCharacter[]
  /** Asks for the shelves again after a failed call. */
  onRetry: () => void
  peek: (handle: string) => Promise<CharacterView>
  /**
   * The shelves, asked for once the page is up. The crests are above the
   * fold and there are thirty-six of them; the shelves are three hundred and
   * twenty-six tiles with a drawing each, and they are the part of this page
   * worth not waiting for.
   */
  shelfCount: number
  shelves: ShelvesSource
}

/**
 * The signal book: the featured characters as crests on one uniform grid,
 * then everyone the archive has filed as tiles on shelves, one shelf per
 * arc, with a search that only the open ones answer.
 *
 * That last rule is the spoiler system applied to a search box. A covered
 * character whose card appeared when its name was typed would confirm the
 * name, so the fogged cards sit in a band of their own below the crests, and
 * the fogged tiles stay on their shelves, and neither moves while the query
 * has a match: typing filters the open pages and leaves the fog exactly as
 * it was. With no match the crests and the shelves fold away behind one line
 * and a button that clears the query (#1376). Whether they fold depends on
 * open names only, so it confirms nothing about a covered one.
 *
 * The names arrive folded, so a keystroke costs one folded query and a few
 * hundred `indexOf` calls. Only the announcement to a screen reader waits, so
 * a reader still mid-word is not read a fresh count on every keystroke.
 */
export function CharacterGrid({
  featuredOpen,
  featuredCovered,
  shelves,
  shelfCount,
  onRetry,
  peek,
}: CharacterGridProps): ReactElement {
  const t = useT()
  const fieldId = useId()
  const [query, setQuery] = useState('')
  const trimmed = query.trim()
  // The field is never deferred; the lists behind it are.
  const needle = useDeferredValue(foldName(trimmed))
  const unmatched = useUnmatched(needle, featuredOpen, shelves)

  return (
    <div {...stylex.props(styles.book)}>
      <SearchField
        clearLabel={t('characters.searchClear')}
        fieldId={fieldId}
        label={t('characters.searchLabel')}
        onQuery={setQuery}
        placeholder="Nami"
        query={query}
        status={
          <SearchStatus
            needle={needle}
            query={trimmed}
            shelves={shelves}
          />
        }
      />

      {unmatched === null ? null : (
        <CharactersNoMatch
          fieldId={fieldId}
          onQuery={setQuery}
          sections={unmatched}
        />
      )}

      <SearchResults folded={unmatched !== null}>
        <FeaturedCrests
          covered={featuredCovered}
          fieldId={fieldId}
          needle={needle}
          open={featuredOpen}
          peek={peek}
        />

        <CharacterShelves
          featured={new Set(featuredOpen.map((entry) => entry.id))}
          fieldId={fieldId}
          needle={needle}
          onRetry={onRetry}
          peek={peek}
          shelfCount={shelfCount}
          shelves={shelves}
        />
      </SearchResults>
    </div>
  )
}

/**
 * The shelves, once they are here, when the query matches no open character;
 * `null` while it matches one, or while the shelves that hold every open
 * character are still on their way.
 */
function useUnmatched(
  needle: string,
  featuredOpen: SearchableCharacter[],
  shelves: ShelvesSource,
): null | ShelfView[] {
  const landed = useLandedShelves(shelves)
  if (needle === '' || !Array.isArray(landed)) {
    return null
  }
  const open = [...featuredOpen, ...landed.flatMap((section) => section.open)]

  return matchesIn(open, needle).length === 0 ? landed : null
}

/**
 * What stands in for the crests and the shelves while the query has no
 * match: the button that clears it, and how many characters are under fog.
 */
function CharactersNoMatch({
  fieldId,
  onQuery,
  sections,
}: {
  fieldId: string
  onQuery: (query: string) => void
  sections: ShelfView[]
}): ReactElement {
  const t = useT()
  const { bookmark } = useBookmark()
  const count = sections.reduce((sum, shelf) => sum + shelf.covered.length, 0)

  return (
    <SearchNoMatch
      clearLabel={t('characters.searchClear')}
      fieldId={fieldId}
      note={fogNote(t, CHARACTER_FOG, { bookmark, count })}
      onClear={() => {
        onQuery('')
      }}
    />
  )
}

/** The count's place while the shelves are on their way, or did not come. */
function StatusPending(): ReactElement {
  return (
    <p
      aria-busy="true"
      aria-live="polite"
      {...stylex.props(searchStyles.status)}
    />
  )
}

/**
 * The line under the field. The count is over every open character, so it
 * cannot be said until the shelves have landed. Its own boundary, so the
 * field beside it never suspends: an input that unmounts mid-word loses the
 * word and the focus with it.
 */
function SearchStatus({
  shelves,
  ...asked
}: {
  needle: string
  query: string
  shelves: ShelvesSource
}): ReactElement {
  return shelves === null ?
      <StatusPending />
    : <Suspense fallback={<StatusPending />}>
        <LandedStatus
          shelves={shelves}
          {...asked}
        />
      </Suspense>
}

/**
 * How many open characters the query answers, out of how many there are.
 * Reads the shelves, so it lives inside the boundary.
 */
function LandedStatus({
  shelves,
  needle,
  query,
}: {
  needle: string
  query: string
  shelves: Promise<Shelves> | Shelves
}): ReactElement {
  const sections = shelves instanceof Promise ? use(shelves) : shelves

  return sections === 'failed' ?
      <StatusPending />
    : <SearchCount
        needle={needle}
        query={query}
        sections={sections}
      />
}

/** The count itself, once the shelves are here. */
function SearchCount({
  sections,
  needle,
  query,
}: {
  needle: string
  query: string
  sections: ShelfView[]
}): ReactElement {
  const t = useT()
  const open = sections.flatMap((section) => section.open)
  useOpenEntries(open.length)
  const count = matchesIn(open, needle).length
  const empty = query !== '' && count === 0
  const status =
    empty ?
      t('characters.noMatch', { query })
    : t('characters.shown', { count, total: open.length })
  // Settled with the words, so the line never grows before it says why.
  const noMatch = useSettled(empty, ANNOUNCE_DELAY_MS)

  return (
    <p
      aria-live="polite"
      {...stylex.props(
        searchStyles.status,
        noMatch && searchStyles.statusNoMatch,
      )}
    >
      {useSettled(status, ANNOUNCE_DELAY_MS)}
    </p>
  )
}

/**
 * The crests: the featured characters the reader has reached, filtered by the
 * query, and below them a band of the ones they have not. The two never trade
 * places, which is the whole reason they are kept in separate lists.
 */
function FeaturedCrests({
  open,
  covered,
  fieldId,
  needle,
  peek,
}: {
  covered: CoveredRecord[]
  fieldId: string
  needle: string
  open: SearchableCharacter[]
  peek: (handle: string) => Promise<CharacterView>
}): ReactElement {
  const t = useSeriesT()
  const matches = matchesIn(open, needle)

  return (
    <CatalogueSection
      headingId={`${fieldId}-featured`}
      lede={t('characters.featuredLede')}
      title={t('characters.featuredTitle')}
    >
      {matches.length === 0 ? null : (
        <CharacterCardList>
          {matches.map(({ entry, match }) => {
            return (
              <CharacterCard
                key={`open-${entry.id}`}
                highlight={match.highlight}
                peek={peek}
                slot={{ open: true, record: entry }}
              />
            )
          })}
        </CharacterCardList>
      )}

      <FogBand
        count={covered.length}
        headingId={`${fieldId}-fog`}
        t={t}
        words={CHARACTER_FOG}
      >
        <CharacterCardList>
          {covered.map((entry) => {
            return (
              <CharacterCard
                key={`fog-${entry.handle}`}
                peek={peek}
                slot={{ open: false, covered: entry }}
              />
            )
          })}
        </CharacterCardList>
      </FogBand>
    </CatalogueSection>
  )
}

/**
 * The grid the cards sit on: two across on a phone, up to five on a wide
 * page, every column the same width. `minmax(0, 1fr)` rather than `1fr`
 * because each cell holds a drawing, and a bare `1fr` track lets a long name
 * push the row past the viewport.
 */
export function CharacterCardList({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <ul {...stylex.props(styles.grid)}>{children}</ul>
}
