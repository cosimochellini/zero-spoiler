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
import { manifests, manifestText } from './make-icons.mjs'

const PUBLIC = path.join(ROOT, 'public')

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
