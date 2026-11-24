import { describe, expect, it } from 'vitest'

import { preloadChunk } from './chunks'

describe('preloadChunk', () => {
  it('links the chunk and what it imports, the chunk first', () => {
    const chunks = {
      HomeLanding: ['/assets/HomeLanding-a.js', '/assets/CellFace-b.js'],
    }

    expect(preloadChunk('HomeLanding', chunks)).toStrictEqual([
      { rel: 'modulepreload', href: '/assets/HomeLanding-a.js' },
      { rel: 'modulepreload', href: '/assets/CellFace-b.js' },
    ])
  })

  it('links nothing for a chunk the build did not name, or without a build', () => {
    expect(
      preloadChunk('HomeLanding', { en: ['/assets/en-a.js'] }),
    ).toStrictEqual([])
    expect(preloadChunk('HomeLanding')).toStrictEqual([])
  })
})
