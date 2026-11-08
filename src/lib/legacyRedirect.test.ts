import { describe, expect, it } from 'vitest'

import { descriptionOf } from '~/data/series'

import { legacyRedirect, movedPageRedirect } from './legacyRedirect'

const ORIGIN = 'https://example.test'

function visit(path: string, method = 'GET'): Response | undefined {
  return legacyRedirect(new Request(`${ORIGIN}${path}`, { method }))
}

describe('the permanent hop from a legacy archive address', () => {
  it.each([
    '/it/characters/nami',
    '/en/fruits',
    '/it/places/alubarna',
    '/en/filler/',
  ])('preserves the rest of %s', (path) => {
    const response = visit(path)

    expect(response?.status).toBe(301)
    expect(response?.headers.get('Location')).toBe(`/one-piece${path}`)
    expect(response?.headers.get('Cache-Control')).toBe('private, no-store')
  })

  it('preserves repeated keys, their order, encoding and a nested URL exactly', () => {
    const query = [
      'ep=650',
      'tag=a%2Bb',
      'tag=a+b',
      `url=${encodeURIComponent('https://example.test/x?q=1&ep=2')}`,
      'empty=',
    ].join('&')
    const path = `/it/characters/nami?${query}`
    const response = visit(path)

    expect(response?.headers.get('Location')).toBe(`/one-piece${path}`)
    expect(response?.headers.has('Set-Cookie')).toBe(false)
  })

  it('preserves an encoded record path and an encoded bookmark parameter', () => {
    const id = 'nico%2Drobin'
    const bookmark = '%36%35%30'
    const path = `/en/characters/${id}?ep=${bookmark}&x=%252F`

    expect(visit(path)?.headers.get('Location')).toBe(`/one-piece${path}`)
  })

  it('uses an empty response body for the 301', async () => {
    const response = visit('/en/characters/nami')

    await expect(response?.text()).resolves.toBe('')
  })

  it('answers HEAD like GET', () => {
    const response = visit('/it/characters/nami?ep=650', 'HEAD')

    expect(response?.status).toBe(301)
    expect(response?.headers.get('Location')).toBe(
      '/one-piece/it/characters/nami?ep=650',
    )
    expect(response?.body).toBeNull()
  })

  it.each([
    '/',
    '/en',
    '/it/',
    '/en/legal',
    '/it/privacy',
    '/en/legal?ep=650',
    '/it/privacy?ep=650',
    '/one-piece/en/characters/nami',
    '/fr/characters/nami',
    '/_serverFn/function',
  ])('leaves the non-legacy address %s alone', (path) => {
    expect(visit(path)).toBeUndefined()
  })

  it.each(['POST', 'PUT', 'DELETE'])('leaves %s requests alone', (method) => {
    expect(visit('/en/characters/nami?ep=650', method)).toBeUndefined()
  })
})

function moved(path: string, method = 'GET'): Response | undefined {
  return movedPageRedirect(
    new Request(`${ORIGIN}${path}`, { method }),
    descriptionOf,
  )
}

describe('the permanent hop from the power page to the ranks page (#1194)', () => {
  it.each([
    ['/one-piece/it/power?ep=764', '/one-piece/it/ranks?ep=764'],
    ['/one-piece/en/power?ch=780', '/one-piece/en/ranks?ch=780'],
    ['/one-piece/en/power/', '/one-piece/en/ranks'],
    [
      '/one-piece/it/power?ep=%37%36%34&x=a+b',
      '/one-piece/it/ranks?ep=%37%36%34&x=a+b',
    ],
  ])('sends %s to %s', (path, location) => {
    for (const method of ['GET', 'HEAD']) {
      const response = moved(path, method)

      expect(response?.status).toBe(301)
      expect(response?.headers.get('Location')).toBe(location)
      expect(response?.headers.get('Cache-Control')).toBe('private, no-store')
    }
  })

  it.each([
    '/hunter-x-hunter/en/power',
    '/game-of-thrones/it/power?ep=3',
    '/nobody/en/power',
    '/one-piece/fr/power',
    '/one-piece/en/power/anything',
    '/one-piece/en/ranks',
    '/en/power',
    '/one-piece/en',
  ])('leaves %s to the router', (path) => {
    expect(moved(path)).toBeUndefined()
  })

  it('leaves a POST alone', () => {
    expect(moved('/one-piece/en/power', 'POST')).toBeUndefined()
  })
})
