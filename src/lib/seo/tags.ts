import { type Locale, LOCALES } from '~/i18n/locales'

import { CARD_SIZE } from './socialImage'

/**
 * The social cards.
 *
 * Open Graph and Twitter say the same three things the document head already
 * says — a title, a description and an address — in the two vocabularies the
 * platforms read. They are written from the page's own head rather than from
 * the record, so a page under fog unfurls as the fogged page and not as the
 * record behind it.
 */

/** One entry of the document head, as the router's `meta` array takes it. */
export type MetaTag =
  | { content: string; name: string }
  | { content: string; property: string }
  | { title: string }

/** What a page tells the platforms about itself. */
export interface SocialPage {
  description: string
  imageAlt: string
  imageUrl: string
  locale: Locale
  siteName: string
  title: string
  type: 'article' | 'website'
  url: string
}

// Open Graph wants a language *and* a territory, which BCP 47 tags on the
// rest of the site do not carry.
const OG_LOCALE: Record<Locale, string> = { it: 'it_IT', en: 'en_US' }

function otherLocales(locale: Locale): Locale[] {
  return LOCALES.filter((candidate) => candidate !== locale)
}

function alternateLocale(locale: Locale): MetaTag {
  return { property: 'og:locale:alternate', content: OG_LOCALE[locale] }
}

/** The `og:` and `twitter:` tags for one page. */
export function describeSocial(page: SocialPage): MetaTag[] {
  return [
    { property: 'og:type', content: page.type },
    { property: 'og:site_name', content: page.siteName },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: page.url },
    { property: 'og:image', content: page.imageUrl },
    // Every card is a PNG of one size, the site's and each record's, so a
    // platform can lay the preview out before it has fetched the picture.
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: String(CARD_SIZE.width) },
    { property: 'og:image:height', content: String(CARD_SIZE.height) },
    { property: 'og:image:alt', content: page.imageAlt },
    { property: 'og:locale', content: OG_LOCALE[page.locale] },
    ...otherLocales(page.locale).map((locale) => alternateLocale(locale)),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: page.imageUrl },
    { name: 'twitter:image:alt', content: page.imageAlt },
  ]
}
