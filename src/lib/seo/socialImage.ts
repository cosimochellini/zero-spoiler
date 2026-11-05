import type { Locale } from '~/i18n/locales'

/**
 * Where a record's own pictures are published.
 *
 * `scripts/og-images.mjs` draws them ahead of time from the record's first
 * drawing, never a redrawing, so a link shared with a reader who has just
 * met the record cannot show a later look. The files are committed under
 * `public/og/` and served as static assets; the Worker only names them.
 * The card is the wide picture a messaging app unfurls, one per locale
 * because it prints the name; the square is the icon a search engine
 * shows beside a result, the same in every locale.
 */
export interface RecordImages {
  card: string
  square: string
}

/** The card and the site's own `/og-card.png` share one size. */
export const CARD_SIZE = { width: 1200, height: 630 } as const

/** The two pictures of one record, as paths under the site's origin. */
export function recordImages(
  series: string,
  locale: Locale,
  id: string,
): RecordImages {
  return {
    card: `/og/${series}/${locale}/${id}.png`,
    square: `/og/${series}/${id}.png`,
  }
}
