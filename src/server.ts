import {
  createServerEntry,
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'

import { syncStoreFromEnv } from '~/server/sync/kv'
import { syncedFetch } from '~/server/sync/request'

const handler = createStartHandler(defaultStreamHandler)

/**
 * The Worker's entry: Start's default one, plus a `Link` header (#932).
 *
 * A Worker cannot write a `103 Early Hints` itself. Cloudflare caches the
 * `rel=preload` links of a page's last 200 and sends them as a `103` on the
 * next request to the same address, before the Worker answers, so the
 * stylesheet and the fonts the root route preloads download while a cold
 * start runs.
 * Start collects the links and leaves them off redirects and `vite dev`.
 *
 * Only stylesheets and fonts. They are the same on every page and for
 * every reader, so a hint cached per address can never be someone else's.
 * The route's module preloads stay out: they differ per route and would
 * compete with the fonts at high priority.
 */
const entry = createServerEntry({
  fetch: async (request) =>
    handler(request, {
      responseLinkHeader: {
        filter: ({ hint }) => hint.as === 'style' || hint.as === 'font',
      },
    }),
})

/**
 * What workerd calls: the bookmark sync (#1560) around Start. The store is
 * the KV namespace bound as `SYNC`; without the binding, as under Vitest,
 * every request goes straight to Start.
 */
const worker = {
  fetch: async (request: Request, env?: unknown): Promise<Response> =>
    syncedFetch(request, syncStoreFromEnv(env), async (forwarded) =>
      entry.fetch(forwarded),
    ),
}

// eslint-disable-next-line import-x/no-default-export -- workerd runs the default export of the module wrangler.jsonc's `main` names.
export default worker
