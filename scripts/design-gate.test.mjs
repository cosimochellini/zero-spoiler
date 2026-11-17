// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript.
import { describe, expect, it } from 'vitest'

import {
  bookmarkedPageProblem,
  bookmarkProblem,
  detectorProblem,
  judge,
  pageProblem,
  pagesOf,
  unexplainedWaivers,
} from './design-gate.rules.mjs'

const SAMPLES = {
  saga: { ep: 40, characters: 'hero', places: 'harbour', ships: 'sloop' },
}

const SAGA = [
  '/saga/en',
  '/saga/it',
  '/saga/en/characters',
  '/saga/en/characters/aaron',
  '/saga/en/characters/hero',
  '/saga/it/characters/hero',
  '/saga/en/places',
  '/saga/en/places/harbour',
  '/saga/en/ships',
  '/saga/en/ships/sloop',
  '/saga/en/filler',
]

const sitemapOf = (paths) =>
  paths
    .map((page) => `<url><loc>https://example.test${page}</loc></url>`)
    .join('')

const pathsOf = (pages) => pages.map((page) => page.path)

const finding = (antipattern, page, extra = {}) => ({
  antipattern,
  file: `http://127.0.0.1:4000${page}`,
  snippet: 'Primary font: house sans (60% of text)',
  ...extra,
})

const waiver = (files) => ({
  detector: {
    ignoreValues: [{ rule: 'kicker', value: '*', files, reason: 'r' }],
  },
})

describe('the pages the design gate scans', () => {
  it('takes one page of each type, in one locale, with the series bookmark', () => {
    const { landing, bookmarked } = pagesOf(
      sitemapOf(['/en', '/it', '/en/legal', ...SAGA]),
      SAMPLES,
      'en',
    )

    expect(landing).toStrictEqual(['/en', '/en/legal', '/saga/en'])
    expect(pathsOf(bookmarked)).toStrictEqual([
      '/saga/en',
      '/saga/en/characters',
      '/saga/en/characters/hero',
      '/saga/en/places',
      '/saga/en/places/harbour',
      '/saga/en/ships',
      '/saga/en/ships/sloop',
      '/saga/en/filler',
    ])
    expect(bookmarked[2]).toStrictEqual({
      path: '/saga/en/characters/hero',
      id: 'hero',
      slug: 'saga',
      locale: 'en',
      ep: 40,
    })
    expect(bookmarked[0]).not.toHaveProperty('id')
  })

  it('scans a series it has no sample for, with no bookmark', () => {
    const { landing, bookmarked } = pagesOf(
      sitemapOf([
        ...SAGA,
        '/sequel/en',
        '/sequel/en/places',
        '/sequel/en/places/first',
        '/sequel/en/places/second',
      ]),
      SAMPLES,
      'en',
    )

    expect(landing).toStrictEqual([
      '/saga/en',
      '/sequel/en',
      '/sequel/en/places',
      '/sequel/en/places/first',
    ])
    expect(pathsOf(bookmarked)).not.toContain('/sequel/en')
  })

  it.each([
    ['an empty sitemap', [], 'no home, characters, places, ships page'],
    ['another locale', ['/saga/de', '/saga/de/characters'], 'no home'],
    [
      'a sampled series with no home',
      SAGA.filter((page) => page !== '/saga/en'),
      'no home page for saga',
    ],
    [
      'a series that lost its places',
      SAGA.filter((page) => !page.includes('/places')),
      'no places page for saga',
    ],
    [
      'a sampled kind the sitemap dropped',
      SAGA.filter((page) => !page.includes('/ships')),
      'no ships page for saga',
    ],
    [
      'a sampled record the sitemap dropped',
      SAGA.filter((page) => !page.endsWith('/hero')),
      'saga/characters/hero is not in the sitemap',
    ],
  ])('refuses %s', (_label, paths, message) => {
    expect(() => pagesOf(sitemapOf(paths), SAMPLES, 'en')).toThrow(message)
  })

  it('refuses a list with nothing to scan under a bookmark', () => {
    expect(() => pagesOf(sitemapOf(['/en', '/sequel/en']), {}, 'en')).toThrow(
      '2 page(s) with no bookmark and 0 with one',
    )
  })
})

describe('the state a page is served in', () => {
  const page = { path: '/saga/en/places/harbour', id: 'harbour' }
  const bookmarked = { ...page, slug: 'saga', locale: 'en', ep: 40 }
  const open =
    '<meta property="og:image" content="https://x.test/og/saga/en/harbour.png">'

  it('asks for a 200 and no inline ignore', () => {
    expect(pageProblem({ status: 200, html: '<p>fine</p>' })).toBeNull()
    expect(pageProblem({ status: 404, html: '' })).toContain('answered 404')
    expect(
      pageProblem({
        status: 200,
        html: '<p data-impeccable-ignore="low-contrast">dim</p>',
      }),
    ).toContain('data-impeccable-ignore')
  })

  it('asks the bookmark link for a 302 that sets the series cookie', () => {
    const setCookie = 'zs_saga=40; Path=/; SameSite=Lax'

    expect(bookmarkProblem(bookmarked, { status: 302, setCookie })).toBeNull()
    expect(
      bookmarkProblem(bookmarked, { status: 302, setCookie: null }),
    ).toContain('set no saga bookmark')
    expect(
      bookmarkProblem(bookmarked, {
        status: 302,
        setCookie: 'zs_saga=4; Path=/',
      }),
    ).toContain('set no saga bookmark')
    expect(bookmarkProblem(bookmarked, { status: 200, setCookie })).toContain(
      'answered 200',
    )
  })

  it('asks a sample record to be open at its bookmark', () => {
    expect(
      bookmarkedPageProblem(bookmarked, { status: 200, html: open }),
    ).toBeNull()
    expect(
      bookmarkedPageProblem(bookmarked, {
        status: 200,
        html: '<meta property="og:image" content="https://x.test/og-card.png">',
      }),
    ).toContain('under fog at episode 40')
    expect(
      bookmarkedPageProblem(bookmarked, { status: 500, html: open }),
    ).toContain('answered 500')
  })

  it('asks an index page only to be served', () => {
    const index = { ...bookmarked, path: '/saga/en/places', id: undefined }

    expect(
      bookmarkedPageProblem(index, { status: 200, html: '<ul></ul>' }),
    ).toBeNull()
  })
})

describe('the detector run', () => {
  it.each([
    [0, null],
    [2, null],
    [1, 'exited 1: a page could not be scanned'],
    [127, 'exited 127: a page could not be scanned'],
    [null, 'was killed: it did not finish in time'],
  ])('reads exit status %s', (status, problem) => {
    expect(detectorProblem(status)).toBe(problem)
  })
})

describe('the waivers of the design gate', () => {
  const config = {
    detector: {
      ignoreValues: [
        { rule: 'overused-font', value: 'House Sans', reason: 'the face' },
        { rule: 'kicker', value: '*', files: ['**'], reason: 'labels' },
        {
          rule: 'line-length',
          value: '*',
          files: [
            'http://127.0.0.1:*/en/legal',
            'http://127.0.0.1:*/*/en?ep=*',
            'http://127.0.0.1:*/*/*/places/*',
          ],
          reason: 'baseline',
        },
      ],
    },
  }

  it('asks every waiver for a reason', () => {
    expect(
      unexplainedWaivers({
        detector: {
          ignoreRules: ['side-tab'],
          ignoreFiles: ['src/**'],
          ignoreValues: [
            { rule: 'overused-font', value: 'inter', reason: 'the face' },
            { rule: 'line-length', value: '*', reason: ' ' },
            { rule: 'low-contrast', value: '*' },
          ],
        },
      }),
    ).toStrictEqual(['side-tab', 'src/**', 'line-length=*', 'low-contrast=*'])
    expect(unexplainedWaivers({ telemetry: false })).toStrictEqual([])
  })

  it('blocks on what no waiver covers and never on an advisory finding', () => {
    const uncovered = [
      finding('line-length', '/en'),
      finding('line-length', '/saga/en/places?ep=40'),
      finding('line-length', '/saga/en/characters/hero?ep=40'),
      finding('overused-font', '/en', { snippet: 'Primary font: inter' }),
      finding('low-contrast', '/en/legal'),
    ]

    const { blocking, stale } = judge(
      [
        ...uncovered,
        finding('overused-font', '/en'),
        finding('kicker', '/saga/en/characters/hero?ep=40'),
        finding('line-length', '/en/legal'),
        finding('line-length', '/saga/en?ep=40'),
        finding('line-length', '/saga/en/places/harbour?ep=40'),
        finding('straggler', '/en', { advisory: true }),
      ],
      config,
    )

    expect(blocking).toStrictEqual(uncovered)
    expect(stale).toStrictEqual([])
  })

  it('names every waiver and every glob that matches nothing', () => {
    const { blocking, stale } = judge(
      [finding('line-length', '/en/legal')],
      config,
    )

    expect(blocking).toStrictEqual([])
    expect(stale).toStrictEqual([
      'overused-font=House Sans on everywhere',
      'kicker=* on **',
      'line-length=* on http://127.0.0.1:*/*/en?ep=*',
      'line-length=* on http://127.0.0.1:*/*/*/places/*',
    ])
  })

  it('reads a glob with no slash against the last segment, case kept', () => {
    const found = [finding('kicker', '/en/legal')]

    expect(judge(found, waiver(['*legal'])).blocking).toStrictEqual([])
    expect(
      judge(found, waiver(['HTTP://127.0.0.1:*/en/legal'])).stale,
    ).toHaveLength(1)
    expect(judge(found, waiver(['http://127.0.0.1:*'])).stale).toHaveLength(1)
    expect(
      judge(found, waiver(['http://127.0.0.1:*/en?legal'])).stale,
    ).toHaveLength(1)
    expect(judge([], {})).toStrictEqual({ blocking: [], stale: [] })
  })
})
