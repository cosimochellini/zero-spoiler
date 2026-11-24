import { cloudflare } from '@cloudflare/vite-plugin'
import stylex, { type UserOptions } from '@stylexjs/unplugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig, type Plugin, type Rollup } from 'vite'

import { LOCALES } from './src/i18n/locales'
import { LANDING_CHUNKS } from './src/lib/chunks'

// @stylexjs/unplugin declares every bundler factory as `(options?) => any`, so
// an unannotated call turns the whole `plugins` array into `any[]`. This is the
// one place the untyped upstream factory is touched; naming its return type
// here keeps the rest of the file, and the array, checked.
const stylexVite: (options?: Partial<UserOptions>) => Plugin = stylex.vite

// The chunks a page asks for with `import()`: each locale's copy, and the two
// branches of the series landing. Nothing imports them statically, so Start's
// route manifest leaves them out of the document's module preloads and the page
// asks for them only once the entry has run (#1575, #1573). The client build,
// which runs first, names the chunks; the Worker build then reads them back as
// `import.meta.env.PRELOADED_CHUNKS` for the heads that link them
// (src/lib/chunks.ts). Dev and tests leave it undefined, and the heads add no
// link; a build whose client half missed one fails rather than ship pages
// without the preload.
const PRELOADED = new Map(
  [
    // Only the shared copy: a series' own `en.ts` sits a folder deeper.
    ...LOCALES.map((locale) => `i18n/dictionaries/${locale}.ts`),
    ...Object.values(LANDING_CHUNKS).map((name) => `components/${name}.tsx`),
  ].map((file) => [
    path.join(import.meta.dirname, 'src', file),
    // A chunk is named after its file: `en`, `HomeLanding`.
    path.parse(file).name,
  ]),
)

// A chunk and everything it imports statically. A module preload fetches the
// chunk alone, so the imports it names are asked for once it has run, a round
// trip later than the document's own.
const closureOf = (start: string, imports: Map<string, string[]>): string[] => {
  const files = new Set<string>()
  const visit = (file: string): void => {
    const direct = imports.get(file)
    if (direct === undefined || files.has(file)) {
      return
    }
    files.add(file)
    for (const imported of direct) {
      visit(imported)
    }
  }
  visit(start)
  return [...files]
}

// The URLs of the wanted chunks, each with what it imports that the entry does
// not already bring.
const chunkUrls = (bundle: Rollup.OutputBundle): Map<string, string[]> => {
  const chunks = Object.values(bundle).filter(
    (output) => output.type === 'chunk',
  )
  const imports = new Map(
    chunks.map((chunk) => [chunk.fileName, chunk.imports]),
  )
  const eager = new Set(
    chunks
      .filter((chunk) => chunk.isEntry)
      .flatMap((chunk) => closureOf(chunk.fileName, imports)),
  )
  const urls = new Map<string, string[]>()
  for (const chunk of chunks) {
    const name = PRELOADED.get(chunk.facadeModuleId ?? '')
    if (name !== undefined) {
      urls.set(
        name,
        closureOf(chunk.fileName, imports)
          .filter((file) => !eager.has(file))
          .map((file) => `/${file}`),
      )
    }
  }
  return urls
}

const preloadedChunks = (): Plugin[] => {
  let urls = new Map<string, string[]>()
  const token = 'import.meta.env.PRELOADED_CHUNKS'
  return [
    {
      name: 'preloaded-chunks:name',
      applyToEnvironment: (environment) => environment.name === 'client',
      generateBundle: (_options, bundle) => {
        urls = chunkUrls(bundle)
      },
    },
    {
      name: 'preloaded-chunks:inline',
      apply: 'build',
      applyToEnvironment: (environment) => environment.name === 'ssr',
      transform: (code) => {
        if (!code.includes(token)) {
          return null
        }
        // The client build runs first and names the chunks; without them
        // a page would lose its preload with nothing failing.
        if (urls.size < PRELOADED.size) {
          throw new Error(
            `the client build named ${String(urls.size)} of ${String(PRELOADED.size)} preloaded chunks`,
          )
        }
        return {
          code: code.replaceAll(token, () =>
            JSON.stringify(Object.fromEntries(urls)),
          ),
          map: null,
        }
      },
    },
  ]
}

const config = defineConfig(({ command }) => ({
  server: { port: 3000 },
  build: { manifest: true },
  // The Cloudflare plugin already emits the Worker's source maps by default;
  // asked for here because gate:archive reads each server chunk's modules from
  // its map (scripts/archive-server-gate.mjs) and fails without one.
  environments: { ssr: { build: { sourcemap: true } } },
  resolve: {
    // Native Vite 8 option (ResolveOptions.tsconfigPaths).
    // vite-tsconfig-paths is not needed.
    tsconfigPaths: true,
  },
  plugins: [
    // StyleX carries `enforce: 'pre'` internally, so it transforms before
    // React Refresh and its `generateBundle` runs before Start's
    // `enforce: 'post'` manifest capture. That ordering is load-bearing:
    // StyleX appends the compiled CSS to the emitted stylesheet and re-emits
    // it under a new content hash, and Start must read the new filename.
    // Listed first so the array matches the order the hooks actually run in.
    stylexVite({
      // Wrap the output in `@layer` so src/styles/global.css can sit in a
      // layer underneath it. Unlayered CSS beats layered CSS, so the reset
      // has to be layered too -- see the comment in that file.
      useCSSLayers: true,
      // StyleX appends its CSS after Vite has minified the stylesheet, so it
      // has to be minified here or it ships indented, one declaration a line.
      // Build only, so the dev stylesheet stays readable.
      lightningcssOptions: { minify: command === 'build' },
      // Serve only /virtual:stylex.css in dev. 'full' would also install an
      // HTML-rewriting middleware, which has nothing to attach to here: the
      // root route renders the document itself, there is no index.html.
      devMode: 'css-only',
      // Start runs the client and ssr environments in one process, so the
      // in-memory rule store is already shared. Persisting to
      // node_modules/.stylex/rules.json is the belt to that pair of braces.
      devPersistToDisk: true,
      // Required, not cosmetic: the plugin only records rules for the CSS
      // endpoint when runtime injection is off, and an SSR app must not
      // depend on a client-side style injector.
      runtimeInjection: false,
      // The StyleX compiler resolves `defineVars` imports itself and knows
      // nothing about tsconfig `paths`, so the `~/` alias has to be repeated
      // here or every `~/styles/tokens.stylex` import fails to compile with
      // "Could not resolve the path to the imported file".
      aliases: { '~/*': [path.join(import.meta.dirname, 'src', '*')] },
    }),
    preloadedChunks(),
    tanstackStart(),
    // React's Vite plugin MUST come after Start's Vite plugin. Start no longer
    // auto-configures the React plugin, and the old `customViteReactPlugin`
    // option no longer exists.
    viteReact(),
    // Dev and preview run the server inside workerd, the same runtime as
    // production. The plugin bundles every dependency into the Worker, so
    // Vite writes React's production build in at build time.
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
  ],
}))

export default config
