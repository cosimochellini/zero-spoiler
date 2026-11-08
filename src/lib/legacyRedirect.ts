import { isLocale } from '~/i18n/locales'
import { hasPage, type Series } from '~/lib/progress/series'

const PREFIX_PARTS = 3

/** Old archive URLs keep their path and exact query through one permanent hop. */
export function legacyRedirect(request: Request): Response | undefined {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return undefined
  }
  const url = new URL(request.url)
  const [, locale, page] = url.pathname.split('/', PREFIX_PARTS)
  if (
    page === undefined
    || page === ''
    || page === 'legal'
    || page === 'privacy'
    || !isLocale(locale)
  ) {
    return undefined
  }
  return new Response(null, {
    status: 301,
    headers: {
      'Location': `/one-piece${url.pathname}${url.search}`,
      'Cache-Control': 'private, no-store',
    },
  })
}

/** `/{series}/{locale}/power`, with or without a trailing slash. */
const POWER_PATH = /^\/(?<slug>[^/]+)\/(?<locale>[^/]+)\/power\/?$/u

/**
 * `/{series}/{locale}/power` became `/ranks` (#1194): the same permanent hop,
 * path and exact query kept, for a series that has the page. Any other
 * series falls through to the router, which has no `/power`, so it answers
 * 404 as before.
 * @param request The document request.
 * @param describe The registry's lookup of a series' public description.
 */
export function movedPageRedirect(
  request: Request,
  describe: (slug: string) => null | Series,
): Response | undefined {
  const url = new URL(request.url)
  const { slug = '', locale } = POWER_PATH.exec(url.pathname)?.groups ?? {}
  if (!['GET', 'HEAD'].includes(request.method) || !isLocale(locale)) {
    return undefined
  }
  const series = describe(slug)
  if (series === null || !hasPage(series, 'ranks')) {
    return undefined
  }
  return new Response(null, {
    status: 301,
    headers: {
      'Location': `/${slug}/${locale}/ranks${url.search}`,
      'Cache-Control': 'private, no-store',
    },
  })
}
