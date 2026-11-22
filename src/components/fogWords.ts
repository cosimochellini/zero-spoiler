import type { FogTitles } from '~/components/FogBand'
import type { SeriesSlug, Translate } from '~/i18n/types'
import type { Bookmark } from '~/lib/progress/episode'

/**
 * What a listing says about its covered records: the band's heading, its
 * hint, and the same two as one note where the band is folded away. Apart
 * from `FogBand` because a file that exports a component and something else
 * loses fast refresh.
 */

/** None, one and many are three sentences rather than one with a hole in it. */
export function fogTitle<S extends SeriesSlug>(
  t: Translate<S>,
  count: number,
  words: FogTitles<S>,
): string {
  if (count === 0) {
    return t(words.allOpen)
  }
  if (count === 1) {
    return t(words.one)
  }

  return t(words.many, { count })
}

/**
 * How the reader gets to see what is under fog. With no bookmark there is
 * nothing to move forward, so the sentence says to set one (#1376).
 */
export function fogHint<S extends SeriesSlug>(
  t: Translate<S>,
  words: FogTitles<S>,
  bookmark: Bookmark,
): string {
  return t(bookmark === null ? words.hintUnset : words.hint)
}

/**
 * The band in one line, for a search with no match: how many records are
 * under fog and why the search does not find them. `undefined` with nothing
 * covered. The count is the one the band's heading already prints.
 */
export function fogNote<S extends SeriesSlug>(
  t: Translate<S>,
  words: FogTitles<S>,
  { bookmark, count }: { bookmark: Bookmark; count: number },
): string | undefined {
  return count === 0 ? undefined : (
      `${fogTitle(t, count, words)}. ${fogHint(t, words, bookmark)}`
    )
}
