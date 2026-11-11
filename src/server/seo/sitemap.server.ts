import type { ReaderArchive } from '~/data/features'
import { archiveOf, OPEN_SERIES } from '~/data/series'
import { archiveIn } from '~/data/source'
import type { Entity } from '~/data/types'
import { LOCALES } from '~/i18n/locales'
import { hasPage } from '~/lib/progress/series'
import { localeAlternates } from '~/lib/seo/paths'
import { absoluteUrl } from '~/lib/seo/site'
import { recordImages } from '~/lib/seo/socialImage'

/** XML entries are shared by requests, but never by different series' archives. */
const pages = new WeakMap<ReaderArchive, string[]>()
const document: { pending?: Promise<string> } = {}

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}

function escapeXml(value: string): string {
  return value.replaceAll(/["&'<>]/gu, (char) => ESCAPES[char] ?? char)
}

/** A page's address under its series and locale, and a record's square picture. */
interface Suffix {
  image?: string
  path: string
}

/** An index and the record addresses published under it. */
function pathsFor(
  section: string,
  entries: Entity[],
  series: string,
): Suffix[] {
  return [
    { path: section },
    ...entries.map((entity) => ({
      path: `${section}/${entity.id}`,
      image: recordImages(series, 'en', entity.id).square,
    })),
  ]
}

/** Only the pages the series declares get addresses. */
function suffixes(archive: ReaderArchive): Suffix[] {
  const { abilities, characters, fruits, places, ships, series } = archive
  const { slug } = series
  return [
    { path: '' },
    ...(hasPage(series, 'characters') ?
      pathsFor('/characters', characters, slug)
    : []),
    ...(hasPage(series, 'fruits') ? pathsFor('/fruits', fruits, slug) : []),
    ...(hasPage(series, 'places') ?
      pathsFor('/places', [...places, ...ships], slug)
    : []),
    ...(hasPage(series, 'filler') ? [{ path: '/filler' }] : []),
    ...(hasPage(series, 'ranks') ? [{ path: '/ranks' }] : []),
    ...(hasPage(series, 'abilities') ?
      pathsFor('/abilities', abilities, slug)
    : []),
  ]
}

/** A record's square picture, which is the same in every locale. */
function imageFor(image: string | undefined): string[] {
  return image === undefined ?
      []
    : [
        '    <image:image>',
        `      <image:loc>${escapeXml(absoluteUrl(image))}</image:loc>`,
        '    </image:image>',
      ]
}

function entryFor(path: string, image?: string): string {
  const alternates = localeAlternates(path).map(
    (alternate) =>
      `    <xhtml:link rel="alternate" hreflang="${alternate.hrefLang}" href="${escapeXml(absoluteUrl(alternate.href))}" />`,
  )
  return [
    '  <url>',
    `    <loc>${escapeXml(absoluteUrl(path))}</loc>`,
    ...alternates,
    ...imageFor(image),
    '  </url>',
  ].join('\n')
}

function seriesEntries(archive: ReaderArchive): string[] {
  const cached = pages.get(archive)
  if (cached !== undefined) {
    return cached
  }
  const entries = suffixes(archive).flatMap(({ path, image }) =>
    LOCALES.map((locale) =>
      entryFor(`/${archive.series.slug}/${locale}${path}`, image),
    ),
  )
  pages.set(archive, entries)
  return entries
}

async function buildSitemap(): Promise<string> {
  const archives = await Promise.all(
    OPEN_SERIES.map(async ({ slug }) => archiveOf(slug)),
  )
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...LOCALES.flatMap((locale) => [
      entryFor(`/${locale}`),
      entryFor(`/${locale}/legal`),
    ]),
    // A crawler has no bookmark, so no record of one source only answers it.
    ...archives.flatMap((archive) => seriesEntries(archiveIn(archive, null))),
    '</urlset>',
    '',
  ].join('\n')
}

/** Every published series page, shared hub and legal page, ready for an HTTP response. */
export async function sitemapXml(): Promise<string> {
  document.pending ??= buildSitemap()
  try {
    return await document.pending
  } catch (error) {
    delete document.pending
    throw error
  }
}
