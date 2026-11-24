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
): { href: string; rel: 'modulepreload' }[] {
  return (chunks?.[name] ?? []).map((href) => ({ rel: 'modulepreload', href }))
}
