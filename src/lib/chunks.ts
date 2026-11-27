/**
 * The landing's two branches, by the name their files give their chunks
 * (`components/<name>.tsx`). One spelling for the config, which finds the
 * files by it, and for the head that asks for them: a name that drifts from
 * its file leaves the build short of a chunk, which fails it.
 */
export const LANDING_CHUNKS = {
  home: 'HomeLanding',
  onboarding: 'OnboardingLanding',
} as const

/** One `<link>` that fetches a chunk. */
export interface PreloadLink {
  href: string
  rel: 'modulepreload'
}

/**
 * The `<head>` links that fetch a chunk beside the entry: the chunk and the
 * chunks it imports. Start's route manifest holds only what a route imports
 * statically, so a chunk the page asks for with `import()` would start
 * downloading once the entry has run, and its own imports a round trip after
 * that; `preloadChunk` names them in the document instead. `preloadedChunks`
 * in vite.config.ts says which chunks, and gives their URLs in the Worker
 * build; dev and tests have none, so there are no links.
 * @param name The chunk, by the name its file gives it.
 * @param chunks The URLs the build named, by chunk; a test hands its own.
 */
export function preloadChunk(
  name: string,
  chunks: Record<string, string[]> | undefined = import.meta.env
    .PRELOADED_CHUNKS,
): PreloadLink[] {
  return (chunks?.[name] ?? []).map((href) => ({ rel: 'modulepreload', href }))
}
