import { describe, expect, it } from 'vitest'

import { entities } from '~/data/series/one-piece/entities'
import { archiveIn } from '~/data/source'
import { foldName } from '~/lib/search/fold'
import {
  opEntityForHandle as entityForHandle,
  opHandleOf as handleOf,
  OP_ARCHIVE,
} from '~/test/archive'
import { loadedSeries } from '~/test/series'

import * as handles from './handle.server'

// A base-64 chunk is four characters; a lone trailing character carries no
// whole byte, and `atob` refuses such a chunk rather than dropping it.
const CHUNK = 4
const decoder = new TextDecoder()

/**
 * A handle read as if it were base64 — the way a lenient decoder reads it, so
 * a handle of any length can be held against the id it stands for.
 */
function asBase64Text(value: string): string {
  const spare = value.length % CHUNK === 1 ? 1 : 0
  const bytes = Uint8Array.from(
    atob(value.slice(0, value.length - spare)),
    (character) => character.codePointAt(0) ?? 0,
  )

  return decoder.decode(bytes)
}

/**
 * A covered record's id is its name slug, so the handle that stands in for it
 * must spell nothing. These hold that over the whole archive rather than over
 * a sample: one handle that happened to be `btoa(id)` would undo the change.
 */
describe('the handle a covered record hands back', () => {
  it('never spells the record it stands for', () => {
    for (const entity of entities) {
      const handle = handleOf(entity.id)

      expect(handle, entity.id).not.toContain(entity.id)
      // A "handle" that is only the id in disguise is not a handle.
      expect(asBase64Text(handle), entity.id).not.toContain(entity.id)

      for (const name of Object.values(entity.name)) {
        expect(handle, entity.id).not.toContain(
          foldName(name).replaceAll(/\s/gu, ''),
        )
      }
    }
  })

  it('gives one distinct handle per record, and resolves it back', () => {
    const minted = entities.map((entity) => handleOf(entity.id))
    const distinct = new Set(minted)

    expect(distinct.size).toBe(entities.length)

    for (const [at, handle] of minted.entries()) {
      expect(entityForHandle(handle)).toBe(entities[at])
    }
  })

  it('does not depend on the unit the reader counts in', () => {
    // A handle is an identity, not a position in the reader's list: three
    // handles per record would mean a peeked record changed identity the
    // moment the reader switched units.
    const first = entities.map((entity) => handleOf(entity.id))
    const second = entities.map((entity) => handleOf(entity.id))

    expect(second).toStrictEqual(first)
  })

  it('fails closed on anything that is not one of its own', () => {
    for (const rubbish of [
      '',
      '-1',
      'zzzzzz',
      'nami',
      '../../etc/passwd',
      '1e3',
      'Infinity',
      '1.5',
      ' 1',
    ]) {
      expect(entityForHandle(rubbish), rubbish).toBeUndefined()
    }
  })

  it('refuses to mint one for a record the archive does not hold', () => {
    expect(() => handleOf('nobody')).toThrow(/nobody/u)
  })
})

/** The first record of a list, or the test is wrong. */
function firstOf<T>([first]: T[]): T {
  if (first === undefined) {
    throw new Error('An archive files nothing')
  }
  return first
}

describe('a handle minted in a marked copy (#1431)', () => {
  const plain = archiveIn(OP_ARCHIVE, 'chapter')
  const marked = handles.markedCopy(plain, 'chapter')
  const hxh = loadedSeries('hunter-x-hunter').archive
  const hxhMarked = handles.markedCopy(archiveIn(hxh, 'episode'), 'episode')

  it('carries its source after the series, and is the same copy each time', () => {
    const first = firstOf(plain.entities)
    const hxhFirst = firstOf(hxh.entities)

    expect(handles.markedCopy(plain, 'chapter')).toBe(marked)
    expect(handles.handleOf(first.id, marked)).toMatch(/^c:[\da-z]{1,4}$/u)
    expect(handles.handleOf(hxhFirst.id, hxhMarked)).toMatch(
      /^hunter-x-hunter:e:[\da-z]{1,4}$/u,
    )
    expect(handles.markOf('c:0', OP_ARCHIVE)).toBe('chapter')
    expect(handles.markOf('hunter-x-hunter:e:0', hxh)).toBe('episode')
    expect(handles.markOf('0', OP_ARCHIVE)).toBeUndefined()
    expect(handles.markOf('hunter-x-hunter:0', hxh)).toBeUndefined()
  })

  it('resolves only in the copy that minted it, and a plain one only in a plain copy', () => {
    for (const entity of plain.entities) {
      const mine = handles.handleOf(entity.id, marked)
      const theirs = handles.handleOf(entity.id, plain)

      expect(handles.entityForHandle(mine, marked)).toBe(entity)
      expect(handles.entityForHandle(mine, plain)).toBeUndefined()
      expect(handles.entityForHandle(theirs, marked)).toBeUndefined()
    }
  })
})
