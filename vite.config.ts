import { cloudflare } from '@cloudflare/vite-plugin'
import stylex, { type UserOptions } from '@stylexjs/unplugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'

// @stylexjs/unplugin declares every bundler factory as `(options?) => any`, so
// an unannotated call turns the whole `plugins` array into `any[]`. This is the
// one place the untyped upstream factory is touched; naming its return type
// here keeps the rest of the file, and the array, checked.
const stylexVite: (options?: Partial<UserOptions>) => Plugin = stylex.vite

// Each locale's copy is a chunk that nothing imports statically, so Start's
// route manifest leaves it out of the document's module preloads and the page
// asks for it only once the entry has run (#1575). The client build, which
// runs first, names the chunks; the Worker build then reads them back as
// `import.meta.env.DICTIONARY_CHUNKS` for the root route's head. Dev and
// tests leave it undefined, and the head adds no link.
const dictionaryChunks = (): Plugin[] => {
  const urls: Record<string, string> = {}
  const token = 'import.meta.env.DICTIONARY_CHUNKS'
  return [
    {
      name: 'dictionary-chunks:name',
      applyToEnvironment: (environment) => environment.name === 'client',
      generateBundle(_options, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (
            chunk.type === 'chunk'
            && chunk.facadeModuleId?.includes('/i18n/dictionaries/') === true
          ) {
            urls[chunk.name] = `/${chunk.fileName}`
          }
        }
      },
    },
    {
      name: 'dictionary-chunks:inline',
      applyToEnvironment: (environment) => environment.name === 'ssr',
      transform: (code) =>
        code.includes(token) ?
          {
            code: code.replaceAll(token, () => JSON.stringify(urls)),
            map: null,
          }
        : undefined,
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
    dictionaryChunks(),
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
