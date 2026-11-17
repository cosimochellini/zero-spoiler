// @vitest-environment node
//
// `describe` / `it` / `expect` are imported rather than taken from
// `test.globals`: this file is linted as plain JavaScript.
import { describe, expect, it } from 'vitest'

import { blockingOf, pagesOf, unexplainedWaivers } from './design-gate.mjs'

const sitemapOf = (paths) =>
  paths
    .map((page) => `<url><loc>https://example.test${page}</loc></url>`)
    .join('')

describe('the pages the design gate scans', () => {
  it('takes one page of each type, in English, with the series bookmark', () => {
    const { landing, bookmarked } = pagesOf(
      sitemapOf([
        '/en',
        '/it',
        '/en/legal',
        '/one-piece/en',
        '/one-piece/it',
        '/one-piece/en/characters',
        '/one-piece/en/characters/nami',
        '/one-piece/en/characters/monkey-d-luffy',
        '/one-piece/it/characters/monkey-d-luffy',
        '/one-piece/en/filler',
      ]),
    )

    expect(landing).toStrictEqual(['/en', '/en/legal', '/one-piece/en'])
    expect(bookmarked).toStrictEqual([
      '/one-piece/en?ep=500',
      '/one-piece/en/characters?ep=500',
      '/one-piece/en/characters/monkey-d-luffy?ep=500',
      '/one-piece/en/filler?ep=500',
    ])
  })

  it('scans a series it has no sample for, with no bookmark', () => {
    const { landing, bookmarked } = pagesOf(
      sitemapOf([
        '/new-series/en',
        '/new-series/en/places',
        '/new-series/en/places/first',
        '/new-series/en/places/second',
      ]),
    )

    expect(landing).toStrictEqual([
      '/new-series/en',
      '/new-series/en/places',
      '/new-series/en/places/first',
    ])
    expect(bookmarked).toStrictEqual([])
  })

  it('refuses a sample the sitemap no longer lists', () => {
    expect(() =>
      pagesOf(sitemapOf(['/one-piece/en', '/one-piece/en/characters/nami'])),
    ).toThrow('one-piece/characters/monkey-d-luffy')
  })
})

describe('the waivers of the design gate', () => {
  it('asks every waiver for a reason', () => {
    expect(
      unexplainedWaivers({
        detector: {
          ignoreRules: ['side-tab'],
          ignoreFiles: ['src/**'],
          ignoreValues: [
            { rule: 'overused-font', value: 'inter', reason: 'the brand face' },
            { rule: 'line-length', value: '*', reason: ' ' },
            { rule: 'low-contrast', value: '*' },
          ],
        },
      }),
    ).toStrictEqual(['side-tab', 'src/**', 'line-length=*', 'low-contrast=*'])
    expect(unexplainedWaivers({ telemetry: false })).toStrictEqual([])
  })

  it('never blocks on an advisory finding', () => {
    const blocking = { antipattern: 'low-contrast' }

    expect(
      blockingOf([blocking, { antipattern: 'straggler', advisory: true }]),
    ).toStrictEqual([blocking])
  })
})
