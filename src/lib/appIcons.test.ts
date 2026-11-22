import { describe, expect, it } from 'vitest'

import {
  GAME_OF_THRONES_SERIES,
  HUNTER_X_HUNTER_SERIES,
  ONE_PIECE_SERIES,
} from '~/lib/progress/series'

import { appHead, appShortName } from './appIcons'

describe('appShortName', () => {
  it('names each app as the owner ruled (#1517)', () => {
    expect(appShortName(null, 'it')).toBe('Zero Spoiler')
    expect(appShortName(ONE_PIECE_SERIES, 'it')).toBe('One Piece')
    expect(appShortName(HUNTER_X_HUNTER_SERIES, 'en')).toBe('HxH')
    expect(appShortName(GAME_OF_THRONES_SERIES, 'en')).toBe('GoT')
    expect(appShortName(GAME_OF_THRONES_SERIES, 'it')).toBe('Trono di Spade')
  })
})

describe('appHead', () => {
  it("links a series page to its own icons and its language's manifest", () => {
    const { links, meta } = appHead(GAME_OF_THRONES_SERIES, 'it')

    expect(links.map(({ href }) => href)).toStrictEqual([
      '/icons/game-of-thrones.ico',
      '/icons/game-of-thrones.svg',
      '/icons/game-of-thrones-180.png',
      '/icons/game-of-thrones.it.webmanifest',
    ])
    expect(meta[0]?.content).toBe('Trono di Spade')
  })

  it("links the hub's pages to the compass", () => {
    const { links } = appHead(null, 'en')

    expect(links.map(({ href }) => href)).toContain('/icon.svg')
    expect(links.map(({ href }) => href)).toContain('/icons/hub.en.webmanifest')
  })
})
