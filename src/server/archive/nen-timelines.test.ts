import { describe, expect, it } from 'vitest'

import { HUNTER_X_HUNTER_ARCHIVE as ARCHIVE } from '~/data/series/hunter-x-hunter/archive'

import { readerFor } from './reader.server'

type Unit = 'chapter' | 'episode'
type Pin = [episode: number, chapter: number, value: string, source?: Unit]
type Timeline = [id: string, field: 'ability' | 'nen', pins: Pin[]]

// Fixed scene pins for the reviewed dossiers. Each ability value lists the
// links the character has by then.
const TIMELINES: Timeline[] = [
  [
    'kurapika',
    'ability',
    [
      [40, 68, 'dowsing-chain'],
      [44, 77, 'dowsing-chain chain-jail'],
      [47, 83, 'dowsing-chain chain-jail emperor-time', 'chapter'],
      [
        47,
        84,
        'dowsing-chain chain-jail emperor-time holy-chain judgment-chain',
      ],
    ],
  ],
  [
    'kurapika',
    'nen',
    [
      [39, 67, 'unknown', 'chapter'],
      [39, 67, 'conjurer', 'episode'],
      [47, 83, 'conjurer', 'chapter'],
    ],
  ],
  ['hisoka', 'ability', [[32, 54, 'bungee-gum texture-surprise']]],
  [
    'hisoka',
    'nen',
    [
      [28, 47, 'unknown'],
      [35, 60, 'transmuter'],
    ],
  ],
  ['zeno', 'ability', [[52, 99, 'dragon-head dragon-lance']]],
  ['zeno', 'nen', [[52, 99, 'unknown']]],
  [
    'gido',
    'ability',
    [
      [29, 49, 'battle-waltz'],
      [30, 50, 'battle-waltz tornado-top'],
      [34, 58, 'battle-waltz tornado-top shotgun-blues'],
    ],
  ],
  [
    'gido',
    'nen',
    [
      [29, 49, 'unknown'],
      [35, 60, 'enhancer'],
    ],
  ],
  ['riehlvelt', 'ability', [[34, 59, 'aura-burst']]],
  ['riehlvelt', 'nen', [[34, 59, 'unknown']]],
  ['kastro', 'ability', [[31, 53, 'tiger-bite-fist']]],
  [
    'kastro',
    'nen',
    [
      [31, 52, 'unknown'],
      [35, 60, 'enhancer'],
    ],
  ],
  ['basho', 'ability', [[40, 68, 'great-hiker']]],
  [
    'basho',
    'nen',
    [
      [40, 68, 'unknown', 'chapter'],
      [40, 68, 'conjurer', 'episode'],
    ],
  ],
  ['baise', 'ability', [[40, 68, 'instant-lover']]],
  [
    'baise',
    'nen',
    [
      [40, 68, 'unknown', 'episode'],
      [40, 68, 'manipulator', 'chapter'],
    ],
  ],
  ['shachmono-tocino', 'ability', [[40, 68, 'eleven-black-children']]],
  [
    'shachmono-tocino',
    'nen',
    [
      [40, 68, 'unknown'],
      [43, 73, 'emitter', 'chapter'],
    ],
  ],
  ['neon-nostrade', 'ability', [[41, 71, 'lovely-ghostwriter']]],
  [
    'neon-nostrade',
    'nen',
    [
      [41, 71, 'unknown'],
      [55, 110, 'specialist', 'chapter'],
    ],
  ],
  ['machi', 'ability', [[41, 71, 'nen-stitches']]],
  [
    'machi',
    'nen',
    [
      [41, 71, 'unknown'],
      [47, 78, 'transmuter', 'chapter'],
    ],
  ],
  ['shizuku', 'ability', [[43, 73, 'blinky']]],
  [
    'shizuku',
    'nen',
    [
      [43, 73, 'unknown'],
      [45, 77, 'conjurer', 'chapter'],
    ],
  ],
  ['uvogin', 'ability', [[44, 76, 'big-bang-impact']]],
  [
    'uvogin',
    'nen',
    [
      [44, 75, 'unknown'],
      [46, 79, 'enhancer', 'chapter'],
    ],
  ],
  ['franklin', 'ability', [[44, 76, 'double-machine-gun']]],
  [
    'franklin',
    'nen',
    [
      [44, 76, 'unknown', 'episode'],
      [44, 76, 'emitter', 'chapter'],
    ],
  ],
  ['shalnark', 'ability', [[53, 98, 'black-voice']]],
  [
    'shalnark',
    'nen',
    [
      [53, 98, 'unknown'],
      [54, 102, 'manipulator', 'chapter'],
    ],
  ],
  ['owl', 'ability', [[45, 77, 'fun-fun-cloth']]],
  ['owl', 'nen', [[45, 77, 'unknown']]],
  ['pakunoda', 'ability', [[56, 112, 'memory-bomb']]],
  [
    'pakunoda',
    'nen',
    [
      [50, 92, 'unknown'],
      [55, 105, 'specialist', 'chapter'],
    ],
  ],
  ['kortopi', 'ability', [[53, 100, 'gallery-fake']]],
  [
    'kortopi',
    'nen',
    [
      [53, 100, 'unknown'],
      [54, 103, 'conjurer', 'chapter'],
    ],
  ],
  [
    'chrollo',
    'ability',
    [
      [54, 97, 'skill-hunter indoor-fish', 'chapter'],
      [54, 99, 'skill-hunter indoor-fish fun-fun-cloth', 'chapter'],
      [54, 104, 'skill-hunter indoor-fish fun-fun-cloth lovely-ghostwriter'],
    ],
  ],
  [
    'chrollo',
    'nen',
    [
      [54, 97, 'unknown'],
      [54, 98, 'specialist', 'chapter'],
    ],
  ],
]

const UNITS: Unit[] = ['episode', 'chapter']

function ownerOf(
  id: string,
): NonNullable<ReturnType<typeof ARCHIVE.getEntity>> {
  const owner = ARCHIVE.getEntity(id)
  if (owner === undefined) {
    throw new Error(`Missing dossier: ${id}`)
  }
  return owner
}

describe.each(TIMELINES)('%s’s %s timeline', (id, field, pins) => {
  const cases = UNITS.flatMap((unit) =>
    pins
      .filter((pin) => pin[3] === undefined || pin[3] === unit)
      .map(([episode, chapter, value], index, reached) => ({
        unit,
        at: unit === 'episode' ? episode : chapter,
        before: reached[index - 1]?.[2],
        after: value,
      })),
  )

  it.each(cases)('changes at $unit $at', ({ unit, at, before, after }) => {
    const owner = ownerOf(id)

    const valueAt = (count: number): unknown => {
      const bookmark =
        unit === 'episode' ?
          { mode: 'episode' as const, episode: count }
        : { mode: 'chapter' as const, chapter: count }
      const reader = readerFor(ARCHIVE, bookmark, 'en')
      const value = reader.archive.latestOf(reader, owner, field)
      return Array.isArray(value) ? value.join(' ') : value
    }

    expect(valueAt(at - 1)).toStrictEqual(before)
    expect(valueAt(at)).toStrictEqual(after)
  })
})
