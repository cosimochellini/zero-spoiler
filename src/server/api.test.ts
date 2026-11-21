import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { ENDPOINTS } from './archive/payloads.server'

/**
 * Each wrapper in `api.ts`, as its source reads: Vitest has no Start plugin,
 * so a wrapper cannot be called here, and its text is all there is to check.
 * A block runs from one `export const` to the next.
 */
const BLOCKS = readFileSync(path.join(import.meta.dirname, 'api.ts'), 'utf8')
  .split(/^export const /mu)
  .slice(1)
  .map((block) => [block.slice(0, block.indexOf(' ')), block] as const)
const WRAPPERS = new Map(BLOCKS)

const alphabetically = (a: string, b: string): number => a.localeCompare(b)

describe('every wrapper in api.ts', () => {
  it('is one entry of the table, and the table holds nothing else', () => {
    expect(BLOCKS.map(([name]) => name).toSorted(alphabetically)).toStrictEqual(
      Object.keys(ENDPOINTS).toSorted(alphabetically),
    )
  })

  it.each(Object.entries(ENDPOINTS))(
    '%s validates its own entry’s input and serves its own entry, no other',
    (name, { input }) => {
      const block = WRAPPERS.get(name) ?? ''

      // The validator names the entry's shape rather than reading the entry,
      // so the route chunk does not load every projection (see `api.ts`).
      expect(block).toContain(`.validator(INPUTS.${input})`)
      expect(block).toContain(`serve(ENDPOINTS.${name}, data)`)
      expect(block.match(/\bINPUTS\.\w+/gu)).toStrictEqual([`INPUTS.${input}`])
      expect(block.match(/\bENDPOINTS\.\w+/gu)).toStrictEqual([
        `ENDPOINTS.${name}`,
      ])
    },
  )
})
