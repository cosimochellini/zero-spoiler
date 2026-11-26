// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript.
import { describe, expect, it } from 'vitest'

import {
  bookmarkedPageProblem,
  bookmarkProblem,
  CANARY,
  clientBuilt,
  detectorProblem,
  detectWithRetry,
  judge,
  pageProblem,
  pagesOf,
  PERMANENT,
  refusedWaivers,
  savedCopy,
  tokenFindings,
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

const waivers = (reason) => ({
  detector: {
    ignoreValues: [
      { rule: 'overused-font', value: 'house sans', reason },
      { rule: 'kicker', value: '*', files: ['**', 'legal'], reason },
    ],
  },
})

const valued = (value) => ({
  detector: { ignoreValues: [{ rule: 'overused-font', value, reason: 'r' }] },
})

describe('the pages the design gate scans', () => {
  it('takes one page of each type, in one locale, with the series bookmark', () => {
    const { landing, bookmarked, thin } = pagesOf(
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
    // Ships has a sample; filler has none and is not declared an index.
    expect(thin).toStrictEqual(['saga/filler'])
  })

  it('is silent about a kind the sample declares, and asks the sitemap for it', () => {
    const samples = { saga: { ...SAMPLES.saga, indexes: ['filler'] } }

    expect(pagesOf(sitemapOf(SAGA), samples, 'en').thin).toStrictEqual([])
    const without = SAGA.filter((page) => !page.endsWith('/filler'))
    expect(() => pagesOf(sitemapOf(without), samples, 'en')).toThrow(
      'no filler page for saga',
    )
  })

  it('names a kind it opens on the first record for want of a sample', () => {
    const { bookmarked, thin } = pagesOf(
      sitemapOf([...SAGA, '/saga/en/crews', '/saga/en/crews/first']),
      { saga: { ...SAMPLES.saga, indexes: ['filler'] } },
      'en',
    )

    expect(pathsOf(bookmarked)).toContain('/saga/en/crews/first')
    expect(thin).toStrictEqual(['saga/crews'])
  })

  it('scans a series it has no sample for, with no bookmark', () => {
    const { landing, bookmarked, thin } = pagesOf(
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
    expect(thin).toStrictEqual([
      'saga/filler',
      'sequel: scanned with no bookmark',
    ])
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

  const RETRY =
    'design gate: retrying 3 page(s) at 390x844 after a tool failure in 0s: impeccable detect'

  it.each([
    [
      'passes on a retry after a tool failure',
      [1, 0],
      [
        `${RETRY} exited 1: a page could not be scanned\n    run 0 line 1\n    run 0 line 2\n    run 0 line 3\n`,
      ],
      null,
    ],
    [
      'fails when the retry fails too',
      [null, 1],
      [
        `${RETRY} was killed: it did not finish in time\n    run 0 line 1\n    run 0 line 2\n    run 0 line 3\n`,
      ],
      'exited 1: a page could not be scanned',
    ],
    ['never retries findings', [2, 1], [], null],
  ])('%s', async (_, statuses, logged, problem) => {
    const replies = statuses.map((status, run) => ({
      status,
      output: {
        stdout: `stdout of run ${run}`,
        stderr: `run ${run} line 0\nrun ${run} line 1\nrun ${run} line 2\nrun ${run} line 3\n`,
      },
    }))
    const lines = []
    let calls = 0
    const result = await detectWithRetry(
      async () => replies[calls++],
      '3 page(s) at 390x844',
      (line) => {
        lines.push(line)
      },
    )
    const last = replies[calls - 1]
    expect(calls).toBe(logged.length + 1)
    expect(lines).toEqual(logged)
    expect(result).toEqual({ ...last, problem })
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

  it('refuses a waiver with no reason or one the detector would not apply', () => {
    expect(
      refusedWaivers({
        detector: {
          ignoreRules: ['side-tab'],
          ignoreFiles: ['src/**'],
          ignoreValues: [
            { rule: 'overused-font', value: 'inter', reason: 'the face' },
            { rule: 'line-length', value: '*', files: ['**'], reason: ' ' },
            { rule: 'low-contrast', value: '*', file: 'legal' },
            { rule: 'kicker', value: '*', files: ['**'], reason: PERMANENT },
            { rule: 'glow', value: '*', reason: 'everywhere' },
            { rule: 'glow', value: ' * ', files: [' '], reason: 'blank' },
            {
              rule: 'cards',
              value: '*',
              files: ['{en,it}/legal', '{e*,it}/legal', 'en/{legal', '{a{b}}'],
              reason: 'braces',
            },
          ],
        },
      }),
    ).toStrictEqual([
      'side-tab: no reason',
      'src/**: no reason',
      'line-length=*: no reason',
      'low-contrast=*: no reason',
      'kicker=*: no reason',
      expect.stringMatching(/^glow=\*: "\*" with no files/u),
      expect.stringMatching(/^glow= \* : "\*" with no files/u),
      expect.stringMatching(/^cards=\*: \{e\*,it\}\/legal has a \{/u),
      expect.stringMatching(/^cards=\*: en\/\{legal has a \{/u),
      expect.stringMatching(/^cards=\*: \{a\{b\}\} has a \{/u),
    ])
    expect(refusedWaivers({ telemetry: false })).toStrictEqual([])
  })

  it('never applies a "*" that names no files, as the detector does not', () => {
    const found = [finding('kicker', '/en')]
    const unscoped = {
      detector: { ignoreValues: [{ rule: 'kicker', value: '*', reason: 'r' }] },
    }

    expect(judge(found, unscoped)).toStrictEqual({
      blocking: found,
      stale: ['kicker=* on everywhere'],
    })
  })

  it('keeps a permanent waiver that matches nothing and drops no temporary one', () => {
    expect(judge([], waivers(`${PERMANENT}house style`)).stale).toStrictEqual(
      [],
    )
    expect(judge([], waivers('Temporary baseline')).stale).toStrictEqual([
      'overused-font=house sans on everywhere',
      'kicker=* on **',
      'kicker=* on legal',
    ])
    // The prefix, not the word: a reason that only mentions it is temporary.
    expect(judge([], waivers('Not permanent: a baseline')).stale).toHaveLength(
      3,
    )
    expect(
      judge(
        [finding('kicker', '/en'), finding('overused-font', '/en')],
        waivers(`${PERMANENT}house style`),
      ).blocking,
    ).toStrictEqual([])
  })

  it("matches a value on the finding's own, or as whole words of its snippet", () => {
    const font = [finding('overused-font', '/en')]
    const colour = [
      finding('overused-font', '/en', {
        snippet: 'text color rgb(18, 52, 86) on h1 is outside DESIGN.md colors',
        ignoreValue: 'rgb(18, 52, 86)',
      }),
    ]

    for (const value of ['house sans', ' "House+Sans" ', 'HOUSE  SANS']) {
      expect(judge(font, valued(value)).blocking).toStrictEqual([])
    }
    for (const value of ['hous', 'house san', 'ouse sans', 'sans house']) {
      expect(judge(font, valued(value)).blocking).toStrictEqual(font)
    }
    expect(judge(colour, valued('RGB(18, 52, 86)')).blocking).toStrictEqual([])
    // In the snippet, and still not the finding's value.
    expect(judge(colour, valued('rgb')).blocking).toStrictEqual(colour)
    expect(judge(colour, valued('h1')).blocking).toStrictEqual(colour)
  })

  it('reads a glob against the address and each ending of it, case kept', () => {
    const found = [finding('kicker', '/en/legal')]

    for (const glob of [
      '*legal',
      'en/legal',
      '*/legal',
      '127.0.0.1:*/en/legal',
      'http:/127.0.0.1:4000/en/legal',
      '**/legal',
      '**',
      '*',
      'http:/**',
      'http://127.0.0.1:*/{it,en}/legal',
      '{legal,privacy}',
      'en/leg?l',
    ]) {
      expect(judge(found, waiver([glob])).blocking, glob).toStrictEqual([])
    }
    for (const glob of [
      'HTTP://127.0.0.1:*/en/legal',
      'http://127.0.0.1:*',
      'http://127.0.0.1:*/en?legal',
      '//127.0.0.1:*/en/legal',
      'n/legal',
      'en',
      'http://127.0.0.1:*/{it,de}/legal',
    ]) {
      expect(judge(found, waiver([glob])).stale, glob).toHaveLength(1)
    }
    expect(judge([], {})).toStrictEqual({ blocking: [], stale: [] })
  })

  it('takes every character of a glob but its wildcards as itself', () => {
    const glob = 'http://127.0.0.1:*/en/v1.0(beta)+[x]{y|z^$\\'
    const on = (page) => judge([finding('kicker', page)], waiver([glob]))

    expect(on('/en/v1.0(beta)+[x]{y|z^$\\').blocking).toStrictEqual([])
    for (const page of [
      '/en/v1x0(beta)+[x]{y|z^$\\',
      '/en/v1.0beta+[x]{y|z^$\\',
      '/en/v1.0(beta)(beta)[x]{y|z^$\\',
      '/en/v1.0(beta)+x{y|z^$\\',
      '/en/v1.0(beta)+[x]y|z^$\\',
      '/en/v1.0(beta)+[x]{y',
    ]) {
      expect(on(page).stale, page).toHaveLength(1)
    }
  })
})

describe('the scan of saved copies against DESIGN.md', () => {
  it('saves a page with no script and a base at its address', () => {
    const html =
      '<html lang="en"><head><meta charset="utf-8">'
      + '<script type="module" src="/a.js"></script></head>'
      + '<body><h1>Hi</h1><SCRIPT>go()</SCRIPT></body></html>'

    expect(savedCopy(html, 'http://127.0.0.1:4000/saga/en?ep=40')).toBe(
      '<html lang="en"><head><base href="http://127.0.0.1:4000/saga/en?ep=40">'
        + '<meta charset="utf-8"></head><body><h1>Hi</h1></body></html>',
    )
  })

  it('shows a streamed Suspense section and what a closed details holds', () => {
    const html =
      '<html><head></head><body><main><!--$?--><template id="B:0"></template>'
      + '<!--/$--><div hidden>a closed drawer</div>'
      + '<details class="x1"><p>folded</p></details>'
      + '<DETAILS><summary>Also</summary></DETAILS></main>'
      + '<div hidden id="S:0"><section><h2 id="relationships">Ties</h2></section></div>'
      + '<div hidden id="S:a"><p>the eleventh</p></div>'
      + '<script>$RC("B:0","S:0")</script></body></html>'

    expect(savedCopy(html, 'http://127.0.0.1:4000/saga/en')).toBe(
      '<html><head><base href="http://127.0.0.1:4000/saga/en"></head><body><main>'
        + '<!--$?--><template id="B:0"></template><!--/$-->'
        + '<div hidden>a closed drawer</div>'
        + '<details open class="x1"><p>folded</p></details>'
        + '<details open><summary>Also</summary></DETAILS></main>'
        + '<div id="S:0"><section><h2 id="relationships">Ties</h2></section></div>'
        + '<div id="S:a"><p>the eleventh</p></div></body></html>',
    )
  })

  it('names the index pages whose main content the browser builds', () => {
    const origin = 'http://127.0.0.1:4000'
    const built = [
      '/saga/en/characters?ep=40',
      '/saga/en/places?ep=40',
      '/saga/en/fruits?ep=40',
      '/saga/en/abilities?ep=40',
      '/saga/en/fruits',
    ]
    const served = [
      '/saga/en?ep=40',
      '/saga/en/characters/hero?ep=40',
      '/saga/en/places/harbour?ep=40',
      '/saga/en/fruits/gum-gum-fruit?ep=40',
      '/saga/en/abilities/battle-waltz?ep=40',
      '/saga/en/filler?ep=40',
      '/saga/en/ranks?ep=40',
      '/en/legal',
    ]

    expect(
      clientBuilt([...served, ...built].map((page) => origin + page)),
    ).toStrictEqual(built.map((page) => origin + page))
  })

  const address = 'http://127.0.0.1:4000/en/legal'
  const copy = 'file:///tmp/design-gate-x/0.html'
  const canaryFile = 'file:///tmp/design-gate-x/1.html'
  const files = new Map([
    [copy, address],
    [canaryFile, CANARY],
  ])
  const canary = [
    ['design-system-font', 'georgia'],
    ['design-system-color', 'rgb(255, 106, 0)'],
    ['design-system-color', 'rgb(255, 106, 0)'],
  ].map(([antipattern, ignoreValue]) => ({
    antipattern,
    file: canaryFile,
    ignoreValue,
  }))

  const raw = (antipattern, advisory) => ({
    antipattern,
    file: copy,
    ...(advisory && { advisory }),
  })

  it('keeps the token rules under page addresses, font and colour blocking', () => {
    expect(
      tokenFindings(
        [
          raw('design-system-font'),
          raw('design-system-color', true),
          raw('design-system-radius', true),
          raw('design-system-font-size', true),
          raw('ai-color-palette'),
          raw('line-length'),
          ...canary,
          { antipattern: 'low-contrast', file: canaryFile },
        ],
        files,
      ),
    ).toStrictEqual([
      { antipattern: 'design-system-font', file: address, advisory: false },
      { antipattern: 'design-system-color', file: address, advisory: false },
      { antipattern: 'design-system-radius', file: address, advisory: true },
      { antipattern: 'design-system-font-size', file: address, advisory: true },
    ])
  })

  it('refuses a scan whose canary did not give exactly its font and colour', () => {
    const stray = {
      antipattern: 'design-system-radius',
      file: canaryFile,
      ignoreValue: '7px',
    }
    for (const findings of [
      [],
      canary.slice(1),
      canary.slice(0, 1),
      [...canary, stray],
    ]) {
      expect(() => tokenFindings(findings, files)).toThrow(
        'the engine did not read DESIGN.md',
      )
    }
  })

  it('refuses a finding on a file it did not save', () => {
    expect(() =>
      tokenFindings(
        [
          ...canary,
          { antipattern: 'design-system-font', file: 'file:///elsewhere.html' },
        ],
        files,
      ),
    ).toThrow('file:///elsewhere.html')
  })
})
