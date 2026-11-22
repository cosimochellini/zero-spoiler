import type { Locale } from '~/i18n/locales'
import type { Series } from '~/lib/progress/series'

/** The hub's name, under its icon and in its install dialog. */
export const HUB_NAME = 'Zero Spoiler'

/**
 * The name under a series' icon on a home screen, where launchers cut it
 * near 12 characters (owner, 2026-11-22, #1517). A series missing here goes
 * by its own name.
 */
const SHORT_NAMES: Partial<Record<string, Record<Locale, string>>> = {
  'hunter-x-hunter': { en: 'HxH', it: 'HxH' },
  'game-of-thrones': { en: 'GoT', it: 'Trono di Spade' },
}

/**
 * The name a series' installed app goes by on a home screen.
 * @param series Whose app it is.
 * @param locale The language the app was installed in.
 * @returns The short name, or the series' own when it fits.
 */
export function appShortName(series: Series, locale: Locale): string {
  return SHORT_NAMES[series.slug]?.[locale] ?? series.name[locale]
}

/**
 * The tab icons and the installable app of a page: under a series its own
 * (scripts/make-icons.mjs draws them from its hub emblem), anywhere else the
 * hub's compass. The `.ico` comes first so Safari, which ignores SVG icons,
 * still finds a bitmap; Chromium and Firefox prefer the SVG that follows.
 * @param series The page's series, `null` on the hub's own pages.
 * @param locale The page's language, which the app opens in.
 * @returns The links and the one meta tag for the head.
 */
export function appHead(
  series: null | Series,
  locale: Locale,
): {
  links: { href: string; rel: string; sizes?: string; type?: string }[]
  meta: { content: string; name: string }[]
} {
  const files =
    series === null ?
      {
        ico: '/favicon.ico',
        svg: '/icon.svg',
        touch: '/apple-touch-icon.png',
        manifest: `/icons/hub.${locale}.webmanifest`,
      }
    : {
        ico: `/icons/${series.slug}.ico`,
        svg: `/icons/${series.slug}.svg`,
        touch: `/icons/${series.slug}-180.png`,
        manifest: `/icons/${series.slug}.${locale}.webmanifest`,
      }
  return {
    links: [
      { rel: 'icon', href: files.ico, sizes: '32x32' },
      { rel: 'icon', href: files.svg, type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: files.touch },
      { rel: 'manifest', href: files.manifest },
    ],
    // iOS names a home-screen icon after this tag, not the manifest.
    meta: [
      {
        name: 'apple-mobile-web-app-title',
        content: series === null ? HUB_NAME : appShortName(series, locale),
      },
    ],
  }
}
