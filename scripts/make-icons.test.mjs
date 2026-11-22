// @vitest-environment node
//
// The web app manifests and icons are committed, drawn by
// `node scripts/make-icons.mjs` (#1517). This fails when a series opens, is
// renamed or changes colour without the script being run again, and when the
// head names a file that is not there.
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

import { importArchive, ROOT } from './archive-loader.mjs'
import { iconSvg, manifests, manifestText } from './make-icons.mjs'

const PUBLIC = path.join(ROOT, 'public')

const EMBLEM = [
  { d: 'M0 0 L1 1' },
  { d: 'M2 2 L3 3', role: 'soft' },
  { d: 'M4 4 L5 5', role: 'accent' },
  { d: 'M6 6 L7 7', role: 'ambient' },
  { d: 'M8 8 L9 9' },
]
const PALETTE = { paper3: '#000001', ink: '#000002', accent: '#000003' }
const CUT = { box: [0, 0, 10], omit: [4], omitSmall: [0] }

describe('iconSvg', () => {
  it('keeps the plain and accent strokes on a tab icon, never the rest', () => {
    const tab = iconSvg(EMBLEM, PALETTE, CUT, 'small')
    expect(tab).toContain('M4 4 L5 5" stroke="#000003"')
    for (const left of ['M0 0', 'M2 2', 'M6 6', 'M8 8']) {
      expect(tab).not.toContain(left)
    }
  })

  it('adds the soft strokes, under the others, on a home-screen icon', () => {
    const home = iconSvg(EMBLEM, PALETTE, CUT, 'large')
    expect(home.indexOf('M2 2')).toBeLessThan(home.indexOf('M0 0'))
    expect(home).not.toContain('M6 6')
    expect(home).toContain('rx="7"')
  })

  it('fills the square of a maskable icon, for the launcher to crop', () => {
    expect(iconSvg(EMBLEM, PALETTE, CUT, 'maskable')).toContain('rx="0"')
  })
})

describe('make-icons', () => {
  it('has run since the last change to a manifest', async () => {
    const files = await manifests()
    for (const [file, manifest] of files) {
      expect(
        readFileSync(path.join(PUBLIC, 'icons', file), 'utf8'),
        `public/icons/${file}: run node scripts/make-icons.mjs`,
      ).toBe(manifestText(manifest))
    }
  })

  it('draws every file the head and the manifests name', async () => {
    const { OPEN_SERIES } = await importArchive('data/series/index.ts')
    const { LOCALES } = await importArchive('i18n/locales.ts')
    const { appHead } = await importArchive('lib/appIcons.ts')
    const named = new Set()
    const pages = [null, ...OPEN_SERIES.map((entry) => entry.description)]
    for (const locale of LOCALES) {
      for (const series of pages) {
        for (const { href } of appHead(series, locale).links) {
          named.add(href)
        }
      }
    }
    const files = await manifests()
    for (const manifest of files.values()) {
      for (const { src } of manifest.icons) {
        named.add(src)
      }
    }
    for (const href of named) {
      expect(existsSync(path.join(PUBLIC, href)), href).toBe(true)
    }
  })
})
