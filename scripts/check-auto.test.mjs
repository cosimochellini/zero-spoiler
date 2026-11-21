// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { pickCheck } from './check-auto.mjs'

describe('pickCheck', () => {
  it('runs the full check below the core count', () => {
    expect(pickCheck(11.99, 12)).toEqual({
      script: 'check',
      env: {},
      line: 'check:auto ran `npm run check`: one-minute load 11.99 < 12 cores',
    })
  })

  it('runs the content check on two workers from the core count up', () => {
    expect(pickCheck(12, 12)).toEqual({
      script: 'check:content',
      env: { VITEST_MAX_WORKERS: '2' },
      line: 'check:auto ran `VITEST_MAX_WORKERS=2 npm run check:content`: one-minute load 12.00 >= 12 cores',
    })
  })
})
